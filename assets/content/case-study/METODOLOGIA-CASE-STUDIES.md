# Metodología de trabajo — Case Studies del portafolio

Este documento resume cómo se hizo la revisión y reescritura completa del caso AsDeporte (rama `feature/mobile-tablet-caso`), para repetir exactamente el mismo proceso con **ABC** y **Gentera**. La diferencia clave: AsDeporte ya tenía una página HTML construida (con 2 de 3 decisiones en placeholder) que había que auditar y corregir. **ABC y Gentera no tienen página HTML todavía — se construyen desde cero**, usando `caso-asdeporte.html` ya corregido como plantilla estructural.

---

## 1. Objetivo del proceso (criterio final, no el inicial)

El criterio evolucionó durante la sesión de AsDeporte — usar el **final**, no repetir los primeros pasos en falso:

El contenido de cada caso debe ser, simultáneamente:
1. **El más impactante posible para un reclutador** — debe generar la reacción "este es el candidato que necesito en mi equipo".
2. **100% defendible** si el reclutador pregunta a fondo — cada cifra, cada afirmación, rastreable a un archivo fuente real.
3. **Internamente coherente** — no solo la sección que se está editando, sino TODA la página (fechas, rol/tipo de relación laboral, categoría de industria, cada modal) sin contradicciones entre sí ni con las fuentes.

**Error a no repetir:** en la primera pasada de AsDeporte me anclé a preservar subtítulos y decisiones que ya existían en la página, en vez de elegir el mejor contenido disponible en las fuentes. El usuario corrigió esto explícitamente: **la estructura de la página es innegociable, el contenido específico (títulos, cifras, qué decisiones/métricas se muestran) es completamente abierto** y se elige por mérito. Para ABC y Gentera, aplicar el criterio de los 3 puntos de arriba desde el principio, no llegar a él después de varias rondas.

---

## 2. Skills instaladas (ya están en `.claude/skills/`, reusar)

| Skill | Para qué |
|---|---|
| `content-research-writer` | Feedback de secciones, fuerza del hook |
| `seo-audit` | Auditoría on-page SEO (title/meta, headings, alt text, keyword targeting, E-E-A-T) |
| `storytelling` | Patrón situación→complicación→resolución + "refusal checks" (no suavizar datos, no fabricar tensión, no sustituir evidencia por apelación emocional) |

**Skills evaluadas y descartadas** (no instalar de nuevo sin razón nueva):
- `content-reviewer` / `narrative-quality-auditor` (repo `aaron-he-zhu/aaron-marketing-skills`) — mega-repo corporativo de 100+ skills, requiere scorers/registries externos, pensado para narrativa de marca B2B, no para case studies de portafolio.
- `brand-voice-enforcement` (Anthropic knowledge-work-plugins) — es para *generar* contenido con guías de marca ya definidas, no para auditar contenido existente; trae dependencias de MCP (Notion, Confluence, etc.) irrelevantes.
- `soleio-design-hiring` — es un playbook de *estrategia de sourcing/visibilidad* (cómo te encuentran reclutadores en redes), no de escritura de case studies. Útil para otra conversación, no para esta.
- `portfolio-case-study-writer` (paramchoudhary/resumeskills) — seguro pero bajo valor: su estructura no aplica (la nuestra ya está fija) y su "quality checklist" ya se cubre manualmente con las 3 skills de arriba.

Si en la sesión de ABC/Gentera parece necesaria una skill nueva, seguir el mismo protocolo: buscar con `npx skills find`, clonar a un scratchpad, leer el `SKILL.md` completo, reportar veredicto, **preguntar antes de instalar**.

---

## 3. Fuentes de contenido, en orden de consulta

Para cada caso, revisar TODAS estas capas antes de escribir nada — no asumir que hay que inventar desde cero solo porque no hay página HTML:

1. **`assets/content/case-study/<Caso>/fase_*.md`** — documentación cruda de proceso, fase por fase. Es la fuente de verdad para verificar cualquier cifra. Releer los archivos directamente para citar (no confiar en resúmenes de rondas anteriores dentro de la misma sesión).
2. **`assets/content/JC-core/caso_de_estudio_<caso>.md`** — reporte tipo "resumen ejecutivo" con tabla de métricas consolidada. Útil para cruzar cifras, pero puede tener redondeos/bases distintas a las fases crudas.
3. **`assets/content/JC-core/portafolio_caso_<caso>.md`** — narrativa ya pulida, en la voz del sitio, con "batallas"/decisiones ya redactadas. **Muy útil como borrador de partida, pero sus cifras NO están garantizadas verificables contra las fases crudas** — hay que confirmarlas una por una antes de usarlas, igual que se hizo con AsDeporte (ahí varias cifras de este archivo no existían en ningún archivo de fase).
4. **`assets/content/final-content.md`** — brief maestro de todo el sitio. **Ya tiene el contenido completo de Home, Sobre mí y Contacto**, pero en la sección "Case study" **solo existe "Secciones Case study 1" (AsDeporte)** — no hay nada de ABC/Gentera ahí todavía. No hace falta escribirlo ahí primero; se puede ir directo al markdown de revisión (ver sección 5).

**Ya confirmado para ABC y Gentera:**
- `assets/content/case-study/ABC/` — 27 archivos de fase (`fase_00` a `fase_05`, estructura de actividades distinta a AsDeporte — tiene una fase_00 de gobernanza/herramientas que AsDeporte no tiene).
- `assets/content/case-study/Gentera/` — 20 archivos de fase (`fase_01` a `fase_04`).
- Ambos tienen su par `caso_de_estudio_*.md` / `portafolio_caso_*.md` en JC-core, mismo patrón que AsDeporte.

---

## 4. Fases del proceso (orden real que funcionó)

1. **Investigación exhaustiva en paralelo** (2 Explore agents): uno mapea a fondo el HTML objetivo si ya existe (no aplica para ABC/Gentera todavía — ver Fase 0 abajo), otro extrae TODO el contenido de los archivos de fase (decisiones con problema/alternativas/decisión/porqué, TODAS las métricas con archivo fuente, citas textuales, resultados finales) — exhaustivo, no resumido.
2. **Leer directamente** los 2 archivos de JC-core (`caso_de_estudio_*` y `portafolio_caso_*`) — casi siempre revelan contenido ya redactado y utilizable, pero con cifras a verificar.
3. **Auditoría SEO** (skill `seo-audit`) sobre lo que exista — para AsDeporte reveló un hallazgo grave fuera de alcance de contenido: `sitemap.xml` vacío y la tarjeta de `index.html` apuntando a un dominio externo (Framer) en vez de a la página local, con `aria-label`/`alt` copiados de otro caso ("Fintech"/"HealthTech"). **Mismo patrón de bug ya confirmado en las tarjetas de ABC (línea ~523) y Gentera (línea ~361) de `index.html`** — mismo `aria-label="Caso de estudio: Fintech"` mal copiado, mismos `data-href` externos. Reportarlo, no corregirlo sin que el usuario lo pida explícitamente (quedó fuera de alcance en AsDeporte).
4. **Auditoría de narrativa** (skill `storytelling`) — patrón situación→complicación→resolución, refusal checks contra cifras no verificables o resultados "suavizados" (ej. se encontró que un resultado documentado como "mitigado" en la fuente cruda aparecía como "resuelto" en el borrador pulido de JC-core — corregir a la versión honesta).
5. **Checkpoint con el usuario**: presentar hallazgos SEO + narrativa + recomendación concreta de métrica principal y de las decisiones a usar, **ya aplicando el criterio de los 3 puntos de la sección 1** (no solo "qué es más riguroso" sino "qué es más impactante Y defendible Y coherente"). Esperar confirmación antes de escribir.
6. **Auditoría de coherencia total** — no solo la sección que se está cambiando, sino TODA la página/contenido: fechas, tipo de relación laboral (empleado vs. consultor), categoría de industria, cada modal, cada lección. En AsDeporte esto encontró una lección completa del modal "Qué aprendí" que estaba fabricada e invertida respecto a la historia real — el hallazgo más grave de toda la sesión. **Hacer esta auditoría completa desde la primera pasada, no como corrección tardía.**
7. **Redacción del contenido en markdown** (subagente `fork`, nunca editar el HTML directo primero): un archivo de revisión que sigue el mismo orden de secciones que la página, cada bloque marcado SIN CAMBIOS / CONTENIDO NUEVO / CORREGIDO, cada cifra con su fuente entre corchetes. Reglas fijas: cero cifras inventadas, estructura obligatoria de cada decisión (título imponente, problema en 4 puntos, decisión en 1 párrafo, 3 razones cada una con su propia métrica/evidencia, argumento final), longitud proporcional a los bloques que reemplaza.
8. **Verificación manual** antes de reportar como listo: releer el markdown completo, elegir 3-5 citas/cifras al azar y grepearlas directamente contra los archivos de fase para confirmar que son verbatim/reales — no confiar ciegamente en el reporte del subagente.
9. **Iteración con el usuario** sobre el markdown — en AsDeporte tomó 3 rondas completas (primera pasada conservadora → corrección hacia "elige lo mejor, no lo que ya existía" → ampliación a coherencia total de todo el contenido). Es normal, no señal de que algo salió mal.
10. **Implementación real en el HTML** (subagente `fork`, solo tras aprobación explícita del usuario con algo como "procede a implementarlo"): editar únicamente texto/contenido, nunca clases/ids/atributos/estructura/CSS/JS de lógica. Para ABC/Gentera esto significa **crear el archivo HTML nuevo clonando la estructura de `caso-asdeporte.html`** en vez de editar uno existente.
11. **Verificación final manual**: `git diff --stat` + revisar el diff completo línea por línea + grep de placeholders/cifras viejas residuales. Nunca declarar "listo" sin haber leído el diff real. **Nunca `git add`/`commit`/`push` sin que el usuario lo pida explícitamente en ese mismo mensaje.**

