import './ListItem.css';
import { Project } from '../../data/projects';
import { useEffect, useRef } from 'react';
import { useIsAtViewportY } from '../../hooks/useIsAtViewportY';
import { useActiveProject } from '../../hooks/useActiveProject';

type ListItemProps = {
  project: Project;
};

const ListItem = ({ project }: ListItemProps) => {
  const refItem = useRef(null);
  const isAt75Percent = useIsAtViewportY(refItem, 0.75);
  const { activeProjectId, setActiveProjectId } = useActiveProject();

  useEffect(() => {
    if (isAt75Percent) {
      setActiveProjectId(project.id);
    } else if (!isAt75Percent && activeProjectId === project.id) {
      setActiveProjectId(null);
    }
  }, [isAt75Percent, project.id, setActiveProjectId, activeProjectId]);

  return (
    <div ref={refItem} className={`list-item ${isAt75Percent ? 'active' : ''}`}>
      {project.name}
    </div>
  );
};

export default ListItem;
