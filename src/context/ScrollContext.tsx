// context/ScrollContext.ts

import { createContext, useContext } from 'react';
import { MotionValue } from 'motion';

interface ScrollContextType {
  scrollProgress: MotionValue<number> | null;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollProgress: null,
});

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context.scrollProgress === null) {
    throw new Error(
      'useScrollContext must be used within a ScrollTracker (provider)'
    );
  }
  return context;
};
