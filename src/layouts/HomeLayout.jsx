import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const HomeLayout = () => {  
  return (
    <div className='max-w-content mx-auto relative'>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomeLayout