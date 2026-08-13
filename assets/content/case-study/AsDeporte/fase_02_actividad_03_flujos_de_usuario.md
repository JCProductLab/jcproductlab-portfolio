# Fase 2: Ideación y Diseño

## Actividad 3: actividad_03_flujos_de_usuario

### Parte 1: PRIORIZACIÓN ESTRATÉGICA: IDENTIFICACIÓN DE FLUJOS CRÍTICOS

#### El salto del mapa al movimiento: La arquitectura no basta

Tener la arquitectura de información terminada me dejó una sensación agridulce. Por un lado, la estructura era sólida y los contenidos estaban donde debían estar; por otro, sabía que un mapa de sitio es, en el mejor de los casos, un edificio vacío. El verdadero reto como **Product Designer** no es solo decidir dónde van las habitaciones, sino entender cómo se va a mover la gente a través de ellas, especialmente cuando el "atleta" —nuestro usuario central— viene de experiencias frustrantes con la aplicación móvil actual. El riesgo era evidente: podíamos tener la mejor jerarquía de información del mundo, pero si el proceso de inscripción seguía sintiéndose como una carrera de obstáculos, el proyecto fracasaría en su métrica más crítica: la conversión.

Esta transición hacia el diseño de flujos de usuario fue el momento de inyectar dinamismo a lo estático. Mi razonamiento fue pragmático: necesitaba asegurar que el recorrido del usuario fuera lógico, eficiente y, sobre todo, que eliminara de raíz los puntos de dolor que la investigación previa había dejado al descubierto. No estábamos dibujando flechas por ejercicio estético; estábamos trazando la ingeniería de interacción de un **MVP** que debía demostrar su valor desde el primer clic. Mi enfoque se centró en mapear las tareas B2C más críticas, aquellas que definen si un atleta se queda en el ecosistema de AsDeporte o si abandona la plataforma por pura fricción cognitiva.

#### La criba estratégica: Por qué estos 10 flujos y no otros

La tentación en un proyecto de esta envergadura es querer mapearlo todo. Sin embargo, la disciplina senior dicta que el exceso de documentación es una forma de desperdicio si no ataca el núcleo del problema. Para definir el alcance de esta actividad, realicé una identificación quirúrgica de flujos críticos. Crucé el documento de alcance del MVP con los hallazgos consolidados de la investigación de la Fase 1. El criterio de selección fue implacable: si el flujo no resolvía un dolor validado o no era esencial para la conversión, se quedaba fuera de esta etapa intensiva de mapeo.

Identifiqué **10 flujos fundamentales** que representarían la columna vertebral de la experiencia del atleta:

1.  **Buscar, Ver Detalles e Inscribirse a un Evento:** El motor de ingresos y la interacción más compleja.
2.  **Registro de Nuevo Usuario:** La puerta de entrada al ecosistema.
3.  **Inicio de Sesión:** El punto de fricción recurrente para usuarios existentes.
4.  **Recuperación de Contraseña:** Un flujo higiénico que, si falla, mata la retención.
5.  **Gestión y Edición de Perfil de Usuario:** Donde el atleta toma control de su identidad digital.
6.  **Acceso y Gestión de Inscripciones Activas:** La utilidad inmediata post-compra ("Mis Eventos Activos").
7.  **Acceso a Resultados Históricos Personales:** El valor emocional y deportivo a largo plazo ("Mi Historial").
8.  **Acceso y Visualización de Beneficios Asdeporte Plus:** La validación del modelo de suscripción.
9.  **Proceso para Conectar un Wearable:** El puente técnico con el rendimiento físico (Garmin, Strava).
10. **Interacción con Notificaciones:** El cierre del círculo de comunicación y *engagement*.

> **Insight de Diseño:** Al priorizar estos flujos, no solo estábamos listando funcionalidades; estábamos blindando los momentos de la verdad del usuario. El flujo de "Inscripción" es donde se gana o se pierde el dinero, pero el de "Resultados Históricos" es donde se gana la lealtad. Ambos requerían el mismo nivel de rigor forense en su diseño de interacción.

#### El núcleo de la conversión: Desglosando la inscripción

El flujo de **"Buscar, Ver Detalles e Inscribirse"** no podía ser una línea recta simple. La investigación nos había dicho que los usuarios se sentían abrumados por la cantidad de datos requeridos y la incertidumbre del proceso de pago. Mi decisión estratégica fue fragmentar este flujo en sub-pasos lógicos que redujeran la carga cognitiva y permitieran al atleta sentir que avanzaba con seguridad.

Diseñé este recorrido central en tres etapas críticas de interacción:
*   **La Fase de Descubrimiento:** Donde el usuario inicia la búsqueda, aplica filtros y ordenamiento, y visualiza el calendario de resultados. Aquí, la clave era la velocidad y la relevancia.
*   **La Fase de Decisión:** La página de detalle del evento actúa como el disparador psicológico. Si el usuario no encuentra aquí la confianza necesaria, el flujo muere.
*   **La Fase de Transacción (El Embudo):** Aquí es donde la ingeniería de interacción se vuelve crítica. Dividí el proceso en tres pasos claros:
    *   **Paso 1: Formulario de Inscripción:** Captura de datos específicos del atleta para el evento.
    *   **Paso 2: Revisión y Beneficios:** Un momento de pausa para aplicar descuentos o ventajas de Asdeporte Plus, reforzando el valor de la membresía antes de soltar el dinero.
    *   **Paso 3: Pago:** La culminación técnica donde la seguridad y la claridad en los métodos de pago (incluyendo opciones asíncronas como Oxxo) son primordiales.

Esta fragmentación no fue accidental. Al separar la revisión del pago, le damos al usuario una salida de emergencia "segura" y una confirmación visual de lo que está comprando, lo cual es vital para reducir el abandono del carrito que plagaba la versión anterior de la plataforma.

#### Más allá de la transacción: Construyendo el ecosistema

Un error común en el diseño de producto es pensar que el flujo termina cuando el usuario paga. Para AsDeporte, el pago es solo el inicio de la relación. Por eso, integré con el mismo nivel de prioridad flujos que alimentan la retención y el uso recurrente. 

El acceso al **Hub de Beneficios Asdeporte Plus** y la consulta del **Historial AsDeporte** fueron diseñados para ser destinos frecuentes, no solo secciones olvidadas en un menú. Especialmente el historial de resultados: para un atleta, sus tiempos y marcas son su moneda de cambio social y su orgullo personal. Mapear cómo un usuario llega a sus resultados de hace tres años con solo dos clics fue una prioridad absoluta para fomentar la recurrencia.

Por otro lado, el flujo de **Conexión de Wearables** (Garmin, Strava) se trató como un requerimiento "Should Have" con peso de "Must Have". Entendí que la plataforma no puede vivir aislada del hardware que los atletas ya usan. El flujo de vinculación debía ser impecable; cualquier fricción en la sincronización de una cuenta de Garmin se traduce en una percepción de "plataforma tecnológica obsoleta", algo que AsDeporte no puede permitirse en su nueva etapa.

#### La disciplina del inicio y el fin

Siguiendo la metodología de diseño de flujos que establecí para el equipo, me obligué a definir con precisión quirúrgica los **puntos de inicio y los estados finales** de cada uno de estos 10 recorridos. No permití que ningún flujo quedara en el aire. 

*   ¿Dónde empieza la recuperación de contraseña? ¿En el login o desde un correo electrónico? 
*   ¿Cuál es el estado final de una inscripción exitosa? No es solo un mensaje de "Gracias", es la visualización del comprobante y el botón directo para "Agregar al Calendario".

Esta claridad en los extremos del flujo es lo que permite que, más adelante, la arquitectura de pantallas sea coherente. Si no sabemos exactamente cuándo el usuario ha logrado su objetivo, terminamos diseñando pantallas huérfanas o flujos circulares que solo generan frustración. Mi objetivo fue eliminar los "callejones sin salida" reportados en la investigación previa, asegurando que cada acción del usuario tuviera una respuesta lógica y un camino hacia adelante.

#### Próximo paso: DEFINICIÓN DE FRONTERAS: PUNTOS DE INICIO Y ESTADOS FINALES

Una vez que tuve clara la lista de los 10 flujos que iban a salvar o hundir el MVP, me di cuenta de que la verdadera complejidad no estaba en los pasos intermedios, sino en las entradas. Al empezar a trazar las fronteras de cada recorrido, surgió una pregunta incómoda: ¿qué sucede cuando el usuario no sigue el camino que hemos diseñado y entra al flujo desde una notificación externa o un enlace profundo? Entendí que definir el "punto de inicio" era mucho más que elegir una pantalla; era anticipar el estado mental del atleta antes de dar el primer paso.

### Parte 2: DEFINICIÓN DE FRONTERAS: PUNTOS DE INICIO Y ESTADOS FINALES

#### El riesgo de los flujos infinitos y la necesidad de anclaje

Un flujo de usuario sin fronteras claras no es un mapa; es una mancha de aceite que se expande sin control sobre el diseño. Tras cerrar la priorización de los 10 flujos críticos para el MVP de AsDeporte, me enfrenté a una realidad técnica que suele pasar desapercibida: la fragmentación de la entrada. En el papel, es fácil decir "el usuario se inscribe", pero en la ejecución, ese usuario puede venir de un anuncio en Instagram, de un correo de "últimos lugares" o de una búsqueda orgánica en Google sobre el Maratón de la CDMX. Si no definía con precisión quirúrgica dónde empezaba y dónde terminaba cada recorrido, corría el riesgo de diseñar "callejones sin salida" o, peor aún, experiencias circulares donde el atleta nunca siente que ha terminado su tarea.

Mi razonamiento fue puramente estratégico. Necesitaba establecer lo que llamo "anclas de experiencia". Estas anclas no son solo pantallas; son estados de conciencia del usuario y garantías de persistencia de datos del sistema. Basándome en la necesidad de eliminar las fricciones validadas en la investigación previa, decidí que antes de trazar una sola línea de interacción paso a paso, debía blindar los extremos de cada proceso. No se trataba solo de lógica de navegación, sino de arquitectura de producto robusta: si el punto de inicio es ambiguo, la arquitectura de información colapsa; si el estado final no es claro, la confianza del usuario se rompe.

#### La realidad omnicanal: El usuario no siempre entra por la puerta principal

Al analizar el flujo de **Buscar, Ver Detalles e Inscribirse a un Evento**, rechacé la idea lineal de que todo comienza en la Home. La realidad de un atleta es mucho más caótica y oportunista. Mapeé cuatro puntos de entrada distintos para este flujo, reconociendo que cada uno trae consigo un estado mental diferente. 

*   **Entrada por Home o Listado:** Aquí el usuario está en modo "descubrimiento", comparando fechas y distancias. 
*   **Motores de búsqueda externos (SEO):** El usuario llega directamente a la página del evento desde Google. Aquí el diseño debe trabajar el doble para darle contexto de plataforma sin obligarlo a retroceder.
*   **Deep Linking (Email/Redes Sociales):** Este es el punto de entrada con mayor intención de compra. Si un atleta hace clic en un enlace de "Inscripciones Abiertas" desde su correo, espera caer directamente en el formulario, no en una página genérica.

Configuré estos puntos de inicio para asegurar que la plataforma soportara aterrizajes profundos. Mi decisión fue técnica: cada flujo debía ser capaz de "despertar" en cualquier nodo de entrada y guiar al usuario hacia el objetivo sin perder la coherencia del sistema. Esta visión omnicanal me permitió anticipar que el diseño no podía ser una secuencia rígida de pantallas, sino un ecosistema de componentes que se activan según el origen del tráfico.

#### Definición de 'Success States': La psicología del cierre y la persistencia

Para los flujos de conversión, como el **Registro de Nuevo Usuario** o el **Inicio de Sesión**, establecí que el "Punto de Fin" no era simplemente una pantalla de carga exitosa. En productos de alta transaccionalidad como AsDeporte, el éxito debe ser tridimensional: visual, sistémico y comunicacional. 

Para el registro, determiné que el estado final deseado incluía tres hitos simultáneos: la cuenta creada, el inicio de sesión automático (para no romper el momentum) y la recepción inmediata de un email de bienvenida. Mi lógica aquí fue eliminar la ansiedad del "muro de espera". Si el usuario no recibe esa confirmación en su bandeja de entrada o no ve su nombre en el perfil de inmediato, el flujo se percibe como fallido, aunque la base de datos diga lo contrario.

En el caso de la **Recuperación de Contraseña**, el límite final fue aún más estricto. No terminaba con el envío del correo de instrucciones, sino con el restablecimiento exitoso y la redirección al login. Entendí que un usuario que intenta recuperar su clave está en un estado de frustración moderada; dejar el flujo a medias en el envío del email es abandonar al atleta en el momento de mayor fricción. El flujo solo se considera "cerrado" cuando el usuario recupera el control total de su cuenta.

#### Triggers reactivos: El diseño de la interrupción

Uno de los desafíos más interesantes fue el flujo de **Interacción con Notificaciones**. Aquí, el punto de inicio no es una acción voluntaria del usuario dentro de la app, sino un disparo (*trigger*) externo: una notificación push o el indicador visual de la campana en la interfaz. 

Mapeé este flujo con una lógica de redirección inmediata. El "Punto de Fin" aquí es binario: o el usuario llega a la sección relevante (la confirmación de su tiempo en una carrera o el detalle de un beneficio Plus) o el sistema falla en su promesa de relevancia. Decidí que cada notificación debía llevar a un *deep link* específico. Si el usuario hace clic en una alerta de "Resultados Disponibles", el estado final no puede ser la Home; debe ser la pantalla de resultados históricos personales. Esta precisión en las fronteras de las notificaciones es lo que transforma una interrupción molesta en un servicio valioso para el atleta.

#### Fronteras externas: Cuando el flujo sale de la pantalla

AsDeporte tiene una complejidad inherente: muchos de sus procesos críticos terminan o transcurren fuera del entorno digital controlado. Al definir los límites para el **Proceso de Conexión de un Wearable**, me encontré con un territorio de terceros. El punto de inicio es claro (la sección de integración en el perfil), pero el punto de fin es un hito técnico crítico: la autorización completada y la confirmación visual de conexión exitosa. 

Aquí mi maniobra fue blindar la retroalimentación. Dado que la conexión depende de APIs externas (Garmin, Strava, etc.), el flujo digital de AsDeporte debe "esperar" y confirmar que el vínculo es real. No permití que el flujo terminara en un simple "Enviando a Garmin"; el estado final real es la visualización del dispositivo vinculado en el perfil del usuario.

De igual forma, para los pagos offline como **Oxxo**, el flujo digital llega a un límite temporal. El punto de fin en la plataforma es la entrega de instrucciones claras de pago y el estado de "Inscripción Pendiente". Aunque el pago ocurra en el mundo físico, el diseño debe cerrar el ciclo digital garantizando que el usuario sepa exactamente qué sigue. La persistencia de datos aquí es vital: el evento debe aparecer en "Mis Eventos Activos" con una etiqueta de estatus clara, evitando que el usuario sienta que su dinero o su lugar en la carrera están en el limbo.

#### El perfil como centro de gravedad de los estados finales

Al documentar estos 10 flujos, noté un patrón que se convirtió en mi regla de oro para este proyecto: casi todos los caminos de éxito convergen en el **Perfil de Usuario**. 

*   Si te inscribes, el éxito es ver el evento en tu perfil.
*   Si conectas un wearable, el éxito es verlo activo en tu perfil.
*   Si editas tus datos, el éxito es la persistencia en tu perfil.
*   Si ganas una medalla, el éxito es el historial en tu perfil.

Esta comprensión me permitió estructurar el perfil no solo como una página de configuración, sino como el gran validador de todos los flujos del MVP. Cada vez que definía un punto de fin, me preguntaba: "¿Cómo sabe el sistema que esto ocurrió y dónde puede el usuario verificarlo mañana?". Esta mentalidad de persistencia es lo que separa un prototipo de juguete de una arquitectura de producto profesional. Sin estas anclas, los diagramas de flujo que estaba por construir habrían sido simples dibujos; con ellas, se convirtieron en el plano de ingeniería para el equipo de desarrollo.

#### Próximo paso: EL HAPPY PATH DE CONVERSIÓN: BÚSQUEDA E INSCRIPCIÓN

Con las fronteras de los 10 flujos ya blindadas y los puntos de éxito definidos, me sentí listo para descender al detalle del recorrido más crítico y complejo de toda la plataforma. Sabía que el flujo de búsqueda e inscripción era el corazón del negocio, pero al empezar a trazar el camino "feliz", me topé con una bifurcación que amenazaba con romper la simplicidad que buscábamos: la gestión de pagos asíncronos y las validaciones de seguridad en tiempo real. Era el momento de ver si la estructura que había diseñado soportaría la presión de la realidad transaccional.

### Parte 3: EL HAPPY PATH DE CONVERSIÓN: BÚSQUEDA E INSCRIPCIÓN

#### El embudo de conversión: donde el diseño se vuelve negocio

Me senté frente al lienzo de diagramación sabiendo que el flujo de búsqueda e inscripción era, literalmente, el motor que mantendría vivo el negocio. Tras haber blindado los puntos de inicio y fin de los 10 flujos principales, me sumergí en el núcleo de la conversión. Mi razonamiento fue pragmático: no bastaba con que el flujo fuera funcional; debía ser psicológicamente fluido para reducir el abandono crónico que detectamos en la investigación previa. Tenía que transformar lo que antes era una búsqueda caótica en un embudo de ventas de alta precisión, donde cada interacción acercara al atleta a la línea de salida sin fricciones innecesarias.

Diseñé este recorrido entendiendo que la inscripción no es un acto impulsivo, sino el resultado de un proceso de validación de confianza. El atleta necesita saber exactamente en qué se está metiendo antes de sacar la tarjeta. Por eso, estructuré el inicio del recorrido —lo que definí como el **Flujo 1**— con una progresión lógica que nace en la Página de Inicio o el Listado de Eventos. No permití que el usuario saltara al pago sin antes pasar por un filtro crítico de información.

#### La arquitectura del descubrimiento y el filtro de confianza

