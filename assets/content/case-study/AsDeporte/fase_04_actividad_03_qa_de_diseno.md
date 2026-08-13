# Fase 4: Implementación y Handoff

## Actividad 3: actividad_03_qa_de_diseno

### Parte 1: EL MINDSET DEL GUARDIÁN Y LA PREPARACIÓN DEL TERRENO

#### La metamorfosis del creador en auditor

El momento en que entregas los archivos finales a ingeniería es, paradójicamente, el punto de mayor vulnerabilidad para un proyecto. Después de meses de iteraciones, entrevistas con atletas y ajustes milimétricos en el UI Kit, el diseño de la plataforma AsDeporte dejó de ser una entidad controlada en mi lienzo de Figma para convertirse en líneas de código en un repositorio que yo no gobernaba. Sentí esa tensión característica: la posibilidad real de que la visión estratégica del MVP B2C se diluyera en la traducción técnica. Un botón con el *padding* incorrecto o una transición que se siente pesada no son solo errores estéticos; son grietas en la confianza que el usuario deposita en una marca con treinta años de historia.

Entendí que mi rol debía pivotar drásticamente. Ya no era el arquitecto que proyectaba el futuro, sino el guardián que debía proteger la integridad de lo construido. Esta transición de mentalidad es fundamental: si como diseñador no eres capaz de auditar tu propia obra con una severidad casi clínica, el mercado lo hará por ti, y el costo será mucho mayor. El QA de Diseño no es una formalidad burocrática al final del cronograma; es la última línea de defensa para asegurar que la promesa de una experiencia fluida e intuitiva para los deportistas no se quede en un PDF de presentación, sino que palpite en el producto real.

#### Calibrando el ojo: la inmersión forense en mis propios archivos

Antes de abrir el entorno de *staging* o señalar el primer error de implementación, ejecuté una maniobra que considero innegociable: una auditoría forense de mis propios insumos. Es un error común de los diseñadores novatos saltar directamente a la revisión del código sin haber refrescado la memoria sobre las especificaciones exactas que ellos mismos definieron semanas atrás. Para evitar sesgos o recuerdos difusos, regresé a los archivos maestros de alta fidelidad con una mirada obsesiva.

Me sumergí nuevamente en el sistema de diseño, revalidando cada *token* de color, cada jerarquía tipográfica y, sobre todo, los estados de interacción que a menudo se pierden en el *handoff*. Necesitaba tener el "ojo calibrado". Pasé horas revisando:
*   **Especificaciones exactas:** ¿Cuál era el radio de curvatura exacto de las tarjetas de eventos? ¿Eran 8px o 12px?
*   **Casos de borde:** ¿Cómo documenté que debía verse la pantalla cuando un usuario no tiene historial de carreras?
*   **Accesibilidad:** Releí las notas sobre contrastes mínimos y tamaños de fuente para asegurarme de que mi estándar de exigencia estuviera alineado con lo que prometimos en la fase de estrategia.

Esta preparación personal es lo que me permite entrar a una reunión con ingeniería y no decir "esto se ve raro", sino afirmar con autoridad técnica: "este componente está usando un *token* de color secundario en lugar del primario definido para acciones principales". La precisión nace de esta inmersión previa; sin ella, el QA es solo una opinión subjetiva.

#### El lenguaje de la trinchera: sincronización de especificaciones de handoff

Para que la auditoría fuera efectiva, necesitaba hablar el mismo idioma que los desarrolladores. No bastaba con mirar los diseños en Figma; utilicé herramientas de inspección como Figma Dev Mode para revalidar las especificaciones técnicas que les habíamos entregado. Mi objetivo era asegurar que el *benchmark* de comparación fuera irrefutable.

Revisé meticulosamente cómo se habían traducido nuestras decisiones de diseño a unidades de medida implementables. Verifiqué los *paddings* de los contenedores, las alturas de línea (*line-height*) de los párrafos y las jerarquías de los encabezados (H1, H2, H3). Esta sincronización es vital porque me permite detectar si una discrepancia en el producto final se debe a una mala interpretación del diseño o a una limitación técnica que no se comunicó a tiempo. Al dominar las especificaciones de *handoff*, elevo el nivel de la discusión: ya no hablamos de "dibujos", hablamos de CSS, de unidades relativas y de la estructura semántica que sostiene la interfaz de AsDeporte. Es en este nivel de detalle donde se gana o se pierde la calidad del producto.

#### El prototipo interactivo como brújula kinestésica

El diseño de producto no es estático, y la plataforma de AsDeporte mucho menos. Con flujos complejos como el registro a eventos o el *live tracking*, la experiencia es eminentemente cinética. Por ello, antes de tocar el entorno de pruebas, ejecuté el Prototipo Interactivo Final una y otra vez. Necesitaba recuperar la memoria kinestésica de la navegación.

No se trataba solo de ver dónde estaban los botones, sino de sentir el ritmo de las transiciones. ¿Cuánto tiempo duraba la animación de carga que diseñamos? ¿Cómo era el *feedback* visual cuando un pago era exitoso? Al interactuar con el prototipo, reestablecí el estándar de fluidez que esperábamos para el MVP B2C. Esta fase es crucial porque el QA de Diseño no solo busca errores visuales, sino "fricciones de comportamiento". Si la implementación real se siente más lenta o menos responsiva que el prototipo, es un hallazgo de diseño que debe ser reportado, incluso si los colores y las fuentes son correctos. El prototipo es mi fuente de verdad para el alma del producto: su movimiento.

#### El asalto al entorno de staging: credenciales y permisos

Una vez que mi mente y mis archivos estuvieron alineados, procedí a asegurar el acceso al campo de batalla: el entorno de *staging*. Obtener las credenciales correctas y verificar el acceso a todas las funcionalidades del MVP B2C fue mi siguiente prioridad técnica. No podía permitirme tener "puntos ciegos" en mi revisión.

Me aseguré de que las cuentas de prueba proporcionadas por ingeniería tuvieran los permisos necesarios para recorrer el flujo completo, desde la creación de un perfil de atleta hasta la simulación de una inscripción en una carrera de alta demanda. Validar el acceso en *staging* es un paso crítico de blindaje; si no puedo probar el flujo de pago porque mi usuario de prueba no tiene permisos, estoy dejando una parte vital de la experiencia sin supervisión de diseño. Mi objetivo era garantizar que el entorno de prueba simulara con fidelidad absoluta las condiciones de producción, permitiéndome interactuar con el producto funcional tal como lo hará el usuario final en unas semanas.

#### El laboratorio de dispositivos: donde el diseño se enfrenta a la realidad

La calidad de una plataforma como la de AsDeporte no se puede validar únicamente desde la comodidad de un monitor de 27 pulgadas en una oficina. El deportista usará esta aplicación en la meta de una carrera, con luz solar directa, o en su teléfono mientras se prepara para entrenar. Por eso, configuré lo que llamo mi "laboratorio de dispositivos".

Preparé físicamente una gama de terminales que representaran la realidad de nuestro mercado:
*   **Smartphones iOS y Android:** Para verificar la ergonomía táctil y cómo los elementos de la UI se adaptan a diferentes densidades de píxeles.
*   **Tablets:** Para asegurar que el diseño responsivo no se rompa en resoluciones intermedias.
*   **Desktops con diferentes navegadores:** Para validar la consistencia visual en Chrome, Safari y Firefox.

Ver cómo el diseño "respira" en una pantalla pequeña es una revelación. A veces, un botón que en Figma parecía tener el tamaño perfecto, en un dispositivo real resulta difícil de presionar con el pulgar. Esta configuración me permite detectar problemas de usabilidad física que son invisibles en el software de diseño. La excelencia técnica requiere este nivel de rigor: sacar el diseño del vacío digital y enfrentarlo a las restricciones de hardware del mundo real.

#### La cacería de la build correcta: integridad técnica antes del reporte

