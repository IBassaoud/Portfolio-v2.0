import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import PropTypes from 'prop-types';
import useAppTranslation from '../hooks/useAppTranslation';
import { inqompass,beweb, auditors, netia } from '../assets';

const iconMapping = {
  inqompass: inqompass,
  beweb: beweb,
  auditors: auditors,
  netia: netia,
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight: '7px solid  #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
      <img src={iconMapping[experience.icon]} alt={experience.company_name} className="w-[80%] h-[80%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin:0 }}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

const Experience = () => {
  const t = useAppTranslation();
  const experiencesData = t('experiences', { returnObjects: true }); // Fetch experiences data using the translation function

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>   
    </motion.div>

    <div className="mt-8 flex flex-col">
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
