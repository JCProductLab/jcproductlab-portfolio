'use strict';

// ============================================
// MÓDULO: Modal Qué Aprendí
// Panel deslizante desde la derecha con overlay
// ============================================

import { initModalScrollHint } from './modal-scroll-hint.js';

export function initModalQueAprendi() {
    const modal = document.getElementById('modalQueAprendi');
    const triggerBtn = document.querySelector('.rs-testimonio__closing .btn--secondary');
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');
    const right = modal?.querySelector('.modal-que-aprendi__right');
    const scrollHintEl = modal?.querySelector('.modal-rol-proceso__scroll-hint');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content) return;

    const scrollHint = initModalScrollHint(right, scrollHintEl);

    let isOpen = false;

    // Abre el modal
    function openModal() {
        if (isOpen) return;
        isOpen = true;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        scrollHint.update();

        // Animación de entrada: slide desde la derecha
        gsap.to(content, {
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    }

    // Cierra el modal
    function closeModal() {
        if (!isOpen) return;

        // Animación de salida: slide hacia la derecha
        gsap.to(content, {
            x: '100%',
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
                isOpen = false;
            }
        });
    }

    // Event listeners
    triggerBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    });
}
