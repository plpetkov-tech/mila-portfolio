import React from "react";
import Link from "next/link";

// Colors come from Tailwind `dark:` variants, so there is no flash on load
const STYLES = {
  primary: "glass-btn inline-block text-[#0B0100] first:ml-0",
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
  // Gradient buttons are larger, with roomy padding; menu-style buttons stay compact
  const size =
    type === "primary"
      ? "text-2xl laptop:text-3xl font-medium px-10 py-5 laptop:px-14 laptop:py-6 rounded-[28px]"
      : "text-sm tablet:text-base p-1 laptop:p-2 rounded-lg";
  const className = `${size} m-1 laptop:m-2 transition-all duration-300 ease-out hover:scale-105 active:scale-100 link ${
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
