# Fase 1: Entender y Definir (Discovery & Research)

## Actividad_05_Establecimiento de Métricas de Éxito Claras

### Parte 1: Sentando las Bases Preparación y Alineación Estratégica

#### La transición del diagnóstico a la rendición de cuentas

Había terminado de mapear el ecosistema de Gentera y los Journey Maps "As-Is" mostraban una realidad cruda: el proceso actual no estaba roto, estaba colapsado bajo su propio peso manual. Sin embargo, como diseñador, sabía que tener un mapa del desastre no era suficiente para garantizar el éxito de la solución. Me encontraba en ese punto crítico donde la empatía debe transformarse en rigor matemático. No bastaba con diseñar una interfaz limpia para GAC; necesitaba definir exactamente qué significaría "ganar" en este proyecto. Si no establecía un Norte Verdadero antes de mover un solo píxel en la fase de solución, corríamos el riesgo de construir una herramienta hermosa que no resolviera el problema de negocio.

Mi razonamiento estratégico fue directo: el éxito de GAC no se mediría por la estética de sus componentes, sino por las horas recuperadas y los errores eliminados en la operación de Carlos. Esta transición hacia el **Establecimiento de Métricas de Éxito Claras** fue el momento en que dejé de ser un explorador de problemas para convertirme en el arquitecto de los resultados. Necesitaba anclar las expectativas de los stakeholders en indicadores que Gentera pudiera auditar, transformando los hallazgos cualitativos en un sistema de medición de impacto de grado industrial. Antes de entrar a la sala de diseño, debíamos acordar cómo íbamos a ser juzgados.

#### Auditoría de los objetivos estratégicos y el umbral de rentabilidad

Mi primer paso técnico fue realizar una auditoría forense de los objetivos macro que se habían definido inicialmente. No los acepté como simples deseos, sino que los analicé como el contrato operativo del producto. Me enfoqué en dos metas maestras que dictarían la viabilidad de todo el desarrollo:

*   **Automatización del 95% de los colaboradores elegibles:** Este número es masivo. No se trata solo de filtrar una lista; implica que el sistema debe ser capaz de procesar reglas de negocio complejas (como la regla de los 6 meses para reingresos o la identificación de nuevos ingresos y promociones) casi sin intervención humana.
*   **Reducción del 80% del tiempo manual invertido:** Si el administrador dedica actualmente casi toda su semana a esto, mi objetivo era devolverle cuatro de cada cinco días de su tiempo.

Entendí que estos porcentajes no eran arbitrarios; representaban el umbral de rentabilidad operativa para Gentera. Si lográbamos el 60% de reducción, el proyecto sería "bueno", pero si alcanzábamos el 80%, sería transformador. Esta validación fue fundamental para estructurar los criterios **SMART** (Específicos, Medibles, Alcanzables, Relevantes y de Tiempo limitado) que guiarían el taller. Cada métrica que propusiéramos después debía tributar directamente a estos dos pilares.

#### El análisis forense del "Maratón de los Jueves"

Para establecer una línea base sólida, regresé a los datos más crudos del análisis del proceso actual. Necesitaba cuantificar el dolor de Carlos, el Administrador de Capacitación, para que el "antes" fuera tan indiscutible como el "después". Diagnostiqué lo que llamé el "maratón de los jueves": un ciclo de **24 a 32 horas semanales** de trabajo manual intensivo que comienza con la recepción de una plantilla de Excel de ADN.

El nivel de fragmentación que encontré fue alarmante:
1.  **Carga Cognitiva Extrema:** Carlos debe cruzar manualmente la plantilla de ADN con un "Concentrado Histórico" masivo para validar estatus, fechas de ingreso y elegibilidad.
2.  **La Regla de los Seis Meses:** Una verificación manual que requiere buscar antecedentes de capacitación para cada reingreso, un proceso propenso al error humano por puro agotamiento.
3.  **Inconsistencia de Datos:** Descubrí que entre el **10% y el 15% de los registros** de la fuente original (ADN) requieren corrección manual por inconsistencias en nombres, puestos o fechas.

> **Insight Senior:** En este punto, comprendí que la eficiencia no era una métrica de mejora, sino de supervivencia operativa. Si el sistema GAC no podía manejar ese 15% de basura en los datos de entrada sin colapsar, la automatización del 95% sería un mito. La línea base de 32 horas se convirtió en mi principal enemigo a vencer.

#### La convocatoria estratégica: Alineando a los guardianes del proyecto

Con la línea base clara, procedí a articular la convocatoria para el taller de métricas. En un proyecto de esta envergadura, elegir a los asistentes no es un tema de cortesía, sino de integridad del dato. Configuré una mesa de trabajo con cuatro perfiles críticos, cada uno actuando como guardián de una dimensión del éxito:

*   **Lalo (Líder de Proyecto):** Su rol era asegurar que cada métrica estuviera alineada con la visión estratégica de negocio y el ROI esperado por Gentera.
*   **Carlos (Administrador de Capacitación):** Mi fuente de verdad operativa. Nadie mejor que él para validar si una reducción de tiempo propuesta era realista o si estábamos ignorando una excepción crítica del proceso.
*   **Marta:** Su perspectiva era vital para asegurar que las métricas de capacitación fueran válidas tanto para entornos presenciales como virtuales.
*   **Alberto:** El guardián de la integridad de los datos. Su presencia garantizaba que las métricas técnicas (como la precisión de la automatización) fueran factibles de extraer desde el backend.

Esta alineación previa fue un movimiento táctico para evitar las "métricas de vanidad". No quería medir cuántas personas entraban a la plataforma; quería medir cuántos procesos terminaban con éxito sin intervención manual. La presencia de estos stakeholders blindaba el taller contra indicadores irrelevantes.

#### Transformando el "rompecabezas artesanal" en indicadores de UX

Utilicé las User Personas y los Journey Maps para identificar los puntos de contacto exactos donde la satisfacción debía ser medida. El análisis previo describía la segmentación de grupos como un "rompecabezas artesanal" que generaba frustración y agotamiento. Mi tarea fue traducir ese sentimiento cualitativo en métricas de usabilidad estandarizadas.

Decidí que no podíamos conformarnos con una encuesta de satisfacción genérica. Propuse dos marcos de medición específicos para la experiencia de usuario:
*   **System Usability Scale (SUS):** Para obtener una medida objetiva de la facilidad de uso de la plataforma una vez que Carlos intentara realizar la segmentación de grupos en el sistema.
*   **Nivel de Satisfacción (CSAT):** Enfocado específicamente en la claridad de la visualización del progreso para líderes y colaboradores.

El razonamiento era simple: si GAC reducía el tiempo (eficiencia) pero era un "dolor de cabeza" de usar (usabilidad), la adopción a largo plazo fracasaría. Necesitábamos medir la reducción de la carga cognitiva tanto como la reducción de las horas de reloj.

#### Los cuatro pilares del éxito industrial

Finalmente, antes de iniciar la sesión de co-creación, estructuré la propuesta de medición en cuatro dimensiones críticas que cubrieran todo el espectro del proyecto. Esta categorización aseguraba que no dejáramos puntos ciegos estratégicos:

1.  **Métricas Operativas:** Centradas en la eficiencia pura. Tiempos de procesamiento, reducción de horas manuales y disminución de la tasa de error en las convocatorias.
2.  **Métricas de Adopción:** Para medir el uso real. Me propuse una meta de **85% de adopción** entre los administradores en los primeros tres meses. Si la herramienta es buena pero nadie la usa, el valor es cero.
3.  **Métricas de Satisfacción (UX):** La percepción del usuario. Pasar del agotamiento actual a una experiencia de control y claridad.
4.  **Calidad y Cumplimiento:** Los SLAs técnicos. Disponibilidad del sistema (Uptime) y precisión de la lógica de automatización.

Esta estructura fue mi escudo contra la ambigüedad. Al presentar estos pilares, dejé claro que GAC no solo debía funcionar técnicamente, sino que debía ser una herramienta que los usuarios *quisieran* usar. Estábamos listos para el taller, no con una hoja en blanco, sino con un caso de negocio acorralado por números y evidencias que Gentera no podía ignorar.

#### Próximo paso:

Teníamos los objetivos macro y el diagnóstico del dolor, pero al mirar a los stakeholders sentados a la mesa, noté una tensión silenciosa: todos querían eficiencia, pero nadie se ponía de acuerdo en cómo íbamos a extraer esos datos de un sistema que aún no existía. Sabía que el siguiente desafío no sería definir el "qué", sino articular el "cómo" técnico para que cada clic de Carlos se convirtiera en un punto de dato auditable sin añadirle más carga de la que ya tenía. La pregunta era si podíamos construir un framework de medición que fuera tan automatizado como la plataforma misma, o si terminaríamos creando otro Excel para medir el fin de los Excels.

### Parte 2: El Framework de Medición Marcos de Referencia y Logística

#### La transición del "parece bueno" al "es rentable"

Tras cerrar el mapeo de los *journey maps* y entender el nivel de fricción que Carlos vivía operando entre Excels y correos, me enfrenté a una realidad incómoda: la buena voluntad y los flujos bien diseñados no bastan para sostener un proyecto de esta escala en Gentera. Como responsable de la experiencia, sabía que si no definíamos el "éxito" con precisión técnica antes de que ingeniería escribiera la primera línea de código, el proyecto GAC corría el riesgo de ser percibido como un gasto operativo más y no como la herramienta estratégica que habíamos proyectado.

Mi razonamiento fue pragmático: necesitábamos pasar de los deseos de "eficiencia" a un sistema de medición que fuera auditable y, sobre todo, indiscutible. No quería que al final del despliegue estuviéramos discutiendo si la plataforma "se sentía más rápida"; quería datos que demostraran que lo era. Articulé entonces una arquitectura de medición que serviría de contrato de cumplimiento entre Dacodes y los stakeholders. Mi objetivo era blindar el producto desde cuatro frentes: la satisfacción del usuario, la adopción real, la eficiencia operativa y la estabilidad técnica.

#### Blindando la experiencia: El framework HEART como escudo

Para asegurar que GAC no terminara siendo otra herramienta corporativa impuesta y odiada, decidí integrar el framework **HEART** de Google. Aunque es común verlo en productos de consumo masivo (B2C), en un contexto de software interno (B2E) es donde realmente separa un producto mediocre de uno excelente. Mi enfoque no fue usarlo como una métrica de vanidad, sino como un sensor de salud del flujo de trabajo.

*   **Happiness (Felicidad):** Decidí que mediríamos esto mediante un CSAT (Customer Satisfaction Score) específico para Carlos y los administradores. No me interesaba una encuesta general, sino su percepción justo después de ejecutar la tarea más crítica: generar su primera lista segmentada. Si el sistema le devolvía tiempo y tranquilidad, la métrica lo reflejaría.
*   **Task Success (Éxito de la Tarea):** Aquí es donde el diseño se vuelve forense. Me centré en la reducción del error humano. Si antes Carlos cometía X errores por cada 100 convocatorias debido al proceso manual, nuestra meta era llevar ese número a niveles marginales. El éxito de la tarea no era solo terminarla, sino terminarla bien a la primera.

Este marco me permitió elevar la conversación con Lalo y Carlos. Ya no hablábamos de botones o colores; hablábamos de señales de comportamiento que podíamos rastrear y optimizar.

#### Hackeando las métricas pirata para el entorno corporativo

El modelo **AARRR** (Acquisition, Activation, Retention, Referral, Revenue) suele ser el estándar para el crecimiento de startups, pero lo adapté para la rentabilidad operativa de Gentera. En un sistema cerrado como GAC, la "Adquisición" es obligatoria, por lo que moví mi atención hacia la **Activación** y la **Retención**.

Definí el "Momento Aha!" —la Activación— como el instante en que un líder de área visualiza por primera vez el progreso de su equipo en el dashboard sin tener que pedir un reporte por correo. Si lográbamos que ese líder encontrara valor en los primeros 10 segundos de interacción, la plataforma estaba ganada. La **Retención** la vinculé a la frecuencia con la que los administradores regresaban a ajustar segmentaciones; un uso recurrente indicaría que la herramienta se había convertido en su centro de control, no en un trámite esporádico.

En cuanto al **Revenue**, en este proyecto el retorno no viene de ventas, sino del ahorro masivo de horas-hombre. Cada minuto que le quitábamos al proceso manual de la plantilla de capacitación era dinero que Gentera recuperaba. Esta lógica transformó el diseño en un caso de negocio sólido.

#### Conectando el "Qué" con el "Cómo" mediante el modelo GSM

Para que el equipo de desarrollo de Dacodes supiera exactamente qué eventos debía trackear en el backend, implementé el modelo **Goal-Signal-Metric (GSM)**. Este paso fue vital para evitar la acumulación de datos basura y centrar esfuerzos en lo que realmente movía la aguja.

Tomé el objetivo principal: "Reducir en un 80% el tiempo dedicado a la segmentación".
*   **Goal (Objetivo):** Eficiencia extrema en el procesamiento de datos.
*   **Signal (Señal):** El tiempo que el sistema tarda en procesar la plantilla de capacitación tras la carga.
*   **Metric (Métrica):** El log exacto, medido en segundos, desde el evento `upload_complete` hasta la generación de los resultados preliminares en pantalla.

Este nivel de granularidad despejó cualquier ambigüedad. No estábamos midiendo "la velocidad del sitio", estábamos midiendo el tiempo de procesamiento de una regla de negocio específica. Con esto, blindé el requerimiento técnico: el sistema debía ser capaz de registrar y reportar estos tiempos de forma automatizada, eliminando la necesidad de cronometrajes manuales en el futuro.

#### OKRs: El lenguaje de la alta dirección

Finalmente, estructuré todos estos indicadores bajo la metodología de **OKRs (Objectives and Key Results)**. Necesitaba que Lalo pudiera subir a una revisión de dirección y decir: "Tenemos una tasa de adopción del 85% entre administradores en los primeros 90 días". 

Establecer Key Results específicos, como automatizar la identificación de colaboradores elegibles en un 95%, no fue solo un ejercicio de planificación; fue establecer el listón de calidad. Si el sistema fallaba en ese 5% restante, sabíamos exactamente dónde debíamos iterar. Los OKRs se convirtieron en nuestro contrato de cumplimiento y en la brújula que guiaría las prioridades de desarrollo en los siguientes sprints.

#### La logística del tablero: Preparando el terreno en Miro

Para que el taller de definición de métricas no se convirtiera en una sesión de dos horas de silencio incómodo o discusiones circulares, diseñé una infraestructura técnica en Miro. No podíamos permitirnos el agotamiento de los stakeholders.

Preparé el tablero con los objetivos del *Brief Detallado* ya precargados. Mi estrategia fue que Lalo y Carlos no empezaran desde una hoja en blanco, sino que actuaran como validadores y refinadores de una propuesta ya estructurada. Dividí el tablero en las cuatro dimensiones críticas: Operativas, Adopción, Satisfacción y Calidad Técnica. Cada métrica propuesta debía pasar por el filtro **SMART** (Específica, Medible, Alcanzable, Relevante y con un Plazo definido) antes de ser movida a la zona de "Acuerdo Final".

> El reto de medir lo que hoy es "invisible" o puramente manual es la mayor barrera para demostrar el ROI. Si Carlos no sabe exactamente cuántas horas pierde hoy porque el caos es su estado natural, nuestra primera misión era ayudarle a cronometrar ese dolor. Solo así el éxito de GAC sería contrastable y, francamente, heroico.

#### Próximo paso:

Teníamos la arquitectura lista y el tablero montado, pero faltaba la parte más delicada: enfrentar a los stakeholders con sus propias expectativas. Sabía que en cuanto pusiéramos números sobre la mesa —especialmente ese ambicioso 80% de reducción de tiempo—, empezarían a surgir las dudas sobre la viabilidad técnica y la precisión de los datos actuales. La pregunta que quedaba en el aire era si Lalo y Carlos estarían dispuestos a comprometerse con métricas tan crudas o si el peso de la "línea base" inexistente nos obligaría a pivotar hacia un enfoque más cualitativo y menos auditable.

### Parte 3: El Taller Alineación y Brainstorming de Indicadores

#### El peso de la cifra: El 80% como norte estratégico

Proyecté en la pantalla principal una cifra que detuvo la inercia de la conversación: **80% de reducción de tiempo**. No era un número al azar; era el compromiso que habíamos extraído del *Brief Detallado* y la promesa central de la plataforma GAC. En ese momento, la sala de juntas de Gentera se quedó en silencio. Miré a Lalo, que buscaba la validación del ROI, y luego a Carlos, cuyo rostro reflejaba el escepticismo de quien ha vivido años bajo el peso de procesos manuales que consumen entre 24 y 32 horas semanales. Sabía que, como diseñador, mi trabajo ese día no era dibujar pantallas, sino articular un consenso sobre lo que significaría la victoria.

Sin un acuerdo explícito sobre estas métricas, cualquier diseño posterior sería juzgado bajo el lente de la subjetividad. Mi razonamiento era claro: necesitábamos transformar el "dolor" operativo de Carlos en una línea base auditable. Si no definíamos hoy qué era el éxito, mañana no podríamos defender por qué una decisión de diseño priorizaba la automatización sobre la estética. Inicié la sesión revisitando los objetivos que habíamos consolidado en la fase de descubrimiento. No permití que avanzáramos hasta que todos en la mesa confirmaron que el norte seguía siendo el mismo: eficiencia, trazabilidad y, sobre todo, el alivio de la carga administrativa.

#### De la abstracción al indicador: La dinámica de divergencia

Una vez alineados los objetivos, pasamos a la fase de **brainstorming de indicadores**. Utilicé la estructura que había preparado basada en las cuatro dimensiones críticas: Operativas, Adopción, Satisfacción y Calidad Técnica. Lancé una pregunta que obligó a los stakeholders a salir del lenguaje corporativo: *"Si mañana apagamos GAC y todo funciona perfecto, ¿qué es lo primero que notarían en su día a día sin abrir la plataforma?"*.

Esta pregunta detonante permitió que las ideas fluyeran sin el filtro de la viabilidad técnica inmediata. Carlos fue el primero en romper el hielo. Habló de la "certeza", de no tener que revisar tres veces el mismo Excel para asegurarse de que un colaborador no fuera asignado a un curso que ya tomó. Lalo, por su parte, se centró en la visibilidad: quería que cualquier director pudiera ver el estatus de su equipo sin pedir un reporte manual que tardaba días en generarse. Durante esta fase, mi rol fue el de un curador de señales. Escuchaba términos vagos como "mejor comunicación" y los traducía mentalmente a indicadores potenciales que pudiéramos medir en los **logs del sistema** o mediante **encuestas de satisfacción**.

> El peligro de un brainstorming sin estructura es terminar con "métricas de vanidad" que no dicen nada sobre la salud del producto. Mi maniobra aquí fue forzar cada idea a pasar por el filtro de las categorías del proyecto, asegurando que no perdiéramos de vista la **Calidad y Cumplimiento**, que es donde reside el verdadero blindaje técnico de una solución de este calibre.

#### El marco GSM: Conectando metas con señales humanas

Para elevar el rigor de la sesión, apliqué el marco **Goal-Signal-Metric (GSM)**. No quería simplemente una lista de KPIs; quería entender la señal observable de que estábamos logrando el objetivo. Por ejemplo, para el objetivo de "Eficiencia Operativa", la señal no era solo un número en un dashboard, sino un cambio de comportamiento: "Carlos ya no se queda tarde los jueves procesando la plantilla de capacitación".

Esta traducción de objetivos en señales tangibles fue vital para generar empatía entre los diferentes perfiles. Logramos identificar señales críticas para cada rol:
*   **Para los Administradores:** La señal es la ausencia de correcciones manuales post-envío de convocatorias.
*   **Para los Colaboradores:** La señal es la reducción de quejas por recibir invitaciones a cursos incorrectos o en sedes equivocadas.
*   **Para los Líderes:** La señal es la consulta autónoma del progreso de su equipo, eliminando los hilos de correos interminables hacia el área de capacitación.

Al identificar estas señales, el taller dejó de ser una discusión técnica sobre datos para convertirse en una hoja de ruta sobre cómo íbamos a mejorar la vida de las personas involucradas. Esta claridad nos permitió pasar a la fase más difícil: el refinamiento bajo el rigor del criterio **SMART**.

#### El filtro SMART: El rigor de la línea base

Tomé los indicadores más potentes del brainstorming y los sometí a una autopsia forense frente a los stakeholders. No podíamos permitirnos métricas ambiguas. Empezamos con la **Tasa de Error en Convocatorias**. Carlos admitió que actualmente el error humano oscila entre el 10% y el 15%. Establecimos ahí nuestra **Línea Base**. Mi propuesta, respaldada por la capacidad de automatización que estábamos diseñando, fue una reducción del 90%, apuntando a una tasa de error inferior al 1.5% en los primeros seis meses.

Continuamos con la **Precisión de la Automatización de Elegibles**. Aquí la tensión aumentó. El objetivo del proyecto exige un 95% de precisión en la identificación de los más de 27,000 colaboradores. Definimos que la fuente de verdad para medir esto sería una auditoría cruzada entre los resultados de GAC y las correcciones manuales que Carlos tuviera que realizar. Si el sistema identificaba a alguien que no debía estar ahí, o viceversa, la métrica caería. Fue un momento de honestidad brutal: aceptamos que hoy la precisión es del 0% porque el proceso es totalmente manual y reactivo.

Para la **Satisfacción del Usuario (UX)**, introduje el uso de la **System Usability Scale (SUS)**. Expliqué a Lalo y Carlos que no bastaba con que la plataforma funcionara; debía ser percibida como una herramienta útil y fácil de navegar. Fijamos una meta ambiciosa: un **puntaje SUS de 75 o superior** en el primer año. Esto no es solo un número; es un estándar industrial que nos obliga a mantener un nivel de diseño de interacción de alta calidad, asegurando que la curva de aprendizaje para los nuevos usuarios sea mínima.

#### Gestión de la tensión: Entre el ROI y la realidad operativa

Llevar este taller implicó maniobrar entre dos fuerzas opuestas. Lalo, con una visión de negocio muy clara, presionaba por métricas de adopción inmediatas. Quería ver un 100% de uso desde el día uno. Tuve que intervenir para calibrar las expectativas: la adopción es un proceso cultural, no solo tecnológico. Acordamos una **Tasa de Adopción del 85% para administradores** en los primeros tres meses, reconociendo que habría un periodo de transición donde el sistema viejo y el nuevo coexistirían brevemente.

Por otro lado, Carlos temía que al exponer la línea base de 24-32 horas semanales, se viera como una ineficiencia personal y no del sistema actual. Blindé su posición explicando que esas horas son el "costo de oportunidad" que Gentera está pagando por no tener GAC. Al final de la sesión, logramos un compromiso compartido:
*   **Métricas Operativas:** Reducción del 80% en el tiempo de generación de listas (bajando de 30 horas a menos de 6 horas semanales).
*   **Métricas de Calidad:** Un **Uptime superior al 99.5%** y tiempos de respuesta en la carga de la plantilla de máximo 10 minutos para el volumen masivo de datos.
*   **Métricas de Satisfacción:** Un objetivo de **4.0/5.0 en la escala Likert** para la percepción de alivio en la carga de trabajo de los administradores.

#### La métrica como contrato de confianza

Al cerrar el taller, sentí que habíamos pasado de un proyecto de software a un compromiso de impacto. Establecer una línea base en un entorno de caos manual es, en gran medida, un acto de fe técnica, pero también es la única forma de proteger el diseño. Estas métricas ahora actúan como un contrato de confianza: nos dicen exactamente qué vamos a medir, cómo lo vamos a medir (a través de **logs de actividad** y encuestas trimestrales) y quién es el responsable de cada dato.

No estábamos solo definiendo KPIs; estábamos blindando el futuro del producto contra las opiniones subjetivas que suelen aparecer después del lanzamiento. Salí de esa sesión con la seguridad de que el equipo de desarrollo de Dacodes y los stakeholders de Gentera hablábamos por fin el mismo idioma. Teníamos las metas, teníamos las señales y, lo más importante, teníamos el acuerdo de que el éxito de GAC se mediría por el tiempo que le devolviéramos a la gente, no solo por las funcionalidades entregadas.

