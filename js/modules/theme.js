'use strict';

// ============================================
// MÓDULO: Theme toggle — dark / light mode
// Supports: manual toggle + system preference
// ============================================

export function initTheme() {
    const toggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-overlay');
    const html = document.documentElement;
    const STORAGE_KEY = 'theme';

    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Determine initial theme: saved preference > system preference
    const savedTheme = (() => {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch {
            return null;
        }
    })();

    const initialTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');
    applyTheme(initialTheme, false);

    // Toggle on button click
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            applyTheme(current === 'dark' ? 'light' : 'dark', true);
        });
    });

    // Sync with system preference changes (only if no manual override)
    prefersDark.addEventListener('change', (e) => {
        try {
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light', false);
            }
        } catch {
            // localStorage unavailable — ignore
        }
    });

    function applyTheme(theme, persist) {
        html.setAttribute('data-theme', theme);

        if (persist) {
            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch {
                // Fallback — preference lost on refresh, acceptable
            }
        }

        // Update all toggle buttons
        toggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
            }
            btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
            btn.setAttribute('aria-label', theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro');
        });
    }
}
