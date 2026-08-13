# Fase 4: Soporte al Desarrollo y Pruebas (Implementar)

## Actividad 02: Pruebas de Accesibilidad

> Esta actividad constituye el blindaje inclusivo de la plataforma web del Centro Médico ABC. Como Lead Product Designer, mi misión fue trascender la estética visual para garantizar que la plataforma fuera operable y comprensible para todos los pacientes, independientemente de sus capacidades físicas o cognitivas. Basándome en las pautas WCAG 2.1 Nivel AA, lideré un proceso de auditoría híbrida (automatizada y manual) sobre el entorno de staging. El proceso abarcó desde la planificación estratégica de escenarios críticos hasta la remediación técnica de barreras en colaboración directa con el equipo de desarrollo, culminando en un producto final que no solo cumple con la normativa internacional, sino que refuerza el compromiso humano y de excelencia del CM ABC.

### Parte 1: Estrategia de Inclusión y Planificación de la Auditoría

Al ver las primeras líneas de código renderizadas en el entorno de staging, sentí la presión inmediata de que el diseño en Figma, por muy perfecto que pareciera, era solo una promesa. Habíamos pasado meses puliendo la estética y la arquitectura, pero el diseño de producto no termina en un archivo compartido; termina en la mano del paciente. En ese momento, mi mentalidad cambió: dejé de ser el constructor de interfaces para convertirme en el auditor de la realidad. Sabía que si no blindábamos la accesibilidad en esta fase de construcción, estaríamos entregando una herramienta que excluiría precisamente a quienes más necesitan el Centro Médico ABC: personas con limitaciones visuales, motoras o cognitivas que buscan salud, no barreras digitales.

#### El paso de la promesa visual a la integridad del código

La transición del handoff a la auditoría fue un punto de inflexión estratégico. Como responsable del diseño, entendí que la accesibilidad no podía ser un "ajuste de último minuto" o un barniz que se aplica antes de lanzar. Era un principio fundamental. Me sumergí en el DOM (Document Object Model) junto a los desarrolladores, no para fiscalizar su código, sino para asegurar que la semántica que habíamos proyectado se mantuviera intacta. Mi razonamiento fue claro: un botón que se ve bien pero no es detectable por un lector de pantalla es, funcionalmente, un botón roto. 

Decidí que no podíamos confiar solo en la intuición o en las "buenas prácticas" generales. Necesitábamos un marco de rigor científico. Por eso, establecí las **Pautas de Accesibilidad al Contenido Web (WCAG) 2.1 Nivel AA** como nuestro estándar de oro. No fue una decisión estética ni un capricho técnico; en el sector salud, el nivel AA es el equilibrio necesario entre una interfaz moderna y una operabilidad total. Mi objetivo era blindar la plataforma para que pacientes con baja visión, daltonismo o aquellos que dependen exclusivamente del teclado pudieran navegar con la misma autonomía que cualquier otro usuario. Cumplir con este estándar era nuestra forma de materializar el compromiso humano del CM ABC en bits y píxeles.

#### La selección quirúrgica de los flujos de "vida o muerte"

No podíamos auditar cada rincón del sitio simultáneamente sin bloquear el roadmap de desarrollo, así que maniobré para priorizar lo que llamé "flujos críticos de servicio". Identifiqué que un fallo de accesibilidad en la Homepage, el Buscador de Médicos o el proceso de Agendamiento de Citas no era un error cosmético, sino una denegación de servicio médico digital. 

Prioricé cinco áreas fundamentales para la auditoría inicial:
*   **La Homepage:** Como puerta de entrada y distribuidor de tráfico.
*   **Buscador de Médicos y Resultados:** Donde la precisión de los filtros es vital para encontrar al especialista correcto.
*   **Perfil del Médico:** El punto donde el paciente deposita su confianza.
*   **Flujo de Agendamiento (Laboratorio y Estudios):** El núcleo transaccional más complejo.
*   **Portal del Paciente:** Donde la privacidad y la claridad de los resultados médicos son innegociables.

Mi lógica fue simple: si un paciente no puede agendar una cita porque el calendario es un "keyboard trap" (una trampa de teclado), hemos fallado como diseñadores de producto. Esta priorización nos permitió enfocar los recursos de QA y desarrollo en los puntos donde el impacto en la vida del paciente es directo y tangible.

#### Gobernanza y el rol del diseñador como puente técnico

En esta fase, mi posición evolucionó. Actué como el puente crítico entre el equipo de QA y los desarrolladores frontend. No me limité a entregar un reporte; me involucré en la interpretación de cada criterio. Sabía que los desarrolladores a menudo ven la accesibilidad como una lista de etiquetas `aria-label`, pero mi labor fue explicarles el *porqué* detrás de cada atributo.

Articulé una dinámica de colaboración donde yo definía los criterios de éxito y validaba la calidad de la implementación. Me aseguré de que el equipo de desarrollo comprendiera que la estructura semántica del HTML (usar `<h1>` a `<h6>` de forma lógica, por ejemplo) no era solo para el SEO, sino el mapa fundamental que un lector de pantalla usa para narrar el sitio. Esta gobernanza proactiva evitó que los errores de accesibilidad se convirtieran en deuda técnica difícil de pagar semanas después.

#### La construcción del filtro forense: El Checklist Personalizado

Para que la auditoría fuera sistemática, destilé las WCAG en un checklist operativo y personalizado para el Design System del Centro Médico ABC. No quería que el equipo se abrumara con cientos de reglas, así que filtré los puntos de mayor impacto:
*   **Contraste de Color:** Validar que cada combinación de texto y fondo cumpliera con el ratio mínimo de 4.5:1, especialmente en etiquetas de campos y textos secundarios.
*   **Navegación por Teclado:** Asegurar que el orden de foco fuera lógico y que el indicador visual (el "focus ring") fuera siempre visible y contrastado.
*   **Alternativas Textuales:** Verificar que cada imagen informativa tuviera un atributo `alt` descriptivo, mientras que las decorativas fueran marcadas como nulas para no ensuciar la narración del lector de pantalla.
*   **Asociación de Formularios:** Confirmar que cada `<label>` estuviera programáticamente vinculado a su `<input>`. Sin esto, un paciente ciego no sabría qué información poner en qué campo.

Este checklist fue mi herramienta forense. Lo apliqué a cada componente ya implementado en staging, buscando inconsistencias que las herramientas automáticas suelen pasar por alto.

#### Preparación del laboratorio: El entorno de Staging

Finalmente, configuré la logística de las pruebas en el entorno de staging. Era crucial trabajar en este espejo de producción para no interferir con los sprints de desarrollo activos, pero con la fidelidad suficiente para que los resultados fueran reales. 

En este entorno controlado, preparé los escenarios para pruebas de **reflow** (asegurar que al aumentar el zoom al 200% el contenido se reorganizara sin pérdida de información ni scroll horizontal innecesario) y configuré las herramientas de simulación. Mi arsenal incluyó WAVE, axe DevTools y Lighthouse para la primera capa de detección, pero la verdadera preparación fue mental: me dispuse a navegar el sitio con los ojos cerrados, usando solo VoiceOver y el teclado. 

Esta fase de planificación no fue solo burocracia; fue el diseño de un experimento ético. En salud digital, la calidad se mide por la capacidad del producto de ser invisible para quien lo usa sin esfuerzo, y totalmente perceptible para quien enfrenta una limitación. La accesibilidad es, en última instancia, la forma más pura de empatía técnica que podemos ejercer.

> **Insight de Diseño:** Un sistema de salud digital que no es accesible por diseño es un sistema que falla en su misión de cuidado. La planificación de esta auditoría fue el momento en que decidimos que la excelencia del CM ABC no se detendría ante una discapacidad visual o motora.

Al terminar de configurar el entorno de staging y tener el checklist listo, una pregunta me inquietaba: ¿cuántas barreras invisibles habíamos construido sin darnos cuenta durante los meses de desarrollo rápido? Sabía que el primer escaneo automatizado sería un baño de realidad necesario. Estaba a punto de activar las herramientas de diagnóstico para revelar las grietas estructurales que el ojo humano, por muy entrenado que esté, siempre pasa por alto en el código.

---

### Parte 2: Auditoría Automatizada Detección de Barreras Estructurales

#### El baño de realidad en el entorno de staging

Con el checklist de las WCAG 2.1 Nivel AA sobre la mesa y el entorno de staging finalmente estabilizado, me encontré en ese momento de tensión silenciosa que precede a cualquier auditoría seria. No se trataba solo de cumplir con una normativa; se trataba de validar si la estructura que habíamos construido durante meses para el Centro Médico ABC era realmente inclusiva o si habíamos levantado muros digitales sin darnos cuenta. La accesibilidad en salud no admite errores de "maquillaje": un botón de agendamiento que un lector de pantalla no reconoce es, literalmente, una puerta cerrada para un paciente.

Antes de lanzarme a la navegación manual —que es donde realmente se siente la fricción—, necesitaba un diagnóstico cuantitativo y estructural. Mi razonamiento fue pragmático: debía limpiar el "ruido" técnico primero. No tenía sentido perder tiempo evaluando flujos complejos si las bases del código estaban rotas. Me senté frente al monitor, abrí las páginas clave —la Homepage, el Buscador de Médicos y el Perfil de Médico— y me preparé para lo que yo llamo el "baño de realidad". Sabía que las herramientas automatizadas solo detectarían alrededor del 30% de los problemas, pero ese 30% es el que suele revelar si el equipo de desarrollo ha interiorizado la semántica del HTML o si simplemente ha estado "dibujando" con código.

#### El primer pulso: Lighthouse como indicador de salud estructural

Comencé estableciendo un baseline con Lighthouse, integrado directamente en Chrome DevTools. No buscaba una medalla ni el puntaje perfecto de 100, que a menudo es engañoso; buscaba patrones de fallo sistémico. Al ejecutar la auditoría en la página de resultados del Buscador de Médicos, el informe inicial me arrojó una serie de alertas que confirmaron mis sospechas: la velocidad de desarrollo había dejado algunas cicatrices en la integridad del DOM.

Interpreté los resultados no como métricas de rendimiento, sino como un mapa de prioridades. Lighthouse me señaló de inmediato problemas de estructura básica que son "fruta madura" para corregir, pero que impactan masivamente la experiencia. Identifiqué errores en la jerarquía de los elementos y en la definición de regiones que, aunque visualmente imperceptibles, para un algoritmo de asistencia son ruido blanco. Este primer escaneo fue vital para filtrar lo evidente y permitirme, más adelante, dedicar mi atención cognitiva a los problemas de usabilidad más profundos que ninguna máquina puede detectar.

#### Cirugía técnica con axe DevTools: El rigor de las WCAG

Para ir más allá de lo superficial, activé axe DevTools. Si Lighthouse es un chequeo general, axe es una biopsia. Me enfoqué específicamente en los componentes más críticos y dinámicos: los modales de agendamiento de citas y los selectores de fecha. Aquí es donde la mayoría de las plataformas de salud fallan, porque la interactividad suele romper la accesibilidad.

Al escanear el flujo de Laboratorio, descubrí violaciones críticas relacionadas con atributos ARIA faltantes y roles semánticos incorrectos. Por ejemplo, algunos elementos que funcionaban como botones para seleccionar horarios estaban marcados simplemente como `<div>`, lo que significa que un lector de pantalla nunca los anunciaría como interactivos. Mi decisión fue inmediata: documenté cada una de estas fallas en Jira, no como sugerencias estéticas, sino como bloqueadores funcionales. Asegurar que la lógica del DOM sea coherente con la interfaz visual no es un lujo, es el estándar mínimo de la industria para garantizar que un paciente con discapacidad visual pueda navegar la complejidad de una agenda médica sin ayuda externa.

#### Visualización espacial con WAVE: Errores con rostro y lugar

Utilicé la extensión WAVE para superponer una capa de diagnóstico visual sobre la interfaz del CM ABC. Hay algo muy potente en ver los iconos rojos de error y las alertas amarillas apareciendo directamente sobre el diseño en el que has trabajado tanto tiempo. Es el momento en que el diseño "perfecto" en Figma se enfrenta a la realidad de su implementación.

Gracias a WAVE, identifiqué errores de estructura que son difíciles de rastrear en el código puro pero que saltan a la vista en la interfaz. Detecté que varios formularios de contacto carecían de etiquetas `<label>` programáticamente vinculadas a sus campos, y que regiones fundamentales como `main` y `nav` no estaban correctamente definidas en el footer. Esta herramienta me facilitó enormemente la comunicación con el equipo de desarrollo; en lugar de enviarles un informe técnico árido, les mostré capturas de pantalla donde los errores "flotaban" sobre la página. Fue una forma de hacer tangible lo invisible y de acelerar la toma de conciencia sobre cómo una omisión en el código rompe la experiencia de usuario.

#### La calidez humana tras el atributo Alt

Uno de los hallazgos más reveladores durante esta fase fue la gestión del contenido no textual. Al auditar el carrusel de la homepage y los perfiles de los especialistas, detecté una falta generalizada de atributos `alt` descriptivos. Encontré fotos de médicos y banners de servicios preventivos que o no tenían descripción alguna, o usaban textos genéricos e inútiles como "imagen" o "foto_doctor_01".

Como diseñador, esto me dolió especialmente. Habíamos seleccionado esas imágenes para transmitir confianza, calidez y excelencia médica, pero para un usuario que depende de un lector de pantalla, ese esfuerzo era inexistente. Un paciente con discapacidad visual tiene el mismo derecho a saber que el médico que lo va a atender tiene una expresión profesional y humana. Ordené la implementación inmediata de textos alternativos concisos pero descriptivos: "Retrato del Dr. Smith, especialista en cardiología, en consultorio" es mucho más que una etiqueta técnica; es la traducción de la experiencia de marca al canal auditivo.

#### El conflicto entre estética y legibilidad: El ratio 4.5:1

La auditoría de contraste de color fue el punto donde mi rol como defensor de la marca y mi rol como defensor del usuario entraron en conflicto directo. Al analizar los textos de información secundaria y las etiquetas de los campos de los formularios, las herramientas confirmaron lo que temía: el uso de un gris claro sobre fondo blanco —muy elegante visualmente— no cumplía con el ratio mínimo de 4.5:1 exigido por las WCAG 2.1 AA para textos pequeños.

Fue una decisión estratégica difícil pero necesaria. Tuve que intervenir el Design System para oscurecer esos tonos. Algunos miembros del equipo argumentaron que se perdía la "sutileza" del diseño, pero mi postura fue firme: la estética del Centro Médico ABC nunca debe comprometer la claridad de la información clínica. Un usuario con baja visión o daltonismo no puede permitirse adivinar qué dice una instrucción de preparación para un estudio de laboratorio. Ajustamos la paleta para blindar la legibilidad, demostrando que el diseño senior es aquel que sabe cuándo sacrificar un matiz visual en favor de una certeza funcional.

#### Arquitectura semántica: El mapa invisible de los encabezados

Finalmente, me sumergí en la jerarquía de encabezados (H1 a H6). Descubrí que en varias páginas de servicios, el equipo de desarrollo había saltado niveles —pasando de un H1 directamente a un H3— o, peor aún, utilizaba etiquetas de encabezado solo por su tamaño de fuente y no por su valor organizativo. 

Expliqué al equipo que la estructura semántica es el "mapa" que utilizan los lectores de pantalla para permitir que el usuario salte rápidamente entre secciones. Si la jerarquía está rota, el usuario está perdido en un bosque de texto sin brújula. Reestructuramos el HTML de las páginas de los Centros de Alta Especialidad para asegurar que cada sección tuviera un encabezado lógico que reflejara la importancia real de la información. No era una limpieza de código; era la construcción de una infraestructura de navegación sólida.

> **Insight de Diseño:** Las herramientas automatizadas son el 30% del trabajo, pero son un 30% no negociable. Funcionan como un filtro de higiene técnica que nos permite, como diseñadores, dejar de discutir sobre errores de sintaxis y empezar a resolver problemas de usabilidad humana. Sin esta base sólida, cualquier prueba manual posterior sería un ejercicio de frustración.

A pesar de haber limpiado los errores estructurales más evidentes, una inquietud persistía mientras observaba el complejo flujo de agendamiento. Las herramientas automáticas me decían que los botones "existían", pero no podían decirme si un usuario sin mouse realmente podía alcanzarlos. Sabía que al cerrar el inspector de elementos y poner mis manos solo en el teclado, estaba a punto de descubrir si la elegancia de nuestra interfaz era, en realidad, una trampa de navegación para quienes no pueden usar un cursor. Aquella tarde, apagué el trackpad y me preparé para lo que sería la prueba de fuego: intentar agendar una cita usando únicamente la tecla Tab.

---

### Parte 3: Pruebas Manuales I Navegación por Teclado y Orden del Foco

#### El momento en que apagué el trackpad

Al cerrar el reporte de Lighthouse con un puntaje de accesibilidad aceptable, no sentí alivio, sino sospecha. Las herramientas automatizadas son excelentes para detectar errores de sintaxis o contrastes matemáticos, pero son incapaces de percibir la frustración humana. Una interfaz puede ser "válida" para un algoritmo y, al mismo tiempo, ser un laberinto infranqueable para un paciente que no puede usar un mouse. En ese momento, tomé una decisión drástica para blindar la operabilidad del sitio: apagué mi trackpad, alejé el ratón de mi escritorio y me propuse navegar la plataforma del Centro Médico ABC usando únicamente el teclado.

Mi razonamiento era simple: si un paciente con una discapacidad motriz temporal o permanente intentara agendar una cita, su única herramienta de interacción sería la tecla `Tab`. Como responsable del diseño, necesitaba validar si la elegancia visual que habíamos construido en Figma se traducía en una estructura lógica en el DOM, o si habíamos creado una "trampa de cristal" muy bonita pero inoperable. Esta transición de la auditoría automática a la manual no fue un trámite; fue el ejercicio de honestidad más crudo del proyecto. Me obligué a habitar la restricción para descubrir dónde se rompía la promesa de inclusión que habíamos definido en los principios de diseño.

