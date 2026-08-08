'use strict';

// ============================================
// METHODOLOGY (sobre-mi.html "Cómo trabajo") — reveal de header.
// Misma coreografía que el resto de section-header del sitio (wipe de
// label izq→der + mask reveal vertical del título), idéntica a la que
// usa about-bio-reveal.js para "Sobre mí" — mismo patrón scrub-driven,
// mismos timings (LABEL_DUR/TITLE_START/TITLE_DUR), misma página.
//
// Excluido de mask-reveal.js (ver ese archivo) porque .methodology es
// una sección pineada (pinned-overflow-section.js) y necesita su
// propio módulo por la misma razón que .about-bio: mantener el
// control de la coreografía de entrada separado del pin del track.
//
// Cards: mismo reveal que testimonial-cards-reveal.js usa para sus
// cards en MOBILE (zoom + fade + y) — sin matchMedia sólo en mobile y
// tablet portrait (.methodology__grid en columna, ver about.css): cada
// card tiene su propio ScrollTrigger independiente, se ensambla al
// llegar a ella y se repliega al salir por arriba.
//
// Tablet landscape y desktop (.methodology__grid en fila, las 3 cards
// comparten la misma posición Y) SÍ necesitan matchMedia: con un
// trigger por card las tres cruzan "top 85%" en el mismo instante de
// scroll y animarían simultáneas. Ahí se usa un timeline único
// (trigger: section) con la misma animación --entry-y/--entry-scale
// pero escalonada por índice de columna (izquierda → derecha).
// ============================================

export function initMethodologyReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.methodology');
    if (!section) return;

    const header = section.querySelector('.section-header');
    const label = header?.querySelector('.section-header__label');
    const title = header?.querySelector('.section-header__title');
    if (!title) return;

    // ── Wrap idempotente para mask-reveal del header (idéntico a
    // about-bio-reveal.js / about-section-reveal.js / testimonial-
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

    // ── Posiciones del timeline (proporciones bajo scrub) — mismos
    // valores que about-bio-reveal.js / about-section-reveal.js. ─────
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

    // ── Cards ──────────────────────────────────────────────────────
    const cards = Array.from(section.querySelectorAll('.methodology-card'));

    if (cards.length) {
        const mm = gsap.matchMedia();

        mm.add(
            {
                // Columna (mobile + tablet portrait) vs. fila (tablet
                // landscape + desktop) — mismo criterio que
                // about-bio-reveal.js / about.css para esta página.
                isStacked: '(max-width: 699.98px), (min-width: 700px) and (max-width: 1199.98px) and (orientation: portrait)',
                isRow: '(min-width: 1200px), (min-width: 700px) and (max-width: 1199.98px) and (orientation: landscape)',
            },
            (context) => {
                const { isStacked } = context.conditions;

                if (isStacked) {
                    // Un ScrollTrigger independiente por card, idéntico a
                    // buildMobileCardTriggers() en testimonial-cards-reveal.js.
                    cards.forEach((card) => {
                        gsap.set(card, { '--entry-y': '60px', '--entry-scale': '0.5', opacity: 0 });

                        // Timing por card: ~2.4 unidades.
                        // Entry 0→1.0  (card sube y se ensambla)
                        // Rest  1.0→1.4 (card asentada, plenamente legible)
                        // Exit  1.4→2.4 (card se eleva y desvanece por arriba)
                        const ENTRY_DUR = 1.0;
                        const REST_DUR = 0.4;
                        const EXIT_DUR = 1.0;
                        const EXIT_START_CARD = ENTRY_DUR + REST_DUR; // 1.4

                        const cardTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                                end: 'top -30%',
                                scrub: 1,
                            },
                        });

                        cardTl.to(card, {
                            '--entry-y': '0px',
                            '--entry-scale': '1',
                            opacity: 1,
                            duration: ENTRY_DUR,
                            ease: 'power3.out',
                        }, 0);

                        cardTl.to(card, {
                            '--entry-y': '-100px',
                            '--entry-scale': '0.5',
                            opacity: 0,
                            duration: EXIT_DUR,
                            ease: 'power3.in',
                        }, EXIT_START_CARD);
                    });
                } else {
                    // Las 3 cards comparten la misma posición Y (fila) — un
                    // único timeline con scrub, cascada por índice en vez
                    // de un trigger por card (que las dispararía juntas).
                    cards.forEach((card) => {
                        gsap.set(card, { '--entry-y': '60px', '--entry-scale': '0.5', opacity: 0 });
                    });

                    // Stagger marcado (0.3) por índice de columna
                    // (izquierda → derecha) para que se note la cascada en
                    // vez de una entrada simultánea.
                    //
                    // NOTA (revertido — ver memoria de proyecto
                    // "methodology-cards-reversa-pin-incident"): se probó
                    // pin:true acá para resolver que en reversa no se veía
                    // animar nada, pero pinear .methodology rompió el
                    // reveal de testimonios y CTA más abajo en la misma
                    // página (pin-spacing corrió el layout y desalineó los
                    // ScrollTrigger ya creados de esas secciones). Se
                    // revirtió a la versión sin pin. El bug de reversa
                    // sigue sin resolver — pendiente para la próxima
                    // sesión, con un enfoque que NO toque pin/layout
                    // global (ver esa memoria para el diagnóstico completo
                    // antes de intentar de nuevo).
                    const CARD_STAGGER = 0.3;
                    const ENTRY_DUR = 0.8;
                    const REST_DUR = 0.4;
                    const EXIT_DUR = 0.8;
                    const ENTRY_END = CARD_STAGGER * (cards.length - 1) + ENTRY_DUR;
                    const EXIT_START = ENTRY_END + REST_DUR;

                    const rowTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            // start SIN TOCAR — 'top 55%' es el punto en el
                            // que la entrada ya se veía bien (no se pidió
                            // ajustarlo). end: 'bottom 20%' (relativo al
                            // propio elemento, no un % fijo de vh) deja un
                            // margen de ~20% de viewport todavía visible al
                            // terminar el EXIT — 'bottom top' (0% de margen,
                            // usado en el ajuste anterior) resolvía que el
                            // EXIT no se cortara al bajar, pero en reversa
                            // (scroll hacia arriba) esa misma franja de 0%
                            // hacía que la entrada revertida se reprodujera
                            // casi entera mientras la sección apenas asomaba
                            // 1-2px, imperceptible. Con margen, el EXIT sigue
                            // completando dentro de lo visible al bajar, y al
                            // subir la reversa ya tiene una porción visible
                            // razonable de la sección para reproducirse.
                            start: 'top 55%',
                            end: 'bottom 20%',
                            scrub: 1,
                        },
                    });

                    cards.forEach((card, i) => {
                        rowTl.to(card, {
                            '--entry-y': '0px',
                            '--entry-scale': '1',
                            opacity: 1,
                            duration: ENTRY_DUR,
                            ease: 'power3.out',
                        }, i * CARD_STAGGER);
                    });

                    cards.forEach((card, i) => {
                        rowTl.to(card, {
                            '--entry-y': '-100px',
                            '--entry-scale': '0.5',
                            opacity: 0,
                            duration: EXIT_DUR,
                            ease: 'power3.in',
                        }, EXIT_START + i * CARD_STAGGER);
                    });
                }
            }
        );
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
