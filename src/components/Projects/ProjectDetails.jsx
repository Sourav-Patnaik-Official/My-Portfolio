import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Project.css";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image, description, site } = location.state || {}; // Get the data from state

  if (!title || !image || !description || !site) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="container-fluid pt-5 pb-5 project_cont1 d-flex justify-content-center align-items-center flex-column">
      <h1>{title}</h1>
      <img src={image} alt={title} className="card-img-details" />
      <p className="mt-4 text-center px-lg-5 details-text">{description}</p>
      <a href={site} target="_blank" rel="noopener noreferrer" className="btn view-btn mt-3">
        Visit Site
      </a>
      <button 
        className="btn view-btn mt-3" 
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Back
      </button>
    </div>
  );
};

export default ProjectDetails;
