import './FrameContainer.css';
import { siteData } from '../../data/content';
import { forwardRef } from 'react';
import { motion } from 'motion/react';
import Section from '../Section/Section';

type FrameContainerProps = {};

const FrameContainer = forwardRef<HTMLDivElement, FrameContainerProps>(
  ({ ...props }, ref) => {
    return (
      <motion.div className="frame" ref={ref}>
        <div className="presentation">
          <p className="text-presentation">{siteData.presentation}</p>
        </div>

        <Section sectionName="works" />
        <Section sectionName="experience" />
      </motion.div>
    );
  }
);
export default FrameContainer;
