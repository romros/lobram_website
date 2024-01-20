import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields, localizedTextFields } from "./types";

export const MINIFITXES_NAME = "miniFitxa";
export const MiniCardSchema: SchemaTypeDefinition = {
  type: "document",
  title: "MiniFitxa",
  name: MINIFITXES_NAME,
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
      name: "key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar la miniFitxa, no es mostra a l'usuari.",
      group: "contingut",
    },
    {
      name: "titol",
      type: "object",
      title: "Títol",
      description: "Títol de la miniFitxa",
      fields: localizedStringFields,
      group: "contingut",
    },
    {
      name: "subtitol",
      type: "object",
      title: "Subtítol",
      description: "Subtítol de la miniFitxa",
      fields: localizedStringFields,
      group: "contingut",
    },
    {
      name: "descripcio",
      type: "object",
      title: "Descripció",
      description: "Descripció de la miniFitxa",
      fields: localizedTextFields,
      group: "contingut",
    },
    {
      name: "image",
      type: "reference",
      title: "Imatge",
      to: [{ type: "imageLibrary" }],
      group: "contingut",
    },
    {
      name: "is_modal",
      type: "boolean",
      title: "És modal?",
      description: "És modal? Obrim una finstra amb la imatge?",
      group: "contingut",
    },
    {
      name: "has_border",
      type: "boolean",
      title: "Te border?",
      description: "Té un rectangle al voltant de la imatge?",
      group: "contingut",
    },
    /*
    camps per estil. seran classes de tailwind
    */
    {
      name: "classname",
      type: "string",
      title: "Classname",
      description: "Classe general de tailwind per aquesta miniFitxa",
      group: "estil",
    },
    {
      name: "titol_classname",
      type: "string",
      title: "Classname del títol",
      description: "Classe de tailwind per al títol",
      group: "estil",
    },
    {
      name: "subtitol_classname",
      type: "string",
      title: "Classname del subtítol",
      description: "Classe de tailwind per al subtítol",
      group: "estil",
    },
    {
      name: "descripcio_classname",
      type: "string",
      title: "Classname de la descripció",
      description: "Classe de tailwind per a la descripció",
      group: "estil",
    },
    {
      name: "image_classname",
      type: "string",
      title: "Classname de la imatge",
      description: "Classe de tailwind per a la imatge",
      group: "estil",
    },
    {
      name: "modal_classname",
      type: "string",
      title: "Classname del modal",
      description: "Classe de tailwind per al modal",
      group: "estil",
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
