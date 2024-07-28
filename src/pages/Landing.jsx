import Social from "../components/Social";
import LandingImage from "../assets/images/landing.png";


const Landing = () => {
  return (
    <div className="grid grid-cols-5 gap-x-6 place-items-center">
    <div className=" col-span-full m768:col-span-3 flex flex-col h-screen justify-center">
      <p className="text-subheading mx-4">Fullstack Developer</p>
      <h1 className="text-heading mt-4 mx-4 ">Hello,<span className="text-heading bg-gradient-to-r from-emerald-400 via-blue-600 to-purple-700 inline-block text-transparent bg-clip-text">I am Avi!</span></h1>
      <p className="text-justify text-body-lg my-8 mx-4 w-4/5">I build dynamic, responsive web apps using Wordpress,PHP, MongoDB, Express.js, React.js, and Node.js. Check out my projects to see my work in action.</p>
      <Social />
    </div>

    <div className="col-span-full m768:col-span-2">
      <img src={LandingImage} alt="Landing" className="w-full h-full object-cover" />
    </div>

    </div>
  )
}

export default Landing;