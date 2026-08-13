# Fase 4: Implementación y Handoff

## Actividad 1: actividad_01_handoff

### Parte 1: AUDITORÍA DE ARTEFACTOS: CONSOLIDANDO LA VERDAD DEL DISEÑO

El cursor de Figma dejó de saltar entre iteraciones y exploraciones cromáticas para detenerse, por primera vez en meses, en un estado de quietud absoluta. Teníamos frente a nosotros el ecosistema completo del MVP B2C de AsDeporte: una arquitectura validada, flujos que habían sobrevivido a pruebas de guerrilla y una interfaz que respiraba la identidad de una marca con tres décadas de historia. Sin embargo, en mi experiencia, este es el momento más peligroso de un proyecto. El diseño no es lo que vive en mi monitor, sino lo que termina en las manos del atleta que intenta inscribirse a una carrera bajo el sol de mediodía. Si en este punto de transferencia no lograba blindar la "fuente de la verdad", meses de razonamiento estratégico se diluirían en interpretaciones erróneas durante el desarrollo.

La transición hacia la **Actividad 1: Handoff** no fue un trámite administrativo; fue un cambio de piel. Dejé de ser el diseñador que busca la solución óptima para convertirme en el auditor que garantiza la ejecución impecable. Mi razonamiento fue pragmático: el equipo de ingeniería no necesita ver mi proceso creativo, necesita instrucciones de construcción que no dejen margen a la duda. Sabía que cualquier ambigüedad en un flujo o un componente huérfano en el UI Kit se traduciría en deuda técnica o en un ticket de soporte semanas después. Por eso, antes de invitar a un solo desarrollador al archivo, decidí "limpiar la mesa" con un rigor forense, asegurando que cada artefacto fuera el definitivo, el aprobado y, sobre todo, el que realmente íbamos a construir.

#### El rigor del "Single Source of Truth"

Mi primera maniobra fue ejecutar una purga sistemática de activos. En proyectos de esta envergadura, los archivos de diseño suelen acumular "ruido": capas ocultas, páginas de borradores que ya no aplican y variantes de componentes que fueron descartadas tras el último feedback de los stakeholders. Me sumergí en el archivo maestro de Figma y en nuestro espacio de Notion con una misión clara: consolidar los artefactos de diseño finalizados. No se trataba de mover archivos de carpeta, sino de certificar que cada pieza del rompecabezas estaba alineada con la última versión del alcance del MVP.

Rastreé y filtré cada uno de los insumos clave documentados en nuestro proceso:
*   **Mockups de Alta Fidelidad:** Verifiqué que las versiones móvil y web responsive fueran las que recibieron el "visto bueno" final. No permití que quedara ni una sola pantalla con el sello de "en progreso".
*   **Especificaciones de Diseño de Interacción (IxD):** Recuperé las notas de comportamiento que habíamos definido. Necesitaba que estuvieran frescas para el siguiente paso, asegurando que cada gesto y cada transición estuvieran documentados.
*   **UI Kit y Sistema de Diseño:** Realicé una inspección rápida para confirmar que todos los componentes utilizados en los mockups estuvieran vinculados a la librería principal. Un componente desvinculado es una pesadilla para un desarrollador frontend.
*   **Documentación de Accesibilidad y Tono de Voz:** Me aseguré de que estos documentos no fueran solo teorías, sino que estuvieran listos para ser consultados como reglas de negocio aplicadas al código.

Esta auditoría no fue un ejercicio solitario. Mantuve una comunicación directa con los líderes de producto para revalidar que lo que yo consideraba "final" coincidiera con sus expectativas de negocio para el lanzamiento. Al terminar esta consolidación, el espacio de trabajo dejó de ser un laboratorio de ideas para convertirse en una línea de producción organizada.

> **Decisión Senior:** Opté por crear una página específica denominada "PRODUCTION / MVP B2C" en Figma, bloqueando el acceso a todas las demás páginas de exploración para el equipo de ingeniería. Sabía que darles acceso total al historial de diseño solo generaría ruido visual y preguntas innecesarias sobre versiones que ya no existían. La claridad es el mejor aliado de la velocidad de desarrollo.

#### Auditoría forense de Mockups y Prototipos

Una vez que tuve los activos "limpios", pasé a la inspección de los Mockups de Alta Fidelidad. Mi enfoque fue quirúrgico: revisé cada una de las pantallas de la versión móvil y web responsive buscando inconsistencias que el ojo humano suele pasar por alto pero que el código evidencia de inmediato. Verifiqué que los márgenes fueran consistentes entre la pantalla de inicio y el flujo de resultados de eventos, y que el comportamiento de los filtros en la versión móvil no contradijera la lógica de la versión web. Esta revisión es el filtro de calidad definitivo; si un error de alineación o un componente fuera de lugar sobrevive aquí, se multiplicará exponencialmente cuando ingeniería empiece a maquetar.

Inmediatamente después, puse a prueba el Prototipo Interactivo Final. No lo navegué como un diseñador orgulloso de su obra, sino como un usuario que busca romper el sistema. Recorrí los flujos críticos validados: la búsqueda de un evento, el proceso de inscripción paso a paso y la visualización del livetracking. Mi objetivo era confirmar que no existieran callejones sin salida ni transiciones que se sintieran antinaturales. 

En esta fase de verificación, descubrí un par de conexiones que, aunque lógicas en el papel, resultaban confusas en el prototipo de alta fidelidad. Las corregí en el acto. El prototipo es la guía maestra para que los desarrolladores entiendan la coreografía del producto; cualquier "link roto" aquí es una invitación a que el desarrollador asuma una lógica propia, y eso es exactamente lo que quería evitar. El prototipo debe hablar por sí solo, reduciendo la necesidad de reuniones explicativas constantes.

#### La semántica del producto: IxD y UX Writing

El diseño no es solo lo que se ve, sino lo que dice y cómo responde. Por ello, dediqué una parte considerable de esta auditoría a sincronizar las especificaciones de Diseño de Interacción (IxD) con el contenido de UX Writing. Revisé el Glosario de Términos y la definición del Tono de Voz de AsDeporte para asegurar que el lenguaje utilizado en los botones, mensajes de error y etiquetas fuera consistente en todo el MVP.

En un producto que busca ser el "motor que libera tu grandeza", un mensaje de error genérico como "Ha ocurrido un problema" es un fallo de diseño. Me aseguré de que cada microcopy fuera coherente con la personalidad de la marca: motivador pero técnico, claro pero inspirador. Verifiqué que los términos utilizados en la plataforma B2B (Asdeporte Network) no se mezclaran con el lenguaje orientado al atleta en el MVP B2C. Esta revisión semántica garantiza que la experiencia del usuario sea fluida y que no existan ambigüedades que puedan confundir al equipo de implementación o, peor aún, al usuario final durante una inscripción crítica.

#### Validación de Arquitectura y Flujos Macro

Para cerrar el círculo de la auditoría, contrasté los Sitemaps y los Diagramas de Flujo de Usuario finales con los mockups que acababa de inspeccionar. Este es un ejercicio de trazabilidad: me aseguré de que cada nodo en el diagrama de flujo tuviera una pantalla correspondiente en Figma y que la jerarquía de navegación definida en el sitemap se reflejara con exactitud en el menú y los niveles de acceso de la interfaz.

Esta validación macro es vital para que ingeniería comprenda la envergadura del proyecto desde el primer día. Les proporciona un "mapa de carreteras" claro, permitiéndoles planificar la arquitectura de la base de datos y las rutas de navegación con una visión de conjunto. Durante esta revisión, identifiqué que nos faltaba un estado lógico para cuando un usuario intenta acceder a un evento que ya ha cerrado inscripciones; una pantalla que no habíamos diseñado pero que el flujo exigía. Gracias a este rigor forense, pude diseñar ese estado faltante antes de que el desarrollador se encontrara con el hueco en el código, evitando un bloqueo innecesario en el sprint de desarrollo.

#### Un ecosistema digital preparado para la producción

Finalmente, organicé todo este universo de información en un repositorio centralizado dentro de Notion y Figma. No me limité a subir archivos; estructuré el espacio de manera que fuera autoexplicativo. Creé secciones claras para:
*   **Assets Gráficos:** Iconos e ilustraciones listos para exportar.
*   **Documentación Lógica:** Flujos, sitemaps y casos de borde.
*   **Componentes:** El acceso directo al UI Kit con sus reglas de uso.
*   **Vistas de Producción:** Las pantallas finales con sus anotaciones iniciales.

Mi objetivo fundamental fue eliminar cualquier fricción comunicativa. Quería que cuando un desarrollador frontend entrara al archivo, supiera exactamente dónde mirar y qué valor tomar sin tener que preguntarme. Esta organización transforma el desorden creativo en un entorno de producción industrial, donde la información fluye sin obstáculos y la visión del producto queda blindada contra interpretaciones erróneas. Al terminar esta fase de auditoría, sentí la tranquilidad de quien ha verificado cada tornillo de una estructura antes de permitir que la construcción comience. La "fuente de la verdad" estaba lista, limpia y validada.

> **Aprendizaje Senior:** La calidad de un handoff se mide por la cantidad de preguntas que *no* te hacen. Si el equipo de ingeniería puede avanzar durante días sin necesidad de una sesión de aclaración, significa que tu auditoría de artefactos fue exitosa. El tiempo invertido en organizar y verificar aquí se recupera multiplicado por diez durante el desarrollo.

