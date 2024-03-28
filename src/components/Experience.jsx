import React from 'react'
import { Link } from 'react-router-dom'


const experienceData = [
    {
        date: '2023 - Present',
        role: 'Full Stack Developer',
        company:"JJ-NET OY",
        companyUrl:"https://jj-net.fi/",
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },

    {
        date: '2022 - 2024',
        role: 'Capstone porject reviewer',
        company:"Microverse",
        companyUrl:"https://www.microverse.org/", 
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        stack: ["Rails","Javascript", "React", "Tailwind", "Scss", "Html", "Css", "Node.js", "Typescript"]
    },

    {
        date: '2021 - 2023',
        role: 'Full Stack Developer',
        company:"Miltton OY",
        companyUrl:"https://www.miltton.fi/",
        description: 'Description 2',
        stack: ["Javascript", "React", "PHP", "Wordpress", "HeadlessCMS","Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        date: '2020 - 2021',
        role: 'Coding session coordinator',
        company:"Microverse",
        companyUrl:"https://www.microverse.org/",
        description: 'Description 3',
        stack: ["Rails","Javascript", "React", "Tailwind", "Scss", "Html", "Css", "Node.js", "Typescript"]        
    }

];



const Experience = () => {
  return (
    <div>
        {experienceData.map((experience, index) => {
            const { date, role, description, company,companyUrl,stack } = experience;

            return (
                <div key={index} className='my-4 grid grid-cols-4 gap-x-4 px-4 py-2 group hover:bg-slate-800 transition duration-250 ease-out hover:ease-in'>
                    <p className='text-sm col-span-1 text-slate-400'>{date}</p>
                    <div className='col-span-3'>
                        <p className='text-lg mb-2'>{role}</p>
                        <Link to={companyUrl} target='_blank' className=' text-sky-600 group-hover:text-sky-500'>{company}</Link>
                        <p className='text-m text-slate-400 mt-2'>{description}</p>
                        <div className='flex flex-wrap my-4'>   
                            {stack.map((item, index) => {
                                return (
                                    <span key={index} className='text-sm bg-sky-900 text-sky-400 px-3 py-1 rounded-full mr-2 mb-4'>{item}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default Experience