import React from "react";

interface PrimaryButtonPros {
  title: string;
  disabled: boolean;
  className: string;
}

const PrimaryButton = ({ className, title, disabled }: PrimaryButtonPros) => {
  return (
    <>
      <button
        className={`btn text-white ${className} ${
          disabled ? "opacity-50" : "opacity-100"
        } hover:bg-purple_hover bg-purple `}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
