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

export function initPinnedOverflowSections() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    let activeTriggers = [];

    function teardown() {
        activeTriggers.forEach((st) => st.kill());
        activeTriggers = [];
    }

    function setup() {
        teardown();

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

            // html { scroll-behavior: smooth } (reset.css) rompe la medición
            // interna de ScrollTrigger al crear/refrescar un pin en
            // Chrome/Android (Blink) — mismo workaround que
            // decision-mc-pin.js (ver createPin() ahí).
            const htmlEl = document.documentElement;
            const prevScrollBehavior = htmlEl.style.scrollBehavior;
            htmlEl.style.scrollBehavior = 'auto';

            const tween = gsap.to(trackEl, { y: -overflow, ease: 'none' });

            const st = ScrollTrigger.create({
                trigger: sectionEl,
                start: 'top top',
                end: () => '+=' + overflow,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                animation: tween,
                invalidateOnRefresh: true,
            });
            activeTriggers.push(st);

            window.setTimeout(() => {
                htmlEl.style.scrollBehavior = prevScrollBehavior;
            }, 500);
        });

        ScrollTrigger.refresh();
    }

    setup();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(setup, 250);
    });
}
