import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, href, classes = "", submit }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const cursorClass = data.showCursor ? "cursor-none" : "";

  const className =
    type === "primary"
      ? `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg inline-block ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${cursorClass} ${classes}`
      : `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
          isDark ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"
        } hover:scale-105 active:scale-100 tablet:first:ml-0 ${cursorClass} ${classes} link`;

  if (href) {
    const external = /^(https?:|mailto:)/.test(href);
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    ) : (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
