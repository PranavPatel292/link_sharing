import React from "react";
import EmptyListSkeleton from "./EmptyListSkeleton";
import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";

const CustomPhoneMockUp = () => {
  /* the actual list of links are gonna fetch by a request */
  const listOfLinks = null;
  const profilePhoto = null;
  const profileInfo = null;

  return (
    <div className="hidden lg:flex flex-row justify-center items-center">
      <div className="mockup-phone mt-5">
        <div className="camera"></div>
        <div className="display">
          <div className="bg-white h-screen artboard artboard-demo phone-1">
            {profilePhoto === null ? <ProfilePhoto /> : <></>}
            {profileInfo === null ? <ProfileInfo /> : <></>}
            {listOfLinks === null ? <EmptyListSkeleton /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPhoneMockUp;
