Diagrama de Flujo Detallado del Proceso Actual –
Gestión de Capacitación (As-Is)

Actor Principal: Carlos (Administrador de Capacitación) Disparador: Jueves por la
mañana - Inicio del ciclo semanal de gestión de capacitación. Herramientas Principales:
Microsoft Excel (múltiples archivos), Outlook, Microsoft Teams.

(Inicio del Proceso Semanal)

1.  Fase 1: Recepción y Preparación Inicial de Datos
○  1.1. Descarga/Recepción de Plantilla ADN:

■  Carlos descarga la "Plantilla de Capacitación" (Excel) del sistema

ADN o la recibe.

■  Herramienta: Sistema ADN (para descarga), Correo (si se recibe).

○  1.2. Apertura y Revisión Visual Inicial:
■  Carlos abre la plantilla en Excel.
■  Realiza una inspección visual rápida para detectar anomalías obvias.
■  Herramienta: Excel.

○  1.3. Limpieza Básica y Filtros Iniciales:

■  Aplica filtros en Excel para identificar y separar/eliminar:

■  Colaboradores con estatus "Baja".
■  Colaboradores de áreas excluidas (ej. "SEAS México").
■  Colaboradores con incapacidades prolongadas ("IPP").

■  Herramienta: Excel (funciones de filtro).

○  1.4. Cruce con Concentrado Histórico:

■  Abre el archivo "Concentrado Histórico" (Excel maestro con historial

de todos los colaboradores).

■  Utiliza funciones como BUSCARV o INDICE/COINCIDIR en Excel

para cruzar la plantilla actual con el histórico, usando la nómina como
llave.

■  Objetivo del cruce:

■  Validar/corregir nombres, puestos, centros de costo.
■

Identificar el estatus real: Nuevo Ingreso, Reingreso (y fecha
de última salida), Promoción, Cambio Lateral.

■  Verificar la fecha del último movimiento relevante para

determinar elegibilidad.

■  Detectar posibles duplicados o inconsistencias entre la

plantilla actual y el histórico.

■  Herramienta: Excel (Plantilla Actual, Concentrado Histórico).
■  Punto de Decisión: Si hay inconsistencias mayores, Carlos puede

necesitar consultar otras fuentes o personas (ej. Alberto, equipo de
nóminas).

2.  Fase 2: Identificación de Colaboradores Elegibles y Aplicación de Reglas

○  2.1. Filtro por Fechas de Ingreso/Promoción:

■  Sobre la plantilla depurada, Carlos aplica filtros por fecha de ingreso o

fecha de promoción para identificar la población potencialmente
elegible para cursos de nuevos ingresos o por promoción.

■  Herramienta: Excel.

○  2.2. Consideración de Reingresos (Regla de 6 meses):

■  Para los reingresos identificados:

■  Si la fecha de salida anterior es < 6 meses: Carlos consulta el

histórico para ver qué cursos de la ruta actual ya había
completado. Estos colaboradores podrían continuar su ruta.
■  Si la fecha de salida anterior es >= 6 meses: El colaborador se
considera como "nuevo" para la ruta de capacitación y debe
iniciarla desde el principio.

■  Herramienta: Excel (Plantilla Actual, Concentrado Histórico).

○  2.3. Consideración de Faltas Anteriores:

■  Carlos consulta una lista de control personal (otro Excel o notas) o
correos de semanas anteriores para identificar colaboradores que
faltaron a cursos previos (hasta 3 semanas antes) y que deben ser
reprogramados.

■  Estos colaboradores se añaden a la lista de elegibles, usualmente

con prioridad para el curso faltante.

■  Herramienta: Excel, Outlook, Notas personales.

○  2.4. Aplicación Regla "Gerente Multiproducto":

