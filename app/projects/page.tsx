"use client";
import React from 'react'
import AllProjects from '../components/AllProjects'
import Link from 'next/link'
import { TiHome } from 'react-icons/ti'
import Footer from '../components/Footer'

const ProjectPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black text-white">
      <Link href='/' className='fixed left-10 top-[20px] z-50 bg-gradient-to-b from-slate-800 via-slate-950 to-slate-800 px-4 py-2 rounded-full text-xs md:text-sm border-[1px] border-blue-300 transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-900 hover:via-blue-950 hover:to-blue-900 flex items-center gap-x-2'><TiHome size={15} className='mb-1' />Back to home</Link>
      <h1 className='text-white w-full text-2xl md:text-3xl lg:text-5xl pr-4 leading-snug tracking-wide px-2 text-right md:text-center font-bold mt-[5vh]'>All <span className='text-purple-300'>Projects</span></h1>
      <AllProjects />
      <Footer />
    </main>
  )
}


export default ProjectPage