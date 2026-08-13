# Fase 3: Prototipado y Validación

## Actividad 2: actividad_02_planificacion_de_pruebas_de_usabilidad

### Parte 1: ESTRATEGIA DE VALIDACIÓN: DEFINICIÓN DE OBJETIVOS Y KPIS DE USABILIDAD

#### La transición de la estética a la evidencia

Tener el prototipo de alta fidelidad terminado en Figma era un alivio visual, pero una incertidumbre operativa. Después de semanas puliendo cada componente del UI Kit y asegurando que la navegación entre pantallas fuera fluida, me encontré ante el abismo que separa una buena intención de diseño de una herramienta funcional. Habíamos invertido un esfuerzo considerable en la Fase 1 para entender que los atletas de AsDeporte se sentían frustrados por la fricción en la app móvil, pero el diseño visual por sí solo no garantiza que hayamos resuelto el problema. Como responsable de la experiencia, sabía que no podía entregar este trabajo a ingeniería basándome en una corazonada o en el beneplácito de los stakeholders. Era el momento de someter mi trabajo a un estrés test empírico.

La planificación de estas pruebas de usabilidad no fue un trámite administrativo; fue una maniobra de blindaje para el producto. Mi razonamiento fue claro: si íbamos a fallar, quería que ocurriera ahora, en un entorno controlado de prototipado, y no cuando el código ya estuviera desplegado en producción. Necesitaba transformar las hipótesis de diseño que articulamos en la Fase 2 en métricas de rendimiento tangibles. Esta transición marcó el paso de la intuición creativa a la validación científica. No buscaba que los usuarios me dijeran si la app era "bonita"; necesitaba saber si era eficiente, si era clara y si, finalmente, resolvía los bloqueos que Alex, Laura y Carlos nos habían narrado durante el Discovery.

#### Traduciendo el dolor en métricas: El mapeo estratégico

Para que el experimento tuviera validez, el primer paso fue realizar un mapeo forense de los hallazgos de la investigación inicial. Volví a los *Problem Statements* priorizados y a los flujos críticos que habíamos definido como el núcleo del MVP B2C. Mi objetivo era asegurar que cada punto de fricción detectado en la Fase 1 tuviera un KPI de éxito asignado en este plan de pruebas. No quería una lista genérica de objetivos; buscaba una arquitectura de validación donde cada decisión de diseño fuera cuestionada.

Articulé este proceso analizando cómo las funcionalidades prototipadas debían responder a los dolores específicos. Por ejemplo, si el dolor era "me cuesta encontrar carreras de mi disciplina", el objetivo de la prueba debía centrarse en la eficiencia de los filtros. Si el problema era la desconfianza en los pagos, el KPI debía medir la percepción de seguridad. Decidí que cada objetivo debía ser concreto, observable y, sobre todo, medible. No me servía un "el usuario entiende el flujo"; necesitaba un "el 85% de los usuarios completa el flujo sin errores críticos". Esta disciplina en la definición de objetivos es lo que separa un test de usabilidad senior de una simple observación anecdótica.

#### El motor de búsqueda: Validando el descubrimiento de eventos

El descubrimiento de eventos es, sin duda, el motor de conversión de AsDeporte. Si un atleta no encuentra su próxima carrera de forma rápida, lo perdemos. Por ello, establecí como prioridad absoluta validar la eficiencia y claridad en la búsqueda. Definí que el **80% de los usuarios** debe ser capaz de encontrar un evento específico —por ejemplo, un maratón en la Ciudad de México para el mes siguiente— en un tiempo determinado y con una tasa de éxito alta. 

Mi enfoque aquí no fue solo ver si hacían clic en el botón correcto, sino evaluar la comprensión de los nuevos filtros granulares y cualitativos que diseñamos. ¿Entienden la diferencia entre tipo de evento y disciplina en este nuevo contexto? ¿Les ayudan los filtros a refinar la búsqueda o estamos añadiendo una carga cognitiva innecesaria? Para responder esto, configuré métricas que rastrearan el "tiempo en tarea" y el número de errores. Si el usuario tardaba demasiado o se perdía en la lista de resultados, sabría que la jerarquía de información en las tarjetas de eventos aún necesitaba ajustes. La meta era que pudieran identificar al menos tres datos clave de un evento directamente desde la lista, sin necesidad de entrar al detalle, validando así que la nueva vista de resultados era realmente informativa y no solo estética.

#### Blindando la conversión: El flujo de inscripción y la psicología del pago

Si la búsqueda es el motor, el flujo de inscripción es el corazón del producto. En este punto, la tolerancia al error debía ser mínima. Basándome en los flujos de tres pasos que diseñamos para el MVP, establecí un KPI ambicioso: el **85% de los usuarios** debe completar el proceso de inscripción hasta el paso final de pago sin cometer errores críticos. Un error crítico, en mi criterio, es cualquier acción que obligue al usuario a abandonar el proceso o que requiera asistencia externa.

Sin embargo, la usabilidad en un flujo transaccional no es solo cuestión de clics; es cuestión de confianza. Por eso, integré una métrica cualitativa específica mediante una **Escala Likert**. Quería medir, del 1 al 5, qué tanta seguridad transmitía el nuevo diseño del proceso de pago. ¿Es clara la presentación de los costos? ¿Se entienden los métodos de pago disponibles? Validar esta percepción de seguridad era vital para asegurar que el rediseño no solo fuera funcional, sino que tuviera la solidez institucional que una marca como AsDeporte requiere. Si el usuario duda en el último paso porque no entiende un cargo o no ve un sello de seguridad, el diseño ha fallado, independientemente de lo "limpio" que se vea.

#### El Hub de Beneficios Plus: Asegurando el valor del negocio

Uno de los grandes retos estratégicos de este proyecto era dar visibilidad a la membresía premium. En la investigación previa, descubrimos que muchos usuarios de Asdeporte Plus ni siquiera sabían qué beneficios tenían activos. Para remediar esto, diseñamos un "Hub de Beneficios Plus" centralizado. En el plan de pruebas, definí que el **85% de los usuarios con perfil Plus** debe identificar correctamente al menos tres beneficios clave y saber exactamente dónde gestionarlos.

Este objetivo es puramente de negocio. Necesitábamos confirmar que el valor añadido de la suscripción fuera inmediatamente visible y no quedara enterrado en la arquitectura de información. Si un usuario Plus no percibe el descuento aplicado automáticamente durante una inscripción —otro de los KPIs que configuré con una meta del 90% de confirmación visual—, estamos perdiendo una oportunidad crítica de retención. La validación aquí buscaba asegurar que el microcopy y los indicadores visuales del estatus "Plus" fueran lo suficientemente disruptivos como para ser notados, pero lo suficientemente integrados como para no resultar intrusivos.

#### El estándar de calidad: SUS y la barrera de la accesibilidad

Para cerrar este marco estratégico, necesitaba una medida de salud global del producto. Opté por el **System Usability Scale (SUS)**, estableciendo una meta de alcanzar una puntuación de al menos **75**. En mi experiencia, cualquier cifra por debajo de eso en un MVP indica que todavía hay fricciones estructurales que podrían comprometer la adopción masiva. El SUS nos daría esa visión panorámica de la satisfacción del usuario que las métricas por tarea a veces ocultan.

Finalmente, no podía ignorar la responsabilidad ética y técnica de la accesibilidad. Aunque estuviéramos probando un prototipo, incluí un objetivo específico para monitorear barreras obvias: contraste de color, legibilidad y tamaño de los controles. Mi meta fue que **no más del 10% de los usuarios** mencionara dificultades relacionadas con estos aspectos. Un diseño que no es accesible no es un diseño senior; es una solución incompleta. Al integrar estos KPIs de accesibilidad y satisfacción general, me aseguré de que el plan de pruebas no solo validara si el producto "funciona", sino si es robusto, inclusivo y moderno.

