"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/hero";
import Historia from "./components/history";
import ContactMap from "./components/contactMap";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "backgroundImage",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
      required: true,
    },
    {
      name: "logo",
      type: "file",
    },
    {
      name: "subtitle",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Historia, {
  name: "Historia",
  inputs: [
    // Comença amb els paràmetres visuals principals.
    {
      name: "image",
      type: "file",
      required: true,
      helperText: "Imatge principal de l'història",
    },
    {
      name: "backgroundColor",
      type: "color",
      helperText: "Color de fons de l'història",
    },
    {
      name: "background_color_button",
      type: "color",
      helperText: "Color de fons del botó",
    },
    {
      name: "text_color_button",
      type: "color",
      helperText: "Color del text del botó",
    },

    // Després, detalls del contingut textual.
    {
      name: "title",
      type: "string",
      helperText: "Títol de l'història",
    },
    {
      name: "description",
      type: "richText",
      helperText: "Descripció detallada de l'història",
    },
    {
      name: "text_button",
      type: "string",
      helperText: "Text del botó",
    },

    // Configuracions d'enllaç i comportament.
    {
      name: "link_button",
      type: "string",
      helperText: "Enllaç al qual el botó dirigirà",
    },
    {
      name: "foto_esquerra",
      type: "boolean",
      helperText: "Determina si la foto ha d'estar a l'esquerra",
    },

    // Paràmetres tècnics i d'estil extra.
    {
      name: "extra_className",
      type: "string",
      helperText: "Classe extra per al component de Tailwind CSS",
    },
  ],
});

Builder.registerComponent(ContactMap, {
  name: "ContactMap",
  inputs: [
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#e5e7eb",
      helperText: "Color de fons del component de contacte",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Posa't en Contacte",
      helperText: "Títol del formulari de contacte",
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "Si tens alguna pregunta, no dubtis en contactar-nos. Estarem encantats d'atendre't.",
      helperText: "Descripció a mostrar al formulari de contacte",
    },
    {
      name: "formulari",
      type: "object",
      subFields: [
        { name: "text_nom", type: "string", defaultValue: "Nom complet" },
        {
          name: "text_email",
          type: "string",
          defaultValue: "Correu electrònic",
        },
        {
          name: "text_missatge",
          type: "string",
          defaultValue: "El teu missatge",
        },
        {
          name: "text_politica",
          type: "string",
          defaultValue:
            "Accepto la <a href='/privacy-policy'>política de privacitat</a> i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
        },
        { name: "text_enviar", type: "string", defaultValue: "Enviar" },
      ],
      helperText: "Textos dels camps del formulari",
    },
    {
      name: "messages",
      type: "object",
      subFields: [
        {
          name: "nameRequired",
          type: "string",
          defaultValue: "El nom és obligatori.",
        },
        {
          name: "emailRequired",
          type: "string",
          defaultValue: "L'email és obligatori.",
        },
        {
          name: "messageRequired",
          type: "string",
          defaultValue: "El missatge és obligatori.",
        },
        {
          name: "consentRequired",
          type: "string",
          defaultValue: "Has d'acceptar el consentiment de dades.",
        },
        { name: "sending", type: "string", defaultValue: "Enviant..." },
        {
          name: "sendSuccess",
          type: "string",
          defaultValue: "Missatge enviat! Gràcies 🌟",
        },
        {
          name: "sendError",
          type: "string",
          defaultValue: "No s'ha pogut enviar el missatge. Intenta-ho de nou.",
        },
      ],
      helperText: "Missatges per a la lògica d'enviament",
    },
    {
      name: "mapa",
      type: "object",
      subFields: [
        { name: "idioma", type: "string", defaultValue: "ca" },
        { name: "lloc", type: "string", defaultValue: "Lo Bram sccl" },
      ],
      helperText: "Configuració del mapa",
    },
    // Afegeix aquí qualsevol altre input que necessitis.
  ],
});
