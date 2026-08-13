# Fase 2: Ideación y Diseño

## Actividad 9: actividad_09_diseno_de_sistema

### Parte 1: AUDITORÍA FORENSE E INVENTARIO DE COMPONENTES RECURRENTES

#### El peso de la inconsistencia invisible

Las 42 pantallas de alta fidelidad que terminamos para el MVP B2C de AsDeporte lucían impecables en una presentación de stakeholders, pero para mi ojo, representaban un riesgo operativo latente. Tras semanas de iteración visual y definición de flujos, me encontré en ese punto crítico donde la creatividad debe ceder el paso a la estructura. Teníamos un producto que "se veía bien", pero carecía de una columna vertebral técnica. Sabía que si entregaba esos mockups a ingeniería en ese estado, el resultado en código sería una pesadilla de CSS redundante, componentes duplicados y una deuda técnica que nos cobraría factura en la primera actualización.

Mi razonamiento en este momento fue puramente estratégico: debíamos dejar de diseñar "pantallas" para empezar a construir un "sistema vivo". La transición hacia el diseño de sistema no fue un trámite administrativo; fue una maniobra de blindaje. Necesitaba diseccionar cada píxel para extraer el ADN de AsDeporte y asegurar que la experiencia fuera escalable, no solo para este MVP, sino para la futura integración del modelo B2B. El objetivo era transformar la artesanía visual en ingeniería de interfaz, garantizando que cada botón, cada tarjeta y cada campo de formulario fuera una pieza de un engranaje perfectamente aceitado.

#### La disección: Auditoría forense de mockups

Inicié el proceso con una inspección quirúrgica de cada uno de los archivos de alta fidelidad. No se trataba de una revisión estética, sino de un barrido técnico para identificar patrones y, sobre todo, inconsistencias. Abrí simultáneamente el flujo de registro, el perfil del atleta y la pantalla de detalles de evento —tres áreas críticas del MVP— para realizar una comparación directa.

Lo que buscaba eran las "micro-fricciones" visuales que suelen pasar desapercibidas:
*   **Variaciones de Radio de Borde:** Descubrí que en algunas tarjetas de evento estábamos usando un *border-radius* de 8px, mientras que en los modales de confirmación aparecían esquinas de 12px. Esta falta de rigor rompe la cohesión del lenguaje visual.
*   **Jerarquías de Color:** Verifiqué que el uso del "Rojo AsDeporte" fuera consistente en todos los llamados a la acción (CTAs) primarios, detectando que en un par de pantallas de flujo profundo se había utilizado una variante ligeramente distinta por un error de selección manual.
*   **Sistema de Sombras (Elevación):** Analicé cómo estábamos proyectando la profundidad. El sistema necesitaba una lógica matemática de sombras para que el usuario entendiera qué elementos están "encima" de otros de forma intuitiva.

Esta auditoría fue el primer paso para limpiar el ruido. Antes de estandarizar, tuve que decidir qué versiones de estos elementos eran las correctas. No podía permitir que un error de diseño visual se convirtiera en un componente maestro. Fue un ejercicio de higiene profesional: purgar los archivos de diseño de cualquier residuo creativo que no estuviera alineado con la visión sistémica del producto.

#### Identificando la materia prima: Átomos y Moléculas

Una vez terminada la auditoría, procedí a identificar los elementos recurrentes que formarían la biblioteca inicial. Mi enfoque fue pragmático: seleccioné aquellos componentes que aparecían en más del 80% de los flujos, ya que ahí es donde reside el mayor ahorro de tiempo para desarrollo y la mayor ganancia en consistencia para el usuario.

Categoricé los hallazgos en estructuras que pudiéramos escalar:
*   **Botones (El motor de la acción):** Identifiqué tres niveles de jerarquía: el botón primario para las inscripciones, el secundario para acciones de soporte y el "ghost button" para acciones terciarias. Cada uno con una misión clara y un peso visual definido.
*   **Campos de Entrada (Inputs):** Analicé los formularios de registro y configuración de perfil. Aquí la estandarización era vital; no podíamos tener diferentes estilos de campos de texto para el nombre del atleta y para sus datos de contacto. Definí una estructura única que incluyera etiquetas, placeholders y mensajes de error.
*   **Tarjetas de Evento (La unidad de valor):** Este es quizás el componente más complejo. La tarjeta debe contener la imagen del evento, la fecha, el lugar y el estado de la inscripción. Al estandarizarla, me aseguré de que, sin importar si el evento es una Spartan Race o un triatlón de L'Étape, la información se presente con la misma estructura lógica, reduciendo la carga cognitiva del atleta.
*   **Iconografía de Marca:** Revisé el set de iconos para asegurar que todos compartieran el mismo grosor de trazo (*stroke*) y estilo visual. Un icono de "calendario" con esquinas redondeadas no puede convivir con un icono de "ubicación" de trazo afilado.

> **Insight de Diseño:** La reutilización no es solo una medida de eficiencia; es una declaración de integridad. Cada píxel de diferencia en un botón que se repite 20 veces a lo largo de la aplicación es, técnicamente, una falla en la promesa de marca. El usuario puede no notar el error conscientemente, pero su cerebro percibe la falta de profesionalismo.

#### Anclas de navegación: El análisis de estructuras globales

El siguiente nivel de mi auditoría se centró en los elementos que "anclan" la experiencia: los encabezados (headers) y los pies de página (footers). Estos no son simples componentes; son las brújulas del usuario. 

En el caso de AsDeporte, el encabezado de sección debe ser una constante matemática. Analicé cómo se comportaba al hacer scroll y cómo cambiaba su contenido según la profundidad de la navegación. Mi objetivo fue asegurar que la disposición del logo, el botón de "atrás" y el acceso al perfil fuera idéntica en cada pantalla del MVP. Si el usuario tiene que buscar dónde está el menú de navegación cada vez que cambia de sección, hemos fallado en la arquitectura de interacción.

El pie de página de navegación (Tab Bar en móvil) recibió una atención especial. Al ser un elemento persistente, cualquier error en su diseño o espaciado se multiplica por cada segundo que el usuario pasa en la app. Documenté las distancias exactas entre los iconos y el tamaño de las áreas de toque (*touch targets*), asegurando que cumplieran con los estándares de accesibilidad que habíamos definido previamente. Estos elementos globales son los que dan la sensación de "solidez" a la plataforma; si ellos no fallan, el resto de la interfaz se siente segura.

#### Mapeo forense de estados interactivos

Un componente estático es una mentira. En la vida real, un botón no es solo un rectángulo rojo; es un objeto que reacciona. Por eso, dediqué una fase intensa de esta auditoría a mapear los estados interactivos de cada elemento identificado, basándome en las definiciones de interacción que habíamos trazado.

Para cada componente en mi lista maestra, documenté cuatro estados fundamentales:
1.  **Normal:** El estado base cuando no hay interacción.
2.  **Hover (en web/desktop):** El cambio sutil que indica que el elemento es clicable.
3.  **Presionado (Active):** El feedback visual inmediato cuando el usuario interactúa, crucial para evitar la incertidumbre de "¿le piqué o no?".
4.  **Deshabilitado (Disabled):** Vital para los formularios de inscripción donde el botón de "Pagar" no debe activarse hasta que todos los campos obligatorios estén completos.

Este mapeo fue un ejercicio de empatía técnica. Si el equipo de Frontend no recibe estas especificaciones, se verá obligado a inventarlas sobre la marcha, lo que inevitablemente lleva a una fragmentación de la experiencia. Al documentar estos estados ahora, estoy blindando la usabilidad y asegurando que el feedback visual sea universal en toda la plataforma AsDeporte.

#### La Lista Maestra: El inventario como declaración de intenciones

Culminé esta fase consolidando todos estos hallazgos en una "Lista Maestra de Componentes". Este documento no es un simple inventario; es la hoja de ruta para la construcción de nuestra librería en Figma y, eventualmente, en código. 

Esta lista incluye:
*   El nombre técnico del componente (ej. `btn-primary-large`).
*   Su ubicación en los mockups de referencia.
*   Una breve descripción de su propósito funcional.
*   El inventario de sus variaciones necesarias (ej. con icono, sin icono, carga/loading).

Al finalizar este inventario, sentí la tranquilidad de quien ha puesto orden en el caos. Habíamos pasado de tener un montón de pantallas atractivas a tener un catálogo de piezas de ingeniería listas para ser ensambladas. Este es el momento en que la "higiene del diseño" se convierte en valor de negocio: estamos previniendo la deuda técnica desde el día uno y respetando al usuario final con una interfaz predecible, coherente y profesional.

> **Reflexión Senior:** Muchos diseñadores ven el sistema de diseño como una restricción a su creatividad. Yo lo veo como lo opuesto: es lo que libera nuestra creatividad. Al estandarizar lo repetitivo (los botones, los inputs, las tarjetas), liberamos espacio mental para enfocarnos en resolver los problemas complejos de experiencia que realmente mueven la aguja para AsDeporte.

#### Próximo paso:

Teníamos la lista de lo que necesitábamos, pero ahora venía el reto técnico de verdad: definir la anatomía exacta de cada una de esas piezas. No bastaba con saber que necesitábamos un botón; tenía que definir sus valores exactos de espaciado, sus tokens de color y, sobre todo, cómo se comportaría bajo las estrictas reglas de accesibilidad que nos habíamos autoimpuesto. El inventario estaba listo, pero la fase de especificación atómica estaba a punto de revelar complejidades que aún no habíamos anticipado en los mockups estáticos.

### Parte 2: ESPECIFICACIÓN ATÓMICA: APARIENCIA Y COMPORTAMIENTO INTERACTIVO

#### La gramática detrás del píxel: de la lista al lenguaje

Tener un inventario de componentes era un gran primer paso, pero pronto me di cuenta de que una lista de piezas sin reglas de ensamblaje es, en el mejor de los casos, una sugerencia y, en el peor, una invitación al caos. Me encontraba en ese punto crítico donde los mockups de alta fidelidad de AsDeporte se veían impecables, pero sabía que si entregaba eso a ingeniería sin una "gramática" clara, el producto final se fragmentaría en cuestión de semanas. Mi razonamiento fue puramente estratégico: para que la plataforma escale y soporte tanto el flujo B2C como el futuro B2B, necesitaba transformar cada elemento visual en una definición técnica unívoca.

Siguiendo la metodología que definí para el **inicio del diseño de sistema**, pasé de ser un diseñador de interfaces a un arquitecto de especificaciones. No se trataba de decidir si un botón era azul o verde —eso ya estaba resuelto—, sino de definir exactamente qué azul, bajo qué parámetros de código y cómo debía reaccionar cuando un usuario, quizás con los dedos sudados tras una carrera, intentara interactuar con él en su móvil. Esta transición de la observación a la codificación de estilos fue el ejercicio de disciplina más intenso de esta fase; fue el momento de dotar a cada átomo de la interfaz de una identidad técnica indestructible.

#### La anatomía del token: codificando la identidad visual

Mi primer movimiento táctico fue diseccionar los cimientos: la paleta de colores y la tipografía. No me conformé con copiar los valores hexadecimales de mis diseños previos. En lugar de eso, establecí una estructura de **design tokens** que respondiera a funciones, no solo a estéticas. 

Para AsDeporte, esto significó que el azul corporativo no era simplemente `#0055FF`; en mi especificación, se convirtió en `brand-primary-main`. ¿Por qué? Porque si mañana la marca decide ajustar su tono de azul, solo tenemos que cambiar la definición del token en un solo lugar y todo el ecosistema (desde el MVP móvil hasta la plataforma web) se actualizará en cascada. Definí tokens para:
*   **Colores semánticos:** Rojo para errores de validación en el registro, verde para confirmaciones de pago exitosas y amarillo para alertas de cupos limitados en eventos.
*   **Jerarquía tipográfica:** Fijé las escalas de la tipografía Montserrat, no por tamaño arbitrario, sino por roles: `heading-xl` para títulos de eventos, `body-m` para descripciones y `caption-s` para metadatos como la fecha de la competencia.

Utilicé las funcionalidades de estilos globales en mi software de diseño para blindar estas decisiones. Al configurar estos estilos como variables centrales, me aseguré de que cualquier desviación fuera imposible. Si un diseñador intentaba usar un gris que no estaba en la paleta aprobada, el sistema lo señalaría. Esta es la única forma de evitar la fragmentación visual que tanto daño le había hecho a la aplicación anterior de AsDeporte.

#### El aire como estructura: la métrica del espaciado y el padding

Uno de los errores más comunes que he visto en sistemas de diseño inmaduros es dejar el espaciado al azar o al "ojo" del diseñador. Para AsDeporte, decidí implementar una escala de espaciado estricta basada en un **sistema de 8px**. Esta decisión no fue estética, sino puramente funcional y técnica. Los desarrolladores frontend aman los múltiplos de 8 porque simplifican matemáticamente el layout y aseguran que los elementos se alineen perfectamente en cualquier resolución de pantalla.

