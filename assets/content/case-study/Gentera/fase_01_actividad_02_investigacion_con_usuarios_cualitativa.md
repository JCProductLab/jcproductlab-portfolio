# Fase 1: Entender y Definir (Discovery & Research)

## Investigación con Usuarios (Cualitativa)

### Parte 1: Auditoría Forense del Brief y Preparación Estratégica

#### La disonancia entre la visión y la celda de Excel

Al cerrar la fase de inmersión inicial en la cultura de Gentera, me encontré con una tensión que suele pasar desapercibida en los niveles ejecutivos pero que, para un diseñador de producto, es una señal de alarma: la brecha entre el "valor humano" que predica la organización y la deshumanización que produce un proceso manual asfixiante. Tenía sobre mi mesa digital una serie de documentos que prometían una "Gestión Automatizada de la Capacitación" (GAC), pero mi instinto me decía que no podía empezar a dibujar interfaces sin antes diseccionar la realidad operativa que esos documentos apenas rozaban. 

El reto no era simplemente digitalizar un flujo; era validar si la arquitectura lógica que el cliente tenía en mente soportaría el peso de la operación real. No podía permitirme el lujo de diseñar sobre suposiciones. Como responsable de la experiencia, sabía que si el algoritmo de segmentación fallaba en un solo caso de borde, la confianza del usuario —especialmente la de Carlos, el administrador que vive este proceso día a día— se desmoronaría. Mi primera maniobra fue transformar ese brief estático en una hoja de ruta de investigación viva. Necesitaba una auditoría forense para alinear expectativas antes de que el primer pixel tocara el lienzo. Esta no fue una fase de lectura, fue una fase de interrogación técnica a los insumos que nos habían entregado.

#### Disección forense: El brief bajo el microscopio

Inicié este proceso con una revisión exhaustiva de los tres pilares documentales: el brief detallado, la estructura funcional de la plataforma y la presentación ejecutiva. Mi objetivo no era entender el "qué" —eso estaba claro: querían automatizar— sino encontrar las grietas en el "cómo". Al contrastar la visión estratégica de Lalo, quien buscaba una transformación digital alineada a los objetivos de 2024, con las notas operativas de Carlos, identifiqué inmediatamente una desconexión en la profundidad de las reglas de negocio.

Mientras el brief hablaba de "segmentar listas", mi análisis detectó que la verdadera complejidad residía en las variables de exclusión y reingreso. Utilicé la investigación previa sobre Gentera para contextualizar estos hallazgos; una empresa que maneja una cartera de crédito de más de 82,000 millones de pesos no puede permitirse errores en la capacitación de su fuerza de ventas. Cada inconsistencia que encontré entre los documentos —por ejemplo, sutiles diferencias en cómo se definía la trazabilidad en el Word frente al PowerPoint— la marqué como un punto crítico de discusión. Esta revisión no fue superficial; fue una búsqueda de la verdad técnica detrás de la ambición corporativa.

> **Insight de Diseño:** La calidad de una solución de automatización es directamente proporcional a la honestidad con la que se documentan las excepciones. Si ignoramos el 5% de los casos complejos ahora, ese 5% destruirá la percepción de valor del 95% restante en el lanzamiento.

#### El diagnóstico del "agujero negro" operativo

Fue durante esta auditoría cuando logré cuantificar el verdadero "dolor" del usuario. Al analizar las tareas de Carlos, identifiqué un agujero negro de productividad: un proceso manual que consume entre **24 y 32 horas semanales**. Estamos hablando de que una sola persona dedica casi el 80% de su jornada laboral a cuadrar grupos, revisar ciudades y enviar correos individuales. Esta cifra no es solo un dato estadístico; es el benchmark sobre el cual se jugaría el éxito de mi diseño.

Me enfoqué en desglosar este tiempo. Descubrí que la frustración de Carlos no venía solo de la carga de trabajo, sino del miedo constante al error humano. Convocar a alguien incorrectamente o enviar a un colaborador a una sede a cientos de kilómetros de su ciudad no eran solo fallos logísticos; eran golpes directos a la eficiencia operativa de Gentera. Al identificar estos puntos de dolor, establecí que el objetivo de GAC no era solo "automatizar", sino devolverle a Carlos su capacidad estratégica. Definir qué significaría "transformar" el proceso seis meses después del lanzamiento se volvió mi prioridad: el éxito se vería como un sentimiento de alivio y un flujo de trabajo donde el estrés por el error manual hubiera desaparecido.

#### Mapeando el laberinto de las reglas de negocio

La parte más densa de mi auditoría fue la disección de las reglas de negocio. Aquí es donde los proyectos de automatización suelen morir por falta de detalle. Me sumergí en la lógica del "Gerente Multiproducto" y la figura de los "asesores CIE". ¿Cómo identifica el sistema a estos asesores en una base de datos que se describe como "semi-limpia"? ¿Qué sucede si un asesor está asignado temporalmente a una oficina?

También analicé la regla de los reingresos de 6 meses. Si un colaborador vuelve a la empresa, su ruta de capacitación debe reconocer su avance previo o reiniciarse totalmente dependiendo de ese umbral de tiempo. Identifiqué que estas no eran simples condiciones lógicas, sino **edge cases** críticos que el algoritmo de segmentación (lo que llamamos el Desarrollo 1) debía manejar sin intervención humana. Mi razonamiento fue claro: si no blindamos estas reglas desde la fase de definición, el sistema generaría listas erróneas que Carlos tendría que corregir manualmente, anulando el propósito de la herramienta. Articulé estas dudas en una matriz de clarificación, enfocándome en exclusiones como SEAS México e incapacidades IPP, que a menudo se pierden en las conversaciones de alto nivel pero son vitales en la ejecución.

#### La fragilidad del dato: El riesgo de la plantilla "semi-limpia"

Ningún sistema de automatización es mejor que los datos que consume. Al revisar el origen de la información, me encontré con que GAC dependería de una "Plantilla de Capacitación" extraída de ADN que el equipo calificaba como "semi-limpia". Para un diseñador senior, ese término es un eufemismo de "datos inconsistentes". Mi preocupación inmediata fue la integridad de las fuentes: inconsistencias en nombres, números de nómina duplicados o fechas de contratación faltantes podrían descarrilar la segmentación automática.

Además de la plantilla semanal, identifiqué la necesidad de un "Concentrado Histórico" para evitar duplicidades. Al analizar cómo se manejaban las notificaciones vía WhatsApp y Teams, me di cuenta de que actualmente la comunicación era puramente por correo institucional. Introducir nuevos canales de contacto sin una base de datos de números de teléfono verificados era un riesgo de diseño que debía mitigar. Mi razonamiento técnico fue que la viabilidad de GAC no dependía de la interfaz, sino de la **salud de los archivos Excel** que alimentaban el motor de búsqueda. Si el administrador tiene que limpiar los datos antes de cargarlos, no estamos ahorrando el 80% del tiempo prometido.

#### Ingeniería de interrogación: Blindando la sesión de alineación

Con toda esta auditoría forense en mano, procedí a la preparación estratégica de la reunión de alineación. No quería una sesión de presentación pasiva; quería una sesión de **interrogación estructurada**. Formulé una serie de preguntas clave diseñadas para forzar a los stakeholders a confrontar sus propias ambiciones. No pregunté "¿qué quieren?", pregunté "¿cómo se vería y sentiría este proceso transformado para Carlos seis meses después del lanzamiento?".

Programé una sesión de 1.5 a 2 horas en Google Meets, asegurando la presencia de perfiles críticos: Carlos como el experto en el proceso, Lalo como el estratega, y Alberto como el proveedor de la data. Mi objetivo con esta agenda era evitar el **scope creep** —la expansión descontrolada del alcance— y garantizar que todos firmáramos mentalmente el mismo contrato de entendimiento. No se trataba de discutir botones; se trataba de blindar la lógica de negocio y las métricas de éxito (como la reducción del 80% del tiempo operativo y la automatización del 95% de la segmentación). Esta preparación obsesiva fue mi manera de asegurar que, al empezar a diseñar, el terreno fuera sólido y no un pantano de suposiciones.

> **Reflexión Senior:** En Agile UX, la investigación no empieza con el usuario, empieza con la arquitectura de la verdad del negocio. Si no entiendes la frustración de Carlos al cuadrar grupos manualmente, no puedes diseñar una interfaz que realmente le devuelva 30 horas de su vida. Mi rol aquí no fue ser el "creativo", sino ser el analista que detecta los puntos de falla antes de que se conviertan en código.

---

#### Próximo paso:

**LA MESA DE ALINEACIÓN: SINCRONIZACIÓN DE EXPECTATIVAS CON STAKEHOLDERS**

Recuerdo el momento exacto en que envié la invitación a Carlos, Lalo y Alberto; sabía que la reunión no sería cómoda, porque mis preguntas los obligarían a definir detalles que habían evitado hasta ahora. La tensión estaba en el aire: ¿aceptarían que su meta del 95% de automatización dependía de una base de datos que ellos mismos llamaban "semi-limpia"? La siguiente sesión sería el campo de batalla donde veríamos si la visión de la dirección y la realidad de la trinchera operativa podían finalmente hablar el mismo idioma.

