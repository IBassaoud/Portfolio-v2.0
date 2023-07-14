/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Preload } from '@react-three/drei';
import { PointsMaterial, Color } from 'three';
import { useWebGLContext } from '../../contexts/WebGLContext';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const points = new Float32Array(5000 * 3);  // 3 coordinates per point
    for (let i = 0; i < points.length; i += 3) {
      const r = 1.2 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={ [0, 0, Math.PI / 4] }>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <primitive object={new PointsMaterial({
          transparent: true,
          size: 0.003,
          sizeAttenuation: true,
          color: new Color('#ffe0a5'),
          depthWrite: false
        })} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
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
        <Canvas camera={{ position: [0, 0, 1] }} onCreated={handleCanvasCreated}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
