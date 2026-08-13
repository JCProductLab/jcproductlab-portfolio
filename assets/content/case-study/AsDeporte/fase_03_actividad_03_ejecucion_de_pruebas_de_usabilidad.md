# Fase 3: Prototipado y Validación

## Actividad 3: actividad_03_ejecucion_de_pruebas_de_usabilidad

### Parte 1: BLINDAJE LOGÍSTICO Y SETUP DEL LABORATORIO UX

#### El silencio antes de la primera conexión

Habíamos cerrado la fase de reclutamiento con 15 atletas confirmados, divididos en tres perfiles que representaban el espectro completo de nuestra audiencia: desde el "Atleta Plus" que vive para la métrica, hasta el principiante que aún teme que la tecnología le falle en plena carrera. Tenía los nombres, los horarios y las expectativas del negocio sobre la mesa, pero sabía que nada de eso importaría si el entorno de prueba fallaba. Como diseñador, entiendo que una prueba de usabilidad es, en esencia, un experimento científico; si el laboratorio está contaminado, los resultados son ruido. Mi obsesión en este punto no era el diseño en sí —eso ya estaba en el prototipo— sino el blindaje de la experiencia. Cualquier retraso en la carga, cualquier notificación de WhatsApp que interrumpiera la sesión o un enlace que no abriera a la primera, se traduciría en una fricción artificial que sesgaría mis métricas de facilidad percibida.

La transición de la planificación a la ejecución fue un ejercicio de control de daños preventivo. No estaba simplemente "preparando una reunión"; estaba construyendo un simulacro de alta fidelidad donde el atleta debía olvidar que estaba frente a un prototipo y sentir que estaba ante la aplicación real de AsDeporte. Mi razonamiento fue claro: si quería capturar reacciones viscerales y no solo opiniones corteses, el entorno técnico debía ser invisible. Dediqué las 48 horas previas a la primera sesión a lo que llamo el "blindaje logístico", asegurándome de que cada cable, cada bit y cada palabra del guion estuvieran alineados para proteger la integridad de la data que estábamos a punto de recolectar.

#### La anatomía del hardware y el rigor del dispositivo real

Para este nivel de validación, descarté de inmediato las pruebas basadas únicamente en espejeo de pantalla desde un ordenador. Los atletas de AsDeporte interactúan con la plataforma en movimiento, en el gimnasio o en la línea de meta; necesitaba que el prototipo viviera en sus manos. Configuré dos dispositivos físicos de referencia: un iPhone 14 y un Samsung Galaxy S22, cubriendo así los dos ecosistemas principales que detectamos en el análisis de dispositivos de la Fase 1. 

No me limité a cargar el enlace de Figma. Realicé una limpieza profunda de caché en ambos terminales y configuré el modo "No molestar" de forma estricta para bloquear cualquier interrupción externa. Mi objetivo era validar la respuesta táctil y el rendimiento de las animaciones que tanto habíamos pulido. Si una transición entre la pantalla de "Inscripción" y el "Checkout" se sentía lenta por un problema de renderizado del prototipo, el usuario lo percibiría como una falta de robustez del sistema, no del diseño. Verifiqué manualmente cada *hotspot* y cada estado de carga, asegurándome de que el prototipo de alta fidelidad respondiera con la fluidez que un atleta espera cuando está bajo presión competitiva.

#### Infraestructura de transmisión: el desafío de la latencia invisible

Dada la naturaleza híbrida de nuestras sesiones, la infraestructura de grabación era mi mayor riesgo técnico. Opté por utilizar Lookback como herramienta principal, no por inercia, sino por su capacidad única de capturar simultáneamente tres flujos de datos críticos: la pantalla del dispositivo, el rostro del atleta y el audio ambiental. En pruebas de usabilidad, el "qué" hace el usuario es solo la mitad de la historia; el "cómo" se siente —ese micro-gesto de frustración al no encontrar el botón de 'Confirmar' o el suspiro de alivio al ver el resumen de su compra— es donde reside el verdadero insight cualitativo.

Realicé pruebas de estrés de conectividad simulando diferentes anchos de banda. Sabía que si la transmisión de Lookback generaba latencia en el prototipo, la percepción de fluidez se rompería. Mi maniobra aquí fue técnica y táctica: configuré sesiones de respaldo en Zoom con captura de pantalla local en caso de que el servidor de Lookback fallara. Esta redundancia no era paranoia; era la garantía de que el tiempo de los 15 atletas —y el presupuesto invertido en sus incentivos— no se desperdiciaría por un error de conexión. La observación atenta que buscábamos requería que yo, como moderador, pudiera ver la cara del usuario en tiempo real para saber cuándo intervenir y cuándo guardar silencio.

#### La coreografía del guion: el método 'Think-Aloud' como motor de búsqueda

El guion del moderador que articulé no era un cuestionario, sino una partitura diseñada para extraer el modelo mental del atleta sin contaminarlo. Seguí una estructura estricta que comenzaba con una bienvenida estandarizada, cuyo objetivo principal era desarmar la ansiedad del participante. Fui enfático en una frase que repetí como un mantra: "Estamos evaluando la plataforma para mejorarla, no te estamos evaluando a ti; no hay respuestas incorrectas, solo experiencias reales". Esta distinción es vital para mitigar el sesgo de deseabilidad social, donde el usuario intenta "quedar bien" con el diseñador.

Diseñé las instrucciones para forzar el protocolo de "Pensar en Voz Alta" (*Think Aloud*). No quería que el atleta simplemente completara la tarea de "Inscribirse a un triatlón"; necesitaba que verbalizara cada duda: "¿Por qué este botón es gris?", "¿Es esto el precio final o falta el cargo por servicio?". Inserté recordatorios estratégicos en mi guion para pedirles que hablaran si se quedaban callados por más de cinco segundos. El guion también incluía preguntas de contexto pre-tarea para situarlos emocionalmente: "¿Cuándo fue la última vez que te inscribiste a una carrera y qué fue lo que más te molestó del proceso?". Esto no era charla trivial; era una técnica para activar los recuerdos de fricción real justo antes de que se enfrentaran a nuestra propuesta de solución.

#### Ética y blindaje legal: la base de la confianza

Antes de que se grabara el primer segundo de interacción, establecí un protocolo riguroso de Consentimiento Informado. En un proyecto como el de AsDeporte, donde manejamos datos de atletas y su comportamiento digital, la privacidad no es solo un trámite legal, es una piedra angular de la experiencia de usuario. Preparé documentos digitales claros donde se explicaba exactamente para qué se usarían las grabaciones, quién tendría acceso a ellas y cómo se anonimizaría la información en el informe final.

Obtuve el permiso explícito para grabar audio y video al inicio de cada sesión, asegurando que el atleta comprendiera que podía detener la prueba en cualquier momento sin dar explicaciones. Este paso administrativo, lejos de ser una barrera, funcionó como un generador de confianza. Al ver que tratábamos sus datos con rigor profesional, los participantes se sentían más cómodos siendo honestos y críticos con el diseño. No estábamos recolectando solo clics; estábamos custodiando la confianza de la comunidad de deportistas más grande de México.

#### Instrumentación forense: la hoja de notas de alta resolución

Para evitar que la intensidad de las sesiones en vivo nublara mi juicio, diseñé una herramienta de observación estructurada en Notion, configurada como una base de datos relacional. No quería notas dispersas; necesitaba una estructura que me permitiera capturar métricas cuantitativas y hallazgos cualitativos en tiempo real sin despegar la vista del usuario. 

Configuré columnas específicas para cada una de las tareas críticas:
*   **Tiempo por Tarea:** Para medir la eficiencia comparativa entre perfiles.
*   **Tasa de Éxito:** Clasificada en Sí (sin ayuda), Parcial (con dudas pero completada) y No (abandono o error crítico).
*   **Conteo de Errores:** Identificando si eran errores de navegación, de comprensión de texto o de interacción táctil.
*   **Facilidad Percibida (SEQ):** Una escala de 1 a 7 que el usuario respondía inmediatamente después de cada tarea.

Esta instrumentación me permitió actuar como un observador forense. Mientras el atleta luchaba o fluía con el prototipo, yo podía marcar momentos exactos de la grabación (timestamps) donde ocurría un "momento de la verdad". Tener esta estructura lista antes de empezar fue lo que me permitió, más adelante, transformar horas de video en insights accionables sin perder el rigor estadístico.

#### La logística del cierre y el valor del tiempo del atleta

Finalmente, sistematicé la entrega de incentivos. Los atletas B2C son personas con agendas apretadas; su tiempo es su recurso más valioso. Preparé un kit de cierre que incluía los códigos de descuento y los agradecimientos institucionales de AsDeporte, listos para ser enviados automáticamente al finalizar cada sesión. 

Esta parte del proceso a menudo se descuida, pero para mí es fundamental. El cierre de la prueba de usabilidad es el último punto de contacto de esta fase y define la disposición del usuario para futuras validaciones. Al asegurar que el incentivo llegara de inmediato, cerrábamos el ciclo de reciprocidad de forma impecable. El setup estaba listo. El laboratorio estaba blindado. El prototipo de alta fidelidad esperaba en el dispositivo, libre de caché y de distracciones. Estábamos listos para enfrentar la realidad del usuario.

> **Insight Senior:** El rigor en el setup es lo que separa a un diseñador que "hace entrevistas" de uno que "hace investigación". Si no controlas las variables técnicas, terminas diseñando soluciones para problemas que solo existen en tu prototipo roto, no en la vida del usuario.

**Próximo paso:**

Con el laboratorio blindado y el protocolo de observación listo, llegó el momento de abrir la puerta al primer perfil: el Atleta Plus. Sabía que este sería el encuentro más tenso; son usuarios que conocen la plataforma actual de memoria, que no perdonan un clic extra y cuya exigencia técnica pondría a prueba cada decisión de arquitectura que tomamos en las fases anteriores. Estaba a punto de descubrir si nuestra propuesta de valor era realmente el "motor que libera su grandeza" o si habíamos construido una barrera más en su camino al podio.

### Parte 2: LA PRUEBA DE FUEGO CON EL POWER USER (ATLETAS PLUS)

#### La presión del primer clic: El veredicto del experto

Abrir la puerta de la sala de pruebas para recibir a Carlos R. no fue un trámite; fue el momento en que la arquitectura que habíamos construido dejó de ser una teoría para enfrentarse a la realidad de un triatleta que entrena 15 horas a la semana. Como diseñador, sé que el perfil **Asdeporte Plus** es el más peligroso y, a la vez, el más valioso: son usuarios que no perdonan un segundo de latencia ni un flujo mal articulado porque su compromiso con el deporte es absoluto. Sabía que si lográbamos convencer a Carlos, Sofía y Ricardo, el MVP tendría el blindaje necesario para sobrevivir en el mercado.

La ejecución no permitía improvisaciones. Mi enfoque fue quirúrgico: validamos si el rediseño eliminaba las fricciones históricas de búsqueda y la opacidad en los beneficios que este grupo había denunciado durante años. No buscábamos que nos dijeran que la app era "bonita"; necesitaba ver si un ingeniero de software y triatleta como Carlos podía encontrar un evento en la Riviera Maya en menos de un minuto sin que su pulso subiera por la frustración. Estábamos probando la eficiencia extrema, el estatus y la utilidad profesional de la herramienta.

#### El protocolo de "Pensar en Voz Alta" como bisturí diagnóstico

Para estas sesiones, implementé el protocolo **Think-Aloud** con un rigor casi clínico. Mi rol como moderador fue el de un observador invisible pero atento. Tras recibir a Carlos, obtener su consentimiento para la grabación y asegurar que su dispositivo iOS estuviera perfectamente calibrado, le entregué la primera tarea. Mi instrucción fue clara: "Dime todo lo que pase por tu mente, cada duda, cada alivio y cada molestia". 

Manejar la sesión con usuarios tan técnicos requiere una disciplina férrea. Cuando Carlos se detuvo un segundo buscando un filtro específico, resistí la tentación de ayudarlo. En lugar de eso, utilicé la técnica de la pregunta espejo: "¿Qué esperas encontrar ahí?". Este enfoque, extraído de mi metodología de moderación, me permitió descubrir que, aunque la búsqueda general fue un éxito rotundo (completada en solo 40 segundos con una facilidad de 4/5), su mente ya estaba buscando el siguiente nivel de especialización.

> **Insight Senior:** En pruebas con Power Users, el silencio es información. Si un usuario como Carlos se detiene, no es porque no sepa usar una app, es porque la interfaz no está hablando su mismo idioma técnico. Registrar esos micro-gestos de duda es lo que permite pulir un MVP hasta convertirlo en una herramienta profesional.

#### Oro puro: La validación de la Información Técnica

El momento de la verdad llegó cuando Sofía L., corredora de ultra trail, interactuó con la nueva pestaña de **Información Técnica**. Hasta ahora, los atletas de AsDeporte tenían que peregrinar por grupos de Facebook o PDFs externos para encontrar un archivo **GPX** o una altimetría fiable. Al ver a Sofía navegar hacia el detalle del "Ultra Trail Sierra Gorda" y encontrar el botón de descarga directa del GPX y la altimetría interactiva, su reacción fue inmediata: "¡Esto es oro!".

Esta validación fue el triunfo estratégico de la fase. Decidimos centralizar estos activos críticos dentro de la app para transformar una experiencia de "inscripción y olvido" en una de "planificación y rendimiento". Sofía completó la revisión de detalles técnicos en apenas 1 minuto, otorgando una calificación de 5/5. Para un diseñador, ver que un usuario califica una funcionalidad como "una maravilla que ahorra dolores de cabeza" es la confirmación de que la jerarquía de información propuesta es la correcta. Habíamos pasado de ofrecer datos genéricos a entregar herramientas de competencia.

#### El Hub de Beneficios Plus: De la confusión a la transparencia

Uno de los mayores problemas que diagnosticamos en la Fase 1 fue la "invisibilidad" de los beneficios Plus. Los usuarios pagaban una membresía pero no sabían cuándo ni cómo se aplicaban sus descuentos. Con Elena V., duatleta y usuaria constante, puse a prueba el nuevo **Hub de Beneficios Plus**. 

La maniobra de diseño aquí fue crear un espacio centralizado donde el estado de la membresía, el seguro deportivo y, sobre todo, el **Wallet**, fueran transparentes. Elena navegó hacia su perfil y encontró el Hub en 50 segundos. Su alivio fue evidente al ver el saldo de su Wallet y el enlace de "Ver movimientos y condiciones". 

*   **Transparencia en tiempo real:** Durante el flujo de inscripción simulado, Elena notó de inmediato la etiqueta de "Descuento Asdeporte Plus aplicado: -$XX". 
*   **Reducción de ansiedad:** "Antes no estaba segura de si se aplicaba hasta el final o en el correo", comentó. 
*   **Fidelización:** Al ver el ahorro reflejado antes del pago (tarea completada en 1m 20s), la percepción de valor de la membresía cambió de ser un gasto a ser una inversión clara.

#### La arquitectura de búsqueda y el filtro de la realidad

Someter la búsqueda avanzada al escrutinio de Ricardo H. (ciclista) y Miguel S. (atleta OCR) nos dio la medida exacta de nuestra granularidad. Ricardo utilizó los filtros de sub-disciplina para encontrar un "Gran Fondo" de más de 120 km en Jalisco. Lo logró en 1 minuto y 15 segundos, calificando la experiencia con un 5. La estructura de filtros por distancia y tipo de evento ciclista validó que nuestra arquitectura de información era capaz de hablar el lenguaje de cada nicho.

Sin embargo, la prueba con Miguel S. para la **Spartan Beast** nos dio el "reality check" necesario para un MVP. Aunque Miguel valoró positivamente poder filtrar por tipo de Spartan (Sprint, Super, Beast), señaló que para un atleta de obstáculos avanzado, el listado genérico no es suficiente; él buscaba la ubicación exacta de los obstáculos en el mapa. 

> **Insight Senior:** Un MVP exitoso no es el que lo tiene todo, sino el que establece una base sólida para crecer. La observación de Miguel sobre la falta de detalle en los obstáculos no fue un fallo del diseño, sino una validación de que la sección de "Información Técnica" es el lugar correcto para depositar ese valor en futuras iteraciones.

#### Ecosistema de Wearables y el veredicto del SUS Score

Finalmente, validamos la funcionalidad "Should Have" que todos los perfiles Plus exigían: la **Conexión con Wearables**. Ver a Carlos buscar "Garmin" y a Sofía buscar "Suunto/Strava" dentro de la sección de aplicaciones conectadas confirmó que el ecosistema digital de AsDeporte ya no puede ser una isla. Carlos encontró la opción en 45 segundos y la calificó como "indispensable".

Al tabular los resultados y calcular el **System Usability Scale (SUS)** estimado, los números hablaron por sí solos:
*   **Carlos R. (Triatlón):** 92.5/100. La eficiencia y la información técnica ganaron su confianza.
*   **Sofía L. (Trail):** 97.5/100. El acceso al GPX y los filtros de desnivel positivo fueron el factor decisivo.
*   **Miguel S. (OCR):** 82.5/100. Una nota alta, pero con la reserva clara de que el contenido técnico debe profundizarse.

Diseñar para el Power User es un ejercicio de equilibrio: debíamos entregar una interfaz que no alienara al novato, pero que blindara la reputación de AsDeporte ante los atletas más competitivos. Al cerrar estas cinco sesiones, me quedó claro que habíamos logrado construir una plataforma que se siente profesional. El MVP ya no era solo un proyecto de rediseño; se había convertido en el compañero de entrenamiento que estos usuarios estaban esperando.

**Próximo paso:**

Con la victoria táctica sobre los usuarios Plus asegurada, me preparé para el siguiente desafío, uno mucho más cargado de tensión emocional. Sabía que los Power Users perdonan omisiones técnicas si la herramienta les da poder, pero el siguiente grupo, los Atletas Ocasionales con historial de fricción, venían con la guardia arriba y una memoria llena de errores pasados. Estaba a punto de descubrir si nuestro nuevo flujo de recuperación de contraseña y el rediseño del checkout eran suficientes para sanar la herida de un usuario que ya había intentado abandonar la plataforma una vez.

### Parte 3: SANANDO LA HERIDA: RECUPERANDO AL USUARIO FRUSTRADO

#### La deuda emocional de la plataforma

La atmósfera en las sesiones remotas cambió drásticamente cuando pasamos de los Atletas Plus a los Atletas Ocasionales. Con los Power Users, la conversación era técnica, casi de colegas; con este segundo grupo, me enfrentaba a una **deuda emocional** acumulada por años de fallos técnicos. No estaba validando solo un flujo de navegación; estaba intentando reconstruir una confianza que se había roto con cobros dobles, aplicaciones congeladas y registros que nunca aparecieron. Sabía que, para este perfil, la estética era secundaria: si el sistema volvía a fallar en el momento del pago, no habría UI Kit lo suficientemente elegante para salvar la relación con la marca.

Inicié esta fase de ejecución con una guardia alta, consciente de que estos usuarios venían con un "baseline de frustración" muy elevado. Mi razonamiento estratégico fue claro: debíamos ejecutar sesiones de "guante blanco". No podíamos permitirnos ni un milisegundo de latencia en el prototipo, porque para alguien como Laura o Ana, un retraso en la carga no es un problema técnico, es una señal de que "la app se va a trabar otra vez". Preparé el entorno de prueba con una obsesión casi forense, asegurando que las grabaciones en Zoom y la captura de interacciones en Lookback funcionaran sin fricciones, permitiéndome concentrarme exclusivamente en las micro-expresiones de los participantes.

#### El protocolo del pensamiento vivo: Laura y el trauma del pago doble

Para capturar el verdadero impacto del rediseño, apliqué con rigor el protocolo de **"Pensar en Voz Alta" (Think-Aloud)**. No quería que me dijeran si les gustaba el azul de la interfaz; necesitaba que narraran su proceso mental mientras sus dedos se acercaban al botón de "Confirmar Pago". 

La sesión con **Laura "La Entusiasta"** el 15 de mayo fue el termómetro perfecto. Laura cargaba con el trauma de un pago doble en la versión anterior que tardó semanas en resolverse. Antes de entregarle el control del prototipo, utilicé las preguntas pre-tarea para mapear su historial. "Fue horrible", me confesó. "Desde ahí, como que me da cosa pagar con la app". Con ese peso en la sala virtual, la solté en el flujo de inscripción de la carrera "Corriendo por Sonrisas".

*   **La maniobra de precarga:** Al llegar al "Paso 1 de 3: Datos del Participante", observé un cambio inmediato en su lenguaje corporal. El sistema ya mostraba su nombre, correo y fecha de nacimiento. 
*   **Reducción de carga cognitiva:** "Ah, mira, ya tiene mis datos, ¡qué bien! Solo me pide la talla de playera. Eso es rápido", narró Laura. 
*   **El momento de la verdad:** En el "Paso 3 de 3: Pago Seguro", Laura se detuvo. Analizó los iconos de seguridad y los logotipos de las tarjetas que incluimos específicamente para mitigar la ansiedad. Su tiempo en tarea fue de apenas 1 minuto y 30 segundos, un éxito rotundo comparado con los minutos de confusión que reportaba en la plataforma vieja.

> **Insight de Diseño:** La precarga de datos no es solo una función de conveniencia; para el usuario frustrado, es una señal de que el sistema "lo conoce" y "lo cuida", reduciendo la fricción en el punto de mayor estrés: la entrega de datos financieros.

#### Ana P. y la batalla contra el "congelamiento"

A las 2:00 PM del mismo día, recibí a **Ana P.**, cuyo historial era aún más crítico: la aplicación se le había congelado tres veces seguidas en el checkout meses atrás. Mi objetivo con ella era validar la **estabilidad percibida**. Aunque trabajábamos sobre un prototipo interactivo de alta fidelidad, la fluidez de las transiciones entre los tres pasos del checkout era vital.

Ana navegó el proceso con una cautela casi quirúrgica. Al llegar a la pantalla de pago, verbalizó algo que validó meses de trabajo en arquitectura de información: "Esta pantalla se ve diferente, más profesional. Tiene el candadito. Me da un poco más de confianza". El hecho de que el flujo fuera lineal y segmentado en tres etapas claras evitó que Ana sintiera que el sistema estaba "haciendo demasiado al mismo tiempo", una percepción común que genera miedo al congelamiento en dispositivos de gama media. Completó la tarea con una calificación de facilidad de 5/5, comentando que ya no sentiría miedo de pagar si la app real se comportaba así.

#### La muerte de los 'puntitos' y el triunfo de la lista clara

Uno de los conflictos más persistentes que diagnosticamos en la Fase 1 fue el confuso calendario de "puntitos" de la aplicación original. Para los Atletas Ocasionales, ese calendario era un jeroglífico. Durante las pruebas, validé la transición hacia un modelo de **Búsqueda por Lenguaje Natural** combinado con tarjetas de evento ricas en datos.

Observé a los participantes interactuar con el nuevo buscador. Laura escribió "carreras ciudad de mexico proximo mes" y el sistema respondió con una lista limpia, no con un calendario saturado. 
*   **David C.**, un entusiasta del MTB (Ciclismo de Montaña), puso a prueba la granularidad de nuestros filtros. Aunque logró encontrar eventos en Valle de Bravo filtrando por disciplina y distancia (40-60 km), detecté un hallazgo crítico: David buscaba una sub-disciplina específica (Cross-Country/XC) que el MVP aún no desglosaba en los filtros de primer nivel.
*   **Resultado:** David calificó la facilidad con un 3/5 en esta tarea específica. Fue un "éxito parcial" que me recordó que, para los nichos deportivos, la información técnica es el único lenguaje que genera autoridad. Sin embargo, su reacción al ver la sección de "Información Técnica" con la promesa de descarga de **GPX** y detalles de altimetría fue de euforia: "¡Esto es mucho mejor! Antes no encontraba nada de esto".

#### El cierre emocional: El check verde y la paz mental

Si algo aprendí ejecutando estas 15 sesiones, es que el diseño de producto es, en gran medida, gestión de la ansiedad. La pantalla de confirmación de inscripción no podía ser un simple mensaje de "Gracias". Tenía que ser un cierre definitivo.

Diseñé la pantalla final con tres elementos innegociables que validé con este grupo:
1.  **La palomita verde de gran formato:** Actúa como una señal visual universal de "todo está bien".
2.  **El código QR inmediato:** Proporciona una sensación de posesión física del registro.
3.  **El mensaje de refuerzo:** "Recibirás un correo con los detalles".

Cuando Laura vio esta pantalla, su reacción fue de alivio puro: "Esto me deja tranquila de que sí se hizo". Para Ana P., fue el fin de la incertidumbre de tener que revisar su estado de cuenta bancario para saber si el pago había pasado. 

#### Métricas de una redención técnica

Al cerrar este bloque de sesiones con los Atletas Ocasionales, procedí a registrar las métricas de usabilidad objetivas. Los resultados fueron contundentes y superaron nuestras proyecciones iniciales para un segmento tan escéptico:

*   **Tasas de Éxito:** 100% en los flujos de inscripción y búsqueda general.
*   **System Usability Scale (SUS) Estimada:** 
    *   **Laura:** 87.5/100.
    *   **Ana P.:** 92.5/100 (un salto masivo considerando su desconfianza inicial).
    *   **David C.:** 82.5/100 (penalizado ligeramente por la falta de filtros de nicho).
*   **Percepción de Seguridad:** Todos los participantes mencionaron espontáneamente que la nueva interfaz les generaba más confianza para realizar transacciones financieras.

Haber recuperado a estos usuarios no fue una cuestión de estética, sino de **previsibilidad**. Al eliminar los "puntitos", simplificar el checkout a tres pasos y blindar la confirmación con elementos visuales de alta confianza, logramos que el MVP B2C dejara de ser una fuente de estrés para convertirse en una herramienta de facilitación. Habíamos sanado la herida técnica, pero el siguiente desafío era aún más sutil: ¿qué pasaría con aquellos que no son expertos digitales o que simplemente están intentando su primera carrera?

**Próximo paso:**

Tras haber reconstruido el puente con los usuarios que ya conocían la marca —y sus fallos—, me preparé para abrir la puerta a un territorio desconocido. Las siguientes sesiones me pondrían frente a frente con los Atletas Principiantes y usuarios de mayor edad, como Verónica M., para quienes el reto no era la desconfianza técnica, sino la barrera de la legibilidad y la jerarquía visual. Estaba a punto de descubrir si nuestro diseño era realmente inclusivo o si habíamos construido una herramienta que solo los iniciados podían navegar sin pedir ayuda._

### Parte 4: INCLUSIÓN Y SIMPLICIDAD: EL TEST DE LA PRIMERA VEZ

#### El diseño como puente para el que teme al error

Haber recuperado la confianza de los Atletas Plus fue una victoria táctica, pero me quedaba el reto que realmente define la escala de un producto: los principiantes. Como diseñador, sé que no basta con que una plataforma no falle; para usuarios como Javier M. o Roberto N., el éxito no se mide en milisegundos de carga, sino en la ausencia de ansiedad. Si el diseño les recuerda constantemente que están usando una tecnología compleja, he fracasado. Por eso, al iniciar las sesiones con el **Perfil 3 (Atletas Principiantes o con Experiencia Digital Limitada)**, mi enfoque cambió drásticamente. Ya no buscaba optimizar flujos de alto rendimiento, sino validar si habíamos construido un puente o una barrera para quienes representan la base de crecimiento de AsDeporte.

Preparé el entorno de prueba con una meticulosidad casi obsesiva, siguiendo el protocolo de ejecución que definí previamente. Configuré dispositivos Android, iOS y una laptop para el sitio web responsive, asegurándome de que el software de grabación (Zoom y Lookback) estuviera activo pero fuera imperceptible. Mi objetivo era aplicar el protocolo de **"Pensar en Voz Alta" (Think-Aloud)** de manera rigurosa. Necesitaba capturar no solo el clic, sino el suspiro de alivio o el ceño fruncido antes de tomar una decisión. Sabía que para Javier, un comerciante de 45 años que ya había desinstalado la app anterior por "complicada", esta era la última oportunidad de la marca para retenerlo.

#### La transformación de la ansiedad en seguridad

Durante la sesión con Gabriela T., una emprendedora de 35 años que planeaba su primera carrera, observé un momento de inflexión que justificó semanas de trabajo en contenido. Al llegar al detalle del evento, Gabriela se detuvo en un término que suele ser transparente para los expertos: el "chip". Noté su vacilación. Sin embargo, al interactuar con la sección **"¿Primera vez en una carrera? ¡Lee esto!"**, su lenguaje corporal cambió. 

> "¡Esto está súper bien! Justo lo que necesito para no sentirme tan perdida", comentó mientras leía la explicación sobre el chip de cronometraje y la entrega de kits.

Esta no fue solo una validación de usabilidad; fue la confirmación de una estrategia de negocio. Como responsable del producto, entendí que esta **guía para principiantes** no era un accesorio estético, sino una herramienta de blindaje contra el abandono. Al explicar la terminología técnica en el momento preciso del flujo, logramos reducir la *Cognitive Load* (carga cognitiva) de Gabriela, transformando su miedo al desconocimiento en una intención de compra real. Ella no estaba comprando un boleto; estaba comprando la seguridad de que sabía qué hacer el día del evento.

#### Cuando la legibilidad se convierte en un imperativo ético

La prueba con Roberto N., un jubilado de 68 años, fue la prueba de fuego para nuestras decisiones de **Diseño Visual y Accesibilidad**. Roberto suele navegar con ayuda de su hijo porque las "letras chiquitas" y las interfaces saturadas lo abruman. Al entregarle el prototipo en Android, observé su reacción inmediata al buscador y a las tarjetas de evento.

*   **Legibilidad Directa:** Sin necesidad de ponerse sus lentes de cerca, Roberto exclamó: "Estas letras sí las veo mejor". El aumento en el tamaño de fuente y el contraste deliberado que aplicamos en las tarjetas no fue un capricho de estilo, sino un requerimiento funcional para la inclusión.
*   **Affordance de los Filtros:** Roberto utilizó los filtros de "Caminata Recreativa" con una fluidez que no habíamos visto en la plataforma actual. Los botones de gran tamaño y el espaciado generoso permitieron que su interacción fuera precisa, alcanzando un éxito completo en la tarea en solo 1 minuto y 15 segundos.

Ver a un usuario de casi 70 años completar una inscripción de 3 pasos sin pedir ayuda externa fue, probablemente, el indicador de éxito más potente de toda la fase de validación. Validamos que el diseño inclusivo no beneficia solo a un nicho, sino que simplifica la experiencia para todos.

#### El factor confianza: Oxxo Pay vs. la fricción del CURP

Uno de los hallazgos más reveladores surgió al testear los métodos de pago. Javier M. fue muy claro: "Me da un poco de nervio meter mi tarjeta". Aquí es donde la maniobra estratégica de integrar **Oxxo Pay** mostró su valor real. Al ver la opción de generar una referencia para pagar en una tienda física, el nivel de confianza de Javier subió instantáneamente, otorgando una facilidad percibida de 5/5 al proceso. Para este perfil, la seguridad no es un certificado SSL; es la posibilidad de pagar con efectivo en la esquina de su casa.

Sin embargo, no todo fue fluido. Identifiqué una fricción crítica con Gabriela T. cuando el sistema solicitó su CURP. 

> "Lo del CURP no me gustó... ¿es muy necesario?", cuestionó con una desconfianza evidente. 

Este momento me obligó a registrar una nota forense: aunque el dato sea necesario por regulaciones o seguros, la falta de transparencia sobre *por qué* lo pedimos genera una barrera de privacidad inmediata. Es un trade-off que debemos resolver: o lo hacemos opcional, o explicamos su beneficio (como el seguro del atleta) de forma mucho más prominente para evitar el rebote en el último paso del checkout.

#### Eficiencia en el historial y cierre de campo

Finalmente, validamos la gestión del historial de resultados, un punto de dolor histórico en AsDeporte. Roberto N. y Javier M. interactuaron con el nuevo buscador interno de "Mi Historial". En la plataforma anterior, buscar un tiempo entre años de eventos era una "lista sin fin". En el prototipo, ambos localizaron sus participaciones pasadas en menos de 45 segundos. 

Las métricas finales para este perfil fueron contundentes y superaron mis expectativas iniciales para un MVP:
*   **System Usability Scale (SUS) Estimada:** Entre 82.5 y 90 puntos.
*   **Tasa de Éxito:** 100% en tareas de búsqueda y 90% en inscripción (afectada solo por la duda del CURP).
*   **Facilidad Percibida:** Un promedio de 4.5/5 en la navegación general.

Al cerrar la última sesión con Andrés V., quien valoró que por fin entendía "qué incluía su dinero" (playera, medalla, concierto), sentí la satisfacción del deber cumplido. Habíamos demostrado que la plataforma podía ser sofisticada para el atleta de élite y, al mismo tiempo, acogedora para el que apenas está dando su primer paso. El campo estaba terminado; ahora tocaba la parte más difícil: destilar estas horas de video y notas en decisiones que ingeniería pudiera ejecutar.

**Próximo paso:**

Tras haber recolectado una montaña de evidencia cualitativa y métricas que validan nuestras hipótesis de diseño, me enfrento al desafío de la síntesis. Las 15 sesiones han dejado patrones claros, pero también contradicciones que requieren un criterio senior para ser resueltas antes de la entrega final. Me preparo para el cierre de campo, donde la prioridad será transformar estos hallazgos forenses en una hoja de ruta de ajustes críticos que blinden el lanzamiento del MVP.

### Parte 5: CIERRE DE CAMPO Y CURADURÍA DE EVIDENCIA

Cerré la tapa de la laptop tras la sesión número 15 con un suspiro de alivio, pero también con una punzada de ansiedad contenida. Tenía en mis manos —o mejor dicho, en mis discos duros y nubes— más de 15 horas de video en alta resolución, gigabytes de grabaciones de audio con el flujo de conciencia de tres perfiles de atletas distintos y una montaña de notas manuscritas que capturaban cada micro-gesto de frustración. En ese momento, la adrenalina de la moderación empezó a ceder el paso a una responsabilidad mucho más fría y técnica: la curaduría forense de la evidencia. Como diseñador, sé que una prueba de usabilidad no termina cuando el usuario sale de la sala o se desconecta de Zoom; en realidad, es ahí donde el riesgo de perder la "verdad" del hallazgo es más alto.

La validez de todo el trabajo de las semanas anteriores dependía enteramente de la integridad de este registro. Si no era capaz de transformar ese volumen masivo de datos crudos en un repositorio estructurado y blindado, los hallazgos se diluirían en opiniones subjetivas durante las reuniones con los stakeholders. Mi prioridad absoluta en este cierre de campo fue asegurar que ni un solo matiz del comportamiento de los atletas —desde el titubeo antes de hacer clic en "Inscribirme" hasta el alivio al encontrar su historial de carreras— se perdiera en la transición hacia la fase de análisis. Entré en lo que llamo "modo curador", siguiendo con disciplina militar los pasos de documentación que habíamos trazado para garantizar que la evidencia fuera incuestionable.

#### La arquitectura del repositorio: Nomenclatura como blindaje estratégico

Mi primer movimiento táctico fue realizar una auditoría exhaustiva de los activos multimedia. No permití que terminara el día sin haber verificado la integridad de las 15 grabaciones. Para las sesiones remotas, utilicé una combinación de Zoom y Lookback, lo que me obligó a cruzar archivos para asegurar que tanto el audio del protocolo *Think-Aloud* como la captura de pantalla de las interacciones con el prototipo fueran nítidos. En un par de sesiones con los "Atletas Principiantes", el audio ambiental casi opaca sus comentarios; tuve que procesar esos archivos de inmediato para asegurar que cada "creo que aquí es donde debo picar" fuera audible.

