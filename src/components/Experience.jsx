import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Experience = ({index,date,role,companyUrl,company,description,stack}) => {
  return (
    <div key={index} className='relative w-full'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-purple-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div class="ml-6">
        <h4 class="font-bold text-purple-500 text-xl">{role}</h4>
        <a href={companyUrl} target="_blank" class="text-lg text-purple-500 hover:underline">{company}</a>
        <span class="mt-1 block text-lg font-semibold text-purple-500">{date}</span>
        <p class="mt-2 max-w-screen-sm text-m text-purple-200">{description}</p>
      </div>
    </div>
  )
}

export default Experience