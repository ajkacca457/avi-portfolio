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
import API from '../assets/images/api.png'
import Coursetracker from '../assets/images/coursetracker.jpg'
import HomeAccounts from '../assets/images/home-accounts.png'
import ShahriarPortfolio from '../assets/images/shariar-portfolio.png'
import Virala from '../assets/images/virala.png'
import Kettutesti from '../assets/images/kettutesti.png'

const projectsData = [
    {
        image:Netox,
        title: 'netox.com',
        description: 'Icare interactive map',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg-blocks"]
    },
    {
        image:Efecte,
        title: 'efecte.tenderoffer.fi',
        description: 'Description 2',
        stack: ["Javascript", "PHP", "Wordpress","Handlebars","Tailwind","Typescript"]
    },
    {
        image:Endomines,
        title: 'endomines.com',
        description: 'Description 2',
        stack: ["Javascript", "PHP", "Wordpress","Handlebars","Tailwind","Typescript"]
    },
    {
        image:IcareMap,
        title: 'Icare interactive map',
        description: 'Description 3',
        stack: ["Javascript", "Google-Maps-API", "PHP", "Wordpress", "Scss","Typescript"]
    },
    {
        image:IcareManual,
        title: 'Icare manual downloader application',
        description: 'Description 4',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss","Typescript"]
    },
    {
        image:Museoliitto,
        title: 'museoliitto.fi',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Tukikummit,
        title: 'tukikummit.fi',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Rightware,
        title: 'rightware.com',
        description: 'Description 4',
        stack: ["Vue","PHP", "Wordpress","HeadlesCMS", "Wordpress Rest API"]
    },
    {
        image:Virala,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind","Typescript"]
    },
    {
        image:Kettutesti,
        title: 'Legend of Soha',
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
        image:API,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image:Coursetracker,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image:HomeAccounts,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image:ShahriarPortfolio,
        title: 'Legend of Soha',
        description: 'Description 4',
        stack: ["Javascript","Html", "Css"]
    },

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