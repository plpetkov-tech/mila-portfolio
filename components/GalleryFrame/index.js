import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GalleryMedia from "../GalleryMedia";

// Home page frame for a lookbook folder: its pieces overlap in a row that
// scrolls sideways, and the whole frame opens the folder's full grid.
// Picture height: regular on the home page, larger on the Work page
const HEIGHT = {
  regular: "h-64 tablet:h-80 laptop:h-96",
  large: "h-72 tablet:h-[28rem] laptop:h-[34rem]",
};

const GalleryFrame = ({
  name,
  description,
  images,
  href,
  crop = false,
  pairs = false,
  layout = "overlap",
  ratios = [],
  large = false,
  focus = [],
  angle = 90,
  fit = false,
  overlap = 0,
}) => {
  const router = useRouter();
  const height = large ? HEIGHT.large : HEIGHT.regular;

  return (
    <div className="p-2 laptop:p-4">
      <div
        role="link"
        tabIndex={0}
        aria-label={`${name} – view more`}
        onClick={() => router.push(href)}
        onKeyDown={(e) => e.key === "Enter" && router.push(href)}
        style={{
          "--a": `${angle}deg`,
          "--sx": `${50 - 40 * Math.sin((angle * Math.PI) / 180)}%`,
          "--sy": `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
        }}
        className="frost-card relative rounded-lg overflow-hidden bg-[#ebe6e2] dark:bg-transparent link"
      >
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-5 z-50 text-base dark:bg-black/45 dark:rounded-full dark:px-3 dark:py-0.5 dark:opacity-90 opacity-70 hover:opacity-100 transition-opacity"
        >
          View more →
        </Link>

        {layout === "natural" ? (
          // Whole pictures side by side at one height; scroll sideways when
          // they don't all fit in the frame
          <div
            className={`no-scrollbar flex pt-14 pb-6 px-6 tablet:px-8 ${overlap ? "[--h:16rem] tablet:[--h:20rem] laptop:[--h:24rem]" : "gap-4"} ${fit ? "items-start" : "overflow-x-auto"}`}
          >
            {images.map((src, i) => (
              <div
                key={src}
                // fit: every picture shrinks to share the frame (no scrolling),
                // widths in proportion so they end up the same height
                className={fit ? "min-w-0" : `flex-none ${height}`}
                style={
                  fit
                    ? {
                        flex: `${1 / (ratios[i] || 1)} 1 0%`,
                        aspectRatio: `${1 / (ratios[i] || 1)}`,
                      }
                    : {
                        aspectRatio: `${1 / (ratios[i] || 1)}`,
                        // overlap: each picture tucks under its neighbour by
                        // that share of its width; the 2nd one sits on top
                        ...(overlap && i > 0
                          ? {
                              marginLeft: `calc(var(--h) / ${ratios[i] || 1} * -${overlap})`,
                            }
                          : {}),
                        ...(overlap
                          ? {
                              position: "relative",
                              zIndex: 20 - Math.abs(i - 1) * 2,
                            }
                          : {}),
                      }
                }
              >
                <GalleryMedia
                  src={src}
                  alt={name}
                  // wide collages are shown at full resolution so they stay sharp
                  width={(ratios[i] || 1) < 0.5 ? "orig" : 1600}
                  className="w-full h-full object-cover rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10 relative"
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
              className={`w-full ${height} object-cover rounded-lg shadow-xl`}
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
                className={`flex-1 min-w-0 ${height} object-cover object-top rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10 relative`}
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
                    className={`w-full ${height} object-cover rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10 relative`}
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
                className={`relative flex-none ${height} ${
                  crop ? "aspect-[3/4] object-cover" : "w-auto"
                } rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10 relative hover:!z-40 ${
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
        <h2
          className={`mt-3 font-body text-xl opacity-50 ${large ? "" : "line-clamp-3"}`}
        >
          {description}
        </h2>
      </Link>
    </div>
  );
};

export default GalleryFrame;
