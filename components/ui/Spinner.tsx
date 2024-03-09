import React from "react";
import { Puff } from "react-loader-spinner";

type SpinnerProps = {
  hei: string;
  wid: string;
  col: string;
};

function Spinner({ hei, wid, col }: SpinnerProps) {
  const width = wid || "80";
  const height = hei || "80";
  const color = col || "#f2ac07";
  return (
    <div>
      <Puff
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="puff-loading"
      />
    </div>
  );
}

export default Spinner;
