import React, { useState } from "react";
import MenuSystem from "../components/MenuSystem";
import DropdownMenu from "../components/DropdownMenu";
import ContextMenu from "../components/ContextMenu";
// import MobileMenu, { BreadcrumbMenu } from "../components/MobileMenu";

// Import styles
import "../styles/MenuSystem.scss";
import "../styles/DropdownMenu.scss";
import "../styles/ContextMenu.scss";

export default function MenuDemo() {
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
    { name: "Menu Demo", path: "/menu-demo", icon: "🎛️" },
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
    <div className="menu-demo-page">
      <style jsx global>{`
        .menu-demo-page {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0a19 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          padding: 2rem;
          font-family: "Roboto", sans-serif;
        }

        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .demo-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .demo-title {
          color: #4ad8eb;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
        }

        .demo-description {
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .demo-item {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .demo-item-title {
          color: #a855f7;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
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
          margin-bottom: 2rem;
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
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .menu-demo-page {
            padding: 1rem;
          }

          .demo-section {
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

      <div className="demo-container">
        <div className="demo-section">
          <h1 className="demo-title">🎛️ Menürendszer Demo</h1>
          <p className="demo-description">
            Ez az oldal bemutatja a különböző menürendszereket, amelyeket a
            Samples mappában található minták alapján hoztam létre. Minden menü
            típus interaktív és responsive designnal rendelkezik.
          </p>
        </div>

        {/* Főmenü Demo */}
        <div className="demo-section">
          <h2 className="demo-title">🖥️ Főmenü Rendszer</h2>
          <p className="demo-description">
            Hierarchikus navigációs menü dropdown almenükkel. Hover effektekkel
            és animációkkal.
          </p>
          <MenuSystem />
        </div>

        {/* Dropdown Menü Demo */}
        <div className="demo-section">
          <h2 className="demo-title">📋 Dropdown Menük</h2>
          <p className="demo-description">
            Különböző típusú dropdown menük: egyszerű választó, kereshető, és
            multi-select opciókkal.
          </p>

          <div className="demo-grid">
            <div className="demo-item">
              <h3 className="demo-item-title">Egyszerű Dropdown</h3>
              <p className="demo-item-description">
                Alapvető dropdown menü ikonokkal és leírásokkal.
              </p>
              <DropdownMenu
                options={dropdownOptions}
                placeholder="Válassz egy framework-ot..."
                value={selectedDropdownValue}
                onChange={handleDropdownChange}
                label="Framework választás"
              />
            </div>

            <div className="demo-item">
              <h3 className="demo-item-title">Kereshető Dropdown</h3>
              <p className="demo-item-description">
                Dropdown menü beépített keresési funkcióval.
              </p>
              <DropdownMenu
                options={dropdownOptions}
                placeholder="Keresés és választás..."
                searchable={true}
                label="Kereshető menü"
              />
            </div>

            <div className="demo-item">
              <h3 className="demo-item-title">Multi-Select Dropdown</h3>
              <p className="demo-item-description">
                Több opció kiválasztására alkalmas dropdown.
              </p>
              <DropdownMenu
                options={multiSelectOptions}
                placeholder="Válassz több technológiát..."
                multiSelect={true}
                label="Technológia választás"
              />
            </div>
          </div>
        </div>

        {/* Kontextuális Menü Demo */}
        <div className="demo-section">
          <h2 className="demo-title">🏥 Időpontfoglaló Rendszer</h2>
          <p className="demo-description" style={{ textAlign: "center" }}></p>
          <ContextMenu onSelectionChange={handleContextMenuChange} />
        </div>

        {/* Mobil Menü Demo */}
        <div className="demo-section">
          <h2 className="demo-title">📱 Mobil Menü</h2>
          <p className="demo-description">
            Touch-friendly mobil menü hamburger gombbal, animált átmenetekkel és
            hierarchikus navigációval.
          </p>

          <div className="mobile-demo-controls">
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              Mobil Menü Megnyitása
            </button>
          </div>

          <MobileMenu
            items={mobileMenuItems}
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Breadcrumb Demo */}
        <div className="demo-section">
          <h2 className="demo-title">🍞 Breadcrumb Navigáció</h2>
          <p className="demo-description">
            Útvonal navigáció a jelenlegi oldal helyzetének megjelenítéséhez.
          </p>

          <div className="breadcrumb-demo">
            <BreadcrumbMenu items={breadcrumbItems} currentPath="/menu-demo" />
          </div>
        </div>

        {/* Funkciók Összefoglaló */}
        <div className="demo-section">
          <h2 className="demo-title">✨ Funkciók Összefoglaló</h2>
          <div className="demo-grid">
            <div className="demo-item">
              <h3 className="demo-item-title">🎨 Design Funkciók</h3>
              <ul
                style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}
              >
                <li>Glassmorphism effektek</li>
                <li>Gradient színek és animációk</li>
                <li>Hover és focus állapotok</li>
                <li>Responsive design</li>
                <li>Dark theme támogatás</li>
              </ul>
            </div>

            <div className="demo-item">
              <h3 className="demo-item-title">⚡ Interaktivitás</h3>
              <ul
                style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}
              >
                <li>Animált átmenetek</li>
                <li>Touch-friendly elemek</li>
                <li>Keresési funkciók</li>
                <li>Multi-select opciók</li>
                <li>Progress tracking</li>
              </ul>
            </div>

            <div className="demo-item">
              <h3 className="demo-item-title">🔧 Technikai Funkciók</h3>
              <ul
                style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}
              >
                <li>TypeScript támogatás</li>
                <li>Moduláris komponens architektúra</li>
                <li>Accessibility (a11y) támogatás</li>
                <li>Keyboard navigáció</li>
                <li>Customizable props</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
