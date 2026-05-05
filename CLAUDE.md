# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

No build system or package manager. Open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Deployed to Netlify automatically from the main branch.

## Architecture

Static portfolio site — pure HTML/CSS/JS with ES modules. No framework, no bundler, no dependencies to install.

**Pages**
- `index.html` — Main page (Spanish, default)
- `en/index.html` — English version
- `atoms.html` — Design system reference

**JS entry point**: `js/main.js` imports and initializes all modules. Initialization order matters:
1. `initTheme()` — runs immediately (before DOMContentLoaded) to prevent flash
2. `initHeroIntro()` — runs on module load (deferred script)
3. Navigation + magnetic — on `DOMContentLoaded`
4. Custom cursor + GSAP animations — on `window.load`

**JS modules** (`js/modules/`): `theme.js`, `navigation.js`, `magnetic.js`, `cursor.js`, `i18n.js`, `phosphor.js`, `scroll-to-top.js`

**Animation modules** (`js/modules/animations/`): `hero-intro.js`, `case-cards-scroll.js`, `case-cursor.js`, `scroll-reveal.js`, `card-reveal.js`, `card-tilt.js`, `rotating-text.js`, `marquee.js`, `fractal.js`, `touch-ripple.js`

**Web Components** (`js/components/`): `jc-header.js`, `jc-footer.js`, `jc-logos.js`, `jc-metric-badge.js`, `jc-testimonios.js`, `jc-cta-arrancamos.js`

**i18n**: JSON files in `locales/es.json` and `locales/en.json`. Logic handled by `js/modules/i18n.js`.

**GSAP + ScrollTrigger**: Loaded from CDN (not bundled). Used only for `case-cards-scroll` scrollytelling on desktop.

## CSS Architecture

CSS load order in `<head>`:
```
reset.css → variables.css → phosphor.css → atoms.css → main.css → responsive.css
```

`light-mode.css` exists but light mode is primarily handled via CSS custom properties.

**Responsive strategy**: Mobile-first, single breakpoint at `1200px` for desktop.

## Design System

**Tokens** (`css/variables.css`):
- `--color-primary` — main background (dark: `#0D0D0D`, light: `#F5F5F5`)
- `--color-secondary` — body text (dark: `#F0F0F0`, light: `#111111`)
- `--color-accent` — CTAs, highlights (dark: `#00D46E`, light: `#00B85C`)
- `--color-bg` — cards/elevated surfaces
- `--color-text-secondary` — metadata/descriptions
- `--glass-bg`, `--glass-backdrop`, `--glass-shadow`, `--glass-glow` — glassmorphism set

**Theming**: Dark mode by default (`color-scheme: dark` on `:root`). Switching via `[data-theme="light"]` on `<html>`. Manual toggle persisted to `localStorage` with key `theme`. System preference respected when no manual preference exists.

**Typography**: Font `Sora` — self-hosted `.woff2` (preloaded) + Google Fonts fallback. Weights: `--regular` (400), `--semibold` (600), `--bold` (700), `--extrabold` (800).

**Atoms** (documented in `ATOMS.md`):
- Buttons: `.btn.btn--primary`, `.btn.btn--secondary`, `.btn-icon` (circular)
- Tags: `.tag.tag--bordered`, `.tag--text-only`, `.tag--contact`
- Links: `.nav-link`, `.body-link`, `.link-secondary`
- Metric badge: `.metric-badge > .metric-badge__number + __divider + __description`
- Avatar: `.avatar.avatar--default` (48px), `.avatar--small` (32px)
- Dividers: `.divider.divider--horizontal`, `.divider--vertical`

**Icons** (Phosphor, font-based via CDN):
```html
<i class="ph ph-{icon-name}"></i>
<!-- with size/color modifiers -->
<i class="icon icon--md icon--accent ph ph-arrow-up-right"></i>
```
Sizes: `icon--xs/sm/md/lg/xl`. Colors: `icon--primary/secondary/accent/disabled`.

## Hero Animation

`hero-intro.js` wraps H1 words in `<span class="hero-word">` at init time, then adds `.hero-active` on `window.load` to trigger CSS entry animations. The word swapper (`negocio → producto → usuario → mañana`) starts after the CTA button's `transitionend` fires — this is the final step of the choreography and must not be disrupted.