#### El ritmo de la navegación 'Keyboard-Only'

Implementé un protocolo de navegación estricto basado en los criterios de la WCAG 2.1.1. Mi única interfaz con el sistema fueron cuatro comandos: `Tab` para avanzar, `Shift+Tab` para retroceder, y `Enter` o `Espacio` para activar elementos. Empecé por la Homepage, tratando de ignorar lo que mis ojos veían para concentrarme en lo que el foco me dictaba. 

Navegar de esta forma es como caminar a oscuras tocando las paredes: dependes enteramente de que el siguiente paso esté donde esperas que esté. Comprobé sistemáticamente cada enlace del header, cada botón de los banners y cada tarjeta de servicio. Mi objetivo era asegurar que el 100% de los elementos interactivos fueran alcanzables. En las secciones de contenido estático, el teclado debía fluir sin detenerse, pero en las áreas transaccionales, como el buscador de médicos, la precisión se volvía crítica. Si un elemento no recibía el foco, para un usuario de teclado ese elemento sencillamente no existía.

#### La auditoría del anillo de enfoque: Ver para navegar

Uno de los hallazgos más frustrantes ocurrió al analizar el "Focus Ring" o indicador visual de foco. En diseño, a veces cometemos el error de ocultar este anillo por "estética", pero para la accesibilidad, el indicador de foco es el cursor del usuario. Sin él, el paciente está navegando a ciegas.

Al recorrer la plataforma, identifiqué componentes donde el anillo de enfoque era prácticamente invisible debido a un contraste insuficiente. Descubrí etiquetas de campos y textos secundarios que no cumplían con el ratio de 4.5:1, lo que hacía que el indicador se perdiera contra el fondo claro. En otros casos, el foco simplemente desaparecía en ciertos botones del Design System. Esta fue una señal de alerta inmediata: si yo, con visión completa, tenía que esforzarme para ver dónde estaba el foco, un paciente con baja visión estaría completamente perdido. No podíamos permitir que la "limpieza visual" sacrificara la orientación del usuario; el foco debía ser obvio, contrastado y persistente.

#### El orden lógico frente al caos visual

Evalué el "Focus Order" (WCAG 2.4.3) para asegurar que la secuencia de tabulación siguiera el flujo visual de arriba a abajo y de izquierda a derecha. En la Homepage, esto funcionó bien, pero el verdadero desafío apareció en el Buscador de Médicos. 

Al tabular a través de los filtros de especialidad y ubicación, me encontré con que, en algunas instancias, el foco saltaba de forma errática. En lugar de pasar del primer filtro al segundo, el foco se movía a un elemento del footer y luego regresaba al centro de la pantalla. Esta desorientación es fatal para la carga cognitiva del usuario. Un orden de foco impredecible rompe el modelo mental de la página; es como si alguien te cambiara los muebles de lugar cada vez que parpadeas. Registré estas discrepancias como fallos críticos de usabilidad, exigiendo que el orden en el código reflejara exactamente la jerarquía visual que habíamos proyectado en los mockups.

#### Trampas de teclado y callejones sin salida

El proceso forense se volvió más complejo al probar los componentes dinámicos, como los modales y los selectores de fecha. Aquí es donde encontré las temidas "Keyboard Traps" (trampas de teclado). 

El caso más grave fue en el flujo de agendamiento. Al abrir un modal informativo sobre los requisitos de un estudio de laboratorio, descubrí que, una vez dentro, no podía salir de él usando solo el teclado. El foco se quedaba ciclando infinitamente entre los elementos internos del modal, pero el botón de "Cerrar" (la 'X' en la esquina superior) era inalcanzable o no respondía al comando de escape. Un usuario atrapado en un modal es un usuario que abandona la plataforma. Esta barrera no era solo un bug técnico; era un bloqueo total a la conversión y a la atención médica.

> **Insight de Diseño:** La accesibilidad no es un "feature" que se añade al final; es la integridad misma de la arquitectura. Si un usuario no puede salir de un modal con la tecla `Esc`, hemos fallado en la construcción básica de la libertad del usuario dentro de nuestro ecosistema digital.

#### El colapso del foco en el calendario de citas

El hallazgo que realmente me preocupó fue el comportamiento del calendario en el flujo de agendamiento de citas. Es el corazón transaccional del sitio y, sin embargo, era el punto más vulnerable. Al presionar `Tab` para entrar en el selector de fechas, el indicador de foco desaparecía por completo.

Estuve varios segundos presionando la tecla, viendo cómo la URL en la barra de estado cambiaba, pero en la pantalla no pasaba nada. El foco estaba ahí, en algún lugar del calendario, pero era invisible. El paciente tenía que "adivinar" en qué día o en qué horario estaba posicionado. Esta falta de retroalimentación visual transformaba un proceso de 30 segundos en una tarea imposible. Fue un error crítico que documenté con máxima prioridad: sin un foco claro en el calendario, el objetivo principal de la plataforma —agendar una cita— quedaba anulado para cualquier persona que no usara un mouse.

#### Navegando el menú: La prueba de los submenús

Finalmente, dediqué una sesión exhaustiva al menú de navegación global. Los submenús de "Servicios Médicos" y "Centros de Especialidad" son densos y complejos. Mi misión era verificar que se desplegaran correctamente y permitieran la navegación interna sin problemas.

Descubrí que, si bien el menú principal abría con `Enter`, navegar por los niveles secundarios requería una precisión técnica que el código original no soportaba bien. En algunos puntos, el teclado "saltaba" sobre secciones enteras de servicios, dejándolas ocultas para el usuario. También identifiqué "falsos interactivos": elementos como `divs` que tenían eventos de clic pero carecían de un `tabindex` adecuado. Para el navegador, estos elementos eran invisibles al teclado. Corregir esto no era opcional; era fundamental para asegurar que toda la oferta médica del Centro Médico ABC fuera accesible para todos, sin excepciones.

#### Reflexión sobre la arquitectura invisible

Estas pruebas manuales me recordaron que la verdadera usabilidad no se mide en Figma, sino en el DOM. Como diseñadores senior, nuestra responsabilidad no termina al entregar un archivo con capas ordenadas; termina cuando el código respeta la intención humana de la interfaz. 

La navegación por teclado revela la "arquitectura invisible" de un sitio web. Si esa arquitectura es sólida, el sitio se siente fluido y seguro; si es débil, el sitio se desmorona ante la primera restricción. El Design QA debe ser implacable en esta fase, porque cada error de foco o cada trampa de teclado es una puerta cerrada para un paciente. Al terminar esta auditoría, tenía una lista clara de remediaciones técnicas que debíamos implementar para que la plataforma fuera verdaderamente operable.


Haber despejado el camino para el teclado fue un avance enorme, pero mientras navegaba en silencio, me asaltó una duda más profunda: ¿qué estaría escuchando un paciente que no puede ver la pantalla? La estructura lógica estaba ahí, pero la semántica auditiva era un misterio que solo podía resolver activando el lector de pantalla. Sabía que al encender VoiceOver, estaba a punto de enfrentarme a una dimensión de la experiencia donde las imágenes desaparecen y solo queda la verdad del código.

---

### Parte 4: Pruebas Manuales Ii Lectores de Pantalla y Semántica Auditiva

#### El silencio absoluto de la interfaz visual

Haber despejado el camino para el teclado fue un avance enorme, pero mientras navegaba en silencio, me asaltó una duda más profunda: ¿qué estaría escuchando un paciente que no puede ver la pantalla? La estructura lógica estaba ahí, pero la semántica auditiva era un misterio que solo podía resolver activando el lector de pantalla. Sabía que al encender VoiceOver, estaba a punto de enfrentarme a una dimensión de la experiencia donde las imágenes desaparecen y solo queda la verdad del código. Como diseñador, entiendo que la accesibilidad no es solo operabilidad; es la capacidad de percibir el contenido sin la vista. Si el código no comunicaba la misma jerarquía y claridad que mi interfaz visual en Figma, el proyecto estaba incompleto.

Cerré los ojos frente al monitor. Ese es el ritual de verdad. No se trata de mirar la pantalla mientras escuchas la voz sintética; se trata de intentar completar una tarea —como agendar una cita— confiando únicamente en lo que el software te dice. En ese momento, la interfaz dejó de ser un conjunto de colores y tipografías para convertirse en una corriente de datos. Mi misión era realizar una auditoría forense para detectar si el orden de lectura coincidía con el orden visual y si los elementos interactivos eran identificados correctamente por el software. Si un paciente con discapacidad visual no podía entender dónde estaba o qué seguía, la plataforma le estaba cerrando la puerta del hospital.

#### La auditoría forense con VoiceOver y NVDA

Para esta fase, no me conformé con una sola herramienta. Utilicé VoiceOver en macOS y NVDA en Windows para navegar por los flujos críticos: la Homepage, el Buscador de Médicos y el proceso de Agendamiento. Mi razonamiento fue técnico y pragmático: cada lector de pantalla interpreta el DOM (Document Object Model) de forma ligeramente distinta, y necesitaba asegurar una experiencia consistente en ambos ecosistemas. 

Navegar por el Buscador de Médicos fue revelador. Mientras mis dedos se movían por las teclas de comando, evaluaba si el lector anunciaba el contenido de forma coherente. Me encontré con momentos de tensión donde el lector se perdía en elementos decorativos o saltaba bloques de información vital. Esta no era una simulación superficial; era un escaneo de la arquitectura invisible. Descubrí que, en algunos puntos, el orden de lectura se volvía errático, obligando al usuario a escuchar información secundaria antes de llegar al nombre del médico o a su especialidad. Cada uno de estos hallazgos fue una señal de que debíamos refinar la estructura semántica para que la jerarquía auditiva fuera tan eficiente como la visual.

#### El vacío comunicativo en los formularios de agendamiento

Uno de los puntos más críticos y frustrantes de la auditoría ocurrió en los formularios de agendamiento y contacto. Al llegar a los campos de entrada de datos, el lector de pantalla emitía un sonido seco y anunciaba: "Cuadro de edición en blanco". Nada más. Ni una instrucción, ni un contexto. Para un paciente que intenta ingresar su número de teléfono o seleccionar una especialidad, este es un muro infranqueable. 

Identifiqué que las etiquetas `<label>` no estaban asociadas programáticamente a sus campos de entrada `<input>`. Faltaba la conexión vital entre los atributos `for` e `id`. Sin esta asociación, el lector de pantalla no tiene forma de saber que ese cuadro de texto pertenece al "Nombre del paciente". Documenté esta desconexión con una urgencia absoluta. No podíamos permitir que el acceso a la salud dependiera de que un usuario adivinara qué información debía escribir en un campo mudo. La remediación técnica que exigí fue clara: cada etiqueta debía estar blindada programáticamente para que, al recibir el foco, el usuario escuchara exactamente qué dato se le estaba solicitando, eliminando cualquier rastro de ambigüedad en el proceso.

#### Evitando el eco del "Botón, botón"

Otro hallazgo que requirió una intervención inmediata fue la falta de nombres accesibles en elementos interactivos clave. En el perfil del médico, me encontré con un botón crítico que contenía únicamente un icono de calendario. Visualmente, el mensaje era claro: "Agendar Cita". Sin embargo, para el lector de pantalla, ese elemento era simplemente un "Botón". 

Esta es una trampa común en el diseño moderno: priorizamos la limpieza visual y el uso de iconos, olvidando que los iconos son mudos para quien no los ve. Si el usuario escucha "Botón, botón" mientras navega por una lista de resultados, su flujo de conversión se detiene en seco por falta de información. Mi decisión fue implementar el uso de `aria-label` y textos internos descriptivos que solo fueran captados por tecnologías asistivas. Mi objetivo era que el usuario escuchara una acción clara y con contexto: "Agendar Cita con la Dra. Elena García". Al dotar a estos botones de un nombre accesible, transformé un obstáculo genérico en una invitación a la acción, asegurando que la funcionalidad fuera equitativa para todos.

#### La urgencia de las regiones dinámicas con ARIA Live

La interactividad moderna de la web presenta un reto mayor para la accesibilidad: ¿cómo sabe un usuario que algo cambió en la página si no puede ver la actualización visual? Durante las pruebas del buscador, noté que al aplicar un filtro o al cometer un error en un formulario, la interfaz mostraba mensajes de advertencia, pero el lector de pantalla permanecía en silencio. El paciente seguía navegando, ajeno al hecho de que su búsqueda no había arrojado resultados o que un campo obligatorio estaba vacío.

Para resolver esto, audité el uso de las regiones dinámicas utilizando atributos `aria-live`. Me enfoqué especialmente en el `aria-live="assertive"` para los mensajes de error críticos. Mi razonamiento fue que, si un paciente comete un error que bloquea el envío del formulario, el lector de pantalla debe interrumpir cualquier lectura actual para anunciar el problema de inmediato. Probé esto repetidamente: provocaba un error de validación y esperaba a que la voz sintética me dijera: "Error: Por favor, ingrese un número de teléfono válido". Sin esta configuración, el usuario podría intentar enviar el formulario una y otra vez sin entender por qué la página no avanzaba. Esta capa de comunicación en tiempo real es lo que separa una interfaz funcional de una interfaz accesible.

#### La verdad en los atributos Alt y la jerarquía de imágenes

La revisión de los textos alternativos (`alt`) fue un ejercicio de semántica pura. Inspeccioné meticulosamente las fotos de los médicos y los banners de los servicios. Me encontré con el error clásico: imágenes informativas con atributos `alt` genéricos como "foto" o "doctor". Para un usuario de VoiceOver, esto no aporta ningún valor; es solo ruido. 

Redefiní el criterio para estos textos. Una foto de perfil en el Centro Médico ABC no es solo un adorno; es una credencial de confianza. Instruí que el `alt` debía ser específico: "Dra. Elena García, Especialista en Cardiología". De esta forma, el contenido visual se traduce en información útil que refuerza la decisión del paciente. Por otro lado, identifiqué numerosas imágenes puramente decorativas que el lector intentaba describir innecesariamente. En estos casos, mi orden fue radical: aplicar un `alt=""` vacío. Esto le indica al software que ignore la imagen, permitiendo que el usuario se concentre en el contenido que realmente importa, limpiando la experiencia auditiva de elementos irrelevantes.

#### Navegando por el índice invisible de encabezados

Para un usuario que depende de un lector de pantalla, los encabezados (H1, H2, H3) no son solo estilos tipográficos; son el índice de la página. Durante la auditoría, utilicé la navegación rápida por encabezados para saltar entre secciones de la Homepage y las páginas de Especialidad. Fue ahí donde detecté que la jerarquía era inconsistente: saltábamos de un H1 a un H3, o peor aún, secciones enteras carecían de un título que las identificara en el árbol de accesibilidad.

Si la jerarquía de encabezados está rota, la orientación se pierde. El usuario no puede "escanear" la página con el oído para encontrar lo que busca. Me aseguré de que cada página tuviera un título único y descriptivo, y que las secciones como "Consejos de Salud" estuvieran correctamente anidadas. Esta estructura permite que un paciente veterano, que ya sabe lo que busca, pueda saltar directamente al contenido relevante sin tener que escuchar toda la navegación global cada vez que carga una página. Es una cuestión de eficiencia y respeto por el tiempo del usuario.

#### El microcopy como herramienta de accesibilidad cognitiva

Finalmente, analicé la calidad de los mensajes de error y las instrucciones desde una perspectiva de accesibilidad cognitiva. Durante las pruebas, me topé con mensajes genéricos como "Error en el campo". Para alguien que no ve el contexto visual —el recuadro rojo alrededor del input—, ese mensaje es un callejón sin salida. ¿Qué campo? ¿Qué tipo de error?

Exigí que el microcopy fuera quirúrgico y orientativo. Cambiamos esos avisos vagos por instrucciones precisas: "Por favor, ingrese un número de teléfono de 10 dígitos". Al ser específicos, permitimos que la remediación sea inmediata y autónoma. El usuario escucha el error, entiende qué hizo mal y sabe exactamente cómo corregirlo. Esta claridad reduce la carga cognitiva y la ansiedad, factores cruciales cuando estamos hablando de una plataforma de salud donde el usuario ya puede estar bajo una situación de estrés personal. La verdadera excelencia de un Product Designer se demuestra aquí: en la robustez de esta arquitectura invisible que sostiene la experiencia para todos, sin excepción.

> **Insight Senior:** El diseño visual es solo la punta del iceberg. La verdadera interfaz es el código que entregamos. Si ese código no tiene semántica, estamos diseñando solo para una parte de la población. La auditoría con lectores de pantalla no es un trámite de QA; es el momento en que validamos si nuestra arquitectura de información es realmente sólida o si es solo un decorado visual que se desmorona cuando apagas la pantalla.


Al terminar de escuchar la plataforma a través de VoiceOver, me quedó claro que la accesibilidad no se resuelve con un solo ajuste, sino con una lista exhaustiva de remediaciones técnicas. Tenía en mis manos un mapa detallado de barreras que iban desde lo crítico hasta lo sutil, y sabía que el siguiente gran reto no era solo corregirlas, sino documentarlas de una forma tan clara que el equipo de desarrollo no tuviera margen de duda. La tensión ahora se trasladaba a la mesa de priorización: ¿cómo íbamos a articular este informe forense para que cada bug de accesibilidad fuera tratado con la misma urgencia que una caída del servidor?

---

### Parte 5: Documentación Forense y Reporte de Barreras

#### La traducción del caos sensorial a la evidencia técnica

