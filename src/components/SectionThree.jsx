import React from 'react'
import imgFive from "../assets/imgFive.png";

const SectionThree = () => {
  return (
    <section className="w-full h-[453px] bg-slate-200 flex">
    <div className="flex-1 justify-center items-center ml-8 flex">
        <div className="">
            <div className="pt-12">
                <img src={imgFive} className="" />
            </div>
            
        </div>
       
    </div>
    <div className="flex-1 flex justify-center items-center">
        <div className="">
            <h1 className="w-[433px] h-[96px] font-bold text-[40px] leading-[60.51px] text-[#3A0CA3]">
                Choose how you want to make transfers
            </h1>
            <p className="w-[416px] h-[48px] font-normal text-base leading-6 text-[#012A4A] pt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
            </p>             
        </div>
    </div>

    </section>
  )
}

export default SectionThree
