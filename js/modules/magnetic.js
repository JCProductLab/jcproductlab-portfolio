// ============================================
// MAGNETIC BUTTON EFFECTS
// Adds magnetic attraction and glow effects to buttons on desktop
// ============================================

class MagneticManager {
    constructor() {
        this.isMobile = window.innerWidth < 1024;
        this.elements = document.querySelectorAll('.btn--primary, .btn--secondary, .btn-icon');
        this.data = Array.from(this.elements).map(el => ({
            el,
            friction: el.classList.contains('btn--secondary') ? 0.1 : 0.12,
            distance: el.classList.contains('btn--secondary') ? 0.3 : 0.35,
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0,
            isHovered: false
        }));

        // Only initialize on desktop
        if (!this.isMobile) {
            this.init();
        }

        // Handle window resize to detect mobile/desktop changes
        window.addEventListener('resize', () => {
            const wasDesktop = !this.isMobile;
            this.isMobile = window.innerWidth < 1024;

            if (wasDesktop && this.isMobile) {
                // Transitioning to mobile - stop animation loop
                this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
            } else if (!wasDesktop && !this.isMobile) {
                // Transitioning to desktop - restart animation loop
                this.init();
            }
        });
    }

    init() {
        this.data.forEach(item => {
            item.el.classList.add('magnetic-el');

            item.el.addEventListener('mouseenter', () => {
                item.isHovered = true;
            });

            item.el.addEventListener('mouseleave', () => {
                item.isHovered = false;
                item.targetX = 0;
                item.targetY = 0;
            });

            window.addEventListener('mousemove', (e) => {
                const rect = item.el.getBoundingClientRect();

                // Update glow position (--x, --y CSS variables)
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                item.el.style.setProperty('--x', `${x}px`);
                item.el.style.setProperty('--y', `${y}px`);

                if (!item.isHovered) return;

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                item.targetX = (e.clientX - centerX) * item.distance;
                item.targetY = (e.clientY - centerY) * item.distance;
            });
        });

        this.animate();
    }

    animate() {
        this.data.forEach(item => {
            item.currentX += (item.targetX - item.currentX) * item.friction;
            item.currentY += (item.targetY - item.currentY) * item.friction;

            // Use translate3d for GPU acceleration
            item.el.style.transform = `translate3d(${item.currentX.toFixed(2)}px, ${item.currentY.toFixed(2)}px, 0)`;
        });

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
}

export function initMagnetic() {
    new MagneticManager();
}
