import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Solid accent dot with a soft halo, so it stays visible on white, black and
// images alike. Over links it grows into an outlined ring.
const Cursor = () => {
  const cursor = useRef();

  useEffect(() => {
    // Touch devices have no hover cursor
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = cursor.current;
    const moveX = gsap.quickTo(el, "x", { duration: 0.15, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.15, ease: "power3" });

    const onMove = (e) => {
      moveX(e.clientX);
      moveY(e.clientY);
      el.classList.add("is-visible");
      el.classList.toggle(
        "is-hovering",
        Boolean(e.target.closest?.(".link, a, button, input, textarea")),
      );
    };
    const onLeave = () => el.classList.remove("is-visible");

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
};

export default Cursor;
