# Spec: Bloque E — Fase 5 (Modal, cierre de scroll, cards y CTA final con botón líquido)

**Fecha:** 2026-07-02
**Archivos principales:** `caso-asdeporte.html`, `css/resultado-responsive.css`, `css/atoms.css`, `js/resultado.js`, `js/resultado-modal-aprendi.js` (nuevo)

## Contexto

Cierra la secuencia de Resultados. Cuatro piezas, cada una con su propio mecanismo de interacción:

1. **5.1 Modal "Qué aprendí"** — disparado por click en `#rsQueAprendiBtn` (creado en Bloque D). NO usa scroll — reutiliza exactamente la lógica de `js/modal-rol-proceso.js` (slide `x:0`/`x:'100%'`, `duration:0.6`, `ease:'power2.out'`/`'power2.in'`, overlay + Escape + lock de scroll).
2. **5.2 Salida del cierre de Fase 4 + peek-reveal de agradecimiento** — scroll-driven, continúa el `ScrollTrigger` chain, anima la salida de `.rs-testimonio__closing`/`.rs-testimonio__cta` (elementos de Bloque D — mismo patrón de relevo ya usado en todo el proyecto) y la entrada de "¡Gracias / por ver!" + imagen con parallax diferencial.
3. **5.3 Cards de casos de estudio + footer "¿ARRANCAMOS?"** — mismo ST, continúa el progreso.
4. **5.4 Botón líquido de contacto** — átomo nuevo e independiente, animación por `:hover`, NO ligada a scroll. Vive en `atoms.css`/`ATOMS.md`, no en `resultado.css`.

Referencias visuales: `resultados/resultado-e/resultado-e-01-modal.jpg` a `resultado-e-09.jpg`. `resultados/CTA.jpg` (mencionado en el prompt original) no existe en el repo — la sección 5.4 del doc técnico trae todos los valores exactos en texto (gap, grados de rotación), así que no bloquea.

Decisiones ya tomadas con el usuario:
- Cards de casos de estudio: contenido placeholder (mismo texto/foto que las capturas, intercambiable después).
- Footer "¿ARRANCAMOS?": se duplica el HTML/CSS/JS de `.cta-section` de `index.html` (no se extrae a Web Component compartido).

Copy real:
- Modal — título: "Lo que los datos me enseñaron que el brief no podía decirme."
- Modal — Lección 1: "Habla el idioma del negocio. Defender al usuario a veces significa argumentar con métricas, no con empatía. El argumento que ganó con Oxxo no fue "es mejor para el usuario" — fue "esto nos está costando conversiones medibles.""
- Modal — Lección 2: "Los datos destruyen las mejores ideas. Diseñé un buscador geolocalizado por mapa con total convicción. El 4% de los usuarios lo usaba. Los atletas no buscan por GPS — buscan por estado, fecha y disciplina. Degradé el mapa, convertí la búsqueda en filtros por región."
- Modal — Lección 3: "La pregunta correcta. Dejé de preguntar "¿dónde abandona el usuario?" Ahora pregunto "¿qué duda específica lo hizo abandonar?" Son preguntas distintas. Llevan a soluciones distintas."
- "¡Gracias / por ver!"
- Cards (placeholder, mismo texto en ambas por ahora): "Atletas que entrenaban meses para un triatlón encontraban más obstáculos en la app que en la carrera."
- Footer: label "Contacto", título "¿Arrancamos?", texto "El siguiente paso es una conversación." (idéntico a `index.html`)
- Botón: "CHARLEMOS" / "EN" / ícono WhatsApp

## 5.1 — Modal "Qué aprendí"

### HTML

Se inserta como hermano de los modales existentes (después del modal `#modalProceso`, antes del `<script>` final):
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

### CSS

`.modal-rol-proceso`, `.modal-rol-proceso__overlay`, `.modal-rol-proceso__content`, `.modal-rol-proceso__close`, `.modal-rol-proceso__label` ya existen y se heredan sin cambios (mismo shell). Solo el contenido interno es nuevo, en `resultado-responsive.css`:

