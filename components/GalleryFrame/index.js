import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GalleryMedia from "../GalleryMedia";

// Home page frame for a lookbook folder: its pieces overlap in a row that
// scrolls sideways, and the whole frame opens the folder's full grid.
const GalleryFrame = ({
  name,
  description,
  images,
  href,
  crop = false,
  pairs = false,
  layout = "overlap",
  ratios = [],
  focus = [],
}) => {
  const router = useRouter();

  return (
    <div className="p-2 laptop:p-4">
      <div
        role="link"
        tabIndex={0}
        aria-label={`${name} – view more`}
        onClick={() => router.push(href)}
        onKeyDown={(e) => e.key === "Enter" && router.push(href)}
        className="relative rounded-lg overflow-hidden bg-[#ebe6e2] dark:bg-[#2a221b] link"
      >
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-5 z-50 text-base opacity-70 hover:opacity-100 transition-opacity"
        >
          View more →
        </Link>

        {layout === "natural" ? (
          // Side by side at their own proportions, nothing cropped
          <div className="flex items-center gap-4 pt-14 pb-6 px-6 tablet:px-8">
            {images.map((src, i) => (
              <div
                key={src}
                className="min-w-0"
                style={{ flex: `${1 / (ratios[i] || 1)} 1 0%` }}
              >
                <GalleryMedia
                  src={src}
                  alt={name}
                  className="w-full h-auto rounded-lg shadow-xl transition-transform ease-out duration-300 hover:-translate-y-2"
                />
              </div>
            ))}
          </div>
        ) : layout === "single" ? (
          // One large picture filling the frame
          <div className="pt-14 pb-6 px-6 tablet:px-8">
            <GalleryMedia
              src={images[0]}
              alt={name}
              width={1600}
              className="w-full h-64 tablet:h-80 laptop:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        ) : layout === "row" ? (
          // Upright tiles side by side, no overlap
          <div className="flex gap-3 tablet:gap-4 pt-14 pb-6 px-6 tablet:px-8">
            {images.map((src) => (
              <GalleryMedia
                key={src}
                src={src}
                alt={name}
                className="flex-1 min-w-0 h-64 tablet:h-80 laptop:h-96 object-cover object-top rounded-lg shadow-xl transition-transform ease-out duration-300 hover:-translate-y-2"
              />
            ))}
          </div>
        ) : pairs ? (
          // Two side-by-side pairs, e.g. one product on the left, another on the right
          <div className="grid grid-cols-2 gap-4 tablet:gap-6 pt-14 pb-6 px-6 tablet:px-8">
            {[0, 2].map((start) => (
              <div key={start} className="grid grid-cols-2 gap-2">
                {images.slice(start, start + 2).map((src, j) => (
                  <GalleryMedia
                    key={src}
                    src={src}
                    alt={name}
                    style={{ objectPosition: focus[start + j] || "50% 50%" }}
                    className="w-full h-64 tablet:h-80 laptop:h-96 object-cover rounded-lg shadow-xl transition-transform ease-out duration-300 hover:-translate-y-2"
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex overflow-x-auto pt-14 pb-6 px-6 tablet:px-8 [scrollbar-width:thin]">
            {images.map((src, index) => (
              <GalleryMedia
                key={src}
                src={src}
                alt={name}
                style={{ zIndex: index }}
                className={`relative flex-none h-64 tablet:h-80 laptop:h-96 ${
                  crop ? "aspect-[3/4] object-cover" : "w-auto"
                } rounded-lg shadow-xl transition-transform ease-out duration-300 hover:-translate-y-2 hover:!z-40 ${
                  index === 0 ? "" : "-ml-16 tablet:-ml-24"
                }`}
              />
            ))}
            <span className="flex-none w-6" aria-hidden="true" />
          </div>
        )}
      </div>
      <Link href={href} className="block link">
        <h1 className="mt-5 text-3xl">{name}</h1>
        <h2 className="font-body text-xl opacity-50 line-clamp-3">
          {description}
        </h2>
      </Link>
    </div>
  );
};

export default GalleryFrame;
