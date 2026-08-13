Listado de Pantallas Identificadas - Plataforma GAC

Este documento presenta un inventario de todas las pantallas o vistas únicas que se
han identificado como necesarias para la plataforma de Gestión Automatizada de la
Capacitación (GAC), derivado directamente del diseño de los Flujos de Usuario (User
Flows) y la Arquitectura de Información (AI) previamente establecida.

Este listado servirá como una base fundamental para la creación de los wireframes
detallados en la siguiente etapa del proceso de diseño.

1. Pantallas de Autenticación y Acceso

●  Login: Pantalla inicial para que los usuarios ingresen sus credenciales.

2. Dashboards Principales (Personalizados por Rol)

●  Dashboard de Administrador: Vista resumen para Carlos, con estado de

procesos de gestión de listas, envíos y alertas.

●  Dashboard de Colaborador: Vista resumen para Ana, con mapa visual de su ruta,

% de avance y próximos cursos.

●  Dashboard de Líder: Vista resumen para David, con avance de su equipo y acceso

a reportes.

●  Dashboard de Formador: Vista resumen para Elena, con agenda de cursos

asignados y resumen de grupos.

●  Dashboard de Super Admin: Vista resumen para el Super Admin, con actividad

del sistema y estado de actualizaciones.

3. Pantallas del Módulo de Gestión de Plantillas y Datos (Administrador)

●  Gestión de Datos - Cargar Plantilla: Interfaz para subir el archivo Excel de la

plantilla semanal.

●  Resumen de Procesamiento de Plantilla: Muestra el estado de la carga y el

procesamiento, incluyendo métricas e inconsistencias detectadas.

●  Reporte Detallado de Errores/Inconsistencias: Vista detallada de los errores

encontrados durante el procesamiento de la plantilla.

●  Historial de Cargas: Tabla con registros de cargas de plantillas anteriores.

4. Pantallas del Módulo de Segmentación y Gestión de Grupos (Administrador)

●  Gestión de Grupos - Propuestas de Grupos: Muestra las propuestas de grupos

generadas automáticamente, con opciones de filtrado.

●  Detalle y Ajuste de Grupo: Vista detallada de un grupo específico, con lista de

participantes, alertas de cupo y herramientas de ajuste.

●  Crear Grupo Manualmente: (Opcional, para casos excepcionales no cubiertos

por la automatización).

5. Pantallas del Módulo de Asignación de Recursos (Administrador y Líder
Operativo)

●  Asignación de Formadores - Grupos Pendientes de Asignación: Vista de los

grupos que aún no tienen un formador asignado.

●  Detalle de Grupo para Asignación: Interfaz para que el Líder Operativo asigne un
formador a un grupo específico, con información de formadores disponibles.

6. Pantallas del Módulo de Comunicaciones Automatizadas (Administrador)

●  Comunicaciones - Enviar Convocatorias: Interfaz para seleccionar canales de

envío y disparar el envío masivo de invitaciones.

●  Confirmación de Envío / Estado del Envío: Muestra el resultado del proceso de

envío de comunicaciones.

●  Reporte de Errores de Envío: (Si aplica) Detalle de comunicaciones que no

pudieron ser enviadas.

●  Gestión de Plantillas de Comunicación: (Si aplica) Interfaz para editar las

plantillas de correo/mensaje.

●  Historial de Envíos: (Si aplica) Registro de convocatorias enviadas.

7. Pantallas del Módulo de Trazabilidad de la Capacitación (Colaborador)

●  Mi Ruta de Capacitación - Mapa Visual: Representación gráfica de la ruta de

capacitación del colaborador y su progreso.

●  Detalle de Hito/Curso (Colaborador): Vista detallada de un curso o hito

específico en la ruta del colaborador.

●  Mis Cursos - Próximos Cursos Programados: Lista de los cursos a los que el

colaborador está asignado.

●  Mis Cursos - Historial de Cursos Completados: Tabla con el registro de cursos

finalizados por el colaborador.

●  Notificaciones - Bandeja de Notificaciones: Centro de alertas y mensajes para el

colaborador.

●  Notificaciones - Configuración de Preferencias: Permite al colaborador elegir

cómo recibir las notificaciones.

8. Pantallas del Módulo de Mi Equipo (Líder)

●  Mi Equipo - Resumen de Avance de Colaboradores: Dashboard principal del

líder con el progreso de su equipo.

●  Mi Equipo - Detalle de Colaborador (Vista Líder): Vista detallada de la ruta y
progreso de un colaborador específico (similar a la vista de Ana, pero accesible
desde el perfil de Líder).

9. Pantallas del Módulo de Reportes de Equipo (Líder)

●  Reportes de Equipo - Generar Reporte: Interfaz para seleccionar tipo de reporte

y filtros.

●  Reportes de Equipo - Previsualización del Reporte: Muestra el reporte antes de

la descarga.

10. Pantallas del Módulo de Mi Agenda (Formador)

●  Mi Agenda - Calendario de Cursos Asignados: Calendario visual de los cursos

que el formador impartirá.

●  Mi Agenda - Próximos Grupos: Lista de los próximos grupos asignados al

formador.

●  Detalle de Curso Asignado (Formador): Vista detallada de un curso asignado,

con lista de participantes.

11. Pantallas del Módulo de Mis Grupos (Formador)

●  Mis Grupos - Lista de Grupos Asignados: Tabla con todos los grupos asignados

al formador.

●  Registrar Asistencia para Grupo: Interfaz para marcar la asistencia de los

participantes y añadir notas.

12. Pantallas del Módulo de Reportes de Avance (Formador)

●  Reportes de Avance - Dashboard de Avance por Formador: Resumen visual del

progreso de los colaboradores atendidos por el formador.

13. Pantallas del Módulo de Reportes y Dashboards (Administrador)

●  Reportes y Dashboards - Dashboard de Indicadores Clave: Panel con KPIs

generales de capacitación.

●  Reportes y Dashboards - Concentrado de Colaboradores con Estatus: Tabla

de datos exportable de todos los colaboradores y su estatus.

●  Reportes y Dashboards - Reportes Personalizados: Interfaz para crear y

gestionar reportes a medida.

14. Pantallas del Módulo de Gestión de Usuarios y Sistema (Super Admin)

●  Gestión de Usuarios - Lista de Usuarios: Tabla para ver y gestionar usuarios del

sistema.

●  Gestión de Usuarios - Crear Nuevo Usuario: Formulario para dar de alta nuevos

usuarios.

●  Gestión de Usuarios - Editar Usuario: Formulario para modificar datos y

permisos de usuarios existentes.

●  Configuración del Sistema - Carga de Archivos Maestros: Interfaz para subir

tablas de configuración (ej. sedes, mapeos).

●  Configuración del Sistema - Gestión de Reglas de Negocio: (Si se implementa)

Interfaz para ajustar parámetros de reglas.

●  Configuración del Sistema - Configuración de Integraciones: (Si se

implementa) Ajustes para Outlook, Teams, WhatsApp API.

●  Monitoreo y Logs - Logs de Actividad: Vista de la actividad del sistema.
●  Monitoreo y Logs - Logs de Errores: Vista de errores registrados en el sistema.
●  Monitoreo y Logs - Monitoreo de Rendimiento: Gráficos y datos de Uptime y

Tiempos de Respuesta.

