import React, { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import Hero from './Hero';

const About = () => {

  const [scope,animate]= useAnimate();


  useEffect(()=> {
    
    const animateOnMount = async () => {
      await animate("p", {opacity:1}, {delay: stagger(0.2), duration: 0.5, ease: "easeIn"})
    }

    animateOnMount()

  },[])

  return (
    <div className='px-3 py-1' ref={scope}>
        <Hero/>
    </div>
  )
}

export default About