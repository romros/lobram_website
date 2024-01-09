import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields } from "./types";

export const PAGINES_NAME = "pagines";
export const PaginesSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Pagines",
  name: PAGINES_NAME,
  fields: [
    {
      name: "key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar el titol.",
    },
    {
      name: "ordre",
      type: "number",
      title: "Ordre",
      description: "Ordre dins el menu",
    },
    {
      name: "title",
      type: "object",
      title: "Títol",
      description: "Títol del menu",
      fields: localizedStringFields,
    },
    {
      name: "href",
      type: "url",
      title: "Link",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel", "relative"],
        }),
      description: "Enllaç",
    },
  ],
};
