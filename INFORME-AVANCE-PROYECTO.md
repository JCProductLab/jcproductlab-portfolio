# Informe de avance — Portafolio JCProductLab V3.2

**Fecha del informe:** 2026-08-11
**Rama activa:** `feature/mobile-tablet-caso`
**Periodo cubierto:** 2026-04-24 → 2026-08-10 (281 commits totales)

---

## 1. Resumen ejecutivo

El proyecto es un portafolio estático (HTML/CSS/JS sin build system) para búsqueda de trabajo como Product/UX Designer. Empezó el 24 de abril de 2026 con la home page (hero, header, cursor custom) y ha evolucionado hasta convertirse en un sitio con:

- **Home page** (`index.html`) completa en desktop, tablet y mobile.
- **Página "Sobre mí"** (`sobre-mi.html`), construida en agosto, con secciones de metodología y bio.
- **Tres case studies con scrollytelling** (AsDeporte, ABC, Gentera) — AsDeporte es el más maduro (contenido reescrito y auditado), ABC y Gentera se acaban de clonar de su estructura el 10 de agosto.
- Un **sistema de diseño propio** (tokens, átomos, iconografía Phosphor) documentado en `ATOMS.md`.
- Animaciones avanzadas con **GSAP + ScrollTrigger** (pines por sección, scrollytelling, parallax, reveals) y efectos WebGL propios (cursor con humo, fondo fractal "Aurora").

### ⚠️ Punto crítico para el informe: el sitio desplegado está desactualizado

`main` (la rama que despliega a GitHub Pages) está congelada en el commit del **20 de junio de 2026**. Todo lo construido desde entonces —el refactor completo de scrollytelling de AsDeporte, Decisión 2 y 3, la sección Resultado completa, la versión mobile/tablet de todo el case study, la página Sobre mí, y el contenido nuevo de los 3 case studies— vive únicamente en la rama `feature/mobile-tablet-caso` (200 commits por delante de `main`, ya empujados a GitHub pero no fusionados). El sitio público en `jcproductlab.github.io` **no refleja ~2 meses de trabajo**.

---

## 2. Cronología por fases

### Fase 1 — Fundación: Home page desktop (24 abril – 12 mayo 2026)

- Estructura base: reset CSS, variables/tokens, tipografía (Sora self-hosted).
- **Hero**: layout responsive (desktop/tablet/landscape), animación de entrada de palabras (word swapper: *negocio → producto → usuario → mañana*), corrección de line-breaks e imagen en mobile.
- **Header**: magnetismo en botones, efecto glow en glass, cursor custom con estela de humo vía WebGL (excluido en touch/tablet mediante `any-pointer`).
- **Case cards** (home): estructura HTML/CSS al 100%, cursor personalizado por sección, overlay oscuro, detección de puntero (`any-pointer` en vez de `pointer` para evitar falsos positivos en táctiles).
- **Scrollytelling de case cards**: animación de scroll fiel a referencia visual, zona muerta inicial, entrada de cursor con escala elástica sincronizada en ambas direcciones de scroll, coreografía de columna izquierda con stagger, animaciones mobile/tablet al 100%.
- **Testimonios**: sistema de interactividad avanzada (parallax en capas, tilt 3D, proximity vía IntersectionObserver), coreografía unificada de reveal.
- **Logos / marquee de clientes**: loop infinito en mobile/tablet ≤1024px.
- **About (teaser en home) y CTA**: coreografía scrub-driven, botón de WhatsApp, fondo animado **fractal Aurora en WebGL2**, transición sticky "about → CTA" con supresión del efecto de humo del cursor.
- Múltiples fixes de robustez responsive: `100dvh`→`100svh` (evitar reflow al ocultarse la barra del navegador), eliminación de scroll horizontal, detección de dispositivo por tipo de puntero en vez de ancho de pantalla, fix de dimensiones del marquee.

**Resultado de esta fase:** home desktop al 100%, con animaciones optimizadas y consistentes en los tres tamaños de viewport.

---

### Fase 2 — Case study AsDeporte: scrollytelling desktop (19 junio – 24 julio 2026)

La fase más extensa del proyecto. Reconstrucción completa de `caso-asdeporte.html` bajo una arquitectura de **pin por sección** con GSAP ScrollTrigger.

- **Apertura, Métrica, Contexto**: migración a pin por sección, cruce vertical Apertura↔Métrica, reset invisible en reversa.
- **Transición Contexto → Decisiones**: pin de "Shift M-C", cruce de "cometa" (elemento animado), flecha de Contexto, rediseño estable post-carga.
- **Decisión 1** (gates 2–7): cortina de entrada con `clip-path` scrub, ease-out, parallax en cascada (label→título→imagen), expansión de imagen en dos fases (crece a viewport bajo el header, `border-radius→0`).
- **El Problema**: cortina vertical de entrada + cascada de contenido.
- **La Decisión**: persiana de entrada, animaciones internas, sincronización de arranque con la persiana.
- **Razonamiento** (sub-sección de datos): pantallas de dato (90.8%, 65%), riel de entrada, timing uniforme entre gaps, conclusión con gesto de cierre.
- **Decisión 2 y 3**: clonadas de la arquitectura de Decisión 1 (cortina, expansión, problema, la decisión, razonamiento) con specs y planes documentados por decisión (`docs/superpowers/specs|plans/2026-07-0{1,2}-decision-{2,3}-clone*`).
- **Sección Resultado** (5 fases, documentadas con spec+plan propios en `docs/superpowers/`):
  - **Fase 1** — mosaico de cards con parallax diferenciado y escala exponencial de la card central, con "empuje" real de las cards vecinas.
  - **Fase 2** — tránsito diagonal de tarjetas de métricas, trayectoria en arco + rotación.
  - **Fase 3** — entrada en cascada desfasada derecha→izquierda de título/imagen/texto.
  - **Fase 4** — "portal" tipográfico: zoom exponencial anclado en una letra, anillo rotatorio, fade del testimonio, revelación de líneas de cierre + CTA. Fase con más iteración de bugs (z-index, anti-pixelación, stacking context).
  - **Fase 5** — cierre "¡Gracias por ver!" con tipografía display, agrupación de mini-cards de otros casos + CTA final, hover zoom en cards.
- **Componente de botón líquido** (`btn-liquid`): rediseño del botón de WhatsApp en cápsula con merge de fondo en hover, convertido de `<div>` a `<button>` real.
- **Navegación de scroll**: barra de progreso de lectura (`scroll-progress.js`) y navegación por puntos con salto (`section-nav.js`) integradas en todo el case study, con calibración manual de anclas por fase.

**Resultado de esta fase:** AsDeporte desktop queda con el scrollytelling completo, de apertura a cierre, con navegación auxiliar.

---

### Fase 3 — Versión mobile/tablet de AsDeporte (25 julio – 3 agosto 2026)

Trabajada en la rama actual `feature/mobile-tablet-caso` (creada desde `refactor-shift-subpaso5`), manteniendo el desktop intacto vía `gsap.matchMedia` con breakpoint unificado `(min-width:1200px) and (hover:hover) and (pointer:fine)`.

- Primera pasada generada por una sesión externa (Ultraplan) y aplicada tras verificación local.
- Contador "ticker" reactivo con lerp suavizado y reversa estable.
- Secuencia bespoke de la Métrica (conteo → flecha + párrafo).
- Fondo pineado con scroll-buffer propio para mobile/tablet.
- Modales (`modal-rol-proceso`, `modal-que-aprendí`) con layout de tabs y scroll-hint (degradado + chevron) para mobile/tablet.
- **Decisiones** como acordeón mobile/tablet (sticky header, toggle +/-).
- Pin de imagen + fade-in de texto en "La Decisión" (`decision-mc-pin.js`) para mobile.
- Botón scroll-to-top.
- **Bug de GSAP resuelto**: `scroll-behavior:smooth` global en `reset.css` corrompía las mediciones de `ScrollTrigger` cuando un pin se creaba dinámicamente después de una interacción (solo en Chrome/Android — Blink; no en iOS/WebKit). Fix: neutralizar `scroll-behavior` justo antes de crear/refrescar el trigger y restaurarlo ~500ms después.
- **Ajustes específicos de tablet** (portrait + landscape): layout 2 columnas en Apertura, 2×2 en Contexto, cap de altura de imágenes + modales a 2 columnas en Decisiones, grid 2 columnas en Razonamiento, mosaico portrait de 5 filas ("reloj de arena") + métricas a 3 columnas + layout 2 columnas en Impacto/testimonio.
- Overlay de aviso de rotación + recarga en mobile landscape.
- Ajustes finales de reversión de scroll, cards de métricas, reveals de cierre/agradecimiento, y navegación.

**Resultado de esta fase:** AsDeporte queda con paridad funcional mobile/tablet/desktop, aunque documentado como "se ve bien, con ajustes pendientes por listar" en varias iteraciones — ver sección de pendientes.

---

### Fase 4 — Página "Sobre mí" (5 – 7 agosto 2026)

Página nueva construida desde cero.

- Scaffold completo: hero invertido, secciones 4/5/6, footer.
- Sección **"Metodología"** con layout responsive (cards).
- Overflow pineado (`pinned-overflow-section.js`) para `.about-bio` y `.methodology` a `100svh`.
- Reveal de entrada para `.about-bio` (label + título + máscara), luego dividido por `matchMedia` para diferenciar mobile/tablet/desktop.
- Reveal de la sección Metodología + refinamientos de tipografía de las cards.
- Neutralización de `scroll-behavior` por CSS + filtro de resize espurio (mismo patrón de bug que en Fase 3).
- Refinamientos de reveals en CTA, metodología y testimonios de la página.

**Pendiente abierto:** el reveal de las cards de Metodología en layout de fila (tablet-landscape/desktop, donde las 3 cards comparten la misma Y) no anima al hacer scroll hacia arriba (reversa). Se intentó arreglar con `pin:true`, pero eso rompió las animaciones de Testimonios y CTA más abajo en la misma página (por el `pinSpacing` insertando altura extra) — el cambio se revirtió a pedido del usuario. **El bug de reversa sigue sin resolver.**

---

### Fase 5 — Reescritura de contenido de case studies + clonación de ABC/Gentera (10 agosto 2026)

- Se aplicó una metodología de reescritura de contenido a **AsDeporte** (documentada íntegramente en `assets/content/case-study/METODOLOGIA-CASE-STUDIES.md`): auditoría SEO, auditoría narrativa, auditoría de coherencia completa (se detectó y corrigió una "lección" fabricada en el modal "Qué Aprendí" que invertía la historia real), e implementación solo tras aprobación explícita del contenido en markdown.
- Se crearon **`caso-abc.html`** y **`caso-gentera.html`** clonando la estructura ya corregida de AsDeporte (no existían antes de esta fecha).
- Fix de navegación real en las mini-cards de cierre (antes no navegaban correctamente a los otros casos).

**Pendiente explícito (documentado en memoria del proyecto):** repetir el proceso completo de auditoría/reescritura de contenido para ABC y Gentera — por ahora solo tienen la estructura clonada, no pasaron por el mismo proceso de validación de contenido que AsDeporte. El material fuente ya existe: `assets/content/case-study/ABC/` (27 archivos de fase) y `assets/content/case-study/Gentera/` (20 archivos de fase), más los pares `JC-core/caso_de_estudio_*.md` y `JC-core/portafolio_caso_*.md`.

---

## 3. Estado actual por página

| Página | Estado | Notas |
|---|---|---|
| `index.html` (Home, ES) | ✅ Completa (desktop/tablet/mobile) | Case cards con scrollytelling, testimonios, CTA con fondo fractal |
| `en/index.html` (Home, EN) | ⛔ No iniciada | Archivo placeholder de 20 bytes, sin contenido |
| `sobre-mi.html` | 🟡 Funcional, con bug abierto | Reveal de cards de Metodología no anima en reversa (layout de fila) |
| `caso-asdeporte.html` | ✅ Completa y con contenido auditado | Case study insignia: desktop 100%, mobile/tablet ajustado, contenido reescrito y validado |
| `caso-abc.html` | 🟡 Estructura clonada, contenido sin auditar | Creada el 10-ago, pendiente pasar por metodología de contenido y QA mobile/tablet dedicado |
| `caso-gentera.html` | 🟡 Estructura clonada, contenido sin auditar | Igual que ABC |
| `atoms.html` | ✅ Estable | Referencia del sistema de diseño |

---

## 4. Arquitectura y sistema de diseño (resumen)

- **Stack**: HTML/CSS/JS puro con ES modules, sin bundler ni dependencias instaladas. GSAP + ScrollTrigger vía CDN (no empaquetado).
- **CSS**: orden de carga fijo `reset → variables → phosphor → atoms → main → responsive`, más hojas específicas por página (`case-study.css`, `resultado.css`, `decisiones.css`, `about.css`, `scroll-nav.css`, etc.) con sus `-responsive.css` equivalentes. Un solo breakpoint mobile-first en 1200px para desktop.
- **Tokens** (`css/variables.css`): colores primario/secundario/acento, superficie, glassmorphism; tema oscuro por defecto con `[data-theme="light"]` y persistencia en `localStorage`.
- **Tipografía**: Sora, self-hosted + fallback Google Fonts.
- **Átomos** documentados en `ATOMS.md`: botones, tags, links, metric badge, avatar, dividers.
- **Iconografía**: Phosphor (font-based, vía CDN).
- **Web Components** (`js/components/`): header, footer, logos, metric badge, testimonios, CTA "arrancamos".
- **Módulos de animación** (`js/modules/animations/`): 26 archivos, cubriendo desde el hero hasta cada fase de Resultado, reveals mobile, pines por sección, y utilidades compartidas (mask-reveal, scroll-reveal, card-tilt, etc.).
- **i18n**: JSON en `locales/es.json`/`locales/en.json` gestionado por `js/modules/i18n.js` — aunque la página `en/` en sí no está construida.

---

## 5. Documentación técnica generada durante el proyecto

El proyecto acumuló documentación de proceso (specs y planes) en `docs/superpowers/`:

- Specs de diseño: detección de puntero en testimonios, clones de Decisión 2/3, las 5 fases de Resultado, scroll-progress + section-nav, layout tablet de Apertura, scroll-reversal mobile/tablet, página Sobre mí.
- Planes de implementación equivalentes para cada uno de esos specs.
- `Requerimientos-Tecnicos-Animacion.md` — requerimientos técnicos de animación a nivel de sitio.
- `assets/content/case-study/METODOLOGIA-CASE-STUDIES.md` — metodología reusable de auditoría/reescritura de contenido de case studies (SEO + narrativa + coherencia).

`README.md`, `TODO.md`, `CHANGELOG.md` existen como archivos pero están vacíos (sin uso activo).

---

## 6. Pendientes conocidos

1. **Fusionar `feature/mobile-tablet-caso` a `main`** (o decidir una estrategia de release) — el sitio en producción no refleja ~2 meses de trabajo.
2. **Bug de reversa en cards de Metodología** (`sobre-mi.html`, layout de fila) — sin resolver, con un intento de fix (`pin:true`) descartado por romper otras secciones.
3. **Contenido de ABC y Gentera** sin pasar por la auditoría SEO/narrativa/coherencia que sí recibió AsDeporte.
4. **QA mobile/tablet dedicado para ABC y Gentera** — se clonaron de la estructura de AsDeporte pero no tuvieron el mismo ciclo de ajustes visuales sección por sección.
5. **Versión en inglés** (`en/index.html`) — no iniciada.
6. **Archivos sin commitear en el working tree actual**: `.agents/` (skills instalados: content-research-writer, seo-audit, storytelling), `.claude/`, `assets/content/JC-core/`, `assets/content/case-study/`, `skills-lock.json`, y un cambio menor en `assets/.DS_Store`.

---

## 7. Métricas del repositorio

- **281 commits** totales, del 24 de abril al 10 de agosto de 2026.
- **200 commits** de trabajo viven solo en `feature/mobile-tablet-caso` (no están en `main`).
- **7 páginas HTML** en el sitio (Home ES/EN, Sobre mí, 3 case studies, Atoms).
- **26 módulos de animación** JS dedicados.
- **~130 archivos markdown** de contenido/investigación en `assets/content/` (material fuente de los case studies, no todo publicado aún).
