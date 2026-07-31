# Spec: Apertura + Métrica combinadas en tablet (2 columnas, estilo case-card)

**Fecha:** 2026-07-31
**Archivos principales:** `caso-asdeporte.html`, `css/case-study.css`, `js/caso-asdeporte-nav.js`, `js/modules/animations/apertura-tablet.js` (nuevo), `js/modules/animations/metrica-sequence.js`

## Contexto

Hoy, mobile y tablet comparten el mismo comportamiento para "Apertura": título y métrica ("25%") son dos pantallas secuenciales, unidas por un colchón de scroll de 110vh (`--cs-title-exit-buffer` + `--cs-metrica-pin-buffer`, `case-study.css`) durante el cual el fondo queda pineado (`position:sticky`) y JS bespoke (`apertura-exit.js`, `metrica-sequence.js#initMetricaPin`) desvanece el título y luego "frena" la métrica en el borde inferior de pantalla vía `transform:translateY` calculado a mano.

Para **tablet únicamente** (mobile no se toca), el nuevo diseño combina título + métrica en una sola pantalla estática, layout de 2 columnas calcado de `.case-card` (`css/responsive.css` en `index.html`):
- **Portrait / landscape angosto (700–899px):** columna — título arriba-izquierda, métrica abajo-derecha.
- **Landscape ≥900px:** fila — título izquierda, métrica derecha, ambos anclados abajo/extremos.

Entrada en escalera, sin scroll: título entra primero (offset chico), y recién al terminar arranca la métrica (conteo 0→25 → flecha → texto), igual que hoy pero sin esperar ningún scroll intermedio.

Referencia visual: mockups 1.jpg (landscape) y 2.jpg (portrait) provistos por el usuario. Referencia de comportamiento: `.case-card` en `index.html` (`css/responsive.css` líneas 12–140, 213–303; `js/modules/animations/case-cards-scroll.js` rama `pointer:coarse`).

## Decisiones cerradas con el usuario

1. **`.cs-metrica` se mueve por JS** (reparenting, mismo patrón que `decisiones-accordion.js`) para quedar dentro de `.cs-apertura` en tablet — no se duplica el HTML/i18n del contenido de la métrica.
2. **Umbral fila/columna: 900px landscape**, igual que `.case-card` (entre 700–899px landscape se queda en columna).

## Cambios HTML (`caso-asdeporte.html`)

Ninguno estático — la reestructuración es 100% en runtime vía JS (ver más abajo), igual que el acordeón de Decisiones. El HTML autoreado no cambia: `.cs-metrica` sigue definido donde está hoy (dentro de `.cs-metrica-pin`, dentro de `.cs-horizontal-track__inner`) para que desktop y mobile no se enteren de nada.

## Cambios CSS (`css/case-study.css`)

Todo nested dentro del bloque tablet ya existente (`@media (min-width: 700px)`, dentro de `MQ_MOBILE`, línea ~446).

### Nuevo wrapper `.cs-apertura__content`

Creado por JS (ver abajo) como hijo de `.cs-apertura`, hermano de `.cs-apertura__bg-pin`, contiene `.cs-apertura__ticker` + `.cs-metrica` (movidos ahí). Reemplaza el `position:absolute` que hoy tiene `.cs-apertura__ticker` directo:

```css
@media (min-width: 700px) {
    .cs-apertura__content {
        position: absolute;
        inset: 0;
        z-index: 4; /* mismo z-index que tenía .cs-apertura__ticker */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* padding-top despeja el header fijo de la página — mismo
           patrón que .case-card__container (responsive.css) y que
           pinStartOffset en decision-mc-pin.js: --cs-header-height +
           gap. Sin esto el título queda tapado por el header. */
        padding: calc(var(--cs-header-height) + 24px) var(--cs-mobile-pad) 40px;
    }

    /* Título: ya no absolute (lo maneja el flex del wrapper), offset de
       entrada más chico que en mobile (24px, no 120px) — ya está
       compuesto en pantalla junto a la métrica, no hace falta que
       "suba" desde abajo. */
    .cs-apertura__ticker {
        position: static;
        bottom: auto;
        padding: 0;
    }

    @media (prefers-reduced-motion: no-preference) {
        .cs-apertura__ticker {
            transform: translateY(24px);
        }
    }

    /* Métrica: columna derecha/abajo — anclada al extremo opuesto del
       título vía align-self (mismo mecanismo que .case-card__right). */
    .cs-metrica {
        align-self: flex-end;
        padding: 0;
        width: auto;
    }

    .cs-metrica__left {
        align-items: flex-end;
        text-align: right;
    }

    .cs-metrica__kpi {
        justify-content: flex-end;
    }
}

/* Fila en landscape ancho — mismo umbral que .case-card (responsive.css) */
@media (min-width: 900px) and (orientation: landscape) {
    .cs-apertura__content {
        flex-direction: row;
        align-items: flex-end;
    }
}
```

