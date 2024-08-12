"use client";
import React from 'react'

const Navbar = () => {
    const handleScroll = (className:string) => {
      const element = document.getElementsByClassName(className)[0];
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block:'center'
        });
      }
    };


  return (
    <div className='w-full fixed top-10 z-50'>
        <div className="flex justify-center items-center py-2 px-6 gap-x-4 bg-purple-600 text-white w-fit mx-auto rounded-3xl">
            <button onClick={()=> handleScroll("hero")}>Home</button>
            <button onClick={()=>handleScroll("bento-grid-scroll")}>About</button>
            <button onClick={()=>handleScroll("experience")}>Experience</button>
            <button onClick={()=>handleScroll("work")}>My Work</button>
            <button onClick={()=>handleScroll("contact")}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar