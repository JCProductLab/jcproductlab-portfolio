# Fase 3: Probar y Validar (Testing)

## Actividad_02_Recopilación y Análisis de Feedback

### Parte 1: Estrategia de Validación y Arquitectura de Perfiles

#### El peso de la evidencia frente a la estética final

Finalizar la interfaz de alta fidelidad siempre genera una sensación de cierre engañosa. Los colores de Gentera lucían impecables, la tipografía estaba calibrada y los flujos parecían lógicos en mi cabeza, pero como diseñador de producto, sé que un prototipo hermoso es solo una hipótesis visual hasta que choca con la realidad operativa de quien lo va a usar ocho horas al día. Me encontraba en ese umbral crítico de la **Fase 3: Probar y Validar**. Tenía en mis manos una solución técnica para la Gestión Automatizada de la Capacitación (GAC), pero el riesgo era latente: si la arquitectura propuesta no resolvía la carga cognitiva de los administradores o la confusión de los colaboradores, el proyecto fracasaría independientemente de lo bien que se viera.

No buscaba una validación cosmética. Mi objetivo era someter el sistema a un estrés de usabilidad real. En este oficio, el feedback no puede ser anecdótico ni basarse en "me gusta" o "no me gusta". Necesitaba un marco de control riguroso, una estructura que transformara las reacciones de los usuarios en datos accionables. Entendí que la única forma de blindar el desarrollo final era mediante un proceso de **Feedback Constante**, donde cada decisión de diseño fuera cuestionada. Esta no era una etapa de aprobación, sino una fase de diagnóstico forense. Mi mentalidad cambió: dejé de ser el creador de la interfaz para convertirme en el arquitecto de su validación, priorizando la funcionalidad y la resolución de fricciones por encima de cualquier apego personal a los componentes que acababa de diseñar.

#### Los siete pilares de la validación estratégica

Para que esta ronda de pruebas tuviera sentido, no podía simplemente "enseñar el prototipo". Tuve que articular siete pilares estratégicos que guiaran cada sesión, asegurando que cubriéramos todos los flujos críticos de la plataforma GAC. El primero y más obvio era la **Facilidad de Uso y Eficiencia**. No me bastaba con que el usuario llegara al final del flujo; necesitaba observar si lo hacía de forma intuitiva o si daba rodeos innecesarios. En un sistema de gestión, cada clic extra es tiempo perdido para la organización.

El segundo pilar fue la **Claridad del Diseño Visual**. Aquí es donde el estilo de Gentera debía demostrar su valor funcional. Me propuse evaluar si la paleta de colores y la jerarquía tipográfica realmente ayudaban a la legibilidad o si, por el contrario, saturaban la vista en jornadas de uso intensivo. A esto sumé la identificación de **Fricciones en Flujos** que solo aparecen cuando un usuario real intenta completar una tarea bajo presión. Otros pilares fundamentales fueron:

*   **Validación de Terminología:** En Gentera existen conceptos muy específicos. Necesitaba confirmar que términos como "elegibles", "segmentación" o "kardex" significaran lo mismo para el sistema que para el usuario.
*   **Satisfacción General:** Una métrica cualitativa pero vital. ¿La herramienta genera confianza o ansiedad?
*   **Implementación de Reglas de Negocio:** Este era el punto más técnico. Debía asegurar que la lógica de segmentación y los criterios de exclusión fueran comprensibles en la interfaz. Si un administrador no entiende por qué un colaborador no aparece en una lista, el sistema es percibido como un error, no como una regla.
*   **Revisión de Feedback Previo:** Tenía una lista de "deudas" de diseño de etapas anteriores. Temas como la re-subida de plantillas cuando hay errores, la visibilidad de los formadores en tiempo real y la personalización de invitaciones eran puntos de dolor que ya habíamos identificado y que este prototipo debía resolver de forma definitiva.

#### La construcción de perfiles: más allá del rol administrativo

Diseñar para "todos" es diseñar para nadie. Por eso, dediqué un esfuerzo considerable a definir una arquitectura de perfiles psicográficos que representara fielmente el ecosistema de capacitación de la empresa. No recluté usuarios al azar; busqué arquetipos que encarnaran las tensiones operativas que la plataforma GAC busca mitigar. El éxito de la validación dependía de que estos cuatro perfiles encontraran en la herramienta una respuesta a sus problemas diarios.

El primer perfil, y quizás el más crítico para el **Desarrollo 1 (Automatización)**, fue **Carlos, el Coordinador Detallista**. Carlos representa al administrador que vive entre hojas de Excel y correos electrónicos. Su principal dolor es la gestión de inconsistencias en las plantillas masivas. Para él, la plataforma no es un lujo, es una necesidad de supervivencia operativa. Sus tareas clave en las pruebas se centraron en la carga de datos, el ajuste de grupos y el envío de convocatorias. Si Carlos encontraba el proceso fluido, habríamos ganado la batalla de la eficiencia administrativa.

Por otro lado, para validar el **Desarrollo 2 (Trazabilidad)**, definí a **Ana, la Colaboradora Entusiasta**, y a **David, el Líder Comprometido**. Ana es el termómetro de la experiencia del usuario final; ella necesita ver su ruta de capacitación sin fricciones, entender qué cursos le faltan y sentir que tiene el control de su progreso profesional. David, como Gerente de Oficina, tiene una necesidad distinta: visibilidad. Él no usa la herramienta para capacitarse, sino para supervisar. Su feedback fue vital para ajustar los dashboards y reportes de equipo, asegurando que pudiera identificar a colaboradores en riesgo de rezago con un solo vistazo. Finalmente, incluí a **Elena, la Formadora Dedicada**, cuya prioridad es la gestión logística de su agenda y el registro de asistencia en tiempo real, cerrando así el ciclo completo de la capacitación.

> **Insight de Diseño:** La representatividad no se logra con volumen, sino con especificidad. Elegí limitar el muestreo a entre 3 y 5 participantes por cada perfil. Esta decisión no fue fortuita: es el punto de inflexión donde los patrones de usabilidad se vuelven estadísticamente significativos sin saturar el análisis. Más usuarios habrían generado ruido; menos, habrían dejado puntos ciegos.

#### El prototipo de alta fidelidad como espejo de la realidad

Una de las decisiones metodológicas más importantes que tomé fue utilizar un **Prototipo de Alta Fidelidad** en esta etapa de validación. Hubiera sido más sencillo probar con wireframes de baja fidelidad, pero en un sistema de gestión tan complejo como el GAC, la interfaz de usuario (UI) final es el único entorno que permite medir con precisión la respuesta emocional y la satisfacción general del usuario ante el producto "casi final".

Un prototipo de alta fidelidad no solo evalúa el flujo de navegación, sino las interacciones detalladas que definen la experiencia. Por ejemplo, la visibilidad de los formadores en la segmentación de grupos o la personalización de las invitaciones a través de Outlook y Teams no son solo pasos lógicos; son momentos de interacción que requieren una claridad visual absoluta. Con este nivel de fidelidad, pude observar cómo los usuarios reaccionaban ante el estilo visual de Gentera aplicado a componentes funcionales. ¿Los colores ayudaban a distinguir entre un estado de "pendiente" y uno de "completado"? ¿La tipografía era legible en tablas densas de datos?

Validar con alta fidelidad reduce drásticamente el riesgo de costosos cambios de diseño durante la fase de programación. Es preferible invertir tiempo ajustando un componente en el prototipo que rehacer una línea de código semanas después. Este enfoque me permitió realizar ajustes finos en la experiencia de usuario (UX) antes de que el equipo de desarrollo tocara una sola línea de código, blindando así la inversión del proyecto.

#### La logística del reclutamiento: blindando la objetividad

La planificación estratégica de las pruebas no termina en el diseño de los objetivos; culmina en la logística del reclutamiento. Para asegurar la viabilidad de las sesiones, establecí una colaboración estrecha con los stakeholders clave del proyecto: **Lalo, el Líder de Proyecto de Gentera**, y **Carlos, el Administrador de Capacitación**. Ellos fueron mis aliados para identificar a los empleados que mejor encajaran en los perfiles psicográficos que había definido.

No se trataba solo de encontrar personas disponibles, sino de garantizar una **participación voluntaria y activa**. El feedback honesto es el único que sirve. Mi estrategia fue explicar claramente a los participantes que no los estábamos evaluando a ellos, sino a la herramienta. Quería evitar el "sesgo de complacencia", donde el usuario dice que todo está bien solo por amabilidad con el diseñador. Al reclutar a empleados reales que enfrentan los dolores que la plataforma GAC busca resolver, me aseguré de que sus críticas fueran constructivas y sus elogios, genuinos.

Coordinar estas agendas no fue sencillo. Requería sincronizar tiempos de operación real con las sesiones de prueba, pero el esfuerzo valió la pena. Al tener a los usuarios correctos frente al prototipo correcto, la estrategia de validación estaba lista para ser ejecutada. Estaba a punto de pasar de la teoría de diseño a la práctica operativa, donde cada clic me diría si estábamos construyendo el producto adecuado para Gentera o si debíamos pivotar en nuestras suposiciones.

#### Reflexión sobre la responsabilidad del diseño

Como diseñador senior, entiendo que mi rol es ser el puente entre las necesidades de negocio de la organización y la realidad operativa de sus colaboradores. Una planeación obsesiva de los perfiles y objetivos es la única defensa real contra la construcción de herramientas que nadie quiere usar. No diseñamos pantallas; diseñamos flujos de trabajo que impactan la vida profesional de miles de personas. La estrategia de validación que articulé para el proyecto GAC no fue un trámite burocrático, sino un compromiso con la excelencia operativa y el valor humano que define a Gentera.


Una vez blindada la estrategia y los perfiles, me enfrenté a un desafío técnico superior: ¿cómo transformar estos objetivos abstractos en acciones concretas que un usuario pudiera ejecutar sin ayuda? La respuesta estaba en el **DISEÑO DEL PLAN DE PRUEBAS Y ESCENARIOS OPERATIVOS**, donde cada tarea debía ser redactada con una precisión quirúrgica para no sesgar al participante. Recuerdo perfectamente el momento en que empecé a escribir el primer escenario para Carlos; me di cuenta de que un solo verbo mal colocado en la instrucción podía arruinar toda la sesión de validación.

### Parte 2: Diseño del Plan de Pruebas y Escenarios Operativos

#### El instrumento que atrapa la realidad

Una vez que blindé los perfiles psicográficos de los usuarios de Gentera, me enfrenté a un desafío técnico de mayor calibre: ¿cómo transformar esos objetivos de negocio abstractos en un instrumento de medición infalible? Un perfil es solo un boceto de intención, pero un plan de pruebas es un guion técnico diseñado para atrapar la realidad operativa sin filtros. Sabía que no bastaba con "mostrar" el prototipo de alta fidelidad; necesitaba construir un entorno controlado donde el usuario fuera el protagonista absoluto y yo, un observador invisible.

Articulé el plan de pruebas con una premisa clara: el diseño debía defenderse solo. Si tenía que explicar una función, el diseño ya había fallado. Por eso, dediqué días a redactar escenarios "ciegos" donde el usuario actuara por necesidad operativa, no por instrucción directa. Mi objetivo como diseñador era eliminar cualquier sesgo de confirmación. No quería que me dijeran que la plataforma era "bonita"; necesitaba ver si Carlos podía gestionar una inconsistencia en la plantilla de ADN en menos de dos minutos o si Ana entendía cómo agendar su próximo curso sin ayuda externa.

#### La ingeniería de los escenarios: Poniendo a prueba las reglas de negocio

Diseñé cuatro bloques de escenarios operativos, cada uno calibrado para estresar una parte específica de la arquitectura de información y las reglas de negocio que habíamos implementado. No eran simples tareas; eran "pruebas de fuego" para la eficiencia de la plataforma GAC.

Para **Carlos (el Coordinador Detallista)**, el escenario fue el más denso técnicamente. Lo situé en el momento crítico de la semana: la recepción de la plantilla de capacitación de ADN. Diseñé la **Tarea 1** no solo para que cargara el archivo, sino para que navegara el resumen del procesamiento. Quería observar si era capaz de identificar inconsistencias de forma autónoma. En la **Tarea 2**, lo obligué a intervenir en la lógica del sistema: debía ajustar manualmente un grupo que no cumplía con el cupo mínimo. Aquí, el foco estaba en la intuición del *drag-and-drop*; necesitaba validar si mover un participante de un grupo a otro para completar el aforo era un proceso fluido o si la carga cognitiva de la interfaz lo bloqueaba. Finalmente, en la **Tarea 3**, validé el flujo de salida: el envío masivo de invitaciones por Outlook, Teams y WhatsApp. Mi pregunta era simple: ¿confía el usuario en que el sistema realmente envió las notificaciones?

Con **Ana (la Colaboradora Entusiasta)**, el enfoque cambió radicalmente hacia la trazabilidad. El escenario se centró en su crecimiento profesional. En la **Tarea 1**, le pedí encontrar su ruta de capacitación y su porcentaje de avance. Aquí evalué la claridad del mapa visual que habíamos diseñado. La **Tarea 2** fue una prueba de interoperabilidad técnica: debía identificar su próximo curso y agregarlo a su calendario personal mediante la exportación de un archivo **.ical**. Si Ana no encontraba el botón o no entendía el formato, la automatización perdía su valor. La **Tarea 3** cerraba el ciclo con la consulta de su historial y los detalles de cursos pasados, validando si la jerarquía de información permitía un acceso rápido a datos históricos.

Para **David (el Líder Comprometido)**, el diseño del escenario buscaba medir la capacidad de gestión. Su **Tarea 1** consistió en acceder a la vista de progreso de su equipo, un dashboard que debía resumir semanas de datos en un solo vistazo. En la **Tarea 2**, introduje una variable de estrés: identificar colaboradores retrasados. Aquí probé la eficiencia de los filtros y la capacidad de realizar un *drill-down* profundo hacia la ruta específica de un colaborador en riesgo. La **Tarea 3** validó la utilidad administrativa mediante la generación y simulación de exportación de reportes a Excel, un requisito innegociable para las reuniones de desempeño en Gentera.

Finalmente, para **Elena (la Formadora Dedicada)**, tracé un camino que uniera la logística con la ejecución. En la **Tarea 1**, debía navegar su agenda de cursos asignados, validando la claridad de las fechas y sedes. La **Tarea 2** fue crítica para la integridad de la data: el registro de asistencia de una sesión ya impartida y la inclusión de comentarios cualitativos sobre el grupo. Aquí observé si el flujo de entrada de datos era lo suficientemente ágil para una formadora que suele estar entre sesiones. Su **Tarea 3** consistió en consultar el avance de la subdirección a su cargo, validando si el dashboard le entregaba el nivel de detalle necesario para su rol estratégico.

#### El marco métrico: Convirtiendo la intuición en datos forenses

Como diseñador senior, sé que los sentimientos no construyen productos robustos, los datos sí. Por ello, establecí un marco de medición híbrido que combinaba la profundidad cualitativa con el rigor cuantitativo, asegurando que cada clic y cada duda quedaran registrados.

El protocolo **Think-aloud (Pensar en voz alta)** fue mi herramienta forense principal. Instruí a los moderadores para que animaran a los usuarios a verbalizar cada expectativa y cada momento de confusión. No solo buscaba errores, buscaba el modelo mental del usuario. Quería capturar ese instante de silencio antes de un clic, el "hover" de la duda, o el suspiro de alivio al encontrar una función. Estas expresiones no verbales y los comentarios literales ("verbatims") son los que después me permitirían defender cambios de diseño ante los stakeholders con una autoridad basada en la evidencia, no en la opinión.

En el plano cuantitativo, definí tres métricas fundamentales para objetivar la experiencia:

*   **Tasa de Éxito en la Tarea:** Una métrica binaria implacable. ¿Pudo el usuario completar la tarea de forma independiente? Si la respuesta era "no", el diseño tenía una falla estructural que debía corregirse antes de tocar una sola línea de código.
*   **SEQ (Single Ease Question):** Tras cada tarea, lanzaba esta pregunta de pulso rápido en una escala del 1 al 7. Me permitía identificar qué flujos específicos eran percibidos como difíciles, incluso si el usuario lograba terminarlos. Un éxito con un SEQ bajo es una deuda de usabilidad futura.
*   **SUS (System Usability Scale):** Al finalizar la sesión, apliqué este cuestionario estándar de 10 ítems. El SUS me daría la "nota final" de la usabilidad percibida, un número comparable que serviría como línea base para las siguientes iteraciones del proyecto GAC.

#### Arquitectura del guion y blindaje del entorno técnico

La creación del guion de moderación fue un ejercicio de contención. Utilicé la estructura de mi metodología de validación para asegurar que cada una de las 20 sesiones fuera consistente. El guion comenzaba con una fase de **Introducción y Rapport**, donde era vital deslindar al usuario de cualquier responsabilidad: "Estamos probando el prototipo, no a ti". Esta frase es fundamental para reducir la ansiedad y obtener un comportamiento natural.

Las instrucciones de las tareas fueron redactadas con una neutralidad quirúrgica. Evité sistemáticamente verbos que guiaran al clic, como "presiona el botón de enviar". En su lugar, usaba disparadores situacionales: "Imagina que ya terminaste de revisar los grupos y quieres avisarles a todos". Si el usuario no encontraba el botón de "Enviar", el problema era de visibilidad, no de comprensión de la instrucción.

Para el entorno técnico, decidí utilizar prototipos de **Alta Fidelidad en Figma**. En esta etapa del proyecto, la claridad visual y las interacciones detalladas (como los estados de *hover* o las transiciones de carga) eran críticas para validar si la estética de Gentera ayudaba o entorpecía la legibilidad. Las sesiones se programaron vía **Google Meets**, lo que me permitió capturar audio, video y, lo más importante, la pantalla del usuario en tiempo real. Esta trazabilidad técnica era mi garantía de que ningún hallazgo se perdería en la memoria del observador.

#### Reflexión sobre la neutralidad del moderador

Diseñar un plan de pruebas es, en esencia, diseñar un filtro contra el ego del diseñador. Es muy fácil guiar a un usuario para que "descubra" lo brillante que es tu solución, pero eso es un error de principiante que cuesta miles de dólares en desarrollo desperdiciado. Mi responsabilidad en esta fase fue asegurar la neutralidad absoluta.

Un plan de pruebas bien estructurado actúa como un juez imparcial. Separa las opiniones subjetivas ("me gusta el azul") de los problemas de usabilidad reales que impactan la eficiencia operativa ("no entiendo cómo filtrar a los colaboradores retrasados"). Al final del día, mi éxito no dependía de que los usuarios pasaran todas las pruebas, sino de que el plan fuera lo suficientemente sensible para detectar hasta la más mínima fricción en las reglas de negocio de Gentera. Solo así podíamos garantizar que GAC no fuera solo una herramienta nueva, sino una herramienta que realmente funcionara bajo presión.

> **Insight de Diseño:** La calidad de los hallazgos de una prueba de usabilidad es directamente proporcional a la calidad del silencio del moderador. Si el plan de pruebas no contempla el espacio para que el usuario se equivoque, no estás validando, estás evangelizando.

EJECUCIÓN Y ANÁLISIS FORENSE DE HALLAZGOS (RONDA 1)

Recuerdo perfectamente la tensión antes de la primera sesión con Carlos; tenía el guion listo y el prototipo blindado, pero siempre queda esa duda latente de si los escenarios serían lo suficientemente claros. Estaba a punto de ver cómo meses de decisiones de diseño se estrellaban contra la realidad de un usuario con prisa y una plantilla de ADN llena de errores. La primera sesión no solo me daría datos, sino que revelaría si el lenguaje que elegimos para la interfaz era realmente el idioma que se habla en las oficinas de Gentera.

### Parte 3: Ejecución y Análisis Forense de Hallazgos Ronda 1

#### El silencio del moderador y la realidad del usuario

Presioné el botón de grabar en la primera sesión con Carlos y sentí esa adrenalina familiar: el momento exacto en el que mis hipótesis sobre la plataforma GAC dejaban de ser teoría para enfrentarse a la operatividad cruda de Gentera. Sabía que para que esta validación fuera real, debía silenciar mi ego de diseñador. No estaba allí para que me dijeran que la interfaz era atractiva, sino para observar dónde se rompía la lógica de navegación bajo la presión de una jornada laboral real. 

Utilicé un protocolo de **pensar en voz alta (think-aloud)**, pidiéndoles a los participantes que verbalizaran cada duda, cada expectativa y cada momento de confusión. Mi labor no era guiar, sino documentar el proceso mental de trece personas que representaban el ecosistema completo del proyecto: desde Carlos, que gestiona la complejidad administrativa, hasta Ana, David y Elena, quienes viven la capacitación desde la ejecución y el liderazgo. Construir un *rapport* inicial fue clave; necesitaba que Ana, desde su rol en Ventas, o los colaboradores de Yastás, se sintieran con la libertad de "equivocarse" frente al prototipo, recordándoles que estábamos evaluando el diseño, no su capacidad.

#### La validación del alivio: cuando el diseño hace "clic"

Ver la reacción de Carlos al interactuar con el flujo de automatización fue el primer indicador de que íbamos por el camino correcto. Al completar la carga de la plantilla y ver cómo el sistema proponía la segmentación de grupos de forma autónoma, usó una palabra que se quedó grabada en mis notas: **"salvadora"**. Ese comentario no era estético; era el reconocimiento de que le estábamos devolviendo horas de trabajo manual que antes consumían su semana. La claridad en las tarjetas de propuesta y las alertas de cupo validaron que la jerarquía de información que propusimos permitía una toma de decisiones veloz y sin errores.

