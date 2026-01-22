import React, { useContext } from 'react'
import Experience from '../component/Experience'
import HeroSection from '../component/HeroSection'
import Navbar from '../component/Navbar'
import Projects from '../component/Projects'
import { GlobalContext } from '../ContextApi/Context'
import Footer from '../component/Footer'
import Feedback from '../component/Feedback'

const UiRendering = () => {
  const { theme } = useContext(GlobalContext)
  // console.log(theme);
  
  return (
   


<div className='container'>
        <Navbar/>
        <HeroSection/>
        <Experience/>
        <Projects/>
        <Feedback/>
        <Footer/>
    </div>

  )
}

export default UiRendering