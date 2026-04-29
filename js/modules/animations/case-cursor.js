// ============================================
// CASE STUDY CURSOR — Cursor seccional
// Solo activo en section.case-cards, pointer: fine, >= 1024px
// Activación y animación controladas por case-cards-scroll.js
// ============================================

export function animateShowCaseCursor() {
    const cursor       = document.getElementById('case-cursor');
    const globalCursor = document.getElementById('customCursor');
    const fluidCanvas  = document.getElementById('fluid');
    if (!cursor) return;

    // Inicia la rotación del anillo
    cursor.classList.add('case-cursor--active');

    // Nace desde el centro con efecto elástico (GSAP controla opacity via inline, gana sobre CSS)
    gsap.fromTo(cursor,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', overwrite: true }
    );

    if (globalCursor) globalCursor.style.opacity = '0';
    if (fluidCanvas) {
        fluidCanvas.style.transition = 'opacity 0.25s ease';
        fluidCanvas.style.opacity = '0';
    }
}

export function animateHideCaseCursor() {
    const cursor       = document.getElementById('case-cursor');
    const globalCursor = document.getElementById('customCursor');
    const fluidCanvas  = document.getElementById('fluid');
    if (!cursor) return;

    gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'back.in(1.7)',
        overwrite: true,
        onComplete: () => cursor.classList.remove('case-cursor--active')
    });

    if (globalCursor) globalCursor.style.opacity = '';
    if (fluidCanvas) fluidCanvas.style.opacity = '';
}

export function initCaseCursor() {
    const isTouch = navigator.maxTouchPoints > 0 ||
                    window.matchMedia('(any-pointer: coarse)').matches;
    if (window.innerWidth < 1024 || isTouch) return;

    const cursor  = document.getElementById('case-cursor');
    const section = document.querySelector('.case-cards');
    if (!cursor || !section) return;

    let rafId = null;
    let posX = 0, posY = 0;

    function applyPosition() {
        cursor.style.left = `${posX}px`;
        cursor.style.top  = `${posY}px`;
        rafId = null;
    }

    // Posición del cursor se sigue calculando con el mouse
    section.addEventListener('mousemove', (e) => {
        posX = e.clientX;
        posY = e.clientY;
        if (!rafId) rafId = requestAnimationFrame(applyPosition);
    });

    // mouseenter / mouseleave eliminados — activación delegada a case-cards-scroll.js

    // Cards clicables — solo pointer: fine, >= 1024px
    section.querySelectorAll('.case-card[data-href]').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = card.dataset.href;
        });
    });
}
