Documento Detallado de Reglas de Negocio - Proyecto GAC

Fecha: 21 de Mayo de 2025 (Simulada)
Versión: 1.0
Objetivo: Documentar exhaustivamente las reglas de negocio que rigen la identificación de
colaboradores a capacitar, la segmentación de grupos, la asignación de recursos y la
trazabilidad del progreso en la capacitación para la plataforma GAC.
1. Introducción

Este documento sirve como un repositorio centralizado de las reglas de negocio que
impulsarán la lógica de la plataforma de Gestión Automatizada de la Capacitación
(GAC) de Gentera. Su propósito es asegurar una comprensión unificada y sin
ambigüedades entre el equipo de Gentera y Dacodes, facilitando el diseño y desarrollo
precisos de la solución.

Las reglas aquí detalladas se basan en la información recopilada de los briefs del
proyecto, las entrevistas con stakeholders (Carlos, Lalo, Marta, Alberto, Líderes
Operativos, Formadores), la observación contextual del proceso actual y los User
Journey Maps "As-Is".

2. Glosario de Términos de Negocio

Para asegurar una comprensión común de la terminología utilizada en Gentera y en el
contexto de este proyecto:

●  ADN: Sistema de información de recursos humanos de Gentera, fuente principal

de la Plantilla de Capacitación.

●  Plantilla de Capacitación: Archivo Excel semanal extraído de ADN, que contiene

la información de todos los colaboradores de México. Es la fuente de datos
principal para GAC.

●  Concentrado Histórico: Archivo Excel maestro con el historial de capacitación de

todos los colaboradores de Gentera desde 2023 en adelante. Utilizado para
validaciones y cruces.
IPP: Incapacidad Permanente Parcial. Colaboradores con este estatus son
excluidos de la capacitación.

●

●  SEAS México: Área específica de Gentera cuyos colaboradores son excluidos de

la capacitación por este proceso.

●  Gerente Multiproducto: Gerente de oficina que supervisa tanto crédito grupal
como crédito individual. Se identifica por la presencia de "Asesores CIE" en su
oficina.

●  Asesor CIE: Asesor de Crédito Individual. Su presencia en una oficina es clave

para la regla de "Gerente Multiproducto".

●  Toque con Formador: Sesión de capacitación específica (presencial o virtual en

vivo) que implica interacción directa con un formador y donde se registran
calificaciones. Ocurre en los niveles 1 (Básico), 4 (Intermedio), 8 (Avanzado) y 12
(Experto) de la ruta actual de 12 niveles.

●  Ruta de Capacitación: Secuencia de niveles y cursos que un colaborador debe

completar según su puesto y antigüedad. Actualmente 12 niveles, con una posible
transición a 6 niveles.

●  Nuevo Ingreso: Colaborador recién contratado por Gentera.
●  Reingreso: Colaborador que vuelve a Gentera después de un período de

ausencia.

●  Promoción/Democión/Cambio Lateral: Movimientos de puesto que pueden

afectar la ruta de capacitación del colaborador.

3. Reglas de Negocio Detalladas

Las reglas se agrupan por la funcionalidad principal a la que pertenecen.

3.1. Reglas de Identificación de Colaboradores Elegibles
(Desarrollo 1 - F1)

RN-ID-001: Exclusión por Estatus "Baja"

●  Nombre/Descripción: Excluye a los colaboradores que tienen un estatus de "Baja"

en la empresa.

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Estatus de Colaborador = "Baja") ENTONCES EXCLUIR de la

lista de elegibles.

●  Datos de Entrada: Estatus (de Plantilla de Capacitación)
●  Resultado/Acción: Colaborador no es elegible para capacitación.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se aplica al inicio del proceso de limpieza de la plantilla.

RN-ID-002: Exclusión por Área "SEAS México"

●  Nombre/Descripción: Excluye a los colaboradores que pertenecen al área "SEAS

México".

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Negocio = "SEAS" Y Ubicación = "México") ENTONCES

EXCLUIR de la lista de elegibles.

●  Datos de Entrada: Negocio, Ubicación (de Plantilla de Capacitación)
●  Resultado/Acción: Colaborador no es elegible para capacitación.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se aplica al inicio del proceso de limpieza de la plantilla.

RN-ID-003: Exclusión por Incapacidad "IPP"

●  Nombre/Descripción: Excluye a los colaboradores con estatus de Incapacidad

Permanente Parcial (IPP).

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Campo INC/IPP en Plantilla de Capacitación = "IPP")

ENTONCES EXCLUIR de la lista de elegibles.

●  Datos de Entrada: INC/IPP (de Plantilla de Capacitación)
●  Resultado/Acción: Colaborador no es elegible para capacitación.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se aplica al inicio del proceso de limpieza. Otras

incapacidades parciales no excluyen, pero pueden generar faltas justificadas.

RN-ID-004: Identificación de Nuevo Ingreso

●  Nombre/Descripción: Identifica a los colaboradores que son de nuevo ingreso en

la empresa.

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Fecha de Contratación = Fecha de corte de la semana

actual) ENTONCES Colaborador es un "Nuevo Ingreso".

●  Datos de Entrada: Fecha de Contratación (de Plantilla de Capacitación), Fecha de

corte semanal

●  Resultado/Acción: Colaborador es elegible para iniciar su ruta de capacitación

desde el nivel básico.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se asume que la "fecha de corte" es la fecha de generación de

la lista (ej. jueves).

RN-ID-005: Manejo de Reingresos (Regla de 6 meses)

●  Nombre/Descripción: Define si un colaborador que reingresa debe reiniciar o

continuar su ruta de capacitación, basándose en el tiempo que estuvo fuera de la
empresa.

●  Fuente: Carlos, Brief
●  Lógica Detallada:

○  SI (Colaborador es "Reingreso" Y Días_Fuera_Empresa >= 180) ENTONCES

Colaborador debe reiniciar su ruta de capacitación desde el nivel básico.
○  SI (Colaborador es "Reingreso" Y Días_Fuera_Empresa < 180) ENTONCES

Colaborador debe continuar su ruta de capacitación desde donde la dejó.

●  Datos de Entrada: Evento (Reingreso), Fecha del Evento (Fecha de Salida Previa),

Fecha de Contratación (Fecha de Reingreso) (de Plantilla de Capacitación y
Concentrado Histórico)

●  Resultado/Acción: Colaborador elegible para capacitación, con ruta de inicio

definida (reinicio o continuación).
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: La identificación de "Reingreso" y Fecha de Salida Previa se
obtiene del cruce con el Concentrado Histórico. Días_Fuera_Empresa se calcula
como (Fecha de Reingreso - Fecha de Salida Previa).

RN-ID-006: Consideración de Faltas a Cursos Anteriores

●  Nombre/Descripción: Incluye a colaboradores que faltaron a cursos previos y

justificaron su ausencia.

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Colaborador tiene una "Falta Justificada" en un curso previo

en las últimas 3 semanas) ENTONCES Colaborador debe ser convocado
prioritariamente a ese mismo curso faltante.

●  Datos de Entrada: Estatus de Curso (Falta), Fecha de Curso (de Concentrado

Histórico o lista de control de Carlos)

●  Resultado/Acción: Colaborador es elegible para ser reprogramado en un curso

específico.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se requiere un campo o lógica para identificar si la falta fue

"justificada".

RN-ID-007: Manejo de Cambios de Puesto (Promoción/Democión/Lateral)

●  Nombre/Descripción: Define cómo los cambios de puesto (promoción,

democión, cambio lateral) afectan la elegibilidad y el punto de inicio en la ruta de
capacitación.

●  Fuente: Carlos, Brief
●  Lógica Detallada:

○  SI (Colaborador tiene "Promoción" en Evento) ENTONCES Colaborador debe
completar cursos faltantes de nivel anterior Y luego iniciar cursos de nueva
promoción.

○  SI (Colaborador tiene "Democión" en Evento) ENTONCES Colaborador NO

toma curso básico, sino avanza a nivel avanzado (si tiene nociones del puesto).
○  SI (Colaborador tiene "Cambio Lateral" en Evento) ENTONCES Colaborador NO

es necesario convocarlo nuevamente (si ya tomó el curso).

●  Datos de Entrada: Evento, Fecha del Evento, Puesto (anterior y actual) (de Plantilla

de Capacitación y Concentrado Histórico)

