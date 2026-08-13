Documentación del Feedback y Revisiones - Plataforma GAC

Versión: 1.0
Autor: [Tu Nombre/Rol], Diseñador de Producto, Dacodes
1. Introducción

Este documento resume el feedback clave recibido durante las sesiones de validación
de los wireframes de media fidelidad para la plataforma de Gestión Automatizada de la
Capacitación (GAC), así como las revisiones específicas que se realizaron en respuesta
a dicho feedback. El objetivo es asegurar que los diseños incorporen las perspectivas
de los stakeholders y usuarios, y que estén alineados con los objetivos del proyecto
antes de avanzar a la creación de prototipos interactivos y el diseño de interfaz de
usuario (UI) de alta fidelidad.

2. Proceso de Validación del Wireframe

La validación de los wireframes se llevó a cabo a través de:

●  Revisión Interna del Equipo Dacodes: Sesiones con el Líder Técnico,

Desarrolladores Frontend/Backend y el Líder de Proyecto para evaluar la claridad,
consistencia, usabilidad y factibilidad técnica de los wireframes.

●  Validación con Stakeholders Clave de Gentera: Una reunión dedicada con Lalo

(Líder de Proyecto), Carlos (Administrador de Capacitación) y otros SMEs
relevantes para sus respectivos flujos, donde se presentaron los wireframes y se
recogió feedback.

●  (Opcional, si se realizó): Pruebas de Usabilidad Informales: Demostraciones
rápidas a algunos usuarios finales para observar su interacción y recoger
impresiones iniciales.

3. Temas Generales de Feedback y Observaciones Recurrentes

●  Claridad y Simplicidad Confirmadas: Los stakeholders y el equipo interno

validaron que los wireframes mantienen la simplicidad y claridad buscadas, lo cual
fue muy bien recibido.

●  Énfasis en el "Por Qué": Se reiteró la necesidad de que el sistema explique de

forma sutil el "por qué" de ciertas decisiones automáticas (ej. por qué un
colaborador es "Gerente Multiproducto").

●  Manejo de Excepciones: La flexibilidad para que Carlos (Administrador) pueda

intervenir y ajustar los procesos automatizados en casos excepcionales es crucial.

●  Consistencia en la Terminología: Se reforzó la importancia de mantener la

consistencia en el etiquetado en todas las pantallas.

●  Optimización Móvil: Para los roles de Colaborador y Líder, se enfatizó la
necesidad de asegurar que las vistas sean completamente responsivas y
funcionales en dispositivos móviles.

4. Feedback Específico y Revisiones Realizadas

4.1. Wireframes para Carlos, el Coordinador Detallista (Administrador de
Capacitación)

●  Flujo: Cargar y Procesar Plantilla de Capacitación Semanal

○  Feedback Recibido:

■  Carlos: "Sería ideal si el sistema pudiera agrupar los errores por tipo en el
reporte de inconsistencias, o incluso sugerir la corrección más probable."
■  Desarrollo: "Necesitamos claridad sobre cómo se manejan las correcciones

manuales de inconsistencias: ¿se hacen directamente en GAC o se
requiere re-subir la plantilla?"

○  Revisiones Realizadas:

■  Se añadió una anotación al wireframe de "Reporte Detallado de

Errores/Inconsistencias" para incluir la agrupación de errores por tipo y un
campo de "Sugerencia de Corrección".

■  Se especificó que, para errores menores, se buscará una interfaz de

corrección directa en GAC; para errores masivos o de origen, se requerirá
re-subir la plantilla, con un mensaje claro al usuario.

■  Se añadió un "Historial de Cargas" para permitir a Carlos revisar versiones

anteriores.

●  Flujo: Segmentar y Ajustar Grupos de Capacitación

○  Feedback Recibido:

■  Carlos: "Me gustaría ver de forma más clara en la tabla de participantes por
qué un gerente es 'multiproducto' o por qué un reingreso tiene una ruta
específica."

■  Lalo: "Asegurar que la interfaz de 'arrastrar y soltar' sea realmente fluida y

no genere frustración si hay muchos participantes."

○  Revisiones Realizadas:

■  Se añadió una anotación al wireframe "Detalle y Ajuste de Grupo" para

