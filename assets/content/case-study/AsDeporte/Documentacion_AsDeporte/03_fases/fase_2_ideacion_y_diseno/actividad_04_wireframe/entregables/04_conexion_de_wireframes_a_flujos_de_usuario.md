Conexión de Wireframes a Flujos de Usuario: Nueva
Plataforma Digital AsDeporte (MVP B2C)

En esta etapa, conectamos conceptualmente los wireframes de alta fidelidad (basados
en la lista de pantallas de la Iteración 1) con los diagramas de flujos de usuario
previamente definidos. Aunque no se generan prototipos interactivos o diagramas
visuales aquí, esta descripción detalla cómo cada pantalla (wireframe) se relaciona con
los pasos del usuario en los flujos críticos, asegurando que las interacciones visuales
guíen al usuario a través de su recorrido.

Se toma como referencia la lista de pantallas del documento "Pantallas a Diseñar
(Wireframing) MVP B2C - Iteración 1" y los flujos mapeados en "Mapeo Paso a Paso de
Flujos Críticos MVP B2C".

Conexión por Flujo Crítico

Flujo 1: Buscar, Ver Detalles e Inscribirse a un Evento

●  Punto de Inicio:

○  Desde [Página/Pantalla de Inicio (Home)] (2): El usuario hace clic en un

llamado a la acción "Ver Eventos" o utiliza la barra de búsqueda/ícono de
eventos.

○  Desde un enlace externo: El usuario llega directamente a la [Página/Pantalla
de Listado de Eventos] (8) o la [Página/Pantalla de Detalle de Evento] (10).

●  Paso a Paso:

○  El usuario llega a la [Página/Pantalla de Listado de Eventos] (8).
○  En la [Página/Pantalla de Listado de Eventos] (8), el usuario puede:

■  Desplazarse por la lista.
■  Utilizar el campo de búsqueda (lleva a una versión filtrada de la misma

pantalla).

■  Hacer clic en el ícono/botón de filtros para abrir la [Pantalla de Filtros

■

Avanzados de Eventos] (9).
(Si se incluye) Cambiar a la [Pantalla de Vista de Calendario Mejorado]
(12) o [Pantalla de Vista de Mapa de Eventos] (13) (estas pantallas
también tendrían acceso a filtros y selección de evento).

○  Desde la [Pantalla de Filtros Avanzados de Eventos] (9), el usuario aplica filtros

(botón "Aplicar Filtros") y regresa a la [Página/Pantalla de Listado de
Eventos] (8) con resultados filtrados.

○  En la [Página/Pantalla de Listado de Eventos] (8) (o vistas alternativas), el

usuario hace clic en la tarjeta o nombre de un evento específico.
○  El usuario navega a la [Página/Pantalla de Detalle de Evento] (10).
○  En la [Página/Pantalla de Detalle de Evento] (10), el usuario revisa la

información (desplazándose, usando posibles pestañas internas).

○  Si el usuario decide inscribirse, hace clic en el botón prominente "Inscríbete

Aquí" o similar.

○  El usuario navega al [Pantalla/Página de Inscripción - Paso 1] (14) (Datos

del Participante).

○  En la [Pantalla/Página de Inscripción - Paso 1] (14), el usuario completa/verifica
datos, selecciona opciones y hace clic en un botón "Siguiente" o "Continuar".
○  El usuario navega al [Pantalla/Página de Inscripción - Paso 2] (15) (Revisión

del Pedido).

○  En la [Pantalla/Página de Inscripción - Paso 2] (15), el usuario revisa el

resumen y hace clic en un botón "Proceder al Pago" o similar.

○  El usuario navega al [Pantalla/Página de Inscripción - Paso 3] (16) (Pago

Seguro).

○  En la [Pantalla/Página de Inscripción - Paso 3] (16), el usuario selecciona un

