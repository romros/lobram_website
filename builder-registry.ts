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
    {
      name: "backgroud_color_button",
      type: "color",
    },
    {
      name: "backgroundColor",
      type: "color",
    },
    {
      name: "description",
      type: "longText",
    },
    {
      name: "foto_esquerra",
      type: "boolean",
    },
    {
      name: "hover_backgroud_color_button",
      type: "color",
    },
    {
      name: "hover_text_color_button",
      type: "string",
    },
    {
      name: "image",
      type: "file",
      required: true,
    },
    {
      name: "link_button",
      type: "string",
    },
    {
      name: "text_button",
      type: "string",
    },
    {
      name: "text_color_button",
      type: "color",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});
