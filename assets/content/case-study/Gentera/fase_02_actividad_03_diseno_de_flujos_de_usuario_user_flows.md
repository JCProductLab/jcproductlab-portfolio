# Fase 2: Idear y Diseñar (Ideation & Prototyping)

## Actividad_03_Diseño de Flujos de Usuario (User Flows)

### Parte 1: Preparación y Alineación Estratégica de Insumos

Cerrar la fase de descubrimiento para entrar de lleno en la ideación no es un simple cambio de carpeta en el servidor; es un momento de alta tensión creativa donde la abstracción de los hallazgos debe empezar a condensarse en soluciones de diseño que funcionen. Tenía sobre mi mesa virtual un ecosistema complejo: reglas de negocio rigurosas, una estructura organizacional de Gentera que no admite errores y la promesa de automatizar un proceso que hoy consume semanas de trabajo manual. Mi primer instinto, tras validar el brief y alinear las expectativas con los stakeholders, fue frenar cualquier impulso de abrir Figma. Sabía que antes de trazar un solo flujo o proponer un layout, necesitaba construir un "piso parejo" de conocimiento. La creatividad sin una base de datos sólida es solo ruido, y en un proyecto con esta escala operativa, el ruido se traduce en deuda técnica y frustración del usuario.

#### La curaduría obsesiva de la identidad del usuario

Mi primera maniobra táctica fue realizar una inmersión profunda en las fichas de las **User Personas** que habíamos consolidado. No me limité a repasar sus nombres; realicé una auditoría de sus modelos mentales para asegurar que cada decisión de flujo posterior tuviera un ancla humana. Puse en el centro a **Carlos, el Administrador de Capacitación**. Carlos no es solo un perfil; es la persona que hoy vive atrapada en el "Concentrado histórico.xls" y el "Directorio de mails", tratando de orquestar invitaciones por Outlook y Teams de forma artesanal. Su dolor es el motor de este proyecto. Si el flujo que estábamos por diseñar no eliminaba la fricción de su carga manual, habríamos fallado.

Junto a él, analicé a **Sofía (la Colaboradora)** y a **Ricardo (el Líder)**. Sofía representa a miles de personas en Gentera que necesitan claridad absoluta sobre su ruta de capacitación, especialmente en momentos críticos como un nuevo ingreso o una promoción. Por otro lado, Ricardo necesita visibilidad, no microgestión. Al revisar estas necesidades, mi razonamiento fue blindar el proceso de ideación: utilicé estas fichas como jueces silenciosos. Cada vez que surgía una idea de funcionalidad "interesante" pero periférica, me preguntaba: "¿Esto le devuelve tiempo a Carlos o solo le añade otra tarea?". Esta disciplina de mantener las necesidades y frustraciones en el centro —tal como lo estructuré en mi plan de preparación— fue lo que evitó que el diseño se desviara hacia lo cosmético.

#### El mapa de fallos: Diseccionando el caos actual

Para diseñar el orden del futuro, primero tuve que entender el caos del presente con precisión forense. Me sumergí en la auditoría de los **Journey Maps 'As-Is'**. Este ejercicio no fue una revisión pasiva; fue una búsqueda de los puntos de quiebre donde la información de Gentera se pierde o se duplica hoy en día. Identifiqué que el proceso actual es una red de dependencias frágiles: un Excel que depende de un correo, que a su vez depende de una confirmación manual por WhatsApp. 

Mapeé las ineficiencias críticas:
*   **La identificación de candidatos:** Un proceso reactivo y propenso a errores humanos al cruzar listas de puestos y subdirecciones.
*   **La segmentación de grupos:** Un cuello de botella donde la lógica de negocio se aplica de forma subjetiva y lenta.
*   **La asignación de recursos:** La desconexión entre el formador, la sede y el horario, que genera conflictos de agenda constantes.

Entender estos "momentos de mayor fricción" fue vital. Mi estrategia fue clara: el **User Journey 'To-Be'** que íbamos a bocetar no podía ser una versión digitalizada del caos actual, sino una reingeniería total. El Journey Map 'As-Is' se convirtió en mi mapa de riesgos; cada punto de dolor identificado allí fue marcado como una "zona de intervención obligatoria" para la plataforma GAC.

#### El mantra del 80%: Alineación con el Problem Statement

En este punto de la preparación, sentí la necesidad de recalibrar el "Norte" del equipo. El éxito de este proyecto tiene un número muy específico: la **reducción del 80% del tiempo operativo de Carlos**. Este no es solo un KPI; es el **Problem Statement** que actuó como nuestro mantra. Durante la alineación, fui enfático en que la plataforma GAC no es un repositorio de cursos, sino una herramienta de eficiencia operativa.

> **Insight de Diseño Senior:** Un producto funcional para una empresa como Gentera no se mide por la belleza de su interfaz, sino por la velocidad con la que permite al usuario "entrar, resolver y salir". En el caso de Carlos, cada clic que lográramos ahorrarle en la segmentación de grupos era una victoria directa para el negocio.

Integré las métricas de éxito definidas en la fase de descubrimiento para que todos los involucrados —desde el PM hasta los desarrolladores— entendieran que estábamos diseñando para el rendimiento. Esta alineación estratégica permitió que descartáramos flujos redundantes antes de que siquiera llegaran al papel. Si una intención de diseño no apuntaba directamente a la automatización de la segmentación o a la trazabilidad del avance, simplemente no tenía lugar en nuestra mesa de trabajo.

#### Delimitando el campo de batalla: El alcance de la sesión

Con los insumos alineados, procedí a definir el alcance técnico de lo que íbamos a bocetar. Siguiendo una metodología de priorización rigurosa, decidí que no podíamos —ni debíamos— intentar resolver todo el sistema en una sola sesión. Me enfoqué en las funcionalidades centrales que representan el núcleo de la plataforma GAC y que concentran la mayor complejidad técnica y de negocio:

1.  **Carga de Plantilla y Visualización de Candidatos:** El punto de entrada de toda la inteligencia del sistema.
2.  **Segmentación Automatizada de Grupos:** Donde las reglas de negocio de Gentera (puesto, subdirección, unidad) se transforman en listas de acción.
3.  **Asignación de Formadores y Sedes:** El puente entre la planeación digital y la ejecución física.
4.  **Trazabilidad y Dashboard de Avance:** La entrega de valor final para los líderes y administradores.

Esta segmentación del alcance no fue arbitraria. Elegí estas áreas porque son las que presentan mayor incertidumbre. Al resolver los flujos más difíciles primero, estábamos blindando la arquitectura del sistema. Sabíamos que si lográbamos que la segmentación fuera "casi instantánea y libre de errores", el resto de la plataforma se articularía de forma natural alrededor de ese éxito.

#### El ensamblaje de la "War Room" multidisciplinaria

Finalmente, convoqué al equipo que daría vida a estos flujos. Como facilitador del proceso, mi rol fue asegurar que la visión de diseño estuviera equilibrada con la realidad técnica desde el segundo cero. No quería "castillos en el aire" que luego ingeniería tuviera que rechazar por falta de factibilidad. 

El equipo quedó integrado de la siguiente manera:
*   **Tech Lead y Desarrolladores (Frontend/Backend):** Su presencia fue innegociable. Necesitaba que evaluaran la lógica de la automatización y las implicaciones de las integraciones con Outlook y Teams mientras nosotros bocetábamos.
*   **Rodrigo (PM de Dacodes):** Para mantener el pulso del alcance y asegurar que cada decisión estuviera alineada con los tiempos y objetivos del proyecto.
*   **Preparación para Stakeholders:** Diseñé la sesión pensando en que el resultado debía ser lo suficientemente sólido para ser validado posteriormente por **Lalo (Líder de Proyecto en Gentera)** y, sobre todo, por **Carlos**. La validación funcional de Carlos es el filtro final; si él no ve su trabajo simplificado en nuestros bocetos, el flujo no sirve.

Preparé el entorno, ya fuera con pizarras físicas y rotuladores o mediante tableros de Miro configurados con plantillas de navegación. La higiene de insumos estaba completa. Teníamos las personas, los dolores, los objetivos y las restricciones técnicas sobre la mesa. Estábamos listos para pasar de la estrategia a la acción táctica.


Con el terreno preparado y el equipo alineado, nos enfrentamos al vacío de la hoja en blanco, pero esta vez con una tensión productiva: ¿cómo transformar realmente esa maraña de Excels en una interfaz que parezca inteligente? El desafío inmediato era romper la inercia del pensamiento lineal para entrar en la **DIVERGENCIA CREATIVA Y FORMULACIÓN DE PREGUNTAS HMW**, donde una técnica de bocetaje rápido nos obligaría a cuestionar si la primera solución que nos venía a la mente era realmente la mejor para Carlos. La pregunta que flotaba en el aire era si seríamos capaces de simplificar la complejidad de Gentera en solo ocho secciones de papel.

### Parte 2: Divergencia Creativa y Formulación de Preguntas Hmw

#### El riesgo de la solución obvia y el "ensanchamiento" del embudo

Teníamos sobre la mesa una montaña de certezas estratégicas, pero el peligro de esa claridad es la complacencia. Después de semanas analizando la complejidad técnica de Gentera y las reglas de negocio que rigen la capacitación, el equipo corría el riesgo de saltar directamente a la solución más lineal: un espejo digital del Excel actual. Como responsable del diseño, sabía que si no forzaba una fase de divergencia agresiva, terminaríamos construyendo una herramienta funcional pero carente de alma y agilidad. Mi razonamiento fue claro: antes de cerrar el diseño en una estructura rígida, necesitábamos "ensanchar" el embudo de posibilidades. No buscábamos la pantalla perfecta, buscábamos romper el modelo mental de "celdas y columnas" para entrar en el de "flujos y experiencias".

Para lograrlo, transformé el ambiente. Ya fuera en las pizarras físicas de la sala o configurando un tablero de FigJam, el objetivo era crear un espacio de seguridad psicológica donde la factibilidad técnica no fuera un freno inicial, sino un horizonte. Reuní al equipo de Dacodes —incluyendo al Tech Lead y a perfiles de Backend y Frontend— junto a Rodrigo, nuestro PM. Mi intención al involucrar a ingeniería desde este segundo exacto no era que nos dijeran qué "no" se podía hacer, sino que absorbieran el problema desde su raíz creativa. Si íbamos a innovar en la automatización de la segmentación, necesitaba que ellos vieran la intención detrás de cada trazo.

#### Activación del pensamiento lateral: El ritual del calentamiento

Inicié la sesión con un bloque de 10 minutos dedicado exclusivamente a despojar al equipo de sus sesgos profesionales. Es un paso que muchos omiten por considerarlo "poco productivo", pero en mi experiencia, es el que garantiza que las ideas posteriores no sean tímidas. Ejecuté un ejercicio de **Crazy 8s** aplicado a un objeto aleatorio. Les pedí que dibujaran ocho formas distintas de mejorar un paraguas o que "dibujaran su desayuno" en un minuto por sección. 

Este calentamiento no es un juego; es una maniobra técnica para activar el pensamiento lateral y silenciar al crítico interno. Al ver a un desarrollador senior dibujando un desayuno minimalista, el nivel de tensión por la "perfección técnica" desaparece. El entorno quedó listo: post-its virtuales, rotuladores listos y una regla de oro: la cantidad sobre la calidad. Estábamos ahí para generar volumen, no para pulir píxeles.

#### Destilando el dolor de Carlos: De la "Plantilla ADN" a la pregunta de diseño

Una vez activados, pasamos a la fase de **Formulación de Preguntas How Might We (HMW)**. Mi objetivo aquí fue traducir los hallazgos forenses de la investigación en retos accionables. Tomé como base los insumos que habíamos recolectado sobre Carlos, nuestro Administrador de Capacitación, y su calvario diario con la carga de datos. 

Nos centramos en el bloque de **Automatización y Precisión de Datos**. La pregunta que lanzamos al equipo fue punzante: *“¿Cómo podríamos hacer que el proceso de carga, limpieza y cruce de la plantilla de ADN sea casi instantáneo y libre de errores para Carlos?”*. No hablábamos de una subida de archivos estándar; hablábamos de neutralizar la ansiedad que le produce a Carlos el "Gerente Multiproducto" o los casos de reingresos que hoy le quitan horas de sueño. Formulamos retos para asegurar que las reglas de negocio complejas se ejecutaran de forma invisible, permitiendo que Carlos solo tuviera que intervenir en las excepciones, minimizando su carga cognitiva al máximo.

#### Diseñando para Ana y David: Visibilidad y movilidad

No podíamos olvidar el otro extremo del ecosistema: la Colaboradora y el Líder. Para Ana, nuestra "Colaboradora Entusiasta", la tensión era la incertidumbre. Nos preguntamos: *“¿Cómo podríamos presentar su ruta de capacitación de una manera que sea amigable de un vistazo?”*. Aquí es donde el razonamiento senior se separa del junior: no pensamos solo en una web, pensamos en el ecosistema de Gentera. Planteamos cómo integrar notificaciones proactivas por **WhatsApp y Teams** para que Ana nunca se sintiera perdida en su progreso.

Para David, el Gerente de Oficina, el reto era la autonomía. Formulamos preguntas orientadas a darle una visión consolidada de su equipo en segundos, sin que tuviera que perseguir a nadie con correos o pedir reportes manuales. Queríamos que David pudiera identificar a un colaborador en riesgo de atraso con la misma facilidad con la que revisa su agenda. Estas preguntas HMW actuaron como nuestra brújula; si un boceto no respondía a una de estas interrogantes, se descartaba de inmediato.

#### La presión del Crazy 8s: 8 minutos para 8 visiones

Con las preguntas HMW pegadas en la parte superior de nuestra vista, entramos en la **Ideación Individual Silenciosa**. Apliqué la técnica de **Crazy 8s** para los flujos más críticos, como el Dashboard de Carlos y la visualización de la ruta de Ana. Es un momento de alta intensidad: doblar la hoja en ocho secciones y dedicar exactamente un minuto por idea. 

> "El valor de esta técnica no está en la belleza del dibujo, sino en la desesperación del cuarto minuto. Cuando se te acaban las ideas obvias, el cerebro se ve obligado a buscar estructuras alternativas."

Durante estos bloques, exploramos layouts radicalmente distintos. Cuestionamos si la navegación debía ser un menú lateral persistente o una estructura superior más limpia. Probamos disposiciones de tarjetas de información frente a tablas dinámicas simplificadas. El foco fue estrictamente funcional: ¿qué información es prioritaria?, ¿dónde reside la acción principal? Usamos formas básicas y texto simple, huyendo de cualquier detalle visual que pudiera distraernos del flujo lógico.

#### Reflexión sobre la convergencia y el aporte técnico

Al finalizar los ciclos de bocetaje, realizamos un **Affinity Clustering**. Fue revelador ver cómo, a pesar de la divergencia, empezaron a emerger patrones de solución consistentes. La presencia de los desarrolladores fue vital aquí; mientras agrupábamos ideas similares, el Tech Lead pudo señalar qué aproximaciones de automatización de la "Plantilla ADN" eran más robustas desde la arquitectura de datos, permitiéndonos refinar los conceptos sin matar la chispa creativa.

Esta sesión no solo nos entregó una colección de bocetos; nos dio un lenguaje común. Dejamos de hablar de "la plataforma" para hablar de "la solución que libera a Carlos de la revisión manual". Habíamos transformado la incertidumbre en un conjunto de conceptos priorizados, listos para ser refinados.


Al cerrar la sesión, me quedé observando la pared llena de bocetos y noté algo inquietante: aunque teníamos ideas brillantes para las pantallas individuales, la conexión entre el Dashboard de Carlos y la respuesta automática en Teams de Ana todavía se sentía fragmentada. Teníamos las piezas del rompecabezas, pero el pegamento lógico que las unía aún era invisible. El desafío inmediato era llevar estos trazos rápidos a una estructura de **BOCETAJE DE BAJA FIDELIDAD Y EXPLORACIÓN DE LAYOUTS**, donde cada interacción tendría que demostrar que no solo era una buena idea, sino una pieza funcional de un sistema complejo que no permite errores de navegación.

### Parte 3: Bocetaje de Baja Fidelidad y Exploración de Layouts

Tenía los "How Might We" pegados en la pared y una pila de hojas en blanco sobre la mesa. El aire en la sala había cambiado; ya no estábamos en la fase de teorizar sobre los problemas de Gentera, sino en el momento exacto en que las ideas abstractas debían tomar forma física. Sentí esa presión familiar: el riesgo de saltar demasiado pronto a la alta fidelidad y enamorarnos de una estética que aún no tenía cimientos lógicos. Como diseñador, sabía que si abría Figma en ese momento, me perdería en el espaciado de los píxeles y olvidaría que el verdadero problema de Carlos no era el color de un botón, sino la fragmentación de sus datos.

#### La transición del post-it al trazo crudo

Mi primer movimiento táctico fue alejar al equipo de las pantallas. Necesitábamos una fase de divergencia pura donde la cantidad superara a la calidad. Mi razonamiento era simple: el bocetaje rápido es la forma más barata de fallar. Estábamos diseñando el sistema GAC, un ecosistema que debía conectar a cuatro perfiles con necesidades opuestas, y necesitaba encontrar el "pegamento lógico" que los uniera antes de preocuparme por el UI Kit.

Me enfoqué en la estructura de navegación y en los layouts básicos. No quería distracciones visuales; quería ver flujos. Si una idea no funcionaba en blanco y negro, con rectángulos y líneas cruzadas, no iba a funcionar con sombras y gradientes. Esta etapa de **Bocetaje de Baja Fidelidad** fue el filtro donde descartamos layouts complejos que, aunque se veían "modernos", habrían añadido una carga cognitiva innecesaria a usuarios como Elena, que necesita gestionar su agenda entre clases, o David, que solo tiene treinta segundos para revisar el estatus de su equipo.

#### El ritual del Crazy 8s: forzando la disrupción

Para romper el hielo y forzar al cerebro a salir de las soluciones obvias, implementé la técnica de **Crazy 8s**. Es un ejercicio de resistencia creativa: doblas una hoja en ocho secciones y tienes exactamente un minuto por sección para bocetar una variación de la misma pantalla. 

Observé al equipo mientras el cronómetro corría. Los primeros dos cuadros siempre son la "solución segura", la que todos tenemos en la cabeza. Pero a partir del cuarto o quinto minuto, empieza la incomodidad, y es ahí donde surge la innovación. Forcé al equipo —incluyendo a los desarrolladores— a pensar en cómo Carlos podría visualizar la carga de la "Plantilla ADN" de ocho formas distintas. 
*   ¿Y si fuera un asistente paso a paso? 
*   ¿Y si fuera un tablero de control tipo *drag & drop*? 
*   ¿Y si fuera una interfaz conversacional?

Esta presión controlada nos permitió explorar layouts disruptivos para los flujos críticos. Mantuvimos las fichas de nuestras **User Personas** a la vista; cada trazo en el papel tenía que responder a una frustración real. Si dibujábamos un filtro, me preguntaba: "¿Esto ayuda a Carlos a encontrar a los elegibles en menos de tres clics?". Si no, el trazo se descartaba.

#### Diseñando para Carlos: El fin del rompecabezas manual

Al bocetar para Carlos, el Coordinador Detallista, mi obsesión fue la eficiencia. Él vive enterrado en Excels, así que su interfaz debía sentirse como un alivio, no como otra herramienta compleja.

Para el flujo de **Carga y Procesamiento de la Plantilla ADN**, diseñé un layout minimalista. El boceto inicial mostraba un área prominente de *drag & drop* para el archivo Excel, pero lo importante no era la carga, sino la retroalimentación. Incluí un indicador de progreso y, crucialmente, un espacio para el "Historial de Cargas" con estados claros. Carlos necesitaba saber, en el segundo uno, si el sistema había aceptado su archivo o si había errores de formato.

Pero el verdadero cambio vino con el **Dashboard de Propuesta de Grupos Automáticos**. Aquí es donde la automatización toma forma. Diseñé una vista basada en tarjetas donde los grupos se presentan ya armados por el sistema: "Básico Ventas - Región Norte", con su sede y formador sugerido. 
*   **La maniobra técnica:** Añadí un botón de "Generar Grupos" que iniciara este proceso automático. 
*   **El razonamiento:** Quería que Carlos sintiera que el rompecabezas se armaba solo. 
*   **El control:** Para no quitarle autonomía, boceté una vista de detalle donde, al hacer clic en una tarjeta, pudiera ajustar participantes o mover a alguien de grupo con un simple check. Si un grupo excedía el cupo, el boceto incluía una alerta visual con sugerencias de "Fusionar" o "Dividir". Estábamos transformando su trabajo de "constructor" a "curador".

#### El mapa de Ana: Transformando la incertidumbre en progreso

Para Ana, la Colaboradora, el desafío era motivacional. Su punto de dolor era no saber dónde estaba parada en su carrera dentro de Gentera. Al bocetar su **Dashboard Personal**, rechacé de inmediato la idea de una lista de cursos aburrida.

En su lugar, tracé una **Ruta de Capacitación visual**: una línea de tiempo interactiva con hitos representados por círculos (Básico, Intermedio, Avanzado). Era un mapa, no una tarea. 
*   Incluí un indicador porcentual de avance muy grande en la parte superior para dar una sensación de logro inmediato. 
*   Debajo, boceté secciones de "Próximos Cursos" con detalles mínimos pero vitales: fecha, hora y sede. 

Mi razonamiento senior aquí fue que Ana necesita ver el futuro. Al visualizar su ruta completa, eliminamos la ansiedad del "qué sigue" y convertimos la capacitación en un camino tangible. Si ella recibe una notificación en Teams (que también bocetamos como un mensaje conciso con un enlace directo), el destino final siempre es este mapa de progreso.

#### Herramientas de decisión para David y Elena

Cuando llegamos a los perfiles de David (Líder) y Elena (Formadora), el enfoque cambió de la motivación a la utilidad pura. 

Para David, diseñé un **Dashboard de Equipo** que funcionara bajo la lógica del "escaneo rápido". Utilicé un sistema de "semáforos" visuales. En el boceto, cada colaborador tiene un código de color: verde si va al día, amarillo si tiene pendientes y rojo si está retrasado. David no tiene tiempo para leer reportes; necesita saber a quién tiene que llamar hoy mismo para ofrecerle apoyo. Este layout no es solo un repositorio de datos, es una herramienta de toma de decisiones en tiempo real.

Para Elena, la Formadora, me enfoqué en eliminar la burocracia. Su gran dolor era el pase de lista manual y el reporte posterior.
*   Boceté una **Agenda Visual** con códigos de colores por tipo de curso, para que supiera de un vistazo si su día era de "Ventas" o "Inducción".
*   La pieza clave fue la **Tabla Digital de Asistencia**. En lugar de hojas de papel, diseñé una interfaz con casillas para marcar asistencia con un solo clic desde una tablet o móvil. 
*   Añadí un botón de "Exportar a Excel" como red de seguridad, sabiendo que la transición digital total en Gentera requiere respetar ciertos procesos legados mientras los optimizamos.

#### La validación de la lógica antes del píxel

Al final de la sesión, teníamos una colección de bocetos que, aunque rudimentarios, eran densos en información y lógica de negocio. Cada uno incluía anotaciones técnicas en los márgenes explicando por qué un filtro estaba arriba y no a la derecha, o qué activaba una alerta de "Gerente Multiproducto".

> **Insight Senior:** El valor de esta baja fidelidad no es solo la rapidez. Es que permite a los stakeholders y SMEs (Subject Matter Experts) como Carlos o Lalo opinar sobre la funcionalidad sin distraerse por si el azul es muy oscuro o si la tipografía les gusta. Validamos la arquitectura de la información y el flujo de trabajo en su estado más puro. 

Esta fase de bocetaje nos permitió blindar la solución. Sabíamos que los layouts funcionaban porque respondían directamente a los requerimientos técnicos y a las necesidades humanas detectadas en la investigación. Teníamos el esqueleto; ahora podíamos empezar a pensar en la piel.


Al revisar la pared llena de bocetos refinados, me di cuenta de que teníamos demasiadas buenas ideas compitiendo por el mismo espacio. Aunque cada layout resolvía un problema individual, la integración total del sistema GAC exigía una poda selectiva para no terminar con un producto inflado y confuso. El desafío inmediato era pasar de la abundancia de la creación a la disciplina de la **CONVERGENCIA: CRÍTICA CONSTRUCTIVA Y PRIORIZACIÓN DE CONCEPTOS**, donde tendríamos que defender cada decisión frente a la mirada crítica del equipo técnico y los líderes de negocio.

### Parte 4: Convergencia Crítica Constructiva y Priorización de Conceptos

#### La disciplina de la poda: Del caos creativo a la estrategia

Al terminar la sesión de bocetaje, la pizarra —física y digital— era un testimonio del volumen de ideas que habíamos generado. Teníamos decenas de "Crazy 8s" y "Solution Sketches" compitiendo por atención. Como diseñador, ese es el momento de mayor peligro: es fácil enamorarse de una solución ingeniosa que, en la práctica, solo añade ruido al flujo de trabajo de Gentera. Mi responsabilidad en ese punto no era elegir lo más "innovador", sino ejecutar una poda selectiva. Debía pasar de la abundancia de la divergencia a la disciplina de la **convergencia**, donde cada trazo debía justificar su existencia frente a la fricción operativa que buscábamos eliminar.

La transición no fue solo un cambio de paso en el cronograma; fue un ejercicio de honestidad brutal. Teníamos que decidir qué conceptos tenían el potencial de convertirse en el núcleo del sistema GAC y cuáles eran simplemente distracciones. Sabía que si intentábamos construir todo lo que habíamos dibujado, terminaríamos con un producto inflado y difícil de mantener. La pregunta que guiaba mis ojos mientras recorría los bocetos era una sola: "¿Esto realmente le devuelve tiempo a Carlos o solo le da una herramienta más que gestionar?".

#### El orden en el desorden: Affinity Clustering como diagnóstico

Para procesar este volumen de información, organicé una dinámica de **Affinity Clustering**. No se trataba simplemente de amontonar papeles similares; era un ejercicio forense para detectar patrones de pensamiento que el equipo había volcado de manera casi inconsciente. En herramientas como FigJam, empezamos a arrastrar los bocetos, agrupándolos por temas emergentes que iban más allá de la simple funcionalidad.

Identifiqué tres grandes pilares que se repetían en las propuestas más sólidas:
*   **Automatización con Supervisión Humana:** Bocetos que buscaban eliminar la carga manual pero mantenían a Carlos como el "piloto" que valida antes de despegar.
*   **Gamificación del Progreso:** Ideas para Ana que transformaban una lista aburrida de cursos en un recorrido visual con hitos claros.
*   **Visibilidad 360°:** Layouts para líderes que priorizaban el estatus del equipo mediante semáforos visuales, eliminando la necesidad de preguntar "cómo vamos".

Este proceso de agrupación nos permitió ver la plataforma como un ecosistema, no como una serie de pantallas aisladas. Al dar nombre a estos grupos, eliminamos redundancias y enfocamos nuestro esfuerzo de diseño en lo que realmente movía la aguja para el negocio. Fue aquí donde la idea de una "Única Fuente de Verdad" dejó de ser un deseo del brief para convertirse en una estructura tangible en nuestros bocetos.

#### La crítica como herramienta de precisión: Me gusta, Desearía, Qué tal si

Con los grupos definidos, sometí los conceptos a una sesión de crítica constructiva utilizando el marco **"Me gusta / Desearía / Qué tal si"**. Fue una conversación tensa pero necesaria. Mi enfoque fue defender la **Simplicidad Radical**. Aunque las reglas de negocio de Gentera son un laberinto de excepciones —como la lógica de "Gerente Multiproducto" o los criterios para "Asesor CIE"—, la interfaz para el usuario no tenía por qué reflejar esa complejidad.

> **Insight Senior:** El buen diseño de producto es como un iceberg; el 90% de la complejidad (las reglas, los cruces de bases de datos, las exclusiones) debe estar bajo el agua, en el backend. Lo que el usuario ve debe ser limpio, accionable y libre de fricción cognitiva.

Durante la sesión, surgieron puntos críticos que anoté con precisión:
*   **"Me gusta"**: La visibilidad inmediata de las inconsistencias detectadas tras cargar la plantilla ADN. Fue un acierto unánime.
*   **"Desearía"**: Que el sistema no solo señalara el error, sino que sugiriera la corrección basándose en el histórico. Por ejemplo, si un colaborador aparece con un puesto inexistente, el sistema debería proponer el más cercano.
*   **"¿Qué tal si?"**: Previsualizamos los mensajes de WhatsApp antes del envío masivo. Carlos temía que un error en una variable de personalización ("Hola [Nombre]") arruinara la comunicación con cientos de colaboradores.

Esta dinámica nos obligó a confrontar la viabilidad técnica desde el inicio. No podíamos proponer soluciones que el equipo de desarrollo no pudiera sostener o que dependieran de datos que Gentera aún no tenía centralizados.

#### Los pilares ganadores: Motores de eficiencia y motivación

Tras la crítica, la selección de los conceptos prioritarios fue casi natural. Decidí que el proyecto se articularía en torno a dos grandes motores que atacarían los puntos de dolor más agudos detectados en la Fase 1.

1.  **El Motor de Automatización de Listas con Revisión Asistida (para Carlos):**
    Este concepto mataba de raíz la tarea más tediosa: el procesamiento manual de Excels. Diseñamos una interfaz con capacidad de **Drag & Drop** para la plantilla, seguida de un dashboard de resumen post-procesamiento. Lo más valioso aquí no era la carga en sí, sino la transparencia: el sistema expondría por qué un colaborador fue incluido o excluido (ej. "Identificado como Gerente Multiproducto por presencia de Asesor CIE en su oficina"). Esta visibilidad es lo que construye confianza en la automatización.

2.  **Mi Ruta de Capacitación: El Mapa Interactivo (para Ana):**
    Para la colaboradora, descartamos la idea de una tabla estática. El concepto ganador fue un mapa visual y motivador. Transformamos la ruta semestral en una línea de tiempo con hitos marcados como "completados", "en progreso" o "pendientes". Incluimos un indicador de porcentaje de avance que Ana pudiera consultar en segundos desde su móvil. El objetivo era empoderarla y reducir la ansiedad que genera no saber "qué sigue" en su desarrollo profesional.

#### El balance del control: Por qué el Drag & Drop es una decisión estratégica

Una de las decisiones más importantes que tomé durante esta fase fue no automatizarlo todo al 100%. Tras analizar los bocetos de segmentación de grupos, me di cuenta de que la realidad operativa de las sedes y los formadores a veces supera cualquier algoritmo. Por eso, defendí la inclusión de una interfaz de **Ajuste Visual**.

Propuse que, aunque el sistema sugiriera los grupos óptimos, Carlos tuviera la capacidad de "revisar, ajustar y anular" decisiones mediante una funcionalidad de **Drag & Drop**. Si un grupo se quedaba corto de cupo o si un formador tenía un imprevisto, Carlos podría mover participantes entre tarjetas de forma ágil. 

Esta decisión es vital: la automatización entrega velocidad, pero la flexibilidad entrega control. En un entorno tan dinámico como el de Gentera, un sistema rígido termina siendo abandonado. Al permitir la intervención humana en casos excepcionales, blindamos la adopción de la plataforma.

#### Blindando el futuro: Escalabilidad y deuda de diseño

Finalmente, mi reflexión senior se centró en la escalabilidad. Gentera está en constante evolución; hoy la ruta de capacitación tiene 12 niveles, pero mañana podrían ser 6. Me aseguré de que las estructuras que priorizamos fueran lo suficientemente elásticas para absorber estos cambios sin necesidad de rediseñar todo el sistema.

Cada concepto seleccionado fue evaluado bajo la lente de la escalabilidad técnica y de diseño. No queríamos que el éxito de hoy se convirtiera en la deuda técnica de mañana. Cerramos la sesión con una colección de conceptos que no solo eran visualmente prometedores, sino estratégicamente sólidos. Teníamos el "qué" y el "por qué". Ahora, el desafío era llevar estos conceptos frente a los líderes de Gentera para asegurar que nuestra visión estaba alineada con la suya.


Teníamos los conceptos ganadores, pero me quedaba una inquietud: ¿cómo reaccionaría Lalo ante la idea de devolverle control manual a Carlos en un proyecto que nació bajo la bandera de la automatización total? Sabía que defender el equilibrio entre el algoritmo y el criterio humano sería el punto de mayor tensión en nuestra **VALIDACIÓN ESTRATÉGICA CON STAKEHOLDERS**. El éxito de la plataforma dependía de que ellos compraran no solo la solución, sino la filosofía de diseño que la sustentaba.

### Parte 5: Validación Estratégica con Stakeholders

Entré a la sesión de Google Meets con una mezcla de anticipación y cautela estratégica. Tenía frente a mí a Lalo, el líder del proyecto por parte de Gentera, y a Carlos, el administrador que vive día a día el calvario de las plantillas de Excel. Sabía que presentar bocetos de baja fidelidad ante perfiles de negocio es siempre un terreno minado: si no logras elevar la conversación por encima de la estética de los trazos a mano o los cuadros grises, corres el riesgo de que el feedback se pierda en "esto se ve muy simple" o "ese botón está muy grande". Mi objetivo no era que aprobaran dibujos, sino que validaran la ingeniería de una solución que prometía resolver un rompecabezas operativo que hoy les quita horas de sueño.

La transición desde la priorización interna que habíamos hecho en el equipo de diseño hacia esta validación externa fue un movimiento calculado. No podíamos permitirnos avanzar hacia la complejidad técnica de los **User Flows** detallados o la **Arquitectura de Información** sin antes confirmar que nuestra interpretación de los "puntos de dolor" era exacta. Sabía que si lograba que Lalo y Carlos compraran la lógica del sistema en su estado más puro y descarnado —el boceto—, el resto del proceso de diseño tendría una base de hormigón armado.

#### La narrativa como escudo: El Storyboarding de validación

Para evitar que la sesión se descarrilara hacia críticas visuales irrelevantes, decidí que no presentaría pantallas aisladas. Siguiendo mi metodología de trabajo, construí un **storyboard narrativo** que envolviera cada concepto en un escenario real. Antes de mostrar el primer boceto, establecí el contexto: "Imagina, Carlos, que es jueves por la mañana y tienes que generar las listas para la capacitación de la próxima semana". Esta técnica de *storytelling* es fundamental; obliga al stakeholder a ponerse en los zapatos del usuario y a evaluar la funcionalidad basándose en la utilidad, no en el gusto personal.

Preparé tres escenarios críticos, seleccionando los 2-3 conceptos más prometedores que habíamos filtrado en la fase de ideación. Mi razonamiento fue el siguiente: si presentaba demasiadas opciones, saturaba la toma de decisiones; si presentaba solo una, parecía una imposición. El punto dulce era mostrar caminos que atacaran los **How Might We** que habíamos definido previamente, como "¿Cómo podríamos hacer que el proceso de identificación de candidatos sea casi instantáneo?". Utilicé estos HMW como anclas durante la presentación para recordarles constantemente qué problema específico estábamos intentando resolver con cada trazo que veían en pantalla.

#### Desglosando el ecosistema: Soluciones por rol

Cuando compartí pantalla para mostrar los conceptos agrupados por roles, la dinámica de la reunión cambió. Empezamos con Carlos, el corazón operativo de GAC. Le presenté el **"Motor de Automatización de Listas con Revisión Asistida"**. La idea era simple pero potente: un sistema que ingiere la plantilla de Excel, identifica automáticamente quién es elegible según las reglas de negocio y separa las inconsistencias. Complementé esto con el **"Generador de Grupos Óptimos"**, una herramienta que propone la segmentación de grupos basándose en puestos y subdirecciones, eliminando el trabajo manual de "cortar y pegar" que Carlos hace hoy.

Para los otros actores del ecosistema, la propuesta fue igualmente quirúrgica:

*   **Para Ana (Colaboradora):** Presenté "Mi Ruta de Capacitación" como un mapa interactivo. No era una lista de cursos, sino una visualización motivadora de su progreso. Incluí la idea de las **Notificaciones Inteligentes** con archivos **.ical** adjuntos para que, con un solo clic, la capacitación quedara agendada en su calendario de Outlook.
*   **Para David (Líder):** Mostré un **Dashboard de Equipo** con visión 360°. El concepto clave aquí era el *drill-down*: David podría ver un semáforo general del avance de su equipo y, con un clic, bajar al detalle de un colaborador específico para entender por qué se había estancado.
*   **Para Elena (Formadora):** Propuse una **Agenda de Cursos** centralizada. El gran cambio aquí era la digitalización de las listas de asistencia; Elena ya no tendría que cargar papeles, sino registrar el avance directamente en la plataforma, ganando trazabilidad inmediata.

#### El "sentimiento de alivio" y el rigor de las restricciones

La reacción de los stakeholders fue el primer gran indicador de éxito del proyecto. Lalo y Carlos no solo entendieron los bocetos, sino que expresaron lo que anoté en mis notas como un "claro sentimiento de alivio". Ver la **"Central de Comunicaciones Unificada"** —que automatiza el envío de invitaciones por Teams y Outlook— hizo que Carlos la calificara literalmente como "un sueño". En ese momento supe que habíamos dado en el clavo con la propuesta de valor.

Sin embargo, como diseñador senior, mi trabajo no es solo celebrar las victorias, sino gestionar las tensiones. Carlos, con el escepticismo que da la experiencia en la trinchera, puso sobre la mesa preocupaciones vitales. Enfatizó que el sistema no solo debe detectar errores en la plantilla (como un ID de colaborador mal escrito), sino que debe agrupar esos errores y sugerir correcciones. No quería solo un semáforo rojo; quería una herramienta que le ayudara a arreglar el problema rápido.

También surgió una discusión profunda sobre la transparencia de las reglas de negocio. Lalo fue muy claro: si el sistema excluye a un colaborador de una ruta de "Gerente Multiproducto", el administrador debe poder ver el "por qué" detrás de esa decisión algorítmica. Esta necesidad de **transparencia en la lógica** se convirtió en un requerimiento de diseño inmediato: cada decisión automatizada debía tener un rastro de auditoría visible para el usuario experto.

#### El equilibrio entre el algoritmo y el criterio humano

Uno de los puntos de mayor fricción y posterior acuerdo fue el nivel de automatización. Aunque el "Generador de Grupos Óptimos" fue recibido con entusiasmo, defendí la necesidad de mantener un **control manual** significativo. Propuse una interfaz de **"Drag & Drop" (arrastrar y soltar)** para que Carlos pudiera mover colaboradores entre grupos después de que el sistema hiciera su propuesta inicial. 

> **Insight Senior:** El éxito de una herramienta de automatización en entornos corporativos complejos no radica en reemplazar al humano, sino en crear una "Revisión Asistida". Mi apuesta estratégica fue darle a Carlos un "exoesqueleto" digital: que el sistema haga el 90% del trabajo pesado y repetitivo, pero que deje el 10% de las decisiones ambiguas o excepcionales en manos de quien realmente conoce el negocio. Esta validación de la interfaz *drag & drop* fue crucial para ganar su confianza.

Finalmente, cerramos la sesión abordando la incertidumbre sobre la integración con WhatsApp. Aunque es una funcionalidad deseada, Lalo reconoció que aún debemos definir la fuente oficial de los números telefónicos y las políticas de privacidad de Gentera. Decidimos mantenerlo en el alcance como una funcionalidad "Should Have" pero con una nota de precaución técnica sobre la disponibilidad de los datos.

Salí de la reunión con una hoja de ruta blindada. Teníamos la alineación estratégica total con la visión de transformación digital de Gentera. El acuerdo fue unánime: integraríamos el feedback sobre la gestión de errores y la transparencia de reglas, y procederíamos de inmediato a estructurar la **Arquitectura de Información** y los **User Flows**. La base estaba puesta; ahora tocaba construir la ingeniería del detalle.


A pesar del alivio compartido en la sesión, me quedó una duda técnica rondando la cabeza: ¿cómo vamos a estructurar un inventario de contenido que soporte cuatro roles tan distintos sin que la navegación se convierta en un laberinto? La validación de los conceptos fue un éxito, pero la verdadera prueba de fuego vendrá al intentar mapear cada interacción en la **ARQUITECTURA DE INFORMACIÓN: ESTRUCTURANDO EL ECOSISTEMA GAC**. Necesito asegurar que la transición entre el "Dashboard" del líder y el "Kardex" del colaborador sea tan fluida que el usuario nunca sienta que cambió de plataforma.

### Parte 6: Arquitectura de Información Estructurando El Ecosistema Gac

#### El esqueleto invisible tras la validación

La euforia de la sesión de validación con Lalo y Carlos me dejó una certeza agridulce: teníamos el "qué", pero el "cómo" seguía siendo un rompecabezas de piezas dispersas. Habíamos acordado automatizar la segmentación y dar trazabilidad total, pero en mi cabeza, la plataforma GAC aún se sentía como una masa amorfa de datos. Tenía frente a mí el reto de transformar esa visión estratégica en una estructura funcional que no colapsara bajo el peso de cuatro roles de usuario con necesidades diametralmente opuestas. Sabía que, si no definía una **Arquitectura de Información (AI)** blindada, el sistema terminaría siendo un laberinto de menús donde Carlos se perdería buscando un reporte y Ana abandonaría su capacitación por pura frustración cognitiva.

Mi razonamiento en este punto fue puramente estructural. No podíamos permitirnos el lujo de diseñar pantallas basándonos en la intuición. Necesitaba construir la columna vertebral de la plataforma: una jerarquía que no solo resolviera el caos actual de archivos Excel y procesos manuales, sino que fuera lo suficientemente elástica para soportar la futura transición de 12 a 6 niveles de capacitación que Gentera ya tenía en el radar. La AI no es solo organizar carpetas; es diseñar el mapa mental que el usuario va a recorrer.

#### La auditoría forense de datos y funciones

Lo primero que hice fue bajar al fango de los datos. Realicé un levantamiento exhaustivo, casi forense, de cada átomo de información que la plataforma debía albergar. No me limité a listar funciones; analicé la interdependencia de los **26 requerimientos funcionales (RF-GAC-001 al 026)** que habíamos mapeado. Mi objetivo era entender el ciclo de vida de la información: desde que una "Plantilla ADN" entra al sistema hasta que se convierte en una invitación de WhatsApp para un colaborador.

Estructuré este inventario en ocho módulos críticos, asegurándome de que cada dato tuviera un propósito claro:
*   **Gestión de Datos (RF-GAC-001 al 004):** Aquí conecté la carga de la plantilla con el "Reporte de Inconsistencias". Entendí que para Carlos, el valor no está en subir el archivo, sino en diagnosticar qué falló (nuevos ingresos, reingresos o cambios de puesto) antes de avanzar.
*   **Segmentación y Grupos (RF-GAC-005 al 008):** Mapeé la lógica del "Gerente Multiproducto" y las reglas de cupos. Sabía que esta era la zona de mayor carga cognitiva, por lo que debía estar aislada pero accesible.
*   **Trazabilidad y Reporteo (RF-GAC-012 al 020):** Definí la jerarquía del "Kardex" del colaborador y los dashboards de indicadores clave (KPIs) para el administrador.

> **Trade-off de diseño:** Elegí tratar la "Asignación de Formadores" como un módulo independiente de la "Gestión de Grupos", a pesar de que operativamente ocurren de forma secuencial. Lo hice porque el responsable de asignar (Líder Operativo) no siempre es quien genera la lista (Carlos). Separarlos en la arquitectura evitaba que un rol viera ruido innecesario del otro.

#### El Sitemap: Un login, cuatro mundos

