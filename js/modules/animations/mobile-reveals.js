// js/modules/animations/mobile-reveals.js
// Capa de animación de la versión mobile/tablet del caso: reveals
// one-shot (clase .mrv/.mrv--in, ver case-study.css) + count-up de
// métricas. IntersectionObserver vanilla, sin GSAP a propósito — la
// página mobile debe quedar 100% funcional aunque el CDN falle.
// En MQ_DESKTOP no hace nada (ahí manda el scrollytelling GSAP).
//
// Dos mecanismos de reveal, según si el elemento arranca dentro o fuera
// del viewport:
// - revealSelectors: elementos fuera del viewport al cargar — JS agrega
//   .mrv (oculto) y usa IntersectionObserver para detectar el cruce real
//   por scroll y agregar .mrv--in.
// - immediateSelectors: elementos YA visibles en el primer frame (ej. el
//   título del hero). El oculto es el reposo por defecto del CSS (no lo
//   crea JS — mismo patrón que .hero-word en main.css), así que JS solo
//   agrega .mrv--in tras window.load + delay fijo. Usar IO acá sería
//   pedirle que detecte un cruce que nunca ocurre.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const COUNTER_DURATION_MS = 800;

// Los valores tipo "+30%" o "90.8%" pueden convivir con hijos <i> (flecha
// Phosphor): se anima solo el primer nodo de texto con dígitos, preservando
// prefijo (signo) y sufijo (%) del propio nodo y el resto de hijos intactos.
function findNumericTextNode(el) {
    for (const node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && /\d/.test(node.data)) {
            return node;
        }
    }
    return null;
}

function animateCounter(el) {
    const node = findNumericTextNode(el);
    if (!node) return;

    const original = node.data;
    const match = original.match(/\d+(?:\.\d+)?/);
    if (!match) return;

    const target = parseFloat(match[0]);
    const decimals = (match[0].split('.')[1] || '').length;
    const prefix = original.slice(0, match.index);
    const suffix = original.slice(match.index + match[0].length);
    const start = performance.now();

    const tick = (now) => {
        const t = Math.min(1, (now - start) / COUNTER_DURATION_MS);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cúbico
        node.data = prefix + (target * eased).toFixed(decimals) + suffix;
        if (t < 1) {
            requestAnimationFrame(tick);
        } else {
            node.data = original; // valor exacto final, sin redondeos
        }
    };
    requestAnimationFrame(tick);
}

export function initMobileReveals({ revealSelectors = [], counterSelectors = [], immediateSelectors = [] } = {}) {
    // Desktop: el scrollytelling GSAP es el dueño de todas las animaciones.
    if (window.matchMedia(MQ_DESKTOP).matches) return;

    // Con reduced-motion no se marca nada: el contenido ya está visible con
    // sus valores finales — estado seguro por diseño.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Elementos ya visibles en el primer frame (ej. el título del hero):
    // NO usan IntersectionObserver ni necesitan que JS cree un estado
    // "oculto" — el oculto YA es el reposo por defecto del CSS (ver
    // case-study.css), igual que .hero-word en main.css. Acá JS solo
    // agrega la clase que revela, tras window.load + delay fijo. Evita
    // la carrera de IO/doble-rAF por completo: no hay "antes" que JS deba
    // crear y pintar a tiempo.
    const immediateEls = document.querySelectorAll(immediateSelectors.join(', '));

    function revealImmediate() {
        setTimeout(() => {
            immediateEls.forEach((el) => el.classList.add('mrv--in'));
        }, 100);
    }

    if (immediateEls.length) {
        if (document.readyState === 'complete') {
            revealImmediate();
        } else {
            window.addEventListener('load', revealImmediate, { once: true });
        }
    }

    if (typeof IntersectionObserver === 'undefined') return;

    const revealEls = document.querySelectorAll(revealSelectors.join(', '));
    const counterEls = document.querySelectorAll(counterSelectors.join(', '));
    const counterSet = new Set(counterEls);

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('mrv--in');
            if (counterSet.has(entry.target)) {
                animateCounter(entry.target);
            }
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => {
        el.classList.add('mrv');
        io.observe(el);
    });

    // Contadores que no son también reveal (hoy todos lo son, pero el
    // módulo no lo asume): se observan igual para disparar el count-up.
    counterEls.forEach((el) => {
        if (!el.classList.contains('mrv')) {
            io.observe(el);
        }
    });
}
