import React from "react";
import SecondaryButton from "../CustomButtons/SecondaryButton";

const AddLinkBtn = () => {
  return (
    <div className="flex flex-col justify-start text-justify p-10 space-y-10">
      <div className="flex flex-col space-y-3">
        <h1 className="text-black text-2xl md:text-3xl font-bold">
          Customize your links
        </h1>
        <p className="text-gray-400 text-sm md:text-ms">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <div>
        <SecondaryButton
          title="+ Add your link"
          disabled={false}
          key={"AddLinkBtn"}
          onClick={() => console.log("hello")}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AddLinkBtn;
