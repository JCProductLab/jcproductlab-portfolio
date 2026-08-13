Modelos de Navegación - Plataforma GAC

Este documento describe los sistemas de navegación propuestos para la plataforma
de Gestión Automatizada de la Capacitación (GAC), diseñados para ser claros,
consistentes y adaptados a las necesidades y permisos de cada rol de usuario. El
objetivo es permitir a los usuarios moverse por la plataforma de forma intuitiva y
eficiente, encontrando la información y funcionalidades que necesitan con facilidad.

Principios de Navegación:

●  Claridad y Consistencia: Los elementos de navegación deben ser fáciles de
entender y mantener una ubicación y apariencia consistentes en toda la
plataforma.

●  Adaptación por Rol: La navegación principal y las opciones disponibles se

ajustarán automáticamente según el rol del usuario autenticado.

●  Eficiencia: Minimizar los clics y la complejidad para que los usuarios puedan

completar sus tareas rápidamente.

●  Feedback de Ubicación: Los usuarios siempre deben saber dónde se encuentran

dentro de la estructura del sitio.

●  Terminología Familiar: Utilizar etiquetas de navegación que resuenen con el

vocabulario de Gentera y los modelos mentales de los usuarios.

1. Navegación Primaria (Global):

La navegación primaria permitirá a los usuarios acceder a las secciones principales de
la plataforma. Se propone un Menú de Navegación Lateral Persistente (Sidebar)
visible en la mayoría de las pantallas, con un diseño colapsable para optimizar el
espacio en pantallas más pequeñas o para preferencias de usuario.

●  Elementos Comunes (Visibles según Permisos del Rol):

○

Inicio / Dashboard: La primera pantalla al iniciar sesión, ofreciendo un
resumen relevante para cada rol.

○  Mi Perfil / Configuración de Cuenta: Acceso a la información personal y

ajustes.

○  Notificaciones: Acceso a la bandeja de alertas y mensajes del sistema.
○  Ayuda / Soporte: Enlace a recursos de ayuda o contacto con soporte.
○  Cerrar Sesión: Para salir de la aplicación.

●  Elementos Específicos por Rol en la Navegación Primaria:

○  Administrador (Carlos):

■  Gestión de Plantillas y Datos: Para cargar y revisar el procesamiento de la

plantilla.

■  Gestión de Grupos: Para ver propuestas, ajustar y crear grupos.
■  Asignación de Recursos: Para gestionar formadores y grupos pendientes.
■  Comunicaciones: Para enviar convocatorias y gestionar plantillas.
■  Reportes y Dashboards: Para acceder a los indicadores clave y generar

informes.
○  Colaborador (Ana):

■  Mi Ruta de Capacitación: Acceso al mapa visual de su progreso.
■  Mis Cursos: Para ver próximos cursos e historial.

○  Líder (David):

■  Mi Equipo: Para el dashboard de avance de sus colaboradores.
■  Reportes de Equipo: Para generar informes específicos de su área.

○  Formador (Elena):

■  Mi Agenda: Para ver su calendario de cursos asignados.
■  Mis Grupos: Para acceder a las listas de participantes y registrar

asistencia.

■  Reportes de Avance: Para ver el progreso de los colaboradores que

atiende.

○  Super Admin:

■  Gestión de Usuarios: Para administrar los accesos a la plataforma.
■  Configuración del Sistema: Para gestionar reglas, datos maestros e

integraciones.

■  Monitoreo y Logs: Para supervisar el rendimiento y la actividad del

sistema.

2. Navegación Secundaria (Local):

La navegación secundaria se utilizará dentro de las secciones principales para
organizar subsecciones o funcionalidades relacionadas.

●  Pestañas (Tabs): Ideal para alternar entre diferentes vistas dentro de una misma

sección.
○  Ejemplo en "Gestión de Plantillas y Datos" (Administrador): Pestañas "Cargar

Plantilla" | "Historial de Cargas" | "Reporte de Errores".

○  Ejemplo en "Mis Cursos" (Colaborador): Pestañas "Próximos Cursos" | "Historial

de Completados".

●  Submenús o Acordeones: Para agrupar opciones relacionadas que no requieren

estar siempre visibles.
○  Ejemplo en "Reportes y Dashboards" (Administrador): Un submenú

desplegable con "Indicadores Clave", "Concentrado de Colaboradores",
"Reportes Personalizados".

●  Filtros y Controles: Elementos interactivos dentro de las vistas de datos (tablas,

dashboards) que permiten refinar la información.
○  Ejemplo en "Dashboard de Equipo" (Líder): Filtros por "Oficina", "Estatus de

Avance", "% de Avance".

3. Navegación Contextual:

Permite a los usuarios moverse a información relacionada o realizar acciones
directamente desde el contenido que están visualizando.

●  Enlaces en Contenido:

○  Desde el "Mapa de Mi Ruta de Capacitación" (Colaborador), hacer clic en un

curso para ver sus "Detalles del Curso".

○  Desde el "Dashboard de Equipo" (Líder), hacer clic en el nombre de un

colaborador para ver su "Detalle de Colaborador" individual.

●  Botones de Acción:

○  Botones como "Generar Grupos", "Enviar Convocatorias", "Añadir a Calendario",
"Exportar a Excel" ubicados contextualmente donde la acción es relevante.

●  Breadcrumbs (Migas de Pan):

○  Una línea de texto en la parte superior de la pantalla que muestra la ruta de

navegación del usuario (ej. "Inicio > Gestión de Grupos > Detalle de Grupo X"),
ayudándoles a entender su ubicación y a retroceder fácilmente.

4. Búsqueda (Search):

Se incluirá una funcionalidad de búsqueda para permitir a los usuarios encontrar
rápidamente colaboradores o cursos específicos.

●  Búsqueda Global: Una barra de búsqueda prominente en la cabecera de la

aplicación (o en el menú lateral) que permita buscar en todo el contenido accesible
al usuario.

●  Búsqueda Específica: En secciones con grandes volúmenes de datos (ej. "Lista de

Colaboradores", "Historial de Cargas"), se ofrecerán campos de búsqueda
específicos para refinar los resultados.

Consideraciones Clave para la Implementación de la Navegación:

●  Diseño Responsivo: La navegación debe adaptarse fluidamente a diferentes

tamaños de pantalla (escritorio, tablet, móvil), posiblemente colapsando el menú
lateral en dispositivos más pequeños y ofreciendo un ícono de "hamburguesa"

para desplegarlo.

●  Estado Activo: El elemento de navegación de la sección actual debe estar

visualmente resaltado para indicar la ubicación del usuario.

●  Accesibilidad: Asegurar que la navegación sea accesible para usuarios con

diversas capacidades, utilizando etiquetas claras, orden de tabulación lógico y
soporte para lectores de pantalla.

Este diseño de arquitectura de información y modelos de navegación busca crear una
experiencia de usuario intuitiva y eficiente en la plataforma GAC, facilitando que cada
rol acceda a la información y funcionalidades que más necesita.

