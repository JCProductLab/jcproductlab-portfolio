# Fase 2: Ideación y Diseño

## Actividad 5: actividad_05_diseno_de_interaccion

### Parte 1: AUDITORÍA FORENSE DE INSUMOS Y ALINEACIÓN ESTRATÉGICA

Al cerrar la fase de Wireframes de Alta Fidelidad, me encontré ante un muro de pantallas estáticas que, aunque estructuralmente impecables, estaban mudas. Tenía frente a mí la arquitectura ósea del MVP de AsDeporte, pero faltaba el sistema nervioso: la capa de comportamiento que dictaría cómo reaccionaría la plataforma ante el toque, el deslizamiento o la espera del atleta. Un diseño estéticamente coherente es solo una promesa; la realidad del producto ocurre en el milisegundo en que el usuario interactúa con un control y espera una respuesta. Mi obsesión en este punto no era el "qué", sino el "cómo": cómo transformar esos planos inertes en una experiencia reactiva que eliminara de una vez por todas las fricciones históricas que habían lastrado la reputación digital de la marca.

#### La disección de la intención: Más allá del flujo feliz

Mi primer movimiento táctico fue una inmersión profunda en los Diagramas de Flujos de Usuario que habíamos consolidado semanas atrás. No los revisé como una simple secuencia de pasos, sino como un mapa de intenciones y riesgos. Me detuve en cada nodo de decisión, especialmente en aquellos donde el atleta B2C se enfrenta a una bifurcación crítica, como el momento de elegir una categoría en una inscripción o la configuración de privacidad al unirse a un grupo en Tribu.

Analicé estos flujos buscando los "puntos de silencio". Un flujo de usuario suele decirte a dónde va el atleta, pero rara vez detalla qué siente el sistema mientras tanto. Me pregunté: ¿Qué sucede en ese limbo de tres segundos mientras la pasarela de pago procesa la transacción? ¿Cómo le comunicamos proactivamente que su wearable se está sincronizando sin que sienta que la app se ha congelado? Esta revisión forense me permitió identificar que la lógica de navegación no podía ser lineal; necesitaba ser proactiva. Cada transición debía servir como un ancla de confianza, asegurando que el camino hacia la conversión fuera impecable y que el usuario nunca tuviera que preguntarse "¿y ahora qué?".

#### Auditoría de componentes: El inventario de la interactividad

Con los wireframes de alta fidelidad desplegados en mi monitor, inicié un proceso de inspección quirúrgica de cada componente. No me fijé en su posición, sino en su **affordance** y su capacidad de respuesta. Listé sistemáticamente cada elemento que requería una acción del usuario, desde los botones de llamada a la acción (CTA) primarios hasta los micro-controles de los mapas de livetracking.

Evalué la jerarquía visual de estos componentes para determinar su comportamiento dinámico:
*   **Botones y CTAs:** Definí que no bastaba con un estado "presionado". Necesitábamos estados de *loading* integrados para evitar clics repetidos en procesos críticos como el registro a un evento.
*   **Formularios y entrada de datos:** Identifiqué que la fricción en la app actual nacía de validaciones tardías. Decidí que cada campo debía tener un comportamiento reactivo: validación en tiempo real y mensajes de error que no solo señalaran el fallo, sino que guiaran la corrección.
*   **Filtros y selectores:** En una plataforma con cientos de eventos, el manejo de filtros es vital. Analicé cómo deberían comportarse los selectores de fecha y los sliders de distancia para que la respuesta en la lista de resultados fuera inmediata, evitando recargas de página innecesarias que rompieran el ritmo de exploración.
*   **Elementos de Tribu y Comunidad:** Aquí la interacción es social. Examiné cómo los elementos de la comunidad debían reaccionar al "unirse" o "compartir", buscando que el feedback visual reforzara el sentido de pertenencia de forma instantánea.

#### El eco de la frustración: Integrando el feedback de soporte

Para que el diseño de interacción fuera realmente efectivo, tuve que actuar como un detective forense con los hallazgos de la investigación de usuarios y los reportes de Soporte Técnico. No diseñé para un usuario ideal, sino para el atleta real que, sudado y con prisas, intenta revisar su tiempo de llegada en la meta.

Recordé los testimonios de atletas que mencionaban sentirse "perdidos" al usar ciertos controles de la app antigua. Esa confusión no era un error de layout, sino un fallo de comunicación del sistema. Utilicé estos puntos de dolor para mapear la "capa de comportamiento" necesaria. Si la investigación decía que los usuarios no sabían si su inscripción había sido exitosa hasta recibir un correo minutos después, mi respuesta en el diseño de interacción debía ser un **feedback loop** inmediato y gratificante dentro de la interfaz. La interacción debía ser predecible; el usuario debe saber exactamente qué pasará antes de tocar la pantalla, y el sistema debe confirmar que entendió la instrucción milisegundos después.

#### El cruce estratégico: Problem Statements vs. Ideación

Ninguna decisión de interacción fue gratuita. Realicé un ejercicio de alineación cruzada entre los *Problem Statements* definidos en la fase de estrategia y las ideas de solución que surgieron en la ideación. Mi objetivo era priorizar comportamientos que impactaran directamente en el negocio y en la satisfacción del atleta.

Por ejemplo, si uno de nuestros problemas críticos era la tasa de abandono en el checkout, la validación de formularios en tiempo real no era un "nice to have", sino una defensa estratégica del ingreso. Si la retención dependía de la funcionalidad de Tribu, el feedback de éxito al interactuar con otros miembros se convertía en una prioridad de diseño. Esta revisión me permitió blindar las decisiones de interacción contra la subjetividad estética; cada microinteracción propuesta tenía una razón de ser anclada en un problema de negocio o una necesidad del usuario previamente validada.

#### Convenciones y modelos mentales: El espejo de la industria

Finalmente, volví la vista al análisis competitivo digital. En el diseño de interacción, la innovación mal entendida puede ser un obstáculo. Los atletas ya tienen modelos mentales formados por aplicaciones que usan a diario, como Strava o Nike Run. Mi labor fue identificar esas convenciones de la industria para asegurar que AsDeporte se sintiera familiar desde el primer segundo.

Observé cómo estas plataformas líderes manejan la interacción con mapas y la visualización de métricas de rendimiento. No se trataba de copiar, sino de respetar los estándares de usabilidad que el usuario ya ha interiorizado. Si el gesto de "deslizar para refrescar" o la forma en que se despliega un menú lateral son ya un estándar, cambiarlos por algo "innovador" solo generaría fricción cognitiva. Mi enfoque fue asegurar que las interacciones de AsDeporte fueran intuitivas por naturaleza, permitiendo que el atleta se concentrara en su rendimiento y no en aprender a usar nuestra herramienta.

#### La importancia de la capa de comportamiento

Al terminar esta auditoría, reafirmé una convicción que ha guiado mi carrera: el diseño de interacción es el verdadero puente entre la intención del usuario y la funcionalidad del sistema. Un producto puede tener la arquitectura más robusta del mundo, pero si su interfaz es silenciosa o errática, el usuario la percibirá como rota. Esta fase de alineación y auditoría no fue un trámite burocrático; fue el momento en que decidimos que la nueva plataforma de AsDeporte dejaría de ser un catálogo de pantallas para convertirse en un compañero reactivo y confiable para el deportista.

Identifiqué los "puntos calientes" del flujo —el pago, la sincronización de wearables y la gestión de perfiles— como las áreas donde una microinteracción mal diseñada podría arruinar semanas de trabajo de branding y estrategia. Con este mapa de riesgos y oportunidades en la mano, estaba listo para dejar de analizar y empezar a construir la lógica que daría movimiento a todo el ecosistema.

> **Insight de diseño:** En IxD, el silencio del sistema es el ruido del usuario. Cada vez que una interfaz no responde a una acción, el usuario llena ese vacío con incertidumbre y desconfianza. Mi trabajo aquí fue asegurar que AsDeporte nunca se quedara callada.

**Próximo paso:**

#### ARQUITECTURA DEL MOVIMIENTO: NAVEGACIÓN Y CONTROLES DE DATOS
Tras haber diseccionado cada componente y alineado nuestras intenciones con los dolores reales del atleta, me enfrenté a una pregunta que los wireframes estáticos no podían responder: ¿cómo íbamos a mantener la coherencia en un sistema que debe vivir simultáneamente en una web responsive y en una app móvil nativa? La auditoría me había revelado que los puntos de fricción más peligrosos no estaban en las pantallas individuales, sino en las costuras entre ellas. Tenía que definir una gramática de navegación y un control de datos tan sólido que el usuario sintiera que la plataforma siempre sabía cuál era su siguiente paso, incluso antes que él mismo.

### Parte 2: ARQUITECTURA DEL MOVIMIENTO: NAVEGACIÓN Y CONTROLES DE DATOS

#### La gramática del movimiento: De la estructura al flujo

Tras cerrar la auditoría forense de los wireframes, me quedó una certeza incómoda: teníamos los huesos del sistema, pero nos faltaba el sistema nervioso. Un diseño de producto no es una serie de cuadros colgados en una galería; es una conversación continua entre el usuario y la máquina. En AsDeporte, esa conversación históricamente había sido entrecortada y confusa. Los reportes de soporte técnico eran claros: los atletas se sentían perdidos en un laberinto de eventos y resultados que parecían no tener conexión entre sí. Mi misión en esta etapa de **Diseño de Interacción (IxD)** fue articular una gramática de movimiento tan sólida que la navegación se volviera invisible.

