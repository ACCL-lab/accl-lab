import { useEffect, useRef } from "react";

const NAV_HEIGHT = 80; // adjust to your navbar height

export default function Autoscroll1({ pauseMs = 7000 }) {
  const timerRef = useRef(null);
  const indexRef = useRef(0);

  const stop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const getSections = () =>
    Array.from(document.querySelectorAll("section[id]"));

  useEffect(() => {
    const goNext = () => {
      const sections = getSections();
      if (!sections.length) return;

      indexRef.current = indexRef.current % sections.length;
      const el = sections[indexRef.current];
      const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });

      indexRef.current = (indexRef.current + 1) % sections.length;
      timerRef.current = setTimeout(goNext, pauseMs);
    };

    const start = () => {
      stop();
      const sections = getSections();
      if (!sections.length) return;

      const y = window.pageYOffset + NAV_HEIGHT + 1;
      let current = 0;
      for (let i = 0; i < sections.length; i++) {
        if (y >= sections[i].offsetTop) current = i;
      }
      indexRef.current = (current + 1) % sections.length;

      timerRef.current = setTimeout(goNext, 400);
    };

    const onFullscreenChange = () => {
      if (document.fullscreenElement) start();
      else stop();
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    const forceParam = new URL(window.location.href).searchParams.get("autoscroll") === "1";
    const isLargeScreen = window.matchMedia("(min-width: 1920px)").matches;

    if (forceParam || isLargeScreen) {
      start();
    }

    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("keydown", stop);
    window.addEventListener("touchstart", stop, { passive: true });

    return () => {
      stop();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, [pauseMs]);

  return null;
}