Detallé la configuración de los contenedores con una precisión casi obsesiva:
*   **Padding interno:** Definí que todas las tarjetas de eventos tuvieran un padding interno de 16px (`spacing-4`) para que el contenido "respirara" y no se sintiera asfixiado contra los bordes.
*   **Márgenes externos:** Establecí que la distancia entre componentes hermanos (como dos campos de un formulario) fuera siempre de 24px (`spacing-6`) para mantener una proximidad lógica que ayude al usuario a entender qué elementos están relacionados entre sí.

Configuré estos valores dentro de los contenedores de los componentes (usando *auto-layout*) para que, sin importar cuánto texto introduzca un usuario o qué tan larga sea la etiqueta de un botón, el "aire" alrededor del elemento se mantenga constante. El espaciado es el lenguaje invisible que dicta la legibilidad; sin estas reglas, la interfaz de AsDeporte se sentiría desordenada y poco profesional.

#### Fisicidad y profundidad: bordes, radios y elevación

Para que la plataforma de AsDeporte se sintiera moderna y, sobre todo, táctil, tuve que definir su "fisicidad". Esto implicó normar los radios de curvatura (*border-radius*) y las sombras (*box-shadows*). 

Decidí que los botones y las tarjetas principales tuvieran un radio de 8px. Este valor no es casual: es lo suficientemente curvo para sentirse accesible y amigable (alineado con la marca de "estilo de vida activo"), pero lo suficientemente recto para mantener una estructura seria y confiable. Para los elementos de menor jerarquía, como los *tags* de categoría de deporte, bajé el radio a 4px, creando una distinción visual clara entre lo que es una acción principal y lo que es mera información.

En cuanto a la elevación, especifiqué tres niveles de sombras para el eje Z:
1.  **Nivel 0 (Flat):** Para el fondo y elementos estáticos.
2.  **Nivel 1 (Raised):** Para las tarjetas de eventos que el usuario puede "tocar" o clickear.
3.  **Nivel 2 (Overlay):** Reservado para modales y menús desplegables que deben flotar por encima de todo el contenido.

Esta especificación técnica transforma una interfaz plana en una experiencia con profundidad. El usuario de AsDeporte ahora puede "sentir" qué elementos están en primer plano y cuáles son secundarios, reduciendo la carga cognitiva durante la navegación.

#### El lenguaje del movimiento: estados interactivos y feedback

Un componente sin estados es un componente muerto. Basándome en los principios de interacción que habíamos validado, doté a cada pieza de "vida" definiendo sus cinco estados fundamentales:
*   **Normal:** El estado base, limpio y listo para la acción.
*   **Hover:** Un cambio sutil de luminosidad (un 10% más oscuro en el azul primario) para indicar que el elemento es interactivo cuando el cursor pasa por encima.
*   **Active (Presionado):** Un ligero hundimiento visual o cambio de sombra para confirmar el click.
*   **Focus:** Un anillo de alto contraste alrededor del elemento. Esta es una especificación de accesibilidad no negociable; permite que los usuarios que navegan con teclado sepan exactamente dónde están parados.
*   **Disabled:** Un estado grisáceo con opacidad reducida y, crucialmente, el cursor de "prohibido", para comunicar que una acción no está disponible (por ejemplo, cuando un formulario no ha sido completado).

> **Reflexión Senior:** A menudo, los diseñadores junior olvidan el estado *Focus* o el *Disabled*. Pero en un producto de la escala de AsDeporte, omitir estos estados es romper la confianza del usuario. Si un botón no reacciona al ser presionado, el usuario piensa que el sistema falló. La especificación atómica de estados es lo que separa un prototipo de una herramienta profesional.

#### Mapeo de respuestas: la lógica del sistema ante la acción

Finalmente, mapeé cómo el sistema debe reaccionar ante interacciones complejas. No basta con que un botón cambie de color; el sistema debe ofrecer un *feedback loop* completo. Por ejemplo, especifiqué que cuando un usuario interactúa con un campo de entrada de texto para su correo electrónico, la validación debe ocurrir en tiempo real (*on blur*). Si el formato es incorrecto, el borde del componente debe cambiar al token de `error-main` y mostrar un microcopy de ayuda inmediatamente debajo.

Este nivel de detalle asegura que la experiencia sea predecible. Si el deportista está intentando inscribirse a una carrera de último minuto, no queremos que se frustre porque el sistema no le dice qué está haciendo mal. Al integrar estas respuestas con los principios de accesibilidad y contraste que definí en el plan de inicio del sistema, blindamos la usabilidad para todos los perfiles de usuario.

Cada parámetro técnico —desde los milisegundos de una transición hasta los píxeles de un radio de curvatura— fue documentado con el objetivo de eliminar la subjetividad. Esta inversión de tiempo reduce drásticamente la fricción en el *handoff* con el equipo de desarrollo; ya no habrá preguntas de "¿cuánta sombra lleva esto?", porque la respuesta ya está codificada en el ADN del sistema.

#### Próximo paso:

Con la anatomía visual y el comportamiento de los componentes ya blindados bajo reglas técnicas, me enfrenté a una realidad incómoda: un botón que se ve perfecto y reacciona correctamente sigue siendo inútil si el texto que lleva dentro es confuso o si un usuario con discapacidad visual no puede "leerlo" a través de un software de asistencia. Teníamos la estructura física, pero ahora debíamos inyectarle inteligencia inclusiva y una voz coherente. La siguiente fase me obligaría a cuestionar si cada una de estas piezas era realmente capaz de hablarle a todos los deportistas de AsDeporte, sin dejar a nadie fuera.

### Parte 3: DISEÑO INCLUSIVO Y NARRATIVA DE INTERFAZ (ACCESIBILIDAD Y COPY)

#### La ceguera de la perfección visual

Al terminar de definir la anatomía de los componentes, me detuve a observar el sistema y sentí una punzada de desconfianza. Teníamos una librería visualmente impecable, con radios de curvatura consistentes y una paleta de colores vibrante, pero me asaltó una pregunta que separa a un diseñador de interfaces de un diseñador de producto: ¿qué pasa si el usuario no puede ver este botón naranja tan bien como yo? O peor aún, ¿qué pasa si el usuario está intentando leer la pantalla bajo el sol abrasador de una carrera en Veracruz, con los dedos sudados y la vista cansada? 

