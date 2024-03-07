"use client";
import { FineType, PurchaseType } from "@/types/types";
import { createContext, useContext, useState } from "react";
type AppWrapperType = {
  fines: FineType[];
  setFetchFines: (fines: FineType[]) => void;
  algo: string;
  purchases: PurchaseType[];
  setFetchPurchases: (purchases: PurchaseType[]) => void;
};

const AppContext = createContext<AppWrapperType>({
  algo: "aaa",
  fines: [],
  setFetchFines: (fines: FineType[]) => {},
  setFetchPurchases: (purchases: PurchaseType[]) => {},
  purchases: [],
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({ algo: "Manito" });
  const [fines, setFines] = useState<FineType[]>([]);
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);

  const fetchFines = (_fines: FineType[]) => {
    setFines(_fines);
  };

  const fetchPurchase = (_purchses: PurchaseType[]) => {
    setPurchases(_purchses);
  };

  return (
    <AppContext.Provider
      value={{
        fines: fines,
        setFetchFines: fetchFines,
        algo: "Alguma",
        purchases: purchases,
        setFetchPurchases: fetchPurchase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
