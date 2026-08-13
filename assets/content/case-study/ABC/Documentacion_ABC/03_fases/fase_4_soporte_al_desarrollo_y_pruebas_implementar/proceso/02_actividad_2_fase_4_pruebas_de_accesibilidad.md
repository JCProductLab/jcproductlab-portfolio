Proceso Detallado: Actividad 2 (Fase 4) - Pruebas de
Accesibilidad (Colaboración con Desarrollo y QA)

Contexto Temporal: Mediados de 2022 (durante y después de la implementación de
funcionalidades, a menudo en paralelo con el Design QA o justo después).
Plataforma Probada: Las versiones desarrolladas de la nueva plataforma del Centro Médico
ABC en un entorno de pruebas (staging), que se convertirían en https://centromedicoabc.com/.
Objetivo General de la Actividad: Verificar y asegurar que la plataforma implementada
cumpliera con los estándares de accesibilidad web, específicamente las Pautas de
Accesibilidad al Contenido en la Web (WCAG) 2.1 Nivel AA, para garantizar una experiencia
inclusiva.
Rol del Product Designer (Individual en Diseño, Colaborador en Pruebas): Aunque el diseño ya
había considerado la accesibilidad (contraste, tamaño de texto, etc.), mi rol aquí fue:
●  Definir los criterios de accesibilidad y las áreas clave a probar.
●  Colaborar con los desarrolladores para asegurar que entendieran los requisitos de

accesibilidad (ej. atributos ARIA, estructura semántica del HTML).

●  Colaborar con el equipo de QA (o participar activamente si no había un equipo

dedicado) en la ejecución de pruebas manuales y en la interpretación de
resultados de herramientas automáticas.

●  Ayudar a priorizar y proponer soluciones para los problemas de accesibilidad

encontrados.

●  Ser un defensor de la accesibilidad durante todo el proceso.

1. Objetivos Específicos de las Pruebas de Accesibilidad:
* Identificar Barreras de Accesibilidad: Descubrir cualquier elemento o funcionalidad en la
plataforma implementada que pudiera dificultar o impedir el uso por parte de personas con
diversas discapacidades (visuales, auditivas, motoras, cognitivas).
* Verificar el Cumplimiento de WCAG 2.1 AA: Asegurar que la plataforma cumpliera con los
criterios de éxito específicos de este estándar.
* Evaluar la Usabilidad con Tecnologías de Asistencia: Probar cómo funcionaba la plataforma
con lectores de pantalla, navegación por teclado y otras herramientas de asistencia.
* Proporcionar Feedback Accionable a los Desarrolladores: Documentar los problemas de
accesibilidad de manera clara para que pudieran ser corregidos.
* Aumentar la Conciencia sobre Accesibilidad: Fomentar una mayor comprensión de la
importancia de la accesibilidad dentro del equipo de desarrollo y QA.
2. Metodología y Marco (Colaborativo):
* Metodología Principal: Una combinación de Pruebas de Accesibilidad Automatizadas y
Pruebas de Accesibilidad Manuales. Ninguna es suficiente por sí sola.
* Marco de Trabajo: Integrado en el proceso de QA. Los problemas de accesibilidad se tratarían
con la misma seriedad que otros bugs funcionales.

3. Herramientas Utilizadas (Por el Equipo Colaborativo):
* Para Pruebas Automatizadas:
* Extensiones de Navegador:
* WAVE (Web Accessibility Evaluation Tool): Para un análisis rápido en página de problemas
comunes.
* axe DevTools (de Deque): Similar a WAVE, identifica violaciones de WCAG.
* Lighthouse (en Chrome DevTools): Incluye una auditoría de accesibilidad que proporciona un
puntaje y recomendaciones.
* Estas herramientas ayudan a identificar problemas "fáciles de detectar" como falta de texto
alternativo en imágenes, problemas de contraste (aunque ya se revisó en diseño), o errores de
estructura HTML básica.
* Para Pruebas Manuales:
* Navegación por Teclado Solamente: Usar la tecla Tab, Shift+Tab, Enter, Espacio y teclas de
flecha para navegar e interactuar con todos los elementos.
* Lectores de Pantalla:
* NVDA (Windows - gratuito): Uno de los más populares.
* VoiceOver (macOS/iOS - integrado): Estándar en el ecosistema Apple.
* JAWS (Windows - de pago, pero muy usado): Si había acceso o experiencia en el equipo.
* Herramientas de Zoom del Navegador y del Sistema Operativo: Para verificar la legibilidad y la
reflow del contenido al aumentar el tamaño.
* Checklists de Accesibilidad (WCAG 2.1 AA): Un checklist detallado basado en los criterios de
WCAG para guiar las pruebas manuales. Podría haber creado una versión simplificada y
priorizada para el equipo.
* Para Documentación y Seguimiento de Problemas:
* Jira/Trello/Asana (la herramienta de gestión de proyectos del equipo): Para reportar los
problemas de accesibilidad como bugs, asignarlos, y rastrear su corrección.
* Herramientas de Captura de Pantalla y Video: Para documentar visualmente los problemas.
4. Proceso Paso a Paso de las Pruebas de Accesibilidad (Colaborativo):

* **Paso 4.1: Preparación y Planificación de las Pruebas (Colaborativo - 1-2 días)**
    * **Definición del Alcance:** Identificar las secciones y flujos de usuario más críticos
de la plataforma implementada que se probarían (ej. homepage, búsqueda de
médicos, proceso de agendamiento, perfiles de médico, portal del paciente, artículos
de salud).
    * **Revisión de Requisitos de Accesibilidad:** Repasar los criterios de WCAG 2.1 AA
relevantes para las funcionalidades que se estaban probando. Yo, como diseñador,
ayudaría a interpretar estos criterios en el contexto del diseño específico.
    * **Creación/Adaptación del Checklist de Pruebas Manuales:** Basado en WCAG,
pero enfocado en los aspectos más impactantes y relevantes para la plataforma.
    * **Asignación de Roles (si había un equipo de QA):** Definir quién realizaría qué tipo

de pruebas. Si no, yo colaboraría directamente con los desarrolladores para guiar las
pruebas.
    * **Entrenamiento Básico (si era necesario):** Si el equipo no estaba muy
familiarizado con las pruebas de accesibilidad manual (especialmente con lectores de
pantalla), podría haber facilitado una breve sesión de introducción o compartido
recursos.

* **Paso 4.2: Ejecución de Pruebas Automatizadas (Regularmente por Desarrolladores y
QA) (Continuo)**
    * **Integración en el Flujo de Desarrollo:** Idealmente, los desarrolladores ejecutarían
herramientas como axe DevTools o Lighthouse en sus entornos locales antes de enviar
el código a pruebas.
    * **Revisión por QA/Diseñador:** El equipo de QA (o yo mismo) también ejecutaría
estas herramientas en el entorno de staging para una verificación adicional.
    * **Análisis de Informes:** Revisar los informes generados por estas herramientas,
identificar los problemas y reportarlos.
    * *Ejemplo (basado en `https://centromedicoabc.com/`):* Las herramientas
automáticas podrían detectar rápidamente si a una imagen del carrusel de la
homepage le falta el atributo `alt`, o si un botón no tiene una etiqueta textual
discernible.

* **Paso 4.3: Ejecución de Pruebas Manuales (Principalmente por QA y/o Diseñador, con
apoyo de Desarrolladores) (Dedicación específica, ej. 3-5 días para una revisión
exhaustiva inicial)**
    * **Navegación por Teclado:**
        * **Proceso:** Intentar navegar por todas las funcionalidades interactivas (enlaces,
botones, campos de formulario, menús, modales) utilizando solo el teclado.
        * **Verificaciones Clave:**
            * ¿Se puede acceder a todos los elementos interactivos?
            * ¿El orden del foco es lógico y predecible?
            * ¿El indicador de foco es claramente visible?
            * ¿Se pueden activar todos los elementos (ej. `Enter` para botones/enlaces,
`Espacio` para checkboxes)?
            * ¿Se pueden evitar las "trampas de teclado" (keyboard traps) donde el foco
queda atrapado en un componente?
        * *Ejemplo:* Probar si se puede navegar por todo el menú principal de
`https://centromedicoabc.com/`, abrir los submenús y seleccionar opciones solo con el

teclado.
    * **Pruebas con Lectores de Pantalla (NVDA, VoiceOver):**
        * **Proceso:** Activar un lector de pantalla y navegar por las páginas y flujos clave,
escuchando cómo el lector de pantalla anuncia el contenido y los elementos
interactivos.
        * **Verificaciones Clave:**
            * ¿Todo el contenido textual es leído correctamente?
            * ¿Las imágenes tienen alternativas textuales descriptivas (o están marcadas
como decorativas si aplica)?
            * ¿Los enlaces y botones tienen nombres accesibles que describen su función?
(Ej. no solo "Leer más").
            * ¿Los formularios están correctamente etiquetados y se anuncian las
instrucciones y los errores de validación?
            * ¿Se anuncian los cambios dinámicos en la página (ej. la apertura de un modal, la
actualización de resultados de búsqueda)? (Aquí entran en juego los atributos ARIA).
            * ¿La estructura de encabezados (H1, H2, H3...) es lógica y ayuda a la
navegación?
        * *Ejemplo:* Probar cómo un lector de pantalla anuncia la información en el perfil
de un médico en `https://centromedicoabc.com/`: ¿lee el nombre, especialidad,
información de contacto de forma clara? ¿Anuncia correctamente el propósito del
botón "Agendar Cita"?
    * **Pruebas de Zoom y Reflow:**
        * **Proceso:** Aumentar el zoom del navegador hasta un 200% (o más).
        * **Verificaciones Clave:**
            * ¿El contenido sigue siendo legible y usable sin necesidad de scroll horizontal
(para contenido vertical)?
            * ¿Los elementos no se superponen ni se cortan?
    * **Verificación de Contraste (Manual):** Aunque se revisó en diseño y con
herramientas automáticas, una revisión visual final en el contexto del navegador es útil.
    * **Otros Criterios del Checklist WCAG:** Revisar otros aspectos como el uso
adecuado de encabezados, la estructura de las tablas, la accesibilidad de los videos (si
los había), etc.

* **Paso 4.4: Documentación y Reporte de Problemas (Continuo)**
    * **Registro Detallado:** Para cada problema de accesibilidad encontrado, se
documentaba en el sistema de gestión de tareas (Jira/Trello):
        * Descripción clara del problema.

        * Pasos para reproducirlo.
        * Navegador/Lector de Pantalla/Herramienta utilizada.
        * Criterio WCAG afectado.
        * Severidad/Impacto sugerido.
        * Capturas de pantalla o videos si ayudaban a ilustrar el problema.
        * (Yo, como diseñador) Podría añadir una sugerencia de solución desde la
perspectiva del diseño o la interacción.

* **Paso 4.5: Priorización y Planificación de Correcciones (Colaborativo - Diseñador,
Product Owner, Líder Técnico)**
    * **Revisión de Problemas:** El equipo revisaba los problemas de accesibilidad
reportados.
    * **Priorización:** Se priorizaban las correcciones basándose en la severidad del
problema, el impacto en los usuarios y el esfuerzo de corrección. Las violaciones
directas de WCAG AA tendrían alta prioridad.
    * **Asignación a Desarrolladores:** Los problemas se asignaban para su corrección.

* **Paso 4.6: Colaboración en la Remediación (Diseñador y Desarrolladores)**
    * **Soporte a Desarrolladores:** Estaba disponible para discutir las soluciones
propuestas para los problemas de accesibilidad. A veces, una corrección técnica podía
tener implicaciones de diseño que necesitábamos discutir.
    * **Revisión de Soluciones Propuestas:** Si un desarrollador proponía una solución
técnica, yo la evaluaba desde la perspectiva de la UX y la accesibilidad.
    * **Ejemplo:** Si un lector de pantalla no anunciaba correctamente un componente
interactivo complejo, yo trabajaría con el desarrollador para definir los atributos ARIA
necesarios o para simplificar la interacción si fuera posible.

* **Paso 4.7: Re-pruebas y Verificación de Correcciones (QA y/o Diseñador)**
    * Una vez que los desarrolladores implementaban las correcciones, el equipo de QA
(o yo mismo) volvía a probar esas áreas específicas para asegurar que el problema se
hubiera resuelto y que no se hubieran introducido nuevas regresiones.

5. Resultado de la Actividad 2 (Pruebas de Accesibilidad):

Al finalizar este esfuerzo colaborativo de pruebas de accesibilidad, habíamos logrado:

●  Una Plataforma Significativamente Más Accesible: Muchos de los problemas de

accesibilidad identificados fueron corregidos, haciendo que la plataforma del
Centro Médico ABC fuera más utilizable para personas con diversas
discapacidades.

●  Mayor Cumplimiento de WCAG 2.1 AA: Aunque alcanzar el 100% de

cumplimiento puede ser un objetivo continuo, la plataforma estaría mucho más
cerca de este estándar.

●  Documentación de Problemas y Soluciones: Un registro de los esfuerzos de

accesibilidad y las mejoras realizadas.

●  Mayor Conciencia y Conocimiento sobre Accesibilidad en el Equipo: El

proceso de probar, discutir y corregir problemas de accesibilidad ayudó a educar a
todo el equipo.

●  Una Mejor Experiencia de Usuario para Todos: Las mejoras de accesibilidad a

menudo benefician a todos los usuarios, no solo a aquellos con discapacidades (ej.
un buen contraste mejora la legibilidad para todos, una navegación por teclado
clara ayuda a los usuarios avanzados).

La plataforma https://centromedicoabc.com/ actual, si bien siempre puede haber
espacio para mejoras continuas en accesibilidad, se benefició de este tipo de pruebas
durante su desarrollo. Elementos como la estructura clara de encabezados, el
contraste adecuado en muchos de sus componentes y la funcionalidad de navegación
por teclado son indicativos de que se consideró la accesibilidad. Mi rol como diseñador
fue fundamental para impulsar esta consideración desde el diseño inicial y luego
colaborar activamente en su verificación y mejora durante el desarrollo.