Por otro lado, la experiencia de Ana con la sección "Mi Ruta de Capacitación" confirmó el valor de la visualización de datos. El **Mapa Visual** fue el componente más elogiado por los colaboradores; les permitía entender su progreso no como una lista de tareas pendientes, sino como un camino profesional claro. En el caso de David, el Líder de Oficina, la utilidad se tradujo en gestión de riesgos. Observé cómo navegaba el Dashboard de Equipo y utilizaba los **semáforos de progreso** para identificar instantáneamente quiénes estaban rezagados. Ya no necesitaba preguntar uno por uno; la interfaz le entregaba el diagnóstico listo para la acción.

#### La autopsia de las fricciones: hallazgos US-001 a US-004

A pesar de la aceptación general, el análisis forense de las sesiones reveló costuras que debíamos reforzar. El hallazgo **US-001** fue una revelación crítica sobre las reglas de negocio: Carlos, al detectar un error menor en los datos cargados desde la plantilla, intentó corregirlo directamente en la tabla de la interfaz. El diseño original lo obligaba a volver al archivo Excel y re-subir todo, una fricción que no habíamos dimensionado y que exigía una capacidad de edición *in-situ* para mantener la fluidez del proceso.

Otra desconexión semántica apareció en el flujo de los colaboradores bajo el ID **US-004**. La terminología pedagógica **"Toques con Formador"** generó dudas en Ana y otros usuarios. Al no encontrar un tooltip o una explicación contextual, se detenían a intentar descifrar qué implicaba ese hito en su ruta. Esta brecha de comprensión, aunque no bloqueaba el éxito de la tarea, generaba una carga cognitiva innecesaria que debíamos resolver mediante micro-copy o elementos de ayuda visual. Estas fricciones, categorizadas con severidad media, se convirtieron de inmediato en las prioridades de mi backlog de diseño.

#### Cuantificando la experiencia: del SEQ al System Usability Scale (SUS)

Para eliminar cualquier rastro de subjetividad en mi reporte, consolidé los datos cuantitativos de esta primera ronda. Alcanzamos una **tasa de éxito del 100%** en las tareas críticas de carga y consulta, lo que me dio la tranquilidad de que la arquitectura de información era sólida. La métrica **SEQ (Single Ease Question)** arrojó un promedio de **6.5 sobre 7**, confirmando que la curva de aprendizaje para realizar acciones individuales era mínima para los cuatro perfiles evaluados.

Sin embargo, el dato definitivo fue el **System Usability Scale (SUS)**, donde obtuvimos una puntuación de **85/100**. En términos técnicos, esto sitúa a la plataforma GAC en un rango de **"Excelente"**. Este número no solo era un triunfo para el equipo de diseño, sino que funcionaba como un lenguaje común para los stakeholders de Gentera: era la evidencia estadística de que el producto estaba listo para escalar, siempre y cuando atendiéramos las oportunidades de refinamiento detectadas.

> **Insight de Diseño:** Una puntuación SUS alta puede ser una trampa si no se analiza junto a los hallazgos cualitativos. El 85/100 nos dio el permiso para avanzar, pero las notas de frustración de Carlos ante la falta de edición directa fueron las que realmente dictaron el trabajo de la siguiente semana. La métrica valida el presente; el feedback cualitativo construye el futuro.


Con las métricas de mi lado pero con una lista clara de fricciones operativas sobre la mesa, la presión se trasladó de la observación a la resolución. Tenía que decidir qué tanto podíamos alterar el flujo de edición directa sin comprometer la integridad de la base de datos, sabiendo que la Ronda 2 de pruebas no perdonaría soluciones a medias. El desafío ahora era transformar esos "puntos de dolor" en componentes definitivos antes de que el equipo de desarrollo recibiera la versión final.

### Parte 4: Ciclo de Iteración y Validación de Soluciones Ronda 2

#### La tensión entre el dato y el diseño

Tener un System Usability Scale (SUS) de 85/100 sobre la mesa es, para muchos, el final del camino. Es una cifra que brilla en cualquier reporte ejecutivo. Sin embargo, para mí, ese número era un ruido de fondo que intentaba ocultar las muecas de frustración que vi en el rostro de Carlos cuando intentaba corregir un error en la carga de su plantilla. Sabía que si entregábamos el prototipo así, el producto nacería con una deuda operativa que terminaría asfixiando al equipo de capacitación de Gentera. La presión no venía del cronograma —que ya era ajustado—, sino de la responsabilidad ética de no ignorar los "puntos de dolor" que, aunque no hundieron la métrica, sí lastimaban la experiencia diaria.

Entré en la fase de iteración con una premisa clara: no íbamos a "maquillar" la interfaz; íbamos a blindar la operatividad. Tenía una lista de nueve problemas priorizados (de la US-001 a la US-009) y una ventana de tiempo muy estrecha antes de la segunda ronda de validación. El reto era transformar ese feedback crudo en componentes de alta fidelidad que fueran técnica y funcionalmente impecables. No podíamos permitirnos soluciones a medias; la Ronda 2 sería el juicio final antes de que el equipo de desarrollo recibiera el handoff definitivo.

#### El filtro de la realidad: Taller de Priorización y Solución

Antes de mover un solo píxel en Figma, convoqué a una sesión de cuatro horas que resultó ser el corazón estratégico de esta fase. Reuní al Líder Técnico y a los desarrolladores Frontend para diseccionar el informe de la primera ronda. Como facilitador, mi rol no era defender mi diseño a capa y espada, sino someterlo al escrutinio de la viabilidad. 

Uno de los debates más intensos giró en torno a la **US-001: Claridad en Corrección de Inconsistencias**. Mi propuesta inicial era permitir una edición en línea total en el reporte de errores. El Líder Técnico arqueó una ceja: "Modificar celdas individuales en una tabla que refleja una base de datos relacional de este tamaño tiene implicaciones de integridad que no podemos ignorar", me advirtió. 

