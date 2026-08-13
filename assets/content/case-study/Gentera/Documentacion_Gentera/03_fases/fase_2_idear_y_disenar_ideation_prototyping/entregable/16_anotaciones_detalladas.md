Anotaciones Detalladas - Plataforma GAC

Este documento describe el tipo y contenido de las anotaciones detalladas que
acompañarían a los wireframes de media fidelidad de la plataforma de Gestión
Automatizada de la Capacitación (GAC). Dado que los wireframes se han descrito
textualmente, estas anotaciones explican la funcionalidad, el comportamiento, las
interacciones y las reglas de negocio que no son inmediatamente obvias a través de la
representación esquemática.

Las anotaciones son cruciales para asegurar que el equipo de desarrollo, los
stakeholders y cualquier persona que revise los diseños, comprenda completamente el
propósito y el funcionamiento de cada elemento de la interfaz.

Propósito de las Anotaciones Detalladas:

●  Clarificar Funcionalidad: Explicar qué hace cada elemento de la UI y cómo se

espera que funcione.

●  Definir Interacciones: Describir cómo el usuario interactúa con los elementos
(clics, entradas de texto, arrastrar y soltar, etc.) y qué sucede como resultado.

●  Especificar Reglas de Negocio: Indicar las reglas que rigen la visibilidad, el

comportamiento o los datos de los elementos.

●  Manejar Estados: Describir los diferentes estados de los elementos (ej. botón

deshabilitado, campo con error, estado de carga).

●  Contextualizar Contenido: Aclarar la fuente de los datos o el tipo de información

que se mostrará.

●  Justificar Decisiones: Brevemente explicar el "por qué" de ciertas elecciones de

diseño.

Ejemplos de Anotaciones Detalladas por Pantalla Clave (Basadas en los
Wireframes Explicados):

1. Pantalla: Login

●  Campo: Número de Empleado
○  Tipo: Campo de texto.
○  Comportamiento: Acepta solo caracteres numéricos. Límite de longitud: [X]

dígitos.

○  Validación: Obligatorio. Mensaje de error si está vacío o formato incorrecto.

●  Campo: Fecha de Nacimiento (Contraseña)

○  Tipo: Campo de fecha (selector de fecha o formato DD/MM/AAAA).

○  Comportamiento: Máscara de entrada para formato de fecha.
○  Validación: Obligatorio. Mensaje de error si está vacío o fecha inválida.

●  Botón: Iniciar Sesión

○  Comportamiento: Activo solo cuando ambos campos están llenos y válidos.
Interacción: Al hacer clic, envía credenciales al backend para autenticación.
○

○  Estados: Estado de carga (spinner) durante el procesamiento.

●  Mensaje de Error de Autenticación

○  Visibilidad: Solo visible si la autenticación falla.
○  Contenido: "Usuario o contraseña incorrectos. Por favor, verifica tus datos."

2. Pantalla: Dashboard de Administrador

●  Menú Lateral

○  Comportamiento: Persistente en escritorio, colapsable en móvil (icono de
hamburguesa). El elemento de la sección actual (ej. "Inicio") debe estar
resaltado.

●  Tarjeta: Plantilla Pendiente de Cargar

○  Visibilidad: Solo visible si no se ha cargado la plantilla semanal o si la última

carga tuvo errores críticos.

○  Botón "Cargar Plantilla": Lleva directamente a la pantalla "Gestión de Datos -

Cargar Plantilla".

●  Tarjeta: Grupos Propuestos Pendientes de Revisión

○  Visibilidad: Muestra el número de grupos generados automáticamente que

requieren revisión o ajuste manual de Carlos.

○  Botón "Revisar Grupos": Lleva a la pantalla "Gestión de Grupos - Propuestas

de Grupos".

●  Sección de Alertas (ej. "Inconsistencias en Última Carga")

○  Comportamiento: Alerta prominente para problemas críticos que requieren

○

acción inmediata.
Interacción: Clic en la alerta lleva al "Reporte Detallado de
Errores/Inconsistencias".

3. Pantalla: Gestión de Datos - Cargar Plantilla

●  Área de Arrastrar y Soltar / Botón "Seleccionar Archivo"

○  Tipo de Archivo: Solo acepta archivos .xlsx o .xls.
○  Validación: Mensaje de error si se intenta subir un formato incorrecto.
Indicador de Progreso "Procesando Plantilla..."
○  Comportamiento: Muestra el progreso de la carga, limpieza y cruce de datos

●

(RF-GAC-001).

○  Duración Esperada: Entre 5 y 10 minutos máximo (según métricas de

rendimiento).

●  Sección "Resultados del Procesamiento"

○  Contenido: Muestra el resultado de la aplicación de RN-ID-001 a RN-ID-007.
○  Visibilidad de Inconsistencias: Si Inconsistencias Detectadas > 0, la sección

se expande o se resalta el botón "Ver Reporte Detallado".

4. Pantalla: Gestión de Grupos - Detalle y Ajuste de Grupo

●  Tabla: Lista de Participantes

○  Comportamiento: Las filas de participantes deben ser arrastrables y soltables

○

para moverlos entre grupos (si se implementa esta interacción).
Información Adicional (Anotación): Al pasar el cursor sobre el nombre de un
participante, se puede mostrar un tooltip con su estatus de reingreso
(RN-ID-005) o si es "Gerente Multiproducto" (RN-SEG-004).

●  Alertas de Cupo (Ej. "Este grupo tiene [X] participantes, el mínimo es [Y]")

○  Visibilidad: Aparece automáticamente si el grupo no cumple con RN-SEG-002

o RN-SEG-003.

○  Sugerencias de Acción: Botones como "Fusionar Grupo" o "Dividir Grupo" se

activan contextualmente (RF-GAC-008).

●  Botones: Añadir Participante / Eliminar Participante / Mover a Otro Grupo
○  Comportamiento: "Añadir" abre un modal de búsqueda de colaboradores
elegibles. "Eliminar" remueve del grupo. "Mover" abre un selector de grupo
destino.

5. Pantalla: Dashboard de Colaborador (Mi Ruta de Capacitación)

●  Mapa Visual de Ruta

○  Comportamiento: Los nodos (niveles) deben ser clicables para acceder a los

detalles de los cursos de ese nivel.

○  Estados Visuales: Nodos completados (ej. color verde), en progreso (ej. color

amarillo con animación), pendientes (ej. color gris).

●

○  Contenido: Refleja el progreso calculado por RF-GAC-014.
Indicador "% de Avance General"
○  Fuente: Calculado automáticamente por el sistema (RF-GAC-014) basado en

los cursos completados y niveles acreditados.

○  Actualización: Se actualiza en tiempo real al registrarse la finalización de un

curso.

●  Sección "Próximos Cursos"

○  Fuente: Datos de cursos asignados al colaborador y aún no completados.

○  Orden: Ordenados por fecha próxima.

6. Pantalla: Detalle de Curso/Hito (Colaborador)

●  Botón: Añadir a Calendario (.ical)

○

Interacción: Al hacer clic, descarga un archivo .ical generado
automáticamente con los detalles del curso (RF-GAC-022).

○  Contenido del .ical (Anotación): Debe incluir: Título del curso, Fecha y Hora,
Duración, Ubicación/Enlace, Descripción (temario), Organizador (Gentera
Capacitación), Contacto (Carlos).

●  Botón: Acceder al Curso (si es virtual)

○  Visibilidad: Solo visible para cursos virtuales con enlace directo.
○  Comportamiento: Abre el enlace del curso en una nueva pestaña del

navegador.

7. Pantalla: Registrar Asistencia para Grupo (Formador)

●  Tabla: Participantes

○  Comportamiento: Los checkboxes/radio buttons para "Presente" / "Ausente"

deben ser fáciles de usar en dispositivos táctiles (tamaño adecuado).

○  Validación: Se requiere seleccionar un estado para cada participante antes de

guardar.

●  Campo: Notas / Feedback General del Grupo

○  Tipo: Área de texto multilínea.
○  Propósito: Capturar observaciones cualitativas sobre el grupo o la sesión. No

obligatorio.

●  Botón: Guardar Asistencia

○

Interacción: Al hacer clic, envía los datos de asistencia al sistema para su
registro (RF-GAC-013).

○  Feedback: Mensaje de confirmación "Asistencia guardada exitosamente" o

alerta de error si falla.

Estas anotaciones, junto con los wireframes esquemáticos, proporcionan una
especificación funcional completa para el equipo de desarrollo, asegurando que la
implementación de la plataforma GAC sea precisa y alineada con la visión de diseño.

