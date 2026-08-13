# Fase 5: Lanzamiento y Evolución Continua Post-Lanzamiento

## Actividad 01: Planificación y Soporte al Lanzamiento

> Esta fase marca la transición crítica del producto desde un entorno controlado (UAT) hacia el mercado real, seguida de un ciclo de optimización perpetua basado en datos. La estrategia se divide en el despliegue inicial coordinado con marketing, la implementación de un ecosistema de monitoreo cuantitativo (GA4) y cualitativo (Hotjar), la ejecución de experimentos A/B para refinar la conversión y la consolidación de un roadmap evolutivo que prioriza la unificación del portal del paciente y la gestión familiar, asegurando que la plataforma no sea un artefacto estático sino un sistema vivo que responde a métricas de rendimiento y satisfacción del usuario.

### Parte 1: Estrategia de Despliegue y Alineación Multidisciplinaria

#### El momento en que el diseño deja de ser una promesa

Finalizar la etapa de UAT (User Acceptance Testing) a finales de 2021 no fue el final del camino, sino el inicio de la fase más vulnerable del proyecto: la entrega al mundo real. Tenía frente a mí una plataforma robusta, probada en entornos controlados, pero sabía que un producto excelente puede fracasar estrepitosamente si el usuario no entiende por qué ha cambiado su entorno digital. El diseño no habla por sí solo; necesitaba transformarme en un evangelizador técnico para asegurar que los equipos de Marketing y Comunicación no diluyeran el valor de la UX en un simple "lavado de cara" estético. Mi razonamiento era claro: si no lográbamos que el paciente percibiera la evolución funcional desde el primer contacto, habríamos fallado en la gestión del cambio.

Pasé de la mesa de dibujo a las salas de juntas, asumiendo que mi responsabilidad como diseñador se extendía hasta la última neurona del equipo de comunicación. No podíamos permitir que el lanzamiento fuera un anuncio genérico. Teníamos que explicarle a un paciente que su forma de interactuar con el Centro Médico ABC acababa de volverse más inteligente, más rápida y, sobre todo, más humana.

#### La transferencia de conocimiento como blindaje del producto

Organicé sesiones de inmersión profunda que llamé "evangelización técnica" para los equipos de Marketing y Comunicación. No quería que vieran diapositivas; quería que vivieran el flujo. Durante estas demostraciones, realicé recorridos exhaustivos por la plataforma, diseccionando cada decisión de arquitectura de información que habíamos tomado meses atrás.

*   **El nuevo buscador de médicos:** Me detuve minuciosamente aquí. Les expliqué cómo los filtros no eran solo etiquetas, sino una respuesta directa a la ansiedad del paciente por encontrar al especialista adecuado en el campus correcto.
*   **Navegación y Responsividad:** Demostré cómo la estructura se adaptaba a dispositivos móviles, no como un compromiso técnico, sino como una necesidad vital para el paciente que agenda una cita mientras está en el tráfico o en una sala de espera.
*   **Unificación del Portal:** Fui muy honesto sobre el alcance de "Mi Portal Paciente ABC". Expliqué que, aunque persistían sistemas legados, la interfaz ahora actuaba como una capa de coherencia que reducía la fragmentación visual que el paciente sufría anteriormente.

Mi objetivo era que cada stakeholder comprendiera el "cómo" y el "por qué" de cada interacción. Si ellos entendían la profundidad del cambio, sus mensajes de difusión tendrían el peso y la precisión necesarios para educar al usuario final.

#### De Figma a la maquinaria de contenidos: la provisión de assets

Un diseño en Figma es inútil para un equipo de redes sociales si no se traduce en activos digeribles. Me dediqué a extraer una librería de assets de alta fidelidad, pero fui más allá de las simples capturas de pantalla. Sabía que para materiales educativos necesitábamos claridad absoluta, así que creé versiones simplificadas de los flujos de usuario más críticos. Eliminé el ruido visual innecesario de los mockups para que el foco estuviera exclusivamente en la acción que el paciente debía realizar.

Para cerrar la brecha de aprendizaje, utilicé **Loom** para generar una serie de micro-videos y GIFs. Estas "píldoras de aprendizaje" mostraban, por ejemplo, cómo usar el nuevo buscador o cómo navegar por las secciones del portal. Mi intención era transformar la complejidad del sistema en algo visualmente obvio. Al proporcionar estos recursos, blindé la calidad visual de la comunicación externa; no quería que se usaran capturas de baja resolución o interpretaciones erróneas de la interfaz en los manuales de usuario.

#### Ingeniería de FAQs: anticipando la ansiedad del paciente

Basado en mi experiencia previa y en los hallazgos de las pruebas de usabilidad, asumí un rol forense para anticipar los puntos de dolor que surgirían el día uno. Colaboré estrechamente en la redacción de las Preguntas Frecuentes (FAQs), pero no desde una perspectiva técnica, sino desde la psicología del paciente. Me pregunté: "¿Qué es lo primero que me va a dar miedo si entro y todo se ve diferente?".

Identifiqué y redacté respuestas para preguntas críticas que sabía que inundarían el Call Center si no las resolvíamos proactivamente:
*   **Continuidad de datos:** "¿Mis datos de la plataforma anterior se conservan?". Esta era la duda número uno.
*   **Resultados de laboratorio:** "¿Dónde encuentro ahora mis resultados de radiología?". Necesitábamos guiar al usuario hacia el nuevo acceso de forma quirúrgica.
*   **Agendamiento:** "¿Cómo agendo una cita con mi especialista de siempre?".

Esta "ingeniería de FAQs" fue un ejercicio de diseño de servicios. No estábamos diseñando pantallas, estábamos diseñando la tranquilidad del usuario ante la incertidumbre del cambio. Cada respuesta fue pulida para ser clara, concisa y libre de tecnicismos.

#### El debate estratégico: ¿Big Bang o despliegue escalonado?