método de pago:
■  Si selecciona Tarjeta, ingresa datos y hace clic en "Confirmar Pago".
■  Si selecciona Oxxo (si incluido), hace clic en "Generar Referencia".

○  Si el pago con Tarjeta es exitoso, el usuario navega a la [Pantalla de

Confirmación de Inscripción Exitosa] (17).

○  Si hay un error en el pago con Tarjeta, el usuario navega a la [Pantalla de
Error en Proceso de Inscripción/Pago] (18), que ofrece opciones para
reintentar (regresar al Paso 3) o contactar soporte.

○  Si selecciona Oxxo, el usuario navega a la [Pantalla de Referencia de Pago

Oxxo] (19).
●  Punto de Fin:

○  El usuario ve la [Pantalla de Confirmación de Inscripción Exitosa] (17). (El
envío de email y actualización del perfil ocurren en el backend, pero la pantalla
es la confirmación visual para el usuario).

Flujo 2: Registro de Nuevo Usuario

●  Punto de Inicio:

○  Desde [Página/Pantalla de Inicio (Home)] (2), [Página/Formulario de Inicio de
Sesión] (3), o al intentar inscribirse sin cuenta: El usuario hace clic en el
botón/enlace "Registrarse" o "Crear Cuenta".

●  Paso a Paso:

○  El usuario navega a la [Página/Formulario de Registro] (4).
○  En la [Página/Formulario de Registro] (4), el usuario ingresa los datos

requeridos y hace clic en "Crear Cuenta".

○  Si el registro es exitoso, el sistema crea la cuenta e inicia sesión

automáticamente. El usuario es redirigido a la [Página/Pantalla de Mi Perfil
(Dashboard/Resumen)] (20) o la [Página/Pantalla de Inicio (Home)] (2).

○  Si hay errores de validación, se muestran mensajes en la [Página/Formulario

de Registro] (4) y el usuario puede corregir y reintentar.

●  Punto de Fin:

○  El usuario está en la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]
(20) o [Página/Pantalla de Inicio (Home)] (2), loggeado en su nueva cuenta.

Flujo 3: Inicio de Sesión

●  Punto de Inicio:

○  Desde la cabecera, [Página/Pantalla de Inicio (Home)] (2), o al intentar acceder

a contenido restringido: El usuario hace clic en "Iniciar Sesión".

●  Paso a Paso:

○  El usuario navega a la [Página/Formulario de Inicio de Sesión] (3).
○  En la [Página/Formulario de Inicio de Sesión] (3), el usuario ingresa

email/usuario y contraseña y hace clic en "Iniciar Sesión".

○  Si las credenciales son válidas, el sistema autentica al usuario y lo redirige a la
página que intentaba acceder (si aplica) o a la [Página/Pantalla de Mi Perfil
(Dashboard/Resumen)] (20) o [Página/Pantalla de Inicio (Home)] (2).
○  Si las credenciales no son válidas, se muestra un mensaje de error en la

[Página/Formulario de Inicio de Sesión] (3) y el usuario puede reintentar.
○  Desde la [Página/Formulario de Inicio de Sesión] (3), el usuario puede hacer

clic en "¿Olvidaste tu contraseña?" para iniciar el Flujo 4.

●  Punto de Fin:

○  El usuario está en la página de destino, loggeado.

Flujo 4: Recuperación de Contraseña

●  Punto de Inicio:

○  Desde la [Página/Formulario de Inicio de Sesión] (3): El usuario hace clic en

"¿Olvidaste tu contraseña?".

●  Paso a Paso:

○  El usuario navega a la [Página/Formulario de Recuperación de Contraseña

- Paso 1] (5).

○  En la [Página/Formulario de Recuperación de Contraseña - Paso 1] (5), el

usuario ingresa su email y hace clic en "Enviar Instrucciones".

○  Si el email es encontrado, el usuario navega a una [Pantalla/Mensaje de

Confirmación Genérica] (7) indicando que revise su email.

○  Si el email no es encontrado, se muestra un mensaje de error en la

[Página/Formulario de Recuperación de Contraseña - Paso 1] (5).

○  El usuario recibe un email con un enlace (fuera de la plataforma, gestionado

por el sistema de emails).

○  El usuario hace clic en el enlace del email y navega a la [Página/Formulario

de Recuperación de Contraseña - Paso 2] (6).

○  En la [Página/Formulario de Recuperación de Contraseña - Paso 2] (6), el

usuario ingresa y confirma su nueva contraseña y hace clic en "Restablecer
Contraseña".

○  Si el restablecimiento es exitoso, el usuario navega a una [Pantalla/Mensaje

de Confirmación Genérica] (7) indicando que la contraseña ha sido
actualizada, posiblemente con un enlace para ir a la [Página/Formulario de
Inicio de Sesión] (3).

○  Si hay un error, se muestra un mensaje en la [Página/Formulario de

Recuperación de Contraseña - Paso 2] (6).

●  Punto de Fin:

○  El usuario ve la [Pantalla/Mensaje de Confirmación Genérica] (7) de

restablecimiento exitoso.

Flujo 5: Gestión y Edición de Perfil de Usuario

●  Punto de Inicio:

○  Desde la navegación global (web header/app tab bar): El usuario hace clic en

"Mi Perfil".
●  Paso a Paso:

○  El usuario navega a la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]

(20).

○  En la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)] (20), el usuario hace

clic en un botón o enlace "Editar Datos Personales".

○  El usuario navega a la [Página/Formulario de Edición de Datos Personales]

(21).

○  En la [Página/Formulario de Edición de Datos Personales] (21), el usuario

modifica los campos y hace clic en "Guardar Cambios".

○  Si los cambios se guardan exitosamente, el sistema guarda los datos y el

usuario es redirigido de vuelta a la [Página/Pantalla de Mi Perfil
(Dashboard/Resumen)] (20), donde se muestra un mensaje de confirmación
(ej. un toast o banner).

○  Si hay errores de validación, se muestran mensajes en la [Página/Formulario

de Edición de Datos Personales] (21).

●  Punto de Fin:

○  El usuario está de vuelta en la [Página/Pantalla de Mi Perfil
(Dashboard/Resumen)] (20) con los cambios guardados.

Flujo 6: Acceso y Gestión de Inscripciones Activas

●  Punto de Inicio:

○  Desde la navegación global: El usuario hace clic en "Mi Perfil".

●  Paso a Paso:

○  El usuario navega a la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]

(20).

○  En la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)] (20), el usuario hace

clic en la sección o enlace "Mis Eventos Activos".

○  El usuario navega a la [Pantalla de Mis Eventos Activos] (22).
○  En la [Pantalla de Mis Eventos Activos] (22), el usuario ve la lista de sus

○

○

próximas inscripciones.
(Opcional) En la [Pantalla de Mis Eventos Activos] (22), el usuario selecciona
un evento de la lista.
(Opcional) El usuario navega a la [Pantalla de Detalle de Inscripción Activa /
Comprobante] (23).

●  Punto de Fin:

○  El usuario está en la [Pantalla de Mis Eventos Activos] (22) o la [Pantalla de

Detalle de Inscripción Activa / Comprobante] (23).

Flujo 7: Acceso a Resultados Históricos Personales

●  Punto de Inicio:

○  Desde la navegación global: El usuario hace clic en "Mi Perfil".

●  Paso a Paso:

○  El usuario navega a la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]

(20).

○  En la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)] (20), el usuario hace
clic en la sección o enlace "Mi Historial AsDeporte / Resultados Personales".

○  El usuario navega a la [Pantalla de Mi Historial AsDeporte / Resultados

Personales] (24).

○  En la [Pantalla de Mi Historial AsDeporte / Resultados Personales] (24), el

○

○

