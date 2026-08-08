'use strict';

// ============================================
// CTA SECTION — coreografía unificada scrub-driven
//
// CASCADE ENTRY:
//   1. Label  — wipe izquierda → derecha (mask-reveal__inner)
//   2. Title  — mask reveal vertical (yPercent 150 → 0)
//   3. Text   — fade + y:30 → 0
//   4. Button — réplica EXACTA del CTA de about (scale 0.5 → 1, opacity,
//               duration 0.6, ease 'back.out(1.4)')
//   5. Email  — fade-in suave
//
// scrub:1 garantiza reverse al subir: email → button → text → title → label.
//
// Wrapper neutro alrededor del botón para no pelear con magnetic.js
// (mismo patrón que about-section-reveal). Origin 'center center' porque
// el body está align-items: center — el "pop" sale del centro del botón.
//
// Rango del trigger: start 'top 80%' / end 'bottom 80%' — la coreografía
// completa cabe en la altura visible de la sección (≈400px), de modo que
// termina antes de que el usuario llegue al final de la página.
// ============================================

export function initCtaSectionReveal() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.cta-section');
    if (!section) return;

    const header = section.querySelector('.section-header');
    const label = header?.querySelector('.section-header__label');
    const title = header?.querySelector('.section-header__title');
    const text = section.querySelector('.cta-section__text');
    // Ambos CTAs (mobile/tablet y desktop) reciben la misma animación
    // de entrada — solo uno está visible según el viewport (ver CSS).
    const ctaMobile = section.querySelector('.cta-section__cta-mobile');
    const ctaDesktop = section.querySelector('.cta-section__cta-desktop');
    const email = section.querySelector('.cta-section__contact-tag');

    // ── Wrap idempotente para mask-reveal del header ─────────────────
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

    const labelInner = wrapInner(label);
    const titleInner = wrapInner(title);

    // ── Wrap del botón (aislamiento del transform magnético) ─────────
    // magnetic.js escribe `transform: translate3d(...)` directo al botón
    // cada frame. Animamos el wrapper (scale + opacity) — el botón conserva
    // su transform inline intacto y magnetic.js no se modifica.
    const wrapButton = (btn) => {
        if (!btn) return null;
        if (btn.parentElement?.dataset.ctaWrapReady === 'true') {
            return btn.parentElement;
        }
        const wrap = document.createElement('span');
        wrap.className = 'cta-cta-wrap';
        wrap.dataset.ctaWrapReady = 'true';
        wrap.style.display = 'inline-flex';
        wrap.style.willChange = 'transform, opacity';
        wrap.style.transformOrigin = 'center center';
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);
        return wrap;
    };

    const ctaMobileWrap = wrapButton(ctaMobile);
    const ctaDesktopWrap = wrapButton(ctaDesktop);

    // sobre-mi.html ('.hero--about' es su único marcador en el DOM): la
    // sección previa a .cta-section ahí no es .about-section (sticky, ver
    // initStickyReveal más abajo), así que el rango fijo 'top 70%'/'bottom
    // 80%' no alcanzaba a mostrar la entrada. Gateado por página para no
    // tocar el timing ya validado en index.html. Este módulo no tiene
    // matchMedia (corre igual en todos los viewports), así que además se
    // excluye mobile explícitamente — el ajuste es solo para tablet/desktop,
    // Contacto en mobile ya estaba bien y no se pidió tocarlo.
    const isAboutPage = !!document.querySelector('.hero--about')
        && !window.matchMedia('(max-width: 699.98px)').matches;

    // ── Estados iniciales ────────────────────────────────────────────
    if (labelInner) gsap.set(labelInner, { xPercent: -100, opacity: 0 });
    if (titleInner) gsap.set(titleInner, { yPercent: 150 });
    if (text) gsap.set(text, { y: 30, opacity: 0 });
    if (ctaMobileWrap) gsap.set(ctaMobileWrap, { scale: 0.5, opacity: 0, transformOrigin: 'center center' });
    if (ctaDesktopWrap) gsap.set(ctaDesktopWrap, { scale: 0.5, opacity: 0, transformOrigin: 'center center' });
    if (email) gsap.set(email, { opacity: 0 });

    // ── Posiciones del timeline (proporciones bajo scrub) ────────────
    const LABEL_DUR = 0.3;
    const TITLE_START = 0.2;
    const TITLE_DUR = 0.3;
    const TEXT_START = TITLE_START + TITLE_DUR;          // 1.0
    const TEXT_DUR = 0.3;
    // CTA: réplica EXACTA de about-section-reveal (scale, dur, ease, opacity)
    const CTA_DUR = 0.3;
    const CTA_START = TEXT_START + TEXT_DUR - 0.1;      // overlap suave con texto
    const EMAIL_DUR = 0.5;
    const EMAIL_START = CTA_START + CTA_DUR - 0.1;        // overlap suave con botón

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: isAboutPage ? 'top 85%' : 'top 70%',
            // 'bottom 80%' termina la animación cuando la sección está
            // completamente visible — evita que el footer aparezca antes
            // de que la coreografía complete. En sobre-mi.html usamos
            // 'bottom 15%' (mirror del 85% del start, relativo al propio
            // elemento) — 'bottom top' (0% margen, usado en el ajuste
            // anterior) hacía que la entrada revertida en scroll-reversa
            // fuera casi imperceptible, con la sección apenas asomando.
            end: isAboutPage ? 'bottom 15%' : 'bottom 80%',
            scrub: 1,
        },
    });

    // ── ENTRY (cascade label → title → text → button → email) ────────
    if (labelInner) {
        tl.to(labelInner, { xPercent: 0, opacity: 1, duration: LABEL_DUR, ease: 'power3.out' }, 0);
    }
    if (titleInner) {
        tl.to(titleInner, { yPercent: 0, duration: TITLE_DUR, ease: 'power4.out' }, TITLE_START);
    }
    if (text) {
        tl.to(text, { y: 0, opacity: 1, duration: TEXT_DUR, ease: 'power3.out' }, TEXT_START);
    }
    if (ctaMobileWrap) {
        // Parámetros idénticos a about-section-reveal: scale 0.5→1,
        // opacity, duration 0.6, ease 'back.out(1.4)'.
        tl.to(ctaMobileWrap, {
            scale: 1,
            opacity: 1,
            duration: CTA_DUR,
            ease: 'back.out(1.4)',
        }, CTA_START);
    }
    if (ctaDesktopWrap) {
        tl.to(ctaDesktopWrap, {
            scale: 1,
            opacity: 1,
            duration: CTA_DUR,
            ease: 'back.out(1.4)',
        }, CTA_START);
    }
    if (email) {
        tl.to(email, { opacity: 1, duration: EMAIL_DUR, ease: 'power2.out' }, EMAIL_START);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
}

// ============================================
// STICKY REVEAL — about-section se queda fija
// mientras cta-section sube y la cubre.
//
// Mecánica: CSS position:sticky;top:0 en .about-section
// (ver main.css). About se pega en el top del viewport
// cuando su top llega a 0, y se despega exactamente
// cuando su bottom toca el top del viewport (= scrollY
// llega a Y_cta). CTA sube en flujo normal y, con
// z-index:2 sobre about z-index:1, pasa por encima.
// No se necesita GSAP pin: el sticky de CSS garantiza
// el comportamiento sin alterar el document height ni
// las posiciones de ScrollTrigger existentes.
// ============================================

export function initStickyReveal() {
    if (!document.querySelector('.about-section, .cta-section')) return;

    // El sticky reveal lo maneja CSS (position:sticky).
    // Esta función existe para poder importarla y llamarla
    // desde main.js sin refactors, en caso de que en el
    // futuro se quieran añadir ajustes JS (p.ej. forçar
    // un ScrollTrigger.refresh() extra tras el resize).
    if (typeof ScrollTrigger !== 'undefined') {
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }
}
