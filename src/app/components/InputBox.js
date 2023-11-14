import React from "react";
import InputButton from "./InputButton";

const InputBox = ({
  label = "",
  inputButton = false,
  inputButtonValue = "",
  defaultValue,
  type = "text",
  idHtmlfor = "",
  options = [],
  disabled = false,
  mainBorder = true,
}) => {
  return (
    <>
      <div
        className={`flex items-center gap-x-2.5 ${
          mainBorder && "border-b border-b-black pt-4 pb-0.5"
        }`}>
        {inputButton ? (
          <InputButton value={inputButtonValue} />
        ) : (
          <label htmlFor={idHtmlfor} className="w-3/5 text-17 pl-2.5">
            {label}
          </label>
        )}
        {(type === "text" || type === "number") && (
          <input
            disabled={disabled}
            type={type}
            id={idHtmlfor}
            defaultValue={defaultValue}
            className={`w-2/5 border border-black pl-2.5 pr-0.5 focus:bg-yellow-light ${
              disabled && "bg-disabled"
            }`}
          />
        )}
        {type === "select" && (
          <select
            id={idHtmlfor}
            defaultValue={defaultValue}
            className="w-2/5 border border-black pl-2.5 pr-0.5 focus:bg-yellow-light">
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </>
  );
};

export default InputBox;
