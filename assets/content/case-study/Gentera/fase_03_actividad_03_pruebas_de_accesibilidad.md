# Fase 3: Probar y Validar (Testing)

## Actividad_03_Pruebas de Accesibilidad

### Parte 1: Arquitectura de la Validación Planificación y Reclutamiento Estratégico

#### El abismo entre el pixel y la función

Cerré el archivo de diseño visual con una mezcla de orgullo y sospecha. Tenía ante mí una interfaz que respetaba cada curva de la identidad de Gentera, con una paleta de colores que transmitía profesionalismo y una tipografía que jerarquizaba la información con precisión quirúrgica. Pero, tras diez años en esto, sé que un diseño estéticamente impecable es solo una hipótesis elegante hasta que choca con la realidad de un usuario estresado. Estábamos entrando en la **Fase 3: Probar y Validar**, y mi prioridad absoluta era transformar esos prototipos de alta fidelidad en instrumentos de medición empírica. No buscaba aprobación estética; buscaba fallos lógicos.

Mi razonamiento era simple: no podíamos permitir que la primera vez que la plataforma GAC (Gestión Automatizada de la Capacitación) enfrentara un error humano fuera en producción. Necesitaba establecer un marco de "Feedback Constante" que blindara la solución. Para lograrlo, decidí que no bastaba con observar si hacían clic en el botón correcto; debíamos validar si la carga emocional de los administradores disminuía ante la automatización y si los colaboradores sentían ese "Valor Humano" que Gentera predica. La transición de la imagen estática a la experiencia cinética exigía una arquitectura de validación que no dejara nada al azar.

#### Los siete pilares de la cimentación estratégica

Antes de contactar al primer participante, me senté a definir qué significaba "éxito" para esta ronda de pruebas. No quería métricas vanidosas, quería datos accionables que me permitieran iterar con precisión. Articulé lo que llamé mis siete pilares de validación, un marco estratégico que extraje de la necesidad de alinear los objetivos de negocio con la realidad del usuario:

1.  **Validación de la Facilidad de Uso y Eficiencia:** ¿Podían completar las tareas principales sin que yo tuviera que intervenir? La eficiencia no es solo velocidad, es la ausencia de rodeos innecesarios.
2.  **Confirmación de la Claridad Visual:** Necesitaba asegurar que el estilo visual de Gentera —sus colores, su iconografía— fuera un facilitador de la legibilidad y no una distracción decorativa.
3.  **Identificación de Fricciones Detalladas:** Buscaba esos puntos de dolor microscópicos que solo aparecen cuando el usuario interactúa con un prototipo de alta fidelidad, errores que en los wireframes de baja fidelidad suelen pasar desapercibidos.
4.  **Validación de la Terminología:** En un ecosistema tan específico como el de Gentera, una palabra mal elegida puede romper un flujo. ¿Entendían "segmentación" igual que nosotros? ¿Les resultaba familiar el lenguaje de la capacitación?
5.  **Evaluación de la Satisfacción Cualitativa:** Quería capturar la percepción de utilidad. Si la herramienta no les facilitaba la vida, el diseño había fallado, sin importar lo bonito que fuera.
6.  **Implementación de Reglas de Negocio:** Este era el punto más crítico. Debía confirmar que reglas complejas, como la elegibilidad de colaboradores o los cupos de los grupos, se reflejaran de forma transparente en la interfaz.
7.  **Cierre de Brechas de Feedback Previo:** Tenía una lista de pendientes de fases anteriores —el manejo de re-subidas de plantillas, la visibilidad de formadores y la personalización de invitaciones—. Esta era la oportunidad de oro para verificar si nuestras soluciones a esos problemas realmente funcionaban.

> **Insight Senior:** En esta etapa, el diseño deja de ser una propuesta creativa para convertirse en una tesis que debe ser probada. Si no diseñas tus objetivos de prueba con la misma rigurosidad con la que diseñas tu UI, terminarás con datos contaminados por la cortesía de los usuarios.

#### La disección de los arquetipos: Quiénes y por qué

Con los objetivos claros, pasé a la selección de los perfiles. No quería "usuarios generales"; necesitaba los roles más críticos del ecosistema GAC. Coordiné con Lalo (Líder de Proyecto) y Carlos (Administrador de Capacitación) para reclutar entre 3 y 5 participantes por cada uno de los cuatro perfiles que identifiqué como vitales para detectar patrones significativos:

*   **Carlos, el Coordinador Detallista:** Representaba al Administrador de Capacitación. Él es el corazón de la automatización. Si Carlos no podía cargar la plantilla ADN o ajustar un grupo con fluidez, el proyecto entero perdía su propósito principal. Su feedback validaría el Desarrollo 1 (Automatización).
*   **Ana, la Colaboradora Entusiasta:** Ella es la cara del usuario final. Su adopción de la plataforma es lo que daría sentido al "Valor Humano" de Gentera. Necesitaba ver cómo Ana navegaba su ruta de capacitación y si el progreso visual le generaba la claridad que esperábamos.
*   **David, el Líder Comprometido:** Como Gerente de Oficina, David no tiene tiempo para navegar profundamente; necesita dashboards que le digan quién está en riesgo y cómo va su equipo. Su mirada validaría la eficacia de nuestros tableros de reporte y la capacidad de realizar un *drill-down* efectivo hacia el detalle de sus colaboradores.
*   **Elena, la Formadora Dedicada:** El rol de Elena es operativo y crítico. Su eficiencia al registrar asistencia impacta directamente en la calidad de los datos del sistema. Necesitaba asegurar que su agenda de cursos fuera su mejor aliada y no una carga administrativa adicional.

Esta selección no fue aleatoria. Busqué diversidad en la experiencia y en la familiaridad tecnológica dentro de cada perfil para asegurar que la plataforma fuera inclusiva y no solo apta para "power users".

#### El diseño de escenarios: Tareas que no guían, sino que revelan

El siguiente paso fue la creación de los guiones de prueba. Mi regla de oro fue diseñar tareas realistas, basadas en situaciones de negocio cotidianas, pero redactadas de forma neutral para evitar el sesgo del moderador. No quería decir "haz clic aquí"; quería plantear un problema y observar cómo la interfaz ayudaba (o estorbaba) a resolverlo.

Para **Carlos**, el escenario fue el inicio de la semana: "Acabas de recibir la plantilla de capacitación semanal de ADN. Cárgala, revisa inconsistencias y ajusta un grupo que no cumpla con el cupo mínimo". Aquí evaluaría la intuición del *drag-and-drop* y la claridad de las alertas de cupo.

Para **Ana**, el enfoque fue la autonomía: "Quieres saber qué cursos te faltan y agendar el próximo en tu calendario personal". Esto me permitiría validar la sincronización de archivos .ical y la comprensión del mapa visual de su ruta.

Para **David**, la tarea fue la supervisión estratégica: "Identifica a los colaboradores retrasados en su capacitación y genera un reporte para tu reunión de desempeño". El objetivo era medir la eficiencia de los filtros y la simplicidad de la exportación a Excel.

Finalmente, para **Elena**, el reto fue la gestión operativa: "Encuentra tu próximo grupo y registra la asistencia de la sesión que acabas de terminar". Quería observar la facilidad de acceso a las listas de participantes y la claridad en el registro de comentarios.

#### El arsenal de medición: SEQ, SUS y el protocolo del pensamiento

Para que los hallazgos fueran sólidos, preparé una infraestructura de medición híbrida. Implementé la **Single Ease Question (SEQ)** inmediatamente después de cada tarea: una pregunta simple en escala del 1 al 7 para capturar la dificultad percibida en el momento exacto de la acción. Para la visión global, reservé el **System Usability Scale (SUS)** al cierre de la sesión, lo que me daría una métrica estandarizada de la usabilidad percibida de toda la plataforma.

Sin embargo, mi herramienta más valiosa sería el protocolo de **"Think-aloud" (Pensar en voz alta)**. Entrené mentalmente el guion de moderación para animar a los participantes a verbalizar cada duda, cada expectativa frustrada y cada momento de alivio. Es en esa carga cognitiva verbalizada donde se encuentran los verdaderos problemas de diseño, mucho antes de que se conviertan en un clic erróneo.

Técnicamente, dejé todo blindado: prototipos en Figma con flujos lógicos cerrados (sin callejones sin salida), sesiones programadas vía Google Meets para permitir el análisis remoto y un sistema de grabación de pantalla y audio para realizar, posteriormente, un análisis forense de cada micro-interacción. La arquitectura estaba lista; solo faltaba que los usuarios entraran en escena y pusieran a prueba nuestra visión.

#### Próximo paso:

La mesa estaba puesta y los perfiles seleccionados, pero mientras configuraba los últimos enlaces del prototipo, una duda me asaltaba: ¿serían capaces los administradores de confiar realmente en la segmentación automática o intentarían forzar el sistema para volver a sus viejos excels? Estaba a punto de abrir la puerta a las sesiones reales, donde la teoría del diseño se enfrentaría a la resistencia del hábito en lo que sería una ejecución y un análisis forense sin concesiones.

### Parte 2: Ejecución y Análisis Forense la Voz del Usuario en la Primera Ronda

#### El silencio antes del primer clic

El silencio que precede al primer clic de un usuario real sobre un prototipo en el que has trabajado semanas siempre es denso. Por mucho que confíe en mi criterio y en la solidez del UI Kit, sé que en el momento en que abro la sesión de Google Meets con Carlos, el Administrador de Capacitación, mi diseño deja de ser una hipótesis para convertirse en una herramienta de trabajo bajo fuego real. Mi enfoque para esta primera ronda de pruebas de usabilidad no fue solo validar si los botones funcionaban, sino observar la carga cognitiva y, sobre todo, la respuesta emocional ante la automatización que estábamos proponiendo para Gentera.

Inicié la sesión con Carlos aplicando un protocolo de construcción de *rapport* muy deliberado. En proyectos de transformación digital donde se reemplazan procesos manuales (como sus eternos Excels de ADN), el usuario suele sentir una mezcla de esperanza y escepticismo. Necesitaba que se sintiera lo suficientemente cómodo para "pensar en voz alta" (*Think-aloud protocol*), verbalizando no solo lo que hacía, sino lo que esperaba que sucediera. Le recordé, como siempre hago, que no lo estábamos evaluando a él, sino que el prototipo era el que estaba a prueba. Mi objetivo era recolectar *qualitative insights* que los números por sí solos no me darían.

#### La anatomía del alivio: El caso de Carlos

La primera tarea de Carlos era crítica: cargar la plantilla ADN, identificar nuevos ingresos del área de Ventas para el curso Básico y generar la segmentación. Observé su cursor moverse con cautela sobre la interfaz de carga. Cuando el sistema procesó la información y le devolvió una propuesta de grupos segmentados automáticamente, hubo un cambio notable en su lenguaje corporal, incluso a través de la cámara. Su frase fue lapidaria: "¡Esto es un sueño!". En ese momento, validé que la propuesta de valor de la automatización era acertada. La tasa de éxito en esta tarea fue del 100%, y el SEQ (*Single Ease Question*) que me otorgó fue de 6.5 sobre 7.

Sin embargo, como diseñador, mi atención no se quedó en el elogio, sino en la fricción que surgió inmediatamente después. Al revisar la lista segmentada, Carlos detectó un error menor en un nombre proveniente de la fuente de datos original. Vi cómo intentó hacer doble clic sobre la celda para corregirlo, una acción natural heredada de años de usar hojas de cálculo. Al ver que la interfaz no permitía la edición directa, su fluidez se rompió. Este hallazgo lo documenté como el **US-001 (Severidad: Media)**: la falta de capacidad para corregir inconsistencias directamente en la tabla. Mi razonamiento fue claro: si obligamos al usuario a salir del flujo, corregir el Excel original y volver a subirlo por un error de un solo carácter, estamos rompiendo la promesa de eficiencia.

> **Insight de Diseño:** La automatización genera alivio, pero la falta de control sobre los datos automatizados genera desconfianza. El usuario senior no quiere que el sistema lo haga todo; quiere que el sistema haga el trabajo pesado pero le permita mantener el volante para los ajustes finos.

#### La conexión emocional con "Mi Ruta"

Tras las sesiones con los administradores, pasé a los colaboradores. Ana, representando el perfil de ventas y operaciones, se enfrentó al módulo de "Mi Ruta de Capacitación". Aquí, el objetivo era validar si el mapa visual que habíamos diseñado era comprensible o si resultaba demasiado abstracto. Mi hipótesis era que un mapa de nodos sería más motivador que una lista plana de cursos.

La reacción de Ana confirmó la dirección estratégica. Se detuvo a observar el mapa visual y comentó que le permitía entender, por primera vez, dónde estaba parada en su carrera dentro de Gentera. La claridad visual de los nodos y el uso de los colores institucionales no solo ayudaron a la navegación, sino que generaron una sensación de pertenencia. Ana completó la tarea de agendar una sesión descargando el archivo `.ical` sin un solo titubeo. Su métrica de satisfacción fue un SUS (*System Usability Scale*) de 85/100, lo que categoriza la usabilidad como "Excelente".

No obstante, detecté un punto de confusión que clasifiqué como **US-004 (Severidad: Baja)**. Ana se detuvo sobre el concepto de "Toques con Formador". Aunque el término es parte del lenguaje interno de capacitación, en la interfaz carecía de contexto. "No sé qué implica esto, ¿es una llamada o una reunión física?", preguntó. Este es un ejemplo clásico de cómo la terminología técnica, por muy validada que esté en el negocio, puede fallar en la interfaz si no se acompaña de un soporte visual o informativo, como un *tooltip* o un modal descriptivo.

#### David y la necesidad del Benchmark

Las sesiones con los Líderes de Equipo, como David, revelaron una dimensión del producto que no habíamos dimensionado totalmente en la fase de definición. David navegó por el Dashboard de Equipo con gran agilidad; el sistema de semáforos para identificar quién estaba atrasado en su capacitación funcionó perfectamente para su escaneo visual. "Puedo ver el riesgo sin tener que perseguir a nadie", mencionó.

Sin embargo, durante el protocolo de sondeo (*probes*), le pregunté qué extrañaba en esa pantalla. Su respuesta originó el hallazgo **US-006 (Severidad: Baja)**: David quería comparar el avance de su oficina contra el promedio de la subdirección o de la empresa. No le bastaba con saber que su equipo iba al 80%; necesitaba saber si ese 80% era bueno o malo en comparación con sus pares. Este *insight* fue fundamental, ya que reveló que para los líderes, la plataforma no es solo una herramienta de seguimiento, sino un instrumento de competitividad y gestión de desempeño.

#### Elena y el rigor del registro

Finalmente, las sesiones con los formadores, representados por Elena, se centraron en el registro de asistencia y la gestión de la agenda. Elena valoró tener todo centralizado, eliminando la necesidad de cargar listas de papel que luego debían digitalizarse. El éxito en las tareas de registro fue total (100% *Success Rate*), pero surgió una necesidad operativa muy específica: la capacidad de añadir notas por participante durante la sesión (hallazgo **US-008**).

Elena explicó que, a menudo, un colaborador asiste pero muestra una actitud específica o necesita refuerzo en un tema puntual. Sin un campo de notas, esa información vital se pierde. Este es el tipo de detalle que solo surge cuando observas al usuario en su "hábitat" mental de trabajo. Mi decisión fue priorizar este campo de texto simple para la siguiente iteración, ya que el costo de implementación es mínimo comparado con el valor que aporta a la trazabilidad de la capacitación.

#### Clasificación forense de la deuda de usabilidad

Al terminar las sesiones con los 13 participantes (1 Administrador, 4 Colaboradores, 4 Líderes y 4 Formadores), me retiré para realizar el análisis forense de las grabaciones y las notas. No me limité a listar errores; sistematicé la experiencia para entender la severidad de cada fricción.

Organicé los hallazgos en una matriz de 9 problemas críticos (US-001 a US-009):

*   **Problemas de Severidad Media (US-001, US-002):** Estos afectaban directamente el flujo de trabajo del Administrador. La imposibilidad de corregir datos y la falta de visibilidad de la disponibilidad de los formadores antes de asignar grupos eran bloqueos que, aunque no impedían terminar la tarea, generaban una frustración que podría llevar al abandono de la herramienta en favor del viejo Excel.
*   **Problemas de Severidad Baja (US-003 a US-009):** Eran principalmente refinamientos estéticos, necesidades de mayor contexto informativo (como los *FAQs* para colaboradores) o funcionalidades deseables pero no críticas para el lanzamiento (como la sincronización con Outlook Calendar).

A pesar de estos 9 puntos de dolor, las métricas cuantitativas fueron contundentes. Un SEQ promedio de 6.7/7 en la mayoría de las tareas y un SUS global de 85 a 90 según el rol, indicaban que la arquitectura de información y el modelo mental propuesto eran los correctos. No estábamos ante un problema de estructura, sino ante un proceso de pulido necesario.

#### Reflexión sobre el factor humano en Gentera

Lo que más me marcó de esta ronda de pruebas no fueron los clics, sino el suspiro de alivio de los usuarios. En el contexto de Gentera, donde el valor "Centrado en la Persona" es el eje, diseñar una herramienta que reduce el estrés operativo es cumplir con la misión de la empresa. Ver a Carlos pasar de la tensión de manejar miles de datos a la sonrisa de ver una segmentación hecha en segundos, me recordó por qué hacemos lo que hacemos.

La UX en este proyecto no se trataba solo de píxeles; se trataba de devolverle tiempo a las personas para que pudieran enfocarse en lo que realmente importa: la formación y el crecimiento de los colaboradores. Salí de esta fase de análisis con una hoja de ruta clara para la iteración. Tenía el mandato de los usuarios para blindar la herramienta, corregir las inconsistencias de edición y enriquecer los tableros con datos comparativos.

#### Próximo paso:

Con los 9 problemas de usabilidad perfectamente diagnosticados y priorizados, la siguiente fase no era simplemente "arreglar errores". Se trataba de una iteración táctica donde debía equilibrar las peticiones de los usuarios con las restricciones técnicas de desarrollo. Estaba listo para entrar en la fase de refinamiento final, transformando estos hallazgos en especificaciones técnicas que no dejaran lugar a dudas para el equipo de ingeniería. La pregunta ahora era: ¿cómo integrar la edición directa de datos sin comprometer la integridad de la base de datos automatizada? Esa sería la batalla de la siguiente iteración.

### Parte 3: Blindaje de Inclusividad Auditoría de Accesibilidad Wcag 2.1

#### Del flujo fluido al flujo inclusivo