Participé activamente en las discusiones de alto nivel con el Product Owner y el liderazgo técnico sobre cómo íbamos a liberar la plataforma. Evaluamos varias opciones, y mi postura como diseñador fue firme.

*   **Big Bang:** Reemplazar todo de golpe era la opción más "limpia" técnicamente, pero la más arriesgada para la UX. Si algo fallaba, el impacto sería total y la percepción de marca se vería gravemente afectada.
*   **Phased Rollout (Despliegue por fases):** Esta fue mi recomendación principal. Abogué por liberar la plataforma primero a un porcentaje pequeño de usuarios o por campus específicos. Mi razonamiento era que esto nos permitiría monitorear el comportamiento real y el feedback en un entorno controlado, dándonos margen para corregir errores menores antes de que el 100% de la base de usuarios los notara.
*   **Beta Launch:** Aunque era una opción válida para recoger feedback temprano, consideré que en un entorno hospitalario podría generar confusión si el paciente no entendía por qué tenía dos opciones para hacer lo mismo.

Finalmente, mi aporte se centró en la gestión del riesgo humano. No se trataba de qué era más fácil para los desarrolladores, sino de qué estrategia minimizaba la carga cognitiva y el estrés para los pacientes que, a menudo, entran a la web en situaciones de vulnerabilidad emocional.

#### El ancla en la realidad: validación mediante Personas

Para que mis argumentos estratégicos no sonaran a teoría de diseño, traje a la mesa a nuestras Personas: **Elena, Carlos y Sofía**. Utilicé sus perfiles para justificar por qué necesitábamos un despliegue suave y materiales de soporte diferenciados.

Expliqué que para una usuaria como **Elena**, que es nativa digital, el cambio sería emocionante y lo navegaría sin ayuda. Sin embargo, para **Carlos**, que representa a un sector de pacientes con menor afinidad tecnológica, el rediseño podía sentirse como un obstáculo si no le dábamos las señales visuales correctas y guías muy sencillas. Defendí que el éxito del lanzamiento no se medía por cuánta gente entraba a la web, sino por qué tan rápido **Carlos** podía encontrar a su médico sin tener que llamar por teléfono frustrado. Esta perspectiva humana fue la que finalmente inclinó la balanza hacia una estrategia de comunicación mucho más visual y pedagógica.

#### Guardián de la marca y la consistencia

En las semanas previas, actué como el último filtro de calidad para cada correo electrónico, publicación en redes sociales y banner que saldría al público. Revisé meticulosamente los borradores para asegurar que el tono de voz fuera consistente con los principios que habíamos definido en el **Design System**.

No permití que se usaran términos que no estuvieran reflejados en la interfaz. Si en la web decíamos "Agendar Cita", en el correo no podía decir "Programar Consulta". Esta obsesión por la consistencia técnica y terminológica no era un capricho estético; era una forma de reducir la fricción cognitiva. Cada palabra en los materiales de difusión debía ser un espejo de lo que el usuario encontraría al hacer clic. Definimos tres pilares para todos los mensajes: **claridad, rapidez y unificación**. Si un comunicado no cumplía con los tres, se volvía a redactar.

#### La responsabilidad más allá del archivo .fig

Mirando hacia atrás, esta fase me recordó que el trabajo de un Senior Product Designer no termina cuando entrega los diseños finales en Figma. El soporte al lanzamiento es, en esencia, la última gran iteración del diseño de experiencia. Si el usuario no sabe que la mejora existe, o si el miedo al cambio le impide usarla, entonces el diseño ha fallado en su propósito fundamental.

Mi rol fue asegurar que la visión del producto se mantuviera intacta a través de los filtros de marketing, tecnología y operaciones. Me aseguré de que el equipo interno (Call Center, admisiones, enfermería) tuviera guías rápidas para que, cuando un paciente preguntara algo, ellos tuvieran la respuesta correcta. Estábamos listos para abrir las puertas, pero sabía que el verdadero trabajo empezaría en el momento en que el primer usuario real hiciera clic en "Entrar".


La estrategia estaba trazada y los materiales listos, pero en el momento en que el tráfico empezó a fluir hacia la nueva URL, una pregunta me quitaba el sueño: ¿estaban los usuarios navegando por donde nosotros habíamos proyectado o se estaban perdiendo en los mismos rincones de siempre? Necesitaba visibilidad inmediata sobre el comportamiento real para validar mis hipótesis o preparar correcciones de emergencia. El despliegue era solo el inicio de una vigilancia técnica que no permitiría margen de error en los primeros días críticos.

---

### Parte 2: Monitoreo Forense y Dashboard de Rendimiento Inicial

#### La transición de la estrategia a la vigilancia técnica

La URL ya estaba en producción y, por primera vez en meses, el control absoluto del entorno no estaba en mis manos. El lanzamiento de una plataforma de salud no es un evento de "presionar un botón y celebrar"; es el inicio de una fase de ceguera potencial que puede ser fatal para la experiencia del usuario si no se gestiona con rigor. Mi mayor temor no era que el sistema fallara técnicamente —para eso estaba el equipo de infraestructura—, sino que los pacientes se perdieran en silencio. No podía permitir que el éxito del rediseño se midiera por intuiciones o por "climas de opinión" en la oficina.

Necesitaba establecer un centro de mando que unificara el diseño con la telemetría de datos en tiempo real. Como diseñador, mi rol cambió de creador a analista forense. Tenía que transformar cada clic, cada duda y cada abandono en una señal clara que nos permitiera reaccionar antes de que una fricción menor se convirtiera en una crisis de confianza para el paciente. La estrategia de lanzamiento debía mutar inmediatamente en una arquitectura de vigilancia.

#### El 'War Room' y la respuesta táctica en tiempo real

