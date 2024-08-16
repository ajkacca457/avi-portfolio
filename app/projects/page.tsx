"use client";
import React from 'react'
import AllProjects from '../components/AllProjects'

const ProjectPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black text-white">
      <h1 className='text-white text-2xl md:text-3xl lg:text-5xl leading-snug tracking-wide px-2 text-center font-bold'>My <span className='text-purple-300'>Projects</span></h1>
      <AllProjects />
    </main>
  )
}

export default ProjectPage