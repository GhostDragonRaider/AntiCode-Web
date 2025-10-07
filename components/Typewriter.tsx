import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number; // Typing speed in milliseconds (default: 100)
  startDelay?: number; // Delay before starting to type in milliseconds (default: 3000)
}

export default function TypeWriter({
  text,
  speed = 100,
  startDelay = 3000,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStartTyping(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (shouldStartTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex >= text.length) {
      const timer = setTimeout(() => {
        setShowCursor(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, shouldStartTyping, text, speed]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
}
