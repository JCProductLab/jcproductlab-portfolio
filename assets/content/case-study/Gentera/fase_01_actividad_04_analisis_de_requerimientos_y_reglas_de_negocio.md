# Fase 1: Entender y Definir (Discovery & Research)

## Actividad_04_Análisis de Requerimientos y Reglas de Negocio

### Parte 1: Auditoría Estratégica y Detección de Vacíos Lógicos

#### El estrés de la transición: De la intención a la lógica funcional

El brief no es una hoja de ruta; es una declaración de intenciones llena de puntos ciegos que, si no se despejan a tiempo, se convierten en errores de lógica fatales durante el desarrollo. Tras cerrar la fase de inmersión en la cultura de Gentera, me encontré con una montaña de documentos que prometían "transformar" el proceso de capacitación, pero ninguno explicaba qué sucedía cuando las reglas de negocio chocaban entre sí. Mi mentalidad en ese momento cambió radicalmente: dejé de ser el diseñador que escucha con empatía para convertirme en un auditor forense. No podía permitir que el equipo de diseño o desarrollo avanzara basándose en asunciones.

El reto era mayúsculo. Teníamos un objetivo de automatización del 95% para una organización de **27,000 colaboradores**, partiendo de un proceso que hoy es un nudo de hojas de cálculo y correos manuales. Mi razonamiento fue claro: antes de dibujar una sola pantalla o definir un flujo de usuario, necesitaba someter el brief a un proceso de *stress-testing*. Tenía que encontrar dónde se rompía la lógica de segmentación, dónde el alcance se volvía ambiguo y cómo íbamos a medir ese "valor significativo" que el cliente esperaba. Esta auditoría previa no fue un ejercicio burocrático, sino una maniobra de blindaje para evitar el *scope creep* y asegurar que la plataforma GAC (Gestión Automatizada de la Capacitación) tuviera un esqueleto lógico indestructible.

#### Auditoría forense: Diseccionando la "Mothership" documental

Me encerré a realizar una revisión exhaustiva de los tres pilares documentales del proyecto: el **Brief Detallado**, el documento de **Plataforma GAC** y la presentación ejecutiva. No los leí para entender el proyecto —eso ya lo había hecho—, los leí para encontrar contradicciones. Crucé esta información con la **Investigación Exhaustiva de Gentera** para asegurar que cada decisión de diseño respetara el valor de "Centrado en la Persona", pero con un rigor técnico implacable.

Durante esta revisión, identifiqué que términos como "transformar el proceso" eran peligrosamente subjetivos. ¿Qué significa transformar para Carlos, que vive atrapado en Excels, o para Lalo, que busca alineación estratégica? Marqué cada una de estas ambigüedades. Necesitaba que Gentera definiera cómo se "sentiría" el éxito seis meses después del lanzamiento. Si no establecíamos métricas tangibles desde el día uno, el proyecto sería un éxito técnico pero un fracaso de percepción. Esta fase de auditoría me permitió mapear el ecosistema completo: desde la identificación de colaboradores elegibles (F1) hasta la trazabilidad total (F2), buscando los hilos sueltos en cada funcionalidad.

#### El diagnóstico del caos: 32 horas de fricción manual

Uno de los hallazgos más alarmantes de mi auditoría fue la cuantificación del dolor operativo. Al analizar el proceso actual, detecté que Carlos dedica entre **24 y 32 horas semanales** exclusivamente a tareas manuales de gestión de capacitación. Estamos hablando de casi el 80% de una jornada laboral estándar consumida en cuadrar listas, revisar niveles de capacitación y enviar correos individuales. Es un escenario inaceptable para una empresa que cotiza en bolsa y lidera la inclusión financiera.

> **Insight Senior:** La automatización no es un lujo aquí, es una medida de supervivencia operativa. Si el sistema no reduce ese tiempo en un 80%, habremos fallado como diseñadores de producto, sin importar qué tan estética sea la interfaz.

Identifiqué que el núcleo del problema no era solo el tiempo, sino la tasa de error humano. Los datos revelaron situaciones críticas: colaboradores convocados a cursos en ciudades a cientos de kilómetros de su base, omisiones sistemáticas de nuevos ingresos y formadores asignados a sesiones que no les correspondían por falta de visibilidad en la agenda. Este "caos silencioso" justificó mi decisión de priorizar la **Automatización de la Segmentación (F1-F4)** como el corazón del desarrollo inicial. Si no resolvíamos la entrada de datos y la creación de grupos, la trazabilidad posterior no tendría datos fiables que rastrear.

#### Delimitación de fronteras: El rigor contra el "Scope Creep"

Para blindar el proyecto, utilicé la auditoría para establecer límites de hierro. Era vital confirmar qué quedaba fuera para que el equipo de desarrollo no trabajara sobre suposiciones falsas. Definí tres exclusiones críticas que debían ser validadas sin margen de duda:
*   **Contenido de cursos:** GAC es un orquestador, no una herramienta de autoría.
*   **Integración directa con ADN:** En esta fase, el sistema no hablará directamente con la base de datos de recursos humanos vía API; consumirá una **plantilla Excel "semi-limpia"**. Esta es una restricción técnica mayor que condiciona toda la arquitectura de carga de datos.
*   **Logística compleja:** La gestión de viáticos y hoteles queda fuera, aunque el sistema debe ser capaz de mostrar la información de sede y hospedaje como un dato informativo para el colaborador.

Esta claridad sobre la "plantilla semi-limpia" fue un punto de inflexión. Al entender que el origen de la verdad sería un archivo con posibles inconsistencias, supe que el diseño de la interfaz de carga para el administrador tendría que incluir validadores de errores robustos y previsualizaciones de datos antes de procesar la segmentación. No podíamos confiar en que el archivo vendría perfecto.

#### Ingeniería de reglas: El laberinto del Gerente Multiproducto

La parte más densa de mi auditoría fue desglosar las reglas de negocio complejas. Me encontré con conceptos como el **"Gerente Multiproducto"** y la **"Regla de los 6 meses"** para reingresos, que en el papel sonaban simples pero en la lógica de programación eran un campo minado. 

Por ejemplo, la identificación de un gerente multiproducto depende de la presencia de "asesores CIE" en su oficina. Tuve que cuestionar: ¿Cómo se identifica exactamente un asesor CIE en la plantilla? ¿Qué pasa si el asesor es temporal? ¿Y si hay dos gerentes en la misma oficina? En cuanto a los reingresos, descubrí que si un colaborador vuelve antes de los 6 meses, se le reconoce su avance previo, pero si pasa un día más, su ruta se reinicia. 

Lo más crítico que detecté fue la **ausencia de una jerarquía de reglas**. ¿Qué sucede si un colaborador es un "nuevo ingreso" (regla A) pero también tiene una "falta previa" que debe recuperar (regla B)? ¿Cuál de las dos define su convocatoria? Identificar este vacío lógico antes de la reunión de validación me permitió preparar escenarios de "stress-test" para Carlos y Lalo, obligándolos a tomar decisiones de negocio que el código necesitaría meses después.

#### El protocolo de validación: Diseñando la sesión de "Verdad Técnica"

Con todos los vacíos lógicos mapeados, procedí a diseñar la agenda de la reunión de validación estratégica. No quería una presentación de diapositivas; quería una sesión de trabajo de alta intensidad de entre **1.5 y 2 horas**. Estructure la agenda en bloques quirúrgicos:
1.  **Visión de alto nivel (20 mins):** Para alinear el "por qué" con Lalo y Carlos.
2.  **Inmersión en funcionalidades (50 mins):** Un recorrido funcionalidad por funcionalidad, desmenuzando las reglas de negocio y las dependencias de datos.
3.  **Métricas y KPIs (10 mins):** Para blindar el compromiso con el 95% de automatización y el 80% de reducción de tiempo.

Introduje dos herramientas críticas para la ejecución: un **"Parking Lot"** para capturar ideas que, aunque valiosas, estaban fuera del alcance actual, y un sistema de **toma de notas en vivo**. Como diseñador senior, sé que la memoria es traicionera; necesitaba que cada decisión sobre los **asesores CIE** o las **incapacidades IPP** quedara documentada y validada visualmente por los stakeholders en el momento en que se tomaba. Esta preparación convirtió una simple reunión de alineación en un protocolo de ingeniería de requerimientos que salvaría semanas de retrabajo futuro.

#### Próximo paso:

La auditoría previa me dejó con una lista de "zonas de sombra" que solo Carlos y su equipo podían iluminar, especialmente en lo que respecta a la jerarquía de prioridades cuando las reglas de negocio entran en conflicto. Había preparado el terreno y las preguntas difíciles, pero la verdadera prueba de fuego vendría al sentarlos a todos en una misma sala virtual para enfrentar la realidad de sus propios procesos. Estaba a punto de descubrir si la ambición del 95% de automatización era un objetivo realista o un deseo optimista frente a la complejidad de la data que Carlos manejaba cada semana.

### Parte 2: Sesión de Alineación y Elicitación con Stakeholders

#### Del diagnóstico a la mesa de operaciones

La auditoría previa me había dejado una lista de "zonas de sombra" que ninguna lectura de documentos iba a despejar. Como diseñador, sé que hay una diferencia abismal entre lo que un proceso dice que es y lo que la persona que lo sufre vive cada jueves. Tenía frente a mí el reto de confrontar mis dudas con los dueños del proceso en una sesión de alta intensidad. No buscaba simplemente "validar un documento"; mi objetivo era extraer la lógica tácita que vive en la cabeza de Carlos y que el Excel oculta sistemáticamente. Necesitaba transformar el "deseo de automatizar" de la dirección en una arquitectura de reglas ejecutable que no se rompiera al primer contacto con la realidad de la data.

Preparé la sesión con una mentalidad forense. Sabía que si no lográbamos aterrizar las ambigüedades en ese momento, el *scope creep* —ese crecimiento descontrolado del alcance— devoraría el proyecto en las fases de desarrollo. La transición de la auditoría a la elicitación fue el momento en que dejé de ser un observador para convertirme en el arquitecto que debía trazar las líneas de cimentación de la plataforma GAC.

#### Orquestando la sesión: El ritual de la toma de notas en vivo

Programé la reunión en Google Meets, asegurándome de tener a todos los actores clave en la misma sala virtual durante dos horas. No fue una reunión de presentación, fue una sesión de trabajo cruda. Estaban **Lalo**, aportando la visión estratégica; **Carlos**, con la operatividad forense de quien ha pasado años peleando con plantillas; **Marta**, para darnos el contexto de los cursos virtuales; y **Alberto**, el guardián de la data cruda que sale de ADN.

Utilicé dos herramientas que considero vitales para mantener el control de una sesión de este calibre:
*   **Toma de Notas en Vivo:** Compartí mi pantalla mientras redactaba los acuerdos. Esto eliminó cualquier "yo entendí otra cosa" posterior. Cada vez que Carlos explicaba una regla, yo la parafraseaba y la escribía. Si él no asentía, la redacción no se quedaba.
*   **El "Parking Lot" (Estacionamiento de Ideas):** Fue mi escudo contra las distracciones. Cuando surgían discusiones sobre el color de los botones o ideas futuristas sobre integraciones con IA que no venían al caso, las movía gentilmente al "estacionamiento". Esto nos permitió mantener el foco en el núcleo: la lógica de segmentación.

Esta orquestación me permitió navegar la complejidad sin perder el ritmo, asegurando que cada minuto de los stakeholders fuera una inversión en claridad técnica.

#### El "Alivio" como KPI: Cuando la métrica tiene rostro humano

Uno de los momentos más reveladores de la sesión ocurrió cuando validamos la visión del proyecto. A menudo, en el diseño de producto nos obsesionamos con KPIs fríos, pero aquí el enemigo tenía un número muy específico: **24 a 32 horas semanales**. Ese es el tiempo que Carlos invierte manualmente cada semana para que la capacitación de Gentera no se detenga. 

Validé con Lalo y Carlos que el éxito de GAC no se mediría solo en líneas de código entregadas, sino en el sentimiento de **"alivio"**. Articulé este concepto no como algo etéreo, sino como un indicador cualitativo de éxito. Si lográbamos reducir ese tiempo operativo en un 80%, estábamos devolviéndole a Carlos casi cuatro días de su vida laboral cada mes. 

> **Insight de Diseño:** En proyectos de automatización interna, el valor real no es la función, es la recuperación de la capacidad estratégica del usuario. Transformamos una métrica de tiempo en una mejora directa del "Valor Humano", que es el eje central de Gentera. Entender esto cambió mi forma de priorizar las funcionalidades: cualquier cosa que no contribuyera directamente a ese "alivio" pasó a un segundo plano.

#### Blindando el alcance: La batalla contra el Scope Creep

Durante la revisión de las funcionalidades, tuve que ejercer una firmeza técnica necesaria para proteger la viabilidad del Desarrollo 1. Es común que, al ver una nueva plataforma en el horizonte, los stakeholders quieran incluir "todo lo que siempre han soñado". Aquí es donde mi rol fue trazar fronteras claras.

Confirmé y dejé asentado en la minuta que ciertos elementos quedaban estrictamente **fuera de alcance** para esta fase:
1.  **Creación de contenido:** GAC no es una herramienta de autoría de cursos.
2.  **Gestión de viáticos y hoteles:** Aunque el sistema mostrará información de hospedaje, esta vendrá de una tabla de Excel externa que el administrador cargará. GAC no gestionará reservaciones ni presupuestos de viaje.
3.  **Integración directa con ADN para asignación:** El sistema consumirá la plantilla de Excel de Alberto; no haremos llamadas a la API de ADN para asignar cursos automáticamente en esta etapa.

Esta "limpieza de alcance" fue fundamental. Al definir qué *no* haríamos, blindé al equipo de desarrollo y aseguré que los esfuerzos se concentraran en el motor de segmentación, que es donde reside el riesgo técnico real.

#### Elicitación forense: Diseccionando la lógica del Gerente Multiproducto

Entramos entonces al núcleo técnico de la sesión: las reglas de negocio. Aquí es donde la experiencia de Carlos fue invaluable. Diseccionamos tres reglas que son el corazón del sistema:

*   **La Regla de los 6 Meses (Reingresos):** Establecimos que el umbral crítico es de 180 días. Si un colaborador reingresa antes de ese tiempo, se le reconoce su avance previo; si pasa un día más, el contador vuelve a cero. Esta lógica debe ser impecable, ya que impacta directamente en la motivación del colaborador y en los costos de capacitación.
*   **Gestión de Faltas y Justificaciones:** Descubrí que la falta no es el fin del proceso, sino el disparador de una nueva lógica. Si un colaborador falta, debe justificarlo con su líder. Una vez justificado, el sistema debe darle prioridad absoluta en la siguiente convocatoria para ese mismo curso. No es una asignación aleatoria, es una "deuda" de capacitación que el sistema debe saldar.
*   **El Enigma del "Gerente Multiproducto":** Esta fue la regla más compleja de capturar. Carlos me confesó que no existe un campo en la data de Alberto que diga "Gerente Multiproducto". Él lo deduce buscando manualmente si en la oficina de ese gerente hay "Asesores CIE". 

Esta revelación fue un momento "eureka". Para automatizar esto, GAC no puede simplemente leer una columna; debe realizar una **inferencia de datos**. El sistema tendrá que escanear la estructura de la oficina, identificar la presencia de puestos específicos (CIE) y, en función de eso, cambiar dinámicamente la ruta de capacitación del gerente. Es una lógica de segundo nivel que el Excel oculta pero que el código debe hacer explícita.

#### Ingeniería de rendimiento: El reto de los 27,000 registros

No podíamos ignorar los requerimientos no funcionales. Alberto fue muy claro sobre el volumen de información: estamos hablando de una plantilla de aproximadamente **27,000 registros** que debe procesarse semanalmente. 

Establecimos un límite de rendimiento que no era un deseo, sino una exigencia operativa: el sistema debe cargar la plantilla, aplicar todas las reglas de negocio cruzadas (incluyendo la inferencia de gerentes multiproducto y validación de históricos) y generar las listas segmentadas en un tiempo de **entre 5 y 10 minutos**. 

Como diseñador, esto me impuso una restricción inmediata: la interfaz de carga no puede ser una simple barra de progreso estática. Necesitamos un sistema de procesamiento en segundo plano con notificaciones claras, para que el administrador no se quede bloqueado mirando una pantalla mientras el motor de reglas hace el trabajo pesado. Esta definición de rendimiento condicionará toda la arquitectura de la base de datos y la experiencia de usuario del administrador.

#### El Administrador como usuario crítico y el anclaje visual

Finalmente, acordamos que el rol de Carlos (Administrador de Capacitación) sería elevado a **Usuario Crítico de la Fase 1**. Si él no adopta la herramienta porque la siente ajena o complicada, el proyecto fracasa, independientemente de lo bien que funcione el código.

Para mitigar este riesgo de adopción, decidí que el diseño visual debía tener un anclaje de familiaridad. Acordamos utilizar los estilos gráficos que Gentera ya manejaba en sus presentaciones internas de GAC. No se trata de falta de creatividad, sino de **psicología cognitiva**: al usar una paleta de colores y una iconografía que ya les resulta familiar, reducimos la curva de aprendizaje y la resistencia al cambio. La plataforma no debe sentirse como un software extraño comprado a un tercero, sino como una herramienta propia, nacida de sus necesidades y alineada con su identidad visual.

Salí de esa sesión con la sensación de haber desactivado varias bombas de tiempo. Teníamos una minuta validada, las reglas de negocio mapeadas y, lo más importante, una alianza sólida con los stakeholders. Sabía que la data de Alberto seguiría siendo un reto —él mismo admitió que la plantilla es un extracto "crudo" con posibles errores tipográficos— pero ahora teníamos el mapa para navegar ese caos.

#### Próximo paso:

La sesión de alineación me dio el "qué", pero la cruda realidad de la plantilla de ADN de Alberto me dejó una inquietud profunda sobre el "cómo". Al terminar la reunión, me quedé observando la lista de reglas de negocio y me di cuenta de que la inferencia del "Gerente Multiproducto" era solo la punta del iceberg de una estructura de datos mucho más fragmentada de lo que Lalo imaginaba. Sabía que el siguiente paso —la definición forense de cada requerimiento— me obligaría a bajar al nivel del bit para asegurar que el 95% de automatización prometido no se estrellara contra la inconsistencia de los registros manuales de los últimos dos años.

#### Subtítulos Descriptivos

#### El mapa de la lógica invisible
#### El factor humano tras el algoritmo
#### Construyendo el cortafuegos del alcance
#### La arquitectura de la inferencia: Más allá del dato crudo
#### El compromiso con el rendimiento operativo
#### Identidad y adopción: El diseño como puente de confianza

### Parte 3: Definición Forense de Reglas de Negocio y Requerimientos

#### El mapa de la lógica invisible

La sesión de alineación con Lalo y Carlos me había dejado una certeza incómoda: el 95% de automatización que prometimos no se iba a lograr con interfaces bonitas, sino con una arquitectura lógica implacable. Al cerrar aquella reunión, me di cuenta de que la inferencia del "Gerente Multiproducto" era solo la punta del iceberg. Debajo de la superficie, la plantilla de ADN que Alberto nos entregaba cada semana era un campo de minas de inconsistencias, registros manuales y casos borde que Carlos resolvía "por puro instinto" tras años de oficio. Mi trabajo en ese momento cambió de escala: dejé de mirar flujos de usuario para sumergirme en un análisis forense, bajando al nivel del bit para transformar ese instinto humano en un motor de reglas determinista.

Sabía que cualquier ambigüedad en esta etapa se pagaría cara en desarrollo. Si el sistema no sabía exactamente qué hacer cuando un colaborador reingresaba tras 179 días vs. 181 días, la automatización colapsaría y volveríamos a las 32 horas semanales de trabajo manual. Me propuse diseccionar cada decisión que Carlos tomaba frente a su Excel y convertirla en una instrucción inequívoca. No estábamos solo documentando requerimientos; estábamos construyendo el "cerebro" de GAC, un cortafuegos lógico que debía ser capaz de procesar miles de registros sin pestañear.

#### El primer cortafuegos: Higiene de datos en la entrada

Inicié el proceso de elicitación enfocándome en lo que llamé la "limpieza fulminante". Antes de pensar en quién debe capacitarse, el sistema debe tener la capacidad de purificar el universo de datos. Me senté con Carlos para traducir su criterio de filtrado en las primeras reglas de identificación (**RN-ID-001** a **003**). 

La lógica fue quirúrgica. Establecí que el sistema, al recibir la carga semanal, debe ejecutar un primer barrido de exclusión:
*   **Estatus "Baja":** Si el registro marca baja, el sistema lo ignora de inmediato. Parece obvio, pero en el proceso manual, estos registros a menudo "ensuciaban" las listas de envío de invitaciones.
*   **Área "SEAS México":** Identifiqué que esta unidad de negocio sigue un proceso de capacitación paralelo. Para evitar duplicidades y ruido operativo, blindé el sistema para que cualquier registro con `Negocio = "SEAS"` y `Ubicación = "México"` fuera segregado automáticamente.
*   **Incapacidades "IPP":** Este fue un punto de fricción interesante. Carlos me explicó que no todas las incapacidades detienen la ruta, pero la **Incapacidad Permanente Parcial (IPP)** es un criterio de exclusión total. Documenté esta regla con prioridad alta: si el campo `INC/IPP` contiene ese valor, el colaborador queda fuera del radar de GAC hasta que su estatus cambie en ADN.

> **Insight de Diseño:** Estas reglas de exclusión no son solo filtros; son la base de la confianza del usuario. Si un Líder Operativo recibe una lista de capacitación con personas que ya no están en la empresa, el sistema pierde credibilidad instantáneamente. La higiene de datos es, en este contexto, una decisión de diseño de experiencia.

#### El umbral de los 180 días: Gestionando el reingreso

Uno de los mayores dolores de cabeza de Carlos era el manejo de los reingresos. ¿Cuándo un colaborador que vuelve a Gentera es "nuevo" y cuándo es un "seguimiento"? Para resolver esto, formalicé la **RN-ID-005**, basada en la regla de los 6 meses.

Diseñé una lógica de cálculo temporal que cruza la Plantilla de Capacitación con el Concentrado Histórico. El sistema debe calcular la variable `Días_Fuera_Empresa` restando la `Fecha de Salida Previa` de la `Fecha de Reingreso`. 
1.  **Si el resultado es >= 180 días:** El sistema resetea al colaborador. Se le trata como un nuevo ingreso y debe tomar la capacitación desde el nivel básico. 
2.  **Si el resultado es < 180 días:** El sistema recupera su último hito alcanzado y lo posiciona para continuar la ruta exactamente donde la dejó.

Esta definición eliminó la subjetividad. Ya no dependemos de si Carlos recuerda o no a un colaborador; el sistema aplica un umbral matemático que garantiza que el conocimiento crítico se mantenga fresco o se refuerce si el tiempo de ausencia fue excesivo.

#### La arquitectura de la inferencia: El Gerente Multiproducto

Llegamos al núcleo de la complejidad: la **RN-SEG-004**. Como recordaba de la sesión de alineación, identificar a un Gerente Multiproducto no es un dato que venga explícito en un campo de la base de datos de Alberto. Es una inferencia basada en el contexto de la oficina.

Para automatizar esto, tracé una lógica de escaneo cruzado. El sistema no solo mira el puesto del colaborador (Gerente), sino que debe realizar una búsqueda relacional: "Busca en la misma oficina asignada a este Gerente si existe al menos un registro con el puesto 'Asesor CIE'". 
*   **Si existe el Asesor CIE:** El Gerente se etiqueta automáticamente como **Multiproducto** y se le asigna esa ruta específica.
*   **Si no existe:** Se le asigna la **Ruta Grupal**.

Esta es la verdadera automatización. Logramos que el sistema "entienda" la estructura organizacional de la oficina para tomar una decisión de segmentación que antes requería que Carlos conociera la plantilla de memoria o hiciera cruces manuales agotadores en Excel. Al documentar esta regla, sentí que finalmente estábamos desactivando el cuello de botella más crítico del proceso.

#### El balance de los cupos: Entre la pedagogía y la logística

La segmentación de grupos (**RN-SEG-001** a **003**) introdujo una capa de restricciones físicas que el algoritmo debía respetar. No bastaba con agrupar por Puesto y Subdirección; había que imponer límites que garantizaran la calidad del aprendizaje y la viabilidad del espacio.

Establecí parámetros rígidos basados en la experiencia de los formadores:
*   **Cursos Presenciales:** Un mínimo de 5 y un máximo de 25 participantes. Menos de 5 es ineficiente en costos; más de 25 rompe la dinámica de aprendizaje.
*   **Cursos Online:** Un rango más estrecho, de 10 a 15 personas, para asegurar que el formador pueda moderar la sesión virtual con efectividad.

Lo interesante aquí no fue solo fijar los números, sino diseñar qué sucede cuando las reglas se rompen. Definí que GAC debe actuar como un asistente inteligente: si un grupo se queda con 4 personas, el sistema no solo lo marca en rojo, sino que dispara una alerta a Carlos sugiriendo acciones concretas: "Fusionar con el grupo de la Subdirección X" o "Posponer una semana". Transformamos un error logístico en una decisión sugerida.

#### Trazabilidad y "Toques": El ritmo de la ruta de 12 niveles

Para la trazabilidad, tuve que mapear la estructura actual de 12 niveles, pero con la mirada puesta en la futura transición a 6 meses. El reto era crear un sistema de seguimiento que fuera lo suficientemente rígido para auditar el progreso, pero flexible para cambiar su configuración.

Identifiqué los niveles **1, 4, 8 y 12** como los "Toques con Formador" (**RN-TRAZ-002**). Estos no son simples cursos virtuales que el colaborador completa solo; son hitos donde la interacción humana es obligatoria. Documenté que el sistema debe bloquear el avance del colaborador en estos puntos hasta que un Formador registre manualmente la asistencia y la calificación. 

Este diseño de "puertas lógicas" asegura que el % de avance que el sistema calcula (**RN-TRAZ-003**) sea verídico. No es solo "hacer clic en videos"; es haber demostrado competencia frente a un experto en los momentos que realmente importan para el negocio. Así, el estatus de "Acreditado" adquiere un peso real ante los Directores y Subdirectores que consultarán los dashboards.

#### El compromiso con el rendimiento operativo: Excepciones estratégicas

En el análisis forense, descubrí que la rigidez absoluta es el enemigo de la adopción. Si el sistema obligaba a todos a pasar por todos los niveles, generaríamos una fricción innecesaria en puestos clave. Por eso, dediqué una parte importante del taller con Carlos a documentar las excepciones estratégicas (**RN-TRAZ-004**).

Configuré el mapeo de puestos para que el sistema actuara con "inteligencia operativa":
*   **Gerente de Ventas:** Se le excluye automáticamente del nivel básico. Su perfil ya presupone esas competencias, y obligarlo a tomarlas sería un desperdicio de su tiempo y de los recursos de la empresa.
*   **Gerente Yastás:** Un caso muy específico donde solo el nivel 4 es relevante. El sistema debe filtrar su ruta para ignorar los demás niveles y dirigirlo directamente al hito que impacta su operación.

Estas excepciones son las que demuestran que el diseño de GAC entiende la realidad de Gentera. No es un software genérico de capacitación; es un traje a medida que respeta el tiempo de los colaboradores de alto nivel.

#### De la regla al bit: El catálogo de requerimientos funcionales

Finalmente, realicé la metamorfosis: traduje cada una de estas reglas de negocio en un catálogo de **26 requerimientos funcionales (RF-GAC)**. Este documento es el contrato sagrado con el equipo de desarrollo.

Pasamos de "queremos automatizar" a especificaciones técnicas granulares:
*   **RF-GAC-001:** Definí la capacidad de carga y limpieza automática, especificando qué campos de la plantilla de ADN se deben procesar.
*   **RF-GAC-022:** Detallé la automatización de invitaciones vía Teams y WhatsApp, incluyendo la generación dinámica de archivos `.ical`. Este detalle es vital: si el colaborador puede agendar su curso con un solo toque en su celular, la tasa de asistencia subirá drásticamente.
*   **RF-GAC-025:** Aseguré que el Super Admin tenga la interfaz necesaria para actualizar la base de datos semanalmente, cerrando el ciclo de vida del dato que Alberto nos entrega.

Cada requerimiento fue redactado para ser testeable. "El sistema debe...", "El sistema permitirá...". Al terminar este catálogo, sentí que habíamos construido el esqueleto de un gigante. La lógica estaba blindada, las excepciones mapeadas y el camino hacia ese 95% de automatización estaba, por fin, despejado de ambigüedades.

#### Reflexión: El diseño de servicios es, ante todo, orden lógico

Mirando el catálogo de requerimientos y el mapa de reglas, me reafirmé en una idea: el diseño de producto senior, en contextos de alta complejidad operativa, tiene mucho más de lógica de sistemas que de estética visual. Formalizar estas reglas fue un ejercicio de diseño de servicios profundo. Tuvimos que equilibrar la rigidez necesaria de un algoritmo con la flexibilidad que requiere el factor humano en una empresa de miles de personas.

