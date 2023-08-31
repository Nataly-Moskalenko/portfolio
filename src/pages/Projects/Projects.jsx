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
    arrows: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
