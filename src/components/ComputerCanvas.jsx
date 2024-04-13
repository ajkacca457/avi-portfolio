import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'



 const Computer= () => {
    const desk = useGLTF('../../desktop/scene.gltf');

  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <primitive object={desk.scene}/>
    </mesh>
  )

 }




const ComputerCanvas = () => {
 return (
    <Canvas className='w-full h-full bg-slate-500' camera={{position:[0,0,5]}}>
        <Suspense fallback={null}>
            <Preload all/>
            <Computer/>
            <OrbitControls/>
        </Suspense>
    </Canvas>
 )
}

export default ComputerCanvas