> **Insight Senior:** Definir estos objetivos antes de siquiera reclutar al primer participante es lo que transforma el proceso de diseño de un ejercicio estético a una herramienta de negocio de alto rendimiento. En este oficio, lo que no se mide no se puede defender ante un comité de dirección. Este plan de pruebas se convirtió en mi contrato de calidad con el proyecto.

**Próximo paso:**

Una vez que tuve claros los números que debíamos alcanzar y qué comportamientos específicos íbamos a observar, me enfrenté a un desafío mucho más táctico y narrativo: ¿cómo íbamos a extraer esa información de los usuarios sin sesgarlos? Sabía que tener los objetivos era solo la mitad de la batalla; ahora necesitaba diseñar los escenarios de uso que pusieran al prototipo contra las cuerdas. Recordé la complejidad de los perfiles de atletas que habíamos definido y me di cuenta de que las tareas de prueba no podían ser simples instrucciones técnicas, sino que debían sentirse como retos reales en la vida de un deportista, lo que me llevó a replantear por completo cómo íbamos a redactar el guion de la sesión.

### Parte 2: DISEÑO DE ESCENARIOS: CREACIÓN DE TAREAS REALISTAS Y STORYTELLING DE PRUEBA

#### La trampa de la instrucción técnica y el giro hacia el storytelling

Una vez que tuve definidos los objetivos métricos y los KPIs de usabilidad, me encontré ante el lienzo en blanco más peligroso de la investigación: el guion de las tareas. Tenía un prototipo de alta fidelidad que lucía impecable, pero sabía perfectamente que un mal escenario de prueba podía arruinar semanas de diseño. Si le decía al usuario "Haz clic en el botón de filtros y selecciona Trail Running", no estaba probando la usabilidad; estaba probando su capacidad de seguir instrucciones. Mi razonamiento en ese momento fue tajante: necesitaba que el usuario se olvidara de que estaba frente a un prototipo y se sumergiera en su propia realidad como atleta.

Para lograr esto, decidí transformar cada validación técnica en un fragmento de vida real. Sabía que si lograba que el participante sintiera la urgencia de encontrar una carrera para el próximo mes, su comportamiento sería natural, errático y honesto —exactamente lo que necesitaba para detectar las costuras de la interfaz—. Articulé cada tarea bajo una estructura rigurosa: un escenario que proporcionara contexto, un punto de inicio coherente en el flujo y un objetivo final que no fuera ambiguo. Mi meta era eliminar el sesgo de deseabilidad social; no quería que los usuarios intentaran "ayudarme" a que el diseño se viera bien, quería que navegaran por pura necesidad.

#### El arte del filtrado: Validando la arquitectura de búsqueda

Empecé por el primer gran filtro de la experiencia: el descubrimiento. En la **Tarea 1.1**, planteé un escenario que cualquier atleta en Ciudad de México ha vivido: la búsqueda de una carrera para el mes siguiente. No les pedí que "usaran el buscador"; les pedí que encontraran opciones disponibles para su calendario. Observé con atención quirúrgica cómo interactuaban con la barra de búsqueda inicial. ¿Era el autocompletado lo suficientemente rápido? ¿Entendían los resultados de la vista inicial?

La verdadera prueba de fuego vino con la **Tarea 1.2**. Aquí, subí la apuesta técnica al introducir variables cruzadas. El escenario exigía encontrar eventos de **Trail Running** específicamente para **principiantes**. Esta no fue una elección al azar; necesitaba validar si nuestra categorización de "Disciplina" y "Nivel" en el motor de filtros era intuitiva o si, por el contrario, estábamos obligando al usuario a realizar un esfuerzo cognitivo innecesario. 

*   **Lo que observé:** Si el usuario tardaba más de cinco segundos en localizar el botón de filtros o si se confundía entre "Categoría" y "Disciplina", sabía que la arquitectura de información tenía una grieta.
*   **El objetivo técnico:** Validar que el listado de resultados se actualizara de forma clara y que los "tags" de filtrado activo fueran lo suficientemente visibles para permitir una reversibilidad fácil de la acción.

Cerré este bloque con la **Tarea 1.3**, donde simulé una recomendación personal: buscar el evento "Reto Desértico" por su nombre. Aquí no buscaba evaluar la exploración, sino la precisión y la velocidad de recuperación de información específica. Si el motor de búsqueda fallaba en encontrar un nombre exacto o si los resultados eran visualmente confusos, el MVP perdería credibilidad de inmediato.

#### La conversión crítica: El "Reto Desértico" y el peso de la información

El corazón del negocio de AsDeporte es la inscripción, y ahí es donde decidí poner toda la presión del diseño. En la **Tarea 2.1**, obligué al usuario a realizar una lectura forense de la página de detalle del "Reto Desértico". No les pedí que "miraran la página", sino que me dieran tres datos críticos: la fecha exacta, el costo para la distancia de 15k y la ubicación de la entrega de kits. 

> **Insight de Diseño:** En eventos deportivos, la entrega de kits es el punto de mayor fricción logística. Si esta información está enterrada bajo tres niveles de scroll o en una pestaña invisible, el flujo está roto, por muy bonito que sea el botón de "Inscribirme".

Una vez validada la comprensión de los datos, pasé a la **Tarea 2.2**: el flujo de inscripción. Pedí a los participantes que completaran el proceso hasta el paso previo al pago. Mi enfoque aquí fue observar la fatiga. Un formulario de inscripción en el mundo del deporte suele ser denso (datos médicos, tallas de camiseta, exoneraciones). Al monitorear este paso, busqué identificar en qué campo exacto el usuario dudaba o perdía el impulso. ¿Eran claros los pasos del formulario? ¿El indicador de progreso generaba alivio o ansiedad? 

Para cerrar el círculo de confianza, diseñé la **Tarea 2.3** sobre la confirmación de inscripción. Tras un pago simulado, necesitaba saber si la pantalla de éxito proporcionaba la tranquilidad necesaria. No basta con decir "Gracias"; el atleta necesita saber qué sigue. Observé si buscaban el número de confirmación o si esperaban ver un botón para añadir el evento a su calendario personal.

#### Gestión de identidad y la recuperación de la memoria atlética

El diseño del perfil suele ser el "patito feo" de muchos MVPs, pero para un corredor, su perfil es su historial de guerra. Diseñé las tareas del Bloque 3 para validar esta conexión emocional y técnica. En la **Tarea 3.1**, planteé algo tan mundano como necesario: actualizar el número de teléfono. Parece simple, pero es la prueba definitiva de la jerarquía de navegación en los ajustes de cuenta.

Sin embargo, las tareas más reveladoras fueron la **3.2 y 3.3**, centradas en la consulta de inscripciones activas y resultados históricos. 
*   **Escenario de resultados:** "Quieres recordar tu tiempo en la Carrera Nocturna del año pasado". 
*   **Razonamiento:** Esta tarea me permitió validar si nuestra estructura de base de datos en el frontend era comprensible. Si el usuario no encontraba sus resultados pasados en menos de tres clics, estábamos fallando en la promesa de ser la "comunidad de deportistas más grande". El perfil no debía ser solo un repositorio de datos, sino un panel de control intuitivo.

#### Validando la promesa de valor: El ecosistema AsDeporte Plus

Como diseñador senior, sé que las funcionalidades de fidelización son las más difíciles de validar porque dependen de la percepción de beneficio, no solo de la funcionalidad. En las **Tareas 3.4 y 3.5**, me enfoqué exclusivamente en los miembros Plus. Diseñé un escenario donde el usuario debía explorar el "Hub de Beneficios Plus" y describir al menos dos ventajas. 

Lo más crítico fue la verificación del descuento en el checkout. En la **Tarea 3.5**, observé si el usuario buscaba activamente el descuento aplicado al inscribirse al "Reto Desértico". Si el ahorro no era evidente de forma inmediata en el desglose de precio, la propuesta de valor de la suscripción se desmoronaba. Mi objetivo era validar que el diseño visual del descuento generara ese "momento de gratificación" que justifica el pago de la membresía.

#### Notificaciones y el futuro del MVP: El ecosistema conectado

Finalmente, abordé las funciones que proyectan el futuro de la plataforma. En la **Tarea 4.1**, utilicé un enfoque cualitativo para las notificaciones. No podía disparar una notificación real en un prototipo de Figma de forma orgánica, así que presenté un escenario simulado de un recordatorio de entrega de kits. Mi interés aquí era la intención de acción: "¿Qué harías al ver esto?". 

Para la **Tarea 4.2**, introduje la conexión con wearables, específicamente con una aplicación ficticia llamada "RutApp" (simulando la integración con Garmin o Strava). Aunque era una funcionalidad definida como *Should Have*, necesitaba validar si el lugar donde decidí ubicar la configuración de integraciones era el que el usuario esperaba. 

En cada una de estas tareas, impuse la técnica de **Think Aloud** (pensar en voz alta). No me interesaba solo que llegaran al final del flujo, sino el monólogo interno que los llevaba ahí. 
*   "¿Por qué dudaste antes de hacer clic en este icono?"
*   "¿Qué esperabas encontrar tras este menú?"
*   "En una escala del 1 al 5, ¿qué tan frustrante fue este paso?"

Estas preguntas post-tarea, articuladas en mi plan, fueron diseñadas para capturar la brecha entre lo que el usuario hace y lo que el usuario siente. Al terminar el diseño de estos escenarios, sentí que tenía una red de seguridad lo suficientemente fina como para atrapar cualquier error de lógica que se nos hubiera escapado en las fases de ideación.

> **Insight Senior:** Un guion de pruebas de usabilidad no es una lista de deseos; es un experimento científico disfrazado de conversación. Si el escenario es lo suficientemente real, el usuario dejará de ser un "sujeto de prueba" para convertirse en el atleta que el producto realmente necesita servir.

**Próximo paso:**

Con los escenarios de vida real ya redactados y los "trapos sucios" de la interfaz listos para ser expuestos, me di cuenta de que tenía las preguntas, pero aún me faltaba el rigor para interpretar las respuestas. El storytelling de las tareas me daría la narrativa del fallo, pero para convencer a los stakeholders de que un cambio era necesario, necesitaba transformar esos sentimientos en datos duros. Esto me llevó directamente a la siguiente frontera: ¿cómo iba a cuantificar la frustración y el éxito sin perder la riqueza de la voz del usuario? Sabía que el siguiente paso, la definición de métricas, sería el que separaría una simple opinión de una decisión de diseño blindada.

### Parte 3: CIENCIA DE DATOS UX: DEFINICIÓN DE MÉTRICAS CUANTITATIVAS Y CUALITATIVAS

#### La obsesión por la evidencia: del guion al laboratorio

Una vez que terminé de redactar los escenarios de prueba, me enfrenté a ese momento de silencio reflexivo que todo diseñador experimentado conoce: tenía una gran historia, pero me faltaba el rigor para probarla. Un escenario bien escrito es solo literatura si el resultado no se puede medir con precisión quirúrgica. Mi razonamiento en ese instante fue pragmático; necesitaba transformar la subjetividad de la experiencia de un atleta en un repositorio de datos forenses que fueran irrefutables ante cualquier comité de dirección. No quería presentar "impresiones"; quería presentar diagnósticos blindados.

Entendí que para que el MVP de AsDeporte fuera exitoso, debía establecer un marco de evaluación que permitiera comparar el rendimiento de diferentes perfiles —desde el corredor ocasional hasta el triatleta de élite— bajo las mismas condiciones controladas. Mi objetivo era eliminar cualquier sesgo de mi propia observación y preparar el terreno para una toma de decisiones basada exclusivamente en la evidencia. Si íbamos a pivotar una decisión de diseño, no sería por una corazonada, sino porque los números nos obligaban a hacerlo.

#### La arquitectura de la Tasa de Éxito (Task Success Rate)

Decidí que la métrica reina sería la **Tasa de Éxito de la Tarea (Task Success Rate)**, pero no me conformé con un binario de "lo logró o no lo logró". Para capturar la verdadera salud del flujo, diseñé una estructura de medición en tres niveles que me permitiera ver los matices de la fricción:

*   **Éxito completo:** El usuario navegó el flujo de principio a fin, tal como lo habíamos proyectado, sin vacilaciones significativas ni necesidad de intervención.
*   **Éxito con ayuda menor:** El atleta completó la tarea, pero detecté un momento de confusión donde necesitó una aclaración o cometió un error menor que pudo corregir por sí mismo. Aquí es donde suelen esconderse las mayores deudas de diseño.
*   **Fracaso:** El usuario se bloqueó, abandonó el flujo o terminó en una sección que no correspondía al objetivo de la tarea.

Para las tareas críticas que definí en el plan —específicamente la búsqueda de eventos y el proceso de inscripción y pago—, establecí un umbral de éxito superior al **80%**. Este no era un número al azar; era el KPI que blindaría la viabilidad comercial del producto. Cualquier resultado por debajo de esa cifra significaría que el diseño no estaba listo para producción.

#### Eficiencia y la política de "Cero Errores Críticos"

Complementé la tasa de éxito con el **Time on Task (Tiempo en Tarea)**. Sin embargo, no utilicé el cronómetro para medir velocidad pura —esto no es una carrera de 100 metros—, sino para identificar "puntos de duda". Si un usuario tardaba tres minutos en encontrar el botón de "Inscribirme", la interfaz estaba fallando en su función comunicativa primordial. 

Paralelamente, implementé un sistema de clasificación de errores extremadamente riguroso: **leves, moderados y críticos/bloqueantes**. Mi postura ante el equipo fue inflexible: el objetivo era alcanzar **cero errores críticos**. En un ecosistema como el de AsDeporte, un error crítico en el flujo de pago no es solo un problema de UX; es una pérdida directa de ingresos y una ruptura de la confianza que ha tomado décadas construir. Registrar cada clic incorrecto y cada navegación errática me permitiría mapear exactamente dónde se rompía el modelo mental del usuario.

#### Cuantificación de la percepción: SEQ y SUS

Para medir lo que el usuario sentía sin caer en ambigüedades, integré dos métricas subjetivas estandarizadas que me darían el contrapunto cuantitativo al comportamiento observado. 

Inmediatamente después de cada tarea, apliqué la **Single Ease Question (SEQ)**. Le pedía al participante que calificara la dificultad en una escala del 1 al 5. Esta pregunta "en caliente" es vital porque captura la frustración antes de que el cerebro del usuario empiece a racionalizar o a intentar ser "amable" con el moderador. Buscaba una puntuación promedio superior a 4.0 en las tareas clave.

Al finalizar la sesión completa, reservé espacio para el **System Usability Scale (SUS)**. Este cuestionario de 10 preguntas con escala Likert me permitiría obtener un *score* de usabilidad de 0 a 100. Mi meta para validar el MVP era alcanzar un benchmark de **70-75**. Obtener esta cifra me daría la autoridad estadística para decir que la plataforma es "buena o excelente" bajo estándares internacionales de la industria, y no solo bajo mi criterio personal.

#### El protocolo cualitativo y la disección de la duda

A pesar de todo el rigor numérico, sabía que los números dicen *qué* pasa, pero solo la voz del usuario explica el *porqué*. Por ello, articulé el protocolo de **"Pensar en voz alta"** como el eje cualitativo de las pruebas. Obligué a que cada sesión fuera una ventana abierta a la mente del atleta, registrando citas directas y expresiones de sorpresa o frustración.

Introduje una técnica que considero fundamental para detectar la **disonancia cognitiva**: la pregunta de **"Expectativas vs. Realidad"**. Cada vez que un usuario dudaba antes de hacer clic, yo lanzaba la pregunta: *“¿Qué esperabas que pasara cuando hiciste clic ahí?”*. Esta simple interrogante me permitió identificar las rupturas entre la arquitectura de información que yo había diseñado y el modelo mental del atleta. Si el usuario esperaba ver sus beneficios Plus y terminaba en la configuración de su perfil, ahí teníamos un hallazgo de diseño que ningún gráfico de barras podría explicar por sí solo.

> **Insight Senior:** La verdadera inteligencia de diseño surge de la triangulación. Un tiempo de tarea bajo puede parecer un éxito, pero si la métrica cualitativa revela que el usuario fue rápido porque "se rindió y eligió lo primero que vio", el dato cuantitativo es una mentira. Mi trabajo aquí fue asegurar que cada número tuviera un contexto y cada sentimiento tuviera una métrica.

Para ejecutar esto con precisión, diseñé una hoja de observación y toma de notas que me permitiera registrar sistemáticamente tanto los tiempos y errores como las observaciones conductuales (lenguaje corporal, puntos de vacilación y rutas de navegación seguidas). No estaba simplemente haciendo preguntas; estaba construyendo un laboratorio donde cada interacción se convertiría en una pieza de evidencia para la iteración final.

**Próximo paso:**

Con el sistema de medición ya calibrado y los instrumentos de recolección listos, me di cuenta de que el laboratorio estaba impecable, pero seguía vacío. La validez de todo este andamiaje científico dependía ahora de una variable que no podía controlar por completo: las personas. ¿Cómo iba a encontrar a los atletas que representaran fielmente la diversidad y las frustraciones reales de la comunidad de AsDeporte sin caer en el sesgo de reclutar solo a los "usuarios felices"? Sabía que la siguiente fase, la estrategia de reclutamiento, sería el filtro definitivo que determinaría si nuestros datos serían oro puro o simplemente ruido estadístico.

### Parte 4: ESTRATEGIA DE RECLUTAMIENTO: SELECCIÓN DE PERFILES Y ELIMINACIÓN DE SESGOS

#### La pureza de la muestra: Por qué el reclutamiento es gestión de riesgos

Podía tener el prototipo más pulido de la industria, pero si lo ponía en manos de las personas equivocadas, los resultados no serían más que ruido estadístico. Tras definir las métricas y calibrar el laboratorio en los pasos anteriores, me enfrenté a la realidad más cruda del diseño de producto: el rigor científico de una prueba de usabilidad no reside en el software que usas, sino en la pureza de la muestra. No estaba buscando "usuarios" genéricos; estaba buscando comportamientos específicos, cicatrices de experiencias pasadas y modelos mentales en conflicto que pusieran a prueba las costuras de lo que habíamos construido.

Mi razonamiento estratégico fue tajante: debíamos evitar a toda costa el sesgo de conveniencia. Es muy fácil reclutar a los "usuarios felices" o a los empleados de la oficina que ya saben dónde están todos los botones. Sin embargo, para que esta validación tuviera peso ante el negocio de AsDeporte, necesitaba encontrar a los críticos, a los novatos y a los expertos exigentes. El reclutamiento, para mí, es la primera línea de defensa en la gestión de riesgos de un proyecto. Si elegimos mal a quién observar, estamos diseñando sobre una mentira. Por eso, decidí estructurar una estrategia de captación que segmentara a nuestra comunidad en tres perfiles arquetípicos, cada uno con una misión suicida específica dentro del prototipo.

#### El Perfil 1: Validando la eficiencia del 'Power User' (Carlos)

El primer grupo que decidí blindar fue el de los **Atletas Frecuentes y Miembros Asdeporte Plus**, representados por nuestro User Persona "Carlos - El Competidor Comprometido". Este perfil no es solo un usuario; es un experto con una configuración mental de alta exigencia tecnológica. Hablamos de personas que usan wearables de última generación, analizan sus métricas en apps de nicho y han participado en al menos 3 eventos de AsDeporte en los últimos 18 meses. 

Mi objetivo con "Carlos" era quirúrgico: quería validar el **M4 (Hub de Beneficios)** y la eficiencia del **M1 (Búsqueda avanzada)**. Mi razonamiento era el siguiente: si un miembro Plus, que paga por una experiencia premium, no siente que la nueva plataforma es drásticamente más rápida y útil que la anterior, nuestra propuesta de valor colapsa. 

> **Insight Senior:** Con los Power Users, la usabilidad se mide en micro-fricciones. Un clic de más para encontrar un descuento de miembro Plus no es solo un error de diseño; es una promesa de marca incumplida. Por eso, busqué específicamente a 4-6 participantes que representaran diversas disciplinas (running, triatlón, ciclismo) para asegurar que el Hub de Beneficios fuera transversal a sus necesidades.

#### El Perfil 2: La prueba de fuego de la confianza (Laura)

Si Carlos era el termómetro de la eficiencia, el segundo perfil era el termómetro de la frustración. Decidí reclutar a la **Atleta Ocasional que ha experimentado problemas de usabilidad**, encarnada en "Laura - La Entusiasta Ocasional". Este perfil fue el más difícil de articular pero el más valioso para el rediseño. Basándome en los registros de Soporte al Cliente, busqué usuarios que hubieran reportado fallos en el proceso de pago o en la búsqueda de eventos en los últimos 12 meses.

La misión de Laura en el test era clara: validar si el **M2 (Flujo de Inscripción y Pago)** era capaz de reconstruir la confianza perdida. No me bastaba con que completara la tarea; necesitaba observar su lenguaje corporal y sus vacilaciones en el momento de introducir los datos de pago. Si ella, que ya había sido "quemada" por el sistema anterior, podía navegar el nuevo flujo sin ansiedad y con una percepción de seguridad total, entonces habríamos ganado la batalla de la retención. Para este grupo, también fijé un objetivo de 4-6 participantes, asegurándome de que su contacto previo con soporte fuera el filtro principal de entrada.

#### El Perfil 3: El filtro contra la ceguera del experto (Javier)

Finalmente, necesitaba un grupo de control que limpiara nuestra visión: el **Atleta Principiante o con Experiencia Digital Limitada**, representado por "Javier - El Explorador Novato". Como diseñadores, a menudo sufrimos de la "ceguera del experto"; damos por sentado que todo el mundo sabe qué es un "split" o cómo funciona una zona de transición en un triatlón. Javier era nuestro filtro de realidad.

Este perfil, compuesto por personas con 0 a 2 eventos en su historial y una familiaridad moderada con plataformas complejas, tenía la tarea de validar la simplicidad y el microcopy del **M5 (Información del Evento)**. Necesitaba saber si la interfaz era inclusiva o si resultaba intimidante. Si Javier se perdía en la jerarquía visual de la página del evento, significaba que estábamos cerrando la puerta al nuevo mercado que AsDeporte necesita conquistar para crecer. Busqué diversidad de edad en este grupo, incluyendo intencionalmente a usuarios mayores para poner a prueba la accesibilidad y la claridad de nuestra guía visual.

#### Ingeniería del Screener: Blindando el acceso al laboratorio

Para materializar estos perfiles, no podíamos lanzar una convocatoria abierta y esperar lo mejor. Diseñé un cuestionario de screening (screener) que actuara como un filtro técnico de alta precisión. No quería "testers profesionales" que solo buscan el incentivo; quería atletas reales. El screener incluyó preguntas trampa y filtros específicos:

