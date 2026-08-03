// js/modules/animations/cta-buttons-reveal.js
// Réplica EXACTA del "pop" de los botones CTA en index.html
// (cta-section-reveal.js / about-section-reveal.js): wrapper neutro +
// scale 0.5→1 + opacity 0→1, duration 0.6, ease 'back.out(1.4)'. Sin
// desplazamiento vertical — el original tampoco lo tiene, confirmado
// leyendo la fuente.
//
// Mobile/tablet de caso-asdeporte.html — 3 botones, cada uno ya dentro de
// un contenedor cubierto por el reveal genérico .mrv (fade+slide, ver
// mobile-reveals.js): el pop del botón es una animación propia,
// superpuesta a la de su contenedor — mismo patrón que index.html (el
// label/título hacen su cosa, el botón la suya aparte).
//
// toggleActions:'play none none reverse' (no scrub) — mismo mecanismo que
// ya usa case-cards-scroll.js en este proyecto: play al entrar, reverse
// SOLO al volver a subir por encima de "start" (onLeaveBack); cruzar
// "end" (onLeave) no hace nada.
//
// Por qué NO 'play reverse play reverse' (lo que se probó primero): para
// el botón de .rs-cierre__footer — el último elemento antes de </main>,
// sin nada scrolleable después — "end: 'bottom top'" exige más scroll del
// que existe físicamente debajo del documento. GSAP clampea ese "end" al
// máximo scroll posible, que para este botón queda pegado a su propio
// "start". Con esos dos límites casi superpuestos, cualquier variación
// mínima de scroll (inercia, rebote elástico al llegar al fondo de la
// página) cruzaba ambos casi al mismo tiempo: "play" seguido de "reverse"
// de inmediato — el botón aparecía y el mismo gesto lo volvía a ocultar.
// Con 'play none none reverse' el cruce de "end" deja de importar, así
// que ese clampeo cerca del final de la página ya no tiene efecto — solo
// importa "start", que tiene margen de sobra incluso para el último
// elemento del documento.
//
// Wrapper neutro (no el botón directo): mismo motivo que la fuente —
// aísla el scale/opacity de cualquier transform propio del botón (estados
// :active/:hover de atoms.css), sin pisarlo.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

// .rs-cierre__footer .btn-liquid NO va acá: está siempre display:none en
// todo el rango mobile/tablet (resultado.css, bloque MQ_MOBILE) — el
// botón real y visible ahí es .rs-cierre__cta-mobile (ya cubierto por
// ".btn"). Animarlo era wrapper + ScrollTrigger de más para un elemento
// que nunca se ve en este rango.
const BUTTON_SELECTORS = [
    '.cs-contexto__actions .btn',
    '.rs-testimonio__closing .btn',
    '.rs-cierre__footer .btn',
];

function wrapButton(btn) {
    if (btn.parentElement?.dataset.ctaWrapReady === 'true') {
        return btn.parentElement;
    }
    const wrap = document.createElement('span');
    wrap.className = 'cs-cta-pop-wrap';
    wrap.dataset.ctaWrapReady = 'true';
    wrap.style.display = 'inline-flex';
    wrap.style.willChange = 'transform, opacity';
    wrap.style.transformOrigin = 'center center';
    btn.parentNode.insertBefore(wrap, btn);
    wrap.appendChild(btn);
    return wrap;
}

export function initCtaButtonsReveal() {
    // Desktop: no se toca (los botones ahí, si aplica, siguen su propio
    // scrollytelling en resultado.js/caso-asdeporte.js).
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Guard GSAP/ScrollTrigger: si el CDN falla, los botones quedan
    // visibles con su opacity por defecto (sin animar) — mismo criterio
    // que decision-mc-pin.js y rs-metricas-cards.js.
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const buttons = document.querySelectorAll(BUTTON_SELECTORS.join(', '));
    if (!buttons.length) return;

    // html { scroll-behavior: smooth } (reset.css) rompe la medición
    // interna que hace ScrollTrigger al crear/refrescar triggers — en
    // Chrome/Android (Blink) el ajuste de scroll que GSAP hace por dentro
    // para medir queda "animado" por el smooth-scroll en vez de
    // instantáneo, lo que se percibe como un rebote de scroll justo al
    // llegar al botón. Mismo bug ya documentado y resuelto en
    // decision-mc-pin.js — mismo parche: neutralizar mientras se
    // crean/miden los triggers y restaurar después (500ms, igual que ahí).
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    buttons.forEach((btn) => {
        const wrap = wrapButton(btn);

        gsap.set(wrap, { scale: 0.5, opacity: 0 });

        // paused:true + onEnter/onLeaveBack manuales (en vez de
        // toggleActions) para poder ignorar la remedición espuria de
        // ScrollTrigger.refresh() — ver comentario grande más abajo.
        const tween = gsap.to(wrap, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.4)',
            paused: true,
        });

        ScrollTrigger.create({
            trigger: wrap,
            start: 'top 90%',
            end: 'bottom top',
            onEnter: () => { if (!ScrollTrigger.isRefreshing) tween.play(); },
            onLeaveBack: () => { if (!ScrollTrigger.isRefreshing) tween.reverse(); },
        });
    });

    // decision-mc-pin.js crea/destruye un ScrollTrigger con pin:true cada
    // vez que se abre/cierra una decisión — eso obliga a GSAP a remedir
    // TODOS los triggers de la página (necesita la altura real del
    // documento para el pin-spacer), y esa remedición interna mueve el
    // scroll a 0 momentáneamente para calcular las posiciones de los
    // elementos pineados (mismo mecanismo ya documentado en
    // caso-asdeporte.js: "ScrollTrigger.refresh() hace obj(0) internamente
    // para re-medir pines"). Sin este guard, ese scroll temporal a 0
    // dispara onEnter/onLeaveBack de estos botones como si el usuario
    // hubiera subido hasta arriba de todo — ocultándolos de golpe al
    // abrir/cerrar CUALQUIER decisión, sin que el usuario haya scrolleado
    // nada (bug confirmado en vivo).

    // Mismo patrón que mask-reveal.js/cta-section-reveal.js/etc. en
    // index.html: la posición en píxeles de cada ScrollTrigger se calcula
    // en el momento de crearlo, que puede ser antes de que el documento
    // asiente su altura final. Sin este refresh, el botón más cercano al
    // final de la página (el de .rs-cierre__footer) queda con una
    // posición obsoleta hasta que algo más dispara un recálculo — el
    // síntoma reportado ("necesito hacer doble scroll para que anime").
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setTimeout(() => {
            htmlEl.style.scrollBehavior = prevScrollBehavior;
        }, 500);
    });
}
