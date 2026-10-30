import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { optimized } from "../../utils/image";

// Home page frame for a lookbook folder: its pieces overlap in a row that
// scrolls sideways, and the whole frame opens the folder's full grid.
const GalleryFrame = ({ name, description, images, href }) => {
  const router = useRouter();

  return (
    <div className="p-2 laptop:p-4">
      <div
        role="link"
        tabIndex={0}
        aria-label={`${name} – view more`}
        onClick={() => router.push(href)}
        onKeyDown={(e) => e.key === "Enter" && router.push(href)}
        className="relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 link"
      >
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-5 z-50 text-base opacity-70 hover:opacity-100 transition-opacity"
        >
          View more →
        </Link>

        <div className="flex overflow-x-auto pt-14 pb-6 px-6 tablet:px-8 [scrollbar-width:thin]">
          {images.map((src, index) => (
            <img
              key={src}
              src={optimized(src, 800)}
              alt={name}
              loading="lazy"
              decoding="async"
              style={{ zIndex: index }}
              className={`relative flex-none h-64 tablet:h-96 w-auto rounded-lg shadow-xl transition-transform ease-out duration-300 hover:-translate-y-2 hover:!z-40 ${
                index === 0 ? "" : "-ml-16 tablet:-ml-24"
              }`}
            />
          ))}
          <span className="flex-none w-6" aria-hidden="true" />
        </div>
      </div>
      <Link href={href} className="block link">
        <h1 className="mt-5 text-3xl font-medium">{name}</h1>
        <h2 className="text-xl opacity-50 line-clamp-3">{description}</h2>
      </Link>
    </div>
  );
};

export default GalleryFrame;
