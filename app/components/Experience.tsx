"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


const Experience = () => {
    const experienceData = [
        {
          date: "2023 - Present",
          role: "Full Stack Developer",
          company: "JJ-NET OY",
          companyUrl: "https://jj-net.fi/",
          stack: [
            "Javascript",
            "React",
            "PHP",
            "Wordpress",
            "Tailwind",
            "Scss",
            "Bootstrap",
            "Html",
            "Css",
            "Node.js",
            "Typescript",
          ],
        },
        {
          date: "2022 - 2024",
          role: "Capstone porject reviewer",
          company: "Microverse",
          companyUrl: "https://www.microverse.org/",
          stack: [
            "Rails",
            "Javascript",
            "React",
            "Tailwind",
            "Scss",
            "Html",
            "Css",
            "Node.js",
            "Typescript",
          ],
        },
        {
          date: "2021 - 2023",
          role: "Full Stack Developer",
          company: "Miltton OY",
          companyUrl: "https://www.miltton.fi/",
          stack: [
            "Javascript",
            "React",
            "PHP",
            "Wordpress",
            "HeadlessCMS",
            "Tailwind",
            "Scss",
            "Bootstrap",
            "Html",
            "Css",
            "Node.js",
            "Typescript",
          ],
        },
        {
          date: "2020 - 2021",
          role: "Practice session coordinator",
          company: "Microverse",
          companyUrl: "https://www.microverse.org/",
            stack: [
                "Rails",
                "Javascript",
                "React",
                "Html",
                "Css"
            ],
        },
        {
          date: "2017 - 2018",
          role: "Lead ( Digital content management)",
          company: "Rohto-Mentholatum (Bangladesh) Limited",
          companyUrl: "https://www.rohto.com.bd/",
          stack: [
            "Photoshop",
            "Illustrator",
            "After-effects",
            "Premiere-Pro",
            "Fedora",
          ],
        },
      ];

  return (
    <div className='w-[90vw] max-w-[1280px] mx-auto text-white my-[20vh] experience'>
        <h1 className='text-white text-2xl md:text-3xl lg:text-5xl leading-snug tracking-wide px-2 text-center font-bold mb-20'>My <span className='text-purple-300'>Experience</span></h1>
        <HoverEffect items={experienceData} />
    </div>
  )
}

export default Experience