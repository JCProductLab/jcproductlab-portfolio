'use strict';

// ============================================
// MÓDULO: Navigation
// Handles: hamburger menu, nav overlay, scroll glassmorphism
// ============================================

export function initNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('nav-overlay');
    const closeBtn = overlay?.querySelector('.nav-overlay__close');
    const overlayLinks = overlay?.querySelectorAll('.nav-overlay__link');

    if (!hamburger || !overlay) return;

    // ----------------------------------------
    // Menu open / close
    // ----------------------------------------

    function openMenu() {
        overlay.classList.add('is-open');
        overlay.removeAttribute('aria-hidden');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Cerrar menú');
        document.body.style.overflow = 'hidden';
        // Move focus to close button
        closeBtn?.focus();
    }

    function closeMenu() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
        // Return focus to hamburger
        hamburger.focus();
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);

    // Close on any nav link click
    overlayLinks?.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key — keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Focus trap — keep focus inside overlay while open
    overlay.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !overlay.classList.contains('is-open')) return;

        const focusable = overlay.querySelectorAll(
            'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    // ----------------------------------------
    // Nav glassmorphism on scroll
    // ----------------------------------------

    if (!header) return;

    const onScroll = () => {
        header.classList.toggle('header--scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run immediately to set correct initial state
}
