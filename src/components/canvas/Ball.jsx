/* eslint-disable react/no-unknown-property */
import { Suspense, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, SpotLight } from '@react-three/drei';
import CanvasLoader from '../Loader';
import useTextureLoader from '../../hooks/useTextureLoader';
import { useWebGLContext } from '../../contexts/WebGLContext';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

const Ball = memo(({ imgUrl, inView }) => {
  const { data: decal, isLoading } = useTextureLoader(inView ? imgUrl : null);
  const ref = useRef();

  useFrame(({ camera }) => {
    if (!ref.current) return;
  
    const frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    );
  
    const box = new THREE.Box3().setFromObject(ref.current);
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

  if (isLoading) {
    return null;
  }

  return (
    <Float speed={0} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <SpotLight position={[0, 5, 10]} angle={0.3} penumbra={1} castShadow />
      <mesh ref={ref} castShadow receiveShadow scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshLambertMaterial
          color="#FFF8EB"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
}, (prevProps, nextProps) => prevProps.imgUrl === nextProps.imgUrl && prevProps.inView === nextProps.inView);

Ball.displayName = 'Ball';

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  inView: PropTypes.bool.isRequired,
};

const BallCanvas = ({ icon }) => {
  const { setContext } = useWebGLContext();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '100% 0px',
  });

  const handleCanvasCreated = ({ gl }) => {
    setContext(gl);
  };

  return (
    <div ref={ref}>
      {inView && (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }} onCreated={handleCanvasCreated}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} inView={inView} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
