Documento de Métricas de Éxito Clave del Proyecto GAC

Fecha: 21 de Mayo de 2025 (Simulada)
Versión: 1.0
Objetivo: Definir un conjunto de métricas claras y medibles que se alineen directamente con los
objetivos generales y específicos del proyecto GAC, permitiendo evaluar el impacto y el valor
de la plataforma una vez implementada.
1. Introducción

Este documento detalla las métricas de éxito clave para el proyecto de Gestión
Automatizada de la Capacitación (GAC) de Gentera. Estas métricas han sido definidas
para traducir los objetivos estratégicos del proyecto en indicadores cuantificables que
permitan monitorear el progreso, demostrar el Retorno de la Inversión (ROI) y guiar
futuras decisiones.

Las métricas se han clasificado en categorías operativas, de adopción y uso, de
satisfacción del usuario, y de calidad y cumplimiento, buscando una visión integral del
éxito del proyecto.

2. Métricas de Éxito Clave del Proyecto GAC

2.1. Métricas Operativas (Eficiencia y Precisión)

Tiempo de Generación de Listas Semanales

●  Descripción: Tiempo promedio (en horas/minutos) que el Administrador de
Capacitación dedica a la creación y segmentación de listas de capacitación
semanalmente.

●  Objetivo del Proyecto al que se alinea: Reducir en un 80% el tiempo dedicado por los

administradores a la creación y segmentación de listas.

●  Método de Cálculo/Fórmula: Tiempo total (horas/minutos) desde la descarga de la

plantilla hasta el envío de comunicaciones finales.

●  Fuente de Datos: Observación directa (para línea base); Logs del sistema GAC

(registro de inicio/fin de tarea de generación de listas).

●  Responsable de la Medición: Administrador de Capacitación / Líder de Proyecto

Gentera

●  Frecuencia de Medición: Semanal (post-lanzamiento)
●  Línea Base (Valor Actual): 24-32 horas/semana (estimado por Carlos)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): Reducción del 80%: 4.8 - 6.4

horas/semana (o 288-384 minutos/semana) en los primeros 3-6 meses
post-implementación.

Tasa de Error en Convocatorias

●  Descripción: Porcentaje de convocatorias de capacitación que contienen errores (ej.

colaborador incorrecto, curso erróneo, sede equivocada) reportados por los usuarios.

●  Objetivo del Proyecto al que se alinea: Minimizar los errores en la convocatoria y

asignación.

●  Método de Cálculo/Fórmula: (Número de Errores Reportados / Total de Convocatorias

Enviadas) * 100

●  Fuente de Datos: Registro de incidencias/feedback de usuarios; Auditorías de

convocatorias (muestreo).

●  Responsable de la Medición: Administrador de Capacitación / Líder de Proyecto

Gentera

●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): Estimado: 10-15% de registros con necesidad de corrección

(Carlos)

●  Objetivo/Meta Esperada (Valor Futuro y Plazo): Reducción del 90%: < 1-1.5% de

tasa de error en los primeros 6 meses post-implementación.

Tiempo de Procesamiento de Plantilla en GAC

●  Descripción: Tiempo en minutos que tarda la plataforma GAC en procesar la
Plantilla de Capacitación desde la carga hasta la presentación de los
candidatos/grupos preliminares.

●  Objetivo del Proyecto al que se alinea: Asegurar un buen rendimiento con más de

27,000 colaboradores.

●  Método de Cálculo/Fórmula: Tiempo (minutos) desde la carga del archivo hasta la

disponibilidad de la primera vista procesada.

●  Fuente de Datos: Logs del sistema GAC.
●  Responsable de la Medición: Líder Técnico Dacodes
●  Frecuencia de Medición: Semanal (post-lanzamiento)
●  Línea Base (Valor Actual): N/A (Nueva funcionalidad)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 5-10 minutos máximo por carga de

plantilla estándar.

Precisión de la Automatización de Elegibles

●  Descripción: Porcentaje de colaboradores elegibles identificados automáticamente por

GAC que no requieren intervención o corrección manual.

●  Objetivo del Proyecto al que se alinea: Automatizar la identificación de colaboradores

elegibles para capacitación en un 95%.

●  Método de Cálculo/Fórmula: (Número de Elegibles Correctos Automáticamente / Total

de Elegibles) * 100

●  Fuente de Datos: Auditorías de los resultados de GAC; Registro de correcciones

manuales realizadas por Carlos.

