// ============================================
// CASO ASDEPORTE — SECCIÓN 1: Apertura
// GSAP + ScrollTrigger se cargan como globals desde CDN (ver <head>)
// ============================================

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // Referencias DOM
    // ============================================
    const apertura = document.querySelector('.cs-apertura');
    const video = document.querySelector('.cs-apertura__video');
    const overlay = document.querySelector('.cs-apertura__overlay');
    const shadow = document.querySelector('.cs-apertura__shadow');
    const ticker = document.querySelector('.cs-apertura__ticker');
    const words = document.querySelectorAll('.cs-ticker__word');
    const tracks = document.querySelectorAll('.cs-ticker__track');
    const metrica = document.querySelector('.cs-metrica');

    // Flag de la animación de la métrica — se dispara desde el cruce vertical
    // (sub-paso 3.5) cuando la métrica se ancla al final del cruce.
    // Declarado aquí para que esté en scope del onUpdate del ST de apertura
    // (línea ~120) y del onLeaveBack del ST #2 de la métrica.
    let metricaAnimated = false;

    // Flag del trazado de la flecha de Contexto — se dispara desde el pin de
    // Shift (sub-paso 4) cuando localP >= 1 en forward. Se resetea en la
    // reversa (direction === -1) cuando la flecha ya está fuera de foco
    // (opacidad <= 0.05) — análogo al reset invisible de la métrica.
    let contextoArrowAnimated = false;

    const VIDEO_DURATION_FALLBACK = 3;

    // ============================================
    // Funciones de utilidad
    // ============================================

    // video.duration puede ser NaN si los metadatos no cargaron a tiempo
    function getVideoDuration() {
        return (video.duration && !isNaN(video.duration)) ? video.duration : VIDEO_DURATION_FALLBACK;
    }

    // ============================================
    // Fase 1 — automática al cargar (no depende del scroll)
    // ============================================

    // Marca cuándo termina la animación inicial del video (Fase 1),
    // para que la Fase 2 no la sobrescriba al crear el ScrollTrigger
    let fase1Done = false;

    // Ticker continuo — se anima el contenedor completo por -trackWidth.
    // Con dos tracks idénticos en flex, al llegar a x=-trackWidth el visual es
    // idéntico al inicio (x=0), haciendo el reset de repeat:-1 invisible.
    const trackWidth = tracks[0].offsetWidth;
    const tickerTween = gsap.to(ticker, {
        x: -trackWidth,
        duration: 10,
        ease: 'none',
        repeat: -1,
        paused: true
    });

    function playFase1() {
        const videoDuration = getVideoDuration();

        const fase1 = gsap.timeline();

        fase1
            // 1. Fade in de la sección — negro total desaparece
            .to(apertura, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0)
            // 1b. El overlay sólido se disuelve lentamente, como un amanecer
            .to(overlay, { opacity: 0.35, duration: 3, ease: 'power1.inOut' }, 0)
            // 2. En paralelo, avanza video.currentTime manualmente vía el ticker de GSAP
            .to(video, { currentTime: videoDuration, duration: videoDuration / 1.5, ease: 'none' }, 0)
            // 3. Las palabras suben con stagger
            .addLabel('wordsStart', '-=2')
            .to(words, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out'
            }, 'wordsStart')
            // 4. Arranca el ticker horizontal — mismo momento que las palabras
            .add(() => tickerTween.play(), 'wordsStart')
            // 5. Marca la Fase 1 como completa
            .add(() => { fase1Done = true; });
    }

    // ============================================
    // Fase 2 — controlada por scroll (Fase 3 es su reverso vía scrub)
    // Migrado a pin por sección en sub-paso 3 (corrección final):
    //   - trigger: .cs-apertura (la apertura misma)
    //   - pin: true (pineamos el trigger, que es la apertura)
    //   - pinSpacing: true (añade 100vh al flujo, sin transform residual
    //     como tenía el modelo original con pinSpacing: false + end: '+=200%')
    //   - end: 'bottom top' (100vh, igual a la altura de la apertura)
    // El onUpdate se mantiene exacto — todas las animaciones son
    // función del progress 0→1 sobre el rango de scroll del pin.
    // NOTA: el rango de scroll del pin cambió de 200vh (con '+=200%') a
    // 100vh (con 'bottom top'). Las animaciones internas (ticker, video,
    // sombra) se ejecutan sobre 100vh en lugar de 200vh, lo que cambia
    // su velocidad. Esto se calibrará en sub-paso 5 si se desea otra
    // velocidad. La prioridad ahora es eliminar el transform residual.
    // ============================================
    function initScrollPhase() {
        ScrollTrigger.create({
            trigger: '.cs-apertura',
            pin: true,
            pinSpacing: true,
            pinType: 'fixed',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const videoDuration = getVideoDuration();
                const direction = self.direction; // 1 = hacia abajo, -1 = hacia arriba
                const velocity = Math.abs(self.getVelocity());

                // 1. Ticker: avanza con scroll down, retrocede con scroll up
                // Cancelar cualquier tween de recuperación previo
                gsap.killTweensOf(tickerTween);

                if (direction === 1) {
                    // Scroll hacia abajo — acelera hacia la izquierda
                    tickerTween.timeScale(1 + (velocity / 500));
                } else if (direction === -1) {
                    // Scroll hacia arriba — retrocede brevemente hacia la derecha
                    tickerTween.timeScale(-(velocity / 800));
                }

                // Siempre programar recuperación a timeScale 1 después de 0.15s sin scroll
                gsap.delayedCall(0.15, () => {
                    gsap.to(tickerTween, { timeScale: 1, duration: 0.6, ease: 'power2.out' });
                });

                // Ticker sube con scroll down
                gsap.set(ticker, { y: -(progress * window.innerHeight * 1.2) });

                // 2. Video en reversa — atleta voltea hacia arriba — desde el inicio
                // (solo una vez que la animación inicial de la Fase 1 terminó)
                if (fase1Done) {
                    video.currentTime = videoDuration * (1 - progress);
                }

                // 3. Sombra crece desde abajo
                gsap.set(shadow, { opacity: Math.pow(progress, 0.3) });

                // 4. Cobertura total al final
                if (progress > 0.85) {
                    const finalCover = (progress - 0.85) / 0.15;
                    gsap.set(shadow, { opacity: Math.min(1, Math.pow(progress, 0.3) + finalCover) });
                }

                // 5. Cruce vertical — último 25% del pin (progress 0.75 → 1.0).
                // La métrica entra desde abajo (y: 100vh → 0) mientras la
                // apertura sale por arriba (y: 0 → -100vh). animateMetrica()
                // se dispara al final del cruce, cuando la métrica se ancla.
                //
                // Reset: dispara SOLO al inicio de una entrada forward al cruce
                // (crossProgress cruza 0 desde abajo en dirección +1), NO en
                // la reversa. Esto garantiza que la métrica mantenga su "25%",
                // flecha y texto intactos durante toda la reversa. El reset es
                // invisible — ocurre cuando la métrica está en y: 100vh.
                if (progress >= 0.75) {
                    const crossProgress = (progress - 0.75) / 0.25;
                    gsap.set(metrica, { y: (1 - crossProgress) * window.innerHeight });
                    gsap.set(apertura, { y: -crossProgress * window.innerHeight });

                    if (crossProgress >= 1 && !metricaAnimated) {
                        // Forward: la métrica se ancla al final del cruce.
                        metricaAnimated = true;
                        animateMetrica();
                    } else if (crossProgress <= 0.05 && metricaAnimated && self.direction === 1) {
                        // Forward entry: el usuario entra al cruce después de
                        // un reverse. La métrica aún tiene "25%" del ciclo
                        // anterior — reset invisible: el KPI está en el centro
                        // vertical del panel (~50vh desde el top), y a
                        // crossProgress <= 0.05 el panel está a y >= 95vh, con
                        // el KPI debajo del viewport. La tolerancia amplia
                        // (0.05) absorbe los saltos de frame del smooth scroll.
                        resetMetrica();
                    }
                } else {
                    gsap.set(metrica, { y: window.innerHeight });
                    // Apertura vuelve a y: 0 (su sitio natural durante el pin).
                    gsap.set(apertura, { y: 0 });
                }
            },
            onLeave: () => {
                // Limpia el transform residual que GSAP deja al terminar el pin.
                // Con pinType: 'fixed' + pinSpacing: true, GSAP setea un
                // transform translate(0, pinRange) en el inline style que
                // mantiene la apertura visible en el viewport más allá de
                // lo deseado. Reseteamos manualmente.
                gsap.set(apertura, { clearProps: 'transform' });
            },
            onLeaveBack: () => {
                // Mismo reset al hacer scroll reverso saliendo del pin.
                gsap.set(apertura, { clearProps: 'transform' });
            }
        });
    }

    // ============================================
    // Inicialización
    // ============================================
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');
    video.pause();
    video.currentTime = 0;

    gsap.set(words, { y: window.innerHeight, opacity: 1 });
    gsap.set(overlay, { opacity: 1 });
    // La métrica ahora es el primer panel del track horizontal — su entrada
    // la orquestan el cruce vertical (sub-paso 3.5) y animateMetrica.
    // Posición inicial: 100vh por debajo del viewport para que entre desde
    // abajo durante el cruce.
    gsap.set(metrica, { y: window.innerHeight });
    gsap.set(ticker, { willChange: 'transform' });
    gsap.set(tracks, { willChange: 'transform' });

    playFase1();
    // initScrollPhase() se llama al FINAL del script (línea ~610).
    // Razón: ScrollTrigger dispara onUpdate durante init() para establecer
    // el estado inicial. Si se llama aquí, animateMetrica() y resetMetrica()
    // fallan con temporal dead zone porque metricaNumber/trackInner/etc.
    // se declaran más abajo en este mismo bloque síncrono.

    // ============================================
    // Sección 2 — Métrica: secuencia de entrada
    // ============================================
    const metricaNumber = document.querySelector('.cs-metric');
    const metricaText = document.querySelector('.cs-metrica__left p');
    const metricaArrow = document.querySelector('.cs-metrica__arrow');
    const arrowMain = document.querySelector('.cs-metrica__arrow-main');
    const arrowTips = document.querySelectorAll('.cs-metrica__arrow-tip');
    const arrowPaths = [arrowMain, ...arrowTips];
    const arrowCaps = document.querySelectorAll('.cs-metrica__arrow-cap');
    const arrowFillet = document.querySelector('.cs-metrica__arrow-fillet');
    const arrowDecorations = [arrowFillet, ...arrowCaps];
    const pathLengths = arrowPaths.map(p => p.getTotalLength());

    // Estado inicial
    metricaNumber.textContent = '0%';
    gsap.set(metricaArrow, { opacity: 0 });
    gsap.set(metricaText, { opacity: 0 });
    gsap.set(arrowDecorations, { opacity: 0 });
    arrowPaths.forEach((p, i) => {
        p.style.strokeDasharray = pathLengths[i];
        p.style.strokeDashoffset = pathLengths[i];
    });

    // Guarda el texto original antes de manipular el innerHTML
    metricaText.setAttribute('data-original-text', metricaText.textContent);

    function animateMetrica() {
        // Fija el espacio del KPI para evitar reflow durante la animación
        gsap.set('.cs-metrica__kpi', { height: 'auto' });

        // Reset estado inicial
        metricaNumber.textContent = '0%';
        gsap.set(arrowPaths, { strokeDashoffset: (i) => pathLengths[i] });
        gsap.set(metricaText, { opacity: 0 });
        gsap.set(metricaArrow, { opacity: 0 });
        gsap.set(arrowDecorations, { opacity: 0 });

        // Regenerar palabras con máscara
        const words = metricaText.getAttribute('data-original-text').trim().split(' ');
        metricaText.innerHTML = words.map(w =>
            `<span class="cs-metrica__word-wrapper"><span class="cs-metrica__word" style="display:inline-block;transform:translateY(100%)">${w}&nbsp;</span></span>`
        ).join('');

        // 1. Fade in del número en paralelo con el contador
        const tl = gsap.timeline();

        tl
            .to(metricaNumber, { opacity: 1, duration: 1.2, ease: 'power2.out' }, 0)
            .add(() => {
                // 2. Contador arranca 0.3s después del inicio del fade in
                const counter = { value: 0 };
                gsap.to(counter, {
                    value: 25,
                    duration: 0.8,
                    ease: 'power2.out',
                    onUpdate: () => {
                        metricaNumber.textContent = Math.round(counter.value) + '%';
                    },
                    onComplete: () => {
                        // 3. Flecha y texto arrancan simultáneamente
                        gsap.set(metricaArrow, { opacity: 1 });
                        gsap.set(metricaText, { opacity: 1 });

                        const tlReveal = gsap.timeline();
                        tlReveal
                            // 1. Diagonal
                            .to(arrowMain, {
                                strokeDashoffset: 0,
                                duration: 0.5,
                                ease: 'power2.out'
                            }, 0)
                            // 2. Cuña de la esquina aparece justo cuando arrancan los segmentos
                            .to(arrowFillet, {
                                opacity: 1,
                                duration: 0.05
                            }, '>')
                            // 3. Segmentos de la punta salen desde la esquina
                            .to(arrowTips, {
                                strokeDashoffset: 0,
                                duration: 0.3,
                                ease: 'power2.out'
                            }, '<')
                            // 4. Los círculos exteriores aparecen cuando los segmentos terminan
                            .to(arrowCaps, {
                                opacity: 1,
                                duration: 0.05
                            }, '>-0.05')
                            .to('.cs-metrica__word', {
                                y: 0,
                                duration: 0.5,
                                stagger: 0.04,
                                ease: 'power3.out'
                            }, 0);
                    }
                });
            }, 0.3);
    }

    // ============================================
    // Sección 2 — Línea-cometa controlada por scroll
    // Recorre de Métrica (55%w, h+50) hasta Contexto (170%w, 15%h)
    // con prioridad de desplazamiento horizontal sobre vertical.
    // ============================================
    const cometPath = document.querySelector('.cs-metrica__comet-path');
    const cometHead = document.querySelector('.cs-metrica__comet-head');
    const cometGradient = document.querySelector('#comet-gradient');

    let cometStartX, cometStartY, cometLength;

    function ajustarRutaCometa() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const offsetX = 260;

    cometStartX = w * 0.30 + offsetX;
    cometStartY = h + 50;

    const d = `M ${cometStartX} ${cometStartY}
               C ${w * 0.30 + offsetX} ${h * 0.93}, ${w * 0.31 + offsetX} ${h * 0.78}, ${w * 0.38 + offsetX} ${h * 0.79}
               C ${w * 0.48 + offsetX} ${h * 0.79}, ${w * 0.55 + offsetX} ${h * 0.79}, ${w * 0.59 + offsetX} ${h * 0.70}
               C ${w * 0.62 + offsetX} ${h * 0.61}, ${w * 0.68 + offsetX} ${h * 0.49}, ${w * 0.77 + offsetX} ${h * 0.48}
               C ${w * 0.86 + offsetX} ${h * 0.46}, ${w * 0.94 + offsetX} ${h * 0.43}, ${w * 0.96 + offsetX} ${h * 0.30}
               C ${w * 0.98 + offsetX} ${h * 0.17}, ${w * 1.08 + offsetX} ${h * 0.13}, ${w * 1.11 + offsetX} ${h * 0.13}
               C ${w * 1.14 + offsetX} ${h * 0.13}, ${w * 1.24 + offsetX} ${h * 0.08}, ${w * 1.27 + offsetX} ${h * -0.05}`;

    cometPath.setAttribute('d', d);
    cometLength = cometPath.getTotalLength();
    updateCometTrail(0);
}

    function updateCometTrail(progress) {
        const length = cometLength;
        const maxTailLength = length * 0.45;

        if (progress < 0.45) {
            // Fase 1 — crecimiento desde el punto de inicio (abajo del viewport)
            const visibleSegment = length * progress;
            cometPath.style.strokeDasharray = `${visibleSegment} ${length}`;
            cometPath.style.strokeDashoffset = 0;
            cometPath.style.opacity = 1;
        } else if (progress < 0.90) {
            // Fase 2 — estela de longitud fija que sigue a la cabeza
            cometPath.style.strokeDasharray = `${maxTailLength} ${length}`;
            cometPath.style.strokeDashoffset = -(length * progress - maxTailLength);
            cometPath.style.opacity = 1;
        } else {
            // Fase 3 — desvanecimiento al terminar la ruta
            const fadeProgress = (progress - 0.90) / 0.10;
            const remainingSegment = maxTailLength * (1 - fadeProgress);
            cometPath.style.strokeDasharray = `${remainingSegment} ${length}`;
            cometPath.style.strokeDashoffset = -(length * progress - remainingSegment);
            cometPath.style.opacity = 1 - fadeProgress;
        }

        // Cabeza del cometa — posición sobre el path según el progress del scroll
        const headPoint = cometPath.getPointAtLength(length * progress);
        cometHead.setAttribute('cx', headPoint.x);
        cometHead.setAttribute('cy', headPoint.y);

        // Coordenadas dinámicas del gradiente — siguen a la cabeza y cola
        if (progress < 0.45) {
            cometGradient.setAttribute('x1', cometStartX);
            cometGradient.setAttribute('y1', cometStartY);
        } else {
            const tailProgress = length * progress - maxTailLength;
            const tailPoint = cometPath.getPointAtLength(Math.max(tailProgress, 0));
            cometGradient.setAttribute('x1', tailPoint.x);
            cometGradient.setAttribute('y1', tailPoint.y);
        }
        cometGradient.setAttribute('x2', headPoint.x);
        cometGradient.setAttribute('y2', headPoint.y);
    }

    ajustarRutaCometa();
    window.addEventListener('resize', ajustarRutaCometa);

    // Reset reversible de la métrica — reutilizable desde el ScrollTrigger del
    // track (onLeaveBack). Antes vivía inline en el ST propio de la métrica.
    function resetMetrica() {
        metricaAnimated = false;
        gsap.killTweensOf([...arrowPaths, metricaText, metricaNumber]);
        gsap.killTweensOf('.cs-metrica__word');
        gsap.killTweensOf(arrowDecorations);
        metricaNumber.textContent = '0%';
        gsap.set(arrowPaths, { strokeDashoffset: (i) => pathLengths[i] });
        gsap.set(metricaText, { opacity: 0 });
        gsap.set(metricaArrow, { opacity: 0 });
        gsap.set(arrowDecorations, { opacity: 0 });
    }

    // Reset reversible de la flecha de Contexto — análogo a resetMetrica().
    // Lo llama el pin de Shift durante la reversa cuando la flecha ya está
    // fuera de foco (opacidad <= 0.05 por la entrada escalonada). El usuario
    // no ve el "borrado" porque ocurre cuando la flecha ya es invisible.
    function resetContextoArrow() {
        contextoArrowAnimated = false;
        gsap.killTweensOf([arrowLine, arrowTip, arrowCap]);
        gsap.set(arrowLine, { strokeDashoffset: -lineLength });
        gsap.set(arrowTip,  { strokeDashoffset: tipLength });
        gsap.set(arrowCap,  { opacity: 0 });
    }

    // ============================================
    // Sección 3 — Contexto: flecha curva animada
    // ============================================
    const arrowLine = document.querySelector('.cs-contexto__arrow-line');
    const arrowTip = document.querySelector('.cs-contexto__arrow-tip');
    const arrowCap = document.querySelector('.cs-contexto__arrow-cap');

    // Setup: calcular longitud real de cada path
    const lineLength = arrowLine.getTotalLength();
    const tipLength = arrowTip.getTotalLength();

    // El "d" de arrow-line va del extremo de la punta hacia el título;
    // dashoffset negativo invierte el sentido de trazado (título → punta)
    arrowLine.style.strokeDasharray = lineLength;
    arrowLine.style.strokeDashoffset = -lineLength;
    arrowTip.style.strokeDasharray = tipLength;
    arrowTip.style.strokeDashoffset = tipLength;
    gsap.set(arrowCap, { opacity: 0 });

    // Función de animación reutilizable
    function animateContextoArrow() {
        gsap.set(arrowLine, { strokeDashoffset: -lineLength });
        gsap.set(arrowTip, { strokeDashoffset: tipLength });
        gsap.set(arrowCap, { opacity: 0 });

        const tl = gsap.timeline();
        tl
            // 1. La línea curva se traza primero — desde el título hacia la punta
            .to(arrowLine, {
                strokeDashoffset: 0,
                duration: 1.4,
                ease: 'power3.out'
            })
            // 2. La punta se traza justo antes de que termine la línea — fluido y continuo
            .to(arrowTip, {
                strokeDashoffset: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.2')
            // 3. Restituye el cap redondo del extremo final de la punta
            .to(arrowCap, {
                opacity: 1,
                duration: 0.1
            }, '>-0.05');
    }

    // ============================================
    // Sección 3 — Contexto: pintado palabra por palabra + desplazamiento
    // (Opción A — el desplazamiento sigue al pintado como un solo gesto)
    // ============================================

    // Color tenue (#5C5C5C) → claro (#C0C0C0): rgb(92,92,92) → rgb(192,192,192)
    const WORD_COLOR_FROM = 92;
    const WORD_COLOR_TO = 192;

    // Envuelve cada palabra de los 4 párrafos en un <span>, preservando la
    // separación entre párrafos. Guarda el texto original por si hay que regenerar.
    function buildContextoWords() {
        const maskParagraphs = document.querySelectorAll('.cs-contexto__mask p');

        maskParagraphs.forEach((p) => {
            // Evita re-envolver si ya se construyó (idempotente)
            if (p.querySelector('.cs-contexto__word')) return;

            p.setAttribute('data-original-text', p.textContent.trim());
            const words = p.textContent.trim().split(/\s+/);
            p.innerHTML = words
                .map((w) => `<span class="cs-contexto__word">${w}</span>`)
                .join(' ');
        });

        return document.querySelectorAll('.cs-contexto__word');
    }

    const contextoWords = buildContextoWords();

    // Desplazamiento del texto dentro de la máscara — calculado en runtime
    // porque el alto del contenido depende del ancho de la columna (clamp).
    const mask = document.querySelector('.cs-contexto__mask');
    const textTrack = document.querySelector('.cs-contexto__text-track');
    const getTextScrollAmount = () =>
        textTrack ? Math.max(0, textTrack.scrollHeight - mask.clientHeight) : 0;

    // Cuánto se pinta antes de que el texto empiece a moverse (ajustable).
    // ~0.35 ≈ primer párrafo + medio segundo, que es lo que cabe en los 400px.
    const SCROLL_THRESHOLD = 0.35;

    // Elementos de la columna izquierda — animación de entrada
    const contextoLabel = document.querySelector('.cs-label');
    const contextoTitle = document.querySelector('.cs-section-title');
    const contextoMedia = document.querySelector('.cs-contexto__media');
    const contextoTags = document.querySelector('.cs-contexto__tags');
    // Flecha curva de Contexto — entra junto a los demás elementos de la
    // columna izquierda vía renderContextoEntrada (rango 0.55 → 0.75).
    const contextoArrow = document.querySelector('.cs-contexto__arrow');

    // Función de easing power2.out personalizada
    function power2Out(t) {
        return 1 - Math.pow(1 - t, 2);
    }

    // Clamp helper
    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    // Pinta + desplaza el texto para un progreso dado [0..1].
    // getTextScrollAmount() se consulta en vivo, así se adapta a cada ancho.
    function renderContexto(progress) {
        const totalWords = contextoWords.length;
        const wordsToLight = progress * totalWords;

        // 1. Pintado — la ola de luz recorre el texto en orden de lectura
        contextoWords.forEach((word, i) => {
            // Solape suave: cada palabra se enciende cuando el frente la alcanza
            const clamped = Math.max(0, Math.min(1, wordsToLight - i));
            const channel = Math.round(
                WORD_COLOR_FROM + clamped * (WORD_COLOR_TO - WORD_COLOR_FROM)
            );
            word.style.color = `rgb(${channel}, ${channel}, ${channel})`;
        });

        // 2. Desplazamiento — arranca tras el umbral y sigue el progreso
        if (progress > SCROLL_THRESHOLD) {
            const scrollProgress =
                (progress - SCROLL_THRESHOLD) / (1 - SCROLL_THRESHOLD);
            gsap.set(textTrack, { y: -getTextScrollAmount() * scrollProgress });
        } else {
            gsap.set(textTrack, { y: 0 });
        }

    }

    // ============================================
    // Entrada escalonada de los elementos de la columna izquierda de Contexto.
    // Se llama desde el TRAMO 2 (trackProgress 0.25 → 0.45) para que los
    // elementos entren mientras la cometa recorre los últimos 2/3 de su ruta.
    // ============================================
    function renderContextoEntrada(trackProgress) {
        // Mapear trackProgress [0.25 → 0.45] a contextoProgress [0.00 → 0.70]
        const contextoProgress = ((trackProgress - 0.25) / 0.20) * 0.70;

        const elementos = [
            { el: contextoLabel, start: 0.00, end: 0.25 },
            { el: contextoTitle, start: 0.15, end: 0.40 },
            { el: contextoMedia, start: 0.30, end: 0.55 },
            { el: contextoTags,  start: 0.45, end: 0.70 },
            { el: contextoArrow, start: 0.55, end: 0.75 }
        ];

        elementos.forEach(({ el, start, end }) => {
            if (!el) return;
            const localProgress = clamp((contextoProgress - start) / (end - start), 0, 1);
            const easedProgress = power2Out(localProgress);
            gsap.set(el, {
                opacity: easedProgress,
                x: 60 * (1 - easedProgress)
            });
        });
    }

    // ============================================
    // Sub-paso 2 — Pin de Métrica
    // Pino el .cs-pin-spacer--metrica. Mientras está pineado:
    //   - la cometa avanza 0 → 0.40 de su recorrido
    //   - el trackInner.x se mantiene en 0 (la Métrica no se desplaza)
    //   - los elementos de Contexto se mantienen ocultos (los animan los
    //     pins de Shift y Contexto en sub-pasos 3-4)
    // Nota: animateMetrica() ya NO se dispara aquí — lo dispara el cruce
    // vertical del ST de apertura (sub-paso 3.5) cuando la métrica se ancla.
    // El onLeaveBack se mantiene como respaldo idempotente: si el usuario
    // entra y sale del pin sin pasar por el cruce (caso edge), resetea.
    // ============================================
    const trackInner = document.querySelector('.cs-horizontal-track__inner');

    // ============================================
    // Sub-paso 5 — Cálculo de layout del Shift
    // Aplica la altura calculada del Shift ANTES de que se cree el
    // ScrollTrigger del Shift, para que GSAP lea la altura correcta al
    // crear el wrapper. La altura se recalcula en refreshInit (para
    // resize) y se protege con !important para sobrevivir resets de
    // estilos inline de GSAP en refreshes.
    // ============================================
    const contextoEl = document.querySelector('.cs-contexto');
    const shiftSpacer = document.querySelector('.cs-pin-spacer--shift-mc');
    const contextoSpacer = document.querySelector('.cs-pin-spacer--contexto');
    const aperturaEl = document.querySelector('.cs-apertura');
    const metricaSpacer = document.querySelector('.cs-pin-spacer--metrica');

    function calculateShiftLayout() {
        const contextoWidth = contextoEl.offsetWidth;
        const overflow = Math.max(0, contextoWidth - window.innerWidth);
        // pinHeight: velocidad 0.667 px-desplazamiento/px-scroll.
        const pinHeightPx = Math.round((overflow + window.innerWidth) / 0.667);
        // Aplicar la altura con !important para sobrevivir resets de GSAP.
        // max-height también porque GSAP lo pone en el inline style.
        shiftSpacer.style.setProperty('height', pinHeightPx + 'px', 'important');
        shiftSpacer.style.setProperty('max-height', pinHeightPx + 'px', 'important');
        // Starts contiguos: leídos del DOM en este momento, no números.
        const aperturaEnd = aperturaEl.offsetHeight;
        const metricaHeight = metricaSpacer.offsetHeight;
        // metricaStart = fin de apertura → ancla el ST de Métrica a la misma
        // fuente que el Shift, evitando que GSAP lo re-mida con un literal
        // 'top top' y rompa la contigüidad tras un refresh.
        const metricaStart = aperturaEnd;
        const shiftStart = aperturaEnd + metricaHeight;
        const shiftEnd = shiftStart + pinHeightPx;
        const contextoStart = shiftEnd;
        // Posición final del track inner cuando 7a termina (track.x en progress=1).
        // Misma fórmula que 7a usa internamente en su onUpdate, pero expuesta
        // aquí para que el ST de la cortina (sub-paso 7b) la lea del módulo
        // sin recalcular offsetWidth por frame.
        const decisionesFinalX = -(window.innerWidth + contextoEl.offsetWidth);
        return {
            pinHeightPx, contextoWidth, overflow,
            metricaStart,
            shiftStart, shiftEnd, contextoStart,
            decisionesFinalX
        };
    }

    // Aplicar ANTES de crear el ST del Shift, para que GSAP lea la altura correcta.
    calculateShiftLayout();

    // Variable de módulo: pre-calculada en refreshInit (sub-paso 5, línea ~925).
    // El ST de la cortina (sub-paso 7b) lee este valor en cada onUpdate SIN
    // recalcular window.innerWidth ni contextoEl.offsetWidth — eso evita
    // los saltos post-refresh que causaba recalcular por frame.
    let decisionesFinalX = calculateShiftLayout().decisionesFinalX;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--metrica',
        // start/end como funciones que leen de calculateShiftLayout() — la
        // MISMA fuente que el ST del Shift. Anclaje determinista: metrica.end
        // lee el mismo campo que shift.start, así son idénticos por
        // construcción (no por coincidencia de timing). Sobrevive a
        // cualquier refresh sin abrir el gap.
        start: () => calculateShiftLayout().metricaStart,
        end: () => calculateShiftLayout().shiftStart,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            // [FIX] ScrollTrigger.refresh() hace obj(0) internamente para
            // re-medir pines. Eso dispara este onUpdate con scrollY:0 y
            // progress=1.0 espurio, haciendo que la cometa salte a su estado
            // final durante el refresh. isRefreshing=true durante el refresh
            // y =2 en el _updateAll(2) final (ambos truthy → capturados).
            if (ScrollTrigger.isRefreshing) return;
            const localP = self.progress;
            // [Salvaguarda] Filtra frames espurios donde scrollY está fuera
            // del rango del ST (p.ej. scrollRestoration pone scrollY=0
            // mientras el usuario está en Métrica con scrollY=1024). Sin esto,
            // la cometa salta al estado calculado con scrollY falso.
            if (window.scrollY < self.start) return;
            // [FIX carrera] La cometa no dibuja hasta que el contador haya
            // arrancado (metricaAnimated). Esta bandera se setea en un solo
            // lugar: el onUpdate del ST de Apertura cuando crossProgress >= 1.
            // Antes la cometa dependía de localP (vía B), que se desincronizaba
            // del contador (vía A) cuando un ScrollTrigger.refresh() re-evaluaba
            // los STs en momentos distintos al cargar assets. Ahora cometa y
            // contador comparten la misma variable determinista.
            if (!metricaAnimated) {
                cometPath.style.strokeDasharray = `0 ${cometLength}`;
                return;
            }
            // Trackinner quieto: la Métrica no se desplaza horizontalmente
            gsap.set(trackInner, { x: 0 });
            // Cometa: primera mitad (0 → 0.40). La segunda mitad (0.40 → 1.0)
            // se anima desde el pin de Shift en sub-paso 4.
            updateCometTrail(localP * 0.40);
            // Elementos de Contexto: estado inicial oculto. Los animan los
            // pins de Shift (entrada slide-in) y Contexto (pintado) en
            // sub-pasos 3-4. Si el usuario entra y sale del pin de Métrica
            // varias veces, los dejamos en estado oculto para que no
            // aparezcan prematuramente. La flecha (contextoArrow) también
            // se incluye para que esté en un estado conocido al entrar al
            // pin de Shift.
            [contextoLabel, contextoTitle, contextoMedia, contextoTags, contextoArrow].forEach(el => {
                if (el) gsap.set(el, { opacity: 0, x: 120 });
            });
        },
        onLeaveBack: () => {
            // No-op: el reset ahora se dispara en el forward entry del cruce
            // (ST de apertura, sub-paso 3.5), no en la reversa. Esto garantiza
            // que la métrica mantenga su "25%" intacto durante toda la reversa.
        }
    });

    // ============================================
    // Sub-paso 4 — Pin de Shift M→C
    // Pino el .cs-pin-spacer--shift-mc. Mientras está pineado:
    //   - el trackInner.x se desplaza de 0 a -100vw (Métrica sale por la
    //     izquierda, Contexto entra por la derecha)
    //   - la cometa completa su segunda mitad (0.40 → 1.0) cruzando de
    //     Métrica a Contexto
    //   - los elementos de Contexto (label, title, media, tags, flecha)
    //     hacen su entrada escalonada vía renderContextoEntrada(localP)
    //   - animateContextoArrow() se dispara una vez al final del pin
    //     (localP >= 1, forward) — gobernado por contextoArrowAnimated
    //   - en reversa, resetContextoArrow() se llama cuando la flecha ya
    //     está fuera de foco (opacidad <= 0.05), análogo al reset
    //     invisible de la métrica. El usuario nunca ve el "borrado".
    // ============================================

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--shift-mc',
        // Starts contiguos: el Shift arranca exactamente donde termina
        // el pin de Métrica. Lectura del DOM vía calculateShiftLayout().
        start: () => calculateShiftLayout().shiftStart,
        end: () => calculateShiftLayout().shiftEnd,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            // [FIX] Mismo problema que Métrica: obj(0) interno del refresh
            // haría saltar la cometa (2ª mitad) y el trackInner.x. El guard
            // descarta el frame espurio; el _updateAll(2) final del refresh
            // dispara el onUpdate real con scrollY restaurado.
            if (ScrollTrigger.isRefreshing) return;
            const localP = self.progress;

            // 1. Desplazamiento horizontal del track
            //    Fórmula dinámica: parte de 0 (Métrica en foco, como la
            //    deja su pin) y llega a -max(viewport, contexto.offsetWidth)
            //    para alinear el borde derecho del panel Contexto con el
            //    borde derecho del viewport. Si el Contexto ya cabe, el
            //    target es -window.innerWidth (no se desplaza de más).
            const finalX = -Math.max(window.innerWidth, contextoEl.offsetWidth);
            gsap.set(trackInner, { x: localP * finalX });

            // 2. Cometa: segunda mitad (0.40 → 1.0)
            updateCometTrail(0.40 + localP * 0.60);

            // 3. Entrada escalonada de los elementos de Contexto
            //    (label, title, media, tags, flecha)
            renderContextoEntrada(localP);

            // 4. Reset del flag en reversa — fuera de foco
            //    La flecha ya está invisible (opacity <= 0.05 por la
            //    entrada escalonada), así que el reset de los dashoffsets
            //    ocurre sin que el usuario lo vea.
            const flechaOpacity = contextoArrow
                ? parseFloat(gsap.getProperty(contextoArrow, 'opacity'))
                : 1;
            if (self.direction === -1 && contextoArrowAnimated && flechaOpacity <= 0.05) {
                resetContextoArrow();
            }

            // 5. Disparo del trazado de la flecha al final del pin (forward)
            if (self.direction === 1 && localP >= 1 && !contextoArrowAnimated) {
                contextoArrowAnimated = true;
                animateContextoArrow();
            }
        }
    });

    // ============================================
    // Sub-paso 6 — Pin de Contexto (pintado + text-scroll)
    // Pino el .cs-pin-spacer--contexto (200vh de alto). pinType NO
    // se especifica — default 'transform' de GSAP, igual que los
    // pins de Métrica y Shift. scrub: 1 para coherencia con
    // Apertura, Métrica y Shift (todos usan el mismo lag).
    // Mientras está pineado:
    //   - el párrafo se pinta de gris oscuro a gris claro palabra
    //     por palabra (ola continua con frente)
    //   - textTrack.y desplaza el texto hacia arriba; la última
    //     línea queda visible al final del rango (progress = 1)
    //   - el primer 35% del rango (SCROLL_THRESHOLD) reserva el
    //     texto quieto; el 65% final ejecuta el scroll
    // renderContexto() ya existía del modelo anterior; este ST
    // solo lo conecta al pin. La salida hacia Decisiones se
    // implementa en un prompt posterior.
    // ============================================
    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--contexto',
        // Contiguo con el fin del Shift (calculado del DOM).
        // El end se queda en 'bottom top' (equivale a start + altura del trigger).
        start: () => calculateShiftLayout().contextoStart,
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            // [FIX] Mismo problema que Métrica/Shift: obj(0) interno del
            // refresh haría saltar la opacity de la cometa y el pintado
            // del texto. El guard descarta el frame espurio.
            if (ScrollTrigger.isRefreshing) return;
            // Cometa muere al entrar a Contexto: se desvanece en los
            // primeros 5% del pin. Reversa: al volver, reaparece.
            const FADE_DURATION = 0.05; // ajustable
            const cometOpacity = Math.max(0, 1 - self.progress / FADE_DURATION);
            gsap.set('.cs-metrica__comet', { opacity: cometOpacity });
            renderContexto(self.progress);
        }
    });

    // ============================================
    // Sub-paso 7 — Transición de salida Contexto → Decisiones (títulos)
    // Pino el .cs-pin-spacer--decisiones-titulos (100vh de alto). Mientras
    // está pineado:
    //   - trackInner.x interpola desde el finalX congelado del Shift hasta
    //     decisionesFinalX, que alinea el borde izquierdo de
    //     .cs-decisiones-titulos con el borde izquierdo del viewport
    //   - los 3 ítems de la escalera interpolan su translateX (40/52/64vw
    //     en CSS) hasta 0, leyéndose del getComputedStyle al inicio
    //     (no hardcode) para que sigan al CSS si cambia
    // Al final del pin la pantalla queda con los 3 títulos alineados a la
    // izquierda y el trackInner detenido en decisionesFinalX. Sin onLeave:
    // mismo patrón que Contexto (línea 798). Sin onLeaveBack: el onUpdate
    // ya restaura los translateX al hacer scroll reverso porque
    // localP decrece, y al estar inactivo el ST el CSS initial persiste.
    // start/end son FUNCIONES ancladas a calculateShiftLayout() (mismo
    // patrón que Métrica/Shift/Contexto): nunca se usan literales
    // 'top top' / 'bottom top' que GSAP re-mida distinto tras un reflow.
    // ============================================

    // Lectura única del pin-spacer nuevo y de los ítems de la escalera.
    // decisionesPinSpacer se usa en el start() del ST para anclar la
    // contigüidad con el final del pin de Contexto.
    const decisionesPinSpacer = document.querySelector('.cs-pin-spacer--decisiones-titulos');
    const decisionesItems = document.querySelectorAll('.cs-decisiones-titulos__item');

    // Cache del translateX inicial de cada ítem, leído del CSS computado.
    // getComputedStyle devuelve matrix(...) en píxeles, no en vw; se
    // parsea el tx de la matriz. Si el CSS cambia, este array se adapta
    // en la siguiente recarga sin tocar el JS.
    const initialTranslates = Array.from(decisionesItems).map(item => {
        const t = getComputedStyle(item).transform;
        if (t === 'none') return 0;
        const m = t.match(/matrix\(([^)]+)\)/);
        if (m) return parseFloat(m[1].split(',')[4]);
        return 0;
    });

    // Captura del ST de Contexto para leer su .end real (post pinSpacing).
    // El ST de Contexto usa end: 'bottom top', que GSAP resuelve como
    // start + trigger.offsetHeight después de aplicar pinSpacing. La altura
    // original del spacer (contextoSpacer.offsetHeight = 200vh) NO coincide
    // con el rango efectivo del ST porque pinSpacing: true extiende el
    // rango. Por eso，我们必须 leer contextoST.end directamente.
    const contextoST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.className && st.trigger.className.includes('pin-spacer--contexto')
    );

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decisiones-titulos',
        // Contiguo con el fin real del pin de Contexto. Lee contextoST.end
        // (que ya incluye el pinSpacing) en vez de calcular con
        // contextoSpacer.offsetHeight (que da la altura CSS original, no
        // el rango efectivo del ST). No modifica calculateShiftLayout().
        start: () => contextoST ? contextoST.end : 0,
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            // [FIX] Mismo guard que Métrica/Shift/Contexto: descarta el
            // obj(0) interno del refresh de ScrollTrigger.
            if (ScrollTrigger.isRefreshing) return;

            // 1. Punto de partida: posición que el Shift dejó congelada
            //    al terminar (línea 761). Mismo cálculo exacto.
            const finalX = -Math.max(window.innerWidth, contextoEl.offsetWidth);

            // 2. Punto de llegada: alinea el borde izquierdo de
            //    .cs-decisiones-titulos con el borde izquierdo del
            //    viewport. El panel decisiones está en posición
            //    [metrica.width + contexto.width, + decisiones.width] en
            //    el trackInner; con metrica.width = 100vw y
            //    decisiones.width = 100vw, la x que pone su borde
            //    izquierdo en 0 es -(viewport + contexto.width).
            const decisionesFinalX = -(window.innerWidth + contextoEl.offsetWidth);

            // 3. Interpolación lineal con localP. El delta es
            //    decisionesFinalX - finalX. Cuando contexto > viewport
            //    (caso típico a 1920px), el delta colapsa a
            //    -window.innerWidth — la unidad es px, NO vw.
            gsap.set(trackInner, {
                x: finalX + self.progress * (decisionesFinalX - finalX)
            });

            // 4. Interpolación de la escalera desde el translateX inicial
            //    (en píxeles, cacheado en initialTranslates) hasta 0.
            decisionesItems.forEach((item, i) => {
                const offsetPx = (1 - self.progress) * initialTranslates[i];
                item.style.transform = `translateX(${offsetPx}px)`;
            });
        }
    });

    // initScrollPhase() se llama AQUÍ (al final) para que todas las
    // declaraciones (metricaNumber, trackInner, animateMetrica, resetMetrica)
    // estén en scope cuando ScrollTrigger dispare onUpdate durante su init.
    initScrollPhase();

    // ============================================
    // Sub-paso 5 — Recalcular altura del Shift en refresh y resize
    // El refreshInit reaplica la altura (sobrevive a GSAP). El resize
    // dispara refresh para re-evaluar todos los STs.
    // ============================================
    ScrollTrigger.addEventListener('refreshInit', () => {
        const layout = calculateShiftLayout();
        // Mantener sincronizada la variable de módulo que consume el ST
        // de la cortina (sub-paso 7b).
        decisionesFinalX = layout.decisionesFinalX;
    });
    window.addEventListener('resize', () => ScrollTrigger.refresh());

    // ============================================
    // Sub-paso 7b — Cortina de Decisión 1
    // Pino .cs-pin-spacer--decision-1. Mientras está pineado:
    //   - trackInner.x interpola desde decisionesFinalX (donde 7a lo dejó)
    //     hasta decisionesFinalX - window.innerWidth: trae .cs-decision
    //     (4º panel del track) al viewport, desplazando
    //     .cs-decisiones-titulos fuera por la izquierda.
    //   - .cs-decision__bg interpola clip-path inset(0 0 0 100% → 0):
    //     el verde se revela de derecha a izquierda.
    // decisionesFinalX viene del módulo (pre-calculado en refreshInit).
    // NO se recalcula window.innerWidth ni contextoEl.offsetWidth por frame.
    // start/end anclados a la cadena vía decisionesTitulosST.end.
    // Sin onLeave: el onUpdate aplica el estado final que persiste via
    // inline styles (mismo patrón que 7a).
    // ============================================

    const decision1Panel = document.querySelector('.cs-decision');
    const decisionesTitulosST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.className &&
        st.trigger.className.includes('pin-spacer--decisiones-titulos')
    );

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1',
        start: () => decisionesTitulosST ? decisionesTitulosST.end : 0,
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            // 1. Track inner: movimiento sutil (30vw total) para dinamizar
            //    los títulos detrás del verde. Como el verde es opaco y cubre
            //    el panel de títulos + page bg, no se expone fondo en ningún progress.
            gsap.set(trackInner, {
                x: decisionesFinalX - self.progress * window.innerWidth * 0.3
            });
            // 2. Clip-path del panel verde (capa fija, sibling del track):
            //    100% → 0%. El panel es independiente del track, así que el
            //    verde se ENCIME sobre los títulos revelándose de derecha
            //    a izquierda, sin viajar con ellos.
            gsap.set(decision1Panel, {
                clipPath: `inset(0 0 0 ${(1 - self.progress) * 100}%)`
            });
        }
    });
}
