import { Canvas } from "@react-three/fiber";
import Hero from "../components/Hero";


const About = () => {
  return (
    <>
    <h1>Hello i am Avi!</h1>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{ height: '100vh' }}>
      <Hero />
    </Canvas>
    </>
  )
}

export default About