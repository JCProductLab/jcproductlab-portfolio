'use strict';

// ============================================
// TESTIMONIAL SECTION — coreografía unificada scrub-driven
// Un único ScrollTrigger sobre la sección, una sola Timeline para todos
// los elementos: label, title y cards.
//
// CASCADE ENTRY (top → bottom):
//   1. Label  — wipe izquierda → derecha + opacity
//   2. Title  — mask-reveal vertical (reutiliza infraestructura .mask-reveal CSS)
//   3. Cards  — convergen desde los lados con escala y rotación
//
// CASCADE EXIT (bottom → top, espejo exacto del entry):
//   1. Cards  — se dispersan hacia los lados y se disuelven
//   2. Title  — mask-close hacia arriba
//   3. Label  — wipe de vuelta hacia la izquierda + opacity
//
// En reversa (scroll hacia arriba), la misma secuencia se ejecuta al revés:
// el usuario ve label/title aparecer mientras la sección baja desde arriba,
// luego las cards se ensamblan al centrar la sección.
//
// end: 'top -50%' → rango ~130%vh. El exit de cards (~-20%) y el exit de
// label/title (~-8%) ocurren mientras esos elementos aún son (parcialmente)
// visibles, garantizando que la coreografía se aprecia en ambas direcciones.
//
// • Desktop (≥1200px): cards se mueven en pareja, simétricamente.
// • Mobile  (<1200px): cards con stagger ligero (card 1 antes que card 2).
// ============================================

