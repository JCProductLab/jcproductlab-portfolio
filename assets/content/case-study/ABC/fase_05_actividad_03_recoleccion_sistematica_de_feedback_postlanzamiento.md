# Fase 5: Lanzamiento y Evolución Continua Post-Lanzamiento

## Actividad 03: Recolección Sistemática de Feedback Post-Lanzamiento

> Esta actividad constituye el sistema nervioso central de la fase de evolución. Tras el lanzamiento de la plataforma en enero de 2022, se implementó un ecosistema multicanal para capturar la 'Voz del Paciente' de forma proactiva y reactiva. El plan desglosa desde el diseño de micro-encuestas contextuales (SEQ, CSAT, NPS) y la integración de widgets de feedback in-app, hasta la colaboración estratégica con el Call Center para la categorización forense de tickets de soporte. El proceso culmina en la síntesis de datos cualitativos y cuantitativos que alimentan un Dashboard de KPIs de UX (logrando un SUS de 82/100) y un Roadmap Evolutivo priorizado, asegurando que cada decisión de diseño futura esté respaldada por evidencia empírica y necesidades reales de pacientes como Elena y Carlos.

### Parte 1: Arquitectura de la Escucha Diseño de Mecanismos de Feedback In-app

El lanzamiento de la nueva plataforma fue un éxito técnico, pero el silencio que siguió al "Go-Live" me resultó inquietante. Tras semanas de soporte intenso, monitoreando caídas de servidor y errores de carga junto al equipo de desarrollo, la estabilidad llegó, pero con ella apareció un vacío de información crítica. Los dashboards de analítica cuantitativa empezaron a llenarse de números: sabíamos cuántos pacientes entraban, qué porcentaje llegaba a la confirmación de cita y cuántos abandonaban en el login. Sin embargo, nos faltaba el "porqué". Tenía los datos del "qué", pero estaba ciego ante la frustración o el alivio real de personas como Elena o Carlos al interactuar con la interfaz. Como responsable de la experiencia, no podía permitir que el producto se estancara en una fase puramente reactiva; necesitaba institucionalizar la "Voz del Paciente" para que cada iteración futura no fuera una suposición, sino una respuesta directa a una necesidad evidenciada.

#### La arquitectura de la brevedad: Diseño de micro-encuestas SEQ

Mi primera maniobra para romper ese silencio fue implementar encuestas post-tarea basadas en la métrica **SEQ (Single Ease Question)**. Sabía que después de un proceso estresante, como buscar un especialista para una urgencia familiar, lo último que un paciente quiere es un formulario de diez preguntas. Propuse integrar una sola pregunta quirúrgica: "¿Qué tan fácil fue completar esta tarea?". 

Diseñé este disparador para que apareciera inmediatamente después de hitos clave: al finalizar el agendamiento de una cita, al descargar un resultado de laboratorio o al encontrar un médico en el nuevo buscador. La escala visual era simple, de 1 a 5, acompañada de un campo de comentario opcional que solo se desplegaba si el usuario decidía interactuar. El razonamiento técnico detrás de esta elección fue capturar la usabilidad percibida "en caliente". Si un usuario calificaba con un 2 la descarga de resultados, ese dato era una señal de humo inmediata de que algo en el flujo de "Mi Salud ABC" estaba roto, incluso si el sistema no reportaba errores técnicos. Esta métrica me permitió identificar fricciones cognitivas que los logs de errores jamás mostrarían, transformando una métrica subjetiva en un dato accionable para el backlog.

#### Diseccionando la frustración: CSAT y CES en nodos críticos

Para los flujos de mayor fricción histórica, como el agendamiento y la consulta en el portal de radiología, decidí elevar la profundidad del análisis mediante métricas de **CSAT (Customer Satisfaction Score)** y **CES (Customer Effort Score)**. La distinción aquí era vital: el CES me decía cuánto esfuerzo le costó al usuario la interfaz, mientras que el CSAT medía su satisfacción con el resultado del servicio. 

Configuré estos widgets para que aparecieran solo al cierre del nodo transaccional. Por ejemplo, en el flujo de citas, el CES nos permitía entender si la navegación por el calendario era intuitiva o si el paciente sentía que estaba "luchando" contra el sistema. Si el esfuerzo reportado era alto pero la satisfacción (CSAT) también lo era, el diagnóstico era claro: el servicio médico era valorado, pero la herramienta digital era un obstáculo. Esta segmentación fue fundamental para defender ante los stakeholders que no bastaba con que la plataforma "funcionara"; tenía que ser fluida. Al cruzar estos datos con las "Personas" que habíamos definido en la fase de estrategia, empecé a notar patrones: los pacientes de mayor edad reportaban un CES significativamente más alto en el portal de resultados, lo que nos dio la evidencia necesaria para priorizar ajustes de accesibilidad y claridad en la jerarquía visual de esa sección.

#### El termómetro de la confianza: Configuración estratégica del NPS

Mientras que el SEQ medía la tarea, necesitaba algo que midiera la relación. Implementé el **NPS (Net Promoter Score)** con un enfoque estrictamente controlado para evitar la "fatiga de encuestas" que suele arruinar la recolección de datos en plataformas de salud. Programé la pregunta "¿Qué tan probable es que recomiende la plataforma digital del Centro Médico ABC a un amigo o colega?" para que apareciera solo a una muestra aleatoria de usuarios recurrentes, con una periodicidad de 3 a 6 meses.

No buscaba una reacción a un botón, sino un indicador de lealtad y confianza en el ecosistema digital. Esta métrica se convirtió rápidamente en el KPI de salud que el liderazgo del hospital consultaba para validar el retorno de inversión del rediseño. Un NPS al alza significaba que la plataforma estaba dejando de ser un mal necesario para convertirse en una ventaja competitiva. Para mí, como diseñador, los comentarios cualitativos asociados a las puntuaciones bajas eran los más valiosos: eran testimonios directos de dónde la promesa de marca del Centro Médico ABC se rompía en el mundo digital.

#### La red de seguridad forense: Exit-Intent Surveys

Uno de los mayores retos de cualquier plataforma transaccional es el abandono silencioso. Para capturar el insight detrás de la deserción, configuré **Exit-Intent Surveys** como una red de seguridad final. Utilicé triggers técnicos que detectaban cuando el cursor del usuario se movía rápidamente hacia la pestaña de cierre o cuando realizaba movimientos erráticos de retroceso en flujos críticos como el de pago o el llenado de datos personales.

En ese momento de ruptura, lanzábamos un pop-up discreto con una pregunta abierta: "¿Hubo algo que te impidió completar tu proceso?". La relevancia forense de este mecanismo fue brutal. Descubrimos, por ejemplo, que muchos pacientes abandonaban el agendamiento no por un error de diseño, sino por la falta de claridad en los costos de los procedimientos o por dudas sobre la cobertura de su seguro que no estaban resueltas en la pantalla. Esto me permitió realizar "hotfixes" de contenido y diseño de información que redujeron el abandono en puntos donde la analítica tradicional solo nos mostraba un rebote sin explicación.

#### El widget de feedback contextual: Escucha en tiempo real

Para democratizar la capacidad de reporte, integré herramientas de feedback contextual como el widget de **Hotjar**. Ubiqué una pestaña lateral persistente pero visualmente ligera etiquetada como "Feedback" en todas las vistas de la plataforma. Mi objetivo era que el usuario pudiera gritarnos su frustración en el segundo exacto en que la sentía.

La funcionalidad más potente de este widget era la capacidad de "resaltar elemento". Los pacientes podían tomar una captura de pantalla de un botón que no funcionaba o de un texto confuso y enviárnoslo directamente. Esto eliminó la ambigüedad de los reportes que llegaban por otros canales. Ya no recibíamos un ticket que decía "la página de médicos no carga", sino una imagen clara con un comentario: "Este filtro de especialidad no me muestra resultados para mi zona". Esta captura en tiempo real se convirtió en el insumo principal para el mantenimiento preventivo de la UI, permitiéndome ver el producto a través de los ojos del usuario en su contexto real de uso, con sus navegadores específicos y sus limitaciones de pantalla.

#### Arquitectura de datos para la acción: Formularios especializados

Finalmente, entendí que el formulario de contacto general del hospital era un agujero negro para el feedback de UX. Propuse y diseñé una arquitectura de formularios específica para la plataforma web, integrada directamente con nuestro flujo de diseño y producto. No quería que una queja sobre un botón terminara en la bandeja de entrada de atención médica general.

Definí campos técnicos obligatorios que el sistema capturaba automáticamente para ahorrarle trabajo al paciente:
*   **URL auto-capturada:** Para saber exactamente dónde ocurrió el problema sin que el usuario tuviera que explicarlo.
*   **Categorización forzada:** El usuario debía elegir entre "Problema técnico", "Sugerencia de mejora", "Contenido incorrecto" o "Felicitación".
*   **Adjunto de capturas:** Facilitando el diagnóstico visual inmediato.

Esta estructura de datos permitió que el feedback llegara pre-clasificado a mis manos. Ya no perdía tiempo descifrando a qué se refería un usuario; podía ir directo al archivo de Figma, identificar el componente afectado y proponer una solución. Este sistema transformó el feedback de un ruido constante en una fila de tareas priorizadas, acelerando drásticamente nuestro ciclo de respuesta y reduciendo la deuda de diseño que suele acumularse tras un lanzamiento masivo.

> **Insight Senior:** La analítica cuantitativa te dice dónde está el incendio, pero el feedback cualitativo te dice qué lo provocó. Implementar este sistema multicanal no fue solo un ejercicio técnico, sino una declaración de principios: en un entorno de salud, ignorar la voz del usuario no es solo un error de producto, es un fallo en la calidad de la atención.

Aunque la infraestructura digital de escucha ya estaba capturando cientos de micro-momentos cada día, pronto me di cuenta de que había una dimensión del problema que los widgets no podían alcanzar. Las quejas más amargas y los bloqueos más complejos no se quedaban en un pop-up de la web; terminaban en llamadas desesperadas al Call Center o en conversaciones tensas durante los Paneles de Pacientes. Me di cuenta de que para tener la imagen completa, tenía que salir de mi pantalla y sumergirme en el lado más humano y crudo del dato: los tickets de soporte y el contacto directo con el comité de experiencia.

---

### Parte 2: El Lado Humano del Dato Tickets de Soporte y Paneles de Pacientes

#### La ceguera de los datos fríos

Los widgets de feedback y los mapas de calor me estaban dando el "qué", pero me faltaba el "por qué" más visceral. Podía ver que un usuario abandonaba el flujo de agendamiento en el tercer paso, pero la métrica no me decía si era por una duda técnica, por desconfianza en el sistema de pago o por una urgencia médica que la interfaz no sabía priorizar. Comprendí que no podía seguir diseñando en una torre de marfil, rodeado solo de herramientas digitales, mientras el Call Center gestionaba crisis de usabilidad en tiempo real.

Para un **Product Designer**, el Call Center no es un departamento de quejas; es el laboratorio de pruebas más honesto del mundo. Decidí que mi siguiente maniobra sería unificar la experiencia digital con la operativa humana del hospital. Necesitaba escuchar las voces de quienes no se detienen a llenar una encuesta web porque su frustración es tan alta que prefieren descolgar el teléfono. Esa transición de la pantalla al auricular fue el movimiento que realmente empezó a cerrar la brecha entre el producto ideal y la realidad del paciente.

---

#### Sincronización forense con la primera línea de soporte

Mi primera acción fue establecer un canal de comunicación directo con los líderes del Call Center y los equipos de Atención al Paciente. No quería reportes genéricos de "el sitio no funciona"; necesitaba datos estructurados que yo pudiera transformar en soluciones de diseño. Articulé una serie de reuniones mensuales para realizar una **Categorización Forense de Tickets**.

**La redefinición de la taxonomía de soporte:**
Solicité y ayudé a definir categorías específicas en su sistema de ticketing (CRM) que antes no existían o estaban diluidas en "problemas generales". Implementamos etiquetas claras:
*   **Acceso al Portal:** Para identificar fallos en el login o recuperación de contraseñas, que suelen ser el primer muro de frustración.
*   **Dificultad de Agendamiento Online:** Específicamente para rastrear en qué parte del flujo de citas se producía el bloqueo.
*   **Información Incorrecta o Confusa:** Para detectar contenido médico o administrativo que generaba dudas en lugar de certezas.
*   **Error Técnico en la Web:** Para bugs visuales o funcionales que impedían completar tareas.

Mi objetivo era realizar un **Root Cause Analysis (RCA)** profundo. No me bastaba con saber que había 100 llamadas por "problemas de acceso"; quería acceder a los reportes anonimizados para entender si el problema era el diseño del formulario, la falta de feedback del sistema ante un error o una arquitectura de información que escondía el botón de entrada. Esta colaboración me permitió conectar una queja verbal con un fallo específico de la interfaz, convirtiendo el ruido telefónico en requerimientos técnicos para mi backlog.

---

#### El diagnóstico de la fragmentación en 'Mi Salud ABC'

Al sumergirme en el análisis de la "línea de ayuda telefónica", identifiqué un patrón crítico que ya se asomaba en investigaciones previas: la fragmentación insoportable entre el sitio principal y el portal "Mi Salud ABC". Las llamadas recurrentes sobre "no encuentro mis resultados de laboratorio" no eran fallos del sistema de base de datos, sino fallos de diseño de la experiencia total.

Descubrí que los pacientes se sentían expulsados de la plataforma principal al ser enviados a un subdominio con una interfaz completamente distinta (basada en MyVue). La carga cognitiva de cambiar de contexto visual y funcional era tan alta que el usuario se bloqueaba y llamaba por teléfono. Diagnostiqué que la existencia misma de esa línea de ayuda era un indicador de una deuda de diseño: cada llamada representaba un momento en que la interfaz había fallado en ser autosuficiente. Mi propuesta fue estructurar este feedback cualitativo para defender la unificación de portales ante los stakeholders, demostrando que una mejor arquitectura de información reduciría drásticamente el volumen de tickets y, por ende, los costos operativos del hospital.

---

#### Infiltración en el Comité de Experiencia del Paciente

Tradicionalmente, el "Comité de Experiencia del Paciente" del Centro Médico ABC se centraba en la hotelería hospitalaria: la calidad de la comida, la limpieza de las habitaciones o la amabilidad del personal de enfermería. Maniobré para integrarme en este foro, abogando por lo que llamé **Inclusión Digital**. Mi argumento era simple: la experiencia del paciente no empieza cuando entra al hospital, sino cuando intenta agendar una cita desde su casa.

**Mi rol como Traductor de Insights:**
En estas sesiones, me convertí en el puente entre las necesidades humanas más crudas y el desarrollo de producto.
*   Escuchaba las actas del comité donde se reportaban quejas sobre la dificultad de entender los procesos administrativos.
*   Traducía esas quejas en **User Stories** y las inyectaba directamente en el roadmap de diseño.
*   Aseguraba que la "Voz del Paciente" no se quedara en una minuta de reunión, sino que tuviera un impacto tangible en los próximos sprints de Figma y desarrollo.

Esta infiltración estratégica cambió la percepción del diseño dentro de la institución. Dejamos de ser los que "hacían la web bonita" para ser vistos como aliados estratégicos que resolvían problemas de fondo en la relación paciente-institución.

---

#### La potencia de las 'Historias Digitales' en los Paneles de Pacientes

Para profundizar aún más, utilicé los "Paneles de Pacientes" como una herramienta de investigación cualitativa de alto impacto. Diseñé discusiones grupales focalizadas no solo en la funcionalidad, sino en la narrativa del usuario. Implementé una técnica que denominé la recolección de **Historias Digitales**.

En lugar de preguntar "¿te gusta el botón de agendar?", pedía a pacientes reales como **Elena** o **Carlos** que narraran su odisea digital completa: desde el momento en que sentían un síntoma y buscaban un especialista, hasta que lograban ver su resultado de laboratorio en la web. 

**Lo que descubrimos fue revelador:**
*   **La emoción del error:** Una paciente narró cómo se sintió "abandonada" por el hospital cuando la pantalla de pago se quedó en blanco. Ese sentimiento de desprotección es algo que un mapa de calor nunca te va a mostrar.
*   **La barrera terminológica:** Escuchamos cómo términos que para nosotros eran estándar, para ellos eran muros de incomprensión que generaban ansiedad.
*   **El rostro de la tasa de rebote:** Estas historias humanizaron los fríos datos de Google Analytics. Ya no estábamos optimizando una tasa de conversión; estábamos ayudando a una persona real a gestionar su salud sin añadirle estrés innecesario.

---

#### Co-diseño y validación visceral en tiempo real

No me limité a escuchar; también utilicé estos paneles para validar soluciones antes de comprometer una sola línea de código. Llevaba prototipos de baja fidelidad y los presentaba a los miembros del panel para observar su reacción visceral.

Mi metodología consistía en presentar una solución a un problema que previamente habíamos detectado en los tickets de soporte. Por ejemplo, si el Call Center reportaba confusión en la selección de especialidades, yo mostraba una nueva estructura de filtros. No buscaba aprobación, buscaba fricción. Si el usuario dudaba más de dos segundos o fruncía el ceño, sabía que la arquitectura seguía rota. Esta facilitación de co-diseño nos permitió realizar correcciones de UX críticas de forma ágil y económica, garantizando que cuando una funcionalidad llegara a producción, ya hubiera pasado por el filtro de la realidad del paciente.

> **Insight Senior:** El verdadero diseño centrado en el usuario ocurre cuando tienes la humildad de dejar de mirar tus diseños en una pantalla de 27 pulgadas y empiezas a escuchar a la persona que está intentando usar tu producto en un teléfono antiguo, con mala conexión y la preocupación de un diagnóstico médico encima. Sistematizar el feedback cualitativo no es solo recolectar quejas, es construir una brújula ética para el producto.

Toda esta avalancha de datos cualitativos de los paneles y tickets, sumada a las métricas cuantitativas que seguían llegando, empezó a generar una saturación de información que amenazaba con bloquear la toma de decisiones. El desafío ahora no era solo escuchar, sino procesar ese volumen masivo de evidencia para transformarlo en una estrategia coherente. Recuerdo el momento exacto en que abrí mi tablero de control y me di cuenta de que necesitaba un sistema de inteligencia de producto capaz de priorizar lo urgente sobre lo importante antes de que el roadmap perdiera el rumbo.

