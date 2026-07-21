// ============================================
// CASO ASDEPORTE — RESULTADOS (Fases 1-5)
// Archivo separado de caso-asdeporte.js (que ya supera las 3600 líneas).
// Requiere que caso-asdeporte.js haya corrido antes (mismo documento,
// scripts type="module" + defer se ejecutan en orden de documento) para
// que cs-pin-spacer--decision-3-razonamiento ya tenga su ScrollTrigger.
// ============================================

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // FASE 1 — Mosaico y expansión
    // Toma el relevo de razon3Final (mismo patrón "OPTION-1: acoplamiento
    // controlado" que ya usan las cortinas D2/D3 con la frase anterior).
    // Anclado a razonamiento3ST.end.
    // ============================================

    const razonamiento3ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-3-razonamiento')
    );

    // Closure propio: NO existe la constante razon3Final de caso-asdeporte.js
    // en este scope (archivo separado). Se vuelve a resolver el selector.
    const razon3Final = document.querySelector('.cs-razonamiento[data-dec="3"] .cs-razonamiento__conclusion-final');

    const rsMosaicoSection = document.querySelector('.rs-mosaico');
    const rsIntro          = document.querySelector('.rs-mosaico__intro');

    const rsCards = gsap.utils.toArray('.rs-mosaico__card');

    // Offset de entrada: por-GRUPO (short=col2/4, tall=col1/3/5), NO por
    // card individual y NO una constante fija. Debe alcanzar para que
    // el elemento arranque completamente debajo del viewport (oculto
    // por el overflow:hidden de .rs-mosaico). offsetTop es relativo al
    // ancestro posicionado (.rs-mosaico, que tiene inset:0), así que
    // equivale a "top visual cuando la sección está en reposo (y:0)"
    // sin importar el transform que .rs-mosaico tenga en ese momento.
    //
    // Por qué por-grupo y no por-card: si cada card usa su PROPIO
    // offsetTop, la pareja de col2/4 (top/bottom) recorre distancias
    // distintas en la misma ventana de progreso → viajan a velocidades
    // distintas → se cruzan/superponen durante la transición, aunque
    // en reposo el gap de 32px esté bien. Con un offset COMPARTIDO por
    // grupo, todas las cards de ese grupo reciben el mismo `y` en cada
    // frame — su separación relativa (el gap nativo del grid) queda
    // intacta en todo momento, no solo al llegar.
    const RS_ENTRY_BUFFER = 40;
    let rsEntryOffsetsCaptured = false;
    const rsGroupOffset = { short: 0, tall: 0 };
    let rsIntroEntryOffset = 0;

    // p1 en el que arranca la entrada de las cards. Se calcula (no es
    // una constante adivinada) a partir de en qué punto el texto
    // [ RESULTADO ] + título entra al último tercio de SU PROPIO
    // recorrido en pantalla — el texto avanza primero, y las imágenes
    // solo empiezan a subir cuando el texto ya está saliendo, para que
    // nunca se crucen. 0.20 es el valor por defecto (si no hay intro).
    let rsCardsStartP1 = 0.20;

    const rsCenterCard = document.querySelector('.rs-mosaico__card--center');
    let rsCenterPromoted = false;
    let rsCenterRect = null;

    // Vecinas de la card central: mientras esta crece hacia pantalla
    // completa, col1+col2 (grupo izquierdo) y col4+col5 (grupo derecho)
    // deben EMPUJARSE hacia afuera, no quedarse congeladas cubiertas —
    // ver resultado-a-09 a resultado-a-14. Cada grupo se traslada en
    // bloque (mismo `x` para sus 2 miembros) para conservar su propio
    // gap entre sí, y el "líder" de cada grupo (col2/col4, las
    // vecinas INMEDIATAS de la central) es el que define cuánto: su
    // borde más cercano a la central siempre queda separado por el
    // mismo gap que YA existe en reposo (medido en vivo, no
    // hardcodeado — el gap real depende de --rs-scale).
    const rsCol1 = document.querySelector('.rs-mosaico__card[data-col="1"]');
    const rsCol2Cards = gsap.utils.toArray('.rs-mosaico__card[data-col="2"]');
    const rsCol4Cards = gsap.utils.toArray('.rs-mosaico__card[data-col="4"]');
    const rsCol5 = document.querySelector('.rs-mosaico__card[data-col="5"]');
    let rsPushGapLeft = 0;
    let rsPushGapRight = 0;
    let rsCol2RightNatural = 0;
    let rsCol4LeftNatural = 0;

    // razon3Final llega a este ST YA transformado por el gesto GATE 5 del
    // Razonamiento 3 (scale ~4x + reposicionado al centro del viewport,
    // ver caso-asdeporte.js): no arranca en su posición de lectura. Se
    // captura esa y base UNA VEZ (lazy, mismo patrón que razon2FinalExit
    // en caso-asdeporte.js) para restarle el exit — nunca se resetea a
    // y:0, que rompería la continuidad (con scale ~4x un salto de pocos
    // px de diferencia se ve como un salto enorme/"aparece dos veces").
    let razon3FinalBaseY = 0;
    let razon3FinalBaseCaptured = false;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));
    const vw = () => window.innerWidth;

    // Fuerza un reflow/repintado sincrónico. Mitigación para un glitch de
    // composición GPU de Chrome: la card central pasa por position:fixed
    // + z-index:20 cubriendo casi toda la pantalla (incluidas col2/4) y
    // luego vuelve a su celda del grid — ese tipo de transform grande y
    // sostenido puede dejar una franja de píxeles "fantasma" sin repintar
    // (el layout real es correcto, confirmado con getBoundingClientRect,
    // pero el pixel pintado en pantalla no se actualiza) hasta que algo
    // fuerza un repintado — abrir DevTools lo hace por accidente. Leer
    // offsetHeight fuerza ese repintado sin necesidad de DevTools.
    const forceRepaint = () => { void document.body.offsetHeight; };

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-mosaico',
        start: () => razonamiento3ST ? razonamiento3ST.end : 0,
        end: () => '+=' + (window.innerHeight * 3.5),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p1 = self.progress;

            // ── Salida de razon3Final (0.00 → 0.20) ──
            // translateY puro relativo a su base capturada (x/scale del
            // gesto GATE 5 se preservan intactos: no se incluyen en este
            // gsap.set, así que gsap no los toca). SIN tocar opacity
            // (restricción del doc).
            const exitP = clamp01(p1 / 0.20);
            if (razon3Final) {
                if (!razon3FinalBaseCaptured) {
                    const inlineStyle = razon3Final.style.transform;
                    let ty = 0;
                    const matrixMatch = inlineStyle.match(/matrix\(([^)]+)\)/);
                    if (matrixMatch) {
                        ty = parseFloat(matrixMatch[1].split(',')[5]);
                    } else {
                        const translateMatch = inlineStyle.match(/translate\(\s*[-\d.]+p?x?,\s*([-\d.]+)/);
                        if (translateMatch) {
                            ty = parseFloat(translateMatch[1]);
                        }
                    }
                    razon3FinalBaseY = ty;
                    razon3FinalBaseCaptured = true;
                }
                gsap.set(razon3Final, { y: razon3FinalBaseY - exitP * vh });
            }

            // ── Revelado del contenedor .rs-mosaico (0.00 → 0.20) ──
            // Mismo rango que la salida de razon3Final: patrón de "relevo"
            // (entra desde y:100vh mientras el saliente sale hacia -vh).
            if (rsMosaicoSection) {
                gsap.set(rsMosaicoSection, { y: (1 - exitP) * vh });
            }

            // ── Captura lazy de offsets de entrada (una sola vez) ──
            // Debe ocurrir DESPUÉS de que .rs-mosaico llegó a y:0 (arriba),
            // porque offsetTop es relativo a .rs-mosaico y no depende de
            // su transform — pero solo tiene sentido medir una vez que el
            // layout real (grid ya resuelto) está disponible.
            if (!rsEntryOffsetsCaptured) {
                let rsIntroRestTop = 0;
                if (rsIntro) {
                    rsIntroRestTop = rsIntro.offsetTop;
                    rsIntroEntryOffset = vh - rsIntroRestTop + RS_ENTRY_BUFFER;

                    // ── Cuándo arrancan las cards (calculado, no adivinado) ──
                    // El texto recorre linealmente (mismo travelP de más
                    // abajo) desde y=rsIntroEntryOffset (abajo del viewport)
                    // hasta y=-vh (afuera por arriba). Se resuelve esa recta
                    // para encontrar el travelP en el que el borde superior
                    // del texto (rsIntroRestTop + y) cruza vh/3 — el último
                    // tercio de la pantalla, en dirección de salida (el
                    // texto sube, así que "último tercio" = el de arriba).
                    // Ese punto, mapeado de vuelta a p1, es el arranque de
                    // las cards: el texto avanza primero y las imágenes
                    // solo empiezan a subir cuando el texto ya está saliendo.
                    const introTravelDistance = rsIntroEntryOffset + vh;
                    const yAtTopThird = (vh / 3) - rsIntroRestTop;
                    const travelPAtTopThird = clamp01(
                        (rsIntroEntryOffset - yAtTopThird) / introTravelDistance
                    );
                    rsCardsStartP1 = clamp01(0.10 + travelPAtTopThird * 0.60);
                    // Colchón: las cards siempre necesitan un tramo mínimo
                    // de progreso para su propia entrada antes de llegar
                    // asentadas a p1=0.65.
                    rsCardsStartP1 = Math.min(rsCardsStartP1, 0.45);
                }
                // Offset único por grupo: se toma el offsetTop MÁS CHICO
                // (la card más "alta" en pantalla) de cada size — así el
                // offset alcanza para que TODAS las cards de ese grupo
                // arranquen debajo del viewport, no solo la de más abajo.
                let minTallTop = Infinity;
                let minShortTop = Infinity;
                rsCards.forEach((card) => {
                    const top = card.offsetTop;
                    if (card.dataset.size === 'tall') {
                        if (top < minTallTop) minTallTop = top;
                    } else if (top < minShortTop) {
                        minShortTop = top;
                    }
                });
                rsGroupOffset.short = vh - minShortTop + RS_ENTRY_BUFFER;
                // "tall" (col1/3/5) arranca MÁS ABAJO que "short" (col2/4)
                // a propósito (pedido del usuario): en reposo, la card
                // alta queda MÁS ABAJO que el tope de la pareja corta
                // (align-items:center la centra dentro de un espacio más
                // alto que ella), así que su offset "justo" natural
                // (vh - minTallTop) sale MENOR que el de short — lo
                // opuesto de lo que se quiere. En vez de ese mínimo
                // natural, se parte del offset de short y se le suma un
                // extra: así tall arranca desfasada hacia abajo y, al
                // compartir el mismo tramo de progreso (mismo gridEased),
                // termina alcanzando a short — ambos grupos convergen
                // casi alineados al llegar a p1=0.65.
                rsGroupOffset.tall = rsGroupOffset.short + vh * 0.18;
                rsEntryOffsetsCaptured = true;
            }

            // ── Recorrido de [ RESULTADO ] + título (0.10 → 0.70) ──
            // Un solo movimiento CONTINUO: sube desde abajo del viewport y
            // sigue de largo hacia arriba, sin ancla/plateau a mitad de
            // camino. Lineal (ligado 1:1 al scroll) para que no se sienta
            // un freno/parada entre la entrada y la salida.
            if (rsIntro) {
                const travelP = clamp01((p1 - 0.10) / 0.60);
                const y = rsIntroEntryOffset + (-vh - rsIntroEntryOffset) * travelP;
                gsap.set(rsIntro, { y });

                // Fade de salida (0.55 → 0.70): solo opacity, el
                // movimiento ya es continuo arriba.
                if (p1 >= 0.55) {
                    const outP = clamp01((p1 - 0.55) / 0.15);
                    gsap.set(rsIntro, { opacity: 1 - outP });
                }
            }

            // ── Mosaico: entrada desde abajo, parallax diferenciado
            // (rsCardsStartP1 → 0.65) ──
            // El arranque ya NO es un 0.20 fijo: es el punto (calculado
            // arriba) en el que el texto entra a su último tercio de
            // recorrido, para que el texto avance primero y las cards
            // solo empiecen a subir cuando el texto ya se está yendo.
            // Todas las cards de un mismo grupo (short/tall) convergen
            // JUNTAS a offset 0 en p1=0.65, moviéndose siempre a la misma
            // velocidad entre sí (offset compartido, ver captura arriba)
            // — la diferencia de velocidad es SOLO entre grupos (short
            // vs tall), nunca entre cards del mismo grupo. Puro
            // translateY, sin fade: arrancan completamente debajo del
            // viewport.
            const gridP = clamp01((p1 - rsCardsStartP1) / (0.65 - rsCardsStartP1));
            const gridEased = gsap.parseEase('power2.out')(gridP);
            rsCards.forEach((card) => {
                // La card central promovida ya no es parte del grid: evita
                // pelear con el transform del bloque de aislamiento.
                if (card === rsCenterCard && rsCenterPromoted) return;
                const offset = rsGroupOffset[card.dataset.size] || vh;
                gsap.set(card, { y: offset * (1 - gridEased) });
            });

            // ── Aislamiento + escala exponencial de la card central
            // (0.65 → 1.00) ──
            // Arranca EXACTO donde termina la entrada de las cards
            // (gridEased llega a 1 en p1=0.65) — antes había un tramo
            // de "respiro" (0.65→0.80) sin ningún cambio, que se sentía
            // como que la animación se congelaba a mitad de camino. Sin
            // pausa: la central empieza a crecer en el mismo instante
            // en que el mosaico termina de asentarse.
            if (rsCenterCard) {
                if (p1 >= 0.65) {
                    if (!rsCenterPromoted) {
                        // getBoundingClientRect() es relativo al viewport; estas
                        // coordenadas solo son correctas para un elemento
                        // position:fixed porque .rs-mosaico ya está en
                        // translateY(0) en este punto (ver revelado 0.00→0.20
                        // más arriba) — sin ese y:0, el transform del ancestro
                        // rompería el containing block de fixed.
                        rsCenterRect = rsCenterCard.getBoundingClientRect();
                        gsap.set(rsCenterCard, {
                            position: 'fixed',
                            top: rsCenterRect.top,
                            left: rsCenterRect.left,
                            width: rsCenterRect.width,
                            height: rsCenterRect.height,
                            margin: 0,
                            zIndex: 20,
                        });
                        // Gap real ya renderizado entre la central y sus
                        // vecinas inmediatas (col2/col4) — se mide en vivo
                        // (getBoundingClientRect) en vez de asumir 32px,
                        // porque el gap CSS está escalado por --rs-scale
                        // y varía según la pantalla.
                        rsCol2RightNatural = rsCol2Cards[0].getBoundingClientRect().right;
                        rsCol4LeftNatural = rsCol4Cards[0].getBoundingClientRect().left;
                        rsPushGapLeft = rsCenterRect.left - rsCol2RightNatural;
                        rsPushGapRight = rsCol4LeftNatural - (rsCenterRect.left + rsCenterRect.width);
                        rsCenterPromoted = true;
                        forceRepaint();
                    }
                    const scaleP = clamp01((p1 - 0.65) / 0.35);
                    const scaleEased = gsap.parseEase('power2.in')(scaleP);
                    const newTop    = rsCenterRect.top * (1 - scaleEased);
                    const newLeft   = rsCenterRect.left * (1 - scaleEased);
                    const newWidth  = rsCenterRect.width + (vw() - rsCenterRect.width) * scaleEased;
                    const newHeight = rsCenterRect.height + (vh - rsCenterRect.height) * scaleEased;
                    gsap.set(rsCenterCard, {
                        top: newTop,
                        left: newLeft,
                        width: newWidth,
                        height: newHeight,
                        borderRadius: 24 * (1 - scaleEased),
                    });

                    // ── Empuje de las vecinas (col1/2 a la izquierda,
                    // col4/5 a la derecha) ──
                    // El borde de cada grupo más cercano a la central
                    // debe quedar SIEMPRE separado por rsPushGapLeft/Right
                    // (el gap real medido arriba) del borde actual
                    // (creciente) de la central — despejando la
                    // traslación x necesaria desde la posición NATURAL
                    // (sin transform) de cada grupo. En scaleEased=0 esto
                    // da x=0 (ya están a esa distancia por el propio
                    // grid); en scaleEased=1 (central a pantalla
                    // completa) el grupo queda empujado totalmente fuera
                    // del viewport, no solo tapado.
                    const shiftLeft  = newLeft - rsPushGapLeft - rsCol2RightNatural;
                    const shiftRight = (newLeft + newWidth) + rsPushGapRight - rsCol4LeftNatural;
                    if (rsCol1) gsap.set(rsCol1, { x: shiftLeft });
                    rsCol2Cards.forEach((c) => gsap.set(c, { x: shiftLeft }));
                    rsCol4Cards.forEach((c) => gsap.set(c, { x: shiftRight }));
                    if (rsCol5) gsap.set(rsCol5, { x: shiftRight });
                } else if (rsCenterPromoted) {
                    // Reversa: si el usuario sube antes de p1=0.65, se
                    // restaura el layout normal del grid. clearProps (NO
                    // width/height:'100%' fijo): un width/height inline
                    // le gana a la regla CSS aspect-ratio:3/4 que hace
                    // que esta card mida igual que col1/5 — con
                    // clearProps el estilo inline desaparece del todo y
                    // manda de nuevo el aspect-ratio de la clase CSS.
                    gsap.set(rsCenterCard, {
                        clearProps: 'position,top,left,width,height,margin,zIndex,borderRadius',
                    });
                    // Deshace el empuje de las vecinas junto con la
                    // reversa de la central.
                    if (rsCol1) gsap.set(rsCol1, { x: 0 });
                    rsCol2Cards.forEach((c) => gsap.set(c, { x: 0 }));
                    rsCol4Cards.forEach((c) => gsap.set(c, { x: 0 }));
                    if (rsCol5) gsap.set(rsCol5, { x: 0 });
                    rsCenterPromoted = false;
                    rsCenterRect = null;
                    forceRepaint();
                }
            }
        },
        onLeaveBack: () => {
            // NO se resetea razon3Final a y:0: ese valor no tiene relación
            // con su base real (viene del gesto GATE 5 de razonamiento3ST,
            // que retoma el control apenas volvemos a su rango). Solo se
            // invalida la captura para que la próxima entrada a este ST
            // vuelva a medir la y base desde cero.
            razon3FinalBaseCaptured = false;
            if (rsIntro)     { gsap.set(rsIntro, { y: rsIntroEntryOffset || window.innerHeight }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
            rsCards.forEach((card) => {
                const offset = rsGroupOffset[card.dataset.size] || window.innerHeight;
                gsap.set(card, { y: offset });
            });
            if (rsCenterCard) {
                // clearProps por la misma razón que en la rama "reversa"
                // del onUpdate: un width/height:'100%' inline le gana al
                // aspect-ratio:3/4 de la clase CSS y descuadra esta card
                // frente a col1/5.
                gsap.set(rsCenterCard, {
                    clearProps: 'position,top,left,width,height,margin,zIndex,borderRadius',
                });
                if (rsCol1) gsap.set(rsCol1, { x: 0 });
                rsCol2Cards.forEach((c) => gsap.set(c, { x: 0 }));
                rsCol4Cards.forEach((c) => gsap.set(c, { x: 0 }));
                if (rsCol5) gsap.set(rsCol5, { x: 0 });
                rsCenterPromoted = false;
                rsCenterRect = null;
                forceRepaint();
            }
        },
        onLeave: () => {
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: 0 }); }
        }
    });

    // ============================================
    // FASE 2 — Tránsito diagonal de tarjetas de métricas
    // Anclado a rsMosaicoST.end (Fase 1).
    // ============================================

    const rsMosaicoST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-mosaico')
    );

    const rsMetricasSection   = document.querySelector('.rs-metricas');
    const rsMetricasTitle     = document.querySelector('.rs-metricas__title');
    const rsMetricasCards     = gsap.utils.toArray('.rs-metricas__card');
    const rsMosaicoCenterCard = document.querySelector('.rs-mosaico__card--center');

    // Rango compartido de la diagonal: 0.15 → 0.90 del progreso total.
    // Desfase de inicio entre cards consecutivas: 25% del rango (ver
    // spec 2026-07-02-resultado-fase2-design.md, sección "Aclaración
    // del stagger"). El span de cada card se DERIVA de ese desfase
    // (no es un 75% independiente) para que la 3ª card termine
    // exactamente en RS_DIAG_END: con 2 desfases + 1 span == RS_DIAG_SPAN,
    // así ninguna card se corta ni sobra rango muerto antes del cierre
    // de escena. (El plan original fijaba span=75%+stagger=25% por
    // separado, sin esa restricción — la 3ª card terminaba en p2≈1.09,
    // fuera del rango: confirmado en vivo, seguía en pantalla en p2=1.0
    // cuando el título ya debía estar apagado.)
    const RS_DIAG_START = 0.15;
    const RS_DIAG_END   = 0.90;
    const RS_DIAG_SPAN  = RS_DIAG_END - RS_DIAG_START;
    // Con colchón mínimo de origen/destino (ver forEach de cards más abajo)
    // cada card queda visible en pantalla durante TODO su localP 0→1, así
    // que la ventana donde las 3 se ven a la vez mide exactamente
    // RS_DIAG_SPAN - 4*STAGGER. Un stagger de 1/6 del rango dej a esa
    // ventana en ~25% del rango total (generosa y sostenida, no un
    // instante) — coincide con resultado-b-05/06.jpg, donde ambas capturas
    // muestran las 3 tarjetas en pantalla a la vez, no una carrera de
    // relevos.
    const RS_DIAG_CARD_STAGGER = RS_DIAG_SPAN / 6;
    const RS_DIAG_CARD_SPAN    = RS_DIAG_SPAN - 2 * RS_DIAG_CARD_STAGGER;
    const RS_DIAG_CARD_STARTS = [
        RS_DIAG_START,
        RS_DIAG_START + RS_DIAG_CARD_STAGGER,
        RS_DIAG_START + RS_DIAG_CARD_STAGGER * 2,
    ];

    // Toda esta fase corre por progreso de scroll (scrub), no por reloj —
    // no hay un timer real en ningún lado del archivo. RS_TITLE_DELAY es
    // una pausa proporcional al inicio del rango de entrada del título
    // (pensada para "sentirse" como ~1.5s a un ritmo de scroll cómodo de
    // lectura en una sección pineada); RS_TITLE_SPAN es el mismo ancho de
    // rango que ya tenía (0.20) — solo se desplaza el inicio, la duración/
    // velocidad propia de la entrada no cambia. 100% reversible al hacer
    // scroll hacia atrás, igual que el resto de la fase.
    const RS_TITLE_DELAY = 0.10;
    const RS_TITLE_SPAN  = 0.20;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-metricas',
        start: () => rsMosaicoST ? rsMosaicoST.end : 0,
        end: () => '+=' + (window.innerHeight * 3.2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            const p2 = self.progress;

            // ── Salida del lienzo de Fase 1 (0.00 → 0.20) ──
            // .rs-mosaico__card--center ya quedó position:fixed y a
            // pantalla completa al terminar Fase 1 (promovida en el
            // bloque de Fase 1 de este mismo archivo) — aquí solo se le
            // suma un translateY adicional para que se retire hacia
            // arriba; su position/width/height/top/left quedan intactos
            // (los dejó Fase 1, no se tocan aquí).
            if (rsMosaicoCenterCard) {
                const exitP = clamp01(p2 / 0.20);
                gsap.set(rsMosaicoCenterCard, { y: -exitP * vh });
            }

            // ── Revelado del contenedor .rs-metricas (0.00 → 0.20) ──
            // Mismo patrón de "relevo" que .rs-mosaico en Fase 1: sin esto
            // el contenedor se queda en su reposo CSS (translateY(100vh),
            // oculto) durante todo el scrub hacia adelante — onLeaveBack/
            // onLeave por sí solos no lo revelan en un primer paso hacia
            // adelante, solo lo esconden/muestran al cruzar los bordes.
            if (rsMetricasSection) {
                const exitP = clamp01(p2 / 0.20);
                gsap.set(rsMetricasSection, { y: (1 - exitP) * vh });
            }

            // ── Entrada del título (RS_TITLE_DELAY → RS_TITLE_DELAY + RS_TITLE_SPAN) ──
            if (rsMetricasTitle) {
                const inEased = gsap.parseEase('power2.out')(clamp01((p2 - RS_TITLE_DELAY) / RS_TITLE_SPAN));
                gsap.set(rsMetricasTitle, { x: 200 * (1 - inEased), opacity: inEased });

                // ── Cierre de escena: fade-out del título (0.90 → 1.00) ──
                // Solo después de que la Tarjeta 3 salió por completo
                // (RS_DIAG_END = 0.90, ver constantes arriba).
                if (p2 >= 0.90) {
                    const closeP = clamp01((p2 - 0.90) / 0.10);
                    gsap.set(rsMetricasTitle, { opacity: 1 - closeP });
                }
            }

            // ── Tarjetas: diagonal constante inferior-izq → superior-der,
            // con stagger (RS_DIAG_CARD_STARTS) ──
            rsMetricasCards.forEach((card, i) => {
                const cardStart = RS_DIAG_CARD_STARTS[i];
                const localP = clamp01((p2 - cardStart) / RS_DIAG_CARD_SPAN);
                const cardW = card.offsetWidth || 380;
                const cardH = card.offsetHeight || 260;

                // Colchón mínimo (no sobrante): a t=0 la card queda EXACTO
                // oculta abajo (top=vh) y a t=1 EXACTO oculta arriba
                // (bottom=0, top=-cardH) — antes había colchón extra y
                // asimétrico (+cardH en el origen, +vw/+vh en el destino)
                // que limitaba la ventana visible de cada card a solo
                // ~50% de su propio localP (confirmado analíticamente:
                // t∈(0.181,0.681) con los valores viejos). Con colchón
                // mínimo la card está en pantalla en TODO t∈(0,1), lo que
                // habilita el solape triple entre cards vecinas. Coincide
                // además con resultado-b-05.jpg, donde la tarjeta "+30%"
                // se ve recortada justo en el borde, no con margen de más.
                const originX = -cardW;
                const originY = vh;
                const destX   = vw;
                const destY   = -cardH;

                // ── Trayectoria en arco (Bezier cuadrática) en vez de
                // línea recta ──
                // P0/P2 son EXACTAMENTE origin/dest de siempre (no se
                // tocan): el colchón mínimo y el timing de solape triple
                // ya verificados dependen de esos dos puntos, el arco solo
                // curva el camino intermedio. P1 (punto de control) se
                // desplaza perpendicular a la línea recta P0→P2, hacia
                // abajo-derecha (BOW_FACTOR de la longitud de la
                // diagonal) — un pequeño "envión" antes de la subida.
                const dx = destX - originX;
                const dy = destY - originY;
                const diagLen = Math.sqrt(dx * dx + dy * dy) || 1;
                const midX = (originX + destX) / 2;
                const midY = (originY + destY) / 2;
                const BOW_FACTOR = 0.18;
                const p1X = midX + (-dy / diagLen) * (BOW_FACTOR * diagLen);
                const p1Y = midY + (dx / diagLen) * (BOW_FACTOR * diagLen);

                const t = localP;
                const mt = 1 - t;
                const x = mt * mt * originX + 2 * mt * t * p1X + t * t * destX;
                const y = mt * mt * originY + 2 * mt * t * p1Y + t * t * destY;

                // Rotación derivada de la tangente de la curva (no un
                // rango inventado aparte): la desviación entre el ángulo
                // de la tangente en t y el ángulo de la línea recta base
                // — así la card se inclina siguiendo la forma real del
                // arco. La tangente de un Bezier cuadrático en t=0 apunta
                // hacia P1 (no hacia la cuerda base) y en t=1 apunta desde
                // P1 — o sea, la desviación NO llega a 0° sola en los
                // extremos. Como la card debe quedar como puro translate
                // (sin rotar) exactamente en origin/dest — ahí es donde
                // vive el colchón mínimo ya verificado — se multiplica por
                // una envolvente que fuerza 0° en t=0 y t=1 y máximo en
                // t=0.5, sin alterar la forma de la curva en el resto.
                const tanX = 2 * mt * (p1X - originX) + 2 * t * (destX - p1X);
                const tanY = 2 * mt * (p1Y - originY) + 2 * t * (destY - p1Y);
                const baseAngle = Math.atan2(dy, dx) * (180 / Math.PI);
                const tanAngle  = Math.atan2(tanY, tanX) * (180 / Math.PI);
                const rotationEnvelope = 4 * t * (1 - t);
                const rotation  = (tanAngle - baseAngle) * rotationEnvelope;

                // localP ya viene clamp01: 0 antes de arrancar (en el
                // origen, fuera de pantalla) y 1 tras llegar al destino
                // (también fuera de pantalla) — .rs-metricas tiene
                // overflow:hidden, así que ninguno de los dos extremos se
                // ve; la opacity es una capa de seguridad adicional
                // (mismo patrón usado en el resto del archivo), no la
                // responsable real de ocultarlas.
                const opacity = (localP > 0 && localP < 1) ? 1 : 0;

                gsap.set(card, { x, y, rotation, opacity });
            });
        },
        onLeaveBack: () => {
            if (rsMosaicoCenterCard) { gsap.set(rsMosaicoCenterCard, { y: 0 }); }
            if (rsMetricasTitle)     { gsap.set(rsMetricasTitle, { x: 200, opacity: 0 }); }
            if (rsMetricasSection)   { gsap.set(rsMetricasSection, { y: '100vh' }); }
            rsMetricasCards.forEach((card) => {
                const cardW = card.offsetWidth || 380;
                // y coincide con el nuevo originY mínimo (vh, no vh+cardH)
                // del onUpdate — misma convención de "recién oculta".
                gsap.set(card, { x: -cardW, y: window.innerHeight, rotation: 0, opacity: 0 });
            });
        },
        onLeave: () => {
            if (rsMetricasSection) { gsap.set(rsMetricasSection, { y: 0 }); }
        }
    });

    // ============================================
    // FASE 3 — Entrada desfasada derecha a izquierda
    // Anclado a rsMetricasST.end (Fase 2).
    // ============================================

    const rsMetricasST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-metricas')
    );

    const rsUsuariosSection = document.querySelector('.rs-usuarios');
    const rsUsuariosTitle   = document.querySelector('.rs-usuarios__title');
    const rsUsuariosMedia   = document.querySelector('.rs-usuarios__media');
    const rsUsuariosText    = document.querySelector('.rs-usuarios__text');

    const RS_ENTRY_OFFSET_X = 200;
    // px de aire entre el borde inferior de la imagen y el párrafo.
    // El requerimiento es "siempre 120px", sin importar el alto del
    // viewport — si el párrafo no cabe completo abajo, se permite que
    // asome por el borde inferior antes que sacrificar ese espacio.
    const RS_TEXT_TOP_BUFFER = 120;
    let rsTextTopCaptured = false;

    // Mecánica IDÉNTICA a la entrada del título de Fase 2 (RS_TITLE_DELAY/
    // RS_TITLE_SPAN, líneas ~441-442 de este mismo archivo): mismo delay,
    // mismo span, misma ease, solo x/opacity — sin ningún y. Se declaran
    // constantes propias (mismos valores, nombre distinto) porque
    // RS_TITLE_DELAY/RS_TITLE_SPAN ya están declaradas en este scope por el
    // bloque de Fase 2 y no pueden redeclararse.
    const RS_USUARIOS_TITLE_DELAY = 0.10;
    const RS_USUARIOS_TITLE_SPAN  = 0.20;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-usuarios',
        start: () => rsMetricasST ? rsMetricasST.end : 0,
        end: () => '+=' + (window.innerHeight * 3),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p3 = self.progress;

            // ── Revelado del contenedor .rs-usuarios (0.00 → 0.20) ──
            // Se usa clip-path (no transform: translateY) para que el título
            // — position:absolute dentro del contenedor — no herede un
            // arrastre vertical. Si el padre se trasladara, el título lo
            // acompañaría; combinado con el overflow:hidden del contenedor
            // eso producía un "wipe" del título de abajo hacia arriba que
            // se leía como una animación de máscara adicional. Con clip-path
            // el contenedor se "abre" de arriba hacia abajo y el título
            // queda quieto en su sitio, entrando solo con x/opacity.
            // Mismo "relevo" que .rs-mosaico y .rs-metricas: sin esto el
            // contenedor se queda en su reposo CSS (oculto) durante todo el
            // scrub hacia adelante.
            const containerRevealP = clamp01(p3 / 0.20);
            if (rsUsuariosSection) {
                gsap.set(rsUsuariosSection, { clipPath: `inset(0 0 ${(1 - containerRevealP) * 100}% 0)` });
            }

            // ── 3.0 Captura lazy del top real del párrafo (una sola vez) ──
            // Mide la altura YA renderizada de .rs-usuarios__media (según
            // el width:45%/max-width:780px real del viewport) y fija el
            // `top` del párrafo justo debajo, con buffer. A partir de aquí
            // el párrafo nunca vuelve a tocar `top`: solo x/y/opacity por
            // transform (mismo patrón de "top/left fijo, JS solo mueve con
            // transform" que ya usa .rs-metricas__card) — evita el solape
            // que tendría un valor fijo adivinado en pantallas anchas.
            // Sin cap por viewport: el requerimiento es mantener los 120px
            // de aire entre imagen y párrafo aunque eso implique que el
            // párrafo asome por el borde inferior en viewports muy bajos.
            if (!rsTextTopCaptured && rsUsuariosMedia && rsUsuariosText) {
                const mediaRect = rsUsuariosMedia.getBoundingClientRect();
                const mediaTop = rsUsuariosMedia.offsetTop;
                gsap.set(rsUsuariosText, { top: mediaTop + mediaRect.height + RS_TEXT_TOP_BUFFER });
                rsTextTopCaptured = true;
            }

            // ── 3.1 Título (RS_USUARIOS_TITLE_DELAY → +RS_USUARIOS_TITLE_SPAN) ──
            // Réplica exacta de la entrada del título de Fase 2: mismo
            // delay (0.10), mismo span (0.20), misma ease, solo x/opacity.
            // El contenedor ahora se revela con clip-path (no transform),
            // así que el título no hereda ningún arrastre vertical y
            // tampoco queda recortado por el overflow:hidden del padre
            // — entra únicamente con la firma de derecha a izquierda + fade.
            if (rsUsuariosTitle) {
                const titleEased = gsap.parseEase('power2.out')(clamp01((p3 - RS_USUARIOS_TITLE_DELAY) / RS_USUARIOS_TITLE_SPAN));
                gsap.set(rsUsuariosTitle, {
                    x: RS_ENTRY_OFFSET_X * (1 - titleEased),
                    opacity: titleEased,
                });
            }

            // ── 3.2a Imagen (0.20 → 0.45) ──
            if (rsUsuariosMedia) {
                const mediaP = clamp01((p3 - 0.20) / 0.25);
                const mediaEased = gsap.parseEase('power2.out')(mediaP);
                gsap.set(rsUsuariosMedia, {
                    x: RS_ENTRY_OFFSET_X * (1 - mediaEased),
                    opacity: mediaEased,
                });
            }

            // ── 3.2b Texto (0.45 → 0.70) ──
            if (rsUsuariosText) {
                const textP = clamp01((p3 - 0.45) / 0.25);
                const textEased = gsap.parseEase('power2.out')(textP);
                gsap.set(rsUsuariosText, {
                    x: RS_ENTRY_OFFSET_X * (1 - textEased),
                    opacity: textEased,
                });
            }

            // ── 3.3a Salida de la imagen (0.75 → 0.875) ──
            // Sin condición `if (p3 >= 0.75)`: el y se calcula SIEMPRE
            // desde p3. Antes la condición hacía que al hacer scrub en
            // reversa el y quedara "congelado" en el último valor seteado
            // (p3≈0.76 → y≈-98px) porque scrub: 1 suaviza y no garantiza
            // pasar exactamente por p3=0.75. Con la imagen a media salida
            // y el párrafo aún más arriba (sale en cascada), el párrafo se
            // encima con la imagen. Como clamp01 ya devuelve 0 fuera del
            // rango, calcular siempre da el mismo resultado en la zona
            // normal y resetea correctamente al reverso.
            // El título NO se toca aquí: permanece anclado.
            if (rsUsuariosMedia) {
                const mediaExitP = clamp01((p3 - 0.75) / 0.125);
                gsap.set(rsUsuariosMedia, { y: -mediaExitP * vh });
            }

            // ── 3.3b Salida del párrafo, EN CASCADA tras la imagen (0.875 → 1.00) ──
            // Misma corrección que la imagen.
            if (rsUsuariosText) {
                const textExitP = clamp01((p3 - 0.875) / 0.125);
                gsap.set(rsUsuariosText, { y: -textExitP * vh });
            }
        },
        onLeaveBack: () => {
            if (rsUsuariosSection) { gsap.set(rsUsuariosSection, { clipPath: 'inset(0 0 100% 0)' }); }
            if (rsUsuariosTitle)   { gsap.set(rsUsuariosTitle, { x: RS_ENTRY_OFFSET_X, opacity: 0 }); }
            if (rsUsuariosMedia)   { gsap.set(rsUsuariosMedia, { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 }); }
            if (rsUsuariosText)    { gsap.set(rsUsuariosText,  { x: RS_ENTRY_OFFSET_X, y: 0, opacity: 0 }); }
        }
    });

    // ============================================
    // FASE 4 — Portal de máscara tipográfica y revelación
    // Anclado a rsUsuariosST.end (Fase 3). Reusa
    // .rs-usuarios__title (Fase 3) — no crea título propio.
    // ============================================

    const rsUsuariosST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--rs-usuarios')
    );

    const rsTestimonioSection = document.querySelector('.rs-testimonio');
    const rsUsuariosWords = gsap.utils.toArray('.rs-usuarios__word');
    // SVG que renderiza "impacto" — texto vectorial, escala sin
    // pixelación. Reemplaza al antiguo span+rs-usuarios__p-anchor.
    // El <g> interior es el que recibe la transformación: aplicar
    // transform al <svg> padre lo rasteriza como bitmap (pixelación),
    // pero al <g> interno el renderer del SVG lo reescala vectorialmente
    // a cada frame — esa es la diferencia que evita la pixelación a
    // escalas de 15-20×.
    const rsImpactoSvg   = document.querySelector('.rs-usuarios__impacto-svg');
    const rsImpactoGroup = rsImpactoSvg ? rsImpactoSvg.querySelector('g') : null;
    const rsImpactoText  = rsImpactoSvg ? rsImpactoSvg.querySelector('text') : null;
    const rsRing          = document.querySelector('.rs-testimonio__ring');
    // Mover el ring a <main> para que escape del stacking context de
    // .rs-testimonio (z:8). Con position:fixed + z-index:10, el ring
    // queda ENCIMA de .rs-usuarios__title (z:9) sin necesidad de subir
    // .rs-testimonio a z:10 (lo que cubriría las secciones anteriores).
    // El position:fixed hace que el top:50%/left:50% se posicione
    // respecto al viewport, no al padre, así que el ring sigue centrado.
    if (rsRing && rsRing.parentElement && rsRing.parentElement.classList.contains('rs-testimonio')) {
        const main = document.querySelector('main');
        if (main) main.appendChild(rsRing);
    }
    // Mover el closing a <main> para que escape del stacking context de
    // .rs-testimonio (z:8). Con position:fixed + z-index:11, el closing
    // queda ENCIMA de todas las secciones (mosaico z:7, metricas z:7,
    // usuarios z:7, title z:9, ring z:10). El position:fixed hace que
    // el top:var(--cs-header-height) se posicione respecto al viewport.
    if (rsClosingSection && rsClosingSection.parentElement && rsClosingSection.parentElement.classList.contains('rs-testimonio')) {
        const main = document.querySelector('main');
        if (main) main.appendChild(rsClosingSection);
    }
    const rsQuote         = document.querySelector('.rs-testimonio__quote');
    const rsClosingLines  = gsap.utils.toArray('.rs-testimonio__line');
    const rsClosingWraps  = gsap.utils.toArray('.rs-testimonio__line-wrap');
    const rsClosingSection = document.querySelector('.rs-testimonio__closing');
    
    // Escala dinámica del closing: si el contenido (3 líneas + gap + CTA)
    // excede la altura del viewport, se escala proporcionalmente para que
    // quepa completo sin cortarse. Mantiene centrado vertical y todas las
    // proporciones del diseño.
    function updateClosingScale() {
        if (!rsClosingSection) return;
        
        const vh = window.innerHeight;
        const h3 = rsClosingSection.querySelector('.rs-testimonio__closing-title');
        const cta = rsClosingSection.querySelector('.rs-testimonio__cta');
        
        if (!h3 || !cta) return;
        
        // Altura total del contenido: h3 + gap (48px) + CTA
        const gap = 48;
        const contentHeight = h3.offsetHeight + gap + cta.offsetHeight;
        
        // 95% del viewport para dejar 2.5% de margen arriba y abajo
        const availableHeight = vh * 0.95;
        
        // Calcular scale: si el contenido cabe, scale=1. Si no, escalar
        // proporcionalmente para que quepa.
        const scale = Math.min(1, availableHeight / contentHeight);
        
        rsClosingSection.style.transform = `scale(${scale})`;
        rsClosingSection.style.transformOrigin = 'center center';
    }
    
    // Recalcular scale en resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateClosingScale, 100);
    });

    // ── Mover el título de Fase 3 fuera de .rs-usuarios ──
    // El título debe ser visible durante toda la Fase 4 (imagen 01 del
    // spec) y transformarse en la "p" que actúa como portal hacia el
    // testimonio. Estando dentro de .rs-usuarios (z:7, position:fixed)
    // su z-index es LOCAL a ese stacking context — no puede estar sobre
    // .rs-testimonio (z:8) por más que le pongamos z-index:9999.
    // Solución: moverlo a <main> antes del ST de Fase 4. Ahora su
    // position:fixed + z-index:9 es GLOBAL y queda sobre todo.
    // `rsUsuariosTitle` ya está declarado en el bloque de Fase 3
    // (línea ~599) y apunta al MISMO elemento (es un nodo, moverlo en
    // el DOM no rompe la referencia — la variable sigue válida).
    const rsUsuariosTitleToMove = document.querySelector('.rs-usuarios__title');
    if (rsUsuariosTitleToMove && rsUsuariosTitleToMove.parentElement.classList.contains('rs-usuarios')) {
        // Mover al <main> (grandparent de .rs-usuarios). Lo insertamos
        // al final del <main> — su position:fixed lo posiciona por
        // coordenadas del viewport, no del contenedor, así que el orden
        // en el DOM no afecta su ubicación visual.
        const grandparent = rsUsuariosTitleToMove.parentElement.parentElement;
        grandparent.appendChild(rsUsuariosTitleToMove);
    }
    let rsPortalCaptured   = false;
    let rsPortalTargetScale = 1;
    // Origen del scale (centro del bowl de la "p") en píxeles del
    // display box del SVG. Necesario en onUpdate para bakearlo en la
    // matriz del transform del <g> (el renderer SVG reprocesa el
    // texto vectorialmente — la diferencia clave que elimina la
    // pixelación que tenía transform: scale() sobre HTML text).
    let rsPortalOriginX = 0;
    let rsPortalOriginY = 0;

    // ── Sizing del SVG al line-box de los otros words ──
    // Sin esto el SVG usa el default 300×150 (sobredimensiona la
    // palabra, empuja a "El" y "en" a líneas separadas, descuadra
    // toda la Fase 3). Se dimensiona en cuanto la fuente Sora
    // termina de cargar: getBBox() mide 0×0 si el font aún no está
    // disponible.
    //
    // ALINEACIÓN CON LOS SPANS HTML: los otros <span class="word">
    // tienen line-height:1.1 → line-box 70.4px (font-size 64 × 1.1).
    // El texto dentro vive en ese line-box; el browser posiciona
    // su baseline a ~65.6px del top del span (medido en Chrome con
    // Sora — la posición exacta depende de la métrica ascent de
    // la fuente y de la heurística del browser, pero el principio
    // es el mismo: el texto del span desborda el line-box tanto
    // por arriba (ascent) como por abajo (descent), y la baseline
    // NO está en el centro del line-box).
    //
    // Para que "impacto" (SVG) se vea a la misma altura que "El" /
    // "en" (spans HTML), la baseline de su texto tiene que caer en
    // EXACTAMENTE la misma posición viewport-y que la baseline de
    // los spans. Eso se logra construyendo el viewBox con
    // `y_start = -64.6` para que la baseline del texto SVG
    // (user y=1) caiga en display y = 1 − (−64.6) = 65.6 — igual
    // que la baseline de los spans relativa a su box. Con
    // `vertical-align: baseline` (default en inline-block), el
    // navegador ancla ambas baselines a la línea y quedan
    // alineadas.
    //
    // El texto en user coords (y=−65 a y=15, 80px de alto)
    // desborda el viewBox de 70.4px por arriba y por abajo — eso
    // está bien: `overflow:visible` lo deja pasar al layout del
    // padre, igual que el HTML text desbordando su line-box.
    const SVG_VIEWBOX_Y_START = -61.6;
    function sizeImpactoSvg() {
        if (!rsImpactoSvg || !rsImpactoText) return;
        const textBBox = rsImpactoText.getBBox();
        if (textBBox.width === 0 || textBBox.height === 0) return;
        const lineBoxHeight = 64 * 1.1; // cs-section-title: line-height:1.1
        rsImpactoSvg.setAttribute('viewBox',
            `0 ${SVG_VIEWBOX_Y_START} ${textBBox.width} ${lineBoxHeight}`);
        rsImpactoSvg.setAttribute('width', textBBox.width);
        rsImpactoSvg.setAttribute('height', lineBoxHeight);
    }
    if (rsImpactoSvg) {
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(sizeImpactoSvg);
        }
        requestAnimationFrame(() => requestAnimationFrame(sizeImpactoSvg));
    }
    let rsPortalDeltaX     = 0;  // (legacy — conservado para no romper git blame, ya no se usa)
    let rsPortalDeltaY     = 0;  // (legacy — conservado para no romper git blame, ya no se usa)
    // Cache del getBoundingClientRect del SVG capturado en
    // computeRsPortalConstants. La fórmula unificada del zoom necesita
    // svgRect.left y svgRect.top CADA frame, y getBoundingClientRect forzaría
    // un reflow por frame — el cache lo evita.
    let rsSvgRect           = null;

    // Posición del centro del BOWL (círculo) de la "p" en coordenadas
    // del viewBox del SVG. Se mide UNA vez con getExtentOfChar(2) — a
    // diferencia del span anterior, NO incluye line-height padding:
    // getExtentOfChar devuelve el bbox REAL del glifo renderizado, así
    // que el centro está donde realmente está el glifo, no donde
    // "debería" estar según heurísticas de ratio.
    // 0.35 = el bowl de "p" ocupa el ~65% superior del glifo, su centro
    // cae a 32-35% desde el top. Verificado en Sora 64px.
    // Pivote vertical del bowl de la "p". getExtentOfChar en Sora 64px
    // devuelve el bbox de LÍNEA (no de glifo): y ∈ [-65, 15], h = 80.
    // El bowl real de la "p" ocupa la zona de x-height: su centro cae
    // aproximadamente a y = baseline − x_height/2. En Sora x-height ≈
    // 0.52·em = 33, baseline en y = 1 → bowl center ≈ y = -15.5.
    // Ratio desde el top del bbox de línea: (-15.5 − (-65)) / 80 = 0.62.
    // Verificado en vivo con getExtentOfChar(2).
    const P_CIRCLE_Y_RATIO = 0.62;

    function computeRsPortalConstants() {
        if (!rsImpactoGroup || !rsImpactoText) return;
        const vh = window.innerHeight;
        const vw = window.innerWidth;

        // ── Bbox del texto completo en coords del viewBox (Sora
        // renderizada, sin padding) — solo para referencia, NO se
        // reescribe el viewBox aquí. El viewBox lo fija sizeImpactoSvg
        // (en init) con dimensiones de LINE-BOX (70.4) y
        // y_start=-74 para alinear la baseline del texto SVG con la
        // de los <span> adyacentes. Si se reescribiera con el bbox
        // natural del texto (80 alto), el "impacto" se descentraría
        // otra vez respecto a "El" / "en" — el bug exacto que
        // sizeImpactoSvg está diseñado para evitar. ──
        const textBBox = rsImpactoText.getBBox();

        // ── Bbox REAL del glifo "p" (índice 2 en "impacto") ──
        // Devuelve el área visible del glyph renderizado, sin el
        // line-height padding que contaminaba la medición anterior.
        const pExtent = rsImpactoText.getExtentOfChar(2);
        const pUserCenterX = pExtent.x + pExtent.width / 2;
        const pUserCenterY = pExtent.y + pExtent.height * P_CIRCLE_Y_RATIO;

        // ViewBox y_start (top de la ventana visible del SVG en user
        // coords). El viewBox se fija en sizeImpactoSvg a "0 -64 W H"
        // (con H=line-box 70.4) para alinear la baseline del texto
        // SVG con la de los <span> adyacentes — leerlo dinámicamente
        // en vez de hardcodearlo acopla la medición a la fuente de
        // verdad (el atributo viewBox actual), no a un número mágico.
        const viewBoxAttr = rsImpactoSvg.getAttribute('viewBox');
        const viewBoxYStart = viewBoxAttr ? parseFloat(viewBoxAttr.split(/\s+/)[1]) : textBBox.y;

        // Transform-origin del <g> en píxeles del display box del SVG
        // (no del viewBox). Aunque la spec SVG2 dice que el origin va
        // en coords locales del elemento, los navegadores
        // (Chrome/Safari/Firefox) interpretan los valores "px" del
        // `transformOrigin` como píxeles del bounding box display.
        // Hay que restar textBBox.xy para convertir user coords →
        // display coords antes de setear el origin — sin esto, el
        // origin queda 65px arriba del glifo real y la "p" se
        // desplaza al escalar.
        //
        // Se guarda en variables module-level (rsPortalOriginX/Y) para
        // que onUpdate pueda bakearlo en la matriz del <g> cada
        // frame, en vez de depender de la CSS property
        // `transformOrigin` (que el atributo `transform` del <g>
        // ignora — solo el renderer CSS la respeta, y GSAP aplica
        // el transform via el atributo, no la property).
        // Transform-origin del <g> en píxeles del display box del SVG
        // (no del viewBox). El viewBox está offsetado respecto al
        // display por su y_start (típicamente -64) — el "p" en user
        // coords y=-37 cae a display y = -37 − (−64) = 27, no 28.
        // Hay que usar viewBoxYStart (no textBBox.y) para esta
        // conversión: si viewBox y_start ≠ textBBox.y (que es el caso
        // desde que se alineó la baseline con el line-box de los
        // spans), la diferencia es 1px vertical — suficiente para
        // que la "p" se descentre al escalar.
        const pDisplayX = pUserCenterX - textBBox.x;
        const pDisplayY = pUserCenterY - viewBoxYStart;
        rsPortalOriginX = pDisplayX;
        rsPortalOriginY = pDisplayY;

        // Escala objetivo: que la palabra CREZCA hasta que ya no se vea
        // en la pantalla (factor 20.0). Al MENOR de los dos ejes — el que
        // crezca menos ya satura, el otro crece más y se sale. Con 20.0
        // el "p" (43px de ancho) termina a ~11440px → ~6× el viewport
        // (1920px), con ~4760px de overflow por lado. La "p" round part
        // queda como un sliver visible de ~17% de su ancho en el centro
        // del viewport — ya no se lee como "p" completa.
        //
        // Factor 20 (no 50) para que el movimiento desde la izquierda
        // al centro siga siendo perceptible durante el trayecto: con
        // factor 50, a p4=0.25 la palabra ya estaba a scale 9 (el
        // "p" mide 386px y se ve moverse), pero a p4=0.30 ya estaba a
        // scale 30 y el "p" se salía del viewport — el ojo nunca
        // percibía el movimiento completo. Con factor 20, el "p" mide
        // 1161px a p4=0.35 (cabe en el viewport de 1920px) y el
        // desplazamiento desde (240,210) hasta (960,468) es claramente
        // visible durante todo el trayecto p4=0.20→0.50.
        const svgRect = rsImpactoSvg.getBoundingClientRect();
        const scaleByWidth  = (vw * 20.0) / svgRect.width;
        const scaleByHeight = (vh * 20.0) / svgRect.height;
        rsPortalTargetScale = Math.max(scaleByWidth, scaleByHeight);
        rsSvgRect = svgRect;

        // (rsPortalDeltaX/Y legacy: la versión anterior de la fórmula
        //  los necesitaba como coeficientes constantes. Ahora la matriz
        //  bakea el origin en función de s cada frame, así que estos
        //  valores ya no se consultan — se conservan las asignaciones
        //  para no romper git blame, pero son código muerto.)
        rsPortalDeltaX = vw / 2 - svgRect.left - pDisplayX;
        rsPortalDeltaY = vh / 2 - svgRect.top  - pDisplayY;
    }

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--rs-testimonio',
        start: () => rsUsuariosST ? rsUsuariosST.end : 0,
        end: () => '+=' + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const p4 = self.progress;

            // ── Revelado del contenedor .rs-testimonio (0.00 → 0.15) ──
            // El CSS deja .rs-testimonio en opacity:0 / visibility:hidden
            // (sin transform, para que el ring aparezca centrado sin
            // desplazamiento). El JS lo revela con fade-in durante los
            // primeros 15% del progreso. visibility:hidden evita que
            // el contenedor tape las secciones anteriores (Fases 1-3)
            // antes de que empiece Fase 4.
            if (rsTestimonioSection) {
                const revealP = clamp01(p4 / 0.15);
                gsap.set(rsTestimonioSection, {
                    opacity: revealP,
                    visibility: revealP > 0 ? 'visible' : 'hidden'
                });
            }
            
            // ── Revelado del closing (0.75 → 0.85) ──
            // El closing tiene visibility:hidden en CSS para no bloquear
            // eventos de mouse antes de que sea visible. Lo revelamos
            // cuando empieza la animación de las líneas de cierre.
            if (rsClosingSection) {
                const closingRevealP = clamp01((p4 - 0.75) / 0.10);
                gsap.set(rsClosingSection, {
                    visibility: closingRevealP > 0 ? 'visible' : 'hidden'
                });
            }

            // ── 4.1 Aislamiento de "impacto" (0.00 → 0.25) ──
            // Las otras palabras bajan a opacity 0 (fade out simple).
            // "impacto" queda intacta — será el ancla del zoom posterior.
            const wordFadeP = clamp01(p4 / 0.25);
            rsUsuariosWords.forEach((word) => {
                if (word.dataset.word !== 'impacto') {
                    gsap.set(word, { opacity: 1 - wordFadeP });
                }
            });

            // ── 4.1 Anillo: fade-in + crecimiento + rotación ──
            // Fade-in al inicio (0.00→0.25), después se queda a opacity 1.
            // Crecimiento: scale 1 → 5.0 con power1.inOut (antes 2.75).
            // A 5.0×, el ring (754×480 base) mide 3770×2400 — claramente
            // más grande que el viewport (1920×907), por lo que crece
            // "hasta desaparecer" más allá de los bordes.
            // Rotación: 0° → 360° lineal sobre todo el rango.
            // Sin x/y adicionales — el ring ya está centrado por CSS
            // (top:50%, left:50%, margin:-240px 0 0 -377px), y los
            // anteriores x:-377 y:-240 GSAP lo descolocaban (doble offset
            // con el margin del CSS). Eliminados.
            //
            // Crecimiento en DOS FASES para que el ring sea VISIBLE antes
            // del párrafo (p4=0.50) y DESAPAREZCA al final (p4=1.00):
            //   - Fase A (0.00→0.50): scale 1.0 → 2.55 con power1.inOut.
            //     A 2.55× el ring mide 1923px (apenas cabe en el viewport
            //     de 1920px) → el ring es visible durante todo el
            //     preludio y el párrafo aparece dentro de él.
            //   - Fase B (0.50→1.00): scale 2.55 → 5.0 con power1.inOut.
            //     A 5.0× el ring mide 3770×2400 — way beyond viewport,
            //     "desaparece" más allá de los bordes (efecto tunnel).
            if (rsRing) {
                const ringFadeP = clamp01(p4 / 0.25);
                const ringP = clamp01(p4 / 0.95);
                const ringEased = p4 < 0.50
                    ? gsap.parseEase('power1.inOut')(p4 / 0.50) * 0.5
                    : 0.5 + gsap.parseEase('power1.inOut')((p4 - 0.50) / 0.50) * 0.5;
                const ringScale = 1.0 + (5.0 - 1.0) * ringEased;
                const ringRotation = 360 * ringP;
                gsap.set(rsRing, {
                    opacity: ringFadeP, // Solo fade-in, sin fade-out
                    scale: ringScale,
                    rotation: ringRotation,
                });
            }

            // ── 4.2 Zoom de "impacto" anclado en el centro del bowl de la "p" ──
            //
            // Modelo UNIFICADO (un solo tramo 0.20 → 1.00): scale y translate
            // comparten la misma curva de easing (power1.inOut), la palabra
            // CRECE mientras se TRASLADA al centro. El bowl de la "p" está
            // bakeado como transform-origin en la matriz del transform — su
            // posición es geométricamente independiente del factor de escala,
            // permanece clavada en (vw/2, vh/2) del viewport durante todo el
            // crecimiento.
            //
            // ANTES había 2 fases (Phase A: solo translate scale=1, Phase B:
            // solo scale sin más translate) — eso causaba que la palabra
            // NUNCA creciera durante la primera mitad del recorrido y la
            // matriz usaba coeficientes constantes que NO compensaban el
            // factor s, así que al crecer el bowl se desplazaba arriba y a
            // la derecha (los bugs #2 y #3 que motivaron este refactor).
            if (rsImpactoGroup && p4 >= 0.20) {
                if (!rsPortalCaptured) {
                    computeRsPortalConstants();
                    rsPortalCaptured = true;
                }

                // ── Modelo UNIFICADO con DOS tiempos desacoplados ──
                // El bowl de la "p" recorre una interpolación (con ease) desde
                // su posición original hasta (vw/2, vh/2) durante los primeros
                // 0.30 de p4 (es decir, 0.20 → 0.50), pero la palabra SIGUE
                // ESCALANDO todo el rango 0.20 → 1.00. Después de p4=0.50 el
                // bowl queda clavado en el centro y la palabra sigue creciendo
                // a su alrededor, hasta que se hace tan grande que el fade-out
                // (ver más abajo) la apaga entre 0.75 y 0.90 y queda el ring
                // como protagonista del "tunnel effect" (spec d-07→d-11).
                //
                // ANTES había un solo `t = (p4−0.20)/0.80` compartido por
                // scale y translate — eso hacía que la palabra no dejara de
                // moverse hasta el final (el bowl llegaba al centro casi al
                // 100% del recorrido en vez de al 50%). El bowl ahora llega
                // a tiempo y la escala puede seguir su curso sin arrastrar
                // la posición.
                //
                // t_move  : tiempo de movimiento, alcanza 1 a p4=0.50 y se
                //           queda allí (clamp01 lo mantiene en 1 hasta el final).
                // t_grow  : tiempo de crecimiento, alcanza 1 a p4=1.00.
                // t_fade  : tiempo de fade-out, va de 0 a 1 entre 0.75 y 0.90.
                const t_move = clamp01((p4 - 0.20) / 0.30);
                const t_grow = clamp01((p4 - 0.20) / 0.80);
                const eased_move = gsap.parseEase('power1.inOut')(t_move);
                const eased_grow = gsap.parseEase('power1.inOut')(t_grow);
                const s = 1 + (rsPortalTargetScale - 1) * eased_grow;

                // Posición ORIGINAL del bowl en screen coords (antes de
                // cualquier transform): svgRect.top-left + offset del bowl
                // dentro del display box del SVG. Es la posición "fija" que
                // se usa como origen de la interpolación hacia el centro.
                const bowlOrigX = rsSvgRect.left + rsPortalOriginX;
                const bowlOrigY = rsSvgRect.top  + rsPortalOriginY;

                // Matriz del transform con transform-origin BAKEADO en los
                // coeficientes e, f del propio <g> (NO en una CSS property
                // separada — el atributo `transform` del <g>` ignora
                // `transformOrigin`).
                //
                // IMPORTANTE sobre el sistema de coords del <g>:
                //   El <g> está dentro del <svg> cuyo viewBox es
                //   "0 viewBoxYStart viewBoxWidth viewBoxHeight" (con
                //   viewBoxYStart = -64.6 para alinear la baseline del texto
                //   SVG con la de los <span> adyacentes). El atributo
                //   `transform` del <g>` opera en las coords del viewBox
                //   (NO del display box del SVG), así que el punto de pivote
                //   debe darse en coords LOCALES del <g>` (= coords del
                //   viewBox = pUserCenterX, pUserCenterY), no en coords de
                //   display (pDisplayX, pDisplayY).
                //
                //   El mapeo entre coords es:
                //     viewBox  → display :  y_display = y_viewBox − viewBoxYStart
                //     display  → screen   :  y_screen  = svgRect.top + y_display
                //   Para X es directo (viewBoxXStart = 0).
                //
                // Fórmula: el bowl debe estar en
                //   lerp(bowlOrig, viewport_center, eased)
                // donde bowlOrig (en screen coords) es la posición original
                // del bowl antes del zoom:
                //   bowlOrigX = svgRect.left + pUserCenterX   (= svgRect.left + pDisplayX)
                //   bowlOrigY = svgRect.top  + pUserCenterY + (−viewBoxYStart)
                //             = svgRect.top  + pUserCenterY + 64.6
                //             = svgRect.top  + pDisplayY
                //
                // Cadena de mappings para llegar al bowl en screen coords:
                //   y_viewBox = s · pUserCenterY + f
                //   y_display = y_viewBox − viewBoxYStart = s·pUserCenterY + f + 64.6
                //   y_screen  = svgRect.top + y_display
                //             = svgRect.top + s·pUserCenterY + f + 64.6
                //
                // Despejando f de "y_screen = bowlOrigY + eased·(vh/2 − bowlOrigY)":
                //   f = bowlOrigY + eased·(vh/2 − bowlOrigY) − svgRect.top − s·pUserCenterY − 64.6
                //     = pDisplayY + eased·(vh/2 − svgRect.top − pDisplayY)
                //       − s·(pDisplayY − 64.6) − 64.6
                //     = pDisplayY·(1−s) + eased·(vh/2 − svgRect.top − pDisplayY)
                //       + 64.6·(s−1)
                //     = pDisplayY·(1−s) − viewBoxYStart·(1−s) + eased·(...)
                //     = pUserCenterY·(1−s) + eased·(vh/2 − svgRect.top − pDisplayY)
                //
                // Para X (viewBoxXStart = 0, no hay término de corrección):
                //   e = pUserCenterX·(1−s) + eased·(vw/2 − svgRect.left − pDisplayX)
                //
                // Como pUserCenterX = pDisplayX (viewBoxXStart=0) y
                // pUserCenterY = pDisplayY − viewBoxYStart, reescribimos en
                // términos de pDisplayX/Y (que SÍ están en scope module-level
                // vía rsPortalOriginX/Y) + SVG_VIEWBOX_Y_START.
                //
                // IMPORTANTE: e y f usan `eased_move` (no `eased_grow`).
                //   - eased_move se satura en 1 a partir de p4=0.50, así que
                //     la posición queda fija en (vw/2, vh/2) durante el resto
                //     del zoom (la palabra solo crece en su sitio).
                //   - `s` sigue aumentando con eased_grow, así que la
                //     palabra continúa escalándose de 1× a targetScale×.
                //
                // Verificación (en p4 ≥ 0.50, eased_move=1):
                //   e = rsPortalOriginX·(1−s) + (vw/2 − bowlOrigX)
                //   bowlScreenX = svgRect.left + s·pDisplayX + e
                //               = svgRect.left + s·pDisplayX + pDisplayX·(1−s) + vw/2 − bowlOrigX
                //               = svgRect.left + pDisplayX + vw/2 − (svgRect.left + pDisplayX)
                //               = vw/2 ✓ (bowl clavado en el centro,
                //                          independiente de s)
                //
                // Por qué se aplica via el ATRIBUTO transform del <g>` y NO
                // via la CSS property: el renderer SVG reprocesa el <text>
                // vectorialmente a cada frame (sin pixelación), exactamente
                // lo que evita el problema del HTML text con transform: scale()
                // (donde el browser rasteriza el texto a la resolución fuente
                // y luego estira el bitmap).
                const e = rsPortalOriginX * (1 - s) + eased_move * (window.innerWidth  / 2 - 65 - bowlOrigX);
                // pUserCenterY = pDisplayY + viewBoxYStart (NO − viewBoxYStart)
                // — la fórmula del viewBox es display_y = viewBox_y − viewBoxYStart,
                // despejando viewBox_y = display_y + viewBoxYStart. Con
                // viewBoxYStart = −64.6, pUserCenterY = pDisplayY − 64.6.
                const f = (rsPortalOriginY + SVG_VIEWBOX_Y_START) * (1 - s) + eased_move * (window.innerHeight / 2 - bowlOrigY);
                rsImpactoGroup.setAttribute(
                    'transform',
                    `matrix(${s} 0 0 ${s} ${e} ${f})`
                );
            } else if (rsImpactoGroup && rsPortalCaptured) {
                rsImpactoGroup.setAttribute('transform', 'matrix(1 0 0 1 0 0)');
                rsImpactoGroup.style.opacity = 1;
                rsPortalCaptured = false;
            }

            // ── 4.2 Testimonio: fade-in (0.50 → 0.65) con portal effect ──
            // clip-path:ellipse() sincronizado frame a frame con la forma
            // del anillo (mismo scale 1→5.0 power1.inOut, igualado al
            // ringScale de arriba). El testimonio se recorta visualmente
            // a la elipse del anillo, creando el efecto "portal" del
            // spec — el texto solo se ve "a través" de la forma del
            // anillo. Recalculamos el ringScale aquí porque el bloque
            // del anillo es independiente.
            if (rsQuote && p4 >= 0.50 && p4 < 0.75) {
                const quoteInP = clamp01((p4 - 0.50) / 0.15);
                const clipRingP = clamp01(p4 / 0.65);
                const clipRingEased = gsap.parseEase('power1.inOut')(clipRingP);
                const clipRingScale = 1.0 + (5.0 - 1.0) * clipRingEased;
                // Ring base 754×480 con border-radius 232px. El clip-path
                // usa porcentajes del bounding box del testimonio (que es
                // full-viewport), así que el 50% base coincide con el
                // tamaño natural de la elipse del anillo y escala junto
                // con él.
                const clipX = clipRingScale * 50;
                const clipY = clipRingScale * 50;
                gsap.set(rsQuote, {
                    opacity: quoteInP,
                    clipPath: `ellipse(${clipX}% ${clipY}% at 50% 50%)`,
                });
            }

            // ── 4.3 Testimonio: fade-out puro (0.75 → 0.85) ──
            // El clip-path se mantiene: la elipse del anillo aún existe
            // (su opacity es 1 durante toda la fase del testimonio), y
            // el texto se desvanece sin desplazamiento. Limpia el
            // clip-path al final para no dejarlo pegado si el usuario
            // navega atrás.
            if (rsQuote && p4 >= 0.75) {
                const quoteOutP = clamp01((p4 - 0.75) / 0.10);
                gsap.set(rsQuote, { opacity: 1 - quoteOutP });
            }

            // ── 4.4 Revelación de líneas de cierre con cortinilla (0.70 → 1.00) ──
            // Animación de cortinilla: clip-path del wrap se abre de abajo hacia
            // arriba (inset(100% 0 0 0) → inset(0 0 0 0)), sincronizado con el
            // translateY del line (70px → 0px). Usamos clip-path en lugar de
            // overflow:hidden para evitar el corte por sub-pixel rounding.
            // CLOSING_START=0.78 y CLOSING_STEP=0.075 para que las 3 líneas
            // completen su animación antes de p4=1.0 y no se encimen con el
            // párrafo del testimonio (retraso ~1s vs 0.70):
            //   Línea 0: 0.78 → 0.93 ✓
            //   Línea 1: 0.855 → 1.005 ≈ 1.0 ✓
            //   Línea 2: 0.93 → 1.08 ≈ 1.0 ✓
            const CLOSING_START = 0.78;
            const CLOSING_STEP  = 0.075; // stagger entre líneas
            rsClosingLines.forEach((line, i) => {
                const lineStart = CLOSING_START + i * CLOSING_STEP;
                const localP = clamp01((p4 - lineStart) / (CLOSING_STEP * 2));
                const eased = gsap.parseEase('power2.out')(localP);
                const wrap = rsClosingWraps[i];
                // clip-path: inset(top right bottom left) — top va de 100% a 0%
                gsap.set(wrap, { clipPath: `inset(${100 * (1 - eased)}% 0 0 0)` });
                gsap.set(line, { y: `${70 * (1 - eased)}px` });
            });

            // ─ 4.5 Escala dinámica del closing 
            // Cuando el closing es visible (p4 >= 0.80), calcular y aplicar
            // scale para que el contenido quepa completo sin cortarse.
            if (p4 >= 0.80) {
                updateClosingScale();
            }
        },
        onLeaveBack: () => {
            gsap.set(rsUsuariosWords, { opacity: 1 });
            if (rsRing) {
                gsap.set(rsRing, { opacity: 0, x: 0, y: 0, scale: 1, rotation: 0 });
            }
            if (rsImpactoGroup) {
                rsImpactoGroup.setAttribute('transform', 'matrix(1 0 0 1 0 0)');
                rsImpactoGroup.style.opacity = 1;
            }
            rsPortalCaptured = false;
            if (rsQuote) {
                gsap.set(rsQuote, { opacity: 0, clipPath: 'ellipse(50% 50% at 50% 50%)' });
            }
            gsap.set(rsClosingLines, { y: '70px' });
            gsap.set(rsClosingWraps, { clipPath: 'inset(100% 0 0 0)' });
            // Reset del closing scale
            if (rsClosingSection) {
                rsClosingSection.style.transform = 'scale(1)';
            }
            // Reset de .rs-testimonio a su estado oculto inicial
            // (opacity:0 / visibility:hidden), para que no tape las
            // secciones anteriores (Fases 1-3) al navegar hacia atrás.
            if (rsTestimonioSection) {
                gsap.set(rsTestimonioSection, { opacity: 0, visibility: 'hidden' });
            }
        },
        onLeave: () => {
            // estado final ya aplicado por el propio onUpdate en p4=1: título
            // invisible, testimonio invisible, cierre + CTA visibles y legibles.
        }
    });
}
