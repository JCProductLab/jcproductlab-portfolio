Respuestas de la Entrevista: Equipo de Producto / Gestión de Producto de
AsDeporte

Este documento recopila las respuestas proporcionadas durante la entrevista simulada
con el representante del Equipo de Producto/Gestión de Producto de AsDeporte,
basadas en el análisis integral de la empresa.

(5-20 min) Visión del Producto Digital y Alcance Inicial

●  ¿Cómo describirías la visión específica para la plataforma digital en sí? ¿Cuál es el

estado ideal que buscamos alcanzar con este producto?
Nuestra visión para esta nueva plataforma digital es que se convierta en el centro
neurálgico del ecosistema deportivo de resistencia en México. No queremos ser
solo un portal de inscripciones, sino la plataforma a la que acuden los atletas para
descubrir eventos, conectarse con otros deportistas, seguir su progreso y sentirse
parte de una comunidad activa. Para los organizadores, buscamos ser el socio
tecnológico indispensable que les facilite la gestión de sus eventos y les
proporcione insights valiosos. El estado ideal es una plataforma que sea intuitiva,
robusta, escalable y que fomente la lealtad y el compromiso tanto de atletas como
de organizadores, consolidando nuestra posición de liderazgo y permitiéndonos
explorar nuevas oportunidades de crecimiento. Queremos que la experiencia digital
refleje la calidad y la pasión que ponemos en la organización de nuestros eventos
físicos.

●  El brief presenta un alcance inicial para el MVP. ¿Cómo se llegó a esta definición
del MVP? ¿Cuáles fueron los principales criterios de inclusión/exclusión en este
alcance inicial?
La definición del MVP se basó en varios criterios clave, principalmente:
1.  Abordar los Puntos de Dolor Críticos: Priorizamos las funcionalidades que

resuelven los problemas más reportados por los usuarios en nuestras
plataformas actuales, especialmente la usabilidad de la app móvil (dificultad
para encontrar eventos, proceso de inscripción, acceso a información).
2.  Valor Esencial para B2C y B2B: Incluimos las funcionalidades mínimas

necesarias para que tanto los atletas puedan encontrar e inscribirse a eventos
de manera efectiva, como para que los organizadores externos puedan listar y
gestionar lo básico de sus eventos a través de nuestra plataforma.
3.  Diferenciación Clave: Nos aseguramos de incluir elementos que

consideramos diferenciadores importantes, como una versión mejorada de la
función "Tribu" y una integración clara con Asdeporte Plus, que son pilares de
nuestra estrategia de comunidad y lealtad.

4.  Viabilidad Técnica y Plazo: Consideramos lo que es realista construir y lanzar

en un plazo inicial razonable, trabajando de la mano con el equipo de
Tecnología para entender las complejidades.

5.  Base para Futuras Iteraciones: El MVP está diseñado para ser una base
sólida sobre la cual podamos construir funcionalidades más avanzadas en
fases posteriores.

Los criterios de exclusión se basaron principalmente en lo que, aunque deseable,
no es estrictamente necesario para que la plataforma sea funcional y empiece a
generar valor. Funcionalidades muy avanzadas de análisis B2B, gamificación
compleja o integraciones secundarias se dejaron para después para asegurar un
lanzamiento más rápido y enfocado.

●  Dentro de las funcionalidades clave del MVP listadas, ¿hay alguna que consideres
de mayor prioridad que otras para el lanzamiento inicial? ¿Por qué? (Ej. búsqueda
y registro, perfil de usuario, funciones B2B básicas, Tribu renovada).
Si tuviera que priorizar dentro del MVP, pondría el foco principal en la exploración,
búsqueda y registro de eventos para el atleta (B2C). Esta es la funcionalidad
central y el principal punto de interacción para la mayoría de nuestros usuarios.
Resolver los problemas actuales en este flujo es crítico para mejorar la experiencia
y aumentar las conversiones.
Inmediatamente después, priorizaría la gestión del perfil de usuario (para que
sea fácil acceder a inscripciones, resultados, etc.) y el módulo básico para
organizadores (B2B). Necesitamos que los organizadores puedan empezar a
usar la nueva plataforma para listar sus eventos y ver sus inscripciones para que el
ecosistema funcione.
La función "Tribu" y la integración con Asdeporte Plus y wearables son muy
importantes estratégicamente para la comunidad y la lealtad, pero la capacidad de
encontrar e inscribirse a un evento es la base sobre la que todo lo demás se
construye.

●  ¿Hay alguna funcionalidad que no esté en la lista del MVP, pero que consideres
crítica o de muy alto valor para fases futuras y que deberíamos tener en cuenta
desde ahora en la arquitectura o el diseño base?
Sí, definitivamente. Creemos que las funcionalidades avanzadas de análisis y
reporting para organizadores (Race Insights mejorado) son de altísimo valor a
futuro. Nuestro activo de datos es una gran fortaleza, y poder ofrecer insights más
sofisticados a nuestros clientes B2B puede ser un diferenciador clave. Si bien no
es para el MVP, la arquitectura de datos y la estructura de la plataforma deberían
diseñarse pensando en la capacidad de recopilar, procesar y presentar estos datos
de manera escalable en el futuro.
También, aunque mencionada como futura, una integración más profunda y
fluida con sistemas de terceros (más allá de lo básico para el MVP) para
organizadores que ya tienen sus propias herramientas podría ser muy valiosa para

atraer a un segmento más amplio del mercado B2B.

●  ¿Cómo encaja esta nueva plataforma en la hoja de ruta general de productos de

AsDeporte? (Si existe un roadmap).
Esta nueva plataforma digital integral es el corazón de nuestra hoja de ruta de
productos a mediano plazo. Representa la modernización y consolidación de
nuestra principal herramienta de interacción con usuarios y clientes. Encaja como
la base sobre la cual construiremos futuras iniciativas, como la expansión de
servicios B2B, posibles nuevos modelos de monetización, y la mejora continua de
la experiencia del atleta. Esencialmente, es la infraestructura digital que nos
permitirá ejecutar nuestra estrategia de crecimiento y fortalecimiento de la
comunidad en los próximos años. Sustituye y mejora nuestras plataformas actuales
para darnos una base tecnológica más sólida y flexible.

(20-35 min) Requisitos Funcionales y de Usuario - Detalle del MVP

●  Para la exploración, búsqueda y filtrado de eventos, ¿qué consideras que es lo
más importante que debe mejorar respecto a la experiencia actual para que sea
realmente intuitiva y eficiente para los atletas?
Lo más importante es simplificar el proceso y mejorar la relevancia de los
resultados. Actualmente, hemos recibido feedback de que a los usuarios les cuesta
encontrar eventos específicos o filtrar por criterios que les interesan. Necesitamos
que la búsqueda sea rápida, con sugerencias inteligentes. Los filtros deben ser
claros y fáciles de usar (por deporte, ubicación, fecha, distancia, tipo de evento
como "carrera", "triatlón", "OCR", etc.). La visualización del calendario también
debe ser más intuitiva, quizás con diferentes vistas (lista, calendario visual).
Queremos que el usuario pueda encontrar su próximo evento ideal en pocos clics o
toques.

●  En el proceso de inscripción y pago, ¿cuáles son los puntos de dolor actuales que
sí o sí debemos resolver en el MVP? ¿Hay requisitos específicos de seguridad o
integración de pagos a tener en cuenta?
Los principales puntos de dolor son la complejidad del formulario de inscripción y la
claridad en el proceso de pago. A veces, los usuarios se frustran con la cantidad
de pasos o la información solicitada. Debemos hacerlo lo más ágil posible, quizás
precargando datos del perfil del usuario.
En cuanto a seguridad y pagos, es absolutamente crítico que el proceso sea
seguro y transmita confianza. Necesitamos integrar pasarelas de pago
confiables que ya operen en México y cumplir con todos los estándares de
seguridad de la industria para proteger los datos financieros de los usuarios. La
integración debe ser fluida y dar retroalimentación clara al usuario en cada paso.

●  Para el módulo básico de organizadores (web), ¿cuáles son las tareas y

funcionalidades mínimas esenciales que un organizador externo debería poder
realizar para considerarlo útil y empezar a usar Asdeporte Network a través de la

nueva plataforma? ¿Qué tipo de "informes esenciales" son necesarios
inicialmente?
Para el MVP del módulo B2B, las funcionalidades mínimas esenciales son:
1.  Visualización y Edición Básica de Eventos Listados: Que puedan ver la
información de sus eventos que ya están en nuestra plataforma y hacer
ediciones menores (quizás no crear un evento desde cero en el MVP, pero sí
ajustar detalles).

2.  Seguimiento de Inscripciones: Ver en tiempo real cuántas personas se han

inscrito a sus eventos.

3.  Acceso a Lista de Participantes: Poder descargar la lista de inscritos con la

información relevante para la operación del evento.

4.  Informes Esenciales: Inicialmente, los informes clave serían:

■  Reporte de inscripciones totales y por categoría.
■  Reporte de ingresos generados por inscripciones.
■  Quizás un reporte básico demográfico de los inscritos (si los datos están

disponibles y anonimizados adecuadamente).

El objetivo es que puedan tener una visión clara y acceso a la información básica
de sus eventos e inscritos sin depender tanto de solicitar reportes a nuestro equipo
interno.

●  Respecto a la función "Tribu", ¿cuál es el objetivo principal de renovar esta

funcionalidad en el MVP? ¿Hay ideas concretas sobre cómo mejorar la conexión o
comparación de resultados entre usuarios?
El objetivo principal de renovar "Tribu" es fomentar la interacción y el sentido de
comunidad entre nuestros usuarios. Queremos que la plataforma no sea solo
transaccional, sino un lugar donde los deportistas se conecten, se motiven y
compartan su pasión.
Para mejorar la conexión y comparación de resultados, estamos pensando en:
○  Facilitar la creación y unión a equipos/grupos.
○  Mejorar la visualización de los resultados de los miembros de un equipo

en los eventos en los que participan.

○  Quizás permitir retos sencillos o comparativas basadas en datos de

actividad física (si se integran con wearables).

○  Explorar formas de compartir logros dentro de la plataforma.

Queremos que "Tribu" sea un espacio vivo que impulse la participación recurrente.

●  Para la integración con Asdeporte Plus y wearables, ¿cuáles son los requisitos
clave para que esta integración sea fluida y muestre claramente el valor a los
usuarios?
Para Asdeporte Plus, el requisito clave es que los beneficios sean claramente
visibles y fáciles de acceder para los miembros. Que al ver un evento elegible, el
descuento Plus se muestre automáticamente. Que el acceso a beneficios como el

análisis InBody o las filas rápidas esté bien indicado en la app. Queremos que el
miembro Plus sienta que su suscripción le aporta valor tangible en cada
interacción.
Para la integración con wearables, lo fundamental es que sea sencilla de
conectar (con las marcas más populares como Garmin, Strava, etc.) y que los
datos de actividad que se sincronicen se utilicen de forma significativa dentro de
la plataforma, ya sea para la función "Tribu", un medallero virtual más completo, o
futuras funcionalidades de seguimiento de progreso. La sincronización debe ser
fiable.

●  ¿Se ha realizado o existe alguna investigación de usuario previa (entrevistas,

encuestas, análisis de datos) sobre los problemas de usabilidad de la plataforma
actual (web o app) o sobre las necesidades específicas de los organizadores
(B2B)? Si es así, ¿podríamos tener acceso a esa información o a resúmenes?
Sí, contamos con feedback cualitativo a través de los reportes de nuestro equipo
de Soporte al Cliente y los comentarios que recibimos en redes sociales y tiendas
de aplicaciones. Estos son los que nos han alertado principalmente sobre los
problemas de usabilidad de la app y los puntos de fricción en el proceso de
inscripción.
También tenemos datos cuantitativos de uso de la plataforma actual y análisis
básicos de los flujos de usuario.
Sobre las necesidades específicas de los organizadores B2B, nuestra área
comercial y el equipo que maneja Asdeporte Network tienen un conocimiento
profundo basado en sus interacciones diarias con ellos.
No tenemos un estudio formal de investigación de UX reciente y consolidado.
Sería de gran valor si ustedes pudieran ayudarnos a estructurar y realizar esa
investigación de usuario como parte de esta fase de descubrimiento. Podemos
proporcionarles acceso a los reportes de soporte (anonimizados) y a los datos de
analítica disponibles, y facilitar el contacto con organizadores clave para
entrevistas.

(35-45 min) Métricas de Producto y Criterios de Éxito Específicos

●  A nivel de producto digital, ¿cómo planean medir el éxito específico del MVP

post-lanzamiento? ¿Cuáles de las métricas de éxito listadas son responsabilidad
directa del equipo de producto digital?
A nivel de producto, mediremos el éxito del MVP centrándonos en la adopción, el
engagement y la eficiencia de los flujos clave. Las métricas que son
responsabilidad directa del equipo de producto digital incluyen:
○  Métricas de Adopción y Uso:

■  Usuarios activos mensuales y semanales en la nueva plataforma (web y

app).

■  Tasa de descarga y apertura de la nueva aplicación móvil.

■  Tiempo promedio de permanencia por sesión.
■  Número de sesiones por usuario.
○  Métricas de Conversión (Flujos Clave):

■  Tasa de conversión del flujo de búsqueda/exploración a la página de detalle

del evento.

■  Tasa de conversión del flujo de página de detalle del evento a inicio del

proceso de inscripción.

■  Tasa de finalización del proceso de inscripción y pago.
■  Tasa de registro de nuevos usuarios.

○  Métricas de Engagement (Funcionalidades MVP):

■  Uso de la función "Tribu" (usuarios activos en Tribu, equipos creados,

interacciones).

■  Uso de la función de seguimiento en vivo (si está en el MVP y aplica a

eventos).

■  Uso de la integración con wearables (número de usuarios que conectan sus

dispositivos).
Interacción con el contenido (visitas al blog desde la plataforma, etc.).

■

○  Métricas de Satisfacción:

■  Calificaciones y reseñas en las tiendas de aplicaciones (buscaremos una

mejora significativa en los comentarios sobre usabilidad).

■  Reducción en el número de tickets de soporte relacionados con problemas

de usabilidad de la plataforma.

Estas métricas nos dirán si estamos logrando que los usuarios adopten la nueva
plataforma, si encuentran valor en las funcionalidades clave del MVP y si estamos
resolviendo los problemas de usabilidad actuales.

●  Para las métricas clave (ej. tasa de conversión, retención, uso de funciones MVP),
¿se han definido metas cuantitativas concretas para el MVP? (Ej. "Alcanzar X% de
usuarios activos mensuales en la app", "Reducir el tiempo promedio del flujo de
inscripción en Y segundos").
Sí, estamos en proceso de refinar esas metas cuantitativas específicas para el
MVP en colaboración con los equipos de Liderazgo y Marketing. Aún no tenemos
cifras finales para compartir en este momento, pero la idea es establecer objetivos
ambiciosos pero realistas para los primeros 3 a 6 meses post-lanzamiento del
MVP.
Por ejemplo, para la tasa de conversión del flujo de inscripción, buscaremos
establecer un porcentaje de mejora respecto a la tasa actual. Para usuarios
activos, definiremos un objetivo de crecimiento basado en nuestras proyecciones.
Una vez que tengamos una comprensión más clara de la solución de diseño
propuesta, podremos afinar estos números.

●  ¿Cómo se espera que el diseño y la mejora de la UX/UI contribuyan a estas

métricas de producto específicas?
Esperamos que el diseño y la mejora de la UX/UI sean el principal motor para
impactar positivamente estas métricas.
○  Una mejor exploración y búsqueda (UX/UI) debería aumentar la tasa de

conversión de visita a página de evento y, en última instancia, a inscripción.
○  Un proceso de inscripción y pago más sencillo y claro (UX/UI) reducirá el
abandono del carrito y aumentará la tasa de finalización de inscripción.
○  Una interfaz más intuitiva y una navegación más clara (UX/UI) mejorarán el

tiempo de permanencia y el número de sesiones por usuario,
contribuyendo al engagement y la retención.

○  Una función "Tribu" bien diseñada y atractiva (UX/UI) impulsará el uso de

funcionalidades sociales y fortalecerá la comunidad.

○  En general, una experiencia de usuario positiva (UX/UI) es clave para

mejorar las calificaciones en tiendas de aplicaciones y reducir los tickets de
soporte, lo que impacta directamente la percepción de calidad del producto.

Creemos firmemente que invertir en un diseño centrado en el usuario es
fundamental para lograr nuestros objetivos de producto.

●  ¿Se ha pensado ya cómo se monitorizarán estas métricas de producto

post-lanzamiento? (Ej. a través de dashboards en herramientas de analítica).
Sí, es algo que tenemos contemplado. Planeamos utilizar herramientas de analítica
digital (como Google Analytics, Firebase para la app, u otras herramientas de
producto específicas) para rastrear estas métricas. La idea es configurar
dashboards claros y accesibles que nos permitan monitorizar el rendimiento del
MVP en tiempo real después del lanzamiento. Esto nos permitirá identificar
rápidamente qué funciona bien y qué áreas necesitan ajustes o mejoras en futuras
iteraciones. La definición de estos dashboards y eventos de seguimiento deberá
ser parte del plan de desarrollo.

(45-55 min) Restricciones y Colaboración

●  Más allá de las restricciones de alto nivel (presupuesto, plazo) que estamos

explorando con Liderazgo, ¿hay restricciones específicas (técnicas, de recursos,
dependencias de otros equipos, etc.) que debamos tener muy presentes al diseñar
las soluciones para el MVP?
Sí, hay algunas restricciones técnicas y de recursos importantes que debemos
considerar:
○  Tecnología Existente: Aunque estamos planeando un "nuevo desarrollo", hay
ciertos sistemas legados, especialmente en la gestión de datos históricos de
eventos y resultados, con los que la nueva plataforma deberá interactuar. La
flexibilidad para integrarse con estas bases de datos existentes puede ser una
restricción técnica que afecte cómo diseñamos ciertas funcionalidades, como la
migración de historial de usuarios o la presentación de resultados antiguos.

○  Equipo de Desarrollo: El tamaño y la experiencia del equipo de desarrollo

asignado al proyecto definirán la complejidad de las soluciones que podemos
abordar en el MVP dentro del plazo. Debemos ser realistas sobre lo que es
factible construir. Es posible que ciertas funcionalidades muy complejas deban
simplificarse o posponerse si requieren un esfuerzo de ingeniería
desproporcionado.

○  Dependencias: Podría haber dependencias con otros equipos internos, como
el de Operaciones de Eventos para definir los flujos de información necesarios
para el módulo B2B, o el equipo de Marketing para la implementación de
ciertas funcionalidades promocionales.

○  Datos de Terceros: Al listar eventos de terceros organizadores, dependemos
de la calidad y el formato de la información que ellos nos proporcionan. Esto
puede ser una restricción al intentar estandarizar la presentación de datos de
eventos en la plataforma.

●  ¿Cómo sería la colaboración ideal entre el equipo de Producto (tú) y el equipo de
Diseño (nosotros) a lo largo de este proyecto? ¿Con qué frecuencia deberíamos
sincronizarnos? ¿Cómo prefieres que te presentemos el trabajo de diseño
(wireframes, prototipos)?
La colaboración ideal sería muy estrecha y continua. Consideramos al equipo de
Diseño como un socio estratégico, no solo como ejecutores.
○  Sincronización: Deberíamos tener sincronizaciones frecuentes, idealmente

diarias o al menos cada dos días durante las fases intensivas de
descubrimiento y diseño del MVP. Esto nos permitiría revisar avances, resolver
dudas rápidamente y asegurar que el diseño se alinea con los requisitos y la
visión. Una reunión semanal más formal para revisión y toma de decisiones
sobre entregables de diseño sería también muy útil.

○  Presentación del Trabajo: Preferimos ver el trabajo de diseño de forma

iterativa y en diferentes niveles de fidelidad según la etapa.
■  Al principio, wireframes o flujos básicos son excelentes para validar la

estructura y la lógica de interacción.

■  Luego, prototipos interactivos de baja o media fidelidad son cruciales

para probar los flujos clave y la usabilidad con nosotros y, si es posible, con
usuarios reales.

■  Finalmente, los diseños de alta fidelidad y prototipos funcionales nos
permitirán visualizar la experiencia final antes de pasar a desarrollo.

Valoramos mucho la documentación clara y la justificación detrás de las decisiones
de diseño, explicando cómo abordan los problemas identificados y cumplen los
objetivos.

●  ¿Quiénes son los miembros clave del equipo de desarrollo con los que el diseño

deberá colaborar más estrechamente?

El equipo de Diseño deberá colaborar estrechamente con el Líder Técnico o
Arquitecto (si lo hay) para entender las posibilidades y limitaciones de la
arquitectura propuesta o existente. También, con los desarrolladores frontend y
backend que estarán construyendo las funcionalidades del MVP. Es importante que
el diseño sea viable técnicamente y que haya una comunicación fluida para
resolver dudas durante la implementación. Identificaremos a las personas clave en
el equipo de ingeniería una vez que el proyecto avance a esa fase.

(55-60 min) Cierre

●  ¿Hay alguna otra cosa importante que deba comprender sobre la estrategia del

producto digital o las prioridades para el MVP?
Creo que hemos cubierto los puntos principales. Solo reiterar que la mejora de la
experiencia del usuario en la aplicación móvil es una prioridad absoluta para el
MVP. Es donde vemos la mayor oportunidad de reducir la frustración y aumentar el
engagement. Y que, si bien el MVP es un punto de partida, tenemos una visión
clara de hacia dónde queremos evolucionar la plataforma a futuro, especialmente
en el ámbito B2B y en el uso de datos.

●  Para nuestra investigación de usuarios, ¿hay segmentos específicos de atletas o
organizadores que debamos priorizar para entrevistar o probar? ¿Hay algún
usuario "estrella" o particularmente vocal que pueda darnos insights valiosos?
Para la investigación de usuarios, sugeriría priorizar los siguientes segmentos:
○  Atletas Frecuentes (Miembros Plus o que participan en múltiples eventos
al año): Son nuestros usuarios más valiosos y los que probablemente tienen
más experiencia (y quizás más frustraciones) con la plataforma actual.
○  Usuarios que Han Reportado Problemas de Usabilidad: Sería muy útil

hablar directamente con quienes se han puesto en contacto con soporte por
dificultades para encontrar eventos o completar inscripciones.

○  Organizadores Externos (Clientes de Asdeporte Network): Es crucial
entender sus flujos de trabajo y puntos de dolor actuales con nuestras
herramientas B2B para diseñar un módulo que realmente les sea útil.

Podemos ayudarles a identificar y contactar a algunos usuarios "estrella" o
particularmente activos en nuestra comunidad que podrían estar dispuestos a compartir
sus experiencias y brindar feedback valioso.

Agradecimiento y Cierre (por parte del PM de AsDeporte):

Muchas gracias a ti, por esta entrevista tan productiva. Agradecemos enormemente tu
enfoque en comprender nuestra visión y los detalles desde nuestra perspectiva. La
información que te hemos compartido es fundamental para nosotros.

Entendemos que ahora procederán con la investigación de usuarios para
complementar estos hallazgos, y luego pasarán a las fases de ideación y diseño. Por

favor, mantengamos esa comunicación constante que mencionaste. Estamos ansiosos
por ver cómo traducen esto en soluciones de diseño. No duden en contactarnos si
surgen más preguntas.

