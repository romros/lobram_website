import Image from "next/image";
import { cn } from "@/lib/utils";
import Narrativa, { NarrativaProps } from "@/components/narrativa";

import { fetchActivitat } from "@/app/lib/data";
import { SECTIONS_ACTIVITATS_NAME } from "@/sanity/schemas/activitatsSchema";
import { IMATGES_LIB_NAME } from "@/sanity/schemas/imageLibrarySchema";

const mini_fitxes = [
  {
    name: "Si et ressona el que has llegit, t'agradaria conèixer més sobre el Quart Camí?",
    role: "Curs Introductori",
    bio: "Duració: 1 any - Proper inici: Gener 2024",
    imageUrl: "/curs_introductori.png", // Substitueix amb la URL real de la imatge
    alt_image: "Foto de curs",
    color_titol: "text-slate-200",
    color_subtitol: "text-slate-400",
    color_descripcio: "text-slate-300",
    image_width: 800,
    image_height: 800,
    is_modal: true,
    border_color: "blue-700",
    has_border: true,
  },
  {
    name: "Mònica Rísquez",
    role: "Mestre Principal",
    bio: "Mònica és la guia dels nostres viatges interiors. Amb anys d'experiència, porta la saviesa del Quart Camí a la nostra comunitat.",
    imageUrl: "/monica.jpg", // Substitueix amb la URL real de la imatge
    alt_image: "Foto de Mònica Rísquez",
    color_titol: "text-slate-200",
    color_subtitol: "text-slate-400",
    color_descripcio: "text-slate-300",
    image_width: 800,
    image_height: 800,
    is_modal: false,
    border_color: "blue-700",
    has_border: false,
  },
  {
    name: "Roman Roset",
    role: "Curs Introductori",
    bio: "Amb una passió per l'ensenyament, Roman ofereix una introducció profunda als principis del Quart Camí.",
    imageUrl: "/roman.png",
    alt_image: "Foto de Roman Roset",
    color_titol: "text-slate-200",
    color_subtitol: "text-slate-400",
    color_descripcio: "text-slate-300",
    image_width: 800,
    image_height: 800,
    is_modal: false,
    border_color: "blue-700",
    has_border: false,
  },
  {
    name: "Patty Escandell",
    role: "Curs Introductori",
    bio: "Patty combina tradició i innovació per a oferir una perspectiva fresca en les pràctiques del Quart Camí.",
    imageUrl: "/patty.jpg",
    alt_image: "Foto de Patty Escandell",
    color_titol: "text-slate-200",
    color_subtitol: "text-slate-400",
    color_descripcio: "text-slate-300",
    image_width: 800,
    image_height: 800,
    is_modal: false,
    border_color: "blue-700",
    has_border: false,
  },
  {
    name: "Jaume Roca",
    role: "Curs Introductori",
    bio: "Jaume, amb el seu enfocament pràctic, ajuda als estudiants a aplicar els ensenyaments en la seva vida diària.",
    imageUrl: "/jaume.jpg",
    alt_image: "Foto de Jaume Roca",
    color_titol: "text-slate-200",
    color_subtitol: "text-slate-400",
    color_descripcio: "text-slate-300",
    image_width: 800,
    image_height: 800,
    is_modal: false,
    border_color: "blue-700",
    has_border: false,
  },
];

const narratives: NarrativaProps[] = [
  {
    titol: "Narrativa 1",
    descripcio: "Descripció de la narrativa 1",
  },
  {
    titol: "Narrativa 2",
    descripcio: "Descripció de la narrativa 2",
  },
  {
    titol: "Narrativa 3",
    descripcio: "Descripció de la narrativa 3",
  },
];

const seccions = [
  {
    from_color: "from-blue-100",
    to_color: "to-blue-100",
    color_text: "text-slate-950",
    narratives: [narratives[0]],
    imatge: "/flor_transparent.png",
    imatge_height: 500,
    imatge_width: 500,
    minifitxes: [],
  },
  {
    from_color: "from-blue-100",
    to_color: "to-blue-900",
    color_text: "text-slate-800",
    narratives: [narratives[1]],
    imatge: "/flor_transparent.png",
    minifitxes: [mini_fitxes[0]],
    imatge_height: 500,
    imatge_width: 500,
  },
  {
    from_color: "from-blue-900",
    to_color: "to-blue-900",
    color_text: "text-slate-200",
    narratives: [narratives[2]],
    minifitxes: [
      mini_fitxes[1],
      mini_fitxes[2],
      mini_fitxes[3],
      mini_fitxes[4],
    ],
    imatge_height: 500,
    imatge_width: 500,
  },
];

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
  console.log("activitats", activitats);
  const sections = activitats?.[SECTIONS_ACTIVITATS_NAME] || [];

  if (!activitats) {
    /* redirecciona a no trobat */
  }
  return (
    <div className="flex flex-nowrap flex-col lg:flex-row  content-start w-full ">
      {sections.map((section: any) => (
        <div
          key={section._key}
          className={cn(
            "w-100",
            "w-full lg:w-1/3 flex  flex-col  content-start",
            "lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r",
            `from-${section.from_color}` || "from-blue-100",
            `to-${section.to_color}` || "to-blue-100",
            `text-${section.text_color}` || "text-slate-950"
          )}
        >
          {section.elements.map((element: any) => {
            if (element._type === "Narrativa") {
              return (
                <Narrativa
                  key={element._id}
                  titol={element.titol}
                  descripcio={element.descripcio}
                />
              );
            }
            if (element._type === IMATGES_LIB_NAME) {
              console.log("element", element);
              console.log("element src", element.image);
              return (
                <div className="flex justify-center items-center h-full w-full ">
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
            return null; // Retorna null per elements que no coincideixen amb el tipus
          })}
        </div>
      ))}
    </div>
  );
}

/*


      {seccions.map((seccio, index) => (
        <div
          className={cn(
            "w-full lg:w-1/3 flex  flex-col  content-start",
            "lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r",
            seccio.from_color,
            seccio.to_color,
            seccio.color_text
          )}
          key={index}
        >
          <div className="px-4 pb-8">
            {seccio.narratives.map((narrativa, index) => (
              <Narrativa key={index} {...narrativa} />
            ))}
          </div>
          {seccio.imatge && (
            <div className="flex justify-center items-center h-full w-full ">
              <Image
                src={seccio.imatge} // La font de la imatge
                objectFit="contain" // Això assegura que l'imatge no es talli
                alt="Descripció de la imatge"
                height={seccio.imatge_height}
                width={seccio.imatge_width}
              />
            </div>
          )}

          {seccio.minifitxes.map((mini_fitxa, index) => (
            <div className="px-4">
              <MiniFitxa
                key={index}
                lang="ca"
                titol={{ ca: mini_fitxa.name }}
                container_classname="mb-6"
                subtitol={{ ca: mini_fitxa.role }}
                descripcio={{ ca: mini_fitxa.bio }}
                image={mini_fitxa.imageUrl}
                alt_image={{ ca: `Foto de ${mini_fitxa.name}` }}
                image_height={mini_fitxa.image_height}
                image_width={mini_fitxa.image_width}
                color_titol={mini_fitxa.color_titol}
                color_subtitol={mini_fitxa.color_subtitol}
                color_descripcio={mini_fitxa.color_descripcio}
                border_color={mini_fitxa.border_color}
                has_border={mini_fitxa.has_border}
                is_modal={mini_fitxa.is_modal}
              />
            </div>
          ))}
        </div>
      ))}
      */
