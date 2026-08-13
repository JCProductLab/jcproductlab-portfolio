Decisión Documentada sobre la Profundidad de la Iteración del
Diseño (MVP B2C)

Proyecto: Nueva Plataforma Digital Integral AsDeporte
Fase: 3.3 Iteración del Diseño
Fecha: 15 de Mayo de 2025
1. Introducción

Tras el análisis de los hallazgos de las pruebas de usabilidad del prototipo del MVP
B2C y la propuesta de soluciones de diseño para los problemas priorizados, se evalúa
la profundidad de la iteración necesaria. El objetivo es determinar si las soluciones
pueden implementarse mediante refinamientos dentro de las fases de diseño ya
transitadas (Fase 2: Ideación y Diseño; Fase 3: Iteración del Diseño actual) o si se
requiere una revisión más fundamental de etapas tempranas como la Arquitectura de la
Información (AI) o el Diseño de Interacción (IxD) global definidos en la Fase 1 y Fase
2.1-2.2.

2. Evaluación de los Problemas Priorizados y sus Soluciones

La mayoría de los problemas de usabilidad identificados como de ALTA y MEDIA
prioridad pueden abordarse mediante:

●  Ajustes en el Diseño Visual (UI): Cambios en la prominencia de elementos

(PU-04: Oxxo), mejora de la jerarquía visual (PU-13: Distancias/Costos), adición de
etiquetas a iconos (PU-08: Ícono de filtros).

●  Mejoras en el Diseño de Contenido (UX Writing): Adición de microcopy

explicativo (PU-03: CURP), clarificación de condiciones (PU-09: Wallet Plus),
creación de contenido de ayuda (PU-11: Guías Principiantes).

●  Refinamientos en el Diseño de Interacción (IxD): Integración de tooltips (PU-11),
mejora del flujo informativo contextual (PU-12: Beneficios Plus en detalle evento),
presentación interactiva de opciones (PU-13).

●  Pequeñas Adiciones a la Arquitectura de la Información (AI) a nivel de

componentes o contenido específico: Inclusión de un enlace a "Condiciones del
Wallet" (PU-09), creación de una página/modal para dichas condiciones.

Estos cambios se consideran refinamientos y adiciones incrementales que se
pueden manejar dentro de la fase actual de "Iteración del Diseño" (Fase 3 del proceso
global) y mediante ajustes a los entregables de la Fase 2 (Mockups, UI Kit,
Especificaciones de UX Writing, Especificaciones de IxD). No señalan una falla
fundamental en la estructura de navegación principal, los sitemaps generales, ni
en los flujos de usuario críticos definidos para el MVP. Los usuarios, en general,
pudieron completar las tareas principales y entendieron la organización general de la
plataforma.

3. Consideraciones Específicas que Tocan la Arquitectura de la Información
(Datos de Eventos)

Dos problemas priorizados, aunque sus soluciones inmediatas para el MVP pueden ser
parciales, sí apuntan a una necesidad de revisión más profunda de la Arquitectura de
la Información específicamente relacionada con los atributos y datos de los
eventos para futuras versiones o para una solución más robusta:

●  PU-01: Filtros avanzados para nichos deportivos aún con oportunidad de

mayor granularidad.

●  PU-07: Necesidad de información sobre tipo de terreno/dificultad para

caminatas y principiantes no siempre cubierta.

Análisis:
Para implementar filtros verdaderamente granulares (PU-01) y mostrar información detallada
sobre terreno/dificultad de forma consistente (PU-07), la plataforma necesita:
1.  Un modelo de datos de eventos más rico y estructurado que capture estos

atributos específicos (ej. "tipo de drafting", "tipo de terreno de trail", "puntos ITRA",
"nivel de dificultad para principiantes estandarizado"). Esto es una tarea de
Arquitectura de la Información (Fase 1.3 o 2.2).

2.  Un mecanismo para que los organizadores de eventos (futura plataforma B2B)

proporcionen esta información detallada de manera consistente.

Decisión para el MVP Actual:

●  Para PU-01, la solución propuesta para el MVP es añadir 1-2 sub-filtros clave si los

datos actuales lo permiten o pueden inferirse fácilmente, sin rediseñar todo el
modelo de datos de eventos en este momento.

●  Para PU-07, la solución para el MVP es destacar mejor la información si ya existe
en las descripciones y proponer la adición de nuevos campos opcionales (cuya
implementación completa dependerá de la facilidad de ingesta de estos datos).

4. Decisión Final sobre la Profundidad de la Iteración

●  La iteración del diseño para el MVP B2C se mantendrá principalmente dentro del

refinamiento de los entregables de la Fase 2 (Diseño Visual, Diseño de
Interacción, Diseño de Contenido) y la ejecución de la Fase 3 actual (Iteración
del Diseño).

●  No se requiere una revisión fundamental de la Arquitectura de la Información
global (sitemap, estructura de navegación principal de la app/web) ni de los Flujos
de Usuario críticos definidos, ya que estos demostraron ser mayormente
efectivos y comprensibles para los usuarios en las pruebas del prototipo.

●  Se documenta y se eleva al equipo de Producto y Tecnología la necesidad de
planificar una revisión y expansión de la Arquitectura de la Información de
los datos de los eventos para el backlog y futuras iteraciones post-MVP. Esto es

esencial para abordar de manera completa y robusta los problemas PU-01 y PU-07
a largo plazo y para enriquecer la plataforma B2B. Esta revisión de la AI de datos
de eventos sí implicaría volver a aspectos de la Fase 1.3 (Definición de requisitos
de datos) y Fase 2.2 (AI detallada de datos).

Esta decisión permite enfocar los esfuerzos del MVP en solucionar los problemas más
impactantes con soluciones factibles en el corto plazo, sin detener el progreso por
revisiones estructurales mayores que no son inmediatamente críticas para la
funcionalidad central validada, pero planificando las mejoras estructurales necesarias
para el futuro.

