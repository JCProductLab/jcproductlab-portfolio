'use strict';

// ============================================
// MÓDULO: Pista de scroll para paneles de modal (mobile/tablet)
// Compartido por modal-rol-proceso.js / modal-proceso.js / modal-que-
// aprendi.js — todos usan el mismo patrón de contenido scrolleable con
// scrollbar oculta (ver modal-rol-proceso.css): degradado + chevron que
// se oculta si no hay overflow o si ya se llegó al fondo, y reaparece si
// el usuario sube de nuevo.
// ============================================

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

// container: elemento con overflow-y:auto (el que realmente scrollea).
// hint: el elemento .modal-rol-proceso__scroll-hint (degradado + chevron).
// Devuelve { update } para que el caller pueda forzar un recálculo — hace
// falta cuando el contenido cambia de alto sin que haya scroll de por
// medio (p. ej. al cambiar de tab en "El Proceso", el párrafo cambia de
// largo). En desktop no hace nada (el patrón es exclusivo de mobile).
export function initModalScrollHint(container, hint) {
    if (!container || !hint || window.matchMedia(MQ_DESKTOP).matches) {
        return { update() {} };
    }

    let ticking = false;

    function update() {
        ticking = false;
        const hasOverflow = container.scrollHeight > container.clientHeight + 1;
        const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 4;
        hint.classList.toggle('modal-rol-proceso__scroll-hint--hidden', !hasOverflow || atBottom);
    }

    container.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });

    window.addEventListener('resize', update);
    update();

    return { update };
}
