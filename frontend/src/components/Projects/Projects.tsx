import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <>
      <h2 className="titlestyle">Projects</h2>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
