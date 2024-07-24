import React, {useEffect} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
const Resume = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='grid grid-cols-3 h-screen place-content-center gap-x-10'>

            <div className='flex flex-col col-span-1'>
                <NavLink to="/resume" className="border-[1px] border-purple-600 text-center py-2 my-2 rounded"><span className='text-purple-400'>Experinces</span></NavLink>
                <NavLink to="/resume/skills" className="border-[1px] border-purple-600 text-center py-2 my-2 rounded"><span className='text-purple-400'>Skills</span></NavLink>
                <NavLink to="/resume/about" className="border-[1px] border-purple-600 text-center py-2 my-2 rounded"> <span className='text-purple-400'>About</span></NavLink>
            </div>

            <Outlet className="col-span-2" />
        </div>
    );
};

export default Resume;