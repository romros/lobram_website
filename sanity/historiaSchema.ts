import { type SchemaTypeDefinition } from "sanity";

/*
create historiaSchema of type SchemaTypeDefinition
base in the following interface:
type HistoriaProps = {
  lang?: string;
  image: string;
  backgroundColor?: string;
  title_font?: string;
  description_font?: string;
  foto_esquerra?: boolean;
  title?: LocalizedText;
  description?: LocalizedText;
  text_button?: LocalizedText;
  background_color_button?: string;
  text_color_button?: string;
  link_button?: string;
  extra_className?: string;
  is_markdown?: boolean;
};
*/
export const historiaSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Historia",
  name: "historia",
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
      name: "lang",
      type: "string",
      title: "Language",
      description: "Language of the historia",
      options: {
        list: [
          { title: "Català", value: "ca" },
          { title: "Castellano", value: "es" },
        ],
      },
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
      fields: [
        {
          name: "ca",
          type: "string",
          title: "Català",
          description: "Title in catalan",
        },
        {
          name: "es",
          type: "string",
          title: "Castellano",
          description: "Title in castellano",
        },
      ],
    },

    {
      name: "description",
      type: "object",
      title: "Description",
      description: "Description of the historia",
      fields: [
        {
          name: "ca",
          type: "text",
          title: "Català",
          description: "Description in catalan",
        },
        {
          name: "es",
          type: "text",
          title: "Castellano",
          description: "Description in castellano",
        },
      ],
    },
    {
      name: "text_button",
      type: "object",
      title: "Text Button",
      description: "Text of the button",
      fields: [
        {
          name: "ca",
          type: "string",
          title: "Català",
          description: "Text in catalan",
        },
        {
          name: "es",
          type: "string",
          title: "Castellano",
          description: "Text in castellano",
        },
      ],
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
      description: "Link of the button",
    },
  ],
};
