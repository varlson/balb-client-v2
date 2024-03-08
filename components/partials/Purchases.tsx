"use client ";
// import { purchases } from "@/constants/residents";

import React, { useEffect, useState } from "react";
import PurchaseCard from "./PurchaseCard";
import { getPurchaseList } from "@/api/api";
import { PurchaseType } from "@/types/types";
import { useAppContext } from "@/context/Page";

function Purchases({
  onlyLast,
  purchases,
}: {
  onlyLast: boolean;
  purchases: PurchaseType[];
}) {
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
