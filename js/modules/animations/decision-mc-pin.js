// js/modules/animations/decision-mc-pin.js
// Pin + fade-in de la imagen y el texto de "La decisión" en mobile/tablet.
//
// Desktop usa el scrollytelling GSAP (decisiones-responsive.css) sin tocar
// nada: este módulo se sale de inmediato si matchea MQ_DESKTOP, así que el
// HTML autoreado nunca cambia para ese lado.
//
// Efecto en mobile/tablet:
// 1. El usuario abre una Decisión del acordeón
// 2. La imagen (.cs-decision-mc__stage) se pinea debajo del header sticky
// 3. Mientras la imagen está pineada, el texto (.cs-decision-mc__text-wrap)
//    hace fade-in atado al scroll (scrub)
// 4. Tras ~400px de scroll pineado, la imagen se despinea y la siguiente
//    sección (El Razonamiento) entra normalmente
//
// El trigger se monta SOLO cuando el <li> de la decisión recibe la clase
// --open (MutationObserver sobre classList), y se mata al cerrarse. Esto
// evita que las 3 secciones tengan triggers activos en simultáneo y que
// las cerradas disparen el fade-in en background.

'use strict';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const PIN_DISTANCE_PX = 400;
const PIN_BUFFER_PX = 20;

export function initDecisionMcPin() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const items = document.querySelectorAll('.cs-decisiones-titulos__item');
    if (!items.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pageHeaderHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')
    ) || 0;
    const headerGap = 24; // gap entre page header y sticky-header (decisiones.css)

    // Una sola instancia activa a la vez — el acordeón es exclusivo.
    let activeTrigger = null;
    let activeItem = null;

    function killActive() {
        if (activeTrigger) {
            activeTrigger.kill();
            activeTrigger = null;
        }
        if (activeItem) {
            const textWrap = activeItem.querySelector('.cs-decision-mc__text-wrap');
            if (textWrap && !reducedMotion) {
                // Reset para que el próximo open arranque el fade-in desde 0.
                gsap.set(textWrap, { opacity: 0 });
            }
            activeItem = null;
        }
    }

    function setupFor(item) {
        const section = item.querySelector('.cs-decision-mc');
        const stage = section?.querySelector('.cs-decision-mc__stage');
        const textWrap = section?.querySelector('.cs-decision-mc__text-wrap');
        if (!stage || !textWrap) return;

        // Alto real del sticky-header — depende del largo del subtítulo.
        const stickyHeader = item.querySelector('.cs-decisiones-titulos__sticky-header');
        const stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
        const pinStartOffset = pageHeaderHeight + headerGap + stickyHeaderHeight + PIN_BUFFER_PX;

        if (reducedMotion) {
            gsap.set(textWrap, { opacity: 1 });
            activeItem = item;
            return;
        }

        const tween = gsap.to(textWrap, {
            opacity: 1,
            duration: 1,
            ease: 'none',
        });

        activeTrigger = ScrollTrigger.create({
            trigger: stage,
            start: `top top+=${pinStartOffset}`,
            end: `+=${PIN_DISTANCE_PX}`,
            pin: true,
            pinSpacing: true,
            animation: tween,
            scrub: 0.5,
            invalidateOnRefresh: true,
        });
        activeItem = item;
    }

    // Observer sobre la clase --open del <li> — el acordeón la togglea
    // al abrir/cerrar (ver decisiones-accordion.js). Solo montamos trigger
    // cuando la sección se abre, y lo matamos al cerrarse (o al abrirse
    // OTRA — el acordeón cierra la anterior en el mismo gesto).
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.attributeName !== 'class') continue;
            const li = mutation.target;
            const isOpen = li.classList.contains('cs-decisiones-titulos__item--open');

            if (isOpen) {
                killActive();
                setupFor(li);
            } else if (li === activeItem) {
                killActive();
            }
        }
    });

    items.forEach((li) => {
        observer.observe(li, { attributes: true, attributeFilter: ['class'] });
        // Si alguna sección ya está abierta al cargar (estado raro pero
        // posible), montamos su trigger de una vez.
        if (li.classList.contains('cs-decisiones-titulos__item--open')) {
            setupFor(li);
        }
    });

    // Cleanup si el viewport pasa a desktop con la página abierta.
    const mq = window.matchMedia(MQ_DESKTOP);
    const onChange = (e) => {
        if (e.matches) {
            killActive();
            observer.disconnect();
            // Revelar todos los textos por si alguno quedó en opacity:0.
            items.forEach((li) => {
                const textWrap = li.querySelector('.cs-decision-mc__text-wrap');
                if (textWrap) gsap.set(textWrap, { opacity: 1 });
            });
            mq.removeEventListener('change', onChange);
        }
    };
    mq.addEventListener('change', onChange);
}