Finalmente, antes de empezar a documentar hallazgos, realicé una verificación técnica de las URLs de compilación o *builds*. En un entorno ágil, el código cambia constantemente, y no hay nada que dañe más la credibilidad de un diseñador ante el equipo de ingeniería que reportar errores en una versión obsoleta del producto.

Me coordiné con los desarrolladores para confirmar que estaba trabajando sobre la última rama estable de *staging*. Esta precisión es vital para la eficiencia del equipo. Al asegurar que estoy auditando la versión correcta, garantizo que cada *bug* de diseño que identifique sea legítimo y actual. Este paso cierra mi fase de preparación: ahora tengo el ojo calibrado, las herramientas listas, el entorno accesible y la versión correcta del código frente a mí. La responsabilidad ética que siento en este punto es máxima; el trabajo de decenas de personas está a punto de ser sometido a un juicio de fidelidad, y mi labor es asegurar que el resultado final sea digno de la visión que nos trazamos al inicio de este viaje.

> El QA de Diseño no es un acto de fiscalización, es un compromiso con la excelencia. Es entender que un gran diseño mal implementado es, a ojos del usuario, simplemente un mal diseño. Mi trabajo aquí es cerrar esa brecha.

**Próximo paso:**

#### LA OBSESIÓN POR EL PÍXEL: AUDITORÍA VISUAL DETALLADA

Con el laboratorio de dispositivos encendido y las especificaciones de *handoff* grabadas en la memoria, me dispuse a enfrentar la primera pantalla del flujo de registro. Sabía que la verdadera batalla comenzaría en cuanto activara las herramientas de inspección del navegador para medir el primer contenedor. La pregunta que me perseguía mientras cargaba la URL de *staging* era inevitable: ¿cuántas de nuestras decisiones de diseño habrían sobrevivido intactas a la primera fase de desarrollo? Estaba a punto de descubrir que el diablo, como siempre, se escondía en los detalles del espaciado.

### Parte 2: LA OBSESIÓN POR EL PÍXEL: AUDITORÍA VISUAL DETALLADA

#### EL CONTRATO VISUAL FRENTE AL RENDERIZADO REAL

El momento en que pulsé "refresh" en la URL de *staging* por primera vez, sentí esa tensión familiar que separa la intención de la realidad. Habíamos pasado meses puliendo cada sombra, cada radio de borde y cada jerarquía tipográfica en Figma, pero el navegador es un entorno hostil donde las especificaciones de diseño suelen morir por mil pequeñas concesiones técnicas. Para mí, el diseño no es una sugerencia estética ni una guía de estilo flexible; es un contrato técnico que ingeniería debe cumplir para garantizar que la promesa de marca que le hicimos a AsDeporte se mantenga íntegra. Si el usuario percibe una interfaz "desaliñada", su confianza en la precisión de los datos de su carrera —el corazón de nuestro producto— se erosiona de inmediato.

Mi primer impulso fue cerrar todas las pestañas innecesarias y dejar únicamente dos ventanas abiertas, una al lado de la otra: a la izquierda, el entorno de *staging* del MVP B2C; a la derecha, mis mockups de alta fidelidad y el Dev Mode de Figma. Esta disposición no era casual. Necesitaba que mi ojo detectara las micro-desviaciones por contraste directo. Sabía que la fidelidad del *handoff* estaba a prueba. Al observar el primer renderizado, mi cerebro de diseñador empezó a mapear las inconsistencias antes incluso de tocar el ratón. Había algo en la "densidad" de la pantalla que no encajaba con lo que yo había proyectado. La interfaz se sentía ligeramente "apretada", y supe que la batalla de hoy se libraría en las unidades de medida y en cómo el código estaba interpretando mi sistema de rejilla.

#### EL ESCÁNER HUMANO: COMPARACIÓN DE ALTA FIDELIDAD

Comencé el "Pixel-Perfect Check" con un escaneo sistemático de arriba hacia abajo, tratando la pantalla como un organismo vivo cuyos componentes debían estar en perfecta simbiosis. Mi enfoque fue forense: no buscaba errores obvios —esos ya los habría filtrado el equipo de desarrollo— sino las degradaciones sutiles que ocurren cuando un componente del UI Kit no se instancia correctamente desde la librería global. 

Al comparar los mockups con la implementación, noté de inmediato que el encabezado de la sección de "Próximos Eventos" carecía del aire que yo le había otorgado originalmente. En el diseño, ese espacio en blanco funcionaba como un respiro visual para que el usuario procesara la información de la carrera; en la versión implementada, el texto parecía estar asfixiado por los contenedores adyacentes. Esta primera observación confirmó mi sospecha: la jerarquía visual estaba comprometida. Un componente que no respeta sus márgenes internos rompe la armonía de todo el sistema de diseño, convirtiendo una interfaz profesional en algo que parece un prototipo apresurado. Empecé a tomar notas mentales de estas discrepancias, preparándome para entrar en el código y entender qué regla CSS estaba fallando.

#### LA ARITMÉTICA DEL ESPACIO: AUDITANDO EL BOX-MODEL

Para un diseñador senior, la diferencia entre 16px y 20px no es un capricho; es la base del ritmo vertical. Abrí el Inspector de Elementos y empecé a diseccionar el *box-model* de los contenedores principales. Mi objetivo era verificar si los márgenes, *paddings* y tamaños de los elementos coincidían exactamente con las especificaciones de mi *handoff*. Al inspeccionar el primer contenedor de la tarjeta de evento, descubrí que el desarrollador había utilizado un `padding` genérico de 12px en lugar del `padding-top: 16px` y `padding-bottom: 24px` que yo había definido para dar peso visual al nombre del evento.

Esta inconsistencia en el espaciado no es un error menor. Cuando multiplicas esa pequeña desviación por los 10 o 20 eventos que aparecen en un listado, el resultado es una degradación masiva del ritmo visual. El ojo del atleta, acostumbrado a escanear información rápidamente, se detiene ante estas irregularidades, aumentando su carga cognitiva sin que él mismo sepa por qué. Utilicé herramientas de medición para confirmar que mi sistema de rejilla de 8px se respetara en toda la interfaz. Cada vez que encontraba un `margin: 15px` o un `width: 33%` donde debería haber un `width: 320px`, sentía la necesidad de documentar no solo el error, sino el porqué de su importancia. El espacio en blanco es, en realidad, un elemento de diseño tan activo como el color o la tipografía, y mi labor era blindarlo.

#### TIPOGRAFÍA Y COLOR: LA DEFENSA DE LOS TOKENS

Pasé a auditar las propiedades CSS de las fuentes y los colores. Aquí es donde el diablo se esconde en los detalles de la renderización del navegador. Empecé por la tipografía: verifiqué el `font-family`, pero sobre todo el `font-weight`, el `line-height` y el `letter-spacing`. Descubrí que en varios encabezados se estaba renderizando un `bold` genérico del navegador en lugar del `font-weight: 600` específico de Montserrat que yo había seleccionado. Esa sutil diferencia de peso alteraba por completo la elegancia de la interfaz y la legibilidad de los títulos largos. Si el navegador no respeta el peso exacto de la fuente, la jerarquía de la información se aplana y el diseño pierde su carácter.

En cuanto al color, mi auditoría fue implacable. No acepto colores "aproximados". Utilicé el inspector para validar que cada código HEX/RGB implementado coincidiera exactamente con los tokens de color de mi sistema de diseño. Encontré un gris oscuro en el texto secundario que no era mi `#4A4A4A`, sino un `#333333` que alguien había introducido manualmente. Al romper el token de color, se rompe la escalabilidad del sistema. El uso de colores fuera de la paleta oficial no solo afecta la estética, sino que puede comprometer la accesibilidad si el contraste no es el adecuado. Mi razonamiento fue claro: si permitimos que un solo color se desvíe hoy, en seis meses tendremos una interfaz de retales cromáticos que nadie podrá mantener.

#### ICONOGRAFÍA Y ALINEACIÓN ÓPTICA

