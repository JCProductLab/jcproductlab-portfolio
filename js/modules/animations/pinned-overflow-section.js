'use strict';

// ============================================
// PINNED OVERFLOW SECTION — genérico
//
// Para secciones de alto fijo (100svh) cuyo contenido interno puede
// desbordar en viewports angostos/bajos. Usado en sobre-mi.html para
// "Sobre mí" (.about-bio) y "Metodología" (.methodology): cada
// sección tiene un header estático y un par máscara/track que puede
// no caber completo — a diferencia de .cs-contexto en
// caso-asdeporte.html (pin exclusivo de desktop), acá corre en TODO
// viewport, porque cada sección de esta página debe ocupar
// exactamente el 100% del alto sin importar el dispositivo.
//
// Si el track ya cabe dentro de su máscara (ej. Metodología en
// desktop con las 3 cards en una sola fila), no se crea ningún
// ScrollTrigger — la sección se comporta como una sección fija
// normal, sin pin.
// ============================================

const CONFIGS = [
    { section: '.about-bio', mask: '.about-bio__mask', track: '.about-bio__track' },
    { section: '.methodology', mask: '.methodology__mask', track: '.methodology__track' },
];

// scrub:1 introduce ~1s de inercia entre el scroll real y la posición
// animada del track — sin margen, al llegar al final exacto de
// `overflow` px el pin ya se libera pero la animación todavía está
// "alcanzando" su valor final (y:-overflow), así que la última porción
// del contenido nunca llega a mostrarse (bug confirmado en vivo: "no
// hay scroll suficiente para ver todo el texto"). Este buffer extiende
// el rango pineado más allá de `overflow` para darle tiempo al scrub
// de asentarse antes de soltar el pin.
const SCRUB_BUFFER_PX = 100;

export function initPinnedOverflowSections() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const htmlEl = document.documentElement;
    // html { scroll-behavior: smooth } (reset.css) rompe la medición
    // interna de ScrollTrigger al crear/refrescar un pin en
    // Chrome/Android (Blink) — mismo workaround que decision-mc-pin.js
    // (ver createPin() ahí). Se captura UNA sola vez, al nivel del
    // módulo, no dentro de cada setup(): si dos resizes ocurren dentro
    // de los 500ms de la restauración diferida, un segundo setup()
    // podría capturar 'auto' (el valor que dejó el primer setup() en
    // vuelo) en vez del valor original real, y "restaurar" a 'auto'.
    const originalScrollBehavior = htmlEl.style.scrollBehavior;

    let activeTriggers = [];

    function teardown() {
        activeTriggers.forEach((st) => st.kill());
        activeTriggers = [];
    }

    function setup() {
        teardown();

        htmlEl.style.scrollBehavior = 'auto';

        CONFIGS.forEach(({ section, mask, track }) => {
            const sectionEl = document.querySelector(section);
            const maskEl = document.querySelector(mask);
            const trackEl = document.querySelector(track);
            if (!sectionEl || !maskEl || !trackEl) return;

            // Reset antes de medir — un resize puede correr esto con un
            // translateY viejo todavía aplicado, lo que corrompería
            // scrollHeight/clientHeight.
            gsap.set(trackEl, { clearProps: 'transform' });

            const overflow = trackEl.scrollHeight - maskEl.clientHeight;
            if (overflow <= 0) return;

            const tween = gsap.to(trackEl, { y: -overflow, ease: 'none' });

            const st = ScrollTrigger.create({
                trigger: sectionEl,
                start: 'top top',
                end: () => '+=' + (overflow + SCRUB_BUFFER_PX),
                pin: true,
                pinSpacing: true,
                scrub: 1,
                animation: tween,
                invalidateOnRefresh: true,
            });
            activeTriggers.push(st);
        });

        ScrollTrigger.refresh();

        window.setTimeout(() => {
            htmlEl.style.scrollBehavior = originalScrollBehavior;
        }, 500);
    }

    setup();

    // lastWidth/lastHeight — geometría conocida tras el setup() inicial.
    // El handler de resize solo reconstruye los pins si el viewport
    // cambió de verdad (ancho, o alto en más de 120px). Filtra el
    // resize que dispara Chrome/Android al mostrar/ocultar la barra de
    // URL durante el scroll — ahí 100svh no cambia, pero sin este
    // guard igual se destruían y recreaban los pins con la misma
    // geometría, generando un ScrollTrigger.refresh() de sobra y un
    // salto visible en pleno scroll.
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    function handleViewportChange() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (width === lastWidth && Math.abs(height - lastHeight) <= 120) return;
        lastWidth = width;
        lastHeight = height;
        setup();
    }

    let resizeTimeout;
    function debouncedViewportChange() {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(handleViewportChange, 250);
    }

    window.addEventListener('resize', debouncedViewportChange);
    window.addEventListener('orientationchange', debouncedViewportChange);
}
