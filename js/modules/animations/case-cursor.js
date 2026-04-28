// ============================================
// CASE STUDY CURSOR — Cursor seccional
// Solo activo en section.case-cards, pointer: fine, >= 1024px
// ============================================

export function initCaseCursor() {
    const isTouch = navigator.maxTouchPoints > 0 ||
                    window.matchMedia('(any-pointer: coarse)').matches;
    if (window.innerWidth < 1024 || isTouch) return;

    const cursor = document.getElementById('case-cursor');
    const section = document.querySelector('.case-cards');
    const globalCursor = document.getElementById('customCursor');
    const fluidCanvas = document.getElementById('fluid');
    if (!cursor || !section) return;

    let rafId = null;
    let posX = 0, posY = 0;

    function applyPosition() {
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        rafId = null;
    }

    section.addEventListener('mousemove', (e) => {
        posX = e.clientX;
        posY = e.clientY;
        if (!rafId) rafId = requestAnimationFrame(applyPosition);
    });

    section.addEventListener('mouseenter', () => {
        cursor.classList.add('case-cursor--active');
        // Suprimir cursor global y estela fluida — solo dentro de esta sección
        if (globalCursor) globalCursor.style.opacity = '0';
        if (fluidCanvas) {
            fluidCanvas.style.transition = 'opacity 0.25s ease';
            fluidCanvas.style.opacity = '0';
        }
    });

    section.addEventListener('mouseleave', () => {
        cursor.classList.remove('case-cursor--active');
        // Restaurar cursor global y estela fluida al salir
        if (globalCursor) globalCursor.style.opacity = '';
        if (fluidCanvas) fluidCanvas.style.opacity = '';
    });

    // Cards clicables — solo pointer: fine, >= 1024px (misma condición que el guard)
    section.querySelectorAll('.case-card[data-href]').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = card.dataset.href;
        });
    });
}
