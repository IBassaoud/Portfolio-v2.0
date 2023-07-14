import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const WebGLContext = createContext();

export const WebGLProvider = ({ children }) => {
  const [context, setContext] = useState(null);

  return (
    <WebGLContext.Provider value={{ context, setContext }}>
      {children}
    </WebGLContext.Provider>
  );
};

WebGLProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useWebGLContext = () => useContext(WebGLContext);