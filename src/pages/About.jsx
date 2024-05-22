import { Canvas } from "@react-three/fiber";
import Hero from "../components/Hero";


const About = () => {
  return (
    <>
    <h1>Hello i am Avi!</h1>
    <p>My name is Avi and I am a full stack developer. I have experience in React, Node.js, Express, and MongoDB. I am currently learning how to use Three.js and React-Three-Fiber. I am excited to learn more about 3D modeling and animation. I am also interested in learning more about machine learning and artificial intelligence. I am looking forward to working on projects that involve these technologies.</p>

    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{ height: '100vh' }}>
      <Hero />
    </Canvas>
    </>
  )
}

export default About