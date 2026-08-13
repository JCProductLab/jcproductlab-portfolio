Informe de Hallazgos de Pruebas de Usabilidad: Prototipo MVP
B2C AsDeporte

Proyecto: Nueva Plataforma Digital Integral AsDeporte
Fase: 3.2 Recopilación y Análisis de Feedback de Pruebas de Usabilidad
Fecha del Informe: 15 de Mayo de 2025
Fecha de las Pruebas: 15-22 de Mayo de 2025 (Simuladas)
1. Resumen Ejecutivo

Se realizaron pruebas de usabilidad remotas y moderadas con 15 participantes,
representativos de tres perfiles clave de atletas B2C, para evaluar la usabilidad del
prototipo de alta fidelidad del Producto Mínimo Viable (MVP) de la nueva plataforma
digital de AsDeporte (aplicación móvil y web responsive).

Objetivos Principales de la Prueba:

●  Validar la eficiencia y claridad del flujo de descubrimiento y búsqueda de eventos.
●  Evaluar la facilidad, confianza y claridad del nuevo proceso de inscripción y pago.
●  Determinar la usabilidad de la gestión del perfil del atleta y el acceso a beneficios

de Asdeporte Plus.
Identificar problemas de usabilidad y áreas de mejora antes del desarrollo.

●

Hallazgos Generales:
El prototipo del MVP B2C fue recibido de manera muy positiva por la gran mayoría de los
participantes en los tres perfiles. Se observaron mejoras significativas en la facilidad de uso,
eficiencia y confianza en comparación con la percepción de la plataforma actual, especialmente
en la aplicación móvil. La puntuación promedio general del System Usability Scale (SUS) fue de
88.3, lo que indica una usabilidad excelente.
Los participantes valoraron especialmente:

●  La nueva interfaz de búsqueda de eventos, considerándola más intuitiva y

eficiente.

●  El proceso de inscripción simplificado en 3 pasos, que generó mayor confianza.
●  La claridad y accesibilidad del "Hub de Beneficios Asdeporte Plus".
●  La facilidad para encontrar el historial de resultados personales con la nueva

búsqueda interna.

●  Las guías para principiantes y las mejoras en legibilidad.

A pesar del éxito general, se identificaron 13 problemas de usabilidad, de los cuales 5
se han priorizado como de ALTA prioridad para ser abordados antes del lanzamiento
del MVP o en una iteración muy temprana. Estos problemas se centran principalmente
en refinar aún más los filtros para nichos deportivos, mejorar la información para
principiantes, optimizar la comunicación sobre el CURP y las condiciones del Wallet
Plus, y asegurar la visibilidad de opciones de pago offline.

Las recomendaciones se enfocan en ajustes de diseño de interfaz, mejoras en el UX
writing y la arquitectura de la información para refinar la experiencia del usuario.

2. Metodología de la Prueba

●  Método: Pruebas de usabilidad remotas y moderadas.
●  Participantes: 15 atletas B2C, divididos equitativamente en tres perfiles:
○  Perfil 1: Atleta Frecuente y Miembro Asdeporte Plus (5 participantes).
○  Perfil 2: Atleta Ocasional que ha experimentado problemas de usabilidad con

la plataforma actual (5 participantes).

○  Perfil 3: Atleta Principiante o con Experiencia Digital Limitada/Variada (5

participantes).

●  Prototipo: Prototipo interactivo de alta fidelidad de la aplicación móvil

(iOS/Android) y del sitio web responsive del MVP B2C.

●  Tareas: Los participantes realizaron entre 8 y 10 tareas realistas cubriendo los
flujos críticos del MVP (búsqueda de eventos, filtros, revisión de detalles,
inscripción y pago, gestión de perfil, acceso a beneficios Plus, conexión de
wearables –esta última opcional– y comprensión de notificaciones).

●  Duración por Sesión: 60-90 minutos.
●  Métricas Recolectadas:

○  Cuantitativas: Tasa de éxito de tarea, tiempo en tarea, número de errores,

Escala de Facilidad de Tarea (SEQ), System Usability Scale (SUS).

○  Cualitativas: Observaciones directas, comentarios verbales ("pensar en voz

alta"), expresiones de frustración/satisfacción, respuestas a preguntas
post-tarea y post-sesión.

3. Hallazgos Clave y Problemas de Usabilidad Priorizados

A continuación, se presentan los problemas de usabilidad más significativos, agrupados
por tema, con su descripción, evidencia, análisis de causa raíz, frecuencia, severidad
estimada y nivel de prioridad asignado.

(Se incluye la tabla completa de "Lista Priorizada de Problemas de Usabilidad"
del documento anterior, pero aquí se destacarán los de ALTA y MEDIA prioridad
con recomendaciones).

PRIORIDAD ALTA

1. Problema (PU-03): Solicitud de CURP en inscripción genera dudas/desconfianza en perfiles
Principiante y Ocasional.
* Descripción: Varios participantes (7/15), principalmente de perfiles Principiante y Ocasional,
cuestionaron la necesidad de proporcionar el CURP durante la inscripción, expresando
preocupación por la privacidad o no entendiendo su utilidad.
* Evidencia:

* Cuantitativa: Tiempo en Tarea (Paso 1 de inscripción) fue un 50% mayor en promedio para
estos 7 usuarios (45s vs 30s) debido a la pausa y verbalización de la duda. SEQ promedio para
esta tarea en este subgrupo fue de 4.0/5.
* Cualitativa: "Me pide CURP... ¿es muy necesario?" (Gabriela T., Principiante). "¿Para qué lo
necesitan? Nunca me lo habían pedido para una carrera." (Otro usuario Principiante simulado).
* Causa Raíz: Falta de transparencia y justificación en la interfaz sobre por qué se solicita un
dato personal sensible. Posible requisito de negocio no comunicado al usuario.
* Impacto: Genera fricción y desconfianza en un flujo crítico, pudiendo afectar la tasa de
conversión de nuevos usuarios.
* Recomendaciones de Diseño:
1. Revaluar Necesidad: Confirmar con el área de Negocio/Legal si el CURP es estrictamente
indispensable para todos los eventos/usuarios en el MVP.
2. Hacer Opcional (si es posible): Si no es indispensable, considerar hacerlo un campo
opcional.
3. Mejorar UX Writing: Si es obligatorio, añadir un microcopy explicativo (ej. un tooltip o texto de
ayuda junto al campo) que justifique breve y claramente por qué se solicita el CURP (ej. "Para
validar tu identidad en la premiación" o "Requerido por la aseguradora del evento").
4. Considerar Solicitarlo Post-Registro: Evaluar si puede solicitarse en el perfil del usuario
después del registro inicial, en lugar de en el primer flujo de inscripción.
2. Problema (PU-04): Preferencia/Necesidad de opciones de pago offline (Oxxo) sigue siendo
relevante, y su visibilidad/comunicación podría optimizarse.
* Descripción: Aunque la opción de Oxxo estaba en el prototipo y fue muy bien recibida por
quienes la usaron, 8 de 15 participantes (principalmente Principiantes y Ocasionales mayores)
enfatizaron la importancia de esta opción para su confianza, sugiriendo que su visibilidad debe
ser máxima.
* Evidencia:
* Cuantitativa: Tasa de Selección de Oxxo (cuando notado): 3/3 de los usuarios que
explícitamente lo usaron en la simulación (ej. Javier M.) lo seleccionaron con alta satisfacción
(SEQ 5/5 para ese paso).
* Cualitativa: "Ojalá tuvieran para pagar en algún lugar físico, me daría más calma." (Gabriela
T.). "Si pudiera pagar en otro lado sería bueno." (Roberto N.).
* Causa Raíz: Necesidad de confianza y accesibilidad en métodos de pago; posible mejora en
la prominencia visual de la opción Oxxo en la pantalla de selección de método de pago.
* Impacto: No optimizar su visibilidad podría llevar a que usuarios que la prefieren no la vean y
abandonen el proceso o se sientan menos cómodos.
* Recomendaciones de Diseño:
1. Destacar Opción Oxxo: En la pantalla de selección de método de pago, asegurar que la
opción "Pagar en Oxxo" (o similar) tenga la misma (o incluso mayor, si es estratégico)
prominencia visual que las opciones de tarjeta. Usar un logo reconocible de Oxxo.
2. UX Writing Claro: Asegurar que el texto asociado explique brevemente cómo funciona
(generar referencia, pagar en tienda).
3. Comunicación Externa: Si es un diferenciador importante, mencionarlo en la comunicación
de marketing sobre la facilidad de inscripción.
3. Problema (PU-07): Necesidad de información sobre tipo de terreno/dificultad para caminatas

y principiantes no siempre cubierta.
* Descripción: 6 de 15 participantes (Perfiles Principiante/Ocasional) indicaron que información
clara sobre si el terreno es plano, con subidas, o un nivel de dificultad general sería muy útil
para eventos recreativos y no siempre estuvo explícita.
* Evidencia:
* Cuantitativa: 0/6 de estos usuarios encontraron esta información explícitamente en los
eventos genéricos que revisaron. Invirtieron un promedio de 25s adicionales buscando esta
info. SEQ promedio para la completitud de info en Tarea 2.1 fue de 3.5/5 para este subgrupo.
* Cualitativa: "Tal vez que en la información del evento dijera si el terreno es plano o con
subidas, para las que caminamos eso es importante." (Verónica M.).
* Causa Raíz: Falta de estandarización y priorización de campos de información específicos
para el perfil principiante/ocasional en la definición del contenido del detalle del evento.
* Impacto: Dificulta la toma de decisiones informada para este segmento, pudiendo llevar a
inscripciones en eventos no adecuados.
* Recomendaciones de Diseño:
1. Añadir Campos Específicos: Incluir campos opcionales para organizadores (futuro B2B) o
para AsDeporte al cargar eventos, como "Tipo de Terreno" (ej. Asfalto, Mixto, Terracería Ligera)
y "Nivel de Dificultad Sugerido para Principiantes" (ej. Bajo, Moderado).
2. Iconografía/Etiquetas Visuales: En la página de detalle del evento, usar iconos o etiquetas
claras para indicar estas características si están disponibles.
3. Integrar en Filtros: A futuro, considerar si "Nivel de Dificultad" puede ser un filtro.
4. Problema (PU-11): Guías para principiantes y glosario de términos son altamente valorados y
podrían ser más proactivos/expandirse.
* Descripción: Los 5 usuarios del Perfil Principiante reaccionaron muy positivamente a la "Guía
para tu primera carrera" y a las explicaciones de términos. Sugirieron que este tipo de ayuda
podría estar aún más presente o ser más fácil de encontrar.
* Evidencia:
* Cuantitativa: 3/5 de los principiantes encontraron la guía espontáneamente. SEQ promedio
para la Tarea 2.1 en este perfil fue de 4.8/5, influenciado por la guía.
* Cualitativa: "¡Esto está súper bien! Justo lo que necesito para no sentirme tan perdida."
(Gabriela T.). "¿Dónde encuentro más de estas explicaciones?" (Otro Principiante).
* Causa Raíz: El contenido de ayuda es valorado, pero su integración en el flujo del usuario y
su visibilidad podrían no ser óptimas para ofrecer apoyo en el momento justo.
* Impacto: Perder la oportunidad de reducir la ansiedad y mejorar la confianza del segmento
principiante.
* Recomendaciones de Diseño:
1. Acceso Proactivo a Guías: Desde la página de detalle de eventos aptos para principiantes,
incluir un enlace más prominente o una sección expandible con "Consejos para tu primera vez
en este tipo de evento".
2. Tooltips/Explicaciones Contextuales: Para términos clave en el flujo de inscripción o detalle
del evento (ej. "chip", "categoría"), implementar tooltips informativos al pasar el cursor (web) o
al tocar un ícono de ayuda (móvil).
3. Sección FAQ Dedicada y Visible: Asegurar que la sección de "Preguntas Frecuentes" sea
fácil de encontrar y esté bien nutrida con dudas comunes de principiantes.

5. Problema (PU-09): Necesidad de máxima claridad en las condiciones de uso del Wallet
Asdeporte Plus.
* Descripción: 3 de 5 usuarios Plus recalcaron la importancia de que las condiciones de uso del
crédito en el Wallet (eventos aplicables, vigencia, proceso de uso) sean extremadamente claras
y fáciles de consultar.
* Evidencia:
* Cuantitativa: 0/3 de estos usuarios encontraron un documento específico con "condiciones de
uso del Wallet" en el prototipo. SEQ para la claridad del Wallet en Tarea 3.4 fue de 3.8/5 para
este subgrupo.
* Cualitativa: "Que las condiciones... del Wallet, estén súper claras y fáciles de consultar desde
el Hub." (Elena V.).
* Causa Raíz: Falta de detalle y fácil acceso a la información sobre las reglas específicas del
Wallet.
* Impacto: Puede generar confusión, frustración y mal uso de un beneficio clave para miembros
Plus, afectando la percepción de valor.
* Recomendaciones de Diseño:
1. Sección "Condiciones del Wallet": Dentro del "Hub de Beneficios Plus", junto a la
visualización del saldo del Wallet, incluir un enlace claro y directo a una página o modal que
detalle las condiciones de uso del crédito (ej. "Ver términos y condiciones del Wallet").
2. UX Writing Preciso: Redactar estas condiciones de forma muy clara, concisa y en lenguaje
sencillo.
3. FAQ Específica: Incluir preguntas frecuentes sobre el Wallet en la sección general de FAQs.
PRIORIDAD MEDIA

6. Problema (PU-01): Filtros avanzados para nichos deportivos (Trail, MTB, Triatlón, OCR) aún
con oportunidad de mayor granularidad.
* Descripción: Los 5 usuarios del Perfil Frecuente/Plus con intereses de nicho expresaron
consistentemente el deseo de filtros aún más granulares.
* Evidencia: (Ver PU-01 en la "Lista de Problemas de Usabilidad (15 Usuarios)"). Tasa de éxito
para encontrar evento con filtro ideal fue del 40% para este subgrupo.
* Causa Raíz: Alcance inicial del MVP no profundizó en sub-necesidades de cada nicho.
* Impacto: Puede hacer que atletas muy especializados no encuentren exactamente lo que
buscan, aunque la experiencia general de filtros mejoró.
* Recomendaciones de Diseño:
1. Planificar para Iteración Futura: Incluir la adición de filtros más específicos (tipo de terreno,
tipo de MTB, drafting, puntos ITRA) en el backlog para una próxima iteración post-MVP.
2. Investigación Adicional (si es necesario): Si la implementación es compleja, realizar una
pequeña investigación enfocada con cada nicho para definir los 2-3 filtros más críticos que
faltan.
3. Flexibilidad en B2B: Asegurar que la futura plataforma B2B permita a los organizadores
etiquetar sus eventos con esta granularidad.
7. Problema (PU-12): Navegación entre el Hub Plus y el proceso de inscripción podría ser más
fluida para entender beneficios aplicables antes de inscribirse.
* Descripción: 2 usuarios Plus dudaron sobre cómo los beneficios (más allá del descuento)
aplicaban a un evento específico antes de iniciar la inscripción.

* Evidencia: Un usuario intentó regresar del flujo de inscripción al Hub Plus para verificar. SEQ
para claridad de todos los beneficios aplicables al evento fue de 4.0/5 para este subgrupo.
* Causa Raíz: Flujo de información no óptimo entre beneficios generales y su aplicación
contextual.
* Impacto: Leve incertidumbre para usuarios Plus.
* Recomendaciones de Diseño:
1. Indicadores en Detalle de Evento: En la página de detalle de un evento, si el usuario es Plus,
mostrar sutilmente qué beneficios Plus son aplicables a ese evento en particular (ej. "Este
evento incluye Zona de Recuperación Plus").
2. Enlace Contextual: Desde el Hub Plus, si un beneficio es específico para ciertos tipos de
eventos, enlazar a una búsqueda filtrada de dichos eventos.
8. Problema (PU-08): Micro-fricción en el descubrimiento inicial del ícono de filtros en la app
móvil para usuarios menos tecnológicos.
* Descripción: 4 usuarios (Principiantes/Ocasionales mayores) dudaron brevemente antes de
identificar el ícono de filtros.
* Evidencia: Tiempo para primer clic en ícono de filtros fue de 8s en promedio para ellos.
* Causa Raíz: Affordance visual del ícono no óptima; falta de etiqueta textual en móvil.
* Impacto: Muy bajo, no bloqueante.
* Recomendaciones de Diseño:
1. Considerar Etiqueta (App): Evaluar añadir una etiqueta de texto pequeña "Filtrar" debajo o
junto al ícono de filtros en la app si el espacio lo permite sin sobrecargar.
2. Asegurar Contraste/Tamaño: Verificar que el ícono cumple con las pautas de accesibilidad en
tamaño y contraste.
9. Problema (PU-13): Claridad en la presentación de múltiples distancias/costos en la página de
detalle del evento.
* Descripción: 3 usuarios (Principiantes/Ocasionales) necesitaron más tiempo para escanear y
encontrar el costo de una distancia específica cuando había muchas opciones.
* Evidencia: Tiempo para identificar costo específico fue de 15s en promedio para ellos. Un
error de lectura inicial.
* Causa Raíz: Presentación de listas complejas sin suficiente jerarquía visual o interactividad.
* Impacto: Bajo, confusión momentánea.
* Recomendaciones de Diseño:
1. Mejorar Jerarquía Visual: Usar espaciado, tipografía o agrupadores visuales para distinguir
claramente cada opción de distancia y su costo asociado.
2. Considerar Interacción: Para listas muy largas, explorar si un selector de distancia que
actualice el precio mostrado podría ser más claro que una tabla estática.
PRIORIDAD BAJA (Para este MVP, considerar para futuras iteraciones)

10. Problema (PU-02): Información de obstáculos para OCR es genérica, no específica del
evento.
* Impacto UX: Alto para el perfil OCR. Frecuencia: 1/15. Esfuerzo: Medio.
* Recomendación: Incluir en el backlog para cuando se trabaje en mejorar la información para
nichos específicos. Depende de la capacidad de los organizadores de OCR de proveer esta
información.
11. Problema (PU-05): Falta de opción para editar talla de playera post-inscripción desde el

perfil.
* Impacto UX: Bajo-Medio. Frecuencia: 2/15. Esfuerzo: Medio.
* Recomendación: Considerar para futuras mejoras de la gestión de perfil y conveniencia del
usuario.
12. Problema (PU-06): Expectativa de mayor contenido visual/social ligero en descubrimiento
de eventos.
* Impacto UX: Bajo-Medio. Frecuencia: 3/15. Esfuerzo: Medio.
* Recomendación: Explorar en futuras fases para enriquecer la experiencia, una vez que el
core funcional esté sólido.
Problemas No Priorizados para el MVP Actual (Feedback para Futuro):

●  PU-10: Altas expectativas sobre la profundidad y bidireccionalidad de la integración

con Wearables.
○  Recomendación: La conexión básica (Should Have) es un buen inicio. La
integración profunda debe ser parte del roadmap estratégico post-MVP.

4. Recomendaciones Generales Adicionales

●  Continuar con el Enfoque en la Simplicidad y Claridad: Especialmente para los

flujos principales y para el Perfil Principiante.

●  Reforzar la Comunicación de Confianza: Especialmente en el flujo de pago y en

●

la solicitud de datos personales.
Iterar en el Diseño Visual: Asegurar que los ajustes para mejorar la claridad (ej.
prominencia de Oxxo, ícono de filtros) se integren armoniosamente con la estética
general.

●  Documentar para Desarrollo: Asegurar que todas las recomendaciones de

diseño que impliquen cambios en la UI, UX Writing o interacción se documenten
claramente para el equipo de desarrollo.

5. Próximos Pasos

1.  Presentar estos hallazgos y recomendaciones a los stakeholders del proyecto

(Producto, Ingeniería, Negocio).

2.  Discutir y validar las prioridades y el esfuerzo estimado para las soluciones

propuestas.

3.  Incorporar los cambios acordados en el prototipo y/o en las especificaciones de

diseño.

4.  Preparar los activos de diseño finales para el handoff a desarrollo.
5.  Planificar una siguiente ronda de pruebas de usabilidad después de que se
implementen los cambios o en una etapa posterior del desarrollo (ej. con una
versión Alfa/Beta).

Este informe proporciona una visión clara de cómo los usuarios interactuaron con el
prototipo del MVP B2C, los problemas que encontraron y las recomendaciones para
crear una plataforma aún más exitosa y centrada en el atleta.

