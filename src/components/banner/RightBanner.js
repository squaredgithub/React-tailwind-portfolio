import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className=" w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[350px] z-10 ml-10 mt-0 mb-20"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner;
