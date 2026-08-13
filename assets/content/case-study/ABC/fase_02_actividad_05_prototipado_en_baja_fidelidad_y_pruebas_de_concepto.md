# Fase 2: Ideación y Diseño Conceptual

## Actividad 05: Prototipado en Baja Fidelidad y Pruebas de Concepto

> Esta actividad representa el cierre crítico de la Fase 2, donde los conceptos abstractos y los wireframes estáticos se transforman en un artefacto interactivo para ser sometidos a la validación empírica con usuarios reales. El proceso abarca desde la construcción técnica del prototipo en Figma (conectando flujos de búsqueda de médicos, agendamiento y portal de paciente) hasta la ejecución de pruebas de usabilidad moderadas. El objetivo final es detectar fricciones estructurales, validar la arquitectura de información y asegurar que el 'esqueleto' digital sea intuitivo antes de escalar al diseño de alta fidelidad (UI). Se documenta un análisis forense de hallazgos, categorizando problemas por severidad y traduciéndolos en iteraciones de diseño inmediatas.

### Parte 1: Materialización del Esqueleto Construcción del Prototipo Navegable

#### La transición del esquema estático a la lógica de flujo

Tenía frente a mí decenas de wireframes digitales, esqueletos perfectamente alineados en Figma que definían la estructura de la nueva plataforma del Centro Médico ABC. Visualmente, la jerarquía funcionaba: el buscador de médicos era prominente, los accesos a servicios estaban donde debían y el Portal del Paciente finalmente tenía un lugar propio. Sin embargo, como diseñador, sabía que una pantalla estática es solo una promesa de solución, no la solución en sí misma. El verdadero riesgo no estaba en cómo se veía cada página individual, sino en lo que ocurría en el espacio en blanco entre ellas. Sabía que si no dotaba de vida a esos esquemas mediante un prototipo navegable, corría el riesgo de avanzar hacia la alta fidelidad arrastrando fricciones cognitivas que solo se manifiestan cuando el usuario intenta "moverse" por el sistema.

Decidí frenar cualquier impulso de empezar con el diseño visual o la selección de paletas cromáticas. Mi prioridad absoluta fue la construcción de un artefacto de validación dinámica. El razonamiento era puramente estratégico: necesitaba mitigar riesgos de usabilidad en el "esqueleto" antes de comprometer horas de diseño de interfaz (UI) o recursos de desarrollo. Un error en la arquitectura de información detectado ahora costaría minutos de reacomodo en los wireframes; detectarlo después del despliegue visual o técnico costaría semanas. Me propuse transformar esos archivos de Figma en una herramienta de diagnóstico forense, donde la ausencia de color y tipografía decorativa no fuera una limitación, sino un filtro para asegurar que la lógica de navegación fuera lo suficientemente robusta como para sostenerse por sí sola.

#### Priorización quirúrgica: Los cuatro pilares de la validación

No cometí el error de principiante de intentar prototipar cada rincón del mapa de sitio. En un ecosistema tan complejo como el de un centro médico, el ruido puede sepultar la señal. Me enfoqué exclusivamente en los flujos que representaban el núcleo del negocio y los puntos de mayor fricción histórica para el paciente. Seleccioné cuatro rutas críticas que debían ser impecables para que el rediseño se considerara un éxito.

El primer flujo fue la búsqueda de médicos y la visualización de perfiles. Era vital resolver la fragmentación que sufría el sitio anterior. Diseñé la ruta que permitía a un usuario partir desde la Homepage, usar el buscador global con el placeholder específico que incluí —"Buscar por especialidad, departamento, padecimiento o procedimiento"— y llegar a una página de resultados con filtros funcionales. El segundo pilar fue el agendamiento de laboratorio y radiología, un proceso que históricamente generaba ansiedad. Necesitaba validar si el flujo multi-paso que había estructurado reducía esa carga mental.

Los otros dos flujos se centraron en la retención y la información especializada. El acceso al "Portal Paciente ABC" fue el tercer foco; aunque el contenido interno fuera conceptual, la navegación para llegar a él y entender su propósito como centro de autoservicio era innegociable. Finalmente, incluí la ruta hacia servicios especializados como Maternidad o el Centro Cardiovascular. Mi objetivo no era validar el contenido médico, sino la capacidad del usuario para encontrar información profunda sin perderse en la estructura jerárquica del sitio.

#### Arquitectura del cableado: Figma como laboratorio de flujos

Con los flujos definidos, inicié el proceso de "cableado" digital en Figma. No fue un trabajo mecánico, sino una auditoría de interactividad. Comencé configurando el Header superior como un componente fijo en todas las pantallas. Este ancla era fundamental: el logo del Centro Médico ABC a la izquierda debía funcionar siempre como el botón de "reset" hacia la Home, mientras que la navegación utilitaria en el extremo superior derecho (Agenda tu Cita, Resultados, Contacto) debía estar disponible en cada milímetro de scroll.

Utilicé la funcionalidad de prototipado de Figma para crear *hotspots* o áreas clicables precisas. En la Homepage, vinculé el botón principal de "Buscar un médico" directamente con la página de resultados. En los perfiles de los doctores, me aseguré de que el botón de "Agendar Cita", que diseñé como un elemento prominente en la sección superior, disparara el inicio del flujo de reserva. Fue en este momento cuando empecé a notar pequeñas inconsistencias: ¿qué pasaba si el usuario hacía clic en un filtro y no había resultados? Tuve que crear estados lógicos para esos wireframes, asegurando que el prototipo no fuera un callejón sin salida, sino un reflejo fiel de la navegación real.

> **Insight de Diseño:** El prototipo de baja fidelidad no es una maqueta simplificada; es una simulación de la carga cognitiva. Si un usuario se pierde entre cajas grises, se perderá entre imágenes de alta resolución. La falta de estética obliga a la arquitectura a hablar por sí misma.

#### La disciplina de la baja fidelidad: Por qué omití la estética

Mantuve una disciplina férrea respecto a la fidelidad del prototipo. Opté por transiciones simples de "clic" para pasar de una pantalla a otra, rechazando cualquier animación compleja, *smart animate* o microinteracción que pudiera distraer al usuario. En esta fase, el movimiento no debía ser "bonito", debía ser lógico. Mi decisión de mantener el prototipo en una escala de grises absoluta, utilizando solo los wireframes digitales que había construido, fue deliberada: quería que el feedback del usuario se centrara en "no encuentro dónde hacer clic" o "no entiendo qué significa esta etiqueta", y no en "no me gusta ese tono de azul".

Incluso en los formularios, apliqué una simplificación funcional. En la pantalla de "Datos del Paciente", que es el cuarto paso del flujo de agendamiento, no obligué al prototipo a validar entradas de texto reales. Configuré el botón de "Siguiente" para que avanzara asumiendo que el llenado era correcto. Este trade-off fue necesario para mantener la fluidez de las futuras pruebas de concepto; lo que me interesaba validar era si el usuario entendía que estaba en el paso 4 de 6 gracias a la barra de progreso que diseñé, y no si sabía escribir su correo electrónico en un campo de texto.

#### Anatomía del flujo de agendamiento: Los seis pasos críticos

El flujo de agendamiento fue el componente más complejo de cablear. Lo estructuré en seis pantallas consecutivas para garantizar que ninguna tuviera una carga de información excesiva. Comencé con la Selección de Tipo de Cita, donde el usuario debía elegir entre especialista, laboratorio o radiología. Desde ahí, el prototipo guiaba al usuario a la selección del médico o estudio específico, luego a un calendario interactivo para fecha y hora, y finalmente al formulario de datos.

Presté especial atención a la Pantalla 5: el Resumen y Confirmación. En los wireframes, este bloque debía mostrar de forma transparente el médico, el campus y el horario elegido. En el prototipo, me aseguré de que el botón de "Confirmar Cita" fuera el punto culminante de la interacción, llevando al usuario a una Página de Éxito con un número de folio ficticio e instrucciones claras. Esta secuencia lineal era mi hipótesis principal para resolver la frustración histórica de los pacientes; el prototipo debía demostrar si esta estructura de "paso a paso" realmente eliminaba la sensación de agobio que producía el sistema anterior.

#### El Dashboard del Portal y la navegación lateral

Para el "Portal Paciente ABC", diseñé una estructura de navegación lateral (sidebar) que rompía con la navegación global del sitio público. En el prototipo, quería probar si los usuarios entendían este cambio de contexto. El Dashboard mostraba tarjetas de "Próximas Citas" y "Últimos Resultados" con botones de acceso directo. Configuré los enlaces de la barra lateral —Mis Citas, Mis Resultados, Mi Historial— para que, aunque no tuvieran contenido real detallado, permitieran al usuario navegar entre las secciones principales del portal.

Esta decisión de diseño buscaba validar el concepto de un área personal unificada. Al conectar estos wireframes, pude simular la experiencia de un paciente que entra a revisar sus análisis de laboratorio después de haber agendado su cita. La coherencia entre el flujo de agendamiento y el acceso a resultados era el "pegamento" que debía unir toda la experiencia digital del Centro Médico ABC. Si el usuario lograba saltar del sitio público al portal privado sin sentir que había salido del hospital, habríamos ganado la batalla de la fragmentación.

#### Blindaje interno: QA y el camino hacia la validación real

Antes de siquiera considerar invitar a un usuario, realicé un proceso de QA (Quality Assurance) exhaustivo y solitario. Navegué por el prototipo cientos de veces, buscando enlaces rotos, *hotspots* mal ubicados o inconsistencias en los breadcrumbs de las páginas de artículos de salud. Verifiqué que el flujo desde la sección de "Noticias ABC" permitiera regresar a la categoría correspondiente y que los CTAs de "Agendar Cita" estuvieran presentes incluso en las páginas de los Centros de Alta Especialidad, como el Cardiovascular.

Este protocolo de "pruebas de humo" internas fue vital para asegurar que, durante las sesiones con usuarios, el prototipo no fuera el problema. Quería que la herramienta fuera invisible para que el comportamiento del paciente fuera el protagonista. Al terminar, el artefacto era un sistema cerrado y coherente: un esqueleto monocromático pero funcional que representaba fielmente la futura plataforma. Estaba listo para ser sometido al juicio de la realidad, sabiendo que cada clic fallido en esta etapa sería una lección valiosa y no un error costoso en producción.


El prototipo se sentía sólido en mis manos, pero esa es la trampa más común del diseño: la ilusión de la perfección en el vacío. Tenía el "qué" y el "cómo", pero me faltaba el "quién" y, sobre todo, el "por qué". La tensión ahora residía en preparar el escenario para que personas reales, con problemas de salud reales y poco tiempo, intentaran navegar este laberinto de cajas grises sin mi ayuda. Sabía que el siguiente desafío no era técnico, sino metodológico: debía diseñar un experimento tan riguroso que no dejara espacio para las suposiciones, transformando mis hipótesis de diseño en preguntas quirúrgicas que los usuarios responderían, quizás, de la manera que menos esperaba.

---

### Parte 2: El Diseño del Experimento Planificación y Escenarios de Prueba

#### De la construcción técnica a la arquitectura del experimento

El prototipo en Figma estaba terminado, pero en ese momento era un artefacto mudo. Tenía las conexiones, los *hotspots* funcionaban y el flujo de pantallas respetaba la arquitectura que habíamos trazado, pero seguía siendo una proyección de mis propias suposiciones. Como diseñador, sé que el peligro más grande después de una fase intensa de construcción es el sesgo de complacencia: creer que, porque el sistema es lógico para mí, lo será para un paciente en medio de una urgencia o una consulta rutinaria.

En ese momento, detuve la inercia del "hacer" para entrar en la fase del "planificar". Entendí que el prototipo no era el producto, sino un instrumento de validación científica. Si no diseñaba un experimento riguroso, las pruebas de usabilidad se convertirían en simples charlas de café con feedback anecdótico. Necesitaba transformar esos wireframes en un escenario de estrés controlado donde el usuario no viniera a "ver una maqueta", sino a resolver un problema de salud real. Mi razonamiento fue claro: cada clic que un usuario no diera o cada duda que verbalizara en esta etapa de baja fidelidad nos ahorraría semanas de rediseño y miles de pesos en desarrollo posterior. Articulé esta transición mental moviéndome del rol de arquitecto al de investigador, donde mi único objetivo era intentar que el usuario "rompiera" mi propuesta estructural.

#### La definición de objetivos: preguntas quirúrgicas para el esqueleto digital

No quería una validación genérica. Me senté a definir objetivos quirúrgicos que atacaran directamente las dudas que el equipo y los stakeholders tenían sobre la nueva estructura. Sabía que si no medíamos con precisión, los hallazgos serían borrosos. Estructuré la investigación bajo tres pilares fundamentales que extraje de las fricciones detectadas en la fase de investigación inicial.

Primero, la **Comprensión de la Arquitectura de Información (AI)**. Necesitaba saber si la organización jerárquica que propuse —con secciones como "Centros de Especialidad" y "Mi Portal Paciente ABC"— era intuitiva. La pregunta de fondo era: ¿Entiende el usuario dónde está parado y hacia dónde puede ir sin necesidad de un buscador? No buscaba que navegaran el 100% del sitio, sino que el mapa mental del paciente coincidiera con el mapa digital que yo había construido.

Segundo, la **Claridad y Eficiencia de los Flujos Críticos**. Aquí el foco estaba en la transaccionalidad. Me interesaba evaluar si el buscador de médicos y el inicio del agendamiento de citas eran procesos fluidos o si el usuario se perdía en la transición entre pantallas de baja fidelidad. Por último, busqué validar la **Utilidad Conceptual de las Funcionalidades**. ¿Realmente les parece útil tener un acceso directo a resultados de laboratorio desde la home o es solo ruido visual? Estos objetivos no eran deseos, eran métricas cualitativas que blindarían la siguiente fase de diseño visual.

#### Escenarios realistas: el arte de no guiar al usuario

Para que la prueba fuera efectiva, diseñé escenarios que pusieran al usuario en una situación de necesidad, evitando a toda costa las instrucciones directas. Es un error común de principiante decir: "Haz clic en el botón de médicos". Yo opté por tareas abiertas que obligaran al participante a razonar.

Construí el escenario de la **Búsqueda Especializada**: "Imagina que necesitas encontrar un cardiólogo que atienda específicamente en el Campus Observatorio. Usando esta maqueta, muéstrame cómo lo harías". Este escenario era vital para probar los filtros facetados que tanto habíamos discutido con el equipo técnico. Si el usuario no lograba filtrar por ubicación de manera autónoma, el diseño había fallado, sin importar lo limpio que se viera el wireframe.

Otro escenario crítico fue el de la **Consulta de Resultados**: "Recientemente te hiciste unos análisis de sangre y quieres ver si ya están listos. Muéstrame dónde esperarías encontrarlos". Aquí la tensión estaba en la distinción entre el sitio institucional y el portal transaccional. Quería observar si el usuario buscaba instintivamente el botón de "Mi Portal Paciente ABC" o si intentaba navegar por secciones de contenido médico. También incluí una tarea sobre servicios específicos, como Maternidad, para evaluar si la jerarquía de contenido ayudaba a encontrar información de valor agregado más allá de la cita médica. El objetivo era que ellos "caminaran" por la estructura, permitiéndome observar sus dudas en tiempo real.

#### El guion de moderación como blindaje metodológico

Con los escenarios listos, redacté el guion de moderación en Google Docs. Este documento es mi mapa para mantener la objetividad y no contaminar la muestra. Un test de usabilidad sin un guion riguroso es solo una conversación informal; con él, es una extracción de datos estratégicos.

Diseñé la introducción para generar *rapport* y, sobre todo, para mitigar la ansiedad del participante. Fui muy enfático en un punto: "Estamos probando el diseño, no a usted. No hay respuestas correctas o incorrectas". Esto es fundamental para que el usuario se sienta libre de criticar y no intente "quedar bien" con el diseñador. Implementé como regla inamovible el **Protocolo Think-Aloud** (pensar en voz alta), instruyendo a los usuarios a verbalizar cada duda, cada expectativa y cada frustración. 

Preparé también preguntas de sondeo estratégicas para los momentos de silencio o duda: "¿Qué esperaba que sucediera al hacer clic ahí?" o "¿Qué le parece esta opción?". Estas preguntas no son aleatorias; están diseñadas para capturar el proceso cognitivo justo en el momento en que ocurre la fricción. El guion se convirtió en mi herramienta para asegurar que, independientemente de quién fuera el usuario, la calidad y el rigor de la prueba se mantuvieran constantes.

#### Estrategia de reclutamiento: buscando la mirada no contaminada

Para la muestra, decidí reclutar entre 5 y 8 participantes. Basado en mi experiencia y en los estándares de la industria, sé que este número es el punto óptimo donde la curva de aprendizaje se aplana: con 5 usuarios sueles descubrir el 80% de los problemas de usabilidad más críticos. No necesitaba una muestra estadística de cientos de personas; necesitaba profundidad cualitativa.

Utilicé Google Forms para realizar el *screening*, filtrando a los candidatos para asegurar que se ajustaran a nuestras Personas clave (como Elena, la madre que gestiona la salud familiar, o Carlos, el paciente crónico). Una decisión estratégica que tomé fue buscar usuarios que **no hubieran participado** en las fases previas de validación de la arquitectura de información. Necesitaba "ojos frescos", personas cuya percepción no estuviera contaminada por discusiones previas sobre el nombre de las categorías o la ubicación de los botones. Quería reacciones genuinas ante el flujo de "Mi Portal Paciente ABC" para validar si el concepto era autoexplicativo desde el primer contacto.

#### El ecosistema digital para la captura de insights

Finalmente, configuré el stack tecnológico para que la logística no fuera un obstáculo durante las sesiones remotas de aquel 2021. Elegí **Google Meet** por su ubicuidad y facilidad de uso, permitiéndome grabar las sesiones (previo consentimiento) y, en los casos donde el usuario se sentía cómodo, darle control remoto del prototipo de Figma para que la interacción fuera lo más natural posible.

Para la toma de notas y el análisis posterior, preparé un tablero en **Miro** donde realizaría el mapeo de afinidad una vez terminadas las sesiones. También configuré una hoja de cálculo en **Google Sheets** para rastrear a los participantes y, lo más importante, para empezar a categorizar los problemas por severidad en cuanto aparecieran. Esta infraestructura no era solo por orden; era para asegurar que ningún *insight* valioso, ninguna cita textual potente y ninguna duda sutil se perdiera en el fragor de la moderación. Tenía el experimento diseñado, los sujetos seleccionados y las herramientas listas. Solo faltaba abrir la sala de reuniones virtual y enfrentarme a la realidad.

> **Insight Senior:** La planificación de una prueba es donde realmente se gana o se pierde la validez del diseño. Si las tareas son guiadas, solo obtendrás validación de tu propio ego. Si las tareas son abiertas y el guion es riguroso, obtendrás la verdad necesaria para construir un producto que realmente funcione.


La arquitectura del experimento estaba blindada y el prototipo listo en la rampa de salida, pero siempre hay un momento de vacío estomacal justo antes de admitir al primer participante en la llamada. Sabía que en los próximos minutos, mis certezas sobre la navegación y el buscador de médicos se enfrentarían al modelo mental de personas que no sabían nada de mis semanas de trabajo. La tensión ahora no era si el prototipo funcionaría técnicamente, sino qué tan rápido vería cómo mis hipótesis de diseño empezaban a desmoronarse ante la lógica implacable del usuario real.

**LA VERDAD DEL USUARIO: EJECUCIÓN Y MODERACIÓN REMOTA**

---

### Parte 3: La Verdad del Usuario Ejecución y Moderación Remota

#### La vulnerabilidad del esqueleto ante el primer clic

Admitir al primer participante en la sesión de **Google Meet** siempre genera una punzada de adrenalina técnica que ninguna fase de diseño visual puede replicar. En ese momento, mis semanas de trabajo estructurando wireframes y definiendo flujos de navegación dejaron de ser una teoría arquitectónica para convertirse en un objeto de prueba. Sabía que el prototipo de baja fidelidad que había construido en **Figma** era, en esencia, un esqueleto: funcional, pero carente de la "piel" estética que a menudo distrae al usuario de los problemas estructurales. Mi objetivo como **Product Designer** era precisamente ese: exponer las fracturas de la arquitectura de información antes de que fuera demasiado tarde o demasiado caro corregirlas.

Al iniciar la primera de las 8 sesiones de 60 minutos que programé, sentí la tensión de pasar de la seguridad del "constructor" —que conoce cada rincón de su obra— a la incertidumbre del "científico" que busca, activamente, que su hipótesis falle. No estaba allí para defender el diseño; estaba allí para ver cómo se rompía. Tenía los **hotspots** (áreas clicables) configurados en Figma para simular los 4 flujos más críticos que había identificado previamente: la búsqueda de especialistas, el agendamiento de laboratorio, el acceso al portal del paciente y la consulta de servicios específicos como maternidad. Cada clic errático del usuario, cada pausa prolongada ante una etiqueta y cada suspiro de duda eran los datos crudos que necesitaba para blindar la experiencia final del **Centro Médico ABC**.

#### Logística remota y la construcción del rapport

Gestionar estas pruebas de forma remota en 2021 requería una coreografía técnica precisa. Utilicé **Google Meet** no solo por su ubicuidad, sino porque me permitía observar el lenguaje no verbal del paciente mientras interactuaba con el prototipo. Mi ritual comenzaba 15 minutos antes de cada sesión: verificaba que el enlace de **Figma** estuviera en modo presentación, que los flujos no tuvieran "callejones sin salida" y que mi guion de moderación en **Google Docs** estuviera listo para guiarme sin sesgar al participante.

Una vez que el usuario entraba a la llamada, mi primera tarea no era técnica, sino humana: establecer **rapport**. Pasé los primeros minutos creando un ambiente de seguridad psicológica. Les explicaba con claridad: *"No te estamos probando a ti, estamos probando la herramienta. No hay respuestas incorrectas y, de hecho, si algo te confunde, es culpa del diseño, no tuya"*. Esta frase es vital; si el usuario se siente evaluado, intenta "complacer" al diseñador, y un usuario complaciente es el peor enemigo de un diagnóstico honesto. Compartía mi pantalla y, dependiendo de la destreza técnica del usuario, le otorgaba el control remoto o le pedía que me indicara verbalmente dónde quería hacer clic. Este formato remoto, aunque mediado por una pantalla, me ofrecía una ventana única a la realidad del paciente en su entorno natural, lidiando con las distracciones y el contexto real de uso.

#### El protocolo Think-Aloud: extrayendo el modelo mental

La herramienta más poderosa de mi arsenal de moderación fue el protocolo de **Think-Aloud** (pensamiento en voz alta). No me bastaba con ver *qué* hacían; necesitaba desesperadamente entender el *por qué*. Incentivé a cada participante a verbalizar su flujo de conciencia de manera constante. Si un usuario se quedaba callado más de diez segundos frente a la pantalla de búsqueda de médicos, intervenía con una pregunta de sondeo estratégica: *"¿Qué estás buscando en este momento?"* o *"¿Qué esperas que suceda si haces clic en ese botón?"*.

Este ejercicio revelaba la brecha entre mi lógica de diseño y el modelo mental del paciente. Por ejemplo, al enfrentarlos a la tarea de encontrar un cardiólogo en el Campus Observatorio, observaba si su mirada se dirigía primero a la barra de búsqueda o a los filtros laterales. El **Think-Aloud** me permitía capturar **verbatims** (citas textuales) invaluables que documentaban la **fricción cognitiva**. Recuerdo a un participante dudando frente a la sección de "Mi Portal Paciente ABC"; su comentario fue: *"No sé si aquí veré mis citas o si es solo para mis resultados de laboratorio"*. Ese momento de duda era una señal clara de que la etiqueta o la jerarquía visual no estaban cumpliendo su función comunicativa. Mi labor era mantener ese flujo de pensamiento vivo sin interrumpir el proceso cognitivo del usuario, una disciplina de equilibrio constante entre la guía y la observación pura.

#### Observación forense en los flujos críticos

Mientras el usuario navegaba por los wireframes, yo realizaba una observación forense de su comportamiento. Me enfoqué obsesivamente en los puntos de fricción dentro de los flujos que había diseñado en la actividad anterior. 

*   **Búsqueda de Médicos:** Observaba si los usuarios entendían la diferencia entre buscar por nombre, especialidad o síntoma. ¿Los filtros eran herramientas de precisión o barreras de confusión? Si un usuario intentaba hacer clic en un elemento que no era un **hotspot**, tomaba nota inmediata; ese era un indicador de que el usuario esperaba una interacción que yo no había previsto o que la jerarquía visual era engañosa.
*   **Agendamiento de Laboratorio:** Este flujo era una prueba de fuego para la eficiencia. Rastreaba cuántos pasos le tomaba al usuario llegar a la selección de fecha y hora. Si se detenían a leer cada palabra de un texto de instrucción, sabía que el diseño estaba fallando en ser autoexplicativo.
*   **Portal del Paciente:** El acceso a "Mi Portal Paciente ABC" (que en la estructura previa era el fragmentado Mi Salud ABC) era un punto crítico. Observaba si la ubicación en la navegación principal era lo suficientemente prominente o si los usuarios se perdían en el menú institucional antes de encontrar su información personal.

Cada vacilación del cursor (o del dedo, si estaban en móvil) era un dato. La arquitectura de información se ponía a prueba en tiempo real: si un usuario buscaba información de maternidad en la sección de "Especialidades" en lugar de "Servicios", yo tenía una evidencia directa de que mi categorización no era intuitiva para el paciente promedio.

#### La disciplina de la intervención mínima

Como único moderador y diseñador del proyecto, el mayor reto era no "ayudar" al usuario. Es una tentación humana querer rescatar a alguien que está sufriendo con una interfaz que tú creaste, pero como profesional senior, sabía que cada vez que intervenía para "explicar" el diseño, estaba invalidando el dato. Apliqué estrictamente el principio de intervención mínima. Solo hablaba para lanzar preguntas de sondeo como las documentadas en mi proceso: *"¿Hay algo en esta pantalla que te parezca confuso?"* o *"¿Cómo compararías esta forma de buscar con la que usas actualmente?"*.

Si un participante se quedaba completamente atascado, en lugar de darle la solución, le pedía que me explicara qué estaba intentando lograr y qué le impedía hacerlo. Esta técnica de "el zorro" me permitía transformar un fallo del prototipo en un hallazgo de investigación. Esta disciplina era la única forma de obtener la "verdad del usuario", una verdad que a menudo es incómoda pero siempre necesaria para construir un producto que realmente funcione en el caos del mundo real, más allá de la perfección controlada de Figma.

#### Captura de evidencia y el debriefing inmediato

Durante las sesiones, mi atención estaba dividida en tres: la moderación, la observación del usuario y la toma de notas en tiempo real. Utilicé **Google Docs** para registrar comportamientos específicos, errores de navegación y, sobre todo, las citas textuales que resumían la experiencia del usuario. No intentaba analizar en ese momento; solo capturaba datos crudos. Anotaba cosas como: *"Usuario intentó filtrar por precio en lugar de ubicación"* o *"Confusión entre 'Citas' y 'Agenda' en el menú"*.

Sin embargo, la parte más crítica de mi metodología era el **debriefing inmediato**. Al cerrar cada llamada de Google Meet, dedicaba 15 o 20 minutos de reloj a volcar mis impresiones más frescas en una nota rápida en **Notion**. Este es el momento donde la intuición del diseñador está más afilada. En esos minutos anotaba los patrones que empezaban a emerger: *"Tres de tres usuarios han ignorado el banner lateral"* o *"La terminología médica sigue siendo una barrera"*. Esta captura forense de datos, realizada mientras la voz del usuario aún resonaba en mi cabeza, fue el combustible fundamental para el análisis de afinidad que realizaría posteriormente en **Miro**. Sabía que si dejaba pasar un día, los detalles sutiles —el tono de frustración, la micro-pausa de duda— se diluirían en la memoria.

> **Insight Senior:** Ver a un usuario fallar en una tarea que tú considerabas "obvia" no es un error del usuario ni un fracaso de tu talento; es el regalo más valioso que puedes recibir en esta fase. Cada "no entiendo esto" es una oportunidad de ahorrar miles de dólares en desarrollo y horas de soporte técnico en el futuro. Estas pruebas en baja fidelidad son el filtro de seguridad que separa un diseño cosmético de un producto funcional.

Al terminar la última sesión, tenía una montaña de notas, grabaciones y observaciones. La sensación de seguridad que tenía al principio del proceso se había transformado en una lista de preguntas urgentes. El esqueleto que yo creía sólido había mostrado fracturas en lugares inesperados, especialmente en el flujo de agendamiento y en la percepción de valor del portal del paciente. La fase de recolección de datos había terminado, y ahora me enfrentaba al reto de procesar todo ese ruido para encontrar la señal clara que guiaría la siguiente iteración.


La cantidad de datos crudos y verbatims que acumulé tras las ocho sesiones era abrumadora, y pronto me di cuenta de que las notas aisladas no bastarían para convencer a los stakeholders de los cambios estructurales necesarios. La tensión se trasladó de la moderación al análisis: ¿cómo transformar horas de dudas y clics erráticos en una hoja de ruta de diseño indiscutible? Necesitaba una metodología forense para organizar el caos, por lo que el siguiente paso inevitable fue enfrentarme al lienzo en blanco de Miro para ejecutar un análisis de afinidad que revelaría los patrones de falla que el ojo humano no detecta a simple vista.

#### Próximo paso: FORENSE DE USABILIDAD: ANÁLISIS DE HALLAZGOS Y PATRONES

---

### Parte 4: Forense de Usabilidad Análisis de Hallazgos y Patrones

#### El silencio después del ruido: la disección forense

Cerré la sesión de Google Meet con el último participante y, por primera vez en tres días, el silencio en mi estudio se sintió pesado. Tenía frente a mí una montaña de notas en Notion, siete grabaciones de video y la sensación electrizante de quien acaba de desenterrar algo importante, pero aún no sabe exactamente qué es. Como diseñador, sabía que estaba en el momento más peligroso del proceso: el riesgo de dejarme llevar por la última opinión escuchada o por mis propios sesgos de confirmación era altísimo. No podía simplemente "leer" mis notas; necesitaba una metodología forense para separar el ruido de la señal y transformar esas horas de clics erráticos en una hoja de ruta de diseño que fuera indiscutible ante los stakeholders del Centro Médico ABC.

Mi primer ritual fue el **debriefing individual post-sesión**. Basándome en la disciplina de capturar la frescura del momento, me obligué a dedicar entre 15 y 20 minutos inmediatamente después de cada una de las siete sesiones para registrar mis impresiones más viscerales. Utilicé Notion para anotar esos "destellos" de comportamiento que la grabación a veces aplana: la duda casi imperceptible en la mirada de Elena antes de hacer clic, o el suspiro de frustración contenido de Carlos cuando los filtros no respondían como esperaba. Este paso fue vital; era mi blindaje contra el sesgo de memoria. Necesitaba que la esencia de cada participante se mantuviera intacta antes de lanzarme a la síntesis global, asegurándome de que sus procesos mentales —y no solo sus acciones— quedaran documentados.

#### El lienzo del caos: mapeo de afinidad en Miro

Con las notas de las siete sesiones procesadas, abrí un lienzo infinito en Miro. Mi objetivo era realizar un **Affinity Mapping** que me permitiera ver la "forma" del problema en el espacio. Comencé un volcado masivo de datos: cada observación crítica, cada error de navegación y, sobre todo, los **verbatims** (citas textuales) más punzantes, se convirtieron en post-its virtuales. No fue un ejercicio estético; fue una disección técnica.

Fui agrupando estos cientos de post-its por áreas del prototipo: el Buscador de Médicos, el Dashboard del Paciente y la Navegación Global. Al ver los grupos crecer, los patrones empezaron a emerger por peso propio. No era solo que "el portal fuera confuso"; era que existía una fractura estructural en cómo los usuarios entendían la jerarquía de la información. Esta visualización espacial me permitió identificar dónde el "esqueleto" de la plataforma que había construido en Figma estaba fallando realmente. La técnica de afinidad eliminó la subjetividad: si veía un clúster de veinte post-its rojos sobre un mismo botón, ya no era mi opinión, era una evidencia forense de un fallo de diseño.

#### Patrones de falla y el peso de la severidad

Al analizar los hallazgos, identifiqué problemas que categoricé bajo un **Severity Rating** estricto. El hallazgo más crítico, y que me obligó a cuestionar parte de la arquitectura inicial, fue la ambigüedad en el acceso a "Mi Portal Paciente ABC". Registré una severidad mayor en este punto porque usuarios como Elena se quedaban paralizados en la navegación utilitaria. Su duda era letal para la conversión: *"No sé si tengo que ir a 'Mi Portal' o a 'Consulta tus Resultados'. ¿Es lo mismo?"*. Esta cita se convirtió en el eje de mi análisis. El concepto de "Portal" era demasiado abstracto frente a la necesidad concreta de ver un resultado médico.

Otro patrón preocupante surgió en el flujo de búsqueda de médicos. Carlos, que representaba a nuestros usuarios más orientados a la eficiencia, se frustraba con la aplicación de múltiples filtros. Su comentario fue una revelación estratégica: *"Me gustaría poder poner mi aseguradora desde el principio para que me salgan solo los médicos que la aceptan"*. Descubrí que, aunque el buscador principal era claro, la lógica de filtrado posterior generaba una carga cognitiva innecesaria. Además, detecté una desilusión generalizada: los usuarios esperaban poder modificar o cancelar citas directamente desde el prototipo. Aunque era una maqueta de baja fidelidad, la ausencia de esta funcionalidad generaba preguntas que revelaban una expectativa de autoservicio total que no estábamos cumpliendo del todo en esta iteración.

#### La validación de los pilares: lo que sí resistió el impacto

A pesar de los fallos detectados, el análisis también arrojó insights positivos que blindaron mis decisiones de arquitectura de información. El buscador de médicos en la homepage fue un éxito rotundo; los usuarios lo identificaban de inmediato y comprendían su propósito. Esto me dio la certeza de que la disposición de los elementos en la página principal era la correcta. La navegación principal con categorías como "Servicios" y "Consejos de Salud" resultó ser intuitiva, validando que el lenguaje que estábamos usando resonaba con el modelo mental del paciente.

Ese entusiasmo que noté cuando los participantes hablaban de la "unificación de información" me confirmó que el concepto de valor era sólido, aunque la ejecución del acceso necesitara cirugía. Estos aciertos no eran solo "buenas noticias"; eran validaciones estratégicas que me permitieron decidir qué elementos conservar intactos para la fase de alta fidelidad. Sabía que la base de la casa era firme, aunque tuviéramos que mover algunas paredes internas.

#### El dilema estratégico: utilidad directa vs. abstracción del portal

Uno de los análisis más profundos que realicé fue sobre la relación entre el concepto de "Portal" y los accesos directos. Me di cuenta de que para el usuario del ABC, la utilidad inmediata —como ver un resultado de laboratorio— pesaba mucho más que la idea de navegar por un hub centralizador. Este hallazgo forense cambió mi perspectiva: no podíamos obligar al usuario a entrar al "Portal" para luego buscar sus resultados. 

Mi razonamiento estratégico, derivado de observar cómo los usuarios ignoraban el botón de portal para buscar desesperadamente el de "Resultados", me llevó a una conclusión clara: debíamos priorizar la acción directa en la navegación utilitaria. Esta decisión, que hoy se refleja en la web actual del Centro Médico ABC con CTAs destacados para "Agenda tu cita" y "Consulta tus resultados", nació de este análisis forense. Fue el momento en que entendí que mi trabajo no era solo diseñar pantallas hermosas, sino despejar el camino para que el paciente llegara a su información con el menor esfuerzo posible. Fallar rápido y barato en baja fidelidad me permitió llegar a la mesa de diseño visual con certezas graníticas en lugar de suposiciones arriesgadas.

**Próximo paso:** DIAGNÓSTICO DE SEVERIDAD: PRIORIZACIÓN DE PROBLEMAS E INSIGHTS

La montaña de post-its en Miro ya tenía forma, pero ahora me enfrentaba a una realidad inevitable: no podíamos arreglarlo todo al mismo tiempo. Tenía que decidir qué cambios eran cosméticos y cuáles eran fallos estructurales que, de no resolverse, hundirían la experiencia del paciente en el lanzamiento. El siguiente desafío fue sentarme a priorizar con frialdad clínica, sabiendo que cada decisión de diseño que tomara en las próximas horas definiría si el proyecto avanzaba hacia la alta fidelidad sobre suelo firme o sobre arenas movedizas.

---

### Parte 5: Diagnóstico de Severidad Priorización de Problemas E Insights

#### La transición del caos de datos al diagnóstico forense

Cerré la última sesión de Google Meet con el séptimo participante y me quedé un momento en silencio frente al monitor. Tenía ante mí una montaña de evidencias: grabaciones de video, transcripciones parciales y páginas de notas que capturaban cada duda, vacilación y gesto de frustración de los usuarios. En ese punto del proceso, el riesgo no era la falta de información, sino la parálisis por exceso de ella. Como diseñador, sabía que mi responsabilidad inmediata no era simplemente listar errores, sino realizar un diagnóstico de severidad que separara el ruido de las fallas estructurales.

Mi razonamiento fue clínico: no podía permitir que el diseño de alta fidelidad heredara problemas de cimentación. Si un usuario no entendía hacia dónde ir en un wireframe gris y plano, una interfaz visualmente impactante solo lograría que se perdiera con más estilo. Necesitaba transformar la "voz del usuario" en una hoja de ruta técnica ejecutable. Para lograrlo, inicié un análisis de afinidad forense, volcando cada observación en un tablero de **Miro** que pronto se convirtió en un mapa de calor de las fricciones del producto.

#### El triaje de usabilidad: priorización en Miro y Google Sheets

Para organizar este volumen de datos, utilicé un sistema de triaje basado en dos ejes críticos: frecuencia y severidad. No todos los problemas valen el mismo tiempo de iteración. Maniobré sobre el tablero de **Miro** agrupando cientos de post-its virtuales por áreas temáticas: el buscador de médicos, el flujo de agendamiento, la navegación del portal y la claridad de las etiquetas.

Posteriormente, trasladé estos hallazgos a una **Hoja de Cálculo en Google Sheets** para rastrear a los participantes y cuantificar el impacto. Clasifiqué los hallazgos bajo los siguientes criterios de severidad:

*   **Severidad Mayor:** Problemas que bloquean la finalización de la tarea o causan una desorientación total. Estos eran "no negociables" y debían resolverse antes de cualquier avance visual.
*   **Severidad Media:** Fricciones que ralentizan al usuario o generan dudas, pero que permiten completar el flujo tras un esfuerzo cognitivo adicional.
*   **Severidad Menor:** Detalles cosméticos o de micro-copia que, aunque no detienen el proceso, afectan la percepción de pulido del sitio.

Este triaje fue vital para blindar el proyecto contra el retrabajo costoso. Identifiqué que, mientras algunas áreas como el buscador principal funcionaban con una fluidez notable, existían "puntos ciegos" en la arquitectura de información que representaban un riesgo de abandono crítico para el Centro Médico ABC.

#### El laberinto del portal: la ambigüedad del concepto "Hub"

El hallazgo más alarmante, clasificado como de **Severidad Mayor**, fue la confusión sistémica respecto al acceso a **"Mi Portal Paciente ABC"**. Durante las pruebas, observé una tendencia recurrente: usuarios como Elena se quedaban paralizados al intentar distinguir entre el portal centralizado y las acciones directas de la navegación.

Elena lo resumió con una pregunta lapidaria que anoté de inmediato: *“No sé si tengo que ir a 'Mi Portal' o a 'Consulta tus Resultados'. ¿Es lo mismo?”*. Esta duda revelaba una falla en la jerarquía utilitaria de mis wireframes. El usuario no buscaba "un portal" como concepto abstracto; buscaba resolver una necesidad inmediata (ver un resultado o agendar una cita). 

> **Insight Estratégico:** La arquitectura de información estaba compitiendo consigo misma. Al intentar posicionar el Portal como un hub central, estábamos creando un paso intermedio innecesario para quienes solo querían una respuesta rápida. Esta observación me llevó a concluir que debíamos priorizar los CTAs de acción directa sobre la metáfora del portal en la navegación principal, una decisión que hoy es visible en la estructura actual del sitio del ABC.

#### Fricción en los filtros: el caso de la búsqueda de médicos

Otro punto de tensión importante, situado entre **Severidad Media y Mayor**, surgió en la página de resultados de búsqueda de médicos. Aunque el buscador de la homepage fue un éxito rotundo por su visibilidad, la experiencia se degradaba al intentar refinar los resultados.

Carlos, uno de los participantes con un perfil más orientado a la eficiencia, mostró signos de frustración al intentar aplicar múltiples filtros. Su comentario fue directo: *“Me gustaría poder poner mi aseguradora desde el principio para que me salgan solo los médicos que la aceptan”*. Diagnostiqué que la interfaz de los wireframes no comunicaba correctamente la lógica de filtrado avanzado. El "tiempo en tarea" se disparaba porque los usuarios tenían que navegar por una lista larga antes de poder segmentar por lo que realmente les importaba: su seguro y la ubicación.

Este hallazgo me obligó a replantear la complejidad del componente de búsqueda. No bastaba con un campo de texto; necesitábamos filtros inteligentes y accesibles desde el primer contacto para reducir la carga cognitiva y evitar que el paciente sintiera que estaba "trabajando" para encontrar a su médico.

#### El vacío en la gestión de citas y la promesa de autoservicio

Un hallazgo de **Severidad Mayor** que no anticipé con tanta fuerza fue la expectativa de gestión integral. Carlos y Sofía, al navegar por el flujo de agendamiento, no solo querían sacar una cita; esperaban tener el control total sobre ella.

Al descubrir que el prototipo de baja fidelidad no simulaba la modificación o cancelación de citas, la reacción fue de desilusión. La pregunta de los usuarios era constante: *“¿Y si necesito cambiar la hora? ¿Puedo hacerlo aquí mismo o tengo que llamar?”*. Esta brecha entre la expectativa del usuario y la funcionalidad del prototipo evidenció que el "autoservicio" era la propuesta de valor central para ellos. 

Entendí que omitir estos pasos en la arquitectura final no sería solo una falta de funcionalidad, sino una ruptura de la promesa de marca de "Mi Salud ABC". Por lo tanto, elevé la gestión de citas (modificación/cancelación) a una prioridad absoluta para el diseño de alta fidelidad, asegurando que el flujo no terminara en la confirmación, sino que cerrara el círculo de control del paciente.

#### Recomendaciones estratégicas para la solidez del esqueleto

Tras procesar este análisis, articulé una serie de recomendaciones estratégicas que servirían de guía para la iteración final de los wireframes:

1.  **Clarificación de la Navegación Utilitaria:** Redefinir la relación entre el portal y las acciones directas. La recomendación fue clara: el Portal debe ser el contenedor, pero los accesos a "Agendar" y "Resultados" deben ser puertas de entrada independientes y prominentes.
2.  **Rediseño del Buscador:** Implementar filtros avanzados (aseguradora, campus, especialidad) de forma más intuitiva y, de ser posible, integrados desde la búsqueda inicial para optimizar el embudo de conversión.
3.  **Visibilidad del Equipo Médico:** Atender el hallazgo menor pero relevante donde los usuarios no encontraban a los especialistas dentro de las páginas de Centros de Alta Especialidad (como el Cardiovascular). La solución: hacer el enlace al "Equipo Médico" una constante visual en estas secciones.

Este diagnóstico de severidad fue el momento en que el proyecto dejó de ser una serie de pantallas para convertirse en una estrategia de producto. Haber detectado estas fallas en baja fidelidad, antes de tocar un solo píxel de color o invertir horas en diseño visual, blindó la viabilidad del rediseño. Logré que el "esqueleto" de la plataforma fuera robusto, validado por la fricción real de los pacientes, y listo para recibir la capa estética con la certeza de que la estructura soportaría la carga.

**Próximo paso:** EL CIERRE DEL CÍRCULO: ITERACIÓN Y REFINAMIENTO DEL DISEÑO

Tenía el diagnóstico sobre la mesa, pero ahora venía la parte más difícil: aceptar que algunas de mis ideas originales en los wireframes no habían sobrevivido al contacto con los pacientes. No podía simplemente "parchar" el diseño; necesitaba una cirugía estructural en los flujos de navegación antes de permitirme pensar en tipografías o colores. El siguiente reto no era solo corregir errores, sino reconstruir la confianza del usuario en cada clic, sabiendo que cualquier duda que dejara sin resolver en este esqueleto se amplificaría exponencialmente cuando llegáramos a la alta fidelidad.

---

### Parte 6: El Cierre del Círculo Iteración y Refinamiento del Diseño

#### La cirugía estructural tras el diagnóstico

Cerré el informe de usabilidad con una sensación de urgencia técnica: los wireframes que tanto había pulido no eran piezas de arte sagradas, sino hipótesis que acababan de ser refutadas por la realidad de siete pacientes. Tenía el diagnóstico de severidad sobre la mesa y, honestamente, era una bofetada de realidad necesaria. No podía simplemente mover elementos por estética; me enfrentaba a una cirugía estructural en los flujos de navegación. Mi razonamiento fue pragmático: si no resolvía estas fricciones en el "esqueleto" de baja fidelidad, cualquier capa de diseño visual que aplicara después sería cosmética inútil sobre una estructura rota.

