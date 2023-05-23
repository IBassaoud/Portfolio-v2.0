import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useQuery } from 'react-query';

const useGLTFLoader = (path) => {
  const { data } = useQuery(
    path,
    () => new Promise((resolve, reject) =>
      new GLTFLoader().load(path, resolve, undefined, reject)),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return data;
};

export default useGLTFLoader;
