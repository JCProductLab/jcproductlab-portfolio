Documento de Especificaciones de Arquitectura de Información (AI) - Plataforma
GAC

Versión: 1.0
Autor: [Tu Nombre/Rol], Diseñador de Producto, Dacodes
1. Introducción

Este documento detalla la Arquitectura de Información (AI) propuesta para la
plataforma de Gestión Automatizada de la Capacitación (GAC) de Gentera. La AI es la
base fundamental del diseño de la experiencia de usuario, enfocándose en la
organización, estructuración y etiquetado del contenido y las funcionalidades para
asegurar que los usuarios puedan encontrar la información que necesitan y completar
sus tareas de manera intuitiva y eficiente.

Este documento es el resultado de la síntesis de las actividades previas de la Fase 2:
Idear y Diseñar, incluyendo el inventario de contenido, los bocetos priorizados, y los
modelos de navegación y etiquetado, así como la validación con stakeholders.

2. Filosofía General de la Arquitectura de Información

La AI de GAC se rige por los siguientes principios clave, derivados de la investigación
con usuarios y los objetivos del proyecto:

●  Centrada en el Usuario: La estructura y la navegación están diseñadas pensando
en los modelos mentales y las necesidades específicas de cada rol de usuario
(Administrador, Colaborador, Líder, Formador, Super Admin).

●  Claridad y Simplicidad: Prioriza una organización lógica y un etiquetado conciso

para minimizar la carga cognitiva y la curva de aprendizaje.

●  Eficiencia en la Tarea: Facilita que los usuarios completen sus tareas clave con el
menor número de pasos y clics posible, especialmente para los flujos de alta
frecuencia o alta complejidad (ej. segmentación de grupos para Carlos).

●  Visibilidad y Transparencia: Asegura que la información relevante sea fácilmente
localizable y que el usuario siempre sepa dónde se encuentra en la plataforma y
qué acción está realizando.

●  Consistencia: Mantiene patrones de navegación y etiquetado uniformes en toda

la aplicación para construir familiaridad y confianza.

●  Escalabilidad: La estructura es lo suficientemente flexible para acomodar futuras
expansiones de funcionalidades y posibles cambios en el modelo de capacitación
de Gentera (ej. transición de 12 a 6 niveles).

3. Inventario de Contenido y Funcionalidades (Visión General)

La plataforma GAC consolidará una amplia gama de contenido y funcionalidades,
actualmente dispersos en múltiples archivos y procesos manuales. El inventario
exhaustivo incluye:

●  Datos de Colaboradores: Perfiles, estatus (activo/baja, IPP), eventos (ingreso,

promoción, reingreso), puesto, subdirección, ubicación, información de contacto.

●  Datos Históricos de Capacitación: Cursos completados, niveles acreditados,

faltas justificadas.

●  Reglas de Negocio: Lógicas para identificación de elegibles, segmentación de

●

grupos, asignación de formadores.
Información de Cursos: Tipos de curso, niveles, sedes, horarios, formadores.
●  Listas y Grupos: Propuestas de grupos, listas de participantes, grupos pendientes

de asignación.

●  Comunicaciones: Plantillas de correo, notificaciones, archivos .ical.
●  Progreso de Capacitación: Rutas personalizadas, porcentaje de avance, estatus

por hito.

●  Dashboards y Reportes: Indicadores clave de capacitación, resúmenes de

equipo, reportes de avance por formador.

●  Funcionalidades de Gestión: Carga de plantillas, ajuste de grupos, asignación de
formadores, envío de comunicaciones, gestión de usuarios, configuración del
sistema.

4. Estructura Jerárquica (Mapa del Sitio)

La plataforma GAC se estructura en módulos principales, con un punto de entrada
único (Login) que redirige a un Dashboard personalizado según el rol del usuario.

●  Punto de Entrada:

○  Login: Autenticación (Número de Empleado / Fecha de Nacimiento).

●  Dashboards Principales (Personalizados por Rol):

○  Administrador (Carlos): Resumen de procesos de gestión de listas, estado de

envíos, alertas clave.

○  Colaborador (Ana): Mapa visual de su ruta de capacitación, % de avance,

próximos cursos.

○  Líder (David): Resumen de avance de su equipo, identificación de

colaboradores en riesgo.

○  Formador (Elena): Agenda de cursos asignados, resumen de grupos

atendidos.

○  Super Admin: Resumen de actividad del sistema, estado de actualizaciones.
●  Módulos Principales (Accesibles desde la Navegación Primaria, según Rol):

