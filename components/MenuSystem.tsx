import React, { useState } from "react";

interface MenuItem {
  name: string;
  path: string;
  icon?: string;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
  description?: string;
}

interface MenuSystemProps {
  className?: string;
}

export default function MenuSystem({ className = "" }: MenuSystemProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainMenuItems: MenuItem[] = [
    {
      name: "Home",
      path: "/",
      icon: "🏠",
    },
    {
      name: "About",
      path: "/about",
      icon: "👤",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "📧",
    },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (mainMenuItems.find((item) => item.name === itemName)?.hasSubmenu) {
      setActiveSubmenu(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`menu-system ${className}`}>
      {/* Desktop Menu */}
      <nav className="desktop-menu">
        <div className="menu-container">
          <div className="menu-brand">
            <a href="/" className="brand-link">
              <span className="brand-icon">🚀</span>
              <span className="brand-text">AntiCode</span>
            </a>
          </div>

          <ul className="menu-list">
            {mainMenuItems.map((item, index) => (
              <li
                key={index}
                className="menu-item"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  className="menu-link"
                  data-has-submenu={item.hasSubmenu}
                >
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span className="menu-text">{item.name}</span>
                  {item.hasSubmenu && <span className="dropdown-arrow">▼</span>}
                </a>

                {/* Dropdown Submenu */}
                {item.hasSubmenu && item.submenu && (
                  <div
                    className={`submenu ${
                      activeSubmenu === item.name ? "active" : ""
                    }`}
                  >
                    <div className="submenu-content">
                      <div className="submenu-header">
                        <h3 className="submenu-title">{item.name}</h3>
                        <p className="submenu-description">
                          Válassz egy projektet
                        </p>
                      </div>
                      <ul className="submenu-list">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="submenu-item">
                            <a href={subItem.path} className="submenu-link">
                              <span className="submenu-icon">
                                {subItem.icon}
                              </span>
                              <div className="submenu-text">
                                <span className="submenu-name">
                                  {subItem.name}
                                </span>
                                <span className="submenu-desc">
                                  {subItem.description}
                                </span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="mobile-menu">
        <div className="mobile-header">
          <div className="mobile-brand">
            <a href="/" className="brand-link">
              <span className="brand-icon">🚀</span>
              <span className="brand-text">AntiCode</span>
            </a>
          </div>
          <button
            className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`mobile-menu-content ${isMobileMenuOpen ? "active" : ""}`}
        >
          <ul className="mobile-menu-list">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="mobile-menu-item">
                <a
                  href={item.path}
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span className="menu-text">{item.name}</span>
                </a>

                {/* Mobile Submenu */}
                {item.hasSubmenu && item.submenu && (
                  <ul className="mobile-submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mobile-submenu-item">
                        <a
                          href={subItem.path}
                          className="mobile-submenu-link"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.icon && (
                            <span className="submenu-icon">{subItem.icon}</span>
                          )}
                          <div className="submenu-text">
                            <span className="submenu-name">{subItem.name}</span>
                            <span className="submenu-desc">
                              {subItem.description}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
