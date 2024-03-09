import React from "react";
import { PiUsersFourDuotone } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { RxValueNone } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer flex items-end">
      <div className="md:w-10/12 m-auto flex justify-between text-3xl w-full px-5 py-1">
        <Link href="/">
          <ImHome />
        </Link>
        <Link href="/mes">
          <PiUsersFourDuotone />
        </Link>
        <Link href="/multas">
          <RxValueNone />
        </Link>
        <Link href="/compras">
          <FaCartPlus />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
