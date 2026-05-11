'use strict';

// ============================================
// TESTIMONIAL SECTION — coreografía dual scrub-driven
//
// Layout-aware: la lógica se bifurca por viewport.
//
// ── DESKTOP (>1024px) ────────────────────────────────────────────────
// Timeline unificada con UN ScrollTrigger sobre la sección.
// Cascada label → title → cards (entry); cards → title → label (exit).
// Las cards aparecen simultáneamente porque están en fila horizontal y
// la coreografía secuencial mantiene su ritmo.
//
// ── MOBILE (≤1024px) ─────────────────────────────────────────────────
// Cards apiladas verticalmente — cada una se ve en momentos distintos
// del scroll. La timeline global del header maneja sólo label + title;
// CADA card tiene su propio ScrollTrigger independiente que dispara
// su entry/exit cuando entra al viewport (start: 'top 85%').
// Esto evita que la 2ª card complete su animación off-screen mientras
// el usuario sigue mirando la 1ª.
//
// Ambos modos usan scrub:1 + start/end posicionales para que forward y
// reverse sean simétricos y siempre visibles dentro del viewport.
// ============================================

export function initTestimonialCardsReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.testimonial-section');
    if (!section) return;

    const header = section.querySelector('.section-header');
    const label = header?.querySelector('.section-header__label');
    const title = header?.querySelector('.section-header__title');
    const cards = Array.from(section.querySelectorAll('.testimonial-card'));
    if (!cards.length) return;

    // Wrap idempotente en .mask-reveal__inner — el container (.mask-reveal) recibe
    // overflow:hidden de mask-reveal.css, lo que convierte el xPercent/yPercent
    // del inner en un wipe/reveal real.
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

    // Desactiva la transition CSS de transform durante el scrub para que GSAP
    // (que escribe a 60fps) no pelee con la transition. Se restaura al salir.
    const enterClass = 'testimonial-card--entering';
    const lockTransition = (t) => (Array.isArray(t) ? t : [t]).forEach((c) => c.classList.add(enterClass));
    const releaseTransition = (t) => (Array.isArray(t) ? t : [t]).forEach((c) => c.classList.remove(enterClass));

    const mm = gsap.matchMedia();

    mm.add(
        {
            isDesktop: '(hover: hover) and (pointer: fine)',
            isMobile: '(pointer: coarse)',
        },
        (context) => {
            const { isDesktop } = context.conditions;

            // Estado inicial del header (común a ambos layouts)
            if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
            if (titleInner) gsap.set(titleInner, { yPercent: 150 });

            if (isDesktop) {
                buildDesktopTimeline();
            } else {
                buildMobileHeaderTimeline();
                buildMobileCardTriggers();
            }

            // ============================================================
            //  DESKTOP — timeline unificada
            // ============================================================
            function buildDesktopTimeline() {
                cards.forEach((card, i) => {
                    gsap.set(card, {
                        '--entry-y': '60px',
                        '--entry-scale': '0.5',
                        '--entry-x': i === 0 ? '-220px' : '220px',
                        '--entry-rotation': i === 0 ? '-30deg' : '30deg',
                        opacity: 0,
                    });
                });

                // Timing relativo (sólo proporciones bajo scrub)
                const LABEL_DUR = 0.7;
                const TITLE_START = 0.25;
                const TITLE_DUR = 0.9;
                const CARDS_START = 0.85;
                const CARDS_DUR = 0.9;
                const REST_DUR = 0.4;
                const EXIT_START = CARDS_START + CARDS_DUR + REST_DUR;     // 2.15
                const TITLE_EXIT_START = EXIT_START + 0.5;                       // 2.65
                const LABEL_EXIT_START = TITLE_EXIT_START + 0.45;                // 3.10
                const TITLE_EXIT_DUR = 0.8;
                const LABEL_EXIT_DUR = 0.6;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        end: 'top -90%',
                        scrub: 1,
                        onEnter: () => lockTransition(cards),
                        onLeave: () => releaseTransition(cards),
                        onEnterBack: () => lockTransition(cards),
                        onLeaveBack: () => releaseTransition(cards),
                    },
                });

                // ENTRY: label → title → cards
                if (labelInner) {
                    tl.to(labelInner, { xPercent: 0, opacity: 1, duration: LABEL_DUR, ease: 'power3.out' }, 0);
                }
                if (titleInner) {
                    tl.to(titleInner, { yPercent: 0, duration: TITLE_DUR, ease: 'power4.out' }, TITLE_START);
                }
                tl.to(cards, {
                    '--entry-x': '0px',
                    '--entry-y': '0px',
                    '--entry-scale': '1',
                    '--entry-rotation': '0deg',
                    opacity: 1,
                    duration: CARDS_DUR,
                    ease: 'power3.out',
                }, CARDS_START);

                // EXIT: cards → title → label
                tl.to(cards, {
                    '--entry-x': (i) => (i === 0 ? '-300px' : '300px'),
                    '--entry-y': '-100px',
                    '--entry-scale': '0.5',
                    '--entry-rotation': (i) => (i === 0 ? '-30deg' : '30deg'),
                    opacity: 0,
                    duration: CARDS_DUR,
                    ease: 'power3.in',
                }, EXIT_START);

                if (titleInner) {
                    tl.to(titleInner, { yPercent: -150, duration: TITLE_EXIT_DUR, ease: 'power4.in' }, TITLE_EXIT_START);
                }
                if (labelInner) {
                    tl.to(labelInner, { xPercent: -100, opacity: 0, duration: LABEL_EXIT_DUR, ease: 'power3.in' }, LABEL_EXIT_START);
                }
            }

            // ============================================================
            //  MOBILE — header timeline (sólo label + title)
            // ============================================================
            function buildMobileHeaderTimeline() {
                if (!labelInner && !titleInner) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: header || section,
                        start: 'top 85%',
                        // Rango dimensionado al header solo: ~110%vh.
                        // Cuando el header sale por arriba (top -25%), su exit
                        // ya completó. Las cards animan independiente más abajo.
                        end: 'top -25%',
                        scrub: 1,
                    },
                });

                // ENTRY: label → title
                if (labelInner) {
                    tl.to(labelInner, { xPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0);
                }
                if (titleInner) {
                    tl.to(titleInner, { yPercent: 0, duration: 0.8, ease: 'power4.out' }, 0.2);
                }

                // EXIT: title → label (espejo del entry, tras un breve REST)
                if (titleInner) {
                    tl.to(titleInner, { yPercent: -150, duration: 0.7, ease: 'power4.in' }, 1.4);
                }
                if (labelInner) {
                    tl.to(labelInner, { xPercent: -100, opacity: 0, duration: 0.5, ease: 'power3.in' }, 1.7);
                }
            }

            // ============================================================
            //  MOBILE — un ScrollTrigger por card, independiente
            // ============================================================
            function buildMobileCardTriggers() {
                cards.forEach((card) => {
                    gsap.set(card, {
                        '--entry-y': '60px',
                        '--entry-scale': '0.5',
                        '--entry-x': '0px',
                        '--entry-rotation': '0deg',
                        opacity: 0,
                    });

                    // Timing por card: ~2.4 unidades.
                    // Entry 0→1.0  (card sube y se ensambla)
                    // Rest  1.0→1.4 (card asentada, plenamente legible)
                    // Exit  1.4→2.4 (card se eleva y desvanece por arriba)
                    const ENTRY_DUR = 1.0;
                    const REST_DUR = 0.4;
                    const EXIT_DUR = 1.0;
                    const EXIT_START_CARD = ENTRY_DUR + REST_DUR; // 1.4

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            // Cada card dispara su animación al asomar por el
                            // borde inferior del viewport — el usuario la ve
                            // ensamblarse exactamente cuando llega a ella.
                            start: 'top 85%',
                            // Rango ~115%vh: después del REST la card aún es
                            // legible; el exit ocurre mientras todavía está
                            // visible en la mitad superior del viewport.
                            end: 'top -30%',
                            scrub: 1,
                            onEnter: () => lockTransition(card),
                            onLeave: () => releaseTransition(card),
                            onEnterBack: () => lockTransition(card),
                            onLeaveBack: () => releaseTransition(card),
                        },
                    });

                    // ENTRY
                    tl.to(card, {
                        '--entry-y': '0px',
                        '--entry-scale': '1',
                        opacity: 1,
                        duration: ENTRY_DUR,
                        ease: 'power3.out',
                    }, 0);

                    // EXIT (tras REST implícito)
                    tl.to(card, {
                        '--entry-y': '-100px',
                        '--entry-scale': '0.5',
                        opacity: 0,
                        duration: EXIT_DUR,
                        ease: 'power3.in',
                    }, EXIT_START_CARD);
                });
            }
        }
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
