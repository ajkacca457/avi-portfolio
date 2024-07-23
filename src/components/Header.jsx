import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='fixed w-full z-50 left-0'>
      <div className='flex justify-between items-center max-w-content-large mx-auto'>
        <h1 className='text-5xl'>Avi<span className='text-purple-600'>.</span></h1>
        <Navbar />
      </div>
    </div>
  )
}

export default Header