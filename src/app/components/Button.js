import React from "react";

const Button = ({ value, background = "", width = "full" }) => {
  let colorStyles = "";
  if (background === "navy") {
    colorStyles = "bg-navy text-white";
  } else if (background === "green") {
    colorStyles = "bg-green text-black";
  } else if (background === "grey") {
    colorStyles = "bg-disabled text-black";
  }
  let widthStyles = "";
  if (width === "full") {
    widthStyles = "w-full";
  } else if (width === "2/5") {
    widthStyles = "w-2/5";
  }

  return (
    <>
      <input
        type="button"
        value={value}
        className={`${widthStyles} tracking-widest uppercase border border-black text-17 p-0.5 rounded-lg ${colorStyles} hover:bg-yellow-medium hover:text-black hover:border-4 hover:border-light-blue `}
      />
    </>
  );
};

export default Button;