*   **Frecuencia y Membresía:** Verificación real del estado de Asdeporte Plus y recuento de participaciones.
*   **Tech-Savviness:** Autoevaluación de habilidad tecnológica cruzada con el tipo de dispositivos que utilizan (iOS vs. Android). Necesitaba una mezcla equilibrada para no sesgar los resultados hacia un solo sistema operativo.
*   **Experiencia con Soporte:** Una pregunta abierta sobre su relación previa con la plataforma para identificar a las "Lauras" sin sugerirles la respuesta.
*   **Logística Remota:** Confirmación de acceso a una conexión estable y un entorno tranquilo. Un usuario con mala conexión no prueba la usabilidad del prototipo, prueba la paciencia de su proveedor de internet.

Articulé una colaboración estratégica con los equipos de Marketing y Soporte de AsDeporte para acceder a su base de datos segmentada. Fue un movimiento de diplomacia interna: les pedí que no nos enviaran a sus "fans", sino a los usuarios que más se quejaban. Ese es el oro puro de la investigación.

#### Logística de saturación y el motor del compromiso

Decidí que el tamaño de la muestra debía oscilar entre **12 y 18 participantes** en total. Sé que la teoría clásica dice que con 5 usuarios encuentras el 80% de los problemas, pero dada la complejidad del MVP y la diversidad de los módulos (del M1 al M6), 5 usuarios por perfil era el mínimo necesario para alcanzar la **saturación de hallazgos**. No quería quedarme con anécdotas; quería patrones de comportamiento sólidos.

Para asegurar el compromiso y compensar el tiempo de estos atletas (sesiones de 60 a 90 minutos), definimos un esquema de incentivos atractivo pero ético. Ofrecimos créditos en la Wallet de AsDeporte o tarjetas de regalo con valores entre $200 y $500 MXN. Este incentivo no solo funcionó como un agradecimiento, sino como un motor para que los participantes se tomaran la sesión con la seriedad que un test de este calibre requiere.

Al cerrar esta fase de planificación, logré algo que pocos valoran hasta que es tarde: una lista de participantes confirmada, un calendario de sesiones equilibrado y, sobre todo, la certeza de que íbamos a probar nuestra solución contra la realidad, no contra nuestras propias expectativas. El escenario estaba listo, los actores seleccionados y el guion técnico escrito.

**Próximo paso:**

Con los participantes ya citados y el calendario cerrado, me enfrenté al desafío más delicado de la investigación cualitativa: la neutralidad del observador. Tenía a los sujetos adecuados, pero un guion mal planteado o una pregunta sugerente podrían invalidar semanas de trabajo en un segundo. Me sumergí de inmediato en la creación del protocolo de moderación, sabiendo que mi próximo gran reto sería diseñar un guion que permitiera a los usuarios fallar con libertad, sin que mi presencia como diseñador los empujara hacia el éxito artificial.

### Parte 5: EL PROTOCOLO DE PRUEBA: EL GUION DEL MODERADOR Y LA ÉTICA DE INVESTIGACIÓN

#### El peso de la consistencia: por qué no se puede improvisar frente al usuario

Con el calendario de sesiones cerrado y doce atletas confirmados, me encontré ante el desafío más invisible pero crítico de la investigación: la estandarización del estímulo. Tenía perfiles tan diversos como Laura —que vive pegada a su Garmin— y Carlos —que aún lucha con los procesos de pago digitales—. Si permitía que mi interacción con cada uno fuera puramente orgánica o improvisada, los hallazgos finales serían una amalgama de anécdotas imposibles de comparar. Como responsable del diseño, mi obsesión en este punto no era solo que el prototipo funcionara, sino que mi propia presencia como moderador no contaminara el experimento.

Articulé un protocolo de pruebas que debía actuar como una red de seguridad. Necesitaba que cada participante, independientemente de su nivel de tecnicismo o de su humor ese día, recibiera exactamente las mismas instrucciones y se enfrentara a los mismos retos bajo las mismas condiciones. Mi razonamiento fue puramente metodológico: en una prueba de usabilidad, el moderador es una variable que debe tender a cero. Cualquier variación en cómo explico una tarea o en cómo respondo a una duda puede sesgar la **tasa de éxito** o alterar la **percepción de carga cognitiva**. Por eso, me senté a escribir un guion de moderación que no fuera un cuestionario rígido, sino una arquitectura de conversación diseñada para extraer la verdad, incluso cuando el usuario intentara ser amable conmigo.

#### La anatomía de la sesión: noventa minutos de rigor táctico

Decidí que cada sesión tendría una duración de entre 60 y 90 minutos. Es un margen de tiempo que muchos consideran excesivo, pero mi experiencia me dice que los primeros quince minutos son de "limpieza" —donde el usuario se suelta y deja de actuar para la cámara— y los últimos quince son donde surgen los hallazgos más profundos, una vez que la fatiga derriba sus filtros de cortesía. Estructuré la sesión en cinco fases críticas, asegurándome de que el tránsito entre ellas fuera imperceptible para el atleta, pero rígidamente controlado por mí.

1.  **Introducción y encuadre:** Donde establezco las reglas del juego.
2.  **Entrevista pre-tarea:** Para calibrar el modelo mental del usuario antes de que vea el diseño.
3.  **Bloques de tareas interactivas:** El núcleo del test, donde el prototipo se pone a prueba.
4.  **Cierre cualitativo:** Donde capturo la impresión general y las métricas subjetivas.
5.  **Logística de salida:** El agradecimiento y la gestión del incentivo.

Para la ejecución, elegí un entorno remoto moderado utilizando herramientas de videoconferencia que me permitieran grabar no solo la pantalla del prototipo, sino también el rostro del usuario. Las micro-expresiones de frustración cuando un botón no responde como se espera valen más que mil palabras en un reporte. Además, me aseguré de que el prototipo estuviera configurado en puntos de inicio específicos para cada bloque; no quería que un error en la Tarea 1 impidiera recolectar datos sobre la Tarea 3.

#### El blindaje psicológico: "No te estamos evaluando a ti"

Lo primero que hice al redactar el guion de apertura fue blindar la honestidad del participante. Existe un fenómeno común en las pruebas de usabilidad donde el usuario se siente examinado y, por miedo a parecer "poco tecnológico", oculta sus dudas o se culpa a sí mismo cuando algo falla. Para neutralizar esto, integré una frase que es un mantra en mi oficio: "Lo más importante que quiero que sepas es que no te estamos evaluando a ti, sino al prototipo".

Fui muy específico en la narrativa de bienvenida. Les expliqué que el prototipo era una "maqueta interactiva", una simulación que podía tener fallos o caminos sin salida. Al decirles "esto no es el producto final", les doy permiso para criticar sin miedo a herir mis sentimientos como diseñador. Este paso es vital para obtener datos limpios. Si el usuario cree que el producto está terminado, se limitará a buscar errores ortográficos; si sabe que es un concepto en desarrollo, se atreverá a cuestionar el flujo completo.

Complementé este blindaje con un protocolo ético de consentimiento. Antes de empezar, solicitaba permiso explícito para grabar audio y pantalla, garantizando que el material sería de uso exclusivo para el equipo de producto de AsDeporte. No es solo un trámite legal; es un acto de respeto que establece una relación de confianza profesional. Sin esa confianza, el usuario no se atrevería a decir "esto me parece una pérdida de tiempo", que es precisamente el tipo de insight que necesito para pivotar una funcionalidad.

#### El calentamiento cognitivo: las siete preguntas de control

Antes de permitirles tocar el prototipo, diseñé una fase de preguntas pre-tarea que actuaban como un sensor de contexto. No quería que entraran "fríos" al diseño. Necesitaba entender quiénes eran en relación con el deporte y con la plataforma actual de AsDeporte. Redacté siete preguntas clave que me permitían mapear su experiencia previa:

*   **Relación con el deporte:** ¿Qué eventos suelen frecuentar? Esto me dice si estoy hablando con un maratonista de élite o con alguien que corre 5K por diversión.
*   **Frecuencia y descubrimiento:** ¿Cómo se enteran de las carreras? Aquí validaba si nuestra estrategia de notificaciones y búsqueda tenía sentido frente a sus hábitos reales.
*   **Historial con AsDeporte:** Esta era la pregunta de control. Si el usuario ya odiaba la app actual por un problema de pago específico, yo necesitaba saberlo para observar con lupa cómo interactuaba con el nuevo flujo de inscripción que habíamos diseñado para resolver ese dolor.

Para los perfiles **AsDeporte Plus**, añadí una capa extra de indagación. Quería saber qué valoraban realmente de la membresía. Si me decían que lo más importante era el descuento en inscripciones, mi tarea de validación en el prototipo debía centrarse obsesivamente en si ese descuento era visible y claro durante el checkout. Estas preguntas pre-tarea no son relleno; son la línea base contra la cual comparo el comportamiento posterior.

#### El ritual del "Think Aloud" y la gestión del silencio

Una de las decisiones técnicas más importantes fue la implementación de la técnica de **Think Aloud** (pensar en voz alta). Instruí a cada participante para que narrara su flujo de pensamiento en tiempo real: "Estoy buscando el botón de filtros porque quiero ver solo triatlones, pero no lo encuentro... ah, creo que es este icono". Esta narrativa es el "oro puro" del diseño de producto, porque revela la brecha entre lo que yo diseñé y lo que el usuario percibe.

Sin embargo, moderar esta técnica requiere una disciplina férrea. Mi guion incluía notas de comportamiento para mí mismo: "No ayudes. No expliques. No defiendas el diseño". Si un usuario se quedaba bloqueado en la pantalla de selección de disciplina, mi respuesta no era decirle dónde hacer clic, sino lanzar una pregunta neutral: "¿Qué estás intentando hacer ahora mismo?" o "¿Qué esperabas que sucediera cuando presionaste ese elemento?".

Esta gestión de la frustración es delicada. Si el usuario se siente demasiado estúpido, se rinde y la sesión se pierde. Si le ayudo demasiado, la **tasa de éxito** de la tarea es falsa. Mi protocolo establecía que solo intervendría si el bloqueo era total y ponía en riesgo la continuidad de la sesión, anotando ese momento como un "fallo crítico de usabilidad". El valor de la prueba reside en el error; cada vez que un atleta se perdía en mi flujo, yo no veía un fracaso, sino una coordenada exacta de dónde debía reconstruir la interfaz.

#### Métricas y síntesis: transformando la emoción en datos

Para que los resultados no fueran solo interpretaciones subjetivas, integré métricas cuantitativas después de cada bloque de tareas. Utilicé una escala de facilidad percibida del 1 al 5. No me bastaba con que completaran la tarea; necesitaba saber qué tan costoso fue para ellos a nivel mental. Si un usuario completaba la inscripción pero le asignaba un 2 en facilidad, sabíamos que el flujo era funcional pero no eficiente.

Al final de la sesión, el guion cerraba con una serie de preguntas de impresión general que buscaban la comparación directa: "¿Qué mejoras notaste respecto a la versión que usas actualmente?". Esta pregunta es un arma de doble filo, pero necesaria para validar si el MVP realmente estaba moviendo la aguja en la dirección correcta. También incluí una pregunta abierta sobre funcionalidades ausentes: "¿Hay algo que no viste hoy y que esperabas encontrar?". A menudo, es aquí donde surgen los requerimientos que el negocio pasó por alto pero que el usuario considera vitales.

Cerré el protocolo con la logística de agradecimiento. En mi experiencia, la forma en que terminas la sesión define la disposición del usuario para futuras pruebas. Confirmar el envío del incentivo (los créditos en la Wallet o las tarjetas de regalo) no es solo un tema administrativo; es el cierre de un contrato de colaboración donde el atleta siente que su tiempo y su frustración han servido para construir algo mejor. Al terminar de redactar este protocolo, sentí que finalmente tenía un experimento científico en las manos, y no solo una serie de entrevistas.

**Próximo paso:**

Con el guion de moderación blindado y los objetivos de validación convertidos en tareas ejecutables, me encontré con un problema logístico que no podía ignorar: el prototipo de alta fidelidad en Figma es una bestia pesada. Si el internet de un participante fallaba o si el enlace tardaba demasiado en cargar, la frustración técnica mataría la validez de la prueba antes de empezar. Necesitaba asegurar que el entorno de prueba remota fuera tan robusto como el guion que acababa de escribir, lo que me llevó a iniciar de inmediato la preparación de la infraestructura técnica y el blindaje de las herramientas de grabación.#### El peso de la consistencia: por qué no se puede improvisar frente al usuario

Con el calendario de sesiones cerrado y doce atletas confirmados, me encontré ante el desafío más invisible pero crítico de la investigación: la estandarización del estímulo. Tenía perfiles tan diversos como Laura —que vive pegada a su Garmin— y Carlos —que aún lucha con los procesos de pago digitales—. Si permitía que mi interacción con cada uno fuera puramente orgánica o improvisada, los hallazgos finales serían una amalgama de anécdotas imposibles de comparar. Mi razonamiento fue puramente metodológico: en una prueba de usabilidad, el moderador es una variable que debe tender a cero. Cualquier variación en cómo explico una tarea o en cómo respondo a una duda puede sesgar la **tasa de éxito** o alterar la **percepción de carga cognitiva**. Por eso, me senté a escribir un guion de moderación que no fuera un cuestionario rígido, sino una arquitectura de conversación diseñada para extraer la verdad, incluso cuando el usuario intentara ser amable conmigo.

#### La anatomía de la sesión: noventa minutos de rigor táctico

Decidí que cada sesión tendría una duración de entre 60 y 90 minutos. Es un margen de tiempo que muchos consideran excesivo, pero mi experiencia me dice que los primeros quince minutos son de "limpieza" —donde el usuario se suelta y deja de actuar para la cámara— y los últimos quince son donde surgen los hallazgos más profundos, una vez que la fatiga derriba sus filtros de cortesía. Estructuré la sesión en cinco fases críticas, asegurándome de que el tránsito entre ellas fuera imperceptible para el atleta, pero rígidamente controlado por mí.

1.  **Introducción y encuadre:** Donde establezco las reglas del juego.
2.  **Entrevista pre-tarea:** Para calibrar el modelo mental del usuario antes de que vea el diseño.
3.  **Bloques de tareas interactivas:** El núcleo del test, donde el prototipo se pone a prueba.
4.  **Cierre cualitativo:** Donde capturo la impresión general y las métricas subjetivas.
5.  **Logística de salida:** El agradecimiento y la gestión del incentivo.

Para la ejecución, elegí un entorno remoto moderado utilizando herramientas de videoconferencia que me permitieran grabar no solo la pantalla del prototipo, sino también el rostro del usuario. Las micro-expresiones de frustración cuando un botón no responde como se espera valen más que mil palabras en un reporte. Además, me aseguré de que el prototipo estuviera configurado en puntos de inicio específicos para cada bloque; no quería que un error en la Tarea 1 impidiera recolectar datos sobre la Tarea 3.

#### El blindaje psicológico: "No te estamos evaluando a ti"

Lo primero que hice al redactar el guion de apertura fue blindar la honestidad del participante. Existe un fenómeno común en las pruebas de usabilidad donde el usuario se siente examinado y, por miedo a parecer "poco tecnológico", oculta sus dudas o se culpa a sí mismo cuando algo falla. Para neutralizar esto, integré una frase que es un mantra en mi oficio: "Lo más importante que quiero que sepas es que no te estamos evaluando a ti, sino al prototipo".

