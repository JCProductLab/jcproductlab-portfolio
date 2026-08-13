# Fase 3: Prototipado y Validación

## Actividad 5: actividad_05_iteracion_del_diseno

### Parte 1: AUDITORÍA FORENSE: DESGLOSE DE HALLAZGOS PRIORIZADOS

#### El silencio tras la validación: Del orgullo del creador al rigor del auditor

Cuando cerré la última sesión de pruebas de usabilidad del MVP B2C, el silencio en mi estudio se sentía distinto. Tenía frente a mí una montaña de datos crudos: 30 horas de grabación, cientos de notas adhesivas virtuales y una sensación agridulce. Mis diseños, esos que semanas atrás me parecían la solución definitiva para la comunidad de AsDeporte, acababan de pasar por el filtro más implacable que existe: el usuario real. En este oficio, la madurez no se mide por lo bien que manejas Figma, sino por la capacidad de silenciar el ego cuando la evidencia te dice que te has equivocado. Entendí de inmediato que no estaba ante una fase de "retoques", sino ante una cirugía necesaria. La validación no era el final del camino, sino el combustible para la verdadera optimización; si ignoraba las fricciones detectadas ahora, estaría entregando a ingeniería un producto herido de muerte.

Asumí entonces un cambio de mentalidad radical. Dejé de ser el arquitecto que defiende su obra para convertirme en un auditor forense. Mi objetivo no era salvar mis diseños, sino salvar la conversión y la confianza del atleta que usaría la plataforma. Sabía que el éxito del proyecto dependía de mi capacidad para diseccionar cada hallazgo, separando el síntoma de la enfermedad estructural. No buscaba culpables, buscaba patrones. Entrar en la **Actividad 05: Iteración del Diseño** significaba aceptar que el MVP, aunque funcional, tenía grietas en su arquitectura y en su comunicación que solo la mirada del usuario —libre de los sesgos que yo había acumulado durante meses— podía revelar.

#### La disección del Informe de Hallazgos: Una reconstrucción técnica

Mi primer movimiento táctico fue sumergirme en el **Informe de Hallazgos de Pruebas de Usabilidad (MVP B2C)**. No lo hice como quien lee un resumen ejecutivo, sino como quien estudia una caja negra tras un accidente. Siguiendo rigurosamente la metodología de mi proceso de diseño, procesé cada sección del informe buscando reconstruir la experiencia fallida en mi mente. Me detuve especialmente en los puntos donde los datos cuantitativos (tasas de éxito, tiempos por tarea) chocaban frontalmente con las observaciones cualitativas. 

Analicé cada problema detectado contrastándolo con los objetivos originales que trazamos en la Fase 1. Por ejemplo, cuando el informe señalaba la desconfianza generalizada ante la solicitud del CURP, no lo vi solo como una "queja de privacidad", sino como una barrera crítica de entrada que ponía en riesgo la métrica de registro de nuevos usuarios. Mi foco no estaba en el "qué" —el usuario se detiene aquí— sino en el "por qué" técnico y psicológico. ¿Era un problema de jerarquía visual? ¿Era un fallo en el Microcopy que no explicaba el valor de entregar ese dato? Esta revisión exhaustiva fue mi blindaje contra las soluciones superficiales; antes de mover un solo píxel en Figma, necesitaba tener la certeza absoluta de qué estábamos intentando reparar.

#### Triage de severidad: La disciplina de la prioridad

Con el panorama completo de los fallos sobre la mesa, ejecuté un triage de prioridades siguiendo la jerarquía de severidad: **Crítico, Mayor y Menor**. Esta es, quizás, la decisión más difícil para un diseñador, porque implica admitir que no todo se puede (ni se debe) arreglar al mismo tiempo si queremos cumplir con los plazos del MVP.

*   **Problemas Críticos:** Me enfoqué primero en los bloqueos que impedían completar el flujo principal. Si un atleta no podía finalizar su inscripción porque el botón de pago en Oxxo era prácticamente invisible, ese era un fallo catastrófico. No importaba lo bonita que fuera la tipografía si el dinero no llegaba a AsDeporte.
*   **Problemas Mayores:** Clasifiqué aquí las fricciones que, aunque no detenían el proceso, generaban una frustración significativa o una carga cognitiva innecesaria. La confusión en la Arquitectura de Información del dashboard, donde los usuarios no lograban distinguir entre sus eventos pasados y futuros, entró en esta categoría.
*   **Problemas Menores:** Reservé este espacio para los detalles cosméticos o de pulido visual que, si bien afectaban la percepción de calidad, no comprometían la funcionalidad ni el negocio.

Esta categorización no fue un ejercicio solitario. La utilicé para blindar la eficiencia del proyecto: decidí que no dedicaría ni un minuto a discutir el color de un icono hasta que los fallos estructurales de navegación estuvieran resueltos. La disciplina aquí fue férrea; en un entorno de desarrollo ágil, distraerse con lo "menor" es un pecado de gestión que un senior no puede permitirse.

#### Diagnóstico de causa raíz: Separando el síntoma de la enfermedad

Una vez priorizados los problemas, inicié la fase de diagnóstico forense. Para cada hallazgo, crucé las citas directas de los usuarios con las métricas de comportamiento. Mi objetivo era determinar si la falla residía en la **Arquitectura de Información (AI)**, en el **Diseño de Interacción (IxD)**, en la **UI** o en el **Microcopy**. 

> **Insight de Auditoría:** Descubrí que muchos de los problemas que inicialmente parecían fallos de UI (diseño visual) eran, en realidad, crisis de Microcopy y confianza. El usuario no "fallaba" al hacer clic; el sistema fallaba al no comunicarle el beneficio de avanzar o al usar un lenguaje técnico que el atleta no comprendía.

Por ejemplo, la invisibilidad del pago en Oxxo no era solo un tema de contraste de color. Al analizar la causa raíz, identifiqué que el flujo de selección de método de pago carecía de una jerarquía lógica que guiara al usuario hacia las opciones físicas en un mercado como el mexicano, donde el efectivo sigue siendo rey. Estábamos ante un fallo de IxD y estrategia de contenido. Realizar este diagnóstico me permitió entender que la solución no vendría de cambiar un color, sino de reestructurar cómo presentamos las opciones de pago. Este nivel de análisis es el que separa una iteración reactiva de una optimización estratégica.

#### Inmersión en el contexto emocional: Lo que las notas no dicen

Para complementar el análisis técnico, regresé a las grabaciones de las sesiones de prueba. Hay una verdad incómoda en el diseño: las notas de observación a veces omiten la carga emocional del usuario. Volví a observar los momentos de vacilación, los micro-gestos de frustración y esos silencios prolongados frente a la pantalla. 

Ver a un usuario suspirar con pesadez al llegar al formulario de registro me dio una perspectiva que ningún porcentaje de abandono puede transmitir. Esa carga emocional es la que realmente define si un producto es "usable" o simplemente "funcional". Entendí que la desconfianza generada por el CURP no era solo un obstáculo lógico, sino un momento de ruptura emocional con la marca AsDeporte. Esta revisión humanizó los datos y me dio la urgencia necesaria para abordar la iteración no como una tarea de Jira, sino como un compromiso de respeto hacia el tiempo y la paciencia del atleta. Un error de "prioridad menor" en una hoja de cálculo puede ser la razón por la que un usuario nunca vuelve a abrir la app si se siente ignorado por el sistema.

#### El impacto en el negocio: El puente hacia los OKRs

