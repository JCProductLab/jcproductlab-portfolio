'use strict';

// ============================================
// MAIN ENTRY POINT
// ============================================

import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initMagnetic } from './modules/magnetic.js';
import { initCustomCursor } from './modules/cursor.js';
import { initCaseCursor } from './modules/animations/case-cursor.js';

// Theme runs before DOMContentLoaded to avoid flash of wrong theme
initTheme();

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMagnetic();
});

// Custom cursor needs to run after full page load
window.addEventListener('load', () => {
    initCustomCursor();
    initCaseCursor();
});
