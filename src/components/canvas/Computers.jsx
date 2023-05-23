/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import useGLTFLoader from '../../hooks/useGLTFLoader';
import CanvasLoader from '../Loader';

const Computers = memo(({ isMobile }) => {
  const computer = useGLTFLoader('./desktop_pc/scene.gltf');
  
  return (
    computer ? (
      <mesh>
        <hemisphereLight intensity={0.2} groundColor="black" />
        <pointLight intensity={0.5} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
        />
        <primitive object={computer.scene} scale={ isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.02]} />
      </mesh>
    ) : null
  )
}, (prevProps, nextProps) => prevProps.isMobile === nextProps.isMobile);

Computers.displayName = 'Computers';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <div className="pt-[13.75rem] md:pt-16 lg:pt-[6.75rem] w-full h-full">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2} 
          />
          <Computers isMobile={isMobile}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ComputersCanvas;
