Proceso de Diseño GAC: Fase 3 - Probar y Validar
(Continuación)

Actividad 2: Pruebas de Accesibilidad (Principios Básicos de
WCAG)

Introducción:
Las pruebas de accesibilidad tienen como objetivo asegurar que la plataforma GAC pueda ser
utilizada por personas con diversas capacidades, incluyendo aquellas con discapacidades
visuales, auditivas, motoras o cognitivas. Esta actividad se centra en verificar el cumplimiento
de los principios básicos de las Pautas de Accesibilidad para el Contenido Web (WCAG, por sus
siglas en inglés), que son el estándar internacionalmente reconocido. Integrar la accesibilidad
desde el diseño reduce costos a largo plazo y asegura una experiencia más inclusiva para
todos los colaboradores de Gentera.
Objetivos Principales:

●

Identificar y corregir barreras de accesibilidad en los diseños y prototipos de la
plataforma GAC.

●  Verificar el cumplimiento de los principios y criterios clave de las WCAG

(generalmente se apunta al nivel AA).

●  Asegurar que la plataforma sea perceptible, operable, comprensible y robusta

(principios POUR de WCAG) para una amplia gama de usuarios.
●  Fomentar una mentalidad de "diseño inclusivo" dentro del equipo.
●  Proporcionar recomendaciones para que el equipo de desarrollo implemente

soluciones accesibles.

Preparación:

1.  Comprensión de WCAG:
○  Principios POUR:

■  Perceptible: La información y los componentes de la interfaz de usuario
deben ser presentables a los usuarios de formas que puedan percibir (ej.
alternativas de texto para imágenes, subtítulos para video, contraste de
color adecuado).

■  Operable: Los componentes de la interfaz de usuario y la navegación
deben ser operables (ej. funcionalidad completa disponible desde el
teclado, tiempo suficiente para leer y usar el contenido, no diseñar
contenido que cause convulsiones).

■  Comprensible: La información y la operación de la interfaz de usuario
deben ser comprensibles (ej. texto legible y comprensible, operación

predecible de la interfaz, ayuda para evitar y corregir errores).

■  Robusto: El contenido debe ser lo suficientemente robusto como para ser

interpretado de forma fiable por una amplia variedad de agentes de
usuario, incluidas las tecnologías de asistencia.

○  Niveles de Conformidad:

■  A (Mínimo): Barreras significativas si no se cumple.
■  AA (Medio): El objetivo más común para la mayoría de los sitios web y

aplicaciones. Aborda las barreras más comunes.

■  AAA (Máximo): El nivel más alto, puede no ser factible para todo el

contenido.

○  Definir el Nivel Objetivo para GAC: Confirmar con Gentera el nivel de

conformidad deseado (se recomienda WCAG 2.1 Nivel AA como un buen
estándar).

2.  Reunir Insumos Clave:

○  Diseños de Alta Fidelidad y Prototipos Interactivos: Estos son los artefactos

que se probarán.

○  Guía de Estilo Visual y Librería de Componentes: Para verificar la

accesibilidad de los elementos base (colores, tipografía, componentes).

○  User Personas: Aunque las pruebas de WCAG son más técnicas, recordar las
diversas necesidades de los usuarios ayuda a contextualizar. Considerar si
alguna persona tiene necesidades específicas que se alinean con criterios de
accesibilidad.

3.  Seleccionar Herramientas de Prueba:

○  Herramientas Automatizadas de Verificación:

■  Extensiones de navegador: WAVE (Web Accessibility Evaluation Tool), axe

DevTools, Accessibility Insights for Web.

■  Validadores online: W3C Markup Validation Service (para HTML),

validadores de contraste de color.

■  Funcionalidades integradas en herramientas de diseño (ej. plugins de

accesibilidad en Figma para verificar contraste).

○  Herramientas Manuales y Tecnologías de Asistencia (para pruebas más

profundas):
■  Teclado: Para probar la navegación sin ratón.
■  Lectores de Pantalla: NVDA (gratuito para Windows), VoiceOver

(integrado en macOS/iOS), JAWS (comercial).

■  Herramientas de Zoom: Funcionalidad de zoom del navegador o del

sistema operativo.

■  Listas de Verificación (Checklists): Basadas en los criterios de WCAG.

4.  Definir el Alcance de las Pruebas:

○  ¿Qué pantallas y flujos clave se probarán? Priorizar las más críticas y

complejas.

○  ¿Qué criterios específicos de WCAG Nivel AA se enfocarán en esta ronda? (Es

útil tener una checklist).

5.  Capacitación del Equipo (si es necesario):

○  Asegurar que el diseñador y, idealmente, algunos miembros del equipo de

desarrollo tengan un conocimiento básico de los principios de WCAG y cómo
realizar pruebas manuales.

Proceso de Pruebas de Accesibilidad (Iterativo):

Este proceso debe integrarse a lo largo del diseño y desarrollo, no solo al final.

1.  Durante el Diseño de UI (Actividad anterior):

○  Contraste de Color: Desde la definición de la paleta de colores, verificar que
las combinaciones de texto y fondo cumplan con el ratio de contraste mínimo
(4.5:1 para texto normal, 3:1 para texto grande - Nivel AA). Usar herramientas
de verificación de contraste.

○  Tipografía Legible: Elegir fuentes claras y asegurar tamaños de texto

adecuados.

○  Diseño de Formularios: Asegurar que las etiquetas estén asociadas

correctamente a sus campos, que las instrucciones sean claras y que los
mensajes de error sean perceptibles y comprensibles.

○  Jerarquía Visual Clara: Usar encabezados (H1, H2, etc.) de manera lógica para

estructurar el contenido.

2.  Pruebas sobre Diseños de Alta Fidelidad y Prototipos:

○  a. Pruebas Automatizadas:

■  Ejecutar herramientas de evaluación de accesibilidad (como WAVE o axe

DevTools) sobre los prototipos o maquetas HTML/CSS si están disponibles
en etapas tempranas.

■  Estas herramientas pueden identificar rápidamente problemas comunes
como falta de texto alternativo en imágenes, problemas de contraste,
errores de estructura de encabezados, y problemas en formularios.
■  Analizar los reportes generados y listar los problemas encontrados.

○  b. Pruebas Manuales (Esenciales, ya que las herramientas automáticas no

detectan todo):
■  Navegación con Teclado:

■  ¿Se puede acceder a todos los elementos interactivos (enlaces,

botones, campos de formulario, menús) usando solo la tecla Tab?
■  ¿El orden de tabulación es lógico y sigue el flujo visual de la página?
■  ¿Hay un indicador de foco visible y claro en el elemento que tiene el

foco?

■  ¿Se puede operar toda la funcionalidad (ej. abrir menús, enviar

formularios) usando el teclado (Enter, Espacio, teclas de flecha)?
■  ¿No hay "trampas de teclado" donde el foco se queda atascado?

■  Contenido Perceptible:

■  Texto Alternativo (Alt Text) para Imágenes: Asegurar que todas las
imágenes significativas tengan un texto alternativo descriptivo. Las
imágenes decorativas deben tener un atributo alt vacío (alt=""). (Esto se
especifica en el diseño para que el desarrollador lo implemente).

■  Contraste de Color (Re-verificación): Revisar manualmente

combinaciones que las herramientas podrían pasar por alto o en
contextos específicos.

■  Tamaño de Texto y Zoom: Verificar que el texto sea legible y que la

■

página siga siendo usable cuando se aumenta el zoom del navegador al
200%.
Información transmitida solo por color: Asegurar que la información
no se comunique únicamente mediante el color (ej. un estado de error
solo en rojo sin un icono o texto adicional).

■  Comprensibilidad:

■  Etiquetas Claras: ¿Los enlaces, botones y etiquetas de formulario son

■

descriptivos y comprensibles?
Instrucciones: ¿Las instrucciones para completar tareas o formularios
son claras?

■  Consistencia: ¿La navegación y la disposición de los elementos son

consistentes a través de las diferentes pantallas?

■  Lectores de Pantalla (Pruebas básicas si no se cuenta con usuarios

expertos):
■  Activar un lector de pantalla (NVDA, VoiceOver).
■  Navegar por las pantallas clave.
■  ¿El lector de pantalla anuncia correctamente los encabezados, enlaces,

botones, campos de formulario y su estado?

