import React from 'react'
import Netox from '../assets/images/netox.png'
import Endomines from '../assets/images/endomines.png'
import Efecte from '../assets/images/efecte.png'
import IcareMap from '../assets/images/icare-map.png'
import IcareManual from '../assets/images/icare-manuals.png'
import Museoliitto from '../assets/images/museoliitto.png'
import Tukikummit from '../assets/images/tukikummit.png'
import Rightware from '../assets/images/rightware.png'
import LOS from '../assets/images/los.png'
import Coursetracker from '../assets/images/coursetracker.jpg'
import HomeAccounts from '../assets/images/home-accounts.png'
import ShahriarPortfolio from '../assets/images/shariar-portfolio.png'
import Virala from '../assets/images/virala.png'
import Kettutesti from '../assets/images/kettutesti.png'


import { Link } from 'react-router-dom'

const projectsData = [
    {
        image:Netox,
        title: 'netox.com',
        url: 'https://netox.com',
        description: 'The website is constructed using custom Gutenberg React blocks, with my primary responsibility being the creation of these custom blocks designed to perform various interactive activities. Throughout this project, our team collectively devised unique solutions tailored to Gutenberg blocks. We successfully implemented several npm packages with custom Gutenberg React blocks and brainstormed innovative ideas to optimize their efficiency. Notably, we effectively utilized GSAP with custom blocks to introduce animation and interactivity. Our collaborative efforts resulted in a diverse array of custom blocks, enhancing user engagement and contributing to the overall success of the site.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg-blocks"]
    },
    {
        image:Efecte,
        title: 'efecte.tenderoffer.fi',
        url: 'https://efecte.tenderoffer.fi',
        description: 'Description 2',
        stack: ["Javascript", "PHP", "Wordpress","Handlebars","Tailwind","Typescript"]
    },
    {
        image:Endomines,
        title: 'endomines.com',
        url: 'https://endomines.com',
        description: 'Description 2',
        stack: ["Javascript", "PHP", "Wordpress","Handlebars","Tailwind","Typescript"]
    },
    {
        image:IcareMap,
        title: 'Icare interactive map',
        url: 'https://patients.icare-world.com/find-a-provider',
        description: 'Description 3',
        stack: ["Javascript", "Google-Maps-API", "PHP", "Wordpress", "Scss","Typescript"]
    },
    {
        image:IcareManual,
        title: 'Icare manual downloader application',
        url: 'https://www.icare-world.com/ifu/',
        description: 'Description 4',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss","Typescript"]
    },
    {
        image:Museoliitto,
        title: 'museoliitto.fi',
        url: 'https://museoliitto.fi/',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Tukikummit,
        title: 'tukikummit.fi',
        url: 'https://tukikummit.fi/',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Rightware,
        title: 'rightware.com',
        url: 'https://rightware.com/',
        description: 'Description 4',
        stack: ["Vue","PHP", "Wordpress","HeadlesCMS", "Wordpress Rest API"]
    },
    {
        image:Virala,
        title: 'virala.fi',
        url: 'https://virala.fi/',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Kettutesti,
        title: 'kettutesti.hel.fi',
        url: 'https://kettutesti.hel.fi/',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:LOS,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript", "Phaser 3"]
    },
    {
        image:Coursetracker,
        title: 'Course Tracker',
        description: 'Description 4',
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image:HomeAccounts,
        title: 'Home Accounts',
        description: 'Description 4',
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image:ShahriarPortfolio,
        title: 'Photographer Portfolio',
        description: 'Description 4',
        stack: ["Javascript","Html", "Css"]
    },

];

const Projects = () => {
  return (
    <div>
        {projectsData.map((project, index) => {
            const { image, title, description, stack,url } = project;

            return (
                <div key={index} className='my-4 grid grid-cols-4 gap-x-6 px-4 py-2 group hover:bg-slate-800 transition duration-250 ease-out hover:ease-in items-start'>
                    <div className='col-span-1'>
                        <img src={image} alt={title} className='w-full h-full object-contain' />
                    </div>
                    <div className='col-span-3'>
                        <Link to={url} target='_blank' className='text-sky-600 group-hover:text-sky-500 flex items-center'>
                            <p className='text-lg mb-2'>{title}</p>
                        </Link>
                        <p className='text-slate-400'>{description}</p>
                        <div className='flex flex-wrap my-4'>
                            {stack.map((item, index) => (
                                <span key={index} className='bg-sky-900 text-sky-400 px-2 py-1 rounded-full text-sm mr-2 mb-2'>{item}</span>
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