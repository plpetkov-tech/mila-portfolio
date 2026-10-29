import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Lightweight replacement for custom-cursor-react (which doesn't support React 18)
const Cursor = () => {
  const cursor = useRef();

  useEffect(() => {
    // Touch devices have no hover cursor
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = cursor.current;
    gsap.set(el, { opacity: 1 });
    const moveX = gsap.quickTo(el, "x", { duration: 0.2, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.2, ease: "power3" });

    const onMove = (e) => {
      moveX(e.clientX);
      moveY(e.clientY);
      const overLink = e.target.closest?.(".link, a, button");
      gsap.to(el, {
        scale: overLink ? 2 : 1,
        opacity: overLink ? 0.5 : 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={cursor} className="custom-cursor opacity-0" />;
};

export default Cursor;
