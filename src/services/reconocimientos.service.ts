import { Reconocimientos } from "@/mocks/reconocimientos.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getReconocimientos = async () => {
  try {
    const res = await fetch(`${API_URL}/reconocimientos`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return Reconocimientos;
  }
};
