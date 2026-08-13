# Fase 3: Prototipado y Validación

## Actividad 1: actividad_01_creacion_de_prototipos

### Parte 1: AUDITORÍA DE INSUMOS: EL CIMIENTO DEL PROTOTIPO

#### El silencio antes de la primera conexión

Al terminar la Fase 2, me encontré frente a un inventario de más de 40 pantallas de alta fidelidad. Visualmente, el trabajo era impecable: la identidad de AsDeporte respiraba en cada píxel, los componentes del UI Kit estaban en su sitio y la jerarquía tipográfica guiaba el ojo con precisión. Sin embargo, como diseñador, conozco bien esa sensación de "calma antes de la tormenta". Tenía ante mí una colección de imágenes estáticas, y mi siguiente paso era transformarlas en una experiencia viva. Pero antes de conectar un solo nodo en Figma, tomé una decisión táctica: no movería un dedo hacia el prototipado sin realizar primero una **auditoría forense de insumos**.

El riesgo de saltar directamente a la vinculación de pantallas es inmenso. En proyectos de esta escala, con flujos de inscripción complejos y una reputación de marca que reconstruir tras las críticas a la app anterior, cualquier error de lógica en un wireframe o una inconsistencia menor en un mockup se propaga y se magnifica en el prototipo. No quería perder horas de trabajo técnico corrigiendo rutas rotas o estados de error que debieron definirse semanas atrás. Mi prioridad absoluta era asegurar que los cimientos fueran de hormigón armado; solo así el prototipo podría soportar el escrutinio de los usuarios reales sin que el "ruido" técnico invalidara los hallazgos.

#### La inspección de la estructura ósea: Wireframes de Alta Fidelidad

Comencé mi auditoría regresando a los **Wireframes de Alta Fidelidad**. Podría parecer redundante revisar esqueletos cuando ya tienes la "piel" (los mockups finales), pero mi razonamiento fue estrictamente funcional. Necesitaba validar la arquitectura de información y la disposición de los elementos de control sin la distracción del color, las imágenes de atletas o la tipografía Montserrat. 

Inspeccioné cada pantalla buscando la intención original: ¿Sigue siendo claro el botón de acción principal en el flujo de búsqueda? ¿La jerarquía de los filtros en la versión móvil permite una navegación con una sola mano? Verifiqué que cada wireframe representara fielmente la lógica que habíamos pactado. Esta revisión me permitió detectar un par de inconsistencias en la ubicación de los elementos de navegación secundaria que, de haber pasado al prototipo, habrían confundido al usuario. Validar esta "estructura ósea" antes de la capa estética es lo que separa un prototipo que simplemente "se ve bien" de uno que realmente "funciona bien".

#### Auditoría de Mockups: La consistencia como motor de confianza

Una vez despejada la estructura, pasé a la **auditoría de los Mockups de Alta Fidelidad**. Aquí, mi enfoque cambió hacia la consistencia visual y la integridad del sistema. AsDeporte es una marca con más de tres décadas de historia; la confianza del usuario se gana a través de la profesionalidad de la interfaz. Utilicé Figma para realizar un cotejo sistemático de cada pantalla contra nuestro UI Kit.

*   **Componentes:** Verifiqué que todos los botones, campos de entrada (inputs) y tarjetas (cards) fueran instancias del componente maestro. Si un botón de "Inscribirme" tenía un radio de borde distinto en la pantalla de detalle que en la de resultados, el usuario percibiría una falta de pulido que afectaría su percepción de seguridad en el pago.
*   **Estados de la Interfaz:** No me limité a ver la "ruta feliz". Busqué activamente los estados de las pantallas: ¿Cómo se ve el campo de búsqueda cuando hay un error? ¿Tenemos el diseño para el estado vacío de la sección de "Mis Eventos"?
*   **Organización del Canvas:** Preparé el terreno en Figma organizando las pantallas en un orden lógico, casi cronológico, siguiendo el recorrido del usuario. Esta limpieza visual en el archivo de diseño no es un capricho estético; es una medida de eficiencia para la fase de vinculación que vendría después.

#### El desglose de la coreografía: Especificaciones de IxD

El diseño de interacción (IxD) es lo que realmente define si una plataforma se siente moderna o anticuada. Para esta auditoría, desglosé el documento de especificaciones de IxD con un nivel de detalle obsesivo. No me bastaba con saber que un modal se abría; necesitaba tener claro *cómo* se abría.

Analicé el comportamiento esperado de cada elemento interactivo:
1.  **Microinteracciones:** Identifiqué dónde necesitábamos efectos de *hover* para dar feedback visual de que un elemento es clickable, especialmente en las tarjetas de los eventos.
2.  **Transiciones:** Definí que los cambios entre pasos del flujo de inscripción debían ser transiciones laterales para reforzar la sensación de progreso lineal, mientras que los detalles de la "Tribu" debían emerger como modales para mantener el contexto del usuario.
3.  **Estados de Carga:** Dado que la plataforma maneja una base de datos extensa de eventos, identifiqué los puntos críticos donde el prototipo debía simular un estado de *loading*. Si no testeamos la paciencia del usuario durante la carga, no estamos validando la experiencia real.

> "Un prototipo sin especificaciones de interacción claras es solo una presentación de diapositivas glorificada. Mi objetivo era que el usuario olvidara que estaba en Figma y sintiera que estaba usando la plataforma final."

#### El mapa vs. el territorio: Validación de Diagramas de Flujo

El siguiente paso fue contrastar mis pantallas con los **Diagramas de Flujos de Usuario** que habíamos definido en la Fase 1. Este es el momento donde detectas las "pantallas huérfanas": esas vistas que diseñaste pero que no tienen un punto de entrada claro, o peor aún, flujos que terminan en un callejón sin salida.

Comparé cada nodo del User Flow con las pantallas disponibles en Figma. Me enfoqué especialmente en los puntos de decisión: si el usuario decide no completar su perfil en el momento de la inscripción, ¿a dónde lo lleva el sistema? ¿Existe esa pantalla de retorno? Esta validación me permitió asegurar que el prototipo permitiría una navegación fluida de punto A a punto B, sin interrupciones lógicas que pudieran frustrar al participante durante las pruebas de usabilidad. No quería que un error de navegación mío se interpretara como un problema de usabilidad del producto.

#### Blindando el MVP: Cotejo con el Documento de Alcance

Como Product Designer, tengo la responsabilidad de ser el guardián del alcance (*scope*). Es muy fácil dejarse llevar por la emoción y empezar a prototipar funcionalidades "futuristas" que no estarán en el lanzamiento inicial. Por eso, realicé un cotejo estricto contra el **Documento de Alcance del MVP Validado**.

Verifiqué que los diseños cubrieran exactamente lo que se prometió para el lanzamiento B2C, ni más ni menos. Mi objetivo era evitar el *scope creep* en la fase de prototipado. Si una funcionalidad de "Red Social" no era parte del núcleo del MVP, me aseguré de que no ocupara tiempo valioso de vinculación o que, al menos, estuviera claramente marcada como no interactiva. Esta disciplina garantiza que el feedback que obtendremos en las pruebas sea accionable para el equipo de desarrollo y el negocio a corto plazo.

#### Priorización de Flujos Críticos: El corazón del negocio

Finalmente, identifiqué y prioricé los recorridos que debían ser perfectos. En el ecosistema de AsDeporte, hay tres flujos que no pueden fallar:

1.  **Búsqueda e Inscripción:** Es el motor de conversión. Audité cada paso, desde la aplicación de filtros por disciplina y fecha hasta la confirmación del pago. Cada pantalla de este flujo debía estar impecable.
2.  **Gestión de Perfil:** Donde el atleta consulta sus tiempos y certificados. Aquí la prioridad era la claridad de la información personal.
3.  **Tribu y AsDeporte Plus:** Este es el diferenciador premium. Me aseguré de que los activos de diseño transmitieran esa sensación de exclusividad y comunidad que el brief destacaba como pilar estratégico.

Para gestionar todo esto, utilicé **Figma** no solo como un lienzo, sino como un repositorio centralizado. Organicé el archivo en secciones claras: una para los activos de auditoría (wireframes y flujos) y otra, totalmente limpia, donde comenzaría la construcción del prototipo interactivo. Esta higiene de diseño es, en mi experiencia, el acto de responsabilidad técnica más importante antes de pasar a la acción. Sin datos limpios y activos verificados, cualquier prueba de usabilidad posterior estaría viciada por errores básicos que podríamos haber evitado aquí.

#### Próximo paso:

Una vez que tuve la certeza absoluta de que cada pantalla y cada flujo estaban alineados con el alcance y la estrategia de negocio, me enfrenté a la pregunta más difícil del proceso: ¿Qué tan "real" debía ser este simulacro? Sabía que el tiempo apremiaba, pero también que la confianza de los usuarios de AsDeporte pendía de un hilo tras sus experiencias previas con la app móvil. Fue en ese momento cuando tuve que decidir si apostar por la velocidad de un prototipo de media fidelidad o invertir el esfuerzo necesario para alcanzar una alta fidelidad que no dejara margen a la duda. **ESTRATEGIA DE FIDELIDAD: EL TRADE-OFF HACIA LA ALTA FIDELIDAD** sería la decisión que definiría el éxito o el fracaso de nuestras pruebas de usabilidad.

### Parte 2: ESTRATEGIA DE FIDELIDAD: EL TRADE-OFF HACIA LA ALTA FIDELIDAD

#### El dilema de la fidelidad: ¿Simular o Construir?

Una vez que cerré la auditoría de los flujos críticos del MVP B2C, me quedé solo frente al tablero. Tenía los planos —los flujos de usuario y los diagramas de arquitectura— y tenía las piezas estéticas —los mockups de alta fidelidad—. Pero en ese momento exacto, entre la fase de diseño visual y la de validación, surgió la pregunta que separa un proyecto de diseño de una experiencia real: ¿qué tanto debíamos esforzarnos en que este simulacro se sintiera "vivo"? 

La presión del cronograma era palpable. En cualquier otro contexto, lo estándar hubiera sido construir un prototipo de media fidelidad; algo rápido, funcional, que permitiera validar si el usuario entiende el camino de la búsqueda a la inscripción sin distraerse con el color de los botones. Sin embargo, mi diagnóstico sobre la situación de AsDeporte me dictaba algo distinto. Veníamos de un historial de críticas recurrentes sobre la usabilidad de la app móvil. Los usuarios no solo estaban confundidos; estaban escépticos. 

Entendí que si ponía frente a un atleta un prototipo de "cajas grises" o wireframes simplificados, estaría pidiéndole un esfuerzo cognitivo adicional: el de imaginar cómo se vería el producto final. En un entorno donde la confianza es el factor decisivo para que alguien entregue sus datos de pago y se inscriba a un evento, no podíamos permitirnos ese lujo. Necesitaba reacciones viscerales, no opiniones intelectuales sobre la estructura. El feedback que buscábamos no era solo "¿entiendes dónde hacer clic?", sino "¿confías en este sistema lo suficiente como para completar tu registro?".

#### La maniobra hacia la Alta Fidelidad: Un riesgo calculado

Tras evaluar los objetivos de las pruebas de usabilidad que vendrían a continuación, tomé la decisión ejecutiva de **saltar las etapas de baja y media fidelidad para construir directamente un prototipo de Alta Fidelidad (basado en Mockups de UI)**. Fue una decisión de eficiencia pura, aunque sobre el papel pareciera lo contrario. 

Mi razonamiento técnico para este trade-off se basó en tres pilares de riesgo:

*   **Eliminación del ruido estético:** Los usuarios no técnicos suelen perderse en la abstracción de los wireframes. Al usar alta fidelidad, eliminamos la pregunta "¿esto cómo se va a ver?" y obligamos al usuario a centrarse en la interacción real.
*   **Validación del Microcopy en contexto:** En un flujo de inscripción complejo, el texto de un botón o un mensaje de error no es solo "contenido"; es diseño de interacción (IxD). Necesitaba validar si los términos asociados a la "Tribu" o el programa "Plus" resonaban con el usuario mientras veía la interfaz final.
*   **Compresión de ciclos de corrección:** Al validar con alta fidelidad, los hallazgos suelen ser tan precisos que permiten pasar a desarrollo con ajustes mínimos. Invertir más tiempo ahora en el prototipo significaba ahorrar semanas de deuda de diseño visual en el futuro.

> **Insight Senior:** La alta fidelidad no es un adorno; es una herramienta de precisión. Si la base estructural es sólida —como nos aseguramos en la fase de auditoría—, el realismo visual no distrae, sino que revela las fricciones más sutiles que el usuario experimentaría en el producto real.

#### Validando la experiencia completa, no solo el camino

Al elegir este camino, mi foco se desplazó de la simple navegación a la **validación holística de la experiencia**. No me bastaba con saber que el usuario llegaba de la pantalla A a la pantalla B; necesitaba observar cómo interactuaba con la jerarquía de elementos. ¿El botón de "Inscribirme ahora" competía visualmente con la información de la convocatoria? ¿La transición hacia el perfil de la Tribu se sentía natural o como una ruptura en el flujo?

Para lograr esto, el prototipo debía ser indistinguible del producto final en términos de **diseño visual, microcopy y jerarquía**. Me aseguré de que cada etiqueta, cada mensaje de confirmación y cada micro-texto de ayuda estuviera en su lugar. En una plataforma donde el usuario debe gestionar su perfil deportivo y sus beneficios premium, la claridad del lenguaje es lo que previene el abandono del carrito. Un prototipo de alta fidelidad es el único artefacto capaz de poner a prueba esa sensación de seguridad.

Esta decisión condicionó todo el roadmap de usabilidad. Al elevar el estándar del artefacto, estaba elevando el estándar del feedback que recibiríamos. Sabía que los participantes no nos dirían "el flujo está bien"; nos dirían "me da miedo que este botón no me devuelva a mi perfil" o "no entiendo qué gano siendo Plus en esta pantalla". Ese es el tipo de hallazgo técnico que realmente permite refinar un producto antes de que se escriba una sola línea de código.

#### La sensación de robustez: Feel vs. Logic

Hay una distinción crítica que siempre mantengo en mente al prototipar: una cosa es que el flujo sea lógico y otra muy distinta es cómo se *siente* la aplicación. Mientras que la baja fidelidad valida la lógica ("¿puedo llegar al final?"), la alta fidelidad valida la robustez ("¿se siente como una herramienta profesional?"). 

Para el proyecto de AsDeporte, donde buscábamos consolidar el liderazgo en el mercado mexicano, la "sensación" de la app era tan importante como su funcionalidad. Planeé la implementación de interacciones detalladas para que el prototipo no se sintiera como un simple pase de diapositivas estáticas. Quería simular:

1.  **Estados de carga y transiciones:** Para manejar la ansiedad del usuario durante procesos de inscripción.
2.  **Validaciones en tiempo real:** Para observar la reacción del usuario ante errores de entrada de datos.
3.  **Microinteracciones sutiles:** Esos pequeños detalles visuales que confirman una acción y que definen la calidad percibida.

Al final del día, esta apuesta por la alta fidelidad fue una inversión de esfuerzo inicial para blindar el éxito de las pruebas. Tenía la seguridad de que la arquitectura era correcta gracias al trabajo previo, lo que me permitía ahora concentrarme en la capa de interacción final con la confianza de que no estaba "maquillando" un producto roto, sino puliendo una solución sólida.

#### Próximo paso:

Con la estrategia de fidelidad definida y la justificación de negocio blindada, el siguiente reto era puramente operativo pero no menos crítico: ¿Cómo construir este simulacro de alta fidelidad sin que el archivo de Figma se volviera inmanejable? Sabía que para simular la complejidad de Tribu/Plus y los flujos de inscripción, necesitaba algo más que simples enlaces entre pantallas. El momento de enfrentarme al **ECOSISTEMA TÉCNICO: SELECCIÓN Y CONFIGURACIÓN DE FIGMA** había llegado, y con él, la necesidad de estructurar un prototipo que fuera tan flexible como el producto real.

