# Barra de progreso + navegación por secciones — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fixed reading-progress bar and a right-side section dot-navigation to `caso-asdeporte.html`, built as two reusable, dependency-light JS modules so future case studies can adopt them with just a config file.

**Architecture:** Two standalone ES modules (`js/modules/scroll-progress.js`, `js/modules/section-nav.js`) that inject their own DOM and read only `scrollY`/`ScrollTrigger` state — no page markup required. A third, page-specific glue file (`js/caso-asdeporte-nav.js`) supplies this page's section config (selectors + the existing `data-phase` attributes already on `.cs-pin-spacer--*` elements) and gates both modules behind `gsap.matchMedia('(min-width: 1200px)')`.

**Tech Stack:** Vanilla ES modules, GSAP 3.12.5 + ScrollTrigger (loaded as CDN globals, already present on this page), no build step, no test runner — verification is manual via a static server and browser devtools console.

## Global Constraints

- No build system / package manager — files are plain `.js`/`.css`, loaded via `<script type="module">` / `<link>`. Serve with `npx serve .` or `python3 -m http.server 8080` to test (per `CLAUDE.md`).
- Single desktop breakpoint: both features are **desktop-only for now** (`min-width: 1200px`), hidden by default per the project's mobile-first strategy.
- Never use `git commit` / `git push` unless explicitly asked in that message (per `CLAUDE.md`) — the subagent/executor must stop after each task's verification, not commit automatically, unless the user has explicitly asked for commits in this session.
- Never use Chrome DevTools MCP / browser automation tools for this work — verification instructions below are for the *user* (or a plain manual check), not for an agent to drive a browser.
- Reuse existing design tokens only — no new CSS custom properties: `--color-primary`, `--color-accent`, `--color-glass-border`, `--glass-bg`, `--glass-backdrop`, `--glass-shadow`, `--glass-glow`, `--cs-header-height` (`81px`).
- `reset.css` sets `html { scroll-behavior: smooth }` (with a `prefers-reduced-motion: reduce` override to `auto`) — any programmatic scroll that must be instant needs `behavior: 'auto'` passed explicitly to `scrollTo()`.
- Section-jump targets must resolve via the page's existing `data-phase` attribute on `.cs-pin-spacer--*` elements + `ScrollTrigger.getAll()`, **not** `element.offsetTop`, for any section living inside a GSAP pin (see spec for the full `data-phase` table).

---

## File Structure

| File | Responsibility |
|---|---|
| `js/modules/scroll-progress.js` (new) | Generic reading-progress bar: injects DOM, computes `scrollY` progress, no GSAP dependency. |
| `js/modules/section-nav.js` (new) | Generic dot navigation: injects DOM, resolves jump targets (GSAP-aware), tracks active section, handles click-to-jump with veil transition. |
| `css/scroll-nav.css` (new) | Base/reset styles for both features, hidden below 1200px (mobile-first stub, follows `resultado.css` convention). |
| `css/scroll-nav-responsive.css` (new) | Desktop (`≥1200px`) layout/positioning for both features. |
| `js/caso-asdeporte-nav.js` (new) | Page-specific config + `gsap.matchMedia` gating; the only file a future case study would need to replace. |
| `caso-asdeporte.html` (modify) | Add 2 `<link>` tags + 1 `<script type="module">` tag. |

---

## Task 1: Reading-progress bar module

**Files:**
- Create: `js/modules/scroll-progress.js`
- Modify: none yet (wired in Task 3)

**Interfaces:**
- Produces: `export function initScrollProgress(options)` where `options: { anchorSelector?: string }`. Injects `<div class="scroll-progress"><div class="scroll-progress__fill"></div></div>` appended to `document.body` and returns nothing.

- [ ] **Step 1: Write the module**

