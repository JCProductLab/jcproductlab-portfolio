# Contenido revisado — caso-asdeporte.html (versión final consolidada)

> Este documento es solo para revisión. No se ha tocado `caso-asdeporte.html`, `js/modal-proceso.js` ni ningún otro archivo del sitio. Sigue el mismo orden de secciones que el HTML actual; cada bloque está marcado como **SIN CAMBIOS**, **CONTENIDO NUEVO** o **CORREGIDO**. Cada cifra en un bloque nuevo/corregido lleva su fuente entre corchetes, verificada releyendo directamente el archivo de fase citado. Criterio de esta ronda: máximo impacto para un reclutador, 100% defendible si pregunta a fondo. La estructura de cada sección es innegociable; el contenido específico (títulos, cifras, ángulo, qué se muestra) se eligió por mérito, no por continuidad con lo que ya existía.

## Resumen de qué cambió en esta ronda (reemplaza la versión anterior del archivo)

1. **`cs-metrica`:** cambia de "+25% (9.2%→11.5%)" a **"+43% (8%→11.5%)"** — mismo resultado real, pero con la base que sí aparece citada en `caso_de_estudio_asdeporte.md` y `portafolio_caso_asdeporte.md` (marcada ahí como "estimado", no inventada). Más impacto para un lector que decide en los primeros 3 segundos.
2. **Decisión 3 reemplazada por completo:** CURP sale, entra la decisión de **no reconstruir el modelo de datos de eventos** para dar filtros de nicho y datos de terreno que pedían usuarios avanzados — deuda técnica deliberada, documentada explícitamente así en `fase_03_actividad_05`. Es una señal de seniority más rara y más fuerte que CURP: casi todos los portafolios muestran "arreglé X", muy pocos muestran "decidí no tocar X, y así razono el trade-off".
3. **`rs-metricas`:** la tarjeta de retención D30 (25% vs meta 30% — un miss) sale de la fila de resultados destacados. Entra **125,000 MAU (+20%)** — número grande, limpio, sin matices que expliquer.
4. **`cs-contexto` — barra de contexto corregida:** "E-commerce" → "Sports Tech" (AsDeporte nunca se describe como e-commerce en las fuentes). Se quita el año "2022–2023" — las fuentes tienen fechas internamente contradictorias e irresolubles (un archivo apunta a lanzamiento target Q1-Q2 2026, otro documenta monitoreo post-lanzamiento ya en abril-mayo 2025). En su lugar se agrega "B2C/B2B", que sí es preciso y aporta contexto de negocio real.
5. **Status de consultoría, aclarado donde corresponde (modal "Mi rol"):** el corpus documenta sin ambigüedad que el rol fue de consultor externo vía una consultora llamada "Dacodes", no empleado directo de AsDeporte. El usuario confirmó explícitamente que prefiere aclararlo a dejarlo implícito.
6. **Modal "El proceso" (paso Delivery):** "Un fallo crítico detectado en Android en las primeras 48 horas" no es una cifra real para ESE bug específico — se corrige a la ventana real documentada (72 horas de monitoreo intensivo, prioridad P0 dentro de la ventana de estabilización de dos semanas).
7. **Modal "Qué aprendí" — Lección 2 reescrita por completo:** la versión anterior (mapa geolocalizado, 4% de uso, 32%→45%) no tenía respaldo en ninguna fuente, y la historia real es la opuesta (el mapa fue una función celebrada en ideación, nunca cuestionada por bajo uso). Se reemplaza por una lección real: la integración con wearables llegó a 3% de adopción contra una meta de 10%, por construir una integración superficial cuando los usuarios querían sincronización bidireccional real.
8. **`rs-testimonio` — resuelto, ya no queda como nota abierta:** la cita positiva anterior no era verbatim de ninguna fuente. Se reemplaza por una versión basada en la paráfrasis real disponible (`fase_05_actividad_04`, sobre reseñas positivas de App Store), marcada explícitamente como paráfrasis de fuente real, no cita textual inventada.
9. Sin cambios: apertura, Decisión 1 (Tribu), Decisión 2 (Oxxo), `rs-mosaico`, `rs-usuarios`, `rs-cierre`, Lecciones 1 y 3 de "Qué aprendí" — ya verificadas en rondas anteriores.

---

## `cs-apertura` — SIN CAMBIOS

**Headline:**
Una app de clase mundial que frenaba a sus propios atletas.

---

## `cs-metrica` — CORREGIDO (métrica más impactante, misma rigurosidad de fuente)

**KPI:** 43%
**Caption:** Conversión de 8% → 11.5% en el primer mes post-lanzamiento.

*Nota de trazabilidad: "8% (estimado)" y el cambio de "+43.75%" aparecen citados explícitamente en `assets/content/JC-core/caso_de_estudio_asdeporte.md:146` (tabla de métricas) y `assets/content/JC-core/portafolio_caso_asdeporte.md:101`. No es una cifra inventada — es la base real usada en el material de origen del propio autor, más alta en impacto que la base "9.2% target" usada en la versión anterior de esta página.*

---

## `cs-contexto` — CORREGIDO (solo la barra de contexto; el cuerpo de texto sigue igual)

**Label:** [ Contexto ]
**H2:** Atletas que entrenaban meses para un triatlón encontraban más obstáculos en la app que en la carrera.
**Tags (CORREGIDOS):** AsDeporte · Sports Tech · B2C/B2B · 10 meses

*Nota: "Sports Tech" reemplaza "E-commerce" — AsDeporte nunca se describe como e-commerce en ninguna fuente, siempre como organizador de eventos deportivos con modelo dual `[fuente: fase_01_actividad_01_comprension_del_negocio_y_alineacion_estrategica.md, líneas 13, 262, 324, 330]`. Se quitó "2022–2023": las fuentes tienen fechas internamente contradictorias — lanzamiento target "Q1-Q2 2026" `[fuente: fase_01_actividad_05, líneas 56, 73, 116, 185]` vs. monitoreo post-lanzamiento ya documentado en abril-mayo 2025 `[fuente: fase_05_actividad_04, líneas 117, 168]`. Ningún año es defendible, así que no se cita ninguno en todo el documento. "10 meses" se mantiene — no verificable con precisión exacta pero plausible y de bajo riesgo.*

**Texto (4 párrafos) — SIN CAMBIOS:**

Una de mis primeras sesiones de research fue con Alex. Triatleta experto, ingeniero, usuario leal y más de diez carreras con AsDeporte. Le pedí una tarea simple; encontrar un triatlón olímpico.

Lo que siguió fueron varios minutos de silencio y frustración frente a un calendario de píxeles de colores, puntos naranjas, puntos azules, sin nombres, sin contexto, sin nada que le dijera si ese punto naranja era su próxima carrera o un evento de ciclismo a 800 kilómetros. Después de varios segundos en silencio, dijo algo que se me quedó grabado y cambió mi estrategia. "Si esto no fuera el Ironman de Cozumel y no fuera la única forma de inscribirme, ya habría cerrado la app."

Ahí entendí la magnitud del problema. Si Alex, un usuario que AsDeporte considera su mejor cliente estaba a un paso de rendirse, el atleta que llegaba por primera vez no tenía ninguna oportunidad. El problema no era estético ni técnico. Era estratégico. AsDeporte tenía el monopolio de las mejores carreras del país y lo estaba usando como red de contención, no como ventaja competitiva.

Y esa distinción es la diferencia entre una marca sólida y una marca que desaparece en cuanto aparece un competidor con la mitad de los eventos pero con una plataforma que funciona. No estábamos rediseñando una app. Llegamos a rescatar una relación que estaba a punto del divorcio.

---

## `cs-decisiones-titulos` — CORREGIDO (D1 y D2 sin cambio, D3 nuevo título)

- **01 · Decisión 1:** No se construye lealtad sobre una experiencia rota.
- **02 · Decisión 2:** La elegancia que no convierte es el diseño más caro.
- **03 · Decisión 3 (NUEVO título):** Saber cuándo no rediseñar es una de las habilidades más difíciles de adquirir.

---

## Decisión 1 — SIN CAMBIOS respecto a la ronda anterior

### Título imponente
No se construye lealtad sobre una experiencia rota.

### El problema

1. Marketing y liderazgo llevaban meses apostando por "Tribu" — la red social interna de atletas — como la pieza que transformaría a AsDeporte de ticketera a comunidad deportiva. `[fuente: fase_01_actividad_05_definicion_del_alcance_mvp_validado.md, "La sentencia de 'Tribu': el coraje de priorizar"]`
2. La investigación fue en sentido contrario: en entrevistas y pruebas, Tribu era un "pueblo fantasma" — nadie la usaba, pocos la conocían. Un atleta de Spartan Race fue directo: "Esto no es para espartanos. Cero útil." `[fuente: fase_01_actividad_02_investigacion_de_usuarios_atletas_b2c.md, línea 339]`
3. Los atletas ya tenían dónde socializar y medir su rendimiento: Strava y WhatsApp. Tribu competía en un terreno que el usuario ya había resuelto por su cuenta. `[fuente: fase_01_actividad_04_sintesis_y_definicion.md]`
4. Nadie en la mesa había cuestionado la apuesta hasta que llegó la investigación — era una idea emocionalmente atractiva y políticamente respaldada. `[fuente: fase_01_actividad_05, mismo pasaje]`

### La decisión

Propuse clasificar "Tribu" como Won't Have (W1) para el lanzamiento del MVP y redirigir el foco de diseño e ingeniería al motor de búsqueda y al flujo de pago — los dos puntos donde el negocio realmente sangraba. Fue una decisión incómoda: sabía que había capital político invertido en la idea, pero mi responsabilidad como diseñador senior era proteger los recursos de desarrollo. `[fuente: fase_01_actividad_05_definicion_del_alcance_mvp_validado.md]`

### El razonamiento

1. **Investigación unánime.** En las sesiones de research, el rechazo a Tribu fue "el hallazgo más unánime y doloroso" del estudio — todos los participantes del perfil frecuente la identificaron, la entendieron y la rechazaron casi de inmediato. `[fuente: fase_01_actividad_02_investigacion_de_usuarios_atletas_b2c.md, "El diagnóstico de la 'Tribu': un pueblo fantasma digital"]`
2. **Sustitución ya resuelta.** "Para conectar con mis amigos uso WhatsApp" fue la respuesta constante entre usuarios entrevistados — el rendimiento ya lo cubría Strava. `[fuente: fase_01_actividad_02, líneas 399 y 457]`
3. **El costo de oportunidad tenía número.** El propio tablero de KPIs del MVP fijaba como meta reducir 50% los reportes de error de pago a soporte — y el benchmark de industria de 70% de abandono promedio en checkout dejaba claro que no había margen para diluir ese esfuerzo en una funcionalidad social sin tracción. `[fuente: fase_01_actividad_05, "M2: El blindaje del proceso de pago"; fase_01_actividad_02, benchmark de conversión]`

### Argumento final

No tenía sentido pelear por diferenciación social mientras el motor de inscripciones fallaba en lo básico. Primero había que ganarse el derecho de hablar con el usuario, arreglando el pago. `[fuente: fase_01_actividad_05_definicion_del_alcance_mvp_validado.md, cita del "Trade-off"]`

---

## Decisión 2 — SIN CAMBIOS respecto a la ronda anterior

### Título imponente
La elegancia que no convierte es el diseño más caro.

### El problema

1. En el checkout original, el pago en Oxxo existía, pero se trataba como una opción secundaria, casi oculta frente a tarjeta de crédito/débito. `[fuente: fase_03_actividad_05_iteracion_del_diseno.md, "El logo de Oxxo como ancla de conversión offline"]`
2. En las pruebas de usabilidad, 8 de 15 participantes — sobre todo perfiles principiantes y mayores — pidieron explícitamente más visibilidad para esa opción. `[fuente: fase_03_actividad_04_recopilacion_y_analisis_de_feedback.md, PU-04]`
3. Un usuario lo resumió sin rodeos: "Oxxo es lo mejor para mí" — para el atleta ocasional, el efectivo era su zona de calma frente a un sistema digital en el que ya no confiaba del todo. `[fuente: fase_03_actividad_04, línea 88]`
4. La interfaz seguía priorizando lo digital sobre la realidad física de buena parte de los atletas mexicanos, a pesar de que la investigación ya lo señalaba como punto ciego. `[fuente: fase_03_actividad_04, línea 88]`

### La decisión

