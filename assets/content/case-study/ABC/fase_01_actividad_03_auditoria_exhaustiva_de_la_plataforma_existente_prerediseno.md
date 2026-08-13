# Fase 1: Descubrimiento e Investigación Profunda (Empatizar y Definir)

## Actividad_03_Auditoría Exhaustiva de la Plataforma Existente (Pre-Rediseño)

> Esta actividad constituye el diagnóstico forense del ecosistema digital del Centro Médico ABC antes de su transformación. Se desglosa en cuatro pilares fundamentales: una evaluación heurística basada en los principios de Nielsen para detectar fricciones de usabilidad; pruebas de usabilidad baseline con usuarios reales para establecer métricas de rendimiento (SUS, SEQ, Tasas de Éxito); una auditoría de contenido para evaluar la claridad y relevancia de la información; y un análisis técnico preliminar para identificar limitaciones de infraestructura como la fragmentación de subdominios y la deuda técnica. El objetivo es generar una línea base cuantitativa y cualitativa que justifique estratégicamente las decisiones de diseño posteriores.

### Parte 1: Metodología Heurística y Auditoría Experta

#### El diagnóstico forense como imperativo estratégico

A inicios de 2021, tras cerrar la fase de investigación primaria, me encontré ante un abismo de información. Teníamos los testimonios de los pacientes, sus frustraciones mapeadas y sus expectativas documentadas, pero me faltaba la otra mitad de la ecuación: la realidad técnica y funcional del producto que estábamos a punto de intervenir. Como diseñador responsable del rediseño, sabía que no podía trazar una sola línea en Figma sin antes realizar una disección profunda de lo que el Centro Médico ABC operaba en ese momento. No se trataba de una cuestión estética o de "modernizar" la interfaz por vanidad; necesitaba una base fáctica, una línea base o *baseline* que nos permitiera medir, con rigor científico, si el cambio que íbamos a proponer realmente movería la aguja de la experiencia.

Mi razonamiento en ese momento fue puramente estratégico. Sabía que nos enfrentaríamos a decisiones difíciles y a la resistencia natural al cambio dentro de una institución de salud tan grande. Por ello, decidí que la **Actividad 03: Auditoría Exhaustiva** debía ser un diagnóstico forense. Necesitaba que los hallazgos no fueran opiniones mías, sino violaciones documentadas a principios universales de diseño. Esta auditoría actuaría como un espejo para la organización, revelando sin filtros las debilidades de un ecosistema que, aunque funcional en lo básico, estaba profundamente fragmentado entre el sitio principal y el portal de radiología.

#### La adopción de las 10 Heurísticas de Nielsen

Para garantizar que este análisis fuera objetivo y reproducible, elegí los **10 Principios de Usabilidad de Jakob Nielsen** como mi marco de referencia. En mi experiencia, no hay mejor herramienta para transformar una "sensación de que algo está mal" en un hallazgo técnico accionable. Cada una de estas heurísticas se convirtió en un lente a través del cual observé cada pantalla del sitio `centromedicoabc.com` y del portal `misaludabc.abchospital.com`.

Mi objetivo no era solo encontrar errores, sino categorizarlos para entender la magnitud del problema. Me preguntaba constantemente:
*   **Visibilidad del estado del sistema:** ¿Sabe el usuario en qué parte de este ecosistema fragmentado se encuentra?
*   **Consistencia y estándares:** ¿Por qué el buscador de médicos se comporta de forma distinta a la agenda de laboratorio?
*   **Prevención de errores:** ¿Estamos guiando al paciente o simplemente lanzándole formularios complejos?

Este enfoque me permitió identificar rápidamente los "low-hanging fruit" —esos problemas de usabilidad evidentes que podíamos resolver casi de inmediato—, pero también me obligó a encarar áreas de una complejidad técnica y operativa mucho mayor. Fue el primer paso para dejar de ver el sitio web como una colección de páginas y empezar a verlo como un sistema de servicios interconectados (o, en este caso, desconectados).

#### El rigor del recorrido cognitivo

Más allá de las heurísticas, decidí aplicar una técnica de **Cognitive Walkthrough** o recorrido cognitivo. Para un diseñador senior, el peligro más grande es la "ceguera de experto": uno ya sabe dónde están los botones y cómo funcionan los flujos. Para romper este sesgo, me obligué a navegar la plataforma poniéndome en la piel de un usuario novato, alguien que llega al sitio en un momento de vulnerabilidad o urgencia médica.

Ejecuté este ejercicio centrándome en tres preguntas críticas en cada paso de la interacción:
1.  **¿Sabrá el usuario qué hacer a continuación?** (Intencionalidad)
2.  **¿Sabrá cómo hacerlo?** (Accionabilidad)
3.  **¿Entenderá el feedback que el sistema le devuelve?** (Comprensión)

Este proceso fue revelador. Descubrí bloqueos que para el equipo interno eran invisibles. Por ejemplo, al intentar agendar una cita de laboratorio, la lógica del sistema chocaba frontalmente con el modelo mental del paciente. El sistema exigía datos que el usuario no siempre tenía a mano, y el feedback de error era tan críptico que generaba una fricción inmediata. Este ejercicio no solo documentó fallas, sino que me permitió sentir la frustración que luego veríamos confirmada en las pruebas con usuarios reales.

#### Delimitando un ecosistema fragmentado

El alcance de esta auditoría fue, por diseño, ambicioso. No podíamos limitarnos a la superficie de la *homepage*. Decidí que debíamos auditar el ecosistema digital completo tal como existía a finales de 2020. Esto incluía dos mundos que operaban de forma casi independiente:
*   **El sitio web principal (`centromedicoabc.com`):** Donde evalué el buscador de médicos, la información de servicios clínicos, el agendamiento de laboratorio y la sección de noticias.
*   **El portal de pacientes (`misaludabc.abchospital.com`):** Un sistema basado en un proveedor externo (Carestream MyVue) que se limitaba exclusivamente a resultados de radiología.

