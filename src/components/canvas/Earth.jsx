/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';
import { useWebGLContext } from '../../contexts/WebGLContext';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  const ref = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!ref.current) {
      return;  // skip this frame if the 3D object is not yet loaded
    }

    const frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    );

    const box = new THREE.Box3().setFromObject(ref.current);
    if (box.isEmpty() || isNaN(box.min.length()) || isNaN(box.max.length())) {
      console.error('Invalid bounding box:', box);
      return;
    }

    const isVisible = frustum.intersectsBox(box);

    if (!isVisible && ref.current) {
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

  return (
    <primitive ref={ref} object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

const EarthCanvas = () => {
  const { setContext } = useWebGLContext();
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleCanvasCreated = ({ gl }) => {
    setContext(gl);
  };

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]' ref={ref}>
      {isVisible && (
        <Canvas
          shadows
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
          onCreated={handleCanvasCreated}
        >
          <Suspense fallback={ <CanvasLoader /> }>
            <OrbitControls 
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />

            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default EarthCanvas;