import React from "react";
import uploadIcon from "../../public/images/icon-upload-image.svg";
import uploadWhiteIcon from "../../public/images/icon-upload-image-white.svg";
import photo from "../../public/images/profile_image_test.jpeg";

import Image from "next/image";

interface ImageInputProps {
  url: string | null;
}

const ImageInput = ({ url }: ImageInputProps) => {
  return (
    <>
      <div
        className={`flex flex-col h-[193px] w-[193px] rounded-md ${
          url === null
            ? "bg-light_purple"
            : "bg-gradient-to-tl from-white/50 via-transparent to-black/20"
        }`}
      >
        <label
          htmlFor="image-upload"
          className="flex h-[100%] w-[100%] cursor-pointer items-center justify-center rounded-md"
        >
          {url === null ? (
            <div className="flex flex-col justify-center items-center w-full space-y-3 opacity-50">
              <Image
                src={uploadIcon}
                alt="upload image"
                className="w-10 h-10"
              />
              <span className="text-purple font-medium">
                + Upload your image
              </span>
              <input
                type="file"
                className="absolute opacity-0"
                accept="image/jpeg"
              />
            </div>
          ) : (
            <>
              <div className="absolute z-0">
                <Image src={photo} alt="profile photo" />
              </div>
              <div className="flex h-[100%] w-[100%] z-20 bg-gradient-to-tl from-black/50 via-transparent to-white/30 flex-col justify-center items-center space-y-3 ">
                <div className="flex flex-col space-y-3 justify-center items-center">
                  <Image
                    src={uploadWhiteIcon}
                    alt="upload image"
                    className="w-20 h-24 opacity-60"
                  />
                  <span className="text-white opacity-80">Change Image</span>
                  <input
                    type="file"
                    className="absolute opacity-0"
                    accept="image/jpeg"
                  />
                </div>
              </div>
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default ImageInput;
