import { motion } from 'motion/react';
import './PreviewPopUp.css';
import { useActiveProject } from '../../hooks/useActiveProject';
import { projects } from '../../data/projects';

const PreviewPopUp = () => {
  const { activeProjectId } = useActiveProject();
  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );
  return (
    <motion.div
      className="preview-popup"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        scale: {
          origin: 'center',
        },
      }}
      style={{ backgroundImage: `url(${activeProject?.thumbnailImage})` }}
    >
      <span>{activeProject?.name}</span>
    </motion.div>
  );
};

export default PreviewPopUp;