No buscaba innovación gratuita. En una plataforma que gestiona miles de registros de carreras, triatlones y resultados históricos, la creatividad mal entendida es ruido. Mi razonamiento estratégico fue blindar la **predecibilidad**. Quería que el atleta, ya fuera en la web frente a su escritorio o en la app móvil minutos antes de una competencia, supiera instintivamente dónde estaba y cómo volver. Para lograrlo, tuve que trazar una línea divisoria clara pero coherente entre la experiencia web responsive y la nativa, asegurando que los patrones de navegación respetaran las convenciones mentales de cada dispositivo sin fragmentar la identidad del producto.

#### Ingeniería de la navegación global: El Header persistente

Empecé por la web, el punto de entrada para la planificación pesada y la consulta de resultados detallados. Decidí que la navegación global debía ser un ancla inamovible. Diseñé un **Header persistente** para pantallas de escritorio y tablet donde los cuatro pilares del MVP —Inicio, Eventos, Resultados y Mi Perfil— estuvieran siempre a la vista. 

Esta decisión no fue estética, fue una maniobra para reducir la carga cognitiva. En la versión anterior, estos enlaces a menudo desaparecían o se ocultaban tras menús ambiguos. Al mantenerlos visibles, eliminé clics innecesarios y reforcé la jerarquía de la plataforma desde el primer segundo. Para añadir esa capa de "diálogo" con el usuario, implementé estados de **hover** quirúrgicos: cambios de color y subrayados sutiles que actúan como un apretón de manos visual, confirmando que el elemento es interactivo antes de que el usuario decida actuar. Es un pequeño detalle de retroalimentación que construye confianza en la interfaz.

> **Insight de diseño:** La persistencia no es falta de espacio, es exceso de claridad. Si el usuario tiene que buscar el menú para saber en qué sección está, el mapa mental se ha roto. En AsDeporte, el Header es la brújula que nunca deja de apuntar al norte.

#### Adaptabilidad y el colapso estratégico en Web Responsive

El verdadero reto de la web no está en el monitor de 27 pulgadas, sino en el navegador móvil. Aquí es donde la arquitectura de información suele colapsar. Para la versión **Web Responsive**, articulé una lógica de colapso donde el Header se transforma en un ícono de menú hamburguesa. 

No es simplemente esconder cosas; es priorizar el **viewport**. Al activarse, el menú despliega una capa lateral que ocupa la pantalla completa, presentando los enlaces principales con una tipografía generosa, fácil de tocar con el pulgar. Implementé una regla de cierre automático: en el momento en que el usuario selecciona una sección, el menú desaparece para dejar paso al contenido. Esta limpieza visual es crítica para un atleta que está revisando la ruta de una carrera en su teléfono mientras camina; no puede haber elementos compitiendo por su atención.

#### Ergonomía y retención: La Tab Bar nativa

Cuando pasé al diseño de la **App Móvil**, las reglas cambiaron por completo. Aquí la navegación no es un Header, es una extensión de la mano del usuario. Siguiendo los estándares de ergonomía móvil, implementé una **Barra de Pestañas Inferior (Tab Bar)**. 

Mantuve los mismos cuatro pilares (Inicio, Eventos, Mi Perfil, Resultados), pero los ubiqué en la "zona de confort" del pulgar. Cada pestaña utiliza un ícono acompañado de una etiqueta de texto; nunca confío solo en la iconografía, especialmente en un producto con una base de usuarios tan diversa en edad y alfabetización digital como la de AsDeporte. Definí estados activos mediante un peso visual diferencial y un cambio de color que indica la ubicación actual. Lo más importante: esta navegación es "suave". Al cambiar entre pestañas, el contenido se actualiza sin recargar la pantalla completa, manteniendo la sensación de fluidez que se espera de una aplicación nativa moderna.

#### Coreografía de transiciones y mapas mentales

Uno de los problemas que detecté en la investigación fue que los usuarios a menudo no sabían "dónde" estaban dentro de la profundidad de la aplicación. Para resolver esto, diseñé una coreografía de transiciones que ayuda a construir un mapa mental espacial.

*   **En la Web:** Mantuve las transiciones estándar del navegador. El usuario de escritorio espera la carga de página; romper esa convención con animaciones extrañas puede generar desconfianza o sensación de lentitud.
*   **En la App:** Implementé una **navegación jerárquica** con animaciones de deslizamiento lateral. Al entrar en el detalle de un evento, la pantalla se desliza de derecha a izquierda, sugiriendo que el usuario está "entrando" en una capa más profunda. Para volver, el ícono de flecha "<" en la esquina superior izquierda dispara el movimiento inverso. 

Esta espacialidad no es decorativa. Es una señal visual que le dice al cerebro: "estás un nivel más adentro". Si el usuario sabe cómo entró, sabe cómo salir. Esa sensación de control es lo que separa una aplicación profesional de una herramienta frustrante.

#### Control forense de datos: Filtros y Modales

Si la navegación es el mapa, los filtros son el microscopio. AsDeporte tiene una densidad de datos abrumadora: cientos de eventos simultáneos, miles de resultados históricos. Mi objetivo fue que el usuario pudiera encontrar una aguja en un pajar sin sentir que estaba trabajando.

En la **Web**, aproveché el espacio horizontal. Diseñé los filtros en una barra lateral persistente con checkboxes y selectores de radio. Esto permite que el atleta vea todas sus opciones de un vistazo: deporte, estado, rango de fechas y distancia. Es una visión panorámica que invita a la exploración.

Sin embargo, en la **App**, ese mismo enfoque habría arruinado la experiencia. En lugar de apretar los controles, decidí encapsularlos en un **modal dedicado**. El usuario ve un ícono de filtro claro en el listado de eventos; al tocarlo, se abre una pantalla limpia donde puede concentrarse exclusivamente en segmentar la información. Una vez que termina, un botón de acción principal devuelve al usuario al listado ya filtrado. Esta separación de tareas evita errores de selección accidental y mantiene el listado principal libre de desorden visual.

#### La lógica de la confirmación: Aplicar vs. Live

Tomé una decisión estratégica sobre el ritmo de la interacción con los datos. Aunque la actualización en tiempo real (mientras seleccionas filtros) parece "moderna", en sistemas con bases de datos complejas puede generar un parpadeo molesto y una sensación de inestabilidad si la conexión no es perfecta.

Para AsDeporte, opté por el uso de un botón **"Aplicar Filtros"**. Esto le da al usuario el control total: elige sus criterios y, solo cuando está listo, dispara la búsqueda. Para evitar que el usuario olvide qué filtros tiene activos, incluí dos mecanismos de retroalimentación:
1.  Un **indicador visual** (un punto de color) sobre el ícono de filtro en la pantalla principal.
2.  Un **resumen conciso** en la parte superior del listado (ej: "Running • Próximos 30 días").

Este resumen es fundamental. Permite que el usuario entienda por qué está viendo solo tres eventos en lugar de cincuenta, eliminando la duda de si el sistema está fallando o si simplemente los criterios son muy específicos.

#### Estandarización de selectores y entrada de datos temporales

Finalmente, abordé la entrada de datos más común y propensa a errores: las fechas. En lugar de diseñar componentes personalizados que el usuario tuviera que aprender, decidí utilizar los **selectores nativos** de cada plataforma (iOS, Android y los calendarios estándar de navegadores).

Al buscar un evento para el próximo semestre, el usuario interactúa con un calendario que ya conoce. No hay fricción de aprendizaje. En la app, configuré el sistema para que disparara el teclado numérico automáticamente cuando el campo lo requiere, optimizando la velocidad de entrada. Cada segundo ahorrado en la búsqueda es un segundo más cerca de la conversión (la inscripción al evento).

Al cerrar esta definición de la arquitectura del movimiento, logré transformar una estructura estática en un sistema dinámico y predecible. Había trazado los caminos y definido cómo el usuario podía manipular la información sin perderse. Sin embargo, la navegación y los filtros son solo la mitad de la historia. El verdadero momento de la verdad ocurre cuando el usuario deja de observar y empieza a actuar: cuando se inscribe, cuando paga, cuando crea su perfil.

> **Reflexión Senior:** En una plataforma de eventos deportivos, la navegación no debe ser creativa, debe ser invisible. Mi obsesión fue eliminar el "ruido de interfaz" para que el dato del evento fuera el protagonista. La predecibilidad es, en última instancia, el servicio más valioso que podemos ofrecerle a un atleta estresado antes de una competencia.

**Próximo paso:**

#### EL DIÁLOGO CON EL USUARIO: FORMULARIOS, CTAS Y FEEDBACK
Con la estructura de movimiento ya blindada, me di cuenta de que el sistema aún tenía un punto ciego crítico: la comunicación bidireccional. Teníamos los caminos, pero no habíamos definido cómo el sistema iba a responder cuando el usuario cometiera un error en un formulario de inscripción o cuando una transacción de pago quedara en el limbo. Al observar los flujos de registro, sentí la tensión de saber que, sin un sistema de feedback y validación en tiempo real, todo el orden que habíamos construido en la navegación se vendría abajo al primer error de dedo del usuario. Estábamos a punto de entrar en la fase más delicada: diseñar el diálogo que convierte a un visitante en un atleta inscrito.

### Parte 3: EL DIÁLOGO CON EL USUARIO: FORMULARIOS, CTAS Y FEEDBACK

#### EL DIÁLOGO CON EL USUARIO: FORMULARIOS, CTAS Y FEEDBACK

Teníamos la estructura de navegación blindada, pero sabía que un mapa perfecto no sirve de nada si el viajero se siente ignorado al intentar pedir indicaciones. Al observar los flujos de inscripción, sentí la tensión de saber que estábamos entrando en la zona de mayor abandono: el ingreso de datos. Como diseñador, entiendo que la navegación es el movimiento, pero el formulario es la conversación. Si el sistema no responde con claridad, el atleta, que ya carga con la ansiedad de asegurar su lugar en una competencia, simplemente se retira. Mi razonamiento fue tajante: debíamos transformar la entrada de datos de una tarea administrativa en un diálogo fluido y asistido que eliminara cualquier rastro de fricción en el punto más crítico del embudo de conversión.

#### Anatomía y estados de los campos de formulario

Para asegurar que esta conversación fuera coherente, comencé definiendo una lógica rigurosa para la anatomía de los campos de entrada. No se trataba solo de dibujar cajas; se trataba de prever comportamientos. Articulé cuatro estados fundamentales que debían ser consistentes en toda la plataforma, tanto en la web responsive como en la app móvil:

*   **Estado Normal (Reposo):** Una apariencia limpia que invita a la acción sin abrumar visualmente.
*   **Estado Enfocado (Focus):** Crucial para la accesibilidad. Al hacer clic o tocar, el campo debe reaccionar visualmente (mediante un cambio de color en el borde o un grosor distinto) para que el usuario sepa exactamente dónde está ubicado su cursor.
*   **Estado con Datos:** Una validación visual sutil que confirma que la información ha sido ingresada.
*   **Estado de Error:** Un cambio a tonos de alerta que debe ir acompañado siempre de una explicación, no solo de un color.

En este punto, tomé una decisión de diseño firme: las etiquetas (*labels*) debían ser siempre visibles. Rechacé la tendencia de usar solo *placeholders* (texto de ejemplo dentro del campo) porque, aunque se ve más "limpio", destruye la memoria a corto plazo del usuario. En el momento en que empiezas a escribir, el *placeholder* desaparece y, si te distraes un segundo, olvidas qué te estaban preguntando. Mantuve las etiquetas externas y usé los *placeholders* solo como una guía adicional para el formato esperado, asegurando que el atleta nunca perdiera el contexto de su inscripción.

#### Validación en tiempo real: El asistente invisible

Uno de los mayores puntos de dolor que detectamos en la investigación previa era la frustración de llenar un formulario largo, hacer clic en "Enviar" y solo entonces recibir una lista de errores. Es una experiencia punitiva que rompe la confianza. Para AsDeporte, implementé un sistema de **inline validation** (validación en tiempo real). 

Mi objetivo era que el sistema actuara como un asistente que corrige en el momento, no como un juez que castiga al final. Diseñé la lógica para que, en campos críticos como el correo electrónico o el número de teléfono, el sistema validara el formato en cuanto el usuario pasara al siguiente campo. Si falta un "@" o el número de dígitos es insuficiente, el mensaje de error aparece de inmediato, de forma concisa y ubicado justo debajo del campo afectado. Esta retroalimentación instantánea reduce drásticamente la carga cognitiva y evita que el usuario acumule errores que luego le daría pereza corregir.

#### La batalla por la conversión: Optimización del teclado en móvil

En la aplicación móvil, la interacción con los formularios tiene un enemigo silencioso: el teclado virtual. Maniobré para que el sistema fuera lo suficientemente inteligente como para adaptar el teclado al tipo de dato solicitado. Es una decisión técnica que parece menor pero que define la tasa de conversión en dispositivos móviles.

*   Para los campos de teléfono o tarjeta de crédito, mandaté que el sistema invoque automáticamente el **teclado numérico**. No hay nada más molesto que tener que cambiar manualmente de teclado alfanumérico a numérico tres veces durante una compra.
*   Para los campos de email, el teclado debe mostrar siempre el símbolo "@" y el punto en la vista principal.

Además, diseñé el comportamiento del layout para que el campo activo nunca quedara oculto detrás del teclado. Programamos un ajuste dinámico de la vista para que, al ganar el foco, el campo se desplace hacia la mitad superior de la pantalla. Esta fue una respuesta directa a las quejas recibidas por el equipo de Soporte, donde los usuarios reportaban que "la app se rompía" porque no podían ver lo que estaban escribiendo.

#### Comportamiento de los CTAs y la prevención del error

Los botones o Llamadas a la Acción (CTAs) son el motor del producto. No pueden ser simples rectángulos clicables; deben comunicar su estado de disponibilidad en todo momento. Definí cinco estados para blindar la interacción:

1.  **Normal:** El estado base que comunica la acción principal.
2.  **Hover (Web):** Un cambio sutil de color o sombra que confirma al usuario que el elemento es interactivo antes de que haga clic.
3.  **Pressed (Activo):** Un feedback visual (o **haptic feedback** en la app) que simula la presión física, cerrando el ciclo de la intención táctil.
4.  **Disabled (Deshabilitado):** Una apariencia atenuada que bloquea la interacción si los requisitos previos (como aceptar términos y condiciones o llenar campos obligatorios) no se han cumplido. Esto evita que el usuario envíe formularios vacíos por error.
5.  **Loading (Carga):** Este es, quizás, el más crítico.

Al hacer clic en "Pagar" o "Confirmar Inscripción", el botón debe transformarse para mostrar un **spinner** de carga. Esta microinteracción es vital para gestionar la ansiedad del usuario y, sobre todo, para evitar el "doble clic" accidental. Si un atleta presiona dos veces el botón porque siente que la app "no hace nada", corremos el riesgo de duplicar transacciones bancarias. El estado *Loading* comunica que el sistema está trabajando y bloquea nuevas interacciones hasta que el proceso termine.

#### Feedback del sistema y el valor de la confirmación

La interacción no termina cuando el usuario hace clic; termina cuando el sistema confirma que la acción tuvo éxito. Para AsDeporte, diferencié claramente entre confirmaciones críticas y menores.

Para las acciones de alto impacto, como completar una inscripción o realizar un pago, diseñé **pantallas de confirmación dedicadas**. Estas no son simples mensajes; son momentos de celebración. El atleta ha invertido tiempo y dinero, y el sistema debe responder con una validación visual clara, un resumen de lo logrado y una sensación de cierre. 

En cambio, para acciones menores como actualizar una preferencia en el perfil o guardar un evento en favoritos, utilicé **Toasts** y banners temporales. Son mensajes discretos que aparecen en la periferia de la visión (superior o inferior), confirman la acción y desaparecen automáticamente tras unos segundos. Este patrón permite que el usuario siga navegando sin interrupciones innecesarias, manteniendo la fluidez de la experiencia.

#### Gestión de la espera: De la latencia a la percepción de velocidad

En un sistema que maneja grandes volúmenes de datos como el de AsDeporte, la latencia es una realidad técnica inevitable. Mi trabajo fue diseñar cómo "sentía" el usuario esa espera. En lugar de dejar una pantalla en blanco que generara incertidumbre, implementé una estrategia de indicadores de carga escalonada.

Para cargas de secciones completas, opté por el uso de **Skeleton Screens** (esqueletos de contenido). En lugar de un spinner genérico dando vueltas en el vacío, el usuario ve una estructura grisácea que imita la disposición de los elementos que están por cargar (como la lista de eventos). Esta técnica mejora la percepción de velocidad; el cerebro del usuario empieza a procesar la estructura de la página antes de que los datos reales lleguen del servidor. Es una forma de decir: "Ya casi llegamos, aquí es donde verás la información". Solo para procesos muy específicos y breves, como el filtrado de una lista, mantuve el uso de spinners localizados para no romper el flujo visual.

> **Reflexión Senior:** El diseño de interacción es, en su esencia más pura, la gestión de las expectativas y la confianza. Al proporcionar feedback constante y predecible, transformamos una interfaz fría en una herramienta fiable. Un atleta que siente que el sistema le responde en tiempo real es un usuario que confía sus datos y su dinero a la plataforma sin dudar.

**Próximo paso:**

#### LA CAPA DE SENSIBILIDAD: MICROINTERACCIONES Y ANIMACIONES
Con los patrones de diálogo y feedback ya establecidos, la plataforma era funcional y segura, pero le faltaba "alma". Me di cuenta de que, aunque el sistema respondía correctamente, las transiciones entre estados se sentían mecánicas, casi bruscas. Al ver cómo un usuario pasaba de la lista de eventos al detalle de una carrera, noté un salto visual que rompía la continuidad mental del proceso. Sabía que para alcanzar el nivel de pulido que una marca como AsDeporte exige, necesitábamos ir más allá de la lógica funcional y entrar en el terreno de la coreografía visual, donde cada movimiento tuviera un propósito narrativo y no solo estético.

### Parte 4: LA CAPA DE SENSIBILIDAD: MICROINTERACCIONES Y ANIMACIONES

#### LA CAPA DE SENSIBILIDAD: MICROINTERACCIONES Y ANIMACIONES

