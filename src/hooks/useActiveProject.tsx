import { useContext } from 'react';
import { ActiveProjectContext } from '../context/ActiveProjectContext';

export const useActiveProject = () => {
  const context = useContext(ActiveProjectContext);
  if (!context) {
    throw new Error(
      'useActiveProject must be used within ActiveProjectProvider'
    );
  }
  return context;
};
