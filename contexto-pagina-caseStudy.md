# Mapa de scroll de la página Caso de estudio (caso-asdeporte.html)

Vista general de la orientación de scroll de cada sección y los puntos donde cambia entre vertical y horizontal.

| Sección | Orientación | Notas de transición |
|---|---|---|
| **Apertura** | Vertical | Fases internas automáticas + scroll. Entrega a Métrica en vertical. |
| **Métrica** | Vertical → **Horizontal** | Aquí nace el scroll horizontal. La línea-cometa sube y, al llegar arriba, la pantalla empieza a moverse a la derecha. |
| **Contexto** | Horizontal | Entrada horizontal → pausa (pintado del párrafo con pantalla fija) → salida horizontal. |
| **Decisiones** | Horizontal ↔ Vertical (alterna) | Entrada de los 3 títulos: horizontal. Cada decisión: cortina horizontal + imagen que se expande → cambia a vertical (problema, decisión, razonamiento) → cortina horizontal de la siguiente decisión. Se repite ×3. |
| **Resultados** | Vertical | Después de la Decisión 3, el scroll queda en vertical y Resultados continúa en vertical. |
| **Navegación (final)** | Vertical | Cierre vertical hasta el CTA "¿ARRANCAMOS?". |

**Patrón clave:** la página alterna entre scroll vertical y horizontal según la sección. Los puntos de transición entre orientaciones son momentos críticos de la construcción.

---

# Sección apertura y metrica

## Mi explicación

La idea es que al ingresar al caso de estudio, la pantalla empiece en negro. Con un fade in o fade out se vaya mostrando la imagen del fondo, pero la persona en lugar de estar viendo hacia abajo estará viendo hacia arriba y mientras se va viendo la imagen con el efecto fade in o fade out, la persona irá bajando la mirada hasta quedar como se ve en la imagen. La imagen principal del caso, tiene un gradiente en radial con las esquinas más oscuras. Al mismo tiempo, de la animación que te comente, hay otra animación de entrada para el texto, cada palabra va ir subiendo de abajo hacia arriba para mostrarse por completo y al mismo tiempo el texto del título va avanzando hacia la izquierda como carrusel para que se lea todo el texto, ya que en un principio se corta, pero esa es la intención. El texto siempre se queda abajo y avanzando para que se lea el título completo, sin embargo, si el usuario hace clic, esto va ocasionar una interación tanto en la persona cmo en el texto, la persona va a voltear hacia arriba y el texto va a subir sin dejar de avanzar hacia la izquierda, como si la persona de la imagen estuviera viendo el texto y siguiendolo con la mirada y al mismo tiempo habrá un fade in para ir ocultando la imagen, pero el texto, el texto solo desaparecerá llendo hacia arriba con el scroll. Al hacer scroll (la animación se verá el scroll hacia abajo), se irá mostrando la tercer imagen donde se muestra la métrica del 25%. Auí aún no he pensado en alguna animación, pero también cada elemento debe tener una animación de entrada. Se debe animar el 2% con la flecha hacia arriba y después el texto de abajo, pero todo debe verse fluido y finalmente la imagen que se ve a la derecha. Pero esto no será una imagen, la línea se va animar mientras el usuario va haciendo scroll, la línea se va ir pintando, solo que el color será verde en lugar de azul, pero quiero que la línea se vea exactamente igual que la imagen con el círculo que irá avanzando hasta llegar a la parte de arriba para desaparecer y así pasar a la siguiente sección, las líneas del fondo no las llevaría, solo la línea azul. Y así es como terminaría esta sección de "Apertura" para pasar a la sección de "contexto". Para entrar a la siguiente sección, mientras la línea verde vaya avanzando hacia arriba, la pantalla se irá moviendo hacia la derecha (aquí ya cambio el scroll, en lugar de ir hacia abajo, será hacia un lado), mientras se va haciendo scroll hacia la derecha, se va a mostrar el contenido de la siguiente sección, pero eso ahorita te muestro lo que sigue. Por el momento quiero que entiendas el inicio del caso de estudio.

La idea del principio del título y la imagen la tome de la siguiente página, específicamente de la parte del html del div y clase que te pongo a continuación. Analiza todo lo que te dije y dime si entiendes todo o si necesitas que te explique qalgo.

https://www.eseagency.ch/en
div cb-ticker-element class hh2__section

## Secuencia

FASE 1 — Automática al entrar o recargar

Negro total → fade in → mirada baja → texto sube palabra por palabra → ticker avanza hacia izquierda

FASE 2 — Scroll hacia abajo desde Fase 1

Imagen fade out + texto sube y desaparece + atleta voltea mirada hacia arriba siguiendo el texto

FASE 3 — Scroll hacia arriba desde Fase 4

Todo en reversa — texto baja, imagen aparece con fade in, atleta sigue el texto con la mirada hacia abajo
Cuando el scroll llega al tope — imagen estática mirando hacia abajo, ticker sigue avanzando
Si el usuario hace scroll hacia abajo → va directo a Fase 4

FASE 4 — Pantalla de la métrica

Transición por scroll hacia abajo desde Fase 2
El +25% con flecha verde se anima con entrada
El texto de contexto aparece después
La línea verde se dibuja en tiempo real con el scroll — solo la línea con el círculo avanzando hacia arriba, sin líneas de fondo
Cuando la línea llega al tope → transición al scroll horizontal hacia la derecha para la siguiente sección



# Sección Contexto

## Mi explicación

La siguiente sección es contexto. Mientras el usuario vaya haciendo scroll, la pantalla se va ir moviendo hacia la izquierda para ir revelando el texto del título sin animación y la imagen (recuadro blanco), la cual tendra un efecto parallax, que se vea un movimiento en la imagen, mientras se siga hacendo scroll, seguirá avanzando y de ahí se animara la flecha con el efecto de irse pintando. Primero no se ve nada, pero después se anima y ya se ve la flecha, al seguir avanzando se mostrará el texto de la derecha el cual se verá en el color gris más oscuro y conforme se vaya haciendo scroll se va pintando el texto del gris más claro. Este efecto mientras el texto va subiendo pero cortandose en la parte de arriba mientras el texto de hasta abajo que al principio no se ve, porque se corta abajo va subiendo para poder visualizarlo. Esta animación pasa mientras la pantalla se queda fija sin hacer scroll hacia la izquierda, una vez que se muestre todo el texto hasta abajo, ahora si la pantalla empieza a avanzar hacia la izquierda para mostrar la siguiente sección, pero eso te lo explico después. Mientras en la misma sección, si analizas, abajo del texto hay 2 botones, si el usuario hace clic, se abrira un modal como si estuviera escondido en la parte derecha y deslizara hacia la izquierda para mostrarse, de esta manera el usuario podrá ver las secciones de mi rol y proceso si así lo quiere. El modal de la sección de mi rol, así como se ve la imagen. así tal cual se mostrará. Mientras que el modal de la sección proceso será un tipo carrusel automático. Al principio al abrir el modal estará iluminado (con color gris más claro, mientras los otros 2 se ven más oscuros), el paso 1 "Discovery" y e texto de la derecha tendrá la explicación del paso. Después se iluminara el paso 2 y a la derecha se mostrará el la explicación del paso 2 "Definition" y así sucesivamente. Sin embargo, si el usuario pasa encima (sin necesidad de hacer clic), de un paso, el párrafo de la derecha cambiara al paso en el que el usuario está encima. Es decir que la animación será automática, pero el usuario también podrá interactuar.

## Secuencia

SECCIÓN CONTEXTO — Scroll horizontal hacia la izquierda
Revelación del contenido principal

Scroll horizontal revela el título y la imagen con efecto parallax
La flecha se anima dibujándose — primero invisible, después se pinta
El texto de la derecha aparece en gris oscuro y conforme avanza el scroll se va iluminando al gris claro
El texto sube pero se corta arriba — el texto de abajo va subiendo para hacerse visible
Esta animación ocurre con la pantalla fija — sin avance horizontal
Cuando todo el texto es visible, la pantalla retoma el scroll horizontal hacia la izquierda

Barra de contexto — parte inferior izquierda, estática

Dos botones — parte inferior derecha: MI ROL y EL PROCESO

MODAL MI ROL

Se abre deslizando desde la derecha hacia la izquierda
Diseño exactamente como la imagen compartida
Botón X para cerrar — esquina superior derecha

MODAL EL PROCESO

Se abre igual — deslizando desde la derecha
Carrusel automático entre Discovery, Definition y Delivery
El paso activo se ilumina — los otros dos más oscuros
Hover sobre cualquier paso interrumpe el automático y muestra ese paso
Botón X para cerrar



# Sección decisiones

## Mi explicación

La siguiente sección es una de las más largas. Es la sección de decisiones. Voy a ir por partes para que lo vayas entendiendo mejor.

Al hacer scroll de la sección anterior, se moverá en scroll horizontal y se mostrará esta pantalla. Con ella abrirá la sección de decisiones. Muestra el título de las 3 decisiones más importantes del caso. En este caso los textos empiezan desalineados hasta la derecha. El de arriba se ve más cerca de la izquierda, el segundo menos cerca y el tercero más cerca de la derecha y mientras el usuario va haciendo scroll, cuando se acerca a la izquierda todos se alinean.

El ejemplo lo tome de esta página
https://silviasguotti.design/

Específicamente en la parte div class tile id tile__manifesto

La siguiente pantalla muestra el inicio de la decisión 1. Pero la animación sería de la siguiente manera. De la pantalla enterior que muestra los títulos de las 3 decisiones, al hacer scroll, se vería como esta pantalla que te estoy mostrando ahorita encima de la anterior como efecto de cortina moviendose de derecha hacia la izquierda, conforme se va haciendo scroll, todo se va moviendo, pero el recuadro blanco que se ve, será una imagen. Ese elemento se irá extendiendo hacia los lados y una vez que llegue al centro de la pantalla, crecera hasta ocupar el 100% de la pantalla a lo ancho y alto. Al seguir haciendo scroll, en este momento cambiara de scroll horizontal a vertical para mostrar la siguiente pantalla. La cual aparecera con fade in cada recuadro que representa un problema.

Perfecto, después de eso, el usuario sigue haciendo scroll y en este caso también se verá un efecto tipo cortina, donde la pantalla anterior estará encima e irá subiendo y debajo se irá viendo la siguiente pantalla. Una imagen al centro y un recuadro obalado al centro mientras se siga haciendo scroll, la imagen se irá extendiendo hacia los lados hasta ocupar el 100% de la pantalla a lo ancho y alto, mientras el recuadro obalado va girando y creciendo, después llega un momento que con animación fade in aparece el texto al centro con la información de la decisión. Para pasar a la siguiente pantalla, el usuario sigue haciendo scroll, el texto desaparece con un fade in, después la imagen también desaparece con un fade in, pero mientras va desapareciendo se ve como la pantalla hace scroll para llegar a la siguiente pantalla. Por el mmento hasta quí te explico, antes de pasar a otra pantalla.

Perfecto. Con la siguiente pantalla empieza la parte del razonamiento del porque se tomo esa decisión. Como dije anteriormente, de la pantalla anterior se hace scroll vertical y se empieza a mostrar esta parte donde el porcentaje aparecera con un fade in, mientras el texto de la derecha simplemente aparece desde abajo y sube hasta desaparecer arriba, una vez que desaparece la ultima línea del párrafo, al mismo tiempo el porcentaje de la izquierda desarparece con un fade out y después aparece el siguiente porcentaje con un fade in y su texto viene recorriendo la pantalla desde abajo hasta arriba hasta desaparecer y pasa lo mismo para pasar al siguiente porcentaje, una vez que el último razonamiento desaparece tanto el porcentaje como la explicación, sube la última pantalla donde viene un texto en medio explicando el razonamiento final. El usuario sigue haciendo scroll, mientras el párrafo va suviendo, la última línea de hasta abajo (arreglando el pago.”), crece y se centra y también se sube hasta desaparecer. En ese momento termina la explicación de la primer decisión. Mientras sube la última línea, con un efecto tipo cortina empieza a encimarse el inicio de la segunda decisión con scroll horizontal, que es el título de la decisión sobre fondo verde y la imagen a lado. Exactamente igual como inicio la decisión 1 y ahí se repite toda la animación desde la pantalla verde con el título hasta la última pantalla que te estoy subiendo ahorita y después se vuelve a repetir para la decisión 3. Después de pasar las 3 decisiones, en este moemnto termina la sección de decisiones para pasar a la shasta aquí.por el momento

## Secuencia

SECCIÓN DECISIONES — Pantalla de entrada

Transición desde Contexto por scroll horizontal hacia la izquierda
Las 3 decisiones aparecen desalineadas — cada una más a la derecha que la anterior
Decisión 1 — más cerca de la izquierda
Decisión 2 — más al centro-derecha
Decisión 3 — más a la derecha, casi cortada
Conforme el usuario hace scroll hacia la izquierda, las 3 se alinean progresivamente hasta quedar como en la imagen 2 — alineadas a la izquierda, texto completo visible
Cada decisión muestra: número en círculo verde + título + subtítulo

DECISIÓN 1 — Secuencia completa
Pantalla de entrada — Efecto cortina

Desde la pantalla de los 3 títulos, al hacer scroll la Decisión 1 entra como cortina de derecha a izquierda — se superpone encima de la pantalla anterior
Fondo verde con título grande a la izquierda
La imagen arranca pequeña al centro-derecha y se expande hacia los lados
Cuando llega al centro de la pantalla crece hasta ocupar el 100% del ancho y alto
En ese momento el scroll cambia de horizontal a vertical

Pantalla "El problema" — Scroll vertical

Fade in de cada recuadro — 4 cards en grid 2x2
Cada card aparece con su propio fade in de forma escalonada
Fondo oscuro #0D0D0D
Cada card tiene punto verde + texto descriptivo

DECISIÓN 1 — "La decisión" — Secuencia completa
Transición de entrada — Efecto cortina vertical

La pantalla anterior ("El problema") está encima y sube hacia arriba
Debajo se va revelando esta nueva pantalla con scroll vertical

Animación principal

Una imagen al centro arranca pequeña
Un recuadro ovalado verde punteado rodea la imagen y gira mientras crece
La imagen se expande hacia los lados hasta ocupar el 100% del ancho y alto de la pantalla
El ovalado sigue girando y creciendo simultáneamente
Fade in del texto al centro — encima de la imagen expandida
Texto: "Propuse mover Tribu fuera del MVP y redirigir todos esos recursos al motor de búsqueda y al flujo de pago. En una sala donde el CEO ya imaginaba la campaña de lanzamiento, esa propuesta generó un silencio que se sintió muy largo."

Transición de salida

El texto desaparece con fade out
La imagen desaparece con fade out
Mientras desaparece, la pantalla hace scroll hacia la siguiente pantalla

DECISIÓN 1 — "El razonamiento" — Secuencia completa
Pantalla 1 — Dato 90.8%

Fade in del porcentaje con checkmark verde a la izquierda
El texto de la derecha sube desde abajo hacia arriba
Cuando el texto desaparece por arriba → fade out del porcentaje

Pantalla 2 — Dato 65%

Fade in del nuevo porcentaje
El texto sube desde abajo hacia arriba hasta desaparecer
Fade out del porcentaje

Pantalla 3 — Dato 5%

Mismo patrón — fade in porcentaje, texto sube y desaparece, fade out porcentaje

Pantalla 4 — Cierre del razonamiento

Texto en grande al centro en cursiva: "El argumento se cerró solo. No podíamos competir en un terreno que ya habíamos perdido. Primero había que ganarse el derecho de hablar con el usuario…
Mientras el párrafo sube, la última línea "arreglando el pago." crece, se centra y sube hasta desaparecer

Transición a Decisión 2

Efecto cortina — la pantalla verde con título de Decisión 2 se encima desde abajo
Se repite toda la secuencia completa para Decisión 2 y después para Decisión 3

Fin de sección Decisiones

Después de la Decisión 3 termina esta sección


# Sección Resultados

## Mi explicación

