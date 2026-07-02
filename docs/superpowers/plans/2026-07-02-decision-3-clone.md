# Decision 3 — Clone from Decision 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clonar las 5 subsecciones completas de Decisión 2 (Cortina, Expansión, El Problema, La Decisión, El Razonamiento) para Decisión 3, con contenido placeholder idéntico y lógica de animación exacta.

**Architecture:** Tres capas — HTML (5 pin spacers + 4 secciones de contenido), CSS (alturas + override de posición de cortina-3 + custom props de descriptores), JS (5 ScrollTriggers encadenados: Cortina → Expansión → Problema → La Decisión → Razonamiento). El JS se añade al final del archivo (antes de la llave de cierre `}` en la línea 3002), después del bloque de Razonamiento 2. Todos los selectores cambian de `[data-dec="2"]` a `[data-dec="3"]`; variables con sufijo `3` o prefijo `_r3`. La Cortina D3 además asume la responsabilidad de animar la SALIDA de `razon2Final` (la frase final del Razonamiento 2), replicando el acoplamiento que la Cortina D2 ya tiene con `razonFinal` (D1).

**Tech Stack:** HTML5, CSS custom properties, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Selectores scopeados con `[data-dec="3"]` — nunca selectores globales sin scope (colisionarían con D1/D2).
- Todas las variables JS nuevas usan sufijo `3` o prefijo `_r3` — cero colisión de nombres con D1/D2.
- Cada `ScrollTrigger.create` nuevo se ancla al `.end` del ST anterior vía `ScrollTrigger.getAll().find()` — nunca un `start` fijo en píxeles/vh.
- Contenido: placeholder idéntico al de Decisión 2 (mismos textos, misma imagen Unsplash). El usuario lo reemplaza después.

---

## Task 1: HTML — Pin Spacers

**Files:**
- Modify: `caso-asdeporte.html:323`

- [ ] **Step 1: Añadir los 5 pin spacers de D3**

En `caso-asdeporte.html`, después de la línea:
```html
        <div class="cs-pin-spacer cs-pin-spacer--decision-2-razonamiento" data-phase="decision-2-razonamiento"></div>
```
Añadir:
```html
        <div class="cs-pin-spacer cs-pin-spacer--decision-3"             data-phase="decision-3"></div>
        <div class="cs-pin-spacer cs-pin-spacer--decision-3-expansion"   data-phase="decision-3-expansion"></div>
        <div class="cs-pin-spacer cs-pin-spacer--decision-3-problema"    data-phase="decision-3-problema"></div>
        <div class="cs-pin-spacer cs-pin-spacer--decision-3-ladecision"   data-phase="decision-3-ladecision"></div>
        <div class="cs-pin-spacer cs-pin-spacer--decision-3-razonamiento" data-phase="decision-3-razonamiento"></div>
```

- [ ] **Step 2: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(d3): añadir pin spacers de decisión 3 (cortina, expansión, problema, ladecision, razonamiento)"
```

---

## Task 2: HTML — Secciones de contenido

**Files:**
- Modify: `caso-asdeporte.html` (antes de `</main>`, después de `cs-razonamiento[data-dec="2"]`)

- [ ] **Step 1: Insertar cs-decision[data-dec="3"] (cortina)**

Después del cierre de `cs-razonamiento[data-dec="2"]` (`</section>`, justo antes de `</main>`), insertar:
```html
        <!-- ============================================ -->
        <!-- DECISIÓN 3 — clon de la cortina de Decisión 2. -->
        <!-- Vive FUERA del stage (hermana del Razonamiento -->
        <!-- en <main>), igual que la cortina-2.            -->
        <!-- Contenido placeholder: se reemplazará.         -->
        <!-- ============================================ -->
        <section class="cs-decision" data-dec="3" aria-label="Decisión 3 del caso">

            <div class="cs-decision__bg" aria-hidden="true"></div>

            <div class="cs-decision__content">
                <span class="cs-label cs-decision__label">[ Decisión 3 ]</span>
                <h3 class="cs-decision-title cs-decision__title">[Decisión 3 placeholder]</h3>
            </div>

            <div class="cs-decision__media">
                <img class="cs-decision__media-img"
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                     alt="" aria-hidden="true">
            </div>

        </section>
```

- [ ] **Step 2: Insertar cs-problema[data-dec="3"]**

Inmediatamente después, insertar:
```html
        <!-- ============================================ -->
        <!-- EL PROBLEMA 3 — clon de El Problema 2.        -->
        <!-- Contenido placeholder: se reemplazará.         -->
        <!-- ============================================ -->
        <section class="cs-problema" data-dec="3" aria-label="El problema de Decisión 3">
            <div class="cs-problema__content">
                <h3 class="cs-decision-text cs-problema__title">[ El problema ]</h3>
                <div class="cs-problema__grid">
                    <div class="cs-problema__card">
                        <span class="cs-problema__bullet" aria-hidden="true"></span>
                        <p class="large-paragraph cs-problema__text">Marketing tenía meses construyendo la narrativa y el CEO veía en "Tribu", LA RED SOCIAL interna de atletas.</p>
                    </div>
                    <div class="cs-problema__card">
                        <span class="cs-problema__bullet" aria-hidden="true"></span>
                        <p class="large-paragraph cs-problema__text">Era la gran apuesta estratégica para dejar de ser una ticketera y convertirse en una comunidad deportiva.</p>
                    </div>
                    <div class="cs-problema__card">
                        <span class="cs-problema__bullet" aria-hidden="true"></span>
                        <p class="large-paragraph cs-problema__text">El roadmap destinaba el 40% del presupuesto de desarrollo a feeds sociales y gamificación.</p>
                    </div>
                    <div class="cs-problema__card">
                        <span class="cs-problema__bullet" aria-hidden="true"></span>
                        <p class="large-paragraph cs-problema__text">Era una idea emocionalmente atractiva y políticamente respaldada. Nadie en la mesa la había cuestionado.</p>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 3: Insertar cs-decision-mc[data-dec="3"]**

