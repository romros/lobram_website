import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields } from "./types";

export const HeroSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Capçalera",
  name: "capsalera",
  fields: [
    {
      name: "Key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar la capçalera, no es mostra a l'usuari.",
    },
    {
      name: "Pagina",
      type: "reference",
      title: "Pagina",
      to: [{ type: "pagines" }],
    },

    {
      name: "title",
      type: "object",
      title: "Títol",
      description: "Títol de la capçalera",
      fields: localizedStringFields,
    },
    {
      name: "subtitle",
      type: "object",
      title: "Subtítol",
      description: "Subtítol de la capçalera",
      fields: localizedStringFields,
    },
    {
      name: "imatge",
      type: "reference",
      title: "Imatge",
      to: [{ type: "imageLibrary" }],
    },
    {
      name: "imatge_logo",
      type: "reference",
      title: "Logo",
      to: [{ type: "imageLibrary" }],
      description: "Logo si és que porta, si no no posar res",
    },
  ],
};
