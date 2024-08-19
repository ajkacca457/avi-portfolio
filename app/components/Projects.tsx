"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const Projects = () => {

    const featuredProjects = [
        {
            title: 'netox.com',
            image: '/netox.png',
            description: "A site made with gutenburg custom blocks",
            url: 'https://netox.com',
            stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg Blocks"]
        },
        {
            title: 'Icare interactive map',
            image: '/icaremap.png',
            description: 'Interactive map for finding providers',
            url: 'https://patients.icare-world.com/find-a-provider',
            stack: ["Javascript", "PHP", "Wordpress", "Scss", "Typescript"]
        },
        {
            title: 'rightware.com',
            image: '/rightware.png',
            description: 'A headless CMS site with vue frontend',
            url: 'https://rightware.com/',
            stack: ["Vue", "PHP", "Wordpress", "HeadlesCMS", "Wordpress Rest API"]
        },
    ];


    return (
        <div className='w-[90vw] max-w-[1280px] mx-auto text-white mb-[5vh] md:mb-[15vh] work'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-5xl leading-snug tracking-wide px-2 text-center font-bold mb-5 md:mb-10'>Recent <span className='text-purple-300'>Projects</span></h1>
            <div className="grid grid-cols-3">
                {featuredProjects.map((project, index) => {
                    return (
                        <CardContainer className="inter-var bg-slate-800 rounded-md mx-auto w-[95%]" key={index}>
                            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-purple-300"
                                >
                                    {project.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-white mt-2"
                                >
                                    {project.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={project.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-xl text-xs font-normal mt-4 block text-purple-300 mb-4"
                                >
                                    {project.stack.join(", ")}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    <Link href={project.url}>Live link</Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    )
                })}
            </div>
            <div className="flex justify-end">
                <Link href="/projects" className="flex items-center gap-x-2 text-purple-300">See all projects <MdKeyboardDoubleArrowRight size={20} /></Link>
            </div>
        </div>
    )
}

export default Projects