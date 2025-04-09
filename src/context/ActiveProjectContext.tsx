import { createContext } from 'react';

export type ActiveProjectContextType = {
  activeProjectId: string | null;
  setActiveProjectId: (id: string | null) => void;
};

export const ActiveProjectContext = createContext<ActiveProjectContextType>({
  activeProjectId: null,
  setActiveProjectId: () => {},
});
