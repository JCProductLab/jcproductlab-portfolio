# Fase 3: Prototipado y Validación

## Actividad 6: actividad_06_re_testing

### Parte 1: ALINEACIÓN ESTRATÉGICA Y DEFINICIÓN DE OBJETIVOS DE VALIDACIÓN

#### La resistencia al sesgo de confirmación

Habíamos terminado de pulir las iteraciones visuales y los flujos en Figma, pero el silencio del equipo me indicó que no podíamos simplemente pasar a *handoff*. Teníamos frente a nosotros un producto que, sobre el papel y en los prototipos estáticos, resolvía cada uno de los dolores detectados en la primera fase de pruebas. Sin embargo, como diseñador, conozco bien la trampa del sesgo de confirmación: después de pasar semanas diseñando soluciones para problemas específicos, es peligrosamente fácil convencerse de que el problema ha desaparecido solo porque el diseño ha cambiado. Me negaba a enviar este paquete a ingeniería basándome únicamente en mi intuición de que el nuevo *microcopy* o la jerarquía visual de los pagos eran correctos.

La transición hacia esta fase de **Re-Testing** no fue un paso burocrático, sino una maniobra de blindaje. Mi razonamiento estratégico fue claro: la iteración sin validación es solo una hipótesis estética. Necesitábamos cerrar el ciclo de diseño centrado en el usuario con evidencia empírica de rendimiento. El riesgo de no hacerlo era altísimo; si las soluciones para el CURP o la visibilidad de Oxxo no funcionaban, estaríamos escalando problemas de usabilidad al código final, lo que multiplicaría el costo de corrección en el futuro. Por eso, decidí que esta ronda no sería una exploración abierta como la primera, sino un **test de estrés quirúrgico**. No buscábamos descubrir nuevos problemas —aunque estuviéramos abiertos a ello—, buscábamos confirmar con datos que los problemas de alta y media prioridad habían muerto en la mesa de diseño.

#### El rigor de la validación quirúrgica

Para iniciar este proceso, realicé una revisión exhaustiva de la decisión estratégica que habíamos tomado previamente. Me senté a analizar el enfoque recomendado, asegurándome de que cada miembro del equipo entendiera que no estábamos ante una repetición del MVP B2C inicial. Mi objetivo era alinear a todos bajo una premisa: esta ronda es acotada, focalizada y basada en perfiles específicos. 

> El éxito de esta fase no se mediría por la cantidad de hallazgos nuevos, sino por la tasa de resolución de los dolores detectados anteriormente. Si un usuario principiante seguía dudando ante el campo del CURP, nuestra iteración había fracasado, independientemente de lo bien que se viera el *tooltip*.

Utilicé el marco de trabajo previo como brújula para evitar el *scope creep*. En proyectos de esta envergadura, es tentador querer probar "un par de cosas más" que surgieron en el camino, pero mi enfoque fue inflexible: debíamos concentrar los recursos de observación exclusivamente en la efectividad de las soluciones implementadas para los problemas de alta y media prioridad. Esta disciplina garantizaba que el esfuerzo de reclutamiento y el tiempo de las sesiones se optimizaran para los perfiles de usuario que realmente sufrieron las fricciones originales. No necesitábamos a cualquier atleta; necesitábamos a aquellos que representaran fielmente las dudas del principiante o las expectativas del miembro Plus.

#### Despejando la desconfianza: El caso del CURP (PU-03)

Uno de los puntos más críticos que heredamos de las pruebas iniciales fue el bloqueo sistemático en el campo del CURP durante la inscripción. Los usuarios de los perfiles **Principiante** y **Ocasional** mostraban una desconfianza visceral al encontrarse con este requisito legal sin una explicación clara. Para este re-testing, definí un objetivo de validación forense: determinar si el nuevo *microcopy* explicativo y el *tooltip* de ayuda que diseñamos reducían eficazmente esa fricción.

Mi razonamiento para establecer la métrica de éxito fue ambicioso pero necesario:
*   **Métrica Clave:** Reducción superior al **70%** en el número de participantes que verbalizaran confusión o desconfianza sobre el campo CURP en comparación con la ronda anterior.
*   **Indicador Cualitativo:** Un aumento notable en la calificación de "facilidad de uso" específicamente en el paso de datos personales.

La justificación detrás de este KPI es puramente de negocio. El CURP es un dato obligatorio por normativa en muchos eventos, pero su solicitud sin contexto actuaba como un repelente de conversión. Si lográbamos que el usuario comprendiera la justificación legal y de seguridad mediante el diseño, estaríamos transformando un punto de abandono en un momento de transparencia de marca. No se trataba solo de que el usuario llenara el campo, sino de que lo hiciera sintiéndose seguro.

#### Blindando la conversión offline: La prominencia de Oxxo (PU-04)

Otro fallo crítico que detectamos fue la invisibilidad de los métodos de pago en efectivo. En un mercado como el mexicano, ignorar o dificultar el acceso a pagos vía Oxxo es sentenciar a muerte una parte significativa de las inscripciones. En la primera ronda, vimos usuarios buscando desesperadamente cómo pagar si no tenían tarjeta a la mano, perdiéndose en una interfaz que priorizaba el mundo digital sobre la realidad física de muchos atletas.

Para validar el rediseño de la pantalla de selección de método de pago, establecí una meta de rendimiento muy clara:
*   **Objetivo:** Evaluar si la mayor prominencia visual y la nueva jerarquía permiten una identificación inmediata de la opción Oxxo.
*   **Métrica de Éxito:** Al menos el **90%** de los participantes con preferencia por pagos *offline* debían identificar la opción sin necesidad de buscarla activamente o con una latencia mínima.

Mi decisión de elevar el estándar al 90% responde a la naturaleza del flujo de *checkout*. En el momento del pago, cualquier segundo de duda es una oportunidad para el abandono. El diseño debe ser proactivo, no reactivo. Quería observar si el usuario "chocaba" con la opción de pago en efectivo de manera natural, validando que nuestra intervención en la arquitectura de información de esa pantalla realmente había eliminado la ceguera visual que sufrían los usuarios anteriormente.

#### Calibrando la propuesta de valor: Terreno y Wallet (PU-07 y PU-09)

La madurez de una plataforma se nota en cómo comunica los detalles que importan a diferentes niveles de experiencia. Para los **Principiantes**, el miedo a lo desconocido es el principal freno. Por eso, tras iterar en la presentación de la información del evento, definí que debíamos comprobar si los nuevos iconos de "Tipo de Terreno" y "Nivel de Dificultad Sugerido" eran realmente útiles.
*   **Meta:** El **80%** de los principiantes debían notar y comprender estas etiquetas al evaluar si un evento era apto para ellos. 
*   **Razonamiento:** Si un usuario novato no puede determinar en 5 segundos si una carrera es demasiado difícil para su nivel, simplemente no se inscribirá. La validación aquí buscaba confirmar que habíamos reducido la carga cognitiva necesaria para tomar esa decisión.

Por otro lado, para el perfil **Frecuente/Plus**, el dolor era distinto: la opacidad en las condiciones del Wallet de Asdeporte Plus. Aquí, el objetivo fue verificar si la nueva ubicación del enlace a las "Condiciones de Uso" y el rediseño del modal de detalle cumplían su función.
*   **Métrica:** El **85%** de los usuarios Plus debían localizar y, lo más importante, **parafrasear correctamente** al menos dos condiciones clave del uso de su crédito.
*   **Visión Senior:** No basta con que el usuario encuentre el link; la validación real ocurre cuando el usuario comprende la regla de negocio (vigencia, aplicabilidad). Si pueden explicarlo con sus palabras, el diseño de la información es exitoso. Los beneficios de lealtad son frágiles; si el usuario siente que las reglas son confusas, la percepción de valor de la membresía Plus se erosiona.

#### La métrica como brújula de rendimiento

Cerré esta fase de planificación con una reflexión profunda sobre la importancia de haber definido estos KPIs *antes* de sentarme a observar a los participantes. En el diseño de producto, es muy fácil dejarse llevar por una buena sesión de prueba donde el usuario es amable y "parece" entender todo. Sin embargo, al establecer métricas duras —como ese 70% de reducción en dudas sobre el CURP o el 90% de visibilidad en pagos—, blindé el proceso contra la subjetividad.

Esta alineación estratégica transformó nuestra percepción del diseño. Dejamos de hablar de "se ve más claro" para empezar a hablar de "esperamos que este componente reduzca el tiempo de identificación en un X%". Este nivel de rigor es lo que permite que el diseño deje de ser visto como una etapa cosmética y sea reconocido como una función crítica de negocio que impacta directamente en la conversión y la retención. Habíamos trazado las líneas en la arena; ahora solo faltaba diseñar las tareas que pondrían a prueba cada una de estas metas.

**Próximo paso:**

Una vez que tuve los objetivos y las métricas grabadas en piedra, me enfrenté a un desafío técnico superior: ¿cómo diseñar escenarios de prueba que fueran lo suficientemente naturales para no sesgar al usuario, pero lo suficientemente dirigidos para que interactuaran exactamente con lo que necesitábamos validar? Recordé que un mal guion de moderación puede arruinar semanas de estrategia, y sentí la presión de construir una 'INGENIERÍA DE LA PRUEBA' que no dejara margen al error en la recolección de datos.

### Parte 2: INGENIERÍA DE LA PRUEBA: TAREAS Y MÉTRICAS DE USABILIDAD

#### La arquitectura del simulacro: Diseñar la trampa para la subjetividad

Diseñar una prueba de usabilidad es, en esencia, diseñar una trampa para la propia subjetividad. Tras haber invertido semanas en iterar la interfaz, el riesgo de caer en el sesgo de confirmación era altísimo; necesitaba que el prototipo hablara por sí solo, sin que mi presencia o un guion complaciente le dieran pistas al usuario. Mi enfoque para esta **Ingeniería de la Prueba** no fue simplemente "ver si funcionaba", sino someter las soluciones a un estrés controlado. No buscaba una navegación libre y errática, sino una validación quirúrgica. Cada escenario que construí fue una hipótesis disfrazada de tarea, y cada métrica, un sensor colocado en los puntos de fricción que habíamos identificado como críticos.

Mi razonamiento estratégico fue claro: si habíamos detectado que el CURP generaba desconfianza y que la opción de Oxxo era invisible, no podía preguntar "¿Te gusta cómo se ve ahora?". Tenía que poner al usuario en una situación donde necesitara esa información para avanzar. Transformé las métricas abstractas de negocio en comportamientos observables. Si el diseño era exitoso, el usuario no debería notar el diseño; debería notar que la duda que antes lo detenía simplemente ya no estaba ahí. Esta fase de planificación fue el puente entre la intuición del diseñador y el rigor del investigador, asegurando que cada clic recolectado fuera una respuesta directa a una decisión de interfaz previa.

#### Ingeniería de escenarios: El caso de la "Carrera Bosque Encantado 5k"

Para validar los problemas de alta prioridad (PU-03 y PU-04), diseñé un escenario que llamé internamente "El Embudo de la Confianza". Situé al participante en un punto de inicio exacto: la página de detalle de la **"Carrera Recreativa Bosque Encantado 5k"**. No quería que perdieran tiempo buscando un evento; quería que estuvieran en el estado mental de "ya decidí participar, ahora quiero inscribirme". 

El primer sensor crítico estaba en el formulario de datos personales. La tarea consistía en iniciar el proceso y llegar al campo del CURP. Mi objetivo forense aquí era observar la interacción con el nuevo **tooltip explicativo y el microcopy** que justificaba la solicitud de este dato sensible. En la ronda anterior, este era el punto donde la tasa de abandono se disparaba por aprensión. En este diseño de tarea, el éxito no era solo que ingresaran el dato, sino que sus comentarios verbales reflejaran que la explicación eliminaba la sospecha. Si el usuario se detenía, leía el tooltip y continuaba sin preguntar "¿Para qué quieren esto?", la solución estaba validada.

Inmediatamente después, el escenario forzaba al usuario hacia la pantalla de pago. Aquí, la ingeniería de la tarea era más visual que lógica. Le pedí al usuario: *"Explora las opciones disponibles y dime cuál elegirías si prefirieras pagar en efectivo en una tienda"*. Este fraseo fue deliberado; no mencioné "Oxxo" para no sesgar la búsqueda. Necesitaba validar si el rediseño de la jerarquía visual permitía que la opción de pago offline saltara a la vista de forma instantánea. Estábamos midiendo si la nueva arquitectura de la pantalla de checkout lograba eliminar el "punto ciego" que había causado tantos problemas de conversión en el MVP original.

#### El usuario novato y la plataforma como mentor (PU-07 y PU-11)

Para los perfiles principiantes, el desafío era distinto: la parálisis por análisis. Diseñé un escenario enfocado en la búsqueda de un primer evento, específicamente el **"Triatlón de la Amistad"**. La misión del usuario era determinar si ese evento era adecuado para su nivel de condición física. 

En este escenario, la ingeniería de la prueba se centró en la localización de los nuevos indicadores de **"Tipo de Terreno"** y **"Nivel de Dificultad Sugerido"**. No se trataba solo de que los datos estuvieran ahí, sino de que fueran significativos para la toma de decisiones. Observé si el usuario escaneaba la página de detalle y se detenía en estos indicadores antes de buscar el botón de inscripción. 

Complementé esta tarea con la validación de los **"Consejos Rápidos"** y los banners contextuales. Quería ver si el usuario percibía la plataforma como un mentor proactivo. La tarea guiaba al usuario a buscar consejos específicos para principiantes dentro de la página del evento. Mi hipótesis era que, si lográbamos que el usuario interactuara con estas guías sin sentirse abrumado, habríamos resuelto la fricción de PU-11. El éxito aquí se medía en la utilidad percibida: ¿el usuario siente que AsDeporte le está "cuidando las espaldas" en su primera carrera?

#### Transparencia financiera: El Wallet y el Hub Plus (PU-09)

El segmento más rentable, los usuarios Plus, requería una validación de alta precisión sobre la gestión de su dinero. Diseñé una tarea que iniciaba directamente en el **Dashboard del Perfil**, con el usuario ya logeado. El escenario planteaba una situación común: *"Tienes saldo en tu Wallet por una cancelación previa y quieres entender exactamente cómo y cuándo puedes usarlo"*.

Esta tarea fue diseñada para probar la navegabilidad hacia el **Hub Plus** y la claridad del modal de condiciones de uso. Era vital observar si el flujo era intuitivo o si el usuario se perdía en la jerarquía del perfil buscando la información de su dinero. La transparencia en la vigencia y redención del saldo es el pilar de la lealtad en este modelo de negocio. Si el usuario lograba explicarme, con sus propias palabras, dos condiciones clave después de leer el modal, consideraba la tarea como exitosa. Aquí no había espacio para la ambigüedad; cualquier duda sobre el dinero se traduce directamente en una pérdida de confianza en la marca.

#### El protocolo de recolección: Más allá del "clic"

Para capturar la realidad de la interacción, implementé un sistema de recolección de datos dual, combinando lo cualitativo con lo cuantitativo de forma sistemática. El núcleo de la recolección cualitativa fue el protocolo **"Think Aloud" (Pensar en Voz Alta)**. Obligué a cada participante a verbalizar su flujo de pensamiento, no para que me dieran feedback estético, sino para capturar la **carga cognitiva** en tiempo real. Cada "eh...", cada micro-fruncimiento de ceño y cada expresión de alivio ("ah, ya vi dónde está") fue catalogado forensemente. Este registro me permitió entender el *porqué* detrás de los números: si un usuario tardaba 10 segundos más en una tarea, el Think Aloud me decía si era por curiosidad o por confusión.

En el lado cuantitativo, utilicé la **Single Ease Question (SEQ)** como mi herramienta de medición inmediata. Inmediatamente después de completar una tarea crítica —como el ingreso del CURP o la selección de Oxxo—, lanzaba la pregunta: *"En una escala del 1 al 5, ¿qué tan fácil o difícil te resultó esta acción?"*. 

> **Decisión de Diseño de Prueba:** Establecí un benchmark técnico ambicioso: buscábamos una puntuación promedio superior a **4.2** para todas las tareas vinculadas a problemas de alta prioridad. Elegí la SEQ post-tarea en lugar de esperar al final de la sesión para evitar el "sesgo de recencia", donde el usuario olvida las dificultades iniciales si el final de la prueba fue fluido.

#### Métricas de precisión: Tasas de éxito y tiempos de reacción

Para que los resultados fueran irrefutables ante los stakeholders, definí KPIs granulares que permitieran una comparación matemática con la ronda de pruebas inicial.

*   **Tasa de Éxito en Selección de Oxxo:** Mi objetivo era un **100%**. En un flujo de checkout, cualquier error en la selección del método de pago es una venta perdida.
*   **Tasa de Interacción con Tooltip (CURP):** Medí cuántos usuarios activaban voluntariamente la ayuda contextual. Esto me indicaba si el diseño visual del tooltip era lo suficientemente sugerente sin ser intrusivo.
*   **Tiempo para Identificar Costo Específico (PU-13):** En la ronda anterior, los usuarios se confundían con las múltiples distancias y precios. Medí el tiempo exacto desde que el usuario llegaba a la sección de costos hasta que verbalizaba el precio correcto de una categoría específica (ej. Adulto General 10k). El objetivo era una reducción significativa respecto al benchmark inicial.
*   **Tasa de Notoriedad de Beneficios Plus (PU-12):** Específicamente para usuarios frecuentes, medí si identificaban los beneficios aplicables al evento sin que el moderador tuviera que señalarlos.

Estas métricas no eran solo números; eran la prueba de que el rediseño no era solo "más limpio", sino objetivamente más eficiente y menos propenso al error humano.

#### El termómetro final: System Usability Scale (SUS)

Como cierre de cada sesión, mantuve la aplicación del **System Usability Scale (SUS)**. Aunque las tareas individuales me daban datos tácticos, el SUS me proporcionaba el termómetro global de la salud del producto. Mi meta era mantener o superar la puntuación de **88.3** obtenida en la primera ronda, estableciendo un umbral mínimo de aceptabilidad de **80**. 

El SUS es vital porque captura la percepción de consistencia y complejidad que las tareas individuales a veces omiten. Al final del día, el éxito del re-testing dependía de que la suma de todas estas micro-mejoras (CURP, Oxxo, Wallet, Filtros) se tradujera en una sensación de control absoluto por parte del usuario. Estábamos validando un ecosistema, no solo una serie de pantallas aisladas.

#### La fidelidad de la tarea como mantra senior

Al reflexionar sobre esta arquitectura de prueba, reafirmo que la calidad de los hallazgos es directamente proporcional a la **fidelidad de la tarea**. Mi obsesión durante este diseño fue crear situaciones donde el usuario olvidara que estaba interactuando con un prototipo de Figma y sintiera la urgencia real de una inscripción dominical o la curiosidad genuina de un atleta Plus consultando sus beneficios. 

Un escenario mal diseñado —demasiado guiado o demasiado vago— genera "ruido" que puede llevar a falsos positivos. Al blindar cada tarea con un punto de inicio coherente, un objetivo realista y una métrica de éxito binaria, me aseguré de que los resultados del re-testing fueran una base sólida para el handoff a ingeniería. Habíamos construido el laboratorio; ahora solo faltaba encontrar a los sujetos adecuados para poner a prueba nuestro trabajo.

**Próximo paso:**

Con la ingeniería de la prueba lista y los sensores de medición calibrados, me enfrenté al siguiente gran cuello de botella: el reclutamiento. Sabía que si usaba a los mismos participantes de la primera ronda, sus respuestas estarían contaminadas por el aprendizaje previo; pero si buscaba perfiles nuevos, corría el riesgo de no encontrar a los nichos específicos de "Trail" o "Plus" que necesitaba validar. Sentí la urgencia de diseñar una 'ESTRATEGIA DE RECLUTAMIENTO: EL FILTRO DE LOS OJOS FRESCOS' que garantizara que cada minuto de prueba fuera con un usuario que realmente representara el desafío que estábamos intentando resolver.

### Parte 3: ESTRATEGIA DE RECLUTAMIENTO: EL FILTRO DE LOS 'OJOS FRESCOS'

#### El imperativo de los "ojos frescos"

Una vez que tuve los protocolos de prueba listos y los sensores de medición calibrados, me enfrenté a un riesgo invisible pero devastador: el sesgo de aprendizaje. Si volvía a llamar a los mismos usuarios que participaron en la primera ronda, no estaría midiendo la usabilidad de mis soluciones, sino la capacidad de memoria de esas personas. Ya conocían el flujo, ya sabían dónde estaban los errores y, subconscientemente, sus cerebros habrían trazado rutas de compensación. Como diseñador, mi prioridad absoluta fue blindar la pureza de los datos; necesitaba "ojos frescos", personas que se enfrentaran por primera vez a la interfaz para validar si el microcopy del CURP o la nueva visibilidad de Oxxo eran realmente intuitivos o si seguían siendo obstáculos insalvables.

Esta decisión de reclutar una muestra completamente nueva no fue un capricho metodológico, sino una maniobra estratégica para obtener datos crudos. Sabía que si lograba que un usuario nuevo, sin contexto previo, navegara el flujo de inscripción sin las fricciones que detectamos originalmente, tendría la prueba irrefutable de que la iteración había funcionado. El éxito del re-testing no dependía de la elegancia del prototipo, sino de la precisión con la que seleccionara a los guardianes de la verdad que lo pondrían a prueba.

#### La arquitectura de la muestra: el número áureo de la validación

Para esta fase, determiné que el volumen ideal de participantes debía oscilar entre 9 y 12 personas. Mi razonamiento técnico para este número se basó en la ley de rendimientos decrecientes de las pruebas de usabilidad: con 5 usuarios sueles encontrar el 80% de los problemas, pero al tratarse de un re-testing de un MVP con perfiles tan dispares (desde el triatleta experto hasta el corredor ocasional), necesitaba una base más amplia para cubrir las tres tríadas críticas que identifiqué: Alfa, Beta y Gamma.

Articulé la muestra de la siguiente manera para asegurar una representatividad total de los puntos de dolor:
*   **3-4 participantes para el Perfil Alfa (Principiantes):** Su misión era estresar las guías proactivas y el lenguaje sencillo.
*   **3-4 participantes para el Perfil Beta (Usuarios Plus):** Encargados de validar las funcionalidades premium y la gestión del Wallet.
*   **3-4 participantes para el Perfil Gamma (Ocasionales):** El termómetro de la confianza en los procesos de pago y datos sensibles.

Esta distribución me permitió no solo validar soluciones generales, sino comprobar si las mejoras específicas para cada nicho —como los filtros de Trail para los expertos o las explicaciones de distancias para los novatos— daban en el blanco.

#### Perfil Alfa: descifrando la ansiedad del principiante

El Perfil Alfa, al que denominé "El Principiante Guiado", fue quizás el más crítico para validar la reducción de la tasa de abandono en las etapas iniciales. Recluté a personas como Sofía Hernández, una maestra de 28 años que, aunque usa redes sociales a diario, se siente intimidada por procesos de inscripción que piden demasiada información técnica. Sofía representaba perfectamente el riesgo de abandono por "ruido" cognitivo. 

Junto a ella, incluí a Ricardo Morales, un contador jubilado de 52 años. Ricardo fue un perfil esencial porque su relación con la tecnología es funcional pero cautelosa; para él, las letras pequeñas o las interfaces saturadas son barreras físicas. Mi objetivo con este grupo era validar si los "Consejos Rápidos" y el nuevo microcopy explicativo para el CURP (PU-03) lograban que personas con baja confianza tecnológica se sintieran acompañadas y no juzgadas por el sistema. Si Ricardo podía completar su inscripción a una caminata de 5k sin pedir ayuda a su hijo, sabría que habíamos ganado la batalla de la accesibilidad.

#### Perfil Beta: estresando el ecosistema Plus

En el extremo opuesto del espectro, configuré el Perfil Beta: "El Usuario Plus Exigente". Aquí no buscaba paciencia, sino eficiencia. Recluté a perfiles como Alejandro Torres, un triatleta experimentado que mide su vida en vatios y ritmos por kilómetro. Alejandro no lee manuales; espera que la interfaz sea una herramienta de precisión. Su enfoque en el re-testing fue validar si la nueva ubicación de las condiciones del Wallet Plus (PU-09) era lo suficientemente obvia para un usuario que valora cada segundo de su experiencia digital.

También sumé a Laura Vargas, ultra-maratonista de trail. Con Laura, el objetivo fue mucho más granular: validar si los nuevos filtros de nicho (PU-01) —específicamente los de desnivel y altimetría— entregaban el valor que un corredor de montaña necesita antes de pagar una inscripción costosa. Este grupo de usuarios Plus fue el encargado de "romper" las soluciones de diseño bajo una mentalidad de alto rendimiento. Si ellos encontraban fricción en los beneficios contextuales (PU-12), significaba que la propuesta de valor de la membresía seguía en riesgo.

#### Perfil Gamma: el termómetro de la confianza

Finalmente, el Perfil Gamma o "El Ocasional Precavido" actuó como mi sensor de seguridad. Mónica Sánchez, una diseñadora freelance que solo corre una vez al año, fue la participante tipo para este grupo. Mónica tiene una memoria muscular de malas experiencias previas con cobros duplicados en otras plataformas, lo que la hace extremadamente analítica durante el checkout.

Para este perfil, la validación se centró en la transparencia. Necesitaba observar su reacción ante la nueva forma de mostrar múltiples distancias y costos (PU-13) y, sobre todo, la visibilidad de la opción de pago en Oxxo (PU-04). El éxito con los "Gammas" se medía en niveles de ansiedad: si el flujo de pago no generaba preguntas sobre la seguridad de los datos o la confirmación inmediata del proceso, habríamos logrado mitigar la desconfianza histórica que arrastraba la plataforma anterior.

#### La ingeniería del screener: filtrando por comportamiento, no por opinión

El reclutamiento no fue un proceso pasivo de "publicar y esperar". Coordiné una operación de segmentación profunda con los equipos de Marketing y Soporte al Cliente de AsDeporte para acceder a su base de datos. No buscábamos voluntarios genéricos; buscábamos comportamientos específicos. 

Diseñé un *screener* técnico con preguntas filtro que evitaban el sesgo de deseabilidad social. En lugar de preguntar "¿Te gusta correr?", preguntábamos por la frecuencia exacta de eventos en los últimos 18 meses y el tipo de dispositivos wearables que sincronizaban. Para los principiantes, incluí preguntas sobre sus miedos al proporcionar el CURP en trámites digitales, lo que me permitió identificar a los usuarios que realmente habían sentido esa fricción en el pasado. 

Utilicé canales secundarios como las redes sociales de la marca solo para cubrir los perfiles de nicho más difíciles de encontrar, como los ciclistas de Gran Fondo, asegurándome de que cada participante pasara por un riguroso filtro de exclusión: nadie que trabajara en AsDeporte o tuviera relación con el desarrollo del proyecto podía entrar. Necesitaba jueces imparciales, no aliados.

#### Logística de combate y cierre del calendario

La fase de reclutamiento cerró con una logística impecable. Programé sesiones de entre 60 y 75 minutos, un tiempo ligeramente más acotado que en la primera ronda para mantener el foco en las tareas iteradas. Me aseguré de tener una mezcla técnica real: usuarios de iOS y Android para la app móvil, y una combinación de laptops y tablets para el sitio web responsive. 

Gestioné los incentivos como un reconocimiento al tiempo y al rigor del feedback que íbamos a exigir. Al final de esta etapa, tenía un calendario blindado con 12 confirmaciones, los consentimientos informados listos y la certeza de que cada una de esas personas representaba un desafío de diseño que aún estaba por resolverse. El laboratorio estaba lleno; los sujetos de prueba eran los correctos. Solo quedaba un paso antes de abrir las puertas: asegurar que el moderador no contaminara el experimento con sus propias expectativas.

**Próximo paso:**

Con los participantes confirmados y el prototipo bajo llave, me di cuenta de que el mayor riesgo ahora era yo mismo. Como diseñador del sistema, mi deseo inconsciente de que las soluciones funcionaran podía teñir la moderación de las sesiones. Sentí la necesidad imperiosa de diseñar un 'PROTOCOLO DEL MODERADOR Y EL BLINDAJE LOGÍSTICO' que actuara como una camisa de fuerza metodológica, garantizando que mis preguntas no guiaran a los usuarios hacia el éxito, sino que los dejaran fallar si la solución aún no era lo suficientemente sólida.

### Parte 4: EL PROTOCOLO DEL MODERADOR Y EL BLINDAJE LOGÍSTICO

#### El riesgo invisible de la autocomplacencia

Tener a los doce participantes confirmados no era el final de la preparación, sino el inicio del riesgo más invisible: mi propio sesgo. Como diseñador del sistema, había invertido semanas refinando cada tooltip y ajustando cada microcopy para resolver las fricciones del MVP; mi deseo subconsciente de que las soluciones funcionaran era una amenaza real para la validez de los datos. Sabía que si no establecía una distancia metodológica absoluta, terminaría guiando a los usuarios hacia el éxito de forma artificial. Por eso, antes de abrir la primera sesión de Zoom, me impuse la tarea de diseñar un protocolo que funcionara como una camisa de fuerza profesional: un marco que me obligara a observar el fallo sin intervenir y a escuchar el silencio sin llenarlo.

Mi razonamiento fue estrictamente forense. No buscaba una charla amigable sobre impresiones estéticas, sino un experimento controlado para validar si los cambios en puntos críticos —como la gestión del CURP o la visibilidad de pagos offline— habían eliminado realmente la fricción cognitiva. Articulé este blindaje logístico dividiendo el protocolo en una estructura rígida de 60 a 75 minutos, un tiempo que calibré para ser lo suficientemente extenso para profundizar, pero lo suficientemente acotado para mantener el rigor del enfoque en las tareas iteradas.

#### La arquitectura del experimento: Cuatro bloques de control

Estructuré la sesión en cuatro etapas críticas, cada una diseñada para aislar variables y preparar el modelo mental del participante sin contaminarlo. No era una repetición de la prueba inicial, sino una validación quirúrgica de los cambios.

1.  **Introducción y Rapport (5-7 min):** Mi prioridad aquí fue desarmar la ansiedad del usuario. Diseñé un guion donde enfaticé, casi como un mantra, que "no hay respuestas correctas o incorrectas" y que el objeto de evaluación era el prototipo, nunca ellos. Necesitaba que se sintieran con el permiso absoluto de criticar, de perderse y de frustrarse.
2.  **Preguntas Pre-Tarea (5 min):** Utilicé este bloque para segmentar la experiencia. Para los usuarios nuevos, busqué entender su historial con inscripciones deportivas; para los que regresaban, indagué si habían tenido experiencias recientes que pudieran haber alterado su expectativa desde la última sesión. Este paso fue vital para calibrar la línea base de cada participante.
3.  **Tareas de Re-Testing (40-50 min):** El núcleo del protocolo. Aquí es donde la "Lista Específica de Tareas" cobraba vida. En lugar de pedirles que exploraran la plataforma al azar, diseñé escenarios realistas que los empujaban directamente hacia las soluciones implementadas (PU-03, PU-04, PU-11, etc.).
4.  **Cierre y Validación Cuantitativa (5-10 min):** Un espacio para la reflexión post-sesión, donde buscaba capturar la impresión general de confiabilidad y facilidad después de haber interactuado con los cambios.

Esta estructura garantizaba que el tiempo se invirtiera en las áreas de mayor riesgo técnico y de negocio, evitando que la sesión se diluyera en feedback irrelevante para el MVP.

#### El blindaje verbal: El guion como herramienta de neutralidad

