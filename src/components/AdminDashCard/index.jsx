import React from "react";

const DashCardAdmin = (props) => {
  return (
    <div className=" w-full max-w-[600px] min-w-[280px] m-1 p-2 h-[20%]  items-center md:justify-center md:max-w-1/4 md:w-[20%] md:h-[100px] flex md:items-center md:p-2 gap-1 justify-between">
      <div className="w-1/3 h-full flex items-center justify-center">
        <img className="h-[80%] object-contain" src={props.img} alt="" />
      </div>
      <div className="w-2/3 h-full flex flex-col justify-evenly">
        <p className="text-zinc-700 text-sm w-full">{props.title}</p>
        <p className="text-zinc-900 text-3xl font-extrabold md:text-4xl">
          {props.num}
        </p>
      </div>
    </div>
  );
};

export { DashCardAdmin };
