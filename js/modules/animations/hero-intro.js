// ============================================
// HERO INTRO — Cejilla y titular (Lite, sin GSAP)
// Aislado: no toca case-cards ni scripts globales.
// ============================================

// Word Swapper: cicla palabras dinámicamente en el H1.
// El container se construye ANTES de hero-active para que el H1
// ya esté en su layout definitivo cuando se revele la animación.
function initWordSwapper(hero) {
    const words = ['negocio', 'producto', 'usuario', 'mañana'];

    // Div de medición oculto con las mismas propiedades tipográficas del H1
    const measureDiv = document.createElement('div');
    measureDiv.className = 'word-swapper-measure';
    measureDiv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(measureDiv);

    const h1 = hero.querySelector('h1');
    if (h1) {
        const computedStyle = window.getComputedStyle(h1);
        measureDiv.style.fontFamily = computedStyle.fontFamily;
        measureDiv.style.fontSize = computedStyle.fontSize;
        measureDiv.style.fontWeight = computedStyle.fontWeight;
        measureDiv.style.letterSpacing = computedStyle.letterSpacing;
        measureDiv.style.textTransform = 'uppercase';
    }

    words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        measureDiv.appendChild(span);
    });

    // Busca el hero-word que contiene "negocio"
    const wordElements = hero.querySelectorAll('.hero-word');
    let heroWord = null;
    wordElements.forEach((el) => {
        if (el.textContent.trim() === 'negocio') {
            heroWord = el;
        }
    });

    if (!heroWord) return;

    // Construye el container y lo inyecta en el DOM AHORA — antes de hero-active —
    // para que el H1 ya tenga su layout final cuando la animación lo revele.
    const parent = heroWord.parentElement;
    const container = document.createElement('span');
    container.className = 'word-swapper-container';

    const h1El = hero.querySelector('h1');
    if (h1El) {
        container.style.lineHeight = window.getComputedStyle(h1El).lineHeight;
    }

    const swapper = document.createElement('span');
    swapper.className = 'word-swapper';
    swapper.textContent = words[0];

    heroWord.textContent = '';
    heroWord.appendChild(swapper);
    parent.insertBefore(container, heroWord);
    container.appendChild(heroWord);

    // Fija el ancho al máximo (PRODUCTO, la más larga) sin transición,
    // para que el layout no cambie entre palabras.
    const measureSpans = measureDiv.querySelectorAll('span');
    const maxWidth = Math.max(...Array.from(measureSpans).map(s => s.offsetWidth)) + 4;
    container.style.transition = 'none';
    container.style.width = maxWidth + 'px';
    void container.offsetWidth;

    // La rotación de palabras empieza cuando el botón termina su animación de entrada
    function startRotation() {
        let currentIndex = 0;
        let isAnimating = false;

        function changeWord() {
            if (isAnimating) return;
            isAnimating = true;

            swapper.classList.add('word-swapper-exit');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                swapper.textContent = words[currentIndex];
                container.style.width = maxWidth + 'px';

                swapper.classList.remove('word-swapper-exit');
                swapper.classList.add('word-swapper-enter');

                setTimeout(() => {
                    swapper.classList.remove('word-swapper-enter');
                    isAnimating = false;
                }, 600);
            }, 600);
        }

        // Primera rotación a los 800ms, luego cada 2.5 segundos
        setTimeout(changeWord, 800);
        setInterval(changeWord, 2500);
    }

    // Espera a que el botón termine su animación de entrada (transitionend)
    // para arrancar la rotación como último paso de la coreografía.
    const btnWrapper = hero.querySelector('.hero-btn-wrapper');
    if (btnWrapper) {
        function onBtnTransitionEnd(e) {
            if (e.propertyName !== 'opacity') return;
            btnWrapper.removeEventListener('transitionend', onBtnTransitionEnd);
            startRotation();
        }
        btnWrapper.addEventListener('transitionend', onBtnTransitionEnd);
    } else {
        setTimeout(startRotation, 2000);
    }
}

export function initHeroIntro() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // 1. Divide el H1 en palabras envueltas en <span class="hero-word">.
    //    Cada palabra incluye su espacio final (white-space: pre en CSS preserva el gap).
    const h1 = hero.querySelector('h1');
    if (h1) {
        const lineSpans = h1.querySelectorAll('.hero__headline-line, .hero__headline-accent');
        let wordIndex = 0;

        lineSpans.forEach((span) => {
            if (span.querySelector('.hero-word')) return; // idempotencia

            const matches = span.textContent.match(/\S+\s*/g) || [];
            span.textContent = '';

            matches.forEach((part) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'hero-word';
                wordSpan.style.setProperty('--word-index', wordIndex);
                wordSpan.textContent = part;
                span.appendChild(wordSpan);
                wordIndex++;
            });
        });
    }

    // 2. Envuelve el botón en .hero-btn-wrapper para aislar la animación de entrada
    //    del efecto magnético (que escribe translate3d inline directo al .btn--primary).
    const btn = hero.querySelector('.btn--primary');
    if (btn && !btn.closest('.hero-btn-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'hero-btn-wrapper';
        btn.parentElement.insertBefore(wrapper, btn);
        wrapper.appendChild(btn);
    }

    // 3. Activa la coreografía 100ms después del window.load.
    //    initWordSwapper se llama ANTES de hero-active para que el container
    //    ya tenga su ancho final cuando el H1 se revele.
    const activate = () => {
        setTimeout(() => {
            initWordSwapper(hero);
            hero.classList.add('hero-active');
        }, 100);
    };

    if (document.readyState === 'complete') {
        activate();
    } else {
        window.addEventListener('load', activate, { once: true });
    }
}
