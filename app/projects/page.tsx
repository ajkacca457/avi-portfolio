"use client";
import React from 'react'
import AllProjects from '../components/AllProjects'
import Link from 'next/link'

const ProjectPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black text-white">
      <Link href='/' className='fixed left-10 top-[20px] z-50 bg-gradient-to-b from-blue-900 via-slate-900 to-stone-800 px-4 py-2 rounded-full text-sm border-[1px] border-blue-400 transition-all duration-200 hover:bg-gradient-to-l hover:from-blue-900 hover:via-slate-900 hover:to-stone-800'>Back to home</Link>
      <h1 className='text-white w-full text-2xl md:text-3xl lg:text-5xl pr-4 leading-snug tracking-wide px-2 text-right md:text-center font-bold mt-[5vh]'>All <span className='text-purple-300'>Projects</span></h1>
      <AllProjects />
    </main>
  )
}


export default ProjectPage