Inicié el mapeo situando al usuario en el **Punto de Inicio (A)**, ya fuera la Home o un enlace externo de una campaña de marketing. La primera maniobra táctica fue optimizar la acción de **Navegar o Usar la Barra de Búsqueda (B)**. Sabía, por los hallazgos de la fase de descubrimiento, que el "Calendario confuso" era uno de los mayores dolores de cabeza de los usuarios de AsDeporte. Para resolverlo, el sistema no solo presenta un **Listado de Eventos (C)** estático, sino una interfaz de exploración dinámica.

Articulé la lógica de **Filtros Avanzados (D)** para que la respuesta fuera inmediata. Mi objetivo era que los **Resultados Filtrados (E)** aparecieran en milisegundos, manteniendo el momentum del usuario. Una vez que el atleta realiza la acción de **Seleccionar un Evento (F)**, llega a la **Página de Detalle de Evento (G)**. Aquí es donde introduje un rombo de decisión que considero vital para la conversión: **¿Información Suficiente y Evento Adecuado? (I)**.

> **Insight de Diseño:** Si el usuario siente que le falta un dato técnico (como la altimetría de la ruta o el horario de entrega de kits), abandonará el flujo de pago para buscarlo. Mi decisión fue blindar la página de detalle con toda la información crítica. Si la respuesta a la decisión (I) es "No", el flujo lo devuelve suavemente al listado (K -> E) en lugar de dejarlo en un callejón sin salida. Solo cuando la respuesta es "Sí", habilitamos el botón **"Inscríbete Aquí" (J)**, asegurando que el usuario entre al embudo transaccional con total certeza.

#### Segmentación estratégica: El proceso de inscripción en tres actos

Una vez que el usuario hace clic en el botón de inscripción, entramos en el terreno de la ingeniería de formularios. Decidí fragmentar la captura de información en tres bloques digeribles para reducir la carga cognitiva. No hay nada que espante más a un usuario que un formulario infinito de una sola página.

1.  **Paso 1 - Datos del Participante (L):** Aquí el usuario debe completar o verificar sus datos, seleccionar su categoría o distancia y, un detalle crítico para la logística, seleccionar su talla de playera (M). Diseñé este paso para que fuera lo más automatizado posible si el usuario ya tiene sesión iniciada, precargando sus datos históricos.
2.  **Paso 2 - Revisión del Pedido (N):** Este es un paso de pausa táctica. Antes de pedir el dinero, obligo al sistema a mostrar un resumen claro. El usuario debe **Revisar su Pedido y Verificar Descuentos (O)**. Esta segmentación no es estética; es una barrera contra el error. Si el usuario se equivoca de categoría y llega al pago, la frustración del reembolso posterior es un costo operativo que AsDeporte no debe asumir.
3.  **Paso 3 - Pago Seguro (P):** Solo después de la validación del paso anterior, abrimos la pasarela de pago.

Esta estructura de tres pasos permite que el usuario sienta que está progresando rápidamente ("estoy en el 66% del proceso") en lugar de enfrentarse a una mole de campos de texto. Cada paso completado es una pequeña victoria que aumenta el compromiso del usuario con la tarea final.

#### La bifurcación crítica: Sincronía vs. Asincronía en el pago

Llegados al **Punto (Q)**, el usuario debe **Seleccionar su Método de Pago**. Aquí es donde el diseño de interacción se encuentra con la realidad financiera de México. La **Decisión (R)** sobre el método seleccionado dispara dos lógicas de sistema completamente distintas que tuve que mapear con rigor forense.

Si el usuario elige **Tarjeta (S)**, el flujo es de gratificación instantánea. Tras ingresar los datos y hacer clic en **"Confirmar Pago" (U)**, el sistema entra en una **Decisión de Éxito (V)**. Si el pago es exitoso, saltamos directamente a la **Pantalla de Confirmación (W)**. Pero, ¿qué pasa si falla? Diseñé una **Pantalla de Error de Pago (X)** que no es un callejón sin salida. En lugar de obligar al usuario a reiniciar todo el proceso desde el Paso 1 (L), el flujo lo devuelve directamente al Paso 3 (P). Esta maniobra es una táctica pura de recuperación de ingresos: mantenemos los datos de la inscripción intactos y solo pedimos un nuevo método de pago.

Por otro lado, está la complejidad del **Pago en Oxxo (T)**, una funcionalidad "Should Have" que es crítica para la inclusión financiera en el MVP. A diferencia de la tarjeta, este es un flujo asíncrono. El sistema debe generar una **Referencia de Pago (Y)**. Mi diseño aquí se centró en la instrucción post-clic: el usuario debe **Guardar o Imprimir la Referencia (Z)** y físicamente ir a la tienda. La interfaz debe dejar claro que la inscripción *no está garantizada* hasta que el pago se procese.

#### El cierre del ciclo: Confirmación y persistencia

El flujo no termina cuando el usuario cierra la ventana. Siguiendo la lógica del punto **(AA)** en el mapeo de flujos críticos, el sistema debe estar preparado para recibir la confirmación de Oxxo en cualquier momento. Una vez que esto ocurre, o inmediatamente después de un pago exitoso con tarjeta, se dispara una orquestación de eventos de sistema **(BB)**:

*   Envío automático del email de confirmación (el comprobante legal del atleta).
*   Actualización en tiempo real de la sección **"Mis Eventos Activos"** en el perfil del usuario.

Este último punto es fundamental. El **Punto de Fin (CC)** del flujo no es solo una pantalla de "Gracias"; es la verificación de que el ecosistema del usuario ha cambiado. El éxito real para el atleta es ver su nombre en la lista de inscritos. Al diseñar esta integración, me aseguré de que el usuario nunca tuviera que preguntarse "¿realmente quedé inscrito?".

Reflexionando sobre este flujo, me doy cuenta de que el diseño de la conversión en AsDeporte es, en realidad, un ejercicio de gestión de la ansiedad. El atleta está invirtiendo dinero y, más importante aún, su ilusión de competir. Cada rombo de decisión, cada mensaje de error y cada pantalla de confirmación que tracé en estos diagramas tiene como único objetivo mitigar esa ansiedad mediante una transparencia absoluta en la información y una robustez técnica que no permita que ningún usuario se pierda en el camino a la meta.

**Próximo paso:**

