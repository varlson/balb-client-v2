import Link from "next/link";
import React from "react";

type LinkBtnProps = {
  label: string;
  link: string;
};

function LinkBtn({ label, link }: LinkBtnProps) {
  return (
    <div className=" text-white bg-orange-400 rounded-md py-2 px-2  hover:text-blue-600">
      <Link href={link}>{label}</Link>
    </div>
  );
}

export default LinkBtn;
