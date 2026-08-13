# Fase 5: Lanzamiento y Evolución Continua Post-lanzamiento

## Actividad 05: Roadmap de Producto Evolutivo

> Esta actividad representa la culminación estratégica del proyecto, donde el rol del Product Designer evoluciona de constructor a estratega de producto. El objetivo es establecer un sistema de gobernanza y evolución continua basado en evidencia empírica. Se procesan los datos de KPIs (SUS 82/100), el feedback cualitativo del Q2 2022 y los resultados de experimentos A/B (incremento del 18% en CTR) para alimentar un Roadmap de Producto vivo. Este plan no solo resuelve la deuda técnica y de usabilidad (como la fragmentación de 'Mi Salud ABC'), sino que proyecta la innovación a largo plazo (App Nativa, Telemedicina integrada) asegurando que la plataforma web del Centro Médico ABC se mantenga a la vanguardia de la salud digital.

### Parte 1: Auditoría Forense de Datos la Síntesis de la Evidencia Post-lanzamiento

#### El silencio tras el despliegue y la caza de la evidencia

El día después de un lanzamiento suele ser una mezcla extraña de alivio y ansiedad. Habíamos puesto en manos de miles de pacientes una plataforma completamente rediseñada, pero como diseñador, sabía que el "éxito" del día uno es un espejismo. El verdadero trabajo de un **Product Designer** no termina cuando el código llega a producción; es ahí donde empieza el ciclo de vida real del producto. Me encontré frente a un monitor dividido: en uno, la interfaz impecable que habíamos construido; en el otro, las primeras ráfagas de datos crudos entrando desde Google Analytics 4 y Hotjar. No estaba buscando felicitaciones, estaba buscando grietas.

Mi razonamiento en este punto de inflexión fue puramente estratégico. No diseñamos para una foto estática en un portafolio, sino para resolver problemas operativos y humanos a largo plazo. Necesitaba transformar el "me gusta el nuevo sitio" de los stakeholders en evidencia técnica irrefutable. Para ello, establecí un sistema de monitoreo continuo que no solo midiera el tráfico, sino la salud de la interacción. Quería saber si Elena, nuestra persona que representa a los pacientes que cuidan de otros, estaba logrando lo que necesitaba sin frustración. Esta auditoría forense no era un trámite administrativo; era la maniobra necesaria para blindar el producto contra la obsolescencia y asegurar que cada decisión futura estuviera anclada en el comportamiento real, no en suposiciones.

#### El salto de 37 puntos: Validando el cambio de paradigma

Uno de los momentos más reveladores de esta auditoría fue cuando procesé los resultados de la escala **SUS (System Usability Scale)** en febrero de 2022. Recordaba perfectamente el baseline que obtuvimos antes del rediseño: un doloroso 45/100. En términos de usabilidad, eso es una calificación "pobre", casi un fracaso sistémico donde el usuario se siente castigado por la interfaz. Ver que la nueva plataforma alcanzó un **82/100** fue el primer gran indicador de que las iteraciones y pruebas de usabilidad que realizamos durante meses habían movido la aguja en la dirección correcta.

Este salto de 37 puntos no fue una casualidad estadística. Fue la validación de que habíamos pasado de una estructura fragmentada y confusa a una experiencia calificada como "buena a excelente". Sin embargo, como mentor en este proceso, mi análisis fue más allá del número triunfal. Un 82/100 significa que, aunque la base es sólida, todavía hay un 18% de fricción que el sistema no ha resuelto. Analicé este KPI junto con el **CSAT (Customer Satisfaction Score)**, que se situó en un 85% en flujos clave. Estos números me dieron el capital político necesario para hablar con la dirección del Centro Médico ABC: el diseño estaba funcionando, pero los datos cualitativos empezaban a susurrar que la batalla por la "unificación total" aún no estaba ganada.

#### La brecha del onboarding y el termómetro de la fidelización

Al analizar la adopción del portal de pacientes, me topé con una realidad más sobria. Aunque habíamos logrado que el **15% de los usuarios únicos** accedieran al portal o iniciaran sesión en los primeros dos meses, todavía estábamos lejos de nuestra meta anual del 25%. Mi diagnóstico fue claro: la interfaz del portal era usable —los datos de éxito en tareas así lo confirmaban—, pero el puente hacia ella era débil. 

> El diseño puede resolver la usabilidad, pero no puede resolver por sí solo la falta de una estrategia de comunicación robusta. 

