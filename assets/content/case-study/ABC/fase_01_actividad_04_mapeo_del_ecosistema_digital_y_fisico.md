# Fase 1: Descubrimiento e Investigación Profunda (Empatizar y Definir)

## Actividad 04: Mapeo del Ecosistema Digital y Físico

> Esta actividad constituye el nexo crítico de síntesis de la Fase 1. Tras haber ejecutado la investigación primaria, el benchmarking y la auditoría técnica, el Mapeo del Ecosistema permite visualizar la arquitectura de la experiencia actual del paciente en el Centro Médico ABC. El objetivo es identificar las desconexiones sistémicas entre los puntos de contacto digitales (centromedicoabc.com y misaludabc.abchospital.com) y los entornos físicos (Campus Observatorio y Santa Fe). A través de un enfoque de Service Blueprinting simplificado, se trazan los viajes de arquetipos clave (Elena, Ariel y Carmen) para exponer cómo la fragmentación tecnológica obliga al usuario a recurrir a canales análogos ineficientes, como el Call Center, degradando la percepción de excelencia de la institución.

### Parte 1: Cimentación del Ecosistema Auditoría de Datos y Definición de Actores

#### El peso de la evidencia dispersa

Había terminado la auditoría heurística, el benchmarking y las entrevistas iniciales, y me encontraba frente a una montaña de hallazgos que, aunque valiosos, se sentían como piezas de tres rompecabezas distintos mezcladas en una sola caja. Tenía datos sobre la arquitectura de información, quejas específicas de usuarios sobre el portal de resultados y comparativas con hospitales de clase mundial, pero me faltaba el tejido conectivo. No bastaba con saber que la navegación fallaba; necesitaba entender exactamente en qué punto del recorrido físico un paciente decidía abandonar la web para saturar el Call Center. El reto no era diseñar una interfaz más bonita, sino diagnosticar una fractura sistémica entre lo que el Centro Médico ABC prometía digitalmente y lo que el paciente vivía al caminar por los pasillos de Observatorio o Santa Fe.

Esta transición de la investigación pura a la síntesis fue un momento de alta tensión cognitiva. Como diseñador, sientes la presión de empezar a "dibujar" soluciones, pero sabía que si no articulaba primero el ecosistema completo, terminaría poniendo parches en los síntomas en lugar de curar la enfermedad. Necesitaba un modelo que expusiera la cruda realidad: una experiencia fragmentada donde el paciente era el encargado de unir los puntos que la institución no había logrado integrar.

#### La inmersión forense: Tres días de aislamiento de datos

Para construir este mapa, me impuse un periodo de dos a tres días de lo que llamo "revisión focalizada". Me encerré con los entregables de las fases previas —los informes de entrevistas, los resultados de las encuestas y los hallazgos de la auditoría técnica— no para leerlos de nuevo, sino para realizar una extracción forense. Busqué micro-momentos. No me servía el dato genérico de "el portal es difícil"; buscaba la mención específica de aquel paciente que, tras una cirugía, intentó consultar sus análisis de sangre y se encontró con que el sistema solo le permitía ver radiografías.

Rastreé cada paso que los usuarios describieron en las entrevistas, prestando especial atención a los verbos: "busqué", "llamé", "pregunté", "me frustré". Cada uno de estos verbos representaba un punto de contacto o una ruptura. Esta inmersión me permitió identificar patrones que en la fase de recolección individual de datos no eran tan evidentes. Por ejemplo, descubrí que la mayoría de las llamadas al Call Center no eran por falta de información, sino por falta de confianza en la información que la web proporcionaba. Estaba mapeando no solo acciones, sino la degradación de la confianza del usuario en cada clic fallido.

#### Inventariando el caos: La estructura detrás del mapa

Antes de tocar Miro o cualquier herramienta visual, necesitaba una base sólida. Opté por volcar todo este caos en un listado estructurado en Google Sheets. Sé que para algunos esto puede parecer un paso burocrático, pero para un proyecto de esta envergadura, el inventario técnico es la columna vertebral que blinda la integridad del diseño posterior. Si no está en la hoja de cálculo, no existe en el ecosistema.

Organicé la información en columnas que me permitieran ver la jerarquía del problema:
*   **Punto de contacto (Touchpoint):** El lugar exacto de la interacción.
*   **Iniciador:** ¿Fue una acción proactiva del paciente o una reacción a un estímulo del hospital?
*   **Canal:** ¿Fue digital (`centromedicoabc.com`), fue el portal fragmentado (`misaludabc.abchospital.com`), fue el teléfono o fue el mostrador de recepción?
*   **Propósito:** Qué intentaba lograr el paciente en ese micro-momento.
*   **Problemas asociados:** La fricción específica extraída de la investigación primaria.

