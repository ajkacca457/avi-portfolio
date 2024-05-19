import React from 'react'
import { OrbitControls } from "@react-three/drei";
import {AvatarMale} from './AvatarMale'


const Hero = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <group position-y={-1}>
        <AvatarMale />
      </group>
      <ambientLight intensity={2} />
    </>
  )
}

export default Hero