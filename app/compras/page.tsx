"use client";
import { getExpenses, getPurchaseList } from "@/api/api";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import { PurchaseType } from "@/types/types";
import React, { useEffect, useState } from "react";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const { purchases, dataLoader, resume } = useAppContext();

  useEffect(() => {
    const loadDatas = async () => {
      await dataLoader();
      setIsLoading(false);
    };

    if (!purchases.length) {
      loadDatas();
    } else {
      setIsLoading(false);
    }
  }, [dataLoader, purchases]);

  if (isLoading) {
    return (
      <div className="main flex items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex my-4">
        <p className="text-2xl font-bold p-2">Compras de Mês:</p>
      </div>
      <div className=" mb-5 items-start justify-center flex flex-col">
        <div className="flex flex-col ml-3 items-center">
          <p className="font-semibold">Total de compras:</p>
          <p className="font-bold text-xl">{`${resume.totalUsed} R$`}</p>
        </div>
      </div>
      <Purchases onlyLast={false} purchases={purchases} />
    </div>
  );
}

export default Page;
