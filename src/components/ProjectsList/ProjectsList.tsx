import './ProjectsList.css';
import { projects } from '../../data/projects';
import { div } from 'motion/react-client';

const ProjectsList = () => {
  const publishedProjects = projects.filter((project) => project.isPublished);

  return (
    <div className="projects-list">
      {publishedProjects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default ProjectsList;
