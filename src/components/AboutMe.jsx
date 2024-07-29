import React from "react";

const AboutMe = () => {
  return (
    <div className="h-[70vh] m768:h-[60vh] bg-slate-800 col-span-full m768:col-span-4 rounded border-[1px] border-green-700 overflow-y-scroll custom-scrollbar mx-4 py-4">
      <p className="p-4">
        Hi, I'm Avi. With seven years of combined experience in project management and programming, I've worked extensively in NGOs and the corporate sector, focusing on community and HR development, as well as IT projects like e-learning. Over the past three years, I've worked as a programmer in several companies, gaining hands-on experience and honing my skills. I attended Microverse, an online coding school, for an 8-month intensive bootcamp that equipped me with technical and soft skills.
      </p>
      <p className="px-4">I am a Full Stack Developer proficient in:</p>

        <ul className="px-4">
            <li> <span className="text-green-500 font-bold block">Languages:</span> JavaScript (ES6), Python, Ruby, PHP, HTML5, CSS3</li>
            <li><span className="text-green-500 font-bold block">Frameworks:</span> Ruby on Rails, ReactJS, jQuery, Tailwind, Bootstrap, Scss, Vue.js, Node.js</li>
            <li><span className="text-green-500 font-bold block">Databases:</span> MySQL, PostgreSQL, SQLite</li>
            <li><span className="text-green-500 font-bold block">Concepts:</span> Data Structures & Algorithms, Git,Pair Programming, Heroku, OOP/OOD, API Development, MVC</li>
            <li><span className="text-green-500 font-bold block">Graphics:</span> Photoshop, Illustrator, After Effects, Premiere Pro, Sketch</li>  
        </ul>

        <p className="px-4 mt-2">
            My superiors and colleagues regard me as a creative individual who prioritizes the client's business needs. While I can work independently, I am also effective in team settings and capable of leading.
        </p>

        <p className="px-4">
            In addition to coding, I'm passionate about fitness, MMA, and learning Finnish. I'm eager to join innovative teams to build impactful solutions.
        </p>


    </div>
  );
};

export default AboutMe;
