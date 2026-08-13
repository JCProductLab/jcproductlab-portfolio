# Fase 3: Prototipado y Validación

## Actividad 4: actividad_04_recopilacion_y_analisis_de_feedback

### Parte 1: AUDITORÍA DE INSUMOS Y MINDSET DE INMERSIÓN

#### El peso de la evidencia: Centralizando 15 realidades distintas

Cerré la última sesión de Zoom con el participante número 15 y, por un momento, el silencio en mi estudio fue absoluto. Tenía ante mí el resultado de días de ejecución intensa: gigas de grabaciones, cientos de notas dispersas y una sensación visceral de que el prototipo del MVP B2C había recibido golpes certeros en lugares que no esperábamos. Como diseñador, este es el momento más peligroso del proceso. Es tentador saltar de inmediato a Figma para "arreglar" lo que crees haber visto, pero la experiencia me ha enseñado que la memoria es selectiva y traicionera. Antes de mover un solo píxel, mi prioridad absoluta fue blindar la integridad de la evidencia.

Me enfrenté a una masa de información desestructurada que necesitaba ser procesada con rigor forense. No se trataba simplemente de organizar archivos, sino de establecer un "estado de gracia" analítico donde la objetividad fuera el único norte. Mi razonamiento fue claro: si permitía que mis propios sesgos de confirmación —esa voz interna que dice "el usuario se equivocó, no el diseño"— filtraran los datos, el análisis posterior nacería muerto. Inicié una auditoría exhaustiva de cada insumo recolectado, asegurándome de que cada frustración, cada duda y cada éxito quedaran documentados con una trazabilidad incuestionable.

#### La arquitectura del repositorio forense

Mi primer movimiento táctico fue la consolidación de la evidencia multimedia. Descargué sistemáticamente cada grabación de video y audio proveniente de **Zoom, QuickTime y Lookback.io**, las herramientas que articulamos durante la ejecución. No me limité a una descarga pasiva; realicé un control de calidad técnico sobre cada archivo. Verifiqué que el audio de los protocolos de "pensar en voz alta" fuera nítido y que la visibilidad de las interacciones en pantalla —esos toques rápidos o scrolls dubitativos— fuera total. Un clip de video corrupto o un audio ininteligible es un insight perdido para siempre, y en un proyecto de esta escala, no podíamos permitirnos lagunas en la evidencia.

Una vez asegurada la integridad de los archivos, diseñé una estructura de directorios que funcionara como la columna vertebral de mi análisis. Creé un repositorio centralizado donde cada carpeta correspondía a un participante específico, nombrado con una nomenclatura estricta (ej. `P08_Perfil_Plus_Evento_Inscripcion`). Dentro de cada carpeta, orquesté un ecosistema de datos:
*   La grabación íntegra de la sesión.
*   Las notas de observación tomadas en tiempo real por el moderador y los observadores.
*   El protocolo de prueba marcado con las marcas de tiempo críticas.

Esta organización no fue un ejercicio de orden administrativo, sino una decisión estratégica de **arquitectura de la información del feedback**. Necesitaba que cualquier miembro del equipo, o incluso yo mismo semanas después, pudiera saltar de una nota de observación al momento exacto del video sin la menor fricción. Esta trazabilidad es lo que permite defender un hallazgo ante un stakeholder escéptico: no es mi opinión, es el minuto 12:45 del usuario 08 enfrentándose a un formulario que no entiende.

#### Cuantificación de la fricción: El dato puro antes del promedio

Con el repositorio multimedia blindado, pasé a la fase de extracción de métricas cuantitativas. Abrí una hoja de cálculo diseñada específicamente para capturar la "experiencia cruda" por participante y por tarea. En esta etapa, mi enfoque fue de una precisión quirúrgica; me prohibí promediar o sacar conclusiones generales de forma prematura. Mi tarea era registrar el dato puro, el "qué pasó" en términos numéricos.

Volqué en las columnas de **Google Sheets** tres indicadores críticos que definirían el peso de los problemas de usabilidad:
1.  **Tasas de éxito y fracaso:** ¿Logró el usuario completar la inscripción al evento sin asistencia? ¿Se quedó bloqueado en la pasarela de pago?
2.  **Tiempos de ejecución:** No buscaba velocidad por velocidad, sino detectar dónde el tiempo invertido superaba el umbral de lo razonable, delatando una carga cognitiva excesiva.
3.  **Número y tipo de errores:** Documenté cada clic erróneo, cada vez que un usuario intentó interactuar con un elemento no clicable o cuando el sistema devolvió un error de validación que el usuario no supo corregir.

Este rigor en la cuantificación es lo que da "músculo" al análisis cualitativo. Registrar que el usuario 04 cometió tres errores en el flujo de filtros de eventos es un dato; notar que esos tres errores le tomaron 45 segundos adicionales es una evidencia de fallo de diseño. Esta hoja de métricas se convirtió en el mapa de calor que me indicaría dónde profundizar durante la revisión de los videos.

#### Inmersión forense en la psique del atleta

Con el andamiaje de datos listo, inicié la revisión activa de las grabaciones, un proceso que denomino "inmersión forense". Aquí es donde el trabajo de diseño se vuelve psicológico. Me puse los auriculares y volví a vivir cada una de las 15 sesiones, pero esta vez con la mirada de quien busca patrones ocultos en las grietas de la interfaz.

Me enfoqué obsesivamente en los protocolos de **"pensar en voz alta"**. Escuchar a un usuario decir "supongo que esto es para filtrar..." mientras su cursor vaga erráticamente por la pantalla es una señal de alarma mucho más potente que cualquier métrica de tiempo. Presté atención a las micro-expresiones: ese ligero fruncir del ceño al ver el resumen de compra, la vacilación de milisegundos antes de pulsar un botón de confirmación, o el suspiro de alivio al encontrar finalmente el botón de "Mis Eventos".

> **Insight de trinchera:** La verdadera usabilidad no se mide solo en clics exitosos, sino en la ausencia de duda. Una vacilación de tres segundos en una pantalla de pago no es un "éxito lento"; es una grieta en la confianza del usuario que puede costar miles de conversiones en producción.

Durante esta inmersión, empecé a detectar que el **UX Writing** estaba jugando un papel mucho más crítico de lo que anticipamos. Frases que nos parecían claras en el estudio estaban actuando como muros para los usuarios reales. Esta revisión cualitativa fue el puente necesario para entender el "por qué" detrás de los números rojos en mi hoja de cálculo.

#### Segmentación por perfiles: El sesgo del experto vs. el miedo del novato

Para que el análisis tuviera profundidad estratégica, segmenté mi revisión inicial basándote en los tres perfiles de usuario que habíamos definido: **Plus, Ocasional y Principiante**. Esta decisión fue vital para no homogeneizar el feedback.

Observé patrones fascinantes y preocupantes:
*   **Usuarios Plus:** Navegaban con una confianza que a veces los llevaba a ignorar instrucciones críticas, confiando en sus "atajos mentales" de plataformas anteriores. Cuando el flujo se desviaba de su modelo mental, su frustración era inmediata y vocal.
*   **Usuarios Principiantes:** Se detenían ante cada etiqueta de texto. Para ellos, la ambigüedad en el lenguaje no era una molestia menor, era un motivo para abandonar el proceso por miedo a cometer un error irreversible o realizar un pago no deseado.

