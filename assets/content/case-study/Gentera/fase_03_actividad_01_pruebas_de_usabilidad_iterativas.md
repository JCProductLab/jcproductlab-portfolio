# Fase 3: Probar y Validar

## Actividad_01_Pruebas de Usabilidad Iterativas

### Parte 1: Estrategia y Perfilado El Cambio de Mentalidad Hacia la Validación

#### La trampa de la alta fidelidad y el cambio de piel

Cerré el archivo de Figma y, por un momento, me quedé mirando la pantalla en silencio. Las sombras, los botones con el rojo institucional de Gentera y la tipografía perfectamente alineada daban una sensación de "producto terminado" que era, en realidad, un espejismo peligroso. Como diseñador, conozco bien esa satisfacción visual; es la que te hace bajar la guardia. Sin embargo, en un proyecto como GAC, donde la automatización de la capacitación impacta directamente en la eficiencia operativa de miles de colaboradores, la estética es secundaria si la lógica de negocio falla en las manos del usuario.

En ese instante, decidí que era momento de cambiar de piel. Dejé de ser el arquitecto que construye para convertirme en el científico que cuestiona. Mi razonamiento fue pragmático: habíamos diseñado flujos complejos de segmentación y trazabilidad de rutas de seis meses basándonos en nuestra interpretación del brief y en entrevistas previas, pero todo seguía siendo una serie de hipótesis sofisticadas. Si el administrador no entendía cómo procesar una inconsistencia en la plantilla o si el colaborador se perdía buscando su progreso en el "Pasaporte Digital", el diseño habría fracasado, por muy bonito que se viera.

Forcé al equipo a frenar el impulso de pasar a desarrollo. Les dije que necesitábamos "romper" el diseño antes de que fuera código. Esta transición hacia la validación empírica no era un trámite burocrático, sino una salvaguarda contra el error operativo. Bajo el principio de feedback constante, decidí que someteríamos el prototipo de alta fidelidad al escrutinio más severo: el de los usuarios que viven el caos de la capacitación manual día tras día. Solo así podríamos transformar nuestras suposiciones en certezas y blindar la inversión de Gentera.

#### Definir el norte: los siete pilares de la validación

Para que una prueba de usabilidad sea útil, no basta con "ver si le gusta a la gente". Necesitaba un rigor forense. Me senté a estructurar lo que serían los siete objetivos estratégicos que guiarían toda la ronda de validación. No quería métricas de vanidad; buscaba identificar fallos estructurales en la interacción.

Primero, establecí como prioridad la **Validación de la Facilidad de Uso y Eficiencia General**. Mi pregunta era simple: ¿puede un usuario terminar sus tareas principales sin ayuda externa? Si la plataforma GAC requiere un manual de instrucciones, entonces no hemos automatizado nada, solo hemos digitalizado la burocracia. En segundo lugar, puse el foco en la **Claridad del Diseño Visual**. Gentera tiene una identidad fuerte, y necesitaba confirmar que el uso de sus colores y tipografía en una interfaz densa de datos realmente ayudaba a la legibilidad y no se convertía en ruido visual que agotara al usuario tras diez minutos de uso.

Los siguientes puntos fueron más quirúrgicos:
*   **Identificación de Problemas de Usabilidad Detallados:** Buscaba detectar esos micro-momentos de fricción, como un clic extra innecesario o un mensaje de error que no explica cómo corregir el problema.
*   **Comprensión de la Terminología:** En Gentera se usa un lenguaje interno muy específico. Validar que términos como "Kardex", "Elegibles" o "Segmentación" significaran lo mismo para el sistema que para el colaborador era vital para evitar la carga cognitiva.
*   **Satisfacción General:** No como un número de NPS vacío, sino como una medida de la utilidad percibida. ¿Siente el usuario que esta herramienta realmente le quita peso de encima?

Finalmente, abordé los dos puntos más críticos para el negocio: la **Implementación de Reglas de Negocio Complejas** y la **Revisión de Feedback Previo**. Necesitaba asegurarme de que la lógica de "segmentación automatizada" fuera transparente para el usuario. Si el sistema excluye a un colaborador de una lista, el administrador debe entender por qué. Además, arrastrábamos dudas de fases anteriores sobre el manejo de plantillas y la sincronización de calendarios; esta era la oportunidad de cerrar esas brechas definitivamente.

#### La anatomía del usuario: cuatro perfiles para cuatro verdades

Una vez definidos los objetivos, el siguiente paso fue decidir quiénes tendrían el prototipo en sus manos. No podíamos probar con cualquiera; necesitaba perfiles que representaran las tensiones reales de la operación de Gentera. Articulé la selección en torno a cuatro arquetipos críticos, cada uno con una misión de validación distinta.

El primero, y quizás el más importante para la viabilidad técnica, era **Carlos, el Coordinador Detallista**. Como Administrador de Capacitación, Carlos es quien hoy sufre con archivos de Excel infinitos. Su perfil es vital porque es el "power user" que cargará las plantillas, revisará inconsistencias y ajustará los grupos. Si Carlos encuentra la interfaz lenta o confusa, el motor de GAC se detiene. Con él, mi objetivo era validar el flujo de carga y la segmentación de grupos por puesto y subdirección.

Luego definí a **Ana, la Colaboradora Entusiasta**. Ella representa al usuario final, la persona que está en campo o en oficina y necesita saber qué curso le falta para su promoción. Para Ana, la plataforma debe ser un aliado, no una tarea más. Con ella, me propuse testear el "Pasaporte Digital": ¿entiende su ruta de aprendizaje?, ¿sabe cómo acceder a los detalles de un curso sin dar tres rodeos?

Para la capa de supervisión, seleccioné a **David, el Líder Comprometido**. Como Gerente de Oficina, David no tiene tiempo para navegar pantallas profundas; necesita visibilidad inmediata. Su tarea clave era la visualización del avance del equipo y la identificación de colaboradores en riesgo de rezago. Si David no puede generar un reporte de estatus en tres clics, la herramienta no le sirve para la toma de decisiones.

Por último, incluí a **Elena, la Formadora Dedicada**. Elena es quien vive la ejecución. Su rol es esencial para el registro de asistencia y la gestión de la agenda. Necesitaba confirmar que Elena pudiera ver su lista de participantes y marcar asistencias en tiempo real sin fricciones, asegurando que la trazabilidad de la capacitación no se rompa en el último eslabón de la cadena.

#### El rigor del número y la apuesta por el realismo visual

Con los perfiles claros, enfrenté la pregunta clásica: ¿cuántos usuarios son suficientes? Basándome en mi experiencia y en estándares de la industria, determiné que reclutaríamos entre **3 y 5 participantes por rol**. Algunos stakeholders sugerían muestras más grandes, pero mi postura fue firme: el objetivo de estas pruebas iterativas no es la significancia estadística, sino la detección de patrones. La evidencia demuestra que con cinco usuarios bien seleccionados se identifican más del 80% de los problemas de usabilidad. Ir más allá en esta etapa solo nos daría resultados redundantes y retrasaría la iteración.

Decidí que usaríamos **Prototipos de Alta Fidelidad**. Esta no fue una decisión estética, sino metodológica. Al estar validando reglas de negocio complejas y la claridad de la información en una plataforma de gestión, los wireframes de baja fidelidad se quedaban cortos. Necesitaba que el usuario viera datos reales, que interactuara con estados de botones finales y que sintiera el peso visual de la jerarquía de información. Con un prototipo de alta fidelidad, reducimos el "ruido" de la imaginación del usuario; no tiene que suponer cómo se verá el sistema, lo está viendo. Esto nos permite evaluar la legibilidad y el atractivo de forma simultánea a la funcionalidad.

Esta elección de fidelidad también nos permitía medir métricas cualitativas y cuantitativas con mayor precisión. Podríamos observar el tiempo en tarea y la tasa de éxito con un nivel de realismo que un wireframe gris no permite. Estábamos preparando el escenario para una simulación lo más cercana posible a la realidad operativa de Gentera, eliminando cualquier capa de abstracción que pudiera sesgar los resultados.

#### Tejiendo la red de reclutamiento: el factor humano

La planificación estratégica terminó con la logística de reclutamiento, una fase que a menudo se subestima pero que define la calidad de los hallazgos. No quería "usuarios de laboratorio"; quería gente que esa misma mañana hubiera estado peleándose con un Excel de capacitación. Maniobré con **Lalo, el Líder de Proyecto de Gentera**, y con **Carlos, el Administrador de Capacitación**, para identificar a los candidatos ideales dentro de la organización.

Coordinamos sesiones individuales para asegurar que cada participante se sintiera en un entorno seguro para criticar. Mi instrucción fue clara: debíamos garantizar la participación voluntaria y activa. No quería que nadie sintiera que estaba siendo evaluado; el evaluado era el sistema. Esta gestión humana fue fundamental para preparar el protocolo de "pensar en voz alta" (think-aloud). Necesitábamos que los usuarios nos narraran su confusión, su sorpresa o su alivio mientras navegaban por el GAC.

Al finalizar esta fase de planificación, sentí que habíamos blindado el proceso. Ya no íbamos a ciegas. Teníamos objetivos quirúrgicos, perfiles representativos y una metodología robusta que honraba el valor de "Centrado en la Persona" de Gentera. Esta inversión en rigor estratégico no era un lujo, sino la única forma de garantizar que la automatización de la capacitación se convirtiera en una herramienta de empoderamiento y no en una barrera tecnológica más. Estábamos listos para poner a prueba nuestra obra, sabiendo que cada error descubierto en esta etapa nos ahorraría semanas de retrabajo en el futuro.


Con los perfiles seleccionados y los objetivos blindados, me enfrenté al desafío de diseñar el experimento propiamente dicho: ¿qué tareas exactas les pediría realizar para poner el sistema bajo máxima presión? Sabía que el éxito de las sesiones dependería de crear escenarios tan realistas que los usuarios olvidaran que estaban interactuando con un prototipo y empezaran a operar como si estuvieran en su jornada laboral diaria. La tensión ahora se trasladaba a la redacción del guion de moderación y a la definición de las métricas que separarían una opinión subjetiva de un fallo crítico de usabilidad.

### Parte 2: El Diseño del Experimento Escenarios y Métricas

#### De los píxeles a la presión: Operativizando la validación

Tener un prototipo de alta fidelidad que se ve impecable en Figma es, en muchos sentidos, un espejismo peligroso. Los botones brillan, las transiciones son fluidas y todo parece funcionar porque yo, como su creador, conozco cada atajo y cada limitación. Pero el diseño de producto no se trata de lo que yo sé, sino de lo que el usuario descubre. Tras blindar los perfiles y los objetivos estratégicos, sentí que era el momento de dejar de proteger mi obra y empezar a cuestionarla con rigor científico. Siguiendo el proceso de la Fase 3 (`01_pruebas_de_usabilidad.pdf`), me propuse transformar esas pantallas estáticas en un laboratorio de comportamiento humano.

Mi razonamiento fue puramente operativo: necesitaba que los usuarios no solo "vieran" la plataforma GAC, sino que la "operaran" bajo condiciones de estrés similares a su jornada real en Gentera. No buscaba opiniones estéticas; buscaba fallos en la lógica de negocio y quiebres en la intuición. Según el Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`), la meta era validar si la automatización de la segmentación y la trazabilidad de rutas de seis meses eran realmente comprensibles o si habíamos construido una "caja negra" tecnológica que nadie sabría manejar. La tensión en mi escritorio cambió: pasé de ajustar gradientes a redactar instrucciones que pusieran a prueba la **carga cognitiva** de nuestros participantes.

---

#### La coreografía del estrés: Escenarios de uso real

Diseñar las tareas para un test de usabilidad es como escribir el guion de una obra de teatro donde el actor no conoce el libreto. Si la tarea es demasiado vaga, el usuario se pierde; si es demasiado guiada, el test no sirve. Me sumergí en el apartado 4 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`) para destilar cuatro escenarios quirúrgicos, uno por cada rol crítico, asegurándome de que cada uno tocara una fibra sensible de la operación de Gentera.

Para **Carlos (el Coordinador Detallista)**, diseñé el escenario más denso técnicamente. No le pedí simplemente "subir un archivo". El escenario empezaba con una premisa de conflicto: "Acabas de recibir la plantilla de capacitación semanal de ADN y hay inconsistencias". Mi objetivo aquí era observar cómo interactuaba con el reporte de errores. ¿Entendería por qué el sistema rechazó a ciertos colaboradores? ¿Sería capaz de ajustar manualmente un grupo que no cumplía con el cupo mínimo usando el **drag-and-drop** que diseñamos? Esta tarea era vital para validar la "intuición y eficiencia" de la herramienta de segmentación, el corazón del Desarrollo 1.

En el caso de **Ana (la Colaboradora Entusiasta)**, el enfoque viró hacia la autonomía. El escenario planteaba una necesidad personal: "Quieres saber qué cursos te faltan para tu promoción". Aquí, el éxito no era solo encontrar la ruta, sino la interacción con el ecosistema externo. Observé con atención si Ana encontraba la función para agregar el curso a su calendario personal vía **.ical**. Si fallaba aquí, la trazabilidad del Desarrollo 2 perdía su valor práctico de cara al colaborador.

Para los líderes y formadores, la complejidad residía en la síntesis de datos:
*   **David (el Líder):** Su tarea se centró en el **drill-down**. Tenía que identificar a los colaboradores retrasados en su oficina y simular la exportación de un reporte a Excel. Si David tardaba más de dos minutos en encontrar quién estaba "en rojo", nuestro dashboard había fallado en su promesa de visibilidad.
*   **Elena (la Formadora):** El reto era el registro de asistencia y la retroalimentación cualitativa. Necesitaba validar si la interfaz le permitía cerrar una sesión y dejar comentarios sobre el grupo sin que el proceso se sintiera como una carga administrativa extra.

> **Insight de Diseño:** Un escenario realista no es una instrucción, es una motivación. Al decir "tienes una reunión de desempeño en 10 minutos y necesitas el reporte", el usuario deja de evaluar colores y empieza a evaluar utilidad.

---

#### La arquitectura del dato: Métricas cualitativas y el "Think Aloud"

Para que estas sesiones no se convirtieran en simples charlas informales, implementé un protocolo de observación directa basado en la sección 5.1 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`). Mi herramienta principal fue el protocolo de **Think Aloud** (pensar en voz alta). No me bastaba con ver que un usuario hacía clic en el botón correcto; necesitaba escuchar el proceso mental que lo llevó ahí. "Espero que al picar aquí me salga la lista de sedes", es una frase que vale más que mil mapas de calor.

Decidí que el registro de estas métricas cualitativas debía ser exhaustivo, capturando tres capas de información:
1.  **Citas Directas:** Palabras literales que revelaran confusión, alivio o sorpresa.
2.  **Expresiones No Verbales:** El suspiro de frustración cuando un filtro no responde como se espera o la sonrisa de satisfacción al ver una barra de progreso completada.
3.  **Causa Raíz:** Siguiendo el proceso de la Fase 3 (`01_pruebas_de_usabilidad.pdf`), obligué al equipo de observación a no solo anotar el error, sino a diagnosticarlo en el momento: ¿Es una etiqueta confusa? ¿Es un flujo ilógico? ¿O es falta de feedback del sistema?

Este rigor cualitativo es lo que permite diferenciar entre un usuario que "logró terminar la tarea de milagro" y uno que la completó porque el diseño realmente lo guio.

---

#### El rigor forense: Cuantificando la fricción con SEQ y SUS

Aunque el diseño de producto es profundamente cualitativo, necesitaba números para hablar el lenguaje del negocio y para tener una línea base comparativa. Articulé un sistema de métricas cuantitativas que no dejara lugar a ambigüedades. Definí la **Tasa de Éxito** (¿lo logró o no?), el **Tiempo en Tarea** y, lo más importante, el **Número de Errores Críticos**.

Sin embargo, la verdadera potencia de este diseño de experimento radicó en la integración de escalas estandarizadas:
*   **Single Ease Question (SEQ):** Al finalizar cada una de las tareas, le lanzaría al usuario una pregunta seca: "¿Qué tan fácil o difícil te resultó completar esta tarea?" en una escala del 1 al 7. Esto me daría una medida de la "fricción percibida" en caliente, antes de que el usuario olvidara el dolor de un paso específico.
*   **System Usability Scale (SUS):** Al cierre de toda la sesión, aplicaría el cuestionario de 10 ítems del estándar SUS. Esta métrica global es el termómetro de la industria; nos permitiría transformar percepciones subjetivas en un puntaje de usabilidad que podíamos presentar a los stakeholders de Gentera con total autoridad técnica.

Esta combinación de SEQ y SUS me permitía blindar los hallazgos: si un usuario decía que le gustó la app (subjetivo) pero su SUS era de 60 y su tiempo en tarea era alto (objetivo), yo sabía que teníamos un problema de usabilidad "disfrazado" de cortesía.

---

#### El raíl de la sesión: Un guion de moderación blindado

Para asegurar que los datos de las 15 o 20 sesiones fueran comparables, redacté un script de moderación siguiendo la estructura del apartado 6 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`). Este guion no era solo una lista de preguntas, era una herramienta para gestionar el sesgo. 

