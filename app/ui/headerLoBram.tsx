"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { fetchPagines } from "../lib/data";
import { cn } from "@/lib/utils";

type HeaderProps = {
  lang: string;
};

export async function HeaderLoBram({ lang }: HeaderProps) {
  const pathname = usePathname();

  // Comprova si la ruta actual comença amb /studio/
  const isStudioRoute = pathname.startsWith("/studio");
  if (isStudioRoute) {
    return null;
  }
  const pagines = await fetchPagines();
  return (
    <header className="supports-backdrop-blur: bg-slate-50/95 sticky top-0 z-50 overflow-visible py-3 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div className="flex items-center">
          <div className=" space-x-2 sm:block">
            {pagines.map((pagina, index) => (
              <Link
                key={index}
                href={pagina.href}
                className={cn(
                  "inline-block rounded px-2 py-1 font-medium text-gray-900 dark:text-gray-100 sm:px-3 sm:py-2",
                  pathname === pagina.href ? "bg-gray-200" : "hover:bg-gray-200"
                )}
              >
                {pagina.title[lang]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
