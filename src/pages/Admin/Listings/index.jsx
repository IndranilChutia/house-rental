import {
  AdminNav,
  AdminSideBar,
  AlertAdmin,
  TitleAdmin,
  XCard,
} from "@components";
import React, { useEffect, useState } from "react";
import cardData from "../../../static/cardData.json";
const ListingPage = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    setProperties(cardData);
  }, []);

  return (
    <div className="w-full h-[100vh] md:overflow-hidden">
      <AdminNav />
      <div className="w-full min-h-[90vh] h-full flex flex-col md:flex-row md:h-[92vh]">
        <AdminSideBar />
        <div className="w-full h-full flex flex-col gap-5 px-5 md:w-4/5 md:px-10">
          <TitleAdmin Title="Listings" />
          <AlertAdmin />
          <div className="w-full h-[700px] py-2 flex flex-col gap-4 overflow-y-auto ">
            {properties.map((item, index) => {
              return (
                <XCard
                  key={item.id}
                  name={item.name}
                  bed={item.bedroom}
                  bath={item.bathroom}
                  img={item.thumbnail}
                  date={"12 May 2023"}
                  moveIn={item.movein}
                  occupancy={item.occupancy}
                  leaseFor={item.lease}
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
    </div>
  );
};

export default ListingPage;