Para gestionar las primeras 48 horas críticas, instauré un canal de comunicación inmediata en Slack que funcionó como nuestro "War Room". Mi posición en este espacio era estratégica: actuaba como el nexo entre el Product Owner, el equipo de Desarrollo y QA. Mi compromiso fue de **Alta Disponibilidad**; no estaba allí solo para observar, sino para diagnosticar problemas de UX en el momento exacto en que eran reportados por el Call Center o detectados en redes sociales.

Durante este periodo, ejecuté lo que denomino **Hotfixes de Diseño**. Si recibíamos reportes de que una etiqueta en el buscador de médicos generaba dudas, o si notaba que el contraste de un botón de "Agendar" no era suficiente en condiciones de luz real en dispositivos móviles, no esperaba al siguiente ciclo de desarrollo. Proponía ajustes inmediatos —cambios de copy, ajustes de color o simplificación de instrucciones— que se implementaban en caliente. Esta capacidad de respuesta táctica fue vital para blindar la continuidad del servicio y, sobre todo, para asegurar que el paciente sintiera que la plataforma era un sistema vivo y cuidado.

#### Ingeniería del Tagging Plan: El diseño de la telemetría

Para que el monitoreo fuera efectivo, tuve que diseñar qué íbamos a mirar. Antes del lanzamiento, trabajé codo a codo con el equipo de desarrollo para definir un **Tagging Plan (Plan de Etiquetado)** en Google Analytics 4 (GA4) que fuera mucho más allá de las simples vistas de página. No me interesaba solo saber cuánta gente entraba, sino qué hacían exactamente.

*   **Configuración de Eventos Críticos:** Definí el rastreo de interacciones específicas como los clics en "Buscar Médico" desde la homepage, el uso de filtros avanzados por especialidad y, lo más importante, cada paso individual del túnel de agendamiento de laboratorio. Necesitaba ver el **Funnel de Conversión** de forma granular para identificar en qué paso exacto el usuario decidía abandonar.
*   **Implementación Cualitativa:** Complementé la data cuantitativa con herramientas de análisis visual como Hotjar. Configuré mapas de calor (heatmaps) en las páginas de mayor tráfico y activé la grabación de sesiones anónimas. 

> **Insight de Senior:** Ver números en un dashboard te dice *qué* está pasando, pero ver una grabación de un usuario real intentando usar el selector de fecha en un móvil y fallando tres veces es lo que te dice *por qué* está pasando. Esa es la diferencia entre ser un analista de datos y un diseñador de producto.

#### La validación científica: El salto en SUS y CSAT

En febrero de 2022, tras los primeros dos meses de operación, consolidé los resultados en un dashboard de KPIs que arrojó datos irrefutables. El impacto del rediseño no era una percepción subjetiva; era una realidad estadística.

El dato más revelador fue la puntuación en la **System Usability Scale (SUS)**. Pasamos de un **45/100** (que en términos de industria se considera "pobre" o casi inusable) a un sólido **82/100**, situándonos en el rango de "excelente". Ver esa mejora de 37 puntos fue la validación científica de todas las decisiones de arquitectura de información y diseño de interfaz que habíamos tomado meses atrás. Acompañando a esto, el **CSAT (Customer Satisfaction Score)** se estabilizó en un **85%** en los flujos transaccionales, confirmando que la experiencia digital ahora estaba a la altura de la excelencia médica del Centro Médico ABC.

#### Eficiencia operativa: Cuando el diseño impacta el negocio

Uno de los mayores retos del proyecto era demostrar que el diseño centrado en el usuario tenía un retorno de inversión (ROI) claro para el hospital. Al analizar el **Time-on-Task (Tiempo en Tarea)**, los resultados fueron contundentes. Logramos reducir el tiempo promedio para agendar una cita de laboratorio de **4:15 minutos a solo 2:10 minutos**. 

Esta reducción del 50% en el tiempo de interacción no solo significaba menos frustración para el paciente, sino que impactaba directamente en la operación:
*   **Aumento de Conversión:** Las citas agendadas en línea pasaron del 10% al **35%**. El flujo era tan eficiente que los pacientes empezaron a preferir la web sobre el teléfono.
*   **Alivio al Call Center:** Registramos una reducción del **25%** en las llamadas relacionadas con consultas autogestionables, como "¿dónde veo mis resultados?". Esto liberó recursos críticos del hospital para atender casos médicos más complejos, transformando la web en una herramienta de eficiencia operativa real.

#### Auditoría de salud técnica y accesibilidad

Finalmente, no descuidé la base técnica que sostiene la experiencia. Utilicé **Google Lighthouse** para auditar el rendimiento de la plataforma en producción. Mantuvimos puntuaciones constantes de entre **85 y 95** en Rendimiento, Accesibilidad y SEO, tanto en versiones móviles como de escritorio. 

Verifiqué meticulosamente las tasas de error 404 y los tiempos de carga de los activos visuales. Un diseño puede ser estéticamente perfecto, pero si tarda tres segundos más en cargar en la red celular de un paciente que está fuera del hospital, ese diseño ha fallado. La excelencia técnica fue el cimiento que permitió que todas las métricas de usabilidad anteriores se mantuvieran estables bajo el tráfico real.

> El monitoreo de KPIs no es un ejercicio de vanidad para mostrar números verdes en una reunión. Es la forma en que los diseñadores escuchamos a miles de usuarios al mismo tiempo. Cada dato en ese dashboard de febrero de 2022 era una historia de un paciente que logró encontrar a su médico más rápido o que pudo consultar sus resultados sin tener que llamar por teléfono.


A pesar de la euforia por las métricas positivas del primer trimestre, una tendencia inquietante empezó a emerger en las grabaciones de sesión y en los comentarios abiertos de las encuestas. Mientras que el agendamiento volaba, los usuarios que intentaban gestionar la salud de sus hijos o padres mayores empezaron a mostrar patrones de navegación erráticos y frustración contenida. Me di cuenta de que habíamos resuelto el flujo individual, pero apenas estábamos rascando la superficie de la complejidad familiar, lo que nos obligó a replantear el análisis cualitativo para el segundo trimestre.

---

### Parte 3: Sistematización del Feedback y Análisis Cualitativo Q2

#### El silencio detrás de los números verdes

Para finales de febrero de 2022, los tableros de **Google Analytics 4** mostraban una realidad reconfortante: el tráfico de usuarios únicos crecía un 15% trimestre a trimestre y la tasa de rebote se mantenía en un saludable 35%. Sin embargo, como diseñador, aprendí hace mucho tiempo que los números verdes pueden ser el mejor escondite para una mala experiencia. Sabía que los datos cuantitativos me decían *qué* estaba pasando, pero me dejaban completamente a ciegas sobre el *porqué*. Tenía una tasa de abandono del 60% en el agendamiento de especialistas que ninguna gráfica de barras lograba explicar.

Esa discrepancia me obligó a pivotar. No podíamos seguir optimizando a ciegas basándonos solo en eventos de clic. Necesitaba implementar un sistema de "Voz del Paciente" que fuera quirúrgico y contextual. No quería encuestas de satisfacción genéricas enviadas por correo tres días después de la consulta; necesitaba capturar la frustración en el momento exacto en que se producía, justo cuando el usuario estaba a punto de cerrar la pestaña por desesperación. Mi objetivo era transformar la "queja" informal en una unidad de datos estructurada que pudiera alimentar el backlog de diseño con la misma autoridad que una métrica de conversión.

#### La implementación de la escucha contextual

Decidí que la mejor forma de romper ese silencio era integrar mecanismos de feedback proactivo directamente en el flujo de navegación. Utilicé **Hotjar** no solo como una herramienta de observación pasiva, sino como un canal de diálogo interrumpido. Mi primera maniobra fue configurar encuestas post-tarea basadas en la metodología **SEQ (Single Ease Question)**.

Elegí este formato por su bajísima carga cognitiva: una sola pregunta ("¿Qué tan fácil fue completar esta tarea?") que aparecía inmediatamente después de que un usuario lograba agendar una cita o consultar un resultado. Si la respuesta era negativa, se abría un campo de comentario opcional. Esta inmediatez fue clave; capturamos insights que el usuario jamás reportaría en un call center porque, para cuando llegara a hablar con un operador, ya habría olvidado el detalle técnico de la fricción.

Complementé esto con la activación del widget de **Incoming Feedback** en los bordes críticos de la plataforma. Lo configuré para que fuera un "botón de pánico" discreto donde los pacientes pudieran resaltar elementos específicos de la interfaz que les generaban duda. Esto me permitió recibir capturas de pantalla con anotaciones directas de los usuarios en tiempo real, lo que eliminó las conjeturas sobre qué etiqueta o qué botón estaba causando el conflicto.

> El feedback contextual es la única forma de capturar la 'fricción silenciosa'. Un usuario puede completar un flujo y contar como una conversión exitosa en GA4, pero si lo hizo con un nivel de esfuerzo (CES) altísimo, es un usuario que no volverá. El éxito no es solo que lleguen al final, sino cómo llegan.

#### El análisis forense del selector de horarios

Con las herramientas de comportamiento visual activas, me sumergí en un análisis forense de las grabaciones de sesiones durante el segundo trimestre de 2022. Me enfoqué obsesivamente en ese 60% de abandono en el paso de "selección de disponibilidad" para especialistas. Al observar las sesiones de usuarios que encajaban en el perfil de **Carlos** (nuestra persona de cuidado preventivo), detecté un patrón de comportamiento errático que las métricas cuantitativas habían pasado por alto.

Observé a Carlos y a otros usuarios haciendo clics repetitivos y rápidos sobre el calendario. No era un error de sistema; era una falta de claridad en la interfaz. Los usuarios no lograban distinguir entre un día sin disponibilidad y un día que simplemente no había cargado la información. El "baile del cursor" —ese movimiento circular e indeciso sobre el selector de horas— me confirmó que el diseño actual del calendario carecía de estados visuales claros. 

Los comentarios en las encuestas validaron mi sospecha: *"El calendario no siempre muestra la disponibilidad clara"*, *"No entiendo por qué no hay horas si sé que el doctor atiende"*. Descubrí que la lógica de disponibilidad subyacente y su representación visual estaban en conflicto. El usuario sentía que el sistema estaba roto, cuando en realidad solo era ambiguo. Esta fue la primera gran "bandera roja" que me obligó a proponer una revisión profunda de la arquitectura de este componente específico en el roadmap.

#### El mito del portal unificado

Uno de los hallazgos más dolorosos del Q2 fue descubrir que nuestra promesa de un "portal unificado" no se estaba materializando en la mente del paciente. A pesar de que el rediseño visual era consistente, la fragmentación técnica entre los resultados de laboratorio y los de radiología seguía siendo una barrera cognitiva insalvable para muchos.

Al analizar las grabaciones de navegación dentro de **Mi Salud ABC**, detecté un patrón visual frustrante: los usuarios buscaban resultados de laboratorio dentro de la sección de radiología y viceversa. Pasaban minutos saltando entre pestañas con una expresión de confusión que se traducía en comentarios directos como: *"No sé si mis resultados de laboratorio están en el mismo lugar que mis rayos X"*. 

La analítica de **GA4** mostraba que solo el 60% de los usuarios que entraban a la sección de resultados lograba iniciar sesión con éxito, y de esos, solo el 70% encontraba lo que buscaba. Ese 30% de fracaso dentro del portal era una fuga crítica de confianza. Me di cuenta de que no bastaba con poner un logo común; la arquitectura de información interna del portal seguía operando bajo silos organizacionales del hospital que el paciente no tenía por qué entender. Para un paciente como **Elena**, un resultado es un resultado, sin importar el departamento que lo emita.

