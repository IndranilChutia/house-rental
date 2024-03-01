import React, { useState } from "react";

const InputAdmin = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log(value);
    props.onChange(e.target.name, e.target.value);
  };
  return (
    <div className="w-11/12 h-fit flex flex-col gap-0">
      <label htmlFor={props.name} className="text-sm">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        placeholder={`Enter ${props.name}`}
        onChange={handleInputChange}
        required
        name={props.name}
        value={value}
        className="border border-zinc-400 p-2 rounded-md"
      />
    </div>
  );
};

export { InputAdmin };