●  Resultado/Acción: Colaborador elegible para capacitación, con ruta de

inicio/continuación definida según el tipo de cambio de puesto.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Requiere mapeo detallado de puestos a rutas de capacitación

y definición de "nociones del puesto".

3.2. Reglas de Segmentación de Grupos (Desarrollo 1 - F2)

RN-SEG-001: Agrupación Principal por Puesto y Subdirección

●  Nombre/Descripción: Agrupa a los colaboradores en grupos iniciales

basándose en la compatibilidad de su puesto y su pertenencia a la misma
subdirección.

●  Fuente: Carlos, Brief
●  Lógica Detallada: AGREGAR Colaboradores a grupos basados en una

combinación de Puesto Y Subdirección.

●  Datos de Entrada: Puesto, Subdirección (de Plantilla de Capacitación)
●  Resultado/Acción: Grupos iniciales formados por puestos compatibles dentro

de la misma subdirección.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: La compatibilidad de puestos en un mismo curso se basa en

el conocimiento de Carlos y debe ser documentada en GAC.

RN-SEG-002: Definición de Cupos para Grupos Presenciales

●  Nombre/Descripción: Establece los límites mínimos y máximos de participantes

para los cursos de capacitación presenciales.

●  Fuente: Brief, Carlos
●  Lógica Detallada: SI (Tipo de Curso = "Presencial") ENTONCES (Número de

Participantes >= 5 Y Número de Participantes <= 25).

●  Datos de Entrada: Tipo de Curso, Número de Participantes

●  Resultado/Acción: Grupo presencial válido.
●  Excepciones/Casos Especiales:

○  SI (Número de Participantes < 5) ENTONCES GAC alerta a Carlos para

decidir (cancelar, fusionar, posponer, buscar más).

○  SI (Número de Participantes > 25) ENTONCES GAC sugiere dividir el

grupo.

●  Notas Adicionales: Los mínimos y máximos son fijos para esta fase.

RN-SEG-003: Definición de Cupos para Grupos Online

●  Nombre/Descripción: Establece los límites mínimos y máximos de participantes

para los cursos de capacitación online.

●  Fuente: Brief, Carlos
●  Lógica Detallada: SI (Tipo de Curso = "Online") ENTONCES (Número de

Participantes >= 10 Y Número de Participantes <= 15).

●  Datos de Entrada: Tipo de Curso, Número de Participantes
●  Resultado/Acción: Grupo online válido.
●  Excepciones/Casos Especiales:

○  SI (Número de Participantes < 10) ENTONCES GAC alerta a Carlos para

decidir (cancelar, fusionar, posponer, buscar más).

○  SI (Número de Participantes > 15) ENTONCES GAC sugiere dividir el

grupo.

●  Notas Adicionales: Los mínimos y máximos son fijos para esta fase.

RN-SEG-004: Lógica "Gerente Multiproducto" para Segmentación

●  Nombre/Descripción: Asigna a los gerentes a la ruta de capacitación

"Multiproducto" si en su oficina hay presencia de "Asesores CIE".

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Puesto = "Gerente" Y Oficina_Colaborador_Gerente
CONTIENE "Asesor CIE") ENTONCES Asignar al Gerente a la "Ruta de
Capacitación Multiproducto".
 SINO Asignar al Gerente a la "Ruta de Capacitación Grupal".

●  Datos de Entrada: Puesto, Ubicación (Oficina del Gerente), Puesto (de
otros colaboradores en la misma oficina) (de Plantilla de Capacitación)

●  Resultado/Acción: Gerente asignado a la ruta de capacitación correcta (grupal

o multiproducto).

●  Excepciones/Casos Especiales: N/A

●  Notas Adicionales: La identificación de "Asesor CIE" en la oficina del gerente es
clave y debe ser automatizada por GAC. Se requiere una tabla de mapeo de
oficinas a puestos.

RN-SEG-005: Asignación de Sede (Opción 1 y Opción 2)

●  Nombre/Descripción: Asigna una sede a los grupos presenciales, priorizando la
Opción 1 del colaborador y recurriendo a la Opción 2 si la primera no es viable.

●  Fuente: Carlos, Brief
●  Lógica Detallada: SI (Grupo es "Presencial") ENTONCES Asignar Sede Opción

1 del colaborador.

 SI (Sede Opción 1 no disponible o no se cumple cupo) ENTONCES Intentar

asignar Sede Opción 2.

●  Datos de Entrada: Tipo de Curso, Sede Opción 1, Sede Opción 2 (de

Plantilla de Capacitación), Disponibilidad de Sedes (de tabla externa)
●  Resultado/Acción: Grupo asignado a una sede preferente o alternativa.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se requiere una tabla de Sedes y Hoteles que Carlos

proporcionará, con su capacidad y disponibilidad.

3.3. Reglas de Asignación de Recursos (Formadores) (Desarrollo 1
- F3)

RN-ASG-001: Visibilidad de Grupos Pendientes de Asignación

●  Nombre/Descripción: Muestra a los Líderes Operativos todos los grupos de

capacitación que aún no tienen un formador asignado, facilitando su
identificación para la asignación.
●  Fuente: Líderes Operativos, Brief
●  Lógica Detallada: MOSTRAR a Líder Operativo todos los grupos de

capacitación que no tienen un formador asignado.

●  Datos de Entrada: Grupos de Capacitación, Formador Asignado
●  Resultado/Acción: El Líder Operativo tiene una vista clara y centralizada de los

grupos que requieren asignación de formador.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: La plataforma GAC debe permitir filtrar estos grupos por

región, tipo de curso, etc., para una gestión más eficiente.

RN-ASG-002: Asignación de Formador por Líder Operativo

●  Nombre/Descripción: Permite a los Líderes Operativos seleccionar y asignar un
formador específico a un grupo de capacitación, con base en la información
disponible sobre los formadores.
●  Fuente: Líderes Operativos, Brief
●  Lógica Detallada: PERMITIR a Líder Operativo seleccionar y asignar un

Formador a un Grupo de Capacitación específico.

●  Datos de Entrada: Grupos de Capacitación, Lista de Formadores,

Disponibilidad de Formadores, Especialización de Formadores,

Ubicación de Formadores

●  Resultado/Acción: Un formador es asignado a un grupo de capacitación.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: GAC debe mostrar información relevante del formador

(disponibilidad, especialización, ubicación, carga de trabajo actual) para facilitar
la decisión del Líder Operativo y optimizar la asignación.

RN-ASG-003: Visibilidad de Agenda para Formadores

●  Nombre/Descripción: Proporciona a cada formador una agenda clara y sencilla

que muestra los grupos de capacitación que les han sido asignados.

●  Fuente: Formadores, Brief
●  Lógica Detallada: MOSTRAR a Formador una Agenda Sencilla con los

grupos de capacitación asignados a su perfil, incluyendo detalles (fecha, hora,
sede/enlace, lista de participantes).

●  Datos de Entrada: Formador Asignado, Grupos de Capacitación,

Detalles del Curso

●  Resultado/Acción: El formador tiene una vista clara y organizada de sus

próximas capacitaciones.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: La agenda debe ser accesible directamente desde la
plataforma GAC y, preferiblemente, ofrecer opciones para exportar o
sincronizar con calendarios externos.

3.4. Reglas de Trazabilidad de la Capacitación (Desarrollo 2)

RN-TRAZ-001: Estructura de la Ruta de Capacitación (12 Niveles)

●  Nombre/Descripción: Define la estructura actual de la ruta de capacitación de

Gentera, compuesta por 12 niveles con prerrequisitos claros entre ellos.

●  Fuente: Brief, Carlos
●  Lógica Detallada: DEFINIR la Ruta de Capacitación como una secuencia
de 12 niveles (Básico, Intermedio, Avanzado, Experto, etc.), con prerrequisitos
claros entre niveles.

●  Datos de Entrada: Nivel de Capacitación, Cursos por Nivel,

Prerrequisitos

●  Resultado/Acción: Ruta de capacitación estructurada y visible en la plataforma.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: La plataforma GAC debe ser flexible para una posible

transición a 6 niveles en el futuro (originalmente planeada para Enero 2024).

RN-TRAZ-002: Identificación de "Toques con Formador"

●  Nombre/Descripción: Identifica los niveles específicos de la ruta de

capacitación que incluyen una interacción directa con un formador y donde se
registra la asistencia y calificación.

●  Fuente: Carlos, Brief
●  Lógica Detallada: IDENTIFICAR niveles 1, 4, 8 y 12 como "Toques con Formador",

donde se registra asistencia y calificación.

●  Datos de Entrada: Nivel de Capacitación, Tipo de Curso
●  Resultado/Acción: Registro de progreso y calificación en hitos clave de la ruta

de capacitación.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se necesita definir cómo se registrará formalmente este
"toque" en GAC (ej. un módulo de asistencia/calificación para formadores).

RN-TRAZ-003: Cálculo del Estatus de Avance por Colaborador

●  Nombre/Descripción: Calcula el porcentaje de avance de cada colaborador en
su ruta de capacitación y define su estatus general (Acreditado o En Progreso).

●  Fuente: Brief, Carlos
●  Lógica Detallada: CALCULAR el % de Avance del colaborador en su Ruta de
Capacitación basado en los cursos completados y los niveles acreditados.

 DEFINIR Estatus como "Acreditado" (si cumple todos los requisitos de un
nivel/ruta) o "En Progreso" (si está en curso o le faltan niveles).

●  Datos de Entrada: Cursos Completados, Niveles Acreditados, Ruta

de Capacitación

●  Resultado/Acción: El colaborador tiene un estatus claro y medible de su

progreso en la plataforma.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: El cálculo debe considerar la ventana de 6 meses (para la

ruta final) o 12 meses (ruta actual).

RN-TRAZ-004: Mapeo de Puestos a Rutas de Capacitación

●  Nombre/Descripción: Asigna una ruta de capacitación específica a cada

puesto de colaborador, con algunas excepciones predefinidas.

●  Fuente: Carlos, Brief
●  Lógica Detallada: ASIGNAR una Ruta de Capacitación específica a cada

Puesto de colaborador.
●  Datos de Entrada: Puesto
●  Resultado/Acción: Cada colaborador tiene una ruta de capacitación

personalizada y asignada automáticamente.

●  Excepciones/Casos Especiales:

○  Excepción: Gerente de Ventas NO toma nivel básico.
○  Excepción: Gerente Yastás solo toma nivel 4.

●  Notas Adicionales: Se requiere una tabla de mapeo de puestos a rutas y

excepciones para la configuración de GAC.

RN-TRAZ-005: Consumo de Datos de Estatus de Etapas

●  Nombre/Descripción: Permite al Administrador de Capacitación cargar tablas

externas de Excel para complementar la información del estatus de las
diferentes etapas de la ruta de capacitación.

●  Fuente: Brief, Carlos
●  Lógica Detallada: PERMITIR al Administrador cargar Tablas Excel existentes

con el estatus de cada etapa de la ruta (ej. finalización de cursos virtuales
auto-dirigidos).

●  Datos de Entrada: Tablas Excel (Concentrado, Líderes Formadores,

Sedes/Hoteles, Yastás)

●  Resultado/Acción: GAC tiene información completa y actualizada del estatus
de capacitación de los colaboradores, incluyendo datos de fuentes externas.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se debe definir la estructura y frecuencia de actualización

de estas tablas para asegurar la consistencia de los datos.

3.5. Reglas de Notificaciones y Comunicaciones (Desarrollo 1 -
F4, Funcionalidades Adicionales)

RN-COM-001: Envío de Convocatoria a Gerentes

●  Nombre/Descripción: Define el proceso para enviar correos electrónicos a los
gerentes, informándoles sobre los colaboradores de su equipo que han sido
convocados a capacitación.

●  Fuente: Brief, Carlos
●  Lógica Detallada: ENVIAR correo electrónico a Gerente de cada colaborador

convocado, incluyendo la lista de su equipo.

●  Datos de Entrada: Correo Institucional del Gerente, Lista de

Equipo Convocado (generada por GAC)

●  Resultado/Acción: El gerente es informado de manera formal y consolidada

sobre la capacitación de los miembros de su equipo.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Se debe utilizar un formato de correo predefinido por

Gentera.

RN-COM-002: Envío de Invitación a Colaboradores (Teams/WhatsApp)

