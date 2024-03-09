import { ResumeType } from "@/types/types";
import React from "react";

function Resume({ resume }: { resume: ResumeType }) {
  const { currentMonth, currentBalance, initialBalance, totalUsed } = resume;
  return (
    <div className="w-full ">
      <div className="flex gap-x-10 items-center justify-around">
        <fieldset className=" px-10 border ">
          <legend className="mx-4 px-5 font-semibold text-center">Mês</legend>
          <p className="text-center font-bold text-xl">{currentMonth}</p>
        </fieldset>
        <fieldset className="py-1 px-10 border ">
          <legend className="mx-4 px-5 font-bold text-center">Saldo</legend>
          <p className="text-center font-bold text-xl">{`${currentBalance} R$`}</p>
        </fieldset>
      </div>
      <div className="mt-2 border-t flex gap-x-10 justify-around">
        <div className="flex gap-x-3">
          <p>SALDO INICIAL:</p>{" "}
          <p className="font-semibold">{`${initialBalance} R$`}</p>
        </div>
        <div className="flex gap-x-3">
          <p>TOTAL DE SAÍDA:</p>{" "}
          <p className="font-semibold"> {`${totalUsed} R$`}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