```js
// js/modules/scroll-progress.js
// Barra de progreso de lectura — genérica, sin dependencia de GSAP.
// Reutilizable en cualquier página: calcula scrollY/documentHeight y
// pinta un <div> fixed cuyo fill se escala con transform (no width),
// para evitar layout thrashing en cada frame de scroll.

export function initScrollProgress({ anchorSelector } = {}) {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');

    const fill = document.createElement('div');
    fill.className = 'scroll-progress__fill';
    bar.appendChild(fill);
    document.body.appendChild(bar);

    if (anchorSelector) {
        const anchor = document.querySelector(anchorSelector);
        if (anchor) {
            const setTop = () => {
                bar.style.top = `${anchor.getBoundingClientRect().height}px`;
            };
            setTop();
            window.addEventListener('resize', setTop);
        }
    }

    let ticking = false;

    const update = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollHeight))
            : 0;
        fill.style.transform = `scaleX(${progress})`;
        ticking = false;
    };

    update();

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    });
}
```

- [ ] **Step 2: Manual verification in isolation**

Run: `python3 -m http.server 8080` from the project root, then open `http://localhost:8080/index.html` in a browser. Open devtools console and paste:

```js
import('./js/modules/scroll-progress.js').then(m => m.initScrollProgress());
```

Expected: no console errors, and `document.querySelector('.scroll-progress__fill')` exists in the DOM (check via `document.querySelector('.scroll-progress__fill')` in console — should log the element, not `null`). Visual fill won't show yet (no CSS exists until Task 2), that's expected at this step.

- [ ] **Step 3: Commit**

```bash
git add js/modules/scroll-progress.js
git commit -m "feat(scroll-progress): add generic reading-progress bar module"
```

---

## Task 2: Shared CSS for both features

**Files:**
- Create: `css/scroll-nav.css`
- Create: `css/scroll-nav-responsive.css`

**Interfaces:**
- Consumes: class names `.scroll-progress`, `.scroll-progress__fill` (Task 1); `.section-nav`, `.section-nav__dot`, `.section-nav__group`, `.section-nav__subdots`, `.section-nav__subdot` (Task 4).
- Produces: visual styling keyed off those class names; nothing else depends on this file's internals.

- [ ] **Step 1: Write the base stub (mobile-first, hidden by default)**

```css
/* css/scroll-nav.css */
/* ============================================
   SCROLL-NAV — Estilos base (mobile/tablet pendiente)
   Barra de progreso de lectura + dots de navegación.
   Ver scroll-nav-responsive.css para el layout de desktop.
   ============================================ */

.scroll-progress,
.section-nav {
    display: none;
}

.scroll-progress__fill {
    transform-origin: left center;
    background-color: var(--color-accent);
}

.section-nav__dot,
.section-nav__subdot {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    font: inherit;
}

.section-nav__dot:focus-visible,
.section-nav__subdot:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
    border-radius: 50%;
}
```

- [ ] **Step 2: Write the desktop layout**

```css
/* css/scroll-nav-responsive.css */
@media (min-width: 1200px) {

    .scroll-progress {
        display: block;
        position: fixed;
        top: var(--cs-header-height);
        left: 0;
        right: 0;
        height: 3px;
        background-color: var(--color-glass-border);
        z-index: 90;
        /* z-index 90: por debajo de .header (100), por encima del contenido */
    }

    .scroll-progress__fill {
        width: 100%;
        height: 100%;
    }

    .section-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        position: fixed;
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 90;
    }

    .section-nav__dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--glass-bg);
        border: 1px solid var(--color-glass-border);
        transition: background-color 200ms ease, transform 200ms ease;
        position: relative;
    }

    .section-nav__dot[aria-current="true"] {
        background: var(--color-accent);
        box-shadow: 0 0 0 4px var(--glass-glow);
        transform: scale(1.2);
    }

    .section-nav__dot::after {
        content: attr(aria-label);
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        white-space: nowrap;
        background: var(--glass-bg);
        backdrop-filter: var(--glass-backdrop);
        -webkit-backdrop-filter: var(--glass-backdrop);
        box-shadow: var(--glass-shadow);
        color: var(--color-secondary);
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 12px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 150ms ease;
    }

    .section-nav__dot:hover::after,
    .section-nav__dot:focus-visible::after {
        opacity: 1;
    }

    .section-nav__group {
        position: relative;
        display: flex;
        align-items: center;
    }

    .section-nav__subdots {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 150ms ease;
    }

    .section-nav__group:hover .section-nav__subdots,
    .section-nav__group[data-active="true"] .section-nav__subdots {
        opacity: 1;
        pointer-events: auto;
    }

    .section-nav__subdot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--glass-bg);
        border: 1px solid var(--color-glass-border);
    }

    .section-nav__subdot[aria-current="true"] {
        background: var(--color-accent);
    }

    .section-nav-veil {
        position: fixed;
        inset: 0;
        background: var(--color-primary);
        opacity: 0;
        pointer-events: none;
        z-index: 95;
        transition: opacity 150ms ease;
    }

    .section-nav-veil.is-visible {
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    .section-nav-veil {
        transition: none;
    }
}
```

- [ ] **Step 3: Manual verification**

Run: `python3 -m http.server 8080`, open `http://localhost:8080/caso-asdeporte.html`, open devtools console, paste:

```js
const l1 = document.createElement('link'); l1.rel = 'stylesheet'; l1.href = 'css/scroll-nav.css'; document.head.appendChild(l1);
const l2 = document.createElement('link'); l2.rel = 'stylesheet'; l2.href = 'css/scroll-nav-responsive.css'; document.head.appendChild(l2);
```

Expected: no 404s in the Network tab for either file. (Visual confirmation happens in Task 3/6 once the JS injects real elements.)

- [ ] **Step 4: Commit**

```bash
git add css/scroll-nav.css css/scroll-nav-responsive.css
git commit -m "feat(scroll-progress): add base + desktop styles for scroll-nav"
```

---

## Task 3: Wire the progress bar into `caso-asdeporte.html`

**Files:**
- Modify: `caso-asdeporte.html`

**Interfaces:**
- Consumes: `initScrollProgress` from Task 1, CSS classes from Task 2.

- [ ] **Step 1: Add the two `<link>` tags**

In `caso-asdeporte.html`, find this existing block (currently ending the CSS `<link>` list, right before the GSAP `<script>` tags):

```html
    <link rel="stylesheet" href="css/resultado.css">
    <link rel="stylesheet" href="css/resultado-responsive.css">
```

Replace with:

```html
    <link rel="stylesheet" href="css/resultado.css">
    <link rel="stylesheet" href="css/resultado-responsive.css">
    <link rel="stylesheet" href="css/scroll-nav.css">
    <link rel="stylesheet" href="css/scroll-nav-responsive.css">
```

- [ ] **Step 2: Add a temporary inline init (removed in Task 6)**

Directly before the closing `</body>` tag, add:

```html
<script type="module">
    import { initScrollProgress } from './js/modules/scroll-progress.js';
    initScrollProgress({ anchorSelector: '.header' });
</script>
```

- [ ] **Step 3: Manual verification**

Serve the site (`python3 -m http.server 8080`), open `http://localhost:8080/caso-asdeporte.html` in a browser at a viewport ≥1200px wide, scroll down. Confirm out loud to the user (or check yourself if you are the user) that: a thin green line appears right under the top nav, starts empty at the very top of the page, and fills left-to-right as you scroll, reaching full width at the bottom of the page.

- [ ] **Step 4: Remove the temporary inline script**

Delete the `<script type="module">...</script>` block added in Step 2 — it's superseded by `js/caso-asdeporte-nav.js` in Task 6. Leave the two `<link>` tags from Step 1 in place.

- [ ] **Step 5: Commit**

```bash
git add caso-asdeporte.html
git commit -m "feat(scroll-progress): link scroll-nav stylesheets in caso-asdeporte"
```

---

## Task 4: Section-nav module — DOM injection + active-state tracking (no click yet)

**Files:**
- Create: `js/modules/section-nav.js`

**Interfaces:**
- Consumes: nothing external (reads `ScrollTrigger` global only if present).
- Produces: `export function initSectionNav(config)` where:
  ```ts
  type SectionNavEntry = {
    selector: string;
    label: string;
    phase?: string;        // matches an existing [data-phase="..."] element
    scrollProgress?: number; // 0-1, default 0 — offset within a shared pin
    subsections?: SectionNavEntry[];
  };
  ```
  Injects a `<nav class="section-nav">` into `document.body` with one `<button class="section-nav__dot">` per top-level entry (wrapped in `<div class="section-nav__group">` + `<div class="section-nav__subdots">` when `subsections` is present), sets `aria-current="true"` on the active dot/subdot on scroll, and sets `data-active="true"` on `.section-nav__group` when any of its subsections is the deepest active target.

- [ ] **Step 1: Write the module (target resolution + render + active tracking, click stubbed)**

```js
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
            if (d.group) d.group.setAttribute('data-active', d === activeSub ? 'true' : 'false');
        });
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
```

- [ ] **Step 2: Manual verification**

Serve the site, open `http://localhost:8080/caso-asdeporte.html`, console:

```js
import('./js/modules/section-nav.js').then(m => {
  window.__nav = m.initSectionNav([
    { selector: '.cs-apertura', label: 'Inicio' },
    { selector: '.cs-contexto', label: 'Contexto', phase: 'contexto' },
    { selector: '.rs-mosaico', label: 'Resultado', phase: 'rs-mosaico' },
  ]);
});
```

Expected: `document.querySelectorAll('.section-nav__dot').length === 3` (paste that in console — should log `3`). Scroll down slowly and confirm the `aria-current="true"` attribute moves between dots — check with `document.querySelector('.section-nav__dot[aria-current="true"]')` at different scroll positions, it should point to a different button as you pass "Contexto" and "Resultado".

- [ ] **Step 3: Commit**

```bash
git add js/modules/section-nav.js
git commit -m "feat(section-nav): add dot injection + active-section tracking"
```

---

## Task 5: Section-nav click-to-jump with veil transition

**Files:**
- Modify: `js/modules/section-nav.js`

**Interfaces:**
- Consumes: `dotRefs` array from Task 4 (each item has `.el` and `.entry`).
- Produces: clicking any `.section-nav__dot` / `.section-nav__subdot` scrolls to its resolved target using the veil transition described below.

- [ ] **Step 1: Add the veil helper and click wiring**

In `js/modules/section-nav.js`, add above `initSectionNav`:

```js
let veilEl = null;

function getVeil() {
    if (veilEl) return veilEl;
    veilEl = document.createElement('div');
    veilEl.className = 'section-nav-veil';
    veilEl.setAttribute('aria-hidden', 'true');
    document.body.appendChild(veilEl);
    return veilEl;
}

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
        requestAnimationFrame(() => veil.classList.remove('is-visible'));
    }, 150);
}
```

Then, inside `initSectionNav`, after `updateActive()` is defined and before the `window.addEventListener('scroll', ...)` call, add:

```js
    [...topLevel, ...subLevel].forEach(d => {
        d.el.addEventListener('click', () => jumpTo(d.target));
    });
```

- [ ] **Step 2: Manual verification**

Reuse the console snippet from Task 4 Step 2 to init `__nav` on `caso-asdeporte.html`. Click the "Contexto" dot (`document.querySelectorAll('.section-nav__dot')[1].click()` in console, or click it directly if the CSS from Task 2 is loaded). Confirm: the screen briefly goes to solid background color, then lands with the Contexto section in view (not mid-animation of an intermediate scrub), then fades back in. Confirm there's no visible "flight" through the Apertura→Contexto scrub animation.

- [ ] **Step 3: Commit**

```bash
git add js/modules/section-nav.js
git commit -m "feat(section-nav): add click-to-jump with veil transition"
```

---

## Task 6: Page-specific config + final integration