Redacté el guion del moderador con una obsesión casi clínica por la neutralidad. En el diseño de producto, una palabra mal elegida puede arruinar una métrica. Evité sistemáticamente adjetivos como "nueva versión", "mejorada" o "corregida". Para el usuario, el prototipo simplemente *era*. Si les decía que algo era "nuevo", los condicionaba a buscar una mejora, activando el sesgo de cortesía.

En la bienvenida, decidí ser explícito sobre la naturaleza del prototipo: una maqueta interactiva que podía fallar. Esto no era solo honestidad técnica, sino una táctica para que el usuario no culpara a su propia competencia digital si algo no funcionaba. Al pedirles que "pensaran en voz alta", establecí la regla de oro de la moderación: yo no estaba allí para ayudarles a completar la tarea, sino para ser el cronista de su proceso mental.

> El blindaje verbal es la única defensa real contra el efecto experimentador. Si el moderador da pistas, el dato muere; si el moderador guarda silencio, el producto habla.

#### Técnicas de sondeo y el arte de devolver la pregunta

Uno de los mayores desafíos de moderar un re-testing es resistir la tentación de explicar el diseño cuando el usuario duda. Para blindar la sesión, integré técnicas de indagación profunda que me obligaban a mantener la distancia. Si un participante se detenía ante el campo del CURP y preguntaba "¿Debo ponerlo aquí?", mi respuesta protocolaria estaba predefinida: "¿Tú qué crees que pasaría si lo haces?" o "¿Qué esperas encontrar en ese campo?".

Diseñé preguntas de sondeo no directivas para extraer el modelo mental sin dar pistas:
*   "¿Qué te hace dudar en este momento?"
*   "¿Qué esperas que pase si tocas ese botón?"
*   "¿Qué estás viendo que te llame la atención?"

Forzar el "pensamiento en voz alta" fue mi herramienta para capturar la fricción cognitiva. A menudo, un usuario completa una tarea con éxito (métrica cuantitativa positiva), pero lo hace con una mueca de duda o un suspiro de frustración (insight cualitativo crítico). El protocolo aseguraba que esas señales no se perdieran.

#### El laboratorio remoto y la precisión logística

La preparación técnica del entorno fue el último eslabón del blindaje. Configuré el laboratorio remoto utilizando herramientas de grabación que me permitieran capturar tanto la pantalla como las reacciones faciales, algo vital para detectar micro-expresiones de confusión.

Me aseguré de que el prototipo iterado estuviera configurado en "puntos de inicio" exactos para cada tarea. No quería perder tiempo de la sesión navegando por flujos que no habían cambiado. Si íbamos a validar la visibilidad de la opción de pago en Oxxo (PU-04), el usuario debía empezar exactamente un paso antes, con el contexto fresco pero sin la fatiga de haber llenado diez formularios previos. 

Además, gestioné los consentimientos informados como un paso previo e innegociable, asegurando que la privacidad de los datos estuviera blindada antes de grabar un solo segundo. Preparé una hoja de notas enfocada específicamente en los cambios de diseño, con columnas dedicadas a observar comportamientos predefinidos: ¿Leyó el tooltip del CURP? ¿Dudó al elegir el método de pago? ¿Utilizó los filtros de dificultad?

#### La validación cuantitativa: Escalas de facilidad percibida

Para que el re-testing tuviera peso estadístico frente a los stakeholders, integré métricas cuantitativas inmediatamente después de cada tarea crítica. Implementé una escala Likert del 1 al 5 para medir la facilidad percibida de acciones específicas. 

No me bastaba con observar que encontraran las condiciones del Wallet (PU-09); necesitaba que ellos calificaran qué tan fácil les resultó comparado con su expectativa. Incluí preguntas comparativas sutiles: "¿Notaste alguna diferencia en cómo se presenta esta información comparado con lo que esperabas?". Esta pregunta, aunque parece simple, es una sonda poderosa para detectar si las guías proactivas para principiantes (PU-11) estaban cumpliendo su función de "acompañamiento silencioso" sin ser intrusivas.

Al final, este protocolo no era solo un guion; era un sistema de control de calidad. Me permitía transformar una serie de entrevistas en un experimento científico de diseño, donde cada silencio del moderador y cada duda del usuario se convertían en datos accionables para el handoff final.

**Próximo paso:**

Con el protocolo blindado y el cronómetro listo, llegó el momento de enfrentar la realidad. Abrí la primera sesión de Zoom sabiendo que las próximas horas pondrían a prueba no solo mi diseño, sino mi capacidad de mantenerme al margen mientras veía a los usuarios navegar por las soluciones que tanto me había costado construir. Estaba a punto de entrar en la fase de 'EJECUCIÓN Y OBSERVACIÓN FORENSE: LA VOZ DEL USUARIO', donde la primera interacción con el campo del CURP revelaría de inmediato si mis hipótesis de microcopy eran una genialidad o simplemente otra capa de ruido.

### Parte 5: EJECUCIÓN Y OBSERVACIÓN FORENSE: LA VOZ DEL USUARIO

#### La falsación de mis propias hipótesis

Abrí la primera sesión de Zoom con una mezcla de rigor científico y esa tensión gástrica que solo sientes cuando estás a punto de ver si tus soluciones de diseño sobreviven al contacto con la realidad. Tras días configurando el entorno de grabación y blindando el protocolo que narré anteriormente, me enfrentaba al reto de validar si las iteraciones realmente movían la aguja de la usabilidad o si solo eran "parches estéticos". Como diseñador, mi enfoque en esta fase de **Ejecución y Observación Forense** no era buscar la confirmación de mis ideas —eso es un sesgo peligroso—, sino intentar falsar mis propias hipótesis. 

Necesitaba observar el comportamiento natural de los usuarios frente a los nuevos componentes: ¿Notarían el tooltip del CURP? ¿Ignorarían los banners de consejos? ¿Se perderían de nuevo en los filtros de nicho? Mi objetivo era confirmar si el ruido cognitivo que detectamos inicialmente había sido eliminado o si, por el contrario, habíamos introducido nuevas capas de confusión. La cámara estaba encendida, el prototipo de alta fidelidad cargado y el primer participante en línea.

#### El microcopy como escudo: El caso del CURP (PU-03)

La primera gran prueba de fuego fue la interacción con el campo del CURP durante el flujo de inscripción con el **Perfil Alfa** (principiantes). Observé con atención quirúrgica a Sofía Hernández, una maestra de 28 años, mientras navegaba por el formulario en su Android. Al llegar al campo conflictivo, su reacción fue inmediata: "Ah, CURP... ¿para qué será?". En lugar de abandonar o mostrar la frustración que vimos en la ronda inicial, Sofía tocó instintivamente el nuevo ícono de información ("i"). 

> "Ah, ok, dice 'Para validar tu categoría de edad y para el seguro del evento'. Bueno, así ya entiendo un poco más, aunque igual no me encanta darlo." — Sofía Hernández.

Esta verbalización fue una victoria táctica. El tooltip no eliminó la reticencia intrínseca al dato sensible, pero transformó una exigencia burocrática opaca en una medida de seguridad percibida. Ricardo Morales, con su enfoque metódico de contador jubilado, validó esta misma lógica al comentar que la explicación "tenía sentido" por el tema del seguro. Lograr puntuaciones **SEQ de 4/5 y 4.5/5** en este punto me confirmó que el microcopy explicativo estaba actuando como un amortiguador de fricción necesario.

#### La visibilidad de Oxxo y el alivio del pago offline (PU-04)

Uno de los hallazgos más críticos de la fase anterior fue la invisibilidad de los métodos de pago en efectivo. En esta ejecución, puse especial atención a la jerarquía visual de la pantalla de pago rediseñada. Mónica Sánchez, del perfil Gamma, llegó a esta sección con una actitud precavida debido a malas experiencias previas con transacciones online. 

*   **Identificación inmediata:** Mónica exclamó: "Pago en Oxxo, aquí está. Sí, esta me gusta más". La presencia del logo de Oxxo, ahora con un tamaño y contraste optimizados según el plan de re-testing, eliminó cualquier duda.
*   **Preferencia por seguridad:** Sofía H. también identificó la opción de inmediato, expresando alivio: "Qué bueno que está ahí grande y con el logo".
*   **Métrica de Éxito:** Ambas participantes otorgaron un **SEQ de 5/5** en esta tarea. 

Esta observación forense me permitió concluir que la fricción de seguridad no era una falta de confianza en la marca AsDeporte, sino una falla en la arquitectura de información que ocultaba la alternativa de pago más cómoda para el mercado mexicano.

#### El rigor del atleta: Validando el lenguaje técnico (PU-09, PU-01, PU-12)

Al pasar a las sesiones con el **Perfil Beta** (usuarios Plus y expertos), el nivel de exigencia subió de tono. Aquí no evaluaba solo si "entendían", sino si el producto hablaba su lenguaje técnico. Observé a Alex Torres, triatleta experimentado, navegar hacia el Hub Plus para revisar las condiciones de su Wallet. 

Maniobré la sesión para que Alex encontrara las reglas de vigencia sin mi ayuda. Al abrir el modal, leyó en voz alta: "'Crédito válido por 12 meses', 'Se descuenta automáticamente'... Sí, esto está mucho más claro". Validamos un **SEQ de 5/5** en claridad de condiciones, un salto cuántico respecto a la confusión total de la primera ronda. Sin embargo, Alex mantuvo su postura crítica sobre los filtros: "Sigue faltando el filtro de drafting, pero bueno, al menos esto es más específico". 

Por otro lado, la sesión con Laura Vargas (Trail Runner) fue el contrapunto de éxito rotundo. Al interactuar con los nuevos sub-filtros de "Desnivel Positivo Mínimo", su reacción fue de pura satisfacción: "¡Perfecto! Ahora sí puedo encontrar lo que busco mucho más rápido". Esta diferencia en los resultados me recordó una lección senior fundamental: **el diseño para nichos nunca termina**, pero haber implementado filtros de desnivel y tipo de ultra ya nos posicionaba por encima de la competencia en términos de utilidad percibida.

#### Guías contextuales y el factor "carriola" (PU-07, PU-11)

Para los usuarios principiantes y ocasionales, la barrera de entrada suele ser la intimidación por los detalles técnicos del evento. Durante la observación de Sofía H., noté cómo consumía la nueva información de "Terreno" y "Dificultad" en la página de detalle de una caminata. 

1.  **Utilidad pragmática:** Al leer "Terreno: Mixto (Asfalto y Terracería Ligera)", Sofía comentó: "¡Esto es súper útil! Así sé si puedo ir con carriola o si va a estar muy pesado". 
2.  **Confianza proactiva:** La interacción con el banner "¿Tu primera caminata? Tips aquí" fue fluida. Sofía verbalizó que los consejos sobre el uso del chip y qué llevar le daban "más confianza".
3.  **Validación de diseño:** Daniela Ríos, del perfil Gamma, calificó la información como "divertida y clara", lo que validó que el tono de voz menos institucional que propuse estaba resonando con el segmento más joven.

#### Reflexión sobre la reticencia persistente y el éxito métrico

Al finalizar las 9 sesiones, el panorama era alentador pero con matices que no quise ignorar. Las puntuaciones **SUS estimadas oscilaron entre 85 y 95**, lo que técnicamente sitúa al prototipo en un nivel de confianza industrial excelente. Sin embargo, mi análisis de las grabaciones de Fer López y Daniela Ríos reveló que la "reticencia persistente" hacia el CURP sigue ahí. A pesar de usar el tooltip y entender la justificación, ambas comentaron que se siente como "mucho dato". 

Esto me dejó una reflexión importante: el diseño puede mitigar la fricción, pero no puede eliminar las barreras culturales o de privacidad por completo. Nuestra victoria fue la transparencia; el usuario ahora entrega el dato sabiendo el *porqué*, lo que reduce el abandono, aunque la sensación de "dato sensible" permanezca. Habíamos logrado un producto que no solo era navegable, sino que se sentía honesto y profesional.

**Próximo paso:**

Con las notas de observación saturadas de citas directas y las métricas SEQ recolectadas, el desafío cambió de naturaleza. Ya no se trataba de observar, sino de diseccionar. Tenía que cruzar estos hallazgos con los problemas de alta prioridad de la primera fase para demostrar, con evidencia irrefutable, qué habíamos resuelto y qué quedaba como deuda técnica o de diseño. Estaba listo para entrar en el 'ANÁLISIS FORENSE Y RESULTADOS DE VALIDACIÓN', donde los números y las conductas se transformarían en el informe final que decidiría si el proyecto estaba listo para el handoff.

### Parte 6: ANÁLISIS FORENSE Y RESULTADOS DE VALIDACIÓN

#### El silencio tras la última sesión de Zoom

Cerré la última sesión de Zoom y el silencio en mi oficina se sintió más pesado que de costumbre. Tenía ante mí nueve grabaciones de video, decenas de páginas de notas de observación y una matriz de métricas cuantitativas que todavía eran solo números en una hoja de cálculo. En este punto de un proyecto, la tentación de saltar directamente a las conclusiones es enorme, pero mi experiencia me dictaba lo contrario: la observación es solo ruido si no se disecciona con un rigor forense. Tenía que transformar esa saturación de datos en inteligencia de diseño que el equipo de ingeniería pudiera ejecutar sin dudas.

Me alejé de la pantalla unos minutos para resetear mi capacidad de análisis. El riesgo en esta fase de **Análisis Forense y Resultados de Validación** es el sesgo de confirmación; es muy fácil ver lo que quieres ver cuando has invertido semanas iterando una solución. Sin embargo, mi responsabilidad como diseñador no era validar mi propio ego, sino blindar el MVP. Necesitaba cruzar cada hallazgo con los problemas de alta prioridad que identificamos al inicio para determinar, con evidencia irrefutable, si el diseño estaba realmente listo para el handoff o si nos enfrentábamos a una deuda de usabilidad inaceptable.

#### La arquitectura de la evidencia: Del ruido a la señal

Inicié el proceso de consolidación de datos brutos con una disciplina casi obsesiva. Recolecté cada grabación, cada nota de observación y cada métrica cuantitativa —desde las tasas de éxito hasta los tiempos por tarea y los errores cometidos—. Mi primer paso fue organizar este caos en una estructura que me permitiera vincular cada interacción con los problemas originales. No me servía saber que "al usuario le gustó la app"; necesitaba saber si Sofía H. pudo entender por qué le pedíamos el CURP y si Jorge E.P. encontró la opción de Oxxo sin vacilar.

Para que este análisis fuera útil para el negocio, establecí un criterio de clasificación tripartito que no dejara lugar a interpretaciones subjetivas:

*   **Resuelto:** La solución eliminó completamente la fricción observada. El usuario fluye sin detenerse.
*   **Mitigado:** La fricción se redujo significativamente, pero persiste una resistencia residual o una duda menor. El diseño funciona, pero el problema tiene raíces más profundas (como la privacidad).
*   **No Resuelto:** La iteración no movió la aguja. El problema persiste y requiere un cambio de enfoque radical.

Esta categorización nació del cruce entre la **Tasa de Éxito**, el **SEQ (Single Ease Question)** y, sobre todo, la ausencia de nuevos problemas introducidos. No quería arreglar una gotera rompiendo una tubería. Mi objetivo era asegurar que el **SUS (System Usability Scale) final de 90.0** que proyectábamos no fuera una métrica de vanidad, sino un reflejo fiel de un producto industrialmente sólido.

#### El dilema del CURP: Transparencia vs. Privacidad

Uno de los momentos más reveladores del análisis fue la disección del **PU-03**, el problema de la solicitud del CURP durante la inscripción. En la primera ronda de pruebas, este campo era un muro infranqueable para los perfiles principiantes. Al analizar los datos del re-testing, observé un cambio de comportamiento fascinante: la tasa de interacción con el nuevo tooltip explicativo fue del **100% (6 de 6 participantes relevantes)**. 

