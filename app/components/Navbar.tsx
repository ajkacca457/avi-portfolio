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
        <div className="flex justify-center items-center py-2 px-6 gap-x-6 bg-slate-950 text-white w-fit mx-auto rounded-3xl border-[1px] border-white text-xl">
            <button onClick={()=> handleScroll("hero")}><TiHome/></button>
            <button onClick={()=>handleScroll("bento-grid-scroll")}><BsInfoCircleFill /></button>
            <button onClick={()=>handleScroll("experience")}><MdWorkHistory /></button>
            <button onClick={()=>handleScroll("work")}><FaCode /></button>
            <button onClick={()=>handleScroll("contact")}><MdContactPhone /></button>
        </div>
    </div>
  )
}

export default Navbar