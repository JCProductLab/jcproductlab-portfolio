# Fase 2: Ideación y Diseño Conceptual

## Actividad_03_Diseño de Flujos de Usuario Clave (User Flows)

> Esta actividad constituye la ingeniería de interacción del proyecto, donde se transforman los conceptos estratégicos y la arquitectura de información en recorridos lógicos y eficientes. El proceso abarca desde la selección priorizada de tareas críticas basadas en el modelo MoSCoW y las Personas (Carlos, Elena, Sofía), hasta la diagramación forense de los 'Happy Paths' y la gestión de puntos de decisión. Se pone especial énfasis en resolver la fragmentación histórica de la plataforma (como el acceso a resultados y el agendamiento) mediante flujos unificados que reducen la carga cognitiva y eliminan puntos de fricción detectados en la Fase 1.

### Parte 1: Selección Estratégica y Alineación con Personas

Tenía el mapa de sitio validado frente a mí, pero un mapa es solo una promesa de destino; no es el viaje. Tras semanas de definir la arquitectura de información y consolidar el "esqueleto" del Centro Médico ABC, me encontré en ese punto crítico donde la estructura estática debía transformarse en movimiento. La arquitectura nos decía dónde estaban las piezas, pero no cómo interactuarían entre sí bajo la presión de un usuario real con una necesidad urgente. Como responsable del diseño de producto, sabía que pasar de la jerarquía de páginas a la lógica secuencial era el movimiento más arriesgado: si fallaba aquí, el sitio sería un laberinto hermoso pero inútil.

Mi razonamiento en este punto de inflexión fue pragmático. No podíamos diseñar cada interacción posible del ecosistema digital; eso habría diluido el impacto y agotado los recursos. Necesitaba pasar de la visión macro del mapa de sitio a la micro-ingeniería de los **User Flows**. La arquitectura define el espacio, pero los flujos definen la experiencia cinética. Mi objetivo era asegurar que cada clic tuviera un propósito alineado con la estrategia de negocio: reducir la carga operativa del hospital y transformar una experiencia históricamente fragmentada en un recorrido cohesivo.

#### La auditoría forense de prioridades (MoSCoW)

Antes de trazar una sola línea en Miro, realicé una maniobra que considero vital para cualquier proyecto de esta escala: regresé a la lista de requisitos priorizados que habíamos definido en la Fase 1. No confié en mi memoria ni en las notas de las reuniones. Abrí la hoja de cálculo donde residía el modelo **MoSCoW** para realizar una validación forense. Mi intención era filtrar el ruido. En un proyecto con tantos stakeholders, es fácil dejarse seducir por funcionalidades secundarias que "sería bueno tener", pero mi enfoque debía ser quirúrgico.

Me concentré exclusivamente en los requisitos clasificados como **"Must-have"**. Este ejercicio de disciplina me permitió blindar el proceso de diseño contra la dispersión. Si un flujo no resolvía una necesidad crítica de negocio o un punto de dolor fundamental del paciente, quedaba fuera de esta etapa. Esta auditoría no fue un trámite administrativo; fue el filtro que garantizó que el esfuerzo de diseño se concentrara en las funciones que generarían el mayor valor inmediato para el Centro Médico ABC. Al final de este análisis, tenía una lista limpia de funcionalidades que debían ser operativas, eficientes y, sobre todo, infalibles.

#### Cruzando datos: El factor humano como prueba de estrés

Con los requisitos técnicos claros, el siguiente paso fue humanizarlos. Utilicé los perfiles de nuestras Personas —Carlos, Elena y Sofía— para realizar un cruce de variables. No diseñamos flujos para "usuarios genéricos"; los diseñamos para contextos de vida específicos que traen consigo cargas cognitivas y emocionales distintas.

*   **Carlos, el profesional ocupado:** Su motor era la eficiencia extrema. Para él, cada paso adicional en un flujo de agendamiento era un motivo para abandonar y volver al método tradicional (el teléfono), lo cual iba en contra de nuestro objetivo de autoservicio. Su flujo debía ser una línea recta hacia la confirmación.
*   **Elena, la paciente crónica:** Ella representaba el reto de la fragmentación. Elena lidiaba con múltiples resultados de laboratorio e imagenología dispersos en subdominios como `misaludabc.abchospital.com`. Su dolor no era la velocidad, sino la claridad y la centralización. Su flujo de consulta de resultados debía resolver años de desconexión técnica.
*   **Sofía, la cuidadora informada:** Su necesidad era la gestión integral. No solo buscaba información para ella, sino que gestionaba la salud de sus dependientes. Su flujo de búsqueda de información médica debía ser empoderador, proporcionando contenido fiable que redujera su ansiedad.

Este análisis me permitió proyectar cómo estos dolores específicos se convertirían en el motor de cada decisión de diseño. No estaba buscando "rutas felices" teóricas; estaba buscando soluciones a fricciones reales que ya habíamos diagnosticado.

#### La selección de los seis pilares críticos

Basándome en la metodología de selección que establecí para esta actividad, decidí priorizar seis flujos fundamentales. Estos no fueron elegidos al azar; representan el 80% de las interacciones críticas que definen el éxito del ecosistema digital del hospital. Mi criterio fue claro: si estos seis flujos funcionaban a la perfección, la percepción de calidad del servicio digital del CM ABC cambiaría radicalmente.

1.  **Encontrar un médico específico y ver su perfil:** Un flujo que parece sencillo pero que es la puerta de entrada a la confianza. Debía conectar la búsqueda multi-criterio (especialidad, campus, nombre) directamente con la decisión de agendar.
2.  **Agendar una cita para estudios de laboratorio:** Aquí el reto era la optimización. La funcionalidad ya existía, pero era tosca. Mi objetivo era reducir los clics y asegurar que el usuario pudiera llenar sus documentos desde casa, un punto clave para el ahorro de tiempo en el campus.
3.  **Agendar una cita con un médico especialista:** Este fue el "gran dolor" identificado. A diferencia del laboratorio, el agendamiento con especialistas requería una lógica de disponibilidad en tiempo real mucho más compleja. Era vital para Carlos y Elena.
4.  **Consultar resultados médicos unificados:** El objetivo aspiracional de "Mi Salud ABC". Diseñé este flujo pensando en una integración profunda que permitiera ver laboratorio e imagenología en un solo lugar, eliminando la necesidad de saltar entre portales.
5.  **Pagar una factura en línea:** Una funcionalidad de conveniencia que cerraba el ciclo transaccional y reducía las filas en las cajas físicas del hospital.
6.  **Buscar información sobre un padecimiento o servicio médico:** Orientado a Sofía, integrando el contenido educativo y los consejos de salud con CTAs claros hacia los servicios médicos correspondientes.

