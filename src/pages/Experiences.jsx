import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Experience from '../components/Experience';


const experienceData = [
    {
        date: '2023 - Present',
        role: 'Full Stack Developer',
        company: "JJ-NET OY",
        companyUrl: "https://jj-net.fi/",
        description: "Currently, I serve as a Fullstack Developer at JJ-NET OY, specializing in modern WordPress development. In this role, I am responsible for designing and implementing custom Gutenberg themes and blocks, as well as spearheading full-stack projects. Leveraging my skills in frontend technologies such as HTML, Css, Scss, Tailwind, JavaScript and Typescript, I craft visually appealing and intuitive user interfaces. On the backend, I utilize my proficiency in PHP, NodeJs, Express and WordPress APIs to develop robust and scalable solutions tailored to our clients' specific requirements. Working closely with cross-functional teams, I ensure seamless integration and deployment of our projects, while consistently delivering high-quality, performance-driven solutions that exceed client expectations. Through my contributions, I play a pivotal role in driving the success and growth of our WordPress development initiatives at JJ-NET OY.",
        stack: ["Javascript", "React", "PHP", "Wordpress", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },

    {
        date: '2022 - 2024',
        role: 'Capstone porject reviewer',
        company: "Microverse",
        companyUrl: "https://www.microverse.org/",
        description: "As a Capstone Project Evaluator for software development projects, I assessed the culmination of students' technical skills and knowledge. During project presentations, I evaluated the functionality, design, and implementation of the web development solutions. I provided feedback on the effectiveness of the codebase, the utilization of appropriate technologies, and the alignment with project requirements. Collaborating with faculty, I ensured that students effectively communicated their project's objectives, development process, and outcomes.",
        stack: ["Rails", "Javascript", "React", "Tailwind", "Scss", "Html", "Css", "Node.js", "Typescript"]
    },

    {
        date: '2021 - 2023',
        role: 'Full Stack Developer',
        company: "Miltton OY",
        companyUrl: "https://www.miltton.fi/",
        description: 'As a Junior Fullstack Developer, I contributed to building and maintaining web applications, gaining experience in frontend and backend development. Working closely with senior developers, I assisted in designing, implementing, and testing features. On the frontend, I crafted responsive interfaces with HTML, Css, Scss, tailwind and JavaScript, while on the backend, I managed headless cms and wordpress RESTful APIs. Actively participating in code reviews and debugging sessions, I honed my problem-solving skills and expanded my technical knowledge, contributing to delivering high-quality software solutions.',
        stack: ["Javascript", "React", "PHP", "Wordpress", "HeadlessCMS", "Tailwind", "Scss", "Bootstrap", "Html", "Css", "Node.js", "Typescript"]
    },
    {
        date: '2020 - 2021',
        role: 'Practice session coordinator',
        company: "Microverse",
        companyUrl: "https://www.microverse.org/",
        description: 'As a coding practice session coordinator, I facilitated collaborative learning environments where individuals honed their programming skills. I organized and managed practice sessions, ensuring participants had access to relevant resources and guidance. Additionally, I actively engaged with participants by providing assistance in solving coding challenges and participated in peer coding sessions, collaborating with others to tackle challenges collectively and exchange insights.',
        stack: ["Rails", "Javascript", "Html", "Css"]
    },
    {
        date: '2017 - 2018',
        role: 'Lead ( Digital content management)',
        company: "Rohto-Mentholatum (Bangladesh) Limited",
        companyUrl: "https://www.rohto.com.bd/",
        description: 'As a Motion Graphics Designer, I adeptly conceptualized, designed, and delivered quality motion graphics for various projects including corporate videos, e-Learning modules, websites, and marketing materials. Collaborating closely with art and creative teams, I ensured alignment with project scopes and objectives while selecting audio, video, colors, and animations. I effectively resolved technical and design challenges alongside editors, producers, and fellow designers, enhancing raw video footage through editing and effects.',
        stack: ["Photoshop", "Illustrator", "After-effects", "Premiere-Pro", "Fedora"]
    }
];



const Experiences = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            {experienceData.map((experience, index) => {
                return (
                    <Experience index={index} {...experience}/>
                );
            })}

        </div>
    );
};

export default Experiences;