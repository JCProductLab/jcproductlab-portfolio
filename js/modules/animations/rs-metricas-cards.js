// js/modules/animations/rs-metricas-cards.js
// Reveal de scroll para las cards verdes de "El impacto en el negocio"
// (.rs-metricas__card) en mobile/tablet — réplica EXACTA de la
// coreografía mobile de .testimonial-card en index.html
// (testimonial-cards-reveal.js, buildMobileCardTriggers): cada card tiene
// su propio ScrollTrigger independiente, entra con scale 0.5→1 + y
// 60px→0 + opacity 0→1 (power3.out), y sale simétrico hacia arriba
// (scale 1→0.5, y 0→-100px, opacity 1→0, power3.in) — scrub:1, mismos
// tiempos (ENTRY_DUR/REST_DUR/EXIT_DUR) que la referencia.
//
// Antes estas cards recibían el reveal genérico (.mrv, fade + slide de
// 24px) de mobile-reveals.js — se sacaron de esa lista (ver
// caso-asdeporte-nav.js) para que no compita con esta coreografía
// bespoke, mismo criterio que decision-mc-pin.js con
// .cs-decision-mc__media/text-wrap.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initRsMetricasCards() {
    // Desktop: resultado.js maneja esta sección con su propio
    // scrollytelling (x/y/rotation/opacity), no se toca.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Guard GSAP/ScrollTrigger: si el CDN falla, las cards quedan
    // visibles con su opacity por defecto (sin animar) — mismo criterio
    // que decision-mc-pin.js y el parallax de apertura-tablet.js.
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = gsap.utils.toArray('.rs-metricas__card');
    if (!cards.length) return;

    // html { scroll-behavior: smooth } (reset.css) rompe la medición
    // interna que hace ScrollTrigger al crear/refrescar triggers — en
    // Chrome/Android (Blink) el ajuste de scroll que GSAP hace por dentro
    // para medir queda "animado" por el smooth-scroll en vez de
    // instantáneo, lo que se percibe como un rebote de scroll. Mismo bug
    // ya documentado y resuelto en decision-mc-pin.js — mismo parche:
    // neutralizar mientras se crean/miden los triggers y restaurar
    // después (500ms, igual que ahí).
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    // Mismos tiempos que buildMobileCardTriggers en testimonial-cards-reveal.js.
    const ENTRY_DUR = 1.0;
    const REST_DUR = 0.4;
    const EXIT_DUR = 1.0;
    const EXIT_START = ENTRY_DUR + REST_DUR; // 1.4

    cards.forEach((card) => {
        gsap.set(card, { y: 60, scale: 0.5, opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top -30%',
                scrub: 1,
            },
        });

        tl.to(card, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: ENTRY_DUR,
            ease: 'power3.out',
        }, 0);

        tl.to(card, {
            y: -100,
            scale: 0.5,
            opacity: 0,
            duration: EXIT_DUR,
            ease: 'power3.in',
        }, EXIT_START);
    });

    // Mismo patrón que mask-reveal.js/cta-section-reveal.js/etc. en
    // index.html — recalcula las posiciones de los ScrollTrigger después
    // de que el documento asiente su altura final (ver cta-buttons-reveal.js
    // para el detalle completo del porqué).
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setTimeout(() => {
            htmlEl.style.scrollBehavior = prevScrollBehavior;
        }, 500);
    });
}