Este "cerebro" que diseñamos no solo va a ahorrar 24 horas de trabajo a Carlos; va a dar visibilidad a los líderes y claridad a los colaboradores. Sin embargo, tener las reglas claras era solo la mitad de la batalla. Mientras revisaba el flujo de datos de la plantilla de Alberto hacia nuestros requerimientos, me asaltó una pregunta: ¿Cómo vamos a saber si todo este motor de reglas realmente está teniendo éxito una vez que esté vivo?

#### Próximo paso:

La precisión de las reglas me dio tranquilidad, pero también me reveló la magnitud del riesgo: si la data de entrada es inconsistente, el motor de reglas más perfecto del mundo producirá basura automatizada. Me quedé pensando en cómo íbamos a medir el impacto real de esta lógica en la operación diaria y, sobre todo, cómo íbamos a validar que la calidad de la información que Alberto nos entregaba era suficiente para alimentar este cerebro sin errores. Sabía que el siguiente paso —el establecimiento de métricas de éxito y el plan de datos— sería el momento de poner a prueba la resistencia de nuestra arquitectura frente a la realidad de los números.

### Parte 4: Establecimiento de Métricas de Éxito y Plan de Datos

#### El termómetro de la automatización: De la lógica al impacto real

Tener las reglas de negocio blindadas me dio una satisfacción técnica inmensa, pero también me dejó una inquietud que no me dejaba tranquilo: la lógica más elegante del mundo es irrelevante si no puedo demostrar, con números crudos, que está moviendo la aguja del negocio. Habíamos diseñado un "cerebro" para GAC, pero ahora necesitaba diseñar su sistema nervioso; ese termómetro que nos dijera si realmente estábamos liberando a Carlos de su "maratón" semanal o si, por el contrario, solo estábamos trasladando el cuello de botella de un Excel a una base de datos.

Como diseñador de producto, entiendo que mi trabajo no termina en la interfaz. Mi responsabilidad es diseñar resultados. Si GAC no reduce drásticamente la carga operativa de Gentera, habremos fallado, por muy bonitos que sean los botones. Por eso, decidí que el cierre de esta fase de definición debía ser un sistema de medición implacable. No podíamos permitirnos que el éxito fuera una percepción subjetiva; tenía que ser un dato irrefutable que pudiéramos presentar ante los stakeholders para justificar el **ROI (Retorno de la Inversión)** del proyecto.

#### La batalla contra las 32 horas: Métricas operativas y de eficiencia

Lo primero que ataqué fue el dolor más evidente: el tiempo. Durante mis sesiones con Carlos, identifiqué que su proceso manual actual es una sangría de productividad que consume entre **24 y 32 horas semanales**. Es decir, Carlos dedica casi cuatro días completos de su semana solo a limpiar, cruzar y segmentar listas. Es una locura operativa.

Establecí que nuestra métrica estrella —la "North Star" de la eficiencia— sería la **Reducción del Tiempo de Generación de Listas Semanales**. Fijamos un objetivo agresivo pero necesario: una reducción del **80%**. Esto significa que, en los primeros 3 a 6 meses post-implementación, el tiempo que Carlos dedica a esta tarea debe caer a un rango de **4.8 a 6.4 horas semanales**. Pasar de 32 horas a menos de 7 no es solo una mejora; es devolverle a una persona tres días de su vida laboral cada semana.

Para que esta métrica no fuera un "yo creo que ahora tardo menos", decidí que el sistema GAC debía integrar **Logs de Actividad** automáticos. No le pediremos a Carlos que llene una bitácora; el sistema registrará el milisegundo exacto en que se carga la plantilla y el momento en que se dispara la última invitación. La data será pura, sin sesgos de memoria.

> **Insight Senior:** En proyectos de automatización masiva, el rendimiento técnico es una métrica de UX. Si el sistema tarda una hora en procesar los datos, el usuario volverá al Excel. Por eso, blindé el requerimiento de **Tiempo de Procesamiento de Plantilla**: el motor debe procesar a los **27,000 colaboradores** y presentar los grupos preliminares en un máximo de **5 a 10 minutos**. Menos de eso es el estándar de fluidez que necesitamos para que la herramienta sea adoptada.

#### El seguro de vida del proyecto: Precisión y calidad de la data

Uno de los riesgos que más me quitaba el sueño era la posibilidad de automatizar el error. Si el algoritmo tiene un fallo sutil y envía a 500 personas al curso equivocado en la sede incorrecta, el daño a la credibilidad del equipo de capacitación sería masivo. Aquí es donde entra en juego el "Valor Humano" de Gentera: no podemos tratar a los colaboradores como filas de una tabla sin rostro.

