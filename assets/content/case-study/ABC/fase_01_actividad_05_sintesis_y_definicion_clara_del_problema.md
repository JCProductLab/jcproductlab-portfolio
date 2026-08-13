# Fase 1: Descubrimiento e Investigación Profunda (Empatizar y Definir)

## Actividad 05: Síntesis y Definición Clara del Problema

> Esta actividad constituye el núcleo estratégico de la Fase 1, donde se transforma la evidencia técnica cruda recolectada en las actividades de investigación primaria, benchmarking y auditoría en artefactos de diseño accionables. El proceso implica una síntesis forense para humanizar los datos mediante Arquetipos de Usuario (Personas), visualizar las fricciones críticas a través de Customer Journey Maps, y destilar los desafíos de negocio en Declaraciones de Problema y preguntas 'How Might We'. Finalmente, se establecen los Principios de Diseño que actuarán como brújula creativa y se genera una Lista de Requisitos Priorizada bajo el método MoSCoW, asegurando que el rediseño ataque directamente la fragmentación de la experiencia y las limitaciones funcionales detectadas en el ecosistema digital previo a 2021.

### Parte 1: Humanización de la Data Construcción de Arquetipos de Usuario Personas

#### La saturación de la data y el riesgo del "usuario promedio"

Tenía frente a mí los resultados de 287 encuestas y las transcripciones detalladas de 24 entrevistas con pacientes, familiares y personal del hospital. El volumen de información era ensordecedor. En este punto del proyecto, el riesgo más peligroso no era la falta de datos, sino la parálisis por análisis o, peor aún, la tentación de diseñar para un "usuario promedio" que no existe. La data, por sí sola, es ruido estadístico; si no lograba humanizarla, las decisiones de diseño que vendrían después se basarían en suposiciones técnicas y no en necesidades vividas.

Como responsable del diseño, mi primera tarea fue transformar esa montaña de evidencia en una brújula. Necesitaba personajes con nombre, rostro y miedos específicos que pudieran sentarse en la mesa de decisiones con nosotros. El equipo de desarrollo y los stakeholders del Centro Médico ABC necesitaban entender que no estábamos rediseñando una web para "pacientes en general", sino para personas que, en momentos de vulnerabilidad o urgencia, se enfrentaban a un ecosistema digital que se sentía roto.

#### El tablero de Miro: Donde la data se convierte en patrones

Para dar sentido al caos, me encerré en un tablero de Miro. Mi proceso no fue lineal; fue un ejercicio de arqueología digital. Revisité cada una de las transcripciones de las entrevistas contextuales y las notas de campo que había tomado durante las sesiones de "pensar en voz alta".

**El ritual del mapeo de afinidad:**
1.  **Extracción Forense:** Comencé extrayendo cada observación clave, cada queja recurrente y cada motivación expresada por los usuarios. Los convertí en cientos de post-its virtuales. No filtré nada en esta etapa; si un paciente de 70 años mencionó que la letra era pequeña, eso iba al tablero. Si un ejecutivo se quejó de que no podía agendar desde su móvil, también.
2.  **Agrupación por Similitudes:** Empecé a mover físicamente los elementos en el lienzo digital. Fue un proceso de "clusterización" orgánica. De repente, los post-its de "confusión entre portales" empezaron a agruparse con los de "no encuentro mis resultados de laboratorio". Los temas emergieron solos: fragmentación del ecosistema, barreras tecnológicas, y la necesidad de gestión familiar.
3.  **Identificación de Tensiones:** Este paso fue crucial para separar el ruido de los insights estratégicos. No buscaba solo lo que los usuarios decían, sino lo que sus comportamientos revelaban. Por ejemplo, el patrón de "dependencia de terceros" no era solo una cuestión de edad, sino de una interfaz que no generaba confianza.

Este filtro fue lo que me permitió identificar tres segmentos conductuales claros. No los definí por su edad o nivel socioeconómico —aunque esos datos estaban ahí—, sino por su **relación con la tecnología** y su **frecuencia de interacción** con el hospital.

#### Graciela: La lucha por la autonomía en un sistema fragmentado

El primer arquetipo que consolidé fue el de la paciente crónica, a quien llamé **Graciela**. Ella personifica la tensión más dolorosa del ecosistema previo a 2021. A sus 68 años, Graciela es una usuaria experimentada del hospital debido a una condición cardíaca, pero una "exiliada" de su plataforma digital.

Al construir su perfil, me aseguré de reflejar su realidad técnica: tiene un smartphone y una tablet, pero su afinidad tecnológica es baja. Su mayor punto de dolor no es la falta de herramientas, sino la **fragmentación**. Para ella, el hecho de que existiera un sitio para información general y un portal separado —que además solo mostraba radiología— era una barrera insalvable. 

> "Me confundo mucho teniendo que buscar mis resultados en diferentes páginas. ¿No podría estar todo en un solo lugar? Mi hija siempre me tiene que ayudar", fue la cita que elegí para encabezar su perfil.

Esta frase no era solo un comentario; era la prueba de que el sistema actual le robaba su independencia. Al diseñar para Graciela, el objetivo no era solo poner botones más grandes, sino eliminar la carga cognitiva de tener que decidir a qué URL entrar. Su escenario típico era desgarrador: intentaba agendar una cita de seguimiento, se perdía entre los subdominios y terminaba pidiéndole a su hija que llamara por teléfono. Este arquetipo dictó que el nuevo portal debía ser unificado y extremadamente simple.

#### Ariel: La intolerancia a la ineficiencia y el mandato mobile-first

En el polo opuesto del espectro conductual encontré a **Ariel**, el profesional ocupado de 35 años. Ariel representa al usuario que no tiene tiempo para el hospital, pero que valora su salud. Es un ejecutivo con alta dependencia móvil que espera que la gestión de su salud sea tan fluida como pedir comida por una app o mover dinero en su banca digital.

Para Ariel, la plataforma actual no era solo "vieja", era un obstáculo para su productividad. Su irritación principal, documentada en las encuestas donde el 75% de los usuarios reportaron frustración, era la imposibilidad de agendar citas con especialistas en línea. Él no quiere hablar con un agente de Call Center; quiere ver la disponibilidad de su dermatólogo, elegir un horario y recibir una confirmación por SMS mientras camina hacia una reunión.

**Las demandas técnicas de Ariel:**
*   **Autoservicio Total:** Capacidad de agendar, modificar, cancelar y pagar facturas sin intervención humana.
*   **Inmediatez:** Acceso instantáneo a resultados de laboratorio e imagenología en un solo flujo.
*   **Optimización Móvil:** Para él, si no funciona perfectamente en el smartphone, no existe.

Este perfil fue el que utilicé para defender la necesidad de un sistema de agendamiento integral. Ariel no es un usuario "fiel" por lealtad institucional; lo es por conveniencia. Si el proceso digital falla, el riesgo de abandono es altísimo.

#### Carmen: El centro de mando de la salud familiar

El tercer arquetipo, **Carmen**, fue quizás el más complejo de articular pero el más valioso para la arquitectura de información. Carmen es la "cuidadora informada". A sus 42 años, no solo gestiona su salud, sino la de sus hijos y la de su madre anciana. 

Carmen vive en un estado de malabarismo constante. En la plataforma pre-rediseño, ella tenía que manejar múltiples inicios de sesión o realizar llamadas separadas para cada miembro de la familia. La falta de una gestión multi-perfil era su mayor fuente de estrés. 

> "Necesito tener toda la información de mi mamá y mi hijo a la mano, en un solo lugar, para poder coordinar sus citas y tratamientos sin errores", anoté como su meta principal.

Para Carmen, la plataforma debía dejar de ser una herramienta de consulta para convertirse en un **centro de mando logístico**. Sus necesidades técnicas eran muy específicas: un dashboard familiar, notificaciones personalizables por paciente y acceso unificado a expedientes cruzados. Ella fue la razón por la que propuse que el portal permitiera gestionar varios perfiles bajo una misma cuenta, una funcionalidad crítica que el negocio no había priorizado inicialmente.

#### La voz del usuario como martillo político

Para que estas Personas no se quedaran en meros ejercicios de diseño, integré en sus perfiles las voces más crudas que recolecté en la investigación. Una cita en particular se convirtió en el "martillo" con el que rompí las resistencias internas durante las presentaciones: **"Es como si fueran dos hospitales diferentes en línea"**.

Esta frase validaba que la fragmentación no era una percepción estética, sino una falla estructural. Al leer esto, los stakeholders ya no podían argumentar que "el sistema actual funcionaba". Estas citas fueron la prueba de carga que justificó la creación de un portal de paciente unificado.

**Reflexión sobre el rigor metodológico:**
Evité a toda costa los estereotipos. Graciela no es "una abuelita que no sabe usar internet"; es una paciente crónica que el sistema ha fallado en acompañar. Ariel no es solo "un joven con prisa"; es un usuario que exige el estándar de eficiencia que ya ofrecen otras industrias. Carmen no es solo "una mamá organizada"; es una administradora de crisis de salud familiar.

Anclar estos arquetipos en los datos de 2021 permitió que dejaran de ser "dibujos" para convertirse en herramientas de ingeniería de requisitos. Cada botón, cada flujo de navegación y cada decisión de arquitectura de la información que tomamos después pasó por el filtro de: "¿Esto le devuelve la autonomía a Graciela? ¿Esto le ahorra tiempo a Ariel? ¿Esto le quita un peso de encima a Carmen?".

Con los rostros de nuestros usuarios ya definidos y sus dolores humanizados, el siguiente desafío era mapear exactamente dónde se rompía su experiencia. Tenía las Personas, pero necesitaba ver la "película" completa de sus interacciones para identificar los puntos exactos donde el sistema los expulsaba. Fue entonces cuando me senté a trazar los Customer Journey Maps, y lo que descubrí al visualizar el viaje de Ariel intentando agendar una cita fue mucho más caótico de lo que cualquiera en el hospital se atrevía a admitir.

---

### Parte 2: Visualización de la Fricción Customer Journey Maps Cjm del Estado Actual

#### Del arquetipo a la película: Por qué las Personas no eran suficientes

Tener los perfiles de Elena, Ariel y Sofía pegados en mi pared virtual fue el primer paso, pero pronto me di cuenta de que necesitaba algo más que una "foto fija". Como diseñador, sabía que para convencer a la directiva del hospital de la urgencia del cambio, no bastaba con decirles quiénes eran sus pacientes; tenía que mostrarles, paso a paso, cómo el sistema los estaba expulsando. Necesitaba pasar del retrato a la película completa.

Decidí trazar los **Customer Journey Maps (CJM)** del estado actual (AS-IS). Mi razonamiento era puramente estratégico: en una institución donde la excelencia clínica es la norma, la fragmentación digital se aceptaba como un "mal necesario". Mi trabajo era evidenciar que esa fragmentación no era una percepción subjetiva, sino una falla estructural que generaba un quiebre de canal masivo hacia el teléfono, saturando el Call Center y erosionando la confianza del paciente antes de que siquiera pusiera un pie en el hospital.

#### La arquitectura forense del lienzo en Miro

Para que este análisis tuviera rigor, no podía limitarme a un diagrama lineal simplista. Me senté frente a un lienzo en blanco en Miro y estructuré una cuadrícula de *swimlanes* (carriles) diseñada para capturar la complejidad del ecosistema pre-2021. No quería solo documentar pasos; quería documentar el declive emocional.

*   **Acciones del Usuario:** El rastro físico de clics y búsquedas.
*   **Pensamientos:** Aquí vertí las citas literales que rescaté de las entrevistas. Frases como *"¿Dónde me dijeron que los busque?"* o *"Esto es un lío"* se convirtieron en el eje narrativo de cada fase.
*   **Emociones:** Utilicé una escala visual de emojis para mapear lo que llamo el "valle de la frustración". Ver una hilera de caras rojas y confundidas en la fase de resultados fue un golpe de realidad necesario para el equipo.
*   **Puntos de Contacto (Touchpoints):** Aquí fue donde la herida quedó expuesta. Marqué sistemáticamente cada salto entre el sitio principal (`centromedicoabc.com`) y el portal de radiología (`misaludabc.abchospital.com`).
*   **Fricciones y Oportunidades:** El carril de diagnóstico donde cada falla técnica se traducía en una oportunidad de diseño.

Este rigor visual no era un adorno; era vital para que los stakeholders comprendieran que cada "emoji de enojo" representaba un paciente real que abandonaba la plataforma por pura desesperación técnica.

#### El viaje de Elena y la paradoja de los resultados invisibles

Mapear el recorrido de **Elena** fue una lección de humildad. Ella iniciaba su viaje con una necesidad básica: ver sus análisis de sangre y su radiografía. Al entrar a `centromedicoabc.com`, encontraba con relativa facilidad el enlace a "Mi Salud ABC". En ese punto, su emoción era de esperanza; sentía que el hospital le estaba facilitando la vida.

Sin embargo, al cruzar al subdominio de Carestream MyVue, la realidad la golpeaba. Elena descubría que ese portal, a pesar de su nombre ambicioso, era un silo: solo contenía radiología. Sus análisis de sangre, realizados el mismo día, no estaban ahí. Registré su pensamiento exacto: *"¿Dónde me dijeron que los busque? Creo que en la página del hospital"*. 

Vi cómo Elena volvía al sitio principal, se perdía en un bucle de navegación y terminaba rindiéndose. El mapa mostró un quiebre de canal doloroso: Elena terminaba llamando a su hija, sintiéndose una carga y perdiendo la autonomía que la tecnología debería haberle devuelto. La plataforma no solo fallaba técnicamente; fallaba humanamente al recordarle su dependencia.

#### Ariel y el muro del agendamiento "fantasma"

Con **Ariel**, el profesional que valora el tiempo sobre todas las cosas, el viaje fue una progresión de irritación técnica. Él no buscaba consuelo, buscaba eficiencia. Al intentar agendar una cita con un internista, entraba con la confianza de quien usa servicios digitales avanzados a diario.

El quiebre ocurrió en la Fase 2. Ariel navegaba por el buscador de médicos, encontraba a su especialista y buscaba el botón de "Agendar". Ahí es donde el sistema lo expulsaba: descubría que el agendamiento online era un espejismo limitado exclusivamente a laboratorio clínico. Para un especialista, el sistema le devolvía un número telefónico.

Documenté el momento exacto en que Ariel, tras 4 minutos de navegación infructuosa, abandonaba la web con una percepción de la plataforma como algo "atrasado". Obligar al usuario más autónomo a usar el canal más lento y costoso para el hospital —el Call Center— era un error de negocio que los CJM pusieron sobre la mesa con una claridad brutal. Estábamos quemando dinero y paciencia por no tener un flujo transaccional completo.

#### Sofía: El caos de la gestión familiar multi-perfil

El viaje de **Sofía** reveló una dimensión de fricción que no habíamos previsto con tanta fuerza: la carga administrativa del cuidador. Sofía necesitaba gestionar la salud de su hijo y de su madre simultáneamente. 

Al mapear sus acciones, descubrí una danza ineficiente de "Log-in / Log-out". Para ver los resultados de su madre y luego intentar agendar para su hijo, Sofía tenía que cerrar sesión y abrir otra con credenciales distintas, navegando por portales que no se hablaban entre sí. No existía la noción de "perfiles vinculados". 

Su mapa de viaje se convirtió en un nudo de flechas y puntos de fricción. La falta de una interfaz unificada la transformaba en una administrativa forzada, multiplicando su carga cognitiva en un momento de estrés familiar. Los CJM demostraron que el hospital no estaba viendo a la familia como una unidad de atención, sino como usuarios aislados en una base de datos fragmentada.

#### El veredicto técnico: Un SUS Score que no mentía

Para cerrar esta fase de síntesis, integré los hallazgos de mi auditoría UX/UI con los viajes de los usuarios. Los mapas de viaje fueron la evidencia cualitativa que dio vida a los números fríos: el **SUS Score de 45/100** (una calificación de "Pobre") dejó de ser una métrica abstracta y se convirtió en la cara de frustración de Elena.

Identifiqué que la **tasa de éxito para agendar con especialistas era del 0%**. No es que fuera difícil; es que era imposible. Este dato, visualizado en el punto de quiebre de los CJM de Ariel y Sofía, fue la "prueba de carga" definitiva. Los mapas mostraron que el usuario "saltaba" de la web al teléfono no por preferencia, sino por necesidad, debido a la ruptura técnica entre el sitio principal y el portal de terceros.

Estos artefactos no fueron solo diagramas; fueron mis herramientas de negociación política. Me permitieron demostrar que la "excelencia clínica" del Centro Médico ABC se detenía en la pantalla, y que la plataforma actual estaba actuando como un repelente de pacientes en lugar de un facilitador de salud.

> **Insight Senior:** Un Customer Journey Map bien ejecutado es un espejo incómodo. En este proyecto, el mapa no solo sirvió para diseñar pantallas, sino para alinear a TI, Operaciones y Dirección Médica bajo una misma verdad: el sistema estaba roto y el costo de no hacer nada era el abandono del paciente.


Con los viajes de Elena, Ariel y Sofía mapeados y el caos digital plenamente documentado, me encontré ante una montaña de problemas interconectados que amenazaban con desbordar el alcance del proyecto. Tenía la evidencia del desastre, pero ahora enfrentaba el desafío más crítico: ¿cómo transformar toda esta frustración en una hoja de ruta clara sin intentar resolverlo todo a la vez? Fue en ese momento de saturación cuando supe que debía destilar la esencia del dolor en declaraciones de problema tan afiladas que la solución empezara a dibujarse sola.

---

### Parte 3: Definición del Norte Problem Statements y How Might We Hmw

#### El paso del síntoma al diagnóstico: La guerra contra la ambigüedad

Tener los Customer Journey Maps de Elena, Ariel y Sofía desplegados frente a mí fue un momento de claridad brutal, pero también de una presión inmensa. Los mapas habían servido para exponer las heridas —la frustración de no encontrar un resultado, el abandono del flujo de agendamiento, la confusión entre portales—, pero la evidencia del desastre por sí sola no diseña soluciones. Como responsable del producto, sabía que si pasaba directamente a los wireframes con esa montaña de hallazgos sin procesar, el proyecto colapsaría bajo su propio peso. Corría el riesgo del *scope creep*: intentar arreglarlo todo y terminar no resolviendo nada con profundidad.

Me encontraba en esa fase incómoda donde el diseño deja de ser empático para volverse forense. Necesitaba "afilar el lápiz" y transformar esos dolores narrativos en declaraciones de guerra técnicas. No se trataba de decir "la web es confusa"; se trataba de declarar exactamente qué necesitaba el usuario y por qué el sistema actual le estaba fallando. Mi objetivo era blindar la fase de ideación: si lograba definir el problema con la precisión de un cirujano, la solución empezaría a dibujarse sola. Pasé de observar la fricción a diagnosticar la patología del ecosistema digital del Centro Médico ABC.

#### La arquitectura de los Problem Statements: Disciplina en la redacción

Para no perderme en la subjetividad, me impuse una estructura rígida para redactar lo que llamamos *Problem Statements*. Utilicé la fórmula **[Persona] necesita [Necesidad] porque [Insight/Razón del problema]**. Parece un ejercicio simple, casi de manual, pero en la práctica es un filtro implacable. Si no podía llenar uno de los campos con datos extraídos de las entrevistas o de la auditoría que realicé previamente, significaba que el problema era una suposición mía y no una realidad del paciente.

Regresé a mis notas en Miro y a las transcripciones de las entrevistas. No buscaba quejas generales, buscaba el punto exacto donde la intención del usuario chocaba contra la pared técnica del hospital. Esta disciplina me obligó a conectar el "quién" con el "por qué" de una manera que eliminaba cualquier rastro de opinión personal. Al redactar, me aseguraba de que cada declaración fuera una verdad incómoda que ningún stakeholder pudiera refutar, porque estaba anclada en la vida de Elena o de Carlos.

#### Declarando la fractura: La fragmentación como primer enemigo

El primer gran diagnóstico que articulé fue el de la **Fragmentación de la Experiencia Digital**. Era el problema raíz que contaminaba todo lo demás. Elena, nuestra paciente crónica, y Carlos, el profesional que no tiene un minuto que perder, se enfrentaban a un laberinto. Redacté la declaración con un enfoque quirúrgico: ellos necesitaban acceder a todos los servicios desde un único punto de entrada, porque la separación actual entre `centromedicoabc.com` y el portal `misaludabc.abchospital.com` no solo era confusa, sino que generaba una desconexión emocional con la marca.

Esta fragmentación no era solo un tema de URLs distintas; era una ruptura de la confianza. Cuando un paciente siente que tiene que "salir" de su hospital para ver sus datos, el ecosistema digital fracasa. Al documentar este problema, puse el dedo en la llaga: el sistema operaba de forma fragmentada y con funcionalidades que, honestamente, estaban a medio terminar.

#### El portal incompleto: Cuando la digitalización es un espejismo

Inmediatamente después, abordé el **Acceso Incompleto y Confuso a Resultados Médicos**. Este fue un hallazgo que dolió especialmente al mapear el viaje de Sofía, la cuidadora. Ella necesitaba ver *todos* los resultados (laboratorio, imagenología y consultas) en un solo lugar. La realidad técnica que encontré en la auditoría era que el portal "Mi Salud ABC" solo servía para radiología. 

Redacté el *Problem Statement* destacando la consecuencia directa de esta limitación: al no encontrar los análisis de laboratorio en línea, Sofía se veía obligada a regresar al canal telefónico. Esto no solo era una ineficiencia operativa para el hospital, sino que destruía la promesa de una plataforma digital de vanguardia. La desconfianza que esto generaba era el verdadero problema a resolver; el portal no era una herramienta, era un obstáculo que obligaba al usuario a buscar alternativas analógicas.

#### El agendamiento mutilado: El techo de cristal de Carlos

Uno de los momentos de mayor tensión en este análisis fue desmenuzar el tema de las citas. Lo definí como el **Problema 3: Limitaciones en el Agendamiento y Gestión de Citas**. Carlos, que busca eficiencia y autoservicio, se encontraba con una funcionalidad que yo describiría como "mutilada". Aunque la web prometía agendamiento en línea, la realidad es que solo funcionaba para laboratorio clínico.

Al redactar esta declaración, enfaticé el absurdo de la situación: el sistema forzaba a los usuarios a recurrir a llamadas telefónicas para cualquier especialidad médica. No era solo que faltara una función; era que la función existente era un engaño visual que terminaba consumiendo más tiempo del usuario al darle una falsa esperanza de autoservicio. Este diagnóstico fue vital para priorizar el desarrollo técnico posterior, ya que demostraba que el agendamiento era el punto de ruptura crítico en la retención de pacientes digitales.

#### La alquimia de los "How Might We": De muros a puertas

Con los problemas ya declarados y validados, el ambiente cambió. Ya no estábamos hablando de lo que estaba roto, sino de lo que podíamos construir. Utilicé la técnica de los **How Might We (HMW)** para transformar esas declaraciones de guerra en invitaciones a la creatividad. En mi tablero de Miro, realicé un brainstorming intenso para generar entre 15 y 25 preguntas que actuaran como catalizadores.

El objetivo de un HMW no es encontrar la solución inmediata, sino abrir el campo semántico del diseño. Por ejemplo, para el problema de la fragmentación, no me pregunté simplemente "¿cómo unificamos las webs?", sino que elevé la apuesta: **"¿Cómo podríamos hacer que los usuarios sientan que están interactuando con una sola entidad, el Centro Médico ABC, en línea?"**. Este cambio de lenguaje es sutil pero poderoso; desplaza el foco de la implementación técnica al sentimiento de unidad y confianza del paciente.

#### Diseñando para la vulnerabilidad y la gestión familiar

Me aseguré de que las preguntas HMW no solo cubrieran los flujos transaccionales, sino también las necesidades de los perfiles más complejos que identifiqué en la fase de investigación. Para Elena, la paciente de 68 años con baja afinidad tecnológica, lancé preguntas como: **"¿Cómo podríamos presentar los resultados médicos de una manera tan clara y accionable que el paciente se sienta seguro usándola solo?"**. Aquí el reto no era la visualización de datos, era el empoderamiento.

Para Sofía, la cuidadora que gestiona la salud de hijos y padres, el enfoque fue distinto. El problema de la **Dificultad para Gestionar Múltiples Perfiles Familiares** se convirtió en una oportunidad estratégica. Me pregunté: **"¿Cómo podríamos permitir a los cuidadores gestionar el historial médico de múltiples familiares desde una única cuenta?"**. Reconocer que el usuario de la plataforma a menudo no es el paciente, sino su hijo o cónyuge, fue un cambio de paradigma necesario. Estábamos diseñando un sistema de gestión familiar, no solo un portal individual.

> **Insight Senior:** Un problema bien definido es, literalmente, el 50% de la solución. En este proyecto, estas declaraciones y preguntas HMW no fueron solo entregables de diseño; fueron herramientas de alineación política. Me permitieron demostrar a la Dirección Médica y a TI que el rediseño no era un capricho estético, sino una respuesta directa a fallos operativos que estaban alejando a los pacientes del hospital.

#### La modernización como vehículo de confianza

Finalmente, no pude ignorar la percepción estética. Aunque como diseñadores a veces evitamos lo "superficial", en salud la estética es sinónimo de profesionalismo. El **Problema 6** abordó el diseño visual anticuado. Los usuarios sentían que la interfaz no reflejaba la excelencia clínica del Centro Médico ABC.

Transformé esto en preguntas sobre cómo la interfaz podría inspirar confianza y cómo el diseño visual podría guiar al usuario a través de flujos complejos sin generar ansiedad. Al cerrar esta etapa de síntesis, tenía en mis manos una lista de 25 preguntas HMW que cubrían desde la arquitectura de información hasta la calidez humana en lo digital. El caos de la investigación se había convertido en una hoja de ruta de oportunidades claras, listas para ser exploradas en la fase de ideación.


Con las preguntas de oportunidad ya sobre la mesa, me di cuenta de que tenía demasiados caminos posibles y muy pocos criterios para elegir el correcto. Las preguntas HMW me daban libertad, pero esa libertad podía convertirse en falta de coherencia si no establecía primero una brújula ética y estética. Necesitaba definir los pilares innegociables que asegurarían que, sin importar qué solución eligiéramos, el resultado siempre se sintiera como el Centro Médico ABC; fue el momento de establecer los Principios de Diseño que blindarían cada decisión futura.#### El paso del síntoma al diagnóstico: La guerra contra la ambigüedad

Tener los Customer Journey Maps de Elena, Ariel y Sofía desplegados frente a mí fue un momento de claridad brutal, pero también de una presión inmensa. Los mapas habían servido para exponer las heridas —la frustración de no encontrar un resultado, el abandono del flujo de agendamiento, la confusión entre portales—, pero la evidencia del desastre por sí sola no diseña soluciones. Como responsable del producto, sabía que si pasaba directamente a los wireframes con esa montaña de hallazgos sin procesar, el proyecto colapsaría bajo su propio peso. Corría el riesgo del *scope creep*: intentar arreglarlo todo y terminar no resolviendo nada con profundidad.

Me encontraba en esa fase incómoda donde el diseño deja de ser empático para volverse forense. Necesitaba "afilar el lápiz" y transformar esos dolores narrativos en declaraciones de guerra técnicas. No se trataba de decir "la web es confusa"; se trataba de declarar exactamente qué necesitaba el usuario y por qué el sistema actual le estaba fallando. Mi objetivo era blindar la fase de ideación: si lograba definir el problema con la precisión de un cirujano, la solución empezaría a dibujarse sola. Pasé de observar la fricción a diagnosticar la patología del ecosistema digital del Centro Médico ABC.

#### La arquitectura de los Problem Statements: Disciplina en la redacción

Para no perderme en la subjetividad, me impuse una estructura rígida para redactar lo que llamamos **Problem Statements**. Utilicé la fórmula **[Persona] necesita [Necesidad] porque [Insight/Razón del problema]**. Parece un ejercicio simple, casi de manual, pero en la práctica es un filtro implacable. Si no podía llenar uno de los campos con datos extraídos de las entrevistas o de la auditoría que realicé previamente, significaba que el problema era una suposición mía y no una realidad del paciente.

Regresé a mis notas en Miro y a las transcripciones de las entrevistas. No buscaba quejas generales, buscaba el punto exacto donde la intención del usuario chocaba contra la pared técnica del hospital. Esta disciplina me obligó a conectar el "quién" con el "por qué" de una manera que eliminaba cualquier rastro de opinión personal. Al redactar, me aseguraba de que cada declaración fuera una verdad incómoda que ningún stakeholder pudiera refutar, porque estaba anclada en la vida de Elena o de Carlos.

#### Declarando la fractura: La fragmentación como primer enemigo

El primer gran diagnóstico que articulé fue el de la **Fragmentación de la Experiencia Digital**. Era el problema raíz que contaminaba todo lo demás. Elena, nuestra paciente crónica, y Carlos, el profesional que no tiene un minuto que perder, se enfrentaban a un laberinto. Redacté la declaración con un enfoque quirúrgico: ellos necesitaban acceder a todos los servicios desde un único punto de entrada, porque la separación actual entre `centromedicoabc.com` y el portal `misaludabc.abchospital.com` no solo era confusa, sino que generaba una desconexión emocional con la marca.

Esta fragmentación no era solo un tema de URLs distintas; era una ruptura de la confianza. Cuando un paciente siente que tiene que "salir" de su hospital para ver sus datos, el ecosistema digital fracasa. Al documentar este problema, puse el dedo en la llaga: el sistema operaba de forma fragmentada y con funcionalidades que, honestamente, estaban a medio terminar.

#### El portal incompleto: Cuando la digitalización es un espejismo

Inmediatamente después, abordé el **Acceso Incompleto y Confuso a Resultados Médicos**. Este fue un hallazgo que dolió especialmente al mapear el viaje de Sofía, la cuidadora. Ella necesitaba ver *todos* los resultados (laboratorio, imagenología y consultas) en un solo lugar. La realidad técnica que encontré en la auditoría era que el portal "Mi Salud ABC" solo servía para radiología. 

Redacté el *Problem Statement* destacando la consecuencia directa de esta limitación: al no encontrar los análisis de laboratorio en línea, Sofía se veía obligada a regresar al canal telefónico. Esto no solo era una ineficiencia operativa para el hospital, sino que destruía la promesa de una plataforma digital de vanguardia. La desconfianza que esto generaba era el verdadero problema a resolver; el portal no era una herramienta, era un obstáculo que obligaba al usuario a buscar alternativas analógicas.

#### El agendamiento mutilado: El techo de cristal de Carlos

Uno de los momentos de mayor tensión en este análisis fue desmenuzar el tema de las citas. Lo definí como el **Problema 3: Limitaciones en el Agendamiento y Gestión de Citas**. Carlos, que busca eficiencia y autoservicio, se encontraba con una funcionalidad que yo describiría como "mutilada". Aunque la web prometía agendamiento en línea, la realidad es que solo funcionaba para laboratorio clínico.

Al redactar esta declaración, enfaticé el absurdo de la situación: el sistema forzaba a los usuarios a recurrir a llamadas telefónicas para cualquier especialidad médica. No era solo que faltara una función; era que la función existente era un engaño visual que terminaba consumiendo más tiempo del usuario al darle una falsa esperanza de autoservicio. Este diagnóstico fue vital para priorizar el desarrollo técnico posterior, ya que demostraba que el agendamiento era el punto de ruptura crítico en la retención de pacientes digitales.

#### La alquimia de los "How Might We": De muros a puertas

Con los problemas ya declarados y validados, el ambiente cambió. Ya no estábamos hablando de lo que estaba roto, sino de lo que podíamos construir. Utilicé la técnica de los **How Might We (HMW)** para transformar esas declaraciones de guerra en invitaciones a la creatividad. En mi tablero de Miro, realicé un brainstorming intenso para generar entre 15 y 25 preguntas que actuaran como catalizadores.

El objetivo de un HMW no es encontrar la solución inmediata, sino abrir el campo semántico del diseño. Por ejemplo, para el problema de la fragmentación, no me pregunté simplemente "¿cómo unificamos las webs?", sino que elevé la apuesta: **"¿Cómo podríamos hacer que los usuarios sientan que están interactuando con una sola entidad, el Centro Médico ABC, en línea?"**. Este cambio de lenguaje es sutil pero poderoso; desplaza el foco de la implementación técnica al sentimiento de unidad y confianza del paciente.

#### Diseñando para la vulnerabilidad y la gestión familiar

Me aseguré de que las preguntas HMW no solo cubrieran los flujos transaccionales, sino también las necesidades de los perfiles más complejos que identifiqué en la fase de investigación. Para Elena, la paciente de 68 años con baja afinidad tecnológica, lancé preguntas como: **"¿Cómo podríamos presentar los resultados médicos de una manera tan clara y accionable que el paciente se sienta seguro usándola solo?"**. Aquí el reto no era la visualización de datos, era el empoderamiento.

Para Sofía, la cuidadora que gestiona la salud de hijos y padres, el enfoque fue distinto. El problema de la **Dificultad para Gestionar Múltiples Perfiles Familiares** se convirtió en una oportunidad estratégica. Me pregunté: **"¿Cómo podríamos permitir a los cuidadores gestionar el historial médico de múltiples familiares desde una única cuenta?"**. Reconocer que el usuario de la plataforma a menudo no es el paciente, sino su hijo o cónyuge, fue un cambio de paradigma necesario. Estábamos diseñando un sistema de gestión familiar, no solo un portal individual.

> **Insight Senior:** Un problema bien definido es, literalmente, el 50% de la solución. En este proyecto, estas declaraciones y preguntas HMW no fueron solo entregables de diseño; fueron herramientas de alineación política. Me permitieron demostrar a la Dirección Médica y a TI que el rediseño no era un capricho estético, sino una respuesta directa a fallos operativos que estaban alejando a los pacientes del hospital.

#### La modernización como vehículo de confianza

Finalmente, no pude ignorar la percepción estética. Aunque como diseñadores a veces evitamos lo "superficial", en salud la estética es sinónimo de profesionalismo. El **Problema 6** abordó el diseño visual anticuado. Los usuarios sentían que la interfaz no reflejaba la excelencia clínica del Centro Médico ABC.

Transformé esto en preguntas sobre cómo la interfaz podría inspirar confianza y cómo el diseño visual podría guiar al usuario a través de flujos complejos sin generar ansiedad. Al cerrar esta etapa de síntesis, tenía en mis manos una lista de 25 preguntas HMW que cubrían desde la arquitectura de información hasta la calidez humana en lo digital. El caos de la investigación se había convertido en una hoja de ruta de oportunidades claras, listas para ser exploradas en la fase de ideación.


Con las preguntas de oportunidad ya sobre la mesa, me di cuenta de que tenía demasiados caminos posibles y muy pocos criterios para elegir el correcto. Las preguntas HMW me daban libertad, pero esa libertad podía convertirse en falta de coherencia si no establecía primero una brújula ética y estética. Necesitaba definir los pilares innegociables que asegurarían que, sin importar qué solución eligiéramos, el resultado siempre se sintiera como el Centro Médico ABC; fue el momento de establecer los Principios de Diseño que blindarían cada decisión futura.

---

### Parte 4: La Brújula Creativa Establecimiento de Principios de Diseño

#### El riesgo de la dispersión creativa

Las 25 preguntas "How Might We" que acababa de generar eran una mina de oro, pero también representaban un peligro inminente: la parálisis por exceso de posibilidades. Como diseñador, sé que tener demasiadas buenas ideas sin un marco de referencia es la receta perfecta para un producto inconsistente. Podía diseñar la interfaz más moderna del mundo para Carlos, pero si esa misma interfaz aterrorizaba a Elena o confundía a Sofía, el rediseño sería un fracaso estratégico. Me encontraba en ese momento crítico donde la divergencia de la ideación debe transformarse en la convergencia de la estrategia.

Necesitaba establecer reglas de juego. No valores corporativos vagos que terminan colgados en una pared y nadie recuerda, sino **Principios de Diseño** que funcionaran como un filtro forense. Mi objetivo era que, a partir de ese momento, cualquier decisión de UI o UX —desde el color de un botón de alerta hasta la estructura de un formulario de registro— tuviera que pasar por estos pilares. Si una propuesta no cumplía con los cinco principios, se descartaba automáticamente, sin importar qué tan "innovadora" pareciera en el papel.

#### La destilación: de la empatía al mandato técnico

Para construir estos principios, no partí de una hoja en blanco. Realicé un ejercicio de cruce de datos en **Miro**, volviendo a los cimientos de todo el proceso. Por un lado, tenía los valores institucionales del Centro Médico ABC: Excelencia, Calidez y Confianza. Por otro, tenía la realidad cruda de mis arquetipos: la desorientación tecnológica de Elena, la impaciencia justificada de Carlos y la carga administrativa de Sofía.

Empecé volcando palabras clave que conectaran ambos mundos. ¿Cómo se ve la "Excelencia" para un paciente que no encuentra sus resultados? Se ve como **Claridad**. ¿Cómo se traduce la "Calidez" a una pantalla de error? Se traduce como **Empatía**. Pasé horas moviendo post-its virtuales, agrupando conceptos y refinando la redacción en **Google Docs** hasta que cada principio fuera lo suficientemente amplio para inspirar, pero lo suficientemente específico para ser evaluado. No buscaba frases bonitas; buscaba mandatos de diseño que blindaran la experiencia del paciente frente a la fragmentación que había detectado en la auditoría inicial.

#### Principio 1: Confianza y Claridad como base de la interacción

El primer pilar que establecí fue la **Confianza y Claridad**. Durante la investigación, observé cómo Elena se paralizaba ante términos como "portal de imagenología diagnóstica" o "descarga de DICOM". La jerga médica y técnica estaba actuando como una barrera que alejaba al paciente de su propia salud. Decidí que la nueva plataforma debía eliminar cualquier rastro de ambigüedad.

Este principio me obligó a dictar que toda la información debe ser precisa, fácil de entender y, sobre todo, transparente. En la práctica, esto significaba:
*   Utilizar un lenguaje sencillo, sustituyendo términos médicos complejos por descripciones directas siempre que fuera posible.
*   Presentar los resultados médicos no solo como un PDF para descargar, sino con explicaciones contextuales que ayudaran al paciente a entender qué estaba viendo antes de su cita.
*   Hacer explícitos los pasos de cada proceso. Si un paciente como Carlos está agendando una cita, debe saber en todo momento cuántos pasos faltan y qué pasará después de hacer clic en "Confirmar".

Este principio fue mi respuesta directa a la confusión de Elena. Si ella no sentía que entendía lo que estaba pasando en la pantalla, el sistema le estaba fallando. La claridad se convirtió en nuestra métrica de confianza.

#### Principio 2: Empoderamiento a través del Autoservicio

Uno de los hallazgos más dolorosos de la fase anterior fue ver cómo Carlos, un profesional acostumbrado a resolver todo desde su teléfono, tenía que terminar llamando por teléfono para confirmar si un estudio de laboratorio requería ayuno. El sistema actual lo mantenía en una posición de dependencia pasiva. Por eso, definí el segundo principio: **Empoderamiento a través del Autoservicio**.

La directriz técnica aquí fue clara: diseñar herramientas intuitivas que permitieran a los pacientes gestionar su salud de forma autónoma. Esto no era solo una cuestión de conveniencia; era una cuestión de eficiencia operativa para el hospital.
*   Ordené que el sistema de agendamiento fuera integral, cubriendo todas las especialidades y permitiendo no solo agendar, sino modificar o cancelar citas sin intervención humana.
*   Establecí que el acceso a resultados debía ser unificado. No más portales separados para laboratorio y radiología.
*   Propuse que trámites administrativos como la facturación o el pre-registro para una cirugía pudieran realizarse totalmente en línea.

Para Carlos, esto significaba recuperar el control de su tiempo. Para el Centro Médico ABC, significaba reducir la carga sobre el call center y los mostradores físicos.

#### Principio 3: Experiencia Unificada y Fluida

La auditoría del ecosistema digital me había mostrado un Frankenstein de plataformas: el sitio institucional por un lado y "Mi Salud ABC" por otro, con diseños, URLs y lógicas de navegación totalmente distintas. Esta fragmentación era el principal punto de fricción para Sofía, quien gestionaba la salud de varios familiares y se perdía entre pestañas. Mi tercer principio fue la **Experiencia Unificada y Fluida: Un Solo ABC Digital**.

Establecí que debíamos integrar todos los puntos de contacto en un recorrido cohesivo. No podíamos permitir que el paciente sintiera que "salía" del hospital cada vez que quería consultar un dato.
*   Diseñé la arquitectura pensando en un portal de paciente unificado como el centro de gravedad de toda la experiencia.
*   Exigí transiciones lógicas entre la información pública del sitio y los servicios privados del portal.
*   Mantuve una identidad visual y una voz de marca consistentes. Si el tono en el hospital es profesional y cálido, la interfaz no puede ser fría y puramente técnica.
*   Minimicé la necesidad de múltiples inicios de sesión. El objetivo era que el usuario sintiera que estaba en una sola casa digital, sin importar la complejidad técnica que hubiera detrás.

#### Principio 4: Diseño Responsivo y Accesible (Inclusión por diseño)

Este principio no fue una sugerencia estética, sino un compromiso técnico innegociable. Al ver a Elena tratando de leer la pantalla con una lupa y a Carlos intentando agendar una cita mientras caminaba hacia una reunión, entendí que la accesibilidad era la única forma de asegurar la viabilidad del producto. Establecí el principio de **Diseño Responsivo y Accesible**.

Implementé un enfoque **Mobile-First** obligatorio. Dado que los datos mostraban una alta dependencia móvil en perfiles como los de Carlos y Sofía, la interfaz debía ser perfecta en una mano antes de serlo en un escritorio. Pero fui más allá:
*   Dictaminé el cumplimiento estricto de las pautas **WCAG 2.1 AA**. Esto implicaba decisiones técnicas sobre el contraste de color (mínimo 4.5:1), el tamaño de la fuente (escalable sin romper el layout) y la navegación por teclado.
*   Me aseguré de que todos los elementos interactivos tuvieran áreas de contacto lo suficientemente grandes para dedos menos precisos o pantallas pequeñas.

Para Elena, esto significaba que por fin podría leer sus instrucciones de preparación para un estudio sin ayuda. Para el proyecto, significaba blindarnos legalmente y elevar el estándar de calidad frente a la competencia.

#### Principio 5: Calidez Humana en lo Digital

Finalmente, no podía olvidar por qué los pacientes eligen el Centro Médico ABC: por su trato humano. El riesgo de digitalizar procesos es deshumanizarlos. Por eso, creé el principio de **Calidez Humana en lo Digital**. Quería que la interfaz reflejara la empatía que un paciente recibe en el campus de Santa Fe o el de Observatorio.

Este principio influyó directamente en el sistema de diseño y en el UX Writing:
*   Utilicé un tono de comunicación que, aunque profesional, fuera de apoyo y respetuoso. Nada de mensajes de error crípticos como "Error 404". En su lugar, mensajes que dijeran: "Lo sentimos, no encontramos lo que buscas, pero aquí te ayudamos a regresar".
*   Diseñé interfaces que transmitieran calma. El uso de espacios en blanco y una jerarquía visual clara no era solo estética; era una forma de evitar la sobrecarga cognitiva en momentos de estrés médico.
*   Integré opciones claras de soporte humano. El autoservicio es genial, pero si algo falla, el paciente debe sentir que hay una persona al otro lado lista para ayudar.

#### El filtro de calidad: una reflexión senior

Al terminar de redactar estos cinco pilares, sentí que por fin tenía el control del proyecto. Ya no era yo contra una lista interminable de requisitos; era yo con una constitución que dictaba el futuro de la plataforma. Estos principios se convirtieron en mi mejor herramienta de defensa en las reuniones con stakeholders. Si alguien sugería añadir un banner publicitario o un flujo complejo que rompiera la claridad, yo tenía un argumento sólido y documentado para rechazarlo.

Establecer estos principios fue el acto de diseño más importante de esta fase. No dibujé ni un solo píxel, pero definí cómo se sentirían y funcionarían miles de ellos. Había transformado la incertidumbre de la investigación en una brújula estratégica que aseguraría que el rediseño no fuera solo un "lavado de cara", sino una solución real a los problemas de fragmentación y desconfianza que habían plagado la experiencia digital del hospital durante años.

> **Insight de Diseño:** Un principio de diseño solo es útil si te permite decir "no". Si tus principios son tan genéricos que aceptan cualquier propuesta, no tienes principios, tienes una lista de deseos. En el ABC, estos cinco pilares fueron el filtro que nos permitió mantener la integridad de la experiencia frente a las presiones de desarrollo y marketing.


Con la brújula estratégica ya calibrada y los principios de diseño actuando como guardianes de la experiencia, me enfrenté al desafío más pragmático y tenso de la fase de definición: la realidad de los recursos finitos. Tenía una lista masiva de necesidades detectadas, pero sabía que no podíamos construirlo todo al mismo tiempo sin arriesgar la fecha de lanzamiento o la calidad técnica. Recuerdo el momento exacto en que abrí la hoja de cálculo para empezar la priorización; sabía que las decisiones que estaba a punto de tomar en el roadmap técnico iban a determinar qué parte del sueño del paciente se haría realidad en la primera versión y qué tendría que esperar, una tensión que solo el método MoSCoW podría resolver.

---

### Parte 5: El Roadmap Técnico Requisitos Priorizados y Método Moscow

#### De la abstracción estratégica a la realidad del backlog

Recuerdo perfectamente el momento en que cerré el tablero de Miro, saturado de post-its de colores y flechas que conectaban los dolores de Elena con las frustraciones de Carlos. Tenía frente a mí una visión clara de lo que el Centro Médico ABC *debería* ser, pero como diseñador, sabía que los principios de diseño y los "How Might We" son solo poesía si no se traducen en una lista de tareas que un ingeniero pueda programar. Me senté frente a una hoja de cálculo en blanco con una sensación de peso en los hombros: era el momento de transformar la empatía en arquitectura técnica y, sobre todo, de empezar a decir "no".

La transición de la estrategia al roadmap es el punto donde muchos proyectos de diseño mueren o se vuelven irrelevantes. Tenía una presión enorme por parte de los stakeholders para "hacerlo todo", pero mi responsabilidad era blindar la experiencia del paciente asegurando que lo que construyéramos primero resolviera los problemas más agudos detectados en la investigación 2015-2020. No podíamos permitirnos otro portal fragmentado; esta vez, la hoja de ruta tenía que ser impecable.

#### La disección de los 'How Might We' en requerimientos técnicos

