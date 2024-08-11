"use client";
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/Spotlight';

const Hero = () => {

    const words = "Crafting Innovative Solutions, One Line at a Time"

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

            <Spotlight
                className="top-0 left-10 md:left-60 md:-top-20 "
                fill="blue"
            />

            <div className="w-2/3 h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#0066b2"
                />
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-slate-300 relative z-20 -mt-20">
                Avijit Karmaker
            </h3>
            <TextGenerateEffect filter={false} words={words} duration={1} className='mt-10' />
            <p className='text-white mt-10 text-xl'>Hi! I am a Full stack developer from Finland.</p>

            <button className="relative inline-flex h-12 mt-10 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Explore my work
                </span>
            </button>

            <div className="w-2/3 h-20 relative rotate-180 ">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#0066b2"
                />
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>

        </div>
    )
}

export default Hero