> **Insight de Diseño:** Elegí limitar la fase inicial a estos seis flujos para garantizar una profundidad de análisis que la cantidad nunca podría compensar. Es preferible tener seis caminos blindados contra errores que veinte flujos superficiales que colapsan ante el primer caso de borde.

#### Alineación estratégica: El diseño como motor de negocio

Cada uno de estos flujos fue filtrado a través de los Principios de Diseño que establecimos al inicio del proyecto. No se trataba solo de diagramar pasos, sino de materializar conceptos como el **"Empoderamiento a través del Autoservicio"** y la **"Experiencia Unificada"**.

Al diseñar el flujo de agendamiento, por ejemplo, no solo estaba pensando en la interfaz; estaba pensando en cómo reducir la carga operativa del call center del Centro Médico ABC. Si lográbamos que el 30% de las citas se agendaran digitalmente sin errores, el impacto financiero y operativo sería masivo. De igual forma, al proyectar la consulta de resultados unificada, estaba atacando directamente la fragmentación que proyectaba una imagen de desactualización tecnológica.

Esta selección estratégica también se alineó con la Arquitectura de Información que ya habíamos validado. Me aseguré de que cada flujo respetara el "esqueleto" del sitio: que el punto de entrada para encontrar un médico estuviera donde el mapa de sitio decía que estaría, y que la salida hacia el portal del paciente fuera coherente con la navegación utilitaria definida. Esta consistencia es lo que permite que un sistema sea escalable; si los flujos ignoran la arquitectura, el producto final se siente como un conjunto de parches inconexos.

#### Vinculación y empatía: El diseño de contextos reales

Para cerrar esta fase de preparación, asigné formalmente cada flujo a una Persona principal. Esto no fue un ejercicio académico, sino una guía para la fase de diagramación que vendría después.

Al pensar en la **Consulta de Resultados Unificada**, coloqué mentalmente a Elena en el centro. Me pregunté: "¿Qué es lo primero que ella necesita ver después de autenticarse?". La respuesta no era un menú complejo, sino un dashboard con sus resultados más recientes destacados. Para el **Agendamiento de Especialista**, me enfoqué en Carlos: "¿Cómo puedo hacer que encuentre un horario disponible en el campus Santa Fe en menos de tres pasos?".

Esta vinculación influyó directamente en cómo empecé a visualizar los puntos de entrada y salida. Un flujo no empieza en el vacío; empieza en una necesidad (un correo de recordatorio, un síntoma, una orden médica) y termina en una resolución que debe sentirse como un éxito. Al definir estos límites estratégicos antes de abrir Miro, me aseguré de que el diseño final resolviera contextos de uso reales y no solo requisitos técnicos fríos.

#### Reflexión sobre la curaduría de diseño

Mirando hacia atrás, esta fase de "curaduría" fue la decisión más acertada de la actividad. En mi experiencia, el error más común de los diseñadores junior es saltar directamente a la herramienta de diagramación sin haber cuestionado la relevancia de lo que están dibujando. Como único Product Designer en este proceso, mi responsabilidad era actuar como el guardián del alcance.

Una mala selección de flujos en esta etapa habría resultado en un desperdicio masivo de recursos de diseño y, eventualmente, de desarrollo. Al anclar cada decisión en la lista MoSCoW, en los dolores de las Personas y en los objetivos de negocio del hospital, logré que los flujos no fueran solo diagramas, sino especificaciones estratégicas. Estábamos listos para empezar a construir la lógica de interacción, sabiendo exactamente qué batallas valía la pena pelear y cuáles podíamos dejar para una fase posterior.

#### Próximo paso:

Una vez que tuve claros los seis pilares estratégicos, me enfrenté a una realidad incómoda: un flujo no es una isla. Al intentar definir dónde empezaba exactamente el proceso de agendamiento para Carlos, me di cuenta de que los puntos de entrada eran mucho más caóticos de lo que el mapa de sitio sugería. Debía decidir si el flujo comenzaba en el buscador de la homepage, en el perfil del médico o incluso desde un enlace externo, y cada elección abría una caja de Pandora de posibles errores y abandonos que necesitaba blindar antes de trazar el primer rombo de decisión.

---

### Parte 2: Definición de Límites Puntos de Entrada y Salida

#### El riesgo de los flujos infinitos: Delimitando el perímetro técnico

Una vez que tuve claros los seis pilares estratégicos, me enfrenté a una realidad incómoda: un flujo no es una isla. Al intentar definir dónde empezaba exactamente el proceso de agendamiento para Carlos, me di cuenta de que los puntos de entrada eran mucho más caóticos de lo que el mapa de sitio sugería. Debía decidir si el flujo comenzaba en el buscador de la homepage, en el perfil del médico o incluso desde un enlace externo, y cada elección abría una caja de Pandora de posibles errores y abandonos que necesitaban blindaje antes de trazar el primer rombo de decisión.

Como único responsable del diseño de producto en esta etapa, sabía que la estrategia se desmorona si no tiene un perímetro definido. Un error común es empezar a diagramar sin saber dónde termina la responsabilidad del sistema y dónde empieza la del usuario. Si no establecía estas fronteras, corría el riesgo de sufrir un "scope creep" técnico o, peor aún, de diseñar una experiencia que dejara al paciente en un callejón sin salida. Mi maniobra en este punto fue ejecutar una delimitación técnica rigurosa: antes de abrir Miro para conectar pantallas, definí el origen y el destino de cada jornada. Pasé de la abstracción de las Personas —Carlos, Elena y Sofía— a la realidad física de los puntos de contacto digitales.

#### Mapeo de entradas: La puerta de acceso para la eficiencia y la calma

