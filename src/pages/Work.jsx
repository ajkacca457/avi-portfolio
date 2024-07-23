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
import { div } from 'three/examples/jsm/nodes/Nodes.js';

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
        description: "The site used Vue.js with a headless CMS and integrated WordPress REST API. I worked with the lead developer, using Vuex for state management and Vue Router for routing. I started with features and bug fixes, then took over the entire codebase.",
        stack: ["Vue", "PHP", "Wordpress", "HeadlesCMS", "Wordpress Rest API"]
    },
    {
        id:9,
        image: Virala,
        title: 'virala.fi',
        url: 'https://virala.fi/',
        description: 'As the lead developer, I used Handlebars for frontend rendering with TypeScript and Tailwind CSS, and WordPress with PHP for the backend. Through collaboration, I delivered a robust website that exceeded client expectations.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:10,
        image: Kettutesti,
        title: 'kettutesti.hel.fi',
        url: 'https://kettutesti.hel.fi/',
        description: 'Developed for the Helsinki City website, this quiz app targets children for a promotional campaign. It lets users discover their fox type and share results on social media. The frontend uses Tailwind CSS, while TypeScript powers the quizzes and logic.',
        stack: ["Javascript", "PHP", "Wordpress", "Tailwind", "Typescript"]
    },
    {
        id:11,
        image: LOS,
        title: 'Legend of Soha',
        description: "This role-playing game was developed for my web development program's JavaScript capstone project. I used Phaser 3 for game logic and created scenes with Illustrator. The game logic was implemented using Phaser 3 and its JavaScript classes, making it a rewarding project.",
        stack: ["Javascript", "Phaser 3"]
    },
    {
        id:12,
        image: Coursetracker,
        title: 'Course Tracker',
        description: "This app, a final Microverse capstone project updated with the MERN stack, helps students track course details. Users log in, add, update, and view course reports with JWT authentication. It features an elegant UI and provides a comprehensive report to monitor progress.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        id:13,
        image: HomeAccounts,
        title: 'Home Accounts',
        description: "This web app lets users track finances effortlessly. After account creation, users can manage transactions via a simple form. It offers graphical analysis and a clear overview of financial status, all within an intuitive, easy-to-use interface.",
        stack: ["Javascript", "React", "Express", "Mongoose", "MongoDB", "Node.js"]
    },
    {
        id:14,  
        image: ShahriarPortfolio,
        title: 'Photographer Portfolio',
        description: 'This portfolio website for a photographer uses HTML, CSS, and JavaScript. It includes an image carousel, scroll animations with AOS, and is styled with Bootstrap and Font Awesome. The site is fully responsive for all devices.',
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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="absolute bottom-0 flex">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}> Previous </button>
        <button onClick={() => next()}>next</button>
      </div>
    );
  };


const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='h-screen flex flex-col justify-center'>
        <Carousel arrows={false} responsive={responsive} customButtonGroup={<ButtonGroup/>}>
            {projectsData.map((project, index) => {
                return (
                    <Project key={index} {...project} />
                );
            })}
        </Carousel>
        </div>
    );
};

export default Work;