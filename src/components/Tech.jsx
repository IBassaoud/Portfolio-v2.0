import { memo } from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = memo(() => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 lg:px-14 xl:px-[6rem]">
      {technologies.map( technology => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
});

Tech.displayName = 'Tech';

const TechSection = SectionWrapper(Tech, "skills");
export default TechSection;
