# Fase 3: Diseño Detallado y Prototipado de Alta Fidelidad

## Actividad_02_Diseño de Interfaz de Usuario (UI) de Alta Fidelidad

> Esta actividad representa la culminación visual y funcional del proceso de diseño, transformando los wireframes validados en una interfaz de alta fidelidad (UI) robusta, accesible y centrada en el paciente. El proceso abarca desde la creación de un Sistema de Diseño Visual (Design System) basado en principios atómicos, hasta la construcción de prototipos interactivos complejos, validación mediante pruebas de usabilidad iterativas (logrando un SUS de 78/100) y el refinamiento final de microcopy para un handoff técnico impecable. Se priorizó la accesibilidad WCAG 2.1 AA y la consistencia de marca para reflejar la excelencia médica del Centro Médico ABC.

### Parte 1: Fundamentos de Identidad Visual y Estrategia de Marca Digital

#### El peso de la autoridad médica en un lienzo vacío

Al cerrar la fase de validación de los wireframes, me encontré con un esqueleto funcional impecable, pero profundamente inerte. Teníamos la estructura de navegación, los flujos de agendamiento despejados y la arquitectura de información blindada por pruebas de concepto, pero faltaba lo más difícil: la piel. En una institución como el Centro Médico ABC, con más de un siglo de reputación, el diseño visual no es una capa estética; es un ejercicio de transferencia de confianza. Si la interfaz se sentía demasiado "tech", perdíamos la calidez humana; si se sentía anticuada, sacrificábamos la percepción de innovación médica. 

Mi razonamiento en ese momento fue que no podía empezar a diseñar pantallas finales sin antes destilar la esencia de la marca en un lenguaje visual digital coherente. Tenía que maniobrar entre la sobriedad institucional y la agilidad que demanda una plataforma moderna. Sabía que, aunque en esta etapa trabajaba de forma individual en la ejecución, el sistema que estaba por construir debía ser lo suficientemente robusto como para que cualquier equipo futuro pudiera escalarlo sin fragmentar la experiencia. La meta era clara: crear una identidad que respirara autoridad médica, pero que fuera lo suficientemente cercana como para acompañar a un paciente en un momento de vulnerabilidad.

#### La jerarquía cromática como ancla de confianza

Dediqué los primeros tres días de esta fase exclusivamente a la investigación y definición de la paleta de colores. No se trataba simplemente de tomar el logo y extraer el cuentagotas; analicé la psicología del color aplicada específicamente al entorno hospitalario. El azul institucional del CM ABC era nuestro punto de partida innegociable, pero en el entorno digital, un solo tono de azul puede volverse monótono o, peor aún, dificultar la jerarquía visual. 

Articulé una paleta que permitiera flexibilidad operativa:
*   **Azul Primario:** El tono institucional, reservado para elementos de marca y acciones principales que requerían la máxima autoridad.
*   **Variantes de Soporte:** Desarrollé una gama de azules claros y oscuros para generar capas de profundidad, permitiendo que el ojo del usuario descansara en áreas de lectura densa.
*   **Colores de Acento:** Introduje un verde azulado suave. Este tono no solo complementaba visualmente al azul, sino que en el sector salud se asocia con la tranquilidad y la higiene, ideal para elementos destacados que no debían ser tan agresivos como un CTA primario.
*   **Colores Semánticos (El lenguaje de la urgencia):** Este fue un punto crítico. En una plataforma médica, el uso del color para estados de éxito, error o advertencia debe ser quirúrgico. Definí un rojo de error que fuera visible pero no alarmista, y un verde de éxito que transmitiera alivio. 

Utilicé herramientas como **Adobe Color** y **Coolors.co** para verificar la armonía cromática, pero el trabajo real ocurrió en **Figma**, donde configuré estos colores como **Design Tokens** (estilos globales). Esto me permitió asegurar que cualquier cambio en la marca se propagara instantáneamente a través de todas las pantallas, eliminando la deuda de diseño desde el día uno.

#### Accesibilidad WCAG 2.1 AA: La legibilidad como imperativo ético

En un proyecto de salud, la accesibilidad no es un "plus" o una tarea para el final del sprint; es un requisito funcional de seguridad. Un paciente que intenta agendar una cita de urgencia puede tener la visión nublada por el estrés, o un adulto mayor puede tener dificultades para distinguir contrastes bajos. Mi obsesión desde el primer minuto fue blindar la interfaz bajo el estándar **WCAG 2.1 AA**.

No diseñé una sola combinación de color sin antes pasarla por el filtro de plugins como **Stark** o **Contrast**. Me impuse la regla estricta de mantener un ratio de contraste mínimo de **4.5:1** para texto normal y **3:1** para componentes visuales y texto grande. Hubo momentos en los que tuve que rechazar variantes estéticamente atractivas de gris claro porque no cumplían con el estándar de legibilidad. 

> "En diseño de producto para salud, la estética que sacrifica la legibilidad no es diseño; es una negligencia funcional. El contraste es, literalmente, el puente que permite al usuario acceder a su información médica."

Esta decisión estratégica significó que la paleta de neutros (grises y blancos) fuera calibrada para evitar el deslumbramiento en pantallas móviles, priorizando siempre que el texto fuera el protagonista absoluto de la interfaz.

#### Arquitectura tipográfica y la reducción de la carga cognitiva

La elección de la tipografía fue otro proceso de calibración fina que me tomó cerca de tres días. Necesitaba una familia que fuera legible en condiciones adversas y que tuviera una personalidad moderna pero humana. Tras evaluar varias opciones, me decanté por fuentes sans-serif de alta legibilidad como **Montserrat** e **Inter**, disponibles a través de **Google Fonts**. La razón técnica fue doble: por un lado, su excelente rendimiento en renderizado web y, por otro, la amplia variedad de pesos que permiten establecer una jerarquía visual clara sin necesidad de usar múltiples familias.

Establecí una escala tipográfica rigurosa en Figma, definiendo:
1.  **H1 a H4:** Con alturas de línea (*line-height*) generosas para evitar que los títulos compitieran entre sí.
2.  **Cuerpo de texto (Body):** Fijado en un mínimo de 16px para asegurar la lectura sin esfuerzo en dispositivos móviles.
3.  **Etiquetas y Captions:** Con un espaciado entre letras (*letter-spacing*) ligeramente aumentado para mejorar la distinción de datos técnicos en resultados de laboratorio.

Esta jerarquía no era solo visual; estaba diseñada para guiar el ojo del paciente. En una página de resultados médicos, la tipografía debe ayudar a separar lo que es un encabezado de sección de lo que es un valor crítico de salud. Al documentar estos estilos tipográficos como componentes reutilizables, aseguré que la plataforma mantuviera una voz visual consistente, independientemente de la densidad de información de la pantalla.

#### Iconografía como sistema de señalética digital

Para la iconografía, rechacé cualquier estilo que fuera puramente decorativo. En el Centro Médico ABC, los iconos deben funcionar como señales en un hospital: deben ser claros, universales y rápidos de procesar. Opté por un estilo de línea (**outline**) moderno y limpio, inspirándome en bibliotecas como **Feather Icons** y **Phosphor Icons**, pero personalizando trazos específicos para que se alinearan con el grosor de nuestra tipografía seleccionada.

Cada icono fue construido en Figma como un componente maestro dentro de una caja contenedora estándar (bounding box) de 24x24px, asegurando que los **touch targets** (áreas de interacción) fueran lo suficientemente grandes para ser accionados con el pulgar en entornos móviles, incluso por usuarios con movilidad reducida. Esta sistematización permitió que elementos complejos, como el selector de especialidades médicas, se sintieran intuitivos y ligeros, reduciendo la fricción visual que suelen tener los portales de salud tradicionales.

#### Voz, tono y la dimensión emocional de la imagen

El último pilar de estos fundamentos fue la definición de la estrategia de contenido y fotografía. Trabajando en la intersección entre diseño y comunicación, establecí directrices para que las imágenes no se sintieran como el típico "stock" genérico de hospital. Busqué un equilibrio: fotografías que mostraran la tecnología de punta del CM ABC, pero siempre centradas en el factor humano —médicos escuchando, pacientes tranquilos, entornos limpios y luminosos.

En cuanto a la **Voz y Tono**, definí atributos claros:
*   **Profesional pero Accesible:** Hablamos con autoridad médica, pero sin usar jerga que confunda al paciente.
*   **Empático:** Reconocemos que el usuario puede estar preocupado. Los mensajes de error, por ejemplo, no deben ser punitivos ("Datos incorrectos"), sino orientativos ("No pudimos encontrar tu número de registro, por favor verifícalo").

Esta coherencia entre lo que el usuario ve (fotografía) y lo que lee (microcopy) es lo que finalmente construye la confianza. Al terminar esta fase de fundamentos, ya no tenía solo una paleta de colores o una lista de fuentes; tenía una constitución visual. Había creado las reglas del juego que me permitirían, a partir de aquí, construir cada componente de la interfaz con la certeza de que todos pertenecerían a la misma familia.

#### Reflexión sobre la cimentación del sistema

Mirando hacia atrás, este esfuerzo inicial de 2021 fue lo que salvó al proyecto del caos visual. Como único diseñador a cargo de la ejecución, la tentación de empezar a "pintar" pantallas era grande, pero la disciplina de documentar la identidad primero me permitió trabajar con una velocidad increíble en las etapas posteriores. Este sistema de diseño no era un documento estático; era una caja de herramientas viva que garantizaba que, sin importar cuán compleja se volviera la plataforma, la percepción de excelencia del Centro Médico ABC permanecería intacta en cada píxel.


Con los fundamentos de identidad y las reglas de estilo ya blindadas, me enfrenté al siguiente gran reto técnico: ¿cómo transformar estos principios en piezas de ingeniería de diseño que fueran realmente reutilizables? Tenía los colores y la tipografía, pero ahora necesitaba construir los ladrillos. Fue en ese momento cuando decidí aplicar una estructura de **SISTEMA DE DISEÑO ATÓMICO Y BIBLIOTECA DE COMPONENTES**, descomponiendo la interfaz en sus elementos más pequeños para asegurar que la plataforma pudiera crecer sin romperse.

---

### Parte 2: Sistema de Diseño Atómico y Biblioteca de Componentes

#### Del lienzo estético a la ingeniería de componentes

Con los fundamentos de identidad y las reglas de estilo ya blindados, me enfrenté al siguiente gran reto técnico: ¿cómo transformar estos principios en piezas de ingeniería de diseño que fueran realmente reutilizables? Tenía los colores y la tipografía, pero ahora necesitaba construir los ladrillos. Fue en ese momento cuando decidí aplicar una estructura de **SISTEMA DE DISEÑO ATÓMICO Y BIBLIOTECA DE COMPONENTES**, descomponiendo la interfaz en sus elementos más pequeños para asegurar que la plataforma pudiera crecer sin romperse.

Mi razonamiento como diseñador en esta etapa fue puramente pragmático. No podía permitirme diseñar pantallas aisladas para una institución de la escala del Centro Médico ABC; eso habría generado una deuda técnica y visual insostenible en cuestión de semanas. Necesitaba un lenguaje que permitiera que cualquier interacción, desde la búsqueda de un especialista hasta la consulta de un expediente, fuera predecible y profesional. La transición de la "estética" a la "ingeniería de componentes" fue el paso necesario para garantizar que, si el hospital decidía añadir diez servicios nuevos el próximo año, la interfaz no se sintiera como un parche, sino como una extensión natural del sistema.

#### La jerarquía atómica como blindaje de consistencia

Adopté la metodología de **Atomic Design** de Brad Frost no como un ejercicio teórico, sino como el único marco de trabajo capaz de organizar la complejidad que tenía por delante. Como único responsable de la ejecución, este sistema se convirtió en mi copiloto. Establecí una jerarquía estricta que comenzaba en los **Átomos** —las partículas indivisibles de la interfaz— y escalaba hasta los **Organismos**.

Esta decisión fue estratégica: sabía que el portal del paciente y el sitio público compartían necesidades funcionales, pero diferían en densidad de datos. Al construir bajo este modelo, me aseguré de que cualquier ajuste en un átomo, como el radio de curvatura de un botón o el color de un estado de error, se propagara sistemáticamente por toda la arquitectura de la plataforma. Fue una labor de precisión en la que cada decisión de diseño quedaba "anclada" a una lógica global, eliminando la improvisación del proceso creativo.

#### Anatomía de los átomos: el rigor en el detalle mínimo

Comencé la construcción de la biblioteca por los elementos más básicos, los que definen la "textura" de la interacción. Dediqué días enteros a la anatomía de los **Botones**. No me limité a crear un botón azul; diseñé un sistema de tres niveles:
*   **Primarios:** Para las acciones de conversión crítica, como "Agendar Cita".
*   **Secundarios:** Para acciones de soporte.
*   **Terciarios (o de texto):** Para opciones de navegación menos jerarquizadas.

Para cada uno de estos niveles, definí tres tamaños (pequeño, mediano y grande) y gestioné de forma exhaustiva sus cinco estados: *default, hover, focused, active* y *disabled*. Especialmente en el sector salud, el estado *disabled* es crítico; el usuario debe entender inmediatamente por qué no puede avanzar sin sentir frustración. 

Posteriormente, me enfoqué en los **Campos de Formulario**. Diseñé entradas de texto, selectores (dropdowns), checkboxes y radio buttons con un enfoque obsesivo en la validación visual. Utilicé los colores semánticos que había definido previamente para que los estados de error y éxito fueran inequívocos. Si un paciente introduce mal su número de expediente, el sistema no solo debe decírselo; debe hacerlo con una claridad visual que reduzca la ansiedad, utilizando el rojo semántico y un icono de advertencia que ya formaba parte de mi set de átomos.

