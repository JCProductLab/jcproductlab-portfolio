# Fase 3: Probar y Validar

## Actividad_04_Validación con Stakeholders

### Parte 1: El Norte de la Validación Estrategia y Perfiles

#### La transición de la estética a la fricción operativa

Habíamos cerrado la fase de diseño visual con una interfaz que se veía impecable. Los componentes del UI Kit estaban en su sitio, la jerarquía tipográfica respetaba la identidad de Gentera y, sobre el papel, todo fluía. Sin embargo, sentía esa inquietud técnica que solo aparece cuando sabes que un diseño *pixel-perfect* es, en realidad, una promesa sin validar. Me negaba a entregar una sola línea de código a ingeniería sin antes someter esos píxeles a la fricción de la realidad operativa del equipo de capacitación. No buscaba una validación estética; necesitaba certezas de usabilidad.

El paso de los prototipos estáticos a la validación empírica fue una maniobra estratégica para transformar mis hipótesis de diseño en datos duros. En este punto del proceso, el riesgo no era que la plataforma se viera "mal", sino que fuera ineficiente para alguien que lleva años gestionando grupos en hojas de cálculo complejas. Mi enfoque fue claro: debíamos estresar la interfaz para ver dónde se rompía el modelo mental del usuario antes de que el error fuera costoso de corregir en desarrollo.

#### Los siete pilares de la validación

Para que esta ronda de pruebas no se convirtiera en una charla de opiniones subjetivas, articulé siete objetivos específicos que actuaron como mi brújula técnica. No quería que los usuarios me dijeran si les gustaba el azul de la marca; necesitaba saber si podían completar sus tareas críticas sin ayuda.

1.  **Validar la facilidad de uso y eficiencia:** Mi prioridad era observar si las tareas se completaban de forma intuitiva. Si un usuario tardaba más de lo previsto en encontrar el botón de "Carga de Plantilla", teníamos un problema de arquitectura, no de estética.
2.  **Confirmar la claridad del diseño visual:** Aquí puse a prueba la legibilidad de la iconografía y la jerarquía de colores de Gentera para asegurar que no causaran confusión visual en momentos de alta carga cognitiva.
3.  **Identificar fricciones de interacción:** Busqué detectar errores específicos en los flujos de trabajo, esos pequeños tropiezos en los clics que, multiplicados por cientos de usuarios, destruyen la productividad.
4.  **Validar la terminología técnica:** Era vital confirmar que el lenguaje que usamos en la interfaz fuera el que se habla en los pasillos de Gentera. Un término mal empleado puede invalidar todo un flujo de navegación.
5.  **Evaluar la satisfacción general:** Necesitaba capturar el feedback cualitativo. ¿La herramienta les genera confianza o frustración?
6.  **Confirmar la implementación de reglas de negocio:** Este era el punto más crítico. Debía asegurar que conceptos complejos como la elegibilidad de colaboradores y las reglas de segmentación se entendieran perfectamente en la interfaz.
7.  **Revisar el feedback previo de wireframes:** Aproveché para blindar soluciones a problemas detectados anteriormente, como la re-subida de plantillas, la visibilidad de los formadores y la personalización de las invitaciones por Outlook y Teams.

> **Insight de diseño:** No diseñamos para la aprobación del stakeholder, diseñamos para la autonomía del usuario. Si el coordinador no entiende por qué un colaborador está excluido de un grupo, el sistema ha fallado, independientemente de lo bien que se vea el dashboard.

#### El panel de prueba: Seleccionando a los protagonistas

Una prueba de usabilidad es tan buena como la muestra de usuarios que participa en ella. No podíamos invitar a cualquiera; necesitaba perfiles que representaran fielmente las tensiones del día a día en Gentera. Basándome en la realidad operativa, definí cuatro perfiles críticos y determiné una muestra de **3 a 5 participantes por rol**. Este número no es aleatorio: es el estándar para detectar el 80% de los problemas de usabilidad más graves sin caer en rendimientos decrecientes.

Maniobré directamente con Lalo, el líder del proyecto, y con Carlos, el administrador de capacitación, para reclutar a estos perfiles. No buscábamos "usuarios expertos", sino personas que enfrentan los problemas reales que la plataforma GAC pretende resolver.

*   **Carlos (El Coordinador Detallista):** Es el usuario *power*. Su mundo son las plantillas masivas y la gestión de inconsistencias. Si la automatización de carga de archivos no funcionaba para él, el proyecto perdía su valor principal.
*   **Ana (La Colaboradora Entusiasta):** Representa el "Valor Humano". Ella es quien debe sentir que la plataforma le da claridad sobre su ruta de capacitación y su progreso, no que es una carga administrativa más.
*   **David (El Líder Comprometido):** Como gerente, su necesidad es estratégica. Él no carga datos, él consume información. Su éxito dependía de la claridad de los dashboards para identificar colaboradores en riesgo de no completar su formación.
*   **Elena (La Formadora Dedicada):** Ella es el eje de la ejecución en campo. Necesitaba validar que el registro de asistencia y la consulta de su agenda fueran tareas que pudiera realizar en segundos, sin distraerse de su labor docente.

#### La apuesta por la alta fidelidad

Tomé la decisión técnica de realizar estas pruebas utilizando **prototipos de alta fidelidad** con la UI finalizada. Aunque esto implicó un esfuerzo extra de preparación en Figma, era necesario para que el usuario no tuviera que "imaginar" nada.

En fases anteriores, los wireframes de media fidelidad nos sirvieron para validar la estructura, pero en esta etapa de cierre, necesitaba reacciones viscerales ante la experiencia casi final. El prototipo debía ser lo suficientemente inmersivo para que Carlos sintiera la presión de cargar una plantilla real y para que Elena viera su agenda de cursos tal como aparecería en producción. Esta decisión nos permitió evaluar interacciones detalladas y la respuesta emocional ante la marca Gentera, algo que los esquemas en blanco y negro simplemente no permiten.

