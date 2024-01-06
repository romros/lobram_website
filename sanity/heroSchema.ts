import { type SchemaTypeDefinition } from "sanity";
import { localizedTextFields, localizedStringFields } from "./types";

export const HeroSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Capçalera",
  name: "capçalera",
  fields: [
    {
      name: "Key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar la historia, no es mostra a l'usuari.",
    },
    {
      name: "Ordre",
      type: "number",
      title: "Ordre",
      description: "Ordre de la historia dins la llista de històries.",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Image of the historia",
      options: {
        hotspot: true,
      },
    },
    {
      name: "foto_esquerra",
      type: "boolean",
      title: "Foto Esquerra",
      description: "Foto a l'esquerra",
    },
    {
      name: "title",
      type: "object",
      title: "Title",
      description: "Title of the historia",
      fields: localizedStringFields,
    },

    {
      name: "description",
      type: "object",
      title: "Description",
      description: "Description of the historia",
      fields: localizedTextFields,
    },
    {
      name: "text_button",
      type: "object",
      title: "Text Button",
      description: "Text of the button",
      fields: localizedTextFields,
    },
    {
      name: "link_button",
      type: "url",
      title: "Link Button",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel", "relative"],
        }),
      description: "Enllaç del botó",
    },
  ],
};