### Fase 0 — específica para "desde cero" (ABC y Gentera, no aplicó en AsDeporte)

Antes del paso 1, para cada caso nuevo:
- Confirmar que no existe ya `caso-abc.html` / `caso-gentera.html` (ya confirmado que no existen).
- Usar el `caso-asdeporte.html` YA CORREGIDO (con las 3 decisiones reales, la métrica corregida, etc.) como plantilla estructural para clonar — mismas clases (`cs-*`, `rs-*`), mismos componentes (métrica, contexto, decisiones-titulos, 3× decisión completa, resultados, testimonio, cierre, 3 modales).
- Revisar `js/caso-asdeporte.js` y `js/caso-asdeporte-nav.js` — estos archivos tienen nombre específico de AsDeporte; decidir si se generalizan/parametrizan o se duplican con nombre propio por caso. `css/case-study.css` y `css/case-study-responsive.css` sí parecen genéricos/reusables (nombre no atado a un caso). Esto es una decisión técnica a tomar al inicio de la próxima sesión, no algo ya resuelto.
- Revisar `js/modules/animations/case-cards-scroll.js` y `js/modules/animations/case-cursor.js` (usados también desde `index.html`) para confirmar que ya soportan 3 casos o si asumen solo 1.

---

## 5. Reglas que no cambian, para cualquier caso

- **Cero cifras inventadas.** Cada número citado en contenido nuevo/corregido debe existir literalmente en un archivo de fase, con su archivo y (idealmente) línea entre corchetes.
- Cuando las fuentes se contradicen entre sí (fechas, bases de cálculo distintas) — no elegir en silencio: reportarlo como hallazgo y usar la versión más defendible, o evitar citar el dato específico si ninguna versión es sostenible (así se resolvió el conflicto de fechas de AsDeporte: se quitó el año en vez de elegir uno arbitrario).
- **Verificar, no confiar ciegamente** en lo que reporta un subagente — releer archivos fuente directamente para una muestra de las afirmaciones más importantes antes de pasarle algo al usuario como terminado.
- Usar subagentes tipo `fork` para investigación/redacción/implementación pesada (heredan todo el contexto de la conversación); usar `Explore` para el primer barrido de investigación amplia. El hilo principal se queda con la síntesis, las decisiones de criterio, y los checkpoints con el usuario.
- Antes de instalar cualquier skill nueva: buscar, clonar a scratchpad, leer el `SKILL.md` completo, reportar veredicto de seguridad/ajuste, **preguntar antes de instalar**.
- Nunca editar el HTML de producción directamente en el primer intento — siempre pasar primero por un markdown de revisión que el usuario apruebe.
- Nunca `git commit`/`push` sin pedido explícito en ese mismo mensaje (regla del `CLAUDE.md` del proyecto).
- No usar herramientas de automatización de navegador salvo necesidad real y explicada (regla del `CLAUDE.md` del proyecto).

---

## 6. Resumen de lo que quedó implementado en AsDeporte (referencia)

- Métrica principal (`cs-metrica`): 43% (base 8%→11.5%).
- Decisión 1: Tribu — corregida (cifras reales en vez de las inventadas 90.8%/65%/5%/40%).
- Decisión 2: Oxxo — contenido nuevo completo (antes era placeholder duplicado de D1).
- Decisión 3: "Saber cuándo no rediseñar..." (deuda técnica deliberada) — contenido nuevo completo, reemplaza tanto el placeholder original como una propuesta intermedia de CURP que se descartó por ser menos impactante para un reclutador senior.
- `rs-metricas`: tarjeta 3 cambiada de conversión duplicada a 125,000 MAU (+20%).
- `cs-contexto`: tags corregidos a "Sports Tech · B2C/B2B", año quitado (fuentes irreconciliables).
- Modal "Mi rol": aclarado el status de consultor (vía Dacodes).
- Modal "El proceso" (`js/modal-proceso.js`): corregida cifra de "48 horas" a "72 horas".
- Modal "Qué aprendí": Lección 2 reescrita por completo (era una fabricación completa sobre un mapa geolocalizado; ahora es la historia real de wearables 3%/10%).
- `rs-testimonio`: cita reemplazada por una síntesis honesta de feedback real (no existía ninguna cita verbatim de un solo atleta con la fuerza narrativa necesaria).
- Pendiente de decisión (reportado, no corregido): el "3 perfiles" como valor numérico grande en la Decisión 1 rompe el patrón visual de las demás cifras — cosmético, no crítico. También queda un comentario de código obsoleto en la línea ~650 del HTML (cifra vieja en un comentario, no en contenido visible).
- Fuera de alcance por decisión explícita del usuario: `sitemap.xml` vacío y las tarjetas de `index.html` con `data-href` externo/`aria-label` mal copiado — reportado, no tocado.

---

## 7. Prompt para continuar en la próxima sesión

Copiar y pegar esto al iniciar la siguiente sesión:

```
Continuamos el trabajo de case studies del portafolio. Ya terminamos AsDeporte
(rama feature/mobile-tablet-caso) siguiendo un proceso completo de auditoría +
reescritura que está documentado en
assets/content/case-study/METODOLOGIA-CASE-STUDIES.md — léelo primero, es la
metodología exacta a repetir.

Ahora toca hacer lo mismo para ABC y Gentera, pero desde cero: no existe
caso-abc.html ni caso-gentera.html todavía, hay que construirlos clonando la
estructura de caso-asdeporte.html (ya corregido). Las fuentes de narrativa
están en assets/content/case-study/ABC/ y assets/content/case-study/Gentera/,
más los archivos JC-core/caso_de_estudio_abc.md, JC-core/portafolio_caso_abc.md,
JC-core/caso_de_estudio_gentera.md y JC-core/portafolio_caso_gentera.md.

Empecemos por ABC. Sigue las mismas fases del documento de metodología:
investigación exhaustiva de las fuentes, auditoría SEO y de narrativa con las
skills ya instaladas (content-research-writer, seo-audit, storytelling),
checkpoint conmigo con hallazgos y recomendación de métrica principal +
3 decisiones + métricas de resultados — aplicando desde el inicio el criterio
de: máximo impacto para un reclutador, 100% defendible, coherente en TODO el
contenido (no solo lo más visible). Antes de escribir nada, resuelve primero
la Fase 0 (decisión técnica sobre js/caso-asdeporte.js, js/caso-asdeporte-nav.js,
y si case-cards-scroll.js/case-cursor.js ya soportan 3 casos).

No implementes nada en código todavía — primero investiga y preséntame
hallazgos y un plan de fases, como hicimos con AsDeporte.
```

---

## 8. Notas finales para quien retome esto (yo, en la próxima sesión)

- El usuario prefiere que se le presenten hallazgos y recomendaciones antes de escribir contenido, pero **no quiere que se le pregunte demasiadas veces lo mismo** — una vez que da una directriz clara ("elige lo mejor", "acláralo explícitamente"), aplicarla sin volver a pedir confirmación de micro-decisiones del mismo tipo.
- El usuario sí quiere confirmar explícitamente antes de: instalar una skill nueva, e implementar cambios en el HTML real.
- Pidió expresamente usar subagentes y dividir el trabajo en fases — seguir haciéndolo así, no intentar resolver todo en un solo mensaje largo.
