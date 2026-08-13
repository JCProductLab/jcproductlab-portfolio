Anexo I
Información Técnica y de Servicio/Brief

Nombre del Proyecto: Gestión Automatizada de la Capacitación (GAC)

Especificación del bien/servicio:
Desarrollo web para automatizar el proceso de creación de grupos y seguimiento de la gestión
del proceso de capacitación desde nivel básico, intermedio hasta la acreditación de los
colaboradores de Ventas, Operaciones y Yastás.

Objetivo:
Eficientar el proceso y seguimiento de la capacitación mediante un desarrollo web con
la  finalidad  de  aportar  valor  a  los  colaboradores  y  al  equipo  interno  con  respecto  al
servicio del Modelo de Capacitación.

Vigencia:

Del 19 de junio al 30 de octubre de 2023.

Lugar de entrega: N/A

Puntos  críticos  por  entregar  y  penalizar:  Tomar  en  cuenta
especificaciones:

las  siguientes

Alcances:

El desarrollo se divide en dos vertientes:

Desarrollo 1: Automatización de la segmentación y envíos de invitaciones

F1-Identificar colaboradores a capacitar (nuevo ingreso, cambios o promoción)
Cómo administrador de la capacitación, necesito identificar los colaboradores a capacitar con
base en su fecha de inicio en el puesto o fecha de ingreso (nuevo ingreso, cambios o promoción)
en un solo clic y de manera automática.

 F2 – Segmentar listas generando grupos por puesto y subdirección.
Cómo administrador de la capacitación, requiero generar grupos, (grupos presenciales: mínimo
5 participantes, máximo 25. Grupos Online: mínimo 10, máximo 15) con base en el puesto
y subdirección, con sede, días y horarios, de los colaboradores en un solo clic y de manera
automática.

F3 – Asignar recursos: formador, sede, días y hora.
Cómo líder operativo requiero asignar el formador que capacitará en cada grupo de forma
sencilla teniendo la visibilidad de los grupos a capacitar.

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 1 de 6

Anexo I
Información Técnica y de Servicio/Brief

Cómo formador requiero visualizar que grupos capacitaré tanto en las listas de colaboradores,
como en una agenda sencilla.

F4 – Envío de invitación por medio de Outlook y Teams/WA.
Cómo administrador de la capacitación, requiero que la solución tecnológica envíe
automáticamente las invitaciones a los Gerentes por medio de Outlook utilizando el
formato correspondiente, así mismo que los colaboradores a capacitar reciban el invite en sus
cuentas de Teams o una notificación por WhatsApp como el archivo .ical.

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 2 de 6

Anexo I
Información Técnica y de Servicio/Brief

Desarrollo 2 – Trazabilidad de la Capacitación

F1 – Estatus del avance por colaborador en cada hito de la jornada de capacitación (user)
Cómo colaborador en ruta de capacitación, necesito conocer mi estatus, saber mi progreso,
cuanto me falta por terminar de una manera muy amigable, atractiva, sencilla.

F2 – Resumen del Estatus del avance de colaboradores dividido por Unidad, OS, Subdirección
y Dirección (supervisor_user)
Cómo líder de unidad/subgerente, me sirve ver el avance de los colaboradores a mi cargo en su
ruta de capacitación, viendo de manera general en que parte de la ruta van y conociendo el
detalle de cada uno de ellos.

Cómo gerente, me sirve ver el avance de los colaboradores de mi oficina en su ruta de
capacitación, viendo de manera general en que parte de la ruta van y conociendo el detalle de
cada uno de ellos.
Cómo jefe de un equipo, que está en ruta de capacitación y que además tengo colaboradores en
ruta de capacitación, debo poder visualizar tanto mi estatus así como el avance de mis reportes.
Cómo subdirector/director, me sirve ver el avance de los colaboradores de mi
subdirección/dirección en su ruta de capacitación, viendo de manera general en que parte de la
ruta van y conociendo el detalle de cada uno de ellos.

F3 – Dashboard y reporte del estatus de  avance por formador (admin_user)
Cómo formador me sirve mucho ver el avance de los colaboradores de la subdirección que
atiendo, la vista puede ser desde vista admin, puedo ver un dashboard sencillo, tablas filtradas y
exportarlas en formato Excel.

F4 -  Dashboard y reporte de indicadores claves de capacitación (admin_user)
Cómo administrador de la capacitación, requiero visualizar un dashboard con los principales
indicadores de capacitación, así como descargar el concentrado de colaboradores con sus
respectivos estatus de la ruta de capacitación.

F5 – Consumo de base datos externas
Cómo administrador poder alimentar el desarrollo con tablas (Excel) existentes del status de
cada etapa de la ruta

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 3 de 6

Anexo I
Información Técnica y de Servicio/Brief

Creación de interfaz:
Cómo usuario del tracking de la capacitación, ingreso a la solución utilizando como
credenciales:
Usuario: Número de empleado
Contraseña: Fecha de nacimiento

Cómo usuario del tracking de la capacitación, requiero contar con notificaciones para saber si
presento (alguien de mi equipo o yo) un retraso, o se acerca un hito importante en la ruta de
capacitación, sería super valioso que esos avisos me lleguen por WhatsApp.

Cómo super admin de la solución, requiere tener todas los permisos y funcionalidad con mi
acceso, así como poder dar de alta a otros usuarios, carga de archivos, entre otras.

Cómo super admin de la solución, requiero estar actualizando la base de datos principal cada
semana.

Vista Colaborador

Vista usuario colaborador:

Se busca una vista sencilla para el usuario que le
permita visualizar su progreso en la capacitación,
así como sus detalles de cada Hito.

Vista Líder / Subgerente / Gerente: puede ver su
capacitación y en un espacio adicional ver el
estatus de sus colaboradores asignados, de
acuerdo con su oficina.

Subdirector y director: Puede ver el % avance de
todas sus oficinas, agregar un filtro de % por
oficina.

**El desarrollo debe filtrar por dirección, solo
debe poder ver oficinas y colaboradores de dicha
dirección, (este dato se obtiene de la base inicial)

Vista Administrador

Vista sencilla, dashboard con filtros
personalizados:

% asistencia por dirección de ventas y
nivel (básico, intermedio, avanzado)

Calificación promedio

Consulta % avance por usuario

Tabla de colaboradores en ruta de
capacitación con % avance (respecto a
los 6 meses) y estatus (acreditado o en
progreso)

Generación de informes: Los administradores de capacitación tienen la capacidad de generar
informes detallados sobre el progreso y los resultados de la capacitación.

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 4 de 6

Implicaciones del desarrollo del desarrollo web:

Anexo I
Información Técnica y de Servicio/Brief

1.  Seguridad: La aplicación debe contar con medidas sólidas de seguridad para

proteger la información confidencial de los usuarios y los datos de capacitación.
2.  Rendimiento: A medida que la base de usuarios y la cantidad de datos aumenten,
es importante asegurarse de que la aplicación pueda manejar eficientemente la
carga y responder rápidamente.

3.  Usabilidad: La aplicación debe ser intuitiva y fácil de usar para los diferentes tipos
de usuarios, minimizando la curva de aprendizaje y brindando una experiencia
fluida.

4.  Mantenimiento y escalabilidad: La aplicación requerirá actualizaciones

periódicas, corrección de errores y capacidad de escalabilidad a medida que la
organización crezca. (creación de nuevos módulos / proyectos integrados al
desarrollo)

5.  Base de datos : Actualización de base de datos semanal.
6.  Cambios de puesto (fase 0 y pasaporte)

Histórico de capacitación 2023 en adelante

7.  Migración del desarrollo: El desarrollo vivirá dentro del servidor del proveedor
durante el primer año, con la posibilidad de migrar a servidores administrados
por Gentera, se requiere la configuración del desarrollo dentro de dichos
servidores.

Desarrollo:
La cotización se deberá desglozar en las dos etapas mencionadas ( Desarrollo 1 y 2) a través
de metodología ágil con sprints del desarrollo.

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 5 de 6

Anexo I
Información Técnica y de Servicio/Brief

Niveles de servicio (sla) esperados

●  El CANDIDATO adjudicado deberá cumplir con los trabajos y niveles de servicio objeto
de  la  presente  y  con  las  especificaciones  requeridas  en  este  Brief,  los  cuales  serán
penalizados bajo cualquier incumplimiento en la prestación de estos.

●  Las penas se aplicarán al momento de que el proveedor adjudicado presente su importe

total o parcial para cobro reflejándose vía nota de crédito.

●  Los SLA sujetos a aplicación de penas serán conforme a lo indicados en este ANEXO I

Modo  potencial  de
falla

Indicador

SLA

Penalización

No  cumplir  con
calidad
establecida.

la
gráfica

Elementos gráficos no
alineados a la identidad
gráfica de la empresa.

Entrega
desarrollo.

de

Plataforma
disponible

Incidencias

< 1 hora

< 1 hora

no

Sitio no disponible por
causas del desarrollo y
programación
Defectos UI/UX: -
Problemas visuales que
afectan la experiencia por
parte del usuario. - Perder
interactividad
usuario/respuesta esperada.

No  se  realizará
el  pago  hasta  la
entera
satisfacción  del
requerimiento.
2%  del  monto
total
del
desarrollo
2%  del  monto
total
del
desarrollo

El contenido de este documento es confidencial para uso exclusivo del destinatario, por lo que se prohíbe su

divulgación total o parcial a cualquier tercero no autorizado.

Insurgentes Sur 1458 Piso 10, Actipan, Benito Juárez, 03230, Ciudad de México
www.gentera.com.mx

Página 6 de 6

