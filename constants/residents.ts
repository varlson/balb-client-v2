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

export const finesFakes: FineType[] = [
  {
    resident_name: "João Silva",
    status: true,
    date: "2024-02-28",
    about: "Estacionamento indevido",
  },
  {
    resident_name: "Maria Oliveira",
    status: false,
    date: "2024-02-27",
    about: "Barulho excessivo",
  },
  {
    resident_name: "Carlos Santos",
    status: true,
    date: "2024-02-26",
    about: "Lixo não recolhido",
  },
  {
    resident_name: "Ana Souza",
    status: false,
    date: "2024-02-25",
    about: "Animal de estimação solto",
  },
  {
    resident_name: "Pedro Pereira",
    status: true,
    date: "2024-02-24",
    about: "Danos à propriedade comum",
  },
  {
    resident_name: "Fernanda Costa",
    status: false,
    date: "2024-02-23",
    about: "Uso indevido das áreas comuns",
  },
  {
    resident_name: "Rodrigo Santos",
    status: true,
    date: "2024-02-22",
    about: "Violando regras de segurança",
  },
];
