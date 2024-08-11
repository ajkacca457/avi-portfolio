"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";


const Projects = () => {

    const featuredProjects = [
        {
            title: 'netox.com',
            url: 'https://netox.com',
            description: 'The website is constructed using custom Gutenberg React blocks, with my primary responsibility being the creation of these custom blocks designed to perform various interactive activities. Throughout this project, our team collectively devised unique solutions tailored to Gutenberg blocks. We successfully implemented several npm packages with custom Gutenberg React blocks and brainstormed innovative ideas to optimize their efficiency. Notably, we effectively utilized GSAP with custom blocks to introduce animation and interactivity. Our collaborative efforts resulted in a diverse array of custom blocks, enhancing user engagement and contributing to the overall success of the site.',
            stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg Blocks"]
        },
        {
            title: 'Icare interactive map',
            url: 'https://patients.icare-world.com/find-a-provider',
            description: 'Description 3',
            stack: ["Javascript", "PHP", "Wordpress", "Scss","Typescript"]
        },
        {
            title: 'rightware.com',
            url: 'https://rightware.com/',
            description: 'Description 4',
            stack: ["Vue","PHP", "Wordpress","HeadlesCMS", "Wordpress Rest API"]
        },
    ];


    return (
        <div className='w-[90vw] max-w-[1280px] mx-auto text-white mb-[20vh]'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-5xl leading-snug tracking-wide px-2 text-center font-bold'>My <span className='text-purple-300'>Projects</span></h1>
            <div className="grid grid-cols-3">
                {featuredProjects.map((project, index) => {
                    return (
                        <CardContainer className="inter-var bg-slate-800 rounded-md col-span-1 mx-auto w-[95%]" key={index}>
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
                                className="text-white"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/background1.jpg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
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
        </div>
    )
}

export default Projects