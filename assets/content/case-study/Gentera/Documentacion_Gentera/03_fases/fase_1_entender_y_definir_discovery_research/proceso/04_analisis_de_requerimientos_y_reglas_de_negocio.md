Proceso de Diseño GAC: Fase 1 -
Entender y Definir (Continuación)

Actividad 4: Análisis de Requerimientos y Reglas de
Negocio

Introducción: Habiendo definido a nuestros usuarios y sus viajes, ahora nos enfocamos en
el "cerebro" de la plataforma GAC: las reglas de negocio y los requerimientos funcionales
detallados. Esta actividad es crucial para traducir las necesidades operativas y estratégicas
de Gentera en especificaciones claras que el equipo de desarrollo pueda implementar. Un
entendimiento profundo y preciso de las reglas de segmentación y trazabilidad es vital para
la automatización efectiva que busca el proyecto.

Objetivo Principal:

●  Profundizar y documentar exhaustivamente todas las reglas de negocio que rigen la

identificación de colaboradores a capacitar, la segmentación de grupos, la
asignación de recursos y la trazabilidad del progreso en la capacitación.

●  Asegurar una comprensión completa y sin ambigüedades de cómo deben funcionar

estas reglas, incluyendo todos los casos especiales y excepciones.

●  Validar estas reglas con los expertos en la materia (principalmente Carlos y otros

stakeholders relevantes) para garantizar su exactitud.

●  Traducir estas reglas en requerimientos funcionales claros y accionables para el

equipo de diseño y desarrollo.

Preparación:

1.  Reunir Toda la Documentación Relevante:

○  Brief Detallado del Proyecto GAC - Gentera.docx

(especialmente secciones 2.2 "El Problema Actual", 4.1 "Desarrollo 1", 4.2
"Desarrollo 2", y 6.1 "Funcionales").

○  Plataforma GAC.docx (para las historias de usuario y especificaciones

iniciales).

○  Brief GAC Detallado.pptx (para la lógica visual y roles).
○  Notas y hallazgos de las entrevistas con stakeholders (Carlos, Lalo, Marta,

Alberto, Líderes Operativos, Formadores).

○  Notas y diagramas de la observación contextual con Carlos y el análisis del

proceso actual.

○  Fichas de User Personas y User Journey Maps "As-Is".
○  Cualquier ejemplo de plantillas de Excel, "Concentrados" históricos, o

comunicaciones existentes que ilustren las reglas.

2.  Identificar Expertos Clave:

○  Carlos (Administrador de Capacitación): Es el principal experto en las
reglas de negocio actuales y su aplicación manual. Su participación es
indispensable.

○  Lalo (Líder de Proyecto Gentera): Para validar la alineación estratégica de
las reglas y tomar decisiones en caso de ambigüedades o necesidad de
simplificación.

○  Marta (Contexto cursos virtuales): Para reglas específicas de la

trazabilidad de cursos online.

○  Líderes Operativos y Formadores: Para validar reglas relacionadas con la
asignación de recursos y la conformación de grupos desde su perspectiva.

3.  Preparar Preguntas Específicas y Escenarios de Prueba:

○  Basado en la documentación, listar todas las reglas de negocio

mencionadas.

○  Para cada regla, formular preguntas detalladas para entender su lógica,

condiciones, excepciones y los datos que la alimentan.

○  Crear escenarios hipotéticos (casos de uso) para probar la comprensión de

las reglas y descubrir casos borde.

■  Ejemplo para "gerente multiproducto": "Si un gerente tiene un asesor
CIE en su oficina X, pero también supervisa la oficina Y donde no hay
asesores CIE, ¿se considera multiproducto para ambas oficinas o
solo para X?"

■  Ejemplo para reingresos: "Si un colaborador estuvo 6 meses y 1 día

fuera, ¿se considera reingreso y debe tomar la capacitación desde
cero? ¿Qué pasa si estuvo 5 meses y 28 días?"

■  Ejemplo para cupos: "¿Qué sucede si para un curso presencial solo

hay 4 inscritos? ¿Se cancela, se fusiona, se espera?"

4.  Agendar Sesiones de Trabajo (Workshops):

○  Planificar una o varias sesiones de trabajo dedicadas exclusivamente a

desglosar y documentar las reglas de negocio.
Invitar a los expertos clave relevantes para cada conjunto de reglas.

○

Proceso de Análisis y Documentación:

1.  Revisión Detallada de Documentación Existente:

○  Comenzar por extraer todas las reglas explícitamente mencionadas en los

