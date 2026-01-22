import React, { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const HeroSection = () => {
    const {theme} = useContext(GlobalContext)
    return (
        <div className=" w-full flex flex-col md:flex-row sm:text-sm  justify-center min-h-170  ">
  
        {/* Left Section */}
        <div className="  left w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
          
          <h1 className=" sm:text-2xl text-xl md:text-2xl font-bold">
            My Name is <br /> <span className={`${theme ? "text-yellow-400" : "text-blue-500"} md:text-5xl sm:text-[35px] text-[30px]`} > Muhammad Hamza Raza</span>
          </h1>
      
          <h2 className="text-lg sm:text-xl md:text-1xl text-gray-600">
            I am Full Stack Web Developer
          </h2>
      
          <button
  className={`
    w-full sm:w-full md:w-auto
    px-4 sm:px-6 md:px-8
    py-2.5 sm:py-3
    text-sm sm:text-base md:text-lg
    rounded-lg font-medium
    shadow-md
    transition-all duration-300
    cursor-pointer
    active:scale-95
    ${theme
      ? 'bg-white text-black hover:bg-gray-200 hover:shadow-amber-50'
      : 'bg-black text-white hover:bg-gray-800'
    }
  `}
>
  Contact Us
</button>

        </div>
      
        {/* Right Section */}
        <div className="right w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="h-40 sm:h-52 md:h-64 rounded-full object-cover"
          />
        </div>
      
      </div>
      
    )
}

export default HeroSection