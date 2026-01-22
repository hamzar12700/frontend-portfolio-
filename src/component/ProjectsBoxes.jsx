import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsBoxes = ({ id, name }) => {
  return (
    <div
      className='group border rounded-3xl flex flex-col justify-center items-start 
      w-60 h-80 px-5
      bg-black text-white
      hover:bg-gray-900 transition'
    >
      <img src="/link.png" width="100px" alt="" />

      <span className='font-bold text-[17px]'>fdgfdgf</span>

      <h1>
        Repo Link : <br />
        <Link
          className='text-yellow-400 underline hover:text-yellow-300'
          to={`https://github.com/hamzar12700/${name}`}
          target="_blank"
        >
          {name}
        </Link>
      </h1>
    </div>
  )
}

export default ProjectsBoxes
  