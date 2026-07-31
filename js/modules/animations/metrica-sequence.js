// js/modules/animations/metrica-sequence.js
// Animación mobile/tablet de la sección Métrica, bespoke — no vive en
// mobile-reveals.js porque necesita coreografía propia, no reutilizable
// por otras secciones.
//
// - initMetricaSequence: el número cuenta primero (animateCounter, ver
//   mobile-reveals.js) y recién cuando termina se disparan en simultáneo
//   el trazado de la flecha (stroke-dashoffset, misma coreografía que
//   desktop: diagonal → cuña → punta → círculos) y el fade + slide-up
//   del párrafo.
// - initMetricaPin: frena a .cs-metrica en el borde inferior de pantalla
//   una vez que llega ahí subiendo con el scroll normal, en vez de seguir
//   de largo. Ver comentario completo más abajo.
//
// (El cometa en loop de tiempo fijo se probó y se sacó: no se veía bien
// y ralentizaba en iPhone real — ver .cs-metrica__comet, oculto en mobile
// vía display:none en case-study.css.)

import { animateCounter } from './mobile-reveals.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
// Piso, no rango: "tablet" es todo lo que NO es desktop (ver MQ_DESKTOP)
// y mide al menos 700px — mismo criterio que decisiones-accordion.js/
// decision-mc-pin.js (solo excluyen MQ_DESKTOP), sumado al piso de
// 700px para separarse de mobile (<700px). Un táctil de 1300px+
// (pointer:coarse) también entra acá, igual que en el CSS (ver header
// de case-study-responsive.css).
const MQ_TABLET_FLOOR = '(min-width: 700px)';

// Arma el estado inicial oculto de la flecha SVG (stroke-dasharray/
// dashoffset + fillet/caps en opacity:0) y devuelve una función reveal()
// que la traza. La geometría del SVG (atributo "d") es fija — no cambia
// entre mobile/tablet/desktop, solo el tamaño vía CSS — así que basta
// con medirla una vez acá. Reutilizada por initMetricaSequence (mobile,
// abajo) y por apertura-tablet.js (tablet) — mismo trazado, disparado
// por triggers distintos según el contexto (IntersectionObserver acá,
// encadenado a la entrada del título ahí).
export function setupMetricaArrow(arrow) {
    const mainPath = arrow.querySelector('.cs-metrica__arrow-main');
    const tipPaths = arrow.querySelectorAll('.cs-metrica__arrow-tip');
    const caps = arrow.querySelectorAll('.cs-metrica__arrow-cap');
    const fillet = arrow.querySelector('.cs-metrica__arrow-fillet');

    // getTotalLength() (abajo) fuerza un reflow síncrono, que "fotografía"
    // el trazo en su estado por defecto (dibujado por completo, sin
    // dasharray — geometría cruda del SVG). Por eso el orden acá importa:
    // primero se aplican TODOS los valores del estado oculto (dasharray/
    // dashoffset/opacity) SIN transition todavía — un cambio de estilo sin
    // "transition" activo nunca anima, pasa directo al valor nuevo. Recién
    // después de un flush explícito (ver más abajo) se arma "transition",
    // ya con el estado oculto asentado como checkpoint — así solo el
    // reveal() real (más tarde) dispara la animación, no este setup
    // inicial. Invertido (transition antes que el flush), el navegador
    // toma el reflow de getTotalLength() como punto de partida legítimo y
    // anima de verdad desde "visible" hacia "oculto" — bug confirmado en
    // vivo: la flecha (y, en tablet, el "25%") se veían un instante y
    // luego se desvanecían solos, antes de que arrancara la secuencia real.
    const mainLength = mainPath.getTotalLength();
    mainPath.style.strokeDasharray = String(mainLength);
    mainPath.style.strokeDashoffset = String(mainLength);

    tipPaths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
    });

    fillet.style.opacity = '0';
    caps.forEach((c) => { c.style.opacity = '0'; });

    // Flush explícito: asienta el estado oculto de arriba como el
    // checkpoint "antes" del navegador — recién después de esto es seguro
    // habilitar transition sin que anime retroactivamente el ocultamiento.
    void arrow.getBoundingClientRect();

    mainPath.style.transition = 'stroke-dashoffset 0.5s ease-out';
    tipPaths.forEach((p) => {
        // Arrancan junto con la cuña, cuando termina la diagonal (0.5s).
        p.style.transition = 'stroke-dashoffset 0.3s ease-out 0.5s';
    });
    fillet.style.transition = 'opacity 0.05s linear 0.5s';
    caps.forEach((c) => {
        // Aparecen justo antes de que termine el trazado de la punta (0.8s).
        c.style.transition = 'opacity 0.05s linear 0.75s';
    });

    return function reveal() {
        mainPath.style.strokeDashoffset = '0';
        tipPaths.forEach((p) => { p.style.strokeDashoffset = '0'; });
        fillet.style.opacity = '1';
        caps.forEach((c) => { c.style.opacity = '1'; });
    };
}

export function initMetricaSequence() {
    // Desktop: el scrollytelling GSAP es el dueño de esta animación.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js maneja esta secuencia, encadenada a la
    // entrada del título en vez de a un IntersectionObserver propio.
    if (window.matchMedia(MQ_TABLET_FLOOR).matches) return;

    // Reduced-motion: el HTML ya trae "25%" estático y la flecha ya
    // trazada — no se toca nada, queda visible con sus valores finales.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const metric = document.querySelector('.cs-metric');
    const arrow = document.querySelector('.cs-metrica__arrow');
    const caption = document.querySelector('.cs-metrica__caption');
    if (!metric || !arrow || !caption) return;

    const revealArrow = setupMetricaArrow(arrow);

    function revealArrowAndCaption() {
        revealArrow();
        caption.classList.add('cs-metrica__caption--in');
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            io.unobserve(entry.target);
            animateCounter(metric, revealArrowAndCaption);
        });
    }, { threshold: 0.15 });

    io.observe(metric);
}

// Frena a .cs-metrica en el borde inferior de pantalla en vez de dejarla
// seguir de largo con el scroll — y cuando se suelta, lo hace en el
// MISMO momento y a la MISMA velocidad que el fondo (.cs-apertura__bg-pin,
// ver apertura-exit.js), no en un punto propio. Se probó position:sticky
// (dos veces, con y sin ajustes) en esta estructura y nunca enganchó, sin
// causa raíz clara que se pudiera confirmar sin inspección en vivo. En
// vez de seguir adivinando con CSS, esto se calcula a mano en JS, mismo
// patrón ya probado que funciona en apertura-exit.js: transform por
// scroll con rAF, nada de loop por tiempo.
//
// Primera versión de esto soltaba a .cs-metrica cuando .cs-metrica-pin
// (su wrapper) se quedaba sin alto — pero ese punto no coincidía con
// cuándo se suelta el fondo, y además el salto era abrupto (pasaba de
// "frenada en el punto" a "su posición natural", que para entonces ya
// estaba lejos, porque mientras estuvo frenada su posición natural
// siguió cayendo por debajo sin que se notara).
//
// Acá "aperturaScrolled > releaseBuffer" (mismo cálculo de buffer que
// apertura-exit.js) es exactamente cuándo el fondo se suelta. Antes de
// eso, virtualBottom se mantiene fijo en targetBottom (frenada). Después,
// decrece 1 a 1 con el scroll — continúa exactamente desde donde estaba
// frenada, sin salto, a la misma velocidad que el scroll (= misma
// velocidad a la que se va el fondo una vez suelto).
export function initMetricaPin() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (window.matchMedia(MQ_TABLET_FLOOR).matches) return;

    const apertura = document.querySelector('.cs-apertura');
    const metricaPin = document.querySelector('.cs-metrica-pin');
    const metrica = document.querySelector('.cs-metrica');
    if (!apertura || !metricaPin || !metrica) return;

    let ticking = false;

    function update() {
        ticking = false;

        const releaseBuffer = apertura.offsetHeight - window.innerHeight;
        if (releaseBuffer <= 0) return;

        const aperturaScrolled = -apertura.getBoundingClientRect().top;
        const targetBottom = window.innerHeight;

        const wrapperRect = metricaPin.getBoundingClientRect();
        const naturalBottom = wrapperRect.top + metrica.offsetHeight;

        if (naturalBottom > targetBottom) {
            // Todavía no llega a su punto — sube en flujo normal.
            // translateY(0px) en vez de 'none': "none" saca el transform
            // por completo y el elemento pierde su capa de composición
            // propia; si después vuelve a ganar un transform real al
            // frenarse, el navegador tiene que crear esa capa de nuevo
            // en caliente — en Android eso puede verse como un parpadeo/
            // desaparición momentánea justo al cruzar el punto de anclaje
            // en cualquier dirección (confirmado por el patrón reportado:
            // pasa yendo Y viniendo). translateY(0px) mantiene la capa
            // viva todo el tiempo, solo cambia el valor.
            metrica.style.transform = 'translateY(0px)';
            return;
        }

        const virtualBottom = targetBottom - Math.max(0, aperturaScrolled - releaseBuffer);
        const renderedBottom = Math.min(targetBottom, virtualBottom);

        metrica.style.transform = `translateY(${renderedBottom - naturalBottom}px)`;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
}