Observé que muchos pacientes llegaban a la plataforma, realizaban una consulta informativa y se iban sin descubrir los beneficios del portal unificado. Este KPI se convirtió para mí en el termómetro de la fidelización a largo plazo. Si no lográbamos que el paciente se "adueñara" de su espacio digital, la plataforma seguiría siendo una herramienta transaccional efímera en lugar de un ecosistema de salud. Mi razonamiento me llevó a concluir que el próximo gran reto no era solo visual, sino de **onboarding estratégico**: necesitábamos guiar al usuario hacia el registro con la misma elegancia con la que lo guiábamos a agendar una cita.

#### Anatomía de la eficiencia: El tiempo como métrica de respeto al paciente

Una de las victorias más tangibles que documenté fue la reducción drástica en el **Time-on-Task**. En el diseño anterior, agendar una cita de laboratorio era una carrera de obstáculos que tomaba, en promedio, 4 minutos y 15 segundos. Tras el rediseño, logramos bajar ese tiempo a **2 minutos y 10 segundos**. Estamos hablando de una mejora del 50% en la eficiencia. Para un paciente que está lidiando con una preocupación de salud, ahorrarle dos minutos de fricción digital es una forma de respeto y cuidado.

Esta eficiencia tuvo un impacto colateral masivo en la operación del negocio. Observé una **reducción del 25% en las llamadas al Call Center** relacionadas con dudas de autogestión ("¿dónde veo mis resultados?" o "¿cómo agendo?"). Cada segundo que eliminamos de la interfaz fue una llamada que el equipo de soporte no tuvo que atender. Este enfoque forense me permitió demostrar que el buen diseño es, en última instancia, una herramienta de optimización de recursos. No solo estábamos haciendo que el sitio se viera "bonito"; estábamos liberando capacidad operativa para el hospital al permitir que los pacientes se sirvieran a sí mismos de manera autónoma y rápida.

#### El hallazgo crítico en especialistas: Donde los números y los rostros se cruzan

El momento más tenso de la auditoría ocurrió durante el análisis del Q2 2022, cuando detecté una anomalía preocupante: una **tasa de abandono del 60%** en el flujo de agendamiento de especialistas. La métrica cuantitativa de Google Analytics señalaba el "paso de selección de horario" como el punto de fuga masiva, pero el número no me decía el porqué. Fue entonces cuando realicé un cruce forense con las grabaciones de sesión en Hotjar.

Vi a usuarios que encajaban perfectamente con el perfil de Carlos, nuestra persona que busca eficiencia, atrapados en un bucle de frustración. En las grabaciones, se veía claramente cómo hacían clics repetidos en el calendario, dudaban, retrocedían y finalmente cerraban la pestaña. El selector de horarios, que en papel parecía funcional, en la práctica era ambiguo. La disponibilidad no era clara o la interfaz no comunicaba correctamente los estados de carga. Este diagnóstico profundo fue vital: no era un problema de interés del usuario (el 78% usaba el buscador para llegar al perfil del médico), era un fallo puramente de interacción en el último kilómetro. Esta revelación cambió mis prioridades de inmediato; no podíamos hablar de innovación si el motor transaccional principal tenía una fuga de esa magnitud.

#### Psicología del Microcopy: La victoria del CTA directo

Para mitigar parte de esa fricción, ejecuté una serie de experimentos controlados. Uno de los más exitosos fue la **Prueba A/B sobre el CTA en los perfiles de médico**. Teníamos la hipótesis de que el texto "Ver Horarios" era demasiado pasivo y no alineaba la interfaz con la intención real del paciente. Diseñé una variante que simplemente decía **"Agendar Cita Ahora"**.

Los resultados fueron contundentes:
*   **Incremento del 18% en el CTR** (Click-Through Rate) del botón.
*   **Aumento del 15% en el inicio del flujo de agendamiento** desde el perfil del médico.
*   **Significación estadística del 97%**, lo que eliminaba cualquier duda sobre el azar.

Desde la psicología del diseño, este experimento confirmó que reducir la carga cognitiva mediante un microcopy directo y orientado a la acción es fundamental en entornos de salud. El usuario no quiere "ver", quiere "resolver". Este aprendizaje no se quedó en un informe; lo escalé como una norma de diseño para todos los puntos de conversión de la plataforma, asegurando que la voz de la interfaz fuera siempre activa y facilitadora.

#### La persistencia del dolor: El fantasma de la fragmentación

A pesar de todos los éxitos métricos, el feedback cualitativo me devolvió a la realidad de Elena. En las encuestas en página y en los paneles de pacientes, seguíamos escuchando una queja recurrente: la confusión sobre la ubicación de los resultados. "No sé si mis resultados de laboratorio están en el mismo lugar que mis rayos X", decían los usuarios. A pesar de que técnicamente habíamos avanzado en la integración, la **percepción de fragmentación** persistía.

