import { type SchemaTypeDefinition } from "sanity";
import { localizedTextFields, localizedStringFields } from "./types";

export const IMATGE_SANITY = "Imatge";
export const ImatgeSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Llibreria d'Imatges",
  name: IMATGE_SANITY,
  fields: [
    {
      name: "Key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar la imatge, no es mostra a l'usuari.",
    },
    {
      name: "imatge",
      type: "reference",
      title: "Imatge",
      to: [{ type: "imageLibrary" }],
    },
  ],
};
