# Spec: Bloque 0 (Infraestructura) + Fase 1 (Mosaico y expansión)

**Fecha:** 2026-07-02
**Archivos principales:** `caso-asdeporte.html`, `css/resultado.css` (nuevo), `css/resultado-responsive.css` (nuevo), `js/resultado.js` (nuevo)

## Contexto

`caso-asdeporte.html` termina hoy en "El razonamiento 3" (`.cs-razonamiento[data-dec="3"]`), cuya frase final (`razon3Final`, "...arreglando el pago.") no tiene animación de salida — a propósito, quedó pendiente para cuando existiera el siguiente bloque (ver spec de Decisión 3, sección "No está en scope").

Este spec cubre las **5 fases de "Resultados"** descritas en `Requerimientos-Tecnicos-Animacion.md` (con los 57 valores numéricos que venían como imágenes inline decodificados) más las imágenes de referencia en `resultados/resultado-a` a `resultados/resultado-e`. Dado el tamaño, el trabajo se decidió dividir en sub-proyectos secuenciales, cada uno con su propio spec + plan + implementación:

- **Bloque 0** — infraestructura compartida (CSS, JS, punto de inyección HTML)
- **Bloque A** — Fase 1: Mosaico y expansión (este spec)
- **Bloque B** — Fase 2: Tránsito diagonal de tarjetas de métricas
- **Bloque C** — Fase 3: Entrada desfasada derecha a izquierda
- **Bloque D** — Fase 4: Portal de máscara tipográfica y revelación
- **Bloque E** — Fase 5: Modal, cierre de scroll, cards y CTA final con botón líquido

Decisiones ya tomadas con el usuario:
- Arquitectura de scroll: **GSAP ScrollTrigger con `pin: true` + pin-spacers** (no `position: sticky` nativo, pese a que el doc lo sugiere) — consistente con Apertura/Contexto/Decisiones 1-3, incluye el fix de `onLeaveBack`/`onLeave` aprendido en el bug de la línea fantasma.
- Cards de "casos de estudio" (Fase 5.3): contenido placeholder por ahora.
- Footer "¿ARRANCAMOS?" (Fase 5.3): se duplica el HTML/CSS/JS de `.cta-section` (no se extrae a Web Component compartido).
- Orden de trabajo: secuencial 0→A→B→C→D→E.

## Bloque 0 — Infraestructura

### Archivos nuevos

1. **`css/resultado.css`** — stub base (mobile/tablet se construirá después). Contenido mínimo:
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

2. **`css/resultado-responsive.css`** — todo el maquetado desktop, dentro de `@media (min-width: 1200px) { ... }` (mismo patrón que `decisiones-responsive.css`).

3. **`js/resultado.js`** — todos los `ScrollTrigger.create` de las 5 fases. Archivo nuevo (no se seguirá creciendo `js/caso-asdeporte.js`, que ya tiene ~3600 líneas). Mismo guard de entrada:
   ```js
   if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
       gsap.registerPlugin(ScrollTrigger);
       // ...
   }
   ```
   Se carga como `<script type="module" src="js/resultado.js" defer></script>` después de `js/main.js` en `caso-asdeporte.html`.

### Nomenclatura

Prefijo `rs-` ("resultado") para todas las clases nuevas — cero colisión con `cs-` (case-study/decisiones).

### Cambios en `caso-asdeporte.html`

1. Cuatro `<link rel="stylesheet">` nuevos en `<head>`, después de `css/modal-rol-proceso-responsive.css` (línea 69 actual):
   ```html
   <link rel="stylesheet" href="css/resultado.css">
   <link rel="stylesheet" href="css/resultado-responsive.css">
   ```
2. Un `<script type="module" src="js/resultado.js" defer></script>` después del script de `js/main.js`.
3. Todo el contenido HTML de las 5 fases se inyecta dentro de `<main>`, inmediatamente después del cierre de `.cs-razonamiento[data-dec="3"]` (línea 913 actual) y antes de `</main>`.

### z-index

`.cs-problema` (el más alto actual) usa z-index 6. Las secciones de Resultados viven todas por encima de las Decisiones (nunca vuelven a estar en pantalla simultáneamente, pero por seguridad de stacking): `.rs-mosaico` usa **z-index 7**, y cada fase subsiguiente puede reusar el mismo z-index (7) ya que son mutuamente excluyentes en el tiempo (se ocultan/revelan por `transform`, nunca coexisten visualmente).

## Bloque A — Fase 1: Mosaico y expansión

### Arquitectura de scroll

