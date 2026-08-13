# Borrador de revisión — Caso Gentera (GAC)

Sigue el mismo orden de secciones que `caso-asdeporte.html`. Cada cifra o cita lleva su fuente entre corchetes. Cero guiones largos (—) en el texto nuevo: se usan comas, puntos o paréntesis.

---

## SEO / Meta tags

- **Title**: `Caso Gentera — JC ProductLab` (guión largo, misma convención sitewide que AsDeporte/ABC/index.html/atoms.html)
- **Meta description**: "Caso de estudio: Gentera. Una sola persona sostenía en su cabeza la capacitación de 27,000 empleados. Product Designer, Julio César Tinoco."
- **og:description / twitter:description**: "Una sola persona sostenía en su cabeza la capacitación de 27,000 empleados."

---

## Apertura (`cs-apertura` / ticker)

**Frase del ticker**:

> Una sola persona sostenía la capacitación de 27,000 empleados a mano, en Excel.

Justificación: es el hecho central verificado en 9+ archivos [fase_01_actividad_01 a 05]: Carlos, Administrador de Capacitación, gestionaba manualmente el proceso completo para toda la plantilla de Gentera, sin documentación de las reglas de negocio ("Todas vivían en la cabeza de Carlos" es síntesis, no cita textual, pero refleja el hallazgo verificado de que ninguna regla estaba documentada en ningún sistema [fase_01_actividad_04]).

---

## Métrica (`cs-metrica`): CONTENIDO NUEVO

**Número grande**: `16x` (no un porcentaje, ver justificación abajo).

**Caption**: "El proceso de capacitación pasó de 24 a 32 horas semanales a 1.5 a 2 horas. Dieciséis veces más rápido." [fase_04_actividad_04, línea 120: "el tiempo de generación de listas semanales, que antes consumía entre 24 y 32 horas de trabajo manual intenso, se estabilizó en un rango de 1.5 a 2 horas"; confirmado también en fase_04_actividad_03 y 05]

**Nota de verificación**: se eligió "16x" (24÷1.5=16, 32÷2=16, exacto en ambos extremos del rango) en vez de "-90%" porque el ícono `.cs-metrica__arrow` es una flecha fija apuntando hacia arriba a la derecha, la misma que usa AsDeporte para una cifra de crecimiento. Un "-90%" con esa flecha sería visualmente incoherente (lee como retroceso). "16x" se lee como mejora sin tocar el ícono. La cifra "90-95% de reducción" [fase_04_actividad_04, línea 120: "Ver esa reducción del 90-95% en el dashboard de Grafana"] es consistente y se reutiliza en Resultados.

---

## Contexto (`cs-contexto`)

**Título (`cs-section-title`)**: "Una sola persona sostenía en su cabeza las reglas de capacitación de 27,000 empleados, y nadie más las conocía." [síntesis del hallazgo verificado: reglas de negocio no documentadas, dependientes exclusivamente del conocimiento de Carlos, fase_01_actividad_04]

**Tags**: `Gentera` · `Interno / RRHH` · `27,000 colaboradores` · `B2E`

**Nota de verificación**: no se encontró en ningún archivo de fase una duración total del proyecto en meses (a diferencia de AsDeporte "10 meses" y ABC "14 meses"). No se inventó un número; se usó la escala del proyecto (27,000 colaboradores) y su naturaleza (B2E, interno) como tags verificables en su lugar.

**Párrafos** (reemplazan la anécdota de Alex):

> Una de mis primeras sesiones de research fue observar a Carlos, el Administrador de Capacitación, en su rutina semanal. Cada jueves por la mañana descargaba una plantilla de datos del sistema de RRHH y desaparecía durante horas en una maratón de Excel. [fase_01_actividad_02, observación contextual]

> El proceso consumía entre 24 y 32 horas semanales de una sola persona. Las reglas que determinaban quién se capacitaba, cuándo y en qué sede (como la identificación del "Gerente Multiproducto" o el tratamiento de reingresos) no estaban documentadas en ningún sistema. Vivían únicamente en el conocimiento de Carlos. [fase_01_actividad_01, fase_01_actividad_04]

> La tasa de error en las convocatorias rondaba entre el 10% y el 15% de los registros: colaboradores enviados a cursos equivocados, en sedes equivocadas, o cursos que ya habían tomado antes. [fase_01_actividad_01 y 02, consistente en 8+ archivos]

> Carlos lo resumió sin rodeos sobre una de las tareas más tediosas del proceso: "Lo del .ical es lo que más odio". [fase_01_actividad_02, línea 189, confirmado también en fase_01_actividad_03]

**Acciones**: mismos botones "Mi rol" / "El proceso".

---

## Decisiones, títulos (`cs-decisiones-titulos`)

1. **Decisión 1**: "Una tabla de estatus no le devuelve a nadie su camino."
2. **Decisión 2**: "Rechazar un error no es lo mismo que ayudar a corregirlo."
3. **Decisión 3**: "Una decisión automática sin explicación no libera a nadie, lo pone a vigilar a la máquina."

---

## Decisión 1: El mapa de ruta visual para Ana

### Cortina (`cs-decision`, data-dec="1")
Título: "Una tabla de estatus no le devuelve a nadie su camino."

### El problema (`cs-problema`, 4 cards)

1. "Los stakeholders pedían una interfaz corporativa estándar: una tabla con columnas de nombre del curso y estatus." [portafolio_caso_gentera.md, contexto de la decisión, coherente con fase_02_actividad_06 donde se definieron los conceptos de 'Mapa Interactivo' vs. alternativas tabulares]
2. "Ana, asesora de ventas en sucursal, recibía las convocatorias de capacitación como mensajes administrativos sin contexto, sin saber cuánto le faltaba para avanzar en su desarrollo." [fase_01_actividad_03, arquetipo de Ana]
3. "En la primera ronda de pruebas, Ana se detuvo confundida sobre el término 'Toques con Formador' y preguntó: 'No sé qué implica esto, ¿es una llamada o una reunión física?'" [fase_03_actividad_03, línea 84]
4. "El hallazgo se clasificó como Severidad Baja individualmente, pero era un síntoma de un problema mayor: terminología validada por el negocio que no se traducía en claridad para quien la usaba a diario." [fase_03_actividad_03, línea 84]

### La decisión (`cs-decision-mc`)

> Diseñé un mapa de ruta visual con niveles (Básico, Intermedio, Avanzado, Experto) en vez de una tabla de estatus, con tooltips en los nodos clave que explicaran cada término técnico en lenguaje simple. No fue una decisión estética: fue reconocer que Ana no necesitaba más trabajo administrativo encima de su carga ya pesada, necesitaba ver en segundos dónde estaba y hacia dónde iba. [fase_02_actividad_06, línea 74: concepto de 'Mapa Interactivo' con hitos Básico/Intermedio/Avanzado; fase_03_actividad_01/02, tooltips en niveles clave del mapa]

### El razonamiento (`cs-razonamiento`, 3 métricas)

- Métrica 1: "4". Descriptor: "Niveles de progreso (Básico, Intermedio, Avanzado, Experto) que reemplazaron una lista plana de cursos pendientes." [fase_02_actividad_06, línea 74]
- Métrica 2: "Severidad Baja". Descriptor: "La clasificación inicial del hallazgo de terminología ambigua no reflejaba su impacto real: una interfaz que el negocio valida no siempre es una interfaz que el usuario entiende." [fase_03_actividad_03, línea 84]
- Métrica 3: "2 segundos". Descriptor: "El tiempo que tomó disolver la confusión de Ana una vez que el tooltip explicó el término en su propio lenguaje." [fase_03_actividad_02, línea 175: "la ambigüedad que antes generaba fricción se había disuelto en una interacción de dos segundos"]

**Descriptores** (rail, alineados con las métricas de arriba):
1. "Cuatro niveles de progreso reemplazaron una lista plana de cursos pendientes."
2. "La clasificación inicial de Severidad Baja no reflejaba el impacto real: terminología validada por el negocio, pero ambigua para quien la usaba a diario."
3. "En la segunda ronda, Ana pasó el cursor sobre 'Toque con Formador' y dijo: 'Ah, ahora sí sé qué es esto. Es cuando me siento con mi mentor para revisar el avance. Muy claro'." [fase_03_actividad_02, línea 175]

**Conclusión (cita)**:
> &ldquo;Ver que estás en el nodo 3 de 12 no es un juego. Es el alivio de saber que tienes un camino claro y que estás avanzando en él.&rdquo; [síntesis editorial cercana al razonamiento documentado en fase_02_actividad_06 y portafolio_caso_gentera.md; no es cita textual verbatim de un archivo de fase, marcado como tal]

---

## Decisión 2: Edición en línea de errores para Carlos

### Cortina
Título: "Rechazar un error no es lo mismo que ayudar a corregirlo."

### El problema (4 cards)

1. "Cuando la plantilla importada llegaba con errores, algo que pasaba siempre, el sistema los detectaba pero obligaba a Carlos a volver al archivo original de Excel para corregirlos." [fase_02_actividad_04, línea 78, contexto de la petición de Carlos]
2. "Carlos lo dijo directamente durante una sesión de feedback: 'Me gusta que detectemos el error, pero desearía que el sistema no se detuviera ahí. Si sabemos que un dato está mal, el sistema debe ser capaz de sugerir la corrección basándose en el histórico, no solo señalar la herida.'" [fase_02_actividad_04, línea 78]
3. "El Líder Técnico de Dacodes objetó la edición en línea total por integridad de datos: 'Modificar celdas individuales en una tabla que refleja una base de datos relacional de este tamaño tiene implicaciones de integridad que no podemos ignorar.'" [fase_03_actividad_02, línea 152]
4. "Mandar a Carlos de regreso al archivo original por errores de tipografía no era eficiencia, era trasladar su sufrimiento de una ventana a otra con mejor diseño." [síntesis del hallazgo documentado en fase_02_actividad_04 y fase_03_actividad_01/02]

### La decisión (`cs-decision-mc`)

> Diseñé una edición in-situ controlada, con validación en tiempo real antes de guardar, para errores individuales, más un botón de "Re-subir Plantilla" reservado para errores masivos que sí requerían corregir el archivo de origen. Fue más difícil de implementar por las restricciones de integridad que planteó el equipo técnico, pero resolvía el problema real sin trasladarlo. [fase_03_actividad_01 y 02, US-001: Claridad en Corrección de Inconsistencias]

### El razonamiento (3 métricas)

- Métrica 1: "9". Descriptor: "Problemas de usabilidad priorizados (US-001 a US-009) identificados en la primera ronda de pruebas, con la corrección de errores como el más citado." [fase_03_actividad_02, "una lista de nueve problemas priorizados"]
- Métrica 2: "85→90". Descriptor: "Puntuación SUS antes y después de la segunda ronda de iteración, que incluyó esta corrección." [fase_03_actividad_01 y 02, consistente]
- Métrica 3: "0". Descriptor: "Veces que Carlos tuvo que volver a descargar y resubir un archivo completo por un error individual, después de la segunda ronda de pruebas." [fase_03_actividad_02, línea 173, validado en la sesión de prueba]

**Descriptores**:
1. "Nueve problemas de usabilidad priorizados en la primera ronda, con la corrección de errores como el más citado por los usuarios."
2. "La puntuación SUS subió de 85 a 90 entre rondas, pero la cifra por sí sola escondía la frustración real que Carlos mostraba al corregir errores." [fase_03_actividad_02, línea 144: "ese número era un ruido de fondo que intentaba ocultar las muecas de frustración que vi en el rostro de Carlos"]
3. "En la sesión de validación, Carlos corrigió un error directamente en la plataforma y dijo, sin que se lo preguntaran: 'Esto es súper práctico. Es mucho más rápido que tener que descargar, corregir y volver a subir todo por un simple error de dedo.'" [fase_03_actividad_02, línea 173]

**Conclusión (cita)**:
> &ldquo;Si obligamos a Carlos a salir de la plataforma para corregir un solo dato en Excel y volver a subirlo, estamos rompiendo la promesa de automatización.&rdquo; [fase_03_actividad_01, cita atribuida al propio autor en la discusión con desarrollo]

---

## Decisión 3: Transparencia contra la caja negra

### Cortina
Título: "Una decisión automática sin explicación no libera a nadie, lo pone a vigilar a la máquina."

### El problema (4 cards)

1. "El sistema debía clasificar automáticamente casos especiales, como identificar a un gerente bajo la regla de 'Gerente Multiproducto', sin que existiera un campo explícito para eso en los datos de origen." [fase_01_actividad_01 y fase_01_actividad_04, regla RN-SEG-004]
2. "Los stakeholders pedían una interfaz limpia, sin explicaciones visibles de por qué el sistema tomaba cada decisión." [fase_02_actividad_01, contexto de la sesión de bocetaje]
3. "Carlos fue directo: 'Me gusta que el sistema decida, pero necesito saber por qué lo decidió.' Enfatizó que la plataforma no podía ser una caja negra." [fase_02_actividad_01, línea 346]
4. "Si un colaborador era excluido de una ruta de capacitación, el sistema tenía que mostrar la lógica aplicada, o Carlos terminaría verificando cada caso a mano en su Excel de todas formas." [fase_02_actividad_01, línea 346]

### La decisión (`cs-decision-mc`)

> Insistí en incluir un tooltip junto a cada decisión automática que explicara la regla aplicada, por ejemplo, por qué un colaborador se clasificó como Gerente Multiproducto. No era ensuciar la interfaz: era la diferencia entre que Carlos soltara el control por primera vez en años, o que siguiera hacienda el trabajo doble por no confiar en la máquina. [fase_02_actividad_01, línea 346]

### El razonamiento (3 métricas)

- Métrica 1: "98%". Descriptor: "Precisión de la automatización de elegibles en producción real, superando el objetivo inicial del 95%." [fase_04_actividad_04, línea 120]
- Métrica 2: "100%". Descriptor: "Adopción de administradores de capacitación en los primeros tres meses. Nadie regresó al Excel." [fase_04_actividad_04, línea 118]
- Métrica 3: "0.5%". Descriptor: "Tasa de error final en convocatorias, abajo del 10 a 15% del proceso manual." [fase_04_actividad_04, línea 70]

**Descriptores**:
1. "La automatización de elegibles alcanzó 98% de precisión en producción real, superando el objetivo inicial del 95%."
2. "Cien por ciento de adopción administrativa en tres meses: el equipo de Carlos abandonó definitivamente sus hojas de cálculo artesanales." [fase_04_actividad_04, línea 116: "El fin de la era del Excel: 100% de adopción administrativa"]
3. "La tasa de error se desplomó de un rango de 10 a 15% a menos de 0.5%, sin que Carlos tuviera que vigilar cada decisión del sistema." [fase_04_actividad_04, línea 70]

**Conclusión (cita)**:
> &ldquo;La automatización sin transparencia no libera a Carlos, lo pone a vigilar a la máquina en lugar de vigilar sus Excel. Si no entiende por qué el sistema tomó la decisión, va a seguir haciendo el trabajo doble.&rdquo; [síntesis cercana al argumento documentado en fase_02_actividad_01, línea 346; no es cita verbatim de archivo de fase, marcado como tal]

---

## Resultados (`rs-mosaico` / `rs-metricas`)

**Título de resultados**: "Carlos dejó de trabajar los jueves por la noche."

**Tarjetas de métricas** (`rs-metricas`, 3 tarjetas):

1. "-90%": "Tiempo operativo. De 24 a 32 horas semanales a 1.5 a 2 horas." [fase_04_actividad_04, línea 120]
2. "&lt;0.5%": "Tasa de error en convocatorias. Antes, entre 10% y 15% de los registros." [fase_04_actividad_04, línea 70]
3. "100%": "Adopción de administradores de capacitación en los primeros tres meses." [fase_04_actividad_04, línea 118]

**Nota de verificación**: se evitó usar el SUS 88 como protagonista sin contexto (puede mencionarse en el modal "El Proceso" distinguido de las cifras de prototipo 85 y 90). Se evitó también la satisfacción de Carlos (4.8/5.0) por aparecer con menos repetición cruzada que las tres métricas elegidas.

---

## Testimonio (`rs-usuarios` / `rs-testimonio`)

No hay una única cita verbatim de un colaborador con la fuerza narrativa necesaria y trazabilidad completa a una sola persona identificada (mismo patrón que AsDeporte y ABC). Propuesta de síntesis honesta:

> "El proceso que antes le quitaba el jueves completo a una sola persona ahora toma menos de dos horas a la semana, y prácticamente no se equivoca."

**Nota de verificación**: síntesis editorial de los hallazgos de fase_04_actividad_04 (reducción de tiempo, precisión de automatización), no cita textual de un colaborador real.

---

## Modal "Mi Rol"

> Entré al proyecto como consultor de producto senior, vía la consultora Dacodes, y fui responsable del ciclo completo de diseño de la plataforma GAC, desde la investigación inicial hasta el monitoreo post-lanzamiento. [confirmado en múltiples archivos de fase: "equipo de ingeniería de Dacodes", "Rodrigo, nuestro Líder de Proyecto en Dacodes"]

> Mi verdadero rol fue traducir el conocimiento que vivía solo en la cabeza de Carlos en reglas de negocio documentadas y defendibles, y negociar entre lo que el negocio pedía y lo que la integridad de los datos permitía construir. [síntesis de fase_01_actividad_04 (documentación de reglas de negocio) y fase_03_actividad_02 (negociación con el Líder Técnico)]

---

## Modal "El Proceso"

Los 3 pasos usan los mismos títulos "Discovery" / "Definition" / "Delivery". Contenido sugerido (`data-description` por paso, mismo mecanismo que ABC y AsDeporte):

- **Discovery**: "En Gentera, la investigación empezó observando a Carlos en su rutina semanal: una maratón de Excel de entre 24 y 32 horas para determinar quién de los 27,000 empleados debía capacitarse, dónde y cuándo.\n\nLas reglas que gobernaban ese proceso, como la identificación del Gerente Multiproducto o el tratamiento de reingresos, no estaban documentadas en ningún sistema. Vivían únicamente en el conocimiento de Carlos.\n\nUn hallazgo cambió el alcance del proyecto: el brief prometía notificaciones por WhatsApp, pero al indagar con el proveedor de datos descubrimos que los números de teléfono de los colaboradores simplemente no existían en ninguna base de datos disponible." [fase_01_actividad_01, línea 157: "El descubrimiento del punto ciego: El caso WhatsApp"]
- **Definition**: "Definir el alcance significó decidir qué reglas de negocio eran innegociables y cuáles podían resolverse en una fase evolutiva. La integración directa con el sistema de RRHH se pospuso a favor de una plantilla semi-limpia, dando a Carlos un punto de validación humana antes de automatizar.\n\nEl módulo de WhatsApp se rediseñó como configurable y dependiente de que Gentera resolviera primero la captura de esos datos, en vez de bloquear el resto del proyecto.\n\nSe priorizaron dos perfiles como críticos, Carlos y Ana, y se dejaron fuera del MVP funcionalidades como la gestión de contenido de cursos." [fase_01_actividad_02, exclusión de gestión de contenido; fase_02_actividad_06, línea 92, módulo configurable de WhatsApp]
- **Delivery**: "El sistema de diseño se construyó sobre una premisa simple: la verdadera simplicidad no es quitar elementos de la pantalla, es absorber la complejidad del usuario. Un SUS de 85 en la primera ronda de pruebas no fue suficiente, insistí en una segunda ronda porque ese número escondía frustración real en la corrección de errores.\n\nLa segunda ronda elevó el SUS a 90 antes del lanzamiento. En producción real, la medición fue de 88 sobre 100.\n\nLa adopción llegó a 100% entre los administradores en los primeros tres meses, y la tasa de error cayó de un rango de 10 a 15% a menos de 0.5%. El proceso no terminó con el handoff, terminó cuando los datos confirmaron que nadie quería volver al Excel." [fase_03_actividad_02, SUS 85 y trampa del dato; fase_04_actividad_04, SUS 88, adopción 100%, error 0.5%]

---

## Modal "Qué Aprendí"

**Lección 1** (la trampa del dato):
> Lección 1: Una métrica alta puede esconder una frustración real. Un SUS de 85 sobre 100 es, para la mayoría, el final del camino. Para mí fue una señal de alarma: detrás de esa cifra vi a Carlos frustrado corrigiendo un error de plantilla. Insistí en una segunda ronda de pruebas en vez de aceptar un número que ya se veía bien en un reporte ejecutivo. [fase_03_actividad_02, línea 144]

**Lección 2** (el hueco de datos):
> Lección 2: Un requerimiento del brief puede depender de un dato que no existe. El brief pedía notificaciones por WhatsApp como funcionalidad clave. Al indagar con el proveedor de datos, descubrimos que los números de teléfono de los colaboradores no existían en ninguna base consumible por el sistema. Aprendí a validar la existencia real de los datos antes de diseñar sobre ellos, no después. [fase_01_actividad_01, línea 157]

---

## Notas de verificación (dudas abiertas, no resueltas al 100%)

1. **Duración del proyecto**: no se encontró en ningún archivo de fase (fase_01 a fase_04) una duración total en meses o una fecha de lanzamiento específica, a diferencia de ABC. Se usaron tags alternativos verificables en `cs-contexto__tags` (escala del proyecto y tipo B2E/interno) en vez de inventar un número.
2. **Conclusión de Decisión 1 y Decisión 3**: ambas son síntesis editoriales cercanas al razonamiento documentado, no citas verbatim de un archivo de fase (a diferencia de la conclusión de Decisión 2, que sí es cita real). Marcado explícitamente en cada bloque.
3. **Testimonio final**: igual que en AsDeporte y ABC, no existe una cita verbatim de un colaborador con fuerza narrativa y atribución clara. Propuesta como síntesis sin atribución falsa.
4. **Contradicciones de la fuente, no resueltas por decisión**: SEQ ronda 1 varía entre 6.5, 6.6 y 6.7 según el archivo (no se usó en el contenido final); cobertura de accesibilidad automatizada varía entre 30% y 40% (tampoco se usó); "37 mockups de alta fidelidad" aparece una sola vez sin corroboración cruzada (no se usó).
5. **Nombres de personas**: se usó exclusivamente el set canónico Carlos, Ana, David, Elena. Se descartaron "Sofía" y "Ricardo" (aparecen una sola vez en fase_02_actividad_03, probable errata de la fuente).
6. **"Vía Dacodes"**: a diferencia de "Denumeris" en ABC (que no se pudo confirmar y se dejó sin nombrar), aquí "Dacodes" sí está confirmado explícitamente en múltiples archivos de fase, así que se nombra directamente en el modal "Mi Rol".