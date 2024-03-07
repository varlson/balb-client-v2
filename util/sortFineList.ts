import { FineType } from "@/types/types";

export const finesSorter = (fines: FineType[]) => {
  const listaOrdenada = fines.sort((a: FineType, b: FineType) => {
    const nomeA = a.date.toUpperCase(); // Ignora maiúsculas/minúsculas
    const nomeB = b.date.toUpperCase(); // Ignora maiúsculas/minúsculas

    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }

    return 0; // Nomes iguais
  });

  return listaOrdenada;
};
