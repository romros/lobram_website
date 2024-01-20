import Image from "next/image";
import Narrativa from "@/components/narrativa";
import MiniFitxa from "@/components/mini_fitxa";

import { cn } from "@/lib/utils";
import { fetchActivitat } from "@/app/lib/data";
import { SECTIONS_ACTIVITATS_NAME } from "@/sanity/schemas/activitatsSchema";
import { IMATGES_LIB_NAME } from "@/sanity/schemas/imageLibrarySchema";
import { MINIFITXES_NAME } from "@/sanity/schemas/miniFitxaSchema";
import { NARRATIVA_NAME } from "@/sanity/schemas/narrativaSchema";

import Hero from "@/components/hero";
import { Sidenav } from "./ui/sidenav";

function add_narrativa(element: any) {
  return (
    <div className="p-4" key={element._id}>
      <Narrativa
        key={element._id}
        titol={element.titol}
        descripcio={element?.descripcio}
      />
    </div>
  );
}

function add_image(element: any) {
  return (
    <div
      className="flex justify-center items-center h-full w-full px-4 lg:x-0"
      key={element._id}
    >
      <Image
        src={element.image?._url || ""} // La font de la imatge
        objectFit="contain" // Això assegura que l'imatge no es talli
        alt="Descripció de la imatge"
        height={element.imatge?._height || 800}
        width={element.imatge?._width || 800}
      />
    </div>
  );
}

function add_minifitxa(element: any) {
  const imatge = element?._image?.image || {};
  const { key, ...args } = element;
  const props = {
    ...args,
    image: imatge._url || "",
    lang: "ca",
    image_width: imatge?.width || 800,
    image_height: imatge?.height || 800,
  };
  return (
    <div className="px-4" key={element._id}>
      <MiniFitxa {...props} />
    </div>
  );
}

function add_hero(element: any) {
  const imatge = element?.imatge || {};
  const logo = element?.imatge_logo || {};
  const { key, ...args } = element;
  const props = {
    ...args,
    backgroundImage: imatge._url || "",
    logo: logo._url || "",
    lang: "ca",
  };
  return (
    <div className="px-4" key={element._id}>
      <Hero {...props} />
    </div>
  );
}

export default async function ActivitatPage({
  params,
}: {
  params: { slug: string };
}) {
  /* get slug from url */
  console.log("params", params);
  const slug = params.slug;
  const activitats = await fetchActivitat(
    Array.isArray(slug) ? slug[0] : slug || ""
  );

  const sections = activitats?.[SECTIONS_ACTIVITATS_NAME] || [];

  if (!activitats) {
    /* redirecciona a no trobat */
  }

  let sectionDiv: { [key: string]: any } = {};
  sections.forEach((section: any) => {
    sectionDiv[section._key] = cn(
      "w-full  flex  flex-col  content-start",
      "lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r",
      section?.class_name_section
    );
    //console.log(`section ${section._key} ${sectionDiv[section._key]}`);
  });

  return (
    <main className="w-full ">
      <div className="flex flex-nowrap flex-col lg:flex-row  content-start w-full ">
        {sections.map((section: any) => (
          <div key={section._key} className={sectionDiv[section._key]}>
            {section.elements.map((element: any) => {
              switch (element._type) {
                case NARRATIVA_NAME:
                  return add_narrativa(element);
                case IMATGES_LIB_NAME:
                  return add_image(element);
                case MINIFITXES_NAME:
                  return add_minifitxa(element);
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