> **Insight de Diseño:** En un producto empresarial, la "facilidad de uso" nunca debe comprometer la integridad de la data. Si permitimos que Carlos edite un ID de empleado sin las validaciones correctas, el sistema colapsa. Decidimos construir una interfaz de edición en línea controlada: Carlos podría corregir el dato directamente en la tabla, pero el sistema ejecutaría una validación en tiempo real antes de guardar, ofreciendo además un botón de "Re-subir Plantilla" para errores masivos. Fue el trade-off perfecto entre agilidad y seguridad.

Durante esas cuatro horas, recorrimos cada hallazgo:
*   **US-002 (Disponibilidad de Formadores):** Acordamos que un panel lateral era la solución menos intrusiva para mostrar la carga de trabajo de los formadores sin sacar a Carlos del flujo de segmentación.
*   **US-003 (Personalización):** Definimos las variables dinámicas que el backend podría soportar para las plantillas de correo, como `[Nombre_Colaborador]` y `[Nombre_Curso]`, asegurando que la flexibilidad no generara errores de renderizado.
*   **US-009 (Sincronización de Calendario):** Aquí la honestidad técnica ganó. El equipo de desarrollo me confirmó que una sincronización bidireccional en tiempo real con Outlook estaba fuera del alcance del MVP. Decidí pivotar hacia una exportación iCal funcional, que resolvía la necesidad inmediata de los formadores sin poner en riesgo el deadline.

#### Construyendo la solución: De la idea al componente

Con el camino despejado por el equipo técnico, me sumergí en la actualización de los prototipos de alta fidelidad. Esta no fue una tarea de retoque estético, sino de ingeniería de información. 

Para resolver la **US-002**, diseñé un panel lateral expandible en la pantalla de "Detalle y Ajuste de Grupo". La complejidad aquí era mostrar la carga de trabajo, la especialización y la ubicación del formador de forma compacta. Utilicé un sistema de barras de progreso y etiquetas de color para que Carlos pudiera identificar, en menos de tres segundos, quién estaba disponible y quién estaba al borde del burnout. Ver esa información en tiempo real mientras segmentaba el grupo eliminaba la necesidad de que Carlos tuviera tres excels abiertos simultáneamente.

En el lado del colaborador, la **US-004** era una deuda de claridad conceptual. Los usuarios no entendían qué significaban los "Toques con Formador" en su mapa de ruta. Diseñé una serie de tooltips y modales informativos que aparecían al interactuar con los nodos de los niveles 1, 4, 8 y 12. No solo explicaban el "qué", sino el "para qué" de esa interacción humana en su proceso de capacitación. Refiné la librería de componentes para asegurar que estos nuevos elementos fueran consistentes con el lenguaje visual de Gentera, actualizando las anotaciones detalladas para que los desarrolladores no tuvieran dudas sobre el comportamiento de estos estados "hover".

#### El Juicio Final: La Segunda Ronda de Validación

Regresé a la sala de pruebas con los mismos 13 usuarios. Había una tensión palpable; era el momento de ver si mi interpretación de sus problemas era la correcta. Seguí el protocolo de "pensar en voz alta" con el mismo rigor que en la primera ronda, pero esta vez, el ambiente era distinto.

Cuando Carlos llegó a la sección de errores de plantilla (US-001), se detuvo. Hizo clic en una celda con un error de formato, corrigió el dato directamente y guardó. "Esto es súper práctico", dijo sin que yo le preguntara. "Es mucho más rápido que tener que descargar, corregir y volver a subir todo por un simple error de dedo". Ese comentario fue la validación de que el taller de priorización con desarrollo había valido la pena.

Con los colaboradores, el cambio fue radical. Ana, que en la primera ronda se quedó mirando el mapa de ruta con confusión, esta vez pasó el cursor sobre un "Toque con Formador". Al leer el tooltip, su expresión cambió: "¡Ah, ahora sí sé qué es esto! Es cuando me siento con mi mentor para revisar el avance. Muy claro". La ambigüedad que antes generaba fricción se había disuelto en una interacción de dos segundos.

#### El triunfo de la iteración: Métricas que hablan

Al cerrar la última sesión con los formadores y analizar la data, los resultados fueron contundentes. No solo habíamos resuelto los problemas, sino que habíamos elevado el estándar del producto.

*   **System Usability Scale (SUS) Global:** Pasamos de un 85 a un **90/100**. En el mundo del diseño de producto, llegar al 90 es entrar en el territorio de la excelencia absoluta.
*   **Tasa de Éxito:** Logramos un **100%** en todas las tareas críticas para los cuatro roles evaluados.
*   **Eficiencia Temporal:** Registramos una reducción de entre el **20% y el 30%** en el tiempo necesario para completar tareas complejas. Carlos ya no "luchaba" con la plataforma; la navegaba con una fluidez que antes no existía.
*   **Single Ease Question (SEQ):** Las puntuaciones promedio rozaron el máximo (6.8 a 7 de 7), confirmando que la percepción de facilidad era universal.

#### La madurez del Product Designer: El Backlog Estratégico

A pesar del éxito, la Ronda 2 también trajo nuevas sugerencias. Ana mencionó que le gustaría tener una sección de "Recursos del Curso" (US-010) y David pidió un campo de "Notas del Líder" (US-011) para sus sesiones de coaching. 

