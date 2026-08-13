# Fase 4: Soporte al Desarrollo y Pruebas (Implementar)

## Actividad 3: Participación en Pruebas de Aceptación del Usuario (UAT)

> Esta actividad documenta la transición crítica del diseño estático a la validación en entornos de producción simulados (staging). Como Product Designer, el rol evoluciona de creador a auditor, asegurando que la implementación técnica no solo sea funcional, sino que respete la integridad de la experiencia del paciente diseñada en fases previas. El proceso abarca desde la definición de escenarios de prueba basados en Personas, pasando por auditorías de accesibilidad WCAG 2.1 AA, hasta la gestión de bugs de diseño y la documentación final 'As-Built'.

### Parte 1: Estrategia de Escenarios y Alineación de Negocio

#### Del control de píxeles a la validación de flujos de vida real

A mediados de 2022, la atmósfera del proyecto cambió. Había pasado meses sumergido en una colaboración frenética con el equipo de desarrollo, asegurándome de que cada componente del Design System se implementara con una precisión casi obsesiva. Habíamos superado la etapa del **handoff** y estábamos en ese punto donde la plataforma del Centro Médico ABC ya no era un conjunto de archivos en Figma, sino un entorno de **staging** estable y funcional. Sin embargo, sentí una tensión familiar: el código podía ser perfecto y los píxeles podían estar en su sitio, pero aún no sabíamos si la plataforma sobreviviría al contacto con el caos de la vida real de un paciente.

En ese momento, tomé una decisión estratégica: mi rol debía evolucionar de "auditor de interfaz" a "arquitecto de validación". No podíamos permitir que las Pruebas de Aceptación del Usuario (UAT) se convirtieran en un simple trámite de "pasa/no pasa" funcional dirigido por QA. Como responsable de la experiencia, mi obsesión era garantizar que lo que estábamos a punto de probar no fuera solo si un botón guardaba un dato, sino si la arquitectura de información y los flujos que habíamos diseñado realmente resolvían los dolores de los pacientes que identificamos al inicio del camino. Pasamos de la inspección técnica a la validación de flujos de vida real, actuando como el puente crítico entre la capacidad técnica del equipo y la promesa de negocio del hospital.

#### Inyectando la perspectiva del paciente en el rigor técnico de QA

Dos semanas antes de arrancar formalmente las sesiones de UAT, me integré de lleno en las reuniones de planificación con el Product Owner (PO) y el equipo de QA. El ambiente era puramente técnico; ellos estaban enfocados en la estabilidad del servidor y la integridad de la base de datos. Mi maniobra aquí fue quirúrgica: me senté con ellos frente a los **Google Sheets** donde estaban estructurando los casos de prueba y empecé a cuestionar la narrativa de cada escenario.

QA tenía pasos como: "1. Ingresar al buscador. 2. Seleccionar filtro. 3. Clic en buscar". Mi intervención fue transformar esa frialdad técnica en escenarios con alma. Argumenté que un usuario no "selecciona un filtro", sino que "busca desesperadamente un especialista que atienda su urgencia y acepte su seguro". Esta distinción no era semántica, era operativa. Logré que los casos de prueba reflejaran la intención del usuario, asegurando que el lenguaje utilizado fuera comprensible para los pacientes reales que participarían en las pruebas, eliminando cualquier rastro de jerga técnica que pudiera sesgar los resultados.

> El riesgo de una UAT puramente técnica es que terminas lanzando un producto que funciona perfectamente para los ingenieros, pero que resulta alienígena para el paciente que está tratando de entender si su seguro cubre una consulta en Santa Fe.

#### Personas en la trinchera: Elena y Carlos como ejes de validación

Para que la estrategia de escenarios tuviera peso, traje de vuelta a la mesa a nuestras Personas: **Elena** (la paciente recurrente que gestiona múltiples citas) y **Carlos** (el paciente nuevo que no conoce la estructura del hospital). No permití que se diseñaran pruebas genéricas. En lugar de eso, articulé cada escenario basándome en sus necesidades específicas descubiertas en la fase de investigación.

Recuerdo haber planteado una pregunta incómoda al equipo durante la revisión de escenarios: "¿Qué sucede si Elena, con toda su urgencia, intenta agendar una cita y descubre que no hay disponibilidad en su campus preferido?". Ese fue un momento de tensión. QA no había contemplado el "camino triste" o el estado de error como algo que el usuario debía validar. Insistí en incluir estos casos de borde porque es ahí donde la experiencia se rompe. Diseñamos escenarios donde el éxito no era solo completar la tarea, sino cómo la plataforma guiaba al usuario cuando las cosas no salían como esperaba. Esta simulación antropológica nos permitió blindar los flujos antes de que un solo paciente real pusiera un dedo sobre la versión de producción.

#### Redefiniendo el éxito: Más allá del bit, la carga cognitiva

Uno de los cambios más profundos que impulsé en la planificación de la UAT fue la redefinición de los criterios de éxito. Tradicionalmente, si el sistema no arrojaba un error 500, la prueba se consideraba exitosa. Yo rechacé esa visión. Propuse que el éxito debía medirse bajo la lente de la **carga cognitiva** y la **facilidad de uso**.

Establecí que un escenario de agendamiento, por ejemplo, solo se marcaría como "Aceptado" si el usuario podía completarlo sin vacilaciones críticas, sin tener que releer el **microcopy** tres veces y sin expresar confusión sobre qué botón presionar a continuación. Mi razonamiento era simple: si un paciente duda en el momento de confirmar su cita, esa duda se traduce en una llamada al call center, lo cual es un fallo de diseño y un coste para el negocio. Esta métrica cualitativa nos dio un rigor forense que el QA tradicional simplemente no posee, permitiéndonos detectar fricciones que el código nunca revelaría.

#### El buscador de médicos: Anatomía de un escenario crítico

El buscador de médicos es el corazón transaccional de la plataforma, y su validación en UAT fue mi prioridad absoluta. Diseñé un escenario específico para **Carlos** que era una prueba de fuego para la arquitectura de filtros que tanto habíamos discutido con desarrollo. El reto era el siguiente: Carlos debía encontrar un especialista en **Dermatología**, filtrar por un **seguro médico específico** y asegurarse de que atendiera en el **Campus Santa Fe**.

Durante la construcción de este caso, fui obsesivo con los detalles de la tarjeta del médico. No bastaba con que apareciera el nombre; la UAT debía validar:
*   La visibilidad inmediata de las especialidades para evitar clics innecesarios.
*   La claridad en la distinción entre los diferentes campus donde atiende el médico.
*   La integridad del botón "Agendar Cita", asegurando que fuera el elemento de mayor peso visual y que su acción fuera inequívoca.
*   La lógica de los filtros bajo presión: ¿qué pasa si Carlos selecciona un filtro y luego otro? ¿La interfaz reacciona con la rapidez que prometimos en los prototipos de alta fidelidad?

#### Blindando la continuidad: De la búsqueda al agendamiento E2E

No podíamos permitirnos probar la plataforma en silos. Mi enfoque para la UAT fue la verificación de flujos **End-to-End (E2E)**. Supervisé personalmente que los escenarios conectaran orgánicamente el buscador con el perfil del médico y, finalmente, con el inicio del proceso de agendamiento o el acceso al portal del paciente.

Mi objetivo era confirmar que la arquitectura de información que tracé meses atrás se mantuviera sólida durante la navegación profunda. Si un usuario encontraba a su médico pero se perdía al intentar entrar a "Mi Salud ABC", el flujo estaba roto. Esta visión holística del viaje del paciente nos permitió identificar que algunos puntos de contacto entre el sitio público y el portal transaccional necesitaban un refuerzo visual o una clarificación en el etiquetado. Fue una labor de vigilancia constante para asegurar que la transición entre diferentes sistemas técnicos fuera invisible para el ojo del paciente.

#### Despejando el camino: Gestión de dependencias y estados de borde

Mientras planeábamos la UAT, mi labor de colaboración continua con desarrollo no se detuvo. Al revisar los escenarios, identifiqué varias dependencias técnicas que podían hacer descarrilar las pruebas. Por ejemplo, me di cuenta de que no habíamos definido formalmente el **estado vacío** (empty state) para cuando un usuario buscara una combinación de filtros sin resultados (ej. un cardiólogo pediátrico que hablara francés en un campus específico).

Utilicé **Jira** para documentar estas necesidades de último minuto como "bloqueadores de experiencia". No eran bugs de código, eran vacíos de diseño que la UAT iba a exponer cruelmente. Rápidamente articulé con los desarrolladores la entrega de estos **assets** y definiciones de estado. Mi rol fue el de un facilitador proactivo: despejé el camino para que, cuando los usuarios se sentaran frente a la pantalla, se encontraran con una plataforma que se sentía terminada y robusta, incluso en sus esquinas más oscuras. Esta gestión de dependencias fue vital para que la UAT se centrara en la aceptación del producto y no en reportar omisiones básicas de diseño.

#### La red de seguridad final

Mirando hacia atrás, mi participación en la planificación de la UAT fue la red de seguridad que salvó la integridad de la experiencia. Al no dejar esta fase exclusivamente en manos de perfiles técnicos o de negocio, aseguré que la voz del paciente y los principios de diseño que defendí desde el día uno se mantuvieran intactos hasta el último minuto. Fue un ejercicio de resistencia: defender la usabilidad frente a la urgencia del lanzamiento y las limitaciones técnicas que siempre aparecen en la recta final. El resultado no fue solo una plataforma que funcionaba, sino una que el Centro Médico ABC podía lanzar con la total confianza de que sus pacientes sabrían usarla desde el primer segundo.

#### AUDITORÍA DE ACCESIBILIDAD Y CUMPLIMIENTO WCAG 2.1 AA

A pesar de tener los escenarios de flujo listos, una sombra de duda me asaltó al revisar la versión de staging: ¿qué pasaría con los pacientes que no navegan con un mouse o que dependen de lectores de pantalla para gestionar su salud? Me di cuenta de que un flujo lógicamente perfecto podía ser una barrera infranqueable si no cumplíamos con los estándares de accesibilidad, lo que me llevó a iniciar una auditoría técnica profunda que pondría a prueba la flexibilidad de nuestro Design System y la paciencia del equipo de desarrollo. Sabía que si no resolvíamos esto ahora, estaríamos excluyendo a una parte crítica de nuestra audiencia en el momento más vulnerable.

---

### Parte 2: Auditoría de Accesibilidad y Cumplimiento Wcag 2.1 Aa

#### El peso de la exclusión invisible

Solté el mouse, me alejé de la pantalla y cerré los ojos por un segundo. Habíamos diseñado flujos que, en el papel y en Figma, parecían perfectos. El camino del paciente estaba trazado con una precisión quirúrgica, pero al entrar en el entorno de staging, me asaltó una duda que no me dejaba avanzar: ¿qué pasaba con el paciente que no podía ver esos botones azules tan bien cuidados? ¿Qué pasaba con la persona de la tercera edad que, debido a un temblor esencial, no podía usar un trackpad y dependía exclusivamente de un teclado? Como responsable de la experiencia, sabía que un flujo lógicamente impecable es una barrera infranqueable si no es accesible. No podíamos hablar de "excelencia médica" si nuestra puerta digital estaba cerrada para una parte crítica de nuestra audiencia.

Decidí que no podíamos pasar a la siguiente fase sin una auditoría técnica profunda. No lo vi como un "extra" o un requerimiento de cumplimiento legal, sino como un pilar fundamental de los principios de diseño que establecimos para el Centro Médico ABC desde el primer día. La accesibilidad en salud es, ante todo, una cuestión de autonomía y dignidad. En ese momento, mi rol cambió: dejé de ser el arquitecto de la interfaz para convertirme en un auditor forense, buscando cada grieta por donde la exclusión pudiera filtrarse.

#### El estándar WCAG 2.1 AA como brújula técnica

Para que esta auditoría tuviera el peso necesario frente a los stakeholders y el equipo de desarrollo, establecí el estándar **WCAG 2.1 Nivel AA** como nuestro marco de referencia innegociable. No quería una revisión superficial; necesitaba un diagnóstico que resistiera cualquier escrutinio técnico. Implementé una metodología híbrida porque, por experiencia, sé que las herramientas automáticas solo detectan el 30% de los problemas de accesibilidad. El resto requiere criterio humano.

Articulé el proceso en dos frentes. Primero, utilicé herramientas de escaneo como **axe DevTools** y **Lighthouse** para identificar errores estructurales "obvios": falta de textos alternativos, errores de jerarquía en los encabezados y contrastes fallidos. Sin embargo, el verdadero trabajo senior ocurrió en la revisión manual experta. Me dediqué a auditar sistemáticamente las pantallas que concentran el valor del proyecto: el Buscador de Médicos, el Flujo de Agendamiento de Citas y los Perfiles de Especialistas. Buscaba fallos que un algoritmo ignora, pero que para un paciente con discapacidad visual o motora representan el fin de su gestión de salud.

#### La realidad de navegar sin visión: Lectores de pantalla

Para entender la magnitud del reto, activé **NVDA en Windows** y **VoiceOver en macOS**. Navegar por los perfiles médicos utilizando únicamente el audio fue una experiencia reveladora y, por momentos, frustrante. Al ponerme en la piel de un paciente con discapacidad visual total, descubrí que la experiencia auditiva estaba fragmentada. 

Uno de los hallazgos más críticos fue en la página de resultados del buscador. Al llegar a las tarjetas de los doctores, el lector de pantalla anunciaba "Imagen" o, en el mejor de los casos, "Doctor". No había contexto. El paciente no sabía si estaba ante el oncólogo que buscaba o ante una foto decorativa. Peor aún, el botón principal para la conversión, el de "Agendar Cita", carecía en algunos casos de una etiqueta descriptiva clara. Para alguien que depende de la tecnología asistiva, el sistema simplemente decía "Botón", sin explicar qué acción se desencadenaría al presionarlo. Documenté esta ausencia de atributos `alt` y etiquetas accesibles no como un detalle cosmético, sino como un bloqueador de negocio y de servicio. La arquitectura de información que tanto habíamos pulido se desmoronaba cuando el código no era capaz de narrarla correctamente.

#### Soltar el mouse: La prueba del teclado y las trampas de foco

