Diagramas de Flujo de Usuario (Descripción Explicativa) - Plataforma GAC

Este documento presenta una descripción explicativa de los diagramas de flujo de
usuario (User Flow Diagrams) clave para la plataforma de Gestión Automatizada de la
Capacitación (GAC). Estos diagramas visualizan las rutas paso a paso que los
diferentes roles de usuario seguirán para completar tareas críticas dentro de la
plataforma, asegurando una navegación lógica, eficiente y sin fricciones.

Dado que el formato no permite la creación de diagramas visuales, cada flujo se
describe detalladamente, indicando las acciones del usuario, las pantallas involucradas,
los puntos de decisión y las posibles rutas alternativas o de error. Estos flujos sirven
como un "guion" fundamental para la creación de los wireframes detallados.

1. Flujo de Usuario: Cargar y Procesar Plantilla de Capacitación Semanal

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Cargar la plantilla de datos semanal, que el sistema la procese
automáticamente y revisar las inconsistencias para iniciar el ciclo de
segmentación.

●  Punto de Entrada: Dashboard de Administrador (sección "Gestión de Datos" o

alerta de "Plantilla Pendiente").

●  Punto de Salida: Plantilla procesada, inconsistencias revisadas, y sistema listo para

la segmentación de grupos.
Pasos del Flujo:
1.  Inicio: Carlos accede al Dashboard de Administrador.
2.  Navegación: Clic en "Gestión de Datos" en el menú lateral.
3.  Pantalla: Gestión de Datos - Cargar Plantilla.

■  Carlos ve un área para "Arrastrar y Soltar" o un botón "Subir Plantilla ADN

(Excel)".

4.  Acción: Carlos arrastra o selecciona el archivo Excel de la plantilla semanal.
5.  Sistema: La plataforma muestra un indicador de "Procesando Plantilla..."

(RF-GAC-001).

6.  Pantalla: Resumen de Procesamiento de Plantilla.

