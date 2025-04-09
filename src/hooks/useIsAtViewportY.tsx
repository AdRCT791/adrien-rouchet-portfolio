import { useEffect, useState } from 'react';

export const useIsAtViewportY = (
  ref: React.RefObject<HTMLElement | null>,
  percentY = 0.75
) => {
  const [isAtY, setIsAtY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const targetY = window.innerHeight * percentY;

      // Check if the element intersects the Y threshold
      const isVisible = rect.top <= targetY && rect.bottom >= targetY;
      setIsAtY(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, percentY]);

  return isAtY;
};
