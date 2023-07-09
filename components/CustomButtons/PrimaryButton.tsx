import React from "react";

interface PrimaryButtonPros {
  width: number;
  height: number;
  title: string;
  onClick: any;
  disabled: boolean;
}

const PrimaryButton = ({
  width,
  height,
  title,
  onClick,
  disabled,
}: PrimaryButtonPros) => {
  return (
    <>
      <button
        className={`btn h-[${height}px] w-[${width}px] hover:bg-purple_hover bg-purple text-white`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