Auditar estas dos plataformas simultáneamente puso de manifiesto una **fragmentación crítica**. La inconsistencia visual era el menor de los problemas; el verdadero conflicto era la ruptura en la arquitectura de la información. El usuario se perdía en un laberinto de subdominios y portales con lógicas de navegación opuestas. Mi diagnóstico fue claro desde el inicio: el paciente no percibe al hospital como "departamentos de TI separados", lo percibe como una sola entidad, y nuestra plataforma estaba fallando en proyectar esa unidad.

#### El arsenal técnico y el sistema de severidad

Para que este trabajo no se quedara en un documento estático, utilicé un arsenal de herramientas que facilitaran la colaboración posterior. Implementé **Markup.io** para realizar anotaciones directas sobre la interfaz en tiempo vivo, capturando cada violación heurística en su contexto espacial. Estas capturas luego las consolidé en una base de datos donde cada hallazgo estaba categorizado no solo por la heurística violada, sino por un **Sistema de Calificación de Severidad** que diseñé específicamente para este proyecto:

*   **Cosmético:** Problemas visuales que no impiden la tarea pero afectan la percepción de marca.
*   **Menor:** Fricciones que el usuario puede superar pero que ralentizan el proceso.
*   **Mayor:** Problemas que causan una frustración significativa y pueden llevar al abandono.
*   **Crítico/Bloqueante:** Fallas que impiden totalmente que el usuario complete una tarea esencial (como agendar una cita o ver un resultado).

Esta escala de severidad fue mi herramienta de negociación más valiosa. Me permitió sentarme con los stakeholders y decir: "No estamos discutiendo si el azul es el correcto; estamos discutiendo que tenemos 12 errores críticos que están bloqueando la conversión y saturando el Call Center". Transformé el diseño en una discusión de negocio y eficiencia operativa.

#### Consolidación forense y el "baño de realidad"

El proceso de ejecución no fue solitario. Tras realizar las evaluaciones individuales, convoqué a sesiones de consolidación con el equipo. Fue un ejercicio de rigor intelectual: revisamos cada hallazgo, eliminamos duplicados y debatimos la severidad de cada punto hasta llegar a un consenso técnico. No queríamos un informe de 200 páginas que nadie leyera; queríamos un mapa de ruta accionable.

El resultado final fue un informe detallado que integraba capturas de pantalla con descripciones técnicas precisas y recomendaciones preliminares. Este documento no era solo un entregable; era nuestra armadura para las fases que venían. Al terminar esta parte de la auditoría, sentí que finalmente teníamos un "baño de realidad". Habíamos pasado de las suposiciones a los hechos. Teníamos documentado que la fragmentación no era una percepción, sino una falla estructural de la arquitectura.

Esta fase de diagnóstico experto me dejó una lección clara: en proyectos de esta magnitud, el diseño no empieza dibujando la solución, sino teniendo el coraje de mirar de frente todo lo que está roto. Sin este análisis forense, cualquier rediseño habría sido un ejercicio de vanidad. Con él, teníamos una misión de rescate de la experiencia del paciente perfectamente justificada y priorizada.

> **Insight Senior:** Una auditoría heurística no es una lista de quejas; es un documento de gestión de riesgos. Cada error crítico documentado es un punto de fuga de confianza y de ingresos para la institución. Mi trabajo aquí fue traducir "píxeles mal puestos" a "riesgo operativo".


Con el marco metodológico establecido y la auditoría experta terminada, me encontré con una lista abrumadora de problemas técnicos. Sin embargo, sabía que mi visión como diseñador era solo una parte de la historia. El verdadero peso de la evidencia vendría al confrontar estos hallazgos con la realidad del usuario. Me quedaba una pregunta inquietante: ¿serían los usuarios capaces de navegar este laberinto de subdominios, o descubriríamos que las tasas de éxito eran incluso más bajas de lo que mi análisis experto sugería? Necesitaba poner a prueba la plataforma con pacientes reales para obtener las métricas de línea base que sellarían el destino del rediseño.

---

### Parte 2: Hallazgos Heurísticos y Priorización de Severidad

#### El diagnóstico forense: de la teoría a la disección

Una vez que tuve el marco metodológico de los 10 principios de Nielsen sobre la mesa y el protocolo de pruebas listo, la auditoría dejó de ser un ejercicio de planificación para convertirse en una **intervención forense**. No estaba allí para proponer una capa de pintura o "mejorar el look" del sitio; mi objetivo era identificar con precisión quirúrgica por qué el ecosistema digital del Centro Médico ABC estaba expulsando a los pacientes hacia el Call Center. Cada clic que daba en la plataforma existente se sentía como un obstáculo deliberado. Como diseñador, mi responsabilidad era documentar estas fallas no como simples errores estéticos, sino como barreras sistémicas que degradaban la confianza en una institución de salud de primer nivel.

Inicié el proceso con una **evaluación heurística independiente**, navegando por las áreas críticas que habíamos definido: la homepage, el buscador de médicos y el portal de pacientes. Utilicé **Markup.io** para anotar directamente sobre la interfaz, capturando cada violación de usabilidad en su contexto real. Mi razonamiento era claro: necesitaba un registro visual e irrefutable de la fricción. Posteriormente, volqué estos hallazgos en una matriz de severidad en Excel, categorizando cada problema desde "cosmético" hasta "crítico". Esta rigurosidad no era capricho; era la única forma de forzar una toma de decisiones a nivel directivo. Presentar una lista de "quejas de diseño" es fácil de ignorar, pero presentar un diagnóstico de **riesgo operativo** basado en principios de usabilidad universales es otra historia.

#### El limbo digital: la fragmentación como barrera crítica

El primer hallazgo que clasifiqué como **Severidad Crítica** fue la fractura total de la experiencia entre el sitio principal `centromedicoabc.com` y el portal de pacientes `misaludabc.abchospital.com`. Al realizar los recorridos cognitivos (*Cognitive Walkthroughs*), detecté una violación flagrante del principio de **Consistencia y Estándares**. El usuario, al intentar consultar sus resultados, era literalmente "expulsado" de la navegación principal hacia un subdominio que no solo se veía diferente, sino que funcionaba bajo una lógica distinta.

Esta desarticulación generaba lo que llamé un "limbo digital". El usuario perdía la **Visibilidad del Estado del Sistema**: no sabía si seguía dentro del ecosistema del hospital o si había sido redirigido a un sitio de terceros. Esta fragmentación no era un detalle menor; obligaba al paciente a re-aprender interfaces, lidiar con diferentes sistemas de inicio de sesión y, en última instancia, incrementaba la carga cognitiva de forma insostenible. En un contexto de salud, donde el usuario a menudo interactúa con la plataforma bajo estrés o ansiedad, esta falta de fluidez es una falla sistémica que termina por romper el embudo de conversión digital.

#### La promesa rota: el acceso incompleto a resultados médicos

Al profundizar en el portal `misaludabc.abchospital.com`, me encontré con una violación crítica de la **Coincidencia entre el sistema y el mundo real**. El modelo mental de un paciente es sencillo: "Si me hice estudios en el hospital, los resultados deben estar en mi portal". Sin embargo, la plataforma solo mostraba resultados de radiología. Esta limitación técnica, derivada de que el sistema era un proveedor externo (Carestream MyVue), chocaba frontalmente con la expectativa básica del usuario.

Narro esto desde la frustración que sentí al ponerme en los zapatos del paciente: tras realizarse estudios de laboratorio, la **tasa de éxito al intentar consultarlos en línea era del 0%**. No es que fuera difícil; es que era imposible. Este hallazgo lo marqué como una severidad crítica porque rompe la promesa fundamental de un portal de salud. El impacto es directo y costoso: cada paciente que no encuentra sus resultados en línea genera una llamada al soporte técnico o al Call Center, sobrecargando la operación física del hospital por una deficiencia digital evitable. Mi trabajo fue traducir este "error de contenido" en una métrica de ineficiencia operativa.

#### El agendamiento secuestrado: flexibilidad vs. rigidez

El módulo de citas médicas fue otro punto de dolor que clasifiqué con **Severidad Mayor**. Al auditar el flujo de agendamiento, descubrí una violación severa de la **Flexibilidad y Eficiencia de Uso**. El sistema estaba, en la práctica, secuestrado por el área de laboratorio clínico. Si un paciente quería agendar una cita con un cardiólogo o un pediatra, la plataforma se convertía en un muro. La **tasa de éxito para agendar con especialistas en línea era del 0%**.

Esta rigidez transformaba lo que debería ser una herramienta transaccional en un folleto estático con un número telefónico. Además, la plataforma carecía de funciones básicas de **Prevención de Errores** y autonomía: no había forma de modificar o cancelar una cita de manera autosuficiente. El sistema castigaba al usuario por intentar ser independiente, obligándolo a regresar al canal telefónico para cualquier gestión mínima. Esta falta de control sobre las propias citas médicas no solo es una falla de usabilidad; es una pérdida de oportunidad de negocio masiva para el hospital.

#### La erosión de la confianza: estética y credibilidad médica

Abordé la violación del principio de **Estética y Diseño Minimalista** no desde una perspectiva artística, sino desde la psicología de la confianza. La interfaz del sitio principal y del portal de radiología se percibía visualmente como una reliquia de la década anterior. En mis sesiones de análisis experto, documenté cómo esta obsolescencia visual proyectaba una imagen de descuido que contrastaba peligrosamente con la excelencia médica del Centro Médico ABC.

> **Insight Senior:** En el sector salud, la interfaz *es* la cara de la institución. Si la plataforma digital parece descuidada o anticuada, el usuario cuestiona inconscientemente la modernidad de los quirófanos o la precisión de los diagnósticos. La UI no es solo estética; es un factor de seguridad percibida.

Esta "deuda estética" fue clasificada como una severidad mayor porque erosionaba el engagement. Un diseño que no respeta las jerarquías visuales o que utiliza un lenguaje visual incoherente genera una fricción silenciosa que hace que el usuario quiera salir del sitio lo antes posible. No se trata de que el sitio sea "bonito", se trata de que el diseño debe estar a la altura de la reputación de la marca que representa.

#### El buscador de médicos: una prueba de paciencia

Finalmente, analicé la "findability" de los especialistas a través del buscador de médicos. El proceso de encontrar un doctor específico y su información de contacto tomaba, en promedio, **2:30 minutos**. Este tiempo es una eternidad en términos digitales y se debía principalmente a la falta de filtros avanzados y a una arquitectura de información deficiente.

El buscador carecía de filtros por campus, especialidad o disponibilidad inmediata, y lo que es peor, estaba totalmente desconectado del (limitado) sistema de agendamiento. Identifiqué esto como una barrera crítica en el embudo de conversión: cada paso adicional y cada segundo de espera en la búsqueda de un médico es un punto donde el paciente puede abandonar el proceso y buscar otra opción hospitalaria. Un buscador ineficiente es, en esencia, una fuga de ingresos.

#### La sentencia de muerte: el SUS de 45/100

Al consolidar todos estos hallazgos, la conclusión fue devastadora pero necesaria. Las métricas de línea base que obtuve no dejaban lugar a dudas: el **SUS (System Usability Scale) de 45/100** era, para fines prácticos, una sentencia de muerte para la plataforma actual. En la escala SUS, cualquier puntaje por debajo de 68 se considera pobre; un 45 es una señal de alarma crítica que indica que la plataforma no solo es difícil de usar, sino que activamente frustra al usuario.

Esta auditoría exhaustiva funcionó como un "espejo sin filtros" para los stakeholders del hospital. Ya no hablábamos de opiniones sobre si el azul era el correcto o si el logo debía ser más grande. Teníamos datos: tasas de éxito del 0% en tareas clave, tiempos de tarea excesivos y una violación sistemática de los principios básicos de diseño de interacción. Este diagnóstico fue la base fáctica que utilicé para blindar el proyecto de rediseño: ya no era una propuesta de mejora, era una necesidad operativa urgente para mitigar el riesgo de abandono digital y recuperar la confianza del paciente.

