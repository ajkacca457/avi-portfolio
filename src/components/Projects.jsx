import React from 'react'
import Netox from '../assets/images/netox.png'
import Endomines from '../assets/images/endomines.png'
import Efecte from '../assets/images/efecte.png'
import IcareMap from '../assets/images/icare-map.png'

const projectsData = [
    {
        image:Netox,
        title: 'netox.com',
        description: 'Icare interactive map',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:Efecte,
        title: 'efecte.tenderoffer.fi',
        description: 'Description 2',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:Endomines,
        title: 'endomines.com',
        description: 'Description 2',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:IcareMap,
        title: 'Icare interactive map',
        description: 'Description 3',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"./assets/images/efecte0.png",
        title: 'Endomines.com',
        description: 'Description 4',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"https://fakeimg.pl/600x400",
        title: 'Project 5',
        description: 'Description 4',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"https://fakeimg.pl/600x400",
        title: 'Project 6',
        description: 'Description 4',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    }
];

const Projects = () => {
  return (
    <div>
        {projectsData.map((project, index) => {
            const { image, title, description, stack } = project;

            return (
                <div key={index} className='my-4 grid grid-cols-4 gap-x-6 px-4 py-2 group hover:bg-slate-800 transition duration-250 ease-out hover:ease-in items-start'>
                    <div className='col-span-1'>
                        <img src={image} alt={title} className='w-full h-full object-contain' />
                    </div>
                    <div className='col-span-3'>
                        <p className='text-lg mb-2'>{title}</p>
                        <p className='text-slate-400'>{description}</p>
                        <div className='flex flex-wrap my-4'>
                            {stack.map((item, index) => (
                                <span key={index} className='bg-slate-800 text-slate-400 px-2 py-1 rounded-full text-sm mr-2 mb-2'>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects