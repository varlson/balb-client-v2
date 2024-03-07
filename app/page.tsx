"use client";
import { getFines, getMonthStatus } from "@/api/api";
import FineCard from "@/components/partials/FineCard";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import { finesSorter } from "@/util/sortFineList";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const { algo } = useAppContext();
  const { fines, setFetchFines } = useAppContext();
  useEffect(() => {
    const fetchFines = async () => {
      getFines()
        .then((response: any) => {
          const _fines: FineType[] = response.data;
          // console.log("response");
          // console.log(fines);
          // setFineLst(_fines);
          const sorted = finesSorter(_fines);
          setFetchFines(sorted);
          setIsLoading(false);
        })
        .catch((error: string) => {
          console.log("error");
          console.log(error);
          setIsLoading(false);
          // setFetchError(error);
        });
    };

    if (fines.length == 0) {
      console.log("Home precisoou");
      fetchFines();
    } else {
      console.log("Home nao prec");

      setIsLoading(false);
    }
  }, [setFetchFines, fines]);

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
        <Purchases onlyLast={false} />
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
