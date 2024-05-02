import { SASideBar, XCard } from "@components";
import React, { useEffect, useState } from "react";
import cardData from "../../../static/cardData.json";
import useSWR from 'swr';
import { XCardSA } from "src/components/SuperAdminListCard";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const SAListing = () => {

  const { data: cardData, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/appPropertyInfo`, fetcher)

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>{error}</div>
  }


  return (
    <div className="w-full h-[100vh] flex md:overflow-hidden">
      <div className="w-1/5 h-full bg-zinc-100 border-r border-zinc-300">
        <SASideBar />
      </div>
      <div className="w-4/5 h-full flex flex-col gap-4 my-2 py-5 mx-2 px-5">
        <p className="text-3xl text-zinc-900 font-medium mb-5">
          Super Admin Dashboard
        </p>
        <p className="text-2xl text-zinc-900 font-medium mt-5">All Listings</p>
        <div className="w-full flex flex-wrap justify-between items-center">
          <label htmlFor="igbp" className="text-zinc-500">
            Search by location
          </label>
          <div className="outline outline-1 rounded-md outline-slate-900 ">
            <input
              type="text"
              placeholder="Location"
              id="igbp"
              className="focus:outline-none px-1 py-2"
            />
            <button className="bg-slate-900 h-full text-zinc-50 px-1 py-2 ">
              Search
            </button>
          </div>
        </div>
        <div className="w-full h-[600px] my-2 flex flex-col gap-4 overflow-y-scroll px-2">
          {cardData?.data?.map((item) => {
            return (
              <XCardSA
                key={item.id}
                name={item.name}
                bed={item.bedroom}
                bath={item.bathroom}
                img={item.thumbnail}
                date={new Date(item.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                moveIn={item.movein}
                occupancy={item.maxOccupancy}
                leaseFor={item.leaseDuration}
                maintanance={item.maintenance}
                language={item.Language}
                security={item.security}
                price={item.rent}
                parking={item.parking}
                status={item.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SAListing;
