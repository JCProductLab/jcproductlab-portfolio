# Resultado — Fase 2 (Tránsito diagonal) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la Fase 2 completa: salida del lienzo de Fase 1, título "El impacto en el negocio", y 3 tarjetas de métricas que cruzan la pantalla en diagonal con stagger, cerrando con fade-out del título.

**Architecture:** Un único `ScrollTrigger` pineado de 320vh en `js/resultado.js` (mismo archivo que Fase 1, bloque nuevo al final), ancla su `start` al `.end` del ST de Fase 1. Toda la matemática de las 3 tarjetas se resuelve en un solo `onUpdate` con 3 sub-rangos de progreso local por tarjeta (stagger).

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Prefijo `rs-` para toda clase nueva.
- `.rs-metricas` usa `z-index: 7` (mismo nivel que `.rs-mosaico` — mutuamente excluyentes en el tiempo).
- Arquitectura de scroll: GSAP ScrollTrigger `pin: true` + pin-spacer.
- Todo nuevo `ScrollTrigger.create` se ancla al `.end` del ST anterior vía `ScrollTrigger.getAll().find()`.
- Copy real (no placeholder): título "El impacto en el negocio"; 3 tarjetas con los valores `+30%`/`-60%`/`+25%` y sus textos exactos (ver spec).
- Guards `onLeaveBack`/`onLeave` obligatorios desde el primer commit de JS (patrón aprendido del fix de la línea fantasma).

---

## Task 1: HTML — Pin spacer + sección Fase 2

**Files:**
- Modify: `caso-asdeporte.html` (antes de `</main>`, después de `</section>` de `.rs-mosaico`)

- [ ] **Step 1: Añadir el pin-spacer**

Inmediatamente después del cierre de `.rs-mosaico` (`</section>`), insertar:
```html
        <div class="cs-pin-spacer cs-pin-spacer--rs-metricas" data-phase="rs-metricas"></div>
```

- [ ] **Step 2: Añadir la sección**

Inmediatamente después, insertar:
```html
        <!-- ============================================ -->
        <!-- RESULTADOS — FASE 2: Tránsito diagonal de     -->
        <!-- tarjetas de métricas                          -->
        <!-- ============================================ -->
        <section class="rs-metricas" aria-label="El impacto en el negocio">
            <h3 class="rs-metricas__title">El impacto en el negocio</h3>
            <div class="rs-metricas__card" data-metric="1">
                <span class="rs-metricas__value">+30%<i class="ph ph-arrow-up-right rs-metricas__arrow" aria-hidden="true"></i></span>
                <p class="rs-metricas__label">Uso de beneficios Plus.</p>
                <p class="rs-metricas__detail">Retención D30: 20% &rarr; 25% en Amplitude.</p>
            </div>
            <div class="rs-metricas__card" data-metric="2">
                <span class="rs-metricas__value">-60%<i class="ph ph-arrow-down-right rs-metricas__arrow" aria-hidden="true"></i></span>
                <p class="rs-metricas__label">Tickets de soporte por pagos.</p>
                <p class="rs-metricas__detail">Medido en Zendesk pre y post lanzamiento.</p>
            </div>
            <div class="rs-metricas__card" data-metric="3">
                <span class="rs-metricas__value">+25%<i class="ph ph-arrow-up-right rs-metricas__arrow" aria-hidden="true"></i></span>
                <p class="rs-metricas__label">Conversión de inscripciones.</p>
                <p class="rs-metricas__detail">De 9.2% &rarr; 11.5% vía Mixpanel.</p>
            </div>
        </section>
```

- [ ] **Step 3: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): HTML de Fase 2 (tránsito diagonal de métricas)"
```

---

## Task 2: CSS — Fase 2

**Files:**
- Modify: `css/resultado-responsive.css` (añadir al final del bloque `@media (min-width: 1200px)`, después de las reglas de Fase 1)

- [ ] **Step 1: Añadir las reglas de Fase 2**

```css
    /* ============================================
       FASE 2 — Tránsito diagonal de tarjetas de métricas
       ============================================ */

    .cs-pin-spacer--rs-metricas { height: 320vh; }

    .rs-metricas {
        position: fixed;
        inset: 0;
        z-index: 7;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        transform: translateY(100vh);
    }

    .rs-metricas__title {
        position: absolute;
        top: calc(var(--cs-header-height) + 80px);
        left: 80px;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-metricas__card {
        position: absolute;
        width: 380px;
        padding: 40px;
        border-radius: 24px;
        background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
        color: var(--color-primary);
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-metricas__value {
        display: block;
        font-family: var(--font-display);
        font-size: clamp(3rem, 5vw, 4.5rem);
        font-weight: var(--bold);
        margin-bottom: 24px;
    }

    .rs-metricas__arrow { margin-left: 8px; color: var(--color-accent); }

    .rs-metricas__label { font-weight: var(--semibold); margin-bottom: 48px; }
    .rs-metricas__detail { color: var(--color-text-secondary); }
```

- [ ] **Step 2: Commit**
```bash
git add css/resultado-responsive.css
git commit -m "feat(resultado): CSS de Fase 2 (tránsito diagonal de métricas)"
```

---

## Task 3: JS — Skeleton del ST + salida del lienzo Fase 1 + título

**Files:**
- Modify: `js/resultado.js` (al final del archivo, dentro del bloque `if (typeof gsap !== 'undefined' ...)`, después del cierre del `ScrollTrigger.create` de Fase 1)

**Interfaces:**
- Consumes: nada de Fase 1 directamente (captura su propio `rsMosaicoST` vía `ScrollTrigger.getAll().find()`).
- Produces: `rsMetricasSection`, `rsMetricasTitle`, `rsMetricasCards` — consumidos por Task 4 y 5 (mismo archivo, mismo `onUpdate`, se amplía en los tasks siguientes).

- [ ] **Step 1: Añadir el bloque completo**

```js
    // ============================================
    // FASE 2 — Tránsito diagonal de tarjetas de métricas
    // Anclado a rsMosaicoST.end (Fase 1).
    // ============================================

    const rsMosaicoST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-mosaico')
    );

    const rsMetricasSection = document.querySelector('.rs-metricas');
    const rsMetricasTitle   = document.querySelector('.rs-metricas__title');
    const rsMetricasCards   = gsap.utils.toArray('.rs-metricas__card');
    const rsMosaicoCenterCard = document.querySelector('.rs-mosaico__card--center');

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-metricas',
        start: () => rsMosaicoST ? rsMosaicoST.end : 0,
        end: () => '+=' + (window.innerHeight * 3.2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            const p2 = self.progress;

            // ── Salida del lienzo de Fase 1 (0.00 → 0.20) ──
            if (rsMosaicoCenterCard) {
                const exitP = clamp01(p2 / 0.20);
                gsap.set(rsMosaicoCenterCard, { y: -exitP * vh });
            }

            // ── Entrada del título (0.00 → 0.20) ──
            if (rsMetricasTitle) {
                const inEased = gsap.parseEase('power2.out')(clamp01(p2 / 0.20));
                gsap.set(rsMetricasTitle, { x: 200 * (1 - inEased), opacity: inEased });
            }

            // ── Cierre de escena: fade-out del título (0.90 → 1.00) ──
            if (rsMetricasTitle && p2 >= 0.90) {
                const closeP = clamp01((p2 - 0.90) / 0.10);
                gsap.set(rsMetricasTitle, { opacity: 1 - closeP });
            }
        },
        onLeaveBack: () => {
            if (rsMosaicoCenterCard) { gsap.set(rsMosaicoCenterCard, { y: 0 }); }
            if (rsMetricasTitle)     { gsap.set(rsMetricasTitle, { x: 200, opacity: 0 }); }
            if (rsMetricasSection)   { gsap.set(rsMetricasSection, { y: '100vh' }); }
        },
        onLeave: () => {
            if (rsMetricasSection) { gsap.set(rsMetricasSection, { y: 0 }); }
        }
    });
```

- [ ] **Step 2: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 3: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 2 — salida del lienzo Fase 1 + título con cierre de escena"
```

---

