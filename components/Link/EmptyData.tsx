import React from "react";
import empty_illustration from "../../public/images/illustration-empty.svg";
import Image from "next/image";

const EmptyData = () => {
  return (
    <div className="bg-gray-100 flex mb-5 flex-col space-y-10 justify-center items-center p-20">
      <div>
        <Image src={empty_illustration} alt="empty_illustration" />
      </div>
      <div className="flex flex-col space-y-5 text-center">
        <h1 className="text-black text-bold text-xl md:text-3xl">
          Let's get you started
        </h1>
        <div className="w-full flex justify-center ">
          <p className="max-w-[40%] [text-shadow:_0_2px_0_rgb(0_0_0_/_5%)] text-gray-400 text-center text-sm md:text-ms">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We{`’`}re here to help
            you share your profiles with everyone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyData;
