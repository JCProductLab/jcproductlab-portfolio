# Fase 4: Implementación y Handoff

## Actividad 2: actividad_02_colaboracion_con_desarrollo

### Parte 1: ARQUITECTURA DE LA COMUNICACIÓN: CANALES Y EXPECTATIVAS

#### El silencio después del handoff

El momento en que se suben los archivos finales de diseño al repositorio suele ser el punto más peligroso en el ciclo de vida de un producto. Durante semanas, el equipo de diseño ha vivido en un entorno controlado, donde cada píxel responde a una lógica de usuario validada y cada transición fluye sin fricción. Pero al cerrar esa fase, surge una tensión inevitable: el riesgo de la "caja negra". He visto demasiados proyectos morir de éxito en Figma para luego desmoronarse en la implementación porque el diseñador consideró que su trabajo terminaba al entregar los mockups. En este MVP para AsDeporte, con la complejidad técnica que implica integrar datos de atletas en tiempo real, no podía permitirme ese lujo. Sabía que, si me retiraba a "esperar el resultado", lo que recibiría de vuelta sería un producto funcionalmente correcto pero emocionalmente roto, o peor aún, una versión diluida de la experiencia que habíamos prometido.

Mi razonamiento estratégico fue preventivo. Comprendí que la fidelidad del producto final no dependía de la calidad de mis sombras o de la elección tipográfica, sino de la solidez del puente que construyera con ingeniería. Como responsable de la experiencia, mi rol debía evolucionar de arquitecto a aliado táctico. Necesitaba asegurar que la visión validada se mantuviera intacta a pesar de los inevitables "esto no se puede hacer así" que surgen en el desarrollo. Mi objetivo no era vigilar a los desarrolladores, sino blindar el proceso contra decisiones unilaterales tomadas bajo la presión de un deadline. Si un desarrollador encontraba un bloqueo técnico en el flujo de registro de un evento, yo quería estar ahí en ese preciso segundo para proponer una alternativa que mantuviera la usabilidad, en lugar de enterarme tres semanas después, cuando el código ya estuviera en producción y el cambio fuera prohibitivo por costo y tiempo.

#### La auditoría de flujo con el liderazgo técnico

Para materializar esta simbiosis, mi primera acción fue convocar al Líder Técnico y a los desarrolladores clave a una sesión que no fue una presentación, sino una auditoría forense de nuestro flujo de trabajo conjunto. No quería imponer una metodología; quería diagnosticar dónde estaban sus puntos de dolor en handoffs anteriores. Les pregunté directamente: "¿Qué es lo que más les frustra cuando abren un archivo de diseño?". La respuesta fue unánime: la ambigüedad en los estados de error y la falta de claridad en las reglas de negocio de los componentes dinámicos. 

Con este diagnóstico, articulé el primer paso del plan: el mapeo del ecosistema de herramientas. No nos limitamos a decir "usaremos Slack". Realizamos un análisis de qué canales garantizaban la menor fricción posible para cada tipo de problema. Mi enfoque fue reducir la carga cognitiva del equipo de ingeniería. Si tenían una duda sobre el espaciado de un botón, no debían perder tiempo redactando un correo o buscando en un hilo infinito de mensajes. Establecimos que cada miembro del equipo supiera exactamente a quién contactar y por qué vía, eliminando la parálisis por análisis. Esta definición de canales fue el primer ladrillo de un marco de comunicación que buscaba, por encima de todo, la inmediatez y la trazabilidad.

#### Frecuencias, intensidad y el respeto por el "Deep Work"

Uno de los mayores desafíos al colaborar con ingeniería es encontrar el equilibrio entre la disponibilidad y la interrupción. Como diseñador, mi trabajo suele ser más fragmentado; el de un desarrollador requiere largos periodos de concentración profunda o *deep work*. Por ello, categoricé nuestras interacciones con una lógica de intensidad y urgencia. No todas las preguntas merecen una reunión de Zoom, ni todas las dudas se resuelven con un mensaje de texto.

Establecí un protocolo de respuesta basado en la complejidad:
*   **Preguntas rápidas y clarificaciones:** Estas serían estrictamente asíncronas. Si un desarrollador tenía duda sobre si un icono era el correcto o si un color de borde debía cambiar en *hover*, la consulta se lanzaba al canal de comunicación rápida. Mi compromiso fue responder en un margen de 30 minutos durante las horas centrales del día.
*   **Discusiones profundas:** Para problemas estructurales —como un fallo en la lógica de la API que impedía mostrar los resultados de una carrera como habíamos diseñado—, prohibí el uso de chats. Estos temas requerían una sesión síncrona inmediata.

Este protocolo no era una sugerencia; era una forma de proteger el tiempo de todos. Al establecer estas expectativas de disponibilidad, envié un mensaje claro al equipo: mi puerta estaba abierta, pero mi tiempo (y el suyo) se gestionaría con rigor técnico. Quería evitar a toda costa que un componente mal interpretado se convirtiera en deuda técnica simplemente porque el desarrollador sintió que "no valía la pena molestar al diseñador por esto".

#### Configuración del ecosistema de mensajería: la trinchera digital

Pasamos a la implementación táctica en Slack. No me conformé con un canal general de "Proyecto AsDeporte". Propuse y configuré canales específicos para el MVP B2C, segmentados por áreas de impacto (UI, Lógica de Negocio, QA de Diseño). Mi intención era que la comunicación fluyera de forma orgánica pero que, al mismo tiempo, fuera posible rastrear decisiones pasadas. 

En estos canales, fomenté una cultura de "captura de pantalla y consulta". Si algo en el entorno de desarrollo no se veía como en el mockup, el desarrollador subía la captura y yo respondía con el ajuste exacto de CSS o el valor de espaciado correcto en cuestión de minutos. Esta dinámica de "trinchera" permitió que respondiéramos en el momento justo en que el código se estaba escribiendo. Fue fascinante ver cómo, al cabo de unos días, los desarrolladores empezaron a anticiparse a mis comentarios, internalizando los principios de diseño que habíamos establecido. La inmediatez en Slack sirvió para resolver dudas sobre comportamientos de componentes que, por muy detallada que fuera la documentación estática, siempre dejan un margen de interpretación cuando se enfrentan a datos reales.

#### El rigor forense en la gestión de tareas

Sin embargo, el chat es volátil. Para asegurar que las decisiones importantes no se perdieran en el ruido de la mensajería instantánea, integré el feedback de diseño directamente en Jira. Mi regla fue estricta: cualquier duda técnica que impactara la interfaz de usuario o la experiencia de flujo debía quedar documentada en el ticket correspondiente de la tarea. 

Cuando un desarrollador encontraba una limitación en el framework que impedía realizar una transición específica, yo no solo le daba la solución por Slack; abría el ticket en Jira, adjuntaba la alternativa de diseño y explicaba el porqué del cambio. Este rigor forense buscaba la trazabilidad histórica. Meses después, si alguien se preguntaba por qué simplificamos una transición o por qué un espaciado no seguía la cuadrícula original, el ticket de Jira contaría la historia completa: "Se ajustó debido a limitaciones de rendimiento en dispositivos de gama baja detectadas durante el sprint 2". Esta práctica blindó el proyecto contra la pérdida de contexto y aseguró que cada compromiso de la UX fuera una decisión consciente y documentada, no un accidente de implementación.

#### Protocolo de revisiones síncronas y Design QA preventivo

Para los desafíos más complejos, donde la palabra escrita se quedaba corta, establecimos el uso de sesiones de pantalla compartida vía Zoom. Pero no eran reuniones de estatus; eran sesiones de trabajo técnico. La dinámica que impuse fue la siguiente: el desarrollador mostraba su entorno de *staging* o su rama local directamente en el editor de código o el simulador, y yo realizaba una auditoría visual en tiempo real.

Comparábamos la build actual contra el software de diseño, midiendo píxeles, revisando jerarquías tipográficas y, sobre todo, probando la "sensación" de la interacción. Estas sesiones de Design QA preventivo fueron críticas. Me permitieron detectar errores de implementación —como un retraso en la respuesta de un botón o un estado de carga que parpadeaba demasiado rápido— mucho antes de que llegaran al equipo de QA formal. Al resolver estos problemas "en vivo", ahorramos horas de re-trabajo posterior y ciclos infinitos de reporte de bugs. Era una colaboración pura: yo aprendía sobre las limitaciones del renderizado y ellos aprendían sobre la importancia de la consistencia visual para la confianza del usuario.

#### El contrato social: el acuerdo documentado

Finalmente, para que todo este marco operativo no dependiera de la buena voluntad momentánea, redacté el "Acuerdo Documentado sobre Canales de Comunicación Preferidos". No fue un manual extenso ni un documento burocrático; fue una hoja de ruta de una sola página, clara y accionable, que quedó anclada en el repositorio del proyecto y en el canal principal de comunicación.

Este documento detallaba:
*   Quién era el punto de contacto para cada tipo de decisión.
*   Los tiempos de respuesta esperados.
*   Los enlaces directos a las especificaciones de diseño y al UI Kit.
*   El protocolo para escalar un bloqueo técnico que afectara la UX.

Este artefacto sirvió como el "contrato social" del equipo. Eliminó la ambigüedad y estableció un estándar de profesionalismo donde cada disciplina respetaba los tiempos de la otra. Al tenerlo por escrito, cualquier nuevo miembro que se integrara al equipo de ingeniería sabía exactamente cómo interactuar con diseño desde el primer minuto.

> Al establecer esta arquitectura de comunicación, mi objetivo no era simplemente "vigilar" que mi diseño se viera bien. Mi intención era mucho más profunda: quería eliminar la fricción entre el pensamiento creativo y la ejecución técnica. Aprendí que un diseñador senior debe tener la humildad de entender que su diseño es solo una hipótesis hasta que el código lo hace realidad. Al bajar a las trincheras con los desarrolladores, no solo protegí la integridad del MVP de AsDeporte, sino que también refiné mi propia capacidad para diseñar soluciones que no solo fueran bellas, sino factibles y robustas desde su concepción.

