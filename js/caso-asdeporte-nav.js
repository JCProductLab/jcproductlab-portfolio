// js/caso-asdeporte-nav.js
// Config específica de esta página para los módulos genéricos de
// scroll-progress y section-nav. Gateado a desktop (>=1200px) via
// gsap.matchMedia — mobile/tablet se retoma cuando se desarrolle esa
// versión de la página.

import { initScrollProgress } from './modules/scroll-progress.js';
import { initSectionNav } from './modules/section-nav.js';

if (typeof gsap !== 'undefined') {
    gsap.matchMedia().add('(min-width: 1200px)', () => {
        const destroyScrollProgress = initScrollProgress({ anchorSelector: '.header' });

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
        // when the (min-width: 1200px) query stops matching (it does NOT
        // undo plain DOM appendChild on its own), so re-crossing the
        // breakpoint re-inits cleanly instead of duplicating the bar/nav.
        return () => {
            destroyScrollProgress();
            destroySectionNav();
        };
    });
}
