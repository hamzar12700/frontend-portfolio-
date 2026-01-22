import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const ExperienceBoxes = ({heading , para}) => {
    const {theme} = useContext(GlobalContext)
    return (
        <div className={`border h-80 w-[100%]  sm:min-h-100  rounded-2xl flex flex-col justify-center items-start gap-5 p-5 my-10 ${theme ? "hover:bg-yellow-400" : "hover:bg-black"} hover:text-white transition-all duration-100`}>
<svg
  className="svgIcons md:h-[20%] h-[30%] text-white hover:text-yellow-400"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="" /> {/* <- replace with actual path from file */}
</svg>


            <h1  className='font-bold md:text-2xl sm:text-[130%] text-4xl '>{heading}</h1>
            <p className='md:text-md text-sm'>{para}  </p>
        </div>
    )
}

export default ExperienceBoxes