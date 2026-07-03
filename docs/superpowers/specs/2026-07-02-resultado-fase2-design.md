# Spec: Bloque B — Fase 2 (Tránsito diagonal de tarjetas de métricas)

**Fecha:** 2026-07-02
**Archivos principales:** `caso-asdeporte.html`, `css/resultado-responsive.css`, `js/resultado.js`

## Contexto

Continúa directamente de Bloque A (Fase 1 — Mosaico). Al final de la Fase 1, la tarjeta central del mosaico cubre 100vw×100vh (`.rs-mosaico__card--center` en su estado final). La Fase 2 hace que esa imagen de pantalla completa se retire hacia arriba y presenta 3 tarjetas de métricas que cruzan la pantalla en diagonal.

Referencias visuales: `resultados/resultado-b/resultado-b-01.jpg` a `resultado-b-10.jpg`. Confirmado visualmente: **3 tarjetas** (no 5 — el doc informal antiguo mencionaba 5, el doc técnico y las capturas confirman 3).

Copy real (de las capturas, no placeholder):
- Título: "El impacto en el negocio"
- Tarjeta 1: `+30%` / "Uso de beneficios Plus." / "Retención D30: 20% → 25% en Amplitude."
- Tarjeta 2: `-60%` / "Tickets de soporte por pagos." / "Medido en Zendesk pre y post lanzamiento."
- Tarjeta 3: `+25%` / "Conversión de inscripciones." / "De 9.2% → 11.5% vía Mixpanel."

## Arquitectura de scroll