Para identificar los disparadores de cada tarea, realicé un análisis de los puntos de entrada multicanal. No podía asumir que todos los usuarios llegarían desde la página de inicio. Por ejemplo, para el flujo de **Encontrar un Médico**, identifiqué que Carlos —siempre apurado— utilizaría el buscador principal en la sección superior de la homepage. Para él, el punto de entrada debía incluir un sistema de autocompletado que procesara especialidades, departamentos o nombres de médicos en milisegundos. En cambio, para Elena, una paciente crónica que busca seguridad, el punto de entrada debía ser un botón prominente en el encabezado o una opción clara en la navegación utilitaria de "Agenda tu Cita".

Mapeé tres orígenes principales para los flujos críticos:
*   **La Homepage (centromedicoabc.com):** El punto de entrada universal, donde el buscador "Encuentra a tu médico" actúa como el motor de redirección principal.
*   **Navegación Utilitaria y Menú Principal:** Accesos directos para tareas transaccionales como "Consulta tus Resultados" o "Consejos de Salud".
*   **Accesos Profundos (Deep Links):** Enlaces provenientes de correos electrónicos de confirmación o CTAs específicos incrustados en páginas de servicios médicos.

Entender estos puntos de entrada me permitió anticipar la carga cognitiva del usuario. Si Carlos venía de un correo electrónico para completar su documentación de laboratorio, no podía enviarlo a la homepage para que buscara el enlace; el flujo debía depositarlo exactamente donde la tarea quedó pendiente. Esta precisión en el origen fue lo que permitió que, posteriormente, el diseño se sintiera fluido y no fragmentado.

#### El Punto de Salida: Más allá de la pantalla de confirmación

Definir el "Punto de Salida Exitoso" fue un ejercicio forense para evitar flujos inconclusos. En mi experiencia, un flujo no termina cuando el usuario hace clic en el último botón, sino cuando recibe el valor que buscaba. Para el flujo de **Agendar una Cita de Laboratorio**, determiné que el éxito no era simplemente mostrar un mensaje de "Cita Confirmada". El verdadero punto de salida incluía dos artefactos críticos: la recepción de un correo electrónico con los detalles y, fundamentalmente, el enlace para "llenar tus documentos desde casa".

Para el flujo de **Consulta de Resultados**, el objetivo final era la visualización o descarga del PDF. Si el usuario lograba ver el resultado pero no podía guardarlo para su médico externo, el flujo era un fracaso. Al establecer estos destinos de valor medible, blindé la experiencia:
*   **Para Médicos:** El éxito es el acceso al perfil detallado con el botón de "Agendar Cita" visible y funcional.
*   **Para Laboratorio:** La cita bloqueada en el calendario institucional y la documentación enviada al paciente.
*   **Para Información de Salud:** El consumo de contenido claro y la posibilidad de conectar con un médico relacionado al padecimiento consultado.

Esta disciplina me permitió asegurar que cada camino tuviera un cierre lógico. Si el usuario sentía que su tarea había concluido satisfactoriamente, la percepción de calidad del Centro Médico ABC se fortalecía. Si el flujo quedaba abierto, generaba ansiedad, algo inaceptable en un contexto de salud.

#### Gestionando el abandono: Los rombos de decisión y el manejo de errores

Siguiendo la metodología de diseño centrado en el usuario, no me limité al "Happy Path" o camino ideal. Dediqué una jornada completa a identificar los puntos de fricción donde el usuario podría perderse o abandonar. Estos se convirtieron en los rombos de decisión que luego diagramaría en Miro. 

Identifiqué escenarios de error específicos que debían ser gestionados proactivamente:
1.  **Búsqueda fallida:** ¿Qué pasa si Carlos escribe mal el nombre de un médico? En lugar de un mensaje seco de "No se encontraron resultados", definí que el sistema debía ofrecer sugerencias de ortografía o invitar a buscar por especialidad.
2.  **Fallo de autenticación:** En el flujo de **Consulta de Resultados**, el acceso al portal "Mi Salud ABC" es un punto crítico. Si la contraseña es incorrecta, el sistema no puede simplemente bloquear al usuario; debe ofrecer una ruta de recuperación inmediata para no interrumpir el acceso a información médica sensible.
3.  **Falta de disponibilidad:** Si Elena intenta agendar una cita y no hay horarios en el campus de Santa Fe, el flujo debe sugerir automáticamente el campus de Observatorio en lugar de obligarla a empezar el proceso desde cero.

Mi lógica fue clara: los errores no son callejones sin salida, sino oportunidades para ofrecer alternativas. Al mapear estos puntos de abandono antes de diseñar la interfaz, pude anticipar qué componentes de ayuda o mensajes de sistema serían necesarios para mantener al usuario dentro del ecosistema, reduciendo la tasa de rebote en pasos críticos.

#### Sincronización con la Arquitectura de Información (AI)

Finalmente, realicé un cruce de información entre estos límites de flujo y el mapa de sitio que había validado previamente. Como diseñador, tengo una obsesión con la integridad del sistema: cada pantalla mencionada en un flujo debe tener un lugar físico en la jerarquía de la AI. 

Verifiqué que el "Dashboard del Portal de Paciente" y la "Página de Resultados Unificada" estuvieran correctamente anclados en la navegación. En un par de ocasiones, descubrí que un flujo requería un paso intermedio —como una pantalla de pre-confirmación de datos— que no estaba contemplada en el mapa original. Mi deber fue ajustar la Arquitectura de Información de inmediato para que la navegación y el flujo de tareas hablaran el mismo idioma técnico. Esta coherencia es lo que evita que el usuario sienta que ha "saltado" a un sitio web diferente cuando entra a una zona transaccional.

> **Insight de Diseño:** En un ecosistema de salud, la fragmentación técnica es el enemigo invisible. Diseñar flujos unificados para `milaboratorio` y `misaludabc` —que en 2021 operaban como silos— me obligó a crear una capa de diseño que ocultara la complejidad del backend. El usuario no tiene por qué saber que sus resultados de imagen y laboratorio vienen de sistemas distintos; mi trabajo fue asegurar que, a nivel de flujo, la frontera fuera inexistente.

#### Próximo paso:

Con los perímetros definidos y los puntos de entrada y salida blindados, la estructura lógica estaba lista para ser volcada al lienzo. Sin embargo, al empezar a conectar los puntos en Miro, me di cuenta de que el flujo de agendamiento era mucho más denso de lo esperado: la cantidad de variables de negocio —campus, especialidades, tipos de seguro y disponibilidades en tiempo real— amenazaba con convertir un proceso simple en un formulario interminable. El desafío ahora era traducir esta lógica en una diagramación física que no solo fuera funcional, sino que redujera la carga cognitiva al mínimo absoluto.

#### Próximo paso:
DIAGRAMACIÓN DE FLUJOS TRANSACCIONALES CRÍTICOS

---

### Parte 3: Diagramación de Flujos Transaccionales Críticos

#### El lienzo de Miro como tablero de ajedrez lógico

Abrir un tablero de Miro en blanco después de haber definido la arquitectura de información se siente como estar frente a un mapa de carreteras antes de empezar a pavimentar. Tenía los destinos claros, pero el reto era trazar la ruta más corta y sin baches. No se trataba simplemente de conectar cajas; el verdadero desafío como **Product Designer** era maniobrar la densidad de variables que el Centro Médico ABC maneja: múltiples campus (Observatorio, Santa Fe), cientos de especialidades, diversos tipos de seguros y la disponibilidad de médicos en tiempo real. 

Mi razonamiento estratégico fue priorizar la reducción de la carga cognitiva. Si un paciente como Carlos, que siempre está corto de tiempo, tiene que pensar más de dos segundos en qué botón presionar, el flujo ha fallado. Necesitaba transformar esa arquitectura abstracta en una diagramación transaccional que permitiera visualizar el "camino del menor esfuerzo". Me propuse que cada flujo crítico no solo fuera funcional, sino que se sintiera como una conversación fluida, no como un interrogatorio burocrático.

#### Ingeniería del flujo: La búsqueda de precisión

El primer gran bloque que articulé fue el de **Encontrar un Médico y Ver su Perfil**. Este es el corazón de la conversión en el sitio. Comencé situando el punto de entrada en la Homepage, diseñando un buscador principal con una lógica de autocompletado agresiva. Mi decisión fue que el sistema debía anticiparse al usuario: si escribes "Cardio", el sistema ya debe sugerir especialidades, departamentos y nombres de médicos relacionados. 

En la diagramación física, tracé una bifurcación de decisiones crítica mediante un rombo: ¿Se encontraron resultados? 
*   **Si la respuesta es sí:** El sistema despliega una página de resultados donde cada "tarjeta de médico" fue diseñada para actuar como un filtro mental inmediato, mostrando foto, especialidad y campus sin necesidad de entrar al perfil. 
*   **Si la respuesta es no:** Blindé el flujo con un mensaje de error constructivo, sugiriendo términos alternativos o refinamiento de búsqueda para evitar que el usuario abandonara el sitio por frustración.

Este flujo culmina en el perfil detallado, un espacio que concebí como la "página de ventas" del médico, donde la información académica y las aseguradoras aceptadas preparan el terreno para el siguiente paso lógico: el botón de agendamiento.

#### Optimizando la transacción: Del laboratorio al consultorio

Al abordar el flujo de **Agendar una Cita para un Estudio de Laboratorio**, mi enfoque cambió de la exploración a la eficiencia pura. Este proceso ya existía en la plataforma pre-rediseño, pero estaba plagado de fricciones innecesarias. Lo reconstruí eliminando pasos redundantes y centrando la interacción en tres decisiones clave: tipo de estudio, campus y selección de horario en un calendario de disponibilidad real.

> **Insight de Diseño:** El valor real de un flujo transaccional no termina en el botón de "Confirmar". Al diseñar la salida de este flujo, integré un enlace estratégico para "llenar tus documentos desde casa". Esta pequeña maniobra de diseño no solo mejora la experiencia digital, sino que impacta directamente en la operación física del hospital, reduciendo los tiempos de espera en la recepción y permitiendo que el paciente llegue directamente a su estudio.

Sin embargo, el reto mayor fue el **Agendamiento con Médicos Especialistas**. En la plataforma anterior, este era el punto de dolor más agudo; era un proceso fragmentado que a menudo obligaba al usuario a salir del flujo principal. Mi trabajo aquí fue de sutura lógica: conecté el perfil del médico directamente con la transacción de reserva. Logré que la transición entre "consultar información" y "reservar espacio" fuera invisible. Eliminé los saltos bruscos entre sistemas, asegurando que el usuario sintiera que siempre estaba dentro del ecosistema del ABC, manteniendo la confianza durante todo el proceso de ingreso de datos personales.

#### El rigor de la notación y el Happy Path

Para que estos diagramas fueran útiles no solo para mí, sino también para los desarrolladores y stakeholders, apliqué una disciplina férrea en la notación estándar en Miro. Utilicé óvalos para marcar el inicio y el fin de cada sesión, rectángulos para las acciones del sistema y rombos para cada punto donde el usuario debía tomar una decisión. 

Mi prioridad absoluta fue el **Happy Path**. Diseñé cada recorrido pensando en que Carlos, el profesional ocupado, pudiera completar una cita en menos de tres minutos. Para lograrlo, realicé "pruebas de escritorio" constantes, recorriendo mentalmente cada clic e interacción para detectar pasos redundantes. Añadí anotaciones laterales en cada diagrama para documentar reglas de negocio —como la validación de seguros en tiempo real— y dependencias técnicas que sabía que el equipo de ingeniería agradecería meses después.

Al finalizar la diagramación de estos 4 a 6 flujos críticos, me di cuenta de algo fundamental: la consistencia visual no es solo estética, es funcional. Si el usuario aprende a usar el buscador de médicos, ya sabe cómo usar el de padecimientos. Aunque la unificación total de resultados médicos era un desafío técnico complejo debido a los sistemas heredados como Vue PACS, mi labor fue proyectar esa visión unificada en el Dashboard de "Mi Salud ABC". Diseñé el flujo aspiracional de consulta de resultados como si la integración ya fuera total, estableciendo el estándar de oro al que la plataforma debía aspirar.

#### Próximo paso:

Una vez que los caminos transaccionales quedaron blindados y la lógica de agendamiento fue validada internamente, me di cuenta de que había una pieza del rompecabezas que todavía se sentía aislada: la gestión de la información personal del paciente. Al revisar el flujo de "Consulta de Resultados", la fragmentación técnica de los sistemas de laboratorio e imagenología empezó a mostrar sus costuras, planteando una pregunta incómoda: ¿cómo podíamos ofrecer una experiencia unificada si los datos vivían en mundos distintos? El siguiente desafío era diseñar el tejido conectivo que transformaría una simple lista de documentos en un portal de salud verdaderamente integral.

#### Próximo paso:
FLUJOS DE INFORMACIÓN Y VISIÓN UNIFICADA

---

### Parte 4: Flujos de Información y Visión Unificada

#### El tejido conectivo entre la transacción y la información

Al cerrar los flujos de agendamiento, me di cuenta de que estábamos resolviendo solo la mitad de la batalla. Agendar una cita es un éxito operativo, pero el verdadero valor para el paciente —y el punto donde la plataforma solía romperse— ocurría después de la consulta. Me enfrenté entonces a un problema de fragmentación histórica: los datos médicos del Centro Médico ABC vivían en silos aislados. Teníamos `milaboratorio.abchospital.com` para una cosa y `misaludabc.abchospital.com` para otra, esta última arrastrando las limitaciones técnicas de sistemas como Vue PACS para la visualización de imágenes.

Mi razonamiento como diseñador fue que la utilidad de la plataforma no podía terminar en la confirmación de una cita; debía extenderse al empoderamiento del paciente a través de sus datos. Entendí que necesitaba diseñar un "tejido conectivo" que unificara estas experiencias bajo una sola interfaz coherente. No era solo un reto estético, era un reto de ingeniería de interacción: ¿cómo podíamos hacer que Elena, nuestra paciente crónica, dejara de saltar entre dominios y encontrara su historial en un solo lugar? Este fue el punto de partida para diseñar la visión unificada del portal.

#### La arquitectura del flujo de resultados unificados

Para abordar la consulta de resultados, tracé un camino que denominé "Visión Unificada Aspiracional". Sabía que la integración técnica total era un desafío de backend monumental, pero mi labor era marcar el norte estratégico de la experiencia. El punto de entrada lo definí desde la navegación utilitaria de la web pública bajo el CTA "Consulta tus Resultados".

El flujo que diagramé seguía una lógica de seguridad estricta pero fluida:
*   **Autenticación Mandatoria:** El sistema no permitía atajos; cualquier intento de acceso redirigía a un muro de login. Diseñé este punto de decisión (un rombo en mi tablero de Miro) para manejar no solo el éxito, sino el error de credenciales y la recuperación de contraseña, que suele ser el mayor punto de abandono.
*   **El Dashboard como Hub:** Una vez validado el usuario, el sistema no lo lanzaba a una lista ciega, sino a un Dashboard personalizado de "Mi Salud ABC". Aquí, la intención era dar contexto: próximas citas, alertas de nuevos resultados y accesos directos.
*   **Lista Cronológica Integrada:** Este fue el corazón de la propuesta. Diseñé una pantalla donde los resultados de laboratorio e imagenología coexistían en una sola lista cronológica. Implementé filtros por fecha y tipo de estudio para reducir la carga cognitiva de pacientes como Elena, que manejan decenas de documentos al año.

> **Decisión Senior:** Aunque sabía que los sistemas de imagenología (Vue PACS) tenían sus propios visores, propuse una capa de interfaz intermedia que permitiera al menos la visualización de los reportes en PDF y el estado del estudio antes de saltar al visor técnico. Sacrifiqué la profundidad técnica inmediata en favor de la claridad informativa.

#### Reducción de fricción administrativa: El flujo de pagos

Un requisito que clasifiqué como "Must-have" en mi análisis MoSCoW fue la gestión de facturación. Reducir la fricción administrativa no solo es una cortesía para el usuario, es una pieza clave de la eficiencia operativa del hospital. Diseñé el flujo de "Pagar Factura en Línea" con una premisa de invisibilidad: el usuario no debería sentir que está realizando un trámite burocrático.

El acceso lo mapeé de forma dual: desde el área privada del paciente para facturas recurrentes, y mediante un enlace de facturación directa para usuarios que solo necesitaban resolver un pago puntual sin loguearse. En Miro, utilicé rectángulos para definir las acciones de selección de facturas pendientes y la transición crítica hacia la pasarela de pago segura. Mi enfoque aquí fue blindar la confianza: cada paso del sistema debía confirmar que la transacción era segura y que el comprobante se generaría de forma inmediata, eliminando la incertidumbre de si el pago se había procesado correctamente.

#### El camino de la Cuidadora Informada: Búsqueda y Conversión

Para Sofía, nuestra persona que actúa como cuidadora, la plataforma debía ser una fuente de verdad. El flujo de "Buscar Información sobre Padecimiento o Servicio" fue diseñado para transformar la curiosidad en acción. No quería que el usuario simplemente leyera un artículo y se fuera; quería que encontrara una solución.

Diagramé dos puntos de entrada principales:
1.  **Buscador General con Autocompletado:** Situado en la homepage, donde el sistema sugiere términos médicos mientras el usuario escribe, reduciendo el error por ortografía técnica compleja.
2.  **Navegación por Categorías:** En la sección "Consejos de Salud", organizando el contenido por especialidades como Cardiología u Oncología.

El consumo de contenido lo diseñé como una experiencia multimedia. Integré artículos técnicos con elementos de YouTube Health para facilitar la comprensión. Sin embargo, el movimiento estratégico real fue la inclusión de enlaces directos a perfiles de médicos especialistas relacionados con el padecimiento consultado. Si Sofía estaba leyendo sobre diabetes infantil, el flujo la llevaba naturalmente a los perfiles de los endocrinólogos pediatras del ABC. De esta forma, convertí un flujo informativo en uno transaccional de agendamiento de forma orgánica.

#### El muro de seguridad y la persistencia de datos

