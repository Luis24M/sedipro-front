import { Preguntas } from "@/mocks/preguntas.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getPreguntas = async () => {
  try {
    if (!API_URL) throw new Error("PUBLIC_API_URL no configurada");
    const res = await fetch(`${API_URL}/preguntas`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("[getPreguntas] Usando mock. Razón:", (e as Error).message);
    return Preguntas;
  }
};