briefs y otros documentos.

○  Marcar áreas donde la información es vaga, incompleta o potencialmente

contradictoria.

2.  Talleres de Elicitación de Reglas con Expertos (Principalmente Carlos):

○  Metodología: Conducir sesiones interactivas.
○  Para cada regla (o conjunto de reglas relacionadas):

■  Explicación por el Experto: Pedir a Carlos (u otro experto) que

explique la regla en sus propias palabras, cómo la aplica actualmente
y por qué existe.

■  Desglose Lógico: Identificar las condiciones (IF), las acciones

■

(THEN) y las alternativas (ELSE).
Identificación de Datos: ¿Qué datos específicos se necesitan para
evaluar la condición de la regla? (Ej. Fecha de ingreso, puesto, tipo

de evento en ADN, ubicación de oficina, etc.). ¿De dónde provienen
estos datos?

■  Manejo de Excepciones: Discutir todos los casos especiales,
excepciones o variaciones de la regla. "¿Qué pasa si...?"
■  Prioridad y Frecuencia: ¿Cuán crítica es la regla? ¿Con qué

frecuencia se aplica?

■  Casos Límite (Edge Cases): Usar los escenarios preparados para

explorar los límites de la regla.

○  Herramientas Visuales: Utilizar pizarras (físicas o virtuales como

Miro/FigJam) para dibujar diagramas de flujo, árboles de decisión o tablas
mientras se discuten las reglas. Esto ayuda a visualizar la lógica y a
identificar lagunas.
3.  Enfoque en Áreas Clave Solicitadas:

○  A. Reglas de Segmentación:

■

Identificación de Candidatos:

■  Nuevos ingresos: ¿Cómo se define "nuevo"? ¿Desde qué

fecha?

■  Cambios de puesto/promoción: ¿Qué "Eventos" de ADN

disparan la necesidad de capacitación? ¿Cómo se manejan
cambios laterales vs. promociones?

■  Reingresos: Profundizar en la regla de los "6 meses fuera".
¿Exactamente cómo se calcula? ¿Qué implicaciones tiene?
■  Faltas de cursos anteriores: ¿Hasta cuántas semanas previas

se consideran? ¿Cómo se priorizan?

■  Filtros y Exclusiones:

■  Colaboradores activos: ¿Cómo se define "activo"?
■  Áreas y puestos específicos (Ventas/Negocios, Operaciones,

Yastás, Sucursales, Cobranza): Listado exhaustivo.

■  Exclusiones (SEAS, bajas, incapacidades "IPP"): ¿Hay otras?

¿Cómo se identifican las incapacidades que excluyen?

■  Lógica "Gerente Multiproducto":

■  Condición exacta: Presencia de "asesores CIE" en su oficina.

■

¿Qué define "su" oficina si un gerente tiene varias?
Implicaciones: ¿Qué cursos diferentes toma o cómo afecta la
segmentación?
■  Agrupación y Cupos:

■  Criterios de agrupación: Puesto, subdirección, tipo de curso.

¿Hay un orden de prioridad?

■  Cupos (presenciales: min 5, max 25; online: min 10, max 15):
¿Son fijos o pueden variar? ¿Qué pasa si no se cumplen los
mínimos o se exceden los máximos?

■  Asignación de sede (Opción 1 y 2): ¿Cómo se determinan

○  B. Reglas de Trazabilidad de la Capacitación:

estas opciones? ¿Quién las define?

■  Estructura de la Ruta (12 niveles vs. posible ruta de 6 meses):

■  Detalle de cada nivel: Nombre, contenido general, tipo (online,

presencial, sombra).

■  Secuencia y prerrequisitos entre niveles.

■

"Toques con formador" (niveles 1, 4, 8, 12): ¿Qué implican
exactamente? ¿Son sesiones de evaluación, coaching,
validación?

■  Flexibilidad para el cambio a 6 meses: ¿Qué elementos de la
lógica actual son más propensos a cambiar? ¿Cómo diseñar
para esta flexibilidad?

■  Mapeo Puestos a Rutas:

■  Confirmar qué puestos siguen qué ruta o niveles específicos.
■  Excepciones (Ej. Gerente de Ventas no toma nivel básico,

Gerente Yastás solo nivel 4): Listado exhaustivo de todas las
excepciones.
■  Cálculo de Progreso y Estatus:

■  ¿Cómo se define "acreditado" para cada nivel/curso?

¿Requiere una calificación, solo asistencia, completar una
tarea?

