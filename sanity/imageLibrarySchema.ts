import { type SchemaTypeDefinition } from "sanity";
import { localizedTextFields, localizedStringFields } from "./types";

export const imageLibrarySchema: SchemaTypeDefinition = {
  type: "document",
  title: "Llibreria d'Imatges",
  name: "imageLibrary",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Títol",
      description: "Un títol curt per a la imatge.",
    },
    {
      name: "image",
      type: "image",
      title: "Imatge",
      options: {
        hotspot: true, // Això permet als usuaris establir un 'hotspot' o punt focal per a les imatges.
      },
      fields: [
        {
          name: "alt",
          type: "object",
          title: "Text Alternatiu (Alt)",
          description:
            "Text descriptiu de la imatge per a l'accessibilitat i SEO. Això hauria de ser específic de cada idioma.",
          fields: localizedStringFields,
        },
      ],
    },
    {
      name: "description",
      type: "object",
      title: "Descripció",
      description: "Una descripció més llarga de la imatge.",
      fields: localizedStringFields,
    },
  ],
};
