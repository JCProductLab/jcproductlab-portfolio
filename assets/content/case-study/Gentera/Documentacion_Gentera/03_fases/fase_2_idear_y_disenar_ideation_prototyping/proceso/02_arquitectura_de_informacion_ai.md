Proceso de Diseño GAC: Fase 2 - Idear y Diseñar
(Continuación)

Actividad 2: Arquitectura de Información (AI)

Introducción:
Después de generar y validar conceptos iniciales mediante brainstorming y bocetos, la
siguiente etapa es definir la estructura subyacente de la plataforma GAC. La Arquitectura de
Información (AI) se enfoca en organizar, estructurar y etiquetar el contenido y la funcionalidad
de manera lógica y coherente. El objetivo es que los diferentes roles de usuario puedan
encontrar la información que necesitan y completar sus tareas de forma intuitiva y eficiente.
Una AI sólida es la base para una buena experiencia de usuario.
Objetivos Principales:

●  Organizar todo el contenido (datos, información) y las funcionalidades de la

plataforma GAC de una manera que tenga sentido para los usuarios.

●  Definir la estructura jerárquica y las relaciones entre las diferentes secciones y

características de la aplicación.

●  Diseñar sistemas de navegación claros y consistentes que permitan a los usuarios

moverse por la plataforma con facilidad.

●  Asegurar que la información sea fácilmente localizable (findability) y accesible para

cada rol de usuario, considerando sus permisos y necesidades específicas.

●  Establecer un vocabulario y un sistema de etiquetado (labeling) coherente en toda

la plataforma.

Preparación:

1.  Revisar y Sintetizar Insumos Clave:

○  User Personas: Para entender las metas, necesidades y modelos mentales de

cada tipo de usuario. La AI debe estar diseñada pensando en ellos.

○  User Journey Maps ("As-Is" y "To-Be" preliminares): Para identificar los
puntos de contacto informativos y las necesidades de navegación en cada
etapa del viaje del usuario.

○  Documento de Reglas de Negocio y Requerimientos Funcionales: Para

asegurar que toda la funcionalidad requerida esté contemplada en la
estructura.

○

○  Conceptos Priorizados de Bocetos: Los bocetos seleccionados ya sugieren
agrupaciones de funcionalidades y elementos de pantalla que informarán la AI.
Inventario de Contenido y Funcionalidades (Preliminar): Comenzar a listar
todos los tipos de información que GAC mostrará (ej. datos de colaboradores,
listas de cursos, progreso, reportes) y todas las acciones que los usuarios
podrán realizar (ej. cargar plantilla, segmentar grupos, asignar formador, ver
dashboard).

2.  Identificar Participantes para Talleres/Revisiones de AI:

○  Product Designer (yo): Liderando y facilitando el proceso de AI.
○  Equipo de Desarrollo (especialmente Tech Lead y Frontend): Para

entender las implicaciones técnicas de la estructura propuesta y la viabilidad de
la navegación.

○  Líder de Proyecto (Rodrigo de Dacodes): Para la alineación general.
○  Opcional, pero útil para validación:

■  Lalo (Líder de Proyecto Gentera) y Carlos (Administrador): Para validar

que la organización propuesta tenga sentido desde la perspectiva del
negocio y del usuario experto.

3.  Herramientas a Utilizar:

○  Herramientas de Diagramación: Miro, FigJam, Lucidchart, XMind (para

mapas mentales y sitemaps).

○  Hojas de Cálculo: Para inventarios de contenido y funcionalidades.
○  Notas Adhesivas y Pizarra (físicas o virtuales): Para ejercicios como card

sorting (si se realiza).

Proceso de Diseño de la Arquitectura de Información:

1.  Inventario Detallado de Contenido y Funcionalidades:

○  Crear una lista exhaustiva de todos los elementos de información y todas las

funcionalidades que la plataforma GAC debe albergar.

○  Para cada elemento, considerar:

■  ¿Quién lo necesita? (Roles de usuario)
■  ¿Con qué frecuencia se accede/usa?
■  ¿Cuál es su propósito?
■  ¿Está relacionado con otros contenidos o funcionalidades?

○  Este inventario puede tomar la forma de una hoja de cálculo o una lista

estructurada.

2.  Definición de la Estructura de la Información (Agrupación y Jerarquía):
○  Método Principal: Basado en el análisis de los requerimientos, las

necesidades de las personas y los flujos de tareas.

○  Considerar Card Sorting (Opcional, pero recomendado si hay

ambigüedad):
■  Abierto: Presentar a los usuarios (o al equipo interno como proxy) tarjetas
con los nombres de las funcionalidades/contenidos y pedirles que los
agrupen de la manera que les parezca más lógica y que nombren esos
grupos.

■  Cerrado: Presentar categorías predefinidas y pedir a los usuarios que

asignen las tarjetas a esas categorías.

■  Esto ayuda a entender los modelos mentales de los usuarios sobre cómo

se relaciona la información.

○  Agrupar el contenido y las funcionalidades en categorías lógicas y de alto
nivel. Estas categorías a menudo se convierten en las secciones principales
de la navegación.
■  Ejemplo de categorías para el Administrador: "Gestión de Colaboradores",

"Generación de Grupos", "Asignación de Recursos", "Reportes y
Dashboards", "Configuración del Sistema".

■  Ejemplo para el Colaborador: "Mi Ruta de Capacitación", "Mis Cursos", "Mi

Progreso".

○  Establecer una jerarquía clara: ¿Qué información es de primer nivel,

segundo nivel, etc.?

3.  Diseño de Sistemas de Navegación:

○  Navegación Primaria: ¿Cómo accederán los usuarios a las secciones
principales? (Ej. Menú lateral persistente, menú superior). Considerar la
frecuencia de uso y la importancia de cada sección para los diferentes roles.

○  Navegación Secundaria/Local: ¿Cómo navegarán dentro de una sección

específica? (Ej. Pestañas, submenús).

○  Navegación Contextual: Enlaces dentro del contenido que llevan a

información relacionada.

○  Breadcrumbs (Migas de Pan): Para ayudar a los usuarios a entender dónde

están dentro de la jerarquía y cómo regresar.

○  Búsqueda (Search): Considerar si se necesita una función de búsqueda
global o específica para ciertos contenidos (ej. buscar un colaborador, un
curso).

○  Adaptación por Rol: La navegación principal y las opciones disponibles deben
adaptarse según el rol del usuario y sus permisos. Un "Colaborador" no verá
las mismas opciones que un "Super Admin".

4.  Creación de Mapas del Sitio (Sitemaps) o Mapas de Aplicación:

○  Crear un diagrama visual que represente la estructura jerárquica de todas las

páginas/pantallas y secciones de la plataforma GAC.

○  El sitemap debe mostrar cómo están conectadas las diferentes partes y cómo

fluye la navegación.

○  Puede haber sitemaps ligeramente diferentes o vistas filtradas por rol si la

estructura varía significativamente.

5.  Definición de Esquemas de Etiquetado (Labeling):

○  Elegir nombres claros, concisos y consistentes para todas las secciones,

subsecciones, enlaces de navegación y botones.

○  Utilizar terminología que sea familiar para los usuarios de Gentera (basada en
el glosario de términos de negocio y el lenguaje usado en las entrevistas).

○  Evitar la jerga técnica o nombres ambiguos.
○  La consistencia en el etiquetado es clave para la usabilidad.

6.  Consideraciones Específicas para Roles de Usuario:

○  Administrador de Capacitación (Carlos): Necesitará acceso a

funcionalidades complejas de gestión, configuración y reportes detallados. La
AI debe permitirle realizar sus tareas de manera eficiente.

○  Colaborador en Capacitación (Sofía): Necesitará una vista simple y clara de
su progreso, cursos y próximos pasos. La AI debe ser directa y motivadora.
○  Líderes (Ricardo): Necesitarán dashboards y reportes resumidos del progreso

de sus equipos, con la capacidad de profundizar en detalles.

○  Formadores: Necesitarán ver sus grupos asignados, listas de participantes y,

potencialmente, reportar avances.

○  Super Admin (EdTech): Necesitará acceso a todas las funcionalidades,

incluyendo la gestión de usuarios y la configuración avanzada del sistema.

Validación:

1.  Revisión Interna del Equipo (Dacodes):

○  El Product Designer presenta la AI propuesta (sitemaps, modelos de

navegación) al equipo de desarrollo y al líder de proyecto.

○  Discutir la claridad, la lógica, la completitud y la factibilidad técnica.
○

Iterar sobre la AI basándose en el feedback interno.

2.  Pruebas de Navegación con Escenarios (Tree Testing - Opcional pero muy

útil):
○  Presentar a los usuarios (o proxies) una estructura de menú (solo texto, sin
diseño visual) y pedirles que indiquen dónde encontrarían información
específica o completarían tareas.

○  Esto ayuda a validar si la estructura y el etiquetado son intuitivos antes de

invertir en el diseño visual.

3.  Validación con Stakeholders Clave de Gentera:

○  Presentar la AI (especialmente el sitemap y los conceptos de navegación

principal) a Lalo, Carlos y otros stakeholders relevantes.

○  Explicar la lógica detrás de la organización y cómo facilita las tareas de los

diferentes roles.

○  Recopilar feedback sobre si la estructura tiene sentido para ellos y si creen que

los usuarios podrán encontrar lo que necesitan.

Salidas/Entregables:

●

Inventario de Contenido y Funcionalidades: Una lista detallada de todos los
elementos a organizar.

●  Diagramas de Arquitectura de Información:

○  Mapa del Sitio (Sitemap) detallado: Mostrando la jerarquía de todas las

pantallas y secciones.

○  Modelos de Navegación: Diagramas o descripciones de cómo funcionarán los

sistemas de navegación principales y secundarios para los diferentes roles.

●  Esquema de Etiquetado (Labeling System): Un listado de las etiquetas

principales que se usarán en la navegación y en la interfaz.

●  Resultados de Card Sorting o Tree Testing: Si se realizaron estas actividades.
●  Documento de Especificaciones de AI: Un resumen que explique la lógica y las
decisiones detrás de la arquitectura propuesta, incluyendo cómo se adapta a los
diferentes roles.

Conclusión de la Actividad 2 (Fase 2):
Una Arquitectura de Información bien pensada es invisible para el usuario cuando funciona
bien, pero es la causa de mucha frustración cuando está mal diseñada. Al dedicar tiempo a
organizar el contenido y la funcionalidad de GAC de manera lógica y centrada en el usuario,
estamos sentando las bases para una plataforma que no solo sea potente, sino también fácil y
agradable de usar. Esta estructura guiará el diseño de los flujos de usuario detallados y los
wireframes en las siguientes actividades.

