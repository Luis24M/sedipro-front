import { ProyectosMock } from "@/mocks/proyectos.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getProyectos = async () => {
  try {
    const res = await fetch(`${API_URL}/proyectos`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return ProyectosMock;
  }
};