### Parte 3: ECOSISTEMA TÉCNICO: SELECCIÓN Y CONFIGURACIÓN DE FIGMA

#### La infraestructura detrás del simulacro

Tener 37 mockups de alta fidelidad sobre el lienzo es una victoria visual, pero también una responsabilidad técnica inmensa. En ese momento, frente a la pantalla, entendí que si no configuraba un ecosistema de trabajo robusto, el prototipo se convertiría en un lastre en lugar de una herramienta de validación. No se trataba simplemente de "conectar pantallas"; se trata de construir un sistema vivo que soporte la iteración constante. Sabía que, en cuanto empezaran las pruebas con usuarios, surgirían cambios. Si mi infraestructura era rígida, cada ajuste en un botón me obligaría a rehacer decenas de conexiones manuales. Mi prioridad fue despejar el camino para que la transición entre el diseño estático y la lógica de interacción fuera inmediata, eliminando cualquier fricción que pudiera retrasar el feedback del negocio.

#### Figma como centro neurálgico: Eficiencia sobre fragmentación

Elegí **Figma** como mi centro de operaciones por una razón puramente estratégica: la eliminación del riesgo de desincronización. En proyectos anteriores, el flujo de trabajo fragmentado —diseñar en una herramienta y prototipar en otra como InVision— generaba una "deuda de actualización" insostenible. Al mantener los Mockups de Alta Fidelidad y el motor de prototipado en el mismo ecosistema, me aseguré de que cualquier cambio en los componentes atómicos se propagara instantáneamente al prototipo.

Esta decisión fue un ejercicio de eficiencia operativa para el MVP. Al utilizar los **Component Sets** y las **Variants** que ya habíamos definido en la fase de UI, pude alimentar el prototipo con estados reales (hover, pressed, disabled) sin necesidad de duplicar pantallas de forma redundante. Mi razonamiento fue claro: necesitaba que el prototipo fuera "ligero" en términos de estructura de archivos, pero visualmente denso y funcional. Si un usuario en la prueba decidía interactuar con un campo de formulario en el flujo de inscripción, el sistema debía responder con la precisión de un producto final, y Figma me permitía lograr esa fidelidad sin salir del lienzo de diseño.

#### El trade-off de la profundidad lógica: Por qué descarté ProtoPie y Axure

Durante la fase de planificación, evalué seriamente herramientas de alta complejidad como ProtoPie o Axure. Estas plataformas son excepcionales cuando necesitas simular variables matemáticas complejas o condicionales avanzados, como un motor de búsqueda con filtros dinámicos reales. Sin embargo, tras analizar el Documento de Alcance del MVP y los flujos críticos de "búsqueda e inscripción" y "gestión de perfil", tomé una decisión ejecutiva: el coste en tiempo de exportación y la curva de aprendizaje para este sprint específico no compensaban el beneficio.

> **Insight de Diseño:** El exceso de herramientas puede secuestrar el tiempo de análisis. En un entorno de entrega ágil, la herramienta que te permite fallar y corregir más rápido es, por definición, la herramienta superior.

Opté por la agilidad. Las funcionalidades nativas de Figma, especialmente con las mejoras en **Smart Animate** y los **Overlays**, eran más que suficientes para validar los modelos mentales de nuestros atletas. No necesitaba un sistema que procesara datos reales; necesitaba un simulacro que provocara reacciones reales. Al quedarme en Figma, gané la capacidad de responder a cambios de último minuto solicitados por los stakeholders en minutos, algo que en ProtoPie me habría tomado horas de re-configuración lógica.

#### La calma antes de la tormenta: Auditoría y limpieza técnica

Antes de "tirar el primer cable", realicé una revisión forense de todos los activos disponibles. No permití que el entusiasmo por ver el diseño en movimiento me hiciera saltar este paso. Me sumergí en una limpieza técnica profunda: organicé las capas, estandaricé el nombrado de los frames y verifiqué que cada pantalla estuviera alineada con los **Diagramas de Flujos de Usuario** que habíamos trazado previamente.

Esta etapa de preparación fue vital para mapear mentalmente las **Especificaciones de Diseño de Interacción (IxD)** sobre el lienzo. Me aseguré de que:
*   Los nombres de las capas fueran consistentes para que *Smart Animate* reconociera los elementos y creara transiciones fluidas.
*   Los componentes tuvieran sus propiedades de prototipado pre-configuradas (como el scroll interno en listas de eventos).
*   El archivo estuviera segmentado en páginas claras: una para los componentes maestros, otra para los flujos de "Happy Path" y una sección de "Sandbox" para probar microinteracciones aisladas.

#### Blindando la escalabilidad y evitando la deuda técnica

Mi enfoque fue construir un prototipo que no fuera un "desechable". Al integrar los estados de los componentes definidos en el UI Kit, blindé la escalabilidad del proyecto. Si mañana decidíamos cambiar el radio de los bordes de todos los botones de la plataforma AsDeporte, el prototipo se actualizaría automáticamente. Esta mentalidad de "Diseño de Sistemas" es lo que separa un prototipo de alta fidelidad profesional de un simple pase de diapositivas interactivo.

La configuración del entorno terminó con la creación de los **Prototyping Flows** iniciales. Definí puntos de entrada claros para cada tarea de usuario, asegurándome de que el rendimiento del navegador no se viera comprometido. Sabía que una plataforma lenta durante una prueba de usabilidad puede sesgar los resultados, haciendo que el usuario perciba frustración técnica donde debería haber fluidez de diseño. Con el ecosistema optimizado y los activos limpios, el escenario estaba listo para la parte más densa del proceso.

**Próximo paso:**

Con la maquinaria de Figma perfectamente aceitada y los componentes listos para la acción, me enfrenté al tablero de dibujo con una pregunta que siempre genera tensión: ¿cómo conectar más de 30 pantallas sin que el flujo se convierta en un laberinto de callejones sin salida? El reto ya no era técnico, sino arquitectónico. Sabía que el éxito de la validación dependía de que el "cableado" del flujo principal fuera tan invisible como infalible, y el momento de trazar el **ARQUITECTURA DE NAVEGACIÓN: EL CABLEADO DEL HAPPY PATH** había llegado.

### Parte 4: ARQUITECTURA DE NAVEGACIÓN: EL CABLEADO DEL HAPPY PATH

#### El mapa de hilos azules: de la estática al movimiento

Me encontraba frente a un lienzo de Figma que albergaba más de 30 pantallas de alta fidelidad. Visualmente, el trabajo era impecable: el sistema de diseño que habíamos consolidado en la fase anterior se sentía sólido, coherente y alineado con la identidad de AsDeporte. Sin embargo, en ese momento, el producto era una cáscara vacía. Tenía ante mí una colección de estados ideales, pero carecían de la dimensión temporal y cinética que define a una herramienta real. Sabía que si presentaba esto a los usuarios en su estado actual, obtendría opiniones sobre los colores o la tipografía, pero no validaría lo más importante: si la arquitectura de navegación que habíamos planteado era capaz de sostener la carga cognitiva de un atleta que solo quiere inscribirse a una carrera sin fricciones.

La transición a la **arquitectura de navegación** no fue un proceso de dibujo, sino de ingeniería lógica. Mi primer impulso fue abrir la pestaña de "Prototype" en Figma y empezar a tirar cables, pero me detuve. He visto demasiados prototipos colapsar bajo su propia complejidad por no tener un plan de cableado claro. En su lugar, decidí que esta fase debía ser una traducción literal de los flujos de usuario que habíamos mapeado semanas atrás. El reto era transformar esos diagramas abstractos en un "cableado" tangible que soportara el **Happy Path** del MVP sin que el usuario sintiera las costuras de la simulación.

#### El rigor de la revisión previa: blindando la lógica (Paso 1)