#### Historias digitales: de la pantalla al panel de pacientes

Entendí que para resolver estos problemas de fondo, necesitaba sacar el diseño de la oficina y llevarlo al hospital. Me integré con el **Comité de Experiencia del Paciente** para abogar por la inclusión de la dimensión digital en los "Paneles de Pacientes" presenciales. Mi papel aquí no fue el de un observador pasivo, sino el de un facilitador que buscaba recolectar "historias digitales" de viva voz.

En estas sesiones, escuché a pacientes reales narrar su odisea digital. Fue en estos paneles donde la frialdad de los datos se convirtió en empatía pura. Recuerdo a una paciente explicar cómo tuvo que llamar al Call Center —a pesar de tener la app— simplemente porque no encontraba el botón de descarga de un PDF. 

Utilicé estas reuniones para realizar pruebas de usabilidad informales con prototipos de baja fidelidad. Les mostraba nuevas formas de organizar el historial médico y observaba sus reacciones inmediatas. Esta colaboración interdepartamental fue vital para asegurar que la estrategia digital no corriera por un carril separado a la experiencia física en el hospital. Aprendí que si el médico en el consultorio no sabe cómo funciona el portal, el paciente tampoco lo usará.

#### La emergencia del dashboard familiar

A medida que avanzaba el trimestre, un nuevo patrón empezó a emerger con una fuerza que no habíamos anticipado en el diseño original: la necesidad de una **Gestión Familiar**. A través del análisis de los tickets de soporte y las encuestas de **Hotjar**, identifiqué un dolor recurrente en usuarios con el perfil de **Sofía** (la cuidadora digital).

Los comentarios eran consistentes y cargados de frustración: *"Es complicado gestionar los resultados de mi mamá con diferentes usuarios"*, *"Quisiera tener a mis hijos en mi misma cuenta"*. El diseño inicial se había centrado en el individuo, bajo una lógica de seguridad de datos estricta, pero la realidad operativa de los pacientes del ABC es profundamente familiar y colaborativa.

Este hallazgo cambió mi perspectiva sobre el futuro de la plataforma. No se trataba solo de mejorar el agendamiento individual, sino de diseñar un ecosistema donde un cuidador pudiera tener un **dashboard familiar** centralizado. Identifiqué esta necesidad como una oportunidad estratégica para el roadmap de Q3 y Q4, entendiendo que la lealtad del paciente no solo se gana facilitando su propia cita, sino ayudándole a cuidar de los suyos.

#### Codificación y la política del backlog

Al cerrar el trimestre, me enfrenté a la tarea de dar sentido a esta montaña de feedback cualitativo. No podía simplemente entregar una lista de quejas; necesitaba un sistema de priorización que el equipo de desarrollo y el **Product Owner** pudieran ejecutar.

Establecí un proceso de codificación y etiquetado sistemático. Utilicé una matriz donde cada comentario o hallazgo se clasificaba por:
*   **Tema:** Usabilidad, contenido, técnico o funcional.
*   **Severidad:** Desde cosmético hasta bloqueador de tarea.
*   **Persona afectada:** ¿Esto le duele más a Elena o a Carlos?
*   **Esfuerzo de implementación:** ¿Es un cambio de etiqueta (hotfix) o requiere un rediseño de la arquitectura de información?

Este ejercicio de síntesis me permitió traducir la frustración de los usuarios en ítems accionables del backlog. Por ejemplo, la confusión en el portal de resultados no se etiquetó como "queja de usuario", sino como un "Rediseño de Arquitectura de Información de Mi Salud ABC". Al darle un nombre técnico y respaldarlo con videos de sesiones y tasas de éxito de **GA4**, logré que estos problemas de diseño compitieran en igualdad de condiciones con los requerimientos técnicos o de negocio en las reuniones de planificación.

> Sistematizar el feedback cualitativo es lo que separa a un diseñador que 'hace pantallas' de uno que 'gestiona un producto'. Mi trabajo en este periodo fue asegurar que cada decisión de diseño para el próximo trimestre estuviera blindada por la evidencia del comportamiento real del paciente.


Aunque el sistema de feedback ya estaba operando a pleno rendimiento, me di cuenta de que las soluciones propuestas para el selector de horarios seguían siendo hipótesis. No podíamos permitirnos otro rediseño basado en suposiciones, por lo que decidí que el siguiente paso lógico era someter nuestras ideas a la prueba de fuego de la experimentación A/B. El desafío era enorme: debíamos demostrar que un cambio sutil en la interfaz del calendario podía romper la barrera del 60% de abandono sin comprometer la integridad de los datos médicos.

---

### Parte 4: Optimización Basada en Evidencia Experimentación A/b

#### El riesgo de diseñar por intuición

Teníamos una montaña de feedback cualitativo del segundo trimestre, pero como diseñador con años en esto, sé que el feedback es solo una brújula, no un mapa exacto. Sabía que las soluciones que estábamos proponiendo para el selector de horarios y la navegación seguían siendo hipótesis de alto riesgo. No podíamos permitirnos el lujo de rediseñar basándonos en "lo que creemos que el usuario quiere". En el sector salud, una mala decisión de interfaz no solo baja una métrica; genera ansiedad en un paciente que necesita atención urgente.

Me di cuenta de que para blindar el retorno de inversión (ROI) del rediseño, necesitaba transformar mi rol: de ser el guardián de la estética pasé a ser un analista forense de datos. El conflicto era claro: el tráfico llegaba a los perfiles médicos, pero la conversión al flujo de agendamiento se estancaba. Tenía que probar científicamente qué medicina de diseño curaba esa fricción. Así que decidí implementar un ciclo de experimentación controlada, utilizando **Google Optimize** y **GA4** para dejar de adivinar y empezar a validar.

#### Paso 1: La anatomía de una hipótesis bajo el modelo RICE

