import React from "react";

const Checkbox = (props) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.label}
        className="p-2"
        onChange={props.onChange}
      />
      <label className="text-lg " htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
};

export { Checkbox };
