// ============================================
// HERO INTRO — Cejilla y titular (Lite, sin GSAP)
// Aislado: no toca case-cards ni scripts globales.
// ============================================

// Word Swapper: cicla palabras dinámicamente en el H1
// NO modifica HTML hasta 4 segundos después de window.load
function initWordSwapper(hero) {
    const words = ['negocio', 'producto', 'usuario', 'mañana'];

    // Crea el div de medición oculto SIN modificar el H1 todavía
    const measureDiv = document.createElement('div');
    measureDiv.className = 'word-swapper-measure';
    measureDiv.setAttribute('aria-hidden', 'true');

    // Inyecta en body para evitar herencia de transformaciones
    document.body.appendChild(measureDiv);

    // Copia estilos exactos del H1
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

    // Arranca el swapper: modifica DOM e inicia el ciclo
    function startSwapper() {
        const wordElements = hero.querySelectorAll('.hero-word');
        let heroWord = null;

        wordElements.forEach((el) => {
            if (el.textContent.trim() === 'negocio') {
                heroWord = el;
            }
        });

        if (!heroWord) return;

        // Ahora modifica el HTML
        const parent = heroWord.parentElement;
        const container = document.createElement('span');
        container.className = 'word-swapper-container';

        // Fija el line-height exacto del H1 para evitar saltos al activarse
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

        // Estado
        let currentIndex = 0;
        let isAnimating = false;

        // Medición inicial con buffer de 4px
        const measureSpans = measureDiv.querySelectorAll('span');
        const initialWidth = measureSpans[0].offsetWidth + 4;
        container.style.width = initialWidth + 'px';

        // Función para cambiar palabra
        function changeWord() {
            if (isAnimating) return;
            isAnimating = true;

            swapper.classList.add('word-swapper-exit');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                swapper.textContent = words[currentIndex];

                // Mide con buffer de 4px
                const newWidth = measureSpans[currentIndex].offsetWidth + 4;
                container.style.width = newWidth + 'px';

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
    // para arrancar el swapper como último paso de la coreografía.
    const btnWrapper = hero.querySelector('.hero-btn-wrapper');
    if (btnWrapper) {
        function onBtnTransitionEnd(e) {
            if (e.propertyName !== 'opacity') return;
            btnWrapper.removeEventListener('transitionend', onBtnTransitionEnd);
            startSwapper();
        }
        btnWrapper.addEventListener('transitionend', onBtnTransitionEnd);
    } else {
        // Fallback: el wrapper no existe todavía, esperar un tick extra
        setTimeout(startSwapper, 2000);
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

    // 3. Activa la coreografía 100ms después del window.load e inicia word-swapper
    const activate = () => {
        setTimeout(() => {
            hero.classList.add('hero-active');
            initWordSwapper(hero);
        }, 100);
    };

    if (document.readyState === 'complete') {
        activate();
    } else {
        window.addEventListener('load', activate, { once: true });
    }
}
