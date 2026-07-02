# Spec: Clonar subsecciones faltantes de Decisión 1 → Decisión 2

**Fecha:** 2026-07-01  
**Archivo principal:** `caso-asdeporte.html`, `js/caso-asdeporte.js`, `css/decisiones-responsive.css`

## Contexto

Decisión 2 tiene implementadas: Cortina, Expansión, El Problema.  
Faltan: La Decisión (Gate B + Gate D) y El Razonamiento (Gate 2).  
El clon es exacto — mismo contenido placeholder, misma lógica de animación. El usuario reemplazará el contenido manualmente después.

## Cambios HTML (`caso-asdeporte.html`)

### Pin spacers (bloque líneas 319–321)
Añadir después de `cs-pin-spacer--decision-2-problema`:
```html
<div class="cs-pin-spacer cs-pin-spacer--decision-2-ladecision"   data-phase="decision-2-ladecision"></div>
<div class="cs-pin-spacer cs-pin-spacer--decision-2-razonamiento" data-phase="decision-2-razonamiento"></div>
```

### Secciones de contenido (antes de `</main>`, después de `cs-problema[data-dec="2"]`)

1. **`cs-decision-mc[data-dec="2"]`** — clon exacto de `[data-dec="1"]`:
   - Mismo title, ring, media/img, text-wrap/text
   - Atributo `data-dec="2"`, `aria-label` actualizado

2. **`cs-razonamiento[data-dec="2"]`** — clon exacto de `[data-dec="1"]`:
   - Mismas 3 métricas (`data-screen="1/2/3"`)
   - Mismos 3 descriptores en el rail
   - Misma conclusión (body + frase final)
   - Atributo `data-dec="2"`, `aria-label` actualizado

## Cambios CSS (`css/decisiones-responsive.css`)

Añadir dos reglas al bloque de pin spacers:
```css
.cs-pin-spacer--decision-2-ladecision  { height: 100vh; }
.cs-pin-spacer--decision-2-razonamiento { height: 100vh; }
```

No se necesita más CSS: las clases base (`cs-decision-mc`, `cs-razonamiento`, etc.) no están scopeadas a `[data-dec="1"]`.

## Cambios JS (`js/caso-asdeporte.js`)

Dos bloques al final del archivo (después del cierre de El Problema 2, línea ~2614).

### Bloque A — Gate B D2 + Gate D D2

Clon de líneas ~1305–1553. Renombres:
- `problemaST` → `problemaST2` (captura `cs-pin-spacer--decision-2-problema`)
- `decisionImg/Media/Ring/Text/TextWrap` → sufijo `2`
- `ORIGINAL_TEXT` → `ORIGINAL_TEXT2`
- `decisionTextLines` → `decisionTextLines2`
- `splitDecisionText` → `splitDecisionText2`
- `resizeTimer` → `resizeTimer2`
- Trigger: `cs-pin-spacer--decision-2-ladecision`
- Start: `problemaST2.end`
- Selectores `.cs-problema[data-dec="1"]` → `[data-dec="2"]`
- Selectores `.cs-decision-mc[data-dec="1"]` → `[data-dec="2"]`
- RELEVO (progress 0.5→1.0): trae `cs-razonamiento[data-dec="2"]` desde abajo

### Bloque B — Gate 2 D2 / Razonamiento 2

Clon de líneas ~1555–2289. Renombres:
- `ladeciST` → `ladeciST2` (captura `cs-pin-spacer--decision-2-ladecision`)
- `razon*` → `razon2*` para todos los elementos del razonamiento
- `_razonDesc1/2/3` → `_razon2Desc1/2/3`
- `_razonVh` → `_razon2Vh`
- `_recorridoFaseTotalPx` → `_recorrido2FaseTotalPx`
- `PIN_LENGTH_VH` local (dentro del closure del ST)
- `gate4Initialized` (razonamiento) → `gate4Initialized_razon2`
- `gate5Initialized` → `gate5Initialized_razon2`
- Trigger: `cs-pin-spacer--decision-2-razonamiento`
- Start: `ladeciST2.end`
- Todos los selectores `[data-dec="1"]` → `[data-dec="2"]`

**Diferencia con D1:** `razonFinal2` no tiene exit animation (no existe cortina-3 todavía). La frase final de D2 permanece visible al terminar el Razonamiento 2.

## Orden de ejecución

Los bloques deben añadirse en este orden para que las capturas de ST funcionen:
1. Gate B D2 (necesita `problemaST2` ya creado)
2. Gate 2 D2 (necesita `ladeciST2` ya creado)

## No está en scope

- Contenido real de Decisión 2 (métricas, textos, imagen)
- Decisión 3
- Exit animation de `razonFinal2`
