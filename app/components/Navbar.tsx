"use client";
import React from 'react'
import { TiHome } from "react-icons/ti";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";





const Navbar = () => {

  const handleScroll = (className: string) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      const isMobile = window.innerWidth <= 768;

      element.scrollIntoView({
        behavior: 'smooth',
        block: isMobile ? 'start' : 'center', 
      });
    }
  };



  return (
    <div className='w-full fixed top-10 z-50'>
        <div className="flex justify-center items-center py-2 px-6 gap-x-6 bg-gradient-to-b from-blue-900 via-slate-900 to-stone-800 text-white w-fit mx-auto rounded-3xl border-[1px] border-blue-400 text-xl">
            <button onClick={()=> handleScroll("hero")}><TiHome className='block md:hidden'/> <span className='hidden md:block text-sm'>Home</span></button>
            <button onClick={()=>handleScroll("bento-grid-scroll")}><BsInfoCircleFill className='block md:hidden'/> <span className='hidden md:block text-sm'>About Me</span></button>
            <button onClick={()=>handleScroll("experience")}><MdWorkHistory  className='block md:hidden'/> <span className='hidden md:block text-sm'>Experience</span></button>
            <button onClick={()=>handleScroll("work")}><FaCode  className='block md:hidden'/><span className='hidden md:block text-sm'>My Work</span></button>
            <button onClick={()=>handleScroll("contact")}><MdContactPhone className='block md:hidden' /><span className='hidden md:block text-sm'>Contact</span></button>
        </div>
    </div>
  )
}


export default Navbar