Finalmente, traduje cada hallazgo de usabilidad al lenguaje del negocio y los OKRs del proyecto. Como diseñador, mi responsabilidad es asegurar que la experiencia del usuario sea el motor de la rentabilidad. Evalué cómo cada fricción detectada impactaba directamente en las métricas de éxito de AsDeporte:

*   **Conversión de Usuarios Nuevos:** Los bloqueos en el registro (CURP, complejidad del formulario) eran ataques directos a esta métrica.
*   **Retención y Satisfacción:** La confusión en el dashboard y la falta de claridad en los resultados de eventos pasados afectaban la lealtad del usuario a largo plazo.
*   **Eficiencia Operativa:** Cada duda del usuario en el flujo de pago se traduce potencialmente en un ticket de soporte, aumentando los costos para la empresa.

Este análisis estratégico justificó por qué la iteración era una inversión financiera crítica y no un capricho estético. Al alinear los problemas de diseño con los objetivos comerciales, logré que el equipo de producto y los stakeholders entendieran que cada cambio propuesto tenía un retorno de inversión claro. En esta fase de auditoría, mi papel fue el de un mediador: proteger al usuario para blindar el negocio. Me preparé para "matar a mis hijos" —esos diseños originales que tanto me gustaban— porque la evidencia era clara: si no evolucionaban, el producto fallaría en su misión de liberar la grandeza de los deportistas.

**Próximo paso:**

Tras completar esta auditoría forense, me encontré con una realidad incómoda: los problemas detectados no eran simples errores de superficie, sino síntomas de que algunas decisiones estructurales de la Fase 2 estaban fallando bajo presión. Tenía ante mí la lista de fallos críticos, pero ahora enfrentaba el verdadero desafío de ingeniería de diseño: ¿cómo rediseñar el flujo de registro y el sistema de pagos sin romper la coherencia del resto de la plataforma y sin retrasar el handoff técnico? La tensión era máxima, pues sabía que las soluciones que estaba a punto de proponer definirían si el MVP de AsDeporte sería un éxito rotundo o un manual de frustraciones para miles de atletas.

### Parte 2: INGENIERÍA DE SOLUCIONES: ABORDANDO PROBLEMAS DE ALTA PRIORIDAD

#### De la auditoría forense a la ingeniería de soluciones

Cerré el informe de hallazgos con una sensación agridulce: teníamos la verdad sobre la mesa, pero esa verdad cuestionaba la solidez de nuestros flujos de conversión más críticos. No podía simplemente "parchar" la interfaz con cambios cosméticos; la evidencia de las pruebas de usabilidad me obligaba a entrar en una fase de ingeniería de soluciones profunda. Siguiendo la metodología que tracé en la **Propuesta de Soluciones de Diseño** del proceso de iteración, mi primer paso fue alejarme del lienzo de Figma para entender la causa raíz de cada fricción. Como diseñador, mi responsabilidad no era solo proponer una pantalla más bonita, sino transformar el escepticismo del usuario en una confianza ciega que permitiera completar la transacción.

Me sumergí en el análisis de los problemas de **Alta Prioridad**. Sabía que si no resolvíamos estos bloqueadores, cualquier optimización estética posterior sería irrelevante. Mi razonamiento estratégico fue claro: debíamos atacar los puntos de abandono mediante una arquitectura de información más transparente y una jerarquía visual agresiva en los momentos de decisión. No se trataba de añadir funciones, sino de eliminar el ruido mental que impedía al atleta "liberar su grandeza". Esta transición de la auditoría a la ingeniería exigió un rigor metodológico absoluto, donde cada cambio en el microcopy o en la interacción debía estar justificado por un hallazgo directo de las sesiones de prueba.

#### Desmantelando la desconfianza: El caso del CURP

El hallazgo **PU-03** fue uno de los más reveladores y, a la vez, uno de los más difíciles de abordar. Los perfiles "Principiante" y "Ocasional" mostraron una resistencia visceral al encontrarse con la solicitud del CURP en pleno flujo de inscripción. En México, pedir un dato tan sensible sin una justificación inmediata es una receta para el abandono. Para solucionar esto, articulé una estrategia de **UX Writing e IxD** centrada en la transparencia radical. 

Decidí no mover el campo, sino rodearlo de contexto. Implementé un tooltip —un pequeño ícono de información "i"— ubicado estratégicamente junto a la etiqueta del campo CURP. Diseñé la interacción para que, tanto en *hover* como en *tap* (pensando en la experiencia móvil), se desplegara un microcopy explicativo muy preciso: *"Necesitamos tu CURP para validar tu categoría de edad de forma oficial o cumplir con requisitos del seguro del evento. Este dato es confidencial."* Mi objetivo era eliminar la sospecha de "burocracia innecesaria" y sustituirla por una percepción de seguridad y cumplimiento normativo.

Sin embargo, mi intervención no se detuvo en la interfaz. Como el diseño de producto también es estrategia de negocio, inicié una revaluación interna con los equipos de Negocio y Legal de AsDeporte. Cuestioné la obligatoriedad del CURP para todos los eventos del MVP. Tras varias sesiones de alineación, logramos definir que, si el dato no era estrictamente necesario para la inscripción básica, el sistema debía permitir omitirlo. Traduje esta decisión a la UI marcando el campo claramente como **"(Opcional)"** en los casos pertinentes. Esta maniobra redujo drásticamente la fricción inicial, permitiendo que el usuario avanzara en el embudo de conversión sin sentirse interrogado.

#### El logo de Oxxo como ancla de conversión offline

El problema **PU-04** puso de manifiesto una realidad del mercado mexicano que a veces el diseño puramente digital olvida: la relevancia del efectivo. Muchos usuarios buscaban la opción de pago en Oxxo, pero la interfaz original la trataba como un método secundario, casi oculto. Para optimizar su visibilidad en la "Pantalla de Inscripción - Paso 3", ejecuté un rediseño total de la jerarquía visual de los métodos de pago.

Reemplacé los tradicionales y pequeños *radio buttons* por botones de gran formato, lo que en diseño llamamos *Affordance* mejorado. No quería que el usuario tuviera que leer una lista; quería que reconociera su opción preferida al instante. Para ello:
*   Integré el **logo oficial y reconocible de Oxxo** con una prominencia visual equivalente a la de las tarjetas de crédito.
*   Añadí un bloque de microcopy descriptivo justo debajo del botón: *"Genera una referencia y paga en efectivo en cualquier tienda Oxxo."*

Este cambio no fue solo visual; fue una decisión de accesibilidad. Al dar claridad sobre el proceso ("generar referencia"), eliminamos la ansiedad de no saber qué pasaría después del clic. El resultado fue una interfaz que respetaba los hábitos financieros de una base de usuarios diversa, blindando la conversión en el último tramo del proceso.

#### Arquitectura de información para el atleta principiante

Uno de los hallazgos más críticos sobre el contenido fue el **PU-07**: la falta de información sobre el terreno y la dificultad de los eventos. Para un corredor experimentado, una "carrera de 10k" es clara; para un principiante, la diferencia entre asfalto y montaña técnica es la diferencia entre una experiencia gratificante y una lesión. Aquí, mi intervención fue puramente de **Arquitectura de Información (AI)**.

