Flujos de Wireframes (Wireflows) - Plataforma GAC

Este documento describe los "Wireflows" clave para la plataforma de Gestión
Automatizada de la Capacitación (GAC). Los Wireflows son representaciones que
combinan los wireframes de media fidelidad con los diagramas de flujo de usuario,
ilustrando la secuencia de pantallas y las interacciones que conectan cada paso de una
tarea.

Dado que no es posible generar diagramas visuales directamente, este documento
proporciona una descripción explicativa detallada de los flujos más críticos, indicando
las pantallas específicas involucradas, las acciones del usuario y las transiciones entre
ellas. Esto sirve como un "guion visual" para entender la experiencia de usuario
completa de principio a fin.

1. Flujo de Wireframe: Cargar y Procesar Plantilla de Capacitación Semanal

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Cargar la plantilla de datos semanal, que el sistema la procese

automáticamente y revisar las inconsistencias.

●  Punto de Entrada: Login exitoso o acceso directo al módulo de "Gestión de

Datos".
Secuencia de Pantallas y Transiciones:
1.  Pantalla: Login

■  Acción del Usuario: Ingresa "Número de Empleado" y "Fecha de

Nacimiento". Clic en "Iniciar Sesión".

■  Transición: Redirección al Dashboard de Administrador.

2.  Pantalla: Dashboard de Administrador

■  Elementos Clave: Tarjeta "Plantilla Pendiente de Cargar" con botón "Cargar

Plantilla" o enlace en el menú lateral "Gestión de Datos".

■  Acción del Usuario: Clic en "Cargar Plantilla" (desde tarjeta o menú).
■  Transición: Navegación a la pantalla "Gestión de Datos - Cargar Plantilla".

3.  Pantalla: Gestión de Datos - Cargar Plantilla

■  Elementos Clave: Área de "Arrastrar y Soltar Archivo Excel" y botón

"Seleccionar Archivo".

■  Acción del Usuario: Arrastra o selecciona el archivo Excel.
■  Transición: La pantalla muestra un "Indicador de Progreso" ("Procesando

Plantilla...").

4.  Pantalla: Resumen de Procesamiento de Plantilla

■  Elementos Clave: Mensaje "Procesamiento Completado", métricas de

procesamiento ("Colaboradores Procesados", "Elegibles Identificados").
■  Condición (Decisión del Sistema): ¿Hay "Inconsistencias Detectadas" (>

0)?
■  SI: Muestra el número de inconsistencias y botón "Ver Reporte

Detallado".
■  Acción del Usuario: Clic en "Ver Reporte Detallado".
■  Transición: Navegación a la pantalla "Reporte Detallado de

Errores/Inconsistencias".

■  NO: Mensaje "0 Inconsistencias Detectadas".

■  Acción del Usuario: Clic en botón "Continuar a Gestión de

Grupos" o "Volver al Dashboard".

■  Transición: Navegación a la pantalla "Gestión de Grupos -
Propuestas de Grupos" o "Dashboard de Administrador".

5.  Pantalla: Reporte Detallado de Errores/Inconsistencias

■  Elementos Clave: Tabla con "Tipo de Error", "Colaborador", "Descripción",
"Sugerencia". Botón "Volver a Cargar Plantilla" o "Confirmar Revisión".

■  Acción del Usuario: Revisa errores. Clic en "Confirmar Revisión".
■  Transición: Navegación a la pantalla "Gestión de Grupos - Propuestas de

Grupos".

2. Flujo de Wireframe: Segmentar y Ajustar Grupos de Capacitación

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Generar propuestas de grupos de forma automática y realizar ajustes

manuales.

●  Punto de Entrada: Desde el "Resumen de Procesamiento de Plantilla" o

directamente desde el menú lateral.
Secuencia de Pantallas y Transiciones:
1.  Pantalla: Gestión de Grupos - Propuestas de Grupos

■  Elementos Clave: Tarjetas de grupo con información básica. Filtros.

Alertas visuales para grupos con problemas de cupo. Botón "Ver Detalles y
Ajustar" en cada tarjeta.

■  Acción del Usuario: Clic en "Ver Detalles y Ajustar" en una tarjeta de grupo

(especialmente si tiene alerta).

■  Transición: Navegación a la pantalla "Detalle y Ajuste de Grupo".

2.  Pantalla: Detalle y Ajuste de Grupo

■  Elementos Clave: Lista de participantes (con capacidad de arrastrar y
soltar). Alertas de cupo con sugerencias ("Fusionar Grupo", "Dividir

Grupo"). Botones "Añadir Participante", "Eliminar Participante", "Mover a
Otro Grupo".

■  Acción del Usuario: Realiza ajustes (mueve participantes, añade/elimina).

Clic en "Guardar Cambios".

■  Transición: Regreso a la pantalla "Gestión de Grupos - Propuestas de

Grupos".

3.  Pantalla: Gestión de Grupos - Propuestas de Grupos (Actualizada)
■  Elementos Clave: Los grupos ajustados reflejan los cambios.
■  Acción del Usuario: Una vez satisfecho con todos los grupos, clic en

"Finalizar Segmentación" (o un botón similar que active el siguiente paso
del flujo).

■  Transición: Navegación a la pantalla "Comunicaciones - Enviar

Convocatorias" (o un paso intermedio de asignación de formadores).

3. Flujo de Wireframe: Enviar Convocatorias y Notificaciones Masivas

●  Persona: Carlos, el Coordinador Detallista (Administrador de Capacitación)
●  Objetivo: Enviar todas las comunicaciones a gerentes y colaboradores.
●  Punto de Entrada: Desde la finalización de la "Gestión de Grupos" o directamente

desde el menú lateral "Comunicaciones".
Secuencia de Pantallas y Transiciones:
1.  Pantalla: Comunicaciones - Enviar Convocatorias

■  Elementos Clave: Opciones de envío por canal (Outlook, Teams,

WhatsApp). Áreas de previsualización de mensajes. Botón "Enviar Todas las
Convocatorias".

■  Acción del Usuario: Selecciona los canales deseados. Clic en "Enviar

Todas las Convocatorias".

■  Transición: La pantalla muestra un "Indicador de Envío" ("Enviando

comunicaciones...").

2.  Pantalla: Confirmación de Envío / Estado del Envío

■  Elementos Clave: Mensaje "Convocatorias enviadas exitosamente".

Resumen de envíos por canal.

■  Condición (Error): ¿Hubo errores en el envío?

■  SI: Alerta visual y enlace "Ver Reporte de Errores de Envío".

■  Acción del Usuario: Clic en "Ver Reporte de Errores de Envío".
■  Transición: Navegación a la pantalla "Reporte de Errores de Envío".

■  NO: Solo mensaje de éxito.

■  Acción del Usuario: Clic en "Volver al Dashboard" o "Finalizar Proceso

Semanal".

■  Transición: Navegación al "Dashboard de Administrador".

3.  Pantalla: Reporte de Errores de Envío (Ruta de Error)

■  Elementos Clave: Tabla con "Destinatario", "Canal", "Error", "Acción

Sugerida".

■  Acción del Usuario: Revisa errores. Clic en "Volver a Enviar" (si es posible)

o "Volver a Comunicaciones".

■  Transición: Regreso a la pantalla "Comunicaciones - Enviar Convocatorias"

o "Dashboard de Administrador".

4. Flujo de Wireframe: Consultar Ruta de Capacitación y Progreso

●  Persona: Ana, la Colaboradora Entusiasta
●  Objetivo: Entender su ruta de capacitación, ver su progreso actual y conocer los

detalles de sus cursos.

●  Punto de Entrada: Login exitoso o notificación de un nuevo curso.

Secuencia de Pantallas y Transiciones:
1.  Pantalla: Login

■  Acción del Usuario: Ingresa credenciales. Clic en "Iniciar Sesión".
■  Transición: Redirección al Dashboard de Colaborador.

2.  Pantalla: Dashboard de Colaborador (Mi Ruta de Capacitación)

■  Elementos Clave: "Mapa Visual de Mi Ruta de Capacitación", "% de Avance

General", "Próximos Cursos Programados", "Cursos Recientes
Completados".

■  Acción del Usuario: Clic en un nodo de nivel en el "Mapa Visual" (ej. "Nivel

Básico") o en un curso en "Próximos Cursos".

■  Transición: Navegación a la pantalla "Detalle de Curso/Hito (Colaborador)".

3.  Pantalla: Detalle de Curso/Hito (Colaborador)

■  Elementos Clave: Detalles del curso (Fecha, Hora, Sede/Enlace, Formador,
Temario), Estatus. Botón "Añadir a Calendario". Botón "Acceder al Curso" (si
es virtual).

■  Acción del Usuario: Clic en "Añadir a Calendario" (descarga .ical). Clic en
"Acceder al Curso" (abre nueva pestaña). O clic en "Volver a Mi Ruta".

■  Transición: Regreso al "Dashboard de Colaborador".

5. Flujo de Wireframe: Visualizar Avance de Equipo y Generar Reporte

●  Persona: David, el Líder Comprometido (Gerente de Oficina)
●  Objetivo: Obtener una visión consolidada del progreso de capacitación de su

equipo y generar un reporte.

●  Punto de Entrada: Login exitoso o acceso directo al módulo "Mi Equipo".

Secuencia de Pantallas y Transiciones:
1.  Pantalla: Login

■  Acción del Usuario: Ingresa credenciales. Clic en "Iniciar Sesión".
■  Transición: Redirección al Dashboard de Líder.

2.  Pantalla: Dashboard de Líder (Mi Equipo)

■  Elementos Clave: Resumen de avance de colaboradores (tabla/tarjetas),

filtros. Botón "Ver Detalle" para cada colaborador. Botón "Generar Reporte"
(en la sección "Reportes de Equipo" del menú lateral).

■  Acción del Usuario (Opción A: Ver Detalle): Clic en "Ver Detalle" de un

colaborador.

■  Transición (Opción A): Navegación a la pantalla "Mi Equipo - Detalle de

Colaborador (Vista Líder)".

3.  Pantalla: Mi Equipo - Detalle de Colaborador (Vista Líder)

■  Elementos Clave: Ruta de capacitación individual del colaborador,

historial, cursos pendientes.

■  Acción del Usuario: Clic en "Volver al Equipo".
■  Transición: Regreso al "Dashboard de Líder (Mi Equipo)".

4.  Pantalla: Dashboard de Líder (Mi Equipo)

■  Acción del Usuario (Opción B: Generar Reporte): Clic en "Reportes de

Equipo" en el menú lateral.

■  Transición (Opción B): Navegación a la pantalla "Reportes de Equipo -

Generar Reporte".

5.  Pantalla: Reportes de Equipo - Generar Reporte

■  Elementos Clave: Selector de "Tipo de Reporte", filtros. Botón "Generar

Reporte".

■  Acción del Usuario: Selecciona tipo y filtros. Clic en "Generar Reporte".
■  Transición: Navegación a la pantalla "Reportes de Equipo - Previsualización

del Reporte".

6.  Pantalla: Reportes de Equipo - Previsualización del Reporte

■  Elementos Clave: Tabla/gráfico del reporte generado. Botón "Exportar a

Excel".

■  Acción del Usuario: Clic en "Exportar a Excel" (descarga el archivo). Clic en

"Volver a Generar Reporte" o "Volver al Dashboard".

■  Transición: Regreso a la pantalla "Reportes de Equipo - Generar Reporte"

o "Dashboard de Líder".

6. Flujo de Wireframe: Acceder a Agenda y Registrar Asistencia

●  Persona: Elena, la Formadora Dedicada
●  Objetivo: Ver su agenda de cursos asignados y registrar la asistencia de los

participantes.

●  Punto de Entrada: Login exitoso o notificación de nueva asignación.

Secuencia de Pantallas y Transiciones:
1.  Pantalla: Login

■  Acción del Usuario: Ingresa credenciales. Clic en "Iniciar Sesión".
■  Transición: Redirección al Dashboard de Formador.

2.  Pantalla: Dashboard de Formador (Mi Agenda)

■  Elementos Clave: Calendario visual de cursos asignados. Sección

"Próximos Grupos Asignados". Botón "Ver Detalles del Grupo" en cada
tarjeta/elemento de grupo.

■  Acción del Usuario: Clic en un curso en el calendario o en "Ver Detalles del

Grupo" de un próximo grupo.

■  Transición: Navegación a la pantalla "Detalle de Curso Asignado

(Formador)".

3.  Pantalla: Detalle de Curso Asignado (Formador)

■  Elementos Clave: Detalles del curso (Fecha, Hora, Sede/Enlace), lista de

participantes. Botón "Abrir Grupo y Registrar Asistencia".

■  Acción del Usuario: Clic en "Abrir Grupo y Registrar Asistencia".
■  Transición: Navegación a la pantalla "Mis Grupos - Registrar Asistencia

para Grupo".

4.  Pantalla: Mis Grupos - Registrar Asistencia para Grupo

■  Elementos Clave: Tabla de participantes con casillas "Presente / Ausente".
Campo "Notas / Feedback General del Grupo". Botón "Guardar Asistencia".

■  Acción del Usuario: Marca la asistencia. Clic en "Guardar Asistencia".
■  Transición: Regreso al "Dashboard de Formador (Mi Agenda)" o a la lista

de grupos.