**Próximo paso:**

Con los canales de comunicación blindados y el contrato social firmado, la estructura estaba lista, pero el verdadero reto apenas comenzaba: integrar mi presencia en el latido diario del equipo de ingeniería. No bastaba con estar disponible; tenía que sumergirme en sus rituales, entender sus sprints y aprender a leer entre líneas en cada Daily Stand-up para detectar bloqueos antes de que se convirtieran en muros infranqueables. El escenario estaba montado, pero ahora debía demostrar que el diseño podía seguir el ritmo frenético de los despliegues sin perder un ápice de su propósito estratégico.

### Parte 2: INMERSIÓN EN EL RITMO DE INGENIERÍA: PLANIFICACIÓN Y DAILIES

#### La transición de la imagen estática al pulso del código

Una vez que blindé los canales de comunicación y establecí las reglas del juego, comprendí que mi trabajo como diseñador no podía terminar en un enlace de Figma. Había una verdad incómoda que aceptar: un diseño, por más validado que esté, es solo una intención hasta que se convierte en código. Si quería que el **MVP B2C de AsDeporte** conservara la integridad que tanto nos costó definir, no podía ser un consultor externo que aparece de vez en cuando; tenía que "vivir" en el calendario de ingeniería.

Sincronizar mi flujo de trabajo con el ritmo de los Sprints fue una decisión estratégica, no administrativa. Sabía que si el diseño no seguía el paso de la velocidad de desarrollo, los ingenieros empezarían a tomar decisiones de interfaz por su cuenta para no detenerse. Mi objetivo era evitar que la visión del producto se diluyera en la urgencia de los despliegues. Por ello, decidí sumergirme por completo en las ceremonias Agile, transformando el diseño en un engranaje que alimentaba la maquinaria técnica en lugar de ser un obstáculo que la frenaba.

#### El blindaje de la intención en la Sprint Planning

Mi participación en la **Sprint Planning** fue el primer filtro de calidad. Mi enfoque no era simplemente mostrar pantallas, sino asegurar que ninguna **User Story** o tarea técnica comenzara sin tener su artefacto de diseño perfectamente vinculado y comprendido. Me sentaba con el Líder Técnico y los desarrolladores para revisar el Backlog del sprint entrante, verificando que cada ticket de Jira tuviera el enlace correspondiente a la sección específica del prototipo o del UI Kit.

En estas sesiones, mi rol era defender la "intención del diseño". No me limitaba a decir "aquí va un botón", sino que explicaba el *porqué* estratégico detrás de esa interacción: por qué el flujo de inscripción a una carrera debía ser lineal y no fragmentado, o por qué la jerarquía visual de los resultados de competencia era vital para la retención del atleta. Al dotar al equipo técnico de este contexto, logré que no solo construyeran componentes, sino que entendieran el impacto de su trabajo en la experiencia final. Este ejercicio de alineación eliminó la ambigüedad desde el minuto cero, ahorrándonos horas de retrabajo posterior.

#### Clarificación de especificaciones y la gestión de casos de borde

Durante la planificación, utilicé mi conocimiento de las capacidades de la plataforma para ajustar el alcance en tiempo real. Era el momento de despejar dudas sobre **Edge Cases** (casos de borde) que a menudo se pasan por alto en la fase visual: ¿Qué sucede si el usuario pierde la conexión justo al procesar el pago? ¿Cómo se comporta la interfaz si el nombre del evento es inusualmente largo? 

> Aprendí que un diseño senior se mide por cómo maneja el error, no solo por cómo luce la "ruta feliz". Al abordar estos comportamientos de interacción complejos antes de que se escribiera la primera línea de código, evité que el equipo se comprometiera a implementaciones inalcanzables. Esta fase de "pre-vuelo" permitió que los desarrolladores se sintieran empoderados; sabían exactamente qué construir y contaban con mi respaldo para ajustar el diseño si encontrábamos una limitación técnica insalvable.

#### El oído entrenado en los Daily Stand-ups

Mi presencia en las **Daily Stand-ups** de 15 minutos no era la de un espectador pasivo. Entrené mi oído para detectar señales de alerta en el discurso técnico. Cuando un desarrollador mencionaba que estaba "teniendo problemas para alinear los elementos de la tarjeta de evento", yo no esperaba a que el ticket regresara a mí semanas después. Intervenía de inmediato para entender si era una limitación del framework o una complejidad innecesaria que yo mismo había introducido en el diseño.

Mapear el progreso real contra los mockups validados en estas sesiones diarias me permitió identificar bloqueos de UX de forma proactiva. Si detectaba que alguien estaba atascado en una implementación lógica que comprometía la usabilidad, ofrecía mi disponibilidad inmediata para una sesión síncrona de 10 minutos después de la Daily. Mi foco, según el plan de colaboración que tracé, era desbloquear a ingeniería: prefería rediseñar un componente en ese momento a permitir que una mala decisión de interfaz se solidificara en el código.

#### Higiene operativa y seguimiento en Jira

Para que esta colaboración no se perdiera en conversaciones efímeras de Slack, mantuve una disciplina férrea en las herramientas de gestión de proyectos. Operé directamente dentro de **Jira**, vinculando comentarios de diseño, capturas de pantalla de ajustes rápidos y notas de comportamiento directamente a los tickets de desarrollo. Esta obsesión por la documentación aseguró que cualquier clarificación hecha en una reunión quedara registrada para la posteridad, sirviendo como la única "fuente de verdad" para el equipo.

Monitoreé el movimiento de las tareas en el tablero con rigor forense. Desde que una tarea pasaba a "In Progress" hasta que llegaba a revisión, mantenía una vigilancia constante sobre aquellas que impactaban la interfaz del MVP. Esta visibilidad me permitió anticipar cuándo una funcionalidad estaba lista para mi revisión visual, asegurando que el flujo de trabajo entre diseño y desarrollo fuera continuo y sin fricciones.

#### La importancia de la empatía técnica

Esta inmersión en los rituales de ingeniería me enseñó que un Product Designer senior no solo diseña para el usuario final, sino también para el desarrollador que debe dar vida a esa visión. Al demostrar que entendía sus tiempos, sus limitaciones y su lenguaje, construí una relación de confianza que transformó la dinámica del equipo. Ya no éramos "diseño contra desarrollo", sino un solo bloque trabajando para que el motor de AsDeporte funcionara con precisión milimétrica. La coherencia del producto final no fue producto del azar, sino de esta presencia constante en las trincheras del código.

**Próximo paso:**

Con el ritmo diario de desarrollo bajo control y una comunicación fluida establecida, el MVP comenzó a tomar forma real en los entornos de staging. Sin embargo, ver las piezas moviéndose por separado no era suficiente; necesitaba enfrentarme a la implementación completa en las sesiones de demo para verificar si la suma de las partes realmente entregaba la experiencia que habíamos prometido. El verdadero juicio final estaba por llegar en las revisiones de sprint, donde la teoría del diseño se encontraría cara a cara con la realidad del software funcional.

### Parte 3: VALIDACIÓN Y MEJORA: SPRINT REVIEWS Y RETROSPECTIVAS

#### El momento de la verdad en el entorno de staging

Después de días de seguir el pulso de las *daily stand-ups* y de ver cómo los tickets de Jira se movían rítmicamente hacia la columna de "In Review", llegó el instante que siempre genera una mezcla de ansiedad y entusiasmo: la primera **Sprint Review**. Habíamos pasado semanas puliendo cada curva de las tarjetas de eventos y calibrando la vibración del color principal en Figma, pero el diseño, hasta ese momento, seguía siendo una promesa estática. Ver el incremento de software funcionando en un entorno de **staging**, corriendo en un dispositivo real, fue el verdadero juicio para mi trabajo.

Mi mentalidad en esta transición fue la de un guardián de la integridad. Como diseñador, entiendo que la planificación es teoría, pero la demo es donde la experiencia del usuario se vuelve tangible. No asistí a esa sesión para ser un espectador pasivo que aplaude el progreso técnico; mi rol era asegurar que el "motor que libera tu grandeza" no se hubiera quedado sin potencia en la traslación del diseño al código. Sabía que si no detectaba las inconsistencias en ese momento, el costo de corregirlas más adelante sería prohibitivo. La sesión de revisión no era solo un hito del calendario Agile, era el filtro de calidad definitivo para la promesa que le habíamos hecho a los atletas de AsDeporte.

#### La mirada forense en la Sprint Review

Durante la **Sprint Review**, mi participación fue activa y, por momentos, obsesiva. Mientras el equipo de ingeniería presentaba el flujo de "Inscripción a Carrera", yo no solo observaba si el botón funcionaba; analizaba el ritmo de la transición, la claridad de la jerarquía bajo diferentes condiciones de carga y la respuesta táctil de los elementos. Me integré en la ceremonia con un objetivo claro: evaluar el incremento desde la implementación real, comparándolo mentalmente con los flujos que habíamos validado con los usuarios semanas atrás.

En un momento de la demo, noté que el selector de tallas para la camiseta del kit de corredor no se comportaba como habíamos proyectado. En el prototipo, la interacción era fluida y permitía cambios rápidos; en la build, había un ligero retraso que rompía la percepción de inmediatez. Mi intervención no fue para señalar un error, sino para preguntar sobre la lógica detrás de esa latencia. ¿Era una limitación de la API o un tema de renderizado en el front-end? Esta capacidad de diseccionar la funcionalidad presentada me permitió asegurar que la intención original del diseño se mantuviera intacta, incluso cuando la realidad técnica nos obligaba a mirar bajo el capó del software.

#### Design QA: El diablo está en los detalles de implementación

Inmediatamente después de las demos, mi trabajo se trasladó a una fase de **Design QA** (Control de Calidad de Diseño) mucho más profunda. Utilicé el entorno de staging para realizar una auditoría forense de las pantallas construidas. Mi enfoque no era cosmético; era funcional. Identificar y reportar "bugs de diseño" se convirtió en mi prioridad diaria para evitar que la deuda estética se acumulara.

Me encontré con discrepancias que, para un ojo no entrenado, podrían parecer menores, pero que para la experiencia de AsDeporte eran críticas:
*   **Jerarquías tipográficas:** En la pantalla de resultados de competencia, los pesos de la fuente Montserrat no se estaban renderizando correctamente, lo que hacía que el tiempo del corredor compitiera visualmente con su nombre.
*   **Espaciados (Padding y Margins):** Detecté que los contenedores de los patrocinadores en el home no respetaban el sistema de rejilla de 8px que habíamos definido en el **UI Kit**, creando una sensación de desorden visual que afectaba la percepción de profesionalismo de la plataforma.
*   **Estados de interacción:** Los estados de *hover* y *active* en los botones principales de "Pagar" no tenían la retroalimentación visual necesaria, lo que podría generar incertidumbre en el usuario durante el momento más crítico de la conversión.

Documenté cada uno de estos hallazgos en Jira, adjuntando capturas de pantalla comparativas entre el diseño original y la implementación. Mi razonamiento fue simple: si permitimos que un margen de 4px se pierda hoy, en tres meses tendremos una interfaz fragmentada e irreconocible. El feedback temprano en esta etapa fue vital para mantener la coherencia estética del MVP.

#### El arte de ceder: Negociando trade-offs en la trinchera

No todo fue señalar errores; gran parte de mi labor consistió en **colaborar en la resolución de problemas de implementación**. Hubo un momento crítico con el gráfico de rendimiento del atleta en su perfil. La visualización que yo había diseñado requería una librería de gráficos muy pesada que estaba afectando drásticamente el tiempo de carga de la app en conexiones 4G. 

Aquí es donde entra el criterio senior: tuve que evaluar los **trade-offs** entre la factibilidad técnica y la calidad de la UX. El equipo de ingeniería propuso una alternativa mucho más ligera pero visualmente más simple. En lugar de cerrarme en banda defendiendo mi diseño original, trabajé con ellos en una pizarra digital para encontrar un punto medio. Rediseñamos el gráfico utilizando componentes nativos que el equipo ya tenía dominados, simplificando la interacción sin sacrificar la capacidad del atleta para entender sus datos de un vistazo. Esta flexibilidad me permitió blindar la experiencia general sacrificando un detalle visual específico, ganando a cambio una velocidad de carga que los usuarios agradecerían mucho más que un gráfico sofisticado pero lento.

#### La Retrospectiva como motor de eficiencia

Al final de cada ciclo, mi participación en la **Retrospectiva de Sprint** fue fundamental para optimizar nuestra "maquinaria de colaboración". No me limité a hablar de lo que salió bien; puse sobre la mesa los puntos de fricción que detecté en el proceso de **handoff**. Por ejemplo, descubrimos que los desarrolladores estaban perdiendo tiempo tratando de adivinar el comportamiento de los modales en pantallas pequeñas porque mis especificaciones no eran lo suficientemente claras para esos casos de borde (*edge cases*).

Propuse una mejora inmediata: incluir una sección de "Comportamiento Responsivo" en cada entrega de Figma y vincular directamente los prototipos de microinteracciones en los tickets de Jira. Basándome en el feedback directo que les pedí a los ingenieros, ajusté mi forma de entregar activos para que el flujo entre mi software de diseño y su repositorio de código fuera cada vez más transparente. No se trataba de trabajar más, sino de articular mejor la información para que ellos pudieran programar con mayor confianza y menos interrupciones.

#### Blindando la fuente de verdad: El cierre del ciclo

Para cerrar el ciclo de cada sprint, realicé una tarea que a menudo se ignora pero que es vital para la salud del producto a largo plazo: el **mantenimiento de la documentación**. Cada vez que tomábamos una decisión técnica en la demo o en la retro que alteraba el diseño original, yo regresaba a mi archivo maestro en Figma para actualizar el **UI Kit** y las especificaciones.

Si decidíamos cambiar un selector de fecha por uno más sencillo por razones de tiempo, esa decisión debía quedar reflejada en la "fuente de verdad". Esto evitó que en el siguiente sprint otro desarrollador tomara como referencia un componente que ya habíamos descartado o modificado. Esta disciplina de actualización constante aseguró que la documentación de diseño no fuera un artefacto arqueológico, sino un reflejo fiel y vivo de la realidad del producto que estábamos construyendo para AsDeporte. La calidad final no fue el resultado de un solo gran esfuerzo, sino de este acompañamiento meticuloso hasta que el último píxel estuvo en su lugar.

**Próximo paso:**

A pesar de que las ceremonias Agile nos daban una estructura sólida de validación, me di cuenta de que los problemas más complejos no aparecían en las demos programadas, sino en el silencio entre reuniones, cuando un desarrollador se encontraba solo frente a un flujo roto. La verdadera prueba de fuego para mi rol no sería solo validar lo terminado, sino estar presente en el momento exacto en que surgía la duda para evitar que una mala decisión se cristalizara en código. Necesitaba transformar mi disponibilidad en una herramienta estratégica de desbloqueo inmediato.

### Parte 4: EL DISEÑADOR COMO FACILITADOR: DISPONIBILIDAD Y DESBLOQUEO

#### El fin de la estática: cuando el archivo deja de ser el protagonista

Las ceremonias Agile me daban el armazón, pero pronto comprendí que el verdadero producto no se construye en las reuniones de planificación, sino en el silencio tenso que ocurre entre un ticket de Jira y la primera línea de código. Podía tener el handoff más documentado de la historia de AsDeporte, con cada espaciado y cada variante de componente definida al píxel, pero en cuanto un desarrollador abría el IDE y se encontraba con una restricción técnica no prevista, el diseño estático moría. Mi mayor temor no era que me hicieran preguntas, sino que dejaran de hacérmelas y empezaran a "asumir" soluciones por su cuenta para no retrasar el sprint.

Para blindar la integridad del MVP B2C, maniobré para transformar mi rol: dejé de ser el autor de los archivos para convertirme en un consultor de implementación en tiempo real. Entendí que la brecha entre un mockup en Figma y una experiencia funcional solo se cierra con presencia física o digital constante. No podía permitir que la complejidad de la plataforma —especialmente en flujos críticos como la inscripción a eventos o la visualización de resultados en vivo— se diluyera porque alguien interpretó mal una transición o decidió que un margen de 16px era "lo mismo" que uno de 24px. Mi estrategia fue clara: la disponibilidad inmediata era mi herramienta de control de calidad más potente.

#### La logística del desbloqueo: por qué mi puerta digital nunca se cerraba

Establecer una disponibilidad ad-hoc no significaba vivir en un estado de interrupción perpetua, sino gestionar mi jornada para estar presente cuando el código quemaba. Siguiendo mi plan de acción para mantener una comunicación fluida, acordé con el Líder Técnico y los desarrolladores clave que mi prioridad absoluta sería responder a sus dudas de implementación antes de avanzar con nuevas pantallas de diseño. Mi razonamiento era estratégico: un desarrollador bloqueado es un riesgo para el deadline; un desarrollador que "asume" es un riesgo para la usabilidad.

Me enfoqué obsesivamente en los *edge cases* que el prototipo, por muy alta fidelidad que fuera, no lograba cubrir del todo. Recuerdo una tarde en la que un ingeniero me contactó por una duda en el flujo de pago: ¿qué debía mostrar la interfaz si la API de la pasarela tardaba más de 10 segundos en responder pero no devolvía un error explícito? En lugar de dejar que implementaran un *spinner* genérico que frustrara al atleta, intervine para definir un estado de espera con mensajes de contexto que reforzaran la seguridad de la transacción. Este tipo de desbloqueo rápido evitó que se tomaran decisiones unilaterales que habrían degradado la percepción de confianza que tanto nos había costado construir en la fase de estrategia.

#### El arbitraje de los trade-offs: defendiendo la UX sin romper el sprint

Uno de los desafíos más constantes fue la gestión de las limitaciones técnicas imprevistas. En la teoría, todo es posible; en la práctica, el rendimiento del dispositivo o la arquitectura de los datos imponen sus propias reglas. Cuando surgía un obstáculo —como un componente de filtrado que resultaba demasiado costoso de implementar según lo diseñado originalmente—, mi labor era evaluar el coste del compromiso. No me limité a decir "háganlo como está en Figma"; me senté con ellos para diagnosticar la raíz del problema y proponer alternativas.

> "Un diseño que no se puede implementar con el rendimiento adecuado no es un buen diseño, es una deuda técnica disfrazada de estética."

Esta mentalidad me permitió articular soluciones intermedias que respetaban la usabilidad validada sin comprometer los tiempos de entrega. Si una animación de transición entre pantallas de resultados deportivos penalizaba la carga en dispositivos de gama baja, decidí simplificarla a un fundido básico, priorizando la velocidad de acceso a la información sobre el deleite visual. Estos acuerdos quedaban documentados en la misma tarea de Jira, asegurando que cualquier cambio respecto al diseño original tuviera una justificación técnica y de negocio clara, blindando así la visión del producto frente a la arbitrariedad.

#### Figma como pizarra síncrona: actualizando la fuente de verdad en vivo

Para que esta colaboración fuera efectiva, utilicé Figma no como un repositorio estático, sino como una herramienta de comunicación síncrona. Durante las sesiones de pantalla compartida por Zoom o Teams, realizaba ajustes menores en el UI Kit o en las especificaciones de interacción mientras hablaba con el desarrollador. Si descubríamos que un selector de fecha funcionaba mejor con una lógica distinta debido a cómo se estructuraban los eventos en la base de datos de AsDeporte, yo modificaba el componente y las notas de handoff en ese mismo instante.

Este proceso de actualización constante fue vital para mantener lo que yo llamo la "fuente de verdad viva". Evité que la documentación de diseño se convirtiera en un artefacto arqueológico que no coincidía con lo que se estaba programando. Al mostrar prototipos interactivos en tiempo real para aclarar comportamientos complejos —como el comportamiento de los encabezados pegajosos (*sticky headers*) en las listas largas de participantes—, eliminé la ambigüedad visual. El desarrollador no tenía que adivinar; podía ver el comportamiento esperado y yo podía ajustar las variables de diseño (como el *easing* de una transición) directamente en su presencia para que él solo tuviera que traducir esos valores al código.

#### Construyendo la cultura del "preguntar antes de asumir"

Nada de lo anterior habría funcionado sin un cambio cultural en la relación entre diseño e ingeniería. Desde el inicio, me esforcé por establecer la expectativa de que mi rol era facilitar su trabajo, no juzgarlo. Al definir canales de comunicación claros —Slack para preguntas rápidas de "sí o no", y sesiones de 15 minutos para discusiones más profundas—, eliminé la fricción del contacto. Mi objetivo era que el equipo de desarrollo viera en mí a un aliado técnico que entendía sus restricciones, no a un artista que defendía sus píxeles desde una torre de marfil.

Este "Acuerdo de Canales de Comunicación" no fue un documento burocrático, sino un pacto de confianza. Fomenté activamente que me interrumpieran con capturas de pantalla de la build en curso si algo no les cuadraba. A menudo, recibía mensajes en Slack con preguntas sobre el peso de una fuente o el color de un estado de error que no estaba claro en el modo de inspección. Responder a estas dudas en menos de diez minutos enviando un enlace directo a la capa específica en Figma o una grabación corta en Loom explicando el flujo, se convirtió en el lubricante que permitió que el motor de desarrollo de AsDeporte no se detuviera nunca. Esta agilidad redujo drásticamente la deuda de diseño que suele acumularse cuando las dudas se resuelven con suposiciones.

#### La reducción de la deuda mediante la presencia estratégica

Al final del día, la disponibilidad constante no era una cuestión de amabilidad, sino de eficiencia estratégica. Un diseñador que desaparece después del handoff es, en última instancia, responsable de las inconsistencias del producto final. Al estar presente en cada micro-decisión, logré que el equipo de ingeniería se sintiera dueño del diseño tanto como yo. La implementación del MVP B2C empezó a reflejar una precisión milimétrica no porque yo los supervisara, sino porque los desbloqueaba.

Esta dinámica de colaboración continua me permitió anticipar problemas antes de que llegaran a una build oficial. Sin embargo, por muy estrecha que fuera la comunicación en Slack o Figma, sabía que la verdadera prueba de fuego ocurriría cuando el código saliera del entorno de desarrollo del ingeniero y llegara a un entorno de pruebas real. La implementación podía verse bien en una captura de pantalla, pero la experiencia de usuario se siente en el dispositivo, bajo carga y con datos reales.

**Próximo paso:**

A pesar de haber resuelto cientos de dudas en el día a día, empecé a notar que algunas interacciones complejas, que en Figma se sentían fluidas, presentaban comportamientos extraños al ser integradas con los servicios de datos reales en la build de staging. Una cosa era discutir un margen por Slack y otra muy distinta era ver cómo colapsaba la jerarquía visual cuando un nombre de evento era demasiado largo o una imagen no cargaba. Me di cuenta de que necesitaba pasar de la consultoría reactiva a una auditoría sistemática y rigurosa sobre el producto vivo para asegurar que nada de lo que habíamos validado se perdiera en la traducción final al código.

### Parte 5: DESIGN QA: LA AUDITORÍA DE LA EXPERIENCIA EN STAGING

#### La transición del lienzo a la realidad técnica

Había pasado semanas respondiendo dudas rápidas por Slack y desbloqueando al equipo de ingeniería en sesiones de Zoom de quince minutos. Esa fase de "consultoría reactiva" era necesaria para mantener el ritmo, pero sabía que estábamos llegando a un punto de inflexión peligroso. Los componentes ya no eran solo símbolos en Figma; ahora eran líneas de código viviendo en una build. En mi experiencia, este es el momento donde los proyectos de gran escala suelen desmoronarse: la brecha entre la intención del diseño y la ejecución técnica se ensancha si no hay una intervención quirúrgica.

No podía permitir que el MVP B2C de AsDeporte se convirtiera en otro producto que "se ve bien en los mockups pero se siente roto en las manos". La belleza de un botón con el gradiente exacto de la marca no sirve de nada si el área de toque es insuficiente o si el espaciado colapsa cuando el nombre de una carrera es demasiado largo. Decidí que era el momento de dejar de ser un consultor de apoyo para convertirme en un auditor implacable. Inicié la fase de **Design QA**, un proceso sistemático donde el objetivo no es solo encontrar errores, sino blindar la integridad de la experiencia que ya habíamos validado con los atletas.

#### Inmersión forense en entornos de Staging

Para que esta auditoría fuera efectiva, no podía conformarme con ver capturas de pantalla que los desarrolladores me enviaban por Jira. Necesitaba "ensuciarme las manos" con el producto vivo. Coordiné con el Líder Técnico para obtener acceso directo a los entornos de **staging** y, en algunos casos, a las ramas específicas de Git donde se estaban integrando las funcionalidades más críticas del perfil del atleta y el flujo de inscripción.

Navegar por una build de staging es una experiencia radicalmente distinta a moverte por un prototipo de Figma. Aquí, la latencia es real, los datos no siempre son perfectos y las restricciones del navegador empiezan a pasar factura. Me dediqué a explorar cada rincón de estas implementaciones preliminares con una mentalidad de búsqueda de fallos. Mi enfoque no era solo ver si la pantalla "estaba ahí", sino cómo se comportaba bajo estrés. Acceder a estos entornos me permitió identificar "bugs de diseño" —discrepancias sutiles que a menudo pasan desapercibidas para un desarrollador enfocado en la lógica funcional— mucho antes de que llegaran a una versión estable. Esta inmersión fue el único camino para asegurar que la lógica de negocio de AsDeporte y la interfaz de usuario coexistieran sin las fricciones que los usuarios habían reportado en versiones anteriores de la app.

#### El inspector de elementos como herramienta de precisión

Una vez dentro de la build, mi ritual de auditoría se volvió puramente técnico. No me limité a una revisión visual superficial; utilicé las herramientas de desarrollador del navegador para realizar una inspección forense de cada componente. Abría el inspector de elementos en una pantalla y mis especificaciones de Figma en la otra, comparando cada valor de CSS contra mi **UI Kit**.

*   **Geometría y Espaciado:** Verifiqué obsesivamente que los *paddings* y *margins* respetaran el sistema de rejilla de 8px que habíamos definido. Descubrí que, en varios componentes de la lista de eventos, los desarrolladores habían usado valores arbitrarios para "ajustar a ojo", lo que rompía la armonía visual de la página.
*   **Cromatismo y Tipografía:** Audité los valores hexadecimales de los colores y los pesos tipográficos. En un producto como AsDeporte, donde la jerarquía visual dicta la rapidez con la que un atleta encuentra su tiempo de carrera, un título en `font-weight: 500` cuando debería ser `700` no es un detalle menor; es un error de comunicación.
*   **Consistencia de Componentes:** Me aseguré de que los estados de los botones (hover, active, disabled) fueran consistentes en todas las vistas. Cada píxel de desviación que encontraba lo sentía como una grieta en la confianza que el usuario depositaría en la plataforma. Mi razonamiento era simple: si no somos capaces de cuidar el espaciado de un botón, ¿cómo va a confiar el atleta en que sus tiempos de maratón están registrados con precisión?

#### Contrastando la cinética: Build vs. Prototipo

El mayor desafío no estaba en lo estático, sino en el movimiento. Un diseño puede ser perfecto en un PNG, pero la experiencia de usuario se define en la transición. Dediqué horas a contrastar el comportamiento de la build real contra el prototipo de alta fidelidad que habíamos validado previamente.

Puse especial atención en las microinteracciones y la retroalimentación del sistema. Por ejemplo, habíamos diseñado un estado de carga (*skeleton screen*) específico para la cartelera de eventos para mitigar la percepción de espera. Al probarlo en staging con datos reales, noté que el skeleton desaparecía demasiado abruptamente, creando un parpadeo visual molesto que no existía en mi prototipo de Figma. También identifiqué "flujos rotos a nivel de UI": situaciones donde, tras completar una acción como la actualización del perfil, el sistema devolvía al usuario a una pantalla inesperada o perdía el foco del scroll. Estos errores de lógica de navegación solo se hacen evidentes cuando los datos reales entran en juego, y documentarlos en esta etapa fue crucial para evitar que el producto final se sintiera "torpe" al tacto.

#### La prueba de fuego en hardware real

Como diseñador senior, sé que el simulador de escritorio miente. Para un producto como el de AsDeporte, donde el usuario probablemente interactuará con la plataforma en un campo de entrenamiento, bajo la luz del sol o con las manos cansadas tras una competencia, la prueba en dispositivos reales era un mandato no negociable.

Cargué las builds de staging en una variedad de dispositivos móviles (iOS y Android) y probé la interfaz en diferentes navegadores. Mi enfoque aquí fue la **ergonomía táctil y la legibilidad**:
1.  **Áreas de toque:** Verifiqué que todos los elementos interactivos tuvieran un área mínima de 44x44 píxeles. Encontré varios enlaces de "Términos y Condiciones" y filtros pequeños que eran casi imposibles de accionar con un pulgar promedio.
2.  **Rendimiento bajo condiciones variables:** Ajusté el brillo de los dispositivos al máximo y al mínimo para comprobar si el contraste de nuestra paleta de colores seguía cumpliendo con los estándares de accesibilidad en exteriores.
3.  **Responsividad real:** Más allá de encoger la ventana del navegador, observé cómo se reacomodaban los elementos complejos, como las tablas de resultados, en pantallas pequeñas de modelos de teléfono más antiguos. Esta rigurosidad técnica era necesaria para garantizar que el "motor que libera tu grandeza" funcionara con la misma agilidad en un iPhone de última generación que en un dispositivo de gama media en manos de un corredor aficionado.

#### Sincronización de estándares y el rol del guardián

Esta auditoría no fue un esfuerzo solitario. Trabajé codo a codo con el equipo de Control de Calidad (QA) para alinear nuestros criterios de éxito. Me di cuenta de que, mientras ellos estaban entrenados para encontrar fallos en el código o errores de servidor, yo debía entrenarlos para identificar fallos en la experiencia.

