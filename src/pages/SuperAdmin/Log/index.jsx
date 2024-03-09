import { SASideBar } from "@components";
import React from "react";

const Log = () => {
  const payData = [
    {
      id: "1",
      name: "Pranjal",
      property: "2Bhk Flat",
      amount: "Rs.50,000",
      date: "23/March/2024",
    },
  ];
  return (
    <div className="w-full h-[100vh] flex md:overflow-hidden">
      <div className="w-1/5 h-full bg-zinc-100 border-r border-zinc-300">
        <SASideBar />
      </div>
      <div className="w-4/5 h-full flex flex-col gap-4 my-2 py-5 mx-2 px-5">
        <p className="text-3xl text-zinc-900 font-medium mb-5">
          Super Admin Dashboard
        </p>
        <p className="text-2xl text-zinc-900 font-medium mt-5">Payment Logs</p>
        <div className="w-full h-fit p-2">
          <table className="w-full outline outline-1 rounded-sm">
            <tr className="w-full">
              <th className="w-1/5 p-2 bg-slate-500 outline outline-1 text-lg text-zinc-50">
                By
              </th>
              <th className="w-1/5 p-2 bg-slate-500 outline outline-1 text-lg text-zinc-50">
                Property
              </th>
              <th className="w-1/5 p-2 bg-slate-500 outline outline-1 text-lg text-zinc-50">
                Amount
              </th>
              <th className="w-1/5 p-2 bg-slate-500 outline outline-1 text-lg text-zinc-50">
                Date
              </th>
              <th className="w-1/5 p-2 bg-slate-500 outline outline-1 text-lg text-zinc-50">
                Action
              </th>
            </tr>
            {payData.map((item, index) => {
              return (
                <tr className="w-full">
                  <th className="w-1/5 p-2 outline outline-1">{item.name}</th>
                  <th className="w-1/5 p-2 outline outline-1">
                    {item.property}
                  </th>
                  <th className="w-1/5 p-2 outline outline-1">{item.amount}</th>
                  <th className="w-1/5 p-2 outline outline-1">{item.date}</th>
                  <th className="w-1/5 p-2 outline outline-1">
                    <div className="flex justify-around">
                      <button className="px-4 py-1 rounded-md bg-slate-700 text-zinc-50">
                        View
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Log;