Contrastar cómo un corredor "Plus" buscaba un evento específico frente a cómo un "Principiante" exploraba el calendario me permitió ver que nuestra arquitectura de información estaba intentando servir a dos amos con herramientas que solo satisfacían a medias a ambos. Esta inmersión personal, aunque no genera un entregable formal inmediato, es lo que me permitió construir la empatía técnica necesaria para la siguiente fase de síntesis.

#### La higiene de datos como escudo estratégico

Mirando hacia atrás en esta primera etapa de la actividad, mi mayor aprendizaje reafirmado es la importancia de la higiene de datos. En proyectos complejos como el de AsDeporte, donde las expectativas de los stakeholders son altas y los tiempos de desarrollo son ajustados, no puedes permitirte construir sobre cimientos de barro.

Una organización deficiente en este punto —perder una grabación, no registrar un error crítico de un usuario específico o mezclar las notas de dos participantes— puede llevar a conclusiones erróneas que descarrilen el MVP. Mi decisión de dedicar horas a esta auditoría de insumos y a la inmersión profunda fue una inversión en seguridad. Me aseguré de que cada iteración de diseño que propondría más adelante estuviera anclada en una realidad documentada, verificable y, sobre todo, humana. Había transformado el ruido de 15 sesiones de Zoom en una señal clara y estructurada, lista para ser diseccionada.

**Próximo paso:**

Con la evidencia centralizada y las métricas crudas sobre la mesa, el panorama empezó a oscurecerse. Al cruzar las notas de los 15 participantes, me di cuenta de que los fallos no eran incidentes aislados, sino síntomas de problemas estructurales que se repetían con una frecuencia alarmante. Me preparé para entrar en la fase de identificación forense, donde cada una de esas vacilaciones y errores debía ser bautizada y catalogada en una taxonomía del error que nos obligaría a cuestionar algunas de nuestras decisiones de diseño más queridas.

### Parte 2: TAXONOMÍA DEL ERROR: IDENTIFICACIÓN FORENSE

#### La metamorfosis del diseñador: de creador a forense

Al terminar la última sesión de pruebas con el usuario número 15, me encontré en un estado de silencio reflexivo. Tenía frente a mí una montaña de datos brutos: 15 grabaciones de Zoom, cientos de líneas de notas de observación y una matriz de métricas cuantitativas que empezaba a mostrar grietas en lo que yo consideraba un diseño sólido. En ese momento, mi mentalidad tuvo que cambiar radicalmente. Dejé de ser el arquitecto que defiende su obra para convertirme en un **forense del diseño**. Mi objetivo ya no era validar mis ideas, sino diseccionar con frialdad por qué el prototipo había fallado en puntos específicos.

Este paso de la **identificación forense** es donde el diseño de producto se separa del arte. No buscaba "opiniones" ni "sugerencias", buscaba patrones de comportamiento que revelaran fallas en el modelo mental que yo mismo había propuesto. La urgencia era clara: debía transformar esas 15 experiencias humanas, cargadas de frustración, duda y alivio, en una **taxonomía estructurada de 11 problemas de usabilidad (PU-01 a PU-11)**. Sabía que si no le daba un nombre, un ID y una severidad a cada hallazgo, el feedback se diluiría en la subjetividad de la siguiente reunión con los stakeholders. El rigor en este punto no era burocracia; era la única forma de blindar el MVP y asegurar que el equipo de ingeniería no desperdiciara ni una sola hora de desarrollo en soluciones que no atacaran la causa raíz.

#### El ritual de la disección: Consolidación y Revisión (Pasos 1 y 2)

Antes de bautizar el primer error, ejecuté un proceso de **consolidación de datos brutos** que me llevó varias horas de concentración absoluta. Reuní las grabaciones y las sincronicé con las notas de observación del moderador. Mi enfoque fue quirúrgico: organicé todo por participante y por tarea, utilizando una hoja de cálculo para las métricas cuantitativas crudas —tasas de éxito, tiempos y errores—. No me permití saltarme este paso porque, en mi experiencia, la memoria es el peor enemigo del análisis. Necesitaba que cada hallazgo estuviera anclado a un minuto exacto de video o a una cita textual específica.

Pasé a la **revisión y familiarización activa**. No solo escuché a los usuarios; observé sus micro-expresiones. Me detuve en los momentos de "pensar en voz alta", buscando ese instante preciso donde la mano dudaba sobre el mouse o el dedo se quedaba suspendido sobre la pantalla del móvil. Me sumergí en la frustración de los perfiles principiantes y en la exigencia técnica de los atletas Plus. Esta inmersión me permitió ver que los fallos no eran incidentes aislados. Empecé a notar que cuando tres usuarios diferentes se detenían en el mismo campo del formulario, no era una coincidencia, era un síntoma de un problema estructural de **arquitectura de información** o de **UX Writing**.

#### Construyendo la Taxonomía: Del PU-01 al PU-11 (Paso 3)

Con la mente saturada de evidencia, comencé la **identificación detallada**. Cada problema fue documentado siguiendo una estructura rígida: ID del problema, flujo afectado, descripción técnica del fallo, evidencia (citas o métricas) y frecuencia de aparición. Este rigor es lo que permite que una observación se convierta en un **insight accionable**.

A continuación, detallo los pilares de esta taxonomía que logré extraer del análisis:

*   **PU-01: La granularidad insuficiente en filtros avanzados.** Identifiqué que para los nichos de Trail, MTB y Triatlón, nuestros filtros eran demasiado genéricos. **Carlos R.** fue tajante al decir: "La falta de filtro de drafting es una omisión para triatletas". Descubrí que para el atleta de alto rendimiento, la falta de un dato técnico específico es una barrera de entrada. La frecuencia fue alta (5 usuarios, mayoritariamente el perfil Plus), lo que marcó una severidad media que debíamos atender para no perder al segmento más rentable.
*   **PU-02: Información de obstáculos en OCR.** Miguel S., nuestro perfil experto en Spartan, señaló que la información era genérica. Aquí detecté un problema de **relevancia de contenido**: el usuario no quiere saber qué es una Spartan, quiere saber qué obstáculos hay en *esta* edición específica.
*   **PU-03: La barrera psicológica del CURP.** Este fue uno de los hallazgos más reveladores en términos de **fricción cognitiva**. 4 usuarios, principalmente principiantes, se detuvieron en seco al ver este campo. **Gabriela T.** preguntó con desconfianza: "¿es muy necesario?". Mi análisis de causa raíz determinó que no era un error de campo, sino un fallo de comunicación. Estábamos pidiendo un dato sensible sin explicar el beneficio o la necesidad legal, lo que activaba una alerta de privacidad innecesaria.
*   **PU-04: El peso cultural del pago offline.** A pesar de nuestra apuesta por lo digital, 6 de los 15 usuarios (perfiles principiantes y mayores) exigieron mayor visibilidad para el pago en Oxxo. **Javier M.** lo resumió perfectamente: "Oxxo es lo mejor para mí". Aquí la lección fue de humildad estratégica: la "calma" que otorga el pago físico es un pilar de la tasa de conversión en el mercado mexicano que no podíamos ignorar.
*   **PU-05: El punto ciego de la edición post-inscripción.** **Luis F.** nos hizo ver que el diseño actual asumía un mundo perfecto donde nadie se equivoca. Al preguntar "¿hay forma fácil de cambiar la talla de la playera?", reveló que no habíamos contemplado la gestión de errores del usuario después de la transacción.

#### Micro-fricciones y el valor de la pedagogía (PUs restantes)

Continué la disección bajando al detalle de la interfaz y la propuesta de valor:

*   **PU-06 y PU-07: Contenido visual y terreno.** Los usuarios jóvenes pedían más "hype" (fotos/videos), mientras que los principiantes como **Verónica M.** buscaban datos de supervivencia básica: "¿el terreno es plano o con subidas?". Esto me indicó que la jerarquía de información en la ficha del evento debía ser dinámica según el perfil.
*   **PU-08: La visibilidad del control en móvil.** Observé una **micro-fricción** crítica en la app. Usuarios como **Roberto N.** vacilaron milisegundos antes de encontrar el ícono de filtros. En el diseño de alta fidelidad, una duda de un segundo es una falla de **prominencia**. Si el usuario no lo ve instantáneamente, el control no existe.
*   **PU-09 y PU-10: La promesa de AsDeporte Plus.** Los usuarios Plus, como **Elena V.** y **Ricardo H.**, mostraron una expectativa altísima. Exigían claridad absoluta en el Wallet y una integración con wearables que fuera más allá de lo estético. Querían sincronización bidireccional con Strava o Polar. Aunque esto último era para el post-MVP, registrarlo ahora blindaba la visión a largo plazo.
*   **PU-11: El éxito de la pedagogía.** Este fue el hallazgo más gratificante. Los 5 principiantes reaccionaron con alivio ante la "Guía para tu primera carrera". **Gabriela T.** exclamó: "¡Esto está súper bien!". Validé que el diseño de servicios deportivos en México debe ser, ante todo, educativo. No solo vendemos inscripciones, vendemos la confianza para cruzar la meta.

#### Análisis de Causa Raíz: Más allá del síntoma (Paso 5)

Para cada uno de estos 11 problemas, no me conformé con el "qué", sino que apliqué la técnica de los **5 Porqués** para llegar a la **causa raíz**. ¿Por qué el usuario no encontraba el filtro? ¿Era el ícono? ¿Era la ubicación? ¿Era el contraste? Al cruzar estos hallazgos con los Sitemaps y las Especificaciones de IxD de las fases anteriores, pude diagnosticar si el fallo venía de una decisión de arquitectura o de una ejecución visual deficiente.

> **Insight de Senior:** Ver a un usuario fallar en una tarea que tú diseñaste es la lección de humildad más grande en esta carrera. La tentación de decir "el usuario no entendió" es el camino fácil; el camino del Product Designer es admitir que "la interfaz no supo explicar". Esta taxonomía no es una lista de errores del usuario, es mi lista de deudas de diseño que debo pagar en la siguiente iteración.

#### Cuantificación: El peso de la evidencia (Paso 6)

Para cerrar esta fase de diagnóstico, utilicé los datos cuantitativos para añadir peso a la cualitativa. No es lo mismo decir "algunos usuarios se confundieron" que decir "el 40% de los principiantes abandonó el flujo en el campo del CURP, aumentando el tiempo de tarea en un 200%". Esta combinación de **el "por qué" (cualitativo) con el "cuánto" (cuantitativo)** es lo que le da autoridad al informe. Transformé la observación en una métrica de impacto que ningún stakeholder podría ignorar. Había convertido el caos de las sesiones en un mapa de ruta preciso, donde cada PU tenía una razón de ser y una consecuencia directa en el negocio.

**Próximo paso:**

Con la taxonomía de los 11 problemas perfectamente definida y documentada, me enfrenté a un nuevo desafío: la saturación de información. Tenía una lista de fallos, pero no una estructura que me permitiera ver el "bosque" detrás de los árboles. El siguiente paso lógico era someter estos hallazgos a una sesión de síntesis profunda para encontrar las conexiones ocultas entre ellos. Sabía que si lograba agrupar estos errores por temas estratégicos, la solución dejaría de ser un parche y se convertiría en una evolución real del producto.

**ARQUITECTURA DEL CAOS: AGRUPACIÓN Y AFINIDAD**

### Parte 3: ARQUITECTURA DEL CAOS: AGRUPACIÓN Y AFINIDAD

#### La parálisis del análisis y el salto a la síntesis

Tenía ante mí una lista de 11 problemas de usabilidad (PU) perfectamente catalogados, pero sentía que estaba mirando piezas de un motor desarmado sin entender por qué el coche no arrancaba. Como diseñador, sé que una lista plana de errores es un diagnóstico táctico útil, pero es insuficiente para mover la aguja estratégica de un producto como AsDeporte. Si me limitaba a corregir cada PU de forma aislada, corría el riesgo de diseñar "parches" visuales en lugar de soluciones sistémicas. La saturación de datos era real: 15 usuarios, decenas de horas de grabación y cientos de notas de observación empezaban a pesar.

Mi razonamiento en este punto de inflexión fue claro: necesitaba elevar la conversación. No podíamos ir con el equipo de ingeniería y decirles "arregla estos 11 botones". Teníamos que explicarles qué áreas de la experiencia estaban rotas y por qué. Para lograrlo, decidí ejecutar el **paso 4 de mi metodología de recopilación y análisis de feedback**, centrándome en la técnica de **Mapa de Afinidad**. El objetivo no era solo organizar, sino destilar la esencia del dolor del usuario. Sabía que si lograba agrupar estos errores por patrones de comportamiento, la solución dejaría de ser una lista de tareas para convertirse en una evolución del modelo mental de la plataforma.

#### El ritual del post-it digital: Ordenando el caos en Miro

Para este proceso de síntesis cualitativa, despejé mi tablero en **Miro** y comencé lo que yo llamo el "volcado forense". Siguiendo el protocolo, convertí cada uno de los 11 problemas identificados en notas adhesivas digitales. Verlos ahí, flotando en el lienzo blanco, me permitió empezar a moverlos, agruparlos y, lo más importante, encontrar las relaciones invisibles que los unían. 

Este no fue un ejercicio mecánico de arrastrar y soltar. Fue una discusión visual conmigo mismo (y posteriormente validada con el equipo) donde cuestioné cada etiqueta. ¿Este error pertenece a la interfaz o a la arquitectura de la información? ¿Es un problema de confianza o de falta de datos? A medida que las notas se movían, el caos empezó a cobrar un sentido arquitectónico. Los nombres de los temas no fueron definitivos desde el inicio; se refinaron colaborativamente hasta que cada clúster representaba una "zona de fricción" clara y distinta. El resultado fue la creación de cuatro temas centrales que ahora dictaban la prioridad del MVP.

#### Tema 1: La barrera del descubrimiento y la evaluación

