// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, image, site, description, aosEffect }) => {
  return (
    <div
      className="col-lg-4 col-12 pb-5 pb-lg-0 d-flex justify-content-center align-items-center"
      data-aos={aosEffect}
      data-aos-duration="2000"
    >
      <div className="card mt-4 mt-lg-5" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column align-items-start">
          <h5 className="">{title}</h5>
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="card-text h5 card-anchor btn card-btn"
          >
            Visit Site
          </a>
          {/* "More Info" button to navigate to the detailed page */}
          <Link
            to={`/projects/${id}`}
            className="btn card-btn mt-auto h5"
            state={{ title, image, description, site }}
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
