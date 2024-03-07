import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { MdOutlineDisabledVisible } from "react-icons/md";

type StatusProps = {
  status: boolean | string | null;
};

function Status({ status }: StatusProps) {
  let bg = "";

  if (typeof status == "string") {
    bg = "text-blue-500";

    return (
      <div className={` ${bg} text-xl`}>
        <MdOutlineDisabledVisible />
      </div>
    );
  } else {
    bg = status ? "text-green-500" : "text-orange-400";
  }

  return (
    <div className={` ${bg} text-xl`}>
      {status ? <MdTaskAlt /> : status == null ? "" : <FaExclamationCircle />}
    </div>
  );
}

export default Status;
