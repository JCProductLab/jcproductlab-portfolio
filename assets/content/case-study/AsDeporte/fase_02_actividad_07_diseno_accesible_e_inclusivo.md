# Fase 2: Ideación y Diseño

## Actividad 7: actividad_07_diseno_accesible_e_inclusivo

### Parte 1: AUDITORÍA FORENSE: LA LENTE DE LA ACCESIBILIDAD EN LOS ARTEFACTOS PREVIOS

#### La trampa de la perfección visual

Miraba los 37 mockups finales en Figma y, por un momento, caí en la trampa de la complacencia estética. Todo se veía impecable: la paleta de colores vibraba con la energía de AsDeporte, la tipografía Montserrat comunicaba fuerza y los componentes del UI Kit encajaban con una precisión milimétrica. Sin embargo, como diseñador, sabía que esa "perfección" era frágil. Tenía frente a mí un diseño optimizado para un usuario ideal, con visión perfecta, habilidades motoras plenas y un dispositivo de última generación. Pero la realidad de la comunidad de atletas es radicalmente distinta.

La transición hacia esta auditoría no fue un trámite burocrático; fue un acto de responsabilidad técnica y ética. Entendí que si no sometía mi propio trabajo a un escrutinio forense bajo la lente de la accesibilidad, estaba diseñando barreras, no soluciones. Mi razonamiento fue claro: la accesibilidad no es un "añadido" que se pega al final del proceso, sino una capa estructural de calidad que define si el producto es verdaderamente universal o simplemente elitista. Decidí que debíamos alcanzar, como mínimo, el **nivel AA de las WCAG 2.1**. No por cumplimiento legal, sino para asegurar que un atleta con baja visión tratando de inscribirse bajo la luz directa del sol, o un usuario con temblores motores intentando usar la app en movimiento, tuvieran la misma oportunidad de éxito que cualquier otro.

#### Diseccionando el UI Kit: El análisis de los componentes atómicos

Empecé por lo más pequeño. Desglosé el UI Kit componente por componente, alejándome de la composición de las pantallas para centrarme en la anatomía de los elementos interactivos. Mi objetivo en este primer paso fue identificar "gaps" de accesibilidad que hubieran pasado desapercibidos durante las fases de diseño visual.

Inspeccioné cada botón, cada enlace y cada campo de formulario. Me pregunté: ¿Es este botón visualmente distinguible para alguien que no percibe el color de la misma forma que yo? ¿Tienen los campos de entrada un estado de foco lo suficientemente claro? Descubrí que algunos de nuestros elementos interactivos confiaban demasiado en sutiles cambios de sombra o bordes finos que, en una auditoría técnica, resultaban insuficientes. Esta revisión no fue superficial; buscaba barreras físicas y cognitivas. Sabía que si los componentes atómicos fallaban en accesibilidad, cualquier pantalla construida con ellos heredaría ese error, multiplicando la deuda técnica antes de llegar a desarrollo. Este análisis sentó las bases para transformar nuestro Design System en una guía inclusiva que no solo dictara cómo se ven las cosas, sino cómo deben funcionar para todos.

#### El escrutinio cromático: Más allá de la estética de marca

Someter la paleta de colores de AsDeporte a una prueba de contraste rigurosa fue uno de los momentos más reveladores del proceso. La identidad de la marca es potente, pero la potencia visual a menudo entra en conflicto con la legibilidad. Utilicé herramientas de medición para evaluar la relación de contraste entre el texto y sus fondos, así como de los elementos gráficos esenciales.

No me limité a los colores principales. Analicé sistemáticamente los estados de interacción: **hover, active y disabled**. Es un error común olvidar que un botón "desactivado" también debe ser legible, o que el cambio de color al pasar el cursor debe ser perceptible para usuarios con daltonismo. Mi enfoque fue pragmático: si un texto no alcanzaba el ratio de 4.5:1 exigido por las WCAG para texto normal, o 3:1 para texto grande y componentes de interfaz, el diseño estaba fallando. Consideré especialmente el contexto de uso del atleta: el uso del móvil en exteriores. Una interfaz que apenas cumple con el contraste en una oficina con luz controlada se vuelve invisible bajo el sol del mediodía durante un maratón. Esta auditoría me permitió detectar combinaciones de color que, aunque elegantes, eran peligrosamente excluyentes.

#### La infraestructura de la lectura: Legibilidad y jerarquía tipográfica

La tipografía no es solo una elección de estilo; es la infraestructura de la información. En este paso, analicé la jerarquía visual y el tamaño mínimo de texto en todos los puntos de contacto, especialmente en móvil. Revisé cómo se comportaba la Montserrat en tamaños reducidos, buscando asegurar que no perdiéramos claridad en las notas al pie o en las etiquetas de los formularios.

Evalué con detenimiento el interlineado y el espaciado entre caracteres. Un texto demasiado apretado genera fatiga visual y es una barrera insalvable para usuarios con discapacidades cognitivas o dislexia. Mi razonamiento se apoyó en los hallazgos previos del equipo de Soporte: tenemos una base de usuarios con una alfabetización digital muy diversa. Para un atleta que no está familiarizado con las convenciones de las apps modernas, la tipografía debe trabajar el doble para explicar la interfaz. Si la jerarquía visual no es obvia, el usuario se pierde. Confirmé que los encabezados no solo fueran más grandes, sino que estuvieran estructurados de forma que permitieran un escaneo rápido, reduciendo la carga cognitiva necesaria para procesar la información de una carrera o un reglamento.

#### La precisión del toque: Auditoría de Touch Targets y ergonomía móvil

En el entorno móvil, el diseño es una cuestión de espacio físico. Realicé una auditoría exhaustiva de los **Touch Targets** y el espaciado en la interfaz. Verifiqué que cada elemento seleccionable —botones de inscripción, iconos de redes sociales, checkboxes de términos y condiciones— tuviera un área de interacción de al menos 44x44 píxeles.

Esta verificación es crítica para la inclusión motora. Pensé en usuarios con dificultades de precisión, pero también en el contexto "on-the-go" de AsDeporte. Un atleta con las manos sudadas, usando el móvil mientras camina por una zona de recuperación, no puede permitirse el error de presionar el botón equivocado porque los elementos están demasiado juntos. Evalué el espaciado entre elementos interactivos para evitar lo que llamamos "toques accidentales". Si dos acciones opuestas (como "Cancelar" y "Confirmar") están pegadas, el diseño está induciendo al error. Esta auditoría física me permitió identificar zonas de la interfaz que necesitaban "aire" para ser operables por cualquier persona, independientemente del tamaño de sus dedos o su precisión motriz.

#### Navegación sin ratón: La lógica del teclado y los lectores de pantalla

Para auditar la estructura lógica, decidí "apagar" mi visión del diseño visual y centrarme en la arquitectura técnica. Retrocedí a las especificaciones de interacción y a los flujos de usuario para evaluar el orden de tabulación. Me pregunté: ¿Qué pasa si un usuario no usa un ratón? ¿Es el camino a través de la interfaz lógico y predecible?

Analicé la jerarquía de encabezados (H1, H2, H3) para asegurar que un lector de pantalla pudiera interpretar la página de manera coherente. Si el orden de lectura visual no coincide con el orden del código, la experiencia para un usuario ciego es un caos absoluto. Esta parte de la auditoría fue un ejercicio de empatía técnica. Descubrí puntos donde la navegación se volvía un callejón sin salida o donde el foco del teclado desaparecía, dejando al usuario perdido en la interfaz. Mi objetivo fue garantizar que la Arquitectura de Información que definimos meses atrás se tradujera en una estructura técnica accesible, permitiendo que el contenido fuera consumible de forma lineal y lógica.

#### El arsenal de validación: Herramientas y métricas objetivas

Durante toda esta auditoría, mi criterio como diseñador estuvo respaldado por datos objetivos. Integré en mi flujo de trabajo herramientas como **WebAIM Contrast Checker** y el plugin **Stark** directamente en Figma. Estas tecnologías me permitieron obtener métricas precisas sobre el cumplimiento de los estándares WCAG 2.1 AA.

No usé estas herramientas para que tomaran decisiones por mí, sino para validar mis hipótesis. Por ejemplo, cuando sospechaba que un gris sobre blanco era demasiado claro, Stark me confirmaba el ratio exacto (digamos, un insuficiente 2.8:1). Este enfoque técnico eliminó la subjetividad de la discusión sobre accesibilidad. Ya no se trataba de si un color me gustaba o no, sino de si cumplía con el estándar de calidad que habíamos prometido a AsDeporte. El uso de estas herramientas me permitió documentar con precisión cada fallo detectado, creando un inventario de "gaps" que serviría de hoja de ruta para las correcciones necesarias antes del handoff final.

#### La voz del sistema: Auditoría del feedback y el lenguaje

Finalmente, evalué cómo el sistema se comunica con el usuario. Los formularios son el punto de mayor fricción en cualquier plataforma, y en AsDeporte, donde la inscripción a eventos es el núcleo del negocio, no podíamos permitirnos errores de comunicación. Revisé las validaciones de formulario y los mensajes de error bajo una premisa: el feedback nunca debe ser puramente visual.

Si un campo de error solo se marca con un borde rojo, estamos excluyendo a usuarios con daltonismo. Me aseguré de que cada estado de error tuviera un icono o un texto descriptivo asociado. Además, analicé el lenguaje. Siguiendo las recomendaciones de Soporte y del equipo B2B, audité el **UX writing** para eliminar jerga técnica innecesaria. Un mensaje de error que dice "Error 404" es inútil; un mensaje que dice "No pudimos encontrar la carrera que buscas, intenta con otro nombre" es inclusivo y útil. Esta revisión de la carga cognitiva aseguró que el sistema fuera comprensible para todos los perfiles de atletas, desde el experto tecnológico hasta el que se inscribe en su primera carrera tras años de inactividad digital.

> **Insight Senior:** La accesibilidad no es un checklist de tareas pendientes; es un compromiso con la equidad. Durante esta auditoría, comprendí que cada decisión de diseño que no considera la diversidad funcional es, en última instancia, una decisión de exclusión. No estamos solo cumpliendo normas; estamos asegurando que el "motor que libera tu grandeza" no deje a nadie atrás por culpa de un contraste pobre o un botón demasiado pequeño.

**Próximo paso:**

Tras este análisis forense, la lista de fallos técnicos era evidente, pero me di cuenta de que el cumplimiento de las WCAG era solo la mitad de la historia. Había una dimensión mucho más humana y contextual que los plugins no podían detectar: la diversidad real de los atletas en su entorno de uso. Me quedé con una pregunta inquietante: ¿Es suficiente con que el código sea accesible si la representación visual y el contexto de uso siguen siendo excluyentes para gran parte de nuestra comunidad? Sabía que el siguiente paso debía llevarnos más allá de los estándares técnicos para abrazar el verdadero diseño inclusivo.

### Parte 2: MÁS ALLÁ DEL CUMPLIMIENTO: DISEÑO INCLUSIVO Y DIVERSIDAD DE ATLETAS

#### De la métrica técnica a la empatía radical

Había terminado de pasar los plugins de contraste y de verificar que cada etiqueta ARIA estuviera en su sitio. Sobre el papel, y según las herramientas de automatización, los diseños de AsDeporte ya eran "accesibles". Sin embargo, mientras cerraba la última pestaña del verificador, sentí esa inquietud que solo te da el haber visto productos "técnicamente perfectos" fracasar estrepitosamente en el mundo real. Un producto puede cumplir con el nivel AA de las WCAG y, aun así, ser una pesadilla emocionalmente excluyente para quien intenta usarlo.

Mi razonamiento en ese momento fue tajante: la accesibilidad es el cumplimiento de la norma, pero la inclusión es la celebración de la diversidad. No podíamos conformarnos con que el código no diera errores; necesitábamos que el "motor que libera tu grandeza" resonara igual de fuerte para un triatleta de 65 años que para un joven que se inscribe en su primera carrera de 5K usando un teléfono de gama baja con la pantalla astillada. Siguiendo la hoja de ruta que tracé en el archivo `01_diseno_accesible_e_inclusivo_fase_2.pdf`, decidí elevar el estándar. Pasé de la auditoría forense a lo que llamo "empatía radical": cuestionar cada pixel desde el contexto humano más crudo y variado posible.

#### Mapeo de la diversidad: El espectro del atleta (Paso #2)

Para que el diseño fuera verdaderamente inclusivo, primero tuve que admitir que no existía un "usuario promedio" en AsDeporte. Utilicé el punto 4 del archivo de proceso para desglosar nuestra comunidad, no como una masa uniforme de deportistas, sino como un espectro vibrante y complejo. Me senté a mapear estos perfiles, cruzando variables que a menudo se ignoran en los procesos de diseño estándar.

*   **Diversidad de Capacidades y Edad:** Analicé cómo interactuaría un atleta veterano, cuya agudeza visual ha disminuido, frente a un nativo digital. No se trataba solo de aumentar el tamaño de la fuente, sino de entender si la jerarquía de la información permitía una navegación intuitiva sin requerir un esfuerzo cognitivo agotador.
*   **Niveles de Habilidad y Disciplina:** Cuestioné si los flujos de inscripción eran igual de claros para un nadador de aguas abiertas que para un ciclista de montaña. Cada disciplina tiene su propia terminología y urgencias.
*   **Alfabetización Digital:** Recordé los reportes de Soporte sobre usuarios que se sentían intimidados por interfaces demasiado "modernas" o minimalistas que ocultaban funciones críticas tras iconos abstractos.

Esta segmentación no fue un ejercicio teórico; fue una herramienta de diagnóstico. Me permitió ver que nuestro flujo de consulta de resultados, aunque estéticamente impecable, dependía demasiado de la memoria a corto plazo del usuario. Si un atleta principiante, abrumado por la adrenalina de su primera carrera, no encontraba su número de corredor de inmediato, el diseño le estaba fallando. La inclusión significaba anticipar ese estado mental y diseñar para la claridad absoluta, no para el lucimiento visual.

#### El diseño puesto a prueba: Contextos de uso hostiles (Paso #3)

Uno de los mayores riesgos que identifiqué en el archivo `01_diseno_accesible_e_inclusivo_fase_2.pdf` fue el aislamiento del diseño respecto al entorno físico. Los diseñadores solemos trabajar en monitores de 27 pulgadas, en oficinas con iluminación controlada y conexiones de fibra óptica. Pero un atleta de AsDeporte usa la plataforma en condiciones que yo defino como "hostiles".

Realicé una simulación de uso en exteriores para validar la paleta de colores bajo luz solar directa. Fue una revelación incómoda: algunos de los grises sutiles que daban esa apariencia *premium* a la interfaz desaparecían por completo bajo el sol del mediodía. Si un usuario no puede leer la hora de su salida mientras está en la línea de meta, el diseño es un obstáculo. 

> **Insight Senior:** El diseño debe sobrevivir fuera de la oficina. Si una interfaz no es legible a pleno sol o accionable con dedos sudorosos, no es un producto de alto rendimiento, es solo un dibujo bonito.

Evalué también la interacción en movimiento. En un evento deportivo, la precisión motriz se reduce. Analicé los **Touch Targets** de los botones críticos, asegurándome de que superaran los 44x44 píxeles recomendados, llegando incluso a los 48 píxeles en acciones de alta frecuencia. Necesitaba que, incluso con manos temblorosas por el esfuerzo físico o la vibración de estar cerca de una zona de competencia, el usuario pudiera accionar el botón de "Check-in" sin errores. Esta validación del contexto físico transformó mi percepción de los Mockups: pasaron de ser pantallas estáticas a herramientas de campo que debían ser robustas y fiables.

#### Democratización tecnológica: Rompiendo la brecha del hardware (Paso #4)

Siguiendo las directrices de democratización tecnológica del archivo de proceso, me enfoqué en un factor de exclusión que a menudo pasa desapercibido: la capacidad del hardware y la calidad de la conexión. AsDeporte es masivo, y eso significa que no todos nuestros usuarios tienen el último iPhone.

*   **Auditoría de Assets y Animaciones:** Revisé el peso de cada imagen y la complejidad de las microinteracciones que habíamos definido. Me pregunté: "¿Esta animación de carga se verá fluida en un dispositivo de gama media-baja de hace cuatro años?". Si la respuesta era un "quizás", simplificaba la interacción. La fluidez no es un lujo estético, es una necesidad funcional para evitar el abandono.
*   **Estrategia de Latencia y Conectividad:** Consideré los escenarios de carreras en zonas remotas donde la conexión 3G es inestable. Analicé la arquitectura de información para asegurar que los datos críticos (como el código QR de inscripción o la ubicación del evento) se cargaran primero o estuvieran disponibles con una **Latency** mínima. 

Esta parte del proceso fue una respuesta directa a las preocupaciones del equipo de Soporte y B2B. No podíamos permitir que la exclusión digital por hardware fuera una barrera para participar en la comunidad. Diseñar para el "peor escenario" tecnológico terminó beneficiando a todos: una plataforma que vuela en un teléfono antiguo es una plataforma instantánea en uno moderno.

#### Representación visual y la arquitectura del lenguaje (Paso #5)

La última capa de mi evaluación se centró en la comunicación no verbal y verbal, basándome en los puntos 3 y 4 del mothership. La inclusión también es una cuestión de identidad y claridad.

Realicé una revisión exhaustiva de la iconografía en el UI Kit. Mi objetivo era blindar el sistema para que no dependiera exclusivamente del color para transmitir significado. Un estado de "Error" no podía ser solo rojo; debía tener un icono distintivo y un texto claro. Esto es vital para usuarios con daltonismo, pero también mejora la velocidad de comprensión para cualquier persona bajo estrés. Además, analicé la **Visual Representation** en las fotografías de apoyo. Me aseguré de que las imágenes reflejaran la diversidad real de AsDeporte: diferentes edades, géneros, etnias y, crucialmente, atletas con discapacidades físicas compitiendo. Si un usuario no se ve reflejado en la plataforma, la plataforma le está diciendo que no pertenece allí.

Finalmente, puse la lupa sobre el **UX Writing**. Eliminé cada rastro de jerga técnica innecesaria que pudiera confundir a alguien con baja familiaridad tecnológica o a usuarios cuya lengua materna no fuera el español. Refiné la estructura de encabezados para que fuera lógica y predecible. Un mensaje que decía "Sincronización de parámetros biométricos" se convirtió en "Conecta tu reloj para ver tus tiempos". Esta reducción de la **Cognitive Load** no solo hizo la plataforma más accesible; la hizo más humana.

Al cerrar esta fase de análisis inclusivo, me di cuenta de que estas decisiones no eran "extras" ni "favores" para grupos minoritarios. Cada ajuste de contraste, cada aumento de tamaño en un botón y cada simplificación del lenguaje era una optimización que mejoraba la experiencia para el 100% de los atletas. Estábamos reduciendo preventivamente futuros tickets en soporte y, lo más importante, eliminando las fricciones que impiden que un usuario complete su inscripción.

**Próximo paso:**

Había pasado días analizando el "deber ser" de la inclusión y la diversidad, pero al volver a mirar mis Mockups de Alta Fidelidad con estos nuevos ojos, empecé a ver "fantasmas". Lo que antes me parecía un flujo impecable, ahora revelaba grietas, botones que se perdían en el fondo y mensajes que nadie entendería bajo presión. Sabía que el siguiente paso era inevitable y doloroso: debía documentar cada uno de estos fallos en un mapeo de fricciones para que nada se filtrara al equipo de desarrollo. Había llegado el momento de enfrentarme a la realidad de los gaps y barreras de uso que aún vivían en mi diseño.

### Parte 3: MAPEO DE FRICCIONES: IDENTIFICACIÓN DE GAPS Y BARRERAS DE USO

#### La autocrítica técnica: El momento en que el diseño "perfecto" se rompió

Regresé a mis mockups de alta fidelidad con una sensación de incomodidad que no tenía 48 horas antes. Lo que hasta ayer me parecía un sistema visual impecable, con una paleta de colores vibrante y una tipografía moderna, empezó a revelarse como un campo minado de exclusiones. Como **Product Designer**, mi responsabilidad no era validar lo que ya funcionaba, sino adoptar una mirada inquisidora para "romper" intencionalmente mi propio trabajo. Tenía frente a mí el UI Kit y los flujos críticos de inscripción, pero esta vez no los miraba como un usuario promedio con un iPhone de última generación y una conexión 5G estable; los miraba a través de la lente de los estándares **WCAG 2.1 Nivel AA**.

Realizar este mapeo de fricciones fue un ejercicio de honestidad técnica. Sabía que si no identificaba las grietas ahora, el equipo de desarrollo heredaría problemas estructurales de usabilidad que serían diez veces más costosos de corregir en código. No se trataba de un trámite burocrático de accesibilidad, sino de un blindaje ético: si un atleta no puede leer el botón de "Confirmar Inscripción" porque el contraste es pobre bajo la luz del sol, el diseño ha fracasado en su función más básica. Inicié una auditoría forense de cada componente, rastreando barreras que hasta ese momento habían sido invisibles para mi sesgo de diseñador.

#### Auditoría de contraste: El veredicto de los números

Mi primera maniobra fue someter la paleta de colores del UI Kit a una prueba de estrés. Utilicé herramientas de verificación como **WebAIM Contrast Checker** y el plugin **Stark** directamente en Figma para auditar cada combinación de texto sobre fondo. El resultado fue un golpe de realidad: varios de mis componentes de "Categoría de Carrera" y botones secundarios fallaban sistemáticamente en alcanzar el **Ratio de Contraste mínimo de 4.5:1**.

*   **El problema del "Azul AsDeporte":** Descubrí que el tono de azul que utilizábamos para etiquetas de información, al combinarse con texto blanco en tamaños pequeños (12px-14px), apenas llegaba a un ratio de 3.2:1.
*   **Legibilidad en exteriores:** Esta deficiencia no era solo un incumplimiento técnico; era un riesgo crítico para el contexto de uso de AsDeporte. Muchos atletas consultan la plataforma en exteriores, antes o después de una competencia, donde el reflejo solar degrada drásticamente la percepción del color. Un contraste insuficiente en estas condiciones hace que la interfaz desaparezca literalmente ante los ojos del usuario.
*   **Jerarquía visual comprometida:** Al auditar los estados de los campos de formulario (especialmente los mensajes de error en rojo), noté que el contraste era tan bajo que un usuario con protanopia (daltonismo al rojo) no distinguiría el error del estado de reposo basándose solo en el color.

Esta fase de diagnóstico me obligó a documentar que nuestra identidad visual, tal como estaba planteada, era excluyente para personas con baja visión o sensibilidad al contraste reducida.

#### La tiranía de los Touch Targets pequeños

Al pasar de la estética a la ergonomía, puse el foco en la interacción táctil dentro de la experiencia móvil. Basándome en los principios de diseño motor, evalué el tamaño y el espaciado de cada elemento interactivo. La realidad fue decepcionante: muchos de mis enlaces de "Términos y Condiciones" y los selectores de talla de camiseta en el flujo de inscripción eran demasiado pequeños.

