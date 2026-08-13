# Fase 1: Entender y Definir (Discovery & Research)

## Actividad_03_Definición de Usuarios

### Parte 1: Síntesis Forense y Construcción de Arquetipos User Personas

#### La destilación del caos: de la evidencia a la identidad

Me encontraba rodeado de una masa informe de transcripciones, grabaciones de entrevistas y diagramas de flujo que, aunque valiosos, todavía no tenían alma. Tras cerrar la fase de inmersión cualitativa, el riesgo era evidente: si intentábamos diseñar para "todos los empleados de Gentera", terminaríamos construyendo una herramienta genérica que no resolvería los problemas específicos de nadie. Tenía frente a mí la urgencia de convertir esos datos crudos en rostros con nombres, miedos y ambiciones técnicas. No podíamos permitirnos el lujo de avanzar hacia la arquitectura de información basándonos en suposiciones; necesitaba "contratos de diseño" —arquetipos que personificaran las fricciones del sistema actual— para que cada decisión posterior tuviera un juez implacable: el usuario real.

La transición de la investigación a la definición fue un ejercicio de honestidad brutal. Sabía que el éxito del proyecto GAC (Gestión Automatizada de la Capacitación) no dependía de la estética, sino de la capacidad de la plataforma para absorber la carga cognitiva que hoy aplasta al equipo operativo. Por eso, mi primer paso no fue abrir Figma, sino sentarme a procesar la síntesis forense de los hallazgos. Necesitaba que el equipo de desarrollo y los stakeholders de Gentera dejaran de ver "roles" y empezaran a ver personas cuya jornada laboral dependía de nuestra capacidad para automatizar procesos obsoletos.

#### El rigor del Affinity Mapping: permitiendo que los datos hablen

Para evitar cualquier sesgo de confirmación —ese peligroso vicio de ver solo lo que uno quiere ver—, implementé una sesión intensiva de **Affinity Mapping**. Consolidé cada nota de campo, cada queja capturada en las observaciones contextuales y cada cita directa de los stakeholders en un lienzo digital saturado de notas adhesivas. Mi metodología fue quirúrgica: agrupé los atributos por comportamientos recurrentes, actitudes ante la tecnología y, sobre todo, por las metas que cada uno intentaba alcanzar desesperadamente dentro del ecosistema de capacitación de Gentera.

No fue un proceso rápido. Al organizar estas agrupaciones naturales, detecté variables críticas que separaban a los usuarios no solo por su cargo, sino por su relación con el dato. Identifiqué una división clara entre quienes interactúan con el *backend* para inyectar lógica al sistema y quienes consumen el *frontend* buscando trazabilidad en su desarrollo profesional. Esta segmentación me permitió definir los ejes de los User Personas basándome en su nivel de habilidad tecnológica, sus responsabilidades primarias y sus frustraciones más profundas. Solo cuando los patrones empezaron a repetirse con insistencia, supe que los arquetipos estaban listos para ser bautizados.

#### Carlos: el guardián de la "Plantilla ADN" y el costo de la manualidad

El primer perfil que emergió con una fuerza casi angustiante fue el de **Carlos, el Coordinador Detallista**. Carlos tiene 45 años y lleva cinco en su rol como Administrador de Capacitación. Es un usuario experto en el ecosistema tradicional (Excel, Outlook, Teams), pero su vida laboral está anclada en una rutina semanal estricta y agotadora que culmina cada jueves. Al analizar su jornada, descubrí un dato que cambió mi perspectiva sobre la prioridad del proyecto: Carlos dedica entre **24 y 32 horas de su semana** exclusivamente a tareas manuales y repetitivas.

Su mayor "enemigo" es la **Plantilla ADN**. Carlos pasa horas limpiando datos, cruzando archivos y validando información de forma artesanal para evitar errores en la identificación de colaboradores elegibles. Me narró con frustración cómo la regla de negocio del "Gerente Multiproducto" y el manejo de reingresos le roban noches de sueño, ya que un solo error en su BUSCARV de Excel puede resultar en una convocatoria incorrecta. Carlos no necesita "una plataforma más"; necesita un sistema que automatice la segmentación y el envío de invitaciones para dejar de "apagar incendios" y poder enfocarse, por fin, en la estrategia de capacitación que Gentera le demanda. Para él, GAC es, ante todo, una herramienta de supervivencia operativa.

#### Ana: la paradoja de la nativa digital perdida en el sistema

