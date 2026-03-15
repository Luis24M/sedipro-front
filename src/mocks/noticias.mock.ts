import type { Noticia, NoticiaCompleta } from "@/Interfaces/noticia.interface";

export const NoticiasMock: Noticia[] = [
  {
    id: 1,
    name: "GESCONVIAL y SEDIPRO UNT",
    shortDescription:
      "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.",
    longDescription: "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.",
    image_url: "/Imagenes/noticias/noticia1.jpeg",
    // tipo date
    publishDate: "2026-03-09T00:00:00Z", 
  },
  {
    id: 2,
    name: "GENIALMENTE y SEDIPRO UNT",
    shortDescription:
      "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional.",
    longDescription: "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional.",
    image_url: "/Imagenes/noticias/noticia2.jpeg",
    publishDate: "2026-03-06T00:00:00Z",
  },
  {
    id: 3,
    name: "¡Ya somos más de 1K! 🙌💜💙",
    shortDescription:
      "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos.",
    longDescription: "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos. Este logro refleja el compromiso y la participación activa de su comunidad, que impulsa la creación de oportunidades de aprendizaje, liderazgo y desarrollo profesional dentro de la Universidad Nacional de Trujillo. La organización reafirma así su propósito de seguir fortaleciendo el talento universitario y promoviendo la gestión de proyectos.",
    image_url: "/Imagenes/noticias/noticia3.jpeg",
    publishDate: "2026-03-06T00:00:00Z",
  },
  {
    id: 4,
    name: "Aniversario de la fundación de Trujillo",
    shortDescription:
      "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como 'Ciudad de la Primavera'.",
    longDescription: "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como 'Ciudad de la Primavera'.",
    image_url: "/Imagenes/noticias/noticia4.jpeg",
    publishDate: "2026-03-05T00:00:00Z",
  },
];

export const noticiasCompletasMock: NoticiaCompleta[] = [
  {
    id: 1,
    name: "GESCONVIAL y SEDIPRO UNT",
    shortDescription:
      "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura.",
    longDescription: "La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.",
    image_url: "/Imagenes/noticias/noticia1.jpeg",
    publishDate: "2026-03-09T00:00:00Z",
    author: "SEDIPRO UNT",
    content: `La alianza entre GESCONVIAL y SEDIPRO UNT se renueva con el objetivo de fortalecer la formación de estudiantes y profesionales de Ingeniería y Arquitectura, ofreciendo capacitaciones especializadas y certificaciones respaldadas por el Colegio de Ingenieros del Perú, impulsando así el desarrollo del talento profesional.`,
  },
  {
    id: 2,
    name: "GENIALMENTE y SEDIPRO UNT",
    shortDescription:
      "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas.",
    longDescription: "La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional.",
    image_url: "/Imagenes/noticias/noticia2.jpeg",
    publishDate: "2026-03-06T00:00:00Z",
    author: "SEDIPRO UNT",
    content: `La alianza entre GENIALMENTE y SEDIPRO UNT se renueva para impulsar la transformación de personas, equipos y culturas a través de coaching, mentoring y desarrollo de marca personal, generando oportunidades que conectan el talento universitario con empresas y fomentan el crecimiento profesional`,
  },
  {
    id: 3,
    name: "¡Ya somos más de 1K! 🙌💜💙",
    shortDescription:
      "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos.",
    longDescription: "La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos. Este logro refleja el compromiso y la participación activa de su comunidad, que impulsa la creación de oportunidades de aprendizaje, liderazgo y desarrollo profesional dentro de la Universidad Nacional de Trujillo. La organización reafirma así su propósito de seguir fortaleciendo el talento universitario y promoviendo la gestión de proyectos.",
    image_url: "/Imagenes/noticias/noticia3.jpeg",
    publishDate: "2026-03-06T00:00:00Z",
    author: "SEDIPRO UNT",
    content: `La comunidad de SEDIPRO UNT superó los 1,000 seguidores, consolidándose como un espacio en crecimiento para estudiantes interesados en la Dirección de Proyectos. Este logro refleja el compromiso y la participación activa de su comunidad, que impulsa la creación de oportunidades de aprendizaje, liderazgo y desarrollo profesional dentro de la Universidad Nacional de Trujillo. La organización reafirma así su propósito de seguir fortaleciendo el talento universitario y promoviendo la gestión de proyectos.`,
  },
  {
    id: 4,
    name: "Aniversario de la fundación de Trujillo",
    shortDescription:
      "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo.",
    longDescription: "La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como 'Ciudad de la Primavera'.",
    image_url: "/Imagenes/noticias/noticia4.jpeg",
    publishDate: "2026-03-05T00:00:00Z",
    author: "SEDIPRO UNT",
    content: `La familia de SEDIPRO UNT se unió a la celebración del aniversario de fundación de Trujillo, rindiendo homenaje a su historia, cultura y legado como "Ciudad de la Primavera", y reafirmando su compromiso de seguir contribuyendo al desarrollo y futuro de la ciudad mediante la formación y el impulso del talento universitario.`,
  },
];