Al terminar de definir la lógica de los formularios y el control de datos, me encontré con un producto que funcionaba matemáticamente pero se sentía inerte. Teníamos una estructura sólida, sí, pero la experiencia de navegar por la nueva app de AsDeporte era, en ese momento, una sucesión de saltos bruscos. Un usuario hacía clic en un evento y, de pronto, aparecía la información; completaba un registro y la pantalla simplemente cambiaba. Esa frialdad sistémica es peligrosa: en un entorno de alta carga cognitiva —como un atleta intentando inscribirse a un Ironman bajo presión o consultando su livetracking con las pulsaciones a cien— la falta de sensibilidad en la interfaz genera una sutil pero constante sensación de desconfianza.

Mi razonamiento en este punto fue que necesitábamos inyectar "alma" a la plataforma. No se trataba de decorar, sino de establecer una coreografía visual que eliminara la incertidumbre. La investigación previa con usuarios B2C y los reportes de Soporte habían sido claros: la gente a veces no sabía si el sistema había registrado su toque o si la app se había congelado. Mi misión fue transformar esos wireframes estáticos en una experiencia viva que "escuchara" y respondiera al usuario en tiempo real. Sabía que cada movimiento debía tener un propósito narrativo; si un elemento se movía, debía ser para explicarle al atleta de dónde venía la información o hacia dónde debía dirigir su atención.

#### La gramática del micro-feedback inmediato

Empecé por lo más básico y, a la vez, lo más ignorado: la respuesta táctil de los componentes. Diseñé microinteracciones para que cada botón y control de la interfaz tuviera una reacción instantánea al ser tocado. En lugar de un cambio binario de estado, implementé una escala de respuesta que confirmara al usuario que el sistema había recibido la orden. 

Para los botones de acción principal, como "Inscribirme" o "Unirse a Tribu", configuré una transición de estado *pressed* que reducía ligeramente la escala del elemento (un 2% o 3%) y oscurecía el color de fondo mediante una curva de aceleración *ease-out*. Este pequeño detalle físico reduce drásticamente la ansiedad del usuario; es la diferencia entre empujar una pared de concreto y sentir el clic de un interruptor bien diseñado. 

> **Decisión de Diseño:** Opté por tiempos de respuesta extremadamente cortos para estas microinteracciones, entre 100ms y 150ms. Superar ese umbral hace que la interfaz se sienta "pesada" o lenta; quedarte por debajo asegura que el cerebro perciba la respuesta como algo natural y físico, casi como si el botón fuera un objeto real bajo el cristal de la pantalla.

#### Estados de control y la eliminación del parpadeo seco

Siguiendo con el pulido de los componentes, me enfoqué en la configuración técnica de los estados *hover*, *pressed* y *disabled*. En la versión web responsive, donde el cursor es el protagonista, los estados *hover* no podían ser un simple cambio de color abrupto. Articulé transiciones suaves de unos 200ms a 300ms para las variaciones de color y elevación (sombras). 

Mi objetivo era evitar el "parpadeo seco" que ocurre cuando los elementos cambian de estado sin una transición intermedia. Al suavizar estos cambios, logramos comunicar la "clicabilidad" de forma elegante. El usuario sabe que un elemento es interactivo antes de pulsarlo porque el sistema le "saluda" visualmente al pasar el cursor. Para los estados deshabilitados, decidí no solo atenuar la opacidad, sino también eliminar cualquier respuesta de interacción, blindando el flujo contra clics accidentales en momentos donde el sistema aún está procesando información o el formulario está incompleto.

#### Coreografía de navegación: el mapa mental del atleta

Uno de los problemas más graves que detecté en la auditoría de la app anterior era la desorientación espacial. Los usuarios se perdían entre niveles jerárquicos. Para solucionar esto, definí una coreografía de transiciones entre pantallas basada en la ubicación lógica del contenido.

*   **Jerarquía Profunda (Slides):** Cuando el usuario avanza desde la lista de eventos hacia el detalle de una carrera específica (como un Maratón de la CDMX), utilicé un desplazamiento lateral (*Slide*) de derecha a izquierda. Al regresar, el movimiento es inverso. Este lenguaje visual le dice al cerebro: "estás entrando en una carpeta" y "estás saliendo de ella". Es una herramienta cognitiva, no estética; ayuda al atleta a mantener su ubicación espacial dentro de la arquitectura de la información.
*   **Cambios de Contexto (Fades):** Para transiciones entre secciones principales del menú inferior (de "Eventos" a "Tribu", por ejemplo), implementé desvanecimientos cruzados (*Cross-fades*) con una ligera escala de entrada. Al no haber una relación jerárquica directa entre estas secciones, el *fade* comunica un cambio de contexto global sin sugerir que una pantalla está "dentro" de la otra.

Estas decisiones las tomé para que el uso de la navegación fuera predecible y eficiente, reduciendo la carga cognitiva de tener que "aprender" dónde se está en cada momento.

#### El cierre psicológico: la validación visual en formularios

El momento más crítico para cualquier usuario de AsDeporte es el pago y la confirmación de inscripción. Es un proceso de alta carga emocional y cognitiva. Basándome en la necesidad de informar que una acción fue exitosa, diseñé una microinteracción específica para el feedback post-envío.

En lugar de saltar a una página de "Gracias" estática, creé una secuencia donde, al procesar el pago, el botón se transforma en un indicador de carga circular que, tras un segundo, se expande para revelar un "check" verde que se dibuja vectorialmente frente al usuario. Este detalle es vital: el dibujo del check actúa como un cierre psicológico. Es el momento de gratificación y alivio. Transformamos un proceso que suele ser estresante en una pequeña victoria visual. El usuario no solo lee que está inscrito; *siente* que el proceso ha concluido correctamente gracias a la fluidez del movimiento.

#### Animación intencional para guiar la mirada

Usé el movimiento para jerarquizar la información sin necesidad de saturar la pantalla con textos de ayuda. Por ejemplo, al abrir la sección de beneficios de AsDeporte Plus, los elementos no aparecen todos a la vez. Implementé una entrada escalonada (*staggered animation*) donde cada beneficio aparece con un retraso de 50ms respecto al anterior, deslizándose suavemente desde abajo.

Esta técnica guía el ojo del usuario de manera natural, permitiéndole escanear la oferta de valor sin sentirse abrumado por un bloque de información estático que aparece de golpe. Del mismo modo, para los mensajes de error en los formularios, utilicé un ligero rebote horizontal (*shake*) inspirado en el gesto humano de decir "no". Es una forma intuitiva y universal de señalar que algo requiere atención inmediata sin ser agresivo.

#### La dimensión física: feedback háptico y sensaciones táctiles

Para la aplicación móvil, decidí ir un paso más allá de lo visual e integré una capa de feedback háptico. Definí patrones de vibración específicos para acciones clave:

1.  **Éxito (Success):** Una vibración doble, corta y suave, al confirmar una unión exitosa a un grupo en 'Tribu' o al completar un pago. Da una sensación de solidez física a la transacción digital.
2.  **Advertencia/Error (Warning):** Una vibración triple, más persistente, cuando un campo obligatorio no ha sido llenado o una tarjeta es rechazada. 

Esta capa de seguridad sensorial es especialmente valiosa para los atletas. Muchos de ellos interactúan con la app en entornos con mucho ruido, bajo el sol (donde la pantalla se ve peor) o incluso mientras caminan después de una carrera. El feedback háptico asegura que el usuario reciba la confirmación de su acción incluso si no está mirando fijamente el píxel.

#### Exclusividad en Tribu y Beneficios Plus

En las funcionalidades estrella del MVP, como 'Tribu' y los beneficios de 'Plus', las interacciones debían denotar un nivel de pulido superior. Para 'Tribu', diseñé transiciones donde los grupos se expanden desde su posición original en la lista, creando una continuidad visual absoluta entre la vista general y el detalle del grupo. 

Para los beneficios Plus, utilicé transiciones con curvas de aceleración más elegantes y lentas (*custom cubic-beziers*), lo que otorga una sensación de "lujo" y exclusividad. Mi razonamiento fue que si el usuario está pagando una suscripción premium, cada interacción dentro de ese ecosistema debe sentirse más fluida y sofisticada que en el resto de la app. Es diseño de interacción puesto al servicio de la percepción de marca.

> **Reflexión Senior:** A menudo se piensa que las animaciones son un extra que se añade al final si queda tiempo. Mi enfoque es el opuesto: el diseño de interacción es el puente emocional entre el código frío y el usuario humano. Al reducir la carga cognitiva y proporcionar respuestas físicas a acciones digitales, no solo estamos haciendo que la app sea "bonita", estamos construyendo una relación de confianza a largo plazo. Un atleta que siente que su app le responde con precisión es un atleta que volverá a confiar en AsDeporte para su próxima gran meta.

**Próximo paso:**

#### EL BLUEPRINT TÉCNICO: ESPECIFICACIONES DE INTERACCIÓN
Toda esta coreografía visual y sensorial corría el riesgo de quedarse en mi cabeza o morir en un prototipo de Figma si no encontraba la forma de comunicársela con precisión quirúrgica al equipo de ingeniería. Al cerrar esta fase de diseño dinámico, me di cuenta de que tenía cientos de micro-decisiones sobre tiempos, curvas de aceleración y estados que debían ser implementadas sin margen de error. Sabía que el siguiente desafío no era creativo, sino de documentación técnica: ¿cómo entregar este sistema vivo de tal forma que un desarrollador pudiera replicar cada milisegundo de movimiento exactamente como lo imaginé?

### Parte 5: EL BLUEPRINT TÉCNICO: ESPECIFICACIONES DE INTERACCIÓN

#### LA BELLEZA SIN DOCUMENTACIÓN ES SOLO UNA SUGERENCIA

Al terminar la definición de las microinteracciones y la capa sensorial de la plataforma, me encontré ante un dilema clásico: tenía un diseño que se sentía increíble en mi cabeza y en mis bocetos, pero que corría el riesgo de desmoronarse en manos de ingeniería si no era capaz de traducirlo a un lenguaje de construcción. Para un proyecto como el de AsDeporte, donde la precisión en el registro de un evento o en el seguimiento de una ruta de *livetracking* es crítica, la belleza es secundaria frente a la claridad absoluta. Entendí que mi siguiente paso no era creativo, sino de ingeniería de diseño; debía crear un blueprint técnico que no dejara ni un solo milisegundo de animación a la interpretación de un tercero. En este oficio, si no lo documentas, no existe.

#### LA MATRIZ DE ESTADOS Y COMPORTAMIENTOS ATÓMICOS

Mi primera acción fue descender al nivel atómico de la interfaz para definir la matriz de estados de cada elemento interactivo. Basándome en las frustraciones que habíamos detectado en la investigación previa —donde los atletas se quejaban de no saber si un botón había procesado su clic o si un filtro estaba realmente activo—, tracé una especificación exhaustiva para cada componente.

*   **Botones y CTAs:** Definí cuatro estados obligatorios: *hover*, *pressed*, *disabled* y *focused*. No se trataba solo de cambiar un color; especifiqué que el estado *pressed* debía tener una respuesta visual inmediata (un ligero cambio de elevación o escala) para confirmar la acción del usuario antes de que el sistema procesara la petición.
*   **Controles de Datos:** Para los selectores de fecha y los *sliders* de los filtros de eventos, documenté cómo debía reaccionar la interfaz al arrastrar o seleccionar. Especificqué que el estado "activo" de un filtro debía persistir visualmente con un indicador claro, eliminando la desorientación que sufrían los usuarios en la versión anterior de la app cuando aplicaban múltiples criterios de búsqueda.

Esta obsesión por el detalle atómico buscaba blindar la usabilidad: el atleta, a menudo interactuando con la app en condiciones de fatiga o bajo la luz del sol, necesita que cada control le hable con claridad y sin ambigüedades.

#### LÓGICA DE VALIDACIÓN Y EL RETO DEL FORMULARIO MÓVIL

Uno de los puntos de mayor fricción histórica en AsDeporte era el proceso de inscripción. Para resolverlo, diseñé una lógica de entrada de datos que prioriza la validación en tiempo real. En lugar de esperar a que el usuario presione "Enviar" para mostrarle una lista de errores, especifiqué que cada campo (nombre, correo, número de corredor) debe validarse en el momento en que el foco sale del *input*.

Puse especial atención en la gestión del teclado virtual en dispositivos móviles. Documenté qué tipo de teclado debe invocar cada campo (numérico para teléfonos, alfanumérico con "@" para correos) y, lo más importante, cómo debe desplazarse la pantalla para que el teclado nunca tape el campo que se está llenando ni el mensaje de error correspondiente. Redacté los mensajes de error para que fueran preventivos y no punitivos: "Tu número de corredor debe tener 5 dígitos" en lugar de un genérico "Entrada inválida". Mi objetivo era que el usuario nunca se sintiera bloqueado por una interfaz muda.

#### TRADUCIENDO LA SENSACIÓN A MILISEGUNDOS

Para que el equipo de ingeniería no tuviera que adivinar el ritmo de la plataforma, traduje cada transición y microinteracción a valores numéricos. Pasé de hablar de "movimientos fluidos" a especificar curvas de *easing* y duraciones exactas.

*   **Transiciones entre pantallas:** Definí una duración estándar de 300ms con una curva *cubic-bezier(0.4, 0, 0.2, 1)* para las navegaciones principales, asegurando que el cambio se sintiera natural y no abrupto.
*   **Feedback de éxito:** Para acciones como "Inscripción Completada", documenté una animación de entrada para el *checkmark* de 450ms, dándole el peso emocional necesario a una victoria del usuario.

Esta documentación técnica es la única forma de mantener la consistencia de marca. Sin estos valores, el pulido profesional que buscábamos para el MVP B2C se perdería en una implementación inconsistente donde cada desarrollador interpretaría la "fluidez" de una manera distinta.

#### EL ECOSISTEMA DE ANOTACIONES EN FIGMA

Utilicé el *Dev Mode* de Figma y un sistema de anotaciones manuales para incrustar estas especificaciones directamente sobre los wireframes de alta fidelidad. Etiqueté cada componente complejo con notas técnicas que describían comportamientos no visibles en una imagen estática.

Por ejemplo, para la sección de "Tribu", detallé la lógica de unión a grupos: qué sucede visualmente mientras la petición está pendiente y cómo cambia el estado del botón una vez que el usuario es aceptado. En el mapa de *livetracking*, especifiqué la frecuencia de refresco visual del icono del atleta y cómo debe comportarse el mapa si la señal de GPS se pierde temporalmente. Al hacer esto, transformé el archivo de diseño en un plano de construcción vivo, donde un desarrollador puede consultar no solo el color de un píxel, sino la lógica de negocio que lo mueve.

#### PROTOCOLO DE FEEDBACK Y GESTIÓN DE LA INCERTIDUMBRE

Finalmente, diseñé un protocolo para manejar el "silencio digital", esos momentos donde la tecnología falla o tarda en responder. Creé guías específicas para los estados de carga, utilizando *skeletons* en lugar de simples *spinners* para reducir la percepción de espera del usuario.

Documenté también la comunicación de errores de sistema, como caídas de red o fallos de servidor. Mi enfoque fue eliminar la ansiedad del atleta mediante mensajes claros y humanos que expliquen qué pasó y qué puede hacer a continuación (por ejemplo, "Estamos teniendo problemas para conectar con el servidor de tiempos, intenta de nuevo en un momento"). Al diseñar para el error, estaba protegiendo la relación de confianza entre el atleta y AsDeporte, asegurando que incluso en los fallos técnicos, la plataforma se sintiera bajo control.

> **Reflexión Senior:** He visto demasiados proyectos excelentes morir en la fase de implementación porque el diseñador asumió que el desarrollador "entendería la intención". Mi responsabilidad aquí es eliminar la suposición. El rigor en las especificaciones de interacción es lo que realmente protege la experiencia del usuario final; es el escudo que evita que las limitaciones técnicas o las prisas del desarrollo degraden un producto que ha costado meses investigar y definir.

**Próximo paso:**

#### LA SIMULACIÓN VIVA: CREACIÓN DE PROTOTIPOS INTERACTIVOS

Con el blueprint técnico terminado y cada milisegundo documentado, me enfrenté a la prueba de fuego definitiva: ¿realmente funcionaba toda esta lógica en un flujo continuo? Tenía las piezas y el manual de instrucciones, pero necesitaba ensamblarlas en un prototipo de alta fidelidad que se sintiera tan real que los atletas olvidaran que estaban interactuando con una simulación. El desafío era transformar esos planos estáticos en una experiencia cinética capaz de revelar fricciones que ninguna especificación técnica, por muy detallada que fuera, podría anticipar.

### Parte 6: LA SIMULACIÓN VIVA: CREACIÓN DE PROTOTIPOS INTERACTIVOS

#### LA ALQUIMIA DE LA EXPERIENCIA: DEL PLANO ESTÁTICO A LA SIMULACIÓN VIVA

Tener un blueprint técnico impecable y una documentación de microinteracciones detallada al milisegundo es una victoria teórica, pero en este oficio, la teoría no sobrevive al primer contacto con el pulgar del usuario. Me encontraba ante un muro de especificaciones y wireframes que, aunque lógicos, carecían de pulso. La arquitectura de información estaba ahí, los flujos de decisión estaban trazados, pero me faltaba la respuesta a la pregunta más crítica: ¿cómo se *siente* realmente ser un atleta intentando inscribirse a una carrera de 10K mientras camina por la calle? La especificación en papel es una promesa de comportamiento; el prototipo es la ejecución de esa promesa.

Mi razonamiento en este punto fue puramente preventivo. Sabía que incluso la mejor documentación de IxD puede ocultar fricciones ergonómicas o vacíos cognitivos que solo emergen cuando el diseño adquiere dimensión temporal y cinética. No podía permitir que la primera vez que alguien "sintiera" la nueva plataforma de AsDeporte fuera después de que ingeniería hubiera quemado cientos de horas de código. Necesitaba construir una simulación tan convincente que permitiera validar si los patrones de interacción que habíamos definido para mitigar las frustraciones históricas —esas que el equipo de Soporte nos recordaba en cada reunión— realmente funcionaban en el mundo real.

#### LA ELECCIÓN DE LA ALTA FIDELIDAD: ELIMINANDO EL SESGO DE HERRAMIENTA

