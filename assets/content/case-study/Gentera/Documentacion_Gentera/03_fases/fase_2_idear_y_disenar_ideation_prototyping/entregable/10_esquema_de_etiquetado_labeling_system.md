Esquema de Etiquetado (Labeling System) - Plataforma GAC

Este documento define el sistema de etiquetado para la plataforma de Gestión
Automatizada de la Capacitación (GAC). El objetivo es establecer un vocabulario claro,
conciso y consistente para todas las secciones, subsecciones, enlaces de navegación,
botones y elementos de interfaz. Esto asegura que los usuarios de Gentera puedan
comprender y navegar la plataforma de manera intuitiva, utilizando una terminología
familiar y evitando ambigüedades.

Principios del Etiquetado:

●  Claridad: Las etiquetas deben ser fáciles de entender y no dejar lugar a dudas

sobre su función.

●  Concisión: Utilizar el menor número de palabras posible sin sacrificar la claridad.
●  Consistencia: Usar la misma etiqueta para la misma funcionalidad o concepto en

toda la plataforma.

●  Familiaridad: Priorizar la terminología ya utilizada por Gentera y sus colaboradores

en el contexto de capacitación.

●  Orientación a la Acción/Contenido: Las etiquetas deben indicar claramente qué

es el contenido o qué acción se realizará.

1. Navegación Principal (Menú Lateral)

●

Inicio (o Dashboard)

●  Mi Perfil
●  Notificaciones
●  Ayuda y Soporte
●  Cerrar Sesión
●  Administrador (Carlos):
○  Gestión de Datos
○  Gestión de Grupos
○  Asignación de Formadores
○  Comunicaciones
○  Reportes y Dashboards

●  Colaborador (Ana):

○  Mi Ruta de Capacitación
○  Mis Cursos

●  Líder (David):
○  Mi Equipo
○  Reportes de Equipo

●  Formador (Elena):
○  Mi Agenda
○  Mis Grupos
○  Reportes de Avance

●  Super Admin:

○  Gestión de Usuarios
○  Configuración del Sistema
○  Monitoreo y Logs

2. Módulo de Autenticación y Usuarios

●  Título de Pantalla: Iniciar Sesión
●  Campos:

○  Usuario (Número de Empleado)
○  Contraseña (Fecha de Nacimiento)

●  Botones:

○

Iniciar Sesión

○  ¿Olvidaste tu contraseña? (Enlace, si se implementa)

●  Mensajes de Error:

○  Usuario o contraseña incorrectos.
○  Campo obligatorio.
○  Acceso denegado.

3. Módulo de Carga y Procesamiento de Datos (Administrador)

●  Título de Sección: Gestión de Datos
●  Pestañas/Subsecciones:

○  Cargar Plantilla
○  Historial de Cargas
○  Reporte de Errores

●  Elementos en "Cargar Plantilla":

○  Título: Cargar Nueva Plantilla de Capacitación
○  Botón: Subir Plantilla ADN (Excel)
○  Área: Arrastra y suelta tu archivo aquí
Indicador: Procesando plantilla...
○

○  Mensaje: Carga exitosa.

●  Elementos en "Historial de Cargas":

○  Tabla: Fecha, Archivo, Usuario, Estado, Acciones
○  Botón: Ver Reporte de Errores
●  Elementos en "Reporte de Errores":

○  Título: Inconsistencias Detectadas
○  Tabla: Tipo de Error, Colaborador, Descripción, Sugerencia
○  Botón: Descargar Reporte

4. Módulo de Segmentación y Gestión de Grupos (Administrador)

●  Título de Sección: Gestión de Grupos
●  Pestañas/Subsecciones:
○  Propuestas de Grupos
○  Crear Grupo Manual

●  Elementos en "Propuestas de Grupos":

○  Título: Grupos Propuestos para la Semana [Número/Fecha]
○  Botón: Generar Grupos (si es un paso manual)
○  Filtros: Puesto, Subdirección, Tipo de Curso
○  Tarjeta/Bloque de Grupo:

■  Nombre del Grupo (ej. Básico Ventas - Región Norte)
■  Participantes: [Número] / [Cupo Máximo]
■  Sede: [Nombre de Sede]
■  Horario: [Días y Horas]
■  Formador Sugerido: [Nombre]
■  Botón: Ver Detalles y Ajustar

○  Mensaje de Alerta: Cupo Mínimo No Alcanzado
○  Mensaje de Alerta: Cupo Máximo Excedido
○  Sugerencia: Fusionar Grupo, Dividir Grupo, Posponer

●  Elementos en "Detalle y Ajuste de Grupo":

○  Título: Detalle del Grupo: [Nombre del Grupo]
○  Tabla: Lista de Participantes (Nombre, Nómina, Puesto, Estatus)
○  Botones: Añadir Participante, Eliminar Participante, Mover a Otro Grupo
○  Etiqueta: Gerente Multiproducto (con explicación al pasar el cursor)

5. Módulo de Asignación de Recursos (Administrador y Líder Operativo)

●  Título de Sección (Administrador): Asignación de Formadores
●  Título de Sección (Líder Operativo): Asignación de Formadores
●  Elementos en Dashboard de Asignación (Administrador/Líder Operativo):

○  Título: Grupos Pendientes de Asignación
○  Gráfico: Carga de Trabajo de Formadores
○  Tabla: Formadores Disponibles (con carga, especialización, ubicación)
○  Botón: Notificar Líderes Operativos (para Admin)

