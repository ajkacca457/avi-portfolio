import React from 'react'

const projectsData = [
    {
        image:"https://fakeimg.pl/600x400",
        title: 'Project 1',
        description: 'Icare interactive map',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"https://fakeimg.pl/600x400",
        title: 'Icare manual downloader',
        description: 'Description 2',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"https://fakeimg.pl/600x400",
        title: 'Rightware.com',
        description: 'Description 3',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        image:"https://fakeimg.pl/600x400",
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
                <div key={index} className='my-4 grid grid-cols-4 gap-x-6 px-4 py-2 group hover:bg-slate-800 transition duration-250 ease-out hover:ease-in'>
                    <div className='col-span-1'>
                        <img src={image} alt={title} className='w-full h-full object-cover' />
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