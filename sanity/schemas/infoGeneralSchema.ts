// Esquema de la informacio general del Sitemap
// Com:
// - Títol	del lloc
// - Subtítol del lloc
// logo del lloc

import { SchemaTypeDefinition } from "sanity";
import { localizedStringFields } from "./types";

export const INFO_GENERAL_NAME = "infoGeneral";
export const InfoGeneralSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Informació General",
  name: INFO_GENERAL_NAME,
  fields: [
    {
      name: "title",
      title: "Títol del lloc",
      description: "El títol del lloc web.",
      type: "object",
      fields: localizedStringFields,
    },
    {
      name: "subtitle",
      title: "Subtítol del lloc",
      description: "El subtítol del lloc web.",
      type: "object",
      fields: localizedStringFields,
    },
    {
      name: "imatge_logo",
      type: "reference",
      title: "Logo",
      to: [{ type: "imageLibrary" }],
      description: "Logo si és que porta, si no no posar res",
    },
  ],
  preview: {
    select: {
      title: "title.ca",
      subtitle: "subtitle.ca",
      media: "imatge_logo.image",
    },
  },
};
