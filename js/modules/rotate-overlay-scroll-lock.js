'use strict';

// ============================================
// ROTATE OVERLAY — scroll lock
// Mientras .rotate-overlay está visible (mobile en landscape, ver
// css/responsive.css) el contenido de atrás seguía siendo scrolleable
// pese a estar tapado por el overlay fixed. Este módulo congela el
// scroll del body en su posición exacta al mostrarse el overlay, y la
// restaura al volver a portrait — el usuario reaparece exactamente
// donde se había quedado.
//
// LOCK_QUERY debe coincidir siempre con la media query de
// css/responsive.css que muestra/oculta .rotate-overlay — si esa regla
// cambia, actualizar acá también.
// ============================================

const LOCK_QUERY = '(orientation: landscape) and (max-height: 500px) and (pointer: coarse)';

export function initRotateOverlayScrollLock() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof window.matchMedia !== 'function') return;

    let scrollY = 0;
    let locked = false;

    function lock() {
        if (locked) return;
        locked = true;
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
    }

    function unlock() {
        if (!locked) return;
        locked = false;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        window.scrollTo(0, scrollY);
    }

    function sync(matches) {
        if (matches) {
            lock();
        } else {
            unlock();
        }
    }

    const mq = window.matchMedia(LOCK_QUERY);
    sync(mq.matches);
    mq.addEventListener('change', (e) => sync(e.matches));
}
