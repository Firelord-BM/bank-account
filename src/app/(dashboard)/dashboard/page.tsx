import Transactions from "@/components/Transactions";
import Barchart from "@/components/barchart";
import AddCard from "@/components/addCard";
import React from "react";
import Quick from "@/components/quick";
import Cards from "@/components/cards";
import HeadNav from "@/components/layout/headNav";

const Dashboardpage = () => {
  const transactions = [{ description: "Transaction 1", amount: "100" }];
  return (
    <main className="w-[100vw] px-4 ">
      <HeadNav />

      <div className=" lg:ml-[240px]  gap-8 flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="flex pb-4 ">
          
            <Cards />
            
          </div>

          <div className="pb-2">
            <Barchart />
          </div>

          <div>
            <Transactions />
          </div>
        </div>

        <div className="flex flex-col bg-slate-300 justify-center items-center gap-2 ">
          <AddCard />
          <Quick />
        </div>
      </div>
    </main>
  );
};

export default Dashboardpage;
