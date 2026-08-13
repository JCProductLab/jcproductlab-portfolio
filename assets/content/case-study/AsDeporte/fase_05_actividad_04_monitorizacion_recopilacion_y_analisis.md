# Fase 5: Post-Lanzamiento y Mejora Continua

## Actividad 4: actividad_04_monitorizacion_recopilacion_y_analisis

### Parte 1: INSTRUMENTACIÓN TÉCNICA Y ARQUITECTURA DE DATOS CUANTITATIVOS

#### La ceguera post-lanzamiento: El riesgo de diseñar en el vacío

El momento en que el código toca producción es el momento exacto en que, como diseñador, pierdes el control absoluto sobre tu obra. Durante meses, cada flujo, cada microinteracción y cada decisión estética en la plataforma de AsDeporte fue validada en entornos controlados, con usuarios seleccionados y bajo mi supervisión directa. Pero el lanzamiento del MVP B2C cambió las reglas del juego: de repente, miles de atletas reales empezaron a navegar por la app y la web en condiciones que yo no podía predecir. Sin una instrumentación técnica impecable, el producto se convierte en una caja negra; puedes ver que la gente entra y sale, pero no tienes ni la menor idea de por qué se quedan o por qué abandonan a mitad de una inscripción.

Mi razonamiento estratégico en este punto fue tajante: no podíamos permitirnos la ceguera operativa. Un producto digital sin datos es una opinión, y en una fase tan crítica como el post-lanzamiento de un MVP que ha recibido críticas históricas por su usabilidad, las opiniones no sirven para iterar. Necesitaba construir un "sistema nervioso central" que me permitiera ver, en tiempo real, dónde se rompía la experiencia. No se trataba solo de contar clics, sino de capturar intenciones y fricciones. Antes de abrir las puertas al tráfico real, dediqué una parte sustancial de mi energía a blindar la arquitectura de inteligencia continua, asegurando que cada interacción relevante dejara una huella digital que pudiéramos reconstruir forensemente después.

#### La elección de Mixpanel: El "quién" detrás del "qué"

Para el núcleo de la analítica de producto, tomé la decisión de implementar **Mixpanel**. En mi trayectoria, he aprendido que herramientas como Google Analytics son excelentes para entender el volumen, pero se quedan cortas cuando necesitas entender el comportamiento humano a nivel de usuario individual. Opté por Mixpanel por su extraordinaria flexibilidad en la definición de eventos y su capacidad para crear cohortes de retención con una granularidad que otras plataformas no permiten. 

Mi objetivo no era solo saber cuántas personas veían un evento deportivo, sino entender si el usuario que filtró por "Triatlón" en la Ciudad de México terminó completando su inscripción o si abandonó en el paso del pago porque el sistema le pidió un dato que no tenía a la mano. Al configurar Mixpanel, puse especial énfasis en la **User Identity**. Articulé con el equipo de ingeniería un sistema de identificación que nos permitiera vincular eventos anónimos con perfiles registrados una vez que hacían login, garantizando una trazabilidad total del ciclo de vida del atleta dentro del ecosistema de AsDeporte. Esta decisión fue fundamental para poder segmentar después entre usuarios recurrentes y nuevos, un factor crítico para medir el éxito de la nueva arquitectura de información.

#### Dualidad estratégica: GA4 para la amplitud y GTM para la agilidad

No descarté a Google Analytics 4 (GA4), pero lo reubiqué estratégicamente. Lo configuré exclusivamente como un complemento para las métricas de adquisición y el comportamiento general del tráfico web. Mientras Mixpanel se encargaba de la profundidad del producto (el "dentro de la app"), GA4 se convirtió en mi centinela para la amplitud del embudo de marketing. Necesitaba saber con precisión de qué canales venían las instalaciones de la app y cómo se comportaban las fuentes de tráfico en la landing de registro. Esta dualidad me permitió tener lo mejor de ambos mundos: la potencia de atribución de Google y la potencia de análisis de comportamiento de Mixpanel.

Para gestionar todo este ecosistema sin asfixiar al equipo de ingeniería con peticiones constantes de cambios en el código, implementé **Google Tag Manager (GTM)** como nuestra capa de abstracción. El uso de contenedores de GTM fue una maniobra de agilidad pura. Me permitió, como responsable de la visión de producto, desplegar scripts de seguimiento, píxeles de marketing y herramientas de feedback de forma autónoma. Además, configuré GTM con una lógica de carga asíncrona para proteger el rendimiento de la plataforma; me aseguré de que la instrumentación no penalizara métricas de performance críticas como el *Largest Contentful Paint* (LCP) o el *First Input Delay* (FID). Un sistema de medición que ralentiza la experiencia del usuario es, por definición, un mal diseño.

#### Taxonomía forense: Definiendo los eventos M1 a M6

La parte más densa y satisfactoria de este proceso fue la definición de la taxonomía de eventos. No quería "ruido" en mis dashboards; quería señales claras. Diseñé una estructura de eventos basada en los módulos críticos que habíamos definido en la estrategia del MVP, asegurándome de que cada uno tuviera propiedades específicas que nos dieran contexto.

*   **M1 (Búsqueda y Descubrimiento):** Instrumenté eventos como `Evento_Visto`, `Busqueda_Realizada` y, crucialmente, `Filtro_Aplicado`. A este último le añadí las propiedades `tipo_filtro` y `valor_filtro`. Mi hipótesis era que los usuarios se perdían en la inmensidad del catálogo de AsDeporte, y necesitaba datos duros para saber si los filtros de "distancia" o "fecha" eran realmente los que ayudaban a reducir la carga cognitiva.
*   **M2 (Inscripción y Pago):** Este es el corazón transaccional. Mapeé cada paso: `Inicio_Flujo_Inscripcion`, `Paso1_Inscripcion_Completado` y `Paso2_Inscripcion_Completado`. Pero el evento más importante que configuré fue `Pago_Fallido`, con la propiedad `motivo_fallo`. Si un usuario llegaba hasta el final y su tarjeta era rechazada o el sistema daba un error de timeout, necesitaba saberlo al instante para diagnosticar si era un problema de UX o un fallo de la pasarela de pagos.
*   **M3 (Perfil de Usuario):** Rastreamos `Perfil_Visto`, `Perfil_Editado` y `Resultados_Personales_Vistos`. Esto nos daría la pauta de cuánto valor encontraban los atletas en la personalización y en el historial de sus logros, algo que en la versión anterior de la app era casi inexistente.
*   **M4 (Asdeporte Plus):** Para validar el modelo de suscripción, configuré `Hub_Plus_Visto` y `Descuento_Plus_Aplicado_Inscripcion`. Este último evento era mi KPI de "valor entregado": cada vez que alguien usaba su membresía para ahorrar en una carrera, el producto estaba cumpliendo su promesa de negocio.
*   **M5 (Info de Evento):** Con `Detalle_Evento_Visto` y `Clic_Info_Tecnica_Evento`, buscaba entender qué información era la que realmente gatillaba la decisión de compra. ¿Eran las fotos, el mapa de la ruta o el reglamento?
*   **M6 (Notificaciones):** Implementé `Notificacion_Recibida` y `Notificacion_Abierta` con la propiedad `tipo_notificacion`. Necesitaba calibrar nuestra agresividad comunicativa; no quería que los usuarios desactivaran las notificaciones por exceso de ruido.

