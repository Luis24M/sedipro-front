import { noticiasCompletasMock, NoticiasMock } from "@/mocks/noticias.mock";
import type { Noticia, NoticiaCompleta } from "@/Interfaces/noticia.interface";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getNoticias = async (): Promise<Noticia[]> => {
  try {
    if (!API_URL) throw new Error("PUBLIC_API_URL no configurada");
    const res = await fetch(`${API_URL}/noticias`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("[getNoticias] Usando mock. Razón:", (e as Error).message);
    return NoticiasMock;
  }
};

export const getNoticiaById = async (id: number): Promise<NoticiaCompleta> => {
  try {
    if (!API_URL) throw new Error("PUBLIC_API_URL no configurada");
    const res = await fetch(`${API_URL}/noticias/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`[getNoticiaById ${id}] Usando mock. Razón:`, (e as Error).message);
    const noticia = noticiasCompletasMock.find((n) => n.id === id);
    if (!noticia) throw new Error("Noticia no encontrada");
    return noticia;
  }
};