En el otro extremo del espectro, definí a **Ana, la Colaboradora Entusiasta**. Con 25 años y apenas dos meses en la empresa como Asesora de Ventas, Ana representa a la nueva generación de Gentera: es una nativa digital que espera que las herramientas del trabajo sean tan intuitivas como las apps de su smartphone. Sin embargo, su realidad es la desorientación. A pesar de su proactividad, Ana se siente "perdida" respecto a su ruta de capacitación.

La fricción de Ana es la fragmentación. Recibe información por canales inconexos: un correo de su jefe, un mensaje por Teams, una notificación de capacitación. Esta falta de una fuente única de verdad le genera una ansiedad innecesaria sobre si está cumpliendo con su plan de carrera. Su meta es simple pero crítica para el negocio: quiere ser productiva lo antes posible. Para Ana, el valor de GAC no está en la automatización del backend, sino en una interfaz clara y móvil donde pueda ver, en un solo vistazo, qué cursos ha completado y qué sigue en su camino para crecer dentro de la organización.

#### David y Elena: la supervisión estratégica y el lastre logístico

Para completar el ecosistema, articulé los perfiles de David y Elena, quienes representan la supervisión y la ejecución pedagógica. **David, el Líder Comprometido**, es un Gerente de Oficina de 38 años que supervisa a 15 personas. Su interacción con la capacitación es de control y apoyo. Actualmente, pierde un tiempo valioso solicitando reportes manuales a Carlos para saber quién de su equipo está retrasado. David necesita un **dashboard consolidado** que le entregue visibilidad inmediata. Su dolor no es el proceso, sino la ceguera informativa que le impide actuar proactivamente antes de que un colaborador pierda un curso crítico.

Por su parte, **Elena, la Formadora Dedicada**, personifica el impacto de la mala logística en la calidad educativa. A sus 42 años, Elena lucha contra la recepción tardía de listas de participantes y formatos inconsistentes que entorpecen su preparación. Su necesidad es la estandarización: quiere una agenda digital y una forma sencilla de registrar asistencia que no implique enviar correos de seguimiento después de cada sesión. Elena nos recordó que, si la logística falla, la formación sufre. Estos cuatro perfiles no son solo fichas biográficas; son los pilares sobre los que empecé a construir la lógica de interacción de toda la plataforma.

#### La empatía técnica como contrato de diseño

Al finalizar la construcción de estas cuatro fichas detalladas, me di cuenta de que habíamos logrado algo más que un entregable visual. Habíamos establecido lo que yo llamo **Empatía Técnica**. Ya no hablábamos de "automatizar el backend", sino de "devolverle a Carlos sus 32 horas semanales". Ya no diseñábamos un "módulo de seguimiento", sino un "mapa de tranquilidad para Ana".

Cada meta, necesidad y contexto tecnológico que documenté —desde el uso extensivo de fórmulas de Excel por parte de Carlos hasta la preferencia por el smartphone de Ana— se convirtió en una restricción de diseño. Esta fase forense de definición de usuarios blindó el proyecto contra la subjetividad. Si una funcionalidad propuesta no resolvía un *pain point* específico de Carlos o no facilitaba la vida de Elena, simplemente no tenía lugar en nuestro backlog. Con estos rostros grabados en la mente del equipo, estábamos listos para mapear cómo sería su viaje a través del sistema, sabiendo exactamente dónde les duele el proceso hoy.

> **Insight Senior:** La verdadera utilidad de un User Persona no está en su foto o en su nombre ficticio, sino en la precisión con la que captura el coste de oportunidad de la ineficiencia. Descubrir que el administrador principal gasta más del 60% de su jornada en un solo archivo de Excel no solo es un hallazgo de investigación; es el argumento de negocio más poderoso para priorizar la automatización por encima de cualquier otra funcionalidad estética.


Teníamos los perfiles, pero al ponerlos frente a frente, surgió una tensión inevitable: las necesidades de Carlos en el backend chocaban frontalmente con la simplicidad que David exigía para su dashboard. Recuerdo el momento exacto en que comprendí que no podíamos darles a todos la misma importancia simultáneamente si queríamos lanzar un MVP funcional en el tiempo previsto. El siguiente desafío era diseccionar sus interacciones paso a paso para decidir qué procesos manuales íbamos a sacrificar y cuáles íbamos a blindar en la transición hacia la PRIORIZACIÓN ESTRATÉGICA Y ALINEACIÓN DE ROLES.

### Parte 2: Priorización Estratégica y Alineación de Roles

#### El filtro de la relevancia: Por qué no todos los usuarios nacen iguales

Al terminar la fase de síntesis de los perfiles, me encontré con siete roles distintos sobre la mesa. En la teoría, todos parecían importantes; en la práctica, intentar diseñar una solución que complaciera a los siete simultáneamente era la receta perfecta para un producto mediocre y diluido. Como responsable de la estrategia de diseño, sabía que el éxito del proyecto GAC no dependía de la cantidad de funcionalidades, sino de la profundidad con la que resolviéramos los problemas críticos de los usuarios que realmente mueven la aguja del negocio.

