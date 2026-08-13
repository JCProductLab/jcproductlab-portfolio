# Fase 4: Implementación y Handoff

## Actividad 4: actividad_04_mantenimiento_del_sistema_de_diseno

### Parte 1: ALINEACIÓN ESTRATÉGICA: ESTABLECIENDO LA FUENTE DE VERDAD COMPARTIDA

#### El riesgo silencioso de la entrega final

En cuanto cerré la última carpeta de archivos para el handoff del MVP de AsDeporte, sentí esa punzada de desconfianza que solo te da la experiencia. Habíamos diseñado un ecosistema visual impecable, pero sabía que, sin una estructura de mantenimiento activa, ese trabajo empezaría a degradarse en el momento en que el primer desarrollador escribiera la primera línea de CSS. El diseño no es lo que vive en Figma; el diseño es lo que el usuario toca en la aplicación. Si permitía que existiera una brecha entre mis componentes y el código de ingeniería, el sistema de diseño dejaría de ser una herramienta de eficiencia para convertirse en una fuente de fricción y deuda técnica.

Entendí que mi rol debía evolucionar. Ya no era solo el arquitecto de la interfaz, sino el guardián de su integridad operativa. La transición hacia el mantenimiento del sistema no fue un proceso administrativo, sino un cambio de paradigma: pasamos de un modelo de "entrega única" a uno de colaboración continua. Mi prioridad absoluta era blindar la consistencia visual y funcional de AsDeporte a medida que el producto escalara, asegurando que cada nueva funcionalidad B2C o módulo B2B naciera con el mismo ADN. Para lograrlo, necesitaba que ingeniería y diseño dejaran de ser dos islas y empezaran a hablar exactamente el mismo idioma técnico.

#### La negociación de la "Fuente de Verdad"

Convoqué a una sesión de alineación con el Líder Técnico y los desarrolladores Frontend con un objetivo innegociable: definir la **Single Source of Truth (SSoT)**. No podíamos permitirnos ambigüedades sobre qué versión de un componente era la correcta. En mi experiencia, cuando un desarrollador duda sobre una especificación, improvisa; y cuando improvisa, el sistema muere. Propuse un acuerdo documentado donde establecimos que la "verdad" no residiría en un solo lugar, sino en un espejo perfecto entre dos mundos.

Acordamos que la Figma Library sería la referencia para la intención de diseño, pero que el código en producción sería la validación final de esa intención. Para que esto funcionara, impuse una estructura donde los componentes en código —específicamente en **Storybook**— reflejaran fielmente las propiedades, estados y comportamientos definidos en Figma. No buscábamos solo que se "vieran iguales", sino que compartieran la misma lógica subyacente. Esta decisión estratégica eliminó de inmediato las discusiones circulares sobre márgenes o colores; si el componente estaba en el sistema, la especificación era ley.

> El sistema de diseño solo es rentable si reduce la carga cognitiva de los equipos. Si un diseñador tiene que explicar tres veces cómo funciona un botón, el sistema ha fallado. La alineación inicial es el contrato social que evita que el producto se convierta en un Frankenstein visual.

#### Paridad de componentes: el lenguaje de los Design Tokens

Para que la sincronización fuera real, realicé una auditoría forense de nuestra librería para asegurar la **Component Parity**. Me aseguré de que cada átomo y molécula en Figma tuviera un espejo exacto en el repositorio de **Git**. Esto implicó una tarea minuciosa de nomenclatura: si yo llamaba a un color `$brand-primary-500`, ingeniería debía usar exactamente ese mismo token en su código. 

Esta paridad técnica es lo que permite la escalabilidad. Trabajé con los desarrolladores para mapear no solo los nombres, sino las variables y estructuras. Al hablar de un "Input Field", ambos equipos visualizábamos ahora las mismas propiedades: el radio de los bordes, el comportamiento del texto de ayuda, los estados de error y la validación en tiempo real. Este nivel de detalle es el que separa a un UI Kit decorativo de un sistema de diseño funcional que realmente acelera los tiempos de desarrollo.

#### Construyendo el ecosistema de herramientas

La infraestructura técnica que configuré fue diseñada para ser el soporte de esta colaboración. No elegí las herramientas por tendencia, sino por su capacidad de integración:

*   **Figma Library:** La organicé como la base de datos visual, con componentes maestros y variantes estrictamente documentadas.
*   **Storybook:** Coordiné con ingeniería su implementación para que actuara como nuestro laboratorio de componentes de código. Aquí es donde podíamos ver cada pieza de la interfaz de forma aislada, probando su responsividad y accesibilidad sin las distracciones del resto de la aplicación.
*   **Zeroheight:** Implementé esta plataforma como el puente narrativo. Fue el lugar donde centralicé las reglas de uso, los principios de diseño y los snippets de código. Mi objetivo era que cualquier nuevo integrante del equipo, ya fuera de diseño o desarrollo, pudiera entender en 15 minutos cómo construir una pantalla de AsDeporte siguiendo los estándares de la marca.

Esta configuración no fue opcional; fue la base necesaria para evitar que la documentación se convirtiera en un cementerio de archivos PDF olvidados. Al tener herramientas vivas que se actualizan con el flujo de trabajo diario, el mantenimiento se vuelve orgánico y no una tarea extra que nadie quiere hacer.

#### Protocolos de sincronización y control de versiones

Finalmente, establecí un flujo de trabajo para las actualizaciones que blindara al sistema contra la "deuda de diseño". Definí un protocolo claro: cuando un componente necesita cambiar o surge una nueva variación, el proceso no es lineal, sino cíclico. La actualización nace en Figma, se discute técnicamente con ingeniería para validar su viabilidad y, una vez aprobada, se notifica a través de canales dedicados en Slack.

Implementé un sistema de versionado riguroso. Necesitaba que el equipo de QA y los desarrolladores Frontend supieran siempre si estaban trabajando sobre la versión estable del sistema o sobre una propuesta en revisión. Al establecer jerarquías de especificación, despejé el camino para que el desarrollo fluyera sin interrupciones. Esta alineación estratégica inicial es lo que transformó el sistema de diseño de AsDeporte en un activo estratégico: una herramienta que no solo garantiza la calidad estética, sino que optimiza la inversión de tiempo y recursos de toda la organización.

**Próximo paso:**

Una vez que las reglas del juego quedaron claras y las herramientas estuvieron sincronizadas, llegó el momento de la verdad: la implementación real en el código. Sabía que, a pesar de tener una documentación impecable, la complejidad de los flujos de AsDeporte iba a generar preguntas que ningún manual podría responder por sí solo. Me preparé para entrar en la fase de soporte técnico, donde mi labor como diseñador se trasladaría directamente a las trincheras del desarrollo para asegurar que la teoría del sistema sobreviviera al rigor de la programación.

### Parte 2: INGENIERÍA COLABORATIVA: SOPORTE TÉCNICO EN LA IMPLEMENTACIÓN

#### Del Handoff al Diálogo: El Diseño en el Repositorio

En cuanto el último archivo de la Fase 3 fue entregado, supe que mi trabajo no había terminado, sino que simplemente había cambiado de estado físico. Existe una creencia peligrosa en muchos equipos de que el *handoff* es un evento único, una entrega de estafeta donde el diseñador se retira a descansar mientras ingeniería construye. Mi experiencia me ha enseñado que ese es el momento exacto donde los sistemas de diseño mueren o se vuelven irrelevantes. Por eso, tomé la decisión de integrarme en el flujo diario de desarrollo de AsDeporte, no como un supervisor externo, sino como un consultor técnico que entiende que un botón en Figma es solo una promesa, mientras que un botón en el repositorio es un compromiso con el usuario.

Mi razonamiento fue puramente estratégico: cada minuto que pasara resolviendo una duda técnica en Slack o en una sesión de *pair programming* me ahorraría horas de correcciones en la fase de QA. Basándome rigurosamente en el archivo **`01_mantenimiento_del_sistema_de_diseno_en_colaboracion.pdf`**, tracé un plan de acompañamiento que transformó la documentación estática en una conversación fluida. No quería que los desarrolladores frontend tuvieran que adivinar mis intenciones; quería que el UI Kit fuera su herramienta de trabajo más confiable, y para lograrlo, mi presencia en las "trincheras" del código era innegociable.

#### La Construcción Atómica: Más allá del CSS

Al iniciar la colaboración estrecha en la construcción de los componentes, mi primer movimiento fue asegurar que la arquitectura de la librería de Figma se tradujera con precisión a la lógica de programación. Trabajé hombro con hombro con el Líder Técnico para validar que los **Tokens** de diseño —esos valores atómicos de color, espaciado y tipografía— no fueran interpretados como valores aislados, sino como variables globales.

*   **Alineación con el UI Kit:** Utilicé el UI Kit inicial como nuestra biblia compartida. Si el documento marcaba un *border-radius* de 8px para las tarjetas de eventos, me aseguré de que eso se convirtiera en una variable reutilizable en el CSS, evitando que aparecieran valores "mágicos" o *hardcodeados* que luego serían imposibles de mantener.
*   **Resolución de ambigüedades:** Durante la construcción de los componentes de navegación, surgieron preguntas que la documentación del handoff no cubría por completo. ¿Cómo debía comportarse el menú lateral en una resolución de pantalla intermedia que no habíamos mapeado? En lugar de esperar a un reporte de error, despejé estas incógnitas en tiempo real, ajustando la especificación sobre la marcha para que el desarrollo no se detuviera.

Esta cercanía permitió que el equipo de ingeniería viera el sistema de diseño no como una restricción impuesta, sino como un acelerador. Al proporcionarles componentes bien estructurados y reglas claras, les liberé de la carga de tomar decisiones estéticas, permitiéndoles enfocarse plenamente en la lógica y el rendimiento de la plataforma.

#### Blindando la Experiencia: Estados y Accesibilidad Real

Uno de los puntos más críticos de mi intervención fue la disección forense de los estados de los componentes. Un diseñador senior sabe que el "Happy Path" es solo el 20% de la experiencia; el resto ocurre en los errores, las esperas y las interacciones fallidas. Siguiendo el foco del paso 2 del archivo **`01_mantenimiento_del_sistema_de_diseno_en_colaboracion.pdf`**, me dediqué a supervisar que cada componente tuviera una respuesta visual coherente para cada situación posible.

*   **Gestión de Estados:** Revisé minuciosamente la implementación de los estados de los formularios de registro para los eventos B2C. No me bastaba con que el botón de "Inscribirme" se viera bien; necesitaba que el estado de *loading* fuera claro, que el estado de *error* no solo fuera un color rojo sino que incluyera el ícono y el texto de ayuda definidos, y que el estado *disabled* fuera realmente inaccesible para el usuario hasta cumplir las condiciones.
*   **Accesibilidad desde la Raíz:** Aquí es donde el diseño se vuelve ingeniería social. Supervisé la implementación de los **Roles ARIA** y el orden de tabulación en los componentes más complejos, como los selectores de fechas para las competencias. Si un atleta con discapacidad visual intentaba navegar por la plataforma de AsDeporte, el sistema de diseño debía garantizarle una experiencia tan fluida como a cualquier otro. Validé que los contrastes se mantuvieran en los componentes de código y que los textos alternativos fueran dinámicos y descriptivos, elevando el estándar de calidad del producto final más allá de lo visual.

#### Storybook como Árbitro de la Verdad

Para garantizar la escalabilidad y la reutilización de los componentes en los ecosistemas B2B y B2C, impulsé el uso de **Storybook** como nuestro entorno de validación atómica. Mi razonamiento era claro: antes de que un componente se integrara en la aplicación principal, debía demostrar que podía "sobrevivir" de forma aislada.

Participé activamente en discusiones técnicas sobre cómo estructurar estos componentes en código. No se trataba solo de que se vieran igual que en Figma, sino de que fueran modulares. Si el equipo de desarrollo de AsDeporte Network (B2B) necesitaba usar el mismo componente de tabla que el equipo B2C, el sistema debía permitirlo sin duplicar código. Esta consultoría técnica fue vital para evitar la acumulación de deuda técnica visual; cada componente aprobado en Storybook era un bloque de construcción blindado que podíamos replicar con total confianza en cualquier rincón del ecosistema digital de la marca.

#### El Ritmo del Movimiento: Microinteracciones en Código

Un sistema de diseño sin movimiento se siente rígido, casi artificial. Por ello, dediqué una parte significativa de mi soporte técnico a asegurar que las microinteracciones y animaciones que habíamos definido en los prototipos de alta fidelidad se tradujeran correctamente al código. El movimiento en AsDeporte no era decorativo; era funcional, diseñado para guiar el ojo del usuario y confirmar acciones.

*   **Traducción de Curvas y Tiempos:** Expliqué a los desarrolladores la lógica detrás de las curvas de *easing* y los tiempos de transición. Un modal de confirmación de pago no podía simplemente aparecer; debía entrar con un ritmo que transmitiera seguridad.
*   **Revisión en Entornos de Prueba:** Realicé comparativas constantes entre mis prototipos de Figma y la implementación real en el navegador. Si una transición se sentía "pesada" o inconsistente con el resto del sistema, ajustábamos los valores de CSS directamente en sesiones rápidas de revisión, asegurando que la experiencia táctil y visual fuera homogénea en toda la plataforma.

#### Proximidad Táctica: Soporte en Tiempo Real

La logística de este soporte no se basó en reuniones interminables, sino en una comunicación quirúrgica y constante. Slack se convirtió en mi mesa de diseño extendida. Establecimos un canal dedicado donde los desarrolladores podían enviarme capturas de pantalla o fragmentos de código cuando encontraban un conflicto entre la especificación y la realidad técnica.

> **Insight de Trinchera:** La disponibilidad inmediata del diseñador durante la fase de construcción es el mejor antídoto contra la frustración de ingeniería. Cuando un desarrollador se siente apoyado, se vuelve un guardián del diseño; cuando se siente ignorado, empieza a tomar atajos que destruyen la consistencia del sistema.

Incluso llegamos a realizar sesiones de *pair programming* para los componentes más complejos, como el tablero de resultados en tiempo real. Sentarme virtualmente con un desarrollador para ajustar espaciados, jerarquías tipográficas y sombras directamente en el inspector del navegador me permitió pulir detalles que nunca habrían quedado perfectos a través de un documento de especificaciones. Esta dinámica no solo aceleró el ciclo de entrega del MVP, sino que fortaleció un vínculo de confianza mutua que resultó fundamental para el éxito a largo plazo del Design System de AsDeporte.

**Próximo paso:**

A pesar de la intensidad de este soporte y de haber resuelto cientos de dudas en el camino, sabía que la verdadera prueba de fuego estaba por llegar. Una cosa es que los componentes funcionen aislados en Storybook y otra muy distinta es ver cómo se comportan cuando se integran masivamente en los flujos reales de la aplicación. Me preparé para iniciar la auditoría de calidad más rigurosa del proceso: el Design Review de los componentes ya integrados en código, donde cualquier pequeña grieta en la implementación que hubiera pasado desapercibida se haría evidente bajo la luz del entorno de producción.#### Del Handoff al Diálogo: El Diseño en el Repositorio

En cuanto el último archivo de la Fase 3 fue entregado, supe que mi trabajo no había terminado, sino que simplemente había cambiado de estado físico. Existe una creencia peligrosa en muchos equipos de que el *handoff* es un evento único, una entrega de estafeta donde el diseñador se retira a descansar mientras ingeniería construye. Mi experiencia me ha enseñado que ese es el momento exacto donde los sistemas de diseño mueren o se vuelven irrelevantes. Por eso, tomé la decisión de integrarme en el flujo diario de desarrollo de AsDeporte, no como un supervisor externo, sino como un consultor técnico que entiende que un botón en Figma es solo una promesa, mientras que un botón en el repositorio es un compromiso con el usuario.

Mi razonamiento fue puramente estratégico: cada minuto que pasara resolviendo una duda técnica en Slack o en una sesión de *pair programming* me ahorraría horas de correcciones en la fase de QA. Basándome rigurosamente en el archivo **`01_mantenimiento_del_sistema_de_diseno_en_colaboracion.pdf`**, tracé un plan de acompañamiento que transformó la documentación estática en una conversación fluida. No quería que los desarrolladores frontend tuvieran que adivinar mis intenciones; quería que el UI Kit fuera su herramienta de trabajo más confiable, y para lograrlo, mi presencia en las "trincheras" del código era innegociable.

#### La Construcción Atómica: Más allá del CSS

Al iniciar la colaboración estrecha en la construcción de los componentes, mi primer movimiento fue asegurar que la arquitectura de la librería de Figma se tradujera con precisión a la lógica de programación. Trabajé hombro con hombro con el Líder Técnico para validar que los **Tokens** de diseño —esos valores atómicos de color, espaciado y tipografía— no fueran interpretados como valores aislados, sino como variables globales.

*   **Alineación con el UI Kit:** Utilicé el UI Kit inicial como nuestra biblia compartida. Si el documento marcaba un *border-radius* de 8px para las tarjetas de eventos, me aseguré de que eso se convirtiera en una variable reutilizable en el CSS, evitando que aparecieran valores "mágicos" o *hardcodeados* que luego serían imposibles de mantener.
*   **Resolución de ambigüedades:** Durante la construcción de los componentes de navegación, surgieron preguntas que la documentación del handoff no cubría por completo. ¿Cómo debía comportarse el menú lateral en una resolución de pantalla intermedia que no habíamos mapeado? En lugar de esperar a un reporte de error, despejé estas incógnitas en tiempo real, ajustando la especificación sobre la marcha para que el desarrollo no se detuviera.

Esta cercanía permitió que el equipo de ingeniería viera el sistema de diseño no como una restricción impuesta, sino como un acelerador. Al proporcionarles componentes bien estructurados y reglas claras, les liberé de la carga de tomar decisiones estéticas, permitiéndoles enfocarse plenamente en la lógica y el rendimiento de la plataforma.

#### Blindando la Experiencia: Estados y Accesibilidad Real

Uno de los puntos más críticos de mi intervención fue la disección forense de los estados de los componentes. Un diseñador senior sabe que el "Happy Path" es solo el 20% de la experiencia; el resto ocurre en los errores, las esperas y las interacciones fallidas. Siguiendo el foco del paso 2 del archivo **`01_mantenimiento_del_sistema_de_diseno_en_colaboracion.pdf`**, me dediqué a supervisar que cada componente tuviera una respuesta visual coherente para cada situación posible.

*   **Gestión de Estados:** Revisé minuciosamente la implementación de los estados de los formularios de registro para los eventos B2C. No me bastaba con que el botón de "Inscribirme" se viera bien; necesitaba que el estado de *loading* fuera claro, que el estado de *error* no solo fuera un color rojo sino que incluyera el ícono y el texto de ayuda definidos, y que el estado *disabled* fuera realmente inaccesible para el usuario hasta cumplir las condiciones.
*   **Accesibilidad desde la Raíz:** Aquí es donde el diseño se vuelve ingeniería social. Supervisé la implementación de los **Roles ARIA** y el orden de tabulación en los componentes más complejos, como los selectores de fechas para las competencias. Si un atleta con discapacidad visual intentaba navegar por la plataforma de AsDeporte, el sistema de diseño debía garantizarle una experiencia tan fluida como a cualquier otro. Validé que los contrastes se mantuvieran en los componentes de código y que los textos alternativos fueran dinámicos y descriptivos, elevando el estándar de calidad del producto final más allá de lo visual.

#### Storybook como Árbitro de la Verdad

Para garantizar la escalabilidad y la reutilización de los componentes en los ecosistemas B2B y B2C, impulsé el uso de **Storybook** como nuestro entorno de validación atómica. Mi razonamiento era claro: antes de que un componente se integrara en la aplicación principal, debía demostrar que podía "sobrevivir" de forma aislada.

Participé activamente en discusiones técnicas sobre cómo estructurar estos componentes en código. No se trataba solo de que se vieran igual que en Figma, sino de que fueran modulares. Si el equipo de desarrollo de AsDeporte Network (B2B) necesitaba usar el mismo componente de tabla que el equipo B2C, el sistema debía permitirlo sin duplicar código. Esta consultoría técnica fue vital para evitar la acumulación de deuda técnica visual; cada componente aprobado en Storybook era un bloque de construcción blindado que podíamos replicar con total confianza en cualquier rincón del ecosistema digital de la marca.

#### El Ritmo del Movimiento: Microinteracciones en Código

Un sistema de diseño sin movimiento se siente rígido, casi artificial. Por ello, dediqué una parte significativa de mi soporte técnico a asegurar que las microinteracciones y animaciones que habíamos definido en los prototipos de alta fidelidad se tradujeran correctamente al código. El movimiento en AsDeporte no era decorativo; era funcional, diseñado para guiar el ojo del usuario y confirmar acciones.

*   **Traducción de Curvas y Tiempos:** Expliqué a los desarrolladores la lógica detrás de las curvas de *easing* y los tiempos de transición. Un modal de confirmación de pago no podía simplemente aparecer; debía entrar con un ritmo que transmitiera seguridad.
*   **Revisión en Entornos de Prueba:** Realicé comparativas constantes entre mis prototipos de Figma y la implementación real en el navegador. Si una transición se sentía "pesada" o inconsistente con el resto del sistema, ajustábamos los valores de CSS directamente en sesiones rápidas de revisión, asegurando que la experiencia táctil y visual fuera homogénea en toda la plataforma.

#### Proximidad Táctica: Soporte en Tiempo Real

La logística de este soporte no se basó en reuniones interminables, sino en una comunicación quirúrgica y constante. Slack se convirtió en mi mesa de diseño extendida. Establecimos un canal dedicado donde los desarrolladores podían enviarme capturas de pantalla o fragmentos de código cuando encontraban un conflicto entre la especificación y la realidad técnica.

> **Insight de Trinchera:** La disponibilidad inmediata del diseñador durante la fase de construcción es el mejor antídoto contra la frustración de ingeniería. Cuando un desarrollador se siente apoyado, se vuelve un guardán del diseño; cuando se siente ignorado, empieza a tomar atajos que destruyen la consistencia del sistema.

Incluso llegamos a realizar sesiones de *pair programming* para los componentes más complejos, como el tablero de resultados en tiempo real. Sentarme virtualmente con un desarrollador para ajustar espaciados, jerarquías tipográficas y sombras directamente en el inspector del navegador me permitió pulir detalles que nunca habrían quedado perfectos a través de un documento de especificaciones. Esta dinámica no solo aceleró el ciclo de entrega del MVP, sino que fortaleció un vínculo de confianza mutua que resultó fundamental para el éxito a largo plazo del Design System de AsDeporte.

**Próximo paso:**

A pesar de la intensidad de este soporte y de haber resuelto cientos de dudas en el camino, sabía que la verdadera prueba de fuego estaba por llegar. Una cosa es que los componentes funcionen aislados en Storybook y otra muy distinta es ver cómo se comportan cuando se integran masivamente en los flujos reales de la aplicación. Me preparé para iniciar la auditoría de calidad más rigurosa del proceso: el Design Review de los componentes ya integrados en código, donde cualquier pequeña grieta en la implementación que hubiera pasado desapercibida se haría evidente bajo la luz del entorno de producción.

### Parte 3: AUDITORÍA DE CALIDAD: DESIGN REVIEW DE COMPONENTES EN CÓDIGO

#### El rigor del píxel frente a la velocidad del código

La presión del lanzamiento del MVP de AsDeporte había generado una inercia de construcción frenética. Ingeniería estaba entregando componentes a un ritmo impresionante, pero mi instinto de **Product Designer** me advertía que la velocidad es, a menudo, la enemiga silenciosa de la consistencia. Una vez que el soporte inicial a los desarrolladores se estabilizó, supe que mi rol debía evolucionar de inmediato: pasé de ser un facilitador que resolvía dudas en Slack a convertirme en un auditor forense. No podía permitir que la primera versión de nuestra plataforma saliera con "cicatrices" visuales o inconsistencias técnicas que luego se convertirían en deuda de diseño inmanejable.

La confianza que había construido con el equipo de ingeniería se basaba en la transparencia, pero la excelencia del producto final dependía de una verificación implacable. Establecí un protocolo de **Design Review** que no buscaba señalar errores, sino garantizar que la "Fuente de Verdad" que habíamos definido en Figma se reflejara con exactitud matemática en el entorno de ejecución. Sabía que si no detectábamos las grietas en la implementación de los átomos y moléculas ahora, estas se amplificarían exponencialmente cuando los componentes se inyectaran de forma masiva en los flujos complejos de la aplicación B2C y B2B.

#### La sala de disección: Auditoría en Storybook y Staging

Mi primera maniobra táctica fue alejarme de la interfaz completa de la aplicación y centrarme en el laboratorio: **Storybook**. Mi razonamiento era claro: revisar un componente dentro de una pantalla compleja es como intentar diagnosticar una pieza de motor con el coche en marcha; hay demasiado ruido visual y dependencias de datos que pueden ocultar errores de renderizado. Necesitaba ver cada elemento en aislamiento total.

Navegué por la arquitectura de carpetas de Storybook, contrastando cada entrada con nuestra librería de componentes. Este proceso me permitió verificar la existencia y el comportamiento independiente de cada átomo antes de su integración.

*   **Aislamiento de variables:** En Storybook, pude manipular las *props* de los componentes para ver cómo reaccionaban a diferentes longitudes de texto o estados de carga sin esperar a que el backend respondiera.
*   **Contraste con la Fuente de Verdad:** Mantenía Figma en mi monitor principal y Storybook en el secundario. Si el botón de "Ver Resultados" en Figma tenía un radio de borde de 8px, no aceptaba nada que no fuera exactamente eso en el código.
*   **Entorno de Staging:** Una vez validados en aislamiento, pasé al entorno de Staging para observar los componentes "en libertad". Aquí, el foco cambió hacia cómo los componentes convivían entre sí, asegurando que los márgenes colapsables y las jerarquías de profundidad (z-index) funcionaran según lo previsto en el contexto real de la aplicación.

> **Insight de Seniority:** La revisión en aislamiento es la única forma de garantizar que un sistema de diseño sea realmente escalable. Si un componente solo se ve bien dentro de una pantalla específica, no es un componente del sistema; es un parche. El rigor en Storybook es lo que permite que el sistema sobreviva a futuros rediseños de flujos.

#### Inspección forense: El CSS bajo el microscopio

Para la verificación de la precisión visual, dejé de confiar en mi ojo —por muy entrenado que estuviera— y empecé a confiar en los datos. Utilicé las herramientas de inspección del navegador con una mentalidad casi obsesiva, analizando las propiedades CSS de cada elemento implementado. Mi objetivo era asegurar que los **Design Tokens** que habíamos definido (colores, tipografía, espaciados) se estuvieran inyectando correctamente a través de las variables del sistema.

Ejecuté una comparación técnica exhaustiva centrada en cuatro pilares críticos:

1.  **Geometría y Espaciado:** Revisé los *paddings* y *margins* internos. Descubrí, por ejemplo, que en el componente de "Card de Evento", el espaciado entre la imagen y el título era de 14px en código, cuando el sistema dictaba un paso de nuestra escala de 16px (4 unidades de 4px). Esta desviación de 2px, aunque sutil, rompía la armonía visual de la retícula.
2.  **Arquitectura Tipográfica:** No solo verifiqué que la fuente fuera la correcta, sino que audité el `line-height` y el `letter-spacing`. En las etiquetas de "Categoría", el interlineado estaba por defecto, lo que hacía que los textos largos se vieran apretados. Ajusté los valores en el inspector para demostrar al desarrollador cómo el cumplimiento del token de Figma mejoraba drásticamente la legibilidad.
3.  **Cromatismo y Sombras:** Validé que los colores hexadecimales coincidieran con nuestra paleta oficial de AsDeporte. Presté especial atención a las `box-shadows`. Las sombras en CSS suelen ser más duras que en Figma si no se configuran con cuidado; audité los valores de difusión (*blur*) y opacidad para asegurar que la elevación de los modales transmitiera la profundidad deseada sin ensuciar la interfaz.
4.  **Bordes y Remates:** Verifiqué que los `border-radius` fueran consistentes. Encontramos que algunos inputs tenían esquinas de 4px mientras que los botones tenían 8px, una inconsistencia que restaba profesionalismo a la marca y que corregimos alineando todo al estándar del sistema.

#### Stress-testing de interacción y estados dinámicos

Un sistema de diseño no es una naturaleza muerta; es un organismo que reacciona. Mi siguiente paso fue realizar un "stress-testing" de los estados de interacción de cada componente. Basándome en el protocolo de mantenimiento, verifiqué manualmente que cada pieza de la interfaz respondiera correctamente a las acciones del usuario.

*   **Estados de Retroalimentación:** Probé sistemáticamente los estados *hover*, *active*, *focus* y *disabled*. Fue crítico validar que el estado deshabilitado de los botones de inscripción no solo fuera visualmente claro, sino que realmente bloqueara la interacción, evitando clics accidentales en procesos de pago.
*   **Gestión de Errores:** Introduje datos erróneos en los formularios para validar la aparición de los estados de error. Verifiqué que el color rojo de alerta fuera el definido en el sistema y que los mensajes de ayuda no desplazaran otros elementos de forma brusca.
*   **Fluidez de Movimiento:** Audité las transiciones y microinteracciones. En el menú lateral, noté que la animación de apertura era lineal y demasiado lenta. Ajusté el *easing* a un `cubic-bezier` más dinámico que reflejara la energía de AsDeporte, transformando una transición mecánica en una experiencia fluida y deportiva.

Este nivel de detalle en la interacción es lo que separa a una plataforma funcional de una plataforma premium. Si un botón "se siente" pesado o lento al reaccionar, la percepción de calidad del usuario sobre toda la marca AsDeporte disminuye.

#### Responsividad: La flexibilidad del sistema bajo presión

La verdadera prueba de fuego para los componentes fue la adaptabilidad. Utilicé el modo responsivo del navegador y dispositivos físicos para estresar la flexibilidad de cada elemento a través de los diferentes *breakpoints* definidos.

Narra cómo verifiqué que los componentes complejos, como las tablas de resultados de competencias o los modales de registro, se adaptaran sin perder legibilidad. En las tablas, por ejemplo, audité que las columnas críticas se mantuvieran visibles y que el desplazamiento horizontal en móviles fuera intuitivo. Me aseguré de que los elementos táctiles, como los botones de "Inscribirse ahora", mantuvieran un área de interacción mínima de 44x44px, garantizando que un atleta con los dedos húmedos o cansados tras una carrera pudiera navegar la app sin frustración.

No se trataba solo de que el componente "cupiera" en la pantalla, sino de que su función se mantuviera intacta. Un componente de filtrado que funciona bien en desktop pero que oculta opciones críticas en móvil es un fallo del sistema que detecté y documenté para su corrección inmediata.

#### Auditoría de accesibilidad técnica: Inclusión desde el núcleo

Como guardián de la calidad, mi auditoría no podía ignorar la accesibilidad. Extraje del protocolo de mantenimiento la necesidad de validar los cimientos técnicos que permiten que AsDeporte sea inclusivo. Realicé una revisión forense de los elementos que el ojo no ve, pero que la tecnología asistiva requiere.

1.  **Navegación por Teclado:** Solté el mouse y navegué por los componentes clave usando exclusivamente la tecla `Tab`. Descubrí que en el flujo de registro, el indicador de foco desaparecía en ciertos campos de selección. Esto era un error crítico de accesibilidad que reporté de inmediato; el usuario debe saber siempre dónde está posicionado.
2.  **Roles y Atributos ARIA:** Inspeccioné el código para asegurar que los componentes complejos (como los acordeones de preguntas frecuentes o los selectores de talla) tuvieran los roles ARIA correctos. Validé que los estados de "expandido" o "colapsado" se comunicaran correctamente al árbol de accesibilidad del navegador.
3.  **Jerarquía de Etiquetas:** Verifiqué que los iconos y botones que no tenían texto visual contaran con `aria-labels` descriptivos. Un icono de "carrito" sin texto alternativo es un callejón sin salida para un usuario con discapacidad visual; me aseguré de que cada átomo del sistema tuviera su identidad semántica bien definida.

Esta fase de la auditoría reforzó la idea de que el Design System no es solo una cuestión de estética, sino de responsabilidad técnica y social.

#### Gestión de discrepancias y la Fuente de Verdad

Al finalizar esta auditoría forense, me encontré con un listado de discrepancias que requerían una gestión estratégica. Siguiendo el paso 4 de mi protocolo de mantenimiento, no me limité a reportar errores, sino que analicé la raíz de cada desviación.

En algunos casos, la discrepancia era un simple descuido de implementación que se corregía con un ticket en Jira. Sin embargo, en otros casos, descubrí que la limitación técnica de la librería de CSS que estaba usando ingeniería hacía imposible replicar exactamente un efecto de transparencia que yo había diseñado en Figma. En esos momentos, mi razonamiento senior entró en juego: en lugar de forzar una solución técnica ineficiente, decidí ajustar el diseño en Figma para que fuera técnicamente viable sin perder la esencia estética.

Esta mentalidad de "fuente única de verdad" es la que mantuvo el sistema vivo y sincronizado. Cada hallazgo en el código que resultaba en un cambio de diseño se documentaba y se comunicaba a todo el equipo, asegurando que la brecha entre lo que diseñamos y lo que construimos fuera siempre igual a cero.

**Próximo paso:**

Tras haber desnudado cada componente y haber identificado las grietas entre el diseño y el código, me enfrenté a una realidad inevitable: el sistema de diseño es un organismo que respira y, por lo tanto, muta. Las discrepancias halladas no eran solo errores, sino señales de que el sistema necesitaba evolucionar para sobrevivir al mundo real de la producción. Me preparé para liderar el proceso de actualización más complejo hasta la fecha, donde cada decisión de cambio debía ser pesada contra su impacto en la escalabilidad global de la plataforma.

### Parte 4: GESTIÓN DE DISCREPANCIAS Y EVOLUCIÓN DEL SISTEMA

#### Del diagnóstico a la gobernanza: el sistema como software vivo

Al terminar la auditoría de calidad que detallé en la fase anterior, me encontré con una realidad incómoda: tenía una lista exhaustiva de errores, pero carecía de un mecanismo para procesarlos sin que el sistema colapsara bajo su propio peso. Identificar que un botón tenía un *padding* incorrecto o que una sombra no se renderizaba bien era solo el síntoma; el problema real era que la "fuente de verdad" empezaba a fragmentarse. Entendí que un **Design System** no es un conjunto de activos estáticos, sino un software en sí mismo que requiere un ciclo de vida de mantenimiento correctivo y evolutivo.

Mi razonamiento en ese momento fue puramente estratégico: si permitía que estas discrepancias se acumularan, el sistema dejaría de ser una herramienta de eficiencia para convertirse en una fuente de deuda técnica y de diseño. No podíamos permitir que el equipo de ingeniería empezara a "parchear" soluciones por su cuenta. Necesitaba establecer un protocolo de arbitraje donde cada hallazgo se transformara en una acción documentada, asegurando que la escalabilidad del ecosistema de AsDeporte no se viera comprometida por la urgencia del día a día.

#### La disección forense: comparativa píxel a píxel

Para pasar del hallazgo a la resolución, inicié un proceso de **documentación forense de discrepancias**. No me limité a señalar lo que estaba mal; me senté a comparar, lado a lado, el componente en el entorno de *staging* contra la librería maestra en Figma. Utilicé las herramientas de inspección del navegador (Chrome DevTools) para desnudarlos visualmente: revisé los valores de CSS, los nombres de las variables y las jerarquías de los contenedores.

> El rigor en esta etapa es lo que separa a un sistema profesional de una simple guía de estilos. Si un token de color `#005596` (nuestro azul institucional) aparecía como un valor hexadecimal plano en el código en lugar de la variable `color-primary-base`, yo lo marcaba como una falla crítica de arquitectura, no solo estética.

Documenté cada "gap" con una precisión quirúrgica:
*   **Errores de espaciado:** Detecté dónde se estaban usando valores "mágicos" (hardcoded) en lugar de nuestros tokens de espaciado basados en la escala de 4px.
*   **Comportamientos erráticos:** Identifiqué microinteracciones en los campos de entrada de datos que no respetaban las curvas de aceleración (*easing*) que habíamos definido para la marca.
*   **Fallas de tokens:** Encontré componentes que, aunque se veían bien, no estaban vinculados a la librería de tokens, lo que rompería el sistema en caso de un futuro rebrand o cambio de tema.

Cada uno de estos hallazgos se transformó en un ticket específico en Jira. Me aseguré de que cada ticket incluyera una captura de pantalla de la implementación errónea, una referencia visual de cómo debía verse en Figma y, lo más importante, el enlace directo al componente maestro. Mi objetivo era eliminar cualquier sombra de duda para el desarrollador; el ticket debía ser una hoja de ruta inequívoca para la corrección.

