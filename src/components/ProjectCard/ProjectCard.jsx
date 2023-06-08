export default function ProjectCard({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
      <p>{project.description}</p>
      {/* <img src={project.image} alt={project.title} width="" height="" /> */}
      <button>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Go to project {project.title}
        </a>
        {/* <Link to={{ pathname: `{project.link}` }} target="_blank">
          My link
        </Link> */}
      </button>
    </div>
  );
}
