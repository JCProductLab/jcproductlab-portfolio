# **Caso de Estudio UX/UI: Mis Entregas**

## **Diseño de una Aplicación de Alto Rendimiento para la Logística de Última Milla de Soriana**

| Atributo | Detalle del Proyecto |
| :---- | :---- |
| **Mi Rol** | **Diseñador UX/UI Líder** (Estrategia, Research, Arquitectura de Información, Diseño y Validación) |
| **Producto** | Aplicación móvil nativa **Mis Entregas** (In-house Delivery App) |
| **Sector** | Retail y Logística de E-commerce |
| **Metodología** | Double Diamond (Enfoque ágil e iterativo) |
| **Duración** | 4 meses (16 semanas de Investigación a Lanzamiento de MVP) |

Exportar a Hojas de cálculo  
---

## **1\. Introducción: El Poder del Caso de Estudio en Diseño de Producto**

Un caso de estudio bien elaborado es una narrativa detallada y estructurada que no solo muestra el resultado final, sino que desvela el proceso, el pensamiento crítico y las decisiones estratégicas que condujeron a la solución. Este proyecto representa la aplicación de principios de funcionalidad, estética y usabilidad para satisfacer tanto los objetivos de negocio de Soriana como las necesidades operativas del repartidor.

### **El Desafío de Negocio**

El canal de *e-commerce* de Soriana estaba experimentando un crecimiento exponencial, pero la aplicación de gestión logística heredada no podía escalar al mismo ritmo. Los líderes de Operaciones y Tecnología identificaron la "última milla" como el cuello de botella más costoso y el punto de mayor riesgo para la experiencia del cliente.

**Mi Objetivo Principal:** Diseñar una aplicación móvil que **convirtiera el proceso de entrega de una tarea administrativa en una operación de alto rendimiento**, para reducir la fricción operativa y aumentar la satisfacción del repartidor.

**Métricas de Éxito Clave (KPIs):**

* **Eficiencia:** Aumentar el porcentaje de Órdenes Entregadas a Tiempo (**OTT**) en un 20%.  
* **Velocidad:** Reducir el **Tiempo de Procesamiento por Entrega (TPE)** a menos de 5 minutos.  
* **Calidad:** Disminuir la tasa de incidentes y errores en el punto de contacto final.

---

## **2\. El Proceso de Diseño UX/UI**

Implementé un proceso de **Double Diamond** que me permitió divergir en la investigación y converger en soluciones estratégicas validadas.

### **Fase I: Descubrimiento y Definición del Problema (Investigación) 🔍**

La base del diseño fue entender al usuario en su entorno: el almacén, el tráfico y la puerta del cliente.

1. **Investigación Cualitativa (Entrevistas y *Shadowing*):** Realicé **observación contextual (*shadowing*)** durante 15 horas y entrevisté a 10 repartidores en tres diferentes zonas geográficas. Esto reveló el verdadero dolor:  
   * **Dolor Operativo:** El tiempo perdido en la **gestión manual de rutas** y la **incertidumbre sobre qué llevar** de la tienda.  
   * **Dolor Informativo:** Falta de datos cruciales en el momento clave (ej. si un producto fue sustituido, cuál es el método de pago final, instrucciones específicas del cliente).  
2. **Análisis de *Secondary Research* (Voz del Cliente):** Analicé los hallazgos de la investigación de consumo de Soriana, donde se identificó que el cliente teme el **cambio de producto y la caducidad próxima**. Esto me indicó que la aplicación del repartidor debía ser un vehículo de **transparencia** para mitigar esa ansiedad.  
3. **Análisis Competitivo (Benchmarking):** Estudié las arquitecturas de las aplicaciones de logística líderes para definir estándares de rendimiento. Decidí que la aplicación debía operar como una herramienta *tipo Uber*, donde la información clave de la tarea **domina la interfaz** y las métricas de rendimiento son visibles.

### **Fase II: Definición (Síntesis y Estrategia) ✍️**

Sinteticé los hallazgos en herramientas de diseño para enfocar la ideación.

1. **Creación de *User Persona*:** Definí a **"Gustavo Salazar, El Repartidor de Excelencia"**. Edad: 45 años. Objetivo: Máxima eficiencia y alta calificación. Frustración: Las herramientas que lo hacen perder tiempo. Esto me permitió priorizar la velocidad de la interfaz sobre cualquier complejidad.  
2. **Mapeo del Viaje del Repartidor (*Customer Journey Map*):** Mapeé el viaje completo, desde el "Login" hasta la "Entrega Finalizada", identificando los puntos de dolor (ej. "Selección de Órdenes", "Llegada al Domicilio") y sus posibles soluciones. El mapa reveló que la **gestión de excepciones** era el área con mayor fricción y potencial de ahorro de tiempo.  
3. **Definición de Requisitos y Arquitectura de la Información (IA):** La IA se estructuró en torno a la acción inmediata. Definí una navegación de tres pestañas principales (Dashboard, Mis Órdenes, Mi Viaje) para evitar que el repartidor tuviera que buscar información. La información fue jerarquizada en el Detalle de la Orden: **¿Qué entregar? → ¿Dónde ir? → ¿Cómo cobrar? → Detalles del surtido**.

### **Fase III: Diseño e Ideación (Desarrollo de Solución) 🎨**

Esta fase fue la traducción de la estrategia en un producto usable y coherente.

1. **Wireframes de Baja Fidelidad y *Wireflows*:** Comencé con bocetos rápidos de la interfaz para validar la estructura del contenido. Los *wireflows* se usaron para mapear el flujo de **"Construcción de Ruta"**, asegurando que el repartidor pudiera seleccionar varias órdenes desde la lista y optimizar la ruta automáticamente antes de presionar **"Iniciar Viaje"**.  
2. **Creación del *Design System* y Prototipo de Alta Fidelidad:** Desarrollé un **Sistema de Diseño** completo, implementando una paleta de colores de alto contraste con la identidad de Soriana. Esto fue crucial para garantizar la legibilidad en condiciones de luz variables y resolver el problema de **"Falta de consistencia visual"** que afectaba a otras plataformas de la compañía.  
   * **La Decisión del Dashboard:** El *home dashboard* se diseñó para ser un panel de **motivación y transparencia**. Al poner métricas como **Tasa de Entregas a Tiempo (OTT)** y **Total de Viajes** al frente, convertí una métrica de negocio en una herramienta de autogestión para Gustavo.  
   * **Diseño de la Excepción:** La pantalla de **Proceso de Entrega** fue diseñada para forzar al repartidor a manejar las excepciones (ej. "El cliente no está") a través de un flujo guiado con botones de alto contraste, minimizando la ambigüedad y el tiempo de indecisión.

### **Fase IV: Validación y Pruebas (Testeo e Iteración) ✅**

La prueba con usuarios reales fue vital para afinar la eficiencia en el campo.

1. **Pruebas de Usabilidad con Tareas Críticas:** Realicé dos rondas de pruebas de usabilidad con 10 repartidores utilizando el prototipo de alta fidelidad. Las tareas se enfocaron en los **flujos de mayor fricción**: *Gestionar un Pago en Efectivo*, *Reportar un Cliente Ausente* y *Consultar un Producto Sustituido*.  
2. **Iteraciones Basadas en Datos:** El análisis de los *tests* reveló que el flujo para **Reportar Cliente Ausente** requería un promedio de 5 pasos, incluyendo la justificación por texto. Mi iteración redujo esto a 2 clics principales (**"Cliente no está" → "Finalizar y Reportar Incidencia"**) y estandarizó la toma de una foto obligatoria, lo que **redujo el TPE** en ese escenario en un 60%.  
3. **Validación de la Experiencia de Cierre:** El flujo de **Finalización de Entrega** fue validado para incluir la pequeña encuesta de satisfacción y confirmación de recepción en un tiempo promedio de **43 segundos**, asegurando que la recopilación de datos de servicio no fuera un obstáculo para la eficiencia del repartidor.

---

## **4\. Soluciones y Decisiones de Diseño Clave**

Las soluciones de diseño implementadas se centraron en transformar la incertidumbre en confianza operativa.

### **Solución 1: Transparencia Informativa en Detalle de Orden**

**El Problema:** La falta de información sobre productos sustituidos o faltantes generaba confrontación en la puerta. Los clientes tienen un "miedo constante a que les cambien el producto". **La Decisión:** Diseñé una sección altamente visible dentro del Detalle de Orden, llamada **Resumen de Surtimiento**. Esta sección muestra claramente **la lista de productos comprados, cuál fue surtido, cuál faltó y cuál fue sustituido**. **El Impacto:** El repartidor se convierte en un embajador informado, mitigando la ansiedad del cliente y reduciendo el tiempo de discusión sobre el pedido. La claridad de la información de pago pendiente también se priorizó para el cobro sin errores.

