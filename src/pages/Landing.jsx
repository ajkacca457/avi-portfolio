import Social from "../components/Social";


const Landing = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
    <div className=" col-span-full m768:col-span-1 flex flex-col h-screen justify-center">
      <p className="text-subheading mx-4">Fullstack Developer</p>
      <h1 className="text-heading mt-4 mx-4">Hello,<span className="text-purple-500">I am Avi!</span></h1>
      <p className="text-justify text-body-lg my-8 mx-4">I build dynamic, responsive web apps using Wordpress,PHP, MongoDB, Express.js, React.js, and Node.js. Check out my projects to see my work in action.</p>
      <Social />
    </div>
    </div>
  )
}

export default Landing;