// src/components/Project.js
import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Project() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Show 3 cards initially

  const handleViewMore = () => {
    setVisibleProjects(projectData.length); // Show all projects when clicked
  };

  return (
    <div id="projects">
      <div className="container-fluid project_cont pt-5 pb-5">
        <h1 className="text-center" data-aos="zoom-in" data-aos-duration="2000">
          PROJECTS
        </h1>
        <div className="row">
          {projectData.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              site={project.site} // Pass the site URL to the card
              aosEffect={project.aosEffect}
            />
          ))}
        </div>
        {visibleProjects < projectData.length && (
          <div className="text-center pt-5">
            <button
              className="btn view-btn"
              onClick={handleViewMore}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
