import FineCard from "@/components/partials/FineCard";
import React from "react";
import { finesFakes } from "@/constants/residents";

function page() {
  return (
    <div className="my-2">
      {finesFakes.map((fine, index) => (
        <div key={index}>
          <FineCard resident={fine} />
        </div>
      ))}
    </div>
  );
}

export default page;
