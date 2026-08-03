# Reversión de scroll en reveals mobile/tablet — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hacer que los reveals de scroll en mobile/tablet de `caso-asdeporte.html` se oculten al salir del viewport y se vuelvan a revelar al reingresar (en cualquier dirección de scroll), igual que el comportamiento ya existente en `index.html`.

**Architecture:** Los dos `IntersectionObserver` que hoy disparan una sola vez (`io.unobserve()` tras el primer reveal) pasan a un modelo toggle: agregan la clase de revelado cuando `isIntersecting` es `true` y la remueven cuando es `false`. El CSS ya soporta ambas direcciones (`.mrv`/`.mrv--in` nunca se remueve la base, solo se togglea el modificador), así que no se toca ningún CSS. Los contadores numéricos capturan su valor objetivo UNA sola vez al inicio (nunca re-parseando desde el DOM en cada salida de viewport) para evitar que un scroll rápido a mitad de conteo corrompa el target real.

**Tech Stack:** JS vanilla (ES modules), sin GSAP en los dos archivos que cambian — se mantiene el criterio existente de que estos módulos deben funcionar aunque el CDN de GSAP falle.

## Global Constraints

- No se modifica ningún archivo CSS.
- No se modifica ningún archivo/selector gateado a `MQ_DESKTOP` (`(min-width: 1200px) and (hover: hover) and (pointer: fine)`) — desktop queda intacto.
- No se agrega GSAP a `mobile-reveals.js` ni `metrica-sequence.js`.
- No se toca `apertura-tablet.js` salvo el único ajuste mecánico exigido por el cambio de firma de `setupMetricaArrow` (Task 3) — su comportamiento (secuencia de carga, no reveal de scroll) no cambia.
- Spec de referencia: `docs/superpowers/specs/2026-08-03-mobile-tablet-scroll-reversal-design.md`.

---

### Task 1: Toggle bidireccional en `mobile-reveals.js`

**Files:**
- Modify: `js/modules/animations/mobile-reveals.js:40` (exportar `parseCounterNode`)
- Modify: `js/modules/animations/mobile-reveals.js:146-160` (observer: de una sola disparada a toggle, con captura fija del target de cada contador)

**Interfaces:**
- Consumes: nada nuevo (sigue usando `animateCounter`, ya definido en el mismo archivo).
- Produces: `parseCounterNode(el)` pasa a ser exportado — `metrica-sequence.js` (Task 2) lo importa. Firma sin cambios: recibe un elemento, devuelve `{ node, original, target, decimals, prefix, suffix }` o `null` si no hay dígitos.

- [ ] **Step 1: Exportar `parseCounterNode`**

En `js/modules/animations/mobile-reveals.js:40`, cambiar:

```js
function parseCounterNode(el) {
```

por:

```js
export function parseCounterNode(el) {
```

- [ ] **Step 2: Verificar sintaxis**

Run: `node --input-type=module --check < js/modules/animations/mobile-reveals.js`
Expected: sin salida (exit code 0).

- [ ] **Step 3: Reemplazar el bloque del observer (líneas ~146-160 del archivo original)**

Bloque original a reemplazar (empieza en `const io = new IntersectionObserver`, termina en el segundo `counterEls.forEach`):

```js
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('mrv--in');
            if (counterSet.has(entry.target)) {
                animateCounter(entry.target);
            }
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => {
        el.classList.add('mrv');
        io.observe(el);
    });

    // Contadores que no son también reveal (hoy todos lo son, pero el
    // módulo no lo asume): se observan igual para disparar el count-up.
    counterEls.forEach((el) => {
        if (!el.classList.contains('mrv')) {
            io.observe(el);
        }
    });
}
```

Reemplazar por:

```js
    const revealSet = new Set(revealEls);

    // Objetivo real de cada contador, capturado UNA sola vez desde el
    // texto estático original del HTML — nunca se re-parsea desde el DOM
    // después de esto. Si se re-parseara en cada salida de viewport, un
    // scroll rápido que saque el elemento de vista a mitad del conteo
    // (animateCounter todavía escribiendo un valor intermedio, ej. "14%")
    // corrompería el target real (25) para siempre: la próxima vuelta
    // contaría hasta 14, no hasta 25.
    const counterTargets = new Map();
    counterEls.forEach((el) => {
        const parsed = parseCounterNode(el);
        if (parsed) counterTargets.set(el, parsed);
    });

    // Toggle bidireccional: revela al entrar, oculta al salir (en
    // cualquier dirección de scroll) — igual que el patrón
    // toggleActions:'play reverse play reverse' que ya usa index.html
    // (mask-reveal.js), pero con CSS transitions en vez de GSAP.
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const el = entry.target;

            if (revealSet.has(el)) {
                el.classList.toggle('mrv--in', entry.isIntersecting);
            }

            if (counterSet.has(el)) {
                const parsed = counterTargets.get(el);
                if (!parsed) return;
                if (entry.isIntersecting) {
                    animateCounter(el, null, parsed);
                } else {
                    // Reset instantáneo a "0" — invisible para el usuario
                    // porque solo ocurre mientras el elemento ya está
                    // fuera del viewport.
                    parsed.node.data = parsed.prefix + (0).toFixed(parsed.decimals) + parsed.suffix;
                }
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => {
        el.classList.add('mrv');
        io.observe(el);
    });

    // Contadores que no son también reveal (hoy todos lo son, pero el
    // módulo no lo asume): se observan igual para disparar el count-up.
    counterEls.forEach((el) => {
        if (!el.classList.contains('mrv')) {
            io.observe(el);
        }
    });
}
```

- [ ] **Step 4: Verificar sintaxis**

Run: `node --input-type=module --check < js/modules/animations/mobile-reveals.js`
Expected: sin salida (exit code 0).

- [ ] **Step 5: Commit**

```bash
git add js/modules/animations/mobile-reveals.js
git commit -m "feat(mobile-reveals): toggle bidireccional en vez de reveal de una sola vez"
```

---

### Task 2: Toggle bidireccional en `metrica-sequence.js` (secuencia mobile <700px)

**Files:**
- Modify: `js/modules/animations/metrica-sequence.js:19` (import)
- Modify: `js/modules/animations/metrica-sequence.js:38-93` (`setupMetricaArrow`: agregar `reset()`, devolver `{ reveal, reset }`)
- Modify: `js/modules/animations/metrica-sequence.js:95-128` (`initMetricaSequence`: toggle bidireccional)

**Interfaces:**
- Consumes: `parseCounterNode` exportado desde `mobile-reveals.js` (Task 1).
- Produces: `setupMetricaArrow(arrow)` cambia su valor de retorno de una función (`reveal`) a un objeto `{ reveal, reset }`. Task 3 (`apertura-tablet.js`) es el único otro consumidor de esta función y debe actualizarse para desestructurar el nuevo shape.

- [ ] **Step 1: Actualizar el import**

En `js/modules/animations/metrica-sequence.js:19`, cambiar:

```js
import { animateCounter } from './mobile-reveals.js';
```

por:

```js
import { animateCounter, parseCounterNode } from './mobile-reveals.js';
```

- [ ] **Step 2: Reemplazar `setupMetricaArrow` completa (líneas ~38-93 del archivo original)**

Bloque original a reemplazar (función completa `setupMetricaArrow`, desde el comentario JSDoc-style hasta su cierre `}`):

```js
export function setupMetricaArrow(arrow) {
    const mainPath = arrow.querySelector('.cs-metrica__arrow-main');
    const tipPaths = arrow.querySelectorAll('.cs-metrica__arrow-tip');
    const caps = arrow.querySelectorAll('.cs-metrica__arrow-cap');
    const fillet = arrow.querySelector('.cs-metrica__arrow-fillet');

    const mainLength = mainPath.getTotalLength();
    mainPath.style.strokeDasharray = String(mainLength);
    mainPath.style.strokeDashoffset = String(mainLength);

    tipPaths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
    });

    fillet.style.opacity = '0';
    caps.forEach((c) => { c.style.opacity = '0'; });

    void arrow.getBoundingClientRect();

    mainPath.style.transition = 'stroke-dashoffset 0.5s ease-out';
    tipPaths.forEach((p) => {
        p.style.transition = 'stroke-dashoffset 0.3s ease-out 0.5s';
    });
    fillet.style.transition = 'opacity 0.05s linear 0.5s';
    caps.forEach((c) => {
        c.style.transition = 'opacity 0.05s linear 0.75s';
    });

    return function reveal() {
        mainPath.style.strokeDashoffset = '0';
        tipPaths.forEach((p) => { p.style.strokeDashoffset = '0'; });
        fillet.style.opacity = '1';
        caps.forEach((c) => { c.style.opacity = '1'; });
    };
}
```

Reemplazar por (agrega `tipLengths` como array para poder resetear cada tip a su propia longitud, y devuelve `{ reveal, reset }`):

```js
export function setupMetricaArrow(arrow) {
    const mainPath = arrow.querySelector('.cs-metrica__arrow-main');
    const tipPaths = arrow.querySelectorAll('.cs-metrica__arrow-tip');
    const caps = arrow.querySelectorAll('.cs-metrica__arrow-cap');
    const fillet = arrow.querySelector('.cs-metrica__arrow-fillet');

    const mainLength = mainPath.getTotalLength();
    mainPath.style.strokeDasharray = String(mainLength);
    mainPath.style.strokeDashoffset = String(mainLength);

    const tipLengths = Array.from(tipPaths).map((p) => p.getTotalLength());
    tipPaths.forEach((p, i) => {
        p.style.strokeDasharray = String(tipLengths[i]);
        p.style.strokeDashoffset = String(tipLengths[i]);
    });

    fillet.style.opacity = '0';
    caps.forEach((c) => { c.style.opacity = '0'; });

    void arrow.getBoundingClientRect();

    mainPath.style.transition = 'stroke-dashoffset 0.5s ease-out';
    tipPaths.forEach((p) => {
        p.style.transition = 'stroke-dashoffset 0.3s ease-out 0.5s';
    });
    fillet.style.transition = 'opacity 0.05s linear 0.5s';
    caps.forEach((c) => {
        c.style.transition = 'opacity 0.05s linear 0.75s';
    });

    function reveal() {
        mainPath.style.strokeDashoffset = '0';
        tipPaths.forEach((p) => { p.style.strokeDashoffset = '0'; });
        fillet.style.opacity = '1';
        caps.forEach((c) => { c.style.opacity = '1'; });
    }

    // Reversa de reveal() — misma transition ya definida arriba, así que
    // resetear el dashoffset también anima (0.5s/0.3s ease-out), no es
    // un salto instantáneo. Usado por initMetricaSequence (mobile) al
    // salir del viewport; apertura-tablet.js no lo usa (su secuencia es
    // de carga, no de scroll).
    function reset() {
        mainPath.style.strokeDashoffset = String(mainLength);
        tipPaths.forEach((p, i) => { p.style.strokeDashoffset = String(tipLengths[i]); });
        fillet.style.opacity = '0';
        caps.forEach((c) => { c.style.opacity = '0'; });
    }

    return { reveal, reset };
}
```

- [ ] **Step 3: Reemplazar `initMetricaSequence` completa (líneas ~95-128 del archivo original)**

Bloque original a reemplazar:

```js
export function initMetricaSequence() {
    // Desktop: el scrollytelling GSAP es el dueño de esta animación.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js maneja esta secuencia, encadenada a la
    // entrada del título en vez de a un IntersectionObserver propio.
    if (window.matchMedia(MQ_TABLET_FLOOR).matches) return;

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

Reemplazar por:

```js
export function initMetricaSequence() {
    // Desktop: el scrollytelling GSAP es el dueño de esta animación.
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    // Tablet: apertura-tablet.js maneja esta secuencia, encadenada a la
    // entrada del título en vez de a un IntersectionObserver propio.
    if (window.matchMedia(MQ_TABLET_FLOOR).matches) return;

    // Reduced-motion: el HTML ya trae "25%" estático y la flecha ya
    // trazada — no se toca nada, queda visible con sus valores finales.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const metric = document.querySelector('.cs-metric');
    const arrow = document.querySelector('.cs-metrica__arrow');
    const caption = document.querySelector('.cs-metrica__caption');
    if (!metric || !arrow || !caption) return;

    const { reveal: revealArrow, reset: resetArrow } = setupMetricaArrow(arrow);

    // Objetivo real capturado una sola vez — mismo motivo que
    // mobile-reveals.js (Task 1): evita que un reset a mitad de conteo
    // corrompa el target si el usuario sale del viewport durante los
    // 800ms de animateCounter.
    const counterTarget = parseCounterNode(metric);

    // Toggle bidireccional: conteo + flecha + caption se revelan al
    // entrar y se resetean al salir (en cualquier dirección), para que
    // la secuencia completa se repita limpiamente al reingresar.
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(metric, () => {
                    revealArrow();
                    caption.classList.add('cs-metrica__caption--in');
                }, counterTarget);
            } else {
                if (counterTarget) {
                    counterTarget.node.data =
                        counterTarget.prefix + (0).toFixed(counterTarget.decimals) + counterTarget.suffix;
                }
                resetArrow();
                caption.classList.remove('cs-metrica__caption--in');
            }
        });
    }, { threshold: 0.15 });

    io.observe(metric);
}
```

- [ ] **Step 4: Verificar sintaxis**

Run: `node --input-type=module --check < js/modules/animations/metrica-sequence.js`
Expected: sin salida (exit code 0).

- [ ] **Step 5: Commit**

```bash
git add js/modules/animations/metrica-sequence.js
git commit -m "feat(metrica-sequence): toggle bidireccional en secuencia mobile (<700px)"
```

---

### Task 3: Actualizar `apertura-tablet.js` al nuevo shape de `setupMetricaArrow`

**Files:**
- Modify: `js/modules/animations/apertura-tablet.js:114`

**Interfaces:**
- Consumes: `setupMetricaArrow(arrow)` (Task 2) — ahora devuelve `{ reveal, reset }` en vez de una función directa.
- Produces: nada nuevo — este archivo no cambia de comportamiento, solo se adapta a la nueva firma para no romper la carga de la página en tablet.

- [ ] **Step 1: Actualizar la desestructuración**

En `js/modules/animations/apertura-tablet.js:114`, cambiar:

```js
    const revealArrow = setupMetricaArrow(arrow);
```

por:

```js
    const { reveal: revealArrow } = setupMetricaArrow(arrow);
```

El resto del archivo (incluida la llamada `revealArrow();` dentro de `revealMetrica()`, línea ~130) no cambia — `revealArrow` sigue siendo una función invocable con el mismo comportamiento de antes.

- [ ] **Step 2: Verificar sintaxis**

Run: `node --input-type=module --check < js/modules/animations/apertura-tablet.js`
Expected: sin salida (exit code 0).

- [ ] **Step 3: Commit**

```bash
git add js/modules/animations/apertura-tablet.js
git commit -m "fix(apertura-tablet): adaptar a la nueva firma de setupMetricaArrow"
```

---

### Task 4: Verificación manual en navegador (mobile + tablet)

Esta página no tiene suite de tests automatizados ni build system (sitio estático). La verificación final es manual, en un navegador real — no usar herramientas de automatización de navegador para esto (chrome-devtools/claude-in-chrome): pedirle al usuario que la haga él mismo con su propio Chrome, siguiendo esta checklist exacta.

**Files:** ninguno (solo verificación).

- [ ] **Step 1: Levantar el servidor estático**

Run: `npx serve .` (o `python3 -m http.server 8080`)

- [ ] **Step 2: Pedirle al usuario que verifique en su navegador, viewport mobile (<700px de ancho)**

Checklist a confirmar por el usuario en `caso-asdeporte.html`:
- Bajar hasta Contexto, Decisiones, Razonamiento, Resultado y Cierre: cada sección se revela (fade + slide-up) igual que antes.
- Sin llegar hasta el final, subir de nuevo: las secciones ya reveladas se ocultan otra vez al salir del viewport.
- Bajar una segunda vez sobre las mismas secciones: se vuelven a revelar (mismo fade + slide-up, sin salto ni parpadeo permanente).
- Sección Métrica (el número grande, ej. "25%"): bajar hasta que cuente, subir hasta que salga del viewport, bajar de nuevo — el número debe volver a contar desde 0 hasta su valor final, la flecha debe volver a trazarse, y el párrafo debe volver a aparecer.
- Los contadores de Razonamiento y Resultado (valores con `%`) se comportan igual: recuentan desde 0 cada vez que reingresan al viewport.
- El acordeón de Decisiones (click, no scroll) sigue funcionando igual que antes — no debería haber cambiado.

- [ ] **Step 3: Pedirle al usuario que repita el mismo checklist en viewport tablet (≥700px y <1200px, o resize de ventana a ese rango)**

Mismos puntos que el Step 2, más:
- La pantalla combinada Apertura+Métrica (2 columnas) sigue animando igual al cargar (título → métrica en escalera) — esta parte NO debe volverse bidireccional, es una secuencia de carga fija en la parte de arriba de la página.

- [ ] **Step 4: Pedirle al usuario que confirme que desktop (≥1200px, mouse) no cambió**

En viewport desktop, todo el scrollytelling (Apertura con video, cruce Métrica→Contexto, pines de Decisiones, etc.) debe verse exactamente igual que en `main` antes de este cambio — este plan no toca ningún archivo gateado a `MQ_DESKTOP`.

- [ ] **Step 5: Reportar resultado**

Si el usuario confirma los 4 checklists, la tarea queda completa. Si encuentra algo raro, anotar la sección específica y el paso exacto (bajando/subiendo) para volver a esta plan y ajustar.
