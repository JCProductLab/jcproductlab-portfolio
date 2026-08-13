# Caso de Estudio: AsDeporte

## El gancho

Hay un momento en cada carrera que los atletas describen igual: el silencio absoluto justo antes del disparo de salida. Todo el ruido desaparece. Solo queda el atleta y su meta.

Ese momento de foco puro era exactamente lo que AsDeporte le estaba robando a sus atletas — antes de que siquiera llegaran a la línea de salida.

Cuando llegué al proyecto, encontré una plataforma que no era solo lenta o anticuada. Era una plataforma que convertía el entusiasmo deportivo en burocracia, la confianza en miedo, y el impulso en parálisis.

Mi trabajo fue quitar todas las piedras del camino. Para que lo único que quedara entre el atleta y su carrera fuera un clic.

---

## El contexto

AsDeporte lleva más de 30 años organizando los eventos deportivos más importantes de México. Ironman. Spartan. Maratones masivos que mueven a decenas de miles de corredores cada año. Su reputación en el mundo físico es impecable.

Pero había una contradicción brutal: la misma organización que diseñaba experiencias épicas en el asfalto, tenía una puerta digital que se sentía como una oficina de trámites gubernamentales.

Esa puerta era la aplicación móvil. El único punto de contacto entre 125,000 atletas activos mensuales y los eventos que querían correr. Descubrir carreras, comparar opciones, inscribirse, pagar, confirmar — todo pasaba ahí.

Mi rol fue liderar el rediseño completo de esa experiencia — desde las primeras entrevistas con atletas hasta el lanzamiento del MVP — con un norte claro: que inscribirse a una carrera generara el mismo impulso que cruzar la meta.

---

## El problema real

El research no me mostró una interfaz con problemas de usabilidad. Me mostró una plataforma en guerra con sus propios usuarios.

Primer frente: la información secuestrada. El equipo anterior había reemplazado el descubrimiento visual de eventos por un calendario gris de puntitos de colores. Para saber qué carrera se escondía detrás de cada punto, el atleta tenía que picar uno por uno. Un triatleta experto me lo dijo sin rodeos: "Parece que la app no quiere que vaya a correr, me lo está ocultando." Estábamos usando la interfaz como muro, no como trampolín.

Segundo frente: el terror financiero. Al dar clic en "Pagar", la pantalla se quedaba en blanco. Diez segundos. Quince segundos. Silencio total. Una atleta me describió ese momento con una precisión que me heló: no sabía si ya le habían cobrado, si volver a intentarlo significaba un cargo doble, si podía confiar en cerrar la app. Los logs de soporte confirmaron sus miedos — había cobros fantasma y duplicados. Una marca que genera miedo en su momento de conversión no tiene un problema de diseño. Tiene una hemorragia de negocio.

Tercer frente: la arrogancia del lenguaje. Vi a un principiante paralizado frente al formulario de inscripción. Le pedíamos el CURP sin explicar para qué. Le hablábamos de "chips", "bloques de salida" y "transpondedores" como si fueran términos universales. Me dijo algo que no olvidé: "Bajé la app para motivarme a empezar a correr y la borré a los cinco minutos porque me sentí un intruso." Estábamos expulsando a toda una generación de nuevos atletas por pura soberbia lingüística.

Cuarto frente: el soporte como manual de supervivencia. Cuando me senté con el equipo de atención al cliente, descubrí que no resolvían problemas — enseñaban trucos para rodear el desastre. "No le pique ahí porque se traba. Mejor use la web." Cuando tu equipo de soporte tiene que entrenar a los usuarios para que la interfaz no explote, el diseño dejó de ser un problema creativo y se convirtió en un riesgo operativo medible en millones.

El diagnóstico era claro. AsDeporte organizaba carreras de clase mundial y tenía una puerta digital que apagaba el impulso antes de que empezara.

La misión no era rediseñar una app. Era devolver el silencio previo al disparo de salida — ese foco puro donde lo único que existe es el atleta y su meta.

---

## Las decisiones clave

En el deporte de alto rendimiento, la duda es el enemigo de la acción. Un atleta que duda en la línea de salida ya perdió.

La misma lógica aplica en el diseño de producto. Cada punto de fricción en la plataforma era una semilla de duda. Y yo estaba ahí para erradicarlas todas.

Cada batalla que peleé en AsDeporte tenía el mismo objetivo: certeza. No comodidad, no estética, no modernidad — certeza. Que el atleta supiera, sin ningún margen de duda, que la plataforma no le iba a fallar.

### Batalla 1: Del calendario de adivinanzas al feed de certeza técnica

El equipo de producto tenía fe ciega en su calendario de puntitos de colores. Era "limpio y moderno". Yo tenía fe en los datos del research.

Un triatleta que planifica su temporada no busca por fecha — busca por meta de entrenamiento. Quiere saber si una carrera tiene el desnivel que necesita, el tipo de terreno que busca, la distancia que corresponde a su ciclo. El calendario no le decía nada de eso. Le decía que había "algo" en una fecha, y lo obligaba a investigar punto por punto para descubrirlo.

Eso no es descubrimiento — es adivinanza. Y la adivinanza genera duda.

Propuse un feed visual de tarjetas con filtros técnicos granulares: desnivel, tipo de terreno, distancia, nivel de dificultad. No quería que el usuario creyera que había encontrado su carrera. Quería que lo supiera. El tiempo de búsqueda bajó un 25% en el re-testing. La certeza tiene ese efecto.

### Batalla 2: La jerarquía de Oxxo — la certeza financiera no se negocia

La dirección quería proyectar una imagen global y premium. Su propuesta concreta: enterrar las opciones de pago en efectivo al fondo de una lista desplegable.

Yo propuse lo contrario: darle a Oxxo el mismo peso visual que a Visa o Mastercard. La respuesta fue predecible: "Se ve poco elegante."

Mi argumento no fue sobre estética — fue sobre certeza financiera. En México, para millones de personas, una tarjeta de crédito en una app que ya ha fallado no genera comodidad, genera ansiedad. Oxxo es un lugar físico. Una transacción que el usuario ve, toca y entiende. Es su zona de certeza en un mundo digital que le ha fallado antes.

Esconder esa certeza en el momento más tenso del flujo — el pago — no es elegante. Es una decisión de negocio que cuesta conversiones. Me mantuve firme. El SEQ del flujo de pagos llegó a 5.0 sobre 5 en el re-testing.

### Batalla 3: El CURP como escudo, no como obstáculo

El CURP era el mayor punto de fuga en el funnel. Mi primera propuesta fue eliminarlo. Legal dijo que era imposible — el seguro del atleta lo exigía por ley.

Entonces cambié el ángulo. Si no podía quitar el campo, tenía que transformar lo que significaba para el usuario. El problema no era el dato — era la ausencia de explicación. Pedir información sensible sin contexto no es un formulario, es una emboscada.

Diseñé un microcopy y un tooltip que no citaba leyes ni términos de servicio. Hablaba directamente: "Necesitamos tu CURP para activar tu seguro médico de competidor." Un dato que antes generaba sospecha — "¿para qué quieren esto?" — se convirtió en una señal de cuidado: "me están protegiendo."

La vacilación en ese campo bajó un 70%. La certeza del propósito tiene ese efecto sobre el comportamiento.

### Batalla 4: El Hub Plus — la certeza del valor que ya pagaste

Producto quería distribuir los beneficios de la membresía Plus por toda la app, apareciendo en cada pantalla como recordatorio de compra. La lógica era de marketing: más exposición, más percepción de valor.

Yo argumenté desde otro lugar: un usuario que ya pagó no necesita que le vendan lo que compró. Necesita verlo. Claramente. En un solo lugar.

Propuse un centro de mando dedicado — un hub donde el miembro Plus viera su ahorro acumulado, sus beneficios activos y el estado de su membresía de un vistazo. No como mensaje de marketing disperso por la app, sino como un pacto transparente: esto es lo que pagaste, esto es lo que tienes.

La tasa de renovación de membresías nos dio la razón.

Cada una de estas decisiones apuntaba al mismo norte: diseñar para que el usuario dejara de pensar en la interfaz y empezara a pensar en su carrera.

---

## El impacto

Cuando la certeza reemplaza la duda, los números se mueven solos.

La tasa de conversión del funnel de inscripción saltó del 8% estimado al 11.5% en el primer mes — un incremento del 43%. En una plataforma con 125,000 atletas activos mensuales, ese número no es una métrica de UX. Es revenue directo generado por eliminar fricción.

La puntuación de usabilidad llegó a 90 sobre 100 — el umbral de excelente. Los errores de pago reportados a soporte cayeron un 60%. El uso de filtros avanzados — esa funcionalidad que Marketing temía — llegó al 65% de los usuarios activos.

Pero el número que mejor resume el proyecto no está en ningún dashboard: el equipo de soporte dejó de repartir manuales de trucos para sobrevivir la interfaz. Por primera vez en años, la plataforma funcionaba sola — y los atletas podían concentrarse en lo único que importaba: su próxima carrera.

---

## Lo que aprendí

AsDeporte me enseñó que el diseño de conversión no es un problema visual. Es un problema de certeza.

Antes de este proyecto, optimizaba flujos. Después, entendí que detrás de cada abandono hay una duda específica que nadie se tomó el tiempo de resolver. Laura no abandonó el checkout porque el botón de pago tuviera mal color. Lo abandonó porque diez segundos de pantalla en blanco le dijeron que el sistema podía traicionarla — y nadie había diseñado para desmentir esa duda.

Eso cambió mi forma de auditar cualquier producto. Ya no pregunto solo "¿dónde abandona el usuario?" Pregunto "¿qué duda específica lo hizo abandonar?" Son preguntas distintas, y llevan a soluciones distintas.

También aprendí que defender al usuario a veces significa hablar el idioma del negocio con más fluidez que el equipo de negocio. Cuando propuse jerarquizar Oxxo en el checkout, el argumento que ganó no fue "es mejor para el usuario" — fue "esto nos está costando conversiones medibles." Aprendí que la empatía con el usuario es mi brújula, pero los datos de negocio son mi idioma de negociación.

Y lo más difícil: aprendí a matar mis propias decisiones favoritas cuando los datos mandan. Después del lanzamiento, monitoreé rage clicks en Hotjar, grabaciones de sesión, mapas de calor. Vi en tiempo real cómo algunas de mis hipótesis de diseño eran destruidas por el comportamiento real de 125,000 personas. Cada iteración post-lanzamiento fue un ejercicio de soltar el ego y abrazar la evidencia.

AsDeporte me convirtió en un diseñador que ya no busca hacer productos bonitos. Busca hacer productos en los que el usuario confíe lo suficiente como para no pensar en ellos — y concentrarse en cruzar la meta.