Me enfrenté a una tensión inevitable: Gentera es una organización compleja donde cada rol siente que su necesidad es prioritaria. Sin embargo, mi razonamiento fue pragmático. Si el "Desarrollo 1" buscaba la automatización y el "Desarrollo 2" la trazabilidad, debía identificar a los dueños directos de esos procesos. No podíamos permitirnos el lujo de diseñar una herramienta genérica que "medio funcionara" para todos. Apliqué un filtro estricto de **viabilidad vs. impacto** para determinar quiénes serían nuestros protagonistas y quiénes quedarían en la periferia del diseño inicial. Esta decisión no fue un descarte por falta de interés, sino una maniobra estratégica para blindar el MVP y asegurar que el núcleo de la plataforma fuera impecable antes de expandirnos.

#### El proceso de destilación: De siete roles a un núcleo operativo

Para pasar de la intuición a la decisión técnica, ejecuté una sesión de **Affinity Mapping**. No me limité a leer las descripciones de los puestos; analicé las transcripciones de las entrevistas buscando agrupaciones naturales basadas en comportamientos, niveles de habilidad tecnológica y, sobre todo, en la magnitud de sus frustraciones. 

Agrupé las variables bajo tres ejes críticos:
*   **Frecuencia de uso:** ¿Quién pasará más horas dentro de GAC?
*   **Criticalidad del error:** ¿Si este usuario se equivoca, se detiene la operación de capacitación?
*   **Alineación con los KPIs del Brief:** ¿Qué perfil encarna mejor la necesidad de automatización y trazabilidad?

Este ejercicio me permitió reducir el espectro de siete roles a un núcleo manejable de cuatro perfiles clave, clasificándolos en **Personas Primarias** (aquellos cuyo problema resolvemos al 100%) y **Personas Secundarias** (aquellos que se benefician del sistema pero no dictan su arquitectura principal). Esta jerarquía fue vital: un exceso de personas primarias solo sirve para fragmentar el enfoque de diseño y generar fricciones innecesarias en el desarrollo.

#### Carlos: El ancla de la eficiencia operativa

Identifiqué a **Carlos, el Coordinador Detallista**, como nuestra Persona Primaria absoluta para el frente de automatización. Mi diagnóstico fue claro: Carlos es el ejecutor central. Si GAC falla para él, el proyecto fracasa por completo. Actualmente, su flujo de trabajo es un laberinto de archivos de Excel, correos electrónicos y mensajes de WhatsApp. Su impacto en el proyecto es **Muy Alto** porque de su precisión depende que cientos de colaboradores reciban la invitación correcta en el momento adecuado.

Al diseccionar su perfil, prioricé sus necesidades sobre cualquier otra petición estética del proyecto:
*   **El dolor del error manual:** Carlos vive con el miedo constante de omitir a un colaborador en una lista de segmentación. Su prioridad es un sistema que automatice la identificación de candidatos según su puesto y subdirección.
*   **El coste del tiempo:** Descubrí que gran parte de su jornada se consume en tareas repetitivas de envío de invitaciones por Outlook y Teams. GAC debe ser, ante todo, su motor de liberación de tiempo.
*   **La complejidad del proceso:** Carlos no necesita una interfaz simplista; necesita una herramienta potente que le permita gestionar variables complejas (sedes, formadores, horarios) con una reducción radical del esfuerzo manual.

> **Insight Senior:** En proyectos de automatización, la tentación es diseñar para el jefe de Carlos. Mi decisión fue diseñar *con* Carlos. Si logramos que el administrador principal pase de la gestión manual a la supervisión automatizada, habremos transformado la cultura operativa del área de capacitación.

#### Ana: La validación del propósito humano

Mientras Carlos representa la eficiencia del backend, elevé a **Ana, la Colaboradora Entusiasta**, al estatus de Persona Primaria para el frente de trazabilidad. Ella es el rostro del "Valor Humano" de Gentera. Ana representa al grupo más numeroso de usuarios y es la beneficiaria final de todo el ecosistema. Su impacto es **Alto** porque ella es quien valida si la capacitación está cumpliendo su propósito de desarrollo.