Entré en una fase de reconstrucción donde mi prioridad absoluta fue blindar la viabilidad del rediseño. Sabía que cada minuto invertido en iterar estos wireframes me ahorraría horas de retrabajo en alta fidelidad. No se trataba de "parchar" errores, sino de realizar una síntesis forense de la evidencia cualitativa para asegurar que, cuando llegáramos a la fase visual, estuviéramos construyendo sobre terreno firme.

#### Del mapa de afinidad a la prioridad técnica

Para procesar el volumen de feedback, volví a mi tablero de **Miro** donde había orquestado el *affinity mapping*. Tenía decenas de post-its virtuales con citas textuales y observaciones de comportamiento. Mi primer paso fue cruzar los hallazgos con la matriz de severidad que había definido. Los problemas de "Severidad Mayor" se convirtieron de inmediato en mis nuevos requerimientos de diseño.

No permití que ninguna fricción detectada en las sesiones quedara en el aire. Si **Elena** se había detenido confundida ante el portal, o si **Carlos** había expresado frustración al no encontrar su aseguradora, esos momentos de dolor debían traducirse en una modificación lógica en Figma. Organicé el trabajo no por pantallas, sino por "nodos de fricción". Este enfoque me permitió priorizar las correcciones que impactaban directamente en el éxito de la tarea, dejando los ajustes menores para el final. Fue un proceso de traducción: cada duda del usuario se transformó en una orden de cambio técnica en mi *Design Decision Log*.

#### Rediseñando el buscador: el caso de Carlos

Regresé al lienzo técnico de **Figma** para atacar uno de los puntos más críticos: el buscador de médicos. Durante las pruebas, **Carlos** fue muy vocal al decir: *"Me gustaría poder poner mi aseguradora desde el principio para que me salgan solo los médicos que la aceptan"*. Su frustración era un indicador claro de que mi jerarquía de filtros inicial era insuficiente.

Maniobré sobre los wireframes para simplificar la interfaz de búsqueda. Decidí exponer la opción de aseguradora como un filtro primario desde el campo de búsqueda inicial, eliminando la necesidad de que el usuario navegara hasta una página de resultados para empezar a segmentar. Esta decisión redujo drásticamente el tiempo potencial en tarea y eliminó pasos redundantes. Además, ajusté las etiquetas de navegación basándome en el protocolo *Think-Aloud*; sustituí términos técnicos por el lenguaje natural que los pacientes usaron durante las sesiones. Si los usuarios llamaban a una sección de una forma específica, el wireframe debía reflejarlo para garantizar que la arquitectura de información fuera transparente y no un acertijo.

#### La reconfiguración del Portal: resolviendo la duda de Elena

El ajuste más complejo fue el de "Mi Portal Paciente ABC". El informe de usabilidad fue tajante: usuarios como **Elena** dudaban entre entrar al "Portal" o ir directamente a "Consulta tus Resultados". La ambigüedad del concepto de "hub" estaba bloqueando la acción. Mi propuesta original de un panel centralizado, aunque teóricamente elegante, fallaba en la práctica porque el usuario buscaba utilidad inmediata, no una exploración conceptual.

Tomé la decisión estratégica de priorizar la acción directa sobre el concepto de portal. En los wireframes de la homepage, transformé lo que antes era un acceso genérico en CTAs (*Call to Action*) utilitarios y prominentes: **"Agenda tu cita"** y **"Consulta tus resultados"**. El portal pasó de ser un destino abstracto a ser el contenedor que se activa *después* de que el usuario decide qué quiere hacer. Esta reconfiguración resolvió el problema de Elena: ya no tenía que elegir entre dos caminos que parecían lo mismo; ahora el diseño la guiaba directamente a su necesidad, utilizando el portal como el motor que gestiona esa interacción personalizada pero sin ser un obstáculo en el flujo.

#### Blindaje del esqueleto y trazabilidad de decisiones

Para cerrar esta fase, realicé una labor de trazabilidad obsesiva. No dejé que ningún cambio en Figma fuera "porque sí". Vinculé cada modificación estructural con un hallazgo específico del informe de usabilidad. Este *Design Decision Log* no solo servía para documentar el proceso, sino para blindar el proyecto ante futuros cuestionamientos de los stakeholders. Tenía la evidencia de los 7 participantes respaldando por qué un botón ahora estaba a la izquierda o por qué una etiqueta había cambiado.

Al finalizar, el esqueleto de la plataforma era radicalmente distinto al que empecé a probar. Había eliminado la deuda de diseño antes de que se generara. La jerarquía de contenido estaba validada y los flujos de navegación fluían sin las interrupciones que detectamos inicialmente. Este esqueleto 100% iterado era ahora una base de usabilidad probada, lista para recibir la capa de alta fidelidad con la certeza de que la estructura no colapsaría bajo el uso real.

#### El valor de la expectativa no mapeada

Mirando hacia atrás, uno de los aprendizajes más potentes de esta iteración vino de una desilusión de los usuarios. Tanto **Carlos** como **Sofía** esperaban poder modificar o cancelar sus citas directamente en el prototipo y se sintieron frustrados al ver que esa funcionalidad no estaba simulada. Aunque técnicamente el prototipo de baja fidelidad no tenía por qué hacerlo, esa "frustración" fue un hallazgo de severidad mayor que me permitió anticipar una funcionalidad crítica de negocio que no estaba mapeada con tanta prioridad inicialmente.

Haber detectado esto en wireframes me permitió diseñar la lógica de cancelación y reprogramación antes de que el equipo de desarrollo escribiera una sola línea de código. Esta fase de iteración no fue un retraso en el cronograma; fue la inversión más rentable del proyecto. Entramos a la fase visual no con suposiciones, sino con un plano arquitectónico que ya había sobrevivido al contacto con el paciente.

**Reflexión final:**
Esta actividad me recordó que el diseño de producto es, en esencia, un ejercicio de humildad frente a la evidencia. Ver cómo mis wireframes originales fallaban ante usuarios como Elena y Carlos fue el momento más valioso del proceso, porque me permitió corregir el rumbo cuando el costo del cambio aún era bajo. Al final, no entregué solo un prototipo iterado, sino una estructura validada que eliminó meses de posibles retrabajos y aseguró que la plataforma final fuera realmente una herramienta de servicio y no una barrera para el paciente.

---

