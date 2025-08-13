import { useEffect, useRef } from "react";

// adjust to your fixed navbar height
const NAV_HEIGHT = 80; 

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

  const goNext = () => {
    const sections = getSections();
    if (!sections.length) return;

    indexRef.current = indexRef.current % sections.length;
    const el = sections[indexRef.current];

    // scroll accounting for fixed navbar
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });

    indexRef.current = (indexRef.current + 1) % sections.length;
    timerRef.current = setTimeout(goNext, pauseMs);
  };

  useEffect(() => {
    const start = () => {
      stop();
      const sections = getSections();
      if (!sections.length) return;

      // start from the section currently near the top
      const y = window.pageYOffset + NAV_HEIGHT + 1;
      let current = 0;
      for (let i = 0; i < sections.length; i++) {
        if (y >= sections[i].offsetTop) current = i;
      }
      indexRef.current = (current + 1) % sections.length;

      // small delay to let layout settle (esp. right after entering fullscreen)
      timerRef.current = setTimeout(goNext, 400);
    };

    const onFullscreenChange = () => {
      if (document.fullscreenElement) start();
      else stop();
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    // also allow manual forcing via ?autoscroll=1 (useful on TVs where fullscreen can't be detected)
    if (new URL(window.location.href).searchParams.get("autoscroll") === "1") {
      start();
    }

    // stop if user interacts
    const interrupt = () => stop();
    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("keydown", interrupt);
    window.addEventListener("touchstart", interrupt, { passive: true });

    return () => {
      stop();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("keydown", interrupt);
      window.removeEventListener("touchstart", interrupt);
    };
  }, [pauseMs]);

  return null; // no UI
}
