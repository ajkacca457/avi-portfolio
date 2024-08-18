"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import Social from './Social'
import Form from './Form'
import { Spotlight } from "./ui/Spotlight";

const Contact = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null

  return (
    <section className='w-[90vw] max-w-[1280px] mx-auto text-white mb-[5vh] md:mb-[10vh] contact'>
      <h1 className='text-white text-2xl md:text-3xl lg:text-5xl leading-snug tracking-wide px-2 text-center font-bold mb-20'>
        Ways to <span className='text-purple-300'>Reach Me</span>
      </h1>
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto bg-slate-900 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif] relative">
      <Spotlight
      className="top-40 left-60 absolute h-full opacity-80"
      fill="blue"
    />
        <Social />
        <Form />
      </div>
    </section>
  )
}

export default Contact