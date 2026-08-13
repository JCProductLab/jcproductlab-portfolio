Definición de Tipos de Navegación: Nueva Plataforma Digital
AsDeporte (MVP B2C)

Basándonos en la estructura de navegación propuesta y los hallazgos de la
investigación de usuarios, definimos los siguientes patrones de navegación para el
MVP B2C de la plataforma digital de AsDeporte, adaptados para la experiencia web
responsive y la aplicación móvil.

El objetivo es implementar patrones de navegación claros, consistentes y que faciliten
la exploración y el cumplimiento de tareas, abordando los problemas de usabilidad
identificados en la plataforma actual.

Patrones de Navegación Propuestos

1. Navegación Global

Permite a los usuarios moverse entre las secciones principales de la plataforma desde
cualquier punto.

●  Plataforma Web (Responsive):

○  Barra de Navegación Superior Persistente (Header): Contiene los enlaces a
las secciones principales: Inicio, Eventos, Resultados, Mi Perfil. Incluirá
también el logo (enlace a Inicio), la funcionalidad de búsqueda (campo o
ícono), y el acceso a Inicio de Sesión/Registro o el estado del usuario
logueado. Esta barra debe ser responsive y adaptarse a diferentes tamaños de
pantalla (colapsando quizás en un menú hamburguesa en pantallas muy
pequeñas, aunque se prefiere mantener las opciones principales visibles si es
posible).

○  Acceso a Soporte/Institucional: Enlaces ubicados en el pie de página

(Footer) global, accesible desde cualquier página.

●  Aplicación Móvil:

○  Barra de Pestañas Inferior (Tab Bar): Es el patrón recomendado para la

navegación principal en apps móviles con un número limitado de secciones
clave. Contendrá íconos y etiquetas de texto para las secciones más
importantes: Inicio, Eventos, Mi Perfil, Resultados. Esta barra debe ser
visible en la mayoría de las pantallas principales.

○  Menú de Configuración/Adicional: Un ícono (ej. en la pestaña de Mi Perfil o
un menú de "más") para acceder a opciones menos frecuentes como Soporte
y Ayuda (FAQs, Contacto) y Configuración (Notificaciones, Información
Institucional).

2. Navegación Local

Permite a los usuarios moverse dentro de una sección específica o entre pantallas

relacionadas jerárquicamente.

●  Navegación Jerárquica (Drill-down): Al seleccionar un elemento de una lista (ej.
un evento de la lista de Eventos, un evento del historial en Mi Perfil), el usuario
navega a una pantalla de detalle de nivel inferior (ej. la página de Detalle del
Evento).
○  Botón "Atrás": Se utilizará un botón claro de "Atrás" (típicamente en la

esquina superior izquierda en móvil, o en el navegador web) para permitir al
usuario regresar a la pantalla anterior.

●  Navegación por Pestañas (Tabs): Dentro de una pantalla de detalle compleja (ej.
Página de Detalle de Evento, Hub de Beneficios Plus), se pueden usar pestañas
para organizar diferentes tipos de información relacionada (ej. Pestañas:
"Información General", "Información Técnica", "Entrega de Kits").

●  Filtros y Ordenamiento: Considerados parte de la navegación dentro de las listas
(Eventos, Resultados). Deben ser fácilmente accesibles y su aplicación debe ser
clara.

3. Navegación Contextual

Enlaces o llamadas a la acción que aparecen dentro del contenido y dirigen al usuario a
información o funcionalidades relacionadas.

●  Enlaces en Contenido: Enlaces dentro de descripciones (ej. enlace a reglamento
completo en PDF desde la página de evento), FAQs, guías para principiantes.
●  Llamadas a la Acción (CTAs): Botones prominentes que invitan al usuario a

realizar una acción clave (ej. "Inscríbete Aquí" en la página de evento, "Ver mis
Resultados" en el perfil).

●  Migas de Pan (Breadcrumbs - Principalmente Web): En la web, se pueden usar
migas de pan para mostrar la ubicación del usuario dentro de la jerarquía del sitio
(ej. Inicio > Eventos > Triatlón La Paz 2026), facilitando la navegación hacia atrás o
a niveles superiores.

4. Navegación Transaccional

Flujos guiados para completar tareas específicas, como el proceso de inscripción.

●  Flujo Lineal Guiado: El proceso de inscripción será un flujo paso a paso (Paso 1,
Paso 2, Paso 3) con una clara indicación del progreso. La navegación "Atrás"
dentro de este flujo debe permitir regresar al paso anterior sin perder información, y
la navegación fuera del flujo (ej. cerrar la pantalla) debe ser posible pero con una
advertencia si hay datos no guardados.

5. Elementos de Navegación Adicionales

●  Búsqueda Global: Un campo o ícono de búsqueda accesible desde la navegación

global para encontrar eventos rápidamente.

●  Notificaciones: Un ícono (ej. campana) en la navegación global (web header, app

tab bar o header) para indicar nuevas notificaciones y acceder al centro de
notificaciones.

Justificación de las Decisiones de Navegación

●  La Tab Bar en móvil es el patrón más intuitivo para un MVP con 4-5 secciones

principales, ya que mantiene las opciones clave siempre visibles y accesibles con
un solo toque, abordando problemas de descubrimiento de secciones en la app
actual.

●  La Barra Superior Persistente en web es el estándar de facto y permite una

navegación eficiente en pantallas más grandes, adaptándose a responsive para
dispositivos más pequeños.

●  La Navegación Jerárquica con botón "Atrás" es un patrón universal y esperado

para explorar detalles desde listas.

●  El uso de Pestañas dentro de pantallas complejas ayuda a organizar la

información sin sobrecargar la vista inicial.

●  La clara distinción entre Navegación Global y Flujo Transaccional (Inscripción)
asegura que el usuario entienda cuándo está explorando y cuándo está en un
proceso que requiere completarse.

●  La inclusión de Guías para Principiantes y FAQs accesibles desde puntos lógicos

(Eventos, Soporte) responde directamente a las necesidades de los usuarios
novatos identificadas en la investigación.

Esta definición de tipos de navegación proporciona el marco para diseñar las
interacciones y la disposición de los elementos de navegación en las wireframes y
prototipos.