Identifiqué que varios **Touch Targets** no cumplían con el estándar mínimo de 44x44 píxeles (o 48x48 dp en Android). En un entorno de escritorio, con un cursor preciso, esto es una molestia menor; en un dispositivo móvil, es una barrera de acceso. Pensé en el atleta que intenta inscribirse con las manos temblorosas después de un entrenamiento o en un usuario mayor con menor precisión motriz. Tener botones demasiado juntos o enlaces diminutos no solo genera errores de selección (el "fat finger syndrome"), sino que aumenta la carga cognitiva y la frustración, llevando directamente al abandono del flujo. Documenté estos hallazgos como fallos críticos de usabilidad que debían corregirse aumentando las áreas de interacción sin comprometer necesariamente el equilibrio visual de la pantalla.

#### Navegación no visual y el caos del orden de foco

Quizás el descubrimiento más alarmante surgió cuando realicé un ejercicio de "navegación ciega". Simulando el uso de un lector de pantalla o una navegación exclusiva por teclado, analicé el **Orden de Tabulación** de mis flujos de inscripción más complejos. 

> "Un diseño que no tiene un orden de foco lógico es, para un usuario de tecnologías asistivas, un laberinto sin salida."

Detecté que en los modales de selección de eventos, el foco del teclado no quedaba "atrapado" dentro del modal. Si un usuario intentaba navegar, el foco seguía moviéndose por los elementos que estaban *detrás* del modal, volviéndolo completamente inaccesible. Además, identifiqué que:
1.  Muchos iconos críticos (como el de "Eliminar del carrito") carecían de una descripción que pudiera traducirse en un **Atributo ARIA** claro; para un lector de pantalla, ese botón era simplemente un "botón" sin nombre.
2.  Las validaciones de formulario eran puramente visuales. Si un campo fallaba, aparecía un borde rojo, pero no había una instrucción textual vinculada que un usuario con discapacidad visual pudiera percibir.
3.  La estructura de encabezados (H1, H2, H3) en mis mockups era inconsistente, lo que impedía que un usuario de lector de pantalla pudiera escanear la página rápidamente para entender la jerarquía de la información.

#### El sesgo del "Atleta de Élite" y las barreras cognitivas

Finalmente, expandí mi análisis hacia la inclusión social y cognitiva. Al revisar la iconografía y las imágenes que había seleccionado para los Mockups de Alta Fidelidad, detecté un sesgo de representación: casi todas las imágenes mostraban atletas de alto rendimiento en condiciones óptimas. No había representación de deportistas con discapacidades, adultos mayores o personas con cuerpos diversos. Esta falta de diversidad visual envía un mensaje silencioso de exclusión que contradice la misión de AsDeporte.

En cuanto al lenguaje, identifiqué áreas donde la jerga técnica deportiva ("Sincronización de API de terceros", "Parámetros de cadencia") creaba barreras para usuarios con baja alfabetización digital o para aquellos cuya lengua materna no fuera el español. También documenté la falta de estados de carga optimizados (skeletons) para usuarios con conexiones a internet lentas, algo común en zonas rurales o durante eventos masivos donde las redes se saturan. Sin estos estados, la plataforma parece "rota" mientras carga, lo que genera desconfianza y abandono.

#### Consolidación: El Informe de Evaluación de Accesibilidad

Toda esta auditoría no se quedó en notas dispersas. Consolidé cada hallazgo en un **Informe de Evaluación de Accesibilidad**, categorizando los gaps por nivel de severidad. Utilicé un criterio de priorización basado en el impacto en el negocio y el usuario:

*   **Bloqueantes (Severidad Alta):** Fallos de contraste en botones de pago, falta de orden de foco en modales de inscripción y touch targets inaccesibles en el checkout. Estos debían corregirse de inmediato.
*   **Críticos (Severidad Media):** Inconsistencia en la jerarquía de encabezados, falta de textos alternativos en imágenes clave y lenguaje demasiado técnico.
*   **Mejoras (Severidad Baja):** Falta de diversidad en la iconografía y optimización de estados de carga.

Este documento se convirtió en mi hoja de ruta. Ya no tenía un diseño "bonito" que defender; tenía un diagnóstico técnico de un sistema que necesitaba una intervención urgente. Reconocer que mi propuesta inicial era excluyente fue un ejercicio de humildad necesario para alcanzar la excelencia.

**Próximo paso:**

Con el informe de fallos en la mano, la presión cambió de dirección. Ya no se trataba de encontrar problemas, sino de resolverlos sin sacrificar la esencia visual de la marca AsDeporte que tanto nos había costado definir. Sabía que el siguiente paso sería una batalla de precisión: debía ajustar la paleta de colores y el UI Kit para cumplir con los ratios de contraste, pero sin que la interfaz perdiera su vitalidad y energía característica. Había llegado el momento de la iteración técnica, donde cada píxel y cada código de color tendrían que justificar su existencia frente a la norma WCAG.

### Parte 4: ITERACIÓN ESTÉTICA: REFINANDO EL CONTRASTE Y LA LEGIBILIDAD DEL UI KIT

#### El peso de la responsabilidad: del diagnóstico a la mesa de dibujo

Terminar la auditoría de accesibilidad fue un momento de sobriedad técnica. Tenía frente a mí un listado de fallos que, aunque invisibles para un ojo no entrenado, representaban muros infranqueables para una parte significativa de nuestra comunidad de atletas. Mi razonamiento en ese instante fue pragmático: no servía de nada tener una plataforma "premiada" visualmente si un corredor con baja visión no podía leer el reglamento de una carrera o si un triatleta con una discapacidad motora temporal —común tras una competencia extenuante— no lograba pulsar el botón de "Inscribirme" en su móvil.

La transición de la auditoría a la acción no fue un rediseño caprichoso; fue una evolución necesaria. Me enfrenté al reto de "curar" la interfaz de **AsDeporte** sin desnaturalizar la marca. Sabía que cada ajuste en el código hexadecimal o en la escala tipográfica impactaría directamente en la autonomía de los usuarios. Mi objetivo era alcanzar el **Nivel AA de las WCAG 2.1**, y para lograrlo, debía pasar de la teoría del fallo a la práctica de la solución técnica en cada uno de los 37 mockups que ya considerábamos "terminados".

#### Cirugía en alta fidelidad: reestructurando la jerarquía visual

Con el plan de acción de accesibilidad como mi única brújula, abrí los archivos maestros en **Figma**. Empecé por las pantallas críticas: la Home, el flujo de Registro a Eventos y la visualización de Resultados. Mi primera maniobra no fue estética, sino estructural. Revisé la jerarquía de la información para asegurar que fuera evidente incluso para quienes perciben el diseño de forma fragmentada o con visión reducida.

No se trataba solo de mover elementos; se trataba de **reforzar el peso visual**. En la pantalla de resultados, por ejemplo, los tiempos de los atletas y las categorías estaban demasiado próximos en peso y tamaño. Utilicé la técnica de contraste por tamaño y peso tipográfico para que la información primaria (el tiempo de chip) saltara a la vista de inmediato, dejando los datos secundarios en una capa visual claramente diferenciada pero legible. Esta reestructuración aseguró que el feedback visual fuera coherente y predecible, reduciendo la carga cognitiva necesaria para procesar la información en contextos de fatiga o prisa.

#### La batalla por el naranja: ajustando la paleta cromática

Uno de los desafíos más complejos fue la paleta de colores. El "Naranja AsDeporte" es el alma de la marca: transmite energía, vitalidad y competencia. Sin embargo, en mis pruebas iniciales con el **WebAIM Contrast Checker** y el plugin **Stark**, descubrí que el naranja original sobre fondo blanco no alcanzaba el ratio de contraste de 4.5:1 exigido para texto normal. Era una "vibración" visual que excluía a quienes tienen dificultades para distinguir matices cromáticos.

> **Trade-off Senior:** Tuve que tomar una decisión difícil: ¿Mantenía el color exacto del manual de marca o lo sacrificaba por la funcionalidad universal? Elegí la segunda. Oscurecí el naranja apenas unos puntos, aumentando su saturación para que, al medirlo contra el blanco puro, el ratio subiera de un insuficiente 3.2:1 a un sólido 4.6:1. 

Hice lo mismo con los grises de la interfaz. Los textos de ayuda y los *placeholders* en los formularios de inscripción eran demasiado claros, lo que los hacía casi invisibles bajo la luz del sol —un escenario de uso real para un atleta en el campo. Ajusté cada código hexadecimal hasta que la legibilidad dejó de ser un privilegio de quienes tienen visión perfecta para convertirse en un estándar técnico de la plataforma.

#### Legibilidad sin concesiones: el fin de la letra pequeña

Siguiendo mi directriz de verificar el tamaño mínimo de texto, realicé una auditoría exhaustiva de las escalas tipográficas. Descubrí que, en un afán por hacer que las tarjetas de eventos se vieran "limpias", habíamos caído en el error de usar fuentes de 12px e incluso 10px para las leyendas y fechas. En un dispositivo móvil, esto es inaceptable.

Establecí los **16px como el nuevo estándar base** para todo el cuerpo de texto en áreas críticas. Para las etiquetas menos jerárquicas, permití un mínimo de 14px, pero solo si el peso de la fuente compensaba la reducción de tamaño. Este cambio tuvo un efecto dominó: al aumentar el tamaño de la fuente, tuve que recalcular el **line-height** (interlineado) para mantener la armonía. Ajusté la altura de línea a un factor de 1.5 veces el tamaño de la fuente, lo que obligó a una redistribución del **white space** (espacio en blanco) en toda la interfaz. El resultado fue una plataforma que se sentía más "aireada" y mucho más fácil de escanear para usuarios con fatiga visual o discapacidades cognitivas leves.

#### Componentes que responden: el rediseño del UI Kit

La intervención en el **UI Kit** fue quirúrgica. Me enfoqué en los estados de interacción, esos que a menudo se olvidan en el diseño puramente estético. Rediseñé los estados de `default`, `hover`, `focus` y `active` para cada botón y campo de entrada. Para el estado de `focus`, que es vital para quienes navegan con teclado o tecnologías asistivas, añadí indicadores visuales de alto contraste —bordes gruesos y claros que no dependen únicamente del color para ser identificados.

Asimismo, revisé los **touch targets** (objetivos de toque). En la app móvil, algunos botones de "Filtro" estaban peligrosamente cerca unos de otros. Amplié las **bounding boxes** de todos los elementos interactivos para asegurar un área mínima de **44x44 píxeles**. Esto garantiza que un atleta con manos grandes, o alguien que intenta usar la plataforma mientras camina o se recupera de un esfuerzo físico intenso, pueda interactuar sin errores accidentales. No se trataba de hacer los botones más grandes visualmente, sino de hacer que su área de respuesta fuera generosa y segura.

#### Contexto y claridad: optimización de layouts y narrativa

Finalmente, optimicé la disposición de los elementos para favorecer el patrón de lectura en "F" y el escaneo rápido. Consideré las condiciones de iluminación extremas, como el uso del móvil bajo el sol directo en un evento deportivo, reforzando los pesos visuales de los iconos y las llamadas a la acción (CTAs). 

Paralelamente, realicé una limpieza profunda del **UX Writing**. Eliminé la jerga técnica innecesaria ("ID de transpondedor", "Clasificación por percentil") y simplifiqué las instrucciones en los formularios de inscripción. Si un usuario no entiende qué le estamos pidiendo, no es un problema de su capacidad, es un fallo de mi diseño. Esta accesibilidad cognitiva es la que realmente democratiza el acceso a la plataforma para usuarios de todas las edades y niveles de alfabetización digital.

Reflexionando sobre este proceso, reconfirmé que el diseño inclusivo no limita la creatividad; la disciplina. Al ajustar el *Brand Equity* de AsDeporte para que fuera universalmente funcional, no debilitamos la marca, la fortalecimos. Un diseño que funciona para todos es, por definición, un diseño mejor ejecutado.

**Próximo paso:**

Una vez que la interfaz fue visualmente accesible, me di cuenta de que el reto apenas comenzaba. Los colores y tamaños estaban en su sitio, pero ¿cómo se comportaría el sistema cuando no hubiera un puntero de por medio? Sabía que el siguiente desafío sería entrar en la **INGENIERÍA DE LA INTERACCIÓN: ADAPTANDO FLUJOS PARA LA NAVEGACIÓN ASISTIDA**, donde tendría que definir el orden lógico en que un lector de pantalla o un teclado recorrerían cada una de estas nuevas estructuras.

### Parte 5: INGENIERÍA DE LA INTERACCIÓN: ADAPTANDO FLUJOS PARA LA NAVEGACIÓN ASISTIDA

#### El silencio del lector de pantalla y la arquitectura del movimiento

Una vez que logré que la interfaz de AsDeporte fuera visualmente impecable y cumpliera con los contrastes de la **WCAG AA**, me topé con una realidad incómoda: tenía un producto hermoso que seguía siendo "mudo" y "paralítico" para una parte de nuestros atletas. Un diseño que solo se puede navegar con un ratón o mediante gestos táctiles precisos no es un producto terminado; es una barrera disfrazada de estética. En ese momento, mi enfoque cambió radicalmente. Dejé de preocuparme por el radio de los bordes o la vibración del color para entrar en lo que llamo la **ingeniería de la interacción**.

La accesibilidad real no ocurre en la capa de pintura, sino en la arquitectura del movimiento. Sabía que si un usuario con discapacidad motriz intentaba inscribirse a la *Spartan Race* usando solo su teclado, o si un atleta con discapacidad visual dependía de un lector de pantalla para revisar sus tiempos, mi diseño actual los dejaría en un callejón sin salida. Mi razonamiento fue pragmático: debía transformar esos flujos estáticos en una estructura lógica y operable que no dependiera de la vista o de la motricidad fina. Pasé de ser un diseñador visual a ser un coreógrafo de datos, definiendo cómo la información debía "fluir" linealmente a través de tecnologías de asistencia.

#### Auditoría forense de la operabilidad

Regresé a mis especificaciones de **Diseño de Interacción (IxD)** y a los flujos de usuario que había definido semanas atrás. Esta vez, los miré con una lente clínica, buscando lo que llamamos "trampas de interacción". Me di cuenta de que muchas de mis decisiones originales daban por sentado que el usuario siempre tendría un puntero. Por ejemplo, los estados *hover* que revelaban información crítica sobre los paquetes de fotos de un evento eran invisibles para alguien que navegaba con la tecla *Tab*.

Procedí a auditar cada uno de los 10 flujos críticos, desde el registro inicial hasta la compra en la tienda de AsDeporte. Identifiqué que los eventos *active* y *focus* no estaban debidamente diferenciados en mis mockups de alta fidelidad. Para corregir esto, redefiní la lógica de cada componente interactivo. Decidí que ninguna acción crítica podía depender exclusivamente de un gesto complejo. Si un usuario necesitaba deslizar para ver más detalles de una ruta, añadí controles alternativos de navegación (flechas de paginación) que fueran detectables por el sistema y operables mediante teclado. Esta no fue una decisión estética, fue una decisión de **infraestructura funcional**.

#### El diseño del "Faro": Estados de foco que no se pueden ignorar

Uno de los errores más comunes y frustrantes en el diseño de producto es confiar en el estilo de foco por defecto de los navegadores, que suele ser una línea azul delgada y casi invisible. Para AsDeporte, decidí crear un sistema de indicadores de foco (**Focus States**) que actuaran como un faro para el usuario. Integré en el UI Kit un estilo visual distintivo: un anillo de enfoque de doble borde (blanco y el azul primario de la marca) que garantiza un ratio de contraste de al menos **3:1** contra cualquier fondo de la plataforma.

Mi lógica detrás de este "doble anillo" fue técnica: el borde blanco asegura que el foco sea visible sobre fondos oscuros, mientras que el borde azul lo hace destacar sobre fondos claros o imágenes. No quería que el usuario tuviera que adivinar dónde estaba posicionado; quería que su ubicación en la pantalla fuera una certeza absoluta. Apliqué este estándar a:
*   Campos de formulario y áreas de texto.
*   Botones de acción primaria, secundaria y fantasma.
*   Enlaces dentro de bloques de texto y elementos de navegación del menú.
*   Tarjetas de eventos que actúan como contenedores interactivos.

> **Trade-off estratégico:** Sabía que estos anillos de foco "agresivos" podrían generar resistencia en el equipo de marketing por "ensuciar" la estética limpia, pero defendí la decisión basándome en la operabilidad. Un diseño que no muestra dónde estás es un diseño roto para quien no usa un ratón.

#### Reordenando el DOM: La jerarquía semántica sobre la visual

Al revisar los layouts de las páginas de resultados de eventos, noté un conflicto entre el orden visual y el orden de lectura lógica. Visualmente, el nombre del atleta y su tiempo total eran lo más grande, pero en la estructura del código (el **DOM order**), la información estaba dispersa. Me senté a definir una jerarquía semántica estricta de encabezados, desde el **H1 al H6**, asegurándome de que no se saltaran niveles.

Mi objetivo era que un usuario con un lector de pantalla pudiera saltar de sección en sección y entender el contexto de la página de forma lineal. Si el diseño visual ponía el botón de "Inscribirse" al final de una tarjeta por razones de equilibrio estético, me aseguré de que en el orden de lectura ese botón fuera lo primero o lo último de esa sección lógica, evitando que el usuario tuviera que escuchar 20 líneas de texto antes de encontrar la acción principal. Esta reorganización no cambió el aspecto de la página, pero transformó completamente la experiencia para quien "escucha" la interfaz en lugar de verla.

#### La voz de la interfaz: Implementando ARIA-live y feedback sensorial

Un flujo de usuario es una conversación. Cuando un atleta hace clic en "Aplicar cupón", espera una respuesta. Para un usuario visual, un pequeño *spinner* o un mensaje en verde es suficiente. Pero, ¿qué pasa si no puedes ver ese cambio? Aquí es donde implementé las regiones **aria-live**.

Configuré especificaciones técnicas para que las notificaciones de sistema y los cambios de estado fueran anunciados por los lectores de pantalla de manera inmediata pero no disruptiva.
*   **Aria-live="polite":** Para actualizaciones no críticas, como cuando se cargan más resultados de una búsqueda. El lector de pantalla espera a que el usuario termine de leer lo que está haciendo antes de anunciar el cambio.
*   **Aria-live="assertive":** Para errores críticos de validación o alertas de sesión expirada. El sistema interrumpe cualquier lectura para informar al atleta de algo que requiere atención urgente.

Además, diseñé mecanismos de retroalimentación que no dependieran de un solo canal sensorial. Si una inscripción fallaba, el sistema no solo mostraba un texto en rojo; incluía un icono de advertencia distintivo y, en la versión móvil, una vibración específica (háptica) para confirmar que algo no había salido bien. Esta redundancia sensorial es la base del diseño inclusivo.

#### Navegación por teclado: Skip Links y el control del foco

Navegar por el menú principal de AsDeporte, que tiene múltiples categorías y submenús, puede ser una tortura si tienes que presionar la tecla *Tab* 15 veces cada vez que cambias de página. Para solucionar esto, implementé **Skip Links** (enlaces de salto). Es un componente invisible que solo aparece cuando el usuario presiona *Tab* por primera vez, permitiéndole saltar directamente al contenido principal o al buscador, ahorrándole segundos valiosos de navegación repetitiva.

Otro desafío técnico fue la gestión de los **Focus Traps** en las ventanas modales de confirmación de pago. Nada es más desorientador para un usuario de teclado que abrir un modal y que, al tabular, el foco se "escape" hacia los elementos que están detrás del fondo oscurecido. Diseñé una lógica de contención: mientras el modal esté abierto, el foco del usuario queda atrapado cíclicamente dentro de las opciones del modal (ej. "Confirmar" o "Cancelar"). Solo al cerrar el modal, el foco regresa exactamente al botón que lo originó, manteniendo la continuidad espacial y mental del usuario.

#### Formularios que guían, no que castigan

El proceso de inscripción es el corazón de AsDeporte y, a menudo, el lugar donde más usuarios abandonan. Rediseñé las validaciones de formulario para que fueran verdaderamente accesibles. Eliminé la dependencia total del color: un campo con error ya no solo se ponía rojo, sino que se vinculaba mediante el atributo `aria-describedby` a un mensaje de error específico que explica exactamente qué falta.

Implementé una regla de gestión de foco para errores: si un atleta intenta enviar un formulario con datos inválidos, el foco de la pantalla se mueve automáticamente al primer campo con error o a un resumen de errores en la parte superior. Esto evita que el usuario se quede "atrapado" al final de la página sin saber por qué no puede avanzar. Mi razonamiento fue simple: el sistema debe trabajar para el usuario, especialmente cuando el usuario comete un error. La accesibilidad cognitiva aquí es clave; un lenguaje claro y una guía directa reducen la ansiedad y aumentan la tasa de finalización del flujo.

#### Reflexión Senior: El diseño es solo la mitad del camino

Al terminar esta fase de ingeniería de interacción, reafirmé una de las lecciones más importantes de mi carrera: la accesibilidad no se "añade" al final, se construye en los cimientos. Puedes tener los colores más inclusivos del mundo, pero si tu lógica de navegación es excluyente, el producto ha fallado.

Sin embargo, me di cuenta de que todo este trabajo de diseño y lógica sería inútil si el equipo de desarrollo no sabía cómo implementarlo. No bastaba con que yo supiera que un botón necesitaba un `aria-label` o que el orden de tabulación debía ser específico; necesitaba una forma de comunicar estas decisiones técnicas de manera infalible. El UI Kit estaba listo, los flujos estaban optimizados, pero ahora me enfrentaba al reto de traducir toda esta "intención de diseño" en un lenguaje que ingeniería pudiera construir sin ambigüedades.

**Próximo paso:**

La complejidad de lo que había diseñado —estados de foco, regiones aria-live y trampas de navegación— me llevó a entender que los entregables tradicionales de diseño se quedaban cortos. El siguiente gran desafío era **EL LENGUAJE DEL HANDOFF: DOCUMENTACIÓN TÉCNICA DE ACCESIBILIDAD**, donde tendría que crear un sistema de anotaciones tan preciso que no dejara espacio para la interpretación. Me preguntaba si el equipo de ingeniería estaba preparado para recibir este nivel de detalle o si verían estas especificaciones como un obstáculo en su sprint de desarrollo.

### Parte 6: EL LENGUAJE DEL HANDOFF: DOCUMENTACIÓN TÉCNICA DE ACCESIBILIDAD

#### El abismo entre el diseño y la implementación

Al terminar de pulir los flujos de navegación asistida para la plataforma B2C de AsDeporte, me enfrenté a una realidad incómoda: tenía frente a mí una experiencia inclusiva impecable en mi cabeza y en mis prototipos, pero totalmente invisible para el código. Un diseño accesible que no se documenta es, para efectos prácticos, un diseño que no existe. Sabía que si entregaba los archivos de Figma tal cual, el equipo de ingeniería, presionado por los sprints de desarrollo, terminaría implementando solo lo visual, ignorando la capa semántica que hace que un lector de pantalla o una navegación por teclado funcionen. 

