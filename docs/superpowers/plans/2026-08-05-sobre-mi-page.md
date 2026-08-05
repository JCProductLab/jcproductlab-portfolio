# Página "Sobre mí" (sobre-mi.html) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir `sobre-mi.html`, una página nueva mobile-first con 6 secciones (hero invertido, "Sobre mí", "Metodología", testimonios, marquee de clientes, CTA + footer), donde las 3 primeras secciones ocupan exactamente el 100% del alto del viewport en todo dispositivo, con el contenido que desborda revelado vía scroll interno pineado.

**Architecture:** HTML/CSS/JS vanilla, sin build system. `sobre-mi.html` reusa el `<head>`/header/nav/footer boilerplate y el `js/main.js` compartido de `index.html` sin tocarlos. Dos archivos CSS nuevos (`css/about.css` mobile-first + `css/about-responsive.css` desktop 1200px+) siguen el patrón `case-study.css`/`case-study-responsive.css` ya establecido en el repo. Un módulo GSAP nuevo y genérico (`pinned-overflow-section.js`), inicializado por un `<script type="module">` inline dedicado en `sobre-mi.html` (mismo patrón que `initFractalBackground` en `index.html`), mide el desborde de cada sección "pineable" y solo crea un `ScrollTrigger` con `pin:true` cuando hace falta — si el contenido ya cabe (ej. las 3 cards de Metodología en fila en desktop), la sección se comporta como una sección fija normal sin pin.

**Tech Stack:** HTML5, CSS3 (custom properties de `variables.css`), JS ES modules, GSAP 3.12.5 + ScrollTrigger (CDN, ya cargado en `index.html`/`caso-asdeporte.html`).

**Spec:** `docs/superpowers/specs/2026-08-05-sobre-mi-page-design.md`

## Global Constraints

- **Nunca `git push`, y `git commit` solo dentro de este worktree aislado** (`.worktrees/sobre-mi-page`, rama `feature/sobre-mi-page`) — excepción puntual que el usuario aprobó para que subagent-driven-development pueda generar diffs por tarea (`review-package` necesita un BASE y un HEAD reales). Nunca commitear ni pushear desde el checkout principal del repo ni en ninguna otra rama.
- **Nunca usar Chrome DevTools / browser automation** salvo necesidad genuina confirmada con el usuario (CLAUDE.md) — todos los pasos de verificación visual de este plan son instrucciones para que el usuario las corra en su propio navegador, no comandos de browser automation.
- **No inventar clases nuevas de tipografía o color** — todo texto usa `h1`/`h2`/`h4`/`.bold-subtitle`/`.important`/`.small-paragraph`/`.section-header__label.cs-label`/`.section-header__title` (ya definidas en `variables.css`/`main.css`) y todos los colores van vía `var(--color-*)`/`var(--glass-*)` (`variables.css`). Las clases nuevas de este plan son exclusivamente estructurales (contenedores, grid, componente de card).
- **Mobile-first**: cada regla CSS nueva en `css/about.css` aplica primero a mobile sin envoltorio de media query; los ajustes de tablet van en `@media (min-width: 700px)` (y el sub-caso `@media (min-width: 700px) and (max-width: 1199px) and (orientation: landscape)`) dentro del mismo archivo; el archivo `css/about-responsive.css` contiene únicamente `@media (min-width: 1200px)`.
- **Sin build system** — servir con `python3 -m http.server 8080` desde la raíz del repo y abrir `http://localhost:8080/sobre-mi.html` para probar. Ningún paso de este plan requiere `npm`/bundler.
- El copy de la sección "Sobre mí" usa el placeholder literal `Lorem ipsum dolor sit amet consectetur.` como título (el usuario lo reemplaza después) — no inventar un título real.

---

### Task 1: Scaffold de `sobre-mi.html` + hero invertido + secciones 4/5/6 + footer

**Files:**
- Create: `sobre-mi.html`
- Create: `css/about.css`
- Create: `css/about-responsive.css`

**Interfaces:**
- Produces: la página `sobre-mi.html` cargable con header/nav/footer funcionales, hero invertido, y las secciones de testimonios/marquee/CTA idénticas a `index.html`. Deja 2 marcadores HTML (`<!-- TASK 2: SECCIÓN "SOBRE MÍ" -->` y `<!-- TASK 3: SECCIÓN "METODOLOGÍA" -->`) donde las tareas siguientes insertan contenido. Clase `.hero--about` (usada solo acá).
- Consumes: nada (primera tarea).

- [ ] **Step 1: Crear `css/about.css` con el header de archivo (vacío de reglas por ahora)**

```css
/* ============================================
   ABOUT (sobre-mi.html) — Base + Mobile/Tablet
   Mobile-first: reglas base sin @media aplican a mobile,
   overrides de tablet van en @media (min-width: 700px) y su
   sub-caso landscape. Desktop (1200px+) vive en
   about-responsive.css. Mismo patrón que case-study.css /
   case-study-responsive.css.
   ============================================ */
```

- [ ] **Step 2: Crear `css/about-responsive.css` con el header de archivo**

```css
/* ============================================
   ABOUT (sobre-mi.html) — Desktop (1200px+)
   Todo el contenido de este archivo vive dentro de un único
   @media (min-width: 1200px), igual que responsive.css.
   ============================================ */

@media (min-width: 1200px) {

}
```

- [ ] **Step 3: Crear `sobre-mi.html` completo**

```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ============================================ -->
    <!-- SEO TÉCNICO — Meta tags básicos             -->
    <!-- ============================================ -->
    <title>Sobre mí — Product Designer con 13 años de experiencia | JC ProductLab</title>
    <meta name="description"
        content="Julio César Tinoco, Product Designer Senior en México con 13 años de experiencia. Cómo pienso el diseño de producto, mi metodología de trabajo y por qué las empresas confían en mí para resolver problemas complejos.">
    <meta name="author" content="Julio César Tinoco">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://jcproductlab.design/sobre-mi">

    <!-- ============================================ -->
    <!-- OPEN GRAPH                                   -->
    <!-- ============================================ -->
    <meta property="og:title" content="Sobre mí — Product Designer con 13 años de experiencia | JC ProductLab">
    <meta property="og:description" content="Julio César Tinoco, Product Designer Senior en México con 13 años de experiencia.">
    <meta property="og:image" content="https://jcproductlab.design/assets/images/og-image.jpg">
    <meta property="og:url" content="https://jcproductlab.design/sobre-mi">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">

    <!-- ============================================ -->
    <!-- TWITTER / X CARDS                           -->
    <!-- ============================================ -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@jcproductlab">
    <meta name="twitter:title" content="Sobre mí — Product Designer con 13 años de experiencia | JC ProductLab">
    <meta name="twitter:description" content="Julio César Tinoco, Product Designer Senior en México con 13 años de experiencia.">
    <meta name="twitter:image" content="https://jcproductlab.design/assets/images/og-image.jpg">

    <!-- ============================================ -->
    <!-- FAVICON & MANIFEST                          -->
    <!-- ============================================ -->
    <link rel="icon" type="image/x-icon" href="./assets/images/icons/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/icons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/icons/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/icons/apple-touch-icon.png">
    <link rel="mask-icon" href="./assets/images/icons/safari-pinned-tab.svg" color="#00D46E">
    <link rel="manifest" href="./manifest.json">
    <meta name="theme-color" content="#0D0D0D" media="(prefers-color-scheme: dark)">
    <meta name="theme-color" content="#F5F5F5" media="(prefers-color-scheme: light)">

    <!-- ============================================ -->
    <!-- PRECONNECT — external resources             -->
    <!-- ============================================ -->
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="preconnect" href="https://www.google-analytics.com">

    <!-- ============================================ -->
    <!-- CSS                                         -->
    <!-- ============================================ -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/phosphor.css">
    <link rel="stylesheet" href="css/atoms.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/mask-reveal.css">
    <link rel="stylesheet" href="css/testimonial-cards-reveal.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/about-responsive.css">

    <!-- ============================================ -->
    <!-- GSAP + ScrollTrigger — pin de secciones 2 y 3 (todo viewport) -->
    <!-- y scrollytelling/reveals compartidos vía js/main.js          -->
    <!-- ============================================ -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

    <!-- ============================================ -->
    <!-- SCHEMA MARKUP — JSON-LD                     -->
    <!-- ============================================ -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Julio César Tinoco",
        "jobTitle": "Senior Product Designer",
        "url": "https://jcproductlab.design",
        "sameAs": [
            "https://www.linkedin.com/in/j-cesar-tm/",
            "https://www.instagram.com/jc_productlab/",
            "https://www.behance.net/cesartinocomarin",
            "https://x.com/jcproductlab"
        ]
    }
    </script>
</head>

<body>

    <!-- ============================================ -->
    <!-- ROTATE OVERLAY — bloquea mobile en landscape  -->
    <!-- (ver css/responsive.css, sin JS)              -->
    <!-- ============================================ -->
    <div class="rotate-overlay" aria-hidden="true">
        <i class="ph ph-device-rotate rotate-overlay__icon"></i>
        <p class="rotate-overlay__text">Girá tu dispositivo para ver este contenido.</p>
    </div>

    <!-- ============================================ -->
    <!-- CUSTOM CURSOR — Fluid animation canvas      -->
    <!-- ============================================ -->
    <canvas id="fluid"></canvas>

    <div class="custom-cursor" id="customCursor">
        <div class="custom-cursor-inner">
            <img src="assets/images/icons/cursor.svg" alt="cursor">
        </div>
    </div>

    <!-- ============================================ -->
    <!-- SKIP LINK — Keyboard navigation             -->
    <!-- ============================================ -->
    <a href="#main" class="skip-link">Saltar al contenido principal</a>

    <!-- ============================================ -->
    <!-- ORGANISMO: Header / Nav                     -->
    <!-- ============================================ -->
    <header class="header" role="banner">
        <nav class="nav" aria-label="Navegación principal">

            <!-- Logo -->
            <a href="/" class="nav__logo-link" aria-label="JC ProductLab — Inicio">
                <svg class="nav__logo-svg" width="162" height="32" viewBox="0 0 162 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect width="32" height="32" rx="8" fill="#00D46E" />
                    <path
                        d="M15.9792 25L7.83333 18.5833L9.81249 17.0208L15.9792 21.875L22.1875 17.0208L24.1667 18.5833L15.9792 25ZM15.9792 19.7917L7.83333 13.3958L15.9792 7L24.125 13.3958L15.9792 19.7917ZM15.9792 16.6667L20.125 13.3958L15.9792 10.1458L11.8333 13.3958L15.9792 16.6667Z"
                        fill="#0D0D0D" />
                    <path class="nav__logo-text"
                        d="M155.86 24.82C155.068 24.82 154.344 24.658 153.688 24.334C153.032 24.01 152.498 23.57 152.086 23.014C151.674 22.458 151.436 21.836 151.372 21.148V16.228C151.436 15.54 151.676 14.928 152.092 14.392C152.508 13.856 153.044 13.436 153.7 13.132C154.356 12.828 155.076 12.676 155.86 12.676C156.964 12.676 157.944 12.94 158.8 13.468C159.656 13.996 160.328 14.718 160.816 15.634C161.304 16.55 161.548 17.592 161.548 18.76C161.548 19.92 161.304 20.956 160.816 21.868C160.328 22.78 159.656 23.5 158.8 24.028C157.944 24.556 156.964 24.82 155.86 24.82ZM149.14 24.58V7.156H152.812V15.784L152.2 18.604L152.752 21.448V24.58H149.14ZM155.212 21.508C155.724 21.508 156.176 21.39 156.568 21.154C156.96 20.918 157.268 20.592 157.492 20.176C157.716 19.76 157.828 19.284 157.828 18.748C157.828 18.212 157.716 17.736 157.492 17.32C157.268 16.904 156.958 16.578 156.562 16.342C156.166 16.106 155.712 15.988 155.2 15.988C154.688 15.988 154.234 16.106 153.838 16.342C153.442 16.578 153.136 16.902 152.92 17.314C152.704 17.726 152.596 18.204 152.596 18.748C152.596 19.292 152.706 19.772 152.926 20.188C153.146 20.604 153.454 20.928 153.85 21.16C154.246 21.392 154.7 21.508 155.212 21.508Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M140.332 24.82C139.26 24.82 138.302 24.556 137.458 24.028C136.614 23.5 135.95 22.78 135.466 21.868C134.982 20.956 134.74 19.92 134.74 18.76C134.74 17.592 134.982 16.55 135.466 15.634C135.95 14.718 136.614 13.996 137.458 13.468C138.302 12.94 139.26 12.676 140.332 12.676C141.116 12.676 141.824 12.828 142.456 13.132C143.088 13.436 143.602 13.856 143.998 14.392C144.394 14.928 144.62 15.54 144.676 16.228V21.268C144.62 21.956 144.396 22.568 144.004 23.104C143.612 23.64 143.098 24.06 142.462 24.364C141.826 24.668 141.116 24.82 140.332 24.82ZM141.076 21.508C141.86 21.508 142.492 21.25 142.972 20.734C143.452 20.218 143.692 19.556 143.692 18.748C143.692 18.204 143.584 17.726 143.368 17.314C143.152 16.902 142.848 16.578 142.456 16.342C142.064 16.106 141.608 15.988 141.088 15.988C140.576 15.988 140.124 16.106 139.732 16.342C139.34 16.578 139.03 16.904 138.802 17.32C138.574 17.736 138.46 18.212 138.46 18.748C138.46 19.284 138.572 19.76 138.796 20.176C139.02 20.592 139.33 20.918 139.726 21.154C140.122 21.39 140.572 21.508 141.076 21.508ZM143.536 24.58V21.448L144.088 18.604L143.536 15.784V12.916H147.148V24.58H143.536Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M123.112 24.58V7.636H126.892V24.58H123.112ZM126.016 24.58V21.28H134.404V24.58H126.016Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M115.468 24.58V8.092H119.14V24.58H115.468ZM112.828 16.036V12.916H121.78V16.036H112.828Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M108.34 24.844C107.132 24.844 106.042 24.58 105.07 24.052C104.098 23.524 103.332 22.798 102.772 21.874C102.212 20.95 101.932 19.912 101.932 18.76C101.932 17.592 102.214 16.548 102.778 15.628C103.342 14.708 104.112 13.982 105.088 13.45C106.064 12.918 107.16 12.652 108.376 12.652C109.288 12.652 110.124 12.81 110.884 13.126C111.644 13.442 112.32 13.908 112.912 14.524L110.572 16.876C110.3 16.58 109.982 16.358 109.618 16.21C109.254 16.062 108.84 15.988 108.376 15.988C107.856 15.988 107.392 16.104 106.984 16.336C106.576 16.568 106.254 16.888 106.018 17.296C105.782 17.704 105.664 18.184 105.664 18.736C105.664 19.28 105.782 19.76 106.018 20.176C106.254 20.592 106.578 20.918 106.99 21.154C107.402 21.39 107.864 21.508 108.376 21.508C108.864 21.508 109.294 21.426 109.666 21.262C110.038 21.098 110.36 20.86 110.632 20.548L112.972 22.9C112.356 23.54 111.666 24.024 110.902 24.352C110.138 24.68 109.284 24.844 108.34 24.844Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M95.536 24.844C94.4752 24.844 93.532 24.624 92.7064 24.184C91.8808 23.744 91.234 23.1346 90.766 22.3558C90.298 21.5771 90.064 20.6833 90.064 19.6746V12.916H93.736V19.636C93.736 20.0372 93.8075 20.3828 93.9505 20.6727C94.0935 20.9626 94.3014 21.1863 94.5743 21.3438C94.8471 21.5013 95.169 21.58 95.5399 21.58C96.0893 21.58 96.524 21.4078 96.844 21.0633C97.164 20.7188 97.324 20.243 97.324 19.636V12.916H100.996V19.672C100.996 20.696 100.764 21.596 100.3 22.372C99.836 23.148 99.1943 23.754 98.3748 24.19C97.5554 24.626 96.6091 24.844 95.536 24.844Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M81.652 24.82C80.548 24.82 79.5682 24.5561 78.7126 24.0283C77.857 23.5005 77.185 22.7805 76.6966 21.8683C76.2082 20.9561 75.964 19.9192 75.964 18.7575C75.964 17.5875 76.208 16.5454 76.696 15.6313C77.184 14.7171 77.8552 13.996 78.7097 13.468C79.5641 12.94 80.5449 12.676 81.652 12.676C82.444 12.676 83.166 12.828 83.818 13.132C84.47 13.436 85.006 13.856 85.426 14.392C85.846 14.928 86.084 15.54 86.14 16.228V21.148C86.084 21.836 85.848 22.458 85.432 23.014C85.016 23.57 84.48 24.01 83.824 24.334C83.168 24.658 82.444 24.82 81.652 24.82ZM82.3 21.508C82.828 21.508 83.2855 21.3913 83.6726 21.158C84.0597 20.9247 84.3637 20.6007 84.5846 20.186C84.8055 19.7713 84.916 19.292 84.916 18.748C84.916 18.2009 84.8071 17.7225 84.5895 17.3128C84.3718 16.9031 84.0678 16.5799 83.6775 16.3431C83.2871 16.1064 82.834 15.988 82.318 15.988C81.802 15.988 81.3483 16.1067 80.9569 16.3442C80.5655 16.5816 80.2555 16.9078 80.0269 17.3228C79.7983 17.7377 79.684 18.2128 79.684 18.748C79.684 19.284 79.7957 19.7598 80.019 20.1755C80.2424 20.5912 80.5533 20.9172 80.9519 21.1535C81.3504 21.3898 81.7998 21.508 82.3 21.508ZM88.372 24.58H84.76V21.448L85.312 18.604L84.7 15.784V7.156H88.372V24.58Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M69.076 24.844C67.868 24.844 66.782 24.576 65.818 24.04C64.854 23.504 64.092 22.772 63.532 21.844C62.972 20.916 62.692 19.876 62.692 18.724C62.692 17.572 62.97 16.54 63.526 15.628C64.082 14.716 64.842 13.992 65.806 13.456C66.77 12.92 67.856 12.652 69.064 12.652C70.28 12.652 71.368 12.918 72.328 13.45C73.288 13.982 74.048 14.706 74.608 15.622C75.168 16.538 75.448 17.572 75.448 18.724C75.448 19.876 75.17 20.916 74.614 21.844C74.058 22.772 73.3 23.504 72.34 24.04C71.38 24.576 70.292 24.844 69.076 24.844ZM69.064 21.508C69.592 21.508 70.056 21.392 70.456 21.16C70.856 20.928 71.166 20.602 71.386 20.182C71.606 19.762 71.716 19.28 71.716 18.736C71.716 18.192 71.602 17.714 71.374 17.302C71.146 16.89 70.836 16.568 70.444 16.336C70.052 16.104 69.592 15.988 69.064 15.988C68.552 15.988 68.096 16.106 67.696 16.342C67.296 16.578 66.984 16.902 66.76 17.314C66.536 17.726 66.424 18.204 66.424 18.748C66.424 19.284 66.536 19.762 66.76 20.182C66.984 20.602 67.296 20.928 67.696 21.16C68.096 21.392 68.552 21.508 69.064 21.508Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M54.148 24.58V12.916H57.82V24.58H54.148ZM57.82 18.184L56.272 16.984C56.576 15.616 57.092 14.556 57.8199 13.804C58.5479 13.052 59.5439 12.676 60.808 12.676C61.368 12.676 61.862 12.76 62.29 12.928C62.718 13.096 63.092 13.356 63.412 13.708L61.228 16.468C61.068 16.292 60.8696 16.158 60.6327 16.066C60.3958 15.974 60.1222 15.928 59.812 15.928C59.204 15.928 58.72 16.115 58.36 16.489C58 16.863 57.82 17.428 57.82 18.184Z"
                        fill="#F0F0F0" />
                    <path class="nav__logo-text"
                        d="M42.892 18.412V15.484H46.54C47.0084 15.484 47.4315 15.3888 47.8093 15.1984C48.1872 15.0079 48.4881 14.7289 48.712 14.3612C48.936 13.9935 49.048 13.5478 49.048 13.024C49.048 12.5002 48.936 12.0545 48.712 11.6868C48.4881 11.3191 48.1872 11.0401 47.8093 10.8496C47.4315 10.6592 47.0084 10.564 46.54 10.564H42.892V7.636H47.08C48.16 7.636 49.132 7.854 49.996 8.29C50.86 8.726 51.544 9.34522 52.048 10.1477C52.552 10.9501 52.804 11.9081 52.804 13.0217C52.804 14.1272 52.552 15.084 52.048 15.892C51.544 16.7 50.86 17.322 49.996 17.758C49.132 18.194 48.16 18.412 47.08 18.412H42.892ZM40 24.58V7.636H43.78V24.58H40Z"
                        fill="#F0F0F0" />
                </svg>
                <span class="sr-only">JC ProductLab</span>
            </a>

            <!-- Nav links — visible on desktop only -->
            <ul class="nav__menu" role="list" id="nav-menu">
                <li class="nav__menu-item">
                    <a href="/#casos" class="nav-link">Casos de estudio</a>
                </li>
                <li class="nav__menu-item">
                    <a href="#sobre-mi" class="nav-link">Sobre mí</a>
                </li>
                <li class="nav__menu-item">
                    <a href="#hablemos" class="nav-link">Hablemos</a>
                </li>
            </ul>

            <!-- Action buttons group -->
            <div class="nav__actions" role="group" aria-label="Acciones globales">

                <!-- Action buttons (hidden on mobile, shown on tablet/desktop) -->
                <div class="nav__actions-controls">
                    <!-- Theme toggle -->
                    <button class="btn-icon" id="theme-toggle" aria-label="Activar modo claro" aria-pressed="false"
                        title="Cambiar tema">
                        <i class="ph ph-sun" aria-hidden="true"></i>
                    </button>

                    <!-- Language toggle -->
                    <a href="/en/" class="btn-icon" id="lang-toggle" aria-label="Switch to English"
                        title="Cambiar idioma">
                        <i class="ph ph-translate" aria-hidden="true"></i>
                    </a>

                    <!-- CV download -->
                    <a href="./assets/cv-julio-cesar-tinoco.pdf" class="btn-icon" aria-label="Descargar CV"
                        title="Descargar CV" download>
                        <i class="ph ph-download-simple" aria-hidden="true"></i>
                    </a>

                    <!-- WhatsApp contact -->
                    <a href="https://wa.me/5215512345678" class="btn-icon" aria-label="Contactar por WhatsApp"
                        title="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
                    </a>
                </div>

                <!-- Hamburger — visible on mobile and tablet only -->
                <button class="btn-icon nav__hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false"
                    aria-controls="nav-overlay">
                    <i class="ph ph-list" aria-hidden="true"></i>
                </button>
            </div>

        </nav>
    </header>

    <!-- ============================================ -->
    <!-- NAV OVERLAY — Mobile / Tablet menu          -->
    <!-- ============================================ -->
    <div class="nav-overlay" id="nav-overlay" role="dialog" aria-modal="true" aria-label="Menú de navegación"
        aria-hidden="true">

        <!-- Close button -->
        <button class="btn-icon nav-overlay__close" aria-label="Cerrar menú">
            <i class="ph ph-x" aria-hidden="true"></i>
        </button>

        <!-- Nav links -->
        <ul class="nav-overlay__menu" role="list">
            <li>
                <a href="/#casos" class="nav-link nav-overlay__link">Casos de estudio</a>
            </li>
            <li>
                <a href="#sobre-mi" class="nav-link nav-overlay__link">Sobre mí</a>
            </li>
            <li>
                <a href="#hablemos" class="nav-link nav-overlay__link">Hablemos</a>
            </li>
        </ul>

        <!-- Action buttons duplicated for mobile access -->
        <div class="nav-overlay__actions" role="group" aria-label="Acciones globales">
            <button class="btn-icon" aria-label="Activar modo claro" id="theme-toggle-overlay" title="Cambiar tema">
                <i class="ph ph-sun" aria-hidden="true"></i>
            </button>

            <a href="/en/" class="btn-icon" aria-label="Switch to English" title="Cambiar idioma">
                <i class="ph ph-translate" aria-hidden="true"></i>
            </a>

            <a href="./assets/cv-julio-cesar-tinoco.pdf" class="btn-icon" aria-label="Descargar CV" title="Descargar CV"
                download>
                <i class="ph ph-download-simple" aria-hidden="true"></i>
            </a>

            <a href="https://wa.me/5215512345678" class="btn-icon" aria-label="Contactar por WhatsApp" title="WhatsApp"
                target="_blank" rel="noopener noreferrer">
                <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
            </a>
        </div>

    </div>

    <!-- ============================================ -->
    <!-- MAIN CONTENT                                 -->
    <!-- ============================================ -->
    <main id="main" role="main">

        <!-- ============================================ -->
        <!-- ORGANISMO: Hero (invertido vs. index.html)   -->
        <!-- ============================================ -->
        <section class="hero hero--about" aria-label="Presentación">

            <!-- Hero left — photo (invertido: va primero en el DOM) -->
            <div class="hero__right" aria-hidden="true">
                <div class="hero__image">
                    <img src="assets/images/hero-photo.webp" alt="César Tinoco, Senior Product Designer" width="681"
                        height="912" class="hero__photo" fetchpriority="high" draggable="false">
                </div>
            </div>

            <!-- Hero right — content -->
            <div class="hero__content">

                <!-- Átomo: Etiqueta disponibilidad -->
                <span class="tag tag--bordered" role="status" aria-live="polite">
                    Disponible para trabajar
                </span>

                <!-- Átomo: H1 único en la página -->
                <h1>
                    <span class="hero__headline-line">Diseño que mueve el </span><span
                        class="hero__headline-accent">negocio</span>
                </h1>

                <!-- Subtítulo -->
                <h4>
                    13 años aprendiendo que el mejor diseño es el que nadie nota porque simplemente funciona.
                </h4>

                <!-- Átomo: CTA principal -->
                <button class="btn btn--primary" href="#">
                    Así genero resultados
                    <span class="btn__icon" aria-hidden="true">
                        <i class="ph ph-arrow-up-right"></i>
                    </span>
                </button>
            </div>

        </section>
        <!-- END: Hero -->

        <!-- TASK 2: SECCIÓN "SOBRE MÍ" -->

        <!-- TASK 3: SECCIÓN "METODOLOGÍA" -->

        <!-- ============================================ -->
        <!-- ORGANISMO: Testimonial Section               -->
        <!-- ============================================ -->
        <section class="testimonial-section" aria-label="Testimonios de clientes">

            <header class="section-header">
                <span class="section-header__label cs-label">[ Clientes satisfechos ]</span>
                <h2 class="section-header__title">Voces que respaldan mi trabajo</h2>
            </header>

            <div class="testimonial-section__grid">

                <!-- Testimonial Card #1 -->
                <article class="testimonial-card">
                    <i class="ph ph-quotes testimonial-card__quote" aria-hidden="true"></i>

                    <p class="testimonial-card__text">
                        "César llegó a proyectos que ya habían fallado con otros diseñadores. Lo que más me sorprendió
                        fue ver cómo el cliente, que antes rechazaba todo, empezó a aprobar sin objeciones. No solo
                        entregaba diseño, entregaba avance y soluciones reales."
                    </p>

                    <footer class="testimonial-card__author">
                        <div class="avatar avatar--default">
                            <img src="assets/images/testimonials/avatar__image.jpg" alt="Alejandra Polanco"
                                class="avatar__image" width="48" height="48">
                        </div>
                        <div class="testimonial-card__author-info">
                            <p class="testimonial-card__author-name">Alejandra Polanco</p>
                            <p class="testimonial-card__author-role">Project Manager, Dacodes</p>
                        </div>
                    </footer>
                </article>

                <!-- Testimonial Card #2 -->
                <article class="testimonial-card">
                    <i class="ph ph-quotes testimonial-card__quote" aria-hidden="true"></i>

                    <p class="testimonial-card__text">
                        "César llegó a proyectos que ya habían fallado con otros diseñadores. Lo que más me sorprendió
                        fue ver cómo el cliente, que antes rechazaba todo, empezó a aprobar sin objeciones. No solo
                        entregaba diseño, entregaba avance y soluciones reales."
                    </p>

                    <footer class="testimonial-card__author">
                        <div class="avatar avatar--default">
                            <img src="assets/images/testimonials/avatar__image.jpg" alt="Alejandra Polanco"
                                class="avatar__image" width="48" height="48">
                        </div>
                        <div class="testimonial-card__author-info">
                            <p class="testimonial-card__author-name">Alejandra Polanco</p>
                            <p class="testimonial-card__author-role">Project Manager, Dacodes</p>
                        </div>
                    </footer>
                </article>

            </div>
        </section>
        <!-- END: Testimonial Section -->

        <!-- ============================================ -->
        <!-- ORGANISMO: Clients Marquee                   -->
        <!-- ============================================ -->
        <section class="clients-marquee" aria-label="Clientes" role="marquee">
            <ul class="clients-marquee__list" role="list">
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-santander.svg" alt="Santander" class="clients-marquee__logo"
                        width="148" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-gentera.svg" alt="Gentera" class="clients-marquee__logo"
                        width="128" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-walmart.svg" alt="Walmart" class="clients-marquee__logo"
                        width="137" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-soriana.svg" alt="Soriana" class="clients-marquee__logo"
                        width="128" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-televisa.svg" alt="Televisa" class="clients-marquee__logo"
                        width="183" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-gobierno.svg" alt="Gobierno de México"
                        class="clients-marquee__logo" width="101" height="32" loading="lazy">
                </li>
            </ul>
            <ul class="clients-marquee__list clients-marquee__list--clone" aria-hidden="true" role="list">
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-santander.svg" alt="" class="clients-marquee__logo"
                        width="148" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-gentera.svg" alt="" class="clients-marquee__logo"
                        width="128" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-walmart.svg" alt="" class="clients-marquee__logo"
                        width="137" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-soriana.svg" alt="" class="clients-marquee__logo"
                        width="128" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-televisa.svg" alt="" class="clients-marquee__logo"
                        width="183" height="32" loading="lazy">
                </li>
                <li class="clients-marquee__item">
                    <img src="assets/images/logos/logo-gobierno.svg" alt="" class="clients-marquee__logo"
                        width="101" height="32" loading="lazy">
                </li>
            </ul>
        </section>
        <!-- END: Clients Marquee -->

        <!-- ============================================ -->
        <!-- ORGANISMO: CTA Section — ¿Arrancamos?        -->
        <!-- ============================================ -->
        <section class="cta-section" id="hablemos" aria-label="Contacto">

            <!-- Aurora WebGL2 background — fractal.js init -->
            <canvas id="cta-fractal-canvas" aria-hidden="true"></canvas>

            <header class="section-header section-header--centered">
                <span class="section-header__label cs-label">[ Contacto ]</span>
                <h2 class="section-header__title">¿Arrancamos?</h2>
            </header>

            <div class="cta-section__body">
                <p class="cta-section__text large-paragraph">
                    El siguiente paso es una conversación.
                </p>

                <button type="button" class="btn btn--primary cta-section__cta cta-section__cta-mobile"
                    onclick="window.open('https://wa.me/525613148831', '_blank')">
                    Charlemos en
                    <span class="btn__icon" aria-hidden="true">
                        <i class="ph ph-whatsapp-logo"></i>
                    </span>
                </button>
                <button type="button" class="btn-liquid cta-section__cta-desktop" onclick="window.open('https://wa.me/525613148831', '_blank')">
                    <span class="btn-liquid__merge-bg" aria-hidden="true"></span>
                    <span class="btn-liquid__pill btn-liquid__pill--charlemos">Charlemos</span>
                    <span class="btn-liquid__pill btn-liquid__pill--en">en</span>
                    <span class="btn-liquid__pill btn-liquid__pill--whatsapp"><span class="btn__icon"><i class="ph ph-whatsapp-logo"></i></span></span>
                    <span class="btn-liquid__spacer-right" aria-hidden="true"></span>
                </button>
            </div>

            <div class="cta-section__contacts" role="group" aria-label="Datos de contacto">
                <a href="mailto:jcproductlab@gmail.com" class="tag tag--bordered cta-section__contact-tag">
                    jcproductlab@gmail.com
                </a>
            </div>

        </section>
        <!-- END: CTA Section -->

    </main>

    <!-- ============================================ -->
    <!-- ORGANISMO: Footer                            -->
    <!-- ============================================ -->
    <footer class="footer" role="contentinfo">

        <div class="footer__top">

            <!-- Brand column -->
            <div class="footer__brand-col">

                <a href="/" class="footer__logo-link" aria-label="JC ProductLab — Inicio">
                    <svg class="footer__logo-svg" width="162" height="32" viewBox="0 0 162 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect width="32" height="32" rx="8" fill="#00D46E" />
                        <path
                            d="M15.9792 25L7.83333 18.5833L9.81249 17.0208L15.9792 21.875L22.1875 17.0208L24.1667 18.5833L15.9792 25ZM15.9792 19.7917L7.83333 13.3958L15.9792 7L24.125 13.3958L15.9792 19.7917ZM15.9792 16.6667L20.125 13.3958L15.9792 10.1458L11.8333 13.3958L15.9792 16.6667Z"
                            fill="#0D0D0D" />
                        <path class="footer__logo-text"
                            d="M155.86 24.82C155.068 24.82 154.344 24.658 153.688 24.334C153.032 24.01 152.498 23.57 152.086 23.014C151.674 22.458 151.436 21.836 151.372 21.148V16.228C151.436 15.54 151.676 14.928 152.092 14.392C152.508 13.856 153.044 13.436 153.7 13.132C154.356 12.828 155.076 12.676 155.86 12.676C156.964 12.676 157.944 12.94 158.8 13.468C159.656 13.996 160.328 14.718 160.816 15.634C161.304 16.55 161.548 17.592 161.548 18.76C161.548 19.92 161.304 20.956 160.816 21.868C160.328 22.78 159.656 23.5 158.8 24.028C157.944 24.556 156.964 24.82 155.86 24.82ZM149.14 24.58V7.156H152.812V15.784L152.2 18.604L152.752 21.448V24.58H149.14ZM155.212 21.508C155.724 21.508 156.176 21.39 156.568 21.154C156.96 20.918 157.268 20.592 157.492 20.176C157.716 19.76 157.828 19.284 157.828 18.748C157.828 18.212 157.716 17.736 157.492 17.32C157.268 16.904 156.958 16.578 156.562 16.342C156.166 16.106 155.712 15.988 155.2 15.988C154.688 15.988 154.234 16.106 153.838 16.342C153.442 16.578 153.136 16.902 152.92 17.314C152.704 17.726 152.596 18.204 152.596 18.748C152.596 19.292 152.706 19.772 152.926 20.188C153.146 20.604 153.454 20.928 153.85 21.16C154.246 21.392 154.7 21.508 155.212 21.508Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M140.332 24.82C139.26 24.82 138.302 24.556 137.458 24.028C136.614 23.5 135.95 22.78 135.466 21.868C134.982 20.956 134.74 19.92 134.74 18.76C134.74 17.592 134.982 16.55 135.466 15.634C135.95 14.718 136.614 13.996 137.458 13.468C138.302 12.94 139.26 12.676 140.332 12.676C141.116 12.676 141.824 12.828 142.456 13.132C143.088 13.436 143.602 13.856 143.998 14.392C144.394 14.928 144.62 15.54 144.676 16.228V21.268C144.62 21.956 144.396 22.568 144.004 23.104C143.612 23.64 143.098 24.06 142.462 24.364C141.826 24.668 141.116 24.82 140.332 24.82ZM141.076 21.508C141.86 21.508 142.492 21.25 142.972 20.734C143.452 20.218 143.692 19.556 143.692 18.748C143.692 18.204 143.584 17.726 143.368 17.314C143.152 16.902 142.848 16.578 142.456 16.342C142.064 16.106 141.608 15.988 141.088 15.988C140.576 15.988 140.124 16.106 139.732 16.342C139.34 16.578 139.03 16.904 138.802 17.32C138.574 17.736 138.46 18.212 138.46 18.748C138.46 19.284 138.572 19.76 138.796 20.176C139.02 20.592 139.33 20.918 139.726 21.154C140.122 21.39 140.572 21.508 141.076 21.508ZM143.536 24.58V21.448L144.088 18.604L143.536 15.784V12.916H147.148V24.58H143.536Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M123.112 24.58V7.636H126.892V24.58H123.112ZM126.016 24.58V21.28H134.404V24.58H126.016Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M115.468 24.58V8.092H119.14V24.58H115.468ZM112.828 16.036V12.916H121.78V16.036H112.828Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M108.34 24.844C107.132 24.844 106.042 24.58 105.07 24.052C104.098 23.524 103.332 22.798 102.772 21.874C102.212 20.95 101.932 19.912 101.932 18.76C101.932 17.592 102.214 16.548 102.778 15.628C103.342 14.708 104.112 13.982 105.088 13.45C106.064 12.918 107.16 12.652 108.376 12.652C109.288 12.652 110.124 12.81 110.884 13.126C111.644 13.442 112.32 13.908 112.912 14.524L110.572 16.876C110.3 16.58 109.982 16.358 109.618 16.21C109.254 16.062 108.84 15.988 108.376 15.988C107.856 15.988 107.392 16.104 106.984 16.336C106.576 16.568 106.254 16.888 106.018 17.296C105.782 17.704 105.664 18.184 105.664 18.736C105.664 19.28 105.782 19.76 106.018 20.176C106.254 20.592 106.578 20.918 106.99 21.154C107.402 21.39 107.864 21.508 108.376 21.508C108.864 21.508 109.294 21.426 109.666 21.262C110.038 21.098 110.36 20.86 110.632 20.548L112.972 22.9C112.356 23.54 111.666 24.024 110.902 24.352C110.138 24.68 109.284 24.844 108.34 24.844Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M95.536 24.844C94.4752 24.844 93.532 24.624 92.7064 24.184C91.8808 23.744 91.234 23.1346 90.766 22.3558C90.298 21.5771 90.064 20.6833 90.064 19.6746V12.916H93.736V19.636C93.736 20.0372 93.8075 20.3828 93.9505 20.6727C94.0935 20.9626 94.3014 21.1863 94.5743 21.3438C94.8471 21.5013 95.169 21.58 95.5399 21.58C96.0893 21.58 96.524 21.4078 96.844 21.0633C97.164 20.7188 97.324 20.243 97.324 19.636V12.916H100.996V19.672C100.996 20.696 100.764 21.596 100.3 22.372C99.836 23.148 99.1943 23.754 98.3748 24.19C97.5554 24.626 96.6091 24.844 95.536 24.844Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M81.652 24.82C80.548 24.82 79.5682 24.5561 78.7126 24.0283C77.857 23.5005 77.185 22.7805 76.6966 21.8683C76.2082 20.9561 75.964 19.9192 75.964 18.7575C75.964 17.5875 76.208 16.5454 76.696 15.6313C77.184 14.7171 77.8552 13.996 78.7097 13.468C79.5641 12.94 80.5449 12.676 81.652 12.676C82.444 12.676 83.166 12.828 83.818 13.132C84.47 13.436 85.006 13.856 85.426 14.392C85.846 14.928 86.084 15.54 86.14 16.228V21.148C86.084 21.836 85.848 22.458 85.432 23.014C85.016 23.57 84.48 24.01 83.824 24.334C83.168 24.658 82.444 24.82 81.652 24.82ZM82.3 21.508C82.828 21.508 83.2855 21.3913 83.6726 21.158C84.0597 20.9247 84.3637 20.6007 84.5846 20.186C84.8055 19.7713 84.916 19.292 84.916 18.748C84.916 18.2009 84.8071 17.7225 84.5895 17.3128C84.3718 16.9031 84.0678 16.5799 83.6775 16.3431C83.2871 16.1064 82.834 15.988 82.318 15.988C81.802 15.988 81.3483 16.1067 80.9569 16.3442C80.5655 16.5816 80.2555 16.9078 80.0269 17.3228C79.7983 17.7377 79.684 18.2128 79.684 18.748C79.684 19.284 79.7957 19.7598 80.019 20.1755C80.2424 20.5912 80.5533 20.9172 80.9519 21.1535C81.3504 21.3898 81.7998 21.508 82.3 21.508ZM88.372 24.58H84.76V21.448L85.312 18.604L84.7 15.784V7.156H88.372V24.58Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M69.076 24.844C67.868 24.844 66.782 24.576 65.818 24.04C64.854 23.504 64.092 22.772 63.532 21.844C62.972 20.916 62.692 19.876 62.692 18.724C62.692 17.572 62.97 16.54 63.526 15.628C64.082 14.716 64.842 13.992 65.806 13.456C66.77 12.92 67.856 12.652 69.064 12.652C70.28 12.652 71.368 12.918 72.328 13.45C73.288 13.982 74.048 14.706 74.608 15.622C75.168 16.538 75.448 17.572 75.448 18.724C75.448 19.876 75.17 20.916 74.614 21.844C74.058 22.772 73.3 23.504 72.34 24.04C71.38 24.576 70.292 24.844 69.076 24.844ZM69.064 21.508C69.592 21.508 70.056 21.392 70.456 21.16C70.856 20.928 71.166 20.602 71.386 20.182C71.606 19.762 71.716 19.28 71.716 18.736C71.716 18.192 71.602 17.714 71.374 17.302C71.146 16.89 70.836 16.568 70.444 16.336C70.052 16.104 69.592 15.988 69.064 15.988C68.552 15.988 68.096 16.106 67.696 16.342C67.296 16.578 66.984 16.902 66.76 17.314C66.536 17.726 66.424 18.204 66.424 18.748C66.424 19.284 66.536 19.762 66.76 20.182C66.984 20.602 67.296 20.928 67.696 21.16C68.096 21.392 68.552 21.508 69.064 21.508Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M54.148 24.58V12.916H57.82V24.58H54.148ZM57.82 18.184L56.272 16.984C56.576 15.616 57.092 14.556 57.8199 13.804C58.5479 13.052 59.5439 12.676 60.808 12.676C61.368 12.676 61.862 12.76 62.29 12.928C62.718 13.096 63.092 13.356 63.412 13.708L61.228 16.468C61.068 16.292 60.8696 16.158 60.6327 16.066C60.3958 15.974 60.1222 15.928 59.812 15.928C59.204 15.928 58.72 16.115 58.36 16.489C58 16.863 57.82 17.428 57.82 18.184Z"
                            fill="#F0F0F0" />
                        <path class="footer__logo-text"
                            d="M42.892 18.412V15.484H46.54C47.0084 15.484 47.4315 15.3888 47.8093 15.1984C48.1872 15.0079 48.4881 14.7289 48.712 14.3612C48.936 13.9935 49.048 13.5478 49.048 13.024C49.048 12.5002 48.936 12.0545 48.712 11.6868C48.4881 11.3191 48.1872 11.0401 47.8093 10.8496C47.4315 10.6592 47.0084 10.564 46.54 10.564H42.892V7.636H47.08C48.16 7.636 49.132 7.854 49.996 8.29C50.86 8.726 51.544 9.34522 52.048 10.1477C52.552 10.9501 52.804 11.9081 52.804 13.0217C52.804 14.1272 52.552 15.084 52.048 15.892C51.544 16.7 50.86 17.322 49.996 17.758C49.132 18.194 48.16 18.412 47.08 18.412H42.892ZM40 24.58V7.636H43.78V24.58H40Z"
                            fill="#F0F0F0" />
                    </svg>
                </a>

                <p class="footer__tagline">
                    A boutique product design studio specialized in building modern digital products.
                </p>

                <ul class="footer__social" role="list">
                    <li class="footer__social-item">
                        <a href="https://www.linkedin.com/in/j-cesar-tm/" class="footer__social-link"
                            aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i class="ph ph-linkedin-logo" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="https://www.instagram.com/jc_productlab/" class="footer__social-link"
                            aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i class="ph ph-instagram-logo" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="https://x.com/jcproductlab" class="footer__social-link" aria-label="X (Twitter)"
                            target="_blank" rel="noopener noreferrer">
                            <i class="ph ph-x-logo" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="https://www.behance.net/cesartinocomarin" class="footer__social-link"
                            aria-label="Behance" target="_blank" rel="noopener noreferrer">
                            <i class="ph ph-behance-logo" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Sitemap column -->
            <nav class="footer__nav-block" aria-label="Sitemap">
                <h3 class="footer__nav-title">Sitemap</h3>
                <ul class="footer__nav-list" role="list">
                    <li><a href="/" class="footer__nav-link">Inicio</a></li>
                    <li><a href="#sobre-mi" class="footer__nav-link">Sobre mí</a></li>
                    <li><a href="#hablemos" class="footer__nav-link">Contacto</a></li>
                </ul>
            </nav>

            <!-- Cases column -->
            <nav class="footer__nav-block" aria-label="Casos de estudio">
                <h3 class="footer__nav-title">Casos de estudio</h3>
                <ul class="footer__nav-list" role="list">
                    <li class="footer__case-link">
                        <a href="https://jcproductlab.framer.website/work/gentera" class="footer__nav-link">
                            <span class="footer__case-tag">Fintech</span>
                            <span class="footer__case-name">Gentera</span>
                        </a>
                    </li>
                    <li class="footer__case-link">
                        <a href="https://jcproductlab.framer.website/work/as-deporte" class="footer__nav-link">
                            <span class="footer__case-tag">E-commerce</span>
                            <span class="footer__case-name">AsDeporte</span>
                        </a>
                    </li>
                    <li class="footer__case-link">
                        <a href="https://jcproductlab.framer.website/work/centro-medico-abc" class="footer__nav-link">
                            <span class="footer__case-tag">HealthTech</span>
                            <span class="footer__case-name">Hospital ABC</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>

        <!-- Legal row -->
        <div class="footer__legal">
            <p class="footer__copyright">
                © 2026 ProductLab Portfolio. All rights reserved.
            </p>
            <ul class="footer__legal-links" role="list">
                <li><a href="#" class="footer__legal-link">Terms of Service</a></li>
                <li><a href="#" class="footer__legal-link">Cookie Settings</a></li>
            </ul>
        </div>

    </footer>
    <!-- END: Footer -->

    <!-- ============================================ -->
    <!-- JAVASCRIPT — defer, non-blocking            -->
    <!-- ============================================ -->
    <script type="module" src="js/main.js" defer></script>

    <!-- Fractal Aurora — fondo .cta-section (independiente de main.js) -->
    <script type="module">
        import { initFractalBackground } from './js/modules/animations/fractal.js';
        if (document.readyState === 'complete') {
            initFractalBackground();
        } else {
            window.addEventListener('load', initFractalBackground);
        }
    </script>

</body>

</html>
```

- [ ] **Step 4: Agregar el mirror de escritorio del hero a `css/about-responsive.css`**

Reemplazar el contenido de `css/about-responsive.css` (el bloque `@media` vacío del Step 2) por:

```css
/* ============================================
   ABOUT (sobre-mi.html) — Desktop (1200px+)
   Todo el contenido de este archivo vive dentro de un único
   @media (min-width: 1200px), igual que responsive.css.
   ============================================ */

@media (min-width: 1200px) {

    /* ============================================
       Hero invertido — mismo layout que .hero de responsive.css
       a 1200px (row + foto absoluta), espejado: la columna de la
       foto (.hero__right) queda primera en el DOM (ver
       sobre-mi.html), así que solo hace falta invertir el eje
       principal y espejar la posición horizontal de la foto
       dentro de su propia caja (antes bebía hacia la izquierda
       desde su borde derecho, ahora bebe hacia la derecha desde
       su borde izquierdo — mismo efecto de solape con el texto,
       en el lado opuesto).
       ============================================ */
    .hero--about {
        flex-direction: row-reverse;
    }

    .hero--about .hero__photo {
        left: auto;
        right: 40%;
        transform: translate(50%, -50%);
    }

}
```

- [ ] **Step 5: Verificación manual (usuario)**

Servir el sitio (`python3 -m http.server 8080` desde la raíz del repo) y abrir `http://localhost:8080/sobre-mi.html`. Verificar:
1. La página carga sin errores en la consola del navegador.
2. Header, menú hamburguesa (mobile/tablet), toggle de tema y toggle de idioma funcionan igual que en `index.html`.
3. El hero muestra la foto y el texto — en mobile/tablet se ve igual que en `index.html` (foto de fondo completa, texto superpuesto). En desktop (≥1200px, ventana ancha) la foto queda a la izquierda y el texto a la derecha (invertido respecto a `index.html`).
4. Debajo del hero se ven directamente los testimonios, el marquee de clientes, la sección "¿Arrancamos?" (con el fondo animado) y el footer — sin huecos ni errores visuales por los comentarios `<!-- TASK 2 -->` / `<!-- TASK 3 -->` (no deben renderizar nada, son comentarios HTML).
5. El link "Sobre mí" del nav lleva al hero de esta misma página (ancla `#sobre-mi` — válida recién en Task 2, por ahora no scrollea a ningún lado porque el id todavía no existe; es esperado en este punto del plan).

El commit de esta tarea lo hace el subagente implementador dentro del worktree, como parte del flujo estándar de subagent-driven-development (ver Global Constraints).

---

### Task 2: Sección 2 — "Sobre mí" (`.about-bio`)

**Files:**
- Modify: `sobre-mi.html`
- Modify: `css/about.css`
- Modify: `css/about-responsive.css`

**Interfaces:**
- Consumes: nada nuevo de Task 1 (inserta contenido en el marcador `<!-- TASK 2: SECCIÓN "SOBRE MÍ" -->`).
- Produces: `.about-bio` / `.about-bio__header` / `.about-bio__mask` / `.about-bio__track` — selectores que Task 4 usa para el pin. En este punto **sin** altura fija ni `overflow:hidden` (flujo natural, todo el párrafo visible con scroll normal de la página) — Task 4 agrega esa restricción junto con el JS que la hace navegable.

- [ ] **Step 1: Insertar el HTML de la sección en `sobre-mi.html`**

Reemplazar la línea:

```html
        <!-- TASK 2: SECCIÓN "SOBRE MÍ" -->
```

por:

```html
        <!-- ============================================ -->
        <!-- ORGANISMO: About Bio — Sección "Sobre mí"    -->
        <!-- ============================================ -->
        <section class="about-bio" id="sobre-mi" aria-label="Sobre mí">

            <header class="section-header about-bio__header">
                <span class="section-header__label cs-label">[ Sobre mí ]</span>
                <h2 class="section-header__title">Lorem ipsum dolor sit amet consectetur.</h2>
            </header>

            <div class="about-bio__mask">
                <div class="about-bio__track">
                    <p>Soy un obsesivo del orden que encontró su lugar en el diseño digital. Me genera satisfacción tomar un caos, un proceso roto, una interfaz confusa, un flujo que nadie entiende y convertirlo en algo que funcione.</p>
                    <p>No siempre fue así. En 2012, era el único diseñador en una oficina llena de ingenieros. Presenté un flujo de checkout que consideraba perfecto. El líder técnico me miró y me dijo: "Está muy bonito, pero eso no se puede programar en el tiempo que tenemos y va a romper la base de datos."</p>
                    <p>Ese día tuve dos opciones: indignarme como artista o aprender cómo funcionaban sus códigos. Elegí lo segundo.</p>
                    <p>Me metí a la arquitectura de su base de datos. Aprendí por qué mi diseño bonito era ineficiente a nivel de servidor. Empecé a proponer soluciones que respetaban su lógica sin sacrificar la experiencia del usuario. No aprendí código por hobby, lo aprendí para que mis diseños tuvieran permiso de existir en el mundo real.</p>
                    <p>Ese momento define todo lo que hago hoy. Cuando presento un proyecto, sé exactamente qué tornillo van a tener que apretar los programadores para que mi visión cobre vida.</p>
                    <p>No solo diseño interfaces. Diseño acuerdos técnicos.</p>
                    <p>13 años después, sigo siendo el mismo tipo que quiere entender cómo funcionan las máquinas por dentro. Solo que ahora las máquinas son productos digitales y los resultados se miden en horas devueltas, conversiones ganadas y negocios que dejaron de hundirse.</p>
                </div>
            </div>

        </section>
        <!-- END: About Bio -->
```

- [ ] **Step 2: Agregar los estilos base + tablet a `css/about.css`**

Agregar al final de `css/about.css`:

```css

/* ============================================
   ORGANISMO: About Bio — Sección "Sobre mí"
   ============================================ */

.about-bio {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    padding: 24px;
    padding-top: calc(24px + 64px);
    background-color: var(--color-primary);
}

.about-bio__header {
    flex-shrink: 0;
}

.about-bio__mask {
    width: 100%;
}

.about-bio__track {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.about-bio__track p {
    margin: 0;
    color: var(--color-text-secondary);
}

/* ============================================
   min-width: 700px — Tablet
   ============================================ */

@media (min-width: 700px) {

    .about-bio {
        gap: 48px;
        padding: 40px;
        padding-top: calc(40px + 64px);
    }

    .about-bio__track {
        gap: 24px;
    }

}
```

- [ ] **Step 3: Agregar el layout de 2 columnas de desktop a `css/about-responsive.css`**

Dentro del `@media (min-width: 1200px) { ... }` de `css/about-responsive.css`, agregar (antes del bloque `.hero--about` que ya existe de Task 1, o después — el orden dentro del media query no importa):

```css

    /* ============================================
       About Bio — 2 columnas (header ~35% / texto ~62%)
       ============================================ */
    .about-bio {
        flex-direction: row;
        align-items: flex-start;
        gap: 64px;
        padding: 64px;
        max-width: 1440px;
        margin: 0 auto;
    }

    .about-bio__header {
        flex: 0 0 35%;
        max-width: 35%;
    }

    .about-bio__mask {
        flex: 1 1 auto;
    }
```

- [ ] **Step 4: Verificación manual (usuario)**

Con el server local corriendo, recargar `http://localhost:8080/sobre-mi.html`:
1. Debajo del hero aparece la sección "Sobre mí": label `[ Sobre mí ]`, título "Lorem ipsum dolor sit amet consectetur.", y los 7 párrafos completos, legibles con scroll normal de la página (todavía sin pin — es esperado, Task 4 lo agrega).
2. En mobile/tablet (<1200px): label+título arriba, párrafos abajo, ambos a todo el ancho.
3. En desktop (≥1200px): label+título a la izquierda (~35% del ancho), los 7 párrafos a la derecha, alineados arriba.
4. El link "Sobre mí" del nav ahora sí scrollea correctamente hasta esta sección (el id `#sobre-mi` ya existe).

El commit de esta tarea lo hace el subagente implementador dentro del worktree, como parte del flujo estándar de subagent-driven-development (ver Global Constraints).

---

### Task 3: Sección 3 — "Metodología" (`.methodology` + cards)

**Files:**
- Modify: `sobre-mi.html`
- Modify: `css/about.css`
- Modify: `css/about-responsive.css`

**Interfaces:**
- Consumes: nada nuevo de Tasks 1–2 (inserta contenido en el marcador `<!-- TASK 3: SECCIÓN "METODOLOGÍA" -->`).
- Produces: `.methodology` / `.methodology__header` / `.methodology__mask` / `.methodology__track` / `.methodology__grid` / `.methodology-card` (+ elementos `__header`, `__number`, `__icon`, `__title`, `__description`) — selectores que Task 4 usa para el pin (mismo contrato que `.about-bio`/`.about-bio__mask`/`.about-bio__track`). Sin altura fija todavía.

- [ ] **Step 1: Insertar el HTML de la sección en `sobre-mi.html`**

Reemplazar la línea:

```html
        <!-- TASK 3: SECCIÓN "METODOLOGÍA" -->
```

por:

```html
        <!-- ============================================ -->
        <!-- ORGANISMO: Methodology — Sección "Metodología" -->
        <!-- ============================================ -->
        <section class="methodology" aria-label="Metodología">

            <header class="section-header methodology__header">
                <span class="section-header__label cs-label">[ Metodología ]</span>
                <h2 class="section-header__title">Cómo trabajo</h2>
            </header>

            <div class="methodology__mask">
                <div class="methodology__track">
                    <div class="methodology__grid">

                        <article class="methodology-card">
                            <div class="methodology-card__header">
                                <span class="methodology-card__number important">01</span>
                                <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-magnifying-glass"></i></span>
                            </div>
                            <h3 class="bold-subtitle methodology-card__title">Primero la verdad, luego la solución</h3>
                            <p class="small-paragraph methodology-card__description">Empiezo cuestionando todo y buscando la verdad en los datos, los stakeholders y con los usuarios. Mi prioridad es garantizar que no se desperdicie un centavo diseñando una solución para el problema equivocado.</p>
                        </article>

                        <article class="methodology-card">
                            <div class="methodology-card__header">
                                <span class="methodology-card__number important">02</span>
                                <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-code"></i></span>
                            </div>
                            <h3 class="bold-subtitle methodology-card__title">Diseño que se puede construir</h3>
                            <p class="small-paragraph methodology-card__description">Traduzco los objetivos de negocio en un diseño y una arquitectura intuitiva para el usuario y viable para los desarrolladores. Elimino la fricción técnica antes de que se convierta en un retraso costoso.</p>
                        </article>

                        <article class="methodology-card">
                            <div class="methodology-card__header">
                                <span class="methodology-card__number important">03</span>
                                <span class="methodology-card__icon" aria-hidden="true"><i class="ph ph-rocket-launch"></i></span>
                            </div>
                            <h3 class="bold-subtitle methodology-card__title">La entrega no termina en Figma</h3>
                            <p class="small-paragraph methodology-card__description">Superviso la implementación hasta el último píxel para que los usuarios encuentren exactamente la solución de alta calidad que fue validada y genero estrategias post lanzamiento para una mejora continua.</p>
                        </article>

                    </div>
                </div>
            </div>

        </section>
        <!-- END: Methodology -->
```

- [ ] **Step 2: Agregar los estilos base + tablet a `css/about.css`**

Agregar al final de `css/about.css`:

```css

/* ============================================
   ORGANISMO: Methodology — Sección "Metodología"
   ============================================ */

.methodology {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    padding: 24px;
    background-color: var(--color-primary);
}

.methodology__header {
    flex-shrink: 0;
}

.methodology__mask {
    width: 100%;
}

.methodology__track {
    width: 100%;
}

.methodology__grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}

.methodology-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    background-color: var(--color-bg);
    border: 1px solid var(--color-glass-border);
    border-radius: 24px;
}

.methodology-card__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
}

.methodology-card__number {
    margin: 0;
    color: var(--color-accent);
}

.methodology-card__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    border: 1px solid var(--color-glass-border);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    -webkit-backdrop-filter: var(--glass-backdrop);
    color: var(--color-accent);
    font-size: 1.25rem;
}

.methodology-card__title {
    margin: 0;
    color: var(--color-secondary);
}

.methodology-card__description {
    margin: 0;
    color: var(--color-text-secondary);
}

/* ============================================
   min-width: 700px — Tablet
   ============================================ */

@media (min-width: 700px) {

    .methodology {
        gap: 48px;
        padding: 40px;
    }

    .methodology-card {
        padding: 32px;
    }

}

/* ============================================
   min-width: 700px + max-width: 1199px + landscape — Tablet
   landscape: 3 columnas, igual que desktop (about-responsive.css)
   ============================================ */

@media (min-width: 700px) and (max-width: 1199px) and (orientation: landscape) {

    .methodology__grid {
        flex-direction: row;
    }

    .methodology-card {
        flex: 1 1 0;
        min-width: 0;
    }

}
```

- [ ] **Step 3: Agregar el grid de 3 columnas de desktop a `css/about-responsive.css`**

Dentro del `@media (min-width: 1200px) { ... }` de `css/about-responsive.css`, agregar:

```css

    /* ============================================
       Methodology — 3 columnas en fila
       ============================================ */
    .methodology {
        padding: 64px;
        max-width: 1440px;
        margin: 0 auto;
    }

    .methodology__grid {
        flex-direction: row;
        gap: 32px;
    }

    .methodology-card {
        flex: 1 1 0;
        min-width: 0;
        padding: 40px;
    }
```

- [ ] **Step 4: Verificación manual (usuario)**

Con el server local corriendo, recargar `http://localhost:8080/sobre-mi.html`:
1. Debajo de "Sobre mí" aparece "Metodología": label `[ Metodología ]`, título "Cómo trabajo", y las 3 cards (números `01`/`02`/`03` en verde, ícono circular arriba a la derecha de cada card — lupa, `</>`, cohete — título en negrita, descripción).
2. Mobile y tablet portrait (probar en una ventana angosta y alta, o con el emulador de dispositivo del navegador en portrait): las 3 cards apiladas en 1 columna, a todo el ancho.
3. Tablet landscape (ventana ancha y baja entre ~700px y ~1199px) y desktop (≥1200px): las 3 cards en una sola fila, ancho igual entre ellas.
4. Todo el texto de las cards es legible, sin recortes (todavía sin pin — es esperado, Task 4 lo agrega si hiciera falta).

El commit de esta tarea lo hace el subagente implementador dentro del worktree, como parte del flujo estándar de subagent-driven-development (ver Global Constraints).

---

### Task 4: Mecanismo de pin — `pinned-overflow-section.js` + altura fija 100vh

**Files:**
- Create: `js/modules/animations/pinned-overflow-section.js`
- Modify: `sobre-mi.html`
- Modify: `css/about.css`

**Interfaces:**
- Consumes: `.about-bio` / `.about-bio__mask` / `.about-bio__track` (Task 2) y `.methodology` / `.methodology__mask` / `.methodology__track` (Task 3).
- Produces: `export function initPinnedOverflowSections()` — sin parámetros, sin retorno. Se invoca una vez desde el `<script type="module">` inline de `sobre-mi.html`, en `window.load`.

- [ ] **Step 1: Crear `js/modules/animations/pinned-overflow-section.js`**

