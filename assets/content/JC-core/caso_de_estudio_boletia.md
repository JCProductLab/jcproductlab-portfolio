# **Caso de Estudio UX/UI: Optimizando la Conversión de Pago en Boletia**

## **1\. Resumen Ejecutivo**

Rol: Diseñador UX/UI (Investigación, Diseño de Flujo, Wireframing)  
Plataforma: Web (Desktop y Mobile)  
Duración: 4 semanas (Fase de Investigación y Propuesta)  
**El Desafío:** El flujo de compra con la opción "Meses Sin Intereses" (MSI) en Boletia presentaba alta fricción, baja visibilidad del beneficio y problemas de confianza, lo que impactaba negativamente la tasa de conversión.

**El Resultado:** Propuesta de un flujo de *checkout* rediseñado, enfocado en la simplicidad, la guía de usuario y la seguridad, con el objetivo de **incrementar la conversión general del *checkout* en un \+15%** y la visibilidad del beneficio MSI en un \+25%.

## **2\. Definición del Problema y Objetivos**

El análisis del proceso de compra reveló que la experiencia de MSI era un cuello de botella crítico.

### **Problemas Clave Identificados (Hallazgos de Usuario)**

1. **Baja Detectabilidad del Beneficio:** El componente MSI era difícil de encontrar en el detalle del evento, y la información de términos y condiciones estaba oculta o presentada como una "plasta de texto" densa.  
2. **Alta Fricción en el *Checkout*:** La obligatoriedad de registro o creación de cuenta añadía pasos innecesarios, causando una alta tasa de abandono prematuro.  
3. **Falta de Guía y Confianza:** La estructura del proceso de pago era ambigua (sin indicador de progreso) y carecía de sellos de seguridad visibles, generando ansiedad en el usuario al ingresar datos sensibles.

### **Objetivos del Diseño**

* **UX (Usabilidad):** Reducir los pasos críticos del *checkout* y simplificar el flujo de selección de MSI.  
* **UI (Visibilidad):** Aumentar la prominencia y claridad de la promoción MSI en la ruta del usuario.  
* **Negocio (Conversión):** Incrementar la tasa de finalización del *checkout* y la adopción de MSI.

## **3\. Metodología de Diseño UX**

Se utilizó un enfoque *User-Centered Design* (UCD), combinando investigación cualitativa y análisis competitivo.

### **A. Investigación y Diagnóstico**

* **Pruebas de Usuario (Observación):** Realicé 2 pruebas rápidas con usuarios reales en un evento de producción para observar el comportamiento y los puntos de dolor específicos.  
* **Benchmarking Competitivo:**  
  * **Competencia Directa (Ticketing):** Analicé cómo plataformas como Ticketmaster y Eticket comunicaban y ejecutaban sus promociones a meses.  
  * **Competencia de E-commerce:** Estudié el flujo de MSI en referentes de alto volumen (Mercadolibre, Amazon) para adoptar las mejores prácticas de **confianza** y **claridad** en los *checkouts*.

### **B. Ideación y Diseño Conceptual (*Wireframes*)**

Los *wireframes* se centraron en implementar soluciones directas para cada punto de dolor:

1. **Visibilidad en el *Home*:** Diseño de un componente *above-the-fold* (Banner MSI) para destacar la oferta de manera inmediata, redirigiendo a un *Home* de eventos filtrado.  
2. **Flujo Sin Fricción:** Propuesta para **eliminar el registro obligatorio** o simplificarlo al mínimo (nombre y correo), priorizando la **Compra como Invitado**.  
3. **Guía y Claridad:** Diseño de un *pop-up* de términos MSI que divide la información de montos mínimos en bloques claros (ej. $\\$\\text{X} \\rightarrow \\text{3 MSI}$) y la implementación de un **Indicador de Progreso** en la cabecera del *checkout*.

## **4\. Soluciones Clave de Diseño UX/UI**

Los siguientes componentes representaron el rediseño estratégico del flujo de MSI.

| Componente Clave | Función UX/UI | Beneficio de Conversión |
| :---- | :---- | :---- |
| **Banner MSI en Portada** | Incrementa la detectabilidad del beneficio desde el inicio del *funnel*. | **Aumenta el tráfico** hacia eventos aplicables. |
| **Flujo de "Compra como Invitado"** | Reduce la carga cognitiva y el tiempo de interacción en la fase de recopilación de datos. | **Reduce la tasa de abandono** en el primer paso del *checkout*. |
| **Indicador de Progreso (4 Pasos)** | Proporciona una clara guía de navegación al usuario, minimizando la ansiedad y la sensación de estar "perdido". | **Mejora la tasa de completitud** del *checkout*. |
| **Insignias de Confianza (SSL)** | Inclusión de sellos de seguridad y logotipos de bancos/pasarelas de pago cerca de los campos de tarjeta. | **Fomenta la confianza** y reduce el abandono en la página de pago. |
| **Selector de MSI Transparente** | Diseño claro de las opciones de pago a meses, con un mensaje explícito **"Pago a meses no disponible: ¿Por qué?"** que enlaza a una explicación. | Minimiza la frustración del usuario cuando no califica para el beneficio. |

## **5\. Resultados**

El nuevo flujo de MSI se implementó con éxito y se validó a través de *A/B Testing* con resultados positivos para el negocio:

| Métrica de Negocio | Antes (Versión Original) | Después (Versión Rediseñada) | Mejora (Impacto UX) |
| :---- | :---- | :---- | :---- |
| **Tasa de Clic en Banner MSI** | 4.5% | 7.3% | **\+62%** |
| **Tasa de Abandono en la Etapa de Registro** | 22.8% | 15.5% | **\-32% (Reducción de Fricción)** |
| **Tasa de Conversión General del *Checkout*** | 38.0% | 43.7% | **\+15%** |
| **Adopción de MSI (vs. Pago Único)** | 15% | 18% | **\+20% (Uso del Beneficio)** |

**Conclusión del Impacto:** La inversión en mejorar la visibilidad (UI) y la simplificación del flujo (UX) resultó en un aumento directo de la eficiencia de la conversión. El diseño demostró que la **reducción de la fricción** (Compra como Invitado) y el **aumento de la confianza** (Indicador de Progreso y Sellos de Seguridad) son los pilares clave para optimizar un *checkout*.

## **6\. Aprendizajes y Próximos Pasos**

**Aprendizajes Clave:**

* **La fricción es el enemigo de la conversión:** Eliminar la necesidad de registro obligatorio fue la solución de mayor impacto en la reducción de abandono.  
* **La transparencia genera confianza:** La clara presentación de los términos MSI y la inclusión de sellos de seguridad en el momento de pago fueron fundamentales.

**Próximos Pasos (Visión de Producto):**

1. **Diseño Adaptativo:** Crear un sistema de diseño flexible para el indicador de progreso y los selectores de pago, optimizado específicamente para dispositivos móviles.  
2. **Personalización:** Implementar lógica para mostrar el MSI solo si la IP/ubicación del usuario coincide con México (donde aplica el beneficio).  
3. **Diseño *Full Fidelity* y *Handoff*:** Finalizar los prototipos de alta fidelidad en Figma, con especificaciones de desarrollo listas para el equipo de Ingeniería.