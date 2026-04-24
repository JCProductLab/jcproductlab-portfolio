/* ============================================
   Phosphor Icons Module — Vanilla JS helper
   Simplifies icon usage in HTML templates
   ============================================ */

'use strict';

/**
 * PhosphorIcon — Factory function to create icon elements
 * @param {string} name - Icon name (e.g., 'smiley', 'heart', 'download')
 * @param {Object} options - Configuration object
 * @param {string} [options.size] - Size class (xs, sm, md, lg, xl)
 * @param {string} [options.color] - Color class (primary, secondary, accent, disabled)
 * @param {boolean} [options.interactive] - Add interactive hover states
 * @param {boolean} [options.spin] - Add spin animation
 * @param {boolean} [options.pulse] - Add pulse animation
 * @param {string} [options.ariaLabel] - Accessible label for screen readers
 * @returns {HTMLElement} Icon element ready to append
 *
 * @example
 * const downloadIcon = createPhosphorIcon('download', { size: 'md', color: 'accent' });
 * document.querySelector('.button').appendChild(downloadIcon);
 *
 * @example
 * const loader = createPhosphorIcon('spinner', {
 *   size: 'lg',
 *   spin: true,
 *   ariaLabel: 'Loading...'
 * });
 */
export function createPhosphorIcon(name, options = {}) {
  const {
    size = 'md',
    color = 'primary',
    interactive = false,
    spin = false,
    pulse = false,
    ariaLabel = '',
  } = options;

  // Create icon element
  const icon = document.createElement('i');

  // Set base classes
  icon.classList.add('icon', `icon--${size}`, `icon--${color}`, `ph`, `ph-${name}`);

  // Add interactive classes if requested
  if (interactive) {
    icon.classList.add('icon--interactive');
  }

  // Add animation classes
  if (spin) {
    icon.classList.add('icon--spin');
  }

  if (pulse) {
    icon.classList.add('icon--pulse');
  }

  // Add accessibility
  if (ariaLabel) {
    icon.setAttribute('aria-label', ariaLabel);
    icon.setAttribute('role', 'img');
  }

  return icon;
}

/**
 * replaceIconsInDOM — Automatically replace data-icon attributes with Phosphor icons
 * Useful for progressive enhancement and template-based icon systems
 *
 * @param {HTMLElement} [container=document] - Container to search within
 *
 * @example
 * <!-- HTML template -->
 * <button data-icon="download" data-icon-size="sm" data-icon-color="accent">
 *   Download
 * </button>
 *
 * <!-- JavaScript -->
 * replaceIconsInDOM();
 * // Result: <i class="icon icon--sm icon--accent ph ph-download"></i>
 */
export function replaceIconsInDOM(container = document) {
  const iconElements = container.querySelectorAll('[data-icon]');

  iconElements.forEach((element) => {
    const iconName = element.getAttribute('data-icon');
    const size = element.getAttribute('data-icon-size') || 'md';
    const color = element.getAttribute('data-icon-color') || 'primary';
    const interactive = element.hasAttribute('data-icon-interactive');
    const spin = element.hasAttribute('data-icon-spin');
    const pulse = element.hasAttribute('data-icon-pulse');
    const ariaLabel = element.getAttribute('data-icon-label') || '';

    const icon = createPhosphorIcon(iconName, {
      size,
      color,
      interactive,
      spin,
      pulse,
      ariaLabel,
    });

    element.insertAdjacentElement('beforebegin', icon);
    element.removeAttribute('data-icon');
  });
}

/**
 * getIconHTML — Returns raw HTML string (for static templates or server-side generation)
 * Use only when you need plain HTML output, not dynamic elements
 *
 * @param {string} name - Icon name
 * @param {string} [classes=''] - Additional CSS classes
 * @returns {string} HTML string
 *
 * @example
 * const html = getIconHTML('smiley', 'icon icon--lg icon--accent ph-smiley');
 * element.innerHTML = html;
 */
export function getIconHTML(name, classes = '') {
  const defaultClasses = `icon ph ph-${name}`;
  const finalClasses = classes ? `${defaultClasses} ${classes}` : defaultClasses;
  return `<i class="${finalClasses}"></i>`;
}

/**
 * Phosphor icon names reference (subset of available icons)
 * Full list: https://phosphoricons.com/
 *
 * Common icons:
 * - UI: 'menu', 'x', 'check', 'minus', 'dot'
 * - Navigation: 'arrow-right', 'arrow-left', 'chevron-down', 'home'
 * - Actions: 'download', 'upload', 'share', 'trash', 'pencil'
 * - Social: 'heart', 'chat', 'share', 'bookmark'
 * - Media: 'image', 'video', 'play', 'pause', 'volume-high'
 * - Status: 'warning', 'info', 'check-circle', 'x-circle'
 * - Objects: 'sun', 'moon', 'star', 'bell', 'clock'
 */