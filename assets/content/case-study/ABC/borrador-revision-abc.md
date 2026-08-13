# Borrador de revisión — Caso ABC (Centro Médico ABC)

Sigue el mismo orden de secciones que `caso-asdeporte.html`. Cada cifra o cita lleva su fuente entre corchetes. Cero guiones largos (—) en el texto nuevo: se usan comas, puntos o paréntesis.

---

## SEO / Meta tags

- **Title**: `Caso Centro Médico ABC, JC ProductLab` (separador de dos puntos o coma en vez de guión largo, a decidir en implementación siguiendo la convención ya usada en `index.html`/`atoms.html` para el resto del sitio; si se prefiere consistencia total con el resto del sitio, usar guión largo aquí igual que en AsDeporte, ya que ahí se dejó como convención estructural, no como prosa).
- **Meta description**: "Caso de estudio: Centro Médico ABC. Un hospital de excelencia clínica con una experiencia digital fragmentada en tres sistemas distintos. Product Designer Lead, Julio César Tinoco." [caso_de_estudio_abc.md, resumen ejecutivo, para el rol; fase_00_actividad_01 para la fragmentación]
- **og:description / twitter:description**: "Un hospital de excelencia clínica con una experiencia digital fragmentada en tres sistemas distintos."

---

## Apertura (`cs-apertura` / ticker)

**Frase del ticker** (mismo patrón que "Una app de clase mundial que frenaba a sus propios atletas."):

> Un hospital de 130 años de excelencia clínica con una web que hacía sentir tonto al paciente.

Justificación: la fragmentación entre sitio institucional, portal de radiología y agendamiento solo de laboratorio es el problema central [caso_de_estudio_abc.md, sección 1; fase_00_actividad_01, contexto pre-rediseño]. El ángulo "hacía sentir tonto al paciente" viene del hallazgo real de que los pacientes se culpaban a sí mismos por no encontrar sus resultados, no al sistema [portafolio_caso_abc.md, párrafo 2, motivo: patrón consistente con el diagnóstico de fase_01 de baja auto-eficacia percibida ante el portal fragmentado; usar con cautela ya que esta cita específica de portafolio_caso_abc.md no está verbatim en las fases crudas, se mantiene como síntesis, no como cita textual atribuida].

---

## Métrica (`cs-metrica`) — CONTENIDO NUEVO

**Número grande**: `82%` estilo AsDeporte (formato de "puntuación sobre 100" mostrado como número grande, replicando el patrón visual del 43%), o alternativamente mostrar `+37 pts` si el formato del componente lo permite. **Recomendado**: `82` con el arrow icon apuntando arriba, ya que replica el patrón visual exacto de AsDeporte (cifra sola).

**Caption**: "Puntuación de usabilidad (SUS) de 45 a 82 en producción real, tres meses después del lanzamiento." [fase_05_actividad_02, Parte 2, líneas 74-77: "un 45/100... la métrica actual se disparó a un 82/100... salto de 37 puntos"; confirmado también en fase_05_actividad_01, actividad_03, actividad_04, actividad_05]

**Nota de verificación**: NO usar el "78" que aparece en `caso_de_estudio_abc.md` (tabla de resultados) ni en `fase_03_actividad_01/02/03/04/06`, porque esa cifra corresponde a la validación en prototipo de Figma con 8 usuarios, previa al lanzamiento [fase_03_actividad_04, Parte 1]. El "82" es la medición real en producción, enero-febrero de 2022 [fase_05_actividad_02, Parte 2, línea 77].

---

## Contexto (`cs-contexto`)

**Título (`cs-section-title`)**: "Un hospital con más de 130 años de excelencia clínica hacía que sus pacientes se sintieran incompetentes frente a una pantalla." [130 años: caso_de_estudio_abc.md, sección 1]

**Tags**: `Centro Médico ABC` · `Salud digital` · `B2C` · `~14 meses` [duración: fase_00_actividad_02, Parte 5, fin 2020/inicio 2021 a enero de 2022]

