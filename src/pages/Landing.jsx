import { Canvas } from "@react-three/fiber";
import Hero from "../components/Hero";
import Social from "../components/Social";


const Landing = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
    <div className="col-span-1 flex flex-col">
      <h1 className="text-4xl">Hello, I am Avi!</h1>
      <p className="text-justify text-lg">My name is Avi and I am a full stack developer. I have experience in React, Node.js, Express, and MongoDB. I am currently learning how to use Three.js and React-Three-Fiber. I am excited to learn more about 3D modeling and animation. I am also interested in learning more about machine learning and artificial intelligence. I am looking forward to working on projects that involve these technologies.</p>
      <Social />
    </div>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{ height: '100vh' }} className="col-span-1">
      <Hero />
    </Canvas>
    </div>
  )
}

export default Landing