Cada flujo, desde la carga de un archivo .xls hasta la visualización de un reporte de avance por subdirección, fue construido para ser totalmente interactivo. Mi objetivo era reducir al mínimo la distancia entre el simulacro y la realidad, asegurando que cada hallazgo fuera una pieza de información accionable para la iteración final. Al final del día, estas pruebas son el corazón de nuestro proceso: una oportunidad de fallar rápido y barato en el diseño, para tener éxito absoluto en el desarrollo.


Teníamos definidos los objetivos y sabíamos exactamente a quiénes íbamos a observar, pero entonces surgió la verdadera tensión técnica: ¿cómo íbamos a medir el éxito o el fracaso de forma objetiva? Sabía que si no construía un guion de moderación quirúrgico y escenarios de prueba realistas, corríamos el riesgo de sesgar a los usuarios y obtener respuestas complacientes en lugar de críticas constructivas. El siguiente desafío era diseñar el instrumento de medición que separaría las opiniones del comportamiento real: 'EL GUION DE LA VERDAD: PLANIFICACIÓN Y ESCENARIOS'.

### Parte 2: El Guion de la Verdad Planificación y Escenarios

#### Del diseño estático al rigor metodológico: La construcción del instrumento

Teníamos los prototipos de alta fidelidad terminados, pero sentía una presión sorda en la boca del estómago: un prototipo sin un plan de validación riguroso es solo una promesa vacía. Sabía que si no construía un marco de referencia científico para las sesiones, las opiniones subjetivas de los usuarios —"me gusta el azul", "se ve moderno"— terminarían por sepultar los hallazgos de usabilidad que realmente importaban. Mi razonamiento era claro: necesitaba transformar mis hipótesis de diseño en un instrumento de medición quirúrgico. No podíamos permitirnos el lujo de ir a una sesión con Carlos o Elena simplemente a "ver qué pasaba".

Articulé lo que llamé el **Plan de Pruebas Detallado v1.0**. Mi objetivo no era solo identificar errores de clic, sino validar si la arquitectura que habíamos propuesto era capaz de soportar la complejidad operativa de Gentera. Me enfrentaba a una tensión técnica fundamental: ¿cómo medir la eficiencia de un flujo de automatización sin sesgar al usuario? Para resolverlo, decidí que el plan debía ser la "biblia" de ejecución. No se trataba de un documento de apoyo, sino de un protocolo que garantizara que cada una de las 15 o 20 sesiones que planeábamos realizar fuera comparable entre sí. Si no estandarizaba el proceso desde el primer minuto, el análisis posterior de los datos sería un ejercicio de adivinación, no de diseño de producto.

#### Arquitectura de validación: Blindando las reglas de negocio

Al estructurar el plan, me alejé de las pruebas de usabilidad genéricas. Mi enfoque se centró en blindar las reglas de negocio que habíamos integrado en la interfaz. Por ejemplo, en el módulo de Carlos, la plataforma debía manejar situaciones críticas como la re-subida de plantillas de capacitación o la visibilidad en tiempo real de la disponibilidad de los formadores. Si el usuario no entendía por qué el sistema rechazaba un archivo o por qué un formador aparecía "bloqueado", el diseño habría fallado en su misión principal: reducir la carga cognitiva.

Definí objetivos específicos que iban más allá de la simple navegación. Quería evaluar la claridad visual bajo el sistema de diseño de Gentera, pero también asegurar que la terminología —palabras como "segmentación", "hito de jornada" o "kardex"— fuera la correcta para el contexto cultural de la empresa. Me aseguré de que el plan incluyera una revisión exhaustiva de cómo la interfaz comunicaba el estado de los procesos masivos. No buscaba una validación estética; buscaba confirmar que la implementación de las reglas de negocio fuera comprensible y, sobre todo, funcional desde la perspectiva de quien tiene la presión de cumplir con metas de capacitación semanales.

#### Escenarios de alta tensión: El teatro de la usabilidad

La parte más compleja fue el diseño de los escenarios. Siguiendo un criterio de neutralidad absoluta, redacté tareas que ponían a prueba la resiliencia del diseño sin guiar al usuario. Para **Carlos, el Coordinador Detallista**, diseñé un escenario de alta carga operativa: acababa de recibir la plantilla semanal de ADN y su tarea era cargarla, identificar inconsistencias en el resumen del procesamiento y, lo más difícil, ajustar manualmente grupos que no cumplían con el cupo mínimo mediante una interacción de "arrastrar y soltar". Quería observar si la metáfora visual del ajuste de grupos era lo suficientemente intuitiva para alguien que suele resolver esto en hojas de cálculo infinitas.

Para los otros perfiles, el nivel de detalle fue igual de obsesivo:

*   **Ana (Colaboradora):** El escenario se centraba en la trazabilidad. Su tarea era encontrar su ruta de capacitación, identificar su próximo curso y realizar la acción crítica de agregarlo a su calendario personal mediante un archivo .ical. Aquí el riesgo era la jerarquía de información: ¿podría Ana distinguir entre lo que ya tomó y lo que tiene pendiente sin sentirse abrumada?
*   **David (Líder de Oficina):** Diseñé una tarea de "drill-down". David necesitaba identificar rápidamente a los colaboradores retrasados en su oficina y acceder al detalle de uno de ellos para entender la causa. El éxito aquí se medía en la velocidad de diagnóstico; si David tardaba más de un minuto en encontrar al colaborador en riesgo, el dashboard no estaba cumpliendo su propósito estratégico.
*   **Elena (Formadora):** Su escenario era puramente transaccional. Debía registrar la asistencia de una sesión ya impartida y añadir comentarios cualitativos sobre el grupo. Aquí la tensión radicaba en la facilidad de entrada de datos: ¿era el formulario lo suficientemente ágil para una formadora que tiene que repetir este proceso diez veces al día?

#### El sistema de métricas híbrido: Cuantificando lo intangible