Al terminar las sesiones de navegación con VoiceOver y NVDA, me encontré en un estado de agotamiento cognitivo que solo quienes auditan accesibilidad comprenden. Tenía cuadernos llenos de notas sobre focos que desaparecían, etiquetas que no decían nada y un flujo de agendamiento que, para un usuario ciego, era un laberinto sin salida. Pero sabía que, si me presentaba ante el equipo de desarrollo solo con "sensaciones" o quejas vagas sobre la experiencia, mis hallazgos terminarían en el fondo del backlog, etiquetados como "mejoras estéticas" de baja prioridad.

Mi razonamiento fue puramente estratégico: para que la accesibilidad sea remediada, debe dejar de ser una opinión de diseño y convertirse en un fallo técnico irrefutable. Decidí que mi labor no terminaba en el hallazgo, sino en la construcción de un expediente forense. Cada barrera detectada debía ser documentada con tal precisión que la corrección fuera la única salida lógica para el desarrollador. Pasé del caos de la prueba al orden del reporte, asumiendo que mi rol en este punto era el de un traductor: debía convertir la frustración de un usuario con discapacidad en un ticket de JIRA que hablara el lenguaje de los estándares internacionales.

#### Anatomía de un ticket forense en JIRA

Integré el flujo de reporte directamente en el sistema de gestión del equipo, tratando cada barrera no como un comentario al aire, sino como un **bug de diseño** o un **ajuste de UX** formal. No permití que la accesibilidad corriera por un carril separado; debía competir por recursos y atención con la misma seriedad que un error en la base de datos. Para lograrlo, diseñé una estructura de ticket que no dejara margen de duda, asegurando que el equipo de desarrollo tuviera una visión clara de la deuda técnica que estábamos acumulando.

Para cada incidencia en JIRA, apliqué una metodología de reporte que incluía cuatro pilares fundamentales:

*   **Descripción técnica del problema:** No escribía "el botón no se ve"; escribía "el indicador de foco visual es inexistente en el componente de selección de horario".
*   **Pasos exactos para la reproducción:** Por ejemplo: "1. Activar navegación por teclado. 2. Tabular hasta el calendario de agendamiento. 3. Intentar seleccionar una fecha usando las teclas de flecha". Si el desarrollador no podía replicar el fallo en tres segundos, el ticket perdía credibilidad.
*   **Tecnología asistiva afectada:** Especificaba si el error ocurría en VoiceOver (macOS), NVDA (Windows) o exclusivamente en navegación por teclado, evitando que se desperdiciara tiempo buscando el error en el entorno equivocado.
*   **Criterio WCAG 2.1 AA afectado:** Este era el blindaje legal y técnico. Al citar, por ejemplo, el **Criterio 2.1.1 (Teclado)** o el **1.4.3 (Contraste Mínimo)**, le estaba diciendo al equipo que esto no era un capricho visual, sino una violación de una norma de cumplimiento internacional.

> **Insight Senior:** Sin el respaldo del criterio WCAG, un bug de accesibilidad es solo una sugerencia. Al vincular cada fallo a una regla específica, transformas la discusión: ya no debatimos si el diseño "se ve bien", sino si el producto es legalmente funcional y éticamente responsable.

#### El video como prueba irrefutable y la conexión con Figma

Para eliminar cualquier ambigüedad, utilicé herramientas de captura de video para grabar sesiones cortas de Loom. No hay argumento técnico que resista un video de 30 segundos donde se ve cómo el foco del teclado desaparece por completo al abrir un modal de "Aviso de Privacidad", dejando al usuario atrapado en una "keyboard trap". Estos videos se convirtieron en la prueba de cargo que acompañaba a cada ticket de JIRA.

Además, realicé capturas de pantalla anotadas con flechas y cajas de texto quirúrgicas, señalando exactamente dónde el código estaba fallando. Por ejemplo, marcaba la falta de atributos `alt` en las fotos de los médicos o la ausencia de etiquetas `<label>` asociadas programáticamente a sus `<input>` en el formulario de contacto. Mi labor fue poner frente a frente la implementación fallida y el estado ideal que yo mismo había definido en los mockups de alta fidelidad en Figma. Al vincular el bug con el diseño original, le recordaba al equipo que la semántica y el orden de foco (`tabindex`) ya estaban contemplados en la visión aprobada; el ticket era simplemente el mapa para regresar a ese estándar de calidad.

#### La auditoría de zoom y el colapso del reflow

Un punto crítico de mi documentación fue la respuesta de la interfaz ante el aumento de tamaño. Realicé pruebas técnicas aumentando el zoom del navegador al **200%** para verificar el comportamiento del **reflow**. Fue un momento de tensión: en varias secciones de la plataforma del Centro Médico ABC, el contenido empezó a superponerse o a generar scroll horizontal, lo cual es una violación directa de la usabilidad para personas con baja visión.

Documenté meticulosamente estos casos de borde donde los botones de "Agendar Cita" se volvían inalcanzables o el texto de los artículos de salud se cortaba. No me limité a decir que "se rompía"; capturé los puntos de quiebre específicos y propuse ajustes en el CSS para asegurar que los elementos se reordenaran verticalmente sin perder funcionalidad. Esta auditoría de zoom fue vital para garantizar que la plataforma no solo fuera accesible para quienes usan lectores de pantalla, sino también para la gran población de adultos mayores que simplemente necesitan un texto más grande para navegar con autonomía.

#### El Informe de Accesibilidad como manifiesto de calidad

Toda esta evidencia forense culminó en la creación del **Informe de Pruebas de Accesibilidad**. Este documento no fue un simple listado de errores; lo estructuré como un manifiesto de calidad y un compromiso humano del Centro Médico ABC. Incluí desde la metodología híbrida utilizada (revisión manual experta combinada con herramientas automáticas como WAVE y axe DevTools) hasta una clasificación de severidad que permitiera al negocio tomar decisiones informadas:

1.  **Problemas Críticos:** Aquellos que bloquean totalmente la tarea (ej. contraste insuficiente en el botón de pago o navegación por teclado rota en agendamiento).
2.  **Problemas Mayores:** Dificultan significativamente la comprensión (ej. falta de atributos `alt` descriptivos en imágenes informativas de servicios).
3.  **Problemas Menores:** Detalles que mejoran la fluidez, como mensajes de error que no usan `aria-live` para ser anunciados de inmediato.

Esta tripartición fue mi estrategia para no saturar al equipo de desarrollo. No les pedí que arreglaran todo de golpe; les di una hoja de ruta para atacar primero lo que realmente impedía el acceso a la salud.

#### Reflexión Senior

Documentar accesibilidad es, en última instancia, un acto de responsabilidad ética. Como diseñadores, a menudo nos perdemos en la estética de los píxeles, pero un reporte forense bien ejecutado tiene el poder de educar a toda una organización. Al entregar este nivel de detalle, transformé la percepción del equipo: la accesibilidad dejó de ser un "trámite de cumplimiento" para convertirse en una cultura de excelencia técnica. Cada atributo ARIA o etiqueta de formulario correctamente documentada es una puerta que abrimos para un paciente que, de otro modo, se quedaría fuera de su propia gestión de salud.

***

**PRIORIZACIÓN ESTRATÉGICA Y ALINEACIÓN CON STAKEHOLDERS**

Tener el informe forense en mis manos era solo la mitad de la batalla; ahora venía la parte más política y delicada del proceso. Al ver la lista de problemas críticos, supe que algunos requerirían cambios estructurales en el código que podrían impactar los tiempos de entrega finales. La tensión se trasladó de la pantalla a la sala de juntas: ¿cómo convencer a los stakeholders del Centro Médico ABC de que detenerse a corregir el orden de foco era tan vital como lanzar la nueva funcionalidad de resultados médicos?

---

### Parte 6: Priorización Estratégica y Alineación con Stakeholders

#### La fricción entre el código y la inclusión

El informe de accesibilidad que tenía sobre la mesa no era una lista de sugerencias estéticas; era un diagnóstico de exclusión sistémica que ponía en riesgo la integridad del lanzamiento. Al terminar la auditoría técnica, me encontré con una realidad incómoda: teníamos decenas de hallazgos que, de no atenderse, impedirían que una parte significativa de los pacientes del Centro Médico ABC pudieran gestionar su salud de forma autónoma. Sin embargo, el cronograma de desarrollo estaba en su punto de máxima presión, con el equipo de ingeniería cerrando los últimos sprints antes del paso a producción.

Sabía que si presentaba el informe simplemente como un listado de "errores a corregir", la respuesta natural del equipo sería la resistencia por falta de tiempo. Como responsable de la experiencia, mi reto no era solo señalar lo que estaba mal, sino **gestionar la viabilidad técnica frente a la empatía clínica**. No podíamos permitir que una institución de excelencia médica tuviera una puerta digital que no se abriera para todos. Necesitaba transformar la conversación de una validación técnica de cumplimiento legal a una prioridad de excelencia operativa. Convoqué a una sesión de emergencia con el Product Owner y el Líder Técnico; el objetivo no era discutir píxeles, sino decidir a quién íbamos a dejar entrar y a quién no.

