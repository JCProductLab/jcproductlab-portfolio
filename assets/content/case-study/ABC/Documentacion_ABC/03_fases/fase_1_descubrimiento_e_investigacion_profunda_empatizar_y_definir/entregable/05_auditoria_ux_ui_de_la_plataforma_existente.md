Auditoría UX/UI de la Plataforma Existente - Rediseño Plataforma
Web Centro Médico ABC

Fecha: Marzo 2021
Autor: [Tu Nombre/Mi Rol] (Product Designer, Agencia Denumeris)
1. Objetivo General de la Auditoría

Realizar un diagnóstico completo de la usabilidad, funcionalidad, contenido y viabilidad
técnica de la plataforma digital existente del Centro Médico ABC (tal como existía a
finales de 2020 / inicios de 2021). El fin es identificar fortalezas, debilidades críticas y
establecer una línea base cuantitativa y cualitativa contra la cual medir el impacto del
futuro rediseño.

2. Plataforma Auditada

El ecosistema digital del Centro Médico ABC auditado incluyó:

●  El sitio web principal: centromedicoabc.com
●  El portal de pacientes para radiología: misaludabc.abchospital.com

3. Metodología y Proceso

La auditoría se llevó a cabo a través de cuatro componentes principales:

3.1. Evaluación Heurística y Análisis Experto Preliminar

●  Objetivos Específicos:

○

Identificar problemas de usabilidad comunes y violaciones de principios de
diseño reconocidos.

○  Evaluar la eficiencia, claridad y consistencia general desde una perspectiva

experta en UX.

○  Generar una lista inicial de problemas de "bajo colgado" y áreas de mayor

complejidad.

●  Metodología: Se utilizaron los 10 Principios de Usabilidad de Jakob Nielsen como

marco principal, junto con recorridos cognitivos y juicio experto.

●  Proceso:

○  Se definieron las áreas clave a evaluar en centromedicoabc.com (homepage,

buscador de médicos, información de servicios, agendamiento de laboratorio,
noticias) y misaludabc.abchospital.com (inicio de sesión, visualización de
resultados).

○  Se realizaron sesiones de evaluación individual, documentando problemas,

heurísticas violadas y severidad preliminar.

○  Se consolidaron los hallazgos, eliminando duplicados y acordando la severidad

final.

○  Se elaboró un informe detallado con capturas de pantalla, descripciones y

recomendaciones preliminares.

3.2. Pruebas de Usabilidad (Baseline)

●  Objetivos Específicos:

○  Medir el rendimiento de la plataforma existente en tareas clave realizadas por

usuarios reales.

○  Establecer métricas base cuantitativas (tasa de éxito, tiempo en tarea,

○

satisfacción subjetiva).
Identificar los puntos de dolor y frustración más significativos desde la
perspectiva directa del usuario.

●  Metodología: Pruebas de usabilidad moderadas con usuarios reales, utilizando el

protocolo "pensar en voz alta" y enfocándose en tareas específicas.

●  Participantes: 7 usuarios diversos (pacientes y familiares).
●  Proceso:

○  Se definieron tareas clave: encontrar un médico, agendar una cita de
laboratorio, intentar acceder y entender resultados de rayos X en
misaludabc.abchospital.com, encontrar información sobre servicios.

○  Se ejecutaron sesiones individuales, registrando el comportamiento del usuario

y sus comentarios.

○  Se administraron cuestionarios post-tarea (SEQ) y post-sesión (SUS).
○  Se analizaron los resultados cuantitativos y cualitativos para identificar

patrones de problemas.

3.3. Análisis de Contenido

●  Objetivos Específicos:

○  Evaluar la calidad, claridad, precisión, relevancia y tono del contenido textual y

visual.
Identificar contenido obsoleto, redundante, faltante o difícil de entender.

○

○  Evaluar la organización del contenido y su facilidad de búsqueda.

●  Metodología: Inventario de contenido y auditoría cualitativa contra criterios de

calidad.
●  Proceso:

○  Se creó un inventario de las principales secciones y páginas de