Para que los resultados tuvieran peso ante los stakeholders, implementé un sistema de métricas híbrido. Por el lado cualitativo, aposté por el protocolo **Think-Aloud (Pensar en voz alta)**. Necesitaba capturar no solo lo que hacían, sino lo que sentían. Cada suspiro de frustración o cada expresión de alivio al encontrar un botón era un dato valioso que el software de grabación no capturaría por sí solo. Este método me permitiría entender el modelo mental del usuario y detectar dónde la carga cognitiva superaba la capacidad de la interfaz.

Sin embargo, como diseñador senior, sé que los datos cualitativos a veces no son suficientes para convencer a una dirección financiera. Por eso, integré dos métricas cuantitativas de estándar industrial:

1.  **Single Ease Question (SEQ):** Al finalizar cada tarea, le pediría al usuario calificar la dificultad en una escala de 1 a 7. Esto me daría un mapa de calor inmediato de qué flujos eran los más problemáticos.
2.  **System Usability Scale (SUS):** Al cierre de la sesión, aplicaríamos este cuestionario de 10 ítems para obtener una medida global de la usabilidad percibida.

Este enfoque forense me permitiría decir, con datos en la mano, si el problema era un botón mal ubicado o una falla estructural en la lógica del proceso. Estaba contabilizando cada clic erróneo y cada segundo de duda como una oportunidad de mejora antes de que se escribiera una sola línea de código.

#### La coreografía del guion de moderación

Finalmente, diseñé la coreografía de la sesión a través de un guion de moderación quirúrgico. La estructura estaba calculada para eliminar cualquier sesgo de confirmación. Los primeros 5 minutos eran vitales para construir "rapport": debía convencer al usuario de que yo no era el "dueño" del diseño y que su crítica era mi mayor activo. "Estamos probando el diseño, no a ti", era el mantra que repetía para bajar las defensas del participante.

El guion incluía "probes" o sondeos neutrales cuidadosamente redactados. Si un usuario se quedaba mirando la pantalla sin hacer nada, yo no podía decirle "haz clic ahí". Mi intervención debía ser mínima y estratégica: "¿Qué estás pensando en este momento?" o "¿Qué esperabas que sucediera al presionar ese botón?". Esta disciplina de moderación es lo que separa una entrevista de café de una prueba de usabilidad profesional. El entorno estaba listo: el prototipo en Figma configurado, las grabaciones en Google Meets preparadas y el guion impreso. Solo faltaba que los usuarios entraran a la sala para que la realidad pusiera a prueba mi trabajo.

> La validez de una prueba de usabilidad no reside en la sofisticación del prototipo, sino en la neutralidad del moderador. Si el guion guía al usuario, los datos resultantes son solo un eco de los propios sesgos del diseñador.


El plan estaba blindado y los escenarios listos, pero la teoría siempre choca con la realidad en la primera sesión. Al enviar las invitaciones a Carlos y los primeros líderes de oficina, sabía que estaba a punto de abrir una caja de Pandora: por muy perfecto que pareciera el flujo de "arrastrar y soltar" en mi cabeza, la verdadera prueba de fuego comenzaría en el momento exacto en que el primer usuario se enfrentara al silencio de la interfaz sin mi ayuda. Estábamos a un clic de descubrir si nuestra solución de automatización era la herramienta que Gentera necesitaba o si habíamos construido un sistema demasiado complejo para el ritmo de la operación real.

### Parte 3: La Prueba de Fuego Ejecución y Hallazgos Iniciales

#### El silencio antes del primer clic

Había pasado semanas refinando cada píxel y cada microinteracción en Figma, pero al abrir la primera sesión de Google Meet, sentí esa tensión familiar que solo aparece cuando estás a punto de enfrentar tu trabajo a la realidad. Tenía frente a mí a 13 participantes seleccionados quirúrgicamente para cubrir cada rincón del ecosistema GAC: un administrador, cuatro colaboradores, cuatro líderes de equipo y cuatro formadores. Mi razonamiento era simple: no podíamos permitirnos un sesgo de "ruta feliz". Necesitaba ver cómo la plataforma sobrevivía al ritmo de la operación real de Gentera, donde el tiempo es el recurso más escaso.

En ese momento, mi prioridad no era que el prototipo funcionara —sabía que lo hacía—, sino validar si la arquitectura de información y la lógica de automatización que habíamos diseñado eran realmente intuitivas o si solo eran un reflejo de mis propias hipótesis. Estábamos pasando de la fase del "yo creo" a la del "el usuario hace". Como responsable del diseño, mi papel mutó de arquitecto a observador neutral; debía resistir la tentación de guiar al usuario y, en su lugar, dejar que la interfaz hablara por sí misma.

#### El despliegue del laboratorio: Metodología en la trinchera

Para asegurar que los datos fueran accionables y no meras anécdotas, configuré un entorno de prueba riguroso utilizando el prototipo de alta fidelidad. No quería que los usuarios evaluaran "dibujos", quería que sintieran que estaban operando la herramienta final. Utilicé Google Meet y herramientas de captura para registrar no solo la navegación, sino las expresiones no verbales y las vacilaciones.

Ejecuté el protocolo de "Pensar en voz alta" (*Think-aloud*) con una disciplina férrea. Mi intervención se limitaba a preguntas neutrales como "¿Qué esperabas que sucediera aquí?" o "¿Qué estás procesando en este momento?". Este rigor metodológico fue vital para capturar lo que las métricas cuantitativas suelen omitir: el micro-momento de duda antes de que un usuario decida si presiona un botón o si el lenguaje de una etiqueta le resulta ajeno a su día a día en Gentera.

> La validez de una prueba de usabilidad no reside en la perfección del prototipo, sino en la capacidad del diseñador para desaparecer y dejar que la fricción de la interfaz emerja de forma natural.

#### El ritual del rapport: Blindando la honestidad

Antes de lanzar el primer escenario, dediqué los primeros diez minutos de cada sesión a construir un *rapport* genuino. En Gentera, el valor "Centrado en la Persona" no es solo un eslogan, y quise que se reflejara en el trato con los colaboradores. Fui muy enfático en un punto crítico: "Estamos probando el diseño, no a ti. Si algo no funciona, es un error del sistema, no tuyo". 

Este paso, que a veces se omite por prisas, es el que garantiza la transparencia del feedback. Un usuario que se siente evaluado tiende a ser complaciente; un usuario que se siente co-creador es brutalmente honesto. Tras obtener el consentimiento para grabar y explicar la importancia de verbalizar sus pensamientos, establecí el contexto operativo. Necesitaba que Carlos, Ana o David no solo hicieran clic, sino que se proyectaran en su jornada laboral habitual mientras interactuaban con GAC.

#### La "Automatización Salvadora": El impacto en la operación

La sesión con Carlos, el administrador de capacitación, fue reveladora. Lo observé mientras enfrentaba la tarea de cargar la plantilla de capacitación y segmentar los grupos. Cuando el sistema procesó la información y le presentó las alertas de cupo y las sugerencias de segmentación automática, hubo un cambio visible en su lenguaje corporal. Su reacción fue lo que internamente llamé la "Automatización Salvadora". 

Carlos expresó un alivio literal; describió cómo el sistema le quitaba un "peso enorme de encima" al gestionar en segundos lo que antes le tomaba horas de cruces manuales en Excel. Verlo completar el envío masivo de invitaciones con un par de clics validó nuestra decisión de invertir tanto tiempo en la lógica de *backend* reflejada en la interfaz. El ahorro de tiempo no era solo una métrica de eficiencia, era una mejora en su calidad de vida laboral.

#### El mapa de ruta y el lenguaje de los datos

Con Ana y el resto de los colaboradores, el éxito rotundo fue el "Mapa Visual de Mi Ruta". Observé cómo navegaban por la línea de tiempo de su capacitación con una fluidez que no requirió ninguna explicación previa. El uso de iconos claros y la posibilidad de descargar el agendamiento directamente en un archivo .ical para su calendario de Outlook fueron los puntos de mayor deleite. Ana mencionó que, por primera vez, sentía que tenía el control total de su crecimiento profesional sin tener que perseguir a su líder para pedir información.

Por otro lado, David y los líderes de equipo se centraron en el Dashboard. El uso de semáforos y códigos de color para identificar el progreso del equipo fue calificado como "oro puro". David destacó que la capacidad de detectar a colaboradores en riesgo de atraso antes de que fuera demasiado tarde le permitía intervenir de forma proactiva, no reactiva. Estas no eran solo funciones; eran herramientas de gestión que hablaban el lenguaje de las necesidades reales de la operación de Gentera.

#### El rigor de los números y la realidad de las grietas

Al finalizar las 13 sesiones, los datos cuantitativos respaldaron las sensaciones cualitativas. Logramos una **tasa de éxito del 100%** en las tareas críticas, un resultado que, aunque satisfactorio, no me hizo bajar la guardia. El **SEQ (Single Ease Question)** promedio fue de **6.5/7**, lo que indica una facilidad de uso excepcional, y el **SUS (System Usability Scale)** alcanzó un sólido **85/100**, situando a la plataforma en un rango de usabilidad excelente.

Sin embargo, el verdadero valor de estas pruebas apareció en las grietas. A pesar del éxito general, identifiqué fricciones que no podíamos ignorar:
*   **US-001 (Severidad Media):** Carlos intentó corregir una inconsistencia menor en un nombre directamente en la tabla de pre-visualización y descubrió que el sistema no se lo permitía, obligándolo a volver al paso anterior.
*   **US-002 (Severidad Media):** La visibilidad de los formadores durante la segmentación no era lo suficientemente clara; Carlos necesitaba saber quién estaba disponible antes de confirmar el grupo, no después.
*   **US-003 (Severidad Baja):** Surgió un deseo recurrente de personalizar el texto de las comunicaciones más allá de los campos dinámicos que habíamos previsto.

Estas fricciones, aunque no impidieron completar las tareas, representaban la diferencia entre un producto funcional y uno extraordinario. Mi análisis en ese momento fue que habíamos blindado la estructura, pero aún debíamos pulir la flexibilidad del sistema para adaptarse a la intuición humana.


Al cerrar la última sesión y revisar el mural de notas y grabaciones, me di cuenta de que teníamos un diamante en bruto: la estructura era sólida, pero las "grietas" de usabilidad detectadas en Carlos y los líderes no eran simples detalles estéticos, sino señales de una rigidez que podría comprometer la adopción a largo plazo. Sabía que el siguiente paso no era simplemente "arreglar botones", sino realizar un **DIAGNÓSTICO FORENSE: ANÁLISIS DE PROBLEMAS Y SEVERIDAD** para decidir qué batallas pelear antes de entregar el diseño final a ingeniería. La pregunta que me quitaba el sueño era: ¿cuántas de estas fricciones eran fallos de diseño y cuántas eran necesidades de negocio que no habíamos mapeado correctamente?

### Parte 4: Diagnóstico Forense Análisis de Problemas y Severidad

#### El silencio tras la observación: de la anécdota al dato técnico

Cuando apagué la grabadora tras la última sesión con Elena, la formadora, el ambiente en mi espacio de trabajo cambió por completo. Tenía frente a mí horas de video, transcripciones de protocolos de "pensar en voz alta" y una pared (física y digital) llena de notas adhesivas con observaciones crudas. En ese momento, mi responsabilidad no era simplemente enlistar lo que los usuarios "dijeron", sino ejecutar un **diagnóstico forense** capaz de separar el ruido de la señal. Como diseñador, sé que el feedback de un usuario es una brújula, pero el análisis de severidad es el mapa que decide si el barco llega a puerto o se hunde en detalles irrelevantes.

Me sumergí en un análisis profundo de las grabaciones, no buscando errores de los usuarios —porque el usuario nunca se equivoca—, sino identificando las grietas en mi propia arquitectura. Mi razonamiento fue pragmático: debíamos pasar de la anécdota individual ("A Carlos le costó encontrar esto") a la métrica de severidad técnica que permitiera al equipo de desarrollo priorizar el backlog. No podíamos permitir que la subjetividad dictara los próximos pasos; necesitaba un sistema riguroso para clasificar la fricción y entender qué batallas valía la pena pelear antes de la entrega final.

