import type { DirectivaMember } from '@/Interfaces/directiva.interface';

// Estilo avataaars: ilustración plana con cabello, ropa y rasgos faciales
const FEMALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ffb3c6&top=longHair&clothesColor=3c1645&clothingGraphic=bear&eyes=default&mouth=smile`;

const MALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b3d4f5&top=shortHair&clothesColor=3454a1&eyes=default&mouth=smile`;

export const directiva: DirectivaMember[] = [
  {
    name: 'Cinthya Gil Toribio',
    role: 'Presidenta',
    image: '/Imagenes/Directiva-SEDIPRO/SoledadGilToribio.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Romina Seclén',
    role: 'Vice-Presidenta',
    image:'/Imagenes/Directiva-SEDIPRO/Romina Seclen.jpeg' ,
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Ivanna Vela',
    role: 'PMO',
    image: '/Imagenes/Directiva-SEDIPRO/Ivanna Vela.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Christian Morales',
    role: 'TI',
    image: '/Imagenes/Directiva-SEDIPRO/Cristian Anthony Morales Esquivel.jpeg',
    linkedin: '#',
    gender: 'male',
  },
  {
    name: 'Adeli Valverde',
    role: 'Marketing',
    image: '/Imagenes/Directiva-SEDIPRO/Zulema Adeli Valverde Zavaleta.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Bricelly Ruiz',
    role: 'GTH',
    image: '/Imagenes/Directiva-SEDIPRO/Bricelly Ruiz.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Sebastian Facundo',
    role: 'Logística y Finanzas',
    image: '/Imagenes/Directiva-SEDIPRO/Sebastián Facundo.jpeg',
    linkedin: '#',
    gender: 'male',
  },
  {
    name: 'Lucia Amaya',
    role: 'Relaciones Públicas',
    image: '/Imagenes/Directiva-SEDIPRO/Lucía de Fátima Amaya Cáceda.jpg',
    linkedin: '#',
    gender: 'female',
  },
];