Al iniciar la construcción en Figma, tomé la decisión deliberada de saltarme la media fidelidad y moverme directamente hacia un **prototipo de alta fidelidad funcional**. Esta no fue una decisión basada en la estética, sino en la reducción de la carga cognitiva durante las pruebas. En mi experiencia, cuando le pides a un usuario que pruebe un wireframe gris, parte de su cerebro se distrae intentando imaginar cómo será el producto final. Al entregar una interfaz con fidelidad visual real, permito que el atleta se concentre exclusivamente en la tarea: buscar un evento, gestionar su perfil de la Tribu o revisar sus beneficios de AsDeporte Plus.

Para lograr esto, no me limité a "dibujar" pantallas; transformé mis elementos estáticos en un sistema de componentes dinámicos.
*   **Componentización con intención:** Cada botón, campo de entrada y tarjeta de evento fue configurado con sus estados correspondientes (default, hover, pressed, disabled).
*   **Consistencia sistémica:** Utilicé las variantes de Figma para asegurar que, si decidía ajustar la velocidad de una transición en un formulario, el cambio se propagara por todo el ecosistema del prototipo.
*   **Reducción de ruido:** Al usar datos reales (nombres de carreras reales, fechas próximas, distancias precisas), eliminé la fricción que genera el contenido de relleno tipo *Lorem Ipsum*, permitiendo una validación mucho más cercana a la realidad del negocio de AsDeporte.

#### EL CABLEADO DEL ECOSISTEMA: MÁS ALLÁ DE LA RUTA FELIZ

Con los componentes listos, inicié el proceso de "cableado" o vinculación de pantallas. Aquí es donde los **Diagramas de Flujos de Usuario** dejaron de ser diagramas en una pizarra para convertirse en la columna vertebral de la experiencia. Mi enfoque no fue crear una secuencia lineal de "Pantalla A a Pantalla B", sino construir un ecosistema navegable que permitiera el error y la exploración.

*   **Navegación No-Lineal:** Me aseguré de que los menús jerárquicos y los botones de retroceso funcionaran con una lógica espacial coherente. Si un usuario entraba a los detalles de una Spartan Race desde el buscador, el botón de "atrás" debía devolverlo exactamente a su posición de scroll en los resultados, no al inicio de la app.
*   **Prevención de Callejones sin Salida:** Siguiendo las quejas históricas de usabilidad de la plataforma anterior, puse especial atención en los flujos de cancelación. ¿Qué pasa si el usuario se arrepiente a mitad de una inscripción? Diseñé rutas de salida claras que no rompieran la sesión, permitiendo que el atleta regresara al dashboard sin perder el contexto.
*   **Jerarquía de Navegación Global:** Configuré la barra de navegación inferior (Tab Bar) para que las secciones core —Eventos, Resultados, Tribu y Perfil— estuvieran siempre a un tap de distancia, eliminando la necesidad de navegar por menús profundos para tareas recurrentes.

#### SIMULANDO LA INTELIGENCIA: ENTRADA DE DATOS Y LÓGICA REAL

Uno de los mayores puntos de fricción detectados en la investigación fue la complejidad de los formularios de inscripción. Para validar mi propuesta de IxD, necesitaba que el prototipo "reaccionara" como un sistema vivo. No me servía un campo de texto estático; necesitaba simular la carga cognitiva de ingresar datos.

Configuré componentes avanzados para gestionar la **Entrada de Datos**:
1.  **Validaciones en Tiempo Real:** Diseñé estados de error que aparecían inmediatamente si un formato de correo era incorrecto o si una contraseña no cumplía los requisitos, dando feedback instantáneo antes de que el usuario intentara enviar el formulario.
2.  **Gestión del Teclado Virtual:** Este es un detalle que muchos diseñadores omiten, pero que es crítico en móvil. Simulé la aparición del teclado para verificar que los campos activos no quedaran ocultos por la interfaz del sistema y que el botón de "Continuar" fuera siempre accesible.
3.  **Selectores y Toggles:** En lugar de simples clics, configuré selectores de fecha funcionales y toggles de estado para las preferencias de privacidad en la Tribu. Quería que el usuario sintiera el control sobre su información en cada interacción.

Esta fidelidad en los inputs es lo que permite detectar si un formulario es "demasiado largo" no por el número de campos, sino por el esfuerzo percibido al completarlos.

#### CINÉTICA Y FEEDBACK: EL USO ESTRATÉGICO DE SMART ANIMATE Y OVERLAYS

La diferencia entre un prototipo que se siente como una presentación de diapositivas y uno que se siente como un producto real radica en las transiciones. Utilicé **Smart Animate** y **Overlays** en Figma no para añadir "decoración", sino para proporcionar continuidad visual y reducir la incertidumbre.

*   **Feedback de Acción:** Cada botón principal recibió una microinteracción de presión. Es un detalle sutil, pero ese cambio de escala o color al tocar la pantalla confirma al cerebro del usuario que el sistema ha recibido su orden.
*   **Gestión de Estados de Carga:** Diseñé e integré *spinners* y barras de progreso. En una plataforma que maneja inscripciones y pagos, el silencio visual es el enemigo; el usuario debe saber que el sistema está "pensando" para evitar clics dobles o abandonos por ansiedad.
*   **Uso de Overlays para Contexto:** Los filtros de búsqueda y los mensajes de confirmación de éxito se configuraron como overlays. Esto permite que el usuario mantenga el contexto de la pantalla principal de fondo, reforzando la sensación de que no ha sido "expulsado" de su flujo de trabajo actual, sino que simplemente está realizando una tarea secundaria.

#### FUNCIONALIDADES CORE: LIVETRACKING Y LA TRIBU EN MOVIMIENTO

El verdadero reto técnico fue prototipar las funcionalidades específicas del MVP de AsDeporte que requieren una interacción más compleja que un simple formulario.

*   **El Mapa de Livetracking:** No me conformé con una imagen de un mapa. Creé una simulación donde el usuario podía interactuar con los marcadores de los atletas, abriendo modales de información sobre tiempos y posiciones sin perder la vista global del recorrido. Esto era vital para validar si los familiares de los atletas podían seguir la carrera de manera intuitiva bajo situaciones de estrés o emoción.
*   **Interacciones de la Tribu:** Prototipé el flujo de "Unirse a un Grupo". Esto implicaba transiciones de estado complejas: de un botón de "Unirme" a un estado de "Pendiente" o "Miembro", con notificaciones *in-app* simuladas que confirmaban la acción.
*   **Beneficios Plus:** Diseñé el acceso a los beneficios exclusivos como una capa de valor siempre presente pero no intrusiva, asegurando que la redención de un beneficio se sintiera como una recompensa y no como un obstáculo publicitario.

#### ERGONOMÍA Y LA PRUEBA DE CAMPO INTERNA

Antes de considerar el prototipo terminado, realicé una fase de **Validación Interna** utilizando **Figma Mirror** en dispositivos móviles reales (iOS y Android). No puedes diseñar para el dedo desde un monitor de 27 pulgadas.

1.  **Zonas de Alcance (Thumb Zones):** Verifiqué físicamente si los botones de acción más importantes eran alcanzables con el pulgar mientras se sujetaba el teléfono con una sola mano. Si un control crítico estaba demasiado alto o en una esquina incómoda, ajusté el layout de inmediato.
2.  **Legibilidad y Contraste:** Probé el prototipo bajo diferentes condiciones de luz simuladas para asegurar que los estados de los botones y los mensajes de error fueran visibles incluso con reflejos en la pantalla, algo común para un atleta que usa la app al aire libre.
3.  **Sanity Check con Ingeniería:** Me senté con los leads de desarrollo para mostrarles las transiciones y microinteracciones más complejas. Mi objetivo era asegurar que lo que estaba prototipando era implementable dentro de los plazos del MVP. Esta conversación temprana evitó que diseñara comportamientos exóticos que luego tendrían que ser recortados por limitaciones técnicas.

> **Reflexión Senior:** A menudo veo que se confunde la fidelidad estética con la fidelidad funcional. Un prototipo puede ser hermoso pero inútil si no simula la lógica del sistema. Para mí, el prototipo es el lenguaje común definitivo; es la única herramienta capaz de alinear a producto, diseño y tecnología bajo una misma visión. No es un dibujo de lo que vamos a construir, es el simulacro de lo que vamos a vivir. Construir con este nivel de detalle no es un lujo, es una estrategia de mitigación de riesgos que ahorra semanas de retrabajo en la fase de desarrollo.

**Próximo paso:**

#### EL JUICIO DE LA REALIDAD: VALIDACIÓN INTERNA Y CON USUARIOS

Con el prototipo funcionando como un reloj y cada transición pulida al extremo, el silencio de mi estudio empezó a sentirse pesado. Tenía entre manos una simulación que, según mi criterio y el del equipo técnico, resolvía todos los problemas heredados, pero me faltaba la única voz que realmente importa: la del atleta que no sabe nada de nuestras reuniones ni de nuestras teorías de diseño. Estaba a punto de entregar este "hijo" tecnológico a los usuarios finales para que intentaran romperlo, y la tensión de saber si mis hipótesis de interacción sobrevivirían a la frustración de un usuario real empezaba a dominar la sala.

### Parte 7: EL JUICIO DE LA REALIDAD: VALIDACIÓN INTERNA Y CON USUARIOS

#### LA HORA DE LA VERDAD: DEL LIENZO INMACULADO AL DEDO DEL USUARIO

Había pasado semanas puliendo cada transición, asegurándome de que el **IxD** de la plataforma fuera una coreografía perfecta de microinteracciones y estados lógicos. En mi monitor de 27 pulgadas, con una conexión de fibra óptica y bajo el control absoluto de mi ratón, todo funcionaba con una fluidez envidiable. Pero el diseño de producto no ocurre en el vacío de un estudio; ocurre en la mano de un corredor que intenta inscribirse a una carrera con los dedos sudados después de un entrenamiento, o en la pantalla de un smartphone de gama media con el brillo al mínimo bajo la luz del sol. 

Sentí esa tensión familiar en el pecho al cerrar la fase de construcción del prototipo. Tenía ante mí una hipótesis táctil de alta fidelidad, un simulacro que "fingía" ser el producto final de AsDeporte con una precisión asombrosa. Sin embargo, como diseñador, sé que el prototipo no es una obra de arte para ser admirada, sino una herramienta de sacrificio. Estaba listo para exponer mi trabajo al "juicio de la realidad", sabiendo que muchas de las soluciones que consideraba brillantes podrían desmoronarse en los primeros cinco minutos de contacto con un usuario real. Mi razonamiento era pragmático: necesitaba salir de mi propia burbuja cognitiva y confrontar la viabilidad técnica y la carga cognitiva de la interfaz antes de que una sola línea de código fuera escrita.

#### EL FILTRO TÉCNICO: VALIDACIÓN CON PRODUCTO, TECNOLOGÍA Y SOPORTE

Antes de convocar a los atletas, decidí pasar el diseño por un primer anillo de fuego: la validación interna. Reuní en una sesión intensa a los responsables de Producto, los líderes de Ingeniería y, fundamentalmente, al equipo de Soporte al Cliente. Mi objetivo era triple: validar la viabilidad técnica de las interacciones, asegurar la alineación con los objetivos de negocio y confirmar que estábamos atacando las raíces del dolor que Soporte documentaba cada día.

Navegué el prototipo frente a ellos, deteniéndome deliberadamente en los flujos de navegación que habíamos rediseñado. Mostré cómo los menús y los botones de retroceso ahora seguían una lógica predecible, eliminando esos callejones sin salida que plagaban la versión anterior de la app. 
*   **La mirada de Ingeniería:** Los desarrolladores escrutaron las transiciones entre pantallas y las microinteracciones de carga. "¿Ese efecto de *shimmer* en las tarjetas de eventos afectará el rendimiento en dispositivos antiguos?", preguntaron. Fue una discusión necesaria sobre el balance entre el pulido visual y la eficiencia del sistema. Defendí la necesidad de ese feedback visual para reducir la percepción de latencia, pero acordamos simplificar la curva de la animación para asegurar que fuera fluida en cualquier terminal.
*   **La voz de Soporte:** Fue gratificante ver sus reacciones al flujo de filtros. "Esto nos va a ahorrar cientos de tickets", comentaron al ver cómo el estado actual de los filtros aplicados era siempre visible y fácil de limpiar. Validaron que la nueva estructura de navegación realmente abordaba las frustraciones históricas de los atletas que no encontraban sus comprobantes de inscripción.

Esta sesión no fue una presentación de "miren lo que hice", sino una auditoría de viabilidad. Me aseguré de que cada interacción propuesta fuera implementable dentro del *sprint* del MVP, blindando el diseño contra futuros recortes por limitaciones técnicas imprevistas.

#### EL LABORATORIO DE USABILIDAD: OBSERVANDO AL ATLETA EN SU ELEMENTO

Con el visto bueno técnico, pasé a la fase más reveladora: las pruebas de usabilidad con atletas B2C. Seleccioné a ocho perfiles distintos, desde corredores de maratón experimentados hasta personas que apenas se inscribían a su primera carrera de 5K. Quería ver cómo interactuaban con la plataforma sin ninguna guía previa.

Organicé las sesiones en un entorno controlado pero relajado, entregándoles un dispositivo móvil con el prototipo de alta fidelidad cargado. Mi rol cambió radicalmente: dejé de ser el creador para convertirme en un observador forense. Les planteé tareas específicas y críticas para el éxito del MVP:
1.  "Busca una carrera de ciclismo en el Estado de México para el mes de noviembre y filtra por un rango de precio menor a 800 pesos".
2.  "Inscríbete al evento, selecciona tu talla de playera y llega hasta la pantalla de confirmación de pago".
3.  "Configura un grupo en Tribu e invita a dos amigos".

Mientras ellos navegaban, yo no solo escuchaba su *think-aloud* (lo que decían en voz alta), sino que observaba obsesivamente sus manos. Registré cada vacilación del dedo, cada vez que intentaban hacer clic en un elemento que no era interactivo (un error de *affordance*) y cada segundo de pausa que indicaba una carga cognitiva excesiva. Mi objetivo era validar si la interfaz respondía de manera tan intuitiva y eficiente como habíamos planeado en las especificaciones de **IxD**.

#### EL EXAMEN DE LOS CONTROLES DE DATOS Y LA NAVEGACIÓN

Uno de los momentos de mayor tensión fue observar cómo utilizaban los controles de datos que tanto tiempo nos tomó definir. El selector de fecha y los sliders de rango fueron puestos a prueba bajo fuego real.
*   **Filtros y Selectores:** Observé a un usuario intentar filtrar eventos. Al tocar el selector de fecha, la microinteracción de apertura fue inmediata, pero noté que el usuario dudó un segundo antes de seleccionar el rango. ¿Era el contraste del estado seleccionado lo suficientemente alto? ¿El feedback de "aplicar" era claro? Descubrí que, aunque el diseño era estéticamente impecable, algunos usuarios esperaban que el filtro se aplicara automáticamente sin tener que presionar un botón de confirmación. Esta fue una observación crítica sobre la expectativa de inmediatez en el flujo.
*   **Controles de Mapas en Livetracking:** Ver a los usuarios interactuar con el mapa de seguimiento en vivo fue revelador. Habíamos diseñado controles específicos para hacer zoom y centrar la posición del corredor. Un atleta intentó usar el gesto de "pellizco" natural en lugar de los botones que yo había ubicado en la esquina superior. Aunque el prototipo soportaba ambos, su preferencia por el gesto natural me confirmó que debíamos priorizar las áreas de interacción táctil más amplias para evitar que el usuario tapara la información crítica con su propia mano.
*   **Navegación y Jerarquía:** Al observar el flujo de "Tribu", noté un patrón preocupante: tres de los ocho usuarios se perdieron al intentar volver a la pantalla principal después de crear un grupo. El botón de "Cerrar" en el modal se confundía con el fondo de la imagen de cabecera. Era un fallo de jerarquía visual y de comportamiento de navegación que no habíamos detectado en las revisiones estáticas.

#### RESILIENCIA ANTE EL ERROR: PROBANDO LOS FEEDBACK LOOPS

Un sistema robusto no es aquel que nunca falla, sino aquel que sabe guiar al usuario cuando algo sale mal. Durante las pruebas, forcé situaciones de error para observar la reacción de los atletas ante los mensajes y validaciones que habíamos diseñado.
*   **Entrada de Datos:** Pedí a los usuarios que omitieran campos obligatorios en el formulario de inscripción o que introdujeran un formato de correo electrónico incorrecto. Observé cómo reaccionaban a las validaciones en tiempo real. Fue satisfactorio ver que el mensaje de error aparecía justo debajo del campo en conflicto, con un lenguaje claro y no técnico. Los usuarios no se sintieron "regañados" por el sistema; simplemente corrigieron el dato y continuaron. Esto validó que nuestra estrategia de comunicación del sistema era un diálogo constructivo y no un obstáculo.
*   **Estados de Carga y Confirmación:** Al procesar la inscripción (simulada), presté especial atención a la microinteracción de carga. ¿Generaba ansiedad ese pequeño círculo girando? Un usuario comentó: "Me gusta que me diga que está validando mi pago, me da seguridad". El feedback visual de éxito —una animación sutil de un check verde— provocó una sonrisa genuina en varios participantes. Esa es la entrega de valor cualitativo que no aparece en los diagramas de flujo: la tranquilidad del usuario al saber que su tarea ha terminado con éxito.

#### EL APRENDIZAJE DE "MATAR A TUS FAVORITOS"

Como **Product Designer**, estas sesiones de validación son una lección de humildad. Identifiqué varios puntos de confusión que me obligaron a cuestionar mis propias decisiones. Por ejemplo, me di cuenta de que la forma en que habíamos estructurado el acceso a los beneficios de AsDeporte Plus era demasiado sutil. Los usuarios pasaban de largo por elementos que yo consideraba destacados. 

La jerarquía de los botones de llamada a la acción (CTA) también mostró debilidades bajo carga de estrés. En la pantalla de selección de categoría de carrera, el botón de "Más información" competía visualmente con el de "Inscribirse". Dos usuarios hicieron clic en el primero por error, lo que interrumpió su flujo de conversión. Estos no eran errores del usuario; eran errores de mi diseño de interacción que ahora, gracias a la evidencia, podía ver con total claridad.

> **Reflexión Senior:** Validar un diseño de interacción es un ejercicio de desapego. He visto a muchos diseñadores intentar "explicar" su prototipo al usuario durante una prueba, tratando de justificar por qué algo está donde está. Es un error fatal. Si tienes que explicarlo, es que no funciona. En AsDeporte, aprendí que una interacción elegante que el usuario no entiende es, simplemente, ruido visual. Mi responsabilidad no es defender mi diseño, sino ser el abogado del usuario frente a mi propio ego. Cada hallazgo negativo en estas pruebas no es un fracaso, es una oportunidad de blindar el producto antes de que llegue al mercado.

