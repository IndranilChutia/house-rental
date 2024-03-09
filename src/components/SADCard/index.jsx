import React from "react";

const SACard = (props) => {
  return (
    <div className="w-[300px] p-3 flex bg-slate-300 rounded-md hover:bg-slate-400">
      <div className="w-2/3 flex flex-col justify-around">
        <p className="text-lg font-medium">{props.label}</p>
        <p className="text-2xl font-semibold">{props.number}</p>
      </div>
      <img src={props.img} alt="" className="w-1/3 object-contain p-2" />
    </div>
  );
};

export { SACard };
