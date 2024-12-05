import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <div className="project-sub">
      <p>What the project is about:</p>
      <p>{project.intro}</p></div>
      <div className="project-link">
      <a href="https://github.com/Sayani123M" target="_blank" rel="noopener noreferrer">
        GitHub Link
      </a>
      <br />
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        Live Project Link
      </a></div>
    </div>
  );
}

export default ProjectDetails;
