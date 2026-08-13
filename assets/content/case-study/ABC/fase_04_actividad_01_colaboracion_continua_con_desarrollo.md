# Fase 4: Soporte al Desarrollo y Pruebas (Implementar)

## Actividad_01_Colaboración Continua con Desarrollo

> Esta actividad constituye el puente crítico entre la visión de diseño y la realidad técnica. Como Product Designer único, el enfoque se desplaza de la creación de artefactos a la supervisión forense de la implementación, garantizando que el desarrollo frontend y backend respete la integridad del Design System y la experiencia del usuario validada. El proceso abarca desde la sincronización en ceremonias Agile hasta la auditoría de accesibilidad WCAG 2.1 AA, la resolución de bugs de UI/UX y la consolidación de la documentación 'As-Built' para asegurar la escalabilidad futura de la plataforma.

### Parte 1: Sincronización Táctica Planificación de Sprints y Soporte Diario

#### El diseño no termina en el Handoff

El momento en que entregué el paquete final de **Handoff** —con sus 37 mockups pixel-perfect, el Design System documentado y los flujos interactivos— no fue el final del camino, sino el inicio de una fase de vigilancia constante. Sabía, por años de ver diseños morir en la implementación, que si me retiraba en ese instante, la visión que habíamos validado con los pacientes del Centro Médico ABC se diluiría entre restricciones de base de datos y plazos de entrega. Mi rol mutó: dejé de ser el arquitecto que dibuja los planos para convertirme en el consultor técnico que vive en la obra. Entendí que mi responsabilidad no era solo entregar archivos, sino asegurar que el código respetara la integridad de la experiencia. Si un desarrollador decidía simplificar un flujo porque la API era lenta, yo debía estar ahí no para decir "no", sino para proponer una alternativa que no rompiera la usabilidad.

#### La infiltración en la planificación del Sprint

Para evitar que el diseño fuera una caja negra para ingeniería, me integré plenamente en las ceremonias de **Sprint Planning**. Mi objetivo era anticipar incendios antes de que se escribiera la primera línea de código. Actué como el puente entre el Product Owner y los desarrolladores, refinando las historias de usuario para que los **Criterios de Aceptación** no fueran solo funcionales ("el botón debe guardar los datos"), sino experienciales ("el usuario debe recibir feedback visual en menos de 200ms").

Un ejemplo claro fue la construcción del buscador de médicos. Durante la planificación, desglosé meticulosamente cómo debían comportarse los filtros dinámicos y la visualización de las tarjetas de resultados. No me limité a mostrar el diseño final; expliqué la lógica de los **Empty States** (estados vacíos): qué vería el paciente si no había resultados para una especialidad específica en una sede determinada. Al despejar estas dudas desde el inicio, evité que los desarrolladores tuvieran que adivinar comportamientos en mitad del sprint, lo que suele derivar en soluciones técnicas que sacrifican la UX por la velocidad.

#### Arquitectura de comunicación sin fricciones

Establecí un canal dedicado en Slack para centralizar todas las consultas de diseño y desarrollo. Mi filosofía fue clara: ser un socio, no un "policía del diseño". Sabía que si los desarrolladores me veían como un obstáculo burocrático, dejarían de preguntar y empezarían a tomar decisiones de diseño por su cuenta. Al ofrecer un **Soporte Proactivo y Reactivo**, eliminé los cuellos de botella. 

Si un ingeniero tenía dudas sobre la lógica de una transición o el comportamiento de un componente en un caso de borde —como un nombre de médico extremadamente largo que rompía el layout de la tarjeta—, yo respondía en tiempo real. Esta presencia constante fomentó una relación de confianza donde el equipo se sentía cómodo consultando micro-decisiones. No se trataba solo de responder preguntas; a menudo me acercaba proactivamente cuando sabía que una funcionalidad, como el agendamiento de citas, era particularmente compleja a nivel de interacción, asegurándome de que el desarrollador asignado tuviera claro no solo el "qué", sino el "por qué" de cada espaciado y jerarquía.

#### La maniobra de clarificación forense

A pesar de tener el **Inspect Mode** de Figma y Zeplin habilitado, la documentación estática a menudo resultaba insuficiente para capturar la intención del movimiento o la adaptabilidad de los datos. En estas sesiones de soporte diario, utilicé Figma como una pizarra viva. Cuando una especificación no era clara, intervenía con bocetos rápidos o explicaciones verbales para detallar la intención detrás de un espaciado particular o la jerarquía de un componente.

Mi enfoque fue asegurar que los desarrolladores comprendieran la lógica sistémica. Si ajustábamos un margen en un componente del Design System, les explicaba cómo ese cambio afectaba la consistencia en otras vistas de la plataforma. Esta labor pedagógica fue vital para que el equipo de frontend no solo "copiara" píxeles, sino que entendiera las reglas del sistema que estábamos construyendo juntos.

#### El arte de la negociación técnica y el compromiso

Inevitablemente, surgieron limitaciones técnicas que no pudimos anticipar durante la fase de prototipado. Cuando esto ocurría, apliqué un protocolo de toma de decisiones en seis pasos para no bloquear el desarrollo. Primero, escuchaba la limitación —por ejemplo, un problema de rendimiento con el mega menú de "Servicios Médicos"—; luego, evaluaba el impacto real en la experiencia del paciente.

> "Si una animación de menú de 500ms afectaba el rendimiento en dispositivos móviles de gama baja, mi decisión era clara: la fluidez técnica primaba sobre el adorno visual. Propuse simplificar la transición a un fundido básico, manteniendo la estructura de navegación intacta pero aligerando la carga de procesamiento."

Realicé estos ajustes en tiempo real directamente en Figma, permitiendo que el equipo visualizara la alternativa de inmediato. No fue una rendición, sino una **adaptación inteligente**. Documenté cada una de estas decisiones y su razonamiento, asegurando que el Product Owner estuviera alineado y que mantuviéramos una fuente de verdad actualizada. Esta trazabilidad fue fundamental para que el "As-Built" de la plataforma no fuera un accidente de limitaciones técnicas, sino una evolución controlada del diseño original.


Todo parecía fluir en los canales de comunicación y las reuniones de planificación, pero la verdadera prueba de fuego llegó cuando los primeros componentes empezaron a vivir en el entorno de staging. Al abrir el navegador para realizar la primera revisión sistemática, me di cuenta de que la distancia entre un mockup perfecto y una implementación real estaba llena de matices que Slack no podía resolver. Necesitaba un método de auditoría mucho más riguroso para blindar la fidelidad visual antes de que fuera demasiado tarde para corregir el rumbo.