#### Próximo paso:

Con los indicadores de éxito ya negociados y el compromiso de los stakeholders sobre la mesa, el siguiente desafío era desglosar estas ambiciones en una estructura técnica infalible. Sabía que el 80% de reducción de tiempo dependía enteramente de cómo configuráramos las métricas operativas y de eficiencia dentro del motor de la plataforma. Me quedaba una duda persistente: ¿serían capaces los logs del sistema de capturar con precisión quirúrgica ese ahorro de tiempo, o tendríamos que diseñar mecanismos de tracking mucho más profundos para demostrar que GAC realmente estaba cumpliendo su promesa?

### Parte 4: Definición Smart Métricas Operativas y de Eficiencia

#### El peso de la promesa: de la intención al algoritmo

En el momento en que Lalo y Carlos aceptaron que el éxito de GAC se mediría primordialmente por el tiempo devuelto a la operación, sentí que la temperatura de la sala cambiaba. Ya no estábamos hablando de "una plataforma más bonita" o de "digitalizar un Excel"; estábamos firmando un contrato de rendimiento. Como diseñador, mi mayor temor en esta etapa no era la estética, sino la irrelevancia. Si después de meses de desarrollo Carlos seguía invirtiendo sus domingos en limpiar bases de datos, habríamos fracasado, sin importar lo impecable que fuera el UI Kit. 

Mi razonamiento en esta transición fue puramente pragmático: necesitaba transformar los deseos estratégicos de la dirección y los dolores operativos de los administradores en una **matriz de métricas operativas blindadas**. No podíamos permitir que el ROI (Retorno de Inversión) fuera una percepción subjetiva al final del año. Tenía que ser un dato auditable, extraído directamente de las entrañas del sistema. Me propuse diseccionar cada hito del proceso para asegurar que cada KPI cumpliera con el rigor del criterio **SMART**. Si no podíamos medirlo con un **timestamp** o un log de actividad, no entraría en nuestro tablero de éxito. Estábamos construyendo el termómetro con el que nos iban a juzgar.

#### La disección del tiempo: el fin de la jornada de 32 horas

El primer gran pilar que decidí blindar fue la eficiencia en la generación de listas. Durante la fase de diagnóstico, identifiqué que la línea base de Carlos era alarmante: invertía entre **24 y 32 horas semanales** en un proceso manual que era, esencialmente, una carrera de obstáculos de copiar y pegar. Mi objetivo fue radical: una **reducción del 80%**. Esto significaba que el sistema debía permitirle realizar el mismo trabajo en un rango de **4.8 a 6.4 horas**. 

Para que esta métrica fuera incuestionable, definí una fórmula de cálculo que abarcara el flujo completo: desde el momento exacto en que se descarga la plantilla de capacitación hasta el envío de las comunicaciones finales por Outlook o Teams. 

*   **La Maniobra Técnica:** Decidí que la línea base se establecería mediante **observación directa** (cronometrando el caos actual), pero que el seguimiento post-lanzamiento se haría exclusivamente mediante **logs del sistema GAC**. 
*   **El Porqué:** No quería depender de que Carlos recordara cuánto tiempo le tomó; quería que el sistema registrara el inicio y el fin de la tarea automáticamente. 

Este KPI se convirtió en el corazón del proyecto. Si lográbamos devolverle casi 25 horas a la semana a un administrador, el proyecto no solo se pagaba solo, sino que validaba nuestra tesis de que la automatización era la única salida para la escala de Gentera. Sin embargo, el riesgo era alto: cualquier fricción en el motor de carga podría inflar esos minutos y ponernos por debajo de la meta del 80%.

#### Precisión quirúrgica contra el error humano

No bastaba con ser rápidos; teníamos que ser infalibles. En mis conversaciones con los líderes operativos, surgió un dato que me obligó a priorizar la **Tasa de Error en Convocatorias**. Actualmente, el **10-15% de los registros** presentan errores: colaboradores asignados a cursos que ya tomaron, sedes equivocadas o invitaciones enviadas a personas que ya no están en la subdirección. 

Establecí que el éxito de GAC significaba una **reducción del 90% en estos errores**, apuntando a una tasa residual inferior al **1.5%**. La fórmula que articulé fue directa: `(Número de Errores Reportados / Total de Convocatorias Enviadas) * 100`. 

> **Insight de Diseño:** La verdadera dificultad aquí no es la fórmula, sino la fuente de datos. Decidí que usaríamos un modelo híbrido: el registro de incidencias reportadas por los usuarios (el feedback directo) cruzado con **auditorías aleatorias por muestreo**. 

Este enfoque de "calidad total" era vital. Si el sistema era rápido pero enviaba a 1,000 personas a la sede equivocada, la desconfianza en la plataforma mataría el proyecto en la primera semana. Estábamos diseñando para la precisión, no solo para la velocidad.

#### El rendimiento del motor bajo presión técnica

Uno de los mayores desafíos técnicos que anticipé fue el volumen de datos. Estamos hablando de procesar una plantilla con más de **27,000 colaboradores**. En el mundo manual, este volumen es el que genera el cuello de botella. Para GAC, definí la métrica de **Tiempo de Procesamiento de Plantilla**. 

Al ser una funcionalidad totalmente nueva, no teníamos línea base, así que impuse una exigencia técnica basada en la psicología del usuario: el sistema debe procesar la carga completa en un máximo de **5 a 10 minutos**. 

*   **El Método:** Rastrearíamos el **timestamp** desde el 'upload' del archivo hasta que la plataforma presente la primera vista de candidatos procesados. 
*   **El Riesgo:** Si el procesamiento excedía los 10 minutos, el usuario (Carlos) percibiría que el sistema "se trabó", rompiendo la promesa de agilidad. 

Esta métrica no era solo un SLA técnico para los desarrolladores de Dacodes; era un requerimiento de experiencia de usuario. En un entorno corporativo, 10 minutos esperando una pantalla de carga se sienten como una eternidad. Mi labor aquí fue blindar la paciencia del usuario mediante límites de rendimiento claros.

#### El umbral de la confianza: la precisión de la automatización

Finalmente, aterrizamos en la métrica más ambiciosa: la **Precisión de la Automatización de Elegibles**. Partíamos de un escenario de **0% de automatización** (todo es criterio manual de Carlos). Mi meta, acordada con Lalo, fue alcanzar un **95% de precisión**. 

Esto significa que, de cada 100 colaboradores que el sistema identifica como "elegibles" para un curso de ascenso o nuevo ingreso, 95 deben ser correctos sin que Carlos tenga que mover un solo dedo. 

1.  **Medición:** Definí que esto se mediría comparando los resultados automáticos del motor contra las **correcciones manuales** que Carlos realizara en la interfaz. 
2.  **Lógica:** Si Carlos tenía que corregir más del 5% de las sugerencias del sistema, nuestras reglas de negocio (definidas en la Fase 1) estaban fallando. 

Esta métrica era el examen final para nuestro trabajo de arquitectura de información. Si el motor lógico no era capaz de entender las subdirecciones y los puestos con una precisión casi total, la automatización sería solo un espejismo. Establecer este 95% fue un acto de valentía técnica; nos obligaba a que la configuración de la base de datos fuera impecable.

#### El compromiso del Criterio SMART

Mirando la matriz completa de métricas operativas, entendí que no estábamos solo llenando un documento; estábamos definiendo el lenguaje de la rendición de cuentas. El criterio SMART no fue una formalidad metodológica, sino un filtro de realidad. 

*   **Específico:** No medimos "felicidad", medimos horas y porcentajes de error.
*   **Medible:** Todo tiene un log o una fórmula de cálculo detrás.
*   **Alcanzable:** El 80% es ambicioso, pero posible si eliminamos el trabajo manual repetitivo.
*   **Relevante:** Cada métrica impacta directamente en el ahorro de costos y en el Valor Humano de Gentera.
*   **Temporal:** Establecimos que estas metas deben cumplirse en los primeros **3 a 6 meses** post-implementación.

Salí de esa definición con la sensación de que habíamos construido una jaula de acero alrededor del valor del proyecto. Ya no había espacio para ambigüedades. El éxito de GAC estaba ahora ligado a números fríos que demostrarían, sin lugar a dudas, si habíamos logrado transformar la cultura operativa de capacitación en Gentera.

#### Próximo paso:

Con la maquinaria de eficiencia y precisión ya calibrada y los objetivos de rendimiento técnico firmados, me asaltó una preocupación que los números no podían resolver por sí solos: la resistencia al cambio. Podíamos tener el motor más rápido del mundo y reducir los errores al mínimo, pero si los colaboradores y líderes no adoptaban la plataforma como su fuente única de verdad, el sistema sería un desierto digital de alta tecnología. El siguiente desafío era crítico: ¿cómo íbamos a medir la **adopción y el engagement** de miles de usuarios que, hasta hoy, solo conocen el caos de los correos electrónicos y las listas de asistencia en papel?

### Parte 5: Definición Smart Adopción y Engagement con la Plataforma

#### El riesgo del desierto digital: De la eficiencia al hábito

Una vez que hube blindado los números de eficiencia operativa —esos que le dicen a la dirección cuánto dinero y tiempo estamos ahorrando—, me invadió una inquietud que solo se tiene cuando has visto morir productos perfectos en el estante: el riesgo del desierto digital. Podíamos tener el motor de segmentación más veloz de la industria y reducir el error humano al mínimo técnico, pero si Carlos seguía prefiriendo su Excel "de toda la vida" o si los colaboradores ignoraban la plataforma por considerarla un trámite más, el proyecto GAC sería un fracaso costoso. 

Como diseñador, mi razonamiento en este punto del taller fue crítico. La automatización no es solo una cuestión de código; es una transferencia de confianza. Estábamos pidiendo a personas que llevan años operando bajo el caos de correos y listas manuales que delegaran su flujo de trabajo a un sistema nuevo. Por eso, decidí que la siguiente dimensión de nuestro tablero de control no podía ser técnica, sino conductual. Necesitábamos medir la **Adopción y el Engagement** con la misma rigurosidad con la que medimos el *uptime* del servidor. No buscábamos tráfico; buscábamos la migración definitiva del hábito analógico al ecosistema digital de Gentera.

#### Blindando la operación: El 85% de adopción administrativa

El primer frente de batalla era la administración central. Si el equipo de Carlos no adoptaba la herramienta, la información simplemente no llegaría al resto de la organización. Para este grupo, establecí una meta de **Tasa de Adopción del 85% en los primeros 3 meses post-implementación**. 

Esta cifra no fue un número al azar. En una estructura donde la capacitación es el eje del crecimiento, un 85% representa el "punto de no retorno". Sabía que el 15% restante podría deberse a periodos de transición o incidencias menores, pero cualquier número por debajo de ese umbral indicaría que el diseño no estaba resolviendo la fricción del día a día. 

Para que esta métrica fuera honesta, definí el método de cálculo con precisión quirúrgica:
*   **Fórmula:** (Número de Administradores Activos / Total de Administradores) * 100.
*   **Definición de 'Activo':** No es alguien que entra a mirar; es un usuario que ejecuta al menos una acción clave a la semana, como la carga de la plantilla de capacitación, la generación de grupos segmentados o el envío masivo de convocatorias.
*   **Fuente de Verdad:** Decidí que no usaríamos encuestas para esto, sino los **logs de actividad del sistema**. Los datos no mienten: o la tarea se hizo en GAC o se hizo fuera. 

Mi objetivo aquí era asegurar que la plataforma se convirtiera en el "corazón" de la operatividad. Si lográbamos que Carlos y su equipo vivieran dentro de la herramienta durante ese primer trimestre, la trazabilidad de los 27,000 colaboradores estaría garantizada por diseño, no por decreto.

#### La pirámide de uso: Segmentación estratégica por rol

Uno de los errores más comunes que he visto en proyectos de gran escala es tratar a todos los usuarios con la misma vara de medición. En el ecosistema de Gentera, la "adopción" significa cosas muy distintas para un Líder de Equipo que para un Formador. Por ello, articulé una segmentación de metas de **Usuarios Activos por Rol** con objetivos diferenciados para los primeros 6 meses:

1.  **Formadores (Meta: 80%):** Son los usuarios de mayor intensidad. Para ellos, GAC es su cuaderno de bitácora. Si un formador no está activo, perdemos el registro del hito presencial. Su alta meta refleja la dependencia directa que el diseño crea entre su labor y el sistema.
2.  **Colaboradores (Meta: 70%):** Es una cifra ambiciosa para una fuerza laboral de decenas de miles. Aquí la métrica busca validar que la interfaz es lo suficientemente clara para que Ana, nuestra colaboradora tipo, entre a consultar su progreso sin necesidad de soporte técnico.
3.  **Líderes de Equipo (Meta: 60%):** Su uso es más estratégico y puntual. Entran para validar el estatus de sus equipos y tomar decisiones de operación. Un 60% de uso activo mensual en este rol indicaría que el Dashboard de GAC ha sustituido con éxito a las llamadas telefónicas constantes preguntando "¿cómo van mis muchachos?".

Esta segmentación me permitió diagnosticar no solo *si* se usaba la plataforma, sino *quién* encontraba más valor en ella. Si detectábamos que los líderes estaban en un 20%, sabríamos que el problema no era la plataforma en sí, sino que la visualización estratégica de datos no estaba dándoles el "insight" que necesitaban para soltar sus viejos reportes manuales.

#### El pulso de la autogestión: Frecuencia de consulta y la "Ruta de Capacitación"

Para el colaborador, el éxito de GAC se manifiesta en la claridad de su propio camino. Tradicionalmente, la capacitación en Gentera se sentía como una serie de eventos aislados que "te tocaban". Con el nuevo diseño de la **Ruta de Capacitación**, el objetivo era empoderar a Ana para que fuera dueña de su avance.

Establecí la métrica de **Frecuencia de Consulta de Progreso** con una meta de **2 a 3 accesos por mes por colaborador activo**. 

> **Insight de Diseño:** Si un colaborador entra una sola vez, probablemente fue por una notificación obligatoria. Si entra tres veces, está monitoreando su crecimiento. Hay una diferencia abismal entre "cumplir" y "consultar".

El método de cálculo que propuse fue la suma total de accesos a la vista de progreso dividida entre el número de colaboradores activos en el periodo. Para recolectar esto, configuré un protocolo de **eventos de analítica** específicos en la interfaz. No me interesaba cuántas páginas veía el usuario, sino cuántas veces interactuaba con su "Kardex" o su línea de tiempo de hitos. Esta métrica se alinea directamente con el "Valor Humano" de Gentera: transformar la capacitación en un proceso de autogestión visible y gratificante.

#### Definiendo la verdad: Por qué el "login" no es una métrica de éxito

Durante la sesión con los stakeholders, hubo una discusión necesaria sobre qué consideraríamos un "Usuario Activo". Algunos sugerían que el simple inicio de sesión era suficiente. Me opuse firmemente. Como diseñador senior, sé que el *login* es una métrica de vanidad que suele ocultar problemas graves de usabilidad o falta de valor real.

Definí la **Anatomía del Usuario Activo** en GAC bajo el criterio de **Acciones de Valor (Key Actions)**. Para que un usuario cuente en nuestras estadísticas de adopción, debe haber realizado al menos una de las siguientes acciones:
*   Carga exitosa de una plantilla.
*   Consulta de la lista de elegibles.
*   Envío de una convocatoria.
*   Descarga de un reporte de progreso.

Esta distinción es vital para blindar el ROI del proyecto. Si tenemos 10,000 logins pero solo 50 acciones de valor, el diseño ha fallado en guiar al usuario hacia el resultado esperado. Implementar este nivel de detalle en la recolección de datos —mediante logs del sistema y rastreo de eventos— nos permite tener una conversación honesta con el negocio sobre el impacto real de la herramienta. No estamos midiendo tráfico; estamos midiendo la digitalización efectiva de un proceso humano.

#### Reflexión sobre la métrica North Star: El fin de la era analógica

Al cerrar esta parte del taller, les planteé a Lalo y Carlos una reflexión: nuestras métricas de adopción son, en realidad, el certificado de defunción de las prácticas analógicas en Gentera. Mi éxito como diseñador en este proyecto no se mide por lo "limpio" que se vea el dashboard, sino por el momento en que Carlos decida borrar su archivo de Excel "Concentrado histórico.xls" porque ya no lo necesita.

Estas métricas de adopción y engagement actúan como nuestra **North Star**. Nos indican si estamos logrando la transformación cultural que el brief exigía. Si los números de uso activo suben, significa que la plataforma ha logrado reducir la ansiedad de Ana por no saber qué curso le sigue y ha eliminado las noches de insomnio de Carlos procesando listas manuales. Hemos pasado de diseñar una herramienta a diseñar un nuevo estándar de comportamiento organizacional.

#### Próximo paso:

Con los indicadores de adopción y uso ya grabados en piedra, logramos definir cómo mediríamos si la gente *usa* la plataforma, pero nos quedaba una pregunta mucho más subjetiva y peligrosa: ¿cómo se *sienten* al usarla? Podíamos obligar a la adopción mediante procesos institucionales, pero la verdadera victoria —y el alma del Valor Humano de Gentera— residía en la calidad de la experiencia. El siguiente desafío era traducir conceptos abstractos como "alivio", "claridad" y "confianza" en una escala numérica que pudiéramos presentar a la dirección: era el momento de definir las métricas de **Satisfacción y Usabilidad (UX)**.

### Parte 6: El Factor Humano Satisfacción y Usabilidad Ux

#### La trampa de la adopción obligatoria

Habíamos logrado un hito importante al definir las métricas de adopción y uso, pero mientras cerrábamos esa parte de la sesión con Lalo y Carlos, sentí que algo faltaba. Como diseñador, sé que los números de inicio de sesión pueden ser profundamente engañosos en un entorno corporativo. Si la organización dicta que GAC es la herramienta oficial, la gente entrará porque tiene que hacerlo, no porque la herramienta les aporte valor real. La adopción es un mandato, pero la satisfacción es una elección silenciosa que determina si el sistema será amado o simplemente tolerado hasta que alguien encuentre una excusa para volver a sus viejos hábitos.

Mi razonamiento en ese momento fue que no podíamos permitir que GAC se convirtiera en "otro software burocrático". Si queríamos honrar el Valor Humano de Gentera, debíamos ser capaces de medir el alivio, la claridad y la confianza. Pasamos de lo cuantitativo frío —cuántos usuarios entran— a lo cualitativo cuantificado: cómo se sienten al navegar. Necesitaba traducir el agotamiento de Carlos y la desorientación de Ana en indicadores de rendimiento humano que fueran tan rigurosos como un balance financiero. Fue así como articulé el bloque de métricas de **Satisfacción y Usabilidad (UX)**, entendiendo que la satisfacción es el combustible que evita el abandono a largo plazo.

#### El Alivio de Carlos: Midiendo la Reducción de Estrés (CSAT)

El primer punto de fricción que abordé fue la experiencia del Administrador de Capacitación. Durante las entrevistas iniciales, Carlos me describió su proceso actual con palabras que se me quedaron grabadas: "agotado", "maratón", "dolor de cabeza". Esas no son solo quejas; son la línea base de una experiencia de usuario fallida. Por eso, establecí la **Satisfacción del Administrador** como una métrica crítica, con un objetivo claro de **4.0 sobre 5.0** en los primeros seis meses.

Para medir esto, rechacé la idea de una simple pregunta de "sí o no". Implementé un modelo de **Customer Satisfaction Score (CSAT)** basado en una **Escala Likert** de cinco puntos, pero diseñada específicamente para capturar la percepción de eficiencia y reducción de estrés. Mi estrategia metodológica consistió en:

*   **Encuestas Trimestrales:** No quería saturar a Carlos, pero necesitaba una cadencia que nos permitiera pivotar si la satisfacción bajaba después de una actualización.
*   **Entrevistas de Seguimiento Cualitativo:** Los números te dicen *qué* pasa, pero las entrevistas te dicen *por qué*. Si Carlos nos daba un 3, mi tarea era sentarme con él y descubrir si el problema era un flujo de carga de archivos lento o una falta de retroalimentación visual en el dashboard.
*   **Foco en la Carga Cognitiva:** La métrica no solo evalúa si la plataforma es "bonita", sino si Carlos siente que su trabajo es ahora más estratégico y menos operativo.

Establecer un objetivo de 4.0 es ambicioso cuando partes de una línea base que calificamos como "Baja". Sin embargo, mi apuesta era que la automatización de esas 24-32 horas manuales semanales se traduciría directamente en una mejora del estado de ánimo y la disposición de Carlos hacia la herramienta. El éxito de GAC depende de que su operador principal deje de ver la plataforma como una carga y empiece a verla como un aliado que le devuelve tiempo de vida.

#### La Claridad de Ana: Trazabilidad como Valor Humano

Luego giramos la mirada hacia el usuario final. En el diagnóstico previo, vimos que Ana se sentía "perdida". No sabía qué seguía en su formación ni si sus esfuerzos estaban siendo registrados correctamente. Esta falta de trazabilidad es un veneno para el compromiso del colaborador. Para resolverlo, definí la métrica de **Satisfacción del Colaborador con la Trazabilidad**, apuntando también a un **4.0 sobre 5.0**.

Esta métrica es el termómetro de nuestra arquitectura de información. Si Ana puede entrar a su perfil y entender en tres segundos en qué punto de su "Pasaporte Digital" se encuentra, habremos ganado. La recolección de estos datos la planteé de forma distinta:

*   **Muestreo Semestral:** Dado que tenemos miles de colaboradores, una encuesta masiva cada seis meses nos daría el volumen de datos necesario para tener significancia estadística sin generar fatiga de encuestas.
*   **Pruebas de Usabilidad con Foco en Satisfacción:** Más allá de las encuestas, decidí que debíamos realizar pruebas moderadas donde, al finalizar una tarea de consulta de progreso, le pidiéramos al colaborador que calificara la claridad y el atractivo de la visualización.
*   **Atributos de Utilidad:** No solo medimos si la interfaz es clara, sino si la información presentada es útil para su crecimiento profesional en Gentera.

Al elevar la satisfacción de Ana, no solo estamos cumpliendo con un KPI de diseño; estamos reforzando el Valor Humano de la empresa. Un colaborador que entiende su ruta de crecimiento es un colaborador más motivado. Mi trabajo aquí fue asegurar que el diseño visual no fuera solo estético, sino un vehículo de transparencia organizacional.

#### System Usability Scale (SUS): El Estándar Global contra la Subjetividad

Uno de los mayores retos en las reuniones con stakeholders es evitar que la discusión de diseño caiga en el "me gusta" o "no me gusta" subjetivo. Para blindar el proyecto contra esto, introduje el **System Usability Scale (SUS)**. Es una medida estandarizada y global que nos permite hablar un lenguaje técnico común sobre la salud de la interfaz.

Expliqué a Lalo y al equipo de Dacodes que el SUS consiste en un cuestionario de 10 ítems que los usuarios responden tras interactuar con la plataforma. Estos ítems alternan entre afirmaciones positivas y negativas para evitar el sesgo de respuesta, arrojando una puntuación final de 0 a 100. Mi decisión estratégica fue fijar la meta en **75 o superior**.

¿Por qué 75? En la industria, una puntuación de 68 se considera el promedio. Como Senior Product Designer, no puedo aspirar al promedio en un proyecto que impacta a 27,000 personas. Un 75 nos sitúa en el rango de "Bueno a Excelente", indicando que la plataforma tiene una curva de aprendizaje mínima y que la consistencia del sistema es sólida. 

> El SUS es nuestra prueba de fuego técnica. Si obtenemos un 75, significa que hemos construido un sistema que no solo funciona, sino que es intuitivo. Es la métrica que elimina la ambigüedad y nos permite decir, con datos en la mano, si la interfaz está cumpliendo su propósito ergonómico y cognitivo.

#### La invisibilidad del éxito: Reflexión sobre la Salud Mental Operativa

Al cerrar esta parte de la definición de métricas, me detuve a reflexionar sobre lo que realmente estábamos intentando lograr. A menudo, en el diseño de producto, nos obsesionamos con los píxeles y las microinteracciones, pero en un proyecto de transformación interna como GAC, el éxito se mide en la eliminación de la ansiedad operativa.