Entendí que un componente que no comunica su función a un lector de pantalla o que desaparece bajo la luz del sol no es un diseño minimalista; es un fallo de ingeniería. Mi responsabilidad en este punto no era solo que el sistema se viera "bien", sino que fuera **operable por cualquier deportista**, sin importar su capacidad visual, motriz o el contexto físico en el que se encontrara. La transición hacia el diseño inclusivo no fue un paso burocrático de cumplimiento de normas, sino un ejercicio de empatía técnica. Sabía que si no inyectaba inteligencia accesible en el ADN de cada componente ahora, estaríamos construyendo una barrera invisible para miles de usuarios de AsDeporte.

#### El rigor del contraste bajo el sol de la competencia

Mi primera maniobra fue realizar una auditoría forense de la paleta cromática bajo los estándares **WCAG 2.1**. No me bastaba con que los colores de marca —el naranja enérgico y el azul profundo de AsDeporte— se vieran institucionales; necesitaba que fueran legibles. Utilicé herramientas de análisis de ratio de contraste para someter cada combinación a prueba. Descubrí, por ejemplo, que el texto blanco sobre nuestro botón naranja principal rozaba peligrosamente el límite de la legibilidad en tamaños pequeños.

Establecí una regla innegociable para el sistema: cualquier combinación de texto y fondo debía cumplir con un **ratio de contraste mínimo de 4.5:1** para texto normal y 3:1 para elementos gráficos grandes o componentes de interfaz. Esto me obligó a tomar decisiones difíciles. En algunos casos, tuve que oscurecer sutilmente el tono del naranja para su uso en botones con etiquetas blancas, sacrificando un ápice de la "vibración" original de la marca en favor de una legibilidad absoluta. Mi razonamiento fue puramente funcional: un atleta que consulta su tiempo de salida en medio de un evento deportivo no tiene tiempo para descifrar contrastes pobres; necesita información que salte a la vista, incluso con el brillo del teléfono al máximo y reflejos en la pantalla.

#### Ergonomía para dedos sudados: la regla de los 44 píxeles

Diseñar para deportistas implica entender que el dispositivo móvil no siempre se usa en la calma de una oficina. Pensé en el corredor que acaba de cruzar la meta y, con las manos temblorosas por el esfuerzo y el sudor nublando su precisión, intenta cerrar un modal o hacer clic en "Ver mis fotos". Un área de interacción pequeña es una receta para la frustración.

Por ello, blindé todos los elementos interactivos del sistema con una especificación de **Touch Targets mínimos de 44x44 píxeles** (o 48x48dp). Apliqué esta regla incluso a los iconos más minimalistas o a los enlaces de texto dentro de párrafos. Si el elemento visual medía solo 24 píxeles, el contenedor invisible de interacción debía expandirse para cumplir con el estándar. Documenté esto como una propiedad intrínseca de los componentes en el inventario. No era una sugerencia para los desarrolladores; era un requisito de arquitectura. Esta decisión técnica garantiza que la plataforma sea inclusiva no solo para personas con discapacidades motrices permanentes, sino para cualquier usuario en una situación de movilidad reducida o estrés físico, eliminando el error de "clic accidental" que tanto castiga la experiencia de usuario.

#### La arquitectura del foco: navegando sin punteros

A menudo se olvida que no todos los usuarios interactúan con una pantalla tocándola. Diseñé la lógica de navegación por teclado y tecnologías de asistencia con la misma minuciosidad con la que diseñé el flujo visual. Mi objetivo era evitar las "trampas de foco", esos callejones sin salida donde un usuario que navega con tabulación se queda atrapado dentro de un modal sin poder salir.

Tracé una jerarquía de tabulación secuencial que sigue estrictamente el orden lógico de la información. Para cada componente interactivo, definí un **indicador de foco (focus ring)** que fuera altamente visible. No permití que el foco fuera un simple borde sutil; diseñé un estado específico con un contraste de color que resalta sobre cualquier fondo, asegurando que el usuario siempre sepa exactamente dónde está posicionado. En componentes complejos, como las tarjetas de eventos que contienen múltiples acciones (favoritos, compartir, inscribirse), establecí un orden de lectura que prioriza la acción principal, permitiendo que un usuario con un switch o un teclado pueda navegar por la lista de eventos de forma eficiente, sin tener que pasar por diez clics innecesarios antes de llegar al siguiente elemento.

#### Semántica: dando voz a los píxeles mudos

Un diseño inclusivo debe ser capaz de "hablar". Me sumergí en la documentación de las **especificaciones de accesibilidad** para asegurar que cada icono y elemento no textual tuviera un propósito claro para los lectores de pantalla (Screen Readers). Me negué a aceptar que un usuario ciego escuchara "botón, imagen 04" al navegar por la app.

Asigné etiquetas **ARIA (Accessible Rich Internet Applications)** y roles específicos a cada componente del sistema. Por ejemplo, el icono del corazón en la esquina de una tarjeta de evento fue documentado no por su forma, sino por su función: "Agregar a favoritos". Si el evento ya estaba seleccionado, el estado del componente debía comunicar "Quitar de favoritos". Fui especialmente meticuloso con los estados de carga y las notificaciones dinámicas; definí regiones "aria-live" para que, cuando un usuario filtre una búsqueda de carreras, el lector de pantalla anuncie automáticamente: "Se han encontrado 12 resultados", sin que el usuario tenga que mover el foco manualmente para descubrir qué cambió en la pantalla. Esta capa de semántica transforma una biblioteca de dibujos en un sistema de comunicación universal.

#### UX Writing: la voz del entrenador en la interfaz

Finalmente, entendí que la claridad verbal es una forma de accesibilidad cognitiva. Si las instrucciones son ambiguas, el sistema falla. Basándome en los principios de **UX Writing**, estandaricé el microcopy de todos los componentes recurrentes para asegurar que el tono de AsDeporte fuera consistente: motivador, pero extremadamente preciso.

> El lenguaje en la interfaz no debe ser decorativo; debe ser una herramienta de orientación. Pasé de mensajes genéricos que culpaban al usuario a instrucciones que ofrecen una salida.

Reemplacé los errores crípticos del sistema por mensajes accionables. En lugar de un "Error en el formulario", definí componentes de validación que dicen exactamente qué falta: "Introduce un correo electrónico válido para continuar". Estandaricé las etiquetas de los botones para que siempre empezaran con un verbo de acción claro: "Inscribirme", "Guardar cambios", "Confirmar pago". Esta coherencia narrativa reduce la carga cognitiva de los deportistas, permitiéndoles completar sus tareas con la menor fricción mental posible. Al integrar estas reglas de escritura directamente en la documentación de los componentes, aseguré que, sin importar quién diseñe la próxima pantalla, la plataforma siempre hablará el mismo idioma y con la misma claridad.

