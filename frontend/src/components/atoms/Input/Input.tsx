import React from "react";
import { IInput } from "./Input.model";
import clsx from "clsx";

const Input = ({
  name,
  type,
  value,
  label,
  error,
  onBlur,
  inputId,
  errorId,
  required,
  ariaLabel,
  onChange,
  placeholder,
  ariaInvalid,
  ...props
}: IInput) => {
  return (
    <div className="mb-6" {...props}>
      <label
        className={clsx(
          !label && "invisible absolute",
          "block text-gray-500 font-bold mb-2 text-xl "
        )}
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className={clsx(
          "appearance-none border-2 border-gray-200 rounded-lg w-full h-16 py-2 px-3 text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400",
          !!error && "border-red-500"
        )}
        aria-describedby={errorId}
        aria-label={ariaLabel}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        id={inputId}
        type={type}
        value={value}
      />
      <p id={errorId} className="text-red-500 italic text-lg">
        {error}
      </p>
    </div>
  );
};
export default Input;
