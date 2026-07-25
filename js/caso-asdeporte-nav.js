// js/caso-asdeporte-nav.js
// Config específica de esta página para los módulos genéricos de
// scroll-progress y section-nav. Gateado a desktop (>=1200px) via
// gsap.matchMedia — mobile/tablet se retoma cuando se desarrolle esa
// versión de la página.

import { initScrollProgress } from './modules/scroll-progress.js';
import { initSectionNav } from './modules/section-nav.js';

if (typeof gsap !== 'undefined') {
    gsap.matchMedia().add('(min-width: 1200px)', () => {
        initScrollProgress({ anchorSelector: '.header' });

        initSectionNav([
            { selector: '.cs-apertura', label: 'Inicio' },
            { selector: '.cs-contexto', label: 'Contexto', phase: 'contexto' },
            {
                selector: '.cs-decisiones-titulos',
                label: 'Decisiones clave',
                phase: 'decisiones-titulos',
                subsections: [
                    { selector: '.cs-decision[data-dec="1"]', label: 'Decisión 1', phase: 'decision-1' },
                    { selector: '.cs-decision[data-dec="2"]', label: 'Decisión 2', phase: 'decision-2' },
                    { selector: '.cs-decision[data-dec="3"]', label: 'Decisión 3', phase: 'decision-3' },
                ]
            },
            { selector: '.rs-mosaico', label: 'Resultado', phase: 'rs-mosaico' },
            // scrollProgress calibrado manualmente en Step 3 de este task —
            // .rs-cierre__bottom comparte pin con "Gracias" + media, no tiene
            // spacer propio (ver spec 2026-07-24, tabla data-phase).
            { selector: '.rs-cierre__bottom', label: 'Contacto', phase: 'rs-cierre', scrollProgress: 0.85 },
        ]);
    });
}
