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

    const rsCenterCard = document.querySelector('.rs-mosaico__card--center');
    let rsCenterPromoted = false;
    let rsCenterRect = null;

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
                if (rsIntro) {
                    rsIntroEntryOffset = vh - rsIntro.offsetTop + RS_ENTRY_BUFFER;
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

            // ── Mosaico: entrada desde abajo, parallax diferenciado (0.20 → 0.65) ──
            // Todas las cards de un mismo grupo (short/tall) convergen
            // JUNTAS a offset 0 en p1=0.65, moviéndose siempre a la misma
            // velocidad entre sí (offset compartido, ver captura arriba)
            // — la diferencia de velocidad es SOLO entre grupos (short
            // vs tall), nunca entre cards del mismo grupo. Puro
            // translateY, sin fade: arrancan completamente debajo del
            // viewport.
            const gridP = clamp01((p1 - 0.20) / (0.65 - 0.20));
            const gridEased = gsap.parseEase('power2.out')(gridP);
            rsCards.forEach((card) => {
                // La card central promovida ya no es parte del grid: evita
                // pelear con el transform del bloque de aislamiento.
                if (card === rsCenterCard && rsCenterPromoted) return;
                const offset = rsGroupOffset[card.dataset.size] || vh;
                gsap.set(card, { y: offset * (1 - gridEased) });
            });

            // ── Aislamiento + escala exponencial de la card central (0.80 → 1.00) ──
            if (rsCenterCard) {
                if (p1 >= 0.80) {
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
                        rsCenterPromoted = true;
                        forceRepaint();
                    }
                    const scaleP = clamp01((p1 - 0.80) / 0.20);
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
                } else if (rsCenterPromoted) {
                    // Reversa: si el usuario sube antes de p1=0.80, se
                    // restaura el layout normal del grid. clearProps (NO
                    // width/height:'100%' fijo): un width/height inline
                    // le gana a la regla CSS aspect-ratio:3/4 que hace
                    // que esta card mida igual que col1/5 — con
                    // clearProps el estilo inline desaparece del todo y
                    // manda de nuevo el aspect-ratio de la clase CSS.
                    gsap.set(rsCenterCard, {
                        clearProps: 'position,top,left,width,height,margin,zIndex,borderRadius',
                    });
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
                rsCenterPromoted = false;
                rsCenterRect = null;
                forceRepaint();
            }
        },
        onLeave: () => {
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: 0 }); }
        }
    });
}