Antes de tocar un solo píxel en Figma, me sumergí en los dashboards de **GA4** y los mapas de calor de **Hotjar**. El diagnóstico fue contundente: en los perfiles de médicos, el "hambre" de los usuarios por agendar era evidente, pero el botón principal parecía no estar gritando lo suficiente. Identifiqué que el microcopy era el culpable.

Para priorizar mis esfuerzos, utilicé un marco de pensamiento lógico: si cambiamos el elemento X por el elemento Y, entonces la métrica Z mejorará. No era solo cambiar palabras por cambiar; era una cuestión de psicología del usuario.

*   **Observación:** Los usuarios llegaban al perfil, hacían scroll, leían el currículum del médico, pero se detenían antes de hacer clic en el botón de contacto.
*   **Hipótesis formulada:** Si cambiamos el texto del botón principal de "Ver Horarios" a "Agendar Cita Ahora", entonces la tasa de clics (CTR) y el inicio del flujo de agendamiento aumentarán.
*   **Razonamiento:** "Ver Horarios" es una invitación a la exploración; "Agendar Cita Ahora" es una llamada a la acción directa que se alinea con la intención de un paciente que ya decidió con qué médico quiere atenderse.

#### Paso 2: La prueba de fuego en los perfiles médicos (A/B Test 1)

Ejecuté la primera prueba enfocada puramente en el microcopy de los perfiles. Configuré la **Variante A (Control)** con el texto original "Ver Horarios" y la **Variante B (Experimental)** con "Agendar Cita Ahora". El desafío técnico aquí no era el diseño, sino la paciencia. Como diseñador, quieres ver resultados inmediatos, pero la significancia estadística no se negocia.

Mantuve la prueba corriendo durante tres semanas para capturar los ciclos naturales de comportamiento de los pacientes (que suelen agendar más a inicios de semana). Los resultados fueron el primer gran triunfo de la Fase 5:

*   **Incremento del 18% en el CTR:** La variante B barrió al control. Casi uno de cada cinco usuarios adicionales decidió hacer clic simplemente por la claridad del mensaje.
*   **Aumento del 15% en el inicio del flujo:** No solo hacían clic por curiosidad; realmente empezaban el proceso de reserva.
*   **Nivel de confianza del 97%:** Estos datos no eran ruido; eran una validación estadística de que el lenguaje directo es vital en contextos de salud donde el usuario busca soluciones, no descripciones.

> En diseño de producto, a veces una sola palabra tiene más peso que todo un sistema de ilustración. Cambiar 'Ver' por 'Agendar' fue la diferencia entre un usuario que mira vitrinas y uno que entra a la clínica.

#### Paso 3: Combatiendo la ceguera de banner en la Homepage (A/B Test 2)

El segundo frente de batalla fue la recuperación de información. A pesar de que habíamos mejorado el portal de resultados, Elena —mi representación de los usuarios reales— seguía reportando que "no encontraba dónde ver sus estudios" desde la página de inicio. El enlace estaba ahí, en la navegación utilitaria superior, pero el ojo humano es experto en ignorar el texto plano cuando busca una acción crítica.

Diagnostiqué un caso clásico de "ceguera de banner" y falta de peso visual. Mi maniobra aquí fue estructural:

1.  **Rediseño de jerarquía:** Moví el acceso a resultados de un simple link de texto en el header a una tarjeta destacada en la sección de "Accesos Rápidos" de la homepage.
2.  **Aislamiento de variables:** Para que la prueba fuera limpia, la tarjeta debía tener el mismo estilo visual que la de "Agenda tu Cita", usando iconos consistentes del **Design System**.
3.  **Variante B:** Una tarjeta con icono y texto claro: "Consulta tus Resultados".

Los datos de esta prueba de cuatro semanas confirmaron mi sospecha sobre la ubicación física y el formato. La **Variante B logró un 22% más de clics** y un **19% de aumento en el acceso efectivo al portal**. Esto demostró que, para el paciente, los resultados de laboratorio tienen la misma jerarquía que una cita médica, y el diseño debía reflejar esa paridad.

#### Paso 4: Protocolo técnico y segmentación en Google Optimize

Mi obsesión durante estas semanas fue la integridad de la data. No servía de nada diseñar variantes hermosas si la configuración del experimento estaba contaminada. Utilicé **Google Optimize** para asegurar una segmentación de tráfico limpia de 50/50.

**Mi protocolo de configuración incluyó:**
*   **Segmentación por dispositivo:** Me aseguré de que las variantes se renderizaran correctamente tanto en desktop como en móvil, ya que el comportamiento de clic varía drásticamente entre un mouse y un pulgar.
*   **Exclusión de interferencias:** Bloqueamos cualquier otro cambio en las páginas bajo prueba. Si el equipo de marketing quería lanzar un banner promocional, tenía que esperar. El aislamiento de la variable era sagrado.
*   **Definición de objetivos:** En Optimize, vinculé directamente el evento de clic en el botón con la conversión final en el embudo de agendamiento. Quería ver el impacto real, no solo el "vanity metric" del clic inicial.

Llegar a una significancia estadística superior al 95% fue mi blindaje ante los stakeholders. Cuando presenté estos resultados, no dije "me parece que el botón rojo es mejor"; dije "el comportamiento real de miles de pacientes indica que esta variante reduce la fricción en un 18%". Esa es la diferencia entre un diseñador junior y uno que entiende el negocio.

#### Paso 5: El flujo en Figma y el principio del cambio aislado

Para diseñar estas variantes, seguí una disciplina de "Cambio Aislado" en mi archivo de Figma. Duplicaba la pantalla de control y solo modificaba un elemento significativo. Si cambiaba el color, el texto y la posición al mismo tiempo, nunca sabría qué fue lo que realmente funcionó.

