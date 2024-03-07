"use client";
import FineCard from "@/components/partials/FineCard";
import React, { useEffect, useState } from "react";
import { finesFakes } from "@/api/constants/residents";
import { getFines } from "@/api/api";
import { FineType } from "@/types/types";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import { finesSorter } from "@/util/sortFineList";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  // const [fineLst, setFineLst] = useState<FineType[]>([]);
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
          setFetchError(error);
        });
    };

    if (!fines.length) {
      console.log("Multas precisoou");

      fetchFines();
    } else {
      console.log("Multas Nao prec");

      setIsLoading(false);
    }
  }, [setFetchFines, fines]);

  if (isLoading) {
    return (
      <div className="main flex items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );
  }

  return !fetchError ? (
    <div className="my-2">
      {fines.map((fine, index) => (
        <div key={index}>
          <FineCard resident={fine} />
        </div>
      ))}
    </div>
  ) : (
    <p>{fetchError}</p>
  );
}

export default Page;
