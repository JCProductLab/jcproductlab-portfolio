Análisis de Causa Raíz de Problemas de Usabilidad: Prototipo
MVP B2C AsDeporte

Fecha de Análisis: 15 de Mayo de 2025

Este documento profundiza en las causas raíz de los problemas de usabilidad más
significativos identificados durante las pruebas con el prototipo del MVP B2C de
AsDeporte. El análisis se basa en la "Lista de Problemas de Usabilidad (15 Usuarios)" y
hace referencia a los entregables de diseño de las Fases 1 y 2.

Problema Principal 1: Descubrimiento y Evaluación de Eventos

●

ID Problema: PU-01
○  Problema: Filtros avanzados para nichos deportivos (Trail, MTB, Triatlón,

OCR) aún con oportunidad de mayor granularidad.

○  Frecuencia: 5/15 (Específico del Perfil Frecuente/Plus y nichos)
○  Severidad Estimada: Media
○  Análisis de Causa Raíz:

■  Diseño de Interacción (IxD) / Arquitectura de la Información (AI):

Aunque el MVP incluyó filtros de disciplina y sub-disciplina básica ("01
Inventario de Contenido y Funcionalidad.docx", "03 Estructura de
Navegación.docx"), la granularidad necesaria para ciertos nichos (ej. tipo
de terreno para trail, tipo específico de MTB como XC, reglas de drafting
para triatlón) no se especificó con suficiente detalle en el alcance inicial del
MVP ("03 Definición del Alcance del MVP.docx"). La "Pantalla de Filtros
Avanzados de Eventos" diseñada en los wireframes ("03 Nuevas Pantallas
a Diseñar (Wireframing).docx") contemplaba los filtros esenciales, pero la
lógica para estos sub-filtros hiper-específicos no fue priorizada para el
primer lanzamiento, probablemente debido a una combinación de esfuerzo
técnico percibido y la necesidad de validar primero los filtros más
generales.

■  Contenido (Datos del Evento): La efectividad de estos filtros también

depende de que los datos de los eventos estén correctamente etiquetados
con esta información detallada, lo cual es un desafío de contenido y de la
futura plataforma B2B para organizadores.

■  Conclusión Causa Raíz: El alcance del MVP para los filtros, aunque una
mejora sustancial, no profundizó lo suficiente en las sub-necesidades de
cada nicho deportivo avanzado, priorizando una base funcional más
amplia.
ID Problema: PU-07
○  Problema: Necesidad de información sobre tipo de terreno/dificultad para

●

caminatas y principiantes no siempre cubierta.

○  Frecuencia: 6/15 (Fuerte en Perfil Principiante y Ocasional)
○  Severidad Estimada: Media
○  Análisis de Causa Raíz:

■  Arquitectura de la Información (AI) / Diseño de Contenido (UX Writing):
Si bien la "Página de Detalle de Evento" ("01 Inventario de Contenido y
Funcionalidad.docx") se diseñó para ser completa, la especificación de
campos como "tipo de terreno" o un "nivel de dificultad estandarizado" para
eventos recreativos/principiantes no fue un requisito explícito en el
inventario de contenido para todos los eventos. La "Guía para
Principiantes" (PU-11) aborda aspectos generales, pero la información
específica del evento podría faltar.

■  Diseño Visual (UI): La forma de presentar esta información en la
"Página/Pantalla de Detalle de Evento" ("01 Pantallas a Diseñar
(Wireframing).docx") podría no tener un espacio dedicado o
suficientemente prominente para estos datos si no se consideran campos
estándar.

■  Conclusión Causa Raíz: Falta de estandarización y priorización de

campos de información específicos para el perfil principiante/ocasional en
la definición del contenido del detalle del evento.

●

ID Problema: PU-08
○  Problema: Micro-fricción en el descubrimiento inicial del ícono de filtros en la

app móvil para usuarios menos tecnológicos.

○  Frecuencia: 4/15 (Concentrado en Perfiles Principiante/Ocasional menos

tecnológicos)

○  Severidad Estimada: Baja
○  Análisis de Causa Raíz:

■  Diseño Visual (UI) / Diseño de Interacción (IxD): Aunque el ícono de

filtros estaba presente en la "Página/Pantalla de Listado de Eventos" según
los wireframes ("03 Nuevas Pantallas a Diseñar (Wireframing).docx") y los
patrones de interacción ("01 Definición de Patrones de Interacción.docx"),
su prominencia visual (tamaño, contraste, posible falta de etiqueta de texto
junto al ícono en la app) podría no ser suficiente para usuarios menos
familiarizados con convenciones de UI móviles estándar. La decisión de no
usar una barra lateral visible permanentemente para filtros en móvil (común
en web) puede contribuir.

■  UX Writing: La ausencia de una etiqueta de texto como "Filtrar" junto al
ícono en la app (asumiendo que solo era un ícono) podría ser un factor.
■  Conclusión Causa Raíz: Posible combinación de una affordance visual no
óptima del ícono de filtro para ciertos perfiles y la falta de una etiqueta
textual explícita en la interfaz móvil.

●

ID Problema: PU-11
○  Problema: Guías para principiantes y glosario de términos son altamente

valorados y podrían ser más proactivos/expandirse.
○  Frecuencia: 5/15 (Todos los del Perfil Principiante)
○  Severidad Estimada: Media (como oportunidad perdida)
○  Análisis de Causa Raíz:

■  Arquitectura de la Información (AI) / Diseño de Contenido (UX Writing):
El MVP incluyó una "Página/Pantalla de Guías para Principiantes" y la idea
de explicaciones en el detalle del evento ("01 Ideas de Solución.docx", "01
Inventario de Contenido y Funcionalidad.docx"). Sin embargo, el acceso a
estas guías podría no ser suficientemente proactivo o visible desde los
puntos donde el principiante más lo necesita (ej. al ver un evento por
primera vez, durante la inscripción). El contenido en sí es valorado, pero su
integración y alcance podrían mejorar.

■  Diseño de Interacción (IxD): No se definieron patrones de interacción

específicos para presentar estas ayudas de forma contextual y proactiva
(ej. tooltips automáticos, enlaces "aprende más" en puntos clave).

■  Conclusión Causa Raíz: El contenido de ayuda existe pero su integración
en el flujo del usuario y su visibilidad podrían no ser óptimas para ofrecer
apoyo en el momento justo de necesidad.

●

ID Problema: PU-13
○  Problema: Claridad en la presentación de múltiples distancias/costos en la

página de detalle del evento.

○  Frecuencia: 3/15 (Principalmente Perfil Principiante y algunos Ocasionales)
○  Severidad Estimada: Baja
○  Análisis de Causa Raíz:

■  Diseño Visual (UI) / Arquitectura de la Información (AI): La

"Página/Pantalla de Detalle de Evento" ("01 Pantallas a Diseñar
(Wireframing).docx") debe listar "Categorías disponibles y distancias" y
"Costos de inscripción por categoría/distancia". Si un evento tiene muchas
opciones, la jerarquía visual y la forma de agrupar/presentar esta
información podrían no ser suficientemente escaneables para que los
usuarios identifiquen rápidamente la combinación que les interesa.

■  Diseño de Interacción (IxD): Quizás faltan interacciones como

expandir/colapsar secciones de costos o una forma más interactiva de
seleccionar una distancia para ver su precio específico si la lista es muy
larga.

■  Conclusión Causa Raíz: La presentación de una lista potencialmente

larga y compleja de distancias y costos podría carecer de la jerarquía visual
o interactividad necesaria para una fácil digestión por parte de algunos

usuarios.

Problema Principal 2: Proceso de Inscripción y Pago

●

ID Problema: PU-03
○  Problema: Solicitud de CURP en inscripción genera dudas/desconfianza en

perfiles Principiante y Ocasional.

○  Frecuencia: 7/15 (Fuerte en Perfiles Principiante y Ocasional)
○  Severidad Estimada: Baja-Media
○  Análisis de Causa Raíz:

■  Diseño de Contenido (UX Writing) / Diseño de Interacción (IxD): El

formulario de inscripción ("Pantalla/Página de Inscripción - Paso 1" en "01
Pantallas a Diseñar (Wireframing).docx") incluye este campo. La razón de
solicitar el CURP no se explica en la interfaz. Los usuarios, especialmente
aquellos más sensibles a la privacidad o que no ven la conexión directa con
una carrera, perciben esto como una solicitud de datos excesiva o
innecesaria.

■  Requisitos del Negocio/Producto: Es posible que el CURP sea un

requisito de negocio o legal para ciertos tipos de eventos o para la gestión
interna de AsDeporte, pero esta necesidad no se comunica al usuario.

■  Conclusión Causa Raíz: Falta de transparencia y justificación en la

interfaz sobre por qué se solicita un dato personal sensible como el CURP,
combinado con una posible falta de evaluación sobre si es estrictamente
necesario para todos los usuarios/eventos en el MVP.

●

ID Problema: PU-04
○  Problema: Preferencia/Necesidad de opciones de pago offline (Oxxo) sigue

siendo relevante para ciertos perfiles.

○  Frecuencia: 8/15 (Muy fuerte en Perfil Principiante, relevante para Ocasionales

mayores)

○  Severidad Estimada: Baja (Foco en visibilidad/comunicación de la opción

existente)

○  Análisis de Causa Raíz:

■  Diseño Visual (UI) / Diseño de Interacción (IxD): Aunque la opción de

Oxxo se incluyó en las ideas ("01 Ideas de Solución.docx") y se contempló
en el "Proceso de Inscripción y Pago" ("01 Inventario de Contenido y
Funcionalidad.docx"), su prominencia visual o la claridad en la
"Pantalla/Página de Inscripción - Paso 3: Pago Seguro" ("01 Pantallas a
Diseñar (Wireframing).docx") podría no ser suficiente para que todos los
usuarios que la prefieren la identifiquen fácilmente como una alternativa
viable a la tarjeta.

■  UX Writing: El texto asociado a la opción Oxxo debe ser claro y

tranquilizador sobre el proceso.

■  Conclusión Causa Raíz: La opción existe, pero su presentación y

comunicación en la interfaz de selección de método de pago podría no
estar destacando lo suficiente para los usuarios que la buscan activamente
o que desconfían de los pagos con tarjeta.

Problema Principal 3: Experiencia Asdeporte Plus

●

ID Problema: PU-09
○  Problema: Necesidad de máxima claridad en las condiciones de uso del Wallet

Asdeporte Plus.

○  Frecuencia: 3/15 (Específico del Perfil Frecuente/Plus)
○  Severidad Estimada: Baja-Media
○  Análisis de Causa Raíz:

■  Diseño de Contenido (UX Writing) / Arquitectura de la Información (AI):

El "Hub de Beneficios Asdeporte Plus" ("01 Pantallas a Diseñar
(Wireframing).docx") fue diseñado para listar beneficios y dar acceso al
Wallet. Sin embargo, las "condiciones de uso" específicas del crédito (en
qué eventos aplica, vigencia, cómo se redime exactamente en el flujo de
pago) podrían no estar suficientemente detalladas o ser fácilmente
accesibles desde esta pantalla o durante el proceso de pago. El documento
de "Diseño de Contenido (UX Writing)" ("01 Diseño de Contenido (UX
Writing).docx") debería haber especificado microcopy claro para estas
condiciones.

■  Diseño de Interacción (IxD): Podría faltar un enlace claro desde la
visualización del saldo del Wallet a una sección de "Términos y
Condiciones del Wallet" o FAQs específicas.

■  Conclusión Causa Raíz: Falta de detalle y fácil acceso a la información

sobre las reglas y condiciones de uso del crédito en el Wallet, un
componente clave del valor de Asdeporte Plus para cancelaciones.

Este análisis de causa raíz debería ayudar a enfocar los esfuerzos de iteración del
diseño en los aspectos específicos (AI, IxD, UI, UX Writing) que están contribuyendo a
los problemas de usabilidad observados.