Este proceso me obligó a categorizar los canales con una visión de "Front-stage". Para el paciente, el Centro Médico ABC es una sola entidad, pero técnicamente operaba en silos. Identifiqué que mientras el sitio principal servía como una fachada institucional, el portal "Mi Salud ABC" era en realidad un subdominio basado en MyVue de Carestream, limitado casi exclusivamente a radiología. Esta distinción era vital: la fragmentación tecnológica estaba dictando una experiencia de usuario rota.

#### Los protagonistas del drama: Elena, Ariel y Sofía

Con los datos organizados, el siguiente paso fue personificar la fricción. No diseñamos para "usuarios", diseñamos para personas con contextos y estados emocionales específicos. Basándome en la investigación de campo, definí tres actores críticos que representarían los escenarios de mayor estrés para el sistema:

1.  **Elena, la paciente crónica:** Representa a ese sector de la población con una relación constante con el hospital pero con una alfabetización digital limitada. Elena necesita sus resultados de laboratorio y agendar con su cardiólogo. Su dolor no es solo técnico, es emocional: la ansiedad de no saber dónde buscar sus análisis de sangre porque el portal solo le muestra sus placas de tórax. Para Elena, la web es una promesa incumplida que la obliga a depender de su hija o del teléfono.
2.  **Ariel, el profesional ocupado:** Es el arquetipo que exige autoservicio y eficiencia. Ariel no quiere hablar con nadie; quiere agendar su chequeo anual en menos de dos minutos desde su laptop. Cuando Ariel se encuentra con que el agendamiento en línea solo funciona para laboratorio clínico y no para especialistas, su percepción de la institución cae drásticamente. Para él, un hospital de excelencia médica no puede tener una web "atrasada".
3.  **Sofía, la cuidadora informada:** Este es quizás el perfil más complejo y el que más expone la falta de visión sistémica. Sofía gestiona la salud de su hijo y de su madre simultáneamente. Su frustración radica en la imposibilidad de vincular perfiles o ver resultados de diferentes familiares en un solo lugar. Sofía termina haciendo malabares con múltiples inicios de sesión y llamadas telefónicas, lo que convierte una tarea administrativa sencilla en una carga cognitiva agotadora.

#### La selección de escenarios estratégicos

No mapeé cada posible interacción, porque en un ecosistema tan vasto eso solo generaría ruido. Seleccioné tres escenarios que consideré "momentos de la verdad" para el rediseño:
*   **El viaje del paciente nuevo:** Desde la búsqueda de un especialista hasta la primera consulta. Aquí es donde se gana o se pierde la conversión y la confianza inicial.
*   **El proceso de estudios y resultados:** Este es el punto más crítico de fragmentación. Es donde el paciente se enfrenta al abismo entre el sistema de laboratorio y el de imagenología.
*   **La búsqueda de información de salud:** Un escenario de "investigación" donde el contenido institucional debe validar la autoridad médica del hospital.

Al definir estos escenarios, pude ver con claridad que el problema no era solo de diseño de interfaz, sino de arquitectura de procesos. El hecho de que un paciente tuviera que saltar entre dos portales diferentes para ver su salud completa era una barrera emocional que generaba una dependencia innecesaria de los canales análogos.

> **Insight de Diseño:** La fragmentación de sistemas (Radiología vs. Laboratorio) no es solo una deuda técnica; es una transferencia de carga cognitiva hacia el paciente. En lugar de que el sistema trabaje para el usuario, el usuario trabaja para compensar las deficiencias del sistema.

Este trabajo de cimentación fue agotador pero revelador. Había pasado de tener datos sueltos a tener una estructura de actores y escenarios que gritaban por una unificación. Tenía el inventario de los puntos de contacto y sabía quiénes sufrían más en cada uno de ellos. La base estaba lista para ser visualizada, para que los stakeholders pudieran ver, por fin, la magnitud del laberinto que sus pacientes tenían que recorrer cada día.


Con los actores definidos y el inventario de canales en la mano, me di cuenta de que la verdadera complejidad no estaba en los puntos de contacto individuales, sino en lo que sucedía en los "espacios en blanco" entre ellos. Tenía que llevar este inventario a una pizarra infinita en Miro para trazar las líneas de flujo y ver, en tiempo real, cómo la experiencia se desmoronaba cada vez que un paciente intentaba pasar de la web al hospital físico. El siguiente desafío era visualizar la arquitectura del dolor, y sabía que lo que estaba a punto de dibujar iba a incomodar a más de uno en la sala de juntas.

---

### Parte 2: La Arquitectura del Dolor Mapeo de Fricciones y Puntos de Contacto

#### La Arquitectura del Dolor: Visualizar lo Invisible

Tener un inventario de canales y una lista de actores es como tener las piezas de un motor desmontadas sobre una mesa: sabes que están ahí, pero no tienes idea de por qué el coche no arranca. El verdadero reto no era enumerar los puntos de contacto, sino conectar esos puntos aislados en una narrativa visual que expusiera las costuras rotas del Centro Médico ABC. Como diseñador, mi obsesión en este punto no era la estética, sino la fidelidad forense. Necesitaba construir lo que internamente llamé la "Arquitectura del Dolor": un mapa que hiciera evidente, incluso para el stakeholder más escéptico, que la excelencia clínica de la institución se desmoronaba en cuanto el paciente tocaba el ecosistema digital.

No bastaba con decir que la web era difícil de usar; tenía que demostrar que el sistema estaba diseñado, quizás sin quererlo, para expulsar al usuario hacia canales análogos ineficientes. Esta visualización era mi herramienta política más potente. Si lograba trazar el "valle de la muerte" que existía entre la web principal y el portal de resultados, el argumento a favor de la unificación dejaría de ser una opinión de diseño para convertirse en una necesidad operativa urgente.

#### El Lienzo de Miro: Del Caos a la Estructura Operativa

Abrí un lienzo infinito en Miro con una sensación de responsabilidad pesada. Este espacio no iba a ser un diagrama bonito para una presentación; iba a ser mi centro de mando para la síntesis. Mi primer paso fue una transferencia masiva de datos: tomé cada punto de contacto que había listado en mis hojas de cálculo y lo convertí en un post-it virtual. 

Para que el mapa fuera legible y útil, implementé una codificación de color estricta que mantuve durante todo el proceso:
*   **Azul:** Interacciones en la web principal (`centromedicoabc.com`).
*   **Naranja:** El portal de pacientes `misaludabc` (el subdominio fragmentado).
*   **Amarillo:** Interacciones telefónicas y Call Center.
*   **Verde:** Interacciones físicas presenciales (recepción, consultorio, laboratorio).
*   **Rojo:** Puntos de fricción crítica y quiebres de flujo.

Esta disciplina visual me permitió notar patrones antes incluso de trazar las líneas. Al ver una mancha amarilla (teléfono) apareciendo inmediatamente después de una azul (web), el diagnóstico era obvio: el canal digital estaba fallando en su promesa de autoservicio. El lienzo se convirtió en un campo de batalla donde cada color representaba una posible falla en la continuidad de la experiencia del paciente.

#### El Eje de la Experiencia: Secuenciación y Carriles

Establecí el eje horizontal del mapa siguiendo el ciclo de vida natural del paciente, pero con un matiz crítico: no me detuve en la visita al hospital. El viaje comenzaba en la **Conciencia y Descubrimiento** (cuando aparece el síntoma o la necesidad), pasaba por la **Investigación y Consideración**, llegaba a la **Acción** (el agendamiento), seguía con la **Preparación Pre-Visita**, la **Experiencia en el Centro** y, finalmente, la fase de **Post-Visita y Resultados**. 

Esta estructura fue vital para identificar que el dolor no es constante; se agudiza en las transiciones. Especialmente cuando el paciente intenta pasar de la "Investigación" a la "Acción", es donde el sistema suele cerrarle la puerta.

Para la dimensión vertical, utilicé una estructura de *Service Blueprinting* simplificada, organizando la información en cuatro carriles o *swimlanes* fundamentales:
1.  **Acciones del Paciente:** El rastro visible de lo que el usuario hace paso a paso.
2.  **Puntos de Contacto Frontstage:** Con quién o con qué interactúa directamente (la interfaz, el recepcionista, el IVR del teléfono).
3.  **Sistemas de Soporte Backstage:** Los procesos internos e infraestructuras digitales, como el sistema de radiología de `misaludabc` o el ECE interno, que el paciente no ve pero que dictan lo que puede o no puede hacer.
4.  **Emociones y Pensamientos:** El carril más humano, donde inyecté las citas textuales y los sentimientos de ansiedad o frustración que había recolectado en las entrevistas.

#### El Calvario de Elena: El Limbo de los Resultados de Sangre

Elena, mi arquetipo de paciente crónica con poca destreza tecnológica, fue mi brújula para detectar la crueldad del sistema. Al mapear su escenario, la fricción se volvió casi tangible. Elena recibe la instrucción de que sus resultados estarán "en línea". Su viaje comienza con una esperanza cautelosa, pero en cuanto entra en `centromedicoabc.com`, la confusión se apodera de ella. 

El mapa reveló un quiebre sistémico: Elena encuentra el enlace a "Mi Salud ABC", pero al hacer clic, es expulsada a un subdominio que se siente y se ve diferente. La tragedia ocurre en la Fase 5 del viaje: una vez dentro del portal, Elena solo ve sus radiografías. Sus análisis de sangre, que son lo que realmente le preocupa, no están. No hay un mensaje, no hay una explicación, solo un vacío digital. 

> **Observación de Diseño:** La fragmentación del portal no es solo un error de navegación; es una traición a la confianza del paciente. Elena termina sintiéndose dependiente, obligada a llamar a su hija o a saturar el Call Center para algo que se le prometió como "autoservicio". El mapa mostró cómo esta deficiencia digital destruye la autonomía de los pacientes más vulnerables.

#### El Muro de Ariel: La Paradoja del Usuario Eficiente

Por otro lado, el escenario de Ariel (o Carlos, como lo identificamos en los registros de rigor) ilustró una frustración distinta: la del usuario nativo digital que espera eficiencia y encuentra burocracia. Ariel quiere agendar un chequeo anual. Entra a la web con la expectativa de resolverlo en tres clics, como lo hace con cualquier otro servicio moderno en 2021.

Sin embargo, el mapa de Ariel mostró un "muro de agendamiento" infranqueable. La web permite agendar laboratorio clínico, pero en cuanto intenta buscar a su internista, la funcionalidad desaparece. No hay botón de "Agendar", solo un número telefónico. Ariel, irritado, se ve forzado a buscar el número en la web —un punto de contacto digital usado solo para facilitar uno análogo— y termina en una cola de espera del Call Center. 

En el carril de emociones, registré su incredulidad: *"En pleno 2021 y tengo que llamar para esto"*. El mapa evidenció que, para un perfil como el suyo, la plataforma no solo era ineficiente, sino que se percibía como "atrasada", dañando la reputación de modernidad que el Centro Médico ABC proyecta en sus instalaciones físicas.

#### Caminando por el Mapa: Identificación de 'Dead-ends'

Con los viajes de Elena y Ariel trazados, me dediqué a "caminar" por los mapas para identificar patrones de fricción recurrentes. Fue entonces cuando los "Dead-ends" (callejones sin salida) saltaron a la vista. El más crítico era, sin duda, la desconexión total entre la web principal y los diferentes sistemas de resultados. 

Identifiqué que el ecosistema estaba plagado de quiebres de canal forzados. El paciente inicia en digital, se pierde en la fragmentación de subdominios, no encuentra lo que busca y, por desesperación, regresa a lo analógico (teléfono o visita presencial). Esto no solo degrada la experiencia del usuario, sino que aumenta masivamente los costos operativos del hospital. Cada vez que Elena o Ariel no pueden resolver algo en la web, el costo de atención para el CM ABC se dispara.

Este análisis forense transformó mi percepción del proyecto. Ya no se trataba solo de hacer una web más bonita; se trataba de reparar un sistema de salud digital roto. La visualización de esta fragmentación fue el argumento definitivo que presenté: no podíamos seguir parchando dos sitios diferentes. La única solución real era la unificación total bajo una arquitectura que pusiera al paciente, y no a las limitaciones técnicas del hospital, en el centro.


La imagen del mapa completo en Miro, plagada de post-its rojos y flechas que daban vueltas en círculo, fue un golpe de realidad para todos. Tenía la evidencia visual de que el ecosistema actual era un laberinto de parches técnicos, pero ahora enfrentaba el desafío de condensar esta complejidad en una síntesis que los directivos pudieran digerir sin abrumarse. El siguiente paso era transformar esta "Arquitectura del Dolor" en una hoja de ruta estratégica, destilando los hallazgos en oportunidades de diseño tan claras que la necesidad de un portal unificado fuera indiscutible.

---

### Parte 3: De la Fragmentación a la Oportunidad Síntesis y Visualización Integrada

#### El reto de la síntesis ejecutiva: Del muro de lamentos a la hoja de ruta

Después de días sumergido en una marea de post-its rojos, transcripciones de entrevistas y capturas de pantalla de una auditoría heurística implacable, me encontré frente a un lienzo de Miro que, aunque preciso, era ilegible para cualquier persona que no fuera yo. Tenía mapeada la "Arquitectura del Dolor", pero sabía que si presentaba ese caos visual a la dirección del Centro Médico ABC, el mensaje se perdería en el ruido. Mi reto no era solo documentar el desastre, sino jerarquizarlo. Como diseñador, mi trabajo en este punto viró de la exploración forense a la síntesis estratégica: necesitaba transformar un inventario de quejas en una herramienta de decisión que hiciera que la inversión en una plataforma unificada no fuera una opción, sino una urgencia operativa.

La tensión en esta etapa era palpable. Tenía la evidencia de que el ecosistema digital estaba roto, pero debía presentarla de forma que los stakeholders no se sintieran atacados, sino interpelados por la oportunidad de mejora. Pasé horas "limpiando" la narrativa visual, eliminando lo accesorio y resaltando lo crítico. No se trataba de simplificar la realidad, sino de hacerla digerible sin perder la crudeza de los hallazgos. Cada flecha en ese diagrama representaba un minuto perdido de un paciente o un peso desperdiciado en el Call Center. Esa fue la mentalidad con la que abordé el refinamiento del mapa: cada elemento visual debía tener un peso político y operativo.

#### La arquitectura del Blueprint: Ordenando el caos en Miro

Para lograr esta legibilidad ejecutiva, decidí estructurar el lienzo de Miro siguiendo una metodología de **Service Blueprinting** adaptada. No quería un simple diagrama de flujo; necesitaba una vista transversal que conectara la experiencia emocional del paciente con las fallas técnicas del sistema. Implementé lo que técnicamente llamamos **Swimlanes** (carriles), una estructura que me permitió separar las capas de la interacción de forma quirúrgica.

*   **Carril de Acciones del Paciente:** Aquí vertí la cronología pura de lo que el usuario intenta hacer, desde que siente un síntoma hasta que intenta consultar un resultado.
*   **Carril de Puntos de Contacto (Front-stage):** Documenté cada interfaz con la que el paciente choca: el sitio web principal, el portal fragmentado de radiología, el teléfono del Call Center y la recepción física.
*   **Carril de Sistemas de Soporte (Backstage):** Aquí es donde el análisis se volvió más denso. Mapeé los sistemas digitales que —aunque el paciente no ve— son los responsables de la fragmentación. Identifiqué cómo la falta de integración entre el expediente clínico y la capa web obligaba a procesos manuales o a la duplicidad de portales.

Para que cualquier stakeholder pudiera navegar este mapa sin mi intervención, diseñé una leyenda de colores e iconos estricta. Los post-its rojos marcaban fricciones críticas; los iconos de alerta señalaban quiebres de canal donde el paciente abandonaba la web por frustración. Esta claridad visual fue mi mejor defensa: cuando un directivo veía una línea roja cruzando de la web al teléfono, entendía de inmediato que habíamos fallado en la promesa de autoservicio.

#### El abismo entre subdominios: El caso de Elena y el "callejón sin salida"

Al "caminar" por los mapas que había construido, el patrón de fracaso más evidente surgió en la transición entre `centromedicoabc.com` y el subdominio de pacientes. El viaje de **Elena**, nuestra paciente crónica, fue el que mejor ilustró este quiebre. Elena es una mujer que confía en el hospital, pero cuya paciencia se agota ante la burocracia digital. Cuando ella entra a la web buscando sus resultados de laboratorio y radiología, el sistema la expulsa hacia `misaludabc.abchospital.com`.

El problema que detecté es que este portal es, en realidad, un callejón sin salida técnico. Elena logra entrar, con dificultad, solo para descubrir que ahí solo habitan sus placas de tórax. Sus análisis de sangre, los que realmente le preocupan para su cita de cardiología, no están. No hay un mensaje de error, no hay una guía; simplemente no existen en ese universo. Observé cómo esta fragmentación genera un estado de ansiedad y desilusión en perfiles como el de Elena, quienes terminan dependiendo de sus hijos o, peor aún, resignándose a que "la tecnología no es para ellos". Este no es un error de diseño visual; es una falla sistémica donde el hospital le entrega al paciente su estructura organizacional (silos de datos) en lugar de una solución de salud.

#### Ariel y la paradoja del profesional ocupado

El segundo escenario crítico que analicé fue el de **Ariel (o Carlos)**, el arquetipo del profesional que valora su tiempo por encima de todo. Para él, la web no es un lugar de consulta, es una herramienta de transacción. Su viaje para agendar un chequeo anual con un internista reveló una paradoja dolorosa: el hospital tiene la tecnología para agendar laboratorios en línea, pero para ver a un especialista, el sistema se vuelve analógico.

Mapeé cómo Ariel navega con eficiencia por el sitio principal, encuentra a su médico, pero al buscar el botón de "Agendar", se topa con un número telefónico. En pleno 2021, un usuario acostumbrado a resolver su vida desde el smartphone se ve obligado a entrar en una cola de espera telefónica. Identifiqué que esta inconsistencia en el flujo de agendamiento no solo irrita al usuario, sino que proyecta una imagen de obsolescencia digital que choca directamente con la excelencia clínica del Centro Médico ABC. Ariel termina el proceso con una percepción clara: "el hospital es excelente en persona, pero su web es un desastre". Esa frase, extraída de las entrevistas, fue el pie de foto que usé en el mapa para ilustrar el daño a la marca.

#### Sofía y la gestión familiar: El punto ciego del ecosistema

Uno de los hallazgos más potentes que surgieron durante la síntesis fue el rol de **Sofía, la cuidadora informada**. Al trazar su viaje, descubrí que el sistema actual ignora por completo la figura del cuidador. Sofía no solo gestiona su salud; coordina las citas de su hijo con el pediatra y revisa los resultados de su madre. 

En el mapa del ecosistema, visualicé cómo Sofía tiene que cerrar y abrir sesiones constantemente, saltando entre diferentes credenciales y portales que no se hablan entre sí. No existe una función de "perfiles vinculados". Esta falta de soporte para la gestión familiar multiplica la carga cognitiva de la cuidadora y la obliga, invariablemente, a recurrir al Call Center para consolidar la información de su familia. Identifiqué aquí una oportunidad de oro para el rediseño: si la nueva plataforma permitiera una gestión multi-perfil, no solo estaríamos ayudando a Sofía, sino capturando la lealtad de todo su núcleo familiar.

#### El Call Center como métrica del fracaso digital

Una de mis mayores obsesiones durante este mapeo fue conectar la experiencia de usuario con los costos del negocio. Utilicé los datos de las fases finales de los viajes de Elena, Ariel y Sofía para demostrar un fenómeno recurrente: el "recurso a canales tradicionales por frustración". 

Cada vez que el portal de resultados fallaba o el agendamiento online se limitaba solo a laboratorio, el paciente terminaba en el teléfono. Esto no es un éxito de "omnicanalidad"; es un fracaso del canal digital que satura el Call Center con tareas que deberían ser autogestionables. Calculé mentalmente el costo operativo de cada una de esas llamadas forzadas. El Call Center se había convertido en el soporte de una web que no cumplía su promesa. Al presentar esto a los stakeholders, dejé de hablar de "fricción" y empecé a hablar de "ineficiencia operativa". Fue en ese momento cuando la necesidad de una plataforma unificada dejó de ser un deseo de UX para convertirse en un imperativo financiero.

#### De post-its rojos a bombillas verdes: El nacimiento de la estrategia

Con el diagnóstico clínico terminado, procedí a la fase de **Identificación de Oportunidades Estratégicas**. "Caminé" por los mapas una última vez, pero ahora con una mirada propositiva. Donde antes había post-its rojos de dolor, empecé a colocar post-its verdes y bombillas de oportunidad. 

Identifiqué 5 ejes de intervención que se volvieron el corazón de mi propuesta:
1.  **Unificación Total:** Eliminar la división entre el sitio principal y el portal de pacientes. Un solo punto de entrada, una sola experiencia.
2.  **Portal de Resultados Universal:** Integrar laboratorio, radiología y cualquier estudio futuro en una sola vista cronológica y clara.
3.  **Agendamiento Integral:** Expandir la funcionalidad de citas a todas las especialidades, permitiendo al paciente elegir médico y horario sin mediación humana.
4.  **Gestión de Perfiles Familiares:** Permitir que cuidadores como Sofía gestionen la salud de sus dependientes desde una sola cuenta.
5.  **Comunicación Proactiva:** Implementar notificaciones automáticas para resultados listos, eliminando la necesidad de que el paciente "entre a ver si ya está".

Estas no eran ocurrencias; eran respuestas directas a los quiebres que el mapa había expuesto con una claridad brutal.

#### Blindaje mediante la validación focalizada

A pesar de que este mapeo fue un esfuerzo individual de síntesis, sabía que no podía avanzar sin el **buy-in** de quienes viven la operación diaria. Organicé sesiones de validación cortas y dirigidas con el Product Owner, un médico líder y el equipo de atención al cliente. No les pedí que diseñaran conmigo, sino que validaran la "verdad" del mapa.

Presentarles el diagrama de Miro fue un momento revelador. Ver a un médico señalar un quiebre de canal y decir "sí, mis pacientes siempre se quejan de eso" fue la validación definitiva. Estas sesiones no solo confirmaron la precisión de mis flujos, sino que alinearon a los stakeholders bajo una misma visión. Por primera vez, todos veían el mismo problema. El mapa del ecosistema dejó de ser mi entregable para convertirse en el mapa de guerra del equipo. Teníamos el diagnóstico; ahora necesitábamos blindar esta estrategia antes de empezar a mover un solo pixel de la nueva arquitectura.


El mapa del ecosistema había dejado al descubierto las vergüenzas del sistema actual, pero esa misma claridad generó una nueva e inmediata tensión: la resistencia al cambio de las áreas técnicas que custodiaban los silos de información. Sabía que tener la razón desde el diseño no bastaba para derribar los muros entre el portal de radiología y el sitio principal. El siguiente desafío no era creativo, sino político y documental: debía transformar este mapa de oportunidades en un blindaje estratégico tan sólido que ninguna restricción técnica pudiera frenar la unificación de la plataforma. Tenía que prepararme para defender esta visión ante los guardianes del sistema en el paso más crítico de la fase de definición.

---

### Parte 4: El Blindaje Estratégico Documentación y Validación con Stakeholders

#### La traducción del caos: Del lienzo infinito al artefacto de persuasión

El mapa del ecosistema en Miro era una pieza de ingeniería visual de la que me sentía orgulloso, pero sabía que, en su estado bruto, era un arma de doble filo. Tenía frente a mí un lienzo masivo, lleno de interconexiones, *swimlanes* que cruzaban procesos físicos y digitales, y cientos de post-its que documentaban cada micro-frustración del paciente. Sin embargo, para un director de hospital o un jefe de sistemas con la agenda saturada, ese lienzo era ruido. Mi reto no era solo haber "visto" el problema, sino traducirlo a un formato que no permitiera la indiferencia. El mapa no podía quedarse como un ejercicio de diseño; tenía que transformarse en un acta de acusación técnica contra la fragmentación del Centro Médico ABC.

Como responsable del proyecto, entendí que la fase de visualización debía morir para dar paso a la fase de persuasión. No bastaba con saber que el portal `misaludabc.abchospital.com` era un callejón sin salida para quien buscaba algo más que una radiografía; tenía que blindar ese hallazgo con una documentación tan sólida que ninguna restricción presupuestaria o técnica pudiera ignorarlo. Pasé de ser el cartógrafo del ecosistema al estratega que preparaba el terreno para la batalla de la arquitectura de información. La complejidad que había mapeado era real, pero mi éxito dependía de mi capacidad para aterrizarla en artefactos que los stakeholders pudieran digerir, discutir y, finalmente, firmar como la verdad absoluta de la institución.

#### El rigor de la exportación: Blindando la integridad del diagnóstico

Mi primera tarea técnica fue la exportación y el aseguramiento de la legibilidad. Parece un paso administrativo, pero en un ecosistema tan denso, es una decisión de diseño crítica. El mapa de Miro contenía capas de información que iban desde la acción más simple del paciente hasta los sistemas de soporte de *backstage* que yo había inferido tras las auditorías técnicas. Realicé una exportación en PDF de ultra-alta resolución, pero no lo hice como un bloque único e inmanejable.

Decidí estructurar el archivo mediante "vistas" o capas visuales. Sabía que si le entregaba a un médico el mapa completo, se perdería en la maraña de flechas. En lugar de eso, preparé versiones del PDF que hacían foco en momentos específicos del viaje. Me aseguré de que la leyenda fuera el ancla de todo el documento: los iconos de "bombilla" para las oportunidades estratégicas y los post-its rojos para los puntos de dolor debían saltar a la vista sin necesidad de explicación. Cada transición entre canales —como el momento exacto en que un paciente abandonaba el sitio principal `centromedicoabc.com` para perderse en el subdominio de radiología— estaba marcada con una severidad visual que gritaba "quiebre de experiencia". Esta integridad técnica del artefacto era mi primer escudo; si alguien cuestionaba un hallazgo, el mapa debía ser capaz de defenderse solo mediante su claridad forense.

#### La redacción del informe forense: Transformando la fricción en falla operativa

Tras asegurar la calidad visual, me encerré a redactar el resumen ejecutivo. No quería un documento largo que nadie leyera, así que me autoimpuse un límite de tres páginas de alta densidad. Mi objetivo era transformar los datos cualitativos en argumentos de negocio. Para ello, utilicé los perfiles que había mapeado con tanta meticulosidad, dándoles voz en el informe para que los stakeholders no vieran "usuarios", sino personas con nombres y dolores específicos.

*   **El caso de Elena:** Utilicé su perfil para ilustrar la brecha de accesibilidad. Elena, una paciente crónica con poca destreza tecnológica, representaba el fracaso de la comunicación unificada. Documenté cómo la falta de claridad sobre dónde encontrar sus análisis de sangre la obligaba a depender de su hija o a llamar al hospital en un estado de ansiedad. No era un problema de "UX"; era un problema de autonomía del paciente.
*   **La irritación de Ariel:** Ariel fue mi ejemplo de eficiencia frustrada. Un profesional que buscaba autoservicio y que, en pleno 2021, se encontraba con que el portal solo servía para ver placas de tórax pero no para agendar una cita con un internista. Narré su viaje como una pérdida de tiempo operativa: cada vez que Ariel no podía autogestionarse en la web, terminaba llamando al Call Center, lo que representaba un costo directo para el hospital.
*   **El agotamiento de Sofía:** Ella era el perfil más complejo. Como cuidadora, Sofía gestionaba la salud de su hijo y de su madre. Documenté cómo la plataforma actual la obligaba a realizar un "malabarismo" de sesiones y llamadas telefónicas porque no existía una gestión familiar unificada.

Al conectar estas historias con los datos de mi auditoría, el resumen ejecutivo dejó de ser un reporte de diseño para convertirse en un diagnóstico forense de una infraestructura digital obsoleta. Demostré que la fragmentación no era un "detalle estético", sino una falla operativa grave que degradaba la percepción de excelencia del Centro Médico ABC.

#### La narrativa de la tensión: Estructurando la defensa ante los líderes

Con el mapa y el resumen listos, el siguiente paso fue estructurar la presentación en Google Slides. No quería que fuera una revisión de "paso a paso" de lo que hice; quería que fuera una narrativa de tensión y resolución. Diseñé las diapositivas para llevar a los stakeholders por un viaje emocional y racional. Empecé por las "vergüenzas" del sistema actual: mostré capturas de pantalla de la desconexión total entre el sitio institucional y el portal de pacientes, subrayando cómo el usuario se sentía expulsado del ecosistema.

Utilicé el concepto de "comunicar la complejidad y la visión" como eje central. En una diapositiva clave, coloqué el mapa del ecosistema actual —lleno de quiebres y post-its rojos— frente a las 10 oportunidades estratégicas que había identificado. Mi argumento era simple pero letal: no estábamos rediseñando una web; estábamos construyendo el tejido conectivo que el hospital había perdido. Presenté la unificación de resultados y el agendamiento integral no como "funcionalidades deseadas", sino como la única salida viable para reducir la carga sobre el Call Center y recuperar la confianza de pacientes como Ariel o Sofía. Esta estructura de presentación me permitió "acorralar" amigablemente a la audiencia, llevándolos a la conclusión inevitable de que el *statu quo* era insostenible.

#### En la sala con los expertos: Validando el quiebre sistémico

Llegó el momento de las sesiones de validación focalizada. No busqué una aprobación masiva; seleccioné quirúrgicamente al Product Owner, a un médico líder con sensibilidad hacia el paciente y a un responsable de atención al cliente. Mi tono en estas reuniones no fue el de un diseñador pidiendo opinión, sino el de un consultor confirmando un diagnóstico. "He mapeado que el paciente, tras fallar en la web, llama al Call Center y espera un promedio de 8 minutos para una cita que debería tomar 30 segundos online. ¿Es esto correcto en su operación diaria?", preguntaba mientras señalaba el quiebre en el mapa.

Fue un interrogatorio técnico necesario. Ver al médico asentir y decir: "Sí, mis pacientes llegan al consultorio quejándose de que no pudieron ver sus análisis de sangre en el portal de radiología", fue el momento en que el mapa ganó su peso institucional. Estas sesiones me permitieron refinar los *swimlanes* del *backstage*. Descubrí matices sobre cómo los sistemas internos de laboratorio y radiología no se hablaban entre sí, lo que justificaba visualmente por qué el paciente experimentaba esa fragmentación. No estaba co-creando el mapa con ellos; estaba usando su experiencia para blindar mi investigación. El mapa dejó de ser una propuesta de diseño para convertirse en "la verdad de la institución".

#### De la visión personal a la verdad institucional

El cierre de esta actividad fue el momento de mayor claridad estratégica de toda la Fase 1. Tras integrar el feedback de las sesiones de validación, realicé los ajustes finales en Miro, refinando las conexiones y asegurando que cada punto de dolor estuviera respaldado por un testimonio o un dato operativo. El resultado no fue solo un diagrama bonito; fue una herramienta de comunicación poderosa que alineó a todos los niveles del proyecto.

Logré que el equipo directivo entendiera que el problema no era la falta de un botón, sino un ecosistema roto. El mapa del ecosistema y los viajes de Elena, Ariel y Sofía se convirtieron en el marco de referencia para todo lo que vendría después. Había construido un caso sólido para el rediseño total, eliminando cualquier duda sobre la necesidad de unificar el portal de paciente. Teníamos el diagnóstico validado, el *buy-in* de los líderes y una hoja de ruta clara basada en oportunidades reales de impacto. Estábamos listos para dejar de analizar el pasado y empezar a definir el futuro de la arquitectura de información.

> **Insight de Diseño:** El mapa del ecosistema es el único artefacto capaz de silenciar las opiniones subjetivas de los stakeholders. Cuando visualizas el dolor del usuario cruzado con la ineficiencia operativa del negocio, la discusión deja de ser sobre "qué nos gusta" y pasa a ser sobre "qué necesitamos arreglar para sobrevivir".

**Reflexión final:**
Esta actividad fue el punto de inflexión donde el proyecto dejó de ser una serie de tareas de investigación para convertirse en una estrategia de producto coherente. Aprendí que la verdadera labor de un diseñador senior no termina en el análisis, sino en la capacidad de sintetizar esa complejidad para que otros puedan tomar decisiones valientes. Al finalizar el mapeo, no solo tenía un diagnóstico de las fallas del Centro Médico ABC, sino que había logrado que la institución se viera a sí misma en el espejo y aceptara que el cambio era imperativo; ese consenso fue el valor más grande que pude aportar antes de trazar la primera línea de la nueva arquitectura.

---

