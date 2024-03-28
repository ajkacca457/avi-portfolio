import React from 'react'


const experienceData = [
    {
        date: 'Company 1',
        role: 'Role 1',
        duration: 'Duration 1',
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.'
    },
    {
        date: 'Company 2',
        role: 'Role 2',
        duration: 'Duration 2',
        description: 'Description 2'
    },
    {
        date: 'Company 3',
        role: 'Role 3',
        duration: 'Duration 3',
        description: 'Description 3'
    }

];



const Experience = () => {
  return (
    <div>
        {experienceData.map((experience, index) => {
            const { date, role, duration, description } = experience;

            return (
                <div key={index} className='my-4 grid grid-cols-4 gap-x-4'>
                    <p className='text-xl col-span-1'>{date}</p>
                    <div className='col-span-3'>
                        <p className='text-lg'>{experience.role}</p>
                        <p className='text-lg'>{experience.duration}</p>
                        <p className='text-lg'>{experience.description}</p>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default Experience