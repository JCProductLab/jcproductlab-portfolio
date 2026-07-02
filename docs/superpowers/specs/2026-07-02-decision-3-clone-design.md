# Spec: Clonar Decisión 2 → Decisión 3 (completa)

**Fecha:** 2026-07-02
**Archivo principal:** `caso-asdeporte.html`, `js/caso-asdeporte.js`, `css/decisiones-responsive.css`

## Contexto

Decisión 2 está completa: Cortina, Expansión, El Problema, La Decisión (Gate B+D) y El Razonamiento (Gate 2). Decisión 3 no existe todavía — hay que clonar las 5 subsecciones completas (a diferencia del clon D1→D2, que solo necesitó 2 de 5 porque las otras 3 ya existían).

El clon es exacto — mismo contenido placeholder, misma lógica de animación. El usuario reemplazará el contenido manualmente después.

**Diferencia estructural clave con el clon D1→D2:** la cortina de Decisión 2 (`cs-decision[data-dec="2"]`) es responsable de animar la SALIDA de la frase final del Razonamiento anterior (`razonFinal`, D1) durante su propio scroll (patrón "OPTION-1: acoplamiento controlado", `js/caso-asdeporte.js:2336-2430`). La cortina de Decisión 3 debe replicar ese mismo acoplamiento, pero sacando `razon2Final` (la frase final del Razonamiento 2, ya existente). Este bloque NO estaba en scope del clon D1→D2 porque razonFinal2 no tenía todavía una cortina-3 que lo sacara.

## Cambios HTML (`caso-asdeporte.html`)

### Pin spacers (después de `cs-pin-spacer--decision-2-razonamiento`, línea 323)
```html
<div class="cs-pin-spacer cs-pin-spacer--decision-3"             data-phase="decision-3"></div>
<div class="cs-pin-spacer cs-pin-spacer--decision-3-expansion"   data-phase="decision-3-expansion"></div>
<div class="cs-pin-spacer cs-pin-spacer--decision-3-problema"    data-phase="decision-3-problema"></div>
<div class="cs-pin-spacer cs-pin-spacer--decision-3-ladecision"   data-phase="decision-3-ladecision"></div>
<div class="cs-pin-spacer cs-pin-spacer--decision-3-razonamiento" data-phase="decision-3-razonamiento"></div>
```

### Secciones de contenido (antes de `</main>`, después de `cs-razonamiento[data-dec="2"]`)

1. **`cs-decision[data-dec="3"]`** — clon exacto de `[data-dec="2"]` (cortina + media, misma estructura `__bg`/`__content`/`__media`). `aria-label="Decisión 3 del caso"`.
2. **`cs-problema[data-dec="3"]`** — clon exacto de `[data-dec="2"]` (título + grid 2×2 de 4 cards, mismo texto placeholder). `aria-label="El problema de Decisión 3"`.
3. **`cs-decision-mc[data-dec="3"]`** — clon exacto de `[data-dec="2"]`. `aria-label="La decisión 3 del caso"`.
4. **`cs-razonamiento[data-dec="3"]`** — clon exacto de `[data-dec="2"]` (3 métricas, 3 descriptores, conclusión). `aria-label="El razonamiento de Decisión 3"`.

No hay sección de "expansión" propia — la expansión reutiliza `cs-decision-mc`... no, reutiliza `decision3Media` (el mismo `<img>` de la cortina, expandido a full-bleed). Igual que en D1/D2.

## Cambios CSS (`css/decisiones-responsive.css`)

### Pin spacers (bloque junto a las reglas de D2, línea ~70)
```css
.cs-pin-spacer--decision-3             { height: 100vh; }
.cs-pin-spacer--decision-3-expansion   { height: 80vh; }
.cs-pin-spacer--decision-3-problema    { height: 100vh; }
.cs-pin-spacer--decision-3-ladecision  { height: 100vh; }
.cs-pin-spacer--decision-3-razonamiento { height: 100vh; }
```

### Override de posición de la cortina-3 (junto a la regla `.cs-decision[data-dec="2"]`, línea ~109)
La cortina-3 vive FUERA del stage igual que la cortina-2 (hermana del Razonamiento en `<main>`). Necesita el mismo override `position:fixed` + `z-index:5`:
```css
.cs-decision[data-dec="3"] {
    position: fixed;
    inset: 0;
    z-index: 5;
}

.cs-decision[data-dec="3"] .cs-decision__content {
    left: 96px;
}
```

### Descriptores de Razonamiento 3 (junto a la regla de D2, línea ~75)
Custom props propias para no pisarse con `--razon2-desc*-top`:
```css
.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="2"] {
    top: var(--razon3-desc2-top, 135.56%);
}
.cs-razonamiento[data-dec="3"] .cs-razonamiento__descriptor[data-screen="3"] {
    top: var(--razon3-desc3-top, 332%);
}
```

No se necesita más CSS: `.cs-problema`, `.cs-decision-mc`, `.cs-razonamiento` (reglas base) no están scopeadas a `[data-dec]` — aplican genéricamente.

## Cambios JS (`js/caso-asdeporte.js`)

Cinco bloques al final del archivo (antes de la llave de cierre `}` final, línea 3002 — después del bloque de Razonamiento 2).

### Bloque 1 — Cortina D3 (clon de Cortina D2, líneas ~2288-2432)

Renombres: sufijo `2`→`3` en todo (`decision2Panel/Label/Title/Media` → `decision3*`, `cortina2ST` no existe aún en este bloque — se crea aquí).

- Ancla: captura `razonamiento2ST` vía `ScrollTrigger.getAll().find()` sobre `cs-pin-spacer--decision-2-razonamiento` (ya creado, está antes en el archivo).
- Trigger: `cs-pin-spacer--decision-3`, `start: () => razonamiento2ST ? razonamiento2ST.end : 0`, `end: '+=' + vh*4.73`.
- Selectores: `.cs-decision[data-dec="3"]` y sus hijos.
- **Bloque de salida de `razon2Final`** (clon del bloque "Salida de razonFinal", líneas 2336-2430): mismo patrón de captura lazy de `x` original vía parseo de `transform` inline (`matrix(...)` o `translate(...)`), mismo desplazamiento `-self.progress * vw * 0.3` y fade `1 - self.progress`. Variables `razonFinalExitOriginalX`/`razonFinalExitCaptured` → `razon2FinalExitOriginalX`/`razon2FinalExitCaptured`. Usa la constante `razon2Final` ya declarada en el bloque de Razonamiento 2 (mismo scope de función, no hace falta re-querySelector).

### Bloque 2 — Expansión D3 (clon de Expansión D2, líneas ~2434-2522)

Renombres: `decision2Media`→`decision3Media`, `decision2Label/Title`→`decision3Label/Title`, `cortina2ST`→`cortina3ST` (captura `cs-pin-spacer--decision-3`), `gate4Initialized2`→`gate4Initialized3`.

- Trigger: `cs-pin-spacer--decision-3-expansion`, `start: () => cortina3ST ? cortina3ST.end : 0`, `end: '+=' + vh*0.8`.

### Bloque 3 — El Problema D3 (clon de El Problema D2, líneas ~2524-2622)

Renombres: `expansion2ST`→`expansion3ST` (captura `cs-pin-spacer--decision-3-expansion`), `problema2Title/Cards`→`problema3*`. Selectores `[data-dec="2"]`→`[data-dec="3"]` para `.cs-decision`, `.cs-problema`, `.cs-decision-mc`.

- Trigger: `cs-pin-spacer--decision-3-problema`, `start: () => expansion3ST ? expansion3ST.end : 0`.

### Bloque 4 — Gate B D3 + Gate D D3 / La Decisión 3 (clon del bloque Gate B D2, líneas ~2622-2789)

Renombres: sufijo `2`→`3` en todo (`problemaST2`→`problemaST3` capturando `cs-pin-spacer--decision-3-problema`, `decisionImg2/Media2/Ring2/Text2/TextWrap2`→sufijo `3`, `ORIGINAL_TEXT2`→`ORIGINAL_TEXT3`, `decisionTextLines2`→`decisionTextLines3`, `splitDecisionText2`→`splitDecisionText3`, `resizeTimer2`→`resizeTimer3`).

- Trigger: `cs-pin-spacer--decision-3-ladecision`, `start: () => problemaST3 ? problemaST3.end : 0`.
- Selectores `[data-dec="2"]`→`[data-dec="3"]`.
- RELEVO (progress 0.5→1.0): trae `cs-razonamiento[data-dec="3"]` desde abajo.

### Bloque 5 — Gate 2 D3 / Razonamiento 3 (clon del bloque Gate 2 D2, líneas ~2791-3000)

Renombres: `ladeciST2`→`ladeciST3` (captura `cs-pin-spacer--decision-3-ladecision`), `razon2*`→`razon3*`, `_r2*`→`_r3*`, `PIN_LENGTH_VH2`→`PIN_LENGTH_VH3`, custom props `--razon3-desc2-top`/`--razon3-desc3-top`.

- Trigger: `cs-pin-spacer--decision-3-razonamiento`, `start: () => ladeciST3 ? ladeciST3.end : 0`.
- Selectores `[data-dec="2"]`→`[data-dec="3"]`.

**Diferencia con D2:** `razon3Final` tampoco tiene exit animation propia en este bloque (no existe cortina-4 todavía). La salida de `razon2Final` vive en el Bloque 1 (Cortina D3), no en el bloque de Razonamiento 2 — mismo patrón que D1: la salida de `razonFinal` (D1) vive en la Cortina D2, no en el Razonamiento 1.

## Orden de ejecución

Los bloques deben añadirse en este orden para que las capturas de ST (`ScrollTrigger.getAll().find()`) funcionen — cada bloque busca el ST del bloque anterior ya creado:
1. Cortina D3 (necesita `razonamiento2ST` ya creado — existe desde antes)
2. Expansión D3 (necesita `cortina3ST` del bloque 1)
3. El Problema D3 (necesita `expansion3ST` del bloque 2)
4. Gate B D3 (necesita `problemaST3` del bloque 3)
5. Gate 2 D3 (necesita `ladeciST3` del bloque 4)

## No está en scope

- Contenido real de Decisión 3 (métricas, textos, imagen)
- Decisión 4 en adelante
- Exit animation de `razon3Final` (se añadirá cuando exista Decisión 4)
