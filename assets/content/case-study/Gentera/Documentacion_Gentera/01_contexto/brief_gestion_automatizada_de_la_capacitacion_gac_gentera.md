Brief Detallado del Proyecto: Gestión
Automatizada de la Capacitación (GAC) -
Gentera

1. Resumen Ejecutivo

El proyecto "Gestión Automatizada de la Capacitación" (GAC) tiene como objetivo
transformar el proceso actual de Gentera para la planificación, segmentación, convocatoria
y seguimiento de la capacitación de sus colaboradores. Actualmente, este proceso es
manual, consume mucho tiempo y se basa en múltiples archivos de Excel, lo que genera
ineficiencias y posibles errores. La solución propuesta es el desarrollo de una aplicación
web intuitiva y robusta que automatice estas tareas, optimice los flujos de trabajo y
proporcione una visibilidad clara del progreso de la capacitación para todos los
involucrados. Este proyecto busca aportar valor significativo a los colaboradores y al equipo
interno, alineándose con la estrategia de transformación digital y el enfoque en el desarrollo
del capital humano de Gentera.

2. Contexto del Proyecto

2.1. Sobre Gentera

Gentera S.A.B. de C.V. es una entidad líder en inclusión financiera en América Latina, con
más de tres décadas de experiencia. Su misión es "impulsar los sueños de nuestros clientes
atendiendo sus necesidades financieras con sentido humano", sustentada en los valores de
Valor Social, Humano y Económico. La compañía tiene un fuerte compromiso con el
desarrollo de sus más de 27,000 colaboradores, considerándolos un pilar fundamental y
promoviendo su crecimiento a través de iniciativas como el modelo de liderazgo
"Serviazgo®". La digitalización y la eficiencia operativa son ejes estratégicos clave para
Gentera.

2.2. El Problema Actual

El proceso actual para gestionar las listas de capacitación es predominantemente manual y
se realiza semanalmente (los jueves). Involucra:

●  Descarga y limpieza de plantillas de Excel ("Plantilla de Capacitación") extraídas del

sistema ADN.

●  Filtrado manual de colaboradores activos, excluyendo ciertas áreas (ej. SEAS

●

México) y validando puestos específicos.
Identificación de nuevos ingresos y reingresos (con reglas como la de los 6 meses
fuera de la empresa).

●  Consolidación de colaboradores que no asistieron a cursos anteriores (hasta 3

semanas previas).

●  Múltiples cruces y validaciones con archivos históricos ("Concentrado") y listas de
cursos anteriores para evitar duplicidades o convocatorias incorrectas (ej. cambios
laterales de puesto, promociones, demociones).

