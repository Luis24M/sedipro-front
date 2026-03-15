import { Preguntas } from "@/mocks/preguntas.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getPreguntas = async () => {
  try {
    const res = await fetch(`${API_URL}/preguntas`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return Preguntas;
  }
};
