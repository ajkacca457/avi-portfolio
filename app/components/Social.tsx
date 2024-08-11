import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail, MdPhoneInTalk } from "react-icons/md";



const Social = () => {
    return (
        <article>
            <h1 className="text-3xl font-semibold text-purple-300">Let's Talk</h1>
            <p className="text-sm text-white mt-3">
                Have some big idea to develop or looking for a person to fill the skill void? Then reach out I would love to hear about your project and provide help.
            </p>
            <div className="mt-6">
                <h2 className="text-lg text-purple-300">Email</h2>
                <ul className="mt-3">
                    <li className="flex items-center">
                        <div className="group bg-gradient-to-r from-indigo-500 to-blue-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <MdAlternateEmail size={20} className='text-white drop-shadow-md transition duration-300 group-hover:scale-125' />
                        </div>
                        <a href="mailto:ajkacca@gmail.com" className="text-purple-300 text-base ml-3">
                            <strong>ajkacca@gmail.com</strong>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-lg text-purple-300">Phone</h2>
                <ul className="mt-3">
                    <li className="flex items-center">
                        <div className="group bg-gradient-to-r from-indigo-500 to-blue-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <MdPhoneInTalk size={20} className='text-white drop-shadow-md transition duration-300 group-hover:scale-125' />
                        </div>
                        <a href="tel:+358465201355" className="text-purple-300 text-base ml-3">
                            <strong>+358 465 201 355</strong>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <h2 className="text-lg text-purple-300">Socials</h2>
                <ul className="flex mt-3 space-x-4">
                    <li className="group bg-gradient-to-r from-indigo-500 to-blue-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <FaGithub size={20} className='text-white drop-shadow-md transition duration-300 group-hover:scale-125' />
                    </li>
                    <li className="group bg-gradient-to-r from-indigo-500 to-blue-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <FaLinkedin size={20} className='text-white drop-shadow-md transition duration-300 group-hover:scale-125' />
                    </li>
                    <li className="group relative h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-800 flex items-center justify-center shrink-0">
                        <FaInstagram size={20} className='text-white drop-shadow-md transition duration-300 group-hover:scale-125' />
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default Social