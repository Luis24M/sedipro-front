import { noticiasCompletasMock, NoticiasMock } from "@/mocks/noticias.mock";

export const getNoticias = async () => {
  const response = NoticiasMock;
  return response;
}

export const getNoticiaById = async (id: number) => {
  const noticia = noticiasCompletasMock.find(n => n.id === id);
  if (!noticia) {
    throw new Error('Noticia no encontrada');
  }
  return noticia;
}