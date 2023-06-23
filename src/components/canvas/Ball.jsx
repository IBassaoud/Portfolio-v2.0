/* eslint-disable react/no-unknown-property */
import { Suspense, memo } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useLoader } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload } from '@react-three/drei';
import { TextureLoader } from 'three';
import CanvasLoader from '../Loader';
import { useQuery, useQueryClient } from 'react-query';

const Ball = memo((props) => {
  const queryClient = useQueryClient();
  const decal = useLoader(TextureLoader, props.imgUrl);

  // Define a unique key for the query
  const queryKey = `ball-img:${props.imgUrl}`;

  // Fetch the texture and cache it using React Query
  const fetchTexture = async () => {
    const response = await useLoader.preload(TextureLoader, props.imgUrl);
    queryClient.setQueryData(queryKey, response);
    return response;
  };

  // Use React Query's useQuery hook to fetch the texture and cache it
  const { data: cachedTexture } = useQuery(queryKey, fetchTexture);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshLambertMaterial
          color="#FFF8EB"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={cachedTexture || decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
}, (prevProps, nextProps) => prevProps.imgUrl === nextProps.imgUrl);

Ball.displayName = 'Ball';

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
