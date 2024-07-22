import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex gap-3 items-center p-4 text-white text-lg my-4 rounded'>
            <NavLink to='/' className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-slate-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</NavLink>
            <NavLink to='/projects' className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-slate-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Projects</NavLink>
            <NavLink to='/experience' className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-slate-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Experience</NavLink>
        </nav>
    </>
  )
}

export default Navbar