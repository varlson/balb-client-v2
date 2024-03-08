"use client";
import { fetchAllDatas } from "@/api/api";
import {
  AllDataResponseType,
  AllDataType,
  FineType,
  PurchaseType,
} from "@/types/types";
import { finesSorter } from "@/util/sortFineList";
import { createContext, useContext, useState } from "react";
type AppWrapperType = {
  fines: FineType[];
  purchases: PurchaseType[];
  dataLoader: () => Promise<unknown>;
  error: string | null;
};

const AppContext = createContext<AppWrapperType>({
  fines: [],
  dataLoader: async () => {},
  purchases: [],
  error: null,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({ algo: "Manito" });
  const [fines, setFines] = useState<FineType[]>([]);
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const [error, setError] = useState<null | string>(null);

  const fetchFines = (_fines: FineType[]) => {
    setFines(_fines);
  };

  const fetchPurchase = (_purchses: PurchaseType[]) => {
    setPurchases(_purchses);
  };

  const loader = async () => {
    return new Promise((resolve, reject) => {
      fetchAllDatas()
        .then((resp: any) => {
          // const respTyped: AllDataType = resp;
          setFines(finesSorter(resp.data.fines));
          setPurchases(resp.data.purchase);
          resolve("ok");
        })
        .catch((error: any) => {
          setError(error.message);
          reject(error.message);
        });
    });
  };

  return (
    <AppContext.Provider
      value={{
        fines: fines,
        purchases: purchases,
        dataLoader: loader,
        error: error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
