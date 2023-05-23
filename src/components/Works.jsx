import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';

import { styles } from '../styles.js';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import PropTypes from 'prop-types';

const fadeInOptions = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      {...fadeInOptions}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] overflow-hidden">
          <LazyLoad height={230} once >
            <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
          </LazyLoad>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <> 
      <motion.div 
        initial="hidden" 
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>   
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial="hidden" 
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I&#39;ve been working on mainly as a full-stack developer. For each project, you&#39;ll find a brief description and links to the actual code and live demos. These projects showcase my ability to crack difficult problems, adapt to different technologies, and manage tasks effectively. But most importantly, they reflect my passion for building apps that positively impact people&#39;s lives. Take a moment to explore and witness how my full-stack skills come to life.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center sm:justify-center lg:justify-center xl:justify-start">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired
};

const WorksSection = SectionWrapper(Works, "projects");
export default WorksSection;
