# Testimonial Section — Detección de tipo de puntero

**Fecha:** 2026-05-11

## Problema

El breakpoint de la animación de `testimonial-section` es puramente por ancho (`min-width: 1200px`). Tablets con pantalla táctil y ancho ≥1200px (ej. Samsung Galaxy Tab S8 a 1280px) reciben la animación de escritorio (entrada horizontal ±220px, timeline unificado con scrub), lo que causa:
- Problemas de rendimiento en dispositivos táctiles
- La sección no se muestra correctamente

## Solución

Añadir detección de tipo de puntero a la condición `isDesktop` en `gsap.matchMedia()` dentro de `testimonial-cards-reveal.js`.

**Condición nueva:**
```
(min-width: 1200px) and (hover: hover) and (pointer: fine)
```

- `hover: hover` — el dispositivo puede hacer hover real (mouse)
- `pointer: fine` — el puntero tiene precisión fina (mouse/trackpad, no dedo)
- Juntos identifican un mouse verdadero; excluyen tablets táctiles aunque sean ≥1200px

## Cambio

**Archivo:** `js/modules/animations/testimonial-cards-reveal.js`

```js
// Antes
isDesktop: '(min-width: 1200px)',
isMobile: '(max-width: 1199px)',

// Después
isDesktop: '(min-width: 1200px) and (hover: hover) and (pointer: fine)',
isMobile: 'not all and (min-width: 1200px) and (hover: hover) and (pointer: fine)',
```

## Comportamiento resultante

| Dispositivo | Ancho | Puntero | Animación |
|---|---|---|---|
| Desktop con mouse | ≥1200px | fine + hover | Desktop (horizontal ±220px) |
| Samsung Tab S8 | 1280px | coarse | Mobile (vertical, por card) |
| iPad táctil | ≥1200px | coarse | Mobile (vertical, por card) |
| iPad con teclado+mouse | ≥1200px | fine + hover | Desktop |
| Cualquier móvil | <1200px | coarse | Mobile |

## Consistencia

`interactions.js` ya usa `(hover: hover) and (pointer: fine)` para el tilt 3D. Este cambio alinea ambos módulos.

## Alcance

Un solo archivo, dos líneas. Sin cambios en CSS ni en otros módulos.
