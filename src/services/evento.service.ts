import { EventosMock } from "@/mocks/evento.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getEventos = async () => {
  try {
    const res = await fetch(`${API_URL}/eventos`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return EventosMock;
  }
};
