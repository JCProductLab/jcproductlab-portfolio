Aplicación del Marco de Priorización MoSCoW: MVP B2C
Plataforma AsDeporte

Proyecto: Nueva Plataforma Digital Integral AsDeporte
Fase: 1.3.1 Definición del Alcance (MVP Validado) - Paso 2
Fecha: 12 de Mayo de 2025
1. Introducción

Este documento detalla la aplicación del marco de priorización MoSCoW (Must have,
Should have, Could have, Won't have) para las funcionalidades candidatas del
Producto Mínimo Viable (MVP) B2C de la nueva plataforma digital de AsDeporte. La
clasificación se basa en los hallazgos consolidados de la investigación (stakeholders,
usuarios B2C, análisis competitivo) y, fundamentalmente, en los acuerdos y decisiones
tomadas durante la "Sesión de Priorización y Refinamiento del Alcance MVP B2C" del
28 de Mayo de 2025. El objetivo es asegurar que el MVP se enfoque en entregar el
mayor valor posible dentro de las restricciones del proyecto.

2. Criterios de Evaluación para la Priorización MoSCoW

Cada funcionalidad candidata fue evaluada colaborativamente con los stakeholders
clave, considerando los siguientes criterios:

●  Valor para el Usuario (B2C): ¿Qué tan crítico es para resolver un problema de
usuario validado (ej. dificultad en búsqueda, problemas de inscripción, falta de
información) o satisfacer una necesidad clave identificada en la investigación B2C
(ej. acceso a beneficios Plus, historial de eventos)? Se considera el impacto en la
satisfacción y la capacidad del usuario para completar sus tareas principales.
●  Valor para el Negocio (AsDeporte): ¿Qué tanto contribuye a los objetivos B2C

prioritarios del MVP (mejora radical de UX/UI especialmente en app, incremento en
tasa de conversión y retención de atletas, fortalecimiento de Asdeporte Plus)? Se
evalúa el impacto en los KPIs de negocio.

●  Esfuerzo/Riesgo Técnico: ¿Cuál es la complejidad estimada y el riesgo asociado
a su implementación en el MVP (considerando las aportaciones de Tecnología
sobre desarrollo, integración con sistemas legados como TYR, seguridad,
escalabilidad)?

●  Dependencias: ¿La funcionalidad tiene dependencias críticas con otros sistemas
o funcionalidades que podrían no estar listos o ser complejas de integrar para el
MVP?

3. Funcionalidades del MVP B2C Clasificadas (MoSCoW)

A continuación, se presenta la clasificación de las funcionalidades B2C para el MVP,
derivada de la "Sesión de Priorización y Refinamiento del Alcance MVP B2C":

MUST HAVE (Imprescindibles para el MVP)

Estas funcionalidades son críticas para el lanzamiento del MVP. Sin ellas, el producto
no cumpliría sus objetivos básicos o no sería viable.

| Funcionalidad (ID de Sesión) | Descripción del Alcance (Resumen)

| Funcionalidad (ID de Sesión) | Descripción del Alcance (Resumen) _

| M_1: Exploración, Búsqueda y Filtrado Avanzado de Eventos (App y Web
Responsiva) | Interfaz intuitiva con múltiples vistas (lista, calendario mejorado), filtros
esenciales y granulares (disciplina, sub-disciplina básica, fecha, rango de fechas, ubicación
geográfica precisa, tipo de evento), ordenamiento relevante, y resultados rápidos. Información
clave del evento visible desde resultados de búsqueda. | - Valor para el Usuario (B2C): Muy
Alto. Resuelve la frustración principal con el calendario actual, la dificultad para encontrar
eventos relevantes y el tiempo perdido en la búsqueda. Mejora la satisfacción al inicio de la
interacción con la plataforma.
- Valor para el Negocio: Muy Alto. Impacta directamente la capacidad del usuario para
encontrar y considerar eventos, lo cual es el primer paso en el embudo de conversión.
Una buena experiencia aquí es crucial para la imagen de la marca y la retención.

- Esfuerzo/Riesgo Técnico: Alto. Implica un rediseño significativo de la interfaz, lógica
de filtrado avanzada y posiblemente la optimización de cómo se manejan y presentan
los datos de los eventos. Podría haber complejidades con la cantidad de datos y la
necesidad de que sea rápido y responsivo.

- Dependencias: Depende de la calidad y estructura de los datos de los eventos. Sin
dependencias externas críticas que impidan su desarrollo inicial. |

| M2: Proceso de Inscripción y Pago Simplificado, Seguro y Confiable (App y Web
Responsiva) | Flujo de inscripción optimizado con la menor cantidad de pasos posibles.
Precarga inteligente de datos desde el perfil del usuario. Precios y categorías claramente
presentados. Integración de múltiples opciones de pago seguras y populares en México.
Confirmaciones de inscripción y pago inmediatas y robustas, accesibles tanto en pantalla como
por email y en el perfil del usuario. Transparencia total en los cobros. | Valor para el Usuario:
Muy Alto. Aborda directamente la desconfianza generada por problemas pasados y la
frustración con formularios largos, mejorando significativamente la facilidad y seguridad de la
transacción.
- Valor para el Negocio: Muy Alto. Crítico para la conversión final, la confianza del
usuario y la reducción de consultas a soporte técnico. Una experiencia de pago fluida
es esencial para los ingresos.

- Esfuerzo/Riesgo Técnico: Muy Alto. Requiere un diseño cuidadoso de la interfaz,
desarrollo robusto de la lógica de inscripción y, fundamentalmente, una integración

segura y eficiente con pasarelas de pago. Las pruebas exhaustivas son
imprescindibles.

- Dependencias: Integración con proveedores de pasarelas de pago. Posibles dependencias
internas si se requiere nueva lógica de descuentos o promociones. |

| M3: Gestión de Perfil de Usuario Atleta (App y Web Responsiva) | Creación/edición
de datos personales básicos (nombre, email, contraseña, etc.). Gestión de contraseña (cambio,
recuperación). Visualización clara del historial de eventos a los que se ha inscrito, con acceso
fácil a detalles del evento y comprobantes de pago/inscripción. Visualización de resultados
pasados, con una función de búsqueda/filtro simple dentro del historial. | Valor para el Usuario:
Alto. Proporciona una funcionalidad básica y esencial para que los usuarios gestionen su
información personal, revisen sus compras pasadas y accedan a sus resultados. Fomenta la
sensación de tener un "hogar" en la plataforma.
- Valor para el Negocio: Alto. Es la base para la personalización futura, la
comunicación dirigida y la construcción de lealtad. Permite el análisis del
comportamiento del usuario a lo largo del tiempo.

- Esfuerzo/Riesgo Técnico: Medio. La integración con datos históricos de eventos y
resultados (potencialmente desde sistemas como TYR) es un punto clave a considerar
para la migración o sincronización de datos. La seguridad de los datos personales es
primordial.

- Dependencias: Acceso a la base de datos de usuarios existente y a los datos históricos de
inscripciones y resultados. |

| M4: Integración Mejorada y Visibilidad Clara de Asdeporte Plus (App y Web
Responsiva) | Visualización clara del estado de la membresía Asdeporte Plus (activa/inactiva,
fecha de expiración) dentro del perfil del usuario. Creación de un "Hub de Beneficios Plus"
dentro del perfil que liste de manera consolidada y comprensible todos los beneficios asociados
a la membresía (ej. descuentos, acceso anticipado, etc.) y cómo acceder a ellos. Aplicación
automática y claramente visible del descuento del 10% (u otros beneficios aplicables) durante
el proceso de inscripción a eventos elegibles. | Valor para el Usuario: Muy Alto (para miembros
Plus). Resuelve la frustración actual de no saber o no poder acceder fácilmente a los beneficios
por los que pagan. Aumenta la percepción de valor de la membresía.
- Valor para el Negocio: Muy Alto. Fundamental para la retención y satisfacción de los
miembros Plus, un segmento de clientes valioso. Puede incentivar nuevas
suscripciones.

- Esfuerzo/Riesgo Técnico: Medio. Requiere lógica de negocio para identificar a los
miembros Plus, mostrar los beneficios correctos y aplicar descuentos automáticamente.
Integración con el sistema de gestión de membresías.

- Dependencias: Acceso y lógica clara sobre los beneficios y estados de membresía de
Asdeporte Plus. |

| M5: Visualización Detallada y Clara de la Información de Cada Evento (App y
Web Responsiva) | Presentación estructurada, completa y fácil de consumir de la
información del evento: nombre, fecha, hora, ubicación (con mapa integrado), descripción
detallada, categorías y distancias disponibles, altimetría básica (si aplica y está disponible),
costos claros y desglosados, detalles del kit de corredor, reglamento esencial, información
sobre entrega de paquetes. Facilitar el acceso a información técnica adicional proporcionada
por los organizadores (ej. enlaces a archivos GPX, manuales del corredor). | Valor para el
Usuario: Alto. Permite a los usuarios tomar decisiones informadas sobre si un evento es
adecuado para ellos, reduce la incertidumbre y la necesidad de buscar información en múltiples
fuentes.
- Valor para el Negocio: Alto. Mejora la experiencia del usuario, reduce las consultas
al servicio de atención al cliente y puede aumentar la conversión al proporcionar toda la
información necesaria de forma accesible.

- Esfuerzo/Riesgo Técnico: Medio. Implica un buen diseño de la interfaz para
presentar la información de manera efectiva y la posible necesidad de estandarizar o
mejorar la forma en que se capturan los datos de los eventos.

- Dependencias: Calidad y completitud de la información proporcionada por los organizadores
de eventos. |

| M6: Sistema de Notificaciones Esenciales (Push en App y Email) | Implementación
de notificaciones para: confirmación de inscripción y pago exitoso, recordatorios importantes
(ej. fecha límite para cambios, inicio de entrega de kits, día del evento), notificaciones sobre
cambios críticos en eventos (cancelación, cambio de fecha/lugar) y alertas de seguridad de la
cuenta (ej. cambio de contraseña). | Valor para el Usuario: Alto. Mantiene al usuario informado
de manera proactiva sobre aspectos cruciales de su participación y cuenta, mejorando la
experiencia y reduciendo la ansiedad.
- Valor para el Negocio: Alto. Mejora la comunicación con el cliente, puede reducir la
carga en soporte al cliente y aumentar la percepción de profesionalismo y cuidado.

- Esfuerzo/Riesgo Técnico: Medio. Requiere la configuración e integración de
servicios de notificación push y email, así como la lógica para disparar las
notificaciones en los momentos adecuados.

- Dependencias: Ninguna crítica que impida su inclusión. |

SHOULD HAVE (Importantes, se incluirán si el tiempo y los recursos lo permiten
tras los Must Have)

Estas funcionalidades son muy deseables y mejorarían significativamente la

experiencia, pero el MVP podría lanzarse sin ellas si las restricciones lo exigen.

| Funcionalidad (ID de Sesión) | Descripción del Alcance (Resumen) | Valor
Usuario/Negocio, Esfuerzo/Riesgo, Dependencias /n

●  S1: Acceso a Resultados Históricos Mejorado (con opciones de filtrado más
avanzadas): Permitir la visualización de resultados de eventos pasados con filtros
más potentes (por tipo de evento, año, distancia) y búsqueda por nombre de
participante.
○  Valor para el Usuario: Medio. Importante para atletas que quieren consultar su

historial o buscar resultados de otros.

○  Valor para el Negocio: Medio. Podría aumentar el engagement y el tráfico al

sitio/app.

○  Esfuerzo/Riesgo Técnico: Medio. Requiere una buena indexación y consulta

de datos históricos.

○  Dependencias: Datos históricos de eventos y resultados.

●  S2: Integración Básica con Wearables (Conexión inicial y visualización de

actividad reciente en perfil):
○  Alcance: Permitir la conexión con 1-2 plataformas populares (ej. Garmin,

Strava) para visualizar un resumen de la actividad reciente del usuario en su
perfil de AsDeporte. No incluye análisis avanzado ni importación de
entrenamientos detallados en esta fase.

○  Valor para el Usuario: Medio-Alto. Deseado por usuarios avanzados y con
conocimiento tecnológico, sienta las bases para funcionalidades futuras.

○  Valor para el Negocio: Medio. Puede aumentar la fidelización y el

engagement de un segmento de usuarios influyente.

○  Esfuerzo/Riesgo Técnico: Medio-Alto. Implica el uso de APIs de terceros y la

gestión de la autenticación y sincronización de datos.

○  Dependencias: Disponibilidad y estabilidad de las APIs de los proveedores de

wearables/plataformas.

COULD HAVE (Deseables, si el tiempo y recursos lo permiten)

Estas funcionalidades se consideran deseables pero no esenciales para el MVP. Se
podrían implementar si hay tiempo y recursos disponibles después de completar las
funcionalidades "Must Have" y "Should Have".

| Funcionalidad (ID de Sesión) | Descripción del Alcance (Resumen) |

C1: Funcionalidad de Seguimiento en Vivo (Livetracking) con Mejoras
Incrementales de Fiabilidad: C_2: Descarga de Eventos a Calendario Personal

(formato iCal)** | Permite a los usuarios descargar la información del evento a su
calendario personal. | Valor para el Usuario: Medio. Conveniencia para usuarios
organizados.

Valor para el Negocio: Bajo-Medio. Podría mejorar la asistencia y recordación del
evento.

Esfuerzo/Riesgo Técnico: Bajo. Relativamente sencillo de implementar.

Dependencias: Ninguna significativa. |

WON'T HAVE (No se incluirán en este MVP)

Estas funcionalidades no se considerarán para el lanzamiento inicial, ya sea por su
complejidad, bajo impacto inmediato, o porque no están alineadas con los objetivos
centrales del MVP.

| Funcionalidad (ID de Sesión) | Descripción del Alcance (Resumen)

| W1: Funcionalidad "Tribu" Renovada (como red social compleja) | Rediseño
completo de "Tribu" con creación de perfiles, foros de discusión avanzados,
seguimiento de atletas, creación de grupos de entrenamiento, etc. | Valor para el
Usuario: Potencialmente alto a largo plazo, pero la investigación actual no lo respalda
como una necesidad urgente frente a los problemas básicos.

Valor para el Negocio: Medio. Podría aumentar el engagement si se hace bien, pero
es una inversión considerable con retorno incierto.

Esfuerzo/Riesgo Técnico: Muy Alto. Requiere un desarrollo significativo y continuo.

Dependencias: Definición clara de la estrategia de comunidad, lo cual es posterior al MVP. |

| W2: Gestión de Inscripciones Grupales Compleja | Funcionalidades avanzadas para
la gestión de equipos o grupos grandes con roles, descuentos por volumen, etc. | Valor para el
Usuario: Medio. Beneficia a un segmento específico.
Valor para el Negocio: Medio. Podría atraer a más grupos, pero la complejidad supera
los beneficios inmediatos para el MVP.

Esfuerzo/Riesgo Técnico: Alto.

Dependencias: Funcionalidades básicas de inscripción deben estar sólidas primero. |

| W3: Marketplace de Productos y Servicios Deportivos | Integración de una tienda de

productos o servicios relacionados con el deporte. | Valor para el Usuario: Bajo-Medio. No es
una necesidad central para el core de inscripción y participación en eventos.
Valor para el Negocio: Potencial de nuevos ingresos, pero distrae del enfoque
principal del MVP.

Esfuerzo/Riesgo Técnico: Alto.

Dependencias: Definición de modelo de negocio, acuerdos con proveedores, etc. |

| W4: Gamificación Avanzada | Sistemas de puntos, insignias, tablas de clasificación
complejas, etc. | Valor para el Usuario: Medio. Podría aumentar el engagement a largo plazo.
Valor para el Negocio: Medio. Podría mejorar la retención, pero no es esencial para la
funcionalidad básica.

Esfuerzo/Riesgo Técnico: Medio-Alto.

Dependencias: Funcionalidades de perfil y actividad bien establecidas. |
| W5: Personalización Extrema de Contenido o Recomendaciones Basada en IA
(en el MVP inicial) | Algoritmos avanzados de IA para recomendaciones de eventos, planes
de entrenamiento, etc. | Valor para el Usuario: Alto a largo plazo.
Valor para el Negocio: Alto a largo plazo.

Esfuerzo/Riesgo Técnico: Muy Alto. Requiere mucha data y desarrollo especializado.

Dependencias: Historial de datos de usuario robusto y algoritmos de IA. |

Resumen de Priorización del MVP B2C:

Must Have: La prioridad es ofrecer una plataforma funcional, confiable y usable para
las tareas centrales de descubrir eventos, inscribirse fácilmente y acceder a
información relevante, especialmente mejorando la experiencia de la app móvil y la
gestión de beneficios de Asdeporte Plus.

Should Have: Se buscará incluir mejoras significativas en la visualización de
resultados y una integración básica con wearables si el desarrollo de los "Must Have" lo
permite sin comprometer la calidad ni los plazos.

Could Have: Estas funcionalidades son deseables para el futuro pero no críticas para
el lanzamiento inicial del MVP. Se considerarán para futuras iteraciones.

Won't Have: Estas funcionalidades quedan fuera del alcance del MVP actual para
mantener el enfoque y asegurar la entrega de valor esencial.

Este documento servirá como guía para el equipo de desarrollo y diseño, asegurando

que los esfuerzos se concentren en las funcionalidades que aportarán el mayor valor
tanto a los usuarios como al negocio en esta primera versión de la nueva plataforma
digital de AsDeporte.