Mantuve una consistencia absoluta con el **Design System**. Usé los mismos tokens de color, las mismas sombras y la misma tipografía (Montserrat). Esto era crucial para que la prueba fuera puramente sobre la jerarquía o el microcopy, y no sobre una estética disruptiva que pudiera asustar al usuario o sesgar el resultado. Cada variante B que construí era una pieza perfectamente integrada en el ecosistema visual de `centromedicoabc.com`, lo que permitía que el usuario no sintiera que estaba en un experimento, sino en una plataforma coherente y profesional.

#### Paso 6: De la experimentación a la implementación permanente

El momento de la verdad llegó al final del trimestre. Tras analizar que las variantes B superaron sistemáticamente al control sin canibalizar otras métricas (como el tiempo en página o la tasa de rebote), tomé la decisión estratégica junto al Product Owner de implementar estos cambios al 100% del tráfico.

Este no fue solo el cierre de un experimento; fue la validación de que la plataforma es un sistema vivo. Las tarjetas destacadas de "Agenda tu cita" y "Consulta tus resultados" que hoy se ven en la web actual del Centro Médico ABC son el resultado directo de esas semanas de análisis forense.

**Resultados consolidados de la optimización:**
*   **Validación de hipótesis:** Confirmamos que el paciente del ABC prefiere la acción directa y la visibilidad de herramientas transaccionales sobre el contenido informativo denso.
*   **Impacto en el Backlog:** Estos aprendizajes no se quedaron en un reporte; alimentaron el backlog para las próximas iteraciones, dándonos la confianza para proponer cambios más profundos en el flujo de registro.
*   **Evolución del Rol:** Mi trabajo dejó de ser "hacer que la web se vea bien" para convertirse en "asegurar que la web funcione para el paciente".

Esta fase de experimentación A/B transformó mi perspectiva. Cada prueba fallida —y tuvimos algunas donde el control ganó— fue en realidad una lección sobre la psicología del paciente. Aprendí que en salud, la claridad mata a la creatividad. Este enfoque basado en datos me dio la autoridad técnica para defender el diseño no como una opinión, sino como una solución probada al servicio del usuario.


A pesar de estos éxitos incrementales, las métricas de GA4 empezaron a revelar una tensión que los A/B tests no podían resolver por sí solos: el abandono masivo de los usuarios que intentaban gestionar las citas de sus hijos o padres. Me di cuenta de que habíamos optimizado la superficie, pero la arquitectura de "gestión familiar" seguía siendo un laberinto que requería una visión mucho más ambiciosa. Fue en ese momento cuando comprendí que el siguiente desafío no era una prueba de color o copy, sino trazar el roadmap evolutivo para unificar definitivamente el portal del paciente bajo una lógica de cuidado integral.

---

### Parte 5: Visión Estratégica y Roadmap Evolutivo

#### De la optimización de superficie al diseño de la estructura

Tras cerrar los ciclos de experimentación A/B, me encontré en un punto de inflexión. Habíamos logrado victorias incrementales —mejoramos el CTR en el buscador de médicos y redujemos el abandono en el primer paso del registro—, pero las métricas de GA4 y las grabaciones de Hotjar seguían gritando una verdad incómoda: estábamos optimizando la superficie de un sistema que, en su núcleo, seguía fragmentado. El paciente no veía una plataforma; veía un laberinto de subdominios y portales desconectados.

Mi razonamiento cambió. Como responsable del diseño, entendí que mi labor ya no era solo "arreglar botones", sino orquestar el futuro del ecosistema digital. No podíamos seguir operando bajo una lógica reactiva de soporte. Necesitábamos un plan maestro que unificara la experiencia del paciente bajo una sola visión de cuidado integral. La urgencia era clara: si no trazábamos un roadmap ambicioso ahora, el producto nacería condenado a la obsolescencia técnica y a la fatiga del usuario.

#### La construcción del Backlog de Oportunidades

Para pasar de la intuición estratégica a la ejecución, necesitaba una base sólida de evidencia. No quería una "lista de deseos", sino un registro técnico de fricciones. Centralicé todos los hallazgos en un tablero maestro de Miro que funcionó como mi **Backlog de Oportunidades**.

Crucé sistemáticamente tres fuentes de verdad:
*   **Data Cuantitativa:** Tasas de abandono y errores 404 extraídos de Google Analytics 4.
*   **Feedback Cualitativo:** Transcripciones de tickets del Call Center y comentarios directos del widget de feedback en página.
*   **Evidencia Visual:** Mapas de calor y grabaciones de sesiones donde el "baile del cursor" delataba la confusión del usuario.

En este backlog, cada entrada no era solo un título; incluía una descripción detallada del problema, la fuente de la evidencia y el impacto potencial. Fue aquí donde identifiqué que el principal detractor de la experiencia era la fragmentación de portales. El hecho de que un paciente tuviera que entrar a `misaludabc` para radiología y a `milaboratorio` para sus análisis de sangre era la falla estructural más grave del sistema. Documenté este hallazgo no como un error estético, sino como una barrera crítica que aumentaba la carga cognitiva y saturaba las líneas de soporte del hospital.

#### El rigor de la priorización: Aplicando la Matriz RICE

Con un backlog de más de cincuenta iniciativas potenciales, el riesgo de parálisis por análisis era real. Para despejar el camino, lideré una serie de sesiones estratégicas con el Product Owner y los líderes técnicos utilizando la metodología **RICE (Reach, Impact, Confidence, Effort)**.

Mi rol en estas sesiones fue el de defensor del paciente. Mientras el equipo técnico evaluaba el **Esfuerzo (Effort)** y el negocio miraba el **Alcance (Reach)**, yo me encargué de blindar las puntuaciones de **Impacto (Impact)** en la UX y la **Confianza (Confidence)** basada en nuestras investigaciones previas.