**Párrafos** (reemplazan la anécdota de Alex en AsDeporte):

> Una de mis primeras sesiones de research fue con un ejecutivo que buscaba un cardiólogo. Encontró al médico que necesitaba, llegó a su perfil esperando ver un calendario de disponibilidad, y el flujo terminaba en un número de teléfono para llamar al conmutador. [fase_01, síntesis de mapeo del ecosistema digital y físico: agendamiento en línea limitado solo a laboratorio]

> El diagnóstico inicial fue contundente. El 75% de los usuarios que intentaron agendar una cita con un especialista en línea reportó frustración o no pudo completarla. En pruebas moderadas, la tasa de éxito de esa misma tarea fue de 0%. [fase_01_actividad_01, Parte 4; fase_01_actividad_03, Parte 4]

> La plataforma tenía una puntuación de usabilidad (SUS) de 45 sobre 100, calificada como "pobre". El 68% de los pacientes pedía explícitamente un solo lugar para ver todos sus resultados médicos, en vez de tener que adivinar si estaban en el sistema de laboratorio o en el de radiología. [fase_01_actividad_01, Parte 4; fase_01_actividad_03, Parte 4 y 6]

> El problema no era estético. Un paciente esperando el resultado de un estudio no tiene la misma paciencia que un usuario comprando ropa en línea. Diseñar para salud significa diseñar para gente en un momento de vulnerabilidad, no para un usuario promedio con tiempo de sobra.

**Acciones**: mismos botones "Mi rol" / "El proceso".

---

## Decisiones, títulos (`cs-decisiones-titulos`)

1. **Decisión 1**: "El portal que nadie entendía era un obstáculo entre el paciente y su salud."
2. **Decisión 2**: "Un hospital que excluye a quien más lo necesita no está cumpliendo su misión."
3. **Decisión 3**: "El prototipo mintió, y la producción real me lo hizo pagar."

---

## Decisión 1 — De portal como hub a acción directa

### Cortina (`cs-decision`, data-dec="1")
Título: "El portal que nadie entendía era un obstáculo entre el paciente y su salud."

### El problema (`cs-problema`, 4 cards)

1. La arquitectura original proponía "Mi Portal Paciente ABC" como un hub centralizado: el paciente debía entrar ahí primero y luego navegar a resultados o citas. [fase_02_actividad_05, Parte 1 y 6]
2. En pruebas con prototipo navegable (7 sesiones de 60 minutos), los usuarios se detenían confundidos frente al acceso al portal, sin saber si ahí estaban sus citas, sus resultados, o ambos. [fase_02_actividad_05, Parte 3, línea 119: "8 sesiones de 60 minutos que programé"; ejecutadas y reportadas como 7 en Partes 4 a 6]
3. Una usuaria (perfil Elena) lo dijo de forma directa durante una sesión de prueba: "No sé si tengo que ir a 'Mi Portal' o a 'Consulta tus Resultados'. ¿Es lo mismo?" [fase_02_actividad_05, Parte 4, línea 182 y Parte 5, línea 228, cita repetida verbatim en ambas partes]
4. El hallazgo se clasificó como Severidad Mayor: el concepto de "portal" era demasiado abstracto frente a la necesidad concreta del paciente de ver un resultado o agendar una cita. [fase_02_actividad_05, Parte 5, línea 226-230]

### La decisión (`cs-decision-mc`)

> Prioricé la acción directa sobre el concepto de portal. En la homepage, transformé el acceso genérico al hub en dos CTAs utilitarios y prominentes, "Agenda tu cita" y "Consulta tus resultados", con el portal pasando de ser un destino en sí mismo a ser el contenedor que se activa después de que el paciente decide qué necesita. No fue una simplificación estética: fue reconocer que nadie llega a un sitio de salud con ganas de explorar un hub, llega con una necesidad puntual que hay que resolver en el menor número de clics posible. [fase_02_actividad_05, Parte 6, líneas 194-196 y 288]

### El razonamiento (`cs-razonamiento`, 3 métricas)

- Métrica 1: **7** sesiones de prueba con protocolo Think Aloud, todas moderadas por mí. [fase_02_actividad_05, Parte 4, "séptimo participante"]
- Métrica 2: **Severidad Mayor**, la clasificación más alta del sistema de triaje usado para priorizar hallazgos. [fase_02_actividad_05, Parte 5]
- Métrica 3: **60%** de éxito en inicio de sesión al portal medido después del lanzamiento, con 70% de éxito en visualización de resultados una vez dentro (dato de contexto para mostrar que el problema de arquitectura persistía incluso post-lanzamiento). [fase_05_actividad_02, Parte 3, línea 154 y 156]

**Descriptores** (rail):
1. "Los usuarios no buscaban 'un portal' como concepto, buscaban resolver una necesidad inmediata: ver un resultado o agendar una cita." [fase_02_actividad_05, Parte 5, línea 228]
2. "La arquitectura de información estaba compitiendo consigo misma: el hub creaba un paso intermedio innecesario para quienes solo querían una respuesta rápida." [fase_02_actividad_05, Parte 5, línea 230, paráfrasis cercana del insight estratégico documentado]
3. "Meses después del lanzamiento, el 60% lograba entrar al portal, pero solo el 70% de esos encontraba lo que buscaba dentro. La arquitectura seguía reflejando los silos del hospital, no la mente del paciente." [fase_05_actividad_02, Parte 4, línea 199, síntesis del hallazgo de "paradoja de la unificación"]

**Conclusión (cita)**:
> "El paciente no debe entender de silos tecnológicos. El paciente solo quiere saber si está sano." [fase_02_actividad_03, Parte 4 y 6, cita del propio documento de fase]

---

## Decisión 2 — Accesibilidad con evidencia real

### Cortina
Título: "Un hospital que excluye a quien más lo necesita no está cumpliendo su misión."

### El problema (4 cards)

1. En la auditoría automatizada inicial en staging, la plataforma tenía múltiples violaciones críticas de contraste, ARIA y jerarquía de encabezados rota (saltos de H1 a H3). [fase_04_actividad_02, Parte 2]
2. Al navegar solo con teclado, encontré "keyboard traps" reales: un modal de agendamiento y el modal de Aviso de Privacidad atrapaban el foco sin posibilidad de salir con Escape. [fase_04_actividad_02, Parte 3, línea 140; Parte 5, línea 247]
3. Más de 15 elementos de navegación críticos estaban implementados como `div` con `onClick` en vez de HTML semántico, invisibles para cualquier usuario de teclado. [fase_04_actividad_02, Parte 7, línea 348]
4. El equipo de desarrollo había eliminado el anillo de foco visual por estética, dejando a cualquier usuario de teclado navegando a ciegas. [fase_04_actividad_02, Parte 3, línea 128]

### La decisión (`cs-decision-mc`)

> No tratamos la accesibilidad como una lista de ajustes cosméticos de última hora. Prioricé WCAG 2.1 Nivel AA como estándar no negociable, con criterios ligados directamente a tickets de Jira para que cada corrección compitiera por recursos igual que cualquier bug funcional. Cuando el Design System usaba un gris claro elegante que no llegaba al contraste mínimo de 4.5:1, decidí oscurecerlo aunque el equipo argumentara que se perdía sutileza visual: la estética del hospital nunca debía comprometer que un paciente con baja visión pudiera leer una instrucción de preparación para un estudio. [fase_04_actividad_02, Parte 2, línea 94-96]

### El razonamiento (3 métricas)

- Métrica 1: **65 → 95**, puntaje de accesibilidad en Lighthouse antes y después de la remediación en staging. [fase_04_actividad_02, Parte 7, línea 379]
- Métrica 2: **15+** elementos de navegación corregidos de div clicable a HTML semántico. [fase_04_actividad_02, Parte 7, línea 348]
- Métrica 3: **4.5:1**, ratio de contraste mínimo alcanzado en todas las combinaciones de color del Design System, verificado en la ronda final de pruebas. [fase_04_actividad_02, Parte 8, línea 422]

**Descriptores**:
1. "Corregimos trampas de teclado reales: un modal de agendamiento y el aviso de privacidad atrapaban el foco sin salida." [fase_04_actividad_02, Parte 3 y 7, línea 367-368: implementación de Focus Trap con restauración de foco]
2. "Cada hallazgo de accesibilidad se documentó como bug o ajuste de UX formal en Jira, ligado a un criterio WCAG específico, no como una sugerencia de diseño." [fase_04_actividad_02, Parte 5, línea 234-241]
3. "El cierre formal se firmó en diciembre de 2021, con el Líder de Desarrollo Frontend y el Líder de QA, certificando que la implementación era fiel a los mockups y cumplía WCAG 2.1 AA." [fase_04_actividad_02, Parte 8, línea 428]

**Conclusión (cita)**:
> "La accesibilidad no es un feature que se añade al final, es la integridad misma de la arquitectura. Si un usuario no puede salir de un modal con la tecla Escape, hemos fallado en la construcción básica de la libertad del usuario dentro de nuestro ecosistema digital." [fase_04_actividad_02, Parte 3, línea 142, insight de diseño documentado en el archivo de fase]

---

## Decisión 3 — El calendario que funcionó en el prototipo y falló en producción

### Cortina
Título: "El prototipo mintió, y la producción real me lo hizo pagar."

### El problema (4 cards)

1. En el prototipo de Figma, sin lógica de backend real, el flujo de agendamiento con especialistas midió una tasa de éxito del 95% en pruebas de usabilidad pre-lanzamiento. [fase_03_actividad_01, línea 535; fase_03_actividad_04, línea 148 y 220]
2. En producción real, la tasa de abandono en ese mismo flujo se disparó a 60%, concentrada exactamente en el paso de selección de horario. [fase_05_actividad_02, Parte 3, línea 132]
3. Cruzando los datos de GA4 con grabaciones de Hotjar, encontré usuarios haciendo "rage clicks", cinco o seis clics repetidos sobre el mismo horario en menos de dos segundos, antes de abandonar. [fase_05_actividad_02, Parte 4, línea 187]
4. El prototipo de alta fidelidad nunca pudo simular la latencia y disponibilidad real del sistema de citas del hospital: la ausencia de un indicador de carga claro generaba una incertidumbre que el prototipo, por diseño, no podía predecir. [fase_05_actividad_02, Parte 4, línea 189]

### La decisión (`cs-decision-mc`)

> No presenté este hallazgo como un éxito disfrazado. Documenté la brecha entre la validación en prototipo (95% de éxito, sin backend real) y el resultado real en producción (60% de abandono) como lo que era: una limitación estructural de validar flujos transaccionales complejos en Figma sin simular latencia de sistemas reales. Prioricé, para el corto plazo, el rediseño del selector de horarios y la comunicación clara de disponibilidad real, en vez de prometer una solución inmediata que no habíamos validado todavía. [fase_05_actividad_02, Parte 6, línea 304-307, roadmap Q4 2022-Q1 2023]

### El razonamiento (3 métricas)

- Métrica 1: **95%**, éxito medido en el prototipo de Figma antes del lanzamiento. [fase_03_actividad_04, línea 148]
- Métrica 2: **60%**, abandono real en producción en el paso de selección de horario, el hallazgo más citado de toda la Fase 5. [fase_05_actividad_02, Parte 3, línea 132; confirmado también en actividad_01, 03, 04 y 05]
- Métrica 3: **95%**, nivel de confianza estadística exigido como estándar mínimo para cualquier cambio implementado a partir de este hallazgo. [fase_05_actividad_02, Parte 5, línea 241]

**Descriptores**:
1. "El diagnóstico inicial de TI apuntaba a un problema de rendimiento de base de datos. Los datos de comportamiento demostraron que era un problema puro de claridad de interfaz, no de infraestructura." [fase_05_actividad_02, síntesis de Parte 3 y 4]
2. "Una tasa de abandono del 60% en el último paso no es un problema de estética, es una ruptura de la confianza: el paciente interpreta la falta de claridad como una falta de organización del hospital." [fase_05_actividad_02, Parte 3, línea 136, insight documentado en el archivo de fase]
3. "El hallazgo quedó documentado en el roadmap de corto plazo (Q4 2022, Q1 2023), como rediseño del selector de horarios y mejora de la visibilidad de disponibilidad real, no como un problema resuelto." [fase_05_actividad_02, Parte 6, línea 300-307]

**Conclusión (cita)**:
> "El criterio senior no es entregar la solución perfecta en el primer intento. Es medir en producción real, admitir cuando el prototipo no fue suficiente, y priorizar la corrección con la misma disciplina con la que se prioriza un lanzamiento." [síntesis editorial propia, NO es cita textual de ningún archivo de fase; revisar en la iteración si se prefiere una formulación más cercana a una cita real o mantenerla como reflexión sin comillas]

---

## Resultados (`rs-mosaico` / `rs-metricas`)

**Título de resultados**: "Cuando el paciente deja de adivinar, los números lo confirman."

**Tarjetas de métricas** (`rs-metricas`, 3 tarjetas, mismo patrón que AsDeporte):

1. **-50%** tiempo en tarea. "Agendar una cita de laboratorio bajó de 4:15 a 2:10 minutos." [fase_05_actividad_02, Parte 2, línea 85]
2. **-25%** llamadas al Call Center relacionadas con consultas que ahora se resuelven en línea. [fase_05_actividad_02, Parte 2, línea 92]
3. **+18% / +22%** CTR en las dos pruebas A/B implementadas al 100% del tráfico (cambio de microcopy "Agendar Cita Ahora" y tarjeta destacada de resultados), ambas con 95%+ de confianza estadística. [fase_05_actividad_02, Parte 5, líneas 254-256 y 271-273]

**Nota de verificación**: se evitó usar "10%→35% citas online" y "20%→55% resultados online" como protagonistas porque, aunque son reales [fase_05_actividad_01 y actividad_02], aparecen citadas en menos archivos de forma cruzada que las tres métricas elegidas arriba.

---

## Testimonio (`rs-usuarios` / `rs-testimonio`)

No hay una cita verbatim de un solo paciente con la fuerza narrativa suficiente y trazabilidad clara (mismo problema que se identificó en AsDeporte). Propuesta de síntesis honesta, sin comillas de atribución individual falsa:

> "Los pacientes dejaron de sentirse perdidos entre el sitio del hospital y el portal de resultados. La confusión que antes terminaba en una llamada al Call Center ahora se resuelve sola, la mayoría de las veces."

**Nota de verificación**: esta frase es una síntesis editorial de los hallazgos de fase_05_actividad_02 y 03 (reducción de llamadas, feedback cualitativo positivo), no una cita textual de un paciente real. Igual que en AsDeporte, recomiendo mantenerla sin comillas de atribución a una persona específica, o presentarla explícitamente como síntesis del equipo de producto en vez de cita de paciente.

---

## Modal "Mi Rol"

> Entré al proyecto como consultor de producto senior, de forma independiente para una agencia externa, y fui responsable del ciclo completo de diseño desde el descubrimiento hasta la validación post-lanzamiento. [fase_02_actividad_04, Parte 4, línea "trabajaba de forma independiente como diseñador"; rol confirmado como Product Designer Lead en múltiples archivos]

> Mi verdadero rol fue traducir entre departamentos que no se hablaban entre sí. Para que un botón de "Agendar Cita" funcionara, tuve que sentar a un médico, a un desarrollador y a un área administrativa en la misma mesa y hacer que se pusieran de acuerdo. [síntesis de fase_00_actividad_02, gobernanza y RACI, y fase_04_actividad_01, colaboración con desarrollo]

**Nota de verificación**: NO se nombra "Agencia Denumeris" porque ese nombre solo aparece en `caso_de_estudio_abc.md` (resumen ejecutivo), nunca en los 28 archivos de fase ni en `portafolio_caso_abc.md`. Confirmé con un grep completo sobre la carpeta ABC: cero coincidencias. Se deja como "agencia externa" sin nombrar, siguiendo el criterio de no citar datos de una sola fuente no verificada.

---

## Modal "El Proceso"

Puede mencionar que la validación de usabilidad en prototipo (Figma, 8 participantes) alcanzó un SUS de 78 antes del lanzamiento [fase_03_actividad_04], aclarando que es distinto del resultado real medido en producción (82) [fase_05_actividad_02]. Sugerencia de texto para uno de los tres pasos (Discovery/Definition/Delivery), a definir en implementación con el mismo formato que `modal-proceso.js` de AsDeporte (`stepData`).

---

## Modal "Qué Aprendí"

**Lección 1** (sugerida, tono similar a "Habla el idioma del negocio" de AsDeporte):
> Lección 1: La accesibilidad se defiende con tickets, no con principios. El argumento que movió al equipo no fue "es lo correcto", fue vincular cada hallazgo a un criterio WCAG específico y a un ticket de Jira. Sin ese respaldo, un bug de accesibilidad es solo una sugerencia de diseño. [fase_04_actividad_02, Parte 5, línea 243]

**Lección 2** (la más honesta, reemplaza cualquier final feliz):
> Lección 2: Un prototipo sin backend real puede mentir. Validé el flujo de agendamiento con especialistas en Figma con 95% de éxito, y en producción real ese mismo flujo tuvo 60% de abandono. La causa no fue mi diseño del calendario: fue que ningún prototipo estático puede simular la incertidumbre real de esperar una respuesta del sistema. Aprendí a no declarar una victoria de usabilidad hasta verla sostenida en producción, con tráfico real. [fase_03_actividad_04 vs. fase_05_actividad_02]

---

## Notas de verificación (dudas abiertas, no resueltas al 100%)

1. **Título de la sección de apertura y frase de conclusión de Decisión 3**: la frase final de la Decisión 3 ("El criterio senior no es entregar la solución perfecta en el primer intento...") es una síntesis editorial mía, no una cita textual localizada en ningún archivo de fase. En AsDeporte la cita equivalente sí era textual del archivo fuente. Recomiendo decidir en la revisión si se mantiene como reflexión sin comillas o si se busca una formulación más cercana a un pasaje real de `fase_05_actividad_02` o `05`.
2. **Testimonio de paciente**: no encontré ninguna cita verbatim de un solo paciente con fuerza narrativa y atribución clara (mismo problema que en AsDeporte). La síntesis propuesta no es una cita real.
3. **Título SEO**: dejé dos opciones (con guión largo, siguiendo la convención sitewide de `index.html`/`atoms.html`, o con coma) porque el título/og-title/twitter-title de AsDeporte se dejó con guión largo por ser convención estructural compartida con el resto del sitio, no prosa. Definir en implementación.
4. **"37 vs. 40 pantallas de alta fidelidad"**: no se usó esta cifra en ningún bloque porque la fuente se contradice internamente (37 y 40 aparecen en el mismo archivo). Si se necesita mencionar volumen de pantallas en algún punto, usar una frase cualitativa, no un número.
5. **Fecha exacta de cierre de UAT**: evitada por completo, ya que fase_04 dice "mediados de 2022" y fase_05 dice "finales de 2021" para el mismo hito. Solo se usa "enero de 2022" como fecha de lanzamiento, consistente en múltiples archivos.
6. **Cita del ticker de apertura**: la frase "hacía sentir tonto al paciente" es una síntesis de tono, no una cita textual. Verificar que el tono coincida con el resto de la página antes de aprobar.
