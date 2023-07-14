import { useQuery } from 'react-query';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useMemo } from 'react';

const useGLTFLoader = (path) => {
  const { data, isLoading } = useQuery(
    path,
    () =>
      new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(
          import.meta.env.MODE === 'development'
            ? import.meta.env.VITE_APP_DRACO_LOCAL_PATH
            : import.meta.env.VITE_APP_DRACO_PROD_PATH
        );
        loader.setDRACOLoader(dracoLoader);
        loader.load(path, resolve, undefined, reject);
      }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  // Store the loaded model in a cache
  const gltf = useMemo(() => data, [data]);

  return { gltf, isLoading };
};


export default useGLTFLoader;
