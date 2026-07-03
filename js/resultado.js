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

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

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
            // translateY puro, SIN tocar opacity (restricción del doc).
            if (razon3Final) {
                const exitP = clamp01(p1 / 0.20);
                gsap.set(razon3Final, { y: -exitP * vh });
            }

            // ── Entrada de [ RESULTADO ] + título (0.10 → 0.25) ──
            if (rsIntro) {
                const inP = clamp01((p1 - 0.10) / 0.15);
                const inEased = gsap.parseEase('power2.out')(inP);
                gsap.set(rsIntro, { y: 60 * (1 - inEased), opacity: inEased });
            }

            // ── Salida de [ RESULTADO ] + título (0.55 → 0.70) ──
            if (rsIntro && p1 >= 0.55) {
                const outP = clamp01((p1 - 0.55) / 0.15);
                gsap.set(rsIntro, { y: -outP * vh, opacity: 1 - outP });
            }
        },
        onLeaveBack: () => {
            if (razon3Final) { gsap.set(razon3Final, { y: 0 }); }
            if (rsIntro)     { gsap.set(rsIntro, { y: 60, opacity: 0 }); }
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: '100vh' }); }
        },
        onLeave: () => {
            if (rsMosaicoSection) { gsap.set(rsMosaicoSection, { y: 0 }); }
        }
    });
}
