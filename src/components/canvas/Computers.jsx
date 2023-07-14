/* eslint-disable react/no-unknown-property */
import { Suspense, memo, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import useGLTFLoader from '../../hooks/useGLTFLoader';
import { useWebGLContext } from '../../contexts/WebGLContext';
import { useInView } from 'react-intersection-observer';

const Computers = memo(({ isMobile, inView }) => {
  const { gltf, isLoading, error } = useGLTFLoader(inView ? './desktop_pc/scene.gltf' : null);
  const ref = useRef();

  useEffect(() => {
    if (error) {
      console.error("Failed to load GLTF model:", error);
    }
  }, [error]);

  useFrame(({ camera }) => {
    if (!ref.current) {
      return;
    }
  
    const frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    );
  
    const box = new THREE.Box3().setFromObject(ref.current);
    const isVisible = frustum.intersectsBox(box);
  
    if (!isVisible) {
      // Unload the 3D model when it's not visible
      ref.current.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (object.material.isMaterial) {
          cleanMaterial(object.material);
        } else {
          for (const material of object.material) cleanMaterial(material);
        }
      });
    }
  });  

  const cleanMaterial = (material) => {
    material.dispose();

    // dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose();
      }
    }
  };

  if (isLoading || !gltf || !gltf.scene) {
    return <CanvasLoader />;
  }

  return (
    <mesh ref={ref}>
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
      <primitive object={gltf.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.02]} />
    </mesh>
  )
}, (prevProps, nextProps) => prevProps.isMobile === nextProps.isMobile && prevProps.inView === nextProps.inView);

Computers.displayName = 'Computers';
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  inView: PropTypes.bool.isRequired,
};

const ComputersCanvas = () => {
  const { setContext } = useWebGLContext();
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '100% 0px',
  });

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

  const handleCanvasCreated = ({ gl }) => {
    setContext(gl);
  };

  return (
    <div ref={ref} className="pt-[13.75rem] md:pt-16 lg:pt-[6.75rem] w-full h-full">
      {inView && (
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: isMobile ? [10, 1.5, 2.5] : [20, 3, 5], fov: isMobile ? 35 : 25 }}
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          onCreated={handleCanvasCreated}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2} 
            />
            <Computers isMobile={isMobile} inView={inView} />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default ComputersCanvas;