incluir un icono o tooltip junto al nombre del participante que, al pasar el
cursor, explique la regla de negocio aplicada (ej. "Gerente Multiproducto:
Asesor CIE en oficina").

■  Se enfatizó en las anotaciones la necesidad de una implementación técnica

robusta para la función de arrastrar y soltar, con feedback visual claro
durante la interacción.

■  Se añadió un filtro rápido en la tabla de participantes para buscar por

nombre o nómina.

●  Flujo: Enviar Convocatorias y Notificaciones Masivas

○  Feedback Recibido:

■  Carlos: "La previsualización es excelente. ¿Podríamos tener un contador de

cuántos correos/mensajes se van a enviar antes de confirmar?"

■  Desarrollo: "Confirmar la fuente de los números de WhatsApp para el envío

masivo."

○  Revisiones Realizadas:

■  Se añadió una anotación al wireframe "Comunicaciones - Enviar

Convocatorias" para incluir contadores de "Destinatarios (Gerentes)" y
"Destinatarios (Colaboradores)" antes del botón "Enviar Todas las
Convocatorias".

■  Se reiteró la necesidad de definir la fuente de los números de WhatsApp en
el documento de requerimientos técnicos, ya que es una funcionalidad
nueva.

4.2. Wireframes para Ana, la Colaboradora Entusiasta (Colaborador en
Capacitación)

●  Flujo: Consultar Ruta de Capacitación y Progreso

○  Feedback Recibido:

■  Usuarios de prueba (informales): "El mapa visual es muy bueno, pero me

gustaría saber qué significan los colores de los nodos."

■  Lalo: "Asegurar que la terminología de los niveles (Básico, Intermedio, etc.)

sea consistente con la usada internamente en Gentera."

○  Revisiones Realizadas:

■  Se añadió una leyenda al wireframe "Dashboard de Colaborador (Mi Ruta
de Capacitación)" explicando el significado de los colores/iconos de los
nodos (ej. Verde: Completado, Amarillo: En Progreso, Gris: Pendiente).
■  Se verificó la consistencia de la terminología de los niveles de capacitación

con el glosario de términos de negocio de Gentera.

4.3. Wireframes para David, el Líder Comprometido (Gerente de Oficina)

●  Flujo: Visualizar Avance de Equipo y Generar Reporte

○  Feedback Recibido:

■  David: "El semáforo de estatus es muy útil. ¿Podríamos tener una opción

para enviar un recordatorio rápido a los que están 'en riesgo' directamente
desde esta vista?"

■  Desarrollo: "La exportación a Excel debe ser limpia y con todos los datos

relevantes para análisis externos."

○  Revisiones Realizadas:

■  Se añadió una anotación al wireframe "Dashboard de Líder (Mi Equipo)"
para incluir un icono de "Enviar Recordatorio" (ej. vía Teams/WhatsApp)
junto a los colaboradores con estatus "Retrasado" o "En Riesgo".

■  Se especificó que la exportación a Excel debe incluir todos los campos de
datos relevantes para el análisis posterior, manteniendo la estructura de la
tabla visible en la interfaz.

4.4. Wireframes para Elena, la Formadora Dedicada (Formadora)

●  Flujo: Acceder a Agenda y Registrar Asistencia

○  Feedback Recibido:

■  Elena: "La opción de registrar asistencia directamente es genial. ¿Podría
haber un campo de notas rápidas para cada participante, además del
feedback general del grupo?"

■  Desarrollo: "Necesitamos que el registro de asistencia sea robusto para
manejar interrupciones y que la información se guarde correctamente."

○  Revisiones Realizadas:

■  Se añadió una anotación al wireframe "Registrar Asistencia para Grupo"
para incluir un pequeño campo de texto "Notas del Participante" junto a
cada fila, además del campo de "Notas / Feedback General del Grupo".
■  Se enfatizó en las anotaciones la necesidad de un mecanismo de guardado
automático o un feedback claro de guardado para el registro de asistencia,
y validaciones para asegurar que todos los participantes tengan un estatus.

5. Conclusión

Las revisiones realizadas en los wireframes de media fidelidad han fortalecido la
propuesta de diseño, abordando las preocupaciones y sugerencias de los stakeholders
y del equipo interno. La alineación en esta etapa es sólida, y los wireframes están ahora
listos para servir como la base para la creación de prototipos interactivos y el diseño de
interfaz de usuario de alta fidelidad. Este proceso iterativo asegura que la plataforma
GAC se construya sobre una base funcional y de interacción bien pensada y validada.