La revisión de los *assets* gráficos fue el siguiente paso lógico. Inspeccioné cada icono e imagen para asegurar que se mostraran con la calidad y el tamaño adecuados. Al revisar los iconos de las disciplinas deportivas (natación, ciclismo, carrera), noté que algunos SVGs tenían trazados ligeramente "mordidos" por una mala exportación o una implementación que no respetaba el `viewBox` original. Un icono de 24px que se escala forzadamente a 26px pierde su nitidez y muestra artefactos de rasterización que gritan falta de profesionalismo.

Pero lo más crítico fue la alineación. Como diseñador, sé que la alineación matemática no siempre es la alineación óptica. Revisé meticulosamente los centros de los iconos dentro de los botones y la alineación horizontal de los textos. En el botón de "Inscribirse", el icono de la flecha estaba desplazado 2px hacia arriba respecto a la línea de base del texto. Para un ojo no entrenado, esto pasa desapercibido; para un diseñador, es un ruido constante que hace que la interfaz se sienta "barata". Me aseguré de que los centros ópticos fueran exactos, ajustando mentalmente cada elemento para que la composición se sintiera equilibrada y sólida.

#### EL INSPECTOR COMO BISTURÍ: DOCUMENTANDO LA DISCREPANCIA

Mi proceso dentro de este "quirófano" digital alcanzó su punto máximo al usar las *Developer Tools* del navegador. No me limité a mirar; empecé a desactivar y activar reglas CSS en tiempo real para identificar exactamente dónde se originaba cada error visual. ¿Era un problema de herencia de clases? ¿Había un `box-sizing: border-box` que faltaba en un contenedor global? Este ejercicio de ingeniería inversa me permitió no solo encontrar el "bug de diseño", sino también proponer la solución técnica exacta al equipo de desarrollo.

Este proceso culminó en la creación de mis "Notas iniciales de Discrepancias Visuales". Documenté cada desviación con la frialdad de un perito forense: capturas de pantalla con anotaciones en rojo indicando el error, el comportamiento esperado según el diseño y el comportamiento actual implementado. Mi objetivo no era señalar culpables, sino proporcionar un mapa claro para que ingeniería pudiera corregir el rumbo. Al final de esta auditoría visual, sentí que había recuperado el control sobre la estética del producto. Habíamos pasado de un renderizado aproximado a una versión que empezaba a respirar la sofisticación que habíamos proyectado en las fases previas.

#### REFLEXIÓN SOBRE LA INTEGRIDAD DEL PÍXEL

El QA de diseño es, en última instancia, un acto de respeto hacia el usuario final. Si nosotros, como diseñadores, no somos los guardianes de la integridad de cada píxel, nadie más lo será. Un gran diseño mal implementado es, a ojos del usuario, simplemente un mal diseño. Esta auditoría visual detallada no fue un ejercicio de vanidad estética, sino una inversión en la calidad percibida del producto. Cada ajuste de espaciado, cada corrección tipográfica y cada alineación exacta contribuyen a crear una experiencia que se siente fluida, profesional y confiable.

Al cerrar esta fase de inspección estética, la plataforma ya no era solo una colección de elementos funcionales; empezaba a parecerse al producto premium que AsDeporte necesitaba. Habíamos blindado la capa visual, pero sabía que la verdadera prueba de fuego estaba por venir. Una interfaz puede ser hermosa y estar perfectamente alineada, pero si al interactuar con ella los componentes no responden como se espera, la ilusión de calidad se rompe al instante.

> La perfección visual es el cimiento, pero la experiencia real se construye en el movimiento. Mi trabajo como diseñador no termina en el píxel estático; apenas comienza allí.

**Próximo paso:**

#### LA DINÁMICA DEL PRODUCTO: COMPORTAMIENTO Y RESPUESTA

Con la estética finalmente bajo control, me dispuse a probar la vida interna de la interfaz. Fue al hacer el primer *hover* sobre el botón principal de registro cuando noté que algo no iba bien: la transición de color era abrupta, carecía de la suavidad que habíamos definido en el prototipo interactivo. Esta pequeña fricción en la respuesta del sistema me hizo preguntarme cuántas otras microinteracciones se habrían perdido en la traducción al código. Estaba a punto de descubrir que un producto que se ve bien pero se siente rígido es, quizás, el mayor fracaso de un diseñador de producto.

### Parte 3: LA DINÁMICA DEL PRODUCTO: COMPORTAMIENTO Y RESPUESTA

#### La anatomía de los estados de interacción: señales de vida en el sistema

Una interfaz que no responde es, a ojos del usuario, una interfaz muerta. Tras asegurar que cada píxel estaba en su lugar, mi prioridad cambió radicalmente: necesitaba verificar que el producto "hablara" de vuelta. Me sumergí en el entorno de *Staging* con una mentalidad forense, ignorando la estética para centrarme exclusivamente en la reactividad. Los estados de interacción —*hover*, *active*, *disabled* y *focused*— son las micro-señales que confirman al usuario que el sistema lo está escuchando. Si un botón no cambia de color al pasar el cursor, la duda se instala; si no se hunde ligeramente al hacer clic, la intención se diluye.

Para auditar esto, no me limité a una navegación superficial. Utilicé las herramientas de inspección del navegador para abrir las tripas del CSS y confirmar que las transiciones de color no fueran saltos bruscos, sino cambios fluidos. Verifiqué que las curvas de aceleración y las duraciones en milisegundos coincidieran exactamente con lo que habíamos definido en el UI Kit. Un botón que tarda 500ms en reaccionar se siente pesado; uno que lo hace en 150ms con un `ease-in-out` se siente vivo.

Puse especial atención en el estado *focused*. En muchos desarrollos, el anillo de enfoque se elimina por "estética", lo cual es un error estratégico de accesibilidad que no estaba dispuesto a permitir. Maniobré exclusivamente con el teclado, tabulando a través de cada elemento interactivo para asegurar que el orden fuera lógico y que el indicador de foco fuera claramente visible. Si un usuario no puede navegar con el teclado porque el foco desaparece en un componente complejo, hemos fallado en nuestra promesa de inclusión. Esta revisión no era un capricho visual; era blindar la usabilidad básica del sistema.

#### La verdad en los formularios: donde se gana o se pierde la conversión

Si hay un lugar donde el MVP B2C de AsDeporte se juega el éxito, es en los formularios de registro e inscripción. Un formulario mudo es una trampa de abandono. Mi labor aquí fue actuar como el "usuario difícil": introduje correos electrónicos mal formados, dejé campos obligatorios vacíos y escribí caracteres especiales donde solo debía haber números. Mi objetivo no era que el sistema funcionara, sino observar cómo fallaba.

Descubrí que, en la primera implementación, algunos mensajes de error solo aparecían después de presionar el botón de "Enviar". Esto es una fricción innecesaria. Defendí la necesidad de validaciones en tiempo real para que el usuario reciba feedback inmediato mientras escribe. Si el campo de "Teléfono" requiere diez dígitos, el sistema debe avisar en el momento en que el foco sale del campo, no tres pantallas después. 

Analicé con lupa la claridad de estos mensajes. No basta con que el borde del *input* se ponga rojo; el color por sí solo no comunica el error a usuarios con daltonismo. Verifiqué que cada alerta estuviera acompañada de un icono y un texto descriptivo con el contraste adecuado. La validación de formularios es una conversación: si el sistema es críptico o punitivo, el usuario se frustra y se va. Cada micro-ajuste en la respuesta de estos campos fue una decisión orientada a mantener al atleta dentro del flujo, eliminando cualquier sombra de duda sobre qué información se le estaba pidiendo.

#### Componentes complejos y la respuesta del mapa de livetracking

El verdadero desafío técnico de esta fase fue el mapa de *livetracking*. Es el componente más sofisticado de la plataforma y el que consume más recursos. Mi preocupación era la latencia: un mapa que se congela mientras carga los datos de los corredores destruye la experiencia de los familiares que siguen la carrera. Interactué con el mapa buscando puntos de ruptura, haciendo *zoom* rápido y filtrando categorías de atletas simultáneamente.

Observé que la carga de datos debía ser asíncrona. Si el mapa bloqueaba la interfaz mientras consultaba el servidor, la percepción de calidad se desplomaba. Verifiqué que los pines de los atletas respondieran al clic mostrando la información correcta de forma instantánea, sin saltos visuales ni cierres inesperados del *pop-up*. 

Con los filtros de búsqueda, apliqué el mismo rigor. En un ecosistema con miles de eventos, los selectores de múltiples niveles deben ser ágiles. Probé la lógica de los filtros cruzados: si selecciono "Triatlón" en un estado, el filtro de "Distancia" debe actualizarse para mostrar solo opciones relevantes como "Olímpico" o "Ironman". Si la implementación permitía combinaciones imposibles que resultaban en una pantalla vacía sin explicación, lo documenté como un fallo crítico de lógica de interacción. Estos componentes son el núcleo de la utilidad del producto; si no se sienten robustos, el valor percibido del MVP se diluye.

#### La coreografía de las microinteracciones y el ritmo del producto

El diseño de producto de alto nivel se distingue en los detalles que casi no se ven, pero se sienten. Las microinteracciones son la coreografía que da ritmo a la navegación. Comparé la *build* de *Staging* con el prototipo de alta fidelidad de Figma, buscando discrepancias en el movimiento. Las animaciones no son decorativas; sirven para explicar al cerebro del usuario qué está pasando.

Me enfoqué en los menús desplegables y las transiciones entre estados de página. Si un menú aparece de golpe, se siente mecánico y agresivo. Si se desliza con un *easing* suave, comunica sofisticación y cuidado. Identifiqué varios "glitches" visuales donde los elementos saltaban unos pocos píxeles al cargar, lo que comúnmente llamamos *layout shift*. Aunque parezcan detalles menores, estos saltos rompen la ilusión de un producto sólido.

> El movimiento comunica calidad. Un producto que se mueve con fluidez genera una respuesta emocional de confianza. Mi trabajo fue asegurar que esa "personalidad" del producto AsDeporte se mantuviera intacta desde el primer clic hasta el último.

#### Visibilidad del estado del sistema: el fin de la incertidumbre

La primera regla de usabilidad de Nielsen es la visibilidad del estado del sistema, y en un entorno web, esto se traduce en no dejar nunca al usuario esperando frente a una pantalla estática. Durante mis pruebas en *Staging*, provoqué situaciones de baja conectividad para ver cómo reaccionaba la plataforma. 

Verifiqué la implementación de *spinners* y, sobre todo, de *skeleton screens*. Preferí los *skeletons* porque mantienen la estructura visual de la página mientras los datos cargan, reduciendo la ansiedad del usuario. Si un proceso tardaba más de un segundo, el sistema tenía que mostrar una señal clara de progreso. 

Finalmente, validé los mensajes de éxito. Cuando un atleta completa una inscripción, necesita una confirmación visual inequívoca. Comprobé que estos mensajes permanecieran en pantalla el tiempo suficiente para ser leídos —calculando la velocidad media de lectura— pero que no obstruyeran la siguiente acción lógica. El feedback del sistema es el cierre de cada ciclo de interacción; sin él, el usuario nunca está seguro de si su acción tuvo efecto. Al terminar esta revisión de comportamiento, sentí que la plataforma había dejado de ser un cascarón visual para convertirse en un organismo funcional y coherente.

**Próximo paso:**

#### LA PRUEBA DE FUEGO: FLUJOS CRÍTICOS Y RESILIENCIA

Habiendo validado que cada componente individual respondía con la agilidad y precisión esperadas, me enfrenté a una pregunta mucho más inquietante: ¿qué sucede cuando unimos todas estas piezas en un recorrido real de punta a punta? Una cosa es que un botón funcione de forma aislada y otra muy distinta es que el flujo de inscripción soporte la presión de un usuario real navegando a través de múltiples estados de pago y validaciones externas. Estaba a punto de iniciar las pruebas de los flujos críticos, donde la teoría del diseño se encuentra con la cruda realidad de la lógica de negocio y los casos de borde que podrían quebrar la experiencia en el momento más inoportuno.

### Parte 4: LA PRUEBA DE FUEGO: FLUJOS CRÍTICOS Y RESILIENCIA

#### DEL PÍXEL AISLADO AL HILO CONDUCTOR: LA INTEGRIDAD DEL FLUJO

Entrar en el entorno de **Staging** es el momento en que la teoría del diseño se estrella contra la física del software. Después de pasar horas validando que cada botón tuviera el radio de curvatura exacto y que los *hovers* respondieran con la elasticidad que definí en el UI Kit, me enfrenté a una realidad mucho más cruda: un producto no es una suma de componentes, es una secuencia de promesas. Si un atleta intenta inscribirse a la Spartan Race y el sistema se queda "pensando" indefinidamente tras procesar el pago, de nada sirve que la tipografía sea legible o que el color de marca sea vibrante. En ese punto, el diseño ha fallado.

Mi mentalidad en esta fase cambió radicalmente. Dejé de ser el creador para convertirme en el auditor más implacable de mi propia obra. Utilicé el archivo **01_qa_de_diseno.pdf** como mi mapa de navegación y guía maestra, no para seguir una lista de tareas administrativa, sino para estructurar un asedio sistemático a la estabilidad de la plataforma. La pregunta ya no era "¿se ve bien?", sino "¿se rompe bajo presión?". Entendí que mi responsabilidad como diseñador no terminaba en el handoff; el **QA de Diseño** es la última línea de defensa donde nos aseguramos de que la visión estratégica no se diluya en la implementación técnica o en las limitaciones de la **API Response Latency**.

#### LA NAVEGACIÓN REAL: CUANDO EL DIAGRAMA COBRA VIDA

Inicié el recorrido integral de los flujos críticos utilizando credenciales de prueba en el entorno de staging, simulando el comportamiento de un atleta B2C real. Tenía en mi segundo monitor los **Diagramas de Flujos de Usuario finales** que habíamos validado meses atrás. Mi objetivo era verificar que ese "hilo conductor" —la lógica que guía al usuario desde la curiosidad hasta la conversión— se mantuviera intacto.

Al ejecutar el flujo de búsqueda de eventos, inscripción y gestión de perfil, puse especial atención a la fluidez y la lógica de la transición entre pantallas. No buscaba errores visuales todavía; buscaba **fricción cognitiva**. 

*   **Búsqueda y Filtrado:** Verifiqué que los filtros no solo se vieran como en el prototipo, sino que la respuesta del sistema al aplicar un criterio de "Distancia" o "Fecha" fuera inmediata y lógica. Si el usuario filtraba y la pantalla parpadeaba agresivamente o perdía el foco del scroll, lo anotaba como una ruptura de la fluidez.
*   **Inscripción Multi-paso:** Este es el corazón del MVP. Recorrí cada paso —datos personales, selección de categoría, exoneraciones y extras— asegurándome de que la progresión se sintiera natural. 
*   **Gestión de Perfil:** Validé que los cambios realizados en el perfil se reflejaran instantáneamente en la cabecera de la plataforma. La coherencia de la información es lo que construye la confianza del usuario en el sistema.

> **El criterio senior:** En Staging, el tiempo no es lineal como en un prototipo de Figma. La latencia del servidor puede destruir una experiencia de usuario bien diseñada. Si el sistema tarda 3 segundos en cargar la lista de eventos, el diseño debe ofrecer una respuesta visual que mitigue la ansiedad, no solo un espacio en blanco.

#### EL MOMENTO DE LA VERDAD: LA BIFURCACIÓN DEL PAGO

Si hay un lugar donde el diseño se juega la reputación de la marca, es en la pasarela de pagos. Es el momento de mayor vulnerabilidad para el atleta. Siguiendo las directrices del paso 5 de mi guía maestra, realicé un proceso forense para probar las bifurcaciones críticas de este flujo: **Pago Exitoso vs. Pago Fallido**.

