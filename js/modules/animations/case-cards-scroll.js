// ============================================
// CASE CARDS — Scrollytelling 1:1 con case-studies.html (referencia)
// Solo desktop (min-width: 1024px). Mobile/tablet conservan scroll natural.
// ============================================

import { animateShowCaseCursor, animateHideCaseCursor } from './case-cursor.js';

export function initCaseCardsScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.case-cards');
    if (!section) return;

    const cards = Array.from(section.querySelectorAll('.case-card'));
    if (cards.length < 3) return;

    // Selector para los elementos de texto que se animan en stagger (orden DOM = orden de revelado)
    const textSelector = [
        '.case-card-title',
        '.case-card__description',
        '.large-paragraph',
        '.case-card__solution',
        '.case-card__metrics',
        '.case-card__cta'
    ].join(',');

    const fadeInText = (cardEl) => gsap.to(cardEl.querySelectorAll(textSelector), {
        opacity: 1, y: 0, stagger: 0.25, duration: 1.2, ease: 'power1.out'
    });

    const fadeOutText = (cardEl) => gsap.to(cardEl.querySelectorAll(textSelector), {
        opacity: 0, y: -20, duration: 0.5, ease: 'power1.in'
    });

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        // Container: pin canvas con perspective 3D (necesaria para rotateY: 180 del card 1)
        gsap.set(section, {
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            perspective: 2000,
            transformStyle: 'preserve-3d'
        });

        // Cards: stack absoluto, transform-origin centrado, backface visible (clave para el flip)
        cards.forEach((card, i) => {
            gsap.set(card, {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: i + 1,
                transformOrigin: 'center center',
                backfaceVisibility: 'visible',
                willChange: 'transform, opacity, border-radius'
            });

            // Estado inicial de los textos (replica .animate-text de la referencia)
            gsap.set(card.querySelectorAll(textSelector), {
                opacity: 0,
                y: 30,
                willChange: 'transform, opacity'
            });
        });

        // --- ESTADOS INICIALES (referencia exacta) ---
        gsap.set(cards[0], { yPercent: 100, scale: 0, borderRadius: '280px', rotateY: 180, opacity: 0 });
        gsap.set(cards[1], { yPercent: 100, scale: 0.4, borderRadius: '280px', rotate: -15, opacity: 1 });
        gsap.set(cards[2], { yPercent: 100, scale: 0.4, borderRadius: '280px', rotate: 15, opacity: 1 });

        const mainTl = gsap.timeline({
            scrollTrigger: {
                id: 'caseCards',
                trigger: section,
                start: 'top top',
                end: '+=8000',
                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onLeaveBack: () => animateHideCaseCursor(),
                onLeave: () => animateHideCaseCursor()
            }
        });

        // Zona muerta inicial: pin activo pero sin animación visible (~850px de scroll libre)
        mainTl.to({}, { duration: 0.1 });

        // ─── 1. INTRO CARD 1 ───────────────────────────────
        // PASO A: Entrada (zoom in + fade + sube al centro)
        mainTl.to(cards[0], {
            yPercent: 0,
            scale: 0.3,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out'
        });

        // PASO B: Flip 3D — rotateY 180° → 0° (queda derecho y legible)
        mainTl.to(cards[0], {
            rotateY: 0,
            duration: 2,
            ease: 'none'
        });

        // PASO C: Crecer al 100% perdiendo border-radius
        mainTl.to(cards[0], {
            scale: 1,
            borderRadius: '0px',
            duration: 1.5,
            ease: 'power2.inOut'
        });

        // Cursor nace con expansión de Card 1 al bajar; dirección > 0 evita re-animación al subir
        mainTl.call(() => {
            const st = ScrollTrigger.getById('caseCards');
            if (st && st.direction > 0) animateShowCaseCursor();
        }, null, '<');

        // PASO D: Aparece el texto en stagger (después de que Card 1 y cursor están al 100%)
        mainTl.add(fadeInText(cards[0]));

        // ─── 2. TRANSICIÓN 1 → 2 ───────────────────────────
        mainTl.addLabel('push1');
        mainTl.add(fadeOutText(cards[0]), 'push1');
        mainTl.to(cards[0], {
            yPercent: -100, scale: 0.6, borderRadius: '280px', rotate: -15,
            opacity: 1, duration: 2.5
        }, 'push1');
        mainTl.to(cards[1], {
            yPercent: 0, scale: 1, borderRadius: '0px', rotate: 0,
            opacity: 1, duration: 2.5
        }, 'push1');
        mainTl.add(fadeInText(cards[1]), '-=0.2');

        // ─── 3. TRANSICIÓN 2 → 3 ───────────────────────────
        mainTl.addLabel('push2');
        mainTl.add(fadeOutText(cards[1]), 'push2');
        mainTl.to(cards[1], {
            yPercent: -100, scale: 0.6, borderRadius: '280px', rotate: 15,
            opacity: 1, duration: 2.5
        }, 'push2');
        mainTl.to(cards[2], {
            yPercent: 0, scale: 1, borderRadius: '0px', rotate: 0,
            opacity: 1, duration: 2.5
        }, 'push2');
        mainTl.add(fadeInText(cards[2]), '-=0.2');

        // ─── 4. SALIDA FINAL ───────────────────────────────
        mainTl.addLabel('final');
        // Al subir: Card 3 acaba de revertir su salida y está al 100% — cursor aparece aquí
        mainTl.call(() => {
            const st = ScrollTrigger.getById('caseCards');
            if (st && st.direction < 0) animateShowCaseCursor();
        }, null, 'final');
        mainTl.add(fadeOutText(cards[2]), 'final');
        mainTl.to(cards[2], {
            yPercent: -100, scale: 0.5, borderRadius: '280px', rotate: -15,
            opacity: 1, duration: 2.5
        }, 'final');

        // Cleanup: gsap.matchMedia revierte automáticamente todos los gsap.set anteriores
        // al cambiar de breakpoint. No hace falta cleanup manual.
        return () => { };
    });

    // ============================================
    // MOBILE / TABLET (< 1024px) — scroll natural + animaciones de entrada
    // ============================================
    mm.add('(max-width: 1023px)', () => {
        cards.forEach((card) => {
            const bgImage = card.querySelector('.case-card__bg');
            const metrics = card.querySelectorAll('.metric-badge');

            // 1. Stagger en escalera de elementos de la columna izquierda, filtrando ocultos
            const leftEls = [
                card.querySelector('.case-card-title'),
                card.querySelector('.case-card__description'),
                card.querySelector('.large-paragraph')
            ].filter(el => el && getComputedStyle(el).display !== 'none');

            if (leftEls.length) {
                gsap.set(leftEls, { opacity: 0, y: 20 });
                gsap.to(leftEls, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 65%',
                        toggleActions: 'play none none reverse'
                    }
                });
            }

            // 2. Parallax de imagen: sobredimensionada para evitar huecos al moverse
            if (bgImage) {
                gsap.set(bgImage, { height: '140%', top: '-20%', objectFit: 'cover' });
                gsap.to(bgImage, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.5
                    }
                });
            }

            // 3. Columna derecha — cascada ágil con solapamiento
            const solutionEl = card.querySelector('.case-card__solution');
            const ctaEl      = card.querySelector('.case-card__cta');

            const rightTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card.querySelector('.case-card__right') || card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Subtítulo: arranca primero, 0.6s
            const solutionVisible = solutionEl && getComputedStyle(solutionEl).display !== 'none';
            if (solutionVisible) {
                gsap.set(solutionEl, { opacity: 0, y: 20 });
                rightTl.to(solutionEl, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
            }

            // Badges: arranca cuando el subtítulo lleva 0.12s (20% de 0.6s)
            if (metrics.length) {
                gsap.set(metrics, { opacity: 0, scale: 0.8, y: 20 });
                rightTl.to(metrics, {
                    opacity: 1, scale: 1, y: 0,
                    duration: 0.5, ease: 'back.out(2)', stagger: 0.15
                }, solutionVisible ? '<0.12' : 0);
            }

            // CTA: parte de rightTl para coreografía coordinada con métricas
            if (ctaEl) {
                gsap.set(ctaEl, { opacity: 0, y: 10, force3D: true });
                rightTl.to(ctaEl, {
                    opacity: 1, y: 0, duration: 0.4, ease: 'power1.out', force3D: true
                }, '<0.3');
            }
        });

        return () => { };
    });
}
