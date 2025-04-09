import { useState } from 'react';
import { ActiveProjectContext } from '../../context/ActiveProjectContext';
type ActiveProjectProviderProps = {
  children: React.ReactNode;
};

export const ActiveProjectProvider = ({
  children,
}: ActiveProjectProviderProps) => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  return (
    <ActiveProjectContext.Provider
      value={{ activeProjectId, setActiveProjectId }}
    >
      {children}
    </ActiveProjectContext.Provider>
  );
};
