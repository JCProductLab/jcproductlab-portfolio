'use strict';

// ============================================
// ABOUT BIO (sobre-mi.html "Sobre mí") — misma coreografía scrub-driven
// que about-section-reveal.js (index.html "Quién soy"): mask-reveal de
// label (wipe izq→der) + título (yPercent 150→0), universal para
// desktop/tablet/mobile (sin matchMedia, mismo criterio que el
// original). scrub:1 da el reverse gratis al subir.
//
// El párrafo (.about-bio__mask) NO usa el split por línea de
// about-section — acá es un contenedor pineado/scrolleable propio
// (pinned-overflow-section.js anima .about-bio__track por separado),
// así que el reveal de entrada es el de CONTENEDOR completo (fade +
// y) que ya usa el resto del sitio (ver logos-reveal.js mobile /
// cta-section-reveal.js __text) — mismo mecanismo, sin inventar nada
// nuevo. Anima .about-bio__mask (no .about-bio__track) a propósito:
// el track ya tiene su propio translateY controlado por el pin —
// tocar la misma propiedad en el mismo elemento desde dos módulos
// distintos pelearía por el control de `y`.
// ============================================

export function initAboutBioReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.about-bio');
    if (!section) return;

    const header = section.querySelector('.section-header');
    const label = header?.querySelector('.section-header__label');
    const title = header?.querySelector('.section-header__title');
    const mask = section.querySelector('.about-bio__mask');

    // ── Wrap idempotente para mask-reveal del header (idéntico a
    // about-section-reveal.js / cta-section-reveal.js / testimonial-
    // cards-reveal.js) ────────────────────────────────────────────
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

    // ── Estados iniciales ────────────────────────────────────────────
    if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
    if (titleInner) gsap.set(titleInner, { yPercent: 150 });
    if (mask) gsap.set(mask, { y: 40, opacity: 0 });

    // ── Posiciones del timeline (proporciones bajo scrub) — mismos
    // valores que about-section-reveal.js para label/título. ────────
    const LABEL_DUR = 0.6;
    const TITLE_START = 0.2;
    const TITLE_DUR = 0.8;
    const MASK_START = TITLE_START + TITLE_DUR; // 1.0
    const MASK_DUR = 0.7;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: '+=70%',
            scrub: 1,
        },
    });

    if (labelInner) {
        tl.to(labelInner, { xPercent: 0, opacity: 1, duration: LABEL_DUR, ease: 'power3.out' }, 0);
    }
    if (titleInner) {
        tl.to(titleInner, { yPercent: 0, duration: TITLE_DUR, ease: 'power4.out' }, TITLE_START);
    }
    if (mask) {
        tl.to(mask, { y: 0, opacity: 1, duration: MASK_DUR, ease: 'power3.out' }, MASK_START);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
