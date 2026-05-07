'use strict';

// ============================================
// MAIN ENTRY POINT
// ============================================

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

// Theme runs before DOMContentLoaded to avoid flash of wrong theme
initTheme();

// Hero intro: envuelve palabras del H1 lo antes posible (módulo deferred = DOM listo)
initHeroIntro();

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMagnetic();
});

// Custom cursor needs to run after full page load
window.addEventListener('load', () => {
    initCustomCursor();
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
