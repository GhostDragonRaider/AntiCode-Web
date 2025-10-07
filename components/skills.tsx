import React from "react";
import reactIcon from "../images/react_icon.png";
import nextjsIcon from "../images/next.js-icon.png";

export default function Skills() {
  const technologies = [
    { name: "HTML5", icon: "html", level: 95 },
    { name: "CSS3", icon: "css", level: 90 },
    { name: "JavaScript", icon: "javascript", level: 85 },
    { name: "TypeScript", icon: "typescript", level: 80 },
    { name: "React", icon: reactIcon, level: 85 },
    { name: "Next.js", icon: nextjsIcon, level: 75 },
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Techs</h2>
        <p className="skills-subtitle">
          Skills that I've worked with
        </p>
      </div>

      <div className="skills-grid">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {typeof tech.icon === "string" ? (
              <div className={`skill-icon skill-icon-${tech.icon}`}></div>
            ) : (
              <div className="skill-icon skill-icon-image">
                <img
                  src={tech.icon.src}
                  alt={tech.name}
                  className="skill-icon-img"
                />
              </div>
            )}
            <h3 className="skill-name">{tech.name}</h3>
            <div className="skill-level">
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{tech.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
