import './ProjectsList.css';
import { projects } from '../../data/projects';
import ListItem from '../ListItem/ListItem';

const ProjectsList = () => {
  const publishedProjects = projects.filter((project) => project.isPublished);

  return (
    <div className="projects-list">
      {publishedProjects.map((project) => (
        <ListItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