■  ¿El texto alternativo de las imágenes se lee correctamente?
■  ¿El orden de lectura es lógico?

■  ¿Se anuncian los cambios dinámicos en la página (ej. mensajes de error,

■

contenido que se carga)?
(Esta prueba es más efectiva cuando la realiza alguien con experiencia
o, idealmente, un usuario nativo de lector de pantalla).

3.  Pruebas Específicas de Criterios WCAG Seleccionados:

○  Utilizar una checklist basada en WCAG 2.1 Nivel AA para revisar

sistemáticamente criterios relevantes para el diseño y la interacción. Ejemplos:
■  1.4.3 Contraste (Mínimo): Verificado.
■  2.1.1 Teclado: Verificado.
■  2.4.4 Propósito de los Enlaces (En Contexto): ¿El propósito de cada

enlace es claro por su texto o por el contexto?

■  2.4.6 Encabezados y Etiquetas: ¿Describen el tema o propósito?
■  3.2.2 Al Recibir Entradas: ¿Cambiar el ajuste de un componente de la
interfaz no causa automáticamente un cambio de contexto sin avisar al
usuario?

■  3.3.2 Etiquetas o Instrucciones: ¿Se proporcionan etiquetas o

instrucciones cuando el contenido requiere la introducción de datos por
parte del usuario?

■  4.1.2 Nombre, Función, Valor: Para todos los componentes de la interfaz
de usuario, el nombre y la función pueden ser determinados por software;
los estados, propiedades y valores que pueden ser establecidos por el
usuario pueden ser establecidos por software; y la notificación de cambios
está disponible para los agentes de usuario, incluyendo las tecnologías de
asistencia. (Más técnico, pero el diseño debe permitirlo).

Análisis de Hallazgos y Reporte:

1.  Documentar Todos los Problemas Encontrados:

○  Para cada problema de accesibilidad:
■  Descripción clara del problema.
■  Ubicación (pantalla, componente específico).
■  Criterio WCAG afectado (si se conoce).
■

Impacto en los usuarios (especialmente aquellos con discapacidades
específicas).

■  Capturas de pantalla o grabaciones que ilustren el problema.
■  Severidad del problema (crítico, alto, medio, bajo).

2.  Priorizar los Problemas:

○  Los problemas que impiden el acceso a funcionalidades clave o que violan

criterios de Nivel A son los más críticos.
3.  Crear un Informe de Pruebas de Accesibilidad:

○  Resumen Ejecutivo: Principales barreras encontradas y su impacto.
○  Metodología: Herramientas y métodos utilizados, alcance de las pruebas.
○  Hallazgos Detallados: Lista priorizada de problemas con la información

documentada arriba.

○  Recomendaciones Accionables: Sugerencias específicas para que los
diseñadores y desarrolladores corrijan los problemas. Esto puede incluir
cambios en el diseño visual, la estructura HTML, o el comportamiento de los
componentes.

Iteración y Seguimiento:

1.  Presentar los Resultados al Equipo:

○  Compartir el informe con el equipo de diseño y desarrollo, y con los

stakeholders de Gentera.

○  Discutir los hallazgos y las recomendaciones.

2.  Iterar sobre el Diseño y el Desarrollo:

○  Diseñadores: Realizar los ajustes necesarios en los diseños de alta fidelidad y

la guía de estilo.

○  Desarrolladores: Implementar las correcciones en el código.

3.  Re-evaluación (Testing de Regresión):

○  Una vez que se han implementado las correcciones, volver a probar las áreas
problemáticas para asegurar que los problemas se hayan resuelto y que no se
hayan introducido nuevas barreras.

○  La accesibilidad debe ser un esfuerzo continuo, no una actividad única.

Conclusión de la Actividad 2 (Fase 3):
Las pruebas de accesibilidad son esenciales para crear una plataforma GAC que sea
verdaderamente inclusiva y cumpla con los estándares éticos y legales. Al integrar estas
pruebas de manera iterativa, podemos identificar y solucionar problemas de manera proactiva,
asegurando que todos los colaboradores de Gentera, independientemente de sus
capacidades, puedan beneficiarse de esta nueva herramienta. Esto no solo mejora la usabilidad
para las personas con discapacidades, sino que a menudo resulta en una mejor experiencia de
usuario para todos.

