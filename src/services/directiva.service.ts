import type { DirectivaMember } from "@/Interfaces/directiva.interface";
import { directiva } from "@/mocks/directiva.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getDirectiva = async (): Promise<DirectivaMember[]> => {
  try {
    if (!API_URL) throw new Error("PUBLIC_API_URL no configurada");
    const endpoint = API_URL + "/directiva"
    console.log("Fetching directiva from", endpoint);
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("[getDirectiva] Usando mock. Razón:", (e as Error).message);
    return directiva;
  }
};