Haber resuelto el flujo de inscripción me dejó una pregunta inquietante: ¿cómo gestionamos la identidad de esos miles de usuarios que ahora entrarán al embudo? El éxito de la conversión depende de que el acceso sea invisible, pero la seguridad de los datos y la personalización del perfil exigen una estructura rígida. Me di cuenta de que el siguiente gran reto no era la venta, sino la retención: diseñar un sistema de registro y gestión de perfil que no se sintiera como un trámite burocrático, sino como la llave de entrada a una comunidad. Era el momento de bajar al detalle de ACCESO Y SEGURIDAD: REGISTRO, LOGIN Y PERFIL.

### Parte 4: ACCESO Y SEGURIDAD: REGISTRO, LOGIN Y PERFIL

#### El umbral invisible: Rediseñando el acceso como bienvenida

Haber resuelto la complejidad del flujo de inscripción me dejó una satisfacción técnica importante, pero también una duda estratégica que no podía ignorar. Teníamos un embudo de ventas optimizado, pero ¿qué pasaría cuando esos miles de atletas intentaran volver a la plataforma? La conversión es un éxito efímero si el acceso posterior se convierte en una barrera. En mi experiencia, el diseño de identidad y seguridad suele tratarse como un mal necesario, un trámite burocrático que se delega a requerimientos técnicos básicos. Sin embargo, para AsDeporte, decidí tratar el **Registro, Login y Perfil** como el verdadero inicio de una relación a largo plazo.

Mi razonamiento fue claro: el acceso debía ser invisible para el usuario legítimo y blindado ante cualquier vulnerabilidad. No quería que el atleta sintiera que estaba "entrando a una base de datos", sino que estaba "poniéndose su uniforme digital". Este cambio de mentalidad me llevó a mapear los flujos de identidad no como formularios aislados, sino como un sistema de reconocimiento. Si lográbamos que el registro fuera indoloro y el login recordara el contexto del usuario, estaríamos reduciendo drásticamente la tasa de abandono en sesiones recurrentes, un punto crítico que la investigación previa había señalado como una fricción constante en la app actual.

#### Mapeo del Flujo 2: El arte de pedir lo justo en el Registro

Para el **Registro de Nuevo Usuario**, mi objetivo principal fue combatir la fatiga de decisión y el abandono por formularios extensos. Inicié el mapeo en el **Punto de Inicio (A)**, que suele ser el momento de máxima intención, como el intento de unirse a una "Tribu" o guardar un evento. Al llegar a la **Página de Registro (B)**, articulé una estructura de datos mínimos (Acción C). Mi criterio aquí fue radical: cada campo adicional es un porcentaje menos de conversión.

> **Decisión de Diseño:** Implementé una lógica donde la validación de términos y condiciones no es un simple checkbox al final, sino un paso consciente previo a la activación del botón **"Crear Cuenta" (D)**. Esto no solo cumple con la legalidad, sino que establece un contrato de confianza desde el segundo uno.

Al llegar al rombo de decisión **¿Datos Válidos? (E)**, diseñé dos caminos divergentes con implicaciones técnicas muy distintas:
*   **El Camino del Éxito (F):** En lugar de enviar al usuario a una pantalla de "Gracias" y obligarlo a loguearse manualmente —un error común que rompe el momentum—, diseñé una transición donde el sistema crea la cuenta e inicia la sesión de forma automática. La redirección inmediata a **Perfil o Inicio (G)**, acompañada del envío del **Email de Bienvenida (H)**, asegura que el atleta nunca pierda el hilo de su navegación.
*   **La Gestión del Error (J):** Si los datos son inválidos, el flujo no se rompe. El usuario regresa al formulario (C), pero con **mensajes de error claros (K)**. Mi enfoque aquí fue la especificidad: no basta con decir "error", hay que decir "este email ya está registrado" o "tu contraseña necesita un carácter especial", evitando que el usuario juegue a las adivinanzas con la interfaz.

#### Mapeo del Flujo 3: Autenticación con memoria de contexto

El **Inicio de Sesión (Flujo 3)** parece el proceso más estándar del mundo, pero es donde más fricción se acumula si no se diseña con inteligencia. En la **Página de Login (B)**, donde el usuario ingresa sus credenciales (C), me enfoqué obsesivamente en la **Lógica de Redirección (G)**. 

No permití que el sistema simplemente enviara a todos al "Home". Si un atleta venía de intentar inscribirse a la Spartan Race y el sistema le pidió loguearse, tras el éxito en la **Decisión (E)**, la redirección debe ser obligatoriamente a la **"Página Solicitada"**. Preservar el contexto de la sesión no es solo un detalle de UX; es una estrategia de negocio para no enfriar la intención de compra.

Para los casos de error (I), diseñé una respuesta del sistema (J) que equilibra seguridad y ayuda. El mensaje de error debe ser lo suficientemente genérico para no dar pistas a atacantes, pero lo suficientemente claro para que el usuario legítimo sepa que el problema está en sus credenciales y no en una falla del sistema. Además, mantuve el acceso al **Flujo 4 (K/L)** siempre visible, sabiendo que el olvido de contraseñas es la causa número uno de fricción en esta etapa.

#### Mapeo del Flujo 4: Gestión de la ansiedad en la Recuperación de Contraseña

Un flujo de recuperación de contraseña mal diseñado es, literalmente, un usuario perdido para siempre. Al mapear el **Flujo 4**, dividí la experiencia en dos actos para gestionar la carga cognitiva y la ansiedad.

1.  **Paso 1 - La Solicitud (C):** El usuario ingresa su email (D). Aquí, la decisión **¿Email Encontrado? (F)** es crítica. Si es exitoso, la **Pantalla de Confirmación (G)** ("Revisa tu email") actúa como un bálsamo psicológico. No es solo información; es la confirmación de que el sistema está trabajando para el usuario.
2.  **Paso 2 - El Restablecimiento (J):** Una vez que el usuario hace clic en el enlace (I), llega a la interfaz de nueva contraseña (K). Aquí diseñé una validación en tiempo real para asegurar que la nueva clave cumpla con los requisitos antes de que el usuario haga clic en **"Restablecer Contraseña" (L)**. 

La transición final hacia la **Pantalla de Éxito (N)** y el enlace de retorno al login (O) cierra el círculo de seguridad, transformando un momento de frustración (olvido de clave) en un momento de resolución exitosa. La claridad en los mensajes de error (S) cuando el email no es encontrado es el último guardarraíl para evitar que el usuario se sienta abandonado por la plataforma.

