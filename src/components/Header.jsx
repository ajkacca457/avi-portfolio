import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <h1 className='text-5xl'>Avi<span className='text-purple-600'>.</span></h1>
        <Navbar />
    </div>
  )
}

export default Header