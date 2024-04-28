import React, { useState } from "react";
import opt from "../../assets/images/Admin/opt.png";
import add from "../../assets/images/Admin/pls.png";
import down from "../../assets/images/Admin/down.png";
import up from "../../assets/images/Admin/up.png";
import burgerIcon from "../../assets/images/Admin/more.png";
import { Link } from "react-router-dom";

const options = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    name: "Listing",
    path: "/admin/listings",
  },
  {
    name: "Account Information",
    path: "/admin/user/info",
  },
];

const Option = (props) => {
  return (
    <div className="w-full p-5 h-15% my-1 flex items-center gap-3 border-y border-zinc-900 cursor-pointer">
      <img src={opt} alt="" />
      <p className="font-semibold text-xl text-zinc-50">
        <Link to={props.path}>{props.title}</Link>
      </p>
    </div>
  );
};
const SubOption = (props) => {
  return (
    <div className="w-full p-5 h-15% my-1 flex items-center gap-3  cursor-pointer">
      <img src={opt} alt="" />
      <p className="font-semibold text-xl text-zinc-50">{props.title}</p>
    </div>
  );
};

const OptionGroup = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const optgp = ["Payment Info", "Edit Payment Info"];
  return (
    <>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className="w-full p-5 h-15% my-1 flex items-center gap-3 border-y border-zinc-900 cursor-pointer "
      >
        <img src={opt} alt="" />
        <p className="font-semibold text-xl text-zinc-50">{props.title}</p>
        <img src={showOptions ? up : down} alt="" />
      </div>
      <div
        className="w-full ml-2  "
        style={{
          height: showOptions ? "fit-content" : "0px",
          overflow: showOptions ? "auto" : "hidden",
        }}
      >
        {optgp.map((item, index) => {
          return <SubOption key={index} title={item} />;
        })}
      </div>
    </>
  );
};

const AdminSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full border-[.5px] border-zinc-800 bg-zinc-800 p-2 flex md:w-1/5 md:h-full flex-col items-center p-10">
      {/* Toggle button for mobile */}
      <button
        className="p-3 w-1/5 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <img src={burgerIcon} alt="Toggle Sidebar" />
      </button>

      {/* Sidebar content */}
      <div
        className={`my-3 w-full flex flex-col ${isSidebarOpen ? "" : "hidden md:flex"
          }`}
      >
        <button className="p-5 bg-zinc-50 w-full h-fit flex items-center gap-3 rounded-md">
          <Link to={"/admin/add-property"} className="flex items-center gap-3">
            <span>
              <img className="text-zinc-900" src={add} alt="" />
            </span>
            <p className="font-extrabold text-xl">Add a property</p>
          </Link>
        </button>
        {options.map((item, index) => {
          return <Option key={index} title={item.name} path={item.path} />;
        })}
        <OptionGroup title="Payment Info" />
      </div>
    </div>
  );
};

export { AdminSideBar };