Entendiste perfecto. Ahora vamos con la penúltima sección "Resultados".
Después de la última pantalla de decisiones, al seguir haciendo scroll vertical se va mostrar la primer pantalla con el texto y más abajo varias imágenes. Las imágenes más largas (la de en medio y las de las orillas se irán ajustando hasta quedar a la misma altura que las otras imagenes como se muestra en la pantalla 2. Al seguir haciendo scroll, la imagen de en medio se expande hacia los lados, ocasionando que empuje a las otras imágenes, mientras se van saliendo de la pantalla y haciendose más pequeñas de ancho hasta ocupar el 100% del viewport. La imagen desaparece con un fade out para dar paso a la siguiente pantalla que presenta los resultados en métricas. Esta pantalla se ve solo el fondo negro, mientras el usuario siga haciendo scroll, aparece el título y los recuadros con la información de las métricas van a aparecer de la siguiente manera. No se mostrará nada, solo el título, pero conforme se haga scroll, la primer métrica se ira asomando desde la parte inferior derecha, deslizandose hacia arriba a la derechay así sucesivamente todas las métricas, esa será la animación que muestre las métricas. Serán 5 recuadros con resultados y una vez que el último llegue arriba a la derecha y desaparezca, el título desaparece también con un fade out. De momento, hasta aquí me quedo para no saturarte de nformación, analiza y después continuo con las demás animaciones de esta sección.

En la pantalla 1, las imágenes más largas van subiendo hasta ajustarse con las otras en la parte de arriba, no abajo.
En pantalla 3 los recuadros aparecen desde la parte inferior izquierda para llegar a la parte superior derecha.

Después de la última pantalla que queda en negro, aparece la primer pantalla que te muestro a continuación con el título en la parte superior izquierda, la imagen a la derecha y el párrafo abajo. Después desaparecen el párrafo y la imagen, mientras el título desparece, excepto la palabra "impacto". Esta palabra se pone al centro de la pantalla y empieza a crecer hasta que la p queda centrada y en medio aparece el siguiente texto con fade in mientras la palabra desaparece. Al mismo tiempo con fade in aparece un rectangulo ovalado que va rotando y creciendo junto con la palabra impacto. Junto con el texto del centro aparece el icono de las comillas, todo esto pasa mientras el usuario va haciendo scroll. Después se sigue haciendo scroll y la pantalla se va deslizando hacia abajo para mostrar el siguiente texto y el botón con alguna animación. El usuario sigue haciendo scroll y la pantalla sigue bajando para mostrar la última pantalla de esta sección con la palabra ¡Gracias moviendose hacia su derecha mientras se está haciendo scroll y las palabras por ver! moviendose hacia su izquierda. En la pantalla anterior donde está el botón "Qué aprendí", al hacer clic aparece la sección conu modal que se muestra deslizando desde la derecha para mostrar la penúltima pantalla que te compartí. Y para finalizar la página de caso de estudio, el usuario sigue haciendo scroll y las 2 imágenes que se alcanza a observar se van encimando sobre la imagen más grande y se sigue haciendo scroll hasta mostrar el contenido final de la página con el CTA.

Sobre la sección final, las imágenes se enciman sobre la grande, pero al mismo tiempo la imagen grande va subiendo hasta desparecer hacia arriba

## Secuencia

SECCIÓN RESULTADO — Secuencia hasta aquí

Pantalla 1 — Entrada

Transición desde la última decisión por scroll vertical
Título centrado: "Cuando la certeza reemplaza la duda, los números se mueven solos."
Debajo, varias imágenes de la app — las del centro y las de las orillas son más largas
Conforme el usuario hace scroll, las imágenes largas suben hasta alinearse por arriba con las demás

Pantalla 2 — Expansión de imagen

La imagen del centro se expande hacia los lados
Las imágenes laterales se empujan hacia afuera — se encogen de ancho y salen del viewport
La imagen central ocupa el 100% del viewport
Fade out de la imagen central

Pantalla 3 — Métricas

Fondo negro, solo el título visible: "El impacto en el negocio"
Conforme el usuario hace scroll, los 5 recuadros aparecen uno por uno deslizándose desde la parte inferior izquierda hacia la parte superior derecha
Una vez que el último recuadro llega arriba a la derecha y desaparece → fade out del título

SECCIÓN RESULTADO — Continuación
Pantalla 4 — El impacto en los usuarios

Título arriba izquierda: "El impacto en los usuarios"
Imagen grande a la derecha
Párrafo debajo
Scroll: párrafo e imagen desaparecen con fade out
El título desaparece excepto la palabra "impacto"
"Impacto" se mueve al centro y crece progresivamente
Simultáneamente aparece un rectángulo ovalado verde punteado que rota y crece junto con la palabra
Fade in del texto de la reseña al centro + icono de comillas verdes
La palabra "impacto" desaparece

Pantalla 5 — Reseña completa

Comillas verdes grandes arriba izquierda
Texto de la reseña centrado en cursiva
Scroll hacia abajo desliza la pantalla para revelar la siguiente

Pantalla 6 — Cierre del resultado

Texto centrado: "No rediseñamos una app. Recuperamos la autoridad de una marca."
Botón "QUÉ APRENDÍ" debajo con animación de entrada
Clic en el botón → modal se desliza desde la derecha

SECCIÓN QUÉ APRENDÍ — Modal

Diseño exactamente como la imagen compartida
Título grande izquierda + lecciones a la derecha
Botón X para cerrar — esquina superior derecha

Pantalla 7 — ¡Gracias por ver!

"¡Gracias" se mueve hacia la derecha con el scroll
"por ver!" se mueve hacia la izquierda con el scroll
Imagen grande al centro
Scroll continúa hacia abajo

SECCIÓN NAVEGACIÓN — Final

Las 2 imágenes laterales se enciman sobre la imagen grande
Simultáneamente la imagen grande sube hacia arriba hasta desaparecer
Scroll continúa revelando el contenido final con el CTA: "¿ARRANCAMOS?" + subtítulo + botones de contacto.