Al revisar la grabación de Sofía H. (Perfil Alfa), noté que se detuvo un segundo, leyó el microcopy y comentó: *"Ah, ok, dice 'Para validar tu categoría de edad y para el seguro del evento'. Bueno, así ya entiendo un poco más"*. Jorge E.P. (Perfil Gamma) tuvo una reacción similar: *"Al menos dicen para qué"*. Sin embargo, a pesar de que el **SEQ promedio subió a 3.91/5**, decidí clasificar este problema como **Mitigado**, no como Resuelto.

> **Insight de Diseño:** La transparencia reduce la fricción táctica, pero no elimina la barrera cultural. El usuario entrega el dato porque entiende la justificación, pero la reticencia intrínseca a compartir información sensible permanece. Como diseñadores, nuestra victoria aquí fue la honestidad: transformamos un requisito arbitrario en una transacción informada.

Este hallazgo me confirmó que el diseño tiene límites frente a las preocupaciones de privacidad. Logramos que el usuario no abandonara el flujo, lo cual es el objetivo del negocio, pero aceptamos que la "sensación de dato sensible" es una constante que solo la confianza en la marca a largo plazo podrá terminar de disolver.

#### Oxxo y la victoria de la jerarquía visual

En contraste con la complejidad del CURP, el análisis del **PU-04** —la visibilidad de los pagos offline— fue una victoria absoluta de la arquitectura de información y el diseño visual. En la primera ronda, los usuarios pasaban por alto la opción de Oxxo porque estaba enterrada en un listado genérico. 

Al analizar las sesiones de Mónica S. y otros participantes Alfa y Gamma, la diferencia fue drástica. La prominencia visual que le dimos al logo y al botón de Oxxo funcionó como un faro. La **Tasa de Identificación Inmediata fue del 100%** y el **SEQ alcanzó un perfecto 5.0/5**. Mónica S. lo resumió con una frase que anoté en negritas en mi reporte: *"¡Qué bueno que está ahí grande y con el logo! Se ve claro"*.

Este resultado me permitió validar una hipótesis fundamental del proyecto: en el mercado mexicano, el reconocimiento de marca (el logo de Oxxo) es un disparador de confianza más potente que cualquier instrucción textual. Al resolver este punto, eliminamos uno de los mayores riesgos de caída en el embudo de conversión para los usuarios que no están bancarizados o que prefieren el efectivo. Fue una solución simple, pero ejecutada con una jerarquía visual impecable.

#### De herramienta para expertos a mentor digital

El análisis de los problemas **PU-07 y PU-11** me mostró que habíamos logrado cambiar la personalidad del producto. AsDeporte siempre ha sido una plataforma robusta, pero se sentía intimidante para los novatos. Al revisar cómo Ricardo M. (Perfil Alfa) interactuó con la página de detalle del evento, vi cómo se detenía en las nuevas etiquetas de "Tipo de Terreno" y "Nivel de Dificultad Sugerido". Su comentario fue música para mis oídos: *"Dice 'Dificultad: Caminata Ligera, ideal para iniciar'. Eso está muy bien"*.

Los datos respaldaron esta percepción cualitativa:
*   **Tasa de localización de información de terreno:** 100%.
*   **Utilidad percibida de las guías contextuales (Perfil Alfa):** 4.83/5.
*   **Éxito en la comprensión de condiciones del Wallet (Perfil Beta):** 100%.

La integración de "Consejos Rápidos" y el acceso mejorado a las guías para principiantes no solo resolvieron errores de usabilidad; transformaron la aplicación en un **mentor digital**. Los usuarios ya no solo "usaban" la app, sentían que la app los "cuidaba". Esta validación fue crucial para asegurar que el MVP B2C no solo fuera funcional, sino inclusivo para el segmento de mercado que más potencial de crecimiento tiene para AsDeporte.

#### El techo del MVP: Filtros de nicho y deuda estratégica

No todo fue una curva ascendente. El análisis del **PU-01** —los filtros avanzados para atletas de nicho como Trail o Triatlón— me obligó a tomar una decisión estratégica difícil. Aunque implementamos sub-filtros como "Ultra" y "Olímpico" que mejoraron la búsqueda (SEQ de 4.5/5), participantes expertos como Laura V. y Alejandro T. (Perfil Beta) fueron rápidos en señalar lo que faltaba: *"Sigue faltando el filtro de drafting"* o *"necesito ver los puntos ITRA"*.

Clasifiqué este hallazgo como **Mitigado**. La solución actual funciona para el 80% de los casos de uso del MVP, pero no agota las expectativas del usuario "hardcore". 

> **Trade-off de Alcance:** Podría haber intentado diseñar cada sub-filtro posible para cada disciplina, pero eso habría retrasado el handoff semanas. Decidí que la estructura actual es lo suficientemente flexible para crecer. Documenté estas necesidades como **prioridades críticas para el roadmap post-MVP**, validando que el diseño cumple con la promesa básica de búsqueda pero reconociendo que la granularidad extrema es un objetivo de evolución continua.

#### La validación final: Un SUS de 90.0 como estándar industrial

Al consolidar todas las métricas, el resultado final fue un **SUS promedio de 90.0**. En mis diez años de oficio, he aprendido que un 90 no es solo un número alto; es una declaración de que el producto ha superado la etapa de "funcional" para entrar en la de "excelente". 

Este análisis forense me permitió demostrar que:
1.  Los problemas de **Alta Prioridad** (CURP, Oxxo, Información para Principiantes) estaban resueltos o mitigados a un nivel que no pone en riesgo el lanzamiento.
2.  Las micro-fricciones (ícono de filtros, claridad de costos múltiples) desaparecieron gracias a los ajustes de UI y UX Writing, logrando un **SEQ de 4.92/5** en la identificación de costos.
3.  No introdujimos nuevos problemas críticos durante la iteración, lo cual es el mayor temor en cualquier ciclo de re-testing.

La validación no fue solo un ejercicio de marcar casillas. Fue el proceso de asegurar que cada decisión tomada en el lienzo de Figma tuviera un impacto real en la vida de los atletas. Me sentí satisfecho no porque el diseño fuera "bonito", sino porque era **robusto y predecible**. Tenía en mis manos un informe que no solo decía que el diseño funcionaba, sino que explicaba *por qué* funcionaba y *dónde* debía seguir mejorando. Estábamos listos para el cierre definitivo.

**Próximo paso:**

Con el análisis forense terminado y la confianza que da un SUS de 90.0, me encontré frente a una montaña de evidencia que necesitaba ser sintetizada. Ya no se trataba solo de métricas de usabilidad, sino de cómo estos hallazgos impactaban la estrategia de negocio de AsDeporte. El desafío ahora era elevar la conversación: debía preparar la 'SÍNTESIS ESTRATÉGICA Y CIERRE DEL CICLO DE DISEÑO', donde transformaría estos resultados en una visión de producto coherente para los stakeholders. Tenía que decidir qué batallas dar en la presentación final y cómo documentar la deuda de diseño para que el equipo de desarrollo no perdiera ni un ápice de la intención original durante el handoff.

### Parte 7: SÍNTESIS ESTRATÉGICA Y CIERRE DEL CICLO DE DISEÑO

Me senté frente al monitor con el peso de saber que esta era la última gran síntesis antes de que el código empezara a escribirse. Tenía sobre la mesa —o mejor dicho, en mis pestañas de navegador— una montaña de datos crudos, grabaciones de sesiones y métricas de rendimiento que necesitaban dejar de ser "evidencia" para convertirse en una hoja de ruta estratégica. Como diseñador, mi reto en este punto de inflexión no era simplemente reportar que el prototipo había funcionado; era mi responsabilidad traducir ese éxito técnico en una postura firme sobre la madurez del producto. Sabía que los stakeholders de AsDeporte no buscaban un resumen de usabilidad, sino la seguridad de que su inversión estaba blindada contra el rechazo del mercado. Cerrar este ciclo de diseño exigía una transición quirúrgica: pasar del análisis forense del comportamiento del atleta a una visión de producto coherente y lista para el handoff.

#### El veredicto del SUS: 90 puntos de confianza industrial

El primer dato que despejó cualquier duda fue el cálculo final del **System Usability Scale (SUS)**. Al tabular las respuestas de los 9 participantes de esta ronda de re-testing, el promedio general se situó en un contundente **90.0**. Para poner esto en perspectiva ante cualquier director de producto, el promedio de la industria suele rondar los 68 puntos. Alcanzar un 90.0 no es un logro estético; es una validación de que el prototipo iterado ha entrado en la categoría de "Excelente". 

Este número fue la consecuencia directa de nuestra obsesión por atacar los puntos de fricción de alta prioridad que identificamos semanas atrás. No nos limitamos a "pulir" la interfaz; reconstruimos los momentos de mayor ansiedad del usuario. Ver ese 90.0 en mi hoja de cálculo fue el indicador definitivo de que habíamos transformado la confusión inicial en una eficiencia operativa real. Ya no estábamos ante una propuesta de diseño, sino ante una solución validada que reducía drásticamente el riesgo de soporte al cliente y abandono del carrito de compra.

#### Segmentación de la victoria: del principiante al experto

Lo que más me interesaba analizar no era solo el promedio global, sino cómo se comportaba el diseño ante los diferentes modelos mentales de nuestros atletas. Al desglosar el SUS por perfiles, descubrí patrones que confirmaron mis decisiones arquitectónicas:

*   **Perfil Beta (Usuario Plus Exigente):** Obtuvo la puntuación más alta con un **91.67**. Este dato validó que la reestructuración del Hub Plus y la claridad en las condiciones del Wallet (PU-09) dieron en el blanco. Alejandro T. y Laura V., usuarios que anteriormente se sentían frustrados por la opacidad de los beneficios, ahora navegaban con una fluidez que demostraba que el valor de la membresía era finalmente tangible.
*   **Perfil Alfa (Principiante Guiado):** Logró un sólido **90.83**. Para mí, este era el éxito más gratificante. Las guías proactivas y los "Consejos Rápidos" (PU-11) eliminaron las barreras psicológicas de entrada. Ver a Sofía H. interactuar con el prototipo y verbalizar que la plataforma le daba "confianza" para inscribirse en su primer evento fue la prueba de que el diseño estaba cumpliendo su función social y de negocio: expandir la base de usuarios de AsDeporte.
*   **Perfil Gamma (Ocasional Precavido):** Con un **87.5**, este segmento también mostró una mejora sustancial. Aunque es el puntaje más bajo de los tres, sigue siendo sobresaliente. La ligera diferencia se debió a la persistencia de una reticencia natural hacia el uso de datos personales, algo que el diseño mitigó pero que requiere un monitoreo constante.

> **Insight de Diseño:** El éxito con el Perfil Beta confirma que la "exigencia" del usuario avanzado no es un problema de diseño, sino una demanda de transparencia. Al darles control total sobre su Wallet y beneficios, transformamos su escepticismo en lealtad al producto.

#### Despejando el camino al pago: Oxxo y el factor confianza

Uno de los momentos de mayor tensión en el proyecto original era el flujo de pago. En el re-testing, me enfoqué en validar si el rediseño de la UI de pagos realmente había resuelto la invisibilidad de las opciones offline. Los resultados fueron irrefutables: la opción de pago en Oxxo (PU-04) obtuvo un **SEQ (Single Ease Question) de 5.0/5**. Los 6 usuarios que probaron este flujo identificaron el logo y el botón dedicado de forma inmediata. Escuchar comentarios como "¡Qué bueno que está ahí grande!" confirmó que la prominencia visual era la respuesta correcta ante la necesidad de métodos de pago accesibles en el mercado mexicano.

En cuanto al espinoso tema del CURP (PU-03), el microcopy explicativo mediante el tooltip logró una **SEQ promedio de 3.91/5**. Si bien no eliminamos al 100% la incomodidad de compartir este dato —algo que escapa al alcance del diseño de interfaz—, logramos que los usuarios comprendieran el *por qué* de la solicitud. 6 de cada 6 usuarios interactuaron con la explicación y verbalizaron una mayor comprensión. Maniobré aquí para que el diseño no fuera una barrera, sino un puente de comunicación honesto entre la empresa y el atleta.

#### La honestidad del backlog: lo que decidí no resolver ahora

Como diseñador senior, sé que un producto nunca está "terminado", solo está "listo para salir". Durante el re-testing, identifiqué problemas residuales y nuevas sugerencias que, con criterio pragmático, decidí clasificar como **Prioridad Baja** para el backlog de futuras iteraciones. 

Un ejemplo claro fue el hallazgo **NP-01**, sugerido por Luis F., sobre la posibilidad de editar la talla de la playera después de la inscripción. Aunque es una mejora de conveniencia valiosa, no es un bloqueante para el lanzamiento del MVP. Lo mismo ocurrió con la petición de filtros aún más granulares para nichos extremos (PU-01), como el tipo de terreno específico en Trail o puntos ITRA. Decidí que el diseño actual, que ya incluye sub-filtros para Montaña, Olímpico y Ultra, es más que suficiente para un lanzamiento exitoso. Mi responsabilidad era evitar el *scope creep* y asegurar que el equipo de desarrollo recibiera un paquete de trabajo ejecutable, no una lista de deseos infinita.

#### El sello de "Listo para Construcción": Handoff y Quick Wins

Llegado el momento de la recomendación principal, mi veredicto fue claro: el diseño del MVP B2C es **robusto** y está listo para el handoff a ingeniería. Las soluciones implementadas no solo mitigaron los problemas de alta prioridad, sino que elevaron la calidad percibida de toda la plataforma. Sin embargo, antes de cerrar los archivos de Figma, establecí una serie de **Quick Wins** o ajustes rápidos que debían ejecutarse para alcanzar un nivel de artesanía digital superior:

1.  **Refinamiento del Tooltip CURP:** Realizar una última pasada de UX Writing con el equipo legal para asegurar que la redacción sea lo más tranquilizadora posible sin perder precisión técnica.
2.  **Consistencia en Pagos:** Verificar que la prominencia de la opción Oxxo sea idéntica en todos los breakpoints, asegurando que la experiencia en web responsive sea tan impecable como en la app nativa.
3.  **Visibilidad de Filtros:** Confirmar que la etiqueta textual "Filtrar" (PU-08) mantenga los contrastes de accesibilidad necesarios en todas las pantallas de dispositivos móviles, evitando cualquier regresión en la descubribilidad del control.

Esta fase de pulido final no es un lujo; es el paso necesario para garantizar que la intención del diseño sobreviva al proceso de desarrollo.

#### Mirando más allá del MVP: El roadmap de la grandeza

El cierre de este ciclo no es el fin del camino, sino la base sobre la cual AsDeporte construirá su futuro digital. En mi síntesis estratégica, dejé trazado el roadmap para las versiones 1.1 y posteriores. La validación con los usuarios de nicho nos dio la clave: la plataforma debe evolucionar hacia una mayor granularidad en disciplinas específicas (OCR, Triatlón) y una integración profunda con wearables (PU-10). 

Lo que entregamos hoy es un ecosistema que ya no expulsa al usuario por falta de claridad, sino que lo acompaña. Hemos pasado de una app criticada por su usabilidad a un prototipo validado con un SUS de 90.0 que pone al atleta en el centro de cada decisión. Al finalizar esta síntesis, sentí la satisfacción de quien no solo entrega pantallas, sino que entrega certidumbre. El diseño ya no es una hipótesis; es una herramienta de negocio probada en batalla.

**Reflexión final:**
Este ciclo de re-testing fue la inversión más inteligente del proyecto, pues nos permitió pasar de un diseño "que se veía bien" a uno que "funciona bajo presión". Aprendí que la verdadera madurez de un diseñador no está en defender su primera propuesta, sino en tener la humildad de someterla a una validación forense y la agudeza para iterar sobre los hallazgos. Al final, lo que queda no es solo un puntaje SUS de 90.0, sino la tranquilidad de entregar a desarrollo un producto donde cada píxel y cada palabra tienen una razón de ser respaldada por el comportamiento real de los atletas.