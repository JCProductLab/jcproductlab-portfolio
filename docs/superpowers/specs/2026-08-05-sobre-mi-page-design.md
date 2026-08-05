# Página "Sobre mí" (`sobre-mi.html`) — Design Spec

Fecha: 2026-08-05
Branch: `feature/mobile-tablet-caso` (o rama nueva a decidir en el plan)
Guía visual: `about.jpg` (mockup desktop, algunos textos son placeholder)

## Objetivo

Construir una página nueva "Sobre mí" (`sobre-mi.html`), mobile-first, con 6 secciones:
1. Hero (igual que index.html, contenido invertido: foto izquierda, texto/CTA derecha)
2. Sobre mí — nueva, bio extendida
3. Metodología — nueva, "Cómo trabajo" con 3 cards
4. Testimonial section — copia literal de index.html
5. Clients marquee — copia literal de index.html
6. CTA section ("¿Arrancamos?") — copia literal de index.html
7. Footer — copia literal de index.html

A diferencia de `caso-asdeporte.html` (construida desktop-first), esta página se construye **mobile-first**: el CSS base cubre mobile+tablet, y un archivo `-responsive` separado cubre desktop (1200px+).

## Archivos

- **Nuevo HTML**: `sobre-mi.html` (raíz del proyecto, mismo nivel que `index.html` / `caso-asdeporte.html`)
- **Nuevo CSS**: `css/about.css` (mobile + tablet, mobile-first — estilos base sin media query envolvente + un bloque `@media (min-width: 700px)` para tablet) y `css/about-responsive.css` (`@media (min-width: 1200px)` desktop). Mismo patrón que `case-study.css` / `case-study-responsive.css`, `decisiones.css` / `decisiones-responsive.css`.
- **CSS reusado sin modificar**: `reset.css`, `variables.css`, `phosphor.css`, `atoms.css`, `main.css`, `responsive.css`, `mask-reveal.css`, `testimonial-cards-reveal.css` — mismos `<link>` que `index.html`, en el mismo orden, agregando `about.css` y `about-responsive.css` al final.
- **Nuevo JS**: `js/modules/animations/pinned-overflow-section.js` (ver sección 5). Se inicializa mediante un `<script type="module">` inline dedicado en `sobre-mi.html` (mismo patrón que `initFractalBackground` en `index.html`, que se engancha aparte de `main.js`), **no** se agrega al `js/main.js` compartido — así `index.html` y `caso-asdeporte.html` quedan intactos y sin riesgo de romper nada ahí.
- **JS reusado sin modificar**: resto de `js/main.js` (theme, nav, magnetic, cursor, testimonial tilt/parallax, logos marquee reveal, cta fractal + reveal, scroll-to-top).

No se crean clases nuevas de tipografía o color. Todo el texto usa los tokens y clases ya definidas en `variables.css` (`h1`, `h2`, `h4`, `.bold-subtitle`, `.important`, `.large-paragraph`, `.small-paragraph`, `.caption`, `.section-header`, `.section-header__label.cs-label`) y los colores vía `var(--color-*)`. Las únicas clases nuevas son estructurales/de layout (contenedores, grids, el componente de card de metodología).

## Sección 1 — Hero invertido

HTML: mismo markup que `index.html` (`<section class="hero">`, tag de disponibilidad, H1 con word-swap vía `hero-intro.js`, H4 subtítulo, botón CTA, foto `assets/images/hero-photo.webp`), con el orden de los dos hijos directos invertido:

```html
<section class="hero hero--about" aria-label="Presentación">
    <div class="hero__right" aria-hidden="true"> ... foto ... </div>
    <div class="hero__content"> ... tag, h1, h4, cta ... </div>
</section>
```

- **Mobile/tablet (<1200px)**: sin cambios de CSS — `.hero__right` es `position:absolute; inset:0` (fondo full-bleed) y `.hero__content` es `position:relative` con gradiente superpuesto; el orden del DOM no afecta el resultado visual en ningún breakpoint por debajo de 1200px.
- **Desktop (1200px+)**, en `about-responsive.css`:
  - `.hero--about { flex-direction: row-reverse; }`
  - Espejar el posicionamiento absoluto de la foto: `.hero--about .hero__photo { left: auto; right: 40%; transform: translate(50%, -50%); }` (resto de propiedades idénticas al `.hero__photo` de `responsive.css` a 1200px).
  - `.hero--about .hero__right { align-items: flex-start; }` si hace falta ajustar el anclaje horizontal (verificar visualmente contra el mockup durante implementación).