Mi razonamiento en ese momento fue puramente estratégico: la accesibilidad no es un "favor" que le pedimos a desarrollo, es una propiedad técnica del software que debe especificarse con la misma rigurosidad que un endpoint de una API. No podía permitir que el cumplimiento del **Nivel AA de las WCAG 2.1** quedara a la interpretación de terceros. Decidí que mi entrega final no sería solo un conjunto de pantallas, sino un "blueprint" de ingeniería. El éxito de la democratización del acceso en AsDeporte dependía de que yo fuera capaz de traducir mi visión en instrucciones técnicas inequívocas.

#### La capa de anotaciones: El UI Kit como manual de instrucciones

Comencé por intervenir el UI Kit y los mockups de alta fidelidad, no para cambiar su estética, sino para añadirles una **capa de metadatos técnicos**. Mi proceso consistió en auditar cada componente individual —desde el botón de "Inscribirme" hasta las complejas gráficas de rendimiento del dashboard— y asignarle una regla de accesibilidad explícita. Utilicé un sistema de anotaciones en rojo (redlining) que se superponía al diseño, identificando cada patrón de interacción.

Esta labor de documentación fue exhaustiva. Para cada componente, definí:
*   **Roles semánticos:** Qué es el elemento para el navegador (un `button`, un `link`, un `landmark`).
*   **Estados dinámicos:** Cómo debe anunciarse cuando un acordeón está `aria-expanded="true"` o cuando un filtro ha sido seleccionado.
*   **Prioridad de anuncio:** Qué elementos deben interrumpir al usuario con un `aria-live="assertive"` (como un error crítico en el pago) y cuáles pueden esperar en un `aria-live="polite"` (como una actualización menor en los tiempos de carrera).

Entendí que esta era la única forma de blindar el proyecto contra la subjetividad. Al eliminar la ambigüedad, estaba asegurando que la visión inclusiva sobreviviera intacta al proceso de codificación.

#### Ingeniería del Tab Order: Navegación más allá del ratón

Uno de los desafíos más complejos fue definir el **orden de tabulación lógico**. En una plataforma con tanta densidad de información como la de AsDeporte, un orden secuencial simple de izquierda a derecha y de arriba hacia abajo suele ser una receta para el desastre. Si un atleta utiliza el teclado para navegar por su historial de competencias, no quiere pasar por 20 enlaces del menú lateral antes de llegar a sus resultados.

Diseñé una secuencia de navegación que respeta la jerarquía funcional, no solo la visual. Marqué visualmente en los entregables el camino que debe seguir el foco (`tabindex`), asegurando que:
*   El foco salte directamente a las acciones principales.
*   Se eviten las **trampas de teclado (Focus Traps)** en los modales de registro, obligando al foco a permanecer dentro del diálogo hasta que se cierre o se complete la acción.
*   Los elementos decorativos se marquen como `aria-hidden="true"` para que el usuario de teclado no pierda tiempo en nodos irrelevantes.

Este diseño del *Tab Order* garantiza que un atleta con discapacidades motoras pueda navegar por los complejos dashboards de AsDeporte de manera eficiente, sin que su experiencia sea una carrera de obstáculos digital.

#### Auditoría de contraste y legibilidad: El color como herramienta de inclusión

En el paso siguiente, sometí cada combinación de color del UI Kit a un escrutinio forense. Utilicé herramientas como **WebAIM Contrast Checker** y el plugin **Stark** para auditar el contraste de cada texto sobre su fondo. No me limité a una revisión superficial; mi objetivo era el cumplimiento estricto del **Nivel AA de las WCAG 2.1** en todas las variantes cromáticas.

Descubrí que algunas de nuestras alertas críticas y botones de acción secundaria no alcanzaban el ratio de contraste de 4.5:1 exigido. Mi maniobra técnica en este punto fue recalibrar los valores hexadecimales de la paleta. Ajusté los tonos de los verdes de éxito y rojos de error para que fueran legibles incluso para usuarios con baja visión o en condiciones de iluminación exterior extrema. Este enfoque inclusivo responde a una realidad de nuestros atletas: muchos revisan su tiempo o su inscripción bajo la luz directa del sol, donde el contraste es la diferencia entre leer una instrucción o perderse en la pantalla.

#### UX Writing Técnico: Textos alternativos y atributos ARIA

Una parte fundamental de mi labor de documentación fue la redacción de los **Alt Texts** para toda la iconografía y las imágenes de las disciplinas deportivas. No es lo mismo un icono de una bicicleta que diga "imagen-123" que uno que anuncie "Ciclismo de ruta - Inscribirse". Redacté cada etiqueta con el propósito de dar contexto real a quienes usan lectores de pantalla.

Para los estados dinámicos de la interfaz, definí los atributos **ARIA** necesarios:
*   `aria-label`: Para botones que solo tienen un icono (como el de "Cerrar" o "Compartir").
*   `aria-expanded`: Para indicar si un menú de filtro está abierto o cerrado.
*   `aria-live`: Para la carga de resultados de competencias en tiempo real.

Esta labor de **UX Writing Técnico** es la que realmente dota de inteligencia a la interfaz para un usuario ciego. Cada atributo ARIA es una pieza de información que construye el modelo mental de la aplicación en la mente del usuario, permitiéndole navegar con la misma confianza que un usuario vidente.

#### El comportamiento del foco: Visibilidad y control

Finalmente, documenté el comportamiento visual del foco del teclado. Un error común es confiar en el borde azul predeterminado del navegador, que a menudo es invisible o incoherente con el diseño de marca. Diseñé estados `:focus` altamente visibles que no dependen únicamente del color.

Mis especificaciones para el foco incluyeron:
*   Cambios en el **grosor del borde** (mínimo 2px).
*   Indicadores adicionales (como un subrayado o un cambio de fondo).
*   Contraste de foco de al menos 3:1 respecto al fondo.

Esta decisión técnica es vital para usuarios con discapacidades motoras o cognitivas, ya que les permite saber siempre, sin ninguna duda, dónde se encuentran dentro de la aplicación. Es el ancla visual que evita la desorientación en flujos complejos como el de pago o el de registro de equipos.

#### Reflexión Senior: El blueprint de la inclusión

Al finalizar este proceso de documentación técnica, reafirmé mi convicción de que un handoff sin especificaciones de accesibilidad es un diseño incompleto. Mi responsabilidad como diseñador senior no termina en la estética; termina en la entrega de un **blueprint** que sea ejecutable por cualquier desarrollador, independientemente de su nivel de experiencia previa en accesibilidad. Esta documentación técnica no solo asegura la inclusión, sino que reduce drásticamente la deuda técnica futura y el riesgo de exclusión legal y ética para AsDeporte. Al entregar instrucciones técnicas inequívocas, estoy blindando la plataforma y garantizando que la promesa de democratización del deporte se cumpla en cada línea de código.

**Próximo paso:**

Con las especificaciones técnicas blindadas y el UI Kit convertido en un manual de ingeniería, sentí que la fase de diseño estaba cerrada. Sin embargo, al revisar la montaña de documentación que había generado, me asaltó una duda persistente: ¿serían estas instrucciones suficientes para que el equipo de desarrollo y los stakeholders de negocio comprendieran el impacto real de lo que habíamos construido? Necesitaba una última instancia de validación, un **BLINDAJE FINAL: VALIDACIÓN INTERNA Y COMPROMISO CON LA INCLUSIÓN**, donde pondría a prueba no solo la factibilidad técnica de mis especificaciones, sino el compromiso ético de toda la organización con este nuevo estándar de calidad. Sabía que el verdadero reto no era solo documentar la accesibilidad, sino asegurar que nadie en el equipo pudiera ignorarla a partir de ahora.