El siguiente paso de mi auditoría fue "soltar el mouse". Operé la plataforma exclusivamente con las teclas **Tab, Shift+Tab y Enter**. Es aquí donde la implementación técnica suele fallar frente al diseño visual, y nuestro caso no fue la excepción. Al navegar por el flujo de agendamiento de laboratorio, me encontré con un problema de alta severidad: las **"keyboard traps"** o trampas de teclado.

Al abrir el modal del calendario para seleccionar una fecha, el foco del teclado entraba en un bucle infinito. Podía moverme entre los días, pero no había una forma lógica de salir del modal o de saltar al siguiente paso del formulario sin usar el mouse. El usuario quedaba atrapado en un laberinto digital. Además, identifiqué que el orden de tabulación en ciertos componentes complejos no era predecible; el foco saltaba de la cabecera al pie de página sin pasar por el contenido principal, lo que genera una carga cognitiva agotadora para alguien con discapacidad motora.

Otro hallazgo preocupante fue la visibilidad del indicador de foco (el *outline*). En nuestra búsqueda de una estética limpia, el equipo de desarrollo había suprimido en algunas secciones el borde que indica dónde está situado el usuario. Navegar así es como intentar caminar en una habitación a oscuras: sabes que estás ahí, pero no tienes idea de qué estás tocando. Documenté la necesidad de garantizar que el indicador de foco fuera siempre visible y tuviera un contraste suficiente, respetando la usabilidad por encima de la estética minimalista.

#### Análisis forense de contraste y legibilidad

Aunque en la fase de diseño habíamos validado la paleta de colores, la implementación en el navegador a veces altera la percepción debido al renderizado de las fuentes y los fondos. Utilicé herramientas como **Stark** y el **WebAIM Contrast Checker** para realizar un análisis forense de la interfaz en staging.

Descubrí que ciertos textos de información secundaria, como las etiquetas de los campos en los formularios de contacto y las descripciones breves de servicios médicos, utilizaban un gris claro sobre fondo blanco que no alcanzaba el ratio de contraste mínimo de **4.5:1** exigido por la WCAG AA. Para un usuario con baja visión o incluso para alguien que intenta agendar una cita desde su móvil bajo la luz directa del sol, esos textos eran prácticamente invisibles. 

> **Insight de Diseño:** La estética nunca debe comprometer la legibilidad. Si un paciente no puede leer las instrucciones de su preparación para un estudio de laboratorio porque el contraste es "elegante" pero insuficiente, el diseño ha fallado en su propósito principal.

Ordené un ajuste inmediato en las variables de color del Design System. No era negociable: sacrificamos un matiz de gris por una legibilidad universal. Esta decisión blindó la plataforma para que fuera usable en las condiciones más adversas.

#### Semántica HTML y la inteligencia de los formularios

La auditoría me llevó a inspeccionar el código fuente para verificar la relación programática entre los elementos. En los formularios de agendamiento, detecté que algunas etiquetas `<label>` no estaban correctamente asociadas a sus campos de entrada `<input>` mediante los atributos `for` e `id`. Esto significa que, para un lector de pantalla, el campo de texto es un ente huérfano; el usuario sabe que debe escribir algo, pero no sabe si es su nombre, su correo o su número de expediente.

También puse especial atención en el uso de atributos **ARIA (Accessible Rich Internet Applications)**. En una plataforma de salud, el feedback inmediato es vital. Si un usuario comete un error al ingresar su fecha de nacimiento, el mensaje de error debe ser anunciado de inmediato. Propuse la implementación de `aria-live="assertive"` para los mensajes de validación. Mi razonamiento fue simple: si no notificamos el error de forma auditiva en el momento en que ocurre, el paciente con discapacidad visual intentará enviar el formulario una y otra vez sin entender por qué el sistema no lo deja avanzar, generando una frustración que termina en el abandono del portal.

#### Resiliencia visual: Zoom al 200% y Reflow

Finalmente, realicé una prueba de estrés visual aumentando el zoom del navegador al 200%. Esta es la realidad diaria de muchos pacientes de la tercera edad que necesitan ampliar el contenido para poder procesarlo. Mi objetivo era evaluar el **Reflow**: ¿se reorganizaba el contenido de forma fluida o se rompía la interfaz?

En la mayoría de las páginas, la arquitectura de información resistió bien, pero en los perfiles médicos complejos, algunos elementos empezaron a superponerse o generaron un scroll horizontal infinito, lo cual es una violación directa de la WCAG. Ver cómo las tarjetas de especialidades se cortaban al aumentar el tamaño me obligó a replantear con los desarrolladores la flexibilidad de los contenedores. Aseguramos que, incluso bajo una ampliación extrema, el paciente pudiera leer su diagnóstico o los datos de contacto de su médico sin tener que "perseguir" el texto por la pantalla.

#### Una responsabilidad ética compartida

