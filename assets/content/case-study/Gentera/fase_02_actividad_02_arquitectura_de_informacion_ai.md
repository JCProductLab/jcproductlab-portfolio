# Fase 2: Idear y Diseñar (Ideation & Prototyping)

## Actividad_02_Arquitectura de Información (AI)

### Parte 1: Alineación Estratégica y Preparación del Entorno de Ideación

#### Del dato crudo al primer trazo: El peso de la evidencia

Al cerrar la fase de investigación y entendimiento de Gentera, me encontré en ese punto crítico donde el volumen de información empieza a ser abrumador si no se canaliza correctamente. Tenía sobre la mesa —virtual y mental— una montaña de requerimientos, reglas de negocio complejas y hallazgos de campo que gritaban por una solución. Sin embargo, como diseñador, sé que la ideación no es un arranque de inspiración artística; es una respuesta técnica y estructurada a problemas que ya hemos diagnosticado. El reto no era simplemente "dibujar pantallas", sino transformar esa complejidad en una arquitectura funcional que resolviera, de una vez por todas, la ineficiencia en el Modelo de Capacitación.

Mi razonamiento en este momento de transición fue puramente estratégico. No podíamos permitirnos el lujo de saltar directamente a la alta fidelidad o a discutir sobre colores y tipografías. Necesitaba un espacio de "baja presión" donde el equipo pudiera equivocarse rápido y barato. La meta era clara: establecer un marco de trabajo que nos permitiera explorar layouts y estructuras de interfaz enfocándonos exclusivamente en la jerarquía de la información y el flujo de navegación. Si no lográbamos que la lógica de la plataforma GAC fuera sólida en un boceto a lápiz o en una pizarra digital, ningún componente visual sofisticado iba a salvar el producto después. Esta fue la mentalidad con la que abordé la preparación de la **Actividad 2: Arquitectura de Información**, empezando por el cimiento del brainstorming y el bocetaje.

#### La auditoría de artefactos: Carlos y el fantasma de la plantilla ADN

Antes de convocar a nadie a una sesión de ideación, realicé lo que llamo una "revisión forense" de nuestros insumos de la Fase 1. No se puede diseñar en el vacío, así que volví a las fichas de nuestras **User Personas**. Analicé a Carlos (Administrador), Ana (Colaboradora), David (Líder) y Elena (Formadora) no como perfiles estáticos en un documento, sino como vectores de necesidades reales que el sistema debía satisfacer. Especialmente Carlos; él era mi brújula. Recordé cada una de sus frustraciones documentadas: el tiempo perdido, la duplicidad de datos y, sobre todo, el "punto de dolor" que se convirtió en el enemigo número uno del proyecto: la carga de la **plantilla ADN**.

Al revisar el Journey Map 'As-Is', identifiqué que este proceso actual era el cuello de botella que asfixiaba la operación. Carlos pasaba horas manipulando archivos Excel, segmentando listas manualmente y rogando que no hubiera errores de dedo que arruinaran las invitaciones a capacitación. Mi decisión de diseño fue que GAC debía erradicar esta fricción de raíz. Esta revisión previa no fue un trámite; fue una maniobra para asegurar que cada idea que surgiera en la sesión de brainstorming atacara directamente una ineficiencia operativa de Gentera. Si un boceto no ayudaba a Carlos a procesar esa plantilla de forma más inteligente, ese boceto no tenía lugar en nuestra solución.

#### Blindando el alcance: Qué bocetar y qué dejar para después

Uno de los mayores riesgos en esta etapa es la dispersión creativa. Es fácil querer solucionarlo todo al mismo tiempo y terminar con una colección de ideas mediocres que no resuelven lo fundamental. Para evitar esto, apliqué un criterio de priorización implacable basado en la criticidad para el negocio y la complejidad técnica. Decidí que el alcance de nuestras primeras sesiones de ideación se centraría en los ejes centrales de la plataforma: la **automatización de la segmentación** y la **trazabilidad de la capacitación**.

Para el rol de Carlos, definí que la prioridad absoluta era el flujo de carga de plantilla, la visualización inteligente de candidatos y la creación de grupos. Si resolvíamos eso, resolvíamos el 80% del problema administrativo. Por otro lado, para Ana y los colaboradores, el foco debía estar en la visualización clara de su progreso; necesitábamos que entendieran su estatus de un vistazo, sin ambigüedades. Esta delimitación del alcance fue fundamental para que el equipo no perdiera energía en funcionalidades secundarias. Sabía que si blindábamos estos flujos críticos ahora, el resto de la arquitectura de información caería en su lugar de forma natural más adelante.

#### Arquitectura de la sesión: El equipo como filtro de realidad

La configuración del equipo para estas sesiones no fue accidental. Como facilitador, busqué un equilibrio entre la visión de negocio, la factibilidad técnica y la experiencia de usuario. Invité al **Tech Lead** y a desarrolladores clave (Frontend y Backend) desde el primer minuto. Mi razonamiento es simple: no quiero diseñar "castillos en el aire". Necesitaba que la perspectiva técnica estuviera presente para validar la factibilidad de nuestras ideas desde el primer trazo. Si proponíamos una segmentación automatizada basada en ciertos criterios, el Tech Lead debía decirme en ese momento si los datos en el backend de Gentera soportarían esa lógica.

También aseguré la participación de Rodrigo, nuestro Líder de Proyecto, para mantener la alineación con los objetivos macro, y busqué momentos específicos para integrar la visión de Lalo (Líder Gentera) y el conocimiento operativo del propio Carlos. Preparé el ecosistema de colaboración en **Miro** (dado el entorno híbrido), estructurando el tablero de manera que todos los insumos de la Fase 1 —reglas de negocio, requerimientos funcionales y métricas— estuvieran a un clic de distancia. El entorno de trabajo debía respirar el contexto de Gentera; cada nota adhesiva y cada boceto debía estar rodeado de la evidencia que lo justificaba.

> **Insight de Diseño:** La presencia del equipo técnico en el bocetaje de baja fidelidad no limita la creatividad; la enfoca. Es mucho más productivo pivotar una idea porque el backend no la soporta cuando solo hemos gastado cinco minutos en un boceto, que descubrirlo semanas después cuando el prototipo de alta fidelidad ya está en manos del cliente.

#### El motor de la ideación: De métricas de negocio a preguntas de diseño

Para que la sesión de brainstorming tuviera tracción real, necesitaba traducir los KPIs de negocio en desafíos de diseño tangibles. Gentera nos había marcado un objetivo ambicioso: reducir en un **80% el tiempo operativo** de Carlos en tareas administrativas. Ese número, por sí solo, es frío. Mi trabajo fue inyectarle intención de diseño transformándolo en preguntas **"How Might We" (HMW)**.

Formulé preguntas específicas que actuaran como disparadores creativos:
*   "¿Cómo podríamos hacer que el proceso de identificación de candidatos sea casi instantáneo y libre de errores para Carlos?"
*   "¿Cómo podríamos presentar el progreso de la capacitación a Ana de una manera que sea motivadora y fácil de entender de un vistazo?"

Estas preguntas se convirtieron en el motor de nuestra ideación. Obligaban al equipo a pensar en soluciones que impactaran directamente en la eficiencia. No estábamos diseñando un dashboard porque "se viera bien", sino porque necesitábamos que Carlos viera en tres segundos lo que antes le tomaba tres horas encontrar en un Excel. Esta alineación con las métricas de éxito desde la fase de bocetaje es lo que separa un diseño decorativo de un producto de software estratégico.

#### Reflexión sobre la higiene del proceso: Fallar antes de codificar

Mirando hacia atrás en esta fase preparatoria, reafirmo que la "higiene de diseño" es lo que salva los proyectos complejos. Muchos equipos caen en la tentación de saltarse el bocetaje para "ganar tiempo", pero mi experiencia me dice que eso es una deuda técnica y de diseño que se paga con intereses altísimos más adelante. Al invertir este tiempo en alinear a los stakeholders, definir el alcance con precisión y preparar un entorno de colaboración robusto, estábamos reduciendo drásticamente el riesgo de retrabajo.

Mi estrategia fue clara: fallar rápido, fallar barato y fallar en papel (o en pizarras virtuales). Cada minuto dedicado a discutir la jerarquía de la información en un boceto de baja fidelidad nos ahorraba horas de discusión en etapas donde los cambios son mucho más costosos. Estábamos construyendo los cimientos de la plataforma GAC sobre roca firme, asegurándonos de que cada decisión de diseño estuviera anclada en la realidad operativa de Gentera y en las necesidades humanas de sus colaboradores.


Una vez que el tablero de Miro estuvo configurado y el equipo alineado con los KPIs de eficiencia, sentí que la atmósfera de la sesión cambió. Ya no estábamos hablando de generalidades; la tensión se centró en las preguntas HMW que colgaban virtualmente sobre nosotros. El desafío era ahora pasar de la teoría a la práctica: ¿cómo se vería realmente esa "identificación instantánea" de candidatos en una pantalla? Estábamos a punto de entrar en la fase de divergencia pura, donde las técnicas como el Crazy 8s pondrían a prueba nuestra capacidad de generar soluciones diversas antes de que la realidad técnica empezara a filtrar lo que era verdaderamente posible.

### Parte 2: Divergencia Estratégica Enmarcado de Problemas Mediante Hmw

#### La transición del "qué" al "cómo": El peso de la incertidumbre creativa

Después de cerrar la sesión de alineación y ver los KPIs de eficiencia brillando en el tablero de Miro, se hizo un silencio denso en la sala virtual. Teníamos los objetivos claros y los "dolores" de los usuarios mapeados en el Journey Map "As-Is", pero el Problem Statement seguía sintiéndose como una losa abstracta. Como diseñador, conozco bien ese momento de vértigo: si saltábamos directamente a dibujar pantallas, corríamos el riesgo de "solucionar" los síntomas en lugar de la enfermedad. Mi maniobra en ese punto fue frenar el impulso de abrir Figma y obligar al equipo a entrar en una fase de divergencia estratégica.

Necesitaba transformar la frustración de Carlos y el entusiasmo desorientado de Ana en disparadores creativos que no tuvieran una sola respuesta. No buscábamos "una pantalla de carga"; buscábamos responder a la pregunta de cómo eliminar la fricción humana en un proceso que hoy es puramente manual. Articulé esta transición utilizando la metodología **How Might We (HMW)**, no como un ejercicio académico, sino como un filtro de ingeniería de requerimientos. Cada pregunta que redacté tenía que ser lo suficientemente amplia para permitir la innovación, pero lo suficientemente estrecha para no perder de vista las restricciones técnicas de Gentera.

#### Desarmando la complejidad de Carlos: Automatización y precisión quirúrgica

Empecé por el perfil de Carlos, el Coordinador Detallista. Su realidad es una batalla constante contra archivos de Excel fragmentados y reglas de negocio que parecen laberintos. Al redactar sus HMW, me enfoqué obsesivamente en la **carga cognitiva**. Si Carlos dedica horas a limpiar la plantilla de ADN (Atracción de Talento), mi objetivo no era darle una herramienta de limpieza, sino hacer que el problema desapareciera.

*   **El reto de la "limpieza instantánea":** Formulé la pregunta: *¿Cómo podríamos hacer que el proceso de carga, limpieza y cruce de la plantilla de ADN sea casi instantáneo y libre de errores?* Aquí no solo pensaba en el frontend, sino en cómo el sistema debería absorber las excepciones sin que Carlos tuviera que intervenir.
*   **Blindando las reglas de negocio:** Introduje el factor de las reglas complejas como los "Gerentes Multiproducto" y los "reingresos". Pregunté: *¿Cómo podríamos asegurar que la aplicación de estas reglas sea totalmente automática y precisa?* Mi intención era eliminar la revisión manual que hoy lo asfixia, permitiéndole actuar solo ante inconsistencias reales.
*   **Segmentación inteligente:** Para la creación de grupos, el foco fue la optimización de recursos. *¿Cómo podríamos automatizar la segmentación respetando criterios de puesto, subdirección y cupos, de modo que Carlos solo sea un aprobador final?*

> **Insight Senior:** En un ecosistema tan regulado como el de Gentera, la automatización no es solo "ahorro de tiempo"; es reducción de riesgo operativo. Cada HMW para Carlos fue diseñado para moverlo de un rol de "operador de datos" a uno de "estratega de capacitación".

#### Ana y la motivación visual: De la incertidumbre al control total

Para Ana, la Colaboradora Entusiasta, el problema era radicalmente distinto: la falta de visibilidad. Su ruta de capacitación hoy es una nebulosa de correos perdidos. Al construir sus disparadores, me alejé de lo puramente funcional para entrar en lo psicológico.

*   **La ruta como narrativa:** Planteé: *¿Cómo podríamos presentar la ruta de capacitación de Ana de una manera visualmente atractiva y fácil de entender de un vistazo?* No quería un listado; quería una experiencia que le permitiera saber dónde está y qué le falta sin tener que preguntar a nadie.
*   **Omnicanalidad y fricción cero:** Basándome en su necesidad de orden, redacté preguntas sobre la integración proactiva. *¿Cómo podríamos enviar notificaciones oportunas vía WhatsApp o Teams y permitir que añada cursos a su calendario con un solo clic?* El éxito aquí no se mide en clics, sino en la ausencia de olvidos.
*   **Alertas proactivas:** Introduje un componente de prevención: *¿Cómo podríamos alertar a Ana proactivamente si está en riesgo de retrasarse?* El sistema debe ser un aliado, no un juez.

#### Visibilidad 360°: Empoderando a David y Elena

Finalmente, abordé los roles de liderazgo y formación. Para David, el Líder Comprometido, la urgencia era la **visibilidad consolidada**. Actualmente, David vive en la oscuridad respecto al progreso de su equipo. Mi pregunta clave fue: *¿Cómo podríamos ayudar a David a identificar rápidamente a los colaboradores en riesgo sin que tenga que solicitar reportes manuales?* Buscaba que la información fuera "empujada" hacia él, no "jalada" por él.

Para Elena, la Formadora, el enfoque fue la **simplificación administrativa**. Me dolió ver en el Journey Map cuánto tiempo perdía enviando correos de asistencia post-sesión. Formulé: *¿Cómo podríamos facilitar el registro de asistencia directamente en la plataforma, eliminando el proceso manual?* Quería que Elena recuperara el tiempo que le pertenece: el tiempo para enseñar.

#### La convergencia: Votación por impacto y no por estética

Una vez que tuvimos el muro cubierto de preguntas HMW, apliqué una técnica de **Affinity Clustering** para agrupar las interrogantes por temas emergentes: Automatización de Datos, Experiencia del Colaborador y Visibilidad de Liderazgo. Pero no todas las preguntas podían ser abordadas con la misma intensidad.

Convocamos a Lalo (Líder de Proyecto de Gentera) y a Rodrigo (nuestro Líder de Proyecto en Dacodes) para una sesión de **Dot Voting**. Cada uno recibió tres votos virtuales para marcar las HMW que consideraban críticas para mover la aguja de los KPIs de eficiencia que habíamos definido previamente. 

Fue un ejercicio revelador:
1.  Priorizamos la automatización de la plantilla ADN porque era el cuello de botella que detenía todo el flujo.
2.  Seleccionamos la visualización de la ruta de Ana como el segundo pilar, reconociendo que sin adopción del usuario final, el sistema fracasaría.
3.  Descartamos temporalmente ideas sobre gamificación compleja para centrarnos en la fiabilidad de los datos presentados a David.

Esta priorización estratégica fue mi escudo contra el "scope creep". Al finalizar, no teníamos solo preguntas; teníamos un mapa de ruta validado por los stakeholders. Sabíamos exactamente qué problemas íbamos a intentar resolver en la mesa de dibujo.


Con las preguntas correctas quemándonos en las manos, la tensión en el equipo era palpable. Ya no podíamos escondernos detrás de la teoría: era el momento de ver si esas promesas de "automatización instantánea" y "rutas atractivas" podían traducirse en una interfaz real. Estábamos a punto de entrar en la fase de **IDEACIÓN VISUAL: BOCETAJE RÁPIDO Y EXPLORACIÓN DE LAYOUTS**, donde el cronómetro del Crazy 8s nos obligaría a escupir las primeras soluciones tangibles para el dashboard de Carlos.

### Parte 3: Ideación Visual Bocetaje Rápido y Exploración de Layouts

#### El salto al vacío: del post-it a la tinta

Teníamos la pared llena de preguntas "Cómo podríamos" (HMW) y una lista de prioridades validada por Lalo y Rodrigo, pero en ese momento sentí la tensión clásica de quien sabe que la estrategia no sirve de nada si no se traduce en una interfaz que funcione. El aire en la sala de Dacodes se sentía distinto; habíamos terminado la fase de abstracción y era el momento de ensuciarnos las manos. Como diseñador, sé que este es el punto donde muchos proyectos descarrilan: se intenta saltar directamente a Figma para que "se vea bien", pero yo necesitaba fallar rápido y, sobre todo, barato. Cada minuto que pasáramos diseñando un componente en alta fidelidad que no resolviera el problema de Carlos era tiempo y dinero tirado a la basura.

Preparé la mesa con lo básico: resmas de papel A4, rotuladores de punta fina para obligarnos a no perdernos en el detalle, y mi cronómetro. Convoqué a los desarrolladores clave —nuestro Tech Lead y un par de perfiles de front y back— porque no quería que mis bocetos fueran castillos en el aire; necesitaba que su criterio de factibilidad estuviera presente desde el primer trazo. Les recordé el mantra de esta sesión: cantidad sobre calidad. No buscábamos obras de arte, buscábamos estructuras que soportaran el peso de la operación de Gentera. El objetivo era transformar ese "cómo podríamos hacer que la segmentación sea instantánea" en un "así es como se verá el botón que lo activa".

#### La presión del cronómetro: Crazy 8s para el Dashboard de Carlos

Empezamos con el plato fuerte: el Dashboard de Carlos. Para romper el hielo y forzar la divergencia, utilicé la técnica de **Crazy 8s**. Es un ejercicio brutal pero efectivo: doblas una hoja en ocho secciones y tienes exactamente 60 segundos por sección para escupir una idea. La presión del tiempo es fundamental; te obliga a silenciar al crítico interno y a superar la primera idea obvia que todos tenemos en la cabeza. 

En los primeros tres cuadros, dibujé layouts convencionales: un menú lateral con una tabla central. Pero a partir del cuarto, la fatiga creativa me obligó a buscar otras rutas. Empecé a jugar con la disposición de los "Grupos Propuestos" que Carlos tanto necesitaba. En un cuadro, los visualicé como tarjetas de gran tamaño; en otro, como un flujo horizontal de etapas. Mi razonamiento era claro: necesitaba encontrar la forma más eficiente de mostrarle a Carlos que el sistema ya había hecho el trabajo sucio de segmentación por él. 

> El valor de este ejercicio no está en los ocho dibujos, sino en el noveno que surge cuando combinas los mejores fragmentos de los anteriores. Al final de esos ocho minutos frenéticos, me di cuenta de que la solución no era una tabla infinita, sino un panel de control que presentara "bloques de decisión" listos para ser validados.

#### El flujo de carga ADN: Diseñando para la excepción

Una vez que bajamos las pulsaciones del Crazy 8s, pasé a los **Solution Sketches**, dedicando unos 15 minutos a desarrollar con más calma el flujo de carga de la plantilla ADN (Boceto 1.1). Este es el corazón del sistema y donde Carlos sentía más miedo. Dibujé una interfaz de carga extremadamente limpia, casi minimalista, con un área de *drag & drop* que dominara el centro de la pantalla. En la parte inferior, incluí un historial de cargas con estados claros (completado, fallido, en proceso) para dar esa trazabilidad que el proceso manual actual no ofrece.

Pero el verdadero reto técnico estaba en el **Boceto 1.2**: el Resumen de Procesamiento. Aquí es donde apliqué un criterio senior de diseño de producto: el diseño para el error. En lugar de solo mostrar un mensaje de "Éxito", diseñé un panel que destacara las "Inconsistencias Detectadas". Sabíamos por la investigación que entre el 10% y el 15% de los datos suelen venir con errores de formato o duplicados. Mi decisión fue hacer que esas excepciones fueran el centro de atención. Si Carlos podía confiar en que el sistema detectaba los errores por él, dejaría de revisar fila por fila el 85% restante que sí estaba correcto. Esta pequeña decisión de diseño es la que realmente automatiza el proceso: reducir la carga cognitiva de Carlos de "revisar todo" a "validar excepciones".

#### Arquitectura de motivación: El mapa de ruta de Ana

Para Ana, la colaboradora, el enfoque cambió radicalmente. Su problema no era la eficiencia operativa, sino la incertidumbre y la falta de visibilidad. En el **Boceto 2.1**, exploré un layout que se alejara de las listas de tareas aburridas. Diseñé lo que llamé el "Mapa de Mi Ruta": una línea de tiempo visual, casi como un tablero de juego, donde los hitos (Básico, Intermedio, Avanzado, Experto) se presentaran como niveles a conquistar. 

Ubicqué un indicador de porcentaje de avance muy prominente en la esquina superior derecha. No era solo un dato; era un motor de motivación. En el **Boceto 2.2**, definí que al hacer clic en cada hito, se desplegara un detalle con la fecha, la sede y el formador, pero con una jerarquía de información muy estricta para no abrumarla. Mi razonamiento aquí fue psicológico: si Ana siente que su capacitación es un camino con progreso visible y no una serie de correos aislados, la adopción de la plataforma será natural.

#### Visibilidad instantánea: El Dashboard de David

David, el líder de oficina, necesitaba una "foto" rápida de su equipo para tomar decisiones antes de que fuera tarde. Para él, en el **Boceto 3.1**, diseñé un layout de tarjetas. Cada tarjeta representaba a un colaborador y utilizaba un sistema de semáforos visuales (código de color: rojo para retrasados, amarillo para pendientes, verde para al día). 

En el margen del boceto, anoté una interacción clave: un filtro global por "Oficina" y "Puesto". David no tiene tiempo para navegar; necesita entrar, filtrar y ver quién necesita apoyo. También incluí un botón de "Contactar Colaborador" directamente en la tarjeta, permitiendo que la acción de seguimiento ocurriera en el mismo lugar donde se detectaba el problema. Esta es la esencia de un buen diseño de herramientas internas: reducir la distancia entre el hallazgo de un dato y la ejecución de una acción.

#### Anotaciones técnicas: El plano detrás del dibujo

Lo que diferencia estos bocetos de simples dibujos son las anotaciones técnicas que fui dejando en los bordes de las hojas A4, basándome en lo que habíamos discutido con el equipo técnico. No solo dibujé un botón de "Generar Grupos"; anoté que este botón debía activar el algoritmo de segmentación automática basado en las reglas de negocio de puesto y subdirección. 

En el flujo de Ana, incluí la opción de descargar archivos **.ical** directamente desde las notificaciones (Boceto 2.3). Parece un detalle menor, pero es lo que resuelve el problema de los colaboradores olvidando sus sesiones porque no las tienen en su calendario personal. Estas anotaciones son las que transforman la colección de bocetos en un documento vivo que el equipo de desarrollo ya empezaba a diseccionar. Estábamos construyendo la lógica del sistema en papel, validando flujos como la asignación de formadores (Boceto 1.5) y el envío masivo de invitaciones vía WhatsApp y Teams (Boceto 1.6) antes de que se escribiera una sola línea de código.

#### Reflexión sobre el proceso de divergencia

Al final de la jornada, la mesa estaba cubierta de papel. Habíamos cumplido con los principios de "No Juzgar" y "Cantidad sobre Calidad" que nos habíamos propuesto. Al ignorar deliberadamente la tipografía, los colores corporativos de Gentera y la perfección de los bordes, pudimos iterar sobre la jerarquía de la información con una agresividad que Figma no permite. 

Cuestioné cada elemento: ¿Realmente Carlos necesita ver el ID del empleado en la primera vista? No, lo eliminamos. ¿Es vital que Ana vea quién es su formador antes de la fecha? Sí, genera confianza, lo mantenemos. Esta curaduría de contenido, hecha a mano y en voz alta con el equipo, nos permitió llegar a una estructura de navegación mucho más sólida. Teníamos ante nosotros el esqueleto funcional de GAC, y aunque todavía eran trazos de rotulador, la solución al rompecabezas de la capacitación empezaba a ser visible por primera vez.


Miré la montaña de bocetos sobre la mesa y sentí esa mezcla de satisfacción y vértigo; teníamos demasiadas buenas ideas, pero también algunas contradicciones que resolver. Sabía que no podíamos avanzar a wireframes con este volumen de propuestas sin antes pasar por un filtro crítico que nos obligara a elegir. Estábamos a punto de entrar en la sesión de **CONVERGENCIA I: CRÍTICA CONSTRUCTIVA Y AFINIDAD DE CONCEPTOS**, donde tendríamos que defender cada trazo frente al equipo y ver cuáles de estas estructuras sobrevivían al juicio de la realidad operativa de Gentera.

### Parte 4: Convergencia I Crítica Constructiva y Afinidad de Conceptos

#### El filtro de la realidad operativa

La mesa y las paredes estaban saturadas. Teníamos decenas de bocetos, desde ideas brillantes hasta experimentos visuales que, honestamente, no sobrevivirían a una implementación real. En ese momento, la energía en la sala era de una euforia desordenada, pero como responsable del producto, sentí la presión de la responsabilidad estratégica: no podíamos permitir que el volumen de ideas diluyera la efectividad de la solución. Teníamos que pasar del "qué podríamos hacer" al "qué debemos construir" para resolver la fragmentación operativa de Gentera. Si no aplicábamos un embudo crítico en ese instante, corríamos el riesgo de llevar ambigüedades costosas a la fase de wireframing, o peor aún, de diseñar una herramienta que Carlos y Ana terminarían ignorando por ser demasiado compleja.

Inicié la sesión de convergencia con un objetivo innegociable: transformar ese caos visual en una estrategia de diseño coherente. Sabía que la única forma de blindar el proyecto contra el desperdicio de recursos era someter cada trazo al juicio de la viabilidad técnica y las reglas de negocio. No se trataba de elegir los bocetos "más bonitos", sino de identificar cuáles articulaban mejor la automatización de la segmentación y la trazabilidad que el brief exigía como pilares del proyecto GAC.

#### Del caos visual a la identidad funcional: Affinity Clustering

Para organizar la explosión creativa, implementé la técnica de **Affinity Clustering**. Mi intención era que el equipo dejara de ver bocetos aislados y empezara a detectar patrones sistémicos. Fuimos agrupando físicamente las ideas que abordaban problemas similares, creando clusters con identidades funcionales claras. 

Articulé este proceso invitando al Tech Lead y al Líder de Proyecto a intervenir desde el primer minuto. Mientras movíamos los papeles, surgieron temas dominantes: "Gestión de Inconsistencias en ADN", "Visualización de Rutas de Capacitación" y "Control de Recursos". Al asignar nombres a estos grupos, obligué al equipo a pensar en términos de módulos de software y no solo en pantallas. Por ejemplo, el cluster de "Carga de Plantilla" dejó de ser una simple subida de archivos para convertirse en un motor de diagnóstico. Esta agrupación nos permitió ver dónde teníamos redundancias y dónde, a pesar de la cantidad de dibujos, todavía nos faltaba profundidad lógica para cubrir casos como el de los reingresos o los cambios de puesto.

#### El juicio de los tres pilares: Crítica Constructiva

Una vez que el tablero estuvo ordenado, pasamos a la fase de **Crítica Constructiva** utilizando el marco "Me gusta / Desearía / Qué tal si". Este ritual es fundamental para separar el ego del diseñador de la utilidad del producto. No permití críticas vagas; cada observación debía estar anclada en una necesidad de las Personas que habíamos definido previamente.

*   **"Me gusta":** Blindamos de inmediato el concepto del "Mapa de Mi Ruta" para Ana. Era una victoria clara en términos de empatía visual; permitía que el colaborador entendiera su progreso de un vistazo, algo que los Excels actuales simplemente no pueden ofrecer. También validamos la visualización de grupos en tarjetas para Carlos, ya que aportaba una claridad espacial que facilitaba la gestión de cupos.
*   **"Desearía":** Aquí es donde el diseño se vuelve robusto. Señalé un vacío crítico: el sistema no podía limitarse a detectar errores en la carga de la plantilla ADN; debía sugerir correcciones automáticas. Si el sistema detecta una inconsistencia, Carlos no debería volver al Excel original, sino resolverlo ahí mismo. También surgió la necesidad de que los Líderes Operativos tuvieran una interfaz para verificar la disponibilidad de los formadores antes de asignar recursos, un detalle técnico que no habíamos explorado lo suficiente en la divergencia.
*   **"¿Qué tal si?":** Abrimos la puerta a innovaciones incrementales, como la previsualización de las invitaciones por WhatsApp y Outlook. Esta idea fue recibida con entusiasmo porque reducía la ansiedad de Carlos al realizar envíos masivos; ver el mensaje exacto antes de presionar "enviar" era un control de calidad psicológico invaluable.

#### Simplificación radical y la carga cognitiva de Carlos

Al analizar los bocetos 1.1 y 1.2, centrados en la figura de Carlos como Coordinador Detallista, tomé una decisión de diseño firme: debíamos reducir drásticamente la carga cognitiva. El proceso actual de Carlos es un laberinto de reglas de negocio densas (reingresos, faltas, compatibilidad de puestos, gerentes multiproducto). Mi razonamiento fue que, aunque el motor interno de GAC fuera complejo, la interfaz debía sentirse fluida.

Decidí que la pantalla de carga debía centrarse exclusivamente en la visibilidad de las "Inconsistencias Detectadas". Si el sistema procesa 500 filas y encuentra 10 errores, Carlos solo debe ver esos 10. Esta decisión estratégica buscaba convertir a GAC en la "única fuente de verdad", eliminando la necesidad de que Carlos tuviera que cruzar datos manualmente entre diferentes archivos. La simplicidad no era una cuestión estética, sino una herramienta de eficiencia operativa para reducir su ansiedad y el margen de error humano.

#### La tensión entre automatización y control manual

Uno de los debates más intensos de la sesión fue el balance entre la autonomía del sistema y el criterio humano. Aunque la automatización es el corazón del proyecto, rechacé la idea de una "caja negra" donde el sistema decidiera todo sin intervención. Basándome en el bocetaje de la asignación de grupos (Boceto 1.4), defendí la necesidad de una interfaz de "arrastrar y soltar".

Carlos necesita poder mover participantes entre grupos de forma ágil para ajustar imprevistos de último minuto. Si un colaborador no puede asistir, Carlos debe poder reubicarlo con un clic. Esta flexibilidad es lo que hace que una herramienta sea adoptada en el mundo real. La lógica de negocio debe ser transparente; si el sistema excluye a alguien, debe explicar por qué (ej. "Falta previa no justificada"). Este equilibrio entre un motor automatizado potente y un control manual intuitivo fue lo que definió la arquitectura de los flujos de administración.

#### Validando el ecosistema: Ana, David y Elena

No podíamos olvidar que GAC es un ecosistema. Para Ana, la Colaboradora, confirmamos que el indicador de porcentaje de avance era el motor motivacional que necesitaba. Pero añadimos un nivel de detalle técnico: la necesidad de indicadores visuales para los "toques" de comunicación (si recibió SMS o WhatsApp), para que ella supiera exactamente por qué canal esperar la información.

Para David, el Gerente de Oficina, priorizamos la visualización tipo "semáforo" en su dashboard. David tiene poco tiempo; necesita saber quién de su equipo está en riesgo de no completar la capacitación sin navegar por menús profundos. Implementamos la capacidad de *drill-down* para que, solo si lo necesita, pueda ver el detalle específico de un colaborador. Finalmente, para Elena, la Formadora, la integración de su agenda con Outlook se convirtió en un requisito innegociable para asegurar la escalabilidad de la plataforma.

#### El filtro de realidad como garantía de éxito

Esta sesión de convergencia fue nuestro filtro de realidad. Al final del día, no solo teníamos menos dibujos, sino que teníamos mejores ideas. Logramos alinear las expectativas de los stakeholders clave, como Lalo y Carlos, asegurando que lo que estábamos a punto de estructurar en wireframes fuera algo que Gentera pudiera y quisiera operar.

Utilizamos la técnica de **Dot Voting** para dar el veredicto final. Cada miembro del equipo asignó sus votos a los conceptos que mejor equilibraban el valor para el usuario con la factibilidad técnica. Los ganadores no fueron las ideas más disruptivas, sino las más sólidas: el mapa de ruta de Ana, el motor de diagnóstico de Carlos y el dashboard de semáforos de David. Salí de esa sesión con la certeza de que habíamos blindado el proyecto contra la irrelevancia. Teníamos la materia prima para construir la arquitectura de información definitiva, sabiendo que cada decisión estaba respaldada por un razonamiento crítico y una validación temprana.


Al recoger los votos del *Dot Voting*, me di cuenta de que, aunque teníamos los conceptos claros, había una zona gris que nadie quería tocar: la jerarquía exacta de las reglas de negocio en la interfaz de segmentación. Teníamos las piezas del rompecabezas, pero el orden de prioridad para resolver conflictos de cupos y puestos todavía se sentía como un terreno peligroso. Sabía que antes de trazar la arquitectura final, necesitábamos una última sesión de **CONVERGENCIA II: REFINAMIENTO Y PRIORIZACIÓN DE CONCEPTOS**, donde tendríamos que sentar a los expertos en reglas de negocio para que nos dieran la última palabra sobre qué regla rompe a cuál en el flujo de automatización.#### El filtro de la realidad operativa

La mesa y las paredes estaban saturadas. Teníamos decenas de bocetos, desde ideas brillantes hasta experimentos visuales que, honestamente, no sobrevivirían a una implementación real. En ese momento, la energía en la sala era de una euforia desordenada, pero como responsable del producto, sentí la presión de la responsabilidad estratégica: no podíamos permitir que el volumen de ideas diluyera la efectividad de la solución. Teníamos que pasar del "qué podríamos hacer" al "qué debemos construir" para resolver la fragmentación operativa de Gentera. Si no aplicábamos un embudo crítico en ese instante, corríamos el riesgo de llevar ambigüedades costosas a la fase de wireframing, o peor aún, de diseñar una herramienta que Carlos y Ana terminarían ignorando por ser demasiado compleja.

Inicié la sesión de convergencia con un objetivo innegociable: transformar ese caos visual en una estrategia de diseño coherente. Sabía que la única forma de blindar el proyecto contra el desperdicio de recursos era someter cada trazo al juicio de la viabilidad técnica y las reglas de negocio. No se trataba de elegir los bocetos "más bonitos", sino de identificar cuáles articulaban mejor la automatización de la segmentación y la trazabilidad que el brief exigía como pilares del proyecto GAC.

#### Del caos visual a la identidad funcional: Affinity Clustering

Para organizar la explosión creativa, implementé la técnica de **Affinity Clustering**. Mi intención era que el equipo dejara de ver bocetos aislados y empezara a detectar patrones sistémicos. Fuimos agrupando físicamente las ideas que abordaban problemas similares, creando clusters con identidades funcionales claras. 

Articulé este proceso invitando al Tech Lead y al Líder de Proyecto a intervenir desde el primer minuto. Mientras movíamos los papeles, surgieron temas dominantes: "Gestión de Inconsistencias en ADN", "Visualización de Rutas de Capacitación" y "Control de Recursos". Al asignar nombres a estos grupos, obligué al equipo a pensar en términos de módulos de software y no solo en pantallas. Por ejemplo, el cluster de "Carga de Plantilla" dejó de ser una simple subida de archivos para convertirse en un motor de diagnóstico. Esta agrupación nos permitió ver dónde teníamos redundancias y dónde, a pesar de la cantidad de dibujos, todavía nos faltaba profundidad lógica para cubrir casos como el de los reingresos o los cambios de puesto.

#### El juicio de los tres pilares: Crítica Constructiva

Una vez que el tablero estuvo ordenado, pasamos a la fase de **Crítica Constructiva** utilizando el marco "Me gusta / Desearía / Qué tal si". Este ritual es fundamental para separar el ego del diseñador de la utilidad del producto. No permití críticas vagas; cada observación debía estar anclada en una necesidad de las Personas que habíamos definido previamente.

*   **"Me gusta":** Blindamos de inmediato el concepto del "Mapa de Mi Ruta" para Ana. Era una victoria clara en términos de empatía visual; permitía que el colaborador entendiera su progreso de un vistazo, algo que los Excels actuales simplemente no pueden ofrecer. También validamos la visualización de grupos en tarjetas para Carlos, ya que aportaba una claridad espacial que facilitaba la gestión de cupos.
*   **"Desearía":** Aquí es donde el diseño se vuelve robusto. Señalé un vacío crítico: el sistema no podía limitarse a detectar errores en la carga de la plantilla ADN; debía sugerir correcciones automáticas. Si el sistema detecta una inconsistencia, Carlos no debería volver al Excel original, sino resolverlo ahí mismo. También surgió la necesidad de que los Líderes Operativos tuvieran una interfaz para verificar la disponibilidad de los formadores antes de asignar recursos, un detalle técnico que no habíamos explorado lo suficiente en la divergencia.
*   **"¿Qué tal si?":** Abrimos la puerta a innovaciones incrementales, como la previsualización de las invitaciones por WhatsApp y Outlook. Esta idea fue recibida con entusiasmo porque reducía la ansiedad de Carlos al realizar envíos masivos; ver el mensaje exacto antes de presionar "enviar" era un control de calidad psicológico invaluable.

#### Simplificación radical y la carga cognitiva de Carlos

Al analizar los bocetos 1.1 y 1.2, centrados en la figura de Carlos como Coordinador Detallista, tomé una decisión de diseño firme: debíamos reducir drásticamente la carga cognitiva. El proceso actual de Carlos es un laberinto de reglas de negocio densas (reingresos, faltas, compatibilidad de puestos, gerentes multiproducto). Mi razonamiento fue que, aunque el motor interno de GAC fuera complejo, la interfaz debía sentirse fluida.

Decidí que la pantalla de carga debía centrarse exclusivamente en la visibilidad de las "Inconsistencias Detectadas". Si el sistema procesa 500 filas y encuentra 10 errores, Carlos solo debe ver esos 10. Esta decisión estratégica buscaba convertir a GAC en la "única fuente de verdad", eliminando la necesidad de que Carlos tuviera que cruzar datos manualmente entre diferentes archivos. La simplicidad no era una cuestión estética, sino una herramienta de eficiencia operativa para reducir su ansiedad y el margen de error humano.

#### La tensión entre automatización y control manual

Uno de los debates más intensos de la sesión fue el balance entre la autonomía del sistema y el criterio humano. Aunque la automatización es el corazón del proyecto, rechacé la idea de una "caja negra" donde el sistema decidiera todo sin intervención. Basándome en el bocetaje de la asignación de grupos (Boceto 1.4), defendí la necesidad de una interfaz de "arrastrar y soltar".

Carlos necesita poder mover participantes entre grupos de forma ágil para ajustar imprevistos de último minuto. Si un colaborador no puede asistir, Carlos debe poder reubicarlo con un clic. Esta flexibilidad es lo que hace que una herramienta sea adoptada en el mundo real. La lógica de negocio debe ser transparente; si el sistema excluye a alguien, debe explicar por qué (ej. "Falta previa no justificada"). Este equilibrio entre un motor automatizado potente y un control manual intuitivo fue lo que definió la arquitectura de los flujos de administración.

#### Validando el ecosistema: Ana, David y Elena

No podíamos olvidar que GAC es un ecosistema. Para Ana, la Colaboradora, confirmamos que el indicador de porcentaje de avance era el motor motivacional que necesitaba. Pero añadimos un nivel de detalle técnico: la necesidad de indicadores visuales para los "toques" de comunicación (si recibió SMS o WhatsApp), para que ella supiera exactamente por qué canal esperar la información.

Para David, el Gerente de Oficina, priorizamos la visualización tipo "semáforo" en su dashboard. David tiene poco tiempo; necesita saber quién de su equipo está en riesgo de no completar la capacitación sin navegar por menús profundos. Implementamos la capacidad de *drill-down* para que, solo si lo necesita, pueda ver el detalle específico de un colaborador. Finalmente, para Elena, la Formadora, la integración de su agenda con Outlook se convirtió en un requisito innegociable para asegurar la escalabilidad de la plataforma.

#### El filtro de realidad como garantía de éxito

Esta sesión de convergencia fue nuestro filtro de realidad. Al final del día, no solo teníamos menos dibujos, sino que teníamos mejores ideas. Logramos alinear las expectativas de los stakeholders clave, como Lalo y Carlos, asegurando que lo que estábamos a punto de estructurar en wireframes fuera algo que Gentera pudiera y quisiera operar.

Utilicé la técnica de **Dot Voting** para dar el veredicto final. Cada miembro del equipo asignó sus votos a los conceptos que mejor equilibraban el valor para el usuario con la factibilidad técnica. Los ganadores no fueron las ideas más disruptivas, sino las más sólidas: el mapa de ruta de Ana, el motor de diagnóstico de Carlos y el dashboard de semáforos de David. Salí de esa sesión con la certeza de que habíamos blindado el proyecto contra la irrelevancia. Teníamos la materia prima para construir la arquitectura de información definitiva, sabiendo que cada decisión estaba respaldada por un razonamiento crítico y una validación temprana.


Al recoger los votos del *Dot Voting*, me di cuenta de que, aunque teníamos los conceptos claros, había una zona gris que nadie quería tocar: la jerarquía exacta de las reglas de negocio en la interfaz de segmentación. Teníamos las piezas del rompecabezas, pero el orden de prioridad para resolver conflictos de cupos y puestos todavía se sentía como un terreno peligroso. Sabía que antes de trazar la arquitectura final, necesitábamos una última sesión de **CONVERGENCIA II: REFINAMIENTO Y PRIORIZACIÓN DE CONCEPTOS**, donde tendríamos que sentar a los expertos en reglas de negocio para que nos dieran la última palabra sobre qué regla rompe a cuál en el flujo de automatización.

### Parte 5: Convergencia Ii Refinamiento y Priorización de Conceptos

#### El momento de la verdad: de la divergencia al orden estratégico

Al terminar la sesión de crítica constructiva, el ambiente en la sala —y en nuestro tablero de FigJam— era una mezcla de euforia creativa y una pesadez técnica latente. Teníamos cientos de Post-its virtuales y decenas de bocetos que iban desde lo conservador hasta lo casi futurista. Sin embargo, como responsable del diseño, sentía una tensión específica: la "zona gris" de las reglas de negocio de Gentera seguía ahí, observándonos. Sabía que si no lográbamos aterrizar esa masa de ideas en una estructura de producto coherente y priorizada, los wireframes que estábamos por trazar serían solo dibujos bonitos sin capacidad de ejecución.

Mi razonamiento en ese punto de inflexión fue pragmático. Habíamos pasado por una fase de divergencia necesaria, pero el éxito de la plataforma GAC no dependería de cuántas funciones imagináramos, sino de cómo resolvíamos el conflicto fundamental de la segmentación. Necesitaba pasar de la exploración a una convergencia estratégica que blindara el flujo de automatización. El reto no era solo qué pantallas diseñar, sino definir el orden de prioridad absoluto para que el sistema supiera qué hacer cuando, por ejemplo, un cupo se llenara o un puesto no encajara en las reglas predefinidas. No podíamos permitir que la automatización colapsara ante la primera excepción; debíamos diseñar el control, no solo el proceso.

#### Refinando el trazo: el filtro de la crítica constructiva

Inicié el proceso de refinamiento aplicando una disciplina férrea sobre los insumos que habíamos generado. Tomé los **Crazy 8s** y los **Solution Sketches** iniciales y los sometí a un escrutinio técnico utilizando el marco de **"Me gusta / Desearía que / Qué tal si"**. Este método no fue un ejercicio de cortesía, sino una herramienta de diagnóstico para pulir las interfaces. Por ejemplo, en los bocetos para la visualización de progreso de Ana, el equipo había propuesto inicialmente listas densas de texto. Aplicando el "Desearía que fuera más visual", evolucionamos esa idea hacia un mapa interactivo.