El script `hero-intro.js` (envuelve palabras del H1, dispara `.hero-active`) se reutiliza sin cambios — opera sobre el H1 sin importar su posición en el DOM.

## Sección 2 — "Sobre mí" (`.about-bio`)

```html
<section class="about-bio" id="sobre-mi" aria-label="Sobre mí">
    <div class="about-bio__container">
        <header class="section-header about-bio__header">
            <span class="section-header__label cs-label">[ Sobre mí ]</span>
            <h2 class="section-header__title">Lorem ipsum dolor sit amet consectetur.</h2>
        </header>

        <div class="about-bio__mask">
            <div class="about-bio__track">
                <p>Soy un obsesivo del orden que encontró su lugar en el diseño digital. Me genera satisfacción tomar un caos, un proceso roto, una interfaz confusa, un flujo que nadie entiende y convertirlo en algo que funcione.</p>
                <p>No siempre fue así. En 2012, era el único diseñador en una oficina llena de ingenieros. Presenté un flujo de checkout que consideraba perfecto. El líder técnico me miró y me dijo: "Está muy bonito, pero eso no se puede programar en el tiempo que tenemos y va a romper la base de datos."</p>
                <p>Ese día tuve dos opciones: indignarme como artista o aprender cómo funcionaban sus códigos. Elegí lo segundo.</p>
                <p>Me metí a la arquitectura de su base de datos. Aprendí por qué mi diseño bonito era ineficiente a nivel de servidor. Empecé a proponer soluciones que respetaban su lógica sin sacrificar la experiencia del usuario. No aprendí código por hobby, lo aprendí para que mis diseños tuvieran permiso de existir en el mundo real.</p>
                <p>Ese momento define todo lo que hago hoy. Cuando presento un proyecto, sé exactamente qué tornillo van a tener que apretar los programadores para que mi visión cobre vida.</p>
                <p>No solo diseño interfaces. Diseño acuerdos técnicos.</p>
                <p>13 años después, sigo siendo el mismo tipo que quiere entender cómo funcionan las máquinas por dentro. Solo que ahora las máquinas son productos digitales y los resultados se miden en horas devueltas, conversiones ganadas y negocios que dejaron de hundirse.</p>
            </div>
        </div>
    </div>
</section>
```

(Nota: el copy real tiene 7 párrafos al desglosarlo por punto y aparte, no 5 como se veía en el mockup recortado — se usa el texto completo tal como lo dio el usuario.)

- Título: placeholder literal "Lorem ipsum dolor sit amet consectetur." — el usuario lo reemplaza después.
- Párrafos: usan el estilo de párrafo por default (heredado, `color: var(--color-text-secondary)` para legibilidad secundaria, como en `.cs-contexto__mask p`) — sin clase de tamaño especial salvo que al implementar se vea muy chico/grande contra el mockup, en cuyo caso usar `.large-paragraph` (ya existente) en vez de crear una clase nueva.
- `.about-bio__container`: `display:flex; flex-direction:column;` en mobile/tablet (header arriba, texto abajo), `flex-direction:row` en desktop 1200px+ (`about-bio__header` ~35%, `.about-bio__mask` ~60-65%), reproduciendo el layout del mockup.
- `.about-bio__mask`: `overflow:hidden`, alto = alto disponible de la sección menos el header (mobile) o alto completo de la columna (desktop). Es la "ventana" visible del texto.
- `.about-bio__track`: el elemento que se traslada verticalmente (`transform: translateY(...)`) cuando el contenido no cabe. Ver mecanismo de pin (sección 5).

## Sección 3 — "Metodología" (`.methodology`)

```html
<section class="methodology" aria-label="Metodología">
    <header class="section-header methodology__header">
        <span class="section-header__label cs-label">[ Metodología ]</span>
        <h2 class="section-header__title">Cómo trabajo</h2>
    </header>

    <div class="methodology__mask">
        <div class="methodology__track">
            <div class="methodology__grid">
                <article class="methodology-card">
                    <div class="methodology-card__header">
                        <span class="methodology-card__number important">01</span>
                        <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-magnifying-glass"></i></span>
                    </div>
                    <h3 class="bold-subtitle methodology-card__title">Primero la verdad, luego la solución</h3>
                    <p class="small-paragraph methodology-card__description">Empiezo cuestionando todo y buscando la verdad en los datos, los stakeholders y con los usuarios. Mi prioridad es garantizar que no se desperdicie un centavo diseñando una solución para el problema equivocado.</p>
                </article>

                <article class="methodology-card">
                    <div class="methodology-card__header">
                        <span class="methodology-card__number important">02</span>
                        <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-code"></i></span>
                    </div>
                    <h3 class="bold-subtitle methodology-card__title">Diseño que se puede construir</h3>
                    <p class="small-paragraph methodology-card__description">Traduzco los objetivos de negocio en un diseño y una arquitectura intuitiva para el usuario y viable para los desarrolladores. Elimino la fricción técnica antes de que se convierta en un retraso costoso.</p>
                </article>

                <article class="methodology-card">
                    <div class="methodology-card__header">
                        <span class="methodology-card__number important">03</span>
                        <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-rocket-launch"></i></span>
                    </div>
                    <h3 class="bold-subtitle methodology-card__title">La entrega no termina en Figma</h3>
                    <p class="small-paragraph methodology-card__description">Superviso la implementación hasta el último píxel para que los usuarios encuentren exactamente la solución de alta calidad que fue validada y genero estrategias post lanzamiento para una mejora continua.</p>
                </article>
            </div>
        </div>
    </div>
</section>
```

(Ajuste sobre el primer borrador de este spec: el `<header>` queda **fuera** de `.methodology__mask`/`.methodology__track`, igual que en la sección 2 — así el label+título quedan estáticos y solo las cards son las que se desplazan cuando desbordan, consistente con el patrón de `.about-bio`.)

- `.methodology-card__number`: reusa la clase tipográfica `.important` (extrabold, `clamp(1.5rem, 3vw, 2rem)`) ya existente — **no** se crea una escala de número gigante nueva; se acepta que el número sea más chico que en el mockup (que usa una talla display no definida en el sistema) para respetar "no inventar tipografía nueva". Color vía `var(--color-accent)` (override puntual en `.methodology-card__number`, mismo patrón que `.metric-badge__number`).
- `.methodology-card__icon`: círculo decorativo nuevo (36–40px), `background: var(--glass-bg)`, `border: 1px solid var(--color-glass-border)`, `backdrop-filter: var(--glass-backdrop)`, ícono en `var(--color-accent)` — visualmente igual a `.btn-icon` pero **sin** cursor/hover/transiciones de interactividad (es decorativo, `aria-hidden="true"`, no es un botón).
- `.methodology-card`: mismo tratamiento visual que `.testimonial-card` (`background: var(--color-bg); border: 1px solid var(--color-glass-border); border-radius: 24px; padding: 24px` mobile / `32px` tablet+).
- `.methodology-card__title`: clase existente `.bold-subtitle`.
- `.methodology-card__description`: clase existente `.small-paragraph`, color `var(--color-text-secondary)`.
- Grid:
  - Mobile y tablet portrait (`(max-width: 1199.98px) and (orientation: portrait)`, y mobile por defecto): `.methodology__grid { display:flex; flex-direction:column; gap:24px; }`, cards full width.
  - Tablet landscape (`(min-width: 700px) and (max-width: 1199px) and (orientation: landscape)`) y desktop (`min-width:1200px`): `.methodology__grid { display:flex; flex-direction:row; gap:24px/32px; }`, 3 columnas iguales (`flex: 1 1 0`).

## Sección 4, 5, 6 y footer — copia literal

Se copian tal cual desde `index.html`:
- `<section class="testimonial-section" aria-label="Testimonios de clientes">` completa (label, título, las 2 testimonial cards).
- `<section class="clients-marquee" ...>` completa (las 2 `<ul>`, lista real + clon `aria-hidden`).
- `<section class="cta-section" id="hablemos" ...>` completa, incluyendo `#cta-fractal-canvas` y los dos botones (mobile/desktop).
- `<footer class="footer" ...>` completo.

Sin cambios de CSS ni JS — ya están cubiertos por `main.css`/`responsive.css` y por `js/main.js` (`initTestimonialCardsReveal`, `initLogosReveal`, `initStickyReveal`, `initCtaSectionReveal`, `initFractalBackground`). El único ajuste: el link `href="#sobre-mi"` en el nav (header y overlay) de `sobre-mi.html` debe seguir apuntando al id `#sobre-mi`, que en esta página vive en `.about-bio` (sección 2) en vez del mini `.about-section` de index.

**Nota de alcance**: la mini sección `.about-section` ("Quién soy" + 1 párrafo + botón "Conóceme") que existe en `index.html` entre `case-cards` y `cta-section` **no** se incluye en `sobre-mi.html` — esa sección en index es justamente la que enlaza hacia esta página nueva.

## Header / nav / footer nav

El `<header class="header">`, `<div class="nav-overlay">` y los links de `footer__nav-list` se copian igual que en `index.html`. El link "Sobre mí" (`href="#sobre-mi"` en nav e nav-overlay, y `href="#sobre-mi"` en footer sitemap) en `index.html` seguirá apuntando al ancla local de esa mini-sección — **fuera de alcance** de este spec cambiar esos links para que apunten a `sobre-mi.html`; si el usuario lo pide, es un cambio de una línea en `index.html` a resolver aparte.

## Sección 5 — Mecanismo de pin/overflow (`pinned-overflow-section.js`)

Requisito del usuario: cada sección de la página (hero, Sobre mí, Metodología) ocupa exactamente el 100% del alto del viewport, ni más ni menos, en **todos** los breakpoints (mobile, tablet, desktop) — a diferencia de `caso-asdeporte.html`, donde el pin+scroll-interno de texto (`.cs-contexto__mask`/`__text-track`) es exclusivo de desktop (`MQ_DESKTOP`) y en mobile/tablet el contenido simplemente fluye a su alto natural.

Diseño del módulo:

- Recibe pares `{ section, mask, track }` (para esta página: `.about-bio` / `.about-bio__mask` / `.about-bio__track`, y `.methodology` / `.methodology__mask` / `.methodology__track`).
- Al `window.load` (mismo timing que `initMaskReveal`, `initTestimonialCardsReveal`, etc. en `js/main.js`), para cada trío:
  1. Mide `overflow = track.scrollHeight - mask.clientHeight`.
  2. Si `overflow <= 0` (el contenido ya cabe — ej. Metodología en desktop con 3 columnas, o cualquier breakpoint donde el texto/cards quepan): no crea `ScrollTrigger`, no hace nada — la sección se comporta como una sección fija normal.
  3. Si `overflow > 0`: crea un `ScrollTrigger` con `pin: section, start: 'top top', end: () => '+=' + overflow, scrub: 1`, y anima `track` con `y: -overflow` a lo largo de ese scroll. Al terminar, el pin se libera y el scroll continúa normalmente hacia la siguiente sección.
- Recalcula en `resize`/`orientationchange` (debounced), igual que el resto de los módulos de animación del sitio (relevante para el flujo tablet-landscape con el aviso de rotación/reload ya existente).
- Antes de `ScrollTrigger.create()`/`refresh()`, neutraliza `documentElement.style.scrollBehavior = 'auto'` y lo restaura ~500ms después — mismo workaround defensivo que `createPin()` en `decision-mc-pin.js`, por el bug conocido de `scroll-behavior:smooth` + Blink/Android documentado en el proyecto. Se aplica aunque el pin se cree al load (no dinámicamente tras interacción) porque es de bajo costo y ya está probado.
- Respeta `prefers-reduced-motion: reduce`: si está activo, no crea ningún pin — el contenido se muestra completo con overflow visible normal (mismo criterio que `mask-reveal.js`/`about-section-reveal.js`).
- Se registra vía `<script type="module">` dedicado dentro de `sobre-mi.html`, después del `<script type="module" src="js/main.js" defer>`, escuchando `window.load` igual que el resto de módulos de animación (no se toca `js/main.js`, compartido con `index.html`/`caso-asdeporte.html`).

CSS de soporte (en `about.css`):
- `.about-bio`, `.methodology { height: 100svh; @supports not (height: 100svh) { height: 100vh; } }` (mismo patrón que `.hero`/`.case-card`).
- `.about-bio__mask`, `.methodology__mask { overflow: hidden; }`.
- `.about-bio__track`, `.methodology__track { will-change: transform; }`.

## Fuera de alcance

- Versión en inglés (`en/sobre-mi.html`) — no se construye en esta iteración.
- Cambiar los links `#sobre-mi` existentes en `index.html` para apuntar a la nueva página.
- Copy final del título de la sección "Sobre mí" (queda el placeholder Lorem ipsum a pedido del usuario).
- Animaciones de entrada tipo stagger por línea/card en las secciones 2 y 3 (se usa únicamente el mask-reveal genérico ya existente para label+título de cada `.section-header`, que no requiere código nuevo).