#### Ensamblando moléculas: cuando los elementos cobran función

Una vez que tuve los átomos bajo control, empecé a ensamblarlos para formar **Moléculas**. Aquí es donde el diseño empezó a sentirse como un producto real. El ejemplo más claro fue la creación de las **Tarjetas de Médicos**. Integré el átomo de imagen (un placeholder circular para la foto del especialista), el átomo de texto con jerarquía tipográfica (nombre en negrita, especialidad en cuerpo medio) y el átomo de botón con el CTA "Ver Perfil". 

También articulé las **Barras de Búsqueda**, uniendo el campo de entrada de texto con un icono de lupa y un botón de acción. Estas moléculas se convirtieron en el corazón de la navegabilidad. Al diseñar elementos como las **Migas de Pan (Breadcrumbs)** o los elementos de lista, mi prioridad fue la legibilidad y la facilidad de clic. Cada molécula fue probada individualmente para asegurar que la combinación de átomos no sacrificara la accesibilidad WCAG 2.1 AA que me había propuesto como estándar mínimo.

#### Organismos y la estructura de navegación global

El siguiente nivel de complejidad fue la configuración de los **Organismos**, secciones de interfaz que ya ocupan una parte significativa de la pantalla. Aquí es donde el **Header (Encabezado)** y el **Footer (Pie de Página)** tomaron forma definitiva. 
*   El **Header** fue un reto de arquitectura: debía integrar el logo institucional, la navegación principal para pacientes y la navegación utilitaria (acceso al portal, idioma, contacto) de forma armónica. 
*   Los **Modales de Confirmación** fueron otro organismo crítico. En un entorno médico, confirmar una cita o la descarga de un resultado de laboratorio requiere una claridad absoluta. Diseñé estos modales para que actuaran como plantillas reutilizables, manteniendo una estructura de título, cuerpo de texto explicativo y acciones principales/secundarias que se repitieran en toda la experiencia.

Estos organismos no eran solo dibujos; eran estructuras lógicas que definían cómo se sentiría "estar" dentro de la plataforma del Centro Médico ABC, independientemente de la página en la que se encontrara el usuario.

#### Figma como motor de escalabilidad: Auto Layout y Variantes

Para dar vida a este sistema, maniobré Figma con un enfoque de ingeniería. No utilicé la herramienta solo para dibujar, sino para programar comportamientos visuales. Implementé **Auto Layout** en cada componente para asegurar que fueran intrínsecamente responsivos. Esto significaba que, si el nombre de un médico era muy largo, la tarjeta se ajustaba automáticamente sin que yo tuviera que mover un solo píxel manualmente.

Utilicé las **Variantes** para gestionar todos los estados de los componentes desde una única instancia maestra. Si necesitaba cambiar el comportamiento de todos los inputs de la plataforma, solo tenía que ajustar el componente padre. Además, preparé los componentes para los *breakpoints* críticos: definí cómo se comportarían los organismos al pasar de una pantalla de escritorio de 12 columnas a una vista de tableta o móvil (menos de 768px). Esta configuración técnica fue lo que me permitió, más adelante, construir pantallas completas en minutos en lugar de horas.

#### La norma escrita: documentación para el handoff

Finalmente, entendí que un sistema de diseño sin reglas es solo una librería de iconos. Blindé todo el trabajo mediante una **documentación técnica integrada**. En el mismo archivo de Figma y apoyado en Google Docs, añadí notas rigurosas sobre el uso de cada pieza:
*   **Cuándo usar:** Definí que los botones primarios solo podían aparecer una vez por pantalla para evitar la fatiga de decisión.
*   **Reglas de "Hacer" y "No Hacer":** Prohibí el uso de ciertos colores sobre fondos específicos para proteger el contraste.
*   **Especificaciones de espaciado:** Establecí un sistema de rejilla y reglas de *padding* y *margin* que los desarrolladores pudieran seguir sin ambigüedades.

Esta documentación fue mi garantía de que la visión que estaba construyendo llegaría intacta al código. Al terminar esta biblioteca, sentí que ya no estaba solo frente al proyecto; tenía conmigo una "caja de herramientas" industrializada que me permitiría escalar el diseño a cualquier nivel de complejidad.

> **Insight Senior:** Un sistema de diseño no es un entregable de arte; es un contrato de confianza entre el diseñador, el desarrollador y el usuario final. La disciplina que invertí en definir el radio de un borde o el interlineado de un párrafo en esta etapa fue lo que evitó que la plataforma se desmoronara bajo el peso de sus propios datos semanas después.


Con los componentes ya probados y el sistema de diseño operando como una maquinaria aceitada, me enfrenté al momento de la verdad: sacar estos elementos del laboratorio y "vestir" los wireframes de baja fidelidad. Tenía los ladrillos, pero ahora debía construir el edificio completo, asegurándome de que la jerarquía visual y la densidad de información no colapsaran al pasar de la teoría a las pantallas reales de **DISEÑO DE PANTALLAS DE ALTA FIDELIDAD Y RESPONSIVIDAD**. La gran pregunta era si la elegancia del sistema soportaría la carga masiva de datos reales de un hospital de alta especialidad.

---

### Parte 3: Diseño de Pantallas de Alta Fidelidad y Responsividad

#### De la teoría del átomo a la realidad del hospital

Tenía ante mí una biblioteca de componentes impecable: botones con sus estados definidos, campos de formulario que respondían a cada interacción y una paleta de colores que respiraba la identidad del Centro Médico ABC. Sin embargo, al abrir los wireframes de baja fidelidad que habíamos validado semanas atrás, sentí el peso de la responsabilidad. No se trataba simplemente de "pintar" pantallas o aplicar una capa estética sobre los esqueletos grises. El reto era mucho más profundo: debía asegurar que la jerarquía visual y la densidad de información de una institución de alta especialidad no colapsaran bajo el peso de su propia complejidad.

Como diseñador, sabía que pasar de la teoría del átomo a la realidad de la página completa era el momento de la verdad. Un botón en una biblioteca es una promesa; un botón de "Urgencias" en una página de inicio es una herramienta que puede salvar vidas o generar un pánico innecesario. Mi razonamiento estratégico fue claro: cada decisión de diseño de interfaz debía honrar la promesa de confianza y modernidad del CM ABC, pero sobre todo, debía ser invisible para el paciente en crisis. No quería que admiraran la interfaz; quería que encontraran su solución en menos de tres segundos.

Para navegar este proceso con rigor, me apoyé en mi guía maestra de ejecución, el documento de **Diseño de Interfaz de Usuario (UI) de Alta Fidelidad**, que dictaba un orden lógico para evitar que la creatividad se desbordara y perdiera de vista la funcionalidad.

#### El esqueleto invisible: Configuración del entorno técnico

Antes de colocar el primer píxel de color, dediqué media jornada a preparar el lienzo en Figma. Es una etapa que muchos pasan por alto por las ganas de ver resultados visuales, pero para mí es el cimiento que blinda la integridad del producto. Siguiendo el **Paso 4.1** de mi hoja de ruta, configuré un archivo dedicado exclusivamente a los Mockups de Alta Fidelidad, vinculando la biblioteca de estilos globales que había construido previamente.

Implementé un **sistema de grid responsivo de 12 columnas** para la versión desktop. Elegí este número por su divisibilidad matemática: me permitía crear diseños de 2, 3, 4 o 6 columnas con una precisión quirúrgica, algo vital para una plataforma que debe mostrar desde perfiles médicos hasta complejos resultados de laboratorio. Definí los *breakpoints* estratégicos que guiarían toda la construcción:

*   **Móvil:** < 768px (priorizando la agilidad del pulgar).
*   **Tablet:** 768px - 1024px (el punto medio de consumo de contenido).
*   **Desktop:** > 1024px (donde reside la experiencia transaccional completa).

Esta estructura técnica no era un capricho; era el esqueleto invisible que aseguraría que, sin importar si el paciente accedía desde una iMac de 27 pulgadas o un smartphone antiguo, la información mantendría su peso relativo y su legibilidad.

#### La Homepage: Diseñando la puerta de entrada a la confianza

Al abordar la Homepage, mi objetivo era traducir el wireframe en una experiencia que gritara profesionalismo desde el primer impacto visual. Utilicé el **azul institucional del CM ABC** como el ancla de toda la interfaz. No es solo un color; en el contexto de la salud, ese tono específico de azul comunica autoridad, limpieza y, sobre todo, calma.

Para la sección "Hero", rechacé la idea de usar imágenes genéricas de stock que se sienten frías y distantes. En su lugar, integré fotografías de alta resolución que reflejaban la calidez humana del personal médico y la modernidad de las instalaciones. Quería que el paciente viera rostros reales, no modelos. Sobre esta imagen, posicioné el buscador de médicos y servicios como el elemento más prominente. Sabía, por la investigación previa, que la mayoría de los usuarios entran con una misión específica: "necesito un cardiólogo" o "quiero ver mis resultados". El buscador no podía ser un accesorio; debía ser el protagonista.

Articulé la jerarquía tipográfica utilizando una escala clara desde H1 hasta H4. El uso de espacios en blanco fue mi herramienta de diseño más potente aquí: en lugar de abarrotar la pantalla con promociones, dejé que cada sección respirara. Si el usuario se siente abrumado visualmente, su carga cognitiva aumenta y su capacidad para tomar decisiones disminuye. Mi trabajo fue guiar su mirada suavemente desde el buscador hacia las tarjetas de servicios destacados, asegurando que el camino fuera intuitivo y libre de distracciones estéticas innecesarias.

#### Búsqueda de médicos: Claridad bajo presión

El flujo de búsqueda y resultados fue, quizás, el reto de diseño más técnico de esta fase. Siguiendo las directrices de mi proceso detallado, diseñé las tarjetas de médicos como unidades de información autónomas y densas, pero legibles. Cada tarjeta incluía la foto del especialista, su nombre con una jerarquía tipográfica superior, la especialidad y los botones de acción (CTAs).

> **Insight Senior:** En una interfaz médica, el diseño de la tarjeta es un ejercicio de micro-arquitectura de la información. El paciente no busca un diseño bonito; busca credenciales. Por eso, prioricé la visibilidad de la especialidad y el campus de atención por encima de cualquier otro adorno visual.

Para los filtros laterales, utilicé los componentes de formulario que ya había validado: checkboxes y selectores con estados de foco muy claros. Sabía que un paciente buscando un oncólogo puede estar bajo un estrés emocional significativo. En ese estado, la motricidad fina puede verse afectada y la paciencia es mínima. Por ello, diseñé los filtros con áreas de clic generosas y una respuesta visual inmediata. La meta era que el usuario pudiera filtrar por seguro médico o ubicación en segundos, sin tener que descifrar iconos ambiguos o textos pequeños.

#### El Perfil del Médico: El equilibrio entre branding y conversión

El Perfil del Médico no era solo una página de información; era una pieza de "branding personal" dentro del ecosistema del hospital. Aquí, la interfaz debía desaparecer para dejar que la trayectoria del profesional brillara. Utilicé secciones limpias y bien espaciadas para detallar la educación, certificaciones y experiencia.

Sin embargo, el diseño no es solo informar, es facilitar la acción. Apliqué un peso visual máximo al botón de **"Agendar Cita"**. Lo ubiqué estratégicamente para que fuera lo primero que la vista encontrara tras validar las credenciales del médico. Utilicé un color de acento que contrastara fuertemente con el azul de fondo, asegurando que la conversión fuera el paso natural y evidente. El perfil debía generar confianza, y el diseño de la interfaz fue el vehículo para transmitir esa seguridad mediante la sobriedad y el orden.

#### Adaptación responsiva: La fluidez como estándar técnico

Una vez que las pantallas desktop estuvieron sólidas, inicié la maniobra de adaptabilidad. No creo en el diseño "estático" que luego se encoge; creo en el diseño fluido. Utilicé las herramientas de **Auto Layout** y **Constraints** en Figma para que los componentes se comportaran de forma inteligente.

Al pasar a la versión móvil, realicé una reorganización radical del contenido basada en el **Paso 4.3** del mothership. Las 12 columnas de desktop se apilaron verticalmente, transformando las tarjetas horizontales en bloques compactos fáciles de navegar con el pulgar. Implementé un menú hamburguesa que escondía la navegación compleja pero mantenía los accesos directos a "Urgencias" y "Resultados" siempre visibles. Probar cada pantalla en diferentes breakpoints fue un proceso tedioso pero necesario: verifiqué que ningún texto se cortara y que los botones mantuvieran un tamaño mínimo de 44x44 píxeles para asegurar la usabilidad táctil.

#### Blindaje de accesibilidad: El estándar WCAG 2.1 AA

Ninguna pantalla se dio por terminada hasta que pasó por mi auditoría forense de accesibilidad. Como detalla el **Paso 4.4** de mi protocolo, utilicé plugins como **Stark** para verificar el contraste de cada combinación de color. Mi regla fue innegociable: un ratio mínimo de 4.5:1 para todo el texto de cuerpo.

Hubo momentos donde tuve que ajustar los tonos de azul y gris que Marketing había sugerido originalmente, porque no pasaban la prueba de contraste en fondos claros. Fue una defensa técnica necesaria: una plataforma de salud que no es accesible para alguien con visión limitada es una plataforma fallida. También definí estados de "foco" visualmente disruptivos para la navegación por teclado. Pensé en el usuario que no puede usar un mouse y depende del "Tab"; para ellos, el diseño debe ser un mapa claro de dónde están parados en cada momento.

#### Reflexión sobre la responsabilidad del píxel

Diseñar para el Centro Médico ABC me recordó que, en nuestro oficio, la estética es solo la superficie de la ética. La consistencia visual que logré mediante el uso disciplinado del Design System no fue para que el archivo de Figma se viera ordenado; fue para reducir la carga cognitiva del paciente. Cuando un usuario ve que un botón de confirmación siempre tiene el mismo tono de verde y la misma sombra, su cerebro deja de procesar el "cómo" y se enfoca en el "qué".

La interfaz de alta fidelidad que entregué no era solo una colección de mockups bonitos; era un sistema de comunicación visual diseñado para ser resiliente, inclusivo y, sobre todo, humano. Cada margen de 16 píxeles y cada elección tipográfica fueron decisiones tomadas para sostener a una persona en un momento de vulnerabilidad.


Con las pantallas ya vestidas y la jerarquía visual blindada, me enfrenté a un nuevo nivel de incertidumbre: ¿cómo se sentiría realmente el flujo de agendamiento al ser operado por un usuario real? Tenía las imágenes, pero necesitaba que el sistema "cobrara vida" para descubrir si las transiciones entre pantallas eran tan fluidas en la práctica como lo eran en mi cabeza. Era el momento de conectar los cables y enfrentarme a la complejidad del **PROTOTIPADO INTERACTIVO Y MICROINTERACCIONES**.

---

### Parte 4: Prototipado Interactivo y Microinteracciones

#### El abismo entre el mockup y la experiencia cinética

Al terminar de vestir las 37 pantallas finales, me encontré ante una paradoja común en el diseño de producto: tenía un sistema visual impecable, pero seguía siendo una promesa estática. Los colores del Centro Médico ABC comunicaban la confianza necesaria y la tipografía Montserrat organizaba la información con una jerarquía quirúrgica, pero en ese punto del proceso, el diseño no "respondía". Sabía que un paciente en un momento de vulnerabilidad no interactúa con una imagen; interactúa con una respuesta del sistema. Si el botón de agendamiento no reaccionaba con la velocidad esperada o si el calendario de citas se sentía rígido, la estética no serviría de nada.

Mi razonamiento en este punto fue claro: necesitaba transformar esos artefactos en una experiencia cinética. No bastaba con que el flujo de búsqueda de médicos se viera intuitivo; el sistema debía fingir que estaba vivo para que yo pudiera descubrir las fricciones invisibles que solo aparecen cuando hay movimiento. La transición hacia el prototipado interactivo no fue una tarea de "conectar pantallas", sino un ejercicio de ingeniería de percepción. Tenía que blindar el producto contra la ambigüedad antes de que una sola línea de código fuera escrita.

#### La disciplina del enfoque: seleccionando los flujos de supervivencia

Como único diseñador a cargo de la ejecución, enfrenté la restricción del tiempo contra la complejidad del sistema. Prototipar cada rincón de la plataforma habría sido un desperdicio de recursos y un riesgo de mantenimiento inmanejable. Mi maniobra estratégica fue realizar una curaduría de alcance, seleccionando exclusivamente los cuatro flujos críticos que definen el éxito o el fracaso de la experiencia digital del paciente:

*   **Búsqueda y Selección de Médico:** El camino desde la homepage, operando el buscador con filtros dinámicos, hasta llegar al perfil detallado del especialista. Aquí es donde se construye la confianza inicial.
*   **Agendamiento de Cita:** La simulación del proceso de selección de tipo de cita, campus y la navegación por el calendario de disponibilidad. Este es el núcleo transaccional del proyecto.
*   **Acceso al "Mi Portal Paciente ABC":** La transición desde la navegación pública hacia el dashboard privado, asegurando que el usuario entendiera dónde encontrar sus resultados y citas previas.
*   **Interacción con Contenido Educativo:** El flujo de navegación hacia el blog y la lectura de artículos, validando que la plataforma también funcionara como un centro de conocimiento.

Elegí estos caminos porque concentran el 80% del valor para el paciente. Mi objetivo no era crear una réplica total, sino blindar los "happy paths" y las ramificaciones más sensibles. Si estos flujos funcionaban con fluidez, el resto del sistema podría escalar sobre una base probada.

#### Tejiendo la red: la arquitectura de los 'noodles' en Figma

Con el mapa mental de los flujos despejado, pasé a la fase de construcción técnica en el panel de prototipado de Figma. Establecer la navegación global requirió una disciplina casi forense. Fui pantalla por pantalla, componente por componente, creando **hotspots** que no solo conectaran frames, sino que respetaran la lógica de un sistema real.

Configuré el encabezado y el pie de página como anclas de seguridad. Me aseguré de que el logo del Centro Médico ABC siempre funcionara como un retorno inmediato a la homepage, eliminando cualquier posibilidad de que el usuario se sintiera atrapado en un flujo profundo. Los enlaces del footer fueron conectados de manera consistente en todas las pantallas relevantes para evitar "callejones sin salida". 

En el flujo de búsqueda, la conexión no fue lineal. Tuve que mapear cómo un clic en una tarjeta de médico llevaba a su perfil específico, asegurando que la transición mantuviera la continuidad visual. Esta fase de "cableado" es donde realmente se pone a prueba la arquitectura de la información; si un enlace se sentía forzado o si el destino no era el esperado, era el momento de corregir el flujo antes de que llegara a manos de los usuarios.

#### La profundidad del contexto: overlays y capas dinámicas

Uno de los mayores retos técnicos fue simular elementos que no requerían un cambio de pantalla completo, pero que son vitales para la navegación moderna. Para el **Mega Menú** de "Servicios Médicos", rechacé la idea de crear múltiples pantallas estáticas; en su lugar, utilicé la función **'Open Overlay'**.

Configuré el menú para que se desplegara con una animación de **'Move In'** desde la parte superior, dándole una sensación de jerarquía y profundidad. Mi razonamiento fue que el usuario nunca debe sentir que "se fue" de la página actual; el menú debe ser una capa de servicio que aparece y desaparece sin romper el contexto. Apliqué la misma lógica a los modales de confirmación de cita:

*   **Posicionamiento:** Centrado en pantalla para forzar el foco del usuario.
*   **Interacción de cierre:** Configuré el clic fuera del modal para cerrarlo, respetando los modelos mentales estándar de navegación web.
*   **Feedback visual:** El fondo se oscurecía ligeramente para separar la acción crítica del contenido de fondo, reduciendo el ruido visual en un momento de decisión importante.

#### El alma de la interfaz: microinteracciones con propósito

Para que el prototipo se sintiera como un producto terminado, inyecté vida en los componentes utilizando los principios que había definido previamente en el Design System. No quería animaciones decorativas; buscaba feedback funcional. Utilicé la potencia de los **'Interactive Components'** en Figma para que los botones, campos de formulario y tarjetas reaccionaran de forma autónoma.

