# Fase 3: Diseño Detallado y Prototipado de Alta Fidelidad, Prototipar y Testear

## Actividad 3: Creación de Prototipos Interactivos de Alta Fidelidad

> Esta actividad representa la culminación técnica de la Fase 3, donde los mockups estáticos de alta fidelidad se transforman en un artefacto funcional y navegable. El proceso abarca desde la planificación estratégica de flujos críticos (Búsqueda de Médicos, Agendamiento, Portal del Paciente) hasta la implementación de microinteracciones avanzadas mediante 'Interactive Components' y 'Smart Animate' en Figma. El objetivo es crear una simulación de alta fidelidad que permita validar la usabilidad fina, la eficiencia de los flujos y la percepción de marca antes del handoff a desarrollo, asegurando que la 'Calidez Humana' se traduzca en una respuesta del sistema fluida y empática.

### Parte 1: Planificación Estratégica del Alcance del Prototipo

#### El riesgo de las imágenes estáticas

Tenía frente a mí una colección de 37 mockups de alta fidelidad que, visualmente, eran impecables. Los colores institucionales del Centro Médico ABC vibraban con la sobriedad correcta, la tipografía jerarquizaba la información sin esfuerzo y los componentes del nuevo Design System prometían una escalabilidad que antes no existía. Sin embargo, sentí esa inquietud que solo aparece cuando sabes que lo que tienes en pantalla son, en esencia, imágenes mudas. Un diseño pixel-perfect es una promesa, pero un prototipo es una prueba de fuego. Sabía que si enviaba este paquete a ingeniería basándome solo en flujos estáticos, estaríamos ignorando las fricciones sutiles que solo emergen cuando un usuario real intenta, por ejemplo, filtrar a un cardiólogo por campus y disponibilidad en tiempo real.

Mi razonamiento en este punto de inflexión fue puramente estratégico: no se trataba de "animar" pantallas, sino de construir un artefacto de validación que permitiera a los stakeholders y, sobre todo, a los pacientes, "sentir" la plataforma. Necesitaba transformar la intención de diseño en una experiencia cinética. Mi objetivo era identificar problemas de usabilidad fina —esos pequeños tropiezos en la navegación que el ojo humano ignora en un PDF pero que el cerebro detecta de inmediato al interactuar— antes de comprometer una sola línea de código. Como único diseñador a cargo, la presión era máxima; cada hora invertida en el prototipo debía traducirse en un riesgo mitigado para el negocio.

#### La curaduría del esfuerzo: Selección de flujos críticos

Al ser el único responsable de la ejecución técnica, la eficiencia no era una opción, era una restricción de diseño. Decidí que no era inteligente, ni aportaba valor real, hacer interactivo cada enlace o cada pie de página de la plataforma. Prototipar el 100% de un sitio médico de esta envergadura es una trampa de tiempo que suele derivar en un mantenimiento imposible. En su lugar, maniobré para seleccionar quirúrgicamente entre tres y cinco flujos de usuario que representaran el corazón de la propuesta de valor y los puntos de mayor fricción identificados en las fases de investigación previas.

Elegí elevar a alta fidelidad los mismos flujos que habíamos testeado en baja, pero con una diferencia fundamental: esta vez, la respuesta del sistema debía ser indistinguible de la realidad. Esta decisión estratégica me permitió optimizar mis recursos, asegurando que los puntos de contacto más sensibles del paciente con el Centro Médico ABC fueran impecables. No buscaba una navegación exhaustiva, sino una simulación profunda de los momentos de la verdad. Si lográbamos que el agendamiento y la búsqueda de especialistas se sintieran fluidos y humanos, el resto de la arquitectura se sostendría por añadidura.

#### El corazón de la conversión: Búsqueda y selección de especialistas

El primer flujo que prioricé fue la **Búsqueda y Selección de Médico**, el motor que impulsa la conversión en cualquier plataforma de salud de alto nivel. Inicié la planificación desde la Homepage, visualizando cómo el buscador principal debía reaccionar no solo al texto, sino a la intención del paciente. Mi enfoque aquí fue detallar el recorrido completo: desde el primer clic en la barra de búsqueda hasta el acceso al perfil detallado del especialista.

Este flujo no era lineal. Sabía que debía prototipar la aplicación de filtros específicos —especialidad, campus, género del médico— porque es ahí donde la mayoría de las plataformas de salud fallan por exceso de complejidad. Mi razonamiento era que, si el paciente no podía refinar su búsqueda en menos de tres clics, la percepción de "calidez humana" que buscábamos se perdería en una frustración técnica. Diseñé la lógica para que el prototipo permitiera ver la lista de resultados y, crucialmente, entrar al perfil del médico para validar si la información de valor (trayectoria, seguros aceptados, ubicación) era lo suficientemente clara como para generar la confianza necesaria para agendar.

#### La simulación del compromiso: Agendamiento de cita simplificado

El segundo pilar del prototipo fue el **Flujo de Agendamiento de Cita**. Aquí es donde la arquitectura de la información se encuentra con la logística operativa. Partiendo desde el perfil del médico o una página de servicio, tracé el camino para que el usuario seleccionara el tipo de cita y el campus de su preferencia. Mi mayor reto aquí fue la honestidad técnica: al no contar con un backend real en esta etapa de diseño, tuve que articular una simulación que se sintiera lógica sin ser funcionalmente completa.

> **Decisión de diseño:** Opté por no construir una lógica de calendario dinámica compleja que consumiera días de trabajo. En su lugar, diseñé una interacción donde la selección de fecha y hora llevaba al usuario a una pantalla de "confirmación" simulada. 

Este trade-off fue consciente. Lo que necesitaba validar no era si el calendario podía conectarse a una base de datos (eso es un reto de ingeniería), sino si el paciente entendía los pasos, si la retroalimentación del sistema al elegir un horario era clara y si el resumen de la cita antes de confirmar eliminaba la ansiedad del proceso. El prototipo debía responder con la fluidez de una aplicación terminada para que el feedback del usuario en las pruebas posteriores fuera sobre la experiencia, no sobre las limitaciones de la herramienta.

#### El Portal del Paciente: De la transacción a la gestión de salud

Para el tercer flujo, me enfoqué en el acceso y navegación en **'Mi Portal Paciente ABC'**. Este era un punto crítico para los stakeholders, ya que representaba la transición de un sitio web informativo a una herramienta de gestión de salud continua. Planifiqué el tránsito desde la navegación global —el header principal— hacia el dashboard privado del paciente. 

Mi objetivo era demostrar cómo la plataforma podía centralizar la vida médica del usuario. Incluí en el alcance del prototipo enlaces interactivos a secciones como "Mis Resultados" y "Mis Citas". No necesitaba que el usuario pudiera descargar un PDF real de un laboratorio, pero sí necesitaba que sintiera la facilidad de encontrarlo. Este flujo fue vital para blindar la visión estratégica del proyecto: demostrar que el Centro Médico ABC no solo buscaba captar nuevos pacientes, sino cuidar y retener a los actuales a través de una experiencia digital propietaria y eficiente.

#### Autoridad médica a través del contenido educativo

Finalmente, integré un flujo dedicado al **Consumo de Contenido Educativo**. En una institución con el prestigio del ABC, el blog y la sección de noticias no son accesorios; son herramientas de autoridad y confianza. Diseñé el recorrido desde la navegación principal hacia la sección editorial, permitiendo al usuario abrir y "leer" un artículo específico.

Mi intención técnica aquí fue validar la legibilidad y la jerarquía de la información en piezas de contenido extenso. Quería observar si el espaciado, el tamaño de la fuente y la disposición de los elementos multimedia permitían una lectura fluida o si, por el contrario, abrumaban al paciente en un momento de búsqueda de información sensible. Un Centro Médico debe comunicar calma, y esa calma también se diseña en la forma en que se consume la información médica.

#### La arquitectura del simulacro: Mapeo y niveles de fidelidad

Antes de entrar a Figma a conectar el primer *hotspot*, realicé un ejercicio de mapeo mental para definir los niveles de fidelidad de cada interacción. No todas las acciones requerían el mismo peso visual o técnico. Determiné que para la navegación utilitaria —como el logo que regresa a la Home o los enlaces del footer— bastaría con transiciones simples de clic. Sin embargo, para los elementos que definen la personalidad de la interfaz, como los menús desplegables (mega menús) o los modales de alerta, decidí que la simulación debía ser absoluta.

Construí un mapa de conexiones para visualizar cómo cada frame se entrelazaría con el siguiente, evitando así el caos de "fideos" de conexiones que suele ocurrir en prototipos grandes. Este mapa me permitió asegurar que la arquitectura de la información se mantuviera coherente: si un usuario entraba al portal desde la Home, debía poder regresar exactamente al mismo punto o navegar hacia otra sección sin perder el contexto. Este prototipo no era solo un juguete interactivo; era el puente definitivo entre mi visión de diseño y la ejecución técnica de ingeniería. Al final de esta fase de planificación, tenía una hoja de ruta clara: sabía exactamente qué iba a brillar en la simulación y qué partes quedarían como estáticas, garantizando que cada clic en las futuras pruebas de usabilidad tuviera un propósito de aprendizaje claro.

