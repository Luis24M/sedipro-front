import { Demo } from "@/mocks/demo.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getDemo = async () => {
  try {
    const res = await fetch(`${API_URL}/demo`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return Demo;
  }
};
