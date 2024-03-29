import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import React from 'react';

// eslint-disable-next-line react/display-name, react/prop-types
const HeroHeadText = React.memo(({ children }) => (
  <h1 className={`${styles.heroHeadText} text-white`}>{children}</h1>
));

// eslint-disable-next-line react/display-name, react/prop-types
const HeroSubText = React.memo(({ children }) => (
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>{children}</p>
));

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[130px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col justify-center items-center mt-5 mb-8">
          <HeroHeadText>
            Hi, I&#39;m <span className="text-[#915eff]">Ismail</span>
          </HeroHeadText>
          <HeroSubText>
            As a Fullstack Developer, I&#39;m enthusiastic about creating outstanding digital experiences that leave a lasting impression. My skills in both front-end and back-end development enable me to craft dynamic and engaging web applications.
          </HeroSubText>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
