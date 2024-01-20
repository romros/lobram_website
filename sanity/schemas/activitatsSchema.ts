import { type SchemaTypeDefinition } from "sanity";

import { HISTORIA_NAME } from "./historiaSchema";
import { PAGINES_NAME } from "./menuSchema";
import { HERO_NAME } from "./heroSchema";
import { CONTACT_MAP_NAME } from "./contactMapSchema";
import { IMATGES_LIB_NAME } from "./imageLibrarySchema";
import { MINIFITXES_NAME } from "./miniFitxaSchema";
import { NARRATIVA_NAME } from "./narrativaSchema";
import { IMATGE_SANITY } from "./ImatgeSchema";
import { localizedStringFields } from "./types";
import { array, object } from "zod";

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
      type: "object",
      fields: localizedStringFields,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Aquest text s'utilitzarà per construir la URL",
    },
    {
      name: "imatge",
      type: "reference",
      title: "Imatge",
      to: [{ type: "imageLibrary" }],
      description: "Imatge associada a la pàgina",
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
          groups: [
            {
              title: "Contingut",
              name: "contingut",
              default: true,
            },
            {
              title: "Estil",
              name: "estil",
            },
          ],
          fields: [
            {
              name: "title",
              title: "Nom de la Secció",
              type: "string",
              group: "contingut",
            },
            {
              name: "class_name_section",
              title: "Classe d'estil de la secció",
              type: "string",
              group: "estil",
            },

            {
              name: "elements",
              title: "Elements",
              type: "array",
              group: "contingut",
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

  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title, slug }) {
      return {
        title: `Pàgina d'activitat: ${title.ca}`,
        subtitle: `slug: ${slug.current}`,
      };
    },
  },
};
