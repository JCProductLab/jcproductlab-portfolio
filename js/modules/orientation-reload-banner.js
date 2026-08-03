// js/modules/orientation-reload-banner.js
// Cuando el dispositivo rota (portrait↔landscape) en tablet, la
// coreografía de scroll (GSAP ScrollTrigger) de esta página puede quedar
// desincronizada — se probó corregirlo automáticamente (resync de
// ScrollTrigger tras el resize) y terminó rompiendo reveals que ya
// funcionaban bien, así que se revirtió. En vez de tocar el estado
// interno de ScrollTrigger, se avisa al usuario y se le ofrece recargar.
//
// Escucha el cambio de ORIENTACIÓN real (matchMedia('(orientation:...)')),
// NO el evento 'resize' — 'resize' también se dispara al ocultarse/
// aparecer la barra de direcciones del navegador durante el scroll
// normal, sin rotación real de por medio; ese fue justo el bug del
// intento anterior (banner/resync disparándose todo el tiempo).
//
// Solo tablet: mobile es portrait-only por diseño (no rota en uso
// normal) y desktop no rota — MQ_DESKTOP no se toca en absoluto.

const MQ_DESKTOP = '(min-width: 1200px) and (hover: hover) and (pointer: fine)';
const MQ_TABLET_FLOOR = '(min-width: 700px)';

export function initOrientationReloadBanner() {
    if (window.matchMedia(MQ_DESKTOP).matches) return;
    if (!window.matchMedia(MQ_TABLET_FLOOR).matches) return;

    let banner = null;

    function buildBanner() {
        banner = document.createElement('div');
        banner.className = 'orientation-banner';
        banner.setAttribute('role', 'status');
        banner.innerHTML = `
            <p class="orientation-banner__text">Detectamos un cambio de orientación. Para que la página funcione correctamente, te recomendamos recargarla.</p>
            <div class="orientation-banner__actions">
                <button type="button" class="btn btn--primary orientation-banner__reload">Recargar</button>
                <button type="button" class="btn-icon orientation-banner__close" aria-label="Cerrar aviso">
                    <i class="ph ph-x"></i>
                </button>
            </div>
        `;
        document.body.appendChild(banner);

        banner.querySelector('.orientation-banner__reload').addEventListener('click', () => {
            // El navegador restaura la posición de scroll anterior al
            // recargar (comportamiento nativo, no algo que controlemos
            // nosotros) — si el usuario tocó "Recargar" a mitad de
            // página, lo devuelve de un salto a esa misma posición antes
            // de que el sistema de reveals (IntersectionObserver) alcance
            // a revelar lo que ya está en pantalla, dando la impresión de
            // que "esa sección no recargó bien" (bug confirmado en vivo).
            // scrollRestoration:'manual' apaga esa restauración
            // automática, así la recarga siempre arranca desde arriba —
            // que es justamente el punto de pedir recargar.
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
            window.location.reload();
        });
        banner.querySelector('.orientation-banner__close').addEventListener('click', () => {
            banner.classList.remove('orientation-banner--visible');
        });
    }

    function showBanner() {
        if (!banner) buildBanner();
        banner.classList.add('orientation-banner--visible');
    }

    // 'change' en un matchMedia de orientación dispara SOLO cuando la
    // orientación real cambia — a diferencia de 'resize', ignora los
    // ajustes de altura por la barra de direcciones del navegador.
    const orientationQuery = window.matchMedia('(orientation: portrait)');
    orientationQuery.addEventListener('change', showBanner);
}
