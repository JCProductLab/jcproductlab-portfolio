// js/caso-asdeporte-nav.js
// Config específica de esta página para los módulos genéricos de
// scroll-progress, section-nav y mobile-reveals.
// - scroll-progress: SIEMPRE (mobile y desktop) — no depende de GSAP.
// - mobile-reveals: siempre invocado; el módulo sale solo si matchea
//   MQ_DESKTOP (ahí manda el scrollytelling GSAP).
// - section-nav (dots + velo): solo desktop, via gsap.matchMedia con
//   la misma condición MQ_DESKTOP que caso-asdeporte.js/resultado.js
//   y los *-responsive.css.

import { initScrollProgress } from './modules/scroll-progress.js';
import { initSectionNav } from './modules/section-nav.js';
import { initMobileReveals } from './modules/animations/mobile-reveals.js';

// Barra de progreso de lectura — corre una sola vez para todos los
// modos (ya no vive en el matchMedia: no hay nada que revertir al
// cruzar el breakpoint porque aplica en ambos lados).
initScrollProgress({ anchorSelector: '.header' });

// Reveals + contadores de la versión mobile/tablet. Sin GSAP a
// propósito: debe funcionar con el CDN bloqueado.
initMobileReveals({
    // El ticker ya está visible en el primer frame (es el hero) — no hay
    // scroll que lo cruce, así que va por immediateSelectors (window.load
    // + delay fijo, sin IntersectionObserver). Ver mobile-reveals.js.
    immediateSelectors: [
        '.cs-apertura__ticker',
    ],
    revealSelectors: [
        '.cs-metrica__left',
        '.cs-contexto .cs-label',
        '.cs-contexto .cs-section-title',
        '.cs-contexto__media',
        '.cs-contexto__tags',
        '.cs-contexto__text-track p',
        '.cs-contexto__actions',
        '.cs-decisiones-titulos__label',
        '.cs-decisiones-titulos__item',
        '.cs-decision__content',
        '.cs-decision__media',
        '.cs-problema__title',
        '.cs-problema__card',
        '.cs-decision-mc__title',
        '.cs-decision-mc__media',
        '.cs-decision-mc__text-wrap',
        '.cs-razonamiento__label',
        '.cs-razonamiento__metric',
        '.cs-razonamiento__descriptor',
        '.cs-razonamiento__conclusion',
        '.rs-mosaico__intro',
        '.rs-mosaico__card',
        '.rs-metricas__title',
        '.rs-metricas__card',
        '.rs-usuarios__title',
        '.rs-usuarios__media',
        '.rs-usuarios__text',
        '.rs-testimonio__quote',
        '.rs-testimonio__closing',
        '.rs-cierre__gracias',
        '.rs-cierre__media',
        '.rs-cierre__case',
        '.rs-cierre__footer',
    ],
    counterSelectors: [
        '.cs-metric',
        '.cs-razonamiento__metric-value',
        '.rs-metricas__value',
    ],
});

if (typeof gsap !== 'undefined') {
    gsap.matchMedia().add('(min-width: 1200px) and (hover: hover) and (pointer: fine)', () => {
        const { destroy: destroySectionNav } = initSectionNav([
            { selector: '.cs-apertura', label: 'Inicio' },
            // El fade-in de label/título/imagen/tags/flecha de Contexto en
            // realidad corre en el trigger ANTERIOR (shift-mc), vía
            // renderContextoEntrada() — el propio trigger "contexto" no
            // mueve esos elementos. 0.75 deja todo ya asentado.
            { selector: '.cs-contexto', label: 'Contexto', phase: 'shift-mc', scrollProgress: 0.75 },
            // Cada trigger decision-N es la cortina HACIA la pantalla verde,
            // no la pantalla en sí — en progreso 0 la cortina sigue cerrada.
            // La imagen del cascade llega exactamente en 1.0; 0.95 la deja
            // asentada sin entrar ya al siguiente gate (expansion).
            { selector: '.cs-decision[data-dec="1"]', label: 'Decisión 1', phase: 'decision-1', scrollProgress: 0.95 },
            { selector: '.cs-decision[data-dec="2"]', label: 'Decisión 2', phase: 'decision-2', scrollProgress: 0.95 },
            { selector: '.cs-decision[data-dec="3"]', label: 'Decisión 3', phase: 'decision-3', scrollProgress: 0.95 },
            // El intro (label + h3) entra 0.10-0.25 y sale 0.55-0.70 — el
            // "respiro" (0.70-0.80) ya lo perdió. 0.40 cae dentro de la
            // ventana donde el intro sigue asentado y las cards ya
            // avanzaron bastante (ease-out, entran 0.20-0.65).
            { selector: '.rs-mosaico', label: 'Resultado', phase: 'rs-mosaico', scrollProgress: 0.40 },
            // .rs-cierre__bottom comparte pin con "Gracias" + media, no tiene
            // spacer propio (ver spec 2026-07-24, tabla data-phase).
            // scrollProgress subido de 0.85 a 0.92 — a calibrar en vivo con el usuario.
            { selector: '.rs-cierre__bottom', label: 'Contacto', phase: 'rs-cierre', scrollProgress: 0.92 },
        ]);

        // I3: gsap.matchMedia calls this returned function automatically
        // when the MQ_DESKTOP query stops matching (it does NOT
        // undo plain DOM appendChild on its own), so re-crossing the
        // breakpoint re-inits cleanly instead of duplicating the nav.
        return () => {
            destroySectionNav();
        };
    });
}
