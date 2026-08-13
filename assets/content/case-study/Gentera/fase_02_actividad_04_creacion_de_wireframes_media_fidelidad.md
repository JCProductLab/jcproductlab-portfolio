# Fase 2: Idear y Diseñar (Ideation & Prototyping)

## Actividad_04_Creación de Wireframes (Media Fidelidad)

### Parte 1: La Génesis del Concepto Brainstorming y Divergencia Creativa

#### El lienzo en blanco y la presión de la evidencia

Tenía los Journey Maps de la Fase 1 proyectados en la pantalla y la sensación era de una urgencia casi física: sabíamos exactamente qué le dolía a Carlos en su día a día, pero aún no teníamos ni un solo trazo de la medicina que iba a curarlo. Cerrar la fase de descubrimiento es un momento de vulnerabilidad para cualquier diseñador; es el punto donde dejas de diagnosticar y empiezas a operar. Mi razonamiento en ese instante fue pragmático: no podíamos permitirnos el lujo de enamorarnos de la primera solución que se nos ocurriera. Necesitábamos un espacio de divergencia controlada donde la cantidad de ideas primara sobre cualquier pretensión estética.

Inicié la **Actividad 1: Brainstorming y Bocetaje** con una premisa innegociable: cada línea que trazáramos en el papel o en el lienzo digital debía ser una respuesta directa a un dolor real. No estábamos diseñando pantallas bonitas; estábamos articulando una solución para la carga operativa de Gentera. Mi objetivo era transformar ese "qué duele" en un "cómo lo resolvemos" de la manera más rápida y económica posible, antes de comprometer un solo píxel en Figma.

#### La arquitectura del espacio de ideación

Para que una sesión de brainstorming no se convierta en una charla estéril, la preparación debe ser quirúrgica. Configuré nuestro entorno de trabajo en FigJam reuniendo los insumos críticos que habíamos destilado semanas atrás. Puse en el centro las fichas de nuestras **User Personas**: Carlos (el Coordinador Detallista), Ana (la Colaboradora), David (el Líder) y Elena (la Formadora). No eran solo nombres; eran recordatorios constantes de para quién estábamos construyendo.

Articulé el equipo de forma estratégica. No quería solo diseñadores en la sala; invité al Tech Lead y a Rodrigo, nuestro Project Leader, además de asegurar la participación de Lalo y el propio Carlos desde el lado de Gentera. Mi lógica era simple: si el Tech Lead me decía en ese momento que una idea era inviable, me ahorraba tres semanas de retrabajo futuro. Si Carlos veía un flujo y me decía que no encajaba con su realidad operativa, podíamos pivotar en segundos. Esta alineación no fue logística, sino un blindaje contra funcionalidades superfluas que no aportaran a las métricas de éxito del proyecto.

#### El motor de la sesión: Preguntas "How Might We"

Antes de tocar un lápiz, forcé al equipo a procesar los hallazgos mediante la formulación de preguntas **How Might We (HMW)**. Esta técnica es el puente que transforma un problema en una oportunidad de diseño. Tomé los puntos de dolor más críticos y los redacté como desafíos específicos:

*   **Para Carlos:** "¿Cómo podríamos hacer que el proceso de carga y cruce de la plantilla de ADN sea casi instantáneo y libre de errores?". Esta pregunta nos obligó a pensar más allá de un simple botón de "subir", enfocándonos en la automatización de reglas de negocio complejas como las de "Gerente Multiproducto".
*   **Para Ana:** "¿Cómo podríamos presentar su ruta de capacitación de una manera motivadora y fácil de entender de un vistazo?". Aquí el reto era la claridad cognitiva y la gamificación implícita del progreso.
*   **Para David:** "¿Cómo podríamos darle una visión clara del progreso de su equipo sin que tenga que solicitar reportes?". La respuesta debía ser la visibilidad 360 y la proactividad.

Estas preguntas actuaron como el filtro de calidad de la sesión. Si una idea no respondía a un HMW, se descartaba. Fue un ejercicio de disciplina que mantuvo al equipo enfocado en la solución de problemas, no en la decoración de interfaces.

#### La intensidad del Crazy 8s: Superando el bloqueo

Para romper la inercia del pensamiento lineal, ejecuté la técnica de **Crazy 8s**. Es un ejercicio de alta presión: doblar una hoja en ocho secciones y dedicar exactamente un minuto a cada una para bocetar ocho variaciones de una misma pantalla. La intensidad es la clave; cuando tienes 60 segundos, tu cerebro deja de buscar la perfección y empieza a buscar la esencia.

Me centré especialmente en los layouts de los dashboards. En un minuto dibujaba un menú lateral con tarjetas de resumen; en el siguiente, probaba una navegación superior con gráficos de barras; en el tercero, un feed de actividad en tiempo real. Este ejercicio me permitió explorar estructuras de navegación y jerarquías de información que maximizaran la eficiencia de Carlos. El objetivo era encontrar ocho formas distintas de presentar la carga de datos, forzándome a ir más allá de lo obvio y descubriendo que, a veces, la solución más simple —un área de *drag & drop* prominente— era la más potente.

#### De la idea al trazo: Solution Sketches de baja fidelidad

Tras la explosión de ideas del Crazy 8s, pasé a desarrollar los **Solution Sketches**. Aquí es donde la baja fidelidad se vuelve estratégica. Utilicé formas básicas, rectángulos y texto simple para definir la estructura de la interfaz. Mi mentalidad en este punto fue de una austeridad absoluta: si una funcionalidad no era esencial para cumplir las reglas de negocio de Gentera, no entraba en el boceto.

Anoté cada trazo con lógica técnica. No me importaba el color de los botones, sino qué pasaba cuando se hacían clic. Esta etapa es el filtro de seguridad más barato del proceso; es mucho más fácil tachar un dibujo a lápiz que rehacer un componente complejo en un Design System. Cada boceto fue una iteración sobre la funcionalidad y el flujo, asegurando que la jerarquía de la información guiara al usuario de forma natural hacia su objetivo.

#### El flujo de Carlos: Del caos a la supervisión estratégica

Al bocetar el **Flujo de Carga de Plantilla ADN (Boceto 1.1)**, mi prioridad absoluta fue la reducción de la fricción operativa. Diseñé una interfaz con un área de carga masiva centralizada, complementada con un historial de cargas que permitiera la trazabilidad. Pero el verdadero valor apareció en el **Boceto 1.2: Resumen de Procesamiento**. En lugar de mostrar una lista interminable de datos, propuse un panel que resaltara únicamente las "Inconsistencias Detectadas".

> **Pensamiento clave de Carlos:** "Quiero confiar en que los datos iniciales son correctos y solo revisar las excepciones."

Esta decisión cambió el rol de Carlos: ya no era el operario que revisaba fila por fila un Excel, sino el supervisor que intervenía solo donde el sistema detectaba un error. Para la segmentación, tracé el **Dashboard de Propuesta de Grupos (Boceto 1.3)**. Utilicé tarjetas que consolidaban toda la información crítica: nombre del grupo, sede, formador y cupo. El botón de "Generar Grupos" lo ubiqué en una posición dominante, permitiendo que el sistema hiciera el trabajo pesado de cruzar puestos y regiones, cumpliendo con la visión de que "el rompecabezas se armara solo".

#### La experiencia de Ana y David: Visibilidad y Motivación

Para Ana, el reto era transformar un listado de cursos en una trayectoria profesional. En el **Boceto 2.1**, diseñé un "Mapa de Mi Ruta" visual. No era una tabla, sino una línea de tiempo con hitos claros (Básico, Intermedio, Avanzado). Mi razonamiento fue que, al visualizar su progreso como un viaje, Ana sentiría una mayor conexión con su desarrollo dentro de Gentera.

> **Pensamiento clave de Ana:** "¡Esto es justo lo que necesitaba, mi mapa de capacitación!"

Paralelamente, para David, el Líder, diseñé el **Dashboard de Equipo (Boceto 3.1)** utilizando un sistema de "semáforos" visuales. Necesitaba que David pudiera identificar en tres segundos quién de su equipo estaba al día y quién necesitaba apoyo. Implementé filtros rápidos por oficina y porcentaje de avance, eliminando la necesidad de que David tuviera que perseguir a sus colaboradores para pedirles estatus. El diseño se centró en la toma de decisiones proactiva: si un colaborador aparece en rojo, David tiene un botón directo para contactarlo y ofrecerle ayuda.

#### Reflexión sobre la divergencia y el valor del boceto

Mirando la colección de bocetos terminada, reafirmé una convicción senior: la fase de ideación no se trata de encontrar "la" idea, sino de descartar las malas lo antes posible. El hecho de trabajar en baja fidelidad y fomentar un ambiente donde no se juzgaran las propuestas permitió que surgieran soluciones que antes no habíamos considerado, como la automatización total de los archivos .ical para las agendas de los formadores.

Esta etapa de divergencia nos dio la materia prima necesaria. Teníamos sobre la mesa una serie de conceptos validados por la lógica de negocio y la factibilidad técnica, listos para ser sometidos a un juicio más severo. Habíamos pasado de la incertidumbre de los Journey Maps a una estructura tangible de Dashboards y flujos de trabajo que ya empezaban a respirar la identidad del proyecto GAC.


Teníamos una pared llena de bocetos prometedores, pero también una serie de contradicciones entre lo que Carlos necesitaba y lo que el equipo técnico consideraba viable para el primer sprint. La tensión ahora residía en cómo íbamos a sacrificar algunas de estas ideas brillantes para asegurar un flujo coherente y ejecutable. El momento de la verdad llegaría al enfrentar estos trazos con los stakeholders críticos, donde tendríamos que decidir qué conceptos sobrevivirían al filtro estratégico y cuáles se quedarían para siempre en el papel.

### Parte 2: El Filtro Estratégico Crítica Priorización y Selección de Conceptos

#### El peso de la pared empapelada: De la explosión creativa al rigor estratégico

Tenía frente a mí una pared —física en la sala de guerra y virtual en FigJam— que era el testimonio visual de una divergencia masiva. Los "Crazy 8s" habían cumplido su función: teníamos más de ochenta ideas crudas, desde lo brillante hasta lo técnicamente imposible. Sin embargo, como diseñador, sabía que ese caos era peligroso si no se filtraba de inmediato. La tensión en la sala era palpable; el equipo estaba entusiasmado con las posibilidades estéticas, pero mi responsabilidad era aterrizar esa energía en una estructura que soportara el peso de las reglas de negocio de Gentera. No podíamos construirlo todo, y mucho menos podíamos permitir que una idea "bonita" ocultara una falla en la lógica operativa que Carlos, nuestro administrador, sufría cada semana.

Inicié la transición hacia la convergencia con una premisa clara: íbamos a pasar de la cantidad a la calidad estratégica. Mi razonamiento era simple pero firme: cada concepto que sobreviviera a esta sesión debía justificar su existencia resolviendo un punto de dolor documentado en el Journey Map o automatizando una regla de negocio crítica. No estábamos buscando la interfaz más innovadora del sector, estábamos buscando la solución que eliminara la carga cognitiva de un proceso que hoy depende de la memoria y de archivos Excel fragmentados. El filtro no sería el gusto personal, sino el impacto real versus el esfuerzo de implementación.

#### El juicio de los bocetos: Aplicando el marco de crítica constructiva

Para evitar que la sesión de revisión se convirtiera en una charla de pasillo sin estructura, impuse el uso de marcos de retroalimentación específicos: "Me gusta...", "Desearía que..." y "¿Qué tal si...?". Esta metodología es vital porque obliga al equipo a diseccionar el boceto en lugar de simplemente juzgarlo. Al analizar los bocetos de la **Carga y Procesamiento de la Plantilla ADN**, el consenso fue inmediato en el "Me gusta": la visibilidad de las inconsistencias detectadas era un cambio radical frente a la opacidad actual. Sin embargo, mi intervención fue más allá.

> "Me gusta que detectemos el error, pero desearía que el sistema no se detuviera ahí. Si sabemos que un dato está mal, el sistema debe ser capaz de sugerir la corrección basándose en el histórico, no solo señalar la herida."

Esta discusión nos llevó a refinar el concepto de **"Revisión Asistida"**. No bastaba con que el sistema dijera "hay un error en la oficina 402"; el diseño debía proponer: "Detectamos que la oficina 402 cambió de subdirección, ¿quieres actualizarla?". Este nivel de detalle es lo que separa un software de gestión de una herramienta que realmente aporta valor. Analizamos cada flujo bajo esta lupa, transformando bocetos estáticos en conceptos dinámicos que ya empezaban a respirar la lógica de "Gerente Multiproducto" y otras reglas complejas que habíamos identificado en la fase de descubrimiento.

#### La batalla por la simplicidad radical y la fuente única de verdad

Uno de los momentos de mayor fricción en la sesión de crítica fue definir hasta dónde debíamos mostrar la complejidad del sistema. Mi postura fue inamovible: aunque el motor de GAC tuviera que navegar por un laberinto de excepciones (reingresos, faltas previas, exclusiones por puesto), la interfaz para Carlos debía sentirse como un camino recto. El objetivo era alcanzar una **Simplicidad Radical**. Cada clic adicional que pedíamos al usuario era una oportunidad para el error o la frustración.

Establecí como principio rector que la plataforma GAC debía ser la **Única Fuente de Verdad**. Esto significaba que cualquier concepto que aún dependiera de un "Excel externo" para funcionar debía ser rediseñado o descartado. Durante la revisión del dashboard de David, el líder de oficina, eliminamos tres niveles de navegación innecesarios. Si David solo tiene cinco minutos entre reuniones para ver cómo va su equipo, no puede estar haciendo *drill-down* infinito. Propuse el uso de "semáforos" visuales: verde para el avance al día, rojo para retrasos críticos. La simplicidad no es falta de información, es la jerarquización inteligente de la misma.

#### El equilibrio entre el algoritmo y el criterio humano

Al llegar al concepto del **"Generador de Grupos Óptimos"**, la discusión se tornó técnica. Los desarrolladores estaban preocupados por la rigidez del algoritmo, mientras que los stakeholders temían perder el control. Aquí es donde articulé la solución del **Ajuste Visual mediante Drag & Drop**. Mi argumento fue que la automatización no debe ser una "caja negra". El sistema propone la segmentación óptima basada en cupos y sedes, pero Carlos debe tener el poder de mover a un colaborador de un grupo a otro con un simple movimiento de ratón.

Diseñamos la lógica de las **Alertas Inteligentes** para que no fueran bloqueantes. Si Carlos mueve a un participante y el grupo excede el cupo máximo, el sistema no impide la acción, pero lanza una notificación visual inmediata. Este balance es fundamental: el sistema hace el trabajo pesado de calcular la compatibilidad de puestos, pero deja la decisión final en manos del experto. Esta flexibilidad asegura que el sistema se adapte a las realidades de la operación de Gentera, donde a veces una excepción humana supera cualquier regla algorítmica.

#### Priorización de pilares: El Motor de Automatización y el Mapa de Ruta

Tras horas de debate y votación mediante *Dot Voting*, logramos consolidar los conceptos que definirían el producto. El primero fue el **"Motor de Automatización de Listas con Revisión Asistida"**. Decidí que este sería el corazón de la plataforma para el rol de Carlos. No era solo una carga de archivos; era un proceso de limpieza, cruce con el histórico y aplicación de reglas de negocio que reduciría días de trabajo manual a unos pocos minutos de supervisión.

Para Ana, la colaboradora, el concepto ganador fue **"Mi Ruta de Capacitación: Un Mapa Interactivo y Motivador"**. Rompimos con la estructura de lista tradicional para crear una visualización gamificada. Mi razonamiento fue empático: la capacitación en Gentera es un viaje de crecimiento, no una tarea administrativa. Diseñé este concepto con hitos claros y un indicador de porcentaje de avance que proporciona gratificación instantánea. Este mapa visual no solo informa, sino que motiva, transformando la percepción de la capacitación de una obligación a un logro personal.

#### Transparencia operativa: El porqué detrás de cada decisión del sistema

Una preocupación recurrente en las notas de crítica fue la desconfianza que podría generar un sistema que toma decisiones automáticas. Para blindar esto, propuse un nivel de **Transparencia de Lógica**. En el detalle de cada colaborador, incluí una sección que explica claramente por qué el sistema tomó una decisión.

*   "Incluido por: Identificado como Gerente Multiproducto por presencia de Asesor CIE en su oficina."
*   "Excluido por: Registro de falta en el hito anterior."

Esta transparencia es lo que permite que Carlos confíe en la herramienta. Si el sistema es opaco, el usuario terminará volviendo a su Excel para "verificar". Al exponer la lógica, convertimos a la plataforma en un aliado confiable. No basta con que el sistema funcione bien; el usuario debe entender *por qué* funciona así para que la adopción sea total.

#### La Central de Comunicaciones: Profesionalizando el contacto

Finalmente, definimos la **"Central de Comunicaciones Unificada"**. Este concepto nació de la observación de cuánto tiempo perdía Carlos redactando correos y mensajes de WhatsApp uno por uno. Diseñé una interfaz donde, con un solo clic tras validar los grupos, se disparan las invitaciones por Outlook, Teams y WhatsApp.

La clave técnica aquí fue la generación automática de archivos **.ical**. Me aseguré de que cada invitación incluyera el evento de calendario listo para ser aceptado. Además, incluí una función de previsualización obligatoria. Antes de que el sistema envíe mil correos, Carlos puede ver exactamente cómo se verá la invitación en cada canal. Esta funcionalidad no es solo una comodidad; es una medida de seguridad operativa que profesionaliza la comunicación de GAC y asegura que la información llegue sin distorsiones a todos los niveles de la organización.

#### Reflexión sobre la cultura del dato y la curva de aprendizaje

Al cerrar esta fase de selección, me di cuenta de que no solo estábamos diseñando pantallas, estábamos proponiendo un cambio cultural en Gentera. Pasar de la gestión artesanal en Excel a una plataforma automatizada requiere una curva de aprendizaje mínima pero un cambio de mentalidad máximo. Cada concepto priorizado fue elegido porque facilitaba esta transición.

La simplicidad de las interfaces que definimos busca que el usuario sienta que la herramienta le quita peso de encima desde el primer día. Al final, el éxito de estos conceptos no se medirá por lo innovadores que parezcan en un portafolio, sino por cuántas horas de vida le devolvemos a Carlos y qué tan clara siente Ana su ruta de crecimiento dentro de la empresa. Con estos pilares sólidos, estábamos listos para dejar el papel y empezar a construir la estructura técnica que sostendría toda esta visión.


Teníamos los conceptos ganadores y el respaldo de los stakeholders, pero al intentar visualizarlos como un todo, me asaltó una duda fundamental: ¿cómo íbamos a organizar esta inmensa cantidad de datos sin que la plataforma se sintiera como un laberinto de menús? Las reglas de negocio eran tan densas que cualquier error en la jerarquía de la información podría arruinar la simplicidad que tanto habíamos defendido. Necesitaba dar un paso atrás y diseñar el esqueleto invisible que conectaría el motor de automatización con la experiencia del usuario antes de dibujar un solo wireframe digital.

### Parte 3: La Estructura del Sistema Arquitectura de Información y Taxonomía

#### El esqueleto invisible tras el caos de datos

Al cerrar la fase de priorización de conceptos, me encontré con una realidad técnica ineludible: teníamos ideas brillantes sobre cómo automatizar la capacitación, pero carecíamos de la infraestructura lógica para sostenerlas. No se trataba de dibujar pantallas bonitas; el verdadero reto era organizar una densidad de reglas de negocio tan abrumadora que, de no ser articulada con precisión, convertiría la plataforma en un laberinto de menús ininteligibles. Mi obsesión en ese momento no eran los píxeles, sino el diseño de la Arquitectura de Información (AI). Sabía que si no lograba despejar el camino para que Carlos gestionara sus listas en segundos, o para que Ana entendiera su progreso de un vistazo, el proyecto fracasaría por pura carga cognitiva.

Me detuve antes de abrir cualquier herramienta de diseño visual. Necesitaba trazar el esqueleto invisible del sistema. La AI es esa estructura que nadie nota cuando funciona, pero que todos sufren cuando falla. Mi razonamiento estratégico fue claro: debíamos pasar de la gestión artesanal y dispersa en archivos Excel a un ecosistema centralizado donde la jerarquía de la información dictara la fluidez de la tarea. Antes de trazar el primer wireframe, me propuse diseccionar cada dato y cada funcionalidad para asegurar que la automatización tuviera un lugar lógico donde vivir.

#### La disección del sistema: Inventario de contenido y funcionalidades

Comencé con una tarea forense: realicé un inventario exhaustivo de todo lo que la plataforma GAC debía albergar. No fue una simple lista; fue un ejercicio de mapeo de dependencias. Identifiqué y clasifiqué ocho módulos críticos que constituirían el núcleo del sistema, asegurándome de que cada funcionalidad estuviera vinculada a un requerimiento funcional (RF) y a un rol específico.

En el **Módulo de Autenticación**, definí que el acceso se simplificaría mediante el Número de Empleado y la Fecha de Nacimiento (RF-GAC-024), eliminando la fricción de recordar contraseñas complejas en una plataforma de uso interno. Pero la verdadera complejidad apareció al mapear el **Módulo de Carga y Procesamiento de Datos**. Aquí, articulé la lógica para la carga de la 'Plantilla ADN' (RF-GAC-001), integrando el historial de cargas y los reportes de inconsistencias. No podíamos permitir que un error en el Excel detuviera el proceso; diseñé un sistema que identificara automáticamente nuevos ingresos, reingresos y cambios de puesto (RF-GAC-002, RF-GAC-004), determinando el punto exacto de inicio en la ruta de capacitación.

Continué con la **Segmentación y Gestión de Grupos**, donde la arquitectura debía soportar la lógica del 'Gerente Multiproducto' (RF-GAC-006) y la asignación automatizada de sedes (RF-GAC-007). Cada pieza de información —desde el nombre del grupo hasta la alerta de cupo mínimo— fue catalogada. Mapeé también los módulos de **Asignación de Recursos**, **Comunicaciones Automatizadas** (incluyendo el envío de archivos .ical), y el vital **Módulo de Trazabilidad**. En este último, me aseguré de que la ruta visual del colaborador y el cálculo del estatus de avance (RF-GAC-014) tuvieran una estructura de datos sólida. Este inventario no fue un documento pasivo; fue el plano que garantizó que ninguna regla de negocio, por pequeña que fuera, quedara huérfana de una interfaz.

#### El mapa del territorio: Sitemap y jerarquía de roles

Con el inventario en mano, procedí a construir el Sitemap. Mi objetivo era crear una estructura jerárquica que respondiera a la necesidad de visibilidad y transparencia, permitiendo que cualquier usuario llegara a su información crítica en menos de tres clics. Diseñé un punto de entrada único (Login) que, tras la autenticación, bifurcara la experiencia en cinco Dashboards personalizados según el rol.

*   **Para Carlos (Administrador):** Tracé una ruta operativa. Su navegación primaria se centraría en la 'Gestión de Datos', 'Gestión de Grupos' y 'Asignación de Formadores'. Necesitaba que Carlos tuviera el control total sobre las propuestas de grupos (RF-GAC-005) y las herramientas de ajuste manual (mover, añadir o eliminar participantes) sin perderse en niveles profundos de navegación.
*   **Para Ana (Colaboradora):** La estructura fue radicalmente distinta. Su mundo se redujo a dos grandes pilares: 'Mi Ruta de Capacitación' y 'Mis Cursos'. Aquí, la jerarquía priorizó el mapa visual de su progreso y el acceso inmediato a sus próximos cursos programados, con la opción de descargar el .ical para su calendario personal.
*   **Para David (Líder) y Elena (Formadora):** Diseñé secciones específicas que atacaran sus dolores directos. Para David, el foco fue 'Mi Equipo', con tablas de avance y alertas de riesgo (RF-GAC-017). Para Elena, la prioridad fue 'Mi Agenda' y 'Mis Grupos', simplificando el registro de asistencia (RF-GAC-013) y el feedback de los grupos atendidos.

Esta jerarquía no fue lineal. Articulé relaciones transversales para que, por ejemplo, un Líder pudiera saltar desde el resumen de su equipo al detalle individual de un colaborador sin tener que regresar al inicio. La estructura se diseñó para ser escalable, permitiendo que el Super Admin gestionara usuarios y configuraciones del sistema sin interferir con la fluidez operativa de los roles de negocio.

#### Modelos de navegación: Eficiencia sobre el lienzo

Una vez definida la jerarquía, tuve que decidir cómo se moverían los usuarios a través de ella. Elegí un **Menú Lateral Persistente (Sidebar)** como sistema de navegación primaria. Esta decisión fue táctica: en una plataforma donde los dashboards y las tablas de datos son densos, un menú lateral colapsable permite maximizar el espacio de trabajo horizontal mientras mantiene los módulos principales siempre al alcance.

Para la **Navegación Secundaria**, implementé un sistema de **Pestañas (Tabs)**. Esto fue crucial en secciones como 'Gestión de Datos', donde Carlos necesita alternar rápidamente entre 'Cargar Plantilla', 'Historial de Cargas' y 'Reporte de Errores' sin cambiar de contexto mental. El uso de pestañas redujo la sensación de profundidad del sitio, haciendo que la plataforma se sintiera más plana y ágil.

Complementé esto con dos elementos de feedback de ubicación:
1.  **Breadcrumbs (Migas de Pan):** Ubicadas en la parte superior para que el usuario siempre supiera su ruta (ej. Inicio > Gestión de Grupos > Detalle de Grupo X). Esto es vital en sistemas complejos para evitar la desorientación.
2.  **Navegación Contextual:** Diseñé botones de acción específicos (como "Generar Grupos" o "Enviar Todo") que aparecen solo cuando son relevantes, y enlaces directos dentro del contenido que permiten profundizar en la información sin romper el flujo de trabajo. Mi prioridad fue la eficiencia operativa: cada clic ahorrado es tiempo que le devolvemos a la operación de Gentera.

#### Taxonomía y el poder del lenguaje familiar

El etiquetado no es una cuestión estética; es una herramienta de usabilidad. Sabía que si usaba términos genéricos de software, la curva de aprendizaje sería más alta. Por ello, creé un **Esquema de Etiquetado (Labeling System)** basado íntegramente en la terminología de Gentera que habíamos rescatado en las entrevistas de la Fase 1.

Sustituí términos técnicos por conceptos familiares. En lugar de "Subir Archivo", utilicé **"Subir Plantilla ADN (Excel)"**. En lugar de "Niveles de curso", implementé **"Toques con Formador"**. Términos como **"Gerente Multiproducto"**, **"Concentrado Histórico"** y **"Acreditado"** se convirtieron en la base de la taxonomía del sistema. Esta estandarización se extendió a las etiquetas de acción, asegurando que botones como "Generar Grupos" o "Exportar a Excel" fueran consistentes en toda la interfaz.

Incluso en los mensajes de error y las notificaciones, cuidé que el lenguaje fuera orientador y no punitivo. El etiquetado se diseñó para resonar con los modelos mentales de los usuarios; si Carlos busca la "Plantilla ADN", la interfaz debe llamarla exactamente así. Esta coherencia lingüística construye confianza y familiaridad, permitiendo que los usuarios se sientan "en casa" desde la primera interacción con la plataforma.

#### La prueba de fuego: Validación mediante Tree Testing

No quise avanzar al diseño visual basándome solo en mi intuición. Necesitaba validar que esta arquitectura realmente funcionaba. Realicé sesiones de **Tree Testing** y **Card Sorting** para poner a prueba la estructura. El Card Sorting previo me permitió alinear las categorías con los modelos mentales de los usuarios; por ejemplo, descubrí que los formadores esperaban encontrar la "Lista de Participantes" vinculada a su "Agenda" y no como un módulo de reportes independiente.

Los resultados del Tree Testing fueron el respaldo definitivo que necesitaba:
*   **Carlos (Administrador):** Logró una tasa de éxito del **95%** en la tarea de "Cargar la plantilla semanal", yendo directamente a Gestión de Datos > Cargar Plantilla.
*   **Ana (Colaboradora):** Alcanzó un impresionante **98%** de éxito al buscar "Ver tu progreso en la capacitación" a través de Mi Ruta de Capacitación.
*   **David (Líder):** Tuvo un **93%** de éxito al localizar el avance de su equipo.

Estas métricas no solo validaron la lógica de la AI, sino que también revelaron desvíos menores. Por ejemplo, algunos usuarios buscaban la configuración de notificaciones dentro de su perfil en lugar de la bandeja de entrada, lo que me llevó a diseñar accesos rápidos desde ambos puntos. Validar la estructura solo con texto, antes de añadir colores o formas, me dio la certeza de que el esqueleto era robusto y que los flujos críticos eran, por definición, intuitivos.

#### Reflexión sobre la escalabilidad y el futuro

Como diseñador, mi responsabilidad no termina en el presente. La arquitectura que tracé para GAC fue diseñada pensando en la escalabilidad. Sabía, por las especificaciones técnicas, que Gentera planea una transición de su modelo de capacitación de 12 a 6 niveles. Si hubiera diseñado una estructura rígida, ese cambio obligaría a una reingeniería total.

En su lugar, creé una arquitectura modular. El mapa visual de la ruta de capacitación y la lógica de navegación están desacoplados de la cantidad de niveles. Esto asegura que, cuando el negocio decida simplificar la ruta, solo sea necesario ajustar la lógica de cálculo y la representación visual, sin romper la navegación ni la jerarquía del sistema. Esta flexibilidad es lo que diferencia un diseño reactivo de uno estratégico; estamos construyendo una herramienta que no solo resuelve el caos de hoy, sino que está preparada para la evolución de mañana. Con este esqueleto validado y firme, finalmente me sentí listo para empezar a dar forma visual a lo que, hasta ahora, solo era lógica pura.


Al finalizar la validación de la arquitectura, sentí una mezcla de alivio y vértigo. Tenía el plano perfecto, pero ese mapa de texto ahora debía transformarse en una interfaz real que Carlos pudiera operar bajo presión. Al mirar de nuevo el inventario de funcionalidades, me di cuenta de que el verdadero reto no estaba en la estructura general, sino en cómo íbamos a meter toda esa complejidad de filtros y tablas en pantallas de media fidelidad sin sacrificar la claridad. Era el momento de dejar atrás los diagramas y enfrentarme al lienzo en blanco para construir los primeros wireframes, donde cada decisión de la arquitectura se pondría a prueba frente a la interacción real.#### El esqueleto invisible tras el caos de datos

Al cerrar la fase de priorización de conceptos, me encontré con una realidad técnica ineludible: teníamos ideas brillantes sobre cómo automatizar la capacitación, pero carecíamos de la infraestructura lógica para sostenerlas. No se trataba de dibujar pantallas bonitas; el verdadero reto era organizar una densidad de reglas de negocio tan abrumadora que, de no ser articulada con precisión, convertiría la plataforma en un laberinto de menús ininteligibles. Mi obsesión en ese momento no eran los píxeles, sino el diseño de la **Arquitectura de Información (AI)**. Sabía que si no lograba despejar el camino para que Carlos gestionara sus listas en segundos, o para que Ana encontrara su curso en dos clics, el proyecto fracasaría por pura carga cognitiva.

Me detuve antes de abrir cualquier herramienta de diseño visual. Necesitaba trazar el esqueleto invisible del sistema. La AI es esa estructura que nadie nota cuando funciona, pero que todos sufren cuando falla. Mi razonamiento estratégico fue claro: debíamos pasar de la gestión artesanal y dispersa en archivos Excel a un ecosistema centralizado donde la jerarquía de la información dictara la fluidez de la tarea. Antes de trazar el primer wireframe, me propuse diseccionar cada dato y cada funcionalidad para asegurar que la automatización tuviera un lugar lógico donde vivir.

#### La disección del sistema: Inventario de contenido y funcionalidades

Comencé con una tarea forense: realicé un inventario exhaustivo de todo lo que la plataforma GAC debía albergar. No fue una simple lista; fue un ejercicio de mapeo de dependencias. Identifiqué y clasifiqué ocho módulos críticos que constituirían el núcleo del sistema, asegurándome de que cada funcionalidad estuviera vinculada a un requerimiento funcional (RF) y a un rol específico.

En el **Módulo de Autenticación**, definí que el acceso se simplificaría mediante el Número de Empleado y la Fecha de Nacimiento (**RF-GAC-024**), eliminando la fricción de recordar contraseñas complejas en una plataforma de uso interno. Pero la verdadera complejidad apareció al mapear el **Módulo de Carga y Procesamiento de Datos**. Aquí, articulé la lógica para la carga de la 'Plantilla ADN' (**RF-GAC-001**), integrando el historial de cargas y los reportes de inconsistencias. No podíamos permitir que un error en el Excel detuviera el proceso; diseñé un sistema que identificara automáticamente nuevos ingresos, reingresos y cambios de puesto (**RF-GAC-002, RF-GAC-004**), determinando el punto exacto de inicio en la ruta de capacitación.

Continué con la **Segmentación y Gestión de Grupos**, donde la arquitectura debía soportar la lógica del 'Gerente Multiproducto' (**RF-GAC-006**) y la asignación automatizada de sedes (**RF-GAC-007**). Cada pieza de información —desde el nombre del grupo hasta la alerta de cupo mínimo— fue catalogada. Mapeé también los módulos de **Asignación de Recursos**, **Comunicaciones Automatizadas** (incluyendo el envío de archivos .ical), y el vital **Módulo de Trazabilidad**. En este último, me aseguré de que la ruta visual del colaborador y el cálculo del estatus de avance (**RF-GAC-014**) tuvieran una estructura de datos sólida. Este inventario no fue un documento pasivo; fue el plano que garantizó que ninguna regla de negocio, por pequeña que fuera, quedara huérfana de una interfaz.

#### El mapa del territorio: Sitemap y jerarquía de roles

Con el inventario en mano, procedí a construir el **Sitemap**. Mi objetivo era crear una estructura jerárquica que respondiera a la necesidad de visibilidad y transparencia, permitiendo que cada usuario llegara a su información crítica en menos de tres clics. Diseñé un punto de entrada único (Login) que, tras la autenticación, bifurcara la experiencia en cinco Dashboards personalizados según el rol.

*   **Para Carlos (Administrador):** Tracé una ruta operativa. Su navegación primaria se centraría en la 'Gestión de Datos', 'Gestión de Grupos' y 'Asignación de Formadores'. Necesitaba que Carlos tuviera el control total sobre las propuestas de grupos (**RF-GAC-005**) y las herramientas de ajuste manual (mover, añadir o eliminar participantes) sin perderse en niveles profundos de navegación.
*   **Para Ana (Colaboradora):** La estructura fue radicalmente distinta. Su mundo se redujo a dos grandes pilares: 'Mi Ruta de Capacitación' y 'Mis Cursos'. Aquí, la jerarquía priorizó el mapa visual de su progreso y el acceso inmediato a sus próximos cursos programados, con la opción de descargar el .ical para su calendario personal.
*   **Para David (Líder) y Elena (Formadora):** Diseñé secciones específicas que atacaran sus dolores directos. Para David, el foco fue 'Mi Equipo', con tablas de avance y alertas de riesgo (**RF-GAC-017**). Para Elena, la prioridad fue 'Mi Agenda' y 'Mis Grupos', simplificando el registro de asistencia (**RF-GAC-013**) y el feedback de los grupos atendidos.

Esta jerarquía no fue lineal. Articulé relaciones transversales para que, por ejemplo, un Líder pudiera saltar desde el resumen de su equipo al detalle individual de un colaborador sin tener que regresar al inicio. La estructura se diseñó para ser escalable, permitiendo que el Super Admin gestionara usuarios y configuraciones del sistema sin interferir con la fluidez operativa de los roles de negocio.

#### Modelos de navegación: Eficiencia sobre el lienzo

Una vez definida la jerarquía, tuve que decidir cómo se moverían los usuarios a través de ella. Elegí un **Menú Lateral Persistente (Sidebar)** como sistema de navegación primaria. Esta decisión fue táctica: en una plataforma donde los dashboards y las tablas de datos son densos, un menú lateral colapsable permite maximizar el espacio de trabajo horizontal mientras mantiene los módulos principales siempre al alcance.

Para la **Navegación Secundaria**, implementé un sistema de **Pestañas (Tabs)**. Esto fue crucial en secciones como 'Gestión de Datos', donde Carlos necesita alternar rápidamente entre 'Cargar Plantilla', 'Historial de Cargas' y 'Reporte de Errores' sin cambiar de contexto mental. El uso de pestañas redujo la sensación de profundidad del sitio, haciendo que la plataforma se sintiera más plana y ágil.

Complementé esto con dos elementos de feedback de ubicación:
1.  **Breadcrumbs (Migas de Pan):** Ubicadas en la parte superior para que el usuario siempre supiera su ruta (ej. Inicio > Gestión de Grupos > Detalle de Grupo X). Esto es vital en sistemas complejos para evitar la desorientación.
2.  **Navegación Contextual:** Diseñé botones de acción específicos (como **"Generar Grupos"** o **"Enviar Todo"**) que aparecen solo cuando son relevantes, y enlaces directos dentro del contenido que permiten profundizar en la información sin romper el flujo de trabajo. Mi prioridad fue la eficiencia operativa: cada clic ahorrado es tiempo que le devolvemos a la operación de Gentera.

#### Taxonomía y el poder del lenguaje familiar

El etiquetado no es una cuestión estética; es una herramienta de usabilidad. Sabía que si usaba términos genéricos de software, la curva de aprendizaje sería más alta. Por ello, creé un **Esquema de Etiquetado (Labeling System)** basado íntegramente en la terminología de Gentera que habíamos rescatado en las entrevistas de la Fase 1.

Sustituí términos técnicos por conceptos familiares. En lugar de "Subir Archivo", utilicé **"Subir Plantilla ADN (Excel)"**. En lugar de "Niveles de curso", implementé **"Toques con Formador"**. Términos como **"Gerente Multiproducto"**, **"Concentrado Histórico"** y **"Acreditado"** se convirtieron en la base de la taxonomía del sistema. Esta estandarización se extendió a las etiquetas de acción, asegurando que botones como **"Subir Plantilla ADN"** o **"Exportar a Excel"** fueran consistentes en toda la interfaz.

Incluso en los mensajes de error y las notificaciones, cuidé que el lenguaje fuera orientador y no punitivo. El etiquetado se diseñó para resonar con los modelos mentales de los usuarios; si Carlos busca la "Plantilla ADN", la interfaz debe llamarla exactamente así. Esta coherencia lingüística construye confianza y familiaridad, permitiendo que los usuarios se sientan "en casa" desde la primera interacción con la plataforma.

#### La prueba de fuego: Validación mediante Tree Testing

No quise avanzar al diseño visual basándome solo en mi intuición. Necesitaba validar que esta arquitectura realmente funcionaba. Realicé sesiones de **Tree Testing** y **Card Sorting** para poner a prueba la estructura. El Card Sorting previo me permitió alinear las categorías con los modelos mentales de los usuarios; por ejemplo, descubrí que los formadores esperaban encontrar la "Lista de Participantes" vinculada a su "Agenda" y no como un módulo de reportes independiente.

Los resultados del Tree Testing fueron el respaldo definitivo que necesitaba:
*   **Carlos (Administrador):** Logró una tasa de éxito del **95%** en la tarea de "Cargar la plantilla semanal", yendo directamente a Gestión de Datos > Cargar Plantilla.
*   **Ana (Colaboradora):** Alcanzó un impresionante **98%** de éxito al buscar "Ver tu progreso en la capacitación" a través de Mi Ruta de Capacitación.
*   **David (Líder):** Tuvo un **93%** de éxito al localizar el avance de su equipo.

Estas métricas no solo validaron la lógica de la AI, sino que también revelaron desvíos menores. Por ejemplo, algunos usuarios buscaban la configuración de notificaciones dentro de su perfil en lugar de la bandeja de entrada, lo que me llevó a diseñar accesos rápidos desde ambos puntos. Validar la estructura solo con texto, antes de añadir colores o formas, me dio la certeza de que el esqueleto era robusto y que los flujos críticos eran, por definición, intuitivos.

#### Reflexión sobre la escalabilidad y el futuro

Como diseñador, mi responsabilidad no termina en el presente. La arquitectura que tracé para GAC fue diseñada pensando en la escalabilidad. Sabía, por las especificaciones técnicas, que Gentera planea una transición de su modelo de capacitación de **12 a 6 niveles**. Si hubiera diseñado una estructura rígida, ese cambio obligaría a una reingeniería total.

En su lugar, creé una arquitectura modular. El mapa visual de la ruta de capacitación y la lógica de navegación están desacoplados de la cantidad de niveles. Esto asegura que, cuando el negocio decida simplificar la ruta, solo sea necesario ajustar la lógica de cálculo y la representación visual, sin romper la navegación ni la jerarquía del sistema. Esta flexibilidad es lo que diferencia un diseño reactivo de uno estratégico; estamos construyendo una herramienta que no solo resuelve el caos de hoy, sino que está preparada para la evolución de mañana. Con este esqueleto validado y firme, finalmente me sentí listo para empezar a dar forma visual a lo que, hasta ahora, solo era lógica pura.

#### Próximo paso:

Al finalizar la validación de la arquitectura, sentí una mezcla de alivio y vértigo. Tenía el plano perfecto, pero ese mapa de texto ahora debía transformarse en una interfaz real que Carlos pudiera operar bajo presión. Al mirar de nuevo el inventario de funcionalidades, me di cuenta de que el verdadero reto no estaba en la estructura general, sino en cómo íbamos a meter toda esa complejidad de filtros y tablas en pantallas de media fidelidad sin sacrificar la claridad. Era el momento de dejar atrás los diagramas y enfrentarme al lienzo en blanco para construir los primeros wireframes, donde cada decisión de la arquitectura se pondría a prueba frente a la interacción real.

### Parte 4: Del Boceto al Esqueleto Diseño de Wireframes de Media Fidelidad

#### El momento en que la lógica se vuelve esqueleto

Al terminar la validación de la arquitectura de información, me quedé mirando el inventario de las 14 pantallas identificadas. Tenía ante mí un mapa de nodos y flujos que funcionaba perfectamente en la teoría, pero el verdadero riesgo estaba en la ejecución: ¿cómo iba a meter toda esa carga operativa de Carlos y la expectativa de Ana en una interfaz que no se sintiera como un laberinto de hojas de cálculo? Sabía que el siguiente paso no podía ser el diseño visual; necesitaba construir un esqueleto de media fidelidad. Mi razonamiento fue puramente estratégico: si introducía color o tipografías finales ahora, los stakeholders de Gentera se distraerían con la estética y perderíamos la oportunidad de validar si la jerarquía de la información realmente resolvía el problema.

Tomé los bocetos rápidos que habíamos generado en las sesiones de *Crazy 8s* y los *Solution Sketches* iniciales. Esos dibujos a mano alzada eran valiosos porque capturaban la intención, pero carecían del rigor técnico necesario para un producto de esta escala. Abrí Figma y configuré una biblioteca básica de componentes de media fidelidad: botones, campos de texto, tablas y placeholders en escala de grises. Mi objetivo era aplicar una metodología "Layout First": definir qué es lo más importante en cada pantalla y usar el tamaño, la posición y el contraste para guiar la atención del usuario antes de que una sola línea de código fuera escrita.

#### Traduciendo flujos en 14 módulos funcionales

No diseñé pantallas aisladas; diseñé un sistema. Mapeé cada paso de los flujos de usuario hacia las vistas únicas que habíamos listado, asegurándome de que cada uno de los 14 módulos —desde la autenticación hasta la gestión de usuarios del Super Admin— tuviera una representación esquemática coherente. En este punto, tomé una decisión de diseño crítica: eliminé el *Lorem Ipsum*. Para que Carlos y Lalo pudieran validar la interfaz, necesitaba texto "realista". En lugar de texto simulado, usé "Nombre del Colaborador", "Fecha de Contratación" o "Estatus de Reingreso". Esto permitió que, al revisar los wireframes, los stakeholders pudieran identificar de inmediato si faltaba algún dato vital para sus reglas de negocio.

La estructura de navegación fue el primer gran reto. Opté por un menú lateral persistente en la mayoría de los roles. ¿Por qué? Porque la plataforma GAC es una herramienta de gestión densa, no un sitio de consumo rápido. Carlos necesita saltar de la "Gestión de Datos" a la "Gestión de Grupos" sin perder el contexto. Este menú lateral me permitió jerarquizar las secciones principales y dejar el área central libre para lo que realmente importa: los datos y las acciones.

#### El centro de control: Reduciendo la carga cognitiva de Carlos

Al enfrentarme al Dashboard de Administrador, mi obsesión fue la carga cognitiva. Carlos vive bajo la presión de procesar miles de registros cada semana. Si el dashboard le mostraba todo al mismo tiempo, lo iba a paralizar. Diseñé una vista resumen dominada por tarjetas de resumen táctico. En lugar de una lista interminable, coloqué tarjetas prominentes como "Plantilla Pendiente de Cargar" y "Grupos Propuestos Pendientes de Revisión". 

Cada tarjeta funciona como un disparador de acción. Si no se ha cargado la plantilla semanal, la tarjeta aparece con un estado de alerta que guía a Carlos directamente al botón "Cargar Plantilla". Mi intención era que el sistema no fuera un repositorio pasivo, sino un asistente activo que le dijera a Carlos: "Esto es lo que requiere tu atención ahora". En la parte inferior, configuré una sección de alertas para inconsistencias críticas, permitiendo que problemas como "Grupos con Cupo Mínimo No Alcanzado" saltaran a la vista de inmediato, con CTAs claros para actuar.

#### Ingeniería de la interfaz de carga: Transparencia vs. Incertidumbre

La pantalla de "Gestión de Datos - Cargar Plantilla" fue un ejercicio de diseño de procesos. Sabíamos que el cruce de datos y la aplicación de las reglas de negocio (de la RN-ID-001 a la RN-ID-007) podían tomar entre 5 y 10 minutos. En el mundo del software, 10 minutos de incertidumbre son una eternidad. Diseñé un área de *drag & drop* específica que solo acepta archivos .xlsx o .xls, bloqueando cualquier otro formato para evitar errores de sistema desde el inicio.

Lo más importante fue el indicador de progreso. No quería un simple *spinner* dando vueltas; diseñé una barra de progreso real con el texto "Procesando Plantilla...". Debajo de esta barra, incluí una sección de "Resumen Post-Procesamiento" que se activa al terminar la carga. Aquí, el wireframe muestra métricas clave: "Colaboradores Procesados" vs. "Elegibles Identificados". Si el sistema detecta inconsistencias, el diseño resalta automáticamente un botón de "Ver Reporte Detallado". Esta transparencia es fundamental; si Carlos sabe exactamente qué está pasando y cuánto falta, su nivel de estrés disminuye drásticamente.

#### La mesa de trabajo: Donde el algoritmo y el humano se encuentran

El corazón de la flexibilidad de GAC reside en la pantalla de "Detalle y Ajuste de Grupo". Aquí es donde el diseño de media fidelidad tuvo que demostrar su valía técnica. Diseñé una tabla de participantes robusta con columnas para Nómina, Puesto y Oficina. Pero no era solo una tabla de lectura; incluí herramientas para "Mover", "Añadir" o "Eliminar" colaboradores.

> **Insight Senior:** En sistemas de gestión masiva, el diseño debe permitir que el algoritmo proponga y el humano disponga. No podíamos automatizar el 100% porque siempre hay excepciones operativas que solo Carlos conoce.

Para apoyar esta toma de decisiones, integré alertas de cupo que se activan visualmente si el grupo no cumple con los mínimos o máximos definidos en las reglas de negocio. Si un grupo tiene menos participantes de los requeridos, el wireframe muestra una sugerencia contextual como "Fusionar Grupo". También incluí anotaciones para que, al pasar el cursor sobre un nombre, se mostrara un *tooltip* con detalles específicos, como si el colaborador es un "Gerente Multiproducto". Esta capa de información bajo demanda evita saturar la tabla principal mientras mantiene los datos críticos a un clic de distancia.

#### El mapa de Ana: Motivación a través de la claridad visual

Para el rol de Ana (Colaboradora), el enfoque cambió por completo. Su dashboard no es una herramienta de gestión, es una herramienta de carrera. Diseñé el "Mapa Visual de Ruta" no como una lista de cursos, sino como un camino de nodos que representan los niveles: Básico, Intermedio y Avanzado. 

Utilicé estados visuales en escala de grises para diferenciar los nodos:
*   **Completado:** Con un icono de verificación.
*   **En Progreso:** Con un contorno resaltado.
*   **Pendiente:** Con una opacidad reducida.

Este diseño visualiza el progreso calculado por el sistema de forma inmediata. Ana puede ver su "% de Avance General" en un indicador prominente. Además, en la sección de "Próximos Cursos", incluí un botón específico para descargar archivos .ical. Mi razonamiento fue práctico: Ana no va a estar entrando a la plataforma todo el día, así que necesitaba facilitarle llevar su capacitación a su calendario de Outlook o Teams con un solo clic.

#### El contrato técnico: Anotaciones y validaciones de campo

Los wireframes de media fidelidad no son solo dibujos; son especificaciones funcionales. Dediqué una parte significativa del proceso a documentar las anotaciones detalladas para el equipo de desarrollo. En la pantalla de Login, por ejemplo, especifiqué que el campo de "Número de Empleado" debe aceptar solo caracteres numéricos y que la "Fecha de Nacimiento" debe tener una máscara de entrada DD/MM/AAAA.

Documenté los estados de los botones: debían permanecer deshabilitados hasta que los campos obligatorios estuvieran llenos y validados. También definí el uso de *spinners* de carga durante la autenticación y mensajes de error específicos para fallos de red o credenciales incorrectas. Estas anotaciones actúan como el "contrato" que asegura que la lógica de negocio que definimos en la fase de arquitectura se respete fielmente en la interfaz final. Al eliminar el ruido visual, estas reglas se volvieron el centro de la conversación con los desarrolladores de Dacodes.

#### Reflexión sobre el esqueleto funcional

Al terminar este conjunto de wireframes, sentí que finalmente habíamos domado la complejidad del proyecto GAC. El diseño de media fidelidad actuó como un filtro de realidad necesario. Al quitar el color y la estética, pudimos ver con total claridad si la jerarquía de la información realmente resolvía el caos operativo de Carlos y la falta de visibilidad de Ana. Las reglas de negocio más densas, como los cupos de los grupos o los criterios de segmentación, dejaron de ser párrafos en un documento para convertirse en alertas visuales dinámicas y herramientas de interacción real. Teníamos el esqueleto firme y validado; ahora el reto era entender cómo estas pantallas se conectarían entre sí para crear una experiencia fluida.


Al cerrar los wireframes estáticos, me di cuenta de que, aunque las pantallas funcionaban de forma individual, la verdadera prueba de fuego vendría al conectarlas. Tenía dudas sobre si el salto entre la carga de la plantilla y la revisión de los grupos propuestos se sentiría natural o si Carlos perdería el hilo del proceso en el camino. Necesitaba elevar la apuesta y transformar estos esqueletos en un Wireflow dinámico, donde cada clic no solo abriera una pantalla, sino que desencadenara una consecuencia lógica en el sistema, enfrentándome por primera vez a la complejidad de las transiciones y los estados de error en tiempo real.

### Parte 5: La Lógica del Movimiento Wireflows y Decisiones de Interacción

#### El intervalo entre las pantallas: Diseñando el movimiento

Al terminar los wireframes de media fidelidad, me detuve frente a un muro digital de 37 pantallas estáticas. Tenía ante mí una arquitectura sólida y esqueletos funcionales que, individualmente, resolvían cada requerimiento técnico. Sin embargo, sentí esa inquietud que solo aparece cuando te das cuenta de que has diseñado un mapa, pero no el viaje. Un wireframe es una foto fija; la experiencia del usuario, en cambio, ocurre en el intervalo entre esas fotos. Sabía que si le entregaba este paquete a los desarrolladores de Dacodes tal como estaba, correríamos el riesgo de construir un producto fragmentado, donde el usuario se sentiría saltando de una caja a otra sin un hilo conductor claro.

Mi razonamiento estratégico en este punto fue migrar de la estática al movimiento. Necesitaba construir **Wireflows**, una técnica que fusiona la estructura del wireframe con la lógica del diagrama de flujo. Mi objetivo no era solo mostrar cómo se veía la pantalla de "Carga de Plantilla", sino asegurar que el salto hacia la "Propuesta de Grupos" no fuera un abismo técnico para Carlos. Debía garantizar que cada clic desencadenara una consecuencia lógica y que el sistema mantuviera al administrador siempre en control, reduciendo su carga cognitiva al mínimo. No estaba diseñando vistas; estaba diseñando la coreografía de un proceso operativo crítico.

#### El guion de la navegación: Mapeo de rutas y Happy Paths

Antes de conectar un solo cable interactivo en Figma, realicé un mapeo forense de las rutas ideales de éxito, lo que técnicamente llamamos el **Happy Path**. Utilicé una notación estándar para mis diagramas: rectángulos para acciones del sistema, rombos para puntos de decisión y flechas para marcar la dirección del flujo. Mi prioridad fue definir con precisión quirúrgica los puntos de entrada (*Entry Points*) y salida (*Exit Points*) para cada rol.

Para Carlos, el punto de entrada era inevitablemente el Dashboard tras un login exitoso, pero el éxito no era simplemente "subir un archivo", sino llegar a la confirmación de que la base de datos de GAC se había actualizado correctamente (RF-GAC-025). Tracé este camino asegurándome de que fuera lineal. Cada nodo en el diagrama representaba una pantalla o un estado de pantalla. Si Carlos hacía clic en "Gestión de Datos", el sistema debía responder inmediatamente con el disparador de carga (RF-GAC-001). Este mapeo previo fue vital; me permitió identificar "callejones sin salida" en la arquitectura de interacción —esos momentos donde el usuario termina una tarea y no sabe a dónde ir— antes de invertir tiempo en el prototipado.

> **Insight de Diseño:** Un flujo de usuario bien diseñado es aquel donde el usuario nunca tiene que preguntar "¿y ahora qué?". Si el sistema no sugiere el siguiente paso de forma natural, la arquitectura de información ha fallado.

#### El Wireflow de Carlos: De la data cruda a la decisión asistida

Me enfoqué con obsesión en el flujo del Administrador, ya que es el corazón operativo del proyecto GAC. La secuencia que articulé comienza en el Dashboard, donde Carlos identifica visualmente una "Plantilla Pendiente". Al transitar hacia la zona de carga, diseñé una interacción de **arrastrar y soltar** para el Excel ADN. No quería botones genéricos; quería que la acción física de "soltar" el archivo iniciara el proceso. En ese momento, el sistema activa un indicador de progreso: "Procesando Plantilla...".

El momento crítico ocurre en la pantalla de **Resumen de Procesamiento**. Aquí es donde el diseño debe ser más inteligente que el usuario. En lugar de mostrar solo un mensaje de éxito, configuré el flujo para que mostrara métricas comparativas: cuántos colaboradores se procesaron frente a cuántos fueron identificados como elegibles. Pero lo más importante fue la bifurcación lógica:
*   **Si hay inconsistencias (> 0):** El flujo se bloquea y obliga a Carlos a pasar por el "Reporte Detallado de Errores". No es un capricho; es un blindaje contra el error humano. Carlos debe ver el tipo de error y la sugerencia de corrección antes de avanzar.
*   **Si no hay errores:** El sistema habilita el botón de "Continuar a Gestión de Grupos".

Esta transición asegura que los datos que alimentan la segmentación automática sean impecables. Al automatizar la identificación de errores, transformé a Carlos de un "detective de celdas" en un supervisor de excepciones.

#### La experiencia de Ana: Autogestión a través de un mapa visual

Para Ana, la Colaboradora, el enfoque fue radicalmente distinto. Ella no necesita gestionar datos, necesita claridad sobre su futuro profesional. Diseñé su flujo de entrada de modo que, tras el login, no aterrizara en una tabla de cursos aburrida, sino en un **Mapa Visual de Mi Ruta de Capacitación** (RF-GAC-012).

En este wireflow, cada nodo del mapa es interactivo. Cuando Ana hace clic en un hito, la transición la lleva directamente al "Detalle del Curso". Aquí tomé una decisión de diseño clave basada en la eficiencia: el botón de acción principal es **"Añadir a Calendario"**. Al hacer clic, el sistema dispara la descarga automática del archivo **.ical**. Mi razonamiento fue reducir la fricción al máximo; si Ana puede integrar su curso en su agenda de Outlook en un solo clic, las probabilidades de asistencia aumentan drásticamente. El flujo termina cuando Ana regresa a su mapa visual, viendo ahora un porcentaje de avance actualizado (RF-GAC-014), cerrando un ciclo de retroalimentación positiva que fomenta la autogestión.

#### Arquitectura de decisiones: Drag & Drop y la seguridad de la previsualización

Al llegar a la fase de segmentación de grupos, me enfrenté al desafío más complejo: ¿cómo permitir que Carlos ajuste lo que el sistema ha automatizado? Basándome en la necesidad de resolver el "rompecabezas" manual que él vivía en Excel, decidí implementar una interfaz de **Drag & Drop** para el ajuste de grupos (RF-GAC-008). 

Esta no fue una elección estética. En el wireflow, cuando Carlos arrastra a un participante de un grupo a otro, el sistema debe recalcular en tiempo real el cupo y mostrar una alerta visual si se excede el máximo o no se llega al mínimo. Es una solución de alta fidelidad funcional: Carlos tiene el control total, pero el sistema actúa como un copiloto que le impide cometer errores. 

Complementé esto con el flujo de **Comunicaciones Masivas**. Antes de que Carlos dispare cientos de invitaciones por WhatsApp o Teams (RF-GAC-021), el wireflow lo obliga a pasar por una pantalla de **Previsualización**. Diseñé esta parada táctica para proporcionar "seguridad psicológica". Carlos puede ver exactamente cómo se verá el mensaje en cada canal antes de ejecutar la acción masiva. Esta decisión reduce la ansiedad del administrador y garantiza que la comunicación que llega al colaborador sea impecable.

#### Resiliencia ante el fallo: El diseño forense de errores

Un diseñador senior se reconoce no por cómo diseña el éxito, sino por cómo gestiona el fracaso. En los wireflows de GAC, dediqué un esfuerzo considerable a las **rutas de contingencia**. ¿Qué sucede si el envío masivo falla? ¿Qué pasa si la plantilla ADN es incompatible?

Diseñé un flujo de error específico para las comunicaciones. Si un mensaje no sale, el sistema no solo muestra una alerta roja genérica; redirige a Carlos a un "Reporte de Errores de Envío". En esta pantalla, la tabla muestra el destinatario, el canal fallido y, crucialmente, una **"Acción Sugerida"** (ej. "Verificar número de WhatsApp" o "Reintentar envío"). El botón de "Volver a Enviar" está integrado en la misma línea del error. Esta es la mentalidad de diseño para la resiliencia: el sistema debe ser un aliado que ayude al usuario a recuperarse del error de la manera más rápida y menos frustrante posible.

#### Reflexión sobre la lógica del movimiento

Construir estos wireflows me permitió identificar que la automatización del 95% de la segmentación es un logro técnico, pero el valor real del producto reside en el 5% restante: el ajuste manual. Si ese 5% es difícil de usar, el 95% de automatización se percibe como una imposición, no como una ayuda. La lógica del movimiento me sirvió para validar que la plataforma GAC es flexible donde debe serlo y rígida donde el proceso de Gentera requiere control.

Estos diagramas se convirtieron en el lenguaje común con el equipo de desarrollo. Ya no hablábamos de "la pantalla de grupos", sino de "el estado de alerta por cupo excedido". Teníamos el guion visual completo; era el momento de elevar la fidelidad y poner estas interacciones a prueba con usuarios reales para ver si lo que en el papel parecía lógico, en la práctica era intuitivo.

Al cerrar la lógica de los wireflows, sentí que el sistema era invulnerable, pero una duda me asaltaba: ¿sería la interfaz de arrastrar y soltar demasiado compleja para el contexto de Carlos bajo presión? Había diseñado un mecanismo de precisión, pero necesitaba salir de la teoría y enfrentar estos flujos al juicio implacable de los usuarios finales. El siguiente desafío era inevitable: transformar estos planos en un prototipo funcional y someter cada decisión de interacción a un ciclo de validación que, sospechaba, nos obligaría a cuestionar más de una de nuestras certezas iniciales.

### Parte 6: Validación y Refinamiento El Ciclo de Feedback y Prototipado

#### La transición hacia la tangibilidad: del plano a la experiencia

Al cerrar la lógica de los wireflows, me encontré con un sistema que era invulnerable en el papel, pero inerte para el usuario. Tenía la arquitectura, los caminos críticos y las ramificaciones de error bien mapeadas, pero enfrentaba un reto de naturaleza distinta: la incertidumbre emocional de los stakeholders. No bastaba con que el flujo fuera correcto; necesitaba que Carlos, el administrador, y Lalo, el líder del proyecto, pudieran "sentir" la velocidad de la automatización que les habíamos prometido. Como diseñador, mi razonamiento fue claro: el wireframe estático es una promesa, pero el prototipo interactivo es una prueba de concepto que reduce el riesgo técnico y, sobre todo, el estrés operativo.

Decidí que el objetivo de esta etapa no era la estética, sino la simulación del "alivio operativo". Necesitaba transformar esos planos en una herramienta que permitiera a los usuarios hacer clic a través de los caminos críticos para identificar fricciones antes de que una sola línea de código fuera escrita. Era el momento de pasar de la teoría de flujos a la cinética de la interfaz, asegurándome de que cada transición comunicara el valor del sistema GAC.

#### Construcción del simulacro: precisión en el prototipo interactivo

Me senté en Figma para dar vida a los wireframes de media fidelidad, siguiendo una estrategia de fidelidad funcional sobre la visual. Mi enfoque fue quirúrgico: seleccioné los flujos donde la incertidumbre era mayor o donde la carga operativa de Gentera era más crítica. No pretendía prototipar cada pantalla, sino construir los "hilos de Ariadna" que guiaran a los roles principales a través de sus tareas más pesadas.

*   **El flujo de Carlos (Administración):** Configuré *hotspots* estratégicos en el área de "Arrastrar y Soltar" de la plantilla. Quería que Carlos experimentara la transición inmediata desde la carga de un archivo Excel hasta el "Resumen de Procesamiento". Diseñé esta interacción para que fuera casi instantánea, mostrando visualmente las métricas de éxito y, lo más importante, el desglose de inconsistencias detectadas. Esta era la "zona de alivio" donde el sistema resolvía en segundos lo que a él le tomaba horas.
*   **La experiencia de Ana (Colaboradora):** Para el "Mapa Visual de Ruta", utilicé transiciones de tipo *slide* para la navegación entre niveles, reforzando la sensación de progreso lineal y gamificado. Me aseguré de que el botón para descargar el archivo `.ical` fuera un punto de interacción destacado; no era solo un botón, era la conexión real entre la plataforma GAC y su agenda diaria de trabajo.
*   **Simulación de estados y microinteracciones:** Utilicé transiciones instantáneas para los cambios de estado en las tablas (como filtros activos o modales de confirmación) para que el sistema se sintiera ágil. Mi intención era que el Tech Lead y el equipo de desarrollo entendieran no solo *qué* hacía la pantalla, sino *cómo* debía responder la lógica de segmentación ante las acciones del usuario. El prototipo actuó aquí como una especificación técnica viva.

#### El escrutinio de los stakeholders: validación en la trinchera

Con el prototipo clicable listo, convoqué a una sesión en Google Meets con Lalo, Carlos y los representantes operativos de Gentera. Mi técnica de facilitación fue el uso de escenarios narrativos: "Imagina, Carlos, que es jueves por la mañana y tienes que generar las listas para el grupo de la próxima semana...". Esta contextualización permitió que la validación no fuera sobre botones, sino sobre procesos de negocio.

La reacción fue inmediata. Al ver el "Motor de Automatización de Listas" funcionando en el prototipo, Lalo y Carlos expresaron un "sentimiento de alivio" genuino. Validaron que el sistema finalmente resolvía el "rompecabezas" semanal de la segmentación de grupos que tanto los desgastaba. Presenté también el concepto de "Mi Ruta de Capacitación" para Ana y el "Dashboard 360°" para David, el líder. Ver el dashboard con sus semáforos de estatus y la capacidad de *drill-down* para ver el detalle de cada colaborador confirmó que estábamos alineados con la estrategia de transformación digital de Gentera. Esta sesión no solo validó el diseño; blindó la confianza de los stakeholders en la dirección que estábamos tomando.

#### Refinamiento forense: iterando sobre el feedback real

A pesar de la recepción positiva, el feedback de los stakeholders fue quirúrgico y me obligó a realizar ajustes críticos que no habíamos previsto inicialmente. La validación con Carlos reveló que la automatización total es un riesgo si no se acompaña de herramientas de gestión de excepciones.

*   **Gestión inteligente de inconsistencias:** Carlos enfatizó que no bastaba con detectar errores en la plantilla. Realicé una iteración profunda en el "Reporte Detallado de Inconsistencias" para agrupar los errores por tipo (ej. "Nómina duplicada", "Puesto no reconocido"). Añadí una interfaz de corrección directa en GAC para errores menores, permitiéndole "ignorar" inconsistencias no críticas o aceptar sugerencias de corrección automática. Esto transformó el sistema de un filtro rígido a un asistente flexible.
*   **Optimización para Elena (Formadora):** El feedback de Elena fue vital para la agenda. Solicitó que el registro de asistencia fuera aún más rápido para grupos masivos. Implementé filtros de asistencia para "solo mostrar ausentes", permitiéndole marcar a los pocos que no llegaron en lugar de pasar lista uno por uno. Además, integré la solicitud de sincronización con Outlook, asegurando que GAC no fuera una isla, sino una extensión de su ecosistema de trabajo.
*   **Transparencia en las reglas de negocio:** Un punto recurrente fue el "por qué". Los usuarios necesitaban entender por qué el sistema asignaba a alguien como "Gerente Multiproducto". Diseñé *tooltips* explicativos y anotaciones que desglosaban la lógica aplicada, elevando la transparencia y la confianza en el motor de segmentación.

#### El cierre del ciclo: blindando la adopción del sistema

Para finalizar la etapa de media fidelidad, integré salvaguardas de control que surgieron directamente de las preocupaciones de seguridad de los stakeholders. En la pantalla de "Enviar Convocatorias", añadí contadores dinámicos que muestran exactamente cuántos correos y mensajes de WhatsApp se van a enviar (separando Gerentes de Colaboradores) antes de que Carlos presione el botón de ejecución masiva. Este "momento de pausa" fue una petición directa para evitar errores humanos irreversibles.

Asimismo, en el dashboard de David, incluí iconos de "Enviar Recordatorio" vía Teams y WhatsApp junto a los colaboradores marcados con estatus "En Riesgo" o "Retrasado". Estas microinteracciones, documentadas detalladamente en los flujos prototipados, son las que garantizan que los líderes operativos no solo consulten datos, sino que tomen acciones proactivas. Al cerrar esta fase, el prototipo interactivo dejó de ser una simulación para convertirse en el "contrato social" entre diseño, negocio y desarrollo, dejando la estructura y la funcionalidad listas para recibir la capa visual final.

**Reflexión final:**
Esta fase de validación me recordó que, en proyectos de alta complejidad operativa como GAC, el prototipo interactivo es la herramienta de comunicación más poderosa que tenemos. Lo que empezó como una serie de planos lógicos terminó siendo un artefacto que generó alivio real en los usuarios antes de existir como código. Aprendí que la flexibilidad en las reglas de negocio —permitir que el humano intervenga en la automatización— es lo que realmente determina la adopción de una herramienta de productividad en una organización tan grande como Gentera.