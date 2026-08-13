Conceptos Priorizados - Proyecto GAC

Este documento detalla los conceptos de diseño priorizados que avanzarán a la etapa
de wireframing, seleccionados a partir de los bocetos generados en la sesión de
brainstorming y refinados durante las sesiones de crítica. La priorización se basó en la
alineación con los objetivos del proyecto GAC, la viabilidad técnica inicial, y la
capacidad de abordar los puntos de dolor más críticos de nuestros usuarios clave.

Principios Rectores para los Conceptos Priorizados:

1.  Automatización Inteligente con Control Humano: Las soluciones priorizadas
buscan automatizar al máximo las tareas repetitivas y propensas a errores, pero
siempre manteniendo la capacidad para que el administrador (Carlos) revise,
ajuste y tome decisiones en casos excepcionales.

2.  Visibilidad Centralizada y en Tiempo Real: La plataforma GAC se concibe como
la única fuente de verdad, ofreciendo dashboards y vistas consolidadas para todos
los roles, eliminando la dispersión de información y la dependencia de procesos
manuales de recopilación.

3.  Experiencia de Usuario Intuitiva y Amigable: Las interfaces deben ser

extremadamente sencillas de usar, con una curva de aprendizaje mínima, y un
diseño atractivo que fomente la adopción y la satisfacción del usuario.
4.  Comunicación Proactiva y Multicanal: Las notificaciones serán un pilar

fundamental para mantener a los usuarios informados de manera oportuna y a
través de sus canales preferidos.

5.  Flexibilidad y Escalabilidad Futura: Los conceptos deben sentar las bases para
futuras evoluciones, como la adaptación a cambios en la ruta de capacitación o
nuevas integraciones.

Conceptos Priorizados por Rol de Usuario y Flujo Clave:

1. Para Carlos, el Coordinador Detallista (Administrador de Capacitación)

●  Concepto Central: "Motor de Automatización de Listas con Revisión Asistida"
○  Descripción: Una interfaz de carga de plantilla (Excel) robusta que activa un

motor de procesamiento automático. Este motor realizará la limpieza, el cruce
con el histórico y la aplicación de todas las reglas de negocio complejas
(reingresos, exclusiones, "Gerente Multiproducto") de forma inteligente.

○  Características Clave:

■  Carga Sencilla: Botón prominente y área de arrastrar y soltar para la

plantilla.

■  Resumen Post-Procesamiento: Dashboard con métricas de la carga y un

resumen de "Inconsistencias Detectadas", agrupadas por tipo, con
sugerencias de corrección o enlaces a detalles para la revisión de Carlos.
■  Visualización de Lógica de Reglas: En el detalle de cada colaborador o

grupo, se mostrará de forma transparente por qué fue incluido/excluido o
asignado a una ruta específica (ej. "Identificado como Gerente
Multiproducto por presencia de Asesor CIE en su oficina").
○  Valor Principal: Reducción drástica del tiempo operativo y de la carga

cognitiva, minimizando errores y permitiendo a Carlos enfocarse en la gestión
de excepciones.

●  Concepto Central: "Generador de Grupos Óptimos con Ajuste Visual"

○  Descripción: Un algoritmo que propone automáticamente la segmentación

óptima de grupos, considerando todos los criterios (puesto, subdirección, tipo
de curso, sede, cupos mínimos/máximos). Carlos podrá revisar estas
propuestas en una interfaz visual e intuitiva, realizando ajustes con facilidad.

○  Características Clave:

■  Propuestas en Tarjetas/Bloques: Grupos pre-armados con información

clave visible (nombre, participantes, sede, formador sugerido).

■  Alertas Inteligentes: Notificaciones visuales para grupos con problemas

■

de cupo, con sugerencias de acciones (fusionar, dividir, posponer).
Interfaz de Arrastrar y Soltar (Drag & Drop): Facilidad para mover
participantes entre grupos o asignar formadores de forma visual.
■  Configuración de Compatibilidad: Herramienta para que Carlos o el

Super Admin puedan configurar reglas de compatibilidad de puestos para
la agrupación.

○  Valor Principal: Elimina el "rompecabezas artesanal" de la segmentación,

ahorrando tiempo y reduciendo el estrés.

●  Concepto Central: "Central de Comunicaciones Unificada y Automatizada"
○  Descripción: Una interfaz donde Carlos puede disparar el envío masivo y
personalizado de todas las comunicaciones (invitaciones a gerentes,
notificaciones a colaboradores) con un solo clic.

○  Características Clave:

■  Envío Multicanal: Opciones claras para enviar por Outlook, Teams y

WhatsApp (con gestión de números).

■  Generación Automática de .ical: El sistema creará y adjuntará

automáticamente los archivos .ical.

■  Previsualización de Comunicaciones: Carlos podrá ver cómo se verá

cada tipo de invitación antes del envío masivo.

■  Monitoreo de Envío: Un resumen del estado de los envíos (ej. "Enviados",

"Errores").

○  Valor Principal: Elimina la tarea más tediosa y propensa a errores de Carlos,

profesionalizando las comunicaciones.

2. Para Ana, la Colaboradora Entusiasta (Colaborador en Capacitación)

●  Concepto Central: "Mi Ruta de Capacitación: Un Mapa Interactivo y

Motivador"
○  Descripción: Un dashboard personal que ofrece una visualización clara,

atractiva y gamificada de su ruta de capacitación, mostrando su progreso de
forma intuitiva.

○  Características Clave:

■  Mapa Visual de Progreso: Una línea de tiempo o "camino" con

hitos/niveles (Básico, Intermedio, etc.) claramente marcados como
completados, en progreso o pendientes. Un gran indicador de % de
avance.

■  Detalle de Hitos/Cursos: Al hacer clic, se accede a toda la información

relevante (fecha, hora, sede/enlace, formador, temario, estatus).

■  Historial Completo: Acceso a todos los cursos tomados y calificaciones.
■  Diseño Limpio y Móvil-First: Interfaz optimizada para dispositivos

móviles, fácil de navegar con pocos clics.

○  Valor Principal: Proporciona claridad, reduce la ansiedad, motiva el avance y

empodera al colaborador en su desarrollo.

●  Concepto Central: "Notificaciones Inteligentes y Agendamiento Fácil"

○  Descripción: Un sistema de notificaciones proactivo que informa a Ana sobre

sus cursos y progreso a través de sus canales preferidos, facilitando el
agendamiento.

○  Características Clave:

■  Notificaciones Multicanal: Mensajes concisos y accionables por

WhatsApp, Teams o correo.

■  Adjunto .ical Automático: Facilita añadir el curso al calendario personal

con un solo clic.

■  Alertas Proactivas: Notificaciones sobre retrasos, hitos próximos o

cambios importantes en cursos.

■  Preferencias de Notificación: Posibilidad de que Ana configure cómo y

cuándo desea recibir los avisos.

○  Valor Principal: Asegura que Ana esté siempre informada, reduce la confusión

y le permite organizar su tiempo eficientemente.

3. Para David, el Líder Comprometido (Gerente de Oficina)

●  Concepto Central: "Dashboard de Equipo: Visión 360° de la Capacitación"

○  Descripción: Un panel de control consolidado que ofrece a David una visión

rápida y detallada del progreso de capacitación de su equipo.

○  Características Clave:

■  Resumen Visual del Equipo: Tabla o tarjetas con cada miembro,

mostrando % de avance y un "semáforo" de estatus (Al Día / Retrasado /
Pendiente).

■  Filtros Rápidos: Opciones intuitivas para filtrar por oficina, % de avance,

estatus.

■  Drill-down a Detalle: Posibilidad de hacer clic en un colaborador para ver

su ruta de capacitación individual (similar a la vista de Ana).

■  Métricas Clave del Equipo: Promedio de avance del equipo, % de nuevos

ingresos capacitados.

○  Valor Principal: Permite a David identificar proactivamente necesidades de

apoyo en su equipo, tomar decisiones basadas en datos y ahorrar tiempo en la
recopilación manual de información.

●  Concepto Central: "Reportes Bajo Demanda y Accionables"

○  Descripción: Una interfaz sencilla para generar reportes personalizados sobre

el avance de la capacitación de su equipo, listos para ser presentados o
analizados.

○  Características Clave:

■  Opciones de Reporte Predefinidas: Tipos de reportes comunes (ej.

"Avance por Oficina", "Colaboradores Retrasados").

■  Filtros Personalizables: Para adaptar el reporte a sus necesidades

específicas.

■  Exportación a Excel: Facilidad para descargar los datos para análisis

adicionales.

○  Valor Principal: Proporciona a David herramientas para demostrar el progreso

de su equipo y fundamentar sus decisiones con datos precisos.

4. Para Elena, la Formadora Dedicada (Formadora)

●  Concepto Central: "Mi Agenda de Cursos: Todo en un Solo Lugar"

○  Descripción: Una agenda digital centralizada que muestra a Elena todos sus

cursos asignados con detalles completos y acceso a las listas de participantes.

○  Características Clave:

■  Calendario Interactivo: Vista clara de sus cursos asignados, con la

posibilidad de sincronizar con calendarios personales (Outlook, Google
Calendar).

■  Detalle de Curso y Grupo: Al hacer clic, muestra información completa

(fecha, hora, sede/enlace, temario) y la lista de participantes.
■  Listas Digitales y Estandarizadas: Acceso rápido a la lista de

participantes con información relevante (puesto, oficina, correo).
○  Valor Principal: Organiza su trabajo, reduce la necesidad de buscar

información en múltiples fuentes y mejora la anticipación en la preparación del
curso.

●  Concepto Central: "Registro y Visibilidad de Impacto Simplificados"

○  Descripción: Herramientas en la plataforma para que Elena pueda registrar
fácilmente la asistencia y ver el impacto de su trabajo en el progreso general
de los colaboradores.
○  Características Clave:

■  Registro de Asistencia en Plataforma: Interfaz sencilla para marcar la

asistencia directamente en GAC.

■  Campo de Feedback General: Posibilidad de añadir notas o feedback

general del grupo.

■  Dashboard de Avance de Formador: Resumen visual del progreso de los

colaboradores de su subdirección, mostrando cómo sus cursos
contribuyen a la ruta general.

○  Valor Principal: Simplifica las tareas administrativas post-curso y conecta su

trabajo con el impacto en el desarrollo de los colaboradores.

Estos conceptos priorizados servirán como la base sólida para la siguiente etapa de
diseño, donde se crearán wireframes más detallados y se explorará la arquitectura de
información para dar forma a la plataforma GAC.