Para no perder ni un gramo del valor descubierto en la fase de síntesis, inicié un proceso de extracción quirúrgica. No inventé funcionalidades basadas en tendencias de diseño; las extraje directamente de las necesidades de mis arquetipos y de las oportunidades que mapeé en los Customer Journey Maps. Utilicé una estructura de base de datos en Google Sheets que me permitiera rastrear el origen de cada idea para que, si alguien cuestionaba una funcionalidad en el futuro, yo pudiera señalar exactamente qué dolor de usuario la justificaba.

Estructuré cada requisito bajo el formato de **User Stories**: *"Como [Persona], quiero [acción/funcionalidad] para que [beneficio/valor]"*. Esta disciplina fue vital. Por ejemplo, para Sofía, la cuidadora, el requisito no era simplemente "un login", sino: *"Como Sofía, quiero vincular los perfiles de mis hijos a mi cuenta para gestionar sus citas sin tener que cerrar e iniciar sesión constantemente"*. 

Organizé la hoja con columnas críticas:
*   **ID del Requisito:** Para facilitar el seguimiento en Jira.
*   **Descripción:** La User Story clara y concisa.
*   **Tipo:** Diferenciando entre funcional (lo que el sistema hace) y no funcional (cómo lo hace).
*   **Fuente:** Vinculando el requisito al hallazgo del benchmarking o al punto de dolor del CJM.
*   **Prioridad MoSCoW:** El veredicto estratégico.

#### El método MoSCoW como herramienta de negociación política

Aplicar el método **MoSCoW (Must Have, Should Have, Could Have, Won't Have)** no fue solo un ejercicio técnico, sino una maniobra de gestión de expectativas. En las reuniones con el equipo de TI y los directivos del ABC, utilicé este marco para separar los deseos de las necesidades vitales. Mi criterio de priorización fue implacable: si una funcionalidad no atacaba directamente la fragmentación de la experiencia o el acceso incompleto a resultados, no podía ser un "Must Have".

Sabía que el éxito del rediseño dependía de la viabilidad. Un "Must Have" era algo sin lo cual el producto no tendría sentido lanzar. Un "Should Have" era importante pero podía esperar a la versión 1.1 si el cronograma se apretaba. Esta transparencia me permitió ganar la confianza de los desarrolladores, quienes agradecieron que el diseñador no estuviera pidiendo "castillos en el aire", sino un núcleo funcional sólido y escalable.

#### Los 'Must Haves': Blindando el núcleo de la experiencia del paciente

Al desglosar los requisitos críticos, me enfoqué en tres pilares que resolverían los problemas históricos de la plataforma:

1.  **Portal de Paciente Unificado (Mi Salud ABC 2.0):** El requisito innegociable era el **Acceso Centralizado a Todos los Resultados**. No más saltos entre el sitio principal y un subdominio de radiología. El sistema debía permitir ver laboratorio, imagenología y patología bajo un mismo inicio de sesión seguro. Esto atacaba directamente el Problema 2 identificado en la investigación previa: la confusión del paciente ante la dispersión de su información médica.
2.  **Agendamiento y Gestión de Citas Integral:** Basado en el dolor de Carlos (el profesional ocupado), definí como "Must" la capacidad de agendar citas para **todas las especialidades**, no solo laboratorio. Esto incluía la selección granular de médico, campus, fecha y hora, además de la funcionalidad de modificación y cancelación autónoma. Si el paciente seguía teniendo que llamar por teléfono para cancelar, el rediseño habría fracasado.
3.  **Gestión de Perfiles Familiares:** Este fue un requisito que defendí con fuerza tras ver cómo Sofía sufría gestionando la salud de sus padres e hijos. El portal debía permitir la vinculación de cuentas familiares desde un solo perfil maestro.

Además, establecí que el diseño **Mobile-First** no era una opción estética, sino un requisito funcional de primer nivel. Los datos mostraban que la experiencia móvil previa era subóptima y, en el contexto de 2021, lanzar algo que no fuera impecable en un smartphone era simplemente inaceptable.

#### Los cimientos invisibles: Requisitos no funcionales y accesibilidad

A menudo, los diseñadores se olvidan de lo que no se ve, pero para el Centro Médico ABC, los requisitos no funcionales eran los que garantizaban la confianza, uno de los principios que definí previamente. Me aseguré de documentar con rigor la necesidad de **Seguridad de Datos** de nivel hospitalario y el cumplimiento normativo para la protección de información sensible.

Un punto donde no cedí fue en la **Accesibilidad**. Marqué el cumplimiento de las pautas **WCAG 2.1 AA** como un "Must Have". Para una institución de salud, la accesibilidad no es un "plus", es una obligación ética. Elena, mi arquetipo de paciente mayor, necesitaba poder aumentar el tamaño de la fuente y navegar con lectores de pantalla sin fricciones. 

También definí requisitos de **Rendimiento**: tiempos de carga rápidos y una arquitectura escalable. Si el portal se caía cuando miles de pacientes intentaban consultar sus resultados simultáneamente, la percepción de excelencia de la marca ABC se vería comprometida. Estos cimientos técnicos eran los que permitirían que la interfaz visual que diseñaríamos después tuviera un lugar sólido donde apoyarse.

#### El cierre de la Fase 1: Un contrato de valor para el paciente

Al terminar la lista de requisitos priorizada, sentí que finalmente habíamos cruzado el puente entre el "qué" y el "cómo". Tenía en mis manos una hoja de ruta de 5-7 declaraciones de problema principales traducidas en un backlog ejecutable. Los "Should Haves", como la descarga de resultados en PDF o la integración con calendarios de Google y Outlook, quedaron mapeados para la siguiente iteración, asegurando que el equipo se mantuviera enfocado en el lanzamiento del núcleo crítico.

Esta actividad de síntesis y definición fue la más densa del proyecto, pero también la más gratificante. Había tomado el caos de la fragmentación digital del ABC y lo había convertido en una brújula estratégica. Con los principios de diseño como guardianes y el roadmap MoSCoW como guía de ejecución, el terreno estaba finalmente listo. Dejé atrás las hojas de cálculo y las transcripciones de entrevistas para entrar en la siguiente fase con una certeza absoluta: sabíamos exactamente qué íbamos a construir y por qué era lo correcto para el paciente.

**Reflexión final:**
Cerrar esta fase de definición me enseñó que el diseño de producto es, en gran medida, un ejercicio de responsabilidad política y técnica. No basta con entender al usuario; hay que tener el criterio para priorizar sus necesidades frente a las limitaciones de un sistema complejo. Al entregar este roadmap, sentí que no solo estaba entregando una lista de funciones, sino un compromiso real con la autonomía y la dignidad de los pacientes del Centro Médico ABC. Aquella lista priorizada se convirtió en la "constitución" del proyecto, la referencia a la que volveríamos cada vez que surgiera una duda sobre el alcance en los meses siguientes.

---

