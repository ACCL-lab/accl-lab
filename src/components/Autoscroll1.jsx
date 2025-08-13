import { useEffect, useRef } from "react";

const NAV_HEIGHT = 80;         
const LEAD_PAUSE_MS = 4000;    
const FIRST_SECTION_PAUSE_MS = 8000;  // 8 seconds for hero section
const TAIL_PAUSE_MS = 1000;    
const SPEED_PX_PER_SEC = 60;   

export default function Autoscroll1() {
  const runningRef = useRef(false);
  const indexRef = useRef(0);
  const rafRef = useRef(null);
  const leadTimeoutRef = useRef(null);
  const tailTimeoutRef = useRef(null);
  const prevScrollBehaviorRef = useRef("");

  const getSections = () => Array.from(document.querySelectorAll("section[id]"));

  useEffect(() => {
    const cancelAll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (leadTimeoutRef.current) clearTimeout(leadTimeoutRef.current);
      if (tailTimeoutRef.current) clearTimeout(tailTimeoutRef.current);
      rafRef.current = leadTimeoutRef.current = tailTimeoutRef.current = null;
    };

    const stop = () => {
      runningRef.current = false;
      cancelAll();
      document.documentElement.style.scrollBehavior =
        prevScrollBehaviorRef.current || "";
    };

    const animateTo = (targetY, done) => {
      let lastTs = 0;
      const step = (ts) => {
        if (!runningRef.current) return;
        if (!lastTs) {
          lastTs = ts;
          rafRef.current = requestAnimationFrame(step);
          return;
        }
        const dt = (ts - lastTs) / 1000;
        lastTs = ts;

        const currentY = window.pageYOffset;
        const dir = targetY > currentY ? 1 : -1;
        const delta = SPEED_PX_PER_SEC * dt * dir;
        const nextY =
          dir > 0
            ? Math.min(currentY + delta, targetY)
            : Math.max(currentY + delta, targetY);

        window.scrollTo(0, nextY);

        if (Math.abs(nextY - targetY) <= 0.5) {
          rafRef.current = null;
          if (done) done();
        } else {
          rafRef.current = requestAnimationFrame(step);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const runSection = () => {
      if (!runningRef.current) return;

      const sections = getSections();
      if (!sections.length) return;

      const i = indexRef.current % sections.length;
      const el = sections[i];
      const sectionTop = el.getBoundingClientRect().top + window.pageYOffset;
      const startY = Math.max(0, sectionTop - NAV_HEIGHT);
      const docMaxY =
        Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) -
        window.innerHeight;
      const sectionEndCandidate = sectionTop + el.offsetHeight - window.innerHeight;
      const endY = Math.max(startY, Math.min(sectionEndCandidate, docMaxY));

      // Jump instantly to section top
      window.scrollTo(0, startY);

      // Choose pause time: longer for first section
      const leadPause = i === 0 ? FIRST_SECTION_PAUSE_MS : LEAD_PAUSE_MS;

      leadTimeoutRef.current = setTimeout(() => {
        if (!runningRef.current) return;

        if (endY <= startY + 1) {
          tailTimeoutRef.current = setTimeout(() => {
            indexRef.current = (indexRef.current + 1) % sections.length;
            runSection();
          }, TAIL_PAUSE_MS);
        } else {
          animateTo(endY, () => {
            if (!runningRef.current) return;
            tailTimeoutRef.current = setTimeout(() => {
              indexRef.current = (indexRef.current + 1) % sections.length;
              runSection();
            }, TAIL_PAUSE_MS);
          });
        }
      }, leadPause);
    };

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;

      prevScrollBehaviorRef.current = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      const sections = getSections();
      if (!sections.length) return;

      indexRef.current = 0; // Start from first section (hero)
      cancelAll();
      runSection();
    };

    const shouldAutoStart = () => {
      const forceParam =
        new URL(window.location.href).searchParams.get("autoscroll") === "1";
      const isLarge = window.matchMedia("(min-width: 1280px)").matches;
      const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
      return forceParam || (isFull && isLarge);
    };

    if (shouldAutoStart()) start();

    const onFullscreenChange = () => {
      if (shouldAutoStart()) start();
      else stop();
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);

    const interrupt = () => stop();
    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("keydown", interrupt);
    window.addEventListener("touchstart", interrupt, { passive: true });

    const onVisibility = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("keydown", interrupt);
      window.removeEventListener("touchstart", interrupt);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