■  ¿Cómo se calcula el "% de avance" respecto a la ruta
completa (considerando la ventana de 6 o 12 meses)?

■  ¿Qué significa "en progreso"?

■  Consumo de Bases de Datos Externas (para estatus de etapas):
■  ¿Qué tablas de Excel se usarán? ¿Qué información

contienen? ¿Con qué frecuencia se actualizan? ¿Cómo se
relacionan con la plantilla principal de ADN?

4.  Documentación Formal de las Reglas:

○  Para cada regla, documentar de forma clara y concisa:
ID de Regla: Un identificador único.

■
■  Nombre/Descripción: Un nombre descriptivo.
■  Fuente: ¿De dónde se obtuvo la regla (documento, Carlos, etc.)?
■  Lógica Detallada: Usar pseudocódigo, tablas de decisión, o

diagramas de flujo si es complejo. (Ej. SI (Puesto = 'Asesor
CIE' Y Oficina_Colaborador = Oficina_Gerente)
ENTONCES Gerente.Tipo = 'Multiproducto').

■  Datos de Entrada: Campos necesarios.
■  Resultado/Acción: Lo que sucede si la regla se cumple.
■  Excepciones/Casos Especiales:
■  Notas Adicionales: Cualquier aclaración.

○  Agrupar las reglas por funcionalidad (ej. Reglas de Identificación de

Candidatos, Reglas de Segmentación de Grupos Presenciales, Reglas de
Avance Nivel Básico, etc.).

5.  Identificación de Requerimientos Funcionales Derivados:

○  A partir de cada regla de negocio documentada, derivar los requerimientos

funcionales que la plataforma GAC necesitará para implementarla.

○  Usar el formato "Como [tipo de usuario], quiero [acción] para que

[beneficio/objetivo]" o un formato similar de historia de usuario si aún no
están completamente detalladas.

○  Ejemplo: "Como Administrador de Capacitación, quiero que el sistema

identifique automáticamente a los gerentes como 'multiproducto' si tienen al

menos un 'asesor CIE' en su oficina asignada, para asegurar que sean
convocados a los cursos correctos."

Validación:

1.  Revisión Cruzada Interna (Equipo Dacodes):

○  El Product Designer, el Líder de Proyecto y un representante técnico (Tech
Lead) deben revisar la documentación de las reglas para asegurar claridad,
consistencia y factibilidad técnica preliminar.

2.  Validación Formal con Expertos de Gentera:

○  Presentar la documentación de las reglas de negocio (y los requerimientos
funcionales derivados) a Carlos, Lalo y otros stakeholders relevantes.
○  Recorrer cada regla, usando ejemplos y escenarios para confirmar que la

interpretación y documentación son correctas.

○  Obtener una aprobación formal (puede ser un correo electrónico o una firma
en el documento) de que las reglas documentadas son precisas y completas.
Este es un hito crítico.

Salidas/Entregables:

●  Documento Detallado de Reglas de Negocio: Un repositorio centralizado de todas
las reglas de negocio que rigen la segmentación y la trazabilidad, incluyendo su
lógica, condiciones, excepciones y datos asociados. Este documento puede incluir:

○  Tablas de decisión.
○  Diagramas de flujo para reglas complejas.
○  Pseudocódigo.

●  Catálogo Actualizado y Detallado de Requerimientos Funcionales: Basado en
las reglas de negocio, describiendo lo que el sistema GAC debe hacer. Estos
requerimientos serán la base para las historias de usuario detalladas para el
desarrollo.

●  Glosario de Términos de Negocio: Para asegurar una comprensión común de la
terminología específica de Gentera relacionada con la capacitación (ej. "toque con
formador", "gerente multiproducto", "evento ADN X").

●  Registro de Decisiones: Documentar cualquier decisión tomada durante las

discusiones sobre reglas ambiguas o que necesitaron simplificación.

Conclusión de la Actividad 4:

Un análisis exhaustivo y una documentación precisa de los requerimientos y reglas de
negocio son la columna vertebral de cualquier proyecto de software exitoso, especialmente
uno que busca automatizar procesos complejos como GAC. Esta actividad asegura que
tanto Gentera como Dacodes tengan una visión clara y compartida de la lógica que
impulsará la plataforma, minimizando riesgos y sentando las bases para un diseño y
desarrollo eficientes. Con estas reglas claramente definidas, podemos pasar a diseñar cómo
los usuarios interactuarán con ellas a través de la interfaz.

