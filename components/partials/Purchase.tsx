import React from "react";

type PurchaseProps = {
  disc: string;
  value: number;
  note: string;
};

function Purchase({}: PurchaseProps) {
  return (
    <div className="bg-slate-100 shadow-md border-b border-slate-400 p-2 grid grid-cols-7 gap-x-2 rounded mb-2 ">
      <div className="flex col-span-3 justify-center items-center bg-slate-200 rounded">
        <p className=" text-3xl p-2 text-center ">23,31 R$</p>
      </div>
      <div className="col-span-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        voluptatibus, ipsam.
        <div className="col-span-7 p-1 flex justify-end">
          <div className=" bg-orange-400 rounded-md py-2 px-4">Comprovante</div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
