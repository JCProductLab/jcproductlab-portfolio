# Fase 1: Entender y Definir (Discovery & Research)

## Actividad_01_Validación del Brief y Alineación de Expectativas

### Parte 1: Auditoría Forense y Detección de Brechas Estratégicas

#### La disección del "Punto Cero": Más allá de una lectura superficial

El momento en que recibí el paquete documental del proyecto GAC, supe que mi primer gran reto no sería trazar un solo wireframe, sino dudar de todo lo que estaba escrito. Tenía frente a mí tres fuentes maestras: el **Brief Detallado**, el documento de la **Plataforma GAC** y una presentación ejecutiva. A simple vista, parecían alineados, pero la experiencia me ha enseñado que el diablo vive en las discrepancias entre lo que un stakeholder escribe en un Word y lo que proyecta en un PowerPoint. No me limité a leer; inicié una auditoría forense. Mi objetivo era validar que lo que Gentera pedía no solo fuera técnicamente viable, sino estratégicamente coherente antes de sentarme con **Carlos** o **Lalo**.

Entendí de inmediato que la alineación no es un acto pasivo de comprensión, sino una maniobra de blindaje. Si permitía que una sola suposición sobre las reglas de negocio se filtrara en esta etapa, estaría diseñando sobre arena. Me sumergí en los documentos buscando no solo qué querían construir, sino por qué. Necesitaba establecer una línea base de verdad absoluta: ¿Qué significa exactamente "transformar el proceso" para una institución con la escala de Gentera? Sin esa respuesta, cualquier propuesta de diseño sería meramente cosmética.

#### Triangulación de documentos: El arte de encontrar la grieta

Para construir un mapa mental sólido, realicé una síntesis cruzada de los tres pilares documentales. Fue un ejercicio de triangulación necesario: comparé el texto narrativo del brief con la estructura visual de la presentación y los requerimientos funcionales de la plataforma. 

*   **El conflicto de versiones:** Noté que mientras la presentación hablaba de una "trazabilidad total", el brief técnico se centraba casi exclusivamente en la automatización de la segmentación. Esa desconexión es una señal de alerta de **Scope Creep** en potencia; si el equipo de diseño se enfoca solo en la automatización y el cliente espera un dashboard de seguimiento en tiempo real desde el día uno, el proyecto nace con una brecha de expectativa peligrosa.
*   **La jerarquía de la información:** Extraje las funcionalidades críticas (F1 y F2) y las puse a prueba contra los objetivos de negocio. ¿Cómo se conecta la identificación de colaboradores con la segmentación de grupos por puesto y subdirección? Al mapear estas relaciones, descubrí que la lógica de "identificación" era mucho más nebulosa de lo que el documento sugería. 

Esta auditoría previa me permitió llegar a la mesa no como alguien que viene a recibir órdenes, sino como un consultor que ya ha identificado dónde el motor lógico del producto podría colapsar.

#### El ancla del "Valor Humano": Diseño con propósito institucional

No se puede diseñar para Gentera sin entender su ADN. Antes de profundizar en los flujos técnicos, integré los hallazgos de la investigación de contexto de la empresa. GAC no podía ser solo una herramienta de eficiencia fría; debía ser una extensión del **"Valor Humano"** y del enfoque **"Centrado en la Persona"** que define a la institución. 

> **Insight Senior:** En proyectos de automatización, el riesgo es tratar al usuario como una variable de sistema. Aquí, la automatización debe servir al desarrollo del capital humano. Si optimizamos el envío de invitaciones, no es solo para ahorrar clics, es para asegurar que cada colaborador reciba la capacitación que necesita para crecer, sin fricciones que lo desmotiven.

Esta perspectiva cambió mi forma de analizar el brief. Ya no veía solo una lista de correos y grupos de WhatsApp; veía una ruta de carrera. Entendí que la solución debía ser "amigable y sencilla" no por estética, sino por respeto al tiempo y al esfuerzo del colaborador. Cada decisión de diseño que tomara a partir de ese momento tendría que estar justificada desde esta filosofía institucional.

#### Cuantificando el desorden: La anatomía del dolor operativo

Para diseñar una solución, primero tuve que diseccionar el cadáver del proceso manual. El brief mencionaba que el proceso actual "consume tiempo", pero como diseñador senior, necesitaba números. Al analizar la carga de trabajo de los administradores, identifiqué que estaban invirtiendo entre **24 y 32 horas semanales** solo en tareas de carpintería de datos: limpiar Excels, segmentar listas a mano y enviar invitaciones individuales.

**Los puntos ciegos detectados:**
*   **Riesgo Reputacional:** El error humano en las convocatorias no era solo un retraso operativo; era un golpe a la credibilidad interna. Si un colaborador recibe una invitación errónea o es omitido de una capacitación crítica, la percepción de la eficiencia de Gentera se daña.
*   **Cuellos de Botella:** Identifiqué que el 80% del tiempo se perdía en la transición entre la "plantilla semi-limpia" y la asignación de recursos (formador, sede, horario). 

Mi enfoque fue transformar ese "dolor" en un benchmark real. Si no cuantificamos el desastre actual, no podremos probar el éxito de GAC después del lanzamiento. La meta de reducir el tiempo operativo en un 80% dejó de ser un deseo para convertirse en un requerimiento arquitectónico.

#### El laberinto de las reglas de negocio: Blindando la arquitectura

Aquí es donde la auditoría se volvió quirúrgica. Me sumergí en las reglas de negocio complejas que el brief apenas rozaba: el **"Gerente Multiproducto"** y la **"Regla de 6 meses para Reingresos"**. 

1.  **Gerente Multiproducto:** Identifiqué que esta no era una simple validación de puesto. Implicaba una lógica condicional profunda sobre cómo se asignan los asesores CIE y qué sucede cuando hay múltiples gerentes en una misma oficina. Si el sistema no entiende esta jerarquía desde la base de datos, la segmentación automática fallará sistemáticamente.
2.  **Reingresos y Exclusiones:** La regla de los 6 meses para reiniciar rutas de capacitación y las exclusiones de **SEAS México** o incapacidades **IPP** representaban "casos de borde" que afectan a una parte significativa de los 27,000 colaboradores. 

Documenté estas áreas como "zonas de alta fricción". Mi preocupación no era solo cómo programarlas, sino cómo el sistema debería alertar al administrador cuando una de estas reglas entrara en conflicto. Blindar la arquitectura de datos contra estas excepciones es lo que separa un producto robusto de un prototipo frágil.

#### La frontera del MVP: Protegiendo el proyecto del "Scope Creep"

Una de mis decisiones más firmes durante esta auditoría fue defender las exclusiones. El brief mencionaba la posibilidad de integrar directamente con **ADN** para la asignación automática de cursos, pero decidí que, para esta fase inicial, GAC debía nacer como un ecosistema controlado que consumiera la "plantilla Excel semi-limpia".

**¿Por qué este trade-off?**
*   **Viabilidad Técnica:** Una integración directa con un sistema core como ADN en el Sprint 1 es una receta para el retraso. 
*   **Control de Calidad:** Al usar la carga de archivos como punto de partida, le damos al administrador (Carlos) un momento de validación humana antes de que el motor de automatización se dispare.

Establecer estas fronteras no fue un acto de limitación, sino de protección. Preferí asegurar que el 95% de la identificación de colaboradores fuera perfecta mediante la carga de archivos, antes que arriesgar el proyecto entero intentando una integración de API que no estaba madura en los documentos.

#### Reflexión Final: El Diseñador como Filtro de Realidad

Al terminar esta auditoría forense, el proyecto GAC ya no era una nebulosa de deseos corporativos. Se había convertido en un conjunto de desafíos lógicos y estratégicos claros. Mi rol aquí fue actuar como un filtro de realidad: traduje las ambiciones de Gentera a restricciones de diseño y oportunidades de automatización. 

Llegué a la conclusión de que el éxito de GAC no dependería de qué tan bonita fuera la interfaz, sino de qué tan infalible fuera el motor de reglas que segmenta a esos 27,000 usuarios. Con las 11 áreas de fricción identificadas y las metas cuantitativas cuestionadas, estaba listo para dejar de hablar conmigo mismo y empezar a interrogar a los stakeholders.


La auditoría forense me dejó con una lista de preguntas que ningún documento podía responder. Sabía que la siguiente fase no podía ser una reunión de presentación ordinaria; necesitaba transformar el encuentro con Carlos y Lalo en una sesión de ingeniería de la indagación. Tenía que diseñar una agenda que los obligara a revelar las excepciones que el brief había omitido, especialmente sobre la lógica del "Gerente Multiproducto" que seguía pareciéndome el punto más vulnerable de toda la estructura.

### Parte 2: Ingeniería de la Indagación Agenda y Preguntas Estratégicas

#### El diseño de la trampa de precisión: Por qué una reunión no es una entrevista

La auditoría forense me dejó una certeza incómoda: el brief era un mapa, pero yo necesitaba el terreno. Había detectado 11 áreas de fricción lógica que ningún documento iba a resolver por sí solo. Como diseñador, mi mayor riesgo no era hacer una interfaz fea, sino construir un sistema perfecto sobre premisas falsas. Sabía que si llegaba a la reunión con Gentera a simplemente "presentar mis hallazgos", me darían las gracias y el proyecto seguiría navegando en la ambigüedad. 

Decidí que la sesión de alineación no sería una presentación, sino una extracción quirúrgica de la verdad no escrita. Siguiendo la estructura que tracé para la validación del brief, me propuse diseñar una "trampa de precisión metodológica". Necesitaba que **Carlos** y **Lalo** dejaran de hablar en términos de "deseos de negocio" y empezaran a hablar en términos de "excepciones lógicas". Mi objetivo era transformar el caos de las 32 horas manuales de Carlos en un algoritmo de automatización infalible. Para lograrlo, la preparación no podía ser un simple guion; tenía que ser una ingeniería de la indagación donde cada minuto estuviera justificado por un riesgo técnico o de experiencia.

#### La anatomía de los 120 minutos: Una agenda de alto rendimiento

No podíamos permitirnos una charla informal de pasillo por Google Meets. Estructuré la sesión en un bloque inamovible de dos horas, dividiendo el tiempo con una disciplina casi militar para asegurar que los temas más espinosos recibieran el oxígeno necesario.

*   **El encuadre estratégico (20 minutos):** Reservé el inicio para la Visión de Alto Nivel. No quería hablar de botones, sino del "porqué". Necesitaba que Lalo y Carlos rearticularan el problema central. Si no estábamos de acuerdo en qué estábamos intentando curar, no tenía sentido discutir la medicina.
*   **El núcleo duro (50 minutos):** Este fue el segmento más denso, dedicado exclusivamente al Alcance y Funcionalidades (lo que internamente llamamos Desarrollo 1 y 2). Aquí es donde planeé diseccionar la "Automatización de la Segmentación" y la "Trazabilidad". Cada funcionalidad (F1, F2, etc.) debía ser validada contra las historias de usuario y, sobre todo, contra las reglas de negocio que Carlos aplica hoy de forma intuitiva pero no documentada.
*   **Usuarios, Métricas y Riesgos (30 minutos):** Un espacio para bajar a tierra las expectativas de adopción y los KPIs. Aquí es donde forzaría la discusión sobre qué significa realmente "éxito" para Gentera.
*   **Cierre y Próximos Pasos (20 minutos):** Para blindar el proceso, asegurando que no quedaran hilos sueltos ni suposiciones invisibles.

Esta estructura no era caprichosa. La diseñé para agotar primero la resistencia estratégica y luego entrar en la fatiga del detalle técnico, donde suelen aparecer las verdaderas joyas de información: las excepciones que nadie menciona porque "siempre se han hecho así".

#### El arsenal de interrogación: Extrayendo el valor más allá del KPI

Para esta sesión, preparé un set de interrogantes extrayendo las dudas más críticas de mi análisis previo. No quería respuestas de "sí" o "no"; buscaba narrativas. 

Una de mis preguntas clave fue directa al corazón de la experiencia: *"Desde la perspectiva de Gentera, ¿cómo se vería y sentiría idealmente este proceso 'transformado' para los usuarios clave seis meses después del lanzamiento?"*. No buscaba una lista de funciones, buscaba entender si el éxito era una reducción de estrés, un sentimiento de alivio o simplemente una métrica en un dashboard. Si Carlos me decía que esperaba "trabajo más fluido y rápido", yo ya sabía que mi prioridad de diseño debía ser la velocidad de respuesta y la claridad visual de los estados de carga.

También formulé preguntas sobre el "valor significativo" más allá de la eficiencia. Quería anécdotas. Quería saber qué errores humanos les quitaban el sueño. ¿Es la omisión de un nuevo ingreso lo que detiene la operación? ¿O es convocar a alguien a un curso que ya tomó? Estas respuestas me permitirían priorizar la arquitectura de la base de datos: ¿necesitamos un sistema que bloquee duplicados o uno que alerte sobre vacíos? La diferencia es sutil en el código, pero abismal en la experiencia de usuario.

#### Diagnóstico de una patología operativa: Las 32 horas de Carlos

Uno de los puntos más críticos que preparé para la indagación fue el calvario manual que vive Carlos cada semana. Al analizar los datos, descubrí que dedica entre 24 y 32 horas semanales —prácticamente su jornada completa— a tareas que un sistema bien diseñado debería resolver en minutos. 

Me preparé para interrogarlo sobre los detalles forenses de su frustración:
*   **El cuadre de grupos:** ¿Qué significa realmente "cuadrar la cantidad por curso y ciudad"? Aquí detecté un problema de logística geográfica que el brief apenas rozaba. Si se están enviando colaboradores a cursos lejos de su ciudad por error, el sistema de GAC debe tener una validación de geolocalización o una jerarquía de sedes vinculada al código postal del colaborador.
*   **La revisión de niveles:** Carlos tiene que revisar manualmente si el nivel de capacitación está actualizado para evitar errores. Esto me gritó "deuda de integridad de datos". Mi pregunta para él fue clara: ¿De dónde sacas esa verdad hoy? Si es de un Excel "semi-limpio", GAC debe ser el filtro de pureza que esa data no tiene.
*   **El spam manual:** Enviar invitaciones persona por persona no es solo ineficiente; es una fuente crítica de errores de comunicación. Preparé la validación para el flujo de Outlook y Teams, sabiendo que automatizar esto no es un lujo, es una necesidad de salud mental para el equipo operativo.

#### Blindaje técnico: El reto de los 27,000 registros

No solo diseñé preguntas de UX; diseñé preguntas de rendimiento. Al revisar que el universo de colaboradores supera los 27,000, establecí un benchmark de carga no negociable. Mi indagación para el equipo técnico y para Alberto (el proveedor de la plantilla) se centró en la velocidad: el sistema debe procesar esa masa de datos en un rango de 5 a 10 minutos como máximo. 

Cualquier tiempo superior a eso rompería la promesa de "agilidad" y "alivio" que Carlos espera. Si el administrador tiene que esperar una hora para ver sus listas segmentadas, el producto habrá fallado antes de que el usuario haga el primer clic. También preparé el terreno para discutir la "jerarquía de reglas". ¿Qué pasa cuando un colaborador es un "nuevo ingreso" (regla A) pero también tiene una "falta previa" (regla B)? Si no forzaba a Gentera a definir una prioridad ahora, el backend entraría en conflicto y el diseño de los estados de error sería una pesadilla de manejar.

#### La selección quirúrgica del War Room

Para que esta ingeniería de la indagación funcionara, necesitaba a las personas adecuadas en la sala virtual de Google Meets. No quería una multitud; quería perfiles con poder de decisión y conocimiento de trinchera.

*   **Carlos:** El experto absoluto. Su presencia era vital porque él es el usuario que más sufre el proceso actual. Sin sus detalles, el diseño sería pura teoría.
*   **Lalo:** El ancla estratégica. Necesitaba que él validara que mis interpretaciones del "valor" estaban alineadas con los objetivos de transformación digital de Gentera.
*   **Marta y Alberto:** Los guardianes de la entrada. Marta para el contexto de los cursos y Alberto para la realidad cruda de la plantilla de datos ADN. Si la plantilla viene sucia, Alberto es quien debe decirme qué tan sucia y con qué frecuencia.

Decidí que la sesión se grabaría y que realizaríamos una minuta en vivo sobre un documento compartido. Como Product Designer, mi labor durante esos 120 minutos sería la de un moderador implacable: usaría el "Parking Lot" para cualquier discusión que se desviara del objetivo técnico y parafrasearía cada acuerdo (ej. *"Entonces, Carlos, si un colaborador reingresa antes de los 6 meses, respetamos su avance, pero si pasa un día más, borrón y cuenta nueva, ¿correcto?"*).

> **Insight Senior:** La alineación no es buscar el consenso fácil, es forzar la fricción necesaria para que las reglas de negocio ambiguas mueran en la sala de juntas y no en el código de producción. Preferí incomodar a Carlos con preguntas sobre sus errores manuales hoy, para blindar su flujo de trabajo mañana.


La agenda estaba lista y las preguntas cargadas, pero mientras repasaba los perfiles de los asistentes, me asaltó una duda sobre la regla del "Gerente Multiproducto". Si Carlos y Lalo no lograban ponerse de acuerdo en la lógica de los "asesores CIE" durante la sesión, todo el motor de segmentación que planeaba proponer se vendría abajo. Sabía que el taller de alineación en vivo no sería solo una validación, sino el campo de batalla donde se decidiría si GAC sería una herramienta de automatización real o simplemente un Excel con esteroides.

### Parte 3: El Taller de Alineación Sincronización de Expectativas en Vivo

#### El control del tablero digital: La sesión como centro de mando

El reloj marcaba las 10:00 AM cuando abrí la sesión de Google Meets. No era una reunión más; era el momento de forzar la colisión entre la teoría del brief y la fricción de la operación diaria. Tenía a Carlos, Lalo, Marta y Alberto en la sala virtual. Mi estrategia fue clara desde el primer segundo: compartí pantalla, pero no para mostrar una presentación estática, sino para proyectar el documento de minuta que iríamos construyendo en vivo. Esta técnica de "Toma de Notas en Vivo" es mi herramienta preferida para neutralizar la ambigüedad; cuando los stakeholders ven sus palabras transformarse en requerimientos técnicos en tiempo real, el nivel de compromiso y precisión aumenta drásticamente.

Lideré la facilitación con un rigor casi forense. Sabía que disponía de 120 minutos para despejar las incógnitas de un proyecto que, de otro modo, se hundiría en su propia complejidad. Utilicé el "Parking Lot" de manera implacable. Cuando la discusión sobre la jerarquía de las reglas de negocio amenazaba con descarrilar la agenda hacia detalles técnicos prematuros, movía el tema visualmente a una sección de "pendientes" en el documento compartido. Esto me permitió mantener el flujo sin silenciar las preocupaciones de los expertos, asegurando que cubriéramos los ocho puntos críticos que había trazado en la agenda.

#### La anatomía del dolor: El "enemigo" de las 32 horas

Para alinear las expectativas, necesitaba que el problema tuviera un nombre y una cifra. Le pedí a Carlos que rearticulara el proceso actual, no desde el manual, sino desde su vivencia de cada jueves. Fue ahí donde la magnitud del reto quedó expuesta: el proceso manual de segmentación y envío de convocatorias consume entre 24 y 32 horas semanales. No es solo tiempo; es un maratón de estrés propenso a errores humanos, omisiones de colaboradores y asignaciones incorrectas de sedes o formadores. 

Ese dato de las 32 horas se convirtió en nuestro "enemigo a vencer". Establecí que el valor real de GAC no sería simplemente "automatizar", sino devolverle a Carlos cuatro días de trabajo al mes. Validamos en ese momento que la prioridad absoluta del Desarrollo 1 debía ser la "Automatización de la Segmentación". Si lográbamos que el sistema identificara correctamente a quién capacitar y en qué sede, habríamos resuelto el 80% del problema de negocio. Lalo, desde su perspectiva estratégica, confirmó que esto alineaba el proyecto con la transformación digital de Gentera: menos hojas de cálculo, más decisiones basadas en datos limpios.

#### Estética funcional: Más allá de la decoración

Pasamos a discutir la identidad visual del producto. Tenía claro que GAC no necesitaba ser un experimento artístico, sino una herramienta que se sintiera como una extensión natural del ecosistema de Gentera. Tomé como referencia los estilos gráficos sugeridos en el planteamiento inicial y los puse sobre la mesa para validación. Mi razonamiento fue puramente orientado a la adopción: si la interfaz hablaba el mismo lenguaje visual que las herramientas que los administradores ya usan, la curva de aprendizaje se desplomaría.

Acordamos que el diseño debía priorizar la claridad y la eficiencia. No buscábamos "sorprender" al usuario, sino darle confianza. Proyecté la idea de un tablero limpio donde el administrador pudiera ver, de un vistazo, el estatus de las cargas de datos. Esta decisión no fue menor; al establecer esta línea base visual, blindé el proceso de diseño posterior contra cambios de opinión estéticos subjetivos. El objetivo quedó fijado en una tasa de adopción del 85% por parte del equipo administrativo, algo que solo se logra si la herramienta se siente propia desde el primer clic.

#### Desmenuzando el motor de reglas: La lógica del reingreso

El punto más denso de la sesión fue la disección de las reglas de negocio. Aquí es donde la experiencia me dicta que el diablo está en los detalles. Junto a Carlos, analicé los escenarios de los colaboradores. Definimos con precisión quirúrgica la regla de los "Reingresos": si un colaborador vuelve a Gentera después de más de 6 meses, su ruta de capacitación se reinicia por completo; si el periodo es menor, el sistema debe ser capaz de reconocer y respetar su avance previo. 

No me detuve ahí. Cuestioné qué pasaba con las faltas a cursos anteriores y los cambios de puesto. 
*   **Faltas:** El sistema debe marcar al colaborador para una convocatoria prioritaria en el siguiente evento disponible, siempre que exista una justificación cargada.
*   **Cambios de puesto:** Establecimos que el colaborador debe completar los cursos pendientes de su posición anterior antes de iniciar la ruta de su nueva promoción.

Esta traducción de lenguaje humano a lógica de sistema fue fundamental. Al forzar estas definiciones en vivo, evité que el equipo de desarrollo tuviera que adivinar estas reglas meses después. Sin embargo, detectamos una grieta: la regla del "Gerente Multiproducto" y la identificación de los "asesores CIE" en la plantilla de datos aún eran nebulosas. En lugar de forzar una respuesta incompleta, asignamos a Alberto y Carlos la tarea de definir esta jerarquía de reglas conflictivas para la siguiente sesión.

#### El descubrimiento del "punto ciego": El caso WhatsApp

Uno de los momentos de mayor tensión estratégica ocurrió cuando llegamos al módulo de notificaciones. El brief mencionaba el envío de invitaciones vía WhatsApp como una funcionalidad clave. Sin embargo, al indagar sobre la fuente de esos datos con Alberto, el proveedor de la plantilla ADN, descubrimos un vacío crítico: la información de contacto para WhatsApp no existe actualmente en las bases de datos que GAC va a consumir.

Este fue un hallazgo de arquitectura puro. GAC no podía ser solo un consumidor pasivo de información; tendría que convertirse en el recolector de esta nueva capa de datos. Propuse que el sistema incluyera un flujo de validación y captura de números telefónicos para los administradores, transformando un requerimiento de comunicación en un reto de gestión de base de datos. Fue una lección de realidad: la automatización del 95% que buscamos depende totalmente de la integridad de los datos de entrada, y acabábamos de identificar el primer gran hueco en esa integridad.

#### Blindando el rendimiento: De horas a minutos

Finalmente, aterrizamos los requerimientos no funcionales. Cuando pregunté por el rendimiento esperado, la respuesta inicial fue ambigua, así que propuse métricas de éxito agresivas pero realistas basándome en la carga de trabajo de Carlos. Acordamos que la carga de la plantilla y la generación de las listas segmentadas no debe tomar más de 5 a 10 minutos. Pasar de una jornada completa de trabajo manual a un proceso de 10 minutos es el tipo de impacto que justifica la inversión en este desarrollo.

Ante la apertura de los stakeholders de Gentera, quienes confiaron en mi criterio para definir los KPIs, establecí los pilares de nuestra validación final:
1.  **Automatización del 95%** en la identificación de colaboradores elegibles.
2.  **Reducción del 80%** en el tiempo operativo del administrador.
3.  **Proceso un 70% más ágil** en el envío de convocatorias.

Salí de la reunión con una sensación de claridad que no teníamos al inicio. Habíamos transformado un documento de deseos en un plan de batalla técnico. Habíamos identificado riesgos, definido reglas y, sobre todo, construido la confianza necesaria entre Gentera y Dacodes para movernos rápido.

> **Insight Senior:** La verdadera alineación ocurre cuando dejas de hablar de "funcionalidades" y empiezas a hablar de "reglas de decisión". Descubrir en esta sesión que no existía una jerarquía para las reglas conflictivas nos salvó de un colapso seguro en la fase de desarrollo. Diseñar el sistema es fácil; diseñar el consenso sobre cómo debe pensar ese sistema es el verdadero reto.


Al cerrar la sesión de Google Meets, me quedé mirando la minuta llena de notas rojas y "elementos de acción" para Alberto y Carlos. Aunque habíamos logrado una alineación sin precedentes, la revelación de que la información de WhatsApp no existía y que la regla del "Gerente Multiproducto" era todavía un concepto etéreo me dejó una inquietud profunda. Sabía que la minuta no era suficiente; necesitaba consolidar todo este conocimiento disperso en una "Única Fuente de Verdad" que fuera legalmente vinculante y técnicamente infalible antes de que el equipo de desarrollo tocara una sola línea de código. El siguiente desafío no era solo documentar, sino formalizar este entendimiento para que nadie pudiera decir, meses después, "esto no fue lo que acordamos".

### Parte 4: Consolidación y Formalización la Única Fuente de Verdad

#### El silencio tras el "Leave Meeting": De la facilitación al blindaje técnico

En cuanto hice clic en el botón rojo para abandonar la sesión de Google Meets, el silencio de mi oficina se sintió cargado de una responsabilidad distinta. Acababa de pasar dos horas navegando entre las expectativas de Lalo, las urgencias operativas de Carlos y las restricciones técnicas de Alberto. Pero como diseñador, sé que una reunión exitosa es un espejismo si no se cristaliza en un documento que sobreviva al olvido y a las interpretaciones subjetivas. En ese momento, mi rol cambió radicalmente: dejé de ser el facilitador empático que buscaba el consenso para convertirme en el arquitecto forense encargado de construir la **Única Fuente de Verdad** del proyecto GAC.

Mi prioridad inmediata fue procesar la "resaca" de la reunión antes de que los matices se perdieran. Tenía una ventana de tiempo crítica para transformar los garabatos en mi cuaderno y las notas rápidas del documento compartido en una minuta que no solo resumiera, sino que blindara el proyecto contra el temido *scope creep*. No estaba redactando un acta administrativa; estaba trazando el mapa de navegación técnica y estratégica que el equipo de desarrollo y yo seguiríamos durante los próximos meses. Si no lograba capturar con precisión quirúrgica que el "Gerente Multiproducto" era todavía un concepto etéreo o que la data de WhatsApp era inexistente, estaríamos construyendo sobre arena.

#### La arquitectura de la minuta: Estructurando el compromiso

Para elaborar este documento, me alejé de los formatos genéricos. Utilicé la técnica de **Toma de Notas en Vivo** que habíamos aplicado durante la sesión para asegurar que cada punto reflejara fielmente la voz de los stakeholders. Sabía que Carlos, al leer el resumen, necesitaba ver reflejado su dolor principal: esas **24 a 32 horas semanales** que pierde en procesos manuales. Documentar esa cifra no fue un detalle menor; fue establecer la línea base contra la cual mediríamos el éxito del producto.

Estructuré la minuta categorizando la información para que fuera accionable desde el primer segundo:
*   **Asistencia y Quórum:** Registré la participación de Carlos, Lalo, Marta y Alberto por parte de Gentera, junto con nuestro equipo de Dacodes. Tener a los dueños del proceso y a los proveedores de datos en la misma página era el primer requisito para la validez de los acuerdos.
*   **Visión y Metas:** No me limité a repetir el brief. Redacté cómo Gentera busca una transformación que alivie la carga de trabajo y reduzca errores humanos en las convocatorias.
*   **Priorización de Desarrollo:** Formalicé que la **"Automatización de la Segmentación"** es la prioridad absoluta para el primer bloque de desarrollo. Esto nos dio permiso para decir "no" o "después" a otras funcionalidades que pudieran distraernos del núcleo del problema.

> **Insight Senior:** La minuta es el primer prototipo de la gobernanza del proyecto. Al definir qué está "dentro" y qué está "fuera", no solo gestionas expectativas, sino que diseñas el espacio de maniobra del equipo. En este caso, confirmar que la gestión de viáticos y hoteles quedaba fuera del alcance fue una maniobra defensiva vital para proteger la fecha de lanzamiento.

#### La formalización de decisiones estratégicas y visuales

Uno de los puntos más delicados fue la alineación sobre el lenguaje visual. Decidí documentar que no partiríamos de una hoja en blanco, sino que utilizaríamos los estilos gráficos sugeridos en el material previo de Gentera como nuestra brújula inicial. Esto no solo nos ahorró semanas de exploración estética innecesaria, sino que generó una sensación inmediata de familiaridad y "propiedad" por parte del cliente sobre el diseño.

Asimismo, blindé el alcance al confirmar las exclusiones. Fue fundamental dejar por escrito que la integración directa con ADN para la asignación automática de cursos no ocurriría en esta fase; GAC funcionaría consumiendo la **plantilla Excel** proporcionada por Alberto. Documentar esta decisión técnica fue un acto de honestidad brutal: era preferible aceptar una dependencia manual controlada que prometer una integración automatizada que el ecosistema técnico de Gentera no estaba listo para soportar. Esta claridad es lo que separa un proyecto que se entrega de uno que se queda en el limbo de las promesas técnicas incumplidas.

#### El "Aha! Moment" de los Requerimientos No Funcionales

Al revisar mis notas para la sección de "Cambios o Adiciones a la Comprensión del Brief", identifiqué dos revelaciones que alteraban significativamente nuestra estrategia de diseño y desarrollo. La primera fue el tema de **WhatsApp**. El brief original lo mencionaba como un canal, pero en la discusión descubrimos que no existía una fuente de datos previa para estos contactos. Esto significaba que GAC no solo debía enviar mensajes, sino que debía ser el sistema que capturara y gestionara esa información por primera vez.

La segunda revelación fue el benchmark de rendimiento. Establecimos un compromiso de que la carga de plantillas y la generación de listas no debería superar los **5 a 10 minutos**. Como diseñador, esto me impuso un reto de experiencia de usuario: ¿qué le mostramos al administrador durante esos 10 minutos para que no sienta que el sistema se ha colgado? Documentar este requerimiento no funcional fue clave para anticipar la necesidad de estados de carga, barras de progreso y notificaciones de finalización que no estaban mapeadas originalmente.

#### Elementos de Acción: El primer test de compromiso

La parte final de mi proceso de consolidación fue la creación de la tabla de **Action Items**. No acepté promesas vagas; asigné responsables y fechas límite estrictas. 
*   **Alberto y Carlos** quedaron encargados de enviar ejemplos de la "Plantilla de Capacitación" y el "Concentrado Histórico" en versiones anonimizadas en un plazo de **48 horas**.
*   Esta urgencia no era caprichosa. Necesitaba esos insumos para que el equipo técnico pudiera validar la estructura de datos antes de que avanzáramos en el diseño de los flujos de carga. 

Asignar estas tareas con una fecha límite de "Fecha + 2 días" fue mi forma de medir el compromiso real de Gentera. En mi experiencia, la velocidad con la que un cliente entrega los primeros insumos tras la reunión de alineación es el mejor predictor de la salud del proyecto. Si Alberto no enviaba la plantilla a tiempo, todo el cronograma de Discovery se vería comprometido, y era mejor saberlo en la semana uno que en la semana diez.

#### El cierre de la alineación y la licencia para el Discovery

Finalmente, envié la minuta para su validación formal, utilizando una técnica de **parafraseo ejecutivo**. No pregunté "¿están de acuerdo?", sino que presenté el documento como el reflejo fiel de nuestras decisiones conjuntas. Gestioné el **"Parking Lot"** dejando claro que temas como la regla del "Gerente Multiproducto" o las exclusiones IPP no se habían olvidado, sino que requerían una sesión de trabajo específica debido a su complejidad.

Al recibir la confirmación de Lalo y Carlos, sentí que la Actividad 01 estaba verdaderamente cerrada. Habíamos transformado un brief de PowerPoint en un plan de ejecución blindado. Tenía en mis manos una licencia para profundizar. Con las expectativas alineadas y las reglas de negocio (incluso las conflictivas) mapeadas, podía entrar a la fase de **Discovery & Research** con la seguridad de que no estaba perdiendo el tiempo. Ya no estaba diseñando en la oscuridad; ahora tenía un marco de referencia sólido, validado y, sobre todo, compartido por todos los que tenían el poder de decir "sí" o "no" al final del camino.

**Reflexión final:**
Esta fase de formalización me recordó que la claridad es el recurso más escaso en cualquier proyecto de diseño de producto complejo. Al obligar a todos los stakeholders a confirmar los límites del alcance y las deficiencias de la data (como el caso de WhatsApp), eliminamos las "bombas de tiempo" que suelen explotar a mitad del desarrollo. Salí de esta actividad con la tranquilidad de saber que el éxito del proyecto GAC ya no dependía de mi interpretación individual, sino de un acuerdo colectivo documentado que servirá como nuestra brújula técnica ante cualquier duda futura.

### Parte 5: Arquetipos de Usuario y Mapeo del Viaje Actual As-is

#### El rostro humano detrás de las celdas de Excel

Después de pasar horas diseccionando el "infierno" de las 32 horas semanales de Carlos y las reglas de negocio que parecían un jeroglífico, me detuve. Tenía una arquitectura técnica clara, pero me faltaba el pulso. Los números y los flujos de procesos son estructuras óseas, pero sin el músculo de la empatía, corría el riesgo de diseñar una solución de grado industrial que fuera mecánicamente perfecta pero humanamente rechazada. Sabía que para que GAC tuviera éxito, no podía limitarme a automatizar tareas; tenía que aliviar el sufrimiento operativo de personas reales.

Decidí que era el momento de transformar esas "filas de ADN" en perfiles vivos. Inicié un proceso de síntesis profunda para extraer la esencia de lo que había escuchado en las entrevistas y observado en las sombras del proceso manual. Necesitaba pasar de la abstracción de la "segmentación de grupos" al cansancio visual de quien envía 200 correos individuales un jueves por la tarde. Este no fue un ejercicio estético, fue un **diagnóstico forense de la experiencia** para asegurar que el "Valor Humano" de Gentera no fuera solo un eslogan, sino el núcleo de la interfaz.

#### El Affinity Mapping: Destilando el caos en arquetipos

Para no perderme en la montaña de notas y transcripciones, utilicé una técnica de **Affinity Mapping**. Llené una pared virtual con citas textuales, comportamientos observados, niveles de frustración y metas personales. Al agrupar estas notas por similitudes, los patrones empezaron a gritar. No estábamos diseñando para "usuarios genéricos"; estábamos diseñando para cuatro perfiles con necesidades diametralmente opuestas pero interconectadas.

Decidí consolidar la investigación en cuatro **User Personas** fundamentales. Sabía que más de cinco diluirían el enfoque, y menos de tres ignorarían matices críticos del ecosistema. Me enfoqué en roles que representaran tanto al administrador que opera el sistema como al colaborador que vive las consecuencias de esa operación. Esta segmentación me permitió humanizar las variables tecnológicas y convertirlas en decisiones de diseño.

#### Los protagonistas del ecosistema GAC

El primer perfil que emergió con una fuerza abrumadora fue **Carlos, el Coordinador Detallista**. A sus 45 años, Carlos es la memoria viva del proceso en Gentera. Es un experto en Excel, pero su dominio de la herramienta es su propia cárcel: pasa entre 24 y 32 horas a la semana cruzando datos manualmente. Su mayor frustración es el miedo constante al error humano. Su meta es simple pero poderosa: dejar de "apagar incendios" cada semana para poder enfocarse en lo estratégico. Carlos no necesita una herramienta compleja; necesita un aliado que le devuelva su tiempo y su tranquilidad.

En el otro extremo del flujo encontré a **Ana, la Colaboradora Entusiasta**. Con 25 años y apenas dos meses en la empresa, Ana es una nativa digital que espera que las herramientas de su trabajo sean tan intuitivas como las apps de su smartphone. Sin embargo, su realidad es otra: se siente "perdida" en un mar de correos contradictorios. Su dolor principal es la incertidumbre; no sabe si está al día con su capacitación o si se está quedando atrás en su ruta de crecimiento. Para Ana, GAC debe ser la brújula que hoy no tiene.

Luego identifiqué a **David, el Líder Comprometido**, un gerente de oficina que supervisa a 15 personas. David vive en una "caja negra": no tiene forma de saber quién de su equipo ha completado sus cursos sin preguntarles uno por uno o pedirle un favor a Carlos. Su frustración es la ineficiencia; pierde tiempo valioso consolidando información dispersa para tomar decisiones de negocio. Finalmente, apareció **Elena, la Formadora Dedicada**, quien sufre el impacto final de la desorganización. Elena recibe las listas de asistentes tarde, en formatos inconsistentes (PDF o Excel) que la obligan a un registro de asistencia manual y arcaico. Su pasión es enseñar, pero la logística actual es un obstáculo constante.

#### La jerarquía del diseño: Priorización estratégica

Con los cuatro rostros sobre la mesa, tuve que tomar una decisión difícil pero necesaria: **priorizar**. No todos los dolores tienen el mismo peso en la fase inicial del proyecto. Basándome en los objetivos de negocio, definí a **Carlos y Ana como los User Personas Primarios**. 

> **Maniobra Senior:** Elegí a Carlos porque su eficiencia es el KPI maestro del Desarrollo 1 (Automatización). Si no resolvemos su carga de trabajo, el sistema colapsa en la entrada. Elegí a Ana porque ella representa el "Valor Humano" y es la razón de ser del Desarrollo 2 (Trazabilidad). Al resolver los problemas de Carlos y Ana, generamos un efecto cascada: si Carlos automatiza con éxito, Elena recibe sus listas a tiempo; si Ana tiene visibilidad de su ruta, David deja de perseguirla para pedirle estatus.

David y Elena quedaron como personas secundarias. Esto no significa que sus necesidades sean ignoradas, sino que sus funcionalidades se derivarán de las soluciones creadas para los perfiles primarios. Esta claridad estratégica blindó el proyecto contra el "scope creep" y nos permitió enfocar los recursos de diseño donde el impacto sería más transformador.

#### El viaje de Ana: Una ruta llena de baches invisibles

Para entender realmente la magnitud del problema, mapeé el **User Journey Map "As-Is"** de Ana. Lo que descubrí fue una trayectoria marcada por la ansiedad y la dependencia. El viaje de Ana comienza con la "Recepción de Convocatoria", un momento que debería ser motivador pero que hoy es confuso. Recibe información por canales dispersos (Teams, correos del jefe, correos de capacitación) y a menudo "muy justa de tiempo".

El punto de mayor fricción ocurre en la fase de **Búsqueda y Comprensión de la Ruta**. Ana intenta recordar qué ha tomado y qué le falta, pero no hay una fuente única de verdad. Se siente insegura y tiene que recurrir a su propia memoria o a preguntar a colegas. Incluso cuando llega al curso, el proceso de agendarlo en su calendario es manual y tedioso. Al final del día, Ana termina su capacitación con una sensación de desconexión; no sabe cómo ese esfuerzo impacta su carrera en Gentera porque no tiene un historial accesible ni un indicador de progreso. Es un viaje donde la motivación inicial se diluye en la falta de transparencia.

#### David y Elena: La caja negra y el corredero logístico

El mapeo de los viajes de David y Elena completó el diagnóstico forense del sistema quebrado. El viaje de **David** es el de un buscador de información frustrado. Su "disparador" suele ser una reunión de desempeño donde se da cuenta de que no tiene datos. Su proceso es puramente reactivo: tiene que "perseguir" a Carlos por un reporte o interrogar a su equipo. Esta falta de visibilidad centralizada lo convierte en un gestor ineficiente que solo se entera de los problemas cuando ya es tarde.

Por su parte, el viaje de **Elena** es un "corredero" logístico. Su fase de preparación está condicionada por la llegada tardía de las listas de participantes. Al no tener un formato estandarizado, gasta tiempo valioso tratando de entender quiénes son sus alumnos y cuál es su nivel de conocimiento previo. Durante la impartición, el registro de asistencia es un lastre manual en papel o en un Excel propio, lo que desconecta el momento de la enseñanza de la trazabilidad administrativa. Estos mapas "As-Is" no son solo diagramas; son la evidencia de que el proceso actual no solo es lento, sino que erosiona la moral de quienes lo operan.

#### Reflexión sobre el diagnóstico humano

Mirando estos mapas y perfiles, me doy cuenta de que muchos proyectos fallan porque saltan directamente a la solución sin entender el "coste emocional" del problema actual. Realizar este análisis no fue un paso burocrático; fue el acto de trazar el **plano de ataque**. Ahora sé exactamente dónde se rompe la experiencia para Elena y qué es lo que le quita el sueño a Carlos. 

Diseñar GAC sin estos arquetipos habría sido como construir un puente sin conocer el terreno: podrías usar los mejores materiales, pero se hundiría al primer uso. Estos documentos visuales son ahora artefactos vivos que usaremos para validar cada wireframe. Si una funcionalidad no ayuda a Carlos a dejar de "apagar incendios" o no le quita la incertidumbre a Ana, simplemente no debería existir.

***


Tener los rostros y los dolores de Carlos, Ana, David y Elena mapeados con tal precisión me dejó una inquietud profunda: el sistema actual está tan fragmentado que una simple mejora cosmética sería como poner un parche en una herida abierta. La brecha entre el caos que viven hoy y la eficiencia que necesitan es tan grande que me obligó a plantear un salto radical. Ahora que entiendo dónde estamos, el siguiente desafío es proyectar cómo se verá el mundo cuando GAC tome el control, transformando estas rutas llenas de baches en una **VISIÓN DE FUTURO (TO-BE) Y SÍNTESIS DE OPORTUNIDADES** donde la tecnología finalmente trabaje para las personas y no al revés.

### Parte 6: Visión de Futuro To-be y Síntesis de Oportunidades

#### El salto al diseño de la solución: Dejar de arreglar para empezar a transformar

Después de pasar horas diseccionando el caos en el que vivían Carlos y Ana, me encontré en ese punto crítico donde el diagnóstico termina y la responsabilidad de proponer una salida comienza. Tenía frente a mí un mapa "As-Is" que parecía un campo de batalla: procesos rotos, 32 horas semanales perdidas en Excels y una frustración palpable en cada rol. Como diseñador, sentí la presión de no limitarme a "digitalizar" lo que ya estaba mal. No podíamos simplemente poner una interfaz bonita sobre un proceso ineficiente; mi reto era reingenierizar el ecosistema completo.

Establecer el **User Journey Map "To-Be"** no fue un ejercicio estético, sino un acto de supervivencia para el proyecto. Necesitaba trazar un faro, una visión de futuro que sirviera de guía tanto para el equipo de desarrollo de Dacodes como para los stakeholders de Gentera. Este mapa ideal se convirtió en el puente necesario entre la validación del brief y la arquitectura de información que vendría después. Fue el momento en que dejamos de hablar de problemas para empezar a hablar de una realidad donde la tecnología finalmente trabajaría para las personas.

#### El renacimiento operativo de Elena: Un viaje sin fricciones

Decidí enfocarme primero en Elena, la formadora. Su realidad actual era la de una capturista de datos glorificada que, irónicamente, apenas tenía tiempo para formar personas. Al proyectar su viaje ideal en GAC, estructuré cinco fases que transformaban radicalmente su día a día:

*   **Fase 1: Recepción y Acceso a la Asignación:** En este nuevo mundo, Elena ya no tiene que bucear en hilos de correo interminables para saber qué curso le toca. La plataforma GAC se vuelve proactiva. Recibe una notificación automática (vía Teams o correo) y, al entrar, se encuentra con una **agenda personalizada y centralizada**. Ver sus fechas, sedes y enlaces en un solo lugar le devuelve la sensación de control. Sus pensamientos proyectados lo resumen todo: *"¡Aquí está mi agenda, todo en un solo lugar!"*. La emoción de estar organizada reemplaza la ansiedad de la búsqueda manual.
*   **Fase 2: Preparación Optimizada:** Aquí es donde el valor estratégico aparece. Antes de entrar al aula, Elena ahora puede consultar en GAC el contexto real de su grupo: qué puestos ocupan, de qué oficinas vienen y cuál es su nivel de avance en la ruta general. Esta **visibilidad del contexto del participante** le permite adaptar su material. Ya no imparte una clase genérica; imparte una sesión diseñada para las necesidades específicas de quienes tiene enfrente.
*   **Fase 3: Impartición y Registro Ágil:** Esta es la fase donde eliminamos el "ruido" administrativo. Elena imparte su curso con su tablet o laptop a la mano. El registro de asistencia es 100% digital y directo en GAC. Se acabaron las listas de papel que luego hay que transcribir. Al simplificar esto, Elena recupera su propósito: puede concentrarse totalmente en la formación, libre de la carga administrativa post-curso que antes la asfixiaba.
*   **Fase 4: Seguimiento y Visibilidad del Progreso:** Al terminar, Elena no se desconecta del proceso. Accede a un **dashboard de avance** donde ve el impacto real de su trabajo. Puede observar cómo los colaboradores de la subdirección que atiende progresan en su Kardex digital. Si necesita reportar algo a sus superiores, simplemente exporta tablas filtradas a Excel con un clic, sabiendo que la data es íntegra y está actualizada en tiempo real.
*   **Fase 5: Cierre y Sentido de Propósito:** El ciclo cierra con una Elena realizada. Al automatizar lo operativo, le devolvemos el tiempo para mejorar sus contenidos y estrategias pedagógicas. Siente que su contribución al desarrollo de Gentera es real porque la plataforma ha eliminado los errores y el papeleo innecesario.

> **Insight de Diseño:** El éxito de la plataforma no se medirá por cuántas funciones tiene, sino por cuánto tiempo de calidad le devolvemos a Elena para que pueda ser, efectivamente, una formadora y no una administradora de archivos.

#### Disección forense de los fallos sistémicos

Para construir esa visión de futuro, tuve que ser implacable al consolidar los puntos débiles transversales que GAC debía erradicar. No eran problemas aislados; eran fallos sistémicos que identifiqué tras analizar los viajes de Carlos, Ana y David:

1.  **Dependencia total de procesos manuales:** Es inaceptable que un perfil como el de Carlos pierda entre **24 y 32 horas semanales** cruzando Excels (Plantilla ADN, Concentrado Histórico y Estructura de Oficinas). Es un desperdicio de talento brutal.
2.  **Falta de visibilidad centralizada:** La sensación de Ana de estar "perdida" en su propia capacitación es el resultado directo de no tener una fuente única de verdad. Nadie sabe realmente dónde está parado sin preguntar a alguien más.
3.  **Comunicación laboriosa y arcaica:** El envío manual de invitaciones con archivos `.ical` es una tarea de bajísimo valor que consume horas y es el caldo de cultivo perfecto para el error.
4.  **Riesgo crítico de error humano:** Las convocatorias erróneas (como cuando Ana fue citada a un curso que no le correspondía) no son solo un fallo logístico; son un golpe a la credibilidad del área de capacitación.
5.  **Alta carga cognitiva:** El proceso actual es un "rompecabezas" mental. Carlos debe malabarear simultáneamente con criterios de reingreso, exclusiones y la compleja regla del **"Gerente Multiproducto"**. Nadie debería tener que memorizar tanta lógica de negocio solo para segmentar un grupo.
6.  **Curva de aprendizaje empinada:** Para los nuevos ingresos, el sistema actual es un laberinto. Sin un mapa claro, la adopción de la cultura de capacitación de Gentera se vuelve lenta y confusa.

#### El mapa de oportunidades: Las 6 soluciones maestras de GAC

Con estos dolores sobre la mesa, articulé las oportunidades de mejora que definirían el ADN de la plataforma. Estas no son solo "funcionalidades", son la respuesta directa a la supervivencia operativa del proyecto:

*   **Automatización Integral:** GAC debe ser capaz de limpiar y cruzar la plantilla de ADN de forma autónoma. La clave aquí es la aplicación automática de las reglas de negocio más pesadas, como las exclusiones y la lógica de reingresos, liberando a Carlos del trabajo de "minería de datos" manual.
*   **Fuente Única de Verdad:** Vamos a eliminar la dispersión de archivos. Todo —absolutamente todo— debe vivir en el sistema web. Esto garantiza la integridad de los datos y que todos (líderes, formadores y colaboradores) vean la misma información.
*   **Dashboards en Tiempo Real:** Necesitamos vistas personalizadas. Carlos necesita ver la carga de los formadores; David (el líder) necesita identificar rápidamente quién de su equipo está en riesgo de atraso; y Ana necesita ver su propio mapa de progreso de forma visual y atractiva.
*   **Notificaciones Multicanal:** La comunicación debe ser proactiva. Si hay un cambio de sede o un curso próximo, el sistema debe avisar por Teams, WhatsApp o correo sin que Carlos tenga que mover un dedo.
*   **UX Intuitiva y Reducción de Clics:** El diseño debe enfocarse en la eficiencia. Cada clic ahorrado en la segmentación de un grupo es tiempo que le devolvemos a la estrategia de la empresa.
*   **Reducción Drástica del Tiempo Operativo:** Este es nuestro KPI maestro. Si no logramos bajar esas 32 horas de trabajo manual a una fracción mínima, habremos fallado como diseñadores de producto.

#### Reflexión sobre el valor humano en la automatización

Al presentar esta visión a Lalo, Carlos y Marta, me di cuenta de algo fundamental: en Gentera, "Centrado en la Persona" no es solo un eslogan, es una métrica de diseño. Automatizar no es "reemplazar" el toque humano; es limpiar el camino de obstáculos burocráticos para que el valor humano pueda brillar. 

Diseñar GAC se trata de devolverle el tiempo a Carlos para que analice la efectividad de los cursos, y a Elena para que inspire a sus alumnos. La visión "To-Be" que construimos no es solo un software; es una promesa de respeto por el tiempo y el talento de los colaboradores. Salimos de esta fase de validación con una alineación total: todos entendemos que el enemigo es el proceso manual y que la solución es una arquitectura inteligente que aprenda y aplique las reglas que hoy asfixian al equipo.


Tener la visión clara del futuro es inspirador, pero también es peligroso si no se aterriza en la realidad técnica. Al cerrar esta etapa de alineación, me quedó una duda que empezó a crecer: ¿cómo vamos a traducir la pesadilla de las reglas de negocio, como la del 'Gerente Multiproducto' o los criterios de exclusión, en una lógica de sistema que sea infalible? El siguiente gran reto no es visual, sino estructural; es el momento de entrar en la **INGENIERÍA DE LÓGICA: REGLAS DE NEGOCIO Y REQUERIMIENTOS**, donde cada excepción y cada regla se convertirán en los cimientos de nuestra arquitectura.

### Parte 7: Ingeniería de Lógica Reglas de Negocio y Requerimientos

#### El momento en que la visión chocó con el Excel

La inspiración de los workshops de visión se evaporó en el momento en que abrí la "Plantilla de Capacitación" de Carlos por primera vez. Tenía frente a mí una sábana de datos que representaba la realidad operativa de miles de colaboradores, y comprendí que el diseño de GAC no se jugaba en la elegancia de su interfaz, sino en la precisión quirúrgica de su "cerebro". Como diseñador de producto, mi responsabilidad cambió de fase: ya no estábamos definiendo el "qué", sino el "cómo" exacto en que el sistema debía decidir. La verdadera automatización no es magia; es una arquitectura lógica infalible que debe absorber la maraña de excepciones que Carlos, durante años, había gestionado de memoria.

Me senté con Carlos para diseccionar lo que él llamaba "el criterio". Mi objetivo era transformar ese instinto humano en pseudocódigo. Sabía que si fallábamos en definir una sola regla de exclusión, el sistema enviaría invitaciones erróneas, generaría costos logísticos innecesarios en sedes y hoteles, y lo peor de todo, erosionaría la confianza de los líderes operativos en la herramienta. Teníamos que pasar de la narrativa estratégica a la ingeniería de lógica pura.

#### La limpieza forense: El primer filtro de seguridad

Empecé por el principio del flujo: la identificación de quiénes son realmente elegibles para capacitarse. No podíamos permitir que el sistema procesara ruido. Documenté las primeras tres reglas de negocio como un filtro forense que debe ejecutarse cada semana en cuanto se carga la plantilla de ADN (el sistema de recursos humanos de Gentera).

*   **RN-ID-001 (Exclusión por "Baja"):** La lógica es implacable. SI el estatus del colaborador en la plantilla es "Baja", ENTONCES el sistema debe excluirlo de inmediato. Parece obvio, pero en el proceso manual, un registro de baja que no se filtraba a tiempo terminaba en una reservación de hotel pagada para alguien que ya no trabajaba en la empresa.
*   **RN-ID-002 (Exclusión por área "SEAS México"):** Identifiqué que el área de SEAS tiene su propio ecosistema de formación. Por lo tanto, SI el campo "Negocio" es igual a "SEAS" Y la "Ubicación" es "México", ENTONCES el sistema debe sacarlos del flujo de GAC. Blindar esta regla fue vital para evitar la duplicidad de esfuerzos entre departamentos.
*   **RN-ID-003 (Exclusión por incapacidad "IPP"):** Aquí es donde el lenguaje de Gentera se vuelve específico. Las incapacidades permanentes parciales (IPP) son un criterio de exclusión total. SI el campo INC/IPP contiene el valor "IPP", ENTONCES el colaborador queda fuera. Otras incapacidades no lo excluyen del sistema, pero sí generan una falta justificada que el sistema debe saber leer después.

Este primer bloque de limpieza automatizada es lo que permitirá reducir ese 90% de error humano que diagnosticamos al inicio. No es solo filtrar; es asegurar que la materia prima de la segmentación sea pura.

#### La lógica del tiempo: Reingresos y faltas justificadas

Uno de los puntos más dolorosos para Carlos era decidir qué hacer con los colaboradores que regresan a la empresa. ¿Empiezan de cero? ¿Continúan donde se quedaron? Para resolver esto, articulé la **RN-ID-005 (Manejo de Reingresos)**, basándome en la regla de los 6 meses. La lógica que diseñé para el sistema es la siguiente: el sistema debe cruzar la fecha de contratación actual con la fecha de salida previa registrada en el Concentrado Histórico. SI los días fuera de la empresa son mayores o iguales a 180, ENTONCES el colaborador reinicia su ruta desde el nivel básico. SI son menores a 180, ENTONCES continúa exactamente donde se quedó.

Esta regla elimina la subjetividad. Ya no depende de si el administrador "recuerda" al colaborador o no; el sistema hace el cálculo de días de forma automática. A esto sumé la **RN-ID-006**, que gestiona las faltas justificadas de las últimas 3 semanas. SI un colaborador faltó pero su ausencia fue marcada como justificada, ENTONCES el sistema le asigna prioridad máxima para ser convocado al mismo curso en la siguiente ventana disponible. Es una lógica de "cola de espera inteligente" que hoy no existe y que causa que mucha gente se quede rezagada en su formación por meses.

#### El rompecabezas del "Gerente Multiproducto"

Si hubo una regla que nos obligó a profundizar en la estructura de las oficinas de Gentera, fue la **RN-SEG-004**, la lógica del "Gerente Multiproducto". En Gentera, un gerente no es solo un gerente; su ruta de capacitación depende de qué productos se venden en su oficina. 

El desafío técnico era que la plantilla de ADN no te dice explícitamente si un gerente es multiproducto. Tuve que diseñar una lógica de inferencia: el sistema debe escanear a todos los colaboradores asignados a la misma oficina que el gerente. SI el sistema detecta la presencia de al menos un "Asesor CIE" (Crédito Individual) en esa oficina, ENTONCES el gerente es marcado automáticamente como "Multiproducto" y se le asigna esa ruta específica. SINO, se le asigna la "Ruta Grupal". 

Esta micro-decisión de arquitectura es fundamental. Si un gerente toma la capacitación equivocada, no tendrá las herramientas para supervisar a su equipo de crédito individual, lo que impacta directamente en los indicadores de negocio de la sucursal. Automatizar este escaneo de oficina ahorra horas de validación manual cruzada que Carlos hacía revisando organigramas.

#### Ingeniería de cupos y asignación de sedes

Pasamos de quién debe ir, a cómo los agrupamos. Aquí la lógica se vuelve matemática y geográfica. Establecí reglas rígidas para los cupos, porque los formadores y las sedes tienen límites físicos reales.

*   **RN-SEG-002 y 003 (Cupos Presenciales y Online):** Para los cursos presenciales, definí un rango de 5 a 25 participantes. Para los online, el rango es de 10 a 15. Lo interesante no es el número, sino la acción del sistema cuando estos no se cumplen. SI el cupo es menor al mínimo, GAC no debe simplemente ignorarlo; debe generar una alerta para que Carlos decida si fusiona grupos o pospone la sesión. SI excede el máximo, el sistema debe sugerir automáticamente la división del grupo.
*   **RN-SEG-005 (Asignación de Sede):** La logística de Gentera es compleja. Cada colaborador tiene una "Sede Opción 1" y "Sede Opción 2". La regla que documenté dicta que el sistema debe intentar llenar los grupos en la Opción 1. SI no se cumple el cupo o la sede no tiene disponibilidad (según la tabla externa de sedes y hoteles que integraremos), ENTONCES el sistema debe intentar reubicar al grupo en la Opción 2.

Esta jerarquía de decisiones garantiza que los grupos se formen con un criterio de eficiencia de costos, llenando primero los espacios preferentes antes de saltar a alternativas.

#### Trazabilidad: Los 12 niveles y los hitos humanos

La trazabilidad es el segundo gran pilar de GAC. Actualmente, la ruta de capacitación consta de 12 niveles, desde Básico hasta Experto. Pero no todos los niveles son iguales. Identifiqué y blindé los llamados "Toques con Formador" (**RN-TRAZ-002**). 

Los niveles 1, 4, 8 y 12 son hitos críticos. A diferencia de los niveles intermedios que pueden ser autodirigidos, estos cuatro requieren interacción humana obligatoria. El sistema debe bloquear el avance del colaborador en el nivel 5, por ejemplo, SI no tiene registrada una calificación y asistencia aprobatoria en el "Toque" del nivel 4. 

Esta lógica de prerrequisitos es la que permite calcular el **RN-TRAZ-003 (Estatus de Avance)**. El sistema debe calcular el porcentaje de avance basándose en la ruta completa de 12 meses (o la futura de 6 meses). Un colaborador solo pasa de "En Progreso" a "Acreditado" cuando el sistema valida que cada hito, especialmente los presenciales, ha sido completado. Para que esto funcione, GAC debe ser capaz de consumir datos de tablas externas como el "Concentrado Histórico" y los reportes de "Yastás" (**RN-TRAZ-005**), integrando toda la actividad de aprendizaje en un solo perfil de usuario.

#### El catálogo de requerimientos: De la regla a la función

Toda esta lógica de negocio la traduje en un catálogo de **26 Requerimientos Funcionales (RF)** que sirven como órdenes directas para el equipo de desarrollo. No son deseos; son especificaciones técnicas.

*   **RF-GAC-001 (Carga y Limpieza):** El sistema debe procesar el Excel semanal y aplicar las reglas de exclusión (Bajas, SEAS, IPP) de forma autónoma.
*   **RF-GAC-022 (Invitaciones Inteligentes):** Este es uno de mis favoritos por el impacto en la experiencia. El sistema no solo debe avisar; debe enviar automáticamente una invitación vía Teams o WhatsApp que incluya un archivo **.ical**. Esto permite que el curso se agende en el calendario del colaborador con un solo clic, eliminando la excusa de "no sabía que tenía curso".
*   **RF-GAC-025 (Actualización de Super Admin):** Definí que solo el rol de Super Admin puede cargar la plantilla maestra cada semana, asegurando la integridad de la base de datos principal.

Cada requerimiento, desde la autenticación por número de empleado (**RF-GAC-024**) hasta el dashboard de indicadores clave (**RF-GAC-020**), es una respuesta directa a un dolor que mapeamos en el User Journey. Estamos cerrando la brecha entre la frustración del usuario y la funcionalidad del software.

#### Dominando el lenguaje de Gentera: El glosario como cimiento

Para que esta ingeniería de lógica fuera exitosa, tuve que adoptar el lenguaje de la casa. No podíamos hablar de "usuarios" o "sucursales" de forma genérica. Establecí un glosario de términos de negocio que se convirtió en nuestra biblia semántica. Términos como **ADN** (la fuente de verdad de RRHH), **Asesor CIE** (el disparador de la regla multiproducto), o **Evento ADN** (los movimientos de puesto que disparan capacitaciones) no son solo palabras; son variables lógicas en nuestro sistema. 

Entender que una "Promoción" o una "Democión" tienen impactos distintos en la ruta de capacitación (**RN-ID-007**) es lo que separa a un diseñador que solo hace pantallas de uno que diseña soluciones de negocio. Por ejemplo, si un colaborador tiene una promoción, el sistema debe obligarlo a terminar los cursos faltantes de su nivel anterior antes de iniciar los de su nuevo puesto. Si es una democión, la lógica cambia: asumimos que ya tiene nociones y lo movemos a niveles avanzados.

#### Reflexión sobre la robustez y la flexibilidad

Al terminar de documentar estas 26 reglas y requerimientos, me detuve a pensar en el futuro. Gentera está en constante cambio, y sabíamos que la ruta de 12 niveles podría reducirse a 6 en cualquier momento. Por eso, diseñé esta arquitectura lógica para ser modular. Los "niveles" no están cableados de forma rígida; son parámetros que el Super Admin podrá ajustar.

Construir esta ingeniería de lógica fue como armar el mecanismo de un reloj suizo. Es invisible para el usuario final, pero es lo que permitirá que Carlos deje de pasar 32 horas a la semana pegando celdas en Excel para convertirse en el estratega de formación que Gentera necesita. Hemos creado un sistema que no solo automatiza, sino que entiende el negocio. Salimos de esta fase con un catálogo de requerimientos validado y firmado, listos para dar el siguiente paso: definir cómo vamos a medir si todo este esfuerzo realmente está moviendo la aguja.


Tener la lógica blindada me dio una seguridad inmensa, pero inmediatamente surgió la pregunta que todo stakeholder de alto nivel termina haciendo: "¿Cómo vamos a demostrar que esto funciona?". Pasar de "creer que automatizamos" a "probar que ahorramos tiempo y dinero" requiere una capa de medición que no puede ser una ocurrencia de último minuto. El siguiente desafío fue definir una estructura de KPIs y un plan de recopilación de datos tan riguroso como nuestras reglas de negocio, para que el éxito de GAC no fuera una opinión, sino un hecho incontestable.

### Parte 8: Medición Estratégica Kpis y Plan de Recopilación de Datos

Blindar la lógica de negocio fue una victoria técnica necesaria, pero en una organización del tamaño de Gentera, lo que no se traduce en números simplemente no existe para la dirección. Al terminar de definir las 26 reglas de automatización, me enfrenté a la pregunta inevitable de Lalo: "¿Cómo vamos a demostrar que esto realmente valió la pena?". No bastaba con que el sistema funcionara; el diseño debía ser capaz de probar que estaba moviendo la aguja del negocio. Carlos se sentía agotado, pero el "agotamiento" no es un KPI que un director financiero pueda auditar. Necesitaba transformar esa fatiga subjetiva en datos forenses que justificaran cada hora de desarrollo y cada decisión de arquitectura que habíamos tomado hasta ese momento.

#### El salto de la intuición al dato: El taller de métricas SMART

Para cerrar esta primera fase de alineación, convoqué a un taller específico centrado exclusivamente en la medición. Mi objetivo era evitar el error común de "medirlo todo" y terminar con un tablero lleno de ruido. En su lugar, apliqué el criterio SMART para filtrar solo aquellos indicadores que fueran específicos, medibles, alcanzables, relevantes y con un plazo definido. Durante la sesión, utilicé un enfoque de "Meta-Señal-Métrica": si nuestra meta era la eficiencia, ¿qué señales nos daría el usuario y qué métrica capturaría esa señal de forma irrefutable?

Dividí la estrategia en cuatro pilares críticos: **Operativas**, **Adopción**, **Satisfacción** y **Calidad**. No fue una discusión sencilla; hubo que negociar qué era realmente "alcanzable". Por ejemplo, cuando discutimos la automatización, algunos esperaban un 100% de efectividad inmediata. Tuve que intervenir para calibrar las expectativas: un sistema que maneja 27,000 colaboradores y reglas de "gerente multiproducto" siempre tendrá casos de borde. Acordamos que el éxito real sería una precisión del 95%, dejando un margen controlado para la supervisión humana experta.

#### La ingeniería de la eficiencia: Métricas Operativas

El corazón del proyecto GAC es el ahorro de tiempo, y aquí es donde las métricas debían ser más agresivas. Carlos me había confesado que su proceso actual era una "maratón" de entre 24 y 32 horas semanales de trabajo puramente manual en Excel. Mi compromiso, plasmado en la estrategia de medición, fue reducir ese tiempo en un 80%. Esto significa que, tras la implementación, Carlos debería ser capaz de resolver la generación de listas en un rango de 4.8 a 6.4 horas semanales. 

Para que este número no fuera una simple promesa, definí tres indicadores operativos clave:

*   **Precisión de la Automatización de Elegibles:** Establecí que el 95% de los colaboradores identificados por el sistema no deben requerir intervención manual. Cada vez que Carlos tenga que corregir un registro, el sistema lo registrará como una desviación de la meta.
*   **Tasa de Error en Convocatorias:** Actualmente, el error humano provoca que entre el 10% y el 15% de las convocatorias requieran correcciones posteriores (sedes equivocadas, cursos erróneos). Nuestra meta es desplomar ese número a menos del 1.5% en los primeros seis meses.
*   **Tiempo de Procesamiento de Plantilla:** Definí un SLA técnico donde el sistema debe procesar la carga masiva de los 27,000 registros en un máximo de 10 minutos. Si el sistema tarda más, estamos fallando en la promesa de agilidad.

#### La dimensión humana: UX y Adopción como seguros de vida

Un software eficiente que nadie usa es un fracaso absoluto. Por eso, puse especial énfasis en medir la adopción y la experiencia del usuario (UX). No quería conformarme con encuestas de opinión vagas; necesitaba métricas estandarizadas que permitieran comparar a GAC con los estándares de la industria.

Decidí implementar el **System Usability Scale (SUS)**. Es una herramienta que nos da una puntuación de 0 a 100 sobre la usabilidad percibida. Mi meta para GAC es alcanzar un puntaje de **75 o superior** en el primer año. Un 68 es el promedio global; un 75 nos coloca en el rango de "buena usabilidad", algo vital para una herramienta interna donde la curva de aprendizaje debe ser mínima para no generar rechazo.

Además, establecimos metas de adopción claras:
*   **85% de adopción entre administradores** en los primeros tres meses. Si los colegas de Carlos no están usando la herramienta para sus procesos, tenemos un problema de confianza en el dato que debemos atacar de inmediato.
*   **70% de colaboradores activos** consultando su progreso. Queremos que el colaborador deje de preguntar "¿qué curso me toca?" y empiece a usar GAC como su brújula de crecimiento.
*   **Satisfacción cualitativa:** Utilizaremos la escala Likert (1-5) para medir el alivio del estrés laboral de Carlos. El éxito aquí es una puntuación de **4.0/5.0**, lo que validaría que no solo automatizamos tareas, sino que mejoramos la calidad de vida de quienes operan el sistema.

#### El rigor del Plan de Recopilación: Estableciendo la Línea Base

Una métrica sin una línea base es solo un número sin contexto. Para saber cuánto mejoramos, primero tuve que documentar con precisión forense lo mal que estábamos. Este fue uno de los momentos más reveladores del proceso. Me dediqué a realizar una **observación cronometrada** de las jornadas de los jueves de Carlos. Me senté con él, reloj en mano, y documenté cada minuto que pasaba limpiando celdas, cruzando bases de datos y segmentando grupos manualmente.

Esa observación no solo me dio el número de "32 horas", sino que me permitió ver las micro-fricciones: el Excel bloqueándose por el peso de los datos, las llamadas de último minuto para corregir un nombre, el estrés de saber que un error en una celda significaba enviar a la persona equivocada a una sede en otra ciudad. Esa es nuestra línea base real.

Para la recolección post-lanzamiento, diseñé una arquitectura de datos que no dependiera de la buena memoria de nadie:
1.  **Logs de sistema personalizados:** El backend registrará automáticamente el tiempo exacto desde que se carga la plantilla hasta que se genera la última comunicación.
2.  **Google Analytics:** Para rastrear el comportamiento de los colaboradores y líderes, midiendo qué tan seguido consultan sus dashboards de progreso.
3.  **Jira como sensor de calidad:** Utilizaremos el sistema de tickets para clasificar y contar incidencias críticas. Si el sistema tiene más de 5 incidencias altas al mes, activaremos un protocolo de revisión de deuda técnica.

#### El calendario de la mejora continua

Finalmente, estructuré un calendario de reporte que garantiza que la medición no sea un evento único, sino un hábito del proyecto. Establecí revisiones semanales para los tiempos de procesamiento y errores críticos, reportes mensuales de adopción y eficiencia para Lalo, y evaluaciones trimestrales de satisfacción y SUS. 

Este sistema de medición es, en última instancia, el seguro de vida del proyecto. Nos permite detectar desviaciones antes de que se conviertan en crisis y, sobre todo, nos da el lenguaje necesario para hablar con los stakeholders en términos de valor. Al cerrar esta fase de alineación con un plan de métricas tan robusto, dejamos de ser un equipo que "hace una plataforma" para convertirnos en el equipo que está transformando operativamente la capacitación en Gentera.

> **Reflexión final:**
> Definir estas métricas fue el momento en que el proyecto dejó de ser una promesa de diseño para convertirse en un compromiso de negocio. Aprendí que mi rol como diseñador no termina en la interfaz, sino en asegurar que el valor que propongo sea demostrable y auditable. Al establecer una línea base real mediante la observación directa de Carlos, logré que el equipo entero entendiera que no estábamos peleando contra un proceso, sino contra el tiempo y el estrés de una persona real. Esta actividad dejó un cimiento de confianza con los stakeholders: ahora saben exactamente qué vamos a medir y cómo se ve el éxito, lo que nos da la libertad de ejecutar la siguiente fase con una meta clara en el horizonte.