Un único `ScrollTrigger.create` (`trigger: '.cs-pin-spacer--rs-mosaico'`), pin de **350vh** (dentro del rango 300-400vh sugerido por el doc), `scrub: 1`. Ancla su `start` a `razonamiento3ST.end` (capturado vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--decision-3-razonamiento`, ya existente).

Toda la matemática de las 3 sub-fases se resuelve dentro de un único `onUpdate` a partir de `self.progress` (llamado `p1` en el código para no colisionar con la `p` de otros closures) — mismo patrón que los gates de "El Problema"/"La Decisión" (una función, varios tramos de progreso).

### HTML

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

7 tarjetas / 5 columnas (patrón masonry: columnas 1 y 5 = 2 cards cortas apiladas, columnas 2 y 4 = 1 card alta, columna 3 = 1 card alta marcada `data-center="true"` — la que se aísla y escala en 1.3). Nota: las proporciones exactas de columnas/gaps se afinan visualmente contra las capturas de `resultados/resultado-a/` durante implementación; esta estructura de 7 cards / 5 columnas es la base de partida.

### CSS (`resultado-responsive.css`, dentro del media query desktop)

```css
.cs-pin-spacer--rs-mosaico { height: 350vh; }

.rs-mosaico {
    position: fixed;
    inset: 0;
    z-index: 7;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform: translateY(100vh); /* reposo: oculto, coincide con el estado inicial que el JS respeta antes del primer onUpdate */
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
    font-family: var(--font-mono, monospace);
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
```

### Mecánica JS (`resultado.js`, dentro del `ScrollTrigger.create` de `.cs-pin-spacer--rs-mosaico`)

Constantes de tramo (progreso `p1 = self.progress`):

| Elemento | Rango p1 | Fórmula |
|---|---|---|
| `razon3Final` (salida) | 0.00 – 0.20 | `y: -clamp01(p1/0.20) * vh`, **opacity fija en 1** (nunca se toca) |
| `.rs-mosaico__intro` (entrada) | 0.10 – 0.25 | `subP = clamp01((p1-0.10)/0.15)`, ease `power2.out`: `y: 60*(1-eased)`, `opacity: eased` |
| `.rs-mosaico__card` (aparición + parallax) | 0.20 – 0.65 | offset inicial por `data-size` (`tall` arranca más abajo que `short`); interpolación lineal a 0 con `ease power2.out`, todas llegan a 0 exactamente en p1=0.65 |
| `.rs-mosaico__intro` (salida) | 0.55 – 0.70 | `subP = clamp01((p1-0.55)/0.15)`: `y: -subP*vh`, `opacity: 1-subP` |
| Respiro | 0.70 – 0.80 | sin cambios |
| `.rs-mosaico__card--center` (aislamiento + escala) | 0.80 – 1.00 | en el primer frame con `p1>=0.80`: captura `getBoundingClientRect()`, promueve a `position: fixed` con esas coordenadas exactas (sin salto); luego interpola `width/height/top/left` hasta cubrir `100vw`/`100vh` con `top:0; left:0`, `border-radius` a 0, ease `power2.in` (mismo patrón de interpolación `INIT_W/INIT_H → vw/vh` ya usado en la imagen de "La Decisión" de cada gate) |

Guard idempotente para el `data-center`: un flag booleano (`gate1CenterPromoted`) evita recapturar el `getBoundingClientRect()` en cada frame; se resetea a `false` en `onLeaveBack`.

### Guards de robustez (aprendidos del bug de la línea fantasma)

```js
onLeaveBack: () => {
    gsap.set(razon3Final, { y: 0, opacity: 1 });
    gsap.set('.rs-mosaico', { y: '100vh' });
    gsap.set('.rs-mosaico__intro', { y: 60, opacity: 0 });
    gsap.set('.rs-mosaico__card', { /* reset a offset inicial por data-size */ });
    gate1CenterPromoted = false;
    // reset explícito de position/width/height/top/left de la card center a los valores CSS (position: relative, width/height: auto)
},
onLeave: () => {
    gsap.set('.rs-mosaico', { y: 0 });
    // estado final: card center a 100vw/100vh ya aplicado por el propio onUpdate en p1=1
}
```

### Contenido

Imágenes: placeholder Unsplash (URLs de ejemplo arriba, intercambiables). Label `[ RESULTADO ]` y título son copy real (no placeholder) — vienen directo del doc y las capturas.

## No está en scope de este spec

- Fases 2-5 (Bloques B-E, specs separados)
- Mobile/tablet (`resultado.css` queda como stub)
- Proporciones pixel-perfect del grid (se afinan en implementación/revisión visual)
