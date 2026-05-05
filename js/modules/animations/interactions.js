'use strict';

// ============================================
// TESTIMONIAL CARDS — Tilt 3D + Parallax por capas + Shine
// ============================================
//
// • Animación 1 — Layered Parallax (desktop + mobile):
//   Scroll listener throttled con requestAnimationFrame.
//   Cada capa interna se desplaza vertically con un factor distinto
//   sobre la posición de la card respecto al viewport center:
//     - quote   → factor 0.05  (la más lenta, plano "más profundo")
//     - text    → factor 0.02  (intermedia)
//     - footer  → 0           (capa de referencia, sin parallax)
//
// • Animación 2 — Tilt 3D + Shine (sólo pointer:fine):
//   rotateX/rotateY ÷ 20 + scale3d(1.02) + radial-gradient .shine
//   que sigue al cursor. Inyectado vía JS.
//
// • Animación 3 — Proximity Reveal (sólo pointer:coarse):
//   IntersectionObserver con rootMargin -35%/-35% (banda central
//   del 30% del viewport). Cuando la card intersecta la banda,
//   .shine.opacity → 0.18 y card.scale → 1.02. Al salir, transición
//   suave de vuelta a 0 / 1 vía CSS transition.
//
// La composición de transforms se hace con CSS custom properties
// (--parallax-y, --tilt-z, --tilt-rx, --tilt-ry, --tilt-scale) para que
// las tres animaciones convivan sin pisarse.
// ============================================

// Tilt 3D
const TILT_MAX_DEG_FACTOR = 1 / 20;     // (centerY - y) / 20 → grados
const TILT_SCALE = '1.02';
const TILT_LIFT_Z = '40px';

// Parallax por capas (Animación 1)
const PARALLAX_FACTOR_QUOTE = 0.05;
const PARALLAX_FACTOR_TEXT = 0.02;

// Proximity reveal (Animación 3)
const PROXIMITY_SHINE_OPACITY = '0.18';
const PROXIMITY_SCALE = '1.02';
const PROXIMITY_BAND = '-35% 0px -35% 0px'; // 30% central del viewport

export function initInteractions() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    // Inyectar capa .testimonial-card__shine en cada card
    cards.forEach((card) => {
        if (!card.querySelector('.testimonial-card__shine')) {
            const shine = document.createElement('div');
            shine.className = 'testimonial-card__shine';
            shine.setAttribute('aria-hidden', 'true');
            card.prepend(shine);
        }
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // === Animación 1 — Layered Parallax ===
    initLayeredParallax(cards);

    // === Animación 3 — Proximity Reveal (sólo coarse pointer) ===
    if (!isFinePointer) initProximityReveal(cards);

    // === Animación 2 — Tilt 3D + Shine (sólo fine pointer) ===
    if (isFinePointer) cards.forEach(initTiltOnCard);
}

// --------------------------------------------
// Animación 1 — Layered Parallax (scroll + rAF)
// --------------------------------------------
function initLayeredParallax(cards) {
    let ticking = false;

    const update = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const halfVh = vh / 2;
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            // offset signed en píxeles: 0 cuando card center == viewport center
            const offset = cardCenter - halfVh;
            // Limitar a ±vh/2 para evitar valores extremos cuando la card
            // está muy fuera del viewport
            const clampedOffset = clamp(offset, -halfVh, halfVh);

            const quote = card.querySelector('.testimonial-card__quote');
            const text = card.querySelector('.testimonial-card__text');

            if (quote) {
                const y = clampedOffset * PARALLAX_FACTOR_QUOTE;
                quote.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
            }
            if (text) {
                const y = clampedOffset * PARALLAX_FACTOR_TEXT;
                text.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
            }
            // .testimonial-card__author → factor 0 (capa de referencia, sin transform)
        });
        ticking = false;
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    requestUpdate(); // primer cálculo
}

// --------------------------------------------
// Animación 3 — Proximity Reveal (IntersectionObserver)
// --------------------------------------------
function initProximityReveal(cards) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const card = entry.target;
                const shine = card.querySelector('.testimonial-card__shine');
                if (entry.isIntersecting) {
                    // Card entró en la banda central del viewport
                    card.style.setProperty('--tilt-scale', PROXIMITY_SCALE);
                    if (shine) shine.style.opacity = PROXIMITY_SHINE_OPACITY;
                } else {
                    // Salió → reset suave (CSS transition se encarga del fade)
                    card.style.setProperty('--tilt-scale', '1');
                    if (shine) shine.style.opacity = '0';
                }
            });
        },
        {
            root: null,
            rootMargin: PROXIMITY_BAND,
            threshold: 0,
        }
    );
    cards.forEach((card) => observer.observe(card));
}

// --------------------------------------------
// Animación 2 — Tilt 3D + Shine (mousemove + rAF)
// --------------------------------------------
function initTiltOnCard(card) {
    const shine = card.querySelector('.testimonial-card__shine');
    const lifters = [
        card.querySelector('.testimonial-card__quote'),
        card.querySelector('.testimonial-card__text'),
        card.querySelector('.testimonial-card__author'),
    ].filter(Boolean);

    let raf = null;
    let pending = null;

    const apply = () => {
        raf = null;
        if (!pending) return;
        const { rx, ry, x, y, w, h } = pending;
        card.style.setProperty('--tilt-rx', `${rx.toFixed(2)}deg`);
        card.style.setProperty('--tilt-ry', `${ry.toFixed(2)}deg`);
        card.style.setProperty('--tilt-scale', TILT_SCALE);
        lifters.forEach((el) => el.style.setProperty('--tilt-z', TILT_LIFT_Z));
        if (shine) {
            const mx = (x / w) * 100;
            const my = (y / h) * 100;
            shine.style.background =
                `radial-gradient(circle at ${mx.toFixed(1)}% ${my.toFixed(1)}%, ` +
                `rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)`;
            shine.style.opacity = '1';
        }
    };

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        pending = {
            rx: (rect.height / 2 - y) * TILT_MAX_DEG_FACTOR,
            ry: (x - rect.width / 2) * TILT_MAX_DEG_FACTOR,
            x, y, w: rect.width, h: rect.height,
        };
        if (raf == null) raf = requestAnimationFrame(apply);
    });

    card.addEventListener('mouseleave', () => {
        if (raf != null) {
            cancelAnimationFrame(raf);
            raf = null;
        }
        pending = null;
        card.style.setProperty('--tilt-rx', '0deg');
        card.style.setProperty('--tilt-ry', '0deg');
        card.style.setProperty('--tilt-scale', '1');
        lifters.forEach((el) => el.style.setProperty('--tilt-z', '0px'));
        if (shine) shine.style.opacity = '0';
    });
}

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}