#### Funnels de conversión y el pulso de la salud del producto

Una vez que los eventos empezaron a fluir, construí los embudos de conversión en Mixpanel. El más crítico fue el **Funnel de Inscripción**: desde que el usuario ve el detalle de un evento hasta que dispara el evento `Inscripcion_Completada`. Ver la caída porcentual entre el `Intento_Pago` y el éxito final fue una revelación inmediata sobre la fricción técnica y psicológica de soltar el dinero. También configuré el **Funnel de Búsqueda a Inscripción** para medir la eficiencia de nuestro motor de descubrimiento.

Para el día a día, diseñé un **Dashboard General de Salud del Producto**. No me interesaban las "vanity metrics". Me enfoqué en el pulso real:
*   **MAU, WAU y DAU:** Para entender la recurrencia y el tamaño de la comunidad activa.
*   **Tasas de Retención (D1, D7, D30):** El indicador definitivo de si el producto es "pegajoso". Si un usuario se registra y no vuelve a los 7 días, algo en la propuesta de valor está fallando.
*   **Dashboard de Engagement:** Tiempo promedio de sesión y uso de funcionalidades clave como el Hub Plus.
*   **Dashboard de Conversión:** El termómetro del negocio, mostrando las tasas de éxito de los funnels principales en tiempo real.

#### Visualizando la fricción: El despliegue de Hotjar

El análisis cuantitativo de Mixpanel me decía *qué* estaba pasando, pero me faltaba el *cómo*. Para cerrar esa brecha, configuré **Hotjar** en páginas estratégicas: la Home, el Listado de Eventos, el Detalle de Evento y, fundamentalmente, el primer paso del flujo de inscripción. 

No activé grabaciones en toda la plataforma para no comprometer la privacidad ni el rendimiento innecesariamente. Fui quirúrgico. Quería ver los "rage clicks" (esos clics frustrados y repetitivos en un botón que no reacciona) y los mapas de calor de scroll. Mi sospecha era que en el móvil, mucha información vital de las carreras quedaba "bajo el pliegue" y los usuarios nunca llegaban a verla. Hotjar se convirtió en mi herramienta forense visual para identificar abandonos inexplicables que los números de Mixpanel solo me mostraban como una caída en el embudo.

#### El rigor de la data como material de diseño

Mirando hacia atrás, esta fase de instrumentación fue un ejercicio de responsabilidad ética y estratégica. Como diseñador senior, entiendo que mi trabajo no termina en los píxeles, sino en la validación de esos píxeles en el mundo real. Establecer una arquitectura de datos robusta desde el día 1 me permitió blindar al equipo contra la toma de decisiones basada en intuiciones o en el "sesgo del stakeholder más ruidoso". 

Tener esta infraestructura lista antes del tráfico masivo nos dio una ventaja competitiva enorme: nos permitió detectar fallos críticos antes de que se convirtieran en crisis de reputación y, lo más importante, nos dio la humildad necesaria para aceptar que el usuario siempre encuentra formas de usar el producto que nosotros nunca imaginamos. Estábamos listos para observar, aprender y, sobre todo, para pivotar con evidencia en la mano.

**Próximo paso:**

Con la infraestructura cuantitativa funcionando como un reloj suizo, empecé a notar algo inquietante en los dashboards: los usuarios llegaban al flujo de inscripción, pero un porcentaje significativo se detenía abruptamente en el primer formulario. Los números me decían que había una fuga, pero no me explicaban el sentimiento de frustración o la duda específica que los frenaba. Fue en ese momento cuando me di cuenta de que los datos fríos no eran suficientes y que necesitaba activar de inmediato los canales cualitativos para escuchar la voz real de los atletas antes de que el abandono se convirtiera en la norma.

### Parte 2: CANALES CUALITATIVOS Y CENTRALIZACIÓN DEL FEEDBACK

#### El síntoma sin la enfermedad: por qué los números no bastaban

Los dashboards de Mixpanel me daban el "qué", pero me dejaban a ciegas sobre el "porqué". Podía ver con una precisión quirúrgica cómo el embudo de inscripción se desangraba en el paso del pago, pero los datos cuantitativos son, por naturaleza, silenciosos. Sabía que los atletas abandonaban, pero no sabía si era por desconfianza en la pasarela, por un campo de formulario confuso o por un error técnico que mi entorno de staging no había detectado. Como diseñador, entendí que los datos cuantitativos son el esqueleto del producto, pero el feedback cualitativo es el sistema nervioso: sin él, no puedes sentir dónde le duele al usuario.

Para remediar esto, mi prioridad fue activar una infraestructura de "escucha activa" que humanizara esas métricas frías. No quería esperar a que el NPS bajara al final del trimestre; necesitaba capturar la frustración y el deleite en el momento exacto en que ocurrían. Mi estrategia fue triangular la información: si Mixpanel me decía dónde estaba el incendio, los canales cualitativos me dirían qué lo había provocado.

#### Capturando el "afterglow": la implementación de encuestas CSAT

Decidí que el mejor momento para preguntar no es cuando el usuario está en medio de una tarea crítica, sino justo después de completarla. Implementé encuestas de satisfacción (CSAT) utilizando Hotjar Surveys, configuradas para dispararse exclusivamente cuando el atleta llegaba a la pantalla de "Inscripción Exitosa". 

