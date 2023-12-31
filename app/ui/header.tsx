"use client";
import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { link } from "fs";
import NextLink from "next/link";

interface HeaderProps {
  links: {
    data: {
      links: {
        text: string;
        url: any;
      }[];
    };
  };
}

export function Header({ links }: HeaderProps) {
  const pathname = usePathname();

  links.data.links.map((link, index) => console.log(link.url));

  return (
    <header className="supports-backdrop-blur: bg-slate-50/95 sticky top-0 z-50 overflow-visible py-3 backdrop-blur dark:bg-gray-900/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div className="flex items-center">
          <div className=" space-x-2 sm:block">
            {links.data.links.map((link, index) => (
              <Link key={index} href={link.url} legacyBehavior>
                <span
                  key={index}
                  className={clsx(
                    "inline-block rounded px-2 py-1 font-medium text-gray-900 dark:text-gray-100 sm:px-3 sm:py-2",
                    pathname === link.url
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {link.text}{" "}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
