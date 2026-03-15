import { contactoMock } from "@/mocks/contacto.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getContacto = async () => {
  try {
    const res = await fetch(`${API_URL}/contacto`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return contactoMock;
  }
};
