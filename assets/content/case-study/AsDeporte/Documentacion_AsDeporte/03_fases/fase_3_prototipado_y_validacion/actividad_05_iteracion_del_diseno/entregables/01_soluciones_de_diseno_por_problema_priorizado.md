Soluciones de Diseño por Problema Priorizado: MVP B2C
AsDeporte

Fecha: 15 de Mayo de 2025

Este documento detalla las propuestas de solución de diseño para los problemas de
usabilidad de ALTA y MEDIA prioridad identificados en el "Informe de Hallazgos de
Pruebas de Usabilidad (MVP B2C)". Cada solución busca abordar la causa raíz del
problema y considera los impactos en la interfaz y la experiencia del usuario.

Problemas de ALTA Prioridad y Soluciones Propuestas

1. Problema (PU-03): Solicitud de CURP en inscripción genera dudas/desconfianza en perfiles
Principiante y Ocasional.
* Causa Raíz Principal: Falta de transparencia y justificación en la interfaz sobre por qué se
solicita un dato personal sensible como el CURP.
* Impacto: Genera fricción y desconfianza en un flujo crítico (inscripción), pudiendo afectar la
tasa de conversión de nuevos usuarios.
* Soluciones de Diseño Propuestas:
* Solución 1 (UX Writing y Diseño de Interacción - IxD):
* Acción: Añadir un microcopy explicativo (tooltip o texto de ayuda discreto junto al campo
CURP) que justifique brevemente su solicitud. Ejemplo: "Necesitamos tu CURP para [razón
específica, ej: 'validar tu categoría de edad de forma oficial' o 'cumplir con requisitos del seguro
del evento']. Este dato es confidencial."
* Wireframe/UI: El tooltip (ícono de información "i") se colocaría junto a la etiqueta del campo
CURP. Al tocarlo/hacer hover, aparecería la explicación.
* Impacto Esperado: Aumentar la transparencia y reducir la aprensión del usuario.
* Solución 2 (Estrategia de Producto/Negocio + IxD):
* Acción: Revaluar internamente con AsDeporte (Negocio/Legal) la obligatoriedad del CURP
para todos los eventos del MVP. Si no es estrictamente necesario para la inscripción básica,
considerar hacerlo opcional o solicitarlo solo si el evento/organizador lo requiere explícitamente
(con la debida justificación).
* Wireframe/UI: Si es opcional, marcar claramente el campo como "(Opcional)".
* Impacto Esperado: Eliminar la fricción para quienes no deseen o no entiendan la necesidad
de proporcionarlo.
2. Problema (PU-04): Preferencia/Necesidad de opciones de pago offline (Oxxo) sigue siendo
relevante, y su visibilidad/comunicación podría optimizarse.
* Causa Raíz Principal: Necesidad de confianza y accesibilidad en métodos de pago; posible
mejora en la prominencia visual de la opción Oxxo en la interfaz de selección de método de
pago.
* Impacto: No optimizar su visibilidad podría llevar a que usuarios que la prefieren no la vean y
abandonen el proceso o se sientan menos cómodos.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño Visual - UI y Diseño de Interacción - IxD):

