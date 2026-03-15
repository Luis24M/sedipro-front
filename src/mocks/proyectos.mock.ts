import type { Proyecto } from "@/Interfaces/proyecto.interface";

export const ProyectosMock: Proyecto[] = [
  {
    titulo: "NAVISEDIPRO 2025",
    imagen: "/Imagenes/proyectos/navisedipro.jpeg",
    director: "Angela Loayza",
    descripcion:
      "NAVISEDIPRO, proyecto emblema de SEDIPRO UNT, el cual tiene como objetivo llevar alegría y entusiasmo de la navidad a los niños y niñas mas necesitados, que carecen de recursos económicos y de actividades recreativas. Recordemos que siempre podemos hacer la diferencia en los corazones de los más pequeños.",
    tags: ["Voluntariado", "Navidad", "Niños"],
  },
  {
    titulo: "SEDITALKS",
    imagen: "/Imagenes/proyectos/LOGO_SEDITALKxS.png",
    director: "Daniel Sánchez",
    descripcion:
      "SEDITALKS es un evento que ofrece conferencias estilo TED, lideradas por profesionales con amplia experiencia en gestión organizacional. El evento busca brindar a los asistentes conocimientos aplicables, oportunidades de networking, acceso a material exclusivo y dinámicas que fomentan el crecimiento profesional.",
    tags: ["Conferencias", "TED", "Networking"],
  },
  {
    titulo: "Proyectando Vocaciones 3.0",
    imagen: "/Imagenes/proyectos/pv_3_logo.png",
    director: "Cielo Abanto",
    descripcion:
      "Proyectando Vocaciones 3.0 es un proyecto de SEDIPRO UNT que orienta a estudiantes preuniversitarios de colegios y academias de La Libertad para que tomen una decisión informada sobre su futura carrera en la Universidad Nacional de Trujillo.",
    tags: ["Orientación", "Preuniversitario", "UNT"],
  },
  {
    titulo: "SEDIPATITAS",
    imagen: "/Imagenes/proyectos/sedipatitas.jpeg",
    director: "Celine Huaman",
    descripcion:
      "Sedipatitas Felices es una iniciativa impulsada por la organización estudiantil SediproUNT, con el objetivo de brindar ayuda a animalitos en situación de abandono. Actualmente, un pequeño refugio cuida con amor a muchos perritos y gatitos. Nuestro proyecto busca apoyarlos a través de la recolección de alimentos, medicinas y donaciones económicas.",
    tags: ["Animales", "Voluntariado", "Refugio"],
  },
];