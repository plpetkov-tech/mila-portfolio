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
        {entry.gallery?.length > 0 && !children.length && (
          // Masonry that reads left to right: piece 1, 2, 3 across the top, and so on
          <div className="mt-10 flex gap-4 p-2 laptop:p-0">
            {Array.from({ length: columns }, (_, col) => (
              <div key={col} className="flex-1 min-w-0 flex flex-col gap-4">
                {entry.gallery
                  .filter((_, i) => i % columns === col)
                  .map((src) => (
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
