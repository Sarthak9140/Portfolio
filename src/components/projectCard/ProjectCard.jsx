// /components/ProjectCard/ProjectCard.jsx
import React from "react";
import Slider from "react-slick";
import "./projectCard.scss";

const ProjectCard = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="project-card">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} />
          ))}
        </Slider>
      </div>
      <div className="overlay">
        <h4>{project.subtitle}</h4>
      </div>
      <div className="info">
        <h3>{project.title}</h3>
        <a href={project.link} target="_blank" rel="noreferrer">
          <button>{project.linkText}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
