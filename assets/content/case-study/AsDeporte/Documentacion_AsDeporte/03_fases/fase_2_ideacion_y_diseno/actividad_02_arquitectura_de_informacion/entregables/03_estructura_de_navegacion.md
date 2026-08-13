Estructura de Navegación: Nueva Plataforma Digital
AsDeporte (MVP B2C)

Basándonos en la agrupación de contenido y funcionalidad del MVP B2C, los hallazgos
de la investigación de usuarios y la estructura actual del sitio web de AsDeporte, hemos
desarrollado la siguiente propuesta de estructura de navegación (Sitemaps) para la
plataforma web y la aplicación móvil.

El objetivo es crear una jerarquía clara e intuitiva que facilite a los usuarios encontrar
información y completar sus tareas principales de manera eficiente.

Principios de Nomenclatura y Estructura

●  Lenguaje Centrado en el Usuario: Utilizar términos familiares para los atletas (ej.

"Eventos", "Resultados", "Mi Perfil").

●  Claridad y Concisión: Nombres de secciones directos y fáciles de entender.
●  Consistencia: Mantener una estructura y terminología coherente entre la web y la
app móvil, adaptando la presentación a las convenciones de cada plataforma.
●  Adaptación al MVP: Enfocarse en las funcionalidades "Must Have" y "Should

●

Have" definidas, excluyendo las "Won't Have" del MVP inicial.
Influencia de la Arquitectura Actual: Considerar la estructura existente de
asdeporte.com donde sea relevante y beneficioso para la familiaridad del usuario,
pero priorizando la usabilidad y los hallazgos de investigación.

Sitemaps Propuestos

1. Sitemap para Plataforma Web (MVP B2C)

La navegación web típicamente utiliza un menú principal (barra superior o lateral) y
submenús.

●

Inicio (Home)
○  Página principal con destacados y acceso rápido a secciones clave.

●  Eventos

○  Listado de Eventos Próximos (Vista de Lista por defecto)

■  Vista de Calendario (Alternativa)
■  Vista de Mapa (Opcional MVP)
■  Funcionalidad de Búsqueda y Filtrado Avanzado

○  Página de Detalle de Evento (/eventos/{id})

Información General
Información Técnica Adicional (si aplica)

■
■
■  Botón/Enlace para Iniciar Inscripción

○  Guías para Principiantes (/eventos/principiantes)

●  Resultados

○  Listado de Eventos con Resultados Disponibles (/resultados)

■  Funcionalidad de Búsqueda/Filtro de Eventos por Resultados
○  Página de Resultados de Evento Específico (/resultados/{id_evento})

■  Búsqueda/Filtro de Resultados por Participante
■

(SHOULD HAVE) Filtros Avanzados en Resultados

●  Mi Perfil (Requiere inicio de sesión)

○  Dashboard/Resumen del Perfil (/mi-perfil)
○  Datos Personales (/mi-perfil/datos)

■  Gestión de Contraseña

○  Mis Eventos Activos (/mi-perfil/mis-eventos)

■  Acceso a Detalles del Evento
■  Acceso a Comprobante de Inscripción

○  Mi Historial AsDeporte / Resultados Personales (/mi-perfil/mi-historial)

■  Listado de Eventos Pasados
■  Visualización de Resultados Personales
○  Hub de Beneficios Asdeporte Plus (/mi-perfil/plus)

■  Estado de Membresía
■  Lista y Detalle de Beneficios
■  Acceso a Wallet (si aplica)
(SHOULD HAVE) Integración Wearables (/mi-perfil/wearables)
■  Opción de Conexión
■  Visualización de Actividad Reciente

○

●  Soporte y Ayuda

○  Preguntas Frecuentes (FAQs) (/ayuda/faqs)
○  Contacto (/ayuda/contacto)
○  Acerca de AsDeporte (/institucional/acerca)
○  Términos y Condiciones (/institucional/terminos)
○  Política de Privacidad (/institucional/privacidad)

Flujo Transaccional:

●  Proceso de Inscripción y Pago: Se inicia desde la Página de Detalle de Evento y
es un flujo lineal (Paso 1 -> Paso 2 -> Paso 3 -> Confirmación). No es una sección
de navegación principal.

Elementos Transversales:

Inicio de Sesión / Registro: Accesible desde la cabecera principal.

●
●  Sistema de Notificaciones: Se gestiona a nivel de cuenta (configuración de

notificaciones) y se visualizan (ej. ícono de campana en la cabecera).

2. Sitemap para Aplicación Móvil (MVP B2C)

La navegación móvil típicamente utiliza una barra de pestañas inferior (Tab Bar) para

las secciones principales y navegación jerárquica (drill-down) dentro de cada pestaña.

●  Pestaña 1: Inicio (Home)

○  Página principal optimizada para móvil.
○  Destacados, acceso rápido a búsqueda/eventos.

●  Pestaña 2: Eventos

○  Listado de Eventos Próximos (Vista de Lista por defecto)

■  Vista de Calendario (Alternativa, accesible desde lista)
■  Vista de Mapa (Opcional MVP, accesible desde lista)
■  Funcionalidad de Búsqueda y Filtrado Avanzado (Accesible desde la parte

superior del listado)

○  Página de Detalle de Evento (Navegación jerárquica desde listado/búsqueda)

Información General
Información Técnica Adicional (si aplica)

■
■
■  Botón/Acción para Iniciar Inscripción

○  Guías para Principiantes (Accesible desde Inicio o Eventos)

●  Pestaña 3: Mi Perfil

○  Dashboard/Resumen del Perfil
○  Datos Personales (Navegación jerárquica)

■  Gestión de Contraseña

○  Mis Eventos Activos (Navegación jerárquica)

■  Acceso a Detalles del Evento
■  Acceso a Comprobante de Inscripción

○  Mi Historial AsDeporte / Resultados Personales (Navegación jerárquica)

■  Listado de Eventos Pasados
■  Visualización de Resultados Personales

○  Hub de Beneficios Asdeporte Plus (Navegación jerárquica)

■  Estado de Membresía
■  Lista y Detalle de Beneficios
■  Acceso a Wallet (si aplica)
(SHOULD HAVE) Integración Wearables (Navegación jerárquica)
■  Opción de Conexión
■  Visualización de Actividad Reciente

○

●  Pestaña 4: Resultados

○  Listado de Eventos con Resultados Disponibles

■  Funcionalidad de Búsqueda/Filtro de Eventos por Resultados
○  Página de Resultados de Evento Específico (Navegación jerárquica)

■  Búsqueda/Filtro de Resultados por Participante
■

(SHOULD HAVE) Filtros Avanzados en Resultados

●  Menú Adicional / Configuración (Accesible desde una de las pestañas

principales, ej. Mi Perfil, o un ícono de menú tipo hamburguesa si es necesario -

aunque se prefiere Tab Bar)
○  Soporte y Ayuda

■  Preguntas Frecuentes (FAQs)
■  Contacto
Información Institucional (Acerca de, Términos, Privacidad)

○
○  Configuración de Notificaciones
○  Cerrar Sesión

Flujo Transaccional:

●  Proceso de Inscripción y Pago: Se inicia desde la Página de Detalle de Evento y

es un flujo lineal y guiado, superpuesto o en una nueva pantalla.

Elementos Transversales:

●

Inicio de Sesión / Registro: Pantallas separadas al abrir la app o al intentar
acceder a secciones protegidas.

●  Sistema de Notificaciones: Se gestiona en Configuración y se visualizan a través

de notificaciones push del sistema operativo y posiblemente un centro de
notificaciones dentro de la app.

Comparación y Justificación

●  Similitudes con asdeporte.com: Se mantienen secciones clave como "Eventos" y

"Resultados" en la navegación principal, ya que son puntos de acceso
fundamentales para los usuarios actuales.

●  Diferencias Clave (MVP vs. Actual):

○  "Tribu" y "Tienda" se excluyen del MVP, simplificando la navegación principal.
○  "Asdeporte Plus" se integra dentro de "Mi Perfil", reflejando que es un beneficio
asociado a la cuenta del usuario, no una sección de contenido independiente
(aunque el sitio actual tiene una sección dedicada, la investigación sugiere que
los usuarios Plus buscan ver sus beneficios en su perfil).

○  Se introduce una sección clara de "Mi Perfil" que consolida inscripciones
activas, historial y beneficios Plus, algo que no está tan centralizado
actualmente.

○  Se prioriza una vista de lista con filtros prominentes para "Eventos" en lugar del

calendario actual de la app, abordando un punto de dolor crítico.

●  Adaptación Web vs. Móvil: La estructura lógica es similar, pero la presentación se
adapta: menú principal en web vs. Tab Bar en móvil. La navegación jerárquica es
más pronunciada dentro de cada pestaña en la app.

Esta estructura de navegación propone una organización lógica y centrada en el
usuario para el MVP B2C, sentando las bases para el diseño de wireframes y
prototipos.

