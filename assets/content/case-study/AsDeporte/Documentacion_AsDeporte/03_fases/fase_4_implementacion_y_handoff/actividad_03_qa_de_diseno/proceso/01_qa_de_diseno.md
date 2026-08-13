QA de Diseño

El propósito de este paso es realizar una revisión exhaustiva de las funcionalidades del
MVP B2C una vez que han sido implementadas por el equipo de Ingeniería. Se busca
verificar que la implementación visual, de interacción, de comportamiento y de accesibilidad
coincida precisamente con las especificaciones de diseño aprobadas y que la experiencia
del usuario sea la esperada en el producto funcional.

Paso a Paso:

1.  Revisión de Entregables de Diseño Finales:

○  Acción: Antes de comenzar el QA de Diseño, revisa nuevamente tus propios
entregables de diseño que sirvieron como base para la implementación.
○  Foco: Refrescar tu memoria sobre las especificaciones exactas, los detalles
visuales, los estados de interacción, los casos de borde documentados y las
especificaciones de accesibilidad. Ten a mano los mockups de alta fidelidad
finales, el prototipo interactivo final, la documentación del UI Kit/Sistema de
Diseño y cualquier especificación adicional relevante.

○  Herramientas:

■  Software de diseño UX/UI (Figma, Sketch, Adobe XD) con los diseños

finales.

■  Documentación del UI Kit / Sistema de Diseño.
■  Especificaciones de Handoff (Zeplin, Figma Dev Mode, etc.).
■  Prototipo Interactivo Final.

○  Entregables: No hay entregables formales aquí, es una etapa de

preparación personal.

2.  Acceso al Entorno de Prueba o Staging:

○  Acción: Obtén acceso a la versión implementada del producto en el entorno
de prueba o staging proporcionado por el equipo de Ingeniería. Asegúrate de
tener las credenciales correctas y de poder acceder a todas las
funcionalidades del MVP B2C que están listas para revisar.

○  Foco: Poder interactuar con el producto funcionalmente en un entorno que
simule (lo más posible) el entorno de producción donde estará disponible
para los usuarios. Esto te permite probar la implementación en diferentes
dispositivos y navegadores si es necesario.

○  Herramientas:

■  URLs o versiones de compilación (builds) de la plataforma web y/o

aplicaciones móviles para entornos de prueba.

■  Credenciales de acceso.
■  Dispositivos (ordenadores, smartphones, tablets) y navegadores para

probar la experiencia responsive y nativa.

○  Entregables: No hay entregables formales aquí, es un prerrequisito para la

tarea.

3.  Revisión Visual Detallada (Pixel-Perfect Check):

○  Acción: Navega por las pantallas implementadas y compáralas

meticulosamente con los mockups de alta fidelidad y las especificaciones de
diseño.

○  Foco: Identificar cualquier discrepancia visual. Esto incluye verificar:

■  Medidas y Espaciado: ¿Los márgenes, paddings y tamaños de los

elementos coinciden con las especificaciones?

■  Tipografía: ¿Se usaron las fuentes, tamaños y pesos correctos? ¿La

altura de línea y el espaciado entre letras son correctos?

■  Colores: ¿Se usaron los códigos de color correctos?
■  Assets Gráficos: ¿Los iconos e imágenes son los correctos, se

muestran con la calidad y el tamaño adecuados?

■  Alineación: ¿Los elementos están alineados correctamente (vertical

y horizontalmente)?

■  Consistencia: ¿Los elementos visuales son consistentes a lo largo
de la interfaz, usando los componentes del UI Kit correctamente?

○  Herramientas:

■  La versión implementada del producto.
■  Mockups de Alta Fidelidad y Especificaciones de Handoff.
■  Herramientas de inspección del navegador (Developer Tools) para

verificar medidas y estilos.

■  Herramientas de comparación visual (opcional, ej. PixelSnap).

○  Entregables (Intermedios de este sub-paso):

■  Notas iniciales de Discrepancias Visuales.

4.  Revisión de Interacción y Comportamiento:

○  Acción: Interactúa con los elementos de la interfaz y las funcionalidades

implementadas, verificando que se comporten como se especificó en el
diseño de interacción y el prototipo.

○  Foco: Probar:

■  Estados de Interacción: ¿Los botones y otros elementos cambian

de estado (hover, activo, deshabilitado, enfocado) correctamente?
■  Validaciones de Formulario: ¿Los mensajes de error se muestran

correctamente? ¿La validación funciona como se esperaba?
■  Comportamientos Específicos: ¿Funcionan los filtros, los

selectores, los componentes complejos (ej. mapa en livetracking)
según lo diseñado?

■  Microinteracciones y Animaciones: ¿Se implementaron las

animaciones y microinteracciones especificadas?

■  Feedback del Sistema: ¿Los mensajes de éxito, error o carga se

muestran de forma clara y en el momento adecuado?

○  Herramientas:

■  La versión implementada del producto.
■  Especificaciones de Diseño de Interacción y Documentación de

Comportamientos.

■  Prototipo Interactivo Final (para recordar el comportamiento

esperado).

○  Entregables (Intermedios de este sub-paso):

■  Notas iniciales de Problemas de Interacción y Comportamiento.

5.  Prueba de Flujos Clave y Casos de Borde:

○  Acción: Recorre los flujos de usuario críticos del MVP B2C en la versión
implementada (ej. búsqueda e inscripción, gestión de perfil, acceso a
resultados). Prueba también los casos de borde documentados.

○  Foco: Asegurarte de que el recorrido del usuario sea fluido y lógico en el

producto funcional. Verificar que los diferentes caminos en un flujo (ej. pago
exitoso vs. pago fallido) funcionen como se diseñó. Probar los estados
vacíos, los mensajes de error en diferentes escenarios, y cómo se comporta
la interfaz en situaciones inesperadas (ej. sin conexión, datos inusuales).

○  Herramientas:

■  La versión implementada del producto.
■  Diagramas de Flujos de Usuario (finales).
■  Documentación de Casos de Borde.

○  Entregables (Intermedios de este sub-paso):

■  Notas sobre la fluidez de los flujos y el manejo de casos de borde en

6.  Verificación de la Implementación de Accesibilidad:

la implementación.

○  Acción: Realiza pruebas básicas para verificar que los requisitos de
accesibilidad documentados se han implementado correctamente.

○  Foco: Comprobar el contraste de color, el tamaño mínimo de texto. Verificar
si la navegación por teclado funciona correctamente (orden de tabulación
lógico). Utilizar herramientas de verificación de accesibilidad básicas para
detectar problemas obvios (ej. falta de texto alternativo en imágenes,
problemas de estructura semántica). Si hay especificaciones ARIA, verificar
su implementación.

○  Herramientas:

■  La versión implementada del producto.
■  Especificaciones Detalladas de Accesibilidad.
■  Herramientas de verificación de contraste (online, plugins).
■  Extensiones de navegador para verificación de accesibilidad (ej.

Lighthouse, WAVE tool, axe DevTools).

■  Navegación solo con teclado.

○  Entregables (Intermedios de este sub-paso):

■  Notas sobre la Implementación de Accesibilidad.

7.  Identificación y Documentación de "Bugs de Diseño":

○  Acción: Consolidar todas las discrepancias y problemas encontrados en los

pasos anteriores (visuales, de interacción, de flujo, de accesibilidad
implementada) y documentarlos como "bugs de diseño" en la herramienta de
gestión de proyectos del equipo.

○  Foco: Ser claro y específico al reportar cada bug. Incluir: una descripción
concisa del problema, los pasos para reproducirlo, el comportamiento
esperado (según el diseño/especificación), el comportamiento actual
(implementado), capturas de pantalla o grabaciones de video que muestren
el problema, e información sobre el entorno de prueba y el

dispositivo/navegador utilizado. Asigna la tarea al desarrollador o equipo
correspondiente.

○  Herramientas:

■  Herramientas de gestión de proyectos/bugs (Jira, Asana, Trello).
■  Software de captura de pantalla o grabación de video.
■  Herramientas de anotación en capturas de pantalla.

○  Entregables:

■  Lista de "Bugs de Diseño" documentados en la herramienta del

8.  Colaboración con el Equipo de QA:

equipo.

○  Acción: Trabaja en estrecha colaboración con el equipo de QA (Control de

Calidad) tradicional.

○  Foco: Compartirles tu perspectiva sobre la experiencia de usuario esperada
y los puntos críticos de interacción y diseño que deben validar. Revisar los
casos de prueba de QA relacionados con la interfaz y la experiencia de
usuario para asegurar que cubran los aspectos clave de diseño. Discutir los
bugs encontrados (tanto los de diseño como los funcionales que impactan la
UX).

○  Herramientas:

■  Herramientas de gestión de proyectos (para ver las tareas y bugs del

equipo de QA).

■  Reuniones de sincronización con el equipo de QA.

○  Entregables: No hay entregables formales tuyos aquí, es una colaboración

continua.

9.  Verificación de la Corrección de Bugs de Diseño:

○  Acción: Una vez que los desarrolladores marcan los "bugs de diseño" como
corregidos, revisa la implementación nuevamente en el entorno de prueba
para confirmar que los problemas se han solucionado correctamente y que
las correcciones no introdujeron nuevos problemas.

○  Foco: Cerrar el ciclo del control de calidad del diseño. Asegurarte de que

cada discrepancia o problema identificado haya sido abordado
satisfactoriamente antes de que la funcionalidad se considere "lista" desde la
perspectiva de diseño.

○  Herramientas:

■  La versión implementada del producto (actualizada).
■  Herramientas de gestión de proyectos (para verificar el estado del

bug).

○  Entregables:

■  Verificación de Bugs de Diseño (marcar como verificados/cerrados en

la herramienta del equipo).

Al completar el QA de Diseño de manera rigurosa, actúas como el último guardián de la
calidad de la experiencia del usuario antes de que el producto llegue a los usuarios finales.
Tu atención al detalle en esta fase es fundamental para asegurar que la implementación del
MVP B2C sea de alta calidad y refleje el diseño validado.

