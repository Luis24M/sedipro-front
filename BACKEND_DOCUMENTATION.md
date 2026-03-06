# Documentación para Backend - SEDIPRO UNT

Esta guía define las entidades, campos y tipos de datos necesarios para alimentar el frontend y permitir su administración dinámica a través de un panel de control (admin).

## 1. Configuración Global y Footer
*Esta entidad debe ser única (Singleton) y controla la información general que aparece en todas las páginas.*

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `logoUrl` | String (URL) | Logo principal del sitio (usado en Navbar y Footer). |
| `faviconUrl` | String (URL) | Icono de la pestaña del navegador. |
| `address` | String | Dirección física (ej: "123 Consectetur at ligula 10660"). |
| `phone` | String | Teléfono de contacto (formato visible). |
| `whatsapp` | String | Número de WhatsApp (solo dígitos, ej: "51970153565"). |
| `email` | String | Correo electrónico de contacto institucional. |
| `facebookUrl` | String (URL) | Link a la página oficial de Facebook. |
| `instagramUrl` | String (URL) | Link al perfil de Instagram. |
| `youtubeUrl` | String (URL) | Link al canal de YouTube. |
| `linkedinUrl` | String (URL) | Link a la página de LinkedIn. |

## 2. Sección Inicio (Welcome)
*Controla el banner principal de la página de aterrizaje.*

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | String | Título principal (ej: "Bienvenido a SEDIPRO UNT"). |
| `description` | Text | Descripción/Subtítulo que aparece debajo del título. |
| `backgroundImageUrl`| String (URL) | Imagen de fondo de alta resolución para el banner. |

## 3. Sección Nosotros
*Información institucional de la organización.*

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `whoWeAreDescription` | Text | Texto descriptivo de la sección "¿Quiénes somos?". |
| `missionTitle` | String | Título de la Misión (ej: "Nuestra Misión"). |
| `missionDescription` | Text | Texto detallado de la misión. |
| `missionIcon` | String (URL/SVG) | Icono o ilustración para la misión. |
| `visionTitle` | String | Título de la Visión (ej: "Nuestra Visión"). |
| `visionDescription` | Text | Texto detallado de la visión. |
| `visionIcon` | String (URL/SVG) | Icono o ilustración para la visión. |

## 4. Gestión de Títulos de la Home
*Permite cambiar los nombres de las secciones en la página principal sin tocar el código.*

- `logrosTitle` (Ej: "Logros")
- `reconocimientosTitle` (Ej: "Reconocimientos")
- `directivaTitle` (Ej: "Directiva")
- `proyectosTitle` (Ej: "Proyectos")
- `eventosTitle` (Ej: "Próximos Eventos")
- `noticiasTitle` (Ej: "Noticias")
- `aliadosTitle` (Ej: "Aliados")
- `faqTitle` (Ej: "Preguntas Frecuentes")
- `contactoTitle` (Ej: "Contáctanos")

## 5. Entidades de Contenido

### 5.1 Logros (Achievements)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `number` | String | Valor (ej: "50+", "10"). |
| `label` | String | Descripción del logro (ej: "Proyectos Realizados"). |
| `icon` | String | Emoji o identificador de icono. |
| `order` | Integer | Posición en la grilla. |

### 5.2 Reconocimientos (Awards)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `titulo` | String | Nombre del premio. |
| `fecha` | String | Fecha (ej: "Marzo 2024"). |
| `descripcion` | Text | Detalle del reconocimiento. |
| `icono` | Enum | `copa`, `medalla`, `estrella`. |

### 5.3 Directiva (Board Members)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `name` | String | Nombre completo. |
| `role` | String | Cargo (ej: "Presidente"). |
| `image` | String (URL) | Foto de perfil. |
| `linkedin` | String (URL) | Link al perfil profesional. |
| `gender` | Enum | `male` o `female`. |
| `order` | Integer | Orden de jerarquía en la visualización. |

### 5.4 Proyectos
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `titulo` | String | Nombre del proyecto. |
| `imagen` | String (URL) | Imagen de portada. |
| `director` | String | Nombre del responsable. |
| `descripcion` | Text | Resumen ejecutivo. |
| `tags` | Array[String] | Categorías (ej: ["Social", "Agile"]). |

### 5.5 Eventos
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | String | Nombre del evento. |
| `date` | DateTime | Fecha y hora programada (ISO 8601). |
| `type` | Enum | `webinar`, `taller`, `convocatoria`. |

### 5.6 Noticias
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | String | Título de la noticia. |
| `slug` | String | URL amigable (Único). |
| `description` | Text | Resumen para el listado inicial. |
| `content` | Rich Text / HTML| Cuerpo completo de la noticia. |
| `imageUrl` | String (URL) | Imagen destacada. |
| `publishedAt` | Date | Fecha de publicación manual. |
| `author` | String | Nombre del autor. |

### 5.7 Aliados (Partners)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `name` | String | Nombre de la empresa/organización. |
| `logoUrl` | String (URL) | Logo oficial. |
| `websiteUrl` | String (URL) | Link a su web oficial. |
| `order` | Integer | Orden en el carrusel. |

### 5.8 Preguntas Frecuentes (FAQ)
| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `question` | String | La pregunta frecuente. |
| `answer` | Text | La respuesta detallada. |
| `order` | Integer | Orden de aparición. |

---

## Observaciones Generales para la Implementación

1. **URLs de Imágenes**: El backend debe retornar la URL completa y absoluta de las imágenes alojadas en el servidor o CDN.
2. **Campos de Orden**: Es vital incluir un campo `order` en entidades de lista (Aliados, Logros, Directiva, FAQ) para que el administrador pueda priorizar qué se muestra primero.
3. **Slugs Únicos**: Para las noticias, el `slug` debe ser validado como único, ya que se usará para el renderizado dinámico de rutas en Astro.
4. **Fechas**: Utilizar estándares ISO 8601 para facilitar el formateo en el frontend según la localidad.
5. **Panel Admin**: Se recomienda que el admin permita la previsualización de las imágenes cargadas para evitar errores de diseño.
6. **Configuración Singleton**: La sección "Global Config", "Welcome" y "Nosotros" deben ser registros únicos en la base de datos para evitar duplicidad de información base.
