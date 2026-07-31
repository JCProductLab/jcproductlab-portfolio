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

import { animateCounter } from './mobile-reveals.js';
import { setupMetricaArrow } from './metrica-sequence.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET = '(min-width: 700px) and (max-width: 1199.98px)';
// Mismo delay que mobile-reveals.js#immediateSelectors — evita competir
// con el resto del trabajo de JS que también engancha a DOMContentLoaded.
const REVEAL_DELAY_MS = 100;

export function initAperturaTablet() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (!window.matchMedia(MQ_TABLET).matches) return;

    const apertura = document.querySelector('.cs-apertura');
    const bgPin = document.querySelector('.cs-apertura__bg-pin');
    const ticker = document.querySelector('.cs-apertura__ticker');
    const metrica = document.querySelector('.cs-metrica');
    if (!apertura || !bgPin || !ticker || !metrica) return;

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

    const metricaLeft = metrica.querySelector('.cs-metrica__left');
    const metric = metrica.querySelector('.cs-metric');
    const arrow = metrica.querySelector('.cs-metrica__arrow');
    const caption = metrica.querySelector('.cs-metrica__caption');
    if (!metricaLeft || !metric || !arrow || !caption) return;

    const revealArrow = setupMetricaArrow(arrow);
    metricaLeft.classList.add('mrv');

    function revealMetrica() {
        metricaLeft.classList.add('mrv--in');
        animateCounter(metric, () => {
            revealArrow();
            caption.classList.add('cs-metrica__caption--in');
        });
    }

    function startSequence() {
        ticker.addEventListener('transitionend', revealMetrica, { once: true });
        ticker.classList.add('mrv--in');
    }

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(startSequence, REVEAL_DELAY_MS);
    }, { once: true });
}
