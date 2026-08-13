# Fase 0: Preparación Estratégica y Alineación (Pre-Proyecto)

## Actividad 01: Validación del Brief

> Esta actividad constituye el cimiento estratégico del proyecto. Se centra en la transformación de un brief preliminar en un documento de gobernanza validado mediante un proceso de deconstrucción interna, mapeo de stakeholders y un workshop colaborativo de alto nivel. El objetivo fue alinear a la dirección médica, operativa y tecnológica del Centro Médico ABC bajo una visión unificada de éxito, definiendo KPIs críticos como la puntuación SUS > 75 y la migración del 60% de agendamiento a canales digitales. El resultado es la 'Estrella Polar' que guiará todas las decisiones de diseño posteriores.

### Parte 1: Auditoría Interna y Arquitectura de Responsabilidades Raci

#### El riesgo de diseñar sobre castillos de arena

Tenía sobre mi mesa virtual cinco años de investigación fragmentada y un borrador de brief que, aunque ambicioso, se sentía como una declaración de intenciones sin dientes. La situación era clara: el Centro Médico ABC tenía una reputación de excelencia clínica que su presencia digital simplemente no reflejaba. Me encontraba ante un portal, "Mi Salud ABC", que operaba como un satélite aislado en un subdominio, enfocado casi exclusivamente en radiología y con una experiencia de usuario que se sentía como un viaje al pasado. Mi primera gran decisión como responsable del diseño no fue abrir Figma, sino detener la inercia del proyecto para realizar una auditoría forense de nuestras propias premisas.

Sabía que si avanzábamos sin cuestionar el brief preliminar, corríamos el riesgo de "maquillar" una estructura rota. La investigación de 2015-2020 ya había gritado que la fragmentación era el enemigo número uno, pero el brief inicial aún no aterrizaba cómo íbamos a resolver la desconexión entre el sitio institucional y el portal transaccional. Mi razonamiento fue estratégico: antes de pedirle a la organización que cambiara, nosotros teníamos que asegurar que nuestra "estrella polar" fuera técnica y operativamente viable. No podíamos permitir que el entusiasmo por el rediseño nos hiciera ignorar las limitaciones reales de una institución tan compleja.

#### Deconstrucción forense y el ejercicio de "Red-Teaming"

Dediqué una semana entera a lo que llamo la deconstrucción del brief, un proceso que documenté meticulosamente en el archivo **01_actividad_1_fase_0_validacion_del_brief_de_producto.pdf**. No fue una lectura pasiva; fue un ejercicio de "red-teaming" donde intenté encontrar cada fisura lógica en nuestra propuesta. Me senté con el equipo de diseño y desglosamos cada objetivo, cada KPI y cada restricción para contrastarlos con la realidad histórica que ya conocíamos.

Al analizar la sección de "Problemas Identificados", me detuve en la fragmentación de la experiencia. El brief mencionaba que la navegación no era fluida, pero mi auditoría interna reveló algo más profundo: estábamos ante una crisis de identidad digital. Si el paciente no sentía que estaba en el mismo hospital al pasar de la consulta de información al agendamiento de citas, habíamos fallado. Cuestioné duramente si los KPIs propuestos —como la migración del 60% del agendamiento a canales digitales— eran realistas sin una integración profunda del Expediente Clínico Electrónico (ECE). Esta deconstrucción me permitió identificar que el brief, en su estado actual, era demasiado optimista sobre la madurez tecnológica de ciertas áreas.

> **Insight de Diseño:** El papel del diseñador senior no es solo validar que el brief sea "bonito" o "claro", sino actuar como el primer filtro de viabilidad. Si no cuestionamos las metas ahora, terminaremos diseñando soluciones elegantes para problemas que la infraestructura no puede soportar.

#### El escepticismo profesional ante el Expediente Clínico Electrónico

Uno de los puntos más críticos de mi auditoría interna fue la interoperabilidad del ECE. Sabía, por los antecedentes de 2017-2019, que el hospital ya tenía un sistema interno, pero la integración visible para el paciente era casi nula. En esta fase de preparación, me permití ser el escéptico de la sala. ¿Estaba la infraestructura de TI del Centro Médico ABC realmente preparada para exponer datos en tiempo real de manera segura y fluida, o estábamos diseñando sobre castillos de arena?

