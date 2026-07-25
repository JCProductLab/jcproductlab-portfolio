# Spec: Barra de progreso de lectura + navegación por secciones (dots)

**Fecha:** 2026-07-24
**Archivos principales:** `js/modules/scroll-progress.js` (nuevo), `js/modules/section-nav.js` (nuevo), `js/caso-asdeporte-nav.js` (nuevo, glue de config), `css/scroll-nav.css` (nuevo), `css/scroll-nav-responsive.css` (nuevo), `caso-asdeporte.html` (2 `<link>` + 1 `<script>` nuevos)

## Contexto

`caso-asdeporte.html` ya está terminado y "perfecto" en desktop. Se pide agregar dos features de navegación global a la página:

1. Un indicador de avance de lectura (0% al inicio → 100% al final de la página).
2. Navegación directa entre las secciones principales, sin necesidad de hacer scroll manual.

Se decidió construir esto como **patrón reutilizable** (dos módulos genéricos + un archivo de config por case study), ya que futuros case studies necesitarán lo mismo.

### Restricción técnica clave: scroll-jacking con GSAP ScrollTrigger

La página alterna scroll vertical/horizontal usando `ScrollTrigger.create({ pin: true, scrub: 1 })` sobre spacers declarados por adelantado (`.cs-pin-spacer--*`, ver líneas 313-331 de `caso-asdeporte.html`). Estos spacers **no envuelven** la sección que pinean — son elementos hermanos declarados antes en el DOM, cada uno con `data-phase="<nombre>"`. Ejemplos confirmados:

| `data-phase` | Sección que pinea | ¿Pin dedicado? |
|---|---|---|
| *(ninguno)* | `.cs-apertura` | No — es scrollY 0, no necesita ScrollTrigger |
| `contexto` | `.cs-contexto` | Sí |
| `decisiones-titulos` | `.cs-decisiones-titulos` | Sí |
| `decision-1` / `decision-2` / `decision-3` | `.cs-decision[data-dec="N"]` | Sí (dedicado, separado de `-expansion`, `-problema`, `-ladecision`, `-razonamiento`) |
| `rs-mosaico` | `.rs-mosaico` | Sí |
| `rs-cierre` | `.rs-cierre` (incluye `.rs-cierre__bottom`, que es donde vive "Contacto") | Sí, pero **compartido** con "Gracias" + media (Fases 5.2/5.3) — no tiene spacer propio |

Como `scrollY` sigue siendo monótono durante todo el scroll-jacking (GSAP anima `transform`/`opacity` vía scrub, no mueve el scroll real), calcular el progreso de lectura es trivial (`scrollY / (scrollHeight - innerHeight)`). Pero **saltar** a una sección requiere resolver el `scrollY` correcto de cada `ScrollTrigger`, no el `offsetTop` del elemento visual (que puede no corresponder a su posición real dentro del pin).

## Arquitectura

### 1. `js/modules/scroll-progress.js` — barra de progreso (genérico)

```js
export function initScrollProgress({ anchorSelector } = {}) {
  // Crea <div class="scroll-progress"><div class="scroll-progress__fill"></div></div>
  // Si anchorSelector existe en el DOM, ancla top: var(--cs-header-height) (o su altura real medida)
  // Actualiza __fill.style.transform = `scaleX(${progress})` en scroll (rAF-throttled) + resize
}
```

- Sin dependencia de GSAP. Cálculo puro: `progress = clamp01(scrollY / (document.documentElement.scrollHeight - window.innerHeight))`.
- Usa `transform: scaleX()` (no `width`) para evitar layout thrashing en cada frame.
- `position: fixed; top: var(--cs-header-height); left: 0; right: 0; height: 3px; z-index: 90` (debajo del `.header` que usa `z-index: 100`, pero por encima del contenido) — vive justo debajo del nav fijo, como su borde inferior.
- Respeta `prefers-reduced-motion`: sin transición CSS de por medio en el relleno (ya es 1:1 con scroll, no hay nada que "suavizar"); esto no se ve afectado por reduced motion.

### 2. `js/modules/section-nav.js` — dots de navegación (genérico)

```js
export function initSectionNav(config) {
  // config: Array<{ selector, label, phase?, scrollProgress?, subsections?: [...] }>
}
```

**Resolución del target de scroll** (por cada entrada, y cada subsección):

```js
function resolveScrollTarget({ selector, phase, scrollProgress = 0 }) {
  const el = document.querySelector(selector);
  if (phase && typeof ScrollTrigger !== 'undefined') {
    const triggerEl = document.querySelector(`[data-phase="${phase}"]`);
    const st = ScrollTrigger.getAll().find(st => st.trigger === triggerEl);
    if (st) return st.start + scrollProgress * (st.end - st.start);
  }
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
}
```

- `phase` mapea 1:1 al atributo `data-phase` ya existente en los `.cs-pin-spacer` de la página — no se inventa mecanismo nuevo, se reutiliza la convención existente.
- Entradas sin `phase` (ej. "Inicio") caen al fallback `offsetTop` (que para `.cs-apertura` es 0).
- `scrollProgress` (0-1, default 0) es necesario solo para targets que **comparten** un pin con otro contenido — hoy, únicamente "Contacto" (`.rs-cierre__bottom`, `phase: 'rs-cierre'`). Su valor exacto (ej. `0.85`) se calibra durante implementación leyendo las fases 5.2/5.3 de `resultado.js` (mismo patrón de tabla de rangos de progreso que ya usa ese archivo) y se documenta con un comentario inline en el config.

**Detección de sección activa** (qué dot se ilumina): en scroll, se ordenan los `resolveScrollTarget()` de las entradas de nivel superior ascendentemente y la activa es la última cuyo umbral ya se cruzó (`scrollY >= threshold`). Se prefiere esto sobre `IntersectionObserver` porque las secciones pineadas ocupan el 100% del viewport durante un tramo largo de scroll, lo que hace ambiguo (o irrelevante) usar intersección — el umbral por `scrollY` es determinista. Igual lógica, anidada, para las 3 subsecciones de "Decisiones clave" (acotada entre el umbral de `decisiones-titulos` y el de `rs-mosaico`).

**Config de esta página** (`js/caso-asdeporte-nav.js`):

```js
import { initScrollProgress } from './modules/scroll-progress.js';
import { initSectionNav } from './modules/section-nav.js';

if (typeof gsap !== 'undefined') {
  gsap.matchMedia().add('(min-width: 1200px)', () => {
    initScrollProgress({ anchorSelector: '.header' });
    initSectionNav([
      { selector: '.cs-apertura', label: 'Inicio' },
      { selector: '.cs-contexto', label: 'Contexto', phase: 'contexto' },
      {
        selector: '.cs-decisiones-titulos', label: 'Decisiones clave', phase: 'decisiones-titulos',
        subsections: [
          { selector: '.cs-decision[data-dec="1"]', label: 'Decisión 1', phase: 'decision-1' },
          { selector: '.cs-decision[data-dec="2"]', label: 'Decisión 2', phase: 'decision-2' },
          { selector: '.cs-decision[data-dec="3"]', label: 'Decisión 3', phase: 'decision-3' },
        ]
      },
      { selector: '.rs-mosaico', label: 'Resultado', phase: 'rs-mosaico' },
      { selector: '.rs-cierre__bottom', label: 'Contacto', phase: 'rs-cierre', scrollProgress: 0.85 }, // TODO calibrar: ver Fase 5.2/5.3 en resultado.js
    ]);
  });
}
```

`gsap.matchMedia()` se usa (no un simple `matchMedia` nativo) por consistencia con el resto del código de la página (mismo patrón que `case-cards-scroll.js`) y porque ya limpia listeners automáticamente al cruzar el breakpoint.

### 3. Interacción de dots

**Markup inyectado por JS** (no se escribe HTML a mano en `caso-asdeporte.html`, para mantener el módulo plug-and-play):

```html
<nav class="section-nav" aria-label="Navegación de secciones">
  <button class="section-nav__dot" aria-label="Inicio" aria-current="true"></button>
  <button class="section-nav__dot" aria-label="Contexto"></button>
  <div class="section-nav__group">
    <button class="section-nav__dot" aria-label="Decisiones clave"></button>
    <div class="section-nav__subdots"> <!-- oculto por CSS, se muestra al hover/activo -->
      <button class="section-nav__subdot" aria-label="Decisión 1"></button>
      <button class="section-nav__subdot" aria-label="Decisión 2"></button>
      <button class="section-nav__subdot" aria-label="Decisión 3"></button>
    </div>
  </div>
  <button class="section-nav__dot" aria-label="Resultado"></button>
  <button class="section-nav__dot" aria-label="Contacto"></button>
</nav>
```

- Tooltip con el nombre de sección al hover (via `::after` + `aria-label`, sin JS extra).
- `.section-nav__subdots` se muestra si: el dot padre está en hover, **o** la sección "Decisiones clave" está activa (mismo criterio de "sección activa" del punto anterior).
- Dot/subdot activo: `aria-current="true"` + estilo (relleno `--color-accent` + halo).

### 4. Comportamiento de salto — velo instantáneo no-abrupto

```js
function jumpTo(target) {
  const veil = getOrCreateVeil(); // div fixed inset:0, background: var(--color-primary), opacity 0, pointer-events controlados
  veil.classList.add('is-visible'); // transition: opacity 150ms
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => {
    window.scrollTo({ top: target, behavior: 'auto' }); // 'auto' explícito: pisa el scroll-behavior:smooth global de reset.css
    requestAnimationFrame(() => veil.classList.remove('is-visible'));
  }, reduced ? 0 : 150);
}
```

**Detalle importante**: `reset.css` define `html { scroll-behavior: smooth }` globalmente. `window.scrollTo({ top, behavior: 'auto' })` con `behavior` explícito **sí** pisa esa propiedad CSS (comportamiento estándar del spec de scroll) — sin el `behavior: 'auto'` explícito, el salto "instantáneo" en realidad animaría suave y quedaría redundante con el velo.

Con `prefers-reduced-motion: reduce`, se salta el fade del velo (salto directo, sin transición) — consistente con el override que ya existe en `reset.css` línea ~239.

### 5. CSS

- `css/scroll-nav.css`: reglas base + oculto por defecto (`display: none` mobile-first, siguiendo la estrategia de breakpoint único del proyecto).
- `css/scroll-nav-responsive.css`: dentro de `@media (min-width: 1200px)`, todo el layout — `.section-nav` fixed a la derecha centrado vertical (`right: 32px`, `top: 50%`, `transform: translateY(-50%)`), `.scroll-progress` fixed `top: var(--cs-header-height)`.
- Tokens reusados: `--color-accent`, `--glass-bg`/`--glass-border` (fondo de los dots), sin tokens nuevos.

### 6. Integración en `caso-asdeporte.html`

```html
<link rel="stylesheet" href="css/scroll-nav.css">
<link rel="stylesheet" href="css/scroll-nav-responsive.css">
```

(agregar junto a los demás `<link>` de case-study, antes de `resultado-responsive.css`)

```html
<script type="module" src="js/caso-asdeporte-nav.js" defer></script>
```

(agregar después de `js/resultado.js`, ya que depende de que los `ScrollTrigger` de `caso-asdeporte.js`/`resultado.js` existan al momento de resolver targets — en la práctica, `initSectionNav` solo necesita que existan al momento del **clic**, no al cargar, así que el orden real de scripts no es crítico, pero se mantiene el orden lógico de la página)

## No está en scope de este spec

- Mobile/tablet (ambos módulos quedan gateados a `≥1200px`; se retoma cuando se desarrolle esa versión de la página).
- El valor exacto de `scrollProgress: 0.85` para "Contacto" — placeholder a calibrar visualmente durante implementación.
- Cualquier persistencia (ej. recordar última sección vista) — no se pidió.
- Reutilización en un segundo case study — el diseño lo permite (dos módulos genéricos + un archivo de config), pero no hay un segundo caso hoy para validarlo end-to-end.
