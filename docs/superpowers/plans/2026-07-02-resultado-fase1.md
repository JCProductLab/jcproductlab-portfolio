# Resultado — Bloque 0 (Infra) + Fase 1 (Mosaico) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la infraestructura compartida (CSS/JS nuevos, punto de inyección) y la Fase 1 completa (mosaico con parallax diferenciado + escala exponencial de la tarjeta central), incluyendo la salida de `razon3Final`.

**Architecture:** Dos archivos CSS nuevos (`resultado.css` stub + `resultado-responsive.css` desktop) y un archivo JS nuevo (`resultado.js`) cargado después de `js/caso-asdeporte.js` para heredar `razonamiento3ST` y la constante `razon3Final` ya declaradas ahí. Un único `ScrollTrigger` pineado de 350vh resuelve las 3 sub-fases de Fase 1 en un solo `onUpdate`, con `onLeaveBack`/`onLeave` desde el diseño inicial (patrón aprendido del fix de la línea fantasma).

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Prefijo `rs-` para toda clase nueva — cero colisión con `cs-`.
- `.rs-mosaico` usa `z-index: 7` (por encima del máximo actual, `.cs-problema` en 6).
- La salida de `razon3Final` es `translateY` puro — **nunca tocar su opacity** (restricción explícita del doc de requerimientos).
- Arquitectura de scroll: GSAP ScrollTrigger `pin: true` + pin-spacer (no `position: sticky`).
- Todo nuevo `ScrollTrigger.create` se ancla al `.end` del ST anterior vía `ScrollTrigger.getAll().find()`.

---

## Task 1: HTML — Scaffolding de Bloque 0 + esqueleto de Fase 1

**Files:**
- Modify: `caso-asdeporte.html:69` (links CSS), `caso-asdeporte.html:76` (script JS), `caso-asdeporte.html:912-913` (contenido antes de `</main>`)

- [ ] **Step 1: Añadir los links CSS nuevos**

En `caso-asdeporte.html`, después de la línea:
```html
    <link rel="stylesheet" href="css/modal-rol-proceso-responsive.css">
```
Añadir:
```html
    <link rel="stylesheet" href="css/resultado.css">
    <link rel="stylesheet" href="css/resultado-responsive.css">
```

- [ ] **Step 2: Añadir el script de resultado.js**

Después de la línea:
```html
    <script type="module" src="js/caso-asdeporte.js" defer></script>
```
Añadir:
```html
    <script type="module" src="js/resultado.js" defer></script>
```
(Va inmediatamente después de `caso-asdeporte.js`, no después de `main.js`: los scripts `defer`/`type="module"` se ejecutan en orden de documento, y `resultado.js` necesita que `caso-asdeporte.js` ya haya corrido — de ahí sale `razonamiento3ST` y `razon3Final`.)

- [ ] **Step 3: Añadir el pin-spacer de Fase 1**

Antes de `</main>` (línea 913), justo después del cierre de `.cs-razonamiento[data-dec="3"]` (`</section>`), insertar:
```html
        <div class="cs-pin-spacer cs-pin-spacer--rs-mosaico" data-phase="rs-mosaico"></div>
```

- [ ] **Step 4: Añadir la sección de Fase 1**

Inmediatamente después del pin-spacer del Step 3 (antes de `</main>`), insertar:
```html
        <!-- ============================================ -->
        <!-- RESULTADOS — FASE 1: Mosaico y expansión     -->
        <!-- Toma el relevo de razon3Final (mismo patrón  -->
        <!-- que las cortinas D2/D3 con la frase anterior). -->
        <!-- ============================================ -->
        <section class="rs-mosaico" aria-label="Resultados: impacto medible">
            <div class="rs-mosaico__intro">
                <span class="rs-mosaico__intro-label">[ RESULTADO ]</span>
                <h3 class="rs-mosaico__intro-title">Cuando la certeza reemplaza la duda, los números se mueven solos.</h3>
            </div>
            <div class="rs-mosaico__grid">
                <div class="rs-mosaico__card" data-size="short" data-col="1">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card" data-size="short" data-col="1">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=600&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card" data-size="tall" data-col="2">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=1000&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card rs-mosaico__card--center" data-size="tall" data-col="3" data-center="true">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&h=1200&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card" data-size="tall" data-col="4">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=1000&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card" data-size="short" data-col="5">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=600&fit=crop" alt="" />
                </div>
                <div class="rs-mosaico__card" data-size="short" data-col="5">
                    <img class="rs-mosaico__card-img" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop" alt="" />
                </div>
            </div>
        </section>
```

- [ ] **Step 5: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): scaffolding HTML de Bloque 0 + esqueleto Fase 1 (mosaico)"
```

---

## Task 2: CSS — resultado.css stub + resultado-responsive.css (Fase 1)

**Files:**
- Create: `css/resultado.css`
- Create: `css/resultado-responsive.css`

- [ ] **Step 1: Crear resultado.css**

```css
/* ============================================
   RESULTADO — Estilos base (mobile/tablet pendiente)
   Fases 1-5 post-Decisiones. Ver resultado-responsive.css
   para el maquetado completo de desktop.
   ============================================ */

.rs-mosaico,
.rs-metricas,
.rs-usuarios,
.rs-testimonio,
.rs-cierre {
    position: relative;
    background-color: var(--color-primary);
    color: var(--color-secondary);
}
```

- [ ] **Step 2: Crear resultado-responsive.css**

```css
@media (min-width: 1200px) {

    /* ============================================
       FASE 1 — Mosaico y expansión
       ============================================ */

    .cs-pin-spacer--rs-mosaico { height: 350vh; }

    .rs-mosaico {
        position: fixed;
        inset: 0;
        z-index: 7;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        /* Estado de reposo: oculto, coincide con el valor que el onLeaveBack
           del ST aplica y con el primer frame antes de que el JS corra. */
        transform: translateY(100vh);
    }

    .rs-mosaico__intro {
        position: absolute;
        top: calc(var(--cs-header-height) + 80px);
        left: 50%;
        transform: translate(-50%, 60px);
        opacity: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 24px;
        will-change: transform, opacity;
    }

    .rs-mosaico__intro-label {
        color: var(--color-accent);
        letter-spacing: 0.05em;
    }

    .rs-mosaico__grid {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 24px;
        padding: calc(var(--cs-header-height) + 200px) 80px 80px;
        align-items: end;
    }

    .rs-mosaico__card {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-mosaico__card[data-size="short"] { aspect-ratio: 1 / 1; }
    .rs-mosaico__card[data-size="tall"] { aspect-ratio: 3 / 4; grid-row: span 2; }

    .rs-mosaico__card-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
```

- [ ] **Step 3: Commit**
```bash
git add css/resultado.css css/resultado-responsive.css
git commit -m "feat(resultado): CSS base + Fase 1 (mosaico) desktop"
```

---

## Task 3: JS — resultado.js skeleton + salida de razon3Final + intro

**Files:**
- Create: `js/resultado.js`

**Interfaces:**
- Consumes: `razonamiento3ST` no existe como variable global — se debe capturar de nuevo vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--decision-3-razonamiento` (mismo patrón que cada gate ya usa). Consume `razon3Final` — **no existe como variable global tampoco** (es un `const` local al scope de `js/caso-asdeporte.js`): debe capturarse con un `document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion-final')` propio dentro de `resultado.js` (archivo separado, closure distinto).
- Produces: nada consumido por tasks posteriores de este plan (Task 4 y 5 amplían el mismo `ScrollTrigger.create` en el mismo archivo).

- [ ] **Step 1: Crear resultado.js con el guard de entrada y la captura de razon3Final**

```js
// ============================================
// CASO ASDEPORTE — RESULTADOS (Fases 1-5)
// Archivo separado de caso-asdeporte.js (que ya supera las 3600 líneas).
// Requiere que caso-asdeporte.js haya corrido antes (mismo documento,
// scripts type="module" + defer se ejecutan en orden de documento) para
// que cs-pin-spacer--decision-3-razonamiento ya tenga su ScrollTrigger.
// ============================================

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // FASE 1 — Mosaico y expansión
    // Toma el relevo de razon3Final (mismo patrón "OPTION-1: acoplamiento
    // controlado" que ya usan las cortinas D2/D3 con la frase anterior).
    // Anclado a razonamiento3ST.end.
    // ============================================

    const razonamiento3ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3-razonamiento')
    );

    // Closure propio: NO existe la constante razon3Final de caso-asdeporte.js
    // en este scope (archivo separado). Se vuelve a resolver el selector.
    const razon3Final = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion-final');

    const rsMosaicoSection = document.querySelector('.rs-mosaico');
    const rsIntro          = document.querySelector('.rs-mosaico__intro');

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-mosaico',
        start: () => razonamiento3ST ? razonamiento3ST.end : 0,
        end: () => '+=' + (window.innerHeight * 3.5),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p1 = self.progress;

            // ── Salida de razon3Final (0.00 → 0.20) ──
            // translateY puro, SIN tocar opacity (restricción del doc).
            if (razon3Final) {
                const exitP = clamp01(p1 / 0.20);
                gsap.set(razon3Final, { y: -exitP * vh });
            }

            // ── Entrada de [ RESULTADO ] + título (0.10 → 0.25) ──
            if (rsIntro) {
                const inP = clamp01((p1 - 0.10) / 0.15);
                const inEased = gsap.parseEase('power2.out')(inP);
                gsap.set(rsIntro, { y: 60 * (1 - inEased), opacity: inEased });
            }

            // ── Salida de [ RESULTADO ] + título (0.55 → 0.70) ──
            if (rsIntro && p1 >= 0.55) {
                const outP = clamp01((p1 - 0.55) / 0.15);
                gsap.set(rsIntro, { y: -outP * vh, opacity: 1 - outP });
            }
        },
        onLeaveBack: () => {
            if (razon3Final) { gsap.set(razon3Final, { y: 0 }); }
            if (rsIntro)     { gsap.set(rsIntro, { y: 60, opacity: 0 }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
        },
        onLeave: () => {
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: 0 }); }
        }
    });
}
```

- [ ] **Step 2: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 3: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 1 — salida de razon3Final + entrada/salida de intro"
```

---

## Task 4: JS — Fase 1: parallax de las cards del mosaico

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create` de Task 3, en dos puntos: antes del ST para declarar las constantes de las cards, y dentro de `onUpdate`)

**Interfaces:**
- Consumes: nada de tasks anteriores directamente (selectores propios).
- Produces: nada consumido por Task 5 directamente (Task 5 añade su propia lógica al mismo `onUpdate`).

- [ ] **Step 1: Añadir la captura de las cards, ANTES del `ScrollTrigger.create` (después de la línea `const rsIntro = ...`)**

```js
    const rsCards = gsap.utils.toArray('.rs-mosaico__card');

    // Offset inicial de entrada por tamaño de card — las "tall" arrancan
    // más abajo que las "short", por eso via a mayor velocidad relativa
    // en el mismo rango de progreso (v_tall > v_short del doc).
    const RS_CARD_OFFSET = { short: 220, tall: 420 };
```

- [ ] **Step 2: Añadir la interpolación de las cards dentro de `onUpdate`, después del bloque de salida de `rsIntro`**

```js
            // ── Mosaico: aparición + parallax diferenciado (0.20 → 0.65) ──
            // Todas las cards convergen exactamente a offset 0 en p1=0.65.
            const gridP = clamp01((p1 - 0.20) / (0.65 - 0.20));
            const gridEased = gsap.parseEase('power2.out')(gridP);
            rsCards.forEach((card) => {
                const size = card.dataset.size;
                const offset = RS_CARD_OFFSET[size] || RS_CARD_OFFSET.short;
                gsap.set(card, {
                    y: offset * (1 - gridEased),
                    opacity: gridEased,
                });
            });
```

- [ ] **Step 3: Añadir el reset de las cards en `onLeaveBack` (dentro del objeto ya existente, junto a los otros `gsap.set` de reset)**

Reemplazar:
```js
        onLeaveBack: () => {
            if (razon3Final) { gsap.set(razon3Final, { y: 0 }); }
            if (rsIntro)     { gsap.set(rsIntro, { y: 60, opacity: 0 }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
        },
```
Por:
```js
        onLeaveBack: () => {
            if (razon3Final) { gsap.set(razon3Final, { y: 0 }); }
            if (rsIntro)     { gsap.set(rsIntro, { y: 60, opacity: 0 }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
            rsCards.forEach((card) => {
                const size = card.dataset.size;
                const offset = RS_CARD_OFFSET[size] || RS_CARD_OFFSET.short;
                gsap.set(card, { y: offset, opacity: 0 });
            });
        },
```

- [ ] **Step 4: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 5: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 1 — parallax diferenciado de las cards del mosaico"
```

---

## Task 5: JS — Fase 1: aislamiento y escala exponencial de la card central

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create`)

**Interfaces:**
- Consumes: nada de tasks anteriores directamente.
- Produces: nada (última pieza de Fase 1; Bloque B capturará su propio ST vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--rs-mosaico`).

- [ ] **Step 1: Añadir la captura de la card central y el flag de promoción, después de `const RS_CARD_OFFSET = ...`**

```js
    const rsCenterCard = document.querySelector('.rs-mosaico__card--center');
    let rsCenterPromoted = false;
    let rsCenterRect = null;
```

- [ ] **Step 2: Añadir la lógica de aislamiento + escala dentro de `onUpdate`, después del bloque del mosaico (parallax)**

```js
            // ── Aislamiento + escala exponencial de la card central (0.80 → 1.00) ──
            if (rsCenterCard) {
                if (p1 >= 0.80) {
                    if (!rsCenterPromoted) {
                        rsCenterRect = rsCenterCard.getBoundingClientRect();
                        gsap.set(rsCenterCard, {
                            position: 'fixed',
                            top: rsCenterRect.top,
                            left: rsCenterRect.left,
                            width: rsCenterRect.width,
                            height: rsCenterRect.height,
                            margin: 0,
                            zIndex: 20,
                        });
                        rsCenterPromoted = true;
                    }
                    const scaleP = clamp01((p1 - 0.80) / 0.20);
                    const scaleEased = gsap.parseEase('power2.in')(scaleP);
                    const newTop    = rsCenterRect.top * (1 - scaleEased);
                    const newLeft   = rsCenterRect.left * (1 - scaleEased);
                    const newWidth  = rsCenterRect.width + (vw() - rsCenterRect.width) * scaleEased;
                    const newHeight = rsCenterRect.height + (vh - rsCenterRect.height) * scaleEased;
                    gsap.set(rsCenterCard, {
                        top: newTop,
                        left: newLeft,
                        width: newWidth,
                        height: newHeight,
                        borderRadius: 24 * (1 - scaleEased),
                    });
                } else if (rsCenterPromoted) {
                    // Reversa: si el usuario sube antes de p1=0.80, se
                    // restaura el layout normal del grid.
                    gsap.set(rsCenterCard, {
                        position: 'relative',
                        top: 'auto',
                        left: 'auto',
                        width: '100%',
                        height: '100%',
                        margin: 0,
                        zIndex: 'auto',
                        borderRadius: 24,
                    });
                    rsCenterPromoted = false;
                    rsCenterRect = null;
                }
            }
```

- [ ] **Step 3: Añadir el helper `vw()`, junto a `clamp01` (antes del `ScrollTrigger.create`)**

```js
    const vw = () => window.innerWidth;
```

- [ ] **Step 4: Añadir el reset de la card central en `onLeaveBack`**

Reemplazar el bloque `onLeaveBack` completo por:
```js
        onLeaveBack: () => {
            if (razon3Final) { gsap.set(razon3Final, { y: 0 }); }
            if (rsIntro)     { gsap.set(rsIntro, { y: 60, opacity: 0 }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
            rsCards.forEach((card) => {
                const size = card.dataset.size;
                const offset = RS_CARD_OFFSET[size] || RS_CARD_OFFSET.short;
                gsap.set(card, { y: offset, opacity: 0 });
            });
            if (rsCenterCard) {
                gsap.set(rsCenterCard, {
                    position: 'relative',
                    top: 'auto',
                    left: 'auto',
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    zIndex: 'auto',
                    borderRadius: 24,
                });
                rsCenterPromoted = false;
                rsCenterRect = null;
            }
        },
```

- [ ] **Step 5: Verificar sintaxis**

Run: `node --check js/resultado.js`
Expected: sin salida (sin errores)

- [ ] **Step 6: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 1 — aislamiento y escala exponencial de la card central"
```

---

## Self-Review

**Spec coverage:**
- Bloque 0: links CSS/JS, punto de inyección → Task 1 ✓
- `css/resultado.css` stub → Task 2 ✓
- `css/resultado-responsive.css` desktop Fase 1 → Task 2 ✓
- `js/resultado.js`, guard de entrada → Task 3 ✓
- Salida de `razon3Final` (sin fade) → Task 3 ✓
- Entrada/salida de `[ RESULTADO ]` + título → Task 3 ✓
- Aparición + parallax diferenciado de cards → Task 4 ✓
- Aislamiento + escala exponencial de card central → Task 5 ✓
- Guards `onLeaveBack`/`onLeave` desde el diseño inicial → Tasks 3, 4, 5 (acumulativo) ✓
- z-index 7 → Task 2 (CSS) ✓

**Placeholder scan:** Ninguno. Todo el código está completo.

**Type consistency:**
- `razonamiento3ST`, `razon3Final`, `rsMosaicoSection`, `rsIntro`, `rsCards`, `RS_CARD_OFFSET`, `rsCenterCard`, `rsCenterPromoted`, `rsCenterRect`, `clamp01`, `vw` — todos declarados una sola vez en Task 3 (los que corresponden) y reusados sin redeclarar en Tasks 4-5 dentro del mismo archivo/closure. ✓
- El `onLeaveBack` se reemplaza acumulativamente en cada task (Task 4 lo reemplaza para añadir cards, Task 5 lo reemplaza de nuevo para añadir la card central) — cada `Edit` referencia el bloque completo anterior, sin ambigüedad de qué versión reemplazar. ✓
- `vh` es un parámetro local de `onUpdate` (declarado en Task 3 como `const vh = window.innerHeight;`), reusado directamente en Tasks 4 y 5 sin redeclarar — están dentro del mismo `onUpdate`. ✓
