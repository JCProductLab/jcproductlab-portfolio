---
version: alpha
name: JC ProductLab Portfolio
description: >
  Dark, editorial, mono-accent portfolio for a Senior Product Designer
  with a hybrid design + frontend profile.
  13 years of experience distilled into a single system: one background,
  one text color, one accent.

colors:
  # 60-30-10 rule — primary 60%, secondary 30%, accent 10%
  primary: "#0D0D0D"
  surface: "#1A1A1A"
  text: "#F0F0F0"
  text-secondary: "#A0A0A0"
  accent: "#00D46E"
  accent-light: "#00B85C"
  glass-border: "rgba(255, 255, 255, 0.12)"
  glass-border-light: "rgba(0, 0, 0, 0.08)"

typography:
  fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  delivery: "Google Fonts CDN — weights 400, 600, 700, 800"

rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "48px"
  xxxl: "64px"
  full: "9999px"

spacing:
  # Escala numérica según Figma — no interpolates entre pasos
  1: "8px"
  2: "12px"
  3: "16px"
  4: "24px"
  5: "32px"
  6: "40px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
  11: "200px"

## Overview

JC ProductLab es un portafolio que opera como un sistema editorial de alta
precisión. El principio rector es la **economía visual total**: una sola
familia tipográfica (Sora), un solo acento cromático ({colors.accent}), un
solo nivel de profundidad real (tonal, no por sombras), un solo fondo
({colors.primary}).

**Key characteristics:**
- Dark mode único. No hay toggle funcional pendiente de implementar. El sistema vive en oscuro.
- Regla 60-30-10: {colors.primary} es el 60% del canvas, {colors.text} el 30% del contenido, {colors.accent} el 10% restante de énfasis. Nunca se invierte.
- Glassmorphism controlado: solo en nav header scrolled, testimonial cards, y metric badges. No se propaga.
- Animaciones scroll-driven vía GSAP + ScrollTrigger para case cards y section headers. No usar CSS animations como sustituto.
- Tipografía display con `clamp()` — nunca fijar tamaños en breakpoints distintos con `px` fijo para h1/h2.

## Colors

La paleta es un sistema de cuatro roles fijos, no una colección de colores.

| Token | Hex | Rol | Uso |
|---|---|---|---|
| `{colors.primary}` | `#0D0D0D` | Canvas principal | Background de body, nav, secciones |
| `{colors.surface}` | `#1A1A1A` | Superficie elevada | Cards, paneles, backdrop nav scrolled |
| `{colors.text}` | `#F0F0F0` | Texto primario | Headlines, body, iconos activos |
| `{colors.text-secondary}` | `#A0A0A0` | Texto secundario | Metadata, roles, captions, hints |
| `{colors.accent}` | `#00D46E` | Acento único | CTAs, labels activos, métricas, dots |
| `{colors.accent-light}` | `#00B85C` | Acento light mode | Solo en `[data-theme="light"]` |
| `{colors.glass-border}` | `rgba(255,255,255,0.12)` | Borde glass dark | Divisores en glassmorphism oscuro |
| `{colors.glass-border-light}` | `rgba(0,0,0,0.08)` | Borde glass light | Divisores en glassmorphism claro |

**Regla crítica de {colors.accent}:** máximo una aparición dominante por viewport. Se permiten múltiples instancias de roles secundarios (dots en tags, dividers) pero solo un CTA verde visible por zona.

**Colores fuera de paleta permitidos (solo en contextos específicos):**
- `rgba(13, 13, 13, 0.96)` — nav header scrolled dark, preserva transparencia
- `rgba(240, 240, 240, 0.1)` — fondo de metric-badge, efecto frosted ligero
- `rgba(255, 255, 255, 0.15)` — shine overlay en testimonial card hover

## Token Semantics & Architecture

Este sistema utiliza una arquitectura de tokens de tres capas para eliminar la ambigüedad y el código "hardcoded".

### 1. Capa de Tokens
- **Primitivos (Reference):** Valores crudos (hex, px, ms) que definen la paleta y escalas (ej. `--pc-green-500`, `--base-space-4`).
- **Semánticos (Alias):** Tokens que describen la función del elemento. **Son los únicos que deben usarse en los componentes.** (ej. `--color-action-primary`, `--surface-card-bg`).

### 2. Reglas de Implementación (Zero Hardcoded Policy)
- **Prohibición de Valores Sueltos:** Queda estrictamente prohibido el uso de valores hexadecimales o píxeles directos en el CSS de los componentes. Todo valor debe provenir de un token semántico.
- **Consistencia Tipográfica:** No se permiten excepciones de `font-size` o `font-weight`. Si un elemento requiere un estilo único, se debe evaluar si la escala actual es insuficiente antes de crear una excepción.
- **Escalabilidad de Espaciado:** Los márgenes y paddings deben adherirse estrictamente a la escala de 11 pasos definida en la sección de Layout.

### 3. Ejemplo de Mapeo Técnico
- **Incorrecto:** `color: #00D46E;` o `margin: 20px;`
- **Correcto:** `color: var(--color-accent);` o `margin: var(--spacing-4);`

## Layout

**Mobile-first.** Tres breakpoints reales usados en el CSS:

| Breakpoint | Min-width | Max-width | Observación |
|---|---|---|---|
| Mobile | 320px | 767px | Base. Padding lateral 20px. |
| Tablet | 768px | 1199px | Padding 40px. Columnas y grids ajustados. |
| Desktop | 1200px | 1440px | Grid completo. Max-width 1440px. |

**Grid base por dispositivo** — puede variar según el diseño de cada sección:

| Propiedad | Desktop | Tablet | Mobile |
|---|---|---|---|
| Columnas | 12 | 8 | 4 |
| Gutter | 48px | 32px | 24px |
| Margen lateral | 80px | 40px | 20px |
| Max-width | 1440px | 1199px | 767px |

**Nota:** el grid es la base. Secciones específicas pueden ignorar el grid de columnas y usar layout propio si el diseño lo requiere — el margen lateral y el max-width sí son fijos.

**Escala de espaciado** — 11 pasos, no interpolar entre ellos:

| Token | Valor | Referencia de uso |
|---|---|---|
| `{spacing.1}` | 8px | Gap mínimo entre ícono y texto |
| `{spacing.2}` | 12px | Gap interno de componentes pequeños |
| `{spacing.3}` | 16px | Padding mobile, gap grids compactos |
| `{spacing.4}` | 24px | Padding cards, gap grids estándar |
| `{spacing.5}` | 32px | Separación entre grupos de componentes |
| `{spacing.6}` | 40px | Padding tablet, separación media |
| `{spacing.7}` | 48px | Gutter desktop, padding secciones desktop |
| `{spacing.8}` | 64px | Separación entre secciones menores |
| `{spacing.9}` | 96px | Separación entre secciones principales |
| `{spacing.10}` | 128px | Separación entre bloques grandes |
| `{spacing.11}` | 200px | Separación máxima — hero a primera sección |

## Elevation & Depth

**Sin sombras de caja.** La elevación se comunica exclusivamente por
diferencia tonal: `{colors.primary}` → `{colors.surface}`.

La única excepción es el efecto glassmorphism, que usa `{colors.glass-border}`
como borde y `--glass-shadow: 0 8px 32px rgba(0,0,0,0.3)` para simular
flotación. Este efecto se aplica en:
- Nav header en estado `.header--scrolled`
- Cards de testimoniales
- Metric badges (versión ligera sin blur)

Fuera de estos tres contextos: no existe glassmorphism. No se introduce
`backdrop-filter` en nuevos componentes sin aprobación explícita.

## Shapes

| Token | Valor | Componentes |
|---|---|---|
| `{rounded.xs}` | 4px | Elementos mínimos, indicadores de estado |
| `{rounded.sm}` | 8px | Inputs, badges pequeños |
| `{rounded.md}` | 12px | Metric badges, tooltips |
| `{rounded.lg}` | 16px | Cards medianas |
| `{rounded.xl}` | 24px | Testimonial cards |
| `{rounded.xxl}` | 48px | Contenedores grandes, secciones con bordes redondeados |
| `{rounded.xxxl}` | 64px | Elementos de máximo redondeo antes del pill |
| `{rounded.full}` | 9999px | Botones, tags, pills, iconos circulares |

**Regla de forma para botones:** siempre `{rounded.full}`. No existe botón
rectangular en este sistema. El pill es la forma de marca.

## Do's and Don'ts

**Do:**
- Usar `{colors.accent}` para exactamente un elemento dominante por viewport.
- Referenciar siempre el token en CSS — `var(--color-accent)`, nunca `#00D46E` suelto.
- Mantener line-height ≥ 1.6 en párrafos de body.
- Usar `clamp()` para tipografía h1/h2 — nunca fijar px en breakpoints.
- Preservar la separación de responsabilidades: GSAP anima, CSS declara estado.
- Construir mobile-first: base en 0px, expandir en 700px y 1200px.
- Aplicar `{rounded.full}` a todo botón y pill. Sin excepción.

**Don't:**
- No introducir gradientes decorativos. El único gradiente permitido es el glassmorphism (`--glass-bg`) y los overlays de las case cards.
- No agregar `box-shadow` fuera del contexto glassmorphism.
- No usar `#000` puro ni `#FFF` puro. Mínimo `{colors.primary}` y `{colors.text}`.
- No mezclar pesos de fuente no declarados (100, 200, 300, 500).
- No usar `border-radius` fuera de la escala `{rounded.*}`.
- No introducir nuevas familias tipográficas.
- No animar con CSS `@keyframes` lo que ya maneja GSAP (case cards, mask-reveal).
- No agregar glassmorphism fuera de los tres contextos autorizados.
- No escribir hex crudos de `{colors.accent}` — siempre `var(--color-accent)`.
- No usar `z-index` fuera de la escala `{layers.*}`.

## Responsive Behavior

**Mobile (base, 0–767px):**
- Padding lateral: `{spacing.3}` (20px margen según grid, 24px en algunos componentes).
- Tipografía display al mínimo de la escala Figma (48px H1, 40px H2).
- Secciones apiladas verticalmente.
- Case cards ocupan ancho completo.
- Cursores personalizados desactivados (`display: none` hasta 1024px con `pointer: fine`).

**Tablet (768px–1199px):**
- Padding lateral: `{spacing.6}` (40px).
- Gutter de grid: `{spacing.5}` (32px).
- Grids de dos columnas donde aplique.
- Testimonial cards en grid 2 columnas.

**Desktop (1200px+):**
- Padding lateral: `{spacing.10}` (80px). Max-width: 1440px centrado.
- Gutter de grid: `{spacing.7}` (48px).
- Hero: dos columnas (copy izquierda, imagen derecha).
- Case cards: layout completo con left/right split.
- Grid de testimoniales: tres columnas (`minmax(0, 568px) minmax(0, 1fr) minmax(0, 1fr)`).
- Cursores personalizados activos.

**Touch targets:** mínimo 44×44px para todo elemento interactivo en mobile.

**Reduced motion:** `@media (prefers-reduced-motion: reduce)` — desactivar
animaciones de scroll (mask-reveal, case cards entry). Las transiciones de
color en hover se mantienen.

## Known Gaps

- **Iconografía**: se usa Phosphor Icons via CDN en formato inline SVG. Los íconos no están tokenizados. Al agregar íconos nuevos, usar Phosphor exclusivamente y mantener el peso "regular" del set existente.
- **Light mode**: el toggle existe en el CSS (`[data-theme="light"]`) pero no está implementado funcionalmente. Todas las páginas nuevas se construyen en dark mode. El light mode no debe ser considerado hasta tener el dark completo.
- **Estados de error**: no documentados. Si se requieren (formulario de contacto), definir en ese momento.
- **Loading states**: no documentados.
- **Animaciones de caso completo**: las páginas de caso de estudio tendrán su propio sistema de animación narrativa — no heredar directamente el sistema de case cards del home.
- **Spacing y radius en CSS**: actualmente los tokens `--space-*` y `--radius-*` definidos en `foundations.json` **no están implementados en `variables.css` ni en el CSS del proyecto**. El CSS usa valores hardcodeados. Antes de construir páginas nuevas, decidir si implementar los tokens en CSS o continuar con valores explícitos.

## Iteration Guide

2. Nunca escribir un hex, px de spacing, o valor de radius fuera de los tokens declarados arriba. Si el diseño lo requiere, agrega el token primero.
8. Mantener mobile-first en todo el CSS nuevo — base sin media query, expansión en 700px y 1200px.

## Accessibility & Quality Standards

**Accessibility Target:** WCAG 2.2 AA.

### Critical Rules
- **Keyboard-First:** Todas las interacciones deben ser operables mediante teclado antes de considerar el puntero.
- **Focus Indicators:** Es obligatorio el uso de `focus-visible`. No se permite ocultar el indicador de foco sin una alternativa de alto contraste.
- **Contrast:** El texto debe cumplir con los umbrales de contraste de la WCAG para asegurar la legibilidad sobre `{colors.primary}`.

### Component State Requirements
Cada componente interactivo debe definir y documentar los siguientes estados sin excepción:
1. **Default:** Estado base.
2. **Hover:** Feedback visual al pasar el cursor (ej. radial-glow en botones).
3. **Focus-visible:** Indicador claro para navegación por teclado.
4. **Active:** Estado de pulsación/clic.
5. **Disabled:** Opacidad reducida y `pointer-events: none`.
6. **Loading:** Estado de carga (spinner o skeleton) si aplica.
7. **Error:** Feedback visual claro en caso de fallo de validación o sistema.

## Content & Writing Tone
- **Tone:** Conciso, confiado, enfocado en la implementación técnica.
- **Language:** Editorial de alta precisión. Evitar explicaciones ambiguas.