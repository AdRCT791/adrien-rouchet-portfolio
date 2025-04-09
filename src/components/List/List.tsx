import './List.css';

import ListItem from '../ListItem/ListItem';
import { BaseItem } from '../../types/baseTypes';
import { ReactNode } from 'react';
import { Project } from '../../data/projects';

function isProject(item: BaseItem): item is Project {
  return 'type' in item;
}

type ListProps<T extends BaseItem> = {
  items: T[];
  tracked?: boolean;
  renderItem?: (item: T) => ReactNode;
};

const List = <T extends BaseItem>({
  items,
  tracked = false,
  renderItem,
}: ListProps<T>) => {
  const defaultRender = (item: T) => (
    <>
      <span>{item.name.toUpperCase()}</span>
      {isProject(item) && <span>{item.type}</span>}
    </>
  );

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem<T> tracked={tracked} key={item.id} item={item}>
          {renderItem ? renderItem(item) : defaultRender(item)}
        </ListItem>
      ))}
    </div>
  );
};

export default List;
