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
            <h3 class="rs-usuarios__title">El impacto en<br>los usuarios</h3>
            <div class="rs-usuarios__media">
                <img class="rs-usuarios__img" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=500&fit=crop" alt="" />
            </div>
            <p class="rs-usuarios__text">Las métricas contaban la mitad de la historia. La otra mitad la contaron las grabaciones en Hotjar. Rage clicks que desaparecieron, usuarios que encontraban Oxxo y continuaban con alivio visible, el campo del CURP que dejó de paralizar.</p>
        </section>
```

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
        top: calc(var(--cs-header-height) + 480px);
        right: 80px;
        width: 45%;
        max-width: 780px;
        opacity: 0;
        will-change: transform, opacity;
    }
```

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

            // ── 3.3 Salida por barrido vertical de imagen + texto (0.75 → 1.00) ──
            // El título NO se toca aquí: permanece anclado.
            if (p3 >= 0.75) {
                const exitP = clamp01((p3 - 0.75) / 0.25);
                if (rsUsuariosMedia) { gsap.set(rsUsuariosMedia, { y: -exitP * vh }); }
                if (rsUsuariosText)  { gsap.set(rsUsuariosText,  { y: -exitP * vh }); }
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
- Salida por barrido vertical de imagen+texto, título anclado → Task 3 ✓
- Guards `onLeaveBack`/`onLeave` → Task 3 ✓

**Placeholder scan:** Ninguno.

**Type consistency:**
- `rsMetricasST`, `rsUsuariosSection`, `rsUsuariosTitle`, `rsUsuariosMedia`, `rsUsuariosText`, `RS_ENTRY_OFFSET_X` — todos nuevos, declarados una vez, sin colisión con nombres de Fases 1-2 (`rsMosaico*`, `rsMetricas*`). ✓
- `clamp01` reusado del scope de Fase 1 — mismo archivo `resultado.js`. ✓
