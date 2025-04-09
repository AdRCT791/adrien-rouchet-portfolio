import { motion } from 'motion/react';
import './PreviewPopUp.css';
import { useActiveProject } from '../../hooks/useActiveProject';
import { projects } from '../../data/projects';
import { useNavigate } from '@tanstack/react-router';

const PreviewPopUp = () => {
  const navigate = useNavigate();
  const { activeProjectId } = useActiveProject();
  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  const handleClick = () => {
    if (activeProject) {
      const projectName = activeProject.name.toLowerCase().replace(/ /g, '-');
      navigate({ to: `/works/${projectName}` });
    }
  };

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
      onClick={handleClick}
    ></motion.div>
  );
};

export default PreviewPopUp;
