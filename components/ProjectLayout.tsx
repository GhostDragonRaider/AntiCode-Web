import React from "react";

export default function ProjectLayout({ children }) {
  return (
    <div className="project-layout">
      <style jsx>
        {`
                .project-layout {
                     background: linear-gradient(
                135deg,
                #0a0a19 0%,
                #1a1a2e 50%,
                #16213e 100%
              );
              pad
                    min-height: 100vh;
                }
                `}
      </style>
      {children}
    </div>
  );
}
