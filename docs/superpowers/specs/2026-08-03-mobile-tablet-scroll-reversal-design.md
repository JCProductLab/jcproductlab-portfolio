# Reversión de scroll en reveals mobile/tablet de caso-asdeporte.html

**Fecha:** 2026-08-03
**Rama:** feature/mobile-tablet-caso

## Problema

En `index.html`, las animaciones de scroll (mask-reveal, testimonial cards, about-section, etc.) son bidireccionales: se revelan al bajar y se ocultan/vuelven a revelar al subir (GSAP ScrollTrigger, `toggleActions: 'play reverse play reverse'` o `scrub`).

En `caso-asdeporte.html`, los reveals de mobile/tablet (`mobile-reveals.js`, y la variante mobile de `metrica-sequence.js`) están implementados con `IntersectionObserver` de una sola disparada: `io.unobserve(entry.target)` apenas el elemento entra al viewport. Una vez revelado, queda revelado para siempre — no hay reversa al subir.

El diseño visual (mobile/tablet) ya está aprobado y no debe tocarse. Desktop no debe tocarse en absoluto. Este cambio es exclusivamente de comportamiento de animación.

## Alcance

**Cambian:**
- `js/modules/animations/mobile-reveals.js` (`initMobileReveals`) — sistema genérico de reveals (Contexto, Decisiones, Razonamiento, Resultado, Cierre) + contadores (`.cs-razonamiento__metric-value`, `.rs-metricas__value`).
- `js/modules/animations/metrica-sequence.js` (`initMetricaSequence`) — secuencia conteo→flecha→párrafo de Métrica, **solo su variante mobile (<700px)**. En tablet (≥700px) esta función sale temprano (`MQ_TABLET_FLOOR`) porque `apertura-tablet.js` maneja esa secuencia como parte de la intro de carga — no cambia.

**No cambian (confirmado por lectura de código, no se tocan):**
- Todo el scrollytelling gateado a `MQ_DESKTOP` en `caso-asdeporte.js`, `case-study-responsive.css`, `decisiones-responsive.css`.
- `apertura-tablet.js` y `apertura-exit.js` — secuencias de carga del hero (equivalente a `hero-intro.js` en `index.html`), no reveals de scroll. `apertura-exit.js` e `initMetricaPin` (en `metrica-sequence.js`) ya son bidireccionales porque calculan la transform en vivo desde la posición de scroll vía rAF, sin flag de una sola vez.
- `decision-mc-pin.js` — usa `scrub: 0.5` de GSAP, ya bidireccional por construcción.
- `decisiones-accordion.js` — acordeón por click, no animación de scroll.
- CSS: ninguna regla cambia. `.mrv` nunca se remueve (solo se toggla `.mrv--in`), así que la transición ya funciona en ambos sentidos — confirmado en `case-study.css`.

## Mecanismo

En ambos módulos, el `IntersectionObserver` deja de hacer `unobserve()` tras el primer reveal. El callback pasa a un modelo toggle:

```js
io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('mrv--in', entry.isIntersecting);
    // contadores: ver abajo
  });
}, { threshold: 0.15 }); // mismo threshold ya existente
```

Un solo observer con un único `threshold` es simétrico por construcción: "entrar" y "salir" del viewport disparan el mismo callback sin importar la dirección del scroll, así que no hace falta replicar start/end points asimétricos como los que usa GSAP en desktop.

### Contadores

Confirmado con el usuario: al reingresar al viewport, el contador se resetea a 0 y vuelve a animar hasta su valor final (mismo criterio "toggle" que el resto, sin caso especial).

- `mobile-reveals.js`: al salir del viewport (`isIntersecting: false`), resetear el nodo de texto a `0` (mismo mecanismo que `primeCounter`) para que la próxima entrada cuente desde 0 en vez de mostrar el valor final estático.
- `metrica-sequence.js` (mobile): al salir del viewport, además de resetear el número a `0%`, resetear el trazado de la flecha (`strokeDashoffset` a su longitud total, mismo estado inicial que arma `setupMetricaArrow`) y remover `cs-metrica__caption--in` del párrafo — para que la secuencia completa (conteo → flecha → texto) se repita limpiamente al reingresar, en vez de quedar con la flecha ya trazada pero el número en 0.

### Guard contra reveal fantasma en el primer render

`mobile-reveals.js` hoy agrega la clase `.mrv` (estado oculto) y luego llama `io.observe()`. Con el modelo toggle, si el elemento ya está parcialmente visible en el primer frame (ej. tras un reload con scroll restaurado), el observer debe tratarlo igual que cualquier otro cruce — no requiere lógica especial adicional, el toggle ya cubre ese caso en el primer callback.

## Riesgo conocido (no es un bug nuevo)

Un scroll muy rápido puede cruzar el 15% de intersección de ida y vuelta sin pausa, generando un toggle visual rápido en vez de un fundido suave (la transición CSS dura 0.6s fijos, no es un scrub continuo atado a la posición). Esto ya ocurre hoy en `index.html` con `testimonial-cards-reveal.js` en su modo `toggleActions` — no es un riesgo nuevo introducido por este cambio, se documenta para que no se interprete como regresión a futuro.

## Fuera de alcance

- No se cambia ningún selector CSS, valor de transición, ni layout.
- No se toca desktop de ninguna forma.
- No se agrega GSAP a estos dos módulos — se mantiene el criterio "debe funcionar aunque el CDN de GSAP falle".
