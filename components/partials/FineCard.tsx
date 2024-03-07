import { FineType } from "@/types/types";
import React from "react";

type FineCardProps = {
  resident: FineType;
};

function FineCard(resident: FineCardProps) {
  const { resident_name, date, desc, status } = resident.resident;
  const state_color = status ? "bg-green-500" : "bg-orange-500";
  const isPayed = status ? "Pago" : "Pendente";

  return (
    <div>
      <fieldset className="border p-2 shadow-md mb-4">
        <legend className="px-4 text-xl font-bold">{resident_name}</legend>
        <div className="my-3">
          <p className="font-semibold">Sobre a Multa:</p>
          <p className="p-2 text-justify ">{desc}</p>
        </div>

        <div className="justify-between flex border-t mx-2 p-2 my-3 text-sm ">
          <p>
            Ocorrência:
            <span className="ml-2 font-semibold">{date}</span>{" "}
          </p>
          <div className="flex gap-x-2">
            <p>Situação:</p>
            <p className={`h-5 w-5 ${state_color} rounded-full`}></p>
            <p>{isPayed}</p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default FineCard;
