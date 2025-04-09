import './FrameContainer.css';
import { siteData } from '../../data/content';
import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'motion/react';
import Section from '../Section/Section';
import ProjectsList from '../ProjectsList/ProjectsList';

const FrameContainer = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <motion.div className="frame" ref={ref}>
      <div className="presentation">
        <p className="text-presentation">{siteData.presentation}</p>
      </div>
      <Section sectionName="works">
        <ProjectsList />
      </Section>
      <Section sectionName="experience" />
    </motion.div>
  );
});
FrameContainer.displayName = 'FrameContainer';

export default FrameContainer;