Mi razonamiento para priorizarla fue estratégico: la trazabilidad no es solo para que los jefes vigilen; es para que el colaborador sea dueño de su crecimiento. Ana necesita claridad absoluta sobre su ruta semestral y su progreso. Si ella entra a la plataforma y no entiende dónde está parada o qué curso sigue, el sistema de trazabilidad habrá fallado en su misión de compromiso. Su experiencia debe ser fluida, motivadora y, sobre todo, transparente. Al centrar el diseño del frontend en Ana, aseguramos que la adopción del sistema sea orgánica y no una imposición administrativa.

#### La periferia necesaria: David y Elena como roles de soporte

No todos los que interactúan con el sistema deben dictar su forma. Clasifiqué a **David (Gerente de Oficina)** y a **Elena (Formadora)** como Personas Secundarias. 

*   **David, el Líder Comprometido:** Su impacto es **Medio-Alto**. Aunque es un consumidor crítico de la información para tomar decisiones sobre su equipo, no es quien opera el proceso de convocatoria. Sus necesidades de visualización en dashboards y reportes son fundamentales, pero decidí que estas funcionalidades se derivarían de la data que Carlos y Ana generen. Diseñar para David significa asegurar que los datos maestros sean legibles, no construir un flujo de trabajo independiente.
*   **Elena, la Formadora Dedicada:** Su impacto es **Medio**. Elena es un eslabón esencial, pero la transformación radical del proceso no recae sobre ella en la misma medida que sobre Carlos. Su principal necesidad es recibir información limpia de sus grupos y gestionar la asistencia de forma sencilla. Al resolver el caos de Carlos, automáticamente mejoramos la vida de Elena al entregarle listas segmentadas y actualizadas sin el ruido del proceso manual actual.

#### La exclusión como acto de diseño: El caso del Super Admin y la Dirección

Una de las decisiones más difíciles, pero necesarias, fue dejar fuera del flujo principal de diseño a perfiles como el **Super Admin EdTech** y los **Directores**. 

El Super Admin es un rol puramente técnico. Sus necesidades se centran en logs, carga de datos maestros y gestión de usuarios en el backend. Intentar integrar sus requisitos técnicos en la interfaz de negocio de GAC solo habría generado ruido visual y complejidad innecesaria para usuarios como Carlos o Ana. Decidí que este rol se atendería con una interfaz de administración funcional, separada del flujo operativo de capacitación.

Por otro lado, los Directores y Subdirectores tienen necesidades que son, en esencia, extensiones de lo que diseñamos para David. Ellos requieren reportes agregados y visión macro. Al blindar la calidad de la data en los niveles operativos (Carlos) y de supervisión media (David), la necesidad de la Dirección queda cubierta por defecto. Esta distinción fue vital para mantener el enfoque de GAC en la **operatividad de negocio** y evitar que se convirtiera en una consola de administración genérica sin alma.

#### La renuncia estratégica como blindaje del MVP

Priorizar a Carlos y Ana no significó ignorar al resto de la organización; significó asegurar que el núcleo del sistema fuera lo suficientemente sólido como para sostener a todos los demás. Como Product Designer, mi labor fue articular que si Carlos logra automatizar con éxito y Ana visualiza su progreso con claridad, habremos entregado el 80% del valor prometido en el brief. 

Esta alineación de roles actuó como nuestra brújula. Cada vez que surgía una duda sobre una funcionalidad, la pregunta no era "¿esto le gustaría a alguien?", sino "¿esto ayuda a Carlos a reducir errores o a Ana a entender su ruta?". Esta disciplina férrea nos permitió avanzar hacia el mapeo de los viajes de usuario con una claridad absoluta sobre quiénes eran nuestros protagonistas y qué batallas íbamos a pelear por ellos.


Teníamos los rostros y las prioridades claras, pero al poner estas jerarquías sobre el papel, me asaltó una duda incómoda: ¿realmente sabíamos qué tan roto estaba el proceso actual para ellos? No bastaba con saber quiénes eran; necesitaba ver a Carlos peleando con sus catorce archivos de Excel en tiempo real y sentir la frustración de Ana al no recibir su confirmación de curso. Estábamos a punto de entrar en la fase más cruda de la investigación, donde el orden de nuestras fichas de usuario chocaría de frente con la realidad del día a día en la INMERSIÓN EN EL CAOS: USER JOURNEY MAPS AS-IS.

### Parte 3: Inmersión en El Caos User Journey Maps As-is

#### El diagnóstico de una patología organizacional

Teníamos los rostros y las prioridades claras, pero al poner estas jerarquías sobre el papel, me asaltó una duda incómoda: ¿realmente sabíamos qué tan roto estaba el proceso actual para ellos? No bastaba con saber quiénes eran; necesitaba ver a Carlos peleando con sus catorce archivos de Excel en tiempo real y sentir la frustración de Ana al no recibir su confirmación de curso. Estábamos a punto de entrar en la fase más cruda de la investigación, donde el orden de nuestras fichas de usuario chocaría de frente con la realidad del día a día.

Como **Product Designer**, entiendo que los User Journey Maps no son solo diagramas para decorar una pared; son el diagnóstico forense de una patología organizacional que, en el caso de Gentera, estaba consumiendo entre 24 y 32 horas semanales de talento puro en tareas meramente administrativas. Decidí que no podíamos diseñar una solución de vanguardia como GAC sin antes mapear cada cicatriz del proceso actual. No buscaba "fricciones de usuario" genéricas; buscaba entender por qué un profesional calificado pasaba tres días a la semana actuando como un procesador de datos humano. Esta inmersión en el "barro" operativo era el único camino para asegurar que nuestra propuesta futura no fuera un simple parche cosmético, sino una cura estructural.

#### El detective de datos: El maratón de los jueves de Carlos

El ciclo de dolor de Carlos comienza cada jueves por la mañana, y narrar su viaje es describir un ejercicio de resistencia cognitiva. Observé cómo su primera acción es descargar la "Plantilla de Capacitación" desde el sistema **ADN**. Lo que debería ser un insumo listo para usar es, en realidad, un bloque de mármol sin pulir. Carlos inicia un proceso de limpieza forense: aplica filtros manuales para eliminar colaboradores marcados como "Baja", "SEAS México" e "IPP". No es una tarea trivial; un error aquí significa convocar a alguien que ya no está en la empresa o ignorar a un colaborador que necesita su certificación para operar.

Lo más crítico ocurre cuando Carlos abre su "Concentrado Histórico". Lo vi maniobrar entre pantallas, ejecutando fórmulas `BUSCARV` e `INDICE/COINCIDIR` con una precisión casi desesperada para cruzar la plantilla actual con los datos históricos. Su pensamiento recurrente, "espero que este Excel no tenga errores", no es paranoia; es la respuesta natural a un sistema donde la integridad de los datos depende de que una fórmula no se rompa al arrastrarla. 

> **Insight de diseño:** Carlos no es un administrador de capacitación en este punto; es un detective de datos. El riesgo de que un error en una sola celda arruine la planeación de toda una región es una carga emocional que el sistema GAC debe absorber por completo.

En este proceso, Carlos debe validar nombres, puestos y detectar el estatus real de cada persona: ¿es un Nuevo Ingreso o una Promoción? Si es un reingreso, debe aplicar una regla de negocio invisible: si la salida fue hace menos de 6 meses, consulta el histórico; si fue más, reinicia la ruta. Esta lógica no está en ningún software; reside en la memoria de Carlos y en sus hojas de cálculo personales, lo que convierte al proceso en algo peligrosamente dependiente de su conocimiento tácito.

#### El rompecabezas artesanal de la segmentación

Una vez que los datos están "limpios", Carlos entra en la fase que él mismo describe como "el rompecabezas de la semana". Aquí es donde la complejidad técnica se encuentra con la logística física. Carlos empieza a crear pestañas en un nuevo Excel, copiando y pegando colaboradores para armar grupos. Pero no es solo agrupar nombres; es un acto de balanceo de variables en conflicto:

*   **Criterios de cupo:** Grupos de 5 a 25 personas para sesiones presenciales, pero limitados a 10-15 para el formato online para asegurar la calidad pedagógica.
*   **La regla del "Gerente Multiproducto":** Esta es quizás la maniobra más manual. Carlos debe abrir un Excel adicional llamado "Estructura de Oficinas", buscar manualmente si hay "Asesores CIE" en la oficina del gerente en cuestión y marcar al colaborador según corresponda. 
*   **Compatibilidad de puestos:** Debe asegurar, basándose en su experiencia, que no se mezclen puestos incompatibles que puedan entorpecer la dinámica del curso.

Observar este proceso me permitió diagnosticar que el agotamiento de Carlos no proviene de la cantidad de trabajo, sino de la **carga cognitiva de la segmentación**. Cada vez que un grupo no cumple con el mínimo de asistentes, Carlos debe decidir si cancela, pospone, fusiona o divide, consultando la disponibilidad de sedes y formadores por canales externos. Es un proceso artesanal que GAC debe automatizar mediante algoritmos de segmentación inteligente para devolverle a Carlos su capacidad de análisis estratégico.

#### El abismo de los archivos .ical y la comunicación rota

El viaje de Carlos no termina cuando las listas están listas; de hecho, el tramo final es el más tedioso. Al llegar a la fase de comunicación, el sistema actual colapsa en una fragmentación absoluta. Para notificar a los colaboradores, Carlos tiene tres rutas, ninguna eficiente:

1.  Busca individualmente a cada persona en Teams para enviarle un mensaje.
2.  Crea eventos manuales en Outlook, los guarda como archivos **.ical**, redacta un correo y los adjunta uno por uno.
3.  Envía textos simples esperando que el colaborador los lea a tiempo.

"Odio hacer los .ical", me confesó en una de las sesiones. Esa frase resume el fallo del ecosistema actual: un profesional senior dedicando horas a generar archivos de calendario manualmente. Esta fase crea un cuello de botella crítico; Carlos depende de que los Líderes Operativos confirmen a los formadores por correo o teléfono, lo que retrasa el envío de las listas finales a los instructores. Al terminar su jornada, Carlos siente un alivio mezclado con fastidio extremo. Ha logrado sacar la semana, pero sabe que el próximo jueves el caos volverá a empezar exactamente igual.

#### La ceguera de Ana y el liderazgo reactivo de David

Cuando cambié el foco hacia Ana, la colaboradora, descubrí que su viaje es el espejo de la ineficiencia de Carlos. Ana vive en un estado de **ceguera informativa**. Recibe convocatorias "justas de tiempo", a veces por Teams, a veces por un correo reenviado por su jefe, sin tener nunca la certeza de si ese curso es realmente el que le corresponde.

Lo más doloroso del viaje de Ana es su falta de perspectiva. No tiene acceso a su "Ruta de Capacitación" completa. Para ella, la formación en Gentera no es un camino de crecimiento visible, sino una serie de eventos aislados que aparecen en su bandeja de entrada. Vive en un presente perpetuo: no sabe qué curso sigue, no sabe cuánto ha avanzado y depende totalmente de su memoria o de preguntar a colegas para saber si está "al día". Esta desorientación mata la motivación y transforma la capacitación en una obligación confusa en lugar de un beneficio.

Por otro lado, David, el Líder, opera bajo una **ceguera operativa**. Su viaje actual consiste en "mendigar" información. Para saber quién de su equipo ha avanzado, David tiene que interrumpir a Carlos pidiéndole un reporte o interrogar directamente a sus colaboradores en las reuniones de pasillo. Su supervisión es reactiva: solo se entera de que algo va mal cuando el bajo rendimiento de un colaborador ya es evidente. No tiene un dashboard, no tiene alertas; solo tiene su intuición y una serie de correos dispersos que rara vez reflejan la realidad en tiempo real.

#### La deuda técnica operativa: Una reflexión necesaria

Al cerrar el mapeo de Elena, la formadora, quien recibe listas en formatos inconsistentes (a veces un PDF difícil de editar, a veces un Excel desactualizado) y tiene que registrar la asistencia en papel para luego teclearla de vuelta a Carlos, el panorama quedó completo. 

> **Reflexión Senior:** Lo que diagnosticamos no fue solo un problema de software, sino una enorme "deuda técnica operativa". Gentera ha crecido, pero sus procesos de capacitación se quedaron anclados en una escala que el Excel ya no puede sostener. Estamos obligando a personas brillantes a realizar tareas de bajo valor porque no existe una "Single Source of Truth" (Fuente Única de Verdad).

El verdadero reto de GAC no es solo automatizar el envío de correos o la creación de grupos. El reto es devolverle la dignidad al tiempo de estos usuarios. Debemos eliminar el ruido de los archivos `.ical`, el estrés de los `BUSCARV` infinitos y la incertidumbre de Ana sobre su propio futuro profesional. Hemos mapeado el dolor con precisión quirúrgica; ahora sabemos exactamente dónde tiene que cortar el bisturí del diseño.


Teníamos el mapa del desastre perfectamente trazado y las cicatrices de Carlos y Ana expuestas, pero ver el "barro" operativo me dejó una pregunta punzante: ¿cómo transformar este laberinto de Excels y archivos .ical en una experiencia fluida sin perder las reglas de negocio que Carlos protege con tanto celo? Sabía que el siguiente movimiento no podía ser una simple digitalización de lo que ya existía, sino un rediseño radical de la lógica misma del proceso. Estábamos listos para dar el salto del caos a la estructura, y el momento de proyectar el futuro en el DISEÑO DE LA EXPERIENCIA TRANSFORMADA (TO-BE) se sentía no solo necesario, sino urgente.

### Parte 4: Diseño de la Experiencia Transformada To-be

#### La transmutación del caos: Del "As-Is" al diseño de un futuro posible

