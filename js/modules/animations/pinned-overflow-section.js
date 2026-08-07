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

    // html { scroll-behavior: smooth } se neutraliza a nivel de CSS
    // para toda esta página (ver about.css) — no acá por JS. Los pines
    // de .about-bio/.methodology viven TODA la sesión de scroll, y
    // confirmado en vivo (Galaxy Tab S8, tablet landscape, DOM
    // breakpoint remoto vía chrome://inspect) es el propio
    // ScrollTrigger.min.js el que vuelve a escribir "scroll-behavior:
    // smooth" inline en <html> por su cuenta en cada remedición
    // interna — cachea el valor "normal" apenas se ejecuta su script
    // (antes de que corra este módulo) y lo restaura después, sin
    // importar qué hagamos acá por JS alrededor de create()/refresh().
    // La única forma de que GSAP cachee 'auto' en vez de 'smooth' es
    // que el CSS ya diga eso desde antes de que su script se ejecute.

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
    }

    setup();

    // lastWidth — ancho conocido tras el setup() inicial. El handler
    // de resize solo reconstruye los pins si el ANCHO cambió — nunca
    // por un cambio de alto. En tablet (sobre todo landscape),
    // Chrome/Android dispara 'resize' con el viewport unos cuantos
    // píxeles más bajo/alto cuando la barra de URL (o la barra de
    // navegación) cambia de tamaño durante el scroll, sin que haya
    // ocurrido ningún cambio real de layout — el ancho nunca cambia
    // por esto, solo el alto. Como .about-bio__mask /
    // .methodology__mask se estiran a 100svh (el alto "estable" que
    // en teoría no depende de la barra de URL, pero cuyo valor
    // efectivo en px sí puede diferir un frame del que tenía la
    // sección al cargar), ese 'resize' espurio hacía que setup()
    // volviera a medir un `overflow` DISTINTO al original y
    // reconstruyera el pin a mitad de un scroll ya en curso — bug
    // confirmado en vivo en tablet landscape: aparecía de golpe un
    // hueco enorme entre el hero y "Sobre mí", y al volver a subir el
    // contenido pineado quedaba superpuesto con el hero. Un cambio de
    // orientación real (rotar el dispositivo) SIEMPRE cambia el
    // ancho, así que sigue disparando el rebuild sin necesidad de
    // revisar el alto por separado.
    let lastWidth = window.innerWidth;

    function handleViewportChange() {
        const width = window.innerWidth;
        if (width === lastWidth) return;
        lastWidth = width;
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