#### Próximo paso:

A pesar de la contundencia de mis hallazgos heurísticos, sabía que los datos de un experto a veces no son suficientes para mover las estructuras más rígidas de una organización. Me quedaba una carta decisiva por jugar: necesitaba que los propios directivos vieran, en tiempo real, cómo un paciente real se perdía en ese laberinto de subdominios. La pregunta ya no era qué estaba roto, sino qué tan profundo era el dolor del usuario al intentar usarlo, lo que me llevó a diseñar la fase más cruda de este diagnóstico: la **PLANIFICACIÓN DE PRUEBAS DE USABILIDAD BASELINE**.

---

### Parte 3: Planificación de Pruebas de Usabilidad Baseline

#### El imperativo de la evidencia conductual

La evaluación heurística me había proporcionado una lista técnica de fallos, pero como diseñador de producto, sabía que los informes de expertos tienen un límite de persuasión. Podía señalar que la falta de consistencia entre `centromedicoabc.com` y el subdominio de radiología violaba los principios de Nielsen, pero para la mesa directiva del hospital, eso seguía siendo una opinión técnica. Necesitaba transformar esas "violaciones heurísticas" en dolor humano cuantificable. La heurística me dio el diagnóstico del "qué" estaba roto; ahora necesitaba las pruebas baseline para determinar el "cuánto" dolía y, sobre todo, el "por qué" desde la perspectiva visceral del paciente.

Mi razonamiento estratégico fue claro: no podíamos avanzar hacia una fase de ideación sin establecer un "Kilómetro Cero". Si no medíamos con precisión el desastre actual, nunca podríamos demostrar matemáticamente el éxito del rediseño final. Esta fase de planificación no fue un trámite administrativo, sino la construcción de una línea base inobjetable que serviría como seguro de vida para el equipo de diseño. Decidí que el entorno de prueba debía ser la plataforma en producción real. Nada de prototipos controlados ni entornos de *staging* pulidos; quería que los usuarios se enfrentaran a la fragmentación real, a los tiempos de carga actuales y a los enlaces rotos que los pacientes sufrían a diario.

#### Construyendo el termómetro: Métricas y Objetivos

Para que esta investigación tuviera validez estadística y comparativa, diseñé un marco de medición basado en tres pilares fundamentales: **efectividad, eficiencia y satisfacción**. No me bastaba con saber si el usuario lograba completar la tarea; necesitaba saber cuánta "sangre" le costaba hacerlo. Articulé los objetivos de la prueba para extraer datos que pudieran compararse "manzanas con manzanas" en el futuro:

*   **Efectividad (Tasas de éxito):** Definí criterios binarios de éxito. O el usuario encontraba al médico, o no lo hacía. Esto nos daría el porcentaje crudo de éxito por tarea.
*   **Eficiencia (Tiempo en tarea):** Decidí cronometrar cada interacción. En un entorno de salud, el tiempo es ansiedad. Un proceso de agendamiento que toma más de cuatro minutos es un proceso fallido.
*   **Satisfacción (Percepción subjetiva):** Aquí es donde introduje el rigor metodológico. Implementé la **SEQ (Single Ease Question)** de 7 puntos, que el usuario debía responder inmediatamente después de cada tarea. Esto capturaba la frustración fresca, antes de que el sesgo de finalización suavizara el recuerdo. Para la percepción global, elegí el **SUS (System Usability Scale)** de 10 preguntas al finalizar la sesión. Sabía, por auditorías previas, que la plataforma rondaba un puntaje de 45/100, y necesitaba confirmar esa cifra con una muestra controlada para que nadie pudiera cuestionar la necesidad del rediseño.

> **Insight Senior:** Elegir el SUS no fue una decisión estética. Es una herramienta de comunicación con el negocio. Cuando le dices a un director que su plataforma tiene un 45 sobre 100, le estás dando un número que entiende perfectamente: reprobado. Es una métrica que transforma la usabilidad en un KPI de rendimiento.

#### La arquitectura del guion: Tareas de alto impacto

La selección de tareas no fue aleatoria. Me sumergí en los datos del brief y en los hallazgos de la investigación previa para identificar los flujos que concentraban el mayor valor de negocio y, simultáneamente, la mayor fricción detectada. Diseñé cuatro escenarios realistas que obligarían al usuario a navegar por las zonas más oscuras del ecosistema actual:

1.  **Localización de especialista:** "Usted necesita un cardiólogo en el campus Observatorio. Encuentre su nombre y un número de teléfono para contactarlo". Esta tarea ponía a prueba el buscador de médicos, que sospechábamos carecía de filtros efectivos.
2.  **El calvario del agendamiento:** "Intente agendar una cita para un estudio de laboratorio". Aquí buscaba validar la hipótesis de que el proceso era confuso y limitado, obligando a menudo al usuario a abandonar la web para llamar por teléfono.
3.  **El laberinto de resultados:** "Acceda a sus resultados de un estudio de rayos X". Esta era la tarea crítica de integración. Obligaba al usuario a salir del sitio principal y entrar en el subdominio `misaludabc.abchospital.com`. Era el momento de medir el impacto real de la fragmentación de subdominios.
4.  **Búsqueda de servicios críticos:** "Encuentre información detallada sobre los servicios de maternidad". Una tarea de contenido puro para evaluar la jerarquía de la información y la facilidad de navegación (*findability*).

Cada escenario fue redactado para evitar sesgar al usuario. No les decía "haga clic en el botón de médicos", sino "encuentre una forma de contactar a un especialista". Quería ver su comportamiento natural, sus errores y sus rutas inesperadas.

#### El protocolo forense: Metodología y Herramientas