Como responsable del producto, tuve que tomar una decisión difícil. Podía intentar meter estas funciones al diseño final, pero eso significaba retrasar la entrega a desarrollo y arriesgar la estabilidad de lo que ya estaba validado. Decidí mover estos hallazgos al **Backlog de Futuras Iteraciones**. No fue una negativa por falta de ganas, sino un ejercicio de responsabilidad estratégica: el MVP ya era excepcionalmente sólido y añadir más variables en este punto solo generaría ruido. Documenté estas necesidades como "Nice-to-haves" para la Fase 2 del proyecto, asegurando que la voz del usuario quedara registrada sin comprometer el lanzamiento.

La plataforma GAC estaba, por fin, en su estado óptimo. Habíamos transformado la frustración inicial en una herramienta que no solo automatizaba procesos, sino que empoderaba a cada rol dentro de Gentera. El prototipo de alta fidelidad ya no era una promesa; era una solución validada, robusta y lista para convertirse en código.


Con la usabilidad blindada y los flujos validados al 100%, me enfrenté a una realidad que a menudo se ignora en las fases de diseño visual: el cumplimiento normativo y la accesibilidad real. No bastaba con que Carlos o Ana pudieran usar la plataforma; necesitaba asegurar que GAC fuera inclusiva bajo estándares internacionales y que los stakeholders de Gentera dieran el visto bueno final a la arquitectura técnica. El siguiente desafío me llevaría a auditar cada contraste, cada etiqueta de lectura y a sentarme en una mesa de alineación estratégica donde el diseño se encontraría, cara a cara, con las expectativas finales del negocio.

### Parte 5: Auditoría de Accesibilidad y Alineación Estratégica Final

#### La responsabilidad de no dejar a nadie atrás

Una plataforma que funciona para la mayoría, pero excluye a una minoría, no es una plataforma terminada; es una deuda técnica y ética pendiente. Tras cerrar las rondas de usabilidad con métricas que rozaban la excelencia, me enfrenté a una realidad que muchos equipos suelen postergar: el cumplimiento normativo y la accesibilidad real. No bastaba con que Carlos o Ana pudieran navegar los flujos de GAC con fluidez; necesitaba asegurar que cualquier colaborador de Gentera, independientemente de sus capacidades visuales, motoras o cognitivas, tuviera la misma autonomía.

Como responsable del producto, mi razonamiento fue claro: el valor de "Centrado en la Persona" que define a la institución no podía ser un eslogan de marketing, debía estar escrito en el código y en la arquitectura de la interfaz. Decidí que el estándar mínimo aceptable sería el nivel **WCAG 2.1 AA**. Sabía que esto implicaba una revisión forense de cada componente que ya habíamos validado, pero era el único camino para blindar la herramienta y garantizar una experiencia verdaderamente inclusiva. No buscaba solo un "visto bueno" legal; buscaba que GAC fuera perceptible, operable, comprensible y robusto para todos.

#### El análisis bajo los principios POUR

Inicié la auditoría técnica estructurando mi evaluación sobre los cuatro pilares de las pautas **WCAG**: los principios **POUR**. Este marco de trabajo no es una sugerencia, es el cimiento de la accesibilidad web moderna.

*   **Perceptible:** Me dediqué a verificar que la información no dependiera de un solo sentido. Revisé que cada imagen significativa tuviera su alternativa textual y que los videos (si los hubiera) contaran con subtítulos. Pero el reto más crítico aquí fue el **ratio de contraste**. Utilicé herramientas de diagnóstico para asegurar que cada bloque de texto sobre su fondo cumpliera con el ratio mínimo de **4.5:1** para texto normal y **3:1** para texto grande. En una interfaz con tantos estados y alertas de color, asegurar que un error no se comunicara solo mediante el rojo fue una prioridad absoluta.
*   **Operable:** Aquí es donde la mayoría de los prototipos fallan. Me aseguré de que toda la funcionalidad de GAC fuera disponible desde el teclado. Si un administrador no puede usar un ratón, debe poder segmentar un grupo usando solo la tecla **Tab**, **Enter** y las flechas. Eliminé cualquier asomo de "trampas de teclado" donde el foco pudiera quedarse atrapado en un modal o un menú desplegable.
*   **Comprensible:** Analicé la legibilidad de la terminología. Gentera tiene un lenguaje interno muy específico, y mi labor fue asegurar que las instrucciones fueran claras y predecibles. Si un usuario comete un error en la carga de una plantilla, el mensaje de error no solo debe ser visible, sino que debe explicar exactamente qué falló y cómo corregirlo, sin ambigüedades.
*   **Robusto:** Este principio se centró en la compatibilidad. Diseñé la estructura pensando en que fuera interpretada de forma fiable por diversas tecnologías de asistencia, asegurando que el marcado fuera lo suficientemente limpio para que los navegadores y lectores de pantalla no interpretaran basura visual.

#### Herramientas de diagnóstico y navegación forense

Para ejecutar esta auditoría, no me limité a una revisión visual. Implementé un protocolo híbrido que combinaba herramientas automatizadas con pruebas manuales exhaustivas, que son las que realmente revelan la fricción humana.

Primero, utilicé extensiones como **WAVE** y **axe DevTools** sobre los prototipos de alta fidelidad. Estos escaneos iniciales me permitieron detectar "fruta madura": errores de contraste en pies de página, falta de etiquetas en iconos de navegación y jerarquías de encabezados (H1, H2, H3) que no seguían un orden lógico. Sin embargo, las herramientas automáticas solo detectan cerca del 40% de los problemas de accesibilidad. El verdadero trabajo empezó con las manos en el teclado.

