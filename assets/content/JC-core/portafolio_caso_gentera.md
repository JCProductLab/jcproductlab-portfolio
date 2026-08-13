# Caso de Estudio: Gentera

## El gancho

Cada jueves por la mañana, Carlos abría su computadora y desaparecía durante 32 horas.

No en sentido figurado. Literalmente: 32 horas semanales consumidas en limpiar, cruzar y validar archivos de Excel para determinar quién de los 27,000 empleados de la empresa debía ir a capacitarse esa semana, en qué ciudad, en qué curso, y si ya lo había tomado antes.

Cuando llegué al proyecto, me dijeron que el problema era eficiencia. Cuando terminé el research, entendí que el problema era mucho más grave que eso.

---

## El contexto

Gentera es la empresa de microfinanzas más importante de México — la que da créditos a tenderos, costureras y emprendedores que los bancos tradicionales ignoran. Tiene más de 27,000 empleados distribuidos en sucursales por todo el país, y como cualquier empresa de esa escala, invierte fuertemente en capacitar a su gente.

El problema: todo ese sistema de capacitación — quién va, cuándo, a qué curso, en qué sede — lo administraba una sola persona, de forma completamente manual, usando Excel.

Mi rol fue diseñar desde cero la plataforma interna que reemplazaría ese proceso — desde la investigación con usuarios hasta el lanzamiento con empleados reales.

---

## El problema real

El brief original pedía "eficiencia". Lo que encontré en el research fue algo más aterrador: fragilidad total.

Las reglas que determinaban quién se capacitaba y cuándo eran complejas — si un empleado había reingresado a la empresa hacía menos de seis meses, las reglas cambiaban; si tenía cierto cargo gerencial, las reglas cambiaban; si ya había tomado el curso en otro ciclo, las reglas cambiaban. Ninguna de esas reglas estaba documentada en ningún sistema. Todas vivían en la cabeza de Carlos. Si Carlos se enfermaba una semana, el motor de desarrollo de talento de la empresa más grande de microfinanzas del país simplemente se detenía.

Pero había un problema más profundo que el de Carlos.

Para Ana — una asesora de ventas en sucursal — las convocatorias de capacitación llegaban como citatorios. Un mensaje sin contexto: "Tienes que estar en tal lugar, tal día, a tal hora." Ella no sabía que ese curso era el tercer peldaño de una escalera de desarrollo de doce etapas. No sabía cuánto le faltaba para alcanzar el siguiente nivel. No veía una oportunidad de crecimiento — veía una orden administrativa que le rompía su semana de ventas.

Gentera tiene como valor central poner a la persona en el centro. Pero su proceso de capacitación trataba a sus colaboradores como piezas intercambiables de una máquina.

Ahí entendí el trabajo real: no se trataba de automatizar listas de Excel. Se trataba de tomar el conocimiento que estaba secuestrado en la cabeza de una sola persona y entregárselo, con claridad y dignidad, a las 27,000 personas que dependían de él sin saberlo.

---

## Las decisiones clave

Hay una sensación que Carlos conocía muy bien: llegar un jueves por la mañana sabiendo que el fin de semana ya estaba perdido antes de empezar.

Mi trabajo no era solo automatizar un proceso. Era diseñar el fin de esa sensación. Cada decisión que tomé en GAC tenía un mismo norte: que Carlos — y las 27,000 personas que dependían de él sin saberlo — pudieran soltar la carga.

Hubo tres decisiones que definieron si GAC sería una herramienta que devolvería ese alivio, o solo un Excel con mejor cara.

### Decisión 1: El mapa de ruta visual — devolverle a Ana su camino

Los stakeholders pedían algo corporativo: una tabla con columnas de estatus. "Nombre del curso. Estado: Pendiente." Yo me opuse.

Ana pasa el día en la calle, visitando clientes, cumpliendo metas. Cuando llegaba a la plataforma no quería más trabajo administrativo encima de su carga ya pesada — quería saber en segundos dónde estaba y hacia dónde iba. Una tabla no le daba eso. Le daba más burocracia.

Peleé por diseñar una interfaz visual de progreso — un camino con nodos que se desbloquean, como un mapa. Algunos en el cliente pensaron que era "poco serio para una institución financiera". Mi argumento fue directo: ver que estás en el nodo 3 de 12 no es un juego — es el alivio de saber que tienes un camino claro y que estás avanzando en él. Eso cambia la narrativa de "tengo que ir a un curso obligatorio" a "estoy progresando en mi carrera".

Fue mi decisión más arriesgada. Terminó siendo la funcionalidad que los colaboradores más amaron.

### Decisión 2: Edición en línea de errores — no hacerle eso a Carlos

El equipo técnico propuso que si los datos importados llegaban con errores — algo que pasaba siempre — el sistema los rechazara y le pidiera a Carlos que regresara al archivo original a corregirlos.

