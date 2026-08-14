'use strict';

// ============================================
// MÓDULO: Modal Mi Rol (wrapper de compat)
// Mi Rol y El Proceso comparten exactamente la misma estructura y
// comportamiento (panel deslizante + carrusel de pasos). La lógica vive
// en modal-proceso.js como initStepModal(); este archivo solo
// re-exporta el wrapper específico de Mi Rol para no tocar main.js.
// ============================================

export { initModalMiRol } from './modal-proceso.js';
