'use strict';

// ============================================
// CLIENTS MARQUEE REVEAL — scrub-driven, layout-aware
// Una única Timeline orquesta la entrada/salida de la sección de logos,
// adaptándose al layout activo:
//
// • Desktop (>1024px): logos individuales con stagger (escala 0.8 → 1.0,
//                      opacity 0 → 1). Stagger inverso en la salida
//                      (último logo desaparece primero).
// • Mobile  (≤1024px): contenedor completo (opacity + translateY 40px).
//                      Los items NO se tocan — el marquee CSS infinito
//                      depende de su `transform: translate3d(...)` y la
//                      menor interferencia hace que mantenga su loop.
//
// Nota: el HTML actual de .clients-marquee no incluye .section-header
// (label/title). Si en el futuro se agrega, la cascada label → title →
// logos se podría sumar siguiendo el patrón de testimonial-cards-reveal.
//
// Filosofía de start/end (idéntica a testimonial-cards-reveal):
//   start 'top 85%' + end 'top -10%' = rango ~95 %vh posicional.
//   La salida de los logos termina mientras la sección aún roza el
//   borde superior del viewport, garantizando que tanto forward como
//   reverse ocurran dentro de la zona visible del usuario.
// ============================================

export function initLogosReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.clients-marquee');
    if (!section) return;

    // Items de la lista visible. Excluye .clients-marquee__list--clone,
    // que sólo se usa para el bucle infinito del marquee CSS en mobile.
    const items = Array.from(
        section.querySelectorAll(
            '.clients-marquee__list:not(.clients-marquee__list--clone) > .clients-marquee__item'
        )
    );
    if (!items.length) return;

    const mm = gsap.matchMedia();

    mm.add(
        {
            isDesktop: '(min-width: 1025px)',
            isMobile: '(max-width: 1024px)',
        },
        (context) => {
            const { isDesktop } = context.conditions;

            // ── Estados iniciales ────────────────────────────────────────────
            if (isDesktop) {
                gsap.set(items, { opacity: 0, scale: 0.8 });
            } else {
                gsap.set(section, { opacity: 0, y: 40 });
            }

            // ── Posiciones del timeline ──────────────────────────────────────
            // Bajo scrub solo importan las proporciones.
            const ENTRY_DUR = 0.7;
            const STAGGER = 0.2;
            const REST_DUR = 0.3;

            // Duración real del bloque ENTRY (con stagger en desktop):
            const entryEnd = isDesktop
                ? ENTRY_DUR + STAGGER * (items.length - 1)
                : ENTRY_DUR;
            const EXIT_START = entryEnd + REST_DUR;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    // Rango ~95 %vh. Forward y reverse simétricos.
                    end: 'top -10%',
                    scrub: 1,
                },
            });

            // ── ENTRY ────────────────────────────────────────────────────────
            if (isDesktop) {
                // Cascada izquierda → derecha
                tl.to(items, {
                    opacity: 1,
                    scale: 1,
                    duration: ENTRY_DUR,
                    ease: 'power2.out',
                    stagger: STAGGER,
                }, 0);
            } else {
                // Contenedor entero — el marquee CSS sigue corriendo intacto
                tl.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: ENTRY_DUR,
                    ease: 'power3.out',
                }, 0);
            }

            // ── EXIT ─────────────────────────────────────────────────────────
            if (isDesktop) {
                // Cascada inversa: derecha → izquierda (último entró → primero sale)
                tl.to(items, {
                    opacity: 0,
                    scale: 0.8,
                    duration: ENTRY_DUR,
                    ease: 'power2.in',
                    stagger: { each: STAGGER, from: 'end' },
                }, EXIT_START);
            } else {
                tl.to(section, {
                    opacity: 0,
                    y: -40,
                    duration: ENTRY_DUR,
                    ease: 'power3.in',
                }, EXIT_START);
            }
        }
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