El primer gran clúster que emergió fue el de **Descubrimiento y Evaluación de Eventos**. Aquí es donde el usuario decide si se queda o se va, y los datos fueron contundentes. Al agrupar las notas, vi una conexión directa entre la falta de filtros avanzados para nichos como Trail o Triatlón (**PU-01**, que afectó a 5 de cada 15 usuarios) y la micro-fricción que causaba el ícono de filtros en la app móvil (**PU-08**, reportado por 4 usuarios). 

No se trataba solo de que el ícono fuera pequeño; es que el sistema no estaba ayudando al usuario a "rebanar" la oferta de eventos para encontrar lo que realmente le importaba. Esta fricción se agravaba con la falta de especificidad en la información. Por ejemplo, los atletas de OCR (Carreras de Obstáculos) se sentían frustrados por recibir información genérica (**PU-02**), mientras que los principiantes (6 de 15 usuarios) demandaban saber con precisión el tipo de terreno o la dificultad antes de inscribirse (**PU-07**). 

> **Insight de Diseño:** El descubrimiento no es solo una función de búsqueda; es un ejercicio de reducción de ansiedad. Si el usuario no puede filtrar por sus necesidades específicas o entender la dificultad del terreno, el riesgo percibido aumenta y la intención de compra cae.

Este tema consolidó la idea de que nuestra página de detalle de evento y nuestro motor de búsqueda estaban fallando en el *affordance* informativo. Teníamos la información, pero no la estábamos entregando de forma escaneable o relevante para cada perfil.

#### Tema 2: El muro psicológico de la inscripción y el pago

El segundo pilar de dolor, y quizás el más crítico para el negocio, fue el **Proceso de Inscripción y Pago**. Aquí la síntesis reveló algo que iba más allá de la usabilidad técnica: era un problema de confianza. La solicitud del CURP durante el registro (**PU-03**) generó dudas y desconfianza en 7 de los 15 participantes, especialmente en los perfiles principiantes y ocasionales. Para ellos, pedir ese dato sin una justificación clara se sentía como una intrusión innecesaria.

Al cruzar esto con la necesidad persistente de opciones de pago offline como Oxxo (**PU-04**, relevante para 8 de 15 usuarios), el patrón fue obvio: una parte significativa de nuestra base de usuarios todavía percibe el entorno digital como un lugar de riesgo. Si a esto le sumamos que el sistema no permitía editar datos básicos como la talla de la playera post-inscripción (**PU-05**), estábamos creando un flujo de "un solo sentido" que generaba ansiedad. El usuario sentía que, una vez que soltaba su dinero, perdía el control sobre su inscripción. Agrupar estos problemas me permitió diagnosticar que no solo necesitábamos mejores formularios, sino una estrategia de **UX Writing** que blindara la confianza del usuario en cada paso.

#### Tema 3: La promesa rota de la experiencia Plus

Un hallazgo que me dolió especialmente como diseñador fue el clúster de la **Experiencia AsDeporte Plus**. El programa de lealtad es un activo estratégico para la empresa, pero el mapa de afinidad mostró que el MVP estaba creando cortocircuitos en esta experiencia premium. 

Agrupé la confusión sobre las condiciones de uso del Wallet (**PU-09**, 3 usuarios) con la navegación deficiente entre el Hub Plus y el flujo de inscripción (**PU-12**). La síntesis fue clara: para un usuario Plus, la fricción es doblemente costosa. Estos usuarios esperan que el sistema reconozca su estatus automáticamente y les aplique los beneficios sin que ellos tengan que buscarlos. Descubrí que los usuarios tenían que "adivinar" si un beneficio aplicaba a un evento antes de inscribirse, lo que rompe por completo la percepción de valor de la membresía. Este grupo de problemas dejó de ser una serie de errores de navegación para convertirse en una señal de alerta sobre la retención de nuestros clientes más valiosos.

#### Tema 4: El depósito de la visión futura (Post-MVP)

Finalmente, creé un cuarto tema para las **Expectativas de Integración y Funcionalidades Avanzadas**. Aquí aislé intencionalmente problemas como la demanda de una integración bidireccional profunda con wearables (**PU-10**, mencionada por 5 usuarios frecuentes). 

Como **Senior Product Designer**, mi responsabilidad es proteger el alcance del MVP. Si mezclaba estos deseos de alta complejidad técnica con los errores críticos de inscripción, corría el riesgo de descarrilar el lanzamiento. Al crear este clúster "Post-MVP", logré dos cosas:
1. Validar que los usuarios avanzados tienen una ambición alta para el producto, lo que guía el roadmap a largo plazo.
2. Mantener el enfoque del equipo de desarrollo en resolver primero los problemas de "higiene" (filtros, pago, confianza) que impiden que el producto funcione hoy.

#### El valor de la síntesis: De arreglar botones a reparar sistemas

Al finalizar esta sesión de afinidad, el panorama cambió por completo. Ya no teníamos 11 problemas sueltos; teníamos cuatro áreas estratégicas de intervención. Esta estructura me permitió comunicar a los stakeholders que no estábamos simplemente "limpiando la interfaz", sino que estábamos reparando la eficiencia del flujo de vida del deportista. 

Habíamos pasado de la observación microscópica a una visión de rayos X del producto. El mapa de afinidad se convirtió en nuestra brújula. Sabíamos exactamente dónde estaban los cuellos de botella y, lo más importante, entendíamos que muchos de estos errores, aunque parecían diferentes, compartían la misma raíz. Habíamos transformado el ruido de las pruebas de usabilidad en una señal clara para la iteración.

**Próximo paso:**

Con los problemas ya agrupados y el "qué" perfectamente definido, me enfrenté a la pregunta más difícil de todas: el "por qué". Agrupar los errores por temas me dio la estructura, pero no me explicaba la causa raíz de cada falla. Sabía que si no bajaba al detalle técnico y psicológico de por qué el usuario no encontraba el ícono de filtros o por qué el CURP generaba tanto rechazo, cualquier solución que propusiéramos sería superficial. El siguiente desafío era realizar un análisis forense de causa raíz para cada uno de estos temas, conectando los hallazgos con las decisiones de arquitectura y diseño que tomamos meses atrás.

**EL 'POR QUÉ' SISTÉMICO: ANÁLISIS DE CAUSA RAÍZ**

### Parte 4: EL 'POR QUÉ' SISTÉMICO: ANÁLISIS DE CAUSA RAÍZ

#### El diagnóstico forense tras el mapa de afinidad

Al terminar el mapa de afinidad, me quedé observando los grupos de notas en la pantalla. Tenía el "qué", pero me faltaba el "por qué". Agrupar 11 problemas críticos por temas me dio una estructura visual, pero como diseñador, sabía que si no bajaba al nivel de la causa raíz, cualquier cambio que hiciéramos en el prototipo sería cosmético. No podíamos permitirnos el lujo de simplemente "mover un botón" si el fallo real estaba en la arquitectura que definimos tres meses atrás. 

Sentí la necesidad imperiosa de ejecutar un **Análisis de Causa Raíz (RCA)**. En este punto del proceso, mi rol cambió: dejé de ser el facilitador de las pruebas para convertirme en un auditor forense de mi propio trabajo. Tenía que ser honesto y brutal conmigo mismo. ¿Este error de navegación nació en el Sitemap que tracé en la Fase 1? ¿Es una falla de las especificaciones de interacción de la Fase 2? ¿O es una limitación del alcance del MVP que aceptamos por presión del cronograma? Para responder esto, abrí en paralelo mis archivos de **Recopilación y Análisis de Feedback** y el **Análisis de Causa Raíz**, dispuesto a encontrar la falla sistémica detrás de cada fricción.

#### Metodología del análisis de causa raíz: auditando el proceso

Para ejecutar este análisis, seguí una metodología rigurosa que no permitiera ambigüedades. No me limité a documentar que "el usuario falló"; indagué en el origen técnico y psicológico de esa falla. Mi proceso consistió en contrastar cada hallazgo de las pruebas con los artefactos que produje en las fases anteriores: el **Inventario de Contenido**, los **Sitemaps**, las **Especificaciones de IxD** y el **Manual de UX Writing**.

Clasifiqué cada causa raíz en cuatro dimensiones críticas para entender dónde intervenir:
*   **Arquitectura de la Información (AI):** ¿La información está mal organizada o las etiquetas son confusas?
*   **Diseño de Interacción (IxD):** ¿El comportamiento de los controles es impredecible?
*   **Diseño Visual (UI):** ¿Hay falta de jerarquía o una *affordance* débil?
*   **UX Writing:** ¿El texto es insuficiente o carece de contexto?

Este enfoque me permitió descubrir que muchos problemas que parecían de interfaz eran, en realidad, deudas de definición que arrastrábamos desde el inicio del proyecto.

#### La brecha en los nichos: el diagnóstico de PU-01 y PU-07

Al analizar el problema **PU-01**, relacionado con los filtros avanzados para nichos como Trail, MTB o Triatlón, la causa raíz fue evidente y un tanto dolorosa: una decisión de alcance. Al revisar la **Definición del Alcance del MVP**, recordé que priorizamos filtros generales de disciplina para acelerar el lanzamiento, sacrificando la **granularidad** necesaria para el atleta experimentado. El análisis técnico me confirmó que, aunque el **Inventario de Contenido** contemplaba las sub-disciplinas, la lógica de sub-filtros hiper-específicos (como el tipo de terreno o reglas de *drafting*) no fue inyectada en los wireframes finales por un exceso de simplificación.

Esto conectaba directamente con el **PU-07**, donde los perfiles principiantes se sentían inseguros al no encontrar el nivel de dificultad estandarizado en las carreras. Al auditar la **Página de Detalle de Evento**, descubrí que no habíamos establecido campos obligatorios para "tipo de terreno" en el inventario de contenido original. La causa raíz aquí fue una falta de estandarización en la fase de estrategia: si el dato no es un requisito desde la arquitectura, el diseño visual no tiene dónde mostrarlo, dejando al usuario novato en un estado de incertidumbre total antes de pagar.

#### Estética vs. Función: los casos de PU-08 y PU-03

Uno de los hallazgos más reveladores fue la micro-fricción con el ícono de filtros en la app móvil (**PU-08**). Aquí, el culpable fue el **Diseño Visual (UI)**. En mi búsqueda por una interfaz limpia y minimalista que siguiera los patrones de interacción modernos, eliminé la etiqueta textual "Filtrar" y confié ciegamente en la iconografía. El análisis de causa raíz me mostró que para los usuarios menos tecnológicos, la *affordance* visual del ícono por sí solo era insuficiente. Fue una lección de humildad: la estética nunca debe comprometer la claridad, especialmente en una herramienta que debe ser inclusiva para todas las edades.

Por otro lado, el rechazo a la solicitud del CURP (**PU-03**) fue un fallo puro de **UX Writing** y transparencia. Al revisar la **Pantalla de Inscripción**, noté que pedíamos un dato altamente sensible sin dar una sola explicación de por qué era necesario (un requisito de negocio para seguros y validación de identidad). La causa raíz fue la omisión de un microcopy justificativo. El usuario no veía la conexión entre correr 5km y entregar su identificador oficial, lo que generaba una desconfianza inmediata que ponía en riesgo la conversión.

#### El vacío de información en la experiencia Plus (PU-09)

Finalmente, analicé la confusión con el Wallet de Asdeporte Plus (**PU-09**). Aunque el **Hub de Beneficios** estaba visualmente bien resuelto, la causa raíz del problema fue una falla en la **Arquitectura de la Información** y el flujo de interacción. No diseñamos puntos de acceso proactivos a los términos y condiciones en el momento del uso del crédito. 

> El diseño falló al no integrar enlaces contextuales sobre la vigencia y las reglas de redención en el flujo de pago. Dejamos que el usuario llegara al final del proceso con dudas sobre su saldo, lo que demuestra que un beneficio mal comunicado se percibe, paradójicamente, como una carga cognitiva.

Este análisis forense me permitió entender que el producto no estaba "roto", sino que tenía desconexiones lógicas entre lo que el negocio necesitaba y lo que la interfaz explicaba. Había diagnosticado las enfermedades; ahora necesitaba medir su gravedad para saber qué operar primero.

**Próximo paso:**

Con las causas raíz identificadas, me encontré con un nuevo dilema: el diagnóstico técnico era sólido, pero carecía de la fuerza de los números para convencer a los stakeholders de los cambios estructurales necesarios. Sabía que explicar el "por qué" era solo la mitad de la batalla; necesitaba demostrar el "cuánto". Me preparé para cruzar estos hallazgos cualitativos con las métricas de éxito y las escalas de usabilidad que habíamos recolectado, transformando mis intuiciones de diseño en datos duros e incuestionables.

**LA VERDAD DE LOS NÚMEROS: CUANTIFICACIÓN DE IMPACTO**

### Parte 5: LA VERDAD DE LOS NÚMEROS: CUANTIFICACIÓN DE IMPACTO

#### El peso de la evidencia sobre la intuición

Cerré el análisis de causa raíz con una certeza técnica absoluta, pero sabía que en la próxima reunión de producto las palabras no serían suficientes. Como diseñador, puedo diagnosticar que un flujo está "roto" o que una etiqueta es "confusa", pero cuando te sientas frente a un equipo de ingeniería y producto, la subjetividad es un lujo que no te puedes permitir. Mi razonamiento fue pragmático: necesitaba transformar las frustraciones que vi en las grabaciones en métricas de impacto indiscutibles. No se trataba solo de saber *por qué* fallaban, sino de dimensionar el riesgo de negocio que representaba cada segundo de duda.

Inicié una fase de consolidación forense de datos. Mi objetivo era cruzar el "por qué" cualitativo con el "cuánto" cuantitativo para establecer una línea base de rendimiento del MVP. Sin este rigor, cualquier decisión de diseño posterior sería interpretada como una preferencia estética y no como una corrección estratégica. Me sumergí de nuevo en las hojas de cálculo donde habíamos volcado las métricas crudas de los 15 participantes, buscando los patrones numéricos que confirmaran mis sospechas.

#### La disección de las métricas crudas

Para ejecutar esta cuantificación, no me limité a promediar números. Realicé una revisión exhaustiva de cada sesión, cronómetro en mano, para extraer tiempos exactos en tarea y tasas de éxito reales. Volví a las notas de observación y a las grabaciones para capturar cada **pausa cognitiva** —ese silencio revelador donde el usuario procesa una interfaz que no le está hablando claro—.

Organicé los datos bajo una estructura de tres pilares que me permitiera ver la salud del producto desde diferentes ángulos:
*   **Tasas de Éxito:** ¿Lograron completar el objetivo o el diseño los detuvo?
*   **Single Ease Question (SEQ):** La percepción inmediata de dificultad tras cada tarea, en una escala del 1 al 5.
*   **System Usability Scale (SUS):** El veredicto global sobre la usabilidad del sistema.

Este proceso de limpieza y tabulación fue tedioso pero vital. Al comparar los tiempos de los usuarios del Perfil Frecuente contra los del Perfil Principiante, empecé a ver dónde la arquitectura de información estaba castigando a quienes más ayuda necesitaban.

#### El abismo en el descubrimiento de eventos

El primer golpe de realidad llegó al analizar la **Tarea 1.2**, centrada en el uso de filtros específicos. Aquí, el contraste entre la intención del diseño y la realidad del usuario fue evidente. Al segmentar a los 5 usuarios con intereses de nicho, descubrí una **Tasa de Éxito de apenas el 40%**. Solo 2 de ellos lograron encontrar un evento que se ajustara a sus necesidades ideales.

> El dato más alarmante no fue solo el fallo, sino el coste en tiempo. Ricardo, buscando un Gran Fondo, y Sofía, tratando de filtrar por desnivel en trail, invirtieron un promedio de **1 minuto y 35 segundos** en la tarea. Es un tiempo excesivo para una función que debería ser instantánea. El SEQ de 3.8/5 en este subgrupo reflejaba una insatisfacción latente: el sistema funcionaba, pero no les servía para lo que ellos consideraban "su deporte".

Peor aún fue el resultado para el problema que etiqueté como **PU-07**: la información sobre el terreno y la dificultad para principiantes. En las 6 sesiones donde este perfil fue evaluado, la **Tasa de Éxito fue del 0%**. Nadie encontró esta información de forma explícita. Estos usuarios perdieron, en promedio, **25 segundos adicionales** releyendo descripciones y escaneando la pantalla en busca de un dato que simplemente no estaba allí. Esos 25 segundos son "frustración pura"; es el momento exacto en el que un usuario potencial decide que el evento es "demasiado difícil" o "no es para él" y abandona la plataforma.

#### Micro-fricciones en el embudo de conversión

Al moverme hacia el proceso de inscripción y pago, las métricas revelaron un tipo de fricción más sutil pero igualmente peligrosa para el negocio. El análisis del **PU-03**, relacionado con la solicitud del CURP, mostró un fenómeno interesante: la **pausa cognitiva**. 

*   **Incremento de tiempo:** Los 7 usuarios que cuestionaron la necesidad del CURP tardaron **45 segundos** en completar el primer paso de inscripción, comparado con los **30 segundos** de quienes no dudaron. 
*   **Riesgo de abandono:** Aunque la tasa de abandono en el prototipo fue del 0%, esos 15 segundos de duda representan un punto de fuga crítico en un entorno real. Un usuario que duda de por qué le pides un dato sensible es un usuario que puede cerrar la pestaña en cualquier momento.

En contraste, la cuantificación validó decisiones estratégicas que inicialmente parecían arriesgadas. La inclusión de opciones de pago offline (Oxxo) fue un acierto rotundo para los perfiles que la prefieren, arrojando un **SEQ de 4.7/5**. Este número blindó la decisión frente a cualquier intento de simplificar el checkout eliminando métodos de pago "tradicionales". Los datos gritaban que, para el mercado mexicano, la confianza se construye ofreciendo alternativas al plástico.

#### El veredicto del SUS y la salud del MVP

Finalmente, calculé el **System Usability Scale (SUS)** global para tener una fotografía completa de la experiencia. El resultado fue un **88.3**, una cifra que, en términos técnicos, categoriza la usabilidad del prototipo como "Excelente". Sin embargo, como diseñador senior, aprendí a no dejarme seducir por los promedios generales sin mirar las costuras del dato:

*   **Perfil Frecuente/Plus:** 89.5 (Casi perfecto para el usuario experto).
*   **Perfil Principiante:** 87.0 (Sólido, pero con margen de mejora).
*   **Tasa de Éxito General:** 92.3%.

Este 92.3% de éxito general, sumado a un **SEQ promedio de 4.5/5**, me dio la tranquilidad de que la arquitectura base del MVP es robusta. No encontramos errores bloqueantes; nadie se quedó atrapado en un bucle infinito ni hubo fallos catastróficos que impidieran terminar una inscripción. 

> La lección aquí es que la excelencia no reside en evitar el colapso del sistema —eso es lo mínimo esperado—, sino en eliminar las micro-fricciones de 15 o 25 segundos que detectamos. Un SUS de 88.3 es una victoria, pero el 0% de éxito en la información de terreno es una señal de alarma que no podíamos ignorar. Tenía los números, tenía las causas y tenía la validación de los perfiles. El siguiente paso era el más difícil: decidir qué arreglar primero con el tiempo y el presupuesto que teníamos.

**Próximo paso:**

Con las métricas sobre la mesa, la realidad se volvió ineludible: no podíamos resolver los 11 problemas identificados antes del lanzamiento del MVP. Me enfrenté al momento de mayor tensión política y estratégica del proyecto: el triaje. Sabía que debía sentarme con los stakeholders y defender una lista de prioridades donde algunas ideas queridas tendrían que quedarse fuera para salvar la conversión y la confianza del usuario.

**EL TRIAJE ESTRATÉGICO: PRIORIZACIÓN PARA EL MVP**

### Parte 6: EL TRIAJE ESTRATÉGICO: PRIORIZACIÓN PARA EL MVP

#### La realidad del calendario contra la utopía del diseño

Tenía sobre la mesa una lista de 11 problemas críticos de usabilidad y un cronograma que no iba a estirarse ni un solo día. Tras cerrar el análisis cuantitativo y ver que, aunque el SUS era sólido (88.3), había grietas profundas en la confianza del usuario, me enfrenté al momento de mayor tensión estratégica del proyecto: el triaje. Mi razonamiento en ese instante fue puramente pragmático; como diseñador, mi responsabilidad no era entregar un producto perfecto en el vacío, sino asegurar la viabilidad del MVP en el mundo real. Sabía que si intentábamos arreglarlo todo, terminaríamos no lanzando nada o, peor aún, lanzando una solución a medias que no resolvería los problemas de fondo.

Pasar de la cuantificación al triaje significó transformar datos brutos en una hoja de ruta de ejecución inmediata. Tuve que separar el "ruido" —aquellas mejoras estéticas o de conveniencia que todos queríamos— de las "señales de abandono" —esos puntos de fricción donde el usuario simplemente cerraba la aplicación—. Este ejercicio de priorización no fue una corazonada; fue un proceso de filtrado forense donde cada hallazgo tuvo que ganarse su lugar en el backlog de desarrollo.

