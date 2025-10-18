import React from "react";
import UnderConstruction from "../components/UnderConstruction";

export default function UnderConstructionPage() {
  return (
    <UnderConstruction
      title="Under Construction"
      subtitle="We're building something amazing"
      description="Our website is currently under construction. We're working hard to bring you an incredible experience. Please check back soon!"
      progress={85}
      features={[
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
        {
          icon: "🎨",
          title: "Beautiful UI",
          description: "Stunning visuals and smooth animations",
        },
        {
          icon: "🛠️",
          title: "Easy to Use",
          description: "Intuitive interface for everyone",
        },
      ]}
      contactEmail="info@anticode.com"
      showProgress={true}
      showFeatures={true}
    />
  );
}
