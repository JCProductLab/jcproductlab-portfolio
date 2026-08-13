Mantenimiento del Sistema de Diseño (en Colaboración)

El propósito de esta tarea es trabajar activamente con el equipo de Ingeniería para construir,
documentar y mantener un sistema de diseño cohesivo que exista tanto en herramientas de
diseño como en código. El objetivo es asegurar la consistencia visual y funcional de la
interfaz a medida que el producto se escala, optimizar la eficiencia del flujo de trabajo entre
diseño y desarrollo y establecer una fuente única de verdad para los componentes de la
interfaz de usuario.

Paso a Paso:

1.  Alinear la Fuente de Verdad Compartida para el Sistema de Diseño:

○  Acción: Acuerda con el equipo de Ingeniería (Líder Técnico, desarrolladores

Frontend) dónde residirá la "fuente de verdad" principal del Sistema de
Diseño, tanto para los diseñadores como para los desarrolladores. Esto
implica vincular o reflejar la documentación y los componentes de diseño con
los componentes de código.

○  Foco: Establecer un punto de referencia claro para ambos equipos para

evitar confusiones sobre qué versión o especificación de un componente es
la correcta. Lo ideal es un enfoque donde los componentes en código (ej. en
Storybook) reflejen fielmente los componentes en tu herramienta de diseño
(ej. Figma Library) y su documentación.

○  Herramientas:

■  Software de diseño con capacidades de librerías/componentes

compartidos (Figma, Sketch, Adobe XD).

■  Herramientas de documentación de Design System (ej. Zeplin,
Zeroheight, Storybook - especialmente si los desarrolladores
documentan sus componentes de código aquí).

■  Repositorio de código (Git) donde residen los componentes de

código.
○  Entregables:

■  Acuerdo Documentado sobre la Fuente de Verdad y las Herramientas

del Sistema de Diseño.

2.  Colaboración en la Implementación de Componentes del Sistema de Diseño:

○  Acción: Trabaja estrechamente con los desarrolladores a medida que

construyen los componentes de la interfaz en código, basándose en el UI Kit
inicial y la documentación que proporcionaste en el handoff.

○  Foco: Estar disponible para responder preguntas específicas sobre cómo se
debe implementar un componente particular, sus variaciones, estados y
especificaciones de accesibilidad. Participar en discusiones técnicas sobre la
mejor manera de estructurar los componentes en código para que sean
reutilizables y escalables, alineado con la visión de diseño. Asegurar que
comprendan las interacciones y animaciones deseadas a nivel de
componente.
○  Herramientas:

■  Software de diseño (para mostrar cómo está construido el

componente de diseño).

■  Herramientas de comunicación (Slack, Teams).
■  Sesiones de pair programming o discusiones técnicas conjuntas (si el

equipo lo practica).

○  Entregables: No hay entregables formales tuyos, es una colaboración

continua y consultoría durante la implementación.

3.  Revisión Continua de Componentes de Código (Design Review of Code

Components):

○  Acción: Revisa los componentes de la interfaz una vez que han sido

implementados en código por los desarrolladores. Idealmente, esto se hace
en un entorno donde se puedan ver los componentes de forma aislada (ej.
Storybook) y en el contexto de la aplicación.

○  Foco: Verificar que los componentes de código se vean y se comporten

exactamente como se especifica en la documentación del sistema de diseño
y tus artefactos de diseño (mockups, prototipos). Presta especial atención a:
■  Precisión visual (medidas, espaciado, tipografía, colores, bordes,

■

sombras).
Implementación de los diferentes estados (hover, activo,
deshabilitado, error, etc.).

■  Comportamiento de la interacción (clics, inputs, transiciones).
■

Implementación de las especificaciones de accesibilidad (roles ARIA,
orden de tabulación, textos alternativos básicos en el componente si
aplica).

■  Responsividad del componente (cómo se adapta a diferentes

tamaños).

○  Herramientas:

■  Entorno de documentación de componentes de código (Storybook,

etc.).

■  La aplicación construida en un entorno de prueba/staging.
■  Software de diseño y documentación del Design System (para

comparar).

■  Herramientas de inspección del navegador.

○  Entregables:

■  Feedback de Diseño sobre la Implementación de Componentes de

Código (reportado en la herramienta de gestión de proyectos o en la
herramienta del Design System).

4.  Gestión de Discrepancias y Propuestas de Actualización:

○  Acción: Si encuentras discrepancias entre el diseño y el código de un

componente, o si durante la implementación surge la necesidad de una
nueva variación o un ajuste en un componente existente, gestiona este
proceso de cambio.

○  Foco: Discutir las discrepancias con los desarrolladores para entender la

causa (¿error de implementación, ambigüedad en la especificación, limitación
técnica?). Si se requiere un ajuste en el diseño o la creación de un nuevo
componente/variación, actualiza tus artefactos de diseño y su documentación

en el Sistema de Diseño. Si el cambio es en el código, asegúrate de que se
documente adecuadamente y que se refleje en la fuente de verdad
compartida. Asegúrate de que el ciclo de feedback y actualización sea
eficiente.

○  Herramientas:

■  Herramientas de gestión de proyectos (para documentar

discrepancias o solicitudes de cambio).

■  Software de diseño (para actualizar componentes de diseño).
■  Herramientas de documentación del Design System.
■  Canales de comunicación para discutir los cambios.

○  Entregables:

■  Componentes de Diseño Actualizados (en tu librería).
■  Documentación del Sistema de Diseño Actualizada (reflejando los

cambios en diseño y/o código).

5.  Documentación Continua y Comunicación de Actualizaciones:

○  Acción: A medida que se añaden nuevos componentes al sistema (en
diseño y código) o se actualizan los existentes, asegúrate de que la
documentación se mantenga al día y comunica estos cambios a los equipos
relevantes (especialmente Diseño, Desarrollo Frontend y QA).

○  Foco: Mantener a todos informados sobre los componentes disponibles y

cómo utilizarlos. Una buena documentación facilita la adopción del sistema y
previene la inconsistencia. Asegúrate de que la documentación incluya
directrices claras sobre cuándo y cómo usar cada componente.

○  Herramientas:

■  Herramienta de documentación del Design System.
■  Canales de comunicación (ej. un canal específico en Slack para

actualizaciones del Design System).

■  Emails o comunicados internos.

○  Entregables:

■  Documentación del Sistema de Diseño Mantenida y Actualizada.
■  Comunicados Regulares sobre Actualizaciones del Sistema de

6.  Promoción y Fomento del Uso del Sistema de Diseño:

Diseño.

○  Acción: Actúa como evangelizador del Sistema de Diseño dentro de la
organización, especialmente entre los equipos de Diseño y Desarrollo.
○  Foco: Destacar los beneficios de utilizar el sistema (consistencia, velocidad,
escalabilidad). Animar a los diseñadores a usar los componentes de la
librería y a los desarrolladores a utilizar los componentes de código.
Fomentar una cultura donde se "piense en componentes". Recopilar
feedback sobre el sistema para seguir mejorándolo.

○  Herramientas:

■  Presentaciones internas.
■  Sesiones de formación o workshops sobre el uso del Design System.
■  Canales de comunicación dedicados.

○  Entregables: No hay entregables formales, es una actividad de liderazgo y

fomento de la cultura.

Al mantener activamente el Sistema de Diseño en colaboración con Ingeniería, estás
sentando las bases para un desarrollo más rápido, una interfaz más consistente y
mantenible a largo plazo, y una colaboración más efectiva entre diseño y desarrollo. Este es
un esfuerzo continuo que va más allá del lanzamiento inicial del MVP.