Identifiqué este punto como el mayor "punto ciego" técnico. Si el alcance del proyecto dependía de una integración que TI no podía entregar en los plazos establecidos, el proyecto nacería muerto. Esta preocupación me llevó a marcar la viabilidad de la integración del ECE como una de las tres preguntas innegociables para el workshop con los stakeholders. No podíamos avanzar en la arquitectura de información sin saber si el motor de datos iba a responder. Esta fase de duda metódica fue lo que blindó el proyecto contra el *scope creep* y las falsas expectativas que suelen descarrilar las transformaciones digitales en el sector salud.

#### Arquitectura de responsabilidades: La Matriz RACI como escudo

Para navegar la complejidad política y operativa del Centro Médico ABC, necesitaba más que un buen diseño; necesitaba una estructura de gobernanza blindada. Utilicé el archivo **02_matriz_de_equipo_y_roles.pdf** para trazar la línea de fuego. En una institución con directores médicos, jefes de TI y líderes de marketing con agendas a veces contrapuestas, la ambigüedad en la toma de decisiones es el camino más rápido al fracaso.

Diseñé la matriz RACI (Responsible, Accountable, Consulted, Informed) con una precisión quirúrgica para esta fase de validación:
*   **Product Owner (CM ABC):** Lo definí como el **Accountable (A)**. Necesitábamos un solo punto de aprobación final dentro del hospital para evitar que el proyecto se diluyera en comités infinitos.
*   **Product Designer (Yo):** Asumí el rol de **Responsible (R)** y **Consulted (C)**. Mi tarea era ejecutar la validación y asegurar que cada decisión de negocio tuviera una traducción coherente en términos de experiencia de usuario.
*   **Stakeholders Clave (Dirección Médica, TI, Marketing):** Fueron asignados como **Consulted (C)** e **Informed (I)**. 

Esta asignación no fue arbitraria. La presencia del Director Médico era indispensable para validar que el rediseño no comprometiera la ética clínica, mientras que el Jefe de TI debía validar la factibilidad técnica de cada paso. Al establecer estas reglas del juego antes del workshop, aseguré que cada persona en la sala supiera exactamente cuál era su peso en la balanza. La matriz RACI se convirtió en mi herramienta para gestionar las expectativas y forzar la rendición de cuentas desde el día uno.

#### La preparación del arsenal: Guía de discusión provocadora

Con los roles definidos y los puntos ciegos identificados, me enfoqué en preparar el workshop de validación. Sabía que una presentación tradicional de PowerPoint sería ignorada o aceptada sin un compromiso real. Por ello, siguiendo el proceso detallado en **01_actividad_1_fase_0_validacion_del_brief_de_producto.pdf**, diseñé una guía de discusión en Google Slides y una pizarra en Miro que no buscaban el aplauso, sino la fricción constructiva.

Preparé preguntas que forzaran a los líderes del hospital a tomar decisiones difíciles. Por ejemplo, en la sección de alcance, formulé una diapositiva que planteaba una elección binaria: "¿Priorizamos el desarrollo de una app nativa completa o consolidamos una plataforma web responsiva de clase mundial que unifique todos los servicios?". Sabía que el hospital quería "todo", pero mi papel era demostrar que, con los recursos y tiempos actuales, intentar abarcar ambos frentes resultaría en dos productos mediocres. 

Utilicé Miro para visualizar esta estructura de decisión, creando espacios donde las dudas técnicas de TI pudieran coexistir con las metas comerciales de Marketing. El objetivo de este arsenal no era presentar una solución final, sino transformar el brief preliminar en un artefacto de consenso vivo. Estaba preparando el terreno para que, durante el workshop, los stakeholders no solo aprobaran un documento, sino que se apropiaran de la estrategia.

#### La humildad del diseñador ante el escrutinio

