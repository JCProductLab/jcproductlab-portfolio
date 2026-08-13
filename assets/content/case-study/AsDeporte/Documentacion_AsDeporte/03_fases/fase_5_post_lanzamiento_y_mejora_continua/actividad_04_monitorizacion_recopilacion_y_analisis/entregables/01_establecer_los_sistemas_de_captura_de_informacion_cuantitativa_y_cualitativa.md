Establecer los Sistemas de Captura de Información (Cuantitativa y Cualitativa)

Esta tarea se habría realizado en colaboración con el equipo de Ingeniería y Producto antes
y durante el lanzamiento del MVP.

1.1: Configurar Monitorización de Métricas Cuantitativas:

●  Herramienta Principal de Analítica de Producto: Se decidió utilizar Mixpanel por
su flexibilidad en la definición de eventos y funnels, y su capacidad para segmentar
usuarios. Google Analytics 4 (GA4) se configuró como complemento para métricas
de adquisición y comportamiento general del sitio web.

●  Gestión de Tags: Se utilizó Google Tag Manager (GTM) para implementar los
scripts de seguimiento de Mixpanel y GA4, así como otros píxeles de marketing,
permitiendo agilidad en la gestión de tags sin necesidad de despliegues de código
continuos.

●  Eventos Clave Rastreados (Ejemplos, basados en "04 Métricas de Éxito del

MVP.docx" y "03 Definición del Alcance del MVP.docx"):

○  M1 (Búsqueda y Descubrimiento): Evento_Visto,

Busqueda_Realizada, Filtro_Aplicado (con propiedades: tipo_filtro,
valor_filtro), Clic_Resultado_Busqueda.

○  M2 (Inscripción y Pago): Inicio_Flujo_Inscripcion,

Paso1_Inscripcion_Completado, Paso2_Inscripcion_Completado,
Intento_Pago, Pago_Exitoso, Pago_Fallido (con propiedad:
motivo_fallo), Inscripcion_Completada.

○  M3 (Perfil de Usuario): Perfil_Visto, Perfil_Editado,

Historial_Eventos_Visto, Resultados_Personales_Vistos.
○  M4 (Asdeporte Plus): Hub_Plus_Visto, Beneficio_Plus_Clickeado,

Descuento_Plus_Aplicado_Inscripcion.

○  M5 (Info Evento): Detalle_Evento_Visto,

Clic_Info_Tecnica_Evento.

○  M6 (Notificaciones): Notificacion_Recibida (propiedad:

tipo_notificacion), Notificacion_Abierta.

○  Generales: App_Instalada, App_Abierta, Sesion_Iniciada,

Usuario_Registrado.

●  Funnels Clave Definidos en Mixpanel:

○  Funnel de Inscripción: Desde Detalle_Evento_Visto ->
Inicio_Flujo_Inscripcion -> Paso1_Completado ->
Paso2_Completado -> Intento_Pago -> Inscripcion_Completada.

○  Funnel de Búsqueda a Inscripción: Desde Busqueda_Realizada ->

Clic_Resultado_Busqueda -> Detalle_Evento_Visto ->
Inicio_Flujo_Inscripcion.

○  Funnel de Activación de Usuario: Usuario_Registrado ->

Perfil_Editado -> Busqueda_Realizada.

●  Dashboards Iniciales (Configurados en Mixpanel y GA4):

○  Dashboard General de Salud del Producto: MAU, WAU, DAU, Tasa de
Retención (D1, D7, D30), Nuevos Usuarios Registrados, Número Total de
Inscripciones.

○  Dashboard de Adquisición (GA4): Fuentes de tráfico, Canales de

adquisición de instalaciones de app.

○  Dashboard de Engagement: Tiempo promedio de sesión, Sesiones por
usuario, Uso de funcionalidades clave (Búsqueda, Perfil, Hub Plus).

○  Dashboard de Conversión: Tasas de conversión de los funnels principales

(Inscripción, Búsqueda a Inscripción).

○  Dashboard de Asdeporte Plus: Crecimiento de miembros (si se rastrea

aquí), Tasa de uso de descuentos Plus.

●  Mapas de Calor y Grabaciones de Sesión: Se configuró Hotjar en la plataforma
web para las páginas clave (Home, Listado de Eventos, Detalle de Evento, primer
paso de inscripción) para observar el comportamiento de scroll, clics y posibles
puntos de fricción visual.

1.2: Configurar Canales de Recopilación de Feedback Cualitativo:

●  Formularios/Encuestas In-App/Web:

○  Se implementó una encuesta de satisfacción (CSAT) simple de 1-2 preguntas
al finalizar una inscripción exitosa (ej. "¿Qué tan satisfecho estás con el
proceso de inscripción?"). Herramienta: Hotjar Surveys / Mixpanel Surveys.

○  Se colocó un botón discreto de "Enviar Feedback" en el pie de página de la
web y en el menú de configuración de la app, enlazando a un formulario
simple (Google Forms / Typeform) para recoger comentarios abiertos.

●  Monitorización de Reseñas de Tiendas de Apps y Redes Sociales:

○  Se configuraron alertas y un proceso de revisión diaria para las nuevas

reseñas en App Store y Google Play utilizando una herramienta como
AppFollow (o revisión manual inicial).

○  Se estableció un monitoreo de menciones y comentarios en las principales
redes sociales de AsDeporte (Facebook, Instagram, X/Twitter) utilizando
Brandwatch (o herramientas nativas y búsqueda manual).

●  Optimización de Tickets de Soporte:

○  Se trabajó con el equipo de Soporte al Cliente para añadir categorías
específicas en su software de gestión de tickets (ej. Zendesk) para
problemas relacionados con la "Nueva Plataforma Digital", sub-categorizando
por flujo (ej. "Problema Búsqueda Evento App", "Error Pago Web", "Duda
Beneficio Plus").

●  Repositorio Centralizado de Feedback:

○  Se decidió utilizar Dovetail para centralizar y etiquetar todo el feedback

cualitativo proveniente de las encuestas, formularios, reseñas, redes sociales
y resúmenes de tickets de soporte. Esto permite un análisis temático más
robusto.

