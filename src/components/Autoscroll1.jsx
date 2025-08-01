import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const AutoScroll = () => {
  const sectionIds = useMemo(
    () => [
      "hero",
      "about-section",
      "news-section",
      "research-section",
      "publications",
      "projects",
      "team",
      "contact"
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const userInteractedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  const scrollToSection = useCallback(
    (idx) => {
      const section = document.getElementById(sectionIds[idx]);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    },
    [sectionIds]
  );

  const startAutoScroll = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % sectionIds.length);
    }, 5000);
  }, [sectionIds.length]);

  const handleUserActivity = useCallback(() => {
    userInteractedRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      userInteractedRef.current = false;
      startAutoScroll();
    }, 20000);
  }, [startAutoScroll]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!userInteractedRef.current) startAutoScroll();
  }, [startAutoScroll]);

  useEffect(() => {
    scrollToSection(index);
    if (!userInteractedRef.current) {
      startAutoScroll();
    }
  }, [index, scrollToSection, startAutoScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleUserActivity);
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("touchstart", handleUserActivity);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    startAutoScroll();

    return () => {
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, [handleUserActivity, handleMouseEnter, handleMouseLeave, startAutoScroll]);

  return null;
};

export default AutoScroll;