#### El informe forense como herramienta de negociación

Lideré la sesión de revisión utilizando el informe de pruebas de accesibilidad como nuestra única fuente de verdad. Para que los stakeholders visualizaran el impacto real, no me limité a leer los criterios de la **WCAG 2.1 AA**. Preparé una serie de grabaciones de pantalla navegando por el entorno de staging utilizando únicamente el teclado y un lector de pantalla (**VoiceOver**). El impacto fue inmediato. Cuando el equipo vio cómo el foco desaparecía por completo al intentar seleccionar una fecha en el calendario de agendamiento, o cómo el lector de pantalla guardaba silencio absoluto ante un botón crítico de "Confirmar Cita" porque carecía de una etiqueta de texto discernible, la abstracción técnica desapareció.

Presenté el desglose de los hallazgos clasificándolos rigurosamente por su nivel de impacto. Fui muy claro: los problemas de **Contraste de Color Insuficiente** (WCAG 1.4.3) y la **Navegación por Teclado Incompleta** (WCAG 2.1.1) no eran negociables. Mostré ejemplos específicos, como el texto gris claro sobre fondo blanco en las descripciones de servicios, que presentaba un ratio inferior al 4.5:1 requerido. Argumenté que esto no solo afectaba a personas con baja visión, sino a cualquier paciente intentando leer el sitio bajo la luz del sol o en un dispositivo con poco brillo. En ese momento, la accesibilidad dejó de ser un "extra" para convertirse en tickets de **Jira** con un impacto directo en la tasa de conversión y en la satisfacción del paciente.

#### La matriz de decisión: impacto vs. esfuerzo

Una vez que el equipo comprendió la gravedad, pasamos a la fase más técnica de la reunión: la aplicación de una matriz de priorización. Trabajé codo a codo con el Líder Técnico para evaluar cada hallazgo del informe frente a los **story points** que requeriría su corrección. Fue un ejercicio de realismo puro. Por ejemplo, corregir la estructura semántica de los formularios de agendamiento para asegurar que las etiquetas `<label>` estuvieran programáticamente asociadas a sus `<input>` mediante los atributos `for` e `id` era una tarea de bajo esfuerzo técnico pero de un impacto masivo para la accesibilidad.

> **Insight Estratégico:** En una negociación de este tipo, el diseñador debe estar dispuesto a sacrificar el pulido visual en favor de la integridad funcional. Preferí dejar para una segunda fase el refinamiento de las animaciones de transición si eso significaba liberar tiempo de desarrollo para blindar el orden de tabulación lógico en el buscador de médicos. La accesibilidad es la base de la pirámide; la estética es la cima. Sin la base, la cima se desploma.

Clasificamos cada punto del informe L2 en un cuadrante de decisión. Los problemas críticos, como la falta de indicadores de foco visuales, fueron marcados como **Prioridad 1 (Bloqueantes)**. Si un usuario no puede ver dónde está situado mientras navega con el teclado, el sitio es, por definición, inoperable. Logré que el equipo aceptara que estos cambios fueran requisitos de salida obligatorios para el entorno de producción, incluso si eso implicaba mover algunas funcionalidades secundarias al backlog de mantenimiento.

#### Defendiendo los bloqueantes en el flujo de salud

Mi postura más firme fue durante la revisión del flujo de agendamiento de citas para laboratorio y estudios. El informe revelaba que los mensajes de error de validación eran visibles visualmente pero no se anunciaban a los lectores de pantalla. Expliqué que para un paciente con discapacidad visual, llenar un formulario y que este no avance sin saber por qué es una de las experiencias más frustrantes y alienantes posibles. Defendí la implementación de atributos **ARIA** como `aria-live="assertive"` y `aria-describedby` como una necesidad médica, no solo técnica.

Argumenté que un formulario de agendamiento sin etiquetas correctamente asociadas es un callejón sin salida. Si el usuario no recibe feedback inmediato de que un campo es obligatorio o de que el formato del teléfono es incorrecto, simplemente abandonará la plataforma. Al conectar estos fallos técnicos con la pérdida potencial de citas médicas y el aumento de llamadas al call center, el Product Owner entendió que la accesibilidad era también una cuestión de eficiencia económica. Conseguí el compromiso de que el **orden de foco lógico** (WCAG 2.4.3) fuera la columna vertebral de la navegación asistida en toda la plataforma, garantizando que el usuario nunca quedara atrapado en una "trampa de teclado" (keyboard trap) dentro de los modales de especialidades.

#### Humanizando la técnica mediante las pruebas de usuario (UAT)

Para cerrar cualquier brecha de duda, integré los resultados de las **Pruebas de Aceptación de Usuario (UAT)** que habíamos realizado en paralelo. No usé solo datos de auditoría; usé historias reales. Recordé al equipo el caso de un usuario durante las sesiones de observación que dudó sistemáticamente al intentar filtrar resultados en el buscador de médicos. Gracias a mis notas de observación cualitativa, pude demostrar que su confusión no era por falta de pericia, sino porque el indicador de foco no era lo suficientemente visible en los checkboxes de "Campus" y "Seguro Médico".

Este cruce de datos fue el argumento definitivo. Cuando tienes una auditoría técnica que dice que el contraste es bajo y, simultáneamente, tienes un video de un usuario real entrecerrando los ojos para leer una etiqueta, la resistencia de los stakeholders desaparece. La evidencia del comportamiento real validó cada uno de mis hallazgos de accesibilidad. Logré que el equipo viera que no estábamos arreglando "bugs de diseño", sino resolviendo problemas de usabilidad que afectaban a personas de carne y hueso. Esta alineación estratégica permitió que la accesibilidad se integrara de forma orgánica en los criterios de aceptación de las historias de usuario restantes.

#### El pacto de remediación progresiva y cultura inclusiva

Al final de la sesión, no solo obtuvimos una lista de correcciones, sino un compromiso formal para alcanzar el **Nivel AA** de forma progresiva. Entendí que no podíamos resolver absolutamente todo antes del día uno sin descarrilar el cronograma global, así que gestionamos las expectativas sobre los hallazgos de impacto menor. Por ejemplo, la ausencia del idioma principal en el documento (`<html lang="es">`) o el refinamiento de ciertos anuncios de `aria-live` no críticos se movieron al backlog de mantenimiento evolutivo para la semana posterior al lanzamiento.

Mi objetivo final era instaurar una cultura donde la accesibilidad no fuera una revisión de último minuto, sino un principio de diseño fundamental presente desde la concepción de cada componente. Definimos una hoja de ruta que trascendía el lanzamiento inicial, asegurando que el equipo de QA incluyera pruebas de teclado y lectores de pantalla en sus flujos de trabajo regulares. Al cerrar la reunión, sentí que habíamos logrado algo más que una lista de tareas: habíamos blindado la promesa de excelencia del Centro Médico ABC, asegurando que su plataforma digital fuera un reflejo fiel de su compromiso con el cuidado universal de la salud.


Con la hoja de ruta de prioridades aceptada y los bloqueantes claramente identificados en el backlog de desarrollo, la presión se trasladó a la ejecución técnica. Sin embargo, pronto descubrí que definir la solución en un informe era muy distinto a implementarla en un sistema vivo con limitaciones de rendimiento y herencia de código. El siguiente desafío me obligó a bajar a la trinchera del código junto a los desarrolladores, donde una decisión de diseño aparentemente simple sobre un componente de calendario desataría un conflicto inesperado entre la estética visual y la semántica del HTML.

---

### Parte 7: Remediación Colaborativa y Soporte Técnico

#### La trinchera del código: Donde el diseño se vuelve real o se rompe

Una vez que las prioridades estuvieron sobre la mesa y el equipo de liderazgo aceptó que no podíamos lanzar una plataforma de salud que excluyera a pacientes con discapacidades, la batalla se trasladó del informe de estrategia a las líneas de código. Como responsable del diseño, sabía que mi trabajo no terminaba entregando un documento de "qué está mal"; mi verdadera responsabilidad empezaba en el momento en que me sentaba con los desarrolladores frontend para descifrar el *cómo* arreglarlo sin comprometer el rendimiento ni la arquitectura que ya habían construido.

Pasar de la teoría de las WCAG 2.1 AA a la remediación técnica en un entorno de **Staging** es un baño de realidad. No se trata solo de cambiar un color en Figma; se trata de entender por qué un componente de búsqueda de médicos, que se ve impecable visualmente, es un absoluto silencio para alguien que usa un lector de pantalla. Me convertí en el "guardián del diseño" en las trincheras, asegurando que cada ajuste técnico respetara la intención original de la experiencia, pero blindándola con una capa de accesibilidad que hasta ese momento era invisible para el equipo de desarrollo.

#### La semántica del silencio: Del buscador de médicos a los atributos ARIA

El primer gran desafío técnico fue el buscador de médicos. Es el corazón de la plataforma del Centro Médico ABC y, por ende, el componente más complejo. Al auditarlo con **NVDA** y **VoiceOver**, descubrimos que, aunque un usuario visual veía cómo aparecían los resultados dinámicamente, un usuario con discapacidad visual no recibía ninguna notificación de que la página había cambiado. 

