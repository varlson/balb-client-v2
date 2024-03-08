import { FineType, MonthStatusType } from "@/types/types";
const finesURL = process.env.NEXT_PUBLIC_FINE_URL;
const monthStatusURL = process.env.NEXT_PUBLIC_MONTH_STATUS;
const purchaseList = process.env.NEXT_PUBLIC_PURCHASE;
const all_data_URL = process.env.NEXT_PUBLIC_ALL_DATAS;
import axios, { AxiosInstance } from "axios";

// Criando uma instância personalizada do Axios com configurações padrão
const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4001/api", // URL base para todas as solicitações
  headers: {
    "Content-Type": "application/json",
    // Outros cabeçalhos personalizados, se necessário
  },
  // timeout: 5000,
});

export const getMonthStatus = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!monthStatusURL) {
        throw new Error("month status url invalido");
      }
      const resp = await axios.get(monthStatusURL);

      resolve(resp.data);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const getExpenses = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await customAxios.get("/expenses");

      resolve(resp);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const getFines = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!finesURL) {
        throw new Error("fines url invalido");
      }
      const resp = await axios.get(finesURL);
      resolve(resp.data);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const getPurchaseList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!purchaseList) {
        throw new Error("fines url invalido");
      }
      const resp = await axios.get(purchaseList);
      resolve(resp.data);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const fetchAllDatas = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!all_data_URL) {
        throw new Error("fines url invalido");
      }
      const resp = await axios.get(all_data_URL);
      console.log("from all data req");
      console.log(resp.data);
      resolve(resp.data);
    } catch (error: any) {
      console.log("from all data req");
      console.log(error.message);

      reject(error.message);
    }
  });
};
