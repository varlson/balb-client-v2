"use client";
import FineCard from "@/components/partials/FineCard";
import React, { useEffect, useState } from "react";
import { getFines } from "@/api/api";
import { FineType } from "@/types/types";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import { finesSorter } from "@/util/util";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  // const [fineLst, setFineLst] = useState<FineType[]>([]);
  const { fines, dataLoader } = useAppContext();

  useEffect(() => {
    const loadDatas = async () => {
      await dataLoader();
      setIsLoading(false);
    };

    if (!fines.length) {
      console.log("from multas - fetch");
      loadDatas();
    } else {
      setIsLoading(false);
      console.log("from multas - not fetch");
    }
  }, [fines, dataLoader]);

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