```css
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

### JS (`js/resultado-modal-aprendi.js`, nuevo módulo, mismo patrón que `modal-rol-proceso.js`)

```js
'use strict';

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
            x: '100%', duration: 0.6, ease: 'power2.in',
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

Se importa y llama en `caso-asdeporte.html` — mismo patrón que `js/main.js` con `initModalMiRol()`, pero `caso-asdeporte.html` no usa `js/main.js` completo (tiene su propio bundle de scripts). Se añade un `<script type="module">` inline o se importa dentro de `js/resultado.js` mismo. Decisión: importar dentro de `js/resultado.js` (evita un script tag adicional):
```js
import { initModalQueAprendi } from './resultado-modal-aprendi.js';
// ...al final del archivo, fuera del guard de gsap (no depende de GSAP para abrir/cerrar el DOM,
// aunque internamente usa gsap.to — gsap ya está cargado globalmente vía CDN a esta altura del documento)
initModalQueAprendi();
```

## 5.2 + 5.3 — ScrollTrigger de cierre (`rs-cierre`)

Un `ScrollTrigger.create` (`trigger: '.cs-pin-spacer--rs-cierre'`), pin de **350vh**, `scrub: 1`. Ancla su `start` al `.end` del ST de Fase 4 (`cs-pin-spacer--rs-testimonio`).

Progreso normalizado `p5 = self.progress`:

| Sub-fase | Rango p5 | Qué pasa |
|---|---|---|
| Salida del cierre de Fase 4 | 0.00 – 0.15 | `.rs-testimonio__closing` (líneas de texto) y `.rs-testimonio__cta` se desplazan `-Y` hasta salir del viewport. Mismo patrón de relevo: este ST es responsable de sacar el contenido del bloque anterior. |
| Entrada "¡Gracias" | 0.05 – 0.30 | Palabra "¡Gracias" entra desde abajo (`+Y`) con fade, se desplaza además hacia su derecha mientras se hace scroll (ligero drift horizontal, `+X` pequeño). |
| Entrada "por ver!" | 0.10 – 0.35 | Palabra "por ver!" entra desde abajo con fade, deriva hacia su izquierda (`-X` pequeño) — más lenta que "¡Gracias" (`v_texto > v_contenedor_imagen`, aplicado aquí como que el texto en conjunto se asienta antes que la imagen). |
| Entrada contenedor de imagen | 0.10 – 0.40 | Imagen entra desde abajo con fade, más lenta que el texto — llega a su posición de reposo después de que el texto ya se asentó, generando el efecto de profundidad/parallax. |
| Entrada de cards de casos | 0.45 – 0.65 | 2 cards entran desde abajo-izquierda con stagger (card 1: 0.45–0.55, card 2: 0.55–0.65), fade + translate. |
| Entrada del footer de contacto | 0.65 – 1.00 | Label `[ CONTACTO ]`, título "¿ARRANCAMOS?" y texto ascienden al centro con pequeño stagger entre los tres (cada uno 0.10 de rango, encadenados). |

### HTML

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

### CSS

```css
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

### Mecánica JS

Reusa la constante de "salida" ya usada en cada relevo del proyecto (`-Y` hasta `vh`), y el patrón de entrada `translateY(60px) → 0 + fade` usado en Fase 1/3.

```js
// Salida del cierre de Fase 4 (0.00 → 0.15) — relevo sobre elementos de Bloque D
const exitP = clamp01(p5 / 0.15);
gsap.set('.rs-testimonio__closing', { y: -exitP * vh });
gsap.set('.rs-testimonio__cta',     { y: -exitP * vh, opacity: 1 - exitP });

// "¡Gracias" (0.05 → 0.30), deriva +X
const graciasP = clamp01((p5 - 0.05) / 0.25);
const graciasEased = gsap.parseEase('power2.out')(graciasP);
gsap.set(rsGraciasLeft, { y: 60 * (1 - graciasEased), x: 20 * graciasEased, opacity: graciasEased });

// "por ver!" (0.10 → 0.35), deriva -X, más lenta (arranca después)
const porVerP = clamp01((p5 - 0.10) / 0.25);
const porVerEased = gsap.parseEase('power2.out')(porVerP);
gsap.set(rsGraciasRight, { y: 60 * (1 - porVerEased), x: -20 * porVerEased, opacity: porVerEased });

// Imagen (0.10 → 0.40), más lenta que el texto — profundidad/parallax
const mediaP = clamp01((p5 - 0.10) / 0.30);
const mediaEased = gsap.parseEase('power2.out')(mediaP);
gsap.set(rsCierreMedia, { y: 80 * (1 - mediaEased), opacity: mediaEased });

// Cards (0.45 → 0.65), stagger
rsCierreCases.forEach((card, i) => {
    const start = 0.45 + i * 0.10;
    const localP = clamp01((p5 - start) / 0.10);
    const eased = gsap.parseEase('power2.out')(localP);
    gsap.set(card, { y: 60 * (1 - eased), opacity: eased });
});

// Footer (0.65 → 1.00), stagger label→título→texto
const footerEls = [rsFooterLabel, rsFooterTitle, rsFooterText];
footerEls.forEach((el, i) => {
    const start = 0.65 + i * 0.10;
    const localP = clamp01((p5 - start) / 0.15);
    const eased = gsap.parseEase('power2.out')(localP);
    gsap.set(el, { y: 40 * (1 - eased), opacity: eased });
});
```

### Guards onLeave/onLeaveBack

```js
onLeaveBack: () => {
    gsap.set('.rs-testimonio__closing', { y: 0 });
    gsap.set('.rs-testimonio__cta',     { y: 0, opacity: 1 });
    gsap.set('.rs-cierre', { y: '100vh' });
    gsap.set(rsGraciasLeft,  { y: 60, x: 0, opacity: 0 });
    gsap.set(rsGraciasRight, { y: 60, x: 0, opacity: 0 });
    gsap.set(rsCierreMedia,  { y: 80, opacity: 0 });
    gsap.set(rsCierreCases,  { y: 60, opacity: 0 });
    gsap.set([rsFooterLabel, rsFooterTitle, rsFooterText], { y: 40, opacity: 0 });
},
onLeave: () => {
    gsap.set('.rs-cierre', { y: 0 });
}
```

## 5.4 — Botón líquido (átomo nuevo, `atoms.css`)

**No** vive en `resultado.css`/`resultado-responsive.css` — es un átomo del sistema de diseño, documentado en `ATOMS.md` junto a `.btn`/`.btn-icon`. Animación 100% por `:hover` con `transition`, sin GSAP ni scroll.

### HTML (átomo)

```html
<div class="btn-liquid">
    <span class="btn-liquid__pill btn-liquid__pill--charlemos">CHARLEMOS</span>
    <span class="btn-liquid__pill btn-liquid__pill--en">EN</span>
    <span class="btn-liquid__pill btn-liquid__pill--whatsapp"><i class="ph ph-whatsapp-logo"></i></span>
</div>
```

### CSS (`atoms.css`, sección nueva junto a `.btn`)

Estados (valores del doc, decodificados): gap inicial `16px` → `0px` en hover; ícono rota `-90°` (reposo) → `+90°` (transición) → `0°` (final/hover completo).

```css
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

/* Hover del wrapper — fusión líquida */
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

Nota: los valores de `translateX`/padding son un punto de partida razonable (gap 16px→0px y rotación -90°→0° sí son del doc, exactos); las distancias de traslación (`24px`, `-8px`, `-24px`) se afinan visualmente en revisión contra `resultado-e-08.jpg`/`resultado-e-09.jpg` (estado de reposo, único estado del que sí hay captura — el estado hover de `CTA.jpg` no está disponible en el repo).

### Documentación (`ATOMS.md`)

Añadir sección `## Botón líquido (`.btn-liquid`)` junto a la de `.btn`, con el snippet HTML de arriba y la nota de que es exclusivo para el CTA final de casos de estudio (no reemplaza `.btn.btn--primary`).

## No está en scope

- Contenido real de las 2 cards de casos de estudio (placeholder por decisión ya tomada)
- Estado hover exacto pixel-perfect del botón líquido (se afina en revisión visual, `CTA.jpg` no disponible)
