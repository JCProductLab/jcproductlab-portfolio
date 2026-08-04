'use strict';

// ============================================
// MAIN ENTRY POINT
// ============================================

// Fijar scrollRestoration a 'manual' para evitar que el navegador
// resetee el scroll a 0 al terminar la carga (interactúa con
// scroll-behavior: smooth y dispara onUpdates espurios en los STs).
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initMagnetic } from './modules/magnetic.js';
import { initCustomCursor } from './modules/cursor.js';
import { initCaseCursor } from './modules/animations/case-cursor.js';
import { initCaseCardsScroll } from './modules/animations/case-cards-scroll.js';
import { initHeroIntro } from './modules/animations/hero-intro.js';
import { initInteractions } from './modules/animations/interactions.js';
import { initMaskReveal } from './modules/animations/mask-reveal.js';
import { initTestimonialCardsReveal } from './modules/animations/testimonial-cards-reveal.js';
import { initLogosReveal } from './modules/animations/logos-reveal.js';
import { initAboutSectionReveal } from './modules/animations/about-section-reveal.js';
import { initCtaSectionReveal, initStickyReveal } from './modules/animations/cta-section-reveal.js';
import { initModalMiRol } from './modal-rol-proceso.js';
import { initModalProceso } from './modal-proceso.js';
import { initModalQueAprendi } from './modal-que-aprendi.js';
import { initScrollToTop } from './modules/scroll-to-top.js';

// Theme runs before DOMContentLoaded to avoid flash of wrong theme
initTheme();

// Hero intro: envuelve palabras del H1 lo antes posible (módulo deferred = DOM listo)
initHeroIntro();

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMagnetic();
    initModalMiRol();
    initModalProceso();
    initModalQueAprendi();
    // A diferencia de caso-asdeporte.html (mobile/tablet únicamente, ver
    // scroll-to-top.js): index.html no tiene section-nav ni ningún atajo
    // de navegación rápida propio de desktop, así que acá el botón debe
    // aparecer siempre, en cualquier viewport.
    initScrollToTop({ allowDesktop: true });
});

// Custom cursor: el canvas #fluid y el div #customCursor ya existen en el DOM
// al dispararse DOMContentLoaded, y el WebGL solo depende del viewport (no de
// assets). Lo movemos aquí para que el cursor siga al mouse desde el primer
// frame, sin esperar a `load` (que puede tardar decenas de segundos por
// videos, fonts e imágenes). Si el script corre con readyState !== 'loading'
// (caso típico en módulos defer), lo ejecuta directo; si no, lo engancha
// a DOMContentLoaded sin duplicar la llamada.
if (document.readyState !== 'loading') {
    initCustomCursor();
} else {
    document.addEventListener('DOMContentLoaded', initCustomCursor);
}

// El resto se queda en `load` (depende de assets/mediciones tardías)
window.addEventListener('load', () => {
    initCaseCursor();
    initCaseCardsScroll();
    initInteractions();
    // Mask-reveal corre tras case-cards-scroll para que ScrollTrigger calcule
    // posiciones contra la altura final del documento (pin del scrollytelling).
    initMaskReveal();
    initTestimonialCardsReveal();
    initLogosReveal();
    initStickyReveal();
    initAboutSectionReveal();
    initCtaSectionReveal();
});
