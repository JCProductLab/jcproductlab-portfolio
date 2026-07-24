# Scroll muerto al final de caso-asdeporte.html — Diagnóstico y decisión pendiente

> **Estado: PAUSADO.** Este documento NO es un plan aprobado para ejecutar — es
> el diagnóstico verificado + una decisión de alcance que el usuario pidió
> dejar para después. No implementar nada de aquí sin retomar la
> conversación y obtener la decisión de alcance (ver "Decisión pendiente"
> abajo).

## Contexto — cómo llegamos aquí

El usuario reportó que, en `caso-asdeporte.html` (Desktop, ≥1200px), después de
que la última sección de la página (`.rs-cierre`, el CTA final de contacto)
termina de animarse y queda "anclada" (ya no se mueve nada visualmente), el
navegador **sigue permitiendo hacer scroll** más allá de ese punto. No pasa
nada visible, pero:

- El usuario no sabe si hay más contenido o si la página está rota.
- Si luego hace scroll hacia arriba para volver a una sección anterior,
  tiene que atravesar ese tramo "muerto" de más — mala UX.

Pidió explícitamente: analizar y planificar la mejor solución profesional
**antes** de implementar nada, y entender primero por qué pasa.

## Diagnóstico — causa raíz (verificado en vivo, no es teoría)

Se lanzó un agente Explore que levantó la página real en un servidor local y
la inspeccionó en Chrome DevTools tras que GSAP terminara de inicializar
(`ScrollTrigger.getAll().length === 25`). Hallazgo confirmado con inline
styles reales, no solo lectura de código.

**No es un bug exclusivo de `.rs-cierre` — es un patrón sistémico en las 25
secciones animadas por scroll de toda la página** (apertura, métrica, shift,
contexto, decisiones 1/2/3, y las 5 fases `rs-*`: mosaico, métricas,
usuarios, testimonio, cierre).

### El mecanismo del bug

Cada sección usa un div vacío ("pin-spacer") como `trigger` de un
`ScrollTrigger.create({ pin: true, pinSpacing: true, ... })`. Ese div tiene
una altura fija en CSS (ej. `.cs-pin-spacer--rs-cierre { height: 500vh; }`
en `css/resultado-responsive.css`) que **coincide exactamente** con la
duración de scroll que el propio `ScrollTrigger` calcula en su `end`
(ej. `end: () => '+=' + (window.innerHeight * 5)` en `js/resultado.js:1395`).

GSAP, al pinear ese div, inserta un wrapper nuevo que **suma** la altura
natural CSS del div + el padding que necesita para cubrir la duración
`end - start` del pin. No reemplaza una por la otra — las suma. Resultado:
cada sección reserva el **doble** del scroll físico que realmente necesita.

Medido en las 5 secciones de la fase final (`js/resultado.js`):

| Sección | Alto natural (CSS) | Duración real (ST) | Wrapper total (GSAP) | Ratio |
|---|---|---|---|---|
| rs-mosaico | 3174.5px (350vh) | 3175px | 6350px | 2.00× |
| rs-metricas | 2902.4px (320vh) | 2902px | 5804px | 2.00× |
| rs-usuarios | 2721px (300vh) | 2721px | 5442px | 2.00× |
| rs-testimonio | 3628px (400vh) | 3628px | 7256px | 2.00× |
| rs-cierre | 4535px (500vh) | 4535px | 9070px | 2.00× |

(El mismo ratio 2.00× se confirmó también en apertura, métrica, shift,
contexto y decisiones 1/2/3 — 25 triggers en total.)

### Por qué solo se nota al final

Los 25 `ScrollTrigger.create` forman una cadena continua
(`start: () => prevST.end`) sobre un eje virtual de 0 a **79,784px** — toda
la animación de la página cabe ahí. Pero el documento real, por el
doble-conteo acumulado, mide **117,255px**
(`document.documentElement.scrollHeight`, confirmado con
`ScrollTrigger.maxScroll(window) = 116,348`).

Ese sobrante (**37,471px, ~41 pantallas**) es invisible en todas las
secciones intermedias porque, gracias a `pin:true` + `position:fixed`, lo
que se ve en pantalla en cada instante lo decide el eje virtual
(start/end), no la posición física real del wrapper — el usuario nunca
"ve" el desfase mientras haya una sección siguiente pineada tapando la
pantalla. Al llegar a `.rs-cierre` (la última), ya no hay nada que lo
cubra, y el remanente se manifiesta como scroll vacío.

### Ya existe un precedente de este mismo fix, sin generalizar

`css/decisiones-responsive.css:45-51`:
```css
/* Altura del pin-spacer de la cortina Decisión 1.
   6.5vh = el pin dura ~6.5vh de scroll (antes 9.17vh / 100vh).
   Acortado para eliminar scroll muerto: la cascada ahora empieza
   a progress 0.25 y termina cerca de 0.90, dejando un respiro
   mínimo al final. Ver caso-asdeporte.js:1042-1052 para las
   nuevas ventanas de cascada. */
.cs-pin-spacer--decision-1 { height: 6.5vh; }
```
Con referencia cruzada en `js/caso-asdeporte.js:1039-1043`. Es decir: el
propio equipo/autor ya diagnosticó y corrigió este problema exacto — pero
solo para `decision-1`. Nunca se aplicó a `decision-1-expansion/-problema/
-ladecision/-razonamiento`, `decision-2-*`, `decision-3-*`, ni a ninguna de
las 5 secciones `rs-*`.

`calculateShiftLayout()` (`js/caso-asdeporte.js:630-660`) **no es** un
mecanismo de compensación de este bug — ajusta la altura del spacer de
Shift según el overflow real de `.cs-contexto` (para el scroll horizontal),
pero el valor que calcula se usa igual como alto natural Y como duración
del pin, así que Shift sufre el mismo doble-conteo (natural=3307px,
duration=3307px, wrapper=6614px, ratio 2.00×, confirmado).

### Descartado como causa (verificado, no es esto)

- **Modales después de `.rs-cierre`** (`#modalMiRol`, `#modalProceso`,
  `#modalQueAprendi`, `caso-asdeporte.html:1081,1108,1145`): todos
  `position:fixed` en su CSS base (`css/modal-rol-proceso.css:6-19`) — fuera
  del flujo del documento en reposo, no aportan altura extra.
- **`body`/`html` con altura forzada**: no existe ningún
  `body.style.height`, `documentElement.style.height`, ni `min-height` en
  `html`/`body` en todo el código. Los 117,255px de `scrollHeight` están
  100% explicados por la suma de los wrappers pin-spacer.
- **Otro `ScrollTrigger.create` después del de `.cs-pin-spacer--rs-cierre`**:
  no existe — es el último de los 25, confirmado por grep y en runtime
  (`ScrollTrigger.getAll()[24]`, el `end` más alto de la cadena: 79,784px).

## El fix correcto (una vez que se decida el alcance)

El mecanismo: GSAP suma `wrapper = natural_CSS_height + (end - start)`.
Queremos `wrapper == (end - start)` exactamente (sin sobrante), lo cual
implica que el alto natural CSS del pin-spacer debería tender a **0** (o a
un valor mínimo simbólico), no a la duración del pin. La duración real ya
está 100% controlada por el `end` calculado en JS
(`window.innerHeight * N`) — el `height: Nvh` en CSS es redundante y
dañino en este patrón, probablemente agregado como fallback visual
"antes de que JS cargue" sin que nadie notara el efecto colateral en GSAP.

No se investigó a fondo cuál sería el valor mínimo seguro para cada
pin-spacer (podría no ser exactamente 0 si hace falta algo de alto para
que el elemento sea un trigger válido, o por el fallback pre-JS) — eso
queda pendiente de definir en la siguiente sesión, sección por sección,
como hizo el propio autor con `decision-1` (6.5vh, ajustado a ojo/prueba,
no simplemente 0).

## Decisión pendiente (preguntar al usuario al retomar)

Dos alcances posibles, con tradeoffs reales:

**Opción A — Solo la última sección (`rs-cierre`)**
- Arreglo acotado: solo su pin-spacer.
- Elimina el scroll vacío al final (el problema concreto reportado).
- No toca el resto de la página — el mismo desperdicio (invisible) queda
  intacto en las otras 24 secciones.
- Menor riesgo, menor alcance de verificación.

**Opción B — Las 25 secciones (fix sistémico completo)**
- Arreglo de raíz en toda la página.
- Más "profesional"/consistente — corrige el patrón donde sea que
  aparezca, no solo donde se nota.
- Cambio de mayor alcance: **toda la página requerirá notablemente menos
  scroll físico** para recorrerse completa (no cambia el timing/coreografía
  de ninguna animación — todo sigue gobernado por `self.progress`,
  0→1 — solo cuánto hay que scrollear físicamente para verlas).
- Más archivos tocados (`css/resultado-responsive.css`,
  `css/decisiones-responsive.css`, y los pin-spacers en
  `js/caso-asdeporte.js`/`js/resultado.js` que dependen de alturas
  calculadas dinámicamente como `calculateShiftLayout()`), más superficie
  para verificar manualmente en navegador.

El usuario no eligió aún — pidió pausar y documentar para decidir mañana.

## Archivos involucrados (para la siguiente sesión)

- `css/resultado-responsive.css` — alturas de `.cs-pin-spacer--rs-mosaico`,
  `--rs-metricas` (verificar nombre exacto de clase), `--rs-usuarios`,
  `--rs-testimonio`, `--rs-cierre`.
- `css/decisiones-responsive.css` — alturas de
  `.cs-pin-spacer--decision-1/-2/-3` y sus variantes
  (`-expansion/-problema/-ladecision/-razonamiento`), más el precedente ya
  arreglado (`decision-1`, líneas 45-51) como referencia del patrón a
  replicar.
- `js/caso-asdeporte.js` — `calculateShiftLayout()` (líneas 630-660) y el
  `ScrollTrigger` de Shift que depende de su resultado.
- `js/resultado.js` — los 5 `ScrollTrigger.create` de las fases `rs-*`
  (líneas ~aprox., ver el `end: () => '+=' + (window.innerHeight * N)` de
  cada uno).

## Verificación (una vez implementado, cualquiera sea el alcance elegido)

No hay test suite — verificación manual en navegador:

1. Servir el proyecto (`npx serve .` o `python3 -m http.server 8080`),
   abrir `caso-asdeporte.html` en ventana ≥1200px.
2. Scrollear toda la página de principio a fin, confirmando que **ninguna**
   animación cambia de timing/velocidad relativa (deben verse exactamente
   igual que antes, solo con menos scroll físico requerido en las
   secciones tocadas).
3. Llegar hasta el final de `.rs-cierre` y confirmar que el scroll se
   detiene ahí — cero scroll adicional posible después de que la sección
   queda anclada.
4. Scrollear hacia atrás desde el final y confirmar que no hay saltos ni
   comportamiento errático en los `onLeaveBack` de cada `ScrollTrigger`
   (varias secciones tienen lógica de reset en reversa, ej.
   `resetMetrica()`, `resetContextoArrow()` en `caso-asdeporte.js`).
5. Si se eligió la Opción B: repetir el punto 2 con especial atención a
   las transiciones ENTRE secciones (los `start`/`end` encadenados deben
   seguir siendo contiguos — si alguno se desincroniza, aparecería como un
   salto brusco o un hueco en blanco entre dos fases).

## Prompt para retomar mañana

```
Retomemos el diagnóstico del scroll muerto en caso-asdeporte.html que dejamos
documentado en docs/superpowers/plans/2026-07-23-scroll-muerto-pin-spacing.md.
Léelo completo primero. Ya está confirmada la causa raíz (no hace falta
re-investigar) — lo que falta es que te diga el alcance que elijo (opción A:
solo rs-cierre, u opción B: las 25 secciones) y que planifiques la
implementación concreta (qué altura exacta poner en cada pin-spacer, no
necesariamente 0) antes de tocar código.
```
