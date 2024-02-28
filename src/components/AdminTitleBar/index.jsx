import React from "react";
import setting from "../../assets/images/Admin/settings.png";
import search from "../../assets/images/Admin/search.png";
import { SearchBar } from "../SearchBar";

const TitleAdmin = (props) => {
  return (
    <div className="w-full h-[15%] py-2  my-2 flex flex-col items-center justify-between md:flex-row md:h-[10%]">
      <div className="w-full h-1/2 flex items-center justify-between gap-2 md:w-1/3 md:justify-normal md:h-full">
        <p className="text-lg h-full font-semibold flex items-center md:text-[2vw]">
          {props.Title}
        </p>

        <img className="h-[30%]" src={setting} alt="" />
      </div>
      <div className="w-full h-1/2 flex items-center justify-center md:w-1/3 gap-2 md:justify-end h-1/2">
        <SearchBar />
      </div>
    </div>
  );
};

export { TitleAdmin };
