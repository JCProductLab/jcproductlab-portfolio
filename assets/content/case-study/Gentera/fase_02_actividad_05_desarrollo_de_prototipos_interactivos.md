# Fase 2: Idear y Diseñar (Ideation & Prototyping)

## Actividad_05_Desarrollo de Prototipos Interactivos

### Parte 1: Génesis Creativa Preparación y Bocetaje de Baja Fidelidad

#### El peso de la evidencia frente al papel en blanco

Teníamos sobre la mesa una montaña de hallazgos: User Personas detalladas, Journey Maps que sangraban puntos de dolor y un documento de reglas de negocio que parecía un laberinto legal. Como diseñador, conozco bien ese momento de vértigo; es el punto exacto donde la investigación termina y la responsabilidad de crear algo tangible comienza. Teníamos claro el "qué" y el "por qué", pero el "cómo" seguía siendo una abstracción. Sabía que no podíamos permitirnos el lujo de saltar directamente a Figma para pulir píxeles; el riesgo de construir una interfaz hermosa pero operativamente inútil era demasiado alto. 

Mi razonamiento en este punto de inflexión fue pragmático: necesitábamos fallar rápido y, sobre todo, barato. El bocetaje de baja fidelidad no es un ejercicio artístico, es un filtro de realismo. Decidí que antes de tocar un solo componente de alta fidelidad, debíamos estresar la lógica del sistema GAC (Gestión Automatizada de la Capacitación) mediante trazos rápidos. El objetivo era materializar conceptos como la "segmentación automática" en flujos que Carlos o Ana pudieran entender sin distracciones estéticas. Era el momento de transformar la teoría en una experiencia cinética, asegurando que cada decisión de interfaz fuera una respuesta directa a una métrica de éxito o a una frustración documentada en la fase anterior.

#### El ritual de los insumos: Blindando el enfoque humano

Para que la sesión de ideación no se descarrilara en ocurrencias aleatorias, impuse una disciplina estricta en la preparación del entorno. No empezamos a dibujar hasta que tuve desplegados, como si de un mapa de guerra se tratara, los insumos críticos de la Fase 1. Coloqué las fichas de nuestras User Personas —Carlos el Administrador, Sofía la Colaboradora y Ricardo el Líder— en el centro visual de nuestro espacio de trabajo, ya fuera físico o digital en Miro. Mi intención era clara: cada vez que alguien propusiera un botón o un gráfico, debía ser capaz de justificar cómo eso aliviaba una frustración de Carlos o motivaba a Sofía.

Articulé esta preparación cruzando tres ejes fundamentales:
*   **Los Journey Maps "As-Is" y "To-Be":** Los usamos como brújula para identificar dónde el sistema actual colapsaba y dónde nuestra propuesta debía inyectar fluidez.
*   **Reglas de Negocio de Gentera:** Mantuve este documento abierto para actuar como el "abogado del diablo". Si un boceto ignoraba la lógica de jerarquías o los tiempos de carga de la plantilla ADN, lo descartábamos de inmediato.
*   **Métricas de Éxito:** Cada trazo debía apuntar a la reducción del tiempo de segmentación o al aumento de la trazabilidad. 

Esta fase de preparación no fue un trámite; fue el blindaje estratégico que aseguró que el diseño posterior no fuera un ejercicio de vanidad, sino una herramienta de precisión operativa.

#### La poda estratégica: Priorizar para no naufragar

Uno de los mayores errores que he visto en proyectos de esta envergadura es intentar bocetarlo todo a la vez. Con GAC, la complejidad era tal que podíamos perdernos en flujos secundarios durante semanas. Tomé la decisión de aplicar una poda quirúrgica al alcance de la sesión. Prioricé los flujos que concentraban el 80% de la incertidumbre técnica y el valor de negocio.

Me enfoqué obsesivamente en tres pilares:
1.  **La carga y procesamiento de la plantilla ADN:** Sabíamos que si Carlos no confiaba en cómo el sistema leía sus datos de Excel, el resto de la plataforma no importaría.
2.  **La segmentación automática de grupos:** Era el "corazón" de la automatización y donde las reglas de negocio eran más densas.
3.  **La visualización de progreso para colaboradores y líderes:** El componente motivacional y de control que justificaría el uso diario de la herramienta.

Al acotar el campo de batalla a estas áreas críticas, despejé el camino para que el equipo de diseño y los stakeholders pudieran profundizar en la lógica de interacción sin el ruido de funcionalidades periféricas que podíamos resolver más adelante.

#### El ecosistema de co-creación: Ingeniería en el tablero de dibujo

Para esta actividad, rechacé la idea de trabajar en una torre de marfil. Convoqué a un equipo multidisciplinario que incluyó al Tech Lead y a desarrolladores Frontend y Backend de Dacodes. Mi razonamiento era simple: no quería bocetos que fueran sueños imposibles para el equipo de desarrollo. La presencia de los ingenieros desde el primer trazo permitió validar la factibilidad técnica en tiempo real. Si yo dibujaba una segmentación que requería un procesamiento de datos que el servidor no podría manejar en menos de tres segundos, ellos me frenaban ahí mismo.

A este grupo sumé a Rodrigo, nuestro PM, para cuidar la alineación con los tiempos del proyecto, y a Lalo de Gentera, quien aportó la visión estratégica del cliente. Esta diversidad transformó la sesión de brainstorming en un ejercicio de co-creación industrial. No estábamos solo "imaginando"; estábamos pre-construyendo la lógica del producto. Cada idea que sobrevivía a la crítica del desarrollador y al filtro de negocio de Lalo nacía ya con un ADN de viabilidad que nos ahorraría semanas de retrabajo en el futuro.

#### La dictadura del cronómetro: Crazy 8s y la divergencia forzada

Para romper la inercia y evitar que nos enamoráramos de la primera idea mediocre, implementé la técnica de **Crazy 8s**. Es un ejercicio que siempre genera tensión inicial pero que produce resultados brillantes: obligué a cada participante a doblar una hoja en ocho secciones y dedicar exactamente un minuto a cada una para bocetar ocho variaciones de una misma pantalla. La rapidez anula el juicio crítico y permite que afloren soluciones que la mente racional suele filtrar.

Impuse reglas de juego muy claras para mantener el ritmo:
*   **Cantidad sobre calidad:** No buscábamos arte, buscábamos ideas. Si el dibujo era un garabato pero la idea era clara, servía.
*   **Prohibido juzgar:** Durante la fase de divergencia, cualquier crítica estaba vetada para no matar la creatividad incipiente.
*   **Enfoque en el flujo:** Usamos formas básicas (rectángulos para botones, círculos para avatares) y texto simple. El objetivo era entender la jerarquía de la información: ¿Qué es lo primero que Carlos necesita ver al abrir el dashboard? ¿Dónde está el botón de acción principal?

Cada boceto iba acompañado de anotaciones técnicas al margen. Estas notas eran vitales para explicar microinteracciones que un dibujo estático no puede mostrar, como un estado de *loading* específico o una transición entre pestañas.

#### Diseñando para Carlos: El rompecabezas que se arma solo

Al abordar los flujos para Carlos, el Administrador de Capacitación, mi enfoque fue la reducción de la ansiedad cognitiva. Carlos vive entre Excels y errores de datos, así que su interfaz debía transmitir control absoluto. En el **Boceto 1.1**, diseñé una pantalla de carga de archivo ADN con un área de *drag & drop* masiva y un historial de cargas previas para darle contexto histórico.

Pero el verdadero reto estaba en el **Boceto 1.2: El Resumen de Procesamiento**. Aquí es donde el sistema demuestra su inteligencia. En lugar de mostrarle una lista interminable de datos, diseñé un panel que destacaba las métricas clave y, lo más importante, una sección de "Inconsistencias Detectadas". Sabíamos por la investigación que los errores suelen rondar el 10-15% del total. Mi propuesta fue que el sistema filtrara automáticamente esas excepciones para que Carlos pudiera enfocarse solo en lo que requería su criterio humano, descargando el reporte de errores con un solo clic.

Para la segmentación, en el **Boceto 1.3**, visualicé un dashboard de "Propuesta de Grupos Automáticos". En lugar de tablas áridas, propuse tarjetas visuales por grupo (ej. "Básico Ventas - Región Norte") que mostraran el cupo (22/25) y el formador sugerido. Era la materialización de su deseo: "que el rompecabezas se armara solo". Si necesitaba ajustar algo, el **Boceto 1.4** permitía entrar al detalle del grupo y mover participantes con una facilidad que el sistema actual no permite, incluyendo alertas visuales si un grupo quedaba con cupo insuficiente.

#### El mapa de Ana: Motivación a través de la claridad

Para Ana, la Colaboradora, el cambio de tono fue radical. Su interfaz no debía ser una herramienta de gestión, sino un mapa de crecimiento. En el **Boceto 2.1**, tracé un dashboard personal centrado en una línea de tiempo visual: su "Ruta de Capacitación". Cada hito (Básico, Intermedio, Avanzado) era un círculo que se completaba según su progreso.

Añadí un indicador de "% de Avance" muy prominente para generar ese sentido de logro que detectamos que faltaba. En el detalle de cada curso (**Boceto 2.2**), me aseguré de que la información crítica (fecha, hora, sede y formador) fuera lo primero que viera, eliminando cualquier ruido innecesario. Incluí un botón específico para "Añadir al Calendario" que descargara un archivo `.ical`. Este pequeño detalle técnico respondía a una frustración real: la pérdida de invitaciones en el mar de correos diarios. Queríamos que Ana sintiera que el sistema trabajaba para ella, no que ella debía perseguir al sistema.

#### David y Elena: Datos que se convierten en gestión

Para David, el Líder de Oficina, el objetivo era la visibilidad ejecutiva sin fricción. En el **Boceto 3.1**, diseñé una tabla de equipo con un sistema de "semáforos" visuales. Si un colaborador estaba retrasado en su ruta, David lo vería en rojo de inmediato. No era solo para vigilar, sino para permitirle "bajar" al detalle de cada persona y ofrecer apoyo específico (**Boceto 3.2**).

Por último, para Elena, la Formadora, diseñé una Agenda de Formador (**Boceto 4.1**) que fuera su centro de operaciones. Eliminé la necesidad de papeles y Excels externos con una lista de participantes digital (**Boceto 4.2**) que incluyera casillas de "Marcar Asistencia" directamente en la tablet o laptop. Mi razonamiento fue que Elena debía dedicar su energía a enseñar, no a registrar datos. El dashboard de avance por formador (**Boceto 4.3**) cerraba el círculo, permitiéndole ver el impacto real de su trabajo en la capacitación de los colaboradores de Gentera.

#### El valor del boceto: Validación temprana y ahorro de costos

Al cerrar esta sesión de ideación, no teníamos diseños finales, pero sí algo mucho más valioso: una dirección estratégica validada. Convocamos a una sesión de validación conceptual con Lalo y Carlos para mostrarles estos sketches. Fue un momento crítico; al ver el flujo de la carga ADN y la segmentación automática en papel, Carlos pudo darnos feedback sobre reglas de negocio que el brief no mencionaba con claridad.

Esta validación temprana nos permitió ajustar la lógica de las inconsistencias y la visualización de los grupos antes de invertir una sola hora en diseño de alta fidelidad o desarrollo de código. Mi aprendizaje senior aquí fue reafirmado: el tiempo invertido en bocetaje de baja fidelidad es el seguro de vida de cualquier proyecto de producto complejo. Habíamos despejado la incertidumbre y teníamos el mapa listo para la siguiente fase.


Tras la validación de estos conceptos visuales, nos enfrentamos a una pregunta incómoda que surgió durante la sesión con Carlos: ¿cómo íbamos a manejar las excepciones de datos que el sistema no pudiera procesar automáticamente sin romper el flujo de trabajo? Esta tensión nos obligó a profundizar en la definición de problemas específicos mediante preguntas **HMW (How Might We)**, lo que nos llevaría a una fase de ideación divergente mucho más agresiva para resolver los cuellos de botella técnicos que los bocetos acababan de revelar.

### Parte 2: El Enfoque del Problema Preguntas Hmw E Ideación Divergente

#### La grieta en el boceto y la necesidad de fragmentar el problema

La sesión de validación con Carlos me dejó una sensación agridulce. Aunque los bocetos iniciales de baja fidelidad habían servido para alinear la visión general, una pregunta suya sobre el manejo de los "Gerentes Multiproducto" y los colaboradores que reingresan a la compañía abrió una grieta técnica que no podíamos ignorar. Me di cuenta de que estábamos intentando diseñar una solución robusta sobre un terreno que todavía tenía demasiadas minas lógicas. Como diseñador, mi instinto me dictó una pausa táctica: no podíamos saltar a la alta fidelidad ni definir interfaces definitivas si no resolvíamos primero estos cuellos de botella operativos. El riesgo de avanzar así era diseñar una "cáscara" hermosa que colapsaría ante la primera excepción de datos real de Gentera.

Decidí que el siguiente paso no sería dibujar más pantallas, sino desmenuzar el problema. Siguiendo el proceso que documenté meticulosamente en la guía de **brainstorming y bocetaje (sketching)**, transformé esa incertidumbre en una sesión de ideación divergente. Mi razonamiento fue el siguiente: si el problema es complejo, la solución no puede nacer de una sola idea lineal. Necesitaba "romper" el desafío en pedazos manejables y forzar al equipo —incluyendo a los perfiles técnicos— a explorar los límites de lo posible antes de comprometerse con un solo flujo.

Para lograr esto, recurrí a la metodología de las preguntas **How Might We (HMW)**. No quería simples enunciados; quería disparadores que obligaran a nuestra mente a saltar por encima de las restricciones actuales del proceso manual en Excel. Utilicé los insumos de la Fase 1, especialmente las fichas de Personas y los Journey Maps, para asegurar que cada pregunta tuviera un anclaje humano y no solo técnico. Estábamos en el punto donde la estrategia de producto se encuentra con la ejecución táctica.

#### El Coordinador Detallista: Blindando la carga de datos de Carlos

El primer bloque que abordé fue el de Carlos, nuestro Administrador de Capacitación. Al extraer las definiciones que consolidé en el documento de **preguntas HMW**, me enfoqué obsesivamente en la **Automatización y Precisión de Datos**. Carlos vivía enterrado en archivos de Excel con miles de filas; su mayor miedo era que el nuevo sistema heredara la fragilidad del proceso manual.

Articulé la primera pregunta crítica: *¿Cómo podríamos hacer que el proceso de carga, limpieza y cruce de la plantilla de ADN sea casi instantáneo y libre de errores para Carlos?* Esta pregunta no era casual. Buscaba eliminar la fricción desde el segundo cero. Pero el verdadero reto senior vino con la siguiente: *¿Cómo podríamos asegurar que la aplicación de reglas de negocio complejas —como los Gerentes Multiproducto o los reingresos— sea totalmente automática y precisa?*

> **Insight de Diseño:** Mi objetivo aquí era reducir la carga cognitiva de Carlos al mínimo absoluto. Si el sistema podía procesar el 95% de los casos automáticamente, Carlos pasaría de ser un "capturista de datos" a un "gestor de excepciones". Decidí que la interfaz debía diseñarse para mostrar solo aquello que requiriera su intervención humana, blindando el resto del proceso mediante algoritmos de segmentación que respetaran los criterios de puesto, subdirección y cupos de sede.

#### Ana, David y Elena: Visibilidad, motivación y el fin de la burocracia

Una vez despejado el camino para la administración, giré el foco hacia los usuarios finales y los líderes. Para Ana, la Colaboradora Entusiasta, el problema no era la carga de datos, sino la incertidumbre. Según lo que definí en las preguntas HMW, el reto era: *¿Cómo podríamos presentar la ruta de capacitación de Ana de una manera visualmente atractiva, amigable y fácil de entender de un vistazo?* No buscábamos solo un listado de cursos, sino una narrativa de progreso.

Planteé soluciones que permitieran a Ana saber exactamente dónde estaba y qué le faltaba, integrando notificaciones oportunas por los canales que ya usa: WhatsApp y Teams. Mi decisión estratégica aquí fue la simplicidad extrema: si Ana tenía que hacer más de dos clics para ver su próximo curso o añadirlo a su calendario, habíamos fallado. La plataforma GAC debía ser un facilitador, no una tarea adicional en su ya cargada agenda operativa.

Para David, el Líder de Oficina, y Elena, la Formadora, el enfoque fue la **Visibilidad Estratégica y la Simplificación Administrativa**:

*   **Para David:** Diseñé el reto de proporcionarle una visión consolidada de su equipo. Necesitaba que David pudiera identificar a los colaboradores en riesgo de atraso en segundos, sin tener que pedir reportes por correo. La pregunta HMW fue clara: *¿Cómo podríamos ayudar a David a tomar decisiones proactivas sobre el desarrollo de su equipo mediante datos fiables y en tiempo real?*
*   **Para Elena:** El objetivo era matar el registro de asistencia manual. *¿Cómo podríamos facilitar el registro de asistencia directamente en la plataforma, eliminando el proceso manual y el reporte posterior por correo?* Queríamos que Elena se concentrara en la calidad de la formación, no en la burocracia de los archivos adjuntos.

#### La técnica del Crazy 8s: Forzando la divergencia bajo presión

Con estas preguntas HMW pegadas en nuestra pizarra virtual de FigJam, convoqué al equipo de diseño y a los Tech Leads de Dacodes a un taller de ideación intensivo. Siguiendo estrictamente el protocolo de ejecución que tracé en el documento de **brainstorming y bocetaje**, implementamos la técnica de **Crazy 8s**.

La dinámica fue brutalmente efectiva. Obligué a cada participante —incluyendo a los desarrolladores, cuya visión de factibilidad es vital en esta etapa— a doblar una hoja en ocho secciones. El reto: generar ocho ideas diferentes para una pantalla o interacción específica en solo ocho minutos. Un minuto por idea.

Esta presión temporal es una herramienta de diseño senior por una razón: anula el juicio crítico inicial y permite que emerjan soluciones que, en una reunión convencional, serían descartadas por parecer "locas" o demasiado simples. Durante estos ciclos de ideación:
1.  **Priorizamos la cantidad sobre la calidad:** No quería dibujos perfectos; quería conceptos crudos.
2.  **Prohibí juzgar:** Cada idea, por absurda que pareciera (como un bot de WhatsApp que hiciera el check-in automático por geolocalización), era bienvenida.
3.  **Foco en el flujo:** Nos olvidamos por completo de los colores y la tipografía. El mandato era resolver la jerarquía de información y la lógica de interacción para la carga de la plantilla ADN y la visualización de las rutas de Ana.

Vi a los desarrolladores esbozar layouts de tablas que colapsaban datos complejos de forma ingeniosa, y a los stakeholders proponer dashboards que priorizaban las alertas rojas sobre los datos verdes. Fue una explosión de creatividad controlada que nos permitió explorar al menos 40 o 50 variaciones de solución en menos de una hora.

#### El valor de la divergencia bruta y el criterio senior

Al terminar el Crazy 8s, teníamos una pared llena de bocetos rápidos y anotaciones. Mi labor como facilitador fue entonces guiar al equipo en un proceso de **Affinity Clustering**, agrupando las ideas similares y descartando aquellas que, aunque creativas, violaban las reglas de negocio de Gentera o la infraestructura técnica disponible.

Reflexionando sobre este proceso, la mayor victoria no fueron los dibujos en sí, sino la alineación que logramos. Al involucrar a los Tech Leads desde el primer trazo, nos aseguramos de que las soluciones para la segmentación automática de grupos fueran construibles. No estábamos diseñando castillos en el aire; estábamos articulando un sistema que entendía la complejidad de las subdirecciones y las sedes de Gentera.

Esta fase de divergencia bruta nos permitió "sacarnos de encima" las soluciones obvias y mediocres. Dejamos de pensar en "una página web que muestra cursos" para empezar a diseñar un motor de gestión que automatizaba la trazabilidad y eliminaba el error humano. Habíamos despejado las dudas de Carlos y teníamos sobre la mesa los componentes lógicos necesarios para construir la arquitectura de información.

#### Próximo paso:

Tras este estallido de ideas, nos encontramos con un excedente de propuestas valiosas pero contradictorias entre sí. La tensión ahora residía en cómo elegir el camino definitivo sin herir la visión de los diferentes stakeholders. Necesitaba pasar de la divergencia a una **convergencia estratégica**, donde la crítica de diseño y una matriz de priorización nos obligarían a tomar las decisiones más difíciles del proyecto: qué funcionalidades construiríamos para el MVP y cuáles, por muy brillantes que fueran, tendrían que esperar en el backlog.

### Parte 3: Convergencia Estratégica Crítica de Diseño y Priorización de Conceptos

Me encontré frente a una pared saturada de notas adhesivas y bocetos a mano alzada, con la sensación agridulce que sigue a toda fase de divergencia bruta: teníamos una explosión de creatividad, pero también un exceso de ruido que amenazaba con diluir el propósito del proyecto GAC. El "Crazy 8s" y las sesiones de ideación individual nos habían entregado docenas de caminos posibles, pero como responsable del diseño de producto, sabía que no podíamos construirlo todo. Mi prioridad en ese momento no era la estética, sino la supervivencia del sistema; necesitábamos transformar ese caos en una **única fuente de verdad** que eliminara de una vez por todas la dependencia de los Excels dispersos que asfixiaban la operación de Gentera.

La transición hacia la convergencia estratégica no fue un simple ejercicio de filtrado, sino una maniobra de curaduría táctica. Tenía que equilibrar la complejidad técnica de las reglas de negocio —esas que dictan quién es un "Gerente Multiproducto" o cómo se gestiona un reingreso— con una interfaz que para Carlos, nuestro administrador, se sintiera ligera y libre de fricción. El riesgo era alto: si fallábamos en simplificar la lógica, el sistema sería rechazado por ser igual de engorroso que el proceso manual actual. Por eso, inicié el proceso de **Affinity Clustering**, organizando físicamente los bocetos en cuatro ejes que se volvieron innegociables: Automatización Inteligente, Visibilidad Real, Comunicación Proactiva y Motivación del Usuario.

#### El rigor del Affinity Clustering: Organizar el pensamiento

Para poner orden a la sesión, utilicé la técnica de agrupación por afinidad que detallé en mi plan de trabajo. No se trataba solo de mover papeles, sino de identificar patrones de comportamiento que cruzaban todos los roles. Al agrupar los bocetos, descubrí que, aunque las necesidades de un Director y un Colaborador parecen opuestas, ambos convergían en una demanda crítica: el **Feedback Constante al Usuario**. El sistema no podía ser una "caja negra"; si Carlos disparaba un envío de 500 invitaciones, necesitaba ver una barra de progreso real, no un mensaje estático de "procesando".

Esta fase de agrupación me permitió fusionar ideas que por separado eran débiles. Por ejemplo, combiné un boceto de "notificaciones tipo push" con uno de "gestión de calendario" para crear el concepto de comunicación multicanal. Fue en este punto donde la estructura de la plataforma GAC empezó a tomar forma no como una serie de pantallas aisladas, sino como un ecosistema donde la información fluía de un rol a otro sin pérdida de integridad. Al terminar el clustering, las redundancias habían desaparecido y nos quedamos con el núcleo duro de lo que sería nuestro MVP.

#### La sesión de crítica: El filtro de los "Me gusta" y los "Deseos"

Con los grupos de ideas definidos, sometí los bocetos a una **crítica constructiva rigurosa**, utilizando un marco de trabajo que evitara las opiniones subjetivas y se centrara en el valor de negocio. Para los flujos de Carlos, evaluamos los bocetos 1.1 al 1.6 con una lupa forense. El consenso fue inmediato en un punto: la visibilidad de las "Inconsistencias Detectadas". No bastaba con que el sistema procesara la plantilla ADN; Carlos necesitaba que el motor le señalara exactamente dónde estaban los errores de data antes de confirmar cualquier acción.

Durante la dinámica de "Me gusta...", "Desearía que..." y "¿Qué tal si...?", surgieron tensiones necesarias. Un "Me gusta" fue para la propuesta de visualización de grupos en tarjetas, porque permitía una gestión visual mucho más humana que una tabla infinita. Sin embargo, el "Desearía que..." más potente vino del equipo técnico: cuestionaron cómo íbamos a obtener los números de WhatsApp para las notificaciones automáticas si esa data no residía en la fuente primaria. Esta fue una **maniobra senior de realidad**: en lugar de ignorar el problema técnico, decidí que el diseño debía contemplar un estado de "falta de información" y permitir la carga manual de esos datos críticos, blindando así la funcionalidad contra fallos de integración.

#### Motor de Automatización: El cerebro detrás del rol de Carlos

La decisión más difícil en la priorización para el Administrador fue definir el alcance del **Motor de Automatización de Listas con Revisión Asistida**. Rechacé la idea de una carga de Excel pasiva. En su lugar, articulé un concepto donde el sistema actúa como un analista inteligente. Al cargar la plantilla, el motor no solo lee nombres; aplica reglas de exclusión por puesto, identifica reingresos y detecta automáticamente si un colaborador pertenece a la categoría de "Gerente Multiproducto" basándose en la presencia de un Asesor CIE en su oficina.

Este concepto priorizado incluye tres características clave que definí para aliviar la carga cognitiva de Carlos:
*   **Carga con Drag & Drop:** Un área prominente para soltar el archivo, eliminando pasos innecesarios.
*   **Resumen Post-Procesamiento:** Un dashboard inmediato que muestra cuántos candidatos fueron identificados y cuántas inconsistencias requieren atención humana.
*   **Transparencia de Reglas:** Un detalle que explica *por qué* el sistema tomó una decisión (ej. "Excluido por falta previa en Nivel 2").

Para la segmentación de grupos, prioricé el **Generador de Grupos Óptimos con Ajuste Visual**. Aquí es donde el diseño se vuelve estratégico: el algoritmo propone la mejor división por cupos y sedes, pero le entregué a Carlos una interfaz de **Drag & Drop** para que pudiera mover participantes entre grupos manualmente. Sabía que ninguna automatización es perfecta y que el criterio humano de un coordinador con años de experiencia es irreemplazable en casos excepcionales.

#### La ruta de Ana: Gamificación con propósito

Para Ana, la colaboradora, mi enfoque cambió radicalmente hacia la psicología del usuario. El concepto priorizado, **"Mi Ruta de Capacitación: Un Mapa Interactivo"**, nació de la necesidad de reducir la ansiedad que genera el desconocimiento del progreso. Decidí que esta interfaz debía ser **Mobile-First**, entendiendo que muchos colaboradores consultan su estatus en momentos de movilidad dentro de las oficinas de Gentera.

Diseñé este mapa no como una lista de tareas, sino como un camino visual con hitos claros (Básico, Intermedio, Avanzado). Cada hito es interactivo: al tocarlo, Ana ve la fecha, la sede, el formador y el temario. Pero el valor real reside en las **Notificaciones Inteligentes**. Prioricé la integración con archivos **.ical** para que, con un solo clic desde un mensaje de WhatsApp o Teams, el curso se agende automáticamente en su calendario personal. Mi razonamiento fue simple: si eliminamos la fricción de agendar, aumentamos la tasa de asistencia y, por ende, el éxito del programa de capacitación.

#### David y Elena: Visibilidad 360° y operación sin papeles

Para los roles de liderazgo y formación, la prioridad fue la **operación en tiempo real**. Para David, el Gerente de Oficina, definí un **Dashboard de Equipo** que utiliza un sistema de semáforos (Verde para "Al día", Amarillo para "Retrasado", Rojo para "Pendiente Crítico"). No quería que David tuviera que navegar por menús complejos; necesitaba que, en tres segundos, supiera quién de su equipo necesitaba apoyo. Implementé una función de **drill-down** que le permite saltar del resumen grupal al detalle individual de un colaborador con un solo clic, permitiendo una gestión basada en datos, no en suposiciones.

Finalmente, para Elena, la formadora, el concepto central fue la **"Agenda de Cursos Unificada"**. Eliminamos las listas de asistencia en papel. Prioricé una interfaz donde Elena puede registrar la asistencia digitalmente desde su dispositivo, y esa información impacta instantáneamente el dashboard de Carlos y el de los colaboradores. Este nivel de trazabilidad es lo que realmente automatiza el proceso. Elena ya no es una administradora de listas; es una formadora que tiene toda la información de sus participantes (puesto, oficina, correo) a un toque de distancia, permitiéndole preparar sesiones mucho más personalizadas.

> **Reflexión sobre el balance de control:** En este punto del proceso, me di cuenta de que la verdadera sofisticación del diseño no estaba en la potencia del algoritmo de automatización, sino en la elegancia con la que permitíamos la intervención humana. Diseñar un sistema que "lo hace todo solo" es un error de principiante; diseñar uno que "hace el trabajo pesado pero consulta al experto" es lo que define un producto senior. Mantener el control manual sobre la segmentación de grupos fue la decisión más incómoda pero necesaria para garantizar que Gentera no perdiera la flexibilidad que su operación demanda.


Con los conceptos priorizados y la lógica de negocio blindada, me enfrentaba a un nuevo desafío: ¿serían capaces los stakeholders de ver el valor en estos bocetos de baja fidelidad o se perderían en la falta de color y detalle visual? La siguiente fase de **ALINEACIÓN DE NEGOCIO** me obligaría a defender estas decisiones ante Lalo y Carlos, sabiendo que cualquier rechazo en este punto significaría retroceder semanas de trabajo. La tensión era palpable: estábamos a punto de validar si nuestra visión de una plataforma automatizada coincidía con la realidad operativa de quienes la usarían todos los días.

### Parte 4: Alineación de Negocio Validación de Conceptos con Stakeholders

#### El riesgo de la baja fidelidad ante el negocio

Presentar garabatos a un directivo es, probablemente, uno de los momentos de mayor vulnerabilidad para un diseñador. Tras días de encerrona creativa priorizando flujos y blindando la lógica de negocio, me encontraba con un set de bocetos que, aunque estructuralmente sólidos, carecían de cualquier rastro de la identidad visual de Gentera. El riesgo era real: sabía que si Lalo o Carlos se distraían con la ausencia de color o la tosquedad de los trazos, perderíamos la oportunidad de validar lo que realmente importaba: la arquitectura funcional de la plataforma GAC.

Sin embargo, mi razonamiento estratégico fue firme. No podíamos permitirnos el lujo de invertir semanas en alta fidelidad sin antes confirmar que el "Motor de Automatización" resolvía el caos operativo de Carlos. Necesitaba una validación estructural, no estética. Sabía que presentar estos "esqueletos" obligaría a los stakeholders a mirar la jerarquía de la información y la lógica de los pasos, ahorrándonos retrocesos costosos en etapas posteriores. La tensión en el ambiente, incluso a través de la pantalla, era palpable; estábamos a punto de descubrir si nuestra visión de automatización encajaba con la realidad de las oficinas de Gentera.

#### Orquestando la sesión en Google Meets

Organicé la sesión de validación digital con una estructura quirúrgica. No quería una reunión de "opiniones", sino una de "decisiones". Convoqué a Lalo, como líder estratégico, y a Carlos, como el usuario que vive el dolor del proceso actual, además de Rodrigo y mi equipo técnico de Dacodes. Antes de compartir pantalla, establecí las reglas del juego: les pedí explícitamente que ignoraran la estética y se enfocaran en si el sistema "hacía lo que ellos necesitaban que hiciera".

Utilicé una pizarra virtual para guiar la sesión, estructurando la narrativa alrededor de los conceptos que habíamos priorizado previamente. Mi objetivo era transformar la frialdad de una videollamada en un diálogo fluido sobre la operatividad diaria. No les mostré pantallas aisladas; les conté historias. Sabía que si lograba que Carlos se proyectara a sí mismo usando la herramienta un jueves por la mañana bajo presión, la validación sería auténtica.

#### Escenarios de usuario: El "Motor" frente al "Rompecabezas"

Para presentar los bocetos de baja fidelidad, abandoné el lenguaje técnico y utilicé **escenarios de usuario** como hilo conductor. Empecé con el rol de Carlos, el Administrador de Capacitación. "Imaginen que es lunes y Carlos recibe la plantilla masiva de Excel", dije mientras mostraba el boceto del **Motor de Automatización de Listas con Revisión Asistida**.

Caminé con ellos a través del flujo de carga y procesamiento. Expliqué cómo el sistema, en lugar de ser una caja negra, actuaría como un asistente que identifica candidatos elegibles de forma casi instantánea. Al mostrar el **Generador de Grupos Óptimos**, enfaticé la jerarquía de la información: cómo la pantalla priorizaba las variables de puesto y subdirección para resolver lo que ellos mismos llamaban el "rompecabezas semanal". Aunque eran formas básicas y texto simple, la lógica era tan clara que Carlos empezó a asentir antes de que yo terminara de explicar el flujo.

#### El alivio de Carlos y el factor humano

La reacción de Carlos fue el primer gran hito de la sesión. Noté un cambio inmediato en su tono de voz; lo que describió fue un auténtico **"sentimiento de alivio"**. Ver plasmada la automatización de la carga de plantillas y la identificación de elegibles validó semanas de análisis previo. Sin embargo, como diseñador senior, presté especial atención a sus dudas, porque ahí es donde reside la verdadera usabilidad.

*   **Detección de inconsistencias:** Carlos fue enfático en que el sistema no solo debe detectar errores en la plantilla, sino agruparlos y sugerir correcciones. No quería solo un mensaje de error; quería una solución.
*   **El control del experto:** Validamos que, por muy inteligente que sea el algoritmo, Carlos necesitaba el "último toque". La propuesta de una interfaz de **arrastrar y soltar (Drag & Drop)** para ajustar manualmente los grupos propuestos fue recibida como una victoria. 
*   **Transparencia en las reglas:** Surgió una petición crítica: el sistema debe mostrar *por qué* un colaborador fue incluido o excluido (por ejemplo, bajo la lógica de "Gerente Multiproducto"). Esta transparencia es lo que genera confianza en la herramienta.

> **Lección de trinchera:** Diseñar para expertos no significa automatizarlo todo, sino darles superpoderes manteniendo su criterio intacto. El alivio de Carlos no venía de que el sistema hiciera su trabajo, sino de que le quitara la carga administrativa para dejarlo ser el estratega que Gentera necesita.

#### La visión de Lalo y el dilema técnico de WhatsApp

Mientras Carlos se enfocaba en la micro-operación, Lalo intervino para elevar la discusión hacia la estrategia de transformación digital. Su recepción fue igualmente positiva, confirmando que la dirección del diseño estaba alineada con los objetivos macro de Gentera. Sin embargo, la sesión también sirvió para identificar "cabos sueltos" que requerían una maniobra técnica inmediata.

El punto de mayor fricción fue la funcionalidad de **WhatsApp**. Aunque todos coincidíamos en su valor, Lalo planteó dudas legítimas sobre la fuente de los números telefónicos y las políticas de comunicación de la empresa. En ese momento, tomé la decisión de marcar este punto como una "nota de incertidumbre técnica". No permití que la sesión se estancara en un debate de políticas; documenté la necesidad de coordinar una sesión específica con el equipo de TI para resolver la factibilidad de esta integración, asegurando que el diseño contemplara ambos escenarios (con y sin WhatsApp) para no detener el progreso.

#### Refinando la experiencia para los roles operativos

No nos detuvimos en la administración central; validamos también los conceptos para Ana (Colaboradora), David (Líder) y Elena (Formadora). Cada perfil aportó matices que transformaron los bocetos iniciales en requerimientos técnicos precisos:

*   **Para Ana (Colaboradora):** El concepto de "Mi Ruta de Capacitación" como un mapa interactivo fue un éxito rotundo por su potencial motivador. La instrucción fue clara: simplicidad absoluta. Ana debe poder ver su progreso en el móvil mientras se desplaza entre sucursales. Además, se solicitó que ella pudiera configurar sus preferencias de notificación (Teams, Correo o WhatsApp).
*   **Para David (Líder):** Validamos el Dashboard de equipo con lógica de "semáforos". La retroalimentación clave aquí fue la velocidad: los líderes tienen segundos, no minutos. Necesitaban filtros rápidos y la capacidad de hacer **drill-down** para ver exactamente qué colaborador estaba retrasado en su ruta.
*   **Para Elena (Formadora):** Su agenda centralizada y las listas digitales fueron vistas como el fin de las hojas de papel. Elena pidió algo vital: integración con su calendario de Outlook y un campo de feedback cualitativo para registrar observaciones sobre el desempeño del grupo durante la sesión.

#### El valor de la vulnerabilidad en el diseño

Al cerrar la sesión, me quedó claro que presentar en baja fidelidad había sido la decisión correcta. Al despojar al diseño de adornos visuales, permitimos que los stakeholders se convirtieran en co-creadores de la solución. No discutimos sobre el tono de azul de un botón o el redondeo de las esquinas; discutimos sobre reglas de negocio, flujos de información y puntos de dolor reales.

Esta sesión de validación no solo nos dio luz verde para continuar; nos proporcionó un mapa detallado de refinamientos. Salí de la reunión con una lista de ajustes técnicos que impactarían directamente en los wireframes de media fidelidad. Habíamos logrado lo más difícil en un proyecto de esta envergadura: alinear la expectativa del negocio con la necesidad del usuario final antes de escribir una sola línea de código o pulir un solo píxel.


Con los conceptos validados y el respaldo total de Lalo y Carlos, me enfrentaba a la tarea de organizar este universo de funciones en una estructura lógica y navegable. La validación había revelado una complejidad de datos mayor a la anticipada, especialmente en la trazabilidad de los hitos de capacitación. El siguiente desafío sería construir la **Arquitectura de Información**, un momento crítico donde debía decidir cómo jerarquizar cada módulo para que la plataforma no colapsara bajo su propio peso informativo. Sentía que estábamos a un paso de convertir estos bocetos en un sistema real, pero primero debía asegurar que los cimientos de la navegación fueran lo suficientemente sólidos para soportar la carga operativa que se avecinaba.

### Parte 5: La Columna Vertebral Arquitectura de Información y Sistemas de Etiquetado

#### La cimentación invisible: De la validación a la infraestructura lógica

Al cerrar la sesión de validación con Lalo y Carlos, me encontré con un tablero de Miro repleto de post-its verdes. Teníamos la aprobación estratégica, pero también una revelación técnica incómoda: la complejidad de los datos en GAC era mayor de lo que cualquier boceto inicial podía contener. No estábamos diseñando una simple herramienta de visualización; estábamos construyendo el sistema nervioso de la capacitación en Gentera. Tenía ante mí un universo de funciones dispersas —desde la trazabilidad de hitos hasta la segmentación automática de grupos— que, de no ser articuladas con rigor, colapsarían bajo su propio peso operativo en menos de un mes de uso real.

Como diseñador, entiendo que la **Arquitectura de Información (AI)** es esa estructura invisible que determina si un producto se siente ligero o como una carga cognitiva insoportable. Mi razonamiento fue claro: debíamos pasar del "qué" (los conceptos validados) al "cómo se organiza" la lógica profunda. No podíamos permitir que Carlos, en su rol de Administrador, se perdiera buscando una función de carga mientras gestionaba la urgencia de una nueva plantilla ADN. Basándome en el proceso que documenté en `proceso/02_arquitectura_de_informacion_ai.pdf`, inicié la fase de estructuración para asegurar que los cimientos de la plataforma soportaran con holgura los ocho módulos críticos identificados, transformando la incertidumbre de los datos en un sistema navegable y predecible.

#### La disección del ecosistema: Inventario de contenido y funcionalidades

Mi primer paso técnico fue realizar una cirugía mayor a los requerimientos. No me limité a listar funciones; realicé un inventario exhaustivo que quedó plasmado en el `entregable/06_inventario_de_contenido_y_funcionalidades.pdf`. Mi objetivo era diseccionar cada dato y cada acción para entender quién los necesitaba, con qué frecuencia y bajo qué reglas de negocio. Esta actividad de "inventariado" fue vital para mapear la **Mothership** de datos de Gentera, asegurando que elementos como el 'Concentrado Histórico' o los datos de 'Estatus IPP' no fueran solo filas en un Excel, sino activos accionables dentro de la interfaz.

Categoricé el sistema en ocho módulos fundamentales, cada uno con una carga de responsabilidad específica:
*   **Autenticación y Gestión de Usuarios (RF-GAC-024):** Definí el acceso mediante Número de Empleado y Fecha de Nacimiento, asegurando que el sistema reconociera instantáneamente el rol del usuario para personalizar su experiencia desde el segundo uno.
*   **Carga y Procesamiento de Datos (RF-GAC-001):** Aquí es donde la "magia" de la automatización comienza. Diseñé la lógica para que la subida de la **Plantilla ADN** disparara procesos de limpieza y exclusión automática (como filtrar bajas o SEAS México).
*   **Segmentación y Gestión de Grupos (RF-GAC-005):** Este es el corazón operativo. Mapeé cómo el sistema debe proponer grupos respetando cupos y aplicando la compleja lógica de 'Gerente Multiproducto'.
*   **Asignación de Recursos:** Estructuré la visibilidad de los formadores y las sedes, permitiendo que los Líderes Operativos resolvieran cuellos de botella en la asignación.
*   **Comunicaciones Automatizadas (RF-GAC-021, RF-GAC-022):** Definí la jerarquía de las notificaciones vía Outlook, Teams y WhatsApp, asegurando que cada hito de la capacitación tuviera su eco en el canal correcto.
*   **Trazabilidad, Dashboards y Configuración:** Los tres módulos finales que cierran el ciclo, desde el mapa visual de la ruta para el colaborador hasta los logs de errores para el Super Admin.

> **Insight de diseño:** El inventario no es una lista de deseos; es un contrato de diseño. Si un dato no tiene un rol asignado y un propósito claro en esta fase, se convierte en ruido visual que entorpece la eficiencia del usuario final.

#### Jerarquía por roles: El Sitemap como mapa de navegación dinámico

Con el inventario en mano, procedí a construir la columna vertebral de la plataforma: el Mapa del Sitio. En el `entregable/07_mapa_del_sitio_sitemap.pdf`, articulé una estructura jerárquica que no es estática, sino que se adapta como un guante a cada uno de los cinco perfiles clave. Mi decisión estratégica aquí fue la **personalización radical**. No quería un menú universal donde el colaborador viera opciones administrativas que no le competen; quería una interfaz limpia que redujera el ruido visual y enfocara a cada usuario en su misión.

Para Carlos, el Administrador, estructuré un flujo que prioriza la gestión de datos y grupos. Su dashboard es un centro de control con acceso directo a las inconsistencias detectadas en las plantillas. En contraste, para Ana, la Colaboradora, eliminé toda la complejidad administrativa para entregarle una sección dedicada: **"Mi Ruta de Capacitación" (RF-GAC-012)**. Aquí, la jerarquía se invierte; lo más importante no es la gestión, sino la visibilidad de su progreso y sus próximos cursos. Esta navegación dinámica, que cambia tras el login, asegura que David (el Líder) pueda saltar directamente al resumen de avance de su equipo (RF-GAC-017) sin pasar por menús irrelevantes. Es una arquitectura diseñada para la velocidad y la relevancia.

#### Arquitectura de navegación: Sidebar, Tabs y el rastro de migas de pan

Para que esta jerarquía fuera realmente usable, implementé un sistema de navegación tripartito detallado en el `entregable/08_modelos_de_navegacion.pdf`. Mi prioridad era garantizar el **Feedback de Ubicación**: que el usuario, sin importar qué tan profundo estuviera en un reporte, siempre supiera dónde está y cómo volver.

1.  **Navegación Primaria (Global):** Opté por un **Sidebar lateral persistente** y colapsable. Esta decisión técnica no fue estética; el sidebar permite una escalabilidad superior a un menú superior, ideal para un sistema que seguirá creciendo en módulos. Además, al ser colapsable, devolvemos el protagonismo al contenido cuando el usuario está trabajando en tablas de datos densas.
2.  **Navegación Local (Secundaria):** Utilicé un sistema de **Tabs (pestañas)** para organizar subsecciones relacionadas. Por ejemplo, dentro de "Gestión de Datos", las pestañas permiten alternar instantáneamente entre "Cargar Plantilla", "Historial de Cargas" y "Reporte de Errores". Esto mantiene el contexto del módulo sin recargar la página.
3.  **Navegación Contextual:** Implementé **Breadcrumbs (migas de pan)** y enlaces directos entre dashboards. Si David ve un colaborador en riesgo en su resumen general, puede hacer clic y saltar directamente al detalle de la ruta de ese colaborador. Esta interconectividad elimina clics innecesarios y fluye con el modelo mental de supervisión.

#### Validación forense: La prueba de fuego del Card Sorting y Tree Testing

No dejé la efectividad de esta arquitectura al azar. Realicé una validación forense cuyos resultados consolidé en el `entregable/09_resultados_de_card_sorting_y_tree_testing.pdf`. Utilicé un **Card Sorting Abierto** para entender cómo los usuarios de Gentera categorizaban mentalmente las funciones. Fue gratificante confirmar que la mayoría agrupaba naturalmente la "Creación de Grupos" y la "Segmentación" bajo una misma categoría, validando mi propuesta de AI.

Sin embargo, el verdadero triunfo fue el **Tree Testing**. Sometí la estructura de menús (solo texto, sin diseño) a pruebas con escenarios reales. Los resultados fueron contundentes: obtuvimos tasas de éxito de entre el **95% y el 98%** en tareas críticas. Carlos pudo localizar la función de "Cargar plantilla semanal" de forma casi instantánea, y Ana identificó dónde ver su progreso de capacitación sin un solo error de navegación. Estos números no son solo métricas; son la prueba de que la arquitectura propuesta resuena con los modelos mentales de los empleados, eliminando la fricción antes de que exista el diseño visual.

#### El lenguaje de Gentera: Un sistema de etiquetado orientado a la acción

Finalmente, me obsesioné con el lenguaje. En el `entregable/10_esquema_de_etiquetado_labeling_system.pdf`, definí un sistema de etiquetado que habla el idioma de la organización. En lugar de usar términos genéricos de software, integré conceptos familiares que eliminan la curva de aprendizaje. No escribimos "Upload file"; escribimos **"Subir Plantilla ADN"**. No hablamos de "Niveles de curso" de forma abstracta; usamos **"Toques con Formador"** y **"Estatus de Ruta"**.

Este etiquetado no es cosmético; es una herramienta de usabilidad. Cada botón y cada encabezado están orientados a la acción y al contenido. Al utilizar términos como **'Gerente Multiproducto'** o **'Concentrado Histórico'**, la plataforma deja de sentirse como un software externo y se percibe como una herramienta propia, diseñada por y para Gentera. La consistencia en este vocabulario es lo que construye la confianza del usuario en el sistema.

#### Reflexión estratégica: Escalabilidad y visión de largo plazo

Al concluir las `entregable/11_especificaciones_de_arquitectura_de_informacion.pdf`, me aseguré de que esta AI no solo resolviera el presente, sino que estuviera blindada para el futuro. Diseñé la estructura pensando en la **escalabilidad**. Por ejemplo, la sección de "Mi Ruta de Capacitación" está construida de tal forma que, cuando Gentera decida hacer la transición de 12 a 6 niveles de capacitación, la navegación no se rompa; solo se ajustará la lógica de visualización interna.

Esta arquitectura es la columna vertebral de GAC. Es invisible cuando funciona bien porque permite que el usuario fluya a través de sus tareas sin pensar en la herramienta. Con esta base sólida, validada y coherente, estábamos listos para dejar atrás los mapas y empezar a diseñar la coreografía de las interacciones. La estructura ya existía; ahora era momento de definir cómo se movería el usuario a través de ella.


Con la arquitectura de información blindada y validada, me enfrenté a un nuevo nivel de complejidad: la coreografía de las decisiones. Tenía el mapa, pero me faltaba el guion detallado de cómo el sistema debía reaccionar ante cada excepción, desde un error en la carga de la plantilla ADN hasta la lógica de reprogramación de un colaborador con faltas justificadas. Sentí que la estructura era sólida, pero el verdadero reto comenzaría al mapear los flujos de usuario, donde cada decisión de diseño debía ser un puente infalible entre la regla de negocio y la acción humana.

### Parte 6: Ingeniería de Interacción Mapeo de Flujos y Decisiones de Diseño

Al cerrar la arquitectura de información, sentí la satisfacción de haber puesto orden en el caos, pero también la presión de lo que venía: tenía el mapa, pero me faltaba la coreografía. Una estructura bien definida es, en esencia, una promesa silenciosa; te dice dónde están las cosas, pero no te garantiza que el viaje sea lógico o eficiente. Como responsable del producto, sabía que el éxito de GAC no dependía de que Carlos encontrara el botón de "Cargar", sino de lo que ocurría en los micro-momentos posteriores a ese clic. 

La transición hacia el mapeo de flujos fue un ejercicio de traducción. Tenía que convertir reglas de negocio áridas —como los cupos máximos por sede o la incompatibilidad de puestos en una misma sesión— en rutas intuitivas que eliminaran la fricción operativa que detectamos en el Discovery. Mi razonamiento fue pasar del "qué" al "cómo": si la AI era el esqueleto, los **User Flows** serían el sistema nervioso. Necesitaba diseñar trayectorias infalibles donde el usuario no tuviera que preguntarse "qué sigue", sino que el sistema lo guiara de forma natural, incluso ante el error.

#### El ecosistema de Carlos: Automatizando el "rompecabezas" manual

Empecé por el núcleo del sistema: el flujo de Carlos, nuestro Administrador. Su proceso actual era una pesadilla de 32 horas semanales de limpieza manual de Excels. Para GAC, diseñé una trayectoria que comenzaba en un punto de entrada crítico: el Dashboard de Administrador con una alerta de "Plantilla Pendiente". En lugar de un formulario complejo, opté por una interfaz de carga minimalista con un área de *drag-and-drop*. 

El verdadero diseño de interacción ocurrió después del clic de carga. Implementé un estado intermedio de **"Procesando Plantilla..." (RF-GAC-001)** para gestionar la expectativa del usuario mientras el sistema realizaba el cruce de datos. Mi decisión estratégica aquí fue no ocultar las inconsistencias, sino transformarlas en el centro de la acción. Si el sistema detectaba, por ejemplo, 15 inconsistencias (como correos mal formateados o puestos no mapeados), el flujo no se bloqueaba, sino que derivaba a Carlos a una pantalla de **Reporte Detallado de Errores**. 

> **Decisión de Diseño:** Elegí mostrar un resumen post-procesamiento con foco exclusivo en excepciones. El razonamiento fue simple: Carlos no necesita validar lo que está bien, necesita ser un "detective" eficiente de lo que está mal. Al agrupar los errores y ofrecer sugerencias de corrección inmediatas, logramos reducir su carga cognitiva, apuntando a esa reducción del 80% en el tiempo de procesamiento que nos fijamos como meta.

Posteriormente, abordé el flujo de **Segmentación y Ajuste de Grupos (RF-GAC-005)**. Aquí, el sistema asume el rol de proponente. El flujo genera automáticamente grupos basados en reglas de puesto y subdirección, pero mi intervención como diseñador fue blindar el control humano. Diseñé una interfaz de ajuste con herramientas de "arrastrar y soltar" participantes entre grupos. Cada movimiento gatilla un recálculo en tiempo real del cupo; si un grupo excede el máximo permitido, el sistema lanza una alerta visual inteligente, sugiriendo "Dividir Grupo" o "Mover Participante". No es solo una tabla; es una herramienta de gestión dinámica.

#### Blindando la comunicación masiva y el miedo al error

Uno de los momentos de mayor tensión para Carlos es el envío de convocatorias. En el proceso anterior, el riesgo de enviar un archivo .ical roto o un correo con el nombre equivocado a cientos de colaboradores era una fuente constante de estrés. Para mitigar esto, diseñé una **Central de Comunicaciones Unificada**. 

El flujo de envío masivo (RF-GAC-021) incluye un paso obligatorio de **Previsualización de Comunicaciones**. Antes de disparar los mensajes por Outlook, Teams o WhatsApp, Carlos puede ver exactamente cómo lucirá el mensaje en cada canal. Esta no es una función estética; es una barrera de seguridad psicológica. El sistema genera automáticamente los archivos .ical, eliminando la tarea manual más tediosa y propensa a errores del proceso original. Al final del flujo, el sistema no solo confirma el envío, sino que entrega un estado detallado: cuántos correos salieron, cuántos mensajes de Teams fueron entregados y si hubo algún rebote por dirección inválida.

#### La experiencia de autogestión: El viaje de Ana y David

Para los colaboradores como Ana y los líderes como David, el enfoque de los flujos cambió radicalmente hacia la visibilidad y la simplicidad. En el caso de Ana, el punto de entrada suele ser una notificación de "Nuevo Curso Asignado". Desde ahí, el flujo la lleva directamente a su **"Mapa Visual de Mi Ruta" (RF-GAC-012)**. 

Diseñé esta interacción como una línea de tiempo con hitos claros. Al hacer clic en un hito, Ana no solo ve la fecha y hora, sino que tiene un botón de acción inmediata: "Añadir a Calendario". Mi objetivo era reducir la distancia entre la información y la organización personal. Si Ana sabe exactamente dónde está y qué le falta para completar su nivel, la resistencia a la capacitación disminuye. El flujo termina cuando ella descarga su .ical, asegurando que el compromiso de asistencia quede anclado en su herramienta de trabajo diaria.

Para David, el Líder de Oficina, el flujo se centró en el **Drill-down de datos**. Su necesidad es identificar quién se está quedando atrás sin tener que preguntar uno por uno.
*   **Dashboard de Equipo:** Una vista de alto nivel con indicadores tipo "semáforo".
*   **Identificación de Riesgo:** El flujo permite filtrar por "Colaboradores Retrasados".
*   **Acceso al Detalle:** Con un solo clic, David puede entrar en la ruta individual de un colaborador (Vista Líder) para entender exactamente qué curso falta.
*   **Generación de Reporte:** El flujo de reportes permite seleccionar filtros por oficina y estatus, culminando en una previsualización antes de la exportación a Excel. 

Este diseño elimina la necesidad de que David solicite reportes manuales a Carlos, fomentando una cultura de autogestión basada en datos reales y actualizados.

#### Elena y la digitalización de la trinchera formativa

El flujo de Elena, la Formadora, representó el desafío de llevar lo analógico a lo digital sin entorpecer su labor docente. Su interacción comienza en su **Agenda de Cursos Asignados (RF-GAC-011)**. Diseñé un calendario visual donde cada bloque de curso es una puerta de entrada a la gestión del grupo.

