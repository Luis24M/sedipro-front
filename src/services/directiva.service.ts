import type { DirectivaMember } from "@/Interfaces/directiva.interface"
import { directiva } from "@/mocks/directiva.mock"

export const getDirectiva = async (): Promise<DirectivaMember[]> => {
  const response = directiva
  return response
}