* Acción: En la pantalla de selección de método de pago ("Pantalla/Página de Inscripción -
Paso 3"), dar mayor prominencia visual a la opción "Pagar en Oxxo".
* Wireframe/UI:
* Presentar las opciones de pago como botones grandes y claros, en lugar de solo radio
buttons.
* Utilizar el logo oficial y reconocible de Oxxo junto a la opción.
* Considerar un breve texto descriptivo debajo: "Genera una referencia y paga en efectivo en
cualquier tienda Oxxo."
* Impacto Esperado: Asegurar que los usuarios que buscan esta opción la encuentren
fácilmente y comprendan el proceso.
3. Problema (PU-07): Necesidad de información sobre tipo de terreno/dificultad para caminatas
y principiantes no siempre cubierta.
* Causa Raíz Principal: Falta de estandarización y priorización de campos de información
específicos para el perfil principiante/ocasional en la definición del contenido del detalle del
evento.
* Impacto: Dificulta la toma de decisiones informada para este segmento, pudiendo llevar a
inscripciones en eventos no adecuados.
* Soluciones de Diseño Propuestas:
* Solución 1 (Arquitectura de la Información - AI y Diseño de Contenido):
* Acción: Definir nuevos campos de datos opcionales para los eventos: "Tipo de Terreno
Principal" (ej. Asfalto, Terracería Ligera, Mixto, Montaña Técnica) y "Nivel de Dificultad
Sugerido" (ej. Principiante, Intermedio, Avanzado – con una breve explicación de qué implica
cada nivel para ese tipo de evento).
* Impacto Esperado: Permitir a los organizadores (futuro B2B) o a AsDeporte categorizar mejor
los eventos.
* Solución 2 (Diseño Visual - UI y UX Writing):
* Acción: En la "Página/Pantalla de Detalle de Evento", mostrar esta información de forma clara
y visual si está disponible.
* Wireframe/UI: Utilizar iconos distintivos y etiquetas textuales (ej. [Icono de Montaña] "Terreno:
Montaña Técnica", [Icono de Persona Caminando] "Dificultad: Apto para Principiantes").
Colocar esta información en una sección visible de "Características del Evento" o similar.
* Impacto Esperado: Ayudar a los usuarios a evaluar rápidamente si un evento se ajusta a sus
capacidades y preferencias.
4. Problema (PU-11): Guías para principiantes y glosario de términos son altamente valorados y
podrían ser más proactivos/expandirse.
* Causa Raíz Principal: El contenido de ayuda existe pero su integración en el flujo del usuario
y su visibilidad podrían no ser óptimas para ofrecer apoyo en el momento justo de necesidad.
* Impacto: Perder la oportunidad de reducir la ansiedad y mejorar la confianza del segmento
principiante.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño de Interacción - IxD y UX Writing):
* Acción: Integrar "Mini-Guías" o "Consejos Rápidos" contextualmente.
* Wireframe/UI:
* En la "Página de Detalle de Evento", si el evento está marcado como apto para principiantes,

mostrar un banner o sección expandible no intrusiva: "¿Tu primera carrera? ¡Aquí algunos
consejos!".
* En el flujo de inscripción, para términos como "Chip de cronometraje" o "Categoría", añadir un
pequeño ícono de información ("i") que al ser tocado/hover muestre un tooltip con una
explicación breve y sencilla.
* Impacto Esperado: Ofrecer ayuda en el momento y lugar donde surge la duda, sin que el
usuario tenga que buscar activamente una sección de ayuda general.
* Solución 2 (Arquitectura de la Información - AI):
* Acción: Asegurar que la sección de "Preguntas Frecuentes (FAQs)" tenga un apartado
destacado para "Principiantes" y sea fácilmente accesible desde la navegación principal de
ayuda.
* Impacto Esperado: Consolidar información relevante para este perfil.
5. Problema (PU-09): Necesidad de máxima claridad en las condiciones de uso del Wallet
Asdeporte Plus.
* Causa Raíz Principal: Falta de detalle y fácil acceso a la información sobre las reglas y
condiciones de uso del crédito en el Wallet.
* Impacto: Puede generar confusión, frustración y mal uso de un beneficio clave para miembros
Plus.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño de Contenido - UX Writing y Diseño Visual - UI):
* Acción: En el "Hub de Beneficios Asdeporte Plus", junto a la visualización del saldo del Wallet,
añadir un enlace claro: "Ver condiciones de uso del Wallet".
* Wireframe/UI: Este enlace llevaría a una pantalla modal o una subpágina dentro del perfil que
detalle:
* En qué tipo de eventos se puede usar el crédito.
* Vigencia del crédito.
* Cómo se aplica el crédito durante el pago (ej. "Tu crédito se aplicará automáticamente al
costo de la inscripción en el paso de pago si el evento es elegible").
* Restricciones (si las hay).
* Impacto Esperado: Aumentar la transparencia y la comprensión de cómo funciona este
beneficio.
Problemas de MEDIA Prioridad y Soluciones Propuestas

6. Problema (PU-01): Filtros avanzados para nichos deportivos (Trail, MTB, Triatlón, OCR) aún
con oportunidad de mayor granularidad.
* Causa Raíz Principal: Alcance inicial del MVP no profundizó en sub-necesidades de cada
nicho.
* Impacto: Puede hacer que atletas muy especializados no encuentren exactamente lo que
buscan.
* Soluciones de Diseño Propuestas (Para MVP o Fast-Follow):
* Solución 1 (Diseño de Interacción - IxD y Arquitectura de la Información - AI):
* Acción: Para el MVP, revisar si es factible añadir 1-2 sub-filtros clave adicionales para las
disciplinas más populares de AsDeporte (ej. para Trail: "Distancia >42k (Ultra)", "Distancia <15k
(Corto)"; para Ciclismo: "Tipo: Ruta", "Tipo: Montaña").
* Wireframe/UI: Integrar estos nuevos sub-filtros en la "Pantalla de Filtros Avanzados de

Eventos" de forma que no sature la interfaz (ej. como opciones dentro de la disciplina
seleccionada).
* Impacto Esperado: Mejorar la precisión de la búsqueda para más usuarios sin una
complejidad excesiva para el MVP.
* Solución 2 (Roadmap Post-MVP):
* Acción: Planificar una investigación más profunda sobre los filtros específicos necesarios por
cada nicho y desarrollar un sistema de etiquetado de eventos más robusto para soportarlos.
* Impacto Esperado: Convertir a AsDeporte en la plataforma de referencia para atletas
especializados.
7. Problema (PU-12): Navegación Hub Plus a inscripción para entender beneficios aplicables
antes podría ser más fluida.
* Causa Raíz Principal: Flujo de información no óptimo entre beneficios generales y su
aplicación contextual a un evento.
* Impacto: Leve incertidumbre para usuarios Plus.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño Visual - UI y Diseño de Interacción - IxD):
* Acción: En la "Página/Pantalla de Detalle de Evento", si el usuario ha iniciado sesión y es
miembro Plus, mostrar una pequeña sección o indicadores visuales discretos que resalten los
beneficios Plus específicos aplicables a ese evento (ej. "✓ Descuento Plus Aplicable", "✓ Zona
de Recuperación Plus").
* Wireframe/UI: Estos indicadores podrían ser pequeños iconos con tooltips explicativos o una
breve lista.
* Impacto Esperado: Proporcionar información contextual sobre los beneficios sin que el
usuario tenga que salir de la página del evento.
8. Problema (PU-08): Micro-fricción en el descubrimiento inicial del ícono de filtros en la app
móvil para usuarios menos tecnológicos.
* Causa Raíz Principal: Affordance visual del ícono no óptima; falta de etiqueta textual en móvil.
* Impacto: Muy bajo, no bloqueante.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño Visual - UI y UX Writing - App Móvil):
* Acción: Evaluar la posibilidad de añadir una etiqueta de texto concisa como "Filtrar" o "Filtros"
debajo o junto al ícono de filtros en la barra superior de la pantalla de listado de eventos de la
app.
* Wireframe/UI: Ajustar el layout para acomodar la etiqueta sin afectar la limpieza del diseño.
* Impacto Esperado: Mejorar la claridad y el reconocimiento inmediato del control de filtros para
todos los usuarios.
* Solución 2 (Diseño Visual - UI):
* Acción: Asegurar que el ícono de filtro tenga un contraste adecuado con el fondo y un tamaño
suficiente según las guías de accesibilidad y usabilidad móvil.
* Impacto Esperado: Mejorar la visibilidad general del ícono.
9. Problema (PU-13): Claridad en la presentación de múltiples distancias/costos en la página de
detalle del evento.
* Causa Raíz Principal: Presentación de listas complejas de opciones sin suficiente jerarquía
visual o interactividad.

* Impacto: Bajo, confusión momentánea.
* Soluciones de Diseño Propuestas:
* Solución 1 (Diseño Visual - UI y Diseño de Interacción - IxD):
* Acción: En la "Página/Pantalla de Detalle de Evento", para la sección de distancias y costos:
* Usar una tipografía y espaciado que mejore la legibilidad y la agrupación visual de cada
opción (Distancia + Costo + Botón de Inscripción específico si aplica).
* Considerar un layout de "tarjetas" o filas bien delimitadas para cada opción de
distancia/categoría principal.
* Si la lista es muy extensa, permitir que el usuario seleccione primero la distancia de interés, y
luego se muestren los costos y categorías asociados a esa distancia (filtrado interactivo dentro
de la página).
* Wireframe/UI: Mostrar ejemplos de cómo se vería una lista de 3-4 opciones y cómo se
manejaría una lista más larga.
* Impacto Esperado: Facilitar el escaneo y la comprensión rápida de las opciones de
inscripción.
Estas propuestas de solución de diseño se centran en abordar las causas raíz
identificadas y buscan mejorar la experiencia del usuario del MVP B2C de manera
tangible. Los siguientes pasos serían refinar estas ideas en wireframes/mockups
actualizados y, si es necesario, realizar pruebas de validación rápidas sobre los
cambios más significativos.

