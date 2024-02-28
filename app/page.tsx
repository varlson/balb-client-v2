"use client";
import Purchase from "@/components/partials/Purchase";
import Spinner from "@/components/ui/Spinner";
import { purchases } from "@/constants/residents";
import { useEffect, useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<number | null>(null);
  const [isCountng, setIsCountng] = useState(true);
  useEffect(() => {
    const sum = purchases.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);

    setTotal(sum);

    if (total != null) {
      setIsCountng(false);
    }
  }, [total]);

  return (
    <main className="">
      <div className=" items-start justify-center flex flex-col">
        {isCountng ? (
          <Spinner col="" hei="50" wid="50" />
        ) : (
          <div className="flex flex-col ml-3 items-center">
            <p>Total:</p>
            <p className="font-bold text-xl">{`${total} R$`}</p>
          </div>
        )}
      </div>
      <div className="my-3">
        {purchases.map((purch, index) => (
          <Purchase purchases={purch} />
        ))}
      </div>
    </main>
  );
}
