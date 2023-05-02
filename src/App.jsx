import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="bg-red-500 text-white font-medium text-xs rounded-bl-md rounded-br-md p-1 top-[94px] absolute w-full text-center">
              Please note that this website is currently under development. Thank you for your patience!
        </div>
        <Navbar />
        <Hero />
      </div>
      {/* <About />     
      <Experience />     
      <Tech />     
      <Works />     
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        
      </div>      */}
    </div>
    </BrowserRouter>
  )
}

export default App
