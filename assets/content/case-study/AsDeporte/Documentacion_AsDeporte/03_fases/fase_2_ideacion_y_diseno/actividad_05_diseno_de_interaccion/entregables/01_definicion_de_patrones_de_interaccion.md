Definición de Patrones de Interacción Clave: Nueva
Plataforma Digital AsDeporte (MVP B2C)

En esta fase de Diseño de Interacción, definimos cómo se comportarán los elementos
interactivos y las funcionalidades clave en el MVP B2C de la plataforma digital de
AsDeporte. El objetivo es crear una experiencia de usuario fluida, predecible y que
genere confianza, abordando los puntos de dolor identificados en la investigación,
especialmente aquellos relacionados con la usabilidad y la fiabilidad.

Se detallan a continuación los patrones de interacción para los componentes y
funcionalidades más importantes, considerando la adaptación entre la experiencia web
responsive y la aplicación móvil.

Patrones de Interacción Clave

1. Navegación

●  Navegación Global (Web):

○  Barra Superior (Header): Los enlaces a las secciones principales (Inicio,
Eventos, Resultados, Mi Perfil) serán siempre visibles en pantallas de
escritorio/tablet. Al pasar el cursor (hover), los enlaces pueden tener un cambio
de color o subrayado sutil. Al hacer clic, la página correspondiente se cargará.

○  Menú Hamburguesa (Web Responsive - Pantallas Pequeñas): En
dispositivos móviles o ventanas de navegador pequeñas, la barra de
navegación superior colapsará en un ícono de menú hamburguesa. Al hacer
clic en el ícono, se desplegará un menú lateral o a pantalla completa con los
enlaces a las secciones principales. Al seleccionar un enlace, el menú se
cerrará y la página se cargará.

○  Pie de Página (Footer): Contendrá enlaces a información institucional y de
soporte. Estos enlaces abrirán la página correspondiente al hacer clic.

○  Transiciones: Las transiciones entre páginas serán las estándar del

navegador (carga de página completa).

●  Navegación Global (App Móvil):

○  Barra de Pestañas Inferior (Tab Bar): Los íconos y etiquetas de las secciones
principales (Inicio, Eventos, Mi Perfil, Resultados) estarán siempre visibles
en la parte inferior de la pantalla. Al seleccionar una pestaña, el contenido de la
sección correspondiente se mostrará sin recargar toda la pantalla (navegación
suave entre pestañas). El ícono de la pestaña activa tendrá un estado visual
diferente (color, peso).

○  Menú Adicional/Configuración: Accesible desde un ícono o pestaña (ej. en
Mi Perfil). Al hacer clic, se abrirá una pantalla o menú modal con opciones
secundarias (Soporte, Configuración, etc.).

○  Transiciones: Las transiciones entre pantallas dentro de una pestaña

(navegación jerárquica) utilizarán las animaciones estándar de la plataforma
(deslizar de derecha a izquierda al avanzar, deslizar de izquierda a derecha al
retroceder).

●  Navegación Local/Jerárquica (Web y App):

○  Botón "Atrás": En la app móvil, un ícono de flecha "<" en la esquina superior
izquierda de la barra de título permitirá regresar a la pantalla anterior. En la
web, se dependerá principalmente del botón de retroceso del navegador,
aunque se pueden usar enlaces "Volver" en puntos clave si la jerarquía no es
obvia.

○  Pestañas Internas: Dentro de una pantalla (ej. Detalle de Evento), las

pestañas para organizar contenido relacionado (ej. "Información General",
"Información Técnica") permitirán cambiar entre vistas al hacer clic en la
etiqueta de la pestaña. La pestaña activa tendrá un indicador visual claro
(subrayado, color de fondo).

2. Controles de Datos (Filtros y Ordenamiento)

●  Filtros (Listado de Eventos/Resultados):

○  Web: Los filtros pueden estar en una barra lateral o en una sección

expandible/colapsable. Al seleccionar/deseleccionar opciones (checkboxes,
radio buttons, selectores), los resultados de la lista se actualizarán
automáticamente o al hacer clic en un botón "Aplicar Filtros" (dependiendo de
la complejidad y rendimiento). El estado actual de los filtros aplicados debe ser
visible.

○  App Móvil: Los filtros se accederán a través de un ícono o botón claro en la

pantalla de listado. Al hacer clic, se abrirá una pantalla o modal dedicada para
seleccionar los filtros. Un botón "Aplicar Filtros" en esta pantalla cerrará el
modal y actualizará el listado principal. Se mostrará un indicador visual en el
ícono de filtro en la pantalla de listado cuando haya filtros activos.
○  Selectores de Fecha/Rango de Fechas: Se utilizarán selectores de
calendario estándar de la plataforma (web/móvil) para elegir fechas.

○  Estado de Filtros: Se mostrará un resumen conciso de los filtros activos (ej.
"Deporte: Running, Fecha: Próximos 30 días") para que el usuario sepa qué
está viendo.
●  Ordenamiento:

○  Un control (ej. un menú desplegable o botones de radio) permitirá seleccionar
el criterio de ordenamiento (ej. por fecha, por distancia). La lista se actualizará
al seleccionar una opción.

3. Entrada de Datos (Formularios)

●  Campos de Formulario:

○  Estados: Los campos tendrán estados visuales claros: normal, enfocado (al

hacer clic/seleccionar), con datos ingresados, con error (validación).

○  Etiquetas y Placeholders: Cada campo tendrá una etiqueta clara que indique
qué información se espera. Se pueden usar placeholders (texto de ejemplo
dentro del campo) como ayuda, pero no deben reemplazar las etiquetas.

○  Validación en Tiempo Real: Se proporcionará feedback visual inmediato si el

formato de entrada es incorrecto (ej. email sin "@", número de teléfono
incompleto) antes de que el usuario intente enviar el formulario.
○  Mensajes de Error: Los mensajes de error serán claros, concisos y

específicos sobre qué salió mal y cómo corregirlo, ubicados junto al campo
relevante o en la parte superior del formulario.

●  Teclado Virtual (App Móvil): El tipo de teclado que aparece en móvil se adaptará
al tipo de campo (teclado numérico para números de teléfono/tarjeta, teclado con
"@" para emails). El layout debe ajustarse para que el campo activo no quede
oculto por el teclado.

4. Botones y Llamadas a la Acción (CTAs)

●  Estados: Los botones tendrán estados visuales claros:

○  Normal: Apariencia estándar.
○  Hover (Web): Cambio de color o sombra sutil al pasar el cursor.
○  Pressed/Active: Ligero cambio visual al ser clicado/tocado.
○  Disabled: Apariencia atenuada, no interactuable, indicando que no se puede

hacer clic (ej. botón de "Pagar" si faltan campos).

○  Loading: Indicador visual (spinner) dentro o junto al botón mientras se procesa

la acción (ej. al hacer clic en "Confirmar Pago").

●  Feedback al Activar: Al hacer clic en un botón que inicia una acción (ej.

"Inscríbete Aquí", "Crear Cuenta", "Guardar Cambios"), se proporcionará feedback
inmediato:
○  Visual: Cambio de estado del botón a "loading", transición a la siguiente

○

pantalla, aparición de un mensaje de confirmación.
(Opcional) Háptico (App Móvil): Una ligera vibración para confirmar la
interacción.

5. Controles Específicos de Funcionalidades MVP

●  Hub de Beneficios Asdeporte Plus:

○  Visualización: Los beneficios se presentarán en una lista clara. Al hacer clic

en un beneficio, se puede expandir para mostrar más detalles o un
enlace/instrucción sobre cómo canjearlo/usarlo.

○  Wallet (si aplica): Visualización clara del saldo y un historial simple de

movimientos.

●

Integración Wearables (Básico - Should Have):

○  Botón "Conectar": Al hacer clic, iniciará el flujo de autorización (redirección

externa).

○  Estado de Conexión: Se mostrará claramente si un servicio está "Conectado"

o "Desconectado", con la opción de "Desconectar".
●  Funcionalidad Comunitaria (Idea Simple - Si se incluye):

○  Foro por Evento: Un área de texto para escribir mensajes, un botón para
enviar. Los mensajes se mostrarán en orden cronológico. Posiblemente
opciones básicas de responder o dar "me gusta".
●  Livetracking (Could Have - Mejoras de Fiabilidad):

○  Visualización en Mapa: El mapa mostrará la ruta del evento y la ubicación

aproximada del atleta. La interacción con el mapa (zoom, pan) será la estándar
de la plataforma.
Indicadores: Mostrar el progreso del atleta (ej. porcentaje completado), puntos
de control.

○

6. Feedback del Sistema

●

Indicadores de Carga:
○  Carga de Página/Sección Completa: Se puede usar un spinner central o una

barra de progreso en la parte superior.

○  Carga de Elementos Específicos: Spinners más pequeños o esqueletos de
contenido (skeleton screens) mientras se carga una lista o un bloque de
información.

●  Mensajes de Éxito:

○  Confirmaciones Críticas: Pantalla de confirmación dedicada (ej. Inscripción

Exitosa).

○  Confirmaciones Menores: Mensajes temporales (ej. "Cambios guardados",
"Email enviado") mostrados como "toasts" (pequeños banners en la parte
inferior/superior) o banners discretos que desaparecen automáticamente o
pueden ser cerrados.

●  Mensajes de Error:

○  Errores de Formulario: Mensajes específicos junto a los campos afectados.
○  Errores de Proceso/Sistema: Pantallas de error dedicadas (ej. error de pago,
página no encontrada) con una explicación clara del problema y opciones para
qué hacer a continuación (ej. "Reintentar", "Volver a Inicio", "Contactar
Soporte").

○  Errores Menores: Mensajes temporales (toasts o banners) para errores no

críticos.

Estos patrones de interacción, combinados con los wireframes, proporcionarán una
guía detallada para el diseño visual y el desarrollo, asegurando una experiencia de
usuario coherente y efectiva en el MVP B2C.