Antes de conectar el primer botón, realicé una revisión exhaustiva de los artefactos de diseño siguiendo la pauta técnica que documenté en el proceso de **creación de prototipos**. No podía permitirme inconsistencias entre lo que habíamos prometido en el **Documento de Alcance del MVP Validado** y lo que el usuario experimentaría en el prototipo. Abrí en mi monitor secundario los **Diagramas de Flujos de Usuario** de la Fase 1 y los utilicé como una lista de verificación quirúrgica.

Cada nodo de esos diagramas representaba un compromiso con la experiencia del usuario. Si el flujo decía que después de filtrar una búsqueda el usuario debía aterrizar en una lista de resultados con el filtro aplicado, mi tarea era asegurar que el prototipo reflejara esa secuencia exacta. Esta fase de revisión fue vital para identificar piezas faltantes; descubrí, por ejemplo, que nos faltaba una pantalla intermedia de confirmación antes de la pasarela de pago que era crucial para la percepción de seguridad. Al cruzar los mockups con las **Especificaciones de Diseño de Interacción (IxD)**, me aseguré de que cada transición planificada tuviera su contraparte visual lista para ser "activada".

#### Activando la interfaz: triggers y hit areas (Paso 2)

Con la lógica clara, pasé a la fase de "activación" de componentes. Aquí es donde el criterio de diseño se vuelve táctil. No se trata solo de hacer clic; se trata de cómo responde el sistema. Siguiendo las definiciones de interacción que establecimos, comencé a identificar cada botón, enlace de texto y elemento de lista que debía ser interactivo.

> **Decisión de diseño:** Opté por definir disparadores (*triggers*) de tipo *On Click* con transiciones mayoritariamente *Instant* o *Dissolve*. Mi razonamiento fue que, en esta etapa de validación de la arquitectura, la velocidad de respuesta era prioritaria sobre la ornamentación. Necesitaba que el usuario sintiera que la aplicación era ágil, eliminando cualquier latencia artificial que pudiera sesgar las pruebas de usabilidad.

Un detalle técnico que cuidé con obsesión fue la definición de las **áreas de clic (hit areas)**. En una aplicación móvil para deportistas, que a menudo interactúan con el dispositivo en movimiento o con fatiga, las áreas de interacción no pueden limitarse al tamaño del icono. Amplié sistemáticamente los *bounding boxes* de cada elemento interactivo en Figma para asegurar que la navegación fuera cómoda y que no se produjeran errores de precisión que frustraran al participante durante la prueba. Cada botón de "Inscribirme" o icono de "Filtro" fue blindado para responder al primer toque, emulando la confianza que debe transmitir un producto final.

#### El túnel de conversión: cableando el núcleo del negocio (Paso 3)

El corazón de este proyecto es el flujo de búsqueda e inscripción. Es el momento donde el valor de AsDeporte se materializa en una transacción. Al cablear este túnel, mi enfoque fue crear una sensación de progresión imparable. Conecté la pantalla de inicio con el input de búsqueda, asegurándome de que el salto a los resultados se sintiera natural y directo.

Para el proceso de inscripción, implementé una secuencia de pantallas que funcionaban como un **stepper** visual. Cada paso del formulario fue vinculado cuidadosamente: desde la selección de la categoría, pasando por los datos del atleta, hasta llegar al resumen de compra. Mi objetivo era que el usuario percibiera que estaba avanzando en un proceso controlado, no perdido en un laberinto de campos.

*   **Secuencia crítica:** Home > Búsqueda > Resultados de Eventos > Detalle del Evento > Formulario de Inscripción > Confirmación.
*   **Lógica de transición:** Utilicé *Push* lateral para las pantallas de avance en el formulario, reforzando mentalmente la idea de ir "hacia adelante" en el proceso.
*   **Validación de intención:** Me aseguré de que el botón de acción principal (*CTA*) estuviera siempre en la misma zona visual para reducir la carga cognitiva durante el túnel de conversión.

Este es el flujo que sostiene el éxito del MVP. Si el cableado aquí fallaba, el resto del prototipo no tendría sentido, por lo que probé esta ruta al menos diez veces antes de pasar a la navegación global.

#### Navegación persistente y el seguro de vida del usuario (Paso 4)

Una vez asegurado el flujo principal, me centré en la **navegación global**. En una plataforma con tanta densidad de contenido como AsDeporte, la **Tab Bar** es el ancla de seguridad del usuario. Implementé una navegación persistente que permitiera saltar entre las secciones de Home, Búsqueda, Perfil y Tribu/Plus desde cualquier nivel de la jerarquía.

Sin embargo, mi mayor preocupación no fueron los saltos hacia adelante, sino los de retorno. Un error común en prototipos de este nivel es crear "trampas lineales" donde el usuario llega a una pantalla de detalle y no tiene forma de volver atrás sin reiniciar todo el flujo. Me impuse la disciplina de incluir y probar el **botón "Atrás"** en cada una de las 37 pantallas.

> **Aprendizaje de la trinchera:** La navegación de retorno es lo que hace que un prototipo se sienta como un producto y no como una presentación de diapositivas. Al asegurar que cada pantalla tuviera un punto de salida coherente hacia el nivel jerárquico superior, eliminé la ansiedad que suelen sentir los usuarios cuando temen "romper" el prototipo.

#### Puntos de decisión y bifurcaciones estratégicas (Paso 5)

El comportamiento humano no es lineal, y el prototipo debía reflejar eso. Abordé las bifurcaciones críticas donde el usuario debe tomar una decisión. Por ejemplo, en el flujo de inscripción, el usuario podía elegir entre iniciar sesión para autocompletar sus datos o continuar como invitado. Cableé ambas rutas para entender, durante las pruebas, cuál era la fricción real en cada escenario.

Para estas decisiones rápidas, utilicé **overlays** y modales, basándome en el paso 5 del proceso técnico que dictaba la implementación de interacciones detalladas. En lugar de cambiar de pantalla para una acción simple como filtrar una lista, configuré modales que aparecían sobre el contexto actual. Esto no solo ahorra tiempo de diseño, sino que mantiene al usuario ubicado espacialmente dentro de la aplicación, una característica fundamental para la retención en interfaces móviles complejas.

#### Reflexión sobre la arquitectura invisible

Al terminar este cableado, me di cuenta de que había construido una red de conexiones casi invisible. Y esa es, precisamente, la marca de una arquitectura de navegación superior. Si el usuario no nota el cableado mientras navega por el prototipo de alta fidelidad, es porque el flujo es natural y respeta sus modelos mentales.

La decisión de optar por **Alta Fidelidad** desde este punto, tal como definimos en el paso 2 de la guía de creación de prototipos, fue estratégica. Necesitaba que el feedback de los atletas en la Fase 3 se centrara en la utilidad de la herramienta y en la fluidez del negocio, no en las limitaciones técnicas de la simulación. Al tener un "Happy Path" perfectamente cableado, el escenario estaba listo para añadir la capa de realismo que realmente engaña al cerebro: la respuesta dinámica de la interfaz.

**Próximo paso:**

Con la estructura de navegación ya sólida y el usuario pudiendo viajar del punto A al punto B sin interrupciones, me di cuenta de que el prototipo seguía sintiéndose "demasiado perfecto". En el mundo real, los botones cambian de color al tocarlos, los formularios muestran errores y las transiciones tienen un peso visual que comunica éxito o fallo. Me pregunté: ¿será suficiente este cableado básico para generar la confianza necesaria en una pasarela de pago? Sabía que no. El siguiente reto era inyectar vida en cada componente, y el momento de abordar la **FIDELIDAD DE INTERACCIÓN: MICROINTERACCIONES Y ESTADOS DINÁMICOS** había llegado.

### Parte 5: FIDELIDAD DE INTERACCIÓN: MICROINTERACCIONES Y ESTADOS DINÁMICOS

#### La trampa de la perfección estática

