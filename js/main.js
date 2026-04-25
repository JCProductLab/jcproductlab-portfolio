'use strict';

// ============================================
// MAIN ENTRY POINT
// ============================================

import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initMagnetic } from './modules/magnetic.js';

// Theme runs before DOMContentLoaded to avoid flash of wrong theme
initTheme();

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMagnetic();
});
