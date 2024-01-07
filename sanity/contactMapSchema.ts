import { type SchemaTypeDefinition } from "sanity";
import { localizedStringFields } from "./types";

export const ContactMapSchema: SchemaTypeDefinition = {
  type: "document",
  title: "Mapa de Contacte",
  name: "contactMap",
  fields: [
    {
      name: "Key",
      type: "string",
      title: "Identificador",
      description: "Nom per identificar, no es mostra a l'usuari.",
    },
    {
      name: "Pagina",
      type: "reference",
      title: "Pagina",
      description:
        "Pagina a la que pertany el mapa. DEIXAR EN BLANC PEL COMU A TOTES LES PÀGINES",
      to: [{ type: "pagines" }],
    },
    {
      name: "te_mapa",
      type: "boolean",
      title: "Té Mapa",
      description: "Indica si es mostra un mapa o no.",
    },
    {
      name: "title",
      type: "object",
      title: "Títol",
      description: "Títol de la secció de contacte",
      fields: localizedStringFields,
    },
    {
      name: "description",
      type: "object",
      title: "Descripció",
      description: "Descripció de la secció de contacte",
      fields: localizedStringFields,
    },
    {
      name: "formulari",
      type: "object",
      title: "Formulari",
      fields: [
        {
          name: "text_nom",
          type: "object",
          title: "Text del Nom",
          fields: localizedStringFields,
        },
        {
          name: "text_email",
          type: "object",
          title: "Text de l'Email",
          fields: localizedStringFields,
        },
        {
          name: "text_missatge",
          type: "object",
          title: "Text del Missatge",
          fields: localizedStringFields,
        },
        {
          name: "text_politica",
          type: "object",
          title: "Text de la Política",
          fields: localizedStringFields,
        },
        {
          name: "text_enviar",
          type: "object",
          title: "Text del Botó Enviar",
          fields: localizedStringFields,
        },
      ],
    },
    {
      name: "messages",
      type: "object",
      title: "Missatges",
      fields: [
        {
          name: "nameRequired",
          type: "object",
          title: "Nom Obligatori",
          fields: localizedStringFields,
        },
        {
          name: "emailRequired",
          type: "object",
          title: "Email Obligatori",
          fields: localizedStringFields,
        },
        {
          name: "messageRequired",
          type: "object",
          title: "Missatge Obligatori",
          fields: localizedStringFields,
        },
        {
          name: "consentRequired",
          type: "object",
          title: "Consentiment Obligatori",
          fields: localizedStringFields,
        },
        {
          name: "sending",
          type: "object",
          title: "Enviant",
          fields: localizedStringFields,
        },
        {
          name: "sendSuccess",
          type: "object",
          title: "Missatge Enviat",
          fields: localizedStringFields,
        },
        {
          name: "sendError",
          type: "object",
          title: "Error d'Enviament",
          fields: localizedStringFields,
        },
      ],
    },
    {
      name: "adress",
      type: "string",
      title: "Adreça",
    },
  ],
};
