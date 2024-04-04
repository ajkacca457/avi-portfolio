import React, {useEffect} from 'react';
import Netox from '../assets/images/netox.png';
import Endomines from '../assets/images/endomines.png';
import Efecte from '../assets/images/efecte.png';
import IcareMap from '../assets/images/icare-map.png';
import IcareManual from '../assets/images/icare-manuals.png';
import Museoliitto from '../assets/images/museoliitto.png';
import Tukikummit from '../assets/images/tukikummit.png';
import Rightware from '../assets/images/rightware.png';
import LOS from '../assets/images/los.png';
import Coursetracker from '../assets/images/coursetracker.jpg';
import HomeAccounts from '../assets/images/home-accounts.png';
import ShahriarPortfolio from '../assets/images/shariar-portfolio.png';
import Virala from '../assets/images/virala.png';
import Kettutesti from '../assets/images/kettutesti.png';


import { Link } from 'react-router-dom';

const projectsData = [
    {
        image: Netox,
        title: 'netox.com',
        url: 'https://netox.com',
        description: 'The website is constructed using custom Gutenberg React blocks, with my primary responsibility being the creation of these custom blocks designed to perform various interactive activities. Throughout this project, our team collectively devised unique solutions tailored to Gutenberg blocks. We successfully implemented several npm packages with custom Gutenberg React blocks and brainstormed innovative ideas to optimize their efficiency. Notably, we effectively utilized GSAP with custom blocks to introduce animation and interactivity. Our collaborative efforts resulted in a diverse array of custom blocks, enhancing user engagement and contributing to the overall success of the site.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg-blocks"]
    },
    {
        image: Efecte,
        title: 'efecte.tenderoffer.fi',
        url: 'https://efecte.tenderoffer.fi',
        description: 'I led this project, which involved developing a public tender website to showcase various stock-related information for consumers. It was a time-sensitive project that demanded effective time and resource management. The site is constructed using a custom WordPress theme as the base, supplemented with Tailwind CSS, JavaScript, and Handlebars templates for data rendering.',
        stack: ["Javascript", "PHP", "Wordpress", "Handlebars", "Tailwind", "Typescript"]
    },
    {
        image: Endomines,
        title: 'endomines.com',
        url: 'https://endomines.com',
        description: 'This project was initially developed by another developer, and I assumed responsibility for its ongoing development. I implemented numerous new features based on client requests and took charge of codebase management, site updates, and bug fixes. Currently, I serve as the lead developer for this project.',
        stack: ["Javascript", "PHP", "Wordpress", "Handlebars", "Tailwind", "Typescript"]
    },
    {
        image: IcareMap,
        title: 'Icare interactive map',
        url: 'https://patients.icare-world.com/find-a-provider',
        description: "The app was initially designed to display all the locations of the home providers for Icare. Initially, it had basic search functionality based on zip code or provider name. Later, the app was rebuilt with advanced features. Now, it showcases all the home provider locations on Google Maps as clusters. Users can search for locations by name or location, and the app calculates the distance between all the home providers and the user's location. It sorts out all the locations based on distance and displays them on the map alongside the user's location.",
        stack: ["Javascript", "Google-Maps-API", "PHP", "Wordpress", "Scss", "Typescript"]
    },
    {
        image: IcareManual,
        title: 'Icare manual downloader application',
        url: 'https://www.icare-world.com/ifu/',
        description: 'The app consumes API data related to manuals for iCare. It provides filtering functionalities for different models of iCare products. Users can locate all manuals available for the chosen models based on their selected location. They can then further filter the manuals by category and model. Each manual has its own filtering options for language and version.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Typescript"]
    },
    {
        image: Museoliitto,
        title: 'museoliitto.fi',
        url: 'https://museoliitto.fi/',
        description: 'I was responsible for developing all the building blocks for this site, guided by the lead developer in terms of architecture. The project was built with a custom WordPress theme utilizing custom blocks. We utilized Handlebars, Tailwind, and TypeScript for the frontend, while the backend predominantly relied on WordPress and PHP. Additionally, the site features integration with third-party APIs.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        image: Tukikummit,
        title: 'tukikummit.fi',
        url: 'https://tukikummit.fi/',
        description: "I undertook similar responsibilities for this site, where I developed building blocks in alignment with the project's requirements. Collaborating closely with the lead developer, I ensured consistency in architectural design. This project also utilized a custom WordPress theme with custom blocks, employing technologies such as Handlebars, Tailwind, and TypeScript for frontend development. On the backend, WordPress and PHP formed the foundation.",
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        image: Rightware,
        title: 'rightware.com',
        url: 'https://rightware.com/',
        description: "This site was built using Vue.js and a headless CMS architecture. Collaborating with the lead developer, we integrated the WordPress REST API with Vue.js. The frontend utilizes Vuex for managing the global state of the project, and Vue Router handles all the routes. Initially responsible for building features and bug fixes, I later assumed sole responsibility for managing the site's codebase.",
        stack: ["Vue", "PHP", "Wordpress", "HeadlesCMS", "Wordpress Rest API"]
    },
    {
        image: Virala,
        title: 'virala.fi',
        url: 'https://virala.fi/',
        description: 'Served as the lead developer, utilizing Handlebars for frontend rendering, complemented by TypeScript and Tailwind CSS. Leveraged WordPress and PHP for backend functionality. Through collaborative efforts, delivered a robust website exceeding client expectations.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        image: Kettutesti,
        title: 'kettutesti.hel.fi',
        url: 'https://kettutesti.hel.fi/',
        description: 'It is a quiz app developed for the Helsinki City website, primarily targeting children as part of a promotional campaign. Through this quiz app, both children and adults can discover which type of fox they are and share the results on social media. The frontend design of the app primarily utilizes Tailwind CSS. TypeScript was employed for implementing quizzes and logical functions.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        image: LOS,
        title: 'Legend of Soha',
        description: "This is a role-playing game that I developed as part of my web development program's JavaScript capstone project. I utilized Phaser 3 and created various scenes using Illustrator. The game logic was primarily implemented through Phaser 3 and various JavaScript classes provided by Phaser 3. It was an enjoyable project to work on.",
        stack: ["Javascript", "Phaser 3"]
    },
    {
        image: Coursetracker,
        title: 'Course Tracker',
        description: "This app was part of my final capstone project at Microverse and has been updated with the MERN stack. The Course Tracker app allows students to track details about their courses. Users create an account to log in and can then add, update, and view detailed reports of their courses. JWT authentication is used for user authentication. The app features an elegant, user-friendly UI and provides an accumulated report of all added courses for tracking study progression. It's a useful tool for students to monitor their course progress.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image: HomeAccounts,
        title: 'Home Accounts',
        description: "This web app enables users to track their financial activities effortlessly. Users can create an account and promptly begin monitoring their finances. With a user-friendly interface, there's a single form offering multiple options for entering transactions. The app conducts graphical analysis of all user transactions, providing an intuitive statistical overview of their financial status. Designed with simplicity in mind, the aim of this app is to offer users an easy-to-use interface for managing their finances effectively.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        image: ShahriarPortfolio,
        title: 'Photographer Portfolio',
        description: 'This project is a HTML, CSS, and JavaScript portfolio website designed for a photographer to showcase their work. It features an image carousel for displaying background images with a timer, and scroll animations using the AOS library. Bootstrap was utilized for styling, and Font Awesome for icons. The website is fully responsive, ensuring optimal viewing across desktops, tablets, and mobile devices.',
        stack: ["Javascript", "Html", "Css"]
    },

];

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            {projectsData.map((project, index) => {
                const { image, title, description, stack, url } = project;

                return (
                    <div key={index} className='my-4 grid grid-cols-4 gap-x-6 px-4 py-2 group hover:bg-slate-800 transition duration-250 ease-out hover:ease-in items-start'>
                        <div className='col-span-full m540:col-span-2 m960:col-span-1 mb-2'>
                            <img src={image} alt={title} className='w-full h-full object-contain' />
                        </div>
                        <div className='col-span-full m540:col-span-2 m960:col-span-3'>
                            <Link to={url} target='_blank' className='text-sky-600 group-hover:text-sky-500 flex items-center'>
                                <p className='text-lg mb-2'>
                                    {title}
                                </p>
                                <svg className='ml-1 mb-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.16934 6.30897C8.24667 4.23034 11.6145 4.23034 13.6918 6.30897C15.7694 8.38785 15.7694 11.7586 13.6918 13.8375L12.2612 15.2689C11.9684 15.5619 11.9686 16.0368 12.2616 16.3296C12.5545 16.6224 13.0294 16.6222 13.3222 16.3292L14.7528 14.8978C17.4157 12.2332 17.4157 7.91323 14.7528 5.24864C12.0896 2.58379 7.77154 2.58379 5.10835 5.24864L2.2472 8.11157C-0.415733 10.7762 -0.415733 15.0961 2.2472 17.7607C3.48184 18.9961 5.07401 19.6593 6.69015 19.7488C7.10372 19.7718 7.45758 19.4551 7.48051 19.0415C7.50343 18.6279 7.18674 18.2741 6.77316 18.2512C5.51156 18.1812 4.27192 17.6647 3.30819 16.7004C1.2306 14.6215 1.2306 11.2508 3.30819 9.1719L6.16934 6.30897Z" fill="#009afa"></path> <path d="M17.3099 4.25115C16.8963 4.22822 16.5424 4.54491 16.5195 4.95849C16.4966 5.37207 16.8133 5.72593 17.2268 5.74885C18.4884 5.81878 19.7281 6.33528 20.6918 7.29961C22.7694 9.37849 22.7694 12.7492 20.6918 14.8281L17.8307 17.691C15.7533 19.7697 12.3855 19.7697 10.3082 17.691C8.2306 15.6122 8.2306 12.2414 10.3082 10.1626L11.7388 8.73108C12.0316 8.4381 12.0314 7.96322 11.7384 7.67042C11.4454 7.37762 10.9706 7.37777 10.6778 7.67075L9.2472 9.10222C6.58427 11.7668 6.58427 16.0868 9.2472 18.7514C11.9104 21.4162 16.2285 21.4162 18.8916 18.7514L21.7528 15.8884C24.4157 13.2238 24.4157 8.90387 21.7528 6.23928C20.5182 5.00387 18.926 4.34073 17.3099 4.25115Z" fill="#009afa"></path> </g></svg>
                            </Link>
                            <p className='text-slate-400 text-justify text-body'>{description}</p>
                            <div className='flex flex-wrap my-4'>
                                {stack.map((item, index) => (
                                    <span key={index} className='bg-sky-900 text-sky-400 px-2 py-1 rounded-full text-sm mr-2 mb-2'>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;