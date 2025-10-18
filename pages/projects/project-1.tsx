import React, { useState } from "react";
import ProjectLayout from "../../components/ProjectLayout";
import styles from "../../styles/Project_1.module.scss";
import Project1Home from "../../components/project-1-home";
import MenuSystem from "../../components/MenuSystem";
import DropdownMenu from "../../components/DropdownMenu";
import ContextMenu from "../../components/ContextMenu";
// import MobileMenu, { BreadcrumbMenu } from "../../components/MobileMenu";

export default function Project1() {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<
    string | number
  >("");
  const [selectedMultiValues, setSelectedMultiValues] = useState<
    (string | number)[]
  >([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown options
  const dropdownOptions = [
    {
      id: 1,
      name: "React",
      value: "react",
      icon: "⚛️",
      description: "JavaScript könyvtár",
    },
    {
      id: 2,
      name: "Vue.js",
      value: "vue",
      icon: "💚",
      description: "Progressive framework",
    },
    {
      id: 3,
      name: "Angular",
      value: "angular",
      icon: "🅰️",
      description: "TypeScript framework",
    },
    {
      id: 4,
      name: "Svelte",
      value: "svelte",
      icon: "🧡",
      description: "Compile-time framework",
    },
    {
      id: 5,
      name: "Next.js",
      value: "nextjs",
      icon: "▲",
      description: "React framework",
    },
    {
      id: 6,
      name: "Nuxt.js",
      value: "nuxtjs",
      icon: "💚",
      description: "Vue framework",
    },
  ];

  const multiSelectOptions = [
    {
      id: 1,
      name: "HTML",
      value: "html",
      icon: "🌐",
      description: "Markup nyelv",
    },
    {
      id: 2,
      name: "CSS",
      value: "css",
      icon: "🎨",
      description: "Stíluslap nyelv",
    },
    {
      id: 3,
      name: "JavaScript",
      value: "javascript",
      icon: "⚡",
      description: "Programozási nyelv",
    },
    {
      id: 4,
      name: "TypeScript",
      value: "typescript",
      icon: "🔷",
      description: "Typed JavaScript",
    },
    {
      id: 5,
      name: "Python",
      value: "python",
      icon: "🐍",
      description: "Programozási nyelv",
    },
    {
      id: 6,
      name: "Java",
      value: "java",
      icon: "☕",
      description: "Programozási nyelv",
    },
  ];

  // Mobile menu items
  const mobileMenuItems = [
    { name: "Home", path: "/", icon: "🏠" },
    {
      name: "Projects",
      path: "/projects",
      icon: "💼",
      hasSubmenu: true,
      submenu: [
        {
          name: "Medical System",
          path: "/projects/project-1",
          icon: "🏥",
          description: "Orvosi rendszer",
        },
        {
          name: "E-commerce",
          path: "/projects/project-2",
          icon: "🛒",
          description: "Online áruház",
        },
        {
          name: "Learning Platform",
          path: "/projects/project-3",
          icon: "📚",
          description: "Tanulási platform",
        },
      ],
    },
    { name: "Skills", path: "/skills", icon: "⚡" },
    { name: "About", path: "/about", icon: "👤" },
    { name: "Contact", path: "/contact", icon: "📧" },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Projects", path: "/projects", icon: "💼" },
    { name: "Project 1", path: "/projects/project-1", icon: "🏥" },
  ];

  const handleDropdownChange = (value: string | number, option: any) => {
    setSelectedDropdownValue(value);
    console.log("Selected:", value, option);
  };

  const handleMultiSelectChange = (
    values: (string | number)[],
    option: any
  ) => {
    setSelectedMultiValues(values);
    console.log("Selected values:", values, option);
  };

  const handleContextMenuChange = (specialty: any, doctor: any) => {
    console.log("Context menu selection:", specialty, doctor);
  };

  return (
    <ProjectLayout>
      {/* Fix pozíciójú navbar */}
      <div className="project-navbar">
        <MenuSystem />
      </div>

      <div className={`${styles.projectsContainer} projects-container`}>
        <Project1Home />

        {/* Menürendszer Demo Szekció */}
        <div className="menu-demo-section">
          <style jsx>{`
            .project-navbar {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
            }

            .menu-demo-section {
              background: linear-gradient(
                135deg,
                #0a0a19 0%,
                #1a1a2e 50%,
                #16213e 100%
              );
              padding: 2rem;
              margin: 2rem 0;
              border-radius: 16px;
              border: 1px solid rgba(168, 85, 247, 0.2);
            }

            .demo-title {
              color: #4ad8eb;
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 1rem;
              text-align: center;
              background: linear-gradient(45deg, #a855f7, #4ad8eb);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .demo-description {
              color: rgba(255, 255, 255, 0.8);
              text-align: center;
              margin-bottom: 2rem;
              line-height: 1.6;
              font-size: 1.1rem;
            }

            .demo-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              margin: 2rem 0;
            }

            .demo-item {
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(168, 85, 247, 0.2);
              border-radius: 12px;
              padding: 1.5rem;
            }

            .demo-item-title {
              color: #a855f7;
              font-size: 1.2rem;
              font-weight: 600;
              margin-bottom: 1rem;
              text-align: center;
            }

            .demo-item-description {
              color: rgba(255, 255, 255, 0.7);
              font-size: 0.9rem;
              margin-bottom: 1rem;
              line-height: 1.4;
            }

            .mobile-demo-controls {
              display: flex;
              gap: 1rem;
              justify-content: center;
              margin: 2rem 0;
            }

            .mobile-toggle-btn {
              background: linear-gradient(45deg, #a855f7, #4ad8eb);
              color: #ffffff;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 8px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .mobile-toggle-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
            }

            .breadcrumb-demo {
              margin: 2rem 0;
            }

            .projects-container {
              padding-top: 70px; /* Navbar magassága */
              min-height: 100vh;
            }

            @media (max-width: 768px) {
              .menu-demo-section {
                padding: 1rem;
              }

              .demo-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
              }

              .mobile-demo-controls {
                flex-direction: column;
                align-items: center;
              }
            }
          `}</style>

          {/* Kontextuális Menü Demo */}
          <div className="demo-item">
            <h3 className="demo-item-title">Időpontfoglaló Rendszer</h3>
            <p className="demo-item-description">
              Lépcsőzetes menürendszer szakterület és szakember kiválasztásához.
              Progress indicator és visszamenő navigációval.
            </p>
            <ContextMenu onSelectionChange={handleContextMenuChange} />
          </div>
        </div>

        {/* Eredeti Project1app komponens */}
      </div>
    </ProjectLayout>
  );
}