Mapear el acceso a datos sensibles me obligó a ser obsesivo con la lógica de los estados de error. En salud, un error de acceso no es solo una molestia, es una barrera que genera ansiedad. Detallé el flujo de login incluyendo el manejo de bloqueos de cuenta y la persistencia de la sesión. 

Mi objetivo técnico era asegurar que, una vez que el paciente cruzaba el muro de seguridad, la transición hacia el Dashboard personalizado fuera imperceptible. El sistema debía mantener la persistencia de los datos del paciente durante toda la navegación privada, asegurando que si el usuario saltaba de ver un resultado de laboratorio a agendar una cita de seguimiento, sus datos básicos ya estuvieran precargados. La confianza se construye con una gestión impecable de la privacidad y la fluidez técnica.

#### Validación mediante el "Desk Check"

Una vez que tuve los 6 flujos críticos diagramados en Miro —usando óvalos para los inicios, rombos para las decisiones y rectángulos para las acciones del sistema— realicé lo que llamo una "Prueba de Escritorio" (Desk Check). Caminé mentalmente a través de cada flujo poniéndome en los zapatos de Carlos, Elena y Sofía. 

Me pregunté constantemente: "¿Qué información necesita Elena en este segundo exacto?", "¿Cómo sabe Carlos que su pago fue exitoso?". Esta validación informal me permitió simplificar pasos redundantes, como un clic extra que habíamos incluido inicialmente en la selección de campus para laboratorio. Al final, estos diagramas no eran solo dibujos; eran las especificaciones lógicas que servirían de guía para el equipo de desarrollo y los stakeholders. Estábamos diseñando la inteligencia detrás de la interfaz, asegurando que cada camino fuera el más corto y lógico posible hacia la salud del paciente.

#### Próximo paso:

Al finalizar esta ingeniería de flujos, me quedé observando el mapa completo en Miro y sentí una satisfacción cautelosa. Teníamos la lógica, los puntos de decisión y los caminos críticos blindados, pero al ver la complejidad de las ramificaciones, surgió una duda inquietante: ¿cómo íbamos a mantener la coherencia visual y de interacción en pantallas tan distintas como un resultado de laboratorio y un buscador de médicos? Me di cuenta de que si no establecíamos reglas de diseño transversales ahora, corríamos el riesgo de que la plataforma se sintiera como un collage de funciones en lugar de un producto unificado. El siguiente reto era someter toda esta lógica a un proceso de refinamiento y consistencia antes de tocar el primer pixel de los wireframes.

#### Próximo paso:
REVISIÓN DE CONSISTENCIA Y REFINAMIENTO LÓGICO

---

### Parte 5: Revisión de Consistencia y Refinamiento Lógico

#### La auditoría forense de la red de conexiones

Al alejarme del tablero de Miro tras la primera iteración masiva de diagramas, me encontré con una red de conexiones que, aunque funcionalmente correcta, se sentía excesivamente densa. Tenía ante mí los 6 flujos críticos que habíamos priorizado bajo el modelo MoSCoW, pero verlos todos juntos reveló una verdad incómoda: la lógica individual de cada flujo estaba blindada, pero la experiencia sistémica aún se sentía fragmentada. Como diseñador, sé que no basta con que un usuario llegue del punto A al punto B; el trayecto debe ser elegante, predecible y, sobre todo, despojado de cualquier fricción innecesaria.

Inicié entonces una **revisión forense de la lógica de interacción**. Mi razonamiento en este punto fue puramente estratégico: antes de comprometer un solo minuto de trabajo en la fase de wireframing detallado o alta fidelidad, debía asegurar que los cimientos lógicos fueran impecables. No podíamos permitirnos el lujo de arrastrar ineficiencias estructurales a las etapas visuales, donde los cambios son mucho más costosos. Me propuse pasar de la "cantidad de flujos" a la "calidad de la arquitectura del movimiento".

#### El Desk Check: Caminando en los zapatos de Elena y Carlos

Para validar esta lógica, apliqué una técnica de **"Prueba de Escritorio" (Desk Check)**. No fue un ejercicio pasivo; fue una inmersión deliberada en los contextos de uso de nuestras Personas. Me obligué a "caminar" mentalmente por cada nodo del diagrama, simulando no solo el clic, sino la intención y el estado emocional detrás de él.

Comencé con **Elena, nuestra paciente crónica**. Me enfoqué en el flujo de "Consultar Resultados Unificados". En la primera versión, el sistema obligaba a Elena a pasar por tres pantallas de filtrado antes de llegar a su estudio de laboratorio más reciente. Al realizar el recorrido mental, detecté que esta estructura le imponía una carga cognitiva injustificada en un momento de posible ansiedad. ¿Por qué pedirle que elija el campus o el tipo de estudio si lo que el 90% de los usuarios busca es el resultado más reciente? Gracias a esta autocrítica, reorganicé el flujo para que el punto de entrada al portal mostrara directamente los resultados pendientes o recientes, eliminando pasos burocráticos y transformando el diseño en una herramienta de alivio, no en un obstáculo.

Con **Carlos, el profesional ocupado**, el reto era la velocidad. Analicé el flujo de "Agendar Cita de Laboratorio". En la iteración inicial, el proceso de selección de fecha y hora estaba enterrado tras la selección de campus. Al simular su ritmo de vida, me di cuenta de que para Carlos la disponibilidad de tiempo es más crítica que la ubicación geográfica. Refiné el flujo para permitir una búsqueda transversal: "Dime cuándo puedes y yo te diré en qué campus hay espacio". Este ajuste en los puntos de decisión fue vital para asegurar que la plataforma se adaptara al usuario y no al revés.

#### La poda lógica: Eliminando la grasa del proceso

Basándome en esta autocrítica, inicié un proceso de **poda de pasos redundantes**. Utilicé una notación estándar en Miro para identificar visualmente dónde se acumulaba la fricción:

*   **Óvalos y Rectángulos Redondeados:** Puntos de inicio y fin que debían ser inconfundibles.
*   **Rectángulos:** Acciones del sistema o pantallas.
*   **Rombos:** Puntos de decisión donde el usuario elige su camino.
*   **Flechas:** La dirección del flujo, que debía ser siempre progresiva.