Teníamos el mapa de las cicatrices perfectamente trazado. Habíamos expuesto el "barro" operativo en el que Carlos, Ana y David se hundían cada semana, pero ver el desastre con tanta claridad me dejó una pregunta punzante: ¿cómo transformar este laberinto de Excels y archivos `.ical` en una experiencia fluida sin perder las reglas de negocio que Gentera protege con tanto celo? Sabía que el siguiente movimiento no podía ser una simple digitalización de lo que ya existía; eso sería pavimentar un camino de tierra lleno de baches. Mi reto era proyectar un futuro donde la tecnología actuara como un exoesqueleto de eficiencia, no como una carga adicional.

Inicié el **Brainstorming Centrado en la Solución** con una premisa clara: para cada punto de dolor identificado en el viaje actual, debía existir una respuesta funcional en la plataforma GAC que moviera la aguja emocional del usuario. No estábamos diseñando pantallas; estábamos diseñando alivio. Pasamos de preguntarnos "¿qué hace el usuario?" a "¿cómo GAC puede hacer esto por él?". Fue un ejercicio de rediseño radical de la lógica: si Carlos pasaba horas filtrando manualmente, mi diseño debía permitirle hacerlo con un solo botón inteligente. Este **User Journey Map To-Be** no era una lista de deseos, sino una capa de transformación que destacaba el valor real en cada punto de contacto, moviendo la experiencia de la frustración a la confianza absoluta.

#### El fin del lastre: La metamorfosis de la carga de datos

Para Carlos, el "Jueves de Capacitación" solía ser un maratón de estrés. En el nuevo escenario que tracé, su interacción inicial con la plataforma GAC redefine por completo su rol. Ya no es el operario que limpia datos; es el supervisor que valida inteligencia. El proceso comienza cuando Carlos sube la "Plantilla de Capacitación" (el Excel de ADN) a la plataforma. En ese instante, GAC toma el control: realiza automáticamente la limpieza básica, el cruce con el histórico y la validación de datos en segundos.

Lo que antes tomaba horas de `BUSCARV` y filtros manuales, ahora se reduce a una revisión de excepciones. Diseñé una interfaz de carga que muestra un resumen claro de las inconsistencias detectadas, permitiendo que Carlos intervenga solo donde el sistema encuentra ambigüedad. El impacto emocional es inmediato: su pensamiento pasa del "espero que este Excel no tenga errores" a un contundente "¡Qué alivio, GAC hace el trabajo pesado por mí!". Esta automatización no solo elimina el error humano desde el origen, sino que le devuelve a Carlos la seguridad de que los datos iniciales son íntegros, permitiéndole sentirse, por primera vez en años, optimista frente a su jornada.

#### Segmentación inteligente y el rompecabezas resuelto

Uno de los mayores retos de diseño fue la **Gestión de Grupos**. En el proceso manual, Carlos manejaba una carga cognitiva brutal intentando equilibrar cupos, sedes y perfiles de puestos. En el diseño To-Be, articulé una lógica de **Segmentación Inteligente**. Ahora, GAC identifica automáticamente a los colaboradores elegibles aplicando reglas de negocio complejas que antes vivían solo en la memoria de Carlos o en notas dispersas: la regla de los 6 meses para reingresos, las exclusiones específicas de SEAS/IPP y la lógica particular para el "Gerente Multiproducto".

La plataforma propone automáticamente las agrupaciones de colaboradores, optimizando por puesto, subdirección y sede, respetando estrictamente los cupos mínimos y máximos. 

> **Decisión de Diseño:** Implementé un modelo de "flexibilidad controlada". GAC genera la propuesta óptima, pero le permite a Carlos realizar ajustes mínimos si su criterio experto lo dicta. Si un grupo queda con pocos participantes o excede el cupo, el sistema lanza una alerta proactiva sugiriendo acciones como fusionar o posponer. El resultado es que el rompecabezas se arma solo, y Carlos recupera el sentido de control sin el agotamiento mental de la ejecución manual.

#### El "Clic de Poder": Automatización de la comunicación multicanal

Llegamos al punto de mayor fricción histórica: el envío de convocatorias. En el pasado, Carlos perdía días enviando correos individuales y adjuntando archivos `.ical` creados a mano. En el futuro que diseñé para GAC, transformé esta tarea en un acto de un solo clic. Una vez validados los grupos y asignados los formadores —cuya disponibilidad y carga de trabajo ahora son visibles en tiempo real en un dashboard centralizado—, el sistema dispara las invitaciones de forma automatizada y multicanal.

*   **Para los Gerentes:** Un correo formal vía Outlook con todos los detalles necesarios.
*   **Para los Colaboradores (Ana):** Notificaciones instantáneas por WhatsApp y Teams que incluyen el archivo `.ical` generado por el sistema para agendar con un toque.