---

### Parte 3: Inteligencia de Producto Consolidación y Análisis de la Voz del Paciente

Toda la avalancha de feedback cualitativo de los paneles y tickets, sumada a las métricas cuantitativas que seguían llegando, empezó a generar una saturación de información que amenazaba con bloquear la toma de decisiones. Tenía cientos de verbatims de pacientes, miles de sesiones grabadas en Hotjar y un flujo constante de quejas del Call Center. El desafío ahora no era solo escuchar, sino procesar ese volumen masivo de evidencia para transformarlo en una estrategia coherente. Recuerdo el momento exacto en que me di cuenta de que necesitaba un sistema de inteligencia de producto capaz de separar el ruido de la señal, una "torre de control" que nos permitiera ver si realmente estábamos moviendo la aguja del negocio o si solo estábamos maquillando problemas superficiales.

#### La construcción de la torre de control: El Dashboard de KPIs de UX

En febrero de 2022, semanas después del lanzamiento, decidí que no podíamos seguir operando a ciegas o basándonos en "sensaciones". Articulé la creación de un **Dashboard de KPIs de UX y Rendimiento** que se convirtió en nuestra única fuente de verdad. Mi objetivo era ambicioso: quería evaluar si los objetivos que trazamos en el brief inicial se estaban materializando en la vida real de los pacientes. 

Para lograrlo, realicé una integración técnica y conceptual de tres frentes que normalmente viven aislados. Primero, configuré **Google Analytics 4 (GA4)** para rastrear no solo el tráfico, sino los flujos de navegación y las tasas de conversión críticas. Segundo, desplegué **Hotjar** para capturar el comportamiento visual a través de mapas de calor y grabaciones de sesiones. Y tercero, establecí un puente con el **CRM/HubSpot** del hospital para monitorear el volumen de llamadas que llegaban al Call Center específicamente por dudas relacionadas con la web. 

Este tablero no era un simple reporte estático; era una herramienta de monitoreo continuo. Me permitía cruzar, por ejemplo, si una caída en la conversión de agendamiento coincidía con un aumento de quejas en el Call Center. Fue en este análisis donde empecé a ver los primeros destellos de lo que el rediseño estaba logrando realmente.

#### El salto del SUS: De la frustración a la fluidez

Cuando realizamos el análisis forense de la usabilidad utilizando la métrica **System Usability Scale (SUS)**, los resultados fueron, honestamente, un alivio profesional inmenso. Antes del rediseño, el baseline que habíamos documentado era de **45/100**, una calificación que en términos de industria se considera "pobre" o incluso inaceptable para una institución de salud de este nivel. La plataforma anterior era un laberinto que castigaba al usuario.

Al cerrar el primer ciclo de medición en febrero de 2022, la puntuación saltó a **82/100**. Lograr un incremento de 37 puntos no es algo que pase por accidente o por una "interfaz bonita". Este salto de "Pobre" a "Bueno/Excelente" fue la validación definitiva de cada decisión difícil que tomamos en las fases de arquitectura y prototipado. Ver ese número en el dashboard fue el argumento más sólido que tuve para demostrarle a los stakeholders que el diseño centrado en el usuario no era un lujo, sino una inversión directa en la operatividad del hospital. La plataforma había dejado de ser un obstáculo para convertirse en una herramienta que los pacientes realmente podían usar sin asistencia.

#### Micro-feedback en tiempo real: El valor del CSAT contextual

No me conformé con la métrica global del SUS; necesitaba saber qué pasaba en el "aquí y ahora" de cada interacción. Implementé un sistema de micro-encuestas contextuales basadas en la **Single Ease Question (SEQ)**. Diseñé estas encuestas para que aparecieran de forma quirúrgica: justo después de que un usuario completara una tarea crítica, como agendar una cita o consultar un resultado. 

> **Insight Senior:** El feedback más valioso es el que se captura en el segundo exacto en que la dopamina del éxito o la frustración del fracaso están frescas. Una encuesta enviada por correo tres días después es solo un ejercicio de memoria; una pregunta in-app de dos segundos es una captura de la realidad.

Propuse el uso de widgets discretos de Hotjar que preguntaban: "¿Qué tan fácil fue completar esta tarea?". El resultado fue un **CSAT (Customer Satisfaction Score) del 85%**. Este dato fue vital porque me permitió desglosar la satisfacción por flujos. Mientras que la "Búsqueda de Médicos" y el "Agendamiento de Laboratorio" volaban con comentarios sobre la claridad y la rapidez, otros flujos empezaban a mostrar grietas que la métrica general del SUS solía ocultar.

#### Eficiencia operativa: El diseño como reductor de costos

Uno de los puntos donde mi rol como diseñador se cruzó más fuertemente con los objetivos de negocio fue en el análisis del **Time-on-task (Tiempo en Tarea)**. Al comparar los datos con el sistema anterior, descubrimos que el tiempo promedio para agendar una cita de laboratorio había bajado de **4:15 minutos a solo 2:10 minutos**. Habíamos recortado el proceso a la mitad.

Esta eficiencia del 50% no solo significaba menos frustración para el paciente; tenía un impacto financiero directo. Al cruzar estos datos con el reporte del Call Center, detectamos una **reducción del 25% en las llamadas** relacionadas con "cómo agendar" o "dónde ver mis resultados". Logramos que el usuario se autogestionara. Cada minuto que un paciente no pasaba colgado al teléfono preguntando algo que la web debería resolver, era dinero ahorrado para el Centro Médico ABC y tiempo recuperado para el personal de soporte. Fue la prueba de que una buena arquitectura de información es, en última instancia, una herramienta de optimización financiera.

#### La brecha de adopción: El problema de la fragmentación percibida

A pesar de las victorias en usabilidad, el dashboard también me arrojó una dosis de realidad necesaria. La **Tasa de Adopción del Portal** se situaba en un **15%** de los pacientes únicos. Aunque era un progreso respecto al caos fragmentado de años anteriores, estábamos lejos de nuestra meta inicial del 25%. 

Al analizar los informes del segundo trimestre de 2022, identifiqué un patrón preocupante en los comentarios cualitativos. Usuarios como **Elena** seguían reportando que no sabían si sus resultados de laboratorio estaban en el mismo lugar que sus placas de rayos X. La "unificación" que tanto habíamos trabajado en diseño no estaba siendo comunicada con la suficiente fuerza o claridad técnica. La fragmentación persistía en la mente del usuario. Este hallazgo me obligó a cuestionar nuestra estrategia de onboarding: no bastaba con que el portal fuera unificado; el usuario tenía que *sentir* y *entender* esa unificación desde el primer clic.

#### El punto ciego: El colapso en el agendamiento de especialistas

El hallazgo más crítico y doloroso del trimestre fue descubrir una **tasa de abandono del 60%** en el flujo de agendamiento de citas con especialistas. Mientras que el flujo de laboratorio era un éxito rotundo, el de especialistas era un agujero negro de conversión. El drop-off ocurría casi enteramente en el paso de "selección de horario/disponibilidad".

Este era un riesgo de negocio mayor. Si un paciente no puede agendar con su cardiólogo o pediatra de forma fluida, simplemente se va a otra institución. El dashboard de KPIs me dio el "qué" (el 60% de abandono), pero para entender el "por qué", tuve que realizar un análisis forense mucho más profundo, cruzando los datos cuantitativos con la observación directa del comportamiento.

#### Triangulación forense: Observando a "Carlos" en la trinchera

Para resolver el misterio del 60% de abandono, recurrí a la triangulación de datos: crucé las métricas de GA4 con las grabaciones de sesión de Hotjar. Pasé horas observando cómo usuarios que encajaban perfectamente en el perfil de **Carlos** (paciente crónico, digitalmente capaz pero con poco tiempo) interactuaban con el selector de horarios.

Lo que vi fue revelador. No era un error técnico de "botón roto". Los usuarios entraban al calendario, hacían clic repetidamente en días que parecían disponibles pero no lo estaban, o se quedaban congelados ante una interfaz que no les explicaba por qué no había horas para su médico específico. El "baile del cursor" era frenético; los usuarios volvían atrás, intentaban de nuevo y, finalmente, cerraban la pestaña por pura fatiga cognitiva. 

Esta triangulación me permitió invalidar la hipótesis del equipo de TI, que pensaba que era un problema de carga de la base de datos. Era un problema de **usabilidad y claridad de interfaz**. La lógica de disponibilidad subyacente no estaba traducida a un lenguaje visual que el paciente pudiera entender. Esta fue la señal de alarma que cambió mis prioridades para el siguiente ciclo.

> **Reflexión Senior:** En este punto del proyecto, mi rol dejó de ser el de alguien que "diseña pantallas" para convertirse en un estratega que interpreta síntomas. El dashboard no era solo una colección de gráficos; era el expediente clínico de la plataforma. Aprender a no enamorarme de mi primera solución y aceptar que el flujo de especialistas estaba fallando fue lo que me permitió mantener la integridad del producto. La evidencia cruda es el único antídoto contra el ego del diseñador.


A pesar del éxito rotundo en las métricas globales, la herida abierta del 60% de abandono en las citas de especialistas y la confusión persistente sobre el portal unificado me hicieron comprender que el lanzamiento era solo el principio de una batalla más larga. Tenía los datos, tenía los insights y, sobre todo, tenía la presión del negocio para convertir ese tráfico en citas confirmadas. Recuerdo cerrar el informe del segundo trimestre sabiendo que el roadmap que habíamos planeado meses atrás ya no servía; la "Voz del Paciente" acababa de dictar una nueva urgencia que nos obligaría a rediseñar el núcleo mismo de la experiencia transaccional.

---

### Parte 4: El Cierre del Círculo del Feedback al Roadmap Evolutivo

#### El peso de la evidencia: De la voz del paciente al backlog técnico

Tener una montaña de datos cualitativos y métricas de abandono frente a mí era un privilegio, pero también una responsabilidad asfixiante. El éxito del lanzamiento en enero de 2022 había generado una inercia positiva, pero los informes de analítica y los comentarios crudos de pacientes como Elena y Carlos me recordaban que el producto estaba vivo y, en algunos puntos, sangrando. Me di cuenta rápidamente de que si no transformaba ese caos de "Voz del Paciente" en una hoja de ruta ejecutable, todo el esfuerzo de investigación habría sido inútil. Los datos, por sí solos, son inertes; mi trabajo era darles voz en las reuniones de producto y convertirlos en tickets de desarrollo que no pudieran ser ignorados.

Sentí la necesidad imperante de pasar del análisis forense a la planificación estratégica. No podíamos seguir reaccionando a las quejas del día a día; necesitábamos un sistema nervioso que conectara el dolor del usuario con el roadmap de ingeniería. Cerrar la brecha entre lo que el paciente esperaba —una experiencia de salud unificada y sin fricciones— y lo que la infraestructura técnica permitía en ese momento, se convirtió en mi obsesión personal. El roadmap no podía ser una lista de deseos; tenía que ser una respuesta técnica a problemas diagnosticados con precisión quirúrgica.

#### Codificación forense: Extrayendo el ruido para encontrar la señal

Para que el equipo de desarrollo y los stakeholders tomaran en serio el feedback cualitativo, tuve que sistematizarlo con un rigor que no dejara lugar a dudas. Inicié un proceso de **codificación y etiquetado** exhaustivo. Centralicé cada comentario de Hotjar, cada transcripción de los Paneles de Pacientes y, sobre todo, la categorización de los tickets que venían del Call Center en un tablero de gestión que me permitiera ver patrones, no solo anécdotas.

No me limité a listar quejas. Para cada entrada, realicé una traducción: de "no encuentro mis resultados" a un problema de arquitectura de información etiquetado como "Fragmentación de silos de datos". Esta disciplina me permitió identificar que el 60% de las frustraciones no eran errores técnicos, sino problemas de usabilidad persistentes. Agrupé los hallazgos por temas y funcionalidades, asignando a cada uno una severidad basada en la frecuencia y el impacto en la tasa de conversión. Al final de este ejercicio, cada ítem que propuse para el backlog tenía una causa raíz identificada y una "Persona" afectada, lo que blindaba mis recomendaciones contra opiniones subjetivas de terceros.

#### La urgencia de lo invisible: Unificando "Mi Salud ABC"

Uno de los hallazgos más dolorosos fue confirmar que, a pesar de nuestros esfuerzos, la fragmentación entre los resultados de laboratorio y los de imagenología seguía siendo un muro para el paciente. Los datos de feedback indicaban que los usuarios se sentían perdidos al saltar entre portales que parecían productos distintos. Decidí que la iniciativa de **Resultados Unificados** debía ser el corazón de nuestro horizonte de corto plazo (Q4 2022 - Q1 2023).

Propuse una revisión profunda del microcopy y las etiquetas, no solo en el portal, sino desde la homepage. La intervención no fue puramente estética: rediseñé la navegación interna para que el acceso a cualquier tipo de resultado fuera agnóstico a la base de datos de origen. Mi objetivo era que el paciente percibiera una unificación real, eliminando la fricción cognitiva de tener que entender la estructura interna del hospital para encontrar su propia información médica. Esta decisión fue estratégica; sabíamos que al resolver esto, reduciríamos drásticamente las llamadas de soporte que saturaban el Call Center.

#### El rediseño funcional del flujo de especialistas

La analítica no mentía: el flujo de agendamiento de citas con especialistas era un embudo con fugas masivas. Detectamos una tasa de abandono crítica en el paso de selección de horario. Al cruzar esto con el feedback cualitativo, descubrí que la confusión no venía de la falta de médicos, sino de cómo mostrábamos la disponibilidad. Los pacientes se sentían abrumados por una interfaz que no comunicaba claramente cuándo era el próximo espacio libre real.

Mi plan de ataque para el rediseño del selector de horarios se centró en la funcionalidad pura. Prioricé la claridad visual de la disponibilidad y refiné los mensajes de error para que fueran guías contextuales, no solo avisos de fallo. Este rediseño buscaba aumentar la tasa de finalización del agendamiento de forma inmediata. No se trataba de que el calendario se viera "bonito", sino de que fuera lo suficientemente intuitivo para que un paciente en una situación de estrés pudiera confirmar su cita en menos de tres clics. Atacar este punto de dolor era vital para el negocio, ya que cada abandono representaba una pérdida directa de ingresos y una oportunidad desperdiciada de atención médica.

#### Diseñando para Sofía: Gestión familiar y mensajería segura

Mirando hacia el mediano plazo (Q2-Q3 2023), articulé dos iniciativas que respondían directamente a las necesidades de nuestra **Persona Sofía**: la madre y cuidadora que gestiona la salud de toda su familia. El feedback de los Paneles de Pacientes fue unánime: necesitaban un dashboard familiar. Diseñé la propuesta de "Gestión Familiar" para permitir la vinculación de perfiles bajo una cuenta principal, asegurando que los consentimientos legales estuvieran integrados en el flujo de UX sin entorpecerlo.

Complementé esto con el módulo de **Mensajería Segura**. Los pacientes pedían a gritos un canal asíncrono para preguntas no urgentes. Al proponer este sistema dentro del portal unificado, no solo estábamos añadiendo una funcionalidad, sino que estábamos reforzando la calidez de la atención digital. Mi razonamiento fue claro: si podíamos resolver dudas menores por mensaje, liberaríamos espacio en la agenda de los médicos para casos críticos y aumentaríamos la lealtad del paciente al hacerlo sentir acompañado en su tratamiento.

#### Validación estadística: El triunfo del microcopy directo

Para cerrar el círculo de confianza con los stakeholders, integré los resultados de nuestras **pruebas A/B** como la prueba final de que íbamos por el camino correcto. Recuerdo perfectamente la sesión donde presenté los datos de la optimización de los perfiles de médico. Habíamos hipotetizado que un lenguaje más directo aumentaría la conversión, y los números lo confirmaron con una rotundidad casi poética.

> **Dato de impacto:** La Variante B, que simplemente cambiaba el texto del botón de "Ver Horarios" a **"Agendar Cita Ahora"**, logró un incremento del **18% en la Tasa de Clics (CTR)** y un aumento del 15% en el inicio del flujo de agendamiento.

Lo más gratificante no fue solo el porcentaje, sino alcanzar una **significancia estadística del 97%**. Esto no era suerte; era diseño basado en evidencia. Implementamos este cambio al 100% de los usuarios de inmediato. Del mismo modo, transformar el enlace de "Consulta tus Resultados" en una tarjeta destacada en la homepage generó un incremento del 22% en el CTR. Estos aprendizajes alimentaron el backlog al instante, demostrando que incluso los cambios pequeños, si están bien fundamentados, pueden mover la aguja del negocio de forma masiva.

#### Tres horizontes para un ecosistema vivo

Finalmente, estructuré el Roadmap Evolutivo en tres horizontes para dar visibilidad y tranquilidad a la organización. No quería que el roadmap se viera como un cronograma rígido de entregas, sino como un **plan estratégico vivo** que se adaptaba a medida que aprendíamos más. 

*   **Corto Plazo:** Resolver la "deuda de usabilidad" en citas y resultados.
*   **Mediano Plazo:** Expandir el valor con gestión familiar y mensajería.
*   **Largo Plazo:** La visión de una App Móvil Nativa y la integración total de Telemedicina (ConsultABC).

Esta estructura permitió que el equipo de TI y de Negocio entendieran que la plataforma no estaba "terminada", sino que estaba en un estado de evolución constante. Al establecer el ciclo de **"Medir -> Analizar -> Aprender -> Iterar"** como nuestra filosofía central, blindé la experiencia del paciente contra futuras decisiones arbitrarias. Cada paso que daríamos a partir de ese momento estaría respaldado por la voz de quienes realmente usaban el sistema.

**Reflexión final:**
Haber transformado el feedback crudo en un roadmap estratégico fue el momento en que el proyecto dejó de ser una entrega de consultoría para convertirse en un producto con alma y dirección. Aprendí que mi mayor valor como diseñador no estaba en los píxeles, sino en mi capacidad para traducir el dolor humano en prioridades de ingeniería que el negocio pudiera entender y financiar. Esta actividad dejó una plataforma que no solo funciona mejor, sino que tiene la capacidad instalada de seguir escuchando y mejorando mucho después de que yo haya terminado mi intervención.

---

