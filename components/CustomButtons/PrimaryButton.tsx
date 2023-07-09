import React from "react";

interface PrimaryButtonPros {
  width: number;
  height: number;
  title: string;
  onClick: any;
  disabled: boolean;
  mediumScreenWidth: number;
  mediumScreenHeight: number;
  smallScreenWidth: number;
  smallScreenHeight: number;
}

const PrimaryButton = ({
  width,
  height,
  title,
  onClick,
  disabled,
  smallScreenHeight,
  smallScreenWidth,
  mediumScreenHeight,
  mediumScreenWidth,
}: PrimaryButtonPros) => {
  return (
    <>
      <button
        className={`btn h-[${height}px] w-[${width}px] sm:h-[${smallScreenHeight}px] sm:w-[${smallScreenWidth}px] md:h-[${mediumScreenHeight}px] md:w-[${mediumScreenWidth}px] hover:bg-purple_hover bg-purple text-white`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