Esta maniobra elimina la tarea más tediosa y propensa a errores del proceso anterior. Para Ana, la experiencia cambia radicalmente: ya no recibe información confusa o a destiempo. Ahora se siente organizada y respetada por la institución, sabiendo exactamente a dónde ir y qué esperar de su formación.

#### El mapa de Ana: De la incertidumbre al empoderamiento visual

Para Ana, la colaboradora de nuevo ingreso, el proceso actual era una neblina de correos y dudas. En el diseño To-Be, creé para ella una **Única Fuente de Verdad**. Al ingresar a GAC con sus credenciales básicas, Ana se encuentra con un dashboard atractivo que visualiza su **"Mapa de Capacitación"**. No es una lista de cursos; es un camino de crecimiento dividido en los 12 niveles de su ruta profesional en Gentera.

Diseñé esta interfaz integrando elementos de gamificación sutil, como barras de progreso e insignias, que transforman la obligación de capacitarse en una motivación por avanzar. Ana puede ver qué ha logrado, en qué punto exacto de la ruta se encuentra y qué hitos le faltan para completar su desarrollo. Al tener visibilidad total de su progreso y acceso directo a los materiales de cada curso, su emoción pasa de la confusión al empoderamiento. Ya no es una pieza pasiva en un sistema de capacitación; es la dueña de su propio plan de carrera.

#### Liderazgo basado en datos: El nuevo rol de David

David, el líder de oficina, solía ser un espectador pasivo que dependía de preguntar uno por uno a sus colaboradores cómo iban en sus cursos. En el escenario transformado, David se convierte en un **Líder Estratégico** gracias al Dashboard de Supervisor que diseñé. Ahora tiene una visión consolidada y en tiempo real del estatus de avance de todo su equipo, con filtros que le permiten identificar en segundos quién está al día y quién está en riesgo de retraso.

Lo más potente de este diseño son las **Alertas Inteligentes**. Si alguien de su equipo presenta un retraso crítico, David recibe una notificación concisa y accionable por WhatsApp. Esto elimina la necesidad de monitoreo constante y le permite intervenir solo cuando es necesario, actuando como un coach de desarrollo en lugar de un perseguidor de tareas. La plataforma le entrega datos estructurados para la toma de decisiones, permitiéndole usar la información de GAC para reconocer logros o asignar apoyos específicos, alineando su gestión con el valor humano de Gentera.

#### El impacto sistémico: Recuperando el valor del tiempo

Al consolidar estos User Journey Maps To-Be, el beneficio cualitativo y cuantitativo para Gentera se vuelve innegable. GAC actúa como la columna vertebral que resuelve los puntos débiles transversales que diagnosticamos:

*   **Eliminación de la dispersión:** Se termina la dependencia de archivos Excel dispersos; GAC es la Única Fuente de Verdad.
*   **Reducción de la carga operativa:** Calculé que la automatización integral libera entre **24 y 32 horas semanales** de trabajo manual solo para el rol de administrador.
*   **Precisión quirúrgica:** Se eliminan los errores de convocatoria (como invitar a Ana a cursos que no le corresponden) y se garantiza la integridad de los datos de ADN.
*   **Eficiencia para el formador:** Elena ahora registra asistencia digitalmente desde su tablet en el aula, eliminando el papeleo post-curso y permitiéndole enfocarse en la calidad de la enseñanza.

> **Reflexión Senior:** Diseñar el viaje To-Be me recordó que nuestro trabajo no es solo crear interfaces hermosas, sino construir sistemas que respeten el tiempo de las personas. Al eliminar el ruido administrativo, le estamos devolviendo a Carlos la capacidad de pensar estratégicamente y a Ana la claridad para crecer. GAC no es solo una herramienta de gestión; es un contrato de diseño que promete eficiencia sin perder la empatía.

Con este mapa del futuro validado y los perfiles de usuario perfectamente definidos, hemos despejado el camino. Ya no estamos adivinando qué construir; tenemos una hoja de ruta clara que conecta las necesidades humanas con las capacidades tecnológicas de la plataforma. Estamos listos para empezar a dar forma tangible a esta visión.

**Reflexión final:**
Esta actividad fue el punto de inflexión donde dejamos de analizar el problema para empezar a ser dueños de la solución. Al proyectar los viajes "To-Be", no solo definimos funcionalidades, sino que establecimos el estándar de éxito emocional que la plataforma debe alcanzar. Aprendí que la verdadera innovación en este proyecto no estaba en la tecnología per se, sino en la capacidad de orquestar una experiencia que devolviera la dignidad al tiempo operativo de cada colaborador de Gentera.