---

### Parte 2: Design Qa El Blindaje de la Fidelidad Visual y Resolución de Bugs

#### La brecha entre el lienzo y el navegador

Al abrir por primera vez el entorno de *staging*, sentí esa punzada de realidad que todo diseñador experimenta cuando sus archivos de Figma se enfrentan al código vivo. Por muy perfecto que fuera el *handoff*, sabía que el diseño era apenas una hipótesis hasta que se renderizaba en un navegador. Tenía ante mí el reto de validar que meses de investigación y definición visual no se diluyeran en la implementación técnica. Mi labor en este punto no era solo observar, sino realizar una auditoría forense para cerrar la brecha de calidad. El diseño de una institución como el Centro Médico ABC no permitía "aproximaciones"; cada inconsistencia en un espaciado o un color era, en última instancia, una grieta en la percepción de profesionalismo y confianza que el paciente depositaba en la plataforma.

Asumí mi rol como el guardián de la fidelidad visual, entendiendo que el entorno de *staging* era el campo de batalla final. No podía permitir que la complejidad del desarrollo *frontend* sacrificara la integridad del sistema que habíamos construido. Mi razonamiento fue claro: si un componente no se comportaba exactamente como lo habíamos validado en los prototipos, la experiencia del usuario se fragmentaría. Establecí una metodología de revisión sistemática para asegurar que cada píxel, cada transición y cada línea de microcopy estuviera alineada con la visión aprobada, transformando el proceso de QA en un ejercicio de precisión técnica.

#### Auditoría sistemática en el entorno de Staging

No abordé la revisión de la plataforma de manera aleatoria. Para que mi tiempo como único diseñador fuera eficiente, diseñé un protocolo de navegación basado en los flujos críticos de usuario y un *checklist* de requisitos de diseño que no admitía ambigüedades. Accedí al entorno de pruebas con una mentalidad inquisitiva, recorriendo sistemáticamente cada sección, desde el buscador de médicos hasta el portal de "Mi Salud ABC". Mi enfoque no era solo visual; utilicé las herramientas de inspección del navegador para auditar el DOM, verificando que la estructura técnica respetara la semántica y la jerarquía que habíamos definido.

Esta navegación estructurada me permitió identificar problemas que a simple vista podrían pasar desapercibidos pero que afectaban la solidez del producto. No buscaba solo "errores", buscaba discrepancias entre la intención del diseño y la ejecución técnica. Al inspeccionar el código CSS directamente en el navegador, pude detectar si los desarrolladores estaban utilizando variables del *Design System* o si habían introducido valores "hardcoded" que romperían la escalabilidad futura. Esta auditoría técnica fue el primer filtro para garantizar que la plataforma no solo se viera bien hoy, sino que fuera mantenible a largo plazo.

#### El rigor de la comparación "Pixel-Perfect"

La verdadera prueba de fuego fue la comparación sistemática entre mis mockups de alta fidelidad y la implementación real. Organicé mi espacio de trabajo con Figma en un monitor y el navegador en el otro, realizando una inspección que rayaba en lo obsesivo. Mi objetivo era la paridad absoluta. Revisé meticulosamente los códigos de color HEX para asegurar que el azul institucional y los tonos de alerta fueran exactos, y audité los pesos tipográficos (*font-weight*) para que la jerarquía de la información mantuviera la legibilidad que habíamos testeado con los usuarios.

Un ejemplo claro de este rigor ocurrió en la página de resultados del buscador de médicos. Detecté que el espaciado entre el buscador y la sección "Agenda tu Cita" era inconsistente con las especificaciones. En lugar de enviar un comentario genérico, abrí el inspector, identifiqué que el *margin-bottom* del contenedor no coincidía con nuestro sistema de rejilla de 8px y documenté el valor exacto que debía aplicarse. Este nivel de detalle eliminaba las suposiciones por parte del equipo de desarrollo. No se trataba de una cuestión estética caprichosa, sino de mantener la armonía visual que guía la mirada del paciente hacia las acciones importantes, como la reserva de una cita.

#### Verificación de la "Fidelidad de Comportamiento"

El diseño de producto no es estático, y mi auditoría tampoco lo fue. Dediqué sesiones enteras a probar la fidelidad de las interacciones. Verifiqué que los estados de los botones (*hover, active, disabled, focus*) se comportaran de acuerdo con las microinteracciones que habíamos definido en el prototipo. Me aseguré de que las transiciones de los menús desplegables fueran fluidas y no abruptas, y que los modales de confirmación de cita aparecieran con el ritmo adecuado. Si una animación de carga tardaba demasiado o se sentía pesada, analizaba el impacto en la percepción de velocidad del sitio.

La responsividad fue otro pilar crítico de mi revisión. Probé la plataforma en múltiples *breakpoints*, desde pantallas de escritorio ultra-wide hasta dispositivos móviles de gama media. Identifiqué errores críticos donde las tarjetas de médicos no se apilaban correctamente en pantallas pequeñas, provocando que el texto se desbordara o que los botones de acción quedaran fuera del área de interacción segura. Esta revisión era vital: sabíamos por nuestra investigación previa que muchos pacientes acceden a la plataforma en situaciones de urgencia o movilidad, y una interfaz que se rompe en el móvil es una barrera inaceptable para el acceso a la salud.

#### El protocolo de reporte en JIRA: Evidencia sobre opinión

Para que mi *feedback* fuera accionable y no generara fricción con el equipo de ingeniería, transformé cada hallazgo en un ticket técnico dentro de JIRA. Entendía que un "esto se ve mal" no ayuda a un desarrollador. Por ello, cada reporte que generé fue una pieza de evidencia técnica irrefutable. Incluía una descripción detallada del problema, capturas de pantalla anotadas donde señalaba el error frente a la versión correcta, y enlaces directos al *frame* específico en Figma.

> "Mi objetivo era que el desarrollador no tuviera que interpretar mi feedback, sino simplemente ejecutar una corrección técnica basada en datos exactos."

En cada ticket, proporcionaba las especificaciones exactas: "cambiar el valor de espaciado de 15px a 16px para alinear con el sistema de 8px" o "actualizar el color del texto de #333 a nuestro gris secundario #4D4D4D". También incluía grabaciones de video cortas para mostrar comportamientos de interacción complejos que eran difíciles de explicar con una imagen estática. Este rigor en la documentación no solo aceleró las correcciones, sino que construyó un lenguaje común de alta exigencia entre diseño y desarrollo.

