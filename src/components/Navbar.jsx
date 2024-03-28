import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-center gap-3 items-center p-4 bg-gray-800 text-white my-8'>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
        </nav>
    </>
  )
}

export default Navbar