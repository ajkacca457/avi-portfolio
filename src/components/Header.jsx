import React from 'react'
import Social from './Social'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='text-center pt-8 pb-4 text-gray-300 sticky top-0 bg-slate-900'>
        <h1 className='text-5xl'>AVIJIT KARMAKER</h1>
        <h2 className='text-2xl'>Full Stack Developer</h2>
        <p className='text-lg text-slate-400'>Crafting Digital Experiences, One Line of Code at a Time.</p>
        <Social />
        <Navbar />
    </div>
  )
}

export default Header