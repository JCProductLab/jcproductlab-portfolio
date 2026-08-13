Pantallas a Diseñar (Wireframing): Nueva Plataforma Digital
AsDeporte (MVP B2C) - Iteración 1

Esta es la lista revisada de pantallas clave para wireframing del MVP B2C,
incorporando el feedback potencial de una validación interna rápida con el Product
Manager y un Desarrollador clave. El enfoque sigue siendo abordar los puntos de dolor
del usuario y cumplir con los objetivos del MVP, ajustando el detalle y la complejidad
según la factibilidad técnica y la prioridad de negocio para el lanzamiento inicial.

Se mantiene la estructura de agrupación anterior, pero se añaden notas y refinamientos
basados en la perspectiva de PM y Desarrollo.

Listado de Pantallas Clave para Wireframing (Iteración 1)

Pantallas Globales / Comunes

1.  Splash Screen (Solo App Móvil): Pantalla inicial de carga. Mantener simple.
2.  Página/Pantalla de Inicio (Home): Punto de entrada. PM: Asegurar llamados a la

acción claros hacia Eventos. Dev: Optimizar carga inicial.

3.  Página/Formulario de Inicio de Sesión: Dev: Implementación estándar,

considerar SSO básico si es viable, pero no crítico para MVP.

4.  Página/Formulario de Registro: PM: Simplificar al máximo los campos

requeridos (solo esenciales). Dev: Validar campos necesarios vs. opcionales para
MVP (ej. CURP podría ser opcional o post-registro).

5.  Página/Formulario de Recuperación de Contraseña - Paso 1: Solicitar email.
6.  Página/Formulario de Recuperación de Contraseña - Paso 2: Establecer nueva

contraseña.

7.  Pantalla/Mensaje de Confirmación Genérica: Para acciones exitosas (registro,

cambio de contraseña, etc.). Dev: Reutilizar componente.

Pantallas de Eventos

8.  Página/Pantalla de Listado de Eventos:
○  Vista principal de lista (prioridad).
○  Barra de Búsqueda y Filtros Prominentes: PM: Asegurar que el filtro "Para
Principiantes" sea muy visible. Dev: Evaluar rendimiento de la carga inicial de
eventos y la aplicación de filtros.

○  Estados: Incluir wireframes para estado vacío (no hay eventos) y estado de

carga.

9.  Pantalla de Filtros Avanzados de Eventos:

○

Interfaz clara para seleccionar filtros. PM: Validar que los filtros "Must Have" y
"Should Have" estén presentes y sean fáciles de usar. Dev: Confirmar la
factibilidad técnica de los filtros granulares específicos de nicho para MVP.

10. Página/Pantalla de Detalle de Evento:

○  Presentación completa de información. PM: Asegurar que la información clave
(fecha, ubicación, costo, inscripción) sea lo primero que vea el usuario. Dev:
Evaluar cómo se cargará la información técnica adicional (enlaces vs.
embebido) para optimizar rendimiento.
○  Botón prominente para iniciar inscripción.
○  Estados: Estado de carga, estado de error (ej. evento no encontrado).

11. Página/Pantalla de Guías para Principiantes:

○  Contenido educativo. PM: Validar que el lenguaje sea simple y aborda dudas

comunes (basado en feedback de Soporte).

12. (Opcional MVP) Pantalla de Vista de Calendario Mejorado: Dev: Evaluar si el
esfuerzo de rediseño del calendario para que sea "mejorado" es viable dentro del
plazo del MVP, o si se pospone.

13. (Opcional MVP) Pantalla de Vista de Mapa de Eventos: Dev: Evaluar la

complejidad de la integración de mapas y geolocalización para MVP.

Pantallas del Proceso de Inscripción y Pago

14. Pantalla/Página de Inscripción - Paso 1: Datos del Participante. PM: Minimizar

campos. Dev: Validar precarga de datos desde perfil.

15. Pantalla/Página de Inscripción - Paso 2: Revisión del Pedido. PM: Claridad total

en costos y descuentos. Dev: Asegurar que la lógica de descuentos (Plus)
funcione correctamente.

16. Pantalla/Página de Inscripción - Paso 3: Pago Seguro. PM: Énfasis total en la
confianza y seguridad visual. Dev: CRÍTICO. Asegurar integración robusta y
manejo de errores con pasarela de pago. Validar complejidad de integrar Oxxo
para MVP.

17. Pantalla de Confirmación de Inscripción Exitosa: PM: Mensaje claro y

tranquilizador. Dev: Asegurar actualización inmediata en "Mis Eventos Activos" y
envío de email.

18. Pantalla de Error en Proceso de Inscripción/Pago: Dev: CRÍTICO. Diseñar
mensajes de error claros y accionables (ej. "Reintentar", "Contactar Soporte").

19. (Si Oxxo incluido) Pantalla de Referencia de Pago Oxxo: Dev: Asegurar

generación correcta de referencia y explicación clara al usuario.

Pantallas de Mi Perfil

20. Página/Pantalla de Mi Perfil (Dashboard/Resumen): PM: Asegurar acceso

rápido a "Mis Eventos Activos" y "Beneficios Plus". Dev: Evaluar rendimiento al
cargar datos históricos (TYR).
○  Estados: Estado de carga, estado vacío (ej. sin eventos inscritos, sin historial).

21. Página/Formulario de Edición de Datos Personales: Dev: Implementación

estándar.

22. Pantalla de Mis Eventos Activos: PM: Claridad en eventos próximos. Dev:

Asegurar carga eficiente de la lista.

23. Pantalla de Detalle de Inscripción Activa / Comprobante: PM: Fácil acceso al

comprobante. Dev: Validar formato y acceso al comprobante.

24. Pantalla de Mi Historial AsDeporte / Resultados Personales: PM: Claridad en la
presentación del historial. Dev: CRÍTICO. Evaluar la complejidad de la integración
y visualización de datos históricos de resultados desde TYR para MVP.

25. Pantalla de Resultado Personal de Evento Pasado (Detalle): Dev: Depende de

la integración con TYR.

26. Pantalla de Hub de Beneficios Asdeporte Plus: PM: CRÍTICO. Lista clara y
detallada de beneficios, cómo usarlos. Dev: Asegurar lógica de negocio para
mostrar beneficios correctos según el estado de la membresía.

27. (Should Have) Pantalla de Integración Wearables: PM: ¿Qué valor mínimo

podemos ofrecer en MVP? Dev: Limitar alcance a solo la conexión/desconexión y
mostrar estado "conectado/desconectado". Visualización de actividad
probablemente post-MVP.

Pantallas de Resultados (Públicos)

28. Página/Pantalla de Listado de Eventos con Resultados Disponibles: Dev:

Evaluar rendimiento al cargar muchos eventos con resultados.

29. Pantalla de Resultados de Evento Específico: PM: Claridad en la búsqueda de
resultados por nombre/número. Dev: Evaluar rendimiento de la búsqueda interna
en listados largos de resultados.

30. (Should Have) Pantalla de Filtros Avanzados de Resultados: Dev: Evaluar

complejidad vs. valor para MVP. Podría posponerse si es muy complejo.

Pantallas de Soporte y Ayuda

31. Página/Pantalla de Preguntas Frecuentes (FAQs): PM: Contenido basado en

consultas de Soporte. Dev: Implementación estándar.

32. Página/Pantalla de Contacto: Dev: Integración con sistema de soporte (email,

formulario).

33. Página/Pantalla Acerca de AsDeporte: Dev: Contenido estático.
34. Página/Pantalla Términos y Condiciones: Dev: Contenido estático.
35. Página/Pantalla Política de Privacidad: Dev: Contenido estático.

Pantallas de Notificaciones

36. Pantalla/Sección de Centro de Notificaciones: Dev: Implementar sistema de

notificaciones push y su visualización.

37. Pantalla de Configuración de Notificaciones: Dev: Opciones básicas de on/off

para MVP.

Esta lista revisada incorpora las consideraciones de factibilidad y prioridad desde las

perspectivas de Producto y Desarrollo, ajustando el detalle y enfocándose en los
elementos esenciales para un MVP exitoso.

