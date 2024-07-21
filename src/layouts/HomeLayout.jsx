import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const HomeLayout = () => {  
  return (
    <div className='relative max-w-content-large mx-auto max-h-screen overflow-hidden'>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomeLayout