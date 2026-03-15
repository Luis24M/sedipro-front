import { noticiasCompletasMock, NoticiasMock } from "@/mocks/noticias.mock";
import type { Noticia, NoticiaCompleta } from "@/Interfaces/noticia.interface";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getNoticias = async (): Promise<Noticia[]> => {
  try {
    const res = await fetch(`${API_URL}/noticias`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return NoticiasMock;
  }
};

export const getNoticiaById = async (id: number): Promise<NoticiaCompleta> => {
  try {
    const res = await fetch(`${API_URL}/noticias/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    const noticia = noticiasCompletasMock.find((n) => n.id === id);
    if (!noticia) throw new Error("Noticia no encontrada");
    return noticia;
  }
};
