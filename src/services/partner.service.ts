import { PartnersMock } from "@/mocks/partner.mock";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getPartners = async () => {
  try {
    const res = await fetch(`${API_URL}/partners`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return PartnersMock;
  }
};