Forcé deliberadamente el error. Utilicé números de tarjeta de prueba destinados a fallar para observar cómo el sistema manejaba la frustración. Lo que buscaba era un manejo elegante del caos:
1.  **Feedback Inmediato:** ¿El mensaje de error aparece cerca del campo que causó el problema o es un modal genérico que obliga al usuario a adivinar qué pasó?
2.  **Claridad en el Toast:** Verifiqué que los mensajes de error no fueran códigos técnicos incomprensibles ("Error 402"), sino lenguaje humano que explicara el problema y ofreciera una salida clara.
3.  **Confirmación de Éxito:** En el escenario positivo, validé que el modal de confirmación no solo fuera una palomita verde, sino que proporcionara el refuerzo positivo necesario y los pasos a seguir (revisar correo, ver comprobante). 

La lógica de negocio aquí es implacable: cualquier ambigüedad en el diseño durante el pago se traduce en una pérdida directa de ingresos para AsDeporte y en un ticket de soporte para el equipo de atención al cliente.

#### RESILIENCIA Y CASOS DE BORDE: DISEÑAR PARA EL CAOS

Un producto de alta calidad no se define por cómo luce en condiciones ideales, sino por cómo sobrevive a lo inesperado. Utilizando las herramientas de desarrollador (DevTools), simulé escenarios de **Edge Cases** que a menudo se ignoran en las fases de diseño visual pero que son vitales en la implementación.

*   **Simulación de Offline:** Puse el navegador en modo "No connection" en medio de un proceso de inscripción. Quería ver si la interfaz se bloqueaba o si mostraba un estado de error que permitiera al usuario saber que su progreso no se había perdido, sino que estaba pausado por la red.
*   **Datos Inusuales y "Stress Testing" de Formularios:** Introduje nombres extremadamente largos, caracteres especiales y fechas de nacimiento imposibles. Verifiqué si los contenedores de texto se rompían o si el diseño era lo suficientemente elástico para contener la realidad de los datos de los usuarios.
*   **Latencia de API:** Observé el comportamiento de los *spinners* y estados de carga. Un diseño resiliente debe "engañar" al tiempo, mostrando esqueletos de carga (*skeleton screens*) que den la sensación de que el contenido ya está llegando, reduciendo la percepción de espera.

#### LA ELEGANCIA EN LA AUSENCIA: AUDITORÍA DE ESTADOS VACÍOS

A menudo, los diseñadores nos obsesionamos con las pantallas llenas de datos, pero los **Empty States** son momentos críticos de la experiencia, especialmente para un usuario nuevo. Navegué por secciones donde aún no había actividad: un perfil sin eventos inscritos, una búsqueda que no arrojaba resultados, una bandeja de notificaciones vacía.

Verifiqué que la implementación no hubiera dejado "callejones sin salida" visuales. Un estado vacío no debe ser una pantalla muerta; debe ser una invitación a la acción. Comprobé que cada uno de estos escenarios incluyera:
*   Una ilustración o icono que suavizara la sensación de vacío.
*   Un texto explicativo claro.
*   Un **CTA (Call to Action)** que guiara al usuario hacia su siguiente paso lógico (ej. "Explorar eventos" o "Completar perfil").

Si encontraba una pantalla blanca con un simple "No hay datos", lo marcaba como un fallo de diseño de experiencia. El diseño debe acompañar al usuario incluso cuando no hay nada que mostrar.

#### LA PERSISTENCIA COMO PILAR DE LA USABILIDAD

Finalmente, realicé la prueba de fuego de la navegación: la **Data Persistence**. En flujos complejos de varios pasos, nada es más frustrante para un usuario que retroceder para corregir un dato y encontrar que todos los campos posteriores se han borrado.

Probé la navegación de "ida y vuelta" obsesivamente. Introduje datos en el paso 3, volví al paso 1, regresé al 3 y verifiqué que la información persistiera en el estado de la aplicación. También analicé qué ocurría al refrescar la página o cambiar de pestaña. La persistencia de datos no es solo una tarea técnica; es un pilar de la usabilidad que demuestra respeto por el tiempo y el esfuerzo del usuario. Si el sistema obligaba a reescribir, el flujo se consideraba "roto" desde mi perspectiva de diseño.

> **Reflexión de cierre:** Al terminar esta jornada de pruebas, me di cuenta de que el QA de diseño es un acto de humildad. Es aceptar que tu diseño es una hipótesis hasta que sobrevive al entorno de staging. Mi rol aquí no fue solo buscar errores visuales, sino asegurar que la promesa de valor que diseñamos en la fase de estrategia se mantuviera intacta bajo la presión del código real.

**Próximo paso:**

#### INCLUSIÓN Y ESTÁNDARES: EL QA DE ACCESIBILIDAD

Tras asegurar que los flujos eran resilientes y lógicos para el usuario promedio, me asaltó una preocupación que no podía ignorar: ¿qué pasa con aquellos que no navegan de la forma "estándar"? Un flujo puede ser técnicamente perfecto y aun así ser una barrera infranqueable para alguien que depende de un lector de pantalla o que tiene una discapacidad motriz temporal. Estaba a punto de entrar en la fase más ética y técnica del proceso, donde la belleza de la interfaz se somete a la prueba de la verdadera inclusión y los estándares de accesibilidad que definen a un producto de clase mundial.

### Parte 5: INCLUSIÓN Y ESTÁNDARES: EL QA DE ACCESIBILIDAD

#### La responsabilidad ética de la universalidad

Una vez que comprobé que los flujos críticos del MVP B2C eran resilientes y que la lógica de negocio se mantenía en pie incluso bajo condiciones de error, me detuve. Tenía ante mí una plataforma que funcionaba para el "usuario ideal", ese atleta joven con visión perfecta y destreza motriz plena que navega en una oficina con luz controlada. Pero AsDeporte no es para un nicho; es una comunidad masiva. Como responsable de la experiencia, sentí la presión de una pregunta incómoda: ¿qué sucede cuando un corredor de 60 años intenta leer los resultados bajo el sol del mediodía, o cuando un usuario con una lesión temporal en la mano intenta inscribirse usando solo el teclado?

Entendí que un producto que no es accesible es, por definición, un producto incompleto y, en cierto modo, un fracaso de diseño. No podíamos lanzar este MVP B2C al mercado presumiendo de innovación si dejábamos fuera a una parte de nuestra base de usuarios. Siguiendo el protocolo de verificación de accesibilidad de `01_qa_de_diseno.pdf`, decidí elevar el estándar. Mi objetivo no era solo "cumplir" con una lista de verificación, sino someter la interfaz a los estándares internacionales **WCAG 2.1** para transformar lo que ingeniería había construido en un producto de clase mundial, inclusivo y ético. Esta fase de QA no fue un trámite; fue una auditoría forense de la empatía plasmada en código.

#### El barrido cromático: Más allá del hex code

Inicié la auditoría con un barrido técnico sobre cada componente visual, enfocándome en la legibilidad cromática. No se trataba de si los colores de la marca AsDeporte se veían "bien" en staging, sino de si tenían el contraste suficiente para ser funcionales. Utilicé herramientas de verificación de contraste directamente sobre el entorno de pruebas para medir los ratios entre el texto y el fondo en cada estado de interacción.

Me detuve especialmente en los mensajes de alerta y en los estados de los botones de "Inscripción". Descubrí que algunos textos en gris claro sobre fondo blanco, aunque estéticamente elegantes en el Figma original, no alcanzaban el ratio de contraste de 4.5:1 exigido por el nivel AA de las WCAG. Este hallazgo fue crítico: en un entorno de alta luminosidad solar —común para un atleta que consulta la app durante un evento—, esos textos simplemente desaparecerían. También verifiqué el **tamaño mínimo de texto** en las "letras chiquitas" de los términos y condiciones del seguro de corredor; aseguré que nada bajara de los 12px reales en pantalla para evitar la fatiga visual. Mi razonamiento fue simple: si el usuario no puede leer las restricciones de su inscripción de forma clara, el diseño le está fallando.

#### Navegación ciega: El teclado como única brújula

Para la siguiente fase de la auditoría, tomé una decisión drástica: aparté el mouse y el trackpad. Siguiendo la instrucción de "navegación solo con teclado" de mi plan de QA, me dispuse a recorrer todo el flujo de registro e inscripción usando únicamente la tecla **Tab** y la barra espaciadora. Esta es la prueba de fuego para cualquier implementación de front-end, ya que revela si la estructura del código respeta el orden visual que diseñamos.

Navegué por la interfaz buscando un orden de tabulación lógico y predecible. Fue una experiencia reveladora. En el formulario de datos personales, verifiqué que el cursor saltara de campo en campo siguiendo el flujo de lectura natural, sin saltos erráticos que pudieran confundir a alguien que depende de un periférico asistencial. Lo más importante fue la inspección del **foco de tabulación**: me aseguré de que cada elemento interactivo (botones, enlaces, inputs) mostrara un anillo de enfoque claramente visible. Un elemento que recibe el foco pero no lo indica visualmente es un "callejón sin salida" técnico para un usuario con discapacidad motriz. Si yo perdía el rastro de dónde estaba mi cursor virtual, el usuario también lo perdería. Esta revisión garantizó que ningún componente quedara aislado o fuera inaccesible para quienes no usan un puntero tradicional.

#### Artillería técnica: Auditoría automatizada y estructural

Tras la revisión manual, desplegué la artillería pesada utilizando extensiones de navegador recomendadas en `01_qa_de_diseno.pdf`, como **Lighthouse, WAVE tool y axe DevTools**. Estas herramientas me permitieron ver lo que el ojo humano ignora: la salud estructural del DOM (Document Object Model). Ejecuté auditorías automatizadas en las pantallas de "Resultados" y "Perfil de Usuario", buscando errores que a menudo pasan desapercibidos en las revisiones visuales.

> **Insight de Auditoría:** Las herramientas automatizadas son implacables. Me permitieron detectar IDs duplicados en el código de los listados de eventos, un error técnico que confunde a los lectores de pantalla al intentar identificar elementos únicos. También identifiqué elementos interactivos que, aunque visualmente correctos, tenían un área de clic (touch target) inferior a los 44x44 píxeles recomendados.

Interpretar estos resultados requirió un criterio senior: no todos los errores señalados por una herramienta automática son críticos, pero los estructurales sí lo son. Me enfoqué en limpiar la "basura" del código que impedía que la tecnología asistida interpretara correctamente la interfaz. Esta métrica objetiva de salud me dio la confianza necesaria para saber que la base técnica del MVP era sólida antes de pasar a los detalles más finos de la narrativa asistida.

#### Narrativa auditiva: Semántica y el lenguaje del DOM

La accesibilidad no es solo visual; es auditiva. Basándome en la instrucción de detectar la "falta de texto alternativo" de mi protocolo, realicé una inspección profunda de los assets gráficos. No me limité a verificar que las imágenes tuvieran un atributo `alt`; evalué si ese texto era **significativo**. En el flujo de "Live Tracking", por ejemplo, verifiqué que los iconos de los corredores en el mapa comunicaran su estado (ej. "Corredor 123 en kilómetro 5") y no solo una descripción genérica como "icono de corredor".

En paralelo, audité la columna vertebral semántica de la plataforma. Comprobé que la jerarquía de **Headings (H1, H2, H3)** fuera coherente. Un usuario que utiliza un lector de pantalla suele "escanear" la página saltando entre títulos; si la jerarquía es caótica, la arquitectura de la información se desmorona. Asimismo, puse especial atención a las **especificaciones ARIA** en componentes complejos como los selectores de fechas y los modales de confirmación de pago. Verifiqué que el código comunicara correctamente el estado del componente: si un modal estaba abierto, el sistema debía informar al lector de pantalla para "atrapar" el foco dentro de él y no permitir que el usuario siguiera navegando por el fondo de la página. Esta decisión técnica blindó la experiencia para los usuarios invidentes, asegurando que la narrativa visual se tradujera con fidelidad a una narrativa sonora.

#### El test de estrés visual: Elasticidad al 200%

Finalmente, sometí a estrés la flexibilidad del layout implementado. Como parte de la revisión de escalabilidad exigida en el punto 3 de `01_qa_de_diseno.pdf`, aumenté el zoom del navegador al 200%. Un diseño pixel-perfect que se rompe al ampliar la fuente no es un diseño profesional. Observé cómo los contenedores de las tarjetas de eventos reaccionaban al crecimiento del texto: ¿se solapaban los precios con las fechas?, ¿desaparecía el botón de "Inscribirme" fuera de la pantalla?

Esta prueba de elasticidad confirmó que la implementación de ingeniería respetaba las unidades relativas que habíamos definido. El texto escaló sin romper la armonía visual ni ocultar información crítica. Esta capacidad de adaptación es vital para usuarios con baja visión que necesitan configuraciones personalizadas en sus dispositivos. Al terminar esta jornada, sentí que mi rol como "último guardián de la calidad" había cobrado su máximo sentido. No solo estábamos entregando una interfaz bonita; estábamos entregando una herramienta que respetaba la diversidad de su audiencia. Al identificar y documentar estos puntos de fricción, protegí no solo la integridad del producto, sino también la promesa de marca de AsDeporte de ser el motor que libera la grandeza de *todos* los deportistas.

> **Reflexión de cierre:** El QA de accesibilidad es el momento en que el diseño deja de ser un ejercicio estético para convertirse en un servicio público. Cada atributo ARIA corregido y cada ratio de contraste ajustado es una barrera menos entre el usuario y su meta.

**Próximo paso:**

#### GESTIÓN DE LA CALIDAD: DOCUMENTACIÓN Y SINERGIA

Con la auditoría de accesibilidad concluida y una lista exhaustiva de discrepancias visuales, lógicas y estructurales en mi cuaderno de notas, llegué al momento de la verdad: la traducción de hallazgos en acciones. Tenía en mis manos decenas de "bugs de diseño" que, si no se comunicaban con precisión quirúrgica, podrían convertirse en puntos de fricción con el equipo de ingeniería. Estaba a punto de entrar en la fase de documentación en Jira, donde mi capacidad para articular el "qué", el "cómo" y el "por qué" definiría si estas correcciones entrarían en el sprint final o si se quedarían en el tintero de la deuda técnica. La tensión era clara: ¿cómo priorizar lo estético frente a lo funcional sin perder la esencia de la experiencia que validamos?

### Parte 6: GESTIÓN DE LA CALIDAD: DOCUMENTACIÓN Y SINERGIA

#### El rigor de la traducción: De la observación al ticket accionable

Al cerrar la auditoría de accesibilidad, me encontré con un volumen de información que, mal gestionado, podía hundir el sprint final bajo el peso de la ambigüedad. Tenía un cuaderno de notas saturado, decenas de capturas de pantalla con anotaciones rápidas y una lista de discrepancias que oscilaban entre lo crítico y lo cosmético. En ese momento, mi enfoque cambió radicalmente: dejé de ser el auditor para convertirme en un gestor de incidencias técnicas. Sabía que un hallazgo de diseño que no se traduce en una tarea técnica precisa es, a efectos prácticos, un hallazgo que no existe. Mi responsabilidad era blindar la calidad del MVP B2C asegurando que cada error detectado fuera imposible de ignorar o malinterpretar por el equipo de ingeniería.

La transición de la auditoría a la acción fue un ejercicio de sistematización pura. No se trataba solo de reportar "que algo se veía mal", sino de diagnosticar por qué estaba ocurriendo y cómo debía solucionarse según las especificaciones que ya habíamos validado. Esta etapa es el último filtro de veracidad; es donde el diseño se encuentra con la realidad del código en el entorno de staging y donde mi credibilidad ante los desarrolladores se ponía a prueba. Si enviaba reportes vagos, perdería su confianza; si era quirúrgico, elevaría el estándar de todo el producto.