■  Para los gerentes identificados como elegibles para ciertos cursos:
■  Carlos abre un archivo Excel adicional ("Estructura de
Oficinas" o similar) que lista el personal por oficina.
■  Busca manualmente en dicho archivo si en la oficina del

gerente en cuestión existe algún colaborador con el puesto
"Asesor CIE".

■  Si se cumple la condición, marca al gerente como

"multiproducto" en su hoja de trabajo principal para asignarle
los cursos correspondientes.

■  Herramienta: Excel (Plantilla Actual, Estructura de Oficinas).

○  2.5. Consolidación de Lista de Elegibles:

■  Carlos consolida una lista maestra de todos los colaboradores

elegibles para capacitación en la semana actual, con su información
relevante (puesto, sede, tipo de curso necesario, etc.).

■  Herramienta: Excel.

3.  Fase 3: Segmentación de Grupos

○  3.1. Creación de Hojas de Trabajo por Curso/Región:

■  En un nuevo archivo Excel o en nuevas pestañas del actual, Carlos

comienza a organizar a los elegibles.

■  Suele crear agrupaciones iniciales por tipo de curso (Básico,

Intermedio, etc.) y luego por subdirección o región geográfica.

■  Herramienta: Excel.

○  3.2. Agrupación Manual de Colaboradores:

■  Carlos copia y pega o mueve manualmente a los colaboradores de la
lista maestra a estas hojas de trabajo, intentando formar grupos.

■  Criterios de agrupación simultáneos:

■  Puesto: Asegurar que los participantes tengan puestos

compatibles para el curso.

■  Subdirección/Región: Agrupar por cercanía geográfica.
■  Tipo de Curso: Asegurar que todos en el grupo necesiten el

mismo curso/nivel.

■  Tamaño de Grupo:

■  Presencial: Mínimo 5, máximo 25 participantes.
■  Online: Mínimo 10, máximo 15 participantes.
■  Sede: Considera la "Sede Opción 1" y "Sede Opción 2" de la

plantilla del colaborador. Intenta llenar grupos en Sede Opción
1 primero.

■  Herramienta: Excel.
■  Punto de Decisión: Si no se cumplen los mínimos, Carlos debe decidir
si cancela el grupo, lo pospone, intenta fusionarlo con otro, o busca
más participantes. Si se exceden los máximos, debe dividir el grupo.

○  3.3. Asignación Tentativa de Horarios y Días:

■  Una vez que un grupo parece viable, Carlos asigna días y horarios
tentativos, considerando la disponibilidad general de sedes o
formadores (basado en su conocimiento o comunicación previa).

■  Herramienta: Excel.
4.  Fase 4: Asignación de Recursos (Formadores)

○  4.1. Comunicación con Líderes Operativos:

■  Carlos envía las listas de grupos pre-armados (con sedes y horarios
tentativos) a los Líderes Operativos correspondientes vía correo
electrónico.

■  Herramienta: Excel, Outlook.

○  4.2. Asignación de Formadores por Líder Operativo:

■  El Líder Operativo recibe las listas.
■  Consulta sus propios controles (a menudo otro Excel o conocimiento

personal) sobre la disponibilidad, especialización y ubicación de los
formadores a su cargo.

■  Se comunica (correo, teléfono) con los formadores para confirmar

disponibilidad.

■  Asigna un formador a cada grupo e informa a Carlos.
■  Herramienta: Excel, Outlook, Teléfono. (Este paso no lo ejecuta

Carlos directamente pero depende de él para continuar).

○  4.3. Recepción de Asignaciones y Actualización:

■  Carlos recibe la información de los formadores asignados y actualiza

sus listas de grupos.

■  Herramienta: Excel, Outlook.
5.  Fase 5: Generación de Listas Finales y Comunicaciones

○  5.1. Creación de Listas de Participantes por Grupo/Formador:

■  Carlos genera archivos de Excel finales y limpios para cada grupo,
detallando los participantes, curso, sede, fecha, hora y formador
asignado.

■  Herramienta: Excel.

○  5.2. Envío de Convocatorias a Gerentes:

■  Redacta correos (individuales o usando CCO) para los Gerentes de

los colaboradores convocados.

■  Utiliza una plantilla de texto base. Adjunta la lista de los miembros de

su equipo que están convocados.
■  Herramienta: Outlook, Excel (listas).

○  5.3. Envío de Invitaciones/Notificaciones a Colaboradores:

■  Opción A (Teams): Busca individualmente a cada colaborador en

Teams y le envía un mensaje con los detalles de la convocatoria.

■  Opción B (Correo con .ical):

■  Para cada colaborador, crea un evento en su propio Outlook

con los detalles del curso.

■  Guarda el evento como archivo .ical.
■  Redacta un correo para el colaborador y adjunta el archivo

■

.ical correspondiente.
(Este proceso es descrito como muy laborioso y no siempre se
completa para todos).

■  Opción C (Texto simple): Envía un correo o mensaje de Teams solo

con el texto de la convocatoria.

■  Herramienta: Outlook, Teams, Herramienta online/Outlook para

.ical.

○  5.4. Envío de Listas a Formadores:

■  Envía por correo electrónico a cada formador la lista final de

participantes para los cursos que impartirá.

■  Herramienta: Outlook, Excel.

(Fin del Proceso Semanal)

