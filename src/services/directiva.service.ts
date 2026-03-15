import type { DirectivaMember } from "@/Interfaces/directiva.interface";
import { directiva } from "@/mocks/directiva.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getDirectiva = async (): Promise<DirectivaMember[]> => {
  try {
    const res = await fetch(`${API_URL}/directiva`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return directiva;
  }
};
