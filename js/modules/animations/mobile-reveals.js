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
//   agrega .mrv--in tras DOMContentLoaded + delay fijo. Usar IO acá sería
//   pedirle que detecte un cruce que nunca ocurre.
//   DOMContentLoaded en vez de window.load a propósito: el título no
//   depende de imágenes/video/CDN de terceros que sí bloquean "load" —
//   en una página pesada como esta, "load" puede tardar de más en redes
//   reales y termina compitiendo con otro trabajo de JS que también
//   engancha a "load" (ver main.js), corriendo la revelación justo
//   cuando el hilo principal está ocupado.

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

function parseCounterNode(el) {
    const node = findNumericTextNode(el);
    if (!node) return null;

    const original = node.data;
    const match = original.match(/\d+(?:\.\d+)?/);
    if (!match) return null;

    return {
        node,
        original,
        target: parseFloat(match[0]),
        decimals: (match[0].split('.')[1] || '').length,
        prefix: original.slice(0, match.index),
        suffix: original.slice(match.index + match[0].length),
    };
}

// Deja el nodo en "0" (mismo prefijo/sufijo del valor final) ANTES de
// que arranque cualquier fade-in que lo revele — usado por
// apertura-tablet.js, donde el número queda visible en el primer frame
// (sin scroll de por medio que lo mantenga oculto mientras tanto). Sin
// esto, lo que se ve durante el fade-in es el valor final estático del
// HTML ("25%"), y recién al terminar ese fade animateCounter lo resetea
// a "0" para volver a contar — un salto visible confirmado en vivo.
// Devuelve el parseo original (con el target real, ej. 25) — pasárselo a
// animateCounter después es OBLIGATORIO en este flujo: animateCounter
// por defecto vuelve a leer el texto del DOM para saber a qué valor
// animar, y para ese momento el texto ya dice "0" (lo que acaba de
// escribir esta función) — sin el parseo original, contaría de 0 a 0.
export function primeCounter(el) {
    const parsed = parseCounterNode(el);
    if (!parsed) return null;
    parsed.node.data = parsed.prefix + (0).toFixed(parsed.decimals) + parsed.suffix;
    return parsed;
}

export function animateCounter(el, onComplete, primed) {
    const parsed = primed || parseCounterNode(el);
    if (!parsed) return;
    const { node, original, target, decimals, prefix, suffix } = parsed;
    const start = performance.now();

    const tick = (now) => {
        // Clampeado también por abajo (no solo arriba): el primer
        // callback de requestAnimationFrame a veces llega con un "now"
        // levísimamente anterior a "start" (quirk de rAF, intermitente
        // según el navegador/frame) — sin este piso, t da negativo,
        // eased también (1 - (1-t)³ con t<0 es negativo), y se ve un
        // número negativo por un instante (bug confirmado en vivo).
        const t = Math.max(0, Math.min(1, (now - start) / COUNTER_DURATION_MS));
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cúbico
        node.data = prefix + (target * eased).toFixed(decimals) + suffix;
        if (t < 1) {
            requestAnimationFrame(tick);
        } else {
            node.data = original; // valor exacto final, sin redondeos
            if (onComplete) onComplete();
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
    // agrega la clase que revela, tras DOMContentLoaded + delay fijo.
    // Evita la carrera de IO/doble-rAF por completo: no hay "antes" que
    // JS deba crear y pintar a tiempo. No hace falta el fallback por
    // readyState === 'complete' que usaría "load": este módulo corre
    // como script deferred, y los deferred siempre terminan de ejecutar
    // ANTES de que el navegador dispare DOMContentLoaded — el evento
    // nunca pudo haber disparado ya en este punto.
    const immediateEls = immediateSelectors.length
        ? document.querySelectorAll(immediateSelectors.join(', '))
        : [];

    function revealImmediate() {
        setTimeout(() => {
            immediateEls.forEach((el) => el.classList.add('mrv--in'));
        }, 100);
    }

    if (immediateEls.length) {
        document.addEventListener('DOMContentLoaded', revealImmediate, { once: true });
    }

    if (typeof IntersectionObserver === 'undefined') return;

    const revealEls = revealSelectors.length
        ? document.querySelectorAll(revealSelectors.join(', '))
        : [];
    const counterEls = counterSelectors.length
        ? document.querySelectorAll(counterSelectors.join(', '))
        : [];
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
