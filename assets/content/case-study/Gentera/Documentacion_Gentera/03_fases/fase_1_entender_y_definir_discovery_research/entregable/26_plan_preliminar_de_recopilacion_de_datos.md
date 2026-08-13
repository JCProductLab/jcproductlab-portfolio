Plan Preliminar de Recopilación de Datos - Proyecto GAC

Fecha: 21 de Mayo de 2025 (Simulada)
Versión: 1.0
Objetivo: Establecer los pasos necesarios para recopilar los datos de línea base del proceso
actual y definir cómo se realizará el seguimiento de las métricas de éxito del proyecto GAC una
vez implementada la plataforma.
1. Introducción

Este documento describe el plan preliminar para la recopilación de datos del proyecto
GAC. Es fundamental para asegurar que las métricas de éxito definidas puedan ser
medidas de manera precisa, permitiendo evaluar el impacto de la plataforma y
demostrar el valor aportado a Gentera. El plan se divide en la obtención de líneas base
del proceso actual y la recopilación de datos post-lanzamiento de GAC.

2. Recopilación de Datos de Línea Base (Proceso Actual)

Para las métricas operativas donde existe un proceso manual actual, es crucial
establecer una línea base que permita cuantificar la mejora tras la implementación de
GAC.

2.1. Tiempo de Generación de Listas Semanales

●  Descripción: Medir el tiempo que Carlos (Administrador de Capacitación) dedica

semanalmente a la creación y segmentación de listas de capacitación.

●  Método de Recopilación:

○  Observación Cronometrada: Realizar al menos 2-3 sesiones de observación

detallada del proceso completo de Carlos (idealmente los jueves),
cronometrando cada fase (limpieza, cruce, segmentación, envío de
comunicaciones).

○  Entrevistas Complementarias: Entrevistar a Carlos para estimar el tiempo

total dedicado, incluyendo tareas no directamente observables (ej.
correcciones, comunicaciones adicionales, resolución de inconsistencias).
●  Responsable: Product Designer Dacodes (para la observación y entrevistas).
●  Plazo: Dentro de las primeras 2-3 semanas de la Fase 1: Entender y Definir.

2.2. Tasa de Error en Convocatorias

●  Descripción: Cuantificar la frecuencia de errores en las convocatorias generadas

manualmente.

●  Método de Recopilación:

○  Análisis de Registros Existentes: Revisar si Gentera mantiene algún registro

de quejas, correcciones o reprocesos relacionados con errores en
convocatorias pasadas.

○  Estimación por Carlos: Obtener una estimación de Carlos sobre la frecuencia

y el tipo de errores más comunes que ocurren actualmente.
●  Responsable: Product Designer Dacodes / Carlos (Administrador de

Capacitación).

●  Plazo: Durante la fase de investigación inicial (Actividad 2 y 4).

2.3. Satisfacción del Administrador de Capacitación (Carlos)

●  Descripción: Evaluar el nivel de satisfacción actual de Carlos con el proceso

manual.

●  Método de Recopilación:

○  Entrevistas Cualitativas: Durante las entrevistas de profundización, capturar

sus sentimientos, frustraciones y nivel de estrés con el proceso actual.

○  Escala Percibida: Pedirle que califique su satisfacción actual en una escala (ej.

1-5) para establecer una línea base subjetiva.

●  Responsable: Product Designer Dacodes.
●  Plazo: Durante las entrevistas iniciales con stakeholders.

2.4. Satisfacción del Colaborador con la Trazabilidad

●  Descripción: Evaluar el nivel de satisfacción actual de los colaboradores con la

visibilidad y claridad de su ruta de capacitación y progreso.

●  Método de Recopilación:

○  Entrevistas Cualitativas: Durante las entrevistas con colaboradores, capturar

sus percepciones sobre la claridad de su ruta, la facilidad para obtener
información y sus frustraciones.
●  Responsable: Product Designer Dacodes.
●  Plazo: Durante las entrevistas iniciales con usuarios.

3. Recopilación de Datos del Sistema GAC (Post-Lanzamiento)

Una vez que la plataforma GAC esté implementada y en operación, se activarán los
siguientes métodos de recopilación de datos para monitorear las métricas definidas.

3.1. Analíticas de la Plataforma

●  Métricas a Medir:

○  Tasa de Adopción de Administradores
○  Usuarios Activos por Rol (Colaboradores, Líderes, Formadores)

○  Frecuencia de Consulta de Progreso (Colaboradores)
○  Tiempo de Procesamiento de Plantilla en GAC
○  Tiempo de Generación de Listas Semanales (automatizado)
○  Tiempo de Respuesta de la Plataforma

●  Método de Recopilación: Implementación de herramientas de analítica web (ej.
Google Analytics o una herramienta interna de Gentera) y/o desarrollo de logs
personalizados dentro de la aplicación GAC.
○  Los logs registrarán eventos clave como inicios de sesión, carga de archivos,

clics en botones de generación/envío, y tiempos de respuesta de las
funcionalidades críticas.

●  Requisitos para GAC: La plataforma GAC deberá ser diseñada para capturar y

exponer estos datos a través de logs o un módulo de reportes internos.
●  Responsable: Líder Técnico Dacodes (implementación); Líder de Proyecto

Gentera (monitoreo y reporte).

3.2. Encuestas de Satisfacción

●  Métricas a Medir:

○  Satisfacción del Administrador de Capacitación
○  Satisfacción del Colaborador con la Trazabilidad
○  System Usability Scale (SUS)

●  Método de Recopilación: Diseño y administración de encuestas periódicas (ej.

Google Forms, Typeform).
○  Frecuencia: Trimestral para administradores, semestral para colaboradores y

líderes. SUS anualmente.

○  Distribución: Vía correo electrónico o enlaces dentro de la plataforma GAC.
●  Responsable: Product Designer Dacodes (diseño de encuestas, análisis); Líder de

Proyecto Gentera (administración).

3.3. Sistema de Seguimiento de Incidencias

●  Métricas a Medir:

○  Tasa de Error en Convocatorias (post-lanzamiento)
○  Número de Incidencias Críticas/Altas
○  Precisión de la Automatización de Elegibles (a través de la clasificación de

errores)

●  Método de Recopilación: Utilización de una herramienta de seguimiento de
incidencias (ej. Jira, si Gentera/Dacodes la usa). Los usuarios reportarán
problemas, que serán clasificados y cuantificados.

●  Responsable: Líder Técnico Dacodes (gestión del sistema); Equipo de Soporte

(registro de incidencias).

3.4. Monitoreo de Infraestructura

●  Métricas a Medir:

○  Disponibilidad de la Plataforma (Uptime)
○  Tiempo de Respuesta de la Plataforma (a nivel de servidor)

●  Método de Recopilación: Implementación de herramientas de monitoreo de red y

servidores (ej. Nagios, Prometheus, o servicios de monitoreo de la nube).

●  Responsable: Líder Técnico Dacodes / TI Gentera.

4. Calendario Preliminar de Recopilación y Reporte

●  Fase 1 (Entender y Definir):

○  Semanas 1-3: Recopilación de Líneas Base (observación, entrevistas iniciales).

●  Post-Lanzamiento de GAC:

○  Semanal:

■  Revisión de Tiempo de Procesamiento de Plantilla en GAC.
■  Monitoreo de Número de Incidencias Críticas/Altas.

○  Mensual:

■  Revisión de Tiempo de Generación de Listas Semanales.
■  Análisis de Tasa de Error en Convocatorias.
■  Reporte de Tasa de Adopción de Administradores y Usuarios Activos por

Rol.

■  Monitoreo de Disponibilidad de la Plataforma (Uptime) y Tiempo de

Respuesta de la Plataforma.

○  Trimestral:

■  Encuesta de Satisfacción del Administrador de Capacitación.
■  Revisión de Precisión de la Automatización de Elegibles.

○  Semestral:

■  Encuesta de Satisfacción del Colaborador con la Trazabilidad.

○  Anual:

■  Evaluación System Usability Scale (SUS).
■  Revisión integral de todas las métricas y ajuste de objetivos si es necesario.

