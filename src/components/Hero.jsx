import React from 'react'
import { OrbitControls } from "@react-three/drei";



const Hero = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry/>
        <meshNormalMaterial />
      </mesh>
    </>
  )
}

export default Hero