```js
'use strict';

// ============================================
// PINNED OVERFLOW SECTION — genérico
//
// Para secciones de alto fijo (100svh) cuyo contenido interno puede
// desbordar en viewports angostos/bajos. Usado en sobre-mi.html para
// "Sobre mí" (.about-bio) y "Metodología" (.methodology): cada
// sección tiene un header estático y un par máscara/track que puede
// no caber completo — a diferencia de .cs-contexto en
// caso-asdeporte.html (pin exclusivo de desktop), acá corre en TODO
// viewport, porque cada sección de esta página debe ocupar
// exactamente el 100% del alto sin importar el dispositivo.
//
// Si el track ya cabe dentro de su máscara (ej. Metodología en
// desktop con las 3 cards en una sola fila), no se crea ningún
// ScrollTrigger — la sección se comporta como una sección fija
// normal, sin pin.
// ============================================

const CONFIGS = [
    { section: '.about-bio', mask: '.about-bio__mask', track: '.about-bio__track' },
    { section: '.methodology', mask: '.methodology__mask', track: '.methodology__track' },
];

export function initPinnedOverflowSections() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    let activeTriggers = [];

    function teardown() {
        activeTriggers.forEach((st) => st.kill());
        activeTriggers = [];
    }

    function setup() {
        teardown();

        CONFIGS.forEach(({ section, mask, track }) => {
            const sectionEl = document.querySelector(section);
            const maskEl = document.querySelector(mask);
            const trackEl = document.querySelector(track);
            if (!sectionEl || !maskEl || !trackEl) return;

            // Reset antes de medir — un resize puede correr esto con un
            // translateY viejo todavía aplicado, lo que corrompería
            // scrollHeight/clientHeight.
            gsap.set(trackEl, { clearProps: 'transform' });

            const overflow = trackEl.scrollHeight - maskEl.clientHeight;
            if (overflow <= 0) return;

            // html { scroll-behavior: smooth } (reset.css) rompe la medición
            // interna de ScrollTrigger al crear/refrescar un pin en
            // Chrome/Android (Blink) — mismo workaround que
            // decision-mc-pin.js (ver createPin() ahí).
            const htmlEl = document.documentElement;
            const prevScrollBehavior = htmlEl.style.scrollBehavior;
            htmlEl.style.scrollBehavior = 'auto';

            const tween = gsap.to(trackEl, { y: -overflow, ease: 'none' });

            const st = ScrollTrigger.create({
                trigger: sectionEl,
                start: 'top top',
                end: () => '+=' + overflow,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                animation: tween,
                invalidateOnRefresh: true,
            });
            activeTriggers.push(st);

            window.setTimeout(() => {
                htmlEl.style.scrollBehavior = prevScrollBehavior;
            }, 500);
        });

        ScrollTrigger.refresh();
    }

    setup();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(setup, 250);
    });
}
```

- [ ] **Step 2: Agregar la altura fija 100svh + overflow hidden a `css/about.css`**

En `css/about.css`, modificar la regla `.about-bio` agregada en Task 2:

De:

```css
.about-bio {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    padding: 24px;
    padding-top: calc(24px + 64px);
    background-color: var(--color-primary);
}
```

A:

```css
.about-bio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: 100svh;
    padding: 24px;
    padding-top: calc(24px + 64px);
    background-color: var(--color-primary);
    overflow: hidden;
}

@supports not (height: 100svh) {
    .about-bio {
        height: 100vh;
    }
}
```

Y modificar `.about-bio__mask`:

De:

```css
.about-bio__mask {
    width: 100%;
}
```

A:

```css
.about-bio__mask {
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    position: relative;
}
```

Y agregar `will-change` a `.about-bio__track` (dejar el resto de la regla igual):

De:

```css
.about-bio__track {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
```

A:

```css
.about-bio__track {
    display: flex;
    flex-direction: column;
    gap: 20px;
    will-change: transform;
}
```

Ahora la misma restricción para `.methodology` (agregada en Task 3). De:

```css
.methodology {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    padding: 24px;
    background-color: var(--color-primary);
}
```

A:

```css
.methodology {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: 100svh;
    padding: 24px;
    background-color: var(--color-primary);
    overflow: hidden;
}

@supports not (height: 100svh) {
    .methodology {
        height: 100vh;
    }
}
```

Y modificar `.methodology__mask`:

De:

```css
.methodology__mask {
    width: 100%;
}
```

A:

```css
.methodology__mask {
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    position: relative;
}
```

Y agregar `will-change` a `.methodology__track`. De:

```css
.methodology__track {
    width: 100%;
}
```

A:

```css
.methodology__track {
    width: 100%;
    will-change: transform;
}
```

- [ ] **Step 3: Enganchar el módulo en `sobre-mi.html`**

En `sobre-mi.html`, después del bloque:

```html
    <!-- Fractal Aurora — fondo .cta-section (independiente de main.js) -->
    <script type="module">
        import { initFractalBackground } from './js/modules/animations/fractal.js';
        if (document.readyState === 'complete') {
            initFractalBackground();
        } else {
            window.addEventListener('load', initFractalBackground);
        }
    </script>
```

agregar:

```html

    <!-- Pin de "Sobre mí" y "Metodología" cuando su contenido desborda
         los 100svh de la sección (independiente de main.js, mismo
         patrón que fractal.js arriba) -->
    <script type="module">
        import { initPinnedOverflowSections } from './js/modules/animations/pinned-overflow-section.js';
        if (document.readyState === 'complete') {
            initPinnedOverflowSections();
        } else {
            window.addEventListener('load', initPinnedOverflowSections);
        }
    </script>
```

- [ ] **Step 4: Verificar que no queden referencias rotas**

Correr: `grep -n "initPinnedOverflowSections\|about-bio__mask\|methodology__mask" sobre-mi.html js/modules/animations/pinned-overflow-section.js css/about.css`
Esperado: `initPinnedOverflowSections` aparece 1 vez como `export function` en el `.js` y 2 veces en `sobre-mi.html` (el `import` y la llamada); `about-bio__mask` y `methodology__mask` aparecen cada uno en `sobre-mi.html` (HTML), en `css/about.css` (2 reglas cada uno: la del Task 2/3 ya modificada) y en el `CONFIGS` del `.js`.

- [ ] **Step 5: Verificación manual (usuario)**

Con el server local corriendo, recargar `http://localhost:8080/sobre-mi.html` (hard refresh para descartar caché de CSS/JS):
1. **Mobile** (ventana angosta, <700px, o el emulador de dispositivo del navegador): la sección "Sobre mí" ocupa exactamente el alto de la pantalla — el header no se mueve, y al seguir haciendo scroll dentro de esa pantalla el párrafo se desliza hacia arriba hasta mostrar completo el último párrafo ("13 años después..."); al llegar al final, el scroll continúa normal y pasa a "Metodología", que también ocupa el alto completo de la pantalla, con las 3 cards deslizándose una tras otra de la misma manera.
2. **Tablet portrait**: mismo comportamiento que mobile (cards y párrafo con scroll interno pineado).
3. **Tablet landscape** (~700–1199px de ancho, orientación horizontal): "Metodología" muestra sus 3 cards en una fila — si ya caben en la pantalla sin desbordar, esa sección **no** pinea (se comporta como una sección fija normal); "Sobre mí" sigue pineando si el párrafo no cabe.
4. **Desktop** (≥1200px): "Sobre mí" en 2 columnas y "Metodología" en 3 columnas — si el contenido de cada una cabe en el alto de pantalla del monitor usado para probar, ninguna pinea; si la ventana es baja (poca altura), sí puede pinear — en ambos casos no debe haber contenido cortado ni saltos bruscos.
5. Con `prefers-reduced-motion: reduce` activo en el sistema operativo: ambas secciones muestran su contenido completo de una sola vez, sin pin ni scroll interno (puede quedar más alto que 100vh en ese caso — es el comportamiento esperado y seguro para reduced-motion).
6. Abrir la consola del navegador: no debe haber errores de JS al cargar ni al hacer scroll por las 2 secciones nuevas.
7. Repetir el punto 1 con el tema claro activado (toggle del header) — mismo comportamiento, solo cambian los colores.

Si algo no coincide con lo descrito, reportar en qué breakpoint/dispositivo y qué se vio en su lugar antes de seguir.

El commit de esta tarea lo hace el subagente implementador dentro del worktree, como parte del flujo estándar de subagent-driven-development (ver Global Constraints).

---

## Self-Review

**Spec coverage:**
- Setup de archivos (`sobre-mi.html`, `css/about.css`, `css/about-responsive.css`) → Task 1.
- Sección 1 (hero invertido) → Task 1 (HTML + CSS mirror).
- Sección 2 ("Sobre mí") → Task 2.
- Sección 3 ("Metodología") → Task 3.
- Secciones 4/5/6 + footer (copia literal) → Task 1.
- Mecanismo de pin/overflow → Task 4.
- SEO/meta → Task 1, Step 3 (head completo).
- Constraints globales (commit solo en el worktree aislado, no push, no DevTools, mobile-first, sin clases nuevas de tipografía/color) → sección "Global Constraints" + reflejadas en cada tarea.

**Placeholder scan:** sin `TBD`/`TODO`/"implementar después" en ningún step — el único placeholder es el título "Lorem ipsum dolor sit amet consectetur.", que es un requisito explícito del spec (el usuario lo reemplaza más adelante), no un placeholder de este plan.

**Type consistency:** `initPinnedOverflowSections()` se define sin parámetros en Task 4 Step 1 y se llama sin parámetros en Task 4 Step 3 — consistente. Los selectores `.about-bio`/`.about-bio__mask`/`.about-bio__track` (Task 2) y `.methodology`/`.methodology__mask`/`.methodology__track` (Task 3) son exactamente los que consume `CONFIGS` en Task 4 Step 1 — mismos nombres, sin variantes.
