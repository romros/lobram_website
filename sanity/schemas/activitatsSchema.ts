import { type SchemaTypeDefinition } from "sanity";

import { HISTORIA_NAME } from "./historiaSchema";
import { PAGINES_NAME } from "./menuSchema";
import { HERO_NAME } from "./heroSchema";
import { CONTACT_MAP_NAME } from "./contactMapSchema";
import { IMATGES_LIB_NAME } from "./imageLibrarySchema";
import { MINIFITXES_NAME } from "./miniFitxaSchema";
import { NARRATIVA_NAME } from "./narrativaSchema";
import { IMATGE_SANITY } from "./ImatgeSchema";

export const PAGINES_ACTIVITATS_NAME = "activity_page";
export const SECTIONS_ACTIVITATS_NAME = "sections_activity";
export const SECTION_ACTIVITATS_NAME = "section_activity";

const componentsList = [
  { type: HISTORIA_NAME },
  { type: HERO_NAME },
  { type: MINIFITXES_NAME },
  { type: NARRATIVA_NAME },
  { type: IMATGES_LIB_NAME },
];

export const activitySchema: SchemaTypeDefinition = {
  name: PAGINES_ACTIVITATS_NAME,
  title: "Pàgina d'Activitat",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Títol",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Aquest text s'utilitzarà per construir la URL",
    },
    {
      name: SECTIONS_ACTIVITATS_NAME,
      title: "Afegeix les seccions que vols mostrar",
      type: "array",
      of: [
        {
          name: SECTION_ACTIVITATS_NAME,
          title: "Secció",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Nom de la Secció",
              type: "string",
            },
            {
              name: "from_color",
              title: "Color de fons inicial. ",
              type: "string",
              description:
                "Veure paleta a https://tailwindcss.com/docs/customizing-colors. Exemple: blue-400",
            },
            {
              name: "to_color",
              title: "Color de fons final",
              type: "string",
            },
            {
              name: "text_color",
              title: "Color del text",
              type: "string",
            },
            {
              name: "elements",
              title: "Elements",
              type: "array",
              of: [
                {
                  name: "element",
                  title: "Element",
                  type: "reference",
                  to: componentsList, // Assegura't que això estigui definit correctament
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
