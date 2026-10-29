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

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  const themeToggle = mounted && theme && data.darkMode && (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      classes="ml-0"
    >
      <img
        className="h-6"
        alt="Toggle theme"
        src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
      ></img>
    </Button>
  );

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <Link href="/" className="font-medium p-2 laptop:p-0 link">
                {name}.
              </Link>

              <div className="flex items-center">
                {themeToggle}

                <Popover.Button aria-label="Menu">
                  <img
                    className="h-5"
                    alt=""
                    src={`/images/${
                      !open
                        ? isDark
                          ? "menu-white.svg"
                          : "menu.svg"
                        : isDark
                        ? "cancel-white.svg"
                        : "cancel.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                isDark ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
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
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          isDark ? "bg-black" : "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <Link href="/" className="font-medium cursor-pointer mob:p-2 laptop:p-0 link">
          {name}.
        </Link>
        <div className="flex">
          {NAV.map((item) => (
            <Button key={item.href} href={item.href}>
              {item.title}
            </Button>
          ))}
          {themeToggle}
        </div>
      </div>
    </>
  );
};

export default Header;