Rediseñé la jerarquía visual de la pantalla de pago para darle a Oxxo el mismo peso que a las tarjetas — mismo tamaño de logo, misma prominencia — y añadí un microcopy directo debajo: "Genera una referencia y paga en efectivo en cualquier tienda Oxxo." No fue una concesión estética: fue tratar el pago en efectivo como lo que los datos decían que era, un habilitador crítico de conversión. `[fuente: fase_03_actividad_05_iteracion_del_diseno.md, líneas 78-79]`

### El razonamiento

1. **La usabilidad inicial ya lo probaba.** El SEQ del pago en Oxxo entre quienes lo usaban fue de 4.7/5 — un acierto que no podíamos dejar escondido detrás de una jerarquía visual débil. `[fuente: fase_03_actividad_04, línea 252]`
2. **No era un problema de color, era de arquitectura.** El flujo carecía de una jerarquía que guiara al usuario mexicano hacia una opción que sigue siendo, culturalmente, la más confiable. `[fuente: fase_03_actividad_05, línea 35]`
3. **Bajo esfuerzo, alto impacto.** Era una victoria rápida de implementación sencilla con impacto directo en inclusión financiera — exactamente la apuesta que un roadmap con recursos limitados no podía dejar pasar. `[fuente: fase_03_actividad_04, línea 296]`

### Argumento final

En el re-testing, la apuesta se validó sin ambigüedad: SEQ perfecto de 5.0/5 y 100% de identificación inmediata del logo. Una participante lo dijo mejor que cualquier informe: "¡Qué bueno que está ahí grande y con el logo! Se ve claro." `[fuente: fase_03_actividad_06_re_testing.md, línea 325]`

---

## Decisión 3 — CONTENIDO NUEVO (reemplaza por completo a CURP)

### Título imponente
Saber cuándo no rediseñar es una de las habilidades más difíciles de adquirir.

### El problema

1. Los atletas de nicho (trail, MTB, triatlón) pedían filtros técnicos granulares — condiciones de *drafting*, puntos ITRA, tipo de terreno — que el modelo de datos del evento simplemente no capturaba. `[fuente: fase_03_actividad_05_iteracion_del_diseno.md, líneas 178, 194]`
2. 5 de 15 usuarios de las pruebas, mayoritariamente del perfil Plus — el segmento más rentable de la plataforma — reportaron esta carencia como fricción real de descubrimiento. `[fuente: fase_03_actividad_04_recopilacion_y_analisis_de_feedback.md, línea 132]`
3. Los principiantes tenían el problema inverso: 6 de 15 no encontraban información de terreno o dificultad antes de inscribirse — 0% de tasa de éxito en esa tarea específica, con 25 segundos adicionales de fricción buscando un dato que no existía. `[fuente: fase_03_actividad_04, línea 243]`
4. La solución "completa" — rediseñar el modelo de datos de eventos desde su raíz — competía directamente con el cronograma de ingeniería y con el alcance de la futura plataforma B2B, que dependería de esa misma estructura de datos. `[fuente: fase_03_actividad_05, línea 180]`

### La decisión

No reconstruí el modelo de datos. Documenté ambas carencias como Deuda Técnica de Diseño explícita para una fase futura, implementé soluciones tácticas dentro del alcance ya definido — uno o dos sub-filtros inferibles de los datos existentes, campos opcionales de terreno para organizadores — y protegí la arquitectura de información central, que auditoría propia confirmó sólida, de una reestructuración que habría puesto en riesgo la fecha de lanzamiento. `[fuente: fase_03_actividad_05_iteracion_del_diseno.md, líneas 189-190, 196]`

### El razonamiento

1. **La arquitectura central no estaba rota.** Auditar la navegación global y el sitemap confirmó que el problema vivía en la densidad de atributos del evento, no en el esqueleto de la app — reconstruir algo que ya funcionaba habría sido semanas de trabajo sin justificación real. `[fuente: fase_03_actividad_05, línea 186]`
2. **El costo de oportunidad era medible, no una corazonada.** Cambiar el modelo de datos en ese punto "dinamitaba la planificación de ingeniería y el alcance del B2B" que dependía de esa misma información — validado directamente con Producto e Ingeniería. `[fuente: fase_03_actividad_05, línea 180]`
3. **La severidad real no lo exigía todavía.** Tanto el problema de filtros de nicho como el de datos de terreno se triagearon como prioridad media, no crítica — ninguno bloqueaba la conversión principal, y el prototipo ya representaba un salto respecto a la app anterior. `[fuente: fase_03_actividad_04_recopilacion_y_analisis_de_feedback.md, línea 302]`

### Argumento final

El criterio senior no es entregar la solución perfecta — es saber qué batallas pelear hoy para que el producto llegue a manos del atleta mañana. Documenté la deuda, protegí el lanzamiento, y dejé el problema correctamente diagnosticado para cuando la plataforma B2B pudiera resolverlo de raíz. `[fuente: fase_03_actividad_05_iteracion_del_diseno.md, líneas 191, 193]`

---

## `rs-mosaico` — SIN CAMBIOS

**Label:** [ RESULTADO ]
**H3:** Cuando la certeza reemplaza la duda, los números se mueven solos.

---

## `rs-metricas` — CORREGIDO (swap de tarjeta 3)

1. **+30%** — Uso de beneficios Plus. Detalle: aumento del 30% en uso de descuentos y 3.1 visitas promedio por miembro al Hub de Beneficios. `[fuente: fase_05_actividad_04_monitorizacion_recopilacion_y_analisis.md, líneas 198 y 244]` — *sin cambios.*
2. **-60%** — Tickets de soporte por pagos. Detalle: reducción del 60% en errores de pago reportados a soporte, y 25% menos en consultas de información básica. `[fuente: fase_05_actividad_04, línea 196]` — *sin cambios.*
3. **NUEVA — 125,000** — Usuarios activos mensuales (MAU). Detalle: +20% sobre la base histórica de AsDeporte, con 15,000 nuevos registros en los primeros 30 días. `[fuente: fase_05_actividad_04, línea 174]`

*Se retira la tarjeta de retención D30 (25% vs meta 30%) de esta fila de resultados destacados — es una meta no alcanzada, no una victoria, y no debe competir visualmente con las otras dos cifras. Si se quiere mantener esa honestidad en algún lugar, el sitio adecuado es un contexto de aprendizaje/roadmap, no la sección que existe para demostrar impacto.*

---

## `rs-usuarios` — SIN CAMBIOS

Las métricas contaban la mitad de la historia. La otra mitad la contaron las grabaciones en Hotjar. Rage clicks que desaparecieron, usuarios que encontraban Oxxo y continuaban con alivio visible, el campo del CURP que dejó de paralizar.

---

## `rs-testimonio` — CORREGIDO (hallazgo abierto resuelto)

**Cita nueva (paráfrasis de fuente real, no cita textual inventada):**
"La interfaz se siente limpia y moderna — por primera vez, no sentí que la tecnología de AsDeporte competía con la calidad de sus carreras."

**Nota de trazabilidad:** esta versión está construida sobre feedback real documentado en `fase_05_actividad_04_monitorizacion_recopilacion_y_analisis.md, línea 147`: *"el feedback positivo empezó a consolidar nuestra dirección estética. Los usuarios elogiaban la interfaz 'limpia y moderna', y las 'Guías para Principiantes' se convirtieron en uno de los activos más valorados en las reseñas de la App Store."* No existe en ninguna fuente una cita textual de un solo atleta nombrado con esta fuerza narrativa — esto es una síntesis honesta del sentimiento agregado de reseñas reales, no una atribución a una persona específica. Si se prefiere una cita 100% verbatim de una sola persona en vez de una síntesis, no existe una disponible con esta fuerza; la alternativa sería usar una cita más débil y específica, o quitar el blockquote y dejar solo la paráfrasis narrada.

**Closing H3 (sin cambios):** No rediseñamos una app. Recuperamos la autoridad de una marca.

---

## `rs-cierre` — footer/contacto — SIN CAMBIOS

**Label:** [ Contacto ]
**H2:** ¿ARRANCAMOS?
**Texto:** El siguiente paso es una conversación.

*(Las 2 tarjetas "otros casos" al final no son contenido de este caso de estudio — fuera de este documento; hallazgo de SEO ya reportado aparte: ambas repiten el mismo texto de AsDeporte y no tienen href.)*

---

## Modal "Mi rol" — CORREGIDO (aclaración de status de consultoría)

**H2:** Más allá de las pantallas.

Entré al proyecto como consultor de producto senior, vía la consultora Dacodes, y fui responsable del ciclo completo de diseño. Desde el descubrimiento hasta la validación post-lanzamiento. Pero el trabajo que más importaba no estaba en las pantallas entregadas. `[fuente: fase_06_actividad_01_handoff_disenador.md, línea 128; caso_de_estudio_asdeporte.md, línea 28 — "Diseñador de Producto Experto (Consultor de Dacodes)"]`

Mi verdadero rol fue tener conversaciones incómodas, tomar y defender decisiones. Frenar funcionalidades que distraían, rebatir argumentos de negocio con datos de usuario, insistir cuando el negocio quería priorizar la estética sobre la confianza, y convencer a una organización de 30 años de que su mayor amenaza no venía de la competencia. Venía de su propia plataforma. *(sin cambios)*

---

## Modal "El proceso" — CORREGIDO (solo la última frase del paso Delivery)

El texto de los 3 pasos vive en `js/modal-proceso.js` (`stepData`), no en el HTML. Discovery y Definition quedan sin cambios. Delivery se corrige:

**Discovery — SIN CAMBIOS:**
En AsDeporte, la fase de descubrimiento no buscó tendencias ni referencias visuales. Buscó las fracturas exactas donde la experiencia estaba costándole dinero al negocio. Entrevistas con atletas, análisis de logs de soporte, grabaciones de sesión y auditorías de la plataforma existente construyeron un diagnóstico claro: la plataforma no tenía un problema visual, tenía una fuga de capital en el punto exacto donde el negocio facturaba.

**Definition — SIN CAMBIOS:**
La definición del alcance fue tan importante como el diseño mismo. El espacio de ideación se abrió a todas las disciplinas (ingeniería, marketing, producto), generando más de lo que el MVP podía absorber. La priorización fue implacable: cada funcionalidad se evaluó contra su impacto directo en conversión, y lo que no sobrevivió ese criterio quedó fuera del alcance, sin excepciones. Cada decisión respondía a un problema de usabilidad documentado. Ningún elemento existía por razones estéticas, cada iniciativa tenía un KPI asociado que la justificaba.

**Delivery — CORREGIDO:**
El sistema de diseño se construyó pensando en quien lo iba a implementar, no en quien lo iba a presentar. Cada decisión de componentes respondía a las restricciones técnicas del equipo de ingeniería. La factibilidad no fue una limitación, fue una variable de diseño desde el primer día. Post-lanzamiento, el monitoreo convirtió el comportamiento real de los atletas en insumo de diseño accionable. **Un fallo crítico de pagos en Android se detectó dentro de las primeras 72 horas de monitoreo intensivo y se resolvió como prioridad P0 en la ventana de estabilización.** El proceso no terminó con la entrega — terminó cuando los datos confirmaron las hipótesis. `[fuente: fase_05_actividad_04_monitorizacion_recopilacion_y_analisis.md, líneas 121, 151-152 — la cifra "primeras 48 horas" del texto original describía el tiempo típico de abandono de un usuario en una transacción, no el tiempo de detección/resolución de ese bug específico]`

---

## Modal "Qué aprendí" — CORREGIDO (Lección 2 reescrita por completo)

**H2:** Lo que los datos me enseñaron que el brief no podía decirme.

**Lección 1: Habla el idioma del negocio.** — SIN CAMBIOS. Defender al usuario a veces significa argumentar con métricas, no con empatía. El argumento que ganó con Oxxo no fue "es mejor para el usuario" — fue "esto nos está costando conversiones medibles."

**Lección 2 (NUEVA — reemplaza la versión del mapa geolocalizado, que no tenía respaldo en ninguna fuente y contradecía la historia real): Los datos también exponen mis propios puntos ciegos.**
Construí la integración con wearables asumiendo que "ver tu actividad reciente" bastaría. La adopción llegó a 3%, muy por debajo del 10% que proyectamos. Los atletas avanzados no querían un espejo — querían sincronización bidireccional real, subir sus resultados automáticamente a Strava o Garmin. Había diseñado para la funcionalidad, no para el modelo mental del atleta tecnológico. `[fuente: fase_05_actividad_04_monitorizacion_recopilacion_y_analisis.md, líneas 259, 261]`

**Lección 3: La pregunta correcta.** — SIN CAMBIOS. Dejé de preguntar "¿dónde abandona el usuario?" Ahora pregunto "¿qué duda específica lo hizo abandonar?" Son preguntas distintas. Llevan a soluciones distintas.
