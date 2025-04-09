import './FrameContainer.css';
import { siteData } from '../../data/content';
import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'motion/react';
import Section from '../Section/Section';
import List from '../List/List';
import { projects } from '../../data/projects';
import { experiences } from '../../data/experiences';
import { formatYear } from '../../utils/utils';

const FrameContainer = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const publishedProjects = projects.filter((project) => project.isPublished);
  const publishedExperiences = experiences
    .filter((exp) => exp.isPublished)
    .reverse();

  return (
    <motion.div className="frame" ref={ref}>
      <div className="presentation">
        <p className="text-presentation">{siteData.presentation}</p>
      </div>
      <Section sectionName="works">
        <List
          items={publishedProjects}
          tracked={true}
          fields={{ name: true, type: true }}
          renderItem={(item, fields) => (
            <>
              {fields?.name && <span>{item.name.toUpperCase()}</span>}
              {fields?.type && <span>{item.type}</span>}
            </>
          )}
        />
      </Section>
      <Section sectionName="experience">
        <List
          items={publishedExperiences}
          fields={{ name: true, yearEnd: true, yearStart: true }}
          renderItem={(item, fields) => (
            <>
              {fields?.name && <span>{item.name.toUpperCase()}</span>}
              {fields?.yearStart && <span>{formatYear(item.yearStart)}</span>}
              {fields?.yearEnd && <span>{formatYear(item.yearEnd)}</span>}
            </>
          )}
        />
      </Section>
    </motion.div>
  );
});
FrameContainer.displayName = 'FrameContainer';

export default FrameContainer;
