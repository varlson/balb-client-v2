import React from "react";

function Navbar(props) {
  return (
    <div className="navbar flex items-center">
      <div className="w-10/12 m-auto flex flex-col items-center divide-y  bg-red-400">
        <div className=" flex gap-x-2 ">
          <p className="text">234,33 R$</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
