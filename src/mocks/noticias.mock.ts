import type { Noticia, NoticiaCompleta } from "@/Interfaces/noticia.interface";

export const NoticiasMock: Noticia[] = [
  {
    id: 1,
    title: "GESCONVIAL y SEDIPRO UNT",
    description:
      "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.",
    imageUrl: "/Imagenes/noticias/noticia1.jpeg",
    publishedAt: "2026-03-09T00:00:00Z",
  },
  {
    id: 2,
    title: "GENIALMENTE y SEDIPRO UNT",
    description:
      "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional.",
    imageUrl: "/Imagenes/noticias/noticia2.jpeg",
    publishedAt: "2026-03-06T00:00:00Z",
  },
  {
    id: 3,
    title: "¡Ya somos más de 1K! 🙌💜💙",
    description:
      "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos.",
    imageUrl: "/Imagenes/noticias/noticia3.jpeg",
    publishedAt: "2026-03-06T00:00:00Z",
  },
  {
    id: 4,
    title: "Aniversario de la fundación de Trujillo",
    description:
      "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como 'Ciudad de la Primavera'.",
    imageUrl: "/Imagenes/noticias/noticia4.jpeg",
    publishedAt: "2026-03-05T00:00:00Z",
  },
];

export const noticiasCompletasMock: NoticiaCompleta[] = [
  {
    id: 1,
    title: "GESCONVIAL y SEDIPRO UNT",
    description:
      "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura.",
    imageUrl: "/Imagenes/noticias/noticia1.jpeg",
    publishedAt: "2026-03-09T00:00:00Z",
    slug: "gesconvial-y-sedipro-unt",
    author: "SEDIPRO UNT",
    facebookUrl: "https://www.facebook.com/share/p/14XP3VxW2Lx/",
    linkedinUrl:
      "https://www.linkedin.com/posts/sediprount_%F0%9D%97%A5%F0%9D%97%B2%F0%9D%97%BB%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%BC%F0%9D%98%80-%F0%9D%97%BB%F0%9D%98%82%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%AE-%F0%9D%97%AE%F0%9D%97%B9-activity-7436943211576750080-tEo9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFUTHGIBFYJisst18sOd2IZwYuxA1TU81xU",
    content: `La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.`,
  },
  {
    id: 2,
    title: "GENIALMENTE y SEDIPRO UNT",
    description:
      "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas.",
    imageUrl: "/Imagenes/noticias/noticia2.jpeg",
    publishedAt: "2026-03-06T00:00:00Z",
    slug: "genialmente-y-sedipro-unt",
    author: "SEDIPRO UNT",
    facebookUrl: "https://www.facebook.com/share/p/1AjsUf5Aqt/",
    linkedinUrl:
      "https://www.linkedin.com/posts/sediprount_%F0%9D%97%A5%F0%9D%97%B2%F0%9D%97%BB%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%BC%F0%9D%98%80-%F0%9D%97%BB%F0%9D%98%82%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%AE-%F0%9D%97%AE%F0%9D%97%B9-activity-7435831779908816896-cdLS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFUTHGIBFYJisst18sOd2IZwYuxA1TU81xU",
    content: `La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional.`,
  },
  {
    id: 3,
    title: "¡Ya somos más de 1K! 🙌💜💙",
    description:
      "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos.",
    imageUrl: "/Imagenes/noticias/noticia3.jpeg",
    publishedAt: "2026-03-06T00:00:00Z",
    slug: "ya-somos-mas-de-1k",
    author: "SEDIPRO UNT",
    facebookUrl: "https://www.facebook.com/share/p/1AucQWgY9U/",
    linkedinUrl:
      "https://www.linkedin.com/posts/sediprount_sediprount-ipmc2025-orgullosedipro-activity-7435829596828119040-k_mb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFUTHGIBFYJisst18sOd2IZwYuxA1TU81xU",
    content: `La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos. Este logro refleja el compromiso y la participación activa de su comunidad, que impulsa la creación de oportunidades de aprendizaje, liderazgo y desarrollo profesional dentro de la Universidad Nacional de Trujillo. La organización reafirma así su propósito de seguir fortaleciendo el talento universitario y promoviendo la gestión de proyectos.`,
  },
  {
    id: 4,
    title: "Aniversario de la fundación de Trujillo",
    description:
      "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo.",
    imageUrl: "/Imagenes/noticias/noticia4.jpeg",
    publishedAt: "2026-03-05T00:00:00Z",
    slug: "aniversario-fundacion-trujillo",
    author: "SEDIPRO UNT",
    facebookUrl: "https://www.facebook.com/share/p/19MV3qsPqD/",
    linkedinUrl:
      "https://www.linkedin.com/posts/sediprount_trujillo491aaehos-fundaciaejndetrujillo-comunidadtrujillo-activity-7435430943588368385-XCtK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFUTHGIBFYJisst18sOd2IZwYuxA1TU81xU",
    content: `La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como "Ciudad de la Primavera", y reafirmando su compromiso de seguir contribuyendo al desarrollo y futuro de la ciudad mediante la formación y el impulso del talento universitario.`,
  },
];