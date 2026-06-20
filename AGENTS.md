# AGENTS.md — JCProductLab Portfolio (V3.2)

## Build / Serve / Test

No build system, no package manager, no bundler, no dependencies. Pure static site.

```bash
# Serve locally (pick one)
npx serve .
python3 -m http.server 8080

# Check for 404s or issues
curl -sI http://localhost:8080/index.html
```

- **Lint**: none configured. No ESLint, Prettier, or formatter.
- **Tests**: none exist. No test runner, no test files.
- **CI/CD**: GitHub Pages auto-deploy from `main` branch. Netlify configured but unused.
- **No `package.json`** — all dependencies are CDN-linked in HTML (`<script>` / `<link>` tags).

## Architecture

Static portfolio site — pure HTML/CSS/JS with **ES modules**. No framework.

### Pages
- `index.html` — Main page (Spanish, default)
- `en/index.html` — English version
- `atoms.html` — Design system reference
- `caso-asdeporte.html` — Case study

### JS Entry Point (`js/main.js`)

Initialization order matters. Three timing windows:

1. **Immediate** (synchronous, before DOM): `initTheme()` — prevents flash of wrong theme
2. **On module load** (deferred script, DOM ready): `initHeroIntro()` — wraps H1 words ASAP
3. **`DOMContentLoaded`**: `initNavigation()`, `initMagnetic()`
4. **`window.load`**: cursor, GSAP scroll animations, reveal animations (runs after all assets)

### JS Module Organization

```
js/
├── main.js                         # Entry point — imports + orchestrates
├── modules/                        # Feature modules
│   ├── theme.js, navigation.js, magnetic.js
│   ├── cursor.js, i18n.js, phosphor.js
│   └── scroll-to-top.js
├── modules/animations/             # GSAP + scroll-driven animations
│   ├── hero-intro.js, case-cards-scroll.js
│   ├── case-cursor.js, fractal.js
│   ├── mask-reveal.js, interactions.js
│   └── (various reveal stubs)
└── components/                     # Web Components (ALL STUBS — not yet implemented)
    ├── jc-header.js, jc-footer.js
    └── jc-logos.js, jc-metric-badge.js, …
```

### CSS Load Order

```
reset.css → variables.css → phosphor.css → atoms.css → main.css → responsive.css
```

Plus per-feature: `mask-reveal.css`, `testimonial-cards-reveal.css`

## Code Style Guidelines

### JavaScript

- **No default exports**. Use named exports only.
- **`'use strict'`** at top of every module (exception: `cursor.js` for WebGL compat).
- **Module comment header** with separator lines:
  ```js
  // ============================================
  // MÓDULO: ModuleName
  // Brief description
  // ============================================
  ```
- **Section separators** within long modules:
  ```js
  // ----------------------------------------
  // Section title
  // ----------------------------------------
  ```

#### Naming

| Thing | Convention | Example |
|-------|-----------|---------|
| Exported init functions | `camelCase`, prefix `init` | `initTheme()`, `initNavigation()` |
| Exported animation helpers | `camelCase`, prefix `animate` | `animateShowCaseCursor()` |
| Internal functions | `camelCase` | `openMenu()`, `applyTheme()` |
| Classes | `PascalCase` | `MagneticManager`, `Material`, `Program` |
| Constants | `UPPER_SNAKE_CASE` | `STORAGE_KEY`, `SIM_RESOLUTION` |
| Filenames | `kebab-case.js` | `case-cards-scroll.js`, `scroll-to-top.js` |

#### Imports

```js
import { initTheme } from './modules/theme.js';
import { initCaseCardsScroll } from './modules/animations/case-cards-scroll.js';
```
Always include `.js` extension. Always use relative paths.

#### Module Structure Pattern

```js
'use strict';

// ============================================
// MÓDULO: Navigation
// Handles: hamburger menu, scroll glassmorphism
// ============================================

export function initNavigation() {
    // 1. DOM queries
    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');

    // 2. Early return guard
    if (!hamburger) return;

    // 3. Internal functions
    function openMenu() { /* … */ }

    // 4. Event listeners
    hamburger.addEventListener('click', openMenu);
}
```

#### Event Listeners

- Direct `addEventListener` (no delegation helpers).
- Use `{ passive: true }` for scroll/touchmove.
- Use `{ once: true }` for one-shot listeners (e.g., `window.load`).
- Use `requestAnimationFrame` for mouse position / scroll throttling.
- Use `IntersectionObserver` for scroll-triggered animations (mobile-friendly).
- Use `ResizeObserver` for canvas sizing.
- Keyboard: close overlay on `Escape`, focus trap on `Tab`.

#### Error Handling

- **Early return guards** are the primary pattern:
  ```js
  const section = document.querySelector('.case-cards');
  if (!section) return;
  if (cards.length < 3) return;
  ```
- **Feature detection** for optional libs (GSAP, ScrollTrigger):
  ```js
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  ```
- **try/catch for localStorage** (privacy mode):
  ```js
  try { return localStorage.getItem(STORAGE_KEY); }
  catch { return null; }
  ```
- **No console.log or console.error** in production modules (exception: shader compile errors in `fractal.js`).
- **Graceful degradation** — missing elements → silent return. No thrown errors.

### HTML / CSS

- **BEM-like naming**: `.block__element--modifier` (e.g., `.nav-overlay__close`, `header--scrolled`).
- **Mobile-first responsive**: base styles in `main.css`, tablet at 768px, desktop at 1200px in `responsive.css`.
- **Custom properties** for theming: see `css/variables.css` for token set.
- **Dark mode default**, light via `[data-theme="light"]` on `<html>`.
- **`clamp()`** for fluid typography.
- **Comments with separator lines**: `/* ========== Section ========== */`.
- **Font**: `Sora` (body), `Plus Jakarta Sans` (display). Both via Google Fonts.

### External Libraries

- **GSAP + ScrollTrigger**: loaded from CDN with `defer`. Check `typeof gsap === 'undefined'` before use.
- **Phosphor icons**: font-based via CDN (`<i class="ph ph-{name}"></i>`).

### Key Constraints

- Spanish-first UI: comments, variable names, and copy in Spanish.
- `hero-intro.js` word swapper (`negocio → producto → usuario → mañana`) must not be disrupted. It starts after the CTA button's `transitionend` event.
- GSAP `case-cards-scroll` scrollytelling is desktop-only (`pointer: fine`), with a simpler touch variant.
- `prefers-reduced-motion` respected: static single frame for fractal, no animation loops.
- Cursor hidden (`cursor: none`) on desktop >= 1024px with `pointer: fine`.
- DPR capped at 1.5 for canvas effects.