***


Una vez definido el alcance estratégico y los flujos que cargarían con el peso de la validación, me enfrenté al desafío técnico de estructurar la navegación global. El siguiente paso fue la **Arquitectura de Navegación y Conexión de Flujos Críticos**, donde la teoría del mapa mental se encontró con la realidad de Figma. Fue en ese momento cuando descubrí que conectar pantallas no era suficiente; necesitaba una estructura de componentes que permitiera que el header y el footer se comportaran de forma consistente en más de 30 frames sin generar errores de destino. La tensión ahora radicaba en cómo mantener la integridad del prototipo mientras empezaba a tejer la red de interacciones que daría vida a la plataforma.

---

### Parte 2: Arquitectura de Navegación y Conexión de Flujos Críticos

#### La columna vertebral: De la estética estática a la infraestructura cinética

Tener 37 mockups de alta fidelidad terminados en Figma es una satisfacción visual innegable, pero para un diseñador, también es una señal de alerta. Sabía que, sin una estructura de navegación sólida, esas pantallas no eran más que una presentación glorificada. El reto en este punto no era la estética —eso ya lo habíamos blindado— sino la **arquitectura invisible**. Necesitaba transformar una colección de imágenes en un sistema vivo donde el usuario pudiera "perderse" sin extraviarse realmente. Mi razonamiento fue claro: antes de perder tiempo en microinteracciones elegantes o transiciones complejas, debía construir la columna vertebral del prototipo. Si la navegación global fallaba, si un usuario llegaba a un "callejón sin salida" o si el logo no lo devolvía a casa, la validación de usabilidad posterior sería un fracaso, independientemente de lo bien que se viera el botón de agendamiento.

Esta fase fue puramente estructural. Me alejé del detalle visual para concentrarme en la topología de la plataforma del Centro Médico ABC. La pregunta que guiaba cada conexión era: "¿Cómo garantizo que el paciente sienta que está navegando en un producto real y no saltando entre diapositivas?". La respuesta residía en una conexión meticulosa y sistemática de cada frame, asegurando que la jerarquía de la información se tradujera en una experiencia de flujo continuo. No se trataba de conectar todo con todo —un error común que genera prototipos inmanejables— sino de trazar las rutas críticas con precisión de cirujano.

#### Auditoría de hotspots: El rigor de lo accionable

El primer paso técnico fue realizar una auditoría de cada frame para identificar y crear los **hotspots**. No permití que este fuera un proceso aleatorio. Fui pantalla por pantalla, seleccionando sistemáticamente los elementos que, por definición del Design System, debían ser interactivos: botones primarios, enlaces de texto en el cuerpo del contenido, tarjetas de médicos y cada ítem de los menús. Mi enfoque fue tratar cada componente no como un dibujo, sino como una promesa de acción.

Al definir estas áreas de clic, tuve que ser extremadamente riguroso con la intención del usuario. Si una tarjeta de médico presentaba la foto, el nombre y la especialidad, decidí que toda la superficie de la tarjeta fuera un hotspot. En un entorno de salud, donde el usuario puede estar bajo estrés o navegando desde un dispositivo móvil, la precisión no debería ser un obstáculo. Esta auditoría me permitió asegurar que cada componente del UI Kit mantuviera su funcionalidad intrínseca en el modo prototipo, eliminando la frustración de hacer clic en algo que "parece" un botón pero no reacciona.

#### La ingeniería del clic: Configurando el 'Navigate to'

Una vez identificados los puntos de contacto, pasé a la configuración mecánica de las interacciones. Utilicé el panel de prototipado de Figma para asignar la acción **"On Click"** vinculada a la función **"Navigate to"**. Parece un paso básico, pero es donde se cometen los errores que rompen la inmersión. Para cada hotspot, seleccioné manualmente el frame de destino correcto, asegurándome de que la transición fuera lógica.

> La configuración del 'Navigate to' es el cimiento de la fidelidad. Si un usuario hace clic en 'Ver Perfil' y el prototipo lo lleva a la lista de resultados de nuevo, la ilusión de realidad se rompe instantáneamente. Mi trabajo fue verificar que cada uno de estos saltos respetara la narrativa que habíamos diseñado en los flujos de usuario originales.

No utilicé transiciones automáticas en esta etapa; me mantuve en el nivel de navegación pura. Quería ver el esqueleto del producto funcionando. Si el flujo dictaba que tras seleccionar un horario en el calendario el usuario debía ir a la pantalla de confirmación, me aseguré de que esa conexión fuera directa y sin ambigüedades. Esta disciplina me permitió construir una red de destinos que reflejaba fielmente la arquitectura de la información aprobada semanas atrás.

#### El ancla de la experiencia: Header, Footer y la salida de emergencia del logo

Uno de los mayores desafíos de consistencia fue la **Navegación Global**. En una plataforma que superaba las 30 pantallas interconectadas, el Header y el Footer debían actuar como anclas inamovibles. Me impuse la tarea de verificar que los enlaces a "Servicios Médicos", "Directorio Médico" y "Mi Portal Paciente" estuvieran conectados de forma idéntica en cada uno de los frames.

Fue un trabajo meticuloso. Si el usuario estaba en la profundidad de un artículo educativo sobre cardiología y decidía que quería agendar una cita, el Header debía permitirle saltar al Directorio Médico sin fricciones. No podía permitirme "frames huérfanos" donde la navegación global estuviera rota o incompleta. 

*   **El Logo como salvavidas:** Conecté el logo del Centro Médico ABC a la Homepage en absolutamente todas las pantallas. En diseño de producto, el logo no es solo marca; es la "salida de emergencia". Proporciona al usuario un punto de reinicio constante, algo vital cuando se navega por flujos complejos como el agendamiento. 
*   **Footer Utilitario:** Aseguré que los enlaces de contacto y términos legales también fueran funcionales, no porque esperara que los usuarios los testearan a fondo, sino porque su presencia funcional refuerza la percepción de seguridad y profesionalismo de la institución médica.

#### Trazado de rutas: El mapeo sistemático de los cinco flujos críticos

Con la navegación global asegurada, me enfoqué en mapear sistemáticamente los cinco flujos críticos que definirían el éxito del rediseño. No intenté prototipar toda la web; eso habría sido un desperdicio de recursos. En su lugar, tracé rutas exhaustivas para los pilares de la experiencia del paciente:

1.  **Búsqueda y Selección de Médico:** Desde la Homepage, conecté el buscador para que llevara a la lista de resultados, donde configuré los filtros para que fueran interactivos (aunque estáticos en su lógica de datos) y permitieran llegar al perfil detallado de un especialista.
2.  **Agendamiento de Cita (Simplificado):** Trazé el camino desde el perfil del médico hasta la simulación de selección de fecha y hora. Aunque no había un backend real, la navegación entre los pasos del formulario de agendamiento debía sentirse fluida y secuencial.
3.  **Acceso al Portal "Mi Salud ABC":** Diseñé la ruta de transición entre la web pública y el dashboard del portal del paciente, asegurando que el cambio de contexto fuera claro pero coherente visualmente.
4.  **Contenido Educativo:** Conecté la sección de noticias para que el usuario pudiera navegar desde el feed general hasta la lectura de un artículo específico, validando la legibilidad y el retorno a la categoría anterior.
5.  **Navegación de Servicios:** Mapeé cómo un usuario exploraría las especialidades médicas desde el menú principal, asegurando que la jerarquía de servicios fuera fácil de recorrer.

#### La telaraña azul: Diagnosticando la topología a través de los Noodles

Al activar la vista de prototipo en Figma, me encontré con la famosa "telaraña" de hilos azules, los **Noodles**. Para muchos, esto puede parecer un caos, pero para mí es una herramienta de diagnóstico. Utilicé esta visualización para auditar la topología de la plataforma. Al alejar el zoom, podía ver claramente si un flujo estaba aislado o si había una concentración excesiva de conexiones que indicara una posible confusión cognitiva para el usuario.

Esta vista me permitió identificar rápidamente conexiones erróneas —esos hilos que cruzaban todo el lienzo hacia un destino equivocado— y corregirlos antes de que se convirtieran en problemas durante las pruebas. Tratar el lienzo de Figma como un mapa de ingeniería me dio la seguridad de que cada línea azul representaba una decisión de diseño consciente y una ruta de navegación validada para el paciente.

#### Consistencia de flujo: Blindando los puntos de entrada y salida

Finalmente, realicé una verificación de los puntos de entrada y salida de cada tarea. No basta con que el usuario inicie un proceso; debe saber cuándo ha terminado. Me aseguré de que, al finalizar el flujo de agendamiento, existiera una pantalla de "Confirmación" o un feedback visual claro que cerrara el ciclo. 

