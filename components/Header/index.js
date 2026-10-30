import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const NAV = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/projects/" },
  { title: "About", href: "/about/" },
  { title: "Contact", href: "/contact/" },
];

const SunIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
);

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep the slot's size before mount so the nav doesn't jump
  if (!mounted || !data.darkMode) return <span className="w-9" />;

  const isDark = resolvedTheme === "dark";
  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

const Header = () => {
  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blush to-[#fdfaf6] dark:from-blush dark:to-[#fdfaf6] dark:text-[#0B0100]">
              <Link href="/" className="font-medium p-2 laptop:p-0 link dark:text-[#0B0100]">
                {data.name}.
              </Link>

              <div className="flex items-center">
                <ThemeToggle />
                <Popover.Button aria-label="Menu" className="p-2 link">
                  <MenuIcon open={open} />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel className="absolute right-4 z-20 w-11/12 p-4 bg-[#f7f5f5] dark:bg-slate-900 shadow-md rounded-md">
              <div className="grid grid-cols-1">
                {NAV.map((item) => (
                  <Button key={item.href} href={item.href}>
                    {item.title}
                  </Button>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="mt-10 hidden tablet:flex flex-row items-center justify-between sticky top-0 z-20 px-4 py-1 rounded-lg bg-gradient-to-r from-blush to-[#fdfaf6] dark:from-blush dark:to-[#fdfaf6] dark:text-[#0B0100]">
        <Link
          href="/"
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 link dark:text-[#0B0100]"
        >
          {data.name}.
        </Link>
        <div className="flex items-center">
          {NAV.map((item) => (
            <Button key={item.href} href={item.href}>
              {item.title}
            </Button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
