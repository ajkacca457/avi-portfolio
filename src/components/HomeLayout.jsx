import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Social from './Social'

const HomeLayout = () => {
  return (
    <div className='max-w-content mx-auto'>
        <Header />
        <Social /> 
        <Outlet />
    </div>
  )
}

export default HomeLayout