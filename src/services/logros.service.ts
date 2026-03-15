import { Logros } from "@/mocks/logros.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getLogros = async () => {
  try {
    const res = await fetch(`${API_URL}/logros`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return Logros;
  }
};