#### Mapeo del Flujo 5: El Perfil como centro de control del Atleta

Finalmente, abordé la **Gestión y Edición de Perfil (Flujo 5)**. En AsDeporte, el perfil no es una página estática; es la base de datos que alimenta la personalización de los beneficios Plus y la actividad en la Tribu. Tracé la ruta desde la **Navegación Global (A)** hasta el **Dashboard de Perfil (C)**, buscando que el acceso fuera instantáneo desde cualquier pantalla.

Al entrar en la **Edición de Datos Personales (D/E)**, me aseguré de que el formulario fuera modular. El proceso de guardado (F) y la validación posterior (G) fueron diseñados para ser robustos. Si el sistema confirma el éxito (H), la redirección de vuelta al perfil (I) viene acompañada de un **mensaje de confirmación (J)**. Este feedback visual es esencial: el usuario necesita saber que sus cambios "existen" y están protegidos. Si hay errores de validación (M), el flujo permite la corrección inmediata, evitando que el usuario tenga que empezar de cero, una de las quejas más amargas detectadas en la fase de investigación.

> **Reflexión Senior:** Al cerrar estos cuatro flujos, me di cuenta de que la seguridad y la usabilidad no son fuerzas opuestas, sino complementarias. Reducir campos, automatizar inicios de sesión y diseñar mensajes de error humanos son decisiones estratégicas que blindan el negocio. Un usuario que confía en su acceso es un usuario que se atreve a explorar las funciones avanzadas de la plataforma.

Haber estructurado la identidad del atleta me dio la base sólida que necesitaba. Con el usuario ya identificado y "dentro" del sistema, el siguiente desafío era mucho más ambicioso: ¿cómo le entregamos el valor por el que pagó o por el que se unió a la comunidad? La identidad era solo la llave; ahora tocaba diseñar el interior de la casa.

**Próximo paso:**

Una vez resuelto el acceso, me enfrenté a la verdadera prueba de fuego del ecosistema AsDeporte: la gestión del valor post-compra y la conectividad técnica. El atleta ya está dentro, pero ahora necesita ver sus resultados, gestionar sus beneficios Plus y, sobre todo, conectar su vida física con la digital a través de sus dispositivos. Me di cuenta de que el éxito de la retención dependía de que el flujo de sincronización con wearables no fuera un dolor de cabeza técnico, sino una extensión natural de su entrenamiento. Era el momento de saltar a **VALOR Y ECOSISTEMA: GESTIÓN, PLUS Y CONECTIVIDAD**.

### Parte 5: VALOR Y ECOSISTEMA: GESTIÓN, PLUS Y CONECTIVIDAD

#### La arquitectura de la utilidad post-registro

Una vez que logré blindar los flujos de acceso y seguridad, me detuve a observar el mapa completo. Teníamos la llave, pero la casa seguía vacía. Como diseñador, sé que el verdadero abandono no ocurre en el *login*, sino cinco minutos después, cuando el usuario entra y se pregunta: "¿Y ahora qué?". La identidad es solo el umbral; el valor real de AsDeporte, lo que justifica que un atleta abra la app a las 6:00 AM antes de entrenar, reside en la gestión de su vida deportiva y en la integración de su ecosistema físico.

Mi razonamiento en este punto fue pragmático: debíamos transformar el "perfil" de un simple repositorio de datos estáticos en un centro de mando operativo. No quería una página de "Ajustes" aburrida; necesitaba un **Dashboard de Perfil** que fuera el corazón de la persistencia del atleta. El reto era mapear cómo un usuario encontraría sus inscripciones actuales, sus glorias pasadas en forma de resultados y, sobre todo, cómo haríamos que la plataforma "hablara" con su reloj Garmin o su cuenta de Strava. Si no lográbamos que esa conexión fuera impecable, seríamos solo una ticketera más, no una plataforma de estilo de vida.

#### El fin de la información perdida: Gestión de Actividad y Resultados

Uno de los dolores más agudos que detectamos en la investigación fue la "ansiedad post-compra". Los atletas pagaban su inscripción y luego sentían que su dinero caía en un agujero negro hasta el día del evento. Para resolver esto, tracé el **Flujo 6: Acceso y Gestión de Inscripciones Activas** con una obsesión: la visibilidad inmediata.

Diseñé el recorrido partiendo de la **Navegación Global (A)**, llevando al usuario directamente al **Dashboard de Perfil (C)**. Mi decisión estratégica aquí fue eliminar niveles de navegación innecesarios. En lugar de esconder las inscripciones tras tres clics, definí que la sección **"Mis Eventos Activos" (D)** debía ser el primer impacto visual. En el mapeo, detallé que al seleccionar un evento de la lista (G), el sistema debe entregar el **Detalle/Comprobante de Inscripción Activa (H)** de forma instantánea. Este no es solo un documento; es la tranquilidad del atleta. Haber mapeado este "acceso rápido" fue mi respuesta directa a la fricción reportada de no encontrar la información tras el pago.

Para el **Flujo 7 (Resultados Históricos)**, apliqué una lógica similar pero con un matiz de "memoria deportiva". No se trataba solo de listar carreras viejas, sino de permitir que el usuario reviviera su desempeño. Mapeé el camino desde el Dashboard hacia **"Mi Historial AsDeporte" (E)**, asegurando que cada entrada permitiera profundizar hasta el **Resultado Personal de Evento Pasado (H)**. Mi objetivo era que el usuario no tuviera que salir a buscar sus tiempos en bases de datos externas; la plataforma debía ser su biografía atlética oficial.

#### AsDeporte Plus: Diseñando la tangibilidad del privilegio

El modelo de negocio depende críticamente de la retención, y ahí es donde entra **AsDeporte Plus**. Sin embargo, la investigación me mostró que muchos usuarios no entendían por qué pagaban la membresía. En el **Flujo 8**, mi maniobra fue crear un **Hub de Beneficios (E)** que no fuera una página de marketing, sino una herramienta transaccional.

Articulé este flujo para que, desde el Dashboard, el acceso a "Mis Beneficios Plus" fuera un disparador de valor inmediato. En el diseño del Hub, prioricé tres elementos que consideré innegociables:
*   **Estado de la membresía:** Claridad absoluta sobre la vigencia.
*   **Lista de beneficios activa:** Qué puedo usar hoy mismo (descuentos, preventas).
*   **Acceso a Wallet Digital:** La capacidad de llevar sus beneficios en el teléfono, listos para ser usados en el mundo físico.

Mi decisión de centralizar esto en un "Hub" y no dispersar los beneficios por toda la interfaz fue una apuesta por la educación del usuario. Si el atleta ve el valor acumulado en un solo lugar, la renovación de la membresía deja de ser una duda y se convierte en una consecuencia lógica de la utilidad percibida.

#### La ingeniería del ecosistema: Conectividad y Wearables

Llegué entonces al que considero el núcleo técnico de esta fase: el **Flujo 9 (Conexión de Wearables)**. Aquí es donde la plataforma deja de ser un software aislado para convertirse en un nodo del ecosistema del atleta. Mapear la integración con gigantes como Garmin o Strava requirió una precisión de cirujano en la lógica de interacción, ya que dependíamos de servicios externos.

Tracé el proceso iniciando en la sección de **"Integración Wearables" (E)**. Cuando el usuario hace clic en **"Conectar" (F)**, el sistema no solo abre una ventana; inicia un protocolo de **Autorización OAuth**. Mapeé la redirección a la **Página de Autorización Externa (G)**, donde el usuario debe validar sus credenciales fuera de nuestro dominio. Mi preocupación constante fue el "camino de regreso". 

> **Decisión Senior:** En integraciones externas, el riesgo de abandono es altísimo durante el *handshake*. Por eso, puse especial énfasis en la lógica de retorno (J). Si la **Conexión es Exitosa (K)**, el sistema debe redirigir inmediatamente a nuestra plataforma y mostrar un estado de **"Conectado" (N)** con un mensaje de éxito rotundo. Pero, ¿qué pasa si falla? Mapeé el escenario de error (P) para que el usuario nunca cayera en una pantalla en blanco, sino que fuera devuelto a la página de integración con un mensaje claro y la opción de reintentar. Esta robustez en el flujo de error es lo que separa un producto profesional de un experimento técnico.

#### El hilo conductor: Un sistema de notificaciones con propósito

Para cerrar este ciclo de utilidad, diseñé el **Flujo 10: Interacción con Notificaciones**. No quería que las notificaciones fueran ruido; quería que fueran "atajos de valor". Mapeé dos puntos de entrada distintos porque entendí que el contexto del usuario cambia radicalmente según dónde se encuentre.

1.  **La Notificación Push (A):** Pensada para el usuario que está fuera de la app. El clic (B) debe disparar una apertura profunda (*Deep Linking*) que lo lleve directamente a la **Pantalla Relevante (D)**, ya sea un cambio de horario en su carrera o un nuevo resultado disponible.
2.  **El Indicador en Interfaz (F):** Para el usuario que ya está navegando. Este flujo lleva al **Centro de Notificaciones (H)**, donde puede gestionar sus alertas de forma cronológica.

Mi razonamiento aquí fue evitar que el usuario se sintiera perdido tras hacer clic. Si la notificación dice "Tu resultado está listo", el flujo debe llevarlo al resultado, no al inicio de la app. Este diseño de "hilo conductor" asegura que el atleta siempre esté a un toque de distancia de la información que le importa, cerrando el ciclo de retención y transformando la plataforma en un compañero activo de su jornada deportiva.

#### La utilidad como estrategia de negocio

Al finalizar el mapeo de estos flujos de ecosistema, mi conclusión estratégica fue clara: estábamos construyendo **Lifetime Value (LTV)**. Un usuario que tiene sus resultados históricos, sus beneficios Plus activos y su reloj Garmin sincronizado, tiene un costo de salida altísimo. Ya no es solo una app para comprar boletos; es el lugar donde vive su identidad como deportista.

Cada decisión, desde la lógica de redirección asíncrona en los *wearables* hasta la visibilidad del *Wallet* digital, fue tomada para maximizar la utilidad percibida desde el primer día. El diseño de estos flujos no fue un ejercicio estético, sino una labor de ingeniería de interacción destinada a blindar la relación entre el atleta y AsDeporte. Habíamos construido el interior de la casa con materiales sólidos y conexiones inteligentes.

**Próximo paso:**

Con los recorridos lógicos de valor y conectividad ya trazados, sentí que la estructura del MVP era finalmente coherente. Sin embargo, al observar la complejidad de las ramificaciones y los puntos de decisión que habíamos acumulado, me asaltó una duda crítica: ¿están estos flujos realmente blindados contra el error humano y la inconsistencia técnica? El mapa estaba listo, pero ahora necesitaba pasar por el tamiz del **REFINAMIENTO Y BLINDAJE: VALIDACIÓN Y ESTÁNDARES**, donde pondríamos a prueba la lógica frente a los *stakeholders* y definiríamos las reglas de diseño que asegurarían que este mapa se tradujera en una interfaz impecable. Sabía que un flujo perfecto en el papel puede romperse en la realidad si no establecemos estándares de control de daños desde ahora.

### Parte 6: REFINAMIENTO Y BLINDAJE: VALIDACIÓN Y ESTÁNDARES

#### El momento en que el mapa debe sobrevivir a la realidad

Tener diez flujos de usuario trazados en un lienzo digital produce una satisfacción engañosa. Es fácil enamorarse de la lógica que uno mismo ha construido, pero como diseñador, he aprendido que un diagrama que no sobrevive al escrutinio de ingeniería no es un plan de trabajo, es solo una expresión de deseos. Al finalizar el mapeo de los 10 recorridos críticos del MVP, sentí esa urgencia de "estresar" el sistema. Sabía que si no blindaba estos flujos ahora, cualquier ambigüedad se traduciría en deuda técnica, retrasos en el desarrollo o, peor aún, en una experiencia rota para el atleta en el momento más crítico: cuando intenta pagar su inscripción.

La transición hacia el refinamiento no fue un proceso administrativo, sino una labor de **blindaje técnico**. Necesitaba que cada conector, cada rombo de decisión y cada estado de error fuera una instrucción inequívoca. Mi razonamiento fue simple: el costo de corregir un flujo en esta etapa es mínimo comparado con el costo de reescribir código cuando el sistema de pagos asíncronos de Oxxo falle en producción. Pasé de la fase creativa de trazado a una fase forense de validación, donde el objetivo ya no era la fluidez, sino la **resiliencia del sistema**.

