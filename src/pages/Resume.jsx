import React, {useEffect} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
const Resume = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='grid grid-cols-3 h-screen place-content-center gap-x-10'>

            <div className='flex gap-x-4 col-span-full m768:flex-col m768:col-span-1 mx-4'>
                <NavLink to="/resume" className="border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4"><span className='text-purple-400'>Experinces</span></NavLink>
                <NavLink to="/resume/skills" className="border-[1px] border-purple-600 text-center py-2 my-2 px-4 rounded"><span className='text-purple-400'>Skills</span></NavLink>
                <NavLink to="/resume/about" className="border-[1px] border-purple-600 text-center py-2 my-2 rounded px-4"> <span className='text-purple-400'>About Me</span></NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default Resume;