Inmediatamente después, insertar:
```html
        <!-- ============================================ -->
        <!-- LA DECISIÓN 3 — clon de La Decisión 2.       -->
        <!-- Contenido placeholder: se reemplazará.       -->
        <!-- ============================================ -->
        <section class="cs-decision-mc" data-dec="3" aria-label="La decisión 3 del caso">
            <h3 class="cs-decision-text cs-decision-mc__title">[ La decisión ]</h3>

            <div class="cs-decision-mc__stage">
                <span class="cs-decision-mc__ring" aria-hidden="true"></span>
                <div class="cs-decision-mc__media">
                    <img class="cs-decision-mc__img"
                         src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&h=800&fit=crop"
                         alt="" />
                </div>
                <div class="cs-decision-mc__text-wrap">
                    <p class="cs-decision-mc__text cs-body-xxl">Propuse mover Tribu fuera del MVP y redirigir todos esos recursos al motor de búsqueda y al flujo de pago. En una sala donde el CEO ya imaginaba la campaña de lanzamiento, esa propuesta generó un silencio que se sintió muy largo.</p>
                </div>
            </div>
        </section>
```

- [ ] **Step 4: Insertar cs-razonamiento[data-dec="3"]**

Inmediatamente después (antes de `</main>`), insertar:
```html
        <!-- ============================================ -->
        <!-- EL RAZONAMIENTO 3 — clon del Razonamiento 2. -->
        <!-- Contenido placeholder: se reemplazará.       -->
        <!-- ============================================ -->
        <section class="cs-razonamiento" data-dec="3" aria-label="El razonamiento de Decisión 3">

            <div class="cs-razonamiento__fixed">
                <h3 class="cs-decision-text cs-razonamiento__label">[ El razonamiento ]</h3>
                <div class="cs-razonamiento__metric" data-screen="1">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">90.8%</span>
                </div>
                <div class="cs-razonamiento__metric" data-screen="2">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">65%</span>
                </div>
                <div class="cs-razonamiento__metric" data-screen="3">
                    <i class="ph ph-check cs-razonamiento__check" aria-hidden="true"></i>
                    <span class="cs-headline cs-razonamiento__metric-value">5%</span>
                </div>
            </div>

            <div class="cs-razonamiento__rail">
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="1">De usuarios abandonaba antes de completar una inscripción. No tenía sentido invertir en funcionalidad social cuando la caja registradora tenía una fuga de ese tamaño.</p>
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="2">De los tickets de soporte eran por fallos en pagos. Cero tickets pedían mejoras sociales.</p>
                <p class="cs-body-xxl cs-razonamiento__descriptor" data-screen="3">Tasa de interacción de &lsquo;Tribu&rsquo;. La mayoría de los atletas ya usaba Strava para rendimiento y WhatsApp para comunidad. No teníamos una comunidad, teníamos un pueblo fantasma.</p>
            </div>

            <div class="cs-razonamiento__conclusion">
                <p class="cs-body-xxl-italic cs-razonamiento__conclusion-body">&ldquo;El argumento se cerró solo. No podíamos competir en un terreno que ya habíamos perdido. Primero había que ganarse el derecho de hablar con el usuario&hellip;</p>
                <p class="cs-body-xxl-italic cs-razonamiento__conclusion-final">arreglando el pago.&rdquo;</p>
            </div>
        </section>
```

- [ ] **Step 5: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(d3): añadir secciones cs-decision, cs-problema, cs-decision-mc y cs-razonamiento para decisión 3"
```

---

## Task 3: CSS — Pin spacers, override de cortina-3 y descriptores D3

**Files:**
- Modify: `css/decisiones-responsive.css`

- [ ] **Step 1: Añadir alturas de pin spacers y custom props de descriptores D3**

Después de:
```css
    .cs-pin-spacer--decision-2-ladecision  { height: 100vh; }
    .cs-pin-spacer--decision-2-razonamiento { height: 100vh; }
```
Añadir:
```css
    .cs-pin-spacer--decision-3             { height: 100vh; }
    .cs-pin-spacer--decision-3-expansion   { height: 80vh; }
    .cs-pin-spacer--decision-3-problema    { height: 100vh; }
    .cs-pin-spacer--decision-3-ladecision  { height: 100vh; }
    .cs-pin-spacer--decision-3-razonamiento { height: 100vh; }

    /* Descriptores de Razonamiento 3 — usan custom props propias
       para no pisarse con las de Razonamiento 1/2. El JS escribe
       --razon3-desc2-top y --razon3-desc3-top en cada init. */
    .cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="2"] {
        top: var(--razon3-desc2-top, 135.56%);
    }
    .cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="3"] {
        top: var(--razon3-desc3-top, 332%);
    }
```

- [ ] **Step 2: Añadir override de posición/z-index de la cortina-3**

Después de la regla:
```css
    .cs-decision[data-dec="2"] .cs-decision__content {
        left: 96px;
    }
```
Añadir:
```css
    /* Decisión 3 — mismo override que Decisión 2: la cortina-3 vive
       FUERA del stage (hermana del Razonamiento en <main>), por eso
       position:fixed (no absolute) y z-index:5 a nivel de documento. */
    .cs-decision[data-dec="3"] {
        position: fixed;
        inset: 0;
        z-index: 5;
    }

    .cs-decision[data-dec="3"] .cs-decision__content {
        left: 96px;
    }
```

- [ ] **Step 3: Commit**
```bash
git add css/decisiones-responsive.css
git commit -m "feat(d3): añadir CSS pin spacers, override de cortina-3 y descriptores de razonamiento 3"
```

---

## Task 4: JS — Cortina D3 (+ salida de razon2Final)

**Files:**
- Modify: `js/caso-asdeporte.js` (al final del archivo, después del cierre del ST de Razonamiento 2, antes de la llave de cierre `}` en la línea 3002)

**Interfaces:**
- Consumes: `razon2Final` (const ya declarada en el bloque de Razonamiento 2, mismo scope de función), `clipEase`, `subProgress` (helpers ya declarados arriba en el archivo).
- Produces: `decision3Panel`, `decision3Label`, `decision3Title`, `decision3Media` (consumidos por Task 5).

- [ ] **Step 1: Añadir el bloque completo de la Cortina D3**

Al final de `js/caso-asdeporte.js`, después del cierre del ST de Razonamiento 2 (el `});` que sigue al `onLeave` con `razon2Body`), añadir:

```js
    // ============================================
    // DECISIÓN 3 — Cortina (réplica de la cortina-2)
    // Pino .cs-pin-spacer--decision-3. Contiguo al final del pin del
    // Razonamiento de Decisión 2. Anclado vía razonamiento2ST.end.
    //
    // UBICACIÓN EN EL ARCHIVO: al final de la función, DESPUÉS del ST
    // del Razonamiento-2. La captura de `razonamiento2ST` con
    // ScrollTrigger.getAll().find() debe encontrar el ST ya creado.
    //
    // DIFERENCIAS con cortina-2: ninguna en la lógica, solo sufijo 3
    // en vez de 2. Vive FUERA del stage igual que cortina-2 (ver
    // override .cs-decision[data-dec="3"] en decisiones-responsive.css).
    //
    // Asume la responsabilidad de sacar razon2Final (frase final del
    // Razonamiento 2) — mismo patrón "OPTION-1: acoplamiento
    // controlado" que cortina-2 usa con razonFinal (D1).
    // ============================================

    const decision3Panel = document.querySelector('.cs-decision[data-dec="3"]');
    const decision3Label = document.querySelector('.cs-decision[data-dec="3"] .cs-decision__label');
    const decision3Title = document.querySelector('.cs-decision[data-dec="3"] .cs-decision__title');
    const decision3Media = document.querySelector('.cs-decision[data-dec="3"] .cs-decision__media');

    // Captura del ST del Razonamiento-2 para anclar el start al final real.
    const razonamiento2ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-2-razonamiento')
    );

    // ── Salida de razon2Final durante la cortina-3 ──
    // Réplica exacta del bloque de salida de razonFinal en cortina-2.
    // razon2Final ya está declarado como const en el bloque de
    // Razonamiento 2 (mismo scope de función) — no hace falta
    // re-querySelector.
    let razon2FinalExitOriginalX = 0;
    let razon2FinalExitCaptured = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-3',
        start: () => razonamiento2ST ? razonamiento2ST.end : 0,
        end: () => '+=' + (window.innerHeight * 4.73),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;

            const clipProgress = clipEase(self.progress);
            gsap.set(decision3Panel, {
                clipPath: `inset(0 0 0 ${(1 - clipProgress) * 100}%)`
            });

            const labelP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.25, 0.70));
            const titleP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.33, 0.72));
            const mediaP = gsap.parseEase('none')(subProgress(self.progress, 0.45, 1.0));
            gsap.set(decision3Label, { opacity: labelP, x: 860 * (1 - labelP) });
            gsap.set(decision3Title, { opacity: titleP, x: 800 * (1 - titleP) });
            gsap.set(decision3Media, { opacity: mediaP, x: 400 * (1 - mediaP) });

            if (razon2Final) {
                if (!razon2FinalExitCaptured) {
                    const inlineStyle = razon2Final.style.transform;
                    let tx = 0;
                    const matrixMatch = inlineStyle.match(/matrix\(([^)]+)\)/);
                    if (matrixMatch) {
                        tx = parseFloat(matrixMatch[1].split(',')[4]);
                    } else {
                        const translateMatch = inlineStyle.match(/translate\(\s*([-\d.]+)/);
                        if (translateMatch) {
                            tx = parseFloat(translateMatch[1]);
                        }
                    }
                    razon2FinalExitOriginalX = tx;
                    razon2FinalExitCaptured = true;
                }
                const vw = window.innerWidth;
                gsap.set(razon2Final, {
                    x: razon2FinalExitOriginalX - self.progress * vw * 0.3,
                    opacity: 1 - self.progress
                });
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d3): Cortina D3 anclada a razonamiento2ST.end, con salida de razon2Final"
```

---

## Task 5: JS — Expansión D3

**Files:**
- Modify: `js/caso-asdeporte.js` (inmediatamente después del bloque de Task 4)

**Interfaces:**
- Consumes: `decision3Media`, `decision3Label`, `decision3Title` (de Task 4), `margin`, `headerH`, `clipEase` (helpers globales).
- Produces: nada consumido por tasks posteriores (Task 6 captura su propio ST vía `ScrollTrigger.getAll().find()`).

- [ ] **Step 1: Añadir el bloque completo de la Expansión D3**

```js
    // ============================================
    // DECISIÓN 3 — Expansión (réplica de la expansión-2)
    // Pino .cs-pin-spacer--decision-3-expansion. Contiguo al final del
    // pin de la cortina-3. Misma lógica de dos fases.
    //
    // DIFERENCIAS con expansión-2:
    //   - Anclada a cortina3ST.end.
    //   - Usa decision3Media.
    //   - Flag independiente: gate4Initialized3.
    // ============================================

    const cortina3ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3')
    );

    let gate4Initialized3 = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-3-expansion',
        start: () => cortina3ST ? cortina3ST.end : 0,
        end: () => '+=' + (window.innerHeight * 0.8),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;

            if (!gate4Initialized3) {
                gsap.set(decision3Media, {
                    left: window.innerWidth / 2,
                    bottom: margin,
                    width: 'auto',
                    height: 'auto'
                });
                gate4Initialized3 = true;
            }

            const p = self.progress;
            const vw = window.innerWidth;

            if (p <= 0.7) {
                const f1 = p / 0.7;
                const f1e = clipEase(f1);

                const newLeft = vw / 2 + (margin - vw / 2) * f1e;
                const textX = newLeft - vw / 2;

                gsap.set(decision3Media, {
                    left: newLeft,
                    right: margin,
                    top: headerH + margin,
                    bottom: margin,
                    borderRadius: 24
                });
                gsap.set(decision3Label, { x: textX, opacity: 1 - f1e });
                gsap.set(decision3Title, { x: textX, opacity: 1 - f1e });
            } else {
                const f2 = (p - 0.7) / 0.3;
                const f2e = gsap.parseEase('power1.out')(f2);

                gsap.set(decision3Media, {
                    top: (headerH + margin) * (1 - f2e),
                    right: margin * (1 - f2e),
                    left: margin * (1 - f2e),
                    bottom: margin * (1 - f2e),
                    borderRadius: 24 * (1 - f2e)
                });
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d3): Expansión D3 anclada a cortina3ST.end"
```

---

## Task 6: JS — El Problema D3

**Files:**
- Modify: `js/caso-asdeporte.js` (inmediatamente después del bloque de Task 5)

**Interfaces:**
- Consumes: nada de tasks anteriores directamente (captura su propio ST vía `ScrollTrigger.getAll().find()`).
- Produces: nada consumido directamente por Task 7 (Task 7 captura su propio ST).

- [ ] **Step 1: Añadir el bloque completo de El Problema D3**

```js
    // ============================================
    // DECISIÓN 3 — El Problema 3 (réplica de El Problema 2)
    // Pino .cs-pin-spacer--decision-3-problema. Contiguo al final del
    // pin de la expansión-3. Anclado vía expansion3ST.end.
    //
    // DIFERENCIAS con El Problema 2:
    //   - Anclado a expansion3ST.end.
    //   - Queries scopeadas a [data-dec="3"].
    //   - Variables sufijadas (problema3*).
    //   - .cs-decision-mc[data-dec="3"] todavía NO existe en el DOM
    //     activo de esta fase (se construye en Task 2, ya existe en
    //     el DOM, solo está fuera de flujo hasta que este gate y el
    //     de La Decisión 3 la gobiernen).
    // ============================================

    const expansion3ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3-expansion')
    );

    const problema3Title = document.querySelector('.cs-problema[data-dec="3"] .cs-problema__title');
    const problema3Cards = gsap.utils.toArray('.cs-problema[data-dec="3"] .cs-problema__card');
    const problema3Nodes = problema3Title ? [problema3Title, ...problema3Cards] : problema3Cards;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-3-problema',
        start: () => expansion3ST ? expansion3ST.end : 0,
        end: () => '+=' + (window.innerHeight * 2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 2;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            gsap.set('.cs-decision[data-dec="3"]', { y: -eased * vh });
            gsap.set('.cs-problema[data-dec="3"]', { y: vh - eased * vh });

            gsap.set('.cs-decision-mc[data-dec="3"]', { y: curtainP >= 1 ? 0 : '100vh' });

            const CASCADE_START = 1 / 2;
            const CASCADE_END = 1;
            const STEP = 1 / 3;
            const cascadeP = gsap.utils.clamp(0, 1,
                (self.progress - CASCADE_START) / (CASCADE_END - CASCADE_START)
            );

            for (let i = 0; i < problema3Nodes.length; i++) {
                const nodeStart = i * STEP / 2;
                const nodeEnd = nodeStart + STEP;
                const localP = gsap.utils.clamp(0, 1, (cascadeP - nodeStart) / STEP);
                const localEased = gsap.parseEase('power2.out')(localP);
                gsap.set(problema3Nodes[i], {
                    y: 400 * (1 - localEased),
                    opacity: localEased
                });
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d3): El Problema D3 anclado a expansion3ST.end"
```

---

## Task 7: JS — Gate B D3 + Gate D D3 (La Decisión 3)

**Files:**
- Modify: `js/caso-asdeporte.js` (inmediatamente después del bloque de Task 6)

**Interfaces:**
- Consumes: nada de tasks anteriores directamente (captura `problemaST3` vía `ScrollTrigger.getAll().find()`).
- Produces: nada consumido directamente por Task 8 (Task 8 captura su propio ST vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--decision-3-ladecision`).

