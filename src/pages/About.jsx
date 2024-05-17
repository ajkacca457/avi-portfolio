import { Canvas } from "@react-three/fiber";
import Hero from "../components/Hero";


const About = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }} style={{ height: '100vh' }}>
      <color attach="background" args={["#ececec"]} />
      <Hero />
    </Canvas>
  )
}

export default About