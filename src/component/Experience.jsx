import React from 'react'
import ExperienceBoxes from './ExperienceBoxes'
import { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const Experience = () => {


    const {theme , user} = useContext(GlobalContext)

    let expBox = [{
        heading: "Frontend Web Developer",
        para: "Html , css , js , Bootstrap , Tailwind Css"
    },
    {
        heading: "Backend Web Developer",
        para: "Php , Laravel , Node js , Express js , Firebase , Sql Server , Mongodb"
    }

    ]
    return (
     <div className="min-h-[80vh] border-b container mx-auto px-4">
  <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl my-10">
    Experience
  </h1>

  {/* Main wrapper */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-10">

    {/* Left side */}
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
      {expBox.map((items, index) => (
        <ExperienceBoxes
          key={index}
          heading={items.heading}
          para={items.para}
        />
      ))}
    </div>

    {/* Right side */}
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <img
        src={user?.avatar_url}
        alt="User"
        className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover"
      />
    </div>

  </div>
</div>

    )
}

export default Experience