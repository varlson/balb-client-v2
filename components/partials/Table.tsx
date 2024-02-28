"use client";
import { _residents } from "@/constants/residents";
import { ResidentType } from "@/types/types";
import React, { useEffect, useState } from "react";
import Status from "../ui/Status";

function Table(props) {
  const [month, setMonth] = useState<null | number>(null);
  useEffect(() => {
    setMonth(new Date().getMonth());
  }, []);
  const [residents, setResidents] = useState<ResidentType[]>(_residents);
  //   const [residents, setResidents] = useState([
  //     1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ]);
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

      {residents.map((resident, index) => (
        <div key={index} className="my-2 col-span-12 grid grid-cols-12">
          <p className="border border-black p-2 col-span-2 table-text">
            {resident.name}
          </p>
          <div className="grid grid-cols-12 col-span-10">
            {resident.status.map((item, _index) => (
              <div
                key={_index}
                className={` flex items-center justify-center ${
                  month < _index ? "bg-slate-400" : ""
                } p-1 text-center border border-black`}
              >
                {/* {item == true ? "Sim" : month < _index ? "" : "Nao"} */}
                <Status
                  status={item == true ? true : month < _index ? null : false}
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
