import React from 'react'


const experienceData = [
    {
        company: 'Company 1',
        role: 'Role 1',
        duration: 'Duration 1',
        description: 'Description 1'
    },
    {
        company: 'Company 2',
        role: 'Role 2',
        duration: 'Duration 2',
        description: 'Description 2'
    },
    {
        company: 'Company 3',
        role: 'Role 3',
        duration: 'Duration 3',
        description: 'Description 3'
    }

];


const Experience = () => {
  return (
    <div className='grid grid-cols-2'>
        {experienceData.map((experience, index) => {
            return (
                <div key={index} className='my-4 col-span-1 flex'>
                    <h3 className='text-xl'>{experience.company}</h3>
                    <div>
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