#### Gestión de severidad y el ciclo de cierre

No todos los errores tienen el mismo peso, y como responsable del diseño, tuve que priorizar los hallazgos para no saturar al equipo y cumplir con los plazos de lanzamiento. Clasifiqué los bugs en categorías de severidad:
*   **Crítico:** Errores que bloquean el flujo del usuario o rompen la accesibilidad básica.
*   **Mayor:** Discrepancias visuales o funcionales que afectan la percepción de marca o la usabilidad.
*   **Menor:** Desajustes estéticos leves que no impiden la tarea pero restan pulcritud.
*   **Cosmético:** Detalles mínimos de pulido final.

Una vez que un desarrollador marcaba un ticket como resuelto, yo volvía al entorno de *staging* para realizar una "re-verificación". No cerraba un ticket hasta que el componente fuera visual y funcionalmente idéntico al diseño original. Este ciclo iterativo de *Design QA* fue agotador pero necesario; me permitió asegurar que no se introdujeran regresiones (errores nuevos al arreglar otros) y que cada parte de la plataforma, desde el pie de página hasta el encabezado más complejo, cumpliera con el estándar de excelencia del Centro Médico ABC.

#### El último filtro: Microcopy y aprobación final

En las etapas finales de la revisión, puse el foco en el microcopy. Verifiqué que cada etiqueta, mensaje de error y llamada a la acción (CTA) fuera exactamente el que habíamos aprobado. En un entorno hospitalario, la claridad del lenguaje es una cuestión de seguridad. Me aseguré de que los mensajes de error en los formularios de registro no fueran genéricos ("Error en el campo"), sino específicos y orientales ("Por favor, ingresa un número de teléfono válido de 10 dígitos"), tal como lo dictaban nuestras guías de contenido.

Finalmente, emití la "Aprobación por Diseño" por cada componente y flujo validado. Fue un hito satisfactorio ver cómo las secciones se marcaban como "listas" una a una. Esta aprobación no era solo un trámite administrativo; era mi garantía personal de que la plataforma estaba lista para las Pruebas de Aceptación de Usuario (UAT). Habíamos logrado transformar una visión en Figma en una interfaz de grado médico, pulida y consistente. Mi enfoque obsesivo en el detalle no solo redujo el retrabajo post-lanzamiento, sino que blindó la reputación del proyecto, asegurando que la primera interacción del paciente con el nuevo sitio fuera impecable.


Al cerrar la última sesión de Design QA, sentí la satisfacción de ver una interfaz visualmente impecable, pero una inquietud persistente me obligó a soltar el mouse y alejarme de la pantalla. Habíamos construido un sitio hermoso y funcional para el usuario promedio, pero al revisar los flujos de navegación por teclado, me di cuenta de que estábamos dejando fuera a una parte crítica de la población del Centro Médico ABC. La verdadera prueba de fuego no era si el sitio se veía bien, sino si un paciente con discapacidad visual o motriz podía agendar una cita con la misma autonomía que cualquier otro, lo que nos empujó a iniciar la auditoría de accesibilidad más rigurosa de nuestra trayectoria.#### La brecha entre el lienzo y el navegador

Al abrir por primera vez el entorno de *staging*, sentí esa punzada de realidad que todo diseñador experimentado conoce: el momento en que los archivos inmaculados de Figma se enfrentan a la renderización real del código. Por muy detallado que fuera el *handoff*, sabía que el diseño era apenas una promesa hasta que se convertía en una experiencia interactiva funcional. Tenía ante mí el reto de validar que meses de investigación y definición visual no se diluyeran en la implementación técnica. Mi labor en este punto no era solo observar, sino realizar una auditoría forense para cerrar la brecha de calidad entre el diseño aprobado y el producto vivo.

Asumí mi rol como el guardián de la fidelidad visual, entendiendo que el entorno de *staging* era el campo de batalla final. No podía permitir que la complejidad del desarrollo *frontend* sacrificara la integridad del sistema que habíamos construido para el Centro Médico ABC. Mi razonamiento fue claro: si un componente no se comportaba exactamente como lo habíamos validado en los prototipos, la experiencia del paciente se fragmentaría. Establecí una metodología de revisión sistemática para asegurar que cada píxel, cada transición y cada línea de microcopy estuviera alineada con la visión institucional, transformando el proceso de QA en un ejercicio de precisión técnica y estratégica.

#### Auditoría sistemática en el entorno de Staging

No abordé la revisión de la plataforma de manera aleatoria. Para que mi tiempo como único diseñador fuera eficiente, diseñé un protocolo de navegación basado en los flujos críticos de usuario y un *checklist* de requisitos de diseño que no admitía ambigüedades. Accedí al entorno de pruebas con una mentalidad quirúrgica, recorriendo sistemáticamente cada sección, desde el buscador de médicos hasta el portal de resultados. Mi enfoque no era solo visual; utilicé las herramientas de inspección del navegador para auditar el DOM, verificando que la estructura técnica soportara la jerarquía de información y la semántica que habíamos definido.

Esta navegación estructurada me permitió identificar problemas que a simple vista podrían pasar desapercibidos pero que afectaban la solidez del producto. No buscaba solo "errores", buscaba discrepancias entre la intención del diseño y la ejecución técnica. Al inspeccionar el código CSS directamente en el navegador, pude detectar si se estaban respetando las variables del *Design System* o si se habían introducido valores manuales que romperían la escalabilidad futura. Esta auditoría técnica fue el primer filtro para garantizar que la plataforma no solo se viera bien hoy, sino que fuera mantenible y consistente a largo plazo.

#### El rigor de la comparación "Pixel-Perfect"

La verdadera prueba de fuego fue la comparación sistemática entre mis mockups de alta fidelidad y la implementación real. Organicé mi espacio de trabajo con Figma en un monitor y el navegador en el otro, realizando una inspección que rayaba en lo obsesivo. Mi objetivo era la paridad absoluta. Revisé meticulosamente los códigos de color HEX para asegurar que el azul institucional y los tonos de alerta fueran exactos, y audité los pesos tipográficos (*font-weight*) para que la jerarquía de la información mantuviera la legibilidad que habíamos testeado con los usuarios.

Un ejemplo claro de este rigor ocurrió en la página de resultados del buscador de médicos. Detecté que el espaciado entre el buscador y la sección de "Agenda tu Cita" era inconsistente con las especificaciones. En lugar de enviar un comentario genérico, abrí el inspector de Chrome, identifiqué que el margen no coincidía con nuestro sistema de rejilla de 8px y documenté el valor exacto que debía aplicarse. Este nivel de detalle eliminaba las suposiciones por parte del equipo de desarrollo. No se trataba de una cuestión estética caprichosa, sino de mantener la armonía visual que guía la mirada del paciente hacia las acciones importantes.

#### Verificación de la "Fidelidad de Comportamiento"

El diseño de producto no es estático, y mi auditoría tampoco lo fue. Dediqué sesiones enteras a probar la fidelidad de las interacciones, asegurándome de que el "alma" del diseño se hubiera trasladado al código. Verifiqué que los estados de los botones (*hover, active, disabled, focus*) se comportaran de acuerdo con las microinteracciones definidas. Me aseguré de que las transiciones de los menús desplegables fueran fluidas y que los modales de confirmación de cita aparecieran con el ritmo adecuado. Si una animación de carga tardaba demasiado o se sentía pesada, analizaba el impacto en la percepción de velocidad del sitio.

La responsividad fue otro pilar crítico de mi revisión. Probé la plataforma en múltiples *breakpoints*, desde pantallas de escritorio ultra-wide hasta dispositivos móviles de gama media. Identifiqué errores críticos donde las tarjetas de médicos no se apilaban correctamente en pantallas pequeñas, provocando que el texto se desbordara o que los botones de acción quedaran fuera del área de interacción segura. Esta revisión era vital: sabíamos que muchos pacientes acceden a la plataforma en situaciones de urgencia o movilidad, y una interfaz que se rompe en el móvil es una barrera inaceptable para el acceso a la salud.

#### El protocolo de reporte en JIRA: Evidencia sobre opinión

Para que mi *feedback* fuera accionable y no generara fricción con el equipo de ingeniería, transformé cada hallazgo en un ticket técnico dentro de JIRA. Entendía que un "esto se ve mal" no ayuda a un desarrollador. Por ello, cada reporte que generé fue una pieza de evidencia técnica irrefutable. Incluía una descripción detallada del problema, capturas de pantalla anotadas donde señalaba el error frente a la versión correcta, y enlaces directos al *frame* específico en Figma.

> "Mi objetivo era que el desarrollador no tuviera que interpretar mi feedback, sino simplemente ejecutar una corrección técnica basada en datos exactos y especificaciones de diseño."

En cada ticket, proporcionaba los valores exactos: "cambiar el valor de espaciado de 15px a 16px" o "actualizar el color del texto al valor HEX aprobado en el Design System". También incluía grabaciones de video cortas para mostrar comportamientos de interacción complejos que eran difíciles de explicar con una imagen. Este rigor en la documentación no solo aceleró las correcciones, sino que construyó un puente de comunicación efectivo, donde el equipo de desarrollo entendió que mi nivel de exigencia era una herramienta para alcanzar la excelencia compartida.

#### Gestión de severidad y el ciclo de cierre

No todos los errores tienen el mismo peso, y como responsable del diseño, tuve que priorizar los hallazgos para cumplir con los hitos del proyecto. Clasifiqué los bugs en categorías de severidad:
*   **Crítico:** Errores que bloquean el flujo del usuario o rompen la usabilidad básica.
*   **Mayor:** Discrepancias visuales o funcionales que afectan la percepción de marca o la claridad de la información.
*   **Menor:** Desajustes estéticos leves que no impiden la tarea pero restan pulcritud.
*   **Cosmético:** Detalles mínimos de pulido final.

Una vez que un desarrollador marcaba un ticket como resuelto, yo volvía al entorno de *staging* para realizar una "re-verificación". No cerraba un ticket hasta que el componente fuera visual y funcionalmente idéntico al diseño original. Este ciclo iterativo de *Design QA* fue agotador pero necesario; me permitió asegurar que no se introdujeran regresiones y que cada parte de la plataforma, desde el pie de página hasta el encabezado más complejo, cumpliera con el estándar de calidad del Centro Médico ABC.

#### El último filtro: Microcopy y aprobación final

En las etapas finales de la revisión, puse el foco en el microcopy. Verifiqué que cada etiqueta, mensaje de error y llamada a la acción (CTA) fuera exactamente el que habíamos aprobado. En un entorno hospitalario, la claridad del lenguaje es una cuestión de seguridad. Me aseguré de que los mensajes de error en los formularios no fueran genéricos, sino específicos y orientadores, tal como lo dictaban nuestras guías de contenido.

Finalmente, emití la "Aprobación por Diseño" por cada componente y flujo validado. Fue un hito satisfactorio ver cómo las secciones se marcaban como "listas" una a una. Esta aprobación no era solo un trámite; era mi garantía de que la plataforma estaba lista para las Pruebas de Aceptación de Usuario (UAT). Habíamos logrado transformar una visión en Figma en una interfaz de grado médico, pulida y consistente. Mi enfoque obsesivo en el detalle no solo redujo el retrabajo post-lanzamiento, sino que blindó la reputación del proyecto, asegurando que la primera interacción del paciente con el nuevo sitio fuera impecable.


Al cerrar la última sesión de Design QA, sentí la satisfacción de ver una interfaz visualmente impecable, pero una inquietud persistente me obligó a soltar el mouse y alejarme de la pantalla. Habíamos construido un sitio hermoso y funcional para el usuario promedio, pero al revisar los flujos de navegación por teclado, me di cuenta de que estábamos dejando fuera a una parte crítica de la población del Centro Médico ABC. La verdadera prueba de fuego no era si el sitio se veía bien, sino si un paciente con discapacidad visual o motriz podía agendar una cita con la misma autonomía que cualquier otro, lo que nos empujó a iniciar la auditoría de accesibilidad más rigurosa de nuestra trayectoria.

---

### Parte 3: Inclusión Radical Auditoría y Remediación de Accesibilidad Wcag 2.1 Aa

#### La invisibilidad de la exclusión funcional

Al cerrar la última sesión de Design QA, sentí la satisfacción de ver una interfaz visualmente impecable, pero una inquietud persistente me obligó a soltar el mouse y alejarme de la pantalla. Habíamos construido un sitio hermoso y funcional para el usuario promedio, pero al revisar los flujos de navegación por teclado, me di cuenta de que estábamos dejando fuera a una parte crítica de la población del Centro Médico ABC. La verdadera prueba de fuego no era si el sitio se veía bien, sino si un paciente con discapacidad visual o motriz podía agendar una cita con la misma autonomía que cualquier otro. Como responsable del producto, sabía que la estética sin accesibilidad no es diseño; es exclusión deliberada. Esta realización me empujó a iniciar la auditoría de accesibilidad más rigurosa de mi trayectoria, bajo el estándar **WCAG 2.1 Nivel AA**.

Pasé de la "fidelidad visual" a lo que yo llamo "fidelidad de uso". No me bastaba con que los píxeles estuvieran en su lugar; necesitaba que el código fuera semánticamente honesto. Establecí un marco de evaluación basado en los cuatro principios de la WCAG: **Perceptible, Operable, Comprensible y Robusto**. Mi objetivo no era simplemente tachar requisitos de una lista para obtener una certificación, sino asegurar que el buscador de médicos y el flujo de agendamiento fueran herramientas de salud equitativas. En un entorno hospitalario, un error de accesibilidad no es un "glitch" visual; es una barrera que impide a una persona acceder a atención médica.

#### El despliegue del arsenal tecnológico inicial

Inicié la auditoría limpiando el "ruido" estructural mediante herramientas automatizadas. Ejecuté **Lighthouse** en Chrome DevTools para obtener un puntaje base de rendimiento y accesibilidad, pero pronto pasé a herramientas más granulares como **WAVE** y **axe DevTools**. Estas extensiones me permitieron identificar violaciones que el ojo humano suele pasar por alto pero que rompen la experiencia para un lector de pantalla.

*   **Saneamiento de la estructura base:** Descubrí que varias páginas carecían del atributo `lang` en la etiqueta inicial. Corregir esto a `<html lang="es">` fue mi primera victoria técnica; parece un detalle menor, pero sin esto, los lectores de pantalla no saben qué sintetizador de voz cargar, arruinando la pronunciación de cada palabra en el sitio.
*   **IDs duplicados y roles perdidos:** Identifiqué elementos que usaban IDs repetidos, lo que confunde la navegación asistida. Utilicé axe DevTools para mapear estas fallas estructurales y asegurar que cada componente del Design System tuviera una identidad única y un rol semántico claro.

Este filtrado automatizado fue esencial para despejar el camino. Al eliminar estos errores "fáciles", pude concentrar mi esfuerzo senior en los problemas de lógica de navegación y comportamiento dinámico, áreas donde las máquinas fallan y solo el criterio humano puede diagnosticar la fricción real.

#### La auditoría forense: navegar sin mouse

El momento más revelador del proceso ocurrió cuando decidí navegar la plataforma utilizando exclusivamente el teclado. Utilicé las teclas `Tab`, `Shift+Tab`, `Enter` y `Space` para recorrer los 10 flujos críticos que habíamos definido. Mi enfoque fue obsesivo con el **indicador de foco (focus ring)**. En el diseño original, habíamos priorizado una estética limpia, pero al tabular por la página de resultados de búsqueda, descubrí que el "outline" visual desaparecía en ciertos botones de "Agendar Cita".

> **Trade-off de diseño:** Tuve que sacrificar la "limpieza" visual absoluta para implementar un anillo de enfoque de alto contraste. Si un usuario con limitaciones motrices no puede ver dónde está posicionado el foco, el sitio es, para efectos prácticos, una pared infranqueable.

Verifiqué que el orden de tabulación fuera lógico y predecible, siguiendo el flujo visual de la información de izquierda a derecha y de arriba abajo. Detecté que en el buscador de médicos, el foco saltaba erráticamente entre los filtros y los resultados, lo que me obligó a reestructurar el orden del DOM (Document Object Model) con el equipo de desarrollo para que la experiencia de navegación fuera coherente con el mapa mental del usuario.

#### Cerrar los ojos para ver: pruebas con lectores de pantalla

Para evaluar la robustez de la plataforma, realicé pruebas inmersivas con **NVDA** en Windows y **VoiceOver** en macOS. Cerré los ojos y confié únicamente en la voz sintética para intentar completar el flujo de agendamiento de laboratorio. Aquí es donde la jerarquía de encabezados (H1 a H6) demostró ser vital; no eran solo etiquetas de estilo, sino el mapa de navegación para el usuario ciego.

*   **Contexto sobre texto:** Descubrí que el lector de pantalla anunciaba "Botón" en varios elementos interactivos del header, sin explicar qué hacían. Trabajé para que cada botón tuviera un nombre accesible que comunicara su función (ej. "Cerrar menú de navegación" en lugar de solo "Cerrar").
*   **Cambios dinámicos:** Uno de los mayores retos fue el buscador de médicos. Cuando un usuario aplicaba un filtro, los resultados cambiaban visualmente, pero el lector de pantalla permanecía en silencio. Implementé el uso de **regiones vivas (aria-live)** para que el sistema anunciara: "Se han encontrado 12 resultados para la especialidad de Cardiología", permitiendo que el usuario supiera que su acción tuvo éxito sin tener que explorar toda la página de nuevo.

#### La remediación del color y la semántica de formularios

Basándome en el informe de hallazgos del entregable L2, realicé una revisión técnica de los ratios de contraste utilizando **Stark** y **WebAIM Contrast Checker**. Identifiqué un problema crítico en los textos de información secundaria: etiquetas en gris claro sobre fondo blanco que no alcanzaban el ratio **4.5:1** exigido por WCAG para textos pequeños.

Esta no fue una corrección estética, sino una decisión de salud. Un paciente con cataratas o visión reducida debe poder leer las instrucciones de preparación para un estudio sin forzar la vista. Ajusté la paleta del Design System en tiempo real, oscureciendo los tonos de gris en toda la interfaz para garantizar la legibilidad universal, incluso bajo condiciones de luz solar directa en dispositivos móviles.

En los formularios, realicé una inspección de código para asegurar la asociación programática entre `<label>` e `<input>`. Descubrí campos donde la etiqueta no estaba vinculada mediante los atributos `for` e `id`, lo que causaba que el lector de pantalla no anunciara el nombre del campo al recibir el foco. Para los mensajes de error, configuré `aria-live="assertive"`. De este modo, si un usuario olvidaba ingresar su número de expediente, el lector interrumpía cualquier otra locución para anunciar el error inmediatamente, evitando que el paciente enviara el formulario repetidamente en un ciclo de frustración.

#### Desactivando las 'trampas de teclado' en componentes complejos

Uno de los hallazgos más graves ocurrió en los componentes modales y el calendario de agendamiento. Al abrir el modal de "Aviso de Privacidad", detecté lo que en accesibilidad llamamos una **"trampa de teclado" (keyboard trap)**: el foco quedaba atrapado dentro del modal sin permitir cerrarlo con la tecla `Esc`, o peor aún, permitía tabular hacia elementos que estaban visualmente ocultos detrás del modal.

Colaboré estrechamente con el equipo de desarrollo para implementar un **"focus trap"**. Esta lógica asegura que, mientras un modal esté activo, la navegación por teclado permanezca confinada dentro de él. Al cerrarlo, el foco debe regresar exactamente al botón que originó la acción. Este nivel de gestión del foco es lo que separa a una plataforma profesional de un proyecto de aficionado; es el blindaje que garantiza que el usuario nunca se sienta perdido en la interfaz.

#### El triaje de accesibilidad: priorización por impacto

Al finalizar la auditoría, consolidé todos los hallazgos en un informe de remediación, clasificándolos según su impacto en la usabilidad:

1.  **Críticos (Bloqueantes):** Problemas de contraste en botones principales, trampas de teclado en el flujo de citas y falta de etiquetas en formularios. Estos se convirtieron en tickets de Jira de prioridad inmediata.
2.  **Mayores (Dificultad alta):** Falta de textos alternativos descriptivos en fotos de médicos y estructura de encabezados inconsistente.
3.  **Menores (Optimización):** Ausencia de atributos ARIA en elementos decorativos o mensajes de éxito que podrían ser más descriptivos.

Transformé el informe de accesibilidad en un backlog de desarrollo técnico. No acepté un "no se puede" como respuesta; cada criterio de éxito de la WCAG 2.1 AA fue defendido como una funcionalidad crítica del negocio. Comprendí que diseñar para la discapacidad es, en última instancia, diseñar para todos: una interfaz con buen contraste es mejor para quien usa el móvil bajo el sol, y una navegación por teclado lógica hace que el sitio sea más rápido para cualquier usuario avanzado.


Con la plataforma blindada semánticamente y la accesibilidad integrada en el ADN del código, llegó el momento de salir de nuestro entorno controlado de staging. La teoría y las auditorías internas nos habían llevado lejos, pero ahora necesitábamos enfrentar la realidad del uso diario en el hospital. Estábamos a punto de iniciar las pruebas UAT (User Acceptance Testing), donde los pacientes reales y el personal médico pondrían a prueba cada decisión que habíamos tomado, revelando fricciones que ninguna herramienta automatizada podría haber anticipado.

---

### Parte 4: La Prueba de Fuego Participación Estratégica en las Pruebas Uat

#### La transición de la semántica a la fricción humana

Haber blindado la plataforma bajo los estándares de la WCAG 2.1 AA nos dio una base técnica incuestionable, pero la accesibilidad es solo el cimiento; la usabilidad en el contexto caótico de un hospital es la verdadera prueba de fuego. No importa si un lector de pantalla puede interpretar un botón si un paciente, bajo el estrés de una urgencia o la confusión de un diagnóstico, no logra encontrarlo en menos de tres segundos. Con la plataforma ya estable en el entorno de **staging**, sentí que era el momento de salir de nuestra burbuja de diseño y enfrentar la realidad. Sabía que las pruebas de aceptación del usuario (UAT) no eran un trámite de QA, sino el último filtro donde nuestras hipótesis se encontrarían con el comportamiento humano impredecible.

Mi enfoque en esta fase fue quirúrgico. Como responsable del diseño, mi rol no era liderar la logística —tarea del Product Owner y el equipo de QA— sino actuar como el guardián de la experiencia. Necesitaba validar si la coreografía de componentes que habíamos construido en Figma se sentía natural o si, por el contrario, habíamos diseñado una estructura lógicamente perfecta pero emocionalmente fría o confusa para los pacientes del Centro Médico ABC.

#### Transformando Personas en casos de prueba vivos

Para que la UAT fuera efectiva, me negué a aceptar guiones de prueba genéricos del tipo "haga clic en el buscador". Siguiendo la metodología de diseño centrado en el usuario, colaboré estrechamente con el equipo de QA para transformar a nuestras Personas —Elena, Carlos y Alex— en escenarios de prueba contextuales y cargados de intención. 

Me aseguré de que los casos de prueba no fueran simples validaciones funcionales, sino retos que reflejaran la vida real. Por ejemplo, para Carlos, no definimos "buscar un médico", sino: "Eres un paciente nuevo, necesitas un dermatólogo que atienda en el Campus Santa Fe, que acepte tu seguro específico y tenga disponibilidad esta semana". Este nivel de especificidad era vital para probar no solo si el buscador funcionaba, sino si los filtros y la jerarquía de la información en los resultados permitían a Carlos tomar una decisión sin frustrarse. Incluso sugerí incluir escenarios de "ruta infeliz", como qué sucede cuando Elena busca una especialidad y no hay citas disponibles; quería observar su reacción ante el manejo de esa decepción en la interfaz.

#### El éxito más allá del binario "pasa/no pasa"

En las reuniones de planificación de la UAT, redefiní lo que el equipo entendía por "éxito". Para un ingeniero, el éxito es que el servidor responda; para mí, el éxito es que la carga cognitiva del usuario sea mínima. Logré que los criterios de aceptación en nuestros documentos compartidos de Google Sheets incluyeran dimensiones cualitativas. No bastaba con completar la tarea; registramos la facilidad de uso percibida y el tiempo de respuesta mental.

> "Si un paciente tarda diez segundos en localizar el acceso al portal 'Mi Salud ABC' en la home, el escenario es un hallazgo crítico de diseño, aunque el enlace funcione perfectamente a nivel de código."

Esta postura obligó al equipo a mirar más allá de la funcionalidad pura. Preparamos plantillas de observación en Notion que nos permitieran capturar métricas de usabilidad en tiempo real, asegurando que cada titubeo quedara documentado como una oportunidad de mejora antes del lanzamiento definitivo.

#### La disciplina del observador silencioso

Durante las sesiones de UAT, ya fueran presenciales en las instalaciones del hospital o remotas vía Google Meet, asumí un rol de observador activo pero no intrusivo. Fue un ejercicio de disciplina profesional: ver a un usuario sufrir con un componente que yo mismo diseñé y no intervenir es difícil, pero necesario para obtener datos limpios. 

