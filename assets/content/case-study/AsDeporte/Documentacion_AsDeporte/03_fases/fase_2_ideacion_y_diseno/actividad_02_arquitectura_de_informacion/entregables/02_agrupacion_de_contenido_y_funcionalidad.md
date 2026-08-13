Agrupación de Contenido y Funcionalidad: Plataforma
AsDeporte MVP B2C

Basándonos en el inventario de contenido y funcionalidad del MVP B2C, los hallazgos
de la investigación de usuarios (modelos mentales) y la estructura actual del sitio web
de AsDeporte, hemos agrupado los elementos en categorías lógicas para definir la
Arquitectura de la Información inicial.

El objetivo es crear una estructura de navegación intuitiva que permita a los usuarios
encontrar fácilmente lo que buscan y completar sus tareas principales (descubrir
eventos, inscribirse, gestionar su participación).

Estructura de Agrupación Propuesta

La siguiente estructura representa las principales secciones o áreas de contenido y
funcionalidad en el MVP B2C:

1. Inicio (Home)

●  Propósito: Punto de entrada a la plataforma.
●  Contenido/Funcionalidad:

○  Acceso rápido a la búsqueda/listado de eventos.
○  Posibles destacados de eventos próximos o relevantes.
○  Acceso a otras secciones principales.

2. Eventos

●  Propósito: Encontrar, explorar y visualizar información sobre eventos deportivos.
●  Modelos Mentales Relacionados: "Buscar carreras", "Ver qué eventos hay",

"Información del evento".
●  Contenido/Funcionalidad:
○  Listado de Eventos:

■  Vista de lista (principal)
■  Vista de calendario mejorado (alternativa)
■  Vista de mapa (opcional MVP)
■

Información clave visible en listados.

○  Búsqueda y Filtrado:

■  Campo de búsqueda.
■  Filtros avanzados (disciplina, fecha, ubicación, tipo, etc.).
■  Ordenamiento de resultados.

○  Página de Detalle de Evento:

■  Toda la información relevante del evento (descripción, costos, kit,

reglamento, etc.).

■

Información técnica adicional (GPX, mapas, altimetría - si
disponible/enlazada).

■  Botón/Acción para iniciar el Proceso de Inscripción.

○  Guías para Principiantes:

■  Contenido educativo sobre el mundo de las carreras y cómo empezar.

3. Mi Perfil

●  Propósito: Gestionar la información personal del usuario, ver su historial y acceder

a beneficios.

●  Modelos Mentales Relacionados: "Mis datos", "Las carreras a las que me he

inscrito", "Mis resultados", "Ser Asdeporte Plus".

●  Contenido/Funcionalidad:
○  Datos Personales:

■  Visualización y edición de información.
■  Gestión de contraseña.

○  Mis Eventos Activos:

■  Listado de próximas inscripciones.
■  Acceso a detalles del evento y comprobantes.
○  Mi Historial AsDeporte / Resultados Personales:

■  Listado de eventos pasados.
■  Visualización de resultados personales.

○  Hub de Beneficios Asdeporte Plus:

■  Estado de membresía.
■  Lista de beneficios y cómo usarlos.
■  Acceso al "Wallet" (si aplica).
(SHOULD HAVE) Integración Básica Wearables:
■  Opción de conexión.
■  Visualización de resumen de actividad.

○

4. Resultados (Públicos)

●  Propósito: Consultar resultados de eventos pasados (propios y de otros).
●  Modelos Mentales Relacionados: "Ver resultados de carreras", "Buscar mi

tiempo".

●  Contenido/Funcionalidad:

○  Listado de eventos con resultados disponibles.
○  Funcionalidad de búsqueda/filtro de eventos por resultados.
○  Visualización de resultados de un evento específico (listados, búsqueda por

nombre/número).
(SHOULD HAVE) Filtros avanzados en resultados.

○

5. Soporte y Ayuda

●  Propósito: Obtener ayuda, información sobre AsDeporte y resolver dudas.
●  Modelos Mentales Relacionados: "Ayuda", "Preguntas", "Contactar a Asdeporte",

"Sobre la empresa".

●  Contenido/Funcionalidad:

○  Preguntas Frecuentes (FAQs).
Información de Contacto / Canales de Soporte.
○
○  Acerca de AsDeporte (Información Institucional).
○  Términos y Condiciones.
○  Política de Privacidad.

Flujos Transaccionales (No son secciones de navegación principal, sino tareas)

●  Proceso de Inscripción y Pago: Se inicia desde la Página de Detalle de Evento y

es un flujo guiado.

●  Sistema de Notificaciones: Funcionalidad transversal que informa al usuario

(Push y Email).

Elementos Excluidos del MVP (WON'T HAVE)

●  Funcionalidad "Tribu" compleja (la idea de foro por evento simple podría integrarse

en el Detalle de Evento si se incluye).
Inscripciones grupales complejas.

●
●  Marketplace.
●  Gamificación avanzada.
●  Personalización IA.
●  Funcionalidades B2B avanzadas.

Racionalización de la Agrupación

●  La separación de Eventos y Mi Perfil responde a la distinción que hacen los
usuarios entre "buscar algo nuevo" (Eventos) y "gestionar lo mío" (Mi Perfil).
●  Resultados se mantiene como una sección accesible públicamente (como en el

sitio actual) pero se integra el historial personal dentro de Mi Perfil para consolidar
la información del usuario.

●  El Proceso de Inscripción se define como un flujo dentro del contexto de un

evento específico, no como una sección de navegación principal.

●  Asdeporte Plus se ubica dentro de Mi Perfil porque los usuarios Plus lo ven como

un conjunto de beneficios asociados a su cuenta/membresía.

●  Soporte y Ayuda agrupa toda la información de apoyo y contacto, una necesidad
clara para todos los perfiles, especialmente principiantes y aquellos con problemas
previos.

●  La exclusión de "Tribu" compleja simplifica la arquitectura del MVP, alineada con

los hallazgos de baja utilidad actual.

Esta agrupación proporciona una estructura clara y centrada en las tareas y modelos

mentales del usuario para guiar la siguiente etapa de diseño de la navegación y las
pantallas.

