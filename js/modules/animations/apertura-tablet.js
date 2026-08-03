// js/modules/animations/apertura-tablet.js
// Combina Apertura (título) + Métrica ("25%") en una sola pantalla para
// tablet — layout de 2 columnas calcado de .case-card (ver
// css/responsive.css en index.html), con entrada en escalera sin scroll
// de por medio: el título entra primero, y recién al terminar arranca
// la métrica (conteo → flecha → texto).
//
// Mobile (<700px) y desktop (>=1200px, hover:fine) no se tocan: cada uno
// sigue con su propio mecanismo (mobile: colchón de scroll + pin a mano,
// ver apertura-exit.js/metrica-sequence.js; desktop: scrollytelling
// GSAP, ver caso-asdeporte.js).
//
// La reestructura del DOM (mover .cs-metrica adentro de .cs-apertura)
// sigue el mismo patrón que decisiones-accordion.js: reubica nodos que
// ya existen en el documento, no crea contenido nuevo ni lo duplica.
//
// Sin GSAP a propósito, mismo criterio que mobile-reveals.js/
// apertura-exit.js: CSS transitions (.mrv/.mrv--in, ya usadas en todo
// el sitio) + transitionend para encadenar los pasos — debe funcionar
// aunque el CDN de GSAP falle.

import { animateCounter, primeCounter } from './mobile-reveals.js';
import { setupMetricaArrow } from './metrica-sequence.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
// Piso, no rango: "tablet" acá es todo lo que NO es desktop (ver
// MQ_DESKTOP arriba) y mide al menos 700px — mismo criterio que
// decisiones-accordion.js/decision-mc-pin.js (solo excluyen MQ_DESKTOP),
// sumado al piso de 700px para separarse de mobile (<700px). No es un
// rango acotado por max-width: un táctil de 1300px+ (pointer:coarse)
// sigue sin ser desktop y debe entrar acá, igual que en el CSS (ver
// header de case-study-responsive.css).
const MQ_TABLET_FLOOR = '(min-width: 700px)';
// Mismo delay que mobile-reveals.js#immediateSelectors — evita competir
// con el resto del trabajo de JS que también engancha a DOMContentLoaded.
const REVEAL_DELAY_MS = 100;
// Duración de la transición del ticker (case-study.css, bloque tablet:
// 1.2s ease-out) + margen de seguridad — fallback por si "transitionend"
// nunca dispara (clase agregada antes del primer paint, tab en
// background, etc.): mismo criterio que el resto del sitio ("si JS nunca
// corre/completa, no debe quedar invisible para siempre", ver los
// bloques prefers-reduced-motion:reduce en case-study.css).
const SEQUENCE_FALLBACK_MS = 1600;
// Mismo criterio que SEQUENCE_FALLBACK_MS, pero para la transición del
// kpi ("25%"+flecha, case-study.css: 1.2s ease-out) — fallback por si su
// "transitionend" nunca dispara.
const KPI_FALLBACK_MS = 1600;

export function initAperturaTablet() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (!window.matchMedia(MQ_TABLET_FLOOR).matches) return;

    const apertura = document.querySelector('.cs-apertura');
    const bgPin = document.querySelector('.cs-apertura__bg-pin');
    const ticker = document.querySelector('.cs-apertura__ticker');
    const metrica = document.querySelector('.cs-metrica');
    if (!apertura || !bgPin || !ticker || !metrica) return;

    // I3: los lookups de los hijos de .cs-metrica (y su null-check) van
    // ACÁ, antes de tocar el DOM — si algo falta, se sale sin haber
    // reestructurado nada. Antes este check corría después del punto 1
    // de abajo (y después del return de reduced-motion): si fallaba, el
    // ticker ya había sido movido a .cs-apertura__content (oculto por
    // CSS mientras tanto) sin que quedara nada que lo revelara.
    const metricaLeft = metrica.querySelector('.cs-metrica__left');
    const kpi = metrica.querySelector('.cs-metrica__kpi');
    const metric = metrica.querySelector('.cs-metric');
    const arrow = metrica.querySelector('.cs-metrica__arrow');
    const caption = metrica.querySelector('.cs-metrica__caption');
    if (!metricaLeft || !kpi || !metric || !arrow || !caption) return;

    // 1. Reestructura DOM — una sola vez, corre siempre en este rango
    //    (independiente de reduced-motion: es estructural, no animación).
    //    .cs-metrica-pin (donde vivía .cs-metrica) queda vacío;
    //    case-study.css lo oculta (display:none) en este mismo rango.
    const content = document.createElement('div');
    content.className = 'cs-apertura__content';
    bgPin.insertAdjacentElement('afterend', content);
    content.appendChild(ticker);
    content.appendChild(metrica);

    // 2. Secuencia de entrada — una sola vez al cargar, sin scroll ni
    //    IntersectionObserver (es la primera sección, ya visible en el
    //    primer frame). Con reduced-motion no se anima nada: el HTML/CSS
    //    ya deja todo en su estado final visible (mismo patrón que el
    //    resto del sitio) — return acá, después de la reestructura de
    //    arriba (el layout de 2 columnas debe quedar armado igual,
    //    animado o no).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // kpi.mrv (no metricaLeft) porque el que necesita entrada propia,
    // igual que el título, es el número+flecha — el caption ya tiene su
    // propio fade independiente (cs-metrica__caption--in, más abajo).
    // Se agrega ANTES de setupMetricaArrow a propósito: setupMetricaArrow
    // llama getTotalLength() (mide el SVG), que fuerza un reflow
    // síncrono. Si ese reflow ocurriera con kpi todavía en su estado por
    // defecto (visible), el navegador lo toma como el punto de partida
    // legítimo de una transición — y al agregar .mrv después, con su
    // propio `transition` ya definido en la regla CSS, anima de verdad
    // desde opacity:1 hacia 0 en vez de arrancar oculto (bug confirmado
    // en vivo: "25%"+flecha visibles un instante y después
    // desvaneciéndose). Agregando la clase ANTES de cualquier reflow
    // forzado, esta es la primera vez que el navegador calcula su
    // estilo — sin checkpoint previo que animar, el estado oculto se
    // aplica al instante.
    kpi.classList.add('mrv');
    // "25%" (valor final estático del HTML) queda en "0%" desde ya, no
    // recién cuando animateCounter arranca — si no, lo que se ve durante
    // todo el fade-in (1.2s) es "25%" apareciendo gradual, y al terminar
    // el conteo lo resetea a "0" para volver a contar: un salto visible
    // confirmado en vivo. kpi ya está oculto (.mrv, arriba) en este
    // punto, así que este cambio de texto no se alcanza a ver.
    const primedCounter = primeCounter(metric);
    const { reveal: revealArrow } = setupMetricaArrow(arrow);

    function revealMetrica() {
        // Mismo fade + slide-up que .cs-apertura__ticker — el número
        // entra igual que el título. El conteo (animateCounter) espera a
        // que ESA entrada termine (mismo patrón transitionend+fallback
        // que startSequence más abajo) — el "0" tiene que asentarse en su
        // lugar antes de empezar a contar hasta 25, no competir con el
        // desplazamiento.
        kpi.classList.add('mrv--in');

        let counted = false;
        const triggerCounter = () => {
            if (counted) return;
            counted = true;
            animateCounter(metric, () => {
                revealArrow();
                caption.classList.add('cs-metrica__caption--in');
            }, primedCounter);
        };
        kpi.addEventListener('transitionend', triggerCounter, { once: true });
        setTimeout(triggerCounter, KPI_FALLBACK_MS);
    }

    // I2: revealMetrica debe disparar UNA sola vez, desde lo que ocurra
    // primero — el transitionend real del ticker, o el fallback por
    // timeout si ese evento nunca llega.
    function startSequence() {
        let done = false;
        const triggerReveal = () => {
            if (done) return;
            done = true;
            revealMetrica();
        };
        ticker.addEventListener('transitionend', triggerReveal, { once: true });
        setTimeout(triggerReveal, SEQUENCE_FALLBACK_MS);
        ticker.classList.add('mrv--in');
    }

    // Parallax de la imagen de fondo — mismo patrón que
    // case-cards-scroll.js (matchMedia pointer:coarse, scrub 0.5).
    // El bg vive en .cs-apertura__bg-pin::before (pseudo-elemento,
    // no targeteable con GSAP), así que se anima el .cs-apertura__bg-pin
    // padre — el ::before se mueve con él y el overflow:hidden del
    // bg-pin recorta si se sale. El bg-pin es sticky (position:sticky,
    // top:0, height:100vh), pero los transforms NO rompen el sticky
    // (el sticky se calcula por posición de layout, el transform
    // mueve visualmente desde ahí). El trigger es .cs-apertura
    // (la sección entera), start/end top-bottom/bottom-top = la
    // animación corre mientras la sección atraviesa el viewport.
    // Guard GSAP/ScrollTrigger: si el CDN falla, el parallax no
    // corre, mismo criterio que el resto del sitio.
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.to(bgPin, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: apertura,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(startSequence, REVEAL_DELAY_MS);
    }, { once: true });
}
