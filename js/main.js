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
});