●  Responsable de la Medición: Administrador de Capacitación / Líder de Proyecto

Gentera

●  Frecuencia de Medición: Semanal/Mensual
●  Línea Base (Valor Actual): 0% (proceso actual 100% manual)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 95% de automatización precisa en

los primeros 3-6 meses post-implementación.

2.2. Métricas de Adopción y Uso

Tasa de Adopción de Administradores

●  Descripción: Porcentaje de usuarios con rol de "Administrador de Capacitación" que

utilizan activamente la plataforma GAC.

●  Objetivo del Proyecto al que se alinea: Garantizar una tasa de adopción del 85%
entre los usuarios administradores en los primeros 3 meses post-implementación.

●  Método de Cálculo/Fórmula: (Número de Administradores Activos / Total de

Administradores) * 100.

○  Administrador Activo: Usuario que inicia sesión y realiza al menos una acción

clave (ej. carga de plantilla, generación de grupos, envío de convocatorias) por
semana.

●  Fuente de Datos: Analíticas de la plataforma GAC (logs de actividad).
●  Responsable de la Medición: Líder de Proyecto Gentera
●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): 0% (Nueva plataforma)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 85% en los primeros 3 meses

post-implementación.

Usuarios Activos por Rol (Colaboradores, Líderes, Formadores)

●  Descripción: Número de usuarios únicos por rol (Colaborador, Líder de Equipo,

Formador) que inician sesión y/o realizan acciones clave en la plataforma GAC por mes.

●  Objetivo del Proyecto al que se alinea: Proporcionar una experiencia de usuario

mejorada y visibilidad clara del progreso.

●  Método de Cálculo/Fórmula: Número de usuarios únicos que inician sesión o acceden

a sus vistas de progreso/reportes.

●  Fuente de Datos: Analíticas de la plataforma GAC.
●  Responsable de la Medición: Líder de Proyecto Gentera
●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): 0% (Nueva plataforma)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 70% de colaboradores activos; 60%

de líderes activos; 80% de formadores activos en los primeros 6 meses
post-implementación.

Frecuencia de Consulta de Progreso (Colaboradores)

●  Descripción: Número promedio de veces que un colaborador accede a su vista de

progreso de capacitación en GAC por mes.

●  Objetivo del Proyecto al que se alinea: Proporcionar a los colaboradores una interfaz

clara y accesible para visualizar el progreso.

●  Método de Cálculo/Fórmula: Suma de accesos a la vista de progreso / Número de

colaboradores activos.

●  Fuente de Datos: Analíticas de la plataforma GAC.
●  Responsable de la Medición: Líder de Proyecto Gentera
●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): 0 (No hay plataforma centralizada)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 2-3 accesos por mes por

colaborador activo en los primeros 6 meses.

2.2. Métricas de Satisfacción del Usuario (UX)

Satisfacción del Administrador de Capacitación (Carlos)

●  Descripción: Nivel de satisfacción de Carlos con la plataforma GAC en cuanto a la
eficiencia, facilidad de uso y reducción de estrés en sus tareas diarias de gestión de
capacitación.

●  Objetivo del Proyecto al que se alinea: Alivio en la carga de trabajo, un flujo más

rápido y menos estresante para los administradores.

●  Método de Cálculo/Fórmula: Puntuación promedio en encuestas de satisfacción (ej.
Escala Likert de 1 a 5, o preguntas de CSAT) o análisis cualitativo de entrevistas de
seguimiento.

●  Fuente de Datos: Encuestas post-lanzamiento dirigidas a administradores; Entrevistas

de seguimiento con Carlos.

●  Responsable de la Medición: Product Designer Dacodes / Líder de Proyecto Gentera
●  Frecuencia de Medición: Trimestral
●  Línea Base (Valor Actual): Baja (expresiones como "agotado", "maratón", "dolor de

cabeza" indican una experiencia actual negativa).

●  Objetivo/Meta Esperada (Valor Futuro y Plazo): Puntuación promedio de 4.0/5.0 o

superior en los primeros 6 meses post-implementación.

Satisfacción del Colaborador con la Trazabilidad

●  Descripción: Nivel de satisfacción de los colaboradores con la claridad, atractivo y

utilidad de la visualización de su progreso y ruta de capacitación en la plataforma GAC.
●  Objetivo del Proyecto al que se alinea: Proporcionar a los colaboradores una interfaz
clara y accesible para visualizar el progreso; reforzar el Valor Humano de Gentera.
●  Método de Cálculo/Fórmula: Puntuación promedio en encuestas de satisfacción (ej.

Escala Likert de 1 a 5).

●  Fuente de Datos: Encuestas a colaboradores (muestreo); Pruebas de usabilidad con

preguntas de satisfacción.

●  Responsable de la Medición: Product Designer Dacodes / Líder de Proyecto Gentera
●  Frecuencia de Medición: Semestral
●  Línea Base (Valor Actual): Baja (Ana se siente "perdida", la información está dispersa

y no hay una plataforma centralizada).

●  Objetivo/Meta Esperada (Valor Futuro y Plazo): Puntuación promedio de 4.0/5.0 o

superior en los primeros 6-12 meses post-implementación.

System Usability Scale (SUS)

●  Descripción: Una medida estandarizada y global de la usabilidad general percibida de

la plataforma GAC.

●  Objetivo del Proyecto al que se alinea: Asegurar una interfaz intuitiva, clara y fácil de

navegar; una mínima curva de aprendizaje.

●  Método de Cálculo/Fórmula: Puntuación SUS (escala de 0 a 100), obtenida a través

de un cuestionario de 10 ítems.

●  Fuente de Datos: Cuestionario SUS administrado a una muestra representativa de

usuarios (administradores, colaboradores, líderes, formadores).

●  Responsable de la Medición: Product Designer Dacodes
●  Frecuencia de Medición: Anual (o después de cambios significativos en la interfaz de

usuario).

●  Línea Base (Valor Actual): N/A (Es una métrica para la nueva plataforma).
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): Puntuación SUS de 75 o superior en
el primer año de operación. Un SUS de 68 se considera promedio; 75 es bueno; 85 es
excelente.

2.2. Métricas de Calidad y Cumplimiento (Técnicas y de Negocio)

Disponibilidad de la Plataforma (Uptime)

●  Descripción: Porcentaje de tiempo que la plataforma GAC está operativa y

accesible para todos los usuarios.

●  Objetivo del Proyecto al que se alinea: Cumplir con los SLAs definidos (ej. < 1

hora de indisponibilidad por causas del desarrollo).

●  Método de Cálculo/Fórmula: (Tiempo Total Operativo / Tiempo Total

Observado) * 100

●  Fuente de Datos: Herramientas de monitoreo del servidor/aplicación.
●  Responsable de la Medición: Líder Técnico Dacodes / TI Gentera
●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): N/A (Nueva plataforma)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): >99.5% Uptime mensual.

Tiempo de Respuesta de la Plataforma

●  Descripción: Tiempo promedio que tarda la plataforma en responder a las

interacciones clave del usuario, como la carga de páginas, la aplicación de filtros
o la generación de reportes.

●  Objetivo del Proyecto al que se alinea: Tiempos de carga rápidos,

especialmente en el procesamiento de la plantilla y generación de listas;
Respuesta eficiente de dashboards y reportes.

●  Método de Cálculo/Fórmula: Tiempo promedio en segundos para acciones

clave (ej. carga de dashboard, resultados de búsqueda, generación de reporte).

●  Fuente de Datos: Herramientas de monitoreo de rendimiento web.

●  Responsable de la Medición: Líder Técnico Dacodes
●  Frecuencia de Medición: Mensual
●  Línea Base (Valor Actual): N/A (Nueva plataforma)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): < 3 segundos para cargas de

página; < 10 segundos para generación de reportes complejos.

Número de Incidencias Críticas/Altas

●  Descripción: Cantidad de errores o fallos en el sistema que afectan gravemente

la funcionalidad principal o la experiencia del usuario, clasificados como
"Críticas" o "Altas".

●  Objetivo del Proyecto al que se alinea: Minimizar los errores humanos

inherentes a los procesos manuales; Asegurar que la plataforma cumpla con los
estándares de usabilidad y calidad.

●  Método de Cálculo/Fórmula: Conteo de incidencias clasificadas como

"Críticas" o "Altas" reportadas por semana/mes.

●  Fuente de Datos: Sistema de seguimiento de incidencias/bugs (ej. Jira).
●  Responsable de la Medición: Líder Técnico Dacodes
●  Frecuencia de Medición: Semanal/Mensual
●  Línea Base (Valor Actual): N/A (Nueva plataforma)
●  Objetivo/Meta Esperada (Valor Futuro y Plazo): 0 incidencias críticas; < 5

incidencias altas por mes en los primeros 3 meses post-lanzamiento.

