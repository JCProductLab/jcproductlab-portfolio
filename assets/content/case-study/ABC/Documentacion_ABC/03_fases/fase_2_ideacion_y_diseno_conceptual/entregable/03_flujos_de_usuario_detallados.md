Flujos de Usuario Detallados - Rediseño Plataforma Web Centro
Médico ABC

Fecha: Abril 2021
Autor: [Tu Nombre/Mi Rol] (Product Designer, Agencia Denumeris)
Introducción

Este documento presenta los flujos de usuario detallados para las tareas más críticas e
importantes que los pacientes realizarán en la nueva plataforma web del Centro
Médico ABC. Estos diagramas paso a paso visualizan los caminos óptimos que el
usuario seguirá, identificando las acciones del usuario, las respuestas del sistema, los
puntos de decisión y las pantallas clave involucradas.

Los flujos han sido diseñados para ser lógicos, eficientes y centrados en las
necesidades de nuestras Personas, resolviendo las ineficiencias y fragmentaciones de
la plataforma pre-rediseño. Se alinean directamente con la Arquitectura de Información
validada y reflejan la interacción que hoy vemos en el sitio actual
(https://centromedicoabc.com/).

1. Flujo de Usuario: Encontrar un Médico y Ver su Perfil

Persona Principal: Carlos, el Profesional Ocupado (busca eficiencia); Elena, la Paciente Crónica
(busca facilidad).
Objetivo: Encontrar a un médico especialista específico o por especialidad y acceder a su perfil
detallado.
Reflejo en el Sitio Actual (https://centromedicoabc.com/): Este flujo es prominente en la página
de inicio con el buscador "Encuentra a tu médico".
●  Punto de Entrada: Homepage (centromedicoabc.com)
●  Punto de Salida Exitoso: Usuario ha accedido al perfil detallado del médico.
●  Pasos del Flujo:

1.  Inicio: Usuario en la Homepage (centromedicoabc.com)

■  Acción del Usuario: Ve el buscador principal "Encuentra a tu médico" en la

sección superior de la página.

■  Respuesta del Sistema: La interfaz muestra un campo de texto y opciones

de búsqueda por "especialidad, departamento, padecimiento o
procedimiento y campus".

2.  Búsqueda del Médico

■  Acción del Usuario:

■  Opción A: Escribe el nombre del médico o la especialidad en el campo

de búsqueda.

■  Opción B: Selecciona una especialidad o campus de las opciones

sugeridas o listas desplegables.

■  Respuesta del Sistema:

■  Si escribe, el sistema puede mostrar sugerencias de autocompletado.
■  Al seleccionar o hacer clic en "Buscar", el sistema procesa la consulta.

3.  Visualización de Resultados de Búsqueda

■  Respuesta del Sistema:

■  Si se encuentran resultados: Muestra una página de resultados de
búsqueda con una lista de perfiles de médicos que coinciden con la
consulta. Cada médico se presenta con una tarjeta que incluye su
nombre, especialidad, foto y campus.

■  Si no se encuentran resultados: Muestra un mensaje "No se

encontraron médicos" y sugiere opciones para refinar la búsqueda (ej.
verificar ortografía, intentar otra especialidad).

■  Acción del Usuario: Revisa la lista de médicos. Puede usar filtros

adicionales (si disponibles en la página de resultados) para refinar la
búsqueda (ej. por campus, por disponibilidad).

4.  Acceso al Perfil del Médico

■  Acción del Usuario: Hace clic en la tarjeta o nombre del médico deseado

en la lista de resultados.

■  Respuesta del Sistema: Carga la página de perfil detallado del médico.

5.  Visualización del Perfil Detallado del Médico

■  Respuesta del Sistema: Muestra la página de perfil del médico con

secciones claras:
■

Información principal (nombre, especialidad, foto).

■  Biografía o "Sobre mí".
■  Padecimientos que atiende.
■  Formación académica y certificaciones.
■  Aseguradoras con las que trabaja.
■  Ubicaciones de consultorio y horarios.
■  Un botón o enlace prominente para "Agendar Cita".

■  Acción del Usuario: Revisa la información del médico. Puede hacer clic en

"Agendar Cita" para continuar con el proceso de agendamiento.

■  Fin del Flujo.

2. Flujo de Usuario: Agendar una Cita para un Estudio de Laboratorio

Persona Principal: Carlos, el Profesional Ocupado (busca eficiencia); Elena, la Paciente Crónica
(busca facilidad).

Objetivo: Programar una cita para un estudio de laboratorio en línea.
Reflejo en el Sitio Actual (https://centromedicoabc.com/): La página actual tiene un CTA
"Agenda tu cita" que lleva a un flujo para estudios de laboratorio, radiología e imagen.
●  Punto de Entrada: Homepage (centromedicoabc.com) o navegación utilitaria

"Agenda tu Cita".

●  Punto de Salida Exitoso: Cita de laboratorio confirmada y documentación

enviada.

●  Pasos del Flujo:

1.  Inicio: Usuario en la Homepage (centromedicoabc.com)

■  Acción del Usuario: Hace clic en el botón o enlace "Agenda tu Cita"

(generalmente prominente en el encabezado o en la sección principal).
■  Respuesta del Sistema: Redirige a la página de agendamiento de citas.

2.  Selección del Tipo de Cita

■  Respuesta del Sistema: Muestra opciones para el tipo de cita (ej.

"Laboratorio", "Radiología e Imagen", "Vacuna COVID-19" - si aplica).

■  Acción del Usuario: Selecciona "Laboratorio".

3.  Selección de Campus y Fecha/Hora

■  Respuesta del Sistema: Muestra un selector de campus y un

calendario/horario.
■  Acción del Usuario:

■  Selecciona el campus de su preferencia (Observatorio o Santa Fe).
■  Selecciona la fecha y hora disponibles en el calendario.

■  Respuesta del Sistema: Muestra la disponibilidad de horarios para la fecha

y campus seleccionados.

4.  Ingreso de Datos del Paciente

■  Respuesta del Sistema: Muestra un formulario para ingresar los datos

personales del paciente (nombre, email, teléfono, etc.). Puede preguntar si
es un paciente nuevo o existente.

■  Acción del Usuario: Llena el formulario con la información requerida.

5.  Confirmación y Detalles Adicionales

■  Respuesta del Sistema: Muestra un resumen de la cita (tipo, fecha, hora,

campus, datos del paciente). Puede incluir un aviso sobre la
documentación.

■  Acción del Usuario: Revisa el resumen y hace clic en "Confirmar Cita".

6.  Cita Confirmada y Envío de Documentación

■  Respuesta del Sistema:

■  Muestra un mensaje de éxito con la confirmación de la cita.

■

Indica que se ha enviado un email de confirmación.

■  Proporciona un enlace para "llenar tus documentos desde casa" [cite:

2.1] antes de la visita.

■  Acción del Usuario: Abre el email de confirmación y/o hace clic en el

enlace para completar la documentación.

■  Fin del Flujo.

3. Flujo de Usuario: Consultar Resultados Médicos (Visión Unificada Aspiracional)

Persona Principal: Elena, la Paciente Crónica (busca simplicidad); Carlos, el Profesional
Ocupado (busca unificación); Sofía, la Cuidadora Informada (busca gestión familiar).
Objetivo: Acceder a todos los resultados médicos (laboratorio, imagenología, etc.) de forma
unificada en un solo portal.
Reflejo en el Sitio Actual (https://centromedicoabc.com/): La página actual tiene un enlace
"Consulta tus resultados" [cite: 2.1], que puede llevar a un portal de resultados. La investigación
2022-2025 menciona milaboratorio.abchospital.com y misaludabc.abchospital.com (con
problemas de Vue PACS), lo que indica que la unificación completa fue un desafío, pero el flujo
idealizado del rediseño apuntaría a esta experiencia.
●  Punto de Entrada: Homepage (centromedicoabc.com) o navegación utilitaria

"Consulta tus Resultados".

●  Punto de Salida Exitoso: Usuario ha visualizado o descargado sus resultados

médicos.

●  Pasos del Flujo:

1.  Inicio: Usuario en la Homepage (centromedicoabc.com)

■  Acción del Usuario: Hace clic en el botón o enlace "Consulta tus

Resultados".

■  Respuesta del Sistema: Redirige a la página de inicio del Portal de
Paciente (o a una página de inicio de sesión si no está autenticado).

2.  Autenticación en el Portal de Paciente

■  Respuesta del Sistema: Muestra la pantalla de inicio de sesión (si no está

autenticado).

■  Acción del Usuario: Ingresa sus credenciales (usuario y contraseña).
■  Respuesta del Sistema:

■  Si autenticación exitosa: Redirige al Dashboard del Portal de Paciente.
■  Si error: Muestra mensaje de error y opción de recuperación de

contraseña.

3.  Dashboard del Portal de Paciente (Mi Salud ABC Integral)

■  Respuesta del Sistema: Muestra un dashboard personalizado con un
resumen de información clave (próximas citas, últimos resultados,

mensajes).

■  Acción del Usuario: Navega a la sección "Mis Resultados" (generalmente

un enlace prominente o una tarjeta en el dashboard).

4.  Visualización de Lista de Resultados Unificada

■  Respuesta del Sistema: Muestra una lista cronológica de todos los

resultados médicos disponibles (laboratorio, imagenología, etc.), con filtros
(por fecha, por tipo de estudio, por médico).

■  Acción del Usuario: Revisa la lista. Puede aplicar filtros para encontrar un

resultado específico.
5.  Acceso a Detalle del Resultado

■  Acción del Usuario: Hace clic en un resultado específico de la lista.
■  Respuesta del Sistema: Muestra la página de detalle del resultado, con la
información completa, gráficos (si aplica) y opciones para descargar (ej.
PDF) o imprimir.

■  Acción del Usuario: Revisa el detalle del resultado, lo descarga o imprime.
■  Fin del Flujo.

4. Flujo de Usuario: Buscar Información sobre un Padecimiento o Servicio Médico

Persona Principal: Sofía, la Cuidadora Informada (busca información); Elena, la Paciente Crónica
(busca entender).
Objetivo: Encontrar información fiable y comprensible sobre un padecimiento, procedimiento o
servicio médico.
Reflejo en el Sitio Actual (https://centromedicoabc.com/): La página actual tiene una sección
"Información para tu Salud" con un buscador de padecimientos/procedimientos.
●  Punto de Entrada: Homepage (centromedicoabc.com) o navegación principal

"Consejos de Salud" / "Información para tu Salud".

●  Punto de Salida Exitoso: Usuario ha accedido a la información relevante y la ha

comprendido.
●  Pasos del Flujo:

1.  Inicio: Usuario en la Homepage (centromedicoabc.com)

■  Acción del Usuario:

■  Opción A: Utiliza el buscador general de la homepage y escribe un

término relacionado con un padecimiento o servicio.

■  Opción B: Navega a la sección "Consejos de Salud" o "Información para

tu Salud" desde el menú principal.

■  Respuesta del Sistema:

■  Si usa el buscador, el sistema puede mostrar sugerencias de

autocompletado.

■  Si navega, el sistema muestra la página de inicio de la sección de

contenido.

2.  Búsqueda o Navegación de Contenido

■  Acción del Usuario:

■  Opción A (Buscador): Hace clic en "Buscar" o selecciona una

sugerencia.

■  Opción B (Navegación): Utiliza el buscador interno de la sección de

contenido, navega por categorías (ej. "Cardiología", "Oncología") o por
un índice alfabético de padecimientos.

■  Respuesta del Sistema:

■  Si usa el buscador: Muestra una página de resultados con artículos o

páginas de servicio que coinciden con la búsqueda.

■  Si navega: Muestra la lista de artículos/páginas dentro de la categoría

seleccionada.

3.  Visualización de Resultados de Búsqueda/Navegación

■  Respuesta del Sistema: Muestra una lista de títulos y resúmenes de

artículos o páginas relevantes.

■  Acción del Usuario: Revisa la lista y hace clic en el título del artículo o

servicio que le interesa.
4.  Acceso y Consumo del Contenido

■  Respuesta del Sistema: Carga la página del artículo o detalle del servicio.
■  Acción del Usuario: Lee el contenido. Puede ver imágenes, videos (si hay

integración con YouTube Health), o enlaces a médicos relacionados.

■  Respuesta del Sistema: El contenido es claro, preciso y fácil de entender.
■  Fin del Flujo.

Conclusión de Flujos de Usuario

Estos flujos de usuario detallados sirven como el plano de las interacciones clave en la
nueva plataforma. Al visualizar cada paso, hemos podido asegurar que los caminos del
usuario sean lógicos y eficientes, eliminando los puntos de fricción identificados en la
plataforma pre-rediseño.

Estos flujos serán la base directa para la siguiente etapa de wireframing, donde cada
paso se traducirá en pantallas concretas y elementos de interfaz. La alineación con la
funcionalidad del sitio actual (https://centromedicoabc.com/) demuestra que estas
soluciones fueron implementadas exitosamente, mejorando la experiencia del paciente
en tareas críticas como encontrar un médico, agendar estudios y acceder a
información de salud.

