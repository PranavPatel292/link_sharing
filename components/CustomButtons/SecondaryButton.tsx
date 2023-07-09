import React from "react";

interface SecondaryButtonPros {
  width: number;
  height: number;
  title: string;
  onClick: any;
  disabled: boolean;
  smallScreenHeight: number;
  smallScreenWidth: number;
  mediumScreenHeight: number;
  mediumScreenWidth: number;
}

const SecondaryButton = ({
  width,
  height,
  title,
  onClick,
  disabled,
  smallScreenHeight,
  smallScreenWidth,
  mediumScreenHeight,
  mediumScreenWidth,
}: SecondaryButtonPros) => {
  return (
    <>
      <button
        className={`btn h-[${height}px] w-[${width}px] h-[${height}px] w-[${width}px] sm:h-[${smallScreenHeight}px] sm:w-[${smallScreenWidth}px] md:h-[${mediumScreenHeight}px] md:w-[${mediumScreenWidth}px] ${
          disabled ? "opacity-50" : "opacity-100"
        } border-[1px] border-purple text-purple bg-transparent  hover:bg-light_purple`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

export default SecondaryButton;
