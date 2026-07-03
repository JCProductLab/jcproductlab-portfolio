# Resultado — Fase 4 (Portal tipográfico) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la Fase 4 completa: aislamiento tipográfico de "impacto" + anillo rotatorio, zoom exponencial usando la "p" como portal hacia un testimonio, y cierre con revelación de líneas enmascaradas + CTA que abre el modal de Fase 5.

**Architecture:** Un único `ScrollTrigger` pineado de 400vh en `js/resultado.js`, ancla su `start` al `.end` del ST de Fase 3. Reusa `.rs-usuarios__title` (Fase 3) modificando su HTML para envolver palabras en spans. El zoom de "impacto" reutiliza el patrón de medición-por-`getBoundingClientRect()` ya usado en `computeGesture2Constants`/`computeGesture3Constants` de `caso-asdeporte.js`, ahora anclado a un `<span>` que envuelve solo la letra "p".

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Prefijo `rs-` para toda clase nueva.
- `.rs-testimonio` usa `z-index: 7`.
- Arquitectura de scroll: GSAP ScrollTrigger `pin: true` + pin-spacer, ancla vía `ScrollTrigger.getAll().find()`.
- Copy real: testimonio y texto de cierre exactos (ver spec, transcritos en los steps de este plan).
- Guards `onLeaveBack`/`onLeave` obligatorios desde el primer commit de JS.
- Aproximación aceptada: el pivot de zoom usa el bbox de un `<span>` que envuelve solo la letra "p" (no el counter exacto del glifo) — documentado en el spec, no reabrir esa discusión en revisión.

---

## Task 1: HTML — Palabras de Fase 3 en spans + esqueleto de Fase 4

**Files:**
- Modify: `caso-asdeporte.html` (título de `.rs-usuarios`, de Bloque C/Fase 3)
- Modify: `caso-asdeporte.html` (antes de `</main>`, después de `</section>` de `.rs-usuarios`)

- [ ] **Step 1: Envolver las palabras del título de Fase 3 en spans**

Buscar (HTML insertado por el plan de Fase 3, Bloque C):
```html
            <h3 class="rs-usuarios__title">El impacto en<br>los usuarios</h3>
```
Reemplazar por:
```html
            <h3 class="rs-usuarios__title">
                <span class="rs-usuarios__word">El</span> <span class="rs-usuarios__word" data-word="impacto">im<span class="rs-usuarios__p-anchor">p</span>acto</span> <span class="rs-usuarios__word">en</span><br>
                <span class="rs-usuarios__word">los usuarios</span>
            </h3>
```

- [ ] **Step 2: Añadir el pin-spacer y la sección de Fase 4**

Inmediatamente después del cierre de `.rs-usuarios` (`</section>`), insertar:
```html
        <div class="cs-pin-spacer cs-pin-spacer--rs-testimonio" data-phase="rs-testimonio"></div>

        <!-- ============================================ -->
        <!-- RESULTADOS — FASE 4: Portal de máscara        -->
        <!-- tipográfica y revelación                      -->
        <!-- Reusa .rs-usuarios__title (Fase 3) ya anclado -->
        <!-- en pantalla — no crea título propio.          -->
        <!-- ============================================ -->
        <section class="rs-testimonio" aria-label="Testimonio y cierre">
            <span class="rs-testimonio__ring" aria-hidden="true"></span>
            <blockquote class="rs-testimonio__quote">
                <i class="ph ph-quotes rs-testimonio__quote-icon" aria-hidden="true"></i>
                <p class="rs-testimonio__quote-text">"Llevo 10 años corriendo con AsDeporte y siempre odié la app. Esta mañana me inscribí al Ironman de Cozumel mientras desayunaba, en menos de 2 minutos. Por primera vez, la tecnología de AsDeporte es tan profesional como sus carreras."</p>
            </blockquote>
            <div class="rs-testimonio__closing">
                <h3 class="rs-testimonio__closing-title">
                    <span class="rs-testimonio__line-wrap"><span class="rs-testimonio__line">No rediseñamos una app.</span></span>
                    <span class="rs-testimonio__line-wrap"><span class="rs-testimonio__line">Recuperamos la autoridad</span></span>
                    <span class="rs-testimonio__line-wrap"><span class="rs-testimonio__line">de una marca.</span></span>
                </h3>
                <button type="button" class="rs-testimonio__cta" id="rsQueAprendiBtn">
                    QUÉ APRENDÍ
                    <span class="rs-testimonio__cta-icon" aria-hidden="true"><i class="ph ph-arrow-up-right"></i></span>
                </button>
            </div>
        </section>
```

- [ ] **Step 3: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): HTML de Fase 4 — palabras de Fase 3 en spans + esqueleto portal/testimonio/cierre"
```

---

## Task 2: CSS — Fase 4

**Files:**
- Modify: `css/resultado-responsive.css` (añadir al final del bloque `@media (min-width: 1200px)`, después de las reglas de Fase 3)

- [ ] **Step 1: Añadir las reglas de Fase 4**

```css
    /* ============================================
       FASE 4 — Portal de máscara tipográfica y revelación
       ============================================ */

    .cs-pin-spacer--rs-testimonio { height: 400vh; }

    .rs-usuarios__word { display: inline-block; will-change: opacity; }

    .rs-testimonio {
        position: fixed;
        inset: 0;
        z-index: 7;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        pointer-events: none;
    }

    .rs-testimonio__ring {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        margin: -150px 0 0 -150px;
        border: 2px dashed var(--color-accent);
        border-radius: 50%;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-testimonio__quote {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15%;
        opacity: 0;
        will-change: opacity;
    }

    .rs-testimonio__quote-icon { color: var(--color-accent); font-size: 3rem; margin-bottom: 24px; }
    .rs-testimonio__quote-text { font-style: italic; text-align: center; }

    .rs-testimonio__closing {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 48px;
    }

    .rs-testimonio__line-wrap { display: block; overflow: hidden; }
    .rs-testimonio__line {
        display: block;
        transform: translateY(100%);
        will-change: transform;
        text-align: center;
    }

    .rs-testimonio__cta {
        display: inline-flex;
        align-items: center;
        gap: 16px;
        padding: 16px 28px;
        border-radius: 9999px;
        background: rgba(240, 240, 240, 0.08);
        color: var(--color-accent);
        font-weight: var(--semibold);
        opacity: 0;
        transform: translateY(40px);
        will-change: transform, opacity;
        pointer-events: none;
    }

    .rs-testimonio__cta-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--color-accent);
        color: var(--color-primary);
    }
```

- [ ] **Step 2: Commit**
```bash
git add css/resultado-responsive.css
git commit -m "feat(resultado): CSS de Fase 4 (portal tipográfico y revelación)"
```

---

## Task 3: JS — Skeleton del ST + fade selectivo de palabras + anillo

**Files:**
- Modify: `js/resultado.js` (al final del archivo, después del cierre del `ScrollTrigger.create` de Fase 3)

**Interfaces:**
- Consumes: reusa `clamp01` (Fase 1, mismo archivo/scope).
- Produces: `rsUsuariosWords`, `rsImpactoWord`, `rsPAnchor`, `rsRing` — consumidos por Tasks 4-6 (mismo `onUpdate`, ampliado en tasks siguientes).

- [ ] **Step 1: Añadir el bloque completo**

```js
    // ============================================
    // FASE 4 — Portal de máscara tipográfica y revelación
    // Anclado a rsUsuariosST.end (Fase 3). Reusa
    // .rs-usuarios__title (Fase 3) — no crea título propio.
    // ============================================

    const rsUsuariosST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-usuarios')
    );

    const rsTestimonioSection = document.querySelector('.rs-testimonio');
    const rsUsuariosWords = gsap.utils.toArray('.rs-usuarios__word');
    const rsImpactoWord   = document.querySelector('.rs-usuarios__word[data-word="impacto"]');
    const rsPAnchor       = document.querySelector('.rs-usuarios__p-anchor');
    const rsRing          = document.querySelector('.rs-testimonio__ring');

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-testimonio',
        start: () => rsUsuariosST ? rsUsuariosST.end : 0,
        end: () => '+=' + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const p4 = self.progress;

            // ── 4.1 Fade selectivo de palabras (0.00 → 0.25), "impacto" queda en 1 ──
            const wordFadeP = clamp01(p4 / 0.25);
            rsUsuariosWords.forEach((word) => {
                if (word.dataset.word !== 'impacto') {
                    gsap.set(word, { opacity: 1 - wordFadeP });
                }
            });

            // ── 4.1 Anillo: fade-in (0.00→0.25) + rotación/escala (0.00→0.65) ──
            // Misma fórmula que .cs-decision-mc__ring de "La Decisión".
            if (rsRing) {
                const ringFadeP = clamp01(p4 / 0.25);
                const ringOutP  = clamp01((p4 - 0.55) / 0.10);
                const ringGrowP = clamp01(p4 / 0.65);
                const ringGrowEased = gsap.parseEase('power1.inOut')(ringGrowP);
                gsap.set(rsRing, {
                    opacity: ringFadeP * (1 - ringOutP),
                    scale: 1.0 + (2.75 - 1.0) * ringGrowEased,
                    rotation: 360 * ringGrowP,
                });
            }
        },
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) { gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 }); }
        },
        onLeave: () => {
            // estado final se aplica en tasks posteriores (cierre + CTA visibles).
        }
    });
```

- [ ] **Step 2: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 3: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 4 — fade selectivo de palabras + anillo rotatorio"
```

---

## Task 4: JS — Zoom exponencial de "impacto" anclado en la "p"

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create` de Task 3)

**Interfaces:**
- Consumes: `rsImpactoWord`, `rsPAnchor` (de Task 3).
- Produces: `rsPortalTargetScale`, `rsPortalDeltaX`, `rsPortalDeltaY`, `rsPortalCaptured`, función `computeRsPortalConstants` — consumidos internamente por este mismo bloque (no por tasks posteriores).

- [ ] **Step 1: Añadir las variables de estado del portal, ANTES del `ScrollTrigger.create` (después de `const rsRing = ...`)**

```js
    let rsPortalCaptured   = false;
    let rsPortalTargetScale = 1;
    let rsPortalDeltaX     = 0;
    let rsPortalDeltaY     = 0;

    function computeRsPortalConstants() {
        if (!rsPAnchor || !rsImpactoWord) return;
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const anchorRect = rsPAnchor.getBoundingClientRect();
        const wordRect   = rsImpactoWord.getBoundingClientRect();

        // Transform-origin en el punto exacto de la "p" dentro de la palabra,
        // para que el scale() crezca alrededor de ese punto sin desplazarlo.
        const originXPercent = ((anchorRect.left + anchorRect.width / 2) - wordRect.left) / wordRect.width * 100;
        const originYPercent = ((anchorRect.top + anchorRect.height / 2) - wordRect.top) / wordRect.height * 100;
        gsap.set(rsImpactoWord, { transformOrigin: `${originXPercent}% ${originYPercent}%` });

        // Escala para que "impacto" desborde el viewport ampliamente (portal).
        const scaleByWidth  = (vw * 1.6) / wordRect.width;
        const scaleByHeight = (vh * 1.6) / wordRect.height;
        rsPortalTargetScale = Math.max(scaleByWidth, scaleByHeight);

        // Delta para que el punto de la "p" (el transform-origin recién fijado)
        // quede centrado en el viewport — el scale() no mueve el origin, así
        // que basta una traslación fija, no recalculada por frame.
        const anchorCenterX = anchorRect.left + anchorRect.width / 2;
        const anchorCenterY = anchorRect.top + anchorRect.height / 2;
        rsPortalDeltaX = vw / 2 - anchorCenterX;
        rsPortalDeltaY = vh / 2 - anchorCenterY;
    }
