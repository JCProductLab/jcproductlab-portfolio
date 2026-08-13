Proceso Detallado: Actividad 2 (Fase 5) - Monitoreo de KPIs y
Analítica Web (Colaboración y Análisis)

Contexto Temporal: Desde el lanzamiento de la nueva plataforma
https://centromedicoabc.com/ (principios-mediados de 2022) en adelante, de forma continua.
Insumo Principal: La plataforma en producción, los KPIs definidos en el brief del proyecto (Fase
0), el conocimiento de los flujos de usuario y las Personas.
Resultado Esperado: Un entendimiento continuo y basado en datos del comportamiento del
usuario en la nueva plataforma, la medición del éxito del rediseño contra los objetivos
establecidos, y la identificación de áreas para la mejora continua y la optimización de la
experiencia del paciente.
Rol del Product Designer (Individual en Diseño, Colaborador Clave en Análisis): Aunque la
implementación técnica de las herramientas de analítica y la generación de algunos reportes
podrían recaer en equipos de Marketing o Desarrollo/TI, mi rol fue:
●  Colaborar activamente en la definición de qué se debía medir y cómo (eventos,

objetivos).

●  Ser uno de los principales consumidores y analistas de estos datos desde la

perspectiva de la experiencia del usuario.

●  Traducir los datos en insights accionables para mejorar el diseño y la funcionalidad.
●  Abogar por la toma de decisiones basada en datos para la evolución de la

plataforma.

1. Objetivos Específicos de la Actividad:
* Medir el Cumplimiento de los KPIs del Rediseño: Comparar el rendimiento de la nueva
plataforma con los objetivos establecidos en el brief (ej. aumento en citas online, reducción de
llamadas al call center por información básica, mejora en la satisfacción del usuario con la web).
* Entender el Comportamiento Real del Usuario: Descubrir cómo los pacientes navegan por el
sitio, qué secciones son las más visitadas, dónde pasan más tiempo, y dónde abandonan los
flujos.
* Evaluar la Efectividad de los Flujos Clave: Medir las tasas de conversión y finalización de tareas
importantes (ej. encontrar un médico, completar el proceso de agendamiento de una cita de
laboratorio, consultar resultados en el portal).
* Identificar Puntos de Fricción y Problemas de Usabilidad: Utilizar datos para detectar dónde
los usuarios encuentran dificultades, se confunden o abandonan tareas.
* Medir el Uso y Adopción de Nuevas Funcionalidades: Entender qué tan bien están siendo
recibidas y utilizadas las nuevas características o secciones rediseñadas.
* Obtener Insights para la Optimización Continua: Identificar oportunidades para mejorar la
interfaz, los flujos, el contenido y la experiencia general.
* Proporcionar Evidencia para Decisiones Futuras: Usar los datos para justificar futuras
inversiones en mejoras o nuevas funcionalidades.

2. Metodología y Marco (Colaborativo):
* Metodología Principal: Análisis de Datos Cuantitativos (Analítica Web) y,
complementariamente, Análisis de Comportamiento Cualitativo (Heatmaps, Grabaciones de
Sesiones).
* Marco de Trabajo: Un ciclo continuo de: Medir -> Analizar -> Aprender -> Iterar (informando la
Actividad 3: Pruebas A/B y Optimización, y la Actividad 5: Roadmap Evolutivo).
3. Herramientas Utilizadas (Implementadas por Desarrollo/Marketing, Analizadas por Mí y el
Equipo):
* Para Analítica Web General:
* Google Analytics 4 (GA4): Fundamental para rastrear el tráfico del sitio, fuentes de
adquisición, comportamiento del usuario en las páginas, eventos, conversiones (objetivos),
datos demográficos y tecnológicos de los usuarios. Su modelo basado en eventos es muy
potente.
* Para Análisis de Comportamiento del Usuario (Visual):
* Hotjar (o Clarity de Microsoft, Contentsquare, etc.): Para:
* Heatmaps (Mapas de Calor): Visualizar dónde los usuarios hacen clic, mueven el mouse y
hacen scroll en las páginas clave. Esto ayuda a entender qué elementos captan la atención y
cuáles son ignorados.
* Grabaciones de Sesiones de Usuario (Session Recordings): Ver grabaciones anónimas de
sesiones reales de usuarios interactuando con el sitio, lo que permite identificar puntos de
frustración o confusión de manera muy directa.
* Embudos de Conversión (Funnels): Visualizar dónde los usuarios abandonan los flujos clave
(ej. el proceso de agendamiento).
* Encuestas en Página (On-page Surveys) y Widgets de Feedback: Para recoger feedback
contextual de los usuarios.
* Para Dashboards y Reportes:
* Google Data Studio (Looker Studio): Para crear dashboards personalizados que combinaran
datos de Google Analytics y otras fuentes, facilitando la visualización y el seguimiento de los
KPIs clave para diferentes stakeholders.
* Hojas de Cálculo (Google Sheets/Excel): Para análisis más profundos o para combinar datos
manualmente si era necesario.
* Para Seguimiento de KPIs Específicos (Podrían requerir integración o datos de otros sistemas
del CM ABC):
* Datos del Call Center: Para medir si había una reducción en llamadas relacionadas con
información que ahora estaba fácilmente disponible en la web.
* Datos del Sistema de Citas: Para verificar el aumento en citas agendadas online.
* Encuestas de Satisfacción del Usuario (Post-Lanzamiento): (Ver Actividad 3, Fase 5) Para
medir directamente la satisfacción con la nueva plataforma.
4. Proceso Paso a Paso del Monitoreo de KPIs y Analítica Web:

