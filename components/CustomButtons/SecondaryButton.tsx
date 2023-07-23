import React from "react";

interface SecondaryButtonPros {
  title: string;
  onClick: any;
  disabled: boolean;
  className: string;
}

const SecondaryButton = ({
  className,
  title,
  disabled,
}: SecondaryButtonPros) => {
  return (
    <>
      <button
        className={`btn text-center capitalize ${className} ${
          disabled ? "opacity-50" : "opacity-100"
        } border-[1px] border-purple text-purple bg-transparent  hover:bg-light_purple`}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

export default SecondaryButton;
