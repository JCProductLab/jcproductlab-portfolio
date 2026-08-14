'use strict';

// ============================================
// MÓDULO: Modal El Proceso
// Desktop: carrusel automático de 3 pasos con hover.
// Mobile/tablet: tabs — tap para cambiar, sin autoplay (no hay "mouse
// afuera" que lo pause de forma natural, y con contenido scrolleable
// que cambia solo cada 5s se siente invasivo mientras se lee).
// ============================================

import { initModalScrollHint } from './modal-scroll-hint.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET_LANDSCAPE = '(min-width: 900px) and (orientation: landscape)';

export function initModalProceso() {
    const modal = document.getElementById('modalProceso');
    // Antes: :last-child. Roto en tablet/mobile — ver nota en
    // modal-rol-proceso.js sobre el wrap en .cs-cta-pop-wrap. Ahora:
    // último elemento de la lista de botones.
    const triggerBtns = document.querySelectorAll('.cs-contexto__actions .btn--secondary');
    const triggerBtn = triggerBtns[triggerBtns.length - 1];
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');
    const steps = modal?.querySelectorAll('.modal-proceso__step');
    const description = modal?.querySelector('.modal-proceso__description');
    const detail = modal?.querySelector('.modal-proceso__detail');
    const scrollHintEl = modal?.querySelector('.modal-rol-proceso__scroll-hint');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content || !steps || !description) return;

    const isDesktop = window.matchMedia(MQ_DESKTOP).matches;
    const isTabletLandscape = window.matchMedia(MQ_TABLET_LANDSCAPE).matches;
    /* En tablet landscape el layout es 2 columnas: imagen a la izquierda
       (sin scroll, cabe entera) y descripción a la derecha con scroll
       interno. La pista de scroll y el reset de scrollTop deben
       apuntar a la columna que realmente scrollea (description), no
       al detail entero — si no, la pista queda fuera de lugar y el
       reset al cambiar de tab no funciona. */
    const scrollContainer = isTabletLandscape ? description : detail;
    const scrollHint = initModalScrollHint(scrollContainer, scrollHintEl);

    // Texto por paso: vive en el HTML (data-description de cada
    // .modal-proceso__step), no hardcodeado acá, porque este módulo se
    // carga vía main.js en todas las páginas de caso, no solo AsDeporte.
    const stepData = Array.from(steps).map(step => ({
        title: step.querySelector('.modal-proceso__title')?.textContent ?? '',
        text: step.dataset.description ?? ''
    }));

    let currentStep = 0;
    let autoPlayTimer = null;
    let fadeTimer = null;
    let isHovering = false;
    let isClosing = false;

    // Actualiza el paso activo con fade del texto
    function setActiveStep(index) {
        steps.forEach(step => step.classList.remove('modal-proceso__step--active'));
        steps[index].classList.add('modal-proceso__step--active');

        description.classList.add('modal-proceso__description--fading');

        if (fadeTimer) clearTimeout(fadeTimer);
        fadeTimer = setTimeout(() => {
            description.textContent = stepData[index].text;
            description.classList.remove('modal-proceso__description--fading');
            // El párrafo cambia de largo entre tabs — hay que revisar de
            // nuevo si el contenido desborda (mobile) recién acá, cuando
            // el texto nuevo ya está en el DOM.
            if (scrollContainer) scrollContainer.scrollTop = 0;
            scrollHint.update();
        }, 400);

        currentStep = index;
    }

    // Avanza al siguiente paso (loop infinito)
    function nextStep() {
        if (isHovering) return;
        const next = (currentStep + 1) % stepData.length;
        setActiveStep(next);
    }

    // Inicia el autoplay cada 5 segundos
    function startAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextStep, 5000);
    }

    // Detiene el autoplay y limpia timers pendientes
    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
        if (fadeTimer) {
            clearTimeout(fadeTimer);
            fadeTimer = null;
        }
    }

    // Abre el modal
    function openModal() {
        stopAutoPlay();
        gsap.killTweensOf(content);

        // Solo bloquear si el modal está abierto o abriendo;
        // permitir reopen durante el slide-out.
        if (modal.classList.contains('active') && !isClosing) return;
        isClosing = false;

        currentStep = 0;
        isHovering = false;
        description.textContent = stepData[0].text;
        description.classList.remove('modal-proceso__description--fading');
        steps.forEach(step => step.classList.remove('modal-proceso__step--active'));
        steps[0].classList.add('modal-proceso__step--active');

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (scrollContainer) scrollContainer.scrollTop = 0;
        scrollHint.update();

        gsap.fromTo(content,
            { x: '100%' },
            {
                x: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                    // Sin autoplay en mobile/tablet — ver comentario del
                    // módulo arriba.
                    if (isDesktop) startAutoPlay();
                }
            }
        );
    }

    // Cierra el modal
    function closeModal() {
        if (!modal.classList.contains('active') || isClosing) return;

        stopAutoPlay();
        isHovering = false;
        isClosing = true;

        gsap.killTweensOf(content);

        gsap.to(content, {
            x: '100%',
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => {
                isClosing = false;
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Desktop: hover en pasos pausa el autoplay y muestra ese paso.
    // Mobile/tablet: sin hover ni autoplay — tap directo para cambiar.
    steps.forEach((step, index) => {
        if (!isDesktop) {
            step.addEventListener('click', () => {
                setActiveStep(index);
                // La tab tocada puede estar parcialmente cortada (fila con
                // scroll horizontal, ver modal-rol-proceso.css) — la trae
                // a la vista con el mínimo scroll necesario, sea que se
                // corte por la izquierda (tab 1) o por la derecha (tab 3).
                step.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
            });
            return;
        }

        step.addEventListener('mouseenter', () => {
            isHovering = true;
            stopAutoPlay();
            setActiveStep(index);
        });

        step.addEventListener('mouseleave', () => {
            isHovering = false;
            startAutoPlay();
        });
    });

    // Event listeners
    triggerBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
