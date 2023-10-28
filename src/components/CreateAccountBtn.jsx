import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccountBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button 
        onClick={() => navigate("/signup")}
        className="w-[190px] h-[48px] rounded-md px-4 bg-blue-700 text-base text-white text-center cursor-pointer             hover:cursor-pointer"
        >
                    Create an account
        </button>
    </div>
  )
}

export default CreateAccountBtn
