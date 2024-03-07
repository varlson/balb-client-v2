"use client ";
// import { purchases } from "@/constants/residents";

import React, { useEffect, useState } from "react";
import PurchaseCard from "./PurchaseCard";
import { getPurchaseList } from "@/api/api";
import { PurchaseType } from "@/types/types";
import { useAppContext } from "@/context/Page";

function Purchases({ onlyLast }: { onlyLast: boolean }) {
  // const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const { purchases, setFetchPurchases } = useAppContext();

  useEffect(() => {
    const fetchPurchases = async () => {
      getPurchaseList()
        .then((resp: any) => {
          const _purchases: PurchaseType[] = resp.data;
          console.log("resp get expenses");
          console.log(resp);
          setFetchPurchases(_purchases);
        })
        .catch((error) => {
          console.log("resp get expenses error");
          console.log(error);
        });
    };

    if (!purchases.length) {
      fetchPurchases();
    }
    // console.log("mounrted");
  }, [purchases, setFetchPurchases]);

  if (onlyLast)
    return (
      <div>
        <PurchaseCard purchases={purchases[purchases.length - 1]} />
      </div>
    );
  return (
    <div>
      {purchases.map((purch, index) => (
        <div key={index}>
          <PurchaseCard purchases={purch} />
        </div>
      ))}
    </div>
  );
}

export default Purchases;
