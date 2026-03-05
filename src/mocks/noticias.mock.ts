export const NoticiasMock: Noticia[] = [
  {
    id: 1,
    title: "Sedipro lanza nueva plataforma de gestión de proyectos",
    description: "Sedipro ha lanzado una nueva plataforma que facilita la gestión de proyectos para empresas de todos los tamaños, optimizando el flujo de trabajo remoto.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    publishedAt: "2024-06-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Integración con Inteligencia Artificial para análisis de datos",
    description: "La nueva actualización permite analizar métricas de rendimiento utilizando algoritmos avanzados de IA para predecir cuellos de botella.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Taller Gratuito: Metodologías Ágiles en 2024",
    description: "Únete a nuestros expertos este fin de semana para aprender cómo aplicar Scrum y Kanban en equipos distribuidos globalmente.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-10T09:00:00Z",
  },
  {
    id: 4,
    title: "Nueva App Móvil para seguimiento en tiempo real",
    description: "Ya está disponible la versión beta de nuestra aplicación móvil, permitiendo a los gestores aprobar tareas desde cualquier lugar.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-12T16:45:00Z",
  },
  {
    id: 5,
    title: "Alianza estratégica para mejorar la ciberseguridad",
    description: "Hemos firmado un acuerdo con líderes en seguridad informática para garantizar que tus datos estén protegidos con encriptación de grado militar.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-15T11:20:00Z",
  },
  {
    id: 6,
    title: "Reporte anual: El futuro del trabajo híbrido",
    description: "Descarga nuestro último reporte sobre las tendencias que definirán el entorno laboral en la próxima década según nuestros datos.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-20T08:15:00Z",
  }
];


export const noticiasCompletasMock: NoticiaCompleta[] = [
  {
    id: 1,
    title: "Sedipro lanza nueva plataforma de gestión de proyectos",
    description: "Sedipro ha lanzado una nueva plataforma que facilita la gestión de proyectos para empresas de todos los tamaños.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    publishedAt: "2024-06-01T10:00:00Z",
    slug: "sedipro-lanza-nueva-plataforma-gestion",
    author: "Ana Martínez",
    content: `Tras meses de desarrollo y pruebas beta con más de 50 empresas líderes, Sedipro ha lanzado oficialmente su nueva plataforma de gestión de proyectos. Esta herramienta promete revolucionar la forma en que los equipos colaboran, ofreciendo una interfaz intuitiva y potentes funcionalidades de automatización.

Entre las características más destacadas se encuentran la integración nativa con herramientas de terceros como Slack y GitHub, así como un sistema de reportes en tiempo real que utiliza aprendizaje automático para predecir posibles retrasos en las entregas. "Nuestro objetivo es que la tecnología trabaje para el equipo, y no al revés", mencionó el CEO durante la presentación.

La plataforma ya está disponible para el público general con planes escalables que se adaptan desde startups hasta grandes corporaciones. Los primeros usuarios han reportado un aumento del 30% en la productividad durante las primeras semanas de uso.`
  },
  {
    id: 2,
    title: "Integración con Inteligencia Artificial para análisis de datos",
    description: "La nueva actualización permite analizar métricas de rendimiento utilizando algoritmos avanzados de IA.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-05T14:30:00Z",
    slug: "integracion-ia-analisis-datos",
    author: "Carlos Ruiz",
    content: `El análisis de datos ha dado un salto cuántico con nuestra última actualización. Hemos integrado modelos de Inteligencia Artificial capaces de procesar grandes volúmenes de información en segundos, identificando patrones que serían invisibles para el ojo humano.

Esta funcionalidad no solo muestra lo que ha pasado, sino que sugiere acciones correctivas. Por ejemplo, si el sistema detecta que un sprint tiene riesgo de no completarse, sugerirá automáticamente la redistribución de tareas basándose en la carga histórica de cada desarrollador.

La seguridad de los datos ha sido una prioridad en esta implementación. Todos los procesos de análisis se realizan bajo estrictos protocolos de encriptación, garantizando que la información sensible de las empresas nunca se vea comprometida.`
  },
  {
    id: 3,
    title: "Taller Gratuito: Metodologías Ágiles en 2024",
    description: "Únete a nuestros expertos para aprender cómo aplicar Scrum y Kanban en equipos distribuidos.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-10T09:00:00Z",
    slug: "taller-gratuito-metodologias-agiles-2024",
    author: "Laura Gómez",
    content: `El mundo del desarrollo de software cambia rápidamente, y las metodologías ágiles deben adaptarse. Este fin de semana, organizamos un taller intensivo y gratuito enfocado en la aplicación de Scrum y Kanban en entornos de trabajo 100% remotos o híbridos.

Contaremos con la presencia de Agile Coaches certificados que compartirán sus experiencias gestionando equipos en diferentes zonas horarias. Se tratarán temas como la "fatiga de Zoom", la comunicación asíncrona efectiva y cómo mantener la cultura de equipo a distancia.

Las inscripciones están abiertas hasta el viernes. No pierdas la oportunidad de actualizar tus conocimientos y hacer networking con otros profesionales del sector.`
  },
  {
    id: 4,
    title: "Nueva App Móvil para seguimiento en tiempo real",
    description: "Ya está disponible la versión beta de nuestra aplicación móvil para gestores.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-12T16:45:00Z",
    slug: "nueva-app-movil-seguimiento",
    author: "Equipo de Producto",
    content: `Sabemos que la gestión de proyectos no siempre ocurre frente a un escritorio. Por eso, nos emociona anunciar el lanzamiento de nuestra aplicación móvil nativa, diseñada para mantener el control de tus proyectos desde cualquier lugar.

Con la nueva app, podrás aprobar solicitudes, responder comentarios urgentes y visualizar el estado de los tableros Kanban directamente desde tu smartphone. La interfaz ha sido optimizada para facilitar la navegación con una sola mano y cuenta con un modo oscuro para trabajar cómodamente en cualquier entorno.

Actualmente disponible en beta para iOS y Android, invitamos a todos nuestros usuarios a descargarla y enviarnos su feedback para seguir mejorando.`
  },
  {
    id: 5,
    title: "Alianza estratégica para mejorar la ciberseguridad",
    description: "Acuerdo con líderes en seguridad informática para blindar tus datos.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-15T11:20:00Z",
    slug: "alianza-estrategica-ciberseguridad",
    author: "Roberto Díaz",
    content: `En un entorno digital donde las amenazas son cada vez más sofisticadas, la seguridad no es una opción, es una necesidad. Nos complace anunciar nuestra alianza estratégica con CyberSecure Global, líder mundial en protección de datos corporativos.

Gracias a esta colaboración, nuestra plataforma ahora cuenta con monitoreo de amenazas 24/7 y auditorías de seguridad automatizadas. Además, hemos implementado la autenticación de doble factor (2FA) obligatoria para cuentas administrativas, reduciendo drásticamente el riesgo de accesos no autorizados.

Esta alianza reafirma nuestro compromiso de ofrecer no solo la herramienta más eficiente, sino también la más segura del mercado para tu empresa.`
  },
  {
    id: 6,
    title: "Reporte anual: El futuro del trabajo híbrido",
    description: "Descarga nuestro reporte sobre las tendencias laborales de la próxima década.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2024-06-20T08:15:00Z",
    slug: "reporte-anual-futuro-trabajo-hibrido",
    author: "Sofía Vance",
    content: `¿Hacia dónde se dirige el mundo laboral? Hemos encuestado a más de 5,000 profesionales de TI y gerentes de proyecto para elaborar nuestro "Reporte Anual sobre el Futuro del Trabajo". Los resultados son reveladores.

El estudio destaca que el 78% de las empresas planea mantener un modelo híbrido permanentemente. Sin embargo, el mayor desafío reportado no es la tecnología, sino la desconexión emocional entre los miembros del equipo. El reporte ofrece estrategias prácticas para líderes que buscan fomentar la cohesión en entornos digitales.

Puedes descargar el documento completo en formato PDF desde nuestra sección de recursos. Es una lectura obligatoria para cualquier líder que quiera preparar a su organización para los retos de la próxima década.`
  }
];