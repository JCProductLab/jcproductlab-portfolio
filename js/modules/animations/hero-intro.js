// ============================================
// HERO INTRO — Cejilla y titular (Lite, sin GSAP)
// Aislado: no toca case-cards ni scripts globales.
// ============================================

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

    // 3. Activa la coreografía 100ms después del window.load
    const activate = () => {
        setTimeout(() => hero.classList.add('hero-active'), 100);
    };

    if (document.readyState === 'complete') {
        activate();
    } else {
        window.addEventListener('load', activate, { once: true });
    }
}