Al terminar la última sesión de pruebas, el prototipo estaba lleno de "cicatrices" virtuales: notas adhesivas digitales señalando fricciones, flujos rotos y oportunidades de mejora. Tenía en mis manos la materia prima necesaria para la iteración final. El mapa de navegación que al principio parecía una autopista perfecta, ahora se revelaba como un camino con baches que debíamos pavimentar.

**Próximo paso:**

#### REFINAMIENTO Y CIERRE: ITERACIÓN BASADA EN FEEDBACK

Con los hallazgos de las pruebas de usabilidad aún frescos y una lista de fricciones técnicas detectadas por el equipo de ingeniería, me enfrenté a la tarea más crítica de esta fase: decidir qué cambiar y qué mantener. La evidencia era clara, pero el tiempo para el lanzamiento del MVP seguía siendo una restricción inamovible. Me encontraba en ese momento decisivo donde debía priorizar las correcciones que tendrían el mayor impacto en la tasa de conversión y la satisfacción del atleta, sabiendo que algunas de mis interacciones favoritas tendrían que ser rediseñadas desde cero o, peor aún, eliminadas para salvar la experiencia global. La pregunta que dominaba mi mesa de trabajo era: ¿cómo transformar toda esta frustración detectada en una ventaja competitiva real para AsDeporte antes de entregar las especificaciones finales a desarrollo?

### Parte 8: REFINAMIENTO Y CIERRE: ITERACIÓN BASADA EN FEEDBACK

#### El juicio de la realidad y la disciplina del recorte

Tras procesar la última sesión de pruebas de usabilidad, me encontré con un prototipo que, aunque funcional, estaba marcado por la fricción. Tenía frente a mí una lista de 14 puntos críticos de interacción donde los atletas habían vacilado o, peor aún, malinterpretado la respuesta del sistema. En este punto, como responsable del diseño, me enfrenté al reto de la priorización estratégica: no se trataba simplemente de corregir errores, sino de optimizar la arquitectura de comportamiento para el MVP de AsDeporte. 

La tentación de un diseñador es querer "arreglarlo todo", pero mi razonamiento fue más pragmático. Debía alcanzar un estado de pulido industrial donde cada microinteracción justificara su existencia en términos de conversión y satisfacción del atleta. Si una transición elegante estaba causando un retraso de medio segundo en la percepción de carga, debía ser sacrificada. Mi enfoque fue transformar esa frustración detectada en las pruebas en una ventaja competitiva real, asegurando que el producto final no solo funcionara, sino que se sintiera como una herramienta de alto rendimiento.

#### Refinamiento de especificaciones: de la confusión a la regla

Para ejecutar este refinamiento, me apegué estrictamente a la metodología de iteración basada en feedback que tracé originalmente en mi plan de trabajo (basado en el proceso de refinamiento del archivo `01_diseno_de_interaccion_ixd.pdf`). Comencé diseccionando los resultados de las pruebas para ajustar las especificaciones de IxD. El hallazgo más recurrente era una "confusión en los controles" durante la selección de categorías en eventos complejos. Los usuarios no estaban seguros de si un filtro se había aplicado o si el sistema estaba procesando la solicitud.

Traduje estas quejas en reglas de comportamiento mucho más estrictas. Redefiní la lógica de los filtros para que la plataforma respondiera de manera inmediata mediante un *skeleton screen* o un estado de carga parcial, eliminando la incertidumbre. Este refinamiento no fue estético; fue un ejercicio de ingeniería de comportamiento. Me aseguré de que el uso de elementos como los controles de mapas en el *livetracking* fuera predecible: si el usuario hacía un *pinch-to-zoom*, la capa de datos de los atletas debía mantenerse anclada sin saltos visuales. El objetivo era que la interacción fuera tan eficiente que el atleta pudiera usar la app con una sola mano y en movimiento, sin tener que pensar en el control mismo.

#### Ajuste forense en el prototipo de alta fidelidad

Con las nuevas reglas definidas, regresé al software de diseño para aplicar cambios quirúrgicos en el prototipo interactivo. Este paso, fundamental en mi proceso, implicó modificar las transiciones entre pantallas y los estados de los componentes en Figma y ProtoPie para eliminar cualquier rastro de "lag cognitivo". 

> **Decisión de diseño:** Reduje los tiempos de transición de 300ms a 150ms en los flujos de inscripción. Aunque 150 milisegundos parecen insignificantes, en una secuencia de cinco pasos, la percepción de velocidad del sistema cambia radicalmente, reduciendo la ansiedad del usuario durante el proceso de pago.

Modifiqué los estados de los componentes para que el flujo de la "Tribu" fuera impecable. En las pruebas, noté que los usuarios vacilaban al unirse a un grupo porque el botón no daba una confirmación táctil o visual inmediata. Ajusté el prototipo para simular una respuesta háptica y visual que confirmara la acción antes de que el servidor (simulado) respondiera. Este nivel de precisión en el prototipo permitió que, en la validación final interna, los stakeholders pudieran navegar por los flujos de inscripción sin una sola duda sobre qué estaba ocurriendo en cada pantalla.

#### Perfeccionando el diálogo: feedback y microinteracciones

Un producto senior se distingue por cómo maneja los momentos de error y éxito. Me enfoqué en optimizar el feedback del sistema y las microinteracciones, elementos que a menudo se dejan para el final pero que definen la calidad percibida. Perfeccioné los mensajes de error en los formularios de inscripción; pasamos de un genérico "Error en el campo" a guías contextuales que explicaban, por ejemplo, que el número de afiliación a la federación no coincidía con el formato requerido.

Articulé una jerarquía de estados visuales para cada elemento interactivo:
*   **Hover:** Un cambio sutil de elevación para indicar interactividad en web.
*   **Presionado:** Una contracción de escala del 2% para dar feedback de clic en móvil.
*   **Deshabilitado:** Una reducción de opacidad con un cursor de bloqueo para evitar clics inútiles.

Añadí un pulido final mediante animaciones sutiles que confirmaban acciones críticas, como el éxito de una transacción o la unión a un grupo en la Tribu. Estas microinteracciones no son decorativas; son señales claras que cierran el ciclo de comunicación entre el atleta y la plataforma, transformando una herramienta meramente funcional en una experiencia premium.

#### Eficiencia en controles y entrada de datos móviles

Basándome en los principios de control de datos que definí al inicio de esta actividad (siguiendo los criterios del mothership de IxD), realicé un ajuste fino en los selectores de fecha, sliders y filtros de búsqueda. En dispositivos móviles, la precisión es ley. Descubrí que los selectores nativos de iOS y Android eran preferibles para la fecha de nacimiento por su familiaridad, pero para la selección de tallas de camiseta en la inscripción, diseñé un selector de botones grandes (*segmented controls*) para minimizar errores de dedo.

Gestioné meticulosamente el comportamiento del teclado virtual. Me aseguré de que, al entrar en un campo de texto, el teclado no obstruyera el botón de "Continuar", ajustando el *scroll* automático de la pantalla. Implementé validaciones en tiempo real que detectan errores de formato en el correo electrónico o el teléfono antes de que el usuario intente enviar el formulario. Esta proactividad en el diseño de interacción es lo que hace que la plataforma se sienta "clara, predecible y eficiente", cumpliendo con el objetivo estratégico de reducir la carga de soporte técnico para AsDeporte.

#### Consolidación y handoff: la frontera hacia la construcción

El cierre de esta fase consistió en la preparación de las especificaciones de diseño de interacción definitivas para el equipo de ingeniería. No entregué solo pantallas; entregué un sistema de comportamiento documentado. Utilicé el modo de desarrollo de Figma para detallar cada estado de componente, cada curva de animación (usando valores de *cubic-bezier* específicos) y cada regla de validación.

Consolidé los tres entregables clave que cierran este paso:
1.  **Especificaciones de IxD:** Un documento técnico que describe el "si pasa esto, entonces aquello" de cada control.
2.  **Prototipo Interactivo Final:** La versión de alta fidelidad, validada y refinada, que sirve como la "fuente de verdad" del comportamiento esperado.
3.  **Matriz de Feedback:** El registro de cómo cada hallazgo de las pruebas de usabilidad fue resuelto en el diseño final.

Este set de entregables marca la frontera entre el diseño conceptual y el producto listo para ser construido. Al finalizar, tuve la certeza de haber mitigado los riesgos de usabilidad que históricamente habían afectado a la marca, dejando el camino despejado para la implementación técnica.

**Reflexión final:**
Cerrar esta fase de interacción me recordó que la humildad es una herramienta de diseño tan poderosa como Figma. Tuve que sacrificar varias microinteracciones que me parecían brillantes visualmente porque, en las pruebas, descubrí que solo añadían ruido cognitivo al atleta que intenta inscribirse en una carrera bajo presión. Al final, el valor de mi trabajo no reside en la complejidad de las animaciones, sino en la invisibilidad del diseño: cuando una interfaz es verdaderamente intuitiva, el usuario no nota la interacción, simplemente logra su objetivo. Esta actividad dejó una base sólida y validada que no solo resuelve problemas de usabilidad, sino que eleva la percepción de AsDeporte como una plataforma tecnológica de primer nivel.