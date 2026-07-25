// js/modules/section-nav.js
// Navegación por dots — genérica. Resuelve el scrollY real de cada
// sección usando el atributo [data-phase] que ya existe en los
// .cs-pin-spacer de la página (ver spec 2026-07-24), no offsetTop,
// porque los pin-spacers de GSAP son hermanos del contenido, no
// contenedores — offsetTop del contenido no refleja su posición
// dentro del pin.

function resolveScrollTarget({ selector, phase, scrollProgress = 0 }) {
    const el = document.querySelector(selector);

    if (phase && typeof ScrollTrigger !== 'undefined') {
        const triggerEl = document.querySelector(`[data-phase="${phase}"]`);
        const st = triggerEl
            ? ScrollTrigger.getAll().find(st => st.trigger === triggerEl)
            : null;
        if (st) {
            return st.start + scrollProgress * (st.end - st.start);
        }
    }

    return el ? el.getBoundingClientRect().top + window.scrollY : 0;
}

function flattenEntries(config) {
    const flat = [];
    config.forEach(entry => {
        flat.push({ ...entry, depth: 0 });
        (entry.subsections || []).forEach(sub => {
            flat.push({ ...sub, depth: 1, parentSelector: entry.selector });
        });
    });
    return flat;
}

function buildDom(config) {
    const nav = document.createElement('nav');
    nav.className = 'section-nav';
    nav.setAttribute('aria-label', 'Navegación de secciones');

    const dotRefs = [];

    config.forEach(entry => {
        if (entry.subsections && entry.subsections.length) {
            const group = document.createElement('div');
            group.className = 'section-nav__group';

            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'section-nav__dot';
            dot.setAttribute('aria-label', entry.label);
            group.appendChild(dot);
            dotRefs.push({ entry, el: dot, depth: 0 });

            const subWrap = document.createElement('div');
            subWrap.className = 'section-nav__subdots';
            entry.subsections.forEach(sub => {
                const subDot = document.createElement('button');
                subDot.type = 'button';
                subDot.className = 'section-nav__subdot';
                subDot.setAttribute('aria-label', sub.label);
                subWrap.appendChild(subDot);
                dotRefs.push({ entry: sub, el: subDot, depth: 1, group });
            });
            group.appendChild(subWrap);
            nav.appendChild(group);
        } else {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'section-nav__dot';
            dot.setAttribute('aria-label', entry.label);
            nav.appendChild(dot);
            dotRefs.push({ entry, el: dot, depth: 0 });
        }
    });

    document.body.appendChild(nav);
    return dotRefs;
}

export function initSectionNav(config) {
    const dotRefs = buildDom(config);

    const topLevel = dotRefs.filter(d => d.depth === 0)
        .map(d => ({ ...d, target: resolveScrollTarget(d.entry) }))
        .sort((a, b) => a.target - b.target);

    const subLevel = dotRefs.filter(d => d.depth === 1)
        .map(d => ({ ...d, target: resolveScrollTarget(d.entry) }))
        .sort((a, b) => a.target - b.target);

    function updateActive() {
        const y = window.scrollY;

        let activeTop = topLevel[0];
        topLevel.forEach(d => { if (y >= d.target) activeTop = d; });
        topLevel.forEach(d => {
            d.el.setAttribute('aria-current', d === activeTop ? 'true' : 'false');
        });

        let activeSub = null;
        subLevel.forEach(d => { if (y >= d.target) activeSub = d; });
        subLevel.forEach(d => {
            d.el.setAttribute('aria-current', d === activeSub ? 'true' : 'false');
        });
        const touchedGroups = new Set(subLevel.map(d => d.group).filter(Boolean));
        touchedGroups.forEach(g => g.setAttribute('data-active', 'false'));
        if (activeSub && activeSub.group) activeSub.group.setAttribute('data-active', 'true');
    }

    updateActive();

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => { updateActive(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });

    return { dotRefs, resolveScrollTarget };
}