Al terminar el cableado básico del prototipo, me detuve a observar el flujo de inscripción. Podía ir desde la búsqueda del evento hasta la confirmación de pago, pero la experiencia se sentía inerte, casi fantasmal. En el diseño de producto, existe un "valle inquietante" de los prototipos: cuando algo se ve demasiado real pero se comporta de forma estática, el cerebro del usuario detecta la mentira y se desconecta. Sabía que si presentaba el prototipo así en las pruebas de usabilidad, el feedback se contaminaría con dudas técnicas sobre si un botón "estaba funcionando" o si la página "se había trabado".

Para romper esa barrera, decidí que no era suficiente con que el prototipo fuera navegable; tenía que ser **reactivo**. Mi razonamiento fue estratégico: necesitaba que los atletas de AsDeporte sintieran la misma respuesta táctil que tendrían en la aplicación final. Pasé de la vinculación estructural a una fase de implementación de interacciones detalladas, donde cada clic debía generar una consecuencia visual inmediata. Mi objetivo era blindar la "suspensión de la incredulidad". Si un usuario pasaba el cursor sobre una tarjeta de la Tribu, la interfaz debía reconocer su presencia. Si intentaba avanzar sin llenar un campo, la interfaz debía protestar. Solo así el feedback de la Fase 3 sería sobre la propuesta de valor y no sobre la herramienta de Figma.

#### Parametrización de la respuesta táctil: Estados y Variantes

Comencé interviniendo los componentes críticos del MVP B2C para inyectarles vida. No me limité a conectar pantallas; me sumergí en la biblioteca de componentes para configurar estados dinámicos de **Hover**, **Pressed** y **Selected**. Utilicé la funcionalidad de *Variants* y *Interactive Components* de Figma para que esta lógica fuera inherente al átomo del diseño y no una conexión manual repetitiva.

*   **Botones de Acción Primaria:** Configuré el botón de "Inscribirse" para que, al recibir el *Hover*, sufriera un cambio sutil en su elevación y saturación de color. Al presionarlo (*Pressed*), añadí un estado de retroalimentación visual instantánea. Esto no es solo estética; es comunicación funcional que reduce la carga cognitiva del usuario al confirmar que el sistema ha recibido su instrucción.
*   **Tarjetas de Evento:** Para el flujo de búsqueda, parametricé las tarjetas para que reaccionaran al cursor. Quería que el atleta sintiera que el contenido era accionable antes de hacer clic.
*   **Selectores de Talla y Categoría:** En el flujo de inscripción, los estados *Selected* fueron críticos. Me aseguré de que, al elegir una categoría de carrera, el cambio visual fuera lo suficientemente drástico como para que el usuario no tuviera que dudar de su elección.

> **Insight de Diseño:** Un prototipo que no reacciona al tacto obliga al usuario a pensar en la interfaz. Un prototipo reactivo le permite pensar en su tarea. Mi decisión de invertir tiempo en *Interactive Components* fue para eliminar ese ruido mental antes de las pruebas.

#### La arquitectura del error: Simulando la lógica de formularios

Uno de los mayores riesgos en una plataforma de eventos deportivos es el abandono en el formulario de inscripción debido a errores no detectados. Para validar esto, rechacé la idea de un "flujo feliz" perfecto y decidí **simular la lógica de validación de datos**. No quería que el usuario simplemente llenara campos; quería que experimentara qué sucede cuando se equivoca.

Siguiendo las pautas de comportamiento que definí para el sistema, configuré el prototipo para que mostrara mensajes de error si se intentaba avanzar con campos obligatorios vacíos. Para lograrlo en Figma sin una base de datos real, utilicé una técnica de capas ocultas y *triggers* específicos:
1.  Creé una versión del formulario con indicadores de error en rojo y microcopy de auxilio.
2.  Configuré el botón de "Continuar" para que, en una primera instancia, disparara un cambio de estado hacia la versión de error.
3.  Solo después de que el usuario interactuara con el campo "corregido" (simulado mediante un clic en el input), el botón permitía el avance al siguiente paso.

Esta maniobra me permitió preparar el terreno para observar la resiliencia del usuario. ¿Entienden por qué el sistema los detiene? ¿El mensaje de error es lo suficientemente claro para que no abandonen el proceso de pago? Al prototipar la fricción, estaba diseñando para la realidad, no para el caso ideal.

#### Coreografía de la interfaz: Overlays y transiciones espaciales

La jerarquía visual no solo se construye con tamaños y colores, sino con el movimiento. Para los componentes de alto nivel, como los modales de confirmación y los filtros de búsqueda, decidí utilizar **Overlays** con transiciones calculadas. No quería que los elementos simplemente aparecieran en pantalla; quería que tuvieran una procedencia lógica.

*   **Filtros de Búsqueda:** Configuré el menú de filtros para que se deslizara lateralmente (*Move In*) desde la derecha. Esto le comunica al usuario que está "encima" de su búsqueda actual y que puede regresar fácilmente cerrando el panel.
*   **Modales de Confirmación de Pago:** Para el momento crítico de la transacción, utilicé un *Dissolve* suave combinado con un fondo oscurecido (*Background Blur*). Esta transición crea un enfoque absoluto en la decisión final, eliminando distracciones del resto de la interfaz.
*   **Menús de la Tribu:** Los despliegues de categorías los configuré como *Overlays* posicionados manualmente para asegurar que la relación entre el botón de origen y el menú desplegado fuera espacialmente coherente.

Cada transición fue calibrada para durar entre 200ms y 300ms. Menos de eso se siente abrupto; más de eso se siente lento. Esta precisión técnica es la que transforma una secuencia de imágenes en una aplicación que se siente "terminada" y profesional ante los ojos de un stakeholder o un usuario de prueba.

#### El detalle que engaña al ojo: Smart Animate y micro-momentos

Para elevar la fidelidad al máximo nivel posible en Figma, apliqué microinteracciones utilizando **Smart Animate**. Estas son las pequeñas animaciones que el usuario no nota conscientemente pero que su cerebro agradece. Por ejemplo, en el paso de selección de kit de corredor, configuré la transición para que los elementos de la lista se desplazaran suavemente al cambiar de categoría, en lugar de un corte seco.

También implementé simulaciones de estados de carga (*Skeleton screens* o *Spinners*) entre pasos pesados, como el procesamiento del pago. Aunque en el prototipo la transición es instantánea, decidí añadir un retraso programado (*After Delay*) de 1.5 segundos que muestra una animación de carga antes de revelar la pantalla de éxito. ¿Por qué añadir una demora artificial? Porque en el mundo real, un pago que se confirma en 0 milisegundos genera desconfianza. Necesitaba validar si ese tiempo de espera era tolerable o si generaba ansiedad en el atleta.

#### Diseñar para el vacío: Estados alternativos y resiliencia

Finalmente, me aseguré de que el prototipo no fuera un callejón sin salida cuando las cosas no salían como se esperaba. Me enfoqué en el paso 6 de mi proceso de creación: la inclusión de **casos de borde y estados vacíos**.

Diseñé y vinculé específicamente una pantalla de "No se encontraron resultados" para el buscador de eventos. Es muy fácil probar una búsqueda que funciona, pero es mucho más valioso observar qué hace el usuario cuando su búsqueda falla. ¿Usa los filtros sugeridos que puse en el estado vacío? ¿Regresa al inicio? También incluí rutas de salida claras: cada modal y cada pantalla de error contaba con un botón de "Cerrar" o "Volver" perfectamente funcional. Mi objetivo era que, sin importar qué clic hiciera el usuario durante la prueba, el prototipo siempre tuviera una respuesta coherente y nunca se quedara "congelado".

Esta atención obsesiva al detalle en la interacción no fue un ejercicio de vanidad visual. Fue una decisión de ingeniería de diseño para asegurar que, cuando llegáramos a la validación con usuarios, estuviéramos probando el producto y no las costuras del prototipo. Al terminar, tenía una herramienta que no solo se veía como AsDeporte, sino que respiraba como una aplicación real.

**Próximo paso:**

Con el prototipo ya vibrando y reaccionando a cada interacción, sentí que la simulación era casi perfecta. Sin embargo, al recorrer el flujo de pago por décima vez, una duda me asaltó: ¿qué pasaría si la tarjeta del usuario es rechazada? ¿O si la sesión expira justo antes de confirmar? Había construido un artefacto brillante, pero quizás demasiado optimista. Me di cuenta de que para que este diseño fuera verdaderamente senior, necesitaba probar su resistencia en los momentos de mayor tensión. Era hora de dejar de diseñar para el éxito y empezar a abordar el **DISEÑO DE RESILIENCIA: CASOS DE BORDE Y FLUJOS DE ERROR**.

### Parte 6: DISEÑO DE RESILIENCIA: CASOS DE BORDE Y FLUJOS DE ERROR

#### La fragilidad de la ruta feliz

Un prototipo que solo funciona cuando todo sale bien no es una herramienta de validación; es un ejercicio de vanidad. Al terminar de pulir las microinteracciones del flujo principal de inscripción, me detuve a observar el laberinto de hilos azules en Figma y sentí una punzada de desconfianza. Tenía frente a mí una "ruta feliz" impecable, donde cada clic llevaba al éxito y cada formulario se llenaba por arte de magia. Pero en el mundo real, los usuarios tienen prisa, sus tarjetas de crédito fallan, su conexión a internet es inestable y, a menudo, llegan a secciones de la plataforma donde todavía no han generado ninguna actividad. 

Entendí que para que este trabajo tuviera el rigor senior que el proyecto de AsDeporte exigía, debía romper la ilusión de perfección. Mi responsabilidad no era solo demostrar que el sistema era funcional, sino asegurar que fuera resiliente. Si enviábamos este prototipo a pruebas de usabilidad ocultando los errores, estaríamos obteniendo un feedback sesgado y peligroso. Decidí que el artefacto debía ser capaz de fallar con elegancia. Esta transición de la estética a la resiliencia me obligó a cuestionar cada pantalla: ¿qué pasa si aquí no hay datos?, ¿cómo se recupera el atleta si el sistema rechaza su pago?, ¿qué ve un usuario nuevo en la sección de 'Tribu' si aún no tiene amigos? Diseñar para el error es, en última instancia, un acto de empatía técnica.

#### El diseño del vacío como estrategia de onboarding

Siguiendo la lógica de construcción de un sistema robusto, mi primer movimiento fue abordar los estados vacíos (*empty states*). Es común que los diseñadores ignoren estas pantallas porque no son "atractivas" en un portafolio, pero para un usuario nuevo en AsDeporte, el vacío es la primera experiencia real. Me enfoqué específicamente en las secciones de "Mis Inscripciones" y "Favoritos". En lugar de dejar un lienzo en blanco que generara una sensación de abandono o falla del sistema, articulé estos espacios como oportunidades de guía.

En Figma, configuré variantes de componentes para que el evaluador pudiera alternar entre una vista con contenido y una vista vacía. Para "Mis Inscripciones", diseñé una ilustración sutil acompañada de un microcopy motivador: "Aún no tienes metas en el horizonte. ¡Encuentra tu próximo reto aquí!". Debajo, incluí un botón de acción (*call-to-action*) directo al buscador de eventos. Mi razonamiento fue claro: un estado vacío nunca debe ser un callejón sin salida; debe ser un puente hacia el valor del producto. Hice lo mismo con la sección de "Favoritos" en el perfil del atleta, asegurándome de que el usuario entendiera no solo que la sección estaba vacía, sino *cómo* empezar a llenarla. Esta atención al detalle en la arquitectura de la información inicial es lo que diferencia una interfaz decorativa de un producto pensado para el ciclo de vida real del usuario.

#### Simulando la fricción: El arte de fallar en el pago

La verdadera prueba de fuego para la confianza del usuario en AsDeporte ocurre en el embudo de conversión, específicamente en el flujo de pago. Un error mal gestionado aquí no solo frustra al atleta, sino que destruye la credibilidad de la marca y resulta en una pérdida directa de ingresos. Por ello, decidí implementar una simulación de errores y validaciones críticas que fuera lo suficientemente realista como para provocar una reacción genuina durante las pruebas.

No me limité a mostrar un mensaje estático. Utilicé las capacidades de *Prototyping* de Figma para crear una lógica de validación en los campos de *input*. Si el usuario intentaba avanzar en el registro sin completar campos obligatorios o introducía un formato de correo inválido, el prototipo disparaba una micro-animación de sacudida (*shake*) en el campo afectado, acompañada de una etiqueta roja con instrucciones precisas. 

> **Decisión de diseño:** Opté por no usar alertas genéricas del sistema. Cada mensaje de error fue redactado para ser humano y resolutivo. En el caso de una tarjeta rechazada, configuré un *overlay* que simulaba la respuesta del banco, ofreciendo al usuario la opción de reintentar con otro método o verificar sus datos. Mi objetivo era observar si el usuario leía el error o si entraba en un ciclo de clics frenéticos por frustración. Validar esta recuperación es vital para reducir la tasa de abandono en producción.

#### Resiliencia en la búsqueda: Cuando el sistema dice "no"

Uno de los momentos más críticos que documenté en el proceso de construcción fue el manejo de los escenarios de búsqueda sin resultados. Es estadísticamente inevitable que un usuario busque un evento específico que ya pasó o que no existe en la base de datos actual. Siguiendo las directrices de manejo de casos de borde, rechacé la idea de mostrar una simple pantalla de "0 resultados".

Construí una experiencia de búsqueda resiliente. Cuando el motor de búsqueda del prototipo no encontraba coincidencias exactas, la interfaz reaccionaba mostrando una pantalla de "No se encontraron resultados", pero inmediatamente debajo, el sistema ofrecía "Sugerencias para ti" basadas en eventos populares o categorías similares. También integré un botón prominente para "Limpiar filtros", anticipando que el usuario podría haber restringido demasiado su búsqueda inicial. En la configuración técnica de Figma, esto requirió crear un flujo alternativo donde el teclado virtual se ocultaba para dar paso a estas recomendaciones. Esta maniobra asegura que el usuario permanezca dentro del ecosistema de AsDeporte, transformando una búsqueda fallida en un momento de descubrimiento accidental.

#### Blindaje técnico y la ruta de escape

Para cerrar esta fase de construcción de resiliencia, sometí al prototipo a una revisión interna rigurosa, actuando como mi propio "abogado del diablo". Me aseguré de que el artefacto fuera capaz de soportar interacciones erráticas. En un test de usabilidad, los usuarios no siempre siguen el camino que uno trazó; a menudo intentan retroceder en momentos inesperados o cerrar modales antes de que la animación termine.

Blindé la navegación vinculando obsesivamente cada botón de "atrás" y cada icono de "X" en los cierres de modales. No permití que existiera una sola pantalla en el prototipo que no tuviera una ruta de escape clara. En las pantallas de error que había creado, verifiqué que el usuario pudiera volver al paso anterior sin perder la información que ya había ingresado (simulando la persistencia de datos). Pedí a un colega del equipo de diseño que intentara "romper" el prototipo, buscando *hotspots* muertos o hilos de navegación que llevaran a pantallas desactualizadas. 

Esta fase de "prueba de balas" no fue un lujo, sino una necesidad técnica. Un prototipo senior debe ser invisible: si el usuario nota las costuras del software durante la prueba, deja de evaluar la experiencia y empieza a evaluar la herramienta. Al finalizar, el prototipo no solo representaba la visión estética de AsDeporte, sino que poseía la robustez necesaria para enfrentar la imprevisibilidad del comportamiento humano.

#### Reflexión sobre el diseño de sistemas de comportamiento

Al observar el resultado final de esta etapa, reafirmé una de mis convicciones más profundas: nuestra labor no es diseñar interfaces, sino diseñar sistemas de comportamiento. El "Happy Path" es solo una fracción de la experiencia del usuario. El verdadero valor que aporto como diseñador se manifiesta en esos momentos de tensión donde algo falla. Anticipar la confusión, mitigar la ansiedad del error y transformar un estado vacío en una invitación, son las decisiones que construyen una relación de confianza a largo plazo entre el atleta y la plataforma. 

