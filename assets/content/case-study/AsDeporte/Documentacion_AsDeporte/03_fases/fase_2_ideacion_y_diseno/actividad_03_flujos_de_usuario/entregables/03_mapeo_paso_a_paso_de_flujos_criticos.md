Mapeo Paso a Paso de Flujos Críticos del MVP B2C

A continuación, se presentan los mapeos paso a paso de los flujos de usuario más
críticos para el MVP B2C de la plataforma digital de AsDeporte. Estos diagramas
visualizan el recorrido del usuario desde el punto de inicio hasta el punto de fin,
incluyendo pantallas clave, acciones del usuario, decisiones y ramificaciones.

Los flujos se basan en la Arquitectura de la Información definida, los modelos mentales
de los usuarios y buscan abordar directamente los puntos de dolor identificados en la
investigación. Se presentan de forma genérica, aplicable tanto a la web responsive
como a la app móvil, destacando las diferencias clave donde son relevantes.

Flujo 1: Buscar, Ver Detalles e Inscribirse a un Evento

Este flujo es fundamental para el MVP, abordando problemas críticos de
descubrimiento, información y confianza en la inscripción.

Puntos de Inicio: [Página de Inicio] / [Listado de Eventos] / {Enlace Externo}
Punto de Fin: [Pantalla de Confirmación Exitosa] / {Email de Confirmación} / {Evento en "Mis
Eventos Activos"}
graph TD
    A[Punto de Inicio:<br/>Página de Inicio / Listado de Eventos] --> B(Navegar a
Eventos / Usar Barra de Búsqueda);
    B --> C[Listado de Eventos<br/>(Vista de Lista por defecto, Filtros visibles)];

    C --> D(Explorar Lista / Usar Búsqueda / Aplicar Filtros Avanzados);
    D --> E[Listado de Eventos<br/>(Resultados Filtrados/Buscados)];
    E --> F(Seleccionar un Evento);
    F --> G[Página de Detalle de Evento];

    G --> H(Revisar Información del Evento);
    H --> I{Información Suficiente<br/>y Evento Adecuado?};
    I -->|Sí| J(Hacer clic en "Inscríbete Aquí");
    I -->|No| K(Regresar a Listado de Eventos);
    K --> E;

    J --> L[Proceso de Inscripción - Paso 1:<br/>Datos del Participante];
    L --> M(Completar/Verificar Datos<br/>Seleccionar
Categoría/Distancia<br/>Seleccionar Talla);
    M --> N[Proceso de Inscripción - Paso 2:<br/>Revisión del Pedido];

    N --> O(Revisar Pedido<br/>Verificar Descuentos);

    O --> P[Proceso de Inscripción - Paso 3:<br/>Pago Seguro];

    P --> Q(Seleccionar Método de Pago);
    Q --> R{Método de Pago<br/>Seleccionado};
    R -->|Tarjeta| S(Ingresar Datos de Tarjeta);
    R -->|Oxxo (si MVP)| T(Generar Referencia de Pago);

    S --> U(Hacer clic en "Confirmar Pago");
    U --> V{Pago Exitoso?};
    V -->|Sí| W[Pantalla de Confirmación Exitosa];
    V -->|No| X[Pantalla de Error de Pago];
    X --> P; % Opción de reintentar

    T --> Y[Pantalla de Referencia de Pago Oxxo];
    Y --> Z(Guardar/Imprimir Referencia<br/>Ir a Oxxo a Pagar);
    Z --> AA{Sistema recibe<br/>confirmación de Oxxo};
    AA --> W; % Actualización asíncrona

    W --> BB{Sistema envía Email<br/>Sistema actualiza "Mis Eventos Activos"};
    BB --> CC[Punto de Fin];

    %% Notas y Dolores Abordados
    classDef pain fill:#f9f,stroke:#333,stroke-width:2px;
    class C,L,P,W pain;
    linkStyle
0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
stroke:#666,stroke-width:1px;
    linkStyle 19,21 stroke:#f00,stroke-width:2px;
    linkStyle 20,22 stroke:#0f0,stroke-width:2px;

    note right of C: Aborda dolor: Calendario confuso, Filtros insuficientes
    note right of G: Aborda dolor: Falta de info técnica, Falta de claridad
    note right of L: Aborda dolor: Formularios largos, Solicitud de datos cuestionables
    note right of P: Aborda dolor: Desconfianza en pago, Falta de opciones
    note right of W: Aborda dolor: Falta de confirmación clara
    note right of X: Aborda dolor: Errores técnicos, Falta de claridad en errores
    note right of Y: Aborda dolor: Desconfianza pago online (para
principiantes/ocasionales)

Flujo 2: Registro de Nuevo Usuario

Un flujo simplificado para facilitar la entrada de nuevos atletas a la plataforma.

Puntos de Inicio: [Punto de Inicio (Crear cuenta/Registrarse)]
Punto de Fin: {Cuenta Creada y Sesión Iniciada} / [Página de Perfil/Inicio] / {Email de
Bienvenida}
graph TD
    A[Punto de Inicio:<br/>Crear cuenta/Registrarse] --> B[Página/Formulario<br/>de
Registro];
    B --> C(Ingresar Datos Requeridos<br/>Aceptar Términos);
    C --> D(Hacer clic en "Crear Cuenta");
    D --> E{Datos Válidos<br/>y Proceso Exitoso?};
    E -->|Sí| F{Sistema crea cuenta<br/>Sistema inicia sesión};
    F --> G[Redirección a Perfil/Inicio];
    G --> H{Sistema envía<br/>Email de Bienvenida};
    H --> I[Punto de Fin];

    E -->|No| J[Página/Formulario<br/>de Registro];
    J --> K{Mostrar mensajes<br/>de error claros};
    K --> C;

    %% Notas y Dolores Abordados
    classDef pain fill:#f9f,stroke:#333,stroke-width:2px;
    class B pain;
    linkStyle 0,1,2,3,4,5,6,7,8,9 stroke:#666,stroke-width:1px;
    linkStyle 4 stroke:#0f0,stroke-width:2px;
    linkStyle 8 stroke:#f00,stroke-width:2px;

    note right of B: Aborda dolor: Formularios largos, Solicitud de datos cuestionables
    note right of G: Aborda dolor: Incertidumbre post-registro

Flujo 3: Inicio de Sesión

El proceso estándar para acceder a la cuenta.

Puntos de Inicio: [Punto de Inicio (Iniciar Sesión)]
Punto de Fin: {Usuario loggeado} / [Página Solicitada / Perfil / Inicio]
graph TD
    A[Punto de Inicio:<br/>Iniciar Sesión] --> B[Página/Formulario<br/>de Inicio de
Sesión];

    B --> C(Ingresar Email/Usuario<br/>y Contraseña);
    C --> D(Hacer clic en "Iniciar Sesión");
    D --> E{Credenciales Válidas?};
    E -->|Sí| F{Sistema autentica usuario};
    F --> G[Redirección a Página Solicitada / Perfil / Inicio];
    G --> H[Punto de Fin];

    E -->|No| I[Página/Formulario<br/>de Inicio de Sesión];
    I --> J{Mostrar mensaje<br/>de error};
    J --> C;

    B --> K(Hacer clic en<br/>"¿Olvidaste tu contraseña?");
    K --> L{Ir al Flujo 4};

    linkStyle 0,1,2,3,4,5,6,7,8,9,10,11 stroke:#666,stroke-width:1px;
    linkStyle 4 stroke:#0f0,stroke-width:2px;
    linkStyle 8 stroke:#f00,stroke-width:2px;

Flujo 4: Recuperación de Contraseña

Proceso para restablecer el acceso a la cuenta.

Puntos de Inicio: [Página de Inicio de Sesión]
Punto de Fin: {Email con instrucciones enviado} / {Contraseña restablecida}
graph TD
    A[Página de Inicio de Sesión] --> B(Hacer clic en<br/>"¿Olvidaste tu contraseña?");
    B --> C[Página/Formulario Rec. Contraseña - Paso 1:<br/>Solicitar
Restablecimiento];
    C --> D(Ingresar Email);
    D --> E(Hacer clic en "Enviar Instrucciones");
    E --> F{Email Encontrado?};
    F -->|Sí| G[Pantalla de Confirmación:<br/>"Revisa tu email"];
    G --> H{Usuario recibe email<br/>con enlace};
    H --> I{Usuario hace clic<br/>en enlace};
    I --> J[Página/Formulario Rec. Contraseña - Paso 2:<br/>Restablecer Contraseña];

    J --> K(Ingresar Nueva Contraseña<br/>Confirmar Nueva Contraseña);
    K --> L(Hacer clic en<br/>"Restablecer Contraseña");
    L --> M{Contraseña Restablecida<br/>Exitosamente?};
    M -->|Sí| N[Pantalla de Confirmación:<br/>"Contraseña Restablecida"];

    N --> O(Opcional: Enlace a Iniciar Sesión);
    O --> P[Página de Inicio de Sesión];
    P --> Q[Punto de Fin];

    F -->|No| R[Página/Formulario Rec. Contraseña - Paso 1];
    R --> S{Mostrar mensaje<br/>de error};
    S --> D;

    linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17 stroke:#666,stroke-width:1px;
    linkStyle 5 stroke:#0f0,stroke-width:2px;
    linkStyle 12 stroke:#0f0,stroke-width:2px;
    linkStyle 16 stroke:#f00,stroke-width:2px;

    note right of G: Mensaje claro, reduce ansiedad

Flujo 5: Gestión y Edición de Perfil de Usuario

Permite al usuario mantener su información actualizada.

Puntos de Inicio: [Navegación Global] --> [Mi Perfil]
Punto de Fin: {Cambios guardados exitosamente}
graph TD
    A[Navegación Global] --> B(Hacer clic en "Mi Perfil");
    B --> C[Página de Mi Perfil - Dashboard];
    C --> D(Hacer clic en "Editar Datos Personales");
    D --> E[Página/Formulario de Edición de Perfil];
    E --> F(Modificar Campos<br/>Hacer clic en "Guardar Cambios");
    F --> G{Cambios Guardados<br/>Exitosamente?};
    G -->|Sí| H{Sistema guarda cambios};
    H --> I[Página de Mi Perfil - Dashboard];
    I --> J{Mostrar mensaje<br/>de confirmación};
    J --> K[Punto de Fin];

    G -->|No| L[Página/Formulario de Edición de Perfil];
    L --> M{Mostrar mensajes<br/>de error de validación};
    M --> F;

    linkStyle 0,1,2,3,4,5,6,7,8,9,10,11 stroke:#666,stroke-width:1px;
    linkStyle 6 stroke:#0f0,stroke-width:2px;
    linkStyle 10 stroke:#f00,stroke-width:2px;

Flujo 6: Acceso y Gestión de Inscripciones Activas

Permite al usuario revisar sus próximas participaciones.

Puntos de Inicio: [Navegación Global] --> [Mi Perfil]
Punto de Fin: [Listado de Mis Eventos Activos] / [Detalle/Comprobante de Inscripción Activa]
graph TD
    A[Navegación Global] --> B(Hacer clic en "Mi Perfil");
    B --> C[Página de Mi Perfil - Dashboard];
    C --> D(Hacer clic en la sección<br/>"Mis Eventos Activos");
    D --> E[Listado de Mis Eventos Activos];
    E --> F[Punto de Fin (Listado)];

    E --> G(Opcional: Seleccionar un evento<br/>de la lista);
    G --> H[Detalle/Comprobante<br/>de Inscripción Activa];
    H --> I[Punto de Fin (Detalle)];

    %% Notas y Dolores Abordados
    classDef pain fill:#f9f,stroke:#333,stroke-width:2px;
    class H pain;
    linkStyle 0,1,2,3,4,5,6,7 stroke:#666,stroke-width:1px;

    note right of H: Acceso rápido a info y comprobante<br/>(Aborda dolor: Dificultad
para encontrar info post-inscripción)

Flujo 7: Acceso a Resultados Históricos Personales

Permite al usuario consultar su desempeño en eventos pasados.

Puntos de Inicio: [Navegación Global] --> [Mi Perfil]
Punto de Fin: [Listado de Mi Historial AsDeporte] / [Resultado Personal de Evento Pasado]
graph TD
    A[Navegación Global] --> B(Hacer clic en "Mi Perfil");
    B --> C[Página de Mi Perfil - Dashboard];
    C --> D(Hacer clic en la sección<br/>"Mi Historial AsDeporte / Resultados
Personales");
    D --> E[Listado de Mi Historial AsDeporte];
    E --> F[Punto de Fin (Listado)];

    E --> G(Opcional: Seleccionar un evento<br/>de la lista);

    G --> H[Resultado Personal<br/>de Evento Pasado];
    H --> I[Punto de Fin (Resultado)];

    %% Notas y Dolores Abordados
    classDef pain fill:#f9f,stroke:#333,stroke-width:2px;
    class H pain;
    linkStyle 0,1,2,3,4,5,6,7 stroke:#666,stroke-width:1px;

    note right of H: Vista detallada del resultado personal<br/>(Aborda dolor: Dificultad
para encontrar resultados)

Flujo 8: Acceso y Visualización de Beneficios Asdeporte Plus

Destaca el valor de la membresía Plus.

Puntos de Inicio: [Navegación Global] --> [Mi Perfil]
Punto de Fin: [Hub de Beneficios Asdeporte Plus]
graph TD
    A[Navegación Global] --> B(Hacer clic en "Mi Perfil");
    B --> C[Página de Mi Perfil - Dashboard];
    C --> D(Hacer clic en la sección/enlace<br/>"Asdeporte Plus" / "Mis Beneficios
Plus");
    D --> E[Hub de Beneficios Asdeporte Plus];
    E --> F[Punto de Fin];

    %% Notas y Dolores Abordados
    classDef pain fill:#f9f,stroke:#333,stroke-width:2px;
    class E pain;
    linkStyle 0,1,2,3,4 stroke:#666,stroke-width:1px;

    note right of E: Lista clara de beneficios, estado, acceso a Wallet<br/>(Aborda dolor:
Dificultad para encontrar/entender beneficios Plus)

Flujo 9: Proceso para Conectar un Wearable (Básico) (SHOULD
HAVE)

Permite la integración con el ecosistema deportivo del usuario avanzado.

Puntos de Inicio: [Navegación Global] --> [Mi Perfil] --> [Sección/Enlace "Integración
Wearables"]

Punto de Fin: {Cuenta de Wearable Vinculada} / [Confirmación de Conexión Exitosa]
graph TD
    A[Navegación Global] --> B(Hacer clic en "Mi Perfil");
    B --> C[Página de Mi Perfil - Dashboard];
    C --> D(Hacer clic en sección/enlace<br/>"Integración Wearables");
    D --> E[Página de Integración Wearables];
    E --> F(Hacer clic en "Conectar"<br/>junto a un servicio);
    F --> G{Redirección a Página<br/>de Autorización Externa};
    G --> H(Iniciar Sesión en Servicio<br/>Autorizar Acceso);
    H --> I(Hacer clic en "Autorizar");
    I --> J{Redirección de vuelta<br/>a Asdeporte};
    J --> K{Conexión Exitosa?};
    K -->|Sí| L{Cuenta Vinculada};
    L --> M[Página de Integración Wearables];
    M --> N{Mostrar estado "Conectado"<br/>mensaje de éxito};
    N --> O[Punto de Fin];

    K -->|No| P[Página de Integración Wearables];
    P --> Q{Mostrar mensaje<br/>de error};
    Q --> E; % Volver a la página de integración

    linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 stroke:#666,stroke-width:1px;
    linkStyle 10 stroke:#0f0,stroke-width:2px;
    linkStyle 15 stroke:#f00,stroke-width:2px;

Flujo 10: Interacción con Notificaciones

Asegura que el usuario sea informado y pueda acceder a la información relevante.

Puntos de Inicio: {Notificación Push Recibida} / [Indicador de Notificación en Interfaz]
Punto de Fin: [Pantalla/Sección Relevante en la Plataforma]
graph TD
    A{Notificación Push<br/>Recibida} --> B(Usuario hace clic<br/>en Notificación Push);
    B --> C{Sistema abre App/Web};
    C --> D[Pantalla/Sección Relevante];
    D --> E[Punto de Fin];

    F[Indicador de Notificación<br/>en Interfaz] --> G(Usuario hace clic<br/>en
Indicador);
    G --> H[Centro de Notificaciones<br/>(Listado)];
    H --> I(Usuario hace clic<br/>en una Notificación);

    I --> J[Pantalla/Sección Relevante];
    J --> K[Punto de Fin];

    linkStyle 0,1,2,3,4,5,6,7,8,9 stroke:#666,stroke-width:1px;

