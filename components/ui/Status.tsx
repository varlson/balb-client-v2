import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";

type StatusProps = {
  status: boolean | null;
};

function Status({ status }: StatusProps) {
  const bg = status ? "text-green-500" : "text-orange-400";
  return (
    <div className={` ${bg} text-xl`}>
      {status ? <MdTaskAlt /> : status == null ? "" : <FaExclamationCircle />}
    </div>
  );
}

export default Status;