#### El vaciado forense: mapeando las 9 grietas del sistema

Inicié el proceso con un vaciado exhaustivo de cada incidencia detectada durante las tareas críticas: la carga de la plantilla, la segmentación de grupos y la consulta de la ruta personal. No dejé fuera ningún detalle, por pequeño que pareciera. Al tabular los hallazgos, identifiqué **9 problemas de usabilidad específicos** que se repetían con una frecuencia preocupante o que, aunque ocurrieran una sola vez, revelaban una falla lógica en el flujo.

Este mapeo no fue una simple lista, sino una disección de la interacción. Documenté cada problema con su causa raíz probable, desde etiquetas confusas hasta flujos que obligaban al usuario a dar rodeos innecesarios. Esta clasificación fue vital para mantener la objetividad; sin ella, corres el riesgo de priorizar lo que "suena más fuerte" en lugar de lo que realmente compromete la adopción de la plataforma GAC.

> **Insight de Diseño:** La verdadera madurez de un producto no se mide por la ausencia de errores en las pruebas, sino por la capacidad del diseñador para diagnosticar por qué ocurrieron y qué impacto real tienen en el negocio antes de tocar una sola línea de código.

#### Criterios de severidad: priorizando el impacto sobre el ego

Para dar orden al caos, apliqué un marco de trabajo basado en tres variables críticas: **Frecuencia** (cuántos usuarios lo vivieron), **Impacto** (qué tanto impidió completar la tarea) y **Persistencia** (si el usuario aprendía a resolverlo solo o seguía fallando). Bajo este lente, la jerarquía de los hallazgos quedó clara:

*   **Severidad Media (US-001 y US-002):** Clasifiqué aquí la "Claridad en Corrección de Inconsistencias" y la "Visibilidad de Formadores en Segmentación". Aunque Carlos pudo terminar sus tareas, la carga cognitiva fue alta. Descubrí que el sistema era demasiado rígido; obligar a un administrador a re-subir una plantilla completa por un error menor en un nombre es una fricción que, multiplicada por cientos de registros semanales, se convierte en un rechazo a la herramienta.
*   **Severidad Baja (US-003 al US-009):** Aquí agrupé las oportunidades de refinamiento. Desde el deseo de personalizar comunicaciones (US-003) hasta la sincronización con Outlook (US-009) o la adición de notas por participante (US-008). Estos puntos no bloqueaban el éxito de la tarea, pero representaban la diferencia entre una herramienta funcional y una que genera "delicia" en el usuario.

Decidí ser implacable con los problemas de severidad media. Si no resolvíamos la autonomía de Carlos para editar datos *inline*, la promesa de "automatización" de Gentera se sentiría como una nueva carga administrativa en lugar de un alivio.

#### Diagnóstico de la causa raíz y la brecha semántica

Al profundizar en el "porqué" de los fallos, identifiqué dos patrones estructurales que no habíamos previsto en los wireframes iniciales. El primero fue un **fallo en el feedback loop** de Carlos. El administrador buscaba un control quirúrgico sobre los datos; su frustración nacía de no recibir señales claras de que podía intervenir el sistema sin romper la lógica de automatización. Necesitaba sentir que él seguía siendo el director de orquesta, no un simple espectador del algoritmo de segmentación.

El segundo hallazgo crítico fue una **brecha semántica** en el flujo de los colaboradores. Ana, a pesar de su entusiasmo, se detuvo en seco ante el término "Toques con Formador". Para nosotros, en las reuniones de negocio, el término era estándar, pero para el usuario final era una etiqueta ambigua que generaba incertidumbre sobre qué implicaba esa interacción. Esta desconexión entre el lenguaje del negocio y el modelo mental del usuario es un riesgo clásico en proyectos de transformación digital que debía ser mitigado de inmediato.

#### Recomendaciones técnicas: del diagnóstico a la solución

Con el diagnóstico en mano, tracé las recomendaciones de diseño que guiarían la iteración. No se trataba de "hacerlo más bonito", sino de blindar la funcionalidad:

*   **Para el Administrador (Carlos):** Propuse implementar una interfaz de **edición directa (inline editing)** en los reportes de inconsistencias. Esto permitiría corregir errores tipográficos o de formato sin salir de la pantalla actual. Además, diseñé la integración de un panel lateral de disponibilidad en el flujo de segmentación, permitiendo que Carlos viera quién estaba libre antes de confirmar un grupo, eliminando el "ensayo y error".
*   **Para el Colaborador (Ana):** La solución fue la contextualización inmediata. Diseñé el uso de **tooltips informativos** y modales de contexto para cada nodo en el mapa de ruta. Si el sistema mencionaba un "Toque con Formador", un simple hover explicaría exactamente qué esperar de esa sesión, eliminando la ansiedad por lo desconocido.
*   **Para el Líder y Formador (David y Elena):** Recomendé añadir campos de "Notas del Participante" en el registro de asistencia y explorar gráficos de benchmark para comparar el avance del equipo contra el promedio de la empresa, atendiendo directamente a sus necesidades de gestión estratégica.

#### La validación cuantitativa: el veredicto de los números

A pesar de los puntos de fricción detectados, las métricas finales confirmaron que la estructura base de GAC era excepcionalmente sólida. No me basé solo en mis notas, sino en el análisis estadístico de las sesiones:

*   **Single Ease Question (SEQ):** Carlos calificó la facilidad de las tareas con un **6.5/7**, mientras que Ana otorgó un **6.8/7**. Estos números indicaban que, a pesar de las pequeñas dudas semánticas, el flujo principal era extremadamente intuitivo.
*   **System Usability Scale (SUS):** Obtuvimos un puntaje global de **85/100**. En los estándares de la industria, esto sitúa a la plataforma en el rango de "Excelente". 

Este 85 es un triunfo, pero como diseñador senior, lo veo con cautela. Un SUS alto puede ocultar deudas técnicas que explotan en producción si no se atienden esos 9 problemas de usabilidad identificados. El éxito no era el número, sino tener ahora la hoja de ruta clara para convertir ese 85 en una adopción del 100% por parte de los colaboradores de Gentera.


