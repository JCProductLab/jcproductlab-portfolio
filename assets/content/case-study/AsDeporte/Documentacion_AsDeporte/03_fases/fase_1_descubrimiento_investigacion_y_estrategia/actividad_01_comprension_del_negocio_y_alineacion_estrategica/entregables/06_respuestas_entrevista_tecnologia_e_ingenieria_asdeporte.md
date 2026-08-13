Respuestas de la Entrevista: Equipos de Tecnología e Ingeniería de AsDeporte

Este documento recopila las respuestas proporcionadas durante la entrevista simulada
con los representantes del equipo de Tecnología e Ingeniería de AsDeporte, basadas
en el análisis integral de la empresa y su perspectiva técnica sobre la nueva plataforma
digital.

(5-20 min) Arquitectura y Base Tecnológica

●  Actualmente, ¿cómo describirían la arquitectura de las plataformas digitales de

AsDeporte?
Actualmente, nuestra arquitectura es un tanto fragmentada, reflejo de nuestra
evolución histórica. Tenemos un sistema web principal que interactúa con bases de
datos que han crecido con el tiempo. Las aplicaciones móviles nativas consumen
información a través de APIs, pero estas APIs y la lógica backend subyacente no
siempre provienen de una arquitectura unificada. Podríamos decir que son
sistemas que interactúan, pero no sobre una base de código o arquitectura
completamente compartida y moderna. TYR, nuestro sistema de cronometraje,
opera en paralelo y se integra para la parte de resultados, pero tiene su propia
base y lógica.

●  El brief menciona "desarrollo de una nueva plataforma". ¿Esto significa una

reconstrucción completa o una evolución? ¿Cuáles son los principales impulsores
de este enfoque?
Implica una evolución significativa y un rediseño importante, más que una
reconstrucción completa desde cero en todos los componentes. Buscaremos
modernizar la arquitectura central para que sea más escalable, mantenible y
flexible. Esto probablemente implicará construir nuevos servicios o refactorizar
partes clave del backend y las APIs.
Los principales impulsores de este enfoque son:
1.  Superar Limitaciones Actuales: La arquitectura actual presenta limitaciones

de escalabilidad, flexibilidad para añadir nuevas funcionalidades y
mantenibilidad, como se menciona en el análisis.

2.  Mejorar la Experiencia del Usuario: Una arquitectura moderna nos permitirá

ofrecer una experiencia más fluida y rápida en web y móvil.

3.  Soportar el Crecimiento Futuro: Necesitamos una base que pueda escalar

con el aumento de usuarios, eventos y la adición de funcionalidades
avanzadas (como Race Insights mejorado).

4.  Optimizar la Colaboración: Una arquitectura más limpia y modular facilitará el

trabajo de los equipos de desarrollo y la integración de diseño.

No es una demolición total porque hay componentes valiosos, como la base de
datos histórica de resultados de TYR, que deben ser integrados.

●  ¿Cuáles son las principales tecnologías (stack tecnológico) que se utilizan

actualmente o se planean utilizar para el desarrollo de esta nueva plataforma?
Actualmente, utilizamos una combinación de tecnologías que han evolucionado
con el tiempo. Para la nueva plataforma, estamos evaluando y definiendo el stack
óptimo, pero la dirección apunta hacia:
○  Backend: Probablemente nos inclinaremos por un framework moderno basado

en lenguajes como Python o Node.js, buscando mayor agilidad y
rendimiento.

○  Frontend (Web): Un framework de JavaScript moderno como React o Vue.js

para una interfaz de usuario dinámica y responsive.

○  Aplicaciones Móviles: Mantendremos el desarrollo nativo (Swift/Kotlin) o
exploraremos frameworks cross-platform como React Native o Flutter si se
alinean con los recursos y la velocidad de desarrollo deseada. La decisión final
dependerá del análisis de viabilidad.

○  Bases de Datos: Seguiremos utilizando bases de datos relacionales (como

PostgreSQL o MySQL) para datos estructurados (usuarios, eventos,
inscripciones), pero podríamos considerar bases de datos NoSQL para datos
más flexibles o de alto volumen (como datos de actividad de wearables).
Infraestructura Cloud: Continuaremos utilizando servicios de cloud computing
(como AWS, Google Cloud o Azure) para la escalabilidad, seguridad y
fiabilidad.

○

La elección final del stack buscará un equilibrio entre modernidad, rendimiento,
seguridad y la experiencia de nuestro equipo.

(20-35 min) Restricciones Técnicas y Desafíos Conocidos

●  ¿Cuáles son las limitaciones más significativas o los puntos débiles que han
identificado en la plataforma actual que necesitamos superar o tener muy
presentes al diseñar?
Las limitaciones más significativas que identificamos y que impactan el diseño son:
○  Deuda Técnica: Hay componentes antiguos que son difíciles de modificar o

escalar. Esto puede limitar la rapidez con la que podemos implementar ciertas
funcionalidades o requerir refactorizaciones importantes.

○  Flexibilidad de la Base de Datos Legada: La estructura de algunas bases de
datos históricas, especialmente la de resultados de TYR, puede no ser ideal
para las funcionalidades modernas de búsqueda, filtrado o análisis avanzado
que queremos ofrecer.

○  APIs Internas: Algunas APIs existentes pueden no estar bien documentadas o
no ser lo suficientemente robustas para soportar las nuevas funcionalidades de
la plataforma de manera eficiente.

○  Escalabilidad en Picos: Aunque nuestra infraestructura actual maneja cierto
volumen, la arquitectura subyacente no está optimizada para manejar picos

masivos de inscripción de forma tan fluida como nos gustaría.
●  ¿Hay restricciones técnicas específicas relacionadas con el rendimiento, la
seguridad o la escalabilidad que debamos considerar desde el diseño?
Sí, absolutamente.
○  Rendimiento: La plataforma debe ser rápida y responsiva, tanto en la web
como en la app, incluso con miles de usuarios navegando o inscribiéndose
simultáneamente. El diseño debe considerar la carga de datos, el número de
llamadas a la API y la complejidad de las interfaces para evitar cuellos de
botella.

○  Seguridad: Dada la información sensible que manejamos (datos personales,
financieros, de salud), la seguridad es una prioridad máxima. El diseño debe
contemplar flujos de usuario seguros para registro, inicio de sesión, pago y
manejo de datos personales, cumpliendo con la normativa. La arquitectura
debe ser segura por diseño.

○  Escalabilidad: El diseño debe ser flexible para que la arquitectura pueda

escalar horizontalmente. Esto significa evitar dependencias rígidas, diseñar
APIs eficientes y considerar cómo se manejarán grandes volúmenes de datos
(usuarios, eventos, resultados, datos de actividad) a medida que crezcamos. El
proceso de inscripción, en particular, experimenta picos de tráfico muy altos.
●  ¿Existen requisitos técnicos específicos de seguridad o cumplimiento normativo

que deban guiar el diseño de flujos o la gestión de datos?
Sí, además de las mejores prácticas generales de seguridad (encriptación,
autenticación robusta, etc.), debemos cumplir con la normativa mexicana de
protección de datos personales. Esto implica requisitos específicos sobre cómo se
recopilan, almacenan, procesan y permiten gestionar (acceso, rectificación,
cancelación, oposición - ARCO) los datos de los usuarios.
Desde el diseño, esto significa:
○  Consentimiento Claro: Asegurar que los usuarios den su consentimiento de
manera explícita para la recopilación y uso de sus datos, especialmente los
sensibles (salud, localización).

○  Transparencia: Informar claramente a los usuarios qué datos se recopilan y

para qué se utilizan (alineado con la política de privacidad).

○  Flujos Seguros: Diseñar flujos de registro, inicio de sesión y pago que

minimicen riesgos de seguridad.

○  Gestión de Datos Personales: Facilitar que los usuarios puedan acceder,
modificar o solicitar la eliminación de sus datos personales a través de la
interfaz.

○  Anonimización/Pseudonimización: Considerar cómo se anonimizan o

pseudonimizan los datos sensibles para análisis (como Race Insights) sin
comprometer la privacidad individual.

●  ¿Tenemos APIs internas o externas existentes con las que la nueva plataforma

debe integrarse? ¿Hay alguna limitación conocida con estas APIs?
Sí, tendremos integraciones clave:
○  Pasarelas de Pago: Deberemos integrar APIs de pasarelas de pago que
operen en México. Las limitaciones suelen estar relacionadas con la
documentación, la estabilidad del servicio o las funcionalidades específicas que
ofrecen (ej. pagos recurrentes para Plus).

○  Servicios de Mapas: Para funcionalidades como livetracking o mostrar

ubicaciones de eventos, nos integraremos con APIs de mapas (ej. Google
Maps, Mapbox). Las limitaciones pueden ser de costo, cuotas de uso o
funcionalidades específicas (ej. precisión del livetracking).

○  APIs de Wearables: Para integrar datos de actividad, necesitaremos conectar
con APIs de plataformas populares como Garmin Connect, Strava, Apple
Health, Google Fit. La limitación principal es la variabilidad en las APIs de cada
proveedor y la cantidad/tipo de datos a los que permiten acceder.

○  Sistemas Internos (TYR, etc.): Como mencioné, la integración con nuestros

sistemas de cronometraje y bases de datos históricas es crucial. Las
limitaciones aquí pueden ser la antigüedad de los sistemas, la falta de APIs
modernas o la complejidad de la estructura de datos.

●  ¿Cómo visualizan la gestión de datos a gran escala para funcionalidades como
"Race Insights" y potencial personalización? ¿Esto requiere una infraestructura
técnica específica que deba considerarse en el diseño?
La gestión de datos a gran escala es un componente estratégico clave y sí,
requerirá una infraestructura técnica específica.
Visualizamos un Data Lake o Data Warehouse donde podamos centralizar y
procesar los datos de usuarios, inscripciones, resultados, actividad de wearables y
comportamiento en la plataforma. Esto nos permitirá realizar análisis complejos
para Race Insights y alimentar motores de personalización.
Desde el diseño, esto implica:
○  Diseñar la estructura de datos de la nueva plataforma de manera que facilite

la recopilación y el análisis.

○  Considerar cómo se etiquetan y categorizan los datos para su posterior uso

en análisis e insights.

○  Diseñar las interfaces para Race Insights (a futuro) pensando en cómo se

visualizarán grandes volúmenes de datos de manera comprensible.

○  Asegurar que la recopilación de datos de wearables y localización sea

robusta y escalable.

La infraestructura de datos y análisis deberá ser considerada desde las etapas iniciales
de diseño arquitectónico.

(35-45 min) Factibilidad del Alcance MVP y Colaboración Diseño-Desarrollo

●  Revisando la lista de funcionalidades clave planeadas para el MVP, ¿ven alguna
funcionalidad que represente un riesgo técnico significativo o que estimen que
requerirá un esfuerzo de desarrollo considerable?
En general, las funcionalidades del MVP son factibles, pero algunas requieren un
esfuerzo considerable o presentan ciertos riesgos:
○  Exploración/Búsqueda/Filtrado Avanzado: Implementar un sistema de
búsqueda y filtrado realmente rápido, relevante e intuitivo sobre un gran
volumen de eventos y con criterios variados puede ser técnicamente complejo
y requerir optimización de bases de datos e índices.

○  Proceso de Inscripción y Pago (Robustez): Aunque el flujo en sí es

conocido, asegurar que sea 100% robusto, maneje picos de tráfico sin caerse y
se integre de forma segura y fiable con las pasarelas de pago requiere un
esfuerzo meticuloso de desarrollo y pruebas.

○  Función "Tribu" Renovada: Dependiendo de la ambición de las

funcionalidades sociales (ej. feeds de actividad, interacción en tiempo real,
notificaciones complejas), esto puede requerir un backend y APIs dedicadas
con un esfuerzo de desarrollo significativo.
Integración con Wearables: La integración con múltiples APIs de terceros
(Garmin, Strava, etc.) puede ser laboriosa debido a las diferencias entre ellas y
la gestión de la sincronización de datos en segundo plano.

○

El módulo B2B básico en el MVP parece manejable, pero su complejidad
aumentará drásticamente en fases futuras cuando se añadan funcionalidades de
autogestión y análisis avanzado.

●  Para el módulo básico de organizadores B2B (web) en el MVP, desde una

perspectiva técnica, ¿cuáles son las funcionalidades mínimas esenciales que
consideran factibles y realistas para un primer lanzamiento?
Para el MVP del módulo B2B, consideramos factible y realista incluir:
○  Visualización de Eventos Listados: Que el organizador pueda ver la lista de

sus eventos activos en nuestra plataforma.

○  Acceso a la Lista de Inscritos: Una tabla simple con los datos básicos de los
participantes inscritos en sus eventos, con opción de descarga (ej. CSV).

○  Visualización de Métricas Básicas: Un dashboard muy simple con el número

total de inscritos por evento y quizás un resumen de ingresos.
○  Edición de Información de Contacto/Perfil del Organizador.

Funcionalidades como la creación o edición completa de eventos desde la interfaz
B2B, la gestión avanzada de precios/cupones, o informes analíticos detallados
probablemente no serían realistas para el MVP y deberían posponerse.

●  ¿Cuál es el tamaño y la experiencia del equipo de desarrollo que se asignará a
este proyecto? ¿Cómo impacta esto en la complejidad de las soluciones que
podemos diseñar para el MVP?

Aún estamos finalizando la asignación del equipo, pero la intención es formar un
equipo dedicado con una combinación de desarrolladores frontend, backend y un
líder técnico. El tamaño y la experiencia del equipo impactarán directamente la
velocidad y la complejidad de las funcionalidades del MVP que podemos abordar.
Un equipo más grande y experimentado nos permitiría ser más ambiciosos con el
alcance inicial. Es crucial que el equipo de diseño esté alineado con la capacidad
del equipo de desarrollo para evitar diseñar soluciones que no puedan ser
construidas a tiempo o con la calidad esperada.

●  ¿Cómo sería la colaboración ideal entre el equipo de Diseño y el equipo de

Desarrollo? ¿Con qué frecuencia y en qué momentos deberíamos sincronizarnos?
La colaboración ideal sería muy cercana e integrada desde las primeras etapas.
No queremos que el diseño sea una "entrega" final que simplemente pasemos a
construir.
○  Sincronización: Deberíamos tener sesiones de trabajo conjuntas
frecuentes durante la fase de diseño, no solo reuniones de revisión.
Idealmente, al menos una o dos veces por semana para discutir wireframes,
prototipos, flujos de usuario y validar la factibilidad técnica de las propuestas de
diseño a medida que surgen. Esto ayuda a identificar problemas técnicos
temprano y a encontrar soluciones conjuntas.

○  Momentos Clave: La sincronización es vital cuando se definen los flujos
críticos del MVP (búsqueda, registro, perfil), cuando se proponen nuevas
interacciones o funcionalidades, y cuando se trabaja en la estructura de datos o
la arquitectura de APIs que soportarán el diseño.

Valoramos que el equipo de diseño entienda las limitaciones técnicas y esté
dispuesto a explorar soluciones creativas que sean factibles de implementar
eficientemente.

●  ¿Cómo prefieren recibir las especificaciones de diseño y los assets? ¿Hay un

formato de handoff que funcione mejor para su equipo?
Herramientas como Figma (utilizando Dev Mode) o Zeplin funcionan muy bien para
el handoff. Nos permiten acceder a especificaciones de medidas, espaciado,
tipografía, colores y exportar assets (iconos, imágenes) de manera eficiente.
Si se utiliza un sistema de diseño (Design System), documentado quizás en
Storybook o similar, sería de gran ayuda para asegurar la consistencia y acelerar
el desarrollo frontend. Lo importante es que las especificaciones estén completas,
claras y accesibles para los desarrolladores.

●  ¿Hay una metodología de desarrollo que se utilizará y con la que el proceso de

diseño deba alinearse?
Sí, trabajamos con una metodología ágil, probablemente Scrum o una variante de
Kanban. Esto significa que trabajamos en ciclos cortos (sprints). El proceso de
diseño deberá alinearse con estos sprints, idealmente trabajando con "adelanto"

respecto al equipo de desarrollo, diseñando y validando las funcionalidades de los
próximos sprints para que estén listas cuando el equipo de desarrollo las necesite.
La comunicación constante es clave para que el diseño no se convierta en un
cuello de botella.

(45-55 min) Perspectiva Técnica General y Cierre

●  Desde una perspectiva técnica, ¿cuál es el mayor desafío que ven en la

construcción exitosa de esta nueva plataforma integral?
El mayor desafío técnico es integrar de manera fluida y eficiente los sistemas
existentes (especialmente datos históricos y cronometraje) con una arquitectura
moderna y escalable, mientras se construye una experiencia de usuario de primer
nivel. Lograr que todos los componentes hablen entre sí de forma fiable, segura y
rápida, al mismo tiempo que se resuelve la deuda técnica y se innova en la
experiencia digital, es una tarea compleja.

●  ¿Y cuál es la mayor oportunidad técnica que este proyecto les permite abordar?

La mayor oportunidad técnica es construir una base tecnológica sólida y moderna
que nos permita innovar y escalar a futuro. Es la oportunidad de implementar una
arquitectura limpia, utilizar tecnologías de vanguardia y establecer mejores
prácticas de desarrollo que nos posicionen para el crecimiento y la diversificación
de servicios que AsDeporte busca. También, la oportunidad de trabajar con datos a
gran escala para Race Insights es técnicamente muy interesante.

●  ¿Hay algo más fundamental sobre la infraestructura, la tecnología o el proceso de

desarrollo que debamos comprender como diseñadores para asegurar que nuestro
trabajo sea técnicamente factible y optimizado?
Sí, es fundamental que comprendan que la escalabilidad y el rendimiento son tan
importantes como la usabilidad visual. Un diseño hermoso que no carga rápido o
que colapsa con muchos usuarios no cumplirá los objetivos de negocio.
Consideren cómo sus diseños impactan la cantidad de datos que se transfieren, la
complejidad de las consultas a la base de datos y el estado que debe manejar la
aplicación. Pregúntennos sobre la factibilidad técnica antes de finalizar un diseño
complejo. La comunicación temprana nos ahorrará mucho retrabajo a ambos.
●  ¿Hay alguna persona clave adicional en el área de Tecnología/Ingeniería con la
que sería valioso que conversáramos para profundizar en aspectos específicos?
Sí, sería muy útil que conversaran con:
○  Nuestro Arquitecto de Software (si es una persona diferente al líder técnico):
Para profundizar en la visión de la arquitectura a largo plazo y las decisiones
clave sobre el stack.

○  Un especialista en Bases de Datos: Para entender las complejidades de

nuestras bases de datos existentes y los requisitos para la nueva.

○  El Líder de QA (Control de Calidad): Para entender los procesos de prueba y

cómo el diseño puede facilitar la validación de las funcionalidades.

Agradecimiento y Cierre (por parte del equipo de Tecnología e Ingeniería de
AsDeporte):

Muchas gracias por su tiempo y por estas preguntas tan relevantes. Agradecemos que
se tomen el tiempo para entender el lado técnico. Esta información es vital para que
podamos colaborar de manera efectiva.

Esperamos con interés sus propuestas de diseño. Estamos a su disposición para
cualquier duda técnica que surja. ¡Contamos con ustedes para diseñar una plataforma
increíble y construible!

