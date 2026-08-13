Documentación de Decisiones de Diseño - Plataforma GAC

Versión: 1.0
Autor: [Tu Nombre/Rol], Diseñador de Producto, Dacodes
1. Introducción

Este documento detalla las decisiones de diseño clave tomadas durante la fase de
"Idear y Diseñar" para la plataforma de Gestión Automatizada de la Capacitación
(GAC). Se enfoca en el "por qué" detrás de las elecciones de los flujos de usuario y la
estructura de interacción, basándose en los hallazgos de investigación, la Arquitectura
de Información (AI) definida y los conceptos priorizados. El objetivo es proporcionar
una justificación clara para el equipo de desarrollo y los stakeholders sobre cómo la
solución propuesta aborda los objetivos del proyecto y las necesidades de los usuarios
de Gentera.

2. Principios Rectores de las Decisiones de Diseño

Las decisiones de diseño se han guiado por los siguientes principios fundamentales:

●  Eficiencia Operativa y Reducción de Errores: Priorizar la automatización de

tareas manuales y repetitivas para liberar tiempo y minimizar los errores humanos,
especialmente para Carlos.

●  Experiencia Centrada en la Persona: Diseñar interacciones que sean intuitivas,

empáticas y que resuelvan los puntos de dolor específicos de cada User Persona.
●  Claridad y Visibilidad: Asegurar que la información clave sea fácilmente accesible

y comprensible para todos los roles, fomentando la autogestión y la toma de
decisiones informada.

●  Consistencia y Simplicidad: Mantener patrones de interacción y elementos

visuales coherentes para reducir la curva de aprendizaje y mejorar la usabilidad.
●  Comunicación Proactiva: Integrar notificaciones y feedback en puntos clave del

flujo para mantener a los usuarios informados y apoyados.

3. Decisiones Clave por Flujo/Funcionalidad y Rol de Usuario

3.1. Flujo: Cargar y Procesar Plantilla de Capacitación Semanal

●  Rol Principal: Carlos, el Coordinador Detallista (Administrador)
●  Problema Actual (As-Is): Proceso manual de limpieza y cruce de datos (24-32

horas/semana), propenso a errores, alta carga cognitiva.

●  Decisiones de Diseño:

○

Interfaz de Carga Simplificada: Se optó por una pantalla de carga minimalista

con un área de arrastrar y soltar, complementada con un botón de selección
de archivo.
■  Racional: Reduce la complejidad visual y hace el proceso de inicio de carga

muy directo, alineado con el objetivo de "eficientar radicalmente" el
proceso.

○  Resumen Post-Procesamiento con Foco en Inconsistencias: Después de la
carga, la pantalla principal muestra un resumen de los datos procesados y,
crucialmente, resalta las inconsistencias detectadas.
■  Racional: Aborda el punto de dolor de Carlos de ser un "detective" de

datos. Al automatizar la identificación de errores y presentarlos de forma
agrupada, Carlos puede enfocarse solo en las excepciones, reduciendo su
tiempo y estrés (objetivo de reducción del 80% del tiempo).

○  Acceso a Reporte Detallado de Errores: Se incluirá un enlace claro para

acceder a un reporte detallado de cada inconsistencia.
■  Racional: Permite a Carlos profundizar en los problemas si necesita

entender la causa raíz o realizar correcciones específicas, manteniendo la
simplicidad en la vista principal.

3.2. Flujo: Segmentar y Ajustar Grupos de Capacitación

●  Rol Principal: Carlos, el Coordinador Detallista (Administrador)
●  Problema Actual (As-Is): Proceso "artesanal", complejo y de alta carga cognitiva
("rompecabezas"), riesgo de incumplir cupos o mezclar puestos incompatibles.

●  Decisiones de Diseño:

○  Generación Automática de Propuestas de Grupos: El sistema propondrá
automáticamente la segmentación óptima de grupos basada en todas las
reglas de negocio (puesto, subdirección, cupos, sede, Gerente Multiproducto).
■  Racional: Transforma la tarea más compleja de Carlos de un

"rompecabezas" manual a una revisión asistida por el sistema, logrando el
objetivo de automatizar la identificación de elegibles en un 95% y reducir el
tiempo.

○

Interfaz Visual de Ajuste con Arrastrar y Soltar: Se diseñará una vista donde
Carlos pueda ver los grupos propuestos y realizar ajustes manuales (mover
participantes, fusionar/dividir grupos) de forma intuitiva.
■  Racional: Proporciona a Carlos el control necesario sobre el proceso,

abordando su preocupación de que "las reglas sean tan específicas que
sea difícil automatizarlas todas bien" y permitiéndole gestionar "incendios"
o casos especiales.

○  Alertas Inteligentes de Cupo y Sugerencias: El sistema alertará visualmente
sobre grupos que no cumplen los mínimos o exceden los máximos, y ofrecerá
sugerencias de acciones.
■  Racional: Reduce el riesgo de errores en la segmentación y guía a Carlos

hacia la solución más eficiente, mejorando la precisión.

3.3. Flujo: Enviar Convocatorias y Notificaciones Masivas

●  Rol Principal: Carlos, el Coordinador Detallista (Administrador)
●  Problema Actual (As-Is): Envío individual/semi-masivo consume mucho tiempo,

generación manual de .ical es tediosa, riesgo de errores en destinatarios o
adjuntos.

