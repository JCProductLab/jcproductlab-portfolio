# Design System Atoms

## Overview

Sistema de diseño atómico con 8 componentes base foundacionales. Cada átomo está construido usando **CSS custom properties** del sistema de tokens y sigue la metodología **mobile-first**.

**Ubicación de referencia:** `portfolio/atoms.html`  
**Estilos:** `portfolio/css/atoms.css`  
**Variables:** `portfolio/css/variables.css`

---

## 1. Button — CTA Principal

Componente de botón principal para acciones. Incluye dos variantes principales: Primary y Secondary.

### HTML
```html
<button class="btn btn--primary">
    Así genero resultados
    <span class="btn__icon">
        <i class="ph ph-arrow-up-right"></i>
    </span>
</button>
```

### Variantes
- **`.btn--primary`** - Fondo accent, texto oscuro. Ideal para CTAs principales
- **`.btn--secondary`** - Fondo semi-transparente, texto accent. Ideal para acciones secundarias

### Estados
- `:hover` - Elevación (translateY -2px) + sombra con glow accent
- `:active` - Vuelta a posición normal
- `:disabled` - Opacidad 70%, cursor not-allowed

### CSS Classes
- `.btn` - Base del botón
- `.btn__icon` - Contenedor del icono (32px mobile, 48px desktop)

### Responsive
- **Mobile:** padding 8px 8px 8px 16px, gap 12px
- **Desktop (1200px+):** padding 8px 8px 8px 32px, gap 24px

---

## 2. Icon Button (Circular)

Botón circular con glassmorphism effect. Perfecto para toggles y acciones rápidas.

### HTML
```html
<button class="btn-icon" title="Toggle dark/light mode">
    <i class="ph ph-sun"></i>
</button>
```

### Características
- **Tamaño:** 48px (3rem)
- **Glassmorphism:** backdrop-filter: blur(20px) saturate(180%)
- **Borde:** 1px con variable `--color-glass-border`
- **Icono:** Color accent, 2rem de tamaño

### Estados
- `:hover` - Scale 1.05, fondo semi-accent, borde accent
- `:active` - Scale 0.95
- `:focus-visible` - Outline 2px accent

---

## 3. Tag / Label — Categoría

Etiqueta inline para categorización. Tres estilos distintos según contexto.

### HTML
```html
<!-- Bordered (con punto) -->
<span class="tag tag--bordered">Fintech</span>

<!-- Text Only (sin borde, sin punto) -->
<span class="tag tag--text-only">Casos de estudio</span>

<!-- Contact (con borde, sin punto) -->
<span class="tag tag--contact">Disponible para trabajar</span>
```

### Variantes

| Clase | Borde | Punto | Uppercase | Uso |
|-------|-------|-------|-----------|-----|
| `.tag--bordered` | Sí (50% opacity) | Sí (accent) | Sí | Categorías, tecnologías |
| `.tag--text-only` | No | No | Sí | Links de contenido |
| `.tag--contact` | Sí (50% opacity) | No | No | Estado disponibilidad |

### Punto Decorativo
Pseudo-elemento `::before` que crea un círculo de 8px accent en todas las variantes excepto text-only.

---

## 4. Metric Badge — Número + Descripción

Componente compuesto que muestra métrica e impacto. Layout horizontal con número destacado, divider y descripción.

### HTML
```html
<div class="metric-badge">
    <div class="metric-badge__number">+45%</div>
    <div class="metric-badge__divider"></div>
    <div class="metric-badge__description">
        <p>Aumento en</p>
        <p>conversiones</p>
    </div>
</div>
```

### Sub-elementos
- **`.metric-badge__number`** - Texto accent, 2rem extrabold
- **`.metric-badge__divider`** - Línea vertical 32px, color secondary
- **`.metric-badge__description`** - Stack vertical, 12px regular, line-height 1.5

### Estilos
- Fondo: rgba(240, 240, 240, 0.1)
- Padding: 16px 24px
- Border-radius: 12px
- Gap: 12px

---

## 5. Links — Enlaces

