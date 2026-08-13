# Fase 0: Preparación Estratégica y Alineación (Pre-Proyecto)

## Actividad_03_Planificación Inicial y Definición de Herramientas

> Esta actividad constituye el cimiento estratégico del proyecto. Se centra en la validación exhaustiva del Brief de Producto mediante un workshop colaborativo con stakeholders de alto nivel (Dirección General, Médica, TI y Marketing), asegurando que los objetivos SMART, el alcance y los KPIs estén alineados con la visión institucional. Simultáneamente, se establece la gobernanza del proyecto a través de un Plan de Comunicación robusto que define canales, frecuencias y protocolos de escalación, garantizando la transparencia y eficiencia operativa desde el día cero.

### Parte 1: Deconstrucción Estratégica y Preparación Interna

#### La deconstrucción del brief: el blindaje antes de la batalla

Tener un brief firmado por la dirección no significa que el proyecto sea viable; significa que hay un deseo, pero no necesariamente un plan. Recuerdo perfectamente la semana previa al primer gran workshop de 2021. Me encerré con el borrador del brief que habíamos elaborado inicialmente. Mi primer impulso no fue diseñar pantallas, sino deconstruir cada frase de ese documento. Sabía que si no cuestionábamos los cimientos ahora, la estructura colapsaría en plena fase de desarrollo.

Como responsable del diseño del producto, mi obsesión era la coherencia histórica. No podíamos proponer una solución moderna ignorando por qué el sistema actual estaba roto. Tomé los hallazgos de la investigación que cubría el periodo 2015-2020 y los puse frente a frente con nuestros objetivos para 2021. El diagnóstico era claro: la fragmentación no era un error estético, era una falla de arquitectura. El portal "Mi Salud ABC", operando bajo un subdominio separado y basado en la tecnología MyVue de Carestream, era un silo que solo servía para radiología. Mi tarea en esta fase de preparación interna fue "despiezar" los objetivos SMART que habíamos planteado para asegurar que cada KPI tuviera una raíz en la realidad operativa del Centro Médico ABC. Si decíamos que íbamos a unificar la experiencia, tenía que demostrar técnicamente por qué el modelo de subdominios era el inhibidor número uno de la conversión.

#### El escepticismo técnico como herramienta de diseño

Uno de los puntos más críticos de esta deconstrucción fue el Expediente Clínico Electrónico (ECE). El brief mencionaba que se había implementado internamente entre 2017 y 2019, pero mi experiencia me obligaba a ser escéptico. ¿Estaba ese ECE realmente listo para ser consumido por un paciente en una interfaz web, o era simplemente una base de datos administrativa para uso interno de los médicos? 

Pasé días analizando esta brecha. No quería que el equipo de diseño proyectara un flujo de "Historial Médico Consolidado" si la infraestructura de TI no podía entregar esos datos en tiempo real. Esta no era una preocupación menor; era el riesgo técnico más grande del proyecto. Me pregunté: "¿Puede la plataforma web realmente comunicarse con los sistemas backend para mostrar resultados de laboratorio e imagenología en un solo lugar?". Si la respuesta era un "quizás", el diseño tenía que ser modular para no prometer lo que no podíamos cumplir en el lanzamiento de enero de 2022. Esta fase de duda metódica fue lo que me permitió blindar la propuesta: prefería un alcance honesto y funcional a una visión espectacular que se quedara en un prototipo de Figma.

#### La gestión de expectativas: presupuesto vs. ambición "Mobile-First"

Al revisar la sección de alcance y restricciones del brief, identifiqué una tensión peligrosa. El documento declaraba una prioridad "Mobile-First" absoluta y una accesibilidad universal bajo estándares WCAG 2.1 AA. Sin embargo, al contrastar esto con los recursos y el tiempo asignado para un lanzamiento en doce meses, detecté que estábamos subestimando el esfuerzo. 

Un diseño responsivo real para una institución de salud no es solo que el sitio se "vea bien" en el teléfono; es asegurar que un paciente en una situación de emergencia o un adulto mayor con limitaciones visuales pueda agendar una cita en tres clics. Me dediqué a filtrar cada funcionalidad deseada —desde el agendamiento de especialistas hasta la integración de pagos en línea— bajo la lente de la viabilidad. Decidí que mi papel en el workshop no sería solo el de facilitador, sino el de primer filtro de realidad. Si el presupuesto no alcanzaba para una app nativa, debíamos ser enfáticos en que la web responsiva sería nuestra única apuesta ganadora para 2022, sentando las bases para el futuro pero sin dispersar los esfuerzos ahora.

#### Arquitectura de una discusión incómoda

Con los riesgos identificados, comencé a construir la guía de discusión en Google Slides. No quería una presentación de "estado del proyecto", quería un artefacto que provocara el debate. Diseñé cada diapositiva para que fuera un campo de batalla controlado. Por ejemplo, en la sección de "Alcance", preparé una pregunta directa para los stakeholders: "El brief propone que el rediseño inicial no incluirá una app nativa. ¿Estamos todos de acuerdo con esta priorización dados los recursos?". 

Sabía que si no hacíamos esta pregunta ahora, alguien la haría en seis meses cuando ya fuera demasiado tarde para cambiar el rumbo. Paralelamente, preparé un lienzo en Miro que funcionaría como el "gemelo digital" de la sesión. Estructuré el tablero con columnas claras: acuerdos validados, clarificaciones necesarias y el "Parking Lot". Este último era vital; como diseñador senior, sé que las reuniones con directivos pueden descarrilarse fácilmente con ideas brillantes pero fuera de alcance. El Parking Lot sería mi herramienta para capturar esas ideas, darles valor, pero evitar que consumieran el tiempo sagrado de la validación estratégica.

#### El ancla de la realidad: contrastando con el pasado

Para cerrar esta fase de preparación, realicé un cruce final con el análisis comparativo pre-2018. Necesitaba argumentos sólidos para defender por qué el nuevo diseño debía romper con la estética profesional pero anticuada que el hospital había mantenido. 

> El criterio senior no está en proponer lo nuevo por ser nuevo, sino en demostrar por qué lo viejo ya no sostiene el negocio.

Utilicé los datos históricos para justificar nuestros KPIs. Si el objetivo era lograr que el 60% de las citas se agendaran en línea para julio de 2022, tenía que mostrar cómo el diseño anterior, con su navegación fragmentada, hacía que esa meta fuera imposible. Este contraste fue mi ancla de realidad. Me permitió transformar una discusión sobre "colores y botones" en una conversación sobre eficiencia operativa y satisfacción del paciente. Estaba preparando el terreno para que, cuando llegara el momento de pedir el "buy-in" de la Dirección General y la Dirección Médica, no estuviéramos hablando de gustos personales, sino de una estrategia de supervivencia digital validada contra los errores del pasado.


Una vez que tuve el brief deconstruido y las preguntas difíciles listas, me di cuenta de que el éxito del workshop no dependía solo del contenido, sino de quiénes estarían en la sala. El riesgo de dejar fuera a una voz crítica de TI o a un líder médico influyente podía dinamitar el proyecto meses después. Necesitaba ejecutar un mapeo de stakeholders quirúrgico y una convocatoria que no se sintiera como una invitación más, sino como el llamado a definir el futuro digital del Centro Médico ABC.#### La deconstrucción del brief: el blindaje antes de la batalla

Tener un brief firmado por la dirección no significa que el proyecto sea viable; significa que hay un deseo, pero no necesariamente un plan. Recuerdo perfectamente la semana previa al primer gran workshop de 2021. Me encerré con el borrador del brief que habíamos elaborado inicialmente. Mi primer impulso no fue diseñar pantallas, sino deconstruir cada frase de ese documento. Sabía que si no cuestionábamos los cimientos ahora, la estructura colapsaría en plena fase de desarrollo.

Como responsable del diseño del producto, mi obsesión era la coherencia histórica. No podíamos proponer una solución moderna ignorando por qué el sistema actual estaba roto. Tomé los hallazgos de la investigación que cubría el periodo 2015-2020 y los puse frente a frente con nuestros objetivos para 2021. El diagnóstico era claro: la fragmentación no era un error estético, era una falla de arquitectura. El portal "Mi Salud ABC", operando bajo un subdominio separado y basado en la tecnología MyVue de Carestream, era un silo que solo servía para radiología. Mi tarea en esta fase de preparación interna fue "despiezar" los objetivos SMART que habíamos planteado para asegurar que cada KPI tuviera una raíz en la realidad operativa del Centro Médico ABC. Si decíamos que íbamos a unificar la experiencia, tenía que demostrar técnicamente por qué el modelo de subdominios era el inhibidor número uno de la conversión.

#### El escepticismo técnico como herramienta de diseño

Uno de los puntos más críticos de esta deconstrucción fue el Expediente Clínico Electrónico (ECE). El brief mencionaba que se había implementado internamente entre 2017 y 2019, pero mi experiencia me obligaba a ser escéptico. ¿Estaba ese ECE realmente listo para ser consumido por un paciente en una interfaz web, o era simplemente una base de datos administrativa para uso interno de los médicos? 

Pasé días analizando esta brecha. No quería que el equipo de diseño proyectara un flujo de "Historial Médico Consolidado" si la infraestructura de TI no podía entregar esos datos en tiempo real. Esta no era una preocupación menor; era el riesgo técnico más grande del proyecto. Me pregunté: "¿Puede la plataforma web realmente comunicarse con los sistemas backend para mostrar resultados de laboratorio e imagenología en un solo lugar?". Si la respuesta era un "quizás", el diseño tenía que ser modular para no prometer lo que no podíamos cumplir en el lanzamiento de enero de 2022. Esta fase de duda metódica fue lo que me permitió blindar la propuesta: prefería un alcance honesto y funcional a una visión espectacular que se quedara en un prototipo de Figma.

#### La gestión de expectativas: presupuesto vs. ambición "Mobile-First"

Al revisar la sección de alcance y restricciones del brief, identifiqué una tensión peligrosa. El documento declaraba una prioridad "Mobile-First" absoluta y una accesibilidad universal bajo estándares WCAG 2.1 AA. Sin embargo, al contrastar esto con los recursos y el tiempo asignado para un lanzamiento en doce meses, detecté que estábamos subestimando el esfuerzo. 

Un diseño responsivo real para una institución de salud no es solo que el sitio se "vea bien" en el teléfono; es asegurar que un paciente en una situación de emergencia o un adulto mayor con limitaciones visuales pueda agendar una cita en tres clics. Me dediqué a filtrar cada funcionalidad deseada —desde el agendamiento de especialistas hasta la integración de pagos en línea— bajo la lente de la viabilidad. Decidí que mi papel en el workshop no sería solo el de facilitador, sino el de primer filtro de realidad. Si el presupuesto no alcanzaba para una app nativa, debíamos ser enfáticos en que la web responsiva sería nuestra única apuesta ganadora para 2022, sentando las bases para el futuro pero sin dispersar los esfuerzos ahora.

#### Arquitectura de una discusión incómoda

Con los riesgos identificados, comencé a construir la guía de discusión en Google Slides. No quería una presentación de "estado del proyecto", quería un artefacto que provocara el debate. Diseñé cada diapositiva para que fuera un campo de batalla controlado. Por ejemplo, en la sección de "Alcance", preparé una pregunta directa para los stakeholders: "El brief propone que el rediseño inicial no incluirá una app nativa. ¿Estamos todos de acuerdo con esta priorización dados los recursos?". 

Sabía que si no hacíamos esta pregunta ahora, alguien la haría en seis meses cuando ya fuera demasiado tarde para cambiar el rumbo. Paralelamente, preparé un lienzo en Miro que funcionaría como el "gemelo digital" de la sesión. Estructuré el tablero con columnas claras: acuerdos validados, clarificaciones necesarias y el "Parking Lot". Este último era vital; como diseñador senior, sé que las reuniones con directivos pueden descarrilarse fácilmente con ideas brillantes pero fuera de alcance. El Parking Lot sería mi herramienta para capturar esas ideas, darles valor, pero evitar que consumieran el tiempo sagrado de la validación estratégica.

#### El ancla de la realidad: contrastando con el pasado

Para cerrar esta fase de preparación, realicé un cruce final con el análisis comparativo pre-2018. Necesitaba argumentos sólidos para defender por qué el nuevo diseño debía romper con la estética profesional pero anticuada que el hospital había mantenido. 

> El criterio senior no está en proponer lo nuevo por ser nuevo, sino en demostrar por qué lo viejo ya no sostiene el negocio.

Utilicé los datos históricos para justificar nuestros KPIs. Si el objetivo era lograr que el 60% de las citas se agendaran en línea para julio de 2022, tenía que mostrar cómo el diseño anterior, con su navegación fragmentada, hacía que esa meta fuera imposible. Este contraste fue mi ancla de realidad. Me permitió transformar una discusión sobre "colores y botones" en una conversación sobre eficiencia operativa y satisfacción del paciente. Estaba preparando el terreno para que, cuando llegara el momento de pedir el "buy-in" de la Dirección General y la Dirección Médica, no estuviéramos hablando de gustos personales, sino de una estrategia de supervivencia digital validada contra los errores del pasado.


Una vez que tuve el brief deconstruido y las preguntas difíciles listas, me di cuenta de que el éxito del workshop no dependía solo del contenido, sino de quiénes estarían en la sala. El riesgo de dejar fuera a una voz crítica de TI o a un líder médico influyente podía dinamitar el proyecto meses después. Necesitaba ejecutar un mapeo de stakeholders quirúrgico y una convocatoria que no se sintiera como una invitación más, sino como el llamado a definir el futuro digital del Centro Médico ABC.

---

### Parte 2: Mapeo de Stakeholders y Convocatoria Estratégica

#### El riesgo de la "isla de diseño"

Después de pasar días deconstruyendo el brief y analizando los fracasos acumulados entre 2015 y 2020, llegué a una conclusión que todo diseñador con cicatrices de batalla conoce: un diseño brillante, técnicamente perfecto y centrado en el usuario, muere en la oscuridad si no tiene el **buy-in** político de quienes firman los cheques y controlan los servidores. Tenía frente a mí un documento sólido, pero era solo eso, un documento. Si quería que el rediseño del Centro Médico ABC dejara de ser un deseo y se convirtiera en una realidad operativa, tenía que salir de mi aislamiento creativo y enfrentarme a la estructura de poder del hospital.

No podía permitir que el proyecto se percibiera como una "iniciativa de diseño" aislada. El riesgo de la "isla de diseño" es real: trabajas durante meses para que, al final, un director médico o el jefe de TI detenga todo porque "no se les consultó" o porque "el sistema no soporta esa integración". Mi maniobra no fue estética, fue puramente estratégica. Decidí que el éxito del workshop de validación no dependería de lo que ocurriera dentro de la sala, sino de la precisión quirúrgica con la que seleccionara a los asistentes y cómo preparara el terreno antes de que se sentaran a la mesa. Estaba pasando de la estrategia a la política pura.

> El diseño es 20% ejecución visual y 80% construcción de consenso. Si no diseñas la conversación, alguien más la diseñará por ti, y probablemente no le gustará el resultado.

#### Mapeo quirúrgico: Identificando a los dueños del "no"

Basé mi estrategia de convocatoria en el protocolo de validación que definí en el documento **01_actividad_1_fase_0_validacion_del_brief_de_producto.pdf**. Mi primer paso fue realizar un **Stakeholder Mapping** que fuera más allá de un simple organigrama. Necesitaba a los pilares del negocio, pero también a los guardianes de la viabilidad técnica. 

Identifiqué a la **Dirección General** y a la **Dirección de Operaciones** como los patrocinadores necesarios; sin ellos, el proyecto carecería de la autoridad para romper los silos departamentales. Sin embargo, el verdadero reto estaba en la **Dirección Médica**. En una institución de salud, el criterio clínico es ley. Si el Director Médico no veía cómo el rediseño facilitaba la labor de sus especialistas o mejoraba la precisión del agendamiento, el proyecto nacería muerto. 

Luego estaba el **Jefe del Departamento de TI**. Sabía que él sería mi interlocutor más difícil y, a la vez, el más valioso. El brief proponía una integración profunda con el Expediente Clínico Electrónico (ECE), una zona que históricamente había sido un campo de batalla técnico. Invitarlo desde el día cero no fue un acto de cortesía, sino una maniobra de blindaje: necesitaba que sus restricciones técnicas se convirtieran en requisitos de diseño de inmediato, no en obstáculos insalvables seis meses después. Al incluirlo, neutralicé la posibilidad de un "no" técnico tardío.

Finalmente, convoqué al **Jefe de Marketing y Comunicación**. Su rol era vital para asegurar que la nueva plataforma no solo fuera funcional, sino que proyectara la excelencia institucional del ABC. Mi objetivo era que cada uno de estos líderes se sintiera co-autor del brief, transformando sus posibles críticas en contribuciones directas al alcance del proyecto.

#### La silla del paciente: Validando el DCU en la mesa de poder

Uno de los movimientos más deliberados que realicé fue la inclusión de representantes de los **Paneles de Pacientes** y del área de **Calidad y Experiencia del Paciente**. En muchas organizaciones, el diseño centrado en el usuario (**DCU**) se queda en el discurso; yo quería que fuera una presencia física en la mesa de toma de decisiones.

¿Por qué era esto una maniobra senior? Porque los stakeholders de alto nivel suelen discutir en términos de ROI, eficiencia y factibilidad. Al introducir la voz del paciente, obligué a que la conversación mantuviera un anclaje humano. Cuando discutíamos los **KPIs**, no solo hablábamos de "reducir el volumen de llamadas al call center" como una métrica de ahorro operativo. Con la gente de Calidad en la sala, podíamos validar que esa reducción de llamadas era, en realidad, un indicador de que el paciente finalmente podía autogestionar su salud sin frustraciones.

Esta inclusión sirvió para validar si nuestras suposiciones sobre el dolor del usuario —esa fragmentación que habíamos detectado en la investigación pre-2021— eran compartidas por quienes gestionan las quejas y sugerencias día a día. Fue mi manera de asegurar que el brief no solo reflejara los objetivos de negocio del hospital, sino las necesidades reales de los pacientes que, al final del día, son quienes determinan el éxito de la plataforma.

#### Blindaje político: De la opinión a la validación vinculante

Desde el inicio, dejé claro que no estábamos convocando a una "reunión de lluvia de ideas". Mi enfoque, siguiendo el paso 5 del proceso documentado, era establecer una jerarquía de **aprobación formal**. Quería que cada stakeholder entendiera su rol no como un opinólogo, sino como un validador vinculante de su área de expertise.

*   **TI:** Validaba la viabilidad técnica de las integraciones con el ECE y las restricciones de seguridad de datos.
*   **Director Médico:** Validaba la precisión clínica en el flujo de agendamiento y la presentación de resultados.
*   **Dirección General:** Validaba que el roadmap y los KPIs estuvieran alineados con la visión institucional 2022-2025.

