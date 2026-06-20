---
version: alpha
name: JC ProductLab Portfolio
description: >
  Dark, editorial, mono-accent portfolio for a Senior Product Designer
  with a hybrid design + frontend profile. Built in vanilla HTML5/CSS3/JS.
  13 years of experience distilled into a single system: one background,
  one text color, one accent. No gradients. No noise. Just control.

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
  h1:
    fontSize-desktop: "88px — clamp(3rem, 7vw, 5.5rem)"
    fontSize-tablet: "64px"
    fontSize-mobile: "48px"
    fontWeight: 800
    lineHeight: 1.1
    transform: uppercase
    notes: "Único en la página. Hero headline."
  h2-section:
    fontSize-desktop: "88px — clamp(2.5rem, 7vw, 5.5rem)"
    fontSize-tablet: "64px"
    fontSize-mobile: "40px"
    fontWeight: 700
    lineHeight: 1.1
    transform: uppercase
    notes: "Títulos de secciones principales — QUIÉN SOY, ¿ARRANCAMOS?"
  h2-case:
    className: case-card-title
    fontSize-desktop: "48px — clamp(2rem, 4vw, 3rem)"
    fontSize-tablet: "36px"
    fontSize-mobile: "32px"
    fontWeight: 400
    lineHeight: 1.1
    transform: none
    notes: "Títulos de casos de estudio dentro de las cards"
  h4:
    fontSize-desktop: "24px — clamp(1.25rem, 1.5vw, 1.5rem)"
    fontSize-tablet: "22px"
    fontSize-mobile: "20px"
    fontWeight: 400
    lineHeight: 1.5
    notes: "Subtítulos de sección"
  bold-subtitle:
    className: bold-subtitle
    fontSize-desktop: "24px"
    fontSize-tablet: "22px"
    fontSize-mobile: "20px"
    fontWeight: 700
    lineHeight: 1.5
    notes: "Titular de resultado en case cards — lado derecho"
  large-paragraph:
    className: large-paragraph
    fontSize-desktop: "22px — clamp(1.125rem, 1.25vw, 1.375rem)"
    fontSize-tablet: "20px"
    fontSize-mobile: "18px"
    fontWeight: 400
    lineHeight: 1.3
    notes: "Body narrativo en case cards — párrafos de contexto"
  body:
    fontSize-desktop: "16px"
    fontSize-tablet: "16px"
    fontSize-mobile: "16px"
    fontWeight: 400
    lineHeight: 1.6
    notes: "Texto corrido general"
  body-small:
    className: small-paragraph
    fontSize-desktop: "14px"
    fontSize-tablet: "14px"
    fontSize-mobile: "14px"
    fontWeight: 400
    lineHeight: 1.5
    notes: "Texto secundario pequeño"
  label:
    fontSize-desktop: "16px"
    fontSize-tablet: "16px"
    fontSize-mobile: "16px"
    fontWeight: 700
    lineHeight: 1.5
    transform: uppercase
    notes: "Etiquetas de sección verde encima de títulos. Nav links. Botones."
  caption:
    className: caption
    fontSize-desktop: "12px"
    fontSize-tablet: "12px"
    fontSize-mobile: "12px"
    fontWeight: 400
    lineHeight: 1.5
    notes: "Texto mínimo — metadata de métricas, roles en testimonios"
  metric-number:
    fontSize-desktop: "32px — clamp(1.5rem, 3vw, 2rem)"
    fontSize-tablet: "28px"
    fontSize-mobile: "24px"
    fontWeight: 800
    lineHeight: 1.0
    color: "{colors.accent}"
    notes: "Números de impacto en case cards — +11%, -25%, 95%"

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

motion:
  fast: "150ms ease"
  base: "300ms ease"
  slow: "500ms ease"
  enter-short: "0.45s cubic-bezier(0.23, 1, 0.32, 1)"
  enter-long: "0.9s cubic-bezier(0.22, 1, 0.36, 1)"
  spring: "0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
  mask-reveal: "2s"

layers:
  base: 0
  float: 10
  nav: 100
  overlay: 200
  modal: 300
  cursor: 9999
  case-cursor: 10000

components:
  btn-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "8px 8px 8px 16px (mobile) / 8px 8px 8px 32px (desktop)"
    fontWeight: 700
    transform: uppercase
    icon-bg: "{colors.primary}"
    icon-color: "{colors.accent}"
    notes: "Botón principal verde. Icono circular a la derecha."
  btn-secondary:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.glass-border}"
    icon-bg: "{colors.accent}"
    icon-color: "{colors.primary}"
    notes: "Botón ghost. Acento en el ícono, no en el fondo."
  tag:
    backgroundColor: transparent
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    fontWeight: 700
    transform: uppercase
    dot: "{colors.accent} 8px circle"
    notes: "Etiqueta pill con punto verde. Ej: DISPONIBLE PARA TRABAJAR."
  metric-badge:
    backgroundColor: "rgba(240, 240, 240, 0.1)"
    rounded: "{rounded.md}"
    padding: "16px 24px"
    number-color: "{colors.accent}"
    divider: "1px solid {colors.text}"
    notes: "Chip de métrica. Número verde + línea divisora + descripción."
  testimonial-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "none"
    hover: "3D tilt via --tilt-rx / --tilt-ry CSS vars (GSAP)"
    notes: "Cards glassmorphism con animación 3D tilt y shine en hover."
  section-header:
    label-color: "{colors.accent}"
    label-transform: uppercase
    label-weight: 700
    title-color: "{colors.text}"
    title-weight: 700
    animation: "mask-reveal — {motion.mask-reveal}"
    notes: "Label verde encima del título de sección. Animación de entrada."
  nav-link:
    color: "{colors.text}"
    weight: 600
    transform: uppercase
    underline: "2px solid {colors.accent}"
    notes: "Links del nav. Subrayado verde en hover y estado activo."
---

## Overview

JC ProductLab es un portafolio que opera como un sistema editorial de alta
precisión. El principio rector es la **economía visual total**: una sola
familia tipográfica (Sora), un solo acento cromático ({colors.accent}), un
solo nivel de profundidad real (tonal, no por sombras), un solo fondo
({colors.primary}).

La estética es **dark-editorial-técnica** — no startup genérico, no agency
dramática. Cada decisión responde a la misma pregunta: ¿ayuda esto a
transmitir dominio y autoría, o añade ruido? Si añade ruido, no existe.

**Key characteristics:**
- Dark mode único. No hay toggle funcional pendiente de implementar. El sistema vive en oscuro.
- Regla 60-30-10: {colors.primary} es el 60% del canvas, {colors.text} el 30% del contenido, {colors.accent} el 10% restante de énfasis. Nunca se invierte.
- Glassmorphism controlado: solo en nav header scrolled, testimonial cards, y metric badges. No se propaga.
- Animaciones scroll-driven vía GSAP + ScrollTrigger para case cards y section headers. No usar CSS animations como sustituto.
- Tipografía display con `clamp()` — nunca fijar tamaños en breakpoints distintos con `px` fijo para h1/h2.
- Dos cursores personalizados: fluid cursor (#F0F0F0 sobre fondo oscuro) en desktop, case study cursor circular en hover de la sección de casos.

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

## Typography

Una sola familia: Sora. Cuatro pesos: 400, 600, 700, 800. Cargados desde
Google Fonts CDN con `display=swap`. No autohosteado — esto difiere del
`foundations.json` v1.0 (que decía self-hosted) y es la decisión definitiva.

La jerarquía se construye por tamaño y peso, nunca por color (excepto las
etiquetas de sección que usan {colors.accent}).

| Rol | Token | Desktop | Tablet | Mobile | Weight | Transform |
|---|---|---|---|---|---|---|
| Headline | `{typography.h1}` | 88px | 64px | 48px | 800 | uppercase |
| Section title | `{typography.h2-section}` | 88px | 64px | 40px | 700 | uppercase |
| Case title | `{typography.h2-case}` | 48px | 36px | 32px | 400 | none |
| Subtitle | `{typography.h4}` | 24px | 22px | 20px | 400 | — |
| Bold subtitle | `{typography.bold-subtitle}` | 24px | 22px | 20px | 700 | — |
| Body largo | `{typography.large-paragraph}` | 22px | 20px | 18px | 400 | — |
| Body | `{typography.body}` | 16px | 16px | 16px | 400 | — |
| Body small | `{typography.body-small}` | 14px | 14px | 14px | 400 | — |
| Label / Botón | `{typography.label}` | 16px | 16px | 16px | 700 | uppercase |
| Caption | `{typography.caption}` | 12px | 12px | 12px | 400 | — |
| Métrica | `{typography.metric-number}` | 32px | 28px | 24px | 800 | — |

**Pesos prohibidos:** 100, 200, 300, 500. Solo 400/600/700/800. El peso 600
se usa únicamente en nav links. No mezclarlo con botones (700) ni body (400).

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

## Components

**`{component.btn-primary}`** — CTA principal. Fondo verde, texto oscuro,
ícono circular a la derecha. Texto en uppercase con peso 700. En hover,
aparece un radial-gradient de glow desde la posición del cursor (JS). Nunca
cambiar el fondo a un verde distinto de `{colors.accent}`.

**`{component.btn-secondary}`** — Ghost pill. Fondo transparente, borde
`{colors.glass-border}`. El ícono lleva el fondo de acento. Hover sube la
opacidad del borde. No usar para CTAs primarios — es para acciones secundarias.

**`{component.tag}`** — Pill informativo. Punto de `{colors.accent}` a la
izquierda como indicador de estado. Texto uppercase peso 700. Ej: "DISPONIBLE
PARA TRABAJAR". No confundir con botón — no tiene handler de click principal.

**`{component.metric-badge}`** — Chip de métrica de impacto. Fondo frosted
`rgba(240,240,240,0.1)`, número en `{colors.accent}`, separador vertical, y
descripción en `{colors.text-secondary}`. Se usa en pares dentro de las case
cards. La métrica siempre es un cambio porcentual o absoluto verificable.

**`{component.testimonial-card}`** — Card glassmorphism de testimonial.
Glassmorphism completo (`{colors.surface}` + blur + `{colors.glass-border}`).
Animación de entrada scroll-driven via GSAP. Hover 3D tilt con variables CSS
`--tilt-rx` / `--tilt-ry` escritas por JS. Shine radial en hover. Toda esta
lógica ya está implementada — no reescribir.

**`{component.section-header}`** — Patrón de apertura de sección. Label verde
uppercase encima del título h2. Animación de entrada tipo mask-reveal con
duración `{motion.mask-reveal}`. Solo estos dos elementos — no agregar
subtítulos extra al patrón.

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

## Motion (extensión)

El sistema tiene dos capas de movimiento que no se mezclan:

**Capa 1 — CSS transitions** (hover, estados de UI):
- `{motion.fast}` (150ms ease) — elementos mínimos, top de nav en scroll.
- `{motion.base}` (300ms ease) — cambios de color, opacidad de overlay.

**Capa 2 — GSAP scroll-driven** (entradas de sección, animaciones narrativas):
- Section headers: mask-reveal 2s, entrada desde abajo con clip-path.
- Case cards: entrada 3D perspectiva, controlada por ScrollTrigger scrub.
- Testimonial cards: `{motion.enter-short}` con translate y rotate de entrada.
- Word swapper en hero: `{motion.enter-long}` con cubic-bezier fluido.

**Regla crítica:** no duplicar animaciones. Si GSAP ya controla un elemento,
no agregar `transition` ni `@keyframes` sobre ese mismo elemento — produce
conflicto visual. La clase `.testimonial-card--entering` desactiva transitions
CSS durante la animación GSAP activa.

**Duraciones permitidas fuera de los tokens:**
`0.45s`, `0.5s`, `0.6s`, `0.8s`, `0.9s`, `1.2s` — todas con cubic-bezier,
todas en el contexto de animaciones de entrada definidas en el home. No
inventar nuevas duraciones sin revisar coherencia con las existentes.

## Known Gaps

- **Iconografía**: se usa Phosphor Icons via CDN en formato inline SVG. Los íconos no están tokenizados. Al agregar íconos nuevos, usar Phosphor exclusivamente y mantener el peso "regular" del set existente.
- **Light mode**: el toggle existe en el CSS (`[data-theme="light"]`) pero no está implementado funcionalmente. Todas las páginas nuevas se construyen en dark mode. El light mode no debe ser considerado hasta tener el dark completo.
- **Estados de error**: no documentados. Si se requieren (formulario de contacto), definir en ese momento.
- **Loading states**: no documentados.
- **Animaciones de caso completo**: las páginas de caso de estudio tendrán su propio sistema de animación narrativa — no heredar directamente el sistema de case cards del home.
- **Spacing y radius en CSS**: actualmente los tokens `--space-*` y `--radius-*` definidos en `foundations.json` **no están implementados en `variables.css` ni en el CSS del proyecto**. El CSS usa valores hardcodeados. Antes de construir páginas nuevas, decidir si implementar los tokens en CSS o continuar con valores explícitos.

## Iteration Guide

1. Antes de crear cualquier componente nuevo, busca si ya existe uno equivalente en `atoms.css` o `main.css`.
2. Nunca escribir un hex, px de spacing, o valor de radius fuera de los tokens declarados arriba. Si el diseño lo requiere, agrega el token primero.
3. Correr `npx @google/design.md lint DESIGN.md` antes de cada commit para detectar broken-ref y contrast issues.
4. Si una animación entra en conflicto con GSAP, el JS gana — ajusta el CSS, no al revés.
5. Toda página nueva sigue el mismo order de capas CSS: `reset → variables → atoms → main → responsive → page-specific`.
6. Al agregar un componente, documenta su token en la sección YAML de este archivo bajo `components:`.
7. El home (`index.html`) no se modifica sin permiso explícito del proyecto.
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

## Authoring Workflow & QA

### Guideline Workflow
1. Restablecer la intención del diseño en una frase.
2. Definir anatomía del componente y tokens semánticos.
3. Especificar variantes, interacciones y comportamientos de estados.
4. Establecer criterios de aceptación de accesibilidad (Pass/Fail).
5. Documentar anti-patrones y manejo de casos de borde (overflow/empty states).

## QA Checklist

Antes de considerar un componente o sección como "Terminado", debe superar todos los puntos de esta auditoría:

### 1. Arquitectura & Tokens
- [ ] **Zero Hardcoded:** ¿Se ha eliminado cualquier valor hex, px o ms manual del CSS?
- [ ] **Semántica:** ¿Todos los estilos referencian tokens semánticos (ej. `var(--color-accent)`) en lugar de primitivos?
- [ ] **Escala de Espaciado:** ¿Los márgenes y paddings se ajustan estrictamente a la escala de 11 pasos?
- [ ] **Escala de Radio:** ¿Se usa exclusivamente la escala `{rounded.*}` (ej. botones siempre en `full`)?

### 2. Estados & Interacción
- [ ] **Siete Estados:** ¿El componente tiene estilos definidos para `default`, `hover`, `focus-visible`, `active`, `disabled`, `loading` y `error`?
- [ ] **Keyboard-First:** ¿Es posible navegar y accionar el elemento usando únicamente el teclado?
- [ ] **Touch Target:** ¿Los elementos interactivos mantienen un área mínima de clic de 44x44px en mobile?

### 3. Accesibilidad & Contenido
- [ ] **WCAG 2.2 AA:** ¿El ratio de contraste de los textos es de al menos 4.5:1 sobre el fondo?
- [ ] **Focus Visible:** ¿El indicador de foco es claramente visible y no se confunde con el diseño?
- [ ] **Copy Técnico:** ¿Las etiquetas de los botones son descriptivas (evitando "Click aquí") y mantienen el tono editorial?

### 4. Responsividad & Performance
- [ ] **Breakpoint 320px:** ¿El diseño se mantiene íntegro y sin desbordamiento horizontal en el ancho mínimo?
- [ ] **Clamp Logic:** ¿Los títulos escalan fluidamente sin saltos bruscos entre dispositivos?
- [ ] **Overflow Handling:** ¿Se han aplicado reglas para manejar textos largos (elipsis o saltos controlados)?
- [ ] **Motion Conflict:** ¿Se ha verificado que no existan transiciones CSS compitiendo con animaciones de GSAP?

### 5. Filtro de Anti-patrones
- [ ] **No Shadows:** ¿Se ha evitado el uso de `box-shadow` fuera de los contextos Glassmorphism autorizados?
- [ ] **No Gradients:** ¿El diseño se mantiene limpio de degradados decorativos no aprobados?
- [ ] **No New Fonts:** ¿Se respeta exclusivamente el uso de la familia Sora en sus pesos 400, 600, 700 y 800?