```

- [ ] **Step 2: Añadir la interpolación del zoom dentro de `onUpdate`, después del bloque del anillo**

```js
            // ── 4.2 Zoom exponencial de "impacto" anclado en la "p" (0.20 → 0.65) ──
            if (rsImpactoWord && p4 >= 0.20) {
                if (!rsPortalCaptured) {
                    computeRsPortalConstants();
                    rsPortalCaptured = true;
                }
                const zoomP = clamp01((p4 - 0.20) / 0.45);
                const zoomEased = gsap.parseEase('power2.in')(zoomP);
                gsap.set(rsImpactoWord, {
                    x: rsPortalDeltaX * zoomEased,
                    y: rsPortalDeltaY * zoomEased,
                    scale: 1 + (rsPortalTargetScale - 1) * zoomEased,
                });
            } else if (rsImpactoWord && rsPortalCaptured) {
                gsap.set(rsImpactoWord, { x: 0, y: 0, scale: 1 });
                rsPortalCaptured = false;
            }
```

- [ ] **Step 3: Añadir el reset del portal en `onLeaveBack`**

Reemplazar:
```js
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) { gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 }); }
        },
```
Por:
```js
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) { gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 }); }
            if (rsImpactoWord) { gsap.set(rsImpactoWord, { x: 0, y: 0, scale: 1 }); }
            rsPortalCaptured = false;
        },
```

- [ ] **Step 4: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 5: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 4 — zoom exponencial de impacto anclado en la p (portal)"
```

---

## Task 5: JS — Testimonio (fade-in + fade-out)

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create`)

**Interfaces:**
- Consumes: nada de tasks anteriores directamente.
- Produces: `rsQuote` — consumido por Task 6 (guard `onLeaveBack`).

- [ ] **Step 1: Añadir la captura de `rsQuote`, junto a `const rsRing = ...`**

```js
    const rsQuote = document.querySelector('.rs-testimonio__quote');
```

- [ ] **Step 2: Añadir el fade-in/fade-out dentro de `onUpdate`, después del bloque de zoom**

```js
            // ── 4.2 Testimonio: fade-in (0.50 → 0.65) ──
            if (rsQuote && p4 >= 0.50 && p4 < 0.75) {
                const quoteInP = clamp01((p4 - 0.50) / 0.15);
                gsap.set(rsQuote, { opacity: quoteInP });
            }

            // ── 4.3 Testimonio: fade-out puro (0.75 → 0.85) ──
            if (rsQuote && p4 >= 0.75) {
                const quoteOutP = clamp01((p4 - 0.75) / 0.10);
                gsap.set(rsQuote, { opacity: 1 - quoteOutP });
            }
```

- [ ] **Step 3: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 4: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 4 — fade-in/fade-out del testimonio"
```

---

## Task 6: JS — Revelación de líneas de cierre + CTA + guards finales

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create`)

**Interfaces:**
- Consumes: `rsQuote` (Task 5), `rsImpactoWord`, `rsRing`, `rsUsuariosWords` (Task 3-4).
- Produces: nada consumido por Bloque E directamente (Bloque E añade su propio listener de click sobre `#rsQueAprendiBtn`, ya presente en el DOM desde Task 1 de este plan).

- [ ] **Step 1: Añadir la captura de las líneas y el botón, junto a `const rsQuote = ...`**

```js
    const rsClosingLines = gsap.utils.toArray('.rs-testimonio__line');
    const rsCta          = document.querySelector('.rs-testimonio__cta');
```

- [ ] **Step 2: Añadir la revelación de líneas + entrada del CTA dentro de `onUpdate`, después del bloque de fade-out del testimonio**

```js
            // ── 4.4 Revelación de líneas de cierre con máscara (0.80 → 0.95) ──
            const CLOSING_START = 0.80;
            const CLOSING_STEP  = 0.075; // stagger entre líneas
            rsClosingLines.forEach((line, i) => {
                const lineStart = CLOSING_START + i * CLOSING_STEP;
                const localP = clamp01((p4 - lineStart) / (CLOSING_STEP * 2));
                const eased = gsap.parseEase('power2.out')(localP);
                gsap.set(line, { y: `${100 * (1 - eased)}%` });
            });

            // ── 4.4 CTA: entra coordinado con la última línea (0.90 → 1.00) ──
            if (rsCta) {
                const ctaP = clamp01((p4 - 0.90) / 0.10);
                const ctaEased = gsap.parseEase('power2.out')(ctaP);
                gsap.set(rsCta, { y: 40 * (1 - ctaEased), opacity: ctaEased });
                rsCta.style.pointerEvents = ctaP >= 1 ? 'auto' : 'none';
            }
```

- [ ] **Step 3: Reemplazar los guards `onLeaveBack`/`onLeave` completos para incluir el reset de líneas y CTA**

Reemplazar:
```js
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) { gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 }); }
            if (rsImpactoWord) { gsap.set(rsImpactoWord, { x: 0, y: 0, scale: 1 }); }
            rsPortalCaptured = false;
        },
        onLeave: () => {
            // estado final se aplica en tasks posteriores (cierre + CTA visibles).
        }
```
Por:
```js
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) { gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 }); }
            if (rsImpactoWord) { gsap.set(rsImpactoWord, { x: 0, y: 0, scale: 1 }); }
            rsPortalCaptured = false;
            if (rsQuote) { gsap.set(rsQuote, { opacity: 0 }); }
            gsap.set(rsClosingLines, { y: '100%' });
            if (rsCta) {
                gsap.set(rsCta, { y: 40, opacity: 0 });
                rsCta.style.pointerEvents = 'none';
            }
        },
        onLeave: () => {
            // estado final ya aplicado por el propio onUpdate en p4=1: título
            // invisible, testimonio invisible, cierre + CTA visibles y legibles.
        }
```

- [ ] **Step 4: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 5: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 4 — revelación de líneas de cierre + entrada del CTA"
```

---

## Self-Review

**Spec coverage:**
- HTML: palabras de Fase 3 en spans → Task 1 ✓
- HTML: esqueleto Fase 4 (anillo, testimonio, cierre, CTA) → Task 1 ✓
- CSS Fase 4 → Task 2 ✓
- Fade selectivo de palabras (impacto queda) → Task 3 ✓
- Anillo rotatorio (fade + scale + rotation) → Task 3 ✓
- Zoom exponencial anclado en la "p" → Task 4 ✓
- Testimonio fade-in/fade-out → Task 5 ✓
- Revelación de líneas de cierre + CTA → Task 6 ✓
- Guards `onLeaveBack`/`onLeave` completos → Tasks 3-6 (acumulativo) ✓

**Placeholder scan:** Ninguno.

**Type consistency:**
- `rsUsuariosST`, `rsTestimonioSection`, `rsUsuariosWords`, `rsImpactoWord`, `rsPAnchor`, `rsRing`, `rsPortalCaptured/TargetScale/DeltaX/DeltaY`, `computeRsPortalConstants`, `rsQuote`, `rsClosingLines`, `rsCta` — cada uno declarado una sola vez (Task 3, 4 o 5 según corresponda), reusado sin redeclarar en tasks posteriores dentro del mismo `onUpdate`/closure. ✓
- El bloque `onLeaveBack`/`onLeave` se reemplaza acumulativamente en Tasks 4 y 6 (cada Edit referencia la versión completa anterior) — sin ambigüedad de qué versión reemplazar. ✓
- `clamp01` reusado del scope de Fase 1. ✓
