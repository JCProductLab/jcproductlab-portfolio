'use strict';

// ============================================
// MÓDULO: Modal Mi Rol
// Panel deslizante desde la derecha con overlay
// ============================================

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initModalMiRol() {
    const modal = document.getElementById('modalMiRol');
    const triggerBtn = document.querySelector('.cs-contexto__actions .btn--secondary:first-child');
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');
    const inner = modal?.querySelector('.modal-rol-proceso__inner');
    const scrollHint = modal?.querySelector('.modal-rol-proceso__scroll-hint');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content) return;

    let isOpen = false;

    // Pista de scroll (degradado + chevron, ver modal-rol-proceso.css) —
    // exclusiva de mobile/tablet, donde .inner tiene scroll propio. Se
    // oculta si el contenido no desborda o si ya se llegó al fondo;
    // reaparece si el usuario sube de nuevo.
    const scrollHintEnabled = Boolean(inner && scrollHint && !window.matchMedia(MQ_DESKTOP).matches);
    let hintTicking = false;

    function updateScrollHint() {
        hintTicking = false;
        const hasOverflow = inner.scrollHeight > inner.clientHeight + 1;
        const atBottom = inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 4;
        scrollHint.classList.toggle('modal-rol-proceso__scroll-hint--hidden', !hasOverflow || atBottom);
    }

    if (scrollHintEnabled) {
        inner.addEventListener('scroll', () => {
            if (!hintTicking) {
                hintTicking = true;
                requestAnimationFrame(updateScrollHint);
            }
        }, { passive: true });
        window.addEventListener('resize', updateScrollHint);
        updateScrollHint();
    }

    // Abre el modal
    function openModal() {
        if (isOpen) return;
        isOpen = true;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (scrollHintEnabled) updateScrollHint();

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