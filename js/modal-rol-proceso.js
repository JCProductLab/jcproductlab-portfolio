'use strict';

// ============================================
// MÓDULO: Modal Mi Rol
// Panel deslizante desde la derecha con overlay
// ============================================

import { initModalScrollHint } from './modal-scroll-hint.js';

export function initModalMiRol() {
    const modal = document.getElementById('modalMiRol');
    // Antes: :first-child. Roto en tablet/mobile porque
    // initCtaButtonsReveal (caso-asdeporte-nav.js) envuelve cada botón en
    // <span class="cs-cta-pop-wrap">, y dentro de ese span cada botón es
    // simultáneamente :first-child y :last-child — querySelector devolvía
    // siempre el primero en orden del documento (Mi rol) para ambos
    // modales. Ahora: índice 0 sobre la lista de botones.
    const triggerBtns = document.querySelectorAll('.cs-contexto__actions .btn--secondary');
    const triggerBtn = triggerBtns[0];
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');
    const inner = modal?.querySelector('.modal-rol-proceso__inner');
    const scrollHintEl = modal?.querySelector('.modal-rol-proceso__scroll-hint');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content) return;

    const scrollHint = initModalScrollHint(inner, scrollHintEl);

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