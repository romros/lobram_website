import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields, localizedTextFields } from "./types";

export const MINIFITXES_NAME = "miniFitxa";
export const MiniCardSchema: SchemaTypeDefinition = {
  type: "document",
  title: "MiniFitxa",
  name: MINIFITXES_NAME,
  fields: [
    {
      name: "key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar la miniFitxa, no es mostra a l'usuari.",
    },
    {
      name: "titol",
      type: "object",
      title: "Títol",
      description: "Títol de la miniFitxa",
      fields: localizedStringFields,
    },
    {
      name: "subtitol",
      type: "object",
      title: "Subtítol",
      description: "Subtítol de la miniFitxa",
      fields: localizedStringFields,
    },
    {
      name: "descripcio",
      type: "object",
      title: "Descripció",
      description: "Descripció de la miniFitxa",
      fields: localizedTextFields,
    },
    {
      name: "image",
      type: "reference",
      title: "Imatge",
      to: [{ type: "imageLibrary" }],
    },
    {
      name: "is_modal",
      type: "boolean",
      title: "És modal?",
      description: "És modal? Obrim una finstra amb la imatge?",
    },
    {
      name: "has_border",
      type: "boolean",
      title: "Te border?",
      description: "Té un rectangle al voltant de la imatge?",
    },
  ],
  preview: {
    select: {
      title: "key",
      subtitle: "subtitol.ca",
      media: "image.image",
    },
  },
};
/*
 */
