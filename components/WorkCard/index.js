import React from "react";
import Link from "next/link";
import { optimized } from "../../utils/image";

const WorkCard = ({ img, name, description, href, tall = true }) => {
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className={`relative rounded-lg overflow-hidden transition-all ease-out duration-300 ${
          tall ? "h-72 tablet:h-[600px]" : "h-72 tablet:h-96"
        }`}
      >
        <img
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          decoding="async"
          src={optimized(img, 800)}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 line-clamp-3">
        {description ? description : "Description"}
      </h2>
    </Link>
  );
};

export default WorkCard;
