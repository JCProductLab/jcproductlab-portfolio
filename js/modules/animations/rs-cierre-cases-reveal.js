// js/modules/animations/rs-cierre-cases-reveal.js
// Las 2 cards de casos (.rs-cierre__case) entran una y después la otra —
// réplica del criterio de desktop (resultado.js: cascadeStagger entre
// cards, cada una con su propio "turno" en vez de aparecer juntas).
//
// Un solo ScrollTrigger sobre el contenedor (.rs-cierre__cases) con
// stagger de GSAP — a diferencia de dejar que cada card dispare su propio
// IntersectionObserver (mobile-reveals.js): en tablet las 2 cards están
// lado a lado (mismo criterio de intersección, aparecerían juntas sin
// stagger explícito); en mobile están apiladas (ya aparecen algo
// escalonadas por posición, pero sin garantía de la secuencia deseada).
// Un timeline con stagger explícito da el mismo resultado ("una y
// después la otra") sin importar el layout del viewport.
//
// Antes estas cards recibían el reveal genérico (.mrv, fade+slide de
// 60px) de mobile-reveals.js — se sacaron de esa lista (ver
// caso-asdeporte-nav.js) para que no compita con este stagger explícito.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initRsCierreCasesReveal() {
    // Desktop: resultado.js maneja esta cascada con su propio
    // scrollytelling, no se toca.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Guard GSAP/ScrollTrigger: si el CDN falla, las cards quedan
    // visibles con su opacity por defecto (sin animar) — mismo criterio
    // que el resto de los módulos bespoke de hoy.
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = document.querySelector('.rs-cierre__cases');
    const cards = gsap.utils.toArray('.rs-cierre__case');
    if (!container || !cards.length) return;

    // html { scroll-behavior: smooth } (reset.css) rompe la medición
    // interna de ScrollTrigger al crear/refrescar triggers — mismo parche
    // ya aplicado en los demás módulos bespoke de hoy.
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    gsap.set(cards, { y: 60, opacity: 0 });

    gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        // Retraso antes de que arranque la primera card — da tiempo a
        // que se alcance a ver un poco más de su entrada antes de que
        // dispare (la segunda hereda el mismo retraso vía el stagger).
        delay: 0.5,
        scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
        },
    });

    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setTimeout(() => {
            htmlEl.style.scrollBehavior = prevScrollBehavior;
        }, 500);
    });
}