## Task 4: JS — Movimiento diagonal de las 3 tarjetas con stagger

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create` de Task 3)

**Interfaces:**
- Consumes: `rsMetricasCards` (de Task 3).
- Produces: nada consumido por Task 5 directamente.

- [ ] **Step 1: Añadir las constantes de stagger, ANTES del `ScrollTrigger.create` (después de `const rsMosaicoCenterCard = ...`)**

```js
    // Rango compartido de la diagonal: 0.15 → 0.90 del progreso total.
    // Cada tarjeta recorre el 75% de ese rango, con un desfase de inicio
    // del 25% respecto a la tarjeta anterior (stagger).
    const RS_DIAG_START = 0.15;
    const RS_DIAG_END   = 0.90;
    const RS_DIAG_SPAN  = RS_DIAG_END - RS_DIAG_START;
    const RS_DIAG_CARD_SPAN   = RS_DIAG_SPAN * 0.75;
    const RS_DIAG_CARD_STAGGER = RS_DIAG_SPAN * 0.25;
    const RS_DIAG_CARD_STARTS = [
        RS_DIAG_START,
        RS_DIAG_START + RS_DIAG_CARD_STAGGER,
        RS_DIAG_START + RS_DIAG_CARD_STAGGER * 2,
    ];
```

- [ ] **Step 2: Añadir el movimiento diagonal dentro de `onUpdate`, después del bloque de cierre de escena del título**

```js
            // ── Tarjetas: diagonal constante inferior-izq → superior-der (0.15 → 0.90) ──
            rsMetricasCards.forEach((card, i) => {
                const cardStart = RS_DIAG_CARD_STARTS[i];
                const localP = clamp01((p2 - cardStart) / RS_DIAG_CARD_SPAN);
                const cardW = card.offsetWidth || 380;
                const cardH = card.offsetHeight || 260;

                const originX = -cardW;
                const originY = vh + cardH;
                const destX   = vw + cardW;
                const destY   = -cardH - vh;

                const x = originX + (destX - originX) * localP;
                const y = originY + (destY - originY) * localP;

                let opacity = 0;
                if (localP > 0 && localP < 1) {
                    opacity = 1;
                } else if (localP >= 1) {
                    opacity = 0; // ya salió completamente
                }

                gsap.set(card, { x, y, opacity });
            });
```

- [ ] **Step 3: Añadir el reset de las cards en `onLeaveBack`**

Reemplazar:
```js
        onLeaveBack: () => {
            if (rsMosaicoCenterCard) { gsap.set(rsMosaicoCenterCard, { y: 0 }); }
            if (rsMetricasTitle)     { gsap.set(rsMetricasTitle, { x: 200, opacity: 0 }); }
            if (rsMetricasSection)   { gsap.set(rsMetricasSection, { y: '100vh' }); }
        },
```
Por:
```js
        onLeaveBack: () => {
            if (rsMosaicoCenterCard) { gsap.set(rsMosaicoCenterCard, { y: 0 }); }
            if (rsMetricasTitle)     { gsap.set(rsMetricasTitle, { x: 200, opacity: 0 }); }
            if (rsMetricasSection)   { gsap.set(rsMetricasSection, { y: '100vh' }); }
            rsMetricasCards.forEach((card) => {
                gsap.set(card, { x: -(card.offsetWidth || 380), y: vh() + (card.offsetHeight || 260), opacity: 0 });
            });
        },
```

- [ ] **Step 4: Añadir el helper `vh()`, junto a `RS_DIAG_CARD_STARTS`**

```js
    const vh = () => window.innerHeight;
```

- [ ] **Step 5: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 6: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 2 — movimiento diagonal de las 3 tarjetas con stagger"
```

---

## Self-Review

**Spec coverage:**
- HTML pin-spacer + sección → Task 1 ✓
- CSS Fase 2 → Task 2 ✓
- Salida del lienzo Fase 1 → Task 3 ✓
- Entrada de título + cierre de escena → Task 3 ✓
- Movimiento diagonal + stagger de las 3 tarjetas → Task 4 ✓
- Guards `onLeaveBack`/`onLeave` → Tasks 3-4 (acumulativo) ✓

**Placeholder scan:** Ninguno.

**Type consistency:**
- `rsMosaicoST`, `rsMetricasSection`, `rsMetricasTitle`, `rsMetricasCards`, `rsMosaicoCenterCard`, `RS_DIAG_*`, `vh` — declarados una vez en Tasks 3-4, reusados sin redeclarar. ✓
- `clamp01` reusado de Fase 1 (Bloque A, Task 3 de ese plan) — mismo archivo `resultado.js`, mismo scope de función, ya está en el alcance. ✓