### Neutralizar el colchón de scroll — SOLO en tablet

El colchón (`--cs-title-exit-buffer`, `--cs-metrica-pin-buffer`) y el `margin-top` negativo de `.cs-metrica-pin` existen para el mecanismo de pin de mobile. En tablet pasan a 0 y `.cs-apertura` vuelve a ser ~100vh:

```css
@media (min-width: 700px) {
    :root {
        --cs-title-exit-buffer: 0px;
        --cs-metrica-pin-buffer: 0px;
    }

    /* .cs-metrica-pin queda vacío en su ubicación original (JS movió su
       contenido) — se oculta para no dejar un div fantasma en el flujo. */
    .cs-metrica-pin {
        display: none;
    }
}
```

Con esto, `.cs-apertura { min-height: calc(100vh + 0 + 0) }` — una sola pantalla, sin colchón. `.cs-apertura__bg-pin` (sticky) queda inerte (no-op) al no haber alto extra que scrollear — no hace falta tocarla.

### `.cs-contexto` — deja de depender del truco de `initMetricaPin`

En tablet, `initMetricaPin` no corre (guard nuevo, ver JS más abajo) y `.cs-metrica-pin` queda `display:none` — no hay ningún cálculo de "gap cero por construcción" en juego. Lo que sigue después de `.cs-apertura` (100vh) es directamente el `padding: 2rem var(--cs-mobile-pad) 2rem` que `.cs-contexto` ya tiene (línea 369, sin cambios) — ese padding-top (32px) pasa a ser, sin necesidad de tocar nada más, el único espacio visible entre ambas secciones. Confirmar en QA visual que 32px se ve bien contra los mockups; si no, ajustar ese valor puntualmente para tablet.

## Cambios JS

### Nuevo módulo: `js/modules/animations/apertura-tablet.js`

```js
export function initAperturaTablet() { ... }
```

Responsabilidades:

1. **Guard de entrada**: sale si `MQ_DESKTOP` matchea, si NO matchea `(min-width: 700px) and (max-width: 1199.98px)`, o si faltan los elementos (`.cs-apertura`, `.cs-apertura__ticker`, `.cs-metrica`). Mismo patrón de early-return que el resto de los módulos de esta página.
   - Nota de scope: el check corre una sola vez al cargar. Si el usuario cruza el umbral de 700px en vivo (resize de ventana/plegable), no se re-evalúa sin recargar — mismo alcance que el resto de los módulos mobile/tablet de esta página (ninguno maneja cruce en vivo entre mobile↔tablet, solo `decision-mc-pin.js` maneja cruce hacia desktop).

2. **Reestructura DOM** (una vez, al init): crea `.cs-apertura__content`, lo inserta en `.cs-apertura` después de `.cs-apertura__bg-pin`, mueve `.cs-apertura__ticker` y la `<section class="cs-metrica">` completa adentro (en ese orden). `.cs-metrica-pin` (ahora vacío) no necesita limpieza JS — el `display:none` de tablet en CSS ya lo oculta.

