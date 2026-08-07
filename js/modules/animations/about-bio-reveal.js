'use strict';

// ============================================
// ABOUT BIO (sobre-mi.html "Sobre mí") — misma coreografía scrub-driven
// que about-section-reveal.js (index.html "Quién soy"): mask-reveal de
// label (wipe izq→der) + título (yPercent 150→0), universal para
// desktop/tablet/mobile (sin matchMedia, mismo criterio que el
// original). scrub:1 da el reverse gratis al subir.
//
// El párrafo (.about-bio__mask) NO usa el split por línea de
// about-section — en tablet/desktop es un contenedor
// pineado/recortado propio (pinned-overflow-section.js anima
// .about-bio__track por separado), así que el reveal de entrada ahí
// es el de CONTENEDOR completo (fade + y) que ya usa el resto del
// sitio (ver logos-reveal.js mobile / cta-section-reveal.js __text).
// Anima .about-bio__mask (no .about-bio__track) a propósito: el
// track ya tiene su propio translateY controlado por el pin — tocar
// la misma propiedad en el mismo elemento desde dos módulos distintos
// pelearía por el control de `y`.
//
// Mobile (<700px) es distinto: ahí .about-bio no pinea (about.css lo
// deja en flujo natural, el párrafo completo entra con scroll normal
// de la página — ver ese bloque), así que no hay ningún `y` en pelea
// y cada <p> puede tener su propio ScrollTrigger independiente, mismo
// mecanismo que ya usa testimonial-cards-reveal.js para sus cards en
// mobile ("CADA card tiene su propio ScrollTrigger... dispara su
// entry cuando entra al viewport"): la misma animación (fade + y)
// pero escalonada y seguida al scroll, párrafo por párrafo, en vez de
// como un solo bloque.
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
    const paragraphs = Array.from(section.querySelectorAll('.about-bio__track > p'));

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

    const mm = gsap.matchMedia();

    mm.add(
        {
            isMobile: '(max-width: 699.98px)',
            isTabletDesktop: '(min-width: 700px)',
        },
        (context) => {
            const { isMobile } = context.conditions;

            // ── Estado inicial del header (común a ambos layouts) ────
            if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
            if (titleInner) gsap.set(titleInner, { yPercent: 150 });

            // ── Posiciones del timeline (proporciones bajo scrub) —
            // mismos valores que about-section-reveal.js para
            // label/título. ──────────────────────────────────────────
            const LABEL_DUR = 0.6;
            const TITLE_START = 0.2;
            const TITLE_DUR = 0.8;

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

            if (isMobile) {
                // Párrafo por párrafo, cada uno con su propio
                // ScrollTrigger — se revela al llegar a él, siguiendo
                // el scroll, en vez de como un solo bloque.
                if (paragraphs.length) {
                    gsap.set(paragraphs, { y: 40, opacity: 0 });
                    paragraphs.forEach((p) => {
                        gsap.timeline({
                            scrollTrigger: {
                                trigger: p,
                                start: 'top 85%',
                                end: 'top 50%',
                                scrub: 1,
                            },
                        }).to(p, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0);
                    });
                }
            } else if (mask) {
                const MASK_START = TITLE_START + TITLE_DUR; // 1.0
                const MASK_DUR = 0.7;
                gsap.set(mask, { y: 40, opacity: 0 });
                tl.to(mask, { y: 0, opacity: 1, duration: MASK_DUR, ease: 'power3.out' }, MASK_START);
            }
        }
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