> **Trade-off estratégico:** En estas reuniones, defendí la priorización de la unificación técnica de resultados sobre el rediseño estético de la sección de noticias. Sabía que el esfuerzo técnico era masivo, pero la "Confianza" en que resolvería el dolor del 80% de los usuarios era absoluta. Negociar este balance fue vital para asegurar que cada hora de desarrollo se invirtiera en lo que realmente movía la aguja de la satisfacción del paciente.

#### Trazando los horizontes: El Roadmap como organismo vivo

Estructuré la visión futura en tres horizontes de tiempo, entendiendo que el roadmap no es un cronograma rígido, sino una guía estratégica que debe adaptarse a medida que aprendemos del mercado.

*   **Corto Plazo (3-6 meses):** Me enfoqué en "Quick Wins" de alto impacto. Prioricé la optimización del flujo de agendamiento de citas con especialistas —donde detectamos una caída brusca en la selección de horarios— y la implementación de un widget de feedback contextual para capturar el sentimiento del usuario en el momento exacto de la fricción.
*   **Mediano Plazo (6-12 meses):** Aquí situamos las iniciativas de mayor envergadura estructural, como la gestión familiar y el módulo de mensajería segura.
*   **Largo Plazo (12+ meses):** Reservé este espacio para la innovación disruptiva: la transición hacia una experiencia nativa móvil y la integración total de la telemedicina.

Esta organización cronológica permitió al Centro Médico ABC visualizar no solo el "qué", sino el "cuándo" de su evolución digital, blindando el presupuesto necesario para las fases más complejas.

#### La Iniciativa Estrella: El Portal de Pacientes v2.0

La pieza central de este roadmap fue la propuesta de unificación del portal. Planteé el rediseño total para eliminar la fragmentación actual, atacando directamente problemas de compatibilidad técnica como el visor de imágenes Vue PACS que tanto frustraba a los usuarios.

Mi hipótesis de diseño fue clara: si logramos consolidar resultados de laboratorio, imagenología, historial médico y gestión de citas en una sola interfaz robusta y coherente, reduciremos drásticamente la carga cognitiva del usuario. Ya no se trataría de saltar entre sitios, sino de tener un centro de mando personal de salud. Esta arquitectura de información centralizada fue mi mayor apuesta estratégica; una solución que transformaba el portal de un repositorio pasivo de documentos a una herramienta activa de gestión de bienestar.

#### Diseñando para el cuidador: Gestión Familiar y Mensajería

Al revisar los perfiles de nuestras Personas, recordé a **Sofía**, la madre que gestiona la salud de sus hijos y de sus padres ancianos. Su dolor era evidente: tener que cerrar e iniciar sesión con diferentes cuentas para ver resultados de distintos familiares.

Inspirado en esto, diseñé la funcionalidad de **Gestión Familiar**. Propuse un dashboard donde un usuario principal, previo consentimiento legal, pudiera vincular perfiles familiares. Esto no era solo una mejora de interfaz; era un cambio en el modelo mental del producto. Complementé esto con el diseño de un **Módulo de Mensajería Segura** asíncrona. El objetivo era permitir que el paciente hiciera preguntas no urgentes a su médico sin tener que llamar al Call Center, transformando la plataforma en un ecosistema proactivo que fomenta una comunicación más fluida y menos estresante.

#### Proyectando el futuro: Mobile-First y Telemedicina Unificada

Mirando hacia el horizonte de más de un año, tracé la evolución hacia una **App Móvil Nativa**. Si bien nuestro diseño actual es responsivo y funciona bien en navegadores móviles, una app nativa nos permitiría aprovechar la biometría para un acceso más seguro y las notificaciones push para recordatorios de medicamentos o citas, elevando el *engagement* a niveles que la web no puede alcanzar.

Asimismo, planifiqué la integración total de **ConsultABC** (el servicio de telemedicina) dentro del portal unificado. Mi visión era eliminar la fricción de tener que usar una plataforma externa para las videoconsultas. Al integrar el agendamiento, la consulta y el seguimiento en un solo flujo, cerraríamos el círculo de la atención digital, permitiendo que el paciente viviera toda su experiencia de salud dentro del mismo ecosistema de confianza del Centro Médico ABC.

#### El protocolo de ejecución: Ciclos de diseño iterativo

Para asegurar que este roadmap no se quedara en el papel, establecí un protocolo de ejecución basado en ciclos iterativos de aprendizaje. Cada iniciativa priorizada debía pasar por un "mini-sprint" de diseño en Figma que incluía:

1.  **Investigación Adicional:** Profundizar en el problema específico antes de trazar la primera línea.
2.  **Diseño y Prototipado:** Crear flujos y prototipos de alta fidelidad aplicando nuestro Design System.
3.  **Validación:** Realizar pruebas de usabilidad rápidas para confirmar que la solución propuesta realmente resolvía el dolor detectado.
4.  **Medición Post-Lanzamiento:** Monitorear los KPIs definidos para esa iniciativa y alimentar el backlog con los nuevos aprendizajes.

Este modelo de trabajo garantizó que la plataforma nunca volviera a ser un artefacto estático. Establecí un sistema donde el diseño y el desarrollo funcionan en simbiosis, asegurando que cada lanzamiento sea un escalón más hacia la excelencia digital.

**Reflexión final:**
Este proyecto transformó mi propia práctica profesional; pasé de ser un diseñador centrado en la ejecución de pantallas a convertirme en un estratega capaz de orquestar la evolución de un producto complejo a largo plazo. Aprendí que el verdadero éxito no ocurre el día del lanzamiento, sino en los meses posteriores, cuando eres capaz de leer los datos con humildad y convertirlos en una visión de futuro que aporte valor real tanto al negocio como al paciente. Me llevo la satisfacción de haber dejado no solo una web rediseñada, sino un sistema vivo y una metodología de mejora continua que permitirá al Centro Médico ABC liderar el sector salud digital por años.

---

