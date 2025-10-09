import React from "react";

export default function Projects() {
  const projects = [
    { name: "Project 1", image: "placeholder", link: "#" },
    { name: "Project 2", image: "placeholder", link: "#" },
    { name: "Project 3", image: "placeholder", link: "#" },
    { name: "Project 4", image: "placeholder", link: "#" },
    { name: "Project 5", image: "placeholder", link: "#" },
    { name: "Project 6", image: "placeholder", link: "#" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">Check out some of my projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <span className="project-placeholder">Project Preview</span>
            </div>
            <h3 className="project-name">{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
