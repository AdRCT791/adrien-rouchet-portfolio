import './ListItem.css';
import { ReactNode, useEffect, useRef } from 'react';
import { useIsAtViewportY } from '../../hooks/useIsAtViewportY';
import { useActiveProject } from '../../hooks/useActiveProject';
import { BaseItem } from '../../types/baseTypes';

type ListItemProps<T extends BaseItem> = {
  item: T;
  tracked?: boolean;
  children: ReactNode;
};

const ListItem = <T extends BaseItem>({
  item,
  tracked = false,
  children,
}: ListItemProps<T>) => {
  const refItem = useRef(null);
  const isAtViewportY = useIsAtViewportY(refItem, 0.75);
  const isAt75Percent = tracked && isAtViewportY;
  const { activeProjectId, setActiveProjectId } = useActiveProject();

  useEffect(() => {
    if (!tracked) return;

    if (isAtViewportY) {
      setActiveProjectId(item.id);
    } else if (!isAtViewportY && activeProjectId === item.id) {
      setActiveProjectId(null);
    }
  }, [tracked, isAtViewportY, item.id, setActiveProjectId, activeProjectId]);

  return (
    <div ref={refItem} className={`list-item ${isAt75Percent ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default ListItem;
