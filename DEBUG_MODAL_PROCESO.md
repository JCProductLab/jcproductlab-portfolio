# Debug: Modal "El Proceso" — Empieza en Delivery en lugar de Discovery

## Contexto

El modal proceso (`#modalProceso` en `caso-asdeporte.html`) tiene un bug intermitente: cuando se abre por segunda vez (después de cerrarlo), a veces muestra el texto del paso 3 (Delivery) en lugar del paso 1 (Discovery). El autoplay del carrusel está ciclando por los 3 pasos y al cerrar/reabrir, el reset al paso 0 (Discovery) no se aplica consistentemente.

## Archivos relevantes

- `js/modal-proceso.js` — lógica del carrusel y open/close
- `caso-asdeporte.html` línea 492 — markup del modal
- `css/modal-rol-proceso.css` — estilos del modal

## Defensas ya implementadas (pueden no ser suficientes)

En `js/modal-proceso.js` ya están:
- `stopAutoPlay()` y `gsap.killTweensOf(content)` ANTES del check de `active` en `openModal`
- `fadeTimer` se limpia en `stopAutoPlay()` (no solo el interval)
- `currentStep = 0` y `isHovering = false` se setean al abrir
- `description.textContent = stepData[0].text` se setea inmediatamente

## Lo que necesitas hacer

Usa el MCP de Chrome DevTools para investigar el bug tú mismo.

### Pasos:

1. **Sirve la página localmente** (desde el directorio del proyecto):
   ```bash
   python3 -m http.server 8080
   ```
   O `npx serve .`

2. **Navega** a `http://localhost:8080/caso-asdeporte.html`

3. **Toma un snapshot** de la página para identificar el botón trigger del modal proceso (es el segundo `.btn--secondary` dentro de `.cs-contexto__actions`, el último hijo)

4. **Ejecuta el escenario que reproduce el bug**:
   - `click` en el botón "El proceso" para abrir el modal
   - `wait_for` ~10-12 segundos (deja que el carrusel avance al menos 2 pasos)
   - `click` en el botón de cerrar (X) o presiona Escape
   - Espera a que termine la animación de cierre (~0.6s)
   - `click` en el botón "El proceso" otra vez
   - Captura el estado inmediatamente

5. **Inspecciona el estado** en cada paso:
   - `list_console_messages` — busca errores de JS
   - `evaluate_script` con:
     ```js
     document.querySelector('.modal-proceso__description').textContent.substring(0, 80)
     ```
     Para ver qué texto está actualmente en la descripción
   - `evaluate_script` con:
     ```js
     document.querySelector('.modal-proceso__step--active .modal-proceso__title')?.textContent
     ```
     Para ver qué step está activo

6. **Si el bug se reproduce**, lee la secuencia completa de eventos. Si no se reproduce a la primera, repite el escenario 3-5 veces.

7. **Repórtame**:
   - ¿En qué intento se reprodujo? (1°, 2°, 3°...)
   - ¿Qué texto está en la descripción al abrir por segunda vez?
   - ¿Qué step está activo (marcado con clase `--active`)?
   - ¿Hay errores en consola?
   - Si logueaste `currentStep` o variables internas, cuáles son sus valores

## Posibles causas a investigar

- Race condition entre el `setTimeout` del fade y el reset en `openModal`
- El `onComplete` de GSAP disparándose tarde (después del close)
- Un interval huérfano del autoplay que sigue ciclando cuando el modal está cerrado
- Múltiples inicializaciones del módulo (módulo cargado más de una vez)

## Una vez identificado el bug

Aplica el fix con el patrón "instance guard" o la solución que corresponda, luego valida con Chrome DevTools repitiendo el escenario 5 veces para confirmar que ya no se reproduce.