Esta distinción de roles fue fundamental para gestionar las expectativas. Al definir que buscábamos una aprobación explícita —ya fuera mediante una firma o una confirmación formal por correo electrónico—, elevé la importancia del workshop. El brief dejaría de ser un borrador para convertirse en nuestra **"estrella polar"**. Si en el futuro alguien intentaba cambiar el alcance de forma caprichosa, yo tendría el respaldo de un documento validado por toda la cúpula directiva. Era, en esencia, un contrato de confianza y responsabilidad compartida.

#### El protocolo de lectura previa: Google Workspace como herramienta de presión positiva

Para un workshop de esta magnitud, el tiempo es el recurso más escaso. Los directores de un hospital como el ABC no tienen tres horas para verme leer un documento. Por eso, ejecuté un protocolo de **lectura previa** cinco días antes de la sesión, utilizando las herramientas de **Google Workspace** de manera estratégica.

Distribuí el brief preliminar a través de **Google Docs**, pero no como un archivo adjunto muerto, sino como un documento vivo con permisos de "comentarista". Mi instrucción fue clara y firme: todos debían leer el documento y anotar sus dudas, desacuerdos o sugerencias directamente en el archivo antes del workshop. 

**¿Por qué hice esto?**
1.  **Eficiencia:** Quería llegar a la sesión habiendo digerido ya el 80% de las objeciones menores.
2.  **Transparencia:** Al ver los comentarios de otros directores, los stakeholders empezaron a notar puntos de fricción interdepartamental antes de la reunión, lo que les permitió llegar con una mentalidad más colaborativa.
3.  **Compromiso:** Alguien que ya invirtió 20 minutos comentando un documento llega al workshop con un nivel de involucramiento mucho mayor que alguien que lo ve por primera vez.

Utilicé **Google Calendar** para gestionar una convocatoria que incluía una agenda detallada minuto a minuto, y configuré una sesión híbrida en **Google Meet** para asegurar que aquellos líderes que estuvieran en cirugías o en otras sedes pudieran conectarse. No era solo logística; era asegurar que nadie tuviera la excusa de "no estar enterado" para descarrilar el proceso después.

#### Reflexión sobre la gestión de expectativas

Mirando hacia atrás, esta fase de preparación fue donde realmente se ganó el proyecto. A menudo, los diseñadores menos experimentados subestiman la carga administrativa y política de estas etapas, viéndolas como un estorbo para el "trabajo real". Para mí, este **era** el trabajo real. 

El uso de herramientas como **Miro** para la futura facilitación y **Google Docs** para la edición colaborativa no eran lujos técnicos. Eran mecanismos para garantizar la trazabilidad. En una organización tan compleja como el Centro Médico ABC, los acuerdos verbales se los lleva el viento. Necesitaba que cada decisión quedara anclada en una plataforma donde todos pudieran verla. Mi objetivo era eliminar la ambigüedad. Estaba preparando el escenario para que, cuando entráramos a ese workshop, la discusión no fuera sobre si el proyecto era necesario, sino sobre cómo íbamos a ejecutarlo con la máxima precisión posible.


EJECUCIÓN DEL WORKSHOP: ALINEACIÓN DE PROBLEMAS Y OBJETIVOS. El ambiente en la sala era tenso; tenía a los directores más influyentes del hospital frente a una pizarra de Miro y las primeras preguntas sobre la integración del ECE empezaron a surgir con una agresividad que no esperaba. Sabía que si no lograba canalizar esa energía hacia un consenso sobre los KPIs en los próximos sesenta minutos, el proyecto se fragmentaría antes de siquiera haber dibujado el primer wireframe.

---

### Parte 3: Ejecución del Workshop Alineación de Problemas y Objetivos

#### La sala de guerra: donde el diseño se convierte en estrategia de negocio

El ambiente en la sala —una mezcla de presencialidad controlada y cuadros de **Google Meet** en la pantalla principal— estaba cargado de una expectativa pesada. Tenía frente a mí a la Dirección General, al Director Médico y al Jefe de TI, personas cuyo tiempo se mide en minutos de alta criticidad y que no estaban ahí para ver una presentación estética. Mi mayor riesgo en ese momento era que la sesión se convirtiera en un foro de opiniones subjetivas sobre colores o tipografías. Sabía que si no lograba anclar la discusión en datos duros desde el primer minuto, el proyecto se diluiría en preferencias personales. 

Entré a la sesión con una mentalidad forense, basándome en el proceso de validación detallado en `01_actividad_1_fase_0_validacion_del_brief_de_producto.pdf`. No venía a "vender" una idea; venía a facilitar un consenso sobre una estrategia de supervivencia digital. Mi objetivo era transformar esa tensión inicial en una estructura de trabajo donde cada decisión estuviera blindada por la evidencia de los últimos cinco años de fricción operativa.

#### El encuadre de las cuatro horas: estableciendo la autoridad del dato

Inicié el workshop estableciendo una narrativa de urgencia basada en la investigación 2015-2020. No podíamos permitirnos un "lavado de cara". Utilicé **Google Slides** no como un apoyo visual pasivo, sino como un escalpelo para diseccionar el brief sección por sección. Las reglas del juego fueron claras: escucha activa, enfoque en soluciones y, sobre todo, que cada "yo creo" fuera contrastado con un "el dato dice".

Para silenciar las opiniones subjetivas que suelen descarrilar estos proyectos, presenté la justificación técnica de la fragmentación actual. Fue el momento de poner sobre la mesa la realidad incómoda: el Centro Médico ABC tenía una excelencia clínica de clase mundial, pero su puerta de entrada digital estaba rota. Al mostrar cómo la arquitectura de la información obligaba al paciente a saltar entre dominios sin lógica alguna, logré que la discusión pasara de "¿qué queremos construir?" a "¿cómo resolvemos este fallo sistémico?". Este encuadre fue vital; sin él, el proyecto habría nacido muerto, limitado a ser un simple cambio de interfaz sin impacto en el negocio.

#### Control forense en Miro: la diplomacia del 'Parking Lot'

Mientras la discusión subía de tono, especialmente cuando el Jefe de TI empezó a cuestionar la viabilidad de integrar el Expediente Clínico Electrónico (ECE) en tiempo real, utilicé **Miro** como mi tablero de control. No solo anotaba; estaba mapeando el poder y las preocupaciones en la sala. Cada vez que surgía un obstáculo técnico legítimo pero fuera del alcance de esta fase estratégica, aplicaba la técnica del **Parking Lot**.

