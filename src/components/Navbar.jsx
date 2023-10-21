import React from 'react'

const Navbar = () => {
  return (
    <div className="container flex justify-center items-center">
        <div className="flex-1 justify-center items-center flex">
            <h1 
                className="w-56 h-10 font-bold text-2xl leading-9 items-center text-[#012A4A]"
                >
                    Fintech.africa
                </h1>
        </div>
        <div className="flex-1 w-11 h-5 font-bold text-base leading-5">
            <ul className="flex justify-center space-x-4 items-center cursor-pointer hover:cursor-pointer">
                <li>
                    <a className="text-[#4361EE]">Home</a>
                </li>
                <li>
                    <a className="text-[#012A4A]">Features</a>
                </li>
                <li>
                    <a className="text-[#012A4A]">About</a>
                </li>
                <li>
                    <a className="text-[#012A4A]">Contact Us</a>
                </li>
            </ul>
        </div>
        <div className="flex-1">3</div>
    </div>
  )
}

export default Navbar