Existe una correlación directa entre la reducción de las 24-32 horas manuales de Carlos y su salud mental. Si logramos que el sistema sea tan fluido que se vuelva "invisible", habremos triunfado. El diseño invisible es aquel que no requiere que el usuario piense en la herramienta, sino solo en su tarea. Cuando Carlos deje de preocuparse por si el Excel se va a corromper y simplemente confíe en que GAC ha segmentado a los 27,000 colaboradores correctamente, mi trabajo como diseñador habrá alcanzado su punto máximo.

Estas métricas de satisfacción y usabilidad son, en última instancia, un compromiso ético. Estamos diseñando el entorno donde miles de personas pasarán parte de su jornada laboral. Asegurarnos de que ese entorno sea claro, justo y eficiente no es un lujo estético; es una necesidad de negocio que impacta directamente en la retención de talento y en la cultura de Gentera.


Teníamos el compromiso del usuario y la satisfacción del administrador bajo control, pero entonces surgió una preocupación técnica inevitable en la mesa de trabajo. Carlos me miró y preguntó: "¿Qué pasa si el lunes por la mañana, cuando 20,000 personas intenten ver su progreso al mismo tiempo, el sistema se cae?". Esa pregunta cambió el tono de la reunión. Podíamos tener la interfaz más satisfactoria del mundo, pero si la infraestructura no soportaba la carga o si los datos no eran precisos al 100%, la confianza que tanto nos costó construir se desmoronaría en segundos. Era el momento de enfrentar el desafío de la **CALIDAD TÉCNICA Y CUMPLIMIENTO: EL TECHO DE LA PLATAFORMA**.

### Parte 7: Calidad Técnica y Cumplimiento El Techo de la Plataforma

#### El momento en que la estética se encontró con la realidad

La pregunta de Carlos sobre qué pasaría un lunes por la mañana con 20,000 usuarios concurrentes no fue solo una duda técnica; fue el golpe de realidad que necesitábamos para aterrizar el proyecto. En ese instante, el aire en la sala de juntas cambió. Habíamos pasado horas discutiendo la satisfacción de Ana y la reducción de carga cognitiva de los administradores, pero de nada servía tener la interfaz más limpia y elegante de Gentera si, al momento de la verdad, el servidor devolvía un error 500. Como responsable de la estrategia de producto, entendí que mi trabajo no terminaba en los flujos de usuario; mi responsabilidad se extendía hasta asegurar que el "techo" de la plataforma fuera lo suficientemente alto para no asfixiar la operación.

Esa tarde decidí que debíamos blindar la integridad operativa de GAC. No podíamos permitir que la automatización se convirtiera en un nuevo foco de estrés. Si el sistema fallaba bajo presión, la confianza que habíamos construido con los stakeholders se evaporaría en segundos. Mi razonamiento fue pragmático: la calidad técnica es la base invisible de la usabilidad. Si el sistema es lento o inestable, el usuario percibe que la herramienta no es de fiar, y una herramienta en la que no se confía es una herramienta que se abandona. Así que, nos pusimos a trabajar en definir las métricas de **Calidad Técnica y Cumplimiento**.

#### Uptime: El pulso ininterrumpido del sistema

Lo primero que puse sobre la mesa fue la disponibilidad. No podíamos aspirar a menos de un **Uptime del 99.5% mensual**. Parece un número estándar, pero en el contexto de Gentera, donde la capacitación es el motor del crecimiento, ese 0.5% de margen de error representa apenas unas pocas horas al mes de ventana para mantenimiento o imprevistos. Articulé esta métrica no como un deseo, sino como un compromiso innegociable entre el equipo de desarrollo de Dacodes y el área de TI de Gentera.

Para medirlo, establecimos una fórmula estricta: `(Tiempo Total Operativo / Tiempo Total Observado) * 100`. No quería reportes manuales ni estimaciones; exigí que utilizáramos herramientas de monitoreo de servidor para obtener datos crudos y objetivos. 

*   **El objetivo:** Garantizar que GAC sea una roca.
*   **El riesgo:** Si el sistema cae durante la carga masiva de una plantilla, Carlos pierde un día entero de trabajo y el cronograma nacional de capacitación se desfasa.
*   **La frecuencia:** Monitoreo mensual con reportes de incidentes detallados.

Esta métrica de disponibilidad se convirtió en nuestro Service Level Agreement (SLA) primario. Si bajábamos de ese 99.5%, el proyecto fallaba, independientemente de qué tan bonitos fueran los dashboards.

#### La tiranía de los segundos: Tiempos de respuesta y percepción de agilidad

Después pasamos a la latencia. Hay una regla no escrita en el diseño de producto: si una acción tarda más de lo que el cerebro espera, la conexión emocional con la tarea se rompe. Definí dos umbrales críticos de rendimiento que debían cumplirse para que la experiencia se sintiera realmente "automatizada":

1.  **< 3 segundos para cargas de página estándar:** Cualquier vista, desde el Kardex del colaborador hasta la configuración de una sede, debe estar lista en menos de tres segundos. Es el límite de la paciencia humana en entornos laborales de alta productividad.
2.  **< 10 segundos para procesos complejos:** Aquí es donde el reto se ponía serio. GAC maneja una base de más de 27,000 colaboradores. Cuando Carlos carga una plantilla o genera un reporte de avance nacional, el sistema tiene que procesar miles de relaciones de datos. Establecí que, incluso en estos casos, el usuario no debería esperar más de diez segundos. 

> Si un administrador tiene que esperar 30 segundos a que un reporte cargue, su primera reacción será volver a abrir su antiguo Excel "porque ahí al menos sé que no se trabó". El tiempo de respuesta es, en realidad, una métrica de retención de usuarios.

Para asegurar esto, determinamos que el Líder Técnico de Dacodes supervisaría los logs del sistema semanalmente. No íbamos a esperar a que alguien se quejara de que "el sistema está lento"; íbamos a identificar proactivamente qué consultas a la base de datos estaban generando cuellos de botella para optimizarlas antes de que afectaran la operación.

#### Jira como fuente de verdad forense: El protocolo de incidencias

Un sistema complejo siempre tendrá bugs, pero lo que define a un producto senior es cómo gestiona esos errores. Establecimos un filtro de calidad agresivo para el primer trimestre post-lanzamiento: **0 incidencias críticas y menos de 5 incidencias altas al mes**. 

Para mí, una incidencia crítica es aquella que impide que un colaborador vea su progreso o que un administrador envíe una convocatoria. Es un bloqueador total. Una incidencia alta es una falla funcional importante que tiene un "workaround" incómodo pero posible. Decidí que **Jira** sería nuestra fuente de verdad forense. Cada error reportado pasaría por un triaje estricto para ser categorizado.

Esta métrica se alinea directamente con nuestro objetivo de minimizar el error humano. Si el sistema introduce más errores de los que resuelve, no estamos innovando, solo estamos cambiando de problemas. Al fijar el objetivo en cero errores críticos, enviamos un mensaje claro al equipo de ingeniería: la estabilidad no es una característica opcional, es el cimiento de la usabilidad invisible. El éxito es que el sistema funcione tan bien que nadie hable de él.

#### Observabilidad y monitoreo proactivo: Dejar de reaccionar para empezar a predecir

Finalmente, la conversación derivó en cómo íbamos a sostener esto a largo plazo. No podíamos depender de que Carlos nos enviara un correo diciendo que no podía entrar a la plataforma. Necesitábamos **observabilidad en tiempo real**. 

Propuse la implementación de herramientas de monitoreo de infraestructura como **Nagios o Prometheus**. La intención era configurar alertas automáticas. Si el consumo de memoria del servidor llegaba al 80% o si la latencia de las peticiones empezaba a subir de forma inusual, el equipo técnico debía recibir una notificación antes de que el usuario final notara la degradación del servicio. 

Este enfoque preventivo es lo que separa un desarrollo a medida de una solución de grado industrial para una empresa como Gentera. Blindamos la plataforma no solo con código, sino con procesos de vigilancia. Al final de la sesión, el "techo" de GAC estaba definido:

*   **Uptime:** >99.5% (La plataforma siempre está ahí).
*   **Velocidad:** <3s / <10s (La plataforma es ágil).
*   **Calidad:** 0 bugs críticos (La plataforma es confiable).

