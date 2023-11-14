import React from "react";

const InputButton = ({ value, onClick }) => {
  return (
    <>
      <input
        type="button"
        onClick={onClick}
        value={value}
        className="bg-purple rounded-lg p-0.5 text-grey w-3/5 uppercase tracking-wider text-17 hover:bg-yellow-medium hover:text-black hover:border-4 hover:border-purple hover:shadow-input-button-shadow"
      />
    </>
  );
};

export default InputButton;
