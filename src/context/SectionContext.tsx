import { createContext, useContext } from 'react';

interface SectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within SectionProvider');
  }
  return context;
};
