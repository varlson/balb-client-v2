import { PurchaseType } from "@/types/types";
import React from "react";
import LinkBtn from "../ui/LinkBtn";

type PuchaseProps = {
  purchases: PurchaseType;
};

function PurchaseCard(purchase: PuchaseProps) {
  const { author, desc, link, value, date } = purchase.purchases;

  return (
    <div className="my-2 p-2">
      <fieldset className="border p-2 shadow-md">
        <legend className="mx-3 px-4 text-xl font-bold">
          Compra: {`${value} R$`}
        </legend>

        <div className="mb-4">
          <p>{desc}</p>
        </div>
        <div className="flex gap-x-5 p-2 text-sm border-t mt-2 mb-1  justify-between items-center">
          <p>
            Feito por: <span className="mt-1 font-bold">{author}</span>
          </p>
          <p>{date}</p>
          <LinkBtn link={link} label="Comprovante" />
        </div>
      </fieldset>
    </div>
  );
}

export default PurchaseCard;