Utilicé el documento de **"Proceso de Diseño de Producto para AsDeporte.docx"** como nuestra constitución técnica. Les transmití la importancia de la usabilidad y les expliqué por qué una inconsistencia en el comportamiento de un modal era tan grave como un error 404. Empezamos a documentar cada hallazgo en **Jira**, transformando mis observaciones cualitativas en tickets técnicos accionables. No escribía "esto se ve raro"; escribía "el margen superior del componente Card_Event debe ser de 24px, actualmente está implementado en 18px; adjunto comparativa de inspector".

> En esta etapa, mi responsabilidad ética como diseñador cambió. Ya no se trataba de proponer soluciones creativas, sino de proteger la inversión de la empresa y la experiencia del atleta. El Design QA es el momento de la verdad: aquí es donde demuestras si entiendes el medio técnico para el que diseñas o si solo eres capaz de dibujar pantallas bonitas. Ser el guardián de la calidad significa ser incómodo a veces, pero es la única forma de asegurar que el producto que llega al mercado sea el mismo que prometimos construir.

**Próximo paso:**

A medida que el número de discrepancias documentadas en Jira empezó a crecer, me di cuenta de que no bastaba con señalar los errores; necesitaba una estrategia para gestionarlos sin paralizar el desarrollo. La tensión en el equipo de ingeniería empezó a aumentar cuando vieron la montaña de "bugs de diseño" que mi auditoría había desenterrado. Me enfrenté al reto de priorizar qué correcciones eran críticas para el lanzamiento del MVP y cuáles podían esperar, una decisión que me obligaría a entrar de lleno en la gestión técnica de la calidad y la negociación de trade-offs de último minuto.

### Parte 6: GESTIÓN DE LA CALIDAD: REPORTE DE BUGS DE DISEÑO

#### La lista de la verdad: del hallazgo a la gestión

Me encontraba frente a una hoja de cálculo que empezaba a crecer de forma alarmante. Tras varias sesiones intensas de auditoría en el entorno de **Staging**, el inventario de discrepancias visuales y funcionales superaba los cincuenta puntos. Tenía dos opciones: enviar ese listado "por la borda" y esperar que el equipo de ingeniería no me odiara, o diseñar un sistema de reporte que fuera constructivo, priorizado y, sobre todo, procesable. Como diseñador, entendí que mi trabajo en esta fase no era ser un inspector de policía, sino un facilitador de calidad. 

Lanzar errores sin contexto es la forma más rápida de romper la moral de un equipo de desarrollo que ya está bajo la presión de un lanzamiento inminente. Mi razonamiento fue estratégico: necesitaba transformar mi crítica estética en una hoja de ruta técnica. Si quería que el **MVP B2C de AsDeporte** reflejara la excelencia que habíamos validado en los prototipos, debía hablar el lenguaje de los desarrolladores. No bastaba con decir que algo "se veía mal"; tenía que demostrar por qué estaba mal y cómo arreglarlo sin que ellos tuvieran que descifrar mis intenciones. Esta transición de la auditoría a la gestión de calidad fue el momento en que dejé de dibujar pantallas para empezar a blindar la experiencia real.

#### Identificación quirúrgica: cuando el diablo está en los 2 píxeles

Empecé el proceso con una mentalidad forense. Abrí el entorno de **Staging** en un monitor y mis especificaciones de Figma en el otro. No buscaba errores generales; buscaba fallos de precisión que, sumados, degradaban la percepción de marca. Me enfoqué en cuatro categorías críticas que documenté con rigor:

*   **Inconsistencias de Espaciado y Layout:** Detecté que los contenedores de los eventos (las *Cards*) estaban usando un *padding* interno de 16px cuando el **UI Kit** dictaba claramente 24px. Esta diferencia, aunque pequeña, rompía el ritmo visual y hacía que la interfaz se sintiera apretada.
*   **Desviaciones Cromáticas:** Utilizando el inspector del navegador, encontré que varios botones de acción secundaria estaban usando un gris genérico del framework de desarrollo en lugar del código hexadecimal específico que habíamos definido para mantener el contraste de accesibilidad.
*   **Jerarquía Tipográfica Rota:** En la sección de "Resultados", los encabezados H3 no estaban respetando el *weight* de la fuente Montserrat, lo que eliminaba la distinción visual entre el nombre del atleta y su tiempo de carrera.
*   **Estados de Interacción Huérfanos:** Este fue el hallazgo más recurrente. Los estados de *hover*, *active* y *disabled* en los formularios de registro simplemente no existían en la build. El usuario no recibía feedback visual al interactuar, lo que generaba una sensación de "sistema muerto" o poco responsivo.

Mi foco fue asegurar que el comportamiento de la interfaz coincidiera exactamente con el prototipo. Identificar flujos rotos a nivel de UI —como un modal que se cerraba sin permitir confirmar la acción— fue vital para no comprometer la usabilidad básica del MVP.

#### El ticket como contrato: documentación técnica en Jira

Una vez identificados los problemas, pasé a la fase de "traducción". No utilicé correos ni mensajes informales; volqué cada hallazgo en **Jira**, integrándome totalmente en el flujo de trabajo de ingeniería. Entendí que para que un "bug de diseño" sea tomado en serio, debe tener la misma estructura y rigor que un bug de código. 

Cada ticket que redacté seguía un estándar innegociable para evitar la ambigüedad:
1.  **Comportamiento Observado:** Una descripción objetiva de lo que estaba pasando (ej. "El botón de 'Inscribirme' no cambia de color al pasar el cursor").
2.  **Comportamiento Esperado:** La definición exacta de lo que debería pasar según el diseño (ej. "El botón debe cambiar al color #004B8D con una transición de 200ms").
3.  **Evidencia y Fuente de Verdad:** Vinculé directamente el archivo de Figma y la sección específica del **UI Kit**. 

Al documentar de esta manera, eliminé la necesidad de que el desarrollador tuviera que buscar el diseño o preguntarme qué quería decir. El ticket se convertía en un contrato de ejecución. Esta disciplina de centralizar todo en Jira permitió que el equipo de desarrollo pudiera estimar el esfuerzo de cada corrección y asignarlo a los sprints correspondientes, tratando la calidad visual como una tarea técnica de primer nivel y no como un "favor" que se le hace al diseñador.

#### Feedback de alta fidelidad: el valor de lo visual

Para reducir aún más la fricción, decidí que mis palabras no eran suficientes. Utilicé herramientas de feedback visual como **Markup.io** para "pinchar" comentarios directamente sobre la interfaz en vivo, permitiendo que los desarrolladores vieran el error en el contexto exacto del código. 

> El feedback visual es el antídoto contra las reuniones innecesarias. Si puedo mostrarte un video de 15 segundos donde se ve que el menú lateral "tartamudea" al abrirse, te estoy ahorrando 30 minutos de explicación técnica.

Realicé grabaciones de pantalla cortas con **Loom** para mostrar comportamientos erráticos en las transiciones que eran difíciles de describir con texto. En estas grabaciones, señalaba con el cursor exactamente dónde la animación se rompía o dónde el *scroll* infinito dejaba de cargar elementos. También adjunté capturas de pantalla con anotaciones precisas sobre las builds de staging, marcando con flechas rojas y medidas de píxeles las discrepancias de alineación. Este nivel de detalle obsesivo no era por perfeccionismo vacío; era una estrategia de optimización. Al entregar un feedback incontestable y visual, el equipo de ingeniería podía ir directo a la solución sin dudas, acelerando drásticamente los ciclos de corrección.

#### Triaje y pragmatismo: la gestión de trade-offs

Con la lista de tickets ya en el **backlog**, me enfrenté a la realidad del calendario: no podíamos arreglarlo todo antes del lanzamiento. Aquí es donde mi rol de diseñador senior se transformó en uno de gestión de producto. Me senté con el Líder Técnico para realizar un **triaje** de los bugs de diseño, evaluando la severidad de cada uno bajo la lente de la experiencia del usuario y la factibilidad técnica.

Categoricé los hallazgos en dos grandes grupos:
*   **Bloqueantes de UX:** Errores que impedían completar una tarea (como un botón de pago que no se veía en pantallas pequeñas) o que dañaban gravemente la credibilidad de la marca AsDeporte. Estos eran innegociables y debían corregirse antes de la salida a producción.
*   **Detalles Visuales (Polish):** Ajustes de 2 o 4 píxeles en elementos decorativos o inconsistencias menores en iconos que no afectaban la navegación. 

Este ejercicio de pragmatismo fue vital para mantener la salud del proyecto. Ser flexible en los detalles menores me dio la autoridad moral para ser firme en los problemas que realmente importaban. Acepté sacrificar ciertos "refinamientos estéticos" en favor de asegurar que el flujo de inscripción fuera impecable. Esta capacidad de negociar **trade-offs** demostró al equipo de ingeniería que yo entendía las restricciones de tiempo y que mi objetivo no era la perfección idealista, sino el éxito del lanzamiento del MVP.

#### El cierre del ciclo: verificación y mejora continua

Mi labor no terminó al enviar los tickets. Establecí un proceso de seguimiento estrecho, colaborando con el equipo de **QA** (Quality Assurance) para que ellos también supieran qué buscar desde la perspectiva de diseño. A medida que los desarrolladores marcaban los tickets como "Resueltos", yo volvía a las builds de staging para verificar la implementación. 

En algunos casos, descubrí que la corrección de un bug visual revelaba un desafío técnico más profundo que no habíamos previsto. Cuando esto ocurría, mantenía la documentación del diseño actualizada, ajustando el **UI Kit** o las especificaciones si decidíamos de mutuo acuerdo que una solución alternativa era más viable técnicamente sin sacrificar la usabilidad. Este proceso de "re-verificación" aseguró que no se introdujeran nuevos errores al arreglar los anteriores. Al final de este ciclo, la confianza entre los dos equipos se había fortalecido; los desarrolladores apreciaban la claridad de mis reportes y yo valoraba el esfuerzo técnico por alcanzar la fidelidad visual que el proyecto demandaba.

