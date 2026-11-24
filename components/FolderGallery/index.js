import React, { useEffect, useState } from "react";
import GalleryMedia, { isVideo } from "../GalleryMedia";
import WorkCard from "../WorkCard";

// Fill the grid in order, dropping each piece into the currently shortest column
const masonry = (items, ratios = [], columns) => {
  const cols = Array.from({ length: columns }, () => []);
  const heights = new Array(columns).fill(0);
  items.forEach((src, i) => {
    // Leftmost column that's (nearly) the shortest, so same-size pieces fill
    // a row left to right
    const min = Math.min(...heights);
    const col = heights.findIndex((h) => h <= min + 0.05);
    cols[col].push(src);
    heights[col] += ratios[i] || 1;
  });
  return cols;
};

// Everything inside a folder: its pictures (grouped by brand when the folder has sections) or, for a folder of case studies, a card per case study. Used by the folder's own page and by the Work page, which lists every folder.
const FolderGallery = ({ entry, items = [] }) => {
  // 1 column on phones, 2 on tablets, 3 on laptops (matches the site's breakpoints)
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const pick = () =>
      setColumns(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
      );
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  if (items.length > 0) {
    return (
      <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {items.map((child) => (
          <WorkCard
            key={child.slug}
            img={child.image}
            name={child.title}
            description={child.description}
            href={`/${child.collection}/${child.slug}/`}
          />
        ))}
      </div>
    );
  }
  if (!entry.gallery?.length) return null;
  return (
    <>
      {(entry.sections?.length
        ? entry.sections
        : [{ title: "", images: entry.gallery }]
      ).map((section, s) => (
        <section key={section.title || s} className={s ? "mt-2" : ""}>
          {section.title && (
            // "Brand — direction": brand in the heading font, direction below in the body font
            <div className="mt-8 p-2 laptop:p-0">
              {/* Direction on top in the heading style, brand below it */}
              <h3 className="text-2xl laptop:text-3xl">
                {section.title.includes(" — ")
                  ? section.title.split(" — ").slice(1).join(" — ")
                  : section.title}
              </h3>
              {section.title.includes(" — ") && (
                <p className="font-body mt-1 text-lg laptop:text-xl opacity-70">
                  {section.title.split(" — ")[0]}
                </p>
              )}
            </div>
          )}
          {section.title ? (
            // Grouped folders: pieces side by side at one height with a small gap,
            // wrapping onto the next line; each one zooms and lifts on hover
            <div className="mt-4 flex flex-wrap gap-2 p-2 laptop:p-0">
              {section.images.map((item) => {
                // "front.jpg + back.jpg": two sides of one print piece, shown as one card
                const sides = item.split(" + ");
                return (
                  <div
                    key={item}
                    className="relative flex h-56 tablet:h-64 laptop:h-72 max-w-full overflow-hidden rounded-lg shadow-lg transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:z-10"
                  >
                    {sides.map((src, side) => (
                      <a
                        key={src}
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block h-full overflow-hidden link"
                      >
                        <GalleryMedia
                          src={src}
                          alt={entry.title}
                          className="h-full w-auto max-w-full object-cover"
                        />
                        {sides.length > 1 && (
                          <span className="absolute bottom-3 left-3 rounded-full bg-black/60 text-white text-sm px-3 py-1">
                            {side ? "Back" : "Front"}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 flex gap-4 p-2 laptop:p-0">
              {masonry(
                section.images,
                section.images.map(
                  (src) => entry.galleryRatios?.[entry.gallery.indexOf(src)],
                ),
                columns,
              ).map((list, col) => (
                <div key={col} className="flex-1 min-w-0 flex flex-col gap-4">
                  {list.map((src) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block overflow-hidden rounded-lg shadow-lg link"
                    >
                      <GalleryMedia
                        src={src}
                        alt={entry.title}
                        className="w-full h-auto hover:scale-105 transition-all ease-out duration-300"
                      />
                      {isVideo(src) && (
                        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 text-white text-sm px-3 py-1">
                          ▶ Full video
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default FolderGallery;
