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

export function initModalProceso() {
    const modal = document.getElementById('modalProceso');
    const triggerBtn = document.querySelector('.cs-contexto__actions .btn--secondary:last-child');
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');
    const steps = modal?.querySelectorAll('.modal-proceso__step');
    const description = modal?.querySelector('.modal-proceso__description');
    const detail = modal?.querySelector('.modal-proceso__detail');
    const scrollHintEl = modal?.querySelector('.modal-rol-proceso__scroll-hint');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content || !steps || !description) return;

    const isDesktop = window.matchMedia(MQ_DESKTOP).matches;
    const scrollHint = initModalScrollHint(detail, scrollHintEl);

    // Textos reales de assets/content/final-content.md (líneas 241-262)
    const stepData = [
        {
            title: 'Discovery',
            text: 'En AsDeporte, la fase de descubrimiento no buscó tendencias ni referencias visuales.\n\nBuscó las fracturas exactas donde la experiencia estaba costándole dinero al negocio.\n\nEntrevistas con atletas, análisis de logs de soporte, grabaciones de sesión y auditorías de la plataforma existente construyeron un diagnóstico claro: la plataforma no tenía un problema visual, tenía una fuga de capital en el punto exacto donde el negocio facturaba.'
        },
        {
            title: 'Definition',
            text: 'La definición del alcance fue tan importante como el diseño mismo. El espacio de ideación se abrió a todas las disciplinas (ingeniería, marketing, producto), generando más de lo que el MVP podía absorber.\n\nLa priorización fue implacable: cada funcionalidad se evaluó contra su impacto directo en conversión, y lo que no sobrevivió ese criterio quedó fuera del alcance, sin excepciones.\n\nCada decisión respondía a un problema de usabilidad documentado. Ningún elemento existía por razones estéticas, cada iniciativa tenía un KPI asociado que la justificaba.'
        },
        {
            title: 'Delivery',
            text: 'El sistema de diseño se construyó pensando en quien lo iba a implementar, no en quien lo iba a presentar. Cada decisión de componentes respondía a las restricciones técnicas del equipo de ingeniería. La factibilidad no fue una limitación, fue una variable de diseño desde el primer día.\n\nPost-lanzamiento, el monitoreo convirtió el comportamiento real de los atletas en insumo de diseño accionable. Un fallo crítico detectado en Android en las primeras 48 horas se resolvió antes de escalar. El proceso no terminó con la entrega — terminó cuando los datos confirmaron las hipótesis.'
        }
    ];

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
            if (detail) detail.scrollTop = 0;
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

        if (detail) detail.scrollTop = 0;
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