Al auditar el flujo de "Encontrar un Médico", descubrí que habíamos incluido una pantalla de confirmación intermedia después de seleccionar una especialidad, pero antes de mostrar los resultados. Era un paso heredado de procesos operativos internos del hospital que no aportaban valor al paciente. Eliminé ese nodo por completo, consolidando la lógica para que el sistema saltara directamente de la selección al listado de médicos. Mi objetivo era el **"Happy Path" optimizado**: el camino más corto, lógico y satisfactorio hacia el éxito del usuario. Cada clic eliminado era una victoria en términos de tasa de conversión y satisfacción percibida.

#### La gramática de la interacción: Consistencia en los patrones

Un sistema de diseño senior se sostiene sobre la predictibilidad. Para garantizarla, comparé los 6 flujos críticos entre sí, buscando discrepancias en patrones de interacción similares. Me di cuenta, por ejemplo, de que el selector de fecha en el flujo de "Agendar Cita" se comportaba de forma distinta al filtro de fecha en "Consultar Resultados". 

Articulé una regla de consistencia inmediata: cualquier proceso de selección temporal o filtrado de datos debía seguir la misma lógica secuencial. Si Elena aprendía a filtrar sus estudios de imagenología por fecha, ese conocimiento debía serle útil instantáneamente cuando buscara una cita con un cardiólogo. Esta unificación de la gramática visual y funcional no solo reduce la curva de aprendizaje, sino que blinda el producto contra la fragmentación que tanto daño le había hecho a la plataforma pre-rediseño.

#### El diseño del "No": Refinando nodos de decisión y errores

Uno de los puntos donde más tiempo invertí fue en el refinamiento de los **rombos de decisión**. Es fácil diseñar para cuando todo sale bien, pero el criterio senior se demuestra en cómo manejamos los escenarios de error o los "caminos tristes".

Analicé qué sucedía cuando el sistema devolvía un "No" (por ejemplo, "No se encontraron médicos" o "Autenticación fallida"). En lugar de dejar al usuario en un callejón sin salida, diseñé salidas de error constructivas. Si Carlos buscaba un médico por nombre y no había resultados, el flujo no terminaba ahí; el sistema ahora sugería buscar por especialidad o verificaba automáticamente si había errores tipográficos. Transformé los puntos de frustración potencial en oportunidades de asistencia, asegurando que el usuario siempre tuviera un siguiente paso claro, sin importar el resultado de su búsqueda.

#### Triangulación final con la Arquitectura de Información

Para cerrar este ciclo de refinamiento, realicé una triangulación final entre los flujos y el mapa de sitio que habíamos definido en la actividad anterior. Verifiqué que cada "rectángulo" de mis diagramas de Miro —es decir, cada pantalla necesaria para completar la tarea— tuviera un lugar lógico y una jerarquía correspondiente en la Arquitectura de Información (AI).

Este ejercicio reveló un vacío crítico: al detallar el flujo de "Pago de Factura", me percaté de que no habíamos contemplado una pantalla de "Historial de Pagos" en la navegación principal del portal. Inmediatamente retrocedí a la AI y ajusté la estructura para incluir este nodo. Esta sincronización constante entre el flujo (el movimiento) y la arquitectura (el espacio) es lo que garantiza que el ecosistema digital sea estructuralmente sólido antes de entrar a la fase de producción visual.

> **Reflexión Estratégica:** Al diseñar el flujo "unificado" de resultados, fui plenamente consciente de que estaba trazando una visión aspiracional. En ese momento, en 2021, sabía que la fragmentación técnica entre sistemas como `milaboratorio` y `misaludabc` (enfocado en radiología) representaba una barrera de implementación masiva. Sin embargo, mi responsabilidad como diseñador era marcar el norte estratégico: el paciente no debe entender de silos tecnológicos; el paciente solo quiere saber si está sano. Diagramar esta unificación fue un acto de defensa del usuario, estableciendo un estándar de experiencia que obligaría a la tecnología a evolucionar hacia la simplicidad.

#### Próximo paso:

Con la lógica de los flujos blindada y cada nodo de decisión validado mentalmente, me sentí listo para dar el siguiente paso. Sin embargo, sabía que estos diagramas en Miro, por muy precisos que fueran, seguían siendo una herramienta interna. El desafío ahora era transformar toda esta ingeniería de interacción en un paquete de documentación final que fuera indiscutible para los stakeholders y ejecutable para el equipo de desarrollo. Necesitaba elevar estos flujos a una validación estratégica definitiva, donde las reglas de negocio y las posibilidades técnicas se encontraran cara a cara con mi propuesta de diseño.

#### Próximo paso:
DOCUMENTACIÓN FINAL Y VALIDACIÓN ESTRATÉGICA

---

### Parte 6: Documentación Final y Validación Estratégica

#### De la lógica visual a la especificación técnica

Al terminar de trazar los recorridos lógicos en Miro, me detuve a observar el lienzo. Tenía ante mí una red compleja de rectángulos, rombos y flechas que conectaban la intención del usuario con la respuesta del sistema. Sin embargo, sabía por experiencia que un diagrama de flujo, por muy elegante que sea visualmente, es un artefacto peligroso si carece de **especificaciones técnicas**. Si entregaba esos esquemas tal cual, dejaba la puerta abierta a interpretaciones libres por parte del equipo de desarrollo o, peor aún, a que las reglas de negocio del Centro Médico ABC se perdieran en la traducción.

Mi razonamiento en este punto fue puramente preventivo. No estaba diseñando solo para el paciente; estaba diseñando para el ingeniero que, meses después, tendría que programar la lógica de búsqueda o el sistema de autenticación. Necesitaba elevar estos flujos a un nivel de **blindaje técnico** donde no hubiera espacio para la ambigüedad. Mi objetivo era transformar esos dibujos en un "contrato de interacción" indiscutible. Cada punto de decisión debía tener una respuesta definida, y cada pantalla debía declarar qué datos necesitaba procesar para ser funcional.

#### El rigor de la anotación: Miro como base de datos de interacción

Inicié el proceso de **anotación técnica** (Paso 5.5) tratando el lienzo de Miro no como un dibujo, sino como una base de datos de hallazgos y reglas. Me enfoqué en añadir una capa de metadatos a cada nodo de decisión, especialmente en los flujos más sensibles como "Encontrar un Médico".

Para este flujo, no me limité a indicar que el usuario buscaba un nombre. Detallé la lógica detrás del buscador, especificando que el sistema debía permitir consultas cruzadas por **especialidad, departamento, campus o padecimiento**. Esta no fue una decisión estética, sino una respuesta a la necesidad de "Carlos, el Profesional Ocupado", quien no siempre tiene el nombre del médico, pero sabe exactamente qué le duele o a qué campus puede asistir por cercanía.

*   **Lógica de No-Resultados:** Definí que, en caso de que la búsqueda fuera infructuosa, el sistema no podía simplemente mostrar una pantalla vacía. Anoté la regla de negocio: el sistema debe sugerir términos relacionados, verificar ortografía o invitar a buscar por especialidad.
*   **Dependencias de Datos:** Para el perfil del médico, listé los campos obligatorios que el sistema debía traer del backend: biografía, formación académica, aseguradoras con las que trabaja y, crucialmente, el botón de **"Agendar Cita"** vinculado a su disponibilidad real.

Esta fase de anotación fue extenuante pero vital. Me aseguré de que cada rombo de decisión (los famosos *if/else*) tuviera sus salidas claramente marcadas. Si el usuario no estaba autenticado al intentar ver sus resultados, el flujo debía desviarlo obligatoriamente a la pantalla de inicio de sesión, con un retorno automático al punto donde se quedó tras el éxito de la validación.

#### La "Prueba de Escritorio": Caminar el flujo antes de construirlo

Con las anotaciones listas, realicé lo que llamo un **Desk Check** o "Prueba de Escritorio" (Paso 5.6). Este es un ritual de honestidad brutal donde me obligo a "caminar" cada flujo como si fuera un usuario real, sin el sesgo de quien lo diseñó.

Me puse en los zapatos de "Elena, la Paciente Crónica", intentando agendar una cita de laboratorio. Inicié desde la Homepage y seguí el rastro:
1.  **Punto de entrada:** El botón prominente de "Agenda tu Cita".
2.  **Selección:** Elegir "Laboratorio" entre las opciones de Radiología o Vacunas.
3.  **Configuración:** Seleccionar el campus (Observatorio o Santa Fe) y buscar un hueco en el calendario.

Durante esta simulación mental, detecté un punto de fricción: el flujo era demasiado lineal y no advertía al usuario sobre la preparación previa. Gracias a este ejercicio, inserté un paso de **"Confirmación y Detalles Adicionales"** que incluía un enlace para llenar documentos desde casa. Mi razonamiento fue que, si Elena llegaba al hospital sin sus papeles listos, el flujo digital habría fallado en su misión de optimizar la experiencia física. Validé que la transición entre la selección del campus y la visualización de horarios fuera instantánea; cualquier retraso en esa carga de datos rompería la confianza del usuario en la plataforma.

#### El choque con la realidad operativa: Validación con el Product Owner

Una vez que los flujos sobrevivieron a mi propia autocrítica, llegó el momento de la verdad: la sesión de **validación estratégica** con el Product Owner del Centro Médico ABC. Esta no fue una presentación de "mira qué bien se ve", sino una sesión de ingeniería de procesos.

El punto más álgido de la reunión fue el **Flujo 3: Consultar Resultados (Visión Unificada)**. Presenté una propuesta donde el paciente podía ver laboratorio e imagenología en un solo dashboard cronológico. Sabía que esto era un **objetivo aspiracional** en 2021, dada la fragmentación técnica entre `milaboratorio` y `misaludabc` (que operaba bajo un sistema MyVue PACS independiente).

> **Trade-off estratégico:** Durante la sesión, reconocimos que la unificación total enfrentaba barreras de backend masivas. Sin embargo, defendí mantener el flujo unificado en la documentación de diseño. Mi argumento fue que, si diseñábamos para los silos tecnológicos actuales, estaríamos condenando la experiencia del usuario a la mediocridad técnica para siempre. Al documentar el flujo ideal, establecimos el estándar que los sistemas de TI debían alcanzar tarde o temprano. Aceptamos que, en la primera implementación, el flujo podría tener un "puente" de autenticación extra, pero la navegación debía sentirse como una sola entidad.

#### El contrato de interacción: Consolidación del plano maestro

El resultado final de esta actividad fue la consolidación de los **Flujos de Usuario Detallados**, un documento que se convirtió en la biblia para la siguiente fase de Wireframing. Organicé el trabajo en cuatro pilares fundamentales que cubrían el 80% de las interacciones críticas:

*   **Búsqueda y Perfil Médico:** Optimizado para la conversión hacia el agendamiento.
*   **Agendamiento de Laboratorio:** Un flujo transaccional de seis pasos diseñado para la eficiencia, con avisos preventivos sobre documentación.
*   **Portal de Paciente (Unificado):** Una hoja de ruta para la gestión de salud personal, con dashboards y filtros por fecha o tipo de estudio.
*   **Información de Salud:** Un flujo de consumo de contenido que integraba el buscador general con artículos especializados y videos de YouTube Health.

Este documento no era un simple resumen; era una especificación técnica que definía qué pantallas debían existir, qué estados de error debíamos diseñar y qué lógica de negocio debía implementarse. Al cerrar esta fase, sentí que habíamos pasado de la estrategia abstracta a la ingeniería concreta. Teníamos un mapa de navegación blindado, validado por negocio y listo para ser transformado en interfaces tangibles.

**Reflexión final:**
Mirando hacia atrás, el diseño de estos flujos en 2021 fue el acto de mayor responsabilidad estratégica de todo el proyecto. Al forzar la discusión sobre la unificación de resultados y la simplificación del agendamiento, no solo estábamos dibujando pantallas, sino que estábamos redefiniendo los procesos operativos del Centro Médico ABC a través de la tecnología. Aprendí que un Product Designer debe ser capaz de sostener una visión aspiracional frente a las restricciones técnicas inmediatas, porque si nosotros no defendemos el "cómo debería ser", nadie más lo hará. Estos flujos fueron la semilla de la plataforma integrada que los pacientes utilizan hoy, demostrando que un buen diagrama es, ante todo, un compromiso con la simplicidad.

---