Mirando hacia atrás, esta fase de auditoría interna fue un ejercicio de humildad profesional. Como diseñadores, a menudo queremos saltar directamente a la fase creativa, pero en proyectos de esta escala, la creatividad sin gobernanza es solo ruido. Someter mi propio análisis al rigor de la investigación previa y a la posibilidad de que TI rechazara nuestras ideas más ambiciosas fue fundamental.

Esta preparación estratégica es lo que diferencia un rediseño cosmético de una transformación digital real. Entendí que mi valor no residía en dibujar pantallas, sino en orquestar una visión común entre actores que rara vez hablan el mismo lenguaje. Estábamos a punto de entrar a una sala con los líderes de una de las instituciones de salud más importantes del país, y mi trabajo era asegurar que el brief que tenían en sus manos fuera un suelo firme sobre el cual construir, no una promesa vacía. Teníamos el RACI, teníamos las preguntas difíciles y teníamos la evidencia; ahora faltaba ver si la organización estaba lista para el compromiso que el rediseño exigía.


Toda esta preparación interna me dejó con una inquietud latente: ¿serían capaces los directores médicos y los jefes de tecnología de dejar de lado sus silos para acordar una única métrica de éxito? El escenario estaba listo, pero la logística de sentar a estos perfiles en una misma mesa virtual y asegurar que el flujo de información no se rompiera antes de empezar era el siguiente gran incendio que debía apagar. Me di cuenta de que, sin un plan de comunicación quirúrgico, todo este rigor metodológico moriría en la bandeja de entrada de algún directivo ocupado.

---

### Parte 2: Logística de Alineación y Plan de Comunicación

#### La arquitectura del consenso: De la auditoría al sistema circulatorio del proyecto

Una vez que tuve clara la matriz de responsabilidades RACI y la auditoría del brief preliminar, me di cuenta de que el éxito del rediseño no residía en la perfección técnica de mis hallazgos, sino en mi capacidad para orquestar a los silos del Centro Médico ABC. Tenía en mis manos un documento de gobernanza sólido, pero sabía que, sin un plan de comunicación quirúrgico, ese rigor moriría en la bandeja de entrada de algún directivo ocupado. Mi labor dejó de ser puramente analítica para volverse diplomática: necesitaba transformar un brief estático en un diálogo dinámico y controlado.

Entendí que el rediseño de una plataforma de salud de esta escala es, ante todo, un ejercicio de gestión de expectativas. Si los directores médicos, los jefes de TI y el equipo de marketing no sentían que el proyecto hablaba su mismo idioma desde el primer día, el riesgo de fragmentación era total. Por eso, antes de convocar a nadie, me senté a diseñar el andamiaje logístico que permitiría que el rigor técnico se transformara en consenso ejecutivo. No podíamos permitir que el proyecto fuera una "caja negra" para la institución; la comunicación debía ser el sistema circulatorio que mantuviera viva la visión de la "Estrella Polar".

#### El diseño de la hoja de ruta: Deconstruyendo el brief en Google Slides

Mi primera maniobra fue deconstruir el brief preliminar para crear una guía de discusión que no permitiera escapatorias. Utilicé Google Slides no como un apoyo visual pasivo, sino como una herramienta de facilitación táctica. Mi razonamiento fue claro: en una sesión de cuatro horas con perfiles de alto nivel, el tiempo es el recurso más escaso y el enfoque es el más frágil.

Dediqué una diapositiva específica a cada sección crítica que había identificado en la fase de preparación interna:
*   **Objetivos y KPIs:** No me limité a listar números; preparé la justificación de por qué buscábamos una puntuación SUS superior a 75 y cómo eso impactaría directamente en la reducción de carga del call center.
*   **Alcance y Exclusiones:** Aquí tomé una decisión de diseño estratégica. Preparé una diapositiva dedicada exclusivamente a explicar por qué el rediseño inicial no incluiría una aplicación nativa completa. Sabía que esta sería una pregunta recurrente, así que preparé una "pregunta provocadora" para forzar el consenso: "¿Estamos todos de acuerdo con esta priorización inicial para asegurar la estabilidad del portal web antes de expandirnos?".
*   **Restricciones Técnicas:** Crucé los hallazgos de la investigación previa con las realidades del Expediente Clínico Electrónico (ECE). Necesitaba que TI validara si la integración que proponíamos era realista en el corto plazo.

Esta estructura me permitió blindar los 3-5 puntos más críticos que podrían generar debate. Al fragmentar el brief en bloques digeribles y con preguntas dirigidas, me aseguré de que cada sección fuera validada explícitamente antes de pasar a la siguiente, evitando las discusiones circulares que suelen descarrilar estos proyectos.

#### La infraestructura de la transparencia: Definición de canales y frecuencias

Mientras preparaba la guía de discusión, articulé la matriz de comunicación que regiría el proyecto. No quería que la comunicación fuera accidental; quería que fuera sistémica. Diseñé un Plan de Comunicación que establecía una jerarquía clara de audiencias y necesidades, asegurando que cada nivel de la organización recibiera la información justa en el momento preciso.

Configuré tres niveles de interacción fundamentales para proteger la salud del proyecto:
1.  **El ritmo operativo (Core Team):** Establecí **Daily Stand-ups** de 15 minutos vía Google Meet. Su función era simple: visibilidad total sobre el progreso del día anterior, tareas del día y, sobre todo, bloqueos inmediatos. Para temas de diseño más densos, programé **Syncs de Diseño/Dev** dos o tres veces por semana para discutir especificaciones técnicas y flujos complejos.
2.  **El ritmo táctico (Stakeholders y PO):** Definí revisiones de progreso semanales o bi-semanales con el Product Owner del Centro Médico ABC para revisar el backlog en JIRA y hacer demos de funcionalidades. Esto permitía que el cliente viera el valor de forma continua, no solo al final de la fase.
3.  **El ritmo estratégico (Comité Directivo):** Creé el **Steering Committee**, una reunión mensual con la Dirección General y los jefes de área. Aquí el lenguaje cambiaba: nada de jerga de diseño; nos enfocábamos en el impacto en el negocio, el cumplimiento del presupuesto y los riesgos estratégicos mayores.

Esta cadencia garantizaba que los problemas se escalaran antes de que afectaran el cronograma. Si un bloqueo técnico en el ECE no se resolvía en los syncs de desarrollo, yo ya sabía que el siguiente paso era llevarlo a la revisión con stakeholders o, en última instancia, al Comité Directivo.

#### La táctica de la asincronía previa: El pre-read obligatorio

Una de las decisiones más efectivas que tomé como Product Designer fue implementar un protocolo de "pre-read" obligatorio. Cinco días antes del workshop, envié las invitaciones de calendario con el Brief de Producto en Google Docs adjunto. Pero no fue un envío pasivo; fue una instrucción directa.

Solicité a los directores médicos, de TI y de operaciones que leyeran el documento y anotaran sus dudas o comentarios directamente en el Google Doc mediante la función de comentarios en tiempo real. Mi razonamiento era estratégico: quería llegar al workshop con los puntos de fricción ya identificados. Si el Jefe de TI tenía dudas sobre la seguridad de los datos en la nube, yo necesitaba saberlo antes de entrar a la sala para preparar la respuesta técnica adecuada o invitar a la persona correcta para despejarla.

Esta táctica de asincronía previa transformó lo que podría haber sido una tediosa sesión de lectura en una sesión de toma de decisiones. Al llegar al workshop, ya habíamos "limpiado" las dudas superficiales y podíamos dedicar el tiempo de los directivos a lo que realmente importaba: el consenso sobre la visión y los KPIs.

#### Preparando el ecosistema digital: El diseño del espacio en Miro

Para la ejecución del workshop, necesitaba un entorno que hiciera tangible la validación. Configuré un tablero en **Miro** que funcionara como el gemelo digital de nuestra discusión. No era una pizarra en blanco; era un espacio diseñado con secciones numeradas que correspondían a la presentación de Google Slides.

Diseñé áreas específicas para:
*   **Captura de acuerdos en tiempo real:** Para que cada vez que llegáramos a un consenso, el stakeholder viera visualmente una nota adhesiva moviéndose a la zona de "Validado". Esto genera un compromiso psicológico con la decisión.
*   **El "Parking Lot" (Estacionamiento de ideas):** Esta fue mi herramienta diplomática más valiosa. Sabía que surgirían discusiones técnicas profundas sobre la arquitectura de servidores o detalles minuciosos del proceso de admisión que podrían consumir horas. Al tener un espacio designado para "Temas a Resolver Post-Workshop", podía neutralizar estas tangentes diciendo: "Es un punto crítico, vamos a ponerlo en el Parking Lot con un responsable asignado para no perder el foco en la validación de los objetivos de hoy".
*   **Priorización visual:** Espacios para ejercicios rápidos de brainstorming si surgían puntos muy divergentes sobre las funcionalidades del portal del paciente.

#### Principios de comunicación: Eliminando la jerga para ganar aliados

Finalmente, blindé el plan bajo cinco principios fundamentales que extraje de la necesidad de alinear perfiles tan diversos: **Transparencia, Claridad, Relevancia, Proactividad y Bidireccionalidad**. Como diseñador, mi mayor reto fue la claridad. Tuve que hacer un esfuerzo consciente para eliminar términos como "fricción cognitiva" o "heurísticas" y sustituirlos por conceptos que un Director Médico valorara, como "seguridad del paciente en el proceso digital" o "eficiencia en el agendamiento".

La bidireccionalidad fue clave para ganar la confianza de las áreas más escépticas, como TI. Al asegurarles que sus restricciones técnicas no solo serían escuchadas, sino documentadas y seguidas proactivamente, logré que dejaran de ver el rediseño como una amenaza a la estabilidad de sus sistemas y empezaran a verlo como una mejora necesaria. En esta fase, mi labor fue más de diplomático que de creativo; entendí que el diseño no empieza en Figma, sino en la construcción de una base de confianza mutua.

> **Insight de gobernanza:** El "Parking Lot" en Miro no fue solo una técnica de facilitación; fue mi escudo contra el desvío del alcance. Me permitió validar los objetivos de negocio sin que las limitaciones actuales del ECE (que TI defendía con vehemencia) mataran la ambición del proyecto antes de empezar.

Teníamos la logística blindada, el tablero de Miro listo y a todos los stakeholders con el brief leído (o al menos eso decían sus comentarios en Google Docs). Sin embargo, al entrar a la sesión de Google Meet y ver los rostros de los directivos, sentí una tensión inmediata: el Director Médico y el Jefe de TI traían agendas que no parecían coincidir en absoluto. Estábamos a segundos de iniciar el workshop de validación y me di cuenta de que mi plan de comunicación estaba a punto de enfrentar su prueba de fuego real en una negociación donde los KPIs de uno eran el dolor de cabeza del otro.

---

### Parte 3: El Workshop de Validación Negociación y Consenso Estratégico

#### El momento de la verdad en la arena digital

Entré a la sesión de Google Meet y me encontré con un silencio denso. Al ver los rostros del Director Médico y el Jefe de TI, comprendí de inmediato que no estaba ahí para presentar un documento, sino para mediar en una negociación de alto nivel. Tenía frente a mí dos agendas que, históricamente, habían operado en silos: la urgencia médica por ofrecer una atención de excelencia y la cautela técnica de TI por proteger la estabilidad de sistemas heredados. Mi rol como **Product Designer** mutó en ese instante; dejé de ser el autor del brief para convertirme en un facilitador de consenso estratégico. Sabía que si no lograba que el brief fuera percibido como un contrato de negocio compartido, el proyecto moriría por mil cortes antes de que dibujara el primer wireframe.

#### Facilitación y control de escena: La arquitectura del diálogo

Liderar una sesión de cuatro horas con perfiles directivos requiere una disciplina casi quirúrgica. Utilicé Google Slides no como una presentación pasiva, sino como un ancla visual para mantener el enfoque en cada sección crítica del brief. Establecí las "reglas del juego" desde el minuto uno: escucha activa, validación inmediata y un enfoque obsesivo en soluciones. Mi objetivo era evitar que la sesión se descarrilara hacia quejas operativas del día a día.

Mientras proyectaba, utilicé **Miro** como mi lienzo de captura en tiempo real. Esta transparencia radical fue mi principal herramienta de control; cada vez que un stakeholder hablaba, sus ideas aparecían mapeadas en la pizarra digital. Esto no solo mantuvo el "momentum" de la sesión virtual, sino que eliminó la fatiga de decisión. Si el Jefe de TI expresaba una duda, yo la transformaba en un post-it visual frente a todos. Esto forzó a que el Director Médico y el equipo de Marketing no solo escucharan las restricciones, sino que las validaran activamente como parte de la realidad del proyecto. No permití que ningún punto se quedara en el aire; cada sección debía ser "cerrada" verbalmente antes de pasar a la siguiente.

#### Diseccionando la fragmentación: Cuando el dolor se vuelve consenso

El primer gran asalto fue la validación del problema. Tuve que ser brutalmente honesto: la plataforma actual del Centro Médico ABC era un archipiélago de servicios desconectados. Expuse la evidencia de cómo 'Mi Salud ABC' operaba como un silo de radiología basado en MyVue de Carestream, totalmente divorciado de la experiencia de la web principal. 

Forcé al grupo a reconocer que esta fragmentación no era solo un "detalle de diseño", sino una falla en la promesa de excelencia de la institución. Al contrastar esta realidad con los hallazgos de la investigación 2015-2020, logré que el Director Médico aceptara que la desconexión digital estaba afectando la percepción de modernidad del hospital. En ese momento, el problema dejó de ser estético y se convirtió en una oportunidad de negocio indiscutible. Logramos el consenso de que el rediseño debía unificar el recorrido del usuario, eliminando la confusión que generaba saltar entre subdominios y portales de terceros que no hablaban el mismo lenguaje visual ni funcional.

#### La negociación de los KPIs: Blindando el éxito con números

Donde la sesión alcanzó su punto máximo de tensión fue en la definición de los **SMART Goals**. Como diseñador senior, sé que un objetivo sin métrica es solo un deseo. Defendí con firmeza la inclusión de la **System Usability Scale (SUS)** como nuestro termómetro de calidad, fijando una meta superior a los 75 puntos para el Q1 de 2022. No fue una cifra arbitraria; era el estándar que necesitábamos para asegurar que el rediseño realmente moviera la aguja de la usabilidad.

Pero el verdadero campo de batalla fue la tasa de adopción. Propuse alcanzar un **60% de agendamiento online** para julio de 2022. Hubo un murmullo de duda; el equipo de Operaciones lo veía ambicioso. Mi razonamiento fue estratégico: si íbamos a centralizar todas las especialidades y estudios en un sistema único, el éxito no se mediría en "clics", sino en la reducción real de carga para el call center. Vinculé directamente este KPI con la eficiencia operativa. Al final, aceptaron la cifra no porque fuera fácil, sino porque entendieron que era el único camino para justificar la inversión. También blindamos el compromiso con la accesibilidad, fijando el cumplimiento de la norma **WCAG 2.1 AA**, lo que nos obligó a todos a priorizar un diseño inclusivo desde la base, no como un parche posterior.

#### El 'Parking Lot' y la diplomacia técnica frente al ECE

La fricción más peligrosa surgió cuando tocamos la integración del **Expediente Clínico Electrónico (ECE)**. El Jefe de TI se puso a la defensiva de inmediato, citando la complejidad de las APIs y la deuda técnica acumulada entre 2017 y 2019. El workshop estuvo a punto de estancarse en una discusión de backend que no íbamos a resolver ese día.

Fue aquí donde apliqué la técnica del **"Parking Lot"** en Miro. En lugar de confrontar la restricción técnica, la validé y la "estacioné" visualmente en una zona de temas pendientes para sesiones técnicas específicas. "Entiendo perfectamente el riesgo de la estabilidad del ECE", dije, "vamos a documentar esta restricción técnica aquí mismo para abordarla con Arquitectura de Sistemas la próxima semana, pero por ahora, sigamos definiendo el flujo ideal para el paciente". Esta maniobra despejó el camino. Me permitió mantener el foco en la estrategia y el alcance (enero de 2022 como fecha inamovible de lanzamiento) sin ignorar las preocupaciones de TI. El Parking Lot no fue un basurero de ideas; fue mi escudo para proteger el flujo del workshop y asegurar que las asunciones presupuestarias no mataran la ambición del rediseño.

#### Miro como artefacto de verdad y contrato visual

Al final de la sesión, la pizarra de Miro no era solo una colección de notas; era el mapa de nuestra futura plataforma. Ver sus propias palabras y preocupaciones transformadas en requisitos y exclusiones de alcance (como la decisión de postergar la app nativa para priorizar una experiencia web responsiva de primer nivel) generó un "buy-in" que un documento de texto nunca habría logrado. 

Utilicé el ejercicio de priorización visual para que todos vieran por qué el laboratorio e imagenología debían ser los pilares del lanzamiento inicial. Esta transparencia radical eliminó cualquier ambigüedad. Al cerrar la sesión, nadie podía decir que no estaba de acuerdo; sus firmas virtuales y sus comentarios estaban ahí, integrados en la estructura de lo que se convertiría en el brief final. Mi labor de diplomacia técnica había funcionado: logré traducir el lenguaje médico de "cuidado del paciente" y el lenguaje técnico de "estabilidad de sistemas" al lenguaje de diseño de "experiencia unificada".

> **Insight de facilitación:** El éxito de este workshop no radicó en mi capacidad de oratoria, sino en mi capacidad de escucha activa y traducción. Un Product Designer senior debe saber cuándo soltar el lápiz de diseño y tomar el mazo del mediador para asegurar que el cimiento estratégico sea lo suficientemente fuerte como para soportar la ejecución que viene.


Al cerrar la sesión de Google Meet, me quedé solo frente a la pizarra de Miro, llena de post-its, flechas y zonas de conflicto marcadas en rojo. Tenía el consenso, pero ahora me enfrentaba al reto de destilar esa explosión de información en un documento de gobernanza que fuera indestructible ante futuros cambios de opinión. Sabía que la verdadera prueba vendría cuando tuviera que formalizar las firmas y blindar el alcance contra el "scope creep" que los stakeholders suelen intentar semanas después, lo que me llevó directamente a la fase de CONSOLIDACIÓN DEL ARTEFACTO Y BLINDAJE ORGANIZACIONAL.

---

### Parte 4: Consolidación del Artefacto y Blindaje Organizacional

#### La destilación forense: De la explosión de ideas al documento de gobernanza

Al cerrar la sesión de Google Meet, el silencio en mi estudio contrastaba con el ruido visual de la pizarra de Miro que tenía frente a mí. Estaba saturada de post-its, flechas de conexión y zonas marcadas en rojo donde los intereses de TI y la Dirección Médica habían chocado. Tenía el consenso verbal, pero como diseñador con años en esto, sé que las palabras se las lleva el viento cuando los presupuestos se aprietan o los plazos se acortan. Mi responsabilidad en ese momento no era "dibujar pantallas", sino realizar una destilación forense de toda esa inteligencia colectiva para transformarla en un artefacto de gobernanza inamovible.

Dediqué las siguientes 48 horas a deconstruir cada nota. No fue un proceso de copiar y pegar; fue una auditoría de cada comentario capturado. Separé los acuerdos validados de las clarificaciones que aún requerían una llamada rápida. Utilicé una matriz de priorización interna para asegurar que cada ajuste solicitado en el workshop estuviera respaldado por la investigación previa que habíamos realizado entre 2015 y 2020. Si un stakeholder pedía una funcionalidad que contradecía los hallazgos de fricción que ya conocíamos, mi labor era articular por qué esa petición debía ser reformulada. Este proceso de síntesis es lo que garantiza el *buy-in* total: cuando los líderes ven sus preocupaciones reflejadas no como quejas, sino como requisitos estratégicos, el proyecto deja de ser "el rediseño de diseño" para convertirse en el proyecto de toda la institución.

#### Transparencia radical como herramienta de diseño

Una vez consolidado el feedback, pasé a la actualización del documento maestro. Aquí apliqué lo que llamo "transparencia radical". No me limité a entregar una versión limpia; utilicé el control de cambios y el modo de sugerencias para que cada stakeholder pudiera rastrear la evolución de sus propias peticiones. En una organización tan jerárquica y compleja como el Centro Médico ABC, la trazabilidad es la moneda de cambio para generar confianza.

En esta fase, blindé los **Objetivos SMART** que definirían el éxito o fracaso de mi trabajo un año después. Fui obsesivo con la especificidad:
*   Establecí que el éxito de la usabilidad se mediría con una puntuación **SUS (System Usability Scale) superior a 75 puntos** en las pruebas post-lanzamiento.
*   Fijamos la meta de migrar el **60% del agendamiento de citas a canales digitales** para julio de 2022.
*   Definimos un aumento del 20% en el consumo de contenido educativo, integrando la futura alianza con YouTube Health.

Insertar estos números en el brief fue un acto de valentía técnica. Al hacerlo, estaba aceptando que mi diseño sería juzgado por resultados de negocio y no solo por estética. Pero esa es la diferencia entre un diseñador visual y alguien que diseña productos: nosotros diseñamos para mover la aguja de los KPIs.

#### Despejando el 'Parking Lot': La realidad técnica frente a la visión de producto

El workshop había dejado varios temas en el "Parking Lot" (temas pendientes), y no podía cerrar el brief sin resolverlos. El más crítico era la integración del **Expediente Clínico Electrónico (ECE)** y la fragmentación de "Mi Salud ABC". Me reuní en sesiones ad-hoc con el Jefe de TI para entender la verdadera profundidad del problema. Descubrimos que el portal de radiología, basado en MyVue de Carestream, operaba como una isla tecnológica. 

Mi maniobra aquí fue estratégica: en lugar de prometer una integración total imposible de ejecutar en seis meses, ajustamos el alcance para crear un punto de entrada unificado. Decidí que el rediseño debía priorizar la percepción de una experiencia única para el paciente, aunque por detrás estuviéramos articulando sistemas distintos. Esta decisión de "mitigación técnica" fue vital para que el alcance de la Fase 1 fuera realista. También tomé la decisión ejecutiva de dejar fuera del alcance inicial el rediseño de la intranet de médicos ("MI ABC"). Fue una decisión incómoda pero necesaria para blindar el tiempo del equipo y evitar el *scope creep* que suele hundir proyectos de esta envergadura. 

#### El ritual de la firma: Blindando la 'Estrella Polar' del proyecto

La validación final no fue un simple envío de correo; fue un ritual de gobernanza. Distribuí el brief actualizado a los actores clave: el **Director General**, el **Director Médico**, el **Jefe de TI** y el **Product Owner** del CM ABC. Les pedí una revisión final de 48 horas con una condición: una vez aprobado, este documento se convertiría en nuestra **"Estrella Polar"**. 

Obtener la aprobación formal de estos líderes transformó el brief de un documento de diseño en un mandato organizacional. Con esas firmas, blindé al equipo contra cambios de opinión caprichosos en el futuro. Si alguien meses después pedía una app nativa (que habíamos excluido explícitamente para priorizar la web responsiva y la accesibilidad WCAG 2.1 AA), el brief validado era mi escudo para decir "no, esto no es lo que acordamos como éxito". 

Este rigor en la Fase 0 es lo que permitió que, años más tarde, la plataforma no solo sobreviviera, sino que escalara para integrar herramientas como HubSpot sin perder su coherencia estructural. Me retiré de esa fase con el brief bajo el brazo, sabiendo que el cimiento era lo suficientemente fuerte como para soportar todo lo que íbamos a construir encima.

**Reflexión final:**
Mirando hacia atrás, esta actividad de validación fue el momento en que el proyecto ganó su alma. Aprendí que mi trabajo como diseñador senior empieza mucho antes de tocar Figma; empieza ganando la batalla de las expectativas y la alineación política. Dejar este documento blindado no solo protegió el presupuesto, sino que nos dio la libertad creativa para explorar soluciones sabiendo que todos estábamos remando hacia el mismo KPI.

---

