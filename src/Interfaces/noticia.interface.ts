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

{
      "id": post.id,
      "name": post.title,
      "publishDate": post.publishDate,
      "shortDescription": post.shortDescription,
      "longDescription": post.longDescription,
      "image_url": post.imageUrl,
    }
