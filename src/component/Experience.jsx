import React from 'react'
import ExperienceBoxes from './ExperienceBoxes'
import { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const Experience = () => {


    const {theme} = useContext(GlobalContext)

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
       <div className={` min-h-[100vh]`}>
            <h1 className='text-center font-bold sm:text-6xl text-5xl text-[40px] py-2 w-full'>Experience</h1>
            {/* whole container  */}
            <div className='flex md:flex-row flex-col justify-center items-center  '>
                    {/* left side */}
                <div className='min-h-100 flex gap-2 sm:flex-row flex-col sm:w-full md:w-[80%]'>
                    {expBox.map((items) => {
                        return <ExperienceBoxes heading={items.heading} para={items.para} />
                    })}
                    {/* <ExperienceBoxes  /> */}
                </div>
                    {/* right side */}
                <div className='w-1/2  h-100 flex justify-center items-center'>
                    <img
                        src="/profile.jpeg"
                        className="h-1/2 rounded-full"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience