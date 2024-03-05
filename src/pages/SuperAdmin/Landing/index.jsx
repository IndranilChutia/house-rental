import { SASideBar } from "@components";
import React from "react";
import logo from "../../../assets/images/logo.png";
import { SACard } from "src/components/SADCard";

const Landing = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col md:overflow-hidden md:flex-row">
      <div className="w-full h-full bg-zinc-100 border-r border-zinc-300 md:w-1/5">
        <SASideBar />
      </div>
      <div className="w-full h-full flex flex-col gap-4 my-2 py-5 mx-2 px-5 md:w-4/5">
        <p className="text-3xl text-zinc-900 font-medium mb-5">
          Super Admin Dashboard
        </p>
        <p className="text-2xl text-zinc-900 font-medium mt-5">Overview</p>
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
        <div className="w-full flex h-fit flex-wrap gap-4 my-5">
          <SACard label="Property" number="300" img={logo} />
          <SACard label="Property" number="300" img={logo} />
          <SACard label="Property" number="300" img={logo} />
          <SACard label="Property" number="300" img={logo} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
