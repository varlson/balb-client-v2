"use client";
import { getMonthStatus } from "@/api/api";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    getMonthStatus()
      .then((response) => {
        if (response.data.status) {
          setError(false);
        } else {
          setError(true);
        }
        console.log(response);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className=" main flex items-center justify-center">
        <Spinner />
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
        <Purchases onlyLast={true} />
      </div>
    </main>
  );
}