La eficiencia es un espejismo si solo funciona para una parte de la población. Al cerrar la ronda anterior de pruebas de usabilidad, donde logramos diagnosticar esos 9 problemas críticos que entorpecían la operación de Carlos y su equipo, sentí una satisfacción parcial. Teníamos un sistema que "funcionaba", sí, pero me asaltó una duda fundamental: ¿funcionaba para todos? En Gentera, el valor **"Centrado en la Persona"** no es un eslogan de marketing, es el eje de nuestra cultura. Si la plataforma GAC dejaba fuera a un colaborador con baja visión o a alguien que, por una lesión temporal, no pudiera usar un ratón, no estábamos diseñando una solución; estábamos diseñando una barrera.

Mi razonamiento estratégico en este punto fue tajante: la usabilidad sin accesibilidad es excluyente por diseño. Como responsable del producto, no podía permitir que el "alivio" que sentían los administradores al automatizar la segmentación se convirtiera en frustración para un usuario que dependiera de un lector de pantalla. Necesitaba pasar de la validación de flujos de trabajo a una **auditoría forense de la interfaz**. Esta transición no fue un trámite técnico, sino un compromiso ético para eliminar cualquier barrera sensorial o motora antes de que el código llegara a producción. Sabía que integrar la accesibilidad desde el diseño reduce costos drásticamente y, sobre todo, blinda la experiencia de cara al futuro.

#### El marco normativo: Por qué WCAG 2.1 Nivel AA

No se puede mejorar lo que no se puede medir, así que mi primer paso fue establecer un marco de cumplimiento normativo riguroso. Elegí el estándar **WCAG 2.1 Nivel AA** como nuestro norte. Esta decisión no fue arbitraria; el Nivel AA representa el punto de equilibrio perfecto para una aplicación corporativa de alta complejidad como GAC. Es lo suficientemente exigente como para eliminar las barreras de accesibilidad más comunes y críticas, pero lo suficientemente realista como para ser implementado sin comprometer la viabilidad técnica del proyecto en los tiempos de entrega que manejábamos.

Para ejecutar esta auditoría, no confié en mi memoria. Utilicé checklists exhaustivas basadas en las pautas de la W3C, analizando cada componente de nuestra librería de diseño. Mi objetivo era asegurar que la plataforma fuera legalmente robusta y, lo más importante, éticamente responsable. No quería que la accesibilidad fuera un "añadido" de última hora; quería que fuera el cimiento sobre el cual se construyera cada interacción. Al adoptar el Nivel AA, estábamos enviando un mensaje claro a los stakeholders de Gentera: este producto está diseñado para durar y para incluir a toda la plantilla, sin excepciones.

#### Descomponiendo la interfaz: El filtro de los principios POUR

Para que la auditoría fuera sistemática y no dejara cabos sueltos, descompuse la interfaz de GAC bajo los cuatro pilares fundamentales del modelo **POUR**: Perceptible, Operable, Comprensible y Robusto. Este enfoque me permitió analizar la plataforma desde ángulos que a menudo pasan desapercibidos en las pruebas de usabilidad tradicionales.

*   **Perceptibilidad:** Me aseguré de que la información no dependiera de un solo sentido. ¿Teníamos alternativas de texto para cada icono? ¿El contraste era suficiente para alguien con fatiga visual?
*   **Operabilidad:** Aquí el reto era la navegación. ¿Podía un usuario recorrer todo el dashboard de indicadores sin tocar el ratón? ¿Teníamos "trampas de teclado" en los modales de creación de grupos?
*   **Comprensibilidad:** Analicé si el lenguaje era claro y si las interacciones eran predecibles. Si un administrador hacía clic en "Segmentar", ¿el sistema explicaba claramente qué estaba ocurriendo?
*   **Robustez:** Evalué si el marcado del diseño permitiría que tecnologías de asistencia, como los lectores de pantalla, interpretaran la interfaz de forma fiable.

Inicié este proceso utilizando herramientas de escaneo automatizado como **WAVE** y **axe DevTools** sobre los prototipos de alta fidelidad que ya teníamos en HTML/CSS preliminar. Estos escaneos fueron mi primera línea de defensa, permitiéndome identificar rápidamente errores obvios como la falta de etiquetas en formularios o problemas estructurales en los encabezados. Sin embargo, como diseñador senior, sé que lo automático solo detecta el 30% de los problemas; el resto requiere un ojo humano y crítico.

#### La tiranía del contraste: Auditoría cromática forense

Uno de los puntos más críticos y, a menudo, más descuidados es el contraste de color. En un entorno corporativo donde los colaboradores pueden estar operando bajo luces fluorescentes intensas o en dispositivos con pantallas de baja calidad, un contraste pobre es una sentencia de muerte para la usabilidad. Me sumergí en los archivos de Figma para auditar la paleta de colores de GAC con una precisión quirúrgica.

Apliqué el criterio **1.4.3 de la WCAG**, verificando que cada combinación de texto y fondo cumpliera con los ratios mínimos. El texto normal debía mantener un ratio de **4.5:1**, mientras que para el texto grande (encabezados) aceptábamos un **3:1**. Descubrí, por ejemplo, que nuestro "Verde Gentera" utilizado en algunos estados de éxito sobre fondo blanco no alcanzaba el ratio necesario para el Nivel AA. Era estéticamente agradable, pero funcionalmente invisible para usuarios con baja visión.

Utilicé plugins de accesibilidad directamente en Figma y validadores de contraste online para probar cada estado de los botones: reposo, hover, foco y desactivado. Esta auditoría me llevó a ajustar sutilmente la saturación de nuestra paleta secundaria. No fue un cambio drástico en la identidad visual, pero fue la diferencia entre una interfaz que "se ve bien" y una que "se lee siempre". El contraste adecuado es la primera línea de defensa para la inclusión.

#### Sobrevivir sin el ratón: La prueba del teclado

La verdadera prueba de fuego para la **Operabilidad** ocurrió cuando decidí "romper" mi flujo de trabajo habitual. Aparté el ratón y el trackpad, y me propuse completar los flujos más complejos de la plataforma —como la "Creación de Grupos" y la "Consulta de Progreso"— utilizando exclusivamente la tecla **Tab**.

Fue un ejercicio revelador. En el flujo de segmentación, descubrí que el orden de tabulación no seguía la lógica visual de la pantalla; el foco saltaba erráticamente de un filtro de área a un botón de acción al final de la página, ignorando los pasos intermedios. Esto es lo que llamamos una "trampa de teclado" potencial, donde un usuario puede quedar atrapado en un bucle infinito de clics invisibles.

Además, auditamos la visibilidad del **indicador de foco (focus ring)**. En varios componentes personalizados de nuestra librería, el indicador de foco había sido suprimido por razones estéticas. Lo restauré de inmediato, asegurándome de que cada elemento interactivo tuviera un estado visual claro y contrastado al ser seleccionado. Para un usuario que no usa ratón, el indicador de foco es su único mapa; si desaparece, el usuario está perdido. Me aseguré de que el foco no solo fuera visible, sino que siguiera un orden semántico que respetara la jerarquía de la información.

#### Escuchar el diseño: La verdad de los lectores de pantalla

Si la navegación por teclado es el mapa, el lector de pantalla es la voz del sistema. Para validar la **Robustez** y la **Comprensibilidad**, activé **NVDA** en Windows y **VoiceOver** en macOS. Navegar por GAC con los ojos cerrados fue la experiencia más humillante y educativa de todo el proceso.

Me encontré con que muchos de nuestros botones de "Acción rápida" en las tablas de colaboradores solo eran anunciados como "Botón", sin ninguna descripción de su función. Para un usuario que no puede ver el icono de la papelera o el del lápiz, esos botones son agujeros negros de incertidumbre. Validé que cada imagen significativa tuviera atributos `alt` descriptivos y, lo más importante, que los formularios tuvieran etiquetas (`labels`) asociadas correctamente.

Fue aquí donde apliqué el criterio **4.1.2 (Nombre, Función, Valor)**. Me aseguré de que el lector de pantalla no solo anunciara que había un campo de texto, sino que dijera: "Nombre del colaborador, obligatorio, campo de edición". Esta prueba de fuego confirmó que la estructura técnica de mi diseño comunicaba la intención correcta. No se trata de que el sistema "lea" lo que hay en pantalla, sino de que "explique" la experiencia para que el usuario pueda tomar decisiones informadas.

#### Diagnóstico de barreras: El peso de la jerarquía semántica

Durante la auditoría, identifiqué dos barreras críticas que no habían aparecido en las pruebas de usabilidad con usuarios sin discapacidad, pero que eran bloqueos totales para la accesibilidad.

1.  **Iconografía muda en 'Toques con Formador':** En el dashboard de seguimiento, utilizábamos iconos para representar los "Toques con Formador" (sesiones de retroalimentación). Descubrí que, para un lector de pantalla, esta sección era un silencio absoluto. La solución no era solo visual; implementé **tooltips descriptivos** y etiquetas de texto ocultas que explicaban exactamente qué significaba cada marca. Sin esta descripción textual, la métrica de acompañamiento humano —vital para Gentera— era inaccesible.
2.  **Anarquía en los encabezados:** Al revisar la estructura del árbol de contenidos, detecté que habíamos saltado de un H1 a un H3 para ahorrar espacio visual, rompiendo la jerarquía semántica. Para un usuario de lector de pantalla que navega saltando por encabezados, esto es como leer un libro donde faltan capítulos. Ordené una reestructuración total de la jerarquía (H1-H4) para que fuera lógica y predecible.

Estas correcciones transformaron lo que era un mapa confuso en una ruta clara y navegable. La jerarquía visual debe coincidir siempre con la jerarquía técnica; de lo contrario, estamos mintiendo al usuario.

#### El manual de implementación: Blindando el código desde el diseño

La accesibilidad no termina en el prototipo; debe sobrevivir al desarrollo. Para asegurar esto, el entregable final de esta actividad no fue solo un informe de hallazgos, sino un **manual de especificaciones técnicas para ingeniería**.

Redacté especificaciones detalladas para la implementación de atributos **ARIA (Accessible Rich Internet Applications)**. Definí roles específicos para los componentes dinámicos de los tableros, asegurándome de que cuando un gráfico se actualizara, el lector de pantalla anunciara el cambio (usando `aria-live`). No quería que el equipo de desarrollo tuviera que adivinar cómo hacer que un componente complejo fuera accesible.

Además, exigí la definición de **estados de foco personalizados en el CSS**. En lugar de depender del anillo azul por defecto del navegador, que a veces se pierde con nuestros colores de marca, diseñamos un estado de foco de alto contraste que fuera coherente con el UI Kit de GAC. Proporcionar estas recomendaciones accionables garantizó que mi visión de un diseño inclusivo se tradujera fielmente en un código que no dejara a nadie atrás.

> **Reflexión Senior:** A menudo se piensa en la accesibilidad como un costo adicional, pero yo lo veo como el **"efecto rampa"**. Así como las rampas en las aceras ayudan no solo a personas en sillas de ruedas, sino también a padres con cochecitos o viajeros con maletas, una interfaz accesible mejora la usabilidad para todos. Un contraste alto ayuda al colaborador que trabaja bajo el sol; una navegación por teclado lógica ayuda al usuario experto que quiere ir más rápido. Al blindar la inclusividad de GAC, no solo cumplimos con un estándar, sino que elevamos la calidad percibida de toda la plataforma.

#### Próximo paso:

Con la auditoría de accesibilidad terminada y el informe de recomendaciones en manos de desarrollo, sentí que la plataforma GAC finalmente tenía un alma inclusiva. Sin embargo, el diseño nunca es un proceso lineal. Al cruzar los hallazgos técnicos de accesibilidad con los problemas de usabilidad que detectamos anteriormente, me di cuenta de que algunas de las soluciones propuestas para mejorar la eficiencia chocaban frontalmente con la simplicidad que necesitábamos mantener.

Me encontraba ante el desafío final: integrar todas estas correcciones en una versión definitiva del prototipo para una segunda y última ronda de validación. La tensión era evidente: ¿podríamos añadir la edición directa de datos y los nuevos niveles de accesibilidad sin saturar la interfaz? Estaba a punto de entrar en el ciclo de refinamiento más intenso del proyecto, donde cada píxel tendría que justificar su existencia.

### Parte 4: El Ciclo Iterativo Refinamiento y Segunda Ronda de Validación

#### El equilibrio entre la norma y la intuición

Al cerrar el capítulo de la auditoría de accesibilidad, me encontré en una encrucijada que todo diseñador senior reconoce: tenía una interfaz técnicamente perfecta bajo los estándares WCAG 2.1, pero que corría el riesgo de volverse rígida. El blindaje de accesibilidad es una victoria ética y funcional, pero no garantiza por sí solo que la tarea sea ágil. Tenía sobre mi mesa dos realidades en tensión: las correcciones de contraste y navegación por teclado que acabábamos de implementar, y los nueve problemas de usabilidad (del US-001 al US-009) que la primera ronda de pruebas había dejado al descubierto. Mi razonamiento fue claro: no podíamos entregar una plataforma inclusiva que fuera tediosa de usar. El diseño es un organismo vivo y, en ese momento, necesitaba una cirugía de refinamiento para integrar ambos mundos sin que la interfaz colapsara bajo el peso de nuevas funcionalidades.

