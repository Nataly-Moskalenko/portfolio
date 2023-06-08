import Slider from 'react-slick';
import { projects } from '../../data';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import css from './Projects.module.css';

export default function Projects() {
  const settings = {
    dots: true,   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,    
  };
  return (
    <div className={css.projects}>
      <h1 className={css.projectsTitle}>My Projects</h1>
      <ul>
        <Slider {...settings}>
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
}
