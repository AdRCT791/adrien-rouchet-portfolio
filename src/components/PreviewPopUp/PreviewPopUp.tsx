import { motion } from 'motion/react';
import './PreviewPopUp.css';

const PreviewPopUp = () => {
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
    ></motion.div>
  );
};

export default PreviewPopUp;
