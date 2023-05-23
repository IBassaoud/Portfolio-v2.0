import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <div className="bg-red-500 text-white font-medium text-sm rounded-bl-md rounded-br-md p-1 top-[94px] absolute w-full text-center">
                Please note that this website is currently under development. Thank you for your patience!
              </div>
              <Navbar />
              <Hero />
            </div>
            <About />     
            <Experience />     
            <Tech />     
            <Works />     
            {/* <Feedbacks /> */}
            {/* <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div> */}
          </div>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
