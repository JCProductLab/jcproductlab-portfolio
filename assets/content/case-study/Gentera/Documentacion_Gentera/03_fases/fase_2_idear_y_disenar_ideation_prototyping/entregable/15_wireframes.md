Conjunto de Wireframes de Media Fidelidad (Explicación)

He simulado la actividad de "Creación de Wireframes (Media Fidelidad)" de la Fase 2 del
proceso de diseño. A continuación, se presenta una descripción explicativa de los
wireframes clave que se habrían generado para la plataforma de Gestión
Automatizada de la Capacitación (GAC).

Estos wireframes son representaciones esquemáticas de la interfaz de usuario,
centrándose en la estructura, la jerarquía del contenido, la disposición de los elementos
y la funcionalidad principal, sin incluir detalles visuales como colores o tipografías
finales. Sirven como el "esqueleto" de la aplicación para definir la funcionalidad y la
navegación de cada pantalla clave.

Principios Aplicados en la Creación de los Wireframes:

●  Traducción de Flujos de Usuario: Cada pantalla o estado de pantalla identificado
en los Diagramas de Flujo de Usuario se ha traducido en un wireframe individual.

●  Enfoque en Estructura y Layout: La prioridad ha sido la jerarquía visual, la

organización del contenido y la disposición de los elementos de la interfaz de
usuario (UI) para guiar la atención del usuario.

●  Representación del Contenido: Se utiliza texto descriptivo o genérico (ej.

"Nombre del Colaborador", "Fecha de Contratación") y placeholders para imágenes
o gráficos, para comunicar el tipo de información sin distraer con la estética.
Interacciones Básicas: Se indican claramente los elementos interactivos (botones,
campos de texto, enlaces) y sus estados básicos (ej. un botón deshabilitado).

●

●  Anotaciones Clave: Cada wireframe incluiría anotaciones para explicar

funcionalidades no obvias, comportamientos esperados, reglas de negocio que
impactan la interfaz o contenido dinámico.

●  Diseño por Rol: Se han creado conjuntos de wireframes específicos para cada rol

principal, reflejando sus vistas y funcionalidades únicas.

Descripción de Wireframes Clave por Rol de Usuario:

1. Wireframes para Carlos, el Coordinador Detallista (Administrador de
Capacitación)

●  Pantalla: Login

○  Propósito: Punto de entrada a la plataforma.
○  Elementos: Campos de texto para "Número de Empleado" y "Fecha de

Nacimiento" (como contraseña). Botón "Iniciar Sesión". Espacio para mensajes

de error de autenticación.

○  Navegación: Tras el éxito, redirige al "Dashboard de Administrador".

●  Pantalla: Dashboard de Administrador

○  Propósito: Vista general del estado de los procesos de gestión de listas y

alertas clave.

○  Elementos:

■  Menú Lateral: Elementos de navegación principal: "Gestión de Datos",
"Gestión de Grupos", "Asignación de Formadores", "Comunicaciones",
"Reportes y Dashboards", etc.

■  Área Central: Tarjetas de resumen: "Plantilla Pendiente de Cargar" (con

botón "Cargar Plantilla"), "Grupos Propuestos Pendientes de Revisión" (con
botón "Revisar Grupos"), "Envíos de Convocatorias Pendientes" (con botón
"Enviar Convocatorias").

■  Alertas: Sección para notificaciones críticas (ej. "Inconsistencias en Última

Carga", "Grupos con Cupo Mínimo No Alcanzado").

●  Pantalla: Gestión de Datos - Cargar Plantilla

○  Propósito: Permitir a Carlos subir la plantilla semanal y ver el estado de su

procesamiento.

○  Elementos:

■  Área de Carga: Gran recuadro para "Arrastrar y Soltar Archivo Excel" y

■

botón "Seleccionar Archivo".
Indicador de Progreso: Barra de progreso con texto "Procesando
Plantilla..." durante la carga y limpieza.

■  Sección de Resumen Post-Procesamiento: Título "Resultados del

Procesamiento". Muestra "Colaboradores Procesados: [Número]", "Elegibles
Identificados: [Número]".

■  Alertas de Inconsistencias: Sección destacada "Inconsistencias

Detectadas: [Número]". Botón "Ver Reporte Detallado".

●  Pantalla: Gestión de Grupos - Propuestas de Grupos

○  Propósito: Mostrar las propuestas de grupos generadas automáticamente por

el sistema.
○  Elementos:

■  Filtros: Campos de selección/desplegables para "Puesto", "Subdirección",

"Tipo de Curso".

■  Tarjetas de Grupo: Cada tarjeta representa un grupo propuesto.

Contiene: "Nombre del Grupo", "Participantes: [Número]/[Cupo Máximo]",
"Sede: [Nombre]", "Horario: [Días y Horas]", "Formador Sugerido: [Nombre]".

■  Alertas Visuales: Iconos o recuadros de color para grupos con "Cupo

Mínimo No Alcanzado" o "Cupo Máximo Excedido".

■  Botón: "Generar Grupos" (si la acción de generación es manual). Botón

"Ver Detalles y Ajustar" en cada tarjeta.

●  Pantalla: Detalle y Ajuste de Grupo

○  Propósito: Permitir a Carlos revisar y modificar la composición de un grupo

propuesto.
○  Elementos:

■  Encabezado: "Detalle del Grupo: [Nombre del Grupo]".
■

Información del Grupo: Resumen de Sede, Horario, Tipo de Curso.
■  Lista de Participantes: Tabla con "Nombre", "Nómina", "Puesto", "Oficina".

Posibilidad de "arrastrar y soltar" filas o botones de "Mover" para reasignar.

■  Sección de Alertas/Sugerencias: Mensajes como "Este grupo tiene [X]
participantes, el mínimo es [Y]. Sugerencia: [Fusionar Grupo] / [Buscar
más]".

■  Botones: "Añadir Participante", "Eliminar Participante", "Guardar Cambios",

"Cancelar".

■  Detalle de Regla (Anotación): Un icono junto al nombre de un participante

que, al pasar el cursor, explique por qué fue asignado o tiene una
característica (ej. "Gerente Multiproducto: Asesor CIE detectado en su
oficina").

●  Pantalla: Comunicaciones - Enviar Convocatorias

○  Propósito: Centralizar y automatizar el envío de todas las invitaciones y

notificaciones.

○  Elementos:

■  Sección "Envío a Gerentes": Casilla "Enviar por Outlook". Área de

previsualización del correo.

■  Sección "Envío a Colaboradores": Casillas "Enviar por Teams", "Enviar por

WhatsApp". Área de previsualización del mensaje.
■  Botón Principal: "Enviar Todas las Convocatorias".
■  Mensaje de Confirmación: Tras el envío, un pop-up o banner con

"Convocatorias enviadas exitosamente. [Número] correos, [Número]
mensajes de Teams, [Número] mensajes de WhatsApp".

2. Wireframes para Ana, la Colaboradora Entusiasta (Colaborador en
Capacitación)

●  Pantalla: Dashboard de Colaborador (Mi Ruta de Capacitación)

○  Propósito: Ofrecer una visión clara y atractiva de su progreso y ruta de

capacitación.

○  Elementos:

■  Menú Lateral: "Mi Ruta de Capacitación", "Mis Cursos", "Notificaciones", "Mi

Perfil", "Ayuda", "Cerrar Sesión".

■  Área Central:

■  Mapa Visual de Ruta: Una línea de tiempo horizontal o un "camino" con

nodos representando los niveles (Básico, Intermedio, Avanzado,
Experto). Nodos con diferentes colores/iconos para "Completado", "En
Progreso", "Pendiente".
Indicador de Progreso: Gran número o barra de progreso con "% de
Avance General".

■

■  Sección "Próximos Cursos": Tarjetas o lista con "Nombre del Curso",

"Fecha", "Sede/Enlace". Botón "Ver Detalles".

■  Sección "Cursos Completados Recientes": Lista de los últimos cursos

finalizados.

●  Pantalla: Detalle de Curso/Hito (Colaborador)

○  Propósito: Proporcionar toda la información relevante de un curso específico.
○  Elementos:

■  Título: "Detalle del Curso: [Nombre del Curso]".
■

Información Básica: "Fecha", "Hora", "Sede/Enlace", "Formador", "Tipo de
Curso".

■  Descripción/Temario: Área de texto con el temario o descripción del

curso.

■  Estatus: "Completado", "En Progreso", "Pendiente".
■  Botones: "Añadir a Calendario" (descarga .ical), "Acceder al Curso" (si es

virtual con enlace).

3. Wireframes para David, el Líder Comprometido (Gerente de Oficina)

●  Pantalla: Dashboard de Líder (Mi Equipo)

○  Propósito: Proporcionar una visión consolidada y rápida del avance de

capacitación de su equipo.

○  Elementos:

■  Menú Lateral: "Mi Equipo", "Reportes de Equipo", "Notificaciones", etc.
■  Área Central:

■  Título: "Avance de Capacitación de Mi Equipo".
■  Filtros: Desplegables para "Oficina", "Estatus de Avance", "% de

Avance".

■  Tabla/Tarjetas de Equipo: Lista de cada colaborador. Columnas:
"Nombre", "Puesto", "% Avance", "Estatus General" (con iconos de
semáforo: verde/amarillo/rojo).

■  Botón: "Ver Detalle" (para cada colaborador, que lleva a la vista de

detalle del colaborador).

■  Sección de Alertas: "Colaboradores en Riesgo: [Número]".

●  Pantalla: Reportes de Equipo - Generar Reporte

○  Propósito: Permitir a David crear y exportar informes sobre el progreso de su

equipo.
○  Elementos:

■  Título: "Generar Reporte de Capacitación".
■  Selector de Tipo de Reporte: Desplegable con opciones (ej. "Avance por
Oficina", "Colaboradores Retrasados", "Historial de Cursos del Equipo").

■  Filtros: Campos de selección para "Unidad", "OS", "Subdirección",

"Dirección", "Rango de Fechas".

■  Botones: "Generar Reporte", "Limpiar Filtros".
■  Área de Previsualización: Una tabla o gráfico simplificado mostrando los

datos del reporte antes de la descarga.

■  Botón: "Exportar a Excel".

4. Wireframes para Elena, la Formadora Dedicada (Formadora)

●  Pantalla: Dashboard de Formador (Mi Agenda)

○  Propósito: Ofrecer una visión centralizada de sus cursos asignados.
○  Elementos:

■  Menú Lateral: "Mi Agenda", "Mis Grupos", "Reportes de Avance", "Mi Perfil",

etc.

■  Área Central:

■  Calendario Visual: Un calendario mensual o semanal destacando los

días con cursos asignados.

■  Sección "Próximos Grupos Asignados": Lista de tarjetas con "Nombre

del Curso", "Fecha", "Hora", "Sede/Enlace". Botón "Ver Detalles del
Grupo".

●  Pantalla: Mis Grupos - Registrar Asistencia para Grupo

○  Propósito: Simplificar el registro de asistencia de los participantes de un curso.
○  Elementos:

■  Título: "Registrar Asistencia para Grupo: [Nombre del Grupo]".

■

Información del Curso: Fecha, Hora, Sede/Enlace.

■  Tabla de Participantes: Columnas: "Nombre del Participante", "Nómina",

"Puesto".

■  Casillas de Asistencia: Para cada participante, casillas de radio o

checkboxes para "Presente" / "Ausente".

■  Campo de Texto: "Notas / Feedback General del Grupo" (opcional).
■  Botones: "Guardar Asistencia", "Cancelar".

Estos wireframes de media fidelidad, aunque descritos textualmente, representarían
visualmente la estructura y la interacción de la plataforma GAC, sirviendo como un
"guion" detallado para la siguiente etapa de prototipado interactivo y diseño de interfaz
de usuario.