3. **Secuencia de entrada** (una sola vez, `DOMContentLoaded` + 100ms — mismo delay que `mobile-reveals.js#immediateSelectors`, sin `IntersectionObserver` porque es la primera sección, ya visible en el primer frame):
   - Si `prefers-reduced-motion: reduce`: no anima nada — el HTML/CSS ya deja todo en su estado final visible (mismo patrón que el resto del sitio). Return temprano.
   - Agrega `.mrv--in` a `.cs-apertura__ticker` (dispara su propia transición CSS: opacity + `translateY(24px)→0`, ya definida arriba).
   - Agrega `.mrv` + (al terminar el título) `.mrv--in` a `.cs-metrica__left` — mismo mecanismo genérico de `.mrv`/`.mrv--in` que ya usa el resto del sitio, aplicado a mano en vez de vía `revealSelectors` (para controlar el timing exacto).
   - Dispara el conteo + flecha + caption **cuando termina la transición del título** (`ticker.addEventListener('transitionend', ..., {once:true})` — mismo patrón exacto que ya usa `apertura-exit.js`), no por scroll ni por IntersectionObserver.
   - Sin GSAP: todo el mecanismo (`.mrv`/`.mrv--in` + `transitionend` + `animateCounter` + el reveal de flecha/caption) es CSS-transitions + vanilla JS, igual que el resto de `mobile-reveals.js`/`apertura-exit.js`. Se decidió así en vez de replicar el motor GSAP de `case-cards-scroll.js`: el comportamiento pedido (escalera, sin scroll de por medio) no necesita ScrollTrigger — lo que se está replicando de `.case-card` es el *timing/orden*, no el motor. Mantiene la resiliencia ya establecida en esta página (debe funcionar con el CDN de GSAP caído).
   - Conteo + flecha/caption: reutiliza `animateCounter` (`mobile-reveals.js`) y una función extraída de `metrica-sequence.js` (ver abajo) — cero lógica nueva duplicada.

### Refactor: `js/modules/animations/metrica-sequence.js`

Extraer el setup + reveal de la flecha SVG a una función exportada reutilizable:

```js
export function setupMetricaArrow(arrow) {
    // ... (todo el bloque que hoy arma strokeDasharray/strokeDashoffset/
    // transition inline, líneas 37–67 actuales)
    return function reveal() {
        // ... (el cuerpo actual de revealArrowAndCaption, sin el
        // caption.classList.add — eso lo agrega el caller, ver abajo)
    };
}
```

`initMetricaSequence()` (mobile, sin cambios de comportamiento) pasa a usar este helper internamente. `apertura-tablet.js` lo importa y usa igual, pasándole el `caption` que le corresponda (mismo elemento, ya reparentado).

También agregar guard de tablet a `initMetricaSequence`, `initMetricaPin` (`metrica-sequence.js`) y `initAperturaExit` (`apertura-exit.js`) — deben salir temprano en tablet, ese rango ahora lo maneja `apertura-tablet.js`:

```js
const MQ_TABLET = '(min-width: 700px) and (max-width: 1199.98px)';
// ... en cada init:
if (window.matchMedia(MQ_TABLET).matches) return;
```

### `js/caso-asdeporte-nav.js`

- Importar y llamar `initAperturaTablet()` — **antes** de `initMobileReveals(...)`, porque mueve `.cs-metrica-pin`/`.cs-metrica` y `initMobileReveals` no debe verlos donde ya no están (aunque en la práctica solo importa el orden respecto a los selectores excluidos abajo).
- Excluir `.cs-apertura__ticker` (de `immediateSelectors`) y `.cs-metrica__left` (de `revealSelectors`) cuando el viewport matchea tablet — mismo patrón que ya existe para los selectores de `decision-mc-pin.js` (comentario en el archivo: "si quedaran acá, mobile-reveals las animaría también... y se verían dos reveals a la vez"). Se resuelve armando esos dos arrays condicionalmente antes de llamar a `initMobileReveals`.

## Diagrama de secuencia (tablet, reduced-motion: no-preference)

```
load
 │
 ├─ initAperturaTablet(): mueve DOM, arma .cs-apertura__content
 │
 ├─ DOMContentLoaded + 100ms
 │   └─ ticker.classList.add('mrv--in')   [opacity+translateY, 0.6s]
 │        │
 │        └─ transitionend (ticker)
 │             ├─ metricaLeft.classList.add('mrv--in')     [0.6s]
 │             └─ animateCounter(.cs-metric, onComplete)    [0.8s]
 │                  └─ onComplete → reveal() [flecha 0.5s+0.3s, caption 0.8s]
```

## No está en scope

- Mobile (<700px): cero cambios de comportamiento, código ni se toca funcionalmente (solo se le agrega el guard `MQ_TABLET` a 3 funciones existentes, que en mobile nunca matchea).
- Desktop (≥1200px, hover:fine): cero cambios.
- Manejo de cruce de breakpoint en vivo (resize/rotación cruzando 700px) — requiere recargar, mismo alcance que el resto de los módulos mobile/tablet de esta página.
- Ajuste fino de paddings/gaps exactos vs. los mockups (1.jpg/2.jpg) — valores de la primera pasada son estimaciones basadas en `.case-card`; se calibran en QA visual contra los mockups, como ya es la práctica establecida en este proyecto (ver memoria de sesión sobre iteración visual de la sección Apertura mobile).
