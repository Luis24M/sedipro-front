interface Noticia {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string; 
}

interface NoticiaCompleta extends Noticia {
  content: string;
  author: string;
  slug: string;
}