Cada botón de la interfaz fue configurado con sus estados de **hover** y **press**. Al pasar el puntero, el cambio de color era sutil pero perceptible, confirmando al usuario que el elemento era interactivo. Para elementos más complejos, como los acordeones de preguntas frecuentes o los filtros de búsqueda, utilicé **'Smart Animate'**. Esta función me permitió interpolar los cambios de estado de manera fluida: cuando un usuario hace clic para expandir una sección, el contenido no "aparece" de golpe, sino que se desliza con una transición suave que el ojo humano puede seguir fácilmente.

> El movimiento en una interfaz de salud debe ser calmado y predecible. Una transición demasiado rápida puede generar ansiedad, mientras que una demasiado lenta puede percibirse como un sistema ineficiente. Calibré cada microinteracción para que durara entre 200ms y 300ms, el punto exacto donde el cerebro percibe la respuesta como instantánea pero natural.

#### Diseñando la espera: la psicología del 'After Delay'

Un aspecto que a menudo se ignora en el prototipado es la simulación del rendimiento real. En una plataforma médica, los procesos de búsqueda o el envío de formularios de agendamiento implican una latencia del backend que no podemos ignorar. Para probar si el feedback visual era suficiente para mitigar la ansiedad del paciente, decidí diseñar la espera.

Utilicé transiciones de **'After Delay'** para insertar estados de carga o **spinners** entre acciones críticas. Por ejemplo, al hacer clic en "Buscar Médico", el prototipo no saltaba inmediatamente a los resultados. Mostraba durante 800ms un indicador de carga discreto antes de revelar la lista. Esta decisión técnica me permitió evaluar si el usuario entendía que el sistema estaba trabajando para él o si, por el contrario, intentaba hacer clic repetidamente pensando que el botón no funcionaba. Simular esta latencia fue fundamental para validar que el diseño era resiliente ante las limitaciones técnicas del mundo real.

#### El rigor del control de calidad: probando mi propia creación

Antes de considerar el prototipo como un artefacto listo para la validación externa, realicé una auditoría de estrés. Me obligué a "comer mi propia comida de perro", navegando por cada flujo con la intención de romperlo. Busqué enlaces rotos, animaciones que se sentían pesadas y, sobre todo, inconsistencias en el comportamiento de los componentes.

Descubrí, por ejemplo, que en la versión móvil, el menú hamburguesa tenía un área de clic demasiado pequeña que dificultaba la navegación con una sola mano. También identifiqué que algunas transiciones de **'Smart Animate'** creaban artefactos visuales extraños cuando las capas no estaban nombradas de forma idéntica en ambos frames. Corregí cada uno de estos detalles, refinando la fluidez hasta que el prototipo se sintió sólido.

Al final de esta actividad, lo que tenía frente a mí ya no eran 37 imágenes; era un simulacro funcional de la visión del Centro Médico ABC. El prototipo de alta fidelidad se convirtió en el lenguaje definitivo para alinear a los stakeholders. Ya no hablábamos de "cómo se vería el calendario", sino de "cómo se siente agendar una cita". 


Con el prototipo blindado y las interacciones pulidas, me encontraba en el momento de mayor tensión del proyecto: era hora de entregar mi creación a personas reales que no sabían nada de mis decisiones de diseño. Tenía la sospecha de que el flujo de agendamiento era sólido, pero necesitaba métricas duras y feedback visceral para confirmar si la arquitectura que construí sobreviviría al contacto con el usuario final. El siguiente desafío era la **VALIDACIÓN CON USUARIOS, MÉTRICAS E ITERACIÓN DE DISEÑO**, donde descubriría si mis hipótesis eran soluciones reales o simplemente suposiciones bien diseñadas.

---

### Parte 5: Validación con Usuarios Métricas E Iteración de Diseño

#### El momento de la verdad: El diseño frente al paciente

Al cerrar la fase de prototipado, me encontraba ante un artefacto que, en mi lienzo de Figma, parecía infalible. Había invertido semanas en pulir cada sombra, en asegurar que el **Design System** fuera una maquinaria de precisión y en que las microinteracciones se sintieran naturales. Sin embargo, en este oficio, el exceso de confianza es el primer paso hacia el error. Sabía que, por muy "pixel-perfect" que fuera mi entrega, seguía siendo una hipótesis. No diseñamos para ganar premios de estética, sino para resolver fricciones reales en momentos donde el usuario —un paciente o su familiar— se encuentra en una situación de vulnerabilidad, estrés o urgencia.

La transición hacia la validación no fue un trámite administrativo; fue un ejercicio de humildad necesaria. Necesitaba transformar mis sospechas en métricas duras. Tenía que ver si esa arquitectura de información que construí con tanto celo sobreviviría al contacto con una persona real que solo quería agendar una cita para su madre o revisar un resultado de laboratorio sin complicaciones. El prototipo de alta fidelidad era mi simulacro, pero ahora necesitaba el "baño de realidad" que solo el feedback directo puede proporcionar. Mi objetivo era claro: asegurar que la plataforma del Centro Médico ABC fuera no solo una cara bonita, sino una herramienta de salud infalible antes de entregar una sola línea de especificación a ingeniería.

#### La ejecución forense de las pruebas moderadas

Dediqué dos días completos a la planificación táctica de esta ronda de validación. No podía dejar nada al azar. Recluté a 8 participantes que representaban fielmente el espectro de nuestras **Personas**: Elena, la madre preocupada por la salud familiar; Carlos, el usuario crónico que necesita eficiencia; y Sofía, la nativa digital que espera inmediatez. Algunos de ellos ya habían interactuado con los wireframes iniciales, lo que me permitía medir la evolución de la experiencia, mientras que otros llegaban con ojos frescos, libres de cualquier sesgo previo.

Utilicé Google Meet como mi laboratorio remoto. Mi protocolo de moderación fue riguroso: apliqué la técnica de **"think-aloud"**, pidiendo a los participantes que narraran su flujo de pensamiento en voz alta mientras navegaban por el prototipo. Esto es vital; no me interesaba solo dónde hacían clic, sino *por qué* dudaban o qué esperaban encontrar detrás de cada etiqueta. Estructuré el guion de prueba alrededor de cinco tareas críticas que representaban el núcleo transaccional del sitio:

*   **Búsqueda especializada:** Encontrar un gastroenterólogo en el Campus Santa Fe y obtener su contacto.
*   **Agendamiento complejo:** Iniciar el proceso para una tomografía, un flujo que suele generar ansiedad por la cantidad de requisitos.
*   **Acceso al portal unificado:** Simular la entrada a "Mi Portal Paciente ABC" para buscar resultados de laboratorio.
*   **Consumo de contenido:** Localizar artículos de salud preventiva.
*   **Navegación institucional:** Explorar los servicios de un Centro de Alta Especialidad como el Cardiovascular.

Durante las sesiones, que duraban entre 60 y 75 minutos, mi rol fue el de un observador silencioso. Grabé cada interacción, tomando notas frenéticas sobre errores de navegación, tiempos de duda y, sobre todo, las expresiones de alivio o frustración. Cada vacilación de un usuario frente a un botón era una señal de que mi diseño todavía tenía "ruido".

