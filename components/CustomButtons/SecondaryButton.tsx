import React from "react";

interface SecondaryButtonPros {
  width: number;
  height: number;
  title: string;
  onClick: any;
  disabled: boolean;
}

const SecondaryButton = ({
  width,
  height,
  title,
  onClick,
  disabled,
}: SecondaryButtonPros) => {
  return (
    <>
      <button
        className={`btn h-[${height}px] w-[${width}px] ${
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
