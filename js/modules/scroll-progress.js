// js/modules/scroll-progress.js
// Barra de progreso de lectura — genérica, sin dependencia de GSAP.
// Reutilizable en cualquier página: calcula scrollY/documentHeight y
// pinta un <div> fixed cuyo fill se escala con transform (no width),
// para evitar layout thrashing en cada frame de scroll.

export function initScrollProgress({ anchorSelector } = {}) {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');

    const fill = document.createElement('div');
    fill.className = 'scroll-progress__fill';
    bar.appendChild(fill);
    document.body.appendChild(bar);

    if (anchorSelector) {
        const anchor = document.querySelector(anchorSelector);
        if (anchor) {
            const setTop = () => {
                bar.style.top = `${anchor.getBoundingClientRect().height}px`;
            };
            setTop();
            window.addEventListener('resize', setTop);
        }
    }

    let ticking = false;

    const update = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollHeight))
            : 0;
        fill.style.transform = `scaleX(${progress})`;
        ticking = false;
    };

    update();

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    });
}