**Próximo paso:**

Justo cuando sentíamos que el control de calidad estaba bajo control, surgió un obstáculo que no pudimos resolver con simples ajustes de píxeles: el motor de búsqueda de eventos, el corazón de la plataforma, presentaba limitaciones técnicas que hacían imposible implementar el diseño de filtros complejos que habíamos validado. Me vi obligado a abandonar la comodidad del inspector de elementos para entrar en una sala de guerra técnica, donde el reto ya no era reportar errores, sino rediseñar en tiempo real una funcionalidad crítica bajo la presión del reloj. Aquella negociación marcaría el verdadero límite entre lo que habíamos soñado y lo que era posible construir.

### Parte 7: NEGOCIACIÓN TÉCNICA: RESOLVIENDO DESAFÍOS DE IMPLEMENTACIÓN

#### El muro invisible del motor de búsqueda

La calma que sentía tras cerrar el reporte de bugs visuales se evaporó en un solo mensaje de Slack del Líder Técnico: "Tenemos un problema con el motor de búsqueda; la latencia de las *queries* se dispara con los filtros booleanos que diseñaste". En ese momento, supe que habíamos pasado de la estética a la supervivencia del producto. El buscador no era una funcionalidad más; era el corazón del MVP de AsDeporte, la puerta de entrada para que miles de atletas encontraran su próximo reto. Si el motor fallaba o tardaba más de dos segundos en responder, todo el trabajo de usabilidad previo sería irrelevante.

Mi reacción inmediata no fue de frustración, sino de movilización táctica. Como responsable del diseño, entendía que no podía quedarme en la superficie de los píxeles mientras los cimientos técnicos se agrietaban. Siguiendo el proceso de **Colaboración en la Resolución de Problemas de Implementación** que habíamos establecido, solicité abrir una "sala de guerra" técnica inmediata. Mi objetivo era claro: actuar como puente entre la visión ideal que habíamos validado con los usuarios y la cruda realidad del *backend*. No podíamos permitir que el proyecto se detuviera, pero tampoco podíamos lanzar un buscador roto que traicionara la promesa de ser el "motor que libera tu grandeza".

#### Disección en la sala de guerra: UX vs. Latencia

Me reuní con el Líder Técnico y los desarrolladores de *backend* clave para diseccionar el problema. Abrimos las tripas de la arquitectura actual y enfrentamos los números: el diseño original permitía a los usuarios filtrar simultáneamente por disciplina, rango de precio, geolocalización exacta y tipo de certificación. Técnicamente, esto generaba una complejidad de consulta que el motor de búsqueda propietario no podía procesar en tiempo real sin degradar el rendimiento del servidor.

Durante esta sesión, mi enfoque fue puramente resolutivo. No defendí el diseño original por ego; lo hice por valor. Les pedí que me explicaran, paso a paso, dónde ocurría el cuello de botella. Descubrimos que la geolocalización dinámica basada en el radio de kilómetros era el principal culpable de la latencia. Al entender esta restricción técnica, mi mentalidad cambió de "cómo hacemos que esto funcione" a "cómo logramos el mismo objetivo de usuario con una arquitectura más ligera". Fue una conversación de ingeniería de producto pura, donde el diseño se puso al servicio de la viabilidad técnica sin perder de vista la necesidad del atleta.

#### La balanza de los trade-offs: ¿Qué estamos dispuestos a sacrificar?

Entramos en un proceso forense de evaluación de compensaciones (*trade-offs*). Teníamos tres variables en conflicto: la factibilidad técnica inmediata, el cronograma del sprint que ya estaba al límite y la calidad de la experiencia del usuario. Puse sobre la mesa el impacto de cada decisión:

*   **Opción A: Mantener el diseño original.** Implicaba reestructurar la base de datos de eventos, lo que retrasaría el lanzamiento del MVP al menos tres semanas. El riesgo de negocio era inaceptable.
*   **Opción B: Eliminar los filtros complejos.** Reducía la latencia a milisegundos, pero convertía la búsqueda en una lista plana difícil de navegar, aumentando la tasa de abandono en el embudo de conversión.
*   **Opción C: Simplificación inteligente.** Mi propuesta fue pivotar hacia un modelo de filtrado por regiones predefinidas y estados, eliminando el cálculo de radio por coordenadas en tiempo real, pero manteniendo la relevancia de los resultados.

Analizamos el impacto en el usuario final: ¿realmente un atleta necesita buscar a exactamente 15.5 km de su casa, o le basta con ver todos los eventos en "CDMX y Área Metropolitana"? La respuesta, basada en los perfiles de usuario que habíamos definido, era clara: la relevancia regional era suficiente. Este *trade-off* nos permitía salvar el rendimiento del motor de búsqueda y cumplir con la fecha de lanzamiento, sacrificando una funcionalidad "lujosa" por una "funcional y robusta".

#### Co-creación en tiempo real: El poder de la pizarra digital

Para aterrizar esta nueva realidad técnica, tomé el control de la sesión con una pizarra digital de FigJam. Mientras el Líder Técnico validaba la viabilidad de las consultas a la base de datos en el acto, yo dibujaba flujos alternativos. Fue una danza de co-creación:

1.  **Iteración de baja fidelidad:** Dibujé una interfaz de filtros simplificada que reemplazaba el radio de búsqueda por un selector de "Región/Estado".
2.  **Validación técnica inmediata:** Los desarrolladores confirmaban que el motor de búsqueda manejaba estas *queries* con una latencia mínima.
3.  **Refinamiento de interacción:** Ajusté el comportamiento de los filtros para que fueran acumulativos, permitiendo al usuario refinar su búsqueda sin sobrecargar el servidor con peticiones innecesarias.

Esta dinámica de trabajo ágil, con pantalla compartida y decisiones tomadas en el momento, fue lo que realmente desbloqueó el desarrollo. No hubo correos de ida y vuelta; hubo acuerdos técnicos y visuales que se cerraron en 45 minutos de tensión creativa. Cada trazo en la pizarra tenía un respaldo técnico inmediato, asegurando que lo que se estaba diseñando era 100% construible.

#### Blindando la UX: La defensa de lo no negociable

A pesar de mi flexibilidad, mantuve una postura firme en los principios de diseño que consideraba críticos para la conversión. Los desarrolladores sugirieron, en un momento de presión, eliminar los filtros de "Disciplina" para simplificar aún más la interfaz. Mi respuesta fue contundente: "Si un atleta entra a buscar un triatlón y le mostramos carreras de 5K porque no puede filtrar, la plataforma pierde su valor fundamental. El filtro de disciplina es el pilar de la relevancia; no es negociable".

Logramos un equilibrio: mantuvimos la jerarquía de filtros esenciales (Disciplina, Fecha, Estado) y sacrificamos los secundarios (Precio, Cupo disponible) para una fase posterior. Una vez alcanzado el consenso, procedí a documentar esta **Solución Acordada** en Jira. No me limité a subir un *screenshot*; redacté las especificaciones técnicas de cómo debía comportarse el motor de búsqueda con esta nueva lógica de filtros. Esta documentación de acuerdos fue vital para que el equipo de QA y el Product Manager estuvieran alineados con la nueva dirección técnica del MVP.

#### La humildad técnica como motor de éxito

Reflexionando sobre esa sesión, me doy cuenta de que estas negociaciones no son derrotas del diseño. Al contrario, son victorias de la ingeniería de producto. El éxito de un **Senior Product Designer** no reside en imponer una visión visual inalcanzable, sino en lanzar una herramienta que funcione perfectamente, aunque sea menos ambiciosa que el concepto original. Mi humildad técnica me permitió escuchar las restricciones de mis compañeros de ingeniería y transformarlas en oportunidades de diseño pragmático.

Al final del día, el motor de búsqueda de AsDeporte se construyó con precisión milimétrica, no porque el diseño fuera perfecto, sino porque la colaboración con desarrollo fue constante y honesta. Logramos una plataforma rápida, funcional y fiel a la esencia del negocio, demostrando que el diseño de producto es, ante todo, la resolución creativa de problemas bajo presión.

**Próximo paso:**

Con los acuerdos técnicos cerrados y el motor de búsqueda en plena reconstrucción, me di cuenta de que mi "fuente de verdad" en Figma se había vuelto obsoleta en cuestión de horas. Las pantallas que los desarrolladores estaban usando como referencia ya no coincidían con lo que habíamos pactado en la sala de guerra, creando un riesgo de confusión masiva para el equipo de QA. Me enfrentaba a la tarea urgente de sincronizar toda la documentación para que el código y el diseño volvieran a hablar el mismo idioma antes de que fuera demasiado tarde.

### Parte 8: SINCRONIZACIÓN DE LA VERDAD: ACTUALIZACIÓN DE LA DOCUMENTACIÓN

#### La ficción del lienzo frente a la realidad del código

Al cerrar la sesión de negociación técnica sobre el motor de búsqueda, me invadió una sensación de urgencia que solo aparece cuando entiendes que tu "fuente de verdad" se ha convertido en una mentira. En mi pantalla de Figma, el buscador de AsDeporte seguía luciendo aquellas transiciones complejas y el filtrado dinámico multi-eje que habíamos soñado al inicio; sin embargo, en el repositorio de código, los desarrolladores ya estaban implementando la versión simplificada y robusta que acabábamos de pactar. Esa brecha entre el diseño y la implementación es lo que llamo "deuda de documentación", y es el primer paso hacia un producto fragmentado.

Comprendí que si no actuaba de inmediato, el equipo de QA (Control de Calidad) empezaría a reportar como "errores" decisiones que nosotros ya habíamos validado como "soluciones técnicas". Mi responsabilidad en ese momento no era crear algo nuevo, sino realizar una sincronización forense. Abrí el archivo maestro de la Fase de Diseño y sentí el peso de la responsabilidad: un **Senior Product Designer** no es quien entrega un archivo perfecto el primer día, sino quien se asegura de que el archivo sea un espejo fiel de la realidad hasta el último minuto del desarrollo.

