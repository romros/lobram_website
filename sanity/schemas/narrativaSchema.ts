import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields, localizedTextFields } from "./types";

/*
export interface NarrativaProps {
  titol: string;
  titol_classname?: string;
  descripcio: string;
  descripcio_classname?: string;
  p_classname?: string;
}
*/
export const NARRATIVA_NAME = "Narrativa";
export const NarrativaSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Narrativa",
  name: NARRATIVA_NAME,
  fields: [
    {
      name: "titol",
      type: "object",
      title: "Títol",
      description: "Títol de la narrativa",
      fields: localizedStringFields,
    },
    {
      name: "descripcio",
      type: "object",
      title: "Descripció",
      description: "Descripció de la narrativa",
      fields: localizedTextFields,
    },
  ],
  preview: {
    select: {
      title: "titol.ca",
      subtitle: "descripcio.ca",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        /* els 80 primers caràcters de la descripció concatenad amb ...*/
        subtitle: `${subtitle?.substring(0, 80)}...`,
      };
    },
  },
};
