import React from "react";
import imgSix from "../assets/imgSix.png";
import imgSeven from "../assets/imgSeven.png";
import lineImg from "../assets/lineImg.png";
const SectionFour = () => {
  return (
    <section>
      <section className="flex">
        <div className="flex-1 pt-16 ml-32">
          <h4 className="w-[304px] h-[48px] font-bold text-5xl leading-10 text-[#3A0CA3] ">
            How it works
          </h4>
          <p className="w-[416px] h-[48px] font-normal text-base leading-6 text-[#012A4A] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eget ipsum, sed praesent.
          </p>
          <div className="flex">
            <div>
              <img src={imgSix} className="pt-16" />
              <img src={lineImg} className="ml-4 pt-1" />
            </div>
            <div className="pt-16 ml-8">
              <h5 className="w-[84px] h-[24px] font-light text-sm leading-6 text-[#012A4A]">
                STEP ONE
              </h5>
              <h3 className="w-[375px] h-[29px] font-semibold text-2xl leading-7 text-[#012A4A] pt-2">
                Sign in or Sign up your account
              </h3>
              <p className="w-[416px] h-[48px] font-normal text-base leading-6 pt-6 text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={imgSix} className="pt-16" />
              <img src={lineImg} className="ml-4 pt-1" />
            </div>
            <div className="pt-16 ml-8">
              <h5 className="w-[84px] h-[24px] font-light text-sm leading-6 text-[#012A4A]">
                STEP TWO
              </h5>
              <h3 className="w-[375px] h-[29px] font-semibold text-2xl leading-7 text-[#012A4A] pt-2">
                Click transfer on your dashboard
              </h3>
              <p className="w-[416px] h-[48px] font-normal text-base leading-6 pt-6 text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={imgSix} className="pt-16" />
              <img src={lineImg} className="ml-4 pt-1" />
            </div>
            <div className="pt-16 ml-8">
              <h5 className="w-[84px] h-[24px] font-light text-sm leading-6 text-[#012A4A]">
                STEP THREE
              </h5>
              <h3 className="w-[375px] h-[29px] font-semibold text-2xl leading-7 text-[#012A4A] pt-2">
                Select your desire bank and send
              </h3>
              <p className="w-[416px] h-[48px] font-normal text-base leading-6 pt-6 text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={imgSeven} className="pt-36" />
        </div>
      </section>
      <section>
        <div className="">
          <h1>Hear from our customers</h1>
        </div>
      </section>
    </section>
  );
};

export default SectionFour;