centromedicoabc.com y el contenido informativo en
misaludabc.abchospital.com.

○  Se revisó sistemáticamente cada pieza de contenido clave, evaluándola contra
criterios de claridad, concisión, precisión, tono apropiado para pacientes y
legibilidad.

○  Se documentaron gaps y problemas, como información sobre la navegación

entre el sitio principal y misaludabc o lenguaje demasiado técnico.

3.4. Análisis Técnico Preliminar

●  Objetivos Específicos:

○  Entender la arquitectura técnica subyacente de la plataforma existente.
○

Identificar limitaciones técnicas que podrían impactar las soluciones de diseño.

○  Descubrir oportunidades técnicas para mejorar el aprovechamiento de APIs o

migrar a tecnologías modernas.

●  Metodología: Entrevistas con expertos técnicos internos del CM ABC.
●  Proceso:

○  Se identificaron contactos clave en el equipo de TI y desarrollo.
○  Se prepararon preguntas específicas sobre infraestructura, tecnologías, bases

de datos, CMS, APIs y planes futuros.

○  Se realizaron las entrevistas para documentar capacidades, limitaciones y

consideraciones técnicas clave, como la naturaleza de misaludabc como un
sistema de proveedor externo.

4. Hallazgos Clave de la Auditoría (Problemas Priorizados)

La auditoría reveló una serie de problemas críticos que impactan negativamente la
experiencia del usuario.

4.1. Problemas de Usabilidad (Evaluación Heurística y Pruebas de Usabilidad)

●  Fragmentación de la Experiencia (Severidad: Crítica):

○  Violación Heurística: Consistencia y Estándares, Visibilidad del Estado del

Sistema.

○  Observación: La separación de centromedicoabc.com y

misaludabc.abchospital.com genera una experiencia de usuario desarticulada.
Los usuarios se confunden sobre dónde encontrar qué tipo de información o
resultados.
Impacto en Usuarios: Frustración, aumento del tiempo en tarea, necesidad de
recurrir a otros canales (teléfono).

○

●  Acceso Incompleto y Confuso a Resultados Médicos (Severidad: Crítica):
○  Violación Heurística: Coincidencia entre el sistema y el mundo real,

Reconocimiento antes que recuerdo.

○  Observación: misaludabc.abchospital.com solo muestra resultados de
radiología. Los usuarios esperan ver todos sus resultados (laboratorio,
consultas) en un solo portal, lo que lleva a frustración y llamadas al soporte.
Impacto en Usuarios: Desilusión, percepción de falta de funcionalidad,
aumento de la carga en el Call Center.

○

●  Agendamiento de Citas Limitado y Poco Intuitivo (Severidad: Mayor):

○  Violación Heurística: Flexibilidad y Eficiencia de Uso, Prevención de Errores.
○  Observación: El agendamiento en línea está restringido principalmente a
laboratorio. Los usuarios no pueden agendar citas con especialistas o
gestionar (modificar/cancelar) sus citas de forma eficiente en línea.
Impacto en Usuarios: Frustración, pérdida de tiempo, sobrecarga del Call
Center, percepción de ineficiencia.

○

●  Diseño Visual y UI Anticuados (Severidad: Mayor):

○  Violación Heurística: Estética y Diseño Minimalista.
○  Observación: La estética general del sitio web principal y del portal de

radiología se percibe como desactualizada, lo que puede afectar la credibilidad
y la confianza del usuario en la modernidad del hospital.
Impacto en Usuarios: Menor engagement, percepción de que el hospital no
invierte en su presencia digital.

○

●  Buscador de Médicos Ineficiente (Severidad: Menor a Mayor):

○  Violación Heurística: Flexibilidad y Eficiencia de Uso.
○  Observación: El buscador de médicos carece de filtros avanzados y no
siempre facilita la conexión directa con el agendamiento de citas, lo que
dificulta la tarea de encontrar y contactar a un especialista.
Impacto en Usuarios: Mayor tiempo en tarea, frustración.

○

4.2. Problemas de Contenido

