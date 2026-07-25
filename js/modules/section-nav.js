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
                // I4: track which top-level entry this subsection belongs to,
                // so active-tracking can bound activeSub to activeTop's group.
                dotRefs.push({ entry: sub, el: subDot, depth: 1, group, parentSelector: entry.selector });
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
    return { nav, dotRefs };
}

let veilEl = null;

function getVeil() {
    if (veilEl) return veilEl;
    veilEl = document.createElement('div');
    veilEl.className = 'section-nav-veil';
    veilEl.setAttribute('aria-hidden', 'true');
    document.body.appendChild(veilEl);
    return veilEl;
}

const VEIL_FADE_MS = 150;
// Los ScrollTrigger de esta página usan scrub: 1 — GSAP no salta el
// progreso de las animaciones al instante cuando cambia el scroll, lo
// suaviza durante ~1s. Si revelamos el velo antes de que ese segundo
// termine, se ve el "alcance" (todas las animaciones intermedias en
// cámara rápida). No tocamos el scrub en sí (es el mecanismo ya
// aprobado del scroll normal) — solo esperamos más tiempo con el velo
// arriba para que ese alcance termine tapado.
const SCRUB_CATCHUP_MS = 1100;

function jumpTo(target) {
    const veil = getVeil();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
        window.scrollTo({ top: target, behavior: 'auto' });
        return;
    }

    veil.classList.add('is-visible');
    setTimeout(() => {
        window.scrollTo({ top: target, behavior: 'auto' });
        setTimeout(() => {
            veil.classList.remove('is-visible');
        }, SCRUB_CATCHUP_MS);
    }, VEIL_FADE_MS);
}

export function initSectionNav(config) {
    const { nav, dotRefs } = buildDom(config);

    // I2: topLevel/subLevel used to be resolved once here and cached forever.
    // GSAP pins derive scroll distance from viewport height, and the page
    // calls ScrollTrigger.refresh() on resize, so cached targets go stale
    // above 1200px after any resize. buildLevels() re-resolves everything
    // and is re-run on resize/refresh instead of only once at init.
    let topLevel = [];
    let subLevel = [];

    function buildLevels() {
        topLevel = dotRefs.filter(d => d.depth === 0)
            .map(d => ({ ...d, target: resolveScrollTarget(d.entry) }))
            .sort((a, b) => a.target - b.target);

        subLevel = dotRefs.filter(d => d.depth === 1)
            .map(d => ({ ...d, target: resolveScrollTarget(d.entry) }))
            .sort((a, b) => a.target - b.target);
    }

    buildLevels();

    function updateActive() {
        const y = window.scrollY;

        let activeTop = topLevel[0];
        topLevel.forEach(d => { if (y >= d.target) activeTop = d; });
        topLevel.forEach(d => {
            d.el.setAttribute('aria-current', d === activeTop ? 'true' : 'false');
        });

        let activeSub = null;
        subLevel.forEach(d => { if (y >= d.target) activeSub = d; });

        // I4: a subsection only stays "active" while its parent top-level
        // entry is the active one. Once the user scrolls past all of a
        // group's subsections into the next top-level section, activeTop
        // no longer matches parentSelector, so activeSub is cleared instead
        // of staying pinned to the last subsection ever crossed.
        if (activeSub && (!activeTop || activeSub.parentSelector !== activeTop.entry.selector)) {
            activeSub = null;
        }

        subLevel.forEach(d => {
            d.el.setAttribute('aria-current', d === activeSub ? 'true' : 'false');
        });
        const touchedGroups = new Set(subLevel.map(d => d.group).filter(Boolean));
        touchedGroups.forEach(g => g.setAttribute('data-active', 'false'));
        if (activeSub && activeSub.group) activeSub.group.setAttribute('data-active', 'true');
    }

    updateActive();

    dotRefs.forEach(d => {
        // I2: resolve fresh at click time instead of reading a pre-computed
        // .target — the cached value in topLevel/subLevel can be stale
        // relative to the instant the user actually clicks.
        d.el.addEventListener('click', () => jumpTo(resolveScrollTarget(d.entry)));
    });

    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => { updateActive(); ticking = false; });
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let resizeTicking = false;
    const onResize = () => {
        if (!resizeTicking) {
            requestAnimationFrame(() => {
                buildLevels();
                updateActive();
                resizeTicking = false;
            });
            resizeTicking = true;
        }
    };
    window.addEventListener('resize', onResize);

    const hasScrollTrigger = typeof ScrollTrigger !== 'undefined';
    const onRefresh = () => { buildLevels(); updateActive(); };
    if (hasScrollTrigger) {
        ScrollTrigger.addEventListener('refresh', onRefresh);
    }

    // I3: cleanup so gsap.matchMedia can revert this init when the
    // (min-width: 1200px) query stops matching, and re-init cleanly (no
    // duplicate <nav>/veil/listeners) the next time it matches again.
    function destroySectionNav() {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        if (hasScrollTrigger) {
            ScrollTrigger.removeEventListener('refresh', onRefresh);
        }
        nav.remove();
        if (veilEl) {
            veilEl.remove();
            veilEl = null;
        }
    }

    return { dotRefs, resolveScrollTarget, destroy: destroySectionNav };
}
