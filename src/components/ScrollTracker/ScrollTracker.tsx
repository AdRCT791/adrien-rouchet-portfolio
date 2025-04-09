import { useScroll } from 'motion/react';
import { ReactNode, RefObject } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

interface ScrollTrackerProps {
  children: ReactNode;
  targetRef: RefObject<HTMLDivElement | null>;
}

const ScrollTracker = ({ children, targetRef }: ScrollTrackerProps) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end start'],
  });

  return (
    <ScrollContext.Provider value={{ scrollProgress: scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollTracker;