La introducción fue diseñada cuidadosamente para construir *rapport* y, sobre todo, para neutralizar el miedo al error. "Estamos probando el diseño, no a ti. Si algo no funciona, es culpa del sistema, no tuya", era la frase mantra que debía abrir cada sesión. Necesitaba que los colaboradores de Gentera se sintieran lo suficientemente cómodos como para ser brutales con su feedback.

El guion también incluía los llamados **"probes"** o preguntas de sondeo neutrales. Como moderador, mi regla de oro era el silencio. Si un usuario se quedaba mirando la pantalla sin saber qué hacer, el guion me prohibía decirle "pícale ahí". En su lugar, debía preguntar: "¿Qué estás pensando en este momento?" o "¿Qué esperabas que sucediera al hacer clic?". Esta disciplina de moderación es lo que separa un test de usabilidad profesional de una simple demostración de producto.

---

#### El ecosistema técnico: Grabación y captura de hallazgos

Finalmente, definí el protocolo de ejecución técnica. Dado que las sesiones serían mayoritariamente remotas, configuré el entorno usando **Google Meets** para la grabación de pantalla y audio. Pero la pieza clave no era la grabación, sino la estructura de toma de notas. 

Diseñé una base de datos relacional en **Notion** donde cada observación estaría vinculada a una tarea específica, a un perfil de usuario y a un nivel de severidad. Esto me permitiría, al final del proceso, filtrar rápidamente todos los "errores críticos" detectados por los Administradores de Capacitación en el flujo de carga de ADN. No quería un documento de texto plano; quería una herramienta de análisis que me permitiera encontrar patrones de forma casi instantánea.

Esta preparación obsesiva era la única forma de honrar el valor de "Centrado en la Persona" de Gentera. No estábamos haciendo pruebas por cumplir un check en el cronograma; estábamos montando un sistema de detección de fallos que nos ahorraría semanas de retrabajo en la fase de desarrollo. Estaba convencido de que si el experimento estaba bien diseñado, el prototipo nos diría exactamente qué necesitaba para tener éxito.


Con el guion impreso, las métricas definidas y los escenarios cargados en el prototipo, solo faltaba abrir la sala de Google Meets y enfrentarnos a la realidad. Sin embargo, una duda me rondaba mientras revisaba los últimos detalles técnicos: ¿estarían los usuarios realmente dispuestos a ser honestos, o su lealtad institucional a Gentera los llevaría a suavizar sus críticas frente a un sistema que promete automatizar sus tareas? El éxito del laboratorio remoto dependía ahora de una logística impecable y de mi capacidad para leer entre líneas lo que los usuarios no se atrevieran a decir.#### De los píxeles a la presión: Operativizando la validación

Tener un prototipo de alta fidelidad que se ve impecable en Figma es, en muchos sentidos, un espejismo peligroso. Los botones brillan, las transiciones son fluidas y todo parece funcionar porque yo, como su creador, conozco cada atajo y cada limitación. Pero el diseño de producto no se trata de lo que yo sé, sino de lo que el usuario descubre. Tras blindar los perfiles y los objetivos estratégicos, sentí que era el momento de dejar de proteger mi obra y empezar a cuestionarla con rigor científico. Siguiendo el proceso de la Fase 3 (`01_pruebas_de_usabilidad.pdf`), me propuse transformar esas pantallas estáticas en un laboratorio de comportamiento humano.

Mi razonamiento fue puramente operativo: necesitaba que los usuarios no solo "vieran" la plataforma GAC, sino que la "operaran" bajo condiciones de estrés similares a su jornada real en Gentera. No buscaba opiniones estéticas; buscaba fallos en la lógica de negocio y quiebres en la intuición. Según el Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`), la meta era validar si la automatización de la segmentación y la trazabilidad de rutas de seis meses eran realmente comprensibles o si habíamos construido una "caja negra" tecnológica que nadie sabría manejar. La tensión en mi escritorio cambió: pasé de ajustar gradientes a redactar instrucciones que pusieran a prueba la **carga cognitiva** de nuestros participantes.

---

#### La coreografía del estrés: Escenarios de uso real

Diseñar las tareas para un test de usabilidad es como escribir el guion de una obra de teatro donde el actor no conoce el libreto. Si la tarea es demasiado vaga, el usuario se pierde; si es demasiado guiada, el test no sirve. Me sumergí en el apartado 4 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`) para destilar cuatro escenarios quirúrgicos, uno por cada rol crítico, asegurándome de que cada uno tocara una fibra sensible de la operación de Gentera.

Para **Carlos (el Coordinador Detallista)**, diseñé el escenario más denso técnicamente. No le pedí simplemente "subir un archivo". El escenario empezaba con una premisa de conflicto: "Acabas de recibir la plantilla de capacitación semanal de ADN y hay inconsistencias". Mi objetivo aquí era observar cómo interactuaba con el reporte de errores. ¿Entendería por qué el sistema rechazó a ciertos colaboradores? ¿Sería capaz de ajustar manualmente un grupo que no cumplía con el cupo mínimo usando el **drag-and-drop** que diseñamos? Esta tarea era vital para validar la "intuición y eficiencia" de la herramienta de segmentación, el corazón del Desarrollo 1.

En el caso de **Ana (la Colaboradora Entusiasta)**, el enfoque viró hacia la autonomía. El escenario planteaba una necesidad personal: "Quieres saber qué cursos te faltan para tu promoción". Aquí, el éxito no era solo encontrar la ruta, sino la interacción con el ecosistema externo. Observé con atención si Ana encontraba la función para agregar el curso a su calendario personal vía **.ical**. Si fallaba aquí, la trazabilidad del Desarrollo 2 perdía su valor práctico de cara al colaborador.

Para los líderes y formadores, la complejidad residía en la síntesis de datos:
*   **David (el Líder):** Su tarea se centró en el **drill-down**. Tenía que identificar a los colaboradores retrasados en su oficina y simular la exportación de un reporte a Excel. Si David tardaba más de dos minutos en encontrar quién estaba "en rojo", nuestro dashboard había fallado en su promesa de visibilidad.
*   **Elena (la Formadora):** El reto era el registro de asistencia y la retroalimentación cualitativa. Necesitaba validar si la interfaz le permitía cerrar una sesión y dejar comentarios sobre el grupo sin que el proceso se sintiera como una carga administrativa extra.

> **Insight de Diseño:** Un escenario realista no es una instrucción, es una motivación. Al decir "tienes una reunión de desempeño en 10 minutos y necesitas el reporte", el usuario deja de evaluar colores y empieza a evaluar utilidad.

---

#### La arquitectura del dato: Métricas cualitativas y el "Think Aloud"

Para que estas sesiones no se convirtieran en simples charlas informales, implementé un protocolo de observación directa basado en la sección 5.1 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`). Mi herramienta principal fue el protocolo de **Think Aloud** (pensar en voz alta). No me bastaba con ver que un usuario hacía clic en el botón correcto; necesitaba escuchar el proceso mental que lo llevó ahí. "Espero que al picar aquí me salga la lista de sedes", es una frase que vale más que mil mapas de calor.

Decidí que el registro de estas métricas cualitativas debía ser exhaustivo, capturando tres capas de información:
1.  **Citas Directas:** Palabras literales que revelaran confusión, alivio o sorpresa.
2.  **Expresiones No Verbales:** El suspiro de frustración cuando un filtro no responde como se espera o la sonrisa de satisfacción al ver una barra de progreso completada.
3.  **Causa Raíz:** Siguiendo el proceso de la Fase 3 (`01_pruebas_de_usabilidad.pdf`), obligué al equipo de observación a no solo anotar el error, sino a diagnosticarlo en el momento: ¿Es una etiqueta confusa? ¿Es un flujo ilógico? ¿O es falta de feedback del sistema?

Este rigor cualitativo es lo que permite diferenciar entre un usuario que "logró terminar la tarea de milagro" y uno que la completó porque el diseño realmente lo guio.

---

#### El rigor forense: Cuantificando la fricción con SEQ y SUS

Aunque el diseño de producto es profundamente cualitativo, necesitaba números para hablar el lenguaje del negocio y para tener una línea base comparativa. Articulé un sistema de métricas cuantitativas que no dejara lugar a ambigüedades. Definí la **Tasa de Éxito** (¿lo logró o no?), el **Tiempo en Tarea** y, lo más importante, el **Número de Errores Críticos**.

Sin embargo, la verdadera potencia de este diseño de experimento radicó en la integración de escalas estandarizadas:
*   **Single Ease Question (SEQ):** Al finalizar cada una de las tareas, le lanzaría al usuario una pregunta seca: "¿Qué tan fácil o difícil te resultó completar esta tarea?" en una escala del 1 al 7. Esto me daría una medida de la "fricción percibida" en caliente, antes de que el usuario olvidara el dolor de un paso específico.
*   **System Usability Scale (SUS):** Al cierre de toda la sesión, aplicaría el cuestionario de 10 ítems del estándar SUS. Esta métrica global es el termómetro de la industria; nos permitiría transformar percepciones subjetivas en un puntaje de usabilidad que podíamos presentar a los stakeholders de Gentera con total autoridad técnica.

Esta combinación de SEQ y SUS me permitía blindar los hallazgos: si un usuario decía que le gustó la app (subjetivo) pero su SUS era de 60 y su tiempo en tarea era alto (objetivo), yo sabía que teníamos un problema de usabilidad "disfrazado" de cortesía.

---

#### El raíl de la sesión: Un guion de moderación blindado

Para asegurar que los datos de las 15 o 20 sesiones fueran comparables, redacté un script de moderación siguiendo la estructura del apartado 6 del Plan de Pruebas Detallado (`02_plan_de_pruebas.pdf`). Este guion no era solo una lista de preguntas, era una herramienta para gestionar el sesgo. 

La introducción fue diseñada cuidadosamente para construir *rapport* y, sobre todo, para neutralizar el miedo al error. "Estamos probando el diseño, no a ti. Si algo no funciona, es culpa del sistema, no tuya", era la frase mantra que debía abrir cada sesión. Necesitaba que los colaboradores de Gentera se sintieran lo suficientemente cómodos como para ser brutales con su feedback.

El guion también incluía los llamados **"probes"** o preguntas de sondeo neutrales. Como moderador, mi regla de oro era el silencio. Si un usuario se quedaba mirando la pantalla sin saber qué hacer, el guion me prohibía decirle "pícale ahí". En su lugar, debía preguntar: "¿Qué estás pensando en este momento?" o "¿Qué esperabas que sucediera al hacer clic?". Esta disciplina de moderación es lo que separa un test de usabilidad profesional de una simple demostración de producto.

---

#### El ecosistema técnico: Grabación y captura de hallazgos

Finalmente, definí el protocolo de ejecución técnica. Dado que las sesiones serían mayoritariamente remotas, configuré el entorno usando **Google Meets** para la grabación de pantalla y audio. Pero la pieza clave no era la grabación, sino la estructura de toma de notas. 

Diseñé una base de datos relacional en **Notion** donde cada observación estaría vinculada a una tarea específica, a un perfil de usuario y a un nivel de severidad. Esto me permitiría, al final del proceso, filtrar rápidamente todos los "errores críticos" detectados por los Administradores de Capacitación en el flujo de carga de ADN. No quería un documento de texto plano; quería una herramienta de análisis que me permitiera encontrar patrones de forma casi instantánea.

Esta preparación obsesiva era la única forma de honrar el valor de "Centrado en la Persona" de Gentera. No estábamos haciendo pruebas por cumplir un check en el cronograma; estábamos montando un sistema de detección de fallos que nos ahorraría semanas de retrabajo en la fase de desarrollo. Estaba convencido de que si el experimento estaba bien diseñado, el prototipo nos diría exactamente qué necesitaba para tener éxito.


Con el guion impreso, las métricas definidas y los escenarios cargados en el prototipo, solo faltaba abrir la sala de Google Meets y enfrentarnos a la realidad. Sin embargo, una duda me rondaba mientras revisaba los últimos detalles técnicos: ¿estarían los usuarios realmente dispuestos a ser honestos, o su lealtad institucional a Gentera los llevaría a suavizar sus críticas frente a un sistema que promete automatizar sus tareas? El éxito del laboratorio remoto dependía ahora de una logística impecable y de mi capacidad para leer entre líneas lo que los usuarios no se atrevieran a decir.

### Parte 3: Ejecución y Logística El Laboratorio Remoto

#### El silencio antes del primer clic

La sala de Google Meets estaba en silencio mientras esperaba que Carlos, uno de los coordinadores de capacitación, se conectara. Tenía el prototipo de alta fidelidad abierto en una pestaña y mi base de datos de Notion en la otra, lista para recibir cada impacto de realidad. En ese momento, la estética de las pantallas —el azul institucional de Gentera, la tipografía perfectamente legada, los bordes redondeados— dejó de importarme. Lo único que ocupaba mi mente era si la lógica de segmentación que habíamos articulado durante semanas sobreviviría al contacto con un usuario real. Sabía que, en Gentera, existe una cultura de respeto y lealtad muy profunda, lo que suele generar un **sesgo de cortesía** peligroso: los colaboradores tienden a decir que todo está "bien" para no ofender al equipo de diseño. Mi trabajo en los siguientes 90 minutos no era ser amable, sino crear un entorno lo suficientemente seguro y profesional para que Carlos se sintiera con la libertad de decirme que el sistema era confuso.

#### Blindaje técnico y el escenario silencioso

Decidí que todas las sesiones fueran remotas utilizando **Google Meets** como eje central. No fue una decisión de comodidad, sino de rigor metodológico. Necesitaba que los participantes estuvieran en su entorno de trabajo habitual, usando sus laptops de Gentera, para asegurar que la experiencia fuera lo más cercana posible al día a día. Antes de cada sesión, realicé un "sanity check" obsesivo del prototipo en Figma. Verifiqué cada link, cada estado de *hover* y, sobre todo, los flujos críticos: la carga de la plantilla ADN para los administradores y el mapa visual de ruta para los colaboradores. Un solo "dead end" o un botón que no reaccionara podría romper la inmersión y sesgar el **Tiempo en la Tarea**, invalidando los datos de eficiencia que necesitaba recolectar. 

Configuré el software de grabación para capturar no solo la pantalla y el audio, sino también las micro-expresiones faciales. Sabía que un usuario puede decir que el flujo es "sencillo" mientras su ceño fruncido me cuenta una historia de frustración cognitiva totalmente distinta. La latencia de la conexión era mi mayor enemigo; una demora en la carga del prototipo podría interpretarse como una falla de la plataforma GAC, por lo que me aseguré de que cada participante cerrara aplicaciones pesadas antes de iniciar. Este "blindaje" técnico era el escenario silencioso necesario para que el diseño hablara por sí solo.

#### El mantra del moderador: "Probamos el diseño, no a ti"

En cuanto Carlos se unió a la llamada, dediqué los primeros diez minutos a la construcción de **rapport**. Es un error de principiante saltar directo a las tareas; un usuario tenso no piensa con claridad. Utilicé el guion de moderación que había estructurado para establecer las reglas del juego: *"Carlos, estamos probando un prototipo, no tus habilidades. Si algo no funciona o te confunde, la culpa es del diseño, no tuya. De hecho, tus errores son lo más valioso que puedes darnos hoy"*. Esta frase es fundamental para desarmar el miedo al juicio y obtener feedback honesto.

Tras obtener el consentimiento formal para grabar, introduje el protocolo **"Think-aloud"** (pensar en voz alta). Le pedí que verbalizara cada duda, cada expectativa y cada momento de sorpresa. *"Si esperas que un botón haga X y hace Y, dímelo"*. Esta técnica es la única forma de capturar la "causa raíz" de una fricción. Sin el *think-aloud*, solo ves un clic erróneo; con él, entiendes que el usuario hizo clic ahí porque la terminología de la etiqueta le recordó a un proceso antiguo de Excel que intentamos sustituir.

#### La disciplina del silencio y los sondeos neutrales

Ejecutar la moderación fue un ejercicio de contención profesional. Presenté a Carlos su primer escenario: *"Acabas de recibir la plantilla semanal de ADN; úsala para identificar a los nuevos ingresos de Ventas"*. Mientras lo veía navegar por el flujo de carga y enfrentarse al resumen del procesamiento, tuve que luchar contra el impulso natural de ayudarlo cuando se quedó mirando fijamente la pantalla durante seis segundos. En diseño de producto, esos seis segundos de silencio son oro puro: indican una carga cognitiva excesiva o una jerarquía visual deficiente.

Cuando el silencio se prolongaba demasiado, lanzaba **Sondeos Neutrales (Probes)**. En lugar de decir "mira el botón azul de la derecha", preguntaba: *"¿Qué estás pensando en este momento?"* o *"¿Qué esperabas encontrar en esta sección?"*. Mi objetivo era mantenerlo en el flujo sin contaminar su proceso de toma de decisiones. Gestionar el tiempo fue otro reto; con perfiles como Elena (la formadora) o David (el gerente de oficina), las sesiones de 60 a 90 minutos se sienten cortas cuando empiezas a profundizar en sus modelos mentales. Tuve que ser quirúrgico para cubrir las tres tareas principales de cada perfil sin agotar su energía mental, asegurándome de que llegáramos al registro de asistencia o a la generación de reportes con el mismo nivel de atención que al inicio.

#### Captura forense de verbatims y señales no verbales

Mientras los usuarios interactuaban con las reglas de negocio complejas —como la segmentación automatizada o la trazabilidad de rutas de 6 meses—, yo actuaba como un observador forense. No solo anotaba si completaban la tarea (Tasa de Éxito), sino cómo se sentían al hacerlo. Registré **verbatims** (citas directas) que resultaron ser lapidarias. Por ejemplo, cuando Ana, la colaboradora, vio su mapa de progreso y exclamó: *"Ah, por fin entiendo qué curso sigue sin tener que preguntar a mi líder"*, supe que habíamos dado en el clavo con la visibilidad de la ruta.

> **Insight de Trinchera:** La mayor dificultad de moderar estas pruebas no es la técnica, sino la disciplina de no defender tu obra. Ver a un usuario ignorar un componente que diseñaste con esmero duele, pero ese dolor es lo que blinda el producto final. Si no dejas que el usuario "sufra" un poco en el laboratorio, el producto sufrirá en producción, donde el costo del error es infinitamente mayor.

Al final de cada sesión, aplicaba la **Single Ease Question (SEQ)** para medir la dificultad percibida de cada tarea y el **System Usability Scale (SUS)** para obtener una métrica global de la experiencia. Cerraba la sala de Meets con una mezcla de cansancio y claridad. Tenía gigabytes de grabaciones y hojas de notas llenas de fricciones, dudas y pequeñas victorias. La logística había funcionado, el laboratorio remoto era sólido, pero ahora me enfrentaba a la montaña de datos: ¿cómo transformar todas esas expresiones de confusión y clics erráticos en una hoja de ruta clara para la siguiente iteración?


Al cerrar la última sesión con Elena, me quedé mirando la lista de 45 "puntos de dolor" que había capturado en mis notas rápidas. Había una contradicción fascinante: los usuarios elogiaban la estética de la plataforma, pero tropezaban repetidamente en el mismo paso del flujo de segmentación de grupos. Sabía que la verdadera batalla empezaba ahora, en el proceso de destilar estas horas de video para encontrar los patrones que nadie más veía y traducirlos en cambios que no solo resolvieran la usabilidad, sino que blindaran la lógica de negocio de Gentera.

### Parte 4: Análisis y Hallazgos la Primera Radiografía del Producto

#### La disección del silencio tras la observación

Cerré la última sesión con Elena y, por un momento, el silencio en mi oficina se sintió pesado. Tenía gigabytes de grabaciones de Google Meets, páginas de notas frenéticas y una sensación ambivalente en el estómago. Como diseñador, ese es el momento más peligroso del proceso: tienes la tentación de quedarte con la última impresión, con ese comentario amable del usuario o con el alivio de que "nada explotó". Pero el rigor del oficio me obligaba a lo contrario. Me quité el sombrero de facilitador y me puse el de analista forense. La observación es solo ruido blanco si no se aplica una disciplina quirúrgica para encontrar los patrones que subyacen a los clics erráticos.

Necesitaba transformar expresiones subjetivas y gestos de duda en una hoja de ruta técnica que no solo hiciera la plataforma "bonita", sino que blindara la lógica de negocio de Gentera. El reto no era que a los usuarios les "gustara" la interfaz; el reto era asegurar que Carlos pudiera procesar mil registros sin cometer un error catastrófico y que Ana entendiera su futuro profesional en un solo vistazo. Pasé las siguientes horas sumergido en un proceso de destilación donde cada "eh..." y cada pausa de tres segundos frente a un botón se convertía en un dato crudo esperando ser clasificado.

#### El ritual del debrief: capturando la verdad mientras quema

Inmediatamente después de las sesiones, convoqué al equipo de observación para un debrief relámpago. Es una maniobra que he aprendido a valorar con los años: la memoria es traicionera y el sesgo de recencia puede arruinar un análisis sólido. Nos sentamos a comparar notas mientras los hallazgos aún estaban "frescos", contrastando lo que cada uno había percibido. Mientras yo me fijaba en la navegación, el observador técnico notaba retrasos en la carga de estados y el stakeholder se centraba en la terminología.

Articulé este proceso revisando minuciosamente los materiales. No me limité a mis notas; volví a las grabaciones para transcribir citas clave y, sobre todo, para analizar el protocolo de **"pensar en voz alta"**. Escuchar a un usuario decir "supongo que si le pico aquí..." es una señal de alarma mucho más potente que cualquier métrica de éxito. Busqué específicamente esos momentos de fricción donde el modelo mental del usuario chocaba con la arquitectura que yo había construido. Este ejercicio de validación colectiva fue vital para asegurar que no estuviéramos viendo lo que queríamos ver, sino lo que realmente estaba ocurriendo en la pantalla del colaborador de Gentera.

#### La radiografía de Carlos y Ana: eficiencia vs. claridad

Al segmentar los hallazgos por rol, la primera gran tensión apareció con **Carlos, el Administrador**. Su reacción ante la automatización fue, en sus propias palabras, "salvadora". Ver cómo el sistema digería la plantilla de Excel y proponía grupos automáticamente le quitó un peso monumental de encima. Sin embargo, detecté una falla táctica en mi diseño: cuando el reporte de inconsistencias mostraba errores menores, Carlos se sentía atrapado. No tenía una forma clara de corregir un nombre o un ID directamente en la interfaz; el flujo lo obligaba a pensar en una re-subida, lo cual generaba una fricción innecesaria. Fue un baño de realidad sobre la importancia de la edición *in-situ* en herramientas de alta densidad de datos.

Por otro lado, la experiencia de **Ana, la Colaboradora**, fue una montaña rusa de validaciones. Su entusiasmo con la sección "Mi Ruta de Capacitación" fue contagioso; por primera vez, un colaborador de ventas en una oficina remota podía ver su horizonte de crecimiento de seis meses sin depender de un correo perdido. Pero aquí surgió un problema de terminología que yo había pasado por alto: el concepto de **"Toques con Formador"**. Ana se quedó mirando el término varios segundos. *"¿Qué implica esto? ¿Es una llamada, un examen, una visita?"*, preguntó. Esa brecha en la claridad de la terminología era un riesgo de adopción. Me di cuenta de que habíamos diseñado para los que ya conocían el proceso, olvidando a quienes apenas están entrando en el ecosistema de Gentera.

#### La mirada de David y Elena: del control a la ejecución

Con **David, el Líder de Equipo**, el análisis tomó un tinte más estratégico. David navegó el Dashboard con una eficiencia envidiable, valorando de inmediato el uso de semáforos para identificar a los colaboradores atrasados. Pero su mente de gerente exigió algo más: **benchmarks**. *"Está bien saber que mi equipo va al 80%, pero ¿cómo estamos respecto al promedio de la Dirección?"*, cuestionó. Este hallazgo transformó mi percepción del dashboard; no era solo una herramienta de monitoreo, era una herramienta de competitividad y gestión basada en datos. David no quería solo ver estados; quería contexto para tomar decisiones de liderazgo.

Finalmente, la sesión con **Elena, la Formadora**, me dio la clave sobre la operación en campo. Elena elogió la agenda centralizada, pero su momento de mayor lucidez fue cuando llegamos al registro de asistencia. Ahí, identificó una necesidad crítica que no estaba en ningún brief inicial: un campo de **"notas por participante"**. Elena me explicó que, en las sesiones presenciales, hay matices del desempeño que un simple "asistió" no captura. Necesitaba registrar si alguien mostró liderazgo o si tuvo dificultades específicas con un concepto. Este hallazgo fue una lección de humildad: por muy automatizado que sea el sistema, la capacitación sigue siendo un proceso humano que requiere espacios para la observación cualitativa.

#### La matriz de severidad: priorizando la batalla

Para que este análisis no se quedara en un documento contemplativo, clasifiqué cada hallazgo usando una escala de severidad técnica, desde el **US-001 hasta el US-009**. Esta es la parte del oficio donde el diseño se encuentra con la gestión de producto.

*   **Severidad Media (Los bloqueadores de flujo):** Clasifiqué aquí el problema de Carlos con las inconsistencias (**US-001**) y su necesidad de ver la disponibilidad de formadores antes de cerrar un grupo (**US-002**). No impedían terminar la tarea, pero degradaban la promesa de "eficiencia monumental" que la plataforma debía cumplir.
*   **Severidad Baja (Los refinamientos de experiencia):** Aquí incluí desde la personalización de invitaciones (**US-003**) hasta la confusión de Ana con los "Toques con Formador" (**US-004**) y la falta de una sección de FAQs (**US-005**). También entraron aquí las demandas de David sobre los benchmarks (**US-006**) y las notas de Elena (**S-008**).

> **Insight de Diseño:** La severidad no se mide por lo "feo" que se ve un error, sino por cuántas veces obliga al usuario a salirse de su flujo mental para resolver un problema que el sistema debería haber anticipado. Un error de terminología (US-004) puede parecer menor, pero si genera 500 llamadas al equipo de soporte, se convierte en un problema de negocio.

#### El veredicto de los números: la validación del éxito

Al consolidar las métricas cuantitativas, los resultados fueron contundentes. Logramos una **Tasa de Éxito del 100%** en todas las tareas críticas. Ningún usuario se quedó "bloqueado" sin poder terminar un flujo, lo cual es un hito para una plataforma con reglas de negocio tan densas. El **SEQ (Single Ease Question)** promedio fue de **6.6/7**, indicando que la percepción de dificultad era mínima.

Pero la métrica que realmente me dio tranquilidad fue el **SUS (System Usability Scale)** global, que alcanzó un **85/100**. En el mundo del software corporativo, un 85 sitúa a la plataforma en el rango de "Excelente". No es común que herramientas de gestión interna alcancen estos niveles de satisfacción; normalmente, los usuarios las "toleran" porque no tienen opción. Aquí, las citas textuales como *"La automatización es salvadora"* o *"Ahora sí sé qué me falta por aprender"* validaron que no solo estábamos entregando funcionalidad, sino también valor emocional y profesional.

Este análisis transformó mi percepción del proyecto. GAC dejó de ser un conjunto de pantallas en Figma para convertirse en un ecosistema vivo. Me di cuenta de que el diseño perfecto no es el que no tiene errores, sino el que tiene la madurez suficiente para ser diagnosticado y mejorado. Tenía la radiografía completa en mis manos; ahora el reto era volver a la mesa de dibujo y aplicar estas lecciones sin romper la armonía que ya habíamos logrado.


A pesar de las métricas brillantes, la frustración silenciosa de Carlos con la edición de plantillas y la confusión de Ana con la terminología se quedaron grabadas en mi cabeza como una interferencia que no podía ignorar. Sabía que si no resolvía esos puntos de fricción ahora, la "excelencia" del 85% se erosionaría rápidamente en el uso diario. El desafío era volver al prototipo para ejecutar una cirugía estética y funcional que resolviera estas deudas de diseño antes de la segunda ronda de validación, donde el margen de error sería inexistente.

### Parte 5: El Ciclo Iterativo Refinamiento y Segunda Ronda

#### La cirugía de producto: De la radiografía a la acción

Tener un 85% de éxito en las pruebas iniciales es, paradójicamente, una de las situaciones más peligrosas para un diseñador. Es fácil dejarse seducir por la cifra y pasar por alto que ese 15% restante representa la frustración real de personas como Carlos o Ana. Sabía que si entregaba el prototipo así, estaba entregando deudas de diseño que el equipo de desarrollo pagaría con intereses más tarde. Tenía la radiografía completa de los puntos de dolor y, aunque el cronograma apretaba, decidí que no podíamos avanzar al handoff sin antes realizar una "cirugía" profunda en los flujos que habían presentado fricción.

El reto no era solo estético; era un ejercicio de negociación técnica. No se trataba de rediseñar por rediseñar, sino de maniobrar entre lo que el usuario necesitaba y lo que el sistema podía soportar sin romper el presupuesto de tiempo. Esta fase de iteración fue el momento en que el diseño dejó de ser una propuesta de intención para convertirse en una solución blindada por la evidencia.

#### El taller de priorización: Negociando la factibilidad

Convoqué a una sesión de cuatro horas con el Líder Técnico y los desarrolladores frontend y backend. Mi objetivo era claro: presentar los hallazgos de la primera ronda no como una lista de errores, sino como oportunidades críticas de negocio. Para generar empatía inmediata, no usé gráficas frías; usé las voces de los usuarios. Cuando el equipo escuchó las grabaciones de los momentos de confusión, la resistencia técnica se transformó en voluntad de resolución.

Analizamos cada identificador de problema, desde el **US-001 hasta el US-009**, bajo un filtro de impacto versus esfuerzo. El debate más intenso surgió con la corrección de inconsistencias de Carlos. El equipo de desarrollo inicialmente sugirió que el usuario simplemente re-subiera la plantilla de Excel, pero yo defendí la necesidad de una edición en línea. 

> "Si obligamos a Carlos a salir de la plataforma para corregir un solo dato en Excel y volver a subirlo, estamos rompiendo la promesa de automatización", argumenté. 

Llegamos a un acuerdo: implementaríamos una interfaz de edición directa en la tabla de errores para cambios quirúrgicos, y mantendríamos la re-subida masiva solo para fallos estructurales. Este equilibrio nos permitió mantener la **factibilidad técnica** sin sacrificar la **UX**.

#### Iteración en Figma: Resolviendo la carga cognitiva

Con los acuerdos del taller sobre la mesa, me encerré a actualizar los prototipos de alta fidelidad. Esta no fue una fase de "embellecimiento", sino de ajuste estructural. Me enfoqué en tres frentes críticos que habían generado fricción:

*   **La autonomía de Carlos (US-001 y US-002):** Diseñé una interfaz de edición *inline* dentro del "Reporte Detallado de Errores". Ahora, si una fecha o un nombre venían mal en la plantilla, Carlos podía corregirlos ahí mismo, ahorrando minutos vitales por cada carga. Además, integré un panel lateral de "Disponibilidad de Formadores" que aparece justo cuando estás ajustando un grupo. Ver la carga de trabajo y la especialización de los formadores en tiempo real eliminó la necesidad de que Carlos consultara archivos externos.
*   **La claridad semántica de Ana (US-004 y US-005):** Para resolver la confusión con los "Toques con Formador", implementé **tooltips descriptivos** y modales ligeros en el "Mapa Visual de Mi Ruta". Al pasar el cursor, Ana ahora recibe una explicación clara de qué pasará en ese hito (Nivel 1, 4, 8, 12), transformando un término técnico en un paso lógico de su carrera. También estructuré una sección de **FAQs** accesible desde cualquier punto para reducir la ansiedad del colaborador novato.
*   **El control estratégico de David (US-006 y US-007):** Para el dashboard de líderes, articulé un gráfico comparativo que muestra el avance del equipo frente al promedio de la dirección. Esto le dio a David el contexto que pedía a gritos: saber si su equipo va lento o si es una tendencia general. Además, añadí la columna de "Revisado" con un checkbox simple, una micro-interacción que le permite llevar su propio control interno sin procesos burocráticos adicionales.

#### La segunda ronda: El veredicto de los trece

No podíamos dar por bueno el trabajo sin volver a la trinchera. Recluté a los mismos 13 usuarios originales (incluyendo a Carlos, 4 colaboradores, 4 líderes y 4 formadores) para lo que considero un "A/B testing emocional". Quería ver si los cambios no solo resolvían el problema técnico, sino si también cambiaban su percepción de la herramienta.

Apliqué nuevamente el protocolo de **"pensar en voz alta"**, pero esta vez con un enfoque forense en las soluciones implementadas. Mi mayor temor era la "regresión de usabilidad": que al arreglar la edición de Carlos, hubiéramos complicado el flujo de carga. Sin embargo, la sesión fluyó con una naturalidad que no tuvimos en la primera ronda. Observé cómo Ana encontraba los tooltips sin que yo tuviera que mediar, y cómo Carlos sonreía al corregir un error directamente en la pantalla. Esa validación silenciosa es, para mí, el indicador de éxito más fiable.

#### Análisis final: Del 85 al 90 y más allá

Los resultados de esta segunda validación fueron contundentes y, honestamente, un alivio profesional. Al tabular las métricas, los números hablaban de una plataforma que finalmente "respiraba" bien:

*   **System Usability Scale (SUS):** Escalamos de un buen terreno a la excelencia, alcanzando un **90/100**. Este salto de 5 puntos representa la eliminación de casi todas las barreras críticas de adopción.
*   **Eficiencia Temporal:** Registré una reducción promedio del **20-30% en el tiempo en tarea** para procesos complejos. La segmentación que antes le tomaba a Carlos varios minutos de duda, ahora se completaba con una fluidez quirúrgica.
*   **Single Ease Question (SEQ):** Carlos calificó la facilidad de las tareas con un **7/7 (Extremadamente fácil)**. Las citas directas confirmaron el impacto: *"Ahora sí sé qué es un 'toque con formador', ¡muy claro!"* o *"La edición en línea me ahorra la vida"*.

Cerré el informe de esta segunda ronda marcando los IDs **US-001 al US-009 como "RESUELTOS"**. La plataforma GAC ya no era solo un diseño atractivo; era un sistema probado, resiliente y listo para ser construido. Esta iteración me recordó que el diseño senior no se trata de tener la razón a la primera, sino de tener la humildad de escuchar al usuario y la destreza técnica para pivotar con precisión.


Aunque la usabilidad general rozaba la perfección, al observar a un colaborador con baja visión intentar navegar por el mapa de ruta, me di cuenta de que nuestro "90/100" tenía un punto ciego peligroso. Habíamos diseñado una herramienta excelente para el usuario promedio, pero Gentera es una empresa de inclusión radical y nuestro compromiso no podía quedarse a medias. Me preparé para someter el diseño a una auditoría mucho más estricta: el estándar **WCAG 2.1 AA**, donde la estética tendría que rendirse ante la accesibilidad pura.

### Parte 6: Inclusividad Radical Pruebas de Accesibilidad Wcag 2.1 Aa

#### El punto ciego de la perfección visual

Al cerrar la segunda ronda de pruebas de usabilidad con métricas de satisfacción que rozaban el techo, sentí una inquietud que cualquier diseñador con años en esto reconoce: el sesgo del "usuario ideal". Habíamos optimizado la plataforma GAC para que Carlos y Sofía volaran a través de los flujos, pero Gentera no es una empresa que diseñe solo para el promedio; su ADN es la inclusión radical. Me detuve a observar el prototipo de alta fidelidad y me hice la pregunta incómoda: ¿qué pasa si el administrador tiene baja visión o si un líder de unidad debe navegar la plataforma usando solo el teclado debido a una discapacidad motriz temporal?

En ese momento, decidí que el "aprobado" de usabilidad no era el final del camino. Moví el tablero de la observación conductual al análisis forense de la interfaz. No quería una capa superficial de accesibilidad; quería blindar el producto bajo el estándar **WCAG 2.1 Nivel AA**. Sabía que integrar esto ahora, antes de que una sola línea de código final fuera escrita, ahorraría meses de deuda técnica y, lo más importante, aseguraría que ningún colaborador de Gentera se quedara fuera del sistema de capacitación por una barrera de diseño que yo no supe prever.

#### La auditoría bajo los pilares POUR

Para ejecutar esta auditoría con rigor, estructuré mi evaluación sobre los cuatro principios fundamentales de las WCAG: **Perceptible, Operable, Comprensible y Robusto (POUR)**. No los traté como una lista de verificación burocrática, sino como lentes estratégicos para diseccionar cada componente que habíamos construido.

Primero, me enfoqué en que la información fuera **Perceptible**. Esto significaba que nada podía depender de un solo sentido. Revisé que cada icono de estado en los dashboards de los líderes no solo comunicara avance mediante el color, sino que tuviera texturas o etiquetas de texto que permitieran a una persona con daltonismo distinguir entre un curso "Pendiente" y uno "En curso". Validé que los contrastes no fueran solo "bonitos", sino legalmente legibles, asegurando que el texto y el fondo mantuvieran una relación de contraste robusta.

La **Operabilidad** fue mi siguiente campo de batalla. Un sistema es inútil si no puedes navegarlo. Me propuse garantizar que cada botón, campo de formulario y enlace en la compleja tabla de segmentación de Carlos fuera accesible sin tocar el ratón. Esto implicaba verificar que el orden de navegación fuera lógico y que no existieran las temidas "trampas de teclado" donde el foco se queda atrapado en un modal infinito.

Luego pasé a la **Comprensibilidad**. Aquí, mi objetivo fue que la interfaz fuera predecible. Si un formador abría su agenda, el comportamiento debía ser consistente con el resto de la plataforma. Analicé las etiquetas de los formularios de carga de plantillas para asegurar que las instrucciones fueran inequívocas, reduciendo la carga cognitiva y evitando errores antes de que ocurrieran. Finalmente, la **Robustez** fue el criterio de cierre: me aseguré de que la estructura semántica del diseño fuera lo suficientemente sólida para que cualquier tecnología de asistencia, hoy o en el futuro, pudiera interpretar el contenido de forma fiable.

#### El despliegue del arsenal técnico y las pruebas manuales

Para que esta auditoría tuviera validez técnica, combiné el barrido automatizado con la sensibilidad del juicio manual. Inicié instalando extensiones como **WAVE** y **axe DevTools** directamente sobre mis maquetas de alta fidelidad exportadas. Estas herramientas son implacables; detectaron de inmediato errores de jerarquía de encabezados que el ojo humano ignora, pero que para un software de asistencia son muros infranqueables. 

Sin embargo, las herramientas automáticas tienen un límite: no pueden sentir la frustración. Por eso, pasé a las **pruebas manuales**, que considero el corazón de la accesibilidad senior. Desconecté mi ratón y navegué la plataforma GAC usando exclusivamente las teclas **Tab, Enter y Espacio**. Fue un ejercicio de humildad. Descubrí que, aunque visualmente el diseño era impecable, el "foco" del teclado —ese pequeño recuadro que indica dónde estás parado— se perdía en la inmensidad de las tablas de datos. 

Para cerrar el círculo, activé lectores de pantalla: **NVDA** en Windows y **VoiceOver** en mi entorno de diseño. Escuchar mi interfaz en lugar de verla cambió mi perspectiva por completo. Me obligó a verificar que el orden de lectura no fuera solo el que dictaba el orden visual de las capas en Figma, sino un orden semántico que contara una historia coherente. Si el lector de pantalla anunciaba el botón de "Cerrar" antes que el título del modal, el flujo estaba roto, aunque se viera hermoso.

#### Hallazgos forenses: ACC-001 al ACC-003

La auditoría arrojó tres hallazgos críticos que documenté con precisión de cirujano para que el equipo de desarrollo no tuviera margen de duda.

El primero fue el **ACC-001: Foco Visible**. Detecté que en las tablas de gestión de colaboradores, el indicador de foco del teclado era demasiado sutil. Para un usuario con visión limitada, saber qué fila estaba seleccionada era una adivinanza. Mi recomendación fue drástica pero necesaria: debíamos aumentar el grosor del *outline* y asegurar un contraste de color que hiciera que el foco "saltara" a la vista. No era una cuestión estética; era el único hilo conductor para quien no usa un puntero.

El segundo hallazgo, **ACC-002**, se centró en los **iconos decorativos**. En nuestro afán por hacer la plataforma visualmente rica, habíamos incluido iconos de fondo que los lectores de pantalla intentaban interpretar, generando un ruido innecesario: *"Imagen, decoración, curva azul, imagen"*. Di la instrucción clara de que estos elementos debían llevar un atributo `alt=""` explícitamente vacío. En accesibilidad, a veces el silencio es el mejor diseño; queríamos que el usuario se concentrara en los datos de capacitación, no en nuestra ornamentación.

El hallazgo más sofisticado fue el **ACC-003: Propósito de los Enlaces**. En las tablas de Carlos, teníamos una columna repetitiva con el enlace "Ver Detalle" para cada colaborador. Para alguien que usa un lector de pantalla y navega por una lista de enlaces, escuchar *"Ver detalle, ver detalle, ver detalle"* diez veces es una pesadilla de usabilidad. Propuse el uso de `aria-label` para inyectar contexto oculto: el sistema ahora leería *"Ver detalle del colaborador Juan Pérez"*, proporcionando una claridad absoluta sin alterar la limpieza visual de la interfaz para el resto de los usuarios.

#### La prueba de estrés: Contraste y Zoom al 200%

No me detuve en los enlaces. Sometí la paleta de colores de Gentera a una validación estricta de ratio de contraste. Me aseguré de que cada combinación de texto sobre fondo cumpliera con el mínimo de **4.5:1** exigido por el Nivel AA. En algunos casos, tuve que ajustar sutilmente los tonos de gris y azul de nuestra guía de estilo para ganar esos puntos de contraste necesarios sin sacrificar la identidad de marca.

Finalmente, ejecuté la prueba de escalabilidad: el **zoom al 200%**. Es aquí donde muchos diseños se rompen, donde los menús se enciman y los botones desaparecen de la pantalla. En GAC, verifiqué que el *layout* fuera lo suficientemente elástico para reacomodarse. Ver la plataforma expandida al doble de su tamaño y confirmar que el flujo de segmentación seguía siendo funcional y que no había desbordamientos de texto me dio la certeza de que estábamos entregando un producto resiliente. 

Diseñar para la accesibilidad no es un favor que le hacemos a una minoría; es elevar el estándar de calidad para todos. Un foco claro ayuda al usuario avanzado que prefiere el teclado; un buen contraste ayuda a quien consulta la plataforma bajo la luz del sol en una sucursal. Al alcanzar el cumplimiento de WCAG 2.1 AA, sentí que finalmente le hacíamos justicia al valor de "Centrado en la Persona" de Gentera. La plataforma ya no solo era usable; era digna.

> **Insight de Diseño:** La accesibilidad es el test de Turing del diseño senior. Si tu interfaz solo funciona para quienes ven y se mueven como tú, no has diseñado un producto, has diseñado un espejo. El verdadero oficio aparece cuando la solución sostiene su valor en la oscuridad de un lector de pantalla o en la limitación de un teclado.


Con la arquitectura blindada y la accesibilidad certificada, sentí que el diseño ya no me pertenecía solo a mí, sino a los usuarios. Sin embargo, sabía que todo este rigor técnico se quedaría en papel si no lograba que los tomadores de decisiones en Gentera vieran el valor estratégico de lo que habíamos construido. Me preparé para la sesión más tensa del proyecto: la alineación final donde cada decisión de diseño, desde el `aria-label` hasta el ratio de contraste, tendría que ser defendida ante los ojos críticos de los stakeholders en una sesión de validación definitiva.

### Parte 7: Alineación Estratégica Validación Final con Stakeholders

#### El silencio antes de la validación estratégica

Había pasado semanas sumergido en el rigor técnico de las pautas WCAG 2.1 AA y en el análisis microscópico de las rondas de usabilidad. Tenía la certeza de que el prototipo de alta fidelidad de GAC era, desde una perspectiva de diseño, una pieza de ingeniería impecable. Sin embargo, en este oficio aprendes pronto que un diseño perfecto es irrelevante si no sobrevive a la sala de juntas. Me encontraba en ese punto crítico donde el rigor técnico debe transformarse en diplomacia corporativa. Sabía que para Lalo y Carlos, los stakeholders clave en Gentera, los contrastes de color y los `aria-labels` eran abstractos; lo que ellos necesitaban ver era cómo cada decisión de diseño reducía el riesgo operativo y blindaba la eficiencia del Modelo de Capacitación.

Preparé la sesión de validación final no como una exposición de arte, sino como una entrega de resultados de negocio. Mi razonamiento era estratégico: la validación con stakeholders no es un espacio para pedir permiso, sino para demostrar que el proceso de diseño centrado en la persona ya había filtrado los errores y que lo que estábamos presentando era la versión más rentable y segura del producto. Tenía que alinear la visión de "Lalo" (el líder estratégico preocupado por el impacto global) con las necesidades de "Carlos" (el administrador que vive la fricción de las plantillas de Excel cada lunes).

#### La consolidación forense: Transformando datos en argumentos

Antes de enviar la invitación a la reunión, dediqué dos días enteros a lo que llamo "consolidación forense". No podía presentarme con notas dispersas; necesitaba documentos que respiraran autoridad. Construí el **Informe Resumido de Pruebas de Usabilidad** destilando las dos rondas iterativas que habíamos ejecutado. Mi enfoque no fue listar cada pequeño error, sino agrupar los hallazgos en los 3-5 problemas críticos que logramos resolver entre la fase de wireframes y el prototipo de alta fidelidad.

Para darle peso cuantitativo a la narrativa, utilicé métricas que no dejaran lugar a dudas:
*   **Tasa de Éxito en Tareas Críticas:** Documenté cómo la tarea de "Segmentación de grupos por puesto" pasó de ser un proceso confuso donde el 60% de los usuarios se perdía en los filtros, a una tasa de éxito del 100% en la ronda final.
*   **Single Ease Question (SEQ):** Utilicé esta métrica post-tarea para demostrar que la percepción de dificultad bajó drásticamente. "Crear un grupo presencial y asignar sede" obtuvo un promedio de 6.2 sobre 7, validando que la complejidad del negocio había sido domada por la interfaz.
*   **Métricas de Accesibilidad:** No me limité a decir que "cumplíamos". Detallé cómo habíamos eliminado barreras para usuarios con debilidad visual, alineando el producto con el valor de "Centrado en la Persona" de Gentera.

Esta preparación fue el cimiento de mi confianza. Sabía que si alguien cuestionaba un cambio en el flujo de invitación por Outlook, yo tenía el dato exacto de cuántos segundos ahorraba el usuario con la nueva propuesta.

#### Estrategia de presentación: El impacto de la empatía real

Diseñé la sesión para que fuera una experiencia de empatía radical, no una presentación de diapositivas estáticas. Sabía que la jerga técnica de UX (como "carga cognitiva" o "heurísticas") podía crear una barrera con los stakeholders, así que hablé su idioma: **eficiencia operativa y claridad de la información**. 

Para la sesión, utilicé clips de video que había extraído de las pruebas moderadas en Lookback y Zoom. No hay argumento que venza a ver a un colaborador real de Gentera suspirando de alivio al encontrar su "Pasaporte Digital" sin ayuda. Apliqué el protocolo de "think-aloud" durante la presentación de estos clips: mostraba el momento de confusión inicial del usuario frente a los procesos antiguos (o versiones iniciales del diseño) y luego el momento de resolución en la versión actual.

> **Insight de Diseño:** En una sala de stakeholders, un video de 30 segundos de un usuario frustrado tiene más peso que un reporte de 50 páginas. Mi trabajo fue curar esos momentos para que el "visto bueno" fuera una consecuencia emocional y lógica de ver el problema resuelto.

Utilicé una técnica de comparativas **"Antes/Después"** con anotaciones visuales muy agresivas. Mostraba el wireframe de baja fidelidad donde detectamos que la terminología de "Sede" era confusa, y luego el prototipo de alta fidelidad con los tooltips y la segmentación automatizada funcionando. Esta trazabilidad visual demostraba que el diseño no era un capricho estético, sino una evolución científica basada en evidencia.

#### Gestión de feedback y la defensa de la integridad del diseño

La reunión con Lalo y Carlos fue intensa. Lalo, con su visión estratégica, buscaba asegurar que la plataforma GAC pudiera escalar a otros departamentos en el futuro. Carlos, por otro lado, escudriñaba cada campo de la segmentación de grupos para asegurarse de que no le generara más trabajo administrativo.

Durante la sesión, surgieron las inevitables solicitudes de "funcionalidades extra". Alguien sugirió agregar un módulo de chat en vivo dentro del Kardex del colaborador. En ese momento, tuve que ejercer mi rol de guardián del alcance (**out of scope**). Mi técnica fue de validación y postergación: *"Es una idea valiosa que ciertamente aumenta el valor humano, pero para asegurar el lanzamiento estable de la automatización de invitaciones (I1) y la trazabilidad (I2), la anotaremos en nuestro backlog estratégico para la Fase 4"*. Esto me permitió mantener el foco en validar lo que ya estaba construido y probado.

Hubo un momento de tensión cuando se cuestionó por qué la segmentación de grupos era tan "rígida" en ciertos pasos. Aquí es donde la defensa basada en datos es vital. Expliqué, apoyándome en los resultados de las pruebas, que cuando dábamos demasiada libertad manual en la selección de sedes, el error humano aumentaba un 40% según nuestras observaciones. Al automatizar la regla de negocio, garantizábamos que ningún colaborador se quedara fuera de su jornada de capacitación por un error de dedo. Al ver los datos, la resistencia de los stakeholders se transformó en apoyo.

#### El "Visto Bueno": De la validación a la ejecución

Hacia el final de la hora y media de reunión, la atmósfera cambió. La presentación de los diseños refinados, donde mostré cómo cada punto de fricción detectado en las pruebas de usabilidad había sido corregido (como la claridad en el estatus de avance por subdirección), cerró el círculo de confianza. 

Busqué la aprobación formal con una pregunta directa: *"¿Consideran que estos diseños refinados, que ya han sido validados con sus equipos operativos, cubren las expectativas para iniciar la fase de desarrollo?"*. El asentimiento de Lalo y la confirmación de Carlos de que la herramienta les ahorraría horas de trabajo semanal fueron el cierre de la Fase 3. 

No fue solo una aprobación de pantallas; fue la validación de un método. Acordamos los próximos pasos: la preparación de las especificaciones técnicas detalladas y el handoff para el equipo de desarrollo de Dacodes. Al cerrar la sesión, sentí que la asociación estratégica entre Dacodes y Gentera se había fortalecido. Ya no éramos solo proveedores de diseño; éramos los arquitectos de una solución que ellos mismos habían visto funcionar en manos de sus usuarios.

**Reflexión final:**
Esta actividad me recordó que el diseño de producto es, en un 50%, gestión de expectativas y comunicación de valor. Lograr que los stakeholders vean el valor detrás de una decisión de accesibilidad o de un flujo simplificado requiere una transparencia total y una narrativa basada en la evidencia, no en la opinión. Al final, el éxito de GAC no radicó solo en lo bien que se veía el prototipo, sino en la seguridad con la que pudimos decir: "esto funciona porque ya lo vimos funcionar".