Tres tipos de enlaces optimizados para diferentes contextos. Todos comparten animación profesional con cubic-bezier easing.

### 5.1 Nav Link (Navegación)

```html
<a href="#" class="nav-link">Link menú</a>
```

**Características:**
- Uppercase, 16px, semibold
- Pseudo-elemento `::after` para underline animado
- Hover: color accent, letter-spacing +0.03em, translateY -2px
- Underline crece de left to right (cubic-bezier bounce)

### 5.2 Body Link (Contenido)

```html
<a href="#" class="body-link">Body link</a>
```

**Características:**
- 14px bold, inline display
- Sin uppercase
- Hover: color accent, letter-spacing +0.03em, translateY -2px
- Sin underline visible

### 5.3 Secondary Link (Footer)

```html
<a href="#" class="link-secondary">Secondary Link</a>
```

**Características:**
- 14px regular, 70% opacity
- Sin uppercase
- Hover: color accent, letter-spacing +0.03em, translateY -2px
- Ideal para metadata y footer

### Animación Común
Todas usan `cubic-bezier(0.4, 0, 0.2, 1)` para transiciones de color, letra-spacing y transform en 0.3s.

---

## 6. Avatar — Imagen de Perfil

Imagen circular con borde accent y glow effect sutil.

### HTML
```html
<!-- Default (48px) -->
<div class="avatar avatar--default">
    <img src="path/to/image.jpg" alt="Avatar" class="avatar__image">
</div>

<!-- Small (32px) -->
<div class="avatar avatar--small">
    <img src="path/to/image.jpg" alt="Avatar" class="avatar__image">
</div>
```

### Tamaños
- **`.avatar--default`** - 3rem (48px)
- **`.avatar--small`** - 2rem (32px)

### Estilos
- Border: 2px accent
- Border-radius: full (9999px)
- Box-shadow: 0 0 0 3px rgba(0, 212, 110, 0.15)
- Object-fit: cover

---

## 7. Divider / Separator — Divisor

Línea horizontal o vertical para separar secciones.

### HTML
```html
<!-- Horizontal -->
<hr class="divider divider--horizontal">

<!-- Vertical -->
<div class="divider divider--vertical"></div>
```

### Variantes
- **`.divider--horizontal`** - Ancho 100%, alto 1px, borde top 0.5px
- **`.divider--vertical`** - Ancho 1px, alto 280px, borde left 0.5px

### Estilos
- Color: `--color-secondary`
- Reset: border none, margin 0, padding 0
- Border thin: 0.5px para sutileza

---

## Accessibility

### Focus States
Todos los elementos interactivos tienen `:focus-visible` con outline 2px accent:

```css
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 4px; }
.nav-link:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 4px; }
.body-link:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.link-secondary:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
```

### Reduced Motion
Usuarios con `prefers-reduced-motion: reduce` reciben:
- `transition: none !important`
- `animation: none !important`
- Desactivación de transforms en hover

---

## Atoms Eliminados (v0)

Los siguientes átomos estaban en la versión inicial pero fueron removidos:

- **Quote Mark (Decorativo)** - Marca tipográfica para testimonios
- **Client Logo** - Muestra de logos de clientes
- **Accent Span** - Highlight inline en texto
- **Contact Link** - Email/teléfono formateado
- **Testimonial Attribution** - Nombre + rol de autor
- **Cursor Default (Glow)** - Cursor con efecto smoke trail

Estos pueden ser re-implementados en futuras versiones si es necesario.

---

## Uso en Proyecto

### Import
```html
<link rel="stylesheet" href="css/atoms.css">
```

### Tipografía
Font: **Sora** (Google Fonts)  
Weights: 400, 600, 700, 800

### Color Scheme
- **Dark Mode (default):** Via CSS custom properties
- **Light Mode:** Data-attribute `[data-theme="light"]` o system preference

### Responsive Strategy
Mobile-first con breakpoint principal en **1200px** para desktop.

---

## Estado: Completo ✓

Todos los 8 átomos core están implementados, estilizados y documentados. Sistema listo para ser usado en componentes compuestos (moléculas) y pantallas completas.
