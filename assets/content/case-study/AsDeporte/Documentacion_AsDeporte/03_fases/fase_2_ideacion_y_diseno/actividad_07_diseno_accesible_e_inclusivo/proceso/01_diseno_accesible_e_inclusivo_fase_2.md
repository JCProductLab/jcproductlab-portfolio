Diseño Accesible e Inclusivo (Fase 2):

Séptimo Paso de la Fase 2: Diseño Accesible e Inclusivo

1.  Propósito: Revisar los diseños visuales y de interacción ya creados (mockups,

prototipos, UI Kit) para asegurar que cumplen con los estándares de
accesibilidad (como WCAG) y principios de diseño inclusivo. Identificar y
corregir posibles barreras de uso y documentar las especificaciones técnicas
necesarias para que el equipo de desarrollo pueda construir una plataforma
utilizable por la mayor cantidad de personas posible, incluyendo aquellas con
diversas discapacidades.

2.  Objetivo para AsDeporte: Asegurar que la nueva plataforma digital B2C sea

usable y accesible para atletas con diversas necesidades (visuales, auditivas,
motoras, cognitivas), cumpliendo al menos con el nivel AA de las WCAG.
Confirmar que el diseño visual y las interacciones reflejan un enfoque
inclusivo hacia todos los perfiles de deportistas de AsDeporte, considerando
también a usuarios con baja familiaridad tecnológica (como sugirió Soporte).

3.  Revisión de Entregables Anteriores con Enfoque en Accesibilidad:

○  Acción: Revisa los entregables de diseño completados (Wireframes,

Especificaciones de IxD, Mockups de Alta Fidelidad, UI Kit inicial) a través de
la lente de la accesibilidad y la inclusión.

○  Foco:

■  Mockups de UI y UI Kit: Evaluar el contraste de color para texto y
elementos gráficos interactivos. Verificar el tamaño mínimo de texto
y la legibilidad de la tipografía elegida. Asegurar que los elementos
interactivos (botones, enlaces, campos) tengan un tamaño y
espaciado adecuados para ser fácilmente seleccionables
(especialmente en móvil) y visualmente distinguibles.

■  Especificaciones de IxD y Flujos de Usuario: Considerar cómo los
usuarios que no usan un ratón (ej. navegación por teclado, lectores
de pantalla) interactuarán con los elementos. ¿El orden de tabulación
es lógico? ¿El feedback de interacción es accesible para usuarios con
discapacidades visuales o auditivas? ¿Las validaciones de formulario
son claras y accesibles?

■  Contenido y Nomenclatura (de AI y Wireframes): ¿El lenguaje

utilizado es claro, sencillo y libre de jerga innecesaria (beneficiando a
usuarios con discapacidades cognitivas o aquellos que no son
expertos en tecnología)? ¿La estructura de encabezados (si se
definió a este nivel) es lógica?
Imágenes e Iconos: ¿Se pueden proporcionar textos alternativos
descriptivos (alt text) para imágenes informativas? ¿Los iconos tienen
etiquetas de texto visibles o accesibles para lectores de pantalla?

■

■  Uso del Color: Asegurar que el color no sea el único medio para

transmitir información o indicar un estado.

○  Herramientas: Tu conocimiento de los principios de accesibilidad (WCAG).
Herramientas de verificación de contraste de color (ej. WebAIM Contrast
Checker, plugins en software de diseño como Stark).

4.  Aplicación de Principios de Diseño Inclusivo:

○  Acción: Revisa los diseños para asegurar que reflejen un enfoque inclusivo,
más allá del cumplimiento técnico de la accesibilidad para discapacidades.

○  Foco: Considerar la diversidad de perfiles de atletas y sus contextos de uso
(ej. diferentes niveles de habilidad, diversas disciplinas, distintas edades,
diferentes capacidades tecnológicas - como sugirió Soporte y B2B). ¿El
diseño funciona bien en diferentes condiciones de iluminación (ej. usando el
móvil en exteriores)? ¿Es comprensible para usuarios cuya lengua materna
no es el español? ¿La representación visual (imágenes, iconos) es diversa y
representativa de la comunidad de AsDeporte? ¿Se considera a usuarios con
conexiones a internet lentas o dispositivos antiguos?

5.  Identificación de Gaps de Accesibilidad e Inclusión:

○  Acción: Documentar cualquier área de los diseños existentes que no cumpla
con los estándares de accesibilidad (ej. contraste insuficiente, elementos
demasiado pequeños, flujo de teclado no claro) o que pueda ser excluyente
para ciertos grupos de usuarios.

○  Foco: Crear una lista clara de problemas de accesibilidad e inclusión a

abordar en los diseños.

6.  Iteración de Diseño Basada en Hallazgos de Accesibilidad/Inclusión:

○  Acción: Modificar los mockups de alta fidelidad, el UI Kit y potencialmente
las especificaciones de interacción basándote en los gaps identificados.

○  Foco: Ajustar la paleta de colores para mejorar el contraste. Aumentar

tamaños de texto o elementos. Modificar layouts o interacciones para mejorar
la navegación por teclado o la compatibilidad con lectores de pantalla. Añadir
estados visuales o feedback de interacción que sean accesibles. Refinar la
nomenclatura o el UX writing.

7.  Documentación Detallada de Especificaciones de Accesibilidad:

○  Acción: Documentar las especificaciones de accesibilidad explícitamente

para cada componente UI y patrón de interacción relevante. Esto es crucial
para el handoff a desarrollo.

○  Foco: Especificar los requisitos de contraste mínimo. Documentar el

comportamiento del foco del teclado y el orden de tabulación. Proporcionar
textos alternativos para imágenes. Especificar cómo se comunican los
estados y errores de manera accesible (ej. mediante atributos ARIA para
lectores de pantalla). Documentar los estados de los elementos para
diferentes necesidades (ej. estado de "error" en un campo de formulario que
no solo depende del color).

○  Herramientas: Anotaciones detalladas en el software de diseño (Figma,

Zeplin con plugins de accesibilidad como Stark), documentación separada
(guías de accesibilidad, especificaciones técnicas de accesibilidad).

8.  Validación Interna y (Opcional) con Expertos/Usuarios:

○  Acción: Revisar los diseños actualizados y la documentación de
accesibilidad con el equipo (especialmente Diseño, Producto, y
Tecnología/QA para validar la especificación técnica). Si es posible y el
alcance lo permite, obtener feedback de un experto en accesibilidad o
realizar pruebas de usabilidad con usuarios con discapacidades.

○  Foco: Asegurar que las especificaciones son claras, completas y factibles de
implementar, y que los diseños abordan los problemas de accesibilidad de
manera efectiva.

Entregables del Paso de Diseño Accesible e Inclusivo:

1.  Mockups de Alta Fidelidad (Refinados con Accesibilidad): Versiones

actualizadas de los diseños visuales que incorporan mejoras de accesibilidad.

2.  UI Kit/Design System (con Especificaciones de Accesibilidad): Componentes de
interfaz con documentación clara sobre contraste, tamaño, estados accesibles, etc.

3.  Especificaciones Detalladas de Accesibilidad: Documentación técnica para el

equipo de desarrollo sobre cómo implementar la accesibilidad (orden de tabulación,
alt text, roles ARIA, estados accesibles, etc.).

4.  Informe de Evaluación de Accesibilidad (Interna o Externa): Documentación de

los hallazgos de la revisión de accesibilidad y cómo se abordaron.

Al completar este paso, habrás asegurado que el diseño de la nueva plataforma digital B2C
no solo sea atractivo y usable, sino también accesible e inclusivo, ampliando su alcance y
cumpliendo con importantes estándares de calidad y ética.

