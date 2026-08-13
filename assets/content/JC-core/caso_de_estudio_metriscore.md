# **Caso de Estudio: Metriscore \- Redefiniendo el Benchmarking Financiero Automotriz**

| Cliente | Simetrical (Consultoría de Business Intelligence) |
| :---- | :---- |
| **Plataforma** | Metriscore (B2B SaaS) |
| **Servicio** | Estrategia UX/UI y Arquitectura de Información |
| **Industria** | Automotriz (Gestión de Desempeño de Concesionarios) |
| **Duración del Proyecto** | 4 Meses (Descubrimiento y Diseño) |

---

## **1\. El Desafío: Transformar un Reporte Estático en Inteligencia Activa**

La plataforma **Metriscore** de Simetrical es una herramienta vital que consolida y compara más de 100 Indicadores Clave de Desempeño (KPIs) financieros y operativos de concesionarios contra el promedio de la red y el **Top 25%** de desempeño. Sin embargo, su interfaz se había estancado, presentando una experiencia visual densa y obsoleta que dificultaba la labor del usuario final: el Gerente o Director de Grupo.

**El Problema Central:** Los usuarios dedicaban demasiado tiempo a decodificar datos en lugar de analizar la estrategia detrás de ellos. La interfaz no facilitaba la comparación directa ni incentivaba la planificación, quedando como una herramienta de consulta histórica más que de gestión proactiva.

**Objetivos del Rediseño:**

1. **Usabilidad y Legibilidad:** Simplificar la lectura de información compleja, priorizando la acción inmediata.  
2. **Estética de Nivel Ejecutivo:** Modernizar el *look & feel* para reflejar una herramienta de gestión de alto valor.  
3. **Integración de la Estrategia:** Conectar la información de desempeño con la planificación (crear metas y **Planes de Acción**).

---

## **2\. Mi Rol y el Proceso de Diseño (UX/UI)**

Como Diseñador Principal de UX/UI, lideré el proyecto desde el descubrimiento hasta la entrega final de prototipos de alta fidelidad, con un enfoque en la **Arquitectura de Información (AI)** y la **Visualización de Datos**.

Utilicé una metodología ágil estructurada en 5 fases, centrada en el valor del *benchmarking* de Metriscore:

| Fase | Enfoque | Entregables Clave |
| :---- | :---- | :---- |
| **I. Descubrimiento** | Entender el *pain* del usuario y el negocio. | Perfiles de Usuario, Matriz de KPIs Críticos. |
| **II. Definición de la AI** | Establecer la jerarquía de la información. | Flujogramas, Definición de Reglas de Validación. |
| **III. Ideación y Diseño** | Bocetaje, Wireframes y Prototipos. | Wireframes de Alta Fidelidad, Guía de Estilo. |
| **IV. Pruebas y Validación** | Usabilidad de los prototipos. | Ajustes a la Arquitectura de la Información. |
| **V. Implementación (Soporte)** | Supervisión de la fidelidad del diseño. | Especificaciones de Diseño. |

---

## **3\. Descubrimiento y Estrategia UX**

Para alinear la interfaz con las necesidades ejecutivas, llevamos a cabo entrevistas con gerentes y analistas, confirmando que la velocidad de comparación era su KPI de UX más importante.

### **💡 Hallazgos Clave:**

* **Sobrecarga Cognitiva:** El uso excesivo de rojo para valores negativos y la baja jerarquía visual hacían que cada pantalla se sintiera como una alerta, dificultando la identificación de la verdadera crisis.  
* **Flujo Fragmentado:** Para comparar su desempeño con el **Promedio de la Red** o el **Top 25%**, los usuarios tenían que navegar entre múltiples reportes o exportar a Excel.  
* **Confianza en los Datos:** Una preocupación constante era la falta de validación de los datos cargados por otros concesionarios, lo que mermaba la confianza en el *benchmark*.

### **🎯 Decisiones Estratégicas (Principios de Diseño):**

1. **Referente Estético:** Se adoptó el diseño y la estructura de plataformas de gestión profesional como **SugarCRM** (referencia explícita en la investigación) para proyectar sofisticación y orden.  
2. **Principio de Comparación Inmersiva:** La regla fundamental de diseño fue: **"Todas las comparativas deben estar visibles en una misma vista."**  
3. **Sistema de Validación como *Feature*:** Se diseñó un robusto sistema de **Reglas de Validación** para la carga de datos (Ej: Si existe **Venta de Autos Nuevos**, **FORZOSAMENTE** debe haber **Volumen de Unidades \> 0** y **Costo de Ventas \> 0**). Esto se presentó como un valor añadido de la plataforma para garantizar la integridad del *benchmark*.

---

## **4\. Solución y Ejecución de la Interfaz (UI)**

La solución se articuló en un conjunto de módulos rediseñados, poniendo la **acción** y la **comparación** como eje central de la experiencia.

### **A. Resumen Ejecutivo (Dashboard)**

El nuevo *Dashboard* fue diseñado para ser un **punto de control de rentabilidad**. Priorizamos los KPIs más sensibles en la posición superior (**ROS \- Margen Neto Antes de Impuestos** y **Absorción de Posventa**).

* **Jerarquía de Datos:** Se implementó un sistema para mostrar las métricas críticas del concesionario junto a las barras del **Promedio de la Red** y el **Top 25%**, permitiendo una evaluación de posición instantánea.  
* **Identificación de Oportunidades:** Gráficos intuitivos para mostrar qué departamentos o sucursales **"Cayeron" o "Crecieron"** en métricas de Utilidad Bruta (UB), dirigiendo al usuario a la vista de detalle.

### **B. Módulo de Comparativas de Desempeño y Ranking**

Este módulo fue un rediseño radical para cumplir el principio de **"Comparativas en una misma vista"**.

* **Migración a Porcentajes:** Para módulos clave, se cambió la representación principal de cifras absolutas a **porcentajes**. Esto simplifica el análisis de eficiencia (ej. ¿Cuál es mi margen en Venta de Usados en comparación con el *benchmark*?).  
* **Visualización de Liquidez:** Indicadores financieros como **Prueba del Ácido**, **Liquidez** y **Capital de Trabajo** se presentaron en una vista tabular limpia, usando códigos de color sutiles para indicar tendencias (verde para mejoría, ámbar para alerta).  
* **Ranking Ejecutivos:** La vista de **Ranking** muestra el posicionamiento de la agencia en métricas clave (ej. **ROS**) contra el resto del grupo, destacando visualmente al **Top 3**.

### **C. Estados Financieros y Business Plan**

El diseño de las vistas contables (**Estado Consolidado, Balance General**) se centró en la legibilidad y la capacidad de análisis.

* **Análisis Fila por Fila:** La vista de **Estado de Resultados Consolidado** se optimizó para permitir la **comparativa directa en cada rubro contable** (ej. Gastos Operativos: Mes Actual vs. Mes Anterior/Presupuesto), resaltando visualmente las variaciones clave.  
* **Planificación Activa:** El módulo de **Business Plan** permite a los usuarios **establecer metas** directamente en la plataforma sobre KPIs específicos (ej. **Punto de Equilibrio en Unidades**, Descuento Promedio). Esta funcionalidad integra la planificación financiera con la ejecución, cerrando el ciclo de gestión.

---

## **5\. Resultados e Impacto**

El rediseño de Metriscore transformó una herramienta de *reporting* en una plataforma de **Gestión de Desempeño** proactiva.

| Métrica de Éxito | Antes del Rediseño | Después del Rediseño | Impacto |
| :---- | :---- | :---- | :---- |
| **Tiempo para Identificar Desviación de KPI** | \~5 minutos (necesidad de exportar/cruzar datos) | **\<1 minuto** (todo en el Dashboard) | Reducción del **80%** en la fricción de análisis. |
| **Confianza en Datos del Benchmark** | Media/Baja (duda sobre la carga de datos) | **Alta** (gracias a las Reglas de Validación visibles) | Aumento de la **credibilidad** del principal activo de la plataforma. |
| **Adopción de Módulos de Planificación** | Nulo (Solo *reporting*) | Crecimiento constante en el uso de **Planes de Acción** | Metriscore se convirtió en una herramienta de **gestión diaria** y no solo de auditoría. |

El proyecto fue un éxito al cambiar el paradigma de la plataforma de "muestra datos históricos" a "**permite tomar decisiones estratégicas en tiempo real**," reforzando la posición de Simetrical como consultora líder en inteligencia de negocios para la industria automotriz.

