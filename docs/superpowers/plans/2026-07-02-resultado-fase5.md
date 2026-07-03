# Resultado — Fase 5 (Modal, cierre, cards, CTA líquido) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir el cierre completo del caso de estudio: modal "Qué aprendí" (click, reusa el shell de `modal-rol-proceso`), el ScrollTrigger de agradecimiento + casos + CTA final, y el átomo de botón líquido de 3 cápsulas.

**Architecture:** El modal es click-driven e independiente del scroll (módulo JS nuevo, mismo patrón que `modal-rol-proceso.js`). El resto de Fase 5 (agradecimiento, cards, footer) es un único `ScrollTrigger` pineado de 350vh en `js/resultado.js`, que además es responsable de sacar `.rs-testimonio__closing`/`.rs-testimonio__cta` (Bloque D) — mismo patrón de relevo usado en todo el proyecto. El botón líquido es un átomo nuevo en `atoms.css`, 100% `:hover`/CSS, sin GSAP.

**Tech Stack:** HTML5, CSS custom properties + transitions, GSAP + ScrollTrigger (CDN, ya cargado)

## Global Constraints

- Prefijo `rs-` para clases de página; el botón líquido usa prefijo `btn-liquid` (átomo, vive en `atoms.css`, no en `resultado.css`).
- `.rs-cierre` usa `z-index: 7`.
- Arquitectura de scroll: GSAP ScrollTrigger `pin: true` + pin-spacer, ancla vía `ScrollTrigger.getAll().find()`.
- El modal "Qué aprendí" reusa EXACTO el shell `.modal-rol-proceso`/`.modal-rol-proceso__overlay`/`.modal-rol-proceso__content`/`.modal-rol-proceso__close` y la lógica de `js/modal-rol-proceso.js` (`x:0`/`x:'100%'`, `duration:0.6`, ease `power2.out`/`power2.in`).
- Copy real: textos del modal, "¡Gracias / por ver!", footer "¿ARRANCAMOS?" idéntico a `index.html` (ver spec para texto completo).
- Cards de casos de estudio: placeholder (decisión ya tomada con el usuario).
- Botón líquido: gap `16px→0px`, rotación del ícono `-90°→0°` (valores exactos del doc); las distancias de traslación son un punto de partida, se afinan en revisión visual.
- Guards `onLeaveBack`/`onLeave` obligatorios desde el primer commit de JS del ScrollTrigger de cierre.

---

## Task 1: HTML — Modal "Qué aprendí"

**Files:**
- Modify: `caso-asdeporte.html` (después del modal `#modalProceso`, antes del `<script type="module" src="js/main.js">`)

- [ ] **Step 1: Insertar el modal**

```html
        <!-- ============================================ -->
        <!-- MODAL QUÉ APRENDÍ — Panel deslizante desde la derecha -->
        <!-- Reusa el shell de modal-rol-proceso (overlay, slide, -->
        <!-- close, Escape) — contenido propio, sin steps/imagen. -->
        <!-- ============================================ -->
        <div class="modal-rol-proceso" id="modalQueAprendi" aria-hidden="true">
            <div class="modal-rol-proceso__overlay"></div>
            <div class="modal-rol-proceso__content">
                <button class="modal-rol-proceso__close" aria-label="Cerrar modal">
                    <i class="ph ph-x"></i>
                </button>
                <div class="modal-rol-proceso__label">[ QUÉ APRENDÍ ]</div>
                <div class="rs-modal-aprendi__grid">
                    <h2 class="rs-modal-aprendi__title">Lo que los datos me enseñaron que el brief no podía decirme.</h2>
                    <div class="rs-modal-aprendi__lessons">
                        <p><strong>Lección 1: Habla el idioma del negocio.</strong> Defender al usuario a veces significa argumentar con métricas, no con empatía. El argumento que ganó con Oxxo no fue &ldquo;es mejor para el usuario&rdquo; &mdash; fue &ldquo;esto nos está costando conversiones medibles.&rdquo;</p>
                        <p><strong>Lección 2: Los datos destruyen las mejores ideas.</strong> Diseñé un buscador geolocalizado por mapa con total convicción. El 4% de los usuarios lo usaba. Los atletas no buscan por GPS &mdash; buscan por estado, fecha y disciplina. Degradé el mapa, convertí la búsqueda en filtros por región.</p>
                        <p><strong>Lección 3: La pregunta correcta.</strong> Dejé de preguntar &ldquo;¿dónde abandona el usuario?&rdquo; Ahora pregunto &ldquo;¿qué duda específica lo hizo abandonar?&rdquo; Son preguntas distintas. Llevan a soluciones distintas.</p>
                    </div>
                </div>
            </div>
        </div>
```

- [ ] **Step 2: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): HTML del modal Qué aprendí (Fase 5.1)"
```

---

## Task 2: CSS — Contenido del modal "Qué aprendí"

**Files:**
- Modify: `css/resultado-responsive.css` (añadir al final del bloque `@media (min-width: 1200px)`, después de las reglas de Fase 4)

- [ ] **Step 1: Añadir las reglas**

```css
    /* ============================================
       FASE 5.1 — Contenido del modal "Qué aprendí"
       El shell (overlay, slide, close) es de modal-rol-proceso.css,
       sin cambios — esto es solo el contenido interno.
       ============================================ */

    .rs-modal-aprendi__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        margin-top: 60px;
    }

    .rs-modal-aprendi__title {
        font-size: clamp(2rem, 3vw, 3rem);
    }

    .rs-modal-aprendi__lessons {
        display: flex;
        flex-direction: column;
        gap: 32px;
        color: var(--color-text-secondary);
    }

    .rs-modal-aprendi__lessons strong { color: var(--color-secondary); }
```

- [ ] **Step 2: Commit**
```bash
git add css/resultado-responsive.css
git commit -m "feat(resultado): CSS del contenido del modal Qué aprendí"
```

---

## Task 3: JS — Módulo del modal + inicialización

**Files:**
- Create: `js/resultado-modal-aprendi.js`
- Modify: `js/resultado.js` (import + llamada al final del archivo)

**Interfaces:**
- Produces: función exportada `initModalQueAprendi()`.

- [ ] **Step 1: Crear `js/resultado-modal-aprendi.js`**

```js
'use strict';

// ============================================
// MÓDULO: Modal "Qué aprendí"
// Mismo patrón que modal-rol-proceso.js — panel deslizante
// desde la derecha con overlay. Disparado por #rsQueAprendiBtn
// (creado en Fase 4, Bloque D).
// ============================================

export function initModalQueAprendi() {
    const modal = document.getElementById('modalQueAprendi');
    const triggerBtn = document.getElementById('rsQueAprendiBtn');
    const closeBtn = modal?.querySelector('.modal-rol-proceso__close');
    const overlay = modal?.querySelector('.modal-rol-proceso__overlay');
    const content = modal?.querySelector('.modal-rol-proceso__content');

    if (!modal || !triggerBtn || !closeBtn || !overlay || !content) return;

    let isOpen = false;

    function openModal() {
        if (isOpen) return;
        isOpen = true;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        gsap.to(content, { x: 0, duration: 0.6, ease: 'power2.out' });
    }

    function closeModal() {
        if (!isOpen) return;
        gsap.to(content, {
            x: '100%',
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
                isOpen = false;
            }
        });
    }

    triggerBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) { closeModal(); }
    });
}
```

- [ ] **Step 2: Importar e inicializar en `js/resultado.js`**

Al principio del archivo (línea 1, antes del comentario de cabecera existente), añadir:
```js
import { initModalQueAprendi } from './resultado-modal-aprendi.js';
```

Al final del archivo, DESPUÉS del cierre `}` del guard `if (typeof gsap !== 'undefined' ...)`, añadir:
```js

// El modal no depende de que exista ScrollTrigger — se inicializa
// siempre, fuera del guard de gsap/ScrollTrigger.
initModalQueAprendi();
```

- [ ] **Step 3: Verificar sintaxis**

Run: `node --check js/resultado-modal-aprendi.js && node --check js/resultado.js`

Nota: `node --check` sobre `js/resultado.js` fallará si el archivo usa `import` a nivel de módulo pero no se ejecuta como módulo ES — usar `node --input-type=module --check < js/resultado.js` si el check plano falla, o confirmar que el `<script type="module">` en HTML ya declara el contexto correcto (el archivo SÍ es un módulo ES, cargado como tal en `caso-asdeporte.html`).

Expected: sin errores.

- [ ] **Step 4: Commit**
```bash
git add js/resultado-modal-aprendi.js js/resultado.js
git commit -m "feat(resultado): módulo del modal Qué aprendí + inicialización"
```

---

## Task 4: HTML — Pin spacer + sección de cierre (Fase 5.2/5.3)

**Files:**
- Modify: `caso-asdeporte.html` (antes de `</main>`, después de `</section>` de `.rs-testimonio`)

- [ ] **Step 1: Añadir el pin-spacer y la sección**

```html
        <div class="cs-pin-spacer cs-pin-spacer--rs-cierre" data-phase="rs-cierre"></div>

        <!-- ============================================ -->
        <!-- RESULTADOS — FASE 5.2/5.3: Agradecimiento,    -->
        <!-- casos de estudio y CTA final                  -->
        <!-- Anima también la salida de .rs-testimonio__closing -->
        <!-- y .rs-testimonio__cta (Fase 4, Bloque D).     -->
        <!-- ============================================ -->
        <section class="rs-cierre" aria-label="Agradecimiento y cierre">
            <div class="rs-cierre__gracias">
                <span class="rs-cierre__gracias-word rs-cierre__gracias-word--left">¡Gracias</span>
                <span class="rs-cierre__gracias-word rs-cierre__gracias-word--right">por ver!</span>
            </div>
            <div class="rs-cierre__media">
                <img class="rs-cierre__media-img" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&h=600&fit=crop" alt="" />
            </div>
            <div class="rs-cierre__cases">
                <article class="rs-cierre__case">
                    <img class="rs-cierre__case-img" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=350&fit=crop" alt="" />
                    <p class="rs-cierre__case-text">Atletas que entrenaban meses para un triatlón encontraban más obstáculos en la app que en la carrera.</p>
                </article>
                <article class="rs-cierre__case">
                    <img class="rs-cierre__case-img" src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&h=350&fit=crop" alt="" />
                    <p class="rs-cierre__case-text">Atletas que entrenaban meses para un triatlón encontraban más obstáculos en la app que en la carrera.</p>
                </article>
            </div>
            <div class="rs-cierre__footer">
                <span class="rs-cierre__footer-label">[ CONTACTO ]</span>
                <h2 class="rs-cierre__footer-title">¿ARRANCAMOS?</h2>
                <p class="rs-cierre__footer-text">El siguiente paso es una conversación.</p>
                <div class="btn-liquid">
                    <span class="btn-liquid__pill btn-liquid__pill--charlemos">CHARLEMOS</span>
                    <span class="btn-liquid__pill btn-liquid__pill--en">EN</span>
                    <span class="btn-liquid__pill btn-liquid__pill--whatsapp"><i class="ph ph-whatsapp-logo"></i></span>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Commit**
```bash
git add caso-asdeporte.html
git commit -m "feat(resultado): HTML de Fase 5.2/5.3 (agradecimiento, casos, footer)"
```

---

## Task 5: CSS — Fase 5.2/5.3

**Files:**
- Modify: `css/resultado-responsive.css` (añadir al final del bloque `@media (min-width: 1200px)`, después de las reglas del modal)

- [ ] **Step 1: Añadir las reglas**

```css
    /* ============================================
       FASE 5.2/5.3 — Agradecimiento, casos y CTA final
       ============================================ */

    .cs-pin-spacer--rs-cierre { height: 350vh; }

    .rs-cierre {
        position: fixed;
        inset: 0;
        z-index: 7;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        transform: translateY(100vh);
    }

    .rs-cierre__gracias {
        position: absolute;
        top: 15%;
        left: 80px;
        display: flex;
        flex-direction: column;
        font-family: var(--font-display);
        font-size: clamp(3rem, 6vw, 6rem);
        font-weight: var(--bold);
    }

    .rs-cierre__gracias-word { opacity: 0; will-change: transform, opacity; }
    .rs-cierre__gracias-word--right { align-self: flex-end; margin-right: 10%; }

    .rs-cierre__media {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        width: 55%;
        max-width: 900px;
        border-radius: 24px;
        overflow: hidden;
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-cierre__media-img { display: block; width: 100%; aspect-ratio: 16/10; object-fit: cover; }

    .rs-cierre__cases {
        position: absolute;
        bottom: 15%;
        left: 80px;
        right: 80px;
        display: flex;
        gap: 40px;
    }

    .rs-cierre__case {
        flex: 1;
        border-radius: 24px;
        overflow: hidden;
        background: var(--color-bg);
        opacity: 0;
        will-change: transform, opacity;
    }

    .rs-cierre__case-img { display: block; width: 100%; aspect-ratio: 4/3; object-fit: cover; }
    .rs-cierre__case-text { padding: 24px; color: var(--color-secondary); }

    .rs-cierre__footer {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        text-align: center;
    }

    .rs-cierre__footer-label { color: var(--color-accent); opacity: 0; will-change: transform, opacity; }
    .rs-cierre__footer-title { opacity: 0; will-change: transform, opacity; }
    .rs-cierre__footer-text  { opacity: 0; will-change: transform, opacity; }
```

- [ ] **Step 2: Commit**
```bash
git add css/resultado-responsive.css
git commit -m "feat(resultado): CSS de Fase 5.2/5.3 (agradecimiento, casos, footer)"
```

---

## Task 6: JS — ScrollTrigger de cierre: salida de Fase 4 + agradecimiento + imagen

**Files:**
- Modify: `js/resultado.js` (al final del archivo, dentro del guard de gsap, después del cierre del `ScrollTrigger.create` de Fase 4 — antes de la llave `}` final del guard y antes de la línea `initModalQueAprendi();` añadida en Task 3)

**Interfaces:**
- Consumes: reusa `clamp01` (Fase 1). Consume por selector `.rs-testimonio__closing` y `.rs-testimonio__cta` (Bloque D, ya en el DOM).
- Produces: `rsGraciasLeft`, `rsGraciasRight`, `rsCierreMedia`, `rsCierreCases`, `rsFooterLabel`, `rsFooterTitle`, `rsFooterText` — consumidos por Task 7 (mismo `onUpdate`, ampliado en ese task).

- [ ] **Step 1: Añadir el bloque completo**

```js
    // ============================================
    // FASE 5.2/5.3 — Agradecimiento, casos y CTA final
    // Anclado a rsTestimonioST.end (Fase 4). Responsable de
    // sacar .rs-testimonio__closing y .rs-testimonio__cta
    // (mismo patrón de relevo de todo el proyecto).
    // ============================================

    const rsTestimonioST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-testimonio')
    );

    const rsCierreSection = document.querySelector('.rs-cierre');
    const rsGraciasLeft  = document.querySelector('.rs-cierre__gracias-word--left');
    const rsGraciasRight = document.querySelector('.rs-cierre__gracias-word--right');
    const rsCierreMedia  = document.querySelector('.rs-cierre__media');
    const rsCierreCases  = gsap.utils.toArray('.rs-cierre__case');
    const rsFooterLabel  = document.querySelector('.rs-cierre__footer-label');
    const rsFooterTitle  = document.querySelector('.rs-cierre__footer-title');
    const rsFooterText   = document.querySelector('.rs-cierre__footer-text');

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-cierre',
        start: () => rsTestimonioST ? rsTestimonioST.end : 0,
        end: () => '+=' + (window.innerHeight * 3.5),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p5 = self.progress;

            // ── Salida del cierre de Fase 4 (0.00 → 0.15) ──
            const exitP = clamp01(p5 / 0.15);
            gsap.set('.rs-testimonio__closing', { y: -exitP * vh });
            gsap.set('.rs-testimonio__cta',     { y: -exitP * vh, opacity: 1 - exitP });

            // ── "¡Gracias" (0.05 → 0.30), deriva +X ──
            if (rsGraciasLeft) {
                const graciasP = clamp01((p5 - 0.05) / 0.25);
                const graciasEased = gsap.parseEase('power2.out')(graciasP);
                gsap.set(rsGraciasLeft, {
                    y: 60 * (1 - graciasEased),
                    x: 20 * graciasEased,
                    opacity: graciasEased,
                });
            }

            // ── "por ver!" (0.10 → 0.35), deriva -X, arranca después ──
            if (rsGraciasRight) {
                const porVerP = clamp01((p5 - 0.10) / 0.25);
                const porVerEased = gsap.parseEase('power2.out')(porVerP);
                gsap.set(rsGraciasRight, {
                    y: 60 * (1 - porVerEased),
                    x: -20 * porVerEased,
                    opacity: porVerEased,
                });
            }

            // ── Imagen (0.10 → 0.40), más lenta que el texto ──
            if (rsCierreMedia) {
                const mediaP = clamp01((p5 - 0.10) / 0.30);
                const mediaEased = gsap.parseEase('power2.out')(mediaP);
                gsap.set(rsCierreMedia, { y: 80 * (1 - mediaEased), opacity: mediaEased });
            }
        },
        onLeaveBack: () => {
            gsap.set('.rs-testimonio__closing', { y: 0 });
            gsap.set('.rs-testimonio__cta',     { y: 0, opacity: 1 });
            if (rsCierreSection) { gsap.set(rsCierreSection, { y: '100vh' }); }
            if (rsGraciasLeft)  { gsap.set(rsGraciasLeft,  { y: 60, x: 0, opacity: 0 }); }
            if (rsGraciasRight) { gsap.set(rsGraciasRight, { y: 60, x: 0, opacity: 0 }); }
            if (rsCierreMedia)  { gsap.set(rsCierreMedia,  { y: 80, opacity: 0 }); }
        },
        onLeave: () => {
            if (rsCierreSection) { gsap.set(rsCierreSection, { y: 0 }); }
        }
    });
```

- [ ] **Step 2: Verificar sintaxis**

Run: `node --check js/resultado.js` (o la variante `--input-type=module` si aplica, ver Task 3)
Expected: sin errores.

- [ ] **Step 3: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 5.2 — salida de Fase 4 + agradecimiento + imagen"
```

---

## Task 7: JS — Cards de casos + footer + guards completos

**Files:**
- Modify: `js/resultado.js` (dentro del mismo `ScrollTrigger.create` de Task 6)

**Interfaces:**
- Consumes: `rsCierreCases`, `rsFooterLabel`, `rsFooterTitle`, `rsFooterText` (de Task 6).
- Produces: nada consumido fuera de este bloque (última fase de la secuencia de Resultados).

- [ ] **Step 1: Añadir la entrada de cards y footer dentro de `onUpdate`, después del bloque de la imagen**

```js
            // ── Cards de casos de estudio (0.45 → 0.65), stagger ──
            rsCierreCases.forEach((card, i) => {
                const start = 0.45 + i * 0.10;
                const localP = clamp01((p5 - start) / 0.10);
                const eased = gsap.parseEase('power2.out')(localP);
                gsap.set(card, { y: 60 * (1 - eased), opacity: eased });
            });

            // ── Footer de contacto (0.65 → 1.00), stagger label→título→texto ──
            const footerEls = [rsFooterLabel, rsFooterTitle, rsFooterText];
            footerEls.forEach((el, i) => {
                if (!el) return;
                const start = 0.65 + i * 0.10;
                const localP = clamp01((p5 - start) / 0.15);
                const eased = gsap.parseEase('power2.out')(localP);
                gsap.set(el, { y: 40 * (1 - eased), opacity: eased });
            });
```

- [ ] **Step 2: Reemplazar el `onLeaveBack` completo para incluir el reset de cards y footer**

Reemplazar:
```js
        onLeaveBack: () => {
            gsap.set('.rs-testimonio__closing', { y: 0 });
            gsap.set('.rs-testimonio__cta',     { y: 0, opacity: 1 });
            if (rsCierreSection) { gsap.set(rsCierreSection, { y: '100vh' }); }
            if (rsGraciasLeft)  { gsap.set(rsGraciasLeft,  { y: 60, x: 0, opacity: 0 }); }
            if (rsGraciasRight) { gsap.set(rsGraciasRight, { y: 60, x: 0, opacity: 0 }); }
            if (rsCierreMedia)  { gsap.set(rsCierreMedia,  { y: 80, opacity: 0 }); }
        },
```
Por:
```js
        onLeaveBack: () => {
            gsap.set('.rs-testimonio__closing', { y: 0 });
            gsap.set('.rs-testimonio__cta',     { y: 0, opacity: 1 });
            if (rsCierreSection) { gsap.set(rsCierreSection, { y: '100vh' }); }
            if (rsGraciasLeft)  { gsap.set(rsGraciasLeft,  { y: 60, x: 0, opacity: 0 }); }
            if (rsGraciasRight) { gsap.set(rsGraciasRight, { y: 60, x: 0, opacity: 0 }); }
            if (rsCierreMedia)  { gsap.set(rsCierreMedia,  { y: 80, opacity: 0 }); }
            gsap.set(rsCierreCases, { y: 60, opacity: 0 });
            [rsFooterLabel, rsFooterTitle, rsFooterText].forEach((el) => {
                if (el) { gsap.set(el, { y: 40, opacity: 0 }); }
            });
        },
```

- [ ] **Step 3: Verificar sintaxis**

Run: `node --check js/resultado.js` (variante módulo si aplica)
Expected: sin errores.

- [ ] **Step 4: Commit**
```bash
git add js/resultado.js
git commit -m "feat(resultado): Fase 5.3 — cards de casos + footer de contacto"
```

---

## Task 8: Botón líquido — átomo nuevo (`atoms.css` + `ATOMS.md`)

**Files:**
- Modify: `css/atoms.css` (nueva sección, junto a las reglas de `.btn`)
- Modify: `ATOMS.md` (documentar el nuevo átomo)

**Interfaces:**
- Produces: clases `.btn-liquid`, `.btn-liquid__pill`, `.btn-liquid__pill--charlemos`, `.btn-liquid__pill--en`, `.btn-liquid__pill--whatsapp` — ya consumidas por el HTML de Task 4.

- [ ] **Step 1: Añadir las reglas a `css/atoms.css`, después de las reglas existentes de `.btn`/`.btn-icon`**

```css
/* ============================================
   BOTÓN LÍQUIDO — CTA de contacto con fusión elástica
   3 cápsulas independientes que se funden en una sola al
   hacer hover del wrapper. Exclusivo para el CTA final de
   casos de estudio — NO reemplaza .btn.btn--primary.
   ============================================ */

.btn-liquid {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
}

.btn-liquid__pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-accent);
    color: var(--color-primary);
    font-weight: var(--semibold);
    border-radius: 9999px;
    transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    white-space: nowrap;
}

.btn-liquid__pill--charlemos {
    padding: 20px 32px;
    transform: translateX(0);
}

.btn-liquid__pill--en {
    padding: 20px 20px;
    transform: translateX(0);
}

.btn-liquid__pill--whatsapp {
    width: 64px;
    height: 64px;
    padding: 0;
    font-size: 1.5rem;
    transform: translateX(0) rotate(-90deg);
}

.btn-liquid:hover { gap: 0px; }

.btn-liquid:hover .btn-liquid__pill--charlemos {
    transform: translateX(24px);
    border-radius: 9999px 0 0 9999px;
    padding-right: 12px;
}

.btn-liquid:hover .btn-liquid__pill--en {
    transform: translateX(-8px);
    border-radius: 0;
    padding-inline: 12px;
}

.btn-liquid:hover .btn-liquid__pill--whatsapp {
    transform: translateX(-24px) rotate(0deg);
    border-radius: 0 9999px 9999px 0;
}
```

- [ ] **Step 2: Documentar en `ATOMS.md`**

Añadir, en la sección de botones (junto a `.btn`/`.btn-icon`):

```markdown
### Botón líquido (`.btn-liquid`)

CTA de contacto con microinteracción de fusión elástica — 3 cápsulas independientes (`CHARLEMOS`, `EN`, ícono WhatsApp) que se funden en una sola cápsula continua al hacer hover del wrapper. Exclusivo del CTA final de la sección de casos de estudio — no reemplaza `.btn.btn--primary`.

\`\`\`html
<div class="btn-liquid">
    <span class="btn-liquid__pill btn-liquid__pill--charlemos">CHARLEMOS</span>
    <span class="btn-liquid__pill btn-liquid__pill--en">EN</span>
    <span class="btn-liquid__pill btn-liquid__pill--whatsapp"><i class="ph ph-whatsapp-logo"></i></span>
</div>
\`\`\`

Animación 100% CSS (`transition` en `:hover` del wrapper) — sin GSAP, sin scroll.
```

- [ ] **Step 3: Commit**
```bash
git add css/atoms.css ATOMS.md
git commit -m "feat(atoms): botón líquido de 3 cápsulas (CTA de contacto final)"
```

---

## Self-Review

**Spec coverage:**
- Modal "Qué aprendí" HTML/CSS/JS (5.1) → Tasks 1-3 ✓
- Salida de `.rs-testimonio__closing`/`.rs-testimonio__cta` (relevo Bloque D) → Task 6 ✓
- Entrada de "¡Gracias"/"por ver!" con deriva horizontal → Task 6 ✓
- Entrada de imagen con parallax diferencial → Task 6 ✓
- Cards de casos de estudio (placeholder) → Task 7 ✓
- Footer "¿ARRANCAMOS?" (idéntico a `index.html`) → Task 7 ✓
- Guards `onLeaveBack`/`onLeave` completos → Tasks 6-7 (acumulativo) ✓
- Botón líquido (átomo, gap 16→0px, rotación -90°→0°) → Task 8 ✓

**Placeholder scan:** Ninguno (las cards SON placeholder por decisión explícita del usuario, documentada como tal, no como "TBD").

**Type consistency:**
- `rsTestimonioST`, `rsCierreSection`, `rsGraciasLeft/Right`, `rsCierreMedia`, `rsCierreCases`, `rsFooterLabel/Title/Text` — declarados una vez en Task 6, reusados sin redeclarar en Task 7 (mismo `onUpdate`). ✓
- El `onLeaveBack` se reemplaza acumulativamente en Task 7 (Edit referencia la versión completa de Task 6). ✓
- `initModalQueAprendi` — nombre de función consistente entre Task 3 (definición) y su llamada. ✓
- Clases `.btn-liquid*` no colisionan con `.btn`/`.btn--primary`/`.btn--secondary` existentes. ✓
