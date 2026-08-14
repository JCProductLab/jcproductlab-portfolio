'use strict';

// ============================================
// MÓDULO: Modal Qué Aprendí (wrapper de compat)
// Comparte estructura y lógica con Mi Rol / El Proceso (initStepModal
// en modal-proceso.js). Este archivo solo resuelve el botón disparador
// específico del modal y re-exporta la inicialización.
// ============================================

import { initStepModal } from './modal-proceso.js';

export function initModalQueAprendi() {
    const modal = document.getElementById('modalQueAprendi');
    const triggerBtn = document.querySelector('.rs-testimonio__closing .btn--secondary');
    initStepModal(modal, triggerBtn);
}
