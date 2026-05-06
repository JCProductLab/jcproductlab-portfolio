'use strict';

// ============================================
// ABOUT SECTION — coreografía unificada scrub-driven
//
// CASCADE ENTRY:
//   1. Label  — wipe izquierda → derecha (mask-reveal__inner)
//   2. Title  — mask reveal vertical (yPercent 150 → 0)
//   3. Text   — fade + y:20 → 0, stagger por línea visual
//   4. Button — scale 0.5 → 1 + opacity (sobre wrapper neutro)
//
// scrub:1 garantiza reverse perfecto: al subir, button desaparece →
// líneas se ocultan en orden inverso → title baja → label sale.
//
// ── Conflicto magnetic.js (resuelto) ─────────────────────────────────
// magnetic.js escribe `transform: translate3d(...)` directamente sobre
// .btn--secondary cada frame. Escribir un transform de GSAP sobre el
// mismo nodo crearía una pelea de estilos. Solución: envolver el botón
// en un <span> al runtime y animar el WRAPPER (scale + opacity). El
// botón conserva su transform inline intacto, las queries de magnetic
// (por clase) siguen encontrándolo, y los rectángulos se componen
// naturalmente — sin tocar magnetic.js.
//
// ── Split de párrafo en líneas (sin SplitText) ───────────────────────
// Cada palabra se envuelve en <span class="about-word"> con display
// inline-block, luego se agrupan por offsetTop. Idempotente vía
// data-line-split-ready. textContent del párrafo permanece íntegro
// para SEO y screen readers.
// ============================================

export function initAboutSectionReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.about-section');
    if (!section) return;

    const header = section.querySelector('.section-header');
    const label  = header?.querySelector('.section-header__label');
    const title  = header?.querySelector('.section-header__title');
    const text   = section.querySelector('.about-section__text');
    const cta    = section.querySelector('.about-section__cta');

    // ── Wrap idempotente para mask-reveal del header ─────────────────
    const wrapInner = (el) => {
        if (!el) return null;
        if (el.dataset.maskReady === 'true') {
            return el.querySelector(':scope > .mask-reveal__inner');
        }
        const inner = document.createElement('span');
        inner.className = 'mask-reveal__inner';
        while (el.firstChild) inner.appendChild(el.firstChild);
        el.appendChild(inner);
        el.classList.add('mask-reveal');
        el.dataset.maskReady = 'true';
        return inner;
    };

    const labelInner = wrapInner(label);
    const titleInner = wrapInner(title);

    // ── Split del párrafo en líneas (idempotente, SEO-safe) ──────────
    const splitIntoLines = (p) => {
        if (!p) return [];

        if (p.dataset.lineSplitReady === 'true') {
            const words = Array.from(p.querySelectorAll('.about-word'));
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
        if (!tokens.length || (tokens.length === 1 && !tokens[0])) return [];

        p.textContent = '';
        tokens.forEach((word, idx) => {
            if (idx > 0) p.appendChild(document.createTextNode(' '));
            const span = document.createElement('span');
            span.className = 'about-word';
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, opacity';
            p.appendChild(span);
        });

        // Agrupar por offsetTop redondeado (líneas visuales)
        const wordEls = Array.from(p.querySelectorAll('.about-word'));
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

    const lines = splitIntoLines(text);

    // ── Wrap del botón (aislamiento del transform magnético) ─────────
    const wrapButton = (btn) => {
        if (!btn) return null;
        if (btn.parentElement?.dataset.ctaWrapReady === 'true') {
            return btn.parentElement;
        }
        const wrap = document.createElement('span');
        wrap.className = 'about-cta-wrap';
        wrap.dataset.ctaWrapReady = 'true';
        // Replica el flujo del flex-item original (.about-section__cta
        // tiene align-self: flex-start dentro de .about-section__body).
        wrap.style.display = 'inline-flex';
        wrap.style.alignSelf = 'flex-start';
        wrap.style.willChange = 'transform, opacity';
        wrap.style.transformOrigin = 'left center';
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);
        return wrap;
    };

    const ctaWrapper = wrapButton(cta);

    // ── Estados iniciales ────────────────────────────────────────────
    if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
    if (titleInner) gsap.set(titleInner, { yPercent: 150 });
    if (lines.length) gsap.set(lines.flat(), { y: 20, opacity: 0 });
    if (ctaWrapper) gsap.set(ctaWrapper, { scale: 0.5, opacity: 0, transformOrigin: 'left center' });

    // ── Posiciones del timeline (proporciones bajo scrub) ────────────
    const LABEL_DUR    = 0.6;
    const TITLE_START  = 0.2;
    const TITLE_DUR    = 0.8;
    const TEXT_START   = TITLE_START + TITLE_DUR;                                   // 1.0
    const LINE_DUR     = 0.5;
    const LINE_STAGGER = 0.18;
    const TEXT_END     = TEXT_START + LINE_STAGGER * Math.max(0, lines.length - 1) + LINE_DUR;
    const CTA_START    = Math.max(TEXT_END - 0.1, TEXT_START);                      // overlap suave
    const CTA_DUR      = 0.6;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            // Rango ~100%vh — la coreografía completa cabe en la zona
            // visible mientras la sección cruza el viewport.
            end: 'top -25%',
            scrub: 1,
        },
    });

    // ── ENTRY (cascade label → title → líneas → botón) ───────────────
    if (labelInner) {
        tl.to(labelInner, { xPercent: 0, opacity: 1, duration: LABEL_DUR, ease: 'power3.out' }, 0);
    }
    if (titleInner) {
        tl.to(titleInner, { yPercent: 0, duration: TITLE_DUR, ease: 'power4.out' }, TITLE_START);
    }
    lines.forEach((line, i) => {
        tl.to(line, {
            y: 0,
            opacity: 1,
            duration: LINE_DUR,
            ease: 'power3.out',
        }, TEXT_START + i * LINE_STAGGER);
    });
    if (ctaWrapper) {
        tl.to(ctaWrapper, {
            scale: 1,
            opacity: 1,
            duration: CTA_DUR,
            ease: 'back.out(1.4)',
        }, CTA_START);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
