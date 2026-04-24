# Phosphor Icons Implementation

Professional vanilla web implementation of [Phosphor Icons](https://phosphoricons.com) for the JC ProductLab portfolio.

## Setup

### 1. Include CSS in your HTML head

Add this one line to enable all 1,248 icons:

```html
<link rel="stylesheet" href="/css/phosphor.css">
```

### 2. Import JS module (optional, for dynamic icons)

```html
<script type="module">
  import { createPhosphorIcon, replaceIconsInDOM } from './js/modules/phosphor.js';
  
  // Initialize on page load
  replaceIconsInDOM();
</script>
```

## Usage Methods

### Method 1: Direct HTML (simplest)

```html
<i class="icon icon--md icon--accent ph ph-download"></i>
```

**Format**: `ph ph-{icon-name}`

### Method 2: Data attributes (progressive enhancement)

```html
<!-- HTML markup -->
<span data-icon="heart" data-icon-size="lg" data-icon-color="accent" data-icon-label="Like this"></span>

<!-- JavaScript to activate -->
<script type="module">
  import { replaceIconsInDOM } from './js/modules/phosphor.js';
  replaceIconsInDOM();
</script>
```

### Method 3: Dynamic creation (JavaScript)

```javascript
import { createPhosphorIcon } from '/js/modules/phosphor.js';

const icon = createPhosphorIcon('download', {
  size: 'md',        // xs, sm, md, lg, xl
  color: 'accent',   // primary, secondary, accent, disabled
  interactive: true, // add hover effects
  ariaLabel: 'Download file'
});

document.querySelector('.button').appendChild(icon);
```

## Sizing

- `icon--xs` → 16px
- `icon--sm` → 20px
- `icon--md` → 24px (default)
- `icon--lg` → 32px
- `icon--xl` → 48px

## Colors

- `icon--primary` → var(--color-text)
- `icon--secondary` → var(--color-text-secondary)
- `icon--accent` → var(--color-accent) [green #00D46E]
- `icon--disabled` → reduced opacity

## Animations

- `icon--spin` → continuous rotation
- `icon--pulse` → fade in/out pulse
- Respects `prefers-reduced-motion`

## Available Icons

**1,248 total icons** across categories:

- **UI**: menu, x, check, minus, dot, plus, arrow-right, chevron-down
- **Navigation**: home, gear, magnifying-glass, list, grid
- **Actions**: download, upload, trash, pencil, copy, share
- **Social**: heart, chat-circle, bookmark, share-network
- **Status**: warning-circle, info, check-circle, x-circle
- **Media**: image, video, play, pause, volume-x
- **Misc**: sun, moon, star, bell, clock, envelope, phone

Full icon list: https://phosphoricons.com/

## Performance Notes

- **CDN-hosted**: Fast delivery via jsDelivr (global CDN)
- **Small bundle**: ~40KB gzipped for all 1,248 icons
- **Font-based**: Renders as text, not SVG (better performance)
- **No dependencies**: Pure CSS + optional vanilla JS
- **Dark/Light**: Inherits colors from design system tokens

## Browser Support

- Chrome/Edge: Latest 2 versions ✓
- Safari: Latest 2 versions ✓
- Firefox: Latest 2 versions ✓
- All modern mobile browsers ✓

## Examples

### Button with icon

```html
<button class="button">
  <i class="icon icon--sm icon--accent ph ph-download"></i>
  Download CV
</button>
```

### Icon-only button (with tooltip)

```html
<button class="icon-button" title="Share this">
  <i class="icon icon--md icon--interactive ph ph-share-network"></i>
</button>
```

### Loading spinner

```javascript
const spinner = createPhosphorIcon('spinner', {
  size: 'lg',
  spin: true,
  ariaLabel: 'Loading content...'
});
```

### Icon with hover effect

```html
<a href="#" class="nav-link">
  <i class="icon icon--md icon--interactive ph ph-home"></i>
  Home
</a>
```