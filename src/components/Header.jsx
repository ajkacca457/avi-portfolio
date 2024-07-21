import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <h1 className='text-4xl'>Avi.</h1>
        <Navbar />
    </div>
  )
}

export default Header