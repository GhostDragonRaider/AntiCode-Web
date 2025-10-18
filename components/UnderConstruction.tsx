import React from "react";

interface UnderConstructionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  progress?: number;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  contactEmail?: string;
  showProgress?: boolean;
  showFeatures?: boolean;
}

export default function UnderConstruction({
  title = "Under Construction",
  subtitle = "We're building something amazing",
  description = "Our website is currently under construction. We're working hard to bring you an incredible experience. Please check back soon!",
  progress = 75,
  features = [
    {
      icon: "🚀",
      title: "Modern Design",
      description: "Cutting-edge UI/UX with responsive layout",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Enterprise-grade security and privacy",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Perfect experience on all devices",
    },
  ],
  contactEmail = "info@anticode.com",
  showProgress = true,
  showFeatures = true,
}: UnderConstructionProps) {
  return (
    <div className="under-construction">
      <div className="construction-container">
        {/* Construction Icon */}
        <div className="construction-icon">🚧</div>

        {/* Main Title */}
        <h1 className="construction-title">{title}</h1>

        {/* Subtitle */}
        <h2 className="construction-subtitle">{subtitle}</h2>

        {/* Description */}
        <p className="construction-description">{description}</p>

        {/* Progress Section */}
        {showProgress && (
          <div className="progress-section">
            <div className="progress-label">Development Progress</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-percentage">{progress}% Complete</div>
          </div>
        )}

        {/* Features Grid */}
        {showFeatures && (
          <div className="construction-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact Information */}
        <div className="contact-info">
          <p className="contact-text">Questions? Get in touch with us:</p>
          <a href={`mailto:${contactEmail}`} className="contact-email">
            {contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
