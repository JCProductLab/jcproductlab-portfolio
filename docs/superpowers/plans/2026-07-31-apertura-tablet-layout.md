# Apertura + Métrica combinadas en tablet — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** En tablet (700–1199.98px), combinar el título de Apertura y la métrica "25%" en una sola pantalla de 2 columnas (calcada de `.case-card`), con entrada en escalera sin scroll de por medio. Mobile (<700px) y desktop (≥1200px, hover:fine) no cambian de comportamiento.

**Architecture:** Un nuevo módulo JS (`apertura-tablet.js`) reparenta `.cs-metrica` dentro de `.cs-apertura` en runtime (mismo patrón que `decisiones-accordion.js`) y dispara una secuencia de entrada encadenada por `transitionend` (sin GSAP, sin scroll). CSS nuevo dentro del bloque tablet ya existente en `case-study.css` arma el layout de 2 columnas (flex, columna en portrait / fila en landscape ≥900px, mismo mecanismo que `.case-card__container`). Los tres módulos mobile-only existentes (`apertura-exit.js`, `metrica-sequence.js`) reciben un guard para no correr en tablet.

**Tech Stack:** HTML/CSS/JS vanilla (ES modules), sin GSAP para esta feature — CSS transitions + `transitionend`, mismo mecanismo que `apertura-exit.js`/`mobile-reveals.js` ya usan en esta página.

**Spec:** `docs/superpowers/specs/2026-07-31-apertura-tablet-layout-design.md`

## Global Constraints

- **Nunca `git commit` ni `git push` sin pedido explícito del usuario en ese mensaje** (CLAUDE.md) — cada tarea de este plan implementa y deja los cambios sin commitear; no hay paso de "Commit" en ninguna tarea.
- **Nunca usar Chrome DevTools / browser automation** salvo necesidad genuina confirmada con el usuario (CLAUDE.md) — la verificación visual de cada tarea es manual, a cargo del usuario en su propio navegador; los pasos de verificación de este plan son instrucciones para que el usuario las corra, no comandos que el agente ejecute con herramientas de browser automation.
- Mobile (<700px) y desktop (≥1200px, hover:fine) no deben cambiar de comportamiento — cada tarea que toca un archivo compartido debe confirmar (por lectura de código) que el cambio queda gateado al rango tablet.
- Sitio sin build system — servir con `python3 -m http.server 8080` desde la raíz del repo para probar (`http://localhost:8080/caso-asdeporte.html`).

---

### Task 1: Extraer `setupMetricaArrow` reutilizable + guard de tablet en `metrica-sequence.js`

**Files:**
- Modify: `js/modules/animations/metrica-sequence.js`

**Interfaces:**
- Produces: `export function setupMetricaArrow(arrow: SVGElement): () => void` — arma el estado inicial oculto de los paths de la flecha y devuelve una función `reveal()` que los traza. Usada por `initMetricaSequence` (este archivo, sin cambio de comportamiento) y por `apertura-tablet.js` (Task 3).
- Consumes: nada nuevo (el archivo ya importa `animateCounter` de `./mobile-reveals.js`).

- [ ] **Step 1: Reemplazar el contenido de `initMetricaSequence` y agregar `setupMetricaArrow`**

Reemplazar todo el archivo `js/modules/animations/metrica-sequence.js` desde la línea 19 (`const MQ_DESKTOP = ...`) hasta el cierre de `initMetricaSequence` (línea 86, el `io.observe(metric);` seguido de `}`) por:

```js
const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET = '(min-width: 700px) and (max-width: 1199.98px)';

// Arma el estado inicial oculto de la flecha SVG (stroke-dasharray/
// dashoffset + fillet/caps en opacity:0) y devuelve una función reveal()
// que la traza. La geometría del SVG (atributo "d") es fija — no cambia
// entre mobile/tablet/desktop, solo el tamaño vía CSS — así que basta
// con medirla una vez acá. Reutilizada por initMetricaSequence (mobile,
// abajo) y por apertura-tablet.js (tablet) — mismo trazado, disparado
// por triggers distintos según el contexto (IntersectionObserver acá,
// encadenado a la entrada del título ahí).
export function setupMetricaArrow(arrow) {
    const mainPath = arrow.querySelector('.cs-metrica__arrow-main');
    const tipPaths = arrow.querySelectorAll('.cs-metrica__arrow-tip');
    const caps = arrow.querySelectorAll('.cs-metrica__arrow-cap');
    const fillet = arrow.querySelector('.cs-metrica__arrow-fillet');

    const mainLength = mainPath.getTotalLength();
    mainPath.style.strokeDasharray = String(mainLength);
    mainPath.style.strokeDashoffset = String(mainLength);
    mainPath.style.transition = 'stroke-dashoffset 0.5s ease-out';

    tipPaths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
        // Arrancan junto con la cuña, cuando termina la diagonal (0.5s).
        p.style.transition = 'stroke-dashoffset 0.3s ease-out 0.5s';
    });

    fillet.style.opacity = '0';
    fillet.style.transition = 'opacity 0.05s linear 0.5s';

    caps.forEach((c) => {
        c.style.opacity = '0';
        // Aparecen justo antes de que termine el trazado de la punta (0.8s).
        c.style.transition = 'opacity 0.05s linear 0.75s';
    });

    return function reveal() {
        mainPath.style.strokeDashoffset = '0';
        tipPaths.forEach((p) => { p.style.strokeDashoffset = '0'; });
        fillet.style.opacity = '1';
        caps.forEach((c) => { c.style.opacity = '1'; });
    };
}

export function initMetricaSequence() {
    // Desktop: el scrollytelling GSAP es el dueño de esta animación.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js maneja esta secuencia, encadenada a la
    // entrada del título en vez de a un IntersectionObserver propio.
    if (window.matchMedia(MQ_TABLET).matches) return;

    // Reduced-motion: el HTML ya trae "25%" estático y la flecha ya
    // trazada — no se toca nada, queda visible con sus valores finales.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const metric = document.querySelector('.cs-metric');
    const arrow = document.querySelector('.cs-metrica__arrow');
    const caption = document.querySelector('.cs-metrica__caption');
    if (!metric || !arrow || !caption) return;

    const revealArrow = setupMetricaArrow(arrow);

    function revealArrowAndCaption() {
        revealArrow();
        caption.classList.add('cs-metrica__caption--in');
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            io.unobserve(entry.target);
            animateCounter(metric, revealArrowAndCaption);
        });
    }, { threshold: 0.15 });

    io.observe(metric);
}
```

- [ ] **Step 2: Agregar el mismo guard de tablet a `initMetricaPin`**

En el mismo archivo, en la función `initMetricaPin` (más abajo), agregar la línea de guard justo después del guard de desktop existente:

```js
export function initMetricaPin() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (window.matchMedia(MQ_TABLET).matches) return;

    const apertura = document.querySelector('.cs-apertura');
```

(el resto de la función, sin cambios).

- [ ] **Step 3: Verificar que no queden referencias rotas**

Correr: `grep -n "revealArrowAndCaption\|setupMetricaArrow\|MQ_TABLET" js/modules/animations/metrica-sequence.js`
Esperado: `revealArrowAndCaption` solo aparece como función local dentro de `initMetricaSequence` (ya no hay otra definición suelta); `setupMetricaArrow` aparece 1 vez como `export function` y 1 vez como llamada dentro de `initMetricaSequence`; `MQ_TABLET` aparece 1 vez en la declaración y 2 veces en los guards (`initMetricaSequence` + `initMetricaPin`).

No hay paso de commit en esta tarea (ver Global Constraints).

---

### Task 2: Guard de tablet en `apertura-exit.js`

**Files:**
- Modify: `js/modules/animations/apertura-exit.js`

**Interfaces:**
- Consumes: nada nuevo.
- Produces: nada nuevo (solo agrega un early-return).

- [ ] **Step 1: Agregar la constante `MQ_TABLET` y el guard**

En `js/modules/animations/apertura-exit.js`, reemplazar:

```js
const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const EXIT_DISTANCE_PX = 100;
```

por:

```js
const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET = '(min-width: 700px) and (max-width: 1199.98px)';
const EXIT_DISTANCE_PX = 100;
```

Y reemplazar el inicio de `initAperturaExit`:

```js
export function initAperturaExit() {
    // Desktop: el scrollytelling GSAP maneja la apertura.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
```

por:

```js
export function initAperturaExit() {
    // Desktop: el scrollytelling GSAP maneja la apertura.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js arma una sola pantalla estática, sin
    // colchón de scroll que desvanecer.
    if (window.matchMedia(MQ_TABLET).matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
```

(el resto de la función, sin cambios).

- [ ] **Step 2: Verificar**

Correr: `grep -n "MQ_TABLET" js/modules/animations/apertura-exit.js`
Esperado: 2 líneas — la declaración de la constante y el guard dentro de `initAperturaExit`.

No hay paso de commit en esta tarea.

---

### Task 3: CSS del layout de 2 columnas en tablet

**Files:**
- Modify: `css/case-study.css:446-459` (bloque `@media (min-width: 700px)` existente, dentro de `MQ_MOBILE`)

**Interfaces:**
- Consumes: `--cs-header-height` (variable ya definida en `css/variables.css`, usada también por `decision-mc-pin.js`), `--cs-mobile-pad` (definida en este mismo archivo, línea 36).
- Produces: clase `.cs-apertura__content` — el wrapper que `apertura-tablet.js` (Task 4) crea por JS y esta CSS estiliza. Los nombres deben coincidir exactamente: `apertura-tablet.js` crea un `<div class="cs-apertura__content">`.

- [ ] **Step 1: Reemplazar el bloque tablet existente**

En `css/case-study.css`, reemplazar (líneas 446–459):

```css
    @media (min-width: 700px) {
        .cs-apertura__bg-pin::before {
            background-image: url(../assets/images/cases/product-design-ecommerce-asdeporte-tablet.webp);
        }

        .cs-contexto__actions {
            flex-direction: row;
            align-items: center;
        }

        .cs-contexto__actions .btn {
            justify-content: center;
        }
    }
```

por:

```css
    @media (min-width: 700px) {
        .cs-apertura__bg-pin::before {
            background-image: url(../assets/images/cases/product-design-ecommerce-asdeporte-tablet.webp);
        }

        /* Neutraliza el colchón de scroll mobile — en tablet
           .cs-apertura pasa a ser una sola pantalla estática de 100vh,
           título + métrica compuestos juntos (ver .cs-apertura__content
           abajo, armado por apertura-tablet.js). apertura-exit.js y
           metrica-sequence.js#initMetricaPin no corren en este rango
           (guard MQ_TABLET, ver esos archivos). */
        :root {
            --cs-title-exit-buffer: 0px;
            --cs-metrica-pin-buffer: 0px;
        }

        /* Queda vacío en su ubicación original — apertura-tablet.js
           movió su contenido (.cs-metrica) adentro de .cs-apertura. */
        .cs-metrica-pin {
            display: none;
        }

        /* Wrapper armado por apertura-tablet.js: hermano de
           .cs-apertura__bg-pin, contiene .cs-apertura__ticker +
           .cs-metrica movidos ahí. Layout de 2 columnas calcado de
           .case-card__container (css/responsive.css, index.html):
           justify-content:space-between separa el primer/último hijo a
           los extremos, sea la dirección column (portrait) o row
           (landscape ancho, ver media query anidada más abajo). */
        .cs-apertura__content {
            position: absolute;
            inset: 0;
            z-index: 4;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /* padding-top despeja el header fijo de la página — mismo
               patrón que .case-card__container (responsive.css) y que
               pinStartOffset en decision-mc-pin.js. */
            padding: calc(var(--cs-header-height) + 24px) var(--cs-mobile-pad) 40px;
        }

        /* Título: ya no position:absolute (lo maneja el flex del
           wrapper) — ahora es el primer flex item, anclado
           arriba-izquierda por el reposo natural del flex
           (align-items:flex-start es el default). Offset de entrada más
           chico que en mobile (24px, no 120px): ya está compuesto en
           pantalla junto a la métrica, no necesita "subir" desde
           abajo. */
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

        /* Métrica: columna derecha/abajo — anclada al extremo opuesto
           del título vía align-self (mismo mecanismo que
           .case-card__right en responsive.css: align-self empuja por
           el eje cruzado, justify-content:space-between del padre por
           el eje principal — juntos anclan la esquina opuesta sea cual
           sea la dirección del flex). */
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

        .cs-contexto__actions {
            flex-direction: row;
            align-items: center;
        }

        .cs-contexto__actions .btn {
            justify-content: center;
        }

        /* Fila en landscape ancho — mismo umbral que .case-card
           (responsive.css: min-width:900px and orientation:landscape).
           Por debajo de 900px en landscape se queda apilado en
           columna, igual que en vertical. */
        @media (min-width: 900px) and (orientation: landscape) {
            .cs-apertura__content {
                flex-direction: row;
                align-items: flex-end;
            }
        }
    }
```