Para la ejecución, opté por un enfoque de investigación mixto: **pruebas de usabilidad moderadas de forma remota**. Elegí esta modalidad por dos razones: primero, la seguridad y comodidad del paciente en un contexto post-pandémico; segundo, la posibilidad de observar al usuario en su entorno natural, usando su propio hardware y conexión.

Designé **Google Meet** como nuestro centro de operaciones. No solo por la facilidad de grabación y compartición de pantalla, sino porque me permitía observar las micro-expresiones de frustración. Cuando un usuario frunce el ceño o suspira frente a un formulario, tienes un dato cualitativo que ninguna métrica cuantitativa puede reemplazar. Implementé el protocolo **"think-aloud" (pensar en voz alta)** de manera estricta. Instruí a los participantes para que verbalizaran cada pensamiento, duda o molestia. "Siento que me perdí", "No sé si este botón me sacó del sitio", "Esto parece de otro hospital". Esas frases son las que luego usaría para dar vida a los números en el informe final.

Recluté a **7 participantes**, asegurando una mezcla diversa entre pacientes recurrentes y familiares que realizaban trámites para otros. Este número no fue al azar; la literatura de usabilidad sugiere que con 5 a 8 usuarios se detectan el 85% de los problemas de usabilidad más graves. No buscábamos significancia estadística masiva, sino profundidad diagnóstica.

#### El valor estratégico del "Kilómetro Cero"

Al finalizar la planificación, sentí que teníamos entre manos algo más que un plan de pruebas; teníamos un protocolo forense. Mi enfoque como diseñador senior fue blindar cada paso. Si ingeniería cuestionaba más adelante por qué necesitábamos unificar los subdominios, yo tendría grabaciones de usuarios reales confundidos en la transición. Si el equipo de contenido dudaba sobre simplificar el lenguaje técnico, yo tendría los puntajes SEQ de la tarea de maternidad demostrando la incomprensión.

Esta planificación me permitió pasar de una postura defensiva —explicando por qué el diseño actual era "feo"— a una postura ofensiva y estratégica: demostrando cómo la plataforma actual estaba fallando activamente en los objetivos de negocio del Centro Médico ABC. Estábamos listos para encender las cámaras y dejar que los usuarios hablaran.

#### Próximo paso:

Con el guion de prueba validado y los 7 participantes confirmados, el escenario estaba listo para la confrontación más cruda del proyecto. Sabía que las sesiones de Google Meet no serían fáciles de presenciar para los stakeholders, pero era necesario que el dolor del usuario fuera visible. El siguiente desafío era procesar ese torrente de frustración en tiempo real y transformarlo en las **EJECUCIÓN Y MÉTRICAS DE RENDIMIENTO (BASELINE)** que definirían el éxito o fracaso de toda nuestra estrategia de rediseño.

---

### Parte 4: Ejecución y Métricas de Rendimiento Baseline

#### El peso del silencio en la moderación

La primera sesión de pruebas moderadas fue el momento en que las suposiciones teóricas se estrellaron contra la realidad del paciente. Sentado frente a la pantalla de Google Meet, observando a través de la cámara a una mujer de 45 años —una de nuestros siete participantes reclutados— que intentaba desesperadamente encontrar sus resultados de laboratorio, sentí esa punzada de realidad que ningún benchmark puede replicar. El protocolo de "pensar en voz alta" (*think-aloud*) nos devolvía un flujo constante de dudas, pero era el silencio, esos segundos de parálisis frente a un botón que no hacía lo que ella esperaba, lo que realmente diagnosticaba la gravedad del problema.

Mi labor como diseñador en esas sesiones no fue solo observar, sino realizar un **análisis cuantitativo y cualitativo en tiempo real**. Mientras el usuario navegaba, yo tabulaba cada vacilación y cada error de clic. No buscábamos solo saber si podían terminar la tarea; buscábamos entender la carga cognitiva que les imponía. El contraste era brutal: el hospital proyectaba excelencia médica, pero su interfaz digital proyectaba abandono. Al cerrar la séptima sesión y volcar los datos en mis hojas de cálculo para el análisis de la línea base (*baseline metrics*), la magnitud del desastre empezó a tomar forma numérica. Habíamos pasado de la percepción subjetiva a la evidencia forense.

#### La autopsia del SUS: Un 45 que dictó sentencia

Cuando procesé las respuestas del cuestionario **System Usability Scale (SUS)** al final de las sesiones, el resultado fue una cifra que detuvo cualquier debate estético posterior: **45 sobre 100**. En el mundo del diseño de producto, un puntaje SUS de 45 no es solo "bajo"; es un fracaso estructural. Técnicamente, cualquier cifra por debajo de 68 se considera por debajo del promedio, y un 45 sitúa a la plataforma en el rango de "Pobre" o una calificación de "F".

Este número se convirtió en mi herramienta política más potente. Mi razonamiento estratégico fue utilizar este 45 como el argumento definitivo frente a la dirección del Centro Médico ABC. Ya no se trataba de mi opinión como experto contra la de un stakeholder; era el veredicto estandarizado de sus propios pacientes. Un 45 significa que la plataforma no solo es difícil de usar, sino que genera una resistencia activa en el usuario. Es un sistema que la gente usa porque no tiene otra opción, no porque sea funcional. Este dato blindó el proyecto contra cualquier intento futuro de hacer un simple "maquillaje" visual; la cifra exigía una reconstrucción desde los cimientos.

#### La anatomía del fracaso: Donde el 0% es la norma

El análisis de las **Tasas de Éxito (Task Success Rates)** reveló los abismos más profundos de la experiencia. Hubo dos tareas críticas que arrojaron un **0% de éxito absoluto**:

*   **Acceso a resultados de laboratorio en línea:** Los usuarios entraban al portal con la expectativa natural de encontrar su historial clínico completo, pero se encontraban con una pared. La funcionalidad simplemente no existía en el portal "Mi Salud ABC", que estaba limitado exclusivamente a radiología. Ver a los participantes buscar repetidamente en menús vacíos fue la prueba más clara de la desconexión entre el modelo mental del paciente y la arquitectura del sistema.
*   **Agendamiento de cita con especialista:** A pesar de ser la necesidad primaria de cualquier paciente, la plataforma no permitía completar este flujo. El 100% de los usuarios falló porque el sistema los obligaba a salir del entorno digital y recurrir al teléfono.

Estas métricas no solo indicaban una falta de funciones; indicaban una traición a la promesa de servicio del hospital. El hecho de que el acceso a resultados de radiología —la única función real del portal— tuviera apenas un **50% de éxito** debido a bloqueos en el inicio de sesión o errores de navegación, demostraba que incluso lo que "estaba ahí" no funcionaba para la mitad de la población.

#### El éxito costoso: Cuando 2:30 minutos son una eternidad

Incluso en las tareas donde los usuarios lograban el éxito, el coste era inaceptable. Analicé el **Tiempo en Tarea (Time on Task)** para una de las acciones más básicas: encontrar la información de contacto de un médico. El promedio fue de **2:30 minutos**. En un contexto digital moderno, dos minutos y medio para encontrar un número de teléfono es una eternidad que solo se explica por una arquitectura de la información fragmentada y un buscador ineficiente.

Este dato lo crucé con la métrica **SEQ (Single Ease Question)**, que administramos inmediatamente después de cada tarea. El promedio de **3.5 sobre 7** para esta tarea de búsqueda confirmó que, aunque el 70% lograba encontrar al médico, lo hacían con una percepción de dificultad alta. No era un proceso fluido; era una lucha. Para el agendamiento de laboratorio, el tiempo subía a **4:15 minutos**, con un éxito de apenas el 60%. Mi diagnóstico fue claro: la plataforma estaba castigando al usuario por intentar ser autosuficiente. Cada minuto extra en la web era un minuto más de ansiedad para un paciente que probablemente ya estaba lidiando con una preocupación de salud.

#### La ceguera del sistema y la fricción invisible

Al analizar los hallazgos cualitativos en Miro, agrupando las observaciones de las siete sesiones, identifiqué lo que llamé la "ceguera del sistema". El hospital operaba bajo la premisa de que tenía un portal de pacientes, pero para el usuario, ese portal era una cáscara vacía. La fragmentación entre `centromedicoabc.com` y `misaludabc.abchospital.com` creaba una fricción invisible pero constante. Los usuarios no entendían por qué debían cambiar de dominio o por qué sus credenciales no funcionaban de manera unificada.

> **Insight Senior:** El error estratégico del Centro Médico ABC no fue tecnológico, sino de perspectiva. Construyeron silos basados en sus proveedores (Carestream para radiología, otros para laboratorio) en lugar de construir una experiencia basada en el viaje del paciente. Mi trabajo con estas métricas fue demostrar que la arquitectura técnica estaba dictando —y arruinando— la experiencia del usuario.

Esta auditoría de métricas baseline no fue un ejercicio académico; fue una toma de posición. Establecimos que el éxito del rediseño no se mediría por lo "bonito" del nuevo portal, sino por nuestra capacidad de mover ese SUS de 45 a un rango de excelencia y de convertir esos 0% en flujos de autoservicio efectivos.

#### Blindando el futuro desde el dato

Al finalizar la tabulación y el análisis de rendimiento, sentí que finalmente teníamos el control de la narrativa del proyecto. Teníamos una línea base sólida y dolorosa. Si en el futuro algún stakeholder sugería mantener la estructura actual por "ahorro de costes", yo solo tendría que mostrar la tasa de éxito del 0% en agendamiento de especialistas. Los datos no tienen sentimientos, y en un entorno hospitalario donde la precisión es ley, hablar el lenguaje de las métricas nos dio una autoridad inmediata.

Habíamos mapeado el dolor y le habíamos puesto números. Sin embargo, los números solo nos decían *qué* estaba pasando y *cuánto* fallaba. Para entender el *cómo* debíamos reconstruir el mensaje, necesitaba sumergirme en las palabras. La siguiente fase de mi diagnóstico debía abandonar las hojas de cálculo para entrar en la semántica: era momento de realizar el **Análisis de Contenido** para descubrir si, además de una interfaz rota, estábamos hablando un lenguaje que los pacientes simplemente no podían entender.

---

### Parte 5: Auditoría de Contenido y Calidad de Información

#### De la frialdad del dato a la disección del mensaje

Cuando las métricas de rendimiento me arrojaron aquel 0% de éxito en el agendamiento de especialistas, sentí un golpe de realidad que ninguna gráfica podía suavizar. Los números me estaban gritando que algo andaba mal, pero no me decían exactamente qué. Como diseñador, entendí en ese momento que la usabilidad no termina donde acaba el flujo de clics; la usabilidad real vive en la capa semántica. Podíamos tener el botón más brillante y accesible del mundo, pero si el texto que lo rodeaba era incomprensible, el usuario seguiría bloqueado. 

Decidí que no podíamos avanzar al rediseño sin antes realizar una autopsia del lenguaje. Necesitaba pasar de la hoja de cálculo al análisis de contenido para descubrir si la plataforma hablaba un idioma que el paciente, en un momento de vulnerabilidad, pudiera procesar. En salud, el contenido no es solo información; es una herramienta de calma o una fuente de ansiedad. Mi razonamiento fue claro: debíamos auditar si estábamos construyendo un puente o una barrera de palabras.

#### El mapeo del "monstruo" con Screaming Frog

Para entender la magnitud de lo que enfrentábamos, no me servía una navegación manual y superficial. Necesitaba ver el esqueleto completo de la plataforma. Utilicé **Screaming Frog SEO Spider** para ejecutar un rastreo sistemático tanto de `centromedicoabc.com` como de `misaludabc.abchospital.com`. No fue un ejercicio de SEO, fue una maniobra de **Content Inventory** forense. 