#### El sistema de pesas y medidas: Objetividad contra la intuición

Para evitar que la mesa de decisiones se convirtiera en un campo de batalla de opiniones subjetivas, apliqué un marco de priorización estricto basado en cuatro ejes cardinales. No quería que "el que más gritara" en la sala decidiera qué se programaba, así que utilicé una matriz de evaluación que blindara las decisiones:

*   **Impacto UX:** Evalué la severidad del problema. ¿Es un bloqueo total de la tarea o una micro-fricción? ¿Genera frustración o simplemente una duda momentánea?
*   **Impacto de Negocio:** Crucé los hallazgos con los KPIs del MVP. ¿Afecta la tasa de conversión de inscripciones? ¿Pone en riesgo el valor percibido de la suscripción Plus?
*   **Frecuencia:** Utilicé el dato duro de las pruebas. Si un problema apareció en 8 de los 15 usuarios, su peso era indiscutible.
*   **Esfuerzo de Solución:** Trabajé de cerca con ingeniería para estimar si la corrección requería un cambio profundo en la arquitectura de datos o si era un ajuste de *UX writing* o interfaz.

Este sistema me permitió sentar a los *stakeholders* y presentar una lista donde la prioridad "Crítica" no era una etiqueta emocional, sino el resultado de una fórmula de impacto real. Fue la única forma de que el equipo aceptara que algunas ideas queridas tendrían que "morir" temporalmente para que el producto pudiera sobrevivir al lanzamiento.

#### El bloque de supervivencia: Prioridad ALTA

Identifiqué cinco problemas que consideré innegociables para el lanzamiento del MVP. Estos hallazgos, documentados en la lista priorizada, representaban el mayor riesgo para la conversión y la confianza:

*   **PU-03 (Solicitud de CURP):** Este fue el hallazgo más delicado. Detecté que en 7 de cada 15 usuarios, especialmente en perfiles principiantes, la solicitud de este dato generaba una desconfianza inmediata. La causa raíz era la falta de transparencia. Decidí que no podíamos lanzar sin mejorar el *UX writing* para explicar por qué es necesario o, en su defecto, hacerlo opcional para no romper el flujo de inscripción en un paso tan sensible.
*   **PU-04 (Pagos Offline/Oxxo):** Con una frecuencia de 8/15, quedó claro que la opción de pago en efectivo sigue siendo un habilitador de inclusión crítica en México. El problema no era que no existiera, sino que su visibilidad era baja. Al ser un esfuerzo de implementación bajo, lo prioricé como una victoria rápida para asegurar la conversión en segmentos que desconfían de las transacciones digitales.
*   **PU-07 (Información de Terreno):** Para los 6 usuarios que representaban el perfil principiante, la falta de detalles sobre la dificultad o el terreno era un factor de "no-show". Si el usuario no sabe a qué se enfrenta, no se inscribe. La solución requería estandarizar cómo los organizadores cargan esta información, un esfuerzo medio que aceptamos asumir para reducir abandonos.
*   **PU-11 y PU-09:** Estos dos puntos blindan los extremos de nuestra pirámide de usuarios. Las guías para principiantes (PU-11) reducen la intimidación para el nuevo atleta, mientras que la claridad en las condiciones del Wallet (PU-09) protege la satisfacción del usuario Plus, nuestro segmento de mayor valor.

#### La optimización de segunda línea: Prioridad MEDIA

En el nivel de prioridad media, agrupé aquellos problemas que, si bien afectaban la fluidez, no impedían que la transacción principal se completara. Aquí es donde el criterio de "mejora sustancial" fue clave. Por ejemplo, el **PU-01 (Filtros de nicho)** y el **PU-12 (Navegación del Hub Plus)** se clasificaron aquí porque el prototipo actual ya representaba un salto cuántico respecto a la aplicación vieja. 

Aunque los atletas de triatlón o MTB pedían más granularidad (5/15 usuarios), el MVP ya cubría sus necesidades básicas. Decidí que estos serían tratados como *fast-follows*: mejoras que vendrían inmediatamente después del lanzamiento inicial. Por otro lado, incluí el **PU-08 (Ícono de filtros)** y el **PU-13 (Jerarquía de costos)** como ajustes de "higiene visual". Son cambios de bajo esfuerzo que mejoran el *affordance* y evitan confusiones momentáneas sin requerir una reingeniería del flujo.

#### El descarte estratégico y la promesa del Roadmap

Como diseñador senior, sé que la madurez profesional se demuestra en lo que decides *no* hacer. Tuve que ser frío al descartar elementos como el **PU-02 (Detalle de obstáculos OCR)**. Aunque para ese nicho es una información vital, solo un usuario de los 15 lo mencionó. Integrar esa lógica de datos específica para un solo deporte en esta etapa habría descarrilado el cronograma del MVP. Lo mismo ocurrió con el **PU-05 (Editar talla de playera post-inscripción)**; es una conveniencia deseable, pero no es una función central para el éxito del lanzamiento.

El caso más interesante fue el **PU-10 (Integración profunda con Wearables)**. Los usuarios Plus mostraron una expectativa altísima sobre la bidireccionalidad de los datos (que la app "hable" con su reloj y viceversa). Sin embargo, la complejidad técnica de esto excedía por mucho el alcance actual. En lugar de intentar una solución mediocre, decidí elevarlo como el pilar estratégico de la Versión 2.0. No le dijimos "no" al usuario, sino que definimos el momento tecnológico correcto para entregárselo.

> El diseño no termina cuando la interfaz es bonita; termina cuando has equilibrado la ansiedad del negocio, las limitaciones de ingeniería y las necesidades del usuario en una lista de tareas ejecutable. Priorizar basándose en evidencia es el único acto de defensa que tenemos contra el "feature creep" que mata a los productos antes de nacer. Decir "no" a una funcionalidad hoy es, paradójicamente, la única forma de garantizar una experiencia de calidad mañana.

**Próximo paso:**

Con el triaje finalizado y el alcance del MVP blindado, me enfrenté al último desafío de esta fase: la rendición de cuentas. Tenía que empaquetar toda esta inteligencia forense en un informe de hallazgos que no solo documentara los errores, sino que convenciera a la dirección de que el camino trazado era el más seguro para el negocio. El momento de la verdad llegaría al presentar el Roadmap final, donde cada decisión de diseño se transformaría en una promesa de ejecución para el equipo de desarrollo.

**EL CIERRE EJECUTIVO: INFORME DE HALLAZGOS Y ROADMAP**

### Parte 7: EL CIERRE EJECUTIVO: INFORME DE HALLAZGOS Y ROADMAP

#### Del triaje a la rendición de cuentas: el peso de la evidencia

El triaje estratégico me había permitido separar el ruido de las señales claras, pero ahora me enfrentaba al reto más delicado de cualquier proceso de diseño: la rendición de cuentas ante los stakeholders. Como diseñador, sé que no basta con tener la razón basada en la intuición; en una organización con el legado y la escala de AsDeporte, la evidencia debe ser innegable. Tenía que transformar horas de grabaciones, notas dispersas y reacciones viscerales en un artefacto de inteligencia que blindara el diseño del MVP frente a las opiniones subjetivas que suelen aparecer en las etapas finales.

