import React, { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const HeroSection = () => {
  const { theme, user } = useContext(GlobalContext)
  return (
    <div className=" bg-no-repeat bg-center bg-cover w-full ">
      <div className='container flex flex-col md:flex-row sm:text-sm  justify-center min-h-130 border-b  '>


        {/* Left Section */}
        <div className="  left w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">

          <h1 className=" sm:text-2xl text-xl md:text-2xl font-bold">
            Hi,I'm <br /> <span className={`${theme ? "text-yellow-400" : "text-blue-500"} md:text-5xl sm:text-[35px] text-[30px]`} > Muhammad Hamza </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-1xl text-white">
            Frontend and Backend Developer
          </h2>

          <div className='flex gap-3 items-center justify-center' >

            <a
              href="/hamzaResume.pdf"
              download
              className={`
    
   flex items-center justify-center w-60 sm:py-3 md:py-3 md:px-2 sm:text-[15px]  rounded-lg
    ${theme
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
                }
  `}
            >
              Download CV
            </a>


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
                  : 'bg-white text-black hover:bg-gray-800'
                }
  `}
            >
              Contact Us
            </button>
          </div>

        </div>

        {/* Right Section */}
        <div className="right w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={user.avatar_url}
            alt="Profile"
            className="h-40 sm:h-52 md:h-64 rounded-full object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default HeroSection