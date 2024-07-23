import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";




const Info = () => {
  return (
    <div>
        <div className='flex'>
            <FaPhone className="text-3xl text-purple-600 px-2"/>
            <p className="text-xl">+1 234 567 890</p>
        </div>

        <div className='flex'>
            <SiMinutemailer className="text-3xl text-purple-600 px-2"/>
            <p className="text-xl">+1 234 567 890</p>
        </div>

        <div className='flex'>
            <FaLocationDot className="text-3xl text-purple-600 px-2 "/>
            <p className="text-xl">+1 234 567 890</p>
        </div>


    </div>
  )
}

export default Info