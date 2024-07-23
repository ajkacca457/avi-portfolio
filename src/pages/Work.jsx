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
import Project from '../components/Project';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projectsData = [
    {   id:1,
        image: Netox,
        title: 'netox.com',
        url: 'https://netox.com',
        description: "The website was built using custom Gutenberg React blocks, with my main role focused on creating these blocks for various interactive activities. Our team implemented several npm packages and utilized GSAP to add animation and interactivity, enhancing user engagement and the site's success.",
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Gutenberg-blocks"]
    },
    {   
        id:2,
        image: Efecte,
        title: 'efecte.tenderoffer.fi',
        url: 'https://efecte.tenderoffer.fi',
        description: 'I led the development of a public tender website showcasing stock information for consumers. This time-sensitive project required efficient management. Built on a custom WordPress theme, the site uses Tailwind CSS, JavaScript, and Handlebars templates.',
        stack: ["Javascript", "PHP", "Wordpress", "Handlebars", "Tailwind", "Typescript"]
    },
    {
        id:3,
        image: Endomines,
        title: 'endomines.com',
        url: 'https://endomines.com',
        description: 'I took over this project from another developer and continued its development. I added new features based on client requests, managed the codebase, and handled site updates and bug fixes. Now, I serve as the lead developer for the project.',
        stack: ["Javascript", "PHP", "Wordpress", "Handlebars", "Tailwind", "Typescript"]
    },
    {
        id:4,
        image: IcareMap,
        title: 'Icare interactive map',
        url: 'https://patients.icare-world.com/find-a-provider',
        description: "The app initially showed Icare home providers with basic zip code or name search. It was rebuilt to display locations on Google Maps as clusters. Users can now search by name or location, with the app calculating and sorting distances, displaying both providers and the user on the map.",
        stack: ["Javascript", "Google-Maps-API", "PHP", "Wordpress", "Scss", "Typescript"]
    },
    {
        id:5,
        image: IcareManual,
        title: 'Icare manual downloader application',
        url: 'https://www.icare-world.com/ifu/',
        description: 'The app consumes API data for iCare manuals, providing filtering for different product models. Users can find manuals for chosen models by location, then further filter by category and model. Each manual also has filtering options for language and version.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "Scss", "Typescript"]
    },
    {
        id:6,
        image: Museoliitto,
        title: 'museoliitto.fi',
        url: 'https://museoliitto.fi/',
        description: "I developed the site's building blocks, following the lead developer's architectural guidance. Using a custom WordPress theme with Handlebars, Tailwind, and TypeScript on the frontend, and WordPress and PHP on the backend, the site also integrates with third-party APIs.",
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:7,
        image: Tukikummit,
        title: 'tukikummit.fi',
        url: 'https://tukikummit.fi/',
        description: "I developed building blocks for this site, ensuring architectural consistency with the lead developer. The project used a custom WordPress theme with Handlebars, Tailwind, and TypeScript for the frontend, and WordPress and PHP for the backend.",
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:8,
        image: Rightware,
        title: 'rightware.com',
        url: 'https://rightware.com/',
        description: "This site was built using Vue.js and a headless CMS architecture. Collaborating with the lead developer, we integrated the WordPress REST API with Vue.js. The frontend utilizes Vuex for managing the global state of the project, and Vue Router handles all the routes. Initially responsible for building features and bug fixes, I later assumed sole responsibility for managing the site's codebase.",
        stack: ["Vue", "PHP", "Wordpress", "HeadlesCMS", "Wordpress Rest API"]
    },
    {
        id:9,
        image: Virala,
        title: 'virala.fi',
        url: 'https://virala.fi/',
        description: 'Served as the lead developer, utilizing Handlebars for frontend rendering, complemented by TypeScript and Tailwind CSS. Leveraged WordPress and PHP for backend functionality. Through collaborative efforts, delivered a robust website exceeding client expectations.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:10,
        image: Kettutesti,
        title: 'kettutesti.hel.fi',
        url: 'https://kettutesti.hel.fi/',
        description: 'It is a quiz app developed for the Helsinki City website, primarily targeting children as part of a promotional campaign. Through this quiz app, both children and adults can discover which type of fox they are and share the results on social media. The frontend design of the app primarily utilizes Tailwind CSS. TypeScript was employed for implementing quizzes and logical functions.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:11,
        image: LOS,
        title: 'Legend of Soha',
        description: "This is a role-playing game that I developed as part of my web development program's JavaScript capstone project. I utilized Phaser 3 and created various scenes using Illustrator. The game logic was primarily implemented through Phaser 3 and various JavaScript classes provided by Phaser 3. It was an enjoyable project to work on.",
        stack: ["Javascript", "Phaser 3"]
    },
    {
        id:12,
        image: Coursetracker,
        title: 'Course Tracker',
        description: "This app was part of my final capstone project at Microverse and has been updated with the MERN stack. The Course Tracker app allows students to track details about their courses. Users create an account to log in and can then add, update, and view detailed reports of their courses. JWT authentication is used for user authentication. The app features an elegant, user-friendly UI and provides an accumulated report of all added courses for tracking study progression. It's a useful tool for students to monitor their course progress.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        id:13,
        image: HomeAccounts,
        title: 'Home Accounts',
        description: "This web app enables users to track their financial activities effortlessly. Users can create an account and promptly begin monitoring their finances. With a user-friendly interface, there's a single form offering multiple options for entering transactions. The app conducts graphical analysis of all user transactions, providing an intuitive statistical overview of their financial status. Designed with simplicity in mind, the aim of this app is to offer users an easy-to-use interface for managing their finances effectively.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        id:14,  
        image: ShahriarPortfolio,
        title: 'Photographer Portfolio',
        description: 'This project is a HTML, CSS, and JavaScript portfolio website designed for a photographer to showcase their work. It features an image carousel for displaying background images with a timer, and scroll animations using the AOS library. Bootstrap was utilized for styling, and Font Awesome for icons. The website is fully responsive, ensuring optimal viewing across desktops, tablets, and mobile devices.',
        stack: ["Javascript", "Html", "Css"]
    },

];


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Carousel responsive={responsive} className='h-screen'>
            {projectsData.map((project, index) => {
                return (
                    <Project key={index} {...project} />
                );
            })}
        </Carousel>
    );
};

export default Work;