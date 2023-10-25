import React from "react";
import imgOne from "../assets/caseImg.png";
import imgTwo from "../assets/Transaction.png";
import imgThree from "../assets/free.png";
import imgFour from "../assets/imgFour.png";

const SectionTwo = () => {
  return (
    <section className="w-full h-[742px] bg-[white] flex">
      <div className="flex-1 justify-center ml-20 pt-48 flex">
        <div className="">
          <h1 className="w-[605px] h-[183px] font-bold text-5xl leading-[60.51px] text-[#3A0CA3]">
            Get the convenience of transacting with our services
          </h1>
          <p className="w-[498px] h-[48px] font-normal text-base leading-6 text-[#012A4A] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eget ipsum, sed praesent.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-around pt-40">
            
            <span>
                <img src={imgOne} className="pb-2" />
                <h4 className="w-[65px] h-[40px] font-normal text-sm leading-5 text-[#012A4A]">
                Keeping secrecy
                </h4>
            </span>

            <span>
                <img src={imgTwo} className="pb-2" />
                <h4 className="w-[65px] h-[40px] font-normal text-sm leading-5 text-[#012A4A]">
                Convenient transaction
                </h4>
            </span>
            
        </div>

        <div className="flex justify-around pt-36">
            
            <span>
                <img src={imgThree} className="pb-2" />
                <h4 className="w-[65px] h-[40px] font-normal text-sm leading-5 text-[#012A4A]">
                Free transaction
                </h4>
            </span>

            <span>
                <img src={imgFour} className="pb-2" />
                <h4 className="w-[65px] h-[40px] font-normal text-sm leading-5 text-[#012A4A]">
                Security guaranteed
                </h4>
            </span>
            
        </div>
    </div>

    </section>
  );
};

export default SectionTwo;
