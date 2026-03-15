import type { DirectivaMember } from '@/Interfaces/directiva.interface';

// Estilo avataaars: ilustración plana con cabello, ropa y rasgos faciales
const FEMALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ffb3c6&top=longHair&clothesColor=3c1645&clothingGraphic=bear&eyes=default&mouth=smile`;

const MALE_AVATAR = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b3d4f5&top=shortHair&clothesColor=3454a1&eyes=default&mouth=smile`;

export const directiva: DirectivaMember[] = [
  {
    id: '1',
    name: 'Lucía de Fátima Amaya Cáceda',
    rank: 'Presidenta',
    url: '/Imagenes/Directiva-SEDIPRO/PRESIDENTE - Lucía de Fátima Amaya Cáceda.jpg.jpeg',
    url_linked: '#',
    is_active: 'true'
  },
  {
    id: '2',
    name: 'Silvana Valeria Pereda Llave',
    rank: 'Vice-Presidenta',
    url: '/Imagenes/Directiva-SEDIPRO/VICEPRESIDENTE - Silvana Valeria Pereda Llave.jpg.jpeg',
    url_linked: '#',
    is_active: 'true'
  },
  {
    id: '3',
    name: 'María Fernanda de la Caridad Herrera Cerquín',
    rank: 'PMO',
    url: '/Imagenes/Directiva-SEDIPRO/PMO - María Fernanda de la Caridad Herrera Cerquín.jpg.jpeg',
    url_linked: '#',
    is_active: 'true'
  },
  {
    id: '4',
    name: 'Cristian Anthony Morales Esquivel',
    rank: 'TI',
    url: '/Imagenes/Directiva-SEDIPRO/TI - Cristian Anthony Morales Esquivel.jpg.jpeg',
    url_linked: '#',
    is_active: 'true'
  },
  {
    id: '5',
    name: 'Ángel Iparraguirre Aguilar',
    rank: 'Marketing',
    url: '/Imagenes/Directiva-SEDIPRO/MKT - Ángel Iparraguirre Aguilar.jpg.jpeg',
    url_linked: '#',
    is_active: 'true',
  },
  {
    id: '6',
    name: 'Marina Lizeth Gonzales Torres',
    rank: 'GTH',
    url: '/Imagenes/Directiva-SEDIPRO/GTH - Marina Lizeth Gonzales Torres.jpg.jpeg',
    url_linked: '#',
    is_active: 'true',
  },
  {
    id: '7',
    name: 'Diego Jesús Rodríguez Sabana',
    rank: 'Logística y Finanzas',
    url: '/Imagenes/Directiva-SEDIPRO/LOGISTICA - Diego Jesús Rodríguez Sabana.jpg.jpeg',
    url_linked: '#',
    is_active: 'true',
  },

];