**Próximo paso:**

#### PRECISIÓN GEOMÉTRICA: ESPECIFICACIONES DE LAYOUT Y RESPONSIVE

Con la mesa limpia y los activos validados, me enfrenté al siguiente gran desafío: ¿cómo asegurar que el desarrollador respete exactamente los 24 píxeles de padding que definí para los contenedores de eventos? La auditoría me dio la seguridad de tener las pantallas correctas, pero ahora necesitaba dotarlas de una armadura técnica de medidas, rejillas y comportamientos fluidos que no dejaran espacio a la improvisación geométrica. Sabía que el éxito visual del MVP dependía de mi capacidad para traducir la estética en números exactos y reglas de adaptación para cada pantalla.

### Parte 2: PRECISIÓN GEOMÉTRICA: ESPECIFICACIONES DE LAYOUT Y RESPONSIVE

#### La armadura técnica: De la estética a la geometría irrefutable

Al cerrar la auditoría de activos, me quedé mirando fijamente el flujo de "Mis Inscripciones" en Figma. Visualmente, todo estaba en su sitio: la jerarquía era clara, el contraste cumplía con los estándares y la marca AsDeporte respiraba en cada rincón. Sin embargo, sentí esa punzada de realismo que solo te dan los años de ver diseños romperse en producción. Sabía que, si entregaba esas pantallas tal cual, estaba dejando el 50% de la experiencia al azar o a la interpretación del desarrollador de turno. Un diseño sin una armadura métrica es, en el mejor de los casos, una sugerencia; en el peor, una receta para el desastre técnico.

Mi razonamiento en este punto fue puramente preventivo. Para el MVP de AsDeporte, no podíamos permitirnos el lujo de un "ida y vuelta" infinito corrigiendo paddings de 16 píxeles que terminaron siendo de 20 por un error de apreciación. Necesitaba transformar esos visuales estáticos en un sistema de reglas matemáticas irrefutables. Pasé de validar el "qué" teníamos —los artefactos aprobados— a definir el "cómo" se construirían físicamente en el código. Mi objetivo era que cualquier ingeniero de Frontend, al abrir el archivo, no viera solo una interfaz bonita, sino un plano de ingeniería donde cada espacio, cada borde y cada alineación tuviera una razón de ser y una medida exacta.

#### El rigor del espacio: Paddings y márgenes con propósito

Comencé la tarea forense de definir las medidas y el espaciado. No me limité a tirar líneas al azar; implementé una lógica de espaciado basada en múltiplos de 8 para mantener una armonía visual que el ojo humano percibe como orden, incluso de forma inconsciente. Me enfoqué especialmente en los contenedores de eventos y los perfiles de usuario, que son el corazón de la plataforma.

Definí con precisión quirúrgica los paddings internos de las tarjetas de eventos. Sabía que un atleta, quizás consultando la app justo después de una carrera con los dedos temblorosos o bajo la luz directa del sol, necesitaba áreas de interacción claras. No era solo una cuestión de estética, sino de usabilidad táctil y reducción de la carga cognitiva. Establecí que los márgenes entre elementos de la lista debían ser lo suficientemente amplios para evitar clics accidentales, pero lo suficientemente compactos para no desperdiciar el valioso espacio vertical en dispositivos móviles.

> **Decisión de Diseño:** Opté por un padding interno de 24px para los contenedores principales de información crítica. Sacrifiqué un poco de densidad de contenido en favor de una legibilidad superior. En un ecosistema donde la información de tiempos y resultados es densa, el "aire" entre elementos es lo que permite que el usuario no se sienta abrumado.

Cada distancia entre un encabezado y su cuerpo de texto, cada espacio entre el icono de ubicación y el nombre del evento, fue documentado. Utilicé herramientas de anotación para dejar claro que esos espacios no eran negociables. Esta disciplina geométrica es lo que separa un producto que se siente "sólido" de uno que se siente "barato" o descuidado.

#### Unidades de medida: El puente entre el lienzo y el código

Uno de los mayores puntos de fricción en el handoff es el lenguaje de las unidades. Para evitar que el diseño se "rompiera" al escalar en diferentes densidades de pantalla, tomé la decisión estratégica de implementar un sistema de unidades consistente y traducible directamente al entorno de desarrollo.

Maniobré entre tres mundos:
*   **Píxeles (px):** Los reservé para elementos que requerían una precisión absoluta y que no debían variar, como el grosor de los bordes de los campos de entrada o el tamaño de los iconos pequeños del sistema.
*   **Rems:** Implementé esta unidad para toda la tipografía. Mi razonamiento fue la accesibilidad; si un usuario aumenta el tamaño de fuente en la configuración de su navegador o sistema operativo, la interfaz de AsDeporte debe responder proporcionalmente sin destruir el layout.
*   **Puntos (pt):** Los utilicé como referencia para los elementos nativos de la app móvil, asegurando que el equipo de iOS y Android hablara el mismo idioma que el sistema operativo subyacente.

Traduje cada medida de Figma a este estándar. No quería que el desarrollador tuviera que hacer cálculos mentales. Si un botón tenía una altura de 48px, documenté su equivalencia para que el equipo de Frontend pudiera copiar y pegar directamente en sus archivos de estilo. Esta "higiene técnica" es costosa en tiempo inicial, pero es lo que blinda el producto contra la fragmentación visual que ocurre cuando cada desarrollador interpreta las medidas a su manera.

#### La infraestructura del flujo: Rejillas y comportamiento de Layout

Con las medidas individuales definidas, pasé a configurar la infraestructura que sostendría todo el contenido: el sistema de rejillas (Grids). Para el MVP B2C de AsDeporte, el reto era monumental debido a la naturaleza híbrida del producto (Web Responsive y App Móvil).

Diseñé un sistema de 12 columnas para la versión desktop, permitiendo que la información compleja del *livetracking* y las tablas de resultados se distribuyeran con elegancia. Sin embargo, la verdadera magia ocurrió en la definición del comportamiento fluido. Determiné qué elementos debían tener un ancho fijo y cuáles debían ser elásticos (flexbox behavior). Por ejemplo, en el feed de eventos, decidí que las tarjetas laterales de filtros se mantuvieran fijas para garantizar su acceso rápido, mientras que el área central de contenido se expandiera para aprovechar cada píxel disponible en monitores ultra-wide.

Para la versión móvil, simplifiqué la estructura a 4 columnas con márgenes laterales de 16px. Aquí, el foco fue el *gutter* (el espacio entre columnas). Lo ajusté para que, incluso en pantallas pequeñas, los elementos no se sintieran amontonados. Documenté cada regla de alineación: ¿el contenido se centra?, ¿se pega a la izquierda?, ¿cómo crecen los elementos cuando el teléfono se pone en modo horizontal? No dejé ninguna de estas preguntas al aire. Especificar el comportamiento de los elementos dentro del layout es lo que asegura que la visión de diseño sobreviva al caos de la navegación real.

#### Puntos de quiebre: La metamorfosis de la interfaz

La adaptabilidad no es solo cambiar el tamaño de las cosas; es una transformación estratégica del contenido según el contexto. Identifiqué y documenté los puntos de quiebre (Breakpoints) críticos donde la interfaz de AsDeporte debía mutar para seguir siendo funcional.

Establecí saltos claros:
1.  **Móvil (320px - 480px):** Prioridad absoluta al pulgar. El botón de "Inscribirme" se convierte en una barra fija en la parte inferior de la pantalla.
2.  **Tablet (768px - 1024px):** El momento donde la navegación lateral empieza a aparecer y el contenido se reorganiza en dos columnas para aprovechar el ancho adicional.
3.  **Desktop (1200px+):** La experiencia completa, con todos los filtros visibles y mapas de livetracking expandidos.

En cada uno de estos puntos, describí qué elementos se ocultaban, cuáles se apilaban y cuáles cambiaban su orden de importancia. Por ejemplo, en el flujo de inscripción, decidí que el resumen del carrito, que en desktop es una columna lateral persistente, en móvil se transformara en un paso final o un acordeón colapsable. Esta decisión no fue solo estética, sino una adaptación necesaria al modo en que los atletas interactúan con sus dispositivos en diferentes situaciones: la calma del escritorio frente a la urgencia del móvil en el campo de entrenamiento.

#### El uso forense de Figma Dev Mode y las anotaciones detalladas

Para cerrar este bloque de precisión geométrica, realicé una pasada final por todas las pantallas de alta fidelidad utilizando las funcionalidades de especificación de Figma (Dev Mode). Mi intención era dejar una "huella digital" de instrucciones que no permitiera dudas.

Añadí anotaciones detalladas sobre cada componente complejo. No me detuve en lo obvio; fui a lo profundo. Documenté las alturas de línea tipográfica para asegurar que los párrafos de las reglas de competencia fueran legibles. Indiqué los radios de curvatura de todos los botones y contenedores (8px constantes para suavizar la interfaz sin perder profesionalismo). Incluí los códigos hexadecimales exactos y los tokens de espaciado que ya habíamos empezado a esbozar en el sistema de diseño.