Elegí este punto porque es cuando el usuario tiene la experiencia más fresca y el sentimiento de logro es alto, lo que paradójicamente los hace más propensos a señalar pequeñas fricciones que "perdonaron" para lograr su objetivo. Limité la encuesta a dos preguntas breves: una escala numérica de satisfacción y un campo abierto para comentarios. Mi razonamiento técnico fue simple: si el proceso fue fluido, quería saber qué parte fue la más sencilla; si hubo fricción, quería que me describieran el obstáculo con sus propias palabras mientras todavía lo tenían en mente.

#### La válvula de escape: puntos de contacto permanentes

Más allá de las encuestas contextuales, necesitaba un canal que no fuera interruptivo. Colocamos botones discretos de "Enviar Feedback" en el pie de página de la versión web y dentro del menú de configuración en la app móvil. Estos botones enlazaban a un formulario de Typeform diseñado para ser una "válvula de escape". 

No forzábamos al usuario a responder; dejábamos que ellos vinieran a nosotros cuando sentían que algo no funcionaba o cuando tenían una sugerencia de mejora. Esta decisión estratégica me permitió capturar hallazgos que no estaban mapeados en mis flujos principales, como ideas para nuevos filtros de búsqueda o problemas de visualización en modelos de teléfonos específicos que no habíamos considerado en el diseño inicial.

#### AppFollow y el análisis forense de las tiendas

Las reseñas en la App Store y Google Play son, a menudo, el primer lugar donde un fallo crítico se hace público. Para no depender de revisiones manuales esporádicas, establecí un proceso de monitorización diaria utilizando AppFollow. Configuré alertas inmediatas para cualquier reseña de 1 o 2 estrellas. 

Esto no era una tarea de relaciones públicas, sino un ejercicio de diseño forense. Cuando un usuario dejaba una reseña negativa mencionando que la app se cerraba al intentar subir su certificado médico, yo recibía la notificación en tiempo real. Esto me permitía cruzar esa queja con los logs de errores y entender si el problema era el peso del archivo, el formato o una inconsistencia en el componente de carga que diseñé. Las tiendas de apps se convirtieron en nuestro sistema de alerta temprana para problemas de compatibilidad que el equipo de QA no podía replicar en laboratorio.

#### Transformando el soporte técnico en inteligencia de producto

Uno de los movimientos más efectivos que realicé fue sentarme con el equipo de Soporte al Cliente para reestructurar su taxonomía en Zendesk. Históricamente, los tickets se categorizaban de forma genérica ("Error en la app", "Duda de pago"), lo cual era inútil para el equipo de producto. 

Articulé una nueva jerarquía de etiquetas bajo la categoría principal "Nueva Plataforma Digital". Creamos subcategorías específicas basadas en los flujos que yo mismo había diseñado:
*   **Problema Búsqueda Evento:** Para cuando los filtros no arrojaban los resultados esperados.
*   **Error Pago Web:** Para identificar fallos específicos en la pasarela o confusión con los campos de tarjeta.
*   **Duda Beneficio Plus:** Para medir si la propuesta de valor de la suscripción premium era clara o si el diseño del "Hub Plus" estaba fallando en comunicar los descuentos.

Esta colaboración convirtió a los agentes de soporte en mis ojos y oídos, transformando cada queja en un dato estructurado que podíamos cuantificar al final de la semana.

#### Dovetail: el cerebro centralizado de la experiencia

Tener feedback disperso en Zendesk, Typeform, AppFollow y Hotjar es casi tan malo como no tener feedback. Para resolver esto, adopté Dovetail como nuestro repositorio central de inteligencia cualitativa. Empecé a importar todas las transcripciones, comentarios y reseñas a esta plataforma para realizar un análisis temático robusto.

Utilicé un sistema de *tagging* (etiquetado) para identificar patrones recurrentes. Si en una semana veía diez menciones sobre la dificultad de encontrar el botón de "Resultados", creaba un tag de "Descubribilidad - Resultados". Dovetail me permitió realizar análisis de sentimiento y, lo más importante, crear clips de video o citas directas que podía presentar a los stakeholders. No es lo mismo decir "los usuarios se quejan del login" que mostrar un video de un usuario real frustrado porque el teclado tapa el campo de contraseña. Esta herramienta eliminó la subjetividad de mis decisiones de diseño: ya no era mi opinión contra la de alguien más, eran los patrones de uso documentados y centralizados.

#### Escucha social y detección de incendios

Finalmente, cerramos el ecosistema con una capa de escucha social. Aunque el equipo de marketing gestionaba las redes, configuramos alertas en Brandwatch para menciones específicas relacionadas con la usabilidad de la nueva plataforma en Facebook, Instagram y X. 

Aprendí que los atletas suelen reportar "caídas" del sistema o errores de carga en redes sociales mucho antes de abrir un ticket de soporte. Esta monitorización nos permitió detectar un fallo en la carga de mapas de rutas durante un evento masivo en vivo, dándonos una ventana de respuesta de minutos antes de que el problema escalara a una crisis de reputación. Al integrar esta capa, completamos un sistema de 360 grados donde ninguna voz, por pequeña que fuera, quedaba fuera de nuestro radar.

**Próximo paso:**

Con los canales de escucha funcionando y Dovetail empezando a llenarse de evidencia, no tardé mucho en ver el primer patrón crítico: una oleada de tickets y reseñas negativas provenientes exclusivamente de usuarios de Android. Al cruzar los comentarios cualitativos con los embudos de Mixpanel, identifiqué un punto de ruptura catastrófico que amenazaba la estabilidad del lanzamiento. Sabía que no podíamos esperar al próximo ciclo de desarrollo; necesitábamos una respuesta forense inmediata para detener la sangría de usuarios antes de que el daño fuera irreversible.

### Parte 3: MONITORIZACIÓN ACTIVA Y RESPUESTA TEMPRANA (HOTFIXES)

El silencio que sigue a un lanzamiento masivo es engañoso; dura apenas unos minutos antes de que los primeros miles de eventos empiecen a inundar Mixpanel. Entre el 16 y el 30 de abril de 2025, mi rol dejó de ser el de un arquitecto de interfaces para convertirme en un operador de centro de mando. Teníamos un producto vivo en las manos de miles de atletas y, aunque las pantallas se veían impecables en Figma, mi verdadera responsabilidad empezaba ahora: asegurar que el flujo de conversión no se desangrara en el mundo real. No basta con diseñar experiencias hermosas; un **Product Designer** senior debe ser capaz de diagnosticar por qué un usuario abandona una transacción en menos de 48 horas, antes de que el impacto financiero sea irreversible.

#### El rugido de los datos reales

Durante las primeras 72 horas, mi atención estuvo clavada en los dashboards de **GA4** y **Mixpanel** que habíamos instrumentado semanas atrás. La primera señal fue de un optimismo cautelador: las instalaciones y el volumen de usuarios registrados diariamente estaban escalando un 15% por encima de nuestras proyecciones más agresivas. El MAU (Usuarios Activos Mensuales) creció un 10% casi de inmediato. Sin embargo, en este oficio, un éxito repentino suele venir acompañado de una presión proporcional sobre la infraestructura.

Mientras celebrábamos la tracción inicial, empecé a notar que los sistemas de soporte y los canales de feedback cualitativo que configuramos en **Dovetail** y **Zendesk** empezaban a saturarse. Mi razonamiento en ese momento fue puramente táctico: necesitaba filtrar el ruido del éxito para encontrar las señales de fallo. No buscaba felicitaciones, buscaba fricción. Sabía que, con ese volumen de tráfico, cualquier error por pequeño que fuera se magnificaría exponencialmente, y no tardé en encontrar la primera anomalía crítica.

#### La anomalía del 25%: anatomía de un embudo roto

Siguiendo mi rutina de monitorización diaria, identifiqué un patrón alarmante en el embudo de inscripción de la aplicación. Al comparar el rendimiento por plataforma, los datos revelaron una disparidad que no podía ignorarse: mientras que en iOS y Web la tasa de caída entre el "Paso 2: Revisión del Pedido" y el "Paso 3: Pago Seguro" se mantenía en un saludable 8%, en **Android** la cifra se disparaba a un catastrófico 25%.

Un cuarto de nuestros usuarios potenciales en Android se desvanecía justo antes de pagar. Esta es la parte del trabajo que no se enseña en los cursos de diseño: el análisis forense de un *funnel drop-off*. Mi primera hipótesis fue un error de *layout* o un botón que no respondía en ciertos tamaños de pantalla, pero la consistencia de la caída sugería algo más profundo, algo sistémico que estaba bloqueando la intención de compra en el último segundo.

#### Correlación forense: el caso del Banco Santander

Para resolver el misterio del 25%, apliqué una maniobra de correlación cruzada entre lo cuantitativo y lo cualitativo. Fui directamente a los repositorios de feedback que habíamos centralizado. Al filtrar los tickets de soporte y las menciones en redes sociales específicamente para usuarios de Android en ese rango de fechas, el patrón emergió con una claridad brutal.

Varios usuarios reportaban errores genéricos y cierres inesperados de la aplicación al intentar procesar pagos con tarjetas de débito de **Banco Santander**. El dato cuantitativo me había dicho *qué* estaba pasando (la caída masiva), pero el feedback cualitativo me dio el *porqué* (un fallo de integración o de la API de pagos con una entidad específica). 

> **Insight de Trinchera:** El diseño no termina en el botón de "Pagar". Si la respuesta del sistema ante un error de red o una validación bancaria es un cierre inesperado de la app, el diseño ha fallado en su misión de dar seguridad al usuario. La interfaz puede ser perfecta, pero la experiencia es nula si el dinero no fluye.

Esta correlación me permitió saltar la cadena de mando habitual y llevar el hallazgo directamente a Ingeniería con una causa raíz probable, ahorrando horas de investigación a los desarrolladores y permitiendo que el equipo se enfocara directamente en el *hotfix* de la pasarela de pagos.

#### Validaciones y pequeñas fisuras en iOS

No todo fueron incendios. La monitorización también nos permitió validar decisiones de diseño que habían sido polémicas durante la fase de prototipado. Por ejemplo, la nueva función de **Filtros Avanzados** en la búsqueda de eventos —que algunos stakeholders consideraban demasiado compleja— fue utilizada por el 60% de los usuarios. Lo más revelador fue que aquellos que interactuaron con los filtros tuvieron una tasa de conversión a "Clic en Resultado de Búsqueda" un 30% mayor que los que no los usaron. Esto confirmó que los atletas valoran la precisión sobre la simplicidad extrema cuando se trata de planificar su calendario deportivo.

Sin embargo, iOS también mostró sus propias debilidades. Detectamos un bug visual donde la nueva vista de calendario fallaba al cargar eventos si el usuario cambiaba de mes con demasiada rapidez. Era una microinteracción que no habíamos estresado lo suficiente en las pruebas de laboratorio pero que, bajo condiciones de uso real y latencia de red variable, creaba una percepción de inestabilidad.

Paralelamente, el feedback positivo empezó a consolidar nuestra dirección estética. Los usuarios elogiaban la interfaz "limpia y moderna" y, curiosamente, las "Guías para Principiantes" se convirtieron en uno de los activos más valorados en las reseñas de la App Store, validando nuestro enfoque de acompañamiento al atleta novato.

#### El triaje del backlog: priorizar la supervivencia

Hacia el final de estas dos primeras semanas, me senté con el Product Manager para realizar un ejercicio de triaje agresivo. Teníamos una lista creciente de hallazgos:
*   **Prioridad P0 (Urgente):** El error de Banco Santander en Android y el bug del calendario en iOS.
*   **Prioridad P1 (Mejora):** Dudas recurrentes sobre el funcionamiento del crédito en el "Wallet Asdeporte Plus".
*   **Prioridad P2 (Optimización):** Ajustes menores de UX Writing en las condiciones de servicio.

Tomé la decisión de blindar los recursos de ingeniería. Aunque el feedback sobre el "Wallet Plus" indicaba que las condiciones actuales no eran claras y requerían una mejora urgente de **UX Writing** o un FAQ más detallado, rechacé incluirlo en el ciclo inmediato de desarrollo. En un escenario post-lanzamiento, cada hora de un desarrollador es oro. Mi criterio fue claro: no vamos a pulir textos de una funcionalidad secundaria mientras tengamos una sangría de conversiones en la pasarela de pagos principal. 