- [ ] **Step 1: Añadir el bloque completo de Gate B D3 + Gate D D3**

```js
    // ============================================
    // Gate B D3 — Cortina vertical de "La Decisión 3"
    // Gate D D3 — Animaciones internas de La Decisión 3
    // Clon exacto de Gate B D2 + Gate D D2.
    // Anclado a problemaST3.end.
    // ============================================

    const problemaST3 = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3-problema')
    );

    const decisionImg3     = document.querySelector('.cs-decision-mc[data-dec="3"] .cs-decision-mc__img');
    const decisionMedia3   = document.querySelector('.cs-decision-mc[data-dec="3"] .cs-decision-mc__media');
    const decisionRing3    = document.querySelector('.cs-decision-mc[data-dec="3"] .cs-decision-mc__ring');
    const decisionText3    = document.querySelector('.cs-decision-mc[data-dec="3"] .cs-decision-mc__text');
    const decisionTextWrap3 = document.querySelector('.cs-decision-mc[data-dec="3"] .cs-decision-mc__text-wrap');
    const ORIGINAL_TEXT3   = decisionText3 ? decisionText3.textContent : '';

    let decisionTextLines3 = [];

    const splitDecisionText3 = (p) => {
        if (!p) return [];
        if (p.dataset.lineSplitReady === 'true') {
            const words = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
            const groups = {};
            words.forEach((w) => {
                const i = w.dataset.lineIndex;
                (groups[i] ||= []).push(w);
            });
            return Object.keys(groups)
                .sort((a, b) => +a - +b)
                .map((k) => groups[k]);
        }
        const tokens = p.textContent.replace(/\s+/g, ' ').trim().split(' ');
        if (!tokens.length) return [];
        p.textContent = '';
        tokens.forEach((word, idx) => {
            if (idx > 0) p.appendChild(document.createTextNode(' '));
            const span = document.createElement('span');
            span.className = 'cs-decision-mc__word';
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, opacity';
            p.appendChild(span);
        });
        const wordEls = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
        const lineMap = new Map();
        wordEls.forEach((el) => {
            const top = Math.round(el.offsetTop);
            if (!lineMap.has(top)) lineMap.set(top, []);
            lineMap.get(top).push(el);
        });
        const sortedTops = Array.from(lineMap.keys()).sort((a, b) => a - b);
        const lines = sortedTops.map((top, i) => {
            const words = lineMap.get(top);
            words.forEach((w) => (w.dataset.lineIndex = String(i)));
            return words;
        });
        p.dataset.lineSplitReady = 'true';
        return lines;
    };

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            decisionTextLines3 = splitDecisionText3(decisionText3);
            ScrollTrigger.refresh();
        });
    } else {
        decisionTextLines3 = splitDecisionText3(decisionText3);
    }

    let resizeTimer3;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer3);
        resizeTimer3 = setTimeout(() => {
            if (!decisionText3) return;
            decisionText3.dataset.lineSplitReady = 'false';
            Array.from(decisionText3.querySelectorAll('.cs-decision-mc__word'))
                .forEach(w => w.remove());
            decisionText3.textContent = ORIGINAL_TEXT3;
            decisionTextLines3 = splitDecisionText3(decisionText3);
            ScrollTrigger.refresh();
        }, 200);
    });

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-3-ladecision',
        start: () => problemaST3 ? problemaST3.end : 0,
        end: () => '+=' + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 4;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            gsap.set('.cs-problema[data-dec="3"]', { y: -eased * vh });

            if (decisionMedia3) {
                const IMG_START = 0;
                const IMG_END   = 0.50;
                const imgP = gsap.utils.clamp(0, 1, (self.progress - IMG_START) / (IMG_END - IMG_START));
                const imgE = gsap.parseEase('power1.inOut')(imgP);
                const vw = window.innerWidth;
                const INIT_W = 400;
                const INIT_H = 560;
                const BORDER_RADIUS = 20;
                const newW = INIT_W + (vw - INIT_W) * imgE;
                const newH = INIT_H + (vh - INIT_H) * imgE;
                const newBR = BORDER_RADIUS * (1 - imgE);
                gsap.set(decisionMedia3, {
                    width: newW + 'px',
                    height: newH + 'px',
                    borderRadius: newBR + 'px',
                });
            }

            if (decisionRing3) {
                const ringP = gsap.utils.clamp(0, 1, (self.progress - 0) / 0.50);
                const ringEased = gsap.parseEase('power1.inOut')(ringP);
                const ringScale = 1.0 + (2.75 - 1.0) * ringEased;
                const ringRotation = 360 * ringP;
                const ringOpacity = gsap.utils.clamp(0, 1, 1 - Math.max(0, ringScale - 2.3) / (2.75 - 2.3));
                gsap.set(decisionRing3, {
                    x: -377,
                    y: -240,
                    scale: ringScale,
                    rotation: ringRotation,
                    opacity: ringOpacity,
                });
            }

            if (decisionTextWrap3) {
                const textP = gsap.utils.clamp(0, 1, (self.progress - 0.20) / 0.275);
                gsap.set(decisionTextWrap3, { opacity: textP });
                if (decisionTextLines3.length) {
                    const N = decisionTextLines3.length;
                    const STEP = 2 / (N + 1);
                    for (let i = 0; i < N; i++) {
                        const line = decisionTextLines3[i];
                        const nodeStart = i * STEP / 2;
                        const localP = gsap.utils.clamp(0, 1, (textP - nodeStart) / STEP);
                        const localEased = gsap.parseEase('power2.out')(localP);
                        gsap.set(line, {
                            x: 20 * (1 - localEased),
                            opacity: localEased
                        });
                    }
                }
            }

            if (self.progress >= 0.5) {
                const relP = (self.progress - 0.5) / 0.5;
                const easedRel = gsap.parseEase('power1.out')(relP);
                gsap.set('.cs-decision-mc[data-dec="3"]', { y: -easedRel * vh });
                gsap.set('.cs-razonamiento[data-dec="3"]', { y: vh - easedRel * vh });
                const razon3RailEl = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__rail');
                if (razon3RailEl) {
                    gsap.set(razon3RailEl, { y: 0.5 * vh });
                }
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d3): Gate B D3 + Gate D D3 — La Decisión 3 con cortina, imagen, ring, texto y relevo"
```

---

## Task 8: JS — Gate 2 D3 (Razonamiento 3)

**Files:**
- Modify: `js/caso-asdeporte.js` (al final, después del bloque de Task 7)

**Interfaces:**
- Consumes: `FINAL_SCALE_VW_RATIO` (const ya declarada arriba en el archivo, en el bloque del Razonamiento 1).
- Produces: nada (última fase encadenada; Decisión 4 la consumirá en el futuro capturando el ST vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--decision-3-razonamiento`).

- [ ] **Step 1: Añadir el bloque completo del Razonamiento 3**

```js
    // ============================================
    // Gate 2 D3 — El Razonamiento 3
    // Clon exacto del Razonamiento 2. Variables con
    // prefijo _r3 o sufijo 3. Custom props propias:
    // --razon3-desc2-top / --razon3-desc3-top.
    // razon3Final NO tiene exit animation (sin D4 todavía).
    // ============================================

    const _r3desc1 = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="1"]');
    const _r3desc2 = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="2"]');
    const _r3desc3 = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="3"]');
    const _r3dh1   = _r3desc1 ? _r3desc1.offsetHeight : 0;
    const _r3dh2   = _r3desc2 ? _r3desc2.offsetHeight : 0;
    const _r3dh3   = _r3desc3 ? _r3desc3.offsetHeight : 0;
    const _r3razonVh    = window.innerHeight;
    const _r3desc1TopPx = 0.5 * _r3razonVh;
    const _r3stepPx     = 0.8 * _r3razonVh + 120 + _r3dh1;
    const _r3desc2TopPx = _r3desc1TopPx + _r3stepPx;
    const _r3desc3TopPx = _r3desc2TopPx + _r3stepPx;

    const razon3Conclusion = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion');
    const razon3Label      = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__label');
    const razon3Body       = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion-body');
    const razon3Final      = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion-final');

    const _r3recorridoFase1Px      = 2.1 * _r3razonVh + 240 + 2 * _r3dh1;
    const _r3rielRecorridoFase2Px  = 0.5 * _r3razonVh + _r3dh3;
    const _r3conclusionHeaderHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')
    ) || 81;
    const _r3conclusionBaseTopInit  = _r3conclusionHeaderHeight + (_r3razonVh - _r3conclusionHeaderHeight) / 2;
    const _r3conclusionHeightInit   = razon3Conclusion ? razon3Conclusion.offsetHeight : 333;
    const _r3concOffsetPx           = 0;
    const _r3concRecorridoFase2Px   = _r3razonVh - _r3conclusionBaseTopInit + _r3concOffsetPx + _r3conclusionHeightInit / 2;
    const _r3recorridoFase2Px       = Math.max(_r3rielRecorridoFase2Px, _r3concRecorridoFase2Px);
    const _r3recorridoFase3Px       = 0.7 * _r3razonVh;
    const _r3recorridoFaseTotalPx   = _r3recorridoFase1Px + _r3recorridoFase2Px + _r3recorridoFase3Px;
    const _r3conclusionEntryStartRatio = _r3recorridoFase1Px / _r3recorridoFaseTotalPx;
    const _r3conclusionEntryEndRatio   = (_r3recorridoFase1Px + _r3recorridoFase2Px) / _r3recorridoFaseTotalPx;
    const _r3gestureStartRatio         = _r3conclusionEntryEndRatio;
    const PIN_LENGTH_VH3               = _r3recorridoFaseTotalPx / _r3razonVh;

    let _r3bodyExitDistance    = 0;
    let _r3finalToCenterDeltaX = 0;
    let _r3finalToCenterDeltaY = 0;
    let _r3finalTargetScale    = 1;
    let _r3gestureInitialized  = false;

    const _r3labelFadeStartRatio = (2.6 * _r3razonVh + 240 + 2 * _r3dh1) / _r3recorridoFaseTotalPx;
    const _r3labelFadeEndRatio   = 0.83;

    document.documentElement.style.setProperty('--razon3-desc2-top', _r3desc2TopPx + 'px');
    document.documentElement.style.setProperty('--razon3-desc3-top', _r3desc3TopPx + 'px');

    const ladeciST3 = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3-ladecision')
    );

    const razon3Rail       = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__rail');
    const razon3Metric1    = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__metric[data-screen="1"]');
    const razon3Metric2    = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__metric[data-screen="2"]');
    const razon3Metric3    = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__metric[data-screen="3"]');
    const razon3Descriptor  = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="1"]');
    const razon3Descriptor2 = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="2"]');
    const razon3Descriptor3 = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="3"]');

    let razon3DescriptorHeight = razon3Descriptor ? razon3Descriptor.offsetHeight : 0;
    let conclusion3BaseTopPx   = _r3conclusionHeaderHeight + (window.innerHeight - _r3conclusionHeaderHeight) / 2;

    if (razon3Rail)    { gsap.set(razon3Rail,    { y: window.innerHeight * 0.5 }); }
    if (razon3Metric1) { gsap.set(razon3Metric1, { opacity: 0 }); }
    if (razon3Metric2) { gsap.set(razon3Metric2, { opacity: 0 }); }
    if (razon3Metric3) { gsap.set(razon3Metric3, { opacity: 0 }); }
    if (razon3Conclusion) {
        gsap.set(razon3Conclusion, { top: (conclusion3BaseTopPx + _r3recorridoFase2Px) + 'px' });
    }

    function computeGesture3Constants() {
        if (!razon3Final) return;
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const textRange = document.createRange();
        textRange.selectNodeContents(razon3Final);
        const finalTextRect   = textRange.getBoundingClientRect();
        const finalTextWidth  = finalTextRect.width  || 1;
        const finalTextHeight = finalTextRect.height || 1;
        const scaleByWidth  = (vw * FINAL_SCALE_VW_RATIO) / finalTextWidth;
        const scaleByHeight = vh / finalTextHeight;
        _r3finalTargetScale = Math.min(scaleByWidth, scaleByHeight);
        const razon3FinalRect = razon3Final.getBoundingClientRect();
        _r3finalToCenterDeltaX = ((finalTextWidth - razon3FinalRect.width) / 2) * _r3finalTargetScale;
        const finalTextCenterY = finalTextRect.top + finalTextHeight / 2;
        _r3finalToCenterDeltaY = vh / 2 - finalTextCenterY;
        if (razon3Body) {
            const bodyRect = razon3Body.getBoundingClientRect();
            _r3bodyExitDistance = bodyRect.bottom + 50;
        }
    }

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-3-razonamiento',
        start: () => ladeciST3 ? ladeciST3.end : 0,
        end: () => '+=' + (window.innerHeight * PIN_LENGTH_VH3),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onRefresh: () => {
            if (razon3Descriptor) {
                razon3DescriptorHeight = razon3Descriptor.offsetHeight;
            }
            if (razon3Rail) {
                gsap.set(razon3Rail, { y: window.innerHeight * 0.5 });
            }
            conclusion3BaseTopPx = _r3conclusionHeaderHeight + (window.innerHeight - _r3conclusionHeaderHeight) / 2;
            computeGesture3Constants();
        },
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh       = window.innerHeight;
            const recorrido = PIN_LENGTH_VH3 * vh;
            const contentP  = self.progress;

            const railY = 0.5 * vh - contentP * recorrido;

            if (razon3Rail) {
                gsap.set(razon3Rail, { y: 0.5 * vh });
                gsap.set(razon3Rail, { y: railY });
            }

            const _r3switchRailY_12 = -0.5 * vh;
            const _r3switchRailY_23 = -1.3 * vh - 120 - _r3dh1;

            const computeOpacity3 = (metricP) => {
                const FADE_IN_END    = 0.25;
                const FADE_OUT_START = 0.90;
                if (metricP < FADE_IN_END)     return metricP / FADE_IN_END;
                if (metricP <= FADE_OUT_START) return 1;
                return (1 - metricP) / (1 - FADE_OUT_START);
            };

            if (razon3Metric1) {
                const desc1TopInViewport = railY + 0.5 * vh;
                const metricP_1 = Math.max(0, Math.min(1, (vh - desc1TopInViewport) / vh));
                gsap.set(razon3Metric1, { opacity: computeOpacity3(metricP_1) });
            }
            if (razon3Metric2) {
                if (railY > _r3switchRailY_12) {
                    gsap.set(razon3Metric2, { opacity: 0 });
                } else {
                    const desc2TopInViewport = railY + 1.3 * vh + 120 + _r3dh1;
                    const metricP_2 = Math.max(0, Math.min(1, (vh - desc2TopInViewport) / vh));
                    gsap.set(razon3Metric2, { opacity: computeOpacity3(metricP_2) });
                }
            }
            if (razon3Metric3) {
                if (railY > _r3switchRailY_23) {
                    gsap.set(razon3Metric3, { opacity: 0 });
                } else {
                    const desc3TopInViewport = railY + 2.1 * vh + 240 + 2 * _r3dh1;
                    const metricP_3 = Math.max(0, Math.min(1, (vh - desc3TopInViewport) / vh));
                    gsap.set(razon3Metric3, { opacity: computeOpacity3(metricP_3) });
                }
            }

            if (razon3Conclusion) {
                const concInitialTop = conclusion3BaseTopPx + _r3recorridoFase2Px;
                if (contentP < _r3conclusionEntryStartRatio) {
                    gsap.set(razon3Conclusion, { top: concInitialTop + 'px' });
                } else if (contentP < _r3conclusionEntryEndRatio) {
                    const localP = (contentP - _r3conclusionEntryStartRatio) /
                                   (_r3conclusionEntryEndRatio - _r3conclusionEntryStartRatio);
                    gsap.set(razon3Conclusion, { top: (concInitialTop - _r3recorridoFase2Px * localP) + 'px' });
                } else {
                    gsap.set(razon3Conclusion, { top: conclusion3BaseTopPx + 'px' });
                }
            }

            if (razon3Label) {
                let labelOpacity = 1;
                if (contentP > _r3labelFadeStartRatio) {
                    const labelProgress = (contentP - _r3labelFadeStartRatio) /
                                          (_r3labelFadeEndRatio - _r3labelFadeStartRatio);
                    labelOpacity = Math.max(0, Math.min(1, 1 - labelProgress));
                }
                if (contentP > _r3gestureStartRatio) { labelOpacity = 0; }
                gsap.set(razon3Label, { opacity: labelOpacity });
            }

            if (contentP > _r3gestureStartRatio) {
                if (!_r3gestureInitialized) {
                    computeGesture3Constants();
                    _r3gestureInitialized = true;
                }
                const localP = (contentP - _r3gestureStartRatio) / (1 - _r3gestureStartRatio);
                if (razon3Body) {
                    gsap.set(razon3Body, { y: -_r3bodyExitDistance * localP });
                }
                if (razon3Final) {
                    gsap.set(razon3Final, {
                        x: _r3finalToCenterDeltaX * localP,
                        y: _r3finalToCenterDeltaY * localP,
                        scale: 1 + (_r3finalTargetScale - 1) * localP,
                    });
                }
            } else {
                _r3gestureInitialized = false;
                if (razon3Body)  { gsap.set(razon3Body,  { y: 0 }); }
                if (razon3Final) { gsap.set(razon3Final, { x: 0, y: 0, scale: 1 }); }
            }
        },
        onLeave: () => {
            if (razon3Body) {
                gsap.set(razon3Body, { y: -2 * window.innerHeight });
            }
        }
    });
```

- [ ] **Step 2: Commit**
```bash
git add js/caso-asdeporte.js
git commit -m "feat(d3): Gate 2 D3 — Razonamiento 3 con riel, métricas, conclusión y gesto final"
```

---

## Self-Review

**Spec coverage:**
- HTML pin spacers (5) → Task 1 ✓
- HTML cs-decision D3 (cortina) → Task 2 ✓
- HTML cs-problema D3 → Task 2 ✓
- HTML cs-decision-mc D3 → Task 2 ✓
- HTML cs-razonamiento D3 → Task 2 ✓
- CSS pin spacers → Task 3 ✓
- CSS override posición cortina-3 → Task 3 ✓
- CSS descriptores D3 (custom props) → Task 3 ✓
- JS Cortina D3 + salida de razon2Final → Task 4 ✓
- JS Expansión D3 → Task 5 ✓
- JS El Problema D3 → Task 6 ✓
- JS Gate B D3 + Gate D D3 (La Decisión 3) → Task 7 ✓
- JS Gate 2 D3 (Razonamiento 3) → Task 8 ✓
- razon3Final sin exit animation → correcto, solo onLeave oculta razon3Body ✓

**Placeholder scan:** Ninguno. Todo el código está completo.

**Type consistency:**
- `clipEase`, `subProgress`, `margin`, `headerH`, `FINAL_SCALE_VW_RATIO` — helpers/consts globales ya declarados arriba en el archivo (líneas ~1000-1772), reutilizados directamente sin redeclarar. ✓
- `razonamiento2ST` captura el ST de `decision-2-razonamiento` (ya existe desde el clon D2). ✓
- `razon2Final` — const ya declarada en el bloque de Razonamiento 2 (Task 8 del plan D2), reutilizada directamente en Task 4 de este plan sin redeclarar (mismo scope de función). ✓
- `cortina3ST`, `expansion3ST`, `problemaST3`, `ladeciST3` — cada uno capturado vía `ScrollTrigger.getAll().find()` sobre el pin-spacer del gate inmediatamente anterior, en el orden Task 4 → 5 → 6 → 7 → 8. ✓
- `PIN_LENGTH_VH3` nombre único — no colisiona con `PIN_LENGTH_VH` (D1/D2, local a su propio ST) ni `PIN_LENGTH_VH2`. ✓
- `gate4Initialized3` — no colisiona con `gate4Initialized2` (D2) ni el flag de D1. ✓
- Custom props `--razon3-desc2-top` / `--razon3-desc3-top` distintas de las de D1/D2. ✓
- `computeGesture3Constants` — nombre único, no colisiona con `computeGesture2Constants`. ✓