○  Para Administrador (Carlos):

■  Gestión de Datos: Carga de Plantilla, Historial de Cargas, Reporte de

Errores.

■  Gestión de Grupos: Propuestas de Grupos, Detalle/Ajuste de Grupo,

Crear Grupo Manual.

■  Asignación de Formadores: Grupos Pendientes de Asignación, Detalle de

Grupo para Asignación.

■  Comunicaciones: Envío de Convocatorias, Gestión de Plantillas.
■  Reportes y Dashboards: Dashboard de Indicadores Clave, Concentrado

de Colaboradores, Reportes Personalizados.

○  Para Colaborador (Ana):

■  Mi Ruta de Capacitación: Mapa Visual de Ruta, Detalle de Hitos/Niveles,

Mi Progreso.

■  Mis Cursos: Próximos Cursos Programados, Historial de Cursos

Completados.

○  Para Líder (David):

■  Mi Equipo: Resumen de Avance de Colaboradores, Detalle de

Colaborador.

■  Reportes de Equipo: Generar Reporte, Alertas de Equipo.

○  Para Formador (Elena):

■  Mi Agenda: Calendario de Cursos Asignados, Próximos Grupos.
■  Mis Grupos: Lista de Grupos Asignados, Detalle de Grupo (con Registro

de Asistencia).

■  Reportes de Avance: Dashboard de Avance por Formador.

○  Para Super Admin:

■  Gestión de Usuarios: Lista de Usuarios, Crear/Editar/Desactivar Usuario.
■  Configuración del Sistema: Carga de Archivos Maestros, Gestión de

Reglas de Negocio, Configuración de Integraciones.

■  Monitoreo y Logs: Logs de Actividad, Logs de Errores, Monitoreo de

Rendimiento.

●  Elementos Comunes (Accesibles para todos los roles con permisos):

○  Mi Perfil / Configuración de Cuenta
○  Notificaciones (Bandeja de alertas y mensajes)
○  Ayuda y Soporte
○  Cerrar Sesión

5. Modelos de Navegación

La plataforma GAC empleará una combinación de modelos de navegación para
facilitar el movimiento del usuario:

●  Navegación Primaria (Global):

○  Menú Lateral Persistente (Sidebar): Será el principal sistema de navegación,

visible en la mayoría de las pantallas. Contendrá los módulos principales
específicos para cada rol. Se diseñará para ser colapsable en pantallas más
pequeñas o por preferencia del usuario.

○  Rationale: Proporciona un acceso constante a las secciones clave, reduce la
necesidad de volver a la página de inicio y se adapta bien a la jerarquía de
contenido.

●  Navegación Secundaria (Local):

○  Pestañas (Tabs): Se utilizarán para organizar subsecciones dentro de un

módulo principal, permitiendo alternar fácilmente entre vistas relacionadas (ej.
"Cargar Plantilla" | "Historial de Cargas").

○  Submenús/Acordeones: Para agrupar opciones relacionadas que no

necesitan estar siempre visibles, reduciendo el desorden visual.

○  Rationale: Organiza el contenido dentro de una sección de manera lógica y

accesible, sin sobrecargar la navegación primaria.

●  Navegación Contextual:

○  Enlaces en Contenido: Se implementarán enlaces directos desde los

dashboards o resúmenes a las páginas de detalle (ej. clic en un colaborador en
el dashboard de Líder para ver su ruta).

○  Botones de Acción: Acciones clave (ej. "Generar Grupos", "Enviar Todo",

"Añadir a Calendario") se ubicarán contextualmente en las pantallas donde son
relevantes.

○  Rationale: Permite a los usuarios realizar acciones o profundizar en

información sin romper su flujo de trabajo.

●  Búsqueda (Search):

○  Búsqueda Global: Una barra de búsqueda prominente (ej. en la cabecera)

para buscar en todo el contenido accesible al usuario.

○  Búsqueda Específica: Campos de búsqueda dentro de tablas o listas para

refinar resultados (ej. buscar un colaborador por nómina).

○  Rationale: Proporciona un método alternativo para encontrar información
rápidamente, especialmente en sistemas con gran volumen de datos.

●  Breadcrumbs (Migas de Pan):

○  Una línea de texto en la parte superior de la pantalla que muestra la ruta de

navegación del usuario (ej. "Inicio > Gestión de Grupos > Detalle de Grupo X").
○  Rationale: Ayuda a los usuarios a entender su ubicación dentro de la jerarquía

del sitio y facilita el retroceso.

6. Esquema de Etiquetado (Labeling System)

El sistema de etiquetado se basa en la claridad, concisión, consistencia y familiaridad
con la terminología de Gentera.

●  Principios Clave:

○  Uso de términos como "Plantilla ADN", "Concentrado Histórico", "Toques con

Formador", "Gerente Multiproducto" cuando sea apropiado.

○  Etiquetas orientadas a la acción para botones (ej. "Subir Plantilla", "Generar

Grupos", "Enviar Todo").

○  Nombres de secciones que reflejen claramente su contenido o propósito (ej.

"Mi Ruta de Capacitación", "Gestión de Datos").

○  Consistencia en el uso de mayúsculas, puntuación y abreviaturas.

●  Ejemplos de Etiquetas Clave:

○  Secciones Principales: Inicio, Gestión de Datos, Gestión de Grupos,

Asignación de Formadores, Comunicaciones, Reportes y Dashboards, Mi Ruta
de Capacitación, Mis Cursos, Mi Equipo, Reportes de Equipo, Mi Agenda, Mis
Grupos, Reportes de Avance, Gestión de Usuarios, Configuración del Sistema,
Monitoreo y Logs.

○  Elementos de Interfaz: Subir Plantilla ADN (Excel), Inconsistencias Detectadas,

Propuestas de Grupos, Ver Detalles y Ajustar, Añadir Participante, Enviar
Invitaciones Semanales, Mapa de Mi Ruta de Capacitación, % de Avance,
Próximos Cursos, Historial de Cursos Completados, Agenda de Cursos
Asignados, Registrar Asistencia, Exportar a Excel.

7. Racional y Decisiones de Diseño de AI

La AI propuesta aborda directamente los puntos de dolor y las necesidades
identificadas en la fase de investigación:

●  Reducción de Carga Cognitiva (Carlos): Al agrupar lógicamente las

funcionalidades de "Gestión de Datos" y "Gestión de Grupos" y automatizar los
procesos internos, Carlos tendrá una interfaz más limpia y menos abrumadora. La
navegación clara reduce la necesidad de recordar dónde está cada archivo o
proceso.

●  Visibilidad para Colaboradores y Líderes (Ana y David): La creación de
dashboards personalizados y secciones dedicadas como "Mi Ruta de
Capacitación" y "Mi Equipo" proporciona la visibilidad centralizada y en tiempo real
que actualmente les falta, empoderándolos para autogestionar su desarrollo o
apoyar a sus equipos.

●  Eficiencia para Formadores (Elena): La sección "Mi Agenda" y "Mis Grupos"
centraliza la información que Elena actualmente recibe de forma dispersa,
simplificando su preparación y el registro de asistencia.

●  Automatización de Flujos Críticos: La AI está diseñada para soportar la

automatización de la carga de datos, la aplicación de reglas de negocio y el envío
de comunicaciones, lo cual es el objetivo central del Desarrollo 1 y liberará un
tiempo significativo para Carlos.

●  Soporte a la Trazabilidad: La estructura permite el seguimiento detallado del
progreso de capacitación (Desarrollo 2) a través de vistas personalizadas y
reportes.

●  Validación de la Estructura: Los resultados hipotéticos de Card Sorting y Tree

Testing (que se habrían realizado en un proyecto real) habrían confirmado que la
estructura propuesta es intuitiva y que los usuarios pueden encontrar la
información y completar las tareas con altas tasas de éxito, validando la lógica
subyacente de la AI.

8. Consideraciones Futuras y Flexibilidad

La Arquitectura de Información ha sido diseñada con la flexibilidad en mente para
futuras evoluciones:

●  Cambio en Ruta de Capacitación (12 a 6 niveles): La estructura de "Mi Ruta de

Capacitación" está pensada para ser adaptable a cambios en el número de niveles,
requiriendo principalmente ajustes en la lógica de cálculo y la representación
visual, no una reestructuración completa de la navegación.

●  Nuevos Módulos/Integraciones: La modularidad de las secciones principales
permite añadir nuevas funcionalidades o integraciones (ej. con un LMS más
profundo, evaluaciones de desempeño) como módulos adicionales sin romper la
estructura existente.

●  Configuración de Reglas: La sección de "Configuración del Sistema" para el Super
Admin anticipa la necesidad de interfaces para ajustar parámetros de reglas de
negocio en el futuro, si Gentera lo requiere.

