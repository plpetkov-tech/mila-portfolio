import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Layout from "../Layout";
import ContentSection from "../ContentSection";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { optimized } from "../../utils/image";
import GalleryMedia, { isVideo } from "../GalleryMedia";
import WorkCard from "../WorkCard";

const truncate = (text, max = 30) =>
  text.length > max ? text.slice(0, max) + "..." : text;

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

const EntryPage = ({ entry, previous, next, children = [] }) => {
  const textOne = useRef();
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
  const textTwo = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <Layout
      title={entry.title}
      description={entry.description}
      image={entry.image}
    >
      <article className="mt-10 flex flex-col max-w-5xl mx-auto">
        <h1
          ref={textOne}
          className="text-4xl mob:text-2xl laptop:text-6xl text-bold p-2 laptop:p-0"
        >
          {entry.title}
        </h1>
        <h2
          ref={textTwo}
          className="font-body mt-2 text-xl max-w-4xl opacity-50 p-2 laptop:p-0"
        >
          {entry.category}
        </h2>
        {entry.image && !entry.gallery?.length && !children.length && (
          <a
            href={entry.image}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img
              className="mt-10 w-full h-auto rounded-lg shadow-lg"
              src={optimized(entry.image)}
              alt={entry.title}
            ></img>
          </a>
        )}
        {entry.showDescription && (
          <p className="mt-10 text-xl laptop:text-2xl opacity-80 p-2 laptop:p-0">
            {entry.description}
          </p>
        )}
        {/* A folder's gallery only feeds its home page frame */}
        {entry.gallery?.length > 0 &&
          !children.length &&
          (entry.sections?.length
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
                // Grouped folders: rows of four laid out like the home page cards:
                // each piece overlaps the one before it and lifts to the front on hover
                <div className="mt-4 flex flex-col gap-3 p-2 laptop:p-0">
                  {section.images
                    .reduce(
                      (rows, item, i) =>
                        i % 4
                          ? [...rows.slice(0, -1), [...rows[rows.length - 1], item]]
                          : [...rows, [item]],
                      [],
                    )
                    .map((row) => (
                      <div
                        key={row[0]}
                        className="flex overflow-x-auto tablet:overflow-visible py-2 [scrollbar-width:thin]"
                      >
                        {row.map((item, i) => {
                          // "front.jpg + back.jpg": two sides of one print piece, shown as one card
                          const sides = item.split(" + ");
                          return (
                            <div
                              key={item}
                              style={{ zIndex: i }}
                              className={`relative flex flex-none h-56 tablet:h-64 laptop:h-72 overflow-hidden rounded-lg shadow-xl transition-transform ease-out duration-500 hover:scale-110 hover:-translate-y-1 hover:!z-40 ${
                                i ? "-ml-16 tablet:-ml-24" : ""
                              }`}
                            >
                              {sides.map((src, side) => (
                                <a
                                  key={src}
                                  href={src}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="relative block h-full flex-none link"
                                >
                                  <GalleryMedia
                                    src={src}
                                    alt={entry.title}
                                    className="block h-full w-auto max-w-none"
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
                    ))}
                </div>
              ) : (
                <div className="mt-10 flex gap-4 p-2 laptop:p-0">
                  {masonry(
                    section.images,
                    section.images.map(
                      (src) =>
                        entry.galleryRatios?.[entry.gallery.indexOf(src)],
                    ),
                    columns,
                  ).map((list, col) => (
                    <div
                      key={col}
                      className="flex-1 min-w-0 flex flex-col gap-4"
                    >
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
        {children.length > 0 && (
          <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {children.map((child) => (
              <WorkCard
                key={child.slug}
                img={child.image}
                name={child.title}
                description={child.description}
                href={`/${child.collection}/${child.slug}/`}
              />
            ))}
          </div>
        )}
        <ContentSection html={entry.html} />

        <nav className="flex items-center justify-between pt-8 p-2 laptop:p-0">
          {previous ? (
            <Link
              href={`/${entry.collection}/${previous.slug}/`}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 link"
            >
              ← {truncate(previous.title)}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/${entry.collection}/${next.slug}/`}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 link"
            >
              {truncate(next.title)} →
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
};

export default EntryPage;
