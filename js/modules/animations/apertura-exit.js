// js/modules/animations/apertura-exit.js
// Fade de salida del título del hero (.cs-apertura__ticker) mobile/tablet,
// atado al scroll del PRIMER tramo del colchón de .cs-apertura
// (--cs-title-exit-buffer en case-study.css) — el fondo queda pineado
// (.cs-apertura__bg-pin, position:sticky, CSS puro) durante ese tramo Y
// el siguiente (--cs-metrica-pin-buffer, donde .cs-metrica se lee encima
// del mismo fondo, ver case-study.css), pero el título solo debe
// desvanecerse durante el PRIMERO — por eso el progreso acá se mide
// contra ese tramo específico, no contra el colchón completo.
//
// Solo anima opacity + transform (propiedades de compositor, sin forzar
// layout) y solo reacciona a scroll real — nada de loop infinito por
// tiempo (a diferencia del cometa que se sacó de Métrica, ver
// metrica-sequence.js). Arranca recién cuando termina la entrada del
// título (transitionend del propio ticker, mismo patrón que usa
// hero-intro.js en el home tras el transitionend del botón CTA) para no
// pelear con esa transición ni con mobile-reveals.js.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
// Piso, no rango: "tablet" es todo lo que NO es desktop (ver MQ_DESKTOP)
// y mide al menos 700px — mismo criterio que decisiones-accordion.js/
// decision-mc-pin.js (solo excluyen MQ_DESKTOP), sumado al piso de
// 700px para separarse de mobile (<700px). Un táctil de 1300px+
// (pointer:coarse) también entra acá, igual que en el CSS (ver header
// de case-study-responsive.css).
const MQ_TABLET_FLOOR = '(min-width: 700px)';
const EXIT_DISTANCE_PX = 100;

// Mide el valor en px de una custom property de longitud (ej. "50vh")
// vía un probe real en el DOM — evita duplicar el número a mano acá y
// queda correcto sea cual sea la unidad usada en el CSS.
function measureCssLength(varName) {
    const probe = document.createElement('div');
    probe.style.cssText = `position:absolute; visibility:hidden; height:var(${varName});`;
    document.body.appendChild(probe);
    const px = probe.offsetHeight;
    probe.remove();
    return px;
}

export function initAperturaExit() {
    // Desktop: el scrollytelling GSAP maneja la apertura.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js arma una sola pantalla estática, sin
    // colchón de scroll que desvanecer.
    if (window.matchMedia(MQ_TABLET_FLOOR).matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const apertura = document.querySelector('.cs-apertura');
    const ticker = document.querySelector('.cs-apertura__ticker');
    if (!apertura || !ticker) return;

    function startScrollControl() {
        // A partir de acá, opacity/transform los escribe este módulo por
        // frame — apaga la transition CSS de la entrada (0.9s ease-out)
        // para que no amortigüe/retrase esas escrituras contra el scroll.
        ticker.style.transition = 'none';

        let titleExitPx = measureCssLength('--cs-title-exit-buffer');
        let ticking = false;

        function update() {
            ticking = false;
            if (titleExitPx <= 0) return;

            const rect = apertura.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -rect.top / titleExitPx));

            ticker.style.opacity = String(1 - progress);
            // translateY(0px), no 'none': mantiene al ticker en su propia
            // capa de composición todo el tiempo — alternar entre "sin
            // transform" y "con transform" puede causar un parpadeo en
            // Android al cruzar ese límite (ver initMetricaPin en
            // metrica-sequence.js, mismo mecanismo, confirmado ahí).
            ticker.style.transform = `translateY(${-progress * EXIT_DISTANCE_PX}px)`;
        }

        function onScroll() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }

        function onResize() {
            titleExitPx = measureCssLength('--cs-title-exit-buffer');
            onScroll();
        }

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
    }

    ticker.addEventListener('transitionend', startScrollControl, { once: true });
}
