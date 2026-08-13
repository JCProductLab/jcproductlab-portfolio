# Fase 5: Post-Lanzamiento y Mejora Continua

## Actividad 1: actividad_01_monitorizacion_de_metricas_de_exito

### Parte 1: ASEGURAMIENTO DE LA INFRAESTRUCTURA DE DATOS: EL CIMIENTO DE LA MEDICIÓN

#### El diseño no termina en el despliegue: la transición hacia la evidencia

El momento en que el código del MVP B2C de AsDeporte tocó el entorno de producción, el silencio en la sala de guerra no fue de alivio, sino de una tensión contenida. Habíamos pasado meses proyectando, iterando y puliendo cada píxel de la interfaz, pero en el instante en que abrimos las puertas al tráfico real, mi rol como diseñador cambió radicalmente. Ya no se trataba de lo que yo creía que funcionaría, sino de lo que los usuarios estaban haciendo realmente. La transición de la Fase 4 a esta etapa de monitorización no fue un simple paso administrativo; fue el momento en que el diseño dejó de ser una hipótesis visual para convertirse en un organismo vivo que debíamos aprender a leer.

Mi razonamiento en este punto de inflexión fue pragmático: si no podíamos medir el impacto de las decisiones que tomamos en las fases de estrategia y prototipado, todo el trabajo previo carecería de fundamento para la evolución del producto. El diseño, en mi visión, no termina en la entrega de un UI Kit o un flujo de Figma; termina en la capacidad de auditar su efectividad en el mundo real. Tenía que garantizar que el "sistema nervioso" de la plataforma —su infraestructura de datos— estuviera capturando cada interacción crítica sin ruido. Sin esta "fuente de verdad" cuantitativa, cualquier iteración futura en la Fase 5 de Mejora Continua sería como disparar a ciegas en una habitación oscura.

#### La coordinación con ingeniería como salvaguarda técnica

Antes de que el primer atleta real intentara inscribirse en una carrera a través de la nueva plataforma, mi primera maniobra fue blindar la implementación técnica. Me senté con el equipo de Ingeniería y QA para realizar una auditoría exhaustiva, asegurándome de que el código de seguimiento no hubiera quedado relegado a un segundo plano durante las prisas del despliegue. No me conformé con un "ya está instalado"; necesitaba pruebas de que las plataformas de analítica de producto, como Google Analytics 4 y Amplitude, estuvieran correctamente inyectadas y operativas.

Verifiqué personalmente que los SDKs (Software Development Kits) estuvieran cargando en el orden correcto para evitar que la latencia de red fragmentara las sesiones de los usuarios. Un problema recurrente en proyectos de esta escala es la pérdida de la persistencia de los IDs de usuario cuando navegan entre la web y la aplicación móvil. Me aseguré de que la identidad del usuario se mantuviera íntegra a través de los diferentes puntos de contacto del ecosistema de AsDeporte. Si un usuario comenzaba a explorar un evento en su teléfono y terminaba la inscripción en su laptop, necesitábamos saber que era la misma persona. Esta coherencia técnica es lo que permite que el diseño basado en datos sea realmente humano y no una simple acumulación de eventos inconexos.

#### El ecosistema de tres capas: GA4, Amplitude y Hotjar

Para obtener una visión de 360 grados del comportamiento del usuario, articulé un ecosistema de herramientas que cubriera diferentes niveles de abstracción. Mi estrategia no era la redundancia por vanidad, sino la triangulación de datos para eliminar puntos ciegos.

*   **Google Analytics 4 (GA4):** Lo utilicé como nuestra brújula para el tráfico macro. Necesitaba entender de dónde venían los atletas, qué dispositivos usaban y cuál era el volumen general de tráfico en las páginas de aterrizaje de los eventos. GA4 es imbatible para medir el alcance, pero se queda corto cuando necesitas entender la psicología del flujo.
*   **Amplitude y Mixpanel:** Estas fueron mis herramientas de precisión para el análisis de comportamiento granular. Aquí es donde configuramos el seguimiento de eventos específicos que definimos desde la Fase 1. Mientras GA4 me decía que 1,000 personas visitaron la página, Amplitude me revelaba que solo 200 interactuaron con el selector de tallas de la camiseta oficial, un dato vital para entender la fricción en el proceso de inscripción.
*   **Hotjar:** Esta fue la capa visual indispensable. Los mapas de calor y las grabaciones de sesión me permitieron cruzar el "qué" hacen los usuarios con el "cómo" lo hacen. Si los datos cuantitativos mostraban una caída en el formulario de pago, Hotjar me permitía ver si los usuarios estaban intentando hacer clic en un elemento que no era interactivo o si el teclado del móvil estaba tapando el botón de "Confirmar".

Esta combinación me permitió blindar el análisis: los números me daban la magnitud del problema, y las grabaciones me daban la causa raíz.

#### La inspección forense del Data Layer y Google Tag Manager

Una de las tareas más críticas y menos visibles que ejecuté fue la auditoría del contenedor de Google Tag Manager (GTM). Como diseñador senior, entiendo que una arquitectura de etiquetas mal implementada puede degradar el rendimiento de carga (LCP) de la plataforma, afectando directamente la experiencia del usuario y el SEO. Realicé una inspección forense para validar que los *triggers* y *tags* de eventos personalizados se dispararan solo cuando fuera estrictamente necesario.

Trabajé en la configuración de las variables de la capa de datos (Data Layer). Mi objetivo era capturar metadatos específicos que son el corazón del negocio de AsDeporte: el tipo de deporte (triatlón, running, ciclismo), el rango de precio de la inscripción y si el usuario ya era un miembro recurrente. Al estructurar esta información en el Data Layer, nos aseguramos de que la arquitectura de medición fuera escalable. Esto significa que si en el futuro marketing decide lanzar una nueva campaña o producto, no dependerán de que ingeniería cambie el código fuente para medir el éxito; la infraestructura ya está preparada para "leer" esos nuevos datos de forma automática.

#### Blindando el embudo de conversión: el flujo de inscripción y pago

El éxito del MVP B2C se juega, en última instancia, en la capacidad del usuario para completar una inscripción sin fricciones. Por ello, mapeé con un rigor obsesivo los eventos clave de este flujo. No nos limitamos a rastrear el clic inicial; descompuse el proceso en hitos críticos: inicio de inscripción, selección de categoría, carga de documentos (si aplicaba), envío del formulario de pago e inscripción completada.

Puse especial atención en el evento de "inscripción completada". En el pasado, muchas plataformas deportivas sufrían de "falsos positivos", donde un usuario llegaba a la página de agradecimiento pero el pago no se había procesado realmente por un error en la pasarela. Me aseguré de que este evento solo se disparara tras recibir un *webhook* de confirmación exitosa de la pasarela de pago. Este nivel de detalle es lo que separa un reporte de vanidad de una herramienta de inteligencia de negocio. Si el dashboard decía que teníamos 50 nuevas inscripciones, yo tenía que estar 100% seguro de que había 50 transacciones reales en el banco.

#### Midiendo el pulso de la Tribu y AsDeporte Plus

Más allá de las transacciones, el MVP incluía apuestas estratégicas de diseño: la sección 'Tribu' y los beneficios 'Plus'. Estas funcionalidades fueron diseñadas para fomentar la comunidad y la retención, pero su éxito no era garantizado. Configuré eventos específicos para medir no solo si los usuarios entraban a estas secciones, sino la profundidad de su interacción.

*   **En la Tribu:** Rastreé el scroll en el feed de comunidad y los clics en los perfiles de otros atletas. Necesitaba saber si la gente realmente estaba buscando conexión o si la funcionalidad pasaba desapercibida.
*   **En AsDeporte Plus:** Medí el uso de los beneficios exclusivos. ¿Estaban los usuarios utilizando el acceso prioritario o los descuentos en tiendas aliadas?

Este rastreo era vital para validar si estas propuestas de valor, que defendimos con tanto ahínco en las fases de ideación, realmente resonaban con el usuario. Si los datos mostraban un bajo *engagement*, mi responsabilidad no era ignorarlo, sino preparar el terreno para un rediseño urgente basado en la falta de interés detectada.

#### La prueba de fuego: validación de integridad y alineación con KPIs

Para cerrar este ciclo de aseguramiento de la infraestructura, realicé un proceso de validación de integridad. No podíamos confiar ciegamente en lo que decían las consolas de analítica sin contrastarlo con la realidad. Ejecuté una serie de pruebas de usuario simuladas en el entorno de producción, realizando inscripciones reales (con códigos de prueba) y navegando por cada rincón de la 'Tribu'.

Mientras realizaba estas acciones, mantenía abiertas las vistas de "tiempo real" en GA4 y Amplitude. Si yo hacía clic en "Ver beneficios Plus", el evento debía aparecer en la consola en menos de 5 segundos con todos sus metadatos correctos. Si no aparecía, volvíamos al código. Esta auditoría previa al análisis es la única forma de garantizar que las decisiones estratégicas que tomaríamos después no se basaran en ruido o datos corruptos. Finalmente, vinculé cada uno de estos eventos técnicos con el "Documento de Métricas de Éxito del MVP B2C Validado" que establecimos en la Fase 1, cerrando así el círculo entre la visión de negocio y la realidad técnica.

> La infraestructura de datos es, en el fondo, la voz del usuario traducida a código. Como diseñadores, tenemos la responsabilidad ética de asegurar que esa voz se escuche con claridad y sin distorsiones. Una mala configuración en este paso invalidaría meses de investigación previa y nos condenaría a tomar decisiones basadas en espejismos.

**Próximo paso:**

Una vez que tuve la certeza absoluta de que cada clic y cada abandono se estaban registrando con precisión quirúrgica en nuestras bases de datos, me enfrenté al siguiente gran dilema: ¿cómo transformar esa avalancha de datos crudos en algo que los stakeholders pudieran entender y utilizar para tomar decisiones? La tubería estaba conectada, pero el agua aún no era potable. El desafío ahora era diseñar la **VISUALIZACIÓN ESTRATÉGICA: CONSTRUCCIÓN DE DASHBOARDS DE KPIs**, donde el reto no sería qué mostrar, sino qué omitir para que la señal no se perdiera en el ruido. Recuerdo perfectamente el momento en que abrí el lienzo en blanco del dashboard y comprendí que la verdadera batalla por la claridad apenas comenzaba.

### Parte 2: VISUALIZACIÓN ESTRATÉGICA: CONSTRUCCIÓN DE DASHBOARDS DE KPIs

#### La tiranía del dato crudo y la búsqueda de la señal

Una vez que las tuberías de datos estaban conectadas y los eventos de **GA4** y **Amplitude** comenzaban a dispararse con cada clic en la plataforma, me encontré ante un problema clásico de diseño: la parálisis por abundancia. Teníamos miles de puntos de datos fluyendo por segundo, pero la data sin contexto es simplemente ruido blanco. Como responsable del producto, sabía que si entregaba un acceso genérico a las herramientas de analítica a los stakeholders, el proyecto moriría por mala interpretación o, peor aún, por indiferencia. Mi misión en ese momento no era solo "mostrar números", sino construir un centro de mando que permitiera al equipo de AsDeporte ver el pulso real del MVP sin necesidad de ser científicos de datos.

Recuerdo perfectamente la tensión al abrir el lienzo en blanco del dashboard. Tenía que pasar de la validación técnica —donde solo nos importaba que el código enviara el evento correcto— a la interpretación estratégica. Cada widget que decidiera incluir debía responder a una pregunta de negocio crítica que habíamos planteado meses atrás. Si un gráfico no ayudaba a tomar una decisión el lunes por la mañana, no tenía lugar en mi pantalla. El desafío era diseñar una interfaz de inteligencia que democratizara el acceso a la verdad del producto, asegurando que la jerarquía visual facilitara la detección inmediata de anomalías antes de que se convirtieran en crisis.

#### Arquitectura de visualización: Más allá de los presets

No me limité a usar los reportes preconfigurados que ofrecen las plataformas. Mi primer paso fue una configuración obsesiva de dashboards personalizados en **Amplitude** y **Mixpanel**, diseñando vistas que no solo escupieran métricas de vanidad, sino que contaran la historia del usuario. Mi razonamiento fue claro: la arquitectura de información de la plataforma de AsDeporte es compleja —mezcla eventos, suscripciones y comunidad— y un dashboard estándar de "páginas vistas" sería un insulto a esa complejidad.

Personalicé cada widget para que reflejara exactamente el modelo mental del atleta. En lugar de ver simplemente "Sesiones", configuré paneles que mostraban la **densidad de interacción por tipo de deporte**. Agrupé los eventos técnicos en categorías lógicas que cualquier stakeholder de Marketing o Ventas pudiera entender de un vistazo. Esta personalización me permitió asegurar que, si el flujo de inscripción sufría una caída de rendimiento en un dispositivo específico, la alerta visual fuera tan evidente que no requiriera análisis, sino acción inmediata. La meta era que el dashboard se convirtiera en la "Single Source of Truth" (Única Fuente de Verdad) donde el diseño y el negocio hablaran el mismo idioma.

#### El diseño del embudo: Donde el diseño se encuentra con el dinero

La parte más crítica de esta construcción fue la traducción de los objetivos de la Fase 1 en visualizaciones de **funnel analysis** (análisis de embudo). No me interesaba saber cuánta gente entraba a la plataforma; me obsesionaba saber cuántos terminaban el proceso. Diseñé el embudo principal siguiendo cada paso del flujo de pago que habíamos prototipado semanas atrás: desde la visita a la ficha del evento, pasando por la selección de categoría, la firma de la exoneración digital, hasta llegar al "envío de formulario de pago" y la "inscripción completada".

> Un embudo de conversión es, en esencia, un mapa de la paciencia del usuario. Cada caída porcentual entre pasos es una crítica silenciosa a nuestra interfaz. Mi trabajo aquí fue ponerle un megáfono a esa crítica para que nadie en la sala pudiera ignorarla.

Justifiqué la inclusión de micro-pasos en el embudo para identificar fricciones invisibles. Por ejemplo, monitoricé cuántos usuarios interactuaban con los **filtros de búsqueda** antes de abandonar. Si el 80% de los que usaban filtros convertían, pero solo el 10% de los usuarios totales encontraba los filtros, teníamos un problema de visibilidad de diseño, no de intención de compra. También configuré gráficos de dispersión para medir la adopción de la sección "Tribu". No me bastaba con saber que entraban a la comunidad; necesitaba visualizar la tasa de recurrencia: cuántos atletas volvían a interactuar con su Tribu en un periodo de 7 días. El éxito del MVP se mediría por acciones de valor, no por el volumen de tráfico.

#### Visualización centralizada y el factor humano

Para asegurar que el equipo no se perdiera en la profundidad de **Amplitude**, diseñé una vista centralizada de KPIs para el MVP B2C. Esta pantalla agrupaba las métricas de retención y engagement con una jerarquía visual estricta: los indicadores de salud financiera arriba, seguidos por los de adopción de funcionalidades y, finalmente, los de satisfacción cualitativa. Mi objetivo era la democratización del dato; quería que el director de finanzas y el diseñador junior pudieran mirar la misma pantalla y llegar a la misma conclusión sobre si el producto estaba traccionando.

En esta vista centralizada, integré algo que considero vital: el contexto visual. Vinculé los números cuantitativos con el acceso directo a **Hotjar**. Si el dashboard mostraba una caída del 15% en el paso de "Selección de Talla de Camiseta", incluí un acceso directo a los mapas de calor de esa pantalla específica. Esto permitía que el equipo viera dónde se "queman" los usuarios en tiempo real. Ver un mapa de calor donde los usuarios hacen clic frenéticamente en un elemento no interactivo explica el "por qué" detrás de la caída del KPI de una manera que un gráfico de barras nunca podrá hacer.

#### La potencia de la segmentación: El espejo de la estrategia Plus

Uno de los momentos de mayor claridad estratégica ocurrió al implementar los filtros de segmentación avanzada. No podíamos tratar a todos los usuarios por igual si nuestro modelo de negocio dependía de la suscripción **AsDeporte Plus**. Configuré el dashboard para permitir una comparación instantánea: el comportamiento de los miembros Plus frente a los usuarios estándar.

Esta segmentación me permitió responder preguntas incómodas: ¿Realmente los miembros Plus están usando más los beneficios de la plataforma o solo pagan por el descuento en eventos? Analicé métricas de **cohort retention** (retención por cohortes) comparando a los usuarios que se unieron durante un evento masivo como el Ironman frente a los que llegaron de forma orgánica. Esta distinción no era un accesorio técnico; era la base para entender si el valor del MVP estaba captando una audiencia nueva o simplemente fidelizando a la base de usuarios existente. Si los datos mostraban que los usuarios recurrentes ignoraban la nueva sección de "Entrenamientos", sabíamos que el diseño de esa funcionalidad necesitaba un pivot radical.

#### Temporalidad y el ritmo del deporte: Detectando la señal en la estacionalidad

Como diseñador senior, sé que los datos mienten si no se tiene en cuenta el calendario. Configuré visualizaciones de líneas de tiempo que permitieran detectar patrones de estacionalidad ligados a los eventos deportivos. En AsDeporte, un pico de tráfico no siempre significa que el diseño sea mejor; puede significar que se abrieron las inscripciones para un maratón importante.

Establecí comparativas semanales y mensuales (MoM) para distinguir entre el crecimiento orgánico y los picos artificiales provocados por campañas de marketing. Esto fue fundamental para proteger la integridad del diseño: si Marketing lanzaba una campaña masiva, el dashboard debía mostrar si esos nuevos usuarios lograban navegar el flujo de inscripción con la misma facilidad que los usuarios experimentados. Mi enfoque fue identificar la "línea base" de rendimiento de la plataforma para que, cuando terminara la euforia de un evento grande, pudiéramos ver si la tasa de retención se mantenía estable o si volvíamos a los niveles de fricción anteriores.

#### El ejercicio forense de alineación con la estrategia

Ningún gráfico fue producto del azar. Realicé un ejercicio forense para contrastar cada widget con el **Documento de Métricas de Éxito del MVP B2C** que validamos en la Fase 1. Cada KPI visualizado tenía una "partida de nacimiento" en nuestra estrategia inicial. Si en la fase de descubrimiento definimos que la "reducción de la fricción en el registro" era un OKR crítico, el dashboard debía mostrar el tiempo promedio de finalización de ese flujo con una precisión de milisegundos.

Esta alineación garantizó que el diseño basado en datos no se desviara de los objetivos comerciales de AsDeporte. No estábamos midiendo por medir; estábamos auditando nuestra propia capacidad para cumplir las promesas que le hicimos al negocio al inicio del proyecto. Ver cómo los OKRs estratégicos se transformaban en líneas de tendencia ascendentes fue la validación definitiva de que nuestra arquitectura de información y nuestras decisiones de interacción estaban moviendo la aguja en la dirección correcta.

#### Blindaje proactivo: Protocolo de alertas y reportes automatizados

Finalmente, para evitar que el dashboard se convirtiera en un cementerio de datos que nadie visita, configuré un protocolo de reportes automatizados y alertas de umbral. Establecí envíos programados de resúmenes de rendimiento a los líderes de Producto, Marketing y Ventas, asegurando que la información llegara a ellos sin que tuvieran que buscarla.

> La automatización del reporte es una medida de higiene estratégica. Si una métrica crítica, como la tasa de éxito en el pago, cae por debajo del benchmark que establecimos, el sistema debe disparar una alerta antes de que el problema se convierta en una pérdida financiera irreparable.

Diseñé estos reportes para que fueran extremadamente visuales y directos, eliminando cualquier jerga técnica innecesaria. Mi justificación para este nivel de automatización fue mantener la tensión competitiva y la agilidad del equipo. En un entorno de producto vivo, el tiempo entre la detección de un problema y su resolución es el KPI más importante para un diseñador. Al cerrar este ciclo de visualización, sentí que finalmente habíamos pasado de la oscuridad de las suposiciones a la claridad de la evidencia, dejando la plataforma lista para ser juzgada por su rendimiento real.

#### Reflexión sobre la ética de la visualización

Al finalizar la construcción de estos dashboards, me detuve a reflexionar sobre la responsabilidad que conlleva presentar datos. Como diseñadores, tenemos el poder de sesgar la percepción de los stakeholders simplemente eligiendo un gráfico de áreas sobre uno de líneas, o ajustando la escala de un eje Y. Opté por una transparencia radical: preferí mostrar una caída dramática en un gráfico de barras antes que suavizarla con una visualización acumulativa que ocultara el problema. La utilidad del insight debe estar siempre por encima de la estética del dashboard. Un dashboard "bonito" que oculta errores es un fracaso de diseño; uno que revela verdades incómodas es una herramienta de éxito.

**Próximo paso:**

Con el centro de mando operativo y las métricas de éxito alineadas con la estrategia, me di cuenta de que tener los datos no era suficiente si no establecíamos una disciplina para consumirlos. El dashboard estaba vivo, pero necesitaba que nosotros también lo estuviéramos. El siguiente desafío fue implementar la **VIGILANCIA ACTIVA: RUTINAS DE MONITORIZACIÓN POST-LANZAMIENTO**, donde el reto no sería tecnológico, sino cultural: ¿cómo integrar la revisión de estos números en el ADN diario del equipo sin que se volviera una tarea administrativa más? Recuerdo el primer lunes después del despliegue, mirando la pantalla y detectando un patrón en el uso de la app que no aparecía en los reportes automatizados, dándome cuenta de que la verdadera monitorización apenas comenzaba.

### Parte 3: VIGILANCIA ACTIVA: RUTINAS DE MONITORIZACIÓN POST-LANZAMIENTO

#### La vigilia del diseño: de la visualización a la vigilancia activa

Me encontré frente a los dashboards de **Google Analytics 4** y **Amplitude** el primer lunes después del lanzamiento, a las 8:00 AM, sabiendo que las gráficas inmaculadas que había diseñado días antes estaban a punto de ser golpeadas por la realidad de miles de usuarios reales. En este punto del proyecto, el riesgo no era técnico, sino operativo: existía la tentación peligrosa de que el equipo viera los dashboards como una pieza de exhibición, una confirmación de que "todo estaba funcionando" simplemente porque las líneas se movían. Como diseñador, mi mayor temor era que estas herramientas se convirtieran en *vanity metrics*.

Mi razonamiento fue pragmático: un dashboard que no genera una acción es solo ruido visual. La verdadera validación del diseño no ocurre en una sesión de Figma, sino en la observación del comportamiento no supervisado. Necesitaba transformar el equipo de una mentalidad de "entrega" a una de "vigilancia". Sabía que si no establecíamos una disciplina de consumo de datos inmediata, las fricciones que inevitablemente aparecerían en el MVP B2C se enterrarían bajo el tráfico diario, convirtiéndose en frustración silenciosa para el atleta y, eventualmente, en una pérdida de ingresos para AsDeporte. La vigilancia activa no era una opción; era el sistema inmunológico del producto.

#### El ritual del dato: estableciendo la disciplina operativa

Para evitar que la monitorización se diluyera en la carga de trabajo diaria, articulé una cadencia de revisión que dividí en dos niveles de profundidad. La **rutina diaria** se convirtió en nuestra primera línea de defensa. Cada mañana, antes de cualquier otra tarea, realizaba una auditoría de los picos de tráfico y los eventos clave capturados. No buscaba tendencias a largo plazo, sino anomalías: ¿hubo una caída repentina en los inicios de sesión a las 10:00 PM? ¿Por qué el evento `registration_start` se disparó pero `payment_success` se mantuvo plano? Esta revisión diaria en **Google Analytics 4** me permitía detectar incendios antes de que se volvieran incontrolables.

Por otro lado, implementé la **rutina semanal de consolidación**. Mientras que la diaria era táctica, la semanal era estratégica. Aquí es donde comparábamos el rendimiento real del MVP contra los objetivos que habíamos trazado meses atrás en la Fase 1. Utilizaba **Amplitude** para analizar cohortes y entender si la retención de los usuarios que se inscribieron en la primera semana era superior a la de la plataforma anterior. Esta disciplina aseguraba que el equipo de producto no perdiera de vista la realidad operativa entre el ruido de los lanzamientos de marketing.

> **Insight de Diseño:** La monitorización no es solo mirar números; es buscar la intención del usuario detrás de cada clic. Si un usuario hace clic tres veces en un botón que no es interactivo, el problema no es el usuario, es mi jerarquía visual que le está mintiendo.

#### La prueba de fuego: observando la adopción orgánica

Uno de los mayores desafíos fue distinguir entre la adopción impulsada por el marketing y la **adopción orgánica**. Me enfoqué en analizar la recurrencia de las visitas y la profundidad de la navegación sin el sesgo de las campañas de correo electrónico. ¿Estaban los atletas integrando AsDeporte en su rutina semanal de entrenamiento o solo entraban cuando recibían un cupón? 

Utilicé el análisis de retención por cohortes para evaluar si el valor propuesto en el diseño original —esa promesa de ser el "motor que libera tu grandeza"— realmente resonaba. Si un usuario entraba a revisar sus resultados de una carrera pasada y terminaba explorando la sección de "Próximos Eventos", sabía que la arquitectura de información estaba funcionando. La adopción exitosa se manifestaba cuando el usuario empezaba a utilizar la plataforma de formas que no requerían un recordatorio externo; cuando el diseño se volvía invisible porque se volvía útil.

#### El análisis forense del embudo: donde el negocio vive o muere

El punto más crítico de mi vigilancia fue, sin duda, el **Funnel Analysis** del proceso de inscripción. En el mundo de los eventos deportivos, el flujo de pago es el corazón del negocio. Monitoreé con una precisión casi obsesiva la relación entre el evento `step_1_personal_data`, `step_2_category_selection` y, finalmente, `payment_confirmation`. 

Detecté que el **Drop-off Rate** (tasa de abandono) aumentaba significativamente en el paso de selección de categoría para ciertos eventos de triatlón. Esta caída no era solo un número; era una señal de fricción cognitiva. ¿Eran las opciones demasiado complejas? ¿Estaba el usuario confundido por los requisitos técnicos de la categoría? Al identificar estos cuellos de botella en tiempo real, pude marcar áreas de intervención inmediata. Cada punto porcentual de abandono recuperado en este embudo representaba una victoria directa para la rentabilidad del proyecto y una validación de que el diseño podía ser un motor de conversión.

#### Validando las apuestas estratégicas: Tribu y AsDeporte Plus

El MVP no era solo una mejora estética; incluía apuestas estratégicas como la **'Tribu'** y los beneficios de **'AsDeporte Plus'**. Mi vigilancia se extendió a estas funcionalidades para entender si la jerarquía visual que habíamos definido estaba guiando a los usuarios correctamente.

*   **Interacciones en Tribu:** Monitoreé el uso de filtros y la participación en las comunidades. Descubrí que, aunque las visitas eran altas, la interacción profunda era menor a la esperada. Esto me llevó a cuestionar si el botón de "Unirse" era lo suficientemente prominente o si el valor de la comunidad no estaba claro desde el primer contacto.
*   **Beneficios Plus:** Analicé cuántos usuarios accedían a los beneficios exclusivos desde su perfil. Si un miembro Plus no utilizaba sus descuentos, el diseño de la experiencia de usuario estaba fallando en entregar el valor por el que el cliente estaba pagando.

Esta monitorización de funcionalidades específicas me permitió separar lo que "se veía bien" de lo que "realmente funcionaba", dándome argumentos sólidos para proponer ajustes en la interfaz que priorizaran estas zonas de alto valor.

#### Benchmarks y el descubrimiento de lo inesperado

Para dar contexto a mis hallazgos, contrasté los datos obtenidos con los **benchmarks internos** de la plataforma antigua. Fue un momento de validación técnica ver que el tiempo promedio de inscripción se había reducido en un 30%, pero también fue un momento de humildad descubrir comportamientos anómalos. 

Detecté que un grupo significativo de usuarios utilizaba la función de "Búsqueda" para encontrar eventos que ya estaban destacados en la home. Esto me indicó que, a pesar de nuestros esfuerzos en la curaduría de contenido, los usuarios confiaban más en su propia búsqueda activa que en nuestras sugerencias editoriales. Identificar estas anomalías es lo que separa a un diseñador senior de uno junior: no ignoras el dato porque "rompe" tu teoría; lo abrazas porque revela la verdadera naturaleza del usuario.

#### El protocolo de alerta: de la métrica al backlog

Finalmente, la vigilancia activa culminaba en la **generación de alertas y notas técnicas**. Cuando las métricas mostraban una caída inusual en el `conversion_rate` o un pico en los errores de formulario capturados por **Hotjar**, mi responsabilidad era traducir ese dato cuantitativo en una hipótesis de diseño.

No enviaba correos genéricos; redactaba notas internas que vinculaban el hallazgo con una posible causa raíz y una propuesta de solución. Estas notas alimentaban directamente el backlog de **Jira**, asegurando que los problemas detectados por los datos no se quedaran en una presentación de PowerPoint, sino que se convirtieran en tickets de desarrollo. Este protocolo de comunicación blindaba al producto contra la obsolescencia y garantizaba que cada iteración técnica estuviera respaldada por la evidencia del comportamiento real.

> **Reflexión de trinchera:** Diseñar para un producto vivo es un ejercicio constante de humildad. En el prototipo, todo es perfecto porque tú controlas las variables; en el producto real, el usuario es el dueño de la experiencia. La monitorización activa es la única forma de mantener el control sobre la calidad del diseño una vez que este ha salido de tus manos.

**Próximo paso:**

A pesar de tener el control sobre los números y las tendencias generales, una pregunta me quitaba el sueño: ¿por qué exactamente los usuarios estaban abandonando el flujo de inscripción en ese paso específico de selección de categoría? Los dashboards me decían *qué* estaba pasando, pero no me explicaban el *porqué*. Para resolver este misterio, tuve que sumergirme en el **ANÁLISIS FORENSE DE COMPORTAMIENTO: EMBUDOS Y FRICCIÓN**, donde las grabaciones de sesión y los mapas de calor revelarían una verdad incómoda sobre una microinteracción que habíamos pasado por alto.

### Parte 4: ANÁLISIS FORENSE DE COMPORTAMIENTO: EMBUDOS Y FRICCIÓN

#### El síntoma que los dashboards no explicaban

Los dashboards de GA4 y Amplitude me daban la temperatura del producto, pero no el diagnóstico. Tenía una caída del 28% en el paso de "Selección de Categoría" dentro del flujo de inscripción, una cifra que dolía ver cada mañana en el reporte automatizado. Sabía *qué* estaba pasando: los usuarios llegaban con intención, pero una cuarta parte de ellos se evaporaba justo antes de elegir si corrían 5K o 10K. Sin embargo, los números fríos no me decían si era un problema de carga, una duda sobre el precio o una confusión en la interfaz. Como responsable de la experiencia, no podía quedarme en la superficie de la métrica; necesitaba pasar de la monitorización macroscópica a una investigación forense.

Esta transición no fue un cambio de herramienta, sino de mentalidad. Dejé de mirar tendencias agregadas para diseccionar comportamientos individuales. El razonamiento era simple: si el diseño fallaba en producción después de haber pasado por validaciones en Figma, la causa raíz debía estar en una variable del entorno real que no habíamos mapeado. Inicié entonces un **Análisis de Embudo (Funnel Analysis)** exhaustivo, rastreando cada evento desde el `inicio_inscripcion` hasta la `inscripción_completada`. Al configurar este embudo con precisión técnica, confirmé que el cuello de botella era quirúrgico: el usuario superaba la selección de evento y la autenticación, pero se bloqueaba frontalmente en la pantalla de categorías.

#### Disección del embudo y la sospecha técnica

Para entender si este fallo era universal, apliqué filtros de **segmentación avanzada**. No podía asumir que un corredor de 60 años usando la versión Web tenía los mismos problemas que un triatleta joven en la App. Segmenté los datos por dispositivo, sistema operativo y, lo más importante, por estatus de membresía (Plus vs. No Plus).

*   **Hallazgo por plataforma:** Descubrí que la tasa de abandono en la App era un 12% superior a la de la Web móvil. Esto descartaba un problema de copy o de lógica de negocio y apuntaba directamente a una fricción de interacción específica del entorno nativo.
*   **Comportamiento de cohortes:** Los usuarios recurrentes (aquellos con más de tres inscripciones previas) navegaban el bloqueo con mayor éxito, lo que sugería que el problema era de "descubribilidad" o modelo mental, algo que el usuario experto ya había aprendido a rodear, pero que el nuevo usuario no toleraba.

Esta segmentación me permitió blindar mis hipótesis. Ya no buscaba un error general en el sistema; estaba buscando un fallo de diseño en la microinteracción de la App que impedía a los nuevos usuarios avanzar.

#### La jerarquía visual bajo el microscopio de Hotjar

Con la sospecha centrada en la interfaz de la App, activé el análisis visual mediante **Mapas de Calor (Heatmaps)** en Hotjar. Necesitaba verificar si la jerarquía visual que habíamos definido en los prototipos se mantenía bajo la carga cognitiva de un usuario real. Lo que vi en los mapas de clics fue revelador: los usuarios estaban haciendo clic repetidamente en las etiquetas de las categorías (el texto), pero el área activa de selección estaba restringida únicamente al pequeño botón de radio lateral.

> **Observación de trinchera:** En Figma, con el puntero del ratón, esa precisión parece natural. En una pantalla de móvil, con el pulgar y las prisas de una inscripción que se agota, esa falta de área activa es una barrera insalvable.

Los mapas de scroll también mostraron que la información crítica sobre los beneficios de la categoría (como el kit de corredor) quedaba "debajo del pliegue" en dispositivos con pantallas más pequeñas. El usuario no veía el valor de lo que estaba eligiendo porque el diseño priorizaba la estética del listado sobre la exposición de los beneficios. Estábamos obligando al usuario a elegir a ciegas, y su respuesta natural era el abandono.

#### El momento de la verdad: Rage Clicks y grabaciones de sesión

Para confirmar esta teoría, me sumergí en la revisión de **grabaciones de sesiones reales**. Es un ejercicio de humildad necesario: ver a un usuario real dudar, retroceder y finalmente cerrar la aplicación es la mejor cura contra el ego del diseñador. Observé múltiples casos de **Rage Clicks** (clics de frustración) en el selector de categoría. El usuario tocaba la pantalla cinco, seis veces seguidas sobre el nombre de la categoría "Sprint" y, al ver que no pasaba nada, intentaba retroceder.

En una de las grabaciones, vi a un usuario intentar inscribirse tres veces seguidas. En cada intento, llegaba al mismo punto, se quedaba estático durante 15 segundos (probablemente buscando el botón de "Continuar" que quedaba oculto por el teclado numérico en algunos modelos de teléfono) y terminaba abandonando. Este contexto cualitativo transformó el dato del 28% de abandono en una imagen clara: un usuario frustrado por una zona de contacto pequeña y un botón de acción oculto.

#### Auditoría de 'Tribu' y 'Asdeporte Plus'

Aproveché este análisis forense para evaluar la adopción de las nuevas funcionalidades: **Tribu** y **Asdeporte Plus**. Utilizando los eventos capturados por Google Tag Manager, analicé el flujo de navegación hacia estas secciones. El diagnóstico fue agridulce:
*   **Asdeporte Plus:** Tenía una tasa de clics alta, pero una conversión baja. Los usuarios tenían curiosidad, pero el muro de pago (paywall) carecía de una explicación clara de los beneficios inmediatos en el contexto de la inscripción.
*   **Tribu:** El problema aquí era de **discoverability**. Los datos mostraban que menos del 5% de los usuarios llegaban a la sección de comunidad de forma orgánica. Estaba tan profundamente enterrada en la arquitectura de información que, para el usuario promedio, simplemente no existía.

#### Documentación y blindaje del backlog

Toda esta evidencia no podía quedarse en mi cabeza. Consolidé los hallazgos en el documento de **Análisis de Embudo del Proceso de Inscripción**. No era un reporte de diseño al uso; era un expediente forense que vinculaba cada caída en la métrica con una captura de pantalla del mapa de calor y un enlace a la grabación de la sesión correspondiente.

Documenté tres problemas críticos para el backlog de mejora continua:
1.  **Ampliación del área activa:** Convertir toda la tarjeta de categoría en un elemento seleccionable, no solo el radio button.
2.  **Sticky Action Button:** Fijar el botón de "Continuar" en la parte inferior de la pantalla para evitar que desapareciera en pantallas pequeñas o al desplegarse el teclado.
3.  **Jerarquía de beneficios:** Reestructurar la información de la categoría para que los beneficios clave fueran visibles sin necesidad de scroll.

Este documento se convirtió en la base para priorizar los siguientes sprints de desarrollo. Ya no discutíamos sobre opiniones estéticas; discutíamos sobre cómo recuperar ese 28% de usuarios que los datos nos decían exactamente dónde y por qué estábamos perdiendo.

**Próximo paso:**

Tener los datos de comportamiento era solo la mitad de la historia. Aunque sabía que los usuarios se frustraban en la selección de categoría, aún me faltaba escuchar su voz directa para entender si el problema era solo técnico o si había una barrera emocional o de confianza que los números no podían capturar. Para cerrar el círculo, tuve que enfrentarme a la **TRIANGULACIÓN DE INSIGHTS: CUANTITATIVO VS. CUALITATIVO**, donde los tickets de soporte y las reseñas de la App Store pondrían palabras a los "rage clicks" que acababa de presenciar.#### El síntoma que los dashboards no explicaban

Los dashboards de GA4 y Amplitude me daban la temperatura del producto, pero no el diagnóstico. Tenía una caída del 28% en el paso de "Selección de Categoría" dentro del flujo de inscripción, una cifra que dolía ver cada mañana en el reporte automatizado. Sabía *qué* estaba pasando: los usuarios llegaban con intención, pero una cuarta parte de ellos se evaporaba justo antes de elegir si corrían 5K o 10K. Sin embargo, los números fríos no me decían si era un problema de carga, una duda sobre el precio o una confusión en la interfaz. Como responsable de la experiencia, no podía quedarme en la superficie de la métrica; necesitaba pasar de la monitorización macroscópica a una investigación forense.

Esta transición no fue un cambio de herramienta, sino de mentalidad. Dejé de mirar tendencias agregadas para diseccionar comportamientos individuales. El razonamiento era simple: si el diseño fallaba en producción después de haber pasado por validaciones en Figma, la causa raíz debía estar en una variable del entorno real que no habíamos mapeado. Inicié entonces un **Análisis de Embudo (Funnel Analysis)** exhaustivo, rastreando cada evento desde el `inicio_inscripcion` hasta la `inscripción_completada`. Al configurar este embudo con precisión técnica, confirmé que el cuello de botella era quirúrgico: el usuario superaba la selección de evento y la autenticación, pero se bloqueaba frontalmente en la pantalla de categorías.

#### Disección del embudo y la sospecha técnica

Para entender si este fallo era universal, apliqué filtros de **segmentación avanzada**. No podía asumir que un corredor de 60 años usando la versión Web tenía los mismos problemas que un triatleta joven en la App. Segmenté los datos por dispositivo, sistema operativo y, lo más importante, por estatus de membresía (Plus vs. No Plus).

*   **Hallazgo por plataforma:** Descubrí que la tasa de abandono en la App era un 12% superior a la de la Web móvil. Esto descartaba un problema de copy o de lógica de negocio y apuntaba directamente a una fricción de interacción específica del entorno nativo.
*   **Comportamiento de cohortes:** Los usuarios recurrentes (aquellos con más de tres inscripciones previas) navegaban el bloqueo con mayor éxito, lo que sugería que el problema era de "descubribilidad" o modelo mental, algo que el usuario experto ya había aprendido a rodear, pero que el nuevo usuario no toleraba.

Esta segmentación me permitió blindar mis hipótesis. Ya no buscaba un error general en el sistema; estaba buscando un fallo de diseño en la microinteracción de la App que impedía a los nuevos usuarios avanzar.

#### La jerarquía visual bajo el microscopio de Hotjar

Con la sospecha centrada en la interfaz de la App, activé el análisis visual mediante **Mapas de Calor (Heatmaps)** en Hotjar. Necesitaba verificar si la jerarquía visual que habíamos definido en los prototipos se mantenía bajo la carga cognitiva de un usuario real. Lo que vi en los mapas de clics fue revelador: los usuarios estaban haciendo clic repetidamente en las etiquetas de las categorías (el texto), pero el área activa de selección estaba restringida únicamente al pequeño botón de radio lateral.

> **Observación de trinchera:** En Figma, con el puntero del ratón, esa precisión parece natural. En una pantalla de móvil, con el pulgar y las prisas de una inscripción que se agota, esa falta de área activa es una barrera insalvable.

Los mapas de scroll también mostraron que la información crítica sobre los beneficios de la categoría (como el kit de corredor) quedaba "debajo del pliegue" en dispositivos con pantallas más pequeñas. El usuario no veía el valor de lo que estaba eligiendo porque el diseño priorizaba la estética del listado sobre la exposición de los beneficios. Estábamos obligando al usuario a elegir a ciegas, y su respuesta natural era el abandono.

#### El momento de la verdad: Rage Clicks y grabaciones de sesión

Para confirmar esta teoría, me sumergí en la revisión de **grabaciones de sesiones reales**. Es un ejercicio de humildad necesario: ver a un usuario real dudar, retroceder y finalmente cerrar la aplicación es la mejor cura contra el ego del diseñador. Observé múltiples casos de **Rage Clicks** (clics de frustración) en el selector de categoría. El usuario tocaba la pantalla cinco, seis veces seguidas sobre el nombre de la categoría "Sprint" y, al ver que no pasaba nada, intentaba retroceder.

En una de las grabaciones, vi a un usuario intentar inscribirse tres veces seguidas. En cada intento, llegaba al mismo punto, se quedaba estático durante 15 segundos (probablemente buscando el botón de "Continuar" que quedaba oculto por el teclado numérico en algunos modelos de teléfono) y terminaba abandonando. Este contexto cualitativo transformó el dato del 28% de abandono en una imagen clara: un usuario frustrado por una zona de contacto pequeña y un botón de acción oculto.

#### Auditoría de 'Tribu' y 'Asdeporte Plus'

Aproveché este análisis forense para evaluar la adopción de las nuevas funcionalidades: **Tribu** y **Asdeporte Plus**. Utilizando los eventos capturados por Google Tag Manager, analicé el flujo de navegación hacia estas secciones. El diagnóstico fue agridulce:
*   **Asdeporte Plus:** Tenía una tasa de clics alta, pero una conversión baja. Los usuarios tenían curiosidad, pero el muro de pago (paywall) carecía de una explicación clara de los beneficios inmediatos en el contexto de la inscripción.
*   **Tribu:** El problema aquí era de **discoverability**. Los datos mostraban que menos del 5% de los usuarios llegaban a la sección de comunidad de forma orgánica. Estaba tan profundamente enterrada en la arquitectura de información que, para el usuario promedio, simplemente no existía.

#### Documentación y blindaje del backlog

Toda esta evidencia no podía quedarse en mi cabeza. Consolidé los hallazgos en el documento de **Análisis de Embudo del Proceso de Inscripción**. No era un reporte de diseño al uso; era un expediente forense que vinculaba cada caída en la métrica con una captura de pantalla del mapa de calor y un enlace a la grabación de la sesión correspondiente.

Documenté tres problemas críticos para el backlog de mejora continua:
1.  **Ampliación del área activa:** Convertir toda la tarjeta de categoría en un elemento seleccionable, no solo el radio button.
2.  **Sticky Action Button:** Fijar el botón de "Continuar" en la parte inferior de la pantalla para evitar que desapareciera en pantallas pequeñas o al desplegarse el teclado.
3.  **Jerarquía de beneficios:** Reestructurar la información de la categoría para que los beneficios clave fueran visibles sin necesidad de scroll.

Este documento se convirtió en la base para priorizar los siguientes sprints de desarrollo. Ya no discutíamos sobre opiniones estéticas; discutíamos sobre cómo recuperar ese 28% de usuarios que los datos nos decían exactamente dónde y por qué estábamos perdiendo.

**Próximo paso:**

Tener los datos de comportamiento era solo la mitad de la historia. Aunque sabía que los usuarios se frustraban en la selección de categoría, aún me faltaba escuchar su voz directa para entender si el problema era solo técnico o si había una barrera emocional o de confianza que los números no podían capturar. Para cerrar el círculo, tuve que enfrentarme a la **TRIANGULACIÓN DE INSIGHTS: CUANTITATIVO VS. CUALITATIVO**, donde los tickets de soporte y las reseñas de la App Store pondrían palabras a los "rage clicks" que acababa de presenciar.

### Parte 5: TRIANGULACIÓN DE INSIGHTS: CUANTITATIVO VS. CUALITATIVO

#### El silencio de los números y la búsqueda del "porqué"

Tener un 28% de abandono en la pantalla de selección de categoría era un dato demoledor, pero también era un dato mudo. Los dashboards de GA4 y Amplitude me gritaban que algo estaba roto, y las grabaciones de Hotjar me mostraban el rastro de frustración de los usuarios en forma de *rage clicks*, pero seguía faltándome la dimensión humana. Como diseñador, aprendí hace mucho que los datos cuantitativos son excelentes para decirte **dónde** está sangrando el producto, pero son mediocres para explicarte **qué** causó la herida. Podía suponer que el problema era la falta de un estado visual claro en los botones, pero necesitaba confirmar si el usuario se iba por un error técnico, por una duda sobre el precio o porque simplemente no entendía la diferencia entre las categorías "Elite" y "Amateur".

Esta transición de la analítica pura a la **triangulación de insights** fue el movimiento más crítico de la monitorización. No podía presentarme ante el equipo de producto solo con gráficas de barras descendentes; necesitaba la voz del atleta para blindar mis hallazgos. Mi razonamiento fue el de un investigador forense: si los datos eran la escena del crimen, el feedback cualitativo eran los testigos. Sin ambos, cualquier solución que propusiera para el siguiente sprint sería, en el mejor de los casos, una conjetura educada. Por eso, decidí frenar la generación de reportes automáticos y sumergirme en el lodo del feedback directo, buscando patrones donde la frialdad del píxel coincidiera con la realidad del usuario en la calle.

#### Inmersión forense en los tickets de soporte

Mi primer paso fue abrir el sistema de gestión de tickets de soporte. No busqué quejas aisladas, sino que realicé un análisis sistemático de las últimas dos semanas post-lanzamiento. Configuré filtros específicos para palabras clave como "inscripción", "pago", "error", "no encuentro" y "categoría". Lo que encontré fue una mina de oro de validación: mientras que en Amplitude veía una caída drástica en el último paso del formulario de pago, en los tickets de soporte leía a atletas desesperados porque el sistema no aceptaba su código de descuento de "Asdeporte Plus", a pesar de que el dashboard indicaba que el botón de "Aplicar" recibía miles de clics.

Al categorizar estos tickets, pude distinguir entre dos tipos de problemas que los datos cuantitativos mezclaban en una sola métrica de abandono:
1.  **Fricción Técnica:** Usuarios que reportaban que el teclado numérico tapaba el botón de "Continuar" en dispositivos Android específicos. Esto explicaba por qué la tasa de conversión caía un 12% extra en ese segmento de usuarios.
2.  **Fricción Cognitiva:** Atletas que preguntaban si la inscripción incluía el seguro de accidentes. En el diseño, esa información estaba tres niveles de scroll abajo. El dato cuantitativo me decía que se iban en esa pantalla; el ticket de soporte me explicaba que se iban por **incertidumbre**, no por un error de sistema.

Esta distinción fue vital. Me permitió entender que no solo necesitábamos arreglar el código, sino reestructurar la jerarquía de información para responder a preguntas que el usuario se hacía justo antes de soltar su dinero.

#### La plaza pública: Reseñas y el termómetro de la percepción

Paralelamente, realicé una monitorización exhaustiva de las reseñas en la App Store y Play Store, además de rastrear comentarios en las redes sociales de AsDeporte. Aquí el tono cambiaba; el feedback era más visceral y público. Utilicé estas plataformas como un termómetro de la satisfacción del MVP en el mundo real. Cada reseña negativa era tratada como un punto de datos que debía ser correlacionado inmediatamente con mis KPIs de retención.

Hubo un patrón que me llamó la atención: varios usuarios mencionaban en Twitter que la nueva sección de "Tribu" se sentía "vacía". Al cruzar esto con los datos de Amplitude, vi que el 60% de los usuarios entraban a la sección una vez y nunca regresaban. La métrica de *engagement* era bajísima. Si solo me hubiera quedado con el número, habría pensado que la funcionalidad no interesaba. Sin embargo, al leer las reseñas, descubrí que el problema era de **visibilidad y recompensa**: los usuarios no entendían cómo ganar puntos o cómo interactuar con otros atletas porque el "onboarding" de la funcionalidad era casi inexistente. El feedback cualitativo me reveló que el valor estaba ahí, pero la puerta de entrada estaba cerrada con llave.

> **Insight de Diseño:** El éxito de una funcionalidad no se mide solo por su uso, sino por la claridad de su propuesta de valor en el primer contacto. Si el dato dice que no la usan, el feedback cualitativo te dirá si es porque no la quieren o porque no saben que existe.

#### Validando el "Rage Click" con testimonios directos

Uno de los momentos más reveladores de este proceso ocurrió cuando logré vincular un hallazgo específico de mis mapas de calor con un comentario directo de un usuario. En Hotjar, había detectado una concentración masiva de clics erróneos en un icono decorativo que los usuarios confundían con un botón de ayuda en el flujo de inscripción. Era un "rage click" clásico: el usuario pinchaba repetidamente y, al no obtener respuesta, abandonaba.

Días después, encontré una reseña en la Play Store que decía: *"Traté de pedir ayuda sobre mi talla de playera picando en el signo de interrogación y no hace nada. Pésima app, mejor me inscribí en la página web"*. Esa fue la pieza que faltaba en el rompecabezas. Tenía la evidencia visual del comportamiento y ahora tenía la confirmación verbal de la intención. Esta correlación eliminó cualquier duda en el equipo de ingeniería sobre la necesidad de cambiar ese componente. No era una cuestión de estética; era una fuga de ingresos documentada y explicada por el propio cliente.

#### Discriminando entre Usabilidad y Valor: El dilema de Asdeporte Plus

Un desafío recurrente en esta fase fue entender por qué la adopción de los beneficios de "Asdeporte Plus" dentro de la plataforma era menor a las proyecciones iniciales. Los dashboards mostraban que el acceso a la sección de beneficios era frecuente, pero la tasa de redención de cupones era plana. 

Al interrogar el feedback cualitativo, descubrí una verdad incómoda: el problema no era la interfaz. Los usuarios reportaban en las encuestas de satisfacción y en los comentarios de soporte que los beneficios actuales no eran lo suficientemente atractivos para el esfuerzo que requería activarlos. Aquí es donde mi rol como diseñador de producto se volvió estratégico. Pude informar a los stakeholders que ninguna mejora en el UX de la pantalla de "Plus" iba a mover la aguja de conversión si el **valor percibido** del contenido no mejoraba. Esta capacidad de distinguir entre un problema de diseño y un problema de propuesta de valor es lo que permite que la monitorización de métricas realmente guíe el negocio, y no solo la estética.

#### La construcción del documento de correlaciones

Para que todo este análisis no se quedara en mi cabeza, estructuré un entregable que denominé "Notas de Correlación Cuantitativa-Cualitativa". No quería un reporte de 50 páginas que nadie leyera; diseñé un documento de una sola página por cada hallazgo crítico, utilizando una estructura de "Evidencia y Voz":

*   **El Qué (Métrica):** "Caída del 15% en la pantalla de selección de evento en dispositivos iOS".
*   **La Evidencia Visual (Hotjar/GA4):** Captura de pantalla del embudo y del mapa de calor mostrando el punto de fricción.
*   **El Porqué (Voz del Usuario):** Cita textual de un ticket de soporte o reseña explicando la confusión o el error experimentado.
*   **Acción Recomendada:** Propuesta concreta para el backlog (ej: "Mover el botón de filtros a la parte superior para evitar oclusión por el teclado").

