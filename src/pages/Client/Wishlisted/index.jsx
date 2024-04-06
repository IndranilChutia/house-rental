import { Footer, Navbar, VerticalCard } from "@components";
import React, { useEffect, useState } from "react";
import headerImg from "@images/Header.png";
import searchDemo from "../../../static/searchDemo.json";

const WishListed = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(searchDemo);
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full h-full flex justify-center relative">
        <img
          src={headerImg}
          alt="header"
          className="absolute -z-10 h-full w-full"
        />
        <h1 className="text-4xl py-[6%] text-white font-bold">
          WishListed Properties
        </h1>
      </div>
      <div className="container">
        <h2 className="text-xl mt-10 font-semibold">
          Checkout Properties wishlisted by you !
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14 my-10">
          {properties.map((item) => {
            return <VerticalCard key={item.id} {...item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WishListed;
