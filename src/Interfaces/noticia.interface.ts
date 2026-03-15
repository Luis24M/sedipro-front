

export interface NoticiaCompleta extends Noticia {
  content: string;
  author: string;
}
export interface Noticia {
  id:               number;
  name:             string;
  publishDate:      Date | string;
  shortDescription: string;
  longDescription:  string;
  image_url:        string;
}
