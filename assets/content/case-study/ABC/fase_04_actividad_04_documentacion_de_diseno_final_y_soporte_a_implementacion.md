# Fase 4: Soporte al Desarrollo y Pruebas / Implementar

## Actividad 04: Documentación de Diseño Final (y Soporte a Implementación)

> Esta fase representa el puente crítico entre la visión de diseño y la realidad técnica. Como Lead Product Designer, el enfoque se desplaza de la creación a la curaduría y validación, asegurando que cada píxel, interacción y criterio de accesibilidad se traduzca fielmente en el entorno de producción. El proceso abarca desde la colaboración diaria en Sprints y la toma de decisiones ágiles ante limitaciones técnicas, hasta la ejecución de auditorías de accesibilidad WCAG 2.1 AA, la participación en pruebas de aceptación de usuario (UAT) y la consolidación de la documentación 'As-Built' en el Design System, garantizando un producto final que no solo funciona, sino que respira la excelencia institucional del Centro Médico ABC.

### Parte 1: La Alianza Técnica Planificación y Soporte Diario al Desarrollo

#### La ilusión del Handoff estático

Cerré el último archivo de Figma, exporté los assets y envié la notificación formal de entrega al equipo de ingeniería. En la teoría de los libros de texto, mi trabajo como **Product Designer** para el Centro Médico ABC debería haber terminado ahí, pero la realidad de la trinchera es otra. Sabía que un diseño, por más documentado que esté, no es más que una promesa hasta que se convierte en código funcional. A principios de 2022, cuando la plataforma entró en fase de construcción, entendí que mi rol debía mutar: de arquitecto de interfaces a guardián de la intención.

El riesgo era latente y conocido por cualquiera que haya operado a este nivel: la degradación del diseño. Sin un acompañamiento constante, las sutilezas de la interacción, la jerarquía visual y los criterios de accesibilidad suelen sacrificarse en el altar de la velocidad técnica o de limitaciones imprevistas en la API. Mi decisión estratégica fue no retirarme a la retaguardia, sino integrarme en el flujo de construcción como un socio facilitador. El diseño no es un artefacto estático que se entrega; es un organismo vivo que debe sobrevivir al proceso de implementación, y yo era el único responsable de que esa visión no se diluyera en el camino a producción.

#### Inmersión en el Sprint Planning y la anticipación de fricciones

Para blindar la calidad, me integré plenamente en las ceremonias ágiles del equipo de desarrollo. No asistía a las reuniones de planificación de Sprint (Sprint Planning) como un espectador, sino como un sensor proactivo. Mi objetivo en estas sesiones, que realizábamos cada dos semanas, era identificar qué funcionalidades se abordarían y anticipar dónde el código podría chocar con la experiencia del usuario.

Un ejemplo crítico fue el desarrollo del buscador de médicos. Durante la planificación, no esperé a que los desarrolladores encontraran problemas; presenté proactivamente la lógica detrás de los filtros y el comportamiento de las tarjetas de resultados.

*   **Lógica de filtros:** Detallé cómo debían comportarse los selectores de especialidad y hospital en tiempo real, evitando que el usuario llegara a callejones sin salida.
*   **Estados de carga:** Definí los *shimmers* y estados de espera para asegurar que la percepción de velocidad fuera óptima, incluso con latencias en la base de datos.
*   **Escenarios de "Sin Resultados":** Esta es la parte que el desarrollo suele ignorar. Establecí criterios claros sobre qué mostrar cuando una búsqueda fallaba, proponiendo alternativas de contacto o sugerencias de especialidades similares para mantener al paciente dentro del flujo.

Esta anticipación ahorró semanas de retrabajo. Al explicar el "por qué" de cada microinteracción antes de que se escribiera la primera línea de código, despejé el camino para que la implementación fuera fluida y sin suposiciones peligrosas.

#### Refinamiento de Historias de Usuario con lente de diseño

Mi colaboración con el Product Owner del Centro Médico ABC fue quirúrgica. Me dediqué a revisar y refinar las Historias de Usuario (User Stories) para asegurar que los criterios de aceptación no fueran puramente técnicos. Una historia que dice "El usuario puede agendar una cita" es insuficiente si no contempla la experiencia humana.

Articulé criterios de aceptación que incluían:
1.  **Validación de microcopy:** Que los mensajes de error fueran humanos y orientadores, no códigos crípticos del servidor.
2.  **Fidelidad de interacción:** Que el comportamiento de los modales y transiciones coincidiera exactamente con el prototipo validado.
3.  **Accesibilidad intrínseca:** Que la navegación por teclado y los lectores de pantalla fueran considerados desde la definición de la tarea, no como un parche posterior.

> **Insight de Seniority:** La verdadera calidad de un producto digital se define en el "Definition of Done" (DoD). Si la usabilidad no es parte de lo que el equipo considera "terminado", el diseño siempre será una deuda técnica acumulada. Al elevar estos estándares en Jira, logré que la excelencia visual fuera un requisito no negociable del desarrollo.

#### Arquitectura de comunicación de respuesta inmediata

En un proyecto de la envergadura del Centro Médico ABC, el tiempo es el recurso más caro. Para evitar bloqueos, establecí un ecosistema de comunicación de respuesta rápida. Implementé un canal dedicado en Slack exclusivamente para consultas de diseño-desarrollo. Mi regla de oro era simple: ninguna duda técnica sobre la interfaz debía esperar más de 30 minutos por una respuesta.

A menudo, las especificaciones en herramientas como Zeplin o el modo "Inspect" de Figma dejan huecos interpretativos. Un desarrollador podía tener dudas sobre cómo debía reaccionar un botón ante un clic rápido o cómo se adaptaba un contenedor si el nombre del médico era inusualmente largo. Al estar presente y disponible, eliminé la fricción de la incertidumbre. No enviaba correos; enviaba capturas de pantalla anotadas, grabaciones cortas de Loom o incluso hacía una llamada rápida de cinco minutos para resolver el punto. Esta disponibilidad constante transformó la percepción del equipo de ingeniería hacia el diseño: pasé de ser quien ponía "trabas estéticas" a ser el facilitador que les ayudaba a entregar código de mayor calidad en menos tiempo.

#### El dilema del Mega Menú: Maniobrando entre restricciones técnicas

Uno de los momentos de mayor tensión ocurrió durante la implementación del "Mega Menú" de Servicios Médicos. El diseño original era ambicioso y visualmente impactante, con múltiples niveles de navegación y previsualizaciones de contenido. Sin embargo, al llegar a la fase de construcción, el equipo de frontend identificó limitaciones significativas en la estructura de la base de datos y en el rendimiento de la tecnología específica que se estaba utilizando.

Frente a este muro, tuve que tomar una decisión de diseño ágil. Podía insistir en la visión original y retrasar el lanzamiento, o podía pivotar hacia una solución que preservara la usabilidad sin comprometer la estabilidad del sistema.

1.  **Diagnóstico:** Escuché la limitación técnica: la recursividad de las categorías en el backend hacía que la carga del menú fuera lenta y propensa a errores.
2.  **Propuesta de compromiso:** En lugar del menú multinivel altamente animado, propuse una simplificación estructural. Mantuvimos la jerarquía visual pero redujimos la profundidad de las animaciones a fundidos más ligeros y una organización de columnas más estática pero robusta.
3.  **Validación rápida:** Ajusté el mockup en Figma en menos de dos horas, validé el cambio con el Product Owner y se lo entregué al equipo de desarrollo.

El resultado fue un menú que, aunque menos "experimental" en su movimiento, era 100% funcional, accesible y, sobre todo, realizable dentro de los plazos del proyecto. Esta es la esencia del diseño senior: saber cuándo ceder en la forma para salvar la función y el cronograma.

#### Evaluación de impacto y trazabilidad de decisiones

Cada vez que surgía una limitación técnica imprevista, mi proceso mental seguía una jerarquía estricta: ¿Cómo afecta esto al paciente? Si una modificación en la API obligaba a cambiar la forma en que se mostraban los resultados de laboratorio, yo evaluaba si esa nueva visualización mantenía la claridad necesaria para un usuario que podría estar bajo estrés.

No dejé ninguna decisión al azar ni a la memoria. Documenté cada ajuste y cada desviación del diseño original. Utilicé la propia Guía de Handoff en Google Docs y los tickets de Jira para registrar el "por qué" de cada cambio. Esta labor forense fue vital por dos razones:
*   **Coherencia futura:** Si en seis meses alguien se preguntaba por qué un componente no se veía como en el primer concepto, la respuesta estaba documentada.
*   **Blindaje estratégico:** Aseguraba que los cambios técnicos no fueran decisiones arbitrarias de un desarrollador, sino ajustes de diseño validados por mí y alineados con los objetivos del Centro Médico ABC.

#### Iteración en caliente: Figma como tablero de control

Durante estos meses de soporte, Figma dejó de ser una herramienta de dibujo para convertirse en un tablero de prototipado rápido en tiempo real. Si un componente fallaba en el entorno de Staging (el entorno de pruebas), yo no me limitaba a señalar el error. Abría el archivo, ajustaba los valores de espaciado o las proporciones del componente para que se adaptaran a la realidad del código y compartía el enlace actualizado al instante.

Esta agilidad permitió que el diseño evolucionara a la par de la construcción. En lugar de pelear contra la realidad técnica, la usé como un marco de trabajo. Si una API nos devolvía datos que no habíamos previsto en la fase de diseño (como descripciones médicas extremadamente cortas o imágenes en formatos inesperados), yo rediseñaba el contenedor "en caliente" para que la interfaz se viera pulida sin importar el contenido.

Al final de este proceso de colaboración continua, logré algo que rara vez ocurre en proyectos de esta escala: un respeto mutuo absoluto con el equipo de ingeniería. Al actuar como un socio y no como un policía, el equipo se sintió empoderado para alcanzar la excelencia. El producto que empezó a tomar forma en los servidores de Staging no era una versión diluida de mis diseños; era una versión robusta, probada y técnicamente viable que respiraba la calidad institucional del Centro Médico ABC.


A pesar de la fluidez en la comunicación y la resolución de dudas en tiempo real, sabía que el verdadero veredicto llegaría al enfrentarme a la implementación final en el navegador. Una cosa es que el código funcione y otra muy distinta es que los píxeles se comporten con la precisión que el sistema de salud requiere. Estaba a punto de iniciar las sesiones de Design QA, donde cada desviación milimétrica y cada inconsistencia en el Design System tendrían que ser detectadas y corregidas antes de que el primer paciente tuviera acceso a la plataforma.

---

### Parte 2: El Guardián del Píxel Design Qa y Resolución de Bugs

#### La transición del lienzo a la realidad del código

En cuanto recibí las primeras URL del entorno de Staging, supe que mi rol estaba a punto de cambiar drásticamente. Habíamos pasado meses en Figma construyendo un ecosistema visual impecable, pero el diseño no es una sugerencia estética; es un contrato de experiencia de usuario que debe cumplirse en cada línea de código. Al abrir el navegador para la primera revisión, sentí esa tensión característica: la perfección estática de los mockups chocaba frontalmente con las limitaciones de la implementación inicial. Sabía que, si no actuaba como un filtro de calidad infranqueable en ese momento, la excelencia institucional del Centro Médico ABC se diluiría antes de llegar al paciente.

Mi razonamiento fue pragmático: una plataforma de salud no puede permitirse inconsistencias. Si un botón de "Agendar Cita" tiene un color ligeramente distinto o si un menú colapsa de forma errática, el usuario no ve un error de código, ve una falta de cuidado profesional. Para garantizar que la visión se tradujera fielmente, decidí pasar de la planificación al escrutinio forense. No buscaba que el sitio se "pareciera" a mis diseños; buscaba una coincidencia binaria. Entré en el entorno de pruebas con una mentalidad de auditor, entendiendo que cada píxel fuera de lugar era una pequeña grieta en la confianza que el paciente deposita en la institución.

#### El ritual de la revisión pixel-a-pixel

Establecí un flujo de trabajo sistemático para lo que denominé mis sesiones de Design QA. Mi configuración era invariable: en el monitor de la izquierda, los mockups de alta fidelidad en Figma; en el de la derecha, el navegador apuntando a Staging. Realicé una comparación meticulosa de cada pantalla y flujo crítico, navegando de forma manual por cada rincón de la interfaz. Esta no era una revisión superficial; era una auditoría de fidelidad donde cada elemento debía justificar su existencia y su posición.

Para cada componente, apliqué un checklist riguroso que no dejaba nada al azar:
*   **Fidelidad Visual:** Verifiqué que los códigos hexadecimales fueran exactos, que los pesos tipográficos (font-weight) respetaran la jerarquía definida y que los espaciados (paddings y margins) no variaran ni un solo píxel de lo especificado.
*   **Fidelidad de Interacción:** No me detuve en lo estático. Probé cada estado de hover, cada transición de modal y el comportamiento de los menús desplegables. Si una animación de entrada era demasiado abrupta o si un dropdown no tenía el área de clic (hit area) adecuada, lo marcaba como un fallo de contrato.
*   **Responsividad:** Redimensioné el navegador de forma obsesiva para verificar los breakpoints. Me aseguré de que las tarjetas de médicos se apilaran correctamente en móvil y que el texto no se desbordara en pantallas intermedias, ajustando las reglas de flexbox y grid donde la implementación fallaba.

#### Abriendo el capó: Auditoría técnica con DevTools

Pronto entendí que mirar la pantalla no era suficiente. Para ser un verdadero guardián del diseño, tenía que "abrir el capó" de la plataforma. Utilicé las Herramientas de Inspección del Navegador (Chrome DevTools) de forma constante para contrastar el CSS implementado contra el modo "Inspect" de Figma. No me bastaba con ver que un título era azul; necesitaba confirmar que el código reflejaba el valor HEX exacto y que el `line-height` permitía la legibilidad que habíamos validado en las pruebas de usabilidad.

Esta fase fue una batalla contra la aproximación. Encontré discrepancias donde los desarrolladores habían usado valores genéricos de espaciado en lugar de seguir los tokens de nuestro Design System. Al inspeccionar el código, pude identificar exactamente qué propiedad estaba causando el error, ya fuera un margen mal heredado o una fuente que no estaba cargando el peso correcto. Esta precisión técnica me permitió hablar el mismo lenguaje que el equipo de ingeniería: no les pedía "que se viera mejor", les daba la propiedad CSS exacta que debían corregir. Fue un ejercicio de rigor que eliminó la subjetividad del proceso y aceleró las correcciones.

#### La gestión forense de bugs en JIRA

Cada discrepancia encontrada se transformó en un ticket de QA en JIRA, pero no en tickets genéricos. Como responsable de la integridad visual, diseñé cada reporte para que fuera una pieza de evidencia irrefutable. Mi objetivo era eliminar cualquier sombra de duda para el desarrollador, facilitando su trabajo y asegurando que la corrección fuera definitiva al primer intento.

Cada ticket de "bug de diseño" que redacté incluía:
1.  **Descripción detallada:** Una explicación clara de la desviación (ej. "El botón secundario en el perfil del médico no cambia de color en estado hover").
2.  **Evidencia visual:** Capturas de pantalla anotadas con herramientas de marcado y, en casos de interacciones complejas, grabaciones de video cortas a través de Loom para mostrar el comportamiento errático.
3.  **Referencia a la fuente de verdad:** Un enlace directo al frame o componente específico en Figma, junto con las especificaciones técnicas exactas (colores HEX, valores de espaciado en píxeles, nombres de fuentes).
4.  **Pasos para reproducir:** Una guía simple para que el desarrollador pudiera ver el error en su propio entorno de Staging.

Este nivel de detalle no era burocracia; era eficiencia. Al proporcionar toda la información necesaria de antemano, reduje drásticamente las idas y vueltas innecesarias y permití que el equipo de desarrollo se enfocara en la resolución técnica del problema.

#### Priorización estratégica y severidad

Consciente de que los plazos de lanzamiento eran inamovibles, implementé una jerarquía de severidad para cada hallazgo. No todos los errores tienen el mismo peso en la experiencia del paciente, y mi labor era ayudar al equipo a priorizar el esfuerzo sin comprometer la calidad final. Clasifiqué los bugs en cuatro categorías claras:
*   **Crítico:** Errores que rompían un flujo principal o impedían una acción clave, como un botón de "Agendar Cita" que no respondía o un buscador que no mostraba resultados por un error de UI.
*   **Mayor:** Discrepancias que afectaban seriamente la usabilidad o la percepción de marca, como problemas de responsividad graves en dispositivos móviles.
*   **Menor:** Desviaciones visuales que, aunque no impedían el uso, degradaban la calidad del producto, como iconos pixelados o tipografías con pesos incorrectos.
*   **Cosmético:** Pequeños ajustes de pulcritud, como un margen de 2px de diferencia en una sección secundaria.

Esta categorización fue vital durante las reuniones de planificación de sprint. Me permitió defender la resolución inmediata de los problemas críticos mientras negociaba los ajustes cosméticos para fases posteriores del desarrollo, asegurando que el núcleo de la experiencia estuviera blindado antes del lanzamiento.

#### El ciclo de verificación y el pulido final

La resolución de un bug no terminaba cuando el desarrollador movía el ticket a "Ready for Review". Mi proceso era estrictamente iterativo: volvía al entorno de Staging para realizar una nueva revisión de QA específica para esa corrección. Verificaba no solo que el problema original hubiera desaparecido, sino que la solución no hubiera introducido nuevos errores colaterales en la interfaz.

En este proceso de pulido final, tomé decisiones técnicas clave para elevar la calidad de los assets:
> Decidí sustituir todos los iconos que presentaban problemas de resolución por archivos **SVG** nativos, garantizando nitidez absoluta en cualquier densidad de pantalla. Asimismo, trabajé con el equipo para implementar imágenes en formato **WebP** optimizado, reduciendo los tiempos de carga sin sacrificar la fidelidad visual que el Centro Médico ABC requería.

Un ejemplo real de este rigor fue el ajuste de la página de perfil de los médicos. Verifiqué meticulosamente que la foto, las especialidades y el botón de acción estuvieran alineados con una precisión quirúrgica. Solo cuando un flujo o componente pasaba todas mis pruebas y se alineaba al 100% con la visión de diseño, lo marcaba como "Aprobado por Diseño". Ver cómo la plataforma alcanzaba ese estado de madurez visual, transformándose de un prototipo de Figma a un producto robusto y funcional, fue la validación definitiva de que el esfuerzo de soporte continuo había valido la pena.


A pesar de haber logrado una fidelidad visual casi absoluta, al navegar por la plataforma con las herramientas de inspección, me asaltó una duda inquietante sobre lo que no se ve a simple vista. ¿Qué sucede con aquellos pacientes que no interactúan con el sitio a través de un cursor o que dependen de lectores de pantalla para gestionar su salud? El rigor de los píxeles era solo la mitad de la batalla; ahora debía enfrentar el desafío de auditar la estructura invisible de la web bajo los estándares WCAG 2.1 AA, donde una etiqueta mal puesta puede ser una barrera infranqueable para la inclusión.

---

### Parte 3: Inclusión por Diseño Auditoría de Accesibilidad Wcag 2.1 Aa

#### La estructura invisible detrás de los píxeles

Al navegar por el entorno de *staging* con las herramientas de inspección activas, me asaltó una duda inquietante que la perfección visual de los mockups no podía resolver. Habíamos logrado una fidelidad estética absoluta, pero sabía que un sitio de salud es, ante todo, un servicio esencial. Si un paciente con discapacidad motriz no podía tabular hasta el botón de "Agendar Cita", o si una persona con baja visión no lograba distinguir las instrucciones de preparación para un estudio debido a un contraste pobre, mi diseño habría fracasado en su propósito más fundamental. La excelencia médica del Centro Médico ABC debía ser inclusiva por definición; de nada servía tener la mejor interfaz si esta era un laberinto silencioso para quienes dependen de tecnologías asistivas.

Por ello, decidí que la validación final no terminaría en el Design QA visual. Me propuse ejecutar una auditoría forense de la estructura semántica del sitio, pasando de la inspección ocular al análisis técnico del código bajo el estándar **WCAG 2.1 Nivel AA**. Mi razonamiento fue claro: la accesibilidad no es una característica que se añade al final, sino una capa de calidad que garantiza que el producto sea operable para todos. Establecí como prioridad los flujos que realmente impactan la vida del paciente: el buscador de médicos, el proceso de agendamiento de citas y la sección de consejos de salud. Sabía que cada etiqueta mal puesta o cada atributo ARIA omitido representaba una barrera real entre el paciente y su atención médica.

#### El diagnóstico automatizado: identificando la "fruta madura"

Inicié la auditoría utilizando un enfoque híbrido, comenzando con herramientas automatizadas para despejar los errores más evidentes de la superficie. Ejecuté **WAVE**, **axe DevTools** y las auditorías de **Lighthouse** directamente sobre el navegador en el entorno de pruebas. Estas herramientas actuaron como mi primer nivel de diagnóstico, permitiéndome identificar rápidamente lo que yo llamo "fruta madura": errores técnicos que, aunque fáciles de corregir, destruyen la experiencia de navegación asistida.

Durante este proceso, identifiqué varios hallazgos recurrentes que documenté meticulosamente:

*   **Ratios de contraste insuficientes:** Descubrí que algunos textos secundarios en gris claro sobre fondo blanco no alcanzaban el ratio de **4.5:1** exigido por el criterio 1.4.3 de la WCAG. Aunque se veían "elegantes", eran ilegibles para usuarios con fatiga visual o daltónicos.
*   **Ausencia de atributos `alt`:** Varias imágenes informativas, como las fotos de los médicos y banners de servicios, carecían de texto alternativo descriptivo. Un lector de pantalla simplemente anunciaría "imagen", privando al usuario de contexto vital sobre quién es el especialista que está consultando.
*   **Estructura semántica rota:** Detecté que la jerarquía de encabezados (H1, H2, H3) no siempre seguía un orden lógico. Esto es crítico porque los usuarios de lectores de pantalla suelen navegar saltando de encabezado en encabezado para entender la arquitectura de la página.

Esta fase automatizada me permitió limpiar el ruido inicial y preparar el terreno para las pruebas que realmente requieren criterio humano: la navegación manual y el uso de tecnologías asistivas.

#### El rigor de la navegación sin ratón

La verdadera prueba de fuego comenzó cuando decidí abandonar el ratón. Operar la plataforma exclusivamente con el teclado (**Tab**, **Shift+Tab**, **Enter** y **Espacio**) es el ejercicio de empatía más crudo que puede hacer un diseñador. Fue aquí donde encontré uno de los problemas más críticos de la implementación: el **calendario de agendamiento**.

Al intentar seleccionar una fecha para una cita de laboratorio, descubrí que el orden del foco era errático. Presionaba "Tab" y el foco visual desaparecía de la pantalla o saltaba de la cabecera directamente al pie de página, ignorando por completo el selector de días. Esto representaba una "trampa de teclado" (keyboard trap) inaceptable; un paciente con discapacidad motriz quedaría bloqueado en este paso, incapaz de completar su trámite. 

> **Decisión Senior:** Prioricé este hallazgo como "Bloqueante". No se trataba de un ajuste estético, sino de una funcionalidad core que era inoperable. Trabajé con el equipo de desarrollo para asegurar que el indicador de foco visual (el *outline*) fuera siempre visible y tuviera un contraste marcado, garantizando que el usuario siempre supiera dónde estaba posicionado dentro de la interfaz.

#### Escuchar la interfaz: la experiencia con lectores de pantalla

Para completar la auditoría, activé **NVDA en Windows** y **VoiceOver en macOS**. Cerré los ojos y me dispuse a "escuchar" la plataforma. Navegar por el perfil de un médico solo a través del audio me reveló inconsistencias que el ojo ignora. Por ejemplo, si un botón de "Agendar Cita" no tiene una etiqueta clara, el lector de pantalla puede anunciar simplemente "Botón, enlace", lo cual no comunica ninguna acción al usuario.

Verifiqué la implementación de atributos **ARIA** (*Accessible Rich Internet Applications*). Era vital que, al ocurrir un error en un formulario de contacto, el lector de pantalla utilizara `aria-live="assertive"` para anunciar el problema inmediatamente, en lugar de obligar al usuario a buscar el mensaje de error por toda la página. También puse especial atención en que las etiquetas `<label>` estuvieran vinculadas programáticamente a sus campos de entrada `<input>` mediante los atributos `id` y `for`. Sin esta conexión técnica, un lector de pantalla no puede decirle al usuario qué información debe ingresar en un campo específico, convirtiendo un simple formulario de registro en un laberinto insuperable.

#### De la auditoría al ticket: remediación y colaboración técnica

Una vez concluida la inspección, no me limité a entregar un informe estático. Transformé cada hallazgo del **Informe de Pruebas de Accesibilidad** en tickets accionables dentro de **Jira**, categorizándolos por severidad según el impacto en la usabilidad. No quería ser el "policía de la accesibilidad", sino un facilitador técnico para los desarrolladores.

Me senté con el equipo de *frontend* para discutir las soluciones. En lugar de solo señalar el error de contraste, propuse ajustes específicos en la paleta de colores del **Design System**, elevando los tonos grises un par de puntos para cumplir con el estándar sin sacrificar la estética institucional. Para el problema de las imágenes, definimos una política de contenido: todas las fotos de médicos debían llevar un `alt` descriptivo (ej. "Fotografía del Dr. González, especialista en Cardiología") y las imágenes puramente decorativas debían marcarse explícitamente como vacías (`alt=""`) para que los lectores de pantalla las ignoraran con elegancia.

