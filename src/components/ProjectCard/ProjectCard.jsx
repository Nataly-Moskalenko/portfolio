export default function ProjectCard({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} width="" height="" />
      <button>{project.link}</button>
    </div>
  );
}
