import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import queryClient from './queryClient';
import { WebGLProvider } from './contexts/WebGLContext';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const LazyLoadComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The component will be loaded once and not unload when out of view
  });

  return <div ref={ref}>{inView && children}</div>;
};

LazyLoadComponent.propTypes = {
  children: PropTypes.node.isRequired,
};


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <WebGLProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <LazyLoadComponent>
              <About />
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Experience />
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Tech />
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Works />
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Feedbacks />
            </LazyLoadComponent>
            <div className="relative z-0">
              <LazyLoadComponent>
                <Contact />
              </LazyLoadComponent>
              <StarsCanvas />
            </div>
          </div>
        </Suspense>
      </WebGLProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
