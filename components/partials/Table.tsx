"use client";
// import { _residents } from "@/api/constants/residents";
import { ResidentType } from "@/types/types";
import React, { useEffect, useState } from "react";
import Status from "../ui/Status";
import { useAppContext } from "@/context/Page";
import { getMonthStatus } from "@/api/api";
import { _residents } from "@/constants/residents";
import Spinner from "../ui/Spinner";

function Table() {
  const [month, setMonth] = useState<null | number>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [monthStatus, setMonthStatus] = useState<ResidentType[]>([]);
  const { fines, setFetchFines } = useAppContext();
  const [currentMonth, setCurrentMonth] = useState<number>(-1);

  if (isLoading)
    return (
      <div className="flex main items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );

  return (
    <div className="grid grid-cols-12 p-2 border bg-slate-200">
      <div className="bg-slate-400 col-span-12  grid grid-cols-12 font-bold p-2">
        <div className="col-span-2 text-center table-text-title">Moradores</div>
        <div className="col-span-10 bg-blue-400">
          <div className="grid grid-cols-12 justify-between w-full">
            <p className="border border-black p-1 text-center text-sm">Ja</p>
            <p className="border border-black p-1 text-center text-sm">Fe</p>
            <p className="border border-black p-1 text-center text-sm">Ma</p>
            <p className="border border-black p-1 text-center text-sm">Ab</p>
            <p className="border border-black p-1 text-center text-sm">Ma</p>
            <p className="border border-black p-1 text-center text-sm">Ju</p>
            <p className="border border-black p-1 text-center text-sm">Ju</p>
            <p className="border border-black p-1 text-center text-sm">Ag</p>
            <p className="border border-black p-1 text-center text-sm">Se</p>
            <p className="border border-black p-1 text-center text-sm">Ou</p>
            <p className="border border-black p-1 text-center text-sm">No</p>
            <p className="border border-black p-1 text-center text-sm">De</p>
          </div>
        </div>
      </div>

      {monthStatus.map((resident, index) => (
        <div key={index} className="my-2 col-span-12 grid grid-cols-12">
          <p className="border border-black p-2 col-span-2 text-sm">
            {resident.resident_name}
          </p>
          <div className="grid grid-cols-12 col-span-10">
            {resident.months.map((item, _index) => (
              <div
                key={_index}
                className={` flex items-center justify-center ${
                  currentMonth < _index ? "bg-slate-400" : ""
                } p-1 text-center border border-black`}
              >
                {/* {item == true ? "Sim" : currentMonth < _index ? "" : "Nao"} */}
                <Status
                  status={
                    typeof item == "string"
                      ? "n/s"
                      : item == true
                      ? true
                      : currentMonth < _index
                      ? null
                      : false
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
