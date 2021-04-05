import React from "react";
import { ICheckBox } from "./Checkbox.model";

const Checkbox = ({ isChecked, label, name, onBlur, onChange, ...props }: ICheckBox): JSX.Element => {
  return (
    <label className="block text-gray-500 font-bold mb-2 text-xl" {...props}>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={isChecked}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{ label }</span>
    </label>
  );
};

export default Checkbox;
