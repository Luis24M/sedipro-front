export interface Noticia {
  id: number;
  name: string;
  description: string;
  publishDate: string;
  image_url: string;
}

export interface NoticiaCompleta extends Noticia {
  content: string;
  author: string;
}