import React from "react";
import PrimaryButton from "../CustomButtons/PrimaryButton";

const SaveBtn = () => {
  return (
    <div className="flex flex-row justify-end">
      <PrimaryButton title="save" className="w-[10%] mt-10" disabled={false} />
    </div>
  );
};

export default SaveBtn;
