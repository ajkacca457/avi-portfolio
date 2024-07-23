import Social from "../components/Social";


const Landing = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
    <div className="col-span-1 flex flex-col h-screen justify-center">
      <p className="text-lg">Fullstack Developer</p>
      <h1 className="text-7xl mt-4">Hello,<span className="text-purple-500">I am Avi!</span></h1>
      <p className="text-justify text-xl my-8">I build dynamic, responsive web apps using Wordpress,PHP, MongoDB, Express.js, React.js, and Node.js. Check out my projects to see my work in action.</p>
      <Social />
    </div>
    </div>
  )
}

export default Landing;