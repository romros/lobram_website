"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./app/ui/hero";

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
      type: "string",
      required: true,
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
