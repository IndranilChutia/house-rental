import React, { useState } from "react";

const DropDown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
    props.onChange(props.name, e.target.value);
  };
  return (
    <div className="w-11/12 h-fit flex flex-col gap-0">
      <label htmlFor={props.name} className="text-sm">
        {props.label}
      </label>
      <select
        id={props.name}
        value={selectedValue}
        onChange={handleSelectChange}
        placeholder={`Enter ${props.name}`}
        className="border border-zinc-400 p-2 rounded-md"
      >
        {props.data.map((item, index) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export { DropDown };
