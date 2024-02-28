"use client";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { purchases } from "@/constants/residents";
import React, { useEffect, useState } from "react";

function page() {
  const [total, setTotal] = useState<number | null>(null);
  const [isCountng, setIsCountng] = useState(true);
  useEffect(() => {
    const sum = purchases.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);

    setTotal(sum);

    if (total != null) {
      setIsCountng(false);
    }
  }, [total]);

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

export default page;