Había logrado transformar un conjunto de mockups estáticos en un entorno de pruebas forense. El prototipo ahora respiraba, fallaba y se recuperaba. Estaba listo para ser puesto a prueba, pero antes de invitar a los usuarios externos, sabía que faltaba un último filtro de calidad: una evaluación técnica que garantizara que cada cable que conecté en Figma fuera capaz de resistir el estrés de una sesión de validación real.

**Próximo paso:**

Con los flujos de error blindados y los estados vacíos convertidos en oportunidades, el prototipo parecía una roca. Sin embargo, la complejidad de las conexiones que había creado en Figma empezaba a pasar factura al rendimiento del archivo. Antes de abrir la sesión con el primer usuario, necesitaba realizar un **CONTROL DE CALIDAD: LA PRUEBA DE ESTRÉS DEL DISEÑADOR**. Me asaltaba una duda técnica: ¿aguantaría el prototipo una navegación no lineal sin romperse o volverse lento? Era el momento de verificar que la arquitectura que construí fuera tan sólida en su ejecución técnica como lo era en su lógica de diseño.

### Parte 7: CONTROL DE CALIDAD: LA PRUEBA DE ESTRÉS DEL DISEÑADOR

#### La fragilidad de la telaraña: El primer clic de realidad

Un prototipo de alta fidelidad en Figma es, por definición, un engaño visual sostenido por una telaraña de cables invisibles. Basta con que un solo *hotspot* esté desplazado dos píxeles o que una transición de *Smart Animate* entre en conflicto con un componente anidado para que la ilusión se rompa. Me ha pasado antes: estás en medio de una sesión de validación, el usuario hace una pregunta crítica, intenta retroceder y se encuentra con una pantalla en blanco o un botón que no responde. En ese segundo, dejas de evaluar la usabilidad del producto para empezar a pedir disculpas por la herramienta. No podía permitir que eso sucediera con la plataforma de AsDeporte.

Al terminar de integrar los casos de borde y los flujos de error, me encontré con un archivo de Figma que empezaba a mostrar signos de fatiga técnica. La complejidad de las interacciones para la inscripción y la gestión de la "Tribu" había creado una red de conexiones tan densa que el rendimiento del prototipo en el navegador comenzaba a degradarse. Mi razonamiento en este punto fue puramente preventivo: antes de invitar a nadie a ver el trabajo, necesitaba ejecutar una **auditoría forense de estabilidad**. La depuración técnica no es un paso opcional; es una cuestión de respeto hacia el tiempo del usuario y hacia la integridad de la investigación que estábamos a punto de iniciar.

#### La autopsia del flujo: Buscando el error antes que el usuario

Comencé mi revisión personal aplicando un rigor casi obsesivo. Abrí el modo de presentación en una pantalla secundaria y, con el diagrama de flujos de usuario en la principal, inicié un recorrido manual que duró horas. No me limité a seguir la "ruta feliz"; mi objetivo era romper el prototipo. 

*   **Verificación de puntos de retorno:** Recorrí cada pantalla de los flujos de búsqueda e inscripción asegurándome de que el botón de "atrás" no fuera un simple enlace genérico, sino que respetara la jerarquía lógica de navegación. Encontré tres pantallas en el flujo de pago donde el retorno llevaba al usuario al inicio de la búsqueda en lugar de al paso anterior. Lo corregí de inmediato; ese tipo de fricción técnica en un test de usabilidad se interpreta erróneamente como una falla en la arquitectura de información, cuando en realidad es solo un error de vinculación.
*   **Consistencia de Microinteracciones:** Utilicé el modo de inspección para detectar saltos visuales bruscos. Me di cuenta de que algunas transiciones entre estados de los campos de formulario (de *default* a *active*) no tenían configurado el *Smart Animate* de forma consistente, lo que generaba un parpadeo molesto. Ajusté las curvas de aceleración para que la experiencia se sintiera fluida y "nativa", eliminando cualquier distracción visual que pudiera sesgar la percepción de calidad del usuario.
*   **Gestión de Overlays:** El flujo de filtros en la búsqueda de eventos utilizaba varios *overlays* complejos. Verifiqué que cada uno tuviera definida correctamente su zona de cierre al hacer clic fuera del modal (*Close when clicking outside*) y que los estados de selección se mantuvieran al cerrar y volver a abrir.

#### El filtro de la mirada ajena: La sesión de Peer Review

Siguiendo la metodología que definí para este proceso, convoqué a una sesión de revisión interna con el Product Manager y un diseñador colega. Mi objetivo no era presentar el diseño para recibir elogios, sino someterlo a un "juicio de pares" sin mi intervención. Les entregué el enlace del prototipo y les pedí que realizaran tres tareas específicas: inscribirse a un evento, editar su perfil de "Tribu" y encontrar un mensaje de error en el proceso de pago.

Fue una sesión reveladora. Al observar cómo interactuaban con el artefacto en silencio, identifiqué puntos ciegos que mi propia familiaridad con el diseño había ocultado. 
> "Si un colega que conoce el proyecto se detiene tres segundos a pensar dónde hacer clic, un usuario final se frustrará en diez." 

El Product Manager detectó que la jerarquía visual en el resumen de la inscripción era confusa cuando se activaba un código de descuento; el *hotspot* de validación era demasiado pequeño y no disparaba el estado de carga que yo había diseñado. Gracias a su feedback, amplié el *hitbox* del botón y me aseguré de que el *feedback* visual fuera instantáneo. Esta mirada externa fue mi primer filtro de realidad; me permitió simplificar conexiones que yo había vuelto innecesariamente complejas por querer simular demasiada interactividad.

#### Cacería de enlaces rotos y optimización de memoria

La parte más técnica de este control de calidad fue la limpieza de la "telaraña" de conexiones en Figma. Al trabajar con prototipos de alta fidelidad, es común que queden enlaces huérfanos de versiones anteriores de los mockups. Utilicé la vista de prototipo para rastrear visualmente cada hilo y eliminar los *dead ends*. 

Uno de los hallazgos más críticos fue descubrir que los estados de los componentes (como los interruptores de notificaciones en el perfil) no se reseteaban correctamente si el usuario reiniciaba el flujo. Esto creaba una inconsistencia lógica: el usuario volvía a empezar pero el sistema "recordaba" selecciones de la sesión anterior, lo cual invalidaría cualquier prueba de aprendizaje o memorabilidad. Implementé una serie de *triggers* de navegación que forzaban el reseteo de los estados de los componentes al volver al punto de inicio del flujo (*Flow Starting Point*).

Finalmente, tomé una decisión estratégica de optimización: sacrifiqué un par de animaciones de transición muy pesadas en el *dashboard* de "Tribu" a favor de una carga más rápida. En un test de usabilidad, el *lag* es el enemigo número uno; prefiero una transición instantánea que funcione siempre a una animación elegante que haga que el prototipo se sienta lento o pesado.

#### El blindaje final: Verificación contra el guion de prueba

Como último paso antes de cerrar esta fase de QA, crucé el prototipo funcional contra la lista de tareas de prueba que habíamos planificado. Necesitaba garantizar que el artefacto permitiera completar el 100% de los objetivos del MVP B2C sin excepciones. 
1.  **Búsqueda y filtrado:** ¿Se pueden seleccionar múltiples filtros y ver los estados vacíos si no hay resultados? **Check.**
2.  **Inscripción completa:** ¿El flujo de pago simula el éxito y el error de tarjeta? **Check.**
3.  **Gestión de Perfil y Plus:** ¿Son navegables todas las secciones de beneficios? **Check.**

Al terminar, sentí esa tranquilidad que solo da el trabajo bien revisado. El prototipo ya no era solo un conjunto de pantallas bonitas; era un entorno de pruebas blindado, estable y técnicamente impecable. Estaba listo para salir de la comodidad de mi entorno de diseño y enfrentarse al juicio más honesto de todos: el del usuario real.

**Próximo paso:**

