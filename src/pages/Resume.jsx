import React, {useEffect, useState} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Coding from '../assets/images/coding.gif';
const Resume = () => {

    const [active, setActive] = useState('/')

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='grid grid-cols-6 h-screen place-content-center gap-x-10'>

            <div className='flex gap-x-4 col-span-full m768:flex-col m768:col-span-2 mx-4 mb-8 m768:justify-between'>
                <div className='flex gap-x-4 m768:flex-col'>
                  <NavLink to="/resume" className={`${active==="/"?"bg-green-800 border-[1px] border-green-600":"border-[1px] border-green-600"} rounded-md my-2 px-2 py-2 text-center text-sm transition-all duration-300`} onClick={()=>{setActive("/")}}><span className={`${active==="/"?"text-white":"text-white-600"}`}>Experience</span></NavLink>
                  <NavLink to="/resume/about" className={`${active==="about"?"bg-green-800 border-[1px] border-green-600":"border-[1px] border-green-600"} my-2 rounded-md px-2 py-2 text-center text-sm transition-all duration-300`} onClick={()=> {setActive("about")}}>About Me</NavLink>
                </div>
                <div className='hidden m768:grid m768:col-span-2'>
                  <img src={Coding} alt="Coding" className="w-full h-full object-cover" />
                </div>

            </div>

            <Outlet/>
        </div>
    );
};

export default Resume;