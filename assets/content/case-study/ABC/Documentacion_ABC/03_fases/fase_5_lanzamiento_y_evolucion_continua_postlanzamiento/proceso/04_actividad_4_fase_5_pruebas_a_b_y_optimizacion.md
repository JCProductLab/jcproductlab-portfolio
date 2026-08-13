Proceso Detallado: Actividad 4 (Fase 5) - Pruebas A/B y
Optimización (Esfuerzo Individual con Colaboración
Interdepartamental)

Contexto Temporal: Desde mediados de 2022 en adelante, de forma continua, una vez que la
nueva plataforma https://centromedicoabc.com/ tenía suficiente tráfico y se habían recopilado
datos de analítica y feedback inicial.
Insumo Principal: Los datos de Google Analytics 4 (GA4) y Hotjar (o similar) de la Actividad 2
(Monitoreo), el feedback cualitativo de la Actividad 3 (Recolección Sistemática), las Personas,
los flujos de usuario, y un backlog de posibles áreas de mejora.
Resultado Esperado: Mejoras incrementales y basadas en evidencia en la plataforma, que
llevaran a un aumento en las tasas de conversión de objetivos clave (ej. citas agendadas, uso
del portal), una mejor usabilidad y una mayor satisfacción del paciente.
Rol del Product Designer (Individual en Diseño, Colaborador Clave en Experimentación):
Aunque la implementación técnica de las pruebas A/B y la configuración avanzada de las
herramientas recaería en el equipo de Desarrollo o Marketing (si contaban con especialistas),
mi rol fue:
●

Identificar oportunidades de optimización y formular hipótesis de prueba.

●  Diseñar las variaciones (Variant B, C, etc.) para las pruebas A/B.
●  Colaborar en la definición de los objetivos de la prueba y las métricas de éxito.
●  Analizar los resultados de las pruebas desde una perspectiva de UX y de negocio.
●  Recomendar la implementación de las variaciones ganadoras o proponer nuevas

iteraciones.

●  Fomentar una cultura de experimentación y aprendizaje continuo.

1. Objetivos Específicos de la Actividad:
* Optimizar Tasas de Conversión: Mejorar el rendimiento de flujos clave (ej. agendamiento de
citas, registro en el portal, descarga de información) mediante la experimentación con
diferentes diseños o contenidos.
* Mejorar la Usabilidad de Elementos Específicos: Probar diferentes versiones de componentes
de interfaz (botones, formularios, navegación) para ver cuál es más fácil de usar o entender.
* Incrementar el Engagement: Experimentar con diferentes presentaciones de contenido o
llamadas a la acción para aumentar la interacción del usuario.
* Reducir Puntos de Fricción: Probar soluciones alternativas para áreas de la plataforma donde
la analítica o el feedback indican que los usuarios están teniendo problemas.
* Tomar Decisiones de Diseño Basadas en Datos: Reemplazar suposiciones con evidencia
empírica sobre qué funciona mejor para los usuarios del CM ABC.
* Validar el Impacto de Cambios Pequeños: Entender cómo modificaciones aparentemente
menores pueden tener un impacto significativo en el comportamiento del usuario.
2. Metodología y Marco (Colaborativo):

* Metodología Principal: Experimentación Controlada (Pruebas A/B o Pruebas Multivariante si la
herramienta y el tráfico lo permitían). Una prueba A/B compara una versión actual (Control o
Variante A) con una o más versiones modificadas (Variante B, Variante C, etc.) para ver cuál
funciona mejor para un objetivo específico.
* Marco de Trabajo: Un ciclo de experimentación:
1. Observar y Analizar (datos y feedback).
2. Formular Hipótesis.
3. Diseñar y Construir Variaciones.
4. Ejecutar la Prueba.
5. Analizar Resultados.
6. Aprender e Implementar (o iterar).
3. Herramientas Utilizadas (Implementadas por Desarrollo/Marketing, Usadas y Analizadas por
Mí y el Equipo):
* Para Diseño de Variaciones:
* Figma: Para diseñar los mockups de las diferentes variantes (B, C, etc.) que se probarían,
asegurando que los cambios fueran medibles y aislados.
* Para Ejecución de Pruebas A/B:
* Google Optimize (aunque ahora está en proceso de sunset, era una opción viable en
2022-2023 y se integraba bien con GA4): Permitía crear experimentos A/B, A/B/n, multivariante
y de redirección directamente sobre el sitio web, a menudo sin necesidad de cambios
profundos en el código para variaciones visuales o de texto.
* Alternativas (si Google Optimize no estaba disponible o para pruebas más complejas): VWO,
Optimizely, o incluso una implementación personalizada por el equipo de desarrollo si las
pruebas requerían cambios de lógica significativos. Hotjar también tiene algunas capacidades
para comparar el comportamiento en diferentes versiones si se usan encuestas o feedback.
* Para Análisis de Resultados:
* La propia plataforma de A/B testing (ej. Google Optimize): Proporciona informes sobre el
rendimiento de cada variante contra el objetivo, incluyendo la significancia estadística.
* Google Analytics 4 (GA4): Para un análisis más profundo del comportamiento de los usuarios
en cada variante (ej. segmentando por variante para ver el impacto en otras métricas
secundarias).
* Hojas de Cálculo (Google Sheets/Excel): Para análisis estadísticos adicionales o para combinar
datos si fuera necesario.
4. Proceso Paso a Paso de las Pruebas A/B y Optimización:

* **Paso 4.1: Identificación de Oportunidades de Optimización y Formulación de
Hipótesis (Continuo, basado en Actividades 2 y 3 de Fase 5)**
    * **Análisis de Datos y Feedback:** Constantemente revisaba los dashboards de
GA4, los heatmaps/grabaciones de Hotjar, y el feedback cualitativo en busca de:
        * Páginas con altas tasas de rebote o abandono.

        * Flujos de conversión con caídas significativas en ciertos pasos.
        * Elementos con baja tasa de clics (CTR) pero que eran importantes.
        * Áreas donde los usuarios expresaban confusión o frustración.
    * **Brainstorming de Posibles Mejoras (Individual o con Product Owner):** Para cada
oportunidad identificada, pensaba en posibles cambios de diseño, contenido o flujo
que podrían mejorar el rendimiento.
    * **Formulación de una Hipótesis Clara:** Cada prueba A/B debía comenzar con una
hipótesis específica, medible y accionable. Formato: *"Si cambiamos [elemento X de la
versión A] por [elemento Y en la versión B], entonces [métrica Z específica] mejorará
porque [razón/suposición basada en principios de UX o feedback]."*
        * *Ejemplo (basado en `https://centromedicoabc.com/`):* "Si cambiamos el texto
del botón principal en la página de perfil del médico de 'Ver Teléfonos' (Variante A -
Control) a 'Agendar Cita Ahora' (Variante B), entonces la tasa de clics en ese botón y el
inicio del flujo de agendamiento aumentarán, porque 'Agendar Cita Ahora' es una
llamada a la acción más directa y alineada con el objetivo principal del usuario en esa
página."
        * Otro ejemplo: "Si en la homepage, en lugar de un carrusel de noticias (Variante A),
mostramos accesos directos más grandes a los 3 servicios más demandados (Variante
B), entonces el engagement con esos servicios aumentará porque los usuarios los
encontrarán más fácilmente."

* **Paso 4.2: Diseño de las Variaciones (Figma) (1-3 días por prueba, dependiendo de la
complejidad del cambio)**
    * **Cambio Aislado:** Para una prueba A/B efectiva, idealmente solo se cambia *un*
elemento significativo entre la Variante A (Control) y la Variante B, para poder atribuir
cualquier diferencia en el rendimiento a ese cambio específico.
    * **Creación de Mockups para la Variante B (y C, D... si era una prueba A/B/n):** En
Figma, duplicaba el diseño de la pantalla o componente actual (Control) y aplicaba la
modificación propuesta en la hipótesis para crear la Variante B.
    * **Consistencia con el Design System:** Me aseguraba de que las variaciones
siguieran utilizando los componentes y estilos del Design System para mantener la
coherencia general, a menos que el componente en sí fuera el objeto de la prueba.
    * **Consideraciones de Responsividad y Accesibilidad:** Las variaciones también
debían ser responsivas y accesibles.

* **Paso 4.3: Colaboración para la Configuración y Lanzamiento de la Prueba A/B (1-2
días, con Desarrollo/Marketing)**

    * **Definición del Objetivo Principal de la Prueba:** ¿Qué métrica específica
estábamos tratando de mover? (Ej. Tasa de clics, tasa de finalización de formulario,
tiempo en página, tasa de rebote). Este objetivo se configuraría en la herramienta de
A/B testing.
    * **Segmentación de la Audiencia:** ¿La prueba se dirigiría a todos los usuarios o a
un segmento específico (ej. nuevos vs. recurrentes, usuarios móviles vs. desktop)?
    * **Distribución del Tráfico:** Generalmente 50/50 entre el Control y la Variante (o
dividido equitativamente si hay más variantes).
    * **Implementación Técnica:**
        * Si los cambios eran visuales o de texto simples, a menudo podía configurarlos yo
mismo en Google Optimize usando su editor visual o inyectando CSS/JavaScript
simple.
        * Si los cambios eran más estructurales o requerían lógica de backend, colaboraba
estrechamente con los desarrolladores para implementar las variaciones. Ellos podrían
necesitar crear diferentes versiones de una página o componente en el código.
    * **Pruebas QA de la Configuración del Experimento:** Antes de lanzar la prueba al
público, era crucial probar que ambas variantes se mostraran correctamente y que los
datos se estuvieran registrando adecuadamente.

* **Paso 4.4: Monitoreo de la Prueba y Recopilación de Datos (Duración variable: 1-4
semanas o más)**
    * **Duración de la Prueba:** La prueba debía durar lo suficiente para alcanzar
significancia estadística y para cubrir al menos un ciclo de negocio completo (ej. una
semana para capturar variaciones diarias, o más si el tráfico era bajo o el efecto
esperado era pequeño).
    * **Monitoreo Regular:** Revisaba el progreso de la prueba en la plataforma de A/B
testing periódicamente, pero evitando sacar conclusiones prematuras antes de
alcanzar la significancia.
    * **No Interferencia:** Era importante no hacer otros cambios importantes en las
páginas que se estaban probando durante el experimento, para no contaminar los
resultados.

* **Paso 4.5: Análisis de Resultados y Toma de Decisiones (1-2 días post-prueba)**
    * **Análisis Estadístico:** La herramienta de A/B testing (ej. Google Optimize)
generalmente indicaba si una variante era significativamente mejor que la otra para el
objetivo principal (ej. con un nivel de confianza del 95%).
    * **Revisión de Métricas Secundarias:** También analizaba el impacto de las

variaciones en otras métricas importantes. A veces, una variante podía mejorar la
métrica principal pero empeorar otra.
    * **Análisis Cualitativo (si aplicaba):** Si tenía heatmaps o grabaciones de sesiones
para las diferentes variantes (a través de Hotjar integrado con la prueba A/B), las
revisaba para entender *por qué* una variante pudo haber funcionado mejor.
    * **Toma de Decisión:**
        * **Implementar la Variante Ganadora:** Si una variante mostraba una mejora
estadísticamente significativa y no tenía efectos negativos importantes en otras
métricas, se decidía implementarla de forma permanente para el 100% de los usuarios.
        * **Mantener el Control:** Si no había una diferencia significativa o la variante B
funcionaba peor, se mantenía la versión original (Control).
        * **Iterar y Re-Probar:** Si los resultados no eran concluyentes o si aprendimos
algo que sugería una nueva hipótesis, podíamos diseñar una nueva variación y realizar
otra prueba.
    * **Colaboración en la Decisión:** Aunque yo hacía el análisis de UX, la decisión final
de implementar un cambio se tomaba en conjunto con el Product Owner y, si era
necesario, con Marketing o Desarrollo.

* **Paso 4.6: Documentación y Comunicación de Aprendizajes (Continuo)**
    * **Registro de Pruebas:** Mantenía un registro de todas las pruebas A/B realizadas:
hipótesis, variaciones, duración, resultados, métricas clave y la decisión tomada.
    * **Compartir Aprendizajes:** Comunicaba los resultados y los aprendizajes clave al
equipo y a los stakeholders. Esto ayudaba a construir un conocimiento colectivo sobre
qué funciona (y qué no) para los usuarios del CM ABC.
    * **Impacto en el Design System:** Si una variación ganadora implicaba un cambio en
un componente reutilizable, actualizaba ese componente en el Design System.

6. Resultado de la Actividad 4 (Pruebas A/B y Optimización):

Mi participación en este proceso de experimentación continua fue clave para:

●  Mejoras Basadas en Evidencia: La plataforma https://centromedicoabc.com/ se
optimizaría continuamente basándose en datos reales de comportamiento del
usuario, no solo en intuiciones.
Incremento en el Rendimiento de KPIs: Las pruebas A/B exitosas llevarían a
mejoras medibles en las tasas de conversión y otros objetivos de negocio. Por
ejemplo, si se probó el CTA "Agenda tu cita", una versión ganadora podría haber

●

contribuido directamente a más citas online.

●  Reducción de Riesgos: Probar los cambios en un subconjunto de usuarios antes
de implementarlos para todos minimizaba el riesgo de lanzar una "mejora" que en
realidad empeorara la experiencia.

●  Cultura de Experimentación: Fomentar un enfoque donde se prueban las ideas y
se aprende de los resultados, tanto de los éxitos como de los "fracasos" (que en
realidad son oportunidades de aprendizaje).

●  Diseño Más Efectivo a Largo Plazo: Cada prueba A/B proporcionaba insights
sobre las preferencias y comportamientos de los pacientes del CM ABC, lo que
informaría futuras decisiones de diseño de manera más inteligente.

Aunque como diseñador único no implementaría técnicamente las pruebas A/B en el
código, mi rol en la identificación de oportunidades, el diseño de las variaciones, la
definición de objetivos y el análisis de los resultados desde la perspectiva del usuario
sería absolutamente fundamental para el éxito de este proceso de optimización
continua.

