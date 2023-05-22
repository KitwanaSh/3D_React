import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGL, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <div>Computers</div>
  )
}

export default Computers