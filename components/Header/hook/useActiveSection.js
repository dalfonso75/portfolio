import { useState, useEffect } from "react";

const useActiveSection = () => {
  const [activeSectionId, setActiveSectionId] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0px -50% 0px",
    });

    const sections = Array.from(document.getElementsByTagName("section"));
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSectionId;
};

export default useActiveSection;