#### El filtro de criticidad y la consolidación de hallazgos

Antes de abrir Jira, dediqué una sesión intensiva a la consolidación de todas las notas acumuladas en los pasos anteriores. Tenía frente a mí cuatro categorías de problemas: discrepancias visuales (pixel-perfect), fallos de interacción, rupturas en los flujos lógicos y barreras de accesibilidad. Mi primer movimiento fue realizar una triangulación de datos: comparé cada nota con mis propios entregables finales —el UI Kit, los mockups de alta fidelidad y las especificaciones de handoff en Figma—. Necesitaba estar absolutamente seguro de que lo que estaba reportando era una desviación real de la especificación y no un cambio de opinión de último minuto o una interpretación subjetiva.

Durante este proceso de filtrado, apliqué un criterio de priorización basado en el impacto en el usuario y el esfuerzo de implementación. Clasifiqué los hallazgos en tres niveles:
1.  **Bloqueadores de experiencia:** Errores en flujos críticos (como el proceso de inscripción) o fallos graves de accesibilidad que impedían el uso de la plataforma.
2.  **Inconsistencias de interfaz:** Desviaciones en el uso de componentes del sistema de diseño, tipografías incorrectas o colores fuera de paleta que degradaban la confianza en la marca.
3.  **Ajustes de pulido:** Microinteracciones que no se sentían fluidas o desajustes menores de espaciado que, aunque no rompían el producto, afectaban la percepción de calidad.

Este ejercicio de curaduría me permitió presentar al equipo de desarrollo una lista estructurada y jerarquizada, evitando el ruido de reportar minucias antes de resolver lo estructural. La disciplina en este paso es lo que diferencia a un diseñador senior de uno que simplemente "pide cambios".

#### Anatomía forense de un bug de diseño

Con la lista depurada, procedí a la creación de los tickets en nuestra herramienta de gestión de proyectos. Para cada "bug de diseño", seguí una estructura técnica rigurosa que eliminara cualquier necesidad de ida y vuelta innecesaria. Mi objetivo era que un desarrollador pudiera leer el ticket y saber exactamente qué corregir sin tener que preguntarme nada. Cada reporte incluía cuatro pilares fundamentales:

*   **Descripción Concisa y Técnica:** En lugar de "el botón se ve raro", utilizaba términos como "Inconsistencia de padding en componente Button/Primary en estado Hover".
*   **Pasos para Reproducir:** Detallaba la ruta exacta en el entorno de staging. Por ejemplo: "1. Acceder a la sección de Eventos; 2. Seleccionar filtro por disciplina; 3. Observar el parpadeo en el despliegue del menú".
*   **Comportamiento Actual vs. Comportamiento Esperado:** Esta es la sección donde citaba la especificación. Describía lo que ocurría en la build actual y lo contrastaba con lo definido en el archivo de diseño, incluyendo enlaces directos a la pantalla específica en Figma o al componente del UI Kit.
*   **Información del Entorno:** Especificaba el navegador, el dispositivo y la resolución donde se detectó el error, algo vital para los problemas de diseño responsive que habíamos identificado.

> **Insight de Gestión:** La documentación técnica no es burocracia; es el lenguaje común que permite que el diseño sobreviva a la fase de construcción. Un ticket bien redactado reduce la deuda técnica antes incluso de que se genere.

#### Evidencia visual y el uso de herramientas de inspección

Para que los reportes fueran irrefutables, utilicé un arsenal de herramientas de captura y diagnóstico. No me limité a tomar capturas de pantalla simples; realicé grabaciones de video con Loom para documentar microinteracciones fallidas o flujos que se rompían al intentar casos de borde. Ver el error en movimiento es, a menudo, la única forma de que un desarrollador comprenda una fricción de interacción sutil.

Además, utilicé las **Developer Tools** del navegador para realizar inspecciones directas sobre el código CSS en staging. Si encontraba un error de espaciado, no solo decía "hay mucho margen", sino que identificaba la propiedad CSS que estaba causando el conflicto —por ejemplo, un `margin-bottom` heredado que no debería estar ahí— y sugería el valor correcto basado en nuestro sistema de espaciado. En las capturas de pantalla, realicé anotaciones quirúrgicas, señalando con líneas de guía las desalineaciones y comparándolas lado a lado con el diseño original. Esta evidencia visual eliminó la ambigüedad y permitió que el equipo de ingeniería visualizara el problema de inmediato, acelerando drásticamente los tiempos de corrección.

#### Sinergia estratégica con el equipo de QA y Desarrollo

Una vez documentadas las incidencias, mi labor no terminó en el envío del ticket. Inicié una fase de colaboración estrecha con el equipo de **Quality Assurance** tradicional. Ellos son expertos en encontrar errores funcionales (el "qué no funciona"), pero mi rol era aportar la capa de experiencia (el "cómo se siente"). Compartí con ellos mi visión sobre los puntos críticos de interacción para que pudieran alinear sus casos de prueba con mis criterios de usabilidad. Por ejemplo, les pedí especial atención en la validación de formularios en tiempo real, un área donde el diseño de interacción era especialmente sensible.

Mantuve reuniones de sincronización con los desarrolladores para discutir la criticidad de los hallazgos. En estas conversaciones, actué como el defensor de la integridad del producto. Cuando surgía la tensión clásica de "esto es solo un detalle visual", yo argumentaba desde la estrategia de negocio y la confianza del usuario: una inconsistencia en el flujo de pago no es un detalle estético, es un riesgo de conversión. Esta diplomacia técnica, basada en datos y especificaciones claras, permitió que el equipo viera el QA de diseño no como una fiscalización, sino como un apoyo para entregar un producto del que todos pudiéramos sentirnos orgullosos. Esta sinergia redujo la fricción natural entre departamentos y nos permitió enfocar los esfuerzos en lo que realmente movería la aguja para AsDeporte.

#### La importancia de la diplomacia técnica y la madurez del producto

Reflexionando sobre este proceso, reconfirmé que la gestión de la calidad es, en última instancia, una inversión en la madurez del producto. Documentar con este nivel de detalle no solo sirve para el lanzamiento inmediato del MVP B2C, sino que sienta las bases de una cultura de excelencia técnica. Al señalar y corregir discrepancias en el uso de componentes del UI Kit, estábamos protegiendo la escalabilidad futura de la plataforma.

Este ejercicio de QA de diseño me permitió actuar como el puente final entre la visión estratégica y la ejecución técnica. Al final de esta fase de documentación, el equipo de ingeniería tenía una hoja de ruta clara, sin sombras de duda, y yo tenía la tranquilidad de que cada decisión de diseño que tomamos durante meses estaba siendo defendida en la trinchera del código. La tensión del cierre de fase seguía ahí, pero ahora estaba canalizada en tareas accionables y medibles.

**Próximo paso:**

#### EL CIERRE DEL CICLO: VERIFICACIÓN Y APROBACIÓN FINAL

Con los tickets de diseño ya integrados en el flujo de trabajo de ingeniería y las conversaciones de alineación concluidas, el tablero de gestión empezó a moverse. Sin embargo, la verdadera prueba de fuego estaba por llegar: el momento de volver al entorno de staging para verificar, una por una, cada corrección implementada. Me enfrentaba a la incertidumbre de si los parches aplicados habrían introducido nuevos errores colaterales o si, finalmente, la visión pixel-perfect se mantendría firme bajo la presión del despliegue inminente. Estaba a un paso de dar el visto bueno final, pero sabía que en este oficio, el "listo" solo es real cuando el último bug documentado desaparece de la pantalla.

### Parte 7: EL CIERRE DEL CICLO: VERIFICACIÓN Y APROBACIÓN FINAL

