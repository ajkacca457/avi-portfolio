import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const HomeLayout = () => {

  
  return (
    <div className='max-w-content mx-auto relative'>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomeLayout