import './ListItem.css';
import { Project } from '../../data/projects';

type ListItemProps = {
  project: Project;
};

const ListItem = ({ project }: ListItemProps) => {
  return <div>{project.name}</div>;
};

export default ListItem;
