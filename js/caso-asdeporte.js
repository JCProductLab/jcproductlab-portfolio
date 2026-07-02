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
                // Reset y disparo (consolidados en una sola rama de reset):
                //   - Forward: dispara animateMetrica() al cruzar 0.85 (panel
                //     casi anclado, KPI ya dentro del viewport).
                //   - Reverse: resetea solo cuando el panel ya salió del
                //     viewport (crossProgress < 0.1 → panel a y > 90vh, KPI
                //     debajo del viewport). Invisible para el usuario.
                //   - Mientras el panel está a la vista (0.1 ≤ crossProgress
                //     ≤ 1.0) en cualquier dirección, el 25% + flecha + texto
                //     permanecen intactos — el reset nunca ocurre "a la vista".
                if (progress >= 0.75) {
                    const crossProgress = (progress - 0.75) / 0.25;
                    gsap.set(metrica, { y: (1 - crossProgress) * window.innerHeight });
                    gsap.set(apertura, { y: -crossProgress * window.innerHeight });

                    if (crossProgress >= 0.85 && !metricaAnimated) {
                        // Forward: la métrica está casi anclada, arranca el conteo.
                        metricaAnimated = true;
                        animateMetrica();
                    } else if (self.direction === -1 && crossProgress < 0.1 && metricaAnimated) {
                        // Reversa con panel fuera de vista: reset invisible
                        // para re-disparar en el próximo forward.
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
                // 2. Contador arranca al inicio del fade in (sin delay)
                const counter = { value: 0 };
                gsap.to(counter, {
                    value: 25,
                    duration: 0.8,
                    ease: 'power3.out',
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
            }, 0);
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

    // Offset horizontal compartido entre el pre-posicionamiento del ST de
    // Métrica (x inicial en onUpdate) y la animación de entrada en
    // renderContextoEntrada. Mantener ambos sitios en el mismo valor evita
    // un salto visible en el frame de traspaso Métrica→Shift.
    const CONTEXTO_ENTER_OFFSET = 160;

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
                x: CONTEXTO_ENTER_OFFSET * (1 - easedProgress)
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
            // Mismo offset que CONTEXTO_ENTER_OFFSET (definido arriba) —
            // alinear ambos valores evita un salto en el frame de traspaso
            // Métrica→Shift.
            [contextoLabel, contextoTitle, contextoMedia, contextoTags, contextoArrow].forEach(el => {
                if (el) gsap.set(el, { opacity: 0, x: CONTEXTO_ENTER_OFFSET });
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

            // 5. Fade out de Contexto — rápido en la primera mitad
            //    (progress 0→0.5 → opacity 1→0), invisible desde 0.5
            //    hasta el final. La salida a la izquierda del track
            //    continúa durante todo el rango, pero Contexto deja de
            //    ser visible a mitad del recorrido.
            gsap.set('.cs-contexto', {
                opacity: Math.max(0, 1 - self.progress * 2)
            });

            // 6. Entrada de la etiqueta "[ Decisiones clave ]" — solo en
            //    el tramo final (progress 0.7 → 1.0) para que se ancle
            //    cuando el panel ya está casi alineado, sin viajar de
            //    más con el track. Misma gramática que la cascada de
            //    Contexto: offset CONTEXTO_ENTER_OFFSET + power2Out.
            const labelP = Math.max(0, Math.min(1, (self.progress - 0.7) / 0.3));
            const labelEased = power2Out(labelP);
            gsap.set('.cs-decisiones-titulos__label', {
                opacity: labelEased,
                x: CONTEXTO_ENTER_OFFSET * (1 - labelEased)
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

    const decision1Panel = document.querySelector('.cs-decision[data-dec="1"]');
    const decision1Label = document.querySelector('.cs-decision[data-dec="1"] .cs-decision__label');
    const decision1Title = document.querySelector('.cs-decision[data-dec="1"] .cs-decision__title');
    const decision1Media = document.querySelector('.cs-decision[data-dec="1"] .cs-decision__media');
    const decisionesTitulosST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.className &&
        st.trigger.className.includes('pin-spacer--decisiones-titulos')
    );
    // Curva ease-out para el reveal del verde: entra RÁPIDO y termina LENTO.
    // Se aplica SOLO al clip-path — el track se queda lineal.
    const clipEase = gsap.parseEase('power2.out');
    // Normaliza self.progress al tramo [start, end] de un elemento.
    // Clamp a [0, 1] para que fuera del rango devuelva 0 o 1.
    const subProgress = (p, start, end) =>
        Math.max(0, Math.min(1, (p - start) / (end - start)));

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1',
        start: () => decisionesTitulosST ? decisionesTitulosST.end : 0,
        // Pin de 4.73vh = 6.5 × (0.40/0.55). La imagen entra en window
        // [0.45, 1.0] (width 0.55): entry scroll = 0.55 × 4.73 = 2.6vh,
        // idéntico a los 0.40 × 6.5 = 2.6vh del pin anterior con window
        // [0.45, 0.85]. La imagen llega exactamente en p=1.0 → Gate 4
        // (expansión) arranca sin pausa.
        end: () => '+=' + (window.innerHeight * 4.73),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            // 1. Track inner: LINEAL con self.progress. Movimiento sutil (30vw
            //    total) para dinamizar los títulos detrás del verde. Como el
            //    verde es opaco y cubre el panel de títulos + page bg, no se
            //    expone fondo en ningún progress.
            gsap.set(trackInner, {
                x: decisionesFinalX - self.progress * window.innerWidth * 0.3
            });
            // 2. Clip-path del panel verde (capa fija, sibling del track):
            //    100% → 0% con curva ease-out. El verde entra RÁPIDO al inicio
            //    y termina LENTO. El track no se acopla — sigue lineal arriba.
            const clipProgress = clipEase(self.progress);
            gsap.set(decision1Panel, {
                clipPath: `inset(0 0 0 ${(1 - clipProgress) * 100}%)`
            });
            // 3. Gate 3 — Cascada de contenido (label → título → imagen).
            //    Cada elemento entra en su sub-rango con ease-out (clipEase).
            //    translateX va de 400px → 0; opacity de 0 → 1.
            //    Estado final (progress=1): opacity 1, translateX 0 = maqueta.
            //
            //    CALIBRACIÓN v3 (aceleración local a cortina-1):
            //    Pin acortado de 9.17vh a 6.5vh (ver CSS .cs-pin-spacer--decision-1).
            //    Ventanas reescaladas al nuevo pin: la cascada ahora empieza
            //    a progress 0.25 (antes 0.50) y termina cerca de 0.90
            //    (antes 1.00), eliminando el grueso del scroll muerto.
            //    Label y title usan width ~0.22 (como propuso el plan).
            //    Media usa width ~0.45 para que su easing power1.out
            //    complete antes del final del pin (necesita más recorrido
            //    para que el último 10% no quede cortado).
            //
            //    ⚠️ COORDINACIÓN CON GATE 4 (expansión de la imagen):
            //    El gsap.set de .cs-decision__media deja un transform inline
            //    (x: 0 al final). Gate 4 animará el width/height de la imagen
            //    para expandirla a viewport completo y PROBABLEMENTE también
            //    usará transform. Debe COORDINAR con este transform (no
            //    pisarlo ciegamente), si no la entrada se rompe al construir
            //    la expansión. Opciones: usar clearProps antes de Gate 4,
            //    o componer transforms (x + scale en el mismo set).
            // Fix C (cortina-1): label y título con power1.out (1-(1-t)²)
            // en lugar de clipEase/power2.out. Razón: el ease cúbico del
            // clipEase asentaba el título en su posición final (left=80)
            // antes de que el panel verde revelara esa zona, dejando el
            // borde izquierdo del título tapado por la persiana hasta
            // p≥0.70. power1.out desacelera antes, manteniendo el texto
            // más a la derecha mientras el panel abre. La media sigue
            // con su propio ease (no se toca en este fix).
            //
            // Calibración de velocidad (entrada más lenta):
            // Label 0.25→0.55 → 0.25→0.70. El label ahora se mueve HASTA
            // el final del reveal del panel (p≈0.70), en vez de detenerse
            // a mitad de camino (p=0.55) y quedar quieto detrás de la
            // persiana. Mismo tratamiento que recibió el título: la
            // ventana se extiende hasta coincidir con el punto donde el
            // panel verde termina de revelar la zona left<80. Ease y
            // offset (800) sin cambios. El título (0.33→0.72) y la
            // media (0.45→0.90) NO cambian. El solape label-media
            // (0.45-0.70) crece a 0.25 de progress — aceptable: la
            // media entra fade+slide lento, no compite visualmente
            // con el label, y el orden de cascada (label → título →
            // media) se mantiene.
            const labelP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.25, 0.70));
            const titleP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.33, 0.72));
            // Entrada de la imagen: power1.out (en lugar de clipEase/power2.out).
            // power1.out = 1-(1-t)² desacelera más suave: su último 10% aporta
            // Imagen: lineal ('none'), window [0.45, 1.0]. El pin se
            // acortó a 4.73vh para que la imagen llegue exactamente en
            // p=1.0 con la misma velocidad de entrada (2.6vh de scroll).
            // Sin zona muerta entre entrada y expansión.
            const mediaP = gsap.parseEase('none')(subProgress(self.progress, 0.45, 1.0));
            // Label y título entran desde 800px (antes 400px) para que el
            // texto completo sea visible al inicio de la cascada sin
            // cortarse por el borde derecho. La imagen sigue en 400px.
            gsap.set(decision1Label, { opacity: labelP, x: 860 * (1 - labelP) });
            gsap.set(decision1Title, { opacity: titleP, x: 800 * (1 - titleP) });
            gsap.set(decision1Media, { opacity: mediaP, x: 400 * (1 - mediaP) });
        }
    });

    // ============================================
    // Gate 4 — Expansión de la imagen, cierre pantalla verde
    // Pino .cs-pin-spacer--decision-1-expansion. Contiguo al final del
    // pin de la cortina (Gate 2). La imagen crece a viewport completo
    // y el texto sale a la izquierda. Dos fases sobre self.progress:
    //   - Fase 1 (0 → 0.5): imagen crece SOLO a la izquierda (right
    //     anclado a 80px). Texto sale 100vw a la izquierda + fade.
    //   - Fase 2 (0.5 → 1.0): imagen se expande a los 4 extremos
    //     (inset: 0). border-radius → 0.
    // Header siempre visible (z:100 > panel z:3 > media z:1).
    // La imagen se expande con propiedades de LAYOUT (no transform),
    // dejando intacto el transform: translateX(0) que dejó Gate 3
    // (ver comentario de coordinación arriba).
    // ============================================

    // Captura del ST de la cortina para anclar el start al final real
    // (post pinSpacing). Mismo patrón que la cortina usó con 7a.
    const cortinaST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-1')
    );

    // headerH: lee el token --cs-header-height del :root (css/variables.css:92).
    // Fuente determinista del codebase, no literal hardcodeado.
    const headerH = parseFloat(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--cs-header-height')
    );
    const margin = 80;
    // Flag del setup auto→numérico. Persiste en el closure del ST.
    // Es seguro: los inline styles que setea persisten tras salir del
    // rango, y el onUpdate resetea las propiedades animadas cada frame
    // en re-entrada. No necesita reset.
    let gate4Initialized = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1-expansion',
        start: () => cortinaST ? cortinaST.end : 0,
        // Pin de 0.8vh para la expansión. Equilibrio entre velocidad
        // y respiración: suficientemente rápido para no sentirse lento,
        // suficientemente lento para que las dos fases se lean.
        end: () => '+=' + (window.innerHeight * 0.8),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;

            // Setup idempotente: convierte left/bottom de auto a numérico
            // y width/height a auto para que las edges definan el tamaño.
            // Solo corre la primera vez (después los Fase sets manejan
            // todo cada frame).
            if (!gate4Initialized) {
                gsap.set(decision1Media, {
                    left: window.innerWidth / 2,
                    bottom: margin,
                    width: 'auto',
                    height: 'auto'
                });
                gate4Initialized = true;
            }

            const p = self.progress;
            const vw = window.innerWidth;

            if (p <= 0.7) {
                // FASE 1: imagen crece SOLO a la izquierda.
                // Texto (label + título) acoplado al borde izquierdo de la imagen:
                // se mueve al mismo ritmo que la imagen hacia la IZQUIERDA,
                // manteniendo 40px de separación constante (gap real del layout).
                // En f1=0 → textX=0 (reposo, sin salto).
                // En f1=1 → textX=80-vw/2 (negativo, texto sale por la izquierda).
                // Split 70/30: Fase 1 ocupa 70% del scroll (más respiración
                // para el crecimiento principal), Fase 2 (full-bleed) el 30% final.
                const f1 = p / 0.7;
                // Ease de FASE 1: power1.out (antes clipEase=power3.out).
                // Razón: clipEase desacelera a ~0 al final de FASE 1, y
                // FASE 2 usa power1.out que arranca desde 0. Dos curvas
                // que se encuentran en velocidad ~0 alrededor de p=0.5
                // causan una pausa perceptible. power1.out tiene velocidad
                // residual > 0 al final, empalmando suave con FASE 2.
                // Mismo fix que resolvió el "atorón" en el Razonamiento.
                // Crecimiento de la imagen a velocidad constante (lineal, 'none').
                // Antes era power1.out, que desaceleraba a ~0 al final de Fase 1
                // y dejaba la sensación de "termina lento" justo antes de pasar a
                // Fase 2. Con lineal, la velocidad es constante durante toda la
                // Fase 1. Trade-off conocido: la juntura Fase 1→Fase 2 pasa de
                // un empalme suave (factor 1.7×) a un salto más notorio (factor
                // ~9× estimado), porque Fase 2 con lineal arranca más lento que
                // Fase 1 con lineal. Se acepta el salto a cambio de velocidad
                // constante. La imagen ya no flota al final de cada fase.
                const f1e = gsap.parseEase('none')(f1);

                const newLeft = vw / 2 + (margin - vw / 2) * f1e;
                const textX = newLeft - vw / 2;  // = (margin - vw/2) * f1e

                gsap.set(decision1Media, {
                    left: newLeft,
                    right: margin,
                    top: headerH + margin,
                    bottom: margin,
                    borderRadius: 24
                });
                gsap.set(decision1Label, { x: textX, opacity: 1 - f1e });
                gsap.set(decision1Title, { x: textX, opacity: 1 - f1e });
            } else {
                // FASE 2: imagen se expande a los 4 extremos. border-radius → 0.
                // Ease lineal ('none') para velocidad constante: la imagen
                // llega a full-bleed sin flotar al final (antes con
                // power1.out desaceleraba a ~0 en el último 10% del
                // crecimiento). Combinado con Fase 1 también lineal, todo
                // el crecimiento es velocidad constante. Trade-off: el
                // empalme Fase 1→Fase 2 pasa de suave (power1.out vs
                // power1.out) a un salto más notorio (lineal Fase 1 vs
                // lineal Fase 2). Se acepta por pedido del usuario.
                // Split 70/30: Fase 2 arranca a p=0.7 y termina a p=1.0.
                const f2 = (p - 0.7) / 0.3;
                const f2e = gsap.parseEase('none')(f2);

                gsap.set(decision1Media, {
                    top: (headerH + margin) * (1 - f2e),
                    right: margin * (1 - f2e),
                    left: margin * (1 - f2e),
                    bottom: margin * (1 - f2e),
                    borderRadius: 24 * (1 - f2e)
                });
            }
        }
    });

    // ============================================
    // Gate 2a v4 (raíz) — Cortina vertical + permanencia de "El Problema"
    // Solución de raíz: .cs-problema es capa fija (position:fixed; inset:0)
    // por CSS. El pin-spacer provee la altura de scroll. El ST pinea el
    // spacer (patrón canónico de los 6 pines aprobados). El onUpdate
    // anima SOLO transform: y de los dos planos — sin top, sin zIndex,
    // sin onLeave. El salto se elimina de raíz porque la sección ya no
    // tiene flow position a la que caer.
    //
    // Rango: 3vh = 1vh cortina (ease power2.out) + 1vh cascada + 1vh respiro.
    // (antes 4vh: el respiro de 2vh se sentía como "atorón" antes de la
    // persiana de Gate B).
    // ============================================

    const expansionST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-1-expansion')
    );

    // Captura única de los 5 nodos de la cascada (título + 4 cards).
    // gsap.utils.toArray respeta el document order, que coincide con el
    // orden visual (grid 2-col, row-by-row: top-left, top-right,
    // bot-left, bot-right).
    const problemaTitle = document.querySelector('.cs-problema[data-dec="1"] .cs-problema__title');
    const problemaCards = gsap.utils.toArray('.cs-problema[data-dec="1"] .cs-problema__card');
    const problemaNodes = problemaTitle ? [problemaTitle, ...problemaCards] : problemaCards;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1-problema',
        start: () => expansionST ? expansionST.end : 0,
        // Pin 2vh: 1vh cortina + 1vh cascada. Se eliminó el respiro de
        // 1vh (antes pin=3vh) que dejaba pantalla congelada antes de
        // que Gate B (La Decisión) arrancara.
        end: () => '+=' + (window.innerHeight * 2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 2;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            // CORTINA: primer 1/2 del rango (0 → vh). Saturada en p=0.5.
            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            gsap.set('.cs-decision[data-dec="1"]', { y: -eased * vh });   // 0 → -vh
            gsap.set('.cs-problema[data-dec="1"]', { y: vh - eased * vh }); // vh → 0

            // La Decisión: en y:0 solo cuando El Problema cubre el viewport (cortina saturada).
            // Función pura de curtainP → bidireccional, sin callbacks. El snap y:100vh→y:0
            // ocurre cuando El Problema está a y:0 cubriendo todo → invisible.
            gsap.set('.cs-decision-mc[data-dec="1"]', { y: curtainP >= 1 ? 0 : '100vh' });

            // CASCADA: tramo [1/2, 1] del progress (vh → 2vh). Llena el pin
            // exactamente — sin respiro al final. Stagger y eases idénticos.
            const CASCADE_START = 1 / 2;
            const CASCADE_END = 1;
            const STEP = 1 / 3;
            const cascadeP = gsap.utils.clamp(0, 1,
                (self.progress - CASCADE_START) / (CASCADE_END - CASCADE_START)
            );

            for (let i = 0; i < problemaNodes.length; i++) {
                const nodeStart = i * STEP / 2;
                const nodeEnd = nodeStart + STEP;
                const localP = gsap.utils.clamp(0, 1, (cascadeP - nodeStart) / STEP);
                const localEased = gsap.parseEase('power2.out')(localP);
                gsap.set(problemaNodes[i], {
                    y: 400 * (1 - localEased),
                    opacity: localEased
                });
            }
        }
    });

    // ============================================
    // Gate B — Cortina vertical de "La Decisión"
    // Réplica del patrón de Gate 2a: .cs-decision-mc es capa fija
    // (position:fixed; inset:0) por CSS. El pin-spacer provee la altura
    // de scroll. El ST pinea el spacer. El onUpdate anima SOLO
    // transform: y de los dos planos: .cs-problema sale arriba,
    // .cs-decision-mc entra desde abajo, pegadas, ease power2.out.
    //
    // Rango: 4vh = 1vh cortina (ease power2.out) + 3vh margen para
    // futuras animaciones internas de Gate D (ajustable).
    // Anclado a problemaST.end para contigüidad exacta.
    // ============================================

    const problemaST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-1-problema')
    );

    // ============================================
    // Gate D — Animaciones internas de "La Decisión"
    // Piggyback en el onUpdate del decisionMCST (mismo ST que Gate B).
    // Captura única de los 3 elementos (img, ring, text).
    // El text usa split manual por offsetTop (mismo patrón que
    // about-section-reveal.js:66-113), ejecutado tras document.fonts.ready
    // para que la fuente Sora esté cargada al medir las líneas.
    // ============================================

    const decisionImg = document.querySelector('.cs-decision-mc[data-dec="1"] .cs-decision-mc__img');
    const decisionMedia = document.querySelector('.cs-decision-mc[data-dec="1"] .cs-decision-mc__media');
    const decisionRing = document.querySelector('.cs-decision-mc[data-dec="1"] .cs-decision-mc__ring');
    const decisionText = document.querySelector('.cs-decision-mc[data-dec="1"] .cs-decision-mc__text');
    const decisionTextWrap = document.querySelector('.cs-decision-mc[data-dec="1"] .cs-decision-mc__text-wrap');
    const ORIGINAL_TEXT = decisionText ? decisionText.textContent : '';

    // Líneas vigentes — reasignada tras cada (re-)split.
    let decisionTextLines = [];

    // Split manual: tokeniza por palabra, envuelve en spans, agrupa por offsetTop.
    // Idempotente: data-line-split-ready evita re-trabajo si ya se ejecutó.
    const splitDecisionText = (p) => {
        if (!p) return [];

        if (p.dataset.lineSplitReady === 'true') {
            const words = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
            const groups = {};
            words.forEach((w) => {
                const i = w.dataset.lineIndex;
                (groups[i] ||= []).push(w);
            });
            return Object.keys(groups)
                .sort((a, b) => +a - +b)
                .map((k) => groups[k]);
        }

        const tokens = p.textContent.replace(/\s+/g, ' ').trim().split(' ');
        if (!tokens.length) return [];

        p.textContent = '';
        tokens.forEach((word, idx) => {
            if (idx > 0) p.appendChild(document.createTextNode(' '));
            const span = document.createElement('span');
            span.className = 'cs-decision-mc__word';
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, opacity';
            p.appendChild(span);
        });

        const wordEls = Array.from(p.querySelectorAll('.cs-decision-mc__word'));
        const lineMap = new Map();
        wordEls.forEach((el) => {
            const top = Math.round(el.offsetTop);
            if (!lineMap.has(top)) lineMap.set(top, []);
            lineMap.get(top).push(el);
        });

        const sortedTops = Array.from(lineMap.keys()).sort((a, b) => a - b);
        const lines = sortedTops.map((top, i) => {
            const words = lineMap.get(top);
            words.forEach((w) => (w.dataset.lineIndex = String(i)));
            return words;
        });

        p.dataset.lineSplitReady = 'true';
        return lines;
    };

    // Split inicial: espera a que las fuentes (Sora) estén cargadas antes
    // de medir offsetTop. Mientras tanto, decisionTextLines queda vacío
    // y el onUpdate simplemente no anima texto (el text-wrap está en
    // opacity:0 por CSS, no se ve nada roto).
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            decisionTextLines = splitDecisionText(decisionText);
            ScrollTrigger.refresh();
        });
    } else {
        decisionTextLines = splitDecisionText(decisionText);
    }

    // Re-split en resize (debounced). NO fuerza estado inicial — las líneas
    // nuevas nacen en su reposo CSS (translateX 20px, opacity 0). El primer
    // onUpdate post-refresh escribe el estado correcto según el progress.
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!decisionText) return;
            decisionText.dataset.lineSplitReady = 'false';
            Array.from(decisionText.querySelectorAll('.cs-decision-mc__word'))
                .forEach(w => w.remove());
            decisionText.textContent = ORIGINAL_TEXT;
            decisionTextLines = splitDecisionText(decisionText);
            ScrollTrigger.refresh();
        }, 200);
    });

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1-ladecision',
        start: () => problemaST ? problemaST.end : 0,
        end: () => '+=' + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 4;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            // CORTINA: primer 1/4 del rango (0 → vh). Resto = permanencia (saturado en 1).
            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            // SOLO El Problema sube. La Decisión queda quieta en y:0 (gestionada por
            // el onUpdate de problemaST vía curtainP). La Decisión NO se anima aquí.
            gsap.set('.cs-problema[data-dec="1"]', { y: -eased * vh });     // 0 → -vh (sale arriba)

            // ── Gate D: animaciones internas de La Decisión ────────────────
            // Imagen y óvalo arrancan en progress 0 (junto con la persiana) y corren
            // hasta 0.50. Texto arranca más tarde (0.20) para que el grueso de su
            // entrada sea visible después de la persiana.

            // ── Imagen: contenedor .media crece en UN SOLO movimiento (ambos ejes a la vez) ──
            // 400×560 → 100vw×100vh en progress 0→0.50. Border-radius 20→0.
            if (decisionMedia) {
                const IMG_START = 0;
                const IMG_END   = 0.50;
                const imgP = gsap.utils.clamp(0, 1, (self.progress - IMG_START) / (IMG_END - IMG_START));
                const imgE = gsap.parseEase('power1.inOut')(imgP);

                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const INIT_W = 400;
                const INIT_H = 560;
                const BORDER_RADIUS = 20;

                const newW = INIT_W + (vw - INIT_W) * imgE;
                const newH = INIT_H + (vh - INIT_H) * imgE;
                const newBR = BORDER_RADIUS * (1 - imgE);

                gsap.set(decisionMedia, {
                    width: newW + 'px',
                    height: newH + 'px',
                    borderRadius: newBR + 'px',
                });
            }

            // ── Óvalo: scale 1.0 → 2.75, rotation 0° → 360° (vuelta completa).
            //    Opacity se mantiene en 1 mientras scale va de 1.0 a 2.3; a partir
            //    de scale 2.3, fade 1→0 sincronizado con el scale. Centrado vía x/y. ───
            if (decisionRing) {
                const ringP = gsap.utils.clamp(0, 1, (self.progress - 0) / 0.50);
                const ringEased = gsap.parseEase('power1.inOut')(ringP);
                const ringScale = 1.0 + (2.75 - 1.0) * ringEased;
                const ringRotation = 0 + 360 * ringP;
                // Fade atado al scale: 1 hasta scale 2.3, luego 1→0 de 2.3 a 2.75
                const ringOpacity = gsap.utils.clamp(0, 1, 1 - Math.max(0, ringScale - 2.3) / (2.75 - 2.3));
                // Centrado: x = -754/2 = -377, y = -480/2 = -240
                gsap.set(decisionRing, {
                    x: -377,
                    y: -240,
                    scale: ringScale,
                    rotation: ringRotation,
                    opacity: ringOpacity,
                });
            }

            // ── Texto: cascada por línea con stagger 50% ──────────────────
            // Rango del texto: progress 0.35 → 0.475. Container opacity = textP.
            // Cada línea: x: 20→0, opacity: 0→1, ease power2.out.
            // STEP = 2/(N+1) garantiza que la última línea termina en textP=1.
            if (decisionTextWrap) {
                const textP = gsap.utils.clamp(0, 1, (self.progress - 0.20) / 0.275);
                gsap.set(decisionTextWrap, { opacity: textP });

                if (decisionTextLines.length) {
                    const N = decisionTextLines.length;
                    const STEP = 2 / (N + 1);
                    for (let i = 0; i < N; i++) {
                        const line = decisionTextLines[i];
                        const nodeStart = i * STEP / 2;
                        const localP = gsap.utils.clamp(0, 1, (textP - nodeStart) / STEP);
                        const localEased = gsap.parseEase('power2.out')(localP);
                        gsap.set(line, {
                            x: 20 * (1 - localEased),
                            opacity: localEased
                        });
                    }
                }
            }

            // ── RELEVO al final del respiro de La Decisión ──────────────
            // Aprovecha los 2vh de scroll muerto del respiro
            // (progress 0.5→1.0) para hacer el cruce en espejo:
            // La Decisión sube y sale por arriba MIENTRAS Razonamiento
            // entra desde abajo. Al final del pin de La Decisión,
            // Razonamiento ya está en y:0 y su propio ST solo maneja
            // el contenido (riel + métrica).
            //
            // Easing: power1.out (no power2.out). power2.out deja los
            // finales casi inmóviles y choca con el arranque del riel
            // de Razonamiento (que empieza justo después). power1.out
            // decelera suave sin atorón.
            //
            // Sub-fix del init del rail: se mantiene aquí. Escribe
            // 0.5*vh con vh actual en cada frame del respiro. Elimina
            // la dependencia del init vh pre-layout (849.6 vs 1080
            // en viewports 4K) que el onRefresh no corregía.
            //
            // z-index safe: durante el cruce, La Decisión (z:5) y
            // Razonamiento (z:4) ocupan franjas verticales distintas
            // del viewport (sin solapamiento). El z-index no causa
            // conflicto visual.
            if (self.progress >= 0.5) {
                const relP = (self.progress - 0.5) / 0.5;  // 0 → 1 dentro del respiro
                const eased = gsap.parseEase('power1.out')(relP);

                gsap.set('.cs-decision-mc[data-dec="1"]', { y: -eased * vh });         // 0 → -vh
                gsap.set('.cs-razonamiento[data-dec="1"]', { y: vh - eased * vh });    // +vh → 0

                // Sub-fix: rail a su init value con vh actual.
                const razonRailEl = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__rail');
                if (razonRailEl) {
                    gsap.set(razonRailEl, { y: 0.5 * vh });
                }
            }
        }
    });

    // ============================================
    // Gate 2 — El Razonamiento (Pantalla 1)
    // El ST de Razonamiento solo maneja el CONTENIDO (riel + fade de
    // métrica). El RELEVO en espejo (La Decisión sale arriba +
    // Razonamiento entra desde abajo) se hace en el onUpdate de La
    // Decisión durante su respiro final (progress 0.5→1.0 del pin
    // de ladeci). Al llegar a ladeciST.end, Razonamiento ya está en
    // y:0 (su ST solo anima el contenido).
    //
    // CONTENIDO (riel + fade, todo el progress del pin):
    //     - .cs-razonamiento__rail: y:+0.5*vh → y:-0.5*vh-dh
    //       (descriptor barre de borde inferior a superior, limpieza
    //       completa del viewport). Rango vh+dh, lineal.
    //     - .cs-razonamiento__metric[data-screen="1"]: curva de
    //       opacidad ASIMÉTRICA sobre el recorrido visible del
    //       descriptor (0 = borde inferior, 0.5 = centro, 1 = borde
    //       superior):
    //         [0, 0.25)        : fade in 0 → 1
    //         [0.25, 0.90]     : meseta opacity = 1
    //         (0.90, 1]        : fade out 1 → 0
    //       La métrica nace en opacity 0 cuando el descriptor cruza
    //       el borde inferior del viewport. Clamp [0, 1] defensivo.
    //     - .cs-razonamiento__label: opacity 1 durante todo el pin
    //       (no se anima).
    //
    // Rango total del pin: CONTENT_VH = 1.5vh (un solo sub-tramo, sin
    // entry/solape). Coherente con el ritmo de lectura del descriptor
    // ya aprobado.
    //
    // Anclaje: contiguo al final REAL del pin de La Decisión
    // (ladeciST.end, leído vía ScrollTrigger.getAll().find()) — mismo
    // patrón que ladeci:1360 con problemaST y todos los pines de la
    // cadena. No se usa 'top top' ni 'bottom top' literales.
    //
    // Sub-fix del init del rail: el init `gsap.set(razonRail, {y: ...})`
    // puede usar un vh pre-layout. El onRefresh re-aplica con el vh
    // actual. Adicionalmente, el bloque aditivo en ladeci's onUpdate
    // (durante el respiro) escribe 0.5*vh con vh actual en cada
    // frame, eliminando la dependencia del init vh para cuando Razonamiento
    // toma el control.
    //
    // Pantallas 1 y 2 (datos 90.8% y 65%): el riel tiene DOS
    // descriptores apilados estáticos. El riel se traslada con
    // un solo recorrido continuo. Cuando el descriptor 1 sale por
    // arriba, el descriptor 2 ya está entrando por abajo
    // (solape sin pantalla vacía). El top: 115% del descriptor 2
    // (CSS) corresponde a un GAP de 0.65*vh - dh entre los dos
    // descriptores, elegido para que el cruce de fade entre las
    // dos métricas (cuando metricP_1 = 0.9, metricP_2 = 0.25)
    // ocurra simultáneamente. El recorrido del riel se extiende
    // a 1.65*vh + dh_max, donde dh_max es la altura del descriptor
    // más alto, para garantizar limpieza completa del más grande.
    // Cuando se agreguen más pantallas (gates futuros), se extiende
    // a un switch por tramos de progress.
    // ============================================

    // PIN_LENGTH_VH para el recorrido del riel con Pantalla 3
    // (datos 90.8%, 65%, 5%). El recorrido cubre desde el inicio
    // (d1 en borde inferior) hasta el dato 3 CENTRADO en el
    // viewport (no se sale completamente; su salida se construirá
    // después con la conclusión).
    //
    // FIX: posiciones incrementales y uniformes. STEP = desplazamiento
    // validado entre d1→d2 (incluye el gap +120px y la altura dh1).
    //   desc1_topRel = 0.5*vh
    //   STEP         = desc2_topRel − desc1_topRel = 0.8*vh + 120 + dh1
    //   desc2_topRel = desc1_topRel + STEP = 1.3*vh + 120 + dh1  (validado, intacto)
    //   desc3_topRel = desc2_topRel + STEP = 2.1*vh + 240 + 2*dh1
    // Por construcción, gap 2→3 ≡ gap 1→2. Sin acumulación de términos vh.
    //   End railY (d3 centrado) = 0.5*vh - desc3_topRel
    //   Recorrido = 0.5*vh - End = desc3_topRel = 2.1*vh + 240 + 2*dh1
    //   PIN_LENGTH_VH = 2.1 + 240/vh + 2*dh1/vh
    // Para vh=2160, dh1=144: PIN_LENGTH_VH = 2.1 + 0.111 + 0.133 = 2.344.
    // Para vh=2160, dh1=144: STEP = 1728 + 120 + 144 = 1992px; recorrido = 5064px.
    // El setProperty --razon-desc2-top: top = desc1TopPx + STEP.
    // El setProperty --razon-desc3-top: top = desc2TopPx + STEP.
    // El JS calcula los valores exactos en cada init (dependientes de
    // vh, dh1). El CSS tiene defaults seguros (135.56% y 332%).
    const _razonDesc1 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="1"]');
    const _razonDesc2 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="2"]');
    const _razonDesc3 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="3"]');
    const _dh1 = _razonDesc1 ? _razonDesc1.offsetHeight : 0;
    const _dh2 = _razonDesc2 ? _razonDesc2.offsetHeight : 0;
    const _dh3 = _razonDesc3 ? _razonDesc3.offsetHeight : 0;
    const _dhMax = Math.max(_dh1, _dh2, _dh3);
    const _razonVh = window.innerHeight;
    const _desc1TopPx = 0.5 * _razonVh;
    const _stepPx = 0.8 * _razonVh + 120 + _dh1;
    const _desc2TopPx = _desc1TopPx + _stepPx;
    const _desc3TopPx = _desc2TopPx + _stepPx;
    // Gate 4:声明 de la conclusión (necesaria antes del bloque
    // PIN_LENGTH_VH para medir su altura en el init).
    const razonConclusion = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__conclusion');
    // Gate 4 (continuación): label. Se mantiene visible (opacity 1)
    // durante las 3 pantallas de dato; su fade out es responsabilidad
    // del onUpdate (ventana [0.98, 1.0], ver bloque PIN_LENGTH_VH).
    const razonLabel = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__label');
    // Gate 5: cuerpo y frase final de la conclusión. Animados por
    // separado durante el gesto final (fase 3): el cuerpo sube y
    // sale, la frase final se recoloca al centro del viewport y
    // crece con scale hasta saturar sin cortarse.
    const razonBody = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__conclusion-body');
    const razonFinal = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__conclusion-final');

    // PIN_LENGTH_VH extendido con FASE 2 (conclusión).
    //
    // Estructura del pin de Razonamiento (post Gate 4):
    //   Fase 1: riel barre d1→d2→d3 (datos 90.8%, 65%, 5%).
    //           Recorrido = desc3_topRel (original validado, sin
    //           cambios en este gate). Termina con d3 top en vh/2
    //           (d3 centrado en maqueta). Inalterado: cruces 1→2
    //           y 2→3 con STEP, switches, fades.
    //   Fase 2 (NUEVA — Gate 4): d3 sale por arriba + conclusión entra
    //           desde abajo.
    //             - riel recorrido para que d3 salga completamente
    //               (d3_bottom = 0, partiendo de d3 centrado en
    //               vh/2): vh/2 + dh3.
    //             - conclusión arranca asomando apenas (concOffset
    //               = 0, top visual inicial = vh) y sube a su
    //               posición de lectura. Recorrido = vh - baseTop
    //               + concHeight/2.
    //             - recorrido_fase2 = MAX de los dos (ambos terminan
    //               al mismo tiempo en localP=1).
    //             - concOffset = 0 (asomando) elimina pantalla vacía
    //               entre la salida de d3 y la entrada de conc.
    //               concOffset > 0 causa un gap porque la conc
    //               tarda en hacerse visible (su recorrido de
    //               entrada es largo: ~1200px para llegar a
    //               asomar). Solape resultante: ~2% del pin,
    //               con d3 saliendo por arriba y conc asomando
    //               por abajo simultáneamente. Mismo patrón que
    //               cruces entre datos: texto saliente arriba +
    //               entrante abajo, sin pantalla vacía, sin
    //               convivencia a media altura.
    //             - métrica 3 hace su fade out natural (curva
    //               asimétrica sobre metricP_3, igual que m1/m2).
    //               Fade out completo cuando d3_topInVp cruza 0
    //               (~50% de fase 2, antes de que d3 salga).
    //
    // PIN_LENGTH_VH = (recorrido_fase1 + recorrido_fase2) / vh
    //
    // Para vh=2160, dh1=dh3=144, concHeight=333:
    //   recorrido_fase1 = desc3_topRel = 5064
    //   riel_recorrido_fase2 = 1080 + 144 = 1224
    //   conc_recorrido_fase2 = 2160 - 1120.5 + 0 + 166.5 = 1206
    //   recorrido_fase2 = max(1224, 1206) = 1224
    //   PIN_LENGTH_VH = (5064 + 1224) / 2160 = 2.911
    // (Antes del Gate 4: PIN_LENGTH_VH = 2.344. Recorrido extra: 1224.)
    const _recorridoFase1Px = 2.1 * _razonVh + 240 + 2 * _dh1;  // = desc3_topRel
    const _rielRecorridoFase2Px = 0.5 * _razonVh + _dh3;
    const _conclusionHeaderHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')) || 81;
    const _conclusionBaseTopInit = _conclusionHeaderHeight + (_razonVh - _conclusionHeaderHeight) / 2;
    // Altura de la conclusión: medida una vez al init (concHeight es
    // estable — no cambia durante el pin). Si el elemento no existe,
    // fallback 333 (≈ font-size 96px × 6 líneas, valor típico).
    const _conclusionHeightInit = razonConclusion ? razonConclusion.offsetHeight : 333;
    // concOffsetPx = distancia del TOP VISUAL inicial de la conc
    // al borde INFERIOR del viewport. Positivo = off-bottom (conc
    // escondida al inicio de fase 2, "entra desde abajo"). 0 =
    // asomando apenas (conc toca el borde, sube inmediatamente a
    // visible). Elegido = 0 para eliminar pantalla vacía: con
    // concOffset > 0 la conc tarda demasiado en hacerse visible
    // y queda un gap entre que d3 sale y la conc entra. Con =0,
    // la conc está asomando apenas desde el primer frame de fase 2
    // y se vuelve visible al ~1.5% de fase 2 (justo antes de que
    // d3 termine de salir). Solape resultante: ~2% del pin.
    // Esto es menor que el solape de los cruces entre datos
    // (~6% del pin, calculado para vh=2160 dh1=144), pero es
    // la mejor relación sin sacrificar la legibilidad de la
    // conc (si concOffset < 0 la conc entra con parte del cuerpo
    // ya visible antes de empezar a moverse).
    const _concOffsetPx = 0;
    const _concRecorridoFase2Px = _razonVh - _conclusionBaseTopInit + _concOffsetPx + _conclusionHeightInit / 2;
    const _recorridoFase2Px = Math.max(_rielRecorridoFase2Px, _concRecorridoFase2Px);
    // Gate 5: FASE 3 — gesto final (cuerpo sale + frase final
    // se recoloca al centro y crece).
    //   recorrido_fase3 = 0.7*vh. Da tiempo para que el cuerpo
    //   recorra su bodyExitDistance (~1320 para vh=2160) y la
    //   frase final alcance scaleFinal. El cuerpo sale
    //   completamente a ~localP 0.87; el último 13% del gesto
    //   es la frase final sola creciendo hasta saturar
    //   (golpe dramático en soledad, intencional).
    //   Lineal con scrub. Sin scattering.
    const _recorridoFase3Px = 0.7 * _razonVh;
    const _recorridoFaseTotalPx = _recorridoFase1Px + _recorridoFase2Px + _recorridoFase3Px;
    // Ratio donde el dato 3 queda centrado en el viewport
    // (d3_topInVp = vh/2, marca el inicio de la fase 2 = d3 sale
    // + conc entra). Se calcula sobre el recorrido TOTAL del pin
    // (incluyendo fase 3), no sobre el recorrido pre-fase3.
    // Sin esto, con la fase 3 añadida, el entry de la conc
    // se comprimía a un instante.
    const _conclusionEntryStartRatio = _recorridoFase1Px / _recorridoFaseTotalPx;
    // Fin del entry de la conclusión (también inicio del gesto fase 3).
    // Se necesita explícito porque con la fase 3 añadida, el rango
    // del localP del entry ya no es [0, 1] sino [0, entryEndRatio].
    // Sin esta corrección, el entry termina ANTES de su recorrido
    // y la conc queda off-bottom al inicio del gesto.
    const _conclusionEntryEndRatio = (_recorridoFase1Px + _recorridoFase2Px) / _recorridoFaseTotalPx;
    const _gestureStartRatio = _conclusionEntryEndRatio;
    const PIN_LENGTH_VH = _recorridoFaseTotalPx / _razonVh;
    // Constantes del gesto, re-calculadas en init y onRefresh:
    //   _bodyExitDistance: cuántos px sube el cuerpo para salir
    //     completamente por arriba del viewport.
    //   _finalToCenterDeltaX/Y: cuánto hay que trasladar la frase
    //     final para que su centro (natural) coincida con (vw/2, vh/2).
    //   _finalTargetScale: scale final = min(cap por ancho 92% de vw,
    //     cap por alto 100% de vh). Satura el viewport sin cortarse.
    let _bodyExitDistance = 0;
    let _finalToCenterDeltaX = 0;
    let _finalToCenterDeltaY = 0;
    let _finalTargetScale = 1;
    // Flag: true cuando ya se midieron las constantes del gesto
    // en el primer frame del gesto (conc centrada). Evita re-medir
    // cada frame (caro: getBoundingClientRect × 3). Se resetea a
    // false cuando el usuario sale del rango del gesto (scrub
    // reverso), para que un nuevo scrub hacia el gesto re-mida
    // las constantes con la conc centrada de nuevo.
    let _gestureInitialized = false;
    const FINAL_SCALE_VW_RATIO = 0.92;
    // Gate 4 (continuación): ventana del fade out del label.
    //   El label "[ El razonamiento ]" persiste opacity 1 durante
    //   las 3 pantallas de dato (mismo patrón validado para m1/m2/m3
    //   en meseta: opacity 1 mientras el descriptor está legible).
    //
    //   Inicio del fade: cuando la métrica 5% (data-screen=3) llega
    //   a opacity 0. La fórmula del m3 fade out es
    //     metricP_3 = (vh - desc3TopInViewport) / vh
    //     desc3TopInViewport = railY + 2.1*vh + 240 + 2*_dh1
    //   y m3=0 cuando desc3TopInViewport ≤ 0, es decir cuando
    //     railY ≤ -(2.1*vh + 240 + 2*_dh1)
    //   y como railY = 0.5*vh - contentP * recorrido,
    //     contentP_m3zero = (2.6*vh + 240 + 2*_dh1) / recorrido
    //   Medido en runtime (1920x1080): m3 llega a 0 en contentP ≈ 0.7738.
    //   Medido en runtime (1440x900):  m3 llega a 0 en contentP ≈ 0.7769.
    //
    //   Fin del fade: antes de que el texto de la conclusión cruce la
    //   altura del label en el viewport. El label vive en la zona
    //   superior izquierda (top: header+80 = 161, height: ~53,
    //   bottom ≈ 214). Hay dos casos según viewport:
    //     - 1920x1080: la conclusión se asienta a concVisualTop = 331
    //       (bien debajo del label, 117px de margen). El body la cruza
    //       con translateY durante el gesto: bodyTop = 214 ocurre en
    //       contentP ≈ 0.8590 (medido).
    //     - 1440x900: la conclusión es más alta (concHeight=582) y se
    //       asienta a concVisualTop = 213 (ya en el borde del label).
    //       El container top cruza el label en contentP ≈ 0.8422.
    //   Unificado: END = 0.83. Garantiza margen ANTES del cruce en
    //   ambos viewports (margen 0.029 en 1920x1080 y 0.0122 en
    //   1440x900). El label está invisible antes de que la conclusión
    //   llegue a su altura — no hay encimado.
    //
    //   Ventana nueva: [_labelFadeStartRatio, _labelFadeEndRatio] =
    //   [≈0.7738, 0.83]. Ancho: ~5.6% del pin (vs. ventana previa
    //   [0.8422, 1.0] = 15.8%). Curva lineal, consistente con los
    //   fades de las métricas — transición gradual, no snap.
    const _labelFadeStartRatio = (2.6 * _razonVh + 240 + 2 * _dh1) / _recorridoFaseTotalPx;
    const _labelFadeEndRatio = 0.83;
    document.documentElement.style.setProperty('--razon-desc2-top', _desc2TopPx + 'px');
    document.documentElement.style.setProperty('--razon-desc3-top', _desc3TopPx + 'px');
    // ============================================

    const ladeciST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-1-ladecision')
    );

    const razonRail = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__rail');
    const razonMetric1 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__metric[data-screen="1"]');
    const razonMetric2 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__metric[data-screen="2"]');
    const razonMetric3 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__metric[data-screen="3"]');
    const razonDescriptor = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="1"]');
    const razonDescriptor2 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="2"]');
    const razonDescriptor3 = document.querySelector('.cs-razonamiento[data-dec="1"] .cs-razonamiento__descriptor[data-screen="3"]');
    // razonConclusion ya está declarado arriba (antes de PIN_LENGTH_VH).

    // Altura del descriptor: medida UNA vez en setup y re-medida en
    // cada onRefresh del ST (init + resize + recreate). onRefresh se
    // dispara DESPUÉS de refreshInit y ANTES del _updateAll(2) final,
    // así el primer onUpdate post-refresh ya usa la altura nueva.
    // Si el descriptor no existe (edge de init), el fallback da 0
    // y el rango del riel colapsa a vh — no debería pasar, pero el
    // guard evita un crash.
    let razonDescriptorHeight = razonDescriptor ? razonDescriptor.offsetHeight : 0;

    // Top base de la conclusión (sin offset de animación) — calculado
    // desde la fórmula CSS: calc(--cs-header-height + (100vh - --cs-header-height)/2).
    // Para vh=1080, header=81: 81 + (1080-81)/2 = 580.5. NO se lee del
    // CSS computado porque después del init state (gsap.set top: baseTop + vh)
    // el inline style sobreescribe el top computado, y re-leerlo
    // devolvería el valor off-bottom en lugar del base. _conclusionHeaderHeight
    // ya está declarado arriba (en el bloque de PIN_LENGTH_VH). Animamos
    // la conclusión con `top` (no con `transform: translateY`) porque el
    // CSS ya usa `transform: translate(-50%, -50%)` para centrado;
    // añadir un transformY desde GSAP sobrescribiría ese translate.
    // `top` respeta el transform original.
    let conclusionBaseTopPx = _conclusionHeaderHeight + (window.innerHeight - _conclusionHeaderHeight) / 2;

    // Estado inicial — ANTES del create() para que el primer frame
    // post-init muestre el reposo de Gate 2: riel con descriptor
    // debajo del viewport, métrica invisible, label visible. El
    // rest-state de la sección (.cs-razonamiento translateY 100vh)
    // vive en CSS; La Decisión está en y:0 por la cortina de El
    // Problema que ya corrió. Mismo patrón que
    // metricaNumber.textContent='0%' en caso-asdeporte.js:247 antes
    // del ST de Métrica.
    //
    // Gate 4 — Conclusión: inicial state la pone off-bottom (top:
    // baseTop + vh). Permanece off-bottom durante TODA la fase 1
    // (cruces 1→2, 2→3 y centrado de d3). En la fase 2 (último 24.5%
    // del pin), el onUpdate interpola su top desde off-bottom a su
    // posición de lectura (top = baseTop, centrada bajo el header).
    if (razonRail) {
        gsap.set(razonRail, { y: window.innerHeight * 0.5 });
    }
    if (razonMetric1) {
        gsap.set(razonMetric1, { opacity: 0 });
    }
    if (razonMetric2) {
        gsap.set(razonMetric2, { opacity: 0 });
    }
    if (razonMetric3) {
        gsap.set(razonMetric3, { opacity: 0 });
    }
    if (razonConclusion) {
        // Initial state off-bottom: top = baseTop + recorridoFase2
        // (conc queda off-bottom por concOffset + concHeight/2 al
        // inicio del pin, listo para entrar durante la fase 2).
        gsap.set(razonConclusion, { top: (conclusionBaseTopPx + _recorridoFase2Px) + 'px' });
    }

    // Gate 5: medir constantes del gesto (bodyExitDistance,
    // deltaX/Y, scaleFinal). Se hace AL INICIO del gesto, NO
    // en init, porque en init la conc está off-bottom y la
    // medición del final sería incorrecta (su centro estaría
    // a varios píxeles del real). Al inicio del gesto, la conc
    // ya está centrada en su posición de lectura y la medición
    // del final es correcta.
    function computeGestureConstants() {
        if (!razonFinal) return;
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        // Medir el TEXTO del final, no el <p>. El <p> ocupa el
        // ancho completo del bloque 65% (= 2496 a 1920w) por su
        // display:block, mientras que el texto "arreglando el
        // pago."" es solo ~660px. Si usáramos el ancho del <p>,
        // el scale sería ~1.4× y el texto solo llenaría ~24% de vw
        // (no saturaría). Usando Range API para medir el texto
        // real, el scale satura correctamente a 92% de vw.
        const textRange = document.createRange();
        textRange.selectNodeContents(razonFinal);
        const finalTextRect = textRange.getBoundingClientRect();
        const finalTextWidth = finalTextRect.width || 1;   // evita div/0
        const finalTextHeight = finalTextRect.height || 1;
        // Scale final: min del cap por ancho (92% de vw = 8% total
        // de margen) y el cap por alto (100% de vh). El binding
        // depende del texto — para texto ancho y corto siempre es
        // el ancho.
        const scaleByWidth = (vw * FINAL_SCALE_VW_RATIO) / finalTextWidth;
        const scaleByHeight = vh / finalTextHeight;
        const scaleFinal = Math.min(scaleByWidth, scaleByHeight);
        _finalTargetScale = scaleFinal;
        // Delta X para centrar el TEXTO (no el <p>). El texto es
        // más estrecho que el <p> (text-align: right) y está
        // anclado al borde DERECHO del <p>. Tras el scale, el texto
        // sigue anclado al borde derecho del <p> escalado. Para
        // que el centro del texto termine en vw/2:
        //   textCenterAfter = (elementRightScaled + dx) - (textWidth * scale) / 2
        //   ⇒ dx = vw/2 - elementRightScaled + (textWidth * scale) / 2
        //   donde elementRightScaled = vw/2 + (elementWidth / 2) * scale
        //   (escala desde el centro del <p> = vw/2).
        //   Simplificando: dx = ((textWidth - elementWidth) / 2) * scale
        //   Para textWidth < elementWidth (texto más estrecho que
        //   <p>), dx es NEGATIVO: hay que mover el <p> a la
        //   izquierda para que el texto (anclado a su derecha)
        //   quede centrado en el viewport.
        const razonFinalRect = razonFinal.getBoundingClientRect();
        const elementWidth = razonFinalRect.width;
        _finalToCenterDeltaX = ((finalTextWidth - elementWidth) / 2) * scaleFinal;
        // Delta Y: el texto es 1 línea, su centro es básicamente
        // el centro de su bounding box. Fórmula simple: centrar el
        // centro del texto en vh/2.
        const finalTextCenterY = finalTextRect.top + finalTextHeight / 2;
        _finalToCenterDeltaY = vh / 2 - finalTextCenterY;
        // Body exit: el cuerpo debe salir completamente por arriba
        // del viewport. Distancia = bodyBottom + buffer.
        if (razonBody) {
            const bodyRect = razonBody.getBoundingClientRect();
            _bodyExitDistance = bodyRect.bottom + 50;  // 50px buffer
        }
    }

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-1-razonamiento',
        // Contiguo con el final REAL de La Decisión. Lectura dinámica
        // post pinSpacing — si ladeciST no existe (edge de init), el
        // fallback a 0 evita romper.
        start: () => ladeciST ? ladeciST.end : 0,
        // 1.5vh total: solo contenido (riel + fade). El relevo se hizo
        // antes, en el respiro del pin de La Decisión.
        end: () => '+=' + (window.innerHeight * PIN_LENGTH_VH),
        pin: true,
        pinSpacing: true,
        // Coherencia con los 8 pines de la página. scrub:1 es
        // smoothing temporal; la linealidad de la animación se logra
        // en el onUpdate usando self.progress directo sin ease.
        scrub: 1,
        // Re-medir la altura del descriptor y re-aplicar el init del
        // riel en cada refresh (init + resize + ScrollTrigger.refresh
        // manual). Garantiza que un resize deje tanto el rango del
        // riel (vh+dh) como la posición inicial del riel (0.5*newVh)
        // coherentes con el nuevo viewport. Sin el re-set, el riel
        // arrastra el y del viewport anterior (bug de 180px en
        // viewports 1920×1080 → 3840×2160 detectado en diagnóstico).
        onRefresh: () => {
            if (razonDescriptor) {
                razonDescriptorHeight = razonDescriptor.offsetHeight;
            }
            if (razonRail) {
                gsap.set(razonRail, { y: window.innerHeight * 0.5 });
            }
            // Gate 4: recalcular baseTop desde la fórmula + nuevo vh
            // (no leer de getComputedStyle porque el inline top ya
            // está sobreescrito con el off-bottom del init state).
            conclusionBaseTopPx = _conclusionHeaderHeight + (window.innerHeight - _conclusionHeaderHeight) / 2;
            // Gate 5: re-medir las constantes del gesto (dependen
            // de vh, vw, y del layout actual del cuerpo y final).
            // Sin re-medir, el scale y los deltas arrastrarían los
            // valores del viewport anterior tras un resize.
            computeGestureConstants();
        },
        onUpdate: (self) => {
            // [FIX] Mismo guard que los 8 pines previos: descarta el
            // obj(0) espurio que ScrollTrigger dispara internamente
            // durante _refreshAll(). Sin esto, el riel saltaría a su
            // estado final en cada resize/refresh. Patrón idéntico a
            // ladeci:1366, problema:1196, etc.
            if (ScrollTrigger.isRefreshing) return;

            const vh = window.innerHeight;
            const dh = razonDescriptorHeight;
            // Recorrido del riel = 1.65*vh + dh_max (calculado al inicio
            // como PIN_LENGTH_VH * vh). dh_max es la altura del descriptor
            // más alto (descriptor 1 o 2), garantizando limpieza completa
            // del más grande al final del pin.
            const recorrido = PIN_LENGTH_VH * vh;
            const contentP = self.progress;  // 0 → 1, todo el pin es content

            // Razonamiento.y = 0 durante todo el pin (el ST no anima
            // la sección; el relevo se hizo en ladeci's onUpdate).
            // railY = 0.5*vh - contentP * recorrido.
            // Sub-fix: rail a init value con vh actual (preservado).
            // Al inicio del pin (contentP=0), el sub-fix escribe 0.5*vh
            // y la content formula sobrescribe con 0.5*vh - 0 = 0.5*vh
            // (mismo valor, sin conflicto). A partir de ahí, solo la
            // content formula determina la posición del riel.
            if (razonRail) {
                const railY = 0.5 * vh - contentP * recorrido;
                gsap.set(razonRail, { y: 0.5 * vh });
                gsap.set(razonRail, { y: railY });
            }

            // RELOJ LIMPIO de las dos métricas, desacoplado del
            // recorrido del texto. Cada métrica tiene su propia ventana
            // de visibilidad, acotada para que NUNCA se solape con la
            // otra:
            //   Métrica 1 (90.8%): opacity 1 mientras el texto 1
            //   está centrado/legible. Empieza fade OUT cuando el texto
            //   2 empieza a asomar por abajo (mismo punto que el número
            //   1 empieza a apagarse). Llega a opacity 0 ANTES de que
            //   la métrica 2 empiece — el "clean cut" que pidió el
            //   usuario (el número 2 solo aparece cuando el 1 ya
            //   desapareció).
            //   Métrica 2 (65%): opacity 0 hasta que la métrica 1
            //   llega a 0. Empieza fade IN desde 0 en el mismo punto
            //   donde la métrica 1 llega a 0. Llega a opacity 1 antes
            //   de que el texto 2 se centre (queda plena mientras
            //   el texto 2 se mueve del borde inferior al centro).
            //
            // Boundaries (en términos de railY):
            //   Texto 2 empieza a asomar (desc2Top = vh): railY = -0.15*vh
            //   Métrica 1 llega a 0:                    railY = -0.30*vh
            //   Métrica 2 llega a 1:                    railY = -0.45*vh
            //
            // Texto sigue solapándose sin pantalla vacía
            // (independiente de las métricas). El rail es un solo
            // contenedor que se mueve linealmente.
            const railY = 0.5 * vh - contentP * recorrido;

            // Sub-fix: rail a init value con vh actual (preservado).
            // Al inicio del pin (contentP=0), el sub-fix escribe 0.5*vh
            // y la content formula sobrescribe con 0.5*vh - 0 = 0.5*vh
            // (mismo valor, sin conflicto). A partir de ahí, solo la
            // content formula determina la posición del riel.
            if (razonRail) {
                gsap.set(razonRail, { y: 0.5 * vh });
                gsap.set(razonRail, { y: railY });
            }

            // FADE GRADUAL restaurado para las TRES métricas (misma curva
            // asimétrica que Pantalla 1). Cada métrica está atada a la
            // posición de SU descriptor en el viewport:
            //   metricP_1 = (vh - desc1TopInViewport) / vh
            //   metricP_2 = (vh - desc2TopInViewport) / vh
            //   metricP_3 = (vh - desc3TopInViewport) / vh
            // Donde:
            //   desc1TopInViewport = railY + 0.5*vh
            //   desc2TopInViewport = railY + 1.3*vh + 120 + dh1
            //   desc3TopInViewport = railY + 2.1*vh + 240 + 2*dh1
            // La curva asimétrica (idéntica a la validada en Pantalla 1):
            //   fade in: 0 → 1 sobre metricP [0, 0.25]
            //   meseta: 1 sobre [0.25, 0.9]
            //   fade out: 1 → 0 sobre [0.9, 1.0]
            // RESTRICCIÓN "NUNCA visibles a la vez": cada transición
            // usa un offset (~0.144*vh en metricP) que hace que la
            // métrica saliente llegue a 0 justo antes de que la entrante
            // empiece su fade in. La función if fuerza a 0 a la métrica
            // entrante hasta que la saliente alcance 0, garantizando
            // un pequeño "hueco" donde el ojo no ve ningún número.
            // Cruce 1→2: m2 forzado a 0 hasta railY <= -0.5*vh (donde m1 llega a 0).
            // Cruce 2→3: m3 forzado a 0 hasta railY <= -(1.3*vh + 120 + dh1)
            //                     (donde m2 llega a 0, en d2_top=0). El switch 2→3
            //                     está anclado a la posición de d2 (sin cambios), no
            //                     de d3 — la curva de fade de m3 es la misma forma que
            //                     la de m2, solo corrida en el tiempo. El re-acercamiento
            //                     de d3 al d2 no afecta este umbral.
            const _switchRailY_12 = -0.5 * vh;  // cruce de textos 1→2
            const _switchRailY_23 = -1.3 * vh - 120 - _dh1;  // cruce de textos 2→3
            const computeOpacity = (metricP) => {
                const FADE_IN_END = 0.25;
                const FADE_OUT_START = 0.90;
                if (metricP < FADE_IN_END) return metricP / FADE_IN_END;
                if (metricP <= FADE_OUT_START) return 1;
                return (1 - metricP) / (1 - FADE_OUT_START);
            };

            if (razonMetric1) {
                const desc1TopInViewport = railY + 0.5 * vh;
                const metricP_1 = Math.max(0, Math.min(1, (vh - desc1TopInViewport) / vh));
                gsap.set(razonMetric1, { opacity: computeOpacity(metricP_1) });
            }
            if (razonMetric2) {
                // La métrica 2 está a 0 mientras currentRailY > -0.5*vh
                // (antes del cruce de textos). Cuando currentRailY <=
                // -0.5*vh, la métrica 2 empieza su fade in natural.
                if (railY > _switchRailY_12) {
                    gsap.set(razonMetric2, { opacity: 0 });
                } else {
                    const desc2TopInViewport = railY + 1.3 * vh + 120 + _dh1;
                    const metricP_2 = Math.max(0, Math.min(1, (vh - desc2TopInViewport) / vh));
                    gsap.set(razonMetric2, { opacity: computeOpacity(metricP_2) });
                }
            }
            if (razonMetric3) {
                // La métrica 3 está a 0 mientras currentRailY > -1.3*vh - 120
                // - dh1 (antes del cruce de textos 2→3). Cuando
                // currentRailY <= ese threshold (donde d2_top=0 y m2=0),
                // la métrica 3 empieza su fade in natural. Garantiza
                // NUNCA coexistencia con m2.
                if (railY > _switchRailY_23) {
                    gsap.set(razonMetric3, { opacity: 0 });
                } else {
                    const desc3TopInViewport = railY + 2.1 * vh + 240 + 2 * _dh1;
                    const metricP_3 = Math.max(0, Math.min(1, (vh - desc3TopInViewport) / vh));
                    gsap.set(razonMetric3, { opacity: computeOpacity(metricP_3) });
                }
            }

            // ── GATE 4 — Entrada de la conclusión (fase 2) ─────────
            // Mientras contentP < conclusionEntryStart (≈0.7554):
            //   la conclusión está en su rest state off-bottom
            //   (top = baseTop + vh), no visible. Cubre las fases
            //   1→2, 2→3 y el centrado de d3 sin afectar a los
            //   cruces validados.
            //
            // Durante la fase 2 (contentP ∈ [entryStart, 1]):
            //   la conclusión sube linealmente desde off-bottom
            //   hasta su posición de lectura (top = baseTop, centrada
            //   bajo el header). localP = 0 → top = baseTop + vh
            //   (off-bottom), localP = 1 → top = baseTop (centrada).
            //
            // SIN gesto de la frase final: cuerpo + frase final
            // entran juntos como bloque centrado. La recolocación
            // de la frase final al centro y su crecimiento con
            // scale se construye en el gate siguiente (Gate 5).
            if (razonConclusion) {
                // Initial state: top = baseTop + recorridoFase2
                // (conc arranca off-bottom por concOffset px, sube
                // linealmente hasta su posición de lectura).
                // localP = 0 → top = concInitialTop (off-bottom)
                // localP = 1 → top = conclusionBaseTopPx (centrada)
                const concInitialTop = conclusionBaseTopPx + _recorridoFase2Px;
                if (contentP < _conclusionEntryStartRatio) {
                    gsap.set(razonConclusion, { top: concInitialTop + 'px' });
                } else if (contentP < _conclusionEntryEndRatio) {
                    const localP = (contentP - _conclusionEntryStartRatio) / (_conclusionEntryEndRatio - _conclusionEntryStartRatio);
                    const conclusionTopPx = concInitialTop - _recorridoFase2Px * localP;
                    gsap.set(razonConclusion, { top: conclusionTopPx + 'px' });
                } else {
                    // Conc ya centrada en su posición de lectura.
                    // Mantener explícitamente (defensivo contra scrub reverso).
                    gsap.set(razonConclusion, { top: conclusionBaseTopPx + 'px' });
                }
            }

            // ── GATE 4 (continuación): fade out del label ─────────
            // El label "[ El razonamiento ]" persiste opacity 1
            // durante las 3 pantallas de dato. Se desvanece GRADUAL
            // (lineal, sin snap) en una ventana CORTA calibrada en
            // runtime:
            //   Inicio (_labelFadeStartRatio): cuando la métrica 5%
            //   llega a opacity 0 (medido: ≈0.7738 en 1920×1080,
            //   ≈0.7769 en 1440×900).
            //   Fin (_labelFadeEndRatio = 0.83): antes de que el
            //   texto de la conclusión cruce la altura del label
            //   (medido: bodyTop=214 en 1920×1080 a p≈0.8590;
            //   concTop=214 en 1440×900 a p≈0.8422). Margen
            //   pequeño en ambos casos para que el label esté
            //   invisible ANTES del cruce.
            //   Ancho: ~5.6% del pin (vs. ~15.8% de la ventana
            //   previa [_gestureStartRatio, 1.0]). Transición
            //   gradual — el ojo percibe un fade continuo.
            if (razonLabel) {
                let labelOpacity = 1;
                if (contentP > _labelFadeStartRatio) {
                    const labelProgress = (contentP - _labelFadeStartRatio) / (_labelFadeEndRatio - _labelFadeStartRatio);
                    labelOpacity = Math.max(0, Math.min(1, 1 - labelProgress));
                }
                // Blindaje: el label debe estar invisible durante TODO
                // el gesto (cuerpo saliendo + frase final moviéndose/
                // creciendo). Override de seguridad: si el gesto está
                // activo, el label se fuerza a 0. Redundante con la
                // nueva ventana [_labelFadeStartRatio, 0.83] (que ya
                // llega a 0 antes del gesto), pero preservado como
                // red de seguridad por si el cálculo del END varía
                // en un viewport atípico.
                if (contentP > _gestureStartRatio) {
                    labelOpacity = 0;
                }
                gsap.set(razonLabel, { opacity: labelOpacity });
            }

            // ── GATE 5: GESTO FINAL (fase 3) ─────────────────────
            // Simultáneo:
            //   - Cuerpo (.cs-razonamiento__conclusion-body) sube
            //     translateY y sale por arriba. bodyExitDistance
            //     cubre el bottom + 50px de buffer. Sale a
            //     localP ≈ 0.87 (suficiente para que la frase
            //     final quede sola en el último 13% del gesto).
            //   - Frase final (.cs-razonamiento__conclusion-final)
            //     se recoloca al centro del viewport (translate
            //     deltaX/deltaY) y crece con scale desde 1 hasta
            //     scaleFinal. Saturación: el texto llena el 92% de
            //     vw (o el 100% de vh, lo que sea menor).
            // Transform-origin: 50% 50% del propio elemento (default).
            // Orden CSS: scale primero, luego translate — el centro
            // del elemento viaja linealmente del natural al
            // (vw/2, vh/2) sin deriva lateral por el scale.
            // Reset defensivo cuando contentP < _gestureStartRatio
            // (para scrub reverso): cuerpo a y:0, final a x:0 y:0
            // scale:1.
            if (contentP > _gestureStartRatio) {
                // Medir constantes del gesto EN EL PRIMER FRAME
                // del gesto (conc ya centrada, body y final en su
                // posición de lectura). Una sola vez por gesto:
                // _gestureInitialized evita re-medir cada frame.
                if (!_gestureInitialized) {
                    computeGestureConstants();
                    _gestureInitialized = true;
                }
                const localP = (contentP - _gestureStartRatio) / (1 - _gestureStartRatio);
                if (razonBody) {
                    gsap.set(razonBody, { y: -_bodyExitDistance * localP });
                }
                if (razonFinal) {
                    const s = 1 + (_finalTargetScale - 1) * localP;
                    gsap.set(razonFinal, {
                        x: _finalToCenterDeltaX * localP,
                        y: _finalToCenterDeltaY * localP,
                        scale: s,
                    });
                }
            } else {
                // Reset del flag: si el usuario hace scrub reverso
                // y vuelve a entrar al gesto, se re-medirán las
                // constantes con la conc ya centrada de nuevo.
                _gestureInitialized = false;
                if (razonBody) {
                    gsap.set(razonBody, { y: 0 });
                }
                if (razonFinal) {
                    gsap.set(razonFinal, { x: 0, y: 0, scale: 1 });
                }
            }
        },
        // Persistencia off-screen post-gesto: tras scrollar fuera
        // del pin del Razonamiento, el cuerpo y la frase final
        // quedan a y:-2*window.innerHeight (off-screen por encima
        // del viewport) para que NO reaparezcan en sus posiciones
        // CSS naturales (cuerpo en y≈954 al centro, frase final en
        // y≈1204 a la derecha en su tamaño de maqueta).
        //
        // Por qué NO clearProps: clearProps elimina el inline
        // transform y devuelve al estado CSS natural — donde el
        // cuerpo es visible en el centro y la frase final es visible
        // a la derecha en tamaño pequeño. El gesture deja el
        // body/final con translateY/scale no-naturales (off-screen).
        // Necesitamos PRESERVAR ese off-screen, no volver al natural.
        //
        // Por qué -2*window.innerHeight: viewport-relativo, siempre
        // off-screen para cualquier viewport razonable (1080-2160+).
        // El body a y=-2*vh queda en viewport-y = 954-4320 = -3366
        // (para vh=2160); la frase final en 1204-4320 = -3116.
        // Ambos bien fuera del viewport (que va de y=0 a y=vh).
        //
        // Por qué NO onLeaveBack: el else branch del onUpdate
        // (líneas 2142-2148) resetea a y:0 cuando
        // contentP < _gestureStartRatio. En scrub reverso DENTRO
        // del pin, el onUpdate corre primero y resetea los
        // transforms antes de que se ejecute cualquier onLeaveBack.
        // El onLeaveBack se ejecutaría DESPUÉS del onUpdate de
        // re-entrada y como solo es un safety net (el onUpdate ya
        // reseteó), no interfiere con el render.
        onLeave: () => {
            // Persiste el cuerpo off-screen (subió y salió durante
            // el gesto final, debe quedarse fuera). La frase final
            // NO se toca: debe PERMANECER en su estado del gesto
            // (saturada, centrada en el viewport) como cierre
            // dramático. La futura cortina de Decisión 2 la cubrirá.
            if (razonBody) {
                gsap.set(razonBody, { y: -2 * window.innerHeight });
            }
        }
    });

    // ============================================
    // DECISIÓN 2 — Cortina (réplica de la cortina-1)
    // Pino .cs-pin-spacer--decision-2. Contiguo al final del pin del
    // Razonamiento de Decisión 1. Anclado vía razonamiento1ST.end.
    //
    // UBICACIÓN EN EL ARCHIVO: al final de la función, DESPUÉS del ST
    // del Razonamiento-1. Esto es crítico: la captura de
    // `razonamiento1ST` se hace con ScrollTrigger.getAll().find() en
    // el momento de crear este ST. Si se creara antes que el ST del
    // Razonamiento-1, la captura devolvería undefined y el start
    // caería al fallback (0), rompiendo el anclaje.
    //
    // DIFERENCIAS con cortina-1:
    //   - Vive FUERA del stage (es hermana del Razonamiento en <main>),
    //     position:fixed + z:5 a nivel de documento (ver override en
    //     decisiones-responsive.css). Por eso NO anima el track: el
    //     track es del stage, no de Decisión 2.
    //   - RÉPLICA exacta de cortina-1 en clip-path del panel, cascada
    //     de contenido (label/título/media), ventanas, eases y offsets.
    //     Antes tenía una aceleración local sqrt y ventanas más tardías
    //     (label 0.50→0.80, título 0.58→0.90, media 0.66→1.00); ahora
    //     coincide con cortina-1 (label 0.25→0.70, título 0.33→0.72,
    //     media 0.45→1.00). Eases: power1.out para label/título,
    //     lineal ('none') para media. Offsets: 860/800/400.
    //   - Variables y queries sufijadas (decision2*). Scope del closure
    //     independiente del de cortina-1 — el estado mutable (clip-path
    //     inline, transform de label/título/media) NO se contamina.
    //   - Salida de razonFinal (frase final del Razonamiento de D1)
    //     sincronizada con el clip-path del verde. Antes usaba
    //     localProgress (acelerado por sqrt); ahora usa self.progress
    //     directo para coincidir con la nueva velocidad del verde.
    // ============================================

    const decision2Panel = document.querySelector('.cs-decision[data-dec="2"]');
    const decision2Label = document.querySelector('.cs-decision[data-dec="2"] .cs-decision__label');
    const decision2Title = document.querySelector('.cs-decision[data-dec="2"] .cs-decision__title');
    const decision2Media = document.querySelector('.cs-decision[data-dec="2"] .cs-decision__media');

    // Captura del ST del Razonamiento-1 para anclar el start al final
    // real (post pinSpacing). Mismo patrón que la cortina-1 usó con
    // decisionesTitulosST, y que la expansión-1 usó con cortinaST.
    // Solo funciona si este código corre DESPUÉS de crear el ST del
    // Razonamiento-1 (ver comentario de ubicación arriba).
    const razonamiento1ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-1-razonamiento')
    );

    // ── Salida de razonFinal durante la cortina-2 ──
    // La frase final del Razonamiento (Decisión 1) está saturada y
    // centrada al inicio de este ST (scale ≈5.41, x ≈_finalToCenterDeltaX).
    // Mientras el verde entra desde la derecha, la frase final sale
    // por la izquierda con fade out, sincronizada con el clip-path.
    //
    // OPTION-1 (acoplamiento controlado): el onUpdate de la cortina-2
    // anima razonFinal. Decisión: la cortina-2 es la responsable de
    // limpiar el espacio para su entrada. razonFinal es el ÚNICO
    // elemento de Decisión 1 visible al inicio de este ST, y la
    // salida es un efecto visual de la entrada de la cortina-2.
    //
    // DISTANCIA: vw * 2. A 1920w con scale 5.41, el texto visual mide
    // ~3570px de ancho. Moverlo solo vw (1920px) lo dejaría ~54% fuera
    // del viewport, todavía visible. vw * 2 (3840px) lo saca COMPLETO
    // por la izquierda con margen.
    //
    // SCRUB REVERSO: al volver al Razonamiento, el progress de la
    // cortina-2 baja a 0 y razonFinal regresa a x = originalX,
    // opacity = 1. El Razonamiento (progress 1) reescala a su estado
    // saturado. El punto de transición (scrollY = razonamiento1ST.end)
    // queda visualmente continuo: ambos STs coinciden en el mismo x.
    let razonFinalExitOriginalX = 0;
    let razonFinalExitCaptured = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-2',
        start: () => razonamiento1ST ? razonamiento1ST.end : 0,
        // Pin de 4.73vh (réplica de cortina-1). Mismo razonamiento:
        // entry scroll imagen = 0.55 × 4.73 = 2.6vh, imagen llega en p=1.0,
        // expansión-2 arranca sin pausa.
        end: () => '+=' + (window.innerHeight * 4.73),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;

            // 1. Clip-path del panel verde. Mismo ease y mismo argumento
            //    que cortina-1 (clipEase sobre self.progress directo, sin
            //    sqrt). La cortina-2 ya no acelera localmente; ahora se
            //    comporta idénticamente a cortina-1.
            const clipProgress = clipEase(self.progress);
            gsap.set(decision2Panel, {
                clipPath: `inset(0 0 0 ${(1 - clipProgress) * 100}%)`
            });

            // 2. Gate 3 — Cascada de contenido, RÉPLICA de cortina-1.
            //    Imagen: [0.45, 1.0], lineal. Pin 4.73vh → entrada = 2.6vh.
            const labelP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.25, 0.70));
            const titleP = gsap.parseEase('power1.out')(subProgress(self.progress, 0.33, 0.72));
            const mediaP = gsap.parseEase('none')(subProgress(self.progress, 0.45, 1.0));
            gsap.set(decision2Label, { opacity: labelP, x: 860 * (1 - labelP) });
            gsap.set(decision2Title, { opacity: titleP, x: 800 * (1 - titleP) });
            gsap.set(decision2Media, { opacity: mediaP, x: 400 * (1 - mediaP) });

            // 3. Salida de razonFinal (frase final del Razonamiento de D1).
            //    Scopeada a [data-dec="1"] — la query global
            //    `.cs-razonamiento__conclusion-final` (sin scope) podría
            //    matchear también la frase final de Decisión 2 cuando se
            //    construya. Mismo patrón de scope que decision2*.
            //
            //    Réplica del trackInner de cortina-1: mismo easing (lineal
            //    'none'), misma distancia (vw * 0.3), mismo fade (lineal
            //    1 - self.progress). La frase se mueve como un paralaje
            //    detrás del verde, idéntica velocidad que el trackInner
            //    de cortina-1. La captura de x original se hace en el
            //    primer frame (lazy) sin getComputedStyle.
            if (razonFinal) {
                if (!razonFinalExitCaptured) {
                    // Captura lazy: leer la x del transform inline que el
                    // Razonamiento dejó vía _finalToCenterDeltaX. El
                    // Razonamiento usa formato `translate(xpx, ypx) scale(...)`
                    // en el style inline, NO `matrix(...)`. Parseamos
                    // ambos formatos para máxima robustez.
                    const inlineStyle = razonFinal.style.transform;
                    let tx = 0;
                    const matrixMatch = inlineStyle.match(/matrix\(([^)]+)\)/);
                    if (matrixMatch) {
                        tx = parseFloat(matrixMatch[1].split(',')[4]);
                    } else {
                        const translateMatch = inlineStyle.match(/translate\(\s*([-\d.]+)/);
                        if (translateMatch) {
                            tx = parseFloat(translateMatch[1]);
                        }
                    }
                    razonFinalExitOriginalX = tx;
                    razonFinalExitCaptured = true;
                }
                const vw = window.innerWidth;
                gsap.set(razonFinal, {
                    x: razonFinalExitOriginalX - self.progress * vw * 0.3,
                    opacity: 1 - self.progress
                });
            }
        }
    });

    // ============================================
    // DECISIÓN 2 — Expansión (réplica de la expansión-1)
    // Pino .cs-pin-spacer--decision-2-expansion. Contiguo al final del
    // pin de la cortina-2. Misma lógica de dos fases (imagen crece a
    // la izquierda en fase 1, full-bleed en fase 2).
    //
    // DIFERENCIAS con expansión-1:
    //   - Anclada a cortina2ST.end (no a cortinaST.end).
    //   - Usa decision2Media en lugar de decision1Media.
    //   - Flag independiente: gate4Initialized2. CRÍTICO: la
    //     expansión-1 y la expansión-2 son closures separados; si
    //     compartieran flag, el setup auto→numérico de una podría
    //     saltar en la otra y romper la primera frame de la
    //     expansión opuesta. Mismo principio de scope que
    //     razonLabel, trackInner, etc.
    // ============================================

    // Captura del ST de la cortina-2 para anclar el start al final real.
    const cortina2ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-2')
    );

    // Flag del setup auto→numérico de la expansión-2. Scope propio.
    let gate4Initialized2 = false;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-2-expansion',
        start: () => cortina2ST ? cortina2ST.end : 0,
        // Pin de 0.8vh para la expansión. Equilibrio entre velocidad
        // y respiración: suficientemente rápido para no sentirse lento,
        // suficientemente lento para que las dos fases se lean.
        end: () => '+=' + (window.innerHeight * 0.8),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;

            // Setup idempotente: convierte left/bottom de auto a numérico
            // y width/height a auto. Scope propio (gate4Initialized2),
            // NO comparte con la expansión-1.
            if (!gate4Initialized2) {
                gsap.set(decision2Media, {
                    left: window.innerWidth / 2,
                    bottom: margin,
                    width: 'auto',
                    height: 'auto'
                });
                gate4Initialized2 = true;
            }

            const p = self.progress;
            const vw = window.innerWidth;

            if (p <= 0.7) {
                // FASE 1: imagen crece SOLO a la izquierda.
                // Split 70/30: Fase 1 ocupa 70% del scroll, Fase 2 (full-bleed) el 30% final.
                const f1 = p / 0.7;
                const f1e = clipEase(f1);

                const newLeft = vw / 2 + (margin - vw / 2) * f1e;
                const textX = newLeft - vw / 2;

                gsap.set(decision2Media, {
                    left: newLeft,
                    right: margin,
                    top: headerH + margin,
                    bottom: margin,
                    borderRadius: 24
                });
                gsap.set(decision2Label, { x: textX, opacity: 1 - f1e });
                gsap.set(decision2Title, { x: textX, opacity: 1 - f1e });
            } else {
                // FASE 2: imagen se expande a los 4 extremos. border-radius → 0.
                // Split 70/30: Fase 2 arranca a p=0.7 y termina a p=1.0.
                const f2 = (p - 0.7) / 0.3;
                const f2e = gsap.parseEase('power1.out')(f2);

                gsap.set(decision2Media, {
                    top: (headerH + margin) * (1 - f2e),
                    right: margin * (1 - f2e),
                    left: margin * (1 - f2e),
                    bottom: margin * (1 - f2e),
                    borderRadius: 24 * (1 - f2e)
                });
            }
        }
    });

    // ============================================
    // DECISIÓN 2 — El Problema 2 (réplica de El Problema 1)
    // Pino .cs-pin-spacer--decision-2-problema. Contiguo al final del
    // pin de la expansión-2. Anclado vía expansion2ST.end.
    //
    // UBICACIÓN EN EL ARCHIVO: al final de la función, DESPUÉS del ST
    // de la expansión-2. Crítico: la captura de `expansion2ST` con
    // ScrollTrigger.getAll().find() debe encontrar el ST ya creado. Si
    // se creara antes, la captura devolvería undefined y el start
    // caería al fallback (0), rompiendo el anclaje.
    //
    // DIFERENCIAS con El Problema 1:
    //   - Anclado a expansion2ST.end (no a expansionST.end).
    //   - Queries scopeadas a [data-dec="2"]: .cs-problema[data-dec="2"],
    //     .cs-decision[data-dec="2"], .cs-decision-mc[data-dec="2"].
    //   - Variables sufijadas (problema2*).
    //   - Sin flag de estado mutable propio: el ST de El Problema no usa
    //     ningún let de closure tipo gate4Initialized. Es self-contained
    //     por frame (el onUpdate recalcula todo desde self.progress).
    //   - .cs-decision-mc[data-dec="2"] todavía NO existe (se construirá
    //     después); el gsap.set sobre ese selector es no-op silencioso.
    //     Cuando se construya La Decisión 2, el gsap.set ya la estará
    //     gobernando automáticamente.
    //
    // LÓGICA idéntica a El Problema 1:
    //   - Cortina: primer 1/3 del rango (0 → vh). ease power2.out.
    //     .cs-decision[data-dec="2"] sale de 0 a -vh (arriba).
    //     .cs-problema[data-dec="2"] entra de vh a 0 (abajo → centro).
    //   - Cascada: tramo [1/3, 2/3] del progress global.
    //     Título + 4 cards, stagger STEP/2, STEP=1/3 del rango de cascada.
    //   - Respiro: último 1/3 (saturado en 1).
    // ============================================

    const expansion2ST = ScrollTrigger.getAll().find(st =>
        st.trigger && st.trigger.classList &&
        st.trigger.classList.contains('cs-pin-spacer--decision-2-expansion')
    );

    // Captura única de los 5 nodos de la cascada (título + 4 cards).
    // gsap.utils.toArray respeta el document order (grid 2-col, row-by-row).
    const problema2Title = document.querySelector('.cs-problema[data-dec="2"] .cs-problema__title');
    const problema2Cards = gsap.utils.toArray('.cs-problema[data-dec="2"] .cs-problema__card');
    const problema2Nodes = problema2Title ? [problema2Title, ...problema2Cards] : problema2Cards;

    ScrollTrigger.create({
        trigger: '.cs-pin-spacer--decision-2-problema',
        start: () => expansion2ST ? expansion2ST.end : 0,
        // Pin 2vh: 1vh cortina + 1vh cascada. Misma corrección que
        // El Problema 1 — elimina el respiro de 1vh que congelaba la
        // pantalla antes de que La Decisión 2 arrancara.
        end: () => '+=' + (window.innerHeight * 2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            if (ScrollTrigger.isRefreshing) return;
            const vh = window.innerHeight;
            const PIN_LENGTH_VH = 2;
            const scrolled = self.progress * (vh * PIN_LENGTH_VH);

            // CORTINA: primer 1/2 del rango (0 → vh). Saturada en p=0.5.
            const curtainP = gsap.utils.clamp(0, 1, scrolled / vh);
            const eased = gsap.parseEase('power2.out')(curtainP);

            gsap.set('.cs-decision[data-dec="2"]', { y: -eased * vh });     // 0 → -vh (sale arriba)
            gsap.set('.cs-problema[data-dec="2"]', { y: vh - eased * vh }); // vh → 0 (entra desde abajo)

            // La Decisión 2: en y:0 solo cuando El Problema 2 cubre el viewport.
            gsap.set('.cs-decision-mc[data-dec="2"]', { y: curtainP >= 1 ? 0 : '100vh' });

            // CASCADA: tramo [1/2, 1] del progress — llena el pin sin respiro.
            const CASCADE_START = 1 / 2;
            const CASCADE_END = 1;
            const STEP = 1 / 3;
            const cascadeP = gsap.utils.clamp(0, 1,
                (self.progress - CASCADE_START) / (CASCADE_END - CASCADE_START)
            );

            for (let i = 0; i < problema2Nodes.length; i++) {
                const nodeStart = i * STEP / 2;
                const nodeEnd = nodeStart + STEP;
                const localP = gsap.utils.clamp(0, 1, (cascadeP - nodeStart) / STEP);
                const localEased = gsap.parseEase('power2.out')(localP);
                gsap.set(problema2Nodes[i], {
                    y: 400 * (1 - localEased),
                    opacity: localEased
                });
            }
        }
    });
}