Utilicé mi plantilla de observación para realizar una especie de "análisis forense" del comportamiento. Mientras el moderador de QA guiaba al usuario, yo me enfocaba en los detalles sutiles: ¿Dónde se detiene el cursor? ¿Qué frases murmuran entre dientes? Capturé comentarios espontáneos como "¿Dónde hago clic ahora?" o "Ah, esto es más fácil de lo que pensaba". Estos *insights* cualitativos son oro molido que ninguna herramienta automatizada puede detectar. Registraba cada micro-expresión de confusión frente a la terminología médica o cada vez que un usuario ignoraba un botón porque el color no tenía el peso visual suficiente en ese contexto de iluminación real.

#### Síntesis de hallazgos y el patrón del dolor

Al terminar cada bloque de sesiones, realizaba un proceso de *debriefing* para identificar patrones. No buscaba incidentes aislados, sino comportamientos recurrentes. Agrupé el feedback cualitativo para entender si el microcopy de las instrucciones era realmente claro o si la jerarquía visual del buscador de médicos en la plataforma estaba cumpliendo su función de guiar el ojo hacia la información crítica, como los años de experiencia o la ubicación del consultorio.

Descubrí, por ejemplo, que varios usuarios tenían dificultades para distinguir entre los diferentes campus del hospital en el flujo de agendamiento. Aunque técnicamente la opción estaba ahí, visualmente no tenía la prominencia necesaria. Este tipo de hallazgos me permitieron construir un argumento sólido para los ajustes finales, basándome en evidencia directa y no en preferencias estéticas.

#### El filtro entre el feedback y el backlog de desarrollo

Mi mayor reto en esta etapa fue actuar como filtro estratégico. Tras la UAT, nos enfrentamos a una montaña de feedback. Utilizando la metodología de **Design QA** que ya veníamos aplicando, trabajé con el Product Owner para distinguir entre dos tipos de problemas:
1.  **Bugs Funcionales:** Errores de código, como un filtro que no devuelve resultados o un modal que no cierra. Estos iban directos a Jira con prioridad máxima.
2.  **Problemas de Usabilidad:** Elementos que funcionan pero confunden, como un botón con un etiquetado ambiguo o una transición demasiado lenta que genera incertidumbre.

Documenté estas discrepancias en Jira con capturas de pantalla anotadas y grabaciones de las sesiones de UAT. Mi labor aquí fue asignar prioridades basadas en el impacto en la conversión y la satisfacción del paciente. Si un problema de usabilidad impedía que el 30% de los usuarios probados completaran el agendamiento, lo defendía como un "bloqueante de experiencia" con el mismo peso que un fallo técnico.

#### La defensa de la UX en la mesa de decisiones

En las reuniones de revisión de *issues* con los desarrolladores y los directivos del Centro Médico ABC, me convertí en el abogado del paciente. Hubo momentos de tensión donde el equipo de desarrollo, presionado por los tiempos de entrega, sugería posponer arreglos que no eran fallos técnicos. 

> "No podemos lanzar con el acceso al portal de pacientes oculto bajo un menú de segundo nivel. La UAT demostró que los usuarios esperan encontrarlo de inmediato en la cabecera."

Utilicé los videos de las pruebas para mostrar la frustración real de los usuarios. Esa evidencia es irrefutable. Gracias a este enfoque, logramos priorizar ajustes de último minuto en el microcopy y en la prominencia de llamadas a la acción (CTAs) críticas. No se trataba de "pulir" el diseño, sino de blindar la utilidad de la plataforma antes de que llegara a miles de pacientes.

#### Validación E2E: La coreografía final

Antes de cerrar la fase de UAT, realicé una verificación final de los flujos de extremo a extremo (**End-to-End**). Quería asegurarme de que la integración de todos los componentes —desde los filtros de búsqueda hasta el modal de confirmación de cita— funcionara como una coreografía sin fisuras en el entorno de producción simulado. 

Comprobé que la visión de diseño original se hubiera mantenido intacta tras meses de negociaciones técnicas y ajustes de código. Ver a un usuario como Elena completar todo el proceso, desde la búsqueda hasta la confirmación, sin una sola duda, fue la validación definitiva de que el sistema no solo era accesible y funcional, sino que realmente resolvía el problema de fragmentación que el brief inicial denunciaba. La plataforma estaba lista; el diseño ya no era un conjunto de archivos en Figma, sino una herramienta viva y validada.


La plataforma estaba validada y el equipo sentía el alivio de haber superado la prueba de fuego de los usuarios reales, pero mientras revisaba los últimos tickets cerrados en Jira, me asaltó una preocupación técnica: ¿qué pasaría cuando yo no estuviera para defender estas decisiones? La UAT había forzado decenas de ajustes "en caliente" y micro-decisiones que no estaban en los manuales originales, y sabía que si no consolidaba todo ese conocimiento en un estado 'As-Built' riguroso, la escalabilidad de la plataforma colapsaría al primer intento de expansión. Tenía que convertir toda esta experiencia vivida en un legado técnico indestructible antes de entregar las llaves del proyecto.

---

### Parte 5: El Legado Técnico Documentación Final y Estado As-built

#### La batalla contra la entropía del software

Al cerrar la fase de UAT y ver los últimos tickets de Jira pasar a la columna de "Done", me encontré con una realidad incómoda: el producto que vivía en el entorno de **Staging** ya no era el mismo que habitaba en mis archivos de Figma. Semanas de ajustes en caliente, micro-decisiones de accesibilidad tomadas durante el desarrollo y compromisos técnicos de último minuto habían creado una brecha peligrosa. Como diseñador, sé que un archivo de diseño que no coincide con la realidad es una deuda técnica que alguien pagará con intereses en el futuro. 

Mi razonamiento en este punto fue puramente estratégico: si no consolidaba este conocimiento ahora, bajo el fragor de la batalla, la coherencia de la plataforma del Centro Médico ABC colapsaría en la primera actualización post-lanzamiento. Tenía que detener la inercia del "ya está terminado" para ejecutar un proceso de documentación forense. Mi objetivo no era simplemente "ordenar carpetas", sino producir un estado **As-Built** (tal como se construyó) que blindara la integridad del sistema ante cualquier futura iteración.

#### Auditoría forense: El espejo frente a la realidad

Inicié este cierre con una auditoría de diseño post-implementación que me llevó tres días de escrutinio obsesivo. Mi ritual fue metódico: coloqué la versión de **Staging** de la plataforma en mi monitor principal y mis mockups de alta fidelidad en el secundario. No busqué "parecidos", busqué discrepancias atómicas.

Navegué sistemáticamente por cada flujo crítico —la búsqueda de médicos, la visualización de resultados de laboratorio, el flujo de agendamiento— comparando píxel a píxel.

*   **Inspección de UI:** Utilicé las herramientas de desarrollador del navegador para verificar que los valores de *padding*, *margin* y *line-height* implementados fueran los que yo había especificado en el Design System.
*   **Rastreo de tickets:** Abrí el histórico de Jira y repasé cada bug de diseño y ajuste de UX que reporté durante la construcción. Necesitaba confirmar que la solución final aplicada en el código fuera la que habíamos acordado y no un "parche" que rompiera la consistencia global.
*   **Caza de inconsistencias:** Descubrí, por ejemplo, que en la implementación del buscador de especialistas, el espaciado entre las tarjetas de resultados se había reducido ligeramente para evitar un *scroll* excesivo en dispositivos con resoluciones intermedias. Era una decisión lógica del equipo de frontend que yo no había documentado en Figma, y que ahora debía ser oficializada.

> El Design QA no termina cuando el desarrollador dice que el bug está arreglado; termina cuando el diseñador verifica que ese arreglo no ha generado un efecto dominó en el resto de la interfaz.

#### Reflejando la realidad en los mockups de alta fidelidad

Una vez identificadas las discrepancias, procedí a la actualización de los mockups en Figma. Este paso es el que separa a un diseñador de interfaz de un **Product Designer** senior: no se trata de "ponerlo bonito", sino de que el archivo sea una especificación técnica veraz.

Para cada pantalla, realicé los siguientes ajustes:

1.  **Sincronización visual:** Ajusté cada componente y *layout* para que coincidiera exactamente con lo que el usuario final vería en producción. Si una etiqueta de texto había cambiado de "Agendar" a "Programar Cita" por una decisión de contenido de último minuto, el mockup debía reflejarlo.
2.  **Actualización de anotaciones:** Re-escribí las especificaciones de lógica de interacción. Durante el desarrollo, descubrimos que ciertas transiciones de modales afectaban el rendimiento en dispositivos móviles antiguos, por lo que simplificamos las curvas de animación. Actualicé estas notas para que cualquier desarrollador que entre al proyecto en seis meses no intente implementar la animación "original" que ya sabemos que no funciona.
3.  **Mantenimiento de la responsividad:** Verifiqué que los cambios aplicados en la versión desktop se trasladaran correctamente a las vistas de tablet y móvil, asegurando que la jerarquía de información se mantuviera intacta a pesar de los ajustes técnicos.

#### Sincronización del Design System: El corazón del legado

El archivo más crítico de este proceso fue, sin duda, la biblioteca de componentes maestros. Un **Design System** que no refleja el código es una herramienta inútil. Me enfoqué en una actualización profunda de los estilos globales y los componentes atómicos.

*   **Ajustes de Accesibilidad (WCAG 2.1 AA):** Durante las pruebas de contraste en el entorno real, detectamos que uno de los tonos de azul secundario no pasaba las pruebas de legibilidad sobre fondos grises claros en ciertas pantallas. Ajustamos el valor hexadecimal en el código y, acto seguido, yo actualicé el estilo de color en la biblioteca maestra de Figma.
*   **Estados de Componentes:** Actualicé los estados de *hover*, *focus* y *disabled* de los botones primarios. En el desarrollo, el equipo de frontend sugirió un indicador de foco más prominente para mejorar la navegación por teclado en el portal de pacientes; lo integré en el componente maestro para que fuera la norma de aquí en adelante.
*   **Publicación de la "Biblioteca de Equipo":** Al ser el único diseñador, este acto de publicar los cambios en Figma podría parecer un paso burocrático, pero fue mi forma de crear un *snapshot* oficial. Al hacerlo, me aseguré de que cualquier archivo futuro que consumiera estos componentes estuviera alineado con la realidad de producción.

#### El pragmatismo de las limitaciones técnicas documentadas

No todo en este proceso fue "corregir píxeles". Una parte fundamental de mi legado fue documentar los *trade-offs* estratégicos. En el diseño original del mega-menú de "Servicios Médicos", yo había proyectado una estructura de tres columnas con iconos dinámicos. Sin embargo, durante la construcción, el equipo de backend identificó que la carga de esos activos impactaba negativamente en el LCP (*Largest Contentful Paint*) de la página de inicio.

Tomé la decisión de simplificar el menú a una estructura de lista jerárquica más ligera. En la documentación final, no solo borré el diseño anterior; añadí una nota técnica explicando **por qué** se tomó esa decisión. 

> Documentar el "por qué no se hizo" es tan valioso como documentar el "qué se hizo". Evita que el equipo vuelva a tropezar con la misma piedra en la siguiente versión.

#### El protocolo de entrega de llaves: Versionado y archivo

Finalmente, ejecuté el cierre formal del paquete de diseño. Este es el momento en que el proyecto deja de ser un "trabajo en progreso" y se convierte en un activo institucional para el Centro Médico ABC.

1.  **Versión Nombrada en Figma:** Creé un hito en el historial de versiones titulado **"v1.0 - Lanzamiento Oficial [2022]"**. Esto permite que, por mucho que el archivo evolucione en el futuro, siempre podamos volver a ver exactamente qué se entregó el día 1.
2.  **Exportación de Activos Finales:** Generé un paquete centralizado que incluía los mockups clave en PDF de alta resolución, la arquitectura de información final y la Guía de Handoff actualizada con un apéndice de "Cambios Post-UAT".
3.  **Repositorio Seguro:** Guardé toda esta documentación en el repositorio compartido del hospital, notificando al Product Owner y al líder técnico. Mi mensaje fue claro: "Aquí están las llaves de la plataforma; el mapa coincide exactamente con el terreno".

Con este último acto de rigor técnico, cerré mi intervención en la fase de construcción. La plataforma no solo estaba viva y funcionando, sino que estaba blindada por una documentación que respetaba el esfuerzo de ingeniería y garantizaba que la visión de diseño que trazamos meses atrás no se diluyera con el tiempo.

**Reflexión final:**
Este proceso de documentación final fue mi forma de honrar la complejidad del proyecto y el trabajo del equipo de desarrollo. Aprendí que un gran diseño no es el que vive en mi cabeza o en un prototipo idealizado, sino el que sobrevive a las restricciones técnicas y queda perfectamente registrado para quienes vendrán después. Al entregar este estado 'As-Built', no solo entregué pantallas, sino una base sólida y escalable que permitió al Centro Médico ABC evolucionar su presencia digital con total confianza y control sobre su experiencia de usuario.

---