Definí y estandaricé nuevos campos de datos que antes eran inexistentes o ambiguos en la plataforma. Creé categorías para el "Tipo de Terreno Principal" (Asfalto, Terracería Ligera, Mixto, Montaña Técnica) y el "Nivel de Dificultad Sugerido" (Principiante, Intermedio, Avanzado). Pero la clave estuvo en cómo presentar esto sin saturar la "Página de Detalle de Evento". Diseñé una iconografía distintiva que permitía un escaneo rápido: un icono de montaña para terrenos técnicos y una figura humana caminando para niveles aptos para principiantes. Al acompañar estos iconos con etiquetas textuales claras, logramos que el usuario pudiera evaluar su capacidad física frente al reto antes de siquiera considerar la compra. Esta transparencia no solo mejora la usabilidad, sino que reduce las quejas post-evento y mejora la satisfacción a largo plazo.

> El diseño de producto en el sector *sports-tech* no es una cuestión de estética; es una gestión constante de la ansiedad del atleta. Cada campo de información que aclaramos es un gramo de estrés que le quitamos al usuario antes de su competencia.

#### Educación contextual: El diseño como mentor

El análisis del hallazgo **PU-11** reveló que los usuarios valoraban enormemente las guías, pero no querían salir del flujo para buscarlas en una sección de "Ayuda" genérica. Mi respuesta fue la implementación de **Mini-Guías proactivas**. Si el sistema detectaba que un usuario estaba viendo un evento marcado como "Apto para Principiantes", inserté un banner contextual, visualmente integrado pero distinguible, con el copy: *"¿Tu primera carrera? ¡Aquí algunos consejos!"*.

Además, identifiqué términos técnicos que actuaban como micro-barreras cognitivas, como "Chip de cronometraje" o "Categoría por edad". En lugar de dar por hecho que todos saben qué es un chip, añadí pequeños íconos de información ("i") que, al interactuar con ellos, mostraban una explicación sencilla. Esta aproximación de **diseño pedagógico** asegura que el apoyo ocurra en el momento exacto de la duda. Mi razonamiento fue evitar a toda costa que el usuario abandonara el flujo para ir a Google a buscar un término; cada salida de nuestra plataforma es una oportunidad perdida de conversión.

#### Transparencia financiera en el ecosistema Plus

Finalmente, abordé el problema **PU-09** relacionado con el Wallet de Asdeporte Plus. Las pruebas indicaron que, aunque el beneficio era muy atractivo, las reglas de uso eran un "agujero negro" informativo. La desconfianza sobre cuándo y cómo se aplicaba el crédito generaba una fricción innecesaria en usuarios que ya eran clientes leales.

Para resolver esto, rediseñé el "Hub de Beneficios Plus". Justo al lado del saldo disponible, ubiqué un enlace persistente y claro: *"Ver condiciones de uso del Wallet"*. Al activarse, este enlace no llevaba a otra página (lo que rompería el contexto), sino que disparaba una **pantalla modal** detallada. En esta modal, documenté con precisión quirúrgica:
*   La vigencia exacta del crédito.
*   En qué tipo de eventos era aplicable.
*   El proceso de aplicación automática en el carrito de compra.
*   Cualquier restricción legal relevante.

Esta solución abordó la causa raíz de la frustración mediante la disponibilidad inmediata de la información. Al final del día, el diseño de producto se trata de proteger el **LTV (Lifetime Value)** del usuario. Si un miembro Plus entiende y usa sus beneficios sin fricción, su retención está asegurada. Estas iteraciones de alta prioridad no fueron simples cambios de UI; fueron decisiones estratégicas para blindar el negocio de AsDeporte y asegurar que el MVP fuera una herramienta de confianza para el deportista.

**Próximo paso:**

Una vez resueltos los bloqueadores que ponían en riesgo la conversión inmediata, me di cuenta de que la experiencia aún se sentía algo rígida para los atletas más especializados. Aunque el flujo de pago ya era sólido, la capacidad de los usuarios para encontrar eventos específicos en nichos como el Trail o el Triatlón seguía siendo limitada. Me quedé con una pregunta inquietante: ¿estábamos siendo demasiado genéricos para una comunidad tan diversa? Sentí que la verdadera prueba de fuego para la arquitectura de la plataforma vendría al intentar satisfacer a esos usuarios avanzados sin alienar a los principiantes que acabábamos de rescatar.

### Parte 3: REFINAMIENTO DE EXPERIENCIA: SOLUCIONES DE MEDIA PRIORIDAD

#### El paso de la funcionalidad a la especialización

Una vez que logré despejar los bloqueadores críticos que ponían en riesgo la conversión inmediata —como el muro de desconfianza del CURP o la invisibilidad del pago en efectivo—, me detuve a observar el producto desde una lente distinta. Ya no se trataba solo de que la plataforma "funcionara", sino de que fuera la herramienta definitiva para el atleta que vive y respira competencia. Me di cuenta de que, en nuestro afán por simplificar el MVP para el usuario ocasional, corríamos el riesgo de alienar a nuestra base más leal: los atletas de nicho.

Un corredor de Trail o un triatleta no busca un "evento deportivo" genérico; busca una altimetría específica, un tipo de terreno o una distancia que desafíe sus límites. Sentí que si manteníamos una estructura de búsqueda demasiado plana, estaríamos entregando un producto mediocre para los expertos. Mi razonamiento como diseñador fue que la simplicidad no debe ser sinónimo de escasez de datos. Siguiendo el flujo de trabajo de `01_iteracion_del_diseno.pdf`, inicié una fase de refinamiento técnico para elevar la experiencia de estos segmentos, transformando los hallazgos de media prioridad en soluciones de interfaz que respetaran la complejidad de cada disciplina sin ensuciar la navegación.

#### La ingeniería de la búsqueda: filtros que entienden el deporte

El primer punto de fricción que abordé fue la falta de granularidad en los filtros. En las pruebas de usabilidad, los atletas especializados se sentían frustrados al tener que navegar por decenas de carreras de 5K sobre asfalto cuando lo que buscaban era un Ultra Trail. Aplicando la solución definida en `01_soluciones_de_diseno_por_problema_priorizado.pdf`, decidí que el sistema de filtrado debía comportarse de manera inteligente y contextual.

No quería abrumar al usuario con una lista interminable de opciones desde el inicio. En su lugar, utilicé un enfoque de **arquitectura de información progresiva**. Maniobré sobre los wireframes y mockups en Figma para implementar un sistema de menús desplegables condicionales. La lógica que configuré fue la siguiente:
*   Si el usuario selecciona "Trail", el sistema dispara automáticamente sub-filtros de distancia específicos: ">42k (Ultra)" y "<15k (Corto)".
*   Si el usuario elige "Ciclismo", la interfaz se adapta para diferenciar entre "Ruta" y "Montaña".

Esta decisión técnica me permitió mantener la interfaz limpia para el principiante, pero poderosa para el experto. Actualicé las especificaciones de **Diseño de Interacción (IxD)** para asegurar que estas transiciones fueran fluidas y no generaran saltos visuales bruscos. Al final, el diseño de producto se trata de reducir el ruido visual para que el usuario encuentre su reto específico en el menor tiempo posible.

#### Blindando el valor percibido para el usuario Plus

Otro hallazgo que me obligó a repensar la jerarquía de la página de detalle del evento fue la desconexión entre el Hub de beneficios y el flujo de inscripción. Los miembros Plus sabían que tenían beneficios, pero no siempre tenían claro cuáles aplicaban a un evento específico hasta que llegaban al carrito. Eso es demasiado tarde; la decisión de compra se cocina en la página de detalle.

Para solucionar esto, rediseñé la sección de información del evento integrando **indicadores visuales discretos (badges)**. No quería banners intrusivos que parecieran publicidad, sino confirmaciones de valor integradas orgánicamente en el UI. Siguiendo las pautas de `01_soluciones_de_diseno_por_problema_priorizado.pdf`, creé componentes variantes en el UI Kit que resaltan:
*   "✓ Descuento Plus Aplicable"
*   "✓ Zona de Recuperación Plus"

Configuré estos elementos con una lógica de visibilidad condicional: solo aparecen si el estado del usuario es "Miembro Plus" activo. Para el usuario, esto elimina la incertidumbre y refuerza la lealtad a la membresía en el momento exacto de la consulta. Fue una maniobra para convertir una característica pasiva en un motor de conversión contextual.

#### Democratización del acceso: micro-fricciones en el entorno móvil

A veces, como diseñadores, damos por sentado que ciertos iconos son universales. Sin embargo, los datos de las pruebas mostraron que el icono del embudo para filtrar no era evidente para todos, especialmente para los usuarios menos tecnológicos o aquellos que venían de la versión anterior de la app. Había una micro-fricción silenciosa que estaba limitando el descubrimiento de eventos.

Decidí intervenir la barra superior de la aplicación móvil con una corrección de **affordance visual**. Siguiendo las recomendaciones de UX Writing del proceso documentado en `01_iteracion_del_diseno.pdf`, añadí la etiqueta textual "Filtrar" justo al lado del icono. 

> **Insight de Diseño:** La elegancia visual nunca debe sacrificar la claridad funcional. Un icono sin etiqueta es una adivinanza; un icono con texto es una herramienta.

Además, aproveché para ajustar el contraste y el tamaño del área de interacción. Me aseguré de que el **tap target** fuera de al menos 44x44 píxeles, cumpliendo con los estándares de accesibilidad móvil para evitar los "toques accidentales" o la frustración de tener que presionar varias veces un elemento pequeño. Este cambio, aunque pequeño en píxeles, tuvo un impacto enorme en la confianza del usuario al navegar por catálogos extensos.

#### Reestructurando la complejidad: el puzzle de distancias y costos

Finalmente, me enfrenté a uno de los componentes más densos de la plataforma: la sección de distancias y costos en la página de detalle. En eventos como los triatlones, donde coexisten múltiples modalidades, fechas de preventa y categorías, la lista plana que teníamos originalmente se volvía ilegible. El usuario se perdía entre números y fechas, lo que generaba una confusión momentánea que podía detener la inscripción.

Rompí con el diseño anterior y propuse un layout basado en **tarjetas bien delimitadas**. Cada distancia ahora vive en su propio contenedor visual, con una jerarquía clara:
1.  Nombre de la distancia y fecha (H3).
2.  Costo actual destacado.
3.  Botón de acción directa.

Para los eventos de alta complejidad con más de cinco opciones, diseñé un mecanismo de **filtrado interactivo interno**. El usuario selecciona primero la distancia principal de su interés y el sistema actualiza dinámicamente los costos y categorías asociados. Esta estructura no solo mejoró la legibilidad, sino que redujo la carga cognitiva del atleta, permitiéndole comparar opciones sin que la pantalla pareciera una hoja de cálculo interminable.

> La especialización no tiene por qué significar complejidad. Mi estrategia fue siempre la misma: ocultar la densidad de información hasta que sea necesaria y presentarla con una jerarquía que guíe el ojo, no que lo abrume.

**Próximo paso:**

Con la interfaz ya pulida y las soluciones de media prioridad integradas, sentí que el diseño había alcanzado una madurez técnica notable. Sin embargo, al revisar el mapa completo de cambios, me asaltó una duda fundamental: ¿eran estos ajustes suficientes para corregir las grietas que detectamos en la base del producto? Me di cuenta de que estábamos ante un dilema estratégico: seguir refinando la superficie o aceptar que algunos hallazgos exigían una intervención quirúrgica en la arquitectura de información original. Era el momento de decidir qué tan profundo debíamos cavar antes de entregar el prototipo final.

### Parte 4: EL DILEMA ESTRATÉGICO: EVALUACIÓN DE LA PROFUNDIDAD

#### El síntoma frente a la estructura

Me detuve en seco cuando, tras resolver los problemas de jerarquía visual en la lista de eventos, volví a enfrentarme a los hallazgos PU-01 y PU-07. Había una tensión silenciosa en mi monitor: por un lado, la presión de avanzar hacia el *handoff* técnico; por otro, la sospecha de que estaba intentando curar con "maquillaje" de interfaz lo que en realidad era una fractura en los cimientos del producto. No se trataba simplemente de que un botón de filtro fuera difícil de encontrar o de que una descripción fuera corta. El problema era más profundo: los usuarios expertos buscaban datos que el sistema, sencillamente, no contenía.

Como diseñador, me enfrenté al dilema más amargo del oficio: ¿debía ignorar la raíz del problema para cumplir con el cronograma del MVP o debía proponer una cirugía mayor en la **Arquitectura de Información (AI)** que definimos meses atrás? Sabía que si me equivocaba en este diagnóstico, estaríamos construyendo una plataforma estéticamente impecable sobre un modelo de datos anémico. Me obligué a realizar una pausa táctica para evaluar la profundidad de la iteración. No buscaba una solución rápida, sino entender si la estructura de navegación global —el mapa que guía al atleta— seguía siendo válida o si los hallazgos de usabilidad la habían invalidado por completo.

#### Disección forense del modelo de datos

Inicié una revisión exhaustiva de la causa raíz de los fallos más críticos. Al analizar el hallazgo PU-01, referente a los filtros avanzados para nichos deportivos, la evidencia era contundente: los triatletas y corredores de montaña no solo querían filtrar por "distancia" o "fecha". Buscaban granularidad técnica: querían saber si una carrera permitía *drafting* o cuántos puntos ITRA otorgaba un trail. El hallazgo PU-07 reforzaba esta carencia; los principiantes se sentían desprotegidos al no encontrar información estandarizada sobre el tipo de terreno o el nivel de dificultad.

Mi diagnóstico fue técnico y frío: estos no eran errores de **Diseño de Interacción (IxD)**. Podía diseñar el componente de filtrado más elegante del mundo, pero si la base de datos no capturaba esos atributos específicos, el componente estaría vacío. Me vi forzado a cuestionar si debíamos retroceder a la Fase 1.3 de Arquitectura de Información Detallada. La tentación de rediseñar todo el modelo de datos de eventos era grande desde una perspectiva de "perfección académica", pero como responsable del producto, debía medir el impacto sistémico de esa decisión. Cambiar el modelo de datos en este punto no solo afectaba al diseño; dinamitaba la planificación de ingeniería y el alcance del B2B que alimentaría esa información en el futuro.

#### Auditoría de la navegación y el sitemap

Para tomar una decisión informada, realicé un análisis forense de los artefactos de las Fases 1 y 2. Reabrí los sitemaps y los flujos de usuario originales para contrastarlos con las grabaciones de las sesiones de prueba. Mi objetivo era despejar una incógnita: ¿los usuarios se perdían porque el mapa estaba mal trazado o porque los destinos (los eventos) no tenían suficiente información?

Tras auditar la jerarquía de navegación y el comportamiento general de la interfaz, llegué a una conclusión liberadora: la **Arquitectura de Información global** —la forma en que organizamos las secciones, el menú principal y el flujo de registro— era sólida. Los usuarios entendían perfectamente dónde estaban y hacia dónde debían ir. El problema no era el sitemap, sino la densidad de los atributos de los objetos. Esta distinción fue vital. Confirmé que los sitemaps generales y los flujos críticos eran mayormente efectivos y comprensibles. La "enfermedad" estaba localizada en el detalle de los datos del evento, no en el esqueleto de la aplicación. Esta claridad me permitió descartar una revisión fundamental de la navegación principal, ahorrando semanas de rediseño innecesario.

#### El equilibrio del MVP: Pragmatismo vs. Deuda Técnica

Con el diagnóstico en la mano, tomé la decisión estratégica de mantener la iteración dentro del nivel de refinamiento de las Fases 2 y 3. Decidí que para el MVP B2C, no rediseñaríamos el modelo de datos de forma integral. En su lugar, maniobré para implementar soluciones tácticas que mitigaran el dolor del usuario sin detener el progreso del proyecto:

*   **Para el PU-01 (Filtros):** Opté por añadir únicamente uno o dos sub-filtros clave cuyos datos pudieran inferirse de la información actual, evitando una reestructuración masiva de la base de datos.
*   **Para el PU-07 (Terreno/Dificultad):** Decidí destacar mejor la información existente en las descripciones actuales y proponer campos opcionales para los organizadores, preparando el terreno para una implementación completa en el futuro.

Esta no fue una capitulación, sino una decisión de **Product Design** basada en la viabilidad (*feasibility*). Entendí que la solución definitiva para estos problemas dependía de la futura plataforma B2B, donde los organizadores tendrían la responsabilidad de proporcionar estos datos de manera consistente. Forzar esta funcionalidad ahora, sin tener la fuente de datos asegurada, habría sido un error estratégico.

#### Blindaje y documentación de la deuda

Sin embargo, no permití que esta decisión se convirtiera en un "parche" olvidado. Documenté explícitamente esta limitación como **Deuda Técnica de Diseño**. Dejé asentado que, para la Fase 4 de evolución del producto, es imperativo desarrollar un modelo de datos de eventos más rico que capture atributos como el "tipo de terreno de trail" o el "nivel de dificultad estandarizado". 

Validé esta postura con los equipos de Producto e Ingeniería. Al presentarles el dilema, la respuesta técnica reforzó mi decisión: alterar la AI global en este punto habría comprometido la estabilidad del lanzamiento. Al final, el criterio senior no se trata de hacer el diseño perfecto, sino de saber qué batallas pelear hoy para asegurar que el producto llegue a las manos del usuario mañana. Decidí que el éxito del MVP dependía de resolver los problemas de usabilidad validados mediante refinamientos de UI, IxD y microcopy, manteniendo la estructura central intacta pero optimizada.

> Saber cuándo *no* rediseñar es una de las habilidades más difíciles de adquirir. La madurez profesional consiste en aceptar que un producto es un organismo vivo que evoluciona por etapas, y que nuestra labor es proteger su viabilidad sin sacrificar la visión a largo plazo.

**Próximo paso:**

Una vez blindada la estrategia y definido que no tocaríamos los cimientos de la arquitectura, me encontré con el camino despejado para la fase de producción intensiva. Tenía la certeza de que los cambios necesarios eran quirúrgicos y no estructurales, pero eso no los hacía menos complejos de ejecutar. Me preparé para volcar toda esta lógica en el lienzo de Figma, sabiendo que cada ajuste en los mockups y cada nueva línea de microcopy debía ser la respuesta definitiva a las frustraciones que vimos en las pruebas. El prototipo estaba a punto de transformarse en su versión final, y la presión por no dejar ningún cabo suelto en el *handoff* técnico empezaba a sentirse en el ambiente.

### Parte 5: EJECUCIÓN TÉCNICA: EL RENACIMIENTO DEL PROTOTIPO

#### La precisión del bisturí sobre el lienzo de Figma

Me senté frente al monitor con una sensación de responsabilidad distinta a la de las fases de exploración inicial. Ya no estaba proyectando deseos o hipótesis; tenía sobre la mesa el mapa de las heridas del producto. Las pruebas de usabilidad habían dejado cicatrices claras en el flujo y mi tarea no era simplemente "embellecer" la interfaz, sino realizar una intervención quirúrgica basada en la evidencia. Abrí el archivo maestro en Figma, donde reposaban los 37 mockups originales, y sentí ese peso familiar: la necesidad de transformar cada "no entiendo" de los usuarios en una solución técnica elegante y funcional.

Siguiendo la hoja de ruta que tracé en mi plan de iteración, entendí que el éxito del MVP de AsDeporte no dependía de añadir funcionalidades, sino de limpiar el ruido que impedía que las existentes brillaran. Mi enfoque fue forense. Cada movimiento de pixel, cada cambio de color y cada ajuste en el interlineado debía ser una respuesta directa a un punto de fricción documentado. No se trataba de diseñar para mí, ni siquiera para los stakeholders en este momento; estaba diseñando para el atleta que, en medio de su jornada, solo quería inscribirse a una carrera sin sentir que el sistema le estaba pidiendo las llaves de su casa.

#### Reestructurando el mapa cognitivo: La evolución de los Wireframes

El primer paso fue volver a los cimientos. Aunque los mockups de alta fidelidad estaban avanzados, decidí intervenir directamente en el layout de las pantallas críticas que habían fallado. Noté que en la selección de eventos, la jerarquía de información estaba rota: los usuarios se distraían con elementos secundarios antes de ver el botón de inscripción. 

Procedí a reestructurar el layout aplicando un criterio de economía visual estricto. Moví los componentes de filtrado a una posición más intuitiva y elevé la propuesta de valor del evento —fecha, lugar y distancia— para que fuera lo primero que el ojo captara al aterrizar en la pantalla. Esta "limpieza" de ruido visual no fue estética, fue una maniobra para reducir la carga cognitiva. Rediseñé el mapa de navegación interna de la ficha del evento, asegurándome de que el botón de acción principal (CTA) tuviera el peso visual y el espacio negativo necesario para ser inconfundible. Al ajustar los wireframes, estaba redefiniendo cómo el usuario procesa la información antes de tomar la decisión de compra.

#### Guías silenciosas: El refinamiento de las especificaciones de IxD

Uno de los hallazgos más dolorosos fue la desorientación en los pasos intermedios. Para resolverlo, evolucioné las Especificaciones de Diseño de Interacción (IxD) introduciendo una capa de asistencia que antes no existía. Diseñé una serie de tooltips y modales de ayuda contextual que actúan como guías silenciosas. 

Me enfoqué obsesivamente en los estados de transición. Si un usuario hacía clic en un selector complejo, el sistema ya no saltaría bruscamente; ahora, definí microinteracciones que explican visualmente qué está ocurriendo. Por ejemplo, al seleccionar un método de pago como Oxxo, diseñé un modal informativo que aparece justo en el momento de la duda, explicando que el proceso se completará externamente pero que su lugar está asegurado. Mi razonamiento fue que el diseño de interacción debe ser conversacional: si el sistema pide algo, debe explicar por qué y qué sigue. Documenté estos nuevos comportamientos para que, al llegar a desarrollo, no hubiera duda sobre cómo debía "sentirse" el producto, no solo cómo debía verse.

#### El ajuste de la realidad: UI y legibilidad en alta fidelidad

Con la estructura corregida, pasé a la capa visual. Aquí, la maniobra senior consistió en aplicar soluciones que fueran resilientes en condiciones de uso real. Recordé los comentarios sobre la dificultad de lectura en exteriores, algo crítico para una app de deportes. 

Ajusté los contrastes de toda la paleta de colores, asegurando que cumplieran con los estándares de accesibilidad WCAG. Incrementé los tamaños de fuente en las etiquetas de datos sensibles y optimicé el *white space* para que los elementos no compitieran entre sí. Justifiqué el uso de una paleta cromática más sobria para las áreas de gestión de datos, reservando los colores vibrantes de la marca AsDeporte exclusivamente para los momentos de éxito y las llamadas a la acción. Esta diferenciación visual ayuda al usuario a entender en qué "modo" se encuentra: si está en modo exploración (vibrante) o en modo transacción (seguro y legible).

#### Sanando la desconfianza: El rediseño del Microcopy

El campo del CURP era una mina terrestre en nuestro flujo. Los usuarios se detenían ahí, sospechando de la necesidad de tal dato. Mi intervención aquí fue puramente de UX Writing, pero con un impacto estructural en la conversión. 

Redacté nuevas etiquetas y, sobre todo, un *helper text* que aparece justo debajo del campo. En lugar de un frío "Ingrese su CURP", utilicé un tono profesional pero cercano: "Necesitamos tu CURP para asegurar tu seguro de competidor y validar tus resultados oficiales". Este pequeño cambio de microcopy transforma una exigencia técnica en un beneficio para el usuario. También trabajé en los mensajes de error; eliminé el lenguaje punitivo ("Dato inválido") por uno orientativo ("Parece que falta un dígito en tu CURP, por favor verifícalo"). Mi objetivo fue eliminar la fricción técnica y humanizar la interfaz en los puntos donde el abandono del carrito era más probable.

#### Blindando la consistencia: Actualización del UI Kit y Sistema de Diseño

Nada de esto sería sostenible si no se integraba en el sistema de diseño. Abrí la librería de componentes en Figma y comencé a crear los nuevos átomos y moléculas que la iteración exigía. 

1.  **Nuevos Filtros:** Creé componentes de selección múltiple con estados de "seleccionado", "hover" y "desactivado" claramente diferenciados.
2.  **Estados de Pago:** Diseñé una familia de componentes para los estados de transacción: éxito, procesamiento y error, asegurando que cada uno tuviera un icono y un color que comunicara el estado sin necesidad de leer el texto.
3.  **Variantes de Botones:** Configuré variantes para los botones de carga (*loading states*) para evitar que el usuario hiciera doble clic por impaciencia.

Esta actualización fue vital para mantener la coherencia. Me aseguré de cubrir todos los *edge cases* identificados: ¿qué pasa si el nombre del evento es muy largo?, ¿cómo se ve el componente de pago si la conexión es lenta? Al configurar estas variantes, estaba blindando el producto contra errores de implementación futuros y facilitando un *handoff* limpio para el equipo de ingeniería.

#### El cosido final: Sincronización del Prototipo Interactivo

Finalmente, llegó el momento de "coser" todas estas mejoras. Reconstruí las conexiones en el prototipo de Figma, eliminando cada callejón sin salida que habíamos detectado. Mi obsesión fue el flujo continuo. 

Probé cada ruta una y otra vez, asegurándome de que la lógica de navegación fuera impecable. Si un usuario cerraba un modal de ayuda, debía volver exactamente al punto donde estaba, no al inicio de la pantalla. Ajusté las transiciones para que fueran suaves pero rápidas, transmitiendo una sensación de eficiencia y modernidad. El prototipo dejó de ser una simple demo para convertirse en la especificación funcional definitiva; una simulación tan fiel de la realidad que cualquier stakeholder podría entender el valor de la plataforma sin necesidad de una explicación externa.

> La iteración técnica es donde el diseño demuestra su madurez. No se trata de la brillantez de una idea aislada, sino de la disciplina de ajustar mil veces un componente hasta que la fricción desaparece. Un cambio de 10 píxeles en la jerarquía o una palabra diferente en un tooltip pueden ser, literalmente, la diferencia entre una transacción exitosa y un usuario que nunca vuelve.

**Próximo paso:**

Con el prototipo finalmente blindado y cada pixel respondiendo a una necesidad validada, sentí que la parte creativa y de resolución de problemas estaba cerrada. Sin embargo, al mirar la complejidad de los cambios realizados en el UI Kit y las nuevas especificaciones de interacción, me di cuenta de que el mayor riesgo ahora no era el diseño, sino la interpretación que el equipo de desarrollo hiciera de él. Tenía en mis manos un sistema evolucionado, pero si no lograba transmitir el "porqué" de cada ajuste y la trazabilidad de los cambios, todo el esfuerzo de validación podría diluirse en la implementación. El desafío se desplazaba ahora de la creación a la comunicación: era el momento de construir el puente definitivo hacia la ejecución técnica.

### Parte 6: TRAZABILIDAD Y HANDOFF: DOCUMENTANDO LA EVOLUCIÓN

#### El riesgo del "teléfono descompuesto" técnico

Al cerrar la última conexión del prototipo en Figma, no sentí la satisfacción habitual de haber terminado una tarea. Al contrario, sentí la presión de lo que venía después. Tenía frente a mí un ecosistema de diseño que había evolucionado drásticamente tras las pruebas de usabilidad, pero sabía perfectamente que un diseño "pixel-perfect" es papel mojado si el desarrollador que lo recibe no entiende la intención detrás de cada cambio. Mi mayor temor en este punto no era la estética, sino que el esfuerzo de validación se diluyera en la implementación porque alguien en ingeniería decidiera que un flujo era "demasiado complejo de programar" sin saber que esa complejidad era, precisamente, lo que evitaba que el usuario abandonara la plataforma.

Entendí que mi responsabilidad como diseñador no terminaba en la resolución visual; debía convertirme en el custodio de la lógica del producto. Siguiendo estrictamente la guía procedimental de **01_iteracion_del_diseno.pdf**, inicié la fase de documentación y trazabilidad. No se trataba de redactar un manual de usuario, sino de construir un puente técnico donde cada decisión de diseño estuviera anclada a una evidencia de usabilidad. Si iba a pedirle a un desarrollador que rehiciera un componente del UI Kit, tenía que darle los argumentos forenses para que entendiera que no era un capricho estético, sino una necesidad de negocio validada.

#### Auditoría de cambios y el rastro de la evolución

Mi primer paso fue realizar un registro sistemático de cada modificación, tal como lo dicta el punto 5 del proceso. No me limité a listar los cambios; realicé una auditoría forense comparando el estado anterior de los archivos con la versión optimizada. Para esto, estructuré un historial de versiones dentro del propio sistema de diseño. 

Cada componente que sufrió una metamorfosis —como el campo de entrada del CURP o el selector de métodos de pago— fue documentado con su "rastro de evolución". Registré:
*   **El estado original:** Cómo estaba diseñado antes de las pruebas.
*   **El hallazgo detonante:** La cita específica o el bloqueo observado en el "Informe de Hallazgos de Pruebas de Usabilidad (MVP B2C)".
*   **La solución implementada:** El cambio exacto en la interfaz o el flujo.
*   **La justificación técnica:** Por qué esta nueva versión resolvía la causa raíz (ya fuera un problema de AI, IxD o Microcopy).

Esta trazabilidad es lo que separa un diseño decorativo de uno estratégico. Al documentar que la invisibilidad del pago en Oxxo no era un error de color, sino un fallo de jerarquía en la Arquitectura de Información (AI), blindé la decisión frente a futuras simplificaciones técnicas que pudieran comprometer la conversión.

#### Vinculación con la gestión de proyectos: de la pantalla al ticket

Para asegurar que nada se perdiera en el camino al código, integré los hallazgos directamente con las herramientas de gestión del equipo. No permití que las iteraciones se quedaran solo como "notas en Figma". Vinculé cada problema de usabilidad priorizado —especialmente los de nivel **Crítico** y **Mayor**— con tareas específicas en el backlog.

> La trazabilidad no es burocracia, es una estrategia de defensa. Si un desarrollador ve un ticket que dice "Cambiar flujo de registro", su instinto será buscar la ruta más fácil. Pero si ese ticket está vinculado a un hallazgo documentado donde el 60% de los usuarios fallaron, el peso de la decisión cambia. La ingeniería empieza a trabajar para el usuario, no solo para el código.

Esta conexión es vital. Me aseguré de que cada tarea de desarrollo tuviera el contexto necesario: el enlace al prototipo actualizado y la referencia al dolor específico del usuario que estábamos intentando aliviar. Así, el equipo de ingeniería pudo entender que un ajuste en las microinteracciones (IxD) era la respuesta directa a una fricción cognitiva detectada en las pruebas reales.

#### Especificaciones de interacción y "sangrado" de lógica en Figma

Trasladé toda la inteligencia del proceso de iteración directamente a los archivos de diseño. Siguiendo el sub-paso 4 del mothership, actualicé las **Especificaciones de Diseño de Interacción (IxD)** con un nivel de detalle casi obsesivo. No solo definí cómo se veía un botón, sino cómo debía comportarse bajo cada regla de negocio.

Utilicé anotaciones técnicas directamente sobre los mockups para explicar:
1.  **Lógica de validación en tiempo real:** Especialmente para el Microcopy de los mensajes de error en los formularios, asegurando que el tono fuera el adecuado para reducir la ansiedad del usuario.
2.  **Estados de los componentes:** Documenté exhaustivamente los estados de carga, error y éxito de los nuevos elementos incorporados al UI Kit.
3.  **Transiciones y comportamiento dinámico:** Expliqué la mecánica de los nuevos flujos para que cualquier desarrollador pudiera navegar el archivo y entender la "física" del producto sin necesidad de una reunión de tres horas.

Esta documentación técnica es lo que garantiza que la "magia" del prototipo no se rompa al traducirse a código. Si el prototipo fingía una respuesta instantánea para mejorar la percepción de velocidad, las especificaciones de IxD debían dictar exactamente cómo lograr ese efecto en la implementación final.

#### El "Antes y Después": Consolidación forense para stakeholders

Finalmente, preparé la sección de "Iteraciones de Diseño" para el informe de hallazgos. Este es el documento que cierra el ciclo de feedback frente a los stakeholders. Organicé la información mostrando visualmente el contraste entre la versión testeada y la versión iterada.

Para cada cambio significativo, presenté una justificación basada en la causa raíz:
*   **Problemas de Arquitectura de Información (AI):** Cuando el usuario no encontraba el camino, mostré cómo la nueva estructura de menús eliminaba esa fricción.
*   **Problemas de Diseño de Interacción (IxD):** Cuando el comportamiento de un elemento confundía al usuario, documenté la nueva lógica de respuesta.
*   **Problemas de Microcopy (UX Writing):** Cuando el texto generaba desconfianza, presenté la nueva narrativa validada.

Este ejercicio no solo demuestra el valor del trabajo realizado, sino que mitiga los riesgos de negocio. Al mostrar cómo el refinamiento de los wireframes y mockups aborda directamente los bloqueos de conversión, el diseño deja de ser una opinión y se convierte en una solución de ingeniería humana. La trazabilidad asegura que cada línea de código escrita a partir de ahora tenga un propósito claro: liberar la grandeza del atleta, sin que la tecnología se interponga en su camino.

**Próximo paso:**

Con toda la documentación técnica cerrada y el puente hacia desarrollo construido, me detuve a observar el resultado final. Los cambios en los flujos críticos eran tan profundos que una duda empezó a crecer: ¿realmente habíamos resuelto el problema o solo habíamos movido la fricción a otro lugar? Aunque la lógica me decía que el diseño estaba blindado, la responsabilidad senior me obligaba a no dar nada por sentado. Era el momento de decidir si nos lanzábamos al vacío de la producción o si necesitábamos una última red de seguridad para validar que nuestras soluciones no habían creado nuevos incendios. El desafío final estaba cerca: definir la estrategia de re-testing.

### Parte 7: EL BLINDAJE FINAL: ESTRATEGIA DE RE-TESTING

#### El peso de la duda tras el último clic

Cerré el archivo de Figma y, por un momento, el silencio en mi estudio se sintió más pesado de lo habitual. Tenía frente a mí un ecosistema de pantallas que, en teoría, resolvía cada uno de los incendios detectados en las pruebas de usabilidad: la desconfianza por el CURP estaba mitigada con microcopy, la invisibilidad de Oxxo se había corregido con un rediseño visual y los usuarios Plus ahora tenían sus beneficios integrados en el flujo. Sin embargo, como diseñador, sé que un diseño iterado es, hasta que se demuestre lo contrario, una nueva serie de hipótesis. No podía simplemente entregar este paquete a ingeniería y dar por terminada mi labor. La pregunta que me perseguía no era si el diseño se veía bien, sino si estas nuevas soluciones no habían introducido una fricción distinta, un efecto secundario que solo aparece cuando el usuario real se enfrenta a la interfaz.

Me detuve a evaluar la magnitud de lo que habíamos construido en esta fase de iteración. No estábamos ante ajustes cosméticos; habíamos alterado la **Arquitectura de Información (AI)** en puntos neurálgicos y modificado el **Diseño de Interacción (IxD)** en el flujo de pago, el corazón del negocio. Mi responsabilidad en este punto de inflexión era clara: debía actuar como el primer filtro de riesgo. Antes de comprometer semanas de desarrollo y recursos de la empresa, necesitaba determinar si el "blindaje" que creíamos haber construido era real o si solo habíamos movido el problema de lugar. Esta no era una decisión burocrática, era una maniobra estratégica de gestión de riesgos para asegurar que el MVP B2C de AsDeporte no naciera con fallos de confianza evitables.

#### La anatomía del riesgo: ¿Ajuste superficial o cambio estructural?

Para despejar la incertidumbre, realicé un análisis forense de la profundidad de las iteraciones. Seguí un criterio riguroso: si el cambio afectaba el modelo mental del usuario o introducía un nuevo patrón de interacción, el riesgo era alto. Al revisar las soluciones para los problemas **PU-11 (Guías para principiantes)** y **PU-13 (Claridad en múltiples distancias/costos)**, me di cuenta de que no estábamos simplemente "limpiando" la pantalla.

*   **Nuevos patrones de interacción:** La integración de guías contextuales y tooltips (PU-11) introdujo elementos que no existían en la versión anterior. ¿Serán ignorados por ser percibidos como intrusivos? ¿O realmente aportarán el valor que el atleta principiante necesita?
*   **Rediseño de información crítica:** El cambio en la presentación de distancias y costos (PU-13), pasando de una lista plana a una estructura de tarjetas o filas delimitadas con posible interactividad, representaba una modificación sustancial en cómo el usuario consume datos para tomar una decisión de compra.
*   **Modificaciones en el flujo cognitivo:** La adición de una nueva pantalla o modal para las condiciones del Wallet Plus (PU-09) añadía un paso adicional. Aunque necesario para la transparencia, cualquier clic extra es un punto potencial de abandono que debía ser validado.

Esta evaluación me confirmó que no podíamos saltar directamente a producción. La complejidad de las soluciones para los problemas de **ALTA prioridad** (CURP, Oxxo, Condiciones Wallet) exigía una verificación empírica. Mi razonamiento fue que el costo de realizar una validación ahora era infinitamente menor al costo de corregir un flujo de pago roto en una aplicación ya lanzada al mercado.

> **Insight de Diseño:** En productos de alta transaccionalidad, la iteración no es el final del proceso, es el inicio de una nueva validación. Ignorar esto es diseñar a ciegas, asumiendo que nuestras soluciones son infalibles solo porque siguen "mejores prácticas".

#### El escepticismo profesional frente al Microcopy

Uno de los puntos donde sentí mayor necesidad de rigor fue en las soluciones basadas en **UX Writing**. Para el problema del CURP (**PU-03**), implementamos un microcopy explicativo mediante un tooltip para justificar por qué pedimos ese dato tan sensible en México. Sobre el papel, la explicación es lógica y transparente, pero mi escepticismo profesional me obligaba a cuestionar: ¿el usuario realmente se detendrá a leerlo o su reacción visceral de desconfianza será más rápida que su curiosidad por el tooltip?

Lo mismo ocurría con las condiciones del Wallet Plus (**PU-09**). Añadimos un enlace a una nueva pantalla con los detalles legales y de uso. El riesgo aquí es que la ubicación del enlace no sea lo suficientemente prominente o que el contenido de la nueva pantalla sea tan denso que termine por confundir más al usuario en lugar de darle seguridad. Estos no son problemas que se resuelven con una revisión heurística; son matices de percepción que solo se capturan observando la reacción de un usuario real. La efectividad del lenguaje es subjetiva hasta que los datos de usabilidad la convierten en objetiva.

#### La decisión estratégica: Re-Testing enfocado

Tras analizar los factores de riesgo y la alineación con los objetivos de negocio de AsDeporte, tomé una decisión firme: **recomendé realizar una ronda de Re-Testing de Usabilidad**. Sin embargo, consciente de las restricciones de tiempo y presupuesto típicas de un MVP, no propuse una repetición exhaustiva de todas las pruebas iniciales. Mi propuesta fue un **Re-Testing acotado y quirúrgico**.

El objetivo de esta maniobra era maximizar el aprendizaje minimizando el esfuerzo. No necesitábamos volver a probar lo que ya funcionaba; necesitábamos poner bajo el microscopio exclusivamente las soluciones para los incendios que habíamos intentado apagar. Esta decisión estratégica se basó en cuatro pilares:

1.  **Validación de soluciones críticas:** Asegurar que el CURP y la visibilidad de Oxxo (PU-04) ya no fueran bloqueos para la conversión.
2.  **Evaluación de nuevas interacciones:** Confirmar que las guías contextuales y la nueva visualización de distancias/costos fueran intuitivas.
3.  **Mitigación de riesgos pre-desarrollo:** Identificar cualquier problema residual antes de que el código sea inamovible.
4.  **Blindaje de la confianza de los Stakeholders:** Presentar resultados validados da al equipo de ingeniería y a la dirección la seguridad de que estamos construyendo sobre cimientos sólidos.

#### Segmentación quirúrgica por perfiles de usuario

Para que este re-testing fuera eficiente, diseñé un plan de reclutamiento basado en la segmentación de los problemas detectados. No todos los usuarios necesitan probarlo todo. Diseñé la lógica de asignación de tareas de la siguiente manera:

*   **Perfil Principiante:** Su foco principal sería validar la utilidad de las nuevas guías contextuales y la claridad del microcopy del CURP. Necesitaba ver si este perfil, el más vulnerable a la confusión, ahora se sentía acompañado por la interfaz.
*   **Perfil Plus:** Serían los encargados de testear el acceso a las condiciones del Wallet y la visibilidad de los beneficios contextuales en la página de detalle del evento. Su feedback es vital para asegurar que la propuesta de valor de la suscripción sea clara y accesible.
*   **Perfil Ocasional:** Este grupo validaría específicamente la prominencia de la opción de pago en Oxxo. Necesitaba confirmar que alguien que no usa la plataforma frecuentemente puede encontrar este método de pago sin fricciones.

Esta precisión en el enfoque del re-testing es lo que permite obtener *insights* profundos en tiempos récord. Al dirigir cada perfil hacia el punto exacto de la interfaz que fue rediseñado para ellos, eliminamos el ruido y nos centramos en la señal.

#### El Plan B: Validación interna rigurosa

Como diseñador senior, siempre tengo que estar preparado para las restricciones de la realidad. Si por razones de calendario o presupuesto el re-testing con usuarios externos fuera imposible, articulé una alternativa: la **Validación Interna Rigurosa**. Pero no se trataría de una revisión casual de pasillo.

Diseñé un protocolo de **Expert Review** que involucraría a miembros de los equipos de Producto, Soporte y Marketing que no hubieran estado directamente involucrados en el diseño de las soluciones. La metodología consistiría en:
*   **Ejecución de tareas críticas:** Los evaluadores internos actuarían como "usuarios de prueba", siguiendo los mismos escenarios que diseñamos para el re-testing externo.
*   **Evaluación Heurística Enfocada:** Utilizaría mi criterio para guiar la sesión, buscando específicamente fallos en la visibilidad del estado del sistema, la prevención de errores y la consistencia.
*   **Detección de fricción residual:** Aunque menos potente que una prueba con usuarios reales, este método permite detectar problemas de usabilidad obvios que el equipo de diseño, por su cercanía al proyecto, podría haber pasado por alto (el famoso "sesgo del creador").

#### La responsabilidad del último centímetro

Preparar esta estrategia de re-testing fue mi último acto de rigor en esta fase. Podría haber dado el proyecto por "terminado" tras la iteración en Figma, pero mi oficio me dicta que el diseño no termina en el entregable, sino en el éxito del usuario. Esta fase de preparación es un ejercicio de humildad profesional: es reconocer que nuestras soluciones son apuestas educadas que necesitan ser verificadas en el mundo real.

Dejé el plan de re-testing listo para ser discutido con los stakeholders. Sabía que, independientemente de si elegíamos la ruta del re-testing acotado o la validación interna, el producto ya estaba en una posición mucho más fuerte. Habíamos transformado las quejas en soluciones y las soluciones en un plan de batalla validado. El camino hacia el desarrollo estaba despejado, no por la velocidad, sino por la certeza de que cada píxel iterado tenía un propósito claro: liberar la grandeza del atleta sin que la tecnología fuera un obstáculo.

**Reflexión final:**
Al cerrar esta estrategia de re-testing, comprendí que mi mayor valor en este proyecto no fue solo rediseñar pantallas, sino saber cuándo dudar de ellas. La decisión de no avanzar a ciegas hacia el desarrollo es lo que separa un diseño estético de un producto digital funcional y rentable. Me voy de esta fase con la tranquilidad de que el MVP de AsDeporte no solo es más usable, sino que tiene una estructura de validación que protege la inversión del negocio y la experiencia del deportista.