#### La sesión forense: Validar para no fallar

Para ejecutar la validación interna, convoqué a una mesa de trabajo con los responsables de **Producto, Ingeniería y Soporte**. No fue una presentación de "lucimiento", sino una revisión paso a paso donde puse mis diagramas bajo el microscopio. Mi enfoque fue preventivo: presenté el recorrido del atleta B2C desde el inicio en la página de eventos hasta la confirmación de pago, pero me detuve obsesivamente en las ramificaciones.

En esta sesión, utilicé el feedback de ingeniería para validar la factibilidad técnica de cada paso. No me bastaba con saber que el usuario podía "seleccionar un método de pago"; necesitaba confirmar que el sistema podía manejar la **asincronía** inherente a los pagos en Oxxo. 
*   **Con Ingeniería:** Discutimos la lógica del Paso AA (recepción de confirmación asíncrona). Validamos que el flujo contemplara el estado de espera y la actualización posterior de "Mis Eventos Activos" sin que el usuario sintiera que su dinero había desaparecido en un vacío digital.
*   **Con Soporte:** Analizamos los mensajes de error en el flujo de inicio de sesión y recuperación de contraseña. Mi prioridad era asegurar que, si una credencial era inválida, el sistema no solo lanzara un error genérico, sino que proporcionara una salida clara, reduciendo la carga futura en el centro de atención al cliente.

Esta validación multidisciplinaria permitió que el flujo dejara de ser una propuesta de diseño para convertirse en un **acuerdo de implementación**. Cada ajuste realizado tras esta sesión —como el refinamiento de los mensajes de validación en tiempo real en los formularios de registro— fue una victoria estratégica contra la fricción.

#### Estresando el flujo: Del "Happy Path" a los Edge Cases

Una de mis mayores preocupaciones era el flujo de **Inscripción a Eventos**, específicamente el manejo de errores de pago. Utilizando la simbología de rombos para decisiones que definí en mi metodología, analicé qué ocurría cuando la transacción con tarjeta era rechazada (Paso V). Mi maniobra aquí fue "blindar" el reintento: en lugar de enviar al usuario al inicio del proceso —un error común que destruye la conversión—, diseñé el retorno directo al paso de selección de método de pago, manteniendo los datos del participante intactos.

También puse especial atención en el flujo de **Conexión de Wearables**, un *Should Have* crítico para la retención. Aquí, el reto técnico era la redirección a páginas de autorización externa (Garmin, Strava). Tuve que mapear con precisión quirúrgica qué sucedía si el usuario cancelaba la autorización en el sitio del tercero o si la conexión fallaba. 
> El diseño senior no se ve en la ruta feliz; se ve en la elegancia con la que manejas el fracaso del sistema. Si la conexión falla, el usuario debe volver a AsDeporte con un mensaje de éxito o un error accionable, nunca a una pantalla en blanco.

Este proceso de identificar **edge cases** permitió transformar un diagrama lineal en una red lógica robusta. Ajusté las ramificaciones para que el sistema respondiera correctamente ante datos inválidos o fallos de red, asegurando que el recorrido fuera eficiente incluso cuando las condiciones técnicas no fueran óptimas.

#### La fuente única de verdad: Notas de implementación

Para que este trabajo tuviera un **hand-off** exitoso hacia el equipo de desarrollo, no bastaba con las flechas. Me dediqué a documentar cada uno de los 10 flujos con un nivel de detalle obsesivo. Para el flujo de **Búsqueda e Inscripción**, incluí notas técnicas sobre los filtros avanzados y la visualización de resultados; para la **Gestión de Perfil**, especifiqué los criterios de validación de cada campo.

Aseguré que el documento final funcionara como la **fuente única de verdad**. Cada pantalla representada tenía una nota al margen explicando su propósito, los dolores que abordaba (como la falta de información técnica en el detalle del evento) y las ideas de diseño clave que debían preservarse en la interfaz. Esta documentación no era solo para los desarrolladores; era un seguro de vida para el proyecto. Si alguien tenía una duda sobre por qué el flujo de recuperación de contraseña tenía dos pasos de confirmación, la respuesta estaba ahí, justificada por la reducción de la ansiedad del usuario documentada en nuestra investigación previa.

#### El rigor del estándar: Píxeles que comunican jerarquía

Finalmente, establecí un protocolo de **estándares de diagramación** para eliminar cualquier ambigüedad visual. No es un detalle menor: en proyectos de esta escala, si un desarrollador confunde una línea de acción con una de retroalimentación, la implementación sufre.

Definí una simbología unificada y reglas estéticas estrictas para los diagramas:
*   **Grosor de trazo:** Utilicé grosores específicos en píxeles para diferenciar las líneas de conexión principales de las secundarias.
*   **Simbología:** Estandaricé el uso de rectángulos para pantallas, verbos de acción para los pasos del usuario y rombos para las decisiones lógicas del sistema.
*   **Jerarquía visual:** Los puntos de inicio (A) y fin (CC) fueron marcados con una terminología clara para que el alcance de cada tarea fuera evidente a primera vista.

Esta obsesión por el estándar visual permitió que cualquier miembro del equipo, desde el Product Manager hasta el QA Engineer, pudiera interpretar la dirección del flujo sin necesidad de una explicación adicional. Habíamos construido un lenguaje común que blindaba la visión del producto antes de mover un solo píxel en el diseño de interfaz. Los flujos estaban listos; la arquitectura lógica era ahora inexpugnable.

**Reflexión final:**
Al cerrar esta fase de blindaje, comprendí que mi mayor aporte no fue solo trazar rutas, sino asegurar que esas rutas fueran transitables para el equipo de desarrollo. El diseño de flujos es, en última instancia, un ejercicio de empatía tanto con el usuario final como con el ingeniero que debe construirlo. Me voy de esta actividad con la tranquilidad de que hemos reducido drásticamente el riesgo de errores costosos en producción, dejando una base sólida y documentada que será el motor de las siguientes fases de prototipado y diseño visual.