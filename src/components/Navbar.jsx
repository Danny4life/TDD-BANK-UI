import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();
  return (
    <>
    <header className="flex justify-center items-center w-full h-[96px] fixed top-0 bg-white z-10">
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
        <div className="flex-1 font-bold text-base leading-5">
            <ul className="flex justify-center space-x-10 items-center cursor-pointer hover:cursor-pointer">
                <li>
                    <a className="w-11 h-5">Login</a>
                </li>
                <li>
                    <a 
                        onClick={() => navigate("/signup")}
                        className="w-48 h-12 rounded-md py-4 px-4 bg-blue-700 text-base text-white text-center"
                    >
                        Create an account
                    </a>
                </li>
            </ul>
        </div>
    </header>
    </>
    
  )
}

export default Navbar