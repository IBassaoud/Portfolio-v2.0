// src/hooks/useTextureLoader.js

import { TextureLoader } from 'three';
import { useQuery } from 'react-query';

const useTextureLoader = (path) => {
  const { data } = useQuery(
    path,
    () => new Promise((resolve, reject) =>
      new TextureLoader().load(path, resolve, reject)),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return data;
};

export default useTextureLoader;
