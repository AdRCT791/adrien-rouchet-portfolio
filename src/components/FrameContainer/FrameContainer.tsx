import './FrameContainer.css';
import { siteData } from '../../data/content';
import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'motion/react';
import Section from '../Section/Section';
import List from '../List/List';
import { projects } from '../../data/projects';
import { experiences } from '../../data/experiences';

const FrameContainer = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const publishedProjects = projects.filter((project) => project.isPublished);

  return (
    <motion.div className="frame" ref={ref}>
      <div className="presentation">
        <p className="text-presentation">{siteData.presentation}</p>
      </div>
      <Section sectionName="works">
        <List items={publishedProjects} tracked={true} />
      </Section>
      <Section sectionName="experience">
        <List items={experiences} />
      </Section>
    </motion.div>
  );
});
FrameContainer.displayName = 'FrameContainer';

export default FrameContainer;
