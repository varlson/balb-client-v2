"use client";
import Table from "@/components/partials/Table";
import Spinner from "@/components/ui/Spinner";
import { useAppContext } from "@/context/Page";
import React, { useEffect, useState } from "react";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const { fines, dataLoader, monthStatus } = useAppContext();
  useEffect(() => {
    const loadDatas = async () => {
      await dataLoader();
      setIsLoading(false);
    };

    if (!fines.length) {
      console.log("from months - fetch");
      loadDatas();
    } else {
      setIsLoading(false);
      console.log("from months - not fetch");
    }
  }, [fines, dataLoader]);

  if (isLoading)
    return (
      <div className="flex main items-center justify-center">
        <Spinner hei="" wid="" col="" />
      </div>
    );

  return (
    <div>
      <Table monthStatus={monthStatus} />
    </div>
  );
}

export default Page;
