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
                <NavLink to="/resume" className={`${active==="/"?"bg-slate-800":"bg-slate-600"}  text-sm rounded-md text-white font-bold w-full text-center h-fit px-4 py-4 mr-2 my-2 relative
                      before:w-full before:h-full before:scale-x-[1.01] before:scale-y-[1.0300] before:absolute before:top-[50%] before:left-[50%]
                      before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
                    before:from-emerald-500 before:to-emerald-900 before:bg-gradient-to-t
                      before:rounded-md  
                    hover:bg-slate-900 transition-all duration-300`} onClick={()=>{setActive("/")}}><span className={`${active==="/"?"text-white":"text-purple-600"}`}>Experience</span></NavLink>
                <NavLink to="/resume/skills" className={`${active==="skills"?"bg-purple-700":"text-purple-600"} border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4`} onClick={()=>{setActive("skills")}} >Skills</NavLink>
                <NavLink to="/resume/about" className={`${active==="about"?"bg-purple-700":"text-purple-600"} border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4`} onClick={()=> {setActive("about")}}>About Me</NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default Resume;