#### El diálogo técnico: analizando la raíz del problema

Una vez documentadas las discrepancias, no las envié simplemente al "vacío" de Jira. Lideré sesiones de revisión técnica con el Lead Frontend para entender el **porqué** de cada desviación. Este paso fue vital para distinguir entre un descuido de implementación y una **limitación técnica real del framework**.

Recuerdo un caso específico con las sombras de las tarjetas en el ecosistema B2B. En Figma, habíamos diseñado una elevación sutil con múltiples capas de sombra para dar profundidad. Sin embargo, al implementarlo, el rendimiento en ciertos navegadores antiguos que algunos de nuestros clientes corporativos todavía usaban se veía afectado. Aquí es donde mi criterio senior tuvo que mediar: ¿forzábamos la implementación estética o simplificábamos el sistema para garantizar el rendimiento?

Decidí que la usabilidad y el rendimiento primaban sobre la fidelidad absoluta del diseño original. Acordamos refactorizar el token de sombra a una versión más ligera y compatible. Este tipo de discusiones me permitieron:
1.  **Detectar ambigüedades:** Si tres desarrolladores diferentes interpretaban mal el estado de "error" de un componente, el problema no era de ellos, sino de mi documentación. Asumí la responsabilidad de clarificar esos puntos.
2.  **Validar la viabilidad:** Aprendí a ajustar mis propuestas de diseño a las restricciones de renderizado del framework de ingeniería, evitando frustraciones futuras.
3.  **Fortalecer la confianza:** Al escuchar sus limitaciones, transformé la relación de "diseño vs. desarrollo" en una colaboración de "producto contra el problema".

#### Refactorización en Figma: sincronizando la fuente de verdad

Con los acuerdos técnicos en la mano, regresé a mi "taller": la librería de componentes en Figma. El mantenimiento del sistema exigía que cualquier cambio acordado en el código se reflejara instantáneamente en el diseño. No podía haber un divorcio entre lo que los diseñadores usaban para crear nuevas pantallas y lo que realmente existía en producción.

Me sumergí en una fase de **refactorización de componentes maestros**. Ajusté variantes, actualicé propiedades de componentes (usando *Boolean, Instance Swap* y *Text properties* de Figma) y me aseguré de que la nomenclatura de las capas coincidiera con la estructura de los objetos en el código. Si ingeniería había decidido llamar a una propiedad `isCompact` en lugar de `size=small`, yo cambiaba la variante en Figma para hablar el mismo idioma.

Además, actualicé la documentación técnica incrustada en Figma. Añadí notas sobre:
*   **Instrucciones de uso actualizadas:** Especificando cuándo usar la nueva versión simplificada de la sombra.
*   **Estados de error y accesibilidad:** Documentando cómo debía comportarse el lector de pantalla tras la corrección de un bug de navegación por teclado que detectamos en la fase de revisión.
*   **Restricciones de crecimiento:** Definiendo cómo debía comportarse un componente de tabla cuando el contenido B2B excediera los caracteres previstos.

Esta disciplina de "limpieza" garantizó que los nuevos flujos que el equipo de diseño empezara a construir no heredaran errores del pasado. La librería de Figma dejó de ser una promesa para convertirse en un reflejo fiel de la realidad técnica.

#### Gobernanza de la evolución: el filtro de los nuevos componentes

Un sistema de diseño que no crece, muere; pero un sistema que crece sin control, se vuelve ingobernable. Durante el mantenimiento, empezaron a llegar solicitudes de "nuevos componentes" para casos de uso específicos que no habíamos previsto en el MVP. Mi rol aquí evolucionó al de un **curador de sistema**.

Cada vez que un diseñador o un Product Manager me pedía un nuevo tipo de botón o un carrusel específico, aplicaba un filtro riguroso de evaluación:
1.  **¿Es sistémico o es un "one-off"?** Si la necesidad solo aparecía en una pantalla muy específica, rechazaba la creación del componente global y sugería una solución local para no "contaminar" la librería central.
2.  **¿Puede resolverse con una variante?** Muchas veces, lo que pedían como un componente nuevo era simplemente un estado adicional de algo que ya existía. Yo me encargaba de diseñar esa variante, prototiparla y validar su consistencia visual con el resto del sistema antes de pasarla a desarrollo.
3.  **¿Mantiene la integridad estructural?** Me aseguraba de que cualquier pieza nueva respetara los cimientos (grids, colores, tipografía) ya establecidos.

Este flujo de trabajo permitió que el sistema de AsDeporte evolucionara de forma orgánica pero controlada. No estábamos construyendo piezas sueltas; estábamos expandiendo un lenguaje.

#### Liderazgo a través de la cultura de componentes

Mirando hacia atrás, este proceso de mantenimiento no fue una carga administrativa, sino un ejercicio de liderazgo. Al gestionar las discrepancias con este nivel de rigor, logré algo más importante que una interfaz perfecta: fomenté una **cultura de "pensar en componentes"** en toda la organización.

Evangelizar el sistema significaba demostrarle al equipo que el esfuerzo extra de documentar un bug o actualizar una librería pagaba dividendos en velocidad y consistencia semanas después. Logré que los desarrolladores dejaran de ver el Design System como una imposición estética y empezaran a verlo como una herramienta que les ahorraba tiempo al no tener que reinventar la rueda en cada ticket.

> La verdadera victoria de un Senior Product Designer en esta etapa no es tener un Figma bonito; es lograr que el equipo de ingeniería defienda la integridad del sistema tanto como tú lo haces.

Esta mentalidad de mejora continua y control riguroso de la fuente de verdad fue lo que blindó al producto contra la fragmentación visual. Sin embargo, de nada servía tener el sistema actualizado si nadie fuera de nuestro círculo técnico inmediato sabía que los cambios habían ocurrido.

**Próximo paso:**

Una vez que logré estabilizar la relación entre el diseño y el código y establecí un flujo claro para las actualizaciones, me enfrenté a un nuevo desafío: la invisibilidad de nuestro trabajo. Teníamos una fuente de verdad poderosa y sincronizada, pero el resto de los diseñadores y los nuevos desarrolladores seguían consultando versiones obsoletas o ignorando las nuevas capacidades que habíamos construido. Me di cuenta de que el sistema solo sería realmente efectivo si lograba transformarlo en una entidad comunicativa y transparente, lo que me llevó a plantear la necesidad de una documentación viva y un protocolo de comunicación que mantuviera a toda la organización alineada en tiempo real.

### Parte 5: DOCUMENTACIÓN VIVA Y COMUNICACIÓN DE ACTUALIZACIONES

#### El riesgo de la invisibilidad técnica

La librería de Figma estaba impecable y los componentes en el repositorio de Git estaban sincronizados, pero en los canales de comunicación seguían apareciendo capturas de pantalla con botones que habíamos retirado hacía dos semanas. Me di cuenta de que el sistema estaba corriendo el riesgo de convertirse en un "museo de diseño": un lugar hermoso que todos respetan pero que nadie visita para resolver sus problemas cotidianos. Como responsable del producto, entendí que una **Source of Truth** silenciosa es, en la práctica, una fuente inexistente. La estabilidad técnica que habíamos logrado en la fase anterior era solo la mitad de la batalla; la otra mitad era transformar ese repositorio en una entidad viva, transparente y, sobre todo, comunicativa.

Mi razonamiento fue pragmático: si un diseñador o un desarrollador tiene que dedicar más de treinta segundos a buscar si un componente ha cambiado, simplemente usará lo que ya tiene a mano, rompiendo la consistencia que tanto nos costó construir. El desafío dejó de ser la arquitectura de los componentes para convertirse en la gestión del conocimiento. Tenía que asegurar que cada bit de información nueva fluyera hacia los equipos de Diseño, Desarrollo Frontend y QA sin fricciones, eliminando los silos operativos que empezaban a formarse tras el handoff inicial.

#### La ejecución de la documentación viva

Para cumplir con el rigor que me propuse en el protocolo de mantenimiento del sistema, transformé la tarea de documentar en un proceso iterativo y no en un evento final. No se trataba de escribir manuales estáticos, sino de mantener una **Documentación Viva** donde cada ajuste en el código se reflejara en el diseño y viceversa. Utilicé herramientas de documentación que permitían conectar directamente nuestra **Figma Library** con **Storybook**, asegurando que el lenguaje visual y el lenguaje de programación fueran espejos exactos.

Cada vez que integrábamos un nuevo componente o actualizábamos uno existente, mi proceso seguía una secuencia forense que documenté paso a paso:

*   **Sincronización de Especificaciones:** Si ajustábamos un *Design Token* de color para mejorar el contraste, actualizaba la especificación en la librería global y verificaba que el cambio se propagara a los estilos de Figma. Simultáneamente, me aseguraba de que la documentación técnica incluyera el valor hexadecimal exacto y su nombre semántico en el código.
*   **Definición de Estados y Comportamientos:** No permití que ningún componente se considerara "terminado" sin documentar sus estados de interacción: *hover, active, disabled, focus* y *error*. Esto fue vital para que los desarrolladores no tuvieran que adivinar cómo debía reaccionar un botón ante una validación fallida.
*   **Blindaje de Accesibilidad:** Integré directamente en la documentación las especificaciones de accesibilidad que habíamos acordado. Esto incluía la definición de los **ARIA roles**, el orden de tabulación lógica para la navegación por teclado y los textos alternativos por defecto para los iconos decorativos. Mi objetivo era que la accesibilidad no fuera un "extra" al final del desarrollo, sino una propiedad intrínseca del componente desde su consulta inicial.

Este nivel de detalle obsesivo en la documentación permitió que el sistema se explicara por sí mismo. Si un desarrollador tenía dudas sobre una transición, no necesitaba escribirme; la respuesta estaba en la documentación viva, con ejemplos interactivos que podía probar en tiempo real.

#### El protocolo de comunicación multidisciplinar

Documentar bien es inútil si nadie sabe que la información ha cambiado. Por eso, implementé un protocolo de comunicación proactiva que involucraba a todos los actores del ecosistema AsDeporte. Basándome en el proceso de mantenimiento que definí para la colaboración con ingeniería, establecí que cada actualización del sistema debía ser comunicada con un "por qué" estratégico, no solo con un "qué".

Involucré de manera agresiva al equipo de **QA (Quality Assurance)**. Tradicionalmente, los testers comparan el código contra los mockups estáticos, lo cual es una receta para el desastre en un sistema escalable. Les pedí que cambiaran su modelo mental: sus planes de prueba ahora debían basarse en la documentación del sistema de diseño. Si un componente de "Card" en la app no coincidía con las medidas y comportamientos definidos en nuestra documentación viva, se consideraba un bug de sistema, independientemente de lo que dijera un mockup específico. Esta maniobra elevó el estándar de calidad y obligó a todo el equipo a "pensar en componentes".

Para los desarrolladores frontend, la comunicación se centró en la precisión del **Git repository**. Cada vez que una nueva versión de la librería de componentes en código era publicada, yo me aseguraba de que el anuncio incluyera el impacto directo en sus tareas actuales. Mi meta era eliminar la incertidumbre: que supieran exactamente qué versión del paquete de componentes era la vigente y qué cambios introducía para evitar regresiones visuales en el producto.

#### Gobernanza y directrices de uso: El manual de instrucciones estratégico

Uno de los mayores aprendizajes como Senior fue entender que los componentes son herramientas, y como toda herramienta, pueden usarse mal. Para prevenir la fragmentación, dediqué una parte considerable de mi tiempo a redactar directrices claras de gobernanza. No me limité a describir el aspecto visual; definí el "cuándo" y el "cómo" de cada elemento.

> Un sistema de diseño sin directrices de uso es solo un kit de piezas sueltas. La gobernanza es lo que transforma esas piezas en una experiencia coherente.

Estructuré estas directrices bajo una lógica de escalabilidad:
*   **Variaciones y Restricciones:** Documenté por qué un componente tenía tres tamaños y bajo qué condiciones técnicas se debía usar cada uno. Por ejemplo, definí que el "Primary Button" solo podía aparecer una vez por pantalla para mantener la jerarquía visual, una regla que ahorró horas de discusiones en las revisiones de diseño.
*   **Lógica de Interacción:** Describí los comportamientos esperados en diferentes dispositivos. Si un menú desplegable se convertía en un *bottom sheet* en móviles, esa lógica debía estar documentada y justificada técnicamente para evitar que ingeniería implementara soluciones inconsistentes.
*   **Casos de Borde:** Me esforcé por documentar qué hacer cuando el contenido superaba los límites del diseño (textos largos, imágenes faltantes). Esto redujo drásticamente el número de tickets de soporte técnico relacionados con la interfaz.

#### El pulso del sistema: Canales de anuncio y feedback

Finalmente, para que el sistema tuviera "pulso", configuré un canal dedicado en Slack que funcionaba como el **Changelog** oficial del proyecto. No permitía mensajes genéricos; cada actualización seguía una estructura rígida que yo mismo supervisaba: resumen del cambio, enlace directo a la documentación en Storybook/Figma, impacto esperado y etiquetas de prioridad.

Este canal no era unidireccional. Lo utilicé para fomentar una cultura de diseño sistémico donde cualquier miembro del equipo podía reportar una inconsistencia o proponer una mejora. Si un desarrollador encontraba que un componente era difícil de implementar en un caso específico, ese feedback alimentaba la siguiente actualización del sistema. Esta transparencia generó una confianza inédita entre departamentos: el sistema dejó de ser "lo que diseño impone" para convertirse en "la herramienta que todos construimos".

Al final de este proceso de comunicación y documentación, mi rol había mutado. Ya no pasaba el día moviendo píxeles; me había convertido en un gestor de conocimiento. El éxito se medía en la autonomía del equipo: ver a un desarrollador discutir una implementación basándose en las directrices que yo había redactado, sin necesidad de mi intervención directa, fue la prueba de que el sistema estaba realmente vivo.

**Próximo paso:**

A pesar de tener una documentación impecable y canales de comunicación activos, pronto noté que la inercia de los viejos hábitos seguía presente en algunos rincones de la organización. Teníamos el mapa y las herramientas, pero aún nos faltaba que todo el equipo, desde los stakeholders hasta los nuevos integrantes, adoptara el "pensamiento sistémico" como una filosofía de trabajo natural. Me di cuenta de que el siguiente gran desafío no era técnico ni informativo, sino cultural: necesitaba convertir el Design System en una causa común a través de una estrategia de evangelización que asegurara su supervivencia a largo plazo.

### Parte 6: EVANGELIZACIÓN Y CULTURA DEL SISTEMA DE DISEÑO

#### El diseño no termina en Figma: la batalla por la adopción

Tenía frente a mí una documentación técnica impecable, una librería de Figma organizada por átomos y moléculas, y un Storybook que reflejaba con precisión cada estado de interacción. Sin embargo, sabía que nada de eso garantizaba el éxito. En mis años recorriendo este camino, he aprendido que un Design System que no se usa es, en esencia, un cementerio de componentes caros. La verdadera prueba de fuego no estaba en la perfección de los pixeles, sino en la mente de mis compañeros. La inercia de los viejos hábitos es poderosa: la tentación de un diseñador por crear un botón "único" para un caso específico o la urgencia de un desarrollador por escribir CSS *ad-hoc* para terminar un ticket son los enemigos naturales de la consistencia.

Comprendí que mi rol debía mutar drásticamente. Había pasado meses siendo el arquitecto y el artesano de este ecosistema, pero ahora el proyecto me exigía convertirme en un evangelizador de procesos. No se trataba solo de entregar activos, sino de vender una nueva forma de trabajar. Si no lograba que el equipo viera el sistema como una herramienta de liberación creativa y no como una restricción, el ecosistema de AsDeporte colapsaría bajo el peso de su propia complejidad en menos de seis meses. Mi razonamiento fue estratégico: debía demostrar que la consistencia no era un capricho estético, sino el motor de la eficiencia operativa y la escalabilidad del producto.

#### Rompiendo la inercia del diseño ad-hoc

Inicié lo que llamé la "cruzada de promoción", una serie de intervenciones directas en las dinámicas de trabajo de los equipos de diseño y desarrollo. Mi primer objetivo fue despejar la idea de que el sistema era un ente rígido. Utilicé cada sesión de revisión para destacar los beneficios tangibles que ya estábamos obteniendo:

*   **Velocidad de entrega:** Mostré cómo podíamos ensamblar flujos complejos en una fracción del tiempo habitual utilizando las librerías compartidas.
*   **Consistencia visual:** Expuse ejemplos de discrepancias pasadas que habían generado confusión en los atletas de AsDeporte y cómo los nuevos componentes blindaban la experiencia contra esos errores.
*   **Reducción de la deuda técnica:** Articulé con los líderes de ingeniería cómo el uso de componentes de código probados en Storybook eliminaba la necesidad de revisiones de QA repetitivas sobre elementos básicos.

Incentivé a los diseñadores a abandonar la creación de elementos aislados. Cuando alguien proponía una solución fuera del sistema, mi respuesta nunca era un "no" rotundo, sino un cuestionamiento basado en el sistema: "¿Cómo encaja esto en nuestra jerarquía actual?", "¿Es una nueva variante o un patrón que no habíamos mapeado?". Esta labor de mentoría fue vital para evitar que el sistema se degradara prematuramente. Logré que los desarrolladores empezaran a ver el repositorio de código y Storybook como su primera parada antes de escribir una sola línea de estilo nueva, transformando el flujo de trabajo en un proceso de ensamblaje inteligente.

#### El cambio de paradigma: pensar en sistemas, no en páginas

Liderar el cambio hacia el **pensamiento en componentes** fue quizás el reto intelectual más profundo de esta fase. Tradicionalmente, los equipos diseñan "páginas" o "pantallas", viendo el producto como una secuencia de vistas estáticas. Mi misión fue romper esa estructura mental para que empezaran a ver el producto como un conjunto de patrones reutilizables y escalables.

Basándome en los principios de **Atomic Design**, mantuve discusiones técnicas recurrentes para estructurar los componentes de forma que fueran lo suficientemente flexibles para el ecosistema B2C (atletas) y el B2B (organizadores). No diseñábamos un "formulario de registro"; diseñábamos un sistema de *inputs*, etiquetas y mensajes de validación que se comportaran de forma predecible en cualquier contexto. Esta mentalidad de eficiencia obligaba a cada miembro del equipo a justificar la creación de cualquier nuevo átomo. Si el sistema global no lo necesitaba, no se creaba. Esta disciplina no solo protegió la integridad visual, sino que aseguró que el producto pudiera crecer sin volverse inmanejable para el equipo de ingeniería.

#### Talleres de inmersión: de la teoría a la implementación real

Para cerrar la brecha de conocimiento, ejecuté una serie de workshops de formación técnica que fueron fundamentales para democratizar el uso del sistema. No quería ser el único que supiera dónde estaba la información; necesitaba que la autonomía fuera la norma.

1.  **Navegación en la Fuente de Verdad:** Organicé sesiones prácticas donde enseñé a los equipos a triangular la información entre Figma, Storybook y la documentación en Zeroheight. Mostré cómo una decisión de diseño en la librería se traducía en un **Design Token** específico en el código, y cómo rastrear esa trazabilidad eliminaba cualquier ambigüedad en el handoff.
2.  **Sesiones de Pair Programming y Design Reviews:** Me senté con los desarrolladores frontend para revisar implementaciones en tiempo real. No solo revisábamos si el color era el correcto, sino si el comportamiento de la interacción y la accesibilidad (roles ARIA, estados de foco) cumplían con lo que habíamos definido. Estas sesiones no eran auditorías, sino momentos de transferencia de conocimiento donde yo aprendía sobre las limitaciones del código y ellos sobre la intención detrás de cada microinteracción.

Estas actividades eliminaron la fricción de entrada. El sistema dejó de ser un "documento que hay que leer" para convertirse en un entorno donde todos sabían operar. Al empoderar a los equipos, reduje drásticamente las consultas de soporte que recibía diariamente, permitiéndome enfocarme en la evolución estratégica del sistema.

#### El sistema como organismo vivo: el ciclo de retroalimentación

Un sistema de diseño que no escucha a sus usuarios está condenado a la obsolescencia. Por ello, establecí mecanismos formales para capturar feedback constante de quienes usaban la herramienta día a día. Utilicé las discrepancias encontradas durante las revisiones de código no como errores de ejecución, sino como oportunidades de aprendizaje y diagnóstico.

Si un componente era ignorado sistemáticamente por los desarrolladores, investigaba el porqué. A menudo descubría que la especificación era demasiado compleja o que el componente en Figma no contemplaba una restricción técnica real. Gestioné este flujo de feedback transformando las sugerencias en tickets de mejora o nuevas variantes. Este ciclo de mantenimiento colaborativo aseguró que el sistema evolucionara al ritmo de las necesidades reales del producto AsDeporte. Al final, el éxito se manifestó cuando las propuestas de actualización empezaron a venir del equipo de ingeniería: "He notado que este patrón se repite en tres flujos, ¿deberíamos convertirlo en un componente del sistema?". En ese momento, supe que el sistema ya no era mío; era de todos.

> **Insight Senior:** La madurez de un Design System se alcanza cuando el diseñador deja de ser el guardián de la puerta y se convierte en el facilitador de una conversación técnica continua. El valor real no está en prohibir la innovación, sino en canalizarla a través de un lenguaje común que potencie la velocidad del equipo sin sacrificar la calidad.

#### Reflexión final:

Esta etapa de evangelización transformó radicalmente la dinámica del equipo de AsDeporte. El Design System dejó de ser un proyecto de diseño para convertirse en nuestro lenguaje común, reduciendo drásticamente el tiempo perdido en discusiones estéticas triviales y permitiendo que nos enfocáramos en resolver problemas de experiencia de usuario realmente complejos. Aprendí que la cultura es el componente más difícil de diseñar, pero también el más importante para la supervivencia de cualquier producto a gran escala. Al final, logramos que la consistencia no fuera una imposición, sino una consecuencia natural de un flujo de trabajo optimizado que benefició tanto al negocio como a la comunidad de deportistas que servimos.