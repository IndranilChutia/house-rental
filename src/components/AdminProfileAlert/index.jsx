import React from "react";
import alert from "../../assets/images/Admin/mark.png";
const AlertAdmin = () => {
  return (
    <div className="w-full h-fit flex items-center p-2  mx-0 md:h-[10%] md:py-2 px-0">
      <div className="w-[90%] h-full border-[1.75px] border-red-600 rounded-md px-3 py-4 flex items-center gap-3 md:px-10">
        <span className="h-full">
          <img className="h-[90%] object-contain" src={alert} alt="" />
        </span>
        <p className="font-semibold text-[4vw] text-red-600 md:text-base">
          You are requested to fill personal information in Profile section.{" "}
          <span className=" font-bold text-red-800">CLICK HERE TO UPDATE.</span>
        </p>
      </div>
    </div>
  );
};

export { AlertAdmin };
