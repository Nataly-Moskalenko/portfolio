import css from './ProjectCard.module.css';
export default function ProjectCard({ project }) {
  return (
    <div className={css.project}>
      <img className={css.projectImage} src={project.image} alt={project.title} width="400" height="200"/>
      <h2>{project.title}</h2>
      <p>{project.subtitle}</p>
      <p>{project.description}</p>
      <button className={css.projectButton}>
        <a className={css.projectLink} href={project.link} target="_blank" rel="noopener noreferrer">
          Go to project {project.title}
        </a>        
      </button>
    </div>
  );
}
