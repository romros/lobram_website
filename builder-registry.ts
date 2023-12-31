"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./app/ui/hero";
import Historia from "./components/history";

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
      type: "longText",
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
