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

export const nameReducer = (name: string) => {
  if (name.split(" ").length >= 2) {
    const [_name, surname] = name.split(" ");
    return _name.substring(0, 4) + ". " + surname.substring(0, 1) + ".";
  } else if (name.length > 8) {
    return name.substring(0, 7) + ".";
  }

  return name;
};
