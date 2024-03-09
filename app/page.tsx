"use client";
import { getFines, getMonthStatus } from "@/api/api";
import FineCard from "@/components/partials/FineCard";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import { finesSorter } from "@/util/util";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const { fines, purchases, dataLoader } = useAppContext();

  useEffect(() => {
    const loadDatas = async () => {
      await dataLoader();
      setIsLoading(false);
    };

    if (!fines.length) {
      console.log("from hom page - fetch");
      loadDatas();
    } else {
      setIsLoading(false);
      console.log("from hom page - not fetch");
    }
  }, []);

  if (isLoading)
    return (
      <div className=" main flex items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );

  return (
    <main className="">
      <div className=" mt-4 items-start justify-center flex flex-col">
        <div className="text-xl font-bold flex flex-col ml-3 items-center">
          <p>Última Compra:</p>
        </div>
      </div>
      <div className="my-3">
        <Purchases purchases={purchases} onlyLast={true} />
      </div>

      <div className=" mt-4 items-start justify-center flex flex-col">
        <div className="text-xl font-bold flex flex-col ml-3 items-center">
          <p>Última Multa:</p>
        </div>
      </div>
      <div className="my-3">
        <FineCard resident={fines[0]} />
      </div>
    </main>
  );
}
