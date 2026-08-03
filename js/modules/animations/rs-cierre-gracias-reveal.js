// js/modules/animations/rs-cierre-gracias-reveal.js
// Réplica EXACTA de la entrada de "¡Gracias" / "por ver!" / la imagen de
// cierre en desktop (resultado.js:1429-1462): cada palabra anima por
// separado (y + x + opacity), la imagen aparte (y + opacity), todas con
// ease power2.out. En desktop esto vive dentro de un scrub gigante
// compartido con la cascada de cierre — acá cada elemento tiene su propio
// ScrollTrigger independiente, mismo patrón que rs-metricas-cards.js /
// cta-buttons-reveal.js.
//
// Antes estos 2 elementos recibían el reveal genérico (.mrv, fade+slide
// de 60px) de mobile-reveals.js — se sacaron de esa lista (ver
// caso-asdeporte-nav.js) para que no compita con esta coreografía bespoke.
//
// toggleActions:'play reverse play reverse' — a diferencia de
// cta-buttons-reveal.js (el botón final, sin nada scrolleable después),
// acá hay de sobra (.rs-cierre__bottom completo + el padding-bottom extra
// de .rs-cierre) antes del final real del documento, así que el
// clampeo de "end" que causaba el rebote en el botón no aplica acá.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initRsCierreGraciasReveal() {
    // Desktop: resultado.js maneja esta sección con su propio
    // scrollytelling, no se toca.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Guard GSAP/ScrollTrigger: si el CDN falla, los elementos quedan
    // visibles con su opacity por defecto (sin animar) — mismo criterio
    // que decision-mc-pin.js, rs-metricas-cards.js y cta-buttons-reveal.js.
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const graciasLeft = document.querySelector('.rs-cierre__gracias-word--left');
    const graciasRight = document.querySelector('.rs-cierre__gracias-word--right');
    const media = document.querySelector('.rs-cierre__media');

    if (!graciasLeft && !graciasRight && !media) return;

    // Mismo bug que ya resolvimos en rs-metricas-cards.js/cta-buttons-reveal.js:
    // html { scroll-behavior: smooth } (reset.css) rompe la medición
    // interna de ScrollTrigger al crear/refrescar triggers en Chrome/Android.
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    // "¡Gracias" — solo desplazamiento lateral + fade (sin el y:60→0 de
    // desktop, a pedido: acá no debe subir desde abajo, solo derivar en X).
    if (graciasLeft) {
        gsap.set(graciasLeft, { x: 0, opacity: 0 });
        gsap.to(graciasLeft, {
            x: 20,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: graciasLeft,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            },
        });
    }

    // "por ver!" — solo desplazamiento lateral + fade (mismo criterio
    // que "¡Gracias" de arriba).
    if (graciasRight) {
        gsap.set(graciasRight, { x: 0, opacity: 0 });
        gsap.to(graciasRight, {
            x: -20,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: graciasRight,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            },
        });
    }

    // Imagen (resultado.js: y:80→0, opacity:0→1, power2.out)
    if (media) {
        gsap.set(media, { y: 80, opacity: 0 });
        gsap.to(media, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: media,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            },
        });
    }

    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setTimeout(() => {
            htmlEl.style.scrollBehavior = prevScrollBehavior;
        }, 500);
    });
}