Me enfoqué en que cada iteración respondiera directamente a una pregunta **How Might We (HMW)** específica. Para Carlos, la pregunta era: *¿Cómo podríamos hacer que el proceso de identificación de candidatos sea casi instantáneo y libre de errores?*. Esto me llevó a descartar bocetos que requerían múltiples clics de validación y a fusionarlos en una solución más robusta que combinaba la carga masiva con una limpieza de datos inmediata.

> **Insight de Diseño:** El refinamiento no consiste en añadir detalles, sino en eliminar la fricción visual. Al combinar elementos de diferentes bocetos, descubrí que la mejor interfaz para Carlos no era la que le mostraba todo, sino la que solo le interrumpía cuando el sistema detectaba una anomalía que requería su criterio humano.

#### Los tres pilares del motor de Carlos

Basándome en la necesidad de mover la aguja de un proceso manual a uno de **"Revisión Asistida"**, definí los tres conceptos centrales que actuarían como el corazón del sistema para el rol de Administrador. No fueron elegidos al azar; cada uno atacaba un punto de dolor crítico del Journey Map:

1.  **Motor de Automatización de Listas:** Decidí que este sería el núcleo. No es solo un cargador de Excel; es una interfaz de procesamiento inteligente que aplica reglas complejas como los reingresos y las exclusiones de forma automática.
2.  **Generador de Grupos Óptimos:** Este concepto nació para eliminar el "rompecabezas artesanal" que Carlos sufría cada semana. La idea es que un algoritmo proponga la segmentación basándose en sede, puesto y cupos, pero presentándolo de forma visual para su ajuste.
3.  **Central de Comunicaciones Unificada:** El objetivo aquí era profesionalizar y automatizar el envío masivo de invitaciones por Outlook, Teams y WhatsApp, eliminando la tarea más tediosa del proceso actual.

La lógica detrás de elegir el "Motor de Automatización" como la prioridad número uno fue clara: si la entrada de datos es defectuosa, el resto del sistema falla. Al diseñar la **Visualización de Lógica de Reglas**, me aseguré de que el sistema fuera transparente. Si un colaborador es excluido, Carlos debe ver exactamente por qué (ej. "Identificado como Gerente Multiproducto por presencia de Asesor CIE en su oficina"). Esta transparencia es lo que transforma una "caja negra" tecnológica en una herramienta en la que el usuario confía.

#### Funcionalidades de alto impacto: el diseño de la eficiencia

Para que estos conceptos no se quedaran en abstracciones, definí características técnicas muy específicas que elevarían la experiencia de usuario. Para el ajuste de grupos, propuse una interfaz de **Arrastrar y Soltar (Drag & Drop)**. Mi razonamiento fue que Carlos ya hace esto mentalmente; darle la herramienta para mover participantes entre tarjetas de grupos de forma visual reduce drásticamente su carga cognitiva.

Para el colaborador, el concepto de **"Mi Ruta de Capacitación"** se alejó de ser un simple historial para convertirse en un **Mapa Visual de Progreso**. Diseñé este módulo con una lógica de hitos (Básico, Intermedio, Avanzado) para gamificar el avance de Ana. No se trata solo de ver qué curso sigue, sino de sentir el progreso mediante un indicador de porcentaje de avance que sea motivador.

En cuanto a la gestión de excepciones, articulé el **"Dashboard de Inconsistencias Detectadas"**. En lugar de que Carlos busque errores en una sábana de Excel de 500 filas, el sistema le presenta un resumen post-procesamiento con alertas inteligentes. Si hay un problema de cupo o un conflicto de puesto, el sistema no solo avisa, sino que ofrece sugerencias de corrección. Además, integré la generación automática de archivos **.ical** para que cada invitación enviada se agende en el calendario del usuario con un solo clic, cerrando el ciclo de comunicación de forma impecable.

#### El filtro forense: Dot Voting y viabilidad técnica

Con los conceptos refinados sobre la mesa, procedí a facilitar la mecánica de **Dot Voting**. En esta sesión, invité a Rodrigo (Líder de Proyecto) y a los desarrolladores clave (Tech Lead y Backend) para asegurar que no estuviéramos diseñando castillos en el aire. Cada participante recibió 3 votos para asignar a las ideas que mejor equilibraran el valor para el usuario con la factibilidad técnica.

Este no fue un concurso de popularidad. Fue un filtro forense. El Tech Lead cuestionó la complejidad de la regla del "Gerente Multiproducto" en tiempo real, lo que nos llevó a ajustar el boceto para que fuera una validación asistida y no una automatización total inmediata que pudiera fallar. Al final de la votación, las soluciones que avanzaron a la etapa de wireframing fueron aquellas que blindaban el MVP: el motor de listas, el mapa de progreso de Ana y el dashboard de equipo para David. Salimos de esa sesión con una hoja de ruta técnica validada por quienes tendrían que escribir el código.

#### Los cinco mandamientos de la arquitectura GAC

Para cerrar esta fase de convergencia, establecí cinco principios rectores que servirían como brújula para todo el diseño detallado que vendría después. Estos principios no son decorativos; son mandatos operativos que extraje de la visión estratégica del proyecto:

*   **Automatización Inteligente con Control Humano:** El sistema propone, Carlos dispone. Nunca quitamos el volante al administrador en las decisiones críticas.
*   **Visibilidad Centralizada y en Tiempo Real:** GAC debe ser la **única fuente de verdad**. Se acabó la dispersión de información en archivos "Concentrado histórico.xls" perdidos en carpetas compartidas.
*   **Experiencia de Usuario Intuitiva:** Curva de aprendizaje mínima. Si un Gerente de Oficina como David necesita más de tres clics para ver el estatus de su equipo, hemos fallado.
*   **Comunicación Proactiva y Multicanal:** Las notificaciones por WhatsApp y Teams no son un lujo, son el pilar que asegura la asistencia.
*   **Flexibilidad y Escalabilidad:** El diseño debe permitir que, en el futuro, se añadan nuevas rutas de capacitación sin romper la estructura actual.

Estos principios aseguran que, al diseñar la arquitectura de información, cada menú, cada botón y cada flujo de datos responda a la promesa de valor de Gentera: poner a la persona en el centro, eficientando su crecimiento.


Al consolidar estos conceptos, sentí una mezcla de alivio y una nueva forma de presión. Teníamos la estrategia y los módulos definidos, pero ahora venía el momento más delicado: presentar este "esqueleto" de decisiones a Lalo y Carlos para obtener su validación estratégica. Sabía que en esa reunión se jugaba el destino de las funcionalidades más ambiciosas, como el motor de automatización, y me preguntaba si estarían dispuestos a soltar el control de sus procesos manuales para confiar en la lógica que habíamos diseñado. El siguiente desafío sería defender esta visión ante los dueños del proceso en la sesión de **VALIDACIÓN CON STAKEHOLDERS: ALINEACIÓN Y FEEDBACK ESTRATÉGICO**.

### Parte 6: Validación con Stakeholders Alineación y Feedback Estratégico

#### La vulnerabilidad de los bocetos ante la mirada del negocio

La tensión en la videollamada de Google Meets era palpable cuando compartí mi pantalla para mostrar, por primera vez, los bocetos de baja fidelidad ante Lalo y Carlos. Como responsable del diseño, sabía que este era uno de los momentos más críticos del proyecto GAC: pasar de la abstracción de los mapas de empatía a la crudeza de las estructuras de interfaz. Presentar *low-fidelity sketches* ante stakeholders de alto nivel siempre es un movimiento calculado. Mi razonamiento estratégico fue claro: necesitaba que se enfocaran en la lógica del proceso y no en la estética de los botones. Si les mostraba colores y sombras ahora, perderíamos el tiempo discutiendo si el azul de Gentera era el correcto, cuando lo que realmente importaba era validar si el motor de segmentación que había ideado resolvía el caos de sus hojas de Excel.

Mi objetivo en esta sesión de **Validación con Stakeholders** no era solo obtener una aprobación, sino asegurar un "buy-in" profundo. Tenía que transformar esos bocetos rápidos en una visión de futuro tangible. Para lograrlo, decidí no presentar pantallas aisladas, sino construir una narrativa de escenarios. No les dije "este es el dashboard"; les dije: "Imagina que es jueves por la mañana, Carlos tiene que generar las listas de la próxima semana y el sistema ya hizo el 90% del trabajo por él". Esta técnica de *storytelling* operativo fue fundamental para que Lalo, como líder de proyecto, y Carlos, como administrador, pudieran proyectarse dentro de la herramienta y evaluar si la solución propuesta realmente aliviaría su carga cognitiva.

#### El arquetipo de Carlos: De la carga manual al motor asistido

Empecé la presentación desglosando el flujo diseñado para Carlos. Sabía que él era el usuario que más sufría con el proceso actual, por lo que presenté el **"Motor de Automatización de Listas con Revisión Asistida"**. Al mostrar los bocetos de la carga y procesamiento de la plantilla, pude notar un cambio en la dinámica de la reunión. La idea de que el sistema identificara automáticamente a los colaboradores elegibles para capacitación —basándose en las reglas de negocio que habíamos documentado previamente— fue el primer gran acierto. 

> El verdadero valor senior no está en automatizarlo todo, sino en diseñar los puntos de intervención humana donde el algoritmo no llega.

Posteriormente, introduje el **"Generador de Grupos Óptimos con Ajuste Visual"**. Este concepto buscaba resolver lo que Carlos describía como su "rompecabezas semanal": la segmentación de grupos por puesto y subdirección. Al ver los bocetos que permitían una visualización clara de los grupos sugeridos por el sistema, la reacción fue inmediata. Carlos se detuvo en la interfaz de segmentación y validó que esa era exactamente la pieza que le faltaba para dejar de perder horas cruzando datos manualmente. Sin embargo, no me limité a mostrar la automatización; enfaticé la importancia de que él mantuviera el control final, permitiendo ajustes manuales si la realidad operativa de una oficina superaba la lógica del sistema.

#### El 'sentimiento de alivio' y la validación de la ruta de Ana

Cuando pasamos a revisar los conceptos para Ana, la colaboradora, presenté **"Mi Ruta de Capacitación: Un Mapa Interactivo y Motivador"**. Aquí, mi enfoque fue la claridad y la autogestión. Los bocetos mostraban un progreso visual, casi como un tablero de logros, que permitía a cualquier colaborador entender en qué hito de su jornada se encontraba. Lalo destacó que este concepto no solo era funcional, sino que fomentaba una cultura de responsabilidad sobre el propio desarrollo, algo vital para la transformación digital de Gentera.

Uno de los momentos más reveladores de la sesión ocurrió al presentar la **"Central de Comunicaciones Unificada y Automatizada"**. Al describir cómo el sistema generaría automáticamente las invitaciones y, sobre todo, el archivo `.ical` para agendar la sesión en el calendario de Outlook con un solo clic, Carlos fue tajante: lo calificó literalmente como "un sueño". Ese comentario fue la confirmación de que habíamos dado en el clavo con uno de los puntos de fricción más invisibles pero costosos del proceso actual: la confirmación de asistencia y la organización del tiempo del colaborador.

*   **Validación de Notificaciones:** Se confirmó que el envío por Teams y WhatsApp es el camino correcto, aunque con cautela sobre la procedencia de los datos.
*   **Motivación Visual:** El mapa de ruta fue valorado por su capacidad de reducir la ansiedad del colaborador sobre su futuro en la empresa.
*   **Simplicidad Móvil:** Se acordó que, para Ana, la interfaz debe ser "extremadamente limpia", priorizando la consulta rápida desde sus dispositivos de campo.

#### La fricción necesaria: El dilema del control manual y la integridad de los datos

A pesar del entusiasmo general, la sesión entró en una fase de análisis forense cuando tocamos los temas de inconsistencias de datos y reglas de negocio complejas. Carlos, con la sabiduría de quien ha lidiado con errores en las plantillas durante años, levantó una preocupación crítica: el sistema no solo debe detectar que hay un error en un registro (por ejemplo, un puesto mal escrito), sino que debe agrupar esos errores y, si es posible, sugerir la corrección basándose en el histórico. 

Esta intervención cambió mi perspectiva sobre la arquitectura que estaba construyendo. Me di cuenta de que la plataforma GAC no podía ser solo un motor de salida de información; tenía que ser, primero, un sistema de limpieza y validación de datos. Discutimos extensamente sobre el **"Control Manual"**. Aunque yo proponía una automatización agresiva, Carlos defendió la necesidad de intervenir en la segmentación de grupos. Acordamos que la interfaz de "arrastrar y soltar" (*drag and drop*) que yo había bocetado era la solución ideal: el sistema propone una estructura óptima, pero el humano tiene la última palabra para mover a un colaborador de un grupo a otro por razones excepcionales.

> Validar no es solo recibir aplausos; es encontrar las grietas en tu lógica antes de que se conviertan en deuda técnica o de diseño.

Otro punto de tensión fue la transparencia en las **Business Rules**. Lalo solicitó que el sistema fuera explícito al explicar por qué un colaborador era incluido o excluido de una ruta específica. Por ejemplo, si el sistema detecta que alguien es un "Gerente Multiproducto", la interfaz debe mostrar la lógica detrás de esa asignación. Esta petición fue un recordatorio de que, en organizaciones tan grandes como Gentera, la confianza en la herramienta depende de su capacidad para ser auditable y clara en sus decisiones.

#### Capas de valor para los líderes y formadores: Más allá del MVP

Para cerrar la sesión, revisamos los conceptos para los roles de David (Líder) y Elena (Formadora). Para David, presenté el **"Dashboard de Equipo: Visión 360° de la Capacitación"**. La respuesta aquí fue de alineación estratégica total. La capacidad de hacer *drill-down* desde un semáforo general hasta el detalle de un colaborador específico fue vista como una herramienta de gestión proactiva que hoy no existe. David sugirió añadir filtros rápidos, ya que su tiempo es extremadamente limitado; una observación táctica que integré inmediatamente en mis notas para la fase de wireframing.

Por su parte, Elena validó la **"Agenda de Cursos Centralizada"**. Su principal preocupación era la integración con su flujo de trabajo actual. Me preguntó si la agenda de GAC podría sincronizarse con su Outlook personal. Esta sugerencia, junto con la petición de añadir campos de feedback cualitativo por participante al registrar la asistencia, transformó un simple listado digital en una herramienta de seguimiento de impacto humano. Estas peticiones no las vi como un aumento de alcance descontrolado, sino como capas de valor que hacían la arquitectura de información mucho más robusta y conectada con la realidad del día a día en las oficinas de Gentera.

#### Humildad estratégica: El producto como sistema de limpieza de datos

Al terminar la sesión y revisar el **Informe de Validación con Stakeholders**, mi principal aprendizaje fue un ejercicio de humildad profesional. Había llegado a la reunión con la idea de diseñar un motor de automatización elegante y fluido, pero el feedback de Carlos sobre las inconsistencias de la plantilla me devolvió a la tierra. Entendí que, para que GAC sea exitoso, debe ser primero un guardián de la calidad de la información. Si los datos de entrada están "sucios", la automatización solo acelerará el error.

