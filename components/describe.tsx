import React, { useState, useEffect, useRef } from "react";
import TypeWriter from "./Typewriter";

export default function Descirbe() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const describeMessage =
    "I am a full-stack developer passionate about creating modern, responsive, and visually engaging websites and web applications. I constantly learn and improve, building projects that combine clean code with creative design. My goal is to turn ideas into digital experiences that inspire and deliver real value.";

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="describe-container">
      <p className="describe-message">
        {isVisible && (
          <TypeWriter text={describeMessage} speed={30} startDelay={0} />
        )}
      </p>
    </div>
  );
}