> El valor real de este esfuerzo no fue solo cumplir con una norma internacional, sino blindar la experiencia. La accesibilidad, bien ejecutada, mejora la usabilidad para todos: un buen contraste ayuda al paciente que consulta el sitio bajo la luz directa del sol desde su móvil, y una navegación clara por teclado beneficia a los usuarios que prefieren atajos rápidos. Mi rol fue asegurar que la excelencia del Centro Médico ABC no dejara a nadie atrás.

***


Tras asegurar que la plataforma era técnicamente accesible y visualmente impecable, me enfrenté a un desafío de una naturaleza distinta: el factor humano y de negocio. El sitio ya funcionaba bajo mis estándares y los de desarrollo, pero ¿resistiría el escrutinio de los *stakeholders* institucionales y los flujos de trabajo reales del hospital? El momento de la verdad llegó con las Pruebas de Aceptación de Usuario (UAT), donde cada decisión de diseño que tomé durante meses sería puesta a prueba frente a la operación real del Centro Médico ABC. Sabía que allí, en esa sala de validación, se decidiría si el proyecto estaba realmente listo para salir al mundo.

---

### Parte 4: El Momento de la Verdad Participación en Pruebas de Aceptación Uat

#### La prueba de fuego en el entorno de staging

Tras semanas de asegurar que cada componente fuera accesible y que el sistema visual no tuviera fisuras, me enfrenté a una realidad ineludible: el diseño no termina en Figma, sino que debe sobrevivir al impacto con la operación real del hospital. Podíamos tener los píxeles más perfectos y el código más limpio, pero si un paciente en una situación de estrés no lograba agendar una cita, el proyecto habría fracasado. Por eso, a mediados de 2022, cuando la plataforma ya vivía en un entorno de *staging* estable, me sumergí en las Pruebas de Aceptación de Usuario (UAT). Mi razonamiento era simple: necesitaba validar si la excelencia institucional del Centro Médico ABC se traducía en una herramienta intuitiva para personas reales o si nos habíamos quedado atrapados en nuestra propia burbuja de diseño.

#### Inyectando realidad: Escenarios basados en Elena y Carlos

Mi primera maniobra senior fue intervenir en la definición de los escenarios de prueba. La tendencia natural de los equipos de QA y de los Product Owners es validar funciones: "¿El botón de búsqueda funciona? Sí. ¿El filtro de seguros carga? Sí". Como diseñador, mi labor fue desplazar ese enfoque hacia el comportamiento humano. Me senté con el equipo de QA y el PO para reescribir los casos de prueba basándome en mis Personas, **Elena y Carlos**.

No quería pruebas estériles. Exigí que los escenarios reflejaran la fricción de la vida real. Por ejemplo, diseñé un caso específico para Elena: "Intentar agendar una cita con su cardiólogo de cabecera y descubrir que no hay disponibilidad en su campus preferido (Santa Fe)". Mi objetivo no era solo ver si el sistema mostraba un mensaje de error, sino observar cómo reaccionaba el usuario ante la falta de disponibilidad. ¿Era capaz de encontrar una alternativa en el Campus Observatorio? ¿El microcopy le ofrecía una solución o lo dejaba en un callejón sin salida? Redacté los pasos de estos escenarios de forma que fueran comprensibles para usuarios finales no técnicos, eliminando cualquier jerga de sistemas para que el participante se concentrara en su objetivo médico, no en la interfaz.

#### La mosca en la pared: Observación y captura de insights cualitativos

Durante las sesiones de UAT, que realizamos de forma remota a través de Google Meet y Zoom para observar la interacción en tiempo real, adopté la postura de "mosca en la pared". Mi rol no era moderar —esa tarea recaía en el PO o el líder de QA— sino observar las micro-vacilaciones que el software de métricas nunca detectaría. Utilicé una plantilla de observación estructurada en Notion que diseñé específicamente para capturar:
*   **Comportamientos no verbales:** Dudas en el cursor, regresos rápidos a la pantalla anterior o pausas largas antes de un clic.
*   **Comentarios textuales espontáneos:** Frases como "esto no es lo que esperaba" o "¿dónde hago clic ahora?".
*   **Puntos de dolor observados:** Momentos donde la navegación dejaba de ser intuitiva.
*   **Diferencia entre éxito funcional y éxito de experiencia:** Una tarea puede terminarse (éxito funcional), pero si el usuario termina frustrado, es un fracaso de diseño.

Monitoreé estas sesiones con una intervención mínima, interviniendo solo cuando el moderador me pedía clarificar la intención del diseño original. Fue un ejercicio de disciplina; ver a un usuario real confundirse con algo que tú diseñaste es incómodo, pero es el único camino hacia un producto pulido.

#### El hallazgo crítico en el buscador de médicos

El momento de mayor tensión ocurrió durante las pruebas con la Persona de **Carlos**. Observé a un participante intentar filtrar especialistas en Dermatología que aceptaran su seguro médico específico en el Campus Santa Fe. Técnicamente, el buscador funcionaba: los filtros se aplicaban y la base de datos respondía en milisegundos. Sin embargo, el usuario expresó una confusión evidente al intentar combinar los filtros. El diseño visual de los estados de "seleccionado" no era lo suficientemente contrastado en el entorno de producción para su pantalla, lo que le hacía dudar de si el filtro de seguro realmente estaba activo.

Este hallazgo fue vital. Nos reveló que, en el contexto de uso real y bajo ciertas condiciones de hardware de los pacientes, nuestra sutileza visual estaba jugando en nuestra contra. Documenté detalladamente esta fricción, no como un error de código, sino como un fallo en la claridad del microcopy y la retroalimentación visual. Si no hubiéramos realizado esta UAT, habríamos lanzado un buscador potente pero confuso, degradando la confianza del paciente desde el primer día.

#### Triaje forense: Diferenciando Bugs de UX Issues

Tras cada bloque de sesiones, lideré el proceso de *debriefing* para sintetizar los hallazgos. Aquí es donde mi criterio senior fue más necesario: tuve que ayudar al equipo a realizar una diferenciación forense entre un **bug funcional** y un **UX issue**. 
*   Si un botón no ejecutaba la acción al presionarlo, era un bug de código para desarrollo. 
*   Si el usuario no encontraba el botón porque el color se perdía con el fondo, era un problema de usabilidad para diseño.

Agrupé los hallazgos para identificar patrones recurrentes. Descubrí, por ejemplo, que varios usuarios tenían dificultades para localizar el acceso a "**Mi Portal Paciente ABC**" desde la homepage. Aunque el enlace estaba ahí y funcionaba perfectamente, la jerarquía visual no le daba la relevancia que los pacientes esperaban de una herramienta transaccional. Esta distinción fue crucial para determinar el tipo de solución necesaria y qué equipo debía ejecutarla, evitando que los problemas de experiencia se perdieran en el mar de tickets técnicos de Jira.