Esta consistencia es lo que separa un conjunto de pantallas conectadas de un prototipo de alta fidelidad profesional. Al terminar esta fase, la plataforma del Centro Médico ABC ya no era una serie de mockups; era un organismo funcional. Sabía que si un usuario entraba a probar el sistema, podría navegar con la misma confianza con la que lo haría en el producto final. La arquitectura invisible estaba terminada, y sobre este esqueleto sólido, ahora podía empezar a construir la capa de interactividad fina que realmente deleitaría al paciente.


Una vez que la estructura de navegación global fue infalible, me di cuenta de que el prototipo se sentía "seco": las pantallas cambiaban, pero los elementos no reaccionaban a la presencia del usuario. La infraestructura estaba lista, pero faltaba la respuesta del sistema ante el comportamiento humano, lo que me llevó a enfrentarme al reto de la **Ingeniería de Componentes Interactivos y Overlays**. Sabía que para que la simulación fuera realmente convincente, necesitaba que los menús no solo aparecieran, sino que se desplegaran, y que los botones no solo fueran destinos, sino que respondieran visualmente a cada intención del paciente.

---

### Parte 3: Ingeniería de Componentes Interactivos y Overlays

Una vez que tuve la arquitectura de navegación global resuelta, me enfrenté a un lienzo que, aunque conectado, se sentía inerte. Tenía las pantallas y los flujos, pero los elementos individuales no reaccionaban; era como tener un coche con el chasis y el motor listos, pero sin tablero ni pedales que respondieran al tacto. Mi razonamiento en este punto fue puramente estratégico: para validar la usabilidad fina del Centro Médico ABC, no bastaba con que el usuario fuera de la página A a la B. Necesitaba que "sintiera" la respuesta del sistema. Un prototipo de alta fidelidad profesional debe engañar al cerebro del paciente para que olvide que está en una simulación de Figma y empiece a interactuar con la misma carga cognitiva y emocional que tendría en la plataforma real.

#### La ingeniería de componentes interactivos: Lógica dentro del átomo

Mi primer movimiento técnico para dotar de vida a la interfaz fue implementar **Interactive Components** directamente en nuestro Design System. Sabía que si quería un prototipo escalable y que no se convirtiera en un caos de "noodles" (flechas de conexión) en el lienzo de Figma, la lógica de interacción debía residir dentro de los componentes mismos, no en las pantallas.

*   **Configuración de variantes:** Fui a mi biblioteca de componentes y trabajé sobre las variantes de botones, enlaces de texto y tarjetas de médicos. Definí estados de `Default`, `Hover` y `Pressed`.
*   **Triggers automáticos:** Utilicé disparadores de `While Hovering` para los cambios de color sutiles en los botones de "Agendar Cita" y `While Pressing` para simular la profundidad del clic. 
*   **Consistencia absoluta:** Al hacer esto en la raíz del sistema de diseño, logré que cada vez que un botón apareciera en cualquier flujo —ya fuera en la página de resultados de búsqueda o en el portal del paciente—, se comportara de forma idéntica. Esto eliminó la necesidad de conectar manualmente cientos de microinteracciones, permitiéndome concentrarme en la experiencia de usuario y no en la carpintería de cables.

Esta decisión no fue solo por eficiencia técnica. Como diseñador, entiendo que el feedback inmediato es lo que construye la confianza en una plataforma de salud. Si un paciente pasa el cursor sobre una tarjeta de un especialista y esta no reacciona, se genera una micro-fricción: "¿Es esto clicable? ¿El sistema está funcionando?". Al elevar sutilmente la sombra (`drop shadow`) mediante un estado de hover, le estaba diciendo al usuario: "Te veo, entiendo tu intención y estoy listo para responder".

#### Interpolación de capas y la suavidad del feedback visual

Para que estas microinteracciones no se sintieran bruscas, dediqué una jornada entera a calibrar las **animaciones y transiciones**. Utilicé una combinación de `Dissolve` y `Smart Animate` para asegurar que el ojo del paciente nunca perdiera el contexto.

1.  **Uso de Dissolve:** Para cambios de estado simples, como el subrayado de un enlace en el footer o el cambio de color de un icono, apliqué un `Dissolve` con una duración de 150ms a 200ms. Es un tiempo lo suficientemente rápido para ser percibido como instantáneo, pero lo suficientemente suave para evitar el "parpadeo" visual que distrae.
2.  **Smart Animate para la continuidad:** En elementos que cambiaban de forma o posición, como los acordeones de las preguntas frecuentes (FAQ) o la expansión de los filtros de búsqueda, utilicé `Smart Animate`. Esta función de Figma me permitió interpolar las capas entre dos estados, creando una transición fluida donde el contenido parece empujar al resto de la página de forma natural.
3.  **Easing functions:** No dejé las animaciones en "Linear". Ajusté las curvas de aceleración a `Ease-out`, lo que hace que el movimiento comience rápido y se suavice al final. En el contexto del Centro Médico ABC, esto refuerza la percepción de una plataforma moderna, sofisticada y, sobre todo, empática.

> **Insight de diseño:** En una interfaz médica, la animación no es adorno; es orientación. Un menú que aparece de la nada confunde; un menú que se desliza suavemente desde su origen explica su jerarquía sin necesidad de palabras.

#### Arquitectura de Overlays: Simulando la profundidad del sitio

Uno de los retos más complejos fue la implementación del **Mega Menú de "Servicios Médicos"**. En la plataforma actual del ABC, este menú es una pieza crítica de navegación que contiene decenas de especialidades. No podía simplemente navegar a una pantalla nueva para mostrar el menú, porque eso rompería la sensación de estar en una página web real donde el menú se superpone al contenido.

Utilicé la acción `Open Overlay` con una precisión técnica quirúrgica. Diseñé frames independientes para cada mega menú y configuré los disparadores en el header global. 

*   **Posicionamiento Manual:** En lugar de usar los ajustes predeterminados, seleccioné la posición "Manual" para alinear exactamente el overlay con el borde inferior del header. Esto aseguró que, sin importar en qué página estuviera el usuario, el menú siempre apareciera en el lugar correcto.
*   **Configuración de cierre:** Activé la casilla de `Close when clicking outside`. Es un detalle pequeño, pero vital para simular el modelo mental que los usuarios tienen de la web. Si el usuario se arrepiente y hace clic en el contenido de fondo, el menú debe desaparecer sin obligarlo a buscar un botón de "cerrar".
*   **Animación Move In:** Configuré la entrada como `Move In` desde la parte superior con una transición suave. Esto le da al usuario una pista visual clara de que el menú "cuelga" de la barra de navegación, reforzando la jerarquía espacial del sitio.

#### Microinteracciones en el Design System: El detalle que valida la calidez

Para llevar el prototipo al nivel de "alta fidelidad" que requería el proyecto, bajé al nivel de los átomos de la interfaz. No me detuve en los botones grandes; me enfoqué en los elementos que suelen ignorarse en prototipos de menor nivel.

Configuré los **campos de formulario** para que reaccionaran al foco. Cuando un usuario hace clic en el campo de "Nombre del Médico" en el buscador, el borde cambia de color y el label se desplaza sutilmente. Aunque no había un backend real procesando datos, esta respuesta visual confirmaba al usuario que el sistema estaba "escuchando". 

También trabajé en las **tarjetas de resultados**. Implementé microinteracciones de `Mouse Enter` y `Mouse Leave` para que, al entrar el cursor en el área de la tarjeta, se mostrara un botón de "Ver Perfil" más prominente o se activara un cambio de elevación. Estas señales son las que validan la "Calidez Humana" que buscábamos: el sistema no es una base de datos fría, sino un entorno que reacciona y guía al paciente en momentos de incertidumbre.

#### El rigor de "comer mi propia comida de perro"

Al finalizar la configuración de estas cientos de conexiones y estados, realicé una **auditoría interna exhaustiva**. Como único Product Designer, esta fase de "comer mi propia comida de perro" fue fundamental. Me senté frente al prototipo y traté de "romperlo".

Navegué por cada flujo de búsqueda, abrí y cerré cada mega menú, y probé cada estado de hover. En este proceso identifiqué varios "bugs" de diseño: animaciones que se sentían demasiado lentas y hacían que la plataforma se percibiera pesada, y algunos overlays que no se cerraban correctamente al navegar a una nueva sección. Corregí las duraciones de las transiciones, ajustando los tiempos de 300ms a 200ms para ganar agilidad, y refiné los triggers de los modales de confirmación.

Esta fase de pulido técnico transformó el prototipo de una herramienta de visualización a una **herramienta de comunicación poderosa**. Sabía que cuando los stakeholders del Centro Médico ABC o los usuarios reales se sentaran frente a esta versión, no estarían evaluando rectángulos de colores; estarían experimentando la visión final del producto. Había logrado que la complejidad técnica de Figma desapareciera para dejar paso a una experiencia fluida, coherente y, sobre todo, humana.