usuario ve la lista de sus eventos pasados.
(Opcional) En la [Pantalla de Mi Historial AsDeporte / Resultados Personales]
(24), el usuario selecciona un evento de la lista.
(Opcional) El usuario navega a la [Pantalla de Resultado Personal de Evento
Pasado (Detalle)] (25).

●  Punto de Fin:

○  El usuario está en la [Pantalla de Mi Historial AsDeporte / Resultados

Personales] (24) o la [Pantalla de Resultado Personal de Evento Pasado
(Detalle)] (25).

Flujo 8: Acceso y Visualización de Beneficios Asdeporte Plus

●  Punto de Inicio:

○  Desde la navegación global: El usuario hace clic en "Mi Perfil".

●  Paso a Paso:

○  El usuario navega a la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]

(20).

○  En la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)] (20), el usuario hace

clic en la sección o enlace "Asdeporte Plus" / "Mis Beneficios Plus".

○  El usuario navega a la [Pantalla de Hub de Beneficios Asdeporte Plus] (26).

●  Punto de Fin:

○  El usuario está en la [Pantalla de Hub de Beneficios Asdeporte Plus] (26).

Flujo 9: Proceso para Conectar un Wearable (Básico) (SHOULD HAVE)

●  Punto de Inicio:

○  Desde la navegación global: El usuario hace clic en "Mi Perfil".

●  Paso a Paso:

○  El usuario navega a la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)]

(20).

○  En la [Página/Pantalla de Mi Perfil (Dashboard/Resumen)] (20), el usuario hace

clic en la sección/enlace "Integración Wearables".

○  El usuario navega a la [Pantalla de Integración Wearables] (27).
○  En la [Pantalla de Integración Wearables] (27), el usuario hace clic en el botón

"Conectar" junto al servicio deseado.

○  El sistema redirige al usuario a una página externa (fuera del alcance de los
wireframes de AsDeporte, gestionada por el proveedor del wearable) para
autorización.

○  Después de autorizar externamente, el sistema redirige de vuelta a la [Pantalla

de Integración Wearables] (27).

○  En la [Pantalla de Integración Wearables] (27), el estado del servicio conectado
se actualiza visualmente (ej. de "Conectar" a "Conectado" o "Desconectar") y
se muestra un mensaje de confirmación (ej. un toast).

●  Punto de Fin:

○  El usuario está en la [Pantalla de Integración Wearables] (27) con el servicio

mostrando el estado "Conectado".

Flujo 10: Interacción con Notificaciones

●  Punto de Inicio:

○  El usuario recibe una notificación push (fuera de la interfaz de la plataforma,

gestionada por el SO).

○  El usuario ve un indicador visual de notificación (ej. ícono de campana con

contador) en la navegación global de la plataforma (web o app).

●  Paso a Paso:

○  Si hace clic en una notificación push: El sistema operativo abre la

aplicación/web y la dirige a la [Pantalla/Sección Relevante] (puede ser
cualquier pantalla: Detalle de Evento, Confirmación, etc., dependiendo del tipo
de notificación).

○  Si hace clic en el indicador de notificación en la interfaz: El usuario navega al

[Pantalla/Sección de Centro de Notificaciones] (36).

○  En el [Pantalla/Sección de Centro de Notificaciones] (36), el usuario ve la lista

de notificaciones.

○  En el [Pantalla/Sección de Centro de Notificaciones] (36), el usuario hace clic

en una notificación específica.

○  El usuario navega a la [Pantalla/Sección Relevante] (ej. [Página/Pantalla de
Detalle de Evento] (10), [Pantalla de Confirmación de Inscripción Exitosa] (17),
etc.).
●  Punto de Fin:

○  El usuario está en la [Pantalla/Sección Relevante] dentro de la plataforma,

visualizando el contenido asociado a la notificación.

Esta descripción detalla cómo los wireframes de las pantallas identificadas se conectan
para formar los recorridos de usuario definidos, sirviendo como una guía para la
creación de prototipos interactivos.

