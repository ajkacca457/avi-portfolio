import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className='fixed w-full z-50 left-0 box-border bg-gradient-to-l from-slate-800 via-slate-950 to-slate-900'>
      <div className='flex justify-between items-center max-w-content-large mx-auto'>
        <h1 className='hidden m768:block mx-4 text-logo-heading'>Avi<span className='text-purple-600'>.</span></h1>
        <Navbar />
        <MobileNav />
      </div>
    </div>
  )
}

export default Header