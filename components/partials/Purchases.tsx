import { purchases } from "@/constants/residents";

import React from "react";
import PurchaseCard from "./PurchaseCard";

function Purchases({ onlyLast }: bool) {
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
