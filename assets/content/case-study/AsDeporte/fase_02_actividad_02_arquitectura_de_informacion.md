# Fase 2: Ideación y Diseño

## Actividad 2: actividad_02_arquitectura_de_informacion

### Parte 1: AUDITORÍA ESTRATÉGICA: DE LA INVESTIGACIÓN A LA ESTRUCTURA

#### El mapa no es el territorio: el peso de la estructura

La fase de investigación me dejó con una pared cubierta de post-its, transcripciones de entrevistas y una certeza incómoda: sabíamos perfectamente qué le dolía al atleta, pero no teníamos idea de dónde iba a encontrar el remedio. Teníamos abstracciones, deseos y quejas, pero nada de eso se traduce automáticamente en una interfaz. Como diseñador, entiendo que la arquitectura de información (AI) no es simplemente organizar botones en una fila; es diseñar el mapa mental del usuario. Si el mapa es confuso, el usuario se pierde, y un usuario perdido en un proceso de inscripción es una conversión muerta.

Mi primer movimiento tras cerrar la ideación fue frenar la inercia de pasar directamente al diseño visual. La tentación de "pintar pantallas" era alta, pero mi razonamiento estratégico me dictaba que necesitábamos un puente sólido. Debíamos traducir esos modelos mentales identificados en la investigación en una jerarquía tangible. El riesgo de saltarse este paso era replicar el laberinto burocrático que los atletas ya sufrían en la plataforma actual. Me propuse, por tanto, ejecutar una auditoría estratégica de la información, una disección de cómo el cerebro del deportista categoriza su propia experiencia competitiva antes de que una sola línea de código fuera escrita.

#### Análisis forense de los modelos mentales del atleta

Para construir una estructura que se sintiera natural, primero tuve que entender la lógica interna de quienes la usarían. No todos los usuarios de AsDeporte son iguales, pero todos comparten una estructura cognitiva similar cuando se trata de su pasión. Me sumergí en los hallazgos de la Fase 1 para desentrañar cómo agrupan la información.

Descubrí una distinción crítica que la plataforma actual ignoraba: la separación emocional y funcional entre el "antes" y el "después".
*   **Eventos Próximos vs. Eventos Pasados:** Para el atleta, un evento futuro es una meta, un compromiso y una logística de viaje; un evento pasado es un trofeo, una estadística y un recuerdo. Mezclarlos en una sola lista sin una jerarquía clara, como ocurría anteriormente, generaba una carga cognitiva innecesaria.
*   **Perfil vs. Historial:** Analicé si los usuarios relacionaban su "Perfil" (datos estáticos) con sus "Inscripciones" (datos dinámicos). La respuesta fue un rotundo no. El perfil se percibe como la identidad, mientras que las inscripciones son la actividad. Esta separación me obligó a cuestionar la agrupación tradicional de "todo dentro de Mi Cuenta".
*   **Comunidad vs. Tribu:** Este fue un punto de fricción interesante. Mientras que el negocio empujaba el concepto de "Tribu", los usuarios lo veían como algo externo a la "Comunidad" general. Mi tarea fue determinar si debían coexistir o si una debía absorber a la otra para simplificar la navegación global.

> **Insight Senior:** Entender la categorización natural del usuario evita que la interfaz se convierta en un reflejo de la estructura organizacional de la empresa. Al atleta no le importa qué departamento de AsDeporte gestiona los resultados; solo quiere saber qué tan rápido corrió el domingo pasado.

#### Diagnóstico de las fricciones históricas en la navegación

No partíamos de cero, partíamos de un sistema que estaba fallando. Utilicé los reportes de Soporte Técnico y los hallazgos de la investigación B2C como un mapa de minas terrestres que debía desactivar. La confusión en el calendario de eventos era el punto de dolor más recurrente. Los usuarios no lograban distinguir entre eventos abiertos para inscripción, eventos agotados y eventos que simplemente estaban ahí como referencia informativa.

Identifiqué dos áreas de colapso total en la usabilidad:
1.  **La ambigüedad entre "Mis Eventos" e "Historial":** Los usuarios entraban a "Mis Eventos" esperando ver su tiempo de la carrera de hace dos años, solo para encontrar su inscripción para la carrera del próximo mes. Esta falta de distinción cronológica obligaba al usuario a dar vueltas en círculos, aumentando la tasa de abandono en secciones que deberían ser de consulta rápida.
2.  **El laberinto del Calendario:** La estructura actual forzaba al usuario a conocer de antemano la fecha o el nombre exacto del evento. No permitía una exploración heurística basada en la disponibilidad del atleta ("quiero correr algo en agosto") o en la ubicación.

Esta auditoría no fue un ejercicio académico; fue el imperativo para la nueva arquitectura. Cada vez que encontraba un "no encuentro mi comprobante de pago" en los logs de soporte, lo traducía en una necesidad de acceso directo en la nueva jerarquía. La arquitectura debía ser el antídoto al desorden acumulado por años de parches técnicos.

#### El rescate de los beneficios Plus: de la invisibilidad a la retención

Uno de los mayores conflictos que detecté entre los objetivos de negocio y la realidad del usuario fue la ubicación de AsDeporte Plus. El brief era claro: Plus es un motor estratégico de retención y lealtad. Sin embargo, en la arquitectura existente, era prácticamente un tesoro escondido. Los beneficios estaban enterrados bajo tres niveles de navegación, lo que significaba que un usuario pagando una suscripción a menudo olvidaba que tenía descuentos o accesos preferenciales.

Mi decisión fue elevar la jerarquía de Plus. No podía ser un sub-menú de tercer nivel dentro del perfil. Si queríamos que el usuario sintiera el valor de su inversión, los beneficios debían estar presentes de forma contextual o mediante un acceso directo persistente. Evalué cómo esta decisión afectaría el equilibrio visual y la carga de la barra de navegación, pero el *trade-off* era necesario: sacrificar un poco de espacio de navegación global para asegurar que el motor de ingresos de la plataforma fuera visible y accesible.

#### Auditoría de nomenclatura: el lenguaje del atleta frente a la jerga interna

Las palabras que usamos en la navegación son los carteles de señalización de nuestra ciudad digital. Si el cartel dice "Wallet" pero el usuario está buscando "Mis Tarjetas", el cartel ha fallado. Realicé un análisis técnico exhaustivo de la terminología utilizada por AsDeporte frente al lenguaje natural capturado en las entrevistas con atletas.

*   **El caso de "Wallet":** Aunque es un término estándar en la industria tech, para muchos atletas de la vieja guardia o aquellos menos familiarizados con ecosistemas digitales complejos, generaba una duda innecesaria. ¿Es dinero electrónico? ¿Son mis tarjetas de crédito? Decidí que la claridad debía primar sobre la tendencia.
*   **El conflicto de "Tribu":** Es un término de marca potente, pero funcionalmente ambiguo. Si un usuario quiere buscar a sus amigos, ¿busca en "Tribu" o en "Buscador"? Mi auditoría sugirió que debíamos anclar estos conceptos de marca a verbos de acción claros o categorías universales para no alienar a los nuevos usuarios.
*   **Eventos vs. Competencias:** Descubrí que, aunque internamente se habla de "competencias", el atleta busca "eventos" o "carreras". Prioricé el término "Eventos" como la categoría raíz, ya que abarca tanto la experiencia competitiva como la social.

Esta limpieza de la taxonomía fue vital para reducir la carga cognitiva. Cada término confuso eliminado es un gramo menos de esfuerzo mental para el usuario.

#### Benchmarking de patrones de organización industrial

No intenté reinventar la rueda donde ya existían autopistas bien construidas. Realicé un análisis competitivo digital enfocado en cómo los líderes del sector (Strava, Nike Run Club, Ironman) organizan sus flujos de descubrimiento y registro. No buscaba copiar sus interfaces, sino entender los patrones de navegación que nuestros usuarios ya tenían integrados en su memoria muscular.

Observé patrones recurrentes:
*   **Navegación Persistente:** Los líderes mantienen el acceso a "Eventos" y "Perfil" siempre a mano.
*   **Jerarquía de Búsqueda:** El buscador no es solo una lupa; es una herramienta de filtrado multidimensional (deporte, fecha, ubicación) que vive en el nivel superior de la arquitectura.
*   **Contextualidad:** La información cambia según el estado del usuario (si tiene una carrera próxima, esa información domina la jerarquía temporalmente).

Extraje estos patrones para asegurar que la propuesta de AsDeporte fuera competitiva. Si un atleta usa Strava por la mañana, debería sentirse "en casa" al entrar a AsDeporte por la tarde. La familiaridad es una de las heurísticas de usabilidad más potentes, y mi objetivo fue alinear nuestra arquitectura con esos estándares globales.

#### Cimientos para flujos críticos: búsqueda e inscripción

Finalmente, definí cómo la arquitectura de información actuaría como el soporte invisible para las dos acciones que mantienen vivo el negocio: buscar una carrera e inscribirse en ella. La arquitectura actual presentaba obstáculos en forma de pasos innecesarios y redundancias que detectamos en la fase de investigación.

Decidí que la nueva estructura debía permitir un "camino corto" hacia el checkout. Esto implicó planificar una jerarquía donde el acceso al buscador fuera inmediato desde cualquier punto y donde la transición desde la página de detalles del evento hacia el formulario de inscripción fuera fluida, sin saltos lógicos que hicieran dudar al usuario. La AI se diseñó para eliminar el ruido; si el objetivo es inscribirse, la estructura no debe ofrecer distracciones laterales que no aporten valor al proceso.

> **Reflexión sobre la carga cognitiva:** Una buena arquitectura de información es como el aire: solo notas que falta cuando te asfixias. Mi responsabilidad en esta etapa fue asegurar que el atleta pudiera respirar tranquilo mientras navegaba, sabiendo exactamente dónde está y cómo llegar a donde quiere ir. No se trata de poner las cosas en carpetas; se trata de liberar al usuario de la carga de tener que pensar en la herramienta para que pueda concentrarse en su deporte.

**Próximo paso:**
Tras haber despejado el panorama estratégico y definido los modelos mentales que debían regir la plataforma, me encontré con un nuevo desafío: la lista de deseos era infinita. Teníamos cientos de funcionalidades potenciales, desde la integración con wearables hasta foros de comunidad y sistemas de pago complejos. El riesgo de intentar construirlo todo y terminar con un producto mediocre era real, así que me preparé para ejecutar un inventario forense que definiría, con precisión quirúrgica, qué entraría y qué quedaría fuera del MVP B2C.

### Parte 2: INVENTARIO FORENSE: DEFINICIÓN DEL ALCANCE MVP B2C

#### El inventario forense: Blindando el alcance contra el "Scope Creep"

Tras haber despejado el panorama estratégico y definido los modelos mentales que debían regir la plataforma, me encontré con el desafío más pragmático del proceso: la lista de deseos de los stakeholders era infinita. Teníamos cientos de funcionalidades potenciales sobre la mesa, desde la integración profunda con wearables hasta foros de comunidad y sistemas de pago complejos. El riesgo de intentar construirlo todo y terminar con un producto mediocre era real. Como responsable del diseño, sabía que la arquitectura de información no puede sostenerse sobre una base de arena; necesitaba un inventario sólido, un catálogo atómico de lo que realmente entraría en el MVP B2C.

Mi razonamiento fue estrictamente quirúrgico. Para evitar el **scope creep** —esa expansión incontrolada del alcance que suele hundir los proyectos de esta envergadura— decidí ejecutar un **inventario forense de contenido y funcionalidad**. No se trataba solo de listar botones, sino de identificar cada activo digital que el atleta necesita para completar su tarea principal: inscribirse y competir. Este inventario actuó como el cimiento técnico sobre el cual construiría después el Sitemap; si una funcionalidad no sobrevivía a este filtro, no tenía lugar en la jerarquía de navegación.

#### El ecosistema de eventos: Diseñando para la precisión del atleta

Inicié la estructuración del núcleo de la plataforma: el descubrimiento de eventos. La investigación previa había sido tajante al señalar que los usuarios se sentían perdidos en el mar de competencias de AsDeporte. Para resolver esto, tracé un sistema de visualización triple que permitiera al atleta elegir su propia aventura de búsqueda. 

*   **Vista de lista por defecto:** Prioricé la eficiencia, mostrando la información crítica en tarjetas densas pero legibles que incluían el nombre del evento, fecha, ubicación exacta y las distancias o deportes disponibles.
*   **Vista de calendario mejorado:** Diseñé esta alternativa para el atleta planificador, aquel que organiza su temporada con meses de antelación y necesita ver los huecos en su cronograma deportivo.
*   **Vista de mapa:** Aunque la consideré opcional para el primer despliegue del MVP, la incluí en el inventario para dar contexto geográfico, permitiendo a los usuarios encontrar carreras cerca de su ubicación actual.

Para el sistema de filtrado, rechacé la idea de un buscador genérico. Implementé una lógica de **filtrado avanzado y granular** que permitiera segmentar por disciplina (running, ciclismo, triatlón), sub-disciplina, rangos de fecha y, lo más importante, el tipo de evento. Entendí que un atleta que busca una "carrera con causa" tiene un modelo mental distinto al que busca un "evento para principiantes" o una "caminata familiar". Esta granularidad fue mi respuesta directa a la confusión de navegación que detectamos en la fase de auditoría; si el usuario no puede filtrar con precisión, la plataforma se convierte en un obstáculo, no en una herramienta.

#### La anatomía del detalle: El centro de recursos técnicos

Cuando llegué a la definición de la "Página de Detalle de Evento", decidí alejarme de la simple ficha informativa. Un atleta senior no solo quiere saber el precio; necesita datos técnicos para decidir si ese evento es para él. Articulé la inclusión de activos críticos que suelen estar dispersos en PDFs externos o correos electrónicos:

1.  **Datos de Altimetría y archivos GPX:** Integré estos elementos para que el corredor o ciclista pudiera descargar la ruta y cargarla en su reloj o computadora de entrenamiento.
2.  **Mapas especializados:** Diferencié entre mapas de obstáculos para eventos **OCR**, mapas de transición para triatlones y mapas de ruta detallados.
3.  **Logística de entrega de kits:** Centralicé las fechas, horarios y ubicaciones de entrega de paquetes. 

Esta decisión de diseño tuvo un trasfondo operativo: reducir la carga cognitiva del atleta y, simultáneamente, desplomar el volumen de tickets en soporte técnico. Si la información logística es omnipresente y clara en la página del evento, el usuario no necesita llamar para preguntar dónde recoger su número de competidor.

#### Ingeniería del flujo de inscripción: El "Multi-Step" de tres pasos

El proceso de inscripción era el momento de mayor fricción histórica. Mi maniobra aquí fue drástica: reduje toda la complejidad a un **flujo optimizado de 3 pasos**, diseñado para ser completado en menos de dos minutos si el usuario ya tenía su perfil configurado.

*   **Paso 1: Selección y Precarga:** Diseñé este paso para que el sistema hiciera el trabajo pesado. Al seleccionar la categoría, el formulario debía precargar automáticamente los datos del perfil del atleta (edad, género, club), dejando solo la selección de talla de playera como campo manual.
*   **Paso 2: Revisión y Transparencia:** Aquí la prioridad fue la claridad financiera. Visualicé de forma explícita los descuentos aplicados por la membresía **Asdeporte Plus** y el desglose del costo total. No quería sorpresas en el último clic.
*   **Paso 3: Pago Seguro Multicanal:** Blindé la experiencia integrando no solo tarjetas de crédito y débito, sino también la opción de pago en Oxxo, reconociendo la realidad del mercado mexicano. 

Añadí un requerimiento no negociable: la **confirmación inmediata y visualización instantánea** en la sección de "Mis Eventos Activos". En el momento en que el pago se procesa, el usuario debe ver su comprobante y su estatus de inscrito. Esta retroalimentación inmediata es vital para cerrar el ciclo de confianza y eliminar la incertidumbre que genera una transacción digital de alto valor emocional como es una competencia deportiva.

#### El área privada: Del perfil estático al Hub de beneficios

Al estructurar el área privada del usuario, mi primer objetivo fue corregir la ambigüedad entre "Mis Eventos Activos" y el "Historial de Resultados". En la plataforma anterior, estas secciones se solapaban, causando que los atletas no supieran dónde encontrar su comprobante de inscripción para mañana frente a su tiempo de carrera de hace tres años.

Diseñé un **Hub de Beneficios Asdeporte Plus** que funcionara como el corazón de la retención. Aquí, el usuario no solo ve su fecha de expiración, sino que gestiona su "Wallet" y accede a servicios tangibles como el seguro de competidor o las citas de InBody. Para elevar el valor del perfil, incluí la **integración básica con wearables** (Garmin y Strava) como un "Should Have". Mi visión era transformar el perfil de una simple base de datos en un compañero de entrenamiento que muestra un resumen de actividad reciente, vinculando el esfuerzo diario del atleta con su participación en los eventos de la marca.

#### La disciplina del "No": Poda estratégica para el MVP

Como diseñador senior, sé que mi valor no reside solo en lo que propongo, sino en lo que tengo el valor de rechazar. Para este MVP, ejercí una disciplina férrea y decidí dejar fuera (WON'T HAVE) varias funcionalidades que, aunque atractivas, habrían diluido el foco y retrasado el lanzamiento.

> **Reflexión sobre la exclusión:** Decidí dejar fuera la funcionalidad de "Tribu" (red social compleja), el marketplace de productos y la gamificación avanzada. Mi razonamiento fue simple: si el flujo de inscripción falla o si el atleta no puede encontrar sus resultados, ninguna medalla virtual o red social va a salvar la experiencia. Prioricé la utilidad crítica sobre el ornamento social. Esta poda estratégica es lo que nos permite garantizar que el núcleo transaccional sea impecable.

Este inventario de contenido y funcionalidad se convirtió en nuestra "única fuente de verdad". Con cada átomo de la plataforma ya catalogado y priorizado, el siguiente desafío era evidente: ¿cómo íbamos a organizar todo este volumen de información para que el usuario no se sintiera abrumado? Teníamos las piezas del rompecabezas; ahora necesitábamos el tablero lógico para unirlas.

**Próximo paso:**
Con el inventario cerrado, me enfrenté a la tarea de darle un orden lógico a este ecosistema. El siguiente paso fue someter esta estructura a la prueba de fuego del modelado mental de los atletas: ¿cómo agrupan ellos esta información en su cabeza? Me preparé para ejecutar una sesión de agrupación lógica que revelaría si nuestra jerarquía propuesta coincidía con la intuición de quienes realmente sudan en la pista.

### Parte 3: AGRUPACIÓN LÓGICA Y MODELADO MENTAL

#### El riesgo del vertedero de funciones

Tenía frente a mí un inventario de más de cincuenta elementos, entre funcionalidades críticas y piezas de contenido, que amenazaban con convertir la plataforma en un "vertedero de funciones". Tras cerrar el inventario forense, la tensión era evidente: si volcábamos esa lista plana directamente en un menú, condenaríamos al atleta a una carga cognitiva insoportable. Como diseñador, sé que la arquitectura de información no consiste en encontrar un lugar donde "quepan" las cosas, sino en construir un mapa que refleje el modelo mental del usuario. El reto no era organizar datos, sino organizar el sudor, la urgencia y la expectativa de alguien que está a días de su competencia más importante.

La investigación de la Fase 1 nos había dejado una advertencia clara: los usuarios se sentían perdidos entre el calendario, sus eventos inscritos y el historial de resultados. Mi razonamiento estratégico fue que debíamos pasar de la acumulación a la jerarquización. Necesitaba transformar ese listado inerte en un tablero lógico que separara el ruido de la señal, asegurando que un atleta bajo presión pudiera encontrar su comprobante de inscripción en menos de tres clics, sin tener que navegar por promociones o artículos de blog que no solicitó.

#### El ejercicio forense: Card Sorting y Affinity Mapping

Para despejar la incertidumbre, ejecuté una sesión intensiva de **Card Sorting** y **Affinity Mapping**. Utilicé un tablero en Miro donde cada funcionalidad y cada pieza de contenido del inventario se convirtió en una "tarjeta" virtual. Mi objetivo no era simplemente agrupar por similitud visual, sino realizar un análisis forense de proximidad semántica: ¿el usuario busca "Resultados" porque quiere ver su tiempo histórico o porque quiere validar su posición en la carrera de ayer?

Durante este proceso, identifiqué patrones críticos en cómo los atletas categorizan su realidad deportiva. No agrupan por "tipo de deporte" de forma aislada; lo hacen por "etapa del evento". Existe un modelo mental de "antes" (buscar, informarse, inscribirse), "durante" (consultar guía del atleta, mapa de ruta) y "después" (resultados, fotos, medallas). Mover estas tarjetas en el espacio digital me permitió visualizar dónde se rompían los flujos actuales. Descubrí, por ejemplo, que términos como "Wallet" o "Competencias" generaban una fricción innecesaria; el usuario simplemente quería "Mis Eventos" o "Carreras". Este ejercicio de agrupación lógica fue el filtro que purificó la estructura antes de trazar una sola línea de navegación.

#### La consolidación de las cinco áreas maestras

Tras varias iteraciones de agrupación, logré destilar el ecosistema de AsDeporte en cinco pilares fundamentales que cubren el 100% de las necesidades del MVP B2C. Esta decisión de diseño buscó la simplicidad cognitiva absoluta, reduciendo las opciones de primer nivel para no abrumar al atleta:

*   **Inicio (Home):** Articulé esta sección como el punto neurálgico de descubrimiento. No es solo una vitrina de banners, sino un acceso rápido a la búsqueda y a los eventos destacados que el negocio necesita impulsar.
*   **Eventos:** Definí esta área como el motor principal de la plataforma. Aquí reside la exploración, los filtros avanzados (disciplina, fecha, ubicación) y toda la información necesaria para que el usuario tome la decisión de inscribirse.
*   **Mi Perfil:** Lo diseñé como el centro de control personal. Es el espacio privado donde el atleta gestiona lo que ya posee: sus datos, sus inscripciones activas y sus beneficios.
*   **Resultados:** Decidí mantener esta sección como un acceso público independiente. Es la validación del logro, un espacio de consulta rápida tanto para el atleta como para su círculo cercano.
*   **Soporte y Ayuda:** La establecí como la red de seguridad institucional. Un lugar centralizado para FAQs y contacto, eliminando la dispersión de información legal y de ayuda que plagaba la versión anterior.

> **Criterio de Arquitectura:** Elegir estas cinco categorías no fue una decisión estética, sino una maniobra para blindar la usabilidad. Cada sección responde a una pregunta específica del usuario: "¿Qué hay de nuevo?" (Inicio), "¿En qué puedo participar?" (Eventos), "¿Qué tengo pendiente?" (Perfil), "¿Cómo me fue?" (Resultados) y "¿Quién me ayuda?" (Soporte).

#### Racionalización estratégica: Buscar vs. Gestionar

Una de las decisiones más críticas que tomé en esta etapa fue la separación tajante entre la acción de "buscar algo nuevo" y la de "gestionar lo propio". En la plataforma anterior, el usuario a menudo se perdía intentando encontrar su inscripción actual dentro del catálogo general de ventas. Para resolver esto, tracé una frontera clara: la sección de **Eventos** se enfoca exclusivamente en la adquisición y el descubrimiento, mientras que **Mi Perfil** se dedica a la retención y la gestión.

Esta distinción reduce drásticamente la carga cognitiva. Si un atleta entra a la app un viernes por la noche antes de una carrera, no quiere ver un catálogo de 200 eventos; quiere su código QR de registro. Al mover "Mis Eventos Activos" al perfil, despejé el camino transaccional. El usuario ya no tiene que "buscar" su carrera; simplemente accede a su espacio personal. Esta lógica de diseño prioriza la tarea urgente sobre la intención comercial, algo que considero vital para recuperar la confianza de una comunidad que se sentía ignorada por la tecnología.

#### La dualidad de los Resultados y el impulso del SEO

El manejo de la sección de **Resultados** fue un desafío de arquitectura híbrida. Por un lado, la investigación confirmó que los atletas necesitan encontrar sus tiempos históricos de forma rápida, lo que sugería integrarlos en el perfil. Por otro lado, los resultados son una fuente masiva de tráfico orgánico y validación social.

Mi estrategia fue diseñar una estructura dual: los resultados son **públicos** y accesibles mediante búsqueda por nombre o número para maximizar el SEO y permitir que amigos o familiares consulten el desempeño de un corredor. Sin embargo, para el usuario logueado, estos mismos datos se inyectan automáticamente en su "Historial" dentro de **Mi Perfil**. Esta maniobra resuelve la fricción de "¿dónde encontrar mi tiempo?" sin sacrificar la visibilidad pública de la plataforma. Es una solución que sirve tanto a los objetivos de negocio (tráfico) como a la comodidad del usuario (centralización de datos).

#### La poda necesaria: Asdeporte Plus y la exclusión de 'Tribu'

En este punto del proceso, ejercí mi criterio senior para realizar una "poda" estratégica de funcionalidades. La más significativa fue la decisión de eliminar la sección **'Tribu'** del mapa de navegación principal para este MVP. Aunque la idea de una red social deportiva es atractiva, los datos de soporte y la investigación indicaban que la utilidad actual era baja comparada con la fricción que generaba en la interfaz. Si no podíamos garantizar una experiencia de inscripción impecable, añadir una capa social compleja solo diluiría nuestros esfuerzos. Decidí que la comunidad debe nacer de la utilidad, no de una pestaña forzada.

De igual forma, rechacé la idea de tener una sección aislada para **Asdeporte Plus**. En su lugar, integré el "Hub de Beneficios" directamente dentro de **Mi Perfil**. Al tratar la membresía como un estado de la cuenta y no como un destino separado, logré dos cosas: simplificar la navegación global y crear un contexto de valor inmediato. El usuario ve sus beneficios justo al lado de sus inscripciones, reforzando la percepción de exclusividad sin interrumpir el flujo de uso principal.

> **Reflexión sobre la invisibilidad:** Una arquitectura de información exitosa es aquella que el usuario no nota. Si el atleta navega y encuentra lo que busca sin preguntarse "dónde estará eso", he ganado. El éxito aquí no se mide en la complejidad del diagrama, sino en la reducción futura de tickets de soporte y en la fluidez con la que transformamos un "quiero correr" en un "estoy inscrito".

**Próximo paso:**
Con la lógica de agrupación ya blindada y las áreas maestras definidas, me encontré ante un nuevo dilema: la estructura funcionaba en mi cabeza y en los mapas de afinidad, pero ¿cómo se traduciría eso a la realidad dispar de una pantalla de escritorio frente a la de un móvil? Sentí la urgencia de empezar a trazar la jerarquía visual, sabiendo que la web exige una profundidad de información que el móvil no siempre puede —o debe— soportar. Era momento de enfrentarme al sitemap web y decidir qué niveles de navegación sacrificar para mantener la claridad.

### Parte 4: ARQUITECTURA WEB: JERARQUÍA Y ACCESIBILIDAD

#### El paso del caos conceptual al plano de construcción

Tras cerrar la fase de modelado mental y tener frente a mí esos mapas de afinidad que agrupaban los deseos y frustraciones de los atletas, me enfrenté al momento de la verdad: materializar esas abstracciones en una jerarquía web funcional. Tenía una pared llena de "conceptos", pero los usuarios no navegan conceptos, navegan rutas. El reto era diseñar un Sitemap Web para el MVP B2C que soportara la carga de información masiva que permite un escritorio, pero sin caer en el error histórico de AsDeporte: abrumar al usuario con una profundidad de clics interminable.

Mi razonamiento estratégico fue quirúrgico. Sabía que para reducir la fricción en el descubrimiento de eventos, necesitaba pasar de una estructura "enciclopédica" a una "operativa". No buscaba un mapa de todo lo que la empresa hace, sino un mapa de lo que el atleta necesita lograr hoy. Esta urgencia de definición me llevó a determinar qué elementos debían ser persistentes —aquellos que el usuario necesita ver siempre para sentirse ubicado— y cuáles debían ser contextuales, apareciendo solo cuando la tarea lo requiriera. La meta era clara: si un usuario llegaba buscando una carrera de 10K en Monterrey, la arquitectura no debía obligarlo a pasar por tres niveles de menús institucionales antes de ver un botón de inscripción.

#### El diseño del Sitemap Web: Priorizando lo vital sobre lo accesorio

Al trazar el Sitemap del MVP B2C, mi primera maniobra fue aplicar una disciplina férrea sobre el inventario de contenido. Tomé la lista completa de funcionalidades y apliqué el filtro de los "Must Have" y "Should Have" que habíamos validado previamente. Esto me llevó a una decisión difícil pero necesaria: **excluí por completo secciones como "Tribu" y "Tienda" de la navegación principal**. Aunque son pilares del negocio a largo plazo, en este MVP actuaban como ruido que alimentaba la "confusión de navegación" que el equipo de Soporte nos había reportado como una de las quejas principales de los usuarios.

Diseñé la arquitectura con una lógica de "gran distribuidor". La Home no sería un repositorio de banners, sino el punto de partida hacia tres nodos maestros:
*   **Eventos:** El motor de búsqueda y descubrimiento.
*   **Resultados:** La validación del esfuerzo del atleta.
*   **Mi Perfil:** El centro de gestión personal.

Cada uno de estos nodos fue diseñado con una ruta lógica y única, eliminando los accesos duplicados que solían confundir a los usuarios en la versión anterior de la plataforma. Si algo no ayudaba al atleta a inscribirse o a consultar su progreso, simplemente no tenía lugar en el primer nivel de la jerarquía.

#### La cabecera y el pie de página: Control global y red de seguridad

Para la navegación superior (Header), decidí configurarla como el "Centro de Control Global". No es solo una barra de menú; es el ancla de identidad y funcionalidad persistente. Articulé el acceso a "Inicio de Sesión" y "Registro" de forma prominente en la cabecera principal, sabiendo que la personalización de la experiencia depende totalmente de que el usuario esté identificado. 

Por otro lado, utilicé el Footer (pie de página) como una "red de seguridad" para toda la navegación de soporte e institucional. Aquí es donde moví intencionalmente las FAQs, el Contacto, los Términos y Condiciones, y la Política de Privacidad. Mi intención era separar la operatividad del negocio —que ocurre en la parte superior y central de la pantalla— de la burocracia necesaria y la confianza institucional. Al hacer esto, liberé carga cognitiva en el menú principal, permitiendo que el atleta se enfocara en la exploración sin distracciones legales o administrativas, pero sabiendo que esa información está a un scroll de distancia si surge una duda.

#### La sección de Eventos: De la búsqueda al compromiso técnico

La arquitectura de la sección de **Eventos** fue, quizás, el punto más sensible del Sitemap. Basándome en la investigación, sabía que los atletas tienen modelos mentales muy distintos: algunos buscan por fecha (calendario), otros por ubicación (mapa) y la mayoría por tipo de reto (lista). 

1.  **Listado de Eventos Próximos:** Establecí la "Vista de Lista" como la opción por defecto. ¿Por qué? Porque permite una densidad de información y una capacidad de filtrado avanzado (por distancia, deporte, estado) que un calendario no soporta bien en una fase de exploración inicial.
2.  **Vistas Alternativas:** Incluí la "Vista de Calendario" como una opción secundaria pero accesible. Esto satisface a los usuarios más metódicos que planifican su temporada basándose en fines de semana específicos.
3.  **Página de Detalle de Evento (`/eventos/{id}`):** Aquí es donde la arquitectura se vuelve profunda. Diseñé este nodo para albergar no solo la descripción comercial, sino toda la "Información Técnica Adicional" (altimetría, entrega de kits, reglamentos). 

> **Decisión de diseño:** El botón de acción principal para iniciar la inscripción debe ser el elemento más jerarquizado de esta página. La estructura asegura que el usuario pueda "drillear" hacia abajo en los detalles técnicos antes de tomar la decisión de compra, reduciendo la ansiedad por falta de información que suele frenar las conversiones.

#### El Perfil como centro neurálgico: La integración de Asdeporte Plus

Uno de los mayores cambios estructurales que introduje fue la centralización absoluta del **Perfil de Usuario**. En la plataforma actual, la información estaba fragmentada: tus inscripciones estaban en un lado, tus resultados en otro y tus beneficios Plus en una pestaña casi invisible. 

Para el MVP, consolidé todo bajo la ruta `/mi-perfil`. Dentro de este dashboard, jerarquicé tres áreas clave:
*   **Mis Eventos Activos:** Con acceso inmediato a los comprobantes de inscripción, eliminando la necesidad de buscar en el correo electrónico (un punto de dolor crítico identificado en las entrevistas).
*   **Mi Historial AsDeporte:** Un repositorio de resultados personales que apela al sentido de logro del atleta.
*   **Hub de Beneficios Asdeporte Plus:** Esta fue una decisión estratégica de AI. En lugar de tratar a "Plus" como una sección de marketing externa, lo integré como un estado dentro del perfil. El usuario ve su membresía y sus beneficios exclusivos en el mismo lugar donde gestiona sus carreras. Esto no solo limpia la navegación global, sino que refuerza el valor de la suscripción cada vez que el usuario entra a revisar sus datos.

#### Taxonomía y nomenclatura: Hablando el idioma del atleta

De nada sirve una estructura lógica si las etiquetas son confusas. Realicé un ejercicio forense de etiquetado (Nomenclature) para traducir el lenguaje corporativo de AsDeporte al lenguaje real de los atletas. 

Un ejemplo claro fue el cambio de "Competencias" o "Carreras" por el término universal **"Eventos"**. Descubrí que "Competencias" se sentía demasiado serio para el corredor recreativo, mientras que "Carreras" excluía a los triatletas o ciclistas. "Eventos" es el término paraguas que el modelo mental del usuario acepta sin cuestionar. De igual forma, simplifiqué el acceso a **"Resultados"**, eliminando jerga interna que dividía los resultados por marcas de cronometraje. Para el atleta, el resultado es uno solo, independientemente de quién puso el chip en el tapete. Cada etiqueta en el menú fue validada para asegurar que el usuario supiera exactamente qué encontraría al hacer clic, eliminando cualquier rastro de incertidumbre.

#### Flujos transaccionales: La rigidez necesaria en la conversión

Finalmente, definí la lógica de los flujos de **Inscripción y Pago**. A diferencia del resto de la web, donde la navegación es exploratoria y libre, estos flujos fueron diseñados como secuencias lineales y rígidas: **Paso 1 -> Paso 2 -> Paso 3 -> Confirmación**. 

Mi razonamiento aquí fue evitar el abandono. En el momento en que un atleta decide inscribirse, la arquitectura de información debe "cerrarse" para evitar distracciones. Eliminé menús laterales y enlaces externos durante este proceso. Es un túnel de conversión donde la única salida es completar la tarea o cancelar explícitamente. Esta estructura garantiza que la complejidad de los datos requeridos (datos médicos, tallas de camiseta, exoneraciones) no abrume al usuario, presentándolos en dosis manejables y lógicas.

> **Reflexión sobre la estructura:** Una arquitectura de información web exitosa no es la que muestra todo, sino la que esconde lo innecesario hasta que es vital. Al equilibrar la herencia de `asdeporte.com` con estas nuevas jerarquías simplificadas, logré transformar una base de datos de carreras en una plataforma de experiencias deportivas donde el camino hacia la meta es, por fin, claro.

**Próximo paso:**
Con la arquitectura web blindada y las jerarquías de escritorio definidas, me enfrenté a un reto mucho más hostil: ¿cómo comprimir esta densidad de información en la pantalla de un móvil sin perder la esencia? Sabía que no bastaba con "encoger" el sitemap; el contexto del atleta en movimiento exige una jerarquía de pulgar, no de puntero. Me preparé para entrar en el diseño del Sitemap Mobile, consciente de que allí, cada milímetro de la Tab Bar es un campo de batalla por la atención del usuario.

### Parte 5: ARQUITECTURA MOBILE: OPTIMIZACIÓN PARA EL ATLETA EN MOVIMIENTO

#### El campo de batalla del pulgar

Al cerrar la arquitectura web, me encontré con un lienzo mucho más hostil: la pantalla de cinco pulgadas. Si en el escritorio tenía el lujo del espacio para desplegar menús y submenús, en la aplicación móvil cada milímetro de la **Tab Bar** se convirtió en un campo de batalla por la atención del usuario. Mi mentalidad cambió drásticamente; pasé de diseñar para la planificación pausada frente a un monitor a diseñar para la acción inmediata, la distracción y el pulgar de un atleta que, probablemente, consultaría la app con las manos sudadas o minutos antes de un disparo de salida.

La transición no fue un simple ejercicio de "encoger" lo que ya habíamos construido para la web. Como responsable del producto, entendí que la jerarquía debía ser puramente ergonómica. Mientras que en la web el usuario explora, en la app el usuario **ejecuta**. Esta premisa dictó cada decisión que tomé al estructurar el **Sitemap Mobile**. Tenía que resolver la fricción histórica reportada por el equipo de Soporte: esa confusión paralizante donde los atletas no sabían distinguir entre sus inscripciones actuales y su historial de años pasados. La arquitectura móvil no podía permitirse esa ambigüedad; tenía que ser una herramienta de precisión.

#### Un mapa de sitio nacido de la urgencia

Para el diseño del **Sitemap para la Aplicación Móvil**, mi primer paso fue realizar una traducción agresiva de los modelos mentales que habíamos identificado en la investigación. No me servía una estructura genérica. Utilicé herramientas de diagramación para trazar una jerarquía vertical que priorizara exclusivamente las funcionalidades **"Must Have"** del MVP B2C. Mi objetivo era reducir la carga cognitiva al mínimo absoluto.

Decidí que la navegación no sería un espejo de la web, sino una respuesta al contexto de movilidad. En mis diagramas, establecí que la profundidad de navegación (el *drill-down*) debía ser lo suficientemente clara como para que un usuario nunca se sintiera perdido en un callejón sin salida. Si un atleta entra a buscar su número de corredor para una carrera que empieza en diez minutos, la arquitectura de información debe permitirle llegar a ese dato en menos de tres toques. Cualquier nivel adicional de navegación era, a mis ojos, un riesgo de abandono.

#### La dictadura de las cuatro pestañas

La decisión estratégica más firme que tomé fue limitar la navegación principal a una **Tab Bar de solo cuatro nodos fundamentales**: Inicio, Eventos, Mi Perfil y Resultados. Fue un ejercicio de renuncia deliberada. 

*   **Inicio (Home):** El punto de anclaje, optimizado para ofrecer accesos rápidos y destacados que cambian según la proximidad de un evento.
*   **Eventos:** El motor de conversión, donde la búsqueda y el filtrado son los protagonistas.
*   **Mi Perfil:** El centro neurálgico de gestión personal.
*   **Resultados:** La validación del esfuerzo, una de las secciones con mayor recurrencia de uso post-evento.

> **El trade-off del alcance:** Recibí presiones para incluir secciones como "Tribu" o la "Tienda" en la barra principal, pero me mantuve firme en su exclusión para este MVP. Introducir más de cinco elementos en una Tab Bar móvil satura la interfaz y diluye el foco transaccional. Mi razonamiento fue claro: si no ayuda al atleta a inscribirse o a consultar su estado actual, no merece un lugar en el primer nivel de la arquitectura móvil. Preferí una navegación limpia y veloz que una plataforma sobrecargada de opciones secundarias.

#### Navegación jerárquica y el flujo de "túnel"

Para manejar la densidad de información técnica sin abrumar la pantalla, implementé un patrón de **navegación jerárquica (drill-down)**. Cuando el usuario selecciona una competencia en la pestaña de "Eventos", la transición lateral lo lleva a la "Página de Detalle de Evento". Aquí, la arquitectura se vuelve profunda pero lineal. El usuario puede descender hacia reglamentos, rutas o información técnica, pero siempre manteniendo un ancla clara hacia atrás.

Sin embargo, el verdadero cambio de paradigma lo apliqué en el **Flujo Transaccional de Inscripción**. A diferencia de la navegación exploratoria, el proceso de pago e inscripción lo diseñé como un flujo lineal y guiado que se superpone a la navegación principal. Es lo que llamo un "túnel de conversión": una vez que el usuario inicia la inscripción, la Tab Bar desaparece o se bloquea. No quería que una notificación o una curiosidad momentánea sacara al atleta del proceso de pago. En móvil, la distracción es el enemigo número uno de la conversión, y mi arquitectura debía blindar ese momento crítico.

#### El adiós definitivo al calendario móvil

Uno de los hallazgos más dolorosos de la investigación fue que el calendario actual de la app era un desastre de usabilidad. Los usuarios se sentían frustrados intentando tocar días específicos en una cuadrícula diminuta para encontrar una carrera. Mi respuesta arquitectónica fue radical: **eliminé el calendario como vista por defecto y lo sustituí por una Vista de Lista optimizada**.

En esta nueva estructura, el listado de eventos próximos es el protagonista, con una funcionalidad de **búsqueda y filtrado avanzado** anclada en la parte superior. Mi lógica senior me dictaba que, en un dispositivo móvil, es infinitamente más rápido filtrar por "Triatlón" y "Ciudad de México" que navegar mes a mes en un calendario denso. La vista de calendario quedó relegada a una opción alternativa, accesible solo si el usuario realmente desea esa visualización espacial, pero el flujo principal ahora prioriza la eficiencia de la lista y el scroll vertical, que es el gesto natural del pulgar.

#### El centro neurálgico: Mi Perfil como ecosistema

En la plataforma actual, la información del usuario está dispersa, lo que genera una carga de soporte técnico innecesaria. Para la nueva arquitectura móvil, configuré **"Mi Perfil"** como el corazón de la experiencia del atleta. Aquí consolidé tres pilares que antes vivían separados:

1.  **Mis Eventos Activos:** Acceso inmediato a lo que importa *ahora* (inscripciones, comprobantes, guías de atleta).
2.  **Mi Historial:** El registro de gloria del atleta, separado claramente de lo activo para evitar confusiones.
3.  **Hub de Beneficios Asdeporte Plus:** Integré este programa de lealtad dentro del perfil, no como una sección externa. 

Al anidar el **Wallet** y los **Comprobantes de Inscripción** dentro de "Mis Eventos Activos", resolví el problema del "momento de la verdad". El atleta en la fila de registro de la expo necesita su código QR de inmediato. Mi arquitectura coloca ese artefacto digital a dos niveles de profundidad desde el lanzamiento de la app, asegurando que la experiencia *offline* sea tan fluida como la digital.

#### La arquitectura no es un espejo: Web vs. Mobile

Es vital entender que estas dos arquitecturas, aunque comparten la misma base de datos, tienen propósitos distintos. Mientras que en la web permití que **Asdeporte Plus** tuviera una sección dedicada y extensa para la venta y promoción de la membresía, en la app decidí que debía ser una herramienta de consulta de beneficios dentro del perfil. 

La web utiliza un menú principal superior con submenús desplegables que permiten una visión panorámica de la oferta de AsDeporte. En la app, esa visión panorámica se sacrifica en favor de la jerarquía táctil. Los elementos secundarios como Soporte, FAQs y términos legales los moví a un menú de configuración accesible desde el perfil o un menú adicional, liberando la Tab Bar para las tareas que realmente generan valor al negocio y al usuario en movimiento. No diseñé una versión pequeña del sitio web; diseñé una herramienta de campo para el deportista.

#### Reflexión: El diseño bajo estrés

Como diseñador, mi obsesión en esta fase fue lo que llamo **"navegación forense"**. Una arquitectura de información móvil exitosa es aquella que sobrevive al estrés del usuario. Pensé constantemente en el atleta que tiene poca batería, una conexión 3G inestable en medio de una montaña y la necesidad urgente de saber a qué hora cierran el corral de salida. 

Cada etiqueta, desde "Mis Eventos" hasta "Resultados", fue seleccionada para ser inequívoca. Evité tecnicismos internos y aposté por el lenguaje que el atleta usa en la vida real. Al finalizar esta estructura, sentí que por fin habíamos pasado de un laberinto de opciones a un camino despejado hacia la meta. Sin embargo, una estructura lógica es solo la mitad de la batalla; el siguiente reto era definir cómo se sentiría ese camino bajo los dedos del usuario.

**Próximo paso:**
Con los sitemaps web y móvil blindados y la jerarquía de información establecida, me di cuenta de que la estructura lógica no serviría de nada si las interacciones no se sentían naturales. Tenía la jerarquía, pero me faltaba el comportamiento: ¿cómo debía reaccionar un filtro al ser tocado?, ¿qué pasaba visualmente cuando un flujo se interrumpía? Me preparé para definir los **PATRONES DE NAVEGACIÓN: EL LENGUAJE DE INTERACCIÓN**, sabiendo que allí es donde la arquitectura cobra vida o muere por una mala ejecución táctil.

### Parte 6: PATRONES DE NAVEGACIÓN: EL LENGUAJE DE INTERACCIÓN

#### El lenguaje del movimiento: de la estructura a la interacción

Una vez que hube blindado los sitemaps y la jerarquía de contenidos, me enfrenté a una verdad incómoda que todo diseñador experimentado conoce: un mapa perfecto no garantiza que el viajero no se pierda. Tenía la estructura lógica, pero me faltaba el comportamiento. La investigación previa había sido tajante al señalar una "confusión de navegación" crónica en la plataforma actual de AsDeporte; los atletas sentían que entraban en un laberinto donde las reglas cambiaban a mitad del camino. Mi reto en este punto no era solo decidir dónde poner los botones, sino definir el **lenguaje de interacción** que resolvería esa fricción de raíz.

Entendí que la navegación es, en esencia, una promesa de control. Si el usuario hace "clic" o "tap", el sistema debe responder de una forma que valide su modelo mental, no que lo desafíe. Para el MVP B2C, mi razonamiento estratégico se centró en eliminar la carga cognitiva. No quería que el atleta gastara energía descifrando cómo volver atrás o dónde encontrar su perfil; quería que esa energía se reservara para su entrenamiento y su competencia. Pasé de la arquitectura estática a la definición de patrones dinámicos, estableciendo reglas de juego claras tanto para la web responsive como para la aplicación móvil, asegurando que el movimiento a través del ecosistema fuera predecible, fluido y, sobre todo, intencional.

#### Navegación Global: el ancla de la experiencia

Para la **plataforma web**, mi decisión fue implementar una **Barra de Navegación Superior Persistente (Header)**. En un entorno de escritorio o tablet, el usuario necesita puntos de referencia constantes. Articulé este componente para que contuviera los pilares del MVP: Inicio, Eventos, Resultados y Mi Perfil. Me aseguré de que el logo funcionara siempre como un ancla de retorno al inicio y que la funcionalidad de búsqueda fuera omnipresente. La persistencia aquí no es un capricho estético; es una herramienta de seguridad psicológica. Si el usuario se sumerge en un listado extenso de resultados de un maratón, debe saber que con un solo movimiento ocular hacia arriba puede recuperar el control total de su sesión.

En la **aplicación móvil**, el paradigma cambió radicalmente hacia la ergonomía del pulgar. Opté por una **Barra de Pestañas Inferior (Tab Bar)**, el patrón que considero superior para apps con cuatro o cinco secciones críticas. 

*   **Priorización táctil:** Ubiqué Inicio, Eventos, Mi Perfil y Resultados al alcance directo del dedo, eliminando la necesidad de menús ocultos o gestos complejos.
*   **Claridad visual:** Cada ícono fue acompañado de una etiqueta de texto clara. Evité la ambigüedad de usar solo símbolos, ya que términos como "Tribu" o "Wallet" habían generado confusión en las pruebas iniciales. 
*   **Descubrimiento:** Al mantener estas opciones siempre visibles, ataqué directamente el problema de "descubrimiento de secciones" que sufría la app anterior. Si no lo ves, no existe; en mi propuesta, lo vital está siempre a la vista.

Para las funciones de menor frecuencia, como la configuración de notificaciones o el soporte técnico, tracé un camino secundario a través de un menú de "Más" o dentro del perfil, blindando la navegación principal de ruidos innecesarios.

#### Jerarquía y el arte de no sentirse atrapado

Uno de los mayores dolores reportados por los usuarios era la sensación de quedar "encerrados" en pantallas de detalle. Para resolver esto, diseñé una **Navegación Jerárquica** estricta pero flexible. En la aplicación móvil, estandaricé la ubicación del botón "Atrás" en la esquina superior izquierda. Parece una decisión obvia, pero su ejecución debe ser impecable: al navegar desde una lista de eventos hacia el detalle de un triatlón específico, el usuario debe poder retroceder con la certeza de que volverá exactamente al punto donde dejó el scroll en la lista anterior.

En la versión web, complementé esta lógica con el uso de **Breadcrumbs (Migas de Pan)**. Utilicé la ruta `Inicio > Eventos > [Nombre del Evento]` para permitir saltos jerárquicos inmediatos. Este patrón es vital para el usuario "power user" que compara múltiples competencias. Si está revisando el reglamento de una carrera en La Paz, debe poder saltar de vuelta a la categoría general de "Eventos" sin tener que usar el botón de retroceso del navegador tres veces. Esta decisión responde directamente a la dificultad para encontrar información validada en la fase de investigación; las migas de pan no solo indican dónde estás, sino que te enseñan cómo está construido el sitio mientras lo usas.

#### Fragmentación inteligente: el uso de Pestañas (Tabs)

El "Detalle de Evento" es, por definición, la pantalla más densa de la plataforma. Contiene desde mapas de ruta y horarios de salida hasta reglamentos y detalles de la entrega de kits. Meter todo esto en un scroll infinito era una receta para el abandono. Mi maniobra aquí fue fragmentar la complejidad mediante **Navegación por Pestañas (Tabs)** dentro de la misma pantalla.

Diseñé tres contenedores lógicos:
1.  **Información General:** El "qué, cuándo y dónde" básico para la toma de decisiones rápida.
2.  **Información Técnica:** Detalles para el atleta ya inscrito (altimetría, cierres de vialidades, categorías).
3.  **Entrega de Kits:** Un punto crítico de fricción logística que necesitaba su propio espacio para ser encontrado en segundos bajo el estrés previo a la carrera.

Configuré estas pestañas para que actuaran como filtros de vista. Esto permitió que la página mantuviera una longitud manejable y que el atleta pudiera saltar entre datos técnicos y logísticos sin perder el contexto del evento en el que se encontraba. El resultado fue una interfaz que "respira", donde la densidad de datos no se traduce en caos visual.

#### Navegación Contextual y el impulso a la acción

No toda la navegación ocurre en los menús; la más efectiva es la que sucede mientras el usuario consume contenido. Implementé una estrategia de **Navegación Contextual** mediante enlaces y CTAs (Call to Action) estratégicos. 

> El criterio aquí fue simple: si un texto menciona una regla, debe haber un enlace directo al reglamento. Si el usuario está viendo un evento, el botón de "Inscríbete Aquí" debe ser el elemento con mayor peso visual en la pantalla.

Utilicé botones de alto contraste para las acciones transaccionales, ubicándolos en puntos de alta intención. Por ejemplo, en el perfil del usuario, el botón "Ver mis Resultados" no es solo un enlace, es el destino final de su esfuerzo deportivo. Esta navegación contextual convierte la lectura pasiva en una experiencia orientada a objetivos, eliminando pasos innecesarios y guiando al atleta hacia la conversión o la consulta de datos críticos de forma orgánica.

#### El túnel de conversión: Navegación Transaccional

Finalmente, abordé el proceso de inscripción como un entorno de **Navegación Transaccional** pura. Aquí, las reglas de exploración libre se suspenden en favor de un **Flujo Lineal Guiado**. 

Para reducir el abandono en un proceso que históricamente se percibía como tedioso, dividí la inscripción en pasos claros (Paso 1, 2, 3) con un indicador de progreso visual omnipresente. En este "túnel", eliminé la navegación global —el header y la tab bar desaparecen— para evitar distracciones que pudieran alejar al usuario del pago. Sin embargo, impuse una regla de seguridad senior: el usuario siempre puede volver al paso anterior para corregir datos sin perder lo que ya escribió. Además, implementé un protocolo de interrupción; si el usuario intenta cerrar el flujo, el sistema lanza una advertencia de "datos no guardados". Blindar la transacción no es solo facilitar el pago, es proteger el tiempo y el esfuerzo que el usuario ya invirtió en el formulario.

**Próximo paso:**

Con los patrones de navegación definidos y la lógica de interacción establecida, la arquitectura de información estaba completa en el papel, pero aún faltaba la prueba de fuego: el escrutinio de los stakeholders y la viabilidad técnica. Me di cuenta de que, por muy sólida que fuera mi lógica de pestañas y flujos transaccionales, necesitaba asegurar que el equipo de ingeniería pudiera implementarlo y que el negocio estuviera alineado con la jerarquía propuesta. Me preparé para entrar en la fase de **VALIDACIÓN Y ALINEACIÓN: EL CIERRE DE LA ARQUITECTURA**, sabiendo que defender estas decisiones ante el liderazgo de AsDeporte sería el último filtro antes de poder tocar los primeros píxeles del diseño visual.

### Parte 7: VALIDACIÓN Y ALINEACIÓN: EL CIERRE DE LA ARQUITECTURA

#### El momento de la verdad: del diagrama a la realidad operativa

Tenía sobre mi mesa digital una arquitectura de información que, sobre el papel, parecía infalible. Había invertido semanas decodificando modelos mentales y trazando flujos de navegación que resolvían, teóricamente, cada punto de fricción detectado en la investigación. Sin embargo, en este oficio he aprendido que la estructura más elegante es un castillo de naipes si no sobrevive al contacto con la realidad técnica y los objetivos de negocio. Una arquitectura de información no es una pieza de arte; es un plano de ingeniería para una experiencia que debe ser rentable, construible y, sobre todo, útil.

Entendí que no podía seguir avanzando en un silo creativo. Si enviaba este mapa directamente a la fase de diseño visual sin un filtro previo de validación, corría el riesgo de construir sobre cimientos de arena. Necesitaba someter el Sitemap y el inventario de funcionalidades al escrutinio de quienes manejan los presupuestos y quienes escriben el código. Mi razonamiento fue pragmático: prefería que me derribaran una idea en un diagrama de bloques hoy, a tener que rediseñar un flujo entero en tres meses porque una API no permitía la consulta que yo había imaginado. La arquitectura debía dejar de ser "mi propuesta" para convertirse en el "contrato de navegación" oficial de AsDeporte.

#### El Sitemap como escudo contra la confusión histórica

Convoqué a los stakeholders clave de AsDeporte —liderazgo, producto y marketing— para una sesión de revisión crítica. Mi objetivo no era "venderles" el diseño, sino demostrarles cómo la nueva jerarquía atacaba directamente la confusión de navegación que los atletas habían reportado durante años. Presenté el Sitemap no como un organigrama de páginas, sino como la respuesta estructural a los problemas de soporte al cliente.

Durante la sesión, puse especial énfasis en la ubicación de secciones estratégicas como "Beneficios Plus" y "Tribu". En la plataforma anterior, estos elementos estaban enterrados o dispersos, lo que diluía su valor de negocio. Defendí su nueva posición jerárquica basándome en los modelos mentales que identifiqué: el atleta no busca "Plus" como una categoría aislada, sino como una capa de valor que debe aparecer cuando consulta sus eventos o su perfil. 

> El feedback de los stakeholders fue vital para calibrar el peso de la "Tribu". Mientras yo lo veía como un centro social, el negocio necesitaba que fuera el motor de retención. Ajusté la jerarquía para que la comunidad no fuera un destino final, sino un tejido conectivo presente en la consulta de resultados y en el muro de actividad. Esta alineación aseguró que el diseño no solo fuera usable, sino que empujara los KPIs de la empresa.

#### El filtro de la ingeniería: wearables, APIs y tiempos de respuesta

Una vez alineado el negocio, me encerré con el equipo de ingeniería. Esta es la parte del proceso donde un **Senior Product Designer** demuestra que entiende el producto como un sistema vivo. Desglosé la arquitectura pantalla por pantalla, funcionalidad por funcionalidad, preguntando constantemente: "¿Cómo vamos a alimentar esto?".

Puse el foco en tres áreas de alto riesgo técnico que había incluido en la AI:
*   **Sincronización con wearables:** Validé si la estructura de la sección de "Entrenamientos" permitía la ingesta de datos de terceros en tiempo real sin romper la navegación.
*   **Procesamiento de pagos:** Analicé el flujo de inscripción para asegurar que los estados de confirmación bancaria estuvieran contemplados en la jerarquía, evitando que el usuario quedara en un limbo navegable si la transacción fallaba.
*   **Resultados en tiempo real:** Verifiqué que la jerarquía de la sección de "Eventos en Vivo" fuera compatible con la latencia de sus servidores actuales.

Identificar estos bloqueadores en la fase de arquitectura me permitió pivotar antes de tocar un solo píxel en alta fidelidad. Por ejemplo, descubrí que una de las integraciones de wearables que yo había planteado como central requería una autenticación que obligaba a cambiar el flujo de "Onboarding". Lo ajustamos en el Sitemap en diez minutos; en código, nos habría tomado dos semanas.

#### Auditoría forense: blindando la integridad del MVP

Con el feedback de negocio y técnica en la mano, realicé lo que llamo una "auditoría de integridad". Tomé el Inventario de Contenido y Funcionalidad que había definido para el MVP B2C y lo contrasté, elemento por elemento, contra el Sitemap final. No me permití el lujo de dejar una sola funcionalidad "huérfana".

Fue un ejercicio obsesivo de check-list:
1.  **Páginas de eventos:** ¿Tienen un acceso directo desde el buscador y desde el calendario? Sí.
2.  **Listados y resultados:** ¿Están conectados lógicamente con el perfil del usuario para mostrar su historial personal? Sí.
3.  **Sección de pagos:** ¿Es accesible desde cualquier punto del flujo de inscripción sin perder el contexto del evento? Sí.
4.  **Notificaciones:** ¿Tienen un centro de control claro en el perfil o son solo contextuales? Decidí darles un espacio propio para evitar que el usuario se perdiera mensajes críticos de seguridad en carrera.

Este proceso me aseguró que el 100% de lo prometido para el MVP estuviera contemplado en la estructura. Si algo no estaba en el Sitemap, no existía para el proyecto. Esta disciplina fue lo que blindó el alcance y evitó que el equipo de desarrollo se encontrara con "sorpresas" de último minuto sobre páginas que nadie había diseñado pero que el sistema necesitaba.

#### Semántica para atletas: eliminando la jerga corporativa

El último paso de refinamiento fue la nomenclatura. Revisé cada etiqueta de navegación bajo la lente de la claridad semántica, eliminando cualquier rastro de jerga interna de AsDeporte que pudiera aumentar la carga cognitiva del usuario. El lenguaje de la oficina no es el lenguaje del atleta que está a punto de correr un maratón.

Tomé decisiones radicales basadas en los hallazgos de los modelos mentales:
*   **"Eventos" sobre "Competencias y Carreras":** Aunque internamente se hablaba de "competencias", el usuario busca "eventos". Es más corto, más claro y cubre tanto una carrera de 5k como un triatlón Ironman.
*   **"Mis Eventos" vs "Historial":** Descubrí que los usuarios se confundían cuando sus inscripciones actuales se mezclaban con sus resultados pasados. Separé ambas categorías en la arquitectura, usando "Mis Eventos" para lo que está por venir y "Resultados" para el registro histórico.
*   **"Tribu":** A pesar de ser un término de marca, decidí mantenerlo pero siempre acompañado de iconografía que sugiriera comunidad, asegurando que el concepto no fuera un misterio para el nuevo usuario.

Esta obsesión por el etiquetado no es cosmética; es usabilidad pura. Una palabra mal elegida en un menú es un muro para la conversión. Al final de este proceso, cada botón y cada encabezado en la arquitectura hablaba el mismo idioma que el deportista.

#### El fin de la abstracción: preparando el salto al layout

Cerrar la fase de Arquitectura de Información se sintió como terminar los planos de un rascacielos. La abstracción de los post-its y los diagramas de flujo finalmente se había solidificado en una estructura tangible y validada. Ya no tenía dudas sobre dónde iría cada elemento; el Sitemap se convirtió en mi brújula para lo que venía: el wireframing.

Antes de abrir Figma para trazar los primeros layouts, me aseguré de que todo el equipo tuviera acceso a la "Fuente de Verdad". Organicé los entregables finales para que no hubiera ambigüedades:
*   El **Inventario de Contenido** actualizado con las definiciones del MVP.
*   Los **Mapas de Afinidad** que justificaban por qué agrupamos las funciones de esa manera.
*   Los **Sitemaps definitivos** diferenciados para Web y App, respetando las capacidades de cada plataforma.
*   Las **Especificaciones de Nomenclatura** que servirían de guía para el equipo de UX Writing y desarrollo.

Con este paquete documental, la arquitectura dejó de ser una serie de archivos en mi carpeta para convertirse en el ADN del producto. Estábamos listos para empezar a dar forma visual a la experiencia, sabiendo que cada decisión de diseño estaría respaldada por una estructura lógica inamovible.

> **Lección de trinchera:** La humildad profesional en esta etapa es tu mejor herramienta. Aceptar que un desarrollador tiene razón cuando te dice que un flujo es demasiado complejo, o que un stakeholder de negocio ve un riesgo que tú pasaste por alto, no debilita tu diseño; lo fortalece. Una arquitectura validada es una arquitectura blindada contra el fracaso.

**Reflexión final:**
La arquitectura de información fue el momento en que el proyecto dejó de ser una lista de deseos para convertirse en un sistema real. Logramos reducir la carga cognitiva de la plataforma simplificando rutas que antes tomaban cinco clics a solo dos, y establecimos una nomenclatura que el atleta entiende por instinto. Al final, este trabajo no solo organizó el contenido, sino que alineó a todo el equipo de AsDeporte bajo una misma visión estructural, dándonos la confianza necesaria para entrar en la fase de diseño visual con la certeza de que el esqueleto del producto era indestructible.