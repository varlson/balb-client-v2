import { PurchaseType } from "@/types/types";
import Link from "next/link";
import React from "react";
import LinkBtn from "../ui/LinkBtn";

type PuchaseProps = {
  purchases: PurchaseType;
};

function Purchase(purchase: PuchaseProps) {
  const { author, desc, note, value } = purchase.purchases;
  return (
    <div className="bg-slate-100 shadow-md border-b border-slate-400 p-2 grid grid-cols-7 gap-x-2 rounded mb-2 ">
      <div className="flex col-span-2 justify-center items-center bg-slate-200 rounded">
        <p className=" texto p-1 text-center ">{`${value} R$`}</p>
      </div>
      <div className="col-span-5 ">
        <p className=" p-1">{desc}</p>
        <div className="col-span-7 p-1 flex justify-between">
          <p>
            Feito por: <span className="font-bold">{author}</span>
          </p>
          <LinkBtn link={note} label="Comprovante" />
        </div>
      </div>
    </div>
  );
}

export default Purchase;
