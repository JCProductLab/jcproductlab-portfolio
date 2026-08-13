Proceso de Diseño GAC: Fase 2 - Idear y Diseñar
(Continuación)

Actividad 3: Diseño de Flujos de Usuario (User Flows)

Introducción:
Con la Arquitectura de Información (AI) establecida, que nos da el "qué" y el "dónde" de la
plataforma GAC, los Flujos de Usuario (User Flows) se centran en el "cómo". Esta actividad
consiste en mapear las rutas y secuencias de pasos que los diferentes roles de usuario
seguirán para completar tareas clave dentro de la plataforma. Los User Flows son esenciales
para asegurar una navegación lógica, eficiente y sin fricciones, ayudando a identificar posibles
obstáculos o puntos de confusión antes de pasar al diseño detallado de las pantallas.
Objetivos Principales:

●  Visualizar y documentar los caminos paso a paso que los usuarios (representados

por las Personas) tomarán para lograr sus objetivos principales dentro de la
plataforma GAC.

●  Considerar diferentes escenarios, incluyendo el "camino feliz" (happy path), rutas

alternativas y manejo de errores.

●  Asegurar que los flujos sean eficientes, intuitivos y estén alineados con los

●

modelos mentales de los usuarios y las reglas de negocio.
Identificar todas las pantallas y puntos de decisión necesarios para cada tarea
clave.

●  Proporcionar una base clara para la creación de wireframes detallados.
●  Facilitar la comunicación y el entendimiento común entre diseñadores,
desarrolladores y stakeholders sobre cómo funcionará la interacción.

Preparación:

1.  Reunir Insumos Clave:

○  User Personas: Para entender quién está realizando la tarea, sus motivaciones,

necesidades y contexto.

○  User Journey Maps ("To-Be" preliminares): Estos ya esbozan una

experiencia ideal y pueden informar los flujos.

○  Arquitectura de Información (Sitemap, Modelos de Navegación): Para
entender la estructura general y las secciones disponibles por donde los
usuarios se moverán.

○  Documento de Reglas de Negocio y Requerimientos Funcionales: Para
asegurar que los flujos respeten la lógica de negocio y cubran todas las
funcionalidades necesarias.

○  Conceptos Priorizados de Bocetos: Los bocetos pueden haber explorado ya

○

mini-flujos o secuencias de pantallas.
Inventario de Contenido y Funcionalidades: Para tener claro qué
información y acciones deben estar accesibles en los flujos.

2.  Identificar Tareas Clave y Escenarios por Persona:

○  Basado en los objetivos del proyecto y las necesidades de las Personas, listar
las tareas más importantes que cada rol realizará en GAC. Priorizar las tareas
que son fundamentales para el valor de la plataforma o que son complejas.

○  Ejemplos de Tareas Clave:

■  Para Carlos (Administrador de Capacitación):

■  Cargar y procesar la plantilla de capacitación semanal.
Identificar y validar la lista de colaboradores elegibles.
■

■  Crear y segmentar grupos de capacitación (presenciales y online).
■  Asignar formadores, sedes y horarios a los grupos.
■  Enviar invitaciones a gerentes y colaboradores.
■  Generar un reporte de avance de capacitación.

■  Para Sofía (Colaboradora en Capacitación):

■  Consultar su ruta de capacitación y progreso actual.
■  Ver detalles de un curso específico al que está asignada.
■  Confirmar asistencia a un curso (si aplica).

■  Para Ricardo (Líder de Unidad/Gerente):

■  Ver el resumen del progreso de capacitación de su equipo.
■  Filtrar el progreso por colaborador u oficina.

■  Para un Formador:

■  Visualizar los grupos de capacitación asignados.
■  Descargar la lista de participantes de un curso.

○  Para cada tarea, definir un objetivo claro que el usuario quiere alcanzar.

3.  Herramientas a Utilizar:

○  Herramientas de Diagramación Digital: Miro, FigJam, Lucidchart, Overflow,
Whimsical, Figma (con plugins de flujos). Estas herramientas permiten crear
diagramas claros, colaborativos y fáciles de modificar.

○  Pizarra y Notas Adhesivas (para bocetar flujos rápidamente): Útil para una

exploración inicial antes de digitalizar.

Proceso de Diseño de Flujos de Usuario:

1.  Definir el Alcance de Cada Flujo:

○  Para cada tarea clave seleccionada:

■  Punto de Entrada (Entry Point): ¿Cómo inicia el usuario esta tarea?

¿Desde qué pantalla o acción previa? (Ej. Desde el dashboard principal,
desde una notificación, desde un menú de navegación).

■  Punto de Salida (Exit Point/Success Criteria): ¿Cuándo se considera que
la tarea está completada exitosamente? ¿Qué ve o recibe el usuario al
final? (Ej. Un mensaje de confirmación, la visualización de un reporte, la lista
de grupos generada).
2.  Mapear el "Camino Feliz" (Happy Path):

○  Este es el flujo ideal, sin errores ni desviaciones, donde el usuario completa la

tarea de la manera más directa y eficiente.
○  Desglosar la tarea en pasos secuenciales:

■  ¿Qué acción realiza el usuario en cada paso?
■  ¿Qué información necesita o introduce?
■  ¿Qué ve en la pantalla en cada paso? (Representar cada pantalla o estado

de pantalla como un nodo en el diagrama).

■  ¿Qué decisiones toma el usuario?

○  Utilizar una Notación Estándar para los Diagramas de Flujo:

■  Óvalos/Rectángulos Redondeados: Para inicio y fin del flujo.
■  Rectángulos: Para acciones del usuario o procesos del sistema/pantallas.
■  Rombos: Para puntos de decisión (con ramas para cada opción, ej. Sí/No).
■  Flechas: Para indicar la dirección del flujo.
■  Círculos: Como conectores si el flujo es muy largo y necesita continuar en

otra parte del diagrama.

■  Anotaciones: Para añadir contexto, reglas de negocio relevantes o detalles

de la interfaz.

3.  Identificar y Mapear Rutas Alternativas y Variaciones:

○  Una vez que el "camino feliz" está definido, considerar otras formas válidas en

que un usuario podría completar la tarea o variaciones en el flujo.
■  Ejemplo: Un administrador podría querer guardar un borrador de la

segmentación de grupos antes de finalizarla.

■  Ejemplo: Un colaborador podría acceder a los detalles de un curso desde

su dashboard o desde una notificación.

4.  Mapear Flujos de Error y Casos Excepcionales:

○  ¿Qué sucede si el usuario comete un error? (Ej. Introduce datos incorrectos,

intenta una acción no permitida).

○  ¿Qué sucede si el sistema encuentra un problema? (Ej. Falla al cargar la

plantilla, no hay formadores disponibles).

○  ¿Cómo se informa al usuario del error?
○  ¿Cómo puede el usuario recuperarse del error o corregirlo?
○

Incluir pantallas o mensajes de error, y las rutas para volver al flujo principal.

5.  Considerar el Contexto del Usuario y el Rol:

○  Asegurarse de que los flujos estén diseñados teniendo en cuenta las
necesidades específicas y el nivel de acceso de cada User Persona.

○  Un flujo para el "Super Admin" podría incluir pasos o decisiones que no son

relevantes para un "Colaborador".
6.  Detallar las Pantallas/Vistas Involucradas:

○  A medida que se mapea el flujo, se irán identificando las diferentes pantallas o

vistas que la plataforma necesitará.

○  Dar un nombre preliminar a cada pantalla (ej. "Dashboard Administrador",

"Pantalla de Carga de Plantilla", "Vista de Progreso Colaborador"). Esto servirá
de base para los wireframes.

○  Anotar los elementos de interfaz clave o la información principal que debe

aparecer en cada pantalla dentro del flujo.

7.  Iterar y Refinar:

○  El diseño de flujos de usuario es un proceso iterativo. Es probable que se

revisen y refinen los flujos varias veces a medida que se descubren nuevas
consideraciones o se obtiene feedback.

○  Simplificar los flujos tanto como sea posible sin sacrificar la claridad o la

funcionalidad necesaria. Buscar la menor cantidad de pasos para lograr el
objetivo.

Validación:

1.  Revisión Interna del Equipo (Dacodes):

○  El Product Designer presenta los flujos de usuario al equipo de desarrollo y al

líder de proyecto.

○  "Recorrer" los flujos en conjunto: Simular ser el usuario y seguir los pasos,

discutiendo cada pantalla, decisión y acción.

○  Verificar la lógica, la consistencia con la AI y las reglas de negocio, la
completitud (¿faltan pasos o escenarios?) y la factibilidad técnica.
Identificar posibles puntos de fricción o confusión para el usuario.

○

2.  Validación con Stakeholders Clave de Gentera (Especialmente Expertos en el

Proceso):
○  Presentar los flujos de usuario más críticos o complejos a Lalo, Carlos y otros

SMEs relevantes.

○  Explicar el objetivo de cada flujo y guiar a los stakeholders a través de los

pasos.

○  Hacer preguntas como:

■

■

■

"¿Este flujo refleja cómo esperarían realizar esta tarea?"
"¿Hay algún paso que falte o que parezca innecesario?"
"¿Las decisiones y opciones presentadas son claras y cubren los
escenarios habituales?"
"¿Esto se alinea con los procesos y políticas de Gentera?"
○  Recopilar feedback y realizar ajustes a los flujos según sea necesario.

■

Salidas/Entregables:

●  Diagramas de Flujo de Usuario (User Flow Diagrams):

○  Un conjunto de diagramas visuales claros y detallados para cada tarea clave y

rol de usuario priorizado.

○  Cada diagrama debe mostrar claramente los puntos de entrada y salida, los
pasos secuenciales, las decisiones, las pantallas involucradas y las rutas
alternativas/de error.

○  Los flujos deben estar bien anotados para explicar la lógica y las interacciones.

●  Listado de Pantallas Identificadas: Un inventario de todas las pantallas o vistas

únicas que se necesitarán diseñar, derivado de los flujos.

●  Documentación de Decisiones de Diseño: Notas sobre por qué se eligieron

ciertos flujos sobre otros, y cualquier consideración importante que surgió durante
el proceso.

Conclusión de la Actividad 3 (Fase 2):
Los Flujos de Usuario son un puente crucial entre la estructura de la información (AI) y el diseño
detallado de la interfaz (Wireframes). Al mapear cuidadosamente cómo los usuarios navegarán
por GAC para completar sus tareas, podemos diseñar una experiencia más intuitiva, eficiente y
satisfactoria. Estos flujos servirán como un "guion" para la creación de los wireframes,
asegurando que todas las interacciones necesarias estén consideradas y bien pensadas.

