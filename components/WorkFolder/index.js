import React from "react";
import Link from "next/link";
import GalleryMedia from "../GalleryMedia";

// A full-width row on the Work page: a few whole (uncropped) shots from the
// folder, all the same height, sized so together they fill the row exactly.
// On phones the row scrolls sideways instead of stacking.
const WorkFolder = ({
  name,
  description,
  images,
  ratios = [],
  equal = false,
  href,
  angle = 90,
}) => {
  // Equal mode: every shot gets the same width and the same (average) shape
  const avg = ratios.length
    ? ratios.reduce((a, b) => a + b, 0) / ratios.length
    : 1;
  return (
    <Link href={href} className="block p-2 laptop:p-4 link group">
      <div
        style={{ "--a": `${angle}deg` }}
        className="frost-card relative rounded-lg bg-[#ebe6e2] dark:bg-transparent pt-14 pb-6 px-4 tablet:px-8"
      >
        <span className="absolute top-4 right-5 text-base opacity-70 group-hover:opacity-100 transition-opacity">
          View more →
        </span>
        <div className="flex gap-3 tablet:gap-4 items-start overflow-x-auto tablet:overflow-visible">
          {images.map((src, i) => (
            <div
              key={src}
              className="flex-none tablet:min-w-0 tablet:[flex:var(--grow)_1_0%]"
              style={{ "--grow": equal ? 1 : 1 / (ratios[i] || 1) }}
            >
              <GalleryMedia
                src={src}
                alt={name}
                hoverPlay
                className={`block h-64 w-auto tablet:h-auto tablet:w-full rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10 relative${equal ? " object-cover" : ""}`}
                style={equal ? { aspectRatio: `${1 / avg}` } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 className="mt-5 text-3xl">{name}</h1>
      <h2 className="mt-3 font-body text-xl opacity-50">{description}</h2>
    </Link>
  );
};

export default WorkFolder;
