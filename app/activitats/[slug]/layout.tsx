import { fetchActivitats, fetchInfoGeneral } from "@/app/lib/data";
import { Sidenav } from "./ui/sidenav";
import { InfoGeneralProps } from "./ui/infoside";

export async function generateStaticParams() {
  const activitats = await fetchActivitats();

  return activitats.map((activitat) => ({
    params: { slug: activitat.slug },
    activitats: activitat,
  }));
}

export default async function ActivitatsLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const activitats = await fetchActivitats();
  const infoGeneral: any = await fetchInfoGeneral();

  const lang = "ca";
  const activitats_list = activitats.map((activitat) => ({
    name: activitat.title[lang],
    href: activitat.slug,
    imatge_url: activitat.imatge?._url,
    alt_imatge: activitat.imatge?.alt[lang],
    with: activitat.imatge?.width,
    height: activitat.imatge?.height,
  }));

  const info: InfoGeneralProps = {
    title: infoGeneral.title[lang],
    subtitle: infoGeneral.subtitle[lang],
    logoImageUrl: infoGeneral.imatge_logo?._url,
    alt_logo: infoGeneral.imatge_logo?.alt[lang],
  };
  //console.log("ActivitatsLayout params", activitats);
  return (
    <div className="flex flex-nowrap flex-col lg:flex-row  content-start w-full h-full">
      <Sidenav params={params} activitats={activitats_list} info={info} />
      {children}
    </div>
  );
}