Diseñé la métrica de **Precisión de la Automatización de Elegibles**. El objetivo es que el **95% de los colaboradores** identificados por GAC no requieran ninguna intervención o corrección manual por parte de Carlos. Para medir esto, establecí un protocolo de auditorías semanales donde compararemos los resultados del sistema contra un muestreo manual. Si Carlos tiene que corregir más del 5% de la lista, el algoritmo necesita un ajuste de tuercas.

Complementamos esto con la **Tasa de Error en Convocatorias**. Actualmente, Carlos estima que entre el **10% y el 15%** de los registros suelen necesitar alguna corrección post-envío debido a errores humanos en el proceso manual. Nuestra meta con GAC es reducir esa tasa a **menos del 1.5%** en los primeros seis meses. 

*   **Métrica:** (Errores reportados / Total de convocatorias) x 100.
*   **Fuente:** Registro de incidencias y feedback directo de los líderes de unidad.
*   **Frecuencia:** Medición mensual para detectar patrones de error en la lógica de segmentación.

#### Adopción y la métrica de la felicidad: SUS y CSAT

Un software que no se usa es, técnicamente, basura costosa. Me he topado con muchas herramientas corporativas que son lógicamente perfectas pero que los usuarios odian, por lo que terminan buscando formas de "darle la vuelta" y volver a sus métodos antiguos. Para blindar a GAC contra este destino, definí KPIs de adopción y satisfacción muy claros.

Primero, la **Tasa de Adopción de Administradores**. No me basta con que tengan usuario; necesito que el **85% de los administradores** utilicen la plataforma de forma activa en los primeros 3 meses. Definí "usuario activo" como aquel que realiza al menos una acción clave (carga, generación o envío) por semana. 

Para la parte cualitativa, implementé dos herramientas estándar de la industria:
1.  **System Usability Scale (SUS):** Pasaremos este cuestionario de 10 ítems anualmente. Mi objetivo es una puntuación de **75 o superior**. Sabemos que 68 es el promedio global; nosotros aspiramos a ser "buenos" tirando a "excelentes" (85+). 
2.  **CSAT (Customer Satisfaction Score):** Realizaremos encuestas trimestrales para Carlos y semestrales para los colaboradores y líderes. Queremos una puntuación mínima de **4.0 sobre 5.0**. 

> **Nota sobre el factor humano:** La satisfacción de Carlos no es solo un número de UX. Es una métrica de salud laboral. Si en la encuesta Carlos deja de usar palabras como "agotado" o "maratón" y empieza a hablar de "control" y "agilidad", sabremos que el diseño cumplió su propósito humano.

#### El protocolo forense: Plan de recopilación de datos

Para que todo lo anterior no fuera una declaración de buenas intenciones, articulé un plan de recopilación de datos dividido en dos fases: el diagnóstico de la línea base y el monitoreo post-lanzamiento.

**Estableciendo la Línea Base (El hoy):**
No puedo decir que mejoramos si no sé exactamente qué tan mal estamos hoy. Por eso, ejecuté una **Observación Cronometrada**. Me senté con Carlos un jueves (su día de mayor carga) y, reloj en mano, documenté cada micro-tarea:
*   Limpieza de duplicados en el Excel de Alberto.
*   Cruce manual contra el concentrado histórico.
*   Segmentación por subdirección y puesto.
*   Redacción y envío individual de correos.
Este ejercicio me permitió validar que las 32 horas no eran una exageración, sino una realidad dolorosa de procesos fragmentados.

**Monitoreo Post-Lanzamiento (El mañana):**
Para el seguimiento continuo, definí una infraestructura de medición que no dependa de la buena voluntad de nadie:
*   **Analíticas e Infraestructura:** Utilizaremos logs del servidor y herramientas como **Google Analytics** para rastrear eventos clave y tiempos de respuesta. Fijé un **Uptime del 99.5%**; la plataforma debe estar viva cuando los administradores la necesiten.
*   **Seguimiento de Incidencias:** Usaremos **Jira** para clasificar y contar bugs. Mi meta es **cero incidencias críticas** y menos de 5 incidencias altas al mes tras el periodo de estabilización.
*   **Calendario de Reporte:** Establecí que las métricas operativas se revisen semanalmente, mientras que las de satisfacción y adopción tendrán un corte trimestral o semestral para permitir que los usuarios se habitúen a la herramienta.

Este plan de datos es el cierre que necesitaba para la Fase 1. Ya no solo entiendo el problema y las reglas; ahora tengo la vara con la que se medirá mi éxito como diseñador. 

**Reflexión final:**
Establecer estas métricas cambió por completo mi perspectiva sobre el proyecto: dejó de ser un reto de "hacer una plataforma" para convertirse en un compromiso de "devolver tiempo y reducir errores". Me di cuenta de que, en productos de alta complejidad operativa, el diseño más valioso es aquel que se vuelve invisible porque simplemente funciona con precisión quirúrgica. Al terminar esta actividad, sentí que por fin teníamos un terreno sólido sobre el cual empezar a construir la arquitectura visual, sabiendo exactamente qué números tenemos que vencer.