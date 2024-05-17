import { Canvas } from "@react-three/fiber";
import Hero from "../components/Hero";


const About = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{ height: '100vh' }}>
      <color attach="background" args={["#ececec"]} />
      <Hero />
    </Canvas>
  )
}

export default About