■  El sistema muestra "Procesamiento Completado" y métricas clave (ej. "Total

de Colaboradores Procesados", "Elegibles Identificados").

■  Decisión: ¿Hay "Inconsistencias Detectadas" (ej. > 0)?

■  Sí: El sistema resalta la sección "Inconsistencias Detectadas" con un

número (ej. "15 inconsistencias").
■  Acción: Carlos hace clic en "Revisar Detalles" o "Descargar Reporte

de Errores".

■  Pantalla: Reporte Detallado de Errores/Inconsistencias.

■  Carlos revisa la tabla de errores (Tipo de Error, Colaborador,

Descripción, Sugerencia de Corrección).

■  Acción: Carlos realiza correcciones manualmente en el sistema

o en el archivo original (si es posible re-subir).

■  Ruta Alternativa: Si la corrección es en el archivo, Carlos

vuelve a "Cargar Plantilla" y repite el proceso.

■  Acción: Carlos confirma que ha revisado las inconsistencias.

■  No: El sistema muestra "0 Inconsistencias Detectadas".

7.  Sistema: La base de datos principal de GAC se actualiza con los datos limpios

y procesados (RF-GAC-025).

8.  Punto de Salida: Carlos es redirigido al Dashboard de Administrador o a la

sección "Propuestas de Grupos", listo para la siguiente fase.

2. Flujo de Usuario: Segmentar y Ajustar Grupos de Capacitación

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Generar propuestas de grupos de capacitación de forma automática y

realizar ajustes manuales si es necesario.

●  Punto de Entrada: Dashboard de Administrador (después de procesar la plantilla)

o sección "Gestión de Grupos".

●  Punto de Salida: Grupos de capacitación finalizados y listos para la asignación de

formadores y comunicaciones.
Pasos del Flujo:
1.  Inicio: Carlos accede al Dashboard de Administrador.
2.  Navegación: Clic en "Gestión de Grupos" en el menú lateral.
3.  Pantalla: Gestión de Grupos - Propuestas de Grupos.

■  El sistema muestra "Grupos Propuestos para la Semana X" en tarjetas o

bloques (RF-GAC-005).

■  Decisión: ¿Carlos desea generar nuevas propuestas o revisar las

existentes?
■  Generar Nuevas: Clic en "Generar Grupos" (si es un paso manual). El

sistema ejecuta la lógica de segmentación (RF-GAC-005,
RF-GAC-006, RF-GAC-007).

■  Revisar Existentes: Carlos ve las tarjetas de grupos.

■  Decisión: ¿Hay alertas de cupo (mínimo no alcanzado, máximo excedido) o

problemas de compatibilidad? (RF-GAC-008).

■  Sí: Las tarjetas de grupo con problemas están resaltadas visualmente.

■  Acción: Carlos hace clic en "Ver Detalles y Ajustar" en una tarjeta

con alerta.

■  Pantalla: Detalle y Ajuste de Grupo.

■  Carlos ve la lista de participantes, alertas de cupo, y

sugerencias de acción (ej. "Fusionar Grupo", "Dividir Grupo").
■  Acción: Carlos utiliza las herramientas de ajuste (ej. arrastrar y
soltar participantes, botones "Añadir Participante", "Eliminar
Participante", "Mover a Otro Grupo").

■  Sistema: El sistema recalcula el cupo y la validez del grupo con

cada ajuste.

■  Ruta Alternativa: Si decide fusionar o dividir, el sistema le guía

a través de ese sub-flujo.

■  Acción: Carlos guarda los cambios y regresa a "Propuestas de

Grupos".

■  No: Todos los grupos cumplen los criterios.

4.  Acción: Carlos revisa todos los grupos propuestos y realiza los ajustes

necesarios hasta que todos los grupos estén validados.

5.  Punto de Salida: Los grupos están finalizados y listos para la siguiente etapa

del proceso.

3. Flujo de Usuario: Enviar Convocatorias y Notificaciones Masivas

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Enviar automáticamente las invitaciones y notificaciones a gerentes y

colaboradores para los grupos de capacitación finalizados.

●  Punto de Entrada: Sección "Comunicaciones" o un botón de acción desde la

finalización de la "Gestión de Grupos".

●  Punto de Salida: Todas las comunicaciones enviadas exitosamente, con

confirmación.
Pasos del Flujo:
1.  Inicio: Carlos accede a la sección "Comunicaciones".
2.  Pantalla: Comunicaciones - Enviar Convocatorias.

■  El sistema muestra opciones de envío: "Enviar a Gerentes (Outlook)",

"Enviar a Colaboradores (Teams)", "Enviar a Colaboradores (WhatsApp)".

■  Se muestra una previsualización de las invitaciones (ej. correo tipo,

mensaje de Teams/WhatsApp).

3.  Acción: Carlos selecciona los canales de envío deseados (ej. marca las

casillas).

4.  Acción: Clic en el botón "Enviar Todo".
5.  Sistema: La plataforma inicia el proceso de envío masivo (RF-GAC-021,

RF-GAC-022).
■  El sistema genera automáticamente los archivos .ical y los adjunta según el

canal.

6.  Pantalla: Confirmación de Envío / Estado del Envío.

■  El sistema muestra un mensaje de "Convocatorias enviadas exitosamente".
■  Se puede ver un resumen del estado (ej. "X correos enviados", "Y mensajes

de Teams enviados", "Z mensajes de WhatsApp enviados").

■  Ruta de Error: Si hay errores en el envío (ej. dirección de correo inválida), el
sistema muestra una alerta y un enlace a un "Reporte de Errores de Envío".

7.  Punto de Salida: Comunicaciones enviadas y Carlos tiene visibilidad del

resultado.

4. Flujo de Usuario: Consultar Ruta de Capacitación y Progreso

●  Persona: Ana, la Colaboradora Entusiasta (Colaborador en Capacitación)
●  Objetivo: Entender su ruta de capacitación, ver su progreso actual y conocer los

detalles de sus cursos.

●  Punto de Entrada: Dashboard de Colaborador o notificación de un nuevo curso.
●  Punto de Salida: Ana tiene una comprensión clara de su estatus y próximos pasos.

Pasos del Flujo:
1.  Inicio: Ana inicia sesión y llega a su Dashboard de Colaborador.
2.  Pantalla: Dashboard de Colaborador.

■  Ana ve el "Mapa Visual de Mi Ruta de Capacitación" (RF-GAC-012) con su

% de Avance (RF-GAC-014).

■  Secciones de "Próximos Cursos Programados" y "Cursos Recientes

Completados".

3.  Acción: Ana hace clic en un hito/nivel en el "Mapa Visual" o en un curso en

"Próximos Cursos".

4.  Pantalla: Detalle del Curso / Hito.

■  Ana ve los detalles completos del curso (Fecha, Hora, Sede/Enlace,

Formador, Temario).

■  Acción: Clic en "Añadir a Calendario" para descargar el .ical.
■  Acción: Clic en "Ver Historial Completo" (si aplicara desde el dashboard).

5.  Pantalla: Historial de Cursos Completados.

■  Ana ve una tabla con sus cursos completados, calificaciones y estatus.

6.  Punto de Salida: Ana ha consultado la información deseada y comprende su

progreso.

5. Flujo de Usuario: Visualizar Avance de Equipo y Generar Reporte

●  Persona: David, el Líder Comprometido (Gerente de Oficina)
●  Objetivo: Obtener una visión consolidada del progreso de capacitación de su

equipo e identificar colaboradores en riesgo, y generar un reporte si es necesario.

●  Punto de Entrada: Dashboard de Líder o notificación de alerta de equipo.
●  Punto de Salida: David ha revisado el avance de su equipo y/o ha generado el

reporte deseado.
Pasos del Flujo:
1.  Inicio: David inicia sesión y llega a su Dashboard de Líder.
2.  Pantalla: Dashboard de Líder - Mi Equipo.

■  David ve un resumen del "Avance de Capacitación de Mi Equipo"

(RF-GAC-017) con tabla/tarjetas de cada miembro (Nombre, Puesto, %
Avance, Estatus General).

■  Filtros (Oficina, Estatus, % Avance) disponibles.
■

Identificación visual de colaboradores en riesgo (ej. semáforo de color).

3.  Decisión: ¿David desea ver el detalle de un colaborador o generar un reporte?

■  Ver Detalle de Colaborador:

■  Acción: Clic en el nombre de un colaborador.
■  Pantalla: Detalle de Colaborador (Vista Líder).

■  David ve la ruta de capacitación individual del colaborador, historial

de cursos, y cursos pendientes.
■  Acción: Clic en "Volver al Equipo".

■  Generar Reporte:

■  Acción: Clic en "Reportes de Equipo" en el menú lateral.
■  Pantalla: Reportes de Equipo - Generar Reporte.

■  David selecciona el "Tipo de Reporte" (ej. "Avance por Oficina",

"Colaboradores Retrasados").

■  Aplica filtros (Unidad, OS, Subdirección, Dirección, Fechas).
■  Acción: Clic en "Generar Reporte".
■  Pantalla: Previsualización del Reporte.

■  David ve el reporte generado.
■  Acción: Clic en "Exportar a Excel".
■  Sistema: El archivo Excel se descarga.

4.  Punto de Salida: David ha obtenido la información necesaria para gestionar a

su equipo.

6. Flujo de Usuario: Acceder a Agenda y Registrar Asistencia

●  Persona: Elena, la Formadora Dedicada (Formadora)
●  Objetivo: Ver su agenda de cursos asignados y registrar la asistencia de los

participantes.

●  Punto de Entrada: Dashboard de Formador o notificación de nueva asignación.
●  Punto de Salida: Asistencia registrada y Elena tiene su agenda actualizada.

Pasos del Flujo:
1.  Inicio: Elena inicia sesión y llega a su Dashboard de Formador.
2.  Pantalla: Dashboard de Formador.

■  Elena ve su "Calendario de Cursos Asignados" (RF-GAC-011) y una sección

de "Próximos Grupos".

3.  Acción: Elena hace clic en un curso en el calendario o en un "Próximo Grupo".
4.  Pantalla: Detalle de Curso Asignado.

■  Elena ve los detalles del curso (Fecha, Hora, Sede/Enlace) y la lista de

participantes.

■  Acción: Clic en "Abrir Grupo y Registrar Asistencia".

5.  Pantalla: Registrar Asistencia para Grupo: [Nombre del Grupo].

■  Elena ve la tabla de participantes con casillas "Presente / Ausente" para

cada uno.

■  Campo opcional para "Notas / Feedback General del Grupo".

6.  Acción: Elena marca la asistencia y añade notas si lo desea.
7.  Acción: Clic en "Guardar Asistencia".
8.  Sistema: La asistencia se registra en el sistema (RF-GAC-013).
9.  Punto de Salida: Asistencia registrada y Elena regresa a su agenda o al

dashboard.