La inteligencia continua no se trata solo de recopilar datos, sino de tener el carácter para decidir qué incendios apagar primero. Cerramos este primer bloque de dos semanas habiendo estabilizado los flujos críticos, pero con una lista de deseos de los usuarios que empezaba a dibujar un camino muy distinto al que habíamos planeado originalmente en el roadmap.

**Próximo paso:**

Con los errores críticos bajo control y los hotfixes en producción, la montaña de datos acumulados empezó a revelar patrones que iban más allá de simples bugs. Me di cuenta de que, aunque el MVP era estable, existían barreras estructurales —como el requisito del CURP y la falta de filtros de nicho— que estaban limitando nuestro techo de crecimiento. Sabía que era el momento de elevar la mirada del dashboard diario y ejecutar una síntesis mensual profunda para redefinir nuestras prioridades estratégicas antes de que el impulso del lanzamiento se agotara.

### Parte 4: SÍNTESIS MENSUAL Y RENDIMIENTO DE KPIS

#### La transición del modo incendio a la inteligencia de producto

Hacia mediados de mayo de 2025, el ruido constante de los reportes de errores críticos empezó a silenciarse. Habíamos sobrevivido a las primeras dos semanas de "modo bombero", donde el éxito se medía por la velocidad de despliegue de los hotfixes. Sin embargo, como responsable del diseño, sabía que la estabilidad técnica no era sinónimo de éxito de producto. Tenía frente a mí una montaña de datos acumulados en Mixpanel y GA4, junto a cientos de entradas en Dovetail que amenazaban con convertirse en un archivo muerto si no ejecutaba una **síntesis forense** inmediata.

Entré en la fase de **Análisis Periódico de Datos y Feedback** con una pregunta incómoda: ¿Realmente habíamos movido la aguja del negocio o solo habíamos maquillado una plataforma con problemas estructurales? Me alejé de los dashboards diarios para realizar el **Paso 3 de mi proceso de inteligencia continua**. Mi objetivo no era presentar un reporte de vanidad, sino triangular el comportamiento cuantitativo (lo que los usuarios hacían) con la voz cualitativa (lo que decían sentir) para validar mis hipótesis iniciales de diseño. Este fue el momento de dejar de reaccionar y empezar a diagnosticar con criterio estratégico.

#### El volumen de tracción y el diagnóstico de la retención

Lo primero que despejé fue el volumen bruto de actividad. Al consolidar los datos de Mixpanel, identifiqué que habíamos alcanzado los **125,000 Usuarios Activos Mensuales (MAU)**. Ver un crecimiento del 20% sobre la base histórica de AsDeporte fue un alivio inicial; confirmaba que la migración no había espantado a la comunidad y que el apetito por la nueva plataforma era real. Sumamos **15,000 nuevos registros** en apenas treinta días, lo que validaba que nuestra arquitectura de adquisición y el flujo de registro simplificado estaban funcionando como una red de captura eficiente.

Sin embargo, al profundizar en la **Tasa de Retención D30**, la realidad me dio un golpe de sobriedad. Registramos un **25% de retención**, situándonos cinco puntos por debajo de nuestro objetivo ideal del 30%. Analicé este dato no como un fallo, sino como un síntoma: estábamos ante un "leaky bucket". Mi diagnóstico fue que, aunque la primera impresión era potente, la plataforma aún carecía de esos ganchos de engagement a largo plazo que habíamos dejado para el post-MVP, como la integración avanzada de wearables o los componentes sociales de "Tribu". Los usuarios entraban, se inscribían y se iban. Teníamos transaccionalidad, pero aún no teníamos fidelidad recurrente.

#### Anatomía forense del funnel de inscripción

El corazón de la rentabilidad de AsDeporte es el funnel de inscripción, y aquí los datos contaron una historia de redención técnica. Logramos una **tasa de conversión promedio del 11.5%**, superando significativamente el 9.2% que nos habíamos fijado como meta de éxito. Pero el verdadero aprendizaje estaba en el desglose por plataforma:

*   **iOS lideró con un 14% de conversión**, demostrando que el flujo de 3 pasos que diseñé se sentía nativo y fluido en el ecosistema Apple.
*   **Web se mantuvo sólida en un 12%**, validando que la consistencia entre dispositivos no sacrificó la usabilidad en escritorio.
*   **Android cerró en un 9%**, un número que a simple vista parecía preocupante, pero que yo interpreté como una victoria. 

Ese 9% estaba lastrado por las primeras dos semanas de fallos con la pasarela de pagos de ciertos bancos. Al aislar los datos de la última semana tras el hotfix, la tendencia de recuperación era clara. Esta segmentación me permitió blindar al equipo de diseño ante críticas superficiales: el diseño del funnel era correcto; la fricción había sido técnica y ya estaba resuelta. Menos del 18% de los usuarios abandonaban el carrito, lo que confirmaba que el proceso final era lo suficientemente persuasivo para cerrar la venta.

#### Validación del motor de descubrimiento y el éxito de los filtros

Si algo me quitaba el sueño durante la fase de diseño era la complejidad del buscador. En el análisis mensual, los datos de Mixpanel confirmaron que mi apuesta por los **filtros avanzados** fue acertada: el **65% de las sesiones de búsqueda** utilizaron estas herramientas. No solo los usaban, sino que los valoraban. El **CSAT de la búsqueda alcanzó un 4.1/5**, una métrica que se correlacionaba directamente con los hallazgos en Dovetail, donde los usuarios mencionaban explícitamente que "encontrar carreras ahora es mucho más fácil".

Pero la síntesis cualitativa también reveló una grieta en mi armadura. A través de las reseñas capturadas en AppFollow y los tickets de Zendesk, detecté que los atletas de alto rendimiento (el nicho de Trail y Triatlón) empezaban a sentirse limitados. Sus comentarios sobre la falta de filtros por "tipo de terreno" o "puntos ITRA" (PU-01) me indicaron que el MVP había resuelto el problema para el corredor promedio, pero habíamos dejado desatendido al segmento que más gasta en la plataforma. La conversión de búsqueda a vista de evento fue del **45%**, cumpliendo el objetivo, pero sabía que ese número tenía un techo si no añadíamos granularidad para los expertos.

#### El impacto en la operación y el ecosistema Plus

Uno de los mayores triunfos de este primer mes fue la reducción de la carga operativa para AsDeporte. Al cruzar los datos de soporte, confirmamos una **reducción del 60% en errores de pago reportados** y un descenso del 25% en consultas sobre información básica de eventos. Esto no ocurrió por arte de magia; fue el resultado directo de priorizar la claridad en las fichas de evento y de introducir la opción de pago en Oxxo, que se convirtió en un factor de confianza crítico para los usuarios menos digitalizados.

En cuanto a **Asdeporte Plus**, los números validaron la creación del **Hub de Beneficios**. Registramos **3.1 visitas promedio por miembro**, y el uso de descuentos creció un 30%. Sin embargo, detecté una fricción persistente (PU-09) relacionada con el Wallet Plus. Los usuarios no entendían por qué su crédito no aplicaba a ciertos eventos de terceros. 

> **Insight de Diseño:** La transparencia no es solo mostrar la información, es mostrarla en el momento en que el usuario la necesita. Tener las condiciones del Wallet en una sección legal no servía de nada si en el checkout el usuario se sentía engañado. 

Decidí que debíamos intervenir el **UX Writing** y la interfaz de aplicación de créditos de forma inmediata. No podíamos permitir que una funcionalidad diseñada para generar lealtad terminara generando desconfianza por una falta de claridad contextual.

#### Reflexión sobre la correlación de hallazgos

Este análisis mensual me demostró que el diseño de producto en el mundo real es un ejercicio de humildad constante. Logramos hitos impresionantes en conversión y eficiencia de búsqueda, pero los datos también desnudaron las carencias de nuestra estrategia de retención. La correlación fue clara: los usuarios aman la nueva interfaz y la velocidad (cuantitativo), pero se sienten frustrados cuando les pedimos el CURP o cuando la información de eventos de terceros es pobre (cualitativo). 

Sintetizar estos hallazgos me permitió transformar una masa amorfa de feedback en una lista de prioridades para el backlog. Ya no estábamos diseñando basados en intuiciones, sino respondiendo a comportamientos observados en 125,000 personas. El MVP había pasado la prueba de fuego, pero el verdadero trabajo de refinamiento apenas comenzaba.

**Próximo paso:**

A pesar de los éxitos en conversión, la persistencia de ciertas quejas cualitativas empezó a proyectar una sombra sobre la métrica de retención. Me di cuenta de que no bastaba con saber *qué* estaba fallando; necesitaba entender la profundidad del daño que problemas como la obligatoriedad del CURP o la confusión con el Wallet estaban causando en la percepción de marca a largo plazo. Sentí que era el momento de bajar al detalle más oscuro y ejecutar un **Análisis de Causa Raíz e Impacto** para cuantificar cuántos usuarios estábamos perdiendo realmente por estas fricciones que, hasta ahora, habíamos considerado "menores".

### Parte 5: ANÁLISIS DE CAUSA RAÍZ E IMPACTO DE FRICCIONES

Los 125,000 usuarios activos mensuales (MAU) que registramos en este primer mes eran una cifra embriagadora, el tipo de número que suele desatar celebraciones prematuras en las salas de juntas. Sin embargo, mi experiencia me ha enseñado que el éxito agregado es el mejor escondite para los fallos sistémicos. Mientras el equipo de marketing celebraba el crecimiento del 20% sobre la base anterior, yo me sumergí en las grietas del comportamiento. Sabía que una tasa de conversión del 11.5% era una victoria táctica, pero la retención D30 del 25% —ligeramente por debajo de nuestro objetivo del 30%— me estaba enviando una señal de alerta silenciosa. 

Ignorar los síntomas cualitativos cuando los números cuantitativos brillan es el error más común en el diseño de producto senior. Me negué a aceptar el éxito superficial y decidí ejecutar un **Análisis de Causa Raíz (RCA)**. No quería simplemente saber *qué* estaba pasando; necesitaba entender la profundidad del daño que las fricciones "menores" estaban causando en la percepción de marca a largo plazo. Mi objetivo era transformar ese ruido disperso de tickets de soporte y reseñas en un mapa de impacto de negocio cuantificable que no permitiera excusas para la inacción.

#### La deuda de confianza: El caso del CURP (PU-03)

El primer punto de fricción que diseccioné fue la persistente incomodidad con la solicitud del CURP durante la inscripción. A pesar de que habíamos incluido microcopy explicativo, el problema no era de comprensión, sino de desalineación fundamental. Al cruzar los datos de Mixpanel con las 25 menciones críticas en Dovetail, diagnostiqué que la causa raíz era una ruptura en la jerarquía de privacidad: el usuario no percibía una correspondencia lógica entre correr una carrera de 5k y entregar un dato de identidad tan sensible.

Lo que descubrí al analizar el flujo fue alarmante desde la perspectiva de la eficiencia:
*   **Impacto en el flujo:** Los usuarios que se detenían a cuestionar o dudar en el campo del CURP presentaban un **incremento del 50% en el tiempo en tarea**. 
*   **Perfil afectado:** Esta fricción golpeaba con mayor fuerza a los perfiles "Principiante" y "Ocasional" (7 de cada 15 usuarios en pruebas de usabilidad), precisamente el segmento que más necesitábamos retener para hacer crecer la base.
*   **Riesgo de marca:** No era solo un campo de formulario; era una "deuda de confianza". Cada segundo de duda en ese campo erosionaba la percepción de seguridad de la plataforma.

Articulé este hallazgo no como una sugerencia de diseño, sino como un imperativo de negocio. Si el requisito legal era inamovible, la solución no podía ser solo más texto; necesitábamos una intervención de **UX Writing** que transformara el "requisito" en un "beneficio de seguridad" (seguro médico, validación de categoría), o bien, presionar a Negocio y Legal para que el dato fuera opcional en eventos de baja complejidad.

#### El riesgo de los usuarios de alto valor (PU-01)

Al analizar la búsqueda, me encontré con una paradoja: el CSAT era de un sólido **4.1/5** y el 65% de las sesiones usaban filtros, pero el feedback de los atletas de Trail y Triatlón avanzado era mordaz. Aquí, la causa raíz fue una decisión de compromiso que tomamos durante el desarrollo del MVP: priorizamos filtros generales para asegurar el lanzamiento, dejando la lógica hiper-específica para después. 

El impacto de este "ahorro" técnico inicial empezó a pasar factura:
*   **Segmento crítico:** Recibimos 15 menciones específicas de usuarios Plus y atletas frecuentes. Estos no son usuarios promedio; son los líderes de opinión que traccionan la reputación de AsDeporte en la comunidad.
*   **Fricción detectada:** La falta de filtros como "Tipo de Terreno" para Trail o "Drafting Permitido" para Triatlón obligaba a estos usuarios a abandonar la plataforma para buscar detalles en los sitios de los organizadores originales.
*   **Pérdida de autoridad:** Al no ofrecer esta granularidad, estábamos fallando en nuestra promesa de ser la "plataforma integral". 

Mi diagnóstico fue claro: aunque el usuario general estaba satisfecho, estábamos alienando a nuestro segmento más rentable y leal. La "deuda de diseño" en los filtros de nicho estaba comprometiendo la propuesta de valor para los *power users*.

#### Transparencia interrumpida en el Wallet Plus (PU-09)

El programa Asdeporte Plus mostró un incremento del 30% en el uso de descuentos, lo cual es excelente, pero el análisis de los 8 tickets de soporte sobre el Wallet reveló una falla de visibilidad contextual. Los miembros no tenían claro si su crédito aplicaba para eventos masivos como el Maratón Internacional o solo para eventos propios. 

Al realizar el análisis de causa raíz, identifiqué que la información, aunque existía en los términos y condiciones, estaba ausente en el momento crítico de la decisión: la vista del evento.
*   **Causa Raíz:** Falta de **UX Writing** contextual y ejemplos claros de aplicabilidad.
*   **Impacto:** Subutilización de uno de los beneficios más costosos de mantener para la empresa y saturación innecesaria de los canales de soporte.
*   **Maniobra propuesta:** Inyectar transparencia mediante indicadores visuales en el flujo de compra que confirmen, en tiempo real, si el Wallet es aplicable al carrito actual. No se trataba de rediseñar el Wallet, sino de hacerlo "hablar" en el momento justo.

#### El punto ciego de la información de terceros

Uno de los hallazgos más incómodos fue la frustración de los usuarios ante la información incompleta de eventos organizados por terceros. Recibimos 10 menciones de usuarios que, tras no encontrar datos suficientes en nuestra app, tuvieron que recurrir a Google. La causa raíz aquí es técnica y operativa: nuestro proceso de **B2B Data Ingestion** (la carga de datos por parte de organizadores externos) no estaba optimizado para la nueva estructura de la plataforma.

Este es un problema clásico de "percepción de responsabilidad": el usuario no distingue entre un evento de AsDeporte y uno de un tercero; para ellos, si está en nuestra app y la información es pobre, la culpa es nuestra. Este hallazgo reveló que nuestro MVP B2C tenía un punto ciego crítico en su dependencia de la calidad de datos B2B, lo que ponía en riesgo la visión de "ventanilla única" que defendimos en el brief inicial.

#### Wearables: De la curiosidad a la exigencia (PU-10)

Finalmente, analicé la baja adopción inicial de la integración con wearables, que se situó en un **3%** (lejos de nuestro objetivo del 10%). Al profundizar en el feedback de Dovetail, la causa raíz saltó a la vista: la integración básica del MVP —que solo mostraba "actividad reciente"— no cumplía con el modelo mental del atleta tecnológicamente hábil.

*   **Expectativa vs. Realidad:** Los usuarios avanzados no querían un espejo de su actividad; querían una **sincronización bidireccional profunda**. Preguntaban cuándo podrían subir automáticamente sus resultados de carreras de AsDeporte a Strava o Garmin.
*   **Redefinición del Roadmap:** Este hallazgo transformó la integración de wearables de una "funcionalidad deseable" (Should Have) a una necesidad estratégica para el engagement. Sin una conexión profunda, la app de AsDeporte seguía siendo una herramienta de transacciones, no una compañera de entrenamiento.

> El análisis de causa raíz me permitió quitarle la máscara a los buenos números. Descubrí que la retención no estaba fallando por un error catastrófico, sino por la acumulación de pequeñas "cicatrices de desconfianza" y expectativas no cumplidas en los segmentos de mayor valor. Mi labor ahora no era solo proponer cambios estéticos, sino priorizar estas intervenciones basándome en cuánto oxígeno le estaban quitando a la retención de nuestros usuarios.

**Próximo paso:**

Con este mapa forense de fricciones y sus impactos cuantificados, la complacencia del primer mes se evaporó. Ya no teníamos una lista de "sugerencias", sino un inventario de riesgos estratégicos que amenazaban la sostenibilidad del producto. El desafío inmediato era sentarme con los líderes de Producto e Ingeniería para decidir qué incendios apagar primero. Sabía que la siguiente batalla no sería de diseño, sino de **Priorización Estratégica**, donde tendría que defender el valor de la experiencia frente a las limitaciones de capacidad técnica para decidir qué entraría en el próximo ciclo de evolución del backlog.

### Parte 6: PRIORIZACIÓN ESTRATÉGICA Y EVOLUCIÓN DEL BACKLOG

#### El peso de decidir qué incendios apagar primero

Tener un diagnóstico preciso es solo la mitad de la batalla; la otra mitad, mucho más política y estratégica, es decidir qué vamos a ignorar por ahora. Al cerrar el primer mes de monitorización, me encontré con una lista de hallazgos que, aunque valiosos, amenazaban con desbordar nuestra capacidad operativa si no aplicaba un criterio de priorización implacable. Los datos cuantitativos de Mixpanel y el feedback cualitativo de Zendesk estaban sobre la mesa, pero mi labor en este punto no era solo presentar problemas, sino articular una hoja de ruta que equilibrara el ROI de negocio con la cordura técnica.

Entré en la fase de **Priorización de Hallazgos (Paso 3.5)** sabiendo que cada "sí" a una mejora era un "no" a una funcionalidad del roadmap original. Mi razonamiento fue claro: no podíamos permitir que las fricciones del MVP se convirtieran en cicatrices permanentes en la experiencia del usuario. Si un atleta de Spartan Race sentía desconfianza al registrarse o un miembro de Asdeporte Plus no entendía cómo usar su dinero, estábamos fallando en la promesa básica de la plataforma. Por eso, dividí el plan de acción en tres frentes: victorias rápidas para blindar la confianza, investigaciones para el crecimiento y apuestas estratégicas de retención.

#### La cirugía de urgencia: CURP y Wallet Plus

Las dos prioridades más críticas que identifiqué —etiquetadas internamente como **PU-03** y **PU-09**— no requerían grandes desarrollos de ingeniería, sino una intervención profunda de UX Writing y alineación estratégica. El tema del CURP (PU-03) era particularmente espinoso. Los datos mostraban que los usuarios tardaban un 50% más en completar el flujo de inscripción cuando llegaban a este campo, y las 25 menciones cualitativas hablaban de una "aprensión al dato sensible". 

Mi maniobra aquí no fue simplemente proponer cambiar un texto, sino forzar una **sesión de trabajo con los equipos de Legal y Negocio**. Cuestioné la obligatoriedad del dato: ¿Es realmente indispensable para el seguro del atleta en todos los niveles, o estamos pidiendo información por inercia burocrática? Mi propuesta fue radicalmente pragmática: si no es indispensable, lo hacemos opcional; si lo es, el microcopy debe dejar de ser una etiqueta técnica para convertirse en una explicación de beneficio ("Lo necesitamos para que tu seguro de accidentes sea válido"). Esta es una de esas decisiones donde el diseño se convierte en diplomacia para reducir la fricción sin comprometer la seguridad jurídica.

Por otro lado, el **Wallet de Asdeporte Plus (PU-09)** presentaba un problema de visibilidad contextual. Teníamos 10 menciones directas de usuarios que no sabían cómo o cuándo se aplicaba su crédito. Mi decisión estratégica fue mover la explicación de las condiciones del Wallet fuera de los términos y condiciones generales y llevarla al **Hub de Beneficios** y al flujo de pago. Propuse:
*   Rediseñar el componente de visualización del Wallet con ejemplos claros de aplicabilidad.
*   Implementar un FAQ dinámico dentro del Hub Plus.
*   Añadir información contextual justo antes de que el usuario seleccione su método de pago para que el beneficio se sienta real y no una promesa abstracta.

> Estas acciones de alta prioridad tenían un esfuerzo estimado bajo-medio, pero un impacto directo en la reducción de tickets de soporte y en la percepción de valor de nuestra suscripción premium.

#### Atendiendo a la élite: Filtros de nicho e inscripciones grupales

Una vez estabilizados los pilares de confianza, me enfoqué en las oportunidades de crecimiento que el mercado nos estaba gritando. Aunque el CSAT de búsqueda era un sólido 4.1/5, el feedback de los atletas de nicho (Trail y Triatlón avanzado) revelaba una oportunidad perdida (**PU-01**). Estos usuarios, que son los que más gastan y más engagement generan, pedían filtros hiper-específicos. 

Decidí elevar la prioridad de añadir filtros como "Tipo de Terreno" para Trail o "Drafting Permitido" para Triatlón. Sabía que esto implicaba un coste medio-alto por la lógica de datos necesaria, pero mi razonamiento fue defensivo: si no atendemos al usuario avanzado, le estamos abriendo la puerta a la competencia especializada. No es solo UI; es una declaración de que AsDeporte entiende la complejidad de cada disciplina.

Simultáneamente, detecté una demanda recurrente (12 solicitudes cualitativas en 30 días) para las **Inscripciones Grupales**. Esta funcionalidad no estaba en el radar del MVP, pero representaba una oportunidad de negocio masiva para aumentar el volumen de transacciones en un solo flujo. Mi recomendación para el backlog no fue "diseñar la función", sino iniciar una **fase de descubrimiento específica**. Necesitábamos entender si el usuario quería pagar por todos, si quería enviar invitaciones de pago o si era un modelo de "equipo". Propuse entrevistas en profundidad con los líderes de clubes de corredores para definir los requisitos antes de tirar una sola línea de código.

#### El horizonte de los Wearables: Del MVP a la simbiosis

El análisis del primer mes también puso a prueba nuestras hipótesis sobre la integración de tecnología vestible (**PU-10**). Con una adopción inicial de apenas el 3%, estaba claro que la integración básica del MVP no era suficiente para entusiasmar al usuario avanzado. Las expectativas estaban puestas en la sincronización automática de resultados con Strava o Garmin.

Mi maniobra aquí fue de **gestión de expectativas y planificación de roadmap**. En lugar de entrar en pánico por la baja adopción, articulé un plan para el próximo trimestre. La integración básica nos sirvió para establecer el "túnel" de datos; ahora, el siguiente paso lógico es la bidireccionalidad. Decidí que esta tarea debía mantenerse en prioridad media para el desarrollo, pero alta para la monitorización de feedback, asegurándome de que ingeniería tuviera los requerimientos técnicos listos para cuando el ciclo de desarrollo permitiera atacar integraciones de alta complejidad.

#### Cierre del ciclo: El producto como organismo vivo

La culminación de esta actividad no fue el informe en sí, sino la **sesión de alineación con los stakeholders (Paso 4)**. Presentar el "Resumen Ejecutivo de Grado Industrial" fue el momento de la verdad. No presenté una lista de errores, sino un inventario de oportunidades validadas por el uso real. Ver cómo el Product Manager traducía mis hallazgos en historias de usuario en Jira y cómo el equipo de Marketing ajustaba su comunicación basándose en lo que descubrimos sobre el CURP, fue la validación definitiva de nuestro sistema de Inteligencia Continua.

Al final de este proceso, el backlog de AsDeporte ya no era una lista de deseos basada en suposiciones, sino una hoja de ruta blindada por datos. Mi reflexión como diseñador es que el lanzamiento no es la meta, sino el disparo de salida. El éxito del MVP no se mide por lo que entregamos el primer día, sino por nuestra capacidad de escuchar, procesar y reaccionar a lo que el mundo real nos devuelve. 

Con el backlog actualizado y los equipos alineados, cerramos este ciclo de post-lanzamiento. La plataforma ya no es un proyecto de diseño en Figma; es un ecosistema vivo que respira a través de sus métricas y habla a través de sus usuarios. Mi trabajo ahora es asegurar que este ritmo de aprendizaje no se pierda y que cada iteración nos acerque más a esa "grandeza" que prometimos al inicio del proyecto. El sistema de inteligencia está encendido, los canales están abiertos y el camino hacia la versión 2.0 está trazado.