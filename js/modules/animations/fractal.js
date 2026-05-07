'use strict';

// ============================================
// FRACTAL BACKGROUND — Aurora WebGL2 (.cta-section)
//
// Fuente: fractal.html (referencia). Esta versión adapta la lógica al
// contenedor .cta-section sin alterar el alma visual del original.
//
// 7 passes (mismos shaders que el original, con una sola diferencia):
//   1. FBM warp (3 bandas verticales aurora)
//   2. Flow field (Perlin warp del UV, reactivo al cursor)
//   3,4,5. Blur vertical Gaussiano (×6, ×12, ×18)
//   6. Gradient map — uColor0/1/2 inyectados como uniforms para que el
//      paleta acompañe al tema (dark/light) en lugar de hardcodear.
//   7. Blinds (rebanadas verticales con dominio rotado)
//
// Adaptaciones para integración como fondo de sección:
//   • Sizing por contenedor (.cta-section.clientWidth/clientHeight)
//     vía ResizeObserver — no se ata a window.innerWidth.
//   • Cursor relativo al rect del canvas; al salir de la sección el
//     target vuelve al centro (parallax sólo dentro del CTA).
//   • IntersectionObserver pausa el render cuando la sección está
//     fuera del viewport — cero GPU cost mientras no se ve.
//   • Tema dark/light leído de [data-theme]; MutationObserver mantiene
//     los color stops sincronizados con el toggle del usuario.
//   • prefers-reduced-motion: render de 1 frame estático, sin loop.
//   • DPR cap a 1.5 — calidad suficiente sin reventar GPUs móviles.
//   • Idempotente vía data-fractal-ready en el canvas.
// ============================================

