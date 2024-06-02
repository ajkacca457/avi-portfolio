import React from 'react'
import { OrbitControls } from "@react-three/drei";
import {AvatarMale} from './AvatarMale'


const Hero = () => {
  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false}/>
      <group position-y={-.6} rotation-x={-Math.PI/1.8}>
        <AvatarMale />
      </group>
      <ambientLight intensity={2} />
    </>
  )
}

export default Hero