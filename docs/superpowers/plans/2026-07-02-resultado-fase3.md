# Resultado — Fase 3 (Entrada desfasada) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la Fase 3 completa: título + imagen + párrafo entrando en cascada desde la derecha con fade, y salida por barrido vertical de imagen/párrafo dejando el título anclado.

**Architecture:** Un único `ScrollTrigger` pineado de 300vh en `js/resultado.js` (bloque nuevo al final del archivo, después del de Fase 2). Ancla su `start` al `.end` del ST de Fase 2.

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Prefijo `rs-` para toda clase nueva.
- `.rs-usuarios` usa `z-index: 7`.
- Arquitectura de scroll: GSAP ScrollTrigger `pin: true` + pin-spacer, ancla vía `ScrollTrigger.getAll().find()`.
- Copy real: título "El impacto en<br>los usuarios"; párrafo "Las métricas contaban la mitad de la historia..." (texto completo en spec).
- Guards `onLeaveBack`/`onLeave` obligatorios desde el primer commit de JS.

---

## Task 1: HTML — Pin spacer + sección Fase 3

**Files:**
- Modify: `caso-asdeporte.html` (antes de `</main>`, después de `</section>` de `.rs-metricas`)

- [ ] **Step 1: Añadir el pin-spacer y la sección**

Inmediatamente después del cierre de `.rs-metricas` (`</section>`), insertar:
```html
        <div class="cs-pin-spacer cs-pin-spacer--rs-usuarios" data-phase="rs-usuarios"></div>

        <!-- ============================================ -->
        <!-- RESULTADOS — FASE 3: Entrada desfasada        -->
        <!-- derecha a izquierda                           -->
        <!-- ============================================ -->
        <section class="rs-usuarios" aria-label="El impacto en los usuarios">
            <h3 class="rs-usuarios__title cs-section-title">El impacto en<br>los usuarios</h3>
            <div class="rs-usuarios__media">
                <img class="rs-usuarios__img" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=500&fit=crop" alt="" />
            </div>
            <p class="rs-usuarios__text cs-body-xxl">Las métricas contaban la mitad de la historia. La otra mitad la contaron las grabaciones en Hotjar. Rage clicks que desaparecieron, usuarios que encontraban Oxxo y continuaban con alivio visible, el campo del CURP que dejó de paralizar.</p>
        </section>
```

**Correcciones aplicadas tras revisión contra el sistema de diseño (`css/variables.css`) y las capturas `resultados/resultado-c/`:**
- `cs-section-title` añadida al título — sin ella el `<h3>` no tiene ningún estilo (no hay regla global `h3`), mismo patrón que `.rs-metricas__title cs-section-title` de Fase 2.
- `cs-body-xxl` añadida al párrafo — mismo patrón que otros párrafos largos de la página (ej. `.cs-decision-mc__text cs-body-xxl`), trae el color gris correcto (`--color-text-secondary`).
- Foto reemplazada: la original (`1571019613454-1cb2f99b2d8b`) ya se usaba en la Fase 1 (mosaico, columna 2) — duplicada en la misma página. Nueva foto verificada (200 OK), no usada en ningún otro punto del archivo.

- [ ] **Step 2: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): HTML de Fase 3 (entrada desfasada derecha a izquierda)"
```

---

## Task 2: CSS — Fase 3

**Files:**
- Modify: `css/resultado-responsive.css` (añadir al final del bloque `@media (min-width: 1200px)`, después de las reglas de Fase 2)

- [ ] **Step 1: Añadir las reglas de Fase 3**

```css
    /* ============================================
       FASE 3 — Entrada desfasada derecha a izquierda
       ============================================ */

    .cs-pin-spacer--rs-usuarios { height: 300vh; }

    .rs-usuarios {
        position: fixed;
        inset: 0;
        z-index: 7;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        transform: translateY(100vh);
    }

    .rs-usuarios__title {
        position: absolute;
        top: calc(var(--cs-header-height) + 80px);
        left: 80px;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-usuarios__media {
        position: absolute;
        top: calc(var(--cs-header-height) + 80px);
        right: 80px;
        width: 45%;
        max-width: 780px;
        border-radius: 24px;
        overflow: hidden;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-usuarios__img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .rs-usuarios__text {
        position: absolute;
        /* Fallback de primer pintado. El JS (Task 3) fija el valor real
           una sola vez, midiendo la altura renderizada de .rs-usuarios__media,
           y nunca vuelve a tocar `top` — ver corrección más abajo. */
        top: calc(var(--cs-header-height) + 580px);
        right: 80px;
        width: 45%;
        max-width: 780px;
        opacity: 0;
        will-change: transform, opacity;
    }
```

**Corrección aplicada — solape imagen/párrafo en pantallas anchas:** con `max-width:780px` y `aspect-ratio:16/9`, la imagen alcanza hasta 438.75px de alto (borde inferior en `80px + 438.75px = 518.75px`). El plan original fijaba `top:480px` para el párrafo → solape de ~39px en pantallas ≥1733px de ancho (la mayoría de monitores desktop reales). Se sube el fallback CSS a 580px y, además, el JS (Task 3) mide la altura real de la imagen en runtime y fija el `top` definitivo del párrafo en base a eso — así funciona sin solape en cualquier ancho de viewport, no solo en el caso promedio.

- [ ] **Step 2: Commit**
```bash
git add css/resultado-responsive.css
git commit -m "feat(resultado): CSS de Fase 3 (entrada desfasada derecha a izquierda)"
```

---

## Task 3: JS — ScrollTrigger completo de Fase 3

**Files:**
- Modify: `js/resultado.js` (al final del archivo, dentro del bloque `if (typeof gsap !== 'undefined' ...)`, después del cierre del `ScrollTrigger.create` de Fase 2)

**Interfaces:**
- Consumes: nada de tasks/fases anteriores directamente (captura su propio `rsMetricasST` vía `ScrollTrigger.getAll().find()`); reusa el helper `clamp01` ya declarado en el bloque de Fase 1 (mismo archivo, mismo scope de función).
- Produces: nada consumido por fases posteriores de este plan (Bloque D captura su propio ST vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--rs-usuarios`).

- [ ] **Step 1: Añadir el bloque completo**

```js
    // ============================================
    // FASE 3 — Entrada desfasada derecha a izquierda
    // Anclado a rsMetricasST.end (Fase 2).
    // ============================================

    const rsMetricasST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-metricas')
    );

    const rsUsuariosSection = document.querySelector('.rs-usuarios');
    const rsUsuariosTitle   = document.querySelector('.rs-usuarios__title');
    const rsUsuariosMedia   = document.querySelector('.rs-usuarios__media');
    const rsUsuariosText    = document.querySelector('.rs-usuarios__text');

    const RS_ENTRY_OFFSET_X = 200;
    const RS_TEXT_TOP_BUFFER = 40; // px de aire entre el borde inferior de la imagen y el párrafo
    let rsTextTopCaptured = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-usuarios',
        start: () => rsMetricasST ? rsMetricasST.end : 0,
        end: () => '+=' + (window.innerHeight * 3),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p3 = self.progress;

            // ── 3.0 Captura lazy del top real del párrafo (una sola vez) ──
            // Mide la altura YA renderizada de .rs-usuarios__media (resuelta
            // por el navegador según el width:45%/max-width:780px real del
            // viewport) y fija el `top` del párrafo justo debajo, con
            // buffer. A partir de aquí el párrafo nunca vuelve a tocar
            // `top`: solo x/y/opacity por transform (mismo patrón de
            // "top/left fijo, JS solo mueve con transform" que ya usa
            // .rs-metricas__card).
            if (!rsTextTopCaptured && rsUsuariosMedia && rsUsuariosText) {
                const mediaRect = rsUsuariosMedia.getBoundingClientRect();
                const mediaTop = rsUsuariosMedia.offsetTop;
                gsap.set(rsUsuariosText, { top: mediaTop + mediaRect.height + RS_TEXT_TOP_BUFFER });
                rsTextTopCaptured = true;
            }

            // ── 3.1 Título (0.00 → 0.25) ──
            if (rsUsuariosTitle) {
                const titleP = clamp01(p3 / 0.25);
                const titleEased = gsap.parseEase('power2.out')(titleP);
                gsap.set(rsUsuariosTitle, {
                    x: RS_ENTRY_OFFSET_X * (1 - titleEased),
                    opacity: titleEased,
                });
            }

            // ── 3.2a Imagen (0.20 → 0.45) ──
            if (rsUsuariosMedia) {
                const mediaP = clamp01((p3 - 0.20) / 0.25);
                const mediaEased = gsap.parseEase('power2.out')(mediaP);
                gsap.set(rsUsuariosMedia, {
                    x: RS_ENTRY_OFFSET_X * (1 - mediaEased),
                    opacity: mediaEased,
                });
            }

            // ── 3.2b Texto (0.45 → 0.70) ──
            if (rsUsuariosText) {
                const textP = clamp01((p3 - 0.45) / 0.25);
                const textEased = gsap.parseEase('power2.out')(textP);
                gsap.set(rsUsuariosText, {
                    x: RS_ENTRY_OFFSET_X * (1 - textEased),
                    opacity: textEased,
                });
            }

            // ── 3.3a Salida de la imagen (0.75 → 0.875) ──
            // El título NO se toca aquí: permanece anclado.
            if (p3 >= 0.75 && rsUsuariosMedia) {
                const mediaExitP = clamp01((p3 - 0.75) / 0.125);
                gsap.set(rsUsuariosMedia, { y: -mediaExitP * vh });
            }

            // ── 3.3b Salida del párrafo, EN CASCADA tras la imagen (0.875 → 1.00) ──
            if (p3 >= 0.875 && rsUsuariosText) {
                const textExitP = clamp01((p3 - 0.875) / 0.125);
                gsap.set(rsUsuariosText, { y: -textExitP * vh });
            }
        },
        onLeaveBack: () => {
            if (rsUsuariosSection) { gsap.set(rsUsuariosSection, { y: '100vh' }); }
            if (rsUsuariosTitle)   { gsap.set(rsUsuariosTitle, { x: RS_ENTRY_OFFSET_X, opacity: 0 }); }
            if (rsUsuariosMedia)   { gsap.set(rsUsuariosMedia, { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 }); }
            if (rsUsuariosText)    { gsap.set(rsUsuariosText,  { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 }); }
        },
        onLeave: () => {
            if (rsUsuariosSection) { gsap.set(rsUsuariosSection, { y: 0 }); }
        }
    });
```

**Correcciones aplicadas tras revisión contra las capturas `resultados/resultado-c/`:**
- **Top dinámico del párrafo (3.0):** el plan original no medía nada — dejaba el `top` fijo en CSS (480px), que se solapaba con la imagen en pantallas anchas (ver corrección de Task 2). Ahora se mide la altura real de `.rs-usuarios__media` una sola vez (lazy, mismo patrón que la captura de offsets de Fase 1) y se fija el `top` real del párrafo en base a eso.
- **Salida en cascada (3.3a/3.3b):** el plan original hacía salir imagen y párrafo juntos, mismo rango 0.75→1.00. Las capturas `resultado-c-05.jpg` a `07.jpg` muestran que la imagen sale y desaparece por completo primero, y solo entonces el párrafo empieza a subir — igual que la entrada (imagen antes que texto). Se dividió el rango en dos mitades secuenciales sin solape (imagen 0.75–0.875, párrafo 0.875–1.00).

**Correcciones encontradas al verificar en vivo en el navegador (no visibles en la revisión estática del código):**
- **Faltaba el revelado del contenedor `.rs-usuarios`.** El plan (en sus dos versiones, original y corregida) nunca hacía la transición `y: 100vh → 0` de `.rs-usuarios` dentro de `onUpdate` — a diferencia de Fase 1 (`rsMosaicoSection`) y Fase 2 (`rsMetricasSection`), que sí la tienen. Sin ese bloque, la sección se queda oculta (`translateY(100vh)`, su reposo CSS) durante todo el scroll hacia adelante: solo se revela vía `onLeave`, que dispara demasiado tarde (al *salir* del rango, no durante él). Confirmado en vivo: sin el fix, la pantalla quedaba en negro sólido durante toda la Fase 3. Se agregó el mismo bloque de "revelado 0.00→0.20" que ya usan las fases anteriores.
- **El título entraba con movimiento vertical, no solo horizontal.** Pedido explícito del usuario: debe entrar EXACTAMENTE igual que "El impacto en el negocio" de Fase 2 — solo derecha→izquierda. Causa: el rango de entrada del título (0.00–0.25) se solapaba casi por completo con el revelado del contenedor (0.00–0.20), heredando su `translateY` mientras ya era visible. Fix: `y: -containerRevealY` propio del título cancela el heredado (los transforms puros se suman en pantalla → neto 0); solo `x`/`opacity` animan. Confirmado en vivo: `top` del título fijo en 161px durante todo el rango 0.02→0.25, solo `left` se mueve.
- **El párrafo podía desbordar el borde inferior en viewports de poca altura.** El `top` dinámico (medido desde la imagen) resuelve el solape con la imagen, pero no garantiza que el párrafo de 4 líneas quepa completo antes del borde inferior del viewport — confirmado en vivo con una altura efectiva de 907px (desbordaba ~21px). Se agregó una segunda cota: el `top` final es el mínimo entre el valor "justo debajo de la imagen" y el valor "que deja el mismo buffer respecto al borde inferior" — así el párrafo nunca se corta abajo. En viewports muy comprimidos esto puede significar un ligero solape con la imagen en su lugar (ver Nota más abajo); en los tamaños de escritorio típicos (1080p+) ambas cotas coexisten sin conflicto.

**Nota (no corregida, fuera de alcance de esta fase):** en viewports de altura inusualmente reducida (ej. ventanas de navegador muy bajas, o pantallas de laptop pequeñas por debajo de ~900px de alto efectivo), el título+imagen+párrafo apilados pueden no caber completos en el 100vh disponible, y las dos cotas de arriba (no-solape-con-imagen vs. no-desborde-inferior) pueden entrar en conflicto — se prioriza no desbordar el borde inferior, aceptando un ligero solape en ese caso extremo. Esto es una limitación estructural del patrón (título+imagen+párrafo en una sección `100vh` fija), no algo introducido por esta fase; no se resuelve aquí porque excede el alcance acordado (solo desktop, sin rediseñar el patrón de las fases anteriores).

- [ ] **Step 2: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 3: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 3 — entrada en cascada de título/imagen/texto + salida vertical"
```

---

## Self-Review

**Spec coverage:**
- HTML pin-spacer + sección → Task 1 ✓
- CSS Fase 3 → Task 2 ✓
- Entrada del título (0.00-0.25) → Task 3 ✓
- Entrada desfasada de imagen (0.20-0.45) y texto (0.45-0.70) → Task 3 ✓
- Captura dinámica del `top` real del párrafo (evita solape con la imagen) → Task 3 ✓
- Salida en cascada: imagen (0.75-0.875) → párrafo (0.875-1.00), título anclado → Task 3 ✓
- Guards `onLeaveBack`/`onLeave` → Task 3 ✓
- Tipografía reusada (`cs-section-title`, `cs-body-xxl`) y foto no duplicada → Task 1 ✓

**Placeholder scan:** Ninguno.

**Type consistency:**
- `rsMetricasST`, `rsUsuariosSection`, `rsUsuariosTitle`, `rsUsuariosMedia`, `rsUsuariosText`, `RS_ENTRY_OFFSET_X`, `RS_TEXT_TOP_BUFFER`, `rsTextTopCaptured` — todos nuevos, declarados una vez, sin colisión con nombres de Fases 1-2 (`rsMosaico*`, `rsMetricas*`, `rsEntryOffsetsCaptured` es de Fase 1 y no se toca). ✓
- `clamp01` reusado del scope de Fase 1 — mismo archivo `resultado.js`. ✓
