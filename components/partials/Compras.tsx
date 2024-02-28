import React from "react";
import LinkBtn from "../ui/LinkBtn";

function Compras() {
  return (
    <div>
      <fieldset className="border p-2 shadow-md">
        <legend className="mx-3 px-4 text-xl font-bold">22 R$</legend>

        <div className="mb-4">
          <p>Compra de alguma coisa com esse e aquele detalhes</p>
        </div>
        <div className="flex gap-x-5 p-2 text-sm border-t mt-2 mb-1  justify-between items-center">
          <p>
            Feito por: <span className="mt-1 font-bold">Manito</span>
          </p>
          <p>11/04/2024</p>
          <LinkBtn link="/aaaa" label="Comprovante" />
        </div>
      </fieldset>
    </div>
  );
}

export default Compras;
