import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import PropTypes from 'prop-types';
import { SectionWrapper } from '../hoc';
import useAppTranslation from '../hooks/useAppTranslation';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  const t = useAppTranslation();
  return (
    <> 
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{t('aboutTitleSection')}</p>
      <h2 className={styles.sectionHeadText}>{t('aboutTitleSection2')}</h2>    
    </motion.div >

    <motion.p variants={fadeIn("", "", .1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    {t('aboutMessage')}
    </motion.p>

      <div className="mt-20 grid gap-10 grid-cols-1 xs:px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