Trabajé codo a codo con los desarrolladores para implementar **ARIA roles** y estados dinámicos. Mi razonamiento fue claro: si el usuario interactúa con un filtro de especialidad, el lector de pantalla debe anunciar que los resultados se están actualizando.
*   Implementamos `aria-live="polite"` en el contenedor de resultados para que los cambios se anunciaran sin interrumpir la navegación actual del usuario.
*   Configuramos atributos `aria-expanded` en los menús desplegables de los filtros. Me aseguré de supervisar que el código reflejara fielmente si el filtro estaba abierto o cerrado, permitiendo que el usuario entendiera la estructura de la interfaz sin necesidad de verla.
*   Para los componentes más complejos, como el carrusel de la homepage, definimos etiquetas `aria-label` descriptivas que explicaban no solo qué era la imagen, sino qué acción realizaría el usuario al hacer clic.

> **Insight Senior:** En accesibilidad, menos es más. No saturamos el código con atributos ARIA innecesarios; solo usamos los quirúrgicamente precisos para que la tecnología de asistencia pudiera interpretar la lógica de interacción que yo había diseñado originalmente en los flujos de usuario.

#### Limpieza forense: Sustituyendo "divs" por significado real

Durante el soporte en la resolución de bugs, identifiqué un patrón técnico recurrente que estaba matando la accesibilidad: el uso excesivo de `divs` con eventos de clic. En el diseño, un elemento puede parecer un botón, pero si en el HTML está implementado como un `div` con un `onClick`, un usuario que navega solo con teclado jamás podrá activarlo.

Inicié un proceso forense de auditoría del HTML en el entorno de staging. Mi postura fue innegociable: si un elemento desencadena una acción (como abrir un modal de contacto), debe ser un `<button>`; si navega a otra sección (como el perfil de un médico), debe ser un `<a>`. 
1.  **Diagnóstico:** Identificamos más de 15 instancias donde elementos críticos de navegación eran invisibles para el foco del teclado.
2.  **Remediación:** Supervisé la sustitución de estos elementos genéricos por **Semantic HTML**. 
3.  **Resultado:** Esto no solo resolvió el problema de accesibilidad de forma nativa (sin necesidad de hacks de JavaScript), sino que también mejoró el SEO y la robustez del código. Un botón semántico ya incluye por defecto la capacidad de ser activado con la tecla `Enter` o `Espacio`, algo que el equipo de desarrollo agradeció al reducir la cantidad de lógica manual que debían programar.

#### El anillo de foco: Devolviendo la brújula al usuario de teclado

Uno de los bugs visuales más comunes que reporté en **Jira** fue la ausencia del indicador de foco (`:focus`). Muchos desarrolladores, por una herencia de estilos de "reset" agresivos, habían eliminado el contorno azul por defecto del navegador porque "se veía mal". Para un usuario que navega con la tecla `Tab`, eliminar ese anillo es como quitarle el cursor del mouse a un usuario convencional: se pierde por completo.

Me encargué de diseñar y ajustar directamente en el CSS una serie de estilos específicos para el estado de foco que fueran consistentes con el **Design System** del CM ABC. 
*   **Contraste garantizado:** Definimos un anillo de foco con un grosor de 2px y un color de alto contraste (nuestro azul institucional ajustado) que fuera visible sobre cualquier fondo, cumpliendo estrictamente con los criterios de la WCAG 2.1 AA.
*   **Consistencia visual:** Me aseguré de que este indicador no solo apareciera en botones, sino en todos los campos de formulario del portal del paciente y en los enlaces de los artículos de salud. 

Ver a un desarrollador navegar por la plataforma usando solo la tecla `Tab` y ver cómo el foco saltaba de forma lógica y visible por cada sección fue uno de los momentos de validación más satisfactorios del proceso de **Design QA**.

#### Rompiendo las jaulas: Gestión del foco y Keyboard Traps

Al probar los modales de agendamiento de citas, nos encontramos con un problema crítico: las "Keyboard Traps" (trampas de teclado). Un usuario podía abrir el modal con el teclado, pero una vez dentro, al seguir presionando `Tab`, el foco salía del modal y se perdía en el contenido que estaba detrás (y que no era visible). El usuario quedaba atrapado, incapaz de cerrar el modal o de completar la cita.

Colaboré con el equipo técnico para implementar una solución de **Focus Management** mediante JavaScript. 
*   **Focus Trap:** Creamos una lógica que mantenía el foco "atrapado" en un bucle dentro del modal mientras este estuviera abierto. Al llegar al último elemento (el botón de "Cancelar"), el siguiente `Tab` devolvía al usuario al primer elemento (el botón de "Cerrar" o el primer campo del formulario).
*   **Restauración del foco:** Definimos que, al cerrar el modal, el foco debía ser devuelto exactamente al elemento que lo originó. Esto evitaba que el usuario tuviera que empezar a navegar desde el principio de la página cada vez que cerraba una ventana emergente.

Esta atención al detalle técnico es lo que separa un diseño que "se ve bien" de un producto que realmente funciona para todos.

#### El juez imparcial: Validación con herramientas de inspección

Durante nuestras sesiones de **Design QA**, utilizamos herramientas de inspección del navegador como jueces imparciales para validar las correcciones en tiempo real. No se trataba de mi opinión contra la del desarrollador; se trataba de lo que dictaban **WAVE**, **axe DevTools** y **Lighthouse**.

Abríamos el entorno de staging y ejecutábamos una auditoría rápida en cada página clave:
*   **WAVE:** Nos permitía detectar visualmente si faltaban textos `alt` en las imágenes del carrusel o si la jerarquía de encabezados (H1 a H6) era ilógica. Si el buscador de médicos tenía dos H1, era un error que corregíamos en el acto.
*   **axe DevTools:** Fue nuestra herramienta quirúrgica para encontrar violaciones de contraste de color en estados complejos, como los mensajes de éxito o error dentro de los formularios.
*   **Lighthouse:** Lo usamos como métrica de salud general. Ver cómo el puntaje de accesibilidad subía de un 65 a un 95 después de nuestras sesiones de remediación fue el mejor indicador de que íbamos por el camino correcto.

#### Autonomía en el error: Estados de formulario accesibles

Finalmente, nos enfocamos en el flujo de agendamiento, donde los errores de validación eran una barrera de frustración. Tradicionalmente, cuando un campo fallaba, solo aparecía un texto rojo. Para un usuario de lector de pantalla, esto era invisible; el sistema simplemente no lo dejaba avanzar y él no sabía por qué.

Asesoré técnicamente en la implementación de `aria-describedby`. Configuramos la lógica para que cada campo de entrada estuviera vinculado programáticamente a su mensaje de error. 
*   **El resultado:** Cuando el foco llegaba a un campo con error (por ejemplo, un formato de fecha incorrecto), el lector de pantalla no solo anunciaba el nombre del campo, sino que leía automáticamente la instrucción de error: *"Fecha de nacimiento, error: el formato debe ser día, mes y año"*. 
*   **Impacto:** Esto transformó una experiencia frustrante en una interacción guiada, devolviéndole la autonomía al paciente para corregir sus datos sin ayuda externa.

#### Reflexión: La ética del píxel y el código

A menudo se piensa que el soporte en la resolución de bugs es una tarea administrativa o secundaria. Para mí, es el momento donde el diseño se valida realmente. Un diseño que no puede ser implementado de forma accesible es un diseño fallido. Mi papel en esta fase no fue solo señalar errores, sino ser un socio del equipo técnico, traduciendo la empatía por el usuario en requisitos técnicos viables. La excelencia del Centro Médico ABC no reside solo en sus instalaciones físicas, sino en la minuciosidad con la que cuidamos que cada paciente, sin importar cómo acceda a la web, reciba la misma calidad de atención.


Con la estructura semántica limpia, los indicadores de foco visibles y la gestión de errores blindada, el sistema en Staging finalmente se sentía sólido y coherente. Sin embargo, la verdadera prueba de fuego no vendría de las herramientas automatizadas, sino de una revisión final exhaustiva donde intentaríamos "romper" la plataforma una última vez antes de dar el visto bueno para el despliegue. Fue en esa última ronda de pruebas manuales donde descubrí que, a pesar de todo nuestro esfuerzo técnico, todavía quedaba un rincón oscuro en el flujo del portal del paciente que amenazaba con descarrilar la certificación de accesibilidad que tanto habíamos perseguido.

---

### Parte 8: Validación Final Re-pruebas y Cierre de Actividad

#### El rigor del Regression Testing: Asegurando que nada se rompa en el último kilómetro

