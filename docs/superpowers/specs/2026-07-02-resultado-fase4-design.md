# Spec: Bloque D — Fase 4 (Portal de máscara tipográfica y revelación)

**Fecha:** 2026-07-02
**Archivos principales:** `caso-asdeporte.html`, `css/resultado-responsive.css`, `js/resultado.js`

## Contexto

Continúa de Bloque C (Fase 3), reusando directamente el mismo título `.rs-usuarios__title` ("El impacto en los usuarios") que Fase 3 deja anclado en pantalla (Fase 3 explícitamente NO lo mueve en su salida — ver spec de Bloque C, 3.3). Fase 4 aísla la palabra "impacto", la usa como portal de zoom hacia un testimonio, y cierra con un bloque de autoridad + CTA que abre el modal de Fase 5.

Referencias visuales: `resultados/resultado-d/resultado-d-01.jpg` a `resultado-d-16.jpg`.

Copy real (de las capturas):
- Testimonio: *"Llevo 10 años corriendo con AsDeporte y siempre odié la app. Esta mañana me inscribí al Ironman de Cozumel mientras desayunaba, en menos de 2 minutos. Por primera vez, la tecnología de AsDeporte es tan profesional como sus carreras."*
- Cierre: "No rediseñamos una app. Recuperamos la autoridad de una marca."
- CTA: "QUÉ APRENDÍ ↗"

## Arquitectura de scroll

Un `ScrollTrigger.create` (`trigger: '.cs-pin-spacer--rs-testimonio'`), pin de **400vh** (la fase más larga — 4 sub-tramos con el efecto más complejo del set), `scrub: 1`. Ancla su `start` al `.end` del ST de Fase 3.

Progreso normalizado `p4 = self.progress`:

| Sub-fase | Rango p4 | Qué pasa |
|---|---|---|
| 4.1 Aislamiento de "impacto" + portal | 0.00 – 0.25 | Todas las palabras de `.rs-usuarios__title` excepto "impacto" bajan a `opacity: 0`. En paralelo, un anillo punteado verde (`.rs-usuarios__ring`) aparece con fade-in (`opacity: 0→1`) centrado en el viewport y arranca su rotación+escala (misma fórmula que `.cs-decision-mc__ring` de "La Decisión": `scale 1.0→2.75`, `rotation 360°*p`). |
| 4.2 Zoom exponencial + portal de la "p" | 0.20 – 0.65 | La palabra "impacto" escala masivamente, con `transform-origin` anclado en la letra "p" (aproximación práctica: el centro del bounding box de un `<span>` que envuelve solo la "p", no el centro de todo el "impacto" — ver nota de aproximación abajo). El anillo sigue creciendo/rotando en el mismo tramo. El testimonio hace fade-in (`opacity: 0→1`) hacia el final del tramo (0.50–0.65), visible "a través" del portal. |
| 4.3 Testimonio + fade-out | 0.65 – 0.85 | "Impacto" y el anillo ya están completamente fuera de vista (opacity 0 desde 0.65). Testimonio se lee estático (0.65–0.75), luego fade-out puro sin desplazamiento (0.75–0.85). |
| 4.4 Revelación de líneas + CTA | 0.80 – 1.00 | Bloque "No rediseñamos una app. Recuperamos la autoridad de una marca." se revela línea por línea (máscara `overflow: hidden` + `translateY` positivo→0, mismo patrón que `mask-reveal.css`/`mask-reveal.js` ya usado en headers de sección). El botón "QUÉ APRENDÍ ↗" entra coordinado con la última línea: `translateY` + fade-in. |

### Nota de aproximación: pivot de la "p"

El doc pide que "el centro geométrico del espacio interno cerrado (el ojo o counter) de la letra 'p'" coincida con el centro óptico del viewport. Medir el counter exacto de un glifo vía DOM no es viable sin parsear el font (Sora). Aproximación práctica: envolver solo el carácter "p" de "impacto" en su propio `<span>` (`.rs-usuarios__p-anchor`) y medir el bounding box de ESE span (no el de la palabra completa) con `getBoundingClientRect()` — mismo patrón de medición por `Range`/`getBoundingClientRect()` que ya usan `computeGesture2Constants`/`computeGesture3Constants` en `caso-asdeporte.js` para centrar `razonFinal`/`razon2Final`/`razon3Final`. El bbox completo de la "p" como proxy del counter es suficientemente preciso una vez escalado ~15-20×; se afina visualmente en revisión si el encuadre no queda centrado.

## HTML

**Modificación a Fase 3** (`.rs-usuarios__title`, Bloque C): las palabras deben quedar envueltas en spans para que Fase 4 pueda controlarlas individualmente. Reemplazar:
```html
<h3 class="rs-usuarios__title">El impacto en<br>los usuarios</h3>
```
por:
```html
<h3 class="rs-usuarios__title">
    <span class="rs-usuarios__word">El</span> <span class="rs-usuarios__word">impacto</span> <span class="rs-usuarios__word">en</span><br>
    <span class="rs-usuarios__word rs-usuarios__word--los-usuarios">los usuarios</span>
</h3>
```
La palabra "impacto" se envuelve además internamente para anclar la "p":
```html
<span class="rs-usuarios__word" data-word="impacto">im<span class="rs-usuarios__p-anchor">p</span>acto</span>
```

**Sección nueva de Fase 4** (después de `.rs-usuarios`, antes de `</main>`):
```html
<div class="cs-pin-spacer cs-pin-spacer--rs-testimonio" data-phase="rs-testimonio"></div>

<!-- ============================================ -->
<!-- RESULTADOS — FASE 4: Portal de máscara        -->
<!-- tipográfica y revelación                      -->
<!-- Reusa .rs-usuarios__title (Fase 3, Bloque C)  -->
<!-- ya anclado en pantalla — no crea título propio. -->
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

`.rs-testimonio` NO es `position:fixed` propio con inset — vive como capa fija superpuesta al `.rs-usuarios` que sigue en pantalla (mismo z-index 7, orden de documento posterior = encima). `#rsQueAprendiBtn` dispara el modal de Fase 5 (Bloque E, fuera de este scope — aquí solo se crea el botón y su animación de entrada).

## CSS (`resultado-responsive.css`)

```css
.cs-pin-spacer--rs-testimonio { height: 400vh; }

.rs-usuarios__word { display: inline-block; will-change: opacity; }

.rs-testimonio {
    position: fixed;
    inset: 0;
    z-index: 7;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none; /* se habilita puntualmente para el botón vía JS al llegar a p4=1 */
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

## Mecánica JS

```js
// 4.1 — Fade selectivo de palabras del título (0.00 → 0.25), impacto queda en 1
const wordFadeP = clamp01(p4 / 0.25);
rsUsuariosWords.forEach((word) => {
    if (word.dataset.word !== 'impacto') {
        gsap.set(word, { opacity: 1 - wordFadeP });
    }
});

// 4.1 — Ring: fade-in (0.00 → 0.25) + rotación/escala continua (0.00 → 0.65)
// Misma fórmula que .cs-decision-mc__ring de "La Decisión".
const ringFadeP = clamp01(p4 / 0.25);
const ringGrowP = clamp01(p4 / 0.65);
const ringGrowEased = gsap.parseEase('power1.inOut')(ringGrowP);
gsap.set(rsRing, {
    opacity: ringFadeP * (1 - clamp01((p4 - 0.55) / 0.10)), // se apaga junto con el zoom, 0.55→0.65
    scale: 1.0 + (2.75 - 1.0) * ringGrowEased,
    rotation: 360 * ringGrowP,
});

// 4.2 — Zoom exponencial de "impacto" anclado en la "p" (0.20 → 0.65)
if (p4 >= 0.20) {
    if (!rsPortalCaptured) {
        computeRsPortalConstants(); // mide rsPAnchor y rsImpactoWord, calcula target scale + delta centrado (mismo patrón que computeGesture3Constants)
        rsPortalCaptured = true;
    }
    const zoomP = clamp01((p4 - 0.20) / 0.45);
    const zoomEased = gsap.parseEase('power2.in')(zoomP);
    gsap.set(rsImpactoWord, {
        x: rsPortalDeltaX * zoomEased,
        y: rsPortalDeltaY * zoomEased,
        scale: 1 + (rsPortalTargetScale - 1) * zoomEased,
    });
}

// 4.2 — Testimonio: fade-in (0.50 → 0.65)
if (p4 >= 0.50) {
    const quoteInP = clamp01((p4 - 0.50) / 0.15);
    gsap.set(rsQuote, { opacity: quoteInP });
}

// 4.3 — Testimonio: fade-out puro, sin desplazamiento (0.75 → 0.85)
if (p4 >= 0.75) {
    const quoteOutP = clamp01((p4 - 0.75) / 0.10);
    gsap.set(rsQuote, { opacity: 1 - quoteOutP });
}

// 4.4 — Revelación de líneas con máscara (0.80 → 0.95), stagger entre líneas
const CLOSING_START = 0.80, CLOSING_END = 0.95, CLOSING_STEP = (CLOSING_END - CLOSING_START) / (rsClosingLines.length + 1) * 2;
rsClosingLines.forEach((line, i) => {
    const lineStart = CLOSING_START + i * CLOSING_STEP / 2;
    const localP = clamp01((p4 - lineStart) / CLOSING_STEP);
    const eased = gsap.parseEase('power2.out')(localP);
    gsap.set(line, { y: `${100 * (1 - eased)}%` });
});

// 4.4 — CTA: entra coordinado con la última línea (0.90 → 1.00)
if (p4 >= 0.90) {
    const ctaP = clamp01((p4 - 0.90) / 0.10);
    const ctaEased = gsap.parseEase('power2.out')(ctaP);
    gsap.set(rsCta, { y: 40 * (1 - ctaEased), opacity: ctaEased });
    rsCta.style.pointerEvents = ctaP >= 1 ? 'auto' : 'none';
}
```

`computeRsPortalConstants()` replica la fórmula ya usada en `computeGesture2Constants`/`computeGesture3Constants` (`caso-asdeporte.js`): mide `rsPAnchor.getBoundingClientRect()`, calcula `targetScale` para que `impacto` cubra sobradamente el viewport (`Math.max` en vez de `Math.min` — aquí se busca desbordar, no encajar, ya que el doc pide que los bordes salgan del viewport), y calcula el delta de traslación necesario para que el centro del anchor caiga en `(vw/2, vh/2)`.

## Guards onLeave/onLeaveBack

```js
onLeaveBack: () => {
    gsap.set('.rs-usuarios__word', { opacity: 1 }); // todas las palabras del título vuelven a verse
    gsap.set(rsRing, { opacity: 0, scale: 1, rotation: 0 });
    gsap.set(rsImpactoWord, { x: 0, y: 0, scale: 1 });
    rsPortalCaptured = false;
    gsap.set(rsQuote, { opacity: 0 });
    gsap.set(rsClosingLines, { y: '100%' });
    gsap.set(rsCta, { y: 40, opacity: 0 });
    rsCta.style.pointerEvents = 'none';
},
onLeave: () => {
    // estado final ya aplicado por el propio onUpdate en p4=1: título invisible,
    // testimonio invisible, cierre + CTA visibles y legibles.
}
```

## No está en scope

- Bloque E (modal "Qué aprendí" que abre `#rsQueAprendiBtn`, cierre de scroll, cards, CTA final)
- Medición exacta del counter de la "p" (aproximación por bbox del glifo, ver nota arriba)
