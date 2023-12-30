// import { useTranslation } from "next-i18next";
import { Link } from "./Link";
import { DevIcon } from "./DevIcon";

export function Footer() {
  //const { t } = useTranslation("common");

  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="flex items-center space-x-1">
          <span className="mr-1 text-gray-500 dark:text-gray-400">
            "build With"
          </span>
          <div className="flex space-x-1.5">
            <Link href="https://nextjs.org?ref=romanroset.dev">
              <DevIcon type="NextJS" className="h-5 w-5" />
            </Link>
            <Link href="https://tailwindcss.com?ref=romanroset.dev">
              <DevIcon type="TailwindCSS" className="h-5 w-5" />
            </Link>
            <Link href="https://www.prisma.io?ref=romanroset.dev">
              <DevIcon type="Prisma" className="h-5 w-5" />
            </Link>
            <Link href="https://www.typescriptlang.org?ref=romanroset.dev">
              <DevIcon type="Typescript" className="h-5 w-5" />
            </Link>
            <Link href="https://umami.is?ref=romanroset.dev" className="pl-px">
              <DevIcon type="Umami" className="h-5 w-5" />
            </Link>
          </div>
          <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
          <Link
            href="http://gitbub.com/loquesigui?ref=romanroset.dev"
            className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
          >
            <span data-umami-event="view-source">Veure codi</span>
          </Link>
        </div>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Veure Codi</span>
        </div>
      </div>
    </footer>
  );
}
