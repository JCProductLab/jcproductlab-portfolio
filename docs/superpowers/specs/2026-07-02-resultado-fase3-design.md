# Spec: Bloque C — Fase 3 (Entrada desfasada derecha a izquierda)

**Fecha:** 2026-07-02
**Archivos principales:** `caso-asdeporte.html`, `css/resultado-responsive.css`, `js/resultado.js`

## Contexto

Continúa de Bloque B (Fase 2). Al cerrar Fase 2 la pantalla queda en negro sólido (título con fade-out puro). Fase 3 presenta el título "El impacto en los usuarios", una imagen y un párrafo descriptivo, todos entrando desde la derecha con fade-in, en cascada (uno arranca cuando el anterior se estabiliza), y salen por barrido vertical dejando el título anclado.

Referencias visuales: `resultados/resultado-c/resultado-c-01.jpg` a `resultado-c-07.jpg`.

Copy real (de las capturas):
- Título: "El impacto en los usuarios" (dos líneas: "El impacto en" / "los usuarios")
- Párrafo: "Las métricas contaban la mitad de la historia. La otra mitad la contaron las grabaciones en Hotjar. Rage clicks que desaparecieron, usuarios que encontraban Oxxo y continuaban con alivio visible, el campo del CURP que dejó de paralizar."

## Arquitectura de scroll

Un `ScrollTrigger.create` (`trigger: '.cs-pin-spacer--rs-usuarios'`), pin de **300vh** (rango mínimo del doc — es la fase más corta, 3 sub-tramos simples), `scrub: 1`. Ancla su `start` al `.end` del ST de Fase 2 (`cs-pin-spacer--rs-metricas`).

Progreso normalizado `p3 = self.progress`:

| Sub-fase | Rango p3 | Qué pasa |
|---|---|---|
| 3.1 Entrada del título | 0.00 – 0.25 | "El impacto en los usuarios": `opacity 0→1` + desplazamiento horizontal desde `+X` (derecha) hasta su posición final `padding-left: 80px`. |
| 3.2 Entrada desfasada de imagen y texto | 0.20 – 0.70 | Mismo comportamiento (desplazamiento horizontal derecha→izquierda + fade-in) en cascada: imagen entra 0.20–0.45 (arranca cuando el título ya se estabilizó), párrafo entra 0.45–0.70 (arranca cuando la imagen ya se posicionó). |
| 3.3 Salida en cascada por barrido vertical | 0.75 – 1.00 | Imagen y párrafo se desplazan verticalmente hacia arriba (`-Y`) hasta salir por el borde superior, **en cascada y sin solape**: la imagen sale primero (0.75–0.875) y solo cuando ya salió por completo empieza a subir el párrafo (0.875–1.00). El título permanece anclado, fijo, sin moverse — queda preparado como fondo de la Fase 4. |

**Corrección vs. plan original:** el plan inicial tenía imagen y párrafo saliendo *simultáneamente* en 0.75–1.00. Las capturas `resultado-c-05.jpg` a `resultado-c-07.jpg` muestran lo contrario: en 05/06 la imagen ya está saliendo (parcial y casi completamente fuera) mientras el párrafo sigue intacto en su lugar; solo en 07, con la imagen ya afuera, el párrafo empieza a subir. Es la misma lógica de cascada que ya rige la entrada (imagen antes que texto), aplicada también a la salida.

## HTML

```html
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

**Correcciones vs. plan original (revisadas contra `css/variables.css` y el resto de la página):**
- `.rs-usuarios__title` no tenía clase tipográfica. No existe una regla global para `h3` en `variables.css` (solo `h1`/`h2`/`h4`) — sin clase se renderizaría con el tamaño por defecto del navegador, no el de las capturas. Se agrega `cs-section-title`, la misma clase que ya usan `.rs-mosaico__intro h3` (Fase 1) y `.rs-metricas__title` (Fase 2) para títulos de este mismo nivel.
- `.rs-usuarios__text` tampoco tenía clase. Otros párrafos largos descriptivos de la página (ej. `.cs-decision-mc__text`, de longitud comparable) usan `cs-body-xxl`, que además trae `color: var(--color-text-secondary)` — coincide con el gris visto en las capturas. Se agrega esa clase.
- La foto placeholder (`1571019613454-1cb2f99b2d8b`) ya se usa en la Fase 1 (mosaico, columna 2) — repetirla en la misma página de caso de estudio no es profesional. Se reemplaza por `1512941937669-90a1b58e7e9c` (persona con teléfono/app), verificada (200 OK) y no usada en ningún otro punto de `caso-asdeporte.html`.

Se inserta después de `</section>` de `.rs-metricas` y antes de `</main>`, precedida de:
```html
<div class="cs-pin-spacer cs-pin-spacer--rs-usuarios" data-phase="rs-usuarios"></div>
```

## CSS (`resultado-responsive.css`)

```css
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
    /* top NO se fija aquí con un número adivinado: lo calcula JS una
       sola vez a partir de la altura REAL renderizada de .rs-usuarios__media
       (ver "Corrección: solape imagen/párrafo" más abajo). Este valor es
       solo el fallback de primer pintado, antes de que JS corra. */
    top: calc(var(--cs-header-height) + 580px);
    right: 80px;
    width: 45%;
    max-width: 780px;
    opacity: 0;
    will-change: transform, opacity;
}
```

**Corrección: solape imagen/párrafo en pantallas anchas.** Con `max-width:780px` y `aspect-ratio:16/9`, la imagen alcanza hasta 438.75px de alto → su borde inferior cae en `80px + 438.75px = 518.75px` (relativo al offset del header). El plan original fijaba el `top` del párrafo en `480px` — un solape de ~39px en cualquier pantalla ≥1733px de ancho (la mayoría de monitores desktop reales, no un caso límite). Reproducir el mismo patrón de "top/left fijo, JS solo mueve con transform" que ya usan `.rs-metricas__card` y el resto del archivo (ver comentario en `resultado-responsive.css:186-191`) exigiría adivinar un número fijo también aquí — en su lugar, el `top` se sigue fijando una sola vez, pero con un valor **medido en vivo** (altura real de `.rs-usuarios__media` ya renderizada) en vez de adivinado, análogo a como Fase 1 mide `rsIntroRestTop`/`minTallTop` con `offsetTop` real antes de derivar sus constantes. Una vez fijado ese `top`, el resto de la animación sigue moviendo el párrafo solo por `x`/`y` (transform), nunca tocando `top` de nuevo — la regla de la Fase 2 se respeta igual.

## Mecánica JS

Constante compartida `RS_ENTRY_OFFSET_X = 200` (px de desplazamiento horizontal en la entrada, mismo valor de referencia usado en Fase 2 para el título).

**Captura lazy del `top` del párrafo (una sola vez, mismo patrón que `rsEntryOffsetsCaptured` de Fase 1):** en el primer `onUpdate`, se mide la altura real renderizada de `.rs-usuarios__media` (`getBoundingClientRect().height`, ya resuelta por el navegador según el `width:45%; max-width:780px` real del viewport) y se fija el `top` del párrafo a `mediaTop + mediaHeight + buffer`. A partir de ahí, el párrafo nunca vuelve a tocar `top`: solo `x`/`y`/`opacity` vía transform, igual que el resto del archivo.

```js
let rsTextTopCaptured = false;
const RS_TEXT_TOP_BUFFER = 40; // px de aire entre el borde inferior de la imagen y el párrafo

// 3.0 — Captura lazy (una sola vez, antes de que el párrafo sea visible)
if (!rsTextTopCaptured && rsUsuariosMedia && rsUsuariosText) {
    const mediaRect = rsUsuariosMedia.getBoundingClientRect();
    const mediaTop = rsUsuariosMedia.offsetTop; // relativo a .rs-usuarios (mismo ancestro posicionado)
    gsap.set(rsUsuariosText, { top: mediaTop + mediaRect.height + RS_TEXT_TOP_BUFFER });
    rsTextTopCaptured = true;
}

// 3.1 — Título (0.00 → 0.25)
const titleP = clamp01(p3 / 0.25);
const titleEased = gsap.parseEase('power2.out')(titleP);
gsap.set(rsUsuariosTitle, { x: RS_ENTRY_OFFSET_X * (1 - titleEased), opacity: titleEased });

// 3.2a — Imagen (0.20 → 0.45)
const mediaP = clamp01((p3 - 0.20) / 0.25);
const mediaEased = gsap.parseEase('power2.out')(mediaP);
gsap.set(rsUsuariosMedia, { x: RS_ENTRY_OFFSET_X * (1 - mediaEased), opacity: mediaEased });

// 3.2b — Texto (0.45 → 0.70)
const textP = clamp01((p3 - 0.45) / 0.25);
const textEased = gsap.parseEase('power2.out')(textP);
gsap.set(rsUsuariosText, { x: RS_ENTRY_OFFSET_X * (1 - textEased), opacity: textEased });

// 3.3a — Salida de la imagen (0.75 → 0.875)
if (p3 >= 0.75) {
    const mediaExitP = clamp01((p3 - 0.75) / 0.125);
    gsap.set(rsUsuariosMedia, { y: -mediaExitP * vh });
}

// 3.3b — Salida del párrafo, EN CASCADA tras la imagen (0.875 → 1.00), título NO se toca
if (p3 >= 0.875) {
    const textExitP = clamp01((p3 - 0.875) / 0.125);
    gsap.set(rsUsuariosText, { y: -textExitP * vh });
}
```

**Corrección vs. plan original:** el plan original hacía salir imagen y párrafo juntos en el mismo rango (0.75→1.00, ambos con la misma fórmula). Las capturas de referencia (`resultado-c-05.jpg` a `07.jpg`) muestran una salida en cascada: la imagen sale y desaparece por completo primero, y solo entonces el párrafo empieza a subir — igual que la entrada (imagen antes que texto). Se divide el rango 0.75–1.00 en dos mitades secuenciales sin solape, cada una repitiendo la misma mecánica de barrido vertical que ya tenía el plan original, solo con su propio rango.

## Guards onLeave/onLeaveBack

```js
onLeaveBack: () => {
    gsap.set('.rs-usuarios', { y: '100vh' });
    gsap.set(rsUsuariosTitle, { x: RS_ENTRY_OFFSET_X, opacity: 0 });
    gsap.set(rsUsuariosMedia, { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 });
    gsap.set(rsUsuariosText,  { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 });
},
onLeave: () => {
    gsap.set('.rs-usuarios', { y: 0 });
    // media/texto ya fuera de pantalla por el propio onUpdate en p3=1; título permanece.
}
```

## No está en scope

- Bloques D, E (specs separados)
- El párrafo con "iluminado gris oscuro → gris claro" que describe el doc informal antiguo — esa técnica corresponde a la sección "Contexto" (ya construida, scroll horizontal), no a esta Fase 3. El doc técnico (autoritativo, más reciente) especifica para Fase 3 el mismo patrón simple de fade+slide que el título, sin ese efecto de iluminación progresiva.
