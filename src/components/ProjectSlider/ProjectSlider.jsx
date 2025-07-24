// /components/ProjectSlider/ProjectSlider.jsx
import React from "react";
import projects from "../Data/Projects.js";
import ProjectCard from "../projectCard/ProjectCard.jsx";
import "./ProjectSlider.scss";

const ProjectSlider = () => {
  return (
    <div className="project-slider">
      <h2>
        Recent <span>Project Experience</span>
      </h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