Al terminar esta auditoría y redactar el informe de hallazgos, sentí que habíamos hecho mucho más que "revisar bugs". Habíamos auditado el compromiso del Centro Médico ABC con la inclusión. La accesibilidad no es un checklist que se marca al final; es una capa de inteligencia que mejora la experiencia para todos. Un buen contraste ayuda al paciente que está en una sala de espera con mucha luz; una navegación por teclado lógica ayuda al usuario avanzado que prefiere la velocidad de las teclas; y una estructura semántica clara mejora incluso el SEO de la plataforma.

Documenté cada hallazgo en **Jira**, categorizándolos por severidad (Crítico, Mayor, Menor) y proporcionando capturas de pantalla anotadas y sugerencias de corrección técnica. Sabía que el equipo de desarrollo tendría mucho trabajo por delante, pero también sabía que, al resolver estos puntos, estábamos entregando una plataforma de salud que no dejaba a nadie atrás. Mi rol como diseñador fue ser el guardián de esa promesa, asegurando que la excelencia médica del ABC se tradujera, sin fricciones, al mundo digital.


A pesar de haber blindado la plataforma con estos estándares de accesibilidad, la verdadera prueba de fuego no estaba en el código, sino en la interacción humana. Al observar las primeras sesiones de uso real en staging, me di cuenta de que había una brecha entre lo que el sistema permitía hacer y lo que los usuarios realmente entendían. Una tensión silenciosa empezó a emerger: ¿estábamos respetando la fidelidad visual del diseño original o la implementación técnica estaba tomando atajos que sacrificaban la experiencia del paciente? El momento de enfrentar el Design QA y la observación directa había llegado.

---

### Parte 3: El Momento de la Verdad Observación y Design Qa

#### La transición del laboratorio a la intemperie

El blindaje de accesibilidad bajo el estándar WCAG 2.1 AA me había dado una base técnica sólida, pero como diseñador, sabía que un sitio accesible no es necesariamente un sitio fácil de usar. Habíamos pasado meses construyendo una fortaleza de código y diseño, pero ahora llegaba el momento de abrir las puertas y ver si los pacientes del Centro Médico ABC podían realmente habitarla. No bastaba con que los lectores de pantalla interpretaran correctamente los botones; la interfaz debía respirar la confianza y el prestigio de la institución en cada interacción. 

Me mudé del entorno controlado de Figma al caos controlado de **Staging**. Esta transición es crítica: en el diseño estático, todo es perfecto; en el entorno de producción simulado, te enfrentas a datos reales, latencias de servidor y comportamientos de navegador que no siempre se alinean con tu visión original. Mi mentalidad cambió: dejé de ser el constructor para convertirme en un auditor implacable de mi propia obra. Sabía que la excelencia médica del hospital debía traducirse sin fisuras al mundo digital, y la única forma de garantizarlo era enfrentando el producto al usuario real y al rigor del **Design QA**.

#### El ritual de la observación mínima en UAT

Para las Pruebas de Aceptación del Usuario (UAT), decidí adoptar un rol de observador activo. Aunque estas sesiones suelen estar lideradas por el Product Owner o el equipo de QA, mi presencia era fundamental para capturar lo que los logs de errores no dicen: la duda en la mirada del usuario, el clic errático o el suspiro de frustración. Me aseguré de que los escenarios de prueba no fueran simples validaciones funcionales, sino historias reales basadas en las **Personas** que habíamos definido meses atrás.

Recuerdo específicamente el caso de "Carlos", un paciente nuevo que representaba a un segmento demográfico que valoraba la eficiencia por encima de todo. Diseñé un escenario quirúrgico: *"Eres un paciente nuevo, necesitas encontrar un dermatólogo que atienda en el Campus Santa Fe y que acepte tu seguro médico específico. Encuentra su perfil y verifica cómo contactarlo"*. 

Durante la sesión, apliqué la técnica de **intervención mínima**. Me senté con mi plantilla de observación en Notion, registrando cada vacilación. Carlos encontró el buscador de médicos rápidamente, pero cuando llegó al filtro de seguros, se detuvo tres segundos. Esos tres segundos para mí fueron una señal de alarma. ¿Era el microcopy? ¿Era la jerarquía visual de la lista desplegable? Anoté el comportamiento exacto: *"Usuario duda al desplegar la lista de seguros; busca el buscador de texto dentro del dropdown"*. Mi objetivo no era ayudarlo a terminar la tarea, sino documentar dónde el diseño le estaba fallando a su modelo mental.

#### La captura de insights cualitativos en vivo

A medida que avanzaban las sesiones de UAT, mi cuaderno de notas se llenaba de frases espontáneas que valían más que cualquier métrica cuantitativa. Escuché a una usuaria decir: *"¿Dónde hago clic ahora? Pensé que ya había terminado"*. Ese comentario me reveló que el flujo de confirmación de cita no era lo suficientemente conclusivo visualmente, a pesar de que técnicamente el ticket de éxito se generaba correctamente.

Fui agrupando estos hallazgos en patrones recurrentes. Uno de los puntos de dolor más claros fue el acceso a **"Mi Portal Paciente ABC"**. Aunque el botón estaba en el encabezado, varios usuarios intentaban buscarlo dentro de la sección de "Servicios Médicos". Este insight cualitativo me indicó que, para el paciente, el portal no es un "servicio", sino una herramienta de gestión transversal. 

> **Insight de Diseño:** La funcionalidad técnica puede estar presente, pero si la ubicación contradice el modelo mental del usuario en un momento de vulnerabilidad o urgencia, la funcionalidad no existe. Mi trabajo en UAT fue identificar estas brechas entre la arquitectura de información que propusimos y la realidad cognitiva de quien busca atención médica.

#### Design QA: El rigor obsesivo del píxel

Paralelamente a las pruebas con usuarios, inicié el proceso de **Design QA**. Si el UAT era sobre el comportamiento humano, el Design QA era sobre la integridad del oficio. Realicé una auditoría sistemática comparando, pantalla por pantalla, el entorno de **Staging** contra mis archivos maestros de Figma. 

Utilicé las herramientas de inspección del navegador para diseccionar la implementación. No aceptaba aproximaciones. Si el diseño especificaba un `margin-bottom` de 24px entre el buscador de médicos y la sección de agenda, y la implementación mostraba 20px, abría un ticket en **JIRA**. 

**Mi checklist de auditoría incluía:**
*   **Fidelidad Visual:** Verificación de valores hexadecimales de color para asegurar que el azul institucional no se hubiera desviado en las hojas de estilo CSS.
*   **Jerarquía Tipográfica:** Comprobación de los `font-weight` y `line-height`. Descubrí que en algunas secciones los títulos de nivel 2 estaban perdiendo peso visual, lo que afectaba la escaneabilidad de la página.
*   **Consistencia del Design System:** Aseguré que cada botón, campo de formulario e icono fuera una instancia exacta de los componentes que habíamos documentado, sin "estilos huérfanos" creados a último minuto por el equipo de desarrollo.

#### Verificación de la fidelidad de interacción

El diseño no es solo cómo se ve, sino cómo se mueve. Me enfoqué en auditar el comportamiento dinámico de la plataforma. Inspeccioné los **hover states** de las tarjetas de servicios médicos: la transición debía ser suave, de 200ms, proporcionando un feedback visual claro de que el elemento era interactivo. 

Encontré una fricción en los menús desplegables de la navegación principal. La animación se sentía abrupta, casi violenta. Al revisar el código con el desarrollador Frontend, detectamos que no se estaba respetando la curva de aceleración (*easing*) que habíamos definido en el prototipo. Actué como el guardián de la experiencia: *"Si la respuesta del sistema se siente tosca, el paciente percibirá una plataforma descuidada, lo cual es inaceptable para una institución de excelencia médica"*. Exigí el ajuste en las propiedades de CSS Transition para que la interacción fuera fluida y profesional.

#### La batalla de la responsividad en dispositivos reales

No me limité a redimensionar la ventana del navegador en mi monitor de escritorio. Tomé dispositivos iOS y Android reales para probar la plataforma en las condiciones en las que un paciente realmente la usaría: quizás caminando por un pasillo del hospital o desde la sala de espera.

Aquí es donde el diseño suele romperse. Identifiqué que las tarjetas de los perfiles médicos, que se veían perfectas en desktop, no se apilaban correctamente en pantallas de iPhone SE. El texto se desbordaba y el botón de "Agendar Cita" quedaba cortado. Colaboré estrechamente con el equipo de desarrollo para ajustar las reglas de **Flexbox** y **Grid**. No se trataba solo de que el contenido cupiera, sino de que la jerarquía visual se mantuviera intacta: el nombre del médico y su especialidad siempre debían ser lo primero que el ojo encontrara, sin importar el tamaño de la pantalla.

#### Diferenciación entre bugs y desviaciones de UX

Durante las reuniones de revisión de issues, mi rol fue ayudar al Product Owner a priorizar los hallazgos. Había una distinción clara que yo debía defender:
1.  **Bugs Funcionales:** Un botón de "Enviar" que no dispara el formulario. (Prioridad técnica obvia).
2.  **Desviaciones de UX:** Un botón de "Enviar" que funciona, pero que está ubicado debajo del pliegue de la pantalla en móvil, obligando al usuario a hacer un scroll innecesario.

A menudo, el equipo de desarrollo tendía a minimizar las desviaciones de UX porque "el sistema sí funciona". Mi labor fue defender la corrección de estos problemas: *"Funcionalmente está bien, pero estamos forzando una carga cognitiva innecesaria en un usuario que probablemente está estresado. Si no movemos este botón, aumentaremos la tasa de abandono en un 15% basándonos en lo que vimos en las sesiones de UAT"*. Esta argumentación basada en la observación real me permitió elevar la prioridad de tickets que de otro modo habrían quedado en el olvido.

#### La validación final del Microcopy

Finalmente, realicé una auditoría del contenido textual implementado frente al aprobado. El **Microcopy** en salud es una herramienta terapéutica y de guía. Verifiqué que los mensajes de error en los formularios de agendamiento no fueran genéricos como "Error en el campo", sino empáticos y claros: "Por favor, introduce un número de teléfono válido para que podamos confirmar tu cita".

Cualquier discrepancia en la fraseología fue reportada. Si el diseño decía "Agendar Cita" y la implementación decía "Reservar", solicitaba el cambio. La consistencia en la voz del Centro Médico ABC era innegociable; la plataforma debía hablar con la misma autoridad y calidez en cada rincón digital. Al terminar esta fase, y tras verificar que cada corrección en Staging se alineara con la visión original, emití la aprobación final de diseño. La plataforma estaba, por fin, lista para el veredicto del negocio.


La montaña de tickets en JIRA y las notas de observación en Notion han creado un mapa de fricciones que no podemos ignorar, pero el reloj del lanzamiento no se detiene. Me enfrento ahora al desafío de realizar un triage despiadado junto al Product Owner para decidir qué cambios entran en la versión final y cuáles formarán parte de la deuda de diseño. Siento la tensión de saber que cada decisión de última hora definirá la primera impresión de miles de pacientes, mientras empiezo a estructurar la documentación 'As-Built' que servirá de testamento técnico de todo lo que realmente logramos construir.

---

### Parte 4: Triage de Hallazgos y Documentación As-built

#### El triage de hallazgos: la frontera entre lo ideal y lo posible

Al finalizar la verificación en Staging y emitir la aprobación inicial, me encontré frente a un volumen masivo de hallazgos que no permitían un lanzamiento inmediato sin riesgos. Como responsable del diseño, sabía que no podía simplemente ignorar las discrepancias; mi rol en esta fase crítica evolucionó de creador a auditor. Me enfrenté a la necesidad de realizar un **triage** despiadado para separar lo crítico de lo deseable, actuando como el guardián de la experiencia del paciente en un entorno donde el reloj del lanzamiento no se detenía.

Para gestionar este volumen, establecí un proceso de diagnóstico forense. No me limité a señalar errores; accedí al entorno de staging para investigar cada incidencia de forma sistemática. Utilicé el modo **Inspect** de Figma para comparar, píxel por píxel, la implementación frente al diseño original. Mi objetivo era determinar la raíz de cada problema: ¿era una mala interpretación de las especificaciones, un error técnico en el código o una limitación de la infraestructura que no habíamos previsto?

Categoricé cada bug bajo criterios de severidad técnica y de negocio:
*   **Bloqueadores Críticos:** Errores que impedían al paciente completar tareas esenciales, como fallos en el flujo de agendamiento o problemas de accesibilidad que hacían la interfaz inoperable.
*   **Bugs Mayores:** Discrepancias visuales que afectaban la percepción de confianza y profesionalismo del Centro Médico ABC, como colores de marca incorrectos o tipografías que perdían legibilidad en ciertos dispositivos.
*   **Ajustes Menores:** Desviaciones de espaciado o micro-interacciones que, aunque no rompían la experiencia, restaban pulido al producto final.

Esta priorización no fue un ejercicio solitario. Me senté con el Product Owner y el Líder Técnico para negociar qué correcciones entrarían en la versión final y cuáles formarían parte de la deuda de diseño para la fase posterior al lanzamiento. Cada decisión se tomó evaluando el impacto directo en el paciente frente al esfuerzo de desarrollo requerido.

#### Soporte técnico y colaboración en la trinchera del desarrollo

Una vez establecido el triage, mi labor se centró en facilitar la resolución de estas discrepancias. Entendí que para que el equipo de desarrollo fuera eficiente, necesitaba información quirúrgica. Me aseguré de que cada ticket en JIRA fuera una pieza de documentación completa: incluí capturas de pantalla anotadas, grabaciones en Loom para explicar transiciones complejas que el código no lograba replicar y, lo más importante, enlaces directos al **frame** específico en Figma.

Adopté un enfoque de soporte proactivo y reactivo. Establecí una línea de comunicación directa a través de canales dedicados en Slack, donde los desarrolladores podían consultarme dudas en tiempo real sin esperar a la siguiente reunión. Mi postura fue la de un socio, no la de un "policía del diseño". Si un desarrollador me explicaba que una animación de carga que yo había diseñado afectaba el rendimiento en dispositivos móviles, mi respuesta no era insistir en el diseño original, sino proponer una alternativa ágil: *"Si no podemos usar esa transición compleja, simplifiquémosla a un fundido suave; aquí tienes los valores de opacidad y tiempo actualizados"*.

Realicé sesiones de **Design QA Iterativo**, donde compartía pantalla para revisar estados específicos que suelen olvidarse en la implementación:
*   **Estados de interacción:** Verifiqué que los estados de *hover*, *focus* y *active* en los botones de "Agendar Cita" fueran consistentes y visibles.
*   **Responsividad en breakpoints críticos:** Revisé cómo se comportaban las tarjetas de los médicos en tabletas y móviles de gama baja, asegurando que el contenido no se desbordara.
*   **Accesibilidad técnica:** Supervisé que los indicadores de foco fueran claramente visibles para los pacientes que navegan mediante teclado, cumpliendo con los estándares WCAG 2.1 AA que nos habíamos fijado.

#### La construcción del testamento técnico: Documentación 'As-Built'

Con la mayoría de los bugs resueltos y el producto estabilizándose en Staging, inicié el proceso metódico de auditoría post-implementación. Existe una verdad incómoda en el diseño de producto: el archivo de Figma suele ser una promesa, pero la plataforma en vivo es la realidad. Mi objetivo fue transformar mis archivos de diseño en una documentación **As-Built** (tal como se construyó), asegurando que el diseño final reflejara con exactitud la obra técnica entregada.

Abrí la plataforma en producción en una pantalla y mis mockups originales en otra. Navegué por cada flujo, desde la búsqueda de especialistas hasta la descarga de resultados de laboratorio, buscando cualquier discrepancia residual. Si durante la construcción habíamos decidido mover un botón 8 píxeles para acomodar un texto dinámico más largo, actualicé el archivo de Figma para que coincidiera. Este no es un ejercicio de vanidad; es una medida crítica para el mantenimiento a largo plazo. Si un futuro diseñador hereda este proyecto, debe encontrar una "fuente única de verdad" que coincida con lo que el paciente ve en su navegador.

> **Insight de Seniority:** Un archivo de diseño que no coincide con la implementación no es una guía, es una fuente de confusión. La documentación 'As-Built' es el respeto que le muestras al equipo que mantendrá el producto cuando tú ya no estés.

Actualicé no solo las pantallas, sino también las anotaciones técnicas. Registré las razones detrás de cada cambio significativo realizado en las últimas etapas. Por ejemplo, documenté por qué el mega-menú de "Servicios Médicos" se simplificó ligeramente debido a limitaciones en la carga de scripts de terceros. Estas notas preservan el conocimiento del diseño y evitan que la lógica detrás de las decisiones se pierda en la memoria del equipo.

#### Limpieza del Design System y archivo final v1.0

El paso final de esta auditoría fue la actualización del **Design System**. Durante el desarrollo, es común que se realicen ajustes globales por razones de accesibilidad o rendimiento. Revisé los componentes maestros en Figma y realicé una limpieza técnica profunda. 

Ajusté los componentes maestros para reflejar las variaciones finales aceptadas:
1.  **Paleta de colores:** Sincronicé los códigos HEX finales que se utilizaron en el CSS, asegurando que los contrastes cumplieran con los niveles de accesibilidad validados en Staging.
2.  **Tipografías y espaciados:** Ajusté las escalas tipográficas y los valores de *padding* en los componentes de formulario para que fueran idénticos a los implementados.
3.  **Biblioteca de componentes:** Publiqué estas actualizaciones en la biblioteca de equipo de Figma, garantizando que cualquier futura iteración partiera de una base sólida y validada.

Una vez que los mockups, el prototipo y el sistema de diseño estuvieron alineados con la realidad, realicé el cierre administrativo del ciclo. Creé una **Versión Nombrada** en el historial de Figma, etiquetándola como "Diseño Final v1.0 - Lanzamiento". Exporté un paquete de diseño completo que incluía los mockups clave en PDF, assets optimizados y una Guía de Handoff actualizada con un apéndice de todos los cambios post-UAT.

Guardé este paquete en el repositorio centralizado del Centro Médico ABC. Al entregar estos "planos finales", no solo estaba cerrando una fase de trabajo; estaba blindando la integridad de la plataforma para su evolución futura. La documentación final es el puente que asegura que la excelencia que buscamos en el diseño se mantenga viva en cada actualización posterior al lanzamiento.

**Reflexión final:**
Participar en el cierre técnico de este proyecto me recordó que el diseño no termina cuando entregas los archivos, sino cuando el último bug crítico es resuelto en producción. Lograr que la implementación fuera fiel a la visión original requirió una mezcla de rigor técnico y diplomacia con el equipo de desarrollo, pero el resultado fue una plataforma robusta y profesional. Esta actividad dejó un activo invaluable para el Centro Médico ABC: un sistema de diseño vivo y una documentación que garantiza que la experiencia del paciente seguirá siendo coherente en los años por venir.

---