* **Paso 4.1: Colaboración en la Implementación y Configuración de Herramientas de

Analítica (Justo antes y durante el lanzamiento)**
    * **Definición del Plan de Etiquetado (Tagging Plan):** Trabajé con el equipo de
desarrollo y/o marketing para definir qué interacciones clave (eventos) necesitaban ser
rastreadas en Google Analytics 4. Esto iba más allá de las vistas de página.
        * *Ejemplos de Eventos Clave (para `https://centromedicoabc.com/`):*
            * Clic en "Buscar Médico" en la homepage.
            * Uso de filtros en la página de resultados de médicos.
            * Clic en el perfil de un médico.
            * Clic en el botón "Agendar Cita" (en diferentes contextos).
            * Inicio y finalización de cada paso del flujo de agendamiento.
            * Clic en "Consulta tus resultados" o acceso a "Mi Portal Paciente ABC".
            * Descarga de documentos (ej. preparación para estudios).
            * Clic en números de teléfono o direcciones de email.
            * Interacción con el buscador general del sitio.
            * Reproducción de videos (si los había).
    * **Configuración de Objetivos/Conversiones en GA4:** Definí (o ayudé a definir) los
objetivos clave en GA4 que se alinearían con los KPIs del proyecto. Por ejemplo, "Cita
de Laboratorio Solicitada", "Perfil de Médico Visto", "Acceso al Portal de Pacientes".
    * **Implementación de Hotjar (o similar):** Colaboré para asegurar que el script de
Hotjar se instalara correctamente en todas las páginas relevantes y que se
configuraran los heatmaps y grabaciones para las páginas y flujos más importantes.
    * **Verificación de la Implementación:** Una vez implementado, realicé pruebas para
asegurar que los eventos y objetivos se estuvieran registrando correctamente en GA4
y que Hotjar estuviera capturando datos.

* **Paso 4.2: Establecimiento de un Ritmo de Monitoreo y Creación de Dashboards
(Primeras semanas post-lanzamiento)**
    * **Monitoreo Diario Inicial:** Durante las primeras semanas, revisaba los datos de
GA4 y Hotjar diariamente para detectar problemas urgentes, caídas inesperadas o
comportamientos anómalos.
    * **Definición de Dashboards en Looker Studio:** Creé (o colaboré en la creación de)
dashboards personalizados para visualizar los KPIs más importantes de manera clara y
accesible para mí y para los stakeholders clave (Product Owner, Marketing, Dirección).
Estos dashboards mostrarían tendencias a lo largo del tiempo.
        * *Ejemplo de Métricas en un Dashboard:*
            * Número de usuarios y sesiones.
            * Tasa de rebote (Bounce Rate) en páginas clave.

            * Tiempo promedio en página.
            * Fuentes de tráfico.
            * Tasa de conversión del flujo de agendamiento de citas.
            * Uso del buscador de médicos (términos más buscados).
            * Acceso al portal de pacientes.
    * **Establecimiento de un Ritmo de Revisión Regular:** Después del período inicial
intensivo, establecimos una cadencia para revisar los datos (ej. semanalmente para
métricas operativas, mensualmente para tendencias y KPIs estratégicos).

* **Paso 4.3: Análisis Continuo del Comportamiento del Usuario y KPIs (Continuo)**
    * **Análisis de Flujos de Comportamiento en GA4:** Utilicé los informes de
"Exploración de Rutas" o "Análisis de Embudo" en GA4 para entender cómo los usuarios
navegaban por el sitio, desde dónde llegaban a los flujos clave y dónde los
abandonaban.
    * **Revisión de Heatmaps de Hotjar:** Analicé los mapas de clics, movimiento y scroll
en páginas importantes (homepage, perfiles de médico, páginas de servicio, inicio del
portal) para ver qué elementos atraían la atención, cuáles eran ignorados, y si los
usuarios llegaban a ver el contenido importante "below the fold".
    * **Visualización de Grabaciones de Sesiones de Hotjar:** Dediqué tiempo a ver
grabaciones de sesiones anónimas, especialmente en flujos donde GA4 mostraba altas
tasas de abandono. Esto me dio insights cualitativos muy valiosos sobre los puntos
exactos de frustración o confusión. Ver a un usuario real luchar con una interfaz es
increíblemente revelador.
    * **Seguimiento de Tasas de Conversión:** Monitoreé de cerca las tasas de
conversión de los objetivos definidos en GA4 (ej. cuántos usuarios que iniciaron el flujo
de agendamiento de laboratorio lo completaron).
    * **Medición del Uso de Funcionalidades:** A través de los eventos en GA4, pude ver
qué funcionalidades eran las más utilizadas (ej. el buscador de médicos vs. la
navegación por el menú de servicios) y cuáles quizás no estaban siendo descubiertas o
adoptadas.
    * **Análisis de Búsquedas Internas:** Revisé los términos que los usuarios escribían
en el buscador interno del sitio. Esto podía revelar necesidades de información no
cubiertas, problemas de encontrabilidad o la terminología que usaban los pacientes.

* **Paso 4.4: Identificación de Puntos de Fricción, Problemas de Usabilidad y
Oportunidades de Mejora (Continuo)**
    * **Conexión de Datos Cuantitativos y Cualitativos:** Crucé la información de GA4

(ej. alta tasa de abandono en el paso 2 del agendamiento) con los hallazgos de Hotjar
(ej. grabaciones mostrando que los usuarios se confunden con el selector de fecha en
ese paso).
    * **Formulación de Hipótesis:** Basándome en los datos, formulé hipótesis sobre por
qué ciertos problemas estaban ocurriendo (ej. "Los usuarios abandonan el
agendamiento en el paso 2 porque el calendario es difícil de usar en móviles").
    * **Priorización de Áreas de Enfoque:** Identifiqué las páginas o flujos con el peor
rendimiento o que representaban las mayores oportunidades de mejora para la
experiencia del paciente y los objetivos del negocio.

* **Paso 4.5: Comunicación de Hallazgos, Insights y Recomendaciones
(Regularmente)**
    * **Informes Periódicos:** Preparé resúmenes (podían ser presentaciones cortas o
informes en Google Docs) con los principales hallazgos de la analítica, los insights clave
y recomendaciones accionables para el Product Owner y otros stakeholders.
    * **Visualización de Datos:** Usé gráficos y capturas de pantalla de los dashboards y
herramientas para hacer los hallazgos más comprensibles.
    * **Sesiones de Revisión de Datos:** Participé (o lideré) reuniones periódicas con el
equipo para discutir los datos, interpretar los resultados y decidir los próximos pasos.
    * **Impacto en el Roadmap:** Los insights de la analítica web alimentaron
directamente el backlog de producto y el roadmap evolutivo (Actividad 5, Fase 5),
sugiriendo áreas para pruebas A/B, rediseños menores o incluso nuevas
funcionalidades.

6. Resultado de la Actividad 2 (Monitoreo de KPIs y Analítica Web):

Mi participación activa en esta actividad, aunque colaborativa, fue esencial para:

●  Medición Objetiva del Éxito: Pudimos cuantificar si el rediseño de

https://centromedicoabc.com/ estaba logrando los KPIs establecidos (ej. si las citas
online aumentaron, si la gente encontraba más fácil a los médicos).

●  Entendimiento Profundo del Usuario Post-Lanzamiento: Obtuvimos una visión

●

clara de cómo los pacientes reales estaban usando (o no usando) la nueva
plataforma.
Identificación Basada en Datos de Problemas de UX: Descubrimos puntos de
fricción y áreas de confusión que quizás no surgieron en las pruebas de usabilidad
pre-lanzamiento, o que se manifestaron a mayor escala.

●  Priorización Informada de Mejoras: Los datos nos ayudaron a enfocar los

esfuerzos de optimización en las áreas que tendrían mayor impacto.

●  Cultura de Mejora Continua: Establecimos un ciclo de feedback basado en datos
que permitiría a la plataforma evolucionar y mejorar constantemente para servir
mejor a los pacientes del Centro Médico ABC.

●  Justificación para Futuras Inversiones: Los datos podían demostrar el ROI del

rediseño y justificar futuras mejoras.

El monitoreo de KPIs y la analítica web no son solo para "ver números", sino para
entender historias sobre los usuarios y encontrar maneras de hacer su experiencia
mejor. Para una plataforma como https://centromedicoabc.com/, que maneja
información y servicios críticos para la salud, este monitoreo continuo es vital.