●

Información Dispersa y Redundante: Contenido duplicado o inconsistente en
diferentes secciones del sitio.

●  Lenguaje Técnico: Algunas descripciones de servicios o condiciones médicas

utilizan jerga demasiado técnica para el paciente promedio.

●  Falta de Información Clave: Ausencia de información clara sobre costos,

cobertura de seguros o procesos administrativos en línea.

●  Navegación entre Sitios (Contenido): No hay contenido claro que guíe al usuario
entre centromedicoabc.com y misaludabc.abchospital.com, o que explique las
funcionalidades de cada uno.

4.3. Limitaciones Técnicas Preliminares

●

Integración de Sistemas: La separación de misaludabc.abchospital.com (basado
en Carestream MyVue) del sitio principal sugiere desafíos de integración para
unificar datos y funcionalidades.

●  CMS Actual: Posibles limitaciones del sistema de gestión de contenidos actual
para soportar un diseño y funcionalidades más dinámicas y personalizadas.
●  Deuda Técnica: Posible existencia de deuda técnica que podría ralentizar el

desarrollo o la implementación de nuevas características.

5. Métricas de Línea Base (Baseline)

Las pruebas de usabilidad nos proporcionaron las siguientes métricas de línea base
para la plataforma existente (pre-rediseño):

●  Puntuación SUS (System Usability Scale): 45/100 (Considerado "Pobre" en

términos de usabilidad).

●  Tasa de Éxito en Tareas Clave:

○  Encontrar información de contacto de un médico: 70% (con dificultad).
○  Agendar cita de laboratorio en línea: 60% (con algunos pasos confusos).
○  Acceder y entender resultados de radiología en misaludabc: 50% (algunos

usuarios se bloqueaban en el inicio de sesión o la navegación).

○  Acceder a resultados de laboratorio en línea: 0% (ya que no estaban

disponibles en el portal).

○  Agendar cita con especialista en línea: 0% (funcionalidad no disponible).

●  Tiempo en Tarea (promedio):

○  Encontrar información de contacto de un médico: 2:30 minutos.
○  Agendar cita de laboratorio: 4:15 minutos.

●  SEQ (Single Ease Question) Promedio: 3.5/7 (Indicando una facilidad de uso

"Difícil" a "Neutral" por tarea).

6. Conclusión y Recomendaciones Preliminares

La auditoría exhaustiva confirma que la plataforma digital existente del Centro Médico
ABC, aunque funcional en algunos aspectos, presenta deficiencias significativas en
usabilidad, coherencia y alcance que impactan negativamente la experiencia del
paciente. Los problemas de fragmentación, acceso limitado a resultados y
agendamiento, y una UI percibida como anticuada son los puntos de dolor más críticos.

Las métricas de línea base obtenidas (especialmente el bajo puntaje SUS y las bajas
tasas de éxito en tareas clave) proporcionan una justificación clara y cuantificable para
el rediseño propuesto.

Recomendaciones Preliminares Clave:

●  Unificación Urgente: Priorizar la creación de un portal de paciente unificado que

consolide todos los servicios y resultados.

●  Expansión de Autoservicio: Desarrollar un sistema de agendamiento integral y

robusto para todas las especialidades y la gestión completa de citas.

●  Modernización de la UI/UX: Invertir en un diseño visual moderno y una interfaz

intuitiva que refleje la excelencia del CM ABC.

●  Optimización Móvil: Asegurar una experiencia impecable en dispositivos móviles.
●  Estrategia de Contenido: Revisar y optimizar el contenido para claridad,

relevancia y facilidad de búsqueda.

●  Colaboración Técnica: Trabajar estrechamente con el equipo de TI para entender

las limitaciones y oportunidades técnicas para la implementación.

Esta auditoría es un espejo que nos ha mostrado, sin filtros, dónde estamos parados.
Es la base fáctica sobre la cual construiremos argumentos sólidos para las decisiones
de diseño y justificaremos las inversiones necesarias para transformar la experiencia
digital del Centro Médico ABC.