Con estos números en la mesa, la preocupación de Carlos sobre los 20,000 usuarios concurrentes encontró una respuesta sólida. Ya no estábamos hablando de supuestos; estábamos hablando de parámetros técnicos medibles y garantizados. La calidad técnica dejó de ser un tema de "sistemas" para convertirse en un pilar del diseño de la experiencia.


Una vez que blindamos el sistema con métricas operativas, de satisfacción y técnicas, nos enfrentamos a una realidad inevitable: no podíamos medirlo todo al mismo tiempo sin perder el enfoque. Teníamos una lista extensa de KPIs, pero necesitábamos decidir cuáles serían nuestras "North Star Metrics" y, sobre todo, cómo íbamos a obtener los datos de una operación que hoy vive en correos y archivos perdidos. Sabía que el siguiente desafío sería el más político y logístico de todos: convencer a la organización de detenerse a medir el caos actual para poder demostrar el éxito del futuro.

### Parte 8: Priorización y Plan de Recopilación de Datos

#### El peso de la evidencia sobre la promesa técnica

Una vez que blindamos el sistema con parámetros de **Uptime** y velocidad de respuesta, me di cuenta de que estábamos en un terreno peligroso: el de la "eficiencia silenciosa". Podíamos construir la plataforma más rápida del mundo, pero si Carlos seguía invirtiendo tres días de su semana en corregir nombres de una lista, la robustez técnica sería irrelevante. Como diseñador, mi responsabilidad no terminaba en asegurar que el botón funcionara; debía asegurar que el botón cambiara la economía del tiempo en Gentera. Entendí que la transición de la calidad técnica a la medición estratégica era el movimiento final para cerrar la Fase 1. No podíamos permitir que el éxito del proyecto GAC fuera una cuestión de percepción o de "se siente más rápido". Necesitábamos pruebas forenses de impacto.

Mi razonamiento fue quirúrgico: para evitar la parálisis por análisis que suele traer una lista interminable de KPIs, decidí filtrar nuestras aspiraciones a través de un enfoque de **North Star Metrics**. Sabía que si lográbamos mover la aguja en tres o cuatro indicadores clave, el resto de los beneficios caería por su propio peso. Pasamos de discutir "qué puede hacer el sistema" a definir "qué debe lograr el sistema para que Lalo y Carlos respiren tranquilos". Esta no fue una sesión de buenos deseos; fue la construcción de un contrato de rendimiento que nos obligaría a rendir cuentas meses después del lanzamiento.

#### La selección de las North Star Metrics

Para no perder el enfoque, prioricé un conjunto de siete métricas críticas que actuarían como nuestra brújula. La métrica reina, la que justifica cada peso invertido en este desarrollo, es la **Reducción del Tiempo de Generación de Listas Semanales**. Mi objetivo era agresivo pero necesario: pasar de las **24-32 horas manuales** que Carlos invierte actualmente a un rango de **4.8 a 6.4 horas** (una reducción neta del 80%). No elegí este número al azar; es el umbral donde el trabajo de un administrador deja de ser una "maratón de limpieza de datos" para convertirse en una tarea de supervisión estratégica.

Junto a esta, elevé la **Precisión de la Automatización de Elegibles** a un rango de prioridad máxima. Si el algoritmo de GAC identifica a los colaboradores pero requiere que un humano valide cada registro, no hemos automatizado nada, solo hemos cambiado la herramienta. Fijé el objetivo en un **95% de precisión** en los primeros seis meses. Esto se complementa con la **Tasa de Error en Convocatorias**, donde buscamos bajar del **10-15% actual** (estimado por las quejas y correcciones que Carlos maneja hoy) a menos del **1%**. Estas métricas son las que realmente validan la inteligencia del producto frente al caos manual. Si logramos estos números, el ROI del proyecto deja de ser una diapositiva de ventas para convertirse en una realidad contable.

#### El despliegue del protocolo de línea base

Para que estas metas tuvieran validez, necesitaba una base sólida sobre la cual contrastarlas. No podía confiar únicamente en las estimaciones subjetivas de los stakeholders. Por ello, diseñé y ejecuté un **protocolo de investigación para capturar la línea base "As-Is"**. Mi maniobra más importante aquí fue realizar sesiones de **observación cronometrada** durante los "jueves de maratón" de Carlos. Me senté con él, cronómetro en mano, para desglosar su flujo de trabajo real:

*   **Limpieza de datos:** El tiempo invertido en eliminar duplicados y corregir formatos en Excel.
*   **Cruce de variables:** Las horas perdidas saltando entre el directorio de mails y la lista de capacitación.
*   **Segmentación:** El esfuerzo cognitivo de agrupar por puesto y subdirección manualmente.
*   **Envío:** El proceso repetitivo de generar invitaciones en Outlook y Teams.

Este análisis forense me permitió documentar que el proceso actual no solo es lento, sino propenso a errores humanos sistémicos. Al cuantificar que un 15% de los registros suelen requerir corrección manual posterior, establecí el "piso" del proyecto. Sin esta medición inicial, cualquier mejora futura sería invisible. La línea base es nuestra salvaguarda: es la evidencia del dolor que estamos resolviendo.

#### Arquitectura de medición post-lanzamiento

Con las metas y el punto de partida definidos, pasé a diseñar la infraestructura que capturará los datos una vez que GAC esté en producción. No quería depender de que alguien se acordara de medir; la medición debía ser una función nativa de la plataforma. Articulé con el equipo técnico la implementación de **logs de actividad personalizados** que registrarán automáticamente el "Tiempo de Procesamiento de Plantilla". El sistema medirá cuántos minutos pasan desde que Carlos carga el archivo hasta que el primer grupo de candidatos está listo para revisión, con un objetivo estricto de **menos de 10 minutos** para cargas complejas.

Para la **Tasa de Adopción de Administradores**, donde aspiramos a un **85% en los primeros tres meses**, configuré el uso de analíticas web que monitorearán usuarios únicos activos y acciones clave. No nos basta con que inicien sesión; necesitamos ver que están generando grupos y enviando convocatorias. Además, para la parte cualitativa, integré un ciclo de encuestas de satisfacción (CSAT) y el uso del **System Usability Scale (SUS)**. Mi meta es que la plataforma alcance una puntuación **SUS superior a 75** en su primer año, lo que nos situaría en un rango de "buena a excelente" usabilidad, garantizando que la herramienta no sea una carga más, sino un aliado.

#### El ritmo del reporte y el contrato de éxito

Finalmente, establecí una cadencia de reporte que mantiene la presión sobre los resultados sin asfixiar al equipo. Definí un calendario que va desde lo operativo hasta lo estratégico:

*   **Semanal:** Revisión de incidencias críticas (objetivo: 0) y tiempos de procesamiento.
*   **Mensual:** Reporte de tasa de adopción y precisión de la automatización.
*   **Trimestral:** Evaluación de la satisfacción de Carlos y alivio de carga de trabajo.
*   **Anual:** Auditoría profunda del SUS y revisión integral del ROI.

Cerré esta actividad en una sesión con Lalo y Carlos donde presenté este plan de medición. No fue una presentación de diseño, fue una sesión de alineación de expectativas de negocio. Obtener su consenso absoluto sobre estos números transformó el proyecto: ya no estábamos diseñando "una plataforma de capacitación", estábamos construyendo una herramienta para recuperar 25 horas semanales de productividad. Este acuerdo es el contrato que blinda la Fase 1. Cada píxel que dibuje a partir de ahora, cada flujo que defina, tiene un propósito medible. Hemos dejado atrás la incertidumbre del descubrimiento para entrar en la precisión del diseño detallado.

**Reflexión final:**
Establecer estas métricas me obligó a confrontar la "humildad del dato": entender que nuestro éxito no se mide en lo bonito que se vea el dashboard, sino en cuántas horas de vida le devolvemos a Carlos y qué tan precisa es la automatización para Gentera. Aprendí que un plan de medición honesto, aunque revele ineficiencias dolorosas en el proceso actual, es la única forma de blindar el valor de mi trabajo ante la dirección. Con este sistema de medición forense, cerramos la Fase 1 con la certeza de que no estamos adivinando, sino construyendo sobre una base de impacto real y cuantificable.