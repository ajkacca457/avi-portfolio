/* eslint-disable */
"use client";
import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbFileTypeCss } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap,FaReact,FaNodeJs,FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp,SiRubyonrails,SiTypescript } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { Spotlight } from "./ui/Spotlight";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="bento-grid-scroll w-[90vw] max-w-[1280px] mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          img={item.img}
          id={i}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="h-full place-content-center"
    >   
    </motion.div>
  );
};


const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 absolute top-0 left-0"
    >
      <video className="w-full h-full absolute top-0 left-0 object-fill opacity-30" autoPlay loop muted>
        <source src="/gradient.mp4" type="video/mp4" />
      </video>

      <motion.div className="h-full w-full rounded-lg p-4 flex flex-col justify-center gap-y-4 z-20">
        <p className="text-white text-justify text-sm md:text-base lg:text-lg">Hi, I’m Avi. I enjoy learning new technologies, building projects, and studying Finnish. With four years as a Programme/Project Manager in NGOs and the corporate sector, I've worked on community development, HR, and IT projects like e-learning. After self-learning programming, I completed an intensive bootcamp at Microverse and have been working as a Full Stack Developer for over three years. I’m eager to collaborate with innovative teams to create impactful projects.</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
      initial: {
      },
      hover: {
        transition: {
          delay: 0.2,
          duration: 0.2,
        },
      },
    };
const arr= [<AiOutlineHtml5 className="text-purple-200" size={20}/>, 
<TbFileTypeCss className="text-purple-200" size={20} />, 
<BsFiletypeScss className="text-purple-200" size={20}/>, 
<RiTailwindCssFill className="text-purple-200" size={20}/>, 
<FaBootstrap className="text-purple-200" size={20}/>,
 <IoLogoJavascript className="text-purple-200" size={20}/>, 
 <FaReact className="text-purple-200" size={20}/>, 
 <RiNextjsFill className="text-purple-200" size={20}/>, 
 <FaNodeJs className="text-purple-200" size={20}/>, 
 <SiPhp className="text-purple-200" size={20}/>,
 <FaWordpress className="text-purple-200" size={18}/>,
 <DiRuby className="text-purple-200" size={18}/>, 
 <SiRubyonrails className="text-purple-200" size={20}/>,
<SiTypescript className="text-purple-200" size={16}/>]
return (
  <motion.div
    initial="initial"
    animate="animate"
    className="grid grid-cols-3 gap-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"    
  >
    
    <video className="w-full h-full absolute top-0 left-0 object-fill opacity-10" autoPlay loop muted>
      <source src="/drop.mp4" type="video/mp4" />
    </video>

    {arr.map(( item, index) => (
      <motion.div
      variants={variants}
        key={"skelenton-two" + index}
        initial="initial"
        whileHover="hover"
        style={{
          maxWidth: "100%",
        }}
        className="relative inline-flex h-8 md:h-10 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"      >
                <span className="absolute inset-[-1000%] bg-[#4447d1]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {item}
                </span>
        </motion.div>
    ))}
  </motion.div>
);
};


const SkeletonFour = () => {
  const CARDS = [
    {
      id: 0,
      name: "",
      designation: "",
      content: (
        <>
        <img src="/web.png" alt="Web development" className="w-1/4 mx-auto mb-2 drop-shadow-md" />
        <h1 className="text-white text-center">
          Web Development.
        </h1>
        </>
      ),
    },
    {
      id: 1,
      name: "",
      designation: "",
      content: (
        <>
        <img src="/application.png" alt="Application development" className="w-1/4 mx-auto mb-2 drop-shadow-md" />
        <h1 className="text-white text-center">
          Application Development.
        </h1>
        </>
      ),
    },
    {
      id: 2,
      name: "",
      designation: "",
      content: (
        <>
        <img src="/mobile.png" alt="Mobile development" className="w-1/4 mx-auto mb-2 drop-shadow-md" />
        <h1 className="text-white text-center">
          Mobile Development.
        </h1>
        </>
      ),
    },
  ]; 


  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className=" w-full h-full mt-4 min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 relative"
    >
      {/* <CardStack items={CARDS} /> */}
    </motion.div>
  );
};

const SkeletonFive = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col"
    >
      <video className="w-full h-full absolute top-0 left-0 object-cover opacity-70" autoPlay loop muted>
        <source src="/globe.mp4" type="video/mp4" />
      </video>
      <h1 className="text-white text-center text-2xl absolute top-10 left-10 z-30">Time Zone Flexibility</h1>
      <h1 className="text-white text-center text-2xl absolute top-1/2 left-20 z-30">Remote Work Expertise</h1>
      <h1 className="text-white text-center text-2xl absolute bottom-5 right-10 z-30">Multi-Language Communication</h1>

    </motion.div>
  );
};


const items = [
  {
    header: <SkeletonOne />,
    className: "w-full block md:col-span-1",
    title:"Integrity, Respect, and Commitment",
    img:"/profile.jpg",   
    description: (
      <span className="text-sm">
      </span>
    ),
    },
  {
    title: "About Me",
    header: <SkeletonTwo />,
    className:"col-span-2",
  },
  {
    title: "Skills",
    header: <SkeletonThree />,
    className: "col-span-2 md:col-span-1",
  },
  {
    title: "My Services",
    header: <SkeletonFour />,
    className:"col-span-2 md:col-span-1"
  },

  {
    header: <SkeletonFive />,
    className: "col-span-2 md:col-span-1",
  },

];