### Parte 7: BLINDAJE FINAL: VALIDACIÓN INTERNA Y COMPROMISO CON LA INCLUSIÓN

#### El riesgo del "papel mojado" y la necesidad de un blindaje real

Me senté frente a la pantalla con una sensación agridulce: tenía gigabytes de especificaciones técnicas, pero sabía perfectamente que si no lograba que el equipo de ingeniería y los dueños de producto las hicieran suyas, todo ese esfuerzo terminaría en el cementerio de las buenas intenciones. En mis años de oficio he visto cómo la accesibilidad es lo primero que se sacrifica cuando los plazos aprietan o cuando la complejidad técnica asusta. No podía permitir que el nivel **WCAG 2.1 AA** se quedara como una simple etiqueta en un documento; necesitaba transformarlo en un compromiso organizacional innegociable.

Mi razonamiento en este punto de inflexión fue puramente estratégico. Había diseñado una estructura robusta, pero el papel lo aguanta todo. La realidad del desarrollo, con sus limitaciones de tiempo y sus deudas técnicas heredadas, es un terreno mucho más hostil. Por eso, decidí ejecutar una **validación interna agresiva**. No se trataba de presentar los avances para recibir una palmadita en la espalda, sino de someter cada decisión a un escrutinio técnico que garantizara que lo que habíamos proyectado era, de hecho, construible. El objetivo era blindar la plataforma AsDeporte antes de que se escribiera la primera línea de código final, asegurando que la democratización del deporte fuera una realidad técnica y no solo un eslogan de marketing.

#### La sesión de revisión colegiada: sometiendo el diseño al estrés técnico

Convoqué a los leads de Diseño, Producto y Tecnología a una sesión de revisión que llamé internamente "el juicio de los componentes". Sabía que para que los desarrolladores respetaran las especificaciones de accesibilidad, debían entender que estas no eran caprichos estéticos, sino requisitos funcionales. Presenté los **Mockups de Alta Fidelidad** y el **UI Kit** no como una galería de arte, sino como un sistema de ingeniería.

Durante la sesión, puse el foco en la factibilidad de los elementos más complejos:
*   **Orden de tabulación y navegación por teclado:** Recorrí los flujos críticos de inscripción a eventos mostrando exactamente cómo debería saltar el foco de un campo a otro. Discutimos la lógica secuencial para evitar que un usuario que no usa ratón quedara atrapado en un bucle infinito en los modales de pago.
*   **Implementación de roles ARIA:** Fui específico con el equipo de tecnología sobre cómo los lectores de pantalla debían interpretar los estados de los componentes. No bastaba con que un botón pareciera desactivado; el código debía "decirle" al usuario que lo estaba.
*   **Feedback multisensorial:** Validamos que las notificaciones de error no dependieran únicamente del color rojo, integrando iconos y mensajes de texto claros que fueran interpretables para atletas con daltonismo o discapacidades cognitivas.

Esta revisión no fue una formalidad. Fue un proceso de negociación donde ajustamos comportamientos de interacción para que fueran implementables sin comprometer el rendimiento de la plataforma. Mi meta era que el equipo de tecnología saliera de la sala sintiendo que la accesibilidad era un reto de ingeniería estimulante, no una carga adicional.

#### Erradicación de gaps: la prueba de fuego frente al equipo

Para cerrar cualquier duda sobre la viabilidad de los estándares, realicé una demostración en vivo de cómo habíamos erradicado los "gaps" críticos detectados en las auditorías previas. Utilicé herramientas como el **WebAIM Contrast Checker** y el plugin **Stark** directamente sobre el archivo de Figma, proyectando los resultados en la sala.

Mostré cómo habíamos transformado la paleta de colores original, que fallaba en varios puntos de contraste semántico, en una nueva jerarquía visual que superaba con creces los ratios de **4.5:1 para texto normal**. Fue un momento de tensión necesaria: tuve que defender por qué ciertos tonos de azul que "se veían mejor" habían sido descartados en favor de otros que garantizaban la legibilidad para usuarios con baja visión. 

> El trade-off fue claro: sacrificamos una sutil preferencia estética por una legibilidad universal. En un producto como AsDeporte, donde un atleta puede estar consultando su ruta bajo el sol intenso de una carrera, el contraste no es un lujo, es una necesidad básica de usabilidad.

Hice especial hincapié en los usuarios con **baja familiaridad tecnológica**, un perfil que el equipo de Soporte había señalado como crítico. Demostré cómo el aumento en el tamaño de los *touch targets* (objetivos táctiles) a un mínimo de **44x44 píxeles** no solo ayudaba a personas con discapacidades motoras, sino que facilitaba la vida a cualquier deportista con manos sudadas o cansadas tras un maratón.

#### El Informe de Evaluación de Accesibilidad: nuestra "fuente de verdad"

Una vez alineados los criterios, procedí a consolidar toda la evidencia en el **Informe de Evaluación de Accesibilidad**. Este documento no es un resumen ejecutivo para archivar; es el acta de nacimiento de una plataforma inclusiva y la herramienta principal para el equipo de QA (Aseguramiento de Calidad). 

En este informe, documenté de forma forense:
1.  **Hallazgos y correcciones:** Un registro detallado de cada problema de contraste, tamaño o lógica detectado y cómo se resolvió en la iteración final.
2.  **Especificaciones de Alt Text:** Definí la lógica para las descripciones de imágenes, asegurando que el contenido decorativo fuera ignorado por los lectores de pantalla mientras que la información crítica (como mapas de rutas o tablas de resultados) tuviera una descripción textual rica y contextual.
3.  **Lógica de estados de foco:** Documenté visualmente cómo debía verse el indicador de foco en cada componente, asegurando que nunca fuera invisible, algo que suele arruinar la experiencia de navegación por teclado.

Este informe se convirtió en el blindaje legal y ético del proyecto. Si en el futuro surgía la tentación de "recortar" estas funciones para ahorrar tiempo, el informe serviría como recordatorio de que la plataforma ya había sido validada bajo estos estándares y que cualquier desviación sería un retroceso en la calidad del producto.

#### Consolidación del ecosistema: un handoff sin fisuras

El paso final de esta actividad fue la limpieza y organización de los artefactos que entregaría a la siguiente fase. Realicé una última iteración sobre los **Mockups de Alta Fidelidad** y el **UI Kit**, asegurándome de que cada componente tuviera lo que llamo una "ficha de accesibilidad integrada".

En Figma, organicé los componentes de tal manera que, al hacer clic en un botón o un campo de formulario, el desarrollador pudiera ver no solo el código CSS, sino también las instrucciones de accesibilidad asociadas: el rol ARIA sugerido, el comportamiento esperado del foco y las etiquetas de accesibilidad necesarias. Esta organización del **Design System** garantiza que cualquier diseñador o desarrollador que se sume al proyecto en el futuro herede este estándar de forma natural, sin necesidad de una inducción exhaustiva.

Al cerrar esta fase, sentí que habíamos pasado de diseñar simples pantallas a construir un ecosistema de derechos de acceso. La plataforma AsDeporte ya no era solo una herramienta para atletas de alto rendimiento; era un espacio donde cualquier persona, independientemente de sus capacidades, podía reclamar su lugar en la comunidad deportiva. Con los diseños blindados y el equipo alineado, estábamos listos para que esta visión cobrara vida en el prototipo.

**Reflexión final:**

Este proceso me reafirmó que la accesibilidad no es un "añadido" técnico, sino una decisión de diseño fundamental que define la calidad de un producto. Al final de esta actividad, logramos que el equipo de AsDeporte dejara de ver la inclusión como una restricción y empezara a verla como una ventaja competitiva: una plataforma que funciona para todos, funciona mejor para cada uno de nuestros usuarios. Me voy de esta fase con la tranquilidad de saber que hemos construido un blueprint que no solo es estético, sino profundamente humano y técnicamente impecable.