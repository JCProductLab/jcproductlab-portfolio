// js/modules/animations/decisiones-accordion.js
// Acordeón de "Decisiones clave" — mobile/tablet.
//
// Desktop usa el scrollytelling GSAP existente (caso-asdeporte.js) sin
// tocar nada: este módulo se sale de inmediato si matchea MQ_DESKTOP, así
// que el HTML autoreado nunca cambia para ese lado — la reestructura de
// abajo pasa SOLO en el DOM en vivo de un cliente mobile, nunca en el
// archivo fuente.
//
// Qué hace: cada <li class="cs-decisiones-titulos__item"> hoy contiene
// solo el índice (número + título + subtítulo + <hr>). Este módulo:
// 1. Envuelve ese contenido existente en un nuevo contenedor sticky
//    (.cs-decisiones-titulos__sticky-header) — se queda pineado arriba
//    del viewport mientras su contenido asociado scrollea por debajo,
//    y se suelta solo cuando ese contenido termina (position:sticky
//    puro, sin JS de scroll — ver decisiones.css).
// 2. Mueve las 4 secciones de esa decisión (.cs-decision, .cs-problema,
//    .cs-decision-mc, .cs-razonamiento, todas con el mismo [data-dec])
//    — que hoy viven más abajo en el documento, fuera del <ol> — adentro
//    de ese mismo <li>, en un wrapper colapsable
//    (.cs-decisiones-titulos__content).
// 3. Agrega el botón +/-→X (dos trazos que rotan por separado, ver CSS)
//    y el toggle: un acordeón exclusivo — abrir una decisión cierra las
//    otras — sin scroll automático (el usuario baja manualmente).
//
// Las 4 secciones ya vienen ocultas por defecto en su posición original
// (decisiones.css, display:none) para que no haya flash de contenido
// completo antes de que este módulo corra — mismo patrón que .mrv /
// .cs-apertura__ticker en el resto del sitio.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';

export function initDecisionesAccordion() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;

    const items = document.querySelectorAll('.cs-decisiones-titulos__item');
    if (!items.length) return;

    // --cs-header-height en px — mismo valor que usa .sticky-header para
    // su "top" en reposo, y el alto de .header-shield (ver decisiones.css).
    // Se usa solo para la compensación de scroll al abrir (más abajo);
    // el escudo en sí es puro CSS, position:sticky estático, sin JS.
    const headerHeightPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')) || 0;

    items.forEach((li, i) => {
        const dec = String(i + 1);
        li.dataset.dec = dec;

        // Envuelve el header existente (número+título+subtítulo+hr) —
        // se reubican los nodos que ya estaban en el <li>, no se crea
        // contenido nuevo acá.
        const stickyHeader = document.createElement('div');
        stickyHeader.className = 'cs-decisiones-titulos__sticky-header';
        while (li.firstChild) {
            stickyHeader.appendChild(li.firstChild);
        }

        // Botón +/-→X: dos trazos independientes (no un ícono que rota)
        // para que el morph sea real — cada barra gira su propio eje.
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'cs-decisiones-titulos__toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', `Expandir Decisión ${dec}`);
        toggle.innerHTML =
            '<span class="cs-decisiones-titulos__toggle-bar cs-decisiones-titulos__toggle-bar--h" aria-hidden="true"></span>' +
            '<span class="cs-decisiones-titulos__toggle-bar cs-decisiones-titulos__toggle-bar--v" aria-hidden="true"></span>';

        const header = stickyHeader.querySelector('.cs-decisiones-titulos__header');
        (header || stickyHeader).appendChild(toggle);

        // Las 4 secciones de esta decisión ya existen en el documento
        // (fuera del <ol>, ver caso-asdeporte.html) — se mueven adentro.
        const contentInner = document.createElement('div');
        contentInner.className = 'cs-decisiones-titulos__content-inner';
        const sections = document.querySelectorAll(
            `.cs-decision[data-dec="${dec}"], .cs-problema[data-dec="${dec}"], .cs-decision-mc[data-dec="${dec}"], .cs-razonamiento[data-dec="${dec}"]`
        );
        sections.forEach((section) => contentInner.appendChild(section));

        const content = document.createElement('div');
        content.className = 'cs-decisiones-titulos__content';
        content.id = `cs-decision-content-${dec}`;
        content.appendChild(contentInner);
        toggle.setAttribute('aria-controls', content.id);

        // Escudo del header, justo antes del sticky-header — puro CSS
        // (ver .cs-decisiones-titulos__header-shield en decisiones.css),
        // ninguna propiedad suya se toca desde JS.
        const headerShield = document.createElement('div');
        headerShield.className = 'cs-decisiones-titulos__header-shield';
        headerShield.setAttribute('aria-hidden', 'true');
        li.appendChild(headerShield);
        li.appendChild(stickyHeader);
        li.appendChild(content);

        function setOpen(open) {
            li.classList.toggle('cs-decisiones-titulos__item--open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', `${open ? 'Colapsar' : 'Expandir'} Decisión ${dec}`);
        }

        // Todo el header es clickeable (no solo el ícono) — acordeón
        // exclusivo: abrir esta decisión cierra cualquier otra abierta.
        // Sin scroll automático propio (el usuario baja manualmente),
        // salvo la corrección de abajo cuando SE CIERRA otra decisión de
        // arriba en el mismo gesto.
        //
        // El cierre de esa otra decisión es SIN transición (instantáneo)
        // — si fuera animado, todo lo de abajo (incluida la que se está
        // abriendo) se movería de a poco durante 0.6s sin nada que
        // compense en el camino.
        //
        // La posición final se fuerza directo a que ESTE header quede en
        // el borde superior del viewport (no una resta contra un estado
        // previo — con position:sticky esa resta es inconsistente, ver
        // commit anterior). Causa raíz real del salto reportado, medida
        // con un overlay de diagnóstico en vivo: html tiene
        // scroll-behavior:smooth global (reset.css) — CUALQUIER scroll
        // programático sin behavior:'instant' explícito se anima solo
        // (~300ms), aunque el JS nunca pidió esa animación. Por eso se
        // veía como si saltara al final y luego volviera al principio:
        // el scrollBy calculaba bien el destino, pero tardaba 300ms en
        // llegar ahí.
        stickyHeader.addEventListener('click', () => {
            const willOpen = !li.classList.contains('cs-decisiones-titulos__item--open');

            const openOthers = [];
            items.forEach((otherLi) => {
                if (otherLi === li) return;
                if (!otherLi.classList.contains('cs-decisiones-titulos__item--open')) return;

                const otherContent = otherLi.querySelector('.cs-decisiones-titulos__content');
                if (otherContent) {
                    otherContent.style.transition = 'none';
                    openOthers.push(otherContent);
                }

                otherLi.classList.remove('cs-decisiones-titulos__item--open');
                const otherToggle = otherLi.querySelector('.cs-decisiones-titulos__toggle');
                if (otherToggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.setAttribute('aria-label', `Expandir Decisión ${otherLi.dataset.dec}`);
                }
            });

            if (willOpen && openOthers.length) {
                // getBoundingClientRect() fuerza el reflow síncrono — ya
                // refleja el colapso instantáneo de arriba. El destino es
                // headerHeightPx (no 0): "pineado" para este header
                // significa top:var(--cs-header-height) en reposo — 0 lo
                // metería debajo del header real del sitio.
                const delta = stickyHeader.getBoundingClientRect().top - headerHeightPx;
                if (delta !== 0) {
                    window.scrollBy({ top: delta, left: 0, behavior: 'instant' });
                }
            }

            // Restaura la transición normal para la próxima vez que esa
            // decisión se abra/cierre por su cuenta.
            openOthers.forEach((otherContent) => {
                otherContent.style.transition = '';
            });

            setOpen(willOpen);
        });
    });
}