#### Defendiendo la experiencia en la mesa de priorización

La verdadera batalla se libró en las reuniones de revisión de *issues* pre-lanzamiento. Con el *deadline* encima, la presión para ignorar los "temas estéticos" era alta. Sin embargo, me posicioné como el defensor del usuario. Argumenté con evidencia en mano —notas de las sesiones y grabaciones de pantalla— que problemas como la visibilidad del portal del paciente no eran caprichos de diseño, sino bloqueadores de negocio. 

> "Si un paciente no encuentra dónde ver sus resultados, la plataforma no está cumpliendo su propósito principal, por mucho que el código pase todas las pruebas de QA", defendí ante el equipo. 

Gracias a esta postura, logramos priorizar ajustes críticos de último minuto. Propuse soluciones rápidas de diseño que no comprometieran el cronograma: ajustamos el etiquetado de los filtros para que fuera más descriptivo y movimos el acceso al portal del paciente a una posición de mayor contraste en la cabecera. No fueron cambios estructurales, sino respuestas quirúrgicas a la evidencia recolectada en la UAT.

#### La red de seguridad final

Mi participación en las UAT me reafirmó que esta fase es la red de seguridad definitiva del Product Designer. Como facilitador y solucionador de problemas, mi rol fue asegurar que la visión original no se diluyera en la fase de construcción. Al final del proceso, el equipo no solo tenía un producto que "pasaba los tests", sino una plataforma que sabíamos, con certeza empírica, que funcionaba para Elena, para Carlos y para los miles de pacientes del Centro Médico ABC. Esta actividad cerró el ciclo de validación, dándonos la confianza necesaria para apretar el botón de lanzamiento, sabiendo que el producto final era una representación fiel y de alta calidad de todo lo que habíamos diseñado.

***

A pesar de que el producto ya era una realidad tangible y validada, me di cuenta de que el conocimiento acumulado durante meses corría el riesgo de evaporarse si no lo blindaba. La implementación final había forzado cientos de micro-decisiones y ajustes que no estaban en los archivos originales de Figma. Sentí la urgencia de construir un legado que sobreviviera a mi salida del proyecto: una documentación 'As-Built' que no solo fuera un manual técnico, sino el testamento de por qué cada píxel del Centro Médico ABC estaba donde estaba. Tenía que asegurar que, cuando el primer paciente real entrara a la URL final, el equipo de mantenimiento supiera exactamente cómo cuidar la integridad de lo que habíamos construido.#### La prueba de fuego en el entorno de staging

Tras asegurar que la plataforma era técnicamente accesible y visualmente impecable, me enfrenté a una realidad ineludible: el diseño no termina en Figma, sino que debe sobrevivir al impacto con la operación real del hospital. Podíamos tener los píxeles más perfectos y el código más limpio, pero si un paciente en una situación de estrés no lograba agendar una cita, el proyecto habría fracasado. Por eso, a mediados de 2022, cuando la plataforma ya vivía en un entorno de *staging* estable, me sumergí en las Pruebas de Aceptación de Usuario (UAT). Mi razonamiento era simple: necesitaba validar si la excelencia institucional del Centro Médico ABC se traducía en una herramienta intuitiva para personas reales o si nos habíamos quedado atrapados en nuestra propia burbuja de diseño.

#### Inyectando realidad: Escenarios basados en Elena y Carlos

Mi primera maniobra senior fue intervenir en la definición de los escenarios de prueba. La tendencia natural de los equipos de QA y de los Product Owners es validar funciones: "¿El botón de búsqueda funciona? Sí. ¿El filtro de seguros carga? Sí". Como diseñador, mi labor fue desplazar ese enfoque hacia el comportamiento humano. Me senté con el equipo de QA y el PO para reescribir los casos de prueba basándome en mis Personas, **Elena y Carlos**.

No quería pruebas estériles. Exigí que los escenarios reflejaran la fricción de la vida real. Por ejemplo, diseñé un caso específico para Elena: "Intentar agendar una cita con su cardiólogo de cabecera y descubrir que no hay disponibilidad en su campus preferido (Santa Fe)". Mi objetivo no era solo ver si el sistema mostraba un mensaje de error, sino observar cómo reaccionaba el usuario ante la falta de disponibilidad. ¿Era capaz de encontrar una alternativa en el Campus Observatorio? ¿El microcopy le ofrecía una solución o lo dejaba en un callejón sin salida? Redacté los pasos de estos escenarios de forma que fueran comprensibles para usuarios finales no técnicos, eliminando cualquier jerga de sistemas para que el participante se concentrara en su objetivo médico, no en la interfaz.

#### La mosca en la pared: Observación y captura de insights cualitativos

Durante las sesiones de UAT, que realizamos de forma remota a través de Google Meet y Zoom para observar la interacción en tiempo real, adopté la postura de "mosca en la pared". Mi rol no era moderar —esa tarea recaía en el PO o el líder de QA— sino observar las micro-vacilaciones que el software de métricas nunca detectaría. Utilicé una plantilla de observación estructurada en Notion que diseñé específicamente para capturar:
*   **Comportamientos no verbales:** Dudas en el cursor, regresos rápidos a la pantalla anterior o pausas largas antes de un clic.
*   **Comentarios textuales espontáneos:** Frases como "esto no es lo que esperaba" o "¿dónde hago clic ahora?".
*   **Puntos de dolor observados:** Momentos donde la navegación dejaba de ser intuitiva.
*   **Diferencia entre éxito funcional y éxito de experiencia:** Una tarea puede terminarse (éxito funcional), pero si el usuario termina frustrado, es un fracaso de diseño.

Monitoreé estas sesiones con una intervención mínima, interviniendo solo cuando el moderador me pedía clarificar la intención del diseño original. Fue un ejercicio de disciplina; ver a un usuario real confundirse con algo que tú diseñaste es incómodo, pero es el único camino hacia un producto pulido.

#### El hallazgo crítico en el buscador de médicos

El momento de mayor tensión ocurrió durante las pruebas con la Persona de **Carlos**. Observé a un participante intentar filtrar especialistas en Dermatología que aceptaran su seguro médico específico en el Campus Santa Fe. Técnicamente, el buscador funcionaba: los filtros se aplicaban y la base de datos respondía en milisegundos. Sin embargo, el usuario expresó una confusión evidente al intentar combinar los filtros. El diseño visual de los estados de "seleccionado" no era lo suficientemente contrastado en el entorno de producción para su pantalla, lo que le hacía dudar de si el filtro de seguro realmente estaba activo.

Este hallazgo fue vital. Nos reveló que, en el contexto de uso real y bajo ciertas condiciones de hardware de los pacientes, nuestra sutileza visual estaba jugando en nuestra contra. Documenté detalladamente esta fricción, no como un error de código, sino como un fallo en la claridad del microcopy y la retroalimentación visual. Si no hubiéramos realizado esta UAT, habríamos lanzado un buscador potente pero confuso, degradando la confianza del paciente desde el primer día.

#### Triaje forense: Diferenciando Bugs de UX Issues

Tras cada bloque de sesiones, lideré el proceso de *debriefing* para sintetizar los hallazgos. Aquí es donde mi criterio senior fue más necesario: tuve que ayudar al equipo a realizar una diferenciación forense entre un **bug funcional** y un **UX issue**. 
*   Si un botón no ejecutaba la acción al presionarlo, era un bug de código para desarrollo. 
*   Si el usuario no encontraba el botón porque el color se perdía con el fondo, era un problema de usabilidad para diseño.

Agrupé los hallazgos para identificar patrones recurrentes. Descubrí, por ejemplo, que varios usuarios tenían dificultades para localizar el acceso a "**Mi Portal Paciente ABC**" desde la homepage. Aunque el enlace estaba ahí y funcionaba perfectamente, la jerarquía visual no le daba la relevancia que los pacientes esperaban de una herramienta transaccional. Esta distinción fue crucial para determinar el tipo de solución necesaria y qué equipo debía ejecutarla, evitando que los problemas de experiencia se perdieran en el mar de tickets técnicos de Jira.

#### Defendiendo la experiencia en la mesa de priorización

La verdadera batalla se libró en las reuniones de revisión de *issues* pre-lanzamiento. Con el *deadline* encima, la presión para ignorar los "temas estéticos" era alta. Sin embargo, me posicioné como el defensor del usuario. Argumenté con evidencia en mano —notas de las sesiones y grabaciones de pantalla— que problemas como la visibilidad del portal del paciente no eran caprichos de diseño, sino bloqueadores de negocio. 

> "Si un paciente no encuentra dónde ver sus resultados, la plataforma no está cumpliendo su propósito principal, por mucho que el código pase todas las pruebas de QA", defendí ante el equipo. 

Gracias a esta postura, logramos priorizar ajustes críticos de último minuto. Propuse soluciones rápidas de diseño que no comprometieran el cronograma: ajustamos el etiquetado de los filtros para que fuera más descriptivo y movimos el acceso al portal del paciente a una posición de mayor contraste en la cabecera. No fueron cambios estructurales, sino respuestas quirúrgicas a la evidencia recolectada en la UAT.

#### La red de seguridad final

Mi participación en las UAT me reafirmó que esta fase es la red de seguridad definitiva del Product Designer. Como facilitador y solucionador de problemas, mi rol fue asegurar que la visión original no se diluyera en la fase de construcción. Al final del proceso, el equipo no solo tenía un producto que "pasaba los tests", sino una plataforma que sabíamos, con certeza empírica, que funcionaba para Elena, para Carlos y para los miles de pacientes del Centro Médico ABC. Esta actividad cerró el ciclo de validación, dándonos la confianza necesaria para apretar el botón de lanzamiento, sabiendo que el producto final era una representación fiel y de alta calidad de todo lo que habíamos diseñado.

***

A pesar de que el producto ya era una realidad tangible y validada, me di cuenta de que el conocimiento acumulado durante meses corría el riesgo de evaporarse si no lo blindaba. La implementación final había forzado cientos de micro-decisiones y ajustes que no estaban en los archivos originales de Figma. Sentí la urgencia de construir un legado que sobreviviera a mi salida del proyecto: una documentación 'As-Built' que no solo fuera un manual técnico, sino el testamento de por qué cada píxel del Centro Médico ABC estaba donde estaba. Tenía que asegurar que, cuando el primer paciente real entrara a la URL final, el equipo de mantenimiento supiera exactamente cómo cuidar la integridad de lo que habíamos construido.

---

### Parte 5: El Legado Digital Documentación de Diseño Final As-built

#### La batalla contra la entropía documental

La euforia de cerrar las Pruebas de Aceptación de Usuario (UAT) suele venir acompañada de una trampa silenciosa: la falsa sensación de que el trabajo de diseño ha terminado. Mientras el equipo celebraba que los flujos críticos de agendamiento y el buscador de médicos funcionaban sin errores fatales, yo observaba el entorno de Staging con una mezcla de orgullo y ansiedad. Sabía que, tras meses de Sprints, ajustes de último minuto y negociaciones técnicas en la trinchera de desarrollo, mi archivo de Figma ya no era un reflejo fiel de la realidad. Se había convertido en un "diseño idealizado", mientras que el código era la "verdad tangible".

Como responsable de la experiencia, no podía permitir que el proyecto naciera con una deuda documental. La entropía es el enemigo natural de cualquier producto digital; si no fijaba el conocimiento ahora, cualquier iteración futura del Centro Médico ABC sería un ejercicio de adivinación para el siguiente diseñador o desarrollador. Mi razonamiento fue puramente estratégico: necesitaba construir un legado 'As-Built'. Este concepto, tomado de la arquitectura, define los planos que reflejan la obra tal como se construyó, no como se proyectó originalmente. Era el momento de blindar la integridad del producto y asegurar que el Centro Médico ABC tuviera una "Fuente Única de Verdad" que sobreviviera al fragor del lanzamiento.

#### Auditoría forense: Staging frente al espejo de Figma

Inicié el proceso con una **auditoría de diseño post-implementación**, un ejercicio de rigor casi forense. No se trataba de una revisión superficial, sino de una comparación sistemática, píxel por píxel. Configuré mi espacio de trabajo con la plataforma en el entorno de Staging en un monitor y mis mockups originales en el otro. Utilicé las herramientas de inspección del navegador con una frecuencia obsesiva, no para cuestionar el trabajo de ingeniería, sino para diagnosticar desviaciones en la interpretación visual que hubieran pasado desapercibidas durante los Sprints.

Navegué por cada rincón del ecosistema: desde la complejidad de los filtros en el buscador de médicos hasta la sobriedad de las páginas de servicios institucionales. En este paso, mi metodología fue implacable:
*   **Inspección de estilos CSS:** Verifiqué que los *tokens* de color, las escalas tipográficas y, sobre todo, los espaciados (*paddings* y *margins*) se mantuvieran fieles al sistema. Descubrí, por ejemplo, que en la implementación de las tarjetas de resultados de médicos, el espaciado interno había variado ligeramente para acomodar nombres de especialidades inusualmente largos que no aparecieron en nuestras muestras de datos iniciales.
*   **Validación de comportamientos:** No solo miré lo estático. Probé cada microinteracción, cada transición de los modales y el comportamiento de los estados de carga. 
*   **Detección de "bugs de diseño":** Identifiqué discrepancias que no eran errores de código *per se*, sino sutilezas de la experiencia —como un color de borde en un campo de formulario que no cambiaba al recibir el foco— que debían ser corregidas antes del despliegue final o, en su defecto, documentadas con precisión.

#### El ajuste de los mockups 'As-Built' en Figma

Una vez mapeadas las discrepancias, regresé a Figma para realizar una tarea que muchos consideran tediosa, pero que yo considero vital: la actualización de los mockups de alta fidelidad. Mi objetivo era que, si alguien abría el archivo de diseño el día después del lanzamiento, viera exactamente lo que el paciente estaba experimentando en su navegador.

Este proceso de actualización no fue un rediseño, sino un ejercicio de honestidad profesional. Si durante el desarrollo habíamos decidido, por una limitación del framework, que un menú desplegable se comportaría de forma *overlay* en lugar de *push*, el mockup debía mutar para reflejar ese cambio. Ajusté meticulosamente el **microcopy**; muchas etiquetas de texto que en el diseño inicial eran descriptivas habían sido refinadas durante las pruebas con usuarios reales para ser más directas. Actualicé las versiones de desktop, tablet y móvil, asegurando que los puntos de ruptura (*breakpoints*) en Figma coincidieran con la respuesta real del código. Esta fase de "reflejo de la realidad" es lo que transforma un entregable de diseño en un documento técnico de consulta.

#### Sincronización de la biblioteca de componentes maestros

El corazón del legado que estaba construyendo era el **Design System**. Durante la fase de construcción, el sistema de diseño es un organismo vivo que sufre presiones constantes. En este punto, realicé una sincronización crítica de la biblioteca de componentes maestros. 

Recordé un caso específico durante la implementación: el color de *hover* de los botones primarios. En el diseño original, el contraste era sutil, pero durante las auditorías de accesibilidad WCAG 2.1 AA que realizamos, detectamos que en ciertos monitores de hospital con calibraciones de color antiguas, la diferencia era casi imperceptible. Decidimos ajustar el tono a uno más oscuro para garantizar el cumplimiento de accesibilidad. Mi labor en esta etapa fue replicar ese cambio en el componente maestro de Figma y publicar la actualización en la **Biblioteca de Equipo**.

> **Insight de Diseño:** Actualizar el Design System post-implementación no es un doble trabajo; es una inversión. Al sincronizar los componentes maestros con el código final, garantizamos que cualquier nueva funcionalidad que se diseñe en el futuro parta de una base técnica real, evitando que el diseño y el desarrollo vuelvan a divergir.

#### La anatomía de los compromisos inteligentes

Uno de los aspectos más valiosos de esta documentación final fue el registro de las decisiones tomadas ante limitaciones técnicas. A lo largo de la colaboración continua con desarrollo, surgieron momentos donde la visión ideal de diseño chocó con la viabilidad técnica o el rendimiento de la plataforma. Como diseñador senior, mi rol no fue lamentar estas limitaciones, sino articular **compromisos inteligentes**.

Documenté casos específicos, como la simplificación de una animación de transición en el mega menú de "Servicios Médicos". Originalmente habíamos proyectado un desplazamiento fluido con desvanecimiento, pero las pruebas de rendimiento mostraron un ligero *lag* en dispositivos móviles de gama media. Decidimos simplificarla a un fundido básico. En la documentación final, no solo cambié el prototipo, sino que añadí notas técnicas explicando el "por qué". Este rastro de migas de pan es fundamental: evita que en el futuro alguien intente "arreglar" algo que fue una decisión consciente de optimización, ahorrando horas de retrabajo inútil.

#### El snapshot de lanzamiento y el cierre del ciclo

Con los mockups actualizados y el Design System sincronizado, procedí a la organización final del archivo. Realicé una limpieza profunda, eliminando páginas de iteraciones descartadas y ramas de diseño que solo generaban ruido. Mi objetivo era la claridad absoluta.

El acto final de rigor administrativo fue la creación de una **"Versión Nombrada"** en el historial de Figma, que titulé con solemnidad: **"Diseño Final v1.0 - Lanzamiento [Fecha]"**. Este snapshot es una cápsula del tiempo; es el estado oficial del diseño en el momento en que el primer paciente real entró a la URL del Centro Médico ABC. 

Posteriormente, consolidé el **Paquete de Diseño Final** en nuestro repositorio centralizado en Google Drive. Este paquete incluyó:
1.  **Assets finales:** Iconografía, ilustraciones y recursos gráficos exportados en todos los formatos necesarios (SVG, PNG, @2x, @3x), correctamente nombrados según la convención del sistema.
2.  **Guía de Handoff Actualizada:** Añadí un apéndice detallado con todos los cambios realizados post-UAT, vinculando los tickets de Jira que habían motivado ajustes visuales o de interacción.
3.  **PDFs de Referencia:** Generé exportaciones estáticas de los flujos principales para aquellos stakeholders que no navegan en Figma, asegurando que la visión del producto fuera accesible para toda la organización.

Al entregar este paquete al Product Owner y al Líder Técnico, sentí la satisfacción del deber cumplido. No les estaba entregando solo un diseño; les estaba entregando un mapa preciso y actualizado de su nuevo ecosistema digital.

#### Reflexión final:

Mirando hacia atrás, esta fase de documentación 'As-Built' fue el acto de responsabilidad más importante de todo el proyecto. Es fácil diseñar en el vacío de un lienzo en blanco, pero el verdadero oficio se demuestra en la capacidad de acompañar al producto hasta que toca la realidad y en tener la disciplina de registrar ese choque. Al cerrar este ciclo para el Centro Médico ABC, no solo entregué una interfaz moderna y funcional; dejé una estructura sólida sobre la cual el hospital puede seguir construyendo. Aprendí que un diseño solo es verdaderamente exitoso cuando su documentación es tan robusta como su código, asegurando que la excelencia institucional que define al ABC se mantenga intacta en cada interacción digital, hoy y en los años por venir.

---

