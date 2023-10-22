import React from 'react'
import CreateAccountBtn from './CreateAccountBtn'
import imgOne from "../assets/imgone.png";
import ImageOne from '../svg/ImageOne';
import ImageTwo from '../svg/imageTwo';

const SectionOne = () => {
  return (
    <section className="w-[1440px] h-[742px] bg-[#D8F3DC] flex">
    <div className="flex-1 justify-center ml-10 pt-48 flex">
        <div className="">
            <h1 className="w-[605px] h-[183px] font-bold text-5xl leading-[60.51px] text-[#3A0CA3]">
            Quick and easy payment platform for all your transactions</h1>
            <p className="w-[498px] h-[48px] font-normal text-base leading-6 text-[#012A4A] pt-4">Save and manage all your transaction in one place, easy payment 
                anytime & anyday.
            </p>
            <div className="pt-12">
                <CreateAccountBtn />
            </div>
            
        </div>
       
    </div>
    <div className="flex-1 pt-24 flex justify-center">
        <div className="">
            <ImageTwo />
            <img src={imgOne} alt="sectionOne-image" className="rounded-full" />
            <ImageOne />
        </div>
    </div>

    </section>
  )
}

export default SectionOne