#### El veredicto de los datos: Del 45 al 78

Una vez terminadas las sesiones, me sumergí en la fase de análisis. No basta con tener grabaciones; hay que destilar la evidencia. Utilicé Google Sheets para tabular los datos cuantitativos y Miro para realizar un **análisis de afinidad** con los hallazgos cualitativos. Agrupé los comentarios por tarea y pantalla, buscando patrones que se repitieran. Fue en este momento cuando las métricas me dieron la primera gran satisfacción del proyecto.

> El resultado fue contundente: logramos un **SUS Score (System Usability Scale) de 78/100**.

Para poner esto en perspectiva, la plataforma anterior tenía un baseline de apenas 45/100, lo que se considera una experiencia deficiente. Saltar a un 78 posiciona a la nueva interfaz en el rango de "Buena a Excelente". Pero los números no se quedaron ahí:
*   **Tasa de éxito:** El 95% de los usuarios completaron las tareas sin necesidad de intervención, lo que validaba la claridad de la arquitectura.
*   **Eficiencia temporal:** Registré una reducción del 30% en el tiempo promedio por tarea en comparación con el sitio actual.
*   **SEQ (Single Ease Question):** Obtuvimos un promedio de 6.2/7, confirmando que la percepción de facilidad era consistente en todos los flujos.

Estos datos no eran solo trofeos; eran mi blindaje estratégico. Me permitían demostrar a los stakeholders del Centro Médico ABC que el rediseño no era una cuestión de gusto personal, sino una mejora tangible en la operatividad digital de la institución.

#### El "baño de realidad": Donde el diseño falló

A pesar de los excelentes números generales, las pruebas revelaron fisuras que mi ojo de diseñador había pasado por alto. El hallazgo más crítico —y el más doloroso de aceptar— fue la confusión respecto a la etiqueta **"Mi Portal Paciente ABC"**. Elena, por ejemplo, dudó al verla; no estaba segura de si ese era el lugar donde encontraría sus resultados de imagenología o si era solo para citas administrativas. El concepto de "hub unificado" que yo tenía tan claro en mi cabeza no se estaba transmitiendo con la fuerza necesaria. La etiqueta era demasiado institucional y poco descriptiva de la potencia de la herramienta.

Otro punto de fricción apareció en las páginas de los Centros de Alta Especialidad. Carlos intentó buscar el teléfono directo del Centro de Cáncer y, aunque la información estaba en el sitio, no tenía la prominencia que un usuario en una situación de urgencia requiere. Los usuarios terminaban regresando al contacto general, perdiendo segundos valiosos. Finalmente, detecté que el **microcopy** en los mensajes de error de los formularios era demasiado técnico. Aunque eran funcionales, carecían de la "calidez humana" que habíamos definido como principio rector. Un mensaje que decía "Error en el formato de fecha" se sentía frío y punitivo, no empático.

#### Iteración: Regresando al lienzo para pulir el diamante

Con estos hallazgos en mano, no perdí tiempo. Regresé a Figma para ejecutar lo que yo llamo la "limpieza final". No se trataba de rediseñar todo, sino de aplicar ajustes quirúrgicos basados en evidencia.

1.  **Refinamiento de Microcopy y Jerarquía:** Cambié el enfoque de la homepage. En lugar de solo confiar en el nombre del portal, añadí microcopy explícito: *"Tu centro de salud digital unificado para citas y resultados"*. Esta pequeña frase eliminó la ambigüedad de raíz. En el sitio actual, esto evolucionó hacia acciones directas como "Consulta tus resultados", priorizando la intención del usuario sobre el nombre del producto.
2.  **Rediseño de Módulos de Contacto:** Creé un componente de "Contacto Directo" mucho más agresivo visualmente para las páginas de servicios. Utilicé variantes en el **Design System** para asegurar que este módulo apareciera de forma consistente en todos los centros especializados, incluyendo el teléfono específico y un acceso directo a WhatsApp o formularios.
3.  **Optimización de CTAs:** Observé que algunos usuarios dudaban un segundo antes de hacer clic en "Agendar Cita" en el perfil del médico. Aumenté el contraste del botón y ajusté su ubicación mediante **Auto Layout** para que siempre fuera el elemento dominante en el primer scroll, independientemente del tamaño de la pantalla.
4.  **Humanización de Errores:** Reescribí cada mensaje de validación. Pasamos de "Campo obligatorio" a frases más orientadas a la ayuda, como "Por favor, indícanos tu fecha de nacimiento para continuar".

Cada uno de estos cambios fue documentado y vinculado directamente al hallazgo de la prueba de usabilidad que lo originó. Como **Product Designer**, mi responsabilidad era cerrar el ciclo: probar, analizar, iterar y documentar. Esta fase fue el control de calidad definitivo. Me dio la seguridad de que lo que estábamos por entregar a desarrollo no solo funcionaba en mi monitor, sino que funcionaba en las manos de las personas que más lo necesitaban.


Con el diseño ya validado y las iteraciones de usabilidad integradas en el prototipo, me enfrenté a la última frontera antes de la construcción real: el lenguaje. Sabía que la estructura era sólida, pero para que la plataforma realmente respirara "calidez humana", necesitaba un nivel de detalle microscópico en la comunicación. Me preparé para el **REFINAMIENTO DE MICROCOPY Y HANDOFF TÉCNICO**, el momento en que cada palabra sería pesada y cada componente sería empaquetado para que los desarrolladores no tuvieran que adivinar ni un solo pixel. La tensión ahora no estaba en si el usuario entendería el flujo, sino en si el equipo técnico recibiría una guía lo suficientemente blindada para que nada se perdiera en la traducción de diseño a código.

---

### Parte 6: Refinamiento de Microcopy y Handoff Técnico

#### El lenguaje como la última capa de diseño

Al cerrar las pruebas de usabilidad, me encontré con una verdad incómoda: los flujos funcionaban y la estética era impecable, pero la plataforma todavía no "hablaba" como el Centro Médico ABC. Tenía ante mí un producto técnicamente validado, pero emocionalmente plano. Como diseñador, sé que los píxeles atraen, pero las palabras retienen y guían. No podía permitir que un mensaje de error genérico o un botón ambiguo arruinara semanas de trabajo en arquitectura de información. La transición hacia el refinamiento de microcopy y el handoff técnico no fue un trámite administrativo; fue el proceso de blindar la experiencia para que nada se perdiera en la traducción de diseño a código.

Entendí que mi responsabilidad no terminaba en el prototipo interactivo. Si un desarrollador tenía que adivinar qué pasaba cuando un servidor fallaba, o si un paciente se sentía regañado por un formulario mal completado, yo habría fallado como diseñador. Me propuse transformar esos artefactos visuales en un sistema de comunicación empático y en un paquete de construcción quirúrgico. La tensión cambió de "vencer la fricción del usuario" a "eliminar la ambigüedad del desarrollador".

#### La auditoría forense del microcopy