●  Nombre/Descripción: Establece el método para enviar invitaciones detalladas a
los colaboradores convocados, incluyendo la opción de agregar el evento a su
calendario.

●  Fuente: Brief, Carlos
●  Lógica Detallada: ENVIAR invitación a Colaborador vía Teams O WhatsApp (si

disponible), incluyendo archivo .ical con detalles del curso.

●  Datos de Entrada: Usuario de Teams, Número de WhatsApp (si aplica),

Correo Institucional, Detalles del Curso (fecha, hora, sede/enlace,
formador, etc.)

●  Resultado/Acción: El colaborador recibe una invitación clara y completa, y

puede agendar el curso fácilmente en su calendario personal.

●  Excepciones/Casos Especiales: N/A

●  Notas Adicionales: La funcionalidad de envío por WhatsApp es una

implementación nueva. Se requiere definir qué información esencial debe
contener el archivo .ical.

RN-COM-003: Notificaciones de Retraso/Hito Importante

●  Nombre/Descripción: Define el envío de alertas proactivas a colaboradores y
sus líderes en caso de retrasos en la ruta de capacitación o la proximidad de
hitos importantes.

●  Fuente: Brief
●  Lógica Detallada: ENVIAR notificación a Colaborador Y su Líder SI

(Colaborador presenta retraso en Ruta de Capacitación OR se acerca

Hito Importante en la ruta).

●  Datos de Entrada: Estatus de Avance del colaborador, Fechas de Hitos

de la ruta, Líder del Colaborador

●  Resultado/Acción: Colaborador y su líder son alertados sobre situaciones

críticas en la capacitación, permitiendo una intervención oportuna.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Preferentemente vía WhatsApp. Se debe definir claramente

qué constituye un "retraso" y un "hito importante" para activar estas
notificaciones.

3.6. Reglas de Gestión de Usuarios y Sistema (Funcionalidades
Adicionales)

RN-ADM-001: Autenticación de Usuario

●  Nombre/Descripción: Define el método de autenticación para que los usuarios

puedan acceder a la plataforma GAC.

●  Fuente: Brief
●  Lógica Detallada: SI (Usuario = Número de Empleado Y Contraseña = Fecha
de Nacimiento) ENTONCES PERMITIR acceso a la plataforma según su Rol.

●  Datos de Entrada: Número de Empleado, Fecha de Nacimiento (del

usuario)

●  Resultado/Acción: Usuario autenticado y redirigido a su vista correspondiente

dentro de la plataforma GAC.

●  Excepciones/Casos Especiales: N/A

●  Notas Adicionales: El rol del usuario debe ser identificado correctamente para

mostrar la información y funcionalidades pertinentes.

RN-ADM-002: Actualización Semanal de Base de Datos Principal

●  Nombre/Descripción: Establece el proceso para que el Super Administrador
cargue la plantilla de capacitación semanalmente, manteniendo actualizada la
base de datos principal de GAC.

●  Fuente: Brief
●  Lógica Detallada: PERMITIR a Super Admin cargar la Plantilla de

Capacitación semanalmente para actualizar la base de datos principal de
GAC.

●  Datos de Entrada: Plantilla de Capacitación (archivo Excel)
●  Resultado/Acción: La base de datos de GAC se actualiza con la información

más reciente de los colaboradores.
●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Este proceso debe ser robusto para manejar las

inconsistencias inherentes a la plantilla de ADN y asegurar la integridad de los
datos.

RN-ADM-003: Gestión de Permisos de Super Admin

●  Nombre/Descripción: Otorga al rol de Super Administrador acceso completo a

todas las funcionalidades y permisos del sistema.

●  Fuente: Brief
●  Lógica Detallada: OTORGAR a Super Admin todos los permisos y

funcionalidades, incluyendo alta de otros usuarios, gestión de roles y carga de
archivos maestros.

●  Datos de Entrada: Rol de Usuario (Super Admin)
●  Resultado/Acción: El Super Administrador tiene control total sobre la

configuración, gestión y mantenimiento del sistema GAC.

●  Excepciones/Casos Especiales: N/A
●  Notas Adicionales: Incluye acceso a la Interfaz Consola de Administración

(back-end) para tareas técnicas y de configuración.