Al terminar este diagnóstico, me di cuenta de que teníamos la aprobación técnica, pero nos faltaba la bendición final de la realidad operativa. Aunque los números eran excelentes, las dudas de Carlos sobre el control de los datos y la confusión semántica de Ana me dejaron una inquietud: ¿serían nuestras soluciones de diseño suficientes para satisfacer las expectativas de Lalo y Carlos en la mesa de decisión final? El siguiente reto era transformar estas recomendaciones en una realidad visual y funcional en lo que sería el ciclo de refinamiento: iteración y segunda validación.

### Parte 5: El Ciclo de Refinamiento Iteración y Segunda Validación

#### El peso de los hallazgos: De la detección a la resolución estratégica

Tener una lista de nueve problemas de usabilidad priorizados en mi escritorio no era una señal de fracaso, sino una hoja de ruta de supervivencia. Tras cerrar el diagnóstico de la primera ronda, me enfrenté a esa tensión silenciosa que define el oficio: la presión de no solo "maquillar" la interfaz, sino de rediseñar la lógica subyacente para que fuera operativamente superior. Sabía que si no resolvía la fricción de Carlos con las inconsistencias de datos o la desorientación de Ana en su ruta de capacitación, la plataforma GAC nacería muerta por falta de adopción.

Mi razonamiento en este punto de inflexión fue pragmático. No buscaba una estética más pulida; buscaba eliminar el ruido cognitivo que los usuarios habían señalado con tanta claridad. La transición del "qué está mal" al "cómo lo resolvemos" exigía un ciclo de refinamiento cerrado, donde cada píxel movido tuviera una justificación técnica y de negocio. No podíamos permitirnos iterar por intuición; cada cambio debía ser una respuesta directa a una cita de usuario o a una métrica de abandono.

#### El Taller de Priorización: Negociando la viabilidad en la trinchera

Para asegurar que nuestras soluciones no fueran castillos en el aire, convoqué a una sesión de cuatro horas con el Líder Técnico y el equipo de desarrollo. Mi objetivo era blindar la factibilidad de cada mejora antes de tocar Figma. Revisamos el informe de usabilidad punto por punto, poniendo especial énfasis en las frustraciones de Carlos. 

Uno de los momentos de mayor tensión ocurrió al discutir la **US-009: Sincronización de Calendario para Formadores**. El equipo de desarrollo planteó inicialmente una sincronización automática bidireccional, pero tras analizar el esfuerzo y la complejidad de las APIs de Gentera, identifiqué un riesgo de retraso en el *delivery*. 

> **Decisión de Trade-off:** Opté por proponer una exportación iCal y opciones de "Añadir a Calendario" por curso. Sabía que sacrificaba la automatización total, pero ganábamos una solución inmediata, funcional y técnicamente ligera que resolvía la necesidad de Elena de organizar su agenda sin comprometer el sprint de desarrollo.

Realizamos un brainstorming intensivo para cada uno de los problemas (US-001 a US-009). Evaluamos cada propuesta bajo tres lentes: impacto en la experiencia del usuario (UX), factibilidad técnica y estimación de esfuerzo. Al final de la sesión, no solo teníamos una lista de tareas, sino un compromiso unificado entre diseño y tecnología sobre qué íbamos a construir y por qué.

#### Cirugía de diseño: Refinando el prototipo de alta fidelidad

Con los acuerdos técnicos en la mano, regresé a Figma para ejecutar lo que llamo "cirugía de diseño". Mi enfoque fue quirúrgico: actualizar los prototipos de alta fidelidad para que cada interacción respondiera a los dolores detectados.

*   **Para Carlos (US-001 y US-002):** Diseñé una interfaz de **edición en línea** dentro del "Reporte Detallado de Inconsistencias". Ahora, en lugar de tener que descargar, corregir y volver a subir todo, Carlos podía hacer clic directamente en una celda de la tabla para corregir un dato erróneo. Para la segmentación, integré un panel lateral expandible que mostraba la disponibilidad y carga de los formadores en tiempo real. Esta visibilidad le permitía asignar recursos sin salir del flujo de creación de grupos.
*   **Para Ana (US-004 y US-005):** Ataqué la confusión semántica sobre los "Toques con Formador". Implementé tooltips informativos y modales descriptivos en el mapa visual de su ruta. Al pasar el cursor sobre un hito, Ana ahora recibía una explicación clara de qué implicaba esa sesión y cuál era su propósito pedagógico. Además, articulé una sección de **Preguntas Frecuentes (FAQs)** accesible desde el menú lateral para resolver dudas sin necesidad de soporte humano.
*   **Para David y Elena (US-006 a US-008):** Introduje un gráfico comparativo en el dashboard de líderes que permitía a David ver el avance de su equipo frente al promedio de la subdirección, dándole el benchmark que tanto pedía. Para Elena, añadí un campo de "Notas del Participante" en el registro de asistencia, permitiéndole capturar observaciones cualitativas durante la capacitación.

Actualicé también la librería de componentes y las anotaciones detalladas para asegurar que, cuando estos diseños llegaran a manos de los desarrolladores, no hubiera espacio para interpretaciones erróneas sobre el nuevo comportamiento de las variables dinámicas en las plantillas de comunicación.

#### El reclutamiento estratégico: Por qué repetimos con los mismos 13

Para la segunda ronda de validación, tomé una decisión metodológica deliberada: reclutar exactamente a los mismos 13 participantes de la primera fase (1 Administrador, 4 Colaboradores, 4 Líderes y 4 Formadores). Mi razonamiento era simple: necesitaba medir el **delta de mejora**. Quería ver si Carlos, quien se había sentido frustrado con la corrección de errores, ahora experimentaba alivio. 

Preparé un guion de moderación adaptado. Esta vez no buscábamos exploración abierta, sino una validación dirigida. Los escenarios de prueba fueron idénticos a los de la primera ronda para asegurar la consistencia del experimento, pero con un enfoque láser en las áreas donde implementamos las soluciones US-001 a US-009. Configuramos el entorno de prueba para que los usuarios se enfrentaran a los mismos retos de segmentación y consulta de ruta, pero utilizando el prototipo refinado.

