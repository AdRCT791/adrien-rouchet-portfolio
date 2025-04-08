// context/ScrollContext.ts

import { createContext, useContext } from 'react';
import { MotionValue } from 'motion';

interface ScrollContextType {
  scrollProgress: MotionValue<number>;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      'useScrollContext must be used within a ScrollTracker (provider)'
    );
  }
  return context;
};