Esta fue mi reflexión senior más amarga pero necesaria: habíamos triunfado en el diseño visual y en la eficiencia de las tareas, pero la arquitectura de información y la comunicación de la "unificación" todavía tenían brechas profundas. Los usuarios seguían llamando al Call Center para preguntar algo que, en teoría, ya estaba resuelto en la web. Esto me indicó que la implementación técnica del portal "Mi Salud ABC" no era suficiente si la experiencia mental del usuario seguía dividida entre subdominios y tipos de estudios. El diseño de la interfaz había cumplido su parte, pero la estrategia de producto necesitaba una evolución más agresiva para consolidar la confianza del paciente en el portal único.


Tras diseccionar esta montaña de datos y enfrentarme a la frustración real de usuarios como Carlos y Elena, me di cuenta de que no bastaba con corregir errores aislados. Tenía sobre mi mesa una lista de fricciones críticas —desde el colapso en el agendamiento de especialistas hasta la persistente duda sobre la unificación de resultados— que exigían algo más que simples parches de diseño. El diagnóstico forense estaba terminado y la tensión era evidente: debíamos decidir qué batallas pelear primero para no agotar los recursos del Centro Médico ABC en mejoras superficiales, lo que me llevó a iniciar el proceso de **IDEACIÓN ESTRATÉGICA: TRADUCIENDO FRICCIONES EN INICIATIVAS DE VALOR**.

---

### Parte 2: Ideación Estratégica Traduciendo Fricciones en Iniciativas de Valor

#### El peso de los datos: Cuando el éxito revela nuevas grietas

Tener frente a mí el informe de analítica del **Q2 2022** fue un momento de dualidad profesional. Por un lado, las métricas de **GA4** gritaban éxito: un incremento del 15% en usuarios únicos y una tasa de rebote contenida en el 35% confirmaban que el rediseño visual y la arquitectura base estaban funcionando. Sin embargo, al descender a las grabaciones de **Hotjar** y cruzar los datos con los reportes del Call Center, la satisfacción se transformó en una urgencia estratégica. No podíamos quedarnos celebrando el 45% de conversión en agendamiento de laboratorios cuando el agendamiento de especialistas presentaba un **60% de abandono** justo en el selector de horarios.

Me di cuenta de que mi rol debía pivotar. Ya no se trataba de "arreglar la web" o pulir componentes de la interfaz; el diagnóstico forense me indicaba que estábamos ante un problema de percepción de producto y de arquitectura profunda. La fragmentación entre el sitio institucional y los portales de resultados (`misaludabc` y `milaboratorio`) estaba erosionando la confianza que tanto nos había costado construir. Entré en una fase de ideación agresiva donde mi objetivo no era generar una lista de deseos, sino un **Backlog de Oportunidades** en Miro que tradujera cada fricción en una iniciativa de valor medible. Sabía que si no proponíamos una evolución estructural, el Centro Médico ABC seguiría operando como una colección de silos digitales en lugar de una plataforma de salud unificada.

#### Mi Portal Paciente ABC v2.0: El fin de la fragmentación

La iniciativa más crítica que articulé fue el salto hacia la versión 2.0 del portal. Los hallazgos cualitativos eran devastadores: pacientes como Elena seguían llamando al hospital para preguntar dónde estaban sus análisis, a pesar de tener acceso al portal. Al analizar el flujo, identifiqué que la raíz no era la falta de funcionalidad, sino la dispersión técnica. Elena se encontraba con una interfaz para laboratorio y otra distinta para imagenología, esta última lastrada por problemas de compatibilidad con el visor **Vue PACS**.

Propuse la unificación total bajo una sola premisa: **un solo punto de acceso, una sola experiencia**. Esta iniciativa no era solo un rediseño de UI; implicaba:
*   **Consolidación de Arquitectura:** Eliminar la distinción mental para el usuario entre "resultados de sangre" y "placas de rayos X". Todo debía vivir bajo la misma jerarquía de información.
*   **Resolución de Deuda Técnica:** Atacar directamente la incompatibilidad del visor de imágenes, asegurando que la visualización fuera fluida en cualquier dispositivo, eliminando la necesidad de que el paciente buscara soporte técnico externo.
*   **Historial Médico Integrado:** Pasar de una lista de archivos descargables a una línea de tiempo de salud.

Mi razonamiento era simple: si lográbamos que el portal se sintiera como un aliado y no como un laberinto de subdominios, reduciríamos drásticamente la carga operativa del Call Center y, lo más importante, empoderaríamos al paciente.

#### El selector de horarios: Diseñando contra el abandono cognitivo

Ver las grabaciones de **Hotjar** de usuarios como Carlos intentando agendar una cita con un cardiólogo fue una lección de humildad. Carlos llegaba con determinación, pero al enfrentarse al selector de disponibilidad, su comportamiento se volvía errático: clics repetitivos en fechas bloqueadas, retrocesos constantes y, finalmente, el abandono del flujo en un 60% de los casos. La interfaz actual estaba fallando en comunicar la disponibilidad real de forma clara.

Decidí que el rediseño del selector de horarios debía ser una prioridad inmediata en el roadmap. Mi enfoque para esta iniciativa se centró en la **Optimización de la Tasa de Conversión (CRO)** a través de la reducción de la carga cognitiva:
*   **Claridad Radical:** Sustituir los calendarios densos por una visualización de "próxima disponibilidad" más humana y directa.
*   **Lógica de Disponibilidad Transparente:** Si no hay horas, el sistema debe explicar por qué o sugerir alternativas, en lugar de dejar al usuario en un callejón sin salida de clics inútiles.
*   **Feedback Instantáneo:** Eliminar la incertidumbre de si el sistema está cargando o si la fecha realmente no tiene citas.

No buscábamos una mejora estética, buscábamos que la reserva de una cita con un especialista fuera tan fluida y predecible como el agendamiento de un estudio de laboratorio, que ya gozaba de una salud métrica mucho mayor.

#### Gestión Familiar: De la necesidad individual al ecosistema de cuidado

Durante el análisis de los paneles de pacientes, surgió un patrón que no habíamos anticipado con tanta fuerza: el rol del cuidador. Sofía, nuestra persona que representa a la madre y cuidadora, expresaba una frustración constante al tener que cerrar e iniciar sesión con diferentes credenciales para ver los resultados de sus hijos o de su madre. El Call Center confirmaba que esta era una de las consultas más frecuentes.

Conceptualicé la funcionalidad de **"Dashboard Familiar"** como una ventaja competitiva de retención. La idea era permitir la vinculación de perfiles bajo una cuenta principal. Esto transformaba la plataforma de un portal individual a un ecosistema de gestión de salud familiar.
*   **Vinculación de Perfiles:** Un proceso seguro y validado legalmente para que Sofía pudiera saltar entre el perfil de su hijo y el suyo sin fricciones.
*   **Vista Consolidada:** Un tablero que mostrara las próximas citas y resultados pendientes de todo el núcleo familiar en una sola pantalla.

Esta iniciativa no solo resolvía un dolor operativo, sino que alineaba el producto con la realidad cultural de nuestros pacientes, donde la salud es, a menudo, una responsabilidad compartida.

#### El Widget de Feedback: Cerrando el loop en tiempo real

Para que el roadmap fuera realmente evolutivo y no una foto estática de mis ideas, necesitaba un sistema de captura de insights que no dependiera de grandes informes trimestrales. Basándome en la metodología de **Consolidación Continua**, propuse la implementación de un **Widget de Feedback Contextual**.

La estrategia técnica era colocar este capturador de sentimientos (vía **Hotjar** o formularios ligeros) en puntos de alta tensión: justo después de una búsqueda de médico sin resultados, o tras completar un agendamiento. El objetivo era capturar la frustración o el alivio en el "momento cero".
*   **Alimentación del Backlog:** Cada comentario se categorizaría automáticamente en nuestro tablero de Miro, permitiéndome ver tendencias de usabilidad en días, no en meses.
*   **Validación de Hipótesis:** Si lanzábamos un cambio en el selector de horarios, el widget nos diría de inmediato si la percepción de facilidad había mejorado.

Este sistema me permitía dejar de ser un diseñador que "supone" para convertirme en uno que "escucha" a escala, asegurando que el backlog de oportunidades estuviera siempre vivo y basado en evidencia empírica.

#### La arquitectura de la confianza: Hipótesis y beneficios de negocio

Como **Product Designer**, mi responsabilidad era blindar estas propuestas ante los stakeholders, y para ello utilicé un marco de hipótesis riguroso. No presenté "pantallas", presenté una apuesta de valor:

> **Hipótesis Central:** "Si unificamos todos los resultados, el historial médico y la gestión de citas en un solo portal rediseñado (`Mi Portal Paciente ABC v2.0`), entonces la satisfacción del paciente aumentará y las llamadas de soporte disminuirán, porque habremos eliminado la fricción cognitiva de navegar entre múltiples plataformas inconexas."

Esta forma de razonar permitió al equipo de dirección ver que cada hora de diseño invertida tenía un retorno claro en la **eficiencia operativa**. No estábamos diseñando por vanidad; estábamos diseñando para reducir el volumen de llamadas innecesarias al Call Center y para aumentar la tasa de conversión en servicios de alta rentabilidad como las consultas con especialistas. Cada iniciativa estaba mapeada a una Persona: el Portal v2.0 para la tranquilidad de **Elena**, el selector optimizado para la eficiencia de **Carlos**, y la gestión familiar para el alivio de **Sofía**. Al final de esta fase de ideación, el camino estaba trazado, pero la pregunta más difícil seguía en el aire: con recursos limitados y expectativas altas, ¿por dónde empezamos realmente?

#### GOBERNANZA Y PRIORIZACIÓN: EL ARTE DE DECIDIR QUÉ VA PRIMERO

La lista de iniciativas era sólida, pero la tensión en la sala de juntas era palpable cuando llegó el momento de hablar de plazos y recursos. Tenía frente a mí un conflicto clásico de producto: la urgencia técnica de arreglar el visor de imágenes chocaba frontalmente con el deseo de marketing de lanzar la gestión familiar. En la siguiente fase, revelaré cómo utilicé el **Scoring RICE** para mediar en esta batalla de egos y cómo logramos que la primera piedra del roadmap no fuera la más fácil de construir, sino la que más riesgo eliminaba para el futuro del proyecto.

---

### Parte 3: Gobernanza y Priorización El Arte de Decidir Qué Va Primero

Teníamos sobre la mesa una lista de deseos, no un plan de producto. Tras semanas de ideación estratégica, la sala de juntas del Centro Médico ABC estaba cargada de una tensión predecible: Marketing quería lanzar la "Gestión Familiar" para capturar nuevos segmentos, mientras que el equipo de Operaciones imploraba por arreglar la fragmentación del portal de resultados que saturaba el Call Center. Como responsable del diseño, sabía que si permitía que el roadmap se construyera basándose en quién gritaba más fuerte, terminaríamos con un producto inconsistente y una deuda técnica impagable. Mi labor en ese momento no fue dibujar pantallas, sino **articular la gobernanza** necesaria para que cada hora de desarrollo se invirtiera donde realmente moviera la aguja para el paciente.

#### LA OBJETIVIDAD COMO ANTÍDOTO AL CAOS: EL MÉTODO RICE

Para despejar la subjetividad de la sala, decidí implementar un sistema de puntuación que no dejara lugar a interpretaciones emocionales. Utilicé el **Scoring RICE** (Reach, Impact, Confidence, Effort) como mi principal herramienta de mediación. No lo presenté como una fórmula matemática fría, sino como un marco de conversación para inyectar realismo en la estrategia. Mi razonamiento fue que cada iniciativa debía ser diseccionada bajo cuatro lentes críticos:

*   **Reach (Alcance):** ¿A cuántos pacientes afectaría realmente esta mejora en un trimestre? Aquí los datos de GA4 fueron implacables: la consulta de resultados era la función más utilizada, superando por mucho a cualquier otra iniciativa nueva.
*   **Impact (Impacto):** ¿Cuánto aliviaría esta solución el dolor del usuario? Aquí es donde defendí la experiencia de **Elena**. Si unificábamos los resultados, el impacto en su tranquilidad y en la reducción de fricción operativa sería masivo.
*   **Confidence (Confianza):** ¿Qué tan seguros estábamos de que la solución funcionaría? Gracias a las pruebas A/B donde vimos un incremento del 18% en el CTR de ciertos flujos, nuestra confianza en las optimizaciones de interfaz era del 90%, mientras que las nuevas funcionalidades aún estaban en terreno de hipótesis.
*   **Effort (Esfuerzo):** Aquí invité a los líderes técnicos a la mesa. Necesitábamos saber cuántas "personas-mes" costaría integrar, por ejemplo, el visor de imágenes Vue PACS.

Este ejercicio transformó la discusión. Ya no se trataba de qué idea era "más bonita", sino de cuál tenía el mejor retorno de inversión en términos de experiencia de usuario (UX) y viabilidad técnica.

#### EVALUANDO EL IMPACTO: MÁS ALLÁ DE LAS MÉTRICAS DE VANIDAD

Al evaluar el componente de 'Impacto', me negué a utilizar métricas genéricas. Basándome en la auditoría forense que realizamos previamente, identifiqué que el verdadero impacto residía en la **reducción de la fragmentación**. Teníamos un problema persistente: los pacientes se perdían entre `misaludabc` y `milaboratorio`. 

> "El impacto no se mide solo en nuevas altas, sino en cuántas veces evitamos que un paciente tenga que llamar al hospital porque no encuentra su estudio de imagenología."

Defendí que la unificación de resultados médicos debía ser la prioridad cero. Al cruzar los hallazgos cualitativos de los Paneles de Pacientes con los datos de abandono en el portal, demostré que el impacto de resolver esta deuda de usabilidad superaba cualquier beneficio de marketing a corto plazo. Si el núcleo de la promesa digital —entregar información de salud— estaba roto, ninguna funcionalidad accesoria iba a salvar la reputación de la plataforma.

#### LA SINERGIA TÉCNICA: EL FILTRO DE LA VIABILIDAD

La priorización no es un proceso que el diseñador haga en aislamiento. Me senté con los arquitectos de sistemas para interrogar la viabilidad de nuestras ambiciones. Descubrimos, por ejemplo, que la "Gestión Familiar" —aunque era una joya en términos de UX para perfiles como **Sofía**— requería una reestructuración profunda de la base de datos y de los protocolos de consentimiento legal que no estarían listos en el primer trimestre.

En estas sesiones, mi rol fue aportar el factor de **Confianza**. Cuando los desarrolladores cuestionaban si valía la pena el esfuerzo de rediseñar el selector de horarios para especialistas, yo ponía sobre la mesa el feedback cualitativo: los usuarios no es que no quisieran agendar, es que el sistema actual les hacía sentir que no había disponibilidad cuando sí la había. Mi confianza en que un cambio de diseño resolvería un problema de negocio era alta porque estaba respaldada por la evidencia de los tests de usabilidad. Esta colaboración permitió que el roadmap no fuera solo un deseo de diseño, sino un plan de ingeniería blindado.

#### NEGOCIANDO EL CORTO PLAZO: EL TRIUNFO DE LA UTILIDAD SOBRE LA NOVEDAD

La batalla final se libró al definir el horizonte de "Corto Plazo" (Q4 2022 - Q1 2023). Tuve que rechazar propuestas de funcionalidades experimentales para blindar el presupuesto hacia la **Optimización del Agendamiento de Especialistas** y la **Claridad de Acceso al Portal**. 

Mi argumento fue estratégico: no podíamos construir el segundo piso de una casa cuyos cimientos tenían grietas. Si el SUS (System Usability Scale) nos daba un 82/100, era una excelente nota, pero ese 18% restante estaba concentrado en puntos de fricción críticos que afectaban la conversión de servicios de alta rentabilidad para el hospital. Prioricé estas iniciativas porque resolvían problemas que afectaban al 80% de los usuarios recurrentes. El roadmap empezó a tomar forma no como una línea recta, sino como una serie de ciclos iterativos donde primero sanábamos la experiencia base antes de intentar innovar con telemedicina integrada o aplicaciones nativas.

#### REFLEXIÓN SOBRE LA RESPONSABILIDAD ESTRATÉGICA

Como diseñador senior, aprendí que nuestra mayor contribución al negocio a veces es decir "todavía no". Priorizar en un ecosistema de salud es un ejercicio de empatía aplicada y ética profesional. Cada decisión de dejar una funcionalidad para el próximo año significa que un grupo de usuarios seguirá enfrentando una dificultad por unos meses más. Por eso, mi enfoque fue siempre minimizar ese daño, eligiendo las batallas que liberaran la mayor carga cognitiva para el paciente en el menor tiempo posible. La gobernanza de producto no es burocracia; es el respeto por el tiempo del desarrollador y la salud del paciente.


Teníamos el plan y el consenso, pero ahora venía el reto de la ejecución: ¿cómo mantienes viva esta visión cuando los datos del mundo real empiezan a llegar tras el lanzamiento? La estructura de gobernanza que construimos estaba a punto de enfrentarse a su prueba de fuego. En la siguiente fase, revelaré cómo transformé este plan estático en un **Roadmap Vivo**, donde los horizontes de innovación se ajustaban en tiempo real a medida que el comportamiento de los pacientes en la plataforma nos obligaba a pivotar nuestras certezas.

---

### Parte 4: El Roadmap Vivo Horizontes de Innovación y Ejecución Iterativa

#### El riesgo de la inercia post-lanzamiento

Una plataforma digital en el sector salud es un organismo vivo; si deja de evolucionar, empieza a morir el día del despliegue. Tras establecer el marco de gobernanza, mi mayor temor era que el entusiasmo inicial se diluyera en la operación diaria y que el producto se volviera estático. Teníamos un SUS de 82/100 y un incremento del 18% en el CTR, pero los datos de **Google Analytics 4** y los mapas de calor de **Hotjar** ya empezaban a susurrar nuevas fricciones. Mi razonamiento fue claro: no podíamos permitir que el éxito del lanzamiento nos cegara ante la deuda de usabilidad que aún arrastrábamos.

Para evitar este estancamiento, transformé el plan de trabajo en un **Roadmap Vivo**. No se trataba de un cronograma rígido con fechas de entrega inamovibles —eso en un entorno hospitalario es una receta para el fracaso—, sino de una brújula estratégica. Articulé este roadmap para que fuera capaz de pivotar. Si una prueba A/B nos demostraba que una hipótesis era errónea, el roadmap debía tener la flexibilidad de absorber ese aprendizaje y reconfigurarse. Mi rol aquí dejó de ser el de quien dibuja pantallas para convertirme en el estratega que decide qué batallas pelear para proteger la calidez de la atención del Centro Médico ABC en el ecosistema digital.

#### La arquitectura de los tres horizontes temporales

Para gestionar las expectativas de los stakeholders y mantener el foco del equipo de desarrollo, estructuré la visión de futuro en tres horizontes temporales bien definidos. Esta segmentación no era arbitraria; respondía a la urgencia de los hallazgos y a la complejidad técnica de las soluciones.

1.  **Corto Plazo (Q4 2022 - Q1 2023):** El foco absoluto fue la "limpieza post-lanzamiento". Aquí prioricé resolver los puntos de dolor más críticos que el monitoreo en tiempo real nos estaba arrojando. No buscábamos innovar, sino perfeccionar lo que ya estaba en manos del paciente.
2.  **Mediano Plazo (Q2 - Q3 2023):** Aquí el objetivo cambió hacia la autonomía. Sabíamos que para que la plataforma fuera realmente valiosa, debía permitir que el paciente gestionara no solo su salud, sino la de su entorno. Es el horizonte de la expansión de capacidades.
3.  **Largo Plazo (Q4 2023 en adelante):** Este es el espacio de la innovación disruptiva. Aquí es donde proyectamos la App Nativa y la integración total de la telemedicina, preparando al CM ABC para liderar la vanguardia digital en los próximos años.

Esta estructura me permitió blindar al equipo de diseño y desarrollo de las "ideas brillantes" de último minuto que suelen surgir en las juntas directivas. Si una propuesta no encajaba en los objetivos del horizonte actual, se enviaba al **Backlog de Oportunidades** para ser evaluada bajo el mismo rigor que las demás.

#### Horizonte 1: Sanar la fricción inmediata

Al analizar los informes de analítica del primer trimestre tras el rediseño, identifiqué una anomalía preocupante: una tasa de abandono inusualmente alta en el **Flujo de Agendamiento de Citas con Especialistas**. Los pacientes llegaban al paso de selección de horario, pero muchos no terminaban la transacción. 

Diagnostiqué que el problema residía en la visualización de la disponibilidad en dispositivos móviles. El selector de horarios era denso y confuso; los pacientes no lograban distinguir rápidamente entre los horarios disponibles y los bloqueados, lo que generaba una carga cognitiva innecesaria en un momento de vulnerabilidad.

*   **La Maniobra:** Rediseñé la interfaz del calendario priorizando la legibilidad en pantallas pequeñas. Introduje estados de color más contrastados y refiné los mensajes de error para que fueran guías contextuales, no solo avisos de falla.
*   **Unificación de Percepción:** Otro problema crítico era la fragmentación percibida entre "Mi Salud ABC" y el portal de laboratorio. Los usuarios seguían preguntando dónde ver sus placas de rayos X vs. sus análisis de sangre. Ataqué esto desde el **microcopy**. Revisé cada etiqueta en la homepage para comunicar de forma inequívoca que el portal era ahora un centro de resultados unificado. No era un cambio de código, era un cambio de narrativa que redujo de inmediato las llamadas de duda al Call Center.

#### Horizonte 2: La autonomía y el caso de "Sofía"

Para el mediano plazo, mi enfoque se centró en un segmento de usuarios que habíamos identificado en la investigación inicial pero que no habíamos atendido plenamente: los cuidadores. Personas como "Sofía", que no solo gestionan su salud, sino la de sus padres mayores y sus hijos.

La **Gestión Familiar** se convirtió en la iniciativa estrella de este horizonte. Propuse y diseñé la lógica para permitir vincular perfiles familiares bajo una cuenta principal, siempre bajo protocolos estrictos de consentimiento y legalidad. Esto implicó crear un dashboard familiar donde, de un solo vistazo, se pudieran ver las próximas citas y los resultados pendientes de todos los miembros vinculados.

> El diseño para salud no termina en el paciente individual; se extiende a su red de apoyo. Si facilitamos el trabajo del cuidador, estamos mejorando indirectamente la adherencia al tratamiento del paciente.

Complementamos esta autonomía con el diseño de un **Módulo de Mensajería Segura**. La necesidad de una comunicación asíncrona con el equipo médico era una demanda constante en el feedback cualitativo. Diseñé este canal para que fuera seguro y estuviera integrado en el portal, permitiendo preguntas no urgentes que antes saturaban el Call Center o se perdían en correos electrónicos informales.

#### Horizonte 3: Hacia un ecosistema de vanguardia

En el horizonte de largo plazo, tracé la hoja de ruta para que el Centro Médico ABC dejara de ser "un sitio web que se ve bien en el celular" y se convirtiera en un ecosistema móvil de primer nivel. La limitación del sitio responsivo era evidente: no podíamos ofrecer notificaciones push críticas ni aprovechar la biometría del dispositivo para un acceso rápido y seguro a datos sensibles.

*   **App Móvil Nativa:** Definí los requerimientos para una aplicación que unificara agendamiento, portal y contenido educativo, permitiendo una experiencia *mobile-first* real.
*   **Integración de ConsultABC:** Actualmente, el servicio de telemedicina operaba de forma algo aislada. Mi propuesta en el roadmap fue la integración profunda de la telemedicina dentro del portal unificado. El paciente no debería sentir que "sale" de la plataforma para entrar a una videollamada; la consulta virtual debe ser una extensión natural del flujo de agendamiento y seguimiento médico.

#### El motor de ejecución: RICE y Mini-Sprints

Para que este roadmap no se quedara en una presentación de diapositivas, implementé un protocolo de ejecución basado en la evidencia. Cada vez que una iniciativa del backlog reclamaba su lugar en el roadmap, la sometía a una matriz de priorización **RICE (Reach, Impact, Confidence, Effort)**.

Como diseñador, mi peso en esta negociación era defender el **Impacto** en la UX y, sobre todo, la **Confianza**. Si yo tenía datos de pruebas de usabilidad o feedback directo de los Paneles de Pacientes que respaldaban una idea, el puntaje de Confianza subía, obligando a los stakeholders a considerar esa iniciativa por encima de otras basadas en meras intuiciones.

Una vez priorizada una iniciativa, activábamos un ciclo iterativo de seis pasos que yo lideraba:

1.  **Investigación Adicional:** Si la iniciativa era compleja (como el rediseño del portal), realizaba una inmersión profunda antes de tocar Figma.
2.  **Diseño Iterativo:** Creaba flujos y prototipos de alta fidelidad, expandiendo nuestro Design System según fuera necesario.
3.  **Validación:** Sometía los diseños a pruebas de usabilidad con pacientes reales. Si fallaban, iterábamos antes de pasar a desarrollo.
4.  **Desarrollo Ágil:** El equipo de ingeniería implementaba la mejora en sprints cortos.
5.  **QA y Accesibilidad:** Asegurábamos que el nuevo componente cumpliera con los estándares de salud y accesibilidad.
6.  **Monitoreo y Medición:** Tras el lanzamiento, no pasábamos a lo siguiente sin antes medir el impacto real contra los KPIs definidos.

Este enfoque incremental nos permitió entregar valor constante. En lugar de hacer esperar al paciente un año por un "Gran Portal 2.0", lanzamos mejoras mes a mes: primero el acceso a laboratorio, luego imagenología, luego el nuevo selector de citas. Cada pequeño cambio era una victoria validada por datos.

#### Reflexión final:

El cierre de este proyecto no fue un punto final, sino la entrega de una maquinaria de diseño que ya sabía cómo caminar sola. Al mirar el **Roadmap de Producto Actualizado y Priorizado**, me di cuenta de que mi mayor logro no fueron las interfaces que diseñé, sino el cambio de mentalidad que logramos inyectar en la institución. El Centro Médico ABC pasó de ver su presencia digital como un folleto estático a entenderla como un servicio crítico que requiere cuidado y evolución constante. Aprendí que, en salud digital, la empatía se traduce en rigor técnico: cada minuto que le ahorramos a un paciente en un flujo de citas es un minuto que le devolvemos para cuidar su bienestar. Me voy con la satisfacción de saber que dejamos una plataforma que no solo es funcional, sino que es capaz de aprender y crecer con cada interacción de sus usuarios.

---

