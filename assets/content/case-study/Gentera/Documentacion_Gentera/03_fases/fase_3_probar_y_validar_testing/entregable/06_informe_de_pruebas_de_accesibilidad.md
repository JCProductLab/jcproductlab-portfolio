Informe de Pruebas de Accesibilidad - Plataforma GAC
Fecha del Informe: [Fecha Simulada, ej. 29 de Julio de 2025]
Versión: 1.0
Autor: [Tu Nombre/Rol], Diseñador de Producto, Dacodes
1. Resumen Ejecutivo
Se ha realizado una ronda de Pruebas de Accesibilidad para la plataforma de Gestión
Automatizada de la Capacitación (GAC), enfocándose en el cumplimiento de los
principios básicos de las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1
Nivel AA). Las pruebas se llevaron a cabo sobre los prototipos interactivos de alta
fidelidad, que ya incorporan el diseño visual final.
Los resultados de estas pruebas son altamente satisfactorios. Se confirma que el
diseño actual de la plataforma GAC cumple con los criterios de accesibilidad
evaluados, lo que asegura que la herramienta podrá ser utilizada por una amplia gama
de colaboradores de Gentera, incluyendo aquellos con diversas capacidades. La
integración de la accesibilidad desde las etapas tempranas del diseño ha contribuido a
este resultado positivo.
No se identificaron barreras críticas de accesibilidad que impidan el uso de las
funcionalidades principales. Los hallazgos son mínimos y se centran en
recomendaciones de mejora continua que pueden optimizar aún más la experiencia
para todos los usuarios.
2. Metodología
● Objetivos de la Prueba:
○ Verificar el cumplimiento de los principios clave de WCAG 2.1 Nivel AA en los
diseños y prototipos.
○ Asegurar que la plataforma sea perceptible, operable, comprensible y robusta.
○ Identificar cualquier barrera de accesibilidad remanente.
○ Proporcionar recomendaciones para la implementación final.
● Alcance de las Pruebas: Se probaron las pantallas y flujos clave para todos los
roles de usuario (Administrador, Colaborador, Líder, Formador), incluyendo:
○ Proceso de Login.
○ Dashboards principales de cada rol.
○ Flujos de carga y procesamiento de plantilla (Administrador).
○ Flujos de segmentación y ajuste de grupos (Administrador).
○ Flujos de envío de comunicaciones (Administrador).

○ Flujos de consulta de ruta y progreso (Colaborador).
○ Flujos de visualización de avance de equipo y reportes (Líder).
○ Flujos de agenda y registro de asistencia (Formador).
● Herramientas y Métodos de Prueba:
○ Pruebas Automatizadas: Uso de extensiones de navegador como WAVE y axe
DevTools sobre los prototipos para una detección rápida de problemas
comunes (ej. contraste, texto alternativo).
○ Pruebas Manuales (Esenciales):
■ Navegación con Teclado: Se verificó que todas las funcionalidades eran
operables usando solo la tecla Tab, Enter, Espacio y teclas de flecha,
asegurando un orden lógico de tabulación y un indicador de foco visible.
■ Contraste de Color: Se re-verificaron manualmente las combinaciones de
color de texto y fondo para asegurar el cumplimiento del ratio 4.5:1 (WCAG
AA).
■ Tamaño de Texto y Zoom: Se probó la legibilidad del texto y la usabilidad
de la interfaz al aumentar el zoom del navegador al 200%.
■ Etiquetas y Nombres de Elementos: Se verificó que los enlaces, botones
y campos de formulario tuvieran etiquetas claras y descriptivas.
■ Información por Color: Se confirmó que la información no se comunica
únicamente a través del color.
■ Formularios: Se verificó la claridad de las etiquetas, instrucciones y
mensajes de error.
○ Simulación de Lector de Pantalla: Se realizó un recorrido básico con un lector
de pantalla (ej. NVDA) para verificar el orden de lectura y la correcta
vocalización de los elementos interactivos y el contenido principal.
3. Hallazgos Detallados y Recomendaciones
En general, la plataforma GAC demuestra un alto nivel de accesibilidad en su diseño.
Los principios de accesibilidad se han integrado eficazmente desde las etapas de
diseño visual y de componentes.
● Principios WCAG (POUR) Evaluados:
○ Perceptible: Cumplimiento Alto. El contraste de color es adecuado en la
mayoría de los casos, la información no se transmite solo por color, y los
elementos visuales son claros.
○ Operable: Cumplimiento Alto. La navegación por teclado es funcional en los
flujos principales, y los elementos interactivos son operables sin ratón.
○ Comprensible: Cumplimiento Alto. Las etiquetas son claras, las instrucciones

son concisas y la interfaz es predecible.
○  Robusto: Cumplimiento Alto. El diseño de los componentes y la estructura
lógica de la información permitirán una implementación robusta compatible
con tecnologías de asistencia.
●  Problemas Identificados (Severidad Baja - Recomendaciones de Mejora
Continua):
| ID        | Severidad  | Criterio   | Descripció | Recomend   | Roles      |
| --------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| Problema  |            | WCAG       | n del      | ación de   | Afectados  |
|           |            | Relevante  | Problema   | Diseño/Des |            |
arrollo
| ACC-001  | Baja  | 2.4.7 Foco  | Aunque el     | Diseño:        | Todos  |
| -------- | ----- | ----------- | ------------- | -------------- | ------ |
|          |       | Visible     | foco del      | Asegurar       |        |
|          |       |             | teclado es    | que el estilo  |        |
|          |       |             | visible, en   | del outline    |        |
|          |       |             | algunos       | de foco sea    |        |
|          |       |             | elementos     | más            |        |
|          |       |             | (ej. ciertos  | contrastado    |        |
|          |       |             | enlaces de    | o tenga        |        |
|          |       |             | texto en      | mayor          |        |
|          |       |             | tablas), el   | grosor en      |        |
|          |       |             | contorno de   | todos los      |        |
|          |       |             | foco podría   | elementos      |        |
|          |       |             | ser más       | interactivos.  |        |
|          |       |             | prominente    | Desarrollo:    |        |
|          |       |             | para          | Implementa     |        |
|          |       |             | usuarios      | r un estilo    |        |
|          |       |             | con baja      | de foco        |        |
|          |       |             | visión.       | consistente    |        |
y claro.
| ACC-002  | Baja  | 1.1.1       | Algunas      | Diseño:        | Todos  |
| -------- | ----- | ----------- | ------------ | -------------- | ------ |
|          |       | Contenido   | imágenes     | Especificar    |        |
|          |       | No Textual  | puramente    | claramente     |        |
|          |       |             | decorativas  | qué            |        |
|          |       |             | (ej.         | imágenes       |        |
|          |       |             | pequeños     | son            |        |
|          |       |             | iconos de    | decorativas    |        |
|          |       |             | fondo en     | y deben        |        |
|          |       |             | tarjetas)    | tener alt="".  |        |

|     |     |     | podrían        | Desarrollo:   |     |
| --- | --- | --- | -------------- | ------------- | --- |
|     |     |     | tener un alt   | Asegurar      |     |
|     |     |     | no vacío por   | que las       |     |
|     |     |     | defecto en     | imágenes      |     |
|     |     |     | la             | decorativas   |     |
|     |     |     | implementa     | tengan un     |     |
|     |     |     | ción si no se  | atributo alt  |     |
|     |     |     | maneja         | vacío para    |     |
|     |     |     | explícitame    | que los       |     |
|     |     |     | nte.           | lectores de   |     |
pantalla las
ignoren.
| ACC-003  | Baja  | 2.4.4        | En algunas     | Desarrollo:     | Todos  |
| -------- | ----- | ------------ | -------------- | --------------- | ------ |
|          |       | Propósito    | tablas, los    | Implementa      |        |
|          |       | de los       | enlaces de     | r aria-label o  |        |
|          |       | Enlaces (En  | "Ver Detalle"  | texto oculto    |        |
|          |       | Contexto)    | podrían        | para            |        |
|          |       |              | beneficiarse   | mejorar el      |        |
|          |       |              | de texto       | contexto de     |        |
|          |       |              | adicional      | los enlaces     |        |
|          |       |              | oculto para    | genéricos       |        |
|          |       |              | lectores de    | en tablas o     |        |
|          |       |              | pantalla que   | listas.         |        |
especifique
a qué
detalle se
refieren (ej.
"Ver detalle
del
colaborador
[Nombre del
Colaborado
r]").
4. Conclusión y Próximos Pasos
La ronda de pruebas de accesibilidad confirma que el diseño de la plataforma GAC es
sólido y cumple con los principios básicos de WCAG 2.1 Nivel AA. Este es un logro
importante que asegura una experiencia inclusiva para los colaboradores de Gentera.
Los pocos hallazgos identificados son de baja severidad y representan oportunidades

para refinar aún más la accesibilidad. Estas recomendaciones serán incorporadas en
las especificaciones finales para el equipo de desarrollo, y se enfatizará la importancia
de la accesibilidad durante la fase de implementación.
Próximos Pasos:
1. Actualización de Especificaciones de Diseño: Incorporar las recomendaciones
de accesibilidad (ej. estilos de foco, especificaciones de alt text) en las
anotaciones detalladas y la guía de estilo para el desarrollo.
2. Comunicación al Equipo de Desarrollo: Compartir este informe con el equipo de
desarrollo, destacando la importancia de implementar estas recomendaciones
durante la codificación.
3. Monitoreo Continuo: La accesibilidad es un proceso continuo. Se establecerá un
plan para realizar pruebas de accesibilidad adicionales durante el desarrollo y
después del lanzamiento, como parte del aseguramiento de la calidad.