Una vez que logré que la interfaz respondiera con fluidez a cada movimiento del cursor, me di cuenta de que la ilusión de realidad se rompía en el momento en que el usuario intentaba "hacer" algo concreto, como completar el formulario de agendamiento. Los componentes reaccionaban, pero la información era estática; los campos de texto no capturaban datos y los calendarios no permitían una selección lógica. Me enfrentaba ahora al desafío de simular la **lógica de negocio y la captura de datos**, un terreno donde el prototipo debía dejar de ser solo visual para empezar a procesar la intención del paciente.

---

### Parte 4: Simulación de Lógica de Negocio y Formularios

#### La ruptura de la ilusión: cuando el diseño deja de ser una imagen

Una vez que logré que la interfaz respondiera con fluidez a cada movimiento del cursor, me di cuenta de que la ilusión de realidad se rompía en el momento en que el usuario intentaba "hacer" algo concreto, como completar el formulario de agendamiento. Los componentes reaccionaban, pero la información era estática; los campos de texto no capturaban datos y los calendarios no permitían una selección lógica. Me enfrentaba ahora al desafío de simular la **lógica de negocio y la captura de datos**, un terreno donde el prototipo debía dejar de ser solo visual para empezar a procesar la intención del paciente.

Como responsable de esta transformación técnica, entendí que no bastaba con que la plataforma se viera "bonita". En un entorno de salud, la confianza se construye a través de la respuesta del sistema. Si un paciente hace clic en un campo y este no reacciona, o si intenta enviar un formulario y no recibe una confirmación clara, la percepción de competencia de la institución se desploma. Mi razonamiento fue estratégico: necesitaba "dotar de inteligencia" a la interfaz mediante una simulación que, aunque careciera de un backend real, se comportara con la rigurosidad de una aplicación terminada. Pasé de diseñar pantallas a diseñar procesos de decisión, asegurándome de que cada interacción tuviera una consecuencia lógica y predecible.

#### La anatomía del feedback: configurando estados de formularios

Para abordar la simulación de los formularios, me sumergí en la configuración de los **Interactive Components** dentro de nuestro Sistema de Diseño. No quería simplemente enlazar pantallas; quería que los inputs tuvieran vida propia. En el registro técnico que estructuré para esta actividad de alta fidelidad, definí que cada campo de entrada debía pasar por un ciclo de vida visual completo: **Default, Focus, Error y Success**.

Maniobré dentro de Figma para configurar las variantes de cada componente de input. Utilicé el disparador "On Click" para transicionar del estado *Default* al de *Focus*. En este último, el borde del campo cambiaba al azul institucional y el cursor empezaba a parpadear (simulado mediante un pequeño GIF o una animación de opacidad). Este detalle, que parece menor, es vital en salud: el paciente necesita saber exactamente dónde está parado y que el sistema está listo para recibir su información.

Sin embargo, la verdadera prueba de usabilidad residía en el manejo de errores. Configuré variantes específicas donde, al interactuar con un botón de "Siguiente" sin haber completado la información, el input transicionaba a un estado de *Error* con un borde rojo y un micro-copy de asistencia. No se trataba de castigar al usuario, sino de guiarlo. Al final, cuando el "paciente" simulado completaba el campo, la variante cambiaba a *Success* con un check verde. Esta retroalimentación inmediata reduce la carga cognitiva y la ansiedad, factores que identifiqué como críticos en la investigación previa del Centro Médico ABC.

#### El uso estratégico de Overlays para la toma de decisiones

Uno de los momentos de mayor tensión en el flujo de un paciente es la confirmación de una cita o la aceptación de términos y condiciones. Para estos casos, rechacé la idea de navegar a una nueva página. En su lugar, implementé una arquitectura de **Overlays** (capas superpuestas) utilizando la acción "Open Overlay" de Figma. 

Mi justificación técnica para esta decisión fue mantener el contexto. En el proceso detallado de esta fase, documenté cómo la apertura de un modal permite que el usuario tome una decisión crítica sin sentir que ha abandonado el proceso principal. Configuré estos overlays con las siguientes especificaciones:
*   **Posición:** "Centered", para asegurar que la atención se concentrara en el mensaje de confirmación.
*   **Overlay Background:** Un fondo oscuro con 50% de opacidad para "apagar" el resto de la interfaz y evitar distracciones visuales.
*   **Animación de entrada:** Utilicé "Dissolve" con una duración de 200ms para que la aparición fuera suave pero decidida, evitando el parpadeo brusco que suele romper la inmersión.

Esta maniobra permitió simular alertas de seguridad y confirmaciones de agendamiento de una manera muy orgánica. Al cerrar el modal (usando "Close Overlay"), el usuario regresaba exactamente al punto donde estaba, reforzando la sensación de control sobre la plataforma.

#### Resolviendo la densidad informativa: acordeones y control de carga cognitiva

El portal del paciente es, por naturaleza, denso. Resultados de laboratorio, preparaciones para cirugías, detalles de seguros... es una avalancha de datos que puede abrumar a cualquiera. Para gestionar esto, articulé una solución basada en **Acordeones y Pestañas (Tabs)**, transformándolos en componentes interactivos complejos.

En lugar de mostrar toda la "Preparación para Exámenes" de golpe, creé componentes donde el encabezado del acordeón actuaba como un disparador "On Click". Aquí es donde **Smart Animate** se volvió mi mejor aliado. Al configurar la transición, me aseguré de que cuando el usuario abriera una sección, el resto del contenido se desplazara hacia abajo de forma elástica y natural. 

> El valor de esta interacción no es estético; es funcional. Al permitir que el usuario expanda solo lo que necesita leer, estamos respetando su capacidad de atención. En el contexto del Centro Médico ABC, donde muchos usuarios pueden estar consultando información bajo estrés, esta jerarquización interactiva es una herramienta de empatía.

Para las secciones de "Mis Citas" y "Resultados Históricos", utilicé un sistema de pestañas. Cada pestaña estaba conectada a una variante de frame diferente, permitiendo un intercambio instantáneo de información sin tiempos de carga perceptibles. Esta fluidez simulada es lo que diferencia a un prototipo senior de uno básico: la capacidad de hacer que el sistema se sienta ligero y potente a la vez.

#### El "hack" de la entrada de datos: simulando la escritura real

Figma, en 2021, tenía limitaciones claras: no permitía que un usuario escribiera realmente en un prototipo. Para superar este obstáculo y mantener la fidelidad en las pruebas de usabilidad, utilicé una técnica forense de diseño: el **Hotspot de Sustitución**.

El proceso fue laborioso pero efectivo. En los flujos críticos como la "Búsqueda de Médicos" o el "Registro de Paciente", configuré hotspots específicos sobre los campos vacíos. Al hacer clic, el prototipo navegaba a un frame idéntico donde el campo ya aparecía con texto pre-llenado (ej. "Juan Pérez"). 

*   **Paso A:** El usuario ve el campo vacío y siente la intención de escribir.
*   **Paso B:** Al hacer clic, el sistema "reacciona" mostrando el texto.
*   **Paso C:** El botón de "Continuar", que antes estaba en estado deshabilitado (gris), cambia automáticamente a su versión activa (azul) en el nuevo frame.

Esta secuencia lógica es fundamental para validar si el usuario entiende qué información se le está pidiendo. Si el usuario hacía clic en el campo de "Especialidad" y el prototipo le mostraba "Cardiología", la ilusión se mantenía lo suficiente como para que el paciente continuara el flujo sin distraerse por la limitación técnica de la herramienta. Logré simular la intención de uso, permitiendo que las pruebas posteriores se centraran en la claridad del proceso y no en las carencias del prototipo.

#### Cerrando el ciclo psicológico: botones de acción y éxito

El clímax de cualquier flujo transaccional es el botón de envío. Para el Centro Médico ABC, el botón de "Confirmar Agendamiento" no podía ser simplemente un enlace. Tenía que sentirse como el cierre de un compromiso. 

Diseñé estos botones con estados de **While Pressing** utilizando variantes de escala (98%) y cambio de sombra, dando una respuesta táctil visual que confirmaba la pulsación. Al soltar, el prototipo disparaba una transición de tipo "Push" hacia la derecha, llevando al usuario a la "Pantalla de Éxito". 

Esta pantalla de éxito fue diseñada cuidadosamente para ser el punto final de la tensión. Incluía un resumen de la cita, un botón para "Agregar al Calendario" y otro para "Ver mis Citas". En la documentación técnica de esta actividad, enfaticé que este cierre es vital para la salud mental del paciente: la confirmación positiva elimina la incertidumbre de "¿se habrá enviado bien?". Al conectar estos disparadores finales, completé el mapa mental del usuario, asegurando que el prototipo validara no solo la navegación, sino la satisfacción de completar una tarea compleja.

#### Eficiencia técnica mediante variantes y estados condicionales

Como único diseñador a cargo de este artefacto, la eficiencia era una restricción constante. No podía permitirme crear cientos de frames para cada pequeña variación. Por ello, utilicé un enfoque avanzado de **Variantes de Componentes**.

