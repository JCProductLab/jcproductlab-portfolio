// js/modules/scroll-to-top.js
// Botón flotante "volver arriba" — mobile/tablet. Compensa los bullets
// del section-nav (desktop-only, ver scroll-nav.css/section-nav.js) para
// viajar rápido en páginas largas — mobile no tiene ese recurso.
//
// Se inyecta por JS, nunca vive en el HTML autoreado de ninguna página:
// mismo criterio que el resto de los módulos mobile de esta sesión — así
// no hace falta gatear/ocultar nada para desktop, el botón simplemente
// no existe ahí (initScrollToTop se sale de inmediato si matchea
// MQ_DESKTOP).

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

// Aparece después de bajar ~una pantalla — antes de eso, volver arriba
// no tiene sentido (ya estás ahí).
const SHOW_AFTER_PX = 600;

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
}

// Scroll a mano, cuadro a cuadro, con easing propio — no el scroll nativo
// del navegador (behavior:'smooth' de CSS da una curva genérica, no
// diseñada). CRÍTICO: cada llamada a scrollTo fuerza behavior:'instant'
// — html tiene scroll-behavior:smooth global (reset.css), así que sin
// ese override cada cuadro dispararía SU PROPIA animación suave del
// navegador por encima de esta, compitiendo consigo misma.
function animateScrollToTop() {
    const startY = window.scrollY;
    if (startY <= 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
    }

    // Duración proporcional a la distancia, acotada — un scroll corto no
    // debe sentirse lento, uno larguísimo no debe sentirse eterno.
    const duration = Math.min(900, Math.max(400, startY * 0.4));
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = easeInOutCubic(progress);
        window.scrollTo({ top: Math.round(startY * (1 - eased)), left: 0, behavior: 'instant' });
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

export function initScrollToTop() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;

    // .btn-icon: mismo botón circular que .nav__hamburger (glass, 48px,
    // ver atoms.css) — .scroll-to-top solo agrega la posición fija y la
    // animación de entrada/pulso encima.
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-icon scroll-to-top';
    button.setAttribute('aria-label', 'Volver al inicio');
    button.innerHTML = '<i class="ph ph-caret-up" aria-hidden="true"></i>';
    document.body.appendChild(button);

    // Truco conocido para iOS Safari: sin un listener de touch real en
    // el elemento, ":active" no responde al instante en el primer tap
    // de la página (delay de ~300ms por la detección de doble-tap).
    button.addEventListener('touchstart', () => {}, { passive: true });

    let visible = false;
    let pulsed = false;
    let ticking = false;

    function update() {
        ticking = false;
        const shouldShow = window.scrollY > SHOW_AFTER_PX;
        if (shouldShow === visible) return;
        visible = shouldShow;
        button.classList.toggle('scroll-to-top--visible', visible);

        // Pulso de atención — solo la primera vez que aparece en toda la
        // sesión de scroll, para que se note sin volverse repetitivo
        // cada vez que cruza el umbral hacia arriba/abajo.
        if (visible && !pulsed) {
            pulsed = true;
            button.classList.add('scroll-to-top--pulse');
            button.addEventListener('animationend', () => {
                button.classList.remove('scroll-to-top--pulse');
            }, { once: true });
        }
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    button.addEventListener('click', animateScrollToTop);
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
}
