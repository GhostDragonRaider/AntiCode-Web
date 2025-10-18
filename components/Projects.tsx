import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Appoint Sceduler System",
      image: "placeholder",
      link: "projects/project-1",
    },
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
              {project.name === "Appoint Sceduler System" ? (
                <div className="under-construction-preview">
                  <div className="construction-icon">🚧</div>
                  <div className="construction-text">Under Construction</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="progress-text">90% Complete</div>
                </div>
              ) : (
                <span className="project-placeholder">Project Preview</span>
              )}
            </div>
            <h3 className="project-name">{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
