"use client";
import InfoGeneral, { InfoGeneralProps } from "./infoside";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type Activity = {
  name: string;
  href: string;
  imatge_url: string;
  alt_imatge: string;
  width?: number;
  height?: number;
};

export type SidenavProps = {
  params: { slug: string };
  activitats: Activity[];
  info: InfoGeneralProps;
};

export const Sidenav = async ({ params, activitats, info }: SidenavProps) => {
  const pathname = usePathname();
  //console.log("Sidenav pathname", pathname);
  //console.log("Sidenav params", params);
  //console.log("href", activitats[0].href);
  const slug = params.slug;

  /* donada  activitats [
  {
    name: 'Grups de Treball',
    href: 'grups_treball',
    imatge_url: 'https://cdn.sanity.io/images/tb531kyh/production/c3cea1e14e6923f0034a6c492f7c6d3a33eaf80f-1341x1341.png?fit=max&auto=format',
    alt_imatge: 'Flor de la vida'
  }
] 
agafar activitat on activitat.href == params.slug
*/
  const current_activitat = activitats.find(
    (activitat) => activitat.href == params.slug
  );

  return (
    <aside
      className="w-full h-full lg:w-96 mx-4 flex flex-col content-between justify-items-center"
      aria-label="Sidebar"
    >
      {false && <InfoGeneral {...info} />}

      <div className="flex flex-col items-center pt-4">
        <h1 className="text-lg font-bold text-gray-800">Activitats</h1>
        <p className="text-sm text-gray-600">
          Informa't de les diferents activitats del centre
        </p>
        <div className="border-t border-gray-300 w-full mt-2 mb-4"></div>{" "}
      </div>

      <ul className="space-y-2">
        {activitats.map((activity: any) => (
          <li key={activity.name}>
            <a
              href={activity.href}
              /* quan la ruta actual coincideix amb la ruta de l'activitat,
                posa el text en negreta */
              className={cn(
                "flex items-center p-2 text-xl lg:text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-400  justify-center lg:justify-start",
                slug === activity.href ? "font-bold" : ""
              )}
            >
              {activity.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center w-full mt-2 mb-4">
        <Image
          src={current_activitat?.imatge_url || ""}
          alt={current_activitat?.alt_imatge || ""}
          width={current_activitat?.width || 800}
          height={current_activitat?.height || 800}
          style={{ objectFit: "contain" }}
          className="mr-9 lg:mr-0 p-4 lg:pt-40"
        />
      </div>
    </aside>
  );
};
