import React, { useEffect, useRef } from "react";
import { optimized } from "../../utils/image";

// A lookbook item: an image, or a muted looping video (*.mp4/*.webm/*.mov)
// whose cover frame is the .jpg with the same name next to it.
export const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src || "");
export const posterFor = (src) => src.replace(/\.(mp4|webm|mov)$/i, ".jpg");

const GalleryMedia = ({
  src,
  alt,
  width = 800,
  className = "",
  style,
  hoverPlay = false,
}) => {
  const video = useRef();

  // Play videos only while they're on screen, so a row of them stays light.
  // hoverPlay: on computers they play (muted) only while the mouse is over them.
  useEffect(() => {
    const el = video.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (hoverPlay && window.matchMedia("(hover: hover)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hoverPlay]);

  if (isVideo(src)) {
    return (
      <video
        ref={video}
        src={src}
        poster={optimized(posterFor(src), width)}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onMouseEnter={
          hoverPlay ? (e) => e.currentTarget.play().catch(() => {}) : undefined
        }
        onMouseLeave={hoverPlay ? (e) => e.currentTarget.pause() : undefined}
        className={className}
        style={style}
      />
    );
  }

  return (
    <img
      src={width === "orig" ? src : optimized(src, width)}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  );
};

export default GalleryMedia;
