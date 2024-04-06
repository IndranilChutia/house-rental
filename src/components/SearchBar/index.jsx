import React from "react";
import search from "../../assets/images/Admin/search.png";
import { PiX } from "react-icons/pi";
const SearchBar = () => {
  return (
    <div className="w-[300px] px-3 h-12  flex justify-between items-center bg-zinc-100 rounded-md border-[.25px] border-zinc-200">
      <input
        type="search"
        className="flex w-full h-full p-2 m-2 justify-start bg-zinc-100 target:border-none active:border-none : focus:border-none"
        placeholder="Search"
      />
      <img src={search} alt="" className="h-[60%]" />
    </div>
  );
};

export { SearchBar };
