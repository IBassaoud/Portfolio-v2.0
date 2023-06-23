/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';
import { useQuery, useQueryClient } from 'react-query';

const Computers = memo(({ isMobile }) => {
  const queryClient = useQueryClient();
  const { scene: computer } = useGLTF('./desktop_pc/scene.gltf');

  // Define a unique key for the query
  const queryKey = './desktop_pc/scene.gltf';

  // Fetch the model and cache it using React Query
  const fetchModel = async () => {
    const response = await useGLTF.preload('./desktop_pc/scene.gltf');
    queryClient.setQueryData(queryKey, response);
    return response;
  };

  // Use React Query's useQuery hook to fetch the model and cache it
  const { data: cachedModel } = useQuery(queryKey, fetchModel);

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <pointLight intensity={0.5} />
      <primitive object={cachedModel || computer} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.02]} />
    </mesh>
  )
}, (prevProps, nextProps) => prevProps.isMobile === nextProps.isMobile);

Computers.displayName = 'Computers';
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

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
        camera={{ position: isMobile ? [10, 1.5, 2.5] : [20, 3, 5], fov: isMobile ? 35 : 25 }}
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
