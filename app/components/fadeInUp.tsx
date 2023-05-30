"use client";
import React from "react";
const FadeInSection = (props: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!domRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current!);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeInSection;
