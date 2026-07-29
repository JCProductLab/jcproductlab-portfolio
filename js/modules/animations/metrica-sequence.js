// js/modules/animations/metrica-sequence.js
// Animación mobile/tablet de la sección Métrica, bespoke — no vive en
// mobile-reveals.js porque necesita coreografía propia, no reutilizable
// por otras secciones.
//
// - initMetricaSequence: el número cuenta primero (animateCounter, ver
//   mobile-reveals.js) y recién cuando termina se disparan en simultáneo
//   el trazado de la flecha (stroke-dashoffset, misma coreografía que
//   desktop: diagonal → cuña → punta → círculos) y el fade + slide-up
//   del párrafo.
//
// (El cometa en loop de tiempo fijo se probó y se sacó: no se veía bien
// y ralentizaba en iPhone real — ver .cs-metrica__comet, oculto en mobile
// vía display:none en case-study.css.)

import { animateCounter } from './mobile-reveals.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initMetricaSequence() {
    // Desktop: el scrollytelling GSAP es el dueño de esta animación.
    if (window.matchMedia(MQ_DESKTOP).matches) return;

    // Reduced-motion: el HTML ya trae "25%" estático y la flecha ya
    // trazada — no se toca nada, queda visible con sus valores finales.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const metric = document.querySelector('.cs-metric');
    const arrow = document.querySelector('.cs-metrica__arrow');
    const caption = document.querySelector('.cs-metrica__caption');
    if (!metric || !arrow || !caption) return;

    const mainPath = arrow.querySelector('.cs-metrica__arrow-main');
    const tipPaths = arrow.querySelectorAll('.cs-metrica__arrow-tip');
    const caps = arrow.querySelectorAll('.cs-metrica__arrow-cap');
    const fillet = arrow.querySelector('.cs-metrica__arrow-fillet');

    // Estado inicial oculto de la flecha. La geometría (atributo "d") es
    // fija — no cambia entre mobile/tablet/desktop, solo el tamaño vía
    // CSS — así que basta con medirla una vez acá. Se aplica de entrada,
    // mucho antes de que el usuario llegue con scroll real: sin carrera
    // de pintado posible.
    const mainLength = mainPath.getTotalLength();
    mainPath.style.strokeDasharray = String(mainLength);
    mainPath.style.strokeDashoffset = String(mainLength);
    mainPath.style.transition = 'stroke-dashoffset 0.5s ease-out';

    tipPaths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
        // Arrancan junto con la cuña, cuando termina la diagonal (0.5s).
        p.style.transition = 'stroke-dashoffset 0.3s ease-out 0.5s';
    });

    fillet.style.opacity = '0';
    fillet.style.transition = 'opacity 0.05s linear 0.5s';

    caps.forEach((c) => {
        c.style.opacity = '0';
        // Aparecen justo antes de que termine el trazado de la punta (0.8s).
        c.style.transition = 'opacity 0.05s linear 0.75s';
    });

    function revealArrowAndCaption() {
        mainPath.style.strokeDashoffset = '0';
        tipPaths.forEach((p) => { p.style.strokeDashoffset = '0'; });
        fillet.style.opacity = '1';
        caps.forEach((c) => { c.style.opacity = '1'; });
        caption.classList.add('cs-metrica__caption--in');
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            io.unobserve(entry.target);
            animateCounter(metric, revealArrowAndCaption);
        });
    }, { threshold: 0.15 });

    io.observe(metric);
}
