# Testimonial Section — Detección de tipo de dispositivo

**Fecha:** 2026-05-11

## Problema

La animación de `testimonial-section` usa `min-width: 1200px` para decidir entre comportamiento desktop y mobile. Esto es incorrecto porque el ancho no determina la capacidad del dispositivo:

- Un desktop con ventana estrecha (800px) puede manejar animaciones complejas
- Una tablet Samsung Tab S8 a 1280px no tiene esa capacidad y muestra mal la sección

El criterio correcto es el **tipo de dispositivo**, no el ancho de pantalla.

## Solución

Reemplazar la condición basada en ancho por detección de puntero pura en `gsap.matchMedia()`.

**Condición nueva:**
```
isDesktop: '(hover: hover) and (pointer: fine)'
isMobile:  '(pointer: coarse)'
```

- `(hover: hover) and (pointer: fine)` → mouse/trackpad = desktop → animación compleja
- `(pointer: coarse)` → pantalla táctil = mobile/tablet → animación sencilla
- Sin `min-width` — el tamaño de pantalla no entra en la decisión

## Cambio

**Archivo:** `js/modules/animations/testimonial-cards-reveal.js`

```js
// Antes
isDesktop: '(min-width: 1200px)',
isMobile: '(max-width: 1199px)',

// Después
isDesktop: '(hover: hover) and (pointer: fine)',
isMobile: '(pointer: coarse)',
```

## Comportamiento resultante

| Dispositivo | Ancho | Puntero | Animación |
|---|---|---|---|
| Desktop con mouse | cualquiera | fine + hover | Desktop (horizontal ±220px, scrub unificado) |
| Laptop con trackpad | cualquiera | fine + hover | Desktop |
| Samsung Tab S8 | 1280px | coarse | Mobile (vertical, por card) |
| iPad táctil | cualquiera | coarse | Mobile |
| iPad con teclado+mouse | cualquiera | fine + hover | Desktop |
| iPhone / Android | cualquiera | coarse | Mobile |

## Consistencia

`interactions.js` ya usa `(hover: hover) and (pointer: fine)` para el tilt 3D. Este cambio alinea `testimonial-cards-reveal.js` con esa misma lógica.

## Alcance

Un solo archivo, dos líneas. Sin cambios en CSS ni en otros módulos.
