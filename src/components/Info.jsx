import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";




const Info = () => {
  return (
    <div className='w-full p-8'>
        <div className='flex my-8 w-3/4 mx-auto'>
            <FaPhone className="text-6xl text-purple-500 p-4 bg-slate-700 mr-6"/>
            <div className='flex flex-col justify-between'>
                <p className='text-s text-purple-400'>Phone</p>
                <p className="text-xl">+1 234 567 890</p>
            </div>
        </div>

        <div className='flex my-8 w-3/4 mx-auto'>
            <SiMinutemailer className="text-6xl text-purple-500 p-4 bg-slate-700 mr-6"/>
            <div className='flex flex-col justify-between'>
                <p className='text-s text-purple-400'>Phone</p>
                <p className="text-xl">+1 234 567 890</p>
            </div>
        </div>

        <div className='flex my-8 w-3/4 mx-auto'>
            <FaLocationDot className="text-6xl text-purple-500 p-4 bg-slate-700 mr-6"/>
            <div className='flex flex-col justify-between'>
                <p className='text-s text-purple-400'>Phone</p>
                <p className="text-xl">+1 234 567 890</p>
            </div>
        </div>


    </div>
  )
}

export default Info