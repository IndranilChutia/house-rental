import React from "react";
import { AdminNav, AdminSideBar, AlertAdmin, DashCardAdmin } from "@components";
import { TitleAdmin } from "src/components/AdminTitleBar";
import shop from "../../../assets/images/Admin/shop.png";
import tenant from "../../../assets/images/Admin/tenant.png";
import listing from "../../../assets/images/Admin/listing.png";
import rent from "../../../assets/images/Admin/monthlyrent.png";

const LandingPageAdmin = () => {
  return (
    <div className="w-full h-[100vh] md:overflow-hidden">
      <AdminNav />
      <div className="w-full min-h-[90vh] h-full flex flex-col md:flex-row md:h-[92vh]">
        <AdminSideBar />
        <div className="w-full h-full flex flex-col gap-5 px-5 md:w-4/5 md:px-10">
          <TitleAdmin Title="Dashboard" />
          <AlertAdmin />
          <div className="w-full  h-[80vh] flex flex-wrap gap-1   my-5 md:w-full md:h-fit  flex-row md:flex-wrap justify-around">
            <DashCardAdmin
              img={shop}
              title="Total Properties rented"
              num="20"
            />
            <DashCardAdmin
              img={tenant}
              title="Total Properties rented"
              num="20"
            />
            <DashCardAdmin
              img={rent}
              title="Total Properties rented"
              num="20"
            />
            <DashCardAdmin
              img={listing}
              title="Total Properties rented"
              num="20"
            />
          </div>
          <div className="w-full h-fit flex flex-col justify-start my-2">
            <p className=" text-zinc-900 font-bold text-2xl">Tenant Status</p>
            <p className="text-zinc-700 text-base">
              This table shows the data of all your current tenants occupying
              any of your properties. (Only show those who rented through our
              services)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAdmin;
