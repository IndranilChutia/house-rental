import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/SuperAdmin/Dashboard.png";
import logo2 from "../../assets/images/SuperAdmin/Box.png";
import logo3 from "../../assets/images/SuperAdmin/Report.png";
import logo4 from "../../assets/images/SuperAdmin/log.png";
import { Link } from "react-router-dom";
const SASideBar = () => {
  const options = [
    {
      name: "Dashboard",
      img: logo1,
      path: "/super-admin/dashboard",
    },
    {
      name: "Listings",
      img: logo2,
      path: "/super-admin/listings",
    },
    {
      name: "Listing Request",
      img: logo3,
      path: "/super-admin/listing/requests",
    },
    {
      name: "Payment Logs",
      img: logo4,
      path: "/super-admin/payment",
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <div
      className={`${
        show ? "h-[100vh]" : "h-full"
      } w-full flex px-4 py-5 gap-2 flex-col items-start md:h-full`}
    >
      <img
        src={logo}
        alt=""
        className="h-16 object-contain"
        onClick={() => [setShow(!show)]}
      />
      <div
        className={`${
          show ? "h-fit" : "h-0"
        } w-full my-5 flex flex-col gap-4 overflow-hidden md:h-fit`}
      >
        {options.map((item, index) => {
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex gap-4 min-h-10 h-fit w-full p-2 my-1 text-xl font-medium text-zinc-900 hover:bg-purple-300 hover:rounded-lg hover:text-purple-900 "
            >
              <span className="h-full">
                <img src={item.img} alt="" className="h-full object-contain" />
              </span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div
        className={`${
          show ? "flex" : "hidden"
        } w-full h-fit bg-red-600 text-red-50 justify-center rounded-lg py-2 px-4 text-lg font-medium mt-auto text-center md:h-fit md:flex`}
      >
        Logout
      </div>
    </div>
  );
};

export { SASideBar };