●  Aplicación de reglas de negocio complejas y específicas para determinar quién debe
ser convocado (ej. "gerente multiproducto" basado en la presencia de "asesores
CIE" en su oficina).

●  Segmentación manual en grupos, asignación de sedes, hoteles (si aplica) y

formadores.

●  Generación y envío manual de listas finales a los formadores vía Teams.

Este proceso es laborioso, propenso a errores humanos, consume una cantidad significativa
de tiempo del personal (principalmente Carlos, quien lo ejecuta) y dificulta el seguimiento
ágil y la generación de reportes consolidados.

2.3. La Oportunidad

El proyecto GAC representa una oportunidad para:

●  Eficientar radicalmente el proceso de gestión de la capacitación.
●  Reducir la carga operativa del equipo de capacitación, permitiéndoles enfocarse en

tareas de mayor valor estratégico.

●  Mejorar la precisión en la conformación de grupos y la asignación de recursos.
●  Proporcionar una experiencia de usuario mejorada tanto para administradores
como para colaboradores y sus líderes, ofreciendo información clara y accesible.
●  Alinear la gestión de la capacitación con la estrategia de transformación digital

de Gentera.

●  Reforzar el Valor Humano al facilitar el acceso y seguimiento al desarrollo

profesional de los colaboradores.

●  Generar datos estructurados que permitan un mejor análisis y toma de decisiones

sobre la efectividad de la capacitación.

3. Objetivos del Proyecto

3.1. Objetivo General

Desarrollar e implementar una aplicación web que automatice y optimice el proceso de
gestión de la capacitación en Gentera, desde la identificación de colaboradores hasta el
seguimiento de su progreso, mejorando la eficiencia, la precisión y la experiencia de todos
los usuarios involucrados.

3.2. Objetivos Específicos

●  Automatizar la identificación de colaboradores elegibles para capacitación en un

95%, basándose en fechas de ingreso/promoción y reglas de negocio predefinidas.

●  Reducir en un 80% el tiempo dedicado por los administradores a la creación y

●

segmentación de listas de capacitación.
Implementar un sistema de asignación de recursos (formadores, sedes) que sea un
70% más ágil.

●  Automatizar el envío de invitaciones y notificaciones a través de Outlook, Teams y

WhatsApp.

●  Proporcionar a los colaboradores y sus líderes una interfaz clara y accesible para

visualizar el progreso de la capacitación en tiempo real.

●  Desarrollar dashboards y reportes personalizables para administradores y

formadores que permitan un seguimiento efectivo de los indicadores clave de
capacitación.

●  Garantizar una tasa de adopción del 85% entre los usuarios administradores en los

primeros 3 meses post-implementación.

●  Asegurar que la plataforma cumpla con los estándares de seguridad, rendimiento y

usabilidad definidos por Gentera.

4. Alcance del Proyecto

El desarrollo se divide en dos vertientes principales:

4.1. Desarrollo 1: Automatización de la Segmentación y Envíos de
Invitaciones

●  F1: Identificar colaboradores a capacitar:

○  Carga de la plantilla de capacitación (Excel semi-limpio proveniente de ADN).
○

Identificación automática de nuevos ingresos, cambios de puesto o
promociones basados en fechas y reglas de negocio.

○  Filtrado de colaboradores activos y elegibles según las áreas y puestos

definidos (Ventas/Negocios, Operaciones, Yastás, Sucursales, Cobranza).
○  Aplicación de reglas de exclusión (ej. SEAS, bajas, incapacidades "IPP").
○  Consideración de reingresos (regla de los 6 meses).
○  Consolidación de faltas de cursos anteriores.

●  F2: Segmentar listas generando grupos:

○  Agrupación automática por puesto, subdirección y tipo de curso.
○  Aplicación de reglas para tamaño de grupos (presenciales: min 5, max 25;

online: min 10, max 15).

○  Consideración de la lógica "gerente multiproducto".
○  Asignación preliminar de sede (opción 1 y 2 según oficina), días y horarios.

●  F3: Asignar recursos:

○

Interfaz para que el Líder Operativo asigne formadores a los grupos
generados, con visibilidad de la carga de trabajo.

○  Visualización para formadores de los grupos que capacitarán (listas y

agenda).

●  F4: Envío de invitación por medio de Outlook y Teams/WA:

○  Envío automático de invitaciones a Gerentes (Outlook, formato específico).
○  Envío de invitación/notificación a colaboradores (Teams, WhatsApp con

archivo .ical).

4.2. Desarrollo 2: Trazabilidad de la Capacitación

●  F1: Estatus del avance por colaborador (user):

○  Vista amigable, atractiva y sencilla para que el colaborador conozca su

estatus, progreso en la ruta de capacitación (actualmente 12 niveles: Básico,
Intermedio, Avanzado, Experto, con toques con formador en niveles 1, 4, 8,
12) y detalles de cada hito.

●  F2: Resumen del Estatus del avance de colaboradores (supervisor_user):
○  Vista para Líderes de Unidad/Subgerentes/Gerentes para ver el avance

general y detallado de sus equipos.

○  Vista para Jefes con personal a cargo para ver su propio estatus y el de sus

reportes.

○  Vista para Subdirectores/Directores para ver el avance de sus

subdirecciones/direcciones, con filtros por oficina y % de avance.

○  Filtro por dirección (visualizar solo oficinas y colaboradores de su dirección).

●  F3: Dashboard y reporte del estatus de avance por formador (admin_user):

○  Vista para formadores (desde perfil admin) para ver avance de colaboradores
de la subdirección que atienden, dashboards sencillos, tablas filtradas y
exportación a Excel.

●  F4: Dashboard y reporte de indicadores claves de capacitación (admin_user):

○  Dashboard para Administradores de Capacitación con principales indicadores

(% asistencia, calificación promedio, % avance por usuario).

○  Descarga de concentrado de colaboradores con estatus en la ruta de

capacitación (acreditado, en progreso, % avance respecto a los 6 meses –
considerar la ruta actual de 12 meses y la posible futura de 6 meses).

●  F5: Consumo de base de datos externas:

○  Capacidad para que el administrador alimente el desarrollo con tablas (Excel)

del estatus de cada etapa de la ruta (si aplica, además de la plantilla
principal).

4.3. Funcionalidades Adicionales Clave

●  Autenticación:

○  Login para usuarios: Número de empleado.
○  Contraseña: Fecha de nacimiento.

●  Notificaciones:

○  Alertas para usuarios (individuales o de equipo) sobre retrasos o hitos

importantes, preferentemente vía WhatsApp.

●  Gestión de Usuarios y Sistema (Super Admin - EdTech):

○  Permisos completos para el Super Admin.
○  Alta y gestión de otros usuarios.
○  Carga de archivos (plantilla de capacitación).
○  Actualización semanal de la base de datos principal.

●
●

Interfaz de Administración (Back-end): Para configuración y gestión del sistema.
Interfaz de Usuario (Front-end): Para la interacción de los diferentes roles.

4.4. Fuera del Alcance (para esta fase inicial, a confirmar)

●  Creación o modificación del contenido de los cursos.
●

Integración directa con la plataforma ADN para la asignación automática de cursos
(la plataforma GAC consumirá la información de la plantilla).

●  Gestión de viáticos y logística de hoteles (aunque la información de sede y

hospedaje se maneja).

5. Usuarios Clave y Sus Necesidades

Usuario

Necesidades Clave

Dolencias Actuales

Administrador de
Capacitación
(Carlos)

Identificar y segmentar colaboradores
de forma rápida y precisa. Generar
grupos automáticamente. Enviar
convocatorias eficientemente. Obtener
reportes consolidados.

Proceso manual extenso y
complejo. Riesgo de
errores. Dificultad para
consolidar información.
Consume mucho tiempo.

Colaborador en
Capacitación

Conocer su ruta de capacitación, su
progreso actual, fechas importantes y
qué le falta de manera clara y
atractiva. Recibir notificaciones
oportunas.

Falta de visibilidad
centralizada de su progreso.
Dependencia de
comunicados.

Líder de Unidad /
Subgerente /
Gerente

Ver el avance de su equipo en la
capacitación. Identificar cuellos de
botella o necesidades de apoyo.

Dificultad para obtener una
visión consolidada y en
tiempo real del progreso de
su equipo.

Subdirector /
Director

Visualizar el % de avance de la
capacitación en sus áreas de
responsabilidad, con capacidad de
filtrar y analizar.

Acceso limitado a
información agregada y
estratégica sobre la
capacitación.

Formador

Visualizar los grupos asignados, la
lista de participantes y su progreso.
Acceder a reportes de sus grupos.

Recepción de listas en
formatos dispersos.
Seguimiento manual del
progreso de los
participantes.

Líder Operativo

Asignar formadores a los grupos de
manera sencilla, con visibilidad de la
disponibilidad y carga de trabajo.

Proceso de asignación
manual y poco transparente.

Super Admin
(EdTech)

Gestionar usuarios, cargar datos
maestros, configurar el sistema y
tener control total para mantenimiento
y solución de problemas.

Dependencia de procesos
manuales para actualizar
datos o gestionar accesos.

6. Requerimientos Clave

6.1. Funcionales

●  Carga y Procesamiento de Datos:

Importación de archivo Excel (plantilla de capacitación semi-limpia).

○
○  Limpieza automática de datos (ej. quitar espacios, validar formatos básicos).
○  Filtrado avanzado basado en múltiples criterios (fecha de ingreso, puesto,

ubicación, dirección, estatus activo/baja, etc.).

○  Aplicación de reglas de negocio para identificación de elegibles (nuevos

ingresos, promociones, reingresos, faltas previas).

○  Exclusión de personal de SEAS y otras áreas no contempladas.

●  Lógica de Segmentación y Agrupación:

○

Implementación de la regla "gerente multiproducto" (si hay asesor CIE en la
oficina, el gerente es multiproducto).

○  Agrupación por puesto, subdirección, tipo de curso (Básico, Intermedio, etc.).
○  Validación de cupos por grupo (presencial/online).
○  Asignación de sedes (Opción 1, Opción 2) y horarios.

●  Gestión de Cursos y Rutas de Capacitación:

○  Mapeo de puestos a rutas de capacitación específicas (considerar los 12

niveles actuales y la posible futura de 6).

○  Diferenciación entre cursos con "toque con formador" y cursos

autogestionados en ADN.

○  Consideración de excepciones (ej. Gerente de Ventas no toma nivel básico,

Gerente Yastás solo nivel 4).

●  Asignación de Recursos:

○
Interfaz para asignación de formadores a grupos.
○  Visualización de agenda/carga para formadores.

●  Notificaciones y Comunicaciones:

○
○

Integración con Outlook para envío de correos a gerentes.
Integración con Teams y/o API de WhatsApp para notificaciones a
colaboradores (con archivo .ical).

○  Plantillas de comunicación personalizables.

●  Seguimiento y Visualización de Progreso:

Interfaces diferenciadas por rol (colaborador, líder, formador, admin).

○
○  Cálculo y visualización de % de avance.
○  Detalle de hitos completados y pendientes.

●  Dashboards y Reportes:

○
Indicadores clave: % asistencia, calificación promedio, % avance, etc.
○  Filtros personalizables (por dirección, oficina, puesto, formador, fechas).
○  Exportación de datos a Excel.

●  Administración del Sistema:

○  Gestión de usuarios y roles.
○  Carga manual de la plantilla de capacitación.
○  Logs de actividad y errores.

6.2. No Funcionales

Interfaz intuitiva, clara y fácil de navegar para todos los perfiles de usuario.

●  Usabilidad:
○
○  Mínima curva de aprendizaje.
○  Diseño atractivo y amigable, alineado con la identidad de Gentera.
○  Mensajes de error claros y orientativos.

●  Rendimiento:

○  Tiempos de carga rápidos, especialmente en el procesamiento de la plantilla

y generación de listas.

○  Capacidad para manejar el volumen de datos de más de 27,000

colaboradores y actualizaciones semanales.
○  Respuesta eficiente de dashboards y reportes.

●  Seguridad:

○  Autenticación segura (Número de empleado / Fecha de nacimiento).
○  Protección de datos personales y confidenciales según normativas.
○  Roles y permisos bien definidos para evitar acceso no autorizado a la

información.

●  Escalabilidad:

○  Arquitectura que permita el crecimiento futuro en número de usuarios y

volumen de datos.

○  Facilidad para incorporar nuevos módulos o funcionalidades (ej. cambios en

la ruta de capacitación).

●  Mantenimiento:

○  Código bien documentado y modular para facilitar futuras actualizaciones y

correcciones.

●  Disponibilidad:

○  Cumplir con los SLAs definidos (ej. < 1 hora de indisponibilidad por causas

del desarrollo).

○  Actualización semanal de la base de datos principal.

●  Compatibilidad:

○  Compatibilidad con navegadores web modernos.
○  Diseño responsivo para correcta visualización en diferentes dispositivos

(desktop, tablet).

6.3. Datos

●  Fuente Principal: Archivo Excel ("Plantilla de Capacitación") que es una versión

semi-limpia de un extracto de ADN. Se carga semanalmente.

●  Campos Clave a Utilizar (ejemplos): Número de nómina, Nombre, Fecha de

contratación, Eventos (cambio de posición, sueldo, ingreso, promoción), Motivo del
evento, Fecha del evento, Centro de costos, Jefe inmediato, Fecha de inicio en
posición, Puesto (descripción y clave SAP), Correo institucional (de ADN), Fecha de
nacimiento, Género, Edad, Negocio (Ventas, Operaciones, Yastás, SEAS), Dirección
Ejecutiva, Ubicación (oficina), Estatus (activo/baja), INC/IPP (incapacidades).

●  Transformación de Datos Necesaria por la Plataforma:

○  Limpieza de datos (eliminar SEAS, bajas, etc.).
○  Aplicación de filtros y reglas de negocio para identificar la población objetivo.
○  Normalización de puestos y áreas si es necesario.
○

Identificación de gerentes multiproducto.

●  Histórico: La plataforma debe considerar el histórico de capacitación desde 2023 en

adelante para validaciones y reportes.

7. Principios de Diseño y Experiencia de Usuario (UX)

●  Centrado en la Persona (Valor Gentera): Diseñar cada interacción pensando en el
usuario final, sus necesidades y su contexto. La plataforma debe sentirse humana y
de apoyo.

●  Eficiencia y Optimización: Simplificar tareas complejas, reducir clics innecesarios y

automatizar procesos repetitivos. El flujo debe ser lógico e intuitivo.

●  Claridad y Transparencia: La información debe presentarse de forma clara, concisa

y fácil de entender. Los usuarios deben saber siempre dónde están y qué se espera
de ellos.

●  Consistencia: Mantener una interfaz visual y funcional coherente en toda la

aplicación, utilizando los colores y elementos de la identidad gráfica de Gentera.

●  Feedback Constante: Proveer retroalimentación inmediata a las acciones del

usuario (ej. confirmaciones, mensajes de carga, errores).

●  Diseño Atractivo y Amigable: Crear una experiencia visualmente agradable que

motive el uso de la plataforma.

●  Accesibilidad: Considerar principios básicos de accesibilidad para asegurar que la

plataforma pueda ser utilizada por el mayor número de personas posible.

8. Métricas de Éxito

●  Operativas:

○  Reducción del tiempo promedio para generar las listas de capacitación

semanales (Ej: de X horas a Y minutos).

○  Número de errores en la convocatoria de capacitación (objetivo: reducción

del X%).

○  Tiempo de procesamiento de la plantilla de capacitación.

●  Adopción y Uso:

○  Número de usuarios activos por rol.
○  Frecuencia de uso de las funcionalidades clave (dashboards, reportes).

●  Satisfacción del Usuario (encuestas, feedback):

○  Nivel de satisfacción de Administradores de Capacitación.
○  Nivel de satisfacción de Colaboradores y Líderes con la visualización de

progreso.
●  Calidad y Cumplimiento:

○  Cumplimiento de SLAs de disponibilidad y rendimiento.
○  Número de incidencias reportadas post-lanzamiento.

9. Consideraciones Adicionales

●  Vigencia del Proyecto: Originalmente del 19 de junio al 30 de octubre de 2023

(esta fecha requiere actualización).

●  Metodología: Desarrollo Ágil con sprints.
●  Alojamiento y Migración: El desarrollo vivirá en el servidor del proveedor

●

(Dacodes) durante el primer año, con posibilidad de migrar a servidores de Gentera.
Identidad Gráfica: Utilizar los colores institucionales de Gentera (Pantone 526C,
3268C, 431C, 221C, Rubine Red C, 158C) y seguir sus lineamientos de marca.
●  Evolución del Modelo de Capacitación: Tener presente la posible transición de la
ruta de capacitación de 12 niveles a 6 niveles (originalmente planeada para enero
2024) y diseñar la plataforma con flexibilidad para adaptarse a estos cambios.
●  Comunicación: Se utilizará Google Meets para reuniones (con grabación) y se

compartirá una carpeta en Drive para la documentación. Se podría crear un grupo de
Telegram para comunicación directa.

10. Riesgos Potenciales (Desde la Perspectiva de
Diseño y Adopción)

●  Resistencia al Cambio: Usuarios clave (especialmente administradores) pueden
mostrar resistencia a adoptar una nueva herramienta y abandonar procesos
manuales arraigados.

●  Complejidad de Reglas de Negocio: La gran cantidad y especificidad de las reglas
de negocio para la segmentación pueden ser difíciles de traducir completamente a
lógica automatizada, requiriendo validaciones exhaustivas.

●  Calidad de Datos de Entrada: La efectividad de la plataforma dependerá de la

calidad y consistencia de la plantilla de Excel proporcionada. Inconsistencias pueden
llevar a errores en la automatización.

●  Curva de Aprendizaje: Aunque se busca una interfaz intuitiva, algunos usuarios

●

podrían requerir capacitación y soporte adicional.
Integración con Sistemas Externos: Posibles desafíos técnicos o de permisos en
las integraciones con Outlook, Teams y WhatsApp.

●  Mantenimiento de Reglas: Las reglas de negocio y los puestos pueden cambiar,

requiriendo actualizaciones en la plataforma.

11. Equipo del Proyecto y Roles (Conocidos)

●  Cliente (Gentera):

○  Carlos (Experto en el proceso actual de capacitación).
○  Lalo (Líder del proyecto por parte de Gentera).
○  Marta (Contexto sobre cursos virtuales).
○  Alberto (Proveedor de la plantilla de datos).
○  Equipo de Formadores, Líderes Operativos.

●  Proveedor (Dacodes):

○  Product Designer (Responsable de este brief y del diseño UX/UI).
○  Equipo de Desarrollo.
○  Líderes de Proyecto (Rodrigo).

12. Próximos Pasos (Desde la Perspectiva del Product
Designer)

1.  Validación del Brief: Presentar y validar este documento detallado con el equipo de

Gentera y Dacodes para asegurar alineación.

2.  Definición de Épicas y User Stories Detalladas: Desglosar las funcionalidades en

historias de usuario más granulares para los sprints de desarrollo.

3.  Diseño de Flujos de Usuario (User Flows): Mapear los recorridos de los diferentes

roles dentro de la plataforma.

4.  Creación de Wireframes: Diseñar la estructura y disposición de los elementos en

las pantallas clave.

5.  Desarrollo de Prototipos Interactivos: Crear prototipos para visualizar la

navegación y funcionalidades principales.

6.  Pruebas de Usabilidad: Realizar pruebas con usuarios representativos de Gentera

para obtener feedback temprano e iterar sobre el diseño.

7.  Diseño de Interfaz de Usuario (UI Design): Aplicar la identidad visual de Gentera y

crear el diseño final de las pantallas.

8.  Entrega de Especificaciones de Diseño: Documentar y entregar los diseños

finales al equipo de desarrollo.

9.  Acompañamiento Continuo: Colaborar estrechamente con el equipo de desarrollo

durante la implementación y realizar validaciones de diseño.