Me senté frente al monitor con el listado de Jira abierto y el entorno de Staging cargado en una pestaña secundaria. Habíamos pasado semanas en una remediación colaborativa intensa, ajustando líneas de código, refinando el CSS y reestructurando el HTML semántico. Sin embargo, en mi experiencia, la remediación no es el final del camino; es apenas el preludio de la validación real. Como responsable del diseño, sabía que no bastaba con que un desarrollador marcara un ticket como "resuelto". Mi deber era ejecutar un **Regression Testing** forense: asegurar que cada parche técnico aplicado para mejorar la accesibilidad no hubiera degradado la experiencia visual ni introducido nuevas barreras en otros rincones de la plataforma.

Mi razonamiento era puramente estratégico. En proyectos de esta escala, es común que al arreglar el contraste de un botón se rompa el layout responsivo en ciertos dispositivos, o que al añadir un atributo ARIA se genere un conflicto en la lógica de un componente complejo. No podíamos permitirnos ese tipo de regresiones. Necesitábamos alcanzar un estado de **"Aprobado por Diseño"** que fuera incuestionable. Para el Centro Médico ABC, la accesibilidad no era un "plus" opcional, era una extensión de su compromiso humano. Por eso, me tomé el tiempo de navegar cada flujo crítico una vez más, con la mirada puesta en la integridad total del sistema.

#### La inspección forense: El baile del teclado y el foco visual

Empecé por uno de los puntos más conflictivos que habíamos detectado: el flujo de agendamiento de citas. Abrí el calendario y, dejando de lado el mouse, comencé la navegación exclusivamente por teclado. Mi objetivo era verificar el cumplimiento del criterio **WCAG 2.4.3 (Orden del Foco)**. Recuerdo perfectamente la tensión al presionar la tecla `Tab` repetidamente. En la versión anterior, el foco saltaba de forma errática, perdiéndose en elementos invisibles o quedando atrapado en un "keyboard trap" dentro del selector de fechas.

Esta vez, el resultado fue distinto. El indicador de foco (el *focus outline*) se movía de forma lógica y predecible, con un contraste marcado que nunca dejaba lugar a dudas sobre dónde se encontraba el usuario. Verifiqué que cada celda del calendario fuera interactiva mediante la tecla `Enter` y que las flechas de dirección permitieran cambiar de mes sin que el foco desapareciera. Esta precisión técnica era vital. Si un paciente con discapacidad motriz no puede elegir el día de su consulta porque el foco visual es invisible o el orden es ilógico, la plataforma le está cerrando la puerta en la cara. Al confirmar que el orden era secuencial y coherente con la jerarquía visual, sentí que finalmente habíamos blindado la autonomía del usuario.

#### Escuchar la interfaz: Validación con lectores de pantalla

Tras validar el teclado, pasé a la prueba de fuego: el uso de tecnologías de asistencia. Activé **NVDA** en Windows y **VoiceOver** en macOS para realizar una auditoría auditiva de los flujos de error. Uno de los hallazgos más críticos del informe inicial era que los mensajes de validación en los formularios eran invisibles para los lectores de pantalla; el usuario llenaba mal un campo, pero el sistema no le informaba verbalmente qué había fallado.

Navegué hasta el formulario de contacto y forcé un error dejando campos vacíos. Fue gratificante escuchar cómo el lector anunciaba inmediatamente: *"Error: El campo correo electrónico es obligatorio"*. Habíamos implementado atributos **`aria-live="assertive"`** precisamente para esto. Mi verificación no se detuvo ahí; inspeccioné el código para asegurar que cada etiqueta `<label>` estuviera programáticamente asociada a su `<input>` mediante los atributos `for` e `id`. 

> **Insight Senior:** Muchos diseñadores se quedan en la superficie de la interfaz, pero el diseño de producto real ocurre en la estructura. Una asociación programática correcta es lo que permite que, cuando el foco cae en un campo, el usuario escuche exactamente qué debe escribir. Sin esa asociación, la interfaz es solo un conjunto de cajas mudas.

#### El veredicto del informe: De la falla a la corrección

Con las pruebas manuales concluidas, procedí a actualizar el informe de accesibilidad. Fue un ejercicio de rigor documental. Fui tachando cada hallazgo crítico que habíamos identificado meses atrás. Los ratios de contraste, que antes fallaban en los textos pequeños de información secundaria, ahora mostraban un sólido **4.5:1** en todas las combinaciones de color del Design System.

Actualicé el estado de los componentes de "Falla" a "Corregido", documentando no solo que funcionaban, sino cómo se habían resuelto. Por ejemplo, documenté la corrección de las imágenes informativas en el carrusel de la homepage, asegurando que ahora contaran con atributos `alt` descriptivos y que las imágenes puramente decorativas estuvieran marcadas con `alt=""` para no saturar al lector de pantalla. Este informe no era solo un entregable administrativo; era la prueba de que el sitio del Centro Médico ABC ahora cumplía con los estándares **WCAG 2.1 Nivel AA**.

#### El hito de la aprobación: La firma del "Aprobado por Diseño"

Llegamos al momento del cierre formal en diciembre de 2021. Convoqué a una sesión de revisión final con el Líder de Desarrollo Frontend y el Líder de QA. No fue una reunión para "ver si funcionaba", sino para certificar que la implementación era una representación fiel y de alta calidad de los mockups de Figma. 

Revisamos juntos los tickets resueltos en Jira. Cada bug de diseño, desde un espaciado inconsistente hasta un error de microcopy, había sido verificado y cerrado. Emití el documento de **"Aprobación de Diseño"**, un hito que consolidaba la plataforma como un producto listo para el siguiente nivel. Firmar ese documento junto a los líderes técnicos fue el reconocimiento de un esfuerzo multidisciplinario donde el diseño no fue un adorno, sino un estándar de calidad riguroso. La plataforma en Staging era, por fin, una interfaz pulida, consistente y, sobre todo, inclusiva.

#### Documentación "As-Built": El testamento del diseño final

Una vez obtenida la aprobación, mi responsabilidad se desplazó hacia el futuro. En el diseño de producto, el trabajo no termina cuando el código se congela; termina cuando la documentación refleja la realidad de lo construido. Inicié el proceso de actualización de los artefactos de diseño para crear lo que llamamos documentación **"As-Built"**.

Durante el desarrollo, habíamos tomado micro-decisiones rápidas: ajustamos un color de hover por aquí para mejorar el contraste, cambiamos un espaciado por allá para acomodar un componente técnico. Si yo no actualizaba Figma, los archivos de diseño se convertirían en una mentira.
*   **Actualización de Componentes Maestros:** Regresé a la biblioteca del Design System y actualicé los componentes que habían sufrido ajustes. Por ejemplo, modifiqué el estado de hover de los botones primarios para que coincidiera exactamente con el valor hexadecimal que finalmente implementamos en producción por razones de accesibilidad.
*   **Versionado Final:** Creé una versión nombrada en el historial de Figma: *"Diseño Final v1.0 - Lanzamiento"*. Este snapshot oficial era crucial para que cualquier diseñador que se uniera al equipo en el futuro tuviera una "Fuente Única de Verdad".
*   **Organización del Paquete de Diseño:** Exporté los mockups clave y las guías de interacción actualizadas, organizando todo en un repositorio centralizado. Mi objetivo era eliminar cualquier deuda técnica de diseño; el equipo de mantenimiento ahora tendría un mapa exacto de lo que estaba en vivo.

#### El peso ético de la autonomía

Al cerrar esta actividad, me detuve a reflexionar sobre lo que realmente habíamos logrado. En el sector salud, el diseño tiene una carga ética que rara vez encontramos en otras industrias. No estábamos optimizando un flujo de compra para aumentar un ticket promedio; estábamos diseñando el acceso a la salud.

Poder navegar por teclado, escuchar los errores de un formulario o leer un texto con el contraste adecuado no son solo "mejoras de UX". Para una persona con discapacidad visual o motriz, estas funciones representan la diferencia entre la dependencia y la dignidad. Permitir que un paciente agende su propia cita médica sin tener que pedir ayuda a un familiar es devolverle una parcela de autonomía en un momento donde, posiblemente, se siente vulnerable por su estado de salud. Ese es el verdadero valor de la accesibilidad: transformar el código y el píxel en una herramienta de justicia social.

Con la documentación archivada, el sistema de diseño actualizado y la aprobación final firmada, el entorno de Staging estaba blindado. Habíamos transformado una plataforma fragmentada en un ecosistema inclusivo y robusto. La estructura semántica era limpia, los indicadores de foco eran visibles y la lógica de interacción era predecible. Estábamos listos. El Centro Médico ABC ya no solo tenía una web estéticamente impecable; tenía una plataforma que verdaderamente cuidaba a todos sus pacientes, sin distinción de sus capacidades.

**Reflexión final:**
Esta actividad reafirmó mi convicción de que el diseño solo es exitoso cuando es inclusivo por defecto, no por corrección. Aprendí que la colaboración estrecha con desarrollo y QA es el único camino real para que la accesibilidad pase de ser un deseo en un PDF a una realidad en el código. Al entregar una documentación "As-Built" y un sistema validado, no solo cerré un ciclo de diseño, sino que dejé una base ética y técnica sólida sobre la cual la institución podrá seguir construyendo su excelencia digital durante los próximos años.

---

