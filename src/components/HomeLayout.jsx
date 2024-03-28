import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Social from './Social'
import Navbar from './Navbar'

const HomeLayout = () => {
  return (
    <div className='max-w-content mx-auto relative'>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomeLayout