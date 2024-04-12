import React from 'react'
import Social from './Social'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-heading'>AVIJIT KARMAKER</h1>
        <h2 className='text-subheading'>Full Stack Developer</h2>
        <p className='text-body-lg text-slate-400'>Crafting Digital Experiences, One Line of Code at a Time.</p>
        <Social/>
      </div>
    </>
  )
}

export default Hero