# Fase 1: Descubrimiento e Investigación Profunda (Empatizar y Definir)

## Actividad 01: Investigación Primaria con Usuarios

> Esta actividad constituye el pilar fundamental de la Fase 1, centrada en obtener una comprensión forense de las necesidades, dolores y expectativas de los pacientes, familiares y personal del Centro Médico ABC. A través de un enfoque mixto que combina entrevistas contextuales cualitativas y encuestas cuantitativas, se diagnosticó una fragmentación crítica entre el sitio principal y el portal de radiología, una usabilidad deficiente (SUS 45/100) y una demanda masiva de agendamiento integral. El proceso culmina en la creación de artefactos estratégicos (Personas, CJMs, HMWs y Requisitos MoSCoW) que dictan el norte del rediseño.

### Parte 1: Arquitectura de la Empatía Planificación y Diseño de la Investigación

#### La fragmentación como punto de partida

Validar el brief fue solo el primer paso; la verdadera tensión surgió cuando entendí que no estábamos diseñando un sitio nuevo, sino intentando unir dos islas digitales que no se hablaban entre sí. En aquel momento, a inicios de 2021, la presencia digital del Centro Médico ABC era un archipiélago: por un lado, `centromedicoabc.com` funcionaba como un escaparate institucional y, por otro, el portal "Mi Salud ABC" operaba bajo un subdominio totalmente distinto, enfocado casi exclusivamente en radiología. Mi razonamiento estratégico fue inmediato: no podíamos proponer una sola línea de diseño sin entender primero la profundidad de esa grieta.

Diseñar sobre suposiciones en un entorno de salud es una irresponsabilidad. Necesitaba establecer un marco de **Empatía** dentro de la metodología de Design Thinking que fuera lo suficientemente robusto para desmantelar las ineficiencias históricas. No buscaba opiniones superficiales sobre si el sitio era "bonito", buscaba entender la fricción visceral de un paciente que, en medio de una preocupación médica, no lograba encontrar un puente lógico entre la información del hospital y sus propios resultados clínicos. Esta fase de planificación no fue un trámite administrativo, fue la construcción del aparato de diagnóstico que nos permitiría operar la arquitectura de información con precisión quirúrgica.

#### Definición de objetivos: Más allá de la superficie

Establecí los pilares de la investigación con una intención clara: identificar no solo los puntos de dolor evidentes, sino las necesidades no cubiertas que el sistema actual ignoraba por completo. Mi objetivo no era simplemente "preguntar", sino diagnosticar por qué el agendamiento integral de citas y la consulta de resultados eran procesos tan fragmentados. 

Me interesaba explorar el contexto de uso real: el "cuándo, dónde y por qué". ¿Un familiar accede al portal desde su móvil en la sala de espera o un paciente crónico intenta revisar su historial desde una computadora de escritorio con una conexión inestable? Sabía que en 2021, "Mi Salud ABC" era una herramienta limitada que dejaba fuera una visión integral de la salud del paciente. Por ello, tracé como objetivo prioritario recopilar historias y escenarios de uso que ilustraran la frustración de quienes necesitaban algo más que placas de radiología. Necesitaba que los datos nos dijeran qué esperaba el usuario de una plataforma de salud ideal antes de que nosotros intentáramos definirla.

#### Ingeniería de la muestra: El espectro completo del Centro Médico ABC

Para que los hallazgos tuvieran validez estadística y cualitativa, diseñé una muestra que cubriera todos los ángulos de la experiencia hospitalaria. No me servía un grupo homogéneo; necesitaba fricción. Articulé el reclutamiento para obtener la participación de **15 a 20 pacientes** con una diversidad generacional crítica: desde jóvenes de 25 años con altas expectativas digitales hasta adultos mayores de más de 66 años que podrían enfrentar barreras de accesibilidad.

Esta muestra debía reflejar la realidad operativa del hospital, por lo que incluí:
*   **Pacientes de ambos campus (Observatorio y Santa Fe):** Para detectar si existían diferencias en la percepción del servicio digital según la ubicación física.
*   **Diversidad en afinidad tecnológica:** Clasifiqué a los usuarios en niveles bajo, medio y alto de destreza digital para asegurar que el nuevo diseño fuera inclusivo.
*   **Familiares y cuidadores (5 a 7 participantes):** Aquellos que gestionan la salud de otros y que a menudo son los usuarios más intensivos de las plataformas de agendamiento.
*   **Perspectiva institucional (8 a 10 miembros del personal):** Este fue un movimiento clave. Integré a agentes de Call Center, personal de Admisiones, Enfermería y TI. Ellos son el primer frente de contención; son quienes reciben las quejas cuando la web falla y quienes mejor entienden los "parches" que los pacientes inventan para navegar el sistema actual.

#### El guion como mapa, no como frontera

La elaboración de los instrumentos de indagación fue un proceso de calibración constante. En Google Docs, redacté guiones semi-estructurados adaptados para cada segmento. El **Rapport** era fundamental: en salud, la confianza se construye en los primeros cinco minutos. El guion comenzaba con preguntas abiertas sobre su relación general con la tecnología para luego aterrizar en la interacción específica con las plataformas del CM ABC.

Me enfoqué en tareas críticas: agendar una cita, buscar un médico especialista o intentar interpretar un resultado. Lo que buscaba no era una respuesta de "sí o no", sino entender los "éxitos y fracasos". Una de las preguntas más reveladoras que incluí fue sobre las **soluciones alternativas**: ¿Qué hacían cuando la web no les daba lo que necesitaban? Si la respuesta era "terminé llamando por teléfono después de 15 minutos de intentarlo en la web", ahí teníamos documentado el costo operativo real de una mala experiencia de usuario. Estos guiones estaban diseñados para ser flexibles, permitiendo que la conversación fluyera hacia donde el dolor del usuario fuera más agudo.

#### Blindaje ético y logística de precisión

Para un proyecto de esta envergadura, la infraestructura logística debía ser impecable. Configuré un ecosistema basado en herramientas que permitieran la colaboración en tiempo real: Google Meet para las sesiones remotas (esenciales en el contexto de 2021), Google Calendar para coordinar las agendas de pacientes y personal médico, y **Notion** para una toma de notas colaborativa donde un segundo observador podía capturar insights mientras yo facilitaba la sesión.

El aspecto ético no fue una nota al pie. Diseñé un Formulario de Consentimiento Informado que explicaba con total transparencia el uso de las grabaciones y garantizaba el anonimato. En el sector salud, la privacidad de los datos es sagrada, y blindar este proceso era vital para que los participantes se sintieran cómodos compartiendo sus frustraciones reales. Además, implementé un sistema de incentivos mediante tarjetas de regalo como reconocimiento al tiempo invertido; sesiones de 60 a 75 minutos requieren un nivel de concentración que merece ser valorado. El uso de **Screeners** (formularios de filtrado) me permitió asegurar que cada minuto de entrevista fuera con el perfil exacto que necesitábamos.

#### El imperativo de la observación: Por qué el testimonio no basta

Como diseñador, he aprendido que lo que la gente dice que hace rara vez coincide con lo que realmente hace. Por eso, decidí que el componente contextual de las entrevistas fuera innegociable. Pedí a los participantes que compartieran su pantalla para realizar una **indagación contextual** en tiempo real. 

> El testimonio verbal es memoria editada; la observación del comportamiento es evidencia cruda.

Ver a un usuario dudar durante tres segundos antes de hacer clic en un enlace mal etiquetado, o ver cómo su puntero del mouse recorre la pantalla buscando desesperadamente el acceso a "Mi Salud ABC" sin éxito, vale más que mil encuestas de satisfacción. Este enfoque nos permitió realizar una auditoría de comportamiento en vivo. No estábamos evaluando al usuario, estábamos evaluando cómo la interfaz le fallaba. Esta técnica fue la que realmente empezó a revelar los problemas de usabilidad que los pacientes ni siquiera sabían verbalizar porque ya se habían acostumbrado a que "la web de los hospitales es difícil".

#### Reflexión: El fin de las suposiciones de escritorio

Esta fase de planificación y diseño de la investigación fue el antídoto contra el sesgo de confirmación del equipo. A menudo, los stakeholders creen saber qué es lo que falla, pero solo cuando diseñas una muestra tan diversa y un método de observación tan directo, te enfrentas a la realidad sin filtros. Al cerrar esta etapa de preparación, sentí que finalmente teníamos el control de la narrativa: ya no íbamos a diseñar para "el paciente" como un concepto abstracto, sino para personas con nombres, edades y frustraciones específicas que ya estaban documentadas en nuestros guiones. Estábamos listos para dejar de planificar y empezar a escuchar.


Teníamos los guiones listos y la muestra confirmada, pero nada me preparó para la primera sesión de pantalla compartida. El rigor de la planificación se enfrentó de golpe con la realidad de un paciente que, frente a mis ojos, intentaba agendar una cita urgente y terminaba abandonando el proceso por un error de carga que nadie en el hospital había reportado. Ese fue el momento exacto en que entendí que las entrevistas no serían solo conversaciones, sino una inmersión profunda en un sistema que estaba fallando activamente a las personas que más lo necesitaban.

---

### Parte 2: Inmersión en la Realidad del Paciente Ejecución de Entrevistas Contextuales

#### El primer contacto con la frustración real

Teníamos los guiones listos y la muestra confirmada, pero nada me preparó para la primera sesión de pantalla compartida. El rigor de la planificación se enfrentó de golpe con la realidad de un paciente que, frente a mis ojos, intentaba agendar una cita urgente y terminaba abandonando el proceso por un error de carga que nadie en el hospital había reportado. Ese fue el momento exacto en que entendí que las entrevistas no serían solo conversaciones, sino una inmersión profunda en un sistema que estaba fallando activamente a las personas que más lo necesitaban. Mi enfoque como diseñador cambió en ese instante: dejé de buscar validación para mis hipótesis y empecé a buscar los puntos de quiebre donde la tecnología se convertía en una barrera para la salud.

Pasar de la teoría del "paciente ideal" a la observación del "paciente real" navegando en un ecosistema fragmentado fue un ejercicio de humildad profesional. No me interesaba lo que los usuarios decían que hacían; necesitaba ver lo que realmente ocurría cuando sus manos interactuaban con la interfaz. Sabía que para que este rediseño tuviera éxito, debía documentar no solo el clic fallido, sino la micro-expresión de derrota del usuario al no encontrar sus resultados.

#### El filtro de la realidad: Reclutamiento y diversidad

El reclutamiento no fue un trámite administrativo, sino una maniobra estratégica para blindar la validez de los hallazgos. Colaboré estrechamente con el equipo de marketing del Centro Médico ABC para acceder a los **Paneles de Pacientes** y a sus bases de datos internas. No buscábamos volumen, sino representatividad forense. Implementé un *screener* —un formulario de filtrado corto pero incisivo— para asegurar que la muestra no estuviera sesgada por usuarios puramente tecnológicos o de un solo perfil demográfico.

Logré articular una muestra diversa que incluía:
*   **10 Pacientes:** Con un rango de edad desde los 25 hasta más de 66 años, cubriendo desde nativos digitales hasta personas con baja afinidad tecnológica, y usuarios recurrentes de ambos campus (Observatorio y Santa Fe).
*   **5 Familiares y Cuidadores:** Esas figuras invisibles pero críticas que gestionan la salud de otros y que a menudo sufren más la fricción digital que el propio paciente.
*   **9 Miembros del Personal del CM ABC:** Desde agentes de Call Center que reciben el impacto directo de las quejas, hasta personal de enfermería y TI que intentaban, con herramientas limitadas, subsanar las deficiencias del sistema.

El envío de los formularios de consentimiento informado fue mi primer punto de contacto real. No lo traté como un requisito legal, sino como el inicio del *rapport*. Quería que cada participante supiera que su frustración era nuestra materia prima para el cambio. Establecer esa confianza fue lo que permitió que, más tarde, se sintieran cómodos compartiendo sus pantallas y sus errores más honestos durante sesiones que se extendieron hasta los 75 minutos.

#### El laboratorio de lo cotidiano: La técnica del 'Think Aloud'

En el contexto de 2021, la mayoría de nuestras sesiones se realizaron vía **Google Meet**. Esta limitación técnica la convertí en una ventaja metodológica: el entorno natural del usuario. Al estar en sus casas, usando sus propios dispositivos, la fricción que observábamos era la fricción real, no una simulada en un laboratorio. Mi ritual de facilitación se centró en la técnica de **Think Aloud** (pensar en voz alta). 

> "No me digas qué crees que hace el botón, cuéntame qué estás intentando lograr y qué esperas que pase cuando hagas clic". 

Esta instrucción era vital. Mientras yo facilitaba y observaba cada vacilación del cursor, un compañero tomaba notas detalladas en **Notion**. Grabamos cada sesión (previo consentimiento) para asegurar que ninguna inflexión de voz se perdiera. Ver a diez pacientes distintos enfrentarse a la misma arquitectura de información fue revelador. El cursor se movía errático, buscando un rastro de lógica en un mapa que nosotros, desde nuestras oficinas, creíamos que estaba claro.

#### La arquitectura de la confusión: Fragmentación en tiempo real

La observación de comportamientos críticos despejó cualquier duda sobre el problema principal: la fragmentación absoluta del ecosistema digital. Fui testigo de cómo los usuarios se perdían en el limbo entre `centromedicoabc.com` (el sitio principal) y `misaludabc.abchospital.com` (el portal de radiología). 

Uno de los hallazgos más dolorosos fue ver a un paciente buscar sus resultados de laboratorio en el portal de radiología. Pasó cinco minutos navegando por menús laterales, refrescando la página, convencido de que él estaba haciendo algo mal. Cuando finalmente se rindió, pronunció una frase que se convirtió en el epitafio de la plataforma antigua: *"Es como si fueran dos hospitales diferentes en línea"*. 

Esta desconexión no era solo estética; era funcional y emocional. El portal de radiología, basado en un sistema externo, no hablaba con el sitio principal. Los pacientes esperaban una experiencia unificada y recibían un laberinto de subdominios. Esta fragmentación generaba un volumen masivo de llamadas al Call Center, algo que confirmé al entrevistar al personal interno, quienes pasaban gran parte de su jornada "traduciendo" la web a los pacientes confundidos.

#### El rastro emocional del error: Sondeo e insights profundos

Utilicé el guion semi-estructurado como una red, no como una camisa de fuerza. Cuando detectaba un momento de tensión, abandonaba las preguntas preparadas y aplicaba técnicas de sondeo profundo. *"¿Cómo te hizo sentir esa situación?"* o *"¿Qué esperabas encontrar exactamente detrás de ese enlace?"*. 

Estas preguntas me permitieron descubrir que la frustración no era solo por la usabilidad, sino por la falta de transparencia. Por ejemplo, identifiqué que el **75% de los usuarios** que intentaban agendar una cita con un especialista en línea terminaban abandonando el proceso. No era solo porque el formulario fuera largo, sino porque el sistema no les daba la certeza de que la cita realmente se estaba procesando. 

> El insight senior aquí fue entender que en salud, la incertidumbre es igual a ansiedad. Un error de carga en una tienda de ropa es una molestia; un error de carga al intentar agendar una cita con un cardiólogo es una crisis de confianza.

#### La síntesis en caliente: Protocolo de debriefing

Para evitar que la carga cognitiva de tantas entrevistas nublara mi juicio, implementé un protocolo de **Debriefing Inmediato**. Al terminar cada sesión, dedicaba 20 minutos a una sesión rápida de vaciado en **FigJam** con el tomador de notas. No esperábamos al final de la semana para analizar los datos; lo hacíamos mientras la voz del usuario aún resonaba en nuestros oídos.

Este ejercicio nos permitió:
1.  **Ajustar los guiones:** Si notábamos que una pregunta era ambigua, la corregíamos para la siguiente entrevista.
2.  **Refinar hipótesis:** Empezamos a ver patrones claros sobre la necesidad de un portal unificado mucho antes de terminar las 24 entrevistas.
3.  **Capturar "joyas":** Citas textuales y reacciones viscerales que luego serían fundamentales para convencer a los stakeholders de la urgencia del cambio.

Esta fase de ejecución transformó mi perspectiva. Ver a un paciente de 65 años luchar por encontrar un botón de "agendar" que estaba escondido bajo tres niveles de navegación me movió de una visión estética a una puramente funcional y humana. La accesibilidad dejó de ser un checklist técnico para convertirse en un imperativo moral. Al cerrar la última entrevista, mi Miro estaba saturado de notas adhesivas y mi cabeza llena de historias de personas reales. Sabía exactamente qué estaba roto; ahora necesitaba saber qué tan profundo llegaba esa grieta en el resto de la población.

#### Próximo paso:

Al terminar la última entrevista, me invadió una sensación de urgencia: tenía historias poderosas de 24 personas, pero sabía que para mover la aguja en una institución del tamaño del Centro Médico ABC, necesitaba más que anécdotas. Las entrevistas habían revelado una fragmentación crítica y una desconfianza latente, pero ahora el desafío era otro: ¿eran estos problemas casos aislados o representaban la realidad de los miles de pacientes que usaban la plataforma cada mes? Necesitaba transformar estas intuiciones cualitativas en datos duros e incuestionables que nadie pudiera ignorar en la mesa de decisiones.

---

### Parte 3: Dimensionando El Problema Diseño y Despliegue de Encuestas Cuantitativas

#### El peso del dato frente a la elocuencia del hallazgo

Al cerrar la ronda de 24 entrevistas, me encontraba en una posición paradójica. Por un lado, tenía una claridad absoluta sobre el "qué" y el "porqué": las historias de los pacientes eran desgarradoras en su cotidianidad, desde la frustración de no encontrar un resultado de laboratorio hasta la resignación de tener que llamar por teléfono porque la web no permitía agendar una cita con un especialista. Sin embargo, en una institución de la envergadura del Centro Médico ABC, la empatía cualitativa es solo la mitad de la batalla. Sabía que, para mover la aguja estratégica y justificar la inversión de un rediseño integral, necesitaba transformar esas voces individuales en métricas de negocio irrefutables. Las anécdotas abren puertas, pero los datos cierran presupuestos.

Mi razonamiento en este punto fue puramente táctico: las entrevistas nos habían dado las hipótesis, pero la encuesta nos daría la magnitud. Necesitaba saber si la confusión entre el sitio principal y el portal de radiología era un tropiezo de unos pocos o una barrera sistémica que afectaba a miles. No podía permitir que el proyecto se percibiera como un ejercicio estético basado en "opiniones de unos cuantos usuarios". Por ello, orquesté una fase de investigación cuantitativa diseñada para dimensionar el problema con precisión quirúrgica, estableciendo una línea base de usabilidad que nadie pudiera ignorar.

#### La arquitectura del cuestionario: Diseño con propósito

Elegí **Google Forms** como plataforma de despliegue no por su sofisticación técnica, sino por su ubicuidad y baja fricción. En el contexto de salud, la accesibilidad es el requisito número uno; necesitaba una herramienta que cargara instantáneamente en un teléfono móvil y que no intimidara a un paciente de 70 años. Invertí una semana entera en la arquitectura de la encuesta, asegurándome de que cada pregunta fuera un ladrillo sólido para nuestra argumentación futura.

Decidí estructurar el cuestionario en bloques lógicos para evitar la fatiga cognitiva:

*   **Perfilado y Comportamiento:** Empecé con lo básico pero esencial. No solo quería saber la edad o el género, sino el "campus principal de atención" (Observatorio vs. Santa Fe) y la frecuencia de uso. Mi objetivo aquí era entender si el problema era transversal o si se acentuaba en ciertos segmentos demográficos o niveles de afinidad tecnológica.
*   **Validación de Tareas Críticas:** Traduje los hallazgos de las entrevistas en preguntas de opción múltiple y escalas de satisfacción. Si en las entrevistas escuché que agendar citas era un calvario, en la encuesta pregunté específicamente por la facilidad para encontrar médicos o agendar laboratorios.
*   **La Métrica Maestra (SUS):** Decidí incluir el **System Usability Scale (SUS)**. Como diseñador senior, sé que no hay mejor manera de comunicar la mala salud de un producto a un stakeholder que con un número estandarizado. El SUS me permitiría decir, con validez científica, qué tan "pobre" o "excelente" era la experiencia actual.
*   **Priorización Forzada:** Utilicé preguntas de ranking para que los usuarios nos dijeran qué funcionalidad les urgía más. Esto fue vital para blindar el futuro roadmap del MVP; no quería diseñar lo que nosotros creíamos necesario, sino lo que los pacientes estaban gritando por tener.

#### El rigor del piloto: Blindando la validez

Antes de lanzar la encuesta a la base de datos masiva del hospital, impuse una pausa para realizar una **prueba piloto con 10 personas internas**. Este paso es frecuentemente omitido por las prisas, pero en mi experiencia, es donde se salvan los proyectos de investigación.

Recluté a personal del CM ABC que no estuviera involucrado en el proyecto para que respondieran el cuestionario frente a mí. Mi objetivo no era obtener sus datos, sino observar su comportamiento ante las preguntas. Descubrí que términos que para nosotros eran obvios, como "portal de radiología", generaban dudas en algunos usuarios que simplemente lo llamaban "donde veo mis placas". Gracias a este piloto, calibré la redacción, ajusté el flujo de las preguntas y eliminé dos secciones que hacían la encuesta demasiado larga. Mi regla de oro fue clara: si el usuario tarda más de 12 minutos en responder, la calidad del dato cae en picada. La brevedad no era un favor al usuario, era una salvaguarda para la integridad de mi investigación.

#### La orquestación del despliegue: Capturando la realidad en tiempo real

Con el instrumento validado, el siguiente reto fue la distribución. No podíamos depender de un solo canal si queríamos una muestra representativa y libre de sesgos. Trabajé estrechamente con el equipo de marketing y TI del hospital para activar una estrategia de distribución multicanal que garantizara que llegáramos tanto al paciente digitalmente nativo como al que solo entra a la web por necesidad extrema.

1.  **Interceptación en el Sitio (Banners y Pop-ups):** Configuramos un banner discreto pero visible en `centromedicoabc.com`. Esta fue nuestra fuente de "datos frescos": personas que estaban experimentando el producto en ese preciso momento.
2.  **Email Marketing Dirigido:** Enviamos la encuesta a las listas de correo de pacientes que habían otorgado su consentimiento para comunicaciones. Aquí buscábamos volumen y diversidad demográfica.
3.  **Redes Sociales Institucionales:** Utilizamos los canales del CM ABC para captar a aquellos usuarios que quizás no usan la web frecuentemente pero tienen una relación estrecha con la marca.

Mi meta personal era superar las **200 respuestas válidas**. Sabía que, por debajo de ese número, cualquier análisis estadístico sería visto con escepticismo por los perfiles más analíticos del hospital. La distribución no fue un proceso de "lanzar y esperar"; monitoreé la tasa de respuesta diariamente, ajustando los mensajes de los recordatorios y asegurándome de que el incentivo —un agradecimiento formal y la promesa de una mejor experiencia digital— fuera suficiente para motivar la participación sin sesgar las respuestas hacia lo excesivamente positivo.

#### El valor de la espera estratégica

Mientras las respuestas empezaban a caer en nuestra base de datos, mantuve al equipo en una tensión productiva. No permití análisis preliminares con las primeras 20 respuestas. Mi enfoque fue esperar a que la muestra fuera lo suficientemente robusta para que las correlaciones empezaran a emerger por sí solas.

Esta fase de diseño y distribución de la encuesta fue el puente necesario entre la empatía cualitativa y la estrategia de producto. Estábamos construyendo el mazo de cartas con el que jugaríamos durante todo el rediseño. Cada respuesta que entraba era una pieza de evidencia que nos permitiría decir, con total seguridad: "No estamos rediseñando esto porque nos guste un color más que otro, sino porque el 75% de sus pacientes no pueden completar la tarea más básica en su plataforma actual".

La mesa estaba puesta. Teníamos las historias y estábamos a punto de tener los números. El siguiente paso sería sentarnos frente a la montaña de datos para extraer la verdad que dictaría el futuro digital del Centro Médico ABC.

---

### Parte 4: La Voz del Paciente en Datos Análisis y Hallazgos Críticos

#### El silencio tras la tormenta de datos

El silencio que sigue a una fase de investigación de campo es engañoso. Tenía frente a mí una montaña de evidencia: 287 respuestas de encuestas en **Google Forms**, 24 entrevistas grabadas que sumaban casi 30 horas de audio y un sinfín de notas colaborativas en **Notion**. Como diseñador, ese es el momento de mayor tensión intelectual. No se trata simplemente de tabular resultados; se trata de encontrar la "verdad" del producto entre el ruido de las opiniones individuales. Mi responsabilidad no era entregar un resumen, sino un diagnóstico forense que justificara cada pixel que íbamos a mover en los meses siguientes.

La transición de la recolección al análisis fue un ejercicio de disciplina. Sabía que si me apresuraba a sacar conclusiones, caería en el sesgo de confirmación, buscando solo los datos que apoyaran mis ideas previas sobre el rediseño. Por eso, impuse un rigor metodológico absoluto: nadie empezaría a diseñar una sola pantalla hasta que hubiéramos destilado esa masa crítica en patrones de fricción indiscutibles. El objetivo era transformar esas 287 voces cuantitativas y los 24 testimonios profundos en una hoja de ruta estratégica que nadie en la organización pudiera ignorar.

#### Procesamiento forense: la limpieza de la evidencia

Mi primer paso fue técnico y árido, pero vital. Inicié con la limpieza de datos de las encuestas en **Excel**, eliminando respuestas incompletas o duplicadas que pudieran contaminar los promedios. No buscaba solo la media aritmética; buscaba la desviación. Quería entender por qué un paciente de 65 años calificaba la usabilidad de una forma tan distinta a uno de 25. Al mismo tiempo, procesé las transcripciones de las 24 entrevistas —10 pacientes, 5 familiares y 9 miembros del personal del hospital— utilizando **Otter** para agilizar la conversión de voz a texto.

Este proceso no fue solitario. Implementé sesiones de **debriefing** inmediato después de cada entrevista, donde el equipo compartía sus primeras impresiones en un tablero de **FigJam**. Esta práctica es fundamental: las hipótesis más valiosas suelen emerger en los 15 minutos posteriores a hablar con un usuario, antes de que el cansancio o el paso de los días diluyan los matices. Triangulamos lo que el personal de Call Center nos decía sobre las quejas recurrentes con lo que nosotros mismos observamos en las sesiones de pantalla compartida por **Google Meet**. Esa triangulación fue la que empezó a revelar que el problema no era estético, sino estructural.

#### La fractura de la identidad digital: dos hospitales en uno

El hallazgo más doloroso, pero también el más revelador, fue lo que denominé la "Fractura de la Identidad Digital". Al cruzar los testimonios cualitativos con el análisis de navegación, quedó claro que para el paciente, el Centro Médico ABC no existía como una entidad única en internet. La separación técnica entre el sitio institucional (`centromedicoabc.com`) y el portal de radiología (`misaludabc.abchospital.com`) creaba un abismo cognitivo.

> "Es como si fueran dos hospitales diferentes en línea", nos confesó un paciente con una mezcla de resignación y molestia. 

Esta frase se convirtió en nuestro mantra. Los usuarios se perdían en un laberinto de subdominios. Un hallazgo crítico fue descubrir que muchos pacientes entraban al portal de radiología buscando sus resultados de laboratorio, solo para encontrarse con un muro de cristal: el portal solo mostraba imágenes de rayos X o resonancias. Esta fragmentación no solo frustraba al usuario; generaba un volumen masivo e innecesario de llamadas al Call Center. Los agentes de admisiones nos confirmaron que pasaban gran parte de su jornada explicando a pacientes confundidos por qué sus análisis de sangre "no aparecían en la página". Estábamos ante un fallo sistémico de arquitectura de información que erosionaba la confianza en la excelencia clínica de la institución.

#### El colapso del agendamiento: la promesa rota de la digitalización

Cuando pasamos a analizar el flujo de transacciones, los datos cuantitativos nos entregaron una métrica devastadora que silenció cualquier duda sobre la urgencia del cambio: **el 75% de los encuestados que intentaron agendar una cita con un especialista reportaron frustración o simplemente no pudieron completar la tarea.** 

Este número no es solo una estadística; es el síntoma de un proceso de negocio roto. Técnicamente, la plataforma solo permitía el agendamiento fluido para laboratorio clínico. Para cualquier otra especialidad, el sistema se convertía en un callejón sin salida que forzaba un "fallback" al teléfono. Un paciente nos decía: *"Quiero agendar con mi cardiólogo, pero en la web solo veo para laboratorio. Termino llamando siempre"*. Este hallazgo fue crucial porque reveló que el sitio web, en lugar de ser una herramienta de eficiencia, se había convertido en un obstáculo. Estábamos perdiendo la oportunidad de capturar la intención del paciente en el momento en que esta surgía, delegando toda la carga operativa a un centro de atención telefónica ya saturado.

#### La invisibilidad de los resultados y el vacío informativo

El análisis del portal "Mi Salud ABC" reveló otra brecha crítica de expectativas. Descubrimos que el **68% de los usuarios demandaba un portal unificado para todos sus resultados médicos**. El hecho de que un paciente tuviera que trasladarse físicamente al hospital o llamar por teléfono para obtener sus análisis de sangre —mientras podía ver sus radiografías en línea— era percibido como una inconsistencia inaceptable en 2021.

Esta "invisibilidad" de la información médica generaba una ansiedad innecesaria. En las entrevistas contextuales, observamos a pacientes que navegaban repetidamente por el portal de radiología con la esperanza de que, por algún error de configuración, sus otros resultados aparecieran allí. No era solo un problema de falta de funciones; era un problema de comunicación de expectativas. El sistema no le decía al usuario: "Tus resultados de laboratorio se entregan por otra vía"; simplemente no los mostraba, dejando al paciente en un estado de incertidumbre total.

#### El veredicto del SUS: una usabilidad en estado de emergencia

Para darle un peso político e industrial a estos hallazgos, tabulé las escalas Likert de la encuesta para calcular el **System Usability Scale (SUS)**. El resultado fue un golpe de realidad para los stakeholders: la plataforma obtuvo una puntuación de **45/100**.

En el mundo del diseño de producto, un 45 es una calificación de "pobre" o, siendo más crudos, una "F" en la escala académica. Esta métrica fue mi herramienta más poderosa para defender la necesidad de un rediseño radical y no solo cosmético. No podíamos limitarnos a cambiar colores o tipografías cuando la usabilidad base estaba por debajo del estándar mínimo de aceptabilidad industrial. El SUS de 45 nos decía que la plataforma actual era, activamente, un impedimento para la salud de los pacientes y para los objetivos de negocio del hospital. Era la prueba irrefutable de que el costo de no hacer nada era mucho más alto que el costo de reconstruir la experiencia desde cero.

#### Demandas de transparencia y la necesidad de proactividad

Finalmente, el análisis cualitativo de las respuestas abiertas en la encuesta reveló dos temas que no estaban en el radar inicial del proyecto pero que resultaron ser pilares de la experiencia deseada:

*   **Transparencia en costos:** Los pacientes expresaron una frustración recurrente por no conocer el precio de un estudio o la cobertura de su seguro hasta que llegaban a la recepción del hospital. *"A veces no sé bien cuánto me va a costar hasta que llego"*, leímos repetidamente.
*   **Comunicación proactiva:** Existía una demanda masiva por notificaciones automáticas. Los usuarios no querían estar "cazando" sus resultados; esperaban que el hospital les avisara vía mensaje o correo en el momento exacto en que la información estuviera lista.

Estos hallazgos movieron la aguja de nuestro enfoque. Ya no se trataba solo de arreglar lo que estaba roto, sino de construir servicios que el paciente ni siquiera sabía que podía pedir, pero que ya estaba esperando.

#### Reflexión sobre la autoridad de la data

Mirando hacia atrás, la fuerza de esta fase de análisis no radicó en la sofisticación de las herramientas, sino en la **triangulación**. Fue la capacidad de conectar ese 75% de fallo en agendamiento con la historia de la madre que gestionaba la salud de sus tres hijos y terminaba llorando de frustración al teléfono. Los datos cuantitativos nos dieron la escala del problema, pero las historias cualitativas nos dieron el porqué.

Esta consolidación del informe de hallazgos no fue el fin de la investigación, sino el nacimiento de nuestra estrategia. Teníamos el diagnóstico clínico de la plataforma: estaba fragmentada, era incompleta y tecnológicamente sorda a las necesidades del móvil (donde el **85% de nuestros usuarios** intentaba interactuar con nosotros). Con este informe bajo el brazo, ya no estábamos diseñando por intuición; estábamos diseñando por necesidad médica y operativa.


La montaña de datos ya tenía forma, pero seguía siendo abstracta para muchos miembros del equipo y stakeholders. Tenía el diagnóstico, pero me faltaba ponerle rostro y nombre a esos problemas para que cada decisión de diseño se sintiera personal. El desafío ahora era transformar esos porcentajes y citas en arquetipos vivos que pudieran caminar por los pasillos del hospital; estaba a punto de descubrir que un solo "Mapa de Viaje" bien trazado podía revelar fricciones que ni siquiera el SUS más bajo había logrado capturar.#### Próximo paso:

La montaña de datos ya tenía forma, pero seguía siendo abstracta para muchos miembros del equipo y stakeholders. Tenía el diagnóstico, pero me faltaba ponerle rostro y nombre a esos problemas para que cada decisión de diseño se sintiera personal. El desafío ahora era transformar esos porcentajes y citas en arquetipos vivos que pudieran caminar por los pasillos del hospital; estaba a punto de descubrir que un solo "Mapa de Viaje" bien trazado podía revelar fricciones que ni siquiera el SUS más bajo había logrado capturar.

---

### Parte 5: Humanizando la Data Construcción de Personas y Mapas de Viaje

#### La metamorfosis de la data en arquetipos vivos

Tenía sobre mi mesa virtual cientos de respuestas de encuestas en Google Forms y decenas de horas de transcripciones en Otter. El análisis cuantitativo nos había dado el "qué" —un SUS de 45/100 que gritaba urgencia—, pero los números son fríos y no sangran. Mi mayor temor en este punto era que los hallazgos se quedaran en un reporte estático que nadie leería con empatía real. Como diseñador, sabía que para que el equipo de desarrollo y los stakeholders del Centro Médico ABC sintieran la urgencia del cambio, necesitaba transformar esos porcentajes en personas con nombres, miedos y una paciencia que se agotaba en cada clic fallido.

La transición hacia la síntesis no fue un proceso automático de resumen; fue un ejercicio de ingeniería de requisitos humanizada. Necesitaba "Personas" que no fueran simples perfiles de marketing con fotos de stock, sino herramientas de estrés para nuestro futuro diseño. Si una solución no funcionaba para Elena o para Ariel, simplemente no era una solución válida. Me encerré en Miro para iniciar un mapeo de afinidad masivo, organizando post-its digitales que agrupaban dolores recurrentes bajo categorías de comportamiento y contexto de uso. Fue ahí, entre carriles de "Acciones", "Pensamientos" y "Emociones", donde la fragmentación del ecosistema digital dejó de ser un concepto técnico para convertirse en una herida abierta en la experiencia del paciente.

#### Elena: La brecha de la independencia perdida

El primer arquetipo que destilé fue **Elena**, una paciente de 60 años con una condición cardíaca crónica. Ella representaba el segmento más vulnerable y, paradójicamente, el más leal del hospital. Al analizar su perfil, me impactó una cita que se repetía en varias entrevistas: *"Me confunde mucho tener que buscar mis resultados en diferentes páginas. ¿No podría estar todo en un solo lugar? Mi hija siempre me tiene que ayudar"*. Esta frase no era solo una queja sobre la interfaz; era un grito por la pérdida de autonomía.

Diseñé a Elena para recordarnos que la baja afinidad tecnológica no debe ser una barrera para la salud. Su biografía revelaba a una mujer que, aunque posee un smartphone, se siente intimidada por la jerga técnica y la complejidad de la navegación. Su mayor punto de dolor era la fragmentación: entrar a `centromedicoabc.com` para buscar información y luego ser expulsada a `misaludabc.abchospital.com` solo para ver radiografías, sin rastro de sus análisis de sangre. Para Elena, el sistema actual no era una herramienta, sino un laberinto que la obligaba a depender de terceros, generando una ansiedad que ningún paciente con problemas cardíacos debería experimentar frente a una pantalla.

#### Ariel: El costo de la ineficiencia digital

En el extremo opuesto del espectro tecnológico situé a **Ariel**, un ejecutivo de marketing de 35 años. Ariel es el usuario que exige una experiencia "mobile-first" porque su vida ocurre entre reuniones y traslados. Su irritación no nacía de la confusión, sino de la pérdida de tiempo. *"No tengo tiempo para llamadas telefónicas. Necesito gestionar mis citas y acceder a mis resultados de forma rápida, desde donde esté"*, dictaba su cita clave.

Para Ariel, la plataforma pre-rediseño era un anacronismo. Su "Momento de la Verdad" más crítico ocurría cuando intentaba agendar una cita con un dermatólogo o un internista y descubría que la web solo le permitía agendar laboratorios. Esa limitación lo forzaba a regresar al canal offline, buscando un número telefónico para esperar en línea en el Call Center. Identifiqué que para este perfil, cada segundo de fricción degradaba la percepción de modernidad del hospital. Ariel no perdonaba que, en pleno 2021, tuviera que usar múltiples portales para ver un historial médico que debería estar unificado. Él era nuestro parámetro para medir la eficiencia y el autoservicio.

#### Carmen: La logística del cuidado familiar

Finalmente, articulé a **Carmen**, la cuidadora de 42 años. Ella representaba la complejidad administrativa del sistema. Carmen no solo gestionaba su salud, sino la de sus dos hijos y su madre mayor. Su lucha era multi-paciente. *"Necesito tener toda la información de mi mamá y mi hijo a la mano, en un solo lugar, para coordinar sus citas sin errores"*, explicaba con una mezcla de organización y agotamiento.

El perfil de Carmen reveló una falla sistémica en la arquitectura de cuentas: el sistema no permitía gestionar perfiles vinculados. Ella tenía que malabarear con diferentes inicios de sesión, pestañas abiertas y recordatorios manuales. Su mapa de viaje era el más denso, pues cada paso se multiplicaba por tres familiares. Carmen fue la clave para entender que el portal de paciente no debía ser una vista individual, sino un centro de mando familiar. Su frustración al no encontrar los resultados de laboratorio de su madre en el mismo lugar que las radiografías era el ejemplo perfecto de cómo la fragmentación tecnológica sobrecargaba emocionalmente a quienes ya tenían la responsabilidad del cuidado.

#### El trazado del dolor: Mapas de Viaje y fragmentación

Con estos arquetipos definidos, procedí a trazar los **Customer Journey Maps (CJM)** para visualizar el ecosistema pre-rediseño. Utilicé Miro para construir una narrativa visual de las curvas emocionales de cada usuario. El hallazgo más doloroso fue la fase de "Búsqueda de Resultados". Pude mapear cómo la esperanza inicial de Elena se transformaba en una desilusión profunda al saltar entre subdominios. La transición entre el sitio principal y el portal de radiología era una "tierra de nadie" donde el usuario se sentía abandonado por la marca.

En el mapa de Ariel, identifiqué una "irritación intensa" en el momento en que descubría que sus análisis de sangre estaban en un sistema diferente al de imagenología. No era solo un problema de enlaces; era un quiebre de la promesa digital del hospital. Al visualizar estas trayectorias, quedó claro que los "Momentos de la Verdad" —agendar una cita de especialidad y consultar resultados integrales— eran precisamente donde la plataforma colapsaba. Cada vez que el sistema fallaba, el usuario terminaba en el Call Center, saturando un canal costoso y confirmando su percepción de que la web era un "desastre" comparado con la excelencia médica presencial.

#### De la fricción a la oportunidad estratégica

Este ejercicio de mapeo no fue solo para documentar el desastre, sino para iluminar el camino de salida. Por cada punto de dolor que identifiqué en los CJM, redacté una "Oportunidad para Rediseño". La frustración de Elena por la letra pequeña y la navegación confusa se transformó en el requerimiento de una interfaz con texto legible, elementos visuales grandes y un portal unificado. La irritación de Ariel por la falta de autoservicio se convirtió en la prioridad máxima de un sistema de agendamiento integral para todas las especialidades.

La sobrecarga de Carmen nos dictó la necesidad de un dashboard de gestión familiar con notificaciones personalizables por miembro de la familia. Al cerrar este taller de síntesis, me di cuenta de que el problema del Centro Médico ABC no era puramente técnico; era una deuda de empatía sistémica. Habíamos construido silos digitales que reflejaban la estructura interna del hospital (radiología por un lado, laboratorio por otro) en lugar de reflejar el modelo mental del paciente. Estos mapas de viaje se convirtieron en el espejo donde los stakeholders no pudieron evitar ver las grietas de su propia experiencia digital.

> **Insight Senior:** Un Mapa de Viaje bien trazado es, en realidad, un mapa de la deuda de experiencia que la institución ha acumulado. No estábamos diseñando botones; estábamos reparando la confianza rota entre el paciente y su hospital.

#### Próximo paso:

Con los rostros de Elena, Ariel y Carmen grabados en la mente del equipo, la ambigüedad de la investigación empezó a cristalizar en algo mucho más severo. Ya no hablábamos de "mejorar la web", sino de resolver crisis de autonomía y eficiencia que afectaban la salud de las personas. El siguiente desafío era tomar este caos de dolores y transformarlo en un manifiesto estratégico; necesitaba definir con precisión quirúrgica cuáles serían las batallas que ganaríamos primero y cuáles serían los principios innegociables que guiarían cada píxel del nuevo ecosistema.

---

### Parte 6: El Norte Estratégico Definición de Problemas Principios y Requisitos

#### El abismo entre la empatía y la ejecución

Al cerrar los mapas de viaje de Elena, Ariel y Carmen, el tablero de Miro se sentía pesado. Teníamos cientos de notas adhesivas virtuales que gritaban frustración, pero como diseñador de producto, sabía que la empatía sin estrategia es solo sentimentalismo. Tenía frente a mí el reto más crítico de la Fase 1: destilar ese caos de dolores humanos en un plan de batalla técnico y ejecutable. No podíamos simplemente "hacer una web más bonita"; necesitábamos un norte estratégico que impidiera que el proyecto se diluyera en funcionalidades cosméticas mientras las heridas reales de los usuarios seguían sangrando.

Mi razonamiento en este punto fue forense. Si no lográbamos codificar los hallazgos de la investigación en problemas solubles y requisitos priorizados, corríamos el riesgo de sufrir un *scope creep* masivo o, peor aún, de construir una solución elegante que no resolviera la fragmentación sistémica del Centro Médico ABC. La transición de la investigación a la estrategia fue el momento en que dejé de observar el dolor para empezar a diseñar la cura. Necesitaba establecer un contrato implícito con el equipo y los stakeholders: cada píxel que dibujáramos a partir de aquí debía ser una respuesta directa a una falla documentada en el campo.

#### La disección de las fallas: Declaraciones de Problema

Para blindar el alcance, articulé seis declaraciones de problema que actuaron como el diagnóstico oficial del ecosistema digital. No las redacté como simples quejas, sino como brechas de valor que afectaban la salud y la autonomía de las personas. La más evidente era la **Fragmentación de la Experiencia Digital**: el abismo entre `centromedicoabc.com` y el portal de radiología `misaludabc.abchospital.com` estaba rompiendo el modelo mental de pacientes como Elena y Carlos, quienes no entendían por qué debían saltar entre sitios que operaban como islas.

Identifiqué también una falla crítica en la entrega de valor: el **Acceso Incompleto a Resultados**. Descubrí que el portal actual solo servía para radiología, dejando a Sofía, la cuidadora, en un limbo informativo que la obligaba a recurrir al teléfono para obtener resultados de laboratorio o consultas. A esto sumé la **Limitación en el Agendamiento**, un cuello de botella donde la web solo permitía citas de laboratorio, forzando al profesional ocupado a perder tiempo en llamadas para ver a un especialista. Finalmente, diagnostiqué la **Dificultad en la Gestión Familiar**; Sofía estaba realizando malabares con múltiples accesos para sus hijos y padres, una carga cognitiva que el sistema simplemente ignoraba. Estas declaraciones no eran negociables: definían las batallas que estábamos obligados a ganar.

#### De la herida a la oportunidad: El catalizador HMW

Una vez definidos los problemas, maniobré para transformar esa negatividad en energía creativa mediante la metodología **How Might We (HMW)**. Este paso es vital porque permite dejar de mirar el error para empezar a proyectar la solución. No quería que el equipo se sintiera abrumado por las limitaciones técnicas, sino inspirado por las posibilidades.

Formulé preguntas que actuaron como disparadores de ideación: *¿Cómo podríamos unificar el acceso a todos los servicios en una sola plataforma para que el usuario sienta que interactúa con una única entidad?* o *¿Cómo podríamos presentar los resultados médicos de forma clara y accionable, eliminando la jerga que confunde a Elena?*. También lancé el reto de la autonomía: *¿Cómo podríamos permitir que los usuarios agenden con cualquier especialista de forma tan intuitiva que no necesiten ayuda externa?*. Estas preguntas abrieron el espacio para visualizar un ecosistema donde la tecnología dejara de ser un obstáculo y se convirtiera en un aliado del bienestar. Fue el puente necesario para pasar del "qué está mal" al "qué vamos a construir".

#### Los cinco mandamientos: Principios de Diseño

Para asegurar que la ejecución no perdiera el alma en las fases siguientes, establecí cinco **Principios de Diseño** que servirían como filtros forenses para evaluar cada decisión futura. Estos no eran sugerencias estéticas, sino mandamientos estratégicos:

1.  **Confianza y Claridad:** La base de todo. Eliminamos la jerga médica compleja en favor de un lenguaje sencillo y directo. Si Elena no entiende su resultado, el diseño ha fallado.
2.  **Empoderamiento y Autonomía:** El sistema debe permitir la auto-gestión total. Desde agendar hasta cancelar, el usuario debe tener el control sin depender de un call center.
3.  **Experiencia Unificada:** Un solo ABC digital. Diseñamos para eliminar la fragmentación, creando transiciones fluidas entre el sitio informativo y el portal transaccional.
4.  **Diseño Responsivo y Accesible:** Inclusión total bajo el estándar **WCAG 2.1 AA**. Carlos y Sofía dependen del móvil; la plataforma debía ser impecable en la palma de su mano.
5.  **Calidez Humana en lo Digital:** Reflejar la empatía del trato presencial del hospital en la interfaz. No diseñamos máquinas, diseñamos interfaces de cuidado.

> **Insight Senior:** Los principios de diseño son el sistema inmunológico del proyecto. Si una funcionalidad propuesta no sobrevive a estos cinco filtros, se descarta antes de que contamine el prototipo.

#### El blindaje del MVP: Priorización MoSCoW

Finalmente, articulé la arquitectura de la solución mediante una lista de requisitos priorizada con el método **MoSCoW**. Esta fue la decisión más política y estratégica del proceso. Definí como **Must Have** el acceso unificado a todos los resultados (laboratorio e imagen), el agendamiento integral para todas las especialidades y la gestión de perfiles familiares. Estos eran los pilares que resolverían el 80% del dolor de Sofía y Elena.

En los **Should Have**, incluí las notificaciones personalizadas y la descarga de resultados en PDF, funcionalidades que elevan la experiencia pero que no detendrían el lanzamiento. Sin embargo, la decisión más difícil y madura fue definir los **Won't Have**. Decidí conscientemente no desarrollar una aplicación móvil nativa en esta fase, priorizando una web responsiva de alto rendimiento. También dejamos fuera la integración completa del expediente clínico detallado para no comprometer la seguridad y la velocidad del lanzamiento inicial. Este rigor técnico nos permitió blindar el **Producto Mínimo Viable (MVP)** contra el *scope creep*, asegurando que entregaríamos una solución robusta y útil en lugar de una promesa incompleta.

#### Reflexión final:

Este norte estratégico fue el contrato que firmé con el paciente: una promesa de que la tecnología dejaría de ser una barrera para convertirse en un aliado de su salud. Al definir los requisitos MoSCoW, aprendí que la verdadera innovación en el sector salud no reside en la complejidad técnica, sino en la claridad con la que se prioriza el bienestar del usuario sobre la ambición del sistema. Esta actividad transformó un montón de quejas en una hoja de ruta quirúrgica, dándonos la confianza necesaria para empezar a construir la arquitectura de lo que sería, finalmente, un solo Centro Médico ABC digital.

---

