import { useEffect, useState } from 'react';
import { useScrollContext } from '../context/ScrollContext';

export const useScrollProgress = () => {
  const { scrollProgress } = useScrollContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (v) => {
      setProgress(v * 100);
    });

    return () => unsubscribe();
  }, [scrollProgress]);

  return Math.round(progress);
};
