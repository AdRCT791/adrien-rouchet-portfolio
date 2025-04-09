import './List.css';

import ListItem from '../ListItem/ListItem';
import { BaseItem } from '../../types/baseTypes';
import { ReactNode } from 'react';

type ItemFields<T> = {
  [K in keyof T]?: boolean;
};

type ListProps<T extends BaseItem> = {
  items: T[];
  tracked?: boolean;
  renderItem: (item: T, fields?: ItemFields<T>) => ReactNode;
  fields: ItemFields<T>;
};

const List = <T extends BaseItem>({
  items,
  tracked = false,
  renderItem,
  fields,
}: ListProps<T>) => {
  return (
    <div className="list">
      {items.map((item) => (
        <ListItem<T> tracked={tracked} key={item.id} item={item}>
          {renderItem(item, fields)}
        </ListItem>
      ))}
    </div>
  );
};

export default List;
