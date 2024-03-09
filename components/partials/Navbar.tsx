"use client";
import React, { useEffect } from "react";
import Resume from "../ui/Resume";
import { useAppContext } from "@/context/Page";
function Navbar() {
  const { resume } = useAppContext();
  return (
    <div className="navbar flex items-center">
      {/* <div className="w-10/12 m-auto flex justify-center gap-x-2 divide-y">
        <p className="text-center self-center">Saldo</p>
        <div className=" flex gap-x-2 min-h-24 min-w-24  shadow-md bg-slate-200 flex-col items-center justify-center rounded-full">
          <div>
            <p className="text-center font-bold">234,33</p>
            <p className="text-center">R$</p>
          </div>
        </div>
      </div> */}
      <div className="w-10/12 m-auto flex justify-center gap-x-2 ">
        {resume && <Resume resume={resume} />}
      </div>
    </div>
  );
}

export default Navbar;
