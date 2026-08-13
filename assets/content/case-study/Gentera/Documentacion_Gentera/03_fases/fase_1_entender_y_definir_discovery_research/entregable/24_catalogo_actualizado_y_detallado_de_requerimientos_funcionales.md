Catálogo Actualizado y Detallado de Requerimientos
Funcionales - Proyecto GAC

Fecha: 21 de Mayo de 2025 (Simulada)
Versión: 1.0
Objetivo: Describir en detalle lo que el sistema GAC debe hacer, basándose en las reglas de
negocio previamente definidas. Estos requerimientos funcionales servirán como la base para
las historias de usuario detalladas en el proceso de desarrollo.
1. Introducción

Este documento detalla los requerimientos funcionales de la plataforma de Gestión
Automatizada de la Capacitación (GAC) de Gentera. Estos requerimientos son una
traducción directa de las reglas de negocio establecidas, especificando las
capacidades que el sistema debe poseer para automatizar y optimizar el proceso de
capacitación.

Cada requerimiento funcional se presenta con un identificador único (RF-GAC-XXX) y
una descripción clara de la funcionalidad esperada.

2. Requerimientos Funcionales por Módulo

2.1. Módulo de Identificación de Colaboradores Elegibles (Desarrollo 1 - F1)

Los requerimientos en esta sección se centran en la capacidad del sistema para
procesar la plantilla de datos y determinar qué colaboradores son elegibles para la
capacitación.

●  RF-GAC-001: Carga y Limpieza Automática de Plantilla

○  Como Administrador de Capacitación, quiero poder cargar la Plantilla de

Capacitación (archivo Excel) semanalmente para que el sistema procese y
limpie automáticamente los datos, identificando y excluyendo colaboradores
con estatus "Baja", de áreas "SEAS México" y con incapacidades "IPP".

●  RF-GAC-002: Identificación de Nuevos Ingresos y Reingresos

○  Como Administrador de Capacitación, quiero que el sistema identifique

automáticamente a los colaboradores como "Nuevos Ingresos" o "Reingresos"
(aplicando la regla de los 6 meses fuera de la empresa) y determine su punto
de inicio en la ruta de capacitación (reiniciar o continuar).
●  RF-GAC-003: Consideración de Faltas Justificadas Anteriores

○  Como Administrador de Capacitación, quiero que el sistema identifique a los
colaboradores que tuvieron una "Falta Justificada" en un curso previo en las

últimas 3 semanas para que sean convocados prioritariamente a ese mismo
curso faltante.

●  RF-GAC-004: Manejo de Cambios de Puesto

○  Como Administrador de Capacitación, quiero que el sistema gestione

automáticamente la elegibilidad y el punto de inicio en la ruta de capacitación
de los colaboradores que han tenido "Promoción", "Democión" o "Cambio
Lateral" de puesto, según las reglas definidas.

2.2. Módulo de Segmentación de Grupos (Desarrollo 1 - F2)

Esta sección describe las funcionalidades para la creación y gestión automatizada de
grupos de capacitación.

●  RF-GAC-005: Generación Automática de Propuestas de Grupos

○  Como Administrador de Capacitación, quiero que el sistema genere

automáticamente propuestas de grupos de capacitación, agrupando a los
colaboradores por Puesto y Subdirección, y respetando los cupos mínimos y
máximos para cursos presenciales (5-25 participantes) y online (10-15
participantes).

●  RF-GAC-006: Aplicación de Lógica "Gerente Multiproducto"

○  Como Administrador de Capacitación, quiero que el sistema aplique la lógica

de "Gerente Multiproducto" para asignar a los gerentes a la ruta de
capacitación correcta (Multiproducto o Grupal), basándose en la presencia de
"Asesores CIE" en su oficina.

●  RF-GAC-007: Asignación Automatizada de Sede

○  Como Administrador de Capacitación, quiero que el sistema asigne

automáticamente la Sede Opción 1 del colaborador para grupos presenciales
y, si no está disponible o no se cumple el cupo, intente asignar la Sede Opción
2.

●  RF-GAC-008: Gestión de Grupos con Problemas de Cupo

○  Como Administrador de Capacitación, quiero que el sistema me alerte sobre
grupos que no cumplen con los cupos mínimos o exceden los máximos, y me
sugiera acciones como cancelar, fusionar, posponer o dividir el grupo.

2.3. Módulo de Asignación de Recursos (Formadores) (Desarrollo 1 - F3)

Los requerimientos para la gestión y asignación de formadores.

●  RF-GAC-009: Visibilidad de Grupos Pendientes de Asignación

○  Como Líder Operativo, quiero poder visualizar fácilmente todos los grupos de

capacitación que no tienen un formador asignado, para identificar

rápidamente los que requieren mi atención.

●  RF-GAC-010: Interfaz para Asignación de Formadores

○  Como Líder Operativo, quiero tener una interfaz en el sistema para seleccionar
y asignar un formador a un grupo de capacitación específico, con visibilidad de
la disponibilidad, especialización, ubicación y carga de trabajo del formador.

●  RF-GAC-011: Agenda de Cursos para Formadores

○  Como Formador, quiero visualizar una Agenda Sencilla en la plataforma con
todos los grupos de capacitación asignados a mi perfil, incluyendo detalles
como fecha, hora, sede/enlace y lista de participantes.

2.4. Módulo de Trazabilidad de la Capacitación (Desarrollo 2)

Requerimientos relacionados con el seguimiento del progreso de la capacitación de los
colaboradores.

●  RF-GAC-012: Visualización de la Ruta de Capacitación

○  Como Colaborador en ruta de capacitación, necesito conocer mi estatus y

progreso en mi Ruta de Capacitación (Básico, Intermedio, Avanzado, Experto,
etc.) de una manera amigable, atractiva y sencilla.

●  RF-GAC-013: Identificación de "Toques con Formador" y Registro

○  Como sistema, GAC debe identificar los niveles 1, 4, 8 y 12 como "Toques con

Formador" y permitir el registro de asistencia y calificación en estos hitos clave.

●  RF-GAC-014: Cálculo y Visualización del Estatus de Avance

○  Como sistema, GAC debe calcular el % de Avance del colaborador en su Ruta

de Capacitación y definir su Estatus como "Acreditado" o "En Progreso",
considerando los cursos completados y niveles acreditados.

●  RF-GAC-015: Mapeo Automático de Puestos a Rutas

○  Como sistema, GAC debe asignar automáticamente una Ruta de Capacitación

específica a cada Puesto de colaborador, gestionando las excepciones
definidas (ej. Gerente de Ventas no toma nivel básico, Gerente Yastás solo nivel
4).

●  RF-GAC-016: Consumo de Datos Externos de Estatus

○  Como Administrador de Capacitación, quiero poder cargar Tablas Excel

existentes (ej. Concentrado, Líderes Formadores, Sedes/Hoteles, Yastás) para
que el sistema GAC tenga información completa del estatus de cada etapa de
la ruta de capacitación.

●  RF-GAC-017: Resumen de Estatus para Líderes de Equipo

○  Como Líder de Unidad/Subgerente/Gerente, me sirve ver el avance de los
colaboradores a mi cargo en su ruta de capacitación, viendo de manera

general en qué parte de la ruta van y conociendo el detalle de cada uno de
ellos.

●  RF-GAC-018: Resumen de Estatus para Subdirectores/Directores

○  Como Subdirector/Director, me sirve ver el avance de los colaboradores de mi
subdirección/dirección en su ruta de capacitación, con la capacidad de filtrar
por oficina y porcentaje de avance.

●  RF-GAC-019: Dashboard y Reporte de Avance por Formador

○  Como Formador, me sirve ver el avance de los colaboradores de la

subdirección que atiendo a través de un dashboard sencillo y tablas filtradas,
con la opción de exportar a formato Excel.

●  RF-GAC-020: Dashboard de Indicadores Clave de Capacitación

○  Como Administrador de Capacitación, requiero visualizar un dashboard con

los principales indicadores de capacitación (% asistencia, calificación
promedio, % avance por usuario) y descargar el concentrado de
colaboradores con sus estatus de la ruta.

2.5. Módulo de Notificaciones y Comunicaciones

Requerimientos para la automatización de las comunicaciones.

●  RF-GAC-021: Envío Automatizado de Convocatorias a Gerentes

○  Como Administrador de Capacitación, quiero que el sistema envíe

automáticamente correos electrónicos a los Gerentes de los colaboradores
convocados, incluyendo la lista de su equipo en un formato predefinido.

●  RF-GAC-022: Envío Automatizado de Invitaciones a Colaboradores

(Teams/WhatsApp)
○  Como Administrador de Capacitación, quiero que el sistema envíe

automáticamente invitaciones a los Colaboradores vía Teams o WhatsApp (si
disponible), incluyendo un archivo .ical generado automáticamente con los
detalles del curso.

●  RF-GAC-023: Notificaciones de Retraso y Hitos Importantes

○  Como usuario del tracking de la capacitación, quiero recibir notificaciones por
WhatsApp (o Teams/correo) si presento (o alguien de mi equipo) un retraso en
mi ruta de capacitación o si se acerca un hito importante.

2.6. Módulo de Gestión de Usuarios y Sistema

Requerimientos para la administración y mantenimiento de la plataforma.

●  RF-GAC-024: Autenticación de Usuarios

○  Como usuario del tracking de la capacitación, quiero ingresar a la solución

utilizando mi Número de Empleado como usuario y mi Fecha de Nacimiento
como contraseña, y que el sistema me redirija a la vista correspondiente a mi
rol.

●  RF-GAC-025: Actualización Semanal de la Base de Datos Principal

○  Como Super Admin de la solución, quiero poder actualizar la base de datos

principal cada semana cargando la Plantilla de Capacitación.

●  RF-GAC-026: Gestión de Permisos de Super Admin

○  Como Super Admin de la solución, quiero tener todos los permisos y

funcionalidades con mi acceso, así como poder dar de alta a otros usuarios y
cargar archivos maestros.