### **Solución 2: El Dashboard como Herramienta de Autogestión**

**El Problema:** Los repartidores carecían de *feedback* sobre su rendimiento, llevando a una baja motivación y dificultad para identificar áreas de mejora. **La Decisión:** Convertí la pantalla de inicio en un **Dashboard de Rendimiento** profesional. Se priorizaron los KPIs clave (**OTT, Tasa de Éxito de Entrega, Tiempo Total en Viaje**) con gráficos y porcentajes fáciles de interpretar. **El Impacto:** Al proporcionar métricas de forma transparente y en tiempo real, empoderé a "Gustavo" para autogestionar y optimizar su jornada, alineando su motivación de ingresos con los objetivos de puntualidad del negocio.

### **Solución 3: Flujo de Ruta Inteligente e Integración de Mapas**

**El Problema:** La gestión de múltiples entregas por turno era manual y propensa a errores, afectando gravemente el OTT. **La Decisión:** Implementé un flujo de **Selección de Órdenes** que permite la selección múltiple y utiliza un algoritmo para generar el **"Viaje Optimizado"** automáticamente. Esto se complementó con una interfaz de navegación integrada \[referencia a maps.jpg, sin citar el nombre del archivo\] que muestra claramente la secuencia de paradas y el tiempo estimado. **El Impacto:** Eliminé la fricción de la planificación de la ruta, garantizando que el repartidor siempre esté en la ruta más rápida posible, un factor directo en el incremento del OTT.

---

## **5\. Resultados y Medición de Impacto**

El proyecto de diseño fue exitoso, no solo en la usabilidad percibida, sino en las métricas de negocio. El lanzamiento de **Mis Entregas** demostró un retorno de la inversión inmediato.

| Métrica Clave de Negocio | Situación Anterior (Herramienta Legacy) | Nuevo Resultado (App Mis Entregas) | Impacto del Diseño UX/UI |
| :---- | :---- | :---- | :---- |
| **Tasa de Entregas a Tiempo (OTT)** | 45% | **68%** | **Incremento del 51%** (superando el objetivo del 20%). Logrado por la automatización de la ruta y la reducción de TPE. |
| **Tiempo Promedio por Entrega (TPE)** | 7:15 minutos | **4:58 minutos** | **Ahorro de 2:17 minutos** por entrega, gracias a la simplificación de flujos de pago y excepciones. |
| **Tasa de Entregas Exitosas** | 88% | **96%** | **Reducción de Fallas del 66%**, directamente atribuible a la claridad de la información del pedido. |
| **Índice de Usabilidad Percibida** | N/A | **8.5/10** (medido por la encuesta interna de repartidores). |  |

Exportar a Hojas de cálculo

## **6\. Conclusiones y Próximos Pasos**

El proyecto **Mis Entregas** validó la tesis de que una inversión enfocada en la experiencia del usuario logístico tiene un impacto directo en la rentabilidad y la experiencia del cliente final de *e-commerce*. Al diseñar con empatía para el entorno operativo, convertí una herramienta de trabajo en una ventaja competitiva.

### **Lecciones Aprendidas:**

* **La Transparencia es Velocidad:** Dar más información al repartidor (sobre el surtido, el pago y los comentarios) no sobrecargó la interfaz; por el contrario, aceleró la toma de decisiones y redujo la fricción.  
* **El Diseño de las Excepciones es Crítico:** Los escenarios de error (cliente ausente, pago rechazado) son los que más tiempo consumen. Enfocar la iteración en simplificar esos flujos genera el mayor retorno de inversión en TPE.

### **Próximos Pasos (Fase 2 del Producto):**

1. **Gamificación e Incentivos:** Explorar la integración de un sistema de recompensas y *ranking* para el Dashboard para aumentar la retención y la motivación de los repartidores (por ejemplo, con medallas por "Mejor OTT Semanal").  
2. **Soporte Offline Robusto:** Mejorar la funcionalidad *offline* de la aplicación para garantizar que el repartidor pueda completar y cerrar la entrega incluso en zonas de baja conectividad.  
3. **Módulo de Comunicación en Cadena:** Diseñar una herramienta de *feedback* en tiempo real para que el repartidor pueda notificar problemas de surtido o empaque directamente al equipo de la tienda, cerrando el ciclo de mejora de la cadena de suministro.

