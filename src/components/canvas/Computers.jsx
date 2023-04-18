import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader";
const Stars = ({isMobile}) => {
  const star = useGLTF('./smol_ame/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} position={[2,1,3]} color="blue" groundColor="red" />
      {/* <pointLight intensity={1} position={[0,0.8,0]}/> */}
      <spotLight position={[-20,75,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={star.scene} 
        scale={isMobile? 1.2 : 1.7}
        position={isMobile? [0,-2.0, 0]:[0,-2.8,-0.5]}
        rotation={[-0.01, 0.8, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // use for detecting on mobile or not
    const mediaQuery = window.matchMedia('(max-width:550px');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    // Event listeners
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener('change', 
          handleMediaQueryChange);
      }
  }, [])

  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
           
          />
          <Stars isMobile={isMobile}/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas