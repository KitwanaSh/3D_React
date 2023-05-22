import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGL, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <printLight intensity={1} />
      <primitive object = {computer.scene} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas 
      frameLoop = "demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={ {preserveDawingBuffer:true} }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
         ennableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers