# Decision 2 — Clone subsections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clonar las subsecciones faltantes de Decisión 1 (La Decisión + El Razonamiento) para Decisión 2, con contenido placeholder idéntico y lógica de animación exacta.

**Architecture:** Tres capas — HTML (pin spacers + secciones), CSS (alturas + descriptores D2), JS (Gate B D2 + Gate D D2 + Gate 2 D2). El JS se añade al final del archivo, después del bloque de El Problema 2 (línea 2614). Todos los selectores cambian de `[data-dec="1"]` a `[data-dec="2"]`; variables con sufijo `2` o prefijo `r2`.

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

---

## Task 1: HTML — Pin Spacers

**Files:**
- Modify: `caso-asdeporte.html:321`

- [ ] **Step 1: Añadir los dos pin spacers de D2 faltantes**

En `caso-asdeporte.html`, después de la línea:
```html
        <div class="cs-pin-spacer cs-pin-spacer--decision-2-problema" data-phase="decision-2-problema"></div>
```
Añadir:
```html
        <div class="cs-pin-spacer cs-pin-spacer--decision-2-ladecision"   data-phase="decision-2-ladecision"></div>
        <div class="cs-pin-spacer cs-pin-spacer--decision-2-razonamiento" data-phase="decision-2-razonamiento"></div>
```

- [ ] **Step 2: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(d2): añadir pin spacers ladecision-2 y razonamiento-2"
```

---

## Task 2: HTML — Secciones de contenido

**Files:**
- Modify: `caso-asdeporte.html:745` (después de `</section>` del cs-problema D2, antes de `</main>`)

- [ ] **Step 1: Insertar cs-decision-mc[data-dec="2"]**

Después del cierre de `cs-problema[data-dec="2"]` (línea ~745, antes de `</main>`), insertar:
```html
        <!-- ============================================ -->
        <!-- LA DECISIÓN 2 — clon de La Decisión 1.      -->
        <!-- Contenido placeholder: se reemplazará.       -->
        <!-- ============================================ -->
        <section class="cs-decision-mc" data-dec="2" aria-label="La decisión 2 del caso">
            <h3 class="cs-decision-text cs-decision-mc__title">[ La decisión ]</h3>

            <div class="cs-decision-mc__stage">
                <span class="cs-decision-mc__ring" aria-hidden="true"></span>
                <div class="cs-decision-mc__media">
                    <img class="cs-decision-mc__img"
                         src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&h=800&fit=crop"
                         alt="" />
                </div>
                <div class="cs-decision-mc__text-wrap">
                    <p class="cs-decision-mc__text cs-body-xxl">Propuse mover Tribu fuera del MVP y redirigir todos esos recursos al motor de búsqueda y al flujo de pago. En una sala donde el CEO ya imaginaba la campaña de lanzamiento, esa propuesta generó un silencio que se sintió muy largo.</p>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Insertar cs-razonamiento[data-dec="2"]**

Inmediatamente después de la sección anterior (antes de `</main>`), insertar:
```html
        <!-- ============================================ -->
        <!-- EL RAZONAMIENTO 2 — clon del Razonamiento 1. -->
        <!-- Contenido placeholder: se reemplazará.       -->
        <!-- ============================================ -->
        <section class="cs-razonamiento" data-dec="2" aria-label="El razonamiento de Decisión 2">

            <div class="cs-razonamiento__fixed">
                <h3 class="cs-decision-text cs-razonamiento__label">[ El razonamiento ]</h3>
                <div class="cs-razonamiento__metric" data-screen="1">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">90.8%</span>
                </div>
                <div class="cs-razonamiento__metric" data-screen="2">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">65%</span>
                </div>
                <div class="cs-razonamiento__metric" data-screen="3">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">5%</span>
                </div>
            </div>

            <div class="cs-razonamiento__rail">
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="1">De usuarios abandonaba antes de completar una inscripción. No tenía sentido invertir en funcionalidad social cuando la caja registradora tenía una fuga de ese tamaño.</p>
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="2">De los tickets de soporte eran por fallos en pagos. Cero tickets pedían mejoras sociales.</p>
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="3">Tasa de interacción de &lsquo;Tribu&rsquo;. La mayoría de los atletas ya usaba Strava para rendimiento y WhatsApp para comunidad. No teníamos una comunidad, teníamos un pueblo fantasma.</p>
            </div>

            <div class="cs-razonamiento__conclusion">
                <p class="cs-body-xxl-italic cs-razonamiento__conclusion-body">&ldquo;El argumento se cerró solo. No podíamos competir en un terreno que ya habíamos perdido. Primero había que ganarse el derecho de hablar con el usuario&hellip;</p>
                <p class="cs-body-xxl-italic cs-razonamiento__conclusion-final">arreglando el pago.&rdquo;</p>
            </div>
        </section>
```

- [ ] **Step 3: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(d2): añadir secciones cs-decision-mc y cs-razonamiento para decisión 2"
```

---

## Task 3: CSS — Pin spacers + descriptores D2

**Files:**
- Modify: `css/decisiones-responsive.css:68` (después de la regla de `decision-2-problema`)

- [ ] **Step 1: Añadir alturas de pin spacers y override de descriptores D2**

En `css/decisiones-responsive.css`, después de:
```css
    .cs-pin-spacer--decision-2-problema { height: 100vh; }
```
Añadir:
```css
    .cs-pin-spacer--decision-2-ladecision  { height: 100vh; }
    .cs-pin-spacer--decision-2-razonamiento { height: 100vh; }

    /* Descriptores de Razonamiento 2 — usan custom props propias
       para no pisarse con las de Razonamiento 1. El JS escribe
       --razon2-desc2-top y --razon2-desc3-top en cada init. */
    .cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="2"] {
        top: var(--razon2-desc2-top, 135.56%);
    }
    .cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="3"] {
        top: var(--razon2-desc3-top, 332%);
    }
```

- [ ] **Step 2: Commit**
```bash
git add css/decisiones-responsive.css
git commit -m "feat(d2): añadir CSS pin spacers y descriptores para razonamiento 2"
```

---

## Task 4: JS — Gate B D2 + Gate D D2

**Files:**
- Modify: `js/caso-asdeporte.js:2614` (al final del archivo, después del cierre de El Problema 2 ST)

- [ ] **Step 1: Añadir el bloque completo de Gate B D2 + Gate D D2**

Al final de `js/caso-asdeporte.js`, después de la llave de cierre de la función `initDecisiones2Problema()` o el último `});` del ST de El Problema 2 (línea 2614), añadir:

```js
    // ============================================
    // Gate B D2 — Cortina vertical de "La Decisión 2"
    // Gate D D2 — Animaciones internas de La Decisión 2
    // Clon exacto de Gate B D1 + Gate D D1.
    // Anclado a problemaST2.end.
    // ============================================

    const problemaST2 = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-2-problema')
    );

    const decisionImg2     = document.querySelector('.cs-decision-mc[data-dec="2"] .cs-decision-mc__img');
    const decisionMedia2   = document.querySelector('.cs-decision-mc[data-dec="2"] .cs-decision-mc__media');
    const decisionRing2    = document.querySelector('.cs-decision-mc[data-dec="2"] .cs-decision-mc__ring');
    const decisionText2    = document.querySelector('.cs-decision-mc[data-dec="2"] .cs-decision-mc__text');
    const decisionTextWrap2 = document.querySelector('.cs-decision-mc[data-dec="2"] .cs-decision-mc__text-wrap');
    const ORIGINAL_TEXT2   = decisionText2 ? decisionText2.textContent : '';

    let decisionTextLines2 = [];

    const splitDecisionText2 = (p) => {
        if (!p) return [];
        if (p.dataset.lineSplitReady === 'true') {
            const words = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
            const groups = {};
            words.forEach((w) => {
                const i = w.dataset.lineIndex;
                (groups[i] ||= []).push(w);
            });
            return Object.keys(groups)
                .sort((a, b) => +a - +b)
                .map((k) => groups[k]);
        }
        const tokens = p.textContent.replace(/\s+/g, ' ').trim().split(' ');
        if (!tokens.length) return [];
        p.textContent = '';
        tokens.forEach((word, idx) => {
            if (idx > 0) p.appendChild(document.createTextNode(' '));
            const span = document.createElement('span');
            span.className = 'cs-decision-mc__word';
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, opacity';
            p.appendChild(span);
        });
        const wordEls = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
        const lineMap = new Map();
        wordEls.forEach((el) => {
            const top = Math.round(el.offsetTop);
            if (!lineMap.has(top)) lineMap.set(top, []);
            lineMap.get(top).push(el);
        });
        const sortedTops = Array.from(lineMap.keys()).sort((a, b) => a - b);
        const lines = sortedTops.map((top, i) => {
            const words = lineMap.get(top);
            words.forEach((w) => (w.dataset.lineIndex = String(i)));
            return words;
        });
        p.dataset.lineSplitReady = 'true';
        return lines;
    };

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            decisionTextLines2 = splitDecisionText2(decisionText2);
            ScrollTrigger.refresh();
        });
    } else {
        decisionTextLines2 = splitDecisionText2(decisionText2);
    }

    let resizeTimer2;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer2);
        resizeTimer2 = setTimeout(() => {
            if (!decisionText2) return;
            decisionText2.dataset.lineSplitReady = 'false';
            Array.from(decisionText2.querySelectorAll('.cs-decision-mc__word'))
                .forEach(w => w.remove());
            decisionText2.textContent = ORIGINAL_TEXT2;
            decisionTextLines2 = splitDecisionText2(decisionText2);
            ScrollTrigger.refresh();
        }, 200);
    });

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-2-ladecision',
        start: () => problemaST2 ? problemaST2.end : 0,
        end: () => '+=' + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 4;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            gsap.set('.cs-problema[data-dec="2"]', { y: -eased * vh });

            if (decisionMedia2) {
                const IMG_START = 0;
                const IMG_END   = 0.50;
                const imgP = gsap.utils.clamp(0, 1, (self.progress - IMG_START) / (IMG_END - IMG_START));
                const imgE = gsap.parseEase('power1.inOut')(imgP);
                const vw = window.innerWidth;
                const INIT_W = 400;
                const INIT_H = 560;
                const BORDER_RADIUS = 20;
                const newW = INIT_W + (vw - INIT_W) * imgE;
                const newH = INIT_H + (vh - INIT_H) * imgE;
                const newBR = BORDER_RADIUS * (1 - imgE);
                gsap.set(decisionMedia2, {
                    width: newW + 'px',
                    height: newH + 'px',
                    borderRadius: newBR + 'px',
                });
            }

            if (decisionRing2) {
                const ringP = gsap.utils.clamp(0, 1, (self.progress - 0) / 0.50);
                const ringEased = gsap.parseEase('power1.inOut')(ringP);
                const ringScale = 1.0 + (2.75 - 1.0) * ringEased;
                const ringRotation = 360 * ringP;
                const ringOpacity = gsap.utils.clamp(0, 1, 1 - Math.max(0, ringScale - 2.3) / (2.75 - 2.3));
                gsap.set(decisionRing2, {
                    x: -377,
                    y: -240,
                    scale: ringScale,
                    rotation: ringRotation,
                    opacity: ringOpacity,
                });
            }

            if (decisionTextWrap2) {
                const textP = gsap.utils.clamp(0, 1, (self.progress - 0.20) / 0.275);
                gsap.set(decisionTextWrap2, { opacity: textP });
                if (decisionTextLines2.length) {
                    const N = decisionTextLines2.length;
                    const STEP = 2 / (N + 1);
                    for (let i = 0; i < N; i++) {
                        const line = decisionTextLines2[i];
                        const nodeStart = i * STEP / 2;
                        const localP = gsap.utils.clamp(0, 1, (textP - nodeStart) / STEP);
                        const localEased = gsap.parseEase('power2.out')(localP);
                        gsap.set(line, {
                            x: 20 * (1 - localEased),
                            opacity: localEased
                        });
                    }
                }
            }

            if (self.progress >= 0.5) {
                const relP = (self.progress - 0.5) / 0.5;
                const easedRel = gsap.parseEase('power1.out')(relP);
                gsap.set('.cs-decision-mc[data-dec="2"]', { y: -easedRel * vh });
                gsap.set('.cs-razonamiento[data-dec="2"]', { y: vh - easedRel * vh });
                const razon2RailEl = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__rail');
                if (razon2RailEl) {
                    gsap.set(razon2RailEl, { y: 0.5 * vh });
                }
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d2): Gate B D2 + Gate D D2 — La Decisión 2 con cortina, imagen, ring, texto y relevo"
```

---

## Task 5: JS — Gate 2 D2 / Razonamiento 2

**Files:**
- Modify: `js/caso-asdeporte.js` (al final, después del bloque de Task 4)

- [ ] **Step 1: Añadir el bloque completo del Razonamiento 2**

Inmediatamente después del bloque de Task 4 (después del `});` que cierra el ST de Gate B D2), añadir:

```js
    // ============================================
    // Gate 2 D2 — El Razonamiento 2
    // Clon exacto del Razonamiento 1. Variables con
    // prefijo _r2 o sufijo 2. Custom props propias:
    // --razon2-desc2-top / --razon2-desc3-top.
    // razon2Final NO tiene exit animation (sin D3 todavía).
    // ============================================

    const _r2desc1 = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="1"]');
    const _r2desc2 = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="2"]');
    const _r2desc3 = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="3"]');
    const _r2dh1   = _r2desc1 ? _r2desc1.offsetHeight : 0;
    const _r2dh2   = _r2desc2 ? _r2desc2.offsetHeight : 0;
    const _r2dh3   = _r2desc3 ? _r2desc3.offsetHeight : 0;
    const _r2razonVh    = window.innerHeight;
    const _r2desc1TopPx = 0.5 * _r2razonVh;
    const _r2stepPx     = 0.8 * _r2razonVh + 120 + _r2dh1;
    const _r2desc2TopPx = _r2desc1TopPx + _r2stepPx;
    const _r2desc3TopPx = _r2desc2TopPx + _r2stepPx;

    const razon2Conclusion = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__conclusion');
    const razon2Label      = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__label');
    const razon2Body       = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__conclusion-body');
    const razon2Final      = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__conclusion-final');

    const _r2recorridoFase1Px      = 2.1 * _r2razonVh + 240 + 2 * _r2dh1;
    const _r2rielRecorridoFase2Px  = 0.5 * _r2razonVh + _r2dh3;
    const _r2conclusionHeaderHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')
    ) || 81;
    const _r2conclusionBaseTopInit  = _r2conclusionHeaderHeight + (_r2razonVh - _r2conclusionHeaderHeight) / 2;
    const _r2conclusionHeightInit   = razon2Conclusion ? razon2Conclusion.offsetHeight : 333;
    const _r2concOffsetPx           = 0;
    const _r2concRecorridoFase2Px   = _r2razonVh - _r2conclusionBaseTopInit + _r2concOffsetPx + _r2conclusionHeightInit / 2;
    const _r2recorridoFase2Px       = Math.max(_r2rielRecorridoFase2Px, _r2concRecorridoFase2Px);
    const _r2recorridoFase3Px       = 0.7 * _r2razonVh;
    const _r2recorridoFaseTotalPx   = _r2recorridoFase1Px + _r2recorridoFase2Px + _r2recorridoFase3Px;
    const _r2conclusionEntryStartRatio = _r2recorridoFase1Px / _r2recorridoFaseTotalPx;
    const _r2conclusionEntryEndRatio   = (_r2recorridoFase1Px + _r2recorridoFase2Px) / _r2recorridoFaseTotalPx;
    const _r2gestureStartRatio         = _r2conclusionEntryEndRatio;
    const PIN_LENGTH_VH2               = _r2recorridoFaseTotalPx / _r2razonVh;

    let _r2bodyExitDistance    = 0;
    let _r2finalToCenterDeltaX = 0;
    let _r2finalToCenterDeltaY = 0;
    let _r2finalTargetScale    = 1;
    let _r2gestureInitialized  = false;

    const _r2labelFadeStartRatio = (2.6 * _r2razonVh + 240 + 2 * _r2dh1) / _r2recorridoFaseTotalPx;
    const _r2labelFadeEndRatio   = 0.83;

    document.documentElement.style.setProperty('--razon2-desc2-top', _r2desc2TopPx + 'px');
    document.documentElement.style.setProperty('--razon2-desc3-top', _r2desc3TopPx + 'px');

    const ladeciST2 = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-2-ladecision')
    );

    const razon2Rail       = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__rail');
    const razon2Metric1    = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__metric[data-screen="1"]');
    const razon2Metric2    = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__metric[data-screen="2"]');
    const razon2Metric3    = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__metric[data-screen="3"]');
    const razon2Descriptor  = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="1"]');
    const razon2Descriptor2 = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="2"]');
    const razon2Descriptor3 = document.querySelector('.cs-razonamiento[data-dec="2"] .cs-razonamiento__descriptor[data-screen="3"]');

    let razon2DescriptorHeight = razon2Descriptor ? razon2Descriptor.offsetHeight : 0;
    let conclusion2BaseTopPx   = _r2conclusionHeaderHeight + (window.innerHeight - _r2conclusionHeaderHeight) / 2;

    if (razon2Rail)    { gsap.set(razon2Rail,    { y: window.innerHeight * 0.5 }); }
    if (razon2Metric1) { gsap.set(razon2Metric1, { opacity: 0 }); }
    if (razon2Metric2) { gsap.set(razon2Metric2, { opacity: 0 }); }
    if (razon2Metric3) { gsap.set(razon2Metric3, { opacity: 0 }); }
    if (razon2Conclusion) {
        gsap.set(razon2Conclusion, { top: (conclusion2BaseTopPx + _r2recorridoFase2Px) + 'px' });
    }

    function computeGesture2Constants() {
        if (!razon2Final) return;
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const textRange = document.createRange();
        textRange.selectNodeContents(razon2Final);
        const finalTextRect   = textRange.getBoundingClientRect();
        const finalTextWidth  = finalTextRect.width  || 1;
        const finalTextHeight = finalTextRect.height || 1;
        const scaleByWidth  = (vw * FINAL_SCALE_VW_RATIO) / finalTextWidth;
        const scaleByHeight = vh / finalTextHeight;
        _r2finalTargetScale = Math.min(scaleByWidth, scaleByHeight);
        const razon2FinalRect = razon2Final.getBoundingClientRect();
        _r2finalToCenterDeltaX = ((finalTextWidth - razon2FinalRect.width) / 2) * _r2finalTargetScale;
        const finalTextCenterY = finalTextRect.top + finalTextHeight / 2;
        _r2finalToCenterDeltaY = vh / 2 - finalTextCenterY;
        if (razon2Body) {
            const bodyRect = razon2Body.getBoundingClientRect();
            _r2bodyExitDistance = bodyRect.bottom + 50;
        }
    }

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-2-razonamiento',
        start: () => ladeciST2 ? ladeciST2.end : 0,
        end: () => '+=' + (window.innerHeight * PIN_LENGTH_VH2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onRefresh: () => {
            if (razon2Descriptor) {
                razon2DescriptorHeight = razon2Descriptor.offsetHeight;
            }
            if (razon2Rail) {
                gsap.set(razon2Rail, { y: window.innerHeight * 0.5 });
            }
            conclusion2BaseTopPx = _r2conclusionHeaderHeight + (window.innerHeight - _r2conclusionHeaderHeight) / 2;
            computeGesture2Constants();
        },
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh       = window.innerHeight;
            const recorrido = PIN_LENGTH_VH2 * vh;
            const contentP  = self.progress;

            const railY = 0.5 * vh - contentP * recorrido;

            if (razon2Rail) {
                gsap.set(razon2Rail, { y: 0.5 * vh });
                gsap.set(razon2Rail, { y: railY });
            }

            const _r2switchRailY_12 = -0.5 * vh;
            const _r2switchRailY_23 = -1.3 * vh - 120 - _r2dh1;

            const computeOpacity2 = (metricP) => {
                const FADE_IN_END    = 0.25;
                const FADE_OUT_START = 0.90;
                if (metricP < FADE_IN_END)     return metricP / FADE_IN_END;
                if (metricP <= FADE_OUT_START) return 1;
                return (1 - metricP) / (1 - FADE_OUT_START);
            };

            if (razon2Metric1) {
                const desc1TopInViewport = railY + 0.5 * vh;
                const metricP_1 = Math.max(0, Math.min(1, (vh - desc1TopInViewport) / vh));
                gsap.set(razon2Metric1, { opacity: computeOpacity2(metricP_1) });
            }
            if (razon2Metric2) {
                if (railY > _r2switchRailY_12) {
                    gsap.set(razon2Metric2, { opacity: 0 });
                } else {
                    const desc2TopInViewport = railY + 1.3 * vh + 120 + _r2dh1;
                    const metricP_2 = Math.max(0, Math.min(1, (vh - desc2TopInViewport) / vh));
                    gsap.set(razon2Metric2, { opacity: computeOpacity2(metricP_2) });
                }
            }
            if (razon2Metric3) {
                if (railY > _r2switchRailY_23) {
                    gsap.set(razon2Metric3, { opacity: 0 });
                } else {
                    const desc3TopInViewport = railY + 2.1 * vh + 240 + 2 * _r2dh1;
                    const metricP_3 = Math.max(0, Math.min(1, (vh - desc3TopInViewport) / vh));
                    gsap.set(razon2Metric3, { opacity: computeOpacity2(metricP_3) });
                }
            }

            if (razon2Conclusion) {
                const concInitialTop = conclusion2BaseTopPx + _r2recorridoFase2Px;
                if (contentP < _r2conclusionEntryStartRatio) {
                    gsap.set(razon2Conclusion, { top: concInitialTop + 'px' });
                } else if (contentP < _r2conclusionEntryEndRatio) {
                    const localP = (contentP - _r2conclusionEntryStartRatio) /
                                   (_r2conclusionEntryEndRatio - _r2conclusionEntryStartRatio);
                    gsap.set(razon2Conclusion, { top: (concInitialTop - _r2recorridoFase2Px * localP) + 'px' });
                } else {
                    gsap.set(razon2Conclusion, { top: conclusion2BaseTopPx + 'px' });
                }
            }

            if (razon2Label) {
                let labelOpacity = 1;
                if (contentP > _r2labelFadeStartRatio) {
                    const labelProgress = (contentP - _r2labelFadeStartRatio) /
                                          (_r2labelFadeEndRatio - _r2labelFadeStartRatio);
                    labelOpacity = Math.max(0, Math.min(1, 1 - labelProgress));
                }
                if (contentP > _r2gestureStartRatio) { labelOpacity = 0; }
                gsap.set(razon2Label, { opacity: labelOpacity });
            }

            if (contentP > _r2gestureStartRatio) {
                if (!_r2gestureInitialized) {
                    computeGesture2Constants();
                    _r2gestureInitialized = true;
                }
                const localP = (contentP - _r2gestureStartRatio) / (1 - _r2gestureStartRatio);
                if (razon2Body) {
                    gsap.set(razon2Body, { y: -_r2bodyExitDistance * localP });
                }
                if (razon2Final) {
                    gsap.set(razon2Final, {
                        x: _r2finalToCenterDeltaX * localP,
                        y: _r2finalToCenterDeltaY * localP,
                        scale: 1 + (_r2finalTargetScale - 1) * localP,
                    });
                }
            } else {
                _r2gestureInitialized = false;
                if (razon2Body)  { gsap.set(razon2Body,  { y: 0 }); }
                if (razon2Final) { gsap.set(razon2Final, { x: 0, y: 0, scale: 1 }); }
            }
        },
        onLeave: () => {
            if (razon2Body) {
                gsap.set(razon2Body, { y: -2 * window.innerHeight });
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d2): Gate 2 D2 — Razonamiento 2 con riel, métricas, conclusión y gesto final"
```

---

## Self-Review

**Spec coverage:**
- HTML pin spacers → Task 1 ✓
- HTML cs-decision-mc D2 → Task 2 ✓
- HTML cs-razonamiento D2 → Task 2 ✓
- CSS pin spacers → Task 3 ✓
- CSS descriptores D2 (custom props) → Task 3 ✓
- JS Gate B D2 (cortina + relevo) → Task 4 ✓
- JS Gate D D2 (imagen, ring, texto) → Task 4 ✓
- JS Gate 2 D2 (riel, métricas, conclusión, gesto) → Task 5 ✓
- razon2Final sin exit animation → correcto, solo onLeave oculta razon2Body ✓

**Placeholder scan:** Ninguno. Todo el código está completo.

**Type consistency:**
- `FINAL_SCALE_VW_RATIO` referenciado en Task 5: ya está declarado en el scope exterior por el código de D1 (línea ~1772). ✓
- `problemaST2` captura el ST de `decision-2-problema` (creado en Task anterior). ✓
- `ladeciST2` captura el ST de `decision-2-ladecision` (creado en Task 4). ✓
- `PIN_LENGTH_VH2` nombre único — no colisiona con `PIN_LENGTH_VH` de D1. ✓
- Custom props `--razon2-desc2-top` / `--razon2-desc3-top` distintas de las de D1. ✓
