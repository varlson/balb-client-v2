"use client";
import Purchases from "@/components/partials/Purchases";
import Spinner from "@/components/ui/Spinner";

export default function Home() {
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
