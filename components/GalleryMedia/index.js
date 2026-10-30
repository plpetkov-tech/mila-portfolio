import React, { useEffect, useRef } from "react";
import { optimized } from "../../utils/image";

// A lookbook item: an image, or a muted looping video (*.mp4/*.webm/*.mov)
// whose cover frame is the .jpg with the same name next to it.
export const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src || "");
export const posterFor = (src) => src.replace(/\.(mp4|webm|mov)$/i, ".jpg");

const GalleryMedia = ({ src, alt, width = 800, className = "", style }) => {
  const video = useRef();

  // Play videos only while they're on screen, so a row of them stays light
  useEffect(() => {
    const el = video.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
        className={className}
        style={style}
      />
    );
  }

  return (
    <img
      src={optimized(src, width)}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  );
};

export default GalleryMedia;