Al "Abrir Grupo", Elena accede directamente al **Registro de Asistencia (RF-GAC-013)**. Sustituí las listas de papel por una interfaz de casillas rápidas (Presente/Ausente). Pero el valor agregado senior aquí fue la inclusión de un campo de **Feedback Cualitativo**. Elena ahora puede registrar notas sobre el desempeño del grupo en el mismo momento en que toma asistencia. Esta decisión de diseño conecta el dato administrativo con el impacto estratégico: los comentarios de Elena ahora viajan en el mismo flujo de datos que el estatus de capacitación, permitiendo a los líderes tomar decisiones informadas sobre el refuerzo de ciertos temas.

#### El inventario de pantallas: Un ecosistema de 14 vistas críticas

Para asegurar que estos flujos no tuvieran "callejones sin salida", realicé un inventario exhaustivo de 14 pantallas clave, categorizadas por su función y rol de usuario. Este listado no fue una simple enumeración, sino el resultado de mapear cada punto de decisión y cada estado de error identificado en los diagramas.

1.  **Módulo de Autenticación:** Login centralizado.
2.  **Dashboards Personalizados:** Cuatro vistas únicas (Admin, Colaborador, Líder, Formador) y una vista de Super Admin para monitoreo del sistema.
3.  **Gestión de Datos:** Pantallas de carga, resumen de procesamiento y el reporte detallado de inconsistencias.
4.  **Segmentación de Grupos:** La vista de propuestas automáticas y la interfaz de ajuste detallado de participantes.
5.  **Asignación de Recursos:** Vistas para que el Líder Operativo asigne formadores según disponibilidad.
6.  **Comunicaciones:** La central de envíos masivos con previsualización y reportes de estado.
7.  **Trazabilidad (Colaborador):** El mapa visual de la ruta y el historial de cursos.
8.  **Gestión de Equipo (Líder):** El dashboard de avance y la vista de detalle por colaborador.
9.  **Agenda y Asistencia (Formador):** El calendario de cursos y la interfaz de registro de asistencia con feedback.
10. **Reportes y KPIs:** Paneles de indicadores clave para la toma de decisiones directivas.
11. **Configuración de Sistema:** Interfaces para carga de archivos maestros (sedes, mapeos) y gestión de reglas de negocio.
12. **Gestión de Usuarios:** Lista y formularios de creación/edición de perfiles.
13. **Integraciones:** Pantalla de configuración para Outlook, Teams y WhatsApp API.
14. **Monitoreo:** Logs de actividad y errores para asegurar la estabilidad del sistema.

#### Reflexión sobre la eficiencia operativa y el valor humano

Al finalizar este mapeo, me di cuenta de que no estábamos diseñando solo una plataforma de gestión, sino una herramienta de dignificación del trabajo. Al automatizar el 95% de la identificación de elegibles y el 100% del envío de invitaciones, no solo le devolvimos 30 horas semanales a Carlos. Lo que realmente hicimos fue eliminar el miedo al error que paraliza la operación. 

Cada decisión de diseño, desde el rombo de decisión en el flujo de inconsistencias hasta la previsualización del mensaje de WhatsApp, fue tomada para blindar la confianza del usuario en el sistema. La eficiencia operativa es el medio, pero el fin es la claridad total: que cada colaborador en Gentera sepa que su crecimiento no depende de un error en un Excel, sino de una ruta de aprendizaje diseñada para su éxito. Con esta lógica de interacción blindada y validada, el sistema ya tenía alma; ahora necesitaba cuerpo.


Tener los flujos mapeados me dio la seguridad de que la lógica funcionaba, pero al ver la complejidad de algunas interacciones, como el ajuste manual de grupos, me asaltó una duda técnica: ¿cómo íbamos a estructurar visualmente tanta información sin abrumar al usuario? El "guion" estaba escrito, pero el escenario seguía vacío. Necesitaba empezar a construir el esqueleto real de cada pantalla, definiendo la jerarquía de cada botón y la densidad de cada tabla antes de siquiera pensar en colores o tipografías.

### Parte 7: El Esqueleto del Producto Wireframes Wireflows y Anotaciones Técnicas

#### El salto del diagrama al plano estructural

Tener los flujos mapeados me dio la seguridad de que la lógica funcionaba, pero al ver la complejidad de algunas interacciones, como el ajuste manual de grupos, me asaltó una duda técnica: ¿cómo íbamos a estructurar visualmente tanta información sin abrumar al usuario? El "guion" estaba escrito, pero el escenario seguía vacío. Necesitaba empezar a construir el esqueleto real de cada pantalla, definiendo la jerarquía de cada botón y la densidad de cada tabla antes de siquiera pensar en colores o tipografías. 

Mi razonamiento en este punto fue pragmático: si no podíamos resolver la navegación en blanco y negro, el color solo serviría para camuflar errores de usabilidad que explotarían en desarrollo. No estaba "dibujando pantallas"; estaba construyendo un sistema de navegación que debía soportar reglas de negocio implacables sin que el usuario sintiera el peso de la base de datos. Para los cuatro roles —Administrador, Colaborador, Líder y Formador—, la interfaz debía ser un facilitador silencioso, no un obstáculo técnico.

#### La divergencia necesaria: del papel al "Crazy 8s"

Antes de abrir Figma, convoqué a Rodrigo (Líder de Proyecto) y al Tech Lead a una sesión de ideación intensiva. Sabía que si no involucraba a ingeniería desde el bocetaje, corríamos el riesgo de diseñar interacciones elegantes pero imposibles de implementar en el tiempo del sprint. Empezamos formulando preguntas "Cómo podríamos" (HMW) para enfocar el esfuerzo: "¿Cómo podríamos hacer que el proceso de identificación de candidatos para Carlos fuera casi instantáneo y libre de errores?" o "¿Cómo podríamos presentar el progreso de Ana de forma que la motivara a seguir?".

Utilicé la técnica de **Crazy 8s** para forzar la rapidez. Doblamos hojas en ocho secciones y dedicamos un minuto por cuadro para esbozar variantes de los dashboards. Esta presión temporal eliminó el juicio y nos permitió explorar layouts que de otro modo habríamos descartado por "arriesgados". Surgieron ideas potentes: el mapa visual de la ruta de Ana nació de un boceto rápido que buscaba alejarse de las aburridas listas de cursos. Al final de la sesión, teníamos una colección de bocetos de baja fidelidad que, aunque rudimentarios, ya contenían la semilla de la jerarquía visual que necesitábamos. Priorizamos los conceptos mediante votación y esos fueron los insumos que me llevé a la mesa de diseño digital.

#### Construyendo en escala de grises: la disciplina del Layout First

Ya en Figma, inicié la creación de los **wireframes de media fidelidad**. Mi enfoque fue estrictamente "Layout First". Omití deliberadamente cualquier rastro de la marca Gentera; no quería que Lalo o Carlos se distrajeran con el tono de rojo o el peso de la fuente. Usé una escala de grises para indicar importancia: lo oscuro atrae el ojo, lo claro retrocede. 

Utilicé texto realista para todas las etiquetas y botones críticos. Nada de "Lorem Ipsum" en los CTAs (Call to Action); si un botón debía decir "Confirmar Segmentación", eso era lo que aparecía. Los placeholders con una "X" marcaron el lugar de los iconos y gráficos, permitiéndonos validar si la disposición de los elementos permitía completar las tareas en menos de tres clics. Esta fase fue un ejercicio de honestidad estructural: si el flujo de carga de plantilla se sentía pesado en wireframes, era porque la arquitectura de información necesitaba un ajuste, no un mejor diseño visual.

#### El centro de mando: dashboards diferenciados por propósito

Diseñé una estructura global basada en un menú lateral persistente. En mi experiencia, para plataformas de gestión con navegación profunda, este patrón es superior al menú superior porque permite escalar secciones sin romper el layout. Para Carlos (Administrador), el dashboard se convirtió en un tablero de control operativo. Dividí el área central en tarjetas dinámicas de resumen. 

*   **Jerarquía de urgencia:** Coloqué en la parte superior una sección de "Alertas Críticas" que solo aparece si el sistema detecta inconsistencias en la carga o grupos que no alcanzan el cupo mínimo (RN-SEG-002). 
*   **Acciones inmediatas:** Justo debajo, inserté tarjetas como "Plantilla Pendiente de Cargar" con un CTA prominente. 
*   **Contexto secundario:** Los reportes históricos quedaron relegados a la periferia. 

Este diseño asegura que Carlos, al iniciar sesión, no tenga que buscar trabajo; el sistema le presenta exactamente qué incendios debe apagar o qué procesos debe iniciar.

#### La psicología de la espera: la pantalla de carga de Carlos

Uno de los momentos de mayor fricción identificados en la investigación era la ansiedad durante el procesamiento de datos. Al diseñar la pantalla de "Gestión de Datos - Cargar Plantilla", implementé un área de *Drag & Drop* generosa para el archivo Excel, pero la pieza clave fue el **indicador de progreso**. 

> **Decisión de diseño:** Incluí explícitamente el texto "Procesando Plantilla..." junto a una barra de carga. Sabiendo que el cruce de datos y la aplicación de las reglas (RN-ID-001 a RN-ID-007) puede tomar entre 5 y 10 minutos, el wireframe debía contemplar este estado de espera. No es solo un elemento técnico; es una herramienta de gestión de expectativas. Si el usuario ve que el sistema "está trabajando", su tolerancia a la espera aumenta drásticamente.

#### El quirófano de grupos: Drag & Drop y alertas en tiempo real

La pantalla de "Detalle y Ajuste de Grupo" fue, sin duda, la más compleja de estructurar. Tenía que permitir que Carlos interviniera en la automatización sin romper la lógica del sistema. Diseñé una tabla de participantes donde cada fila es un elemento interactivo. 

Implementé la funcionalidad de **Drag & Drop** para que Carlos pudiera mover colaboradores entre grupos de forma fluida. Para blindar esta libertad manual, integré alertas visuales que se activan contextualmente: si al mover a un participante el grupo original cae por debajo del cupo mínimo, el sistema dispara un aviso inmediato sugiriendo "Fusionar Grupo" (RF-GAC-008). Además, añadí un detalle de regla crucial: un icono de información junto a ciertos nombres que, al pasar el cursor (tooltip), explica por qué esa persona tiene una ruta específica (ej. "Gerente Multiproducto: Asesor CIE en oficina"). Esta transparencia reduce las llamadas de soporte y empodera a Carlos en su toma de decisiones.

#### Ana y la gamificación de la ruta: el mapa visual

Para Ana (Colaboradora), el enfoque fue radicalmente distinto. Ella no necesita gestión, necesita claridad y motivación. Diseñé su dashboard centrado en un **Mapa Visual de Ruta**. En lugar de una tabla estática de cursos, creé una línea de tiempo con nodos clicables que representan los niveles: Básico, Intermedio y Avanzado. 

*   **Estados de los nodos:** Utilicé convenciones visuales claras: verde para completado, amarillo para el hito actual (en progreso) y gris para lo pendiente. 
*   **Métrica de impacto:** Coloqué el indicador de "% de Avance General" (calculado por RF-GAC-014) en un tamaño de fuente dominante. 

Este wireframe no solo comunica qué curso sigue; cuenta la historia del crecimiento de Ana en Gentera. Al hacer clic en un nodo, se despliega el "Detalle de Curso", donde incluí un botón para descargar el archivo `.ical` (RF-GAC-022), asegurando que la capacitación se integre sin fricción en su agenda diaria de Outlook.

#### Blindaje técnico: anotaciones y reglas de negocio invisibles

Un wireframe sin anotaciones es solo un dibujo; con ellas, es un documento de ingeniería. Realicé un **blindaje forense** de cada pantalla mediante notas laterales detalladas. No dejé nada a la interpretación del desarrollador. 

Por ejemplo, en la pantalla de Login, especifiqué que el campo "Número de Empleado" solo debe aceptar caracteres numéricos y que el botón "Iniciar Sesión" debe permanecer deshabilitado hasta que ambos campos cumplan con el formato requerido. Documenté comportamientos dinámicos, como el hecho de que la tarjeta de "Inconsistencias" solo sea visible si el contador es mayor a cero. Este nivel de detalle es lo que separa un diseño "bonito" de uno que se puede construir con precisión quirúrgica, minimizando las idas y vueltas con el equipo de backend.

#### Wireflows: el guion de la experiencia cinetica

Para validar la fluidez del sistema, conecté los wireframes en **Wireflows**. Ya no eran pantallas aisladas, sino secuencias de interacción. Mapeé el flujo completo de "Enviar Convocatorias Masivas", desde que Carlos termina de ajustar los grupos hasta que recibe la confirmación de envío. 

En este flujo, diseñé una pantalla de previsualización que muestra cómo se verá el mensaje en Outlook, Teams y WhatsApp. Incluí contadores de destinatarios antes del envío final para evitar errores catastróficos. Al ver el wireflow completo, pudimos identificar un "punto ciego": ¿qué pasa si el envío falla? Así que añadí una ruta de error que lleva a un reporte de fallos de envío con acciones sugeridas. Estos wireflows actuaron como el guion visual que permitió a los stakeholders "recorrer" la plataforma antes de que existiera una sola línea de código.

#### Validación y optimización: el filtro de la realidad

Presenté este esqueleto a Lalo y Carlos en una sesión de validación crítica. No buscábamos aprobación estética, sino operativa. El feedback fue oro puro: Carlos sugirió que el reporte de inconsistencias agrupara los errores por tipo para poder corregirlos en bloque, una mejora de eficiencia que no habíamos contemplado. Elena (Formadora) pidió que, al registrar asistencia, pudiera añadir notas rápidas por participante para capturar feedback cualitativo de la sesión.

También tomé la decisión estratégica de optimizar las vistas de David (Líder) para dispositivos móviles. Entendí que un Gerente de Oficina a menudo consulta el avance de su equipo mientras se desplaza entre sucursales. Aseguré que el "semáforo de estatus" fuera legible y que los botones de "Enviar Recordatorio" por WhatsApp fueran fáciles de accionar con el pulgar. Estas revisiones no fueron simples cambios; fueron evoluciones del producto basadas en la realidad de la trinchera.

> **Reflexión senior:** La disciplina de trabajar en media fidelidad es la prueba de fuego de cualquier Product Designer. Es fácil enamorarse de un degradado o de una sombra sutil, pero cuando te quitan el color, solo queda la estructura. Si la interfaz no se sostiene en gris, no se sostendrá en producción. Al finalizar esta etapa, sentí que por fin teníamos un plano sólido: el sistema no solo era lógico, sino que ahora era tangible y, sobre todo, blindado contra malentendidos técnicos.


Tener el esqueleto validado y anotado nos dio la luz verde para avanzar, pero al ver los wireflows estáticos, me asaltó una preocupación: ¿realmente se sentiría "automatizado" el proceso para Carlos o solo sería una versión digital de su actual calvario? Necesitaba comprobar si las transiciones y la retroalimentación del sistema eran lo suficientemente rápidas para no romper el flujo de trabajo en una mañana de lunes frenética. El plano estaba listo, pero ahora era el momento de construir el simulacro interactivo para ver si la estructura que diseñamos resistiría el contacto real con los dedos de los usuarios en la fase de prototipado y validación.

### Parte 8: Simulación de la Experiencia Prototipado Interactivo y Validación de Usabilidad

#### El simulacro que precede a la realidad

Al terminar el blindaje de los wireframes anotados, me encontré en ese punto crítico donde el diseño deja de ser un plano arquitectónico y debe empezar a comportarse como un organismo vivo. Tenía ante mí una estructura lógica impecable, pero me asaltaba una duda que solo la interacción real podía despejar: ¿realmente la automatización de GAC se sentiría como un alivio para Carlos o terminaría siendo una versión digital de su actual calvario administrativo? Como diseñador, sé que una cosa es dibujar un botón que dice "Procesar Plantilla" y otra muy distinta es simular la tensión de esos segundos de espera mientras el sistema analiza miles de celdas de Excel.

La urgencia de construir un prototipo interactivo no era un capricho metodológico; era una necesidad de supervivencia para el proyecto. Necesitaba validar si las transiciones, el feedback visual y la jerarquía que habíamos definido en gris resistirían el contacto real con los dedos y el cursor de los usuarios antes de invertir una sola hora en el diseño de alta fidelidad o, peor aún, en el desarrollo de código. Mi objetivo era transformar esos artefactos estáticos en un simulacro lo suficientemente convincente como para provocar reacciones viscerales en los stakeholders. Si el flujo de segmentación de grupos iba a fallar en su lógica de uso, quería que fallara ahora, en Figma, y no en una mañana de lunes frenética con Carlos intentando enviar convocatorias a trescientas personas.

#### Construcción del ecosistema interactivo en Figma

Para dar vida a los wireframes de media fidelidad, no me limité a enlazar pantallas de forma lineal. Seguí una estrategia de construcción de ecosistema donde cada "Hotspot" o zona interactiva tenía un propósito funcional claro. Mi primer paso fue importar la estructura de los wireflows y empezar a definir las áreas de interacción. No quería un prototipo de "pantalla a pantalla", sino uno que simulara estados de sistema. 

Utilicé una técnica de componentes con múltiples estados para manejar la complejidad sin multiplicar el número de pantallas innecesariamente. Por ejemplo, para las tablas de colaboradores, no creé diez versiones diferentes; configuré estados de componente que permitían simular el filtrado por "Inconsistencias" o por "Estatus de Avance". Esto me permitió que, cuando alguien hiciera clic en un filtro, la respuesta fuera instantánea y lógica, imitando el comportamiento de una base de datos real.

En cuanto a las transiciones, tomé la decisión deliberada de utilizar únicamente movimientos instantáneos o de deslizamiento simple. Mi razonamiento fue técnico y estratégico: en esta etapa de media fidelidad, cualquier animación compleja o "micro-interacción" decorativa es una distracción. Necesitaba que el foco de Lalo y Carlos estuviera en la usabilidad y en la fluidez del proceso, no en lo bonito que se movía un modal. Cada conexión en el prototipo fue una validación silenciosa de los diagramas de flujo previos; si un botón no llevaba a donde el flujo decía que debía ir, era el momento de corregir la arquitectura antes de que se volviera inamovible.

#### El escenario de Carlos: automatización bajo control

El flujo más complejo y el que más me quitaba el sueño era el de "Carga, Procesamiento y Ajuste de Segmentación" para Carlos. Sabía que este era el corazón de GAC. Para prototiparlo, diseñé una secuencia que empezaba con la interacción de "Arrastrar y Soltar" (Drag & Drop) para la plantilla de capacitación. No quería un simple botón de "Cargar"; quería que Carlos sintiera la acción física de entregarle el trabajo pesado al sistema.

Simulé el proceso de análisis mediante un indicador de progreso que desembocaba en un "Resumen de Procesamiento". Aquí es donde el prototipo actuó como una herramienta de diseño de servicios: mostré métricas claras y, sobre todo, una sección prominente de "Inconsistencias Detectadas". Mi razonamiento senior me dictaba que el valor de la automatización no está en que todo salga perfecto, sino en cómo el sistema ayuda al humano cuando algo sale mal. Prototipé la navegación directa desde el error hasta el "Reporte Detallado de Inconsistencias", permitiendo que Carlos simulara la revisión de datos problemáticos sin perder el contexto de su tarea principal.

Para la "Gestión de Grupos", implementé una visualización de tarjetas dinámicas. El prototipo permitía a Carlos ver las propuestas generadas automáticamente por el sistema y, mediante una simulación de movimiento, ajustar participantes manualmente entre grupos. Este nivel de interactividad era vital para validar que, aunque el sistema automatizara la segmentación, Carlos mantenía el control absoluto y la capacidad de intervenir en las excepciones, eliminando el miedo a que "la máquina" cometiera errores que él no pudiera corregir.

#### La experiencia multi-rol: de la motivación al control operativo

Una vez blindado el flujo del administrador, expandí el prototipo hacia los otros tres roles críticos, asegurándome de que cada uno tuviera un punto de partida claro y un escenario de éxito definido.

*   **Para Ana (Colaboradora):** Me enfoqué en el "Mapa Visual de Mi Ruta". Quería comprobar si la metáfora visual de nodos y niveles era comprensible. Prototipé la interacción de clic en cada hito para desplegar los detalles del curso y, lo más importante, la funcionalidad de descarga del archivo .ical. Al ver cómo el prototipo simulaba el agendamiento automático en su calendario personal, supe que habíamos dado en el clavo con la reducción de fricción informativa.
*   **Para David (Líder):** La clave fue el dashboard de "Mi Equipo". Implementé un sistema de "semáforos" visuales (en escala de grises, usando diferentes tramas y contrastes) para identificar colaboradores en riesgo. Diseñé la capacidad de "drill-down", permitiendo que David pasara de una vista general de su oficina a ver el detalle individual de un colaborador con solo dos clics. El prototipo demostró que la jerarquía de información permitía tomar decisiones de apoyo en segundos, no en horas de revisión de correos.
*   **Para Elena (Formadora):** El reto era la movilidad y la sencillez. Prototipé su agenda visual centralizada y el proceso de registro de asistencia. Eliminé cualquier campo innecesario, dejando solo el marcado de "Presente/Ausente" y un botón de guardado con un mensaje de confirmación claro. El objetivo era que Elena sintiera que el sistema trabajaba para ella, eliminando el papel de su flujo diario y permitiéndole enfocarse en la capacitación.

#### El momento de la verdad: feedback forense y hallazgos críticos

Presenté este ecosistema vivo a Lalo y Carlos en una sesión de Google Meets que se sintió como una prueba de fuego. No fue una presentación pasiva; les entregué el control del prototipo (dentro de lo que la herramienta permite) y los guié a través de los escenarios. El entusiasmo fue inmediato. Ver los flujos "en acción" disipó dudas que llevábamos semanas discutiendo en abstracto. La tangibilidad del producto hizo que, por primera vez, los stakeholders no solo entendieran GAC, sino que lo desearan.

Sin embargo, como suele suceder con los prototipos bien construidos, estos actuaron como "detectores de mentiras". Carlos, al interactuar con el flujo de carga, lanzó una pregunta que cambió nuestra prioridad técnica para la siguiente fase: "¿Qué pasa si me doy cuenta de que el error es masivo y necesito volver a subir la plantilla corregida?". El prototipo inicial solo contemplaba la "ruta feliz" de una carga única. Este hallazgo fue oro puro; nos permitió identificar la necesidad de un flujo de re-subida y de una opción para "ignorar" errores menores antes de que los desarrolladores escribieran una sola línea de lógica de validación estricta.

Por otro lado, Lalo identificó que, aunque el flujo de envío de convocatorias era eficiente, necesitábamos permitir la personalización del texto de las invitaciones para campañas específicas, algo que habíamos simplificado demasiado en los wireframes. Estas sesiones de validación no solo confirmaron que íbamos por el buen camino, sino que actuaron como un provocador de necesidades estratégicas. Descubrimos que Elena necesitaba integración con Outlook y que David buscaba benchmarks comparativos con otras direcciones.

> **Reflexión senior:** El prototipo de media fidelidad es el filtro de honestidad más barato del diseño de producto. Es doloroso ver cómo un usuario se traba en un flujo que tú creías perfecto, pero es infinitamente más barato corregir un enlace en Figma que reconstruir un módulo en React. Al finalizar estas sesiones, no solo teníamos un diseño validado; teníamos un equipo de stakeholders alineado y, sobre todo, una lista de "ajustes de última hora" que habrían sido catastróficos si hubieran aparecido en producción.


Con los flujos validados y el "esqueleto" del producto resistiendo el contacto real, la pregunta ya no era si el sistema funcionaba, sino cómo se sentiría emocionalmente para los miles de colaboradores de Gentera. El gris de los wireframes nos había servido para blindar la lógica, pero ahora debíamos inyectarle el ADN de la marca, transformando esa estructura funcional en una interfaz vibrante, humana y profesional. Me preparé para entrar en la fase donde el diseño de interacción se encuentra con la identidad visual, sabiendo que el sistema de diseño que estábamos por construir debía ser lo suficientemente flexible para escalar, pero lo suficientemente rígido para no romperse en manos de diferentes equipos de desarrollo.

### Parte 9: Identidad y Estética Diseño de Interfaz Ui y Sistemas de Diseño

#### La metamorfosis de la estructura al organismo vivo

Los wireframes de media fidelidad habían resistido el contacto con los usuarios, pero seguían siendo un esqueleto gris y silencioso. Teníamos la lógica blindada, pero nos faltaba el alma. En un proyecto para una institución como Gentera, donde el "Sentido Humano" no es un eslogan sino un valor operativo, el diseño visual no podía ser una capa de pintura final; tenía que ser la interfaz que transformara la desconfianza en control y la confusión en autonomía. Me enfrenté al lienzo en blanco de la alta fidelidad con una premisa clara: si Carlos, el administrador, sentía que la plataforma era una herramienta burocrática más, habríamos fracasado. La estética debía reducir la carga cognitiva, no aumentarla.

Inicié esta transición articulando lo que llamé la "capa de confianza". Mi razonamiento fue que, al tratar con datos críticos de capacitación y segmentación de personal, la interfaz debía respirar profesionalismo financiero pero con la cercanía de una herramienta moderna de productividad. No buscaba una explosión artística, sino una ingeniería visual que permitiera a los líderes navegar procesos complejos sin fricción. El gris funcional de las etapas anteriores fue el cimiento necesario, pero ahora tocaba inyectar el ADN de la marca para que el producto se sintiera como una extensión natural del ecosistema de Gentera.

#### El rigor del estilo: Claridad, Consistencia y Eficiencia

Antes de aplicar el primer color, establecí tres principios rectores para el estilo visual de GAC: Claridad, Consistencia y Eficiencia. No quería que el equipo de diseño se perdiera en tendencias efímeras, así que me sumergí en la creación de moodboards que capturaran el concepto de "Corporativo Humano". Exploré referentes de dashboards financieros de última generación y plataformas educativas de alto rendimiento, buscando ese equilibrio entre la sobriedad de una institución bancaria y la agilidad de una startup tecnológica.

Diseñé tres direcciones visuales distintas, pero terminé decantándome por una que utilizaba el espacio en blanco de forma generosa para favorecer la concentración. Mi objetivo con el moodboarding fue despejar cualquier ruido visual que pudiera distraer a Carlos durante la carga de plantillas masivas. Cada icono, cada sombra y cada radio de borde fue seleccionado para transmitir una sensación de orden y modernidad. Esta fase de definición visual fue mi brújula; me permitió asegurar que, antes de diseñar la primera pantalla final, todos en el equipo estuviéramos alineados con un tono de voz visual que fuera amigable pero profundamente robusto.

#### Alquimia cromática y jerarquía tipográfica

La aplicación del color fue un ejercicio de precisión técnica. Gentera posee una paleta institucional vibrante y llena de significado, y mi tarea fue traducirla al entorno digital sin comprometer la usabilidad. Utilicé el **Morado (526C)** como mi color primario para la navegación y elementos de marca, proporcionando la estabilidad visual necesaria. Reservé el **Turquesa (3268C)** para las acciones de éxito y el progreso positivo, mientras que el **Rosa (221C)** y el **Naranja (158C)** se convirtieron en mis aliados para alertas y acentos específicos que requerían la atención inmediata del usuario. El **Gris (431C)** fue la base de mi escala de neutrales, permitiéndome crear profundidades y separaciones sutiles sin saturar la vista.

Traduje cada uno de estos Pantones a sus valores HEX exactos para asegurar que el equipo de desarrollo de Dacodes no tuviera margen de error. En paralelo, definí una arquitectura tipográfica estricta. Sabía que Carlos pasaría horas frente a tablas densas de datos, por lo que seleccioné una familia tipográfica con una legibilidad excepcional en pantallas de diversas resoluciones.
*   **H1 y H2:** Para títulos de sección claros que ubiquen al usuario instantáneamente.
*   **Body Text:** Con un interlineado optimizado para reducir la fatiga visual durante la lectura de reportes.
*   **Labels y Captions:** Con pesos específicos para diferenciar metadatos sin competir con la información principal.

Esta jerarquía no fue estética; fue una herramienta de navegación. Sofía, la colaboradora, debía encontrar su progreso de capacitación de forma motivadora y clara, y eso solo se logra cuando el ojo sabe exactamente dónde aterrizar gracias a un contraste y tamaño de fuente bien calibrados.

#### La precisión del Grid de 8pt en la Alta Fidelidad

Con la guía de estilo aprobada, procedí a la construcción de las pantallas de alta fidelidad. Aquí es donde la intuición del diseño se encuentra con la matemática del producto. Implementé un **Grid System de 8pt** para gobernar cada píxel de la interfaz. Este sistema de rejilla fue mi ley para el espaciado, la alineación y el balance visual; si un elemento no encajaba en un múltiplo de ocho, no pertenecía a la pantalla.

Esta disciplina matemática me permitió diseñar el Dashboard del Administrador con una armonía que facilitaba la interpretación de gráficos complejos. Integré iconografía minimalista y consistente, diseñada para guiar al usuario hacia los *Call to Action* (CTA) principales sin necesidad de explicaciones adicionales. Cada componente, desde las tarjetas de progreso de los colaboradores hasta los modales de asignación de formadores, fue refinado para que el espaciado interno (*padding*) y externo (*margin*) fuera impecable. El resultado fue una interfaz que se sentía "atada" y profesional, eliminando esa sensación de desorden que suele plagar a las herramientas internas corporativas.

#### Arquitectura de componentes: El sistema de diseño GAC

Para garantizar que GAC pudiera escalar y que el mantenimiento fuera sostenible, sistematicé cada decisión visual en una librería de componentes robusta en Figma. Adopté la metodología de **Atomic Design** para organizar los activos:
*   **Átomos:** Definí los estilos globales de color, tipografía, efectos de sombra y radios de esquina.
*   **Moléculas:** Construí botones con sus variantes (primario, secundario, con icono) e inputs de formulario con validaciones integradas.
*   **Organismos:** Ensamblé componentes complejos como las tablas de datos con filtros, barras de navegación lateral y tarjetas de curso.

Mi obsesión en este paso fue la definición de los **estados de interacción**. No me limité a diseñar el botón "feliz"; documenté minuciosamente los estados *Hover, Active, Disabled y Focus*. Esta infraestructura lógica fue mi regalo para los desarrolladores: una fuente única de verdad que eliminaba las suposiciones. Diseñar este mini sistema de diseño fue una inversión estratégica; sabía que, al entregar estos componentes bien estructurados, el equipo de desarrollo podría reutilizar código de forma eficiente, asegurando que cualquier nueva funcionalidad que se agregue en el futuro mantenga la misma integridad visual que el primer día.

#### Blindaje de accesibilidad y el protocolo de Handoff

Mi compromiso con el "Sentido Humano" de Gentera se manifestó finalmente en un rigor absoluto por la accesibilidad. No consideré el diseño terminado hasta que verifiqué que cada combinación de color cumpliera con el estándar **WCAG AA** como mínimo. Utilicé herramientas de comprobación de contraste para asegurar que incluso los usuarios con deficiencias visuales leves pudieran leer la información crítica sin dificultad. Diseñé indicadores de foco altamente visibles para permitir una navegación fluida mediante el teclado, una necesidad real para usuarios que prefieren la velocidad de los atajos en tareas administrativas repetitivas.

El proceso culminó con un **Handoff** meticuloso. Preparé los archivos de Figma no como una galería de arte, sino como un plano técnico de ingeniería. Documenté las especificaciones visuales, los comportamientos de las microinteracciones y las reglas de los componentes. Me aseguré de que el equipo de desarrollo recibiera una guía clara sobre cómo los elementos debían comportarse en diferentes estados y resoluciones. Al cerrar esta actividad, sentí la satisfacción de saber que no estaba entregando solo "pantallas bonitas", sino un sistema funcional, inclusivo y listo para ser transformado en código de alto nivel.

> **Reflexión senior:** La estética en un producto B2B o de gestión interna a menudo se subestima, pero es precisamente donde más valor aporta. Un diseño visual limpio y ordenado no es un lujo; es una herramienta que reduce la carga cognitiva del usuario, permitiéndole tomar decisiones más rápidas y con menos errores. En GAC, el éxito de la interfaz radica en que el orden visual comunica seguridad y control a los líderes de Gentera, transformando una tarea administrativa pesada en una experiencia de gestión fluida y profesional.

**Reflexión final:**
Al finalizar el desarrollo de estos prototipos interactivos de alta fidelidad, sentí que habíamos cruzado el puente definitivo entre la idea y la realidad. Ver cómo la lógica de negocio se fusionaba con la identidad de Gentera me confirmó que el diseño, cuando se ejecuta con rigor técnico, tiene el poder de dignificar el trabajo diario de las personas. Esta actividad no solo nos dejó una interfaz estética y funcional, sino que sentó las bases de un lenguaje visual escalable que permitirá a la plataforma GAC crecer junto con las ambiciones de la institución. El mayor aprendizaje fue comprobar que, incluso en los sistemas más automatizados, el factor humano debe ser el eje que dicte cada píxel y cada interacción.