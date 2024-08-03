"use client";
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

const Hero = () => {
  return (
    // <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

    //   <div className="w-[40rem] h-40 relative">
    //     {/* Gradients */}
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
    //     {/* Core component */}
    //     <SparklesCore
    //       background="transparent"
    //       minSize={0.2}
    //       maxSize={1}
    //       particleDensity={500}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"
    //     /> 
    //     {/* Radial Gradient to prevent sharp edges */}
    //     <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //   </div>
    //   <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 -mt-20">
    //     AVIJIT
    //   </h1>

    //     <p className='text-white'>Full stack developer</p>

    //     <div className="w-[40rem] h-20 relative rotate-180 ">
    //     {/* Gradients */}
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
    //     {/* Core component */}
    //     <SparklesCore
    //       background="transparent"
    //       minSize={0.2}
    //       maxSize={1}
    //       particleDensity={500}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"     
    //     /> 
    //     {/* Radial Gradient to prevent sharp edges */}
    //     <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //   </div>

    // </div>
    <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Gradients X Animations
      </p>
    </div>
  </BackgroundGradientAnimation>
  )
}

export default Hero