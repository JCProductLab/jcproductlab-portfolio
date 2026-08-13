Proceso Detallado: Actividad 3 (Fase 3) - Creación de Prototipos
Interactivos de Alta Fidelidad (Realizado por un Único Product
Designer)

Contexto Temporal: Finales de 2021 (después de finalizar los mockups de UI de alta fidelidad y
antes de las pruebas de usabilidad de alta fidelidad).
Insumo Principal: El conjunto completo de mockups de alta fidelidad creados en Figma
(Actividad 2, Fase 3), el Sistema de Diseño Visual (Design System) y los flujos de usuario clave.
Resultado Esperado del Rediseño (Informando el Prototipo): Una simulación interactiva que se
pareciera y se sintiera lo más posible a la experiencia final de la plataforma del Centro Médico
ABC. Esto incluiría la navegación principal, los flujos de búsqueda de médicos, el proceso de
agendamiento (hasta donde fuera posible simular sin backend), la interacción con el portal del
paciente y la sensación general de uso.
Rol del Product Designer (Individual): Fui responsable de transformar los mockups estáticos en
prototipos navegables y funcionales dentro de Figma, definiendo las interacciones,
transiciones y animaciones sutiles para simular la experiencia final.
1. Objetivos Específicos de la Actividad:
* Simular la Experiencia Real del Usuario: Crear un prototipo que permitiera a los usuarios (en
las pruebas posteriores) y a los stakeholders "sentir" cómo sería navegar y utilizar la nueva
plataforma.
* Validar la Usabilidad de Interacciones Detalladas: Probar no solo si los usuarios entendían el
flujo, sino también si las interacciones específicas (ej. cómo funciona un menú desplegable, la
selección en un calendario, la interacción con un formulario) eran intuitivas.
* Probar la Efectividad de las Microinteracciones y Animaciones: Evaluar si las transiciones y
animaciones sutiles mejoraban la experiencia, proporcionaban feedback adecuado y no eran
distractivas.
* Comunicar la Visión del Diseño de Forma Dinámica: Un prototipo interactivo es mucho más
efectivo que los mockups estáticos para mostrar la intención del diseño a los stakeholders y al
equipo de desarrollo.
* Identificar Problemas de Usabilidad Fina: Descubrir problemas que solo se hacen evidentes
cuando se interactúa con el diseño.
* Preparar un Artefacto para Pruebas de Usuario de Alta Fidelidad: El prototipo sería la
herramienta principal para la siguiente actividad de pruebas.
2. Metodología y Marco (Individual):
* Metodología Principal: Creación de Prototipos Interactivos.
* Marco de Trabajo: Uso intensivo de las capacidades de prototipado de Figma.
3. Herramientas Utilizadas (Optimizadas para Eficiencia Individual):
* Figma (Modo Prototipo): La única herramienta necesaria para esta actividad, ya que los
mockups de alta fidelidad ya estaban creados en Figma. Utilicé sus funciones de:
* Conexiones (Noodles): Para enlazar frames y componentes.

* Tipos de Interacción: On Click, On Drag, While Hovering, While Pressing, Mouse Enter/Leave,
etc.
* Tipos de Acción: Navigate to, Open Overlay, Swap Overlay, Scroll to, Open Link.
* Animaciones y Transiciones: Instant, Dissolve, Smart Animate, Move In/Out, Push, Slide In/Out.
* Componentes Interactivos (Interactive Components): Para crear microinteracciones
reutilizables dentro de los componentes del Design System (ej. un botón con diferentes
estados de hover y press animados).
* Variables (si Figma ya las tenía bien implementadas en 2021, o simulando estados con
múltiples frames): Para manejar estados más complejos.
* Sistema de Diseño Visual (Design System en Figma): Los componentes ya definidos con sus
variantes (ej. estados de botones) facilitaron enormemente la creación de interacciones
consistentes.
* Flujos de Usuario Documentados: Para guiar qué pantallas y secuencias necesitaban ser
prototipadas.
4. Proceso Paso a Paso de la Creación de Prototipos Interactivos de Alta Fidelidad:

* **Paso 4.1: Planificación del Alcance del Prototipo (0.5 días)**
    * **Selección de Flujos Clave a Prototipar:** No era necesario (ni eficiente para un
solo diseñador) hacer que *cada* pantalla y *cada* enlace fueran interactivos. Me
enfoqué en los mismos 3-5 flujos de usuario críticos que se probaron en baja fidelidad,
pero ahora con todo el detalle visual y de interacción.
        * *Ejemplos (basados en los flujos que darían forma a la plataforma actual):*
            1.  **Flujo de Búsqueda y Selección de Médico:** Desde la homepage, usando el
buscador, aplicando filtros, viendo la lista de resultados y accediendo al perfil detallado
de un médico.
            2.  **Flujo de Agendamiento de Cita (Simplificado):** Iniciando desde el perfil del
médico o una página de servicio, seleccionando tipo de cita, campus (si aplica), y
simulando la selección de fecha/hora en un calendario (quizás llevando a una pantalla
de "confirmación" simulada, ya que la lógica real del backend no estaría).
            3.  **Navegación y Acceso al "Mi Portal Paciente ABC":** Mostrando cómo el
usuario llegaría al portal desde la navegación principal y cómo se vería el dashboard
principal del portal (con enlaces a secciones como "Mis Resultados", "Mis Citas").
            4.  **Interacción con Contenido Educativo:** Navegar a la sección de
noticias/blog y abrir un artículo.
    * **Definición del Nivel de Fidelidad de la Interacción:** Decidí qué tan "reales" debían
ser las interacciones. Para la mayoría, un clic que llevara a la pantalla correcta era
suficiente. Para elementos clave (como un menú desplegable o un modal), simularía su
apertura y cierre.
    * **Creación de un "Mapa del Prototipo" (Mental o en Miro):** Visualicé cómo se

conectarían las pantallas principales para cada flujo.

* **Paso 4.2: Conexión de Pantallas (Linking Frames) en Figma (1-2 días por flujo
complejo)**
    * **Trabajo Sistemático:** Fui pantalla por pantalla dentro de cada flujo seleccionado.
    * **Creación de Hotspots:** Seleccioné los elementos en los mockups que debían ser
interactivos (botones, enlaces de texto, tarjetas, elementos de menú) y les añadí una
interacción en el panel de prototipado de Figma.
    * **Definición de Destinos:** Para cada interacción "On Click" -> "Navigate to",
seleccioné el frame (pantalla) de destino correcto.
    * **Navegación Global y Utilitaria:** Me aseguré de que los elementos de navegación
principal (en el header) y los enlaces del footer estuvieran conectados
consistentemente en todas las pantallas relevantes del prototipo. Por ejemplo, el logo
siempre debería llevar a la homepage.

* **Paso 4.3: Implementación de Interacciones Específicas (1-2 días)**
    * **Estados de Hover y Press (Usando Componentes Interactivos):**
        * Muchos de mis componentes en el Design System (botones, enlaces, tarjetas) ya
tendrían variantes para estados de hover y press. Utilicé la función de "Interactive
Components" de Figma para que al pasar el mouse (Mouse Enter/Leave) o al presionar
(While Pressing) el componente cambiara a su variante correspondiente, a menudo con
una sutil animación "Smart Animate" o "Dissolve". Esto le dio al prototipo una sensación
mucho más realista.
    * **Menús Desplegables (Dropdowns) y Mega Menús:**
        * Para la navegación principal (como "Servicios Médicos" que usa un mega menú
en la plataforma actual), creé un frame separado para el menú desplegado y usé "Open
Overlay" en la interacción "On Click" o "On Hover" del elemento del menú principal.
Configuré la posición del overlay y una animación de entrada (ej. "Move In" desde
arriba).
    * **Modales y Pop-ups:**
        * Similar a los menús, los modales (ej. para una confirmación, una alerta, o un
formulario rápido) se diseñaron como frames separados y se activaron con "Open
Overlay".
    * **Acordeones y Pestañas (Tabs):**
        * Para secciones con contenido colapsable o tabulado, creé diferentes frames o
variantes de un componente para mostrar los estados abierto/cerrado o la pestaña
activa, y los conecté con interacciones "On Click".

    * **Simulación de Formularios (Básica):**
        * No construí lógica de validación real. Un clic en un campo de texto podría
simplemente resaltar el campo (usando un componente con estado de "foco"). Al
hacer clic en el botón "Enviar" o "Siguiente" del formulario, el prototipo simplemente
navegaría a la siguiente pantalla del flujo, asumiendo que la entrada fue válida.

* **Paso 4.4: Incorporación de Transiciones y Animaciones Sutiles (Microinteracciones)
(1 día)**
    * **Transiciones entre Pantallas:**
        * Para la mayoría de las navegaciones entre pantallas principales, utilicé
transiciones suaves como "Dissolve" o "Smart Animate" si las pantallas de origen y
destino tenían elementos comunes que Figma pudiera interpolar. Para cambios de
contexto más significativos, podría haber usado "Push" o "Slide In". El objetivo era que la
navegación se sintiera fluida, no abrupta.
    * **Smart Animate:** Esta fue una herramienta poderosa. Si tenía un elemento (ej.
una tarjeta) que cambiaba de tamaño o posición entre dos frames, "Smart Animate"
creaba una transición suave entre esos estados. Lo usé para cosas como la expansión
de un acordeón o el cambio de estado de un filtro.
    * **Animaciones de Carga (Simuladas):** Para acciones que en la vida real tomarían
tiempo (ej. buscar, enviar un formulario), podría haber incluido un frame intermedio con
un indicador de carga (spinner) simple, con una transición temporizada ("After Delay")
al siguiente frame.
    * **Principios de Interacción:** Me aseguré de que todas las animaciones fueran
consistentes con los "Principios de Diseño de Interacción" que había definido en el
Design System (sutileza, propósito, consistencia).

* **Paso 4.5: Prototipado para Diferentes Dispositivos (Consideraciones) (0.5 días)**
    * **Prototipo Principal (Desktop):** Mi prototipo principal se centró en la experiencia
de escritorio, ya que era donde se vería la mayor cantidad de información y
funcionalidades complejas.
    * **Prototipo Móvil (Flujo Clave):** Para al menos un flujo crítico (ej. encontrar un
médico y ver su perfil, o el inicio del agendamiento), creé una versión separada del
prototipo utilizando los mockups móviles. Esto era importante para probar la usabilidad
de la navegación móvil (ej. el menú hamburguesa) y la adaptación de los componentes.
    * **Conexión entre Prototipos (Opcional):** Figma permite enlazar a diferentes
puntos de inicio de prototipo, así que podría tener un "índice" desde donde acceder al
prototipo de desktop o al de móvil.

* **Paso 4.6: Pruebas Internas Exhaustivas del Prototipo (1 día)**
    * **"Comer mi propia comida de perro":** Antes de mostrar el prototipo a nadie más,
lo probé exhaustivamente yo mismo, realizando todas las tareas definidas.
    * **Verificación de Enlaces:** Me aseguré de que todos los hotspots llevaran a los
destinos correctos.
    * **Consistencia de Interacciones:** Verifiqué que interacciones similares se
comportaran de la misma manera.
    * **Fluidez de Animaciones:** Chequeé que las animaciones fueran suaves y no
demasiado lentas o rápidas.
    * **Identificación de Bugs o Comportamientos Inesperados:** Corregí cualquier
problema que encontrara.

5. Resultado de la Actividad 3 (Creación de Prototipos Interactivos de Alta
Fidelidad):

Al finalizar esta actividad, como único Product Designer, había logrado:

●  Un Prototipo Interactivo de Alta Fidelidad en Figma: Cubriendo los flujos de

usuario clave para las versiones de escritorio y, al menos un flujo, para móvil. Este
prototipo se vería y se sentiría muy cercano a la plataforma final del Centro Médico
ABC.

●  Simulación Realista de la Experiencia: Los usuarios podrían hacer clic, navegar,
ver transiciones y experimentar cómo sería interactuar con la nueva plataforma.
Las interacciones con el buscador de médicos, la visualización de perfiles, el inicio
del proceso de agendamiento, y la navegación general que se ven en la plataforma
actual se habrían podido probar y refinar gracias a este prototipo.

●  Validación de Microinteracciones y Animaciones: Pude ver si las animaciones

sutiles realmente mejoraban la experiencia o si necesitaban ajustes.

●  Un Artefacto Listo para Pruebas de Usabilidad Detalladas: El prototipo era la
herramienta principal para la siguiente actividad (Pruebas de Usabilidad con
usuarios reales).

●  Una Herramienta de Comunicación Poderosa para Stakeholders y

Desarrolladores: El prototipo permitiría a los stakeholders "experimentar" el
diseño de una manera mucho más tangible que los mockups estáticos, facilitando
la obtención de feedback y la alineación. Para los desarrolladores, mostraría
claramente cómo se esperaba que funcionaran las interacciones y transiciones.

Este prototipo de alta fidelidad fue el resultado de aplicar el Design System y añadir la
capa de interactividad a los mockups. Fue un paso crucial para acercarnos a la
experiencia final que se implementaría y que los pacientes del Centro Médico ABC
utilizan hoy. Aunque la creación fue individual, la capacidad de Figma para manejar
interacciones complejas y "Smart Animate" fue un gran aliado.

