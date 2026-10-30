import React from "react";
import Link from "next/link";

// Colors come from Tailwind `dark:` variants, so there is no flash on load
const STYLES = {
  primary:
    "inline-block bg-[linear-gradient(110deg,#f5cd91,#ec9594)] text-black first:ml-0",
  default:
    "flex items-center hover:bg-blush/70 dark:hover:bg-white/10 tablet:first:ml-0",
};

const Button = ({
  children,
  type,
  onClick,
  href,
  classes = "",
  submit,
  label,
}) => {
  const className = `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-100 link ${
    STYLES[type] || STYLES.default
  } ${classes}`;

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
      aria-label={label}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