- [ ] **Step 2: Verificar balance de llaves y que no se rompió nada fuera del bloque**

Correr: `node -e "const fs=require('fs'); const s=fs.readFileSync('css/case-study.css','utf8'); const open=(s.match(/{/g)||[]).length; const close=(s.match(/}/g)||[]).length; console.log('open:', open, 'close:', close);"`
Esperado: `open` y `close` con el mismo número.

Correr: `grep -c "cs-contexto__actions" css/case-study.css`
Esperado: `2` (las dos reglas ya existían antes, deben seguir ahí intactas, solo se agregó código nuevo alrededor).

No hay paso de commit en esta tarea. (No hace falta abrir el navegador todavía — el wrapper `.cs-apertura__content` que esta CSS estiliza recién lo crea `apertura-tablet.js` en la próxima tarea; hasta entonces esta CSS no tiene ningún elemento al que aplicarse.)

---

### Task 4: Nuevo módulo `apertura-tablet.js`

**Files:**
- Create: `js/modules/animations/apertura-tablet.js`

**Interfaces:**
- Consumes: `animateCounter` de `./mobile-reveals.js` (firma: `animateCounter(el: Element, onComplete?: () => void): void`); `setupMetricaArrow` de `./metrica-sequence.js` (Task 1, firma: `setupMetricaArrow(arrow: SVGElement): () => void`).
- Produces: `export function initAperturaTablet(): void`. Crea en el DOM un `<div class="cs-apertura__content">` (el selector que estiliza la CSS de Task 3) como hijo de `.cs-apertura`, hermano de `.cs-apertura__bg-pin`, conteniendo `.cs-apertura__ticker` y `.cs-metrica` movidos ahí.

- [ ] **Step 1: Crear el archivo**

```js
// js/modules/animations/apertura-tablet.js
// Combina Apertura (título) + Métrica ("25%") en una sola pantalla para
// tablet — layout de 2 columnas calcado de .case-card (ver
// css/responsive.css en index.html), con entrada en escalera sin scroll
// de por medio: el título entra primero, y recién al terminar arranca
// la métrica (conteo → flecha → texto).
//
// Mobile (<700px) y desktop (>=1200px, hover:fine) no se tocan: cada uno
// sigue con su propio mecanismo (mobile: colchón de scroll + pin a mano,
// ver apertura-exit.js/metrica-sequence.js; desktop: scrollytelling
// GSAP, ver caso-asdeporte.js).
//
// La reestructura del DOM (mover .cs-metrica adentro de .cs-apertura)
// sigue el mismo patrón que decisiones-accordion.js: reubica nodos que
// ya existen en el documento, no crea contenido nuevo ni lo duplica.
//
// Sin GSAP a propósito, mismo criterio que mobile-reveals.js/
// apertura-exit.js: CSS transitions (.mrv/.mrv--in, ya usadas en todo
// el sitio) + transitionend para encadenar los pasos — debe funcionar
// aunque el CDN de GSAP falle.

import { animateCounter } from './mobile-reveals.js';
import { setupMetricaArrow } from './metrica-sequence.js';

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET = '(min-width: 700px) and (max-width: 1199.98px)';
// Mismo delay que mobile-reveals.js#immediateSelectors — evita competir
// con el resto del trabajo de JS que también engancha a DOMContentLoaded.
const REVEAL_DELAY_MS = 100;

export function initAperturaTablet() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (!window.matchMedia(MQ_TABLET).matches) return;

    const apertura = document.querySelector('.cs-apertura');
    const bgPin = document.querySelector('.cs-apertura__bg-pin');
    const ticker = document.querySelector('.cs-apertura__ticker');
    const metrica = document.querySelector('.cs-metrica');
    if (!apertura || !bgPin || !ticker || !metrica) return;

    // 1. Reestructura DOM — una sola vez, corre siempre en este rango
    //    (independiente de reduced-motion: es estructural, no animación).
    //    .cs-metrica-pin (donde vivía .cs-metrica) queda vacío;
    //    case-study.css lo oculta (display:none) en este mismo rango.
    const content = document.createElement('div');
    content.className = 'cs-apertura__content';
    bgPin.insertAdjacentElement('afterend', content);
    content.appendChild(ticker);
    content.appendChild(metrica);

    // 2. Secuencia de entrada — una sola vez al cargar, sin scroll ni
    //    IntersectionObserver (es la primera sección, ya visible en el
    //    primer frame). Con reduced-motion no se anima nada: el HTML/CSS
    //    ya deja todo en su estado final visible (mismo patrón que el
    //    resto del sitio) — return acá, después de la reestructura de
    //    arriba (el layout de 2 columnas debe quedar armado igual,
    //    animado o no).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const metricaLeft = metrica.querySelector('.cs-metrica__left');
    const metric = metrica.querySelector('.cs-metric');
    const arrow = metrica.querySelector('.cs-metrica__arrow');
    const caption = metrica.querySelector('.cs-metrica__caption');
    if (!metricaLeft || !metric || !arrow || !caption) return;

    const revealArrow = setupMetricaArrow(arrow);
    metricaLeft.classList.add('mrv');

    function revealMetrica() {
        metricaLeft.classList.add('mrv--in');
        animateCounter(metric, () => {
            revealArrow();
            caption.classList.add('cs-metrica__caption--in');
        });
    }

    function startSequence() {
        ticker.addEventListener('transitionend', revealMetrica, { once: true });
        ticker.classList.add('mrv--in');
    }

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(startSequence, REVEAL_DELAY_MS);
    }, { once: true });
}
```

- [ ] **Step 2: Verificar sintaxis**

Correr: `node --check js/modules/animations/apertura-tablet.js`
Esperado: sin output (sintaxis válida). Nota: este comando valida sintaxis JS pura; no valida `import`/`export` de ES modules por sí solo con `--check` en todas las versiones de Node — si da error de sintaxis por `import`/`export`, correr en cambio: `node --input-type=module --check < js/modules/animations/apertura-tablet.js` y confirmar que tampoco da error.

No hay paso de commit en esta tarea.

---

### Task 5: Wiring en `caso-asdeporte-nav.js`

**Files:**
- Modify: `js/caso-asdeporte-nav.js`

**Interfaces:**
- Consumes: `initAperturaTablet` de `./modules/animations/apertura-tablet.js` (Task 4).

- [ ] **Step 1: Importar el nuevo módulo**

Reemplazar:

```js
import { initDecisionMcPin } from './modules/animations/decision-mc-pin.js';
import { initScrollToTop } from './modules/scroll-to-top.js';
```

por:

```js
import { initDecisionMcPin } from './modules/animations/decision-mc-pin.js';
import { initAperturaTablet } from './modules/animations/apertura-tablet.js';
import { initScrollToTop } from './modules/scroll-to-top.js';
```

- [ ] **Step 2: Llamar `initAperturaTablet()` antes de `initMobileReveals(...)` y calcular `isTabletApertura`**

Reemplazar:

```js
// Pin + fade-in de la imagen y el texto de "La decisión" en mobile/tablet.
// Necesita que el acordeón ya esté reestructurado (arriba) para que
// .cs-decisiones-titulos__sticky-header exista y se pueda medir su alto
// al calcular el start offset del pin. Sale solo en desktop.
initDecisionMcPin();

// Reveals + contadores de la versión mobile/tablet. Sin GSAP a
// propósito: debe funcionar con el CDN bloqueado.
initMobileReveals({
    // El ticker ya está visible en el primer frame (es el hero) — no hay
    // scroll que lo cruce, así que va por immediateSelectors
    // (DOMContentLoaded + delay fijo, sin IntersectionObserver). Ver
    // mobile-reveals.js.
    immediateSelectors: [
        '.cs-apertura__ticker',
    ],
    revealSelectors: [
        '.cs-metrica__left',
        '.cs-contexto .cs-label',
```

por:

```js
// Pin + fade-in de la imagen y el texto de "La decisión" en mobile/tablet.
// Necesita que el acordeón ya esté reestructurado (arriba) para que
// .cs-decisiones-titulos__sticky-header exista y se pueda medir su alto
// al calcular el start offset del pin. Sale solo en desktop.
initDecisionMcPin();

// Combina Apertura + Métrica en una sola pantalla de 2 columnas para
// tablet (700–1199.98px) — mueve .cs-metrica adentro de .cs-apertura y
// arma su propia secuencia de entrada. Sale solo en mobile/desktop.
// Corre ANTES de initMobileReveals de abajo: isTabletApertura decide
// qué selectores excluir de esa lista (ver comentarios abajo).
initAperturaTablet();

const isTabletApertura = window.matchMedia('(min-width: 700px) and (max-width: 1199.98px)').matches;

// Reveals + contadores de la versión mobile/tablet. Sin GSAP a
// propósito: debe funcionar con el CDN bloqueado.
initMobileReveals({
    // El ticker ya está visible en el primer frame (es el hero) — no hay
    // scroll que lo cruce, así que va por immediateSelectors
    // (DOMContentLoaded + delay fijo, sin IntersectionObserver). Ver
    // mobile-reveals.js. En tablet se excluye: apertura-tablet.js ya lo
    // revela con su propio timing (encadenado a la métrica) — si
    // quedara acá también, mobile-reveals lo animaría una segunda vez.
    immediateSelectors: isTabletApertura ? [] : [
        '.cs-apertura__ticker',
    ],
    revealSelectors: [
        // En tablet, apertura-tablet.js revela .cs-metrica__left
        // encadenado a la entrada del título — si quedara acá también,
        // mobile-reveals lo animaría una segunda vez (mismo motivo que
        // arriba).
        ...(isTabletApertura ? [] : ['.cs-metrica__left']),
        '.cs-contexto .cs-label',
```

(el resto del array `revealSelectors` y `counterSelectors`, sin cambios — la línea `'.cs-contexto .cs-label',` sigue seguida por el resto de la lista existente tal cual está hoy).

- [ ] **Step 3: Verificar**

Correr: `grep -n "initAperturaTablet\|isTabletApertura" js/caso-asdeporte-nav.js`
Esperado: `initAperturaTablet` aparece 2 veces (import + llamada); `isTabletApertura` aparece 3 veces (declaración + 2 usos en el objeto de config).

Correr: `node --check js/caso-asdeporte-nav.js` (o con `--input-type=module` si da error de `import`, ver Task 4 Step 2).
Esperado: sin errores de sintaxis.

No hay paso de commit en esta tarea.

---

### Task 6: QA visual manual (usuario)

Esta tarea no modifica código — es la checklist que el usuario corre en su propio navegador antes de dar por cerrada la feature (ver Global Constraints: nada de browser automation de este lado).

**Cómo levantar el sitio:**
```bash
python3 -m http.server 8080
```
Abrir `http://localhost:8080/caso-asdeporte.html`.

- [ ] **Tablet portrait (ej. 768×1024, o cualquier ancho 700–1199px en vertical):** título arriba-izquierda, métrica "25%" abajo-derecha, apiladas en columna. Comparar contra el mockup 2.jpg del usuario.
- [ ] **Tablet landscape ≥900px (ej. 1024×768, 1180×820):** 2 columnas lado a lado — título a la izquierda, métrica a la derecha, ambos anclados al borde inferior. Comparar contra el mockup 1.jpg.
- [ ] **Tablet landscape angosto (ej. 800×600, entre 700–899px):** se mantiene en columna (no pasa a fila todavía) — mismo comportamiento que `.case-card` en ese rango.
- [ ] **Secuencia de entrada:** recargar en cualquiera de los tamaños de arriba y confirmar: el título entra primero (fade + slide chico), y recién cuando termina arranca la métrica (número cuenta 0→25, después se traza la flecha, después aparece el texto) — sin necesidad de scrollear.
- [ ] **Scroll normal:** después de la entrada, scrollear hacia abajo — `.cs-apertura` debe desaparecer como una sección normal (sin colchón extra ni salto raro) y `.cs-contexto` debe aparecer con un espaciado prolijo, sin gap ni superposición.
- [ ] **Reduced motion:** activar "reducir movimiento" en el sistema operativo, recargar — título y métrica deben verse directamente en su estado final (sin animación), pero el layout de 2 columnas debe seguir armado igual.
- [ ] **Mobile (<700px, ej. 375×667):** confirmar que el comportamiento es IDÉNTICO al de antes de este cambio — colchón de scroll, título se desvanece, métrica sube y se frena. Si algo cambió acá, hay una regresión que hay que resolver antes de cerrar.
- [ ] **Desktop (≥1200px, con mouse/trackpad):** confirmar que el scrollytelling GSAP existente sigue funcionando exactamente igual que antes — Apertura y Métrica siguen siendo paneles separados en el scroll horizontal.

## Self-Review

- **Cobertura del spec:** Task 1–2 cubren "desactivar mecanismos mobile en tablet"; Task 3 cubre el layout de 2 columnas + umbral 900px landscape; Task 4 cubre la reestructura DOM + secuencia de entrada en escalera sin scroll; Task 5 cubre el wiring y evita el doble-reveal; Task 6 cubre la verificación contra los mockups y las no-regresiones en mobile/desktop. Todas las secciones del spec (`2026-07-31-apertura-tablet-layout-design.md`) tienen tarea correspondiente.
- **Placeholders:** ninguno — todos los pasos tienen código completo, no hay "TBD"/"similar a" que remita a otra tarea.
- **Consistencia de nombres:** `setupMetricaArrow(arrow)` (Task 1) devuelve `reveal`, usado como `revealArrow` en `initMetricaSequence` (Task 1) y en `apertura-tablet.js` (Task 4) — mismo nombre de función, mismo tipo de retorno (`() => void`) en ambos lugares. `.cs-apertura__content` se crea en Task 4 y se estiliza en Task 3 con el mismo nombre de clase. `MQ_TABLET` usa la misma media query string (`'(min-width: 700px) and (max-width: 1199.98px)'`) en los 4 archivos que la declaran (Task 1, 2, 4, y el `isTabletApertura` de Task 5).
