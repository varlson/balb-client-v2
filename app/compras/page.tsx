"use client";
import { getExpenses, getPurchaseList } from "@/api/api";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { purchases } from "@/constants/residents";
import { useAppContext } from "@/context/Page";
import { PurchaseType } from "@/types/types";
import React, { useEffect, useState } from "react";

function Page() {
  const [total, setTotal] = useState<number | null>(null);
  const [isCountng, setIsCountng] = useState(true);
  const { purchases } = useAppContext();

  useEffect(() => {
    if (purchases.length) {
      setTotal(
        Math.floor(
          purchases.reduce((acc, curr) => {
            return acc + curr.value;
          }, 0)
        )
      );

      setIsCountng(false);
    }
  }, [total, purchases]);

  return (
    <div>
      <div className=" mb-5 items-start justify-center flex flex-col">
        {isCountng ? (
          <Spinner col="" hei="50" wid="50" />
        ) : (
          <div className="flex flex-col ml-3 items-center">
            <p>Total de compras:</p>
            <p className="font-bold text-xl">{`${total} R$`}</p>
          </div>
        )}
      </div>
      <Purchases onlyLast={false} />
    </div>
  );
}

export default Page;