#### Próximo paso:

Con las reglas de accesibilidad blindadas y la voz del sistema definida, me di cuenta de que tenía un manual de instrucciones perfecto, pero todavía disperso. Tenía las definiciones, pero no los ladrillos. El siguiente desafío era materializar todo este razonamiento en una infraestructura técnica dentro de Figma que fuera capaz de soportar cambios globales con un solo clic. Era el momento de pasar de la teoría y los estándares a la **ingeniería de componentes**, donde una decisión mal tomada en la estructura de una "variante" podría comprometer la escalabilidad de todo el proyecto.

### Parte 4: INGENIERÍA DE COMPONENTES: CONSTRUCCIÓN DE LA LIBRERÍA EN FIGMA

Miré las 37 pantallas de alta fidelidad que acabábamos de aprobar y, a pesar de su perfección visual, sentí una vulnerabilidad técnica profunda. Tenía frente a mí una colección de promesas estéticas, pero no una infraestructura de producto. Sabía que si enviaba esos archivos a desarrollo tal como estaban, cualquier cambio mínimo en el color de marca de AsDeporte o un ajuste en el radio de los botones se convertiría en una pesadilla de comunicación y deuda técnica. La accesibilidad que tanto nos costó blindar y las reglas de UX Writing que definimos se perderían en la traducción al código si no las materializaba en una arquitectura de componentes rígida. Entendí que mi trabajo ya no era "dibujar pantallas", sino realizar una transición crítica hacia la ingeniería de diseño: necesitaba construir los ladrillos antes de pretender que otros levantaran el edificio.

#### Inventario forense y el nacimiento del componente maestro

Inicié un inventario exhaustivo de cada elemento recurrente en el MVP B2C. No busqué "cosas que se parecieran", sino patrones funcionales que se repetían en el flujo de inscripción y en la visualización de eventos. Identifiqué los átomos esenciales: los botones de acción primaria, los campos de entrada de texto para el registro de atletas, las tarjetas de evento que son el corazón de la plataforma y los encabezados de sección. 

Para cada uno de estos elementos, creé un **Main Component** en Figma. Mi razonamiento fue estratégico: cada decisión de espaciado (*padding*) y cada radio de borde (*border-radius*) debía ser una herencia directa del UI Kit. Configuré el **Auto-layout** con una precisión casi obsesiva, asegurando que los componentes no fueran cajas estáticas, sino contenedores inteligentes que respondieran al contenido. Si un desarrollador necesitaba cambiar el texto de un botón de "Inscribirme" a "Confirmar participación en el maratón", el componente debía expandirse respetando los márgenes internos de 16px que definí. Esta configuración técnica eliminó la posibilidad de que el diseño se "rompiera" durante la implementación, blindando la integridad visual de AsDeporte desde la raíz.

#### La matriz de estados y el rigor de la interacción

La complejidad real apareció al gestionar la interactividad. Un botón en AsDeporte no es solo un rectángulo azul; es un organismo que debe comunicar su estado al atleta en tiempo real. Construí **Component Sets** para agrupar variantes y definí una matriz de cinco estados críticos: **Normal, Hover, Pressed, Focused y Disabled**. 

> El estado "Focused" fue donde la ingeniería de componentes se encontró con mis decisiones previas de accesibilidad. No permití que fuera un simple cambio de color; integré el anillo de enfoque de alto contraste que habíamos validado, configurándolo como una propiedad de visibilidad dentro del componente. 

Justifiqué la creación de variantes por tipo —Primario, Secundario y Ghost— no por un deseo de variedad visual, sino para reducir la carga cognitiva del equipo. Al tener estas opciones predefinidas y restringidas, cualquier diseñador que se sume al proyecto en el futuro no tendrá que adivinar qué botón usar para una acción secundaria; el sistema ya tomó esa decisión por él, garantizando una coherencia funcional absoluta en todo el MVP.

#### Inteligencia superior mediante propiedades avanzadas

Para evitar el "variant bloat" —ese fenómeno donde un solo componente termina teniendo cientos de variantes imposibles de gestionar—, utilicé las funciones más avanzadas de Figma: **Boolean, Text Swap e Instance Swap**. Doté a las tarjetas de evento de una inteligencia superior; por ejemplo, configuré el "Badge" de categoría (como "Running" o "Triatlón") mediante un switch booleano. Esto permitió que el diseñador pudiera encender o apagar el badge con un solo clic sin necesidad de crear una variante distinta para cada combinación posible.

Esta decisión técnica no fue solo por eficiencia personal. Mi objetivo era que la biblioteca fuera intuitiva para el resto del equipo. Al simplificar la interfaz del componente, reduje el margen de error humano. Un componente bien construido debe ser "a prueba de fallos": si la estructura es sólida y las propiedades están bien mapeadas, es prácticamente imposible que alguien use el sistema de forma incorrecta. Esta ingeniería en Figma es lo que transforma un archivo de diseño en una herramienta de producción real.

#### Arquitectura centralizada y el Single Source of Truth

El rigor técnico culminó en la vinculación de estilos globales. Conecté cada componente maestro a los **Tokens** de color y tipografía que definimos originalmente. Esta arquitectura de actualización centralizada es lo que le da al sistema su verdadero valor estratégico. Si mañana el equipo de marketing decide que el azul de AsDeporte debe ser dos tonos más oscuro para cumplir con nuevas normativas de marca, la actualización me tomará exactamente diez segundos. Al cambiar el token de color en la base, el cambio se propaga quirúrgicamente por los cientos de instancias en todas las pantallas de inscripción y perfiles de usuario.

Finalmente, estructuré la biblioteca siguiendo una nomenclatura lógica y técnica: `Atoms / Buttons / Primary / Large`. Organicé el archivo de Figma en páginas dedicadas a "Fundamentos", "Componentes Core" y "Organismos". Esta jerarquía no es estética; es el mapa que los desarrolladores de Frontend consultarán durante el handoff. Al hablar su mismo idioma —el de los componentes reutilizables y las propiedades lógicas—, eliminé la fricción histórica entre diseño y desarrollo. Invertir este tiempo en la "ingeniería de Figma" fue la decisión más rentable del proyecto: sacrificamos velocidad inicial de dibujo para ganar una escalabilidad infinita y una consistencia que no depende de la memoria de nadie, sino de la estructura del sistema mismo.

#### Próximo paso:

Con la biblioteca técnica terminada y los componentes funcionando como un reloj suizo en Figma, me di cuenta de que tenía los ladrillos, pero me faltaba el manual de construcción. La infraestructura estaba lista, pero si no documentaba el "por qué" y el "cuándo" de cada elemento, el sistema corría el riesgo de convertirse en una caja negra para el resto de la organización. El desafío ahora era transformar esta potencia técnica en un **Manifiesto del Sistema**, creando una guía de estilo que fuera tan clara para un desarrollador senior como para un nuevo integrante del equipo de producto.

### Parte 5: EL MANIFIESTO DEL SISTEMA: DOCUMENTACIÓN Y GUÍA DE ESTILO

#### El lenguaje que transforma componentes en productos

Al terminar la arquitectura técnica de los componentes en Figma, me detuve a observar el panel de activos. Teníamos cientos de variantes, estados y propiedades lógicas perfectamente configuradas. Sin embargo, sentí esa punzada de realismo que solo te da la experiencia: un sistema de diseño que no se explica a sí mismo es, en el mejor de los casos, un rompecabezas sin imagen de referencia y, en el peor, una fuente inagotable de deuda técnica. Tenía la infraestructura, pero me faltaba el manual de vuelo. Sabía que si entregaba esos componentes así, sin una narrativa que los unificara, el equipo de desarrollo terminaría interpretando los espacios, los comportamientos y las jerarquías según su propio criterio, rompiendo la consistencia que tanto nos había costado alcanzar para el MVP B2C.

Comprendí que mi responsabilidad como diseñador no terminaba en el "hacer", sino en el "comunicar". Un sistema de diseño no es un archivo de Figma; es un lenguaje compartido entre diseño, producto e ingeniería. Decidí entonces volcar mis esfuerzos en la creación de lo que llamé el **Manifiesto del Sistema**. Este no sería un documento burocrático, sino una guía de estilo viva y funcional. Mi razonamiento fue estratégico: estábamos sentando las bases de AsDeporte para los próximos años. Si lograba documentar el "por qué" detrás de cada píxel hoy, estaríamos blindando la escalabilidad de la plataforma no solo para este lanzamiento, sino para el futuro modelo B2B que ya asomaba en el horizonte.

#### La arquitectura de la verdad: Estructurando la Guía Maestra

Mi primer paso fue organizar el caos de información que habíamos generado en las fases de Diseño Visual, Interacción y Accesibilidad. No quería una lista interminable de elementos; buscaba una narrativa coherente que guiara al lector desde lo más simple hasta lo más complejo. Estructuré la guía básica agrupando los componentes en categorías lógicas que cualquier desarrollador pudiera navegar intuitivamente:

*   **Fundamentos:** El ADN de la marca (color, tipografía, espaciado).
*   **Componentes Atómicos:** Los ladrillos básicos como botones, iconos y campos de entrada.
*   **Organismos y Moléculas:** Elementos más complejos como las tarjetas de evento, los ítems de lista y las barras de navegación.
*   **Patrones de Interacción:** Reglas sobre cómo estos elementos se mueven y responden al usuario.

Para cada componente, me impuse la disciplina de no limitarme a mostrar su apariencia visual. Documenté con precisión quirúrgica sus especificaciones de interacción: ¿Cómo cambia el botón cuando el usuario pasa el cursor? ¿Qué sucede si hay un error en el campo de formulario? Al consolidar en un solo lugar los requisitos de contraste, los tamaños mínimos de los objetivos táctiles y el comportamiento del foco, transformé la guía en el punto de encuentro definitivo entre la estética y la funcionalidad. Esta documentación se convirtió en el repositorio de verdad donde cada decisión de diseño quedaba blindada frente a la ambigüedad.

#### El rigor de la palabra: Taxonomía y convenciones de nomenclatura

Nombrar las cosas es, posiblemente, uno de los retos más subestimados en nuestra profesión. Si yo llamaba a un elemento "Tarjeta de Carrera" y el desarrollador lo implementaba como "EventCard", la fricción comunicativa empezaría a erosionar la eficiencia del equipo desde el primer sprint. Por ello, apliqué un rigor forense a la definición de una nomenclatura lógica y consistente, heredada directamente del inventario de componentes que realicé al inicio de esta fase.

Adopté una estructura de nombres basada en la jerarquía técnica de los componentes en Figma, asegurándome de que fuera fácilmente traducible a código CSS o componentes de React. Mi regla de oro fue la claridad absoluta:
*   **Componente Raíz:** `Button`
*   **Variante:** `Primary` / `Secondary` / `Ghost`
*   **Tamaño:** `Large` / `Medium` / `Small`
*   **Estado:** `Default` / `Hover` / `Pressed` / `Disabled`

Esta taxonomía no solo facilitó la búsqueda dentro del software de diseño, sino que permitió que los desarrolladores pudieran heredar estos nombres directamente en su repositorio de frontend. Al hablar el mismo idioma, eliminamos las adivinanzas durante el handoff. Documenté no solo el nombre, sino la lógica de cada variación, justificando por qué un botón "Disabled" debe tener un contraste específico para cumplir con las normativas de accesibilidad que habíamos definido. Este nivel de detalle es lo que separa un kit de UI de un verdadero sistema de diseño profesional.

#### Los cimientos matemáticos: Color, tipografía y el sistema de espaciado

Para que el sistema fuera realmente escalable, necesitaba despejar cualquier subjetividad en el uso de los estilos. No bastaba con decir "usa el rojo de la marca"; tuve que definir la lógica detrás de la paleta. Documenté los colores no como una lista de códigos HEX, sino como un sistema de roles funcionales. Definí qué colores se usan para acciones primarias, cuáles para estados de error y cuáles para superficies de fondo, asegurándome de que cada combinación pasara las pruebas de contraste WCAG que habíamos integrado en el diseño accesible.

En cuanto a la tipografía, establecí una escala clara basada en proporciones matemáticas, documentando los pesos, interlineados y espaciados entre letras para cada nivel de encabezado y cuerpo de texto. Pero donde realmente puse el foco fue en el **sistema de espaciado**. Implementé una rejilla de 8px como regla universal para márgenes y rellenos (*paddings* y *margins*).
> Mi decisión de usar un sistema de espaciado basado en tokens matemáticos no fue estética, sino de ingeniería: permite que la interfaz respire con armonía visual en cualquier resolución, desde un iPhone pequeño hasta un monitor de escritorio, eliminando la necesidad de que el desarrollador "ajuste a ojo" los espacios entre componentes.

Documenté estos valores como reglas inamovibles. Al establecer que un "Card" siempre debe tener un padding interno de 16px (2 tokens de 8px), creé un lenguaje visual predecible que reduce la carga cognitiva tanto para el usuario que navega como para el programador que construye.

#### El manual de uso y la voz de AsDeporte: Microcopy y reglas de aplicación

Un componente sin reglas de uso es un peligro para la consistencia. Por eso, dediqué una sección crítica a explicar el "cuándo" y el "cómo" de cada elemento. No es suficiente tener un botón primario; hay que documentar que solo puede haber uno por pantalla para no confundir la jerarquía de acciones del atleta. Redacté instrucciones claras sobre el comportamiento de las tarjetas de evento: bajo qué condiciones deben mostrar el precio, cuándo deben ocultar la fecha si el evento ya pasó, y cómo deben adaptarse si el nombre de la carrera es inusualmente largo.

En este punto, integré de manera orgánica el trabajo de **UX Writing**. No dejé los textos al azar o al "Lorem Ipsum" de turno. Documenté el microcopy estándar para cada componente:
*   **Etiquetas de botones:** Verbos de acción claros y directos ("Inscribirme", "Ver resultados").
*   **Mensajes de validación:** Cómo comunicar un error de forma constructiva y humana.
*   **Placeholders:** Guías sutiles que ayudan al usuario a completar formularios sin fricción.

Al incluir estas directrices de voz y tono dentro de la documentación del sistema, me aseguré de que la personalidad de AsDeporte —esa voz que motiva al deportista a "liberar su grandeza"— fuera consistente en cada rincón de la plataforma, independientemente de quién estuviera diseñando o programando la pantalla en el futuro.

#### Blindaje técnico: Protocolo de handoff y validación con el equipo

La etapa final de esta actividad fue la más tensa pero necesaria: la validación interna. No quería que la documentación fuera un monólogo, sino un contrato firmado por todas las partes. Organicé las páginas en Figma de forma que el equipo de Tecnología, Frontend y QA pudiera auditar cada componente antes de que se escribiera una sola línea de código.

No fue una entrega pasiva. Convoqué a una sesión de revisión técnica donde recorrimos el sistema de punta a punta. Mi objetivo era doble:
1.  **Validar la suficiencia:** ¿Son estos componentes suficientes para construir todas las pantallas del MVP B2C que diseñamos?
2.  **Validar la implementabilidad:** ¿Son claras las especificaciones de accesibilidad? ¿Entiende el equipo de QA cómo testear los diferentes estados de un componente basándose en mis notas de interacción?

Durante esta sesión, ajusté detalles técnicos en la documentación basándome en el feedback de los desarrolladores, asegurándome de que no hubiera ambigüedades en las sombras o en las transiciones de los micro-estados. Este proceso de validación activa transformó el sistema de diseño en una herramienta de trabajo real para el equipo de ingeniería, garantizando que la visión del producto se mantuviera intacta durante la fase de construcción. Al finalizar, sentí que habíamos pasado de tener una colección de dibujos a tener un producto de ingeniería listo para ser ensamblado con una eficiencia sin precedentes.

#### Reflexión sobre el oficio de documentar

Mirando el trabajo terminado, reflexiono sobre cómo la documentación es, en esencia, un acto de empatía profunda hacia el resto del equipo. Un diseñador senior entiende que su éxito no se mide por la belleza de su archivo de Figma, sino por la facilidad con la que otros pueden construir sobre su trabajo. Al invertir este tiempo en crear el **Manifiesto del Sistema**, no solo ahorré cientos de horas de consultas y correcciones futuras, sino que elevé el estándar de calidad de AsDeporte. Hemos creado una base sólida, un lenguaje que permitirá que la plataforma crezca de forma orgánica y coherente, manteniendo siempre al atleta en el centro de la experiencia.

**Próximo paso:**

Con el sistema de diseño documentado y validado técnicamente, la infraestructura para el MVP B2C parecía inexpugnable. Sin embargo, mientras cerraba la sesión con el equipo de Frontend, una pregunta quedó flotando en el aire: ¿qué pasaría cuando este sistema, diseñado inicialmente para el usuario final, tuviera que enfrentarse a la complejidad administrativa del modelo B2B? El verdadero desafío no era solo que el sistema funcionara, sino que fuera capaz de resistir el escrutinio estratégico de los stakeholders más exigentes en la fase final de blindaje.

### Parte 6: VALIDACIÓN ESTRATÉGICA Y BLINDAJE DEL SISTEMA

#### El momento de la verdad: del artefacto al contrato técnico

Cerré el archivo de documentación con una mezcla de satisfacción y una punzada de ansiedad controlada. Tenía ante mí lo que llamábamos el "Manifiesto del Sistema", un ecosistema de componentes que, en el papel y en Figma, funcionaba con la precisión de un reloj suizo. Sin embargo, diez años en este oficio me han enseñado que un sistema de diseño no es real hasta que el equipo que debe picar el código lo acepta como suyo. En ese punto, el sistema deja de ser una propuesta estética para convertirse en un contrato vinculante entre diseño y desarrollo. 

La transición hacia la validación estratégica no fue un trámite administrativo; fue un ejercicio de blindaje. Sabía que si no sometía la librería a un escrutinio técnico feroz en ese momento, el MVP B2C de AsDeporte nacería con una deuda técnica que arrastraríamos hasta el lanzamiento del modelo B2B. Mi razonamiento era pragmático: necesitaba que cada **Design Token**, cada variante de botón y cada comportamiento de las tarjetas de evento fuera validado por quienes iban a transformarlos en líneas de CSS. No buscaba aprobación visual —eso ya lo teníamos—; buscaba viabilidad sistémica. Si un componente era demasiado complejo de programar o no escalaba bien en diferentes resoluciones, prefería romperlo y reconstruirlo yo en Figma antes de que se convirtiera en un cuello de botella en el sprint de desarrollo.

#### La sesión de escrutinio: auditando la arquitectura visual

Convoqué a los líderes de Frontend, Producto y QA a una sesión que llamé internamente "el pesaje del sistema". No fue una presentación de diapositivas ni un recorrido por el *look & feel*. Entramos directamente a las entrañas de la librería de Figma. Mi objetivo era demostrar que la arquitectura de la información visual que había construido era robusta y, sobre todo, mantenible.

Maniobré a través de la jerarquía de los **Master Components**, explicando cómo una actualización en el componente raíz de un botón se propagaría instantáneamente a las 40 pantallas del MVP. El equipo de tecnología observaba con un silencio analítico. Expliqué la lógica de los tokens de color y tipografía, justificando por qué habíamos pasado de usar valores hexadecimales sueltos a una nomenclatura semántica. "Si mañana el negocio decide que el 'Azul AsDeporte' debe ser dos tonos más oscuro por un tema de accesibilidad en exteriores, lo cambiamos en un solo lugar y el producto entero se actualiza", les dije. Esta capacidad de actualización centralizada no era solo una comodidad para mí; era una garantía de eficiencia para ellos. Estábamos sentando las bases para que el sistema pudiera absorber la complejidad del futuro modelo B2B sin necesidad de rediseñar desde cero.

#### Stress-testing del inventario: ¿es suficiente para la realidad?

Una vez validada la estructura, pasamos a la auditoría de suficiencia del inventario. Junto al equipo de Producto, repasamos la lista de componentes recurrentes que había identificado previamente: botones, campos de entrada de texto, tarjetas de evento, iconos, ítems de lista y encabezados. El ejercicio consistía en someter a cada elemento a un "stress-test" de casos de uso reales.

> Un sistema de diseño que solo funciona con la "ruta feliz" es un sistema fallido. El rigor senior se demuestra en cómo el componente reacciona cuando los datos del mundo real intentan romperlo.

Nos detuvimos especialmente en las **tarjetas de evento**. ¿Qué pasaba si un organizador de una Spartan Race decidía poner un título de tres líneas? ¿Cómo se comportaba la tarjeta si el precio tenía un descuento complejo o si el evento estaba "Agotado"? Verificamos que las variantes que había creado cubrieran no solo el estado ideal, sino también el estado vacío (*empty state*), el estado de carga (*loading*) y el error. Esta validación de suficiencia fue crítica; descubrimos que nos faltaba una variante específica para los campos de formulario cuando el usuario introducía un formato de fecha no válido en el registro de atletas. Identificar este "hueco" en la sesión de validación nos ahorró, fácilmente, dos días de idas y vueltas durante la fase de construcción.

#### Traduciendo el diseño a lógica de implementación

El núcleo de la reunión se centró en la claridad del **handoff**. Revisé con los desarrolladores de Frontend la definición y especificación detallada de cada componente. No me limité a mostrarles el diseño; les mostré las "tripas":

*   **Geometría y Espaciado:** Detallé los valores de espaciado interno (*padding*) y externo (*margin*) utilizando una escala de 8px, asegurando que no hubiera valores arbitrarios.
*   **Comportamiento de Interacción:** Para cada botón y campo, definimos exactamente qué pasaba en el estado *Hover*, *Active*, *Focus* y *Disabled*. No quería que ningún desarrollador tuviera que adivinar qué sombra o qué cambio de opacidad aplicar cuando un usuario pasara el ratón por encima de un CTA.
*   **Tokens de Estilo:** Validamos que la paleta de colores y la jerarquía tipográfica (basada en la Montserrat que habíamos elegido) fueran fáciles de mapear en sus variables de código.

Mi enfoque aquí fue eliminar la ambigüedad. El diseño debía dejar de ser una interpretación artística para convertirse en un conjunto de instrucciones lógicas. Si el desarrollador tiene que preguntarme "¿cuántos píxeles de radio de borde lleva este modal?", es porque mi documentación ha fallado. Al final de este bloque, el equipo de Frontend confirmó que las especificaciones eran lo suficientemente claras como para empezar a construir los componentes en su entorno de desarrollo sin necesidad de consultas constantes.

#### Blindaje de accesibilidad: más allá del cumplimiento

Uno de los momentos de mayor tensión —y de mayor orgullo profesional— fue la validación de las especificaciones de accesibilidad con el equipo de QA. No permití que la accesibilidad fuera un "anexo" o una tarea para después del lanzamiento. Defendí con datos cada decisión: los ratios de contraste de los textos sobre los fondos vibrantes de la marca, los tamaños mínimos de los **target sizes** táctiles (asegurando que ningún botón fuera menor a 44x44px para evitar errores en dispositivos móviles) y, fundamentalmente, el comportamiento del foco.

Expliqué cómo habíamos documentado los nombres accesibles para los lectores de pantalla dentro de cada componente. "Un atleta con discapacidad visual debe poder navegar por el calendario de eventos con la misma fluidez que cualquier otro usuario", argumenté. Validamos que la navegación por teclado siguiera un orden lógico y que los estados de *focus* fueran claramente visibles. El equipo de QA valoró que estas especificaciones estuvieran integradas desde la raíz del sistema, lo que les permitiría automatizar parte de sus pruebas de cumplimiento normativo. Este blindaje no era solo por ética profesional; era una decisión estratégica para proteger a AsDeporte de futuras fricciones legales y asegurar que el producto fuera verdaderamente inclusivo.

#### Consolidación: la librería como base inexpugnable

Tras recibir el feedback, dediqué las siguientes 48 horas a realizar los ajustes finales en la librería de Figma. No fueron cambios estructurales, sino refinamientos de "última milla": ajustes en el microcopy de los mensajes de error de los formularios, una variante adicional para los iconos de navegación y la recalibración de una sombra en las tarjetas para mejorar el rendimiento en dispositivos de gama baja.

Al terminar, sentí que la librería de componentes y la documentación inicial ya no eran solo mías; eran del equipo. Habíamos transformado una colección de elementos visuales en una infraestructura de producto. Este proceso de validación interna convirtió lo que podría haber sido un simple "UI Kit" en un **Design System** incipiente, capaz de sostener el MVP B2C y con la flexibilidad necesaria para escalar hacia el complejo ecosistema B2B que vendría después. El camino hacia la implementación estaba, por fin, pavimentado sobre una base sólida e inexpugnable.

**Reflexión final:**
Esta fase de validación fue el recordatorio más claro de que el diseño de sistemas es, ante todo, un ejercicio de diplomacia técnica. Lograr que el equipo de desarrollo no solo entienda, sino que respete y adopte las especificaciones de diseño, es lo que realmente permite que un producto mantenga su integridad a medida que crece. Al cerrar esta actividad, me quedó la certeza de que habíamos blindado la experiencia del atleta contra la inconsistencia, dejando una herramienta viva que permitiría a AsDeporte evolucionar con una agilidad que antes no tenían.