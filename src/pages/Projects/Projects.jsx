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
    customPaging: (i) => (
      <div
        style={{
          width: 20,
          color: '#3b06cf',
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className={css.projects}>
      <h1 className={css.projectsTitle}>My Projects</h1>
      <div>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
