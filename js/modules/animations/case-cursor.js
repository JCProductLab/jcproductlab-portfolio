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
        if (globalCursor) globalCursor.style.opacity = '0';
    });

    section.addEventListener('mouseleave', () => {
        cursor.classList.remove('case-cursor--active');
        if (globalCursor) globalCursor.style.opacity = '';
    });
}
