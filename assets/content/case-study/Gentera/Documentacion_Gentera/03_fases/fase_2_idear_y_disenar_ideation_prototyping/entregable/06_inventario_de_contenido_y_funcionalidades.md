Inventario de Contenido y Funcionalidades - Plataforma GAC

Este documento presenta un inventario detallado de todo el contenido (datos,
información) y las funcionalidades que la plataforma de Gestión Automatizada de la
Capacitación (GAC) de Gentera debe albergar. Este inventario es un entregable clave
de la actividad de Arquitectura de Información, sirviendo como una lista exhaustiva de
los elementos a organizar, estructurar y etiquetar para asegurar que los diferentes
roles de usuario puedan encontrar y utilizar la información de manera intuitiva y
eficiente.

Para cada elemento, se considera el rol de usuario principal que lo necesita, su
propósito y su relación con otras funcionalidades o datos dentro del sistema.

1. Módulo de Autenticación y Gestión de Usuarios

●  Contenido:

○  Campo de Usuario (Número de Empleado)
○  Campo de Contraseña (Fecha de Nacimiento)
○  Mensajes de Error de Autenticación
○  Roles de Usuario (Administrador de Capacitación, Colaborador, Líder de

Equipo, Formador, Super Admin)

○  Perfiles de Usuario (Datos básicos: Nombre, Puesto, Subdirección, Correo, etc.)

●  Funcionalidades:

○  RF-GAC-024: Autenticación de Usuarios: Acceso a la plataforma mediante

Número de Empleado y Fecha de Nacimiento, redirigiendo a la vista
correspondiente al rol.

○  RF-GAC-026: Gestión de Permisos de Super Admin: El Super Admin puede

dar de alta y gestionar otros usuarios y roles.

2. Módulo de Carga y Procesamiento de Datos (Vista Administrador)

●  Contenido:

○  Plantilla de Capacitación (archivo Excel de ADN)
○  Historial de Cargas de Plantillas (Fecha, Usuario, Estado, Reporte de Errores)
○  Resumen de Procesamiento (Total de Colaboradores Procesados, Elegibles

Identificados, Inconsistencias Detectadas)

○  Reporte Detallado de Errores/Inconsistencias (Tipo de error, Colaborador

afectado, Sugerencia de corrección)

○  Datos de Colaboradores (Nombre, Nómina, Puesto, Subdirección, Fecha de

Contratación, Eventos, Estatus, Ubicación, etc.)

○  Datos de Concentrado Histórico (Historial de capacitación desde 2023)

●  Funcionalidades:

○  RF-GAC-001: Carga y Limpieza Automática de Plantilla: Subir archivo Excel,
procesamiento automático (limpieza, exclusión de "Baja", "SEAS México", "IPP").

○  RF-GAC-002: Identificación de Nuevos Ingresos y Reingresos:

Identificación automática y determinación del punto de inicio en la ruta (regla
de 6 meses).

○  RF-GAC-003: Consideración de Faltas Justificadas Anteriores:
Identificación de faltas justificadas para reprogramación prioritaria.
○  RF-GAC-004: Manejo de Cambios de Puesto: Gestión automática de

elegibilidad y punto de inicio según promoción, democión o cambio lateral.

○  RF-GAC-025: Actualización Semanal de la Base de Datos Principal: El

Super Admin puede cargar la plantilla semanalmente para actualizar la base de
datos principal.

3. Módulo de Segmentación y Gestión de Grupos (Vista Administrador)

●  Contenido:

○  Propuestas de Grupos de Capacitación (Nombre del grupo, Participantes,

Sede, Horario, Formador Sugerido)

○  Listas de Participantes por Grupo (Nombre, Nómina, Puesto, Oficina)
○  Alertas de Cupo (Mínimo no alcanzado, Máximo excedido)
○  Sugerencias de Acción para Grupos (Fusionar, Dividir, Posponer, Buscar más)
○

Información de Sedes y Hoteles (Nombre, Dirección, Capacidad,
Disponibilidad)

○  Reglas de Compatibilidad de Puestos (para agrupación)

●  Funcionalidades:

○  RF-GAC-005: Generación Automática de Propuestas de Grupos: Creación
de grupos por Puesto, Subdirección, respetando cupos (presencial 5-25, online
10-15).

○  RF-GAC-006: Aplicación de Lógica "Gerente Multiproducto": Asignación
automática a la ruta correcta basada en la presencia de "Asesores CIE" en su
oficina.

○  RF-GAC-007: Asignación Automatizada de Sede: Priorización de Sede

Opción 1 y uso de Opción 2 si no es viable.

○  RF-GAC-008: Gestión de Grupos con Problemas de Cupo: Alertas y

sugerencias de acciones para grupos que no cumplen cupos.
Interfaz de Ajuste Manual de Grupos (ej. arrastrar y soltar participantes).

○

4. Módulo de Asignación de Recursos (Formadores)

●  Contenido:

○  Grupos Pendientes de Asignación de Formador (Nombre del grupo, Detalles

del curso, Colaboradores)

○  Lista de Formadores (Nombre, Especialización, Ubicación, Carga de Trabajo

Actual, Disponibilidad)

○  Agenda de Formador (Cursos asignados, Fechas, Horarios, Sedes/Enlaces,

Listas de Participantes)

●  Funcionalidades:

○  RF-GAC-009: Visibilidad de Grupos Pendientes de Asignación: Para

Líderes Operativos, ver grupos sin formador asignado.

○  RF-GAC-010: Interfaz para Asignación de Formadores: Para Líderes

Operativos, seleccionar y asignar formadores a grupos con visibilidad de su
información.

○  RF-GAC-011: Agenda de Cursos para Formadores: Para Formadores,
visualizar su agenda personalizada con detalles de los grupos asignados.

5. Módulo de Comunicaciones Automatizadas

●  Contenido:

○  Plantillas de Correo para Gerentes (con lista de equipo convocado)
○  Plantillas de Notificación para Colaboradores (Teams/WhatsApp)
○  Archivos .ical generados automáticamente (detalles de curso)
○  Estado de Envío de Comunicaciones (Enviado, Error, Pendiente)

●  Funcionalidades:

○  RF-GAC-021: Envío Automatizado de Convocatorias a Gerentes: Envío de

correos con lista de equipo convocado.

○  RF-GAC-022: Envío Automatizado de Invitaciones a Colaboradores

(Teams/WhatsApp): Envío de invitaciones con .ical adjunto.

6. Módulo de Trazabilidad de la Capacitación (Vistas Colaborador, Líder,
Formador)

●  Contenido:

○  Ruta de Capacitación del Colaborador (Mapa visual de niveles: Básico,

Intermedio, Avanzado, Experto)

○  Progreso del Colaborador (% de Avance, Cursos Completados, Cursos en

Progreso, Cursos Pendientes)

○  Detalle de Hitos de la Jornada de Capacitación

○  Historial de Cursos Tomados (Nombre del curso, Fecha, Calificación, Estatus)
○

Información de "Toques con Formador" (Niveles 1, 4, 8, 12)
○  Estatus General del Colaborador ("Acreditado", "En Progreso")
○  Resumen de Avance por Equipo/Unidad/Subdirección/Dirección (para Líderes)
○  Alertas de Retraso o Hitos Importantes (para Colaboradores y Líderes)
○  Dashboard de Avance por Formador (Progreso de colaboradores atendidos)
○  Datos de Estatus de Etapas (de tablas Excel externas: Concentrado, Líderes

Formadores, Sedes/Hoteles, Yastás)

●  Funcionalidades:

○  RF-GAC-012: Visualización de la Ruta de Capacitación: Colaborador ve su

estatus y progreso de forma amigable.

○  RF-GAC-013: Identificación de "Toques con Formador" y Registro: Sistema

identifica y permite registro de asistencia/calificación.

○  RF-GAC-014: Cálculo y Visualización del Estatus de Avance: Cálculo de %

de avance y estatus ("Acreditado"/"En Progreso").

○  RF-GAC-015: Mapeo Automático de Puestos a Rutas: Asignación de ruta

específica por puesto (con excepciones).

○  RF-GAC-016: Consumo de Datos Externos de Estatus: Administrador carga

tablas Excel para complementar información.

○  RF-GAC-017: Resumen de Estatus para Líderes de Equipo: Líderes ven el

avance de sus colaboradores.

○  RF-GAC-018: Resumen de Estatus para Subdirectores/Directores:

Subdirectores/Directores ven el avance de sus áreas con filtros.

○  RF-GAC-019: Dashboard y Reporte de Avance por Formador: Formadores

ven el avance de colaboradores de su subdirección.

○  RF-GAC-023: Notificaciones de Retraso y Hitos Importantes:

Notificaciones proactivas para colaboradores y líderes.
○  Registro de Asistencia por Formador (en la plataforma).
○  Campo de Feedback General del Grupo (para Formadores).

7. Módulo de Dashboards y Reportes

●  Contenido:

○

Indicadores Clave de Capacitación (% Asistencia, Calificación Promedio, %
Avance por Usuario/Grupo/Dirección)

○  Concentrado de Colaboradores con Estatus de Ruta (exportable)
○  Filtros de Reporte (por Dirección, Oficina, Puesto, Formador, Fechas)
○  Reportes Personalizables (ej. Avance por Oficina, Colaboradores Retrasados)

●  Funcionalidades:

○  RF-GAC-020: Dashboard de Indicadores Clave de Capacitación:

Administrador visualiza KPIs y descarga concentrados.

○  Generación de Reportes bajo Demanda (para Líderes y Formadores).
○  Exportación de Datos a Excel (para todos los dashboards y reportes).

8. Módulo de Configuración del Sistema (Vista Super Admin)

●  Contenido:

○  Gestión de Usuarios (Alta, Baja, Modificación de usuarios del sistema)
○  Gestión de Roles y Permisos
○  Archivos Maestros (ej. Mapeo Puesto-Ruta, Reglas de Exclusión, Sedes)
○  Logs de Actividad y Errores del Sistema

●  Funcionalidades:

○  RF-GAC-026: Gestión de Permisos de Super Admin: Acceso completo a
todas las funcionalidades, alta de usuarios, carga de archivos maestros.
○  Gestión de Reglas de Negocio (Configuración de parámetros de reglas, si se

implementa).

○  Monitoreo del Rendimiento del Sistema (Uptime, Tiempos de Respuesta).

