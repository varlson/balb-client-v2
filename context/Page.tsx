"use client";
import { fetchAllDatas } from "@/api/api";
import {
  AllDataResponseType,
  AllDataType,
  FineType,
  MonthStatusType,
  PurchaseType,
  ResumeType,
} from "@/types/types";
import { finesSorter } from "@/util/util";
import { createContext, useContext, useState } from "react";
type AppWrapperType = {
  fines: FineType[];
  purchases: PurchaseType[];
  dataLoader: () => Promise<unknown>;
  error: string | null;
  monthStatus: MonthStatusType[];
  resume: ResumeType;
};

const defaultResume = {
  initialBalance: 0,
  totalUsed: 0,
  currentBalance: 0,
  currentMonth: "",
};

const AppContext = createContext<AppWrapperType>({
  fines: [],
  dataLoader: async () => {},
  purchases: [],
  error: null,
  monthStatus: [],
  resume: defaultResume,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({ algo: "Manito" });
  const [fines, setFines] = useState<FineType[]>([]);
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const [monthStatus, setMonthStatus] = useState<MonthStatusType[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [resume, setResume] = useState<ResumeType>(defaultResume);

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
          setMonthStatus(resp.data.monthStatus);
          const _resume: ResumeType = resp.data.resume;

          _resume.currentBalance = parseFloat(
            _resume.currentBalance.toFixed(2)
          );
          _resume.totalUsed = parseFloat(_resume.totalUsed.toFixed(2));
          _resume.initialBalance = parseFloat(
            _resume.initialBalance.toFixed(2)
          );

          setResume(_resume);
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
        monthStatus: monthStatus,
        resume: resume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
