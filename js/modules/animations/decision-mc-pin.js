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
// Debe ser >= la duración de transition: grid-template-rows en
// .cs-decisiones-titulos__content (decisiones.css) — es el fallback
// para cuando no llega transitionend (ver setupFor).
const CONTENT_TRANSITION_MS = 650;

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
    // Cancela una setupFor() que todavía está esperando el transitionend
    // del acordeón (ver más abajo) — evita crear el pin sobre un <li>
    // que ya se cerró de nuevo antes de que termine de abrirse.
    let cancelPendingSetup = null;

    function killActive() {
        if (cancelPendingSetup) {
            cancelPendingSetup();
            cancelPendingSetup = null;
        }
        if (activeTrigger) {
            // activeTrigger.kill() borra al instante el pin-spacer que
            // reserva ~PIN_DISTANCE_PX + el alto de la imagen alrededor de
            // .cs-decision-mc__stage. Esa desaparición de espacio pasa
            // DESPUÉS de que decisiones-accordion.js ya compensó su propio
            // colapso de grid-template-rows (llega acá vía el
            // MutationObserver, como microtask posterior) — sin compensar
            // ESTA reducción de espacio por separado, todo lo que sigue en
            // el documento (Razonamiento, Resultado, Cierre) queda
            // desalineado respecto al scrollY real. Cualquier
            // ScrollTrigger de más abajo (cards, botones, etc.) evalúa mal
            // su estado la próxima vez que se recalcula, porque su umbral
            // en píxeles ya no corresponde a la posición real del usuario
            // (bug confirmado en vivo: esos elementos dejaban de
            // revelarse tras cerrar una decisión).
            const refEl = activeItem?.querySelector('.cs-decisiones-titulos__sticky-header');
            const beforeTop = refEl ? refEl.getBoundingClientRect().top : null;

            activeTrigger.kill();
            activeTrigger = null;

            if (refEl && beforeTop !== null) {
                const afterTop = refEl.getBoundingClientRect().top;
                const delta = afterTop - beforeTop;
                if (delta !== 0) {
                    window.scrollBy({ top: delta, left: 0, behavior: 'instant' });
                }
            }

            // Con el scroll ya compensado arriba, este refresh recalcula
            // los límites de TODOS los ScrollTrigger de la página contra
            // la posición real — no hay ningún pin activo en este
            // instante (recién matamos el único), así que no dispara la
            // remedición espuria que sí ocurre cuando GSAP necesita
            // remedir un pin en vivo.
            ScrollTrigger.refresh();
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

    function createPin(item, stage, textWrap) {
        // Alto real del sticky-header — depende del largo del subtítulo.
        const stickyHeader = item.querySelector('.cs-decisiones-titulos__sticky-header');
        const stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
        const pinStartOffset = pageHeaderHeight + headerGap + stickyHeaderHeight + PIN_BUFFER_PX;

        const tween = gsap.to(textWrap, {
            opacity: 1,
            duration: 1,
            ease: 'none',
        });

        // html { scroll-behavior: smooth } (reset.css) rompe la medición
        // interna que hace ScrollTrigger al crear/refrescar un pin — en
        // Chrome/Android (Blink) el "start" calculado queda corrupto
        // (pierde el scroll acumulado), pineando la imagen cientos de px
        // antes de lo debido y dejando un hueco enorme entre el título y
        // la imagen. En iOS (WebKit, cualquier navegador) no pasa.
        // Confirmado con mediciones en dispositivo real. Lo neutralizamos
        // mientras se crea/mide el pin — mismo patrón "desactivar y
        // restaurar" que ya usa decisiones-accordion.js con las
        // transiciones — y lo restauramos una vez que la medición
        // interna de GSAP ya se asentó.
        const htmlEl = document.documentElement;
        const prevScrollBehavior = htmlEl.style.scrollBehavior;
        htmlEl.style.scrollBehavior = 'auto';

        // Mismo motivo que en killActive() pero al revés: crear el pin
        // INSERTA el pin-spacer (~PIN_DISTANCE_PX + alto de la imagen),
        // empujando hacia abajo todo lo que sigue en el documento. Si el
        // usuario todavía no scrolleó más allá de este punto, ese empuje
        // corre su posición visual sin que el navegador lo compense solo.
        const beforeTop = stickyHeader ? stickyHeader.getBoundingClientRect().top : null;

        const trigger = ScrollTrigger.create({
            trigger: stage,
            start: `top top+=${pinStartOffset}`,
            end: `+=${PIN_DISTANCE_PX}`,
            pin: true,
            pinSpacing: true,
            animation: tween,
            scrub: 0.5,
            invalidateOnRefresh: true,
        });
        activeTrigger = trigger;

        if (stickyHeader && beforeTop !== null) {
            const afterTop = stickyHeader.getBoundingClientRect().top;
            const delta = afterTop - beforeTop;
            if (delta !== 0) {
                window.scrollBy({ top: delta, left: 0, behavior: 'instant' });
            }
        }

        // Recalcula los límites de TODOS los ScrollTrigger de la página
        // contra el layout ya asentado y el scroll ya compensado arriba.
        ScrollTrigger.refresh();

        setTimeout(() => {
            htmlEl.style.scrollBehavior = prevScrollBehavior;
        }, 500);
    }

    function setupFor(item) {
        const section = item.querySelector('.cs-decision-mc');
        const stage = section?.querySelector('.cs-decision-mc__stage');
        const textWrap = section?.querySelector('.cs-decision-mc__text-wrap');
        if (!stage || !textWrap) return;

        if (reducedMotion) {
            gsap.set(textWrap, { opacity: 1 });
            activeItem = item;
            return;
        }

        activeItem = item;

        // El acordeón anima .cs-decisiones-titulos__content con
        // grid-template-rows 0fr→1fr en 0.6s (decisiones.css), dentro de
        // un .content-inner con overflow:hidden. Medir/crear el
        // ScrollTrigger ANTES de que esa transición termine da geometría
        // stale (el contenido todavía está colapsado). Esperamos el
        // transitionend real del contenedor antes de medir, con un
        // timeout de respaldo por si el <li> ya estaba abierto al cargar
        // (no hay transición que dispare el evento en ese caso).
        const content = item.querySelector('.cs-decisiones-titulos__content');
        let settled = false;

        const finish = () => {
            if (settled) return;
            settled = true;
            content?.removeEventListener('transitionend', onTransitionEnd);
            clearTimeout(fallbackId);
            cancelPendingSetup = null;
            createPin(item, stage, textWrap);
        };

        const onTransitionEnd = (e) => {
            if (e.target === content && e.propertyName === 'grid-template-rows') finish();
        };

        if (content) content.addEventListener('transitionend', onTransitionEnd);
        const fallbackId = setTimeout(finish, CONTENT_TRANSITION_MS);

        cancelPendingSetup = () => {
            settled = true;
            content?.removeEventListener('transitionend', onTransitionEnd);
            clearTimeout(fallbackId);
        };
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
