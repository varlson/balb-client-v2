import { PurchaseType, ResidentType } from "@/types/types";

export const residetn1: ResidentType = {
  name: "Manito",
  status: [
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export const residetn2: ResidentType = {
  name: "Julio",
  status: [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export const residetn3: ResidentType = {
  name: "Julio",
  status: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export const _residents: ResidentType[] = [residetn1, residetn2, residetn3];

export const purchases: PurchaseType[] = [
  {
    desc: "Eletrônicos",
    note: "https://exemplo.com/imagem1",
    author: "João Silva",
    value: 1200.5,
  },
  {
    desc: "Roupas",
    note: "https://exemplo.com/imagem2",
    author: "Maria Oliveira",
    value: 350.75,
  },
  {
    desc: "Livros",
    note: "https://exemplo.com/imagem3",
    author: "Carlos Santos",
    value: 80.0,
  },
  {
    desc: "Alimentação",
    note: "https://exemplo.com/imagem4",
    author: "Ana Souza",
    value: 150.3,
  },
  {
    desc: "Acessórios",
    note: "https://exemplo.com/imagem5",
    author: "Lucas Pereira",
    value: 45.99,
  },
  {
    desc: "Produtos de Limpeza",
    note: "https://exemplo.com/imagem6",
    author: "Fernanda Lima",
    value: 30.5,
  },
  {
    desc: "Artigos Esportivos",
    note: "https://exemplo.com/imagem7",
    author: "Rafaela Costa",
    value: 200.0,
  },
];