#### Reconfiguración de componentes y la anatomía del trade-off

Mi primera maniobra fue atacar el UI Kit. No se trataba de un simple cambio estético; era una reingeniería de las propiedades de los componentes para que coincidieran con las capacidades del framework que el equipo de ingeniería estaba utilizando. Basándome en mi compromiso de mantener una documentación viva, me sumergí en la estructura de las variantes de Figma para reflejar los acuerdos alcanzados.

*   **Ajuste de Propiedades en el Buscador:** Eliminé las variantes de interacción que requerían una carga excesiva de JavaScript en el front-end. Redefiní el componente para que su comportamiento de "autocompletado" fuera secuencial y no predictivo en tiempo real, alineándolo con la API que ingeniería podía servir sin degradar el rendimiento del MVP.
*   **Recalibración de Auto-layout y Redlines:** Durante las pruebas de factibilidad, descubrimos que ciertos paddings y márgenes en las tarjetas de eventos generaban conflictos con el sistema de rejilla (grid) del framework. Entré en cada componente y ajusté los valores de espaciado, asegurándome de que los *redlines* que los desarrolladores consultaban en el modo de inspección fueran exactos. Cambié, por ejemplo, un margen de 24px a 16px en dispositivos móviles para evitar que el contenido se cortara en pantallas más pequeñas, una restricción técnica que no habíamos anticipado en la fase de alta fidelidad.
*   **Sincronización de Design Tokens:** Actualicé los valores de los tokens de color para los estados de error. En la negociación, acordamos simplificar la paleta de alertas para reducir la complejidad del CSS. Pasé de tener cuatro matices de rojo a solo dos, lo cual requirió que actualizara globalmente el sistema de estilos para que no hubiera discrepancias entre lo que el desarrollador veía en su consola y lo que yo tenía en mi lienzo.

> **Insight de Senioridad:** La documentación desfasada es una forma de fricción silenciosa. Si un desarrollador tiene que preguntarte tres veces si "este es el diseño final", has fallado en tu labor de facilitador. El archivo de diseño debe ser capaz de responder esas preguntas por sí solo, incluso cuando no estás presente.

#### Capturando la "verdad" de las ramas de desarrollo

Una parte crítica de este mantenimiento fue salir de Figma y entrar en los entornos de *staging*. Me dediqué a revisar las ramas de desarrollo activas para identificar esas micro-decisiones que se toman "en caliente" durante la programación. A veces, un desarrollador ajusta un *line-height* o una transición de un botón porque "se siente mejor" en el navegador, y si esa decisión es correcta desde la perspectiva de UX, mi deber es traerla de vuelta al diseño.

Realicé una auditoría visual comparando la build actual con mis mockups. Descubrí que para el estado de *hover* de los botones principales, el equipo había implementado un cambio de opacidad en lugar de un cambio de color plano, debido a una limitación en la librería de componentes compartida. En lugar de pedirles que lo cambiaran, evalué que la usabilidad no se veía afectada y procedí a actualizar todas las variantes de botones en mi UI Kit. Esta "ingeniería inversa" del diseño asegura que, si en seis meses necesitamos escalar el producto, el diseñador que tome el relevo no intente implementar algo que el código ya descartó por razones válidas.

Actualicé también los estados de interacción (hover, focus, disabled) de los formularios de registro. Durante la fase de factibilidad, decidimos que el estado de "error" no aparecería hasta que el usuario terminara de escribir en el campo (on blur), para evitar la ansiedad del usuario. Reflejé este comportamiento en las notas de interacción de Figma, describiendo el *trigger* exacto para que el equipo de QA supiera exactamente cuándo debía dispararse la validación visual.

#### Blindaje para QA: Notas técnicas y puentes de comunicación

Finalmente, me enfoqué en las capas de anotación. Utilicé herramientas de documentación integradas en Figma para dejar "migas de pan" por todo el archivo. No quería que nadie se perdiera en el historial de cambios.

1.  **Anotaciones en Jira y Asana:** Volví a las tareas específicas de desarrollo y actualicé los enlaces y las descripciones. Añadí notas explícitas como: "Actualizado el 15/05: Se simplifica el flujo de filtrado según acuerdo técnico. Consultar la página 'V2 - Implementación' en Figma". Esto evitó que los desarrolladores siguieran trabajando sobre versiones obsoletas que aún vivían en sus marcadores del navegador.
2.  **Guías para el equipo de QA:** Creé una sección específica en el archivo llamada "Especificaciones para Validación". Allí, listé las excepciones técnicas que habíamos pactado. Por ejemplo, documenté que el retraso de 300ms en la carga de resultados del buscador era un comportamiento esperado y no un bug de rendimiento, protegiendo así el tiempo del equipo de ingeniería de reportes innecesarios.
3.  **Actualización de Reglas de Negocio:** En las pantallas de pago del MVP, incluí notas sobre cómo debía comportarse el sistema ante una caída del servicio de la pasarela, algo que surgió durante las charlas de infraestructura. Aunque no era un elemento visual *per se*, documentar este estado de error en el diseño permitió que ingeniería tuviera una referencia visual clara de qué mostrar cuando la tecnología fallara.

Esta disciplina en el mantenimiento de la documentación es lo que separa a un diseñador de interfaces de un verdadero diseñador de producto. Mi labor no terminó cuando entregué los archivos; mi labor termina cuando el producto está en manos del usuario y funciona exactamente como lo planeamos, con cada compromiso técnico debidamente registrado y articulado en nuestra fuente de verdad.

**Próximo paso:**

Con la documentación finalmente sincronizada y el equipo de ingeniería trabajando sobre una base sólida y real, sentí que era el momento de evaluar la salud de nuestra relación de trabajo. Me quedaba una pregunta incómoda pero necesaria: ¿había sido el proceso de handoff realmente efectivo o solo habíamos sobrevivido a él? Necesitaba sentarme con los líderes técnicos para recibir su feedback crudo sobre cómo mi trabajo les facilitó —o les complicó— la vida, antes de cerrar este ciclo y prepararnos para la siguiente fase del MVP.#### La ficción del lienzo frente a la realidad del código

Al cerrar la sesión de negociación técnica sobre el motor de búsqueda, me invadió una sensación de urgencia que solo aparece cuando entiendes que tu "fuente de verdad" se ha convertido en una mentira. En mi pantalla de Figma, el buscador de AsDeporte seguía luciendo aquellas transiciones complejas y el filtrado dinámico multi-eje que habíamos soñado al inicio; sin embargo, en el repositorio de código, los desarrolladores ya estaban implementando la versión simplificada y robusta que acabábamos de pactar. Esa brecha entre el diseño y la implementación es lo que llamo "deuda de documentación", y es el primer paso hacia un producto fragmentado.

Comprendí que si no actuaba de inmediato, el equipo de QA (Control de Calidad) empezaría a reportar como "errores" decisiones que nosotros ya habíamos validado como "soluciones técnicas". Mi responsabilidad en ese momento no era crear algo nuevo, sino realizar una sincronización forense. Abrí el archivo maestro de la Fase de Diseño y sentí el peso de la responsabilidad: un **Senior Product Designer** no es quien entrega un archivo perfecto el primer día, sino quien se asegura de que el archivo sea un espejo fiel de la realidad hasta el último minuto del desarrollo.

#### Reconfiguración de componentes y la anatomía del trade-off

Mi primera maniobra fue atacar el UI Kit. No se trataba de un simple cambio estético; era una reingeniería de las propiedades de los componentes para que coincidieran con las capacidades del framework que el equipo de ingeniería estaba utilizando. Basándome en mi compromiso de mantener una documentación viva, me sumergí en la estructura de las variantes de Figma para reflejar los acuerdos alcanzados.

*   **Ajuste de Propiedades en el Buscador:** Eliminé las variantes de interacción que requerían una carga excesiva de JavaScript en el front-end. Redefiní el componente para que su comportamiento de "autocompletado" fuera secuencial y no predictivo en tiempo real, alineándolo con la API que ingeniería podía servir sin degradar el rendimiento del MVP.
*   **Recalibración de Auto-layout y Redlines:** Durante las pruebas de factibilidad, descubrimos que ciertos paddings y márgenes en las tarjetas de eventos generaban conflictos con el sistema de rejilla (grid) del framework. Entré en cada componente y ajusté los valores de espaciado, asegurándome de que los *redlines* que los desarrolladores consultaban en el modo de inspección fueran exactos. Cambié, por ejemplo, un margen de 24px a 16px en dispositivos móviles para evitar que el contenido se cortara en pantallas más pequeñas, una restricción técnica que no habíamos anticipado en la fase de alta fidelidad.
*   **Sincronización de Design Tokens:** Actualicé los valores de los tokens de color para los estados de error. En la negociación, acordamos simplificar la paleta de alertas para reducir la complejidad del CSS. Pasé de tener cuatro matices de rojo a solo dos, lo cual requirió que actualizara globalmente el sistema de estilos para que no hubiera discrepancias entre lo que el desarrollador veía en su consola y lo que yo tenía en mi lienzo.

> **Insight de Senioridad:** La documentación desfasada es una forma de fricción silenciosa. Si un desarrollador tiene que preguntarte tres veces si "este es el diseño final", has fallado en tu labor de facilitador. El archivo de diseño debe ser capaz de responder esas preguntas por sí solo, incluso cuando no estás presente.

#### Capturando la "verdad" de las ramas de desarrollo

Una parte crítica de este mantenimiento fue salir de Figma y entrar en los entornos de *staging*. Me dediqué a revisar las ramas de desarrollo activas para identificar esas micro-decisiones que se toman "en caliente" durante la programación. A veces, un desarrollador ajusta un *line-height* o una transición de un botón porque "se siente mejor" en el navegador, y si esa decisión es correcta desde la perspectiva de UX, mi deber es traerla de vuelta al diseño.