#### El momento de la verdad: Validación y alivio operativo

La ejecución de esta segunda ronda fue el testimonio de que el proceso iterativo funciona. Observar a Carlos interactuar con la nueva edición en línea fue revelador; su comentario de que la interfaz era ahora "súper práctica" y "mucho más rápida" validó horas de discusión técnica. Ya no había dudas en su mirada al corregir inconsistencias.

Ana, por su parte, navegó el mapa de ruta con una confianza que no tenía antes. Los modales descriptivos eliminaron por completo las preguntas sobre los "Toques con Formador". "Ahora sí sé qué es un toque con formador, ¡muy claro!", fue la reacción del segundo participante, confirmando que habíamos despejado la niebla semántica. David utilizó el gráfico comparativo de avance para contextualizar el desempeño de su equipo de inmediato, cerrando la brecha de información que habíamos identificado como crítica para su rol de liderazgo.

#### El veredicto de los números: De la intuición a la evidencia forense

Al consolidar las métricas finales, los datos hablaron con una claridad contundente. No solo habíamos resuelto los problemas, sino que habíamos elevado el estándar de la plataforma a niveles de excelencia:

*   **Tasa de Éxito en Tareas Críticas:** Alcanzamos un **100%** de éxito en todos los roles. Nadie se quedó atascado, nadie necesitó ayuda externa para completar la segmentación o el registro de asistencia.
*   **Eficiencia Temporal:** Registramos una reducción promedio del **20-30% en el tiempo en tarea** para procesos complejos. La corrección de errores y la asignación de formadores pasaron de ser procesos tediosos a acciones fluidas de pocos clics.
*   **Satisfacción Percibida (SEQ):** Carlos calificó la facilidad de las tareas con un **7/7**, y el promedio general entre todos los roles se mantuvo en un impresionante **6.9/7**.
*   **System Usability Scale (SUS):** Logramos un salto cualitativo, pasando de un SUS de 85 a un **90/100**. 

Este 90 no es solo un número para el portafolio; es la prueba forense de que GAC es ahora una herramienta de eficiencia real para Gentera. Hemos transformado la incertidumbre inicial en una confianza absoluta. El diseño ya no es una propuesta; es una solución validada, optimizada y lista para ser traducida a código de producción.


#### El veredicto final: Accesibilidad y alineación

Con el prototipo validado y las métricas en niveles récord, parecía que el trabajo estaba terminado, pero como diseñador senior sé que un SUS de 90 no garantiza la inclusión de todos los colaboradores de Gentera. Me quedaba una pregunta incómoda: ¿qué pasaría si un colaborador con discapacidad visual intentara navegar esta ruta de capacitación tan visualmente densa? El siguiente desafío era someter esta interfaz a una auditoría de accesibilidad WCAG 2.1 AA y, finalmente, presentar el veredicto definitivo ante Lalo y Carlos para obtener la luz verde final que pondría en marcha la maquinaria de desarrollo.

### Parte 6: El Verdicto Final Accesibilidad y Alineación

Haber alcanzado un SUS de 90 era una victoria rotunda, pero también una trampa de autocomplacencia en la que decidí no caer. En mi experiencia, un puntaje de usabilidad sobresaliente no garantiza que el producto sea democrático. Me inquietaba una pregunta que el SUS no siempre responde con total honestidad: ¿qué sucede cuando un colaborador de Gentera con baja visión o una discapacidad motora intenta navegar por la densidad de datos de GAC? Como responsable del diseño, sabía que la excelencia no estaba completa si la herramienta no era inclusiva. La plataforma debía ser un motor de eficiencia para todos, sin excepciones. Por ello, antes de considerar el diseño como "terminado", impuse una fase de escrutinio técnico riguroso: la auditoría de accesibilidad bajo el estándar internacional **WCAG 2.1 Nivel AA**.

#### La auditoría forense bajo el estándar WCAG 2.1 AA

No abordé la accesibilidad como una lista de verificación de último minuto, sino como un proceso de ingeniería inversa sobre mis propios prototipos de alta fidelidad. Mi marco de trabajo fueron los principios **POUR** (Perceptible, Operable, Comprensible y Robusto), los pilares que dictan si una interfaz es realmente accesible. Mi razonamiento estratégico fue claro: integrar la accesibilidad en esta etapa reduciría drásticamente la deuda técnica y los costos de remediación en el desarrollo futuro.

Inicié con un barrido automatizado utilizando herramientas como **WAVE** y **axe DevTools** directamente sobre las maquetas. Esto me permitió identificar de forma rápida errores de contraste cromático y omisiones en la jerarquía de encabezados. Sin embargo, las herramientas automáticas tienen un límite; la verdadera accesibilidad se siente en la interacción manual. Por eso, dediqué jornadas enteras a navegar la plataforma GAC utilizando únicamente el teclado (**Tab, Enter, Espacio**).

*   **Navegación con teclado:** Verifiqué que el orden de tabulación siguiera un flujo lógico y predecible, evitando "trampas de teclado" donde el foco pudiera quedar atrapado.
*   **Pruebas de Zoom al 200%:** Forcé la interfaz en el navegador para asegurar que, al aumentar el tamaño del texto para usuarios con debilidad visual, los contenedores no se encimaran y la información siguiera siendo legible y operable.
*   **Contraste de Color:** Utilicé validadores para asegurar que cada etiqueta, botón y gráfico de los dashboards cumpliera con el ratio de contraste mínimo de **4.5:1** para texto normal y **3:1** para componentes visuales grandes.

Para llevar la prueba al nivel de realidad que Gentera exige, activé el lector de pantalla **NVDA**. Cerré los ojos y traté de completar el flujo de "Asignación de Formadores" guiándome solo por la voz sintética. Fue un ejercicio de humildad profesional que me permitió detectar fricciones invisibles para quienes vemos la pantalla, pero críticas para quienes la escuchan.

#### Diagnóstico y cirugía fina: Los hallazgos de accesibilidad

La auditoría no fue en vano. Identifiqué tres hallazgos específicos que, aunque de severidad baja para un usuario promedio, representaban barreras reales para la inclusión. Los documenté con precisión forense para asegurar su resolución inmediata.

El primer hallazgo, que denominé **ACC-001**, se centraba en el **Foco Visible**. Aunque el indicador de foco existía, descubrí que en las tablas de datos —donde la densidad de información es máxima— el contorno no era lo suficientemente prominente para usuarios con baja visión. Mi decisión fue rediseñar el estado de *focus* de los enlaces, aumentando el grosor del contorno y mejorando su contraste, asegurando que cualquier colaborador supiera exactamente dónde estaba posicionado sin esfuerzo cognitivo adicional.

Posteriormente, abordé el hallazgo **ACC-002**, relacionado con el **Contenido No Textual**. Detecté que algunos iconos decorativos de fondo no tenían el atributo `alt=""` correctamente especificado. Sin esta instrucción, los lectores de pantalla intentan leer el nombre del archivo o una descripción genérica, generando "ruido" innecesario en la experiencia auditiva. Instruí que estas imágenes fueran marcadas explícitamente como decorativas para que las tecnologías de asistencia las ignoren, limpiando el flujo de lectura.

El hallazgo más crítico desde el punto de vista funcional fue el **ACC-003: Propósito de los Enlaces**. En las tablas de seguimiento, teníamos múltiples botones que decían simplemente "Ver Detalle". Para un usuario visual, el contexto de la fila le indica a qué colaborador se refiere; para un usuario de lector de pantalla que navega por una lista de enlaces, escuchar "Ver Detalle" diez veces seguidas es inútil. 

> **La Maniobra Senior:** Decidí implementar **aria-labels** en estos botones. De esta forma, el software de asistencia ahora vocaliza: *"Ver detalle del colaborador Juan Pérez"*. Transformé una etiqueta genérica en una instrucción contextual precisa, eliminando la ambigüedad y empoderando al usuario con discapacidad visual para operar con la misma velocidad que cualquier otro.

#### El cónclave definitivo: Alineación con Lalo y Carlos

Con los ajustes de accesibilidad integrados y el informe de resultados en mano, convoqué a la sesión de validación final con los stakeholders clave: **Lalo (Líder de Proyecto)** y **Carlos (Administrador de Capacitación)**. Esta no fue una reunión de presentación, sino un ejercicio de rendición de cuentas estratégico. Mi objetivo era demostrar que el producto no solo cumplía con los KPIs de negocio, sino que estaba blindado técnica y éticamente.

Preparé la agenda para llevarlos por un viaje de validación:
1.  **Evidencia de Usabilidad:** Comencé presentando los hallazgos positivos de las pruebas con usuarios reales. Usé citas directas de los colaboradores que habían probado el prototipo, lo que generó una conexión inmediata y validó que estábamos resolviendo dolores reales de la operación de Gentera.
2.  **Técnica "Antes vs. Después":** Para cada cambio significativo que realicé tras las pruebas, mostré visualmente la evolución. *"Aquí es donde los usuarios se confundían con la carga de plantillas; este es el nuevo flujo que redujo el error en un 30%"*. Esta transparencia construyó una confianza absoluta en el proceso de diseño.
3.  **El Valor de la Inclusión:** Presenté el informe de accesibilidad no como un requisito legal, sino como una capa de calidad industrial. Expliqué cómo las mejoras en el foco y las etiquetas ARIA protegían la inversión de Gentera a largo plazo, asegurando una plataforma robusta y escalable.

Durante la sesión, Lalo cuestionó la escalabilidad de ciertos componentes del dashboard. Pude responder con solvencia técnica, demostrando cómo la estructura lógica que habíamos definido permitía que GAC creciera sin perder su integridad. Carlos, por su parte, validó que las reglas de negocio —especialmente la segmentación automática de grupos por puesto y subdirección— estaban perfectamente reflejadas en la interfaz refinada. La herramienta ya no era una propuesta de diseño; era una solución operativa que él sentía como propia.

#### El veredicto y la luz verde para desarrollo

El momento culminante de la sesión fue la demostración en vivo del prototipo final refinado. Navegué por los flujos críticos —desde el login hasta la generación de reportes de indicadores clave— mostrando una fluidez que eliminaba cualquier duda pendiente. La respuesta de los stakeholders fue unánime. Lalo reconoció que el nivel de detalle y la fundamentación detrás de cada decisión de diseño superaban las expectativas iniciales del proyecto.

Obtuve la **aprobación formal** para proceder. Esa "luz verde" no fue solo un trámite administrativo; fue el reconocimiento de que habíamos transformado un brief complejo y lleno de procesos manuales en una pieza de ingeniería de software centrada en la persona. El diseño que entregamos estaba listo para ser traducido a código de producción sin ambigüedades. Cada interacción, cada estado de error y cada etiqueta de accesibilidad estaban documentados y validados.

Al cerrar la sesión, sentí la satisfacción de quien entrega un trabajo blindado. Habíamos navegado desde la incertidumbre de los Excels históricos hasta una plataforma digital de vanguardia que honra los valores de Gentera. GAC no es solo una herramienta de gestión; es el nuevo estándar de cómo la tecnología debe servir a la capacitación humana dentro de la organización.

**Reflexión final:**
Como diseñador, entiendo que mi responsabilidad termina donde empieza la inclusión de todos los usuarios. Llevar este proyecto desde la investigación profunda hasta una validación de accesibilidad WCAG 2.1 AA ha sido un ejercicio de rigor que define lo que significa hacer diseño de producto de alto impacto. Haber obtenido la aprobación final de Lalo y Carlos no es solo el fin de una fase, sino la garantía de que lo que se construirá a continuación tiene una base sólida, ética y profundamente funcional. El éxito de GAC no se medirá solo en clics, sino en la autonomía que le hemos devuelto a cada colaborador de Gentera.