Esta fase de iteración no fue un simple "ajuste de tuercas". Fue el momento de mayor densidad estratégica del proyecto GAC. Sabía que si no resolvíamos la fricción en la corrección de errores de Carlos o la ambigüedad en la ruta de Ana, el sentimiento de "alivio" que habíamos detectado inicialmente se transformaría en frustración operativa. Me propuse ejecutar un ciclo de refinamiento tan intenso que no dejara lugar a dudas en la validación final. Estábamos pasando de un prototipo funcional a una solución blindada, donde cada interacción debía estar justificada por la evidencia y cada componente debía responder a una necesidad real observada en las trincheras de Gentera.

#### El "War Room" de priorización: diseño frente a factibilidad

Para dar orden a este caos controlado, convoqué al equipo a un taller de priorización de cuatro horas, siguiendo rigurosamente la estructura que tracé en el `02_plan_de_iteracion_del_diseno.pdf`. En la sala —virtual en esta ocasión— nos reunimos el Líder Técnico, los desarrolladores frontend y backend, y el Líder de Proyecto. Mi objetivo no era solo presentar una lista de deseos, sino articular un consenso sobre qué íbamos a construir y cómo. Abrí la sesión con el `05_informe_de_pruebas_de_usabilidad.pdf` (versión preliminar de hallazgos) proyectado, enfatizando las citas directas de los usuarios. No hay nada que alinee más rápido a un desarrollador que escuchar a un usuario real decir: "No entiendo qué tengo que hacer aquí".

Analizamos cada hallazgo, desde el US-001 hasta el US-009, bajo un prisma de impacto versus esfuerzo. El debate más intenso surgió con la corrección de inconsistencias de Carlos. El equipo técnico inicialmente propuso que el usuario simplemente volviera a subir el Excel corregido, pero yo defendí la necesidad de una **edición en línea**. Argumenté que para un error en un solo dato, obligar al usuario a salir de la plataforma, abrir un archivo local y re-subirlo era una falla en la promesa de automatización. Al final, logramos un acuerdo: implementaríamos la edición directa en la tabla para errores puntuales y mantendríamos la re-subida masiva como una opción secundaria claramente señalizada. Este equilibrio entre mi visión de UX y la realidad del backend fue lo que permitió que el `02_plan_de_iteracion_del_diseno.pdf` se convirtiera en una hoja de ruta ejecutable y no solo en una declaración de intenciones.

#### Rediseñando la eficiencia para el administrador

Una vez terminada la alineación, me sumergí en Figma para materializar las soluciones. El foco principal era Carlos y su lucha contra las inconsistencias de datos (US-001). Diseñé una interfaz de **"Edición en Línea"** dentro del "Reporte Detallado de Errores". Ahora, cuando el sistema detectaba un correo mal formado o un puesto inexistente, Carlos no recibía solo una alerta; recibía una celda editable. Implementé estados de *hover* y *focus* específicos para que fuera evidente qué campos eran corregibles. Para los casos de errores masivos, diseñé un botón destacado de "Re-subir Plantilla Corregida", acompañado de un microcopy que explicaba exactamente qué columnas necesitaban atención, eliminando el juego de adivinanzas que sufría en su proceso actual con los archivos .xls históricos.

La otra gran maniobra para el rol de administrador fue la visibilidad de los formadores (US-002). En la pantalla de "Detalle y Ajuste de Grupo", integré un **panel lateral expandible (drawer)** que mostraba la "Disponibilidad y Carga de Formadores" en tiempo real. Mi razonamiento fue evitar el salto de contexto: Carlos necesitaba saber quién estaba libre *mientras* estaba asignando el grupo, no después. Este panel incluía la especialización y ubicación del formador, permitiendo una toma de decisiones informada en segundos. Al articular esta información directamente en el flujo de segmentación, transformé una tarea que antes requería consultar tres archivos diferentes en una sola acción integrada dentro de la plataforma GAC.

#### Claridad en la ruta y soporte preventivo

Para Ana y los colaboradores, el reto era la terminología (US-004). El concepto de "Toques con Formador" generaba dudas en la primera ronda. En lugar de cambiar el nombre —que ya era parte de la cultura de Gentera—, decidí enriquecer el componente. Diseñé **tooltips informativos y modales descriptivos** que se activaban al interactuar con los nodos de la ruta (Niveles 1, 4, 8 y 12). Estos elementos explicaban de forma concisa qué ocurriría en ese hito, eliminando la ansiedad por lo desconocido. Era una solución quirúrgica: no saturaba la interfaz visualmente, pero estaba ahí justo cuando el usuario la necesitaba.

Complementé esta mejora con la creación de una sección de **"Preguntas Frecuentes" (FAQs)** accesible desde el menú lateral (US-005). No quería un muro de texto estático; diseñé un buscador interno y categorías colapsables para que Ana pudiera resolver dudas sobre sus viáticos o fechas de examen sin salir de la herramienta. Por otro lado, para Elena y los formadores, implementé la funcionalidad de **exportación iCal** (US-009). Aunque la sincronización bidireccional completa quedó para una fase futura, este botón de "Añadir a Calendario" en cada curso de su agenda fue una victoria rápida que redujo significativamente el riesgo de inasistencias por olvido. Cada una de estas micro-decisiones de diseño, documentadas en el `02_plan_de_iteracion_del_diseno.pdf`, buscaba blindar la confianza del usuario en el sistema.

#### La prueba de fuego: segunda ronda de validación

Con el prototipo de alta fidelidad refinado y las correcciones de accesibilidad integradas, procedí a la segunda ronda de pruebas de usabilidad, tal como lo detallé en el `04_objetivos_y_perfiles_para_segunda_ronda_de_pruebas.pdf`. Recluté a los mismos 13 participantes de la primera fase para medir la evolución de su percepción, incluyendo a Carlos, 4 colaboradores, 4 líderes y 4 formadores. Utilicé un protocolo de **"pensar en voz alta"** (think-aloud) muy riguroso. Quería capturar no solo si podían completar la tarea, sino qué sentían al hacerlo ahora que la interfaz respondía a sus dolores previos.

Las sesiones fueron reveladoras. Al enfrentarse a la nueva interfaz de corrección de errores, Carlos soltó un comentario que anoté de inmediato: "Esto es justo lo que necesitaba, me ahorra diez minutos de buscar en el Excel". Observé cómo Ana navegaba por su ruta y, al ver el tooltip del "Toque con Formador", su expresión de confusión desapareció. No hubo regresiones de usabilidad; las soluciones implementadas para los hallazgos US-001 a US-009 no solo funcionaron, sino que se sintieron naturales. El prototipo ya no se sentía como una propuesta de diseño, sino como una herramienta de trabajo lista para ser utilizada en las oficinas de Gentera.

#### La métrica del éxito: un SUS de 90/100

Los resultados cuantitativos que recopilé en el `05_informe_de_pruebas_de_usabilidad.pdf` confirmaron mis sospechas: habíamos alcanzado un nivel de excelencia. La **Tasa de Éxito en tareas críticas fue del 100%** para todos los roles. Lo más impactante fue la eficiencia: registramos una **reducción promedio del 30% en el tiempo de tarea** para procesos complejos como la segmentación de grupos y la generación de reportes de avance. Los usuarios no solo terminaban las tareas, sino que lo hacían mucho más rápido y con menos clics.

Pero la cifra que realmente coronó el proceso fue el **System Usability Scale (SUS) global, que alcanzó un 90/100**. Pasar de un 85 a un 90 en una iteración es un reto mayúsculo, y lograrlo significó que la plataforma GAC entró en la categoría de "Excelente Usabilidad". Las métricas de facilidad percibida (SEQ) se mantuvieron casi perfectas, con un 6.9/7 en promedio. Estos números no eran solo vanidad; eran el respaldo empírico que necesitaba para demostrar a los stakeholders que la inversión en este ciclo de refinamiento había valido cada hora de trabajo. Habíamos transformado la complejidad técnica en fluidez operativa.

#### El backlog estratégico y el cierre de la iteración

A pesar del éxito, el proceso de diseño nunca termina realmente. Durante las pruebas, surgieron dos necesidades nuevas de baja severidad que identifiqué como US-010 (Recursos del curso para Ana) y US-011 (Notas privadas de coaching para los líderes). Siguiendo una mentalidad de producto escalable, decidí no incluirlas en esta versión para no comprometer la fecha de entrega a desarrollo. En su lugar, las documenté detalladamente en el backlog del `05_informe_de_pruebas_de_usabilidad.pdf` como recomendaciones para futuras versiones. Esta gestión del alcance es lo que separa un proyecto de diseño de uno de producto: saber cuándo una solución es "suficientemente buena" para lanzarse y qué debe esperar para no descarrilar el cronograma.

Reflexionando sobre este ciclo, me doy cuenta de que la verdadera magia de GAC no está en la automatización per se, sino en cómo esa automatización se siente humana. Al escuchar a los usuarios y ajustar el prototipo basándome en su realidad, logramos que una herramienta de gestión administrativa adquiriera un propósito claro y un alma operativa. Con el prototipo validado, las métricas en máximos históricos y el equipo de desarrollo alineado con las nuevas soluciones, la plataforma estaba finalmente lista para salir del laboratorio de diseño.

> **Insight de Diseño:** La iteración no es corregir errores, es refinar la intención. Un SUS de 90 no se logra añadiendo funciones, sino eliminando la fricción de las que ya existen. En GAC, el éxito fue hacer que lo complejo pareciera obvio.


Con los resultados del SUS en la mano y un prototipo que los usuarios ya no querían soltar, me enfrenté al último gran reto antes de pasar la estafeta a ingeniería. Sabía que las métricas eran impresionantes, pero en una organización como Gentera, el éxito técnico debe traducirse en alineación estratégica. Tenía que presentar estos hallazgos ante los stakeholders de alto nivel, demostrando no solo que la herramienta funcionaba, sino que estaba lista para transformar radicalmente la eficiencia de la capacitación a nivel nacional. Estaba a punto de entrar en la sesión de validación final, donde el diseño dejaría de ser un prototipo para convertirse en una decisión de negocio inminente.

### Parte 5: Alineación Estratégica Validación Final con Stakeholders

#### El peso de la evidencia frente a la visión de negocio

Al cerrar el ciclo de iteraciones y ver ese System Usability Scale (SUS) consolidado en un 90/100, supe que el trabajo técnico estaba blindado. Sin embargo, en una organización con la trayectoria y los valores de Gentera, un gran número no es suficiente si no se traduce en confianza estratégica. Tenía ante mí un prototipo de alta fidelidad que ya no solo "parecía" real, sino que funcionaba con una precisión quirúrgica, pero faltaba el paso más crítico: transformar ese éxito de laboratorio en una decisión de negocio inminente.

Mi razonamiento en este punto fue claro: el diseño no termina cuando el prototipo es usable, sino cuando los stakeholders entienden que ese diseño es el vehículo para alcanzar sus objetivos operativos. No podía presentarme ante Lalo (Líder de Proyecto) y Carlos (Administrador de Capacitación) simplemente a mostrar pantallas bonitas. Necesitaba articular una narrativa de valor donde cada cambio realizado en la Fase 3 fuera visto como una respuesta directa a un riesgo mitigado. La sesión de validación final no era un trámite de presentación; era el filtro definitivo para asegurar que la plataforma GAC fuera estratégicamente viable antes de entregar el testigo al equipo de ingeniería.

#### Curaduría forense: la construcción del caso de éxito

Dediqué las 48 horas previas a la sesión a una labor de consolidación exhaustiva. No quería abrumar a la mesa con datos crudos, así que filtré la información de las pruebas de usabilidad para construir un Informe Resumido que fuera tanto racional como emocional. Seleccioné los 9 problemas críticos que habíamos identificado (desde el US-001 hasta el US-009) y los vinculé directamente con sus soluciones finales. 

Para que el impacto fuera real, preparé una serie de citas directas y clips de audio de los usuarios que participaron en las pruebas. Escuchar a un administrador expresar "alivio" al ver cómo la segmentación se automatizaba en segundos, después de años de hacerlo manualmente en archivos de Excel fragmentados, era un argumento que ningún gráfico de barras podría superar. Mi estrategia de preparación incluyó:

*   **El Informe de Usabilidad:** Un resumen ejecutivo que no solo listaba fallos, sino que celebraba los hallazgos positivos y demostraba cómo habíamos erradicado los puntos de fricción más dolorosos.
*   **El Reporte de Accesibilidad:** Aquí fui inflexible. Detallé las barreras eliminadas bajo el estándar WCAG 2.1 Nivel AA, explicando que esto no era solo cumplimiento técnico, sino una extensión del valor "Centrado en la Persona" de Gentera. Si el producto no era inclusivo, no era un producto de Gentera.
*   **La Agenda de Tensión Creciente:** Diseñé una sesión de 90 minutos estructurada para ir de la validación de datos a la demostración táctica, dejando el espacio final para la aprobación formal.

#### La narrativa del cambio: el "Antes vs. Después" como argumento

Cuando inicié la sesión con Lalo y Carlos, no abrí el prototipo de inmediato. Comencé estableciendo el contexto de los hallazgos. Utilicé una técnica de anotaciones visuales para mostrar la evolución del producto. Presenté una pantalla del flujo original de segmentación de grupos —aquel que en las primeras pruebas generaba confusión y errores de carga— y la puse al lado de la versión refinada. 

"Basado en el problema US-004, donde detectamos que los usuarios perdían el rastro de los colaboradores elegibles al aplicar filtros complejos, rediseñamos la persistencia de datos y la retroalimentación visual", les expliqué. Mostré cómo cada píxel que habíamos movido, cada etiqueta que habíamos renombrado y cada microinteracción que habíamos ajustado en la Fase 3 tenía un propósito funcional respaldado por la evidencia de las pruebas. No era una cuestión de estética; era una cuestión de eficiencia operativa. 

Esta transparencia fue vital. Al mostrarles que sus preocupaciones iniciales y los tropiezos de los usuarios reales habían sido escuchados y resueltos, la resistencia natural al cambio se disolvió. Los stakeholders no estaban viendo un diseño terminado; estaban viendo la culminación de un proceso de escucha activa que ellos mismos habían impulsado.

#### El "mic drop" técnico: SUS 90 y cumplimiento WCAG

El momento de mayor peso en la reunión fue la presentación de las métricas cuantitativas. Cuando proyecté el SUS de 90/100, me tomé un momento para explicar su significado: un sistema que supera los 80 puntos se considera de clase mundial en términos de usabilidad percibida. Para Gentera, esto se traduce en una curva de aprendizaje mínima y una reducción drástica en los tickets de soporte post-lanzamiento.

Continué con la demo en vivo, pero esta vez con un enfoque en la accesibilidad. Navegué por el flujo de "Asignación de Recursos" utilizando solo el teclado y herramientas de lectura de pantalla para demostrar el cumplimiento de los principios de inclusividad de la WCAG. 

> **Insight Estratégico:** En proyectos de transformación digital interna, la accesibilidad suele verse como un "deseable". En GAC, la posicioné como un "blindaje". Un sistema accesible es, por definición, un sistema más robusto y fácil de usar para todos, eliminando errores derivados de una mala jerarquía visual o falta de contraste.

Al ver la fluidez de la plataforma y cómo las reglas de negocio más complejas —como la exclusión automática de colaboradores que no cumplen con el perfil del puesto— se ejecutaban sin fricción, noté que la conversación pasó de ser una revisión a ser una planificación de despliegue.

#### Gestionando el entusiasmo: el Roadmap frente al MVP

Como suele ocurrir en estas sesiones de alto nivel, el éxito del diseño despertó nuevas ambiciones. Lalo y Carlos empezaron a visualizar funcionalidades que no estaban en el alcance inicial, como integraciones más profundas con sistemas de nómina externos o módulos de gamificación avanzada (que ya habíamos bosquejado como US-010 y US-011).

Aquí es donde mi rol de Senior Product Designer se volvió más diplomático. Escuché activamente, validé la importancia de sus ideas, pero las encuadré firmemente en el **Roadmap futuro**. "Esas son evoluciones naturales y valiosas", les dije, "y las tenemos documentadas como hallazgos de esta fase. Sin embargo, para garantizar la estabilidad del lanzamiento y respetar el cronograma de desarrollo, nuestro enfoque hoy debe ser blindar este núcleo que ya validamos con éxito". 

Esta gestión de expectativas permitió que la sesión no se descarrilara hacia un *scope creep* infinito, manteniendo el foco en obtener la aprobación de lo que ya estaba listo para ser construido. Aseguré que todas esas preocupaciones y deseos quedaran registrados en la minuta, pero protegí la integridad del MVP actual.

#### El visto bueno y la estafeta hacia ingeniería

Hacia el final de los 90 minutos, llegó el momento de la verdad. Lancé la pregunta directa: "¿Tenemos su aprobación formal para considerar estos diseños como la base definitiva para la fase de desarrollo?". El "visto bueno" de Lalo y Carlos fue unánime. No fue una aprobación por compromiso, sino una basada en la certeza de que el producto funcionaba porque lo habían visto ser probado por su propia gente.

Cerramos la sesión con acuerdos claros sobre el **Hand-off**. Me comprometí a entregar no solo los archivos de Figma, sino un paquete completo de especificaciones técnicas, estados de error documentados y el reporte final de accesibilidad para que el equipo de desarrollo de Dacodes no tuviera que adivinar ninguna intención de diseño. La minuta de acuerdos que redacté y envié minutos después de terminar la reunión no era solo un resumen; era el contrato que sellaba el éxito de la Fase 3.

Logramos que el diseño de GAC dejara de ser una propuesta para convertirse en una realidad inminente. Salí de esa sala virtual con la satisfacción de saber que habíamos reducido el riesgo de rechazo a casi cero. El camino hacia el desarrollo estaba despejado, no por intuición, sino por una validación implacable.

**Reflexión final:**
Cerrar esta fase con la validación de los stakeholders me recordó que nuestro trabajo como diseñadores es, en gran medida, gestionar la incertidumbre de otros a través de la evidencia. Lograr que una organización del tamaño de Gentera confíe plenamente en una solución radicalmente nueva solo es posible cuando demuestras que cada decisión está anclada en la realidad de sus usuarios. Me llevo el aprendizaje de que la transparencia en el proceso de testing es la herramienta de ventas más poderosa que existe: no tuve que convencerlos de que el diseño era bueno, ellos mismos lo descubrieron a través de los datos.