Implementé una nomenclatura industrial estricta para el etiquetado de cada archivo: `AsDeporte_MVP_P[ID]_[Perfil]_[Fecha]_[Tarea]`. Esta no es una manía de orden, es una decisión de eficiencia operativa. Si un desarrollador de ingeniería cuestiona más adelante por qué decidimos mover un campo de validación, necesito ser capaz de localizar el clip exacto de 15 segundos donde tres usuarios distintos cometieron el mismo error de sintaxis en menos de 10 segundos.

> **Decisión de diseño:** Etiquetar por "Tarea" y no solo por "Sesión" permite realizar ediciones transversales. Si quiero mostrarle al equipo de producto el colapso del flujo de pago, puedo extraer los clips de la Tarea 4 de los 15 participantes en cuestión de minutos, creando una narrativa de fricción que es imposible de ignorar.

#### Del caos de la observación al dato estructurado

Mientras los archivos de video se sincronizaban, me dediqué a la consolidación de las hojas de notas y las herramientas de observación que utilicé durante el campo. Siguiendo rigurosamente el proceso definido en el archivo **`01_ejecucion_de_pruebas_de_usabilidad.pdf`**, realicé el volcado de mis notas digitales a un formato maestro. Este paso es crítico porque es donde el "por qué" detrás de las acciones empieza a cristalizar.

No me limité a transcribir lo que el usuario hizo; documenté las señales no verbales que el mothership de la actividad identifica como focos críticos:
*   **Señales de éxito:** El momento exacto en que el Atleta Plus encontraba su tiempo de chip sin necesidad de usar el buscador.
*   **Señales de frustración:** El micro-gesto de apretar la mandíbula cuando el teclado numérico tapaba el botón de "Continuar" en el flujo de registro.
*   **Señales de confusión:** Esas pausas de más de 3 segundos donde el cursor orbitaba un elemento sin decidirse a hacer clic.

Esta consolidación es el puente entre mi percepción como moderador y el dato duro que el proyecto exige. Al organizar estas notas por participante y tarea, eliminé el ruido de las anécdotas aisladas para empezar a ver patrones de comportamiento sistémicos.

#### Verificación forense: El rigor de las métricas cuantitativas

Una vez que la parte cualitativa estuvo a salvo, procedí a la validación de las métricas cuantitativas. Este es un proceso de "doble ciego" personal: volví a revisar las grabaciones para cronometrar con precisión la **latencia de tarea** (el tiempo exacto desde que entregué la instrucción hasta que el usuario completó la acción) y para validar el conteo de errores. 

No es suficiente anotar "tuvo problemas"; el rigor senior exige clasificar si fue un error crítico (que impidió terminar la tarea) o un error cosmético. Crucé estos datos con las tasas de éxito (sí/no/parcial) y, lo más importante, con los resultados de la escala **SUS (System Usability Scale)** y las métricas de facilidad post-tarea que aplicamos al cierre de cada sesión. Mi objetivo era blindar estos números contra cualquier sesgo de confirmación. Si el SUS promedio de los Atletas Ocasionales resultaba ser un 75, ese número debía estar respaldado por la evidencia de las 5 sesiones de ese perfil, sin excepciones. La integridad de estas métricas es lo que permitirá que el análisis posterior sea estadísticamente significativo para el negocio de AsDeporte.

#### El cierre ético y la higiene de datos

El último paso, a menudo descuidado pero vital para la reputación del proyecto, fue el cierre administrativo y ético con los participantes. Me aseguré de que los 15 atletas recibieran sus incentivos y que tuviéramos una confirmación de recepción de cada uno. Esto no es solo cortesía; es el cierre del ciclo de reclutamiento que iniciamos en la Fase 3 y garantiza que esta base de usuarios —que ahora conoce el producto mejor que nadie— esté dispuesta a colaborar en futuras iteraciones.

Finalmente, archivé todos los **consentimientos informados** vinculándolos digitalmente a cada sesión. En un ecosistema digital moderno, la gestión de la privacidad y el cumplimiento normativo son tan importantes como la jerarquía visual. Al terminar, me aseguré de tener un respaldo triple de toda la actividad: local, nube de diseño y servidor de respaldo del proyecto. 

La sensación al terminar este proceso de curaduría no fue solo de cansancio, sino de una profunda seguridad profesional. La "higiene de datos" es lo que separa un ejercicio de diseño amateur de una consultoría de producto de alto nivel. Lo que tengo ahora en mi repositorio no son solo videos; es la verdad cruda de cómo el mercado interactúa con la visión de AsDeporte. La montaña de evidencia está bajo control, clasificada y lista para ser diseccionada.

**Reflexión final:**
Haber ejecutado y documentado estas 15 sesiones con tal nivel de rigor forense transformó mi perspectiva sobre el MVP. Al cerrar esta actividad, me di cuenta de que el valor real que entrego no está solo en haber moderado las pruebas, sino en haber custodiado la honestidad de los usuarios para que el equipo de ingeniería no trabaje sobre suposiciones. Esta fase de campo me enseñó que la verdadera maestría del diseño de producto se demuestra en la capacidad de sostener la tensión entre lo que nosotros creemos que el usuario necesita y lo que el usuario realmente hace cuando nadie lo está ayudando.