export function initTestimonialCardsReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.testimonial-section');
    if (!section) return;

    const header  = section.querySelector('.section-header');
    const label   = header?.querySelector('.section-header__label');
    const title   = header?.querySelector('.section-header__title');
    const cards   = Array.from(section.querySelectorAll('.testimonial-card'));
    if (!cards.length) return;

    // Wrap en .mask-reveal__inner (idempotente — mask-reveal.js omite esta sección).
    // El container (.mask-reveal) recibe overflow:hidden desde mask-reveal.css,
    // lo que convierte el xPercent/yPercent del inner en un wipe/reveal real.
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

    // Desactiva la transition CSS de transform durante el scrub para evitar
    // que pelee con GSAP a 60fps. Se restaura al salir del rango activo.
    const enterClass = 'testimonial-card--entering';
    const lockTransition   = (t) => (Array.isArray(t) ? t : [t]).forEach((c) => c.classList.add(enterClass));
    const releaseTransition = (t) => (Array.isArray(t) ? t : [t]).forEach((c) => c.classList.remove(enterClass));

    // ── Posiciones en el timeline (proporciones — bajo scrub sólo importa la ratio) ──
    //
    // ENTRY (cascade top → bottom):
    const LABEL_DUR         = 0.7;
    const TITLE_START       = 0.25;                      // label al 36%
    const TITLE_DUR         = 0.9;
    const CARDS_START       = 0.85;                      // title al 67%
    const CARDS_DUR         = 0.9;
    // REST breve con todo ensamblado:
    const REST_START        = CARDS_START + CARDS_DUR;   // 1.75
    const REST_DUR          = 0.4;
    // EXIT (cascade bottom → top):
    const EXIT_START        = REST_START + REST_DUR;     // 2.15
    const TITLE_EXIT_START  = EXIT_START  + 0.5;         // 2.65 — cards al 56%
    const LABEL_EXIT_START  = TITLE_EXIT_START + 0.45;   // 3.10 — title al 56%
    const TITLE_EXIT_DUR    = 0.8;
    const LABEL_EXIT_DUR    = 0.6;
    // Mobile: stagger ligero entre cards
    const MOBILE_STAGGER    = 0.25;

    const mm = gsap.matchMedia();

    mm.add(
        {
            isDesktop: '(min-width: 1200px)',
            isMobile:  '(max-width: 1199.98px)',
        },
        (context) => {
            const { isDesktop } = context.conditions;

            // ── Estados iniciales ─────────────────────────────────────────────
            if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
            if (titleInner) gsap.set(titleInner, { yPercent: 150 });

            if (isDesktop) {
                cards.forEach((card, i) => {
                    gsap.set(card, {
                        '--entry-y': '60px',
                        '--entry-scale': '0.5',
                        '--entry-x': i === 0 ? '-220px' : '220px',
                        '--entry-rotation': i === 0 ? '-30deg' : '30deg',
                        opacity: 0,
                    });
                });
            } else {
                cards.forEach((card) => {
                    gsap.set(card, {
                        '--entry-y': '60px',
                        '--entry-scale': '0.5',
                        '--entry-x': '0px',
                        '--entry-rotation': '0deg',
                        opacity: 0,
                    });
                });
            }

            // ── Timeline unificada ────────────────────────────────────────────
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    // start: sección asoma por el borde inferior del viewport
                    start: 'top 80%',
                    // end: ~130%vh de rango. El header sale por arriba (~top -8%)
                    // y las cards salen mientras aún son visibles (~top -20%).
                    end: 'top -50%',
                    scrub: 1,
                    onEnter:     () => lockTransition(cards),
                    onLeave:     () => releaseTransition(cards),
                    onEnterBack: () => lockTransition(cards),
                    onLeaveBack: () => releaseTransition(cards),
                },
            });

            // ── ENTRY CASCADE (label → title → cards) ─────────────────────────

            if (labelInner) {
                tl.to(labelInner, {
                    xPercent: 0,
                    opacity: 1,
                    duration: LABEL_DUR,
                    ease: 'power3.out',
                }, 0);
            }

            if (titleInner) {
                tl.to(titleInner, {
                    yPercent: 0,
                    duration: TITLE_DUR,
                    ease: 'power4.out',
                }, TITLE_START);
            }

            if (isDesktop) {
                tl.to(cards, {
                    '--entry-x': '0px',
                    '--entry-y': '0px',
                    '--entry-scale': '1',
                    '--entry-rotation': '0deg',
                    opacity: 1,
                    duration: CARDS_DUR,
                    ease: 'power3.out',
                }, CARDS_START);
            } else {
                cards.forEach((card, i) => {
                    tl.to(card, {
                        '--entry-y': '0px',
                        '--entry-scale': '1',
                        opacity: 1,
                        duration: CARDS_DUR,
                        ease: 'power3.out',
                    }, CARDS_START + i * MOBILE_STAGGER);
                });
            }

            // ── EXIT CASCADE (cards → title → label) ──────────────────────────

            if (isDesktop) {
                tl.to(cards, {
                    '--entry-x': (i) => (i === 0 ? '-300px' : '300px'),
                    '--entry-y': '-100px',
                    '--entry-scale': '0.5',
                    '--entry-rotation': (i) => (i === 0 ? '-30deg' : '30deg'),
                    opacity: 0,
                    duration: CARDS_DUR,
                    ease: 'power3.in',
                }, EXIT_START);
            } else {
                // Reverso del stagger: la card inferior sale primera al subir
                [...cards].reverse().forEach((card, i) => {
                    tl.to(card, {
                        '--entry-y': '-100px',
                        '--entry-scale': '0.5',
                        opacity: 0,
                        duration: CARDS_DUR,
                        ease: 'power3.in',
                    }, EXIT_START + i * MOBILE_STAGGER);
                });
            }

            if (titleInner) {
                tl.to(titleInner, {
                    yPercent: -150,
                    duration: TITLE_EXIT_DUR,
                    ease: 'power4.in',
                }, TITLE_EXIT_START);
            }

            if (labelInner) {
                tl.to(labelInner, {
                    xPercent: -100,
                    opacity: 0,
                    duration: LABEL_EXIT_DUR,
                    ease: 'power3.in',
                }, LABEL_EXIT_START);
            }
        }
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
