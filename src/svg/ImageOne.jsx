import React from "react";
import arrowImg from "../assets/arrow.png";
import verifiedImg from "../assets/verified.png";
import payImg from "../assets/pay.png";

const ImageOne = () => {
  return (

    <div className="w-[178px] h-[145px] bg-white relative bottom-64 right-24">
      <div className="flex items-center space-x-2 ml-2 pt-4">
        <img src={arrowImg} className="w-[24px] h-[24px]" />
        <span className="w-[94px] h-[17px] font-normal text-sm leading-[16.94px] text-[#012A4A]">Easy Transfer.</span>
      </div>
      <div className="flex items-center space-x-2 ml-2 pt-4">
        <img src={verifiedImg} className="w-[24px] h-[24px]" />
        <span className="w-[117px] h-[17px] font-normal text-sm leading-[16.94px] text-[#012A4A]">Verified Payment.</span>
      </div>
      <div className="flex items-center space-x-2 ml-2 pt-4">
        <img src={payImg} className="w-[24px] h-[24px]" />
        <span className="w-[96px] h-[17px] font-normal text-sm leading-[16.94px] text-[#012A4A]">Pay on the go.</span>
      </div>
      
    </div>
    
  );
};

export default ImageOne