●  Decisiones de Diseño:

○  Central de Comunicaciones Unificada: Una única pantalla para gestionar y
disparar todos los envíos (a gerentes y colaboradores) a través de múltiples
canales (Outlook, Teams, WhatsApp).
■  Racional: Elimina la dispersión de herramientas y la repetición de tareas,

logrando el objetivo de automatizar el envío de invitaciones.

○  Generación Automática de Archivos .ical: El sistema creará y adjuntará

automáticamente los eventos de calendario.
■  Racional: Aborda directamente el "dolor de cabeza" de Carlos con los .ical,

ahorrándole un tiempo significativo y minimizando errores.

○  Previsualización de Comunicaciones: Carlos podrá ver cómo se verá el

mensaje en cada canal antes de enviarlo masivamente.
■  Racional: Aumenta la confianza de Carlos en la precisión del envío y

reduce el riesgo de errores en el contenido.

3.4. Flujo: Consultar Ruta de Capacitación y Progreso

●  Rol Principal: Ana, la Colaboradora Entusiasta
●  Problema Actual (As-Is): Falta de visibilidad centralizada de su progreso,

confusión sobre qué curso sigue, información dispersa.

●  Decisiones de Diseño:

○  "Mi Ruta de Capacitación" como Mapa Visual: Un dashboard personal que

presenta el progreso como un "camino" o línea de tiempo con hitos claros y un
% de avance prominente.
■  Racional: Responde directamente a la necesidad de Ana de un "mapa"

claro de su desarrollo, fomentando la autogestión y la motivación. Se alinea
con el "Valor Humano" de Gentera.

○  Acceso Directo a Detalles del Curso: Al hacer clic en cualquier elemento del

mapa, se accede a una vista limpia con toda la información relevante del curso
(fecha, hora, sede/enlace, temario).
■  Racional: Consolida la información que antes estaba dispersa y facilita la

preparación de Ana para sus cursos.

○

Integración con Calendario Personal (.ical): Opción clara para descargar el
.ical desde el detalle del curso.
■  Racional: Simplifica la organización personal de Ana y asegura que no se

pierda sus cursos.

3.5. Flujo: Visualizar Avance de Equipo y Generar Reporte

●  Rol Principal: David, el Líder Comprometido
●  Problema Actual (As-Is): Dificultad para tener una visión clara y actualizada del
avance de su equipo sin preguntar individualmente o solicitar reportes manuales.

●  Decisiones de Diseño:

○  Dashboard de Equipo con Visibilidad Rápida: Una vista de tabla/tarjetas que
muestra el estatus de cada miembro del equipo con indicadores visuales (ej.
semáforos de color para "Al Día / Retrasado").
■  Racional: Permite a David identificar rápidamente a los colaboradores en
riesgo sin tener que recopilar información manualmente, facilitando la
gestión proactiva y el apoyo.

○  Filtros Intuitivos y Drill-down: Opciones de filtrado por oficina, estatus, % de

avance, y la capacidad de hacer clic en un colaborador para ver su ruta
individual.
■  Racional: Proporciona la flexibilidad necesaria para analizar el progreso del
equipo desde diferentes perspectivas y profundizar en los detalles cuando
sea necesario, optimizando el tiempo de David.

○  Generación de Reportes Simplificada: Interfaz clara para seleccionar el tipo

de reporte y filtros, con un botón "Exportar a Excel".
■  Racional: Aborda la frustración de David de no tener una herramienta fácil

para generar informes de calidad, empoderándolo para presentar el
avance de su oficina de forma convincente.

3.6. Flujo: Acceder a Agenda y Registrar Asistencia

●  Rol Principal: Elena, la Formadora Dedicada
●  Problema Actual (As-Is): Recepción de listas en formatos variados y con poca

antelación, registro de asistencia manual y reporte por correo.

●  Decisiones de Diseño:

○  Agenda Centralizada y Digital: Un calendario visual en GAC que muestra

todos los cursos asignados a Elena, con acceso rápido a los detalles del grupo
y la lista de participantes.
■  Racional: Organiza la información que antes estaba dispersa, mejorando la

anticipación y la preparación de Elena para sus sesiones.

○  Registro de Asistencia Directo en Plataforma: Una interfaz sencilla para

marcar la asistencia de los participantes directamente en GAC, eliminando la
necesidad de papel o Excels externos.
■  Racional: Simplifica drásticamente una tarea administrativa repetitiva para

Elena, liberando tiempo para que se enfoque en la formación.

○  Campo de Feedback General del Grupo: Una opción para que Elena añada

notas o feedback cualitativo sobre el grupo.
■  Racional: Proporciona un medio formal para capturar observaciones

importantes que antes se mantenían en notas personales, conectando su
trabajo administrativo con el impacto en el desarrollo.

4. Conclusión

Las decisiones de diseño documentadas aquí reflejan un enfoque deliberado en la
resolución de los problemas identificados y la maximización del valor para cada User
Persona. Al priorizar la automatización inteligente, la visibilidad centralizada y una
experiencia de usuario fluida, la plataforma GAC está diseñada para transformar
significativamente la gestión de la capacitación en Gentera, alineándose con sus
objetivos estratégicos y valores. Estas especificaciones servirán como la base para la
creación de wireframes detallados y prototipos interactivos.

