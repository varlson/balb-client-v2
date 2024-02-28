import { PurchaseType } from "@/types/types";
import React from "react";
import LinkBtn from "../ui/LinkBtn";

type PuchaseProps = {
  purchases: PurchaseType;
};

function PurchaseCard(purchase: PuchaseProps) {
  const { author, desc, note, value } = purchase.purchases;
  // return (
  //   <div className="bg-slate-100 shadow-md border-b border-slate-400 p-2 grid grid-cols-7 gap-x-2 rounded mb-2 ">
  //     <div className="flex col-span-2 justify-center items-center bg-slate-200 rounded">
  //       <p className=" texto p-1 text-center ">{`${value} R$`}</p>
  //     </div>
  //     <div className="col-span-5 ">
  //       <p className=" p-1">{desc}</p>
  //       <div className="col-span-7 p-1 flex justify-between">
  //         <p>
  //           Feito por: <span className="font-bold">{author}</span>
  //         </p>
  //         <LinkBtn link={note} label="Comprovante" />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="my-2 p-2">
      <fieldset className="border p-2 shadow-md">
        <legend className="mx-3 px-4 text-xl font-bold">{`${value} R$`}</legend>

        <div className="mb-4">
          <p>{desc}</p>
        </div>
        <div className="flex gap-x-5 p-2 text-sm border-t mt-2 mb-1  justify-between items-center">
          <p>
            Feito por: <span className="mt-1 font-bold">{author}</span>
          </p>
          <p>11/04/2024</p>
          <LinkBtn link={note} label="Comprovante" />
        </div>
      </fieldset>
    </div>
  );
}

export default PurchaseCard;
