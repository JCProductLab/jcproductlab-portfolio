'use strict';

// ============================================
// TESTIMONIAL CARDS — Tilt 3D + Parallax + Shine
// ============================================
//
// • Parallax (desktop + mobile): el icono de comillas y el avatar
//   reciben translateY proporcional al avance del card por el viewport.
//   La comilla se mueve más despacio que el avatar para crear depth.
//
// • Tilt 3D + Shine (sólo pointer:fine): rotateX/rotateY + scale 1.02
//   y un radial-gradient .shine que sigue al cursor. Inyectado vía JS.
//
// • Proximity (sólo pointer:coarse): cuando la card pasa por el centro
//   del viewport, su .shine se enciende suavemente al 10% y la card
//   escala 1.02. La intensidad es continua según la distancia al centro.
//
// La composición de transforms se hace con CSS custom properties
// (--parallax-y, --tilt-z, --tilt-rx, --tilt-ry, --tilt-scale) para que
// parallax y tilt no se sobrescriban entre sí.
// ============================================

const TILT_MAX_DEG = 1 / 20;            // factor (centerY-y)/20 → grados
const TILT_SCALE = '1.02';
const TILT_LIFT_Z = '40px';
const PARALLAX_QUOTE_AMP = -14;         // px máx (signo negativo: queda atrás)
const PARALLAX_AVATAR_AMP = 8;          // px máx (sentido opuesto)
const PROXIMITY_RANGE = 0.4;            // fracción del viewport (40%) de zona activa
const PROXIMITY_SHINE_MAX = 0.10;       // 10% opacidad máx en mobile
const PROXIMITY_SCALE_GAIN = 0.02;      // 1 → 1.02

export function initInteractions() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    // 1) Inyectar capa .testimonial-card__shine en cada card
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

    // 2) Scroll-driven: parallax (siempre) + proximity (sólo coarse)
    let ticking = false;
    const updateScroll = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            // sp ∈ [-1, 1]: -1 si centro arriba del viewport, +1 si abajo, 0 centrado.
            const sp = clamp(cardCenter / vh - 0.5, -1, 1);

            const quote = card.querySelector('.testimonial-card__quote');
            const avatar = card.querySelector('.testimonial-card__author .avatar');

            // Comilla: factor pequeño con signo negativo → más lenta = "más atrás"
            if (quote) {
                quote.style.setProperty('--parallax-y', `${(sp * PARALLAX_QUOTE_AMP).toFixed(2)}px`);
            }
            // Avatar: amplitud menor con sentido opuesto → "más adelante"
            if (avatar) {
                avatar.style.setProperty('--parallax-y', `${(sp * PARALLAX_AVATAR_AMP).toFixed(2)}px`);
            }

            // Proximity sólo en touch / coarse pointer
            if (!isFinePointer) {
                const dist = Math.abs(cardCenter - vh / 2);
                const proximity = clamp(1 - dist / (vh * PROXIMITY_RANGE), 0, 1);
                card.style.setProperty(
                    '--tilt-scale',
                    (1 + PROXIMITY_SCALE_GAIN * proximity).toFixed(4)
                );
                const shine = card.querySelector('.testimonial-card__shine');
                if (shine) shine.style.opacity = (PROXIMITY_SHINE_MAX * proximity).toFixed(3);
            }
        });
        ticking = false;
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateScroll);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    requestUpdate(); // primer cálculo

    // 3) Tilt 3D + Shine — sólo desktop con pointer fino
    if (isFinePointer) {
        cards.forEach(initTiltOnCard);
    }
}

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
            rx: (rect.height / 2 - y) * TILT_MAX_DEG,
            ry: (x - rect.width / 2) * TILT_MAX_DEG,
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
