import React from 'react'
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import likindin from "../assets/likindin.png";
import google from "../assets/Google.png";

const Footer = () => {
  return (
    <footer>
        <section className="bg-[#D8BBFF] w-full h-[453px]">
          <div className="flex flex-col justify-center items-center pt-24">
            <h1 className="w-[755px] h-[65px] font-bold text-[54px] leading-[65px] text-center">Subscribe on our Newsletter</h1>
            <p className="w-[628px] h-[52px] font-normal text-base leading-[26px] text-[#012A4A] pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi, velit, aliquam tortor vestibulum.</p>
            <div className="pt-8 flex gap-4">
              <input type="text" placeholder="@ Email" className="w-[263px] h-[58px] border p-4" />
              <button type="button" className="w-[263px] h-[58px] p-3 bg-[#4361EE] text-white">Subscribe</button>
            </div>
            <span className="pt-8 w-[484px] h-[19px] font-normal text-base leading-[19.36px] tracking-tighter text-[#012A4A] ">We will never spam you. Only useful mails with promo and events</span>
          </div>
      </section>
      <section className="w-full h-[166px] bg-[#012A4A] flex items-center text-white">
        <div className="flex-1 flex-col justify-center ml-28">
          <h5 className="w-[163px] h-[29px] font-bold text-2xl leading-[29px]">Fintech.africa</h5>
          <p className="w-[169px] h-[22px] font-normal text-sm tracking-[-0.25px] pt-6"><span>© 2022 All rights reserved</span></p>
        </div>
        <div className="flex-1 pt-6">
          <ul className="flex justify-center space-x-4 items-center cursor-pointer hover:cursor-pointer text-white text-base font-semibold">
                <li>
                    <a className="">Home</a>
                </li>
                <li>
                    <a className="">Features</a>
                </li>
                <li>
                    <a className="">About</a>
                </li>
                <li>
                    <a className="">Contact Us</a>
                </li>
          </ul>
          <ul className="flex justify-center space-x-4 items-center cursor-pointer hover:cursor-pointer text-white font-normal leading-5 tracking-[-0.25px] pt-8 text-sm">
                <li>
                    <a className="w-[89px] h-[22px]">Privacy Policy</a>
                </li>
                <li>
                    <a className="w-[129px] h-[22px]">Terms of Conditions</a>
                </li>
                <li>
                    <a className="w-[35px] h-[22px]">Legal</a>
                </li>
                <li>
                    <a className="w-[30px] h-[22px]">Help</a>
                </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex justify-center space-x-4 cursor-pointer pb-8 pt-8">
            <img src={facebook} className="" />
            <img src={twitter} />
            <img src={likindin} />
            <img src={google} />
          </div>
          <h4 className="text-center font-normal text-sm leading-5 tracking-[-0.25px]"><span>English version</span></h4>
        </div>
      </section>
      
    </footer>
  )
}

export default Footer
