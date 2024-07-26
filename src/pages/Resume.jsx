import React, {useEffect, useState} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
const Resume = () => {

    const [active, setActive] = useState('/')

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='grid grid-cols-3 h-screen place-content-center gap-x-10'>

            <div className='flex gap-x-4 col-span-full m768:flex-col m768:col-span-1 mx-4 mb-8'>
                <NavLink to="/resume" className={`${active==="/"?"bg-purple-700 text-white":"text-purple-600"} border-[1px] border-purple-600 text-purple-60 text-center py-2 my-2 rounded px-4`} onClick={()=>{setActive("/")}}>Experience</NavLink>
                <NavLink to="/resume/skills" className={`${active==="skills"?"bg-purple-700 text-white":"text-purple-600"} border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4`} onClick={()=>{setActive("skills")}} >Skills</NavLink>
                <NavLink to="/resume/about" className={`${active==="about"?"bg-purple-700 text-white":"text-purple-600"} border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4`} onClick={()=> {setActive("about")}}>About Me</NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default Resume;