Este formato fue transformador. En las reuniones de revisión, ya no perdíamos tiempo discutiendo si un botón debía ser azul o verde. Presentaba el documento y el argumento era incontestable: "Perdemos X cantidad de usuarios aquí, y aquí está el mensaje de Juan diciéndonos exactamente por qué se fue". Esta metodología blindó el proceso de diseño contra la subjetividad y las opiniones basadas en jerarquías (*HiPPO - Highest Paid Person's Opinion*).

#### Reflexión sobre el diseño basado en la realidad

Haber realizado esta triangulación me recordó que el diseño de producto no termina cuando entregas los archivos a desarrollo; en realidad, es ahí donde empieza la verdadera validación. No ser un "diseñador de laboratorio" implica aceptar que tus hipótesis iniciales pueden estar equivocadas y que solo el mercado tiene la última palabra. 

Mirar los dashboards después de haber leído los tickets de soporte cambió mi forma de interpretar las gráficas. Ya no veía solo líneas de tendencia; veía a personas reales tratando de inscribirse a una carrera para la que habían entrenado meses, frustradas por un formulario que yo había diseñado. Esa responsabilidad es la que empuja a un senior a no conformarse con la métrica, sino a buscar la historia detrás de ella. Esta fase de monitorización no solo nos dio datos para el backlog; nos dio una brújula moral y técnica para la Fase 5 de Mejora Continua.

**Próximo paso:**

Con toda esta evidencia recolectada y las causas de fricción identificadas, el siguiente desafío no era técnico, sino político y estratégico. Tenía que condensar esta montaña de insights en una narrativa que el liderazgo y los stakeholders pudieran digerir y, lo más importante, financiar. El momento de la verdad llegaría con el **CIERRE DEL CICLO: COMUNICACIÓN DE IMPACTO Y BACKLOG EVOLUTIVO**, donde transformaría estos hallazgos en una hoja de ruta clara para el futuro de AsDeporte, enfrentándome a la difícil tarea de priorizar qué arreglar primero cuando todo parece urgente.

### Parte 6: CIERRE DEL CICLO: COMUNICACIÓN DE IMPACTO Y BACKLOG EVOLUTIVO

#### La soledad del hallazgo frente a la urgencia de la ejecución

Tenía los dashboards encendidos, las correlaciones terminadas y una certeza técnica absoluta sobre lo que estaba ocurriendo en el MVP, pero sabía que nada de eso importaba si no lograba que el liderazgo de AsDeporte se moviera. Al cerrar la fase de triangulación, me encontré en ese punto crítico donde muchos proyectos de diseño mueren: el momento en que el reporte se convierte en un archivo estático que nadie lee. Como diseñador, mi responsabilidad no terminaba en el diagnóstico; mi verdadero trabajo en este cierre de ciclo era la síntesis estratégica. No bastaba con tener la verdad técnica de GA4 o Amplitude; tenía que saber venderla para asegurar que el producto no se estancara en su primera versión.

Pasar de la "observación silenciosa" a la "comunicación de impacto" fue una maniobra deliberada. Un insight que no se comunica es, en la práctica, una oportunidad de mejora que muere en el olvido. Sabía que los stakeholders —desde Producto hasta Ventas— estaban operando bajo una presión inmensa por el lanzamiento, y mi labor era filtrar el ruido de los datos para entregarles una narrativa de negocio clara. Me propuse que cada número presentado tuviera una cara humana (proveniente de Hotjar) y una consecuencia financiera o de usabilidad evidente. Esta transición de analista a estratega fue lo que permitió que el diseño basado en datos dejara de ser una aspiración y se convirtiera en el motor real de la evolución de la plataforma.

#### El ritual de la comunicación: Transformando dashboards en decisiones

Para ejecutar esta etapa, me apoyé estrictamente en la metodología de comunicación definida en mi hoja de ruta de **monitorización de métricas de éxito**, asegurando que el flujo de información fuera constante y no un evento único. Establecí una cadencia de reportes regulares que no eran simples capturas de pantalla de los dashboards, sino presentaciones visuales curadas donde destilaba la complejidad técnica de herramientas como Google Analytics 4 y Amplitude en mensajes de alto impacto para los líderes de Producto, Marketing y Soporte.

*   **Reportes de Impacto Visual:** Diseñé una estructura de reporte que comenzaba con el estado de salud de los OKRs, seguido de un "Hallazgo de la Semana" (un insight profundo de comportamiento) y terminaba con una recomendación táctica. Esto evitaba la fatiga informativa y mantenía el foco en lo que requería acción inmediata.
*   **Sesiones de Revisión de Producto:** Organicé reuniones semanales donde el diseño basado en datos era el protagonista. En estas sesiones, no solo mostraba gráficas; proyectaba grabaciones de sesiones reales para que los stakeholders sintieran la fricción que los usuarios experimentaban.
*   **Alineación Asíncrona:** Utilicé correos de resumen ejecutivo y canales dedicados para mantener a todos informados entre reuniones. Si detectaba una anomalía crítica en el flujo de inscripción un martes, para el miércoles ya había un mensaje circulando con el diagnóstico preliminar y los pasos a seguir.

Esta estructura de comunicación regular fue vital para mantener el "buy-in" de la organización. Logré demostrar que el diseño no es una cuestión de gustos personales, sino un factor de rendimiento medible que afecta directamente la conversión y la satisfacción del atleta.

#### El veredicto de los OKRs: Donde la visión de producto encontró al mercado

El momento de la verdad llegó al contrastar el rendimiento real del MVP contra los objetivos que habíamos trazado meses atrás. Utilicé los dashboards configurados para realizar una exposición forense de los KPIs de adopción, conversión y retención. Fue gratificante, pero también una lección de humildad, ver cómo los benchmarks internos de AsDeporte se comportaban frente al tráfico real.

*   **Adopción y Engagement:** Presenté datos contundentes sobre el uso de la funcionalidad "Tribu". Las métricas mostraron que la interacción comunitaria superó las proyecciones iniciales en un 15%, validando que el componente social era una necesidad latente que habíamos logrado capitalizar.
*   **Conversión de AsDeporte Plus:** Mostré cómo el acceso a beneficios exclusivos estaba impulsando la retención. Al segmentar a los usuarios "Plus" frente a los estándar, pudimos demostrar que los primeros tenían una frecuencia de uso de la app tres veces superior, lo que justificaba plenamente la inversión en este modelo de suscripción.
*   **Validación de la Propuesta de Valor:** Al comparar estos números con los datos históricos de la plataforma anterior, la mejora en la tasa de finalización de perfiles fue evidente. Los usuarios no solo estaban entrando; se estaban quedando y completando su ecosistema digital.

Destacar estos triunfos tempranos no fue un ejercicio de vanidad. Fue una maniobra estratégica para consolidar la confianza del equipo directivo en el proceso de diseño y, sobre todo, para asegurar el presupuesto y la voluntad política necesarios para abordar las fases de mejora continua que vendrían después.

#### El diagnóstico de las heridas: Funnels que no perdonan

Sin embargo, un senior no solo comunica las victorias; su valor real reside en su capacidad para señalar los fallos con precisión quirúrgica. Utilizando el **Funnel Analysis** (Análisis de Embudo), identifiqué y comuniqué las áreas de preocupación donde el MVP no estaba cumpliendo la promesa de fluidez. No hubo ambigüedades: los datos mostraron que el 40% de los usuarios abandonaban en el tercer paso del flujo de inscripción.

*   **La Anatomía del Abandono:** Al cruzar los datos cuantitativos de las caídas en el embudo con las grabaciones de Hotjar, pude mostrarle al equipo de ingeniería exactamente dónde se rompía la experiencia. No era un error de código, era un problema de claridad en el formulario de pago que generaba desconfianza.
*   **Detección de Anomalías:** Durante la monitorización regular, detecté que los usuarios en dispositivos Android específicos tenían una tasa de error un 20% mayor al intentar cargar sus certificados médicos. Esta "área de preocupación" técnica fue escalada de inmediato como una prioridad de usabilidad.
*   **Honestidad Radical:** Presenté estos hallazgos sin filtros decorativos. Expliqué que, aunque la estética era impecable, la fricción en el checkout era un riesgo financiero directo para las inscripciones de las próximas carreras importantes.

Esta transparencia sobre los fallos permitió que la organización dejara de trabajar sobre suposiciones falsas. Al ver el "dolor" del usuario documentado en video y respaldado por la caída en la gráfica, la resistencia al cambio desapareció.

#### Blindando el futuro: El dato como escudo contra la arbitrariedad

Para asegurar que las recomendaciones de diseño no fueran descartadas como "preferencias estéticas", utilicé la evidencia recolectada como un blindaje estratégico. Mi proceso consistió en correlacionar cada caída en los embudos de conversión con la evidencia cualitativa que recolectamos de los tickets de soporte y las reseñas en las tiendas de aplicaciones, tal como lo dictaba mi metodología de **monitorización de métricas de éxito**.

> "Si el dato dice que la gente se va, y el ticket de soporte explica que es porque no entienden el botón de 'Confirmar', la discusión sobre el color del botón se vuelve irrelevante; lo que necesitamos es una reestructuración de la jerarquía de información."

Esta forma de presentar la necesidad de iteraciones transformó mi rol dentro de AsDeporte. Ya no era el diseñador pidiendo permiso para "embellecer" algo; era un socio estratégico señalando necesidades de negocio críticas para mitigar riesgos financieros. Presenté cada propuesta de rediseño como una solución directa a un problema de comportamiento observado, lo que hizo que las recomendaciones fueran prácticamente irrefutables. Si íbamos a invertir horas de desarrollo en cambiar el flujo de "Tribu", no era porque yo lo deseara, sino porque los datos de segmentación de usuarios mostraban que el 60% de los usuarios recurrentes intentaban acceder a una función que aún estaba oculta en la arquitectura.

#### El Backlog Evolutivo: De la métrica al ticket de Jira

El paso final, y quizás el más técnico de esta actividad, fue asegurar que toda esta inteligencia de producto no se quedara en la presentación de impacto, sino que se convirtiera en trabajo ejecutable. Me encargué personalmente de trasladar cada hallazgo a nuestras herramientas de gestión (Jira y Asana), creando lo que denominé el **Backlog Evolutivo**.

*   **Documentación de Tickets:** Cada problema de usabilidad identificado en el análisis de embudo fue transformado en un ticket accionable. Incluí enlaces a las grabaciones de Hotjar, capturas de pantalla de la anomalía y los datos de impacto en el KPI afectado. Esto permitió que el equipo de desarrollo entendiera no solo el "qué", sino el "por qué" y la urgencia de cada tarea.
*   **Categorización por Impacto:** Clasifiqué las oportunidades de mejora utilizando una matriz de esfuerzo vs. impacto en los KPIs. Aquellas que resolvían fricciones en el flujo de pago (conversión) fueron marcadas como críticas, mientras que las mejoras en la interfaz de la Tribu fueron programadas para sprints posteriores.
*   **Repositorio de Ideas para Futuras Iteraciones:** Creé un espacio dedicado para aquellas ideas que, aunque valiosas, no encajaban en el ciclo actual. Este repositorio se alimentó directamente de los patrones de comportamiento que sugerían necesidades no satisfechas, asegurando que el ciclo de descubrimiento de la Fase 5 tuviera un punto de partida sólido y basado en la realidad.

El backlog se convirtió en el tejido conectivo entre nuestra estrategia de diseño y la ejecución técnica. Sin esta transferencia disciplinada, todo el análisis de datos habría sido un ejercicio académico sin impacto real en la vida de los atletas que usan AsDeporte.

**Reflexión final:**

Cerrar este ciclo de monitorización me permitió entender que el diseño de producto es, en última instancia, un ejercicio de responsabilidad continua. Pasar de un entorno controlado de prototipos a ver cómo miles de usuarios reales interactuaban con mi trabajo en el ecosistema de AsDeporte fue una lección sobre la humildad del dato: no importa qué tan senior seas, el usuario siempre encontrará una forma de romper tu lógica. Lo que realmente define nuestra madurez profesional no es entregar un diseño perfecto a la primera, sino construir los sistemas de medición y comunicación necesarios para corregir el rumbo con precisión y honestidad cuando el mundo real nos pone a prueba.