Inicié un recorrido sistemático por cada uno de los 37 mockups de alta fidelidad con una mentalidad de UX Writer. Mi objetivo era simple pero ambicioso: asegurar que cada etiqueta, título e instrucción fuera útil, concisa y, sobre todo, humana. Realicé un inventario completo de todos los elementos de texto, desde los menús de navegación hasta los *tooltips* más escondidos. En este punto, la autocrítica fue mi herramienta principal. Me pregunté constantemente: "¿Este botón le dice al usuario exactamente qué va a pasar después de hacer clic?" o "¿Este mensaje de error ayuda a solucionar el problema o solo lo señala?".

> El microcopy es el tejido conectivo de la interfaz. Si el diseño visual es el cuerpo, el texto es la voz que le da personalidad y confianza.

Transformé la frialdad técnica en calidez institucional. Por ejemplo, donde antes había mensajes secos como "Error: Campo inválido", redacté alternativas constructivas y empáticas alineadas con la voz del CM ABC: "Por favor, revisa este campo. Parece que hay un pequeño error" o "¡Ups! Este dato no parece correcto, ¿podrías verificarlo?". Esta sutileza es crítica en un contexto de salud, donde el usuario suele estar ansioso o con prisa. Refiné los CTAs (Call to Action) para que fueran motores de acción claros:
*   Cambié "Enviar" por **"Agendar mi cita ahora"**.
*   Sustituí "Ver más" por **"Consulta tus resultados"**.
*   Optimicé la búsqueda con un directo **"Encuentra a tu médico"**.

Aseguré que la consistencia terminológica fuera absoluta. Si decidimos usar "Agendar" en lugar de "Programar", ese término se convirtió en ley en toda la plataforma. Evité la jerga médica innecesaria, traduciendo conceptos complejos a un lenguaje que un familiar ocupado pudiera entender en segundos, sin sacrificar el profesionalismo que exige una institución de esta envergadura.

#### Higiene de archivos: el respeto por el equipo técnico

Con el texto pulido, pasé a una fase que muchos diseñadores ignoran pero que define la madurez de un senior: la limpieza forense de los archivos en Figma. Un archivo desordenado es una invitación al error y a la deuda técnica. Dediqué dos días enteros a auditar la estructura de mis capas y frames. Eliminé cada capa oculta, cada grupo huérfano y cada "Frame 452" que se había colado durante las iteraciones rápidas.

Mi proceso de higiene incluyó:
1.  **Nombrado Lógico:** Renombré cada elemento siguiendo una convención clara y compartida con el equipo de desarrollo.
2.  **Blindaje del Design System:** Verifiqué que cada botón, campo de formulario y tarjeta fuera una instancia real de los componentes maestros. Si un elemento se desviaba un solo píxel del sistema, lo corregía o creaba una variante documentada.
3.  **Auditoría de Auto Layout:** Me aseguré de que la responsividad no fuera solo visual, sino estructural. Al usar Auto Layout correctamente en Figma, las especificaciones de espaciado y el comportamiento elástico de la interfaz quedaron intrínsecamente documentados. El desarrollador no necesitaba preguntarme cómo se vería el buscador en una pantalla de 13 pulgadas; el archivo mismo se lo mostraba al estirarlo.

Esta rigurosidad garantiza que el producto final sea una copia fiel del diseño. No hay nada más frustrante que ver un diseño pixel-perfect desmoronarse en producción porque el desarrollador no entendió las reglas de espaciado que el diseñador nunca explicitó.

#### Optimización de activos y exportación técnica

La preparación de los *assets* fue el siguiente paso crítico. No me limité a marcar elementos como exportables; los optimicé para el rendimiento web. Configuré todos los iconos como vectores en formato **SVG**, asegurando que mantuvieran su nitidez en pantallas Retina y dispositivos móviles de alta densidad. Para las imágenes fotográficas, que debían reflejar la excelencia médica del CM ABC, realicé un proceso de curaduría y compresión técnica.

Utilicé formatos como **WebP** para equilibrar la alta resolución de las fotografías con tiempos de carga ágiles. Organicé todo este material en una estructura de carpetas centralizada en Google Drive, separando los logotipos institucionales en sus versiones correctas (positivo, negativo, vectorial) de los activos de la interfaz. Mi meta era que el equipo de TI no tuviera que buscar nada; todo debía estar a un clic de distancia, nombrado y optimizado.

#### Documentando la lógica invisible

Figma y Zeplin son excelentes para mostrar medidas, pero son mudos ante la lógica condicional. Por eso, dediqué tiempo a crear anotaciones manuales detalladas sobre los mockups. Estas notas explicaban lo que el modo de inspección no puede capturar:
*   **Comportamientos Complejos:** ¿Qué pasa si el usuario intenta agendar una cita en un horario que se acaba de ocupar?
*   **Validaciones Condicionales:** ¿Cuándo debe aparecer el mensaje de error en el campo del RFC?
*   **Microinteracciones:** Documenté las especificaciones de animaciones y transiciones, definiendo duraciones (en milisegundos), tipos de *easing* y propiedades animadas.

Estas anotaciones son el "manual de instrucciones" que evita que el desarrollador tenga que adivinar mi intención. Al especificar que un modal debe entrar con un *ease-out* de 200ms, estoy asegurando que la percepción de fluidez y refinamiento que validamos en el prototipo se mantenga en el código final.

#### El Handoff: alineación estratégica sobre la mesa

El proceso culminó en una reunión de Handoff de tres horas con el equipo completo de desarrollo (frontend, backend y QA). No fue una presentación pasiva; fue un recorrido guiado por la visión del producto. "Caminé" con ellos a través de los flujos críticos, usando el prototipo interactivo para demostrar cómo cada componente del Design System debía comportarse en la vida real.

Les mostré cómo utilizar el modo **Inspect de Figma** (o Zeplin, según su preferencia) para extraer fragmentos de CSS, colores y tipografías de forma automática. Resolvimos dudas técnicas sobre la marcha: limitaciones de API, estados de carga y casos de borde que solo surgen cuando el equipo de ingeniería empieza a pensar en la construcción. Esta sesión transformó al equipo técnico de "ejecutores de planos" a "aliados de la experiencia". Salieron de la reunión con una comprensión clara no solo de qué construir, sino de por qué cada decisión de diseño era vital para el paciente del Centro Médico ABC.

**Reflexión final:**
El éxito de un producto digital no se mide por lo que el diseñador entrega, sino por lo que el desarrollador logra construir. Al dedicar este nivel de obsesión al refinamiento del microcopy y a la rigurosidad del handoff, logré que la plataforma del Centro Médico ABC no perdiera su esencia en el proceso de implementación. Aprendí que un diseño "terminado" es solo una promesa; el handoff es el contrato que asegura que esa promesa se cumpla para el usuario final. El valor que dejé no fueron solo archivos organizados, sino un lenguaje común entre diseño e ingeniería que minimizó el retrabajo y maximizó la calidad del producto entregado.

---