Realicé una auditoría visual comparando la build actual con mis mockups. Descubrí que para el estado de *hover* de los botones principales, el equipo había implementado un cambio de opacidad en lugar de un cambio de color plano, debido a una limitación en la librería de componentes compartida. En lugar de pedirles que lo cambiaran, evalué que la usabilidad no se veía afectada y procedí a actualizar todas las variantes de botones en mi UI Kit. Esta "ingeniería inversa" del diseño asegura que, si en seis meses necesitamos escalar el producto, el diseñador que tome el relevo no intente implementar algo que el código ya descartó por razones válidas.

Actualicé también los estados de interacción (hover, focus, disabled) de los formularios de registro. Durante la fase de factibilidad, decidimos que el estado de "error" no aparecería hasta que el usuario terminara de escribir en el campo (on blur), para evitar la ansiedad del usuario. Reflejé este comportamiento en las notas de interacción de Figma, describiendo el *trigger* exacto para que el equipo de QA supiera exactamente cuándo debía dispararse la validación visual.

#### Blindaje para QA: Notas técnicas y puentes de comunicación

Finalmente, me enfocué en las capas de anotación. Utilicé herramientas de documentación integradas en Figma para dejar "migas de pan" por todo el archivo. No quería que nadie se perdiera en el historial de cambios.

1.  **Anotaciones en Jira y Asana:** Volví a las tareas específicas de desarrollo y actualicé los enlaces y las descripciones. Añadí notas explícitamente citando el archivo `01_colaboracion_continua_con_desarrollo.pdf` como mi base para este mantenimiento. Incluí frases como: "Actualizado el 15/05: Se simplifica el flujo de filtrado según acuerdo técnico. Consultar la página 'V2 - Implementación' en Figma". Esto evitó que los desarrolladores siguieran trabajando sobre versiones obsoletas que aún vivían en sus marcadores del navegador.
2.  **Guías para el equipo de QA:** Creé una sección específica en el archivo llamada "Especificaciones para Validación". Allí, listé las excepciones técnicas que habíamos pactado. Por ejemplo, documenté que el retraso de 300ms en la carga de resultados del buscador era un comportamiento esperado y no un bug de rendimiento, protegiendo así el tiempo del equipo de ingeniería de reportes innecesarios.
3.  **Actualización de Reglas de Negocio:** En las pantallas de pago del MVP, incluí notas sobre cómo debía comportarse el sistema ante una caída del servicio de la pasarela, algo que surgió durante las charlas de infraestructura. Aunque no era un elemento visual *per se*, documentar este estado de error en el diseño permitió que ingeniería tuviera una referencia visual clara de qué mostrar cuando la tecnología fallara.

Esta disciplina en el mantenimiento de la documentación es lo que separa a un diseñador de interfaces de un verdadero diseñador de producto. Mi labor no terminó cuando entregué los archivos; mi labor termina cuando el producto está en manos del usuario y funciona exactamente como lo planeamos, con cada compromiso técnico debidamente registrado y articulado en nuestra fuente de verdad.

**Próximo paso:**

Con la documentación finalmente sincronizada y el equipo de ingeniería trabajando sobre una base sólida y real, sentí que era el momento de evaluar la salud de nuestra relación de trabajo. Me quedaba una pregunta incómoda pero necesaria: ¿había sido el proceso de handoff realmente efectivo o solo habíamos sobrevivido a él? Necesitaba sentarme con los líderes técnicos para recibir su feedback crudo sobre cómo mi trabajo les facilitó —o les complicó— la vida, antes de cerrar este ciclo y prepararnos para la siguiente fase del MVP.

### Parte 9: CIERRE DEL CICLO: FEEDBACK DE INGENIERÍA Y EVOLUCIÓN DEL PROCESO

#### La validación del proceso: ¿fuimos aliados o un obstáculo?

Terminar la fase de **Design QA** del MVP B2C me dejó una sensación de cierre técnico, pero también una inquietud estratégica que no podía ignorar. El producto se veía y se sentía bien en los entornos de *staging*, pero no tenía la certeza de si el camino para llegar ahí había sido un campo minado para los desarrolladores o una vía despejada. Como responsable de la experiencia, sabía que la calidad de este lanzamiento de AsDeporte no se mediría solo en la ausencia de errores en la interfaz, sino en la salud de la relación con el equipo que picó cada línea de código. 

Sentí la necesidad imperativa de validar la eficacia de mi propia metodología. Mi razonamiento era simple: si el proceso de colaboración fue doloroso para ingeniería, el producto sufriría en las siguientes iteraciones. No quería cerrar este ciclo con un simple "entregado"; necesitaba una conversación honesta que sentara las bases para la evolución del ecosistema digital de la marca. Esta transición no se trataba de revisar píxeles, sino de auditar el flujo de trabajo humano que los hizo posibles. La "mejora continua" no es un concepto abstracto en nuestro marco de trabajo; es la obligación de mirar atrás para no repetir los mismos roces en el siguiente sprint.

#### El ritual de la retrospectiva y el feedback 1:1

Para obtener la verdad sin filtros, decidí diversificar los canales de escucha. No me bastaba con una reunión general donde el sesgo de grupo suele suavizar las críticas. Organicé una serie de **sesiones de recopilación de feedback** que dividí en dos frentes: la participación activa en la **Sprint Retrospective** y una ronda de charlas informales 1:1 con los líderes técnicos y desarrolladores clave.

En la retrospectiva, me senté a escuchar más que a hablar. Utilicé este espacio para preguntar directamente sobre la utilidad de mi presencia en los **Daily Stand-ups**. Quería saber si mis intervenciones para desbloquear dudas de diseño fueron percibidas como un apoyo ágil o como una interrupción. Durante estas sesiones, el diálogo técnico fluyó a través de nuestras herramientas habituales; repasamos hilos de **Slack** donde se resolvieron dudas críticas y revisamos grabaciones de **Zoom/Meet** donde tuvimos que hacer *deep dives* sobre la lógica de los componentes. Mi objetivo era diagnosticar si mi disponibilidad ad-hoc realmente eliminó la fricción o si hubo momentos donde el equipo se sintió solo ante una especificación ambigua.

#### Diseccionando el handoff: UI Kits, prototipos y fricción real

El núcleo de estas conversaciones fue la disección forense de nuestros entregables. Me enfoqué en entender la utilidad real de tres activos críticos: el **UI Kit**, las especificaciones técnicas y los prototipos interactivos. Pregunté sin rodeos: "¿Qué parte de la documentación les hizo perder tiempo?". 

Este análisis me permitió identificar qué aspectos de la preparación de los archivos fueron activos valiosos y cuáles generaron confusión. Descubrí, por ejemplo, que mientras los prototipos de alta fidelidad fueron fundamentales para entender la intención del flujo, algunas notas en las especificaciones eran demasiado densas y requerían una simplificación para ser consumidas durante el desarrollo activo. También evaluamos el impacto de los **"Bugs de Diseño"** que reporté durante el QA. Fue vital entender si esos reportes fueron vistos como una carga burocrática o como una guía necesaria para mantener la integridad del "motor que libera tu grandeza". Esta fase de introspección técnica fue fundamental para cumplir con el mandato de mejora que rige todo el proyecto, asegurando que el proceso de *handoff* no fuera un evento único, sino un sistema vivo que aprende de sus propios errores.

#### El artefacto de inteligencia: Notas de feedback y compromisos técnicos

Toda esta información no podía quedarse en el aire o en un hilo de chat perdido. Procedí a formalizar el aprendizaje en un entregable que considero vital para la madurez del equipo: el **Resumen de Feedback de Ingeniería**. No lo redacté como un informe administrativo, sino como un artefacto de inteligencia operativa. En este documento, sinteticé cada compromiso técnico y cada solución acordada que surgió ante los problemas de implementación del MVP.

En este registro, documenté:
*   **Puntos de fricción específicos:** Momentos donde la arquitectura de la información chocó con las limitaciones de la API y cómo lo resolvimos.
*   **Eficacia de los canales:** Un acuerdo sobre qué tipos de dudas deben ir a **Jira** y cuáles se resuelven mejor con un *huddle* rápido en **Slack**.
*   **Ajustes al proceso de entrega:** Decisiones sobre cómo estructuraremos las capas en Figma para que la inspección de código sea aún más veloz en la Fase 2.

Este documento se convirtió en nuestro testamento de flexibilidad. Registré cómo, en varias ocasiones, tuve que defender la UX frente a restricciones de tiempo, pero también dónde cedí en la complejidad visual para asegurar que el equipo pudiera llegar al *deadline* sin sacrificar la estabilidad del sistema. Es la evidencia de que el diseño en AsDeporte es una sociedad estratégica, no un dictado estético.

#### El diseño como sociedad estratégica

Llegar a este punto me reafirmó una convicción senior: la humildad profesional es la herramienta más poderosa de un diseñador. Pedir feedback al equipo de ingeniería no debilitó mi posición; al contrario, blindó la relación de confianza a largo plazo que necesitamos para escalar esta plataforma. Al abrirme a sus críticas sobre cómo entrego mi trabajo, demostré que mi prioridad no es que mis archivos se vean bien, sino que el producto final sea impecable y el proceso de construcción sea sostenible.

Entendí que mi labor no terminó cuando entregué el último mockup, sino que evolucionó hacia una colaboración continua donde cada desafío técnico fue una oportunidad para refinar la experiencia. Al cerrar este ciclo de feedback, no solo dejamos listo un MVP B2C sólido, sino que construimos un equipo de producto más cohesionado, capaz de comunicarse con una precisión milimétrica.

**Reflexión final:**
Esta actividad de colaboración continua transformó mi percepción del proyecto; dejé de ver el código como un receptor pasivo de mis diseños para entenderlo como el lenguaje que finalmente les da vida. Aprendí que un *handoff* exitoso no es el que no genera preguntas, sino el que establece un entorno de confianza donde los desarrolladores se sienten dueños del diseño tanto como yo. El valor real que dejamos no fue solo una app funcional, sino un modelo de trabajo probado que elimina el desperdicio de esfuerzo y pone la energía del equipo donde realmente importa: en el atleta que usará AsDeporte para superar sus propios límites.