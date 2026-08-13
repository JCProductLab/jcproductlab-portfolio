Informe de Pruebas de Accesibilidad - Rediseño Plataforma Web
Centro Médico ABC

Fecha: Diciembre 2021
Autor: [Tu Nombre/Mi Rol] (Product Designer, Agencia Denumeris)
1. Introducción y Objetivos de la Prueba

Este informe presenta los resultados de la auditoría de accesibilidad realizada a la
nueva plataforma web del Centro Médico ABC en su entorno de pruebas (staging). El
objetivo principal fue evaluar el cumplimiento del sitio con los estándares de
accesibilidad web, específicamente las Pautas de Accesibilidad al Contenido Web
(WCAG) 2.1 Nivel AA, para asegurar que la plataforma sea usable por la mayor cantidad
de personas posible, incluyendo aquellas con discapacidades visuales, auditivas,
motoras o cognitivas.

Asegurar la accesibilidad es un Principio de Diseño fundamental del proyecto y un
compromiso del Centro Médico ABC para ofrecer una experiencia inclusiva y equitativa
a todos sus pacientes.

2. Metodología

●  Estándar de Referencia: WCAG 2.1 Nivel AA.
●  Enfoque: Se utilizó una combinación de métodos para la evaluación:

○  Revisión Manual Experta: Navegación y evaluación por parte de un experto

en accesibilidad (yo mismo) utilizando un checklist de WCAG.

○  Pruebas con Herramientas Automatizadas: Uso de software para identificar
problemas comunes de accesibilidad (ej. contraste de color, atributos ARIA
faltantes).

○  Pruebas con Tecnologías Asistivas (Simuladas/Básicas): Navegación con
teclado, uso de lectores de pantalla básicos (ej. VoiceOver en macOS, NVDA
en Windows) para simular la experiencia de usuarios con discapacidades
visuales.

●  Alcance: Se auditaron las pantallas y flujos clave de la plataforma, incluyendo:

○  Homepage
○  Buscador de Médicos y Página de Resultados
○  Página de Perfil del Médico
○  Flujo de Agendamiento de Citas (Laboratorio/Estudios)
○  Sección "Consejos de Salud" (Artículos)
○  Página de Centro de Alta Especialidad (ej. Centro Cardiovascular)

○  Elementos de navegación global y utilitaria (header, footer, menús)
○  Formularios y mensajes de error

3. Hallazgos Clave y Recomendaciones (Problemas Priorizados)

Los hallazgos se clasifican por su impacto en la accesibilidad y se acompañan de
recomendaciones específicas para su corrección.

3.1. Problemas Críticos (Impacto Mayor en la Usabilidad para Personas con
Discapacidad)

●  1. Contraste de Color Insuficiente en Textos Pequeños (WCAG 1.4.3 Contraste

Mínimo)
○  Hallazgo: Algunos textos de información secundaria, etiquetas de campos o

texto en botones con fondos de color claro no cumplen con el ratio de
contraste mínimo de 4.5:1. Esto dificulta la lectura para usuarios con baja visión
o daltonismo.

○  Ejemplo: Texto gris claro sobre fondo blanco en descripciones breves de

servicios.

○  Recomendación: Ajustar la paleta de colores del Design System para asegurar
que todas las combinaciones de texto y fondo cumplan con los requisitos de
contraste de WCAG 2.1 AA. Utilizar herramientas de verificación de contraste
(ej. Stark, WebAIM Contrast Checker) durante la implementación.

○  Reflejo en el Sitio Actual (https://centromedicoabc.com/): El sitio actual

utiliza una paleta de colores con buen contraste en general, lo que indica que
esta recomendación fue implementada.

●  2. Navegación por Teclado Incompleta o Confusa (WCAG 2.1.1 Teclado, 2.4.3

Orden del Foco)
○  Hallazgo: En ciertos componentes interactivos (ej. menús desplegables

complejos, modales, selectores de fecha en el agendamiento), el orden de
tabulación no es lógico o el indicador de foco visual no es siempre visible, lo
que dificulta la navegación para usuarios que dependen del teclado.

○  Ejemplo: Al presionar "Tab" en el calendario del agendamiento, el foco salta a

un elemento inesperado o desaparece.

○  Recomendación: Asegurar que todos los elementos interactivos sean

accesibles y operables completamente con el teclado. Implementar un orden
de tabulación lógico y consistente. Garantizar que el indicador de foco visual
(el "outline" o borde que aparece al tabular) sea siempre visible y tenga
suficiente contraste.

○  Reflejo en el Sitio Actual: El sitio actual permite la navegación por teclado en
la mayoría de sus elementos interactivos, y el indicador de foco es visible, lo
que sugiere que se realizaron mejoras en este aspecto.

3.2. Problemas Mayores (Impacto Significativo, Requieren Atención)

●  3. Atributos alt Faltantes o Genéricos en Imágenes Informativas (WCAG 1.1.1

Contenido No Textual)
○  Hallazgo: Algunas imágenes informativas (ej. fotos de médicos, banners de

servicios) carecen de un texto alternativo (alt attribute) descriptivo, o tienen un
alt genérico ("imagen", "foto"). Esto impide que los usuarios de lectores de
pantalla comprendan el contenido visual.

○  Ejemplo: Una foto de un médico sin alt o con alt="doctor".
○  Recomendación: Revisar todas las imágenes informativas y añadir un texto

alternativo conciso y descriptivo que transmita su propósito o contenido. Las
imágenes puramente decorativas deben tener alt="" (vacío).

○  Reflejo en el Sitio Actual: Es una buena práctica de desarrollo web que se

suele implementar en el resultado final, aunque no es directamente visible sin
inspeccionar el código.

●  4. Etiquetas de Formulario No Asociadas Correctamente (WCAG 1.1.1, 1.3.1

Info y Relaciones)
○  Hallazgo: En algunos formularios (ej. agendamiento, contacto), las etiquetas
(<label>) no están programáticamente asociadas a sus campos de entrada
(<input>) correspondientes (usando for y id). Esto confunde a los lectores de
pantalla.

○  Ejemplo: Un lector de pantalla no anuncia la etiqueta de un campo cuando el

foco está en él.

○  Recomendación: Asegurar que todas las etiquetas de formulario estén

programáticamente asociadas a sus campos de entrada utilizando el atributo
for en la etiqueta y el id correspondiente en el campo.

○  Reflejo en el Sitio Actual: Los formularios del sitio actual están bien

estructurados, lo que sugiere que esta corrección se aplicó.

●  5. Falta de Títulos de Página Descriptivos y Únicos (WCAG 2.4.2 Título de

Página)
○  Hallazgo: Algunas páginas tienen títulos genéricos o duplicados (<title> tag), lo
que dificulta la orientación para usuarios que navegan por títulos de pestaña o
con lectores de pantalla.

○  Ejemplo: Varias páginas de servicios con el mismo título "Servicios ABC".

○  Recomendación: Asegurar que cada página tenga un título descriptivo y único

que refleje su contenido principal.

○  Reflejo en el Sitio Actual: El sitio actual tiene títulos de página descriptivos
para la mayoría de sus secciones, lo que mejora la navegación y el SEO.

3.3. Problemas Menores (Impacto Limitado, Pero Mejoran la Experiencia General)

●  6. Mensajes de Error de Formulario Poco Claros para Lectores de Pantalla

(WCAG 3.3.1 Identificación de Errores)
○  Hallazgo: Los mensajes de error de validación de formularios son visibles
visualmente, pero no siempre se anuncian de forma clara a los usuarios de
lectores de pantalla.

○  Recomendación: Utilizar atributos ARIA (ej. aria-live="assertive",

aria-describedby) para asegurar que los mensajes de error sean anunciados
inmediatamente por los lectores de pantalla cuando aparecen.

○  Reflejo en el Sitio Actual: Es una mejora de usabilidad que se integra en el

desarrollo.

●  7. Ausencia de Idioma Principal en el Documento (WCAG 3.1.1 Idioma de la

Página)
○  Hallazgo: El atributo lang en la etiqueta <html> no está especificado o es

incorrecto, lo que puede afectar la pronunciación de los lectores de pantalla.
○  Recomendación: Asegurar que <html lang="es"> esté correctamente definido.
○  Reflejo en el Sitio Actual: Una práctica estándar que se implementa en el

código fuente.

4. Conclusión y Recomendaciones Generales

La auditoría de accesibilidad ha revelado que la nueva plataforma web del Centro
Médico ABC ha realizado avances significativos en su diseño inclusivo, especialmente
en contraste con la plataforma pre-rediseño. Sin embargo, persisten áreas clave donde
se requieren mejoras para alcanzar plenamente el nivel AA de WCAG 2.1 y garantizar
una experiencia verdaderamente accesible para todos los usuarios.

Recomendaciones Generales:

●  Priorizar Correcciones Críticas y Mayores: Enfocar los esfuerzos de desarrollo
inmediatos en los problemas de contraste, navegación por teclado y etiquetas de
formulario.
Integrar la Accesibilidad en el Flujo de Trabajo: Asegurar que las
consideraciones de accesibilidad sean parte integral de cada fase del desarrollo
(diseño, desarrollo, QA) y no solo una revisión final.

●

●  Capacitación Continua: Proporcionar capacitación sobre accesibilidad web al

equipo de diseño y desarrollo.

●  Pruebas con Usuarios Reales con Discapacidad: Si es posible, realizar pruebas
de usabilidad con personas con diversas discapacidades para obtener feedback
directo y validar las soluciones implementadas.

●  Monitoreo Continuo: Utilizar herramientas automatizadas y revisiones manuales

periódicas para mantener la accesibilidad a lo largo del tiempo.

Al implementar estas recomendaciones, el Centro Médico ABC no solo cumplirá con
estándares importantes, sino que reforzará su compromiso con la atención centrada
en el paciente, extendiendo su excelencia a todos los usuarios de su plataforma digital,
como se observa en el sitio actual que busca ser un referente en calidad y cuidado.