#### LA ÚLTIMA LÍNEA DE DEFENSA EN STAGING

La notificación del equipo de ingeniería llegó a mi bandeja de entrada con un mensaje escueto: "Tickets de diseño corregidos en el último despliegue de staging". En este punto del proyecto, esa frase es el detonante de una de las fases más críticas y solitarias de mi oficio. No se trata de una revisión superficial; es el momento en el que debo decidir si el producto que estamos a punto de entregar al mercado es digno de la marca AsDeporte o si todavía arrastra cicatrices de una implementación apresurada.

Volví a entrar en el entorno de **Staging** con una mentalidad forense. Mi razonamiento en este cierre de ciclo es innegociable: la gestión de incidencias en un tablero de Jira o Asana es pura burocracia si no se traduce en una interfaz impecable que el usuario pueda sentir. Tenía ante mí la versión casi definitiva del MVP B2C y mi objetivo era alcanzar la paridad absoluta entre los mockups que validamos meses atrás y el código funcional que ahora corría en mi navegador. La tensión era palpable; estábamos a días del lanzamiento y cada bug que yo decidiera mantener abierto representaba un retraso potencial, pero cada error que dejara pasar representaba una grieta en la experiencia del atleta.

#### EL RIGOR DEL RE-TESTING: MÁS ALLÁ DE LA SUPERFICIE

Inicié la **Verificación de la Corrección de Bugs de Diseño** siguiendo un orden lógico de inspección. No me limité a navegar al azar; abrí mi instancia de Figma en el **Dev Mode** en un monitor y la build de staging en el otro. Mi primer movimiento fue contrastar los tickets que los desarrolladores habían marcado como "corregidos". Para un diseñador senior, "corregido" es una hipótesis que debe ser probada.

Me sumergí en un **Pixel-Perfect Check** exhaustivo. Utilicé las herramientas de inspección del navegador para escudriñar el CSS de los componentes que habían fallado en la ronda anterior. No buscaba solo que el color fuera el correcto, sino que las medidas y el espaciado respetaran la cuadrícula de 8 píxeles que definimos en el UI Kit. 

*   **Medidas y Espaciado:** Verifiqué que los paddings de los botones de inscripción no hubieran vuelto a los valores por defecto del framework. Si la especificación dictaba 24px de espaciado lateral, me aseguré de que el inspector de código no mostrara ni un píxel más ni uno menos.
*   **Jerarquía Tipográfica:** Este es un punto donde la implementación suele flaquear. Revisé meticulosamente que el **letter-spacing** y la **line-height** de los titulares Montserrat no se hubieran alterado durante el despliegue de los parches. Una altura de línea incorrecta puede destruir la legibilidad en dispositivos móviles, y en una plataforma de eventos deportivos, la claridad de la información es vital.
*   **Assets Gráficos:** Comprobé que los iconos exportados mantuvieran su naturaleza vectorial y que las imágenes de los eventos no presentaran artefactos de compresión que degradaran la percepción de calidad.

> **Trade-off de diseño:** En algunos casos, tuve que aceptar que ciertos micro-ajustes de espaciado en navegadores legacy no eran idénticos al diseño original debido a la forma en que el motor de renderizado gestiona las fuentes. Prioricé la consistencia visual en los navegadores modernos (Chrome, Safari), que concentran el 90% de nuestro tráfico, para no retrasar el despliegue por detalles técnicos de bajo impacto real.

#### LA CAZA DE REGRESIONES Y EL CONTROL DE DAÑOS

Uno de los mayores riesgos en esta fase final es la regresión: que la solución de un bug visual haya roto algo que ya funcionaba en otra parte de la interfaz. Para blindar la consistencia, realicé una navegación transversal por todas las pantallas del MVP.

Me enfoqué en los **estados de interacción**. Verifiqué que los botones ahora respondieran correctamente a los estados de *hover*, *activo* y, fundamentalmente, *deshabilitado*. En el flujo de pago, por ejemplo, era crítico que el botón de "Confirmar Inscripción" se bloqueara visualmente mientras la transacción estaba en proceso para evitar clics duplicados. Validé que el feedback del sistema —esos mensajes de carga y éxito que diseñamos para reducir la ansiedad del usuario— apareciera en el momento preciso y con la iconografía correcta del sistema de diseño.

También puse especial atención en la alineación. En componentes complejos como el *livetracking* o los selectores de categorías, verifiqué que la disposición de los elementos fuera consistente tanto vertical como horizontalmente. No hay nada que comunique más descuido técnico que un icono desalineado por dos píxeles respecto a su texto de acompañamiento. Cada discrepancia encontrada fue documentada de nuevo, pero esta vez con una comunicación mucho más directa con el equipo de ingeniería, resolviendo dudas en tiempo real para evitar ciclos infinitos de reportes.

#### ACCESIBILIDAD: VALIDANDO LA INCLUSIÓN EN EL CÓDIGO

La validación de la accesibilidad no fue una tarea opcional, sino el cumplimiento de un compromiso ético y técnico que establecimos desde el inicio. Utilicé **Lighthouse** y **axe DevTools** para realizar un escaneo final de la estructura semántica de las páginas principales.

*   **Navegación por Teclado:** Dejé de lado el ratón y recorrí el flujo de inscripción completo usando solo la tecla 'Tab'. Verifiqué que el orden de tabulación fuera lógico y que el indicador de foco (*focus ring*) fuera claramente visible en cada elemento interactivo. Un usuario que no puede usar un puntero debe poder inscribirse a una carrera con la misma fluidez que cualquier otro.
*   **Estructura y Contraste:** Confirmé que las imágenes críticas tuvieran sus atributos de texto alternativo correctamente implementados y que el contraste de color entre el texto y el fondo cumpliera con los estándares WCAG que documentamos. 
*   **Especificaciones ARIA:** En los componentes más dinámicos, como los modales de términos y condiciones, verifiqué que las etiquetas ARIA estuvieran presentes para que los lectores de pantalla pudieran interpretar correctamente el estado del componente (abierto/cerrado).

Esta verificación me permitió confirmar que el producto no solo era visualmente atractivo, sino técnicamente robusto para una audiencia diversa.

#### EL CIERRE ADMINISTRATIVO Y EL VISTO BUENO TÉCNICO

Con las pruebas concluidas y las últimas correcciones verificadas en la build de staging, procedí al acto administrativo de cerrar los tickets en nuestra herramienta de gestión de proyectos. Marcar una incidencia como "Verificada" en Jira no es un trámite menor; es la firma del diseñador que avala que esa parte de la experiencia está lista para el mundo real.

Transformé las "Notas iniciales de Discrepancias" en un historial de soluciones tangibles. Al final del día, el tablero mostraba una columna de "Done" que reflejaba un producto que ahora sí respondía fielmente al **Prototipo Interactivo Final**. Habíamos eliminado la deuda técnica visual y reducido la fricción en los flujos críticos de búsqueda, inscripción y gestión de perfil.

Como diseñador, asumo el rol de ser el último guardián de la calidad. Al cerrar esta actividad, no solo estoy entregando una serie de pantallas; estoy entregando la garantía de que la visión estratégica de AsDeporte se ha mantenido intacta a través del complejo proceso de desarrollo. Siento la confianza técnica de que el MVP B2C está blindado. La tensión del inicio se ha transformado en la satisfacción de saber que el usuario final no se encontrará con una interfaz rota, sino con una herramienta fluida que le permitirá concentrarse en lo que realmente importa: su grandeza deportiva.

**Reflexión final:**
Este proceso de QA me recordó que el diseño no termina en Figma, sino en las manos del usuario, y que nuestra responsabilidad llega hasta el último píxel implementado. Aprendí que la colaboración estrecha con ingeniería durante la corrección de errores es el único camino para evitar que la visión del producto se diluya en la fase final. Al cerrar esta actividad, dejo un producto que no solo cumple con los requisitos técnicos, sino que respeta la integridad de la experiencia que prometimos a la comunidad de deportistas.