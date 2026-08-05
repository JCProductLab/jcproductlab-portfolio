'use strict';

// ============================================
// MASK REVEAL — Section headers
// Label: wipe horizontal izquierda → derecha.
// h2: mask reveal vertical, escalonado tras el label.
// Bidireccional: anima al entrar y al salir del viewport.
// Excluye h2 dentro de .case-card (usan .case-card-title).
// ============================================

export function initMaskReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const headers = document.querySelectorAll('.section-header');
    if (!headers.length) return;

    const wrapInner = (el) => {
        if (!el) return null;
        if (el.dataset.maskReady === 'true') {
            return el.querySelector(':scope > .mask-reveal__inner');
        }
        const inner = document.createElement('span');
        inner.className = 'mask-reveal__inner';
        while (el.firstChild) inner.appendChild(el.firstChild);
        el.appendChild(inner);
        el.classList.add('mask-reveal');
        el.dataset.maskReady = 'true';
        return inner;
    };

    headers.forEach((header) => {
        if (header.closest('.case-card')) return;
        // Testimonial section header is orchestrated by testimonial-cards-reveal.js
        if (header.closest('.testimonial-section')) return;
        // About section header is orchestrated by about-section-reveal.js
        if (header.closest('.about-section')) return;
        // CTA section header is orchestrated by cta-section-reveal.js
        if (header.closest('.cta-section')) return;
        // About bio header is orchestrated by pinned-overflow-section.js (pin)
        if (header.closest('.about-bio')) return;
        // Methodology header is orchestrated by pinned-overflow-section.js (pin)
        if (header.closest('.methodology')) return;

        const title = header.querySelector('.section-header__title');
        const label = header.querySelector('.section-header__label');
        if (!title) return;

        const titleInner = wrapInner(title);
        const labelInner = wrapInner(label);
        if (!titleInner) return;

        const cssDur = parseFloat(getComputedStyle(header).getPropertyValue('--mask-reveal-duration'));
        const dur = Number.isFinite(cssDur) && cssDur > 0 ? cssDur : 2;

        // yPercent: 150 — margen suficiente para que los acentos de mayúsculas
        // (é, ó, etc.) que sobresalen del box formal no asomen antes de animar.
        gsap.set(titleInner, { yPercent: 150 });
        if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: 'top 70%',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
            },
            defaults: { ease: 'power4.out' },
        });

        // 1. Label: wipe izquierda → derecha
        if (labelInner) {
            tl.to(labelInner, { xPercent: 0, opacity: 1, duration: dur * 0.6 }, 0);
        }
        // 2. h2: entra escalonado, después de que el label arranca (~30% de su duración)
        tl.to(titleInner, { yPercent: 0, duration: dur }, labelInner ? dur * 0.3 : 0);
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
}