Por ejemplo, la "Tarjeta de Médico" en los resultados de búsqueda era un componente maestro con múltiples propiedades. Podía cambiar de un estado "Disponible" a uno "Seleccionado" o "Sin Horarios" simplemente alternando un switch en el panel de diseño. Al prototipar, esto significaba que podía simular que un paciente seleccionaba a un médico y la tarjeta se iluminaba con un borde de marca, todo dentro del mismo flujo y con un mínimo de conexiones ("noodles").

Esta arquitectura de prototipado no solo hizo que el archivo de Figma fuera más ligero y menos propenso a errores, sino que también facilitó la comunicación con el equipo de desarrollo. Al ver cómo las variantes interactuaban entre sí, los programadores podían entender la lógica de estados que debían implementar en el código real. Fue una forma de "blindar" la intención del diseño antes de que tocara una sola línea de programación.

#### Reflexión sobre la responsabilidad del diseño en salud

Diseñar formularios para un hospital no es lo mismo que diseñarlos para una red social. Aquí, un error de interpretación o una confirmación ambigua puede generar una angustia real en una persona que ya está pasando por un momento difícil. A lo largo de esta actividad, mi obsesión no fue solo la técnica de Figma, sino la **claridad cognitiva**.

Cada estado de error que configuré, cada overlay que centré y cada transición que calibré tenían un único objetivo: reducir la fricción entre la necesidad del paciente y el servicio del médico. Al final de este proceso de simulación lógica, sentí que había construido algo más que un prototipo; había trazado un puente de confianza. Habíamos pasado de imágenes estáticas a un sistema que "escuchaba" y "respondía", preparando el terreno para la validación más importante de todas: el contacto con el usuario real.

REFINAMIENTO ESTÉTICO: TRANSICIONES Y SMART ANIMATE. Una vez que la lógica de los formularios y la estructura de los datos quedaron blindadas, me enfrenté a un nuevo problema: el prototipo funcionaba, pero se sentía "mecánico". Las pantallas cambiaban con precisión, pero faltaba esa fluidez orgánica que comunica modernidad y cuidado en una institución de salud de élite. Me di cuenta de que para que el paciente realmente se sintiera en una plataforma de clase mundial, necesitaba dominar el tiempo y el movimiento, y eso me llevó directamente a la fase más obsesiva del pulido visual: la orquestación de micro-animaciones con Smart Animate.

---

### Parte 5: Refinamiento Estético Transiciones y Smart Animate

#### La coreografía del movimiento: más allá de la lógica

Al terminar de conectar los flujos lógicos y blindar los estados de los formularios, me encontré con un prototipo que, aunque funcionalmente impecable, se sentía inerte. Las pantallas cambiaban con una precisión quirúrgica, pero carecían de esa fluidez orgánica que comunica el nivel de cuidado y sofisticación que una institución como el Centro Médico ABC representa. En el sector salud, la eficiencia técnica es solo la mitad de la batalla; la otra mitad es la confianza, y esta se construye en los detalles. Una transición abrupta o un salto visual inesperado pueden generar una micro-desorientación en el usuario, algo que quería evitar a toda costa en una plataforma donde el paciente suele entrar con una carga emocional o de estrés considerable.

Mi objetivo en esta etapa de **Refinamiento Estético** fue transformar un sistema de "clics y saltos" en una experiencia cinética continua. No se trataba de decorar la interfaz, sino de orquestar una coreografía visual que guiara el ojo del usuario de manera natural. Como responsable de esta transformación, sabía que cada milisegundo de transición debía tener un propósito: reducir la carga cognitiva y hacer que la interfaz se sintiera como una extensión fluida del pensamiento del paciente.

#### La magia de la interpolación con Smart Animate

Para lograr esta sensación de continuidad espacial, me sumergí en la configuración avanzada de **Smart Animate** dentro de Figma. Mi estrategia fue utilizar la interpolación de elementos comunes entre frames para evitar los "saltos" visuales. Por ejemplo, en el flujo de búsqueda de médicos, me aseguré de que los elementos compartidos —como el encabezado de la sección o la barra de búsqueda— tuvieran exactamente el mismo nombre de capa en los diferentes estados del prototipo.

Al aplicar Smart Animate, logré que cuando un usuario activaba un filtro, los resultados no aparecieran de golpe. En su lugar, las tarjetas de los médicos se desplazaban suavemente para reacomodarse, mientras que los elementos filtrados se desvanecían con elegancia. Esta transición, configurada generalmente entre **300ms y 450ms**, permitía que el cerebro del usuario procesara el cambio sin perder el contexto de dónde se encontraba. No era solo un efecto visual; era una forma de decirle al usuario: "el sistema está trabajando para ti y aquí están los resultados, justo donde los dejaste". Esta continuidad espacial es vital para reducir la ansiedad; el usuario siente que tiene el control total sobre la interfaz.

#### El sutil arte del 'Dissolve' en los cambios de contexto

No todas las transiciones pueden ser interpoladas, y forzar Smart Animate donde no hay elementos comunes genera efectos extraños y distractores. Para los cambios de contexto más significativos —como pasar de la Homepage a una sección de contenido educativo o al dashboard del portal del paciente— opté por transiciones de tipo **'Dissolve'**.

Fui extremadamente meticuloso con los tiempos. Un *Dissolve* demasiado rápido se siente como un error técnico, mientras que uno demasiado lento entorpece la navegación. Calibré estas transiciones en un rango de **200ms a 300ms**. Mi razonamiento fue que el cambio debía ser lo suficientemente suave para no ser agresivo al ojo, pero lo suficientemente ágil para mantener la percepción de una plataforma moderna y eficiente. Al alejarnos de las transiciones instantáneas, que suelen recordar a la web rudimentaria de los años 2000, elevamos la percepción de la marca ABC a un estándar de clase mundial. Cada transición de pantalla se convirtió en un fundido deliberado que preparaba la mente del usuario para el nuevo contenido.

#### Gestionando la expectativa: la simulación de carga

Uno de los errores más comunes al prototipar es crear una experiencia "instantánea" que no existe en la realidad. Un backend médico, que debe consultar bases de datos complejas de expedientes o agendas, tiene latencias reales. Si el prototipo responde en 0 milisegundos, la validación posterior con usuarios será falsa. Por ello, dediqué tiempo a simular el tiempo de respuesta mediante el uso de **After Delay** y componentes de carga.

Diseñé un componente de *spinner* animado dentro del Design System y lo integré en frames intermedios. Por ejemplo, al hacer clic en "Agendar Cita", el prototipo no saltaba directamente a la confirmación. En su lugar:
1.  La interacción disparaba una navegación a un frame de transición.
2.  Este frame mostraba el spinner centrado, comunicando que el sistema estaba procesando la solicitud.
3.  Configuré una interacción de **After Delay de 800ms a 1200ms** para que, automáticamente, el prototipo avanzara al resultado final.

Esta maniobra senior es fundamental para gestionar las expectativas. Al introducir estos "respiros" controlados, preparé al usuario para la latencia real que encontraría en la plataforma productiva, evitando que en el futuro percibiera el sistema real como "lento" solo porque el prototipo era irrealmente rápido.

#### El peso del movimiento: Easing y curvas de aceleración

Para que el movimiento se sintiera natural y no robótico, rechacé las transiciones lineales por defecto. En el mundo físico, nada se mueve a una velocidad constante desde el inicio hasta el fin; hay aceleración y desaceleración. Utilicé curvas de **Easing** personalizadas, específicamente *Ease-in* y *Ease-out*, para todas las microinteracciones.

Cuando un menú desplegable (dropdown) se abría, utilizaba un *Ease-out* para que la entrada fuera rápida pero el final del movimiento fuera suave, como si el elemento estuviera aterrizando en su posición. Para los cierres, aplicaba un *Ease-in*. Esta atención al detalle en las curvas de aceleración otorga a la interfaz un "peso" y una "naturalidad" que el ojo humano agradece. Alineé estas curvas con los Principios de Diseño de Interacción que habíamos establecido: el movimiento debe ser sutil, tener un propósito y ser consistente. Si un elemento se desplaza, debe hacerlo con la misma elegancia en toda la plataforma.

#### Minimalismo en acción: expansiones y acordeones

La plataforma del Centro Médico ABC maneja una densidad de información considerable, especialmente en perfiles de médicos o detalles de seguros. Para mantener el minimalismo visual sin sacrificar el acceso a los datos, implementé secciones colapsables y acordeones utilizando variantes de componentes interactivos.

El reto técnico aquí fue asegurar que la expansión de un acordeón se sintiera fluida. Utilicé Smart Animate para que, al hacer clic en un disparador de "Ver más especialidades", el contenedor se expandiera y empujara el contenido inferior de forma coordinada. Esto permitía que el usuario explorara la información de manera progresiva (progressive disclosure). Si la expansión hubiera sido instantánea, el resto de la página "saltaría" de posición, obligando al usuario a re-escanear la pantalla para encontrar dónde quedó su punto de lectura. Con la transición fluida, el ojo acompaña el desplazamiento del contenido, manteniendo el hilo de la navegación sin interrupciones.

#### El rigor del "Dogfooding": validación interna de la fluidez

Antes de considerar el prototipo terminado, me impuse una fase de pruebas internas exhaustivas, lo que en el oficio llamamos "comer tu propia comida de perro". Me encerré a navegar el prototipo durante horas, repitiendo los flujos de búsqueda, agendamiento y portal del paciente tanto en la versión de escritorio como en la móvil.

Durante este proceso, identifiqué y eliminé lo que llamo "ruido visual". Descubrí que algunas animaciones de Smart Animate, aunque se veían bien individualmente, resultaban agotadoras cuando se repetían diez veces en una sesión. Ajusté tiempos, simplifiqué algunas transiciones que se sentían demasiado "protagonistas" y me aseguré de que cada hotspot fuera consistente. Verifiqué que un clic en el logo siempre me devolviera a la Home con el mismo tipo de transición y que los overlays de los modales tuvieran la misma opacidad y velocidad de entrada.

Al final de este refinamiento, el prototipo dejó de ser una serie de pantallas para convertirse en un organismo vivo. La percepción de la marca ABC se elevó: la fluidez de la interfaz ahora comunicaba una institución moderna, precisa y, sobre todo, cuidadosa con la experiencia de sus pacientes. Había logrado construir un artefacto que no solo funcionaba, sino que se sentía correcto.

> **Insight Senior:** En una plataforma de salud, la animación no es decoración, es cortesía. Una transición suave es la forma en que la interfaz le dice al usuario: "te estoy escuchando y te estoy guiando con cuidado".


Al cerrar la última sesión de pulido en escritorio, me sentí satisfecho con la fluidez lograda, pero una duda empezó a inquietarme mientras miraba el prototipo en mi monitor de 27 pulgadas. Habíamos optimizado cada milisegundo para una experiencia de cursor y teclado, pero ¿cómo se traduciría esa "calidez humana" y esa precisión en el espacio reducido de un smartphone, donde el pulgar reemplaza al puntero? La verdadera prueba de fuego no estaba en la pantalla grande, sino en la capacidad de este sistema para mantener su integridad y facilidad de uso cuando el paciente, quizás en medio de una urgencia, intentara navegarlo desde la palma de su mano.

---

### Parte 6: Adaptabilidad y Prototipado Multi-dispositivo

#### La tiranía del viewport reducido

Al cerrar la última sesión de pulido en escritorio, me sentí satisfecho con la fluidez lograda, pero una duda empezó a inquietarme mientras miraba el prototipo en mi monitor de 27 pulgadas. Habíamos optimizado cada milisegundo para una experiencia de cursor y teclado, pero la realidad del paciente del Centro Médico ABC es mucho más impredecible. ¿Cómo se traduciría esa "calidez humana" y esa precisión en el espacio reducido de un smartphone, donde el pulgar reemplaza al puntero? La verdadera prueba de fuego no estaba en la pantalla grande, sino en la capacidad de este sistema para mantener su integridad y facilidad de uso cuando el paciente, quizás en medio de una urgencia o caminando por la calle, intentara navegarlo desde la palma de su mano.

Diseñar para móvil no es una tarea de "redimensionamiento", es un ejercicio de priorización brutal. Mi razonamiento estratégico fue claro: la calidez no podía sacrificarse por el tamaño de la pantalla, pero la eficiencia debía dispararse. En un dispositivo móvil, el ruido visual se penaliza el doble. Sabía que el prototipo móvil no podía ser una versión recortada de la web; tenía que ser una adaptación táctica donde los flujos críticos fueran infalibles. Si un usuario buscaba un médico bajo estrés, cada píxel de fricción extra sería una falta de respeto a su situación.

#### La selección quirúrgica de flujos móviles

Siguiendo el plan que tracé en la planificación del alcance, decidí que no era eficiente —ni necesario para esta etapa de validación— replicar las 40 pantallas en formato móvil. Como responsable único del prototipo, enfoqué mi energía en los flujos donde la movilidad era un factor determinante. Seleccioné el flujo de **"Encontrar un Médico"** y el **"Perfil del Especialista"** como los pilares de la versión móvil. 

Dupliqué los frames clave y empecé la transición al viewport de un smartphone estándar (375px de ancho). No se trataba de mover elementos de lugar; realicé una auditoría de jerarquía visual en cada pantalla. En el escritorio, podíamos permitirnos una barra lateral de filtros siempre visible; en móvil, eso era imposible. Tuve que decidir qué información del médico era vital para la primera impresión táctil: la foto, la especialidad y el botón de agendamiento pasaron a ser los dueños absolutos del primer scroll. Mi objetivo era asegurar que la "Experiencia Real del Usuario" se mantuviera intacta: el paciente debía sentir la misma confianza y profesionalismo de la institución, sin importar que estuviera usando un iPhone o una computadora de escritorio.

#### La ingeniería del menú hamburguesa

Uno de los desafíos técnicos más críticos fue la navegación global. En la plataforma actual del Centro Médico ABC, la arquitectura de información es densa debido a la cantidad de servicios. Para el prototipo, implementé la navegación móvil utilizando la función **"Open Overlay"** de Figma. Diseñé un frame independiente para el menú lateral, cuidando que no fuera solo una lista de enlaces, sino una extensión de la identidad visual.

Configuré la interacción para que, al presionar el icono de hamburguesa, el menú apareciera con una animación de **"Move In"** desde la derecha. Elegí esta dirección porque la mayoría de los usuarios son diestros y el pulgar alcanza con más naturalidad ese lado de la pantalla. Fui obsesivo con la configuración del overlay: activé la opción "Close when clicking outside" y añadí un fondo oscurecido (backdrop) con un 50% de opacidad para centrar la atención del usuario en la navegación y eliminar las distracciones del contenido de fondo. Esta microinteracción, aunque sutil, es lo que separa a un prototipo que se siente como una web de uno que se siente como una herramienta profesional y nativa.

#### Constraints y la elasticidad del diseño

Para que la transición fuera técnica y no solo visual, me apoyé profundamente en el **Design System** que ya habíamos consolidado. Utilicé **"Constraints"** (Left & Right) y **"Auto Layout"** en casi todos los componentes móviles. Esto no era un capricho técnico; era una medida de blindaje. Necesitaba que, si decidíamos probar el prototipo en un dispositivo con una resolución ligeramente distinta, los elementos como las tarjetas de los médicos o los botones de acción principal se expandieran correctamente sin romperse.

Ajusté los márgenes laterales de 80px (en desktop) a 16px para aprovechar cada milímetro de ancho. También recalibré las escalas tipográficas; lo que en escritorio funcionaba como un H1 elegante, en móvil ocupaba demasiado espacio vertical. Reduje los tamaños de fuente manteniendo el contraste, asegurando que la legibilidad no se viera comprometida en pantallas de alta densidad de píxeles. Cada decisión de **Auto Layout** fue una inversión para la fase de desarrollo: estaba entregando un plano elástico, no una imagen estática.

#### La ergonomía del pulgar: la regla de los 44 píxeles

En el contexto de la salud, un error al presionar un botón no es solo un problema de usabilidad, es una fuente de ansiedad. Por ello, dediqué una jornada entera a la validación de los **Hotspots** y la ergonomía táctil. Verifiqué que cada elemento interactivo tuviera un área de contacto mínima de 44x44 píxeles, incluso si el diseño visual del icono era más pequeño.

Ajusté las interacciones **"On Click"** para que fueran lo suficientemente generosas. En el flujo de búsqueda, por ejemplo, hice que toda la tarjeta del médico fuera un gran hotspot hacia su perfil, no solo el nombre o la foto. Esta "Usabilidad de Interacciones Detalladas" es lo que permite que una persona mayor o alguien con prisa pueda navegar sin frustración. Mi obsesión era eliminar el "fat finger syndrome": si el usuario quería agendar, el sistema debía responder a su primer toque, sin vacilaciones.

#### El flujo de búsqueda en la palma de la mano

Al ejecutar el flujo de "Encontrar un Médico" en el prototipo móvil, utilicé transiciones de **"Slide In"** para dar una sensación de progresión lineal. En la homepage móvil, simplifiqué el buscador a un solo campo prominente. Al interactuar con él, el teclado simulado aparecía y la transición hacia los resultados de búsqueda era un desplazamiento lateral que le indicaba al cerebro del usuario: "estás avanzando en el proceso".

Para los filtros, que en desktop eran una lista extensa, diseñé un componente de "Filtros Rápidos" en un carrusel horizontal superior. Esto permitía al paciente filtrar por "Especialidad" o "Campus" con un solo toque, sin tener que abrir un modal complejo si no era necesario. Si el usuario necesitaba más detalle, un botón de "Todos los filtros" abría un overlay que ocupaba toda la pantalla, permitiendo una selección cómoda y clara. Esta estructura garantizaba que el paciente sintiera que tenía el control total de la búsqueda, progresando hacia su objetivo de salud de manera lineal y sin callejones sin salida.

#### Auditoría de paridad y consistencia de marca

Finalmente, realicé una auditoría de paridad entre ambas versiones. Siguiendo mi ritual de **"comer mi propia comida de perro"**, navegué ambos prototipos en paralelo. Verifiqué que las microinteracciones —como el cambio de color de un botón al ser presionado o la velocidad de desaparición de un mensaje de confirmación— fueran idénticas en comportamiento, aunque adaptadas en escala.

El objetivo era evitar cualquier ruptura cognitiva. Un paciente que empieza a investigar un síntoma en su laptop durante el desayuno y decide agendar la cita desde su móvil en el transporte público debe sentir que está en la misma institución. La promesa de marca del Centro Médico ABC —seguridad, calidez y profesionalismo— debía ser una constante técnica. Al terminar, el prototipo móvil no solo era funcional; era una herramienta de comunicación poderosa que demostraba a los stakeholders que la accesibilidad móvil era una necesidad vital, no un añadido estético.

> **Insight Senior:** En diseño para salud, el móvil no es la "segunda pantalla", es a menudo la pantalla de la urgencia. Si tu prototipo no se puede operar con una sola mano mientras caminas, no has diseñado una solución, has diseñado un obstáculo.


Con los prototipos de escritorio y móvil finalmente articulados y funcionando como un ecosistema coherente, la sensación de logro fue inmediata, pero breve. Al recorrer los flujos por centésima vez, empecé a notar pequeños detalles que me inquietaron: un retraso casi imperceptible en un modal, una inconsistencia en el feedback visual de un formulario y la duda de si la lógica de navegación que yo encontraba "obvia" sobreviviría al contacto con un usuario real. El artefacto estaba construido, pero ahora necesitaba someterlo a una auditoría interna implacable antes de permitir que cualquier paciente pusiera un dedo sobre él; era el momento de enfrentarme a mis propios errores en el QA final.#### La tiranía del viewport reducido

Al cerrar la última sesión de pulido en escritorio, me sentí satisfecho con la fluidez lograda, pero una duda empezó a inquietarme mientras miraba el prototipo en mi monitor de 27 pulgadas. Habíamos optimizado cada milisegundo para una experiencia de cursor y teclado, pero la realidad del paciente del Centro Médico ABC es mucho más impredecible. ¿Cómo se traduciría esa "calidez humana" y esa precisión en el espacio reducido de un smartphone, donde el pulgar reemplaza al puntero? La verdadera prueba de fuego no estaba en la pantalla grande, sino en la capacidad de este sistema para mantener su integridad y facilidad de uso cuando el paciente, quizás en medio de una urgencia o caminando por la calle, intentara navegarlo desde la palma de su mano.

Diseñar para móvil no es una tarea de "redimensionamiento", es un ejercicio de priorización brutal. Mi razonamiento estratégico fue claro: la calidez no podía sacrificarse por el tamaño de la pantalla, pero la eficiencia debía dispararse. En un dispositivo móvil, el ruido visual se penaliza el doble. Sabía que el prototipo móvil no podía ser una versión recortada de la web; tenía que ser una adaptación táctica donde los flujos críticos fueran infalibles. Si un usuario buscaba un médico bajo estrés, cada píxel de fricción extra sería una falta de respeto a su situación.

#### La selección quirúrgica de flujos móviles

Siguiendo el plan que tracé en la planificación del alcance, decidí que no era eficiente —ni necesario para esta etapa de validación— replicar las 40 pantallas en formato móvil. Como responsable único del prototipo, enfoqué mi energía en los flujos donde la movilidad era un factor determinante. Seleccioné el flujo de **"Encontrar un Médico"** y el **"Perfil del Especialista"** como los pilares de la versión móvil. 

Dupliqué los frames clave y empecé la transición al viewport de un smartphone estándar (375px de ancho). No se trataba de mover elementos de lugar; realicé una auditoría de jerarquía visual en cada pantalla. En el escritorio, podíamos permitirnos una barra lateral de filtros siempre visible; en móvil, eso era imposible. Tuve que decidir qué información del médico era vital para la primera impresión táctil: la foto, la especialidad y el botón de agendamiento pasaron a ser los dueños absolutos del primer scroll. Mi objetivo era asegurar que la "Experiencia Real del Usuario" se mantuviera intacta: el paciente debía sentir la misma confianza y profesionalismo de la institución, sin importar que estuviera usando un iPhone o una computadora de escritorio.

#### La ingeniería del menú hamburguesa

Uno de los desafíos técnicos más críticos fue la navegación global. En la plataforma actual del Centro Médico ABC, la arquitectura de información es densa debido a la cantidad de servicios. Para el prototipo, implementé la navegación móvil utilizando la función **"Open Overlay"** de Figma. Diseñé un frame independiente para el menú lateral, cuidando que no fuera solo una lista de enlaces, sino una extensión de la identidad visual.

Configuré la interacción para que, al presionar el icono de hamburguesa, el menú apareciera con una animación de **"Move In"** desde la derecha. Elegí esta dirección porque la mayoría de los usuarios son diestros y el pulgar alcanza con más naturalidad ese lado de la pantalla. Fui obsesivo con la configuración del overlay: activé la opción "Close when clicking outside" y añadí un fondo oscurecido (backdrop) con un 50% de opacidad para centrar la atención del usuario en la navegación y eliminar las distracciones del contenido de fondo. Esta microinteracción, aunque sutil, es lo que separa a un prototipo que se siente como una web de uno que se siente como una herramienta profesional y nativa.

#### Constraints y la elasticidad del diseño

Para que la transición fuera técnica y no solo visual, me apoyé profundamente en el **Design System** que ya habíamos consolidado. Utilicé **"Constraints"** (Left & Right) y **"Auto Layout"** en casi todos los componentes móviles. Esto no era un capricho técnico; era una medida de blindaje. Necesitaba que, si decidíamos probar el prototipo en un dispositivo con una resolución ligeramente distinta, los elementos como las tarjetas de los médicos o los botones de acción principal se expandieran correctamente sin romperse.

Ajusté los márgenes laterales de 80px (en escritorio) a 16px para aprovechar cada milímetro de ancho. También recalibré las escalas tipográficas; lo que en escritorio funcionaba como un H1 elegante, en móvil ocupaba demasiado espacio vertical. Reduje los tamaños de fuente manteniendo el contraste, asegurando que la legibilidad no se viera comprometida en pantallas de alta densidad de píxeles. Cada decisión de **Auto Layout** fue una inversión para la fase de desarrollo: estaba entregando un plano elástico, no una imagen estática.

#### La ergonomía del pulgar: la regla de los 44 píxeles

En el contexto de la salud, un error al presionar un botón no es solo un problema de usabilidad, es una fuente de ansiedad. Por ello, dediqué una jornada entera a la validación de los **Hotspots** y la ergonomía táctil. Verifiqué que cada elemento interactivo tuviera un área de contacto mínima de 44x44 píxeles, incluso si el diseño visual del icono era más pequeño.

Ajusté las interacciones **"On Click"** para que fueran lo suficientemente generosas. En el flujo de búsqueda, por ejemplo, hice que toda la tarjeta del médico fuera un gran hotspot hacia su perfil, no solo el nombre o la foto. Esta "Usabilidad de Interacciones Detalladas" es lo que permite que una persona mayor o alguien con prisa pueda navegar sin frustración. Mi obsesión era eliminar el "fat finger syndrome": si el usuario quería agendar, el sistema debía responder a su primer toque, sin vacilaciones.

#### El flujo de búsqueda en la palma de la mano

Al ejecutar el flujo de "Encontrar un Médico" en el prototipo móvil, utilicé transiciones de **"Slide In"** para dar una sensación de progresión lineal. En la homepage móvil, simplifiqué el buscador a un solo campo prominente. Al interactuar con él, el teclado simulado aparecía y la transición hacia los resultados de búsqueda era un desplazamiento lateral que le indicaba al cerebro del usuario: "estás avanzando en el proceso".

Para los filtros, que en desktop eran una lista extensa, diseñé un componente de "Filtros Rápidos" en un carrusel horizontal superior. Esto permitía al paciente filtrar por "Especialidad" o "Campus" con un solo toque, sin tener que abrir un modal complejo si no era necesario. Si el usuario necesitaba más detalle, un botón de "Todos los filtros" abría un overlay que ocupaba toda la pantalla, permitiendo una selección cómoda y clara. Esta estructura garantizaba que el paciente sintiera que tenía el control total de la búsqueda, progresando hacia su objetivo de salud de manera lineal y sin callejones sin salida.

#### Auditoría de paridad y consistencia de marca

Finalmente, realicé una auditoría de paridad entre ambas versiones. Siguiendo mi ritual de **"comer mi propia comida de perro"**, navegué ambos prototipos en paralelo. Verifiqué que las microinteracciones —como el cambio de color de un botón al ser presionado o la velocidad de desaparición de un mensaje de confirmación— fueran idénticas en comportamiento, aunque adaptadas en escala.

El objetivo era evitar cualquier ruptura cognitiva. Un paciente que empieza a investigar un síntoma en su laptop durante el desayuno y decide agendar la cita desde su móvil en el transporte público debe sentir que está en la misma institución. La promesa de marca del Centro Médico ABC —seguridad, calidez y profesionalismo— debía ser una constante técnica. Al terminar, el prototipo móvil no solo era funcional; era una herramienta de comunicación poderosa que demostraba a los stakeholders que la accesibilidad móvil era una necesidad vital, no un añadido estético.

> **Insight Senior:** En diseño para salud, el móvil no es la "segunda pantalla", es a menudo la pantalla de la urgencia. Si tu prototipo no se puede operar con una sola mano mientras caminas, no has diseñado una solución, has diseñado un obstáculo.


Con los prototipos de escritorio y móvil finalmente articulados y funcionando como un ecosistema coherente, la sensación de logro fue inmediata, pero breve. Al recorrer los flujos por centésima vez, empecé a notar pequeños detalles que me inquietaron: un retraso casi imperceptible en un modal, una inconsistencia en el feedback visual de un formulario y la duda de si la lógica de navegación que yo encontraba "obvia" sobreviviría al contacto con un usuario real. El artefacto estaba construido, pero ahora necesitaba someterlo a una auditoría interna implacable antes de permitir que cualquier paciente pusiera un dedo sobre él; era el momento de enfrentarme a mis propios errores en el QA final.

---

### Parte 7: Qa Interno y Validación de Usabilidad Final

#### La auditoría forense: rompiendo mi propio trabajo

Con el prototipo de alta fidelidad finalmente articulado, me encontré en ese punto crítico donde la complacencia es el mayor enemigo del diseño. Tenía frente a mí un ecosistema de pantallas que se veía impecable, pero sabía que un artefacto de esta complejidad técnica —con decenas de flujos cruzados y microinteracciones— es inherentemente frágil. Como responsable único de la ejecución, mi primera maniobra no fue celebrar, sino aplicar un **QA forense** implacable. Adopté la mentalidad de "comer mi propia comida de perro", sometiendo al prototipo a una prueba de estrés interna antes de que cualquier stakeholder o paciente pusiera un dedo sobre él.

Recorrí sistemáticamente cada uno de los flujos críticos que había definido en mi planificación de alcance: la búsqueda de especialistas, el agendamiento de estudios y el acceso al portal. No se trataba de una navegación superficial; estaba cazando errores en la lógica. Verifiqué la fluidez de las animaciones **Smart Animate** y las transiciones **Dissolve** para asegurar que no hubiera saltos visuales bruscos que rompieran la inmersión. En un entorno de salud, cualquier "glitch" visual se traduce en una percepción de falta de profesionalismo. Si una tarjeta de médico no se expandía con la suavidad que la marca ABC exige, la ajustaba. Esta revisión fue mi última línea de defensa para garantizar que el artefacto fuera lo suficientemente robusto como para resistir el uso errático y no lineal de un usuario real.

#### El laberinto de conexiones y la consistencia global

Para asegurar la integridad del prototipo, realicé una auditoría exhaustiva de lo que en Figma llamamos "noodles" o conexiones. Al trabajar con un volumen tan alto de pantallas, es alarmantemente fácil que un enlace se pierda o apunte al destino equivocado. Me enfoqué en blindar la navegación global y utilitaria: revisé que cada *hotspot* en el header y el footer fuera consistente en todas las pantallas. El logo debía retornar siempre a la homepage sin excepciones, y los **Mega Menús** de servicios debían activarse con precisión quirúrgica mediante la función **Open Overlay**.

Durante este proceso, identifiqué y corregí varios "bugs" de navegación que habrían arruinado una sesión de prueba. Encontré enlaces muertos en el footer y destinos incorrectos en el flujo de agendamiento que solo se hicieron evidentes al interactuar con el prototipo en modo presentación. Mi razonamiento era claro: la consistencia no es solo un valor estético, es una necesidad cognitiva para el paciente. Si el usuario siente que el sistema "se rompe" o lo lleva a un callejón sin salida, la confianza en la institución se erosiona. Al finalizar esta fase de pulido técnico, el prototipo no solo se veía real; se comportaba con la solidez de un producto ya programado.

#### El contacto con la realidad: 8 usuarios y una pantalla de Google Meet

Una vez que el artefacto estuvo blindado internamente, llegó el momento de la verdad: las pruebas de usabilidad moderadas. Recluté a **8 participantes** que representaban fielmente a nuestras personas clave —Elena, Carlos y Sofía— asegurando una mezcla de afinidad tecnológica y necesidades médicas reales. Ejecuté las sesiones de forma remota vía Google Meet, observando con atención casi clínica cómo navegaban las tareas que les asigné.

> **Insight Senior:** Observar a un usuario dudar frente a un botón que tú considerabas "obvio" es la lección de humildad más necesaria en nuestra carrera. El diseño no es lo que tú proyectas, sino lo que el otro comprende.

Les pedí realizar acciones específicas: encontrar un gastroenterólogo en el Campus Santa Fe o buscar resultados de laboratorio en el portal unificado. Fue aquí donde surgió una tensión reveladora. Aunque el concepto de "Mi Portal Paciente ABC" era bien recibido, usuarias como Elena mostraron una ligera confusión inicial sobre la etiqueta. No estaban seguras de si era un "hub" completo o solo otro repositorio de radiología. Esta observación fue oro puro. Me llevó a iterar de inmediato sobre el **microcopy** en la homepage y en la página de acceso, reforzando el mensaje de que se trataba de un "centro de salud digital unificado". No esperé al reporte final para entender que la claridad terminológica era tan importante como la jerarquía visual.

#### La validación cuantitativa y el peso de la estética

Al consolidar los datos en mi informe detallado de pruebas de usabilidad, los números confirmaron lo que las sensaciones en las sesiones sugerían. Logramos una puntuación **SUS (System Usability Scale) de 78/100**, lo que categoriza la plataforma como "Buena a Excelente". Para ponerlo en perspectiva, el baseline del que partíamos antes del rediseño era un preocupante 45/100. Ver ese salto cuantitativo fue la validación definitiva de que las decisiones de arquitectura y diseño de interacción que tomé meses atrás eran las correctas.

Otros indicadores clave respaldaron el éxito:
*   **Tasa de éxito en tareas:** 95%, lo que significa que casi todos los usuarios completaron los flujos sin asistencia.
*   **Tiempo por tarea:** Logramos una reducción del 30% en comparación con la plataforma anterior.
*   **SEQ (Single Ease Question):** Un promedio de 6.2/7, indicando que los usuarios percibieron la interfaz como "muy fácil" de usar.

Más allá de los números, la percepción estética fue unánime. Los participantes describieron el sitio como "profesional, confiable y moderno". La paleta de azules institucionales con acentos cálidos y la tipografía seleccionada no solo cumplieron una función estética, sino que comunicaron la autoridad médica y la **calidez humana** que el Centro Médico ABC necesitaba proyectar. Habíamos logrado que lo digital no se sintiera frío ni burocrático, sino como una extensión del cuidado médico.

#### Blindando el artefacto para el handoff final

Con los resultados de las pruebas en mano, realicé una última ronda de iteraciones para dejar el diseño listo para ingeniería. No me limité a corregir errores de flujo; me obsesioné con los detalles que marcan la diferencia en la experiencia de uso diaria. Revisé y refiné el microcopy de todos los mensajes de error y validación de formularios. En lugar de mensajes técnicos y fríos, diseñé respuestas empáticas y útiles, asegurando que incluso cuando algo sale mal, el paciente sienta que la institución lo está guiando.

También añadí módulos de "Contacto Directo" más visibles en las páginas de los Centros de Alta Especialidad, respondiendo a una necesidad detectada durante las pruebas donde algunos usuarios buscaban teléfonos específicos sin éxito. Al finalizar, el prototipo de alta fidelidad, junto con las especificaciones de interacción y el Design System, quedó blindado y documentado. Este proceso de QA y validación cerró el ciclo de diseño, transformando una visión estratégica en un artefacto técnico listo para ser convertido en código. Me aseguré de que cada decisión estuviera respaldada por evidencia, garantizando que la visión original se mantuviera intacta durante la implementación.

**Reflexión final:**
Cerrar esta fase de prototipado y validación me recordó que el diseño de producto es, en última instancia, un ejercicio de defensa del usuario. Lograr que el SUS score subiera de 45 a 78 no es solo un logro estadístico; es la confirmación de que hemos eliminado barreras reales que impedían a los pacientes gestionar su salud con dignidad. Me voy de esta actividad con la tranquilidad de que el equipo de desarrollo recibirá un artefacto que no solo funciona, sino que ha sido probado en el fuego de la interacción real, dejando un valor tangible que se refleja hoy en la plataforma operativa del Centro Médico ABC.

---