Mi objetivo era crear una radiografía completa del diseño. Quería que el desarrollador, al hacer clic en cualquier elemento, encontrara una hoja de datos técnica. Esta meticulosidad redujo drásticamente el ruido en los canales de comunicación. En lugar de recibir mensajes preguntando "¿cuánto espacio hay aquí?", el equipo podía avanzar con autonomía. Esta autonomía es el mayor regalo que un diseñador puede darle a un equipo de ingeniería; es la base de una relación de respeto mutuo y eficiencia.

Al finalizar esta etapa, sentí que las pantallas ya no eran solo dibujos. Tenían peso, tenían reglas y tenían una estructura lógica que las hacía listas para ser picadas en código. Había construido la armadura; ahora tocaba definir la piel y el alma visual que cubriría esa estructura.

> **Aprendizaje Senior:** La precisión geométrica es la forma más pura de respeto hacia el equipo de desarrollo. Cuando entregas medidas exactas y comportamientos claros, estás diciendo: "He pensado en tu trabajo y quiero que sea lo más fluido posible". Un handoff descuidado es una falta de respeto técnica que siempre termina pagando el usuario final.

**Próximo paso:**

#### ATRIBUTOS VISUALES: DEFINICIÓN DE ESTILOS Y TOKENS

Con la estructura geométrica blindada y cada píxel en su sitio, me di cuenta de que la precisión matemática era solo la mitad de la batalla. Teníamos el esqueleto perfecto, pero ahora necesitaba asegurar que la "piel" de AsDeporte —sus colores vibrantes, su tipografía enérgica y su iconografía funcional— se aplicara con la misma rigurosidad técnica. Me asaltó una duda crítica: ¿cómo evitar que el equipo de desarrollo termine usando cinco variantes diferentes del azul corporativo simplemente porque no definimos una fuente de verdad para el color? La infraestructura estaba lista, pero el alma visual del producto aún corría el riesgo de fragmentarse si no la transformábamos en un sistema de tokens innegociables.

### Parte 3: ATRIBUTOS VISUALES: DEFINICIÓN DE ESTILOS Y TOKENS

#### La tiranía del color y la fragilidad de la estética

Una cuadrícula perfecta es un esqueleto sólido, pero sin un lenguaje visual unificado, es un esqueleto que no se puede clonar con fidelidad. Al terminar el blindaje del layout, me enfrenté a una realidad incómoda: tenía 40 pantallas con una precisión geométrica absoluta, pero si le entregaba eso a ingeniería sin una "fuente de verdad" para los atributos visuales, corría el riesgo de ver nacer cinco variantes distintas del azul corporativo en la primera semana de desarrollo. La estética es frágil; se rompe en cuanto sale de Figma si no se traduce a un lenguaje técnico de especificaciones innegociables.

Mi razonamiento fue puramente sistémico. Sabía que la precisión matemática del layout era inútil si el color y la tipografía se aplicaban de forma errática. No buscaba que el producto se viera "bien" —eso ya lo habíamos validado—; buscaba que fuera **imposible de implementar mal**. Decidí que mi labor en esta fase de handoff no era entregar "estilos", sino construir un contrato técnico donde cada atributo visual fuera un dato, no una sugerencia estética.

#### El sistema tipográfico: más allá del nombre de la fuente

Para garantizar la legibilidad en el MVP B2C, realicé una documentación forense de la tipografía. No me limité a indicar que usábamos Montserrat; eso es lo que hace un principiante. Lo que hice fue definir un sistema de jerarquías donde cada estilo de texto tenía parámetros fijos que el desarrollador pudiera copiar sin dudar.

*   **Pesos y Variantes:** Especifiqué el uso exacto de los pesos **Bold, Regular y Light** para cada nivel de información. El Bold quedó blindado para los encabezados de sección (H1, H2) y llamadas a la acción críticas, mientras que el Light se reservó para metadatos secundarios, asegurando que el contraste visual guiara el ojo del atleta sin fatiga.
*   **Unidades y Escala:** Utilicé **píxeles** como unidad base, pero documenté su equivalencia para asegurar que la jerarquía se mantuviera intacta tanto en la versión móvil como en la web responsive.
*   **La obsesión por el Line-height:** Este fue un punto crítico. Documenté la altura de línea de cada estilo de texto para evitar que los desarrolladores tuvieran que "adivinar" el espaciado vertical. Un *line-height* mal implementado destruye la armonía visual y la legibilidad de los párrafos largos en la sección de detalles del evento. Al fijar estos valores, aseguré que el ritmo vertical de la interfaz fuera consistente en todas las pantallas.

Esta documentación no fue un ejercicio de estilo, sino una herramienta de control de calidad. Si un texto se veía apretado o demasiado disperso en el código, el equipo de QA tenía una referencia numérica exacta para marcar el error, eliminando cualquier debate subjetivo sobre "cómo debería verse".

#### Design Tokens: la abstracción como escudo contra la fragmentación

Al abordar la entrega de color, decidí dar el salto de los simples códigos hexadecimales a una estructura de **Design Tokens**. Mi experiencia me ha enseñado que entregar una lista de colores como `#0045A5` es una receta para el desastre a largo plazo. Si el equipo de marketing decide mañana ajustar ligeramente el tono de la marca, ingeniería tendría que buscar y reemplazar ese valor en cientos de lugares.

Para evitar esto, implementé una nomenclatura semántica en la paleta de colores:

*   **Tokens de Marca:** Definí `brand-primary` y `brand-secondary` para los colores nucleares de AsDeporte.
*   **Tokens de Estado:** Creé una capa de abstracción para la retroalimentación del sistema, como `status-error` para validaciones fallidas, `status-success` para confirmaciones de inscripción y `status-warning`.
*   **Escala de Grises:** Establecí una progresión semántica desde `neutral-10` hasta `neutral-90` para fondos, bordes y textos secundarios.

Este nivel de abstracción es vital. Al entregar tokens en lugar de colores planos, blindé el producto contra la fragmentación visual. Ingeniería implementó estas variables una sola vez, y ahora cualquier cambio global en la marca se puede ejecutar tocando una sola línea de código, sin comprometer la integridad de las 40 pantallas del MVP.

#### El inventario forense de assets gráficos

Siguiendo con el rigor técnico, realicé una exportación y organización exhaustiva de todos los assets gráficos. No se trata solo de "pasar los iconos", sino de asegurar que cada recurso esté optimizado para no penalizar el rendimiento de la plataforma.

Identifiqué cada asset por pantalla y definí formatos específicos según su naturaleza:
1.  **Iconografía:** Exporté todos los iconos en formato **SVG**. Al ser vectores, garantizamos nitidez absoluta en cualquier resolución sin aumentar el peso de la aplicación.
2.  **Imágenes e Ilustraciones:** Para las fotografías de eventos y elementos visuales complejos, utilicé **PNG y WebP**, asegurando un equilibrio entre calidad visual y velocidad de carga.
3.  **Densidades de Pantalla:** Para los assets que no podían ser vectoriales, preparé el paquete con las densidades requeridas por cada plataforma: **@1x, @2x y @3x** para iOS y Android, asegurando que ningún usuario vea una imagen pixelada, independientemente de si usa un teléfono de gama entrada o el último modelo con pantalla Retina.

Organicé todo este inventario bajo una nomenclatura lógica en el repositorio centralizado, vinculando cada asset a su pantalla correspondiente. De esta forma, el desarrollador no pierde tiempo buscando "el icono de la flechita"; sabe exactamente dónde está el recurso `icon-arrow-right-small.svg` que necesita para el flujo de inscripción.

#### Consolidación del UI Kit y Estilos Globales

El paso final fue la consolidación de la librería de componentes y estilos globales. Integré todos los estilos de capa, sombras (elevations), radios de borde y efectos en un UI Kit coherente que actúa como el contrato final entre diseño y desarrollo.

Definir que todos los botones tienen un `border-radius` de 8px o que las tarjetas de evento utilizan una sombra específica (`elevation-low`) no es un capricho estético. Es una estrategia de eficiencia. Al definir estos estilos globales, aseguré que cualquier actualización se propague automáticamente por todo el sistema. Si decidimos que las sombras deben ser más sutiles, el cambio se refleja en todo el producto de forma instantánea.

> **Aprendizaje Senior:** El diseño de producto termina donde empieza el código, y nuestra responsabilidad es que esa frontera sea invisible. Hablar el idioma de las máquinas —el de los tokens, las densidades y los line-heights— es lo que diferencia a un diseñador de interfaces de un estratega de producto. Una especificación visual mediocre es la semilla de la deuda técnica; una especificación forense es el cimiento de un software de calidad.

Al terminar esta fase, la plataforma de AsDeporte ya no era solo una serie de pantallas bonitas; era un sistema de reglas técnicas listo para ser construido. Sin embargo, mientras revisaba los estilos estáticos, me di cuenta de que nos faltaba algo vital: la vida de la interfaz. Teníamos el color y la forma, pero ¿cómo respondería el sistema cuando el usuario pusiera el dedo sobre un botón o cuando la conexión a internet fallara durante un pago?

**Próximo paso:**

#### DINÁMICA DEL SISTEMA: ESTADOS DE INTERACCIÓN Y MICRO-FEEDBACK

Con los atributos visuales estáticos perfectamente definidos y tokenizados, me asaltó una preocupación que suele ser el talón de Aquiles de muchos handoffs: la falta de respuesta. Teníamos pantallas hermosas, pero en el mundo real, los elementos deben reaccionar, vibrar y comunicar su estado al usuario. Me quedé mirando el botón de "Confirmar Inscripción" y supe que, si no definía exactamente cómo debía verse en estado de carga o qué pasaba si el usuario retiraba el dedo antes de completar el clic, el equipo de ingeniería terminaría creando una experiencia rígida y silenciosa que frustraría a los atletas en el momento más crítico de su jornada.

### Parte 4: DINÁMICA DEL SISTEMA: ESTADOS DE INTERACCIÓN Y MICRO-FEEDBACK

#### El silencio de la interfaz: dotando de sistema nervioso al MVP

Me quedé mirando fijamente el botón de "Confirmar Inscripción" en mi última revisión de los mockups de alta fidelidad. Visualmente era perfecto: el azul de la marca AsDeporte vibraba con la intensidad correcta y la tipografía estaba perfectamente alineada. Sin embargo, sentí esa inquietud técnica que solo aparece cuando sabes que estás entregando una cáscara vacía. Teníamos los huesos (la estructura) y la piel (el UI Kit), pero la interfaz seguía siendo "silenciosa". En el mundo real, un atleta que está a punto de pagar una inscripción de tres mil pesos no solo necesita que el botón sea bonito; necesita que el sistema le devuelva el eco de sus acciones en milisegundos. Si el usuario presiona y no hay una respuesta visual inmediata, la fricción cognitiva se dispara y la confianza en la plataforma se desploma.

Entendí que mi responsabilidad en este punto del handoff no era entregar pantallas, sino articular un **sistema nervioso digital**. Decidí que no enviaría ni un solo asset a ingeniería sin antes haber definido cómo reaccionaría la interfaz ante cada roce, cada clic y cada espera. Esta transición de lo estático a lo dinámico fue el momento en que dejé de diseñar imágenes para empezar a diseñar comportamientos. Sabía que si no documentaba estos estados con un nivel de detalle forense, los desarrolladores tendrían que improvisar, y la improvisación en el código es la madre de la inconsistencia y la deuda técnica.

#### La matriz de estados: más allá del "clic"

Para evitar que la experiencia de AsDeporte se sintiera rígida o, peor aún, impredecible, me sumergí en la creación de una **matriz de estados de interacción** para cada componente del sistema. Utilicé las variantes de Figma no solo como una herramienta de organización, sino como un lenguaje de comunicación directa con el equipo de desarrollo. No me limité a los estados básicos; profundicé en la anatomía de la interacción para asegurar que no hubiera "puntos ciegos" en la implementación.

Articulé cinco estados fundamentales para cada elemento interactivo:
*   **Normal:** El estado base, limpio y listo para la acción.
*   **Hover (Web):** Crucial para la versión de escritorio. Definí un cambio sutil en la luminosidad del color (usando mis tokens de color previamente establecidos) para confirmar al usuario que el elemento es reactivo antes de que decida actuar.
*   **Pressed/Active:** La respuesta inmediata al clic o al toque. Aquí especifiqué una ligera contracción visual o un cambio de elevación en las sombras para simular la presión física.
*   **Disabled:** Un estado que a menudo se descuida. Me aseguré de que los botones deshabilitados (por ejemplo, cuando un formulario no está completo) tuvieran un contraste reducido que comunicara claramente la inactividad, evitando que el usuario hiciera clics frustrados.
*   **Focus:** Este fue un punto no negociable. El estado de *Focus* no es una cuestión estética, sino el pilar de la accesibilidad. Diseñé anillos de enfoque de alto contraste para asegurar que cualquier atleta que navegue la plataforma mediante teclado o tecnologías asistivas sepa exactamente dónde se encuentra. Documenté este comportamiento como un requisito crítico para cumplir con los estándares de inclusión que nos habíamos propuesto desde el inicio.

Esta obsesión por las variantes permitió que, al inspeccionar el diseño, el desarrollador no viera un botón, sino un objeto inteligente con múltiples personalidades lógicas.

#### Feedback de carga y la batalla contra el Layout Shift

Uno de los momentos de mayor tensión en el flujo de usuario es la espera durante el procesamiento de un pago o la carga de resultados de una carrera. Si el sistema se queda estático, el usuario asume que falló. Para el botón de "Pagar", rechacé la idea de mostrar un mensaje externo; en su lugar, diseñé un **estado de Loading integrado**.

Mi especificación fue quirúrgica: al momento del clic, el texto del botón desaparece y es reemplazado por un *spinner* centrado. Pero el detalle clave fue el control del **Layout Shift**. Me aseguré de que las dimensiones del botón (el contenedor) fueran idénticas en el estado normal y en el de carga. Si el botón cambia de tamaño al cargar, empuja el resto de los elementos de la pantalla, creando un salto visual molesto y poco profesional. Al blindar estas dimensiones, garantizamos una transición fluida que mantiene la estabilidad visual de la interfaz.

Posteriormente, tracé la lógica para el **estado de Success**. En una plataforma deportiva, la confirmación es un cierre emocional. Diseñé una transición donde el spinner se transforma en un icono de verificación mediante una microinteracción suave. Este feedback inequívoco es lo que reduce la ansiedad post-transacción y confirma al atleta que su lugar en la línea de salida está asegurado.

#### Validación de formularios: comunicación en tiempo real

Los formularios son el lugar donde los productos digitales suelen morir. En AsDeporte, con registros que requieren datos precisos de salud y contacto, la validación no podía ser un mensaje genérico al final del proceso. Implementé una lógica de **Inline Validation (validación en línea)** que ocurre específicamente en el evento *on blur* (cuando el usuario quita el foco del campo).

Decidí que el sistema debía ser un guía, no un juez. Si un usuario ingresa un correo electrónico con un formato incorrecto, el campo cambia instantáneamente a un estado de error utilizando mis **Tokens de Error** (un borde rojo específico y un icono de advertencia). La clave aquí fue la redundancia para la accesibilidad: no confiamos solo en el color para comunicar el error, ya que un usuario con daltonismo podría no percibirlo. El icono de advertencia y el texto de ayuda descriptivo ("Formato de correo electrónico inválido") son obligatorios. 

Esta validación inmediata evita que el usuario llegue al final de un formulario de diez campos solo para descubrir que el primero estaba mal, reduciendo drásticamente la tasa de abandono en el embudo de conversión.

#### El alma del movimiento: microinteracciones y easing

Para que la plataforma de AsDeporte se sintiera como un producto de alta gama, necesitaba definir su "alma cinética". El movimiento no puede ser accidental; debe guiar el ojo y reforzar la jerarquía. Me alejé de las animaciones lineales y rígidas para especificar curvas de **Easing (Ease-in-out)** con duraciones estándar de 300ms para la mayoría de las transiciones.

Documenté microinteracciones específicas que aportan valor funcional:
*   **Tarjetas de Evento:** Al pasar el cursor en web, la tarjeta se eleva ligeramente (cambio en el token de sombra) y la imagen de fondo hace un zoom imperceptible del 5%. Esto no es adorno; es una señal clara de que la tarjeta es la puerta de entrada a la inscripción.
*   **Filtros de Búsqueda:** Especificamos un desplazamiento lateral suave cuando se aplican filtros, permitiendo que el usuario perciba visualmente cómo la lista de eventos se actualiza, en lugar de un cambio brusco de contenido que desorienta la vista.

Estas especificaciones de duración y comportamiento se documentaron en milisegundos y propiedades de CSS, eliminando la ambigüedad para el equipo de Frontend y asegurando que la "sensación" del producto fuera consistente en todos los dispositivos.

#### Lógica de componentes complejos: filtros y mapas

Finalmente, abordé los componentes de alta complejidad que son el corazón del MVP: los filtros multidimensionales y el mapa de *livetracking*. Aquí, la documentación estática era insuficiente. 

Para los filtros, tracé una lógica diferenciada por plataforma: en móvil, los filtros se disparan en un modal de pantalla completa para maximizar el área de toque, mientras que en web se despliegan en un panel lateral que empuja el contenido. Detallé cómo cada "tag" de filtro seleccionado debe tener su propio estado de eliminación (el icono de 'X') y cómo el botón de "Aplicar" debe mostrar el número de resultados encontrados antes de ser presionado.

En el mapa de *livetracking*, la interactividad es aún más densa. Definí los estados de los pines de ubicación: el pin del atleta líder tiene una pulsación visual constante, mientras que los pines de los amigos seguidos tienen un estado de "foco" que abre un micro-perfil al ser tocados. Especificamos el comportamiento del zoom y cómo el mapa debe recentrarse automáticamente si el usuario activa el modo de seguimiento. Sin estas definiciones, el mapa habría sido una imagen estática con puntos, perdiendo toda la utilidad estratégica para los familiares que siguen la carrera desde casa.

> **Reflexión Senior:** Documentar la interacción es, en última instancia, un ejercicio de empatía técnica. Si yo no defino qué pasa cuando un botón se presiona, estoy obligando a un desarrollador a tomar una decisión de diseño para la que no tiene contexto. Un sistema que no contempla sus estados es un sistema frágil.

Al terminar esta fase de especificación dinámica, sentí que la plataforma finalmente tenía pulso. Habíamos pasado de pantallas a procesos vivos. Sin embargo, mientras cerraba la documentación de los flujos principales, una pregunta me quedó dando vueltas: ¿qué pasa cuando las cosas no salen bien? Habíamos diseñado el "camino feliz", pero la verdadera resiliencia de un producto se mide cuando el usuario pierde la señal en medio de la montaña o cuando el servidor de pagos decide no responder.

**Próximo paso:**

#### DISEÑO DE RESILIENCIA: CASOS DE BORDE Y ESCENARIOS DE ERROR

La perfección del "flujo feliz" que acababa de documentar me generó una sospecha inmediata: estaba asumiendo un mundo ideal que no existe para un atleta en movimiento. Me detuve a pensar en ese corredor que intenta revisar su posición en el livetracking con las manos sudadas y una conexión 3G intermitente en una ruta rural. Si el sistema simplemente mostraba una pantalla blanca o un error genérico "500", toda la confianza que habíamos construido con el diseño visual se evaporaría en un segundo. Me di cuenta de que el handoff estaba incompleto si no diseñábamos para el caos, para el vacío y para el fallo, transformando esos momentos de frustración potencial en oportunidades de asistencia técnica real.

### Parte 5: DISEÑO DE RESILIENCIA: CASOS DE BORDE Y ESCENARIOS DE ERROR

#### La ilusión del flujo perfecto y la realidad del entorno

Al cerrar la última especificación de los estados de interacción, me detuve a observar el prototipo. Todo funcionaba con una fluidez quirúrgica: los botones respondían al *hover*, los formularios validaban con elegancia y las transiciones entre pantallas eran impecables. Sin embargo, sentí esa punzada de desconfianza que solo te da la experiencia en campo. Estaba entregando un mapa de una ciudad donde nunca llueve, pero nuestro usuario —un atleta de AsDeporte— no vive en un entorno controlado. Vive en rutas de montaña con señal intermitente, compite con las manos sudadas que dificultan la precisión táctil y utiliza dispositivos con baterías al límite.

Comprendí que mi trabajo de handoff estaba incompleto. La estética y la interacción ideal no sirven de nada si el sistema colapsa ante un túnel sin señal o una tarjeta de crédito rechazada en el último segundo de una inscripción para un Ironman. Como responsable del producto, mi razonamiento fue pragmático: el verdadero diseño no ocurre en el "camino feliz", sino en los bordes. Decidí que el paquete de entrega debía blindar la experiencia contra la incertidumbre técnica, transformando cada posible momento de fallo en una oportunidad de asistencia. No podíamos permitir que el desarrollo avanzara asumiendo que las APIs siempre responderían en milisegundos o que el usuario siempre otorgaría todos los permisos a la primera.

#### Arquitectura de la ausencia: El valor estratégico de los Empty States

Inicié este blindaje abordando lo que muchos pasan por alto: el vacío. Un listado sin datos no es un error, es un estado de la relación con el usuario, y tratarlo como una pantalla en blanco es una oportunidad perdida de retención. Me enfoqué en definir la arquitectura de los **Empty States** para el MVP B2C, analizando sistemáticamente cada sección donde la base de datos podría devolver un resultado nulo.

Para la sección de "Mis Inscripciones", por ejemplo, el escenario para un usuario nuevo era un vacío absoluto. En lugar de dejar que el desarrollador implementara un contenedor genérico, diseñé una variante específica que utilizaba el vacío como un motor de descubrimiento. Articulé estos estados bajo tres pilares:

*   **Contexto Visual:** Implementé ilustraciones minimalistas que mantenían la estética de la marca pero comunicaban claramente que no había un error técnico, sino una falta de datos.
*   **UX Writing Empático:** Sustituí los textos técnicos por mensajes que invitaban a la acción. En lugar de un "No hay registros", utilicé copys como "Tu próxima meta te espera. Aún no tienes inscripciones activas".
*   **CTAs de Recuperación:** Cada estado vacío debía tener una salida. Si el buscador de eventos no arrojaba resultados, el diseño incluía un botón para "Limpiar filtros" o "Ver eventos destacados", asegurando que el usuario nunca llegara a un callejón sin salida visual.

Esta meticulosidad en los estados vacíos no era solo estética; era una forma de reducir la carga cognitiva del usuario y evitar que pensara que la aplicación "no cargaba". Al entregar estas variantes en el handoff, eliminé la ambigüedad para el equipo de frontend, dándoles una guía clara de qué mostrar cuando la consulta a la base de datos regresara vacía.

#### Diseño para el "Boom": Estados de Error y Recuperación

El siguiente paso fue el más crítico: mapear el fallo. En un producto que maneja transacciones financieras y seguimiento en tiempo real, un error mal gestionado es sinónimo de abandono y pérdida de confianza. Realicé un ejercicio forense para identificar los puntos de quiebre más probables: pérdida de conexión a internet, errores de servidor (API 500), recursos no encontrados (404) y, crucialmente, el rechazo de pagos en la pasarela.

Documenté los **Error States** no como interrupciones, sino como diálogos de soporte. Mi enfoque fue eliminar cualquier lenguaje críptico o códigos de error que solo un ingeniero entendería. Para el caso de una pérdida de señal durante el registro de tiempos, diseñé un componente de "Offline Banner" que informaba al atleta que sus datos se estaban guardando localmente y se sincronizarían al recuperar la conexión. 

> El diseño de resiliencia consiste en aceptar que el sistema va a fallar y construir el puente de regreso antes de que el usuario se caiga. Un mensaje de error sin un botón de "Reintentar" es un despido implícito al usuario.

Para los errores de pago, creé especificaciones detalladas que diferenciaban entre un problema técnico del banco y una tarjeta sin fondos. Cada pantalla de error incluía una vía de escape clara: un botón de reintento con un *timeout* lógico o un acceso directo al soporte técnico de AsDeporte. Esta documentación aseguró que el equipo de QA tuviera casos de prueba claros y que el desarrollo no dejara cabos sueltos que pudieran generar tickets de soporte innecesarios tras el lanzamiento.

#### Stress Testing Visual: La variabilidad de los datos reales

Uno de los mayores riesgos en el handoff es diseñar para datos "perfectos". En Figma es fácil que un nombre de evento quepa en una línea, pero en la base de datos de AsDeporte tenemos títulos como "Triatlón Blackout presented by Banorte - Etapa 1 Cozumel". Si no diseñamos para el desborde, el layout se rompe en producción.

Realicé lo que llamo un **Layout Stress Testing**. Tomé los componentes más críticos —las tarjetas de evento y los perfiles de atleta— y los puse a prueba con datos extremos. Documenté comportamientos específicos para:

*   **Truncamiento de Texto (Ellipsis):** Definí exactamente en qué línea y bajo qué condiciones el texto debía cortarse, asegurando que los elementos de interacción (como el precio o el botón de inscripción) nunca se desplazaran fuera de la vista.
*   **Contenedores Dinámicos:** Especificé qué elementos debían crecer verticalmente y cuáles debían mantener un tamaño fijo, proporcionando reglas de flexbox claras para los desarrolladores.
*   **Imágenes Ausentes:** Diseñé *placeholders* con la identidad visual de la marca para aquellos eventos que, por alguna razón, no tuvieran un banner cargado en el CMS, evitando que la interfaz mostrara el icónico y poco profesional icono de "imagen rota".

Esta fase de "diseño contra el desborde" blindó la integridad visual de la plataforma, garantizando que, sin importar qué tan caótica fuera la información introducida en el backend, la interfaz se mantendría profesional y legible.

#### El muro de los permisos: El caso crítico del Livetracking

Finalmente, abordé el escenario de los permisos denegados, centrándome en la funcionalidad de Livetracking. Esta es una de las joyas de la corona del MVP, pero depende totalmente de que el usuario otorgue acceso al GPS. ¿Qué pasa si el atleta, por privacidad o error, dice "No"?

Según lo que estructuré en la documentación de casos de borde, no podíamos simplemente dejar la pantalla del mapa vacía. Diseñé un flujo educativo de "Permiso Requerido". Si el sistema detectaba que la localización estaba desactivada, el prototipo mostraba una pantalla que explicaba el valor del permiso: "Necesitamos tu ubicación para que tus familiares puedan seguirte en tiempo real y para garantizar tu seguridad en la ruta".

No me detuve ahí. Incluí en el handoff las especificaciones para guiar al usuario directamente a los ajustes del sistema operativo (iOS/Android) para revertir la decisión. Este nivel de detalle es lo que separa a un diseñador visual de un diseñador de producto: yo no solo diseño la pantalla donde el GPS funciona; diseño la estrategia para convencer al usuario de que lo active cuando no lo ha hecho. Es un ejercicio de transparencia y utilidad que previene la frustración de pensar que la aplicación "no funciona" cuando, en realidad, es una restricción del sistema.

#### Reflexión sobre la robustez del producto

Mirando hacia atrás, esta fase de documentación de bordes y errores fue la que realmente "blindó" el proyecto. Diseñar para el peor escenario posible no es ser pesimista, es ser responsable. Al entregar estas variantes y lógicas de fallo, redujimos drásticamente la deuda técnica que suele acumularse cuando los desarrolladores tienen que "inventar" estados de error sobre la marcha. 

Siento una satisfacción particular al saber que el equipo de ingeniería no tendrá que preguntarme qué pasa si el servidor cae; ya tienen la pantalla, el copy y la lógica de reintento en su tablero de Figma. La plataforma de AsDeporte ahora no solo es atractiva, es resiliente. Está lista para enfrentarse al lodo, a la falta de señal y a los errores humanos, manteniendo siempre la compostura.

**Próximo paso:**

#### LOGÍSTICA DE ASSETS: OPTIMIZACIÓN Y ENTREGA DE RECURSOS GRÁFICOS

Con la lógica del sistema totalmente blindada y los casos de borde documentados, me enfrenté a la realidad física del desarrollo: los archivos. Toda esa arquitectura visual de iconos, ilustraciones de estados vacíos y banners de marca necesitaba salir de Figma y convertirse en recursos optimizados que no pesaran en la carga de la app móvil ni ralentizaran la web responsive. Recuerdo el momento exacto en que abrí el panel de exportación y supe que, si no establecía una convención de nomenclatura y formatos estricta ahora, el handoff se convertiría en un caos de archivos duplicados y versiones obsoletas para los ingenieros.

### Parte 6: LOGÍSTICA DE ASSETS: OPTIMIZACIÓN Y ENTREGA DE RECURSOS GRÁFICOS

#### La materialización técnica: de la estética a los componentes de software

La estética es una promesa que la ingeniería debe cumplir, pero esa promesa se rompe en el momento en que un icono aparece pixelado o una ilustración tarda tres segundos de más en cargar. Al cerrar la fase de documentación de casos de borde, sentí ese cambio de gravedad en el proyecto. Ya no estábamos hablando de "cómo se siente" la plataforma de AsDeporte; estábamos hablando de cómo se descarga, cómo se renderiza y cómo ocupa espacio en la memoria de un smartphone. Mi razonamiento en este punto fue pragmático: un diseño excelente no sirve de nada si su implementación técnica es pesada o desordenada. Si el handoff fallaba aquí, el trabajo de meses se convertiría en un cuello de botella para el equipo de desarrollo, y peor aún, en una experiencia frustrante para el atleta que intenta revisar su tiempo de carrera con una conexión 3G inestable.

Me enfrenté a la tarea de transformar la belleza visual en eficiencia de software. Esta no es la parte glamurosa del diseño, pero es la que separa a un diseñador senior de un entusiasta. Sabía que si entregaba archivos "sucios" o mal nombrados, estaba transfiriendo mi desorden al código de los ingenieros. Por eso, decidí dedicar una jornada completa exclusivamente a la logística de assets. Mi objetivo era blindar el rendimiento de la app móvil y la web responsive desde la raíz, asegurando que cada recurso gráfico fuera una pieza de ingeniería visual optimizada y lista para ser consumida sin fricciones.

#### La auditoría forense antes de la exportación

Antes de pulsar el comando de exportación en Figma, realicé una limpieza quirúrgica de cada elemento visual. Siguiendo el rigor que me impuse para este handoff, no permití que ningún asset saliera del archivo sin pasar por una inspección de capas. En el diseño de producto, lo que no se ve también importa. Me aseguré de eliminar grupos innecesarios, máscaras redundantes y capas ocultas que solo añaden peso al código del SVG o complican la interpretación del archivo por parte del motor de renderizado.

Uno de los puntos donde más puse el foco fue en la iconografía. Para un sistema como el de AsDeporte, donde los iconos de disciplina (natación, ciclismo, carrera) son omnipresentes, la consistencia es obligatoria. Maniobré sobre cada vector para realizar un *flattening* de los trazados complejos. No quería que un desarrollador se encontrara con trazados abiertos o efectos de "stroke" que se comportaran de forma errática al cambiar de tamaño. Además, impuse una regla de hierro: cada icono debía estar contenido en un *bounding box* consistente de 24x24 píxeles. Esta decisión no fue estética, sino logística. Al normalizar el contenedor, garantizaba que, independientemente de la forma del icono —ya fuera un cronómetro delgado o una medalla robusta—, la alineación en el código sería perfecta y predecible. Los ingenieros de frontend no tendrían que pelearse con márgenes manuales para centrar un icono en un botón; el asset ya venía con su espacio de respiración integrado y calibrado.

#### Estrategia de formatos: el equilibrio entre fidelidad y performance

La elección del formato de archivo es, en realidad, una decisión de negocio disfrazada de técnica. Para la plataforma de AsDeporte, donde la velocidad de carga puede determinar si un usuario completa su inscripción o abandona por frustración, cada kilobyte cuenta. Articulé una estrategia de formatos diferenciada para maximizar la eficiencia en cada plataforma.

Para toda la iconografía y los elementos vectoriales, el estándar fue el **SVG**. Mi razonamiento fue claro: necesitaba escalabilidad infinita con el mínimo peso posible en el DOM. Sin embargo, no me detuve ahí. Para las imágenes de alta resolución, como los banners de los eventos Spartan Race o L'Étape, tomé una ruta distinta según el entorno. Para la web responsive, opté por **WebP** como formato de última generación. Sabía que esto nos daría una ventaja competitiva en términos de SEO y velocidad de carga, reduciendo el peso de las imágenes hasta en un 30% comparado con un JPEG tradicional sin sacrificar la vibrancia de los colores de marca. Para la aplicación móvil, donde la compatibilidad y la gestión de la transparencia son críticas, preparé los recursos en **PNG** con canal alfa para aquellos elementos que requerían superponerse sobre fondos dinámicos. Esta distinción técnica fue vital para asegurar que la visión de diseño se materializara con precisión, sin importar si el usuario estaba en un navegador de escritorio o en una app nativa.

#### El rigor de las densidades en el ecosistema móvil

Diseñar para móvil significa diseñar para la fragmentación. No podía permitir que un usuario con un iPhone 15 Pro Max viera bordes borrosos en los iconos de navegación. Por eso, apliqué un rigor forense a la exportación multiresolución. Configuré los ajustes de exportación en Figma para cubrir todo el espectro de densidades necesario para iOS y Android.

Generé cada asset rasterizado en tres escalas: **@1x, @2x y @3x**. Esta no fue una tarea automatizada sin supervisión; verifiqué manualmente que la nitidez se mantuviera en cada nivel de densidad. Me aseguré de que los nombres de los archivos incluyeran los sufijos correctos para que los desarrolladores pudieran integrarlos directamente en sus respectivos catálogos de recursos, ya fuera en `Assets.xcassets` para iOS o en la carpeta `res/drawable` de Android. Esta obsesión por la precisión me permitió entregar un paquete de recursos que eliminaba cualquier ambigüedad. Si un ingeniero necesitaba el icono del cronómetro para un botón de acción, ya tenía la versión optimizada para cada pantalla, sin necesidad de redimensionar nada por su cuenta.

#### Minificación y post-procesamiento: el último filtro de calidad

En mi experiencia, la salida nativa de Figma es excelente, pero no es perfecta. Figma suele añadir metadatos innecesarios, IDs de grupo y etiquetas de metadatos en los SVGs que solo inflan el tamaño del archivo final. Por eso, decidí no limitarme a la exportación básica y pasé todos los iconos vectoriales por herramientas de minificación como **SVGO**.

Este paso de post-procesamiento fue clave para reducir el peso de los archivos hasta en un 40% adicional en algunos casos. Mi razonamiento fue simple: cada KB ahorrado en un icono que se carga mil veces al día en miles de dispositivos es una mejora directa en la experiencia del usuario y en la tasa de retención de la app. Para las imágenes rasterizadas, apliqué una compresión inteligente que eliminara la redundancia visual sin pérdida de calidad perceptible. Quería que el MVP B2C de AsDeporte fuera ágil, incluso en conexiones móviles inestables durante un evento deportivo masivo, donde el ancho de banda suele colapsar. La optimización no es solo una tarea técnica; es una forma de respeto hacia el usuario y hacia el equipo de ingeniería.

#### La arquitectura de la entrega: organización lógica y nomenclatura

Una entrega desordenada es una invitación al error. Por eso, dediqué tiempo a crear una estructura jerárquica de carpetas que fuera lógica y predecible. Siguiendo las directrices que yo mismo había trazado en el proceso de handoff, organicé los recursos en una estructura limpia: `/assets/icons/`, `/assets/illustrations/` y `/assets/brand/`.

Para la nomenclatura, impuse una convención de *snake_case* que eliminara cualquier ambigüedad en el código. No permití nombres genéricos como "icono_rojo.svg". Cada archivo debía seguir una lógica de función y estado: `ic_nav_livetracking_active.svg` o `ic_action_register_disabled.svg`. Esta organización es el puente final que permite al equipo de ingeniería mapear los diseños con el código de manera fluida. Al abrir la carpeta de assets, un desarrollador de frontend no debería tener que preguntarme qué icono va en qué lugar; el nombre y la ubicación del archivo debían decírselo por sí solos. Esta estructura redujo drásticamente las consultas de soporte durante el desarrollo, permitiendo que el equipo de ingeniería avanzara a una velocidad que no habríamos alcanzado con una entrega desorganizada.

#### Reflexión sobre la logística de assets como acto de diseño

Al finalizar esta jornada de optimización, sentí una satisfacción que solo viene de saber que el trabajo está bien hecho desde los cimientos. A menudo, los diseñadores nos enfocamos tanto en la superficie que olvidamos que el diseño de producto es, en última instancia, software. Una entrega optimizada y bien nombrada no solo acelera el *time-to-market*, sino que garantiza que la calidad visual que diseñé con tanto cuidado se mantenga intacta en el producto final.

Gestionar los assets con este nivel de detalle es, en realidad, una forma de respeto hacia el equipo de desarrollo. No les estaba entregando un "dibujo"; les estaba entregando los componentes de un sistema de alta precisión. Al eliminar la fricción en la implementación, estaba asegurando que el equipo de ingeniería pudiera dedicar su energía a resolver problemas lógicos complejos en lugar de perder tiempo renombrando archivos o ajustando márgenes de iconos. La plataforma de AsDeporte ahora no solo era resiliente en su lógica, sino también ligera y eficiente en su materialización física.

**Próximo paso:**

#### EL MANIFIESTO DEL SISTEMA: CONSOLIDACIÓN DEL UI KIT

Con todos los assets optimizados y la lógica de los flujos blindada, me di cuenta de que tenía ante mí una colección masiva de piezas sueltas que, aunque perfectas individualmente, necesitaban un lenguaje común que las unificara para siempre. Los iconos, los colores y las tipografías ya estaban ahí, pero faltaba el contrato definitivo que dictara cómo debían convivir en el futuro. Recuerdo el momento en que empecé a agrupar los componentes en Figma y supe que el verdadero reto no era solo entregar este proyecto, sino crear un sistema vivo que permitiera a AsDeporte seguir creciendo sin que el diseño se rompiera en el intento.

### Parte 7: EL MANIFIESTO DEL SISTEMA: CONSOLIDACIÓN DEL UI KIT

#### La transición del artefacto al lenguaje

Tener los assets optimizados era solo la mitad de la batalla; sin un lenguaje que los gobernara, la implementación del MVP B2C de AsDeporte estaba condenada a la inconsistencia. Me encontré frente a una paradoja común en proyectos de esta escala: teníamos pantallas visualmente impecables y un flujo validado, pero si tres desarrolladores distintos empezaban a maquetar la interfaz basándose solo en los mockups, terminaríamos con tres versiones diferentes de un mismo botón. La eficiencia técnica que logré en el paso anterior no servía de nada si no establecía un "contrato" inamovible.

Entendí que mi responsabilidad no era entregar dibujos, sino una arquitectura de diseño. Necesitaba que el equipo de ingeniería dejara de ver píxeles y empezara a ver componentes. Esta transición mental me llevó a iniciar la consolidación del UI Kit no como un catálogo estético, sino como el manifiesto técnico del sistema. No se trataba solo de que se viera bien; se trataba de que fuera imposible de romper durante la construcción del código.

#### La auditoría forense de la librería

Empecé por realizar una limpieza profunda en Figma, lo que yo llamo una auditoría forense de componentes. Reuní todos los artefactos finales que habíamos iterado desde las fases de ideación y validación. Fue un proceso de filtrado implacable: rastreé cada pantalla del MVP buscando componentes "huérfanos", esos elementos que parecen estándar pero que tienen un margen de 15px en lugar de los 16px definidos, o un color de borde ligeramente fuera de la paleta oficial.

Centralicé todo en un archivo maestro. Mi criterio fue claro: si un elemento no estaba en la librería oficial, no existía para el proyecto. Eliminé versiones obsoletas de modales y campos de texto que habían sobrevivido a las pruebas con usuarios pero que ya no cumplían con los estándares técnicos finales. Este paso de consolidación aseguró que el equipo de desarrollo trabajara con una única fuente de verdad, blindando la integridad visual del producto frente a cualquier interpretación errónea.

#### El comportamiento del sistema: variantes y estados

Un sistema de diseño que solo muestra cómo se ven las cosas en su estado ideal es un sistema incompleto. Por eso, dediqué una parte sustancial del tiempo a documentar la lógica de interacción de cada pieza. No me limité a diseñar un botón; diseñé el comportamiento de ese botón en ocho escenarios distintos. Utilicé la funcionalidad de **Variantes** en Figma para organizar de manera matricial los estados de:

*   **Normal:** El estado base de la interfaz.
*   **Hover:** Crucial para la versión web responsive, donde el cursor debe anticipar la acción.
*   **Presionado (Active):** La respuesta inmediata al clic o tap.
*   **Enfocado (Focus):** Un requisito no negociable para la accesibilidad, permitiendo la navegación por teclado.
*   **Deshabilitado:** Para acciones que dependen de una validación previa.
*   **Error y Éxito:** La retroalimentación visual inmediata tras una interacción.
*   **Cargando (Loading):** Para gestionar la percepción del tiempo de espera en procesos como el pago de una inscripción.

Para los componentes más complejos, como el mapa interactivo de *livetracking* o los filtros de búsqueda de eventos, documenté microinteracciones específicas. Definí duraciones de animación en milisegundos y curvas de *easing* para que las transiciones no fueran lineales y mecánicas, sino que se sintieran fluidas y orgánicas, elevando la percepción de calidad de la plataforma.

#### Tokens de diseño y la precisión del layout

Para que la comunicación con ingeniería fuera fluida, traduje mis decisiones visuales a un lenguaje que ellos pudieran implementar sin dudas. Establecí una jerarquía de **Design Tokens** para los colores, utilizando códigos hexadecimales vinculados a nombres semánticos (ej. `$brand-primary` en lugar de solo un código de color), lo que facilita cambios globales en el futuro.

La tipografía no se quedó atrás. Definí una escala clara de pesos, tamaños y, lo más importante, alturas de línea (*line-height*). Un error de un píxel en la altura de línea puede desmoronar un layout entero cuando se escala a diferentes dispositivos. Complementé esto con un sistema de espaciado basado en una unidad consistente de 8px, asegurando que todos los márgenes y *paddings* tuvieran una lógica matemática detrás.

Para el **Responsive Grid**, definí los puntos de quiebre (*breakpoints*) exactos. Necesitaba que la interfaz de AsDeporte fuera elástica: que la experiencia de un atleta consultando sus resultados en un iPhone fuera tan coherente y legible como la de un organizador revisando métricas en una MacBook Pro. Cada componente fue probado en sus límites de estiramiento y compresión antes de darlo por finalizado.

#### La materialización de la estrategia de marca

Este UI Kit no nació de un vacío creativo; fue la materialización técnica de los principios de diseño que establecimos al inicio del proyecto. Me aseguré de que cada decisión técnica respetara la visión estratégica de AsDeporte como el "motor que libera tu grandeza". Si la marca debía transmitir energía y profesionalismo, la elección de los radios de curvatura en los botones y la velocidad de las microinteracciones debían reflejar precisamente eso.

Crucé las definiciones iniciales de marca con las restricciones técnicas del MVP. Fue un ejercicio de equilibrio constante: mantener la sofisticación visual sin comprometer el rendimiento de carga de la aplicación. Al final, el sistema de diseño se convirtió en el puente que unió la estrategia de alto nivel con la ejecución de bajo nivel, validando que cada componente fuera coherente con la identidad que la compañía quería proyectar al mundo.

#### Atomicidad para la escalabilidad futura

Adopté un enfoque de **Atomic Design** para garantizar que el sistema fuera escalable. Descompuse la interfaz en sus partículas más pequeñas: átomos como iconos, colores y tipografías. Estos se combinan en moléculas (un campo de búsqueda con su botón) y luego en organismos complejos, como el encabezado de un evento deportivo que incluye imagen, fecha, etiquetas y el botón de inscripción.

> **Insight Senior:** La atomicidad no es solo una forma de organizar capas en Figma; es un seguro contra la deuda técnica. Al construir de lo pequeño a lo grande, permití que AsDeporte pueda realizar cambios globales —como actualizar el estilo de todos los iconos del sistema— editando un solo componente maestro en cuestión de segundos, sin que el diseño se rompa en las 40 pantallas del MVP.

Esta estructura no solo facilita mi trabajo como diseñador, sino que simplifica radicalmente las tareas de QA y Frontend. Al reducir la cantidad de elementos únicos que deben ser probados y desarrollados, estamos acelerando el *time-to-market* y asegurando que el producto pueda crecer sin volverse inmanejable. El UI Kit quedó consolidado no como un manual de estilo estático, sino como un ecosistema vivo, listo para ser entregado.

**Próximo paso:**

#### EL PUENTE A INGENIERÍA: ORGANIZACIÓN FINAL Y WALK-THROUGH

Con el sistema de diseño blindado y documentado hasta el último píxel, me encontré con un archivo de Figma que era una obra maestra de la organización, pero también una herramienta densa y compleja. Sabía que simplemente enviar un enlace por Slack sería el camino más rápido hacia el desastre; necesitaba asegurar que los desarrolladores no solo vieran la documentación, sino que la comprendieran y la hicieran suya. El momento de la verdad se acercaba: la sesión de *walk-through* donde tendría que defender cada decisión técnica y lógica ante el equipo que transformaría mis diseños en código funcional.

### Parte 8: EL PUENTE A INGENIERÍA: ORGANIZACIÓN FINAL Y WALK-THROUGH

#### La responsabilidad del último píxel: de la visión a la implementación