Me detuve. Carlos ya venía traumatizado por años de Excel. Mandarlo de regreso al archivo original por diez errores de tipografía no era eficiencia — era trasladar su sufrimiento de una ventana a otra con mejor diseño.

Diseñé una pantalla intermedia donde Carlos podía corregir los campos con error directamente en la plataforma, antes de procesar. Fue más difícil de programar. Convencí al PM y al Tech Lead con un argumento que no pudieron rebatir: "GAC nació para que Carlos pueda irse a su casa a una hora decente. Si lo mandamos de regreso al Excel por cada error, no le estamos devolviendo nada — le estamos cambiando el problema de lugar."

Lo aprobaron.

### Decisión 3: El "por qué" de la automatización — el alivio necesita transparencia

Cuando el sistema clasificaba automáticamente a un gerente como "Multiproducto" — una categoría especial con reglas de capacitación diferentes — yo sabía exactamente lo que iba a pasar: Carlos iba a abrir su Excel manual para verificar si el sistema tenía razón. El alivio no llegaría si no confiaba en la máquina.

Los stakeholders querían una interfaz limpia, sin explicaciones. Yo insistí en incluir un tooltip junto a cada decisión automática que explicara la regla aplicada: "Asignado a Multiproducto porque se detectó 1 asesor con perfil CIE en la sucursal X."

Me dijeron que ensuciaba la interfaz. Mi respuesta fue: "La automatización sin transparencia no libera a Carlos — lo pone a vigilar a la máquina en lugar de vigilar sus Excel. Si no entiende por qué el sistema tomó la decisión, va a seguir haciendo el trabajo doble. Y habremos construido una herramienta que nadie usa porque nadie confía en ella."

Ese tooltip fue lo que permitió que Carlos soltara el control por primera vez en años. Y que la adopción llegara al 100% desde el primer mes.

No estaba diseñando pantallas. Estaba diseñando el permiso para respirar.

---

## El impacto

Carlos dejó de trabajar los jueves por la noche.

Esa frase vale más que cualquier gráfica de métricas. Pero los números cuentan la historia completa.

El proceso que consumía entre 24 y 32 horas semanales de trabajo manual quedó reducido a menos de 2 horas. Una reducción del 90 al 95% en tiempo operativo — no como promesa de consultoría, sino como realidad medida en los logs del sistema.

La tasa de error en convocatorias — que antes rondaba el 10 al 15% de registros con algún problema, enviando personas a capacitaciones equivocadas, en ciudades equivocadas, en cursos que ya habían tomado — cayó a menos del 0.5%. El caos que Carlos cargaba solo en su cabeza se volvió un sistema que prácticamente no se equivoca.

La adopción llegó al 100% desde el primer mes. Sin resistencia, sin capacitación forzada, sin vuelta atrás. Cuando un producto resuelve un dolor real, la gente no necesita que la convenzan de usarlo.

Y Ana — la asesora que recibía citatorios sin contexto — por primera vez pudo ver su camino completo. Supo en qué peldaño estaba. Supo cuánto le faltaba. Dejó de sentirse una ficha en un tablero y empezó a sentirse una profesional en desarrollo.

El alivio no fue solo de Carlos. Fue de 27,000 personas que por fin pudieron respirar.

---

## Lo que aprendí

Gentera me quitó una obsesión que muchos diseñadores tenemos sin darnos cuenta: la de que "hacerlo simple" significa quitar elementos de la pantalla.

En este proyecto aprendí que la verdadera simplicidad es absorber la complejidad del usuario. El proceso de capacitación de Gentera era un caos de reglas cruzadas, excepciones y lógicas que tomaban años aprender. Mi trabajo no era limpiar la interfaz — era construir una maquinaria invisible que hiciera todo el trabajo sucio por detrás, para que Carlos solo tuviera que apretar un botón.

También aprendí algo sobre la ética del diseño que ningún curso me había enseñado. Cuando vi a Carlos terminar su jueves a las 9 de la noche por culpa de un archivo generado a mano, entendí que cada vez que un diseñador cede ante una limitación técnica sin pelear, le está robando horas de vida a alguien.

Mi rol no es hacer pantallas bonitas. Es ser el abogado del usuario frente a todo lo que quiere simplificar su trabajo a costa de él.

Y lo más importante que me llevé: la gente le tiene miedo a la automatización. Carlos tenía miedo de que el sistema se equivocara y él quedara como responsable. Aprendí que el diseño no es solo que el usuario sepa qué botón apretar — es que se sienta seguro de que el sistema no lo va a traicionar.

Después de Gentera, ya no puedo ver un producto digital sin preguntarme: ¿a quién le estoy devolviendo sus horas de sueño?

Diseñar tranquilidad es mucho más difícil, y mucho más satisfactorio, que diseñar interfaces bonitas.