### Parte 2: La Mesa de Alineación Sincronización de Expectativas con Stakeholders

#### El silencio de los tres segundos y la base de la verdad

El silencio en la llamada de Google Meets duró apenas tres segundos, pero fue suficiente para confirmar mis sospechas: nadie en la sala tenía una definición única de lo que significaba "automatizar" el proceso. Tras realizar la auditoría forense de los documentos iniciales, identifiqué que navegábamos sobre una base de "datos semi-limpios" y promesas de eficiencia que no tenían un anclaje en la realidad técnica. No podía permitir que el proyecto GAC avanzara un solo centímetro más basándome en supuestos. Como responsable del diseño, mi primera maniobra estratégica fue convocar a una mesa de control para congelar el entendimiento compartido antes de que el *scope creep* devorara el presupuesto y el tiempo del equipo.

Mi razonamiento era simple: si no confrontaba a los dueños del proceso —Carlos, Lalo, Marta y Alberto— con las grietas que encontré en el brief, estaríamos diseñando una interfaz elegante para un motor quebrado. Necesitaba transformar la ambigüedad en un contrato mental de colaboración. Sabía que Carlos, como experto en el proceso actual, cargaba con la frustración de años de trabajo manual, mientras que Alberto, el proveedor de los datos, veía el problema desde una perspectiva puramente tabular. Mi rol en esa sesión de dos horas no fue el de un espectador, sino el de un moderador táctico que obligó a cada stakeholder a rearticular el problema central hasta que todos escuchamos la misma cifra: **32 horas semanales perdidas en tareas manuales**.

#### La disección del dolor: Carlos y las 32 horas de infierno manual

Para mantener el foco y evitar que la reunión se convirtiera en una lista de deseos inalcanzables, implementé dos técnicas de gestión que considero vitales en proyectos de esta escala: la **Toma de Notas en Vivo** en un documento compartido y el **Parking Lot** para ideas fuera de contexto. Ver sus propias palabras escritas en tiempo real obligó a los stakeholders a ser precisos. Cuando Lalo hablaba de "transformación digital", yo lo aterrizaba preguntando qué significaría eso exactamente seis meses después del lanzamiento.

Fue en ese momento cuando la realidad de la trinchera operativa salió a la luz. Carlos describió un escenario de pesadilla: omisiones en las convocatorias, asignaciones incorrectas de sedes y formadores, y un estrés constante por cuadrar grupos en archivos de Excel que nunca terminaban de estar limpios. Validamos que el éxito del proyecto GAC no se mediría por lo "bonito" de la interfaz, sino por el alivio de la carga cognitiva. Establecimos una línea base crítica: el sistema debía reducir ese tiempo operativo en un 80%. Si el diseño no lograba devolverle a Carlos esas 30 horas de su vida, habríamos fracasado, independientemente de la tecnología utilizada.

> **Reflexión Senior:** En esta etapa, el diseño es política. Mi trabajo fue mediar entre la visión estratégica de Lalo y la urgencia operativa de Carlos. Si no logras que el "dueño del dolor" se sienta escuchado y el "dueño del presupuesto" vea el ROI claro, el proyecto nace muerto. El valor real aquí fue extraer el compromiso de que el rol del **Administrador de Capacitación** sería nuestro epicentro crítico para la primera versión.

#### Blindando el alcance: El arte de decir "No" para salvar el "Sí"

Uno de los momentos de mayor tensión en la mesa de alineación fue la definición de las exclusiones. Es común que, ante la promesa de una nueva plataforma, los stakeholders intenten incluir todo lo que les duele en el mismo paquete. Aquí es donde apliqué una disciplina férrea para evitar el crecimiento descontrolado del alcance. Basándome en los objetivos del MVP, tracé una línea clara sobre lo que **no** íbamos a construir en esta fase:

*   **Nada de creación o modificación de contenido:** GAC es un motor de gestión, no una herramienta de autoría de cursos.
*   **Nada de gestión de viáticos o logística de hoteles:** Aunque es un dolor real, incluirlos ahora dispersaría nuestros recursos técnicos.
*   **Nada de integración directa con ADN (por ahora):** Esta fue una decisión técnica y estratégica fundamental. Decidimos que GAC consumiría la plantilla Excel de ADN como fuente primaria. Integrarse directamente en esta etapa era un riesgo de seguridad y tiempo que no podíamos asumir.

Establecer que la información de hospedaje provendría de una tabla externa alimentada manualmente fue un trade-off necesario. Sacrificamos una automatización total en ese punto para asegurar que el motor de segmentación —el verdadero corazón del producto— fuera impecable. Al cerrar esta sección, todos en la mesa aceptamos que el **Desarrollo 1: Automatización de la segmentación** era la prioridad absoluta. Incluso acordamos que los estilos gráficos se basarían en el brief detallado que ya tenían, lo que nos permitiría acelerar la fase visual y concentrarnos en la lógica de negocio.

#### Codificando la lógica: Reingresos y la jerarquía de reglas

Pasamos de la visión macro a la micro-lógica que programaría el comportamiento del algoritmo. No podíamos diseñar la experiencia de usuario sin entender las reglas de reingreso y las excepciones que hoy Carlos maneja "de memoria". Durante la sesión, diseccionamos la regla de los **6 meses**: si un colaborador ha estado fuera de la organización por más de ese tiempo, su ruta de capacitación se reinicia por completo; si es menos, el sistema debe reconocer y respetar su avance previo. Esta distinción parece menor, pero es la diferencia entre una herramienta útil y una que genera fricción innecesaria para el colaborador.

También abordamos el caos de las "Faltas a Cursos Anteriores". Definimos que el sistema no debe simplemente marcar un error, sino permitir una justificación y, automáticamente, priorizar a ese usuario en la siguiente convocatoria disponible. Sin embargo, no todo quedó resuelto. Al profundizar en figuras complejas como el **"Gerente Multiproducto"** o los **"Asesores CIE"**, descubrimos que no existía una jerarquía clara para aplicar reglas de negocio conflictivas. Estas ambigüedades las enviamos directamente al "Parking Lot" con una tarea asignada a Carlos y Alberto: definir la lógica de identificación en la plantilla de datos antes de nuestra próxima sesión.

#### El KPI de los 10 minutos: Rendimiento bajo presión

Uno de los requerimientos no funcionales que puse sobre la mesa fue el rendimiento. En un ecosistema como el de Gentera, donde manejamos una plantilla de aproximadamente **27,000 registros**, el tiempo de procesamiento es un factor de adopción crítico. Alberto mencionaba que los procesos actuales son lentos y tediosos; por ello, acordamos un KPI técnico ambicioso: la carga de la plantilla y la generación de las listas segmentadas debe ocurrir en un rango de **5 a 10 minutos máximo**.

Este límite de tiempo no fue un capricho. Mi razonamiento es que, si el administrador debe esperar media hora para ver el resultado de una carga, terminará volviendo a sus hojas de cálculo manuales por pura desesperación. Este compromiso de rendimiento obliga al equipo de desarrollo a pensar en arquitecturas eficientes desde el día uno y a mí, como diseñador, a crear estados de carga y feedback que mantengan al usuario informado sin generar ansiedad. Asimismo, establecimos que Dacodes propondría los estándares de seguridad necesarios, ya que la respuesta de Gentera ante métricas de éxito y seguridad fue: "Lo dejamos a su criterio como expertos".

> **Aprendizaje Estratégico:** Esa frase, "lo dejamos a su criterio", es una trampa clásica de los stakeholders. Significa que, si algo sale mal, la responsabilidad es totalmente nuestra. Por eso, insistí en que nosotros propondríamos las métricas de satisfacción y los KPIs cuantitativos, pero que ellos **debían validarlos formalmente** antes de avanzar. Nunca navegues con un cheque en blanco en cuanto a criterios de éxito.

#### El contrato de entendimiento: Minuta y blindaje

La reunión terminó con una sensación de claridad que no existía dos horas antes. No salimos con un simple resumen de la charla, sino con un **Documento de Entendimiento Actualizado** que sirve como nuestra "Constitución" para el resto de la Fase 1. Generé la minuta de inmediato, registrando no solo los acuerdos, sino también los elementos de acción con responsables directos: Alberto y Carlos se comprometieron a enviar los archivos de ejemplo de la "Plantilla de Capacitación" y el "Concentrado Histórico" anonimizados en un plazo de 48 horas.

Este documento es el que blinda nuestro proceso de **Agile UX**. Ahora sabemos exactamente a quiénes entrevistar, qué reglas programar y qué métricas perseguir. Logramos que Alberto entendiera que sus Excels son el combustible del sistema y que Carlos viera en GAC no una amenaza, sino su mejor aliado para recuperar su tiempo. La mesa de alineación no fue una formalidad burocrática; fue el acto de cimentación que nos permitió pasar de la teoría del brief a la ejecución de un producto que realmente resuelva la complejidad operativa de Gentera.

#### Próximo paso:

**ENTREVISTAS DE PROFUNDIZACIÓN: EXTRAYENDO LA VISIÓN DEL NEGOCIO**

Al cerrar la minuta de alineación y recibir los primeros archivos de Carlos, me di cuenta de que las 32 horas de trabajo manual no eran solo una cifra, sino un síntoma de algo mucho más profundo y sistémico que las reglas de negocio no alcanzaban a explicar. Sabía que la siguiente fase de entrevistas con los stakeholders clave —Carlos, Lalo, Marta y Alberto— no podía ser una simple validación de requerimientos, sino una operación de extracción para entender los matices que el Excel oculta. Me quedé con una pregunta punzante: ¿qué sucede en la mente de un líder operativo cuando el sistema le asigna un formador que no conoce su contexto regional? La respuesta estaba en las entrevistas individuales que estaban por comenzar.

### Parte 3: Entrevistas de Profundización Extrayendo la Visión del Negocio

#### La disección del síntoma: De la alineación a la extracción de la verdad

Al cerrar la sesión de alineación con los stakeholders de Gentera, me quedó una sensación agridulce. Por un lado, teníamos el compromiso político de la dirección; por otro, la sombra de las 32 horas semanales de trabajo manual de Carlos pesaba en la sala como una sentencia. Entendí de inmediato que la "verdad" del proyecto GAC no residía en los documentos de visión estratégica ni en el brief inicial, sino en las sutilezas, los miedos y los "workarounds" que cada actor clave guardaba en su silo individual. Como diseñador, mi razonamiento fue claro: no podíamos construir una solución automatizada basándonos en generalidades. Necesitaba realizar una operación de minería de procesos, bajando de la visión macro a una micro-segmentación de necesidades para entender por qué el sistema actual, aunque funcional en el papel, fallaba silenciosamente en la ejecución.

Esta transición hacia las entrevistas individuales no fue un trámite burocrático, sino una necesidad táctica. Sabía que para que GAC no fuera simplemente otro software que terminara siendo ignorado por el equipo, debía transformarse en un ecosistema que resolviera la complejidad operativa real. Mi objetivo era extraer la lógica que no está escrita en ningún manual: esa intuición que Carlos aplica para decidir si un gerente es "multiproducto" o el criterio con el que Alberto extrae los datos de ADN. Estábamos pasando de la teoría del brief a la cruda realidad de la trinchera operativa, y cada entrevista individual se convirtió en una sesión de diagnóstico forense para mapear el terreno donde íbamos a edificar.

#### Arquitectura de la extracción: El diseño de las guías de entrevista

Para abordar esta fase, diseñé una serie de guías de entrevista semi-estructuradas, asegurándome de que cada sesión de 45 a 60 minutos tuviera el espacio suficiente para que la conversación fluyera sin los sesgos de una encuesta cerrada. Mi enfoque fue quirúrgico: estructuré los bloques de preguntas para que funcionaran como un embudo, partiendo de la visión de éxito de cada stakeholder hasta llegar a las restricciones técnicas más granulares. Utilicé la técnica de "pensar en voz alta" y profundicé intencionalmente en los fallos actuales, buscando capturar esos momentos de frustración que revelan las verdaderas necesidades del usuario.

Para Carlos, el Administrador de Capacitación, el diseño de la guía se centró en la validación de reglas de negocio que rozan lo artesanal. Necesitaba que me guiara paso a paso por su semana típica, desde que descarga la plantilla de ADN los jueves hasta que las invitaciones salen por Outlook. Mi prioridad con él fue desmenuzar reglas complejas como la del "Gerente Multiproducto" y los reingresos de seis meses. No buscaba solo el "qué hace", sino el "cómo decide". Por otro lado, para los líderes operativos, la guía se orientó hacia la visibilidad de la carga de trabajo y los criterios de asignación de formadores. El razonamiento detrás de esta diferenciación era simple: si no entendíamos cómo se toman las decisiones hoy, no podríamos automatizarlas mañana sin generar resistencia o errores sistémicos.

#### El choque de realidades: La visión estratégica frente a la fricción operativa

La entrevista con Lalo, el Líder de Proyecto en Gentera, me proporcionó el anclaje estratégico necesario. Lalo no ve a GAC solo como una herramienta de automatización, sino como un pilar fundamental en la transformación digital de Recursos Humanos. Durante nuestra charla, fue enfático en un punto: el éxito se mide en la capacidad de que el equipo de capacitación deje de actuar como un "capturista de datos" para convertirse en un "estratega de desarrollo". Me planteó una meta ambiciosa: reducir el 80% de las horas operativas manuales. 

> "GAC debe ser el alivio que permita al equipo enfocarse en lo que realmente importa: el valor humano y el crecimiento del colaborador", me comentó Lalo. 

Sin embargo, detrás de esta visión aspiracional, detecté una preocupación genuina por la adopción. Lalo sabe que el software puede ser técnicamente perfecto, pero si los usuarios se aferran al Excel por miedo a perder el control o por desconfianza en la automatización, el proyecto fracasará. Este hallazgo redefinió mi enfoque de diseño: GAC no solo debía ser eficiente, debía ser transparente y generar confianza en cada paso del proceso automatizado. La métrica de éxito no sería solo el tiempo ahorrado, sino la tranquilidad percibida por los líderes al soltar el proceso manual.

#### El agujero negro del ecosistema virtual: La brecha del LMS

Al sentarme con Marta para discutir el contexto de los cursos virtuales, descubrí una desconexión crítica que los documentos previos no mencionaban con suficiente peso. Marta me explicó que, aunque la ruta de capacitación de 12 niveles de Gentera incluye componentes virtuales en casi todos sus hitos, no existe un flujo automático de datos entre el sistema LMS (donde se registra el progreso de los cursos auto-dirigidos) y la plantilla de ADN que utiliza Carlos. 

Esta brecha obliga a una triangulación manual de datos agotadora. Carlos tiene que generar reportes del LMS y cruzarlos "a mano" con su concentrado histórico para saber si un colaborador es elegible para el siguiente nivel presencial. Marta fue clara en su necesidad: GAC debe permitir que el colaborador vea su ruta completa, integrando hitos virtuales y presenciales en una sola vista. Además, surgió el problema del engagement; en los cursos virtuales, el abandono es un riesgo constante. Marta espera que GAC no solo gestione la logística, sino que actúe como un motor de seguimiento, enviando recordatorios automáticos y alertas de estancamiento para asegurar que la capacitación no se detenga por falta de visibilidad.

#### La cruda realidad de los datos: El diagnóstico técnico con Alberto

Si Lalo me dio la visión y Marta la complejidad del flujo, Alberto me entregó la dosis de realidad técnica más dura del proceso. Alberto es quien provee la "Plantilla de Capacitación", y nuestra entrevista reveló por qué Carlos vive en un "maratón" constante cada jueves. Descubrí que la plantilla que Alberto entrega es un extracto "crudo" del sistema ADN, sin ningún tipo de limpieza previa. Esto significa que Carlos recibe un archivo plagado de inconsistencias: errores tipográficos en los nombres, formatos de fecha erráticos y, lo más grave, una latencia en la actualización del estatus de los colaboradores.

Alberto me explicó que el query programado en ADN tiene limitaciones estructurales:
*   **Ausencia de campos críticos:** No existe un campo directo para identificar a los "Asesores CIE", lo que obliga a Carlos a inferir la regla del "Gerente Multiproducto" revisando oficina por oficina si hay personal con ese puesto.
*   **Falta de historial de capacitación:** La plantilla no refleja el último nivel completado; es simplemente una foto del estado actual del colaborador, obligando al cruce manual con el concentrado histórico de Excel.
*   **Calidad de origen:** Cualquier error de captura en el sistema ADN se propaga directamente a la plantilla, y como no hay un proceso de "semi-limpieza" antes de la entrega, toda la carga de depuración recae en la fase final del proceso.

Este análisis forense de los datos cambió mi perspectiva sobre el requerimiento técnico de GAC. La plataforma no podía ser solo un procesador de listas; debía ser un sistema con una robustez extrema capaz de validar, limpiar y transformar datos inconsistentes en información accionable, blindando el proceso contra los errores de origen de ADN.

#### Consolidación de riesgos: El mapa de necesidades divergentes

Al finalizar esta ronda de entrevistas y procesar las notas detalladas, consolidé un mapa de hallazgos que exponía la tensión natural del proyecto. Teníamos tres visiones que debían converger en una sola interfaz:
1.  **El Administrador (Carlos):** Busca "paz operativa". Su prioridad es que la segmentación de grupos y el envío de invitaciones dejen de ser un proceso artesanal propenso al error.
2.  **El Líder Estratégico (Lalo):** Busca "visibilidad y ROI". Necesita datos en tiempo real para justificar la inversión en capacitación y asegurar la cobertura de nuevos ingresos.
3.  **El Formador y Líder Operativo:** Buscan "orden digital". Necesitan recibir listas estandarizadas y tener una agenda clara, eliminando el caos de correos y llamadas de último minuto.

Identifiqué riesgos estratégicos que ahora eran innegables: la dependencia absoluta de una fuente de datos (ADN) que es estructuralmente deficiente para la automatización total, y la complejidad de traducir reglas de negocio que hoy viven solo en la cabeza de Carlos a una lógica de código inalterable. Mi rol como diseñador de producto mutó en ese momento; dejé de pensar solo en flujos de usuario para empezar a diseñar la integridad de los datos que alimentarían esos flujos. GAC tenía que ser el puente que conectara la aspiración de Lalo con la precaria realidad técnica de Alberto.

#### Próximo paso:

**OBSERVACIÓN CONTEXTUAL: DESMENUZANDO EL CAOS DEL PROCESO MANUAL**

A pesar de toda la información recolectada en las entrevistas, sentía que me faltaba la pieza más importante del rompecabezas: ver el "crimen" en tiempo real. Las palabras de Carlos sobre su "maratón de los jueves" resonaban en mi cabeza, pero sabía que las personas suelen omitir micro-pasos y decisiones automáticas cuando describen lo que hacen. Necesitaba sentarme a su lado, observar cómo sus dedos se mueven entre pestañas de Excel y entender qué siente cuando el sistema ADN le entrega un dato que él sabe, por pura intuición, que es erróneo. Me preparé para la sesión de observación contextual con una pregunta que solo la práctica podría responder: ¿cuántas pequeñas decisiones invisibles toma Carlos en esas 32 horas que ninguna regla de negocio escrita ha logrado capturar todavía?

### Parte 4: Observación Contextual Desmenuzando El Caos del Proceso Manual

#### La realidad tras el "maratón de los jueves"

Las entrevistas con los stakeholders me habían dado el "qué" y el "para qué", pero el "cómo" seguía siendo una nebulosa de buenas intenciones y procesos heredados. Como diseñador, sé que existe una brecha insalvable entre lo que un usuario dice que hace en una sala de juntas y lo que realmente ejecuta cuando tiene la presión de un deadline encima. Necesitaba ver el "crimen" en tiempo real. Por eso, me instalé al lado de Carlos un jueves a las 9:00 AM, el día que él describe como su "maratón semanal". Mi objetivo no era auditarlo, sino realizar una observación contextual profunda bajo el protocolo *Think Aloud*: yo era el aprendiz y él, el maestro de una arquitectura de datos que nadie más en Gentera comprendía del todo.

Le pedí a Carlos que verbalizara cada clic, cada duda y cada micro-decisión. Para que la sesión fuera efectiva, nos aseguramos de tener el ecosistema completo abierto en sus dos monitores: la plantilla de ADN recién descargada, el "Concentrado Histórico" —un archivo masivo que es, en la práctica, la memoria de la empresa— y su bandeja de entrada de Outlook. Mi razonamiento era claro: necesitaba capturar las reglas de negocio "invisibles", esas que no están en ningún manual pero que Carlos aplica por pura intuición y experiencia acumulada.

#### Limpieza forense: el costo de la desconfianza en los datos

La jornada comenzó con una fase que el brief simplificaba como "preparación de datos", pero que en realidad es una limpieza forense de cuatro horas. Observé cómo Carlos aplicaba filtros en Excel con una agilidad mecánica, eliminando colaboradores con estatus de "Baja", personal de áreas excluidas como "SEAS México" y casos de incapacidades prolongadas (IPP). Sin embargo, el momento de mayor fricción ocurrió cuando abrió el Concentrado Histórico.

Vi a Carlos ejecutar `BUSCARV` tras `BUSCARV`, usando el número de nómina como llave maestra para intentar que dos mundos se hablaran. El problema es que los datos de ADN, según sus propios registros, tienen un margen de error del 10 al 15%. "Aquí es donde se va mucho tiempo", me confesó mientras corregía manualmente un nombre que no coincidía. "Tengo que ser detective". Esta tarea de validación no es solo técnica; es una carga cognitiva pesada. Carlos no solo cruza datos; está verificando si un colaborador es un "Nuevo Ingreso", una "Promoción" o un "Reingreso". Si es este último, aplica la regla de los 6 meses: si salió hace menos de ese tiempo, debe buscar qué cursos ya tomó para no obligarlo a repetir la ruta desde cero. Es un proceso de arqueología de datos que consume sus primeras cuatro horas del día.

#### El rompecabezas de la segmentación y la regla del Gerente Multiproducto

Después del almuerzo, la tensión en el lugar de trabajo de Carlos cambió. Entramos en la fase de segmentación, que él define como un "rompecabezas artesanal". Aquí es donde la complejidad de las reglas de negocio de Gentera se vuelve tangible. Observé cómo Carlos abría un tercer archivo: la "Estructura de Oficinas". 

> El riesgo estratégico aquí es inmenso. Para aplicar la regla del "Gerente Multiproducto", Carlos debe buscar manualmente si en la oficina de un gerente específico existe un "Asesor CIE". Si lo encuentra, marca al gerente como multiproducto para asignarle cursos especiales. Si el Excel de estructura no está actualizado —lo cual ocurre con frecuencia—, la asignación nace muerta.

La segmentación no es una lista estática; es un ejercicio de balanceo constante. Carlos movía nombres entre pestañas de Excel tratando de cumplir con los cupos críticos:
*   **Cursos Presenciales:** Mínimo 5, máximo 25 participantes.
*   **Cursos Online:** Mínimo 10, máximo 15 participantes.

Lo vi luchar con la logística geográfica, tratando de que los colaboradores asistieran a su "Sede Opción 1" para evitar viajes innecesarios. Si un grupo se quedaba con tres personas, Carlos tenía que decidir en segundos si cancelaba el grupo, lo fusionaba o buscaba "invitados" de última hora. Es un malabarismo de variables —puesto, sede, cupo y tipo de curso— que hoy depende exclusivamente de su capacidad de procesamiento mental.

#### El cuello de botella final: la agonía del .ical

Alrededor de las 5:00 PM, cuando el agotamiento físico era evidente en la postura de Carlos, llegamos al punto que él definió con una crudeza que no olvidaré: "Lo del .ical es lo que más odio". Para formalizar la capacitación, Carlos debe generar invitaciones que se integren a los calendarios de los colaboradores. 

El proceso que presencié es una ineficiencia de manual:
1.  Crea un evento en Outlook con los detalles del curso.
2.  Lo guarda como un archivo `.ical` en su computadora.
3.  Redacta un correo para el colaborador.
4.  Adjunta el archivo manualmente y lo envía.

Si hay 100 convocados, Carlos debería repetir este proceso 100 veces. En la práctica, muchas veces termina enviando solo texto simple por Teams o correos masivos en CCO, sacrificando la trazabilidad por la supervivencia operativa. Verlo buscar individualmente a cada colaborador en Teams para enviar notificaciones me confirmó que la comunicación es el cuello de botella más crítico y menos automatizado de todo el sistema.

#### El mapa del "crimen": el diagrama As-Is

Toda esta maraña de clics, frustraciones y fórmulas de Excel terminó cristalizando en el Diagrama de Flujo Detallado del Proceso Actual (As-Is). Este documento no es solo un entregable técnico; es la evidencia de un sistema que consume entre 24 y 32 horas semanales de un solo colaborador. Identifiqué que los puntos de mayor riesgo son la limpieza inicial y la segmentación manual, que actúan como frenos para todo el ciclo de capacitación de Gentera.

Al final del día, Carlos se veía agotado. Me dijo que siempre se iba a casa con el pendiente de si se le había olvidado alguien o si había cometido un error en alguna lista. Mi reflexión senior en este punto fue alarmante: Gentera no tiene un sistema de gestión de capacitación; tiene a un hombre (Carlos) que sostiene un edificio entero con las manos. El sistema sobrevive gracias a su "conocimiento tácito" —saber qué puestos son incompatibles sin que esté escrito en ningún lado—. Si Carlos se enferma un jueves, la capacitación de Gentera se detiene. GAC no solo debe automatizar tareas; debe blindar la continuidad del negocio extrayendo ese conocimiento de la cabeza de Carlos y convirtiéndolo en código.


**MODELADO DE ARQUETIPOS Y MAPEO DE LA EXPERIENCIA AS-IS**

Tras haber diseccionado el caos operativo de Carlos, me quedó claro que él es solo el epicentro de un terremoto que afecta a muchos otros actores. Sin embargo, ¿cómo viven esta precariedad Ana, la asesora de nuevo ingreso, o David, el gerente que necesita ver el avance de su equipo sin tener que mendigar un Excel? El siguiente desafío consistió en transformar todas estas notas y grabaciones en arquetipos vivos y mapas de viaje que expusieran no solo las ineficiencias de Carlos, sino el vacío de información que sufren los líderes y colaboradores. Necesitaba humanizar el dato para que los stakeholders entendieran que cada minuto que Carlos pierde en un `BUSCARV`, es un minuto que un asesor pierde en su ruta de crecimiento.

### Parte 5: Modelado de Arquetipos y Mapeo de la Experiencia As-is

#### La humanización del caos: del dato bruto al arquetipo vivo

Al cerrar las libretas de notas tras las sesiones de observación con Carlos y procesar las grabaciones de las entrevistas, me encontré con una masa crítica de información que, aunque valiosa, resultaba indigesta para cualquier stakeholder. Tenía listas de errores en fórmulas de Excel, quejas sobre la lentitud de los correos y anécdotas sobre asesores que nunca llegaron a su curso. Mi primer gran desafío como diseñador en esta etapa no fue técnico, sino narrativo: necesitaba transformar esa "escena del crimen" operativa en un lenguaje que la organización pudiera sentir. No bastaba con decir que el proceso era lento; tenía que demostrar que el proceso estaba asfixiando a las personas.

Inicié un proceso de **Affinity Mapping** para destilar los patrones de comportamiento que emergían de la investigación. No busqué promedios estadísticos, sino comportamientos sistémicos. Mi razonamiento fue claro: si no lográbamos que la dirección de Gentera empatizara con la angustia de Carlos o la desorientación de Ana, el proyecto GAC sería visto simplemente como una actualización de software y no como la intervención quirúrgica que realmente era. Necesitaba construir arquetipos que sirvieran como brújula para cada decisión de diseño que tomaríamos en los meses siguientes.

#### Carlos y la tiranía del BUSCARV

El primer arquetipo que tomó forma fue **Carlos, el Coordinador Detallista**. Con 45 años y un dominio absoluto de las herramientas de ofimática, Carlos representa el "conocimiento tácito" que mantiene vivo el sistema de capacitación. Al modelar su perfil, puse especial énfasis en su contexto tecnológico: es un usuario avanzado de Excel y Outlook, pero su pericia se ha convertido en su propia trampa. 

Documenté con precisión forense su principal driver: la reducción de la carga cognitiva. Carlos dedica entre **24 y 32 horas de su semana** —prácticamente cuatro días completos— exclusivamente a tareas manuales. Lo que más me impactó durante el modelado fue su rol de "detective de datos". Carlos no solo gestiona listas; valida inconsistencias en la plantilla de ADN, cruza manualmente el "Concentrado Histórico" usando fórmulas complejas de `BUSCARV` e `INDICE/COINCIDIR`, y limpia duplicados que el sistema actual no es capaz de filtrar. Su mayor frustración es el miedo constante al error humano; sabe que un descuido en una celda puede significar que un colaborador en una oficina remota pierda una certificación crítica. Su cita interna, la que usé para resumir su urgencia, era lapidaria: "Necesito que este proceso sea más eficiente para dejar de apagar incendios y empezar a pensar en la estrategia".

#### Ana y el vacío de la experiencia digital

En el extremo opuesto del ecosistema modelé a **Ana, la Colaboradora Entusiasta**. Ana tiene 25 años, es una nativa digital que espera que las herramientas de su trabajo sean tan intuitivas como las aplicaciones que usa en su vida personal. Sin embargo, al entrar a Gentera como asesora de nuevo ingreso, se topó con una pared de opacidad administrativa.

Al construir a Ana, identifiqué que su mayor necesidad no es solo tomar el curso, sino entender su **ruta de crecimiento**. Actualmente, Ana vive en un estado de incertidumbre: recibe convocatorias por canales fragmentados —a veces por Teams, a veces por un correo de su jefe, a veces por una invitación de Outlook— y nunca sabe con certeza si está al día con su plan de carrera. Su frustración es silenciosa pero peligrosa para el negocio: la desmotivación por la falta de visibilidad. Ana representa el "Valor Humano" que Gentera busca proteger, y su perfil dejó claro que GAC no podía ser solo un backend para Carlos; tenía que ser un faro para los miles de colaboradores que, como ella, quieren saber exactamente dónde están parados en su desarrollo profesional.

#### El soporte del sistema: David y Elena

Para completar el mapa de actores, definí a dos perfiles secundarios pero fundamentales para la adopción del sistema: **David, el Líder Comprometido**, y **Elena, la Formadora Dedicada**.

*   **David (38 años, Gerente de Oficina):** Su dolor es la dependencia. Para saber si su equipo de 15 personas está capacitado, tiene que "mendigar" información. O le pregunta uno por uno a sus asesores, o le solicita un reporte manual a Carlos. Modelé su necesidad como una de **trazabilidad proactiva**: David necesita un dashboard que le dé una "foto" instantánea del avance de su oficina para poder apoyar a quienes se están quedando atrás antes de que el bajo rendimiento afecte los objetivos de ventas.
*   **Elena (42 años, Formadora):** Ella es la ejecutora final. Su frustración nace de la logística defectuosa. Recibe las listas de participantes tarde, a veces en Excel y otras en PDF, con información escasa sobre el perfil del grupo. Elena necesita que el sistema le devuelva tiempo para su verdadera pasión: formar. Su viaje actual está plagado de reportes manuales de asistencia que debe enviar por correo, una tarea administrativa que no agrega valor pedagógico.

#### Priorización estratégica: por dónde empezar a sanar

Con los cuatro arquetipos sobre la mesa, realicé un ejercicio de priorización estratégica que fue vital para el alcance del MVP. Declaré a **Carlos y Ana como Personas Primarias**. 

Esta decisión no fue arbitraria. Carlos es el epicentro del "Desarrollo 1" (Automatización de la Segmentación). Si no resolvemos su hemorragia de tiempo, no hay sistema que valga. Por otro lado, Ana es el foco del "Desarrollo 2" (Trazabilidad). Ella representa el éxito de la implementación en términos de experiencia de usuario final. Al priorizarlos, establecí una jerarquía de diseño: las funcionalidades de GAC deben ser juzgadas primero bajo la lente de "¿esto le ahorra tiempo a Carlos?" y "¿esto le da claridad a Ana?". David y Elena, aunque importantes, recibirán soluciones derivadas de las necesidades de los dos primeros.

#### El mapa de la herida: El Journey Map "As-Is" de Carlos

Para que el equipo de desarrollo entendiera la magnitud del problema, mapeé el viaje actual de Carlos, centrándome en su ritual de los jueves por la mañana. Es un proceso "artesanal" con una carga cognitiva altísima que dividí en fases críticas:

1.  **Recepción y Limpieza Forense:** Carlos descarga la plantilla y empieza a aplicar filtros para eliminar colaboradores de "Baja", "SEAS México" e "IPP". Es un trabajo de limpieza manual que consume horas antes de siquiera empezar a asignar cursos.
2.  **La Aplicación de las Reglas Invisibles:** Aquí es donde el proceso se vuelve peligroso. Carlos debe aplicar manualmente la regla de **"Gerente Multiproducto"**, cruzando la estructura de oficinas para identificar asesores CIE. También debe gestionar los **reingresos**, verificando si el colaborador salió hace más o menos de 6 meses para determinar su ruta. Todo esto sucede en su cabeza y en múltiples hojas de Excel abiertas simultáneamente.
3.  **El Rompecabezas de la Segmentación:** Carlos intenta cuadrar regiones, puestos y tamaños de grupo (mínimos de 5 para presencial, 10 para online). Si los números no dan, debe decidir si fusiona o cancela grupos, una responsabilidad que le genera un estrés constante.
4.  **La Tortura del .ical:** El cierre del viaje es el envío de invitaciones. Carlos crea manualmente archivos de calendario `.ical` para cada colaborador y redacta correos individuales. Es una tarea tediosa que lo deja agotado al final del día, con la sensación de haber realizado un trabajo de capturista y no de administrador estratégico.

#### Puntos de dolor transversales y la carga emocional

Al contrastar los Journey Maps de todos los perfiles, identifiqué una **dependencia tóxica del Excel** y una falta absoluta de una "Fuente Única de Verdad" (Single Source of Truth). La información en Gentera no fluye; se arrastra a través de correos y archivos adjuntos que pierden vigencia en minutos.

El análisis forense de las emociones reveló un patrón alarmante:
*   **Ansiedad y Concentración Extrema:** En Carlos, por el miedo al error en las fórmulas.
*   **Inseguridad y Confusión:** En Ana, al no tener un lugar centralizado para consultar su progreso.
*   **Frustración y Resignación:** En Elena y David, quienes aceptan la ineficiencia como parte del paisaje operativo.

Este modelado me permitió concluir que el problema de Gentera no era la falta de planes de capacitación, sino una **fricción logística sistémica**. Los Journey Maps se convirtieron en nuestro "plano de demolición": cada punto de dolor marcado en rojo era una funcionalidad que GAC debía construir en verde. Habíamos expuesto las heridas del proceso actual; ahora el reto era diseñar la cura sin romper la continuidad del negocio.


Al finalizar este mapeo de la realidad actual, una pregunta quedó vibrando en la sala: ¿cómo transformamos este laberinto de Excels en un flujo automatizado sin perder la flexibilidad que Carlos aporta con su criterio humano? Teníamos identificadas todas las grietas del sistema, pero el verdadero desafío comenzaba ahora: diseñar el "viaje ideal" donde la tecnología no solo sustituyera al papel, sino que potenciara la capacidad de cada rol. Era el momento de pasar del diagnóstico a la arquitectura del futuro.

### Parte 6: Diseño del Futuro El Journey Map To-be y Oportunidades de Mejora

#### De la demolición a la arquitectura del alivio

Finalizar el mapeo de las heridas del proceso actual me dejó una sensación agridulce. Por un lado, habíamos expuesto con una claridad casi forense por qué el sistema de capacitación de Gentera estaba al borde del colapso; por otro, la responsabilidad de diseñar la "cura" se sentía inmensa. Como diseñador de producto, mi razonamiento en este punto de inflexión fue tajante: no podíamos simplemente digitalizar el caos. Si solo movíamos los Excels de Carlos a una interfaz web, habríamos fallado. El reto no era crear un repositorio de datos, sino **reingenierizar el flujo** para que la herramienta GAC absorbiera la carga cognitiva que hoy consume 32 horas semanales del equipo.

Pasé de la fase de "demolición" —donde rompimos el proceso manual para entender sus fallas— a la de "edificación". Mi objetivo con el **User Journey Map To-Be** fue proyectar un escenario donde la eficiencia no fuera una promesa vaga, sino una métrica de diseño grabada en el ADN de la plataforma. Necesitaba que Carlos dejara de ser un "operador de filtros" para convertirse en un validador estratégico. La transición narrativa en mi cabeza era clara: debíamos pasar de un laberinto de correos y archivos dispersos a una **línea de ensamblaje automatizada** donde la tecnología hiciera el trabajo pesado y el humano aportara el criterio final.

> **Insight de diseño:** La automatización del 95% de la identificación de elegibles no es solo un capricho técnico; es un acto de respeto hacia el tiempo de Carlos. Cada minuto que él pasa cruzando bases de datos es un minuto que no está dedicando a mejorar la calidad de la capacitación en Gentera.

#### El jueves que dejó de ser una amenaza: Carga y limpieza automática

En el proceso actual, los jueves por la mañana son sinónimo de ansiedad para Carlos. Es el momento en que recibe la "Plantilla de ADN" y comienza la batalla contra las fórmulas de Excel. En el viaje ideal que diseñé, este disparador cambia por completo. Imaginé a Carlos abriendo GAC con una actitud distinta: la de quien supervisa un proceso, no la de quien lo ejecuta manualmente.

El primer paso del nuevo flujo es la **Carga y Procesamiento Automático de Datos**. Carlos simplemente sube la plantilla de capacitación a la plataforma. En ese instante, GAC toma el control:
*   Realiza una **limpieza básica** de registros duplicados o mal formateados.
*   Ejecuta un **cruce instantáneo con el histórico** de capacitaciones para evitar re-convocar a quienes ya acreditaron.
*   Valida la integridad de los datos contra la estructura de oficinas vigente.

Carlos ya no pasa tres horas limpiando celdas; ahora revisa un resumen de carga en segundos. Sus pensamientos, que antes eran de miedo al error ("Espero que este Excel no tenga fallas"), se transforman en alivio: "Qué bueno que GAC hace el trabajo pesado por mí". La plataforma está diseñada para que él solo intervenga en las excepciones mínimas que el sistema no pueda resolver por sí solo. Esta fase reduce drásticamente el tiempo de preparación inicial, pasando de una mañana entera a escasos minutos de procesamiento.

#### El fin del 'filtro-humano': Delegando la complejidad a la lógica del sistema

La verdadera magia de la reingeniería ocurre en la Fase 2 del mapa To-Be: la **Identificación Automática de Elegibles**. Aquí es donde codificamos las reglas de negocio que antes vivían solo en la cabeza de Carlos o en notas adhesivas pegadas a su monitor. 

Maniobré el diseño para que GAC aplicara de forma invisible pero implacable las reglas más complejas:
1.  **Regla de 6 meses para reingresos:** El sistema identifica quiénes acaban de volver a la empresa y calcula su ventana de capacitación.
2.  **Lógica de "Gerente Multiproducto":** Una de las mayores fuentes de error manual, ahora resuelta por un algoritmo que entiende las múltiples responsabilidades de un solo perfil.
3.  **Exclusiones SEAS e IPP:** Filtros automáticos que eliminan a quienes no deben ser convocados por políticas internas específicas.

Al recibir una lista ya pre-filtrada y validada, la carga cognitiva de Carlos desaparece. "La plataforma entiende las reglas, no más búsquedas manuales", es el pensamiento que busqué anclar en este punto del viaje. El valor añadido aquí es la **precisión absoluta en la elegibilidad**, eliminando el riesgo de convocar a alguien por error o, peor aún, de olvidar a un colaborador que necesita su certificación para operar. Carlos deja de sudar sobre las filas de un archivo para sentirse **empoderado y seguro** de que la base de su trabajo es sólida.

#### El rompecabezas que se arma solo: Segmentación y gestión de grupos

Uno de los momentos más críticos y estresantes del proceso manual es la segmentación de grupos. Carlos solía pasar horas tratando de encajar a 200 personas en salas con cupos limitados, respetando puestos y subdirecciones. En el diseño del futuro, implementé una **Segmentación Inteligente**. 

GAC propone automáticamente las agrupaciones optimizando múltiples variables:
*   **Afinidad por puesto y curso:** Para asegurar que el aprendizaje sea homogéneo.
*   **Geografía y sede:** Minimizando traslados innecesarios.
*   **Respeto estricto de cupos:** Alertando proactivamente si un grupo está subutilizado o sobrepoblado.

"¡El rompecabezas se arma solo!", es la exclamación que Carlos tendría frente a esta interfaz. El sistema no solo agrupa, sino que sugiere acciones: "Este grupo tiene solo 3 personas, ¿quieres fusionarlo con el de la Subdirección B?". Carlos mantiene el control, pero ya no tiene que construir la solución desde cero; solo tiene que validarla o realizar ajustes mínimos con un par de clics. Esta fase transforma el estrés del "rompecabezas" en la satisfacción de una **gestión eficiente y controlada**.

#### Visibilidad en tiempo real: El fin de las llamadas y correos cruzados

La Fase 4 del viaje ideal aborda la **Asignación Ágil de Recursos**. En el pasado, coordinar a los formadores (Elena y su equipo) era un proceso fragmentado de llamadas, Teams y correos que se perdían. Diseñé un ecosistema donde la visibilidad es total y centralizada.

Carlos ahora cuenta con un **dashboard de disponibilidad real** de formadores. Los Líderes Operativos pueden entrar a la plataforma y asignar instructores directamente, viendo quién tiene carga de trabajo y quién no. Elena, por su parte, ya no recibe una lista en PDF el viernes por la tarde; ella entra a GAC y ve su agenda actualizada en tiempo real, con acceso inmediato a la lista de sus próximos asistentes.

> **Decisión de diseño:** Eliminamos la comunicación reactiva. Al centralizar la asignación, reduje el tiempo de coordinación en un 70%, eliminando la necesidad de que Carlos actúe como un "conmutador humano" entre líderes y formadores.

#### El clímax de la automatización: Un solo clic para la omnicanalidad

El cierre del ciclo es, quizás, el momento de mayor impacto emocional y operativo: el **Envío Automatizado de Comunicaciones**. En el mundo As-Is, Carlos pasaba horas redactando correos individuales y adjuntando archivos `.ical` manualmente. Un error en un archivo de calendario significaba que 20 personas llegaran a la hora equivocada.

En el viaje To-Be, este proceso se reduce a un "momento de clic único". GAC dispara las invitaciones de forma masiva y multicanal:
*   **Outlook para Gerentes:** Con toda la información necesaria para que autoricen la asistencia de su equipo.
*   **Teams y WhatsApp para Colaboradores:** Llegando por la vía que Ana y sus compañeros realmente revisan en el campo.
*   **Generación automática de .ical:** El sistema crea y adjunta el evento de calendario personalizado para cada usuario, asegurando que la cita aparezca en su agenda sin esfuerzo.

Este despliegue técnico no solo libera horas de trabajo tedioso; eleva el **profesionalismo de Gentera**. La comunicación deja de ser un mensaje de WhatsApp informal para convertirse en una notificación institucional, precisa y útil. Carlos termina su ciclo semanal el viernes temprano, no con agotamiento, sino con la satisfacción de haber orquestado un proceso impecable.

#### Blindar la integridad: La consolidación de la 'Única Fuente de Verdad'

Para que todo este viaje ideal funcione, tuve que abordar un problema estructural que detecté en el resumen de puntos débiles transversales: la **dispersión de datos**. GAC no puede ser solo una capa visual; tiene que ser la **Única Fuente de Verdad** (Single Source of Truth).

Articulé la necesidad de un sistema web centralizado que sustituya de forma definitiva al "Concentrado Histórico" y a la "Estructura de Oficinas" que flotan en correos dispersos. Esta decisión estratégica es el pilar que permite:
1.  **Integridad de los datos:** Si un colaborador cambia de puesto en ADN, GAC lo refleja en la siguiente carga.
2.  **Dashboards en tiempo real:** David (el líder) puede ver el avance de su equipo sin pedirle un reporte a Carlos. Ana puede ver su "mapa" de capacitación y saber exactamente qué curso le falta.
3.  **Reducción de la carga cognitiva:** Al no tener que validar si la información que están viendo es la "última versión", todos los usuarios ganan confianza en el sistema.

Al final, el diseño del futuro para GAC es un compromiso con el **Valor Humano** de Gentera. No estamos construyendo software; estamos devolviéndole tiempo a las personas. La reducción drástica del tiempo operativo —ese objetivo del 80% que nos trazamos— es la métrica que valida cada decisión tomada en este Journey Map. Hemos pasado del diagnóstico a un contrato de valor que ahora debemos materializar en pantallas y funciones.


Al cerrar el diseño de este viaje ideal, me di cuenta de que la elegancia del flujo dependía de algo mucho más rígido y complejo: la lógica interna que sostiene cada decisión del sistema. Teníamos el "qué" y el "cómo se siente", pero ahora necesitaba blindar el "cómo funciona" exactamente. Me quedé con una pregunta inquietante: ¿cómo íbamos a traducir las excepciones humanas de Carlos y las reglas de negocio más oscuras en un catálogo funcional que los desarrolladores pudieran construir sin ambigüedades? Era el momento de descender a las profundidades de la arquitectura de decisiones.

### Parte 7: Arquitectura de Decisiones Reglas de Negocio y Catálogo Funcional

#### El abismo entre el post-it y el algoritmo

Al cerrar el diseño del viaje ideal en la sesión anterior, me di cuenta de que la elegancia del flujo que habíamos proyectado dependía de algo mucho más rígido y menos "amigable" que un Journey Map: la arquitectura de decisiones que sostiene cada hito del sistema. Teníamos el "qué" y el "cómo se siente", pero ahora me tocaba blindar el "cómo funciona" exactamente. Mi razonamiento fue pragmático: si la lógica de reingresos o las exclusiones de área fallaban, la confianza del usuario en la automatización se desplomaría en la primera semana. No podíamos permitirnos que un colaborador dado de baja recibiera una invitación por WhatsApp; eso no solo sería un error técnico, sino un golpe a la credibilidad del proyecto GAC.

Me senté a diseccionar lo que yo llamo el "cerebro" de la plataforma. Mi objetivo era transformar las "excepciones de Carlos" —esos criterios que él aplicaba de memoria tras años de oficio— en algoritmos deterministas. Sabía que para reducir ese 80% del tiempo operativo, el sistema debía ser capaz de pensar por sí mismo frente a la Plantilla de Capacitación de ADN. No estaba diseñando pantallas; estaba articulando un motor de reglas que debía procesar miles de registros con precisión quirúrgica, eliminando la ambigüedad que hoy consume 32 horas semanales de trabajo manual.

#### La purga de datos: Blindando la elegancia operativa

Empecé por el primer filtro de elegibilidad, lo que internamente denominamos la "limpieza radical". La Plantilla de Capacitación que extraemos de ADN es un organismo vivo, pero lleno de ruido. Para que GAC funcione, el sistema debe realizar una validación forense antes de siquiera considerar a un candidato para un grupo. Implementé tres reglas de exclusión innegociables: **RN-ID-001 (Bajas)**, **RN-ID-002 (SEAS México)** y **RN-ID-003 (Incapacidades IPP)**. 

La lógica es binaria: si el estatus es "Baja" o el área es "SEAS", el registro se evapora del flujo de trabajo. Pero el verdadero reto técnico surgió con la **RN-ID-005: La Regla de los 6 meses para Reingresos**. Aquí es donde el diseño de producto se cruza con la ingeniería de datos. Diseñé un condicional que obliga al sistema a realizar un viaje al pasado:
1. GAC identifica un "Evento de Reingreso" en la plantilla actual.
2. Cruza ese ID con el **Concentrado Histórico**.
3. Calcula la diferencia entre la "Fecha de Salida Previa" y la "Fecha de Reingreso".
4. Aplicamos el disparador: `SI (Días_Fuera >= 180) ENTONCES Reiniciar Ruta SINO Continuar`.

Este blindaje es vital. En el proceso manual, Carlos a veces tenía que buscar en correos de hace un año para saber si alguien debía empezar de cero. Al automatizarlo, eliminamos el desperdicio de recursos en colaboradores que ya tienen el conocimiento, asegurando que cada peso invertido en capacitación vaya a quien realmente lo necesita.

#### El enigma del Gerente Multiproducto: Resolviendo la excepción invisible

Uno de los momentos de mayor tensión en el análisis fue desglosar la lógica del **Gerente Multiproducto (RN-SEG-004)**. Es una de esas reglas "oscuras" que solo conocen los expertos de negocio pero que definen la relevancia de la capacitación. Un gerente en Gentera no siempre toma la misma ruta; su camino depende de la composición de su equipo en campo. 

Para resolver esto, rechacé la idea de un selector manual. El sistema debe ser más inteligente. Diseñé un proceso de detección automática basado en la presencia de **Asesores CIE** (Crédito Individual) dentro de una misma oficina. La lógica que articulé funciona así: el sistema escanea la ubicación del Gerente y busca si en esa misma ubicación existe al menos un colaborador con el puesto de Asesor CIE. Si el resultado es positivo, el Gerente es reclasificado automáticamente de "Ruta Grupal" a "Ruta Multiproducto". 

Utilicé pseudocódigo y tablas de mapeo de oficinas para que este cruce ocurra en milisegundos durante la carga semanal. ¿Por qué tanto detalle? Porque esta regla garantiza que el liderazgo reciba la capacitación técnica exacta que requiere la realidad de su oficina. Si el sistema fallara aquí, enviaríamos a un gerente a aprender sobre crédito individual cuando en su oficina solo se opera crédito grupal, rompiendo la promesa de valor de GAC.

#### La tiranía de los cupos: Diseñando para la eficiencia real

Pasé luego a la segmentación de grupos y la gestión de recursos, donde la eficiencia operativa se encuentra con las restricciones físicas. Automatizar la formación de grupos no es solo juntar gente; es optimizar el uso de aulas y formadores. Basándome en los parámetros de negocio, codifiqué reglas estrictas de cupos (**RN-SEG-002 y 003**):
*   **Cursos Presenciales:** Un rango inamovible de 5 a 25 participantes.
*   **Cursos Online:** Un rango de 10 a 15 participantes.

Pero el diseño senior se ve en los casos borde (*edge cases*). ¿Qué pasa si tenemos 4 personas para un curso presencial? En lugar de dejar que el sistema falle o cree un grupo ineficiente, diseñé un sistema de alertas proactivas. GAC no decide por Carlos, pero le presenta las opciones: fusionar, posponer o buscar más candidatos. 

A esto sumé la **Asignación de Sede (RN-SEG-005)**. Aquí impuse una jerarquía de conveniencia: el sistema siempre prioriza la "Opción 1" de sede del colaborador. Solo si el cupo se excede o la sede no está disponible, el algoritmo recurre a la "Opción 2". Esta pequeña decisión de diseño lógico reduce drásticamente la fricción logística y los costos de traslado, algo que en el Excel actual se decidía casi al azar por la carga de trabajo.

#### Toques con formador: El ritmo humano en una estructura digital

Al mapear la arquitectura de la ruta de capacitación de 12 niveles, identifiqué que no todos los niveles tienen el mismo peso operativo. Introduje el concepto de **"Toques con Formador" (RN-TRAZ-002)** en los niveles 1, 4, 8 y 12. Estos son los hitos críticos donde el sistema debe forzar una interacción humana y, por ende, un registro de asistencia y calificación manual por parte del formador.

Esta granularidad me permitió diseñar las excepciones de puesto (**RN-TRAZ-004**) con una precisión que el proceso manual nunca tuvo. Por ejemplo, el Gerente de Ventas tiene prohibido por sistema tomar el nivel básico —sería una pérdida de tiempo—, mientras que el Gerente Yastás tiene una ruta quirúrgica que solo incluye el nivel 4. Al codificar estas excepciones, pasamos de un "creo que todos terminaron" a un estatus de **"Acreditado"** basado en datos duros. La trazabilidad dejó de ser una opinión para convertirse en un KPI automático.

#### El contrato final: Traduciendo el negocio a código funcional

Finalmente, toda esta arquitectura de decisiones debía aterrizar en un lenguaje que el equipo de desarrollo de Dacodes pudiera construir sin ambigüedades. Transformé cada Regla de Negocio (RN) en un **Requerimiento Funcional (RF)**. Desde el **RF-GAC-001 (Carga y Limpieza)** hasta el **RF-GAC-026 (Gestión de Super Admin)**, cada línea del catálogo es un contrato técnico.

Un detalle crítico que blindé fue el protocolo de autenticación (**RN-ADM-001**). Decidí utilizar el Número de Empleado como usuario y la Fecha de Nacimiento como contraseña inicial. Es una solución sin fricciones: el usuario no tiene que recordar una nueva clave y el sistema puede validar la identidad contra la base de datos de ADN desde el primer segundo. 

Al terminar esta fase, me di cuenta de que el éxito de GAC no reside en lo estético de su interfaz, sino en la higiene de sus datos y la robustez de estas reglas. Si la lógica de reingresos o las exclusiones fallan, el sistema es solo un Excel más caro. Hemos construido un sistema nervioso central que no solo automatiza, sino que protege la integridad del proceso de capacitación de Gentera.


Teníamos la lógica blindada y el catálogo funcional cerrado, pero me asaltó una duda estratégica: ¿cómo íbamos a demostrar, con números incontestables, que este "cerebro" digital realmente estaba entregando el ROI prometido? Necesitaba transformar estas reglas en un tablero de control que hablara el lenguaje de la dirección. Fue en ese momento cuando supe que debíamos diseñar una estrategia de medición tan rigurosa como nuestros algoritmos, definiendo los KPIs y las métricas SMART que validarían cada segundo ahorrado en la operación.

### Parte 8: Estrategia de Medición Kpis Métricas Smart y Plan de Datos

#### El rigor de los datos frente a la intuición del diseño

Teníamos la lógica blindada y el catálogo funcional cerrado, pero me asaltó una duda estratégica: ¿cómo íbamos a demostrar, con números incontestables, que este "cerebro" digital realmente estaba entregando el ROI prometido? La robustez técnica es invisible si no se puede cuantificar su impacto. Como responsable de la experiencia, sabía que para que GAC fuera un éxito rotundo en los niveles directivos de Gentera, debía hablar el lenguaje de los resultados del negocio, no solo el de la satisfacción del usuario. Necesitaba transformar el alivio que sentía Carlos al ver los flujos en una estrategia de medición de grado industrial.

Pasar de la "sensación de mejora" a la "evidencia métrica" fue mi prioridad absoluta para cerrar esta fase de descubrimiento. No bastaba con saber que el proceso sería más rápido; necesitaba definir exactamente cuánto más rápido y bajo qué condiciones. Por eso, articulé un taller específico para establecer métricas **SMART** (específicas, medibles, alcanzables, relevantes y con un plazo definido). Mi razonamiento fue claro: cada hora de desarrollo invertida por Dacodes debía estar respaldada por un indicador que justificara la inversión. Si no podíamos medir el éxito, no podíamos reclamar la victoria.

#### La liberación del tiempo: Métricas Operativas y de Precisión

El corazón del caso de negocio de GAC reside en la eficiencia operativa. Tras analizar el proceso manual de Carlos, identifiqué que su "maratón" semanal de limpieza y segmentación de datos consumía entre 24 y 32 horas. Era una carga insostenible. Por ello, fijé una meta ambiciosa pero necesaria: **reducir en un 80% el tiempo dedicado a la generación de listas**. Mi objetivo es que, en los primeros seis meses post-implementación, esas 32 horas se transformen en un rango de 4.8 a 6.4 horas semanales. No se trata solo de ahorrar tiempo; se trata de liberar la capacidad estratégica de los administradores para que dejen de ser procesadores de datos y se conviertan en gestores de talento.

Para blindar esta eficiencia, definí dos indicadores de precisión que son críticos para la confianza en el sistema:

*   **Precisión de la Automatización de Elegibles:** Establecí un objetivo del 95%. Esto significa que la gran mayoría de los colaboradores identificados por GAC no deben requerir ninguna intervención manual. Si el sistema falla en identificar correctamente quién debe capacitarse, el usuario volverá a sus hojas de cálculo por desconfianza.
*   **Tasa de Error en Convocatorias:** Actualmente, Carlos estima que un 10-15% de los registros requieren correcciones manuales debido a errores en sedes, cursos o nombres. Mi meta para GAC es reducir esa tasa a menos del 1.5%. 

> **Decisión de Diseño:** Opté por priorizar el "Tiempo de Procesamiento de la Plantilla" como un KPI técnico fundamental. Con una base de más de 27,000 colaboradores, el sistema debe ser capaz de procesar la carga completa en un máximo de 10 minutos. Si superamos ese umbral, la percepción de "automatización" se rompe y el usuario siente que el sistema es lento, independientemente de cuántas horas le ahorre al final del día.

#### Arquitectura de Adopción: Midiendo la salud de la experiencia (UX)

Un software que nadie usa, por muy potente que sea su algoritmo, es un fracaso de diseño. Para asegurar que GAC sea adoptado orgánicamente, tracé una estrategia de medición de UX basada en estándares internacionales. Definí que debíamos alcanzar una puntuación en el **System Usability Scale (SUS) superior a 75 puntos** durante el primer año. Un puntaje de 68 se considera el promedio de la industria; apuntar a 75 es una declaración de intenciones: queremos que la herramienta sea percibida como "buena" tirando a "excelente" desde el primer contacto.

Además, establecí una **Tasa de Adopción del 85% para los administradores** en los primeros tres meses. Para medir esto, configuraremos logs de actividad que nos informen no solo si iniciaron sesión, sino si completaron acciones clave como la generación de grupos o el envío de convocatorias. No me interesa la métrica de vanidad de "usuarios registrados"; me interesa el uso activo que genera valor.

Para complementar los datos cuantitativos, integré el **CSAT (Customer Satisfaction Score)** con una meta de 4.0 sobre 5.0. Mi intención aquí es capturar la transición emocional de Carlos y los demás líderes: quiero pasar de las expresiones de "agotamiento" y "estrés" que documenté en las entrevistas iniciales a una percepción de control y fluidez. Si la herramienta no reduce el estrés percibido, habremos fallado en el componente humano del proyecto.

#### El rigor del cronómetro: Plan de Recopilación de Datos y Línea Base

Ninguna métrica tiene valor si no se compara contra una realidad previa. Por eso, diseñé un plan de recopilación de datos que comienza con lo que llamo la **"Observación Cronometrada"**. No voy a confiar solo en las estimaciones verbales de los stakeholders; voy a sentarme con Carlos durante sus jornadas de los jueves para documentar, minuto a minuto, cuánto tarda realmente en limpiar la base de datos de ADN, cruzarla con el concentrado histórico y segmentar por puesto. Esta será nuestra **Línea Base**, el punto cero contra el cual mediremos el éxito de GAC.

Para el seguimiento post-lanzamiento, articulé una infraestructura de monitoreo que involucra tanto a los líderes técnicos como a los de proyecto:

*   **Logs del Sistema y Analíticas:** Implementaremos eventos en tiempo real para medir el tiempo de respuesta de la plataforma (buscando cargas de página menores a 3 segundos) y el tiempo exacto que tarda el servidor en procesar cada plantilla.
*   **Encuestas Periódicas:** Diseñé un calendario de aplicación de encuestas trimestrales para administradores y semestrales para colaboradores, asegurando que el feedback cualitativo sea constante y no solo una foto del momento del lanzamiento.
*   **Monitoreo de Infraestructura:** El SLA (Service Level Agreement) debe ser innegociable. Establecí un **Uptime mínimo del 99.5%**. En una operación como la de Gentera, donde la capacitación tiene ventanas de tiempo críticas, la indisponibilidad de la plataforma no es una opción.

#### El cierre de la investigación: De la empatía al compromiso técnico

Esta estrategia de medición cierra el círculo de la investigación cualitativa. Lo que empezó como una serie de conversaciones para entender el dolor de los usuarios, ha evolucionado hasta convertirse en un plan de ingeniería auditable. Al definir estos KPIs, no solo estoy proyectando el éxito, sino que estoy blindando la responsabilidad del equipo de diseño y desarrollo. 

Cada decisión que tomemos en la siguiente fase de Arquitectura de Información estará filtrada por estas métricas. Si un flujo de navegación propuesto añade segundos innecesarios al procesamiento o si una interfaz de reporte es confusa y amenaza el puntaje SUS, tendremos los datos para corregir el rumbo antes de escribir una sola línea de código final. Hemos transformado la visión de GAC en un compromiso de resultados tangibles para Gentera.

**Reflexión final:**
Establecer este nivel de rigor analítico me recordó que el diseño de producto senior no termina en la empatía, sino en la rendición de cuentas. Al traducir las frustraciones de Carlos en métricas SMART, le dimos al proyecto una legitimidad que trasciende lo estético. Aprendí que la mejor forma de proteger una visión de diseño es envolviéndola en datos de negocio, asegurando que el valor humano que buscamos entregar sea, por encima de todo, indiscutible.