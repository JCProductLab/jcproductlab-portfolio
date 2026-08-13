Inventario de Contenido y Funcionalidad: Plataforma
AsDeporte MVP B2C

A continuación, se presenta el inventario completo de contenido y funcionalidades que
formarán parte del Producto Mínimo Viable (MVP) para los usuarios atletas (B2C) de la
nueva plataforma digital de AsDeporte, basado en los hallazgos de investigación, el
alcance definido y las ideas priorizadas.

Este inventario servirá como base para la estructuración de la Arquitectura de la
Información.

Contenido y Funcionalidades del MVP B2C

1. Eventos (Exploración, Búsqueda y Visualización)

●  Listado de Eventos Próximos:
○  Vista de lista (por defecto)
○  Vista de calendario mejorado (alternativa)
○  Vista de mapa (opcional, si se incluye en MVP)
○

Información clave visible en la tarjeta/listado (Nombre, Fecha, Ubicación,
Distancia/s, Deporte/s)

●  Funcionalidad de Búsqueda:

○  Campo de búsqueda por nombre de evento, ubicación, etc.

●  Funcionalidad de Filtrado Avanzado:

○  Filtros esenciales: Disciplina (running, ciclismo, triatlón, etc.), Sub-disciplina
básica, Rango de fechas, Ubicación geográfica (ciudad, estado), Tipo de
evento (temático, con causa, familiar, para principiantes, caminata).

○  Filtros granulares básicos por disciplina (ej. distancia específica).
○  Ordenamiento de resultados (por fecha, distancia, etc.).

●  Página de Detalle de Evento:

Información básica: Nombre, Fecha, Hora, Ubicación (con mapa integrado).

○
○  Descripción detallada del evento.
○  Categorías disponibles y distancias.
○  Costos de inscripción por categoría/distancia.
○  Qué incluye el kit de participante.
○  Reglamento esencial del evento.
○
○

Información de entrega de paquetes (fechas, horarios, ubicación).
Información técnica adicional (si está disponible y enlazada): Altimetría básica,
enlaces a archivos GPX, mapas detallados, mapas de obstáculos (para OCR),
mapas de transición (para triatlón).

○  Botón/Acción para iniciar proceso de inscripción.

2. Proceso de Inscripción y Pago

●  Flujo de Inscripción (Optimizado en 3 Pasos):

○  Paso 1: Selección de Categoría/Distancia y Datos del Participante.
■  Precarga de datos personales desde el perfil del usuario.
■  Campos para datos esenciales del participante (los mínimos necesarios).
■  Selección de talla de playera (si aplica).

○  Paso 2: Revisión del Pedido.

■  Resumen claro del costo total.
■  Visualización de descuentos aplicados (ej. Asdeporte Plus).
■  Detalle de lo que incluye la inscripción.

○  Paso 3: Pago Seguro.

■  Múltiples opciones de pago seguras (tarjeta de crédito/débito, Oxxo - si se

incluye en MVP).

■  Campos para datos de pago (con indicadores de seguridad).
■  Confirmación final del cobro.

●  Confirmación de Inscripción Exitosa:

○  Pantalla de confirmación inmediata post-pago.
○  Envío automático de email de confirmación detallado.
○  Visualización instantánea de la inscripción en la sección "Mis Eventos Activos"

del perfil.

3. Perfil del Usuario Atleta

●  Gestión de Datos Personales:

○  Visualización y edición de datos básicos (nombre, email, fecha de nacimiento,

etc.).

○  Gestión de contraseña.

●  Mis Eventos Activos:

○  Listado de eventos a los que el usuario está inscrito próximamente.
○  Acceso rápido a la información detallada de cada evento activo.
○  Acceso al comprobante de inscripción/pago.

●  Mi Historial AsDeporte / Resultados:

○  Listado de eventos pasados en los que el usuario ha participado a través de

AsDeporte.

○  Visualización de resultados personales para cada evento pasado.
○  Búsqueda/filtro simple de resultados por nombre de evento o fecha.
○

(SHOULD HAVE) Acceso a sección pública de resultados con filtros más
avanzados.

●  Hub de Beneficios Asdeporte Plus:

○  Visualización clara del estado de la membresía Plus y fecha de expiración.
○  Lista consolidada de beneficios activos (descuentos, seguro, InBody, etc.).
○
○  Acceso al "Wallet" (si aplica y es relevante para el MVP).

Información sobre cómo acceder o canjear cada beneficio.

●

(SHOULD HAVE) Integración Básica con Wearables:
○  Opción para conectar con 1-2 plataformas populares (ej. Garmin, Strava).
○  Visualización de un resumen de actividad reciente (ej. últimos entrenamientos)

en el perfil.

4. Notificaciones

●  Sistema de Notificaciones (Push en App y Email):

○  Notificaciones de confirmación de inscripción y pago.
○  Recordatorios de eventos próximos (entrega de kits, día del evento).
○  Alertas sobre cambios críticos en eventos (cancelación, cambio de

fecha/lugar).

○  Confirmaciones de acciones en la cuenta (ej. cambio de contraseña).

5. Contenido Adicional y Soporte

●

Información Institucional Básica:
○  Acerca de AsDeporte.
○  Contacto / Soporte al Cliente.
○  Preguntas Frecuentes (FAQs) - especialmente para principiantes y sobre

procesos clave.

○  Términos y Condiciones.
○  Política de Privacidad.
●  Guías para Principiantes:

○  Contenido introductorio sobre el mundo de las carreras.
○  Explicaciones sencillas de terminología común.
○  Guías sobre qué esperar en un evento (entrega de kits, día de la carrera).
(COULD HAVE) Funcionalidad de Seguimiento en Vivo (Livetracking):
○  Visualización del progreso del atleta durante el evento (con mejoras de

fiabilidad).

(COULD HAVE) Descarga de Eventos a Calendario Personal:
○  Opción para añadir eventos inscritos al calendario personal del usuario (iCal).

●

●

Funcionalidades Excluidas del MVP (WON'T HAVE)

●  Funcionalidad "Tribu" renovada como red social compleja.
●  Gestión de inscripciones grupales compleja.
●  Marketplace de productos y servicios deportivos.
●  Gamificación avanzada.
●  Personalización extrema de contenido o recomendaciones basadas en IA.
●  Funcionalidades B2B avanzadas (más allá de una posible visualización básica si el

mismo usuario es organizador).

Este inventario proporciona una visión detallada de los elementos que deberán ser
diseñados y desarrollados para el MVP B2C, sirviendo como el conjunto de bloques de

construcción para la Arquitectura de la Información.