Fui muy específico en la narrativa de bienvenida. Les expliqué que el prototipo era una "maqueta interactiva", una simulación que podía tener fallos o caminos sin salida. Al decirles "esto no es el producto final", les doy permiso para criticar sin miedo a herir mis sentimientos como diseñador. Este paso es vital para obtener datos limpios. Si el usuario cree que el producto está terminado, se limitará a buscar errores ortográficos; si sabe que es un concepto en desarrollo, se atreverá a cuestionar el flujo completo.

Complementé este blindaje con un protocolo ético de consentimiento. Antes de empezar, solicitaba permiso explícito para grabar audio y pantalla, garantizando que el material sería de uso exclusivo para el equipo de producto de AsDeporte. No es solo un trámite legal; es un acto de respeto que establece una relación de confianza profesional. Sin esa confianza, el usuario no se atrevería a decir "esto me parece una pérdida de tiempo", que es precisamente el tipo de insight que necesito para pivotar una funcionalidad.

#### El calentamiento cognitivo: las siete preguntas de control

Antes de permitirles tocar el prototipo, diseñé una fase de preguntas pre-tarea que actuaban como un sensor de contexto. No quería que entraran "fríos" al diseño. Necesitaba entender quiénes eran en relación con el deporte y con la plataforma actual de AsDeporte. Redacté siete preguntas clave que me permitían mapear su experiencia previa:

*   **Relación con el deporte:** ¿Qué eventos suelen frecuentar? Esto me dice si estoy hablando con un maratonista de élite o con alguien que corre 5K por diversión.
*   **Frecuencia y descubrimiento:** ¿Cómo se enteran de las carreras? Aquí validaba si nuestra estrategia de notificaciones y búsqueda tenía sentido frente a sus hábitos reales.
*   **Historial con AsDeporte:** Esta era la pregunta de control. Si el usuario ya odiaba la app actual por un problema de pago específico, yo necesitaba saberlo para observar con lupa cómo interactuaba con el nuevo flujo de inscripción que habíamos diseñado para resolver ese dolor.

Para los perfiles **AsDeporte Plus**, añadí una capa extra de indagación. Quería saber qué valoraban realmente de la membresía. Si me decían que lo más importante era el descuento en inscripciones, mi tarea de validación en el prototipo debía centrarse obsesivamente en si ese descuento era visible y claro durante el checkout. Estas preguntas pre-tarea no son relleno; son la línea base contra la cual comparo el comportamiento posterior.

#### El ritual del "Think Aloud" y la gestión del silencio

Una de las decisiones técnicas más importantes fue la implementación de la técnica de **Think Aloud** (pensar en voz alta). Instruí a cada participante para que narrara su flujo de pensamiento en tiempo real: "Estoy buscando el botón de filtros porque quiero ver solo triatlones, pero no lo encuentro... ah, creo que es este icono". Esta narrativa es el "oro puro" del diseño de producto, porque revela la brecha entre lo que yo diseñé y lo que el usuario percibe.

Sin embargo, moderar esta técnica requiere una disciplina férrea. Mi guion incluía notas de comportamiento para mí mismo: "No ayudes. No expliques. No defiendas el diseño". Si un usuario se quedaba bloqueado en la pantalla de selección de disciplina, mi respuesta no era decirle dónde hacer clic, sino lanzar una pregunta neutral: "¿Qué estás intentando hacer ahora mismo?" o "¿Qué esperabas que sucediera cuando presionaste ese elemento?".

Esta gestión de la frustración es delicada. Si el usuario se siente demasiado estúpido, se rinde y la sesión se pierde. Si le ayudo demasiado, la **tasa de éxito** de la tarea es falsa. Mi protocolo establecía que solo intervendría si el bloqueo era total y ponía en riesgo la continuidad de la sesión, anotando ese momento como un "fallo crítico de usabilidad". El valor de la prueba reside en el error; cada vez que un atleta se perdía en mi flujo, yo no veía un fracaso, sino una coordenada exacta de dónde debía reconstruir la interfaz.

#### Métricas y síntesis: transformando la emoción en datos

Para que los resultados no fueran solo interpretaciones subjetivas, integré métricas cuantitativas después de cada bloque de tareas. Utilicé una escala de facilidad percibida del 1 al 5. No me bastaba con que completaran la tarea; necesitaba saber qué tan costoso fue para ellos a nivel mental. Si un usuario completaba la inscripción pero le asignaba un 2 en facilidad, sabíamos que el flujo era funcional pero no eficiente.

Al final de la sesión, el guion cerraba con una serie de preguntas de impresión general que buscaban la comparación directa: "¿Qué mejoras notaste respecto a la versión que usas actualmente?". Esta pregunta es un arma de doble filo, pero necesaria para validar si el MVP realmente estaba moviendo la aguja en la dirección correcta. También incluí una pregunta abierta sobre funcionalidades ausentes: "¿Hay algo que no viste hoy y que esperabas encontrar?". A menudo, es aquí donde surgen los requerimientos que el negocio pasó por alto pero que el usuario considera vitales.

Cerré el protocolo con la logística de agradecimiento. En mi experiencia, la forma en que terminas la sesión define la disposición del usuario para futuras pruebas. Confirmar el envío del incentivo (los créditos en la Wallet o las tarjetas de regalo) no es solo un tema administrativo; es el cierre de un contrato de colaboración donde el atleta siente que su tiempo y su frustración han servido para construir algo mejor. Al terminar de redactar este protocolo, sentí que finalmente tenía un experimento científico en las manos, y no solo una serie de entrevistas.

**Próximo paso:**

Con el guion de moderación blindado y los objetivos de validación convertidos en tareas ejecutables, me encontré con un problema logístico que no podía ignorar: el prototipo de alta fidelidad en Figma es una bestia pesada. Si el internet de un participante fallaba o si el enlace tardaba demasiado en cargar, la frustración técnica mataría la validez de la prueba antes de empezar. Necesitaba asegurar que el entorno de prueba remota fuera tan robusto como el guion que acababa de escribir, lo que me llevó a iniciar de inmediato la preparación de la infraestructura técnica y el blindaje de las herramientas de grabación.

### Parte 6: LOGÍSTICA Y BLINDAJE TÉCNICO: PREPARACIÓN DEL ENTORNO DE PRUEBA REMOTA

#### La fragilidad técnica del simulacro

Un prototipo de alta fidelidad en Figma es, en esencia, una promesa técnica extremadamente frágil. Después de semanas articulando flujos, puliendo el diseño visual y blindando un protocolo de moderación ético y riguroso, me enfrenté a una realidad que cualquier diseñador con experiencia en trincheras conoce: si el entorno de prueba falla, la investigación muere. No importa qué tan brillante sea el guion o qué tan pulida esté la interfaz; si el enlace de Figma tarda diez segundos en cargar o si la conexión del usuario se degrada durante el flujo de pago, los datos resultantes estarán contaminados por la frustración técnica, no por la usabilidad del producto.

Mi razonamiento en este punto fue puramente preventivo. Entendí que debía transitar de la estrategia de diseño a la ingeniería logística. El prototipo que habíamos construido para AsDeporte era una "bestia" pesada, cargada de componentes complejos, variantes de microinteracciones y activos visuales de alta resolución. Mi prioridad absoluta fue construir lo que llamo un "búnker digital": un entorno controlado donde la tecnología fuera invisible para el participante. Sabía que para Laura, Alex o Carlos, el éxito de la sesión dependía de que el prototipo "se sintiera" como una aplicación real y no como un archivo de diseño compartido. Esta transición no fue administrativa; fue un ejercicio de control de calidad sobre el experimento mismo.

#### Verificación forense: El prototipo como activo de precisión

Antes de enviar el primer enlace de invitación, realicé una auditoría exhaustiva del prototipo interactivo. No me limité a verificar que los botones funcionaran; hice una revisión forense comparando cada transición con el documento de conexión de wireframes y flujos de usuario que habíamos validado previamente. Mi objetivo era asegurar una consistencia absoluta entre los tres entornos críticos: iOS, Android y Web Responsive.

En el caso de la aplicación móvil, utilicé Figma Mirror en dispositivos reales (un iPhone y un Samsung de gama media) para detectar latencias en las microinteracciones. Me enfoqué obsesivamente en tres puntos de fricción potencial:
1.  **El sistema de filtrado de eventos:** Verifiqué que los estados de los filtros (seleccionado, hover, activo) respondieran instantáneamente. Si un usuario dudaba al filtrar carreras de ciclismo, quería que fuera por la arquitectura de información, no porque el prototipo no registrara el clic.
2.  **Los formularios de inscripción:** Simulé la entrada de datos en cada campo. Decidí que, para mantener el realismo, algunos campos tendrían autocompletado para evitar que el usuario se agotara escribiendo en un teclado virtual durante la prueba, mientras que otros requerirían una interacción manual para medir la claridad del microcopy.
3.  **El flujo de pago y confirmación:** Este es el momento de mayor carga cognitiva. Me aseguré de que el "loading state" durara exactamente lo suficiente para simular una transacción real, permitiendo validar si el diseño visual de éxito generaba el alivio y la confianza que buscábamos.

Realicé pruebas internas con el equipo, actuando yo mismo como el "usuario saboteador", intentando romper los flujos, haciendo clic en áreas no activas y retrocediendo en momentos críticos. Esta fase de "pre-vuelo" me permitió corregir cuatro enlaces rotos y ajustar la visibilidad de dos capas que se solapaban en la versión responsive de tablet, eliminando cualquier ruido técnico antes de la primera sesión oficial.

#### El Stack Tecnológico: Orquestando la cabina del moderador

La elección de las herramientas para las pruebas remotas moderadas no fue una decisión de conveniencia, sino de robustez. Opté por una configuración basada en Zoom, no solo por la familiaridad de los usuarios con la plataforma, sino por su capacidad de grabación redundante y la estabilidad al compartir pantalla bidireccionalmente. Necesitaba ver no solo lo que el usuario hacía en el prototipo, sino también sus reacciones faciales y escuchar su "pensar en voz alta" sin interrupciones de audio.

Mi configuración física como moderador fue diseñada para minimizar mi carga cognitiva y maximizar mi capacidad de observación. Organicé mi espacio de trabajo con un sistema de doble monitor:
*   **Monitor Principal:** Dedicado exclusivamente a la pantalla compartida del participante. Aquí observaba cada movimiento del cursor, cada vacilación y cada desviación de la ruta esperada (*user path deviation*).
*   **Monitor Secundario:** Dividido entre el protocolo de pruebas (mi guion de navegación) y la hoja de notas digital. Esto me permitía mantener el contacto visual con la cámara mientras registraba hallazgos, evitando que el usuario sintiera que yo estaba "distraído" escribiendo.

Además, integré auriculares con cancelación de ruido y un micrófono unidireccional para asegurar que mi voz fuera clara y calmada, actuando como un ancla de seguridad para el participante. También preparé una conexión de internet redundante mediante un punto de acceso móvil de respaldo; en un proyecto de esta envergadura para AsDeporte, no podía permitirme que una caída del proveedor local cancelara una sesión con un perfil de atleta difícil de reclutar.

#### La arquitectura del registro: La hoja de notas forense

Uno de los mayores riesgos en la investigación cualitativa es la pérdida de matices en la memoria del moderador. Para blindar esto, diseñé una plantilla de registro en Notion que funcionaba como una base de datos relacional de hallazgos. No quería simples párrafos de texto; necesitaba datos estructurados que facilitaran la síntesis posterior.

La hoja de notas fue dividida en secciones críticas por cada participante y cada tarea:
*   **Ruta del Usuario Observada:** Un campo para mapear si el usuario siguió el *Happy Path* o si se perdió en flujos secundarios. Esto es vital para identificar problemas de jerarquía visual.
*   **Registro de Fricciones y Errores:** Documenté cada vez que un usuario hacía un "clic de rabia" o cuando el microcopy generaba una pregunta en lugar de una acción.
*   **Verbatims (Citas Clave):** Reservé un espacio para capturar frases literales. "No entiendo si ya pagué o si sigo en proceso" es un hallazgo mucho más potente que una nota que diga "confusión en el pago".
*   **Métricas Cuantitativas Integradas:** Al final de cada tarea, incluí campos para la Tasa de Éxito (Completada, Completada con ayuda, Fallida) y una Escala de Facilidad del 1 al 5.

Este nivel de detalle en la preparación de la hoja de notas me permitió que, al finalizar cada día de pruebas, ya tuviera un pre-análisis estructurado. No estaba simplemente acumulando grabaciones; estaba construyendo un repositorio de evidencia técnica que respaldaría cada decisión de diseño frente a los stakeholders de AsDeporte.

#### Logística humana: Consentimientos e incentivos

La relación con el participante es un contrato de confianza que debe gestionarse con profesionalismo senior. Me encargué personalmente de que el proceso de consentimiento informado fuera transparente y digital. Utilicé un formulario online donde cada atleta B2C aceptaba explícitamente la grabación de audio, video y pantalla, asegurándoles la anonimización de sus datos. No inicié ninguna sesión sin haber recibido y verificado este documento; la ética en la investigación es el blindaje legal del proyecto.

En cuanto a los incentivos, coordiné con el equipo de AsDeporte para asegurar que la recompensa fuera coherente con el esfuerzo solicitado (sesiones de 60 a 90 minutos). Definimos un rango de entre $200 y $500 MXN, entregados principalmente a través de créditos en la Wallet de AsDeporte o tarjetas de regalo digitales. Mi razonamiento fue estratégico: el incentivo no es solo un pago, es una validación del valor que el usuario aporta al ecosistema. Establecí un proceso de entrega garantizado en menos de 48 horas post-sesión para cerrar el ciclo de experiencia del usuario de forma positiva, incluso si la prueba del prototipo había sido frustrante para ellos.

#### Contingencia y redundancia: El protocolo de emergencia

En investigación de usuarios, el tiempo es el recurso más caro y el más difícil de recuperar. Por ello, implementé un sistema de blindaje contra imprevistos. Primero, configuré un software de grabación de respaldo (OBS Studio) que corría localmente en mi máquina. Si la nube de Zoom fallaba o el archivo se corrompía, tenía una versión de seguridad de alta fidelidad con audio sincronizado.

Segundo, gestioné el reclutamiento con un margen de seguridad. Mantuve una lista de espera de participantes "en reserva" y programé un sistema de recordatorios automatizados: un correo personalizado 24 horas antes de la sesión y un mensaje breve una hora antes del inicio. Esta logística redujo el riesgo de *no-show*, asegurando que las ventanas de tiempo bloqueadas para la investigación fueran productivas.

Finalmente, realicé una sesión piloto con un colega del equipo. Esta "prueba de la prueba" fue fundamental para calibrar el tiempo de las tareas y verificar que el enlace del prototipo no solicitara permisos inesperados de acceso a Figma. Al terminar este simulacro, pude marcar cada casilla de mi checklist de pre-vuelo. El búnker digital estaba listo; el prototipo estaba blindado y el entorno de captura era impecable. Estábamos listos para dejar de suponer y empezar a validar.

**Reflexión final:**
Como diseñador, he aprendido que la logística es, en realidad, una forma invisible de diseño de experiencia. Si el entorno de prueba es torpe o la tecnología falla, la voz del usuario se pierde en el ruido del error técnico. Al blindar cada detalle de esta infraestructura para AsDeporte, no solo protegí la validez de los datos, sino que aseguré que cada minuto invertido por nuestros atletas se tradujera en insights accionables que realmente movieran la aguja del producto.