export function initFractalBackground() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const canvas = document.getElementById('cta-fractal-canvas');
    if (!canvas) return;
    if (canvas.dataset.fractalReady === 'true') return;
    canvas.dataset.fractalReady = 'true';

    const section = canvas.closest('.cta-section') || canvas.parentElement;
    if (!section) return;

    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false });
    if (!gl) return;

    const ext = gl.getExtension('EXT_color_buffer_float');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = 0.5, mouseY = 0.5;
    let targetX = 0.5, targetY = 0.5;
    const startTime = performance.now();
    let isVisible = false;
    let rafId = null;

    // ─── Theme colors (dark/light) ──────────────────────────────────────
    let colorStops = readThemeColors();

    function readThemeColors() {
        const theme = document.documentElement.dataset.theme || 'dark';
        if (theme === 'light') {
            // light: #F5F5F5 → soft mint → --color-accent (#00B85C)
            return {
                c0: [0.961, 0.961, 0.961],
                c1: [0.40, 0.78, 0.65],
                c2: [0.0, 0.722, 0.361],
            };
        }
        // dark (default): #0D0D0D → #004D28 → bright neon (#00FF84)
        return {
            c0: [0.051, 0.051, 0.051],
            c1: [0.0, 0.302, 0.157],
            c2: [0.0, 1.0, 0.518],
        };
    }

    // ─── Mouse: relative to canvas rect; recenters on leave ─────────────
    section.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        targetX = (e.clientX - rect.left) / rect.width;
        targetY = 1.0 - (e.clientY - rect.top) / rect.height;
    });
    section.addEventListener('mouseleave', () => {
        targetX = 0.5;
        targetY = 0.5;
    });

    // ─── Vertex shader (shared by all passes) ───────────────────────────
    const VS = `#version 300 es
        layout(location = 0) in vec2 aPos;
        out vec2 vUv;
        void main() {
            vUv = aPos * 0.5 + 0.5;
            gl_Position = vec4(aPos, 0.0, 1.0);
        }`;

    // ─── Common noise functions (inlined per shader) ────────────────────
    const NOISE_GLSL = `
        vec3 hash33(vec3 p) {
            p = fract(p * vec3(0.1031, 0.11369, 0.13787));
            p += dot(p, p.yxz + 19.19);
            return -1.0 + 2.0 * fract(vec3((p.x+p.y)*p.z, (p.x+p.z)*p.y, (p.y+p.z)*p.x));
        }
        float perlin(vec3 p) {
            vec3 pi = floor(p), pf = p - pi;
            vec3 w = pf*pf*(3.0-2.0*pf);
            float n000 = dot(pf-vec3(0,0,0), hash33(pi+vec3(0,0,0)));
            float n100 = dot(pf-vec3(1,0,0), hash33(pi+vec3(1,0,0)));
            float n010 = dot(pf-vec3(0,1,0), hash33(pi+vec3(0,1,0)));
            float n110 = dot(pf-vec3(1,1,0), hash33(pi+vec3(1,1,0)));
            float n001 = dot(pf-vec3(0,0,1), hash33(pi+vec3(0,0,1)));
            float n101 = dot(pf-vec3(1,0,1), hash33(pi+vec3(1,0,1)));
            float n011 = dot(pf-vec3(0,1,1), hash33(pi+vec3(0,1,1)));
            float n111 = dot(pf-vec3(1,1,1), hash33(pi+vec3(1,1,1)));
            return mix(mix(mix(n000,n100,w.x), mix(n010,n110,w.x), w.y),
                       mix(mix(n001,n101,w.x), mix(n011,n111,w.x), w.y), w.z);
        }
        mat2 rotHalf = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        float fbm(vec3 st) {
            float val = 0.0, amp = 0.25;
            float aM = 0.1 + 0.01 * 0.65;
            vec2 shift = vec2(100.0);
            for (int i = 0; i < 6; i++) {
                val += amp * perlin(st);
                st.xy *= rotHalf * 2.5;
                st.xy += shift;
                amp *= aM;
            }
            return val;
        }
        mat2 rot(float a) { return mat2(cos(a),-sin(a),sin(a),cos(a)); }`;

    // ─── Pass 1: Three FBM-warped aurora bands across canvas width ──────
    const FBM_FS = `#version 300 es
        precision highp float;
        in vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uRes;
        out vec4 fragColor;
        const float PI = 3.14159265359;
        ${NOISE_GLSL}
        void main() {
            vec2 uv = vUv;
            float ar = uRes.x / uRes.y;
            float mult = 4.0 * (1.566 / ((ar + 1.0) / 2.0));
            vec2 mPos = vec2(0.45142, 0.56914) + (uMouse - 0.5) * 0.55;
            vec2 st = (uv - mPos) * vec2(ar, 1.0) * mult * ar;
            st = rot(0.3348 * -2.0 * PI) * st;
            vec2 drift = vec2(0.0, uTime * 0.005);
            float seed = 0.66 * 25.0 + uTime * 0.025;
            vec2 r = vec2(fbm(vec3(st - drift + vec2(1.7, 9.2), seed)),
                          fbm(vec3(st - drift + vec2(8.2, 1.3), seed)));
            float f = fbm(vec3(st + r - drift, seed));
            float warpX = (f * 2.0 + r.x) * 0.30;
            float wx = uv.x + warpX;
            float yFade = smoothstep(0.0, 0.18, uv.y) * smoothstep(1.0, 0.82, uv.y);
            float dx1 = (wx - 0.12) * 7.0;
            float dx2 = (wx - 0.50) * 7.0;
            float dx3 = (wx - 0.86) * 7.0;
            float b1 = exp(-0.5 * dx1 * dx1) * 0.22;
            float b2 = exp(-0.5 * dx2 * dx2) * 0.19;
            float b3 = exp(-0.5 * dx3 * dx3) * 0.16;
            float val = clamp((b1 + b2 + b3) * yFade, 0.0, 0.24);
            fragColor = vec4(vec3(val), 1.0);
        }`;

    // ─── Pass 2: Flow field (Perlin-based UV warp, cursor-reactive) ─────
    const FLOW_FS = `#version 300 es
        precision highp float;
        in vec2 vUv;
        uniform sampler2D uTex;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uRes;
        out vec4 fragColor;
        const float PI = 3.14159265359;
        ${NOISE_GLSL}
        vec2 flowField(vec2 st) {
            float ar = uRes.x / max(uRes.y, 0.001);
            vec2 av = vec2(ar, 1.0);
            vec2 mPos = vec2(0.5) + (uMouse - 0.5);
            vec2 invPos = 1.0 - mPos;
            float sprd = 1.52 / ((ar + 1.0) / 2.0);
            float amt = 0.02;
            float freq = 5.0 * sprd;
            float t = 0.95 + uTime * 0.0166;
            float rad = 360.0 * 5.994 * PI / 180.0;
            for (int i = 0; i < 8; i++) {
                vec2 sc = clamp(st, -1.0, 2.0);
                vec2 s2 = (sc - 0.5) * av + invPos;
                float p = perlin(vec3((s2 - 0.5) * freq, t)) - 0.5;
                st += vec2(cos(p * rad), sin(p * rad)) * amt;
            }
            return clamp(st, 0.0, 1.0);
        }
        void main() {
            vec2 uv = vUv;
            fragColor = texture(uTex, mix(uv, flowField(uv), 0.51));
        }`;

    // ─── Pass 3/4/5: Vertical Gaussian blur ─────────────────────────────
    const BLUR_FS = `#version 300 es
        precision highp float;
        in vec2 vUv;
        uniform sampler2D uTex;
        uniform vec2 uRes;
        uniform float uAmount;
        out vec4 fragColor;
        void main() {
            vec2 uv = vUv;
            vec4 color = vec4(0.0);
            float totalW = 0.0;
            float sigma = 9.0;
            float amount = uAmount * (uRes.x / uRes.y);
            for (int i = 0; i < 36; i++) {
                float xi = float(i) - 17.5;
                float w = exp(-0.5 * xi * xi / (sigma * sigma));
                float offset = xi * amount * 0.001;
                color += texture(uTex, uv + vec2(0.0, offset)) * w;
                totalW += w;
            }
            fragColor = color / totalW;
        }`;

    // ─── Pass 6: Gradient map (theme-aware via uColor0/1/2 uniforms) ────
    const GRADIENT_FS = `#version 300 es
        precision highp float;
        in vec2 vUv;
        uniform sampler2D uTex;
        uniform float uTime;
        uniform vec3 uColor0;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        out vec4 fragColor;

        float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
        float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
        vec3 fromSRGB(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
        vec3 toSRGB(vec3 c)   { return pow(max(c, vec3(0.0)), vec3(1.0/2.2)); }
        vec3 cbrt3(vec3 v)    { return sign(v) * pow(abs(v), vec3(1.0/3.0)); }

        vec3 oklabMix(vec3 a, vec3 b, float t) {
            const mat3 to = mat3(
              0.4121656120, 0.2118591070, 0.0883097947,
              0.5362752080, 0.6807189584, 0.2818474174,
              0.0514575653, 0.1074065790, 0.6302613616);
            const mat3 fr = mat3(
               4.0767245293, -1.2681437731, -0.0041119885,
              -3.3072168827,  2.6093323231, -0.7034763098,
               0.2307590544, -0.3411344290,  1.7068625689);
            vec3 l1 = cbrt3(to * a), l2 = cbrt3(to * b);
            vec3 l  = mix(l1, l2, t);
            l *= 1.0 + 0.02 * t * (1.0 - t);
            return fr * (l * l * l);
        }

        vec3 gradColor(float pos) {
            pos = clamp(pos, 0.0, 1.0);
            float s0 = 0.20, s1 = 0.72, s2 = 1.0;
            if (pos <= s1) {
                float f = clamp((pos - s0) / (s1 - s0), 0.0, 1.0);
                return toSRGB(oklabMix(fromSRGB(uColor0), fromSRGB(uColor1), f));
            }
            float f = clamp((pos - s1) / (s2 - s1), 0.0, 1.0);
            return toSRGB(oklabMix(fromSRGB(uColor1), fromSRGB(uColor2), f));
        }

        void main() {
            vec4 col = texture(uTex, vUv);
            float L = luma(col.rgb);
            float ap = smoothstep(0.01, 0.23, L) * 0.78 + 0.10;
            ap += sin(uTime * 0.07) * 0.04;
            ap = clamp(ap, 0.10, 0.90);
            vec3 gc = gradColor(ap);
            gc += rand(gl_FragCoord.xy) * 0.005;
            fragColor = vec4(gc, col.a);
        }`;

    // ─── Pass 7: Blinds (vertical strips with rotated domain) ───────────
    const BLINDS_FS = `#version 300 es
        precision highp float;
        in vec2 vUv;
        uniform sampler2D uTex;
        uniform float uTime;
        uniform vec2 uRes;
        out vec4 fragColor;
        const float PI = 3.14159265359;
        mat2 rot(float a) { return mat2(cos(a),-sin(a),sin(a),cos(a)); }

        struct SF { vec2 st; vec3 d; };

        SF style0(vec2 st, vec2 pos, float div, float dist, float amt) {
            float ar = uRes.x / uRes.y;
            float seg = fract((st.y + 1.0 - pos.y - 1.0 + uTime * 0.01) * div);
            vec3 f1 = vec3(1,0,0), f2 = vec3(0,1,0), f3 = vec3(0,0,1);
            vec3 d = mix(mix(f1, f2, seg*2.0), mix(f2, f3, (seg-0.5)/0.5), step(0.5, seg));
            st.y -= pow(d.r, dist) / 10.0 * amt;
            st.y += pow(d.b, dist) / 10.0 * amt;
            st = rot(0.25 * 2.0 * PI) * (st - pos) + pos;
            st *= vec2(1.0 / ar, 1.0);
            return SF(st, d);
        }

        void main() {
            vec2 uv = vUv;
            float ar = uRes.x / uRes.y;
            vec2 pos = vec2(0.5) * vec2(ar, 1.0);
            vec2 st = uv * vec2(ar, 1.0);
            st = rot(0.25 * -2.0 * PI) * (st - pos) + pos;
            float div = 2.0 + 0.77 * 30.0;
            float dist = 1.0;
            float amt = 0.46;
            vec2 tx = dFdx(st) * 1.5, ty = dFdy(st) * 1.5;
            SF r0 = style0(st,      pos, div, dist, amt);
            SF r1 = style0(st + tx, pos, div, dist, amt);
            SF r2 = style0(st + ty, pos, div, dist, amt);
            SF r3 = style0(st - tx, pos, div, dist, amt);
            SF r4 = style0(st - ty, pos, div, dist, amt);
            vec2 off = (r0.st + r1.st + r2.st + r3.st + r4.st) / 5.0;
            fragColor = texture(uTex, off);
        }`;

    // ─── Compile / link ─────────────────────────────────────────────────
    function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error('[fractal] shader compile error:', gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    function link(fsSrc) {
        const vert = compile(gl.VERTEX_SHADER, VS);
        const frag = compile(gl.FRAGMENT_SHADER, fsSrc);
        if (!vert || !frag) return null;
        const p = gl.createProgram();
        gl.attachShader(p, vert);
        gl.attachShader(p, frag);
        gl.linkProgram(p);
        if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
            console.error('[fractal] program link error:', gl.getProgramInfoLog(p));
            return null;
        }
        gl.deleteShader(vert);
        gl.deleteShader(frag);
        return p;
    }

    const progFBM    = link(FBM_FS);
    const progFlow   = link(FLOW_FS);
    const progBlur   = link(BLUR_FS);
    const progGrad   = link(GRADIENT_FS);
    const progBlinds = link(BLINDS_FS);
    if (!progFBM || !progFlow || !progBlur || !progGrad || !progBlinds) return;

    // ─── Full-screen quad (shared) ──────────────────────────────────────
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    // ─── FBO helpers ────────────────────────────────────────────────────
    function makeFBO(w, h) {
        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        const internalFmt = ext ? gl.RGBA16F : gl.RGBA8;
        const type = ext ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE;
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFmt, w, h, 0, gl.RGBA, type, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return { fbo, tex, w, h };
    }
    function deleteFBO(f) {
        if (!f) return;
        gl.deleteTexture(f.tex);
        gl.deleteFramebuffer(f.fbo);
    }

    let fboA = null, fboB = null, fboC = null;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        // Lee del canvas — su CSS lo extiende a 100vw (escapa al max-width
        // de 1440px de la sección), y la altura sigue al contenedor.
        const cssW = canvas.clientWidth;
        const cssH = canvas.clientHeight;
        if (cssW <= 0 || cssH <= 0) return;
        const w = Math.max(1, Math.floor(cssW * dpr));
        const h = Math.max(1, Math.floor(cssH * dpr));
        if (canvas.width === w && canvas.height === h) return;
        canvas.width = w;
        canvas.height = h;
        deleteFBO(fboA); deleteFBO(fboB); deleteFBO(fboC);
        fboA = makeFBO(w, h);
        fboB = makeFBO(w, h);
        fboC = makeFBO(w, h);
    }
    resize();

    // Observamos el canvas (ancho ligado a 100vw, altura a la sección).
    // Window resize cambia el ancho del canvas — ResizeObserver lo capta.
    const ro = new ResizeObserver(() => {
        resize();
        if (reduceMotion) renderOnce();
    });
    ro.observe(canvas);

    // ─── Uniform helpers ────────────────────────────────────────────────
    function u1f(p, name, v)      { const l = gl.getUniformLocation(p, name); if (l !== null) gl.uniform1f(l, v); }
    function u2f(p, name, x, y)   { const l = gl.getUniformLocation(p, name); if (l !== null) gl.uniform2f(l, x, y); }
    function u3f(p, name, x, y, z){ const l = gl.getUniformLocation(p, name); if (l !== null) gl.uniform3f(l, x, y, z); }
    function u1i(p, name, v)      { const l = gl.getUniformLocation(p, name); if (l !== null) gl.uniform1i(l, v); }

    function draw(prog, inTex, outFbo, setUniforms) {
        gl.useProgram(prog);
        gl.bindVertexArray(vao);
        if (inTex !== null) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, inTex);
            u1i(prog, 'uTex', 0);
        }
        setUniforms(prog);
        if (outFbo) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, outFbo.fbo);
            gl.viewport(0, 0, outFbo.w, outFbo.h);
        } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    // ─── Render passes ──────────────────────────────────────────────────
    function renderPasses(t) {
        if (!fboA || !fboB || !fboC) return;
        const w = canvas.width;
        const h = canvas.height;

        // Pass 1 — FBM bands → fboA
        draw(progFBM, null, fboA, p => {
            u1f(p, 'uTime', t);
            u2f(p, 'uMouse', mouseX, mouseY);
            u2f(p, 'uRes', w, h);
        });
        // Pass 2 — Flow field → fboB
        draw(progFlow, fboA.tex, fboB, p => {
            u1f(p, 'uTime', t);
            u2f(p, 'uMouse', mouseX, mouseY);
            u2f(p, 'uRes', w, h);
        });
        // Pass 3 — Blur ×6 → fboA
        draw(progBlur, fboB.tex, fboA, p => {
            u2f(p, 'uRes', w, h);
            u1f(p, 'uAmount', 6.0);
        });
        // Pass 4 — Blur ×12 → fboC
        draw(progBlur, fboA.tex, fboC, p => {
            u2f(p, 'uRes', w, h);
            u1f(p, 'uAmount', 12.0);
        });
        // Pass 5 — Blur ×18 → fboA
        draw(progBlur, fboC.tex, fboA, p => {
            u2f(p, 'uRes', w, h);
            u1f(p, 'uAmount', 18.0);
        });
        // Pass 6 — Gradient (theme-aware) → fboB
        draw(progGrad, fboA.tex, fboB, p => {
            u1f(p, 'uTime', t);
            u3f(p, 'uColor0', colorStops.c0[0], colorStops.c0[1], colorStops.c0[2]);
            u3f(p, 'uColor1', colorStops.c1[0], colorStops.c1[1], colorStops.c1[2]);
            u3f(p, 'uColor2', colorStops.c2[0], colorStops.c2[1], colorStops.c2[2]);
        });
        // Pass 7 — Blinds → screen
        draw(progBlinds, fboB.tex, null, p => {
            u1f(p, 'uTime', t);
            u2f(p, 'uRes', w, h);
        });
    }

    function renderOnce() {
        const t = (performance.now() - startTime) * 0.001;
        renderPasses(t);
    }

    // ─── Render loop (only while visible) ───────────────────────────────
    function frame(now) {
        if (!isVisible) {
            rafId = null;
            return;
        }
        rafId = requestAnimationFrame(frame);
        mouseX += (targetX - mouseX) * 0.10;
        mouseY += (targetY - mouseY) * 0.10;
        const t = (now - startTime) * 0.001;
        renderPasses(t);
    }

    // ─── IntersectionObserver: pause when off-screen ────────────────────
    const io = new IntersectionObserver((entries) => {
        const visible = entries.some(e => e.isIntersecting);
        if (visible === isVisible) return;
        isVisible = visible;
        if (isVisible && !rafId && !reduceMotion) {
            rafId = requestAnimationFrame(frame);
        }
    }, { threshold: 0 });
    io.observe(section);

    // ─── Theme observer ─────────────────────────────────────────────────
    const mo = new MutationObserver(() => {
        colorStops = readThemeColors();
        if (reduceMotion) renderOnce();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ─── Reduced motion: render single static frame ─────────────────────
    if (reduceMotion) {
        renderOnce();
    }
}