Con el prototipo verificado y cada enlace funcionando como un reloj suizo, la tensión técnica se disipó para dar paso a una complejidad diferente: la logística. Me di cuenta de que tener el artefacto perfecto no servía de nada si no lograba que los usuarios lo vieran exactamente como yo lo veía en mi monitor de 27 pulgadas. La pregunta ahora era cómo trasladar esta experiencia de alta fidelidad a los dispositivos móviles de los participantes y qué herramientas usar para capturar cada uno de sus gestos y dudas sin interferir en su proceso natural de pensamiento. Había llegado el momento del **DESPLIEGUE Y LOGÍSTICA: PREPARACIÓN PARA EL TEST DE USABILIDAD**.

### Parte 8: DESPLIEGUE Y LOGÍSTICA: PREPARACIÓN PARA EL TEST DE USABILIDAD

#### El abismo entre el lienzo y el dispositivo

Un prototipo perfecto en el lienzo de Figma es una promesa, pero en el dispositivo de un usuario es una prueba de fuego. Tras haber pasado horas verificando cada enlace y cada estado en la tranquilidad de mi monitor de 27 pulgadas, me enfrenté a la realidad de la portabilidad. Tenía ante mí un artefacto técnicamente impecable, pero sabía que cualquier fricción logística —una carga lenta, un enlace roto o una interfaz que se "rompe" por el notch de un teléfono— invalidaría por completo los datos de usabilidad que tanto nos había costado preparar.

Mi hoja de ruta en este punto fue una disciplina de blindaje. No se trataba solo de que el prototipo "funcionara", sino de que fuera **resiliente**. Entendí que la preparación final del prototipo no era un paso administrativo, sino el primer acto de la investigación. Si el entorno de prueba fallaba, no estaríamos evaluando la arquitectura de información de AsDeporte, sino la paciencia del usuario ante un error técnico. Mi prioridad absoluta fue garantizar que el artefacto permitiera completar el 100% de los objetivos del MVP B2C —búsqueda, inscripción y gestión de perfil— sin que la tecnología se interpusiera en el camino.

#### Blindaje técnico: La configuración del entorno de visualización

La primera maniobra fue la generación de los enlaces compartibles. En lugar de simplemente copiar la URL de la barra del navegador, entré en las entrañas de los **Prototype Settings** de Figma para configurar un entorno de visualización controlado. Mi objetivo era eliminar cualquier "ruido" que delatara que estábamos ante una herramienta de diseño y no ante una aplicación real.

*   **Configuración de Starting Points:** Anclé el inicio del prototipo al flujo principal de "Búsqueda e Inscripción". Esto aseguraba que, sin importar cuántas veces el usuario reiniciara la prueba, siempre aterrizaría en la pantalla de inicio definida para el MVP B2C, evitando que se perdiera en pantallas huérfanas o flujos experimentales.
*   **Ocultamiento de la interfaz de Figma:** Ajusté los parámetros para que el enlace de "Solo Vista" ocultara automáticamente la barra lateral de capas, los comentarios y, sobre todo, los **hotspots** al hacer clic. Esta última decisión fue estratégica: si el usuario hace clic en un lugar no interactivo y el sistema le muestra un destello azul indicándole dónde debe presionar, la prueba de usabilidad se contamina. Quería que el usuario buscara la solución de forma orgánica, basándose en la jerarquía visual que habíamos diseñado, no en las pistas del software.
*   **Estabilidad del enlace:** Generé una URL específica de larga duración. Sabía que cualquier cambio menor que tuviera que hacer en los textos o colores de último minuto no debía romper el acceso de los participantes. Este enlace se convirtió en mi versión "congelada" para el despliegue.

#### Ergonomía táctil y la prueba del hardware real

Una vez asegurado el software, pasé a la validación física. Utilicé **Figma Mirror** y cargué el prototipo en tres dispositivos móviles con diferentes características (un iPhone con notch, un Android con barra de navegación inferior y un modelo más antiguo con pantalla pequeña). El objetivo era verificar la **escala 1:1** y la respuesta táctil.

Descubrí que algunos de los **tap targets** que en el monitor parecían adecuados, en la realidad del pulgar humano resultaban algo justos. Especialmente en los filtros de la sección de búsqueda, donde la proximidad de los elementos podía causar errores de selección. Regresé al archivo para calibrar los radios de interacción, asegurando que cada botón crítico para la inscripción tuviera un área activa mínima de 44x44 píxeles, independientemente de su tamaño visual.

También puse especial atención al **Aspect Ratio**. En dispositivos más alargados, la barra de navegación inferior donde residen los accesos a "Tribu/Plus" corría el riesgo de quedar demasiado baja, casi fundiéndose con los gestos del sistema operativo. Ajusté los márgenes de seguridad para que la interfaz se sintiera nativa, evitando que el usuario cerrara accidentalmente el prototipo al intentar navegar por las secciones del perfil.

#### Limpieza forense y optimización de la latencia

Un factor que a menudo se ignora es la **latencia de carga**. Un prototipo de alta fidelidad, con imágenes de eventos deportivos en alta resolución y múltiples estados, puede volverse pesado. Realicé lo que llamo una "limpieza forense" del archivo antes de la entrega final:

1.  **Eliminación de capas fantasma:** Borré todas las capas ocultas y grupos sin nombre que se acumulan durante el proceso creativo. En Figma, aunque una capa no se vea, consume memoria RAM al renderizar el prototipo en un navegador móvil.
2.  **Optimización de activos:** Verifiqué que las imágenes de los eventos estuvieran comprimidas para web. No necesitaba archivos de 5MB para una miniatura de 300px; necesitaba que la pantalla de resultados de búsqueda cargara instantáneamente.
3.  **Purga de flujos:** Eliminé cualquier conexión de prototipado que no perteneciera a los recorridos validados del MVP. Un enlace residual a una versión descartada de la pantalla de pago podría llevar al usuario a un callejón sin salida durante el test.

Esta optimización garantizó que la experiencia de "búsqueda e inscripción" fuera fluida incluso en condiciones de red mediocres, algo vital si consideramos que muchos de nuestros atletas podrían estar consultando la plataforma en entornos con conectividad variable.

#### El test de estrés final: Silenciando las ayudas del sistema

Antes de dar el prototipo por "empaquetado", realicé una sesión de estrés donde simulé ser un usuario errático. Hice clics frenéticos, intenté retroceder en momentos inesperados y busqué romper la lógica de los modales de "Tribu/Plus". 

> **Insight de Diseño:** El éxito de una prueba de usabilidad no reside en que el usuario complete la tarea, sino en observar cómo se recupera de sus propios errores. Si el prototipo es demasiado rígido, no estamos evaluando el producto, sino nuestra capacidad de guiar al usuario por un túnel.

Por ello, me aseguré de que los estados de error y los puntos de retorno (botones de "atrás", iconos de cierre en modales) fueran consistentes en todo el artefacto. Verifiqué que, ante un clic accidental fuera de un área interactiva, el prototipo no parpadeara. Esta decisión forzó al diseño a hablar por sí mismo: si el usuario no sabía qué hacer, el problema era de comunicación visual, no de falta de "pistas" azules en la pantalla.

Al terminar, el artefacto estaba listo. Ya no era una colección de pantallas en la nube; era una herramienta de validación blindada, optimizada para hardware real y protegida contra fallos técnicos. Habíamos transformado la visión estratégica en una experiencia tangible que ahora podía salir al mundo a ser juzgada.

**Reflexión final:**
Preparar la logística de un prototipo es el acto de humildad más necesario del diseñador: es reconocer que tu trabajo no termina cuando el diseño es "bonito", sino cuando es capaz de sobrevivir al uso real sin romperse. En este proyecto, esta fase de despliegue fue la que protegió la integridad de toda la investigación posterior, asegurando que cada minuto invertido con los usuarios se centrara en su experiencia y no en solucionar problemas de carga o enlaces rotos. Aprendí que un diseño que no puede ser probado con facilidad es, en última instancia, un diseño que aún no está terminado.