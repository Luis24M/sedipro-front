import type { DirectivaMember } from '@/Interfaces/directiva.interface';

// Estilo avataaars: ilustración plana con cabello, ropa y rasgos faciales
const FEMALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ffb3c6&top=longHair&clothesColor=3c1645&clothingGraphic=bear&eyes=default&mouth=smile`;

const MALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b3d4f5&top=shortHair&clothesColor=3454a1&eyes=default&mouth=smile`;

export const directiva: DirectivaMember[] = [
  {
    name: 'Lucía de Fátima Amaya Cáceda',
    role: 'Presidenta',
    image: '/Imagenes/Directiva-SEDIPRO/PRESIDENTE - Lucía de Fátima Amaya Cáceda.jpg.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Silvana Valeria Pereda Llave',
    role: 'Vice-Presidenta',
    image:'/Imagenes/Directiva-SEDIPRO/VICEPRESIDENTE - Silvana Valeria Pereda Llave.jpg.jpeg' ,
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'María Fernanda de la Caridad Herrera Cerquín',
    role: 'PMO',
    image: '/Imagenes/Directiva-SEDIPRO/PMO - María Fernanda de la Caridad Herrera Cerquín.jpg.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Cristian Anthony Morales Esquivel',
    role: 'TI',
    image: '/Imagenes/Directiva-SEDIPRO/TI - Cristian Anthony Morales Esquivel.jpg.jpeg',
    linkedin: '#',
    gender: 'male',
  },
  {
    name: 'Ángel Iparraguirre Aguilar',
    role: 'Marketing',
    image: '/Imagenes/Directiva-SEDIPRO/MKT - Ángel Iparraguirre Aguilar.jpg.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Marina Lizeth Gonzales Torres',
    role: 'GTH',
    image: '/Imagenes/Directiva-SEDIPRO/GTH - Marina Lizeth Gonzales Torres.jpg.jpeg',
    linkedin: '#',
    gender: 'female',
  },
  {
    name: 'Diego Jesús Rodríguez Sabana',
    role: 'Logística y Finanzas',
    image: '/Imagenes/Directiva-SEDIPRO/LOGISTICA - Diego Jesús Rodríguez Sabana.jpg.jpeg',
    linkedin: '#',
    gender: 'male',
  },

];