Un `ScrollTrigger.create` (`trigger: '.cs-pin-spacer--rs-metricas'`), pin de **320vh**, `scrub: 1`. Ancla su `start` al `.end` del ST de Fase 1 (capturado vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--rs-mosaico`, creado en Bloque A).

Progreso normalizado `p2 = self.progress`, 3 sub-tramos:

| Sub-fase | Rango p2 | Qué pasa |
|---|---|---|
| 2.1 Salida del lienzo anterior + entrada de título | 0.00 – 0.20 | La imagen full-bleed heredada de Fase 1 (`.rs-mosaico__card--center`) se desplaza linealmente hacia arriba (`-Y`) hasta desaparecer. El título "El impacto en el negocio" entra con `opacity: 0→1` desde `+X` (derecha) hasta su posición final `padding-left: 80px`. |
| 2.2 Desplazamiento diagonal de tarjetas | 0.15 – 0.90 | 3 tarjetas viajan en diagonal constante de 30°-45° respecto a la horizontal, desde el cuadrante inferior izquierdo (fuera de pantalla, `+Y,-X`) hasta el cuadrante superior derecho (fuera de pantalla, `-Y,+X`). Stagger: Tarjeta 1 arranca primero (offset +25% del rango), Tarjeta 2 con desfase -60%, Tarjeta 3 con desfase +30% — offsets de **inicio de la tarjeta dentro del rango 0.15-0.90**, no multiplicadores de velocidad. |
| 2.3 Cierre de escena | 0.90 – 1.00 | Una vez la Tarjeta 3 sale completamente, el título hace fade-out puro (`opacity: 1→0`) en su misma posición, pantalla queda en negro sólido. |

### Aclaración del stagger (valores del doc)

El doc da 3 valores en % (`+25%`, `-60%`, `+30%`) como "desfase" de cada tarjeta respecto a la anterior. Interpretación operativa (única consistente con "en este punto las tres tarjetas fluyen alineadas sobre el mismo vector diagonal" antes de salir):

- Tarjeta 1: recorre el rango completo 0.15 → 0.90 (75% del total del tramo).
- Tarjeta 2: arranca con un desfase del 25% de ese rango respecto a la Tarjeta 1 (`0.15 + 0.75*0.25 = 0.3375`) y recorre el mismo largo relativo, comprimido para terminar en 0.90.
- Tarjeta 3: arranca con el mismo desfase adicional respecto a la Tarjeta 2.

En código, esto se resuelve con 3 sub-rangos de progreso, cada uno normalizado 0→1 dentro de su propia ventana, reutilizando el mismo helper `clamp01` + easing lineal (`none`, doc no pide ease no-lineal aquí — es un desplazamiento "constante").

## HTML

```html
<!-- ============================================ -->
<!-- RESULTADOS — FASE 2: Tránsito diagonal de     -->
<!-- tarjetas de métricas                          -->
<!-- ============================================ -->
<section class="rs-metricas" aria-label="El impacto en el negocio">
    <h3 class="rs-metricas__title">El impacto en el negocio</h3>
    <div class="rs-metricas__card" data-metric="1">
        <span class="rs-metricas__value">+30%<i class="ph ph-arrow-up-right rs-metricas__arrow" aria-hidden="true"></i></span>
        <p class="rs-metricas__label">Uso de beneficios Plus.</p>
        <p class="rs-metricas__detail">Retención D30: 20% &rarr; 25% en Amplitude.</p>
    </div>
    <div class="rs-metricas__card" data-metric="2">
        <span class="rs-metricas__value">-60%<i class="ph ph-arrow-down-right rs-metricas__arrow" aria-hidden="true"></i></span>
        <p class="rs-metricas__label">Tickets de soporte por pagos.</p>
        <p class="rs-metricas__detail">Medido en Zendesk pre y post lanzamiento.</p>
    </div>
    <div class="rs-metricas__card" data-metric="3">
        <span class="rs-metricas__value">+25%<i class="ph ph-arrow-up-right rs-metricas__arrow" aria-hidden="true"></i></span>
        <p class="rs-metricas__label">Conversión de inscripciones.</p>
        <p class="rs-metricas__detail">De 9.2% &rarr; 11.5% vía Mixpanel.</p>
    </div>
</section>
```

Se inserta después de `</section>` de `.rs-mosaico` (Fase 1) y antes de `</main>`, precedida de su propio pin-spacer:
```html
<div class="cs-pin-spacer cs-pin-spacer--rs-metricas" data-phase="rs-metricas"></div>
```

## CSS (`resultado-responsive.css`, dentro del media query desktop)

```css
.cs-pin-spacer--rs-metricas { height: 320vh; }

.rs-metricas {
    position: fixed;
    inset: 0;
    z-index: 7;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform: translateY(100vh);
}

.rs-metricas__title {
    position: absolute;
    top: calc(var(--cs-header-height) + 80px);
    left: 80px;
    opacity: 0;
    will-change: transform, opacity;
}

.rs-metricas__card {
    position: absolute;
    width: 380px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
    color: var(--color-primary);
    opacity: 0;
    will-change: transform, opacity;
}

.rs-metricas__value {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: var(--bold);
    margin-bottom: 24px;
}

.rs-metricas__arrow { margin-left: 8px; color: var(--color-accent); }

.rs-metricas__label { font-weight: var(--semibold); margin-bottom: 48px; }
.rs-metricas__detail { color: var(--color-text-secondary); }
```

Tarjetas posicionadas con `top`/`left` calculados en JS por frame (coordenadas de origen/destino fuera de viewport), no en CSS estático — igual que el patrón de "La Decisión" (imagen que interpola `INIT_W/INIT_H → vw/vh`).

## Mecánica JS

Constantes de diagonal (ángulo 37.5°, punto medio del rango 30°-45° dado por el doc):
```js
const RS_DIAG_ANGLE_DEG = 37.5;
const RS_DIAG_RAD = RS_DIAG_ANGLE_DEG * Math.PI / 180;
```

Por cada tarjeta, en cada frame:
- Origen: `x = -cardWidth` (fuera por la izquierda), `y = vh + cardHeight` (fuera por abajo).
- Destino: `x = vw + cardWidth` (fuera por la derecha), `y = -cardHeight - vh` (fuera por arriba — el recorrido vertical es más largo que un simple "salir arriba" porque atraviesa toda la pantalla en diagonal).
- Posición en progreso local `lp` (0→1, ya normalizado por el stagger de cada tarjeta): `x: origen.x + (destino.x - origen.x) * lp`, `y: origen.y + (destino.y - origen.y) * lp`.

Esto genera el vector diagonal constante sin necesitar trigonometría explícita en cada frame (la proporción destino-origen ya encierra el ángulo ~37.5° dado el ancho/alto del viewport típico 16:9 — se documenta el ángulo nominal para que quien lo implemente pueda ajustar los `vw`/`vh` de origen/destino si el resultado visual no da 30-45° en el viewport de prueba).

## Guards onLeave/onLeaveBack

```js
onLeaveBack: () => {
    gsap.set('.rs-metricas', { y: '100vh' });
    gsap.set('.rs-metricas__title', { x: 200, opacity: 0 });
    // cada card a su posición de origen (fuera de pantalla, abajo-izquierda), opacity 0
},
onLeave: () => {
    gsap.set('.rs-metricas', { y: 0 });
    gsap.set('.rs-metricas__title', { opacity: 0 }); // ya se apagó en 2.3, queda consistente
}
```

## No está en scope

- Bloques C, D, E (specs separados)
- Iconos exactos de flecha (se usa `ph-arrow-up-right`/`ph-arrow-down-right` de Phosphor, ya cargado en el proyecto, coherente con `.metric-badge` existente en atoms.css)