Con el inventario en la mano, tracé el **Mapa del Sitio**. Mi decisión estratégica fue utilizar el **Login (RF-GAC-024)** no solo como una puerta de seguridad (usando Número de Empleado y Fecha de Nacimiento), sino como un filtro inteligente. La plataforma debía mutar según quién entrara. No quería un sitio web con muchas secciones; quería cuatro experiencias de usuario distintas conviviendo en el mismo dominio.

Diseñé la jerarquía ramificando los dashboards:
1.  **Para Carlos (Administrador):** El foco es la eficiencia operativa. Su dashboard es un centro de control con acceso directo a la carga de datos y las propuestas de grupos automáticas.
2.  **Para Ana (Colaboradora):** La prioridad es la claridad y la motivación. Su entrada principal es "Mi Ruta de Capacitación", un mapa visual que elimina cualquier duda sobre su progreso.
3.  **Para David (Líder):** Su mundo se resume en "Mi Equipo". Necesitaba que, de un vistazo, pudiera identificar colaboradores en riesgo sin navegar por tablas infinitas.
4.  **Para Elena (Formadora):** Su arquitectura es logística. Su prioridad es "Mi Agenda" y el registro de asistencia en tiempo real.

Esta segmentación fue mi blindaje contra el desorden. Al definir vistas filtradas por rol, reduje la superficie de error y aseguré que la información crítica siempre estuviera a máximo dos clics de distancia.

#### Navegación multidimensional y feedback de ubicación

Para que este mapa fuera navegable, implementé un modelo de navegación que yo llamo "de tres capas". Necesitaba que el usuario siempre supiera dónde estaba, de dónde venía y qué podía hacer a continuación, cumpliendo con el principio de **Findability**.

*   **Navegación Primaria (Global):** Opté por un **Menú Lateral Persistente (Sidebar)** colapsable. En una herramienta de gestión con tantos datos, el menú superior se queda corto. El sidebar permite una jerarquía vertical clara y deja el área central libre para las tablas densas de Carlos o el mapa visual de Ana.
*   **Navegación Secundaria (Local):** Utilicé **Pestañas (Tabs)** dentro de los módulos. Por ejemplo, en "Gestión de Datos", Carlos puede alternar entre "Cargar Plantilla" e "Historial de Cargas" sin cambiar de contexto mental. Es una forma de agrupar tareas relacionadas bajo un mismo techo visual.
*   **Navegación Contextual:** Aquí es donde la AI se vuelve "inteligente". Añadí botones de acción directa donde la tarea es inminente, como el botón "Añadir a Calendario (.ical)" en el detalle de curso de Ana, o "Exportar a Excel" en los reportes de David.

Para cerrar el círculo de confianza, incluí **Breadcrumbs (Migas de Pan)** en la parte superior. En sistemas complejos, el usuario suele sentir miedo a "romper algo" o perderse. Los breadcrumbs actúan como un hilo de Ariadna que les permite retroceder con seguridad.

#### Validación científica: Cuando los números hablan

No dejé la estructura al azar. Sometí mi propuesta a una validación rigurosa mediante **Card Sorting** y **Tree Testing**. Quería saber si mi lógica de diseñador coincidía con el modelo mental de los empleados de Gentera.

Realicé un **Card Sorting Abierto** con representantes de cada rol. Descubrí algo fascinante: mientras yo veía las "Notificaciones" como una sección independiente, los colaboradores las esperaban dentro de su perfil. Esta fricción me llevó a ajustar la AI, moviendo las preferencias de notificación hacia la configuración de cuenta y dejando solo una bandeja de alertas global.

Los resultados del **Tree Testing** (una prueba de navegación solo con texto, sin diseño) fueron la prueba de fuego:
*   **Carlos (Admin):** Logró "Cargar la plantilla semanal" con un **95% de éxito**.
*   **Ana (Colaboradora):** Encontró su progreso en la capacitación con un impresionante **98% de éxito**.
*   **David (Líder):** Identificó el avance de su equipo con un **93% de efectividad**.

Estos números no son solo estadísticas; son la validación de que las etiquetas y la jerarquía funcionaban. Me dieron la luz verde para avanzar sabiendo que la estructura era sólida antes de gastar un solo minuto en el diseño visual.

#### Labeling System: Hablando el idioma de Gentera

Finalmente, me obsesioné con el **Esquema de Etiquetado**. En Gentera, las palabras tienen peso. No podía usar términos genéricos de UX si quería que la plataforma se sintiera propia. Me alejé de la jerga técnica y adopté el vocabulario que recogí en las entrevistas de la Fase 1.

Sustituí "Dashboard de Usuario" por "**Kardex**" o "**Mi Ruta de Capacitación**". En lugar de "Subir archivo", usamos "**Subir Plantilla ADN**". Términos como "**Toques con Formador**" y "**Gerente Multiproducto**" se integraron como etiquetas oficiales. Mi lógica fue simple: si el sistema habla como ellos, la curva de aprendizaje desaparece. Cada botón fue diseñado para ser una orden clara y orientada a la acción: "Generar Grupos", "Enviar Todo", "Registrar Asistencia".

> **Reflexión Senior:** La buena arquitectura de información es, por definición, invisible. Si el usuario no se pregunta dónde está el botón, es porque la AI ha triunfado. En este proyecto, el éxito no fue crear una estructura compleja, sino lograr que un proceso que antes tomaba días de cruce manual de datos, ahora se perciba como una secuencia lógica y natural de pasos. Hemos construido un ecosistema escalable: si mañana Gentera cambia sus reglas de negocio, la estructura se ajustará sin romperse.


Con la arquitectura validada y el inventario de funciones organizado, me di cuenta de que el mapa estaba listo, pero los caminos aún no estaban trazados. Tenía la estructura de las habitaciones, pero me faltaba definir cómo se moverían los usuarios entre ellas para completar sus misiones críticas. Al mirar el flujo de Carlos para la segmentación de grupos, sentí que la verdadera complejidad no estaba en el "dónde", sino en las micro-decisiones que el sistema debe tomar en cada paso para evitar errores humanos. Era el momento de entrar en la **INGENIERÍA DE FLUJOS DE USUARIO (USER FLOWS)**, donde cada clic se convierte en una regla de negocio ejecutada.

### Parte 7: Ingeniería de Flujos de Usuario User Flows

#### De la estructura inerte al movimiento coreográfico

Tener una arquitectura de información sólida era como poseer el plano detallado de un edificio: sabía dónde estaban las habitaciones y qué contenía cada una, pero aún no había definido cómo caminarían las personas por los pasillos. En este punto, me enfrentaba a un riesgo crítico: si no diseñaba rutas quirúrgicas, el sistema GAC terminaría siendo solo un repositorio de datos más, y no la herramienta de automatización que Gentera necesitaba. Tenía que transformar el "rompecabezas" manual que Carlos resolvía cada semana en una coreografía lógica donde el peso de la decisión recayera en el sistema, no en el usuario.

Mi enfoque para esta **Ingeniería de Flujos de Usuario** fue pragmático. No me limité a trazar "caminos felices"; me obsesioné con las excepciones. En un proceso tan vivo como la capacitación, lo que rompe la experiencia no es el flujo estándar, sino el error en el dato, el cambio de última hora o la falta de cupo. Articulé seis flujos críticos que cubren desde la ingesta masiva de datos hasta el registro de asistencia en campo, asegurando que cada clic respondiera a una regla de negocio y no a una suposición estética.