Navegué cada flujo crítico —desde el login hasta la generación de reportes de los líderes— sin tocar el ratón una sola vez. Fue un ejercicio de paciencia y rigor técnico. Verifiqué que el orden de tabulación siguiera el flujo visual lógico de la página y que el **indicador de foco** fuera siempre visible y prominente. Si perdía de vista dónde estaba el cursor del teclado, el diseño fallaba. 

Posteriormente, activé el lector de pantalla **NVDA**. Escuchar la interfaz es una experiencia transformadora para cualquier diseñador. Me permitió identificar si el orden de lectura era coherente y si los elementos dinámicos, como los mensajes de carga o las notificaciones de éxito al enviar una invitación, eran vocalizados correctamente. Si el lector de pantalla se quedaba en silencio mientras algo importante ocurría en la pantalla, sabía que tenía una brecha de accesibilidad crítica.

#### La gestión de hallazgos: de la técnica a la solución

El resultado de esta auditoría se materializó en un informe detallado donde clasifiqué cada hallazgo por severidad y criterio afectado. Aunque el nivel de accesibilidad general era alto, identifiqué tres puntos de mejora que resultaron fundamentales para el refinamiento final.

> **Insight de Accesibilidad:** La accesibilidad no es un obstáculo para el diseño visual; es un refinamiento de la lógica de interacción. Un foco visible prominente no solo ayuda a quien tiene baja visión, sino que mejora la experiencia de cualquier usuario avanzado que prefiera el teclado.

*   **ID ACC-001 (Foco Visible):** Detecté que en las tablas densas de administración, el indicador de foco en los enlaces de texto era perceptible pero no lo suficientemente prominente. Para usuarios con baja visión o en entornos de mucha luz, esto era una barrera. Mi recomendación fue ajustar el estilo de "outline" en la guía de estilo para asegurar un contraste y grosor consistentes en toda la plataforma.
*   **ID ACC-002 (Contenido No Textual):** Identifiqué que algunos iconos decorativos en las tarjetas de progreso tenían texto alternativo por defecto. Esto generaba ruido innecesario para los usuarios de lectores de pantalla, quienes escuchaban descripciones de elementos que no aportaban valor informativo. Decidí especificar que estas imágenes debían llevar un atributo `alt=""` vacío para que las tecnologías de asistencia las ignoraran por completo, limpiando la carga cognitiva auditiva.
*   **ID ACC-003 (Propósito de los Enlaces):** Este fue el hallazgo más sutil pero potente. En las tablas de colaboradores, teníamos múltiples enlaces que decían simplemente "Ver Detalle". Para alguien que ve la pantalla, el contexto es obvio por la fila en la que se encuentra. Para un usuario de lector de pantalla que navega por una lista de enlaces, escuchar "Ver Detalle" diez veces seguidas es inútil. Propuse la implementación de etiquetas **ARIA** (`aria-label`) para que el software vocalizara: "Ver detalle del colaborador [Nombre]". Esta pequeña intervención técnica transformó una interfaz confusa en una herramienta de precisión.

#### El cierre estratégico: Alineación con Stakeholders

Con los hallazgos de usabilidad resueltos y la auditoría de accesibilidad concluida, convoqué a la sesión de validación final. En la mesa estaban **Lalo**, como líder estratégico, y **Carlos**, como el dueño de la operación diaria. Mi objetivo no era solo mostrar pantallas bonitas, sino demostrar que el producto era una solución blindada y lista para el mundo real.

Presenté los resultados de las pruebas de usabilidad de forma cruda y honesta. Utilicé citas directas de los usuarios y clips de video cortos donde se veía la transición de la confusión inicial a la resolución fluida tras nuestras iteraciones. Ver a un formador completar su asistencia en segundos, cuando antes le tomaba minutos de frustración, fue el argumento más poderoso que pude presentar.

Al llegar a la parte de accesibilidad, expliqué por qué habíamos invertido tiempo en cumplir con el estándar **WCAG 2.1 AA**. Les mostré cómo los ajustes en el foco y las etiquetas ARIA no solo hacían la plataforma inclusiva, sino que la hacían más robusta técnicamente. Presenté comparativas de "Antes y Después" de los componentes refinados, justificando cada cambio no como un capricho estético, sino como una decisión basada en datos y en la mitigación de riesgos operativos.

#### Aprobación formal y blindaje del producto

La respuesta de los stakeholders fue de total alineación. Carlos validó que los refinamientos seguían cubriendo sus necesidades operativas sin añadir complejidad innecesaria, y Lalo reconoció que el enfoque inclusivo elevaba el estándar de los productos digitales de Gentera. Obtuve el "visto bueno" formal para proceder, pero más importante aún, obtuve su confianza en que el diseño que estábamos entregando no se rompería ante la diversidad de usuarios.

Esta aprobación marcó el cierre de una fase intensa de validación. No solo teníamos un prototipo validado; teníamos una **Guía de Estilo blindada** y un conjunto de especificaciones de accesibilidad que servirían de mapa para el equipo de desarrollo. Habíamos transformado la incertidumbre del inicio en una certeza técnica y funcional. GAC ya no era una propuesta; era un sistema listo para ser construido sobre cimientos de usabilidad e inclusión.

**Reflexión final:**
Esta actividad me recordó que el diseño de producto es, en su esencia, un ejercicio de empatía técnica. Lograr un SUS de 90/100 y cumplir con el nivel AA de accesibilidad no son solo medallas para el portafolio; son la garantía de que el trabajo que realizamos tiene un impacto real y positivo en la vida laboral de miles de colaboradores. Me voy de esta fase con la satisfacción de saber que GAC no solo automatiza procesos, sino que respeta la dignidad y el tiempo de cada persona que interactúa con él, sentando un precedente de calidad para los futuros desarrollos de la institución.