**Files:**
- Create: `js/caso-asdeporte-nav.js`
- Modify: `caso-asdeporte.html`

**Interfaces:**
- Consumes: `initScrollProgress` (Task 1), `initSectionNav` (Tasks 4-5).
- Produces: nothing further downstream — this is the leaf/glue file.

- [ ] **Step 1: Write the config file**

```js
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
```

- [ ] **Step 2: Wire the script tag into `caso-asdeporte.html`**

Find:

```html
    <script type="module" src="js/caso-asdeporte.js" defer></script>
    <script type="module" src="js/resultado.js" defer></script>
```

Replace with:

```html
    <script type="module" src="js/caso-asdeporte.js" defer></script>
    <script type="module" src="js/resultado.js" defer></script>
    <script type="module" src="js/caso-asdeporte-nav.js" defer></script>
```

- [ ] **Step 3: Calibrate the "Contacto" `scrollProgress` value**

Serve the site, open `http://localhost:8080/caso-asdeporte.html` at ≥1200px width. Click the "Contacto" dot (the last one in the right-side column). Check whether the viewport lands with the "¿ARRANCAMOS?" heading and CHARLEMOS button fully visible and settled (not mid-reveal-animation). If it lands too early (Gracias/media still dominant) or too late (past the CTA), adjust the `scrollProgress` value in `js/caso-asdeporte-nav.js` (try increments of `0.05`) and reload until the CTA is the clearly-settled focal point. Record the final chosen value by leaving it as the literal number in the config (no further comment needed — the inline comment already explains why it exists).

- [ ] **Step 4: Full manual verification checklist**

With the site served and open at ≥1200px width:

1. Reload from the very top: confirm the progress bar is empty (0% fill) and no `.section-nav__dot` has `aria-current="true"` except "Inicio".
2. Scroll to the very bottom (past the CHARLEMOS button): confirm the progress bar is at 100% fill and the "Contacto" dot shows `aria-current="true"`.
3. Hover each top-level dot: confirm a tooltip with its label appears to the left of the dot.
4. Scroll into "Decisiones clave": confirm the 3 sub-dots appear next to that dot, and that hovering away (without leaving the section) keeps them visible (via `data-active="true"` on `.section-nav__group`).
5. Click each of the 3 sub-dots in turn: confirm each lands on the correct Decisión (1, 2, 3) with the veil fade, and that the sub-dot's `aria-current` updates correctly afterward on further scroll.
6. Resize the browser window below 1200px: confirm both the progress bar and the dot column disappear (CSS `display: none` takes over).
7. In devtools, enable "Emulate CSS media feature prefers-reduced-motion: reduce", click a dot: confirm the jump happens without the veil fade (instant, no darkening flash).
8. Tab through the dots with the keyboard: confirm each receives a visible focus ring (green outline) and `Enter`/`Space` triggers the same jump as a click.

- [ ] **Step 5: Commit**

```bash
git add js/caso-asdeporte-nav.js caso-asdeporte.html
git commit -m "feat(section-nav): wire scroll-progress + section-nav into caso-asdeporte"
```

---

## Self-Review Notes

- **Spec coverage:** progress bar (Task 1-3), dot nav + expansion (Task 4), jump/veil behavior (Task 5), page config incl. `data-phase` resolution and the calibrated "Contacto" edge case (Task 6). All spec sections have a corresponding task.
- **Placeholder scan:** the only numeric value needing on-the-fly adjustment is `scrollProgress: 0.85` for "Contacto", which is explicitly called out with a concrete calibration procedure in Task 6 Step 3 (not a vague TODO — it's a manual QA step with a starting value and an exact adjustment method).
- **Type consistency:** `SectionNavEntry` shape (`selector`, `label`, `phase`, `scrollProgress`, `subsections`) is used identically in Task 4's interface doc and Task 6's actual config object. `resolveScrollTarget`, `initScrollProgress`, `initSectionNav` names match across every task that references them.
