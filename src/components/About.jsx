import React, { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'

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
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'> Hi! My name is <span className='text-white'>Avijit Karmaker</span>,and I am a passionate Fullstack Developer and Graphics Designer based in Vantaa, Finland. With years of experience in handling <span className='text-white'>diverse projects</span>, I have honed my skills to deliver results consistently. My journey has led me to work with renowned multinational companies, where I have gained invaluable insights and experiences that have shaped me both personally and professionally.</p>
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'> While my tenure as a programmer may not span decades, my journey in the field is relatively recent. Before delving into programming, I navigated the realms of project and programme management for various companies. It was in 2020 that I stumbled upon <span className='text-white'>Microverse, a transformative educational platform</span>, igniting my official foray into programming.</p>
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'> Completing the Microverse curriculum marked a significant turning point, equipping me with the essential skills and knowledge to navigate the tech landscape. Subsequently, I immersed myself in the Finnish tech scene, lending my skills to several esteemed companies. Presently, I'm privileged to serve as a <span className='text-white'>fullstack developer at JJ-NET OY</span>, where I channel my passion for coding into <span className='text-white'>innovative solutions and projects.</span></p>
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'> Reflecting on my journey, I'm filled with gratitude for the path I've chosen. Though I may have wished to discover my passion for programming earlier, the experiences and lessons garnered along the way have far surpassed my expectations. Today, programming isn't just a career—it's a calling, an integral part of my identity, and a source of immense fulfillment.</p>
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'> I am excited to <span className='text-white'>collaborate with driven and innovative teams</span> to build something meaningful that will have a positive impact on society. I am confident that my blend of technical proficiency, creativity, and dedication will contribute to the success of any project I undertake</p>
        <p className='text-slate-400 opacity-0 my-3 text-justify text-body'>I am excited to be a part of new endeavors and eager to make a difference in the world through my work. <span className='text-white'>Let's connect on social platform.</span></p>
    </div>
  )
}

export default About