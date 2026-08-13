Feedback y Aprobación en Revisiones de Diseño (Design QA) -
Rediseño Plataforma Web Centro Médico ABC

Fecha: Diciembre 2021
Autor: [Tu Nombre/Mi Rol] (Product Designer, Agencia Denumeris)
1. Introducción y Propósito de Design QA

Este informe documenta el proceso de Control de Calidad de Diseño (Design QA)
llevado a cabo durante la fase de desarrollo y pruebas de la nueva plataforma web del
Centro Médico ABC. El propósito principal de Design QA es asegurar que el producto
desarrollado por el equipo de ingeniería sea una representación fiel y precisa de los
diseños de alta fidelidad aprobados y del prototipo interactivo. Se busca identificar y
corregir cualquier discrepancia visual, de interacción o de comportamiento antes del
lanzamiento.

Este proceso es crucial para mantener la calidad y la coherencia de la experiencia de
usuario que se espera del Centro Médico ABC, y para garantizar que el resultado final
(el sitio actual https://centromedicoabc.com/) esté a la altura de la visión de diseño.

2. Contexto y Momento de Ejecución

Las revisiones de Design QA se realizaron de forma iterativa y continua a lo largo de la
Fase 3 (Desarrollo) y la Fase 4 (Pruebas y QA), una vez que las funcionalidades estaban
implementadas y disponibles en un entorno de pruebas (staging). Esto permitió
identificar y corregir problemas a medida que se desarrollaban, evitando
acumulaciones al final del proyecto.

3. Metodología

●  Enfoque: Revisión sistemática y detallada de las funcionalidades implementadas

en el entorno de pruebas, comparándolas pixel a pixel y comportamiento a
comportamiento con los mockups de alta fidelidad y el prototipo interactivo en
Figma.

●  Colaboración: Fue un esfuerzo colaborativo entre el Product Designer (yo), el

equipo de Desarrollo (Frontend) y el equipo de QA.

●  Criterios de Revisión:

○  Fidelidad Visual: Colores, tipografía, espaciado, tamaños de elementos,

imágenes, iconos.

○  Fidelidad de Interacción: Comportamiento de botones, enlaces, formularios,

menús desplegables, modales, animaciones y microinteracciones.

○  Responsividad: Adaptación del diseño a diferentes tamaños de pantalla

(desktop, tablet, móvil).

○  Consistencia: Uniformidad en la aplicación del Design System en todo el sitio.
○  Claridad del Contenido (Microcopy): Verificación de que el texto
implementado fuera el aprobado y se mostrara correctamente.

4. Herramientas Utilizadas

●  Figma: Para acceder a los mockups de alta fidelidad y el prototipo interactivo

(modo "Inspect" para especificaciones).

●  Navegadores Web: Chrome, Firefox, Safari (para pruebas de compatibilidad y

responsividad).

●  Herramientas de Inspección del Navegador: Para verificar estilos CSS, tamaños

y espaciado.

●  Herramientas de Captura de Pantalla y Anotación: Para documentar

visualmente los problemas (ej. Markup.io, o funciones nativas del sistema
operativo).

●  Sistema de Gestión de Proyectos/Bugs: JIRA o herramienta similar para registrar

y dar seguimiento a los tickets de Design QA.

●  Herramientas de Comunicación: Slack/Microsoft Teams para comunicación

rápida con el equipo de desarrollo.

5. Proceso de Design QA (Paso a Paso)

1.  Planificación de la Sesión de QA:

○

Identifiqué las funcionalidades o páginas que estaban listas para ser revisadas
en el entorno de pruebas.

○  Preparé un checklist o una lista de verificación basada en los requisitos de

diseño y los flujos de usuario para cada sección.

2.  Ejecución de la Revisión:

○  Accedí a la versión en desarrollo de la plataforma en el entorno de staging.
○  Navegué sistemáticamente por cada pantalla y flujo relevante, comparando el

diseño implementado con el diseño en Figma.

○  Verifiqué la fidelidad visual (colores, fuentes, espaciado, imágenes) y la

fidelidad de interacción (estados de hover, clics, transiciones).

○  Probé la responsividad en diferentes tamaños de pantalla y dispositivos.
○  Presté especial atención a los componentes del Design System para asegurar

su correcta implementación y consistencia.

3.  Documentación de Hallazgos (Bugs de Diseño):

○  Cuando se encontraba una discrepancia, se documentaba como un "bug de

diseño" o "ticket de QA".

○  Cada ticket incluía:

■  Descripción clara del problema (ej. "El botón 'Agendar Cita' en el perfil del

médico tiene un color de fondo incorrecto en estado hover").

■  Captura de pantalla de la implementación con el problema.
■  Enlace al mockup/prototipo de Figma donde se veía el diseño correcto.
■  Severidad (ej. Crítico, Mayor, Menor, Cosmético).
■  Pasos para reproducir.
■  Asignación al desarrollador responsable.
4.  Comunicación y Colaboración con Desarrollo:

○  Los tickets de Design QA se ingresaban directamente en el sistema de gestión

de proyectos para que los desarrolladores pudieran abordarlos.

○  Se realizaban sesiones de sincronización rápidas con el equipo de desarrollo
para explicar los hallazgos más complejos o discutir posibles soluciones.

5.  Verificación de Correcciones:

○  Una vez que los desarrolladores implementaban las correcciones, se realizaba
una nueva revisión de QA para verificar que el problema se hubiera resuelto
correctamente y que no se hubieran introducido nuevos errores.

6.  Aprobación Final de Diseño por Componente/Flujo:

○  Una vez que una sección o funcionalidad pasaba todas las revisiones de

Design QA y se consideraba visual y funcionalmente fiel al diseño aprobado, se
marcaba como "Aprobada por Diseño".

6. Hallazgos Comunes y Acciones Tomadas (Ejemplos Reales del Proceso)

Durante el Design QA, se identificaron y corrigieron diversos tipos de problemas, lo que
contribuyó a la pulcritud del sitio actual (https://centromedicoabc.com/).

●  Problema: Discrepancias en el espaciado entre elementos o secciones.

○  Ejemplo: El margen entre el buscador de médicos y la sección de "Agenda tu

Cita" era inconsistente con el diseño.

○  Acción Tomada: Se ajustaron los valores de padding y margin en el CSS para

coincidir con las especificaciones de Figma.

●  Problema: Colores o tipografías incorrectas.

○  Ejemplo: El color de un botón secundario o el peso de una fuente en un título

no coincidía con el Design System.

○  Acción Tomada: Se corrigieron los valores hexadecimales de color o las

propiedades font-weight y font-family.

●  Problema: Comportamiento de interacción no esperado.

○  Ejemplo: El efecto de hover en las tarjetas de servicios no se activaba

correctamente o la animación era abrupta.

○  Acción Tomada: Se revisaron las transiciones CSS o las propiedades

JavaScript que controlaban la interacción.

●  Problema: Problemas de responsividad.

○  Ejemplo: En dispositivos móviles, las tarjetas de médicos no se apilaban

correctamente o el texto se desbordaba.

○  Acción Tomada: Se ajustaron las reglas de CSS flexbox/grid y media queries

para asegurar una adaptación fluida.

●  Problema: Microcopy implementado incorrectamente.

○  Ejemplo: Un mensaje de error tenía una fraseología diferente a la aprobada o

faltaba una instrucción clave en un formulario.

○  Acción Tomada: Se actualizó el texto en el código para que coincidiera con el

microcopy final.

●  Problema: Iconos o imágenes con tamaño/resolución incorrecta.

○  Ejemplo: Un icono se veía pixelado o una imagen de banner no cargaba con la

resolución adecuada.

○  Acción Tomada: Se exportaron y se implementaron los assets en el formato y
tamaño correctos (ej. SVG para iconos, WebP optimizado para imágenes).

7. Aprobación de Diseño

Al finalizar el ciclo de Design QA, y una vez que todos los problemas críticos y mayores
fueron resueltos y verificados, se emitió la aprobación final de diseño para la
plataforma. Esta aprobación significa que la implementación cumple con los
estándares de calidad visual y de interacción establecidos, y que la plataforma está
lista para la siguiente fase de Pruebas de Aceptación de Usuario (UAT) y,
eventualmente, el lanzamiento.

Estado Final: La plataforma web del Centro Médico ABC ha sido Aprobada por
Diseño en todas sus funcionalidades principales y flujos críticos. El resultado es una
interfaz pulida, consistente y fiel a la visión de diseño, como se puede observar en
https://centromedicoabc.com/.

Firmas de Aprobación:

●

●

●

[Tu Nombre/Mi Rol] (Product Designer, Agencia Denumeris) - Fecha: Diciembre
2021
[Nombre del Líder de Desarrollo Frontend] - Fecha: Diciembre 2021
[Nombre del Líder de QA] - Fecha: Diciembre 2021