Esta validación cerró la brecha entre mi visión idealista de la plataforma y la realidad operativa de Gentera. Salí de la videollamada con una lista clara de refinamientos:
1.  **Priorizar el módulo de gestión de errores** en la carga de plantillas.
2.  **Refinar la interfaz de arrastrar y soltar** para la segmentación manual.
3.  **Integrar la transparencia de reglas de negocio** en cada paso del proceso del administrador.
4.  **Asegurar la integración con iCal/Outlook** como una funcionalidad nuclear, no periférica.

Teníamos la alineación estratégica, el entusiasmo de los dueños del proceso y una hoja de ruta clara de ajustes. Estábamos listos para dejar atrás los bocetos rápidos y empezar a construir el inventario detallado de contenidos y el mapa del sitio. Habíamos validado el "qué"; ahora nos tocaba estructurar el "dónde" y el "cómo" en la arquitectura de información definitiva.

La euforia de la validación con Carlos y Lalo me dejó una certeza, pero también una gran interrogante técnica: ¿cómo íbamos a organizar tal cantidad de variables, roles y estados sin que la navegación se convirtiera en un laberinto? Sabía que el siguiente reto, la **ARQUITECTURA DE INFORMACIÓN I: INVENTARIO Y MAPA DEL SITIO**, me obligaría a enfrentarme a la jerarquía pura del sistema, donde cada etiqueta de menú y cada nivel de profundidad decidiría si la plataforma sería una herramienta de precisión o una carga administrativa más. El inventario de contenido que estaba por empezar a desglosar sería el primer examen real de la escalabilidad de nuestra propuesta.

### Parte 7: Arquitectura de Información I Inventario y Mapa del Sitio

#### El peso de la data: del boceto a la estructura viva

Al cerrar la sesión de validación con Carlos y Lalo, el eco de sus expectativas aún resonaba en la sala, pero mi mente ya estaba en otro lugar. Teníamos el "sí" estratégico, pero frente a mí se abría un abismo técnico: ¿cómo iba a organizar esa marea de variables, roles y reglas de negocio sin que la plataforma colapsara bajo su propio peso? Los bocetos que habíamos rayado eran promesas de fluidez, pero la realidad de Gentera es una red compleja de jerarquías y excepciones. Como **Product Designer**, sabía que si no construía un sistema nervioso central impecable, el producto terminaría siendo un laberinto de menús frustrantes.

Entré en la fase de **Arquitectura de Información** con una disciplina casi forense. No se trataba de dibujar cajitas en un diagrama; se trataba de garantizar la *findability* y la eficiencia operativa. Tenía que pasar de la euforia creativa de los *Crazy 8s* a la frialdad de un inventario técnico. Mi razonamiento fue simple pero riguroso: la plataforma GAC no podía permitirse "ruido". Cada segundo que Carlos perdiera buscando una función de segmentación o que Ana tardara en encontrar su próximo curso, era un fallo en mi diseño. La arquitectura debía ser invisible, pero tan robusta que guiara al usuario de la mano, incluso en los procesos más densos.

#### El "Mothership": Construyendo el inventario de contenido

Mi primer movimiento táctico fue sentarme frente a una hoja de cálculo vacía para crear lo que llamo el "Mothership": el **Inventario Detallado de Contenido y Funcionalidades**. Sabía que si omitía un solo Requerimiento Funcional (RF) en este punto, el error se propagaría como un virus hasta el código final. Desglosé la plataforma en ocho módulos fundamentales, analizando para cada elemento quién lo necesitaba, con qué frecuencia y cuál era su propósito real.

1.  **Módulo de Autenticación y Gestión de Usuarios:** Aquí definí que el acceso no sería un login genérico. Para alinearnos con la seguridad de Gentera, el usuario sería el Número de Empleado y la contraseña la Fecha de Nacimiento. Articulé los cinco roles críticos (Administrador, Colaborador, Líder, Formador y Super Admin), asegurando que cada perfil tuviera sus datos básicos —como puesto y subdirección— mapeados desde el inicio.
2.  **Módulo de Carga y Procesamiento de Datos:** Este es el corazón del administrador. Incluí no solo la carga de la "Plantilla ADN", sino un historial de cargas con reportes de inconsistencias. No bastaba con decir "error"; el sistema debía ofrecer sugerencias de corrección para los datos de nómina o fecha de contratación.
3.  **Módulo de Segmentación y Gestión de Grupos:** Aquí la data se vuelve dinámica. Inventarié las propuestas de grupos, las alertas de cupo (mínimos de 5 para presencial, 10 para online) y las reglas de compatibilidad de puestos.
4.  **Módulo de Asignación de Recursos:** Diseñé la estructura para que los Líderes Operativos vieran grupos pendientes y pudieran cruzar esa data con la agenda y especialización de los Formadores.
5.  **Módulo de Comunicaciones Automatizadas:** Definí los contenedores para las plantillas de correo, las notificaciones de WhatsApp/Teams y, crucialmente, la generación de archivos .ical para que la capacitación viviera en el calendario del colaborador.
6.  **Módulo de Trazabilidad:** Este es el valor humano del proyecto. Estructuré la "Ruta de Capacitación" en cuatro niveles (Básico, Intermedio, Avanzado y Experto) y los "Toques con Formador" en los hitos clave (niveles 1, 4, 8 y 12).
7.  **Módulo de Dashboards y Reportes:** Organicé los KPIs de asistencia y calificación, asegurando que cada vista tuviera filtros por oficina y dirección, y siempre con un botón de exportación a Excel, el lenguaje universal en Gentera.
8.  **Módulo de Configuración (Super Admin):** El centro de mando para gestionar el mapeo de puesto-ruta y las reglas de exclusión (como "IPP" o "SEAS México").

Este inventario no fue un ejercicio pasivo; fue mi blindaje contra la ambigüedad. Al listar cada campo, desde el ID de nómina hasta el estatus de "Acreditado", estaba trazando el mapa de lo que el sistema debía *saber* antes de decidir cómo lo iba a *mostrar*.

#### La columna vertebral: Jerarquía y flujo de acceso

Con el inventario en la mano, procedí a diseñar la estructura jerárquica. Mi obsesión era reducir la carga cognitiva. Decidí que la plataforma debía bifurcarse inmediatamente después del **Login (RF-GAC-024)**. No quería un portal genérico con secciones bloqueadas; quería cinco experiencias distintas que compartieran una misma base de datos.

Diseñé un sistema de navegación primaria basado en un **menú lateral persistente**. Esta decisión fue estratégica: en una herramienta de gestión, el usuario necesita saber siempre dónde está y tener acceso rápido a las funciones nucleares sin hacer clic de más. Para la navegación secundaria, opté por pestañas y submenús contextuales. Por ejemplo, dentro de "Gestión de Grupos", el Administrador puede saltar entre "Propuestas" y "Ajustes Manuales" sin perder el hilo de su tarea principal.

Utilicé **breadcrumbs** (migas de pan) como un sistema de seguridad para el usuario. En procesos profundos, como la edición de los detalles de un grupo de capacitación, el usuario debe poder regresar a la lista general con un solo clic. Esta estructura jerárquica no solo organiza el contenido; dicta el ritmo de trabajo. Para Carlos (Admin), el ritmo es de gestión masiva; para Ana (Colaboradora), es de consulta rápida y motivación.

#### El Sitemap Multi-Rol: Cinco productos en uno

La creación del **Sitemap** fue el momento en que la arquitectura cobró vida visual. Al diagramar las rutas para cada perfil, confirmé que estábamos construyendo un ecosistema, no una aplicación aislada.

*   **La vista de Carlos (Administrador):** Su mapa del sitio es el más denso. Prioricé la "Gestión de Plantillas" y las "Propuestas de Grupos (RF-GAC-005)". Su dashboard es un centro de control con acceso directo al reporte de inconsistencias de la carga ADN. Cada rama de su sitemap lleva a herramientas de alta precisión: desde el ajuste manual de participantes (arrastrar y soltar) hasta la gestión de plantillas de comunicación.
*   **La vista de Ana (Colaboradora):** Aquí apliqué una cirugía de simplificación. Su sitemap se reduce a tres pilares: "Mi Ruta", "Mis Cursos" y "Notificaciones". El corazón es el **Mapa Visual de la Ruta (RF-GAC-012)**, donde puede ver su progreso porcentual (RF-GAC-014) de un vistazo. No hay ruido administrativo, solo claridad sobre su crecimiento profesional.
*   **La vista de David (Líder):** Su estructura se centra en la supervisión. El nodo principal es "Mi Equipo", que despliega un resumen de avance (RF-GAC-017) y permite profundizar en la ruta individual de cada colaborador. Su sitemap incluye la generación de reportes por Unidad o Dirección (RF-GAC-018), optimizados para la exportación.
*   **La vista de Elena (Formadora):** Su navegación es operativa. El centro es su **Agenda de Cursos (RF-GAC-011)** y el acceso directo a las listas de asistencia para el registro en tiempo real (RF-GAC-013).

Este sitemap diferenciado me permitió validar que la información fluía correctamente entre roles. Si Carlos asignaba un formador en su rama del sitio, Elena debía verlo reflejado instantáneamente en su agenda. La arquitectura garantizaba esa sincronía.

#### El corazón del sistema: Plantilla ADN y Trazabilidad

Hubo dos áreas donde la arquitectura de información tuvo que ser especialmente quirúrgica: la gestión de la data de entrada y la visualización del progreso. 

La **Plantilla ADN** no es un simple Excel; es una radiografía semanal de la organización. Tuve que estructurar el sistema para que procesara automáticamente exclusiones complejas y manejara cambios de puesto o reingresos (regla de los 6 meses). Diseñé el inventario para que el "Reporte de Inconsistencias" fuera una sección de primer nivel para el administrador. Si el sistema detectaba que un colaborador no tenía oficina asignada, Carlos no debía buscar el error; el sistema debía presentárselo con una sugerencia de acción inmediata.

Por otro lado, la **Trazabilidad** fue el reto de diseño más humano. Definí que la "Ruta de Capacitación" no fuera una lista de cursos, sino una jerarquía de hitos. Los "Toques con Formador" (Niveles 1, 4, 8, 12) se marcaron como contenidos críticos que disparan acciones específicas, como el registro de calificación o el envío de feedback. Esta lógica de contenido asegura que el "Estatus de Avance" sea un dato vivo, calculado en tiempo real, y no una cifra estática que se actualiza manualmente.

#### Automatización y flujo: El motor de la eficiencia

Finalmente, organicé las funcionalidades de automatización para que fueran el motor invisible de la arquitectura. La **Generación Automática de Propuestas de Grupos (RF-GAC-005)** y la lógica de "Gerente Multiproducto" (RF-GAC-006) se integraron en el flujo de trabajo del administrador como pasos lógicos, no como funciones aisladas.

En el módulo de comunicaciones, estructuré la salida de datos para que el envío de convocatorias (RF-GAC-021) incluyera automáticamente el archivo .ical y las notificaciones por WhatsApp/Teams. Esta arquitectura de "salida" es lo que realmente ahorra semanas de trabajo manual. Al definir que el sistema *ya conoce* la sede, el horario y el formador, la comunicación se convierte en un subproducto natural del proceso de gestión, no en una tarea adicional.

> **Reflexión sobre el Labeling:** Durante todo este proceso, fui extremadamente cuidadoso con el lenguaje. En Gentera, las palabras tienen un peso específico. No usé "Usuarios", usé "Elegibles" o "Colaboradores". No usé "Cursos", usé "Rutas" y "Toques con Formador". Este sistema de etiquetado (*Labeling*) no es solo cosmético; es lo que hace que un Administrador de Capacitación que lleva años trabajando con Excels sienta que la plataforma habla su mismo idioma. La arquitectura de información debe ser un reflejo fiel de la cultura de la empresa para ser adoptada con éxito.

#### Próximo paso:

La estructura ya estaba en pie y el inventario de piezas era total, pero al observar el mapa del sitio, me asaltó una duda crítica: ¿cómo se sentiría realmente "moverse" entre estas secciones? Tenía las habitaciones de la casa perfectamente definidas, pero aún no había diseñado los pasillos ni las puertas. Sabía que el siguiente desafío, la **ARQUITECTURA DE INFORMACIÓN II: MODELOS DE NAVEGACIÓN Y ETIQUETADO**, me obligaría a decidir la fricción exacta de cada interacción y a pulir el vocabulario del sistema para que ni un solo usuario se sintiera extranjero en su propia herramienta de trabajo.

### Parte 8: Arquitectura de Información Ii Modelos de Navegación y Etiquetado

Al cerrar el mapa del sitio y el inventario de contenidos, me quedé observando el diagrama en mi monitor durante un buen rato. Tenía las habitaciones de la casa perfectamente definidas y el inventario de muebles completo, pero me faltaba lo más importante: los pasillos, las puertas y las señales que evitaran que Carlos o Ana se sintieran extranjeros en su propia herramienta. Una arquitectura de información sin un modelo de navegación es solo una lista de deseos estática; lo que necesitaba ahora era diseñar el movimiento y, sobre todo, el lenguaje que daría vida a esa estructura.

Mi razonamiento en este punto fue puramente estratégico. No bastaba con que las secciones existieran; tenía que decidir cuánta fricción debía tener cada tránsito y qué palabras exactas debían aparecer en los botones para que un Administrador de Capacitación en Gentera, acostumbrado a la terminología de sus Excels de toda la vida, no tuviera que pensar ni un segundo antes de hacer clic. Sabía que si fallaba aquí, la plataforma GAC sería percibida como un sistema impuesto por "la gente de Tech" y no como una herramienta nacida de su propia operativa.

#### La columna vertebral: Un Sidebar que entiende quién lo mira

Para la navegación primaria, tomé una decisión de diseño basada en la densidad operativa de la plataforma: implementé un **Menú de Navegación Lateral Persistente (Sidebar)**. En herramientas de gestión como GAC, donde el usuario pasa horas frente a tablas y dashboards, el menú superior suele robar un espacio vertical precioso. Opté por un diseño colapsable que permitiera maximizar el *real estate* de la pantalla para el contenido principal, pero que mantuviera siempre accesibles los pilares de la aplicación: Inicio, Perfil, Notificaciones y Soporte.

Sin embargo, el verdadero valor senior de este sidebar no está en su forma, sino en su inteligencia. Basándome en la lógica de **Adaptación por Rol**, diseñé un menú que muta dinámicamente según quién se autentique. No quería que Ana, una colaboradora que solo entra para ver sus próximos cursos, se viera abrumada por opciones de "Gestión de Plantillas" o "Configuración de Reglas de Negocio". 

*   **Para Carlos (Administrador):** El sidebar despliega el arsenal completo: Gestión de Datos, Gestión de Grupos, Asignación de Formadores, Comunicaciones y el módulo de Reportes. Es su centro de mando.
*   **Para Ana (Colaboradora):** El menú se simplifica drásticamente a "Mi Ruta de Capacitación" y "Mis Cursos". Su experiencia es lineal, limpia y libre de distracciones administrativas.
*   **Para David (Líder):** La prioridad cambia hacia "Mi Equipo" y "Reportes de Equipo", permitiéndole supervisar sin intervenir en la micro-gestión de los grupos.

Esta jerarquía visual no es caprichosa; es una respuesta directa a la fatiga cognitiva que detecté en las entrevistas iniciales. Al ocultar lo irrelevante, estoy blindando la atención del usuario hacia sus tareas críticas.

#### Navegación secundaria: El arte de no cambiar de contexto

Una vez resuelto el "cómo llego a la sección", me enfrenté al reto de "cómo me muevo dentro de ella". Para evitar que el usuario tuviera que ir y volver constantemente (el odiado efecto *pogo-sticking*), implementé un sistema de **Navegación Secundaria basada en Pestañas (Tabs) y Acordeones**.

En el módulo de "Gestión de Datos" de Carlos, por ejemplo, la densidad de información es brutal. Si ponía todo en una sola página, la carga cognitiva sería insoportable. Dividí la experiencia en tres pestañas críticas:
1.  **Cargar Plantilla:** El área de acción inmediata donde arrastra el archivo ADN.
2.  **Historial de Cargas:** Donde consulta el pasado y el estatus de procesos previos.
3.  **Reporte de Errores:** Una vista especializada que solo aparece si hay inconsistencias que resolver.

Este enfoque de pestañas permite una profundidad de navegación de segundo nivel sin perder el contexto de la sección principal. Complementé esto con el uso de **Acordeones** en áreas como "Reportes y Dashboards". Dado que el Administrador maneja múltiples tipos de informes (Indicadores Clave, Concentrado de Colaboradores, Reportes Personalizados), el acordeón permite agrupar estas opciones, manteniendo la interfaz limpia y expandiendo solo lo que se necesita en el momento. Es una forma de jerarquizar el acceso sin sacrificar la completitud de la herramienta.

#### Trazabilidad y orientación: El hilo de Ariadna en Gentera

Incluso con un menú lateral claro, en una plataforma con tantos niveles de datos es fácil desorientarse. Para mitigar esto, configuré un sistema de **Migas de Pan (Breadcrumbs)** que actúa como el feedback de ubicación definitivo. Utilicé una ruta técnica rigurosa: `Inicio > Gestión de Grupos > Detalle de Grupo X`. Esto no solo le dice al usuario dónde está, sino que le ofrece una salida rápida y lógica hacia el nivel superior sin tener que usar el botón de "atrás" del navegador, lo cual suele romper la experiencia en aplicaciones web complejas.

A esto sumé la **Navegación Contextual**, que es donde la eficiencia operativa realmente se dispara. No obligo al usuario a volver al menú principal para ejecutar una acción relacionada. Si Carlos está viendo la lista de "Propuestas de Grupos", el botón de "Generar Grupos" está ahí mismo, en su campo visual, no escondido en un menú genérico. De igual forma, incluí enlaces directos en los nombres de los colaboradores dentro de los dashboards; un solo clic lleva al Administrador desde una métrica de retraso directamente al expediente del colaborador. 

> **Decisión de Eficiencia:** Al diseñar los controles de búsqueda, decidí implementar tanto una **Búsqueda Global** en la cabecera para encontrar rápidamente a cualquier colaborador por su número de nómina, como **Búsquedas Específicas** dentro de las tablas. En Gentera, donde manejamos miles de registros, la capacidad de filtrar por "Oficina" o "Estatus de Avance" en tiempo real no es un lujo, es la única forma de hacer el trabajo manejable.

#### El Esquema de Etiquetado: Hablar el idioma de la casa

El sistema de navegación más perfecto del mundo fracasa si las etiquetas son ambiguas. Para el **Labeling System**, me impuse cinco principios innegociables: Claridad, Concisión, Consistencia, Familiaridad y Orientación a la Acción. No quería términos genéricos de manual de software; quería que la plataforma hablara como se habla en los pasillos de Gentera.

Realicé un ejercicio de estandarización de vocabulario que se convirtió en el "diccionario" del proyecto. Por ejemplo:
*   **Rechacé "Subir Archivo" por "Subir Plantilla ADN":** En Gentera, el Excel de carga no es un archivo cualquiera, es "la ADN". Usar ese término genera una conexión inmediata de confianza y reduce el miedo al error.
*   **Sustituí "Cursos" por "Rutas de Capacitación":** El modelo de Gentera no es una serie de eventos aislados, es un camino semestral. El término "Ruta" refleja esa visión estratégica.
*   **Estandaricé "Toques con Formador":** En lugar de "Sesiones" o "Clases", usamos el lenguaje interno para referirnos a los hitos de interacción humana.
*   **Roles con nombre y apellido:** Las etiquetas de los roles no son "User" o "Supervisor"; son "Administrador", "Colaborador", "Líder" y "Formador".

Cada botón de acción fue redactado para indicar exactamente qué va a pasar: "Asignar Formador", "Notificar Líderes", "Exportar a Excel". Evité a toda costa los "Aceptar" o "Continuar" que no explican el resultado de la interacción. Esta consistencia en el etiquetado es lo que garantiza que un Administrador en Ciudad de México y un Líder Operativo en una oficina remota entiendan exactamente lo mismo al leer la misma pantalla.

#### El balance entre rigor y flexibilidad

Al diseñar este sistema, mi mayor desafío fue equilibrar la rigidez necesaria de un software empresarial con la flexibilidad que requieren los diferentes modelos mentales de los usuarios. El Super Admin necesita ver los *logs* de errores y el *uptime* del sistema, mientras que Sofía, la colaboradora, solo necesita saber que su curso es el jueves a las 10:00 am en la Sede Norte.

Diseñar la navegación y el etiquetado fue, en esencia, un acto de traducción. Traduje procesos de negocio complejos y términos técnicos áridos a una interfaz semántica que se siente familiar. El uso de **Tooltips** para explicar términos específicos (como "Gerente Multiproducto") y el resaltado visual del **Estado Activo** en el menú lateral son esos pequeños detalles senior que aseguran que el usuario nunca tenga que preguntarse "¿y ahora qué?".

La arquitectura ya no era solo un plano; ahora tenía puertas, pasillos señalizados y un idioma común. Sin embargo, mientras terminaba de definir el sistema de etiquetas para los reportes, me di cuenta de algo: por muy lógica que fuera la navegación en mi cabeza, aún no la había puesto a prueba frente a la complejidad técnica de los datos reales de Gentera.

#### Próximo paso:

Con la estructura definida y el lenguaje del sistema ya unificado, me sentí satisfecho, pero esa calma duró poco. Al revisar el inventario de datos maestros que el Super Admin debía gestionar —sedes, hoteles, mapeos de puestos—, comprendí que la navegación era solo la mitad de la batalla. El siguiente gran reto, la **VALIDACIÓN DE AI Y ESPECIFICACIONES TÉCNICAS**, me obligaría a confrontar mi diseño con la cruda realidad de la factibilidad técnica y a asegurar que cada "puerta" que había diseñado pudiera abrirse realmente sin romper la base de datos.

### Parte 9: Validación de Ai y Especificaciones Técnicas

#### La confrontación con la realidad: Por qué la lógica no basta

Tener un sistema de etiquetas coherente y un mapa del sitio bien estructurado en el papel me daba una sensación de seguridad que, por experiencia, sabía que era peligrosa. En este punto del proceso, la arquitectura de información era una construcción teórica impecable, pero seguía siendo una hipótesis. Como diseñador, entiendo que la AI es invisible cuando funciona, pero se vuelve catastrófica y ruidosa cuando falla. No podía permitirme pasar a la fase de wireframes y diseño de interfaz sin antes someter mi propuesta a un estrés de usabilidad real. Necesitaba saber si las "puertas" que había diseñado en el mapa del sitio eran realmente accesibles para Carlos, Ana y David, o si había construido un laberinto lógico que solo yo sabía navegar.

La transición hacia la validación no fue un paso burocrático; fue un acto de rigor técnico. Decidí que antes de ponerle "piel" (UI) al sistema, debía asegurar que la "columna vertebral" (AI) fuera capaz de soportar el peso de la operación diaria de Gentera. Mi razonamiento fue claro: cada clic erróneo de Carlos al intentar segmentar un grupo o cada segundo que Ana perdiera buscando su ruta de capacitación representaba una falla en mi diseño. Por ello, diseñé una batería de pruebas empíricas para confrontar mis modelos mentales con los de los usuarios finales, buscando no solo confirmar mis aciertos, sino, sobre todo, exponer mis puntos ciegos.

#### El veredicto de los datos: Card Sorting y Tree Testing

Para validar la organización del contenido, ejecuté una sesión de **Card Sorting Abierto**. Seleccioné elementos críticos del inventario, desde términos operativos como "Plantilla ADN" y "Concentrado Histórico" hasta funcionalidades como "Toques con Formador" y "Reportes de equipo". Observar cómo los usuarios agrupaban estas tarjetas fue revelador. Los administradores, con Carlos a la cabeza, confirmaron mi intuición al agrupar consistentemente todo lo relacionado con la limpieza y carga de datos bajo la categoría de "Gestión de Datos". Sin embargo, el Card Sorting también me dio la primera señal de alerta: hubo una ambigüedad interesante en la "Asignación de Formadores". Mientras los administradores la veían como una tarea de gestión pura, los formadores como Elena la asociaban más a su agenda personal. Esta fricción me obligó a repensar la visibilidad de este flujo para diferentes roles.

Posteriormente, sometí la estructura a un **Tree Testing**, una prueba de navegabilidad pura, sin distracciones visuales. Los resultados fueron contundentes y me proporcionaron las métricas de confianza que necesitaba:

*   **Carlos (Administrador):** Logró un **95% de éxito** localizando la "Carga de Plantilla semanal" navegando directamente a través de Gestión de Datos. Para la tarea de "Ver los grupos propuestos", alcanzó un **90%**, validando que la terminología de "Propuestas de Grupos" resonaba con su modelo mental.
*   **Ana (Colaboradora):** Obtuvo un impresionante **98% de éxito** al encontrar "Mi Ruta de Capacitación". Esto me confirmó que el mapa visual que había conceptualizado era el punto de entrada lógico y deseado para ella.
*   **David (Líder):** Alcanzó un **93% de éxito** al buscar el avance de su equipo, validando la sección de "Mi Equipo" como un contenedor eficaz.
*   **Elena (Formadora):** Registró un **89% de éxito** en la tarea de registrar asistencia, lo que, aunque positivo, me indicó que había un pequeño margen de mejora en la profundidad de los submenús de "Mis Grupos".

> **Insight de Validación:** Los desvíos menores fueron los hallazgos más valiosos. Descubrí que ante tareas complejas, como la gestión de grupos con problemas de cupo, algunos usuarios buscaban "Alertas" dentro de la sección de Reportes antes que en la gestión de grupos. Este patrón de comportamiento me indicó que la navegación jerárquica lineal no sería suficiente para casos de excepción.

#### Refinando la estructura: De la navegación lineal a la contextual

Con los datos del Tree Testing sobre la mesa, procedí a realizar un ajuste quirúrgico en la arquitectura. No se trataba de cambiar las categorías principales —que habían demostrado ser sólidas—, sino de añadir "atajos" inteligentes. Para resolver la confusión detectada con las alertas de cupo, decidí implementar **enlaces contextuales** directos desde el Dashboard. Si el sistema detectaba una inconsistencia en la carga de la Plantilla ADN, Carlos no tendría que navegar por tres niveles de menú; el Dashboard presentaría una tarjeta de acción inmediata que lo llevaría directamente al punto de fricción.

Este refinamiento también alcanzó al sistema de notificaciones. Los usuarios esperaban encontrar la configuración de sus alertas tanto en su perfil como cerca de la bandeja de entrada. Maniobré para integrar un acceso rápido a las preferencias desde el ícono de notificaciones global, eliminando clics innecesarios y reduciendo la carga cognitiva que había identificado en las rutas indirectas durante las pruebas. Mi objetivo era que la plataforma GAC no solo fuera lógica, sino que se sintiera "viva" y consciente del contexto del usuario, anticipándose a sus necesidades según el estado de los datos.

#### El manifiesto técnico: Especificaciones que blindan el producto

Una vez validada y refinada la estructura, me dediqué a formalizar el **Documento de Especificaciones de Arquitectura de Información**. Este artefacto no es solo un mapa; es el contrato técnico que asegura que el equipo de desarrollo y los stakeholders estemos alineados. En él, definí la filosofía de la AI de GAC bajo cuatro pilares innegociables:

1.  **Centrada en el Usuario:** Cada ruta está mapeada según el permiso y la necesidad del rol.
2.  **Claridad y Simplicidad:** Etiquetado conciso para minimizar la curva de aprendizaje en una organización con alta rotación.
3.  **Eficiencia en la Tarea:** Optimización de los flujos de alta frecuencia, como la segmentación de grupos para Carlos.
4.  **Escalabilidad:** Una estructura modular preparada para crecer sin romperse.

Detallé la estructura jerárquica desde el **punto de entrada (Login)**, que diseñé para ser extremadamente simple: Número de Empleado y Fecha de Nacimiento, eliminando la fricción de recordar contraseñas complejas en un entorno operativo. Desde ahí, articulé los Dashboards personalizados. Para Carlos, la arquitectura se despliega en una tríada de poder: **Gestión de Datos**, **Gestión de Grupos** y **Asignación de Formadores**. Para Elena, la estructura se simplifica en su **Agenda** y el **Registro de Asistencia**, asegurando que su interacción con la plataforma sea rápida y no interfiera con su labor de capacitación en sala.

#### Arquitectura a prueba de futuro: El reto de los niveles de capacitación

Uno de los desafíos más complejos que enfrenté al redactar las especificaciones fue la inminente transición del modelo de capacitación de Gentera, que planeaba pasar de 12 a 6 niveles. Un diseño rígido habría quedado obsoleto en meses. Para blindar el sistema, diseñé la sección de **"Mi Ruta de Capacitación"** con una lógica modular. 

En lugar de crear una navegación estática basada en el número actual de niveles, propuse una arquitectura que consume las reglas de negocio desde un módulo de **Configuración del Sistema** accesible solo para el Super Admin. Esto significa que cuando Gentera decida hacer el cambio, el sistema no requerirá una reingeniería de la interfaz ni de la navegación; simplemente se ajustarán los parámetros en el back-end y la arquitectura visual se adaptará automáticamente. Este enfoque de "diseño agnóstico al dato" es lo que separa un proyecto funcional de uno estratégico que aporta valor a largo plazo a la organización.

#### La entrega al equipo técnico: Un sistema de navegación sin ambigüedades

Finalmente, consolidé los modelos de navegación que servirían de guía para el desarrollo frontend. Elegí un **Menú Lateral Persistente (Sidebar)** como navegación primaria. Mi razonamiento fue técnico: un sidebar colapsable permite manejar jerarquías profundas sin sacrificar espacio en pantalla, algo vital para los dashboards densos en datos de Carlos. Para la navegación secundaria, opté por el uso de **Tabs (Pestañas)**, permitiendo al usuario alternar entre vistas relacionadas, como "Cargar Plantilla" e "Historial de Cargas", sin perder el contexto de la sección.

Para reforzar la ubicación espacial del usuario, integré **Breadcrumbs (Migas de Pan)** en la parte superior de cada pantalla. En un sistema con tantos niveles de detalle, es crucial que David, al revisar el expediente de un colaborador, sepa exactamente cómo regresar al resumen de su unidad con un solo clic. Además, especifiqué una **Búsqueda Global** prominente en la cabecera, capaz de filtrar por número de nómina o nombre, una funcionalidad crítica dada la magnitud de la base de datos de colaboradores de Gentera.

Al cerrar este documento de especificaciones, sentí que la plataforma GAC ya tenía una base sólida. Habíamos pasado de ideas abstractas y bocetos rápidos a una estructura validada por datos, documentada técnicamente y preparada para la escala. La arquitectura ya no era un dibujo; era el plano maestro de una maquinaria de alta precisión lista para ser construida.

#### Próximo paso:

Con la columna vertebral de la plataforma ya validada y las especificaciones técnicas blindadas, me enfrenté a una realidad inevitable: la estructura es sólida, pero ahora debe ponerse en movimiento. Al revisar el mapa del sitio, me di cuenta de que el verdadero reto no era dónde estaban los botones, sino qué ocurría en los espacios entre ellos cuando los datos empezaran a fluir. El siguiente paso, el **DISEÑO DE FLUJOS DE USUARIO Y PANTALLAS IDENTIFICADAS**, me obligaría a coreografiar cada interacción, asegurando que la automatización que prometimos a Carlos no se rompiera ante la primera excepción de datos en la Plantilla ADN.

### Parte 10: Diseño de Flujos de Usuario y Pantallas Identificadas

#### El momento en que el mapa se convierte en trayecto

Al terminar la Arquitectura de Información, sentí esa satisfacción técnica de tener los planos listos, pero también una punzada de realismo: un sitemap es una foto fija y el trabajo de Carlos, nuestro administrador de capacitación, es puro movimiento. Tenía frente a mí la estructura de GAC, pero ahora debía resolver el "cómo". No bastaba con saber que existía una sección de "Gestión de Datos"; necesitaba coreografiar qué pasaría exactamente cuando Carlos, bajo la presión de un lunes por la mañana, arrastrara la **Plantilla ADN** al navegador. 

Entendí que el verdadero valor de este proyecto no estaba en la estética, sino en la fluidez de la interacción. Si un flujo se rompía o era ambiguo, la automatización que prometimos se convertiría en un estorbo. Por eso, me alejé de los diagramas estáticos y me sumergí en el **Diseño de Flujos de Usuario (User Flows)**. Mi objetivo era trazar rutas que no solo contemplaran el "camino feliz", sino que blindaran la experiencia ante los errores inevitables de los datos. En este oficio, la calidad se demuestra en cómo manejas el caos, no solo en cómo diseñas la perfección.

#### La anatomía del movimiento: Preparación y rigor

Antes de trazar la primera flecha en FigJam, realicé una pausa táctica para alinear mis insumos. No podía diseñar flujos en el vacío. Tenía en mi monitor las **User Personas** (Carlos, Ana, David y Elena) y, sobre todo, el documento de **Reglas de Negocio**. Sabía que la lógica de segmentación de Gentera era compleja —puestos, subdirecciones, criterios de antigüedad— y cualquier flujo debía respetar esas restricciones técnicas (RF-GAC).

Elegí trabajar con una notación estándar pero enriquecida: óvalos para los puntos de entrada y salida, rectángulos para las pantallas y rombos para los momentos de decisión crítica. Pero añadí un nivel de detalle senior: **anotaciones de lógica de sistema**. No solo quería saber qué hacía el usuario, sino qué debía estar procesando el servidor en ese microsegundo para que la pantalla siguiente tuviera sentido. Esta actividad fue el puente necesario entre el "qué" de la AI y el "cómo" de los futuros wireframes.

#### El flujo de Carlos: Gestionando el corazón de la plataforma

El primer gran reto fue el flujo de **Carga y Procesamiento de la Plantilla Semanal**. Para Carlos, este es el hito que define su semana. Diseñé un punto de entrada directo desde el Dashboard de Administrador, mediante una alerta de "Plantilla Pendiente" que eliminaba cualquier duda sobre el siguiente paso.

1.  **La entrada y el procesamiento:** Al navegar a "Gestión de Datos", Carlos se encuentra con una zona de *drag & drop*. Al soltar el archivo, el sistema no solo lo recibe; inicia un proceso de validación en tiempo real (RF-GAC-001). Diseñé un estado de "Procesando Plantilla..." para gestionar la espera y evitar que el usuario intentara realizar otra acción.
2.  **El punto de decisión crítico:** Aquí es donde el flujo se vuelve interesante. Tras el procesamiento, el sistema llega a un rombo de decisión: "¿Hay inconsistencias?". 
    *   Si el camino es limpio (0 inconsistencias), el flujo es directo hacia la actualización de la base de datos (RF-GAC-025). 
    *   Si hay errores (el "unhappy path"), el flujo se desvía a una pantalla específica de **Reporte Detallado de Errores**. 
3.  **La recuperación del error:** No permití que el flujo terminara en un callejón sin salida. Diseñé una ruta de retorno donde Carlos puede corregir los datos manualmente en el sistema o re-subir el archivo tras ajustarlo en Excel. Solo cuando Carlos confirma la revisión de inconsistencias, el flujo le permite avanzar hacia la segmentación. 

Este diseño no fue accidental; fue una maniobra para reducir la ansiedad del usuario ante datos corruptos, asegurando que el sistema actúe como un filtro inteligente y no como una barrera.

#### Segmentación automática: El baile entre el algoritmo y el criterio humano

Una vez procesados los datos, el siguiente flujo crítico era la **Segmentación y Ajuste de Grupos**. Aquí, el reto era equilibrar la automatización con el control manual. El sistema genera propuestas automáticas basadas en la lógica de negocio (RF-GAC-005), pero Carlos debe tener la última palabra.

Diseñé una pantalla de **Propuestas de Grupos** que actúa como el centro de mando. El flujo contempla un paso de revisión donde Carlos visualiza tarjetas de grupos. Introduje un rombo de decisión basado en las **Alertas de Cupo** (RF-GAC-008). Si un grupo excede el máximo o no llega al mínimo, la tarjeta se resalta visualmente, obligando al usuario a entrar en un sub-flujo de "Detalle y Ajuste".

En esta vista de detalle, articulé herramientas de manipulación directa: arrastrar y soltar participantes entre grupos o fusionar secciones. Lo más importante es que el sistema recalcula la validez del grupo con cada movimiento. El flujo solo se considera "exitoso" cuando todos los grupos están validados y Carlos hace clic en finalizar. Esta estructura garantiza que, aunque el 90% del trabajo sea automático, el 10% del criterio humano de Carlos esté blindado por el sistema.

#### La voz del colaborador: El flujo de Ana y la trazabilidad

Para Ana, la colaboradora, el flujo es radicalmente distinto. Su necesidad no es de gestión, sino de claridad y motivación. Diseñé un flujo de **Consulta de Ruta de Capacitación** que inicia desde su Dashboard personalizado.

El punto de entrada es el **Mapa Visual de Mi Ruta** (RF-GAC-012). Al hacer clic en un hito, Ana no solo ve información; entra en un flujo de profundización. Si el curso es futuro, el flujo le ofrece la descarga del archivo `.ical` para su calendario de Outlook. Si es pasado, la lleva al historial de calificaciones. 

Este flujo es lineal y sin fricciones, diseñado para ser consumido en segundos. La tensión aquí estaba en asegurar que Ana siempre supiera dónde está y qué le falta. Por eso, cada pantalla de este flujo incluye un indicador de progreso persistente (RF-GAC-014), eliminando la carga cognitiva de tener que recordar su estatus actual.

#### Coordinación y logística: Los flujos de David y Elena

No podía olvidar a los otros actores del ecosistema. Para David (Líder), diseñé un flujo de **Visualización de Avance de Equipo**. Su punto de entrada es una tabla resumen con semáforos de riesgo. El flujo le permite "bajar" hasta el detalle de un colaborador específico (una vista similar a la de Ana pero con permisos de lectura) y "subir" de nuevo para generar un reporte en Excel. 

Por otro lado, el flujo de Elena (Formadora) se centra en la ejecución: **Acceder a Agenda y Registrar Asistencia**. Es un flujo de alta frecuencia y baja complejidad. Elena entra desde su calendario, visualiza el grupo asignado y abre la interfaz de registro de asistencia (RF-GAC-013). Diseñé este flujo para ser operable incluso desde dispositivos móviles, sabiendo que Elena podría estar en un aula presencial mientras marca las casillas de "Presente/Ausente".

#### El Inventario de Pantallas: Traduciendo el movimiento en interfaces

Con los flujos validados, procedí a realizar el **Inventario de Pantallas Identificadas**. Este no fue un simple listado; fue un ejercicio de organización modular que serviría de base para los wireframes. Identifiqué y categoricé cada vista única necesaria para cubrir los 14 módulos de la plataforma.

*   **Módulos de Gestión (Administrador):** Desde la carga de plantillas hasta el historial de envíos y la gestión de grupos. Identifiqué vistas críticas como el "Reporte de Errores de Envío", una pantalla que a menudo se olvida pero que es vital para la trazabilidad de las comunicaciones (RF-GAC-021).
*   **Módulos de Usuario (Colaborador y Líder):** Dashboards personalizados, mapas visuales de ruta y previsualizaciones de reportes.
*   **Módulos de Operación (Formador):** Calendarios de cursos y la interfaz de registro de asistencia.
*   **Módulos de Sistema (Super Admin):** Pantallas de gestión de usuarios, logs de actividad y configuración de integraciones (Outlook, Teams, WhatsApp).

Este inventario de 4 páginas se convirtió en mi lista de tareas para la siguiente fase. Me aseguré de que cada pantalla tuviera un nombre funcional y una razón de ser vinculada directamente a un paso de los flujos de usuario.

> **Insight de Diseño:** Un error común es diseñar pantallas y luego intentar conectarlas. Mi enfoque fue el opuesto: diseñé los flujos y dejé que la necesidad del usuario dictara qué pantallas debían existir. Si una pantalla no aparecía en ningún flujo, simplemente no se diseñaba.

#### Blindando la experiencia: El valor de los "Unhappy Paths"

Al finalizar esta actividad, lo que más me satisfizo no fueron los "caminos felices", sino cómo resolvimos los momentos de quiebre. En un sistema como GAC, donde dependemos de la calidad de un Excel externo (la Plantilla ADN), el diseño de los flujos de error es lo que define la madurez del producto. 

Mapear qué ocurre cuando falla una carga de datos, cuando no hay formadores disponibles o cuando un envío de WhatsApp rebota, es lo que permite que Carlos confíe en la herramienta. Al cerrar estos diagramas, sentí que ya no solo teníamos una estructura lógica, sino un sistema resiliente.

#### Próximo paso:

Con los flujos de usuario trazados y el inventario de pantallas definido, la plataforma GAC ya tenía alma y movimiento. Pero estos diagramas seguían siendo abstractos, cajas y flechas que describían la intención. El siguiente reto era darles forma física y jerarquía visual sin distraernos con el color o la marca. El paso a los **WIREFRAMES DE MEDIA FIDELIDAD** me obligaría a aterrizar cada uno de estos pasos en interfaces tangibles, definiendo dónde iría cada botón, cada tabla y cada alerta para asegurar que la eficiencia que prometimos en los flujos se tradujera en una usabilidad real en la pantalla.

### Parte 11: Wireframing de Media Fidelidad y Wireflows

Los diagramas de flujo que habíamos consolidado eran impecables desde la lógica, pero seguían siendo abstracciones; cajas y flechas que prometían eficiencia pero que aún no tenían que enfrentarse a la realidad del espacio en pantalla. Al abrir Figma para iniciar la **Actividad 4: Creación de Wireframes**, sentí esa presión técnica de quien sabe que está a punto de construir el esqueleto de algo que miles de personas usarán a diario. No buscaba estética —el color en esta etapa es una distracción peligrosa—, buscaba jerarquía. Mi objetivo era aterrizar esas "cajas" en interfaces tangibles que aseguraran que la automatización que prometimos a Gentera no se rompiera por una mala disposición de un botón o una tabla saturada de datos.

#### De la lógica invisible al esqueleto tangible

La transición de los flujos de usuario a los wireframes de media fidelidad fue un ejercicio de traducción pura. Cada nodo de decisión en mis diagramas debía convertirse en un estado de pantalla o en un componente interactivo. Apliqué un enfoque de **Layout First**: antes de dibujar un solo campo de texto, definí las zonas de navegación y trabajo. Sabía que para un sistema complejo como GAC, la consistencia era mi mejor aliada para reducir la curva de aprendizaje.

Decidí estructurar la interfaz basándome en un menú lateral persistente y un área central de trabajo despejada. Esta decisión no fue estética, sino funcional: los usuarios como Carlos o Elena necesitan saltar entre módulos (Gestión de Datos, Agenda, Reportes) sin perder el contexto de dónde están. Utilicé un **Grid System** riguroso para organizar el contenido, asegurando que, independientemente del rol, la información crítica siempre ocupara el mismo cuadrante visual. En esta etapa, la escala de grises y el contraste fueron mis únicas herramientas para establecer la jerarquía; si una funcionalidad no se entendía en blanco y negro, no estaba bien diseñada.

#### Blindando la operación de Carlos: El diseño del control

Para Carlos, el "Coordinador Detallista", el reto era transformar su estrés en fluidez. Al diseñar su **Dashboard de Administrador**, rechacé la idea de mostrarle todo de golpe. En su lugar, articulé el tablero mediante tarjetas de resumen que actúan como disparadores de acción: "Plantilla Pendiente de Cargar", "Grupos por Revisar", "Envíos Pendientes". Si no hay nada urgente, la interfaz debe estar en silencio.

Uno de los puntos más críticos fue la pantalla de **Gestión de Datos - Cargar Plantilla**. Recordando que Carlos pasaba hasta 32 horas semanales cruzando Excels, diseñé una interfaz de carga minimalista con un área de *drag and drop* prominente. 

> **Decisión de Diseño:** Opté por un área de interacción sobredimensionada para el archivo Excel. Mi razonamiento fue psicológico: quería que el acto de cargar la plantilla se sintiera como el inicio de un proceso asistido, no como una tarea administrativa más. Al soltar el archivo, el sistema no solo lo recibe; inicia un indicador de progreso que comunica visualmente que el "trabajo pesado" de limpieza y cruce de datos (RN-ID-001 a RN-ID-007) ya no es responsabilidad de Carlos, sino de la plataforma.

Tras el procesamiento, la interfaz no lo lanza a una tabla infinita. Diseñé una vista de **Resumen Post-Procesamiento** que resalta exclusivamente las inconsistencias. Si el sistema detecta 5 errores entre 500 registros, Carlos solo ve esos 5. Esta maniobra senior de "diseño por excepción" es lo que realmente permite alcanzar el objetivo de reducir el tiempo operativo en un 80%.

#### El mapa de Ana: Transformando la obligación en ruta

Cuando pasé a diseñar la vista para Ana, la "Colaboradora Entusiasta", el tono cambió por completo. Para ella, la capacitación no debe sentirse como una lista de tareas pendientes, sino como un camino de crecimiento. Aquí es donde la Arquitectura de Información se volvió visual a través del **"Mapa Visual de Mi Ruta de Capacitación"**.

En lugar de una tabla estática de cursos, tracé una línea de tiempo con nodos interactivos que representan los niveles (Básico, Intermedio, Avanzado, Experto). 
*   **Nodos Completados:** Marcados con un contraste alto para generar sensación de logro.
*   **Nodos en Progreso:** Resaltados para indicar el foco actual.
*   **Nodos Pendientes:** En un gris suave, mostrando el camino que falta por recorrer.

Esta estructura no solo organiza la información; motiva. Al hacer clic en un nodo, diseñé una vista limpia de **Detalle de Curso** donde consolidé todo lo que antes estaba disperso en correos y chats: fecha, sede, temario y el botón crítico de "Añadir a Calendario". La simplicidad aquí es un valor humano: Ana ya tiene suficiente carga de trabajo en la sucursal como para perder tiempo buscando dónde es su próximo curso.

#### Anotaciones y reglas: El lenguaje oculto del wireframe

Un wireframe de media fidelidad sin anotaciones es solo un dibujo; con ellas, es un documento técnico de ingeniería. Me aseguré de blindar cada interacción con **Anotaciones Detalladas** que eliminaran cualquier ambigüedad para el equipo de desarrollo. 

No me limité a decir "aquí va un botón". Especificé comportamientos dinámicos y reglas de negocio complejas:
*   **Validaciones Quirúrgicas:** El campo "Número de Empleado" solo acepta caracteres numéricos; la "Fecha de Nacimiento" tiene una máscara de entrada obligatoria (DD/MM/AAAA) para prevenir errores de autenticación desde el inicio.
*   **Lógica de Visibilidad:** Definí que el botón "Acceder al Curso" solo es visible si el curso es virtual y tiene un enlace activo, evitando la frustración del usuario ante clics muertos.
*   **Contexto Inteligente:** Incluí *tooltips* específicos para Carlos. Por ejemplo, al pasar el cursor sobre un participante en la gestión de grupos, el sistema explica mediante una nota por qué fue marcado como "Gerente Multiproducto" (RN-SEG-004), exponiendo la lógica del algoritmo de segmentación.

Estas anotaciones son el puente que permite que el diseño sobreviva a la implementación. Cada *spinner* de carga y cada mensaje de error fue documentado para asegurar que la plataforma GAC sea resiliente ante fallos de conexión o datos corruptos en la plantilla original.

#### Wireflows: Validando la continuidad de la experiencia

Una vez que tuve las pantallas individuales, necesité verlas en movimiento. Construí los **Wireflows** para conectar los esqueletos y validar que no existieran callejones sin salida. El flujo de "Cargar y Procesar Plantilla" fue el más complejo de articular. 

Traqué la secuencia completa:
1.  **Login:** Entrada limpia con credenciales de Gentera.
2.  **Dashboard:** Alerta visual de "Plantilla Pendiente".
3.  **Carga:** Interacción de *drag and drop*.
4.  **Procesamiento:** Estado de espera activo con métricas en tiempo real.
5.  **Bifurcación Lógica:** Si hay errores, el flujo se desvía al "Reporte Detallado de Inconsistencias"; si no, avanza directamente a la "Propuesta de Grupos".

Al mapear el flujo de **Detalle y Ajuste de Grupo**, incorporé la interacción de arrastrar y soltar participantes. Mientras Carlos mueve a una persona de un grupo a otro, el sistema lanza alertas inteligentes de cupo basadas en las reglas RN-SEG-002 (mínimos) y RN-SEG-003 (máximos). Esta validación visual en tiempo real es lo que transforma una tarea de "rompecabezas" manual en una revisión asistida y segura.

#### La disciplina de la media fidelidad

Mantenerse en media fidelidad durante todo este proceso fue una decisión estratégica difícil de defender ante stakeholders que quieren ver "el producto final" ya. Sin embargo, fue lo que salvó el proyecto de discusiones estéticas irrelevantes en este punto. Al presentar estos esquemas a Lalo y Carlos, la conversación se centró exclusivamente en la funcionalidad: "¿Es esta la columna que necesito ver primero?", "¿Qué pasa si este dato viene vacío?", "¿Cómo imprimo este reporte?".

Logramos iterar sobre la estructura de las tablas de David (el Líder) y la agenda de Elena (la Formadora) en cuestión de horas, algo que en alta fidelidad habría tomado días. Al cerrar esta actividad, teníamos más que pantallas; teníamos un plano de construcción validado. Sabíamos exactamente dónde iría cada bit de información y cómo reaccionaría el sistema ante cada clic.

#### Próximo paso:

Con el esqueleto de la plataforma GAC totalmente definido y las reglas de negocio integradas en cada interacción, el sistema ya era funcionalmente sólido. Pero un wireframe, por muy detallado que sea, no permite sentir la fluidez de la transición ni la confianza que inspira una interfaz pulida con la identidad de Gentera. El siguiente desafío fue la transición al **PROTOTIPADO INTERACTIVO Y VALIDACIÓN FINAL DE DISEÑO**, donde el reto no sería solo añadir color y tipografía, sino convertir este esqueleto en una experiencia de alta fidelidad que Carlos y Ana pudieran navegar realmente, enfrentándonos por primera vez a la prueba de fuego: ¿se siente tan eficiente como prometen los planos?

### Parte 12: Prototipado Interactivo y Validación Final de Diseño

#### El riesgo de las imágenes mudas

Al terminar los wireframes de media fidelidad, me encontré con un conjunto de planos estructuralmente perfectos, pero "mudos". Teníamos la arquitectura, sabíamos dónde iría cada botón y cómo se jerarquizaba la información, pero en un proyecto como GAC, donde la promesa central es la **automatización de procesos críticos**, la estructura no es suficiente. Un administrador como Carlos no necesita ver un dibujo de una tabla; necesita sentir que el sistema realmente procesa mil filas de Excel y le devuelve una propuesta coherente. Mi razonamiento fue claro: si no transformábamos esos esquemas estáticos en una experiencia cinética, corríamos el riesgo de que los stakeholders validaran la estética sin entender la carga cognitiva del flujo real.

La transición al **prototipado interactivo** fue mi maniobra para reducir la incertidumbre estratégica. No se trataba solo de enlazar pantallas, sino de construir un simulacro lo suficientemente robusto como para que los usuarios pudieran "romperlo" o, mejor aún, para que nosotros encontráramos los callejones sin salida que el papel siempre oculta. Decidí utilizar **Figma** como centro de operaciones, no solo por su capacidad técnica para crear *hotspots* y transiciones, sino porque me permitía una colaboración en tiempo real con Lalo y Carlos que un prototipo estático jamás facilitaría.

#### La construcción del simulacro: Cuatro mundos, una plataforma

Para que la validación fuera efectiva, no podía prototipar cada rincón de la plataforma; eso habría sido un desperdicio de recursos. Apliqué un criterio de **priorización basado en el riesgo**: seleccioné los flujos donde la lógica de negocio era más densa o donde la fricción del usuario podía descarrilar la adopción del sistema.

1.  **El flujo de Carlos (El Coordinador Detallista):** Este era el núcleo del proyecto. Construí un flujo que comenzaba con la carga de la plantilla. Configuré zonas interactivas para simular el "Arrastrar y Soltar" y, lo más importante, diseñé estados intermedios para mostrar el indicador de progreso. Quería que Carlos experimentara la espera del procesamiento y la transición inmediata al "Resumen de Procesamiento". En este punto, el prototipo permitía navegar al reporte de inconsistencias, simulando cómo el sistema detecta errores de datos antes de pasar a la gestión de grupos. Mi objetivo era que él sintiera el control sobre la automatización, no que fuera una "caja negra" inescrutable.
2.  **La experiencia de Ana (La Colaboradora):** Aquí el reto era motivacional. Me enfoqué en el "Mapa Visual de Mi Ruta". Configuré los nodos para que, al hacer clic, desplegaran detalles específicos del curso y permitieran la descarga simulada de archivos **.ical**. No quería que Ana solo viera su progreso; quería que sintiera la facilidad de agendar su capacitación en un solo paso.
3.  **La visión de David (El Líder):** Para David, el valor estaba en el *drill-down*. Prototipé el dashboard de equipo con semáforos de estatus, permitiéndole hacer clic en un colaborador específico para ver su detalle individual. Esta capacidad de pasar de lo macro a lo micro era lo que validaría si la herramienta realmente le servía para tomar decisiones de apoyo a su equipo.
4.  **La operatividad de Elena (La Formadora):** Elena necesitaba agilidad. Construí su agenda centralizada y, crucialmente, el flujo de registro de asistencia. El prototipo permitía marcar "Presente/Ausente" y añadir notas por participante, simulando la realidad de una sesión de capacitación donde el tiempo administrativo debe ser mínimo.

> **Insight Senior:** Un prototipo de media fidelidad exitoso debe ser lo suficientemente funcional para que el usuario olvide que no hay un backend detrás, pero lo suficientemente austero visualmente para que no se distraiga discutiendo el tono de azul de un botón.

#### Micro-interacciones: Donde vive la confianza del usuario

Durante la construcción, puse especial atención en las micro-interacciones que definen la percepción de eficiencia. En el flujo de Carlos, por ejemplo, la simulación de la "Propuesta de Grupos" no fue solo una pantalla estática. Implementé una lógica de estados donde él podía ver las tarjetas de grupos generadas automáticamente y simular el ajuste manual. 

Utilicé las anotaciones de los wireframes para asegurar que cada interacción tuviera un propósito técnico:
*   **Feedback visual inmediato:** Diseñé estados de *hover* y seleccionados para que Carlos supiera siempre qué elemento estaba manipulando en las tablas densas de participantes.
*   **Gestión de la incertidumbre:** En el reporte de errores, incluí agrupaciones por tipo de inconsistencia. No quería que el prototipo solo mostrara "hay un error", sino que guiara al usuario hacia la solución, simulando campos de "Sugerencia de Corrección".
*   **Robustez administrativa:** Para Elena, el registro de asistencia incluía validaciones visuales que aseguraban que ningún participante quedara sin estatus antes de "Guardar Asistencia".

Esta meticulosidad en el diseño de interacción buscaba validar si realmente estábamos reduciendo la carga operativa. Si el prototipo se sentía pesado o confuso en media fidelidad, en producción sería un desastre.

#### La prueba de fuego: Sesiones de validación en Google Meets

Con los prototipos listos, organicé sesiones de demostración guiada con Lalo, Carlos y los SMEs de Gentera. No fueron presentaciones pasivas; fueron sesiones de "manos en el teclado" (virtuales). Les pedí que realizaran tareas específicas: "Carlos, intenta procesar esta lista y corregir a los colaboradores que el sistema marcó con error".

El resultado fue revelador. Noté un **entusiasmo general** inmediato al ver la tangibilidad de los flujos. Carlos, en particular, expresó un alivio visible al interactuar con la segmentación automática. Ver cómo el sistema proponía grupos en segundos, algo que a él le tomaba horas de trabajo manual en Excel, validó instantáneamente el valor de la arquitectura que habíamos trazado.

Sin embargo, la validación también sacó a la luz zonas de fricción que no habíamos previsto:
*   **El manejo de errores masivos:** Carlos cuestionó qué pasaría si los errores fueran tantos que no valiera la pena corregirlos uno a uno en la interfaz. Esta pregunta me llevó a diseñar un flujo de "Re-subida de Plantilla" con un historial de cargas claro, permitiéndole abortar un proceso fallido y empezar de nuevo con datos limpios.
*   **La necesidad de contextos comparativos:** David, al ver su dashboard, pidió no solo ver a su equipo, sino tener un *benchmark*. Quería saber si el 80% de avance de su oficina era bueno o malo comparado con el promedio de la dirección. Fue una petición de diseño que no estaba en el brief original, pero que era vital para su rol estratégico.
*   **Flexibilidad en la segmentación:** Surgió la necesidad de "ignorar" ciertos errores menores para no detener todo el flujo de procesamiento, una sutileza de la operación diaria que solo surge cuando el usuario tiene el prototipo frente a sus ojos.

#### El pulido final: Blindando la Arquitectura

Tras las sesiones de validación, no pasé directamente a la siguiente fase. Me tomé el tiempo de **articular el feedback** y realizar ajustes críticos en el prototipo de media fidelidad. Esta es la etapa donde el diseño se vuelve verdaderamente resiliente.

Realicé las siguientes revisiones basadas en la evidencia recopilada:
*   **Transparencia en las reglas de negocio:** Añadí tooltips y iconos explicativos en las tablas de participantes. Si el sistema etiquetaba a alguien como "Gerente Multiproducto", el usuario ahora podía pasar el cursor y entender exactamente qué regla de negocio (ej. "Asesor CIE en oficina") había disparado esa etiqueta. La automatización dejó de ser una caja negra.
*   **Control preventivo:** En el flujo de comunicaciones masivas, incluí contadores de destinatarios antes de confirmar el envío. "Vas a enviar 45 convocatorias". Este pequeño detalle eliminó la ansiedad de Carlos de cometer un error masivo irreversible.
*   **Optimización para David y Elena:** Añadí filtros rápidos por nombre y nómina en todas las tablas y aseguré que la exportación a Excel fuera una réplica exacta de la vista en pantalla para facilitar análisis externos.

Al cerrar esta actividad, el sentimiento en el equipo era de seguridad absoluta. Habíamos fallado rápido y barato en el prototipo, lo que nos permitió llegar a la fase de diseño visual no con hipótesis, sino con certezas validadas por quienes usarían GAC todos los días. El esqueleto era sólido, funcional y, sobre todo, generaba confianza.

**Reflexión final:**
Este proceso me reafirmó que el prototipado no es una etapa de "dibujo", sino una etapa de negociación técnica y psicológica. Ver el mapa visual de Ana ser recibido como un "éxito rotundo" validó que la jerarquía de información que propusimos era la correcta para motivar al colaborador. Al final, lo que aprendí es que la verdadera automatización no es la que lo hace todo sola, sino la que le da al experto las herramientas necesarias para intervenir solo cuando es necesario, manteniendo siempre el control del proceso.