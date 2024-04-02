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
        role: 'Practice session coordinator',
        company:"Microverse",
        companyUrl:"https://www.microverse.org/",
        description: 'Description 3',
        stack: ["Rails","Javascript","Html", "Css"]        
    },
    {
        date: '2017 - 2018',
        role: 'Lead ( Digital content management)',
        company:"Rohto-Mentholatum (Bangladesh) Limited",
        companyUrl:"https://www.rohto.com.bd/",
        description: 'As a Motion Graphics Designer, I adeptly conceptualized, designed, and delivered quality motion graphics for various projects including corporate videos, e-Learning modules, websites, and marketing materials. Collaborating closely with art and creative teams, I ensured alignment with project scopes and objectives while selecting audio, video, colors, and animations. I effectively resolved technical and design challenges alongside editors, producers, and fellow designers, enhancing raw video footage through editing and effects.',
        stack: ["Photoshop","Illustrator", "After-effects", "Premiere-Pro", "Fedora"]        
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
                        <Link to={companyUrl} target='_blank' className=' text-sky-600 group-hover:text-sky-500 flex items-center'>
                            {company}
                            <svg className='ml-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.16934 6.30897C8.24667 4.23034 11.6145 4.23034 13.6918 6.30897C15.7694 8.38785 15.7694 11.7586 13.6918 13.8375L12.2612 15.2689C11.9684 15.5619 11.9686 16.0368 12.2616 16.3296C12.5545 16.6224 13.0294 16.6222 13.3222 16.3292L14.7528 14.8978C17.4157 12.2332 17.4157 7.91323 14.7528 5.24864C12.0896 2.58379 7.77154 2.58379 5.10835 5.24864L2.2472 8.11157C-0.415733 10.7762 -0.415733 15.0961 2.2472 17.7607C3.48184 18.9961 5.07401 19.6593 6.69015 19.7488C7.10372 19.7718 7.45758 19.4551 7.48051 19.0415C7.50343 18.6279 7.18674 18.2741 6.77316 18.2512C5.51156 18.1812 4.27192 17.6647 3.30819 16.7004C1.2306 14.6215 1.2306 11.2508 3.30819 9.1719L6.16934 6.30897Z" fill="#009afa"></path> <path d="M17.3099 4.25115C16.8963 4.22822 16.5424 4.54491 16.5195 4.95849C16.4966 5.37207 16.8133 5.72593 17.2268 5.74885C18.4884 5.81878 19.7281 6.33528 20.6918 7.29961C22.7694 9.37849 22.7694 12.7492 20.6918 14.8281L17.8307 17.691C15.7533 19.7697 12.3855 19.7697 10.3082 17.691C8.2306 15.6122 8.2306 12.2414 10.3082 10.1626L11.7388 8.73108C12.0316 8.4381 12.0314 7.96322 11.7384 7.67042C11.4454 7.37762 10.9706 7.37777 10.6778 7.67075L9.2472 9.10222C6.58427 11.7668 6.58427 16.0868 9.2472 18.7514C11.9104 21.4162 16.2285 21.4162 18.8916 18.7514L21.7528 15.8884C24.4157 13.2238 24.4157 8.90387 21.7528 6.23928C20.5182 5.00387 18.926 4.34073 17.3099 4.25115Z" fill="#009afa"></path> </g></svg>
                        </Link>
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