import { projects } from '../../data';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
