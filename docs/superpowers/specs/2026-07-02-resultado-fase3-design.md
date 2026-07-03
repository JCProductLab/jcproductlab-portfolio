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
| 3.3 Salida por barrido vertical | 0.75 – 1.00 | Imagen y párrafo se desplazan verticalmente hacia arriba (`-Y`) de forma lineal hasta salir completamente por el borde superior. El título permanece anclado, fijo, sin moverse — queda preparado como fondo de la Fase 4. |

## HTML

```html
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
    top: calc(var(--cs-header-height) + 480px);
    right: 80px;
    width: 45%;
    max-width: 780px;
    opacity: 0;
    will-change: transform, opacity;
}
```

## Mecánica JS

Constante compartida `RS_ENTRY_OFFSET_X = 200` (px de desplazamiento horizontal en la entrada, mismo valor de referencia usado en Fase 2 para el título).

```js
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

// 3.3 — Salida por barrido vertical de imagen + texto (0.75 → 1.00), título NO se toca
if (p3 >= 0.75) {
    const exitP = clamp01((p3 - 0.75) / 0.25);
    gsap.set(rsUsuariosMedia, { y: -exitP * vh });
    gsap.set(rsUsuariosText, { y: -exitP * vh });
}
```

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