> **Insight de trinchera:** El 'Parking Lot' no es solo para organizar notas; es una herramienta de neutralización diplomática. Al mover una interrupción técnica compleja a este espacio visual, le daba al Jefe de TI la seguridad de que su punto había sido escuchado y documentado, permitiéndonos recuperar el flujo de la sesión sin entrar en un debate de arquitectura de sistemas que nos habría consumido las cuatro horas.

Esta transparencia visual en tiempo real fue lo que empezó a generar el *buy-in*. Los directivos veían sus miedos y requisitos reflejados en post-its digitales inmediatamente. Esa validación visual redujo la fricción defensiva y transformó a los detractores en colaboradores del proceso de definición.

#### La anatomía del dolor: el colapso del ecosistema MyVue

El punto de mayor fricción llegó al analizar la fragmentación pre-2021. Tuve que ser implacable al exponer las limitaciones de **"Mi Salud ABC"**. Expliqué cómo la dependencia de **MyVue de Carestream** había encapsulado la experiencia digital del paciente únicamente en el área de radiología. 

*   **El diagnóstico fue crudo:** El portal actual operaba en un subdominio separado, creando una desconexión cognitiva para el usuario.
*   **La brecha funcional:** Mientras el hospital presumía de una atención integral, el paciente no podía ver su historial clínico completo ni agendar citas de especialidades fuera del laboratorio desde un solo lugar.

Narra esta desconexión fue un momento de "ajá" para el Director Médico. Al confrontar que la experiencia digital era el punto más bajo en la percepción de modernidad del hospital, logramos el consenso necesario para declarar que el portal unificado no era un deseo, sino una necesidad operativa urgente. Estábamos validando el dolor para justificar la magnitud de la intervención que vendría después.

#### Fijando la "Estrella Polar": KPIs que hablan el lenguaje de la Dirección

La última hora del workshop fue una batalla por la métrica. Como **UX/UI Lead**, mi responsabilidad era traducir el diseño a activos financieros y operativos que la Dirección General pudiera aprobar. No nos detuvimos en generalidades; fijamos metas **SMART** que definirían el éxito o fracaso del proyecto:

*   **Usabilidad Técnica:** Establecí que no aceptaríamos nada por debajo de los **75 puntos en el System Usability Scale (SUS)** en las pruebas post-lanzamiento. Esto no era negociable para garantizar que la inversión se tradujera en facilidad de uso real.
*   **Eficiencia Operativa:** Conectamos el diseño directamente con el contact center. El objetivo era una reducción del **15% en llamadas** para consulta de resultados, moviendo ese tráfico hacia el portal.
*   **Adopción Transaccional:** Fijamos una meta agresiva: el **60% de las citas** deberían agendarse online en los primeros seis meses. 

Hubo resistencia, especialmente con la exigencia de cumplir con los estándares de accesibilidad **WCAG 2.1 AA**. El equipo de desarrollo temía por los tiempos, pero defendí que un hospital de la categoría del ABC no podía permitirse excluir a usuarios con capacidades diferentes. Al final, cuando conectamos estas métricas con el retorno de inversión y la eficiencia administrativa, la aprobación fue unánime. El diseño ya no era un gasto; era una métrica de rendimiento institucional.

#### Reflexión sobre el rol de facilitador

Al cerrar la sesión, me di cuenta de que mi trabajo ese día no tuvo nada que ver con Figma. Mi rol fue el de un mediador diplomático que utilizó la evidencia técnica para forjar un consenso inquebrantable entre silos organizacionales que rara vez se alinean. En este nivel de seniority, el diseño es 80% política y facilitación, y 20% ejecución. Habíamos logrado lo imposible: una hoja de ruta validada donde el Director Médico, el Jefe de TI y el de Marketing estaban, por primera vez, leyendo la misma partitura.


A pesar del éxito del consenso, una sombra quedó planeando sobre la mesa al cerrar la sesión: la integración real con el ECE y las restricciones presupuestarias para la fase de desarrollo. Habíamos prometido una experiencia unificada, pero la realidad técnica de los sistemas legados amenazaba con recortar el alcance antes de empezar. El siguiente desafío sería traducir este entusiasmo en un documento de alcance y restricciones que fuera tan ambicioso como realista, sin romper la promesa que acabábamos de hacerle a la Dirección.

---

### Parte 4: Definición de Alcance Restricciones y Kpis Finales

#### El arte de cortar la tela: Del entusiasmo al compromiso técnico

La atmósfera en la sala cambió drásticamente cuando pasamos de los grandes deseos a los compromisos técnicos. Una cosa es estar de acuerdo en que el paciente merece lo mejor, y otra muy distinta es decidir qué funcionalidades íbamos a construir realmente para llegar vivos a enero de 2022. Como responsable del diseño, me enfrenté al reto de "cortar la tela": debía proteger la integridad de la experiencia del paciente sin ignorar la realidad de los sistemas legados y los tiempos de desarrollo. Tenía que transformar el entusiasmo generado en el workshop en una "estrella polar" estratégica, un documento de alcance que fuera tan ambicioso como ejecutable.

#### La batalla por la accesibilidad universal: Web Responsiva vs. App Nativa

Uno de los debates más intensos giró en torno a la arquitectura de despliegue. Había una presión natural por lanzar una aplicación nativa, pero mi postura fue firme: el enfoque prioritario debía ser una **Web Responsiva** de alto rendimiento. Mi razonamiento ante los stakeholders fue estratégico: ya teníamos una experiencia fragmentada con "Mi Salud ABC" operando en subdominios separados; añadir una app nativa en esta fase solo profundizaría esa desconexión y limitaría el acceso a quienes no quisieran o no pudieran descargar una aplicación.

Argumenté que debíamos sentar las bases de diseño pensando en una futura app, pero centrando el 100% de nuestros recursos actuales en asegurar que cualquier paciente, desde cualquier dispositivo, tuviera una experiencia de primer nivel el primer día. Esta decisión no fue una renuncia, sino un blindaje de la accesibilidad universal. Logré que el equipo aceptara que la web sería el cimiento sobre el cual, eventualmente, construiríamos el ecosistema móvil.

#### El riesgo de las pasarelas: Por qué pausamos la integración de pagos

Al llegar al punto de la integración de pagos y facturación en línea, la tensión técnica subió de nivel. Tras consultar con el Jefe de TI y el área de Finanzas, identifiqué que la complejidad de las pasarelas de pago y la conciliación contable en tiempo real con el **ECE (Expediente Clínico Electrónico)** representaba un riesgo crítico para el cronograma.

Aunque el agendamiento de citas era el corazón del proyecto, decidí clasificar la funcionalidad de pagos como un "nice-to-have" condicionado o para fases posteriores. Fue una maniobra de prudencia senior: no podía permitir que un proceso administrativo complejo retrasara el lanzamiento de la herramienta de salud principal. Preferí asegurar un flujo de agendamiento impecable y seguro antes que uno completo pero inestable que pudiera colapsar bajo la carga de transacciones financieras no probadas.

#### Blindaje legal y seguridad: La cimentación en la LFPDPPP

En un entorno hospitalario, la seguridad no es una característica del producto, es su razón de ser. Integré al Jefe de TI y al equipo legal para asegurar que cada decisión de diseño cumpliera estrictamente con la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)** en México.

Esta restricción condicionó profundamente la arquitectura de integración con el ECE. No solo estábamos diseñando pantallas; estábamos diseñando protocolos de acceso a información sensible. Blindé el proyecto estableciendo que la privacidad del paciente sería el criterio de desempate en cualquier decisión de UX. Si una funcionalidad comprometía la seguridad de los datos para ganar "fluidez", la funcionalidad se rediseñaba o se descartaba. Esta postura fortaleció la confianza de la Dirección Médica, quienes vieron en el equipo de diseño a un aliado de la ética institucional y no solo a un grupo de creativos.

#### El tablero de éxito: KPIs que hablan el lenguaje del negocio

Para que el rediseño fuera validado por la Dirección General, necesitaba métricas que trascendieran lo visual. Definí una serie de **KPIs SMART** que conectaban la UX directamente con la eficiencia operativa del Centro Médico ABC:

*   **Reducción del 15% en llamadas al call center:** Específicamente aquellas relacionadas con consultas de resultados y agendamiento de citas que la plataforma debía resolver de forma autónoma.
*   **Tasa de agendamiento online del 60%:** Una meta ambiciosa para los primeros seis meses post-lanzamiento, que validaría la adopción del nuevo portal.
*   **Puntuación SUS (System Usability Scale) superior a 75:** Un estándar de calidad técnica que nos obligaba a no conformarnos con lo "funcional", sino a buscar la excelencia.
*   **Aumento del 25% en usuarios activos:** Para medir la consolidación del portal unificado frente a la fragmentación anterior.

Estos números no eran adornos en el brief; eran el compromiso que yo estaba asumiendo ante la organización. Si no alcanzábamos estos hitos, el rediseño, por muy estético que fuera, no habría cumplido su propósito estratégico.

#### El cierre en Miro: Del "Parking Lot" al compromiso formal

Cerramos el workshop utilizando una pizarra de **Miro** para gestionar el "Parking Lot" de temas pendientes. Visualizamos el cronograma macro dividido en cinco fases, con el hito de enero de 2022 marcado en rojo como inamovible. Al ver el mapa completo, desde la investigación inicial hasta el QA final, el equipo sintió por primera vez la magnitud del esfuerzo.

Gestioné los últimos desacuerdos técnicos reformulando las secciones del brief en tiempo real hasta que cada palabra fue aceptada. El momento en que el Director Médico, el Jefe de TI y el de Marketing dieron su aprobación formal fue el verdadero inicio del proyecto. Habíamos transformado una pizarra digital llena de post-its en un acta de compromiso unificada. Teníamos un alcance validado, un presupuesto respetado y, sobre todo, una hoja de ruta clara para no perdernos en el "scope creep" que suele hundir proyectos de esta escala.

> **Aprendizaje Senior:** En este nivel, tu mejor herramienta de diseño no es Figma, es saber decir "no" con fundamentos técnicos. Un brief validado y firmado es el único escudo real que tienes cuando, a mitad del proyecto, alguien intenta añadir una funcionalidad que no estaba planificada y que pone en riesgo la fecha de entrega.


Con el alcance blindado y los objetivos firmados, la euforia del consenso empezó a disiparse ante una realidad logística inminente: ¿cómo íbamos a coordinar a este ejército de stakeholders, desarrolladores y médicos sin que el proyecto se convirtiera en un teléfono descompuesto? Me di cuenta de que tener el "qué" no servía de nada si no definíamos el "cómo" nos íbamos a comunicar y quién tendría la última palabra en los momentos de crisis. El siguiente desafío no sería diseñar pantallas, sino diseñar la gobernanza que mantendría a este equipo unido durante los próximos doce meses.

---

### Parte 5: Gobernanza y Plan de Comunicación del Proyecto

#### El diseño de la gobernanza: Más allá del Figma

Tener un brief firmado y un alcance blindado me dio una tregua de apenas unas horas. En cuanto salí de la sala con el consenso de la Dirección Médica y TI, la euforia fue reemplazada por una preocupación logística inmediata: un documento de 20 páginas es un artefacto estático que no sobrevive al primer choque con la realidad operativa si no existe una estructura de mando que lo defienda. En proyectos de esta escala para instituciones como el Centro Médico ABC, el diseño no solo ocurre en el lienzo de Figma; el diseño real sucede en la gestión de las expectativas y en la arquitectura del flujo de información.

Entendí que mi siguiente responsabilidad no era dibujar pantallas, sino diseñar la gobernanza del proyecto. Tenía que pasar del "qué vamos a construir" al "cómo vamos a hablar para que nada se detenga". Sabía por experiencia que el "teléfono descompuesto" es el asesino silencioso de los productos digitales: un desarrollador que interpreta mal un flujo de agendamiento o un stakeholder que siente que no ha sido consultado pueden descarrilar meses de trabajo en una sola tarde. Por eso, me propuse articular un sistema de comunicación que fuera transparente, pero sobre todo, eficiente.

#### Segmentación de audiencias: El antídoto contra la fatiga de reuniones

Mi primera maniobra fue segmentar a los actores del proyecto para evitar el error más común en las organizaciones grandes: meter a todo el mundo en todas las reuniones. Definí cinco audiencias clave con necesidades de información radicalmente distintas, asegurando que cada mensaje llegara con la granularidad adecuada para no generar fatiga cognitiva.

*   **Equipo Core (Diseño y Desarrollo):** Establecí que este grupo necesitaba una visibilidad quirúrgica y diaria. No podíamos esperar a la revisión semanal para saber si un endpoint de la API de radiología estaba caído o si un componente de la interfaz presentaba problemas de usabilidad.
*   **Product Owner (CM ABC):** Su necesidad era el control de la salud del proyecto. Él debía ver el progreso de los KPIs que habíamos definido y tener un radar encendido para riesgos y oportunidades.
*   **Stakeholders Estratégicos (Dirección General y Médica):** Para ellos, el detalle técnico es ruido. Necesitaban actualizaciones de alto nivel, hitos alcanzados y, sobre todo, visibilidad sobre cómo el proyecto impactaba el negocio y la atención al paciente.
*   **Agencia Management:** Su enfoque era el cumplimiento del cronograma y el presupuesto.
*   **Pacientes (Post-lanzamiento):** Aunque aún estábamos en fase cero, incluí en el plan la necesidad de una comunicación externa clara para cuando la plataforma viera la luz, involucrando a Marketing y Contenido desde el inicio.

Esta segmentación me permitió blindar el tiempo del equipo técnico y asegurar que los directivos solo intervinieran cuando su capacidad de decisión fuera realmente necesaria.

#### El pulso del proyecto: Dailies y sincronización técnica

Para que el proyecto tuviera un ritmo cardiaco saludable, establecí una cadencia operativa rigurosa. Implementé las **Daily Stand-ups** de 15 minutos para el equipo de diseño y desarrollo. Estas sesiones no eran para debatir; eran para reportar qué se hizo ayer, qué se haría hoy y, lo más importante, qué bloqueos existían. Si un bloqueo no se resolvía en esos 15 minutos, se movía a una sesión aparte para no detener al resto.

Paralelamente, articulé las **Syncs de Diseño/Dev** con una frecuencia de dos a tres veces por semana. Estas sesiones de 30 a 60 minutos fueron el campo de batalla donde resolvimos la fricción entre la visión de UX y las limitaciones técnicas. No eran simples charlas informales; utilizábamos **Miro** para diagramar flujos complejos y discutir especificaciones en tiempo real. Recuerdo sesiones intensas donde teníamos que decidir cómo mostrar los resultados de laboratorio sin comprometer la privacidad del paciente, cruzando la arquitectura de sistemas con la experiencia de navegación. El objetivo siempre fue el mismo: que el desarrollador nunca tuviera que adivinar qué quiso decir el diseñador.

#### Del píxel al negocio: Revisiones de Sprint y Comité Directivo

La gobernanza también requería momentos de rendición de cuentas en diferentes niveles de la jerarquía institucional. Establecí las **Revisiones de Sprint** con una frecuencia semanal o bi-semanal. En estas sesiones, el equipo core y el Product Owner hacíamos demos de las funcionalidades desarrolladas y revisábamos el backlog en **Jira**. Era el momento de ajustar prioridades y asegurar que seguíamos alineados con la "estrella polar" del brief.

Sin embargo, el tono cambiaba drásticamente en el **Comité Directivo (Steering Committee)** mensual. Aquí, mi lenguaje como diseñador tenía que evolucionar: dejaba de hablar de interacciones o jerarquía visual para hablar de impacto estratégico, presupuesto y mitigación de riesgos mayores. Para estas reuniones con la Dirección General, preparaba informes ejecutivos en Google Docs y presentaciones en Google Slides que destilaran la complejidad del proyecto en decisiones claras. Si había un riesgo que amenazaba la fecha de lanzamiento, este era el foro para escalarlo y obtener el respaldo político necesario para maniobrar.

#### Blindaje operativo: El ecosistema de herramientas y el protocolo de crisis

Para eliminar el ruido, definí un ecosistema de herramientas que funcionara como la única fuente de verdad. **Figma** se convirtió en el santuario del diseño; si no estaba en Figma, no existía. **Jira** fue nuestro tablero de control para la gestión de tareas y el backlog, mientras que **Slack** y **Teams** quedaron relegados a la comunicación asíncrona y urgente.

> **Aprendizaje Senior:** La documentación continua es la mejor póliza de seguro de un diseñador. Utilicé herramientas como **Confluence** para registrar cada decisión técnica y de diseño, asegurando que el "por qué" de una funcionalidad quedara escrito y accesible para cualquiera que se sumara al equipo meses después.

Para gestionar las crisis y evitar que el proyecto se estancara en discusiones circulares, institucionalicé el concepto del **"Parking Lot"** que ya habíamos usado con éxito en los workshops iniciales. Si durante una reunión surgía un tema divergente o una idea que ampliaba el alcance de forma no planificada, lo movíamos al "Parking Lot" de Miro. Esto nos permitía mantener el enfoque en la agenda del día sin ignorar las preocupaciones de los stakeholders.

Establecí un protocolo de escalación claro: cualquier bloqueo que afectara el cronograma o el presupuesto debía comunicarse de inmediato al Product Owner y a mí. Si no podíamos resolverlo a nivel de equipo, se escalaba a la reunión de Stakeholders. Y si la decisión impactaba la visión misma del producto o requería una inversión no prevista, se llevaba al Comité Directivo. Este sistema de seguridad no solo protegía el proyecto de retrasos innecesarios, sino que blindaba la integridad del diseño frente a cambios de opinión de último minuto.

#### La gobernanza como herramienta de diseño

Al final de este proceso de planificación, comprendí que la gobernanza es, en esencia, el diseño de la confianza. Sin canales claros y protocolos de escalación, el mejor sistema de diseño del mundo puede morir por una mala interpretación técnica o por falta de una aprobación oportuna. Al establecer este Plan de Comunicación, no solo estaba organizando reuniones; estaba construyendo el andamiaje que permitiría que el rediseño del Centro Médico ABC se mantuviera fiel a su visión original a pesar de la complejidad institucional.

Habíamos transformado la incertidumbre inicial en un mapa de ruta logístico. El equipo sabía qué hacer, los directivos sabían cuándo esperar noticias y yo tenía los mecanismos para proteger el proceso creativo. Estábamos listos para dejar de planificar y empezar a ejecutar.


Con la gobernanza establecida y los canales de comunicación fluyendo, el proyecto entró en su fase de mayor presión política: la consolidación final de todos los acuerdos en un documento inamovible. Me di cuenta de que, a pesar de los workshops y las minutas, aún existían pequeñas grietas de interpretación en los temas más sensibles del "Parking Lot", como la integración del Expediente Clínico. Sentí que el éxito de los próximos meses dependía de un último esfuerzo de refinamiento donde cada stakeholder tendría que poner su firma definitiva, un momento de tensión donde cualquier duda no resuelta podría hacer que el alcance que tanto había protegido volviera a tambalearse antes de la aprobación formal.

---

### Parte 6: Consolidación Refinamiento y Aprobación Formal

#### La cristalización del consenso: Del caos creativo al contrato operativo

El silencio que siguió al workshop de validación no era de vacío, sino de saturación. Tenía frente a mí una pizarra de Miro que parecía un campo de batalla de notas adhesivas y un documento de Google Docs plagado de comentarios que iban desde la precisión clínica del Director Médico hasta las preocupaciones de latencia del Jefe de TI. Como responsable del diseño, sabía que este era el momento más peligroso del proyecto: el punto donde las buenas intenciones pueden diluirse en la ambigüedad. Mi tarea no era simplemente "limpiar" el archivo, sino realizar una alquimia técnica para transformar ese caos de opiniones en una "Estrella Polar" inamovible que blindara el proceso durante los próximos doce meses.

Entendí que el éxito del rediseño no dependía solo de la estética o la usabilidad, sino de que cada stakeholder pusiera su reputación detrás de los objetivos que estábamos trazando. Necesitaba que el **Brief de Producto** dejara de ser una propuesta de la agencia para convertirse en un contrato operativo firmado por la institución.

#### El destilado forense del feedback

Dediqué la primera semana post-workshop a una labor de síntesis casi forense. No me limité a resumir; me sumergí en las notas para identificar patrones de resistencia y puntos de entusiasmo. Crucé cada comentario con los hallazgos de la investigación previa de 2015-2020 para asegurar que no estuviéramos introduciendo "deseos" personales de los directivos que contradijeran las necesidades reales de los pacientes.

Procesar las tres horas de discusión intensa me permitió detectar que el núcleo de la tensión residía en la integración del **Expediente Clínico Electrónico (ECE)**. Mientras que Marketing buscaba una experiencia visualmente impactante, TI necesitaba garantías de que el diseño no comprometiera la seguridad de los datos sensibles. Mi maniobra aquí fue articular estas preocupaciones en el lenguaje del brief: transformé el "miedo técnico" en un objetivo de **Seguridad y Privacidad de Datos** con estándares explícitos, asegurando que el diseño fuera clínicamente preciso y técnicamente viable desde su concepción.

#### Diseño de confianza mediante la transparencia radical

Para el refinamiento del documento, utilicé Google Docs no solo como editor, sino como una herramienta de transparencia política. Activé la función de "sugerencias" y "control de cambios" de manera deliberada. Quería que, al abrir el archivo, los stakeholders visualizaran exactamente qué palabras se habían movido tras sus intervenciones en el workshop. 

Esta fue una decisión estratégica de diseño de confianza. Al ver sus aportaciones integradas literalmente en el texto, los líderes del Centro Médico ABC pasaron de ser revisores externos a ser co-autores del proyecto. Si el Director Médico veía reflejada su preocupación por la claridad en los resultados de laboratorio, su resistencia al cambio disminuía drásticamente. El brief dejó de ser "nuestro" para ser "suyo".

#### Desactivando el 'Parking Lot': La cirugía de los temas críticos

A pesar del avance, la pizarra de Miro aún conservaba el temido "Parking Lot" con temas que podían descarrilar el alcance si no se atendían con pinzas. El más espinoso era la ambición de incluir el agendamiento de citas para todas las especialidades médicas, una promesa enorme dada la fragmentación de sistemas que operaban en el subdominio de "Mi Salud ABC".

En lugar de resolver esto en una reunión masiva, coordiné sesiones ad-hoc, casi quirúrgicas, con el Jefe de TI y el Director de Operaciones. Fuimos directamente al grano: ¿qué tan real era la integración del backend para que un paciente pudiera cancelar una cita de cardiología desde la web? Estas conversaciones me permitieron blindar el alcance. Decidimos, con datos en mano, que el rediseño sentaría las bases para una futura app nativa, pero que el esfuerzo inicial se concentraría al 100% en una experiencia **Mobile-First** responsiva. Fue una renuncia necesaria para garantizar que lo que sí prometíamos en el brief —como el acceso unificado a resultados de imagenología y laboratorio— fuera una realidad funcional en el lanzamiento.

#### El sprint de 48 horas y el ritual de la firma

Una vez consolidado el documento, ejecuté una maniobra de agilidad para evitar el "análisis por parálisis". Distribuí la versión final con un ultimátum ejecutivo: 48 horas para comentarios finales. No fue una imposición arbitraria, sino una herramienta para forzar la toma de decisiones. En una institución de la envergadura del Centro Médico ABC, los documentos pueden morir en bandejas de entrada si no se establece una urgencia clara antes de pasar a la Fase de Investigación.

El ritual de la firma fue el cierre de esta fase de cimentación. Ver los nombres del **Director General**, el **Director Médico** y el **Jefe de TI** al final del documento me dio la seguridad que necesitaba. No solo habían aprobado un diseño; habían validado métricas de éxito agresivas:
*   Lograr un **System Usability Scale (SUS) superior a 75 puntos**.
*   Alcanzar el **60% de citas agendadas en línea** para julio de 2022.
*   Cumplir con los estándares de accesibilidad **WCAG 2.1 AA**.

Tener estos **KPIs** aceptados por la dirección cambió por completo mi posición como diseñador. Ya no estaba "proponiendo pantallas"; estaba ejecutando una estrategia de negocio validada que buscaba reducir el 15% de las llamadas al centro de contacto mediante una plataforma digital eficiente.

**Reflexión final:**
Este proceso de validación fue, en retrospectiva, el escudo más fuerte que tuvo el proyecto. Al invertir este tiempo en alinear las expectativas políticas y técnicas antes de trazar un solo pixel, logré que el rediseño no fuera visto como un gasto estético, sino como una solución operativa crítica. Aprendí que en proyectos de salud de esta escala, el diseño de la gobernanza es tan importante como el diseño de la interfaz; sin ese brief blindado, las integraciones posteriores que vimos años después con HubSpot o YouTube Health habrían carecido de la estructura necesaria para escalar.

---

