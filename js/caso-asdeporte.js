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
    // ============================================
    function initScrollPhase() {
        ScrollTrigger.create({
            trigger: apertura,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
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
    // La métrica ahora es el primer panel del track horizontal — visible por
    // defecto; su entrada la orquesta el ScrollTrigger del track (animateMetrica).
    gsap.set(ticker, { willChange: 'transform' });
    gsap.set(tracks, { willChange: 'transform' });

    playFase1();
    initScrollPhase();

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
            { el: contextoTags,  start: 0.45, end: 0.70 }
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
    // Track horizontal compartido — Métrica (panel 1) → Contexto (panel 2)
    //
    // El progreso del track se reparte en tres tramos:
    //   [0 .. COMET_END]          la cometa sube; el track no se desplaza aún
    //   [COMET_END .. SHIFT_END]  desplazamiento métrica → contexto (un viewport)
    //   [SHIFT_END .. 1]          pausa de Contexto: pintado + scroll del texto
    //
    // Límites y recorrido son ajustables — se calibran en pasos posteriores.
    // ============================================
    const track = document.querySelector('.cs-horizontal-track');
    const trackInner = document.querySelector('.cs-horizontal-track__inner');
    let metricaAnimated = false;

    // Límites de los tramos
    // COMET_END = SHIFT_END: la cometa recorre toda su ruta durante el shift (tramo 1 + 2)
    const COMET_END = 0.45;
    const SHIFT_END = 0.45;

    // Desplazamiento total = contenido total - viewport.
    // Esto asegura que la columna derecha de Contexto quede completamente visible
    // antes de que arranque el pintado (Tramo 3).
    const getScrollAmount = () => trackInner.scrollWidth - window.innerWidth;

    // Recorrido de scroll total del track — calibrado para que SHIFT_END = 0.45
    // coincida con el desplazamiento completo del trackInner (getScrollAmount).
    const getTrackScroll = () => getScrollAmount() / 0.45;

    // La flecha curva de Contexto se dibuja una sola vez dentro del tramo 3.
    let contextoArrowFired = false;

    ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: () => `+=${getTrackScroll()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
            if (!metricaAnimated) {
                metricaAnimated = true;
                animateMetrica();
            }
        },
        onUpdate: (self) => {
            const p = self.progress;

            // TRAMO 1 (0 → 0.25): la cometa avanza ~40%, sin desplazamiento horizontal.
            if (p <= 0.25) {
                const cometProgress = (p / 0.25) * 0.40;
                updateCometTrail(cometProgress);
                gsap.set(trackInner, { x: 0 });
                [contextoLabel, contextoTitle, contextoMedia, contextoTags].forEach(el => {
                    if (el) gsap.set(el, { opacity: 0, x: 120 });
                });
            }
            // TRAMO 2 (0.25 → 0.45): la cometa avanza del 40% al 100%, track se desplaza.
            else if (p <= 0.45) {
                const shiftProgress = (p - 0.25) / 0.20;
                const cometProgress = 0.40 + shiftProgress * 0.60;
                updateCometTrail(cometProgress);
                gsap.set(trackInner, { x: -getScrollAmount() * shiftProgress });
                renderContextoEntrada(p);
                renderContexto(0);
                contextoArrowFired = false;
            }
            // TRAMO 3 (0.45 → 1): cometa completa, Contexto pintado.
            else {
                updateCometTrail(1);
                gsap.set(trackInner, { x: -getScrollAmount() });
                const contextoProgress = (p - 0.45) / 0.55;
                renderContextoEntrada(0.45);
                renderContexto(contextoProgress);

                if (!contextoArrowFired && contextoProgress > 0.15) {
                    contextoArrowFired = true;
                    animateContextoArrow();
                }
            }
        }
    });

    // Reset invisible: dispara solo cuando el track ya salió completamente por
    // abajo del viewport en reversa (scroll < 3280), donde el usuario no lo ve.
    ScrollTrigger.create({
        trigger: track,
        start: 'top bottom',
        onLeaveBack: () => resetMetrica()
    });
}