#### El fin del "detective de datos": Carga y procesamiento masivo

El primer flujo que ataqué fue el de Carlos y la carga de la "Plantilla ADN". Actualmente, Carlos dedica entre 24 y 32 horas semanales a cruzar Excels manualmente; mi objetivo era pulverizar ese tiempo. Diseñé un punto de entrada directo en el dashboard de administrador con una zona de "Arrastrar y Soltar" para el archivo Excel. Al soltar el archivo, activé el requerimiento **RF-GAC-001**, donde el sistema asume la carga cognitiva de procesar miles de registros en segundos.

Lo verdaderamente senior en este flujo no es la carga en sí, sino lo que sucede cuando el dato está sucio. En lugar de arrojar un error genérico que obligara a Carlos a empezar de cero, diseñé un estado intermedio: el **Resumen de Procesamiento con Foco en Inconsistencias**. Si el sistema detecta, por ejemplo, 15 inconsistencias, no detiene el proceso; las agrupa y presenta un reporte detallado con sugerencias de corrección. Mi razonamiento fue claro: Carlos debe dejar de ser un detective que busca errores para convertirse en un supervisor que valida excepciones. Al final del flujo, el sistema actualiza la base de datos (**RF-GAC-025**) y redirige a Carlos a la segmentación, habiéndole ahorrado, según mis proyecciones, el 80% del tiempo de limpieza manual.

#### Ingeniería de segmentación: Automatización con intervención humana

Una vez que los datos están limpios, el flujo se mueve hacia la **Segmentación y Ajuste de Grupos**. Este es el núcleo más complejo de la plataforma. El sistema debe ejecutar una lógica de segmentación automática (**RF-GAC-005 al 007**) que considere variables cruzadas: puesto, subdirección, cupos de sede y la regla crítica del "Gerente Multiproducto". 

Diseñé una interfaz de "Propuestas de Grupos" donde el sistema presenta tarjetas visuales de los grupos ya armados. Sin embargo, sé por experiencia que la automatización total es un mito en procesos operativos complejos. Por eso, integré herramientas de **Arrastrar y Soltar** para que Carlos pueda mover participantes entre grupos, fusionarlos o dividirlos manualmente. Si un grupo no alcanza el cupo mínimo o excede el máximo, el sistema dispara alertas visuales inteligentes (**RF-GAC-008**) y ofrece sugerencias de acción inmediata. El valor aquí es el equilibrio: el sistema automatiza el 95% de la identificación de elegibles, pero le otorga a Carlos el control total para "apagar incendios" o gestionar casos especiales que ninguna regla de negocio podría prever.

#### Eliminando el "dolor de cabeza" de los archivos .ical

El tercer flujo que reconstruí fue el de **Comunicaciones y Notificaciones Masivas**. Carlos solía generar archivos de calendario de forma artesanal, un proceso tedioso y propenso a errores de destinatario. Tracé una "Central de Comunicaciones Unificada" que permite disparar convocatorias a través de Outlook, Teams y WhatsApp desde un solo lugar.

La maniobra clave aquí fue la **Generación Automática de Archivos .ical**. El sistema ahora crea el evento de calendario, adjunta la información del curso y lo envía masivamente al ejecutar el requerimiento **RF-GAC-021**. Incluí un paso de "Previsualización de Comunicaciones" para que Carlos pueda ver exactamente qué recibirán el colaborador y el gerente antes de dar el clic final. El punto de salida de este flujo es una pantalla de confirmación con métricas de éxito y, lo más importante, un reporte de errores de envío para gestionar direcciones inválidas o rebotes de inmediato.

#### Diseñar para la motivación: La ruta de Ana

Cambiando el foco hacia Ana, la colaboradora, mi prioridad fue la claridad y la visibilidad. Ella no necesita ver tablas de datos; necesita un mapa. Diseñé el flujo de **Consulta de Ruta y Progreso** centrado en un "Mapa Visual de Mi Ruta de Capacitación" (**RF-GAC-012**). 

Este flujo permite que Ana vea su progreso como una línea de tiempo con hitos claros y un porcentaje de avance prominente (**RF-GAC-014**). Al interactuar con cualquier hito, el sistema abre un detalle del curso con fecha, sede y temario, permitiéndole descargar su propio .ical con un solo clic. Mi decisión de diseño aquí fue transformar un proceso administrativo aburrido en una experiencia de autogestión casi gamificada, donde ella siempre sabe qué sigue y cuánto le falta para completar su desarrollo.

#### Visibilidad proactiva para el líder y el formador

Para David, el líder de equipo, diseñé un flujo de **Seguimiento y Reportes** basado en la técnica de *drill-down*. Su punto de entrada es un dashboard de equipo (**RF-GAC-017**) donde implementé "semáforos de color" para identificar instantáneamente a los colaboradores en riesgo. Si ve a alguien en rojo, puede hacer clic y entrar directamente a la ruta individual de ese colaborador. Para cerrar el ciclo, incluí un flujo de generación de reportes donde, tras aplicar filtros de oficina o estatus, David puede exportar un Excel con un par de clics, eliminando la dependencia histórica de pedir reportes manuales a recursos humanos.

Finalmente, para Elena, la formadora, el flujo se simplificó radicalmente. Ella accede a su **Calendario de Cursos Asignados** (**RF-GAC-011**) y, desde ahí, entra directamente al registro de asistencia (**RF-GAC-013**). Sustituí las listas de papel por una interfaz de casillas "Presente/Ausente" y un campo de feedback cualitativo. Al guardar, el sistema actualiza en tiempo real el progreso de los colaboradores, cerrando el círculo de trazabilidad sin que Elena tenga que enviar un solo correo de confirmación.

#### Inventario de vistas y el peso de las decisiones

Al finalizar el mapeo de estos flujos, consolidé un inventario de **14 módulos y dashboards personalizados**, que van desde la gestión de usuarios para el Super Admin hasta el monitoreo de rendimiento del sistema. Cada una de estas pantallas nació de una necesidad detectada en los flujos, asegurando que no diseñamos ni una sola vista que no tenga un propósito funcional claro.

Mis decisiones de diseño se basaron en dos pilares estratégicos: **Eficiencia Operativa** y **Reducción de Errores**. Elegí flujos asistidos por el sistema sobre procesos rígidos porque entiendo que en Gentera el valor humano es central; el sistema debe ser un soporte, no una limitación. He blindado la lógica de negocio traduciendo los requerimientos funcionales en secuencias de pasos que cualquier rol puede seguir sin entrenamiento previo.

> **Reflexión Senior:** Diseñar flujos no es dibujar flechas entre cajas; es codificar la cultura de trabajo y las reglas de negocio en una secuencia de interacciones. En este proyecto, mi mayor victoria no fue la automatización en sí, sino el diseño para la excepción. Al anticipar qué pasa cuando el Excel viene mal o cuando un grupo no se llena, he creado un sistema resiliente que protege a Carlos de la fatiga cognitiva y le devuelve el control sobre su tiempo.

**Reflexión final:**
Al concluir esta ingeniería de flujos, sentí que finalmente habíamos pasado de las ideas abstractas a un sistema que realmente "respira". Logramos destilar procesos que antes eran caóticos y manuales en rutas lógicas que reducen drásticamente la carga operativa, especialmente para el rol de administrador. Este trabajo no solo definió cómo se vería la plataforma, sino que estableció la confianza técnica necesaria para que el equipo de desarrollo supiera exactamente qué reglas de negocio debía programar en cada pantalla.