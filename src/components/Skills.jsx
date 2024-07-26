import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import { SiJavascript } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";






const Skills = () => {
  return (
    <div className='flex items-center justify-center col-span-full m768:col-span-2 overflow-y-scroll custom-scrollbar border-[1px] border-purple-700 rounded bg-slate-800 mx-4'>
    <div className='h-[70vh] m768:h-[60vh] p-4 w-full'>
        <div className="grid grid-cols-2 m960:grid-cols-4 gap-6 md:grid-cols-4" id="frameworks-integration">
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <AiOutlineHtml5 className='text-purple-500 text-6xl' />
            </span>
        </div>
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <TiCss3 className='text-purple-500 text-6xl' />
            </span>
        </div>
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <SiJavascript className='text-purple-500 text-5xl'/>
            </span>
        </div>
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <BsFiletypeScss className='text-purple-500 text-5xl' />
            </span>
        </div>
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <SiTailwindcss  className='text-purple-500 text-5xl' />
            </span>
        </div>
        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <FaBootstrap className='text-purple-500 text-5xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <FaReact className='text-purple-500 text-5xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <FaVuejs className='text-purple-500 text-5xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all mb-6" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <FaNode className='text-purple-500 text-6xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all mb-6" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <SiPhp className='text-purple-500 text-6xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all mb-6" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <SiRubyonrails className='text-purple-500 text-6xl' />
            </span>
        </div>

        <div className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-purple-500 px-3 py-2 transition-all mb-6" href="#">
            <span className="my-6 grid h-24 w-24 place-items-center">
                <FaWordpress className='text-purple-500 text-5xl' />
            </span>
        </div>

        </div>
    </div>
</div>
  )
}

export default Skills