El resultado fue una base de datos masiva en Excel que me permitió visualizar, por primera vez, la jerarquía real y el volumen de URLs, títulos y metadatos que componían el ecosistema. Al filtrar estos datos, logré categorizar las secciones críticas: la homepage, el buscador de médicos, las páginas de servicios clínicos y el portal de radiología. Este inventario fue la única forma de dimensionar el desorden informativo; encontramos cientos de páginas con jerarquías confusas que competían entre sí por la atención del usuario. Fue el mapa necesario para saber exactamente qué piezas del rompecabezas estaban rotas antes de intentar armar uno nuevo.

#### La auditoría cualitativa: cinco lentes contra la subjetividad

Con el inventario en mano, el siguiente paso no fue leer por leer, sino aplicar un rigor metodológico que eliminara cualquier sesgo personal. Diseñé una **Auditoría Cualitativa de Contenido** basada en un checklist de cinco criterios implacables: claridad, concisión, precisión, tono apropiado para pacientes y legibilidad. 

Navegué por las páginas más críticas del inventario y califiqué cada una bajo estos parámetros. Fue un proceso agotador pero revelador. Me encontré con una realidad común en instituciones de alta especialidad: el sitio parecía escrito por médicos para ser leído por otros médicos. Evalué textos densos, párrafos interminables y una estructura de información que ignoraba por completo la **carga cognitiva** de un paciente que busca respuestas rápidas ante una urgencia. Cada página recibía una calificación que documentaba no solo si la información estaba ahí, sino si era realmente "accionable" para un humano promedio.

> **Insight Senior:** En el diseño de productos de salud, el contenido es la interfaz más crítica. Si el tono no es empático y la información no es digerible, el diseño visual más moderno se vuelve irrelevante. La claridad textual es, en sí misma, una función de accesibilidad.

#### La barrera de la jerga y el "agujero negro" administrativo

Uno de los hallazgos más dolorosos de esta auditoría fue confirmar que la terminología clínica actuaba como un bloqueador de experiencia. Descubrí que las descripciones de servicios y condiciones médicas utilizaban una jerga técnica impenetrable. Para un paciente que busca entender un diagnóstico, leer términos académicos en lugar de explicaciones humanas genera una fricción que termina en el abandono del sitio.

Más grave aún fue detectar lo que llamé el "agujero negro" informativo: la ausencia casi total de información sobre costos, procesos administrativos y cobertura de seguros. En la investigación previa sabíamos que estas eran las dudas principales de los usuarios, y sin embargo, la web las ignoraba. Esta carencia no era solo un fallo de contenido; era un fallo estratégico que obligaba al usuario a abandonar la plataforma digital y saturar el Call Center, rompiendo cualquier intento de experiencia de autoservicio. Estábamos frente a un sitio que presumía eminencia médica pero ocultaba la información vital que el paciente necesitaba para tomar una decisión.

#### Redundancia y el puente roto entre mundos

El análisis también reveló una fragmentación semántica caótica. Al navegar entre el sitio principal y `misaludabc`, la desconexión era total. No existía contenido que guiara al usuario o que explicara la relación entre ambos portales. El usuario saltaba de una interfaz institucional a un portal de proveedor externo (**Carestream MyVue**) sin ninguna advertencia o guía. 

Identifiqué casos críticos de contenido duplicado e inconsistente: una sección del sitio decía una cosa sobre cómo prepararse para un estudio, mientras que otra sección daba instrucciones ligeramente distintas. Esta falta de **consistencia y estándares** no solo confundía al usuario, sino que minaba la autoridad de la marca. Si el hospital no podía ponerse de acuerdo en su información digital, ¿cómo podía el paciente confiar plenamente en el proceso? La auditoría de contenido me confirmó que el problema del Centro Médico ABC no era solo técnico o visual; era una desconexión profunda entre su excelencia operativa y su capacidad de comunicarse con cercanía en el entorno digital.

#### Próximo paso:

Tras diseccionar el lenguaje y confirmar que estábamos hablando un idioma que alejaba a los pacientes, me quedó una duda inquietante: ¿cuánto de este desorden era una decisión consciente y cuánto era una limitación impuesta por los fierros? Sabía que para unificar estos mundos fragmentados no bastaría con escribir mejor; necesitaba entender las entrañas del sistema. Era el momento de sentarme con el equipo de TI para realizar el **Diagnóstico Técnico**, donde descubriría si la infraestructura actual era un cimiento sólido o una jaula que nos impediría innovar.

---

### Parte 6: Diagnóstico Técnico y Conclusiones de Auditoría

Podíamos pulir el lenguaje, unificar los íconos y mejorar la redacción de cada servicio todo lo que quisiéramos, pero si el motor estaba fundido, el coche no iba a arrancar. Tras completar la auditoría de contenido y confirmar que hablábamos un idioma que alejaba a los pacientes, me asaltó una duda que no me dejaba dormir: ¿cuánto de este desorden era una decisión consciente y cuánto era una limitación impuesta por los fierros? Como diseñador, sé que no puedes proyectar una experiencia fluida si el backend está fracturado. Necesitaba dejar la superficie visual y bajar a la sala de máquinas para entender si estábamos ante una crisis estética o un bloqueo sistémico.

#### La isla tecnológica de Carestream MyVue

Al iniciar el diagnóstico técnico, lo primero que saltó a la vista fue una fractura geográfica en el ecosistema. Mientras que el sitio institucional vivía en `centromedicoabc.com`, el portal de pacientes se encontraba exiliado en un subdominio: `misaludabc.abchospital.com`. Al investigar las entrañas de este último, descubrí la raíz del problema: no era un desarrollo propio del hospital, sino una implementación de **Carestream MyVue**, un software de un proveedor externo especializado en radiología.

Esta revelación lo cambió todo. Estábamos intentando diseñar una experiencia unificada sobre una "caja negra" tecnológica. El portal de pacientes no era una extensión de la marca, sino un silo técnico que dictaba sus propias reglas de interfaz, sus propios flujos y, lo más grave, sus propias limitaciones de datos. Esta dependencia externa explicaba por qué el portal solo mostraba resultados de imagenología; el sistema simplemente no estaba diseñado para hablar con el resto del hospital. Era una isla técnica que rompía cualquier intento de consistencia, obligando al paciente a navegar por una interfaz que se sentía —y era— ajena a la institución.

#### El peregrinaje digital por falta de SSO

Uno de los puntos más críticos que documenté en mis sesiones de trabajo con el equipo de TI fue la ausencia total de un **Single Sign-On (SSO)**. Para el paciente, el Centro Médico ABC es una sola entidad, pero para la infraestructura tecnológica, el usuario era un completo extraño cada vez que cruzaba la frontera entre el sitio web y el portal de resultados.

> El coste cognitivo de gestionar credenciales distintas para servicios que pertenecen a la misma marca es una de las formas más invisibles y letales de fricción. No es solo un problema de memoria; es un mensaje implícito de que la institución está desorganizada.

Confirmé con los ingenieros que la arquitectura actual no tenía la capacidad de consumir **APIs** externas de forma dinámica. Esto significaba que centralizar los datos del laboratorio clínico o integrar el **Expediente Clínico Electrónico (ECE)** en el portal actual era, técnicamente, un callejón sin salida. El sistema no estaba diseñado para la interoperabilidad. Estábamos condenando al paciente a un "peregrinaje digital": entrar a un sitio para buscar un médico, a otro para ver una placa de rayos X y llamar por teléfono para obtener sus resultados de sangre porque el sistema simplemente no permitía que esos datos se encontraran en una sola pantalla.

#### La jaula de hierro de la deuda técnica

A medida que profundizaba en las entrevistas técnicas, el panorama se volvía más rígido. El CMS que sostenía el sitio principal y las bases de datos heredadas funcionaban como una "jaula de hierro". Identifiqué una **deuda técnica** masiva que actuaba como un repelente para cualquier intento de innovación. No se trataba solo de que el sitio cargara lento; se trataba de que el código era tan frágil que cualquier intento de implementar un agendamiento inteligente o una personalización de contenidos básica se estrellaba contra un muro de procesos de despliegue manuales y riesgos de rotura.

El equipo de TI fue honesto conmigo: el riesgo de "romper el sitio" al intentar integrar nuevas funcionalidades era mayor que el beneficio percibido de la mejora. Esta parálisis por obsolescencia era el mayor obstáculo estratégico. Comprendí que el rediseño no podía ser un "lavado de cara" visual; necesitábamos una reingeniería total. Si queríamos que el paciente pudiera gestionar su salud de forma autónoma, teníamos que demoler los cimientos actuales y construir una infraestructura capaz de soportar la complejidad de un hospital moderno.

#### El veredicto final: Un espejo de la fragmentación operativa

Al cerrar la auditoría, los datos pintaron un cuadro clínico devastador. La plataforma digital no era más que un espejo fiel de la fragmentación operativa del Centro Médico ABC. La desconexión entre el sitio web y el portal de radiología no era un descuido de diseño, sino el síntoma de una organización que operaba en silos, donde la tecnología de cada departamento no se hablaba con la del vecino.

La evidencia que recolecté era irrefutable y la consolidé en una línea base que no dejaba lugar a dudas:
*   **SUS (System Usability Scale):** Obtuvimos una puntuación de **45/100**. En cualquier métrica estándar, esto se califica como "Pobre". Es el equivalente digital a un suspenso rotundo.
*   **SEQ (Single Ease Question):** El promedio de facilidad por tarea fue de **3.5/7**, lo que situaba la experiencia del usuario en el terreno de lo "difícil".
*   **Tasas de Éxito Críticas:** Lo más alarmante fue el **0% de éxito** en tareas fundamentales como agendar una cita con un especialista en línea o acceder a resultados de laboratorio. La funcionalidad simplemente no existía o era imposible de encontrar.

#### Recomendaciones para una transformación radical

Con estas pruebas en la mano, mi diagnóstico fue claro: el costo de no hacer nada era infinitamente mayor que el costo de la transformación. No podíamos seguir poniendo parches en un sistema que fallaba en su promesa básica de servicio. Propuse tres ejes estratégicos que debían guiar cada decisión a partir de ese momento:

1.  **Unificación Urgente:** Era imperativo crear un **Portal de Paciente Unificado**. Debíamos eliminar la fragmentación y consolidar todos los servicios, desde citas hasta resultados de cualquier especialidad, bajo una sola identidad y un solo acceso.
2.  **Expansión del Autoservicio:** El sistema de agendamiento debía ser total. El paciente necesitaba poder gestionar (agendar, modificar y cancelar) sus citas con especialistas sin depender de un Call Center saturado.
3.  **Modernización Radical de la UI/UX:** Necesitábamos un diseño que no solo fuera estético, sino que proyectara la excelencia médica del hospital. La confianza del paciente comienza en la interfaz; si la plataforma se siente anticuada, el paciente percibe que la atención también lo es.

Esta auditoría exhaustiva fue el espejo que nos mostró, sin filtros, dónde estábamos parados. Fue el momento en que dejamos de adivinar qué querían los usuarios para empezar a entender por qué los estábamos perdiendo. Con el SUS de 45 y las tasas de éxito en cero, ya no había debate posible: la transformación digital del Centro Médico ABC ya no era un proyecto deseable, era una necesidad de supervivencia institucional.

**Reflexión final:**
Esta auditoría fue el baño de realidad que el proyecto necesitaba para dejar de ser una discusión sobre "colores y botones" y convertirse en una estrategia de negocio. Aprendí que mi responsabilidad como diseñador senior no termina en el prototipo, sino en entender las limitaciones del código para proponer soluciones que sean técnica y operativamente viables. Al exponer la fragilidad de la infraestructura de Carestream y la falta de SSO, logré que los stakeholders entendieran que el rediseño no era un gasto estético, sino una inversión necesaria para sanar la relación digital con sus pacientes.

---

