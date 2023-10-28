import React from 'react'
import person from "../assets/person.png";
import signup from "../assets/signupImg.png";

const Signup = () => {
  return (
    <section className="flex">
        <div className="flex-1 ml-44 pt-28">
            <h1 className="w-[163px] h-[29px] font-bold text-2xl leading-7 text-[#012A4A]">Fintech.africa</h1>
            <h1 className="w-[287px] h-[24px] font-bold text-2xl leading-6 text-[#012A4A] pt-24">Get Started with Fintech</h1>
            <div className="pt-12">
                <form className="pb-8">
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">First Name</label>
                    <input type="text" placeholder="Enter your first name"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80  text-base" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Last Name</label>
                    <input type="text" placeholder="Enter your last name"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Email</label>
                    <input type="email" placeholder="Enter your email"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80 " />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[114px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Phone Number</label>
                    <input type="number" placeholder="Enter phone number"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80 " />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">BVN</label>
                    <input type="number" placeholder="Enter your BVN"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Password</label>
                    <input type="password" placeholder="Enter password"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[141px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Confirm Password</label>
                    <input type="password" placeholder="confirm password"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <label className="w-[83px] h-[24px] font-medium text-base leading-6 text-[#012A4A] block">Pin</label>
                    <input type="number" placeholder="Enter transaction pin"  className="w-[395px] h-[48px] rounded-md border py-2 px-4 opacity-80" />
                    <img src={person} className="relative bottom-9 ml-4" />
                    <button type="button" className="w-[396px] h-[48px] rounded-md border py-4 px-8 text-white bg-[#4361EE] text-base font-semibold flex justify-center items-center cursor-pointer hover:cursor-pointer">Sign up</button>
                </form>
                <p><span className="w-[233px] h-[24px] font-bold text-base leading-6 cursor-pointer">Already have an account? Login</span></p>
            </div>       
        </div>
        <div className="flex-1">
            <img src={signup} className="w-full h-[1284px] object-cover" />
        </div>
      
    </section>
  )
}

export default Signup