Mi razonamiento fue claro: el informe final no podía ser solo una lista de errores. Debía ser un puente sólido entre mis decisiones de diseño y la ejecución técnica que vendría a continuación. Necesitaba que la dirección viera que cada ajuste propuesto no era un capricho estético, sino una respuesta directa a una fricción medida que ponía en riesgo la conversión o la confianza del usuario. Al cerrar el archivo **07_informe_de_hallazgos_de_pruebas_de_usabilidad.pdf**, sentí la tranquilidad de quien ha construido un caso basado en hechos, no en suposiciones.

#### Consolidación forense: buceando en la "caja negra" de datos

La creación de este informe comenzó con lo que llamo una "consolidación forense". Siguiendo el rigor metodológico que tracé en el documento **01_recopilacion_y_analisis_de_feedback_de_pruebas_de_usabilidad.pdf**, me encerré a revisar la caja negra de las 15 sesiones de prueba. No fue un proceso pasivo; utilicé las grabaciones de Zoom y OBS Studio como mi fuente primaria, contrastándolas con las notas de observación que tomamos durante las sesiones moderadas.

Organicé esta masa de datos en Google Sheets, estructurándola meticulosamente por participante y por tarea. Mi enfoque no fue solo registrar si el usuario completaba la acción, sino capturar el "cómo". Revisé segmentos clave donde los participantes fruncían el ceño o hacían pausas prolongadas antes de hacer clic. Esta inmersión profunda me permitió identificar patrones que las métricas crudas a veces ocultan. Por ejemplo, al analizar las expresiones de frustración y los comentarios de "pensar en voz alta", pude mapear no solo los fallos de navegación, sino las brechas en el modelo mental de los usuarios Plus frente a los principiantes.

#### El SUS como escudo: 88.3 razones para confiar

Uno de los momentos más satisfactorios de este análisis fue el cálculo de la métrica **SUS (System Usability Scale)**. Tras procesar las respuestas de los 15 participantes, el prototipo alcanzó una puntuación de **88.3**. En el lenguaje del diseño de producto, esto no es solo un buen número; es una calificación de "excelente" que valida la arquitectura fundamental que propuse.

Presentar este dato a los stakeholders fue mi primera maniobra estratégica. El 88.3 funcionó como un escudo de confianza que respaldaba decisiones críticas como el flujo de inscripción simplificado en 3 pasos y la estructura del Hub de Beneficios Plus. Sin embargo, como mentor en este oficio, sé que un SUS alto no significa que el trabajo haya terminado. Utilicé este éxito general para ganar el capital político necesario y discutir con honestidad los 13 problemas de usabilidad identificados, enfocándome especialmente en los 5 de prioridad alta que podían comprometer la experiencia si no se resolvían antes del desarrollo.

#### PU-03 y el dilema de la privacidad: el caso del CURP

El hallazgo más revelador sobre la fricción psicológica fue el problema identificado como **PU-03**, relacionado con la solicitud del CURP durante la inscripción. Detecté que 7 de los 15 participantes, principalmente de los perfiles "Principiante" y "Ocasional", mostraron una desconfianza inmediata al llegar a este campo. Los datos cuantitativos fueron lapidarios: el tiempo promedio en esa tarea aumentó un **50%**, pasando de 30 a 45 segundos, simplemente porque los usuarios se detenían a cuestionar la necesidad de entregar un dato tan sensible.

Mi diagnóstico de causa raíz fue una falta de transparencia en la interfaz. No podíamos simplemente eliminar el campo si Negocio lo requería por temas de seguros, así que articulé una solución técnica basada en **UX Writing**. Propuse la implementación de un microcopy explicativo y un tooltip que justificara claramente por qué se solicita el dato (ej. "Requerido para tu seguro de competidor"). Esta intervención de diseño no solo reduce la ansiedad, sino que protege la tasa de conversión en el punto más crítico del embudo.

#### Affordance y seguridad psicológica: el factor Oxxo

Otro punto crítico fue la percepción de los métodos de pago, documentado como **PU-04**. A pesar de que la opción de pago en Oxxo estaba presente, 8 de los 15 participantes enfatizaron que necesitaban verla de forma más prominente para sentirse seguros. Para el usuario mexicano ocasional o principiante, la posibilidad de pagar en un punto físico es un factor de confianza definitivo.

Mi recomendación de diseño no fue estética, sino funcional: aumentar el **affordance** y la prominencia visual del logo de Oxxo en la pasarela de pagos, dándole un peso jerárquico equivalente al de las tarjetas de crédito. Entendí que la seguridad psicológica del usuario es tan importante como la seguridad técnica de la transacción. Si el usuario no "siente" que tiene el control de su dinero, abandonará el flujo sin importar lo limpio que sea el diseño.

#### Estandarización de la aventura: terrenos y dificultades

Finalmente, abordé el problema **PU-07**, que afectaba directamente a los atletas recreativos y caminantes (6 de los 15 usuarios). Estos participantes buscaban desesperadamente información sobre el tipo de terreno (asfalto vs. terracería) y la dificultad del evento, datos que no siempre estaban claros en el prototipo inicial. 

Para resolver esto, propuse una modificación en la arquitectura de información del detalle del evento. Diseñé campos estandarizados e iconografía específica para "Tipo de Terreno" y "Nivel de Dificultad Sugerido". Esta decisión no solo mejora la experiencia del usuario actual, sino que establece un estándar para el futuro módulo B2B de carga de eventos. Al proporcionar esta granularidad, estamos ayudando al usuario a tomar una decisión informada, reduciendo la posibilidad de una mala experiencia el día de la carrera.

#### El Roadmap como pacto de ejecución

Con el informe de hallazgos terminado y las soluciones técnicas trazadas, procedí a integrar todo en el Roadmap de desarrollo. Mi última tarea en esta fase fue asegurar que cada recomendación de diseño estuviera documentada con su respectiva justificación de negocio y prioridad técnica. Al entregar el paquete final a los equipos de ingeniería y producto, lo hice con la certeza de que el diseño ya no era una hipótesis, sino una solución validada por el mercado real. 

La transición hacia la fase de implementación no fue un simple traspaso de archivos, sino un pacto de ejecución basado en evidencia. Habíamos transformado las dudas iniciales en una hoja de ruta clara, donde cada píxel y cada palabra tenían una razón de ser respaldada por el comportamiento humano.

**Reflexión final:**

Este proceso de análisis me recordó la importancia de la humildad del diseñador; incluso con un SUS de 88.3, los hallazgos sobre el CURP demostraron que mis suposiciones iniciales sobre la confianza del usuario necesitaban ajustes. Aprendí que los datos cuantitativos te dan el "qué", pero solo la observación cualitativa profunda te da el "por qué" necesario para iterar con propósito. Al final, el valor real que dejé en este proyecto no fue solo una interfaz pulida, sino una cultura de toma de decisiones basada en la realidad del atleta, blindando el producto contra la subjetividad y asegurando un camino sólido hacia el lanzamiento del MVP.