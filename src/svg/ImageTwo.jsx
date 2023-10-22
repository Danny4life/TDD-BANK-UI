import React from 'react'
import successImg from "../assets/sucessImg.png";

const ImageTwo = () => {
  return (
    <div className="w-[207px] h-[64px] rounded-lg bg-white relative left-[234px] top-8">
    <div className="flex items-center space-x-2 ml-2 pt-4">
        <img src={successImg} className="w-[24px] h-[24px]" />
        <span className="w-[158px] h-[19px] font-semibold text-sm leading-[16.94px] text-[#012A4A]">Payment Successful.</span>
    </div>
        
    </div>
  )
}

export default ImageTwo
