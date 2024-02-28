import { MonthStatusType } from "@/types/types";

import axios, { AxiosInstance } from "axios";

// Criando uma instância personalizada do Axios com configurações padrão
const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4001/api", // URL base para todas as solicitações
  headers: {
    "Content-Type": "application/json",
    // Outros cabeçalhos personalizados, se necessário
  },
});

export const getMonthStatus = async () => {
  return new Promise<MonthStatusType>(async (resolve, reject) => {
    try {
      const resp = await customAxios.get("/month-status");

      resolve(resp);
    } catch (error: any) {
      reject(error.message);
    }
  });
};
