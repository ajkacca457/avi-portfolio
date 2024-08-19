"use client";
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/Spotlight';
import Link from 'next/link';

const Hero = () => {

    const words = "Crafting Innovative Solutions, One Line at a Time"

    return (
        <div className="hero h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

            <Spotlight
                className="top-0 left-10 md:left-60 md:-top-20 "
                fill="blue"
            />

            <div className='flex flex-col justify-center relative'>

                <video className="w-full h-full absolute top-0 left-0 object-cover opacity-20" autoPlay loop muted>
                    <source src="/code-m.mp4" type="video/mp4" />
                </video>


                <div className="h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-center text-slate-300 relative z-20 -mt-20">
                    Avijit Karmaker
                </h3>
                <TextGenerateEffect filter={false} words={words} duration={1} className='mt-10 w-3/4 md:w-2/3 mx-auto' />
                <p className='text-white mt-10 text-base md:text-xl text-center'>Hi! I am a Full stack developer from Finland.</p>

                <Link href={`https://docs.google.com/document/d/1PelJIXVSGFz_4oKLre-k8oOjpLNcnID6zxSuQ6ezOZU/edit?usp=sharing`} target='_blank' className="relative w-fit mx-auto inline-flex h-12 mt-10 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-xs md:text-sm font-medium text-white backdrop-blur-3xl">
                        Download CV
                    </span>
                </Link>

                <div className="h-20 relative rotate-180 ">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
            </div>

        </div>
    )
}

export default Hero