"use client";
import { getExpenses, getPurchaseList } from "@/api/api";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { purchases } from "@/constants/residents";
import { useAppContext } from "@/context/Page";
import { PurchaseType } from "@/types/types";
import React, { useEffect, useState } from "react";

function Page() {
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCountng, setIsCountng] = useState(true);
  const { purchases, dataLoader } = useAppContext();

  const count = () => {
    let sum = 0;
    for (let item of purchases) {
      sum += item.value;
    }

    return sum;
  };

  useEffect(() => {
    const loadDatas = async () => {
      await dataLoader();
      setIsLoading(false);
      setTotal(count());
      setIsCountng(false);
    };

    if (!purchases.length) {
      loadDatas();
    } else {
      const _total = purchases.reduce((pre, curr) => {
        return pre + curr.value;
      }, 0);
      setTotal(count());
      setIsCountng(false);
    }
  }, [count, dataLoader, purchases]);

  if (isLoading) {
    return (
      <div className="main flex items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );
  }

  return (
    <div>
      <div className=" mb-5 items-start justify-center flex flex-col">
        {total == 0 ? (
          <Spinner col="" hei="50" wid="50" />
        ) : (
          <div className="flex flex-col ml-3 items-center">
            <p>Total de compras:</p>
            <p className="font-bold text-xl">{`${total} R$`}</p>
          </div>
        )}
      </div>
      <Purchases onlyLast={false} purchases={purchases} />
    </div>
  );
}

export default Page;