Un diseño que no se puede construir, o que se construye mal, es un diseño que no existe. Al cerrar la fase de prototipado, me encontré con un ecosistema visual de una complejidad técnica considerable: decenas de flujos ramificados, un sistema de diseño atómico y una lógica de interacción que debía responder con precisión en el MVP B2C. Sabía que enviar un enlace de Figma por Slack y dar las gracias no era una opción; eso es ceder el control de la calidad a la interpretación azarosa. Mi enfoque en este punto fue transformar la creatividad en un lenguaje puramente técnico. Como responsable del producto, mi labor era eliminar cualquier sombra de duda para el equipo de ingeniería, asegurando que el esfuerzo de meses se tradujera en líneas de código fieles a la validación que ya habíamos obtenido de los usuarios.

Esta transición de la "imagen" a la "especificación" es donde se gana o se pierde la integridad de un producto. Comencé este proceso con una mentalidad forense: si un desarrollador tenía que preguntarme cuánto *padding* tenía un botón o qué pasaba si la API de *livetracking* fallaba, yo había fallado en mi entrega. El handoff no es un evento, es un protocolo de blindaje técnico que garantiza que la visión estratégica de AsDeporte no se diluya en la fase de construcción.

#### La limpieza del lienzo: consolidación de la fuente de verdad

Mi primera maniobra fue realizar una consolidación exhaustiva de todos los artefactos de diseño. En proyectos de esta escala, es fácil que existan versiones "zombis" de pantallas o componentes que quedaron descartados tras las pruebas de usabilidad. Me aseguré de purgar el archivo de Figma para trabajar exclusivamente con las versiones finales y aprobadas de los mockups de alta fidelidad, tanto para la aplicación móvil como para la versión web responsive. No permití que quedara rastro de exploraciones previas que pudieran confundir al equipo de Frontend.

Reuní en un repositorio centralizado —organizado meticulosamente en páginas dentro de Figma y documentado en Notion— los siguientes pilares del proyecto:
*   **Mockups de Alta Fidelidad:** Todas las pantallas del MVP B2C, separando claramente los flujos de inscripción, perfil de atleta y resultados.
*   **Prototipo Interactivo Final:** El simulacro navegable que servía como guía de referencia para entender el ritmo y la transición entre pantallas.
*   **Especificaciones de Interacción (IxD):** Un documento actualizado donde cada gesto y cada respuesta del sistema estaban descritos sin ambigüedad.
*   **Glosario de Términos y UX Writing:** Un componente crítico que a menudo se olvida. Me aseguré de que todos los textos, desde los mensajes de error hasta las etiquetas de navegación, estuvieran finalizados y aprobados para evitar cambios de última hora en el código.
*   **Especificaciones de Accesibilidad:** Documenté los ratios de contraste, los tamaños mínimos de los objetivos táctiles y el orden de lectura para lectores de pantalla, asegurando que el producto fuera inclusivo desde el primer día.

#### El lenguaje de la máquina: especificaciones de layout y tokens

Una vez consolidada la estructura, pasé a la fase de anotación técnica. Utilicé las capacidades de **Figma Dev Mode** para blindar cada pantalla. No me limité a dejar que los desarrolladores "inspeccionaran" el archivo; añadí anotaciones manuales sobre el grid y el layout responsive. Definí con precisión quirúrgica los puntos de quiebre (*breakpoints*) para la web, especificando cómo debían comportarse los elementos al pasar de una resolución de escritorio a una de tablet o móvil.

Para cada componente, documenté:
*   **Medidas y Espaciado:** Utilicé unidades consistentes (píxeles y rems) para definir márgenes, *paddings* y distancias entre elementos. Implementé un sistema de espaciado basado en múltiplos de 8 para mantener la armonía visual que el equipo de ingeniería pudiera replicar fácilmente en sus variables de CSS.
*   **Tipografía y Color:** No entregué simplemente códigos hexadecimales. Entregué **tokens de diseño**. Cada color y cada estilo tipográfico (pesos de la fuente Montserrat, alturas de línea y tamaños) estaba vinculado a un nombre lógico en el sistema de diseño. Esto permite que, si en el futuro decidimos ajustar el tono del "Azul AsDeporte", el cambio se propague por todo el código de manera automatizada.
*   **Assets Gráficos:** Identifiqué y preparé para su exportación cada icono e ilustración, asegurándome de que estuvieran listos para ser consumidos en los formatos correctos.

#### Documentando lo invisible: estados y comportamientos

El mayor riesgo en un desarrollo suele estar en lo que no se ve a simple vista: los estados de los componentes. Para evitar que el equipo de desarrollo tuviera que "inventar" cómo se ve un botón cuando está cargando, dediqué una parte sustancial del tiempo a documentar cada variante de interacción. Para cada elemento interactivo, como los campos de formulario de inscripción o los botones de pago, especifiqué visualmente los estados: **normal, hover (para web), presionado, enfocado (focus), deshabilitado, error, éxito y cargando**.

> El diseño de interacción no es solo estética; es comunicación. Si el usuario hace clic en "Inscribirse" y el sistema no muestra un estado de *loading*, el usuario pensará que la plataforma se ha colgado. Documentar estas microinteracciones es lo que separa a un producto profesional de uno amateur.

Además, detallé las validaciones de formulario en tiempo real. Definí exactamente en qué momento debía aparecer un mensaje de error (por ejemplo, si un correo electrónico no tiene el formato correcto) y cómo debía verse ese mensaje para no romper el layout. Para los controles complejos, como los mapas interactivos del *livetracking*, redacté descripciones textuales sobre el comportamiento del zoom, el refresco de datos y la interacción con los pines de ubicación.

#### El blindaje contra el error: casos de borde y escenarios alternativos

Un producto robusto se define por cómo maneja el fracaso. Por ello, documenté exhaustivamente los **Casos de Borde (Edge Cases)**. No me enfoqué solo en el "flujo feliz" donde todo funciona perfecto y hay internet de alta velocidad. Creé mockups y especificaciones para:
*   **Estados Vacíos (Empty States):** Diseñé la experiencia para cuando un atleta entra a "Mis Inscripciones" y aún no tiene eventos, o cuando busca un resultado y no hay coincidencias. Estos momentos son oportunidades perdidas si no se diseñan correctamente.
*   **Estados de Error Crítico:** Qué sucede si la pasarela de pago es rechazada, si la API no responde o si el usuario pierde la conexión en medio de un proceso crítico.
*   **Datos Inesperados:** Definí comportamientos para nombres de eventos extremadamente largos que pudieran romper los contenedores o imágenes que no cargan.
*   **Permisos Denegados:** Documenté el flujo para cuando un usuario niega el acceso a la localización, asegurando que la app explique por qué es necesaria la función sin bloquear la navegación general.

#### La entrega de activos y el ecosistema de ingeniería

Para la exportación de assets, seguí un protocolo estricto coordinado con el equipo de ingeniería. Exporté todos los iconos e ilustraciones en formato SVG para garantizar escalabilidad sin pérdida de calidad y con el menor peso posible. Para las imágenes fotográficas necesarias en el MVP, preparé assets en densidades **@1x, @2x y @3x**, asegurando que la aplicación se vea nítida tanto en un dispositivo Android de gama media como en el último iPhone con pantalla Retina.

Organicé estos activos en una estructura de carpetas lógica que reflejaba la arquitectura de la información de la app. Pero el paso final, y quizás el más importante para la trazabilidad, fue la vinculación del diseño con la gestión de proyectos. Me tomé el tiempo de insertar enlaces directos a los frames específicos de Figma dentro de los tickets de **Jira**. De este modo, cuando un desarrollador toma una tarea para construir el "Módulo de Resultados", no tiene que buscar en un archivo de 50 páginas; tiene el enlace exacto a la especificación técnica, los assets y los casos de borde de esa funcionalidad específica.

#### El Handoff Walk-through: la alineación final

Finalmente, convoqué a una sesión de **handoff walk-through** con los líderes de Frontend y el equipo de QA. Esta no fue una presentación de diseño, sino una sesión de trabajo técnico. Recorrí cada flujo de usuario, explicando la lógica detrás de cada decisión y respondiendo preguntas sobre la viabilidad de ciertas animaciones o la implementación de los filtros dinámicos.

Durante esta sesión, el equipo de QA pudo identificar los criterios de aceptación necesarios para sus pruebas de estrés. Al presentarles la documentación de casos de borde y estados de error, les proporcioné la hoja de ruta para validar la robustez del producto. Esta colaboración estrecha en el momento de la entrega redujo drásticamente el ciclo de ida y vuelta durante el desarrollo, ya que las dudas técnicas fueron despejadas antes de que se escribiera la primera línea de código. Al terminar, el equipo de ingeniería no solo tenía acceso a los archivos; tenía la confianza y el conocimiento necesarios para construir el MVP de AsDeporte con una fidelidad absoluta a la visión que habíamos construido juntos.

**Reflexión final:**
Esta actividad marcó el momento en que dejé de ser el autor del diseño para convertirme en el facilitador de su construcción. Aprendí que un handoff mediocre es la causa principal de la deuda de diseño y de la frustración en los equipos de desarrollo; por el contrario, una entrega meticulosa y empática con las necesidades de ingeniería es lo que garantiza que el producto final mantenga la calidad que los usuarios esperan. Al entregar este paquete exhaustivo, sentí la tranquilidad de que el MVP de AsDeporte estaba blindado contra interpretaciones erróneas y listo para cobrar vida en las manos de miles de atletas.