●  Elementos en "Detalle de Grupo para Asignación" (Líder Operativo):

○  Título: Asignar Formador a Grupo: [Nombre del Grupo]
○  Campo de Selección: Seleccionar Formador
○  Botón: Asignar Formador

6. Módulo de Comunicaciones Automatizadas (Administrador)

●  Título de Sección: Comunicaciones
●  Pestañas/Subsecciones:
○  Enviar Convocatorias
○  Historial de Envíos
○  Plantillas de Comunicación

●  Elementos en "Enviar Convocatorias":
○  Título: Enviar Invitaciones Semanales
○  Casillas de Verificación: Enviar a Gerentes (Outlook), Enviar a Colaboradores

(Teams), Enviar a Colaboradores (WhatsApp)

○  Área: Previsualización de Invitación
○  Botón: Enviar Todo
○  Mensaje: Convocatorias enviadas exitosamente.

7. Módulo de Trazabilidad de la Capacitación (Colaborador)

●  Título de Sección: Mi Ruta de Capacitación
●  Elementos en Dashboard Personal:
○  Título: Mi Ruta de Capacitación
○

Indicador: % de Avance
○  Sección: Próximos Cursos
○  Sección: Cursos Completados
○  Botón: Ver Historial Completo

●  Elementos en "Detalle de Curso":

○  Título: Detalle del Curso: [Nombre del Curso]
○  Campos: Fecha, Hora, Sede/Enlace, Formador, Temario
○

Indicador: Estatus: Completado / En Progreso / Pendiente

○  Botón: Añadir a Calendario (.ical)

8. Módulo de Mi Equipo (Líder)

●  Título de Sección: Mi Equipo
●  Elementos en Dashboard de Equipo:

○  Título: Avance de Capacitación de Mi Equipo
○  Tabla/Tarjetas: Nombre, Puesto, % Avance, Estatus General (Al Día / Retrasado /

Pendiente)

○  Filtros: Oficina, Estatus, % Avance
○  Botón: Ver Detalle (para cada colaborador)

●  Elementos en "Detalle de Colaborador" (desde Líder):

○  Título: Ruta de Capacitación de [Nombre del Colaborador]
○

(Contenido similar a la vista de "Mi Ruta de Capacitación" del colaborador)

9. Módulo de Mi Agenda (Formador)

●  Título de Sección: Mi Agenda
●  Elementos:

○  Calendario de Cursos Asignados
○  Título: Próximos Grupos Asignados
○  Tarjeta/Bloque de Grupo: Nombre del Grupo, Fecha, Hora, Sede/Enlace
○  Botón: Ver Lista de Participantes

10. Módulo de Mis Grupos (Formador)

●  Título de Sección: Mis Grupos
●  Elementos:

○  Tabla: Lista de Grupos Asignados (Nombre del Grupo, Fecha, Estatus)
○  Botón: Abrir Grupo y Registrar Asistencia

●  Elementos en "Registro de Asistencia":

○  Título: Registrar Asistencia para Grupo: [Nombre del Grupo]
○  Tabla: Participantes (Nombre, Nómina)
○  Casilla: Presente / Ausente (para cada participante)
○  Campo: Notas / Feedback General del Grupo
○  Botón: Guardar Asistencia

11. Módulo de Reportes y Dashboards (Administrador, Líder, Formador)

●  Título de Sección (Administrador): Reportes y Dashboards
●  Título de Sección (Líder): Reportes de Equipo
●  Título de Sección (Formador): Reportes de Avance
●  Elementos en Dashboard de Indicadores Clave (Administrador):
○  Gráficos: % Asistencia, Calificación Promedio, % Avance General
○  Filtros: Dirección, Nivel, Fechas
○  Botón: Descargar Concentrado de Colaboradores

●  Elementos en Generación de Reportes (Líder/Formador):

○  Título: Generar Reporte
○  Campo de Selección: Tipo de Reporte (ej. Avance por Oficina, Colaboradores

Retrasados, Avance por Curso)

○  Filtros: Unidad, OS, Subdirección, Dirección, Fechas
○  Botón: Generar Reporte
○  Botón: Exportar a Excel

12. Módulo de Gestión de Usuarios y Sistema (Super Admin)

●  Título de Sección: Gestión de Usuarios
●  Elementos:

○  Tabla: Lista de Usuarios (Nombre, Rol, Estatus)
○  Botón: Crear Nuevo Usuario
○  Botón: Editar Usuario
○  Botón: Desactivar Usuario

●  Título de Sección: Configuración del Sistema
●  Elementos:

○  Subsección: Carga de Archivos Maestros

■  Botón: Cargar Sedes y Hoteles
■  Botón: Cargar Mapeo Puesto-Ruta

○  Subsección: Gestión de Reglas de Negocio (Interfaces para ajustar

parámetros)

○  Subsección: Configuración de Integraciones (Outlook, Teams, WhatsApp API)
○  Subsección: Gestión de Plantillas de Comunicación

●  Título de Sección: Monitoreo y Logs
●  Elementos:

○  Tabla: Logs de Actividad
○  Tabla: Logs de Errores
○  Gráficos: Uptime de la Plataforma, Tiempos de Respuesta

Este esquema de etiquetado servirá como una guía fundamental para el diseño de los
wireframes y la interfaz